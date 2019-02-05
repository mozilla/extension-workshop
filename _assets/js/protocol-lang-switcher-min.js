if (void 0 === Mzp) var Mzp = {};
!(function() {
  'use strict';
  var a = {
    switchPath: function(t, e) {
      var i = t.pathname.slice(1).split('/'),
        n = '/' + i[0] + '/',
        a;
      return (
        !!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(n) &&
        '/' + e + '/' + i.slice(1).join('/') + t.search
      );
    },
    doRedirect: function(t) {
      t && (window.location.href = t);
    },
    init: function(n) {
      for (
        var t = document.querySelectorAll('.mzp-js-language-switcher-select'),
          e = 0;
        e < t.length;
        e++
      )
        t[e].setAttribute('data-previous-language', t[e].value),
          t[e].addEventListener(
            'change',
            function(t) {
              var e = t.target.value,
                i = t.target.getAttribute('data-previous-language');
              'function' == typeof n && n(i, e),
                a.doRedirect(a.switchPath(window.location, e));
            },
            !1,
          );
    },
  };
  window.Mzp.LangSwitcher = a;
})();
