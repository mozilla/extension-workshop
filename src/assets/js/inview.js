(function (d) {
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    console.debug('Inview disabled for touch device.');
    return;
  }

  var p = {},
    e,
    a,
    h = document,
    i = window,
    f = h.documentElement,
    j = d.expando;
  d.event.special.inview = {
    add: function (a) {
      p[a.guid + '-' + this[j]] = { data: a, $element: d(this) };
    },
    remove: function (a) {
      try {
        delete p[a.guid + '-' + this[j]];
      } catch (d) {}
    },
  };
  d(i).bind('scroll resize', function () {
    e = a = null;
  });
  !f.addEventListener &&
    f.attachEvent &&
    f.attachEvent('onfocusin', function () {
      a = null;
    });
  setInterval(function () {
    var k = d(),
      j,
      n = 0;
    d.each(p, function (a, b) {
      var c = b.data.selector,
        d = b.$element;
      k = k.add(c ? d.find(c) : d);
    });
    if ((j = k.length)) {
      var b;
      if (!(b = e)) {
        var g = { height: i.innerHeight, width: i.innerWidth };
        if (!g.height && ((b = h.compatMode) || !d.support.boxModel))
          ((b = 'CSS1Compat' === b ? f : h.body),
            (g = { height: b.clientHeight, width: b.clientWidth }));
        b = g;
      }
      e = b;
      for (
        a = a || {
          top: i.pageYOffset || f.scrollTop || h.body.scrollTop,
          left: i.pageXOffset || f.scrollLeft || h.body.scrollLeft,
        };
        n < j;
        n++
      )
        if (d.contains(f, k[n])) {
          b = d(k[n]);
          var l = b.height(),
            m = b.width(),
            c = b.offset(),
            g = b.data('inview');
          if (!a || !e) break;
          c.top + l > a.top &&
          c.top < a.top + e.height &&
          c.left + m > a.left &&
          c.left < a.left + e.width
            ? ((m =
                a.left > c.left
                  ? 'right'
                  : a.left + e.width < c.left + m
                    ? 'left'
                    : 'both'),
              (l =
                a.top > c.top
                  ? 'bottom'
                  : a.top + e.height < c.top + l
                    ? 'top'
                    : 'both'),
              (c = m + '-' + l),
              (!g || g !== c) &&
                b.data('inview', c).trigger('inview', [!0, m, l]))
            : g && b.data('inview', !1).trigger('inview', [!1]);
        }
    }
  }, 250);
})(jQuery);
