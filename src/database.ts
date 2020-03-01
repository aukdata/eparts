
type Func = () => void;

export const Database = {
  insert: <T>(part: T, onload: Func = () => undefined, onerror: Func = () => undefined) =>
  {
    const request = new XMLHttpRequest()
    request.open('POST', 'https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec')
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = onload;
    request.onerror = onerror;
    request.send(encodeURIComponent(JSON.stringify({ op: 'insert', part: part })));
  },

  update: <T>(part: T, onload: Func = () => undefined, onerror: Func = () => undefined) =>
  {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = onload;
    request.onerror = onerror;
    request.send(encodeURIComponent(JSON.stringify({ op: 'update', part: part })));
  },

  remove: (id: string, onload: Func = () => undefined, onerror: Func = () => undefined) =>
  {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = onload;
    request.onerror = onerror;
    request.send(encodeURIComponent(JSON.stringify({ op: 'remove', id: id })));
  },

  enumerate: <T>(onload: (response: T) => void) =>
  {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://script.google.com/macros/s/AKfycbw7vHCzXf2ZyZz29sHwLmDgLhCdKtljRtu8l8GLoCAYAM22gORx/exec');
    request.responseType = 'json';
    request.onload = () => {
        onload(request.response);
    }
    request.send();
  },
}
