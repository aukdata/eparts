<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title><v-icon>fas fa-boxes</v-icon> eparts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        icon
        @click.stop="dialog = true"
      >
        <v-icon>fas fa-plus-circle</v-icon>
      </v-btn>

      <v-btn
        text
        icon
        :disabled="processing"
        @click="refresh()"
      >
        <v-icon>fas fa-sync</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        prepend-inner-icon="fa-search"
        label="検索"

        single-line
        hide-details
        outlined
        clearable
      ></v-text-field>
    </v-app-bar>

    <v-content>
      <v-data-table
        :headers="headers"
        :items="parts"
        :search="search"
        item-key="index"

        locale="ja-JP"
        class="parts-table"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="pr-2" color="blue" :disabled="processing" @blur="updatePart(item)" @click="item.count++"> fas fa-plus </v-icon>
          <v-icon small class="pr-2" color="red" :disabled="processing" @blur="updatePart(item)" @click="item.count--"> fas fa-minus </v-icon>
          <v-icon small class="pr-6" color="green" @click="startEditingPart(item)"> fas fa-edit </v-icon>
          <v-icon small class="pr-2" color="lightgray" :disabled="processing" @click="deletePart(item)"> fas fa-trash </v-icon>
        </template>
        <template v-slot:item.count="{ item }">
          {{ item.count >= 0 ? item.count : '─' }}
        </template>
      </v-data-table>
    </v-content>

    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title>{{ dialogTitle }}</v-card-title>
        <v-card-text>
          <v-text-field v-model="part.category" :rules="[ rules.required ]" label="分類"></v-text-field>
          <v-text-field v-model="part.model" label="型番"></v-text-field>
          <v-text-field v-model.number="part.count" type="number" hint="負の数でカウントしない" label="個数"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="hideDialog()">キャンセル</v-btn>
          <v-btn :disabled="processing" text color="blue" @click="save()">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      absolute
      bottom
    >
      {{ message }}
      <v-btn text @click="snackbar = false">閉じる</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import shortid from 'shortid';
import { Database } from '@/database';

type Part = {
  category: string;
  model: string;
  count: number;
};
type PartWithId = Part & { id: string };

@Component({})

export default class App extends Vue
{
  search = '';
  dialog = false;
  message = '';

  processing = false;

  default_part: PartWithId = {
    id: '',
    category: '',
    model: '',
    count: 1,
  };
  part: PartWithId = { ...this.default_part };

  headers = [
    { text: 'ID', value: 'id', width: 20, filterable: false },
    { text: '種類', value: 'category' },
    { text: '型番', value: 'model' },
    { text: '個数', value: 'count', filterable: false },
    { text: '操作', value: 'actions', sortable: false, filterable: false },
  ];
  parts: PartWithId[] = [];

  rules = {
    required: () => !!this.part.category || '必須',
  };

  get dialogTitle()
  {
    return this.part.id === '' ? '追加' : '編集';
  }

  get snackbar()
  {
    return this.message !== '';
  }
  set snackbar(value)
  {
    if (!value) this.message = '';
  }

  created()
  {
    this.refresh();
  }

  refresh()
  {
    this.parts = [];
    this.processing = true;
    Database.enumerate<PartWithId[]>(response => {
      this.parts = response;
      this.processing = false;
    }, () => {
      this.message = '読み込み中にエラーが発生しました';
      this.processing = false;
    });
  }

  startEditingPart(part: PartWithId)
  {
    this.part = { ...part };
    this.dialog = true;
  }

  addPart(part: Part)
  {
      const NewPart = {
        ...part,
        id: shortid.generate(),
      };

      this.message = '追加しています...';
      this.processing = true;
      Database.insert(NewPart, () => {
        this.parts.push(NewPart);
        this.message = '追加しました';
        this.processing = false;

        this.hideDialog();
      }, () => {
        this.message = '追加中にエラーが発生しました';
        this.processing = false;
      });
  }

  deletePart(part: PartWithId)
  {
    this.message = '削除しています...';
    this.processing = true;
    Database.remove(part.id, () => {
      const index = this.parts.indexOf(part);
      this.parts.splice(index, 1);

      this.message = '削除しました';
      this.processing = false;
    }, () => {
      this.message = '削除中にエラーが発生しました';
      this.processing = false;
    });
  }

  updatePart(part: PartWithId)
  {
    this.message = '更新しています...';
    this.processing = true;
    part.count = Math.max(part.count, -1);

    Database.update(part, () => {
      const index = this.parts.findIndex(v => v.id === part.id);
      Object.assign(this.parts[index], part);

      this.message = '更新しました';
      this.processing = false;
      this.hideDialog();
    }, () => {
      this.message = '更新中にエラーが発生しました';
      this.processing = false;
    });
  }

  save()
  {
    if (this.part.category === '')
    {
      this.message = '分類が入力されていません';
      return;
    }

    if (this.part.id === '')
    {
      this.addPart(this.part);
    }
    else
    {
      this.updatePart(this.part);
    }
  }

  hideDialog()
  {
    this.dialog = false;
    this.part = { ...this.default_part };
  }
}

</script>
