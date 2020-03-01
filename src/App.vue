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
        <v-icon>fas fa-plus</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        prepend-inner-icon="fa-search"
        label="検索"

        single-line
        hide-details
        outlined
      ></v-text-field>
    </v-app-bar>

    <v-content>
      <v-data-table
        :headers="headers"
        :items="parts"
        :search="search"
        item-key="index"

        loading="No parts registered."
        locale="ja-JP"

        disable-sort
        hide-default-footer

        class="parts-table"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editPart(item)"
          >
            fas fa-edit
          </v-icon>
          <v-icon
            small
            @click="deletePart(item)"
          >
            fas fa-trash
          </v-icon>
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
          <v-text-field v-model="part.category" label="分類" required></v-text-field>
          <v-text-field v-model="part.model" label="型番" required></v-text-field>
          <v-text-field v-model.number="part.count" label="個数" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="hideDialog()">キャンセル</v-btn>
          <v-btn text color="blue" @click="save()">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      :value="snackbar"
    >
      {{ message }}
      <v-btn text @click="message = ''">閉じる</v-btn>
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

  index = -1;
  part: PartWithId = {
    id: '',
    category: '',
    model: '',
    count: 1,
  };
  default_part: PartWithId = {
    id: '',
    category: '',
    model: '',
    count: 1,
  };

  headers = [
    { text: 'ID', value: 'id', width: 20 },
    { text: '種類', value: 'category' },
    { text: '型番', value: 'model' },
    { text: '個数', value: 'count' },
    { text: '操作', value: 'actions', sortable: false },
  ];
  parts: PartWithId[] = [];

  get dialogTitle()
  {
    return this.index === -1 ? '追加' : '編集';
  }

  get snackbar()
  {
    return this.message !== '';
  }

  created()
  {
    this.refresh();
  }

  refresh()
  {
    this.parts = [];
    Database.enumerate<PartWithId[]>(response => {
      this.parts = response;
    });
  }

  editPart(part: PartWithId)
  {
    this.index = this.parts.indexOf(part);
    this.part = { ...part };
    this.dialog = true;
  }

  deletePart(part: PartWithId)
  {
    Database.remove(part.id, () => {
      const index = this.parts.indexOf(part);
      this.parts.splice(index, 1);

      this.message = '削除しました';
    }, () => {
      this.message = '削除中にエラーが発生しました';
    });
  }

  save()
  {
    if (this.index === -1)
    {
      const NewPart = {
        ...this.part,
        id: shortid.generate(),
      };

      Database.insert(NewPart, () => {
        this.parts.push(NewPart);
        this.message = '追加しました';

        this.hideDialog();
      }, () => {
        this.message = '追加中にエラーが発生しました';
      });
    }
    else
    {
      Database.update(this.part, () => {
        Object.assign(this.parts[this.index], this.part);
        this.message = '更新しました';

        this.hideDialog();
      }, () => {
        this.message = '更新中にエラーが発生しました';
      });
    }
  }

  hideDialog()
  {
    this.dialog = false;
    this.index = -1;
    this.part = { ...this.default_part };
  }

  generateId()
  {
    return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
  }
}

</script>
