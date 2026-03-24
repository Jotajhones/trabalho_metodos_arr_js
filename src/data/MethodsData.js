
import { includes, indexOf, some, every, find } from '../scripts/algorithms.js';

export const methodsData = [
    {
        id: "includes",
        nome: "Array.prototype.includes()",
        tipo: "Método de Instância",
        resumo: "Verifica se um array contém um valor exato, retornando true (se encontrar) ou false. Ideal para verificações simples e rápidas.",
        sintaxe: "arr.includes(elementoBusca, indiceInicial)",
        polyfill: `
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0; 
    if (len === 0) {
      return false;
    }
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    function sameValueZero(x, y) {
      return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
    }
    while (k < len) {
      if (sameValueZero(o[k], searchElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}
        `,
        algorithm: includes
    },
    {
        id: "indexof",
        nome: "Array.prototype.indexOf()",
        tipo: "Método de Instância",
        resumo: "Busca um valor exato e retorna o índice (0, 1, 2...) onde ele está localizado, ou -1 caso não exista. Útil quando você precisa saber *onde* o item está.",
        sintaxe: "arr.indexOf(elementoBusca, indiceInicial)",
        polyfill: `
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (member, startFrom) {
    if (this == null) {
      throw new TypeError("Array.prototype.indexOf() - can't convert \`" + this + "\` to object");
    }
    var index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;
    if (index >= length) {
      return -1;
    }
    if (index < 0) {
      index = Math.max(length + index, 0);
    }
    while (index < length) {
      if (index in that && that[index] === member) {
        return index;
      }
      index++;
    }
    return -1;
  };
}
        `,
        algorithm: indexOf
    },
    {
        id: "some",
        nome: "Array.prototype.some()",
        tipo: "Método de Instância",
        resumo: "Testa se ao menos um dos elementos no array passa em uma condição lógica (função). Retorna true ou false.",
        sintaxe: "arr.some(callback)",
        polyfill: `
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }
    if (typeof fun !== 'function') {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true; 
      }
    }
    return false; 
  };
}
        `,
        algorithm: some
    },
    {
        id: "every",
        nome: "Array.prototype.every()",
        tipo: "Método de Instância",
        resumo: "Testa se TODOS os elementos do array passam em uma condição lógica (função). Retorna true se todos passarem, ou false se pelo menos um falhar.",
        sintaxe: "arr.every(callback)",
        polyfill: `
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.every called on null or undefined');
    }
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;
    for (var i = 0; i < len; i++) {
      if (i in t && !callbackfn.call(thisArg, t[i], i, t)) {
        return false; 
      }
    }
    return true; 
  };
}
        `,
        algorithm: every
    },
    {
        id: "find",
        nome: "Array.prototype.find()",
        tipo: "Método de Instância",
        resumo: "Busca com base em uma condição (função) e retorna o *próprio elemento* encontrado. Excelente para resgatar dados completos de um objeto dentro de uma lista.",
        sintaxe: "arr.find(callback)",
        polyfill: `
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    var thisArg = arguments[1];
    var k = 0;
    while (k < len) {
      var kValue = o[k];
      if (predicate.call(thisArg, kValue, k, o)) {
        return kValue; 
      }
      k++;
    }
    return undefined; 
  };
}
        `,
        algorithm: find
    }
];