<<<<<<< HEAD
(()=>{var e={672:()=>{}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";var e=r(672);const o=new class{makeSound(){return"bow wow"}};console.log(o.makeSound()),console.log(3),console.log((0,e.counter)())})()})();
=======
(() => {
  'use strict';
  function e(e, n) {
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var n = new ((function () {
    function n() {
      !(function (e, n) {
        if (!(e instanceof n))
          throw new TypeError('Cannot call a class as a function');
      })(this, n);
    }
    var o, r;
    return (
      (o = n),
      (r = [
        {
          key: 'makeSound',
          value: function () {
            return 'bow wow';
          },
        },
      ]) && e(o.prototype, r),
      Object.defineProperty(o, 'prototype', { writable: !1 }),
      n
    );
  })())();
  console.log(n.makeSound()), console.log(3), console.log('hello');
})();
>>>>>>> upstream/react
