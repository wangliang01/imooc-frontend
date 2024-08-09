/** v2.9.14 | MIT Licensed */ !(function (d) {
  'use strict'
  var t
  var h = d.document
  var m = { modules: {}, status: {}, timeout: 10, event: {} }
  var n = function () {
    this.v = '2.9.14'
  }
  var e = d.LAYUI_GLOBAL || {}
  var v =
    ((t = h.currentScript
      ? h.currentScript.src
      : (function () {
          for (var t, e = h.scripts, o = e.length - 1, n = o; n > 0; n--)
            if (e[n].readyState === 'interactive') {
              t = e[n].src
              break
            }
          return t || e[o].src
        })()),
    (m.dir = e.dir || t.substring(0, t.lastIndexOf('/') + 1)))
  var g = function (t, e) {
    ;(e = e || 'log'), d.console && console[e] && console[e]('layui error hint: ' + t)
  }
  var b = 'undefined' != typeof opera && '[object Opera]' === opera.toString()
  var N = (m.builtin = {
    lay: 'lay',
    layer: 'layer',
    laydate: 'laydate',
    laypage: 'laypage',
    laytpl: 'laytpl',
    form: 'form',
    upload: 'upload',
    dropdown: 'dropdown',
    transfer: 'transfer',
    tree: 'tree',
    table: 'table',
    treeTable: 'treeTable',
    element: 'element',
    rate: 'rate',
    colorpicker: 'colorpicker',
    slider: 'slider',
    carousel: 'carousel',
    flow: 'flow',
    util: 'util',
    code: 'code',
    jquery: 'jquery',
    all: 'all',
    'layui.all': 'layui.all'
  })
  var s =
    ((n.prototype.cache = m),
    (n.prototype.define = function (t, n) {
      return (
        typeof t == 'function' && ((n = t), (t = [])),
        this.use(
          t,
          function () {
            var o = function (t, e) {
              ;(layui[t] = e), (m.status[t] = !0)
            }
            return (
              typeof n == 'function' &&
                n(function (t, e) {
                  o(t, e),
                    (m.callback[t] = function () {
                      n(o)
                    })
                }),
              this
            )
          },
          null,
          'define'
        ),
        this
      )
    }),
    (n.prototype.use = function (o, t, e, n) {
      var r
      var i
      var a = this
      var u = (m.dir = m.dir || v)
      var l = h.getElementsByTagName('head')[0]
      var s =
        ((o = typeof o == 'string' ? [o] : typeof o == 'function' ? ((t = o), ['all']) : o),
        d.jQuery &&
          jQuery.fn.on &&
          (a.each(o, function (t, e) {
            'jquery' === e && o.splice(t, 1)
          }),
          (layui.jquery = layui.$ = jQuery)),
        o[0])
      var c = 0
      function p(t, e) {
        var o = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/
        ;(t.type !== 'load' && !o.test((t.currentTarget || t.srcElement).readyState)) ||
          ((m.modules[s] = e),
          l.removeChild(r),
          (function n() {
            return ++c > (1e3 * m.timeout) / 4 ? g(s + ' is not a valid module', 'error') : void (m.status[s] ? y() : setTimeout(n, 4))
          })())
      }
      function y() {
        e.push(layui[s]),
          o.length > 1
            ? a.use(o.slice(1), t, e, n)
            : typeof t == 'function' &&
              (layui.jquery && typeof layui.jquery == 'function' && n !== 'define'
                ? layui.jquery(function () {
                    t.apply(layui, e)
                  })
                : t.apply(layui, e))
      }
      return (
        (e = e || []),
        (m.host = m.host || (u.match(/\/\/([\s\S]+?)\//) || ['//' + location.host + '/'])[0]),
        o.length === 0 || (layui['layui.all'] && N[s])
          ? y()
          : ((i = (i = (N[s] ? u + 'modules/' : (!/^\{\/\}/.test(a.modules[s]) && m.base) || '') + (a.modules[s] || s) + '.js').replace(/^\{\/\}/, '')),
            !m.modules[s] && layui[s] && (m.modules[s] = i),
            m.modules[s]
              ? (function f() {
                  return ++c > (1e3 * m.timeout) / 4 ? g(s + ' is not a valid module', 'error') : void (typeof m.modules[s] == 'string' && m.status[s] ? y() : setTimeout(f, 4))
                })()
              : (((r = h.createElement('script'))['async'] = !0),
                (r.charset = 'utf-8'),
                (r.src = i + ((u = !0 === m.version ? m.v || new Date().getTime() : m.version || '') ? '?v=' + u : '')),
                l.appendChild(r),
                !r.attachEvent || (r.attachEvent.toString && r.attachEvent.toString().indexOf('[native code') < 0) || b
                  ? r.addEventListener(
                      'load',
                      function (t) {
                        p(t, i)
                      },
                      !1
                    )
                  : r.attachEvent('onreadystatechange', function (t) {
                      p(t, i)
                    }),
                (m.modules[s] = i))),
        a
      )
    }),
    (n.prototype.disuse = function (t) {
      var o = this
      return (
        (t = o.isArray(t) ? t : [t]),
        o.each(t, function (t, e) {
          m.status[e], delete o[e], delete N[e], delete o.modules[e], delete m.status[e], delete m.modules[e]
        }),
        o
      )
    }),
    (n.prototype.getStyle = function (t, e) {
      t = t.currentStyle || d.getComputedStyle(t, null)
      return t[t.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](e)
    }),
    (n.prototype.link = function (o, n, t) {
      var r = this
      var e = h.getElementsByTagName('head')[0]
      var i = h.createElement('link')
      var a = 'layuicss-' + ((t = 'string' == typeof n ? n : t) || o).replace(/\.|\//g, '')
      var u = 'creating'
      var l = 0
      return (
        (i.href = o + (m.debug ? '?v=' + new Date().getTime() : '')),
        (i.rel = 'stylesheet'),
        (i.id = a),
        (i.media = 'all'),
        h.getElementById(a) || e.appendChild(i),
        typeof n == 'function' &&
          (function s(t) {
            var e = h.getElementById(a)
            return ++l > (1e3 * m.timeout) / 100
              ? g(o + ' timeout')
              : void (parseInt(r.getStyle(e, 'width')) === 1989
                  ? (t === u && e.removeAttribute('lay-status'), e.getAttribute('lay-status') === u ? setTimeout(s, 100) : n())
                  : (e.setAttribute('lay-status', u),
                    setTimeout(function () {
                      s(u)
                    }, 100)))
          })(),
        r
      )
    }),
    (n.prototype.addcss = function (t, e, o) {
      return layui.link(m.dir + 'css/' + t, e, o)
    }),
    (m.callback = {}),
    (n.prototype.factory = function (t) {
      if (layui[t]) return typeof m.callback[t] == 'function' ? m.callback[t] : null
    }),
    (n.prototype.img = function (t, e, o) {
      var n = new Image()
      if (((n.src = t), n.complete)) return e(n)
      ;(n.onload = function () {
        ;(n.onload = null), typeof e == 'function' && e(n)
      }),
        (n.onerror = function (t) {
          ;(n.onerror = null), typeof o == 'function' && o(t)
        })
    }),
    (n.prototype.config = function (t) {
      for (var e in (t = t || {})) m[e] = t[e]
      return this
    }),
    (n.prototype.modules = (function () {
      var t
      var e = {}
      for (t in N) e[t] = N[t]
      return e
    })()),
    (n.prototype.extend = function (t) {
      for (var e in (t = t || {})) this[e] || this.modules[e] ? g(e + ' Module already exists', 'error') : (this.modules[e] = t[e])
      return this
    }),
    (n.prototype.router = n.prototype.hash =
      function (t) {
        var o = { path: [], search: {}, hash: ((t = t || location.hash).match(/[^#](#.*$)/) || [])[1] || '' }
        return (
          /^#\//.test(t) &&
            ((t = t.replace(/^#\//, '')),
            (o.href = '/' + t),
            (t = t.replace(/([^#])(#.*$)/, '$1').split('/') || []),
            this.each(t, function (t, e) {
              ;/^\w+=/.test(e) ? ((e = e.split('=')), (o.search[e[0]] = e[1])) : o.path.push(e)
            })),
          o
        )
      }),
    (n.prototype.url = function (t) {
      var r
      var e
      var o = this
      return {
        pathname: (t ? ((t.match(/\.[^.]+?\/.+/) || [])[0] || '').replace(/^[^\/]+/, '').replace(/\?.+/, '') : location.pathname).replace(/^\//, '').split('/'),
        search:
          ((r = {}),
          (e = (t ? ((t.match(/\?.+/) || [])[0] || '').replace(/\#.+/, '') : location.search).replace(/^\?+/, '').split('&')),
          o.each(e, function (t, e) {
            var o = e.indexOf('=')
            var n = o < 0 ? e.substr(0, e.length) : o !== 0 && e.substr(0, o)
            n && (r[n] = o > 0 ? e.substr(o + 1) : null)
          }),
          r),
        hash: o.router(t ? (t.match(/#.+/) || [])[0] || '/' : location.hash)
      }
    }),
    (n.prototype.data = function (t, e, o) {
      if (((t = t || 'layui'), (o = o || localStorage), d.JSON && d.JSON.parse)) {
        if (e === null) return delete o[t]
        e = typeof e == 'object' ? e : { key: e }
        try {
          var n = JSON.parse(o[t])
        } catch (r) {
          n = {}
        }
        return 'value' in e && (n[e.key] = e.value), e.remove && delete n[e.key], (o[t] = JSON.stringify(n)), e.key ? n[e.key] : n
      }
    }),
    (n.prototype.sessionData = function (t, e) {
      return this.data(t, e, sessionStorage)
    }),
    (n.prototype.device = function (t) {
      var o = navigator.userAgent.toLowerCase()
      var e = function (t) {
        var e = new RegExp(t + '/([^\\s\\_\\-]+)')
        return (t = (o.match(e) || [])[1]) || !1
      }
      var n = {
        os: /windows/.test(o) ? 'windows' : /linux/.test(o) ? 'linux' : /iphone|ipod|ipad|ios/.test(o) ? 'ios' : /mac/.test(o) ? 'mac' : void 0,
        ie: !!(d.ActiveXObject || 'ActiveXObject' in d) && ((o.match(/msie\s(\d+)/) || [])[1] || '11'),
        weixin: e('micromessenger')
      }
      return t && !n[t] && (n[t] = e(t)), (n.android = /android/.test(o)), (n.ios = n.os === 'ios'), (n.mobile = n.android || n.ios), n
    }),
    (n.prototype.hint = function () {
      return { error: g }
    }),
    (n.prototype._typeof = n.prototype.type =
      function (t) {
        return t === null
          ? String(t)
          : typeof t == 'object' || typeof t == 'function'
          ? ((e = (e = Object.prototype.toString.call(t).match(/\s(.+)\]$/) || [])[1] || 'Object'),
            new RegExp('\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b').test(e) ? e.toLowerCase() : 'object')
          : typeof t
        var e
      }),
    (n.prototype._isArray = n.prototype.isArray =
      function (t) {
        var e
        var o = this.type(t)
        return !(!t || typeof t != 'object' || t === d) && ((e = 'length' in t && t.length), o === 'array' || e === 0 || (typeof e == 'number' && e > 0 && e - 1 in t))
      }),
    (n.prototype.each = function (t, o) {
      var e
      var n = function (t, e) {
        return o.call(e[t], t, e[t])
      }
      if (typeof o == 'function') {
        if (this.isArray((t = t || []))) for (e = 0; e < t.length && !n(e, t); e++);
        else for (e in t) if (n(e, t)) break
      }
      return this
    }),
    (n.prototype.sort = function (t, r, e, o) {
      o = o ? t || [] : JSON.parse(JSON.stringify(t || []))
      if (this.type(t) !== 'object' || r) {
        if (typeof t != 'object') return [o]
        o.sort(function (t, e) {
          var o = t[r]
          var n = e[r]
          if (!isNaN(t) && !isNaN(e)) return t - e
          if (!isNaN(t) && isNaN(e)) {
            if (!r || typeof e != 'object') return -1
            o = t
          } else if (isNaN(t) && !isNaN(e)) {
            if (!r || typeof t != 'object') return 1
            n = e
          }
          t = [!isNaN(o), !isNaN(n)]
          return t[0] && t[1]
            ? o && !n && n !== 0
              ? 1
              : !o && o !== 0 && n
              ? -1
              : o - n
            : t[0] || t[1]
            ? t[0] || !t[1]
              ? -1
              : !t[0] || t[1]
              ? 1
              : void 0
            : n < o
            ? 1
            : o < n
            ? -1
            : 0
        }),
          e && o.reverse()
      }
      return o
    }),
    (n.prototype.stope = function (t) {
      t = t || d.event
      try {
        t.stopPropagation()
      } catch (e) {
        t.cancelBubble = !0
      }
    }),
    'LAYUI-EVENT-REMOVE')
  ;(n.prototype.onevent = function (t, e, o) {
    return typeof t != 'string' || typeof o != 'function' ? this : n.event(t, e, null, o)
  }),
    (n.prototype.event = n.event =
      function (t, e, o, n) {
        var r = this
        var i = null
        var a = (e || '').match(/\((.*)\)$/) || []
        var t = (t + '.' + e).replace(a[0], '')
        var u = a[1] || ''
        var l = function (t, e) {
          !1 === (e && e.call(r, o)) && i === null && (i = !1)
        }
        return o === s
          ? (delete (r.cache.event[t] || {})[u], r)
          : n
          ? ((m.event[t] = m.event[t] || {}), u ? (m.event[t][u] = [n]) : ((m.event[t][u] = m.event[t][u] || []), m.event[t][u].push(n)), this)
          : (layui.each(m.event[t], function (t, e) {
              ;(u === '{*}' || (t === '' && layui.each(e, l), u && t === u)) && layui.each(e, l)
            }),
            i)
      }),
    (n.prototype.on = function (t, e, o) {
      return this.onevent.call(this, e, t, o)
    }),
    (n.prototype.off = function (t, e) {
      return this.event.call(this, e, t, s)
    }),
    (n.prototype.debounce = function (o, n) {
      var r
      return function () {
        var t = this
        var e = arguments
        clearTimeout(r),
          (r = setTimeout(function () {
            o.apply(t, e)
          }, n))
      }
    }),
    (n.prototype.throttle = function (t, e) {
      var o = !1
      return function () {
        o ||
          (t.apply(this, arguments),
          (o = !0),
          setTimeout(function () {
            o = !1
          }, e))
      }
    }),
    (d.layui = new n())
})(window)
layui.define(function (a) {
  var i = layui.cache
  layui.config({ dir: i.dir.replace(/lay\/dest\/$/, '') }), a('layui.all', layui.v)
})
!(function (d) {
  'use strict'
  var t
  var h = d.document
  var p = function (t) {
    return new r(t)
  }
  var r = function (t) {
    var n = this
    var i = typeof t == 'object' ? (layui.isArray(t) ? t : [t]) : ((this.selector = t), h.querySelectorAll(t || null))
    p.each(i, function (t, e) {
      n.push(i[t])
    })
  }
  ;(Array.prototype.indexOf =
    Array.prototype.indexOf ||
    function (n, i) {
      var r = -1
      return (
        (i = i || 0),
        layui.each(this, function (t, e) {
          if (n === e && i <= t) return (r = t), !0
        }),
        r
      )
    }),
    (r.fn = r.prototype = []),
    (r.fn.constructor = r),
    (p.extend = function () {
      var t
      var e = 1
      var n = arguments
      var i = function (t, e) {
        for (var n in ((t = t || (layui.type(e) === 'array' ? [] : {})), e)) t[n] = e[n] && e[n].constructor === Object ? i(t[n], e[n]) : e[n]
        return t
      }
      for (n[0] = typeof n[0] == 'object' ? n[0] : {}, t = n.length; e < t; e++) typeof n[e] == 'object' && i(n[0], n[e])
      return n[0]
    }),
    (p.ie = ((t = navigator.userAgent.toLowerCase()), !!(d.ActiveXObject || 'ActiveXObject' in d) && ((t.match(/msie\s(\d+)/) || [])[1] || '11'))),
    (p.layui = layui || {}),
    (p.getPath = layui.cache.dir),
    (p.stope = layui.stope),
    (p.each = function () {
      return layui.each.apply(layui, arguments), this
    }),
    (p.digit = function (t, e) {
      if (typeof t != 'string' && typeof t != 'number') return ''
      var n = ''
      e = e || 2
      for (var i = (t = String(t)).length; i < e; i++) n += '0'
      return t < Math.pow(10, e) ? n + t : t
    }),
    (p.elem = function (t, e) {
      var n = h.createElement(t)
      return (
        p.each(e || {}, function (t, e) {
          n.setAttribute(t, e)
        }),
        n
      )
    }),
    (p.hasScrollbar = function () {
      return h.body.scrollHeight > (d.innerHeight || h.documentElement.clientHeight)
    }),
    (p.getStyleRules = function (t, n) {
      if (t) {
        return (
          (t = (t = t.sheet || t.styleSheet || {}).cssRules || t.rules),
          typeof n == 'function' &&
            layui.each(t, function (t, e) {
              if (n(e, t)) return !0
            }),
          t
        )
      }
    }),
    (p.style = function (t) {
      t = t || {}
      var e = p.elem('style')
      var n = t.text || ''
      var i = t.target
      if (n) {
        return (
          'styleSheet' in e ? (e.setAttribute('type', 'text/css'), (e.styleSheet.cssText = n)) : (e.innerHTML = n),
          (e.id = 'LAY-STYLE-' + (t.id || ((n = p.style.index || 0), p.style.index++, 'DF-' + n))),
          i && ((t = p(i).find('#' + e.id))[0] && t.remove(), p(i).append(e)),
          e
        )
      }
    }),
    (p.position = function (t, e, n) {
      var i, r, o, c, a, u, s, f, l
      e &&
        ((n = n || {}),
        (t !== h && t !== p('body')[0]) || (n.clickType = 'right'),
        (i = n.clickType === 'right' ? { left: (i = n.e || d.event || {}).clientX, top: i.clientY, right: i.clientX, bottom: i.clientY } : t.getBoundingClientRect()),
        (u = e.offsetWidth),
        (s = e.offsetHeight),
        (r = function (t) {
          return h.body[(t = t ? 'scrollLeft' : 'scrollTop')] | h.documentElement[t]
        }),
        (o = function (t) {
          return h.documentElement[t ? 'clientWidth' : 'clientHeight']
        }),
        (c = 'margin' in n ? n.margin : 5),
        (l = i.left),
        (a = i.bottom),
        n.align === 'center' ? (l -= (u - t.offsetWidth) / 2) : n.align === 'right' && (l = l - u + t.offsetWidth),
        (l = l + u + c > o('width') ? o('width') - u - c : l) < c && (l = c),
        i.bottom + s + c > o() && (i.top > s + c && i.top <= o() ? (a = i.top - s - 2 * c) : n.allowBottomOut || ((a = o() - s - 2 * c) < 0 && (a = 0))),
        (u = n.position) && (e.style.position = u),
        (s = n.offset ? n.offset[0] : 0),
        (f = n.offset ? n.offset[1] : 0),
        (e.style.left = l + (u === 'fixed' ? 0 : r(1)) + s + 'px'),
        (e.style.top = a + (u === 'fixed' ? 0 : r()) + f + 'px'),
        p.hasScrollbar() ||
          ((l = e.getBoundingClientRect()),
          !n.SYSTEM_RELOAD &&
            l.bottom + c > o() &&
            ((n.SYSTEM_RELOAD = !0),
            setTimeout(function () {
              p.position(t, e, n)
            }, 50))))
    }),
    (p.options = function (t, e) {
      if (((e = typeof e == 'object' ? e : { attr: e }), t === h)) return {}
      var t = p(t)
      var n = e.attr || 'lay-options'
      var t = t.attr(n)
      try {
        return new Function('return ' + (t || '{}'))()
      } catch (i) {
        return layui.hint().error(e.errorText || [n + '="' + t + '"', '\n parseerror: ' + i].join('\n'), 'error'), {}
      }
    }),
    (p.isTopElem = function (n) {
      var t = [h, p('body')[0]]
      var i = !1
      return (
        p.each(t, function (t, e) {
          if (e === n) return (i = !0)
        }),
        i
      )
    }),
    (p.clipboard = {
      writeText: function (n) {
        var i = String(n.text)
        function t() {
          var t = h.createElement('textarea')
          ;(t.value = i), (t.style.position = 'fixed'), (t.style.opacity = '0'), (t.style.top = '0px'), (t.style.left = '0px'), h.body.appendChild(t), t.select()
          try {
            h.execCommand('copy'), typeof n.done == 'function' && n.done()
          } catch (e) {
            typeof n.error == 'function' && n.error(e)
          } finally {
            t.remove ? t.remove() : h.body.removeChild(t)
          }
        }
        navigator && 'clipboard' in navigator
          ? navigator.clipboard.writeText(i).then(n.done, function () {
              t()
            })
          : t()
      }
    }),
    (p.passiveSupported = (function () {
      var t = !1
      try {
        var e = Object.defineProperty({}, 'passive', {
          get: function () {
            t = !0
          }
        })
        d.addEventListener('test', null, e), d.removeEventListener('test', null, e)
      } catch (n) {}
      return t
    })()),
    (p.touchEventsSupported = function () {
      return 'ontouchstart' in d
    }),
    (p.touchSwipe = function (t, e) {
      var n
      var i
      var r
      var o = e
      var c = p(t)[0]
      c &&
        p.touchEventsSupported() &&
        ((n = { pointerStart: { x: 0, y: 0 }, pointerEnd: { x: 0, y: 0 }, distanceX: 0, distanceY: 0, direction: 'none', timeStart: null }),
        (e = function (t) {
          t.touches.length === 1 &&
            (c.addEventListener('touchmove', i, !!p.passiveSupported && { passive: !1 }),
            c.addEventListener('touchend', r),
            c.addEventListener('touchcancel', r),
            (n.timeStart = Date.now()),
            (n.pointerStart.x = n.pointerEnd.x = t.touches[0].clientX),
            (n.pointerStart.y = n.pointerEnd.y = t.touches[0].clientY),
            (n.distanceX = n.distanceY = 0),
            (n.direction = 'none'),
            o.onTouchStart) &&
            o.onTouchStart(t, n)
        }),
        (i = function (t) {
          t.preventDefault(),
            (n.pointerEnd.x = t.touches[0].clientX),
            (n.pointerEnd.y = t.touches[0].clientY),
            (n.distanceX = n.pointerStart.x - n.pointerEnd.x),
            (n.distanceY = n.pointerStart.y - n.pointerEnd.y),
            Math.abs(n.distanceX) > Math.abs(n.distanceY) ? (n.direction = n.distanceX > 0 ? 'left' : 'right') : (n.direction = n.distanceY > 0 ? 'up' : 'down'),
            o.onTouchMove && o.onTouchMove(t, n)
        }),
        (r = function (t) {
          o.onTouchEnd && o.onTouchEnd(t, n),
            c.removeEventListener('touchmove', i),
            c.removeEventListener('touchend', r, !!p.passiveSupported && { passive: !1 }),
            c.removeEventListener('touchcancel', r)
        }),
        c.__lay_touchswipe_cb_ && c.removeEventListener('touchstart', c.__lay_touchswipe_cb_),
        (c.__lay_touchswipe_cb_ = e),
        c.addEventListener('touchstart', e))
    }),
    (p.addEvent = h.addEventListener
      ? function (t, e, n, i) {
          t.addEventListener(e, n, i)
        }
      : function (e, t, n) {
          var i = '_lay_on_' + t
          var r = function (t) {
            ;(t.target = t.srcElement), n.call(e, t)
          }
          var o = ((r._rawFn = n), e[i] || (e[i] = []), !1)
          p.each(e[i], function (t, e) {
            if (e._rawFn === n) return (o = !0)
          }),
            o || (e[i].push(r), e.attachEvent('on' + t, r))
        }),
    (p.removeEvent = h.removeEventListener
      ? function (t, e, n, i) {
          t.removeEventListener(e, n, i)
        }
      : function (n, i, r) {
          var o
          var t = '_lay_on_' + i
          var e = n[t]
          layui.isArray(e) &&
            ((o = []),
            p.each(e, function (t, e) {
              e._rawFn === r ? n.detachEvent('on' + i, e) : o.push(e)
            }),
            (n[t] = o))
        }),
    (p.onClickOutside = function (r, o, t) {
      var e
      var n
      var i
      var c
      var a = (t = t || {}).event || ('onpointerdown' in d ? 'pointerdown' : 'mousedown')
      var u = t.scope || h
      var s = t.ignore || []
      var t = !('capture' in t) || t.capture
      return (
        (e = u),
        (n = a),
        (i = function (t) {
          var e = r
          var n = t.target || t.srcElement
          var i = (function (t) {
            var e = (t.composedPath && t.composedPath()) || t.path
            var t = t.target || t.srcElement
            if (e !== null && e !== undefined) return e
            return [t].concat(
              (function n(t, e) {
                e = e || []
                t = t.parentNode
                return t ? n(t, e.concat([t])) : e
              })(t)
            )
          })(t)
          e &&
            e !== n &&
            i.indexOf(e) === -1 &&
            !(function (t, e) {
              for (var n = t.target || t.srcElement, i = 0; i < s.length; i++) {
                var r = s[i]
                if (typeof r == 'string') {
                  for (var o = h.querySelectorAll(r), c = 0; c < o.length; c++) {
                    var a = o[i]
                    if (a === n || e.indexOf(a) !== -1) return 1
                  } } else if (r && (r === n || e.indexOf(r) !== -1)) return 1
              }
            })(t, i) &&
            o(t)
        }),
        (c = p.passiveSupported ? { passive: !0, capture: t } : t),
        e.addEventListener ? e.addEventListener(n, i, c) : e.attachEvent('on' + n, i),
        function () {
          e.removeEventListener ? e.removeEventListener(n, i, c) : e.detachEvent('on' + n, i)
        }
      )
    }),
    (r.addStr = function (n, t) {
      return (
        (n = n.replace(/\s+/, ' ')),
        (t = t.replace(/\s+/, ' ').split(' ')),
        p.each(t, function (t, e) {
          new RegExp('\\b' + e + '\\b').test(n) || (n = n + ' ' + e)
        }),
        n.replace(/^\s|\s$/, '')
      )
    }),
    (r.removeStr = function (n, t) {
      return (
        (n = n.replace(/\s+/, ' ')),
        (t = t.replace(/\s+/, ' ').split(' ')),
        p.each(t, function (t, e) {
          e = new RegExp('\\b' + e + '\\b')
          e.test(n) && (n = n.replace(e, ''))
        }),
        n.replace(/\s+/, ' ').replace(/^\s|\s$/, '')
      )
    }),
    (r.fn.find = function (n) {
      var i = []
      var r = typeof n == 'object'
      return (
        this.each(function (t, e) {
          e = r && e.contains(n) ? n : e.querySelectorAll(n || null)
          p.each(e, function (t, e) {
            i.push(e)
          })
        }),
        p(i)
      )
    }),
    (r.fn.each = function (t) {
      return p.each.call(this, this, t)
    }),
    (r.fn.addClass = function (n, i) {
      return this.each(function (t, e) {
        e.className = r[i ? 'removeStr' : 'addStr'](e.className, n)
      })
    }),
    (r.fn.removeClass = function (t) {
      return this.addClass(t, !0)
    }),
    (r.fn.hasClass = function (n) {
      var i = !1
      return (
        this.each(function (t, e) {
          new RegExp('\\b' + n + '\\b').test(e.className) && (i = !0)
        }),
        i
      )
    }),
    (r.fn.css = function (e, i) {
      var t = this
      var r = function (t) {
        return isNaN(t) ? t : t + 'px'
      }
      return typeof e != 'string' || i !== undefined
        ? t.each(function (t, n) {
            typeof e == 'object'
              ? p.each(e, function (t, e) {
                  n.style[t] = r(e)
                })
              : (n.style[e] = r(i))
          })
        : t.length > 0
        ? t[0].style[e]
        : void 0
    }),
    (r.fn.width = function (n) {
      var i = this
      return n !== undefined
        ? i.each(function (t, e) {
            i.css('width', n)
          })
        : i.length > 0
        ? i[0].offsetWidth
        : void 0
    }),
    (r.fn.height = function (n) {
      var i = this
      return n !== undefined
        ? i.each(function (t, e) {
            i.css('height', n)
          })
        : i.length > 0
        ? i[0].offsetHeight
        : void 0
    }),
    (r.fn.attr = function (n, i) {
      var t = this
      return i !== undefined
        ? t.each(function (t, e) {
            e.setAttribute(n, i)
          })
        : t.length > 0
        ? t[0].getAttribute(n)
        : void 0
    }),
    (r.fn.removeAttr = function (n) {
      return this.each(function (t, e) {
        e.removeAttribute(n)
      })
    }),
    (r.fn.html = function (n) {
      var t = this
      return n !== undefined
        ? this.each(function (t, e) {
            e.innerHTML = n
          })
        : t.length > 0
        ? t[0].innerHTML
        : void 0
    }),
    (r.fn.val = function (n) {
      var t = this
      return n !== undefined
        ? this.each(function (t, e) {
            e.value = n
          })
        : t.length > 0
        ? t[0].value
        : void 0
    }),
    (r.fn.append = function (n) {
      return this.each(function (t, e) {
        typeof n == 'object' ? e.appendChild(n) : (e.innerHTML = e.innerHTML + n)
      })
    }),
    (r.fn.remove = function (n) {
      return this.each(function (t, e) {
        n ? e.removeChild(n) : e.parentNode.removeChild(e)
      })
    }),
    (r.fn.on = function (n, i, r) {
      return this.each(function (t, e) {
        p.addEvent(e, n, i, r)
      })
    }),
    (r.fn.off = function (n, i, r) {
      return this.each(function (t, e) {
        p.removeEvent(e, n, i, r)
      })
    }),
    (d.lay = p),
    d.layui &&
      layui.define &&
      layui.define(function (t) {
        t('lay', p)
      })
})(window, window.document)
layui.define(function (e) {
  'use strict'
  var c = { open: '{{', close: '}}' }
  var l = {
    escape: function (e) {
      return e === undefined || e === null
        ? ''
        : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test((e += ''))
        ? e
            .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
        : e
    }
  }
  var i = function (e) {
    return new RegExp(e, 'g')
  }
  var u = function (e, r) {
    var n = 'Laytpl Error: '
    return typeof console == 'object' && console.error(n + e + '\n' + (r || '')), n + e
  }
  var n = function (e, r) {
    var n = this;
        var e =
        ((n.config = n.config || {}),
        (n.template = e),
        function (e) {
          for (var r in e) n.config[r] = e[r]
        })
    e(c), e(r)
  }
  var r =
    ((n.prototype.tagExp = function (e, r, n) {
      var c = this.config
      return i((r || '') + c.open + ['#([\\s\\S])+?', '([^{#}])*?'][e || 0] + c.close + (n || ''))
    }),
    (n.prototype.parse = function (e, r) {
      var n = this
      var c = n.config
      var t = e
      var o = i('^' + c.open + '#', '')
      var p = i(c.close + '$', '')
      if (typeof e != 'string') return e
      e =
        '"use strict";var view = "' +
        (e = e
          .replace(/\s+|\r|\t|\n/g, ' ')
          .replace(i(c.open + '#'), c.open + '# ')
          .replace(i(c.close + '}'), '} ' + c.close)
          .replace(/\\/g, '\\\\')
          .replace(i(c.open + '!(.+?)!' + c.close), function (e) {
            return (e = e
              .replace(i('^' + c.open + '!'), '')
              .replace(i('!' + c.close), '')
              .replace(i(c.open + '|' + c.close), function (e) {
                return e.replace(/(.)/g, '\\$1')
              }))
          })
          .replace(/(?="|')/g, '\\')
          .replace(n.tagExp(), function (e) {
            return '";' + (e = e.replace(o, '').replace(p, '')).replace(/\\(.)/g, '$1') + ';view+="'
          })
          .replace(n.tagExp(1), function (e) {
            var r = '"+laytpl.escape('
            return e.replace(/\s/g, '') === c.open + c.close
              ? ''
              : ((e = e.replace(i(c.open + '|' + c.close), '')),
                /^=/.test(e) ? (e = e.replace(/^=/, '')) : /^-/.test(e) && ((e = e.replace(/^-/, '')), (r = '"+(')),
                r + e.replace(/\\(.)/g, '$1') + ')+"')
          })) +
        '";return view;'
      try {
        return (n.cache = e = new Function('d, laytpl', e)), e(r, l)
      } catch (a) {
        return delete n.cache, u(a, t)
      }
    }),
    (n.prototype.render = function (e, r) {
      e = e || {}
      var n = this
      var e = n.cache ? n.cache(e, l) : n.parse(n.template, e)
      return typeof r == 'function' && r(e), e
    }),
    function (e, r) {
      return new n(e, r)
    })
  ;(r.config = function (e) {
    for (var r in (e = e || {})) c[r] = e[r]
  }),
    (r.v = '2.0.0'),
    e('laytpl', r)
})
layui.define(function (e) {
  'use strict'
  var r = document
  var u = 'getElementById'
  var c = 'getElementsByTagName'
  var a = 'layui-disabled'
  var t = function (e) {
    var a = this
    ;(a.config = e || {}), (a.config.index = ++o.index), a.render(!0)
  }
  var o =
    ((t.prototype.type = function () {
      var e = this.config
      if (typeof e.elem == 'object') return e.elem.length === undefined ? 2 : 3
    }),
    (t.prototype.view = function () {
      var i
      var e
      var t
      var n = this.config
      var r = (n.groups = 'groups' in n ? Number(n.groups) || 0 : 5)
      var u =
        ((n.layout = typeof n.layout == 'object' ? n.layout : ['prev', 'page', 'next']),
        (n.count = Number(n.count) || 0),
        (n.curr = Number(n.curr) || 1),
        (n.limits = typeof n.limits == 'object' ? n.limits : [10, 20, 30, 40, 50]),
        (n.limit = Number(n.limit) || 10),
        (n.pages = Math.ceil(n.count / n.limit) || 1),
        n.curr > n.pages ? (n.curr = n.pages) : n.curr < 1 && (n.curr = 1),
        r < 0 ? (r = 1) : r > n.pages && (r = n.pages),
        (n.prev = 'prev' in n ? n.prev : '\u4e0a\u4e00\u9875'),
        (n.next = 'next' in n ? n.next : '\u4e0b\u4e00\u9875'),
        n.pages > r ? Math.ceil((n.curr + (1 < r ? 1 : 0)) / (0 < r ? r : 1)) : 1)
      var l = {
        prev: n.prev ? '<a class="layui-laypage-prev' + (n.curr == 1 ? ' ' + a : '') + '" data-page="' + (n.curr - 1) + '">' + n.prev + '</a>' : '',
        page: (function () {
          var e = []
          if (n.count < 1) return ''
          u > 1 && !1 !== n.first && r !== 0 && e.push('<a class="layui-laypage-first" data-page="1"  title="\u9996\u9875">' + (n.first || 1) + '</a>')
          var a = Math.floor((r - 1) / 2)
          var t = 1 < u ? n.curr - a : 1
          var i = u > 1 ? ((a = n.curr + (r - a - 1)) > n.pages ? n.pages : a) : r
          for (i - t < r - 1 && (t = i - r + 1), !1 !== n.first && t > 2 && e.push('<span class="layui-laypage-spr">...</span>'); t <= i; t++) {
            t === n.curr
              ? e.push(
                  '<span class="layui-laypage-curr"><em class="layui-laypage-em" ' +
                    (/^#/.test(n.theme) ? 'style="background-color:' + n.theme + ';"' : '') +
                    '></em><em>' +
                    t +
                    '</em></span>'
                )
              : e.push('<a data-page="' + t + '">' + t + '</a>')
          }
          return (
            n.pages > r &&
              n.pages > i &&
              !1 !== n.last &&
              (i + 1 < n.pages && e.push('<span class="layui-laypage-spr">...</span>'), r !== 0) &&
              e.push('<a class="layui-laypage-last" title="\u5c3e\u9875"  data-page="' + n.pages + '">' + (n.last || n.pages) + '</a>'),
            e.join('')
          )
        })(),
        next: n.next ? '<a class="layui-laypage-next' + (n.curr == n.pages ? ' ' + a : '') + '" data-page="' + (n.curr + 1) + '">' + n.next + '</a>' : '',
        count: '<span class="layui-laypage-count">' + (e = typeof n.countText == 'object' ? n.countText : ['\u5171 ', ' \u6761'])[0] + n.count + e[1] + '</span>',
        limit:
          ((i = ['<span class="layui-laypage-limits"><select lay-ignore>']),
          layui.each(n.limits, function (e, a) {
            var t
            i.push(
              '<option value="' +
                a +
                '"' +
                (a === n.limit ? ' selected' : '') +
                '>' +
                ((t = (a = a) + ' \u6761/\u9875'), (typeof n.limitTemplet == 'function' && n.limitTemplet(a)) || t) +
                '</option>'
            )
          }),
          i.join('') + '</select></span>'),
        refresh: ['<a data-page="' + n.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', '</a>'].join(''),
        skip: [
          '<span class="layui-laypage-skip">' + (e = typeof n.skipText == 'object' ? n.skipText : ['\u5230\u7b2c', '\u9875', '\u786e\u5b9a'])[0],
          '<input type="text" min="1" value="' + n.curr + '" class="layui-input">',
          e[1] + '<button type="button" class="layui-laypage-btn">' + e[2] + '</button>',
          '</span>'
        ].join('')
      }
      return [
        '<div class="layui-box layui-laypage layui-laypage-' + (n.theme ? (/^#/.test(n.theme) ? 'molv' : n.theme) : 'default') + '" id="layui-laypage-' + n.index + '">',
        ((t = []),
        layui.each(n.layout, function (e, a) {
          l[a] && t.push(l[a])
        }),
        t.join('')),
        '</div>'
      ].join('')
    }),
    (t.prototype.jump = function (e, a) {
      if (e) {
        var t = this
        var i = t.config
        var n = e.children
        var r = e[c]('button')[0]
        var u = e[c]('input')[0]
        var e = e[c]('select')[0]
        var l = function () {
          var e = Number(u.value.replace(/\s|\D/g, ''))
          e && ((i.curr = e), t.render())
        }
        if (a) return l()
        for (var s = 0, p = n.length; s < p; s++)
          n[s].nodeName.toLowerCase() === 'a' &&
            o.on(n[s], 'click', function () {
              var e = Number(this.getAttribute('data-page'))
              e < 1 || e > i.pages || ((i.curr = e), t.render())
            })
        e &&
          o.on(e, 'change', function () {
            var e = this.value
            i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), (i.limit = e), t.render()
          }),
          r &&
            o.on(r, 'click', function () {
              l()
            })
      }
    }),
    (t.prototype.skip = function (t) {
      var i, e
      t &&
        ((i = this), (e = t[c]('input')[0])) &&
        o.on(e, 'keyup', function (e) {
          var a = this.value
          var e = e.keyCode
          ;/^(37|38|39|40)$/.test(e) || (/\D/.test(a) && (this.value = a.replace(/\D/, '')), e === 13 && i.jump(t, !0))
        })
    }),
    (t.prototype.render = function (e) {
      var a = this
      var t = a.config
      var i = a.type()
      var n = a.view()
      var i =
        (i === 2 ? t.elem && (t.elem.innerHTML = n) : i === 3 ? t.elem.html(n) : r[u](t.elem) && (r[u](t.elem).innerHTML = n),
        t.jump && t.jump(t, e),
        r[u]('layui-laypage-' + t.index))
      a.jump(i), t.hash && !e && (location.hash = '!' + t.hash + '=' + t.curr), a.skip(i)
    }),
    {
      render: function (e) {
        return new t(e).index
      },
      index: layui.laypage ? layui.laypage.index + 1e4 : 0,
      on: function (a, e, t) {
        return (
          a.attachEvent
            ? a.attachEvent('on' + e, function (e) {
                ;(e.target = e.srcElement), t.call(a, e)
              })
            : a.addEventListener(e, t, !1),
          this
        )
      }
    })
  e('laypage', o)
})
!(function (i, D) {
  'use strict'
  var n = i.layui && layui.define
  var l = {
    getPath: i.lay && lay.getPath ? lay.getPath : '',
    link: function (e, t, a) {
      T.path && i.lay && lay.layui && lay.layui.link(T.path + e, t, a)
    }
  }
  var e = i.LAYUI_GLOBAL || {}
  var a = 'laydate'
  var d = 'lay-' + a + '-id'
  var T = {
    v: '5.6.0',
    config: { weekStart: 0 },
    index: i.laydate && i.laydate.v ? 1e5 : 0,
    path: e.laydate_dir || l.getPath,
    set: function (e) {
      var t = this
      return (t.config = lay.extend({}, t.config, e)), t
    },
    ready: function (e) {
      var t = 'laydate';
          var a = (n ? 'modules/' : '') + 'laydate.css?v=' + T.v
      return n ? (layui['layui.all'] ? typeof e == 'function' && e() : layui.addcss(a, e, t)) : l.link(a, e, t), this
    }
  }
  var s = function () {
    var t = this;
        var e = t.config.id
    return ((s.that[e] = t).inst = {
      hint: function (e) {
        t.hint.call(t, e)
      },
      reload: function (e) {
        t.reload.call(t, e)
      },
      config: t.config
    })
  }
  var M = 'layui-this'
  var C = 'laydate-disabled'
  var h = [100, 2e5]
  var v = 'layui-laydate-static'
  var b = 'layui-laydate-list'
  var o = 'laydate-selected'
  var r = 'layui-laydate-hint'
  var y = 'laydate-day-prev'
  var m = 'laydate-day-next'
  var E = '.laydate-btns-confirm'
  var L = 'laydate-time-text'
  var I = 'laydate-btns-time'
  var x = 'layui-laydate-preview'
  var w = 'layui-laydate-shade'
  var k = function (e) {
    var t;
        var a = this;
        var n = ((a.index = ++T.index), (a.config = lay.extend({}, a.config, T.config, e)), lay(e.elem || a.config.elem))
    return n.length > 1
      ? (lay.each(n, function () {
          T.render(lay.extend({}, a.config, { elem: this }))
        }),
        a)
      : ((e = lay.extend(a.config, lay.options(n[0]))),
        n[0] && n.attr(d)
          ? (t = s.getThis(n.attr(d)))
            ? t.reload(e)
            : void 0
          : ((e.id = 'id' in e ? e.id : n.attr('id') || a.index),
            (e.index = a.index),
            void T.ready(function () {
              a.init()
            })))
  }
  var u = 'yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s'
  ;(s.formatArr = function (e) {
    return (e || '').match(new RegExp(u + '|.', 'g')) || []
  }),
    (k.isLeapYear = function (e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
    }),
    (k.prototype.config = {
      type: 'date',
      range: !1,
      format: 'yyyy-MM-dd',
      value: null,
      isInitValue: !0,
      min: '1900-1-1',
      max: '2099-12-31',
      trigger: 'click',
      show: !1,
      showBottom: !0,
      isPreview: !0,
      btns: ['clear', 'now', 'confirm'],
      lang: 'cn',
      theme: 'default',
      position: null,
      calendar: !1,
      mark: {},
      holidays: null,
      zIndex: null,
      done: null,
      change: null,
      autoConfirm: !0,
      shade: 0
    }),
    (k.prototype.lang = function () {
      var e = {
        cn: {
          weeks: ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'],
          time: ['\u65f6', '\u5206', '\u79d2'],
          timeTips: '\u9009\u62e9\u65f6\u95f4',
          startTime: '\u5f00\u59cb\u65f6\u95f4',
          endTime: '\u7ed3\u675f\u65f6\u95f4',
          dateTips: '\u8fd4\u56de\u65e5\u671f',
          month: ['\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u5341\u4e00', '\u5341\u4e8c'],
          tools: { confirm: '\u786e\u5b9a', clear: '\u6e05\u7a7a', now: '\u73b0\u5728' },
          timeout: '\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9',
          invalidDate: '\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185',
          formatError: ['\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>', '<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e'],
          preview: '\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c'
        },
        en: {
          weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          time: ['Hours', 'Minutes', 'Seconds'],
          timeTips: 'Select Time',
          startTime: 'Start Time',
          endTime: 'End Time',
          dateTips: 'Select Date',
          month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          tools: { confirm: 'Confirm', clear: 'Clear', now: 'Now' },
          timeout: 'End time cannot be less than start Time<br>Please re-select',
          invalidDate: 'Invalid date',
          formatError: ['The date format error<br>Must be followed\uff1a<br>', '<br>It has been reset'],
          preview: 'The selected result'
        }
      }
      return e[this.config.lang] || e.cn
    }),
    (k.prototype.markerOfChineseFestivals = {
      '0-1-1': '\u5143\u65e6',
      '0-2-14': '\u60c5\u4eba',
      '0-3-8': '\u5987\u5973',
      '0-3-12': '\u690d\u6811',
      '0-4-1': '\u611a\u4eba',
      '0-5-1': '\u52b3\u52a8',
      '0-5-4': '\u9752\u5e74',
      '0-6-1': '\u513f\u7ae5',
      '0-9-10': '\u6559\u5e08',
      '0-10-1': '\u56fd\u5e86',
      '0-12-25': '\u5723\u8bde'
    }),
    (k.prototype.reload = function (e) {
      ;(this.config = lay.extend({}, this.config, e)), this.init()
    }),
    (k.prototype.init = function () {
      var r = this
      var o = r.config
      var e = 'static' === o.position
      var t = { year: 'yyyy', month: 'yyyy-MM', date: 'yyyy-MM-dd', time: 'HH:mm:ss', datetime: 'yyyy-MM-dd HH:mm:ss' }
      ;(o.elem = lay(o.elem)),
        (o.eventElem = lay(o.eventElem)),
        o.elem[0] &&
          (layui.type(o.theme) !== 'array' && (o.theme = [o.theme]),
          o.fullPanel && (o.type !== 'datetime' || o.range) && delete o.fullPanel,
          (r.rangeStr = o.range ? (typeof o.range == 'string' ? o.range : '-') : ''),
          (r.rangeLinked = !(!o.range || !o.rangeLinked || (o.type !== 'date' && o.type !== 'datetime'))),
          (r.autoCalendarModel = function () {
            var e = r.rangeLinked
            return (
              (r.rangeLinked =
                o.range &&
                (o.type === 'date' || o.type === 'datetime') &&
                (!r.startDate || !r.endDate || (r.startDate && r.endDate && r.startDate.year === r.endDate.year && r.startDate.month === r.endDate.month))),
              lay(r.elem)[r.rangeLinked ? 'addClass' : 'removeClass']('layui-laydate-linkage'),
              r.rangeLinked != e
            )
          }),
          (r.autoCalendarModel.auto = r.rangeLinked && o.rangeLinked === 'auto'),
          layui.type(o.range) === 'array' && (r.rangeElem = [lay(o.range[0]), lay(o.range[1])]),
          t[o.type] || (i.console && console.error && console.error("laydate type error:'" + o.type + "' is not supported"), (o.type = 'date')),
          o.format === t.date && (o.format = t[o.type] || t.date),
          (r.format = s.formatArr(o.format)),
          o.weekStart && !/^[0-6]$/.test(o.weekStart) && ((t = r.lang()), (o.weekStart = t.weeks.indexOf(o.weekStart)), o.weekStart === -1) && (o.weekStart = 0),
          (r.EXP_IF = ''),
          (r.EXP_SPLIT = ''),
          lay.each(r.format, function (e, t) {
            e = new RegExp(u).test(t)
              ? '\\d{' +
                (new RegExp(u).test(r.format[e === 0 ? e + 1 : e - 1] || '') ? (/^yyyy|y$/.test(t) ? 4 : t.length) : /^yyyy$/.test(t) ? '1,4' : /^y$/.test(t) ? '1,308' : '1,2') +
                '}'
              : '\\' + t
            ;(r.EXP_IF = r.EXP_IF + e), (r.EXP_SPLIT = r.EXP_SPLIT + '(' + e + ')')
          }),
          (r.EXP_IF_ONE = new RegExp('^' + r.EXP_IF + '$')),
          (r.EXP_IF = new RegExp('^' + (o.range ? r.EXP_IF + '\\s\\' + r.rangeStr + '\\s' + r.EXP_IF : r.EXP_IF) + '$')),
          (r.EXP_SPLIT = new RegExp('^' + r.EXP_SPLIT + '$', '')),
          r.isInput(o.elem[0]) || (o.trigger === 'focus' && (o.trigger = 'click')),
          o.elem.attr('lay-key', r.index),
          o.eventElem.attr('lay-key', r.index),
          o.elem.attr(d, o.id),
          lay.each(['min', 'max'], function (e, t) {
            var a = []
            var n = []
            if (typeof o[t] == 'number') {
              var i = o[t];
                var l = new Date();
                var l = r.newDate({ year: l.getFullYear(), month: l.getMonth(), date: l.getDate(), hours: e ? 23 : 0, minutes: e ? 59 : 0, seconds: e ? 59 : 0 }).getTime();
                var e = new Date(i ? (i < 864e5 ? l + 864e5 * i : i) : l);
                var a = [e.getFullYear(), e.getMonth() + 1, e.getDate()];
                var n = [e.getHours(), e.getMinutes(), e.getSeconds()] } else if (typeof o[t] == 'string') (a = (o[t].match(/\d+-\d+-\d+/) || [''])[0].split('-')), (n = (o[t].match(/\d+:\d+:\d+/) || [''])[0].split(':'))
            else if (typeof o[t] == 'object') return o[t]
            o[t] = {
              year: 0 | a[0] || new Date().getFullYear(),
              month: a[1] ? (0 | a[1]) - 1 : new Date().getMonth(),
              date: 0 | a[2] || new Date().getDate(),
              hours: 0 | n[0],
              minutes: 0 | n[1],
              seconds: 0 | n[2]
            }
          }),
          (r.elemID = 'layui-laydate' + o.elem.attr('lay-key')),
          (o.show || e) && r.render(),
          e || r.events(),
          typeof o.formatToDisplay == 'function' &&
            (r.isInput(o.elem[0])
              ? r.formatToDisplay(o.elem[0], o.formatToDisplay)
              : (t = r.rangeElem) && (r.formatToDisplay(t[0][0], o.formatToDisplay), r.formatToDisplay(t[1][0], o.formatToDisplay))),
          o.value) &&
          o.isInitValue &&
          (layui.type(o.value) === 'date' ? r.setValue(r.parse(0, r.systemDate(o.value))) : r.setValue(o.value))
    }),
    (k.prototype.render = function () {
      var a
      var n
      var i
      var l
      var r = this
      var o = r.config
      var d = r.lang()
      var s = 'static' === o.position
      var y = (r.elem = lay.elem('div', {
        id: r.elemID,
        class: [
          'layui-laydate',
          o.range ? ' layui-laydate-range' : '',
          r.rangeLinked ? ' layui-laydate-linkage' : '',
          s ? ' ' + v : '',
          o.fullPanel ? ' laydate-theme-fullpanel' : '',
          ((a = ''),
          lay.each(o.theme, function (e, t) {
            t === 'default' || /^#/.test(t) || (a += ' laydate-theme-' + t)
          }),
          a)
        ].join('')
      }))
      var m = (r.elemMain = [])
      var u = (r.elemHeader = [])
      var c = (r.elemCont = [])
      var h = (r.table = [])
      var e = (r.footer = lay.elem('div', { class: 'layui-laydate-footer' }))
      var t = (r.shortcut = lay.elem('ul', { class: 'layui-laydate-shortcut' }))
      var p =
        (o.zIndex && (y.style.zIndex = o.zIndex),
        lay.each(new Array(2), function (e) {
          if (!o.range && e > 0) return !0
          var a = lay.elem('div', { class: 'layui-laydate-header' });
              var t = [
                (((t = lay.elem('i', { class: 'layui-icon laydate-icon laydate-prev-y' })).innerHTML = '&#xe65a;'), t),
                (((t = lay.elem('i', { class: 'layui-icon laydate-icon laydate-prev-m' })).innerHTML = '&#xe603;'), t),
                ((t = lay.elem('div', { class: 'laydate-set-ym' })), (n = lay.elem('span')), (l = lay.elem('span')), t.appendChild(n), t.appendChild(l), t),
                (((n = lay.elem('i', { class: 'layui-icon laydate-icon laydate-next-m' })).innerHTML = '&#xe602;'), n),
                (((l = lay.elem('i', { class: 'layui-icon laydate-icon laydate-next-y' })).innerHTML = '&#xe65b;'), l)
              ];
              var n = lay.elem('div', { class: 'layui-laydate-content' });
              var i = lay.elem('table');
              var l = lay.elem('thead');
              var r = lay.elem('tr')
          lay.each(t, function (e, t) {
            a.appendChild(t)
          }),
            l.appendChild(r),
            lay.each(new Array(6), function (a) {
              var n = i.insertRow(0)
              lay.each(new Array(7), function (e) {
                var t
                0 === a && (((t = lay.elem('th')).innerHTML = d.weeks[(e + o.weekStart) % 7]), r.appendChild(t)), n.insertCell(e)
              })
            }),
            i.insertBefore(l, i.children[0]),
            n.appendChild(i),
            (m[e] = lay.elem('div', { class: 'layui-laydate-main laydate-main-list-' + e })),
            m[e].appendChild(a),
            m[e].appendChild(n),
            u.push(t),
            c.push(n),
            h.push(i)
        }),
        lay(e).html(
          ((p = []),
          (n = []),
          'datetime' === o.type && p.push('<span lay-type="datetime" class="' + I + '">' + d.timeTips + '</span>'),
          (o.range || o.type !== 'datetime' || o.fullPanel) && p.push('<span class="' + x + '" title="' + d.preview + '"></span>'),
          lay.each(o.btns, function (e, t) {
            var a = d.tools[t] || 'btn'
            ;(o.range && t === 'now') ||
              (s && t === 'clear' && (a = o.lang === 'cn' ? '\u91cd\u7f6e' : 'Reset'), n.push('<span lay-type="' + t + '" class="laydate-btns-' + t + '">' + a + '</span>'))
          }),
          p.push('<div class="laydate-footer-btns">' + n.join('') + '</div>'),
          p.join(''))
        ),
        o.shortcuts &&
          (y.appendChild(t),
          lay(t)
            .html(
              ((i = []),
              lay.each(o.shortcuts, function (e, t) {
                i.push('<li data-index="' + e + '">' + t.text + '</li>')
              }),
              i.join(''))
            )
            .find('li')
            .on('click', function (e) {
              var t = o.shortcuts[this.dataset.index] || {};
                  var t = ('function' == typeof t.value ? t.value() : t.value) || [];
                  var n = (layui.isArray(t) || (t = [t]), o.type);
                  var t =
                  (lay.each(t, function (e, t) {
                    var a = [o.dateTime, r.endDate][e]
                    'time' === n && layui.type(t) !== 'date'
                      ? r.EXP_IF.test(t) && ((t = (t.match(r.EXP_SPLIT) || []).slice(1)), lay.extend(a, { hours: 0 | t[0], minutes: 0 | t[2], seconds: 0 | t[4] }))
                      : lay.extend(a, r.systemDate(layui.type(t) === 'date' ? t : new Date(t))),
                      (n !== 'time' && n !== 'datetime') || (r[['startTime', 'endTime'][e]] = { hours: a.hours, minutes: a.minutes, seconds: a.seconds }),
                      e === 0 ? (r.startDate = lay.extend({}, a)) : (r.endState = !0),
                      'year' === n || n === 'month' || n === 'time' ? (r.listYM[e] = [a.year, a.month + 1]) : e && r.autoCalendarModel.auto && r.autoCalendarModel()
                  }),
                  r.checkDate('limit').calendar(null, null, 'init'),
                  lay(r.footer)
                    .find('.' + I)
                    .removeClass(C))
              t && t.attr('lay-type') === 'date' && t[0].click(), r.done(null, 'change'), lay(this).addClass(M), o.position !== 'static' && r.setValue(r.parse()).done().remove()
            })),
        lay.each(m, function (e, t) {
          y.appendChild(t)
        }),
        o.showBottom && y.appendChild(e),
        lay.elem('style'))
      var f = []
      var g = !0
      var t =
        (lay.each(o.theme, function (e, t) {
          g && /^#/.test(t)
            ? ((g = !(l = !0)),
              f.push(
                [
                  '#{{id}} .layui-laydate-header{background-color:{{theme}};}',
                  '#{{id}} li.layui-this,#{{id}} td.layui-this>div{background-color:{{theme}} !important;}',
                  o.theme.indexOf('circle') !== -1 ? '' : '#{{id}} .layui-this{background-color:{{theme}} !important;}',
                  '#{{id}} .laydate-day-now{color:{{theme}} !important;}',
                  '#{{id}} .laydate-day-now:after{border-color:{{theme}} !important;}'
                ]
                  .join('')
                  .replace(/{{id}}/g, r.elemID)
                  .replace(/{{theme}}/g, t)
              ))
            : !g &&
              /^#/.test(t) &&
              f.push(
                ['#{{id}} .laydate-selected>div{background-color:{{theme}} !important;}', '#{{id}} .laydate-selected:hover>div{background-color:{{theme}} !important;}']
                  .join('')
                  .replace(/{{id}}/g, r.elemID)
                  .replace(/{{theme}}/g, t)
              )
        }),
        o.shortcuts && o.range && f.push('#{{id}}.layui-laydate-range{width: 628px;}'.replace(/{{id}}/g, r.elemID)),
        f.length &&
          ((f = f.join('')),
          'styleSheet' in p ? (p.setAttribute('type', 'text/css'), (p.styleSheet.cssText = f)) : (p.innerHTML = f),
          l && lay(y).addClass('laydate-theme-molv'),
          y.appendChild(p)),
        r.remove(k.thisElemDate),
        (T.thisId = o.id),
        s ? o.elem.append(y) : (D.body.appendChild(y), r.position()),
        o.shade
          ? '<div class="' +
            w +
            '" style="z-index:' +
            (parseInt(layui.getStyle(y, 'z-index')) - 1) +
            '; background-color: ' +
            (o.shade[1] || '#000') +
            '; opacity: ' +
            (o.shade[0] || o.shade) +
            '"></div>'
          : '')
      y.insertAdjacentHTML('beforebegin', t),
        r.checkDate().calendar(null, 0, 'init'),
        r.changeEvent(),
        (k.thisElemDate = r.elemID),
        r.renderAdditional(),
        typeof o.ready == 'function' && o.ready(lay.extend({}, o.dateTime, { month: o.dateTime.month + 1 })),
        r.preview()
    }),
    (k.prototype.remove = function (e) {
      var t = this
      var a = t.config
      var n = lay('#' + (e || t.elemID))
      return (
        n[0] &&
          (n.hasClass(v) ||
            t.checkDate(function () {
              n.remove(), delete t.startDate, delete t.endDate, delete t.endState, delete t.startTime, delete t.endTime, delete T.thisId, typeof a.close == 'function' && a.close(t)
            }),
          lay('.' + w).remove()),
        t
      )
    }),
    (k.prototype.position = function () {
      var e = this.config
      return lay.position(e.elem[0], this.elem, { position: e.position }), this
    }),
    (k.prototype.hint = function (e) {
      var t = this
      var a = (t.config, lay.elem('div', { class: r }))
      t.elem &&
        ((a.innerHTML = (e = typeof e == 'object' ? e || {} : { content: e }).content || ''),
        lay(t.elem)
          .find('.' + r)
          .remove(),
        t.elem.appendChild(a),
        clearTimeout(t.hinTimer),
        (t.hinTimer = setTimeout(
          function () {
            lay(t.elem)
              .find('.' + r)
              .remove()
          },
          'ms' in e ? e.ms : 3e3
        )))
    }),
    (k.prototype.getAsYM = function (e, t, a) {
      return a ? t-- : t++, t < 0 && ((t = 11), e--), t > 11 && ((t = 0), e++), [e, t]
    }),
    (k.prototype.systemDate = function (e) {
      var t = e || new Date()
      return { year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hours: e ? e.getHours() : 0, minutes: e ? e.getMinutes() : 0, seconds: e ? e.getSeconds() : 0 }
    }),
    (k.prototype.checkDate = function (e) {
      var t
      var o
      var a
      var n
      var i
      var d = this
      var s = (new Date(), d.config)
      var l = d.lang()
      var r = (s.dateTime = s.dateTime || d.systemDate())
      var y = s.elem[0]
      var m =
        (d.isInput(y),
        (function () {
          if (d.rangeElem) {
            var e = [d.rangeElem[0].val(), d.rangeElem[1].val()]
            if (e[0] && e[1]) return e.join(' ' + d.rangeStr + ' ')
          }
          return d.isInput(y) ? y.value : s.position === 'static' ? '' : lay(y).attr('lay-date')
        })())
      var u = function (e) {
        e &&
          (e.year > h[1] && ((e.year = h[1]), (o = !0)),
          e.month > 11 && ((e.month = 11), (o = !0)),
          59 < e.seconds && ((e.seconds = 0), e.minutes++, (o = !0)),
          59 < e.minutes && ((e.minutes = 0), e.hours++, (o = !0)),
          e.hours > 23 && ((e.hours = 0), (o = !0)),
          (t = T.getEndDate(e.month + 1, e.year)),
          e.date > t) &&
          ((e.date = t), (o = !0))
      }
      var c = function (n, i, l) {
        var r = ['startTime', 'endTime']
        ;(i = (i.match(d.EXP_SPLIT) || []).slice(1)),
          (l = l || 0),
          s.range && (d[r[l]] = d[r[l]] || {}),
          lay.each(d.format, function (e, t) {
            var a = parseFloat(i[e])
            i[e].length < t.length && (o = !0),
              /yyyy|y/.test(t)
                ? (a < h[0] && ((a = h[0]), (o = !0)), (n.year = a))
                : /MM|M/.test(t)
                ? (a < 1 && ((a = 1), (o = !0)), (n.month = a - 1))
                : /dd|d/.test(t)
                ? (a < 1 && ((a = 1), (o = !0)), (n.date = a))
                : /HH|H/.test(t)
                ? (a < 0 && (o = !(a = 0)), a > 23 && ((a = 23), (o = !0)), (n.hours = a), s.range && (d[r[l]].hours = a))
                : /mm|m/.test(t)
                ? (a < 0 && (o = !(a = 0)), a > 59 && ((a = 59), (o = !0)), (n.minutes = a), s.range && (d[r[l]].minutes = a))
                : /ss|s/.test(t) && (a < 0 && (o = !(a = 0)), a > 59 && ((a = 59), (o = !0)), (n.seconds = a), s.range) && (d[r[l]].seconds = a)
          }),
          u(n)
      }
      return (
        e === 'limit'
          ? s.range
            ? (u(d.rangeLinked ? d.startDate : r), d.endDate && u(d.endDate))
            : u(r)
          : (typeof (m = m || s.value) == 'string' && (m = m.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '')),
            (a = function () {
              var e, t, a
              s.range &&
                (d.endDate =
                  d.endDate ||
                  lay.extend(
                    {},
                    s.dateTime,
                    ((e = {}),
                    (t = s.dateTime),
                    (a = d.getAsYM(t.year, t.month)),
                    s.type === 'year' ? (e.year = t.year + 1) : s.type !== 'time' && ((e.year = a[0]), (e.month = a[1])),
                    (s.type !== 'datetime' && s.type !== 'time') || ((e.hours = 23), (e.minutes = e.seconds = 59)),
                    e)
                  ))
            })(),
            typeof m == 'string' && m
              ? d.EXP_IF.test(m)
                ? s.range
                  ? ((m = m.split(' ' + d.rangeStr + ' ')),
                    lay.each([s.dateTime, d.endDate], function (e, t) {
                      c(t, m[e], e)
                    }))
                  : c(r, m)
                : (d.hint(l.formatError[0] + (s.range ? s.format + ' ' + d.rangeStr + ' ' + s.format : s.format) + l.formatError[1]), (o = !0))
              : m && layui.type(m) === 'date'
              ? (s.dateTime = d.systemDate(m))
              : ((s.dateTime = d.systemDate()), delete d.startTime, delete d.endDate, a(), delete d.endTime),
            d.rangeElem &&
              ((a = [d.rangeElem[0].val(), d.rangeElem[1].val()]),
              (n = [s.dateTime, d.endDate]),
              lay.each(a, function (e, t) {
                d.EXP_IF_ONE.test(t) && c(n[e], t, e)
              })),
            u(r),
            s.range && u(d.endDate),
            o && m && d.setValue(!s.range || d.endDate ? d.parse() : ''),
            d.getDateTime(r) > d.getDateTime(s.max)
              ? ((r = s.dateTime = lay.extend({}, s.max)), (i = !0))
              : d.getDateTime(r) < d.getDateTime(s.min) && ((r = s.dateTime = lay.extend({}, s.min)), (i = !0)),
            s.range &&
              ((d.getDateTime(d.endDate) < d.getDateTime(s.min) || d.getDateTime(d.endDate) > d.getDateTime(s.max)) && ((d.endDate = lay.extend({}, s.max)), (i = !0)),
              (d.startTime = { hours: s.dateTime.hours, minutes: s.dateTime.minutes, seconds: s.dateTime.seconds }),
              (d.endTime = { hours: d.endDate.hours, minutes: d.endDate.minutes, seconds: d.endDate.seconds }),
              s.type === 'month') &&
              ((s.dateTime.date = 1), (d.endDate.date = 1)),
            i && m && (d.setValue(d.parse()), d.hint('value ' + l.invalidDate + l.formatError[1])),
            (d.startDate = d.startDate || (m && lay.extend({}, s.dateTime))),
            d.autoCalendarModel.auto && d.autoCalendarModel(),
            (d.endState = !s.range || !d.rangeLinked || !(!d.startDate || !d.endDate)),
            e && e()),
        d
      )
    }),
    (k.prototype.markRender = function (e, a, t) {
      var n
      typeof t == 'object'
        ? lay.each(t || {}, function (e, t) {
            e = e.split('-')
            ;(e[0] != a[0] && e[0] != 0) || (e[1] != a[1] && e[1] != 0) || e[2] != a[2] || (n = t || a[2])
          })
        : typeof t == 'string' && (n = t || a[2]),
        n && e.find('div').html('<span class="laydate-day-mark">' + n + '</span>')
    }),
    (k.prototype.mark = function (t, a) {
      var n = this
      var e = n.config
      var i = function (e) {
        n.markRender(t, a, e)
      }
      return (
        e.calendar && e.lang === 'cn' && i(n.markerOfChineseFestivals),
        typeof e.mark == 'function' ? e.mark({ year: a[0], month: a[1], date: a[2] }, i) : typeof e.mark == 'object' && i(e.mark),
        n
      )
    }),
    (k.prototype.holidaysRender = function (r, o, e) {
      var d = ['holidays', 'workdays']
      var s = function (e, t, a) {
        e.find('div').html(['<span', ' class="laydate-day-holidays"', ' type="' + t + '"', '>', a, '</span>'].join(''))
      }
      layui.type(e) === 'array'
        ? lay.each(e, function (l, e) {
            lay.each(e, function (e, t) {
              var a, n, i
              ;(t = t),
                (a = r.attr('lay-ymd')),
                (n = t.split('-')),
                (i = a.split('-')),
                lay.each(n, function (e, t) {
                  n[e] = parseInt(t, 10)
                }),
                lay.each(i, function (e, t) {
                  i[e] = parseInt(t, 10)
                }),
                n.join('-') === i.join('-') && s(r, d[l], o[2])
            })
          })
        : typeof e == 'string' && d.indexOf(e) !== -1 && s(r, e, o[2])
    }),
    (k.prototype.holidays = function (t, a) {
      var n = this
      var e = n.config
      var i = function (e) {
        n.holidaysRender(t, a, e)
      }
      return typeof e.holidays == 'function' ? e.holidays({ year: a[0], month: a[1], date: a[2] }, i) : layui.type(e.holidays) === 'array' && i(e.holidays), n
    }),
    (k.prototype.cellRender = function (t, e, a) {
      var n = this.config
      return (
        typeof n.cellRender == 'function' &&
          n.cellRender(
            e,
            function (e) {
              typeof e == 'string' ? lay(t).html(e) : typeof e == 'object' && lay(t).html('').append(lay(e)[0])
            },
            { originElem: t, type: a }
          ),
        this
      )
    }),
    (k.prototype.startOfYear = function (e) {
      e = new Date(e)
      return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e
    }),
    (k.prototype.endOfYear = function (e) {
      var e = new Date(e)
      var t = e.getFullYear()
      return e.setFullYear(t + 1, 0, 0), e.setHours(23, 59, 59, 999), e
    }),
    (k.prototype.startOfMonth = function (e) {
      e = new Date(e)
      return e.setDate(1), e.setHours(0, 0, 0, 0), e
    }),
    (k.prototype.endOfMonth = function (e) {
      var e = new Date(e)
      var t = e.getMonth()
      return e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(23, 59, 59, 999), e
    }),
    (k.prototype.addDays = function (e, t) {
      e = new Date(e)
      return t && e.setDate(e.getDate() + t), e
    }),
    (k.prototype.isDisabledYearOrMonth = function (e, t, a) {
      for (
        var n = this,
          i = n.config,
          l = t === 'year' ? n.startOfYear(e) : n.startOfMonth(e),
          t = t === 'year' ? n.endOfYear(e) : n.endOfMonth(e),
          r = Math.floor((t.getTime() - l.getTime()) / 864e5) + 1,
          o = 0,
          d = 0;
        d < r;
        d++
      ) {
        var s = n.addDays(l, d)
        i.disabledDate.call(i, s, a) && o++
      }
      return o === r
    }),
    (k.prototype.isDisabledDate = function (e, t) {
      t = t || {}
      var a = this.config
      var n = !a.range || t.rangeType === 0 ? 'start' : 'end'
      return (
        !!a.disabledDate &&
        a.type !== 'time' &&
        (t.disabledType === 'date' || t.disabledType === 'datetime') &&
        ((e = new Date(e)).setHours(0, 0, 0, 0), t.type === 'year' || t.type === 'month' ? this.isDisabledYearOrMonth(e, t.type, n) : a.disabledDate.call(a, e, n))
      )
    }),
    (k.prototype.isDisabledTime = function (e, t) {
      t = t || {}
      var a
      var n = this.config
      var i = !n.range || t.rangeType === 0 ? 'start' : 'end'
      return (
        !!n.disabledTime &&
        !((n.type !== 'time' && n.type !== 'datetime') || (t.disabledType !== 'time' && t.disabledType !== 'datetime')) &&
        ((a = function (e, t, a) {
          return function () {
            return ((typeof t == 'function' && t.apply(n, a)) || []).indexOf(e) !== -1
          }
        }),
        (e = this.systemDate(new Date(e))),
        (i = n.disabledTime.call(n, this.newDate(e), i) || {}),
        t.disabledType === 'datetime'
          ? a(e.hours, i.hours)() || a(e.minutes, i.minutes, [e.hours])() || a(e.seconds, i.seconds, [e.hours, e.minutes])()
          : [a(e.hours, i.hours), a(e.minutes, i.minutes, [e.hours]), a(e.seconds, i.seconds, [e.hours, e.minutes])][t.time.length - 1]())
      )
    }),
    (k.prototype.isDisabledDateTime = function (e, t) {
      this.config
      return this.isDisabledDate(e, (t = t || {})) || this.isDisabledTime(e, t)
    }),
    (k.prototype.limit = function (t) {
      t = t || {}
      var i = this
      var e = i.config
      var l = {}
      var a = t.index > (t.time ? 0 : 41) ? i.endDate : e.dateTime
      return (
        lay.each({ now: lay.extend({}, a, t.date || {}), min: e.min, max: e.max }, function (e, a) {
          var n
          l[e] = i
            .newDate(
              lay.extend(
                { year: a.year, month: t.type === 'year' ? 0 : a.month, date: t.type === 'year' || t.type === 'month' ? 1 : a.date },
                ((n = {}),
                lay.each(t.time, function (e, t) {
                  n[t] = a[t]
                }),
                n)
              )
            )
            .getTime()
        }),
        (a = l.now < l.min || l.max < l.now || i.isDisabledDateTime(l.now, t)),
        t.elem && t.elem[a ? 'addClass' : 'removeClass'](C),
        a
      )
    }),
    (k.prototype.thisDateTime = function (e) {
      var t = this.config
      return e ? this.endDate : t.dateTime
    }),
    (k.prototype.calendar = function (e, i, t) {
      i = i ? 1 : 0
      var l
      var r
      var o
      var d = this
      var a = d.config
      var s = e || d.thisDateTime(i)
      var n = new Date()
      var y = d.lang()
      var m = 'date' !== a.type && 'datetime' !== a.type
      var u = lay(d.table[i]).find('td')
      var c = lay(d.elemHeader[i][2]).find('span')
      return (
        s.year < h[0] && ((s.year = h[0]), d.hint(y.invalidDate)),
        s.year > h[1] && ((s.year = h[1]), d.hint(y.invalidDate)),
        d.firstDate || (d.firstDate = lay.extend({}, s)),
        n.setFullYear(s.year, s.month, 1),
        (l = (n.getDay() + (7 - a.weekStart)) % 7),
        (r = T.getEndDate(s.month || 12, s.year)),
        (o = T.getEndDate(s.month + 1, s.year)),
        lay.each(u, function (e, t) {
          var a
          var n = [s.year, s.month]
          ;(t = lay(t)).removeAttr('class'),
            e < l
              ? ((a = r - l + e), t.addClass('laydate-day-prev'), (n = d.getAsYM(s.year, s.month, 'sub')))
              : l <= e && e < o + l
              ? ((a = e - l), d.rangeLinked || (a + 1 === s.date && t.addClass(M)))
              : ((a = e - o - l), t.addClass('laydate-day-next'), (n = d.getAsYM(s.year, s.month))),
            n[1]++,
            (n[2] = a + 1),
            t.attr('lay-ymd', n.join('-')).html('<div>' + n[2] + '</div>'),
            d
              .mark(t, n)
              .holidays(t, n)
              .limit({ elem: t, date: { year: n[0], month: n[1] - 1, date: n[2] }, index: e, rangeType: i, disabledType: 'date' }),
            d.cellRender(t, { year: n[0], month: n[1], date: n[2] }, 'date')
        }),
        lay(c[0]).attr('lay-ym', s.year + '-' + (s.month + 1)),
        lay(c[1]).attr('lay-ym', s.year + '-' + (s.month + 1)),
        d.panelYM || (d.panelYM = {}),
        (d.panelYM[i] = { year: s.year, month: s.month }),
        a.lang === 'cn'
          ? (lay(c[0])
              .attr('lay-type', 'year')
              .html(s.year + ' \u5e74'),
            lay(c[1])
              .attr('lay-type', 'month')
              .html(s.month + 1 + ' \u6708'))
          : (lay(c[0]).attr('lay-type', 'month').html(y.month[s.month]), lay(c[1]).attr('lay-type', 'year').html(s.year)),
        m &&
          (a.range
            ? (!e && t === 'init') ||
              ((d.listYM = [
                [(d.startDate || a.dateTime).year, (d.startDate || a.dateTime).month + 1],
                [d.endDate.year, d.endDate.month + 1]
              ]),
              d.list(a.type, 0).list(a.type, 1),
              a.type === 'time' ? d.setBtnStatus('\u65f6\u95f4', lay.extend({}, d.systemDate(), d.startTime), lay.extend({}, d.systemDate(), d.endTime)) : d.setBtnStatus(!0))
            : ((d.listYM = [[s.year, s.month + 1]]), d.list(a.type, 0))),
        a.range &&
          t === 'init' &&
          (d.rangeLinked ? ((n = d.getAsYM(s.year, s.month, i ? 'sub' : null)), d.calendar(lay.extend({}, s, { year: n[0], month: n[1] }), 1 - i)) : d.calendar(null, 1 - i)),
        a.range ||
          ((u = ['hours', 'minutes', 'seconds']),
          d.limit({
            elem: lay(d.footer).find('.laydate-btns-now'),
            date: d.systemDate(/^(datetime|time)$/.test(a.type) ? new Date() : null),
            index: 0,
            time: u,
            disabledType: 'datetime'
          }),
          d.limit({ elem: lay(d.footer).find(E), index: 0, time: u, disabledType: 'datetime' })),
        d.setBtnStatus(),
        lay(d.shortcut)
          .find('li.' + M)
          .removeClass(M),
        a.range && !m && t !== 'init' && d.stampRange(),
        d
      )
    }),
    (k.prototype.list = function (n, i) {
      var l
      var r
      var e
      var a
      var o
      var d
      var t
      var s = this
      var y = s.config
      var m = s.rangeLinked ? y.dateTime : [y.dateTime, s.endDate][i]
      var u = s.lang()
      var c = y.range && 'date' !== y.type && 'datetime' !== y.type
      var h = lay.elem('ul', { class: b + ' ' + { year: 'laydate-year-list', month: 'laydate-month-list', time: 'laydate-time-list' }[n] })
      var p = s.elemHeader[i]
      var f = lay(p[2]).find('span')
      var g = s.elemCont[i || 0]
      var D = lay(g).find('.' + b)[0]
      var T = 'cn' === y.lang
      var v = T ? '\u5e74' : ''
      var x = s.listYM[i] || {}
      var w = ['hours', 'minutes', 'seconds']
      var k = ['startTime', 'endTime'][i]
      return (
        x[0] < 1 && (x[0] = 1),
        n === 'year'
          ? ((e = l = x[0] - 7),
            l < 1 && (e = l = 1),
            lay.each(new Array(15), function (e) {
              var t = lay.elem('li', { 'lay-ym': l })
              var a = { year: l, month: 0, date: 1 }
              l == x[0] && lay(t).addClass(M),
                (t.innerHTML = l + v),
                h.appendChild(t),
                s.limit({ elem: lay(t), date: a, index: i, type: n, rangeType: i, disabledType: 'date' }),
                s.cellRender(t, { year: l, month: 1, date: 1 }, 'year'),
                l++
            }),
            lay(f[T ? 0 : 1])
              .attr('lay-ym', l - 8 + '-' + x[1])
              .html(e + v + ' - ' + (l - 1) + v))
          : n === 'month'
          ? (lay.each(new Array(12), function (e) {
              var t = lay.elem('li', { 'lay-ym': e })
              var a = { year: x[0], month: e, date: 1 }
              e + 1 == x[1] && lay(t).addClass(M),
                (t.innerHTML = u.month[e] + (T ? '\u6708' : '')),
                h.appendChild(t),
                s.limit({ elem: lay(t), date: a, index: i, type: n, rangeType: i, disabledType: 'date' }),
                s.cellRender(t, { year: x[0], month: e + 1, date: 1 }, 'month')
            }),
            lay(f[T ? 0 : 1])
              .attr('lay-ym', x[0] + '-' + x[1])
              .html(x[0] + v))
          : n === 'time' &&
            ((r = function () {
              lay(h)
                .find('ol')
                .each(function (a, e) {
                  lay(e)
                    .find('li')
                    .each(function (e, t) {
                      s.limit({
                        elem: lay(t),
                        date: [{ hours: e }, { hours: s[k].hours, minutes: e }, { hours: s[k].hours, minutes: s[k].minutes, seconds: e }][a],
                        index: i,
                        rangeType: i,
                        disabledType: 'time',
                        time: [['hours'], ['hours', 'minutes'], ['hours', 'minutes', 'seconds']][a]
                      })
                    })
                }),
                y.range || s.limit({ elem: lay(s.footer).find(E), date: s[k], index: 0, time: ['hours', 'minutes', 'seconds'], disabledType: 'datetime' })
            }),
            y.range ? s[k] || (s[k] = k === 'startTime' ? m : s.endDate) : (s[k] = m),
            lay.each([24, 60, 60], function (t, e) {
              var a = lay.elem('li')
              var n = ['<p>' + u.time[t] + '</p><ol>']
              lay.each(new Array(e), function (e) {
                n.push('<li' + (s[k][w[t]] === e ? ' class="' + M + '"' : '') + '>' + lay.digit(e, 2) + '</li>')
              }),
                (a.innerHTML = n.join('') + '</ol>'),
                h.appendChild(a)
            }),
            r(),
            (e = y.format.indexOf('H') !== -1),
            (f = y.format.indexOf('m') !== -1),
            (t = y.format.indexOf('s') !== -1),
            (a = h.children),
            (o = 0),
            lay.each([e, f, t], function (e, t) {
              t || ((a[e].className += ' layui-hide'), o++)
            }),
            (h.className += ' laydate-time-list-hide-' + o)),
        D && g.removeChild(D),
        g.appendChild(h),
        n === 'year' || n === 'month'
          ? (lay(s.elemMain[i]).addClass('laydate-ym-show'),
            lay(h)
              .find('li')
              .on('click', function () {
                var e = 0 | lay(this).attr('lay-ym')
                lay(this).hasClass(C) ||
                  (s.rangeLinked ? lay.extend(m, { year: n === 'year' ? e : x[0], month: n === 'year' ? x[1] - 1 : e }) : (m[n] = e),
                  y.type === 'year' || y.type === 'month'
                    ? (lay(h)
                        .find('.' + M)
                        .removeClass(M),
                      lay(this).addClass(M),
                      y.type === 'month' && n === 'year' && ((s.listYM[i][0] = e), c && ((i ? s.endDate : m).year = e), s.list('month', i)))
                    : (s.checkDate('limit').calendar(m, i, 'init'), s.closeList()),
                  s.setBtnStatus(),
                  !y.range && y.autoConfirm && ((y.type === 'month' && n === 'month') || (y.type === 'year' && n === 'year')) && s.setValue(s.parse()).done().remove(),
                  s.autoCalendarModel.auto && !s.rangeLinked ? s.choose(lay(g).find('td.layui-this'), i) : s.endState && s.done(null, 'change'),
                  lay(s.footer)
                    .find('.' + I)
                    .removeClass(C))
              }))
          : ((f = lay.elem('span', { class: L })),
            (d = function () {
              lay(h)
                .find('ol')
                .each(function (e) {
                  var a = this
                  var t = lay(a).find('li')
                  ;(a.scrollTop = 30 * (s[k][w[e]] - 2)),
                    a.scrollTop <= 0 &&
                      t.each(function (e, t) {
                        if (!lay(this).hasClass(C)) return (a.scrollTop = 30 * (e - 2)), !0
                      })
                })
            }),
            (t = lay(p[2]).find('.' + L)),
            d(),
            (f.innerHTML = y.range ? [u.startTime, u.endTime][i] : u.timeTips),
            lay(s.elemMain[i]).addClass('laydate-time-show'),
            t[0] && t.remove(),
            p[2].appendChild(f),
            (D = lay(h).find('ol')).each(function (t) {
              var a = this
              lay(a)
                .find('li')
                .on('click', function () {
                  var e = 0 | this.innerHTML
                  lay(this).hasClass(C) ||
                    (y.range ? (s[k][w[t]] = e) : (m[w[t]] = e),
                    lay(a)
                      .find('.' + M)
                      .removeClass(M),
                    lay(this).addClass(M),
                    r(),
                    d(),
                    (!s.endDate && y.type !== 'time' && y.type !== 'datetime') || s.done(null, 'change'),
                    s.setBtnStatus())
                })
            }),
            layui.device().mobile && D.css({ overflowY: 'auto', touchAction: 'pan-y' })),
        s
      )
    }),
    (k.prototype.listYM = []),
    (k.prototype.closeList = function () {
      var a = this
      a.config
      lay.each(a.elemCont, function (e, t) {
        lay(this)
          .find('.' + b)
          .remove(),
          lay(a.elemMain[e]).removeClass('laydate-ym-show laydate-time-show')
      }),
        lay(a.elem)
          .find('.' + L)
          .remove()
    }),
    (k.prototype.setBtnStatus = function (e, t, a) {
      var n = this
      var i = n.config
      var l = n.lang()
      var r = lay(n.footer).find(E)
      var o = i.type === 'datetime' || i.type === 'time' ? ['hours', 'minutes', 'seconds'] : undefined
      i.range &&
        ((t = t || (n.rangeLinked ? n.startDate : i.dateTime)),
        (a = a || n.endDate),
        (i = !n.endState || n.newDate(t).getTime() > n.newDate(a).getTime()),
        n.limit({ date: t, disabledType: 'datetime', time: o, rangeType: 0 }) || n.limit({ date: a, disabledType: 'datetime', time: o, rangeType: 1 })
          ? r.addClass(C)
          : r[i ? 'addClass' : 'removeClass'](C),
        e) &&
        i &&
        n.hint(typeof e == 'string' ? l.timeout.replace(/\u65e5\u671f/g, e) : l.timeout)
    }),
    (k.prototype.parse = function (e, t) {
      var a = this
      var n = a.config
      var i = a.rangeLinked ? a.startDate : n.dateTime
      var t = t || ('end' == e ? lay.extend({}, a.endDate, a.endTime) : n.range ? lay.extend({}, i || n.dateTime, a.startTime) : n.dateTime)
      var i = T.parse(t, a.format, 1)
      return n.range && e === undefined ? i + ' ' + a.rangeStr + ' ' + a.parse('end') : i
    }),
    (k.prototype.newDate = function (e) {
      return (e = e || {}), new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0)
    }),
    (k.prototype.getDateTime = function (e) {
      return this.newDate(e).getTime()
    }),
    (k.prototype.formatToDisplay = function (e, t) {
      var a = this
      var n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
      Object.defineProperty(
        e,
        'value',
        lay.extend({}, n, {
          get: function () {
            return this.getAttribute('lay-date')
          },
          set: function (e) {
            n.set.call(this, t.call(a, e)), this.setAttribute('lay-date', e)
          }
        })
      )
    }),
    (k.prototype.setValue = function (e) {
      var t
      var a = this
      var n = a.config
      var i = n.elem[0]
      return (
        n.position !== 'static' &&
          ((e = e || ''),
          a.isInput(i)
            ? lay(i).val(e)
            : (t = a.rangeElem)
            ? (layui.type(e) !== 'array' && (e = e.split(' ' + a.rangeStr + ' ')), t[0].val(e[0] || ''), t[1].val(e[1] || ''))
            : (lay(i).find('*').length === 0 && ((t = typeof n.formatToDisplay == 'function' ? n.formatToDisplay(e) : e), lay(i).html(t)), lay(i).attr('lay-date', e))),
        a
      )
    }),
    (k.prototype.preview = function () {
      var e
      var t = this
      var a = t.config
      a.isPreview &&
        ((e = lay(t.elem).find('.' + x)), (a = !a.range || (t.rangeLinked ? t.endState : t.endDate) ? t.parse() : ''), e.html(a), e.html()) &&
        (e.css({ color: '#16b777' }),
        setTimeout(function () {
          e.css({ color: '#777' })
        }, 300))
    }),
    (k.prototype.renderAdditional = function () {
      this.config.fullPanel && this.list('time', 0)
    }),
    (k.prototype.stampRange = function () {
      var n
      var i = this
      var l = i.config
      var r = i.rangeLinked ? i.startDate : l.dateTime
      var e = lay(i.elem).find('td')
      l.range && !i.endState && lay(i.footer).find(E).addClass(C),
        (r = r && i.newDate({ year: r.year, month: r.month, date: r.date }).getTime()),
        (n = i.endState && i.endDate && i.newDate({ year: i.endDate.year, month: i.endDate.month, date: i.endDate.date }).getTime()),
        lay.each(e, function (e, t) {
          var a = lay(t).attr('lay-ymd').split('-')
          var a = i.newDate({ year: a[0], month: a[1] - 1, date: a[2] }).getTime()
          l.rangeLinked && !i.startDate && a === i.newDate(i.systemDate()).getTime() && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? '' : 'laydate-day-now'),
            lay(t).removeClass(o + ' ' + M),
            (a !== r && a !== n) || ((i.rangeLinked || (!i.rangeLinked && (e < 42 ? a === r : a === n))) && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? o : M)),
            r < a && a < n && lay(t).addClass(o)
        })
    }),
    (k.prototype.done = function (e, t) {
      var a = this
      var n = a.config
      var i = lay.extend({}, lay.extend(a.rangeLinked ? a.startDate : n.dateTime, a.startTime))
      var l = lay.extend({}, lay.extend(a.endDate, a.endTime))
      return (
        lay.each([i, l], function (e, t) {
          'month' in t && lay.extend(t, { month: t.month + 1 })
        }),
        a.preview(),
        (e = e || [a.parse(), i, l]),
        t === 'change' && a.renderAdditional(),
        typeof n[t || 'done'] == 'function' && n[t || 'done'].apply(n, e),
        a
      )
    }),
    (k.prototype.checkPanelDate = function (e, t) {
      var a
      var n = this.config
      if (n.type === 'date' || n.type === 'datetime') {
        return (
          (n = t === 0),
          (e = e.month + 1),
          (a = this.panelYM[t].month + 1),
          (n = this.endState && ((n && a < e) || (!n && e < a)) ? 1 - t : t),
          { needFullRender: e !== a, index: n }
        )
      }
    }),
    (k.prototype.choose = function (e, a) {
      var n, i, t, l, r, o, d
      e.hasClass(C) ||
        ((i = (n = this).config),
        (t = a),
        n.rangeLinked && (n.endState || !n.startDate ? ((a = 0), (n.endState = !1)) : ((a = 1), (n.endState = !0))),
        (l = n.thisDateTime(a)),
        lay(n.elem).find('td'),
        (e = { year: 0 | (e = e.attr('lay-ymd').split('-'))[0], month: (0 | e[1]) - 1, date: 0 | e[2] }),
        lay.extend(l, e),
        i.range
          ? (lay.each(['startTime', 'endTime'], function (e, t) {
              ;(n[t] = n[t] || { hours: e ? 23 : 0, minutes: e ? 59 : 0, seconds: e ? 59 : 0 }),
                a === e &&
                  (n.getDateTime(lay.extend({}, l, n[t])) < n.getDateTime(i.min)
                    ? ((n[t] = { hours: i.min.hours, minutes: i.min.minutes, seconds: i.min.seconds }), lay.extend(l, n[t]))
                    : n.getDateTime(lay.extend({}, l, n[t])) > n.getDateTime(i.max) &&
                      ((n[t] = { hours: i.max.hours, minutes: i.max.minutes, seconds: i.max.seconds }), lay.extend(l, n[t])))
            }),
            a || (n.startDate = lay.extend({}, l)),
            n.endState &&
              !n.limit({ date: n.rangeLinked ? n.startDate : n.thisDateTime(1 - a), disabledType: 'date' }) &&
              (((r = n.endState && n.autoCalendarModel.auto ? n.autoCalendarModel() : r) || (n.rangeLinked && n.endState)) &&
                n.newDate(n.startDate) > n.newDate(n.endDate) &&
                (n.startDate.year === n.endDate.year &&
                  n.startDate.month === n.endDate.month &&
                  n.startDate.date === n.endDate.date &&
                  ((o = n.startTime), (n.startTime = n.endTime), (n.endTime = o)),
                (o = n.startDate),
                (n.startDate = lay.extend({}, n.endDate, n.startTime)),
                (i.dateTime = lay.extend({}, n.startDate)),
                (n.endDate = lay.extend({}, o, n.endTime))),
              r) &&
              (i.dateTime = lay.extend({}, n.startDate)),
            n.rangeLinked
              ? ((e = n.checkPanelDate(l, t)), (o = lay.extend({}, l)), (d = r || (e && e.needFullRender) ? 'init' : null), (e = e ? e.index : t), n.calendar(o, e, d))
              : n.calendar(null, a, r ? 'init' : null),
            n.endState && n.done(null, 'change'))
          : i.position === 'static'
          ? n.calendar().done().done(null, 'change')
          : i.type === 'date'
          ? i.autoConfirm
            ? n.setValue(n.parse()).done().remove()
            : n.calendar().done(null, 'change')
          : i.type === 'datetime' && n.calendar().done(null, 'change'))
    }),
    (k.prototype.tool = function (t, e) {
      var a = this
      var n = a.config
      var i = a.lang()
      var l = n.dateTime
      var r = 'static' === n.position
      var o = {
        datetime: function () {
          lay(t).hasClass(C) || (a.list('time', 0), n.range && a.list('time', 1), lay(t).attr('lay-type', 'date').html(a.lang().dateTips))
        },
        date: function () {
          a.closeList(), lay(t).attr('lay-type', 'datetime').html(a.lang().timeTips)
        },
        clear: function () {
          r && (lay.extend(l, a.firstDate), a.calendar()),
            n.range && (delete n.dateTime, delete a.endDate, delete a.startTime, delete a.endTime),
            a.setValue(''),
            a.done(null, 'onClear').done(['', {}, {}]).remove()
        },
        now: function () {
          var e = new Date()
          if (lay(t).hasClass(C)) return a.hint(i.tools.now + ', ' + i.invalidDate)
          lay.extend(l, a.systemDate(), { hours: e.getHours(), minutes: e.getMinutes(), seconds: e.getSeconds() }),
            a.setValue(a.parse()),
            r && a.calendar(),
            a.done(null, 'onNow').done().remove()
        },
        confirm: function () {
          if (n.range) {
            if (lay(t).hasClass(C)) {
              return (
                n.type === 'time'
                  ? a.startTime && a.endTime && a.newDate(a.startTime) > a.newDate(a.endTime)
                  : a.startDate && a.endDate && a.newDate(lay.extend({}, a.startDate, a.startTime || {})) > a.newDate(lay.extend({}, a.endDate, a.endTime || {}))
              )
                ? a.hint(n.type === 'time' ? i.timeout.replace(/\u65e5\u671f/g, '\u65f6\u95f4') : i.timeout)
                : a.hint(i.invalidDate)
            }
          } else if (lay(t).hasClass(C)) return a.hint(i.invalidDate)
          a.setValue(a.parse()), a.done(null, 'onConfirm').done().remove()
        }
      }
      o[e] && o[e]()
    }),
    (k.prototype.change = function (n) {
      var i = this
      var l = i.config
      var r = i.thisDateTime(n)
      var o = l.range && ('year' === l.type || 'month' === l.type)
      var d = i.elemCont[n || 0]
      var s = i.listYM[n]
      var e = function (e) {
        var t = lay(d).find('.laydate-year-list')[0]
        var a = lay(d).find('.laydate-month-list')[0]
        return (
          t && ((s[0] = e ? s[0] - 15 : s[0] + 15), i.list('year', n)),
          a && (e ? s[0]-- : s[0]++, i.list('month', n)),
          (t || a) &&
            (lay.extend(r, { year: s[0] }),
            o && (r.year = s[0]),
            l.range || i.done(null, 'change'),
            l.range || i.limit({ elem: lay(i.footer).find(E), date: { year: s[0] }, disabledType: 'datetime' })),
          i.setBtnStatus(),
          t || a
        )
      }
      return {
        prevYear: function () {
          e('sub') ||
            (i.rangeLinked
              ? (l.dateTime.year--, i.checkDate('limit').calendar(null, null, 'init'))
              : (r.year--, i.checkDate('limit').calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find('td.layui-this'), n) : i.done(null, 'change')))
        },
        prevMonth: function () {
          var e, t
          i.rangeLinked
            ? ((t = i.panelYM[0]),
              (t = i.getAsYM(t.year, t.month, 'sub')),
              (e = lay.extend({}, l.dateTime, i.panelYM[0], { year: t[0], month: t[1] })),
              i.checkDate('limit').calendar(e, null, 'init'))
            : ((t = i.getAsYM(r.year, r.month, 'sub')),
              lay.extend(r, { year: t[0], month: t[1] }),
              i.checkDate('limit').calendar(null, null, 'init'),
              i.autoCalendarModel.auto ? i.choose(lay(d).find('td.layui-this'), n) : i.done(null, 'change'))
        },
        nextMonth: function () {
          var e, t
          i.rangeLinked
            ? ((t = i.panelYM[0]),
              (t = i.getAsYM(t.year, t.month)),
              (e = lay.extend({}, l.dateTime, i.panelYM[0], { year: t[0], month: t[1] })),
              i.checkDate('limit').calendar(e, null, 'init'))
            : ((t = i.getAsYM(r.year, r.month)),
              lay.extend(r, { year: t[0], month: t[1] }),
              i.checkDate('limit').calendar(null, null, 'init'),
              i.autoCalendarModel.auto ? i.choose(lay(d).find('td.layui-this'), n) : i.done(null, 'change'))
        },
        nextYear: function () {
          e() ||
            (i.rangeLinked
              ? (l.dateTime.year++, i.checkDate('limit').calendar(null, 0, 'init'))
              : (r.year++, i.checkDate('limit').calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find('td.layui-this'), n) : i.done(null, 'change')))
        }
      }
    }),
    (k.prototype.changeEvent = function () {
      var i = this
      i.config
      lay(i.elem)
        .on('click', function (e) {
          lay.stope(e)
        })
        .on('mousedown', function (e) {
          lay.stope(e)
        }),
        lay.each(i.elemHeader, function (n, e) {
          lay(e[0]).on('click', function (e) {
            i.change(n).prevYear()
          }),
            lay(e[1]).on('click', function (e) {
              i.change(n).prevMonth()
            }),
            lay(e[2])
              .find('span')
              .on('click', function (e) {
                var t = lay(this)
                var a = t.attr('lay-ym')
                var t = t.attr('lay-type')
                a &&
                  ((a = a.split('-')),
                  (i.listYM[n] = [0 | a[0], 0 | a[1]]),
                  i.list(t, n),
                  lay(i.footer)
                    .find('.' + I)
                    .addClass(C))
              }),
            lay(e[3]).on('click', function (e) {
              i.change(n).nextMonth()
            }),
            lay(e[4]).on('click', function (e) {
              i.change(n).nextYear()
            })
        }),
        lay.each(i.table, function (e, t) {
          lay(t)
            .find('td')
            .on('click', function () {
              i.choose(lay(this), e)
            })
        }),
        lay(i.footer)
          .find('span')
          .on('click', function () {
            var e = lay(this).attr('lay-type')
            i.tool(this, e)
          })
    }),
    (k.prototype.isInput = function (e) {
      return /input|textarea/.test(e.tagName.toLocaleLowerCase()) || /INPUT|TEXTAREA/.test(e.tagName)
    }),
    (k.prototype.events = function () {
      var e
      var t = this
      var a = t.config
      a.elem[0] &&
        !a.elem[0].eventHandler &&
        (a.elem.on(
          a.trigger,
          (e = function () {
            T.thisId !== a.id && t.render()
          })
        ),
        (a.elem[0].eventHandler = !0),
        a.eventElem.on(a.trigger, e),
        (t.unbind = function () {
          t.remove(),
            a.elem.off(a.trigger, e),
            a.elem.removeAttr('lay-key'),
            a.elem.removeAttr(d),
            (a.elem[0].eventHandler = !1),
            a.eventElem.off(a.trigger, e),
            a.eventElem.removeAttr('lay-key'),
            delete s.that[a.id]
        }))
    }),
    (s.that = {}),
    (s.getThis = function (e) {
      var t = s.that[e]
      return !t && n && layui.hint().error(e ? a + " instance with ID '" + e + "' not found" : 'ID argument required'), t
    }),
    (l.run = function (n) {
      n(D)
        .on('mousedown', function (e) {
          var t, a
          T.thisId &&
            (t = s.getThis(T.thisId)) &&
            ((a = t.config), e.target === a.elem[0] || e.target === a.eventElem[0] || e.target === n(a.closeStop)[0] || (a.elem[0] && a.elem[0].contains(e.target)) || t.remove())
        })
        .on('keydown', function (e) {
          var t
          T.thisId &&
            (t = s.getThis(T.thisId)) &&
            t.config.position !== 'static' &&
            e.keyCode === 13 &&
            n('#' + t.elemID)[0] &&
            t.elemID === k.thisElemDate &&
            (e.preventDefault(), n(t.footer).find(E)[0].click())
        }),
        n(i).on('resize', function () {
          if (T.thisId) {
            var e = s.getThis(T.thisId)
            if (e) return !(!e.elem || !n('.layui-laydate')[0]) && void e.position()
          }
        })
    }),
    (T.render = function (e) {
      e = new k(e)
      return s.call(e)
    }),
    (T.reload = function (e, t) {
      e = s.getThis(e)
      if (e) return e.reload(t)
    }),
    (T.getInst = function (e) {
      e = s.getThis(e)
      if (e) return e.inst
    }),
    (T.hint = function (e, t) {
      e = s.getThis(e)
      if (e) return e.hint(t)
    }),
    (T.unbind = function (e) {
      e = s.getThis(e)
      if (e) return e.unbind()
    }),
    (T.close = function (e) {
      e = s.getThis(e || T.thisId)
      if (e) return e.remove()
    }),
    (T.parse = function (a, n, i) {
      return (
        (a = a || {}),
        (n = ((n = typeof n == 'string' ? s.formatArr(n) : n) || []).concat()),
        lay.each(n, function (e, t) {
          ;/yyyy|y/.test(t)
            ? (n[e] = lay.digit(a.year, t.length))
            : /MM|M/.test(t)
            ? (n[e] = lay.digit(a.month + (i || 0), t.length))
            : /dd|d/.test(t)
            ? (n[e] = lay.digit(a.date, t.length))
            : /HH|H/.test(t)
            ? (n[e] = lay.digit(a.hours, t.length))
            : /mm|m/.test(t)
            ? (n[e] = lay.digit(a.minutes, t.length))
            : /ss|s/.test(t) && (n[e] = lay.digit(a.seconds, t.length))
        }),
        n.join('')
      )
    }),
    (T.getEndDate = function (e, t) {
      var a = new Date()
      return a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1), new Date(a.getTime() - 864e5).getDate()
    }),
    n
      ? (T.ready(),
        layui.define('lay', function (e) {
          ;(T.path = layui.cache.dir), l.run(lay), e(a, T)
        }))
      : typeof define == 'function' && define.amd
      ? define(function () {
          return l.run(lay), T
        })
      : (T.ready(), l.run(i.lay), (i.laydate = T))
})(window, window.document)
!(function (e, t) {
  typeof module == 'object' && typeof module.exports == 'object'
    ? (module.exports = e.document
        ? t(e)
        : function (e) {
            if (e.document) return t(e)
            throw new Error('jQuery requires a window with a document')
          })
    : t(e)
})(typeof window != 'undefined' ? window : this, function (T, M) {
  var f = []
  var g = T.document
  var c = f.slice
  var O = f.concat
  var R = f.push
  var P = f.indexOf
  var B = {}
  var W = B.toString
  var m = B.hasOwnProperty
  var y = {}
  var e = '1.12.4'
  var C = function (e, t) {
    return new C.fn.init(e, t)
  }
  var I = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  var $ = /^-ms-/
  var z = /-([\da-z])/gi
  var X = function (e, t) {
    return t.toUpperCase()
  }
  function U(e) {
    var t = !!e && 'length' in e && e.length
    var n = C.type(e)
    return n !== 'function' && !C.isWindow(e) && (n === 'array' || t === 0 || (typeof t == 'number' && t > 0 && t - 1 in e))
  }
  ;(C.fn = C.prototype =
    {
      jquery: e,
      constructor: C,
      selector: '',
      length: 0,
      toArray: function () {
        return c.call(this)
      },
      get: function (e) {
        return e != null ? (e < 0 ? this[e + this.length] : this[e]) : c.call(this)
      },
      pushStack: function (e) {
        e = C.merge(this.constructor(), e)
        return (e.prevObject = this), (e.context = this.context), e
      },
      each: function (e) {
        return C.each(this, e)
      },
      map: function (n) {
        return this.pushStack(
          C.map(this, function (e, t) {
            return n.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(c.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length
        var e = +e + (e < 0 ? t : 0)
        return this.pushStack(e >= 0 && e < t ? [this[e]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: R,
      sort: f.sort,
      splice: f.splice
    }),
    (C.extend = C.fn.extend =
      function () {
        var e
        var t
        var n
        var r
        var i
        var o = arguments[0] || {}
        var a = 1
        var s = arguments.length
        var u = !1
        for (typeof o == 'boolean' && ((u = o), (o = arguments[a] || {}), a++), typeof o == 'object' || C.isFunction(o) || (o = {}), a === s && ((o = this), a--); a < s; a++) {
          if ((r = arguments[a]) != null)
            {for (n in r)
              (i = o[n]),
                o !== (t = r[n]) &&
                  (u && t && (C.isPlainObject(t) || (e = C.isArray(t)))
                    ? ((i = e ? ((e = !1), i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}), (o[n] = C.extend(u, i, t)))
                    : t !== undefined && (o[n] = t))}}
        return o
      }),
    C.extend({
      expando: 'jQuery' + (e + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isFunction: function (e) {
        return C.type(e) === 'function'
      },
      isArray:
        Array.isArray ||
        function (e) {
          return C.type(e) === 'array'
        },
      isWindow: function (e) {
        return e != null && e == e.window
      },
      isNumeric: function (e) {
        var t = e && e.toString()
        return !C.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1
        return !0
      },
      isPlainObject: function (e) {
        if (!e || C.type(e) !== 'object' || e.nodeType || C.isWindow(e)) return !1
        try {
          if (e.constructor && !m.call(e, 'constructor') && !m.call(e.constructor.prototype, 'isPrototypeOf')) return !1
        } catch (n) {
          return !1
        }
        if (!y.ownFirst) for (var t in e) return m.call(e, t)
        for (t in e);
        return t === undefined || m.call(e, t)
      },
      type: function (e) {
        return e == null ? e + '' : typeof e == 'object' || typeof e == 'function' ? B[W.call(e)] || 'object' : typeof e
      },
      globalEval: function (e) {
        e &&
          C.trim(e) &&
          (
            T.execScript ||
            function (e) {
              T.eval.call(T, e)
            }
          )(e)
      },
      camelCase: function (e) {
        return e.replace($, 'ms-').replace(z, X)
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function (e, t) {
        var n
        var r = 0
        if (U(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
        return e
      },
      trim: function (e) {
        return e == null ? '' : (e + '').replace(I, '')
      },
      makeArray: function (e, t) {
        t = t || []
        return e != null && (U(Object(e)) ? C.merge(t, typeof e == 'string' ? [e] : e) : R.call(t, e)), t
      },
      inArray: function (e, t, n) {
        var r
        if (t) {
          if (P) return P.call(t, e, n)
          for (r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0; n < r; n++) if (n in t && t[n] === e) return n
        }
        return -1
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++]
        if (n != n) for (; t[r] !== undefined; ) e[i++] = t[r++]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i])
        return r
      },
      map: function (e, t, n) {
        var r
        var i
        var o = 0
        var a = []
        if (U(e)) for (r = e.length; o < r; o++) (i = t(e[o], o, n)) != null && a.push(i)
        else for (o in e) (i = t(e[o], o, n)) != null && a.push(i)
        return O.apply([], a)
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r
        return (
          typeof t == 'string' && ((r = e[t]), (t = e), (e = r)),
          C.isFunction(e)
            ? ((n = c.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, n.concat(c.call(arguments)))
              }).guid = e.guid =
                e.guid || C.guid++),
              r)
            : undefined
        )
      },
      now: function () {
        return +new Date()
      },
      support: y
    }),
    typeof Symbol == 'function' && (C.fn[Symbol.iterator] = f[Symbol.iterator]),
    C.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
      B['[object ' + t + ']'] = t.toLowerCase()
    })
  var e = (function (M) {
    var e
    var g
    var b
    var o
    var O
    var w
    var R
    var P
    var T
    var u
    var l
    var C
    var E
    var t
    var N
    var m
    var r
    var i
    var y
    var k = 'sizzle' + +new Date()
    var v = M.document
    var S = 0
    var B = 0
    var W = le()
    var I = le()
    var A = le()
    var $ = function (e, t) {
      return e === t && (l = !0), 0
    }
    var z = {}.hasOwnProperty
    var n = []
    var X = n.pop
    var U = n.push
    var D = n.push
    var V = n.slice
    var j = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
      return -1
    }
    var Y = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'
    var a = '[\\x20\\t\\r\\n\\f]'
    var s = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+'
    var J = '\\[' + a + '*(' + s + ')(?:' + a + '*([*^$|!~]?=)' + a + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + s + '))|)' + a + '*\\]'
    var G = ':(' + s + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + J + ')*)|.*)\\)|)'
    var K = new RegExp(a + '+', 'g')
    var L = new RegExp('^' + a + '+|((?:^|[^\\\\])(?:\\\\.)*)' + a + '+$', 'g')
    var Q = new RegExp('^' + a + '*,' + a + '*')
    var Z = new RegExp('^' + a + '*([>+~]|' + a + ')' + a + '*')
    var ee = new RegExp('=' + a + '*([^\\]\'"]*?)' + a + '*\\]', 'g')
    var te = new RegExp(G)
    var ne = new RegExp('^' + s + '$')
    var f = {
      ID: new RegExp('^#(' + s + ')'),
      CLASS: new RegExp('^\\.(' + s + ')'),
      TAG: new RegExp('^(' + s + '|[*])'),
      ATTR: new RegExp('^' + J),
      PSEUDO: new RegExp('^' + G),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + a + '*(even|odd|(([+-]|)(\\d*)n|)' + a + '*(?:([+-]|)' + a + '*(\\d+)|))' + a + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + Y + ')$', 'i'),
      needsContext: new RegExp('^' + a + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + a + '*((?:-\\d)?\\d*)' + a + '*\\)|)(?=[^-]|$)', 'i')
    }
    var re = /^(?:input|select|textarea|button)$/i
    var ie = /^h\d$/i
    var c = /^[^{]+\{\s*\[native \w/
    var oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
    var ae = /[+~]/
    var se = /'|\\/g
    var d = new RegExp('\\\\([\\da-f]{1,6}' + a + '?|(' + a + ')|.)', 'ig')
    var p = function (e, t, n) {
      var r = '0x' + t - 65536
      return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
    }
    var ue = function () {
      C()
    }
    try {
      D.apply((n = V.call(v.childNodes)), v.childNodes), n[v.childNodes.length].nodeType
    } catch (F) {
      D = {
        apply: n.length
          ? function (e, t) {
              U.apply(e, V.call(t))
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1
            }
      }
    }
    function H(e, t, n, r) {
      var i
      var o
      var a
      var s
      var u
      var l
      var c
      var f
      var d = t && t.ownerDocument
      var p = t ? t.nodeType : 9
      if (((n = n || []), typeof e != 'string' || !e || (p !== 1 && p !== 9 && p !== 11))) return n
      if (!r && ((t ? t.ownerDocument || t : v) !== E && C(t), (t = t || E), N)) {
        if (p !== 11 && (l = oe.exec(e))) {
          if ((i = l[1])) {
            if (p === 9) {
              if (!(a = t.getElementById(i))) return n
              if (a.id === i) return n.push(a), n
            } else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
          } else {
            if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n
            if ((i = l[3]) && g.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(i)), n
          }
        }
        if (g.qsa && !A[e + ' '] && (!m || !m.test(e))) {
          if (p !== 1) (d = t), (f = e)
          else if (t.nodeName.toLowerCase() !== 'object') {
            for (
              (s = t.getAttribute('id')) ? (s = s.replace(se, '\\$&')) : t.setAttribute('id', (s = k)), o = (c = w(e)).length, u = ne.test(s) ? '#' + s : "[id='" + s + "']";
              o--;

            ) {
              c[o] = u + ' ' + _(c[o])
            }
            ;(f = c.join(',')), (d = (ae.test(e) && de(t.parentNode)) || t)
          }
          if (f) {
            try {
              return D.apply(n, d.querySelectorAll(f)), n
            } catch (h) {
            } finally {
              s === k && t.removeAttribute('id')
            }
          }
        }
      }
      return P(e.replace(L, '$1'), t, n, r)
    }
    function le() {
      var n = []
      function r(e, t) {
        return n.push(e + ' ') > b.cacheLength && delete r[n.shift()], (r[e + ' '] = t)
      }
      return r
    }
    function q(e) {
      return (e[k] = !0), e
    }
    function h(e) {
      var t = E.createElement('div')
      try {
        return !!e(t)
      } catch (F) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t)
      }
    }
    function ce(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) b.attrHandle[n[r]] = t
    }
    function fe(e, t) {
      var n = t && e
      var r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31)
      if (r) return r
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
      return e ? 1 : -1
    }
    function x(a) {
      return q(function (o) {
        return (
          (o = +o),
          q(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
          })
        )
      })
    }
    function de(e) {
      return e && typeof e.getElementsByTagName != 'undefined' && e
    }
    for (e in ((g = H.support = {}),
    (O = H.isXML =
      function (e) {
        e = e && (e.ownerDocument || e).documentElement
        return !!e && e.nodeName !== 'HTML'
      }),
    (C = H.setDocument =
      function (e) {
        var e = e ? e.ownerDocument || e : v
        return (
          e !== E &&
            e.nodeType === 9 &&
            e.documentElement &&
            ((t = (E = e).documentElement),
            (N = !O(E)),
            (e = E.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener('unload', ue, !1) : e.attachEvent && e.attachEvent('onunload', ue)),
            (g.attributes = h(function (e) {
              return (e.className = 'i'), !e.getAttribute('className')
            })),
            (g.getElementsByTagName = h(function (e) {
              return e.appendChild(E.createComment('')), !e.getElementsByTagName('*').length
            })),
            (g.getElementsByClassName = c.test(E.getElementsByClassName)),
            (g.getById = h(function (e) {
              return (t.appendChild(e).id = k), !E.getElementsByName || !E.getElementsByName(k).length
            })),
            g.getById
              ? ((b.find.ID = function (e, t) {
                  if (typeof t.getElementById != 'undefined' && N) return (e = t.getElementById(e)) ? [e] : []
                }),
                (b.filter.ID = function (e) {
                  var t = e.replace(d, p)
                  return function (e) {
                    return e.getAttribute('id') === t
                  }
                }))
              : (delete b.find.ID,
                (b.filter.ID = function (e) {
                  var t = e.replace(d, p)
                  return function (e) {
                    e = typeof e.getAttributeNode != 'undefined' && e.getAttributeNode('id')
                    return e && e.value === t
                  }
                })),
            (b.find.TAG = g.getElementsByTagName
              ? function (e, t) {
                  return typeof t.getElementsByTagName != 'undefined' ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
                }
              : function (e, t) {
                  var n
                  var r = []
                  var i = 0
                  var o = t.getElementsByTagName(e)
                  if (e !== '*') return o
                  for (; (n = o[i++]); ) n.nodeType === 1 && r.push(n)
                  return r
                }),
            (b.find.CLASS =
              g.getElementsByClassName &&
              function (e, t) {
                if (typeof t.getElementsByClassName != 'undefined' && N) return t.getElementsByClassName(e)
              }),
            (r = []),
            (m = []),
            (g.qsa = c.test(E.querySelectorAll)) &&
              (h(function (e) {
                ;(t.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + a + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || m.push('\\[' + a + '*(?:value|' + Y + ')'),
                  e.querySelectorAll('[id~=' + k + '-]').length || m.push('~='),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + k + '+*').length || m.push('.#.+[+~]')
              }),
              h(function (e) {
                var t = E.createElement('input')
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && m.push('name' + a + '*[*^$|!~]?='),
                  e.querySelectorAll(':enabled').length || m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:')
              })),
            (g.matchesSelector = c.test((i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector))) &&
              h(function (e) {
                ;(g.disconnectedMatch = i.call(e, 'div')), i.call(e, "[s!='']:x"), r.push('!=', G)
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (r = r.length && new RegExp(r.join('|'))),
            (e = c.test(t.compareDocumentPosition)),
            (y =
              e || c.test(t.contains)
                ? function (e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e
                    var t = t && t.parentNode
                    return e === t || !(!t || t.nodeType !== 1 || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0
                    return !1
                  }),
            ($ = e
              ? function (e, t) {
                  var n
                  return e === t
                    ? ((l = !0), 0)
                    : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) ||
                        (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!g.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === E || (e.ownerDocument === v && y(v, e))
                            ? -1
                            : t === E || (t.ownerDocument === v && y(v, t))
                            ? 1
                            : u
                            ? j(u, e) - j(u, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0
                  var n
                  var r = 0
                  var i = e.parentNode
                  var o = t.parentNode
                  var a = [e]
                  var s = [t]
                  if (!i || !o) return e === E ? -1 : t === E ? 1 : i ? -1 : o ? 1 : u ? j(u, e) - j(u, t) : 0
                  if (i === o) return fe(e, t)
                  for (n = e; (n = n.parentNode); ) a.unshift(n)
                  for (n = t; (n = n.parentNode); ) s.unshift(n)
                  for (; a[r] === s[r]; ) r++
                  return r ? fe(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0
                })),
          E
        )
      }),
    (H.matches = function (e, t) {
      return H(e, null, null, t)
    }),
    (H.matchesSelector = function (e, t) {
      if (((e.ownerDocument || e) !== E && C(e), (t = t.replace(ee, "='$1']")), g.matchesSelector && N && !A[t + ' '] && (!r || !r.test(t)) && (!m || !m.test(t)))) {
        try {
          var n = i.call(e, t)
          if (n || g.disconnectedMatch || (e.document && e.document.nodeType !== 11)) return n
        } catch (F) {}
      }
      return H(t, E, null, [e]).length > 0
    }),
    (H.contains = function (e, t) {
      return (e.ownerDocument || e) !== E && C(e), y(e, t)
    }),
    (H.attr = function (e, t) {
      ;(e.ownerDocument || e) !== E && C(e)
      var n = b.attrHandle[t.toLowerCase()]
      var n = n && z.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !N) : undefined
      return n !== undefined ? n : g.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
    }),
    (H.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }),
    (H.uniqueSort = function (e) {
      var t
      var n = []
      var r = 0
      var i = 0
      if (((l = !g.detectDuplicates), (u = !g.sortStable && e.slice(0)), e.sort($), l)) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i))
        for (; r--; ) e.splice(n[r], 1)
      }
      return (u = null), e
    }),
    (o = H.getText =
      function (e) {
        var t
        var n = ''
        var r = 0
        var i = e.nodeType
        if (i) {
          if (i === 1 || i === 9 || i === 11) {
            if (typeof e.textContent == 'string') return e.textContent
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (i === 3 || i === 4) return e.nodeValue
        } else for (; (t = e[r++]); ) n += o(t)
        return n
      }),
    ((b = H.selectors =
      {
        cacheLength: 50,
        createPseudo: q,
        match: f,
        attrHandle: {},
        find: {},
        relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(d, p)), (e[3] = (e[3] || e[4] || e[5] || '').replace(d, p)), e[2] === '~=' && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              e[1].slice(0, 3) === 'nth'
                ? (e[3] || H.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === 'even' || e[3] === 'odd'))), (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                : e[3] && H.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t
            var n = !e[6] && e[2]
            return f.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n && te.test(n) && (t = (t = w(n, !0)) && n.indexOf(')', n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(d, p).toLowerCase()
            return e === '*'
              ? function () {
                  return !0
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
          },
          CLASS: function (e) {
            var t = W[e + ' ']
            return (
              t ||
              ((t = new RegExp('(^|' + a + ')' + e + '(' + a + '|$)')) &&
                W(e, function (e) {
                  return t.test((typeof e.className == 'string' && e.className) || (typeof e.getAttribute != 'undefined' && e.getAttribute('class')) || '')
                }))
            )
          },
          ATTR: function (t, n, r) {
            return function (e) {
              e = H.attr(e, t)
              return e == null
                ? n === '!='
                : !n ||
                    ((e += ''),
                    n === '='
                      ? e === r
                      : n === '!='
                      ? e !== r
                      : n === '^='
                      ? r && e.indexOf(r) === 0
                      : n === '*='
                      ? r && e.indexOf(r) > -1
                      : n === '$='
                      ? r && e.slice(-r.length) === r
                      : n === '~='
                      ? (' ' + e.replace(K, ' ') + ' ').indexOf(r) > -1
                      : n === '|=' && (e === r || e.slice(0, r.length + 1) === r + '-'))
            }
          },
          CHILD: function (h, e, t, g, m) {
            var y = h.slice(0, 3) !== 'nth';
                var v = h.slice(-4) !== 'last';
                var x = e === 'of-type'
            return g === 1 && m === 0
              ? function (e) {
                  return !!e.parentNode
                }
              : function (e, t, n) {
                  var r
                  var i
                  var o
                  var a
                  var s
                  var u
                  var l = y != v ? 'nextSibling' : 'previousSibling'
                  var c = e.parentNode
                  var f = x && e.nodeName.toLowerCase()
                  var d = !n && !x
                  var p = !1
                  if (c) {
                    if (y) {
                      for (; l; ) {
                        for (a = e; (a = a[l]); ) if (x ? a.nodeName.toLowerCase() === f : a.nodeType === 1) return !1
                        u = l = h === 'only' && !u && 'nextSibling'
                      }
                      return !0
                    }
                    if (((u = [v ? c.firstChild : c.lastChild]), v && d)) {
                      for (
                        p = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                        (a = (++s && a && a[l]) || ((p = s = 0), u.pop()));

                      ) {
                        if (a.nodeType === 1 && ++p && a === e) {
                          i[h] = [S, s, p]
                          break
                        }
                      }
                    } else if (!1 === (p = d ? (s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) : p)) {
                      for (
                        ;
                        (a = (++s && a && a[l]) || ((p = s = 0), u.pop())) &&
                        ((x ? a.nodeName.toLowerCase() !== f : a.nodeType !== 1) ||
                          !++p ||
                          (d && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e));

                      );
                    }
                    return (p -= m) === g || (p % g == 0 && p / g >= 0)
                  }
                }
          },
          PSEUDO: function (e, o) {
            var t
            var a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || H.error('unsupported pseudo: ' + e)
            return a[k]
              ? a(o)
              : a.length > 1
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? q(function (e, t) {
                      for (var n, r = a(e, o), i = r.length; i--; ) e[(n = j(e, r[i]))] = !(t[n] = r[i])
                    })
                  : function (e) {
                      return a(e, 0, t)
                    })
              : a
          }
        },
        pseudos: {
          not: q(function (e) {
            var r = []
            var i = []
            var s = R(e.replace(L, '$1'))
            return s[k]
              ? q(function (e, t, n, r) {
                  for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i))
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                }
          }),
          has: q(function (t) {
            return function (e) {
              return H(t, e).length > 0
            }
          }),
          contains: q(function (t) {
            return (
              (t = t.replace(d, p)),
              function (e) {
                return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
              }
            )
          }),
          lang: q(function (n) {
            return (
              ne.test(n || '') || H.error('unsupported lang: ' + n),
              (n = n.replace(d, p).toLowerCase()),
              function (e) {
                var t
                do {
                  if ((t = N ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (t = t.toLowerCase()) === n || t.indexOf(n + '-') === 0
                } while ((e = e.parentNode) && e.nodeType === 1)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = M.location && M.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === t
          },
          focus: function (e) {
            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function (e) {
            return !1 === e.disabled
          },
          disabled: function (e) {
            return !0 === e.disabled
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase()
            return (t === 'input' && !!e.checked) || (t === 'option' && !!e.selected)
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return ie.test(e.nodeName)
          },
          input: function (e) {
            return re.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase()
            return (t === 'input' && e.type === 'button') || t === 'button'
          },
          text: function (e) {
            return e.nodeName.toLowerCase() === 'input' && e.type === 'text' && ((e = e.getAttribute('type')) == null || e.toLowerCase() === 'text')
          },
          first: x(function () {
            return [0]
          }),
          last: x(function (e, t) {
            return [t - 1]
          }),
          eq: x(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: x(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n)
            return e
          }),
          odd: x(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n)
            return e
          }),
          lt: x(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r)
            return e
          }),
          gt: x(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })) {
      b.pseudos[e] = (function (t) {
        return function (e) {
          return e.nodeName.toLowerCase() === 'input' && e.type === t
        }
      })(e)
    }
    for (e in { submit: !0, reset: !0 }) {
      b.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase()
          return (t === 'input' || t === 'button') && e.type === n
        }
      })(e)
    }
    function pe() {}
    function _(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
      return r
    }
    function he(a, e, t) {
      var s = e.dir
      var u = t && 'parentNode' === s
      var l = B++
      return e.first
        ? function (e, t, n) {
            for (; (e = e[s]); ) if (e.nodeType === 1 || u) return a(e, t, n)
          }
        : function (e, t, n) {
            var r
            var i
            var o = [S, l]
            if (n) {
              for (; (e = e[s]); ) if ((e.nodeType === 1 || u) && a(e, t, n)) return !0
            } else {
              for (; (e = e[s]);)
                if (e.nodeType === 1 || u) {
                  if ((r = (i = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {}))[s]) && r[0] === S && r[1] === l) return (o[2] = r[2])
                  if (((i[s] = o)[2] = a(e, t, n))) return !0
                }
            }
          }
    }
    function ge(i) {
      return i.length > 1
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1
            return !0
          }
        : i[0]
    }
    function me(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = t != null; s < u; s++) !(o = e[s]) || (n && !n(o, r, i)) || (a.push(o), l && t.push(s))
      return a
    }
    function ye(p, h, g, m, y, e) {
      return (
        m && !m[k] && (m = ye(m)),
        y && !y[k] && (y = ye(y, e)),
        q(function (e, t, n, r) {
          var i
          var o
          var a
          var s = []
          var u = []
          var l = t.length
          var c =
            e ||
            (function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) H(e, t[r], n)
              return n
            })(h || '*', n.nodeType ? [n] : n, [])
          var f = !p || (!e && h) ? c : me(c, s, p, n, r)
          var d = g ? (y || (e ? p : l || m) ? [] : t) : f
          if ((g && g(f, d, n, r), m)) for (i = me(d, u), m(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
          if (e) {
            if (y || p) {
              if (y) {
                for (i = [], o = d.length; o--; ) (a = d[o]) && i.push((f[o] = a))
                y(null, (d = []), i, r)
              }
              for (o = d.length; o--; ) (a = d[o]) && (i = y ? j(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a))
            }
          } else (d = me(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : D.apply(t, d)
        })
      )
    }
    return (
      (pe.prototype = b.filters = b.pseudos),
      (b.setFilters = new pe()),
      (w = H.tokenize =
        function (e, t) {
          var n
          var r
          var i
          var o
          var a
          var s
          var u
          var l = I[e + ' ']
          if (l) return t ? 0 : l.slice(0)
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (o in ((n && !(r = Q.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = Z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(L, ' ') }), (a = a.slice(n.length))),
            b.filter)) {
              !(r = f[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)))
            }
            if (!n) break
          }
          return t ? a.length : a ? H.error(e) : I(e, s).slice(0)
        }),
      (R = H.compile =
        function (e, t) {
          var n
          var m
          var y
          var v
          var x
          var r
          var i = []
          var o = []
          var a = A[e + ' ']
          if (!a) {
            for (n = (t = t || w(e)).length; n--; ) {
              ;((a = (function f(e) {
                for (
                  var r,
                    t,
                    n,
                    i = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[' '],
                    s = o ? 1 : 0,
                    u = he(
                      function (e) {
                        return e === r
                      },
                      a,
                      !0
                    ),
                    l = he(
                      function (e) {
                        return j(r, e) > -1
                      },
                      a,
                      !0
                    ),
                    c = [
                      function (e, t, n) {
                        return (e = (!o && (n || t !== T)) || ((r = t).nodeType ? u : l)(e, t, n)), (r = null), e
                      }
                    ];
                  s < i;
                  s++
                )
                  {if ((t = b.relative[e[s].type])) c = [he(ge(c), t)]
                    else {
                      if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < i && !b.relative[e[n].type]; n++);
                        return ye(
                          1 < s && ge(c),
                          1 < s && _(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace(L, '$1'),
                          t,
                          s < n && f(e.slice(s, n)),
                          n < i && f((e = e.slice(n))),
                          n < i && _(e)
                        )
                      }
                      c.push(t)
                    }}
                return ge(c)
              })(t[n]))[k]
                ? i
                : o
              ).push(a)
            }
            ;(a = A(
              e,
              ((m = o),
              (v = (y = i).length > 0),
              (x = m.length > 0),
              (r = function (e, t, n, r, i) {
                var o
                var a
                var s
                var u = 0
                var l = '0'
                var c = e && []
                var f = []
                var d = T
                var p = e || (x && b.find.TAG('*', i))
                var h = (S += null == d ? 1 : Math.random() || 0.1)
                var g = p.length
                for (i && (T = t === E || t || i); l !== g && (o = p[l]) != null; l++) {
                  if (x && o) {
                    for (a = 0, t || o.ownerDocument === E || (C(o), (n = !N)); (s = m[a++]); ) {
                      if (s(o, t || E, n)) {
                        r.push(o)
                        break
                      }
                    }
                    i && (S = h)
                  }
                  v && ((o = !s && o) && u--, e) && c.push(o)
                }
                if (((u += l), v && l !== u)) {
                  for (a = 0; (s = y[a++]); ) s(c, f, t, n)
                  if (e) {
                    if (u > 0) for (; l--; ) c[l] || f[l] || (f[l] = X.call(r))
                    f = me(f)
                  }
                  D.apply(r, f), i && !e && f.length > 0 && u + y.length > 1 && H.uniqueSort(r)
                }
                return i && ((S = h), (T = d)), c
              }),
              v ? q(r) : r)
            )).selector = e
          }
          return a
        }),
      (P = H.select =
        function (e, t, n, r) {
          var i
          var o
          var a
          var s
          var u
          var l = 'function' == typeof e && e
          var c = !r && w((e = l.selector || e))
          if (((n = n || []), c.length === 1)) {
            if ((o = c[0] = c[0].slice(0)).length > 2 && (a = o[0]).type === 'ID' && g.getById && t.nodeType === 9 && N && b.relative[o[1].type]) {
              if (!(t = (b.find.ID(a.matches[0].replace(d, p), t) || [])[0])) return n
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
            }
            for (i = f.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !b.relative[(s = a.type)]); ) {
              if ((u = b.find[s]) && (r = u(a.matches[0].replace(d, p), (ae.test(o[0].type) && de(t.parentNode)) || t))) {
                if ((o.splice(i, 1), (e = r.length && _(o)))) break
                return D.apply(n, r), n
              }
            }
          }
          return (l || R(e, c))(r, t, !N, n, !t || (ae.test(e) && de(t.parentNode)) || t), n
        }),
      (g.sortStable = k.split('').sort($).join('') === k),
      (g.detectDuplicates = !!l),
      C(),
      (g.sortDetached = h(function (e) {
        return 1 & e.compareDocumentPosition(E.createElement('div'))
      })),
      h(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), e.firstChild.getAttribute('href') === '#'
      }) ||
        ce('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2)
        }),
      (g.attributes &&
        h(function (e) {
          return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), e.firstChild.getAttribute('value') === ''
        })) ||
        ce('value', function (e, t, n) {
          if (!n && e.nodeName.toLowerCase() === 'input') return e.defaultValue
        }),
      h(function (e) {
        return e.getAttribute('disabled') == null
      }) ||
        ce(Y, function (e, t, n) {
          if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
      H
    )
  })(T)
  var r =
    ((C.find = e),
    (C.expr = e.selectors),
    (C.expr[':'] = C.expr.pseudos),
    (C.uniqueSort = C.unique = e.uniqueSort),
    (C.text = e.getText),
    (C.isXMLDoc = e.isXML),
    (C.contains = e.contains),
    function (e, t, n) {
      for (var r = [], i = n !== undefined; (e = e[t]) && e.nodeType !== 9;)
        if (e.nodeType === 1) {
          if (i && C(e).is(n)) break
          r.push(e)
        }
      return r
    })
  var V = function (e, t) {
    for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e)
    return n
  }
  var Y = C.expr.match.needsContext
  var J = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
  var G = /^.[^:#\[\.,]*$/
  function K(e, n, r) {
    if (C.isFunction(n)) {
      return C.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r
      })
    }
    if (n.nodeType) {
      return C.grep(e, function (e) {
        return (e === n) !== r
      })
    }
    if (typeof n == 'string') {
      if (G.test(n)) return C.filter(n, e, r)
      n = C.filter(n, e)
    }
    return C.grep(e, function (e) {
      return C.inArray(e, n) > -1 !== r
    })
  }
  ;(C.filter = function (e, t, n) {
    var r = t[0]
    return (
      n && (e = ':not(' + e + ')'),
      t.length === 1 && r.nodeType === 1
        ? C.find.matchesSelector(r, e)
          ? [r]
          : []
        : C.find.matches(
            e,
            C.grep(t, function (e) {
              return e.nodeType === 1
            })
          )
    )
  }),
    C.fn.extend({
      find: function (e) {
        var t
        var n = []
        var r = this
        var i = r.length
        if (typeof e != 'string') {
          return this.pushStack(
            C(e).filter(function () {
              for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0
            })
          )
        }
        for (t = 0; t < i; t++) C.find(e, r[t], n)
        return ((n = this.pushStack(i > 1 ? C.unique(n) : n)).selector = this.selector ? this.selector + ' ' + e : e), n
      },
      filter: function (e) {
        return this.pushStack(K(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(K(this, e || [], !0))
      },
      is: function (e) {
        return !!K(this, typeof e == 'string' && Y.test(e) ? C(e) : e || [], !1).length
      }
    })
  var Q
  var Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
  var ee =
    (((C.fn.init = function (e, t, n) {
      if (e) {
        if (((n = n || Q), typeof e != 'string'))
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : C.isFunction(e)
            ? typeof n.ready != 'undefined'
              ? n.ready(e)
              : e(C)
            : (e.selector !== undefined && ((this.selector = e.selector), (this.context = e.context)), C.makeArray(e, this))
        if (!(r = e.charAt(0) === '<' && e.charAt(e.length - 1) === '>' && e.length >= 3 ? [null, e, null] : Z.exec(e)) || (!r[1] && t))
          return (!t || t.jquery ? t || n : this.constructor(t)).find(e)
        if (r[1]) {
          if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), J.test(r[1]) && C.isPlainObject(t)))
            for (var r in t) C.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
        } else {
          if ((n = g.getElementById(r[2])) && n.parentNode) {
            if (n.id !== r[2]) return Q.find(e)
            ;(this.length = 1), (this[0] = n)
          }
          ;(this.context = g), (this.selector = e)
        }
      }
      return this
    }).prototype = C.fn),
    (Q = C(g)),
    /^(?:parents|prev(?:Until|All))/)
  var te = { children: !0, contents: !0, next: !0, prev: !0 }
  function ne(e, t) {
    for (; (e = e[t]) && e.nodeType !== 1; );
    return e
  }
  C.fn.extend({
    has: function (e) {
      var t
      var n = C(e, this)
      var r = n.length
      return this.filter(function () {
        for (t = 0; t < r; t++) if (C.contains(this, n[t])) return !0
      })
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], a = Y.test(e) || typeof e != 'string' ? C(e, t || this.context) : 0; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode)
          {if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
            o.push(n)
            break
          }}}
      return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? (typeof e == 'string' ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  }),
    C.each(
      {
        parent: function (e) {
          e = e.parentNode
          return e && e.nodeType !== 11 ? e : null
        },
        parents: function (e) {
          return r(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
          return r(e, 'parentNode', n)
        },
        next: function (e) {
          return ne(e, 'nextSibling')
        },
        prev: function (e) {
          return ne(e, 'previousSibling')
        },
        nextAll: function (e) {
          return r(e, 'nextSibling')
        },
        prevAll: function (e) {
          return r(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
          return r(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
          return r(e, 'previousSibling', n)
        },
        siblings: function (e) {
          return V((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return V(e.firstChild)
        },
        contents: function (e) {
          return C.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
        }
      },
      function (r, i) {
        C.fn[r] = function (e, t) {
          var n = C.map(this, i, e)
          return (
            (t = r.slice(-5) !== 'Until' ? e : t) && typeof t == 'string' && (n = C.filter(t, n)),
            this.length > 1 && (te[r] || (n = C.uniqueSort(n)), ee.test(r)) && (n = n.reverse()),
            this.pushStack(n)
          )
        }
      }
    )
  var re
  var ie
  var E = /\S+/g
  function oe() {
    g.addEventListener ? (g.removeEventListener('DOMContentLoaded', i), T.removeEventListener('load', i)) : (g.detachEvent('onreadystatechange', i), T.detachEvent('onload', i))
  }
  function i() {
    ;(!g.addEventListener && T.event.type !== 'load' && g.readyState !== 'complete') || (oe(), C.ready())
  }
  for (ie in ((C.Callbacks = function (r) {
    var e, n
    r =
      typeof r == 'string'
        ? ((e = r),
          (n = {}),
          C.each(e.match(E) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : C.extend({}, r)
    var i
    var t
    var o
    var a
    var s = []
    var u = []
    var l = -1
    var c = function () {
      for (a = r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1))
      r.memory || (t = !1), (i = !1), a && (s = t ? [] : '')
    }
    var f = {
      add: function () {
        return (
          s &&
            (t && !i && ((l = s.length - 1), u.push(t)),
            (function n(e) {
              C.each(e, function (e, t) {
                C.isFunction(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && C.type(t) !== 'string' && n(t)
              })
            })(arguments),
            t) &&
            !i &&
            c(),
          this
        )
      },
      remove: function () {
        return (
          C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--
          }),
          this
        )
      },
      has: function (e) {
        return e ? C.inArray(e, s) > -1 : s.length > 0
      },
      empty: function () {
        return (s = s && []), this
      },
      disable: function () {
        return (a = u = []), (s = t = ''), this
      },
      disabled: function () {
        return !s
      },
      lock: function () {
        return (a = !0), t || f.disable(), this
      },
      locked: function () {
        return !!a
      },
      fireWith: function (e, t) {
        return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i) || c(), this
      },
      fire: function () {
        return f.fireWith(this, arguments), this
      },
      fired: function () {
        return !!o
      }
    }
    return f
  }),
  C.extend({
    Deferred: function (e) {
      var o = [
        ['resolve', 'done', C.Callbacks('once memory'), 'resolved'],
        ['reject', 'fail', C.Callbacks('once memory'), 'rejected'],
        ['notify', 'progress', C.Callbacks('memory')]
      ]
      var i = 'pending'
      var a = {
        state: function () {
          return i
        },
        always: function () {
          return s.done(arguments).fail(arguments), this
        },
        then: function () {
          var i = arguments
          return C.Deferred(function (r) {
            C.each(o, function (e, t) {
              var n = C.isFunction(i[e]) && i[e]
              s[t[1]](function () {
                var e = n && n.apply(this, arguments)
                e && C.isFunction(e.promise)
                  ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                  : r[t[0] + 'With'](this === a ? r.promise() : this, n ? [e] : arguments)
              })
            }),
              (i = null)
          }).promise()
        },
        promise: function (e) {
          return e != null ? C.extend(e, a) : a
        }
      }
      var s = {}
      return (
        (a.pipe = a.then),
        C.each(o, function (e, t) {
          var n = t[2]
          var r = t[3]
          ;(a[t[1]] = n.add),
            r &&
              n.add(
                function () {
                  i = r
                },
                o[1 ^ e][2].disable,
                o[2][2].lock
              ),
            (s[t[0]] = function () {
              return s[t[0] + 'With'](this === s ? a : this, arguments), this
            }),
            (s[t[0] + 'With'] = n.fireWith)
        }),
        a.promise(s),
        e && e.call(s, s),
        s
      )
    },
    when: function (e) {
      var i
      var t
      var n
      var r = 0
      var o = c.call(arguments)
      var a = o.length
      var s = 1 !== a || (e && C.isFunction(e.promise)) ? a : 0
      var u = 1 === s ? e : C.Deferred()
      var l = function (t, n, r) {
        return function (e) {
          ;(n[t] = this), (r[t] = arguments.length > 1 ? c.call(arguments) : e), r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
        }
      }
      if (a > 1) {
        for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++)
          {o[r] && C.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --s}}
      return s || u.resolveWith(n, o), u.promise()
    }
  }),
  (C.fn.ready = function (e) {
    return C.ready.promise().done(e), this
  }),
  C.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? C.readyWait++ : C.ready(!0)
    },
    ready: function (e) {
      ;(!0 === e ? --C.readyWait : C.isReady) ||
        ((C.isReady = !0) !== e && --C.readyWait > 0) ||
        (re.resolveWith(g, [C]), C.fn.triggerHandler && (C(g).triggerHandler('ready'), C(g).off('ready')))
    }
  }),
  (C.ready.promise = function (e) {
    if (!re) {
      if (((re = C.Deferred()), g.readyState === 'complete' || (g.readyState !== 'loading' && !g.documentElement.doScroll))) T.setTimeout(C.ready)
      else if (g.addEventListener) g.addEventListener('DOMContentLoaded', i), T.addEventListener('load', i)
      else {
        g.attachEvent('onreadystatechange', i), T.attachEvent('onload', i)
        var t = !1
        try {
          t = T.frameElement == null && g.documentElement
        } catch (n) {}
        t &&
          t.doScroll &&
          !(function r() {
            if (!C.isReady) {
              try {
                t.doScroll('left')
              } catch (n) {
                return T.setTimeout(r, 50)
              }
              oe(), C.ready()
            }
          })()
      }
    }
    return re.promise(e)
  }),
  C.ready.promise(),
  C(y))) {
    break
  }
  ; }(y.ownFirst = ie === '0'),
    (y.inlineBlockNeedsLayout = !1),
    C(function () {
      var e
      var t
      var n = g.getElementsByTagName('body')[0]
      n &&
        n.style &&
        ((e = g.createElement('div')),
        ((t = g.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
        n.appendChild(t).appendChild(e),
        typeof e.style.zoom != 'undefined' &&
          ((e.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'), (y.inlineBlockNeedsLayout = e = e.offsetWidth === 3), e) &&
          (n.style.zoom = 1),
        n.removeChild(t))
    })
  e = g.createElement('div')
  y.deleteExpando = !0
  try {
    delete e.test
  } catch (yn) {
    y.deleteExpando = !1
  }
  var o
  var v = function (e) {
    var t = C.noData[(e.nodeName + ' ').toLowerCase()];
        var n = +e.nodeType || 1
    return (n === 1 || n === 9) && (!t || (!0 !== t && e.getAttribute('classid') === t))
  }
  var ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
  var se = /([A-Z])/g
  function ue(e, t, n) {
    if (n === undefined && e.nodeType === 1) {
      var r = 'data-' + t.replace(se, '-$1').toLowerCase()
      if (typeof (n = e.getAttribute(r)) == 'string') {
        try {
          n = n === 'true' || (n !== 'false' && (n === 'null' ? null : +n + '' === n ? +n : ae.test(n) ? C.parseJSON(n) : n))
        } catch (i) {}
        C.data(e, t, n)
      } else n = undefined
    }
    return n
  }
  function le(e) {
    for (var t in e) if ((t !== 'data' || !C.isEmptyObject(e[t])) && t !== 'toJSON') return
    return 1
  }
  function ce(e, t, n, r) {
    if (v(e)) {
      var i
      var o = C.expando
      var a = e.nodeType
      var s = a ? C.cache : e
      var u = a ? e[o] : e[o] && o
      if ((u && s[u] && (r || s[u].data)) || n !== undefined || typeof t != 'string') {
        return (
          s[(u = u || (a ? (e[o] = f.pop() || C.guid++) : o))] || (s[u] = a ? {} : { toJSON: C.noop }),
          (typeof t != 'object' && typeof t != 'function') || (r ? (s[u] = C.extend(s[u], t)) : (s[u].data = C.extend(s[u].data, t))),
          (e = s[u]),
          r || (e.data || (e.data = {}), (e = e.data)),
          n !== undefined && (e[C.camelCase(t)] = n),
          typeof t == 'string' ? (i = e[t]) == null && (i = e[C.camelCase(t)]) : (i = e),
          i
        )
      }
    }
  }
  function fe(e, t, n) {
    if (v(e)) {
      var r
      var i
      var o = e.nodeType
      var a = o ? C.cache : e
      var s = o ? e[C.expando] : C.expando
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in r || (t = C.camelCase(t)) in r ? [t] : t.split(' ')).length
          for (; i--; ) delete r[t[i]]
          if (n ? !le(r) : !C.isEmptyObject(r)) return
        }
        ;(n || (delete a[s].data, le(a[s]))) && (o ? C.cleanData([e], !0) : y.deleteExpando || a != a.window ? delete a[s] : (a[s] = undefined))
      }
    }
  }
  C.extend({
    cache: {},
    noData: { 'applet ': !0, 'embed ': !0, 'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' },
    hasData: function (e) {
      return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !le(e)
    },
    data: function (e, t, n) {
      return ce(e, t, n)
    },
    removeData: function (e, t) {
      return fe(e, t)
    },
    _data: function (e, t, n) {
      return ce(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return fe(e, t, !0)
    }
  }),
    C.fn.extend({
      data: function (e, t) {
        var n
        var r
        var i
        var o = this[0]
        var a = o && o.attributes
        if (e !== undefined) {
          return typeof e == 'object'
            ? this.each(function () {
                C.data(this, e)
              })
            : arguments.length > 1
            ? this.each(function () {
                C.data(this, e, t)
              })
            : o
            ? ue(o, e, C.data(o, e))
            : undefined
        }
        if (this.length && ((i = C.data(o)), o.nodeType === 1) && !C._data(o, 'parsedAttrs')) {
          for (n = a.length; n--; ) a[n] && (r = a[n].name).indexOf('data-') === 0 && ue(o, (r = C.camelCase(r.slice(5))), i[r])
          C._data(o, 'parsedAttrs', !0)
        }
        return i
      },
      removeData: function (e) {
        return this.each(function () {
          C.removeData(this, e)
        })
      }
    }),
    C.extend({
      queue: function (e, t, n) {
        var r
        if (e) return (r = C._data(e, (t = (t || 'fx') + 'queue'))), n && (!r || C.isArray(n) ? (r = C._data(e, t, C.makeArray(n))) : r.push(n)), r || []
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var n = C.queue(e, t)
        var r = n.length
        var i = n.shift()
        var o = C._queueHooks(e, t)
        i === 'inprogress' && ((i = n.shift()), r--),
          i &&
            (t === 'fx' && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                C.dequeue(e, t)
              },
              o
            )),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks'
        return (
          C._data(e, n) ||
          C._data(e, n, {
            empty: C.Callbacks('once memory').add(function () {
              C._removeData(e, t + 'queue'), C._removeData(e, n)
            })
          })
        )
      }
    }),
    C.fn.extend({
      queue: function (t, n) {
        var e = 2
        return (
          typeof t != 'string' && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? C.queue(this[0], t)
            : n === undefined
            ? this
            : this.each(function () {
                var e = C.queue(this, t, n)
                C._queueHooks(this, t), t === 'fx' && e[0] !== 'inprogress' && C.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, t) {
        var n
        var r = 1
        var i = C.Deferred()
        var o = this
        var a = this.length
        var s = function () {
          --r || i.resolveWith(o, [o])
        }
        for (typeof e != 'string' && ((t = e), (e = undefined)), e = e || 'fx'; a--; ) (n = C._data(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s))
        return s(), i.promise(t)
      }
    }),
    (y.shrinkWrapBlocks = function () {
      var e, t, n
      return o != null
        ? o
        : ((o = !1),
          (t = g.getElementsByTagName('body')[0]) && t.style
            ? ((e = g.createElement('div')),
              ((n = g.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
              t.appendChild(n).appendChild(e),
              typeof e.style.zoom != 'undefined' &&
                ((e.style.cssText =
                  '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
                (e.appendChild(g.createElement('div')).style.width = '5px'),
                (o = e.offsetWidth !== 3)),
              t.removeChild(n),
              o)
            : void 0)
    })
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
  var de = new RegExp('^(?:([+-])=|)(' + e + ')([a-z%]*)$', 'i')
  var s = ['Top', 'Right', 'Bottom', 'Left']
  var pe = function (e, t) {
    return C.css((e = t || e), 'display') === 'none' || !C.contains(e.ownerDocument, e)
  }
  function he(e, t, n, r) {
    var i
    var o = 1
    var a = 20
    var s = r
      ? function () {
          return r.cur()
        }
      : function () {
          return C.css(e, t, '')
        }
    var u = s()
    var l = (n && n[3]) || (C.cssNumber[t] ? '' : 'px')
    var c = (C.cssNumber[t] || (l !== 'px' && +u)) && de.exec(C.css(e, t))
    if (c && c[3] !== l) for (l = l || c[3], n = n || [], c = +u || 1; (c /= o = o || '.5'), C.style(e, t, c + l), o !== (o = s() / u) && o !== 1 && --a; );
    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r) && ((r.unit = l), (r.start = c), (r.end = i)), i
  }
  var d = function (e, t, n, r, i, o, a) {
    var s = 0
    var u = e.length
    var l = n == null
    if (C.type(n) === 'object') for (s in ((i = !0), n)) d(e, t, s, n[s], !0, o, a)
    else if (
      r !== undefined &&
      ((i = !0),
      C.isFunction(r) || (a = !0),
      (t = l
        ? a
          ? (t.call(e, r), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(C(e), n)
            })
        : t))
    ) {
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }
  var ge = /^(?:checkbox|radio)$/i
  var me = /<([\w:-]+)/
  var ye = /^$|\/(?:java|ecma)script/i
  var ve = /^\s+/
  var xe =
    'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video'
  function be(e) {
    var t = xe.split('|')
    var n = e.createDocumentFragment()
    if (n.createElement) for (; t.length; ) n.createElement(t.pop())
    return n
  }
  ;(S = g.createElement('div')),
    (k = g.createDocumentFragment()),
    (q = g.createElement('input')),
    (S.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (y.leadingWhitespace = S.firstChild.nodeType === 3),
    (y.tbody = !S.getElementsByTagName('tbody').length),
    (y.htmlSerialize = !!S.getElementsByTagName('link').length),
    (y.html5Clone = g.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>'),
    (q.type = 'checkbox'),
    (q.checked = !0),
    k.appendChild(q),
    (y.appendChecked = q.checked),
    (S.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!S.cloneNode(!0).lastChild.defaultValue),
    k.appendChild(S),
    (q = g.createElement('input')).setAttribute('type', 'radio'),
    q.setAttribute('checked', 'checked'),
    q.setAttribute('name', 't'),
    S.appendChild(q),
    (y.checkClone = S.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (y.noCloneEvent = !!S.addEventListener),
    (S[C.expando] = 1),
    (y.attributes = !S.getAttribute(C.expando))
  var x = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: y.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
  }
  function b(e, t) {
    var n
    var r
    var i = 0
    var o = typeof e.getElementsByTagName != 'undefined' ? e.getElementsByTagName(t || '*') : typeof e.querySelectorAll != 'undefined' ? e.querySelectorAll(t || '*') : undefined
    if (!o) for (o = [], n = e.childNodes || e; (r = n[i]) != null; i++) !t || C.nodeName(r, t) ? o.push(r) : C.merge(o, b(r, t))
    return t === undefined || (t && C.nodeName(e, t)) ? C.merge([e], o) : o
  }
  function we(e, t) {
    for (var n, r = 0; (n = e[r]) != null; r++) C._data(n, 'globalEval', !t || C._data(t[r], 'globalEval'))
  }
  ;(x.optgroup = x.option), (x.tbody = x.tfoot = x.colgroup = x.caption = x.thead), (x.th = x.td)
  var Te = /<|&#?\w+;/
  var Ce = /<tbody/i
  function Ee(e) {
    ge.test(e.type) && (e.defaultChecked = e.checked)
  }
  function Ne(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f, d = e.length, p = be(t), h = [], g = 0; g < d; g++) {
      if ((a = e[g]) || a === 0)
        {if ('object' === C.type(a)) C.merge(h, a.nodeType ? [a] : a)
        else if (Te.test(a)) {
          for (
            u = u || p.appendChild(t.createElement('div')),
              l = (me.exec(a) || ['', ''])[1].toLowerCase(),
              f = x[l] || x._default,
              u.innerHTML = f[1] + C.htmlPrefilter(a) + f[2],
              o = f[0];
            o--;

          )
            u = u.lastChild
          if ((!y.leadingWhitespace && ve.test(a) && h.push(t.createTextNode(ve.exec(a)[0])), !y.tbody))
            for (o = (a = 'table' !== l || Ce.test(a) ? ('<table>' !== f[1] || Ce.test(a) ? 0 : u) : u.firstChild) && a.childNodes.length; o--; )
              C.nodeName((c = a.childNodes[o]), 'tbody') && !c.childNodes.length && a.removeChild(c)
          for (C.merge(h, u.childNodes), u.textContent = ''; u.firstChild; ) u.removeChild(u.firstChild)
          u = p.lastChild
        } else h.push(t.createTextNode(a))}}
    for (u && p.removeChild(u), y.appendChecked || C.grep(b(h, 'input'), Ee), g = 0; (a = h[g++]); ) {
      if (r && C.inArray(a, r) > -1) i && i.push(a)
      else if (((s = C.contains(a.ownerDocument, a)), (u = b(p.appendChild(a), 'script')), s && we(u), n)) for (o = 0; (a = u[o++]);) ye.test(a.type || '') && n.push(a)
    }
    return (u = null), p
  }
  var ke
  var Se
  var Ae = g.createElement('div')
  for (ke in { submit: !0, change: !0, focusin: !0 }) (y[ke] = (Se = 'on' + ke) in T) || (Ae.setAttribute(Se, 't'), (y[ke] = !1 === Ae.attributes[Se].expando))
  var De = /^(?:input|select|textarea)$/i
  var je = /^key/
  var Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
  var He = /^(?:focusinfocus|focusoutblur)$/
  var qe = /^([^.]*)(?:\.(.+)|)/
  function _e() {
    return !0
  }
  function u() {
    return !1
  }
  function Fe() {
    try {
      return g.activeElement
    } catch (e) {}
  }
  function Me(e, t, n, r, i, o) {
    var a, s
    if (typeof t == 'object') {
      for (s in (typeof n != 'string' && ((r = r || n), (n = undefined)), t)) Me(e, s, n, r, t[s], o)
      return e
    }
    if (
      (r == null && i == null ? ((i = n), (r = n = undefined)) : i == null && (typeof n == 'string' ? ((i = r), (r = undefined)) : ((i = r), (r = n), (n = undefined))), !1 === i)
    ) {
      i = u
    } else if (!i) return e
    return (
      o === 1 &&
        ((a = i),
        ((i = function (e) {
          return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++))),
      e.each(function () {
        C.event.add(this, t, i, r, n)
      })
    )
  }
  ;(C.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o
      var a
      var s
      var u
      var l
      var c
      var f
      var d
      var p
      var h = C._data(e)
      if (h) {
        for (
          n.handler && ((n = (s = n).handler), (i = s.selector)),
            n.guid || (n.guid = C.guid++),
            o = (o = h.events) || (h.events = {}),
            (l = h.handle) ||
              ((l = h.handle =
                function (e) {
                  return void 0 === C || (e && C.event.triggered === e.type) ? undefined : C.event.dispatch.apply(l.elem, arguments)
                }).elem = e),
            a = (t = (t || '').match(E) || ['']).length;
          a--;

        )
          {(f = p = (d = qe.exec(t[a]) || [])[1]),
            (d = (d[2] || '').split('.').sort()),
            f &&
              ((u = C.event.special[f] || {}),
              (f = (i ? u.delegateType : u.bindType) || f),
              (u = C.event.special[f] || {}),
              (p = C.extend(
                { type: f, origType: p, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && C.expr.match.needsContext.test(i), namespace: d.join('.') },
                s
              )),
              (c = o[f]) ||
                (((c = o[f] = []).delegateCount = 0), u.setup && !1 !== u.setup.call(e, r, d, l)) ||
                (e.addEventListener ? e.addEventListener(f, l, !1) : e.attachEvent && e.attachEvent('on' + f, l)),
              u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
              i ? c.splice(c.delegateCount++, 0, p) : c.push(p),
              (C.event.global[f] = !0))}}
    },
    remove: function (e, t, n, r, i) {
      var o
      var a
      var s
      var u
      var l
      var c
      var f
      var d
      var p
      var h
      var g
      var m = C.hasData(e) && C._data(e)
      if (m && (c = m.events)) {
        for (l = (t = (t || '').match(E) || ['']).length; l--; ) {
          if (((p = g = (s = qe.exec(t[l]) || [])[1]), (h = (s[2] || '').split('.').sort()), p)) {
            for (
              f = C.event.special[p] || {},
                d = c[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                u = o = d.length;
              o--;

            )
              {(a = d[o]),
                (!i && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ('**' !== r || !a.selector)) ||
                  (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a))}
            u && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) || C.removeEvent(e, p, m.handle), delete c[p])
          } else for (p in c) C.event.remove(e, p + t[l], n, r, !0)
        }
        C.isEmptyObject(c) && (delete m.handle, C._removeData(e, 'events'))
      }
    },
    trigger: function (e, t, n, r) {
      var i
      var o
      var a
      var s
      var u
      var l
      var c = [n || g]
      var f = m.call(e, 'type') ? e.type : e
      var d = m.call(e, 'namespace') ? e.namespace.split('.') : []
      var p = (u = n = n || g)
      if (
        n.nodeType !== 3 &&
        n.nodeType !== 8 &&
        !He.test(f + C.event.triggered) &&
        (f.indexOf('.') > -1 && ((f = (d = f.split('.')).shift()), d.sort()),
        (o = f.indexOf(':') < 0 && 'on' + f),
        ((e = e[C.expando] ? e : new C.Event(f, typeof e == 'object' && e)).isTrigger = r ? 2 : 3),
        (e.namespace = d.join('.')),
        (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
        (e.result = undefined),
        e.target || (e.target = n),
        (t = t == null ? [e] : C.makeArray(t, [e])),
        (s = C.event.special[f] || {}),
        r || !s.trigger || !1 !== s.trigger.apply(n, t))
      ) {
        if (!r && !s.noBubble && !C.isWindow(n)) {
          for (a = s.delegateType || f, He.test(a + f) || (p = p.parentNode); p; p = p.parentNode) c.push(p), (u = p)
          u === (n.ownerDocument || g) && c.push(u.defaultView || u.parentWindow || T)
        }
        for (l = 0; (p = c[l++]) && !e.isPropagationStopped(); ) {
          ;(e.type = l > 1 ? a : s.bindType || f),
            (i = (C._data(p, 'events') || {})[e.type] && C._data(p, 'handle')) && i.apply(p, t),
            (i = o && p[o]) && i.apply && v(p) && ((e.result = i.apply(p, t)), !1 === e.result) && e.preventDefault()
        }
        if (((e.type = f), !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c.pop(), t)) && v(n) && o && n[f] && !C.isWindow(n))) {
          ;(u = n[o]) && (n[o] = null), (C.event.triggered = f)
          try {
            n[f]()
          } catch (h) {}
          ;(C.event.triggered = undefined), u && (n[o] = u)
        }
        return e.result
      }
    },
    dispatch: function (e) {
      e = C.event.fix(e)
      var t
      var n
      var r
      var i
      var o
      var a = c.call(arguments)
      var s = (C._data(this, 'events') || {})[e.type] || []
      var u = C.event.special[e.type] || {}
      if ((((a[0] = e).delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, e))) {
        for (o = C.event.handlers.call(this, e, s), t = 0; (r = o[t++]) && !e.isPropagationStopped(); ) {
          for (e.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
            {(e.rnamespace && !e.rnamespace.test(i.namespace)) ||
              ((e.handleObj = i),
              (e.data = i.data),
              (i = ((C.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()))}}
        return u.postDispatch && u.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n
      var r
      var i
      var o
      var a = []
      var s = t.delegateCount
      var u = e.target
      if (s && u.nodeType && (e.type !== 'click' || isNaN(e.button) || e.button < 1)) {
        for (; u != this; u = u.parentNode || this)
          {if (1 === u.nodeType && (!0 !== u.disabled || 'click' !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              r[(i = (o = t[n]).selector + ' ')] === undefined && (r[i] = o.needsContext ? -1 < C(i, this).index(u) : C.find(i, this, null, [u]).length), r[i] && r.push(o)
            r.length && a.push({ elem: u, handlers: r })
          }}}
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
    },
    fix: function (e) {
      if (e[C.expando]) return e
      var t
      var n
      var r
      var i = e.type
      var o = e
      var a = this.fixHooks[i]
      for (
        a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new C.Event(o),
          t = r.length;
        t--;

      ) {
        e[(n = r[t])] = o[n]
      }
      return e.target || (e.target = o.srcElement || g), e.target.nodeType === 3 && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), a.filter ? a.filter(e, o) : e
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n
        var r
        var i = t.button
        var o = t.fromElement
        return (
          e.pageX == null &&
            t.clientX != null &&
            ((r = (n = e.target.ownerDocument || g).documentElement),
            (n = n.body),
            (e.pageX = t.clientX + ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) - ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY = t.clientY + ((r && r.scrollTop) || (n && n.scrollTop) || 0) - ((r && r.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
          e.which || i === undefined || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
          e
        )
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Fe() && this.focus) {
            try {
              return this.focus(), !1
            } catch (e) {}
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === Fe() && this.blur) return this.blur(), !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (C.nodeName(this, 'input') && this.type === 'checkbox' && this.click) return this.click(), !1
        },
        _default: function (e) {
          return C.nodeName(e.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n) {
      e = C.extend(new C.Event(), n, { type: e, isSimulated: !0 })
      C.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
    }
  }),
    (C.removeEvent = g.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n)
        }
      : function (e, t, n) {
          t = 'on' + t
          e.detachEvent && (typeof e[t] == 'undefined' && (e[t] = null), e.detachEvent(t, n))
        }),
    (C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (e.defaultPrevented === undefined && !1 === e.returnValue) ? _e : u))
        : (this.type = e),
        t && C.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || C.now()),
        (this[C.expando] = !0)
    }),
    (C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = _e), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1))
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = _e), e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0))
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = _e), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }),
    C.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, i) {
      C.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t
          var n = e.relatedTarget
          var r = e.handleObj
          return (n && (n === this || C.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t
        }
      }
    }),
    y.submit ||
      (C.event.special.submit = {
        setup: function () {
          if (C.nodeName(this, 'form')) return !1
          C.event.add(this, 'click._submit keypress._submit', function (e) {
            ;(e = e.target), (e = C.nodeName(e, 'input') || C.nodeName(e, 'button') ? C.prop(e, 'form') : undefined)
            e &&
              !C._data(e, 'submit') &&
              (C.event.add(e, 'submit._submit', function (e) {
                e._submitBubble = !0
              }),
              C._data(e, 'submit', !0))
          })
        },
        postDispatch: function (e) {
          e._submitBubble && (delete e._submitBubble, this.parentNode) && !e.isTrigger && C.event.simulate('submit', this.parentNode, e)
        },
        teardown: function () {
          if (C.nodeName(this, 'form')) return !1
          C.event.remove(this, '._submit')
        }
      }),
    y.change ||
      (C.event.special.change = {
        setup: function () {
          if (De.test(this.nodeName)) {
            return (
              (this.type !== 'checkbox' && this.type !== 'radio') ||
                (C.event.add(this, 'propertychange._change', function (e) {
                  e.originalEvent.propertyName === 'checked' && (this._justChanged = !0)
                }),
                C.event.add(this, 'click._change', function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event.simulate('change', this, e)
                })),
              !1
            )
          }
          C.event.add(this, 'beforeactivate._change', function (e) {
            e = e.target
            De.test(e.nodeName) &&
              !C._data(e, 'change') &&
              (C.event.add(e, 'change._change', function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate('change', this.parentNode, e)
              }),
              C._data(e, 'change', !0))
          })
        },
        handle: function (e) {
          var t = e.target
          if (this !== t || e.isSimulated || e.isTrigger || (t.type !== 'radio' && t.type !== 'checkbox')) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
          return C.event.remove(this, '._change'), !De.test(this.nodeName)
        }
      }),
    y.focusin ||
      C.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          C.event.simulate(r, e.target, C.event.fix(e))
        }
        C.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this
            var t = C._data(e, r)
            t || e.addEventListener(n, i, !0), C._data(e, r, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this
            var t = C._data(e, r) - 1
            t ? C._data(e, r, t) : (e.removeEventListener(n, i, !0), C._removeData(e, r))
          }
        }
      }),
    C.fn.extend({
      on: function (e, t, n, r) {
        return Me(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return Me(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i
        if (e && e.preventDefault && e.handleObj) (r = e.handleObj), C(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler)
        else {
          if (typeof e != 'object') {
            return (
              (!1 !== t && typeof t != 'function') || ((n = t), (t = undefined)),
              !1 === n && (n = u),
              this.each(function () {
                C.event.remove(this, e, n, t)
              })
            )
          }
          for (i in e) this.off(i, t, e[i])
        }
        return this
      },
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return C.event.trigger(e, t, n, !0)
      }
    })
  var Oe = / jQuery\d+="(?:null|\d+)"/g
  var Re = new RegExp('<(?:' + xe + ')[\\s/>]', 'i')
  var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
  var Be = /<script|<style|<link/i
  var We = /checked\s*(?:[^=]|=\s*.checked.)/i
  var Ie = /^true\/(.*)/
  var $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  var ze = be(g).appendChild(g.createElement('div'))
  function Xe(e, t) {
    return C.nodeName(e, 'table') && C.nodeName(t.nodeType !== 11 ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
      : e
  }
  function Ue(e) {
    return (e.type = (C.find.attr(e, 'type') !== null) + '/' + e.type), e
  }
  function Ve(e) {
    var t = Ie.exec(e.type)
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e
  }
  function Ye(e, t) {
    if (t.nodeType === 1 && C.hasData(e)) {
      var n
      var r
      var i
      var e = C._data(e)
      var o = C._data(t, e)
      var a = e.events
      if (a) for (n in (delete o.handle, (o.events = {}), a)) for (r = 0, i = a[n].length; r < i; r++) C.event.add(t, n, a[n][r])
      o.data && (o.data = C.extend({}, o.data))
    }
  }
  function w(n, r, i, o) {
    r = O.apply([], r)
    var e
    var t
    var a
    var s
    var u
    var l
    var c = 0
    var f = n.length
    var d = f - 1
    var p = r[0]
    var h = C.isFunction(p)
    if (h || (f > 1 && typeof p == 'string' && !y.checkClone && We.test(p))) {
      return n.each(function (e) {
        var t = n.eq(e)
        h && (r[0] = p.call(this, e, t.html())), w(t, r, i, o)
      })
    }
    if (f && ((e = (l = Ne(r, n[0].ownerDocument, !1, n, o)).firstChild), l.childNodes.length === 1 && (l = e), e || o)) {
      for (a = (s = C.map(b(l, 'script'), Ue)).length; c < f; c++) (t = l), c !== d && ((t = C.clone(t, !0, !0)), a) && C.merge(s, b(t, 'script')), i.call(n[c], t, c)
      if (a) {
        for (u = s[s.length - 1].ownerDocument, C.map(s, Ve), c = 0; c < a; c++)
          {(t = s[c]),
            ye.test(t.type || '') &&
              !C._data(t, 'globalEval') &&
              C.contains(u, t) &&
              (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || '').replace($e, '')))}}
      l = null
    }
    return n
  }
  function Je(e, t, n) {
    for (var r, i = t ? C.filter(t, e) : e, o = 0; (r = i[o]) != null; o++) {
      n || 1 !== r.nodeType || C.cleanData(b(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && we(b(r, 'script')), r.parentNode.removeChild(r))
    }
    return e
  }
  C.extend({
    htmlPrefilter: function (e) {
      return e.replace(Pe, '<$1></$2>')
    },
    clone: function (e, t, n) {
      var r
      var i
      var o
      var a
      var s
      var u = C.contains(e.ownerDocument, e)
      if (
        (y.html5Clone || C.isXMLDoc(e) || !Re.test('<' + e.nodeName + '>') ? (o = e.cloneNode(!0)) : ((ze.innerHTML = e.outerHTML), ze.removeChild((o = ze.firstChild))),
        !((y.noCloneEvent && y.noCloneChecked) || (e.nodeType !== 1 && e.nodeType !== 11) || C.isXMLDoc(e)))
      ) {
        for (r = b(o), s = b(e), a = 0; (i = s[a]) != null; ++a)
          {if (r[a]) {
            f = c = l = p = d = void 0
            var l,
              c,
              f,
              d = i,
              p = r[a]
            if (1 === p.nodeType) {
              if (((l = p.nodeName.toLowerCase()), !y.noCloneEvent && p[C.expando])) {
                for (c in (f = C._data(p)).events) C.removeEvent(p, c, f.handle)
                p.removeAttribute(C.expando)
              }
              'script' === l && p.text !== d.text
                ? ((Ue(p).text = d.text), Ve(p))
                : 'object' === l
                ? (p.parentNode && (p.outerHTML = d.outerHTML), y.html5Clone && d.innerHTML && !C.trim(p.innerHTML) && (p.innerHTML = d.innerHTML))
                : 'input' === l && ge.test(d.type)
                ? ((p.defaultChecked = p.checked = d.checked), p.value !== d.value && (p.value = d.value))
                : 'option' === l
                ? (p.defaultSelected = p.selected = d.defaultSelected)
                : ('input' !== l && 'textarea' !== l) || (p.defaultValue = d.defaultValue)
            }
          }}}
      if (t) {
        if (n) for (s = s || b(e), r = r || b(o), a = 0; (i = s[a]) != null; a++) Ye(i, r[a])
        else Ye(e, o)
      }
      return (r = b(o, 'script')).length > 0 && we(r, !u && b(e, 'script')), (r = s = i = null), o
    },
    cleanData: function (e, t) {
      for (var n, r, i, o, a = 0, s = C.expando, u = C.cache, l = y.attributes, c = C.event.special; (n = e[a]) != null; a++) {
        if ((t || v(n)) && (o = (i = n[s]) && u[i])) {
          if (o.events) for (r in o.events) c[r] ? C.event.remove(n, r) : C.removeEvent(n, r, o.handle)
          u[i] && (delete u[i], l || typeof n.removeAttribute == 'undefined' ? (n[s] = undefined) : n.removeAttribute(s), f.push(i))
        }
      }
    }
  }),
    C.fn.extend({
      domManip: w,
      detach: function (e) {
        return Je(this, e, !0)
      },
      remove: function (e) {
        return Je(this, e)
      },
      text: function (e) {
        return d(
          this,
          function (e) {
            return e === undefined ? C.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || g).createTextNode(e))
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return w(this, arguments, function (e) {
          ;(this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9) || Xe(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return w(this, arguments, function (e) {
          var t
          ;(this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9) || (t = Xe(this, e)).insertBefore(e, t.firstChild)
        })
      },
      before: function () {
        return w(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return w(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; (e = this[t]) != null; t++) {
          for (e.nodeType === 1 && C.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild)
          e.options && C.nodeName(e, 'select') && (e.options.length = 0)
        }
        return this
      },
      clone: function (e, t) {
        return (
          (e = e != null && e),
          (t = t == null ? e : t),
          this.map(function () {
            return C.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return d(
          this,
          function (e) {
            var t = this[0] || {}
            var n = 0
            var r = this.length
            if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(Oe, '') : undefined
            if (typeof e == 'string' && !Be.test(e) && (y.htmlSerialize || !Re.test(e)) && (y.leadingWhitespace || !ve.test(e)) && !x[(me.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = C.htmlPrefilter(e)
              try {
                for (; n < r; n++) (t = this[n] || {}).nodeType === 1 && (C.cleanData(b(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (i) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var n = []
        return w(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            C.inArray(this, n) < 0 && (C.cleanData(b(this)), t) && t.replaceChild(e, this)
          },
          n
        )
      }
    }),
    C.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, a) {
      C.fn[e] = function (e) {
        for (var t, n = 0, r = [], i = C(e), o = i.length - 1; n <= o; n++) (t = n === o ? this : this.clone(!0)), C(i[n])[a](t), R.apply(r, t.get())
        return this.pushStack(r)
      }
    })
  var Ge
  var Ke = { HTML: 'block', BODY: 'block' }
  function Qe(e, t) {
    ;(e = C(t.createElement(e)).appendTo(t.body)), (t = C.css(e[0], 'display'))
    return e.detach(), t
  }
  function Ze(e) {
    var t = g
    var n = Ke[e]
    return (
      n ||
        (((n = Qe(e, t)) !== 'none' && n) ||
          ((t = ((Ge = (Ge || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ge[0].contentDocument).document).write(),
          t.close(),
          (n = Qe(e, t)),
          Ge.detach()),
        (Ke[e] = n)),
      n
    )
  }
  var n
  var et
  var tt
  var nt
  var rt
  var it
  var ot
  var a
  var at = /^margin/
  var st = new RegExp('^(' + e + ')(?!px)[a-z%]+$', 'i')
  var ut = function (e, t, n, r) {
    var i;
        var o = {}
    for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
    for (i in ((r = n.apply(e, r || [])), t)) e.style[i] = o[i]
    return r
  }
  var lt = g.documentElement
  function t() {
    var e
    var t = g.documentElement
    t.appendChild(ot),
      (a.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
      (n = tt = it = !1),
      (et = rt = !0),
      T.getComputedStyle &&
        ((e = T.getComputedStyle(a)),
        (n = (e || {}).top !== '1%'),
        (it = (e || {}).marginLeft === '2px'),
        (tt = (e || { width: '4px' }).width === '4px'),
        (a.style.marginRight = '50%'),
        (et = (e || { marginRight: '4px' }).marginRight === '4px'),
        ((e = a.appendChild(g.createElement('div'))).style.cssText = a.style.cssText =
          '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
        (e.style.marginRight = e.style.width = '0'),
        (a.style.width = '1px'),
        (rt = !parseFloat((T.getComputedStyle(e) || {}).marginRight)),
        a.removeChild(e)),
      (a.style.display = 'none'),
      (nt = a.getClientRects().length === 0) &&
        ((a.style.display = ''),
        (a.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
        (a.childNodes[0].style.borderCollapse = 'separate'),
        ((e = a.getElementsByTagName('td'))[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
        (nt = e[0].offsetHeight === 0)) &&
        ((e[0].style.display = ''), (e[1].style.display = 'none'), (nt = e[0].offsetHeight === 0)),
      t.removeChild(ot)
  }
  ;(ot = g.createElement('div')),
    (a = g.createElement('div')).style &&
      ((a.style.cssText = 'float:left;opacity:.5'),
      (y.opacity = a.style.opacity === '0.5'),
      (y.cssFloat = !!a.style.cssFloat),
      (a.style.backgroundClip = 'content-box'),
      (a.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = a.style.backgroundClip === 'content-box'),
      ((ot = g.createElement('div')).style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      (a.innerHTML = ''),
      ot.appendChild(a),
      (y.boxSizing = a.style.boxSizing === '' || a.style.MozBoxSizing === '' || a.style.WebkitBoxSizing === ''),
      C.extend(y, {
        reliableHiddenOffsets: function () {
          return n == null && t(), nt
        },
        boxSizingReliable: function () {
          return n == null && t(), tt
        },
        pixelMarginRight: function () {
          return n == null && t(), et
        },
        pixelPosition: function () {
          return n == null && t(), n
        },
        reliableMarginRight: function () {
          return n == null && t(), rt
        },
        reliableMarginLeft: function () {
          return n == null && t(), it
        }
      }))
  var l
  var p
  var ct = /^(top|right|bottom|left)$/
  function ft(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      }
    }
  }
  T.getComputedStyle
    ? ((l = function (e) {
        var t = e.ownerDocument.defaultView
        return (t = t && t.opener ? t : T).getComputedStyle(e)
      }),
      (p = function (e, t, n) {
        var r
        var i
        var o = e.style
        return (
          ((i = (n = n || l(e)) ? n.getPropertyValue(t) || n[t] : undefined) !== '' && i !== undefined) || C.contains(e.ownerDocument, e) || (i = C.style(e, t)),
          n &&
            !y.pixelMarginRight() &&
            st.test(i) &&
            at.test(t) &&
            ((e = o.width), (t = o.minWidth), (r = o.maxWidth), (o.minWidth = o.maxWidth = o.width = i), (i = n.width), (o.width = e), (o.minWidth = t), (o.maxWidth = r)),
          i === undefined ? i : i + ''
        )
      }))
    : lt.currentStyle &&
      ((l = function (e) {
        return e.currentStyle
      }),
      (p = function (e, t, n) {
        var r
        var i
        var o
        var a = e.style
        return (
          (n = (n = n || l(e)) ? n[t] : undefined) == null && a && a[t] && (n = a[t]),
          st.test(n) &&
            !ct.test(t) &&
            ((r = a.left),
            (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
            (a.left = t === 'fontSize' ? '1em' : n),
            (n = a.pixelLeft + 'px'),
            (a.left = r),
            o) &&
            (i.left = o),
          n === undefined ? n : n + '' || 'auto'
        )
      }))
  var dt = /alpha\([^)]*\)/i
  var pt = /opacity\s*=\s*([^)]*)/i
  var ht = /^(none|table(?!-c[ea]).+)/
  var gt = new RegExp('^(' + e + ')(.*)$', 'i')
  var mt = { position: 'absolute', visibility: 'hidden', display: 'block' }
  var yt = { letterSpacing: '0', fontWeight: '400' }
  var vt = ['Webkit', 'O', 'Moz', 'ms']
  var xt = g.createElement('div').style
  function bt(e) {
    if (e in xt) return e
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = vt.length; n--; ) if ((e = vt[n] + t) in xt) return e
  }
  function wt(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
      ;(r = e[a]).style &&
        ((o[a] = C._data(r, 'olddisplay')),
        (n = r.style.display),
        t
          ? (o[a] || n !== 'none' || (r.style.display = ''), r.style.display === '' && pe(r) && (o[a] = C._data(r, 'olddisplay', Ze(r.nodeName))))
          : ((i = pe(r)), ((n && n !== 'none') || !i) && C._data(r, 'olddisplay', i ? n : C.css(r, 'display'))))
    }
    for (a = 0; a < s; a++) !(r = e[a]).style || (t && r.style.display !== 'none' && r.style.display !== '') || (r.style.display = t ? o[a] || '' : 'none')
    return e
  }
  function Tt(e, t, n) {
    var r = gt.exec(t)
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t
  }
  function Ct(e, t, n, r, i) {
    for (var o = n === (r ? 'border' : 'content') ? 4 : t === 'width' ? 1 : 0, a = 0; o < 4; o += 2)
      {n === 'margin' && (a += C.css(e, n + s[o], !0, i)),
        r
          ? (n === 'content' && (a -= C.css(e, 'padding' + s[o], !0, i)), n !== 'margin' && (a -= C.css(e, 'border' + s[o] + 'Width', !0, i)))
          : ((a += C.css(e, 'padding' + s[o], !0, i)), n !== 'padding' && (a += C.css(e, 'border' + s[o] + 'Width', !0, i)))}
    return a
  }
  function Et(e, t, n) {
    var r = !0
    var i = 'width' === t ? e.offsetWidth : e.offsetHeight
    var o = l(e)
    var a = y.boxSizing && C.css(e, 'boxSizing', !1, o) === 'border-box'
    if (i <= 0 || i == null) {
      if ((((i = p(e, t, o)) < 0 || i == null) && (i = e.style[t]), st.test(i))) return i
      ;(r = a && (y.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0)
    }
    return i + Ct(e, t, n || (a ? 'border' : 'content'), r, o) + 'px'
  }
  function h(e, t, n, r, i) {
    return new h.prototype.init(e, t, n, r, i)
  }
  C.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return (t = p(e, 'opacity')) === '' ? '1' : t
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: y.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (e, t, n, r) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        var i
        var o
        var a
        var s = C.camelCase(t)
        var u = e.style
        if (((t = C.cssProps[s] || (C.cssProps[s] = bt(s) || s)), (a = C.cssHooks[t] || C.cssHooks[s]), n === undefined)) {
          return a && 'get' in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t]
        }
        if (
          ((o = typeof n) === 'string' && (i = de.exec(n)) && i[1] && ((n = he(e, t, i)), (o = 'number')),
          n != null &&
            n == n &&
            (o === 'number' && (n += (i && i[3]) || (C.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle || n !== '' || t.indexOf('background') !== 0 || (u[t] = 'inherit'),
            !(a && 'set' in a && (n = a.set(e, n, r)) === undefined)))
        ) {
          try {
            u[t] = n
          } catch (l) {}
        }
      }
    },
    css: function (e, t, n, r) {
      var i
      var o = C.camelCase(t)
      return (
        (t = C.cssProps[o] || (C.cssProps[o] = bt(o) || o)),
        (i = (i = (o = C.cssHooks[t] || C.cssHooks[o]) && 'get' in o ? o.get(e, !0, n) : i) === undefined ? p(e, t, r) : i) === 'normal' && t in yt && (i = yt[t]),
        (n === '' || n) && ((o = parseFloat(i)), !0 === n || isFinite(o)) ? o || 0 : i
      )
    }
  }),
    C.each(['height', 'width'], function (e, i) {
      C.cssHooks[i] = {
        get: function (e, t, n) {
          if (t) {
            return ht.test(C.css(e, 'display')) && e.offsetWidth === 0
              ? ut(e, mt, function () {
                  return Et(e, i, n)
                })
              : Et(e, i, n)
          }
        },
        set: function (e, t, n) {
          var r = n && l(e)
          return Tt(0, t, n ? Ct(e, i, n, y.boxSizing && C.css(e, 'boxSizing', !1, r) === 'border-box', r) : 0)
        }
      }
    }),
    y.opacity ||
      (C.cssHooks.opacity = {
        get: function (e, t) {
          return pt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || '') ? 0.01 * parseFloat(RegExp.$1) + '' : t ? '1' : ''
        },
        set: function (e, t) {
          var n = e.style
          var e = e.currentStyle
          var r = C.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : ''
          var i = (e && e.filter) || n.filter || ''
          ;(((n.zoom = 1) <= t || t === '') && C.trim(i.replace(dt, '')) === '' && n.removeAttribute && (n.removeAttribute('filter'), t === '' || (e && !e.filter))) ||
            (n.filter = dt.test(i) ? i.replace(dt, r) : i + ' ' + r)
        }
      }),
    (C.cssHooks.marginRight = ft(y.reliableMarginRight, function (e, t) {
      if (t) return ut(e, { display: 'inline-block' }, p, [e, 'marginRight'])
    })),
    (C.cssHooks.marginLeft = ft(y.reliableMarginLeft, function (e, t) {
      if (t) {
        return (
          (parseFloat(p(e, 'marginLeft')) ||
            (C.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                ut(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left
                })
              : 0)) + 'px'
        )
      }
    })),
    C.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      ;(C.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = typeof e == 'string' ? e.split(' ') : [e]; t < 4; t++) n[i + s[t] + o] = r[t] || r[t - 2] || r[0]
          return n
        }
      }),
        at.test(i) || (C.cssHooks[i + o].set = Tt)
    }),
    C.fn.extend({
      css: function (e, t) {
        return d(
          this,
          function (e, t, n) {
            var r
            var i
            var o = {}
            var a = 0
            if (C.isArray(t)) {
              for (r = l(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r)
              return o
            }
            return n !== undefined ? C.style(e, t, n) : C.css(e, t)
          },
          e,
          t,
          arguments.length > 1
        )
      },
      show: function () {
        return wt(this, !0)
      },
      hide: function () {
        return wt(this)
      },
      toggle: function (e) {
        return typeof e == 'boolean'
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              pe(this) ? C(this).show() : C(this).hide()
            })
      }
    }),
    (((C.Tween = h).prototype = {
      constructor: h,
      init: function (e, t, n, r, i, o) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || C.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (C.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var e = h.propHooks[this.prop]
        return (e && e.get ? e : h.propHooks._default).get(this)
      },
      run: function (e) {
        var t
        var n = h.propHooks[this.prop]
        return (
          this.options.duration ? (this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : h.propHooks._default).set(this),
          this
        )
      }
    }).init.prototype = h.prototype),
    ((h.propHooks = {
      _default: {
        get: function (e) {
          return e.elem.nodeType !== 1 || (e.elem[e.prop] != null && e.elem.style[e.prop] == null) ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, '')) && e !== 'auto' ? e : 0
        },
        set: function (e) {
          C.fx.step[e.prop]
            ? C.fx.step[e.prop](e)
            : e.elem.nodeType !== 1 || (e.elem.style[C.cssProps[e.prop]] == null && !C.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : C.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = h.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }),
    (C.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: 'swing'
    }),
    (C.fx = h.prototype.init),
    (C.fx.step = {})
  var N
  var Nt
  var k
  var S
  var kt = /^(?:toggle|show|hide)$/
  var St = /queueHooks$/
  function At() {
    return (
      T.setTimeout(function () {
        N = undefined
      }),
      (N = C.now())
    )
  }
  function Dt(e, t) {
    var n
    var r = { height: e }
    var i = 0
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r['margin' + (n = s[i])] = r['padding' + n] = e
    return t && (r.opacity = r.width = e), r
  }
  function jt(e, t, n) {
    for (var r, i = (A.tweeners[t] || []).concat(A.tweeners['*']), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r
  }
  function A(i, e, t) {
    var n
    var o
    var r
    var a
    var s
    var u
    var l
    var c = 0
    var f = A.prefilters.length
    var d = C.Deferred().always(function () {
      delete p.elem
    })
    var p = function () {
      if (o) return !1
      for (var e = N || At(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t)
      return d.notifyWith(i, [h, t, e]), t < 1 && r ? e : (d.resolveWith(i, [h]), !1)
    }
    var h = d.promise({
      elem: i,
      props: C.extend({}, e),
      opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: N || At(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        t = C.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing)
        return h.tweens.push(t), t
      },
      stop: function (e) {
        var t = 0;
            var n = e ? h.tweens.length : 0
        if (!o) {
          for (o = !0; t < n; t++) h.tweens[t].run(1)
          e ? (d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h, e])) : d.rejectWith(i, [h, e])
        }
        return this
      }
    })
    var g = h.props
    var m = g
    var y = h.opts.specialEasing
    for (r in m) {
      if (((s = y[(a = C.camelCase(r))]), (u = m[r]), C.isArray(u) && ((s = u[1]), (u = m[r] = u[0])), r !== a && ((m[a] = u), delete m[r]), (l = C.cssHooks[a]) && 'expand' in l))
        {for (r in ((u = l.expand(u)), delete m[a], u)) r in m || ((m[r] = u[r]), (y[r] = s))}
      else y[a] = s
    }
    for (; c < f; c++) if ((n = A.prefilters[c].call(h, i, g, h.opts))) return C.isFunction(n.stop) && (C._queueHooks(h.elem, h.opts.queue).stop = C.proxy(n.stop, n)), n
    return (
      C.map(g, jt, h),
      C.isFunction(h.opts.start) && h.opts.start.call(i, h),
      C.fx.timer(C.extend(p, { elem: i, anim: h, queue: h.opts.queue })),
      h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    )
  }
  ;(C.Animation = C.extend(A, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t)
          return he(n.elem, e, de.exec(t), n), n
        }
      ]
    },
    tweener: function (e, t) {
      for (var n, r = 0, i = (e = C.isFunction(e) ? ((t = e), ['*']) : e.match(E)).length; r < i; r++) (n = e[r]), (A.tweeners[n] = A.tweeners[n] || []), A.tweeners[n].unshift(t)
    },
    prefilters: [
      function (t, e, n) {
        var r
        var i
        var o
        var a
        var s
        var u
        var l
        var c = this
        var f = {}
        var d = t.style
        var p = t.nodeType && pe(t)
        var h = C._data(t, 'fxshow')
        for (r in (n.queue ||
          ((s = C._queueHooks(t, 'fx')).unqueued == null &&
            ((s.unqueued = 0),
            (u = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || u()
            })),
          s.unqueued++,
          c.always(function () {
            c.always(function () {
              s.unqueued--, C.queue(t, 'fx').length || s.empty.fire()
            })
          })),
        t.nodeType === 1 &&
          ('height' in e || 'width' in e) &&
          ((n.overflow = [d.overflow, d.overflowX, d.overflowY]), ((l = C.css(t, 'display')) === 'none' ? C._data(t, 'olddisplay') || Ze(t.nodeName) : l) === 'inline') &&
          C.css(t, 'float') === 'none' &&
          (y.inlineBlockNeedsLayout && Ze(t.nodeName) !== 'inline' ? (d.zoom = 1) : (d.display = 'inline-block')),
        n.overflow &&
          ((d.overflow = 'hidden'),
          y.shrinkWrapBlocks() ||
            c.always(function () {
              ;(d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2])
            })),
        e)) {
          if (((i = e[r]), kt.exec(i))) {
            if ((delete e[r], (o = o || i === 'toggle'), i === (p ? 'hide' : 'show'))) {
              if (i !== 'show' || !h || h[r] === undefined) continue
              p = !0
            }
            f[r] = (h && h[r]) || C.style(t, r)
          } else l = undefined
        }
        if (C.isEmptyObject(f)) (l === 'none' ? Ze(t.nodeName) : l) === 'inline' && (d.display = l)
        else {
          for (r in (h ? 'hidden' in h && (p = h.hidden) : (h = C._data(t, 'fxshow', {})),
          o && (h.hidden = !p),
          p
            ? C(t).show()
            : c.done(function () {
                C(t).hide()
              }),
          c.done(function () {
            for (var e in (C._removeData(t, 'fxshow'), f)) C.style(t, e, f[e])
          }),
          f))
            {(a = jt(p ? h[r] : 0, r, c)), r in h || ((h[r] = a.start), p && ((a.end = a.start), (a.start = 'width' === r || 'height' === r ? 1 : 0)))}}
      }
    ],
    prefilter: function (e, t) {
      t ? A.prefilters.unshift(e) : A.prefilters.push(e)
    }
  })),
    (C.speed = function (e, t, n) {
      var r = e && typeof e == 'object' ? C.extend({}, e) : { complete: n || (!n && t) || (C.isFunction(e) && e), duration: e, easing: (n && t) || (t && !C.isFunction(t) && t) }
      return (
        (r.duration = C.fx.off ? 0 : typeof r.duration == 'number' ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default),
        (r.queue != null && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
        }),
        r
      )
    }),
    C.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(pe).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = C.isEmptyObject(t)
        var o = C.speed(e, n, r)
        var e = function () {
          var e = A(this, C.extend({}, t), o)
          ;(i || C._data(this, 'finish')) && e.stop(!0)
        }
        return (e.finish = e), i || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop
          delete e.stop, t(o)
        }
        return (
          typeof i != 'string' && ((o = e), (e = i), (i = undefined)),
          e && !1 !== i && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0
            var t = null != i && i + 'queueHooks'
            var n = C.timers
            var r = C._data(this)
            if (t) r[t] && r[t].stop && a(r[t])
            else for (t in r) r[t] && r[t].stop && St.test(t) && a(r[t])
            for (t = n.length; t--; ) n[t].elem !== this || (i != null && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1))
            ;(!e && o) || C.dequeue(this, i)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e
            var t = C._data(this)
            var n = t[a + 'queue']
            var r = t[a + 'queueHooks']
            var i = C.timers
            var o = n ? n.length : 0
            for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) {
              i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1))
            }
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this)
            delete t.finish
          })
        )
      }
    }),
    C.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = C.fn[r]
      C.fn[r] = function (e, t, n) {
        return e == null || typeof e == 'boolean' ? i.apply(this, arguments) : this.animate(Dt(r, !0), e, t, n)
      }
    }),
    C.each(
      { slideDown: Dt('show'), slideUp: Dt('hide'), slideToggle: Dt('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } },
      function (e, r) {
        C.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }
    ),
    (C.timers = []),
    (C.fx.tick = function () {
      var e
      var t = C.timers
      var n = 0
      for (N = C.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1)
      t.length || C.fx.stop(), (N = undefined)
    }),
    (C.fx.timer = function (e) {
      C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }),
    (C.fx.interval = 13),
    (C.fx.start = function () {
      Nt = Nt || T.setInterval(C.fx.tick, C.fx.interval)
    }),
    (C.fx.stop = function () {
      T.clearInterval(Nt), (Nt = null)
    }),
    (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (C.fn.delay = function (r, e) {
      return (
        (r = (C.fx && C.fx.speeds[r]) || r),
        this.queue((e = e || 'fx'), function (e, t) {
          var n = T.setTimeout(e, r)
          t.stop = function () {
            T.clearTimeout(n)
          }
        })
      )
    }),
    (k = g.createElement('input')),
    (q = g.createElement('div')),
    (S = g.createElement('select')),
    (e = S.appendChild(g.createElement('option'))),
    (q = g.createElement('div')).setAttribute('className', 't'),
    (q.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (F = q.getElementsByTagName('a')[0]),
    k.setAttribute('type', 'checkbox'),
    q.appendChild(k),
    ((F = q.getElementsByTagName('a')[0]).style.cssText = 'top:1px'),
    (y.getSetAttribute = q.className !== 't'),
    (y.style = /top/.test(F.getAttribute('style'))),
    (y.hrefNormalized = F.getAttribute('href') === '/a'),
    (y.checkOn = !!k.value),
    (y.optSelected = e.selected),
    (y.enctype = !!g.createElement('form').enctype),
    (S.disabled = !0),
    (y.optDisabled = !e.disabled),
    (k = g.createElement('input')).setAttribute('value', ''),
    (y.input = k.getAttribute('value') === ''),
    (k.value = 't'),
    k.setAttribute('type', 'radio'),
    (y.radioValue = k.value === 't')
  var Lt = /\r/g
  var Ht = /[\x20\t\r\n\f]+/g
  C.fn.extend({
    val: function (t) {
      var n
      var e
      var r
      var i = this[0]
      return arguments.length
        ? ((r = C.isFunction(t)),
          this.each(function (e) {
            this.nodeType !== 1 ||
              ((e = r ? t.call(this, e, C(this).val()) : t) == null
                ? (e = '')
                : typeof e == 'number'
                ? (e += '')
                : C.isArray(e) &&
                  (e = C.map(e, function (e) {
                    return e == null ? '' : e + ''
                  })),
              (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && 'set' in n && n.set(this, e, 'value') !== undefined) ||
              (this.value = e)
          }))
        : i
        ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && 'get' in n && (e = n.get(i, 'value')) !== undefined
          ? e
          : typeof (e = i.value) == 'string'
          ? e.replace(Lt, '')
          : e == null
          ? ''
          : e
        : void 0
    }
  }),
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, 'value')
            return t != null ? t : C.trim(C.text(e)).replace(Ht, ' ')
          }
        },
        select: {
          get: function (e) {
            for (
              var t, n = e.options, r = e.selectedIndex, i = e.type === 'select-one' || r < 0, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0;
              s < a;
              s++
            ) {
              if (
                ((t = n[s]).selected || s === r) &&
                (y.optDisabled ? !t.disabled : t.getAttribute('disabled') === null) &&
                (!t.parentNode.disabled || !C.nodeName(t.parentNode, 'optgroup'))
              ) {
                if (((t = C(t).val()), i)) return t
                o.push(t)
              }
            }
            return o
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--; ) {
              if (((r = i[a]), C.inArray(C.valHooks.option.get(r), o) > -1))
                {try {
                  r.selected = n = !0
                } catch (s) {
                  r.scrollHeight
                }}
              else r.selected = !1
            }
            return n || (e.selectedIndex = -1), i
          }
        }
      }
    }),
    C.each(['radio', 'checkbox'], function () {
      ;(C.valHooks[this] = {
        set: function (e, t) {
          if (C.isArray(t)) return (e.checked = C.inArray(C(e).val(), t) > -1)
        }
      }),
        y.checkOn ||
          (C.valHooks[this].get = function (e) {
            return e.getAttribute('value') === null ? 'on' : e.value
          })
    })
  var D
  var qt
  var j = C.expr.attrHandle
  var _t = /^(?:checked|selected)$/i
  var L = y.getSetAttribute
  var Ft = y.input
  var Mt =
    (C.fn.extend({
      attr: function (e, t) {
        return d(this, C.attr, e, t, arguments.length > 1)
      },
      removeAttr: function (e) {
        return this.each(function () {
          C.removeAttr(this, e)
        })
      }
    }),
    C.extend({
      attr: function (e, t, n) {
        var r;
            var i;
            var o = e.nodeType
        if (o !== 3 && o !== 8 && o !== 2)
          {return 'undefined' == typeof e.getAttribute
              ? C.prop(e, t, n)
              : ((1 === o && C.isXMLDoc(e)) || ((t = t.toLowerCase()), (i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? qt : D))),
                n !== undefined
                  ? null === n
                    ? void C.removeAttr(e, t)
                    : i && 'set' in i && (r = i.set(e, n, t)) !== undefined
                    ? r
                    : (e.setAttribute(t, n + ''), n)
                  : !(i && 'get' in i && null !== (r = i.get(e, t))) && null == (r = C.find.attr(e, t))
                  ? undefined
                  : r)}
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            var n
            if (!y.radioValue && t === 'radio' && C.nodeName(e, 'input')) return (n = e.value), e.setAttribute('type', t), n && (e.value = n), t
          }
        }
      },
      removeAttr: function (e, t) {
        var n;
            var r;
            var i = 0;
            var o = t && t.match(E)
        if (o && e.nodeType === 1)
          for (; (n = o[i++]);)
            (r = C.propFix[n] || n),
              C.expr.match.bool.test(n) ? ((Ft && L) || !_t.test(n) ? (e[r] = !1) : (e[C.camelCase('default-' + n)] = e[r] = !1)) : C.attr(e, n, ''),
              e.removeAttribute(L ? n : r)
      }
    }),
    (qt = {
      set: function (e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : (Ft && L) || !_t.test(n) ? e.setAttribute((!L && C.propFix[n]) || n, n) : (e[C.camelCase('default-' + n)] = e[n] = !0), n
      }
    }),
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = j[t] || C.find.attr
      ;(Ft && L) || !_t.test(t)
        ? (j[t] = function (e, t, n) {
            var r, i
            return n || ((i = j[t]), (j[t] = r), (r = o(e, t, n) != null ? t.toLowerCase() : null), (j[t] = i)), r
          })
        : (j[t] = function (e, t, n) {
            if (!n) return e[C.camelCase('default-' + t)] ? t.toLowerCase() : null
          })
    }),
    (Ft && L) ||
      (C.attrHooks.value = {
        set: function (e, t, n) {
          if (!C.nodeName(e, 'input')) return D && D.set(e, t, n)
          e.defaultValue = t
        }
      }),
    L ||
      ((D = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n)
          if ((r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))), (r.value = t += ''), n === 'value' || t === e.getAttribute(n))) return t
        }
      }),
      (j.id =
        j.name =
        j.coords =
          function (e, t, n) {
            if (!n) return (n = e.getAttributeNode(t)) && n.value !== '' ? n.value : null
          }),
      (C.valHooks.button = {
        get: function (e, t) {
          t = e.getAttributeNode(t)
          if (t && t.specified) return t.value
        },
        set: D.set
      }),
      (C.attrHooks.contenteditable = {
        set: function (e, t, n) {
          D.set(e, t !== '' && t, n)
        }
      }),
      C.each(['width', 'height'], function (e, n) {
        C.attrHooks[n] = {
          set: function (e, t) {
            if (t === '') return e.setAttribute(n, 'auto'), t
          }
        }
      })),
    y.style ||
      (C.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || undefined
        },
        set: function (e, t) {
          return (e.style.cssText = t + '')
        }
      }),
    /^(?:input|select|textarea|button|object)$/i)
  var Ot = /^(?:a|area)$/i
  var Rt =
    (C.fn.extend({
      prop: function (e, t) {
        return d(this, C.prop, e, t, arguments.length > 1)
      },
      removeProp: function (t) {
        return (
          (t = C.propFix[t] || t),
          this.each(function () {
            try {
              ;(this[t] = undefined), delete this[t]
            } catch (e) {}
          })
        )
      }
    }),
    C.extend({
      prop: function (e, t, n) {
        var r
        var i
        var o = e.nodeType
        if (o !== 3 && o !== 8 && o !== 2) {
          return (
            (o === 1 && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (i = C.propHooks[t])),
            n !== undefined ? (i && 'set' in i && (r = i.set(e, n, t)) !== undefined ? r : (e[t] = n)) : i && 'get' in i && (r = i.get(e, t)) !== null ? r : e[t]
          )
        }
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = C.find.attr(e, 'tabindex')
            return t ? parseInt(t, 10) : Mt.test(e.nodeName) || (Ot.test(e.nodeName) && e.href) ? 0 : -1
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    y.hrefNormalized ||
      C.each(['href', 'src'], function (e, t) {
        C.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4)
          }
        }
      }),
    y.optSelected ||
      (C.propHooks.selected = {
        get: function (e) {
          e = e.parentNode
          return e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex, null
        },
        set: function (e) {
          e = e.parentNode
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
        }
      }),
    C.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      C.propFix[this.toLowerCase()] = this
    }),
    y.enctype || (C.propFix.enctype = 'encoding'),
    /[\t\r\n\f]/g)
  function H(e) {
    return C.attr(e, 'class') || ''
  }
  C.fn.extend({
    addClass: function (t) {
      var e
      var n
      var r
      var i
      var o
      var a
      var s = 0
      if (C.isFunction(t)) {
        return this.each(function (e) {
          C(this).addClass(t.call(this, e, H(this)))
        })
      }
      if (typeof t == 'string' && t) {
        for (e = t.match(E) || []; (n = this[s++]);)
          {if (((a = H(n)), (r = 1 === n.nodeType && (' ' + a + ' ').replace(Rt, ' ')))) {
            for (o = 0; (i = e[o++]); ) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
            a !== (a = C.trim(r)) && C.attr(n, 'class', a)
          }}}
      return this
    },
    removeClass: function (t) {
      var e
      var n
      var r
      var i
      var o
      var a
      var s = 0
      if (C.isFunction(t)) {
        return this.each(function (e) {
          C(this).removeClass(t.call(this, e, H(this)))
        })
      }
      if (!arguments.length) return this.attr('class', '')
      if (typeof t == 'string' && t) {
        for (e = t.match(E) || []; (n = this[s++]);)
          {if (((a = H(n)), (r = 1 === n.nodeType && (' ' + a + ' ').replace(Rt, ' ')))) {
            for (o = 0; (i = e[o++]); ) for (; -1 < r.indexOf(' ' + i + ' '); ) r = r.replace(' ' + i + ' ', ' ')
            a !== (a = C.trim(r)) && C.attr(n, 'class', a)
          }}}
      return this
    },
    toggleClass: function (i, t) {
      var o = typeof i
      return typeof t == 'boolean' && o == 'string'
        ? t
          ? this.addClass(i)
          : this.removeClass(i)
        : C.isFunction(i)
        ? this.each(function (e) {
            C(this).toggleClass(i.call(this, e, H(this), t), t)
          })
        : this.each(function () {
            var e, t, n, r
            if (o == 'string') for (t = 0, n = C(this), r = i.match(E) || []; (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
            else {
              ;(i !== undefined && o != 'boolean') ||
                ((e = H(this)) && C._data(this, '__className__', e), C.attr(this, 'class', (!e && !1 !== i && C._data(this, '__className__')) || ''))
            }
          })
    },
    hasClass: function (e) {
      for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); ) if (t.nodeType === 1 && (' ' + H(t) + ' ').replace(Rt, ' ').indexOf(r) > -1) return !0
      return !1
    }
  }),
    C.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, n) {
        C.fn[n] = function (e, t) {
          return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
      }
    ),
    C.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    })
  var q = T.location
  var Pt = C.now()
  var Bt = /\?/
  var Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
  var It =
    ((C.parseJSON = function (e) {
      var i, o, t
      return T.JSON && T.JSON.parse
        ? T.JSON.parse(e + '')
        : ((o = null),
          (t = C.trim(e + '')) &&
          !C.trim(
            t.replace(Wt, function (e, t, n, r) {
              return (o = i && t ? 0 : o) === 0 ? e : ((i = n || t), (o += !r - !n), '')
            })
          )
            ? Function('return ' + t)()
            : C.error('Invalid JSON: ' + e))
    }),
    (C.parseXML = function (e) {
      var t
      if (!e || typeof e != 'string') return null
      try {
        T.DOMParser ? (t = new T.DOMParser().parseFromString(e, 'text/xml')) : (((t = new T.ActiveXObject('Microsoft.XMLDOM'))['async'] = 'false'), t.loadXML(e))
      } catch (n) {
        t = undefined
      }
      return (t && t.documentElement && !t.getElementsByTagName('parsererror').length) || C.error('Invalid XML: ' + e), t
    }),
    /#.*$/)
  var $t = /([?&])_=[^&]*/
  var zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
  var Xt = /^(?:GET|HEAD)$/
  var Ut = /^\/\//
  var Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
  var Yt = {}
  var Jt = {}
  var Gt = '*/'.concat('*')
  var Kt = q.href
  var _ = Vt.exec(Kt.toLowerCase()) || []
  function Qt(o) {
    return function (e, t) {
      typeof e != 'string' && ((t = e), (e = '*'))
      var n
      var r = 0
      var i = e.toLowerCase().match(E) || []
      if (C.isFunction(t)) for (; (n = i[r++]); ) n.charAt(0) === '+' ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }
  function Zt(t, r, i, o) {
    var a = {}
    var s = t === Jt
    function u(e) {
      var n
      return (
        (a[e] = !0),
        C.each(t[e] || [], function (e, t) {
          t = t(r, i, o)
          return typeof t != 'string' || s || a[t] ? (s ? !(n = t) : void 0) : (r.dataTypes.unshift(t), u(t), !1)
        }),
        n
      )
    }
    return u(r.dataTypes[0]) || (!a['*'] && u('*'))
  }
  function en(e, t) {
    var n
    var r
    var i = C.ajaxSettings.flatOptions || {}
    for (r in t) t[r] !== undefined && ((i[r] ? e : (n = n || {}))[r] = t[r])
    return n && C.extend(!0, e, n), e
  }
  function tn(e, t, n, r) {
    var i
    var o
    var a
    var s
    var u
    var l = {}
    var c = e.dataTypes.slice()
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
    for (o = c.shift(); o; ) {
      if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
        {if ('*' === o) o = u
        else if ('*' !== u && u !== o) {
          if (!(a = l[u + ' ' + o] || l['* ' + o]))
            for (i in l)
              if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                break
              }
          if (!0 !== a)
            if (a && e['throws']) t = a(t)
            else
              try {
                t = a(t)
              } catch (f) {
                return { state: 'parsererror', error: a ? f : 'No conversion from ' + u + ' to ' + o }
              }
        }}}
    return { state: 'success', data: t }
  }
  function nn(e) {
    if (!C.contains(e.ownerDocument || g, e)) return !0
    for (; e && e.nodeType === 1; ) {
      if ((((t = e).style && t.style.display) || C.css(t, 'display')) === 'none' || e.type === 'hidden') return !0
      e = e.parentNode
    }
    var t
    return !1
  }
  C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Kt,
      type: 'GET',
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: { '*': Gt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
      converters: { '* text': String, 'text html': !0, 'text json': C.parseJSON, 'text xml': C.parseXML },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function (e, t) {
      return t ? en(en(e, C.ajaxSettings), t) : en(C.ajaxSettings, e)
    },
    ajaxPrefilter: Qt(Yt),
    ajaxTransport: Qt(Jt),
    ajax: function (e, t) {
      typeof e == 'object' && ((t = e), (e = undefined))
      var n
      var u
      var l
      var c
      var f
      var d
      var r
      var p = C.ajaxSetup({}, (t = t || {}))
      var h = p.context || p
      var g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event
      var m = C.Deferred()
      var y = C.Callbacks('once memory')
      var v = p.statusCode || {}
      var i = {}
      var o = {}
      var x = 0
      var a = 'canceled'
      var b = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t
          if (x === 2) {
            if (!r) for (r = {}; (t = zt.exec(l)); ) r[t[1].toLowerCase()] = t[2]
            t = r[e.toLowerCase()]
          }
          return t == null ? null : t
        },
        getAllResponseHeaders: function () {
          return x === 2 ? l : null
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase()
          return x || ((e = o[n] = o[n] || e), (i[e] = t)), this
        },
        overrideMimeType: function (e) {
          return x || (p.mimeType = e), this
        },
        statusCode: function (e) {
          if (e) {
            if (x < 2) for (var t in e) v[t] = [v[t], e[t]]
            else b.always(e[b.status])
          }
          return this
        },
        abort: function (e) {
          e = e || a
          return d && d.abort(e), s(0, e), this
        }
      }
      if (
        ((m.promise(b).complete = y.add),
        (b.success = b.done),
        (b.error = b.fail),
        (p.url = ((e || p.url || Kt) + '').replace(It, '').replace(Ut, _[1] + '//')),
        (p.type = t.method || t.type || p.method || p.type),
        (p.dataTypes = C.trim(p.dataType || '*')
          .toLowerCase()
          .match(E) || ['']),
        p.crossDomain == null &&
          ((e = Vt.exec(p.url.toLowerCase())),
          (p.crossDomain = !(!e || (e[1] === _[1] && e[2] === _[2] && (e[3] || (e[1] === 'http:' ? '80' : '443')) === (_[3] || (_[1] === 'http:' ? '80' : '443')))))),
        p.data && p.processData && typeof p.data != 'string' && (p.data = C.param(p.data, p.traditional)),
        Zt(Yt, p, t, b),
        x !== 2)
      ) {
        for (n in ((f = C.event && p.global) && C.active++ == 0 && C.event.trigger('ajaxStart'),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Xt.test(p.type)),
        (u = p.url),
        p.hasContent ||
          (p.data && ((u = p.url += (Bt.test(u) ? '&' : '?') + p.data), delete p.data),
          !1 === p.cache && (p.url = $t.test(u) ? u.replace($t, '$1_=' + Pt++) : u + (Bt.test(u) ? '&' : '?') + '_=' + Pt++)),
        p.ifModified && (C.lastModified[u] && b.setRequestHeader('If-Modified-Since', C.lastModified[u]), C.etag[u]) && b.setRequestHeader('If-None-Match', C.etag[u]),
        ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && b.setRequestHeader('Content-Type', p.contentType),
        b.setRequestHeader(
          'Accept',
          p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== '*' ? ', ' + Gt + '; q=0.01' : '') : p.accepts['*']
        ),
        p.headers)) {
          b.setRequestHeader(n, p.headers[n])
        }
        if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || x === 2)) return b.abort()
        for (n in ((a = 'abort'), { success: 1, error: 1, complete: 1 })) b[n](p[n])
        if ((d = Zt(Jt, p, t, b))) {
          if (((b.readyState = 1), f && g.trigger('ajaxSend', [b, p]), x === 2)) return b
          p['async'] &&
            p.timeout > 0 &&
            (c = T.setTimeout(function () {
              b.abort('timeout')
            }, p.timeout))
          try {
            ;(x = 1), d.send(i, s)
          } catch (w) {
            if (!(x < 2)) throw w
            s(-1, w)
          }
        } else s(-1, 'No Transport')
      }
      return b
      function s(e, t, n, r) {
        var i
        var o
        var a
        var s = t
        x !== 2 &&
          ((x = 2),
          c && T.clearTimeout(c),
          (d = undefined),
          (l = r || ''),
          (b.readyState = e > 0 ? 4 : 0),
          (r = (e >= 200 && e < 300) || e === 304),
          n &&
            (a = (function (e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; u[0] === '*'; ) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader('Content-Type'))
              if (i) {
                for (a in s)
                  {if (s[a] && s[a].test(i)) {
                    u.unshift(a)
                    break
                  }}}
              if (u[0] in n) o = u[0]
              else {
                for (a in n) {
                  if (!u[0] || e.converters[a + ' ' + u[0]]) {
                    o = a
                    break
                  }
                  r = r || a
                }
                o = o || r
              }
              if (o) return o !== u[0] && u.unshift(o), n[o]
            })(p, b, n)),
          (a = tn(p, a, b, r)),
          r
            ? (p.ifModified && ((n = b.getResponseHeader('Last-Modified')) && (C.lastModified[u] = n), (n = b.getResponseHeader('etag'))) && (C.etag[u] = n),
              e === 204 || p.type === 'HEAD' ? (s = 'nocontent') : e === 304 ? (s = 'notmodified') : ((s = a.state), (i = a.data), (r = !(o = a.error))))
            : ((o = s), (!e && s) || ((s = 'error'), e < 0 && (e = 0))),
          (b.status = e),
          (b.statusText = (t || s) + ''),
          r ? m.resolveWith(h, [i, s, b]) : m.rejectWith(h, [b, s, o]),
          b.statusCode(v),
          (v = undefined),
          f && g.trigger(r ? 'ajaxSuccess' : 'ajaxError', [b, p, r ? i : o]),
          y.fireWith(h, [b, s]),
          f) &&
          (g.trigger('ajaxComplete', [b, p]), --C.active || C.event.trigger('ajaxStop'))
      }
    },
    getJSON: function (e, t, n) {
      return C.get(e, t, n, 'json')
    },
    getScript: function (e, t) {
      return C.get(e, undefined, t, 'script')
    }
  }),
    C.each(['get', 'post'], function (e, i) {
      C[i] = function (e, t, n, r) {
        return C.isFunction(t) && ((r = r || n), (n = t), (t = undefined)), C.ajax(C.extend({ url: e, type: i, dataType: r, data: t, success: n }, C.isPlainObject(e) && e))
      }
    }),
    (C._evalUrl = function (e) {
      return C.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 })
    }),
    C.fn.extend({
      wrapAll: function (t) {
        var e
        return C.isFunction(t)
          ? this.each(function (e) {
              C(this).wrapAll(t.call(this, e))
            })
          : (this[0] &&
              ((e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstChild && e.firstChild.nodeType === 1; ) e = e.firstChild
                  return e
                })
                .append(this)),
            this)
      },
      wrapInner: function (n) {
        return C.isFunction(n)
          ? this.each(function (e) {
              C(this).wrapInner(n.call(this, e))
            })
          : this.each(function () {
              var e = C(this)
              var t = e.contents()
              t.length ? t.wrapAll(n) : e.append(n)
            })
      },
      wrap: function (t) {
        var n = C.isFunction(t)
        return this.each(function (e) {
          C(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            C.nodeName(this, 'body') || C(this).replaceWith(this.childNodes)
          })
          .end()
      }
    }),
    (C.expr.filters.hidden = function (e) {
      return y.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : nn(e)
    }),
    (C.expr.filters.visible = function (e) {
      return !C.expr.filters.hidden(e)
    })
  var rn = /%20/g
  var on = /\[\]$/
  var an = /\r?\n/g
  var sn = /^(?:submit|button|image|reset|file)$/i
  var un = /^(?:input|select|textarea|keygen)/i
  ;(C.param = function (e, t) {
    var n
    var r = []
    var i = function (e, t) {
      ;(t = C.isFunction(t) ? t() : t == null ? '' : t), (r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t))
    }
    if ((t === undefined && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || (e.jquery && !C.isPlainObject(e)))) {
      C.each(e, function () {
        i(this.name, this.value)
      }) } else { for (n in e)
        {!(function o(n, e, r, i) {
          if (C.isArray(e))
            C.each(e, function (e, t) {
              r || on.test(n) ? i(n, t) : o(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i)
            })
          else if (r || 'object' !== C.type(e)) i(n, e)
          else for (var t in e) o(n + '[' + t + ']', e[t], r, i)
        })(n, e[n], t, i)}}
    return r.join('&').replace(rn, '+')
  }),
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, 'elements')
          return e ? C.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return this.name && !C(this).is(':disabled') && un.test(this.nodeName) && !sn.test(e) && (this.checked || !ge.test(e))
          })
          .map(function (e, t) {
            var n = C(this).val()
            return n == null
              ? null
              : C.isArray(n)
              ? C.map(n, function (e) {
                  return { name: t.name, value: e.replace(an, '\r\n') }
                })
              : { name: t.name, value: n.replace(an, '\r\n') }
          })
          .get()
      }
    }),
    (C.ajaxSettings.xhr =
      T.ActiveXObject !== undefined
        ? function () {
            return this.isLocal ? dn() : g.documentMode > 8 ? fn() : (/^(get|post|head|put|delete|options)$/i.test(this.type) && fn()) || dn()
          }
        : fn)
  var ln = 0
  var cn = {}
  var F = C.ajaxSettings.xhr()
  function fn() {
    try {
      return new T.XMLHttpRequest()
    } catch (e) {}
  }
  function dn() {
    try {
      return new T.ActiveXObject('Microsoft.XMLHTTP')
    } catch (e) {}
  }
  T.attachEvent &&
    T.attachEvent('onunload', function () {
      for (var e in cn) cn[e](undefined, !0)
    }),
    (y.cors = !!F && 'withCredentials' in F),
    (y.ajax = !!F) &&
      C.ajaxTransport(function (l) {
        var c
        if (!l.crossDomain || y.cors) {
          return {
            send: function (e, a) {
              var t;
                var s = l.xhr();
                var u = ++ln
              if ((s.open(l.type, l.url, l['async'], l.username, l.password), l.xhrFields)) for (t in l.xhrFields) s[t] = l.xhrFields[t]
              for (t in (l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType),
              l.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'),
              e))
                {e[t] !== undefined && s.setRequestHeader(t, e[t] + '')}
              s.send((l.hasContent && l.data) || null),
                (c = function (e, t) {
                  var n, r, i
                  if (c && (t || s.readyState === 4))
                    {if ((delete cn[u], (c = undefined), (s.onreadystatechange = C.noop), t)) 4 !== s.readyState && s.abort()
                    else {
                      ;(i = {}), (n = s.status), 'string' == typeof s.responseText && (i.text = s.responseText)
                      try {
                        r = s.statusText
                      } catch (o) {
                        r = ''
                      }
                      n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : (n = i.text ? 200 : 404)
                    }}
                  i && a(n, r, i, s.getAllResponseHeaders())
                }),
                l['async'] ? (s.readyState === 4 ? T.setTimeout(c) : (s.onreadystatechange = cn[u] = c)) : c()
            },
            abort: function () {
              c && c(undefined, !0)
            }
          }
        }
      }),
    C.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return C.globalEval(e), e
        }
      }
    }),
    C.ajaxPrefilter('script', function (e) {
      e.cache === undefined && (e.cache = !1), e.crossDomain && ((e.type = 'GET'), (e.global = !1))
    }),
    C.ajaxTransport('script', function (t) {
      var r, i
      if (t.crossDomain) {
        return (
          (i = g.head || C('head')[0] || g.documentElement),
          {
            send: function (e, n) {
              ;((r = g.createElement('script'))['async'] = !0),
                t.scriptCharset && (r.charset = t.scriptCharset),
                (r.src = t.url),
                (r.onload = r.onreadystatechange =
                  function (e, t) {
                    ;(!t && r.readyState && !/loaded|complete/.test(r.readyState)) ||
                      ((r.onload = r.onreadystatechange = null), r.parentNode && r.parentNode.removeChild(r), (r = null), t) ||
                      n(200, 'success')
                  }),
                i.insertBefore(r, i.firstChild)
            },
            abort: function () {
              r && r.onload(undefined, !0)
            }
          }
        )
      }
    })
  var pn = []
  var hn = /(=)\?(?=&|$)|\?\?/
  var gn =
    (C.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = pn.pop() || C.expando + '_' + Pt++
        return (this[e] = !0), e
      }
    }),
    C.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r
      var i
      var o
      var a =
        !1 !== e.jsonp &&
        (hn.test(e.url) ? 'url' : typeof e.data == 'string' && (e.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 && hn.test(e.data) && 'data')
      if (a || e.dataTypes[0] === 'jsonp') {
        return (
          (r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(hn, '$1' + r)) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || C.error(r + ' was not called'), o[0]
          }),
          (e.dataTypes[0] = 'json'),
          (i = T[r]),
          (T[r] = function () {
            o = arguments
          }),
          n.always(function () {
            i === undefined ? C(T).removeProp(r) : (T[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), pn.push(r)), o && C.isFunction(i) && i(o[0]), (o = i = undefined)
          }),
          'script'
        )
      }
    }),
    (C.parseHTML = function (e, t, n) {
      if (!e || typeof e != 'string') return null
      typeof t == 'boolean' && ((n = t), (t = !1)), (t = t || g)
      var r = J.exec(e)
      var n = !n && []
      return r ? [t.createElement(r[1])] : ((r = Ne([e], t, n)), n && n.length && C(n).remove(), C.merge([], r.childNodes))
    }),
    C.fn.load)
  function mn(e) {
    return C.isWindow(e) ? e : e.nodeType === 9 && (e.defaultView || e.parentWindow)
  }
  return (
    (C.fn.load = function (e, t, n) {
      var r, i, o, a, s
      return typeof e != 'string' && gn
        ? gn.apply(this, arguments)
        : ((a = this),
          (s = e.indexOf(' ')) > -1 && ((r = C.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
          C.isFunction(t) ? ((n = t), (t = undefined)) : t && typeof t == 'object' && (i = 'POST'),
          a.length > 0 &&
            C.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
              .done(function (e) {
                ;(o = arguments), a.html(r ? C('<div>').append(C.parseHTML(e)).find(r) : e)
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e])
                    })
                  }
              ),
          this)
    }),
    C.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e)
      }
    }),
    (C.expr.filters.animated = function (t) {
      return C.grep(C.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (C.offset = {
      setOffset: function (e, t, n) {
        var r
        var i
        var o
        var a
        var s = C.css(e, 'position')
        var u = C(e)
        var l = {}
        s === 'static' && (e.style.position = 'relative'),
          (o = u.offset()),
          (r = C.css(e, 'top')),
          (a = C.css(e, 'left')),
          (s = (s === 'absolute' || s === 'fixed') && C.inArray('auto', [r, a]) > -1 ? ((i = (s = u.position()).top), s.left) : ((i = parseFloat(r) || 0), parseFloat(a) || 0)),
          (t = C.isFunction(t) ? t.call(e, n, C.extend({}, o)) : t).top != null && (l.top = t.top - o.top + i),
          t.left != null && (l.left = t.left - o.left + s),
          'using' in t ? t.using.call(e, l) : u.css(l)
      }
    }),
    C.fn.extend({
      offset: function (t) {
        var e, n, r, i
        return arguments.length
          ? t === undefined
            ? this
            : this.each(function (e) {
                C.offset.setOffset(this, t, e)
              })
          : ((n = { top: 0, left: 0 }),
            (i = (r = this[0]) && r.ownerDocument)
              ? ((e = i.documentElement),
                C.contains(e, r)
                  ? (typeof r.getBoundingClientRect != 'undefined' && (n = r.getBoundingClientRect()),
                    (r = mn(i)),
                    { top: n.top + (r.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                  : n)
              : void 0)
      },
      position: function () {
        var e, t, n, r
        if (this[0]) {
          return (
            (n = { top: 0, left: 0 }),
            (r = this[0]),
            C.css(r, 'position') === 'fixed'
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ((n = C.nodeName(e[0], 'html') ? n : e.offset()).top += C.css(e[0], 'borderTopWidth', !0)),
                (n.left += C.css(e[0], 'borderLeftWidth', !0))),
            { top: t.top - n.top - C.css(r, 'marginTop', !0), left: t.left - n.left - C.css(r, 'marginLeft', !0) }
          )
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && !C.nodeName(e, 'html') && C.css(e, 'position') === 'static'; ) e = e.offsetParent
          return e || lt
        })
      }
    }),
    C.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, i) {
      var o = /Y/.test(i)
      C.fn[t] = function (e) {
        return d(
          this,
          function (e, t, n) {
            var r = mn(e)
            if (n === undefined) return r ? (i in r ? r[i] : r.document.documentElement[t]) : e[t]
            r ? r.scrollTo(o ? C(r).scrollLeft() : n, o ? n : C(r).scrollTop()) : (e[t] = n)
          },
          t,
          e,
          arguments.length,
          null
        )
      }
    }),
    C.each(['top', 'left'], function (e, n) {
      C.cssHooks[n] = ft(y.pixelPosition, function (e, t) {
        if (t) return (t = p(e, n)), st.test(t) ? C(e).position()[n] + 'px' : t
      })
    }),
    C.each({ Height: 'height', Width: 'width' }, function (o, a) {
      C.each({ padding: 'inner' + o, content: a, '': 'outer' + o }, function (r, e) {
        C.fn[e] = function (e, t) {
          var n = arguments.length && (r || typeof e != 'boolean')
          var i = r || (!0 === e || !0 === t ? 'margin' : 'border')
          return d(
            this,
            function (e, t, n) {
              var r
              return C.isWindow(e)
                ? e.document.documentElement['client' + o]
                : e.nodeType === 9
                ? ((r = e.documentElement), Math.max(e.body['scroll' + o], r['scroll' + o], e.body['offset' + o], r['offset' + o], r['client' + o]))
                : n === undefined
                ? C.css(e, t, i)
                : C.style(e, t, n, i)
            },
            a,
            n ? e : undefined,
            n,
            null
          )
        }
      })
    }),
    C.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n)
      }
    }),
    (C.fn.size = function () {
      return this.length
    }),
    (C.fn.andSelf = C.fn.addBack),
    layui.define(function (e) {
      e('jquery', (layui.$ = C))
    }),
    C
  )
})
!(function (p, m) {
  'use strict'
  var h
  var g
  var e
  var n = p.layui && layui.define
  var f = {
    getPath:
      ((e = document.currentScript
        ? document.currentScript.src
        : (function () {
            for (var e, t = document.scripts, i = t.length - 1, n = i; n > 0; n--)
              if (t[n].readyState === 'interactive') {
                e = t[n].src
                break
              }
            return e || t[i].src
          })()),
      (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf('/') + 1)),
    config: { removeFocus: !0 },
    end: {},
    beforeEnd: {},
    events: { resize: {} },
    minStackIndex: 0,
    minStackArr: [],
    btn: ['\u786e\u5b9a', '\u53d6\u6d88'],
    type: ['dialog', 'page', 'iframe', 'loading', 'tips'],
    getStyle: function (e, t) {
      e = e.currentStyle || p.getComputedStyle(e, null)
      return e[e.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](t)
    },
    link: function (e, i, t) {
      var n, a, o, s, r, l
      v.path &&
        ((n = document.getElementsByTagName('head')[0]),
        (a = document.createElement('link')),
        (o = ((t = typeof i == 'string' ? i : t) || e).replace(/\.|\//g, '')),
        (s = 'layuicss-' + o),
        (r = 'creating'),
        (l = 0),
        (a.rel = 'stylesheet'),
        (a.href = v.path + e),
        (a.id = s),
        document.getElementById(s) || n.appendChild(a),
        'function' == typeof i) &&
        !(function c(e) {
          var t = document.getElementById(s)
          return ++l > 100
            ? p.console && console.error(o + '.css: Invalid')
            : void (parseInt(f.getStyle(t, 'width')) === 1989
                ? (e === r && t.removeAttribute('lay-status'), t.getAttribute('lay-status') === r ? setTimeout(c, 100) : i())
                : (t.setAttribute('lay-status', r),
                  setTimeout(function () {
                    c(r)
                  }, 100)))
        })()
    }
  }
  var v = {
    v: '3.7.0',
    ie: ((e = navigator.userAgent.toLowerCase()), !!(p.ActiveXObject || 'ActiveXObject' in p) && ((e.match(/msie\s(\d+)/) || [])[1] || '11')),
    index: p.layer && p.layer.v ? 1e5 : 0,
    path: f.getPath,
    config: function (e, t) {
      return (
        (v.cache = f.config = h.extend({}, f.config, (e = e || {}))),
        (v.path = f.config.path || v.path),
        typeof e.extend == 'string' && (e.extend = [e.extend]),
        f.config.path && v.ready(),
        e.extend && (n ? layui.addcss('modules/layer/' + e.extend) : f.link('css/' + e.extend)),
        this
      )
    },
    ready: function (e) {
      var t = 'layer';
          var i = (n ? 'modules/' : 'css/') + 'layer.css?v=' + v.v
      return n ? (layui['layui.all'] ? typeof e == 'function' && e() : layui.addcss(i, e, t)) : f.link(i, e, t), this
    },
    alert: function (e, t, i) {
      var n = typeof t == 'function'
      return v.open(h.extend({ content: e, yes: (i = n ? t : i) }, n ? {} : t))
    },
    confirm: function (e, t, i, n) {
      var a = typeof t == 'function'
      return a && ((n = i), (i = t)), v.open(h.extend({ content: e, btn: f.btn, yes: i, btn2: n }, a ? {} : t))
    },
    msg: function (e, t, i) {
      var n = typeof t == 'function',
        a = f.config.skin,
        a = (a ? a + ' ' + a + '-msg' : '') || 'layui-layer-msg',
        o = u.anim.length - 1
      return (
        n && (i = t),
        v.open(
          h.extend(
            { content: e, time: 3e3, shade: !1, skin: a, title: !1, closeBtn: !1, btn: !1, resize: !1, end: i, removeFocus: !1 },
            n && !f.config.skin
              ? { skin: a + ' layui-layer-hui', anim: o }
              : (((t = t || {}).icon !== -1 && (t.icon !== m || f.config.skin)) || (t.skin = a + ' ' + (t.skin || 'layui-layer-hui')), t)
          )
        )
      )
    },
    load: function (e, t) {
      return v.open(h.extend({ type: 3, icon: e || 0, resize: !1, shade: 0.01, removeFocus: !1 }, t))
    },
    tips: function (e, t, i) {
      return v.open(h.extend({ type: 4, content: [e, t], closeBtn: !1, time: 3e3, shade: !1, resize: !1, fixed: !1, maxWidth: 260, removeFocus: !1 }, i))
    }
  }
  var t = function (e) {
    var t = this;
        var i = function () {
        t.creat()
      }
    ;(t.index = ++v.index),
      (t.config.maxWidth = h(g).width() - 30),
      (t.config = h.extend({}, t.config, f.config, e)),
      document.body
        ? i()
        : setTimeout(function () {
            i()
          }, 30)
  }
  var u =
    ((t.pt = t.prototype),
    ['layui-layer', '.layui-layer-title', '.layui-layer-main', '.layui-layer-dialog', 'layui-layer-iframe', 'layui-layer-content', 'layui-layer-btn', 'layui-layer-close'])
  var y =
    ((u.anim = {
      0: 'layer-anim-00',
      1: 'layer-anim-01',
      2: 'layer-anim-02',
      3: 'layer-anim-03',
      4: 'layer-anim-04',
      5: 'layer-anim-05',
      6: 'layer-anim-06',
      slideDown: 'layer-anim-slide-down',
      slideLeft: 'layer-anim-slide-left',
      slideUp: 'layer-anim-slide-up',
      slideRight: 'layer-anim-slide-right'
    }),
    (u.SHADE = 'layui-layer-shade'),
    (u.MOVE = 'layui-layer-move'),
    'LAYUI-LAYER-SHADE-KEY')
  var l = 'LAYUI_LAYER_CONTENT_RECORD_HEIGHT'
  var i =
    ((t.pt.config = {
      type: 0,
      shade: 0.3,
      fixed: !0,
      move: u[1],
      title: '\u4fe1\u606f',
      offset: 'auto',
      area: 'auto',
      closeBtn: 1,
      icon: -1,
      time: 0,
      zIndex: 19891014,
      maxWidth: 360,
      anim: 0,
      isOutAnim: !0,
      minStack: !0,
      moveType: 1,
      resize: !0,
      scrollbar: !0,
      tips: 2
    }),
    (t.pt.vessel = function (e, t) {
      var i;
          var n = this.index;
          var a = this.config;
          var o = a.zIndex + n;
          var s = 'object' == typeof a.title;
          var r = a.maxmin && (1 === a.type || 2 === a.type);
          var s = a.title ? '<div class="layui-layer-title" style="' + (s ? a.title[1] : '') + '">' + (s ? a.title[0] : a.title) + '</div>' : ''
      return (
        (a.zIndex = o),
        t(
          [
            a.shade ? '<div class="' + u.SHADE + '" id="' + u.SHADE + n + '" times="' + n + '" style="z-index:' + (o - 1) + '; "></div>' : '',
            '<div class="' +
              u[0] +
              ' layui-layer-' +
              f.type[a.type] +
              ((a.type != 0 && a.type != 2) || a.shade ? '' : ' layui-layer-border') +
              ' ' +
              (a.skin || '') +
              '" id="' +
              u[0] +
              n +
              '" type="' +
              f.type[a.type] +
              '" times="' +
              n +
              '" showtime="' +
              a.time +
              '" conType="' +
              (e ? 'object' : 'string') +
              '" style="z-index: ' +
              o +
              '; width:' +
              a.area[0] +
              ';height:' +
              a.area[1] +
              ';position:' +
              (a.fixed ? 'fixed;' : 'absolute;') +
              '">' +
              (e && a.type != 2 ? '' : s) +
              '<div' +
              (a.id ? ' id="' + a.id + '"' : '') +
              ' class="layui-layer-content' +
              (a.type == 0 && a.icon !== -1 ? ' layui-layer-padding' : '') +
              (a.type == 3 ? ' layui-layer-loading' + a.icon : '') +
              '">' +
              ((n = ['layui-icon-tips', 'layui-icon-success', 'layui-icon-error', 'layui-icon-question', 'layui-icon-lock', 'layui-icon-face-cry', 'layui-icon-face-smile']),
              (o = 'layui-anim layui-anim-rotate layui-anim-loop'),
              0 == a.type && a.icon !== -1
                ? '<i class="layui-layer-face layui-icon ' + ((i = a.icon == 16 ? 'layui-icon layui-icon-loading ' + o : i) || n[a.icon] || n[0]) + '"></i>'
                : a.type == 3
                ? ((i = ['layui-icon-loading', 'layui-icon-loading-1']),
                  2 == a.icon ? '<div class="layui-layer-loading-2 ' + o + '"></div>' : '<i class="layui-layer-loading-icon layui-icon ' + (i[a.icon] || i[0]) + ' ' + o + '"></i>')
                : '') +
              (((a.type != 1 || !e) && a.content) || '') +
              '</div><div class="layui-layer-setwin">' +
              ((n = []),
              r && (n.push('<span class="layui-layer-min"></span>'), n.push('<span class="layui-layer-max"></span>')),
              a.closeBtn && n.push('<span class="layui-icon layui-icon-close ' + [u[7], u[7] + (a.title ? a.closeBtn : a.type == 4 ? '1' : '2')].join(' ') + '"></span>'),
              n.join('')) +
              '</div>' +
              (a.btn
                ? (function () {
                    var e = ''
                    typeof a.btn == 'string' && (a.btn = [a.btn])
                    for (var t, i = 0, n = a.btn.length; i < n; i++) e += '<a class="' + u[6] + i + '">' + a.btn[i] + '</a>'
                    return '<div class="' + ((t = [u[6]]), a.btnAlign && t.push(u[6] + '-' + a.btnAlign), t.join(' ')) + '">' + e + '</div>'
                  })()
                : '') +
              (a.resize ? '<span class="layui-layer-resize"></span>' : '') +
              '</div>'
          ],
          s,
          h('<div class="' + u.MOVE + '" id="' + u.MOVE + '"></div>')
        ),
        this
      )
    }),
    (t.pt.creat = function () {
      var e;
          var t;
          var i;
          var n;
          var a = this;
          var o = a.config;
          var s = a.index;
          var r = 'object' == typeof (d = o.content);
          var l = h('body');
          var c = function (e) {
          var t
          o.shift && (o.anim = o.shift),
            u.anim[o.anim] &&
              ((t = 'layer-anim ' + u.anim[o.anim]),
              e.addClass(t).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                h(this).removeClass(t)
              }))
        }
      if (o.id && h('.' + u[0]).find('#' + o.id)[0])
        {(e = h('#' + o.id).closest('.' + u[0])),
            (t = e.attr('times')),
            (i = e.data('config')),
            (n = h('#' + u.SHADE + t)),
            'min' === (e.data('maxminStatus') || {})
              ? v.restore(t)
              : i.hideOnClose &&
                (n.show(),
                e.show(),
                c(e),
                setTimeout(function () {
                  n.css({ opacity: n.data(y) })
                }, 10))}
      else {
        switch (
          (o.removeFocus && document.activeElement && document.activeElement.blur(),
          typeof o.area == 'string' && (o.area = o.area === 'auto' ? ['', ''] : [o.area, '']),
          6 == v.ie && (o.fixed = !1),
          o.type)
        ) {
          case 0:
            ;(o.btn = 'btn' in o ? o.btn : f.btn[0]), v.closeAll('dialog')
            break
          case 2:
            var d = (o.content = r ? o.content : [o.content || '', 'auto'])
            o.content =
              '<iframe scrolling="' +
              (o.content[1] || 'auto') +
              '" allowtransparency="true" id="' +
              u[4] +
              s +
              '" name="' +
              u[4] +
              s +
              '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' +
              o.content[0] +
              '"></iframe>'
            break
          case 3:
            delete o.title, delete o.closeBtn, o.icon === -1 && o.icon, v.closeAll('loading')
            break
          case 4:
            r || (o.content = [o.content, 'body']),
              (o.follow = o.content[1]),
              (o.content = o.content[0] + '<i class="layui-layer-TipsG"></i>'),
              delete o.title,
              (o.tips = typeof o.tips == 'object' ? o.tips : [o.tips, !0]),
              o.tipsMore || v.closeAll('tips')
        }
        a
          .vessel(r, function (e, t, i) {
            l.append(e[0]),
              r
                ? o.type == 2 || o.type == 4
                  ? h('body').append(e[1])
                  : d.parents('.' + u[0])[0] ||
                    (d.data('display', d.css('display')).show().addClass('layui-layer-wrap').wrap(e[1]),
                    h('#' + u[0] + s)
                      .find('.' + u[5])
                      .before(t))
                : l.append(e[1]),
              h('#' + u.MOVE)[0] || l.append((f.moveElem = i)),
              (a.layero = h('#' + u[0] + s)),
              (a.shadeo = h('#' + u.SHADE + s)),
              o.scrollbar || f.setScrollbar(s)
          })
          .auto(s),
          a.shadeo.css({ 'background-color': o.shade[1] || '#000', opacity: o.shade[0] || o.shade, transition: o.shade[2] || '' }),
          a.shadeo.data(y, o.shade[0] || o.shade),
          2 == o.type && v.ie == 6 && a.layero.find('iframe').attr('src', d[0]),
          4 == o.type
            ? a.tips()
            : (a.offset(),
              parseInt(f.getStyle(document.getElementById(u.MOVE), 'z-index')) ||
                (a.layero.css('visibility', 'hidden'),
                v.ready(function () {
                  a.offset(), a.layero.css('visibility', 'visible')
                }))),
          !o.fixed ||
            f.events.resize[a.index] ||
            ((f.events.resize[a.index] = function () {
              a.resize()
            }),
            g.on('resize', f.events.resize[a.index])),
          o.time <= 0 ||
            setTimeout(function () {
              v.close(a.index)
            }, o.time),
          a.move().callback(),
          c(a.layero),
          a.layero.data('config', o)
      }
    }),
    (t.pt.resize = function () {
      var e = this;
          var t = e.config
      e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(e.index), t.type == 4 && e.tips()
    }),
    (t.pt.auto = function (e) {
      var t = this.config;
          var i = h('#' + u[0] + e);
          var n =
            ('' === t.area[0] && 0 < t.maxWidth && (v.ie && v.ie < 8 && t.btn && i.width(i.innerWidth()), i.outerWidth() > t.maxWidth) && i.width(t.maxWidth),
            [i.innerWidth(), i.innerHeight()]);
          var a = i.find(u[1]).outerHeight() || 0;
          var o = i.find('.' + u[6]).outerHeight() || 0;
          var e = function (e) {
          ;(e = i.find(e)).height(n[1] - a - o - 2 * (0 | parseFloat(e.css('padding-top'))))
        }
      return (
        2 === t.type
          ? e('iframe')
          : t.area[1] === ''
          ? t.maxHeight > 0 && i.outerHeight() > t.maxHeight
            ? ((n[1] = t.maxHeight), e('.' + u[5]))
            : t.fixed && n[1] >= g.height() && ((n[1] = g.height()), e('.' + u[5]))
          : e('.' + u[5]),
        this
      )
    }),
    (t.pt.offset = function () {
      var e = this;
          var t = e.config;
          var i = e.layero;
          var n = [i.outerWidth(), i.outerHeight()];
          var a = typeof t.offset == 'object'
      ;(e.offsetTop = (g.height() - n[1]) / 2),
        (e.offsetLeft = (g.width() - n[0]) / 2),
        a
          ? ((e.offsetTop = t.offset[0]), (e.offsetLeft = t.offset[1] || e.offsetLeft))
          : t.offset !== 'auto' &&
            (t.offset === 't'
              ? (e.offsetTop = 0)
              : t.offset === 'r'
              ? (e.offsetLeft = g.width() - n[0])
              : t.offset === 'b'
              ? (e.offsetTop = g.height() - n[1])
              : t.offset === 'l'
              ? (e.offsetLeft = 0)
              : t.offset === 'lt'
              ? ((e.offsetTop = 0), (e.offsetLeft = 0))
              : t.offset === 'lb'
              ? ((e.offsetTop = g.height() - n[1]), (e.offsetLeft = 0))
              : t.offset === 'rt'
              ? ((e.offsetTop = 0), (e.offsetLeft = g.width() - n[0]))
              : t.offset === 'rb'
              ? ((e.offsetTop = g.height() - n[1]), (e.offsetLeft = g.width() - n[0]))
              : (e.offsetTop = t.offset)),
        t.fixed ||
          ((e.offsetTop = /%$/.test(e.offsetTop) ? (g.height() * parseFloat(e.offsetTop)) / 100 : parseFloat(e.offsetTop)),
          (e.offsetLeft = /%$/.test(e.offsetLeft) ? (g.width() * parseFloat(e.offsetLeft)) / 100 : parseFloat(e.offsetLeft)),
          (e.offsetTop += g.scrollTop()),
          (e.offsetLeft += g.scrollLeft())),
        'min' === i.data('maxminStatus') && ((e.offsetTop = g.height() - (i.find(u[1]).outerHeight() || 0)), (e.offsetLeft = i.css('left'))),
        i.css({ top: e.offsetTop, left: e.offsetLeft })
    }),
    (t.pt.tips = function () {
      var e = this.config;
          var t = this.layero;
          var i = [t.outerWidth(), t.outerHeight()];
          var n = h(e.follow);
          var a = { width: (n = n[0] ? n : h('body')).outerWidth(), height: n.outerHeight(), top: n.offset().top, left: n.offset().left };
          var o = t.find('.layui-layer-TipsG');
          var n = e.tips[0]
      e.tips[1] || o.remove(),
        (a.autoLeft = function () {
          a.left + i[0] - g.width() > 0 ? ((a.tipLeft = a.left + a.width - i[0]), o.css({ right: 12, left: 'auto' })) : (a.tipLeft = a.left)
        }),
        (a.where = [
          function () {
            a.autoLeft(), (a.tipTop = a.top - i[1] - 10), o.removeClass('layui-layer-TipsB').addClass('layui-layer-TipsT').css('border-right-color', e.tips[1])
          },
          function () {
            ;(a.tipLeft = a.left + a.width + 10),
              (a.tipTop = a.top - (0.75 * a.height < 21 ? 21 - 0.5 * a.height : 0)),
              (a.tipTop = Math.max(a.tipTop, 0)),
              o.removeClass('layui-layer-TipsL').addClass('layui-layer-TipsR').css('border-bottom-color', e.tips[1])
          },
          function () {
            a.autoLeft(), (a.tipTop = a.top + a.height + 10), o.removeClass('layui-layer-TipsT').addClass('layui-layer-TipsB').css('border-right-color', e.tips[1])
          },
          function () {
            ;(a.tipLeft = a.left - i[0] - 10),
              (a.tipTop = a.top - (0.75 * a.height < 21 ? 21 - 0.5 * a.height : 0)),
              (a.tipTop = Math.max(a.tipTop, 0)),
              o.removeClass('layui-layer-TipsR').addClass('layui-layer-TipsL').css('border-bottom-color', e.tips[1])
          }
        ]),
        a.where[n - 1](),
        1 === n
          ? a.top - (g.scrollTop() + i[1] + 16) < 0 && a.where[2]()
          : n === 2
          ? g.width() - (a.left + a.width + i[0] + 16) > 0 || a.where[3]()
          : n === 3
          ? a.top - g.scrollTop() + a.height + i[1] + 16 - g.height() > 0 && a.where[0]()
          : n === 4 && i[0] + 16 - a.left > 0 && a.where[1](),
        t.find('.' + u[5]).css({ 'background-color': e.tips[1], 'padding-right': e.closeBtn ? '30px' : '' }),
        t.css({ left: a.tipLeft - (e.fixed ? g.scrollLeft() : 0), top: a.tipTop - (e.fixed ? g.scrollTop() : 0) })
    }),
    (t.pt.move = function () {
      var n = this;
          var a = n.config;
          var e = h(document);
          var o = n.layero;
          var l = ['LAY_MOVE_DICT', 'LAY_RESIZE_DICT'];
          var t = o.find(a.move);
          var i = o.find('.layui-layer-resize')
      return (
        a.move && t.css('cursor', 'move'),
        t.on('mousedown', function (e) {
          var t, i
          e.button ||
            ((t = h(this)),
            (i = {}),
            a.move &&
              ((i.layero = o),
              (i.config = a),
              (i.offset = [e.clientX - parseFloat(o.css('left')), e.clientY - parseFloat(o.css('top'))]),
              t.data(l[0], i),
              (f.eventMoveElem = t),
              f.moveElem.css('cursor', 'move').show()),
            e.preventDefault())
        }),
        i.on('mousedown', function (e) {
          var t = h(this);
              var i = {}
          a.resize &&
            ((i.layero = o),
            (i.config = a),
            (i.offset = [e.clientX, e.clientY]),
            (i.index = n.index),
            (i.area = [o.outerWidth(), o.outerHeight()]),
            t.data(l[1], i),
            (f.eventResizeElem = t),
            f.moveElem.css('cursor', 'se-resize').show()),
            e.preventDefault()
        }),
        f.docEvent ||
          (e
            .on('mousemove', function (e) {
              var t, i, n, a, o, s, r
              f.eventMoveElem &&
                ((t = (a = f.eventMoveElem.data(l[0]) || {}).layero),
                (o = a.config),
                (s = e.clientX - a.offset[0]),
                (r = e.clientY - a.offset[1]),
                (i = t.css('position') === 'fixed'),
                e.preventDefault(),
                (a.stX = i ? 0 : g.scrollLeft()),
                (a.stY = i ? 0 : g.scrollTop()),
                o.moveOut ||
                  ((i = g.width() - t.outerWidth() + a.stX),
                  (n = g.height() - t.outerHeight() + a.stY),
                  i < (s = s < a.stX ? a.stX : s) && (s = i),
                  n < (r = r < a.stY ? a.stY : r) && (r = n)),
                t.css({ left: s, top: r })),
                f.eventResizeElem &&
                  ((o = (a = f.eventResizeElem.data(l[1]) || {}).config),
                  (s = e.clientX - a.offset[0]),
                  (r = e.clientY - a.offset[1]),
                  e.preventDefault(),
                  v.style(a.index, { width: a.area[0] + s, height: a.area[1] + r }),
                  o.resizing) &&
                  o.resizing(a.layero)
            })
            .on('mouseup', function (e) {
              var t, i
              f.eventMoveElem &&
                ((i = (t = f.eventMoveElem.data(l[0]) || {}).config), f.eventMoveElem.removeData(l[0]), delete f.eventMoveElem, f.moveElem.hide(), i.moveEnd) &&
                i.moveEnd(t.layero),
                f.eventResizeElem && (f.eventResizeElem.removeData(l[1]), delete f.eventResizeElem, f.moveElem.hide())
            }),
          (f.docEvent = !0)),
        n
      )
    }),
    (t.pt.btnLoading = function (e, t) {
      t
        ? e.find('.layui-layer-btn-loading-icon')[0] ||
          e
            .addClass('layui-layer-btn-is-loading')
            .attr({ disabled: '' })
            .prepend('<i class="layui-layer-btn-loading-icon layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>')
        : e.removeClass('layui-layer-btn-is-loading').removeAttr('disabled').find('.layui-layer-btn-loading-icon').remove()
    }),
    (t.pt.callback = function () {
      var n = this;
          var a = n.layero;
          var o = n.config
      n.openLayer(),
        o.success &&
          (o.type == 2
            ? a.find('iframe').on('load', function () {
                o.success(a, n.index, n)
              })
            : o.success(a, n.index, n)),
        6 == v.ie && n.IE6(a),
        a
          .find('.' + u[6])
          .children('a')
          .on('click', function () {
            var e;
                var t = h(this);
                var i = t.index()
            t.attr('disabled') ||
              (o.btnAsync
                ? ((e = i === 0 ? o.yes || o.btn1 : o['btn' + (i + 1)]),
                  (n.loading = function (e) {
                    n.btnLoading(t, e)
                  }),
                  e
                    ? f.promiseLikeResolve(e.call(o, n.index, a, n)).then(
                        function (e) {
                          !1 !== e && v.close(n.index)
                        },
                        function (e) {
                          e !== m && p.console && p.console.error('layer error hint: ' + e)
                        }
                      )
                    : v.close(n.index))
                : i === 0
                ? o.yes
                  ? o.yes(n.index, a, n)
                  : o.btn1
                  ? o.btn1(n.index, a, n)
                  : v.close(n.index)
                : !1 !== (o['btn' + (i + 1)] && o['btn' + (i + 1)](n.index, a, n)) && v.close(n.index))
          }),
        a.find('.' + u[7]).on('click', function () {
          !1 !== (o.cancel && o.cancel(n.index, a, n)) && v.close(n.index)
        }),
        o.shadeClose &&
          n.shadeo.on('click', function () {
            v.close(n.index)
          }),
        a.find('.layui-layer-min').on('click', function () {
          !1 !== (o.min && o.min(a, n.index, n)) && v.min(n.index, o)
        }),
        a.find('.layui-layer-max').on('click', function () {
          h(this).hasClass('layui-layer-maxmin')
            ? (v.restore(n.index), o.restore && o.restore(a, n.index, n))
            : (v.full(n.index, o),
              setTimeout(function () {
                o.full && o.full(a, n.index, n)
              }, 100))
        }),
        o.end && (f.end[n.index] = o.end),
        o.beforeEnd && (f.beforeEnd[n.index] = h.proxy(o.beforeEnd, o, a, n.index, n))
    }),
    (f.reselect = function () {
      h.each(h('select'), function (e, t) {
        var i = h(this)
        i.parents('.' + u[0])[0] || (i.attr('layer') == 1 && h('.' + u[0]).length < 1 && i.removeAttr('layer').show())
      })
    }),
    (t.pt.IE6 = function (e) {
      h('select').each(function (e, t) {
        var i = h(this)
        i.parents('.' + u[0])[0] || (i.css('display') !== 'none' && i.attr({ layer: '1' }).hide())
      })
    }),
    (t.pt.openLayer = function () {
      ;(v.zIndex = this.config.zIndex),
        (v.setTop = function (e) {
          return (
            (v.zIndex = parseInt(e[0].style.zIndex)),
            e.on('mousedown', function () {
              v.zIndex++, e.css('z-index', v.zIndex + 1)
            }),
            v.zIndex
          )
        })
    }),
    (f.record = function (e) {
      if (!e[0]) return p.console && console.error('index error')
      var t = e.attr('type');
          var i = e.find('.layui-layer-content');
          var t = t === f.type[2] ? i.children('iframe') : i;
          var n = [
            e[0].style.width || f.getStyle(e[0], 'width'),
            e[0].style.height || f.getStyle(e[0], 'height'),
            e.position().top,
            e.position().left + parseFloat(e.css('margin-left'))
          ]
      e.find('.layui-layer-max').addClass('layui-layer-maxmin'), e.attr({ area: n }), i.data(l, f.getStyle(t[0], 'height'))
    }),
    (f.setScrollbar = function (e) {
      u.html.css('overflow', 'hidden').attr('layer-full', e)
    }),
    (f.restScrollbar = function (e) {
      u.html.attr('layer-full') == e && (u.html[0].style[u.html[0].style.removeProperty ? 'removeProperty' : 'removeAttribute']('overflow'), u.html.removeAttr('layer-full'))
    }),
    (f.promiseLikeResolve = function (e) {
      var t = h.Deferred()
      return e && typeof e.then == 'function' ? e.then(t.resolve, t.reject) : t.resolve(e), t.promise()
    }),
    ((p.layer = v).getChildFrame = function (e, t) {
      return (
        (t = t || h('.' + u[4]).attr('times')),
        h('#' + u[0] + t)
          .find('iframe')
          .contents()
          .find(e)
      )
    }),
    (v.getFrameIndex = function (e) {
      return h('#' + e)
        .parents('.' + u[4])
        .attr('times')
    }),
    (v.iframeAuto = function (e) {
      var t, i, n
      e &&
        ((t = v.getChildFrame('html', e).outerHeight()),
        (i = (e = h('#' + u[0] + e)).find(u[1]).outerHeight() || 0),
        (n = e.find('.' + u[6]).outerHeight() || 0),
        e.css({ height: t + i + n }),
        e.find('iframe').css({ height: t }))
    }),
    (v.iframeSrc = function (e, t) {
      h('#' + u[0] + e)
        .find('iframe')
        .attr('src', t)
    }),
    (v.style = function (e, t, i) {
      var e = h('#' + u[0] + e);
          var n = e.find('.layui-layer-content');
          var a = e.attr('type');
          var o = e.find(u[1]).outerHeight() || 0;
          var s = e.find('.' + u[6]).outerHeight() || 0
      e.attr('minLeft')
      a !== f.type[3] &&
        a !== f.type[4] &&
        (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - o - s <= 64 && (t.height = 64 + o + s)),
        e.css(t),
        (s = e.find('.' + u[6]).outerHeight() || 0),
        a === f.type[2]
          ? e.find('iframe').css({ height: (typeof t.height == 'number' ? t.height : e.height()) - o - s })
          : n.css({ height: (typeof t.height == 'number' ? t.height : e.height()) - o - s - parseFloat(n.css('padding-top')) - parseFloat(n.css('padding-bottom')) }))
    }),
    (v.min = function (e, t) {
      var i;
          var n;
          var a;
          var o;
          var s;
          var r;
          var l = h('#' + u[0] + e);
          var c = l.data('maxminStatus')
      c !== 'min' &&
        (c === 'max' && v.restore(e),
        l.data('maxminStatus', 'min'),
        (t = t || l.data('config') || {}),
        (c = h('#' + u.SHADE + e)),
        (i = l.find('.layui-layer-min')),
        (n = l.find(u[1]).outerHeight() || 0),
        (o = (a = typeof (o = l.attr('minLeft')) == 'string') ? o : 181 * f.minStackIndex + 'px'),
        (s = l.css('position')),
        (r = { width: 180, height: n, position: 'fixed', overflow: 'hidden' }),
        f.record(l),
        f.minStackArr.length > 0 && ((o = f.minStackArr[0]), f.minStackArr.shift()),
        parseFloat(o) + 180 > g.width() && (o = g.width() - 180 - ((f.minStackArr.edgeIndex = f.minStackArr.edgeIndex || 0), (f.minStackArr.edgeIndex += 3))) < 0 && (o = 0),
        t.minStack && ((r.left = o), (r.top = g.height() - n), a || f.minStackIndex++, l.attr('minLeft', o)),
        l.attr('position', s),
        v.style(e, r, !0),
        i.hide(),
        l.attr('type') === 'page' && l.find(u[4]).hide(),
        f.restScrollbar(e),
        c.hide())
    }),
    (v.restore = function (e) {
      var t = h('#' + u[0] + e);
          var i = h('#' + u.SHADE + e);
          var n = t.find('.layui-layer-content');
          var a = t.attr('area').split(',');
          var o = t.attr('type');
          var s = t.data('config') || {};
          var r = n.data(l)
      t.removeData('maxminStatus'),
        v.style(e, { width: a[0], height: a[1], top: parseFloat(a[2]), left: parseFloat(a[3]), position: t.attr('position'), overflow: 'visible' }, !0),
        t.find('.layui-layer-max').removeClass('layui-layer-maxmin'),
        t.find('.layui-layer-min').show(),
        'page' === o && t.find(u[4]).show(),
        s.scrollbar ? f.restScrollbar(e) : f.setScrollbar(e),
        r !== m && (n.removeData(l), (o === f.type[2] ? n.children('iframe') : n).css({ height: r })),
        i.show()
    }),
    (v.full = function (t) {
      var i = h('#' + u[0] + t);
          var e = i.data('maxminStatus')
      'max' !== e &&
        (e === 'min' && v.restore(t),
        i.data('maxminStatus', 'max'),
        f.record(i),
        u.html.attr('layer-full') || f.setScrollbar(t),
        setTimeout(function () {
          var e = i.css('position') === 'fixed'
          v.style(t, { top: e ? 0 : g.scrollTop(), left: e ? 0 : g.scrollLeft(), width: '100%', height: '100%' }, !0), i.find('.layui-layer-min').hide()
        }, 100))
    }),
    (v.title = function (e, t) {
      h('#' + u[0] + (t || v.index))
        .find(u[1])
        .html(e)
    }),
    (v.close = function (s, r) {
      var e;
          var t;
          var l = (e = h('.' + u[0])
            .children('#' + s)
            .closest('.' + u[0]))[0]
            ? ((s = e.attr('times')), e)
            : h('#' + u[0] + s);
          var c = l.attr('type');
          var i = l.data('config') || {};
          var d = i.id && i.hideOnClose
      l[0] &&
        ((t = function () {
          var o =
              { slideDown: 'layer-anim-slide-down-out', slideLeft: 'layer-anim-slide-left-out', slideUp: 'layer-anim-slide-up-out', slideRight: 'layer-anim-slide-right-out' }[
                i.anim
              ] || 'layer-anim-close';
              var e = function () {
                var e = 'layui-layer-wrap'
                if (d) return l.removeClass('layer-anim ' + o), l.hide()
                if (c === f.type[1] && 'object' === l.attr('conType')) {
                  l.children(':not(.' + u[5] + ')').remove()
                  for (var t = l.find('.' + e), i = 0; i < 2; i++) t.unwrap()
                  t.css('display', t.data('display')).removeClass(e)
                } else {
                  if (c === f.type[2])
                    try {
                      var n = h('#' + u[4] + s)[0]
                      n.contentWindow.document.write(''), n.contentWindow.close(), l.find('.' + u[5])[0].removeChild(n)
                    } catch (a) {}
                  ;(l[0].innerHTML = ''), l.remove()
                }
                'function' == typeof f.end[s] && f.end[s](),
                  delete f.end[s],
                  'function' == typeof r && r(),
                  f.events.resize[s] && (g.off('resize', f.events.resize[s]), delete f.events.resize[s])
              };
              var t = h('#' + u.SHADE + s)
          ;(v.ie && v.ie < 10) || !i.isOutAnim
            ? t[d ? 'hide' : 'remove']()
            : (t.css({ opacity: 0 }),
              setTimeout(function () {
                t[d ? 'hide' : 'remove']()
              }, 350)),
            i.isOutAnim && l.addClass('layer-anim ' + o),
            6 == v.ie && f.reselect(),
            f.restScrollbar(s),
            'string' == typeof l.attr('minLeft') && (f.minStackIndex--, f.minStackArr.push(l.attr('minLeft'))),
            (v.ie && v.ie < 10) || !i.isOutAnim
              ? e()
              : setTimeout(function () {
                  e()
                }, 200)
        }),
        d || typeof f.beforeEnd[s] != 'function'
          ? (delete f.beforeEnd[s], t())
          : f.promiseLikeResolve(f.beforeEnd[s]()).then(
              function (e) {
                !1 !== e && (delete f.beforeEnd[s], t())
              },
              function (e) {
                e !== m && p.console && p.console.error('layer error hint: ' + e)
              }
            ))
    }),
    (v.closeAll = function (n, a) {
      typeof n == 'function' && ((a = n), (n = null))
      var o = h('.' + u[0])
      h.each(o, function (e) {
        var t = h(this);
            var i = n ? t.attr('type') === n : 1
        i && v.close(t.attr('times'), e === o.length - 1 ? a : null)
      }),
        o.length === 0 && typeof a == 'function' && a()
    }),
    (v.closeLast = function (i, e) {
      var t;
          var n = [];
          var a = h.isArray(i)
      h(typeof i == 'string' ? '.layui-layer-' + i : '.layui-layer').each(function (e, t) {
        t = h(t)
        if ((a && i.indexOf(t.attr('type')) === -1) || t.css('display') === 'none') return !0
        n.push(Number(t.attr('times')))
      }),
        0 < n.length && ((t = Math.max.apply(null, n)), v.close(t, e))
    }),
    v.cache || {})
  var x = function (e) {
    return i.skin ? ' ' + i.skin + ' ' + i.skin + '-' + e : ''
  }
  ;(v.prompt = function (i, n) {
    var e = ''
    var t = ''
    typeof (i = i || {}) == 'function' && (n = i),
      i.area && ((e = 'style="width: ' + (o = i.area)[0] + '; height: ' + o[1] + ';"'), delete i.area),
      i.placeholder && (t = ' placeholder="' + i.placeholder + '"')
    var a
    var o =
      i.formType == 2
        ? '<textarea class="layui-layer-input"' + e + t + '></textarea>'
        : '<input type="' + (1 == i.formType ? 'password' : 'text') + '" class="layui-layer-input"' + t + '>'
    var s = i.success
    return (
      delete i.success,
      v.open(
        h.extend(
          {
            type: 1,
            btn: ['\u786e\u5b9a', '\u53d6\u6d88'],
            content: o,
            skin: 'layui-layer-prompt' + x('prompt'),
            maxWidth: g.width(),
            success: function (e) {
              ;(a = e.find('.layui-layer-input')).val(i.value || '').focus(), typeof s == 'function' && s(e)
            },
            resize: !1,
            yes: function (e) {
              var t = a.val()
              t.length > (i.maxlength || 500) ? v.tips('\u6700\u591a\u8f93\u5165' + (i.maxlength || 500) + '\u4e2a\u5b57\u7b26', a, { tips: 1 }) : n && n(t, e, a)
            }
          },
          i
        )
      )
    )
  }),
    (v.tab = function (n) {
      var a = (n = n || {}).tab || {}
      var o = 'layui-this'
      var s = n.success
      return (
        delete n.success,
        v.open(
          h.extend(
            {
              type: 1,
              skin: 'layui-layer-tab' + x('tab'),
              resize: !1,
              title: (function () {
                var e = a.length
                var t = 1
                var i = ''
                if (e > 0) for (i = '<span class="' + o + '">' + a[0].title + '</span>'; t < e; t++) i += '<span>' + a[t].title + '</span>'
                return i
              })(),
              content:
                '<ul class="layui-layer-tabmain">' +
                (function () {
                  var e = a.length
                  var t = 1
                  var i = ''
                  if (e > 0) {
                    for (i = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content || 'no content') + '</li>'; t < e; t++)
                      {i += '<li class="layui-layer-tabli">' + (a[t].content || 'no  content') + '</li>'}}
                  return i
                })() +
                '</ul>',
              success: function (e) {
                var t = e.find('.layui-layer-title').children()
                var i = e.find('.layui-layer-tabmain').children()
                t.on('mousedown', function (e) {
                  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
                  var e = h(this)
                  var t = e.index()
                  e.addClass(o).siblings().removeClass(o), i.eq(t).show().siblings().hide(), typeof n.change == 'function' && n.change(t)
                }),
                  typeof s == 'function' && s(e)
              }
            },
            n
          )
        )
      )
    }),
    (v.photos = function (n, e, a) {
      var s = {}
      if ((n = h.extend(!0, { toolbar: !0, footer: !0 }, n)).photos) {
        var t = !(typeof n.photos == 'string' || n.photos instanceof h)
        var i = t ? n.photos : {}
        var o = i.data || []
        var r = i.start || 0
        var l = n.success
        if (((s.imgIndex = 1 + (0 | r)), (n.img = n.img || 'img'), delete n.success, t)) {
          if (o.length === 0) return v.msg('\u6ca1\u6709\u56fe\u7247')
        } else {
          var c = h(n.photos)
          var d = function () {
            ;(o = []),
              c.find(n.img).each(function (e) {
                var t = h(this)
                t.attr('layer-index', e),
                  o.push({ alt: t.attr('alt'), pid: t.attr('layer-pid'), src: t.attr('lay-src') || t.attr('layer-src') || t.attr('src'), thumb: t.attr('src') })
              })
          }
          if ((d(), o.length === 0)) return
          if (
            (e ||
              c.on('click', n.img, function () {
                d()
                var e = h(this).attr('layer-index')
                v.photos(h.extend(n, { photos: { start: e, data: o, tab: n.tab }, full: n.full }), !0)
              }),
            !e)
          ) {
            return
          }
        }
        ;(s.imgprev = function (e) {
          s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = o.length), s.tabimg(e)
        }),
          (s.imgnext = function (e, t) {
            s.imgIndex++, (s.imgIndex > o.length && ((s.imgIndex = 1), t)) || s.tabimg(e)
          }),
          (s.keyup = function (e) {
            var t
            s.end || ((t = e.keyCode), e.preventDefault(), t === 37 ? s.imgprev(!0) : t === 39 ? s.imgnext(!0) : t === 27 && v.close(s.index))
          }),
          (s.tabimg = function (e) {
            if (!(o.length <= 1)) return (i.start = s.imgIndex - 1), v.close(s.index), v.photos(n, !0, e)
          }),
          (s.isNumber = function (e) {
            return typeof e == 'number' && !isNaN(e)
          }),
          (s.image = {}),
          (s.getTransform = function (e) {
            var t = []
            var i = e.rotate
            var n = e.scaleX
            var e = e.scale
            return (
              s.isNumber(i) && i !== 0 && t.push('rotate(' + i + 'deg)'),
              s.isNumber(n) && n !== 1 && t.push('scaleX(' + n + ')'),
              s.isNumber(e) && t.push('scale(' + e + ')'),
              t.length ? t.join(' ') : 'none'
            )
          }),
          (s.event = function (e, i, n) {
            var a, o
            s.main.find('.layui-layer-photos-prev').on('click', function (e) {
              e.preventDefault(), s.imgprev(!0)
            }),
              s.main.find('.layui-layer-photos-next').on('click', function (e) {
                e.preventDefault(), s.imgnext(!0)
              }),
              h(document).on('keyup', s.keyup),
              e.off('click').on('click', '*[toolbar-event]', function () {
                var e = h(this)
                switch (e.attr('toolbar-event')) {
                  case 'rotate':
                    ;(s.image.rotate = ((s.image.rotate || 0) + Number(e.attr('data-option'))) % 360), s.imgElem.css({ transform: s.getTransform(s.image) })
                    break
                  case 'scalex':
                    ;(s.image.scaleX = s.image.scaleX === -1 ? 1 : -1), s.imgElem.css({ transform: s.getTransform(s.image) })
                    break
                  case 'zoom':
                    var t = Number(e.attr('data-option'))
                    ;(s.image.scale = (s.image.scale || 1) + t), t < 0 && s.image.scale < 0 - t && (s.image.scale = 0 - t), s.imgElem.css({ transform: s.getTransform(s.image) })
                    break
                  case 'reset':
                    ;(s.image.scaleX = 1), (s.image.scale = 1), (s.image.rotate = 0), s.imgElem.css({ transform: 'none' })
                    break
                  case 'close':
                    v.close(i)
                }
                n.offset(), n.auto(i)
              }),
              s.main.on('mousewheel DOMMouseScroll', function (e) {
                var t = e.originalEvent.wheelDelta || -e.originalEvent.detail
                var i = s.main.find('[toolbar-event="zoom"]')
                ;(t > 0 ? i.eq(0) : i.eq(1)).trigger('click'), e.preventDefault()
              }),
              (p.layui || p.lay) &&
                ((a = p.layui.lay || p.lay),
                (o = function (e, t) {
                  var i = Date.now() - t.timeStart
                  var i = t.distanceX / i
                  var n = g.width() / 3
                  ;(Math.abs(i) > 0.25 || Math.abs(t.distanceX) > n) && (t.direction === 'left' ? s.imgnext(!0) : t.direction === 'right' && s.imgprev(!0))
                }),
                h.each([n.shadeo, s.main], function (e, t) {
                  a.touchSwipe(t, { onTouchEnd: o })
                }))
          }),
          (s.loadi = v.load(1, { shade: !('shade' in n) && [0.9, m, 'unset'], scrollbar: !1 }))
        var t = o[r].src
        var f = function (e) {
          v.close(s.loadi)
          var t;
              var i = o[r].alt || ''
          a && (n.anim = -1),
            (s.index = v.open(
              h.extend(
                {
                  type: 1,
                  id: 'layui-layer-photos',
                  area:
                    ((e = [e.width, e.height]),
                    (t = [h(p).width() - 100, h(p).height() - 100]),
                    !n.full &&
                      (t[0] < e[0] || t[1] < e[1]) &&
                      ((t = [e[0] / t[0], e[1] / t[1]])[1] < t[0] ? ((e[0] = e[0] / t[0]), (e[1] = e[1] / t[0])) : t[0] < t[1] && ((e[0] = e[0] / t[1]), (e[1] = e[1] / t[1]))),
                    [e[0] + 'px', e[1] + 'px']),
                  title: !1,
                  shade: [0.9, m, 'unset'],
                  shadeClose: !0,
                  closeBtn: !1,
                  move: '.layer-layer-photos-main img',
                  moveType: 1,
                  scrollbar: !1,
                  moveOut: !0,
                  anim: 5,
                  isOutAnim: !1,
                  skin: 'layui-layer-photos' + x('photos'),
                  content:
                    '<div class="layer-layer-photos-main"><img src="' +
                    o[r].src +
                    '" alt="' +
                    i +
                    '" layer-pid="' +
                    (o[r].pid || '') +
                    '">' +
                    ((t = ['<div class="layui-layer-photos-pointer">']),
                    1 < o.length &&
                      t.push(
                        [
                          '<div class="layer-layer-photos-page">',
                          '<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>',
                          '<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>',
                          '</div>'
                        ].join('')
                      ),
                    n.toolbar &&
                      t.push(
                        [
                          '<div class="layui-layer-photos-toolbar layui-layer-photos-header">',
                          '<span toolbar-event="rotate" data-option="90" title="\u65cb\u8f6c"><i class="layui-icon layui-icon-refresh"></i></span>',
                          '<span toolbar-event="scalex" title="\u53d8\u6362"><i class="layui-icon layui-icon-slider"></i></span>',
                          '<span toolbar-event="zoom" data-option="0.1" title="\u653e\u5927"><i class="layui-icon layui-icon-add-circle"></i></span>',
                          '<span toolbar-event="zoom" data-option="-0.1" title="\u7f29\u5c0f"><i class="layui-icon layui-icon-reduce-circle"></i></span>',
                          '<span toolbar-event="reset" title="\u8fd8\u539f"><i class="layui-icon layui-icon-refresh-1"></i></span>',
                          '<span toolbar-event="close" title="\u5173\u95ed"><i class="layui-icon layui-icon-close"></i></span>',
                          '</div>'
                        ].join('')
                      ),
                    n.footer &&
                      t.push(
                        [
                          '<div class="layui-layer-photos-toolbar layui-layer-photos-footer">',
                          '<h3>' + i + '</h3>',
                          '<em>' + s.imgIndex + ' / ' + o.length + '</em>',
                          '<a href="' + o[r].src + '" target="_blank">\u67e5\u770b\u539f\u56fe</a>',
                          '</div>'
                        ].join('')
                      ),
                    t.push('</div>'),
                    t.join('')) +
                    '</div>',
                  success: function (e, t, i) {
                    ;(s.main = e.find('.layer-layer-photos-main')),
                      (s.footer = e.find('.layui-layer-photos-footer')),
                      (s.imgElem = s.main.children('img')),
                      s.event(e, t, i),
                      n.tab && n.tab(o[r], e),
                      typeof l == 'function' && l(e)
                  },
                  end: function () {
                    ;(s.end = !0), h(document).off('keyup', s.keyup)
                  }
                },
                n
              )
            ))
        }
        var u = function () {
          v.close(s.loadi),
            v.msg('\u5f53\u524d\u56fe\u7247\u5730\u5740\u5f02\u5e38\uff0c<br>\u662f\u5426\u7ee7\u7eed\u67e5\u770b\u4e0b\u4e00\u5f20\uff1f', {
              time: 3e4,
              btn: ['\u4e0b\u4e00\u5f20', '\u4e0d\u770b\u4e86'],
              yes: function () {
                1 < o.length && s.imgnext(!0, !0)
              }
            })
        }
        var y = new Image()
        ;((y.src = t), y.complete)
          ? f(y)
          : ((y.onload = function () {
              ;(y.onload = null), f(y)
            }),
            (y.onerror = function (e) {
              ;(y.onerror = null), u(e)
            }))
      }
    }),
    (f.run = function (e) {
      g = (h = e)(p)
      var e = navigator.userAgent.toLowerCase()
      var e = /android|iphone|ipod|ipad|ios/.test(e)
      var n = h(p)
      e &&
        h.each({ Height: 'height', Width: 'width' }, function (e, t) {
          var i = 'inner' + e
          g[t] = function () {
            return i in p ? p[i] : n[t]()
          }
        }),
        (u.html = h('html')),
        (v.open = function (e) {
          return new t(e).index
        })
    }),
    p.layui && layui.define
      ? (v.ready(),
        layui.define(['jquery', 'lay'], function (e) {
          ;(v.path = layui.cache.dir), f.run(layui.$), e('layer', (p.layer = v))
        }))
      : typeof define == 'function' && define.amd
      ? define(['jquery'], function () {
          return f.run(p.jQuery), v
        })
      : (v.ready(), f.run(p.jQuery))
})(window)
layui.define('jquery', function (t) {
  'use strict'
  var s = layui.$
  var p = layui.hint()
  var e = {
    fixbar: function (i) {
      var o
      var t
      var e
      var n
      var r = 'layui-fixbar'
      var a = s(document)
      var c = ((i = s.extend(!0, { target: 'body', bars: [], default: !0, margin: 160, duration: 320 }, i)), s(i.target))
      var u = i.scroll ? s(i.scroll) : s('body' === i.target ? a : c)
      var l =
        (i['default'] &&
          (i.bar1 && i.bars.push({ type: 'bar1', icon: 'layui-icon-chat' }),
          i.bar2 && i.bars.push({ type: 'bar2', icon: 'layui-icon-help' }),
          i.bars.push({ type: 'top', icon: 'layui-icon-top' })),
        s('<ul>').addClass(r))
      layui.each(i.bars, function (t, e) {
        var n = s('<li class="layui-icon">')
        n
          .addClass(e.icon)
          .attr({ 'lay-type': e.type, style: e.style || (i.bgcolor ? 'background-color: ' + i.bgcolor : '') })
          .html(e.content),
          n.on('click', function () {
            var t = s(this).attr('lay-type')
            t === 'top' && (i.target === 'body' ? s('html,body') : u).animate({ scrollTop: 0 }, i.duration), typeof i.click == 'function' && i.click.call(this, t)
          }),
          layui.type(i.on) === 'object' &&
            layui.each(i.on, function (t, e) {
              n.on(t, function () {
                var t = s(this).attr('lay-type')
                typeof e == 'function' && e.call(this, t)
              })
            }),
          e.type === 'top' && (n.addClass('layui-fixbar-top'), (o = n)),
          l.append(n)
      }),
        c.find('.' + r).remove(),
        typeof i.css == 'object' && l.css(i.css),
        c.append(l),
        o &&
          (e = (function e() {
            return u.scrollTop() >= i.margin ? t || (o.show(), (t = 1)) : t && (o.hide(), (t = 0)), e
          })()),
        u.on('scroll', function () {
          e &&
            (clearTimeout(n),
            (n = setTimeout(function () {
              e()
            }, 100)))
        })
    },
    countdown: function (i) {
      i = s.extend(!0, { date: new Date(), now: new Date() }, i)
      var o = arguments
      var r =
        (o.length > 1 && ((i.date = new Date(o[0])), (i.now = new Date(o[1])), (i.clock = o[2])),
        {
          options: i,
          clear: function () {
            clearTimeout(r.timer)
          },
          reload: function (t) {
            this.clear(), s.extend(!0, this.options, { now: new Date() }, t), a()
          }
        })
      var a =
        (typeof i.ready == 'function' && i.ready(),
        (function c() {
          var t = new Date(i.date)
          var e = new Date(i.now)
          var t = 0 < (t = t.getTime() - e.getTime()) ? t : 0
          var n = { d: Math.floor(t / 864e5), h: Math.floor(t / 36e5) % 24, m: Math.floor(t / 6e4) % 60, s: Math.floor(t / 1e3) % 60 }
          return (
            o.length > 1 && (n = [n.d, n.h, n.m, n.s]),
            (r.timer = setTimeout(function () {
              e.setTime(e.getTime() + 1e3), (i.now = e), a()
            }, 1e3)),
            typeof i.clock == 'function' && i.clock(n, r),
            t <= 0 && (clearTimeout(r.timer), typeof i.done == 'function') && i.done(n, r),
            c
          )
        })())
      return r
    },
    timeAgo: function (t, e) {
      var n = this
      var i = [[], []]
      var o = new Date().getTime() - new Date(t).getTime()
      return o > 26784e5
        ? ((o = new Date(t)),
          (i[0][0] = n.digit(o.getFullYear(), 4)),
          (i[0][1] = n.digit(o.getMonth() + 1)),
          (i[0][2] = n.digit(o.getDate())),
          e || ((i[1][0] = n.digit(o.getHours())), (i[1][1] = n.digit(o.getMinutes())), (i[1][2] = n.digit(o.getSeconds()))),
          i[0].join('-') + ' ' + i[1].join(':'))
        : o >= 864e5
        ? ((o / 1e3 / 60 / 60 / 24) | 0) + ' \u5929\u524d'
        : o >= 36e5
        ? ((o / 1e3 / 60 / 60) | 0) + ' \u5c0f\u65f6\u524d'
        : o >= 18e4
        ? ((o / 1e3 / 60) | 0) + ' \u5206\u949f\u524d'
        : o < 0
        ? '\u672a\u6765'
        : '\u521a\u521a'
    },
    digit: function (t, e) {
      var n = ''
      e = e || 2
      for (var i = (t = String(t)).length; i < e; i++) n += '0'
      return t < Math.pow(10, e) ? n + (0 | t) : t
    },
    toDateString: function (t, e, n) {
      var i, o, r, a, c, u, l, s, g, f, d
      return t === null || t === ''
        ? ''
        : ((i = this),
          (o = new Date(
            (function () {
              if (t) return !isNaN(t) && typeof t == 'string' ? parseInt(t) : t
            })() || new Date()
          )).getDate()
            ? ((r = o.getFullYear()),
              (a = o.getMonth()),
              (c = o.getDate()),
              (u = o.getHours()),
              (l = o.getMinutes()),
              (s = o.getSeconds()),
              (g = o.getMilliseconds()),
              (f =
                (n && n.customMeridiem) ||
                function (t, e) {
                  t = 100 * t + e
                  return t < 600 ? '\u51cc\u6668' : t < 900 ? '\u65e9\u4e0a' : t < 1100 ? '\u4e0a\u5348' : t < 1300 ? '\u4e2d\u5348' : t < 1800 ? '\u4e0b\u5348' : '\u665a\u4e0a'
                }),
              (d = {
                yy: function () {
                  return String(r).slice(-2)
                },
                yyyy: function () {
                  return i.digit(r, 4)
                },
                M: function () {
                  return String(a + 1)
                },
                MM: function () {
                  return i.digit(a + 1)
                },
                d: function () {
                  return String(c)
                },
                dd: function () {
                  return i.digit(c)
                },
                H: function () {
                  return String(u)
                },
                HH: function () {
                  return i.digit(u)
                },
                h: function () {
                  return String(u % 12 || 12)
                },
                hh: function () {
                  return i.digit(u % 12 || 12)
                },
                A: function () {
                  return f(u, l)
                },
                m: function () {
                  return String(l)
                },
                mm: function () {
                  return i.digit(l)
                },
                s: function () {
                  return String(s)
                },
                ss: function () {
                  return i.digit(s)
                },
                SSS: function () {
                  return i.digit(g, 3)
                }
              }),
              (e = e || 'yyyy-MM-dd HH:mm:ss').replace(/\[([^\]]+)]|y{1,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|SSS/g, function (t, e) {
                return e || (d[t] && d[t]()) || t
              }))
            : (p.error('Invalid millisecond for "util.toDateString(millisecond)"'), ''))
    },
    escape: function (t) {
      return t === undefined || t === null
        ? ''
        : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test((t += ''))
        ? t
            .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
        : t
    },
    unescape: function (t) {
      return (
        (t !== undefined && t !== null) || (t = ''),
        (t += '')
          .replace(/\&amp;/g, '&')
          .replace(/\&lt;/g, '<')
          .replace(/\&gt;/g, '>')
          .replace(/\&#39;/g, "'")
          .replace(/\&quot;/g, '"')
      )
    },
    openWin: function (t) {
      var e = (t = t || {}).window || window.open(t.url || '', t.target, t.specs)
      t.url || (e.document.open('text/html', 'replace'), e.document.write(t.content || ''), e.document.close())
    },
    toVisibleArea: function (t) {
      var e, n, i, o, r, a, c, u
      ;(t = s.extend({ margin: 160, duration: 200, type: 'y' }, t)).scrollElem[0] &&
        t.thisElem[0] &&
        ((e = t.scrollElem),
        (c = t.thisElem),
        (i = (r = t.type === 'y') ? 'top' : 'left'),
        (o = e[(n = r ? 'scrollTop' : 'scrollLeft')]()),
        (r = e[r ? 'height' : 'width']()),
        (a = e.offset()[i]),
        (u = {}),
        (c = c.offset()[i] - a) > r - t.margin || c < t.margin) &&
        ((u[n] = c - r / 2 + o), e.animate(u, t.duration))
    },
    on: function (i, o, t) {
      typeof i == 'object' && ((t = o || {}), (o = i), (i = t.attr || 'lay-on'))
      var e
      var n = ((t = s.extend({ elem: 'body', trigger: 'click' }, 'object' == typeof t ? t : { trigger: t })).elem = s(t.elem))
      var r = '[' + i + ']'
      var a = 'UTIL_ON_DATA'
      if (n[0]) {
        return (
          n.data(a) || n.data(a, { events: {}, callbacks: {} }),
          (e = (a = n.data(a)).callbacks),
          (o = a.events[i] = s.extend(!0, a.events[i], o)),
          n.off(t.trigger, r, e[i]),
          n.on(
            t.trigger,
            r,
            (e[i] = function (t) {
              var e = s(this);
                  var n = e.attr(i)
              typeof o[n] == 'function' && o[n].call(this, e, t)
            })
          ),
          o
        )
      }
    }
  }
  ;(e.event = e.on), t('util', e)
})
layui.define(['jquery', 'laytpl', 'lay', 'util'], function (e) {
  'use strict'
  var n
  var i
  var t
  var c = layui.$
  var m = layui.laytpl
  var p = layui.util
  var l = layui.hint()
  var o = layui.device().mobile ? 'touchstart' : 'mousedown'
  var r = 'dropdown'
  var y = 'layui_' + r + '_index'
  var f = 'lay-' + r + '-id'
  var h = {
    config: { customName: { id: 'id', title: 'title', children: 'child' } },
    index: layui[r] ? layui[r].index + 1e4 : 0,
    set: function (e) {
      var i = this
      return (i.config = c.extend({}, i.config, e)), i
    },
    on: function (e, i) {
      return layui.onevent.call(this, r, e, i)
    }
  }
  var g = function () {
    var i = this;
        var e = i.config;
        var t = e.id
    return (
      (g.that[t] = i),
      {
        config: e,
        reload: function (e) {
          i.reload.call(i, e)
        },
        reloadData: function (e) {
          h.reloadData(t, e)
        },
        close: function () {
          i.remove()
        },
        open: function () {
          i.render()
        }
      }
    )
  }
  var v = 'layui-dropdown'
  var a = 'layui-menu-item-up'
  var d = 'layui-menu-item-down'
  var w = 'layui-menu-body-title'
  var s = 'layui-menu-item-group'
  var V = 'layui-menu-item-parent'
  var u = 'layui-menu-item-checked'
  var C = 'layui-menu-item-checked2'
  var x = 'layui-menu-body-panel'
  var b = 'layui-menu-body-panel-left'
  var k = 'layui-dropdown-shade'
  var T = '.' + s + '>.' + w
  var E = function (e) {
    var i = this
    ;(i.index = ++h.index), (i.config = c.extend({}, i.config, h.config, e)), i.init()
  }
  ;(E.prototype.config = {
    trigger: 'click',
    content: '',
    className: '',
    style: '',
    show: !1,
    isAllowSpread: !0,
    isSpreadItem: !0,
    data: [],
    delay: [200, 300],
    shade: 0,
    accordion: !1
  }),
    (E.prototype.reload = function (e, i) {
      var t = this
      ;(t.config = c.extend({}, t.config, e)), t.init(!0, i)
    }),
    (E.prototype.init = function (e, i) {
      var t
      var n = this
      var l = n.config
      var a = c(l.elem)
      return a.length > 1
        ? (layui.each(a, function () {
            h.render(c.extend({}, l, { elem: this }))
          }),
          n)
        : (c.extend(l, lay.options(a[0])),
          !e && a[0] && a.attr(f)
            ? (t = g.getThis(a.attr(f)))
              ? t.reload(l, i)
              : void 0
            : ((l.elem = c(l.elem)),
              (l.id = 'id' in l ? l.id : a.attr('id') || n.index),
              a.attr(f, l.id),
              (l.customName = c.extend({}, h.config.customName, l.customName)),
              (l.show || (i === 'reloadData' && n.elemView && c('body').find(n.elemView.get(0)).length)) && n.render(e, i),
              void n.events()))
    }),
    (E.prototype.render = function (e, i) {
      var a = this
      var d = a.config
      var s = d.customName
      var t = c('body')
      var n = function () {
        var e = c('<ul class="layui-menu layui-dropdown-menu"></ul>')
        return d.data.length > 0 ? u(e, d.data) : e.html('<li class="layui-menu-item-none">\u6682\u65e0\u6570\u636e</li>'), e
      }
      var u = function (r, e) {
        return (
          layui.each(e, function (e, i) {
            var t;
                var n = i[s.children] && 0 < i[s.children].length;
                var l = ('isSpreadItem' in i ? i : d).isSpreadItem;
                var a = ((o = p.escape(i[s.title])), (a = i.templet || d.templet), (o = a ? ('function' == typeof a ? a(i) : m(a).render(i)) : o));
                var o = (n && (i.type = i.type || 'parent'), i.type ? { group: 'group', parent: 'parent', '-': '-' }[i.type] || 'parent' : '')
            ;(o === '-' || i[s.title] || i[s.id] || n) &&
              ((a = c(
                [
                  '<li' +
                    ((t = {
                      group: 'layui-menu-item-group' + (d.isAllowSpread ? (l ? ' layui-menu-item-down' : ' layui-menu-item-up') : ''),
                      parent: V,
                      '-': 'layui-menu-item-divider'
                    }),
                    n || o ? ' class="' + t[o] + '"' : i.disabled ? ' class="layui-disabled"' : '') +
                    '>',
                  ((t = 'href' in i ? '<a href="' + i.href + '" target="' + (i.target || '_self') + '">' + a + '</a>' : a),
                  n
                    ? '<div class="' +
                      w +
                      '">' +
                      t +
                      (o === 'parent'
                        ? '<i class="layui-icon layui-icon-right"></i>'
                        : o === 'group' && d.isAllowSpread
                        ? '<i class="layui-icon layui-icon-' + (l ? 'up' : 'down') + '"></i>'
                        : '') +
                      '</div>'
                    : '<div class="' + w + '">' + t + '</div>'),
                  '</li>'
                ].join('')
              )).data('item', i),
              n &&
                ((l = c('<div class="layui-panel layui-menu-body-panel"></div>')),
                (t = c('<ul></ul>')),
                'parent' === o ? (l.append(u(t, i[s.children])), a.append(l)) : a.append(u(t, i[s.children]))),
              r.append(a))
          }),
          r
        )
      }
      var l = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit" ' + f + '="' + d.id + '">', '</div>'].join('')
      ;(!(e = d.trigger !== 'contextmenu' && !lay.isTopElem(d.elem[0]) ? e : !0) && d.elem.data(y + '_opened')) ||
        ((a.elemView = c('.' + v + '[' + f + '="' + d.id + '"]')),
        i === 'reloadData' && a.elemView.length
          ? a.elemView.html(d.content || n())
          : ((a.elemView = c(l)),
            a.elemView.append(d.content || n()),
            d.className && a.elemView.addClass(d.className),
            d.style && a.elemView.attr('style', d.style),
            (h.thisId = d.id),
            a.remove(),
            t.append(a.elemView),
            d.elem.data(y + '_opened', !0),
            (e = d.shade
              ? '<div class="' +
                k +
                '" style="z-index:' +
                (a.elemView.css('z-index') - 1) +
                '; background-color: ' +
                (d.shade[1] || '#000') +
                '; opacity: ' +
                (d.shade[0] || d.shade) +
                '"></div>'
              : ''),
            a.elemView.before(e),
            d.trigger === 'mouseenter' &&
              a.elemView
                .on('mouseenter', function () {
                  clearTimeout(g.timer)
                })
                .on('mouseleave', function () {
                  a.delayRemove()
                })),
        a.position(),
        (g.prevElem = a.elemView).data('prevElem', d.elem),
        a.elemView.find('.layui-menu').on(o, function (e) {
          layui.stope(e)
        }),
        a.elemView.find('.layui-menu li').on('click', function (e) {
          var i = c(this)
          var t = i.data('item') || {}
          var n = t[s.children] && 0 < t[s.children].length
          var l = d.clickScope === 'all'
          t.disabled || (n && !l) || t.type === '-' || (!1 === (typeof d.click == 'function' ? d.click(t, i) : null) || n || a.remove(), layui.stope(e))
        }),
        a.elemView.find(T).on('click', function (e) {
          var i = c(this).parent()(i.data('item') || {}).type === 'group' && d.isAllowSpread && g.spread(i, d.accordion)
        }),
        typeof d.ready == 'function' && d.ready(a.elemView, d.elem))
    }),
    (E.prototype.position = function (e) {
      var i = this.config
      lay.position(i.elem[0], this.elemView[0], { position: i.position, e: this.e, clickType: i.trigger === 'contextmenu' ? 'right' : null, align: i.align || null })
    }),
    (E.prototype.remove = function () {
      this.config
      var e
      var i
      var t
      var n = g.prevElem
      n &&
        ((i = n.attr(f)), (e = n.data('prevElem')), (t = (i = g.getThis(i)).config.close), e && e.data(y + '_opened', !1), n.remove(), delete g.prevElem, typeof t == 'function') &&
        t.call(i.config, e),
        lay('.' + k).remove()
    }),
    (E.prototype.normalizedDelay = function () {
      var e = this.config
      var e = [].concat(e.delay)
      return { show: e[0], hide: e[1] !== undefined ? e[1] : e[0] }
    }),
    (E.prototype.delayRemove = function () {
      var e = this
      e.config
      clearTimeout(g.timer),
        (g.timer = setTimeout(function () {
          e.remove()
        }, e.normalizedDelay().hide))
    }),
    (E.prototype.events = function () {
      var i = this
      var e = i.config
      var t = (e.trigger === 'hover' && (e.trigger = 'mouseenter'), i.prevElem && i.prevElem.off(e.trigger, i.prevElemCallback), e.trigger === 'mouseenter')
      ;(i.prevElem = e.elem),
        (i.prevElemCallback = function (e) {
          clearTimeout(g.timer),
            (i.e = e),
            t
              ? (g.timer = setTimeout(function () {
                  i.render()
                }, i.normalizedDelay().show))
              : i.render(),
            e.preventDefault()
        }),
        e.elem.on(e.trigger, i.prevElemCallback),
        t &&
          e.elem.on('mouseleave', function () {
            i.delayRemove()
          })
    }),
    (g.that = {}),
    (g.getThis = function (e) {
      var i = g.that[e]
      return i || l.error(e ? r + " instance with ID '" + e + "' not found" : 'ID argument required'), i
    }),
    (g.spread = function (e, i) {
      var t = e.children('ul')
      var n = e.hasClass(a)
      var l = function () {
        c(this).css({ display: '' })
      }
      t.is(':animated') ||
        (n ? (e.removeClass(a).addClass(d), t.hide().stop().slideDown(200, l)) : (t.stop().slideUp(200, l), e.removeClass(d).addClass(a)),
        n && i && ((t = e.siblings('.' + d)).children('ul').stop().slideUp(200, l), t.removeClass(d).addClass(a)))
    }),
    (n = c(window)),
    (i = c(document)),
    n.on('resize', function () {
      if (h.thisId) {
        var e = g.getThis(h.thisId)
        if (e) return !((e.elemView && !e.elemView[0]) || !c('.' + v)[0]) && void (e.config.trigger === 'contextmenu' ? e.remove() : e.position())
      }
    }),
    i.on(o, function (e) {
      var i, t
      h.thisId &&
        (i = g.getThis(h.thisId)) &&
        ((t = i.config),
        (!lay.isTopElem(t.elem[0]) &&
          t.trigger !== 'contextmenu' &&
          (e.target === t.elem[0] || t.elem.find(e.target)[0] || (i.elemView && e.target === i.elemView[0]) || (i.elemView && i.elemView.find(e.target)[0]))) ||
          i.remove())
    }),
    (t = '.layui-menu:not(.layui-dropdown-menu) li'),
    i.on('click', t, function (e) {
      var i = c(this)
      var t = i.parents('.layui-menu').eq(0)
      var n = i.hasClass(s) || i.hasClass(V)
      var l = t.attr('lay-filter') || t.attr('id')
      var a = lay.options(this)
      i.hasClass('layui-menu-item-divider') ||
        n ||
        (t.find('.' + u).removeClass(u),
        t.find('.' + C).removeClass(C),
        i.addClass(u),
        i.parents('.' + V).addClass(C),
        (a.title = a.title || c.trim(i.children('.' + w).text())),
        layui.event.call(this, r, 'click(' + l + ')', a))
    }),
    i.on('click', t + T, function (e) {
      var i = c(this)
      var t = i.parents('.' + s + ':eq(0)')
      var n = lay.options(t[0])
      var i = typeof i.parents('.layui-menu').eq(0).attr('lay-accordion') == 'string'
      ;('isAllowSpread' in n && !n.isAllowSpread) || g.spread(t, i)
    }),
    (t = '.layui-menu .' + V),
    i
      .on('mouseenter', t, function (e) {
        var i
        var t = c(this).find('.' + x)
        t[0] &&
          ((i = t[0].getBoundingClientRect()).right > n.width() && (t.addClass(b), (i = t[0].getBoundingClientRect()).left < 0) && t.removeClass(b), i.bottom > n.height()) &&
          t.eq(0).css('margin-top', -(i.bottom - n.height() + 5))
      })
      .on('mouseleave', t, function (e) {
        var i = c(this).children('.' + x)
        i.removeClass(b), i.css('margin-top', 0)
      }),
    (h.close = function (e) {
      e = g.getThis(e)
      return e ? (e.remove(), g.call(e)) : this
    }),
    (h.open = function (e) {
      e = g.getThis(e)
      return e ? (e.render(), g.call(e)) : this
    }),
    (h.reload = function (e, i, t) {
      e = g.getThis(e)
      return e ? (e.reload(i, t), g.call(e)) : this
    }),
    (h.reloadData = function () {
      var t = c.extend([], arguments)
      var n = ((t[2] = 'reloadData'), new RegExp('^(' + ['data', 'templet', 'content'].join('|') + ')$'))
      return (
        layui.each(t[1], function (e, i) {
          n.test(e) || delete t[1][e]
        }),
        h.reload.apply(null, t)
      )
    }),
    (h.render = function (e) {
      e = new E(e)
      return g.call(e)
    }),
    e(r, h)
})
layui.define(['jquery', 'lay'], function (e) {
  'use strict'
  var x = layui.$
  var b = layui.lay
  var m = {
    config: {},
    index: layui.slider ? layui.slider.index + 1e4 : 0,
    set: function (e) {
      var t = this
      return (t.config = x.extend({}, t.config, e)), t
    },
    on: function (e, t) {
      return layui.onevent.call(this, i, e, t)
    }
  }
  var i = 'slider'
  var f = 'layui-disabled'
  var T = 'layui-slider-bar'
  var w = 'layui-slider-wrap'
  var M = 'layui-slider-wrap-btn'
  var L = 'layui-slider-tips'
  var E = 'layui-slider-input-txt'
  var Y = 'layui-slider-hover'
  var t = function (e) {
    var t = this
    ;(t.index = ++m.index), (t.config = x.extend({}, t.config, m.config, e)), t.render()
  }
  ;(t.prototype.config = {
    type: 'default',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    showstep: !1,
    tips: !0,
    tipsAlways: !1,
    input: !1,
    range: !1,
    height: 200,
    disabled: !1,
    theme: '#16baaa'
  }),
    (t.prototype.precision = function () {
      var e = this.config
      var e = x.map([e.min, e.max, e.step], function (e, t) {
        e = String(e).split('.')
        return e[1] ? e[1].length : 0
      })
      return Math.max.apply(null, e)
    }),
    (t.prototype.render = function () {
      var n = this
      var a = n.config
      var e = x(a.elem)
      if (e.length > 1) {
        return (
          layui.each(e, function () {
            m.render(x.extend({}, a, { elem: this }))
          }),
          n
        )
      }
      x.extend(a, b.options(e[0])),
        a.step <= 0 && (a.step = 1),
        a.max < a.min && (a.max = a.min + a.step),
        a.range
          ? ((a.value = typeof a.value == 'object' ? a.value : [a.min, a.value]),
            (e = Math.min(a.value[0], a.value[1])),
            (i = Math.max(a.value[0], a.value[1])),
            (a.value[0] = Math.max(e, a.min)),
            (a.value[1] = Math.max(i, a.min)),
            (a.value[0] = Math.min(a.value[0], a.max)),
            (a.value[1] = Math.min(a.value[1], a.max)),
            (i = ((a.value[0] - a.min) / (a.max - a.min)) * 100),
            (l = (s = ((a.value[1] - a.min) / (a.max - a.min)) * 100) - i + '%'),
            (i += '%'),
            (s += '%'))
          : (typeof a.value == 'object' && (a.value = Math.min.apply(null, a.value)),
            a.value < a.min && (a.value = a.min),
            a.value > a.max && (a.value = a.max),
            (l = ((a.value - a.min) / (a.max - a.min)) * 100 + '%'))
      var t
      var e = a.disabled ? '#c2c2c2' : a.theme
      var i =
        '<div class="layui-slider ' +
        (a.type === 'vertical' ? 'layui-slider-vertical' : '') +
        '">' +
        (a.tips ? '<div class="' + L + '" ' + (a.tipsAlways ? '' : 'style="display:none;"') + '></div>' : '') +
        '<div class="layui-slider-bar" style="background:' +
        e +
        '; ' +
        (a.type === 'vertical' ? 'height' : 'width') +
        ':' +
        l +
        ';' +
        (a.type === 'vertical' ? 'bottom' : 'left') +
        ':' +
        (i || 0) +
        ';"></div><div class="layui-slider-wrap" style="' +
        (a.type === 'vertical' ? 'bottom' : 'left') +
        ':' +
        (i || l) +
        ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' +
        e +
        ';"></div></div>' +
        (a.range
          ? '<div class="layui-slider-wrap" style="' +
            (a.type === 'vertical' ? 'bottom' : 'left') +
            ':' +
            s +
            ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' +
            e +
            ';"></div></div>'
          : '') +
        '</div>'
      var l = x(a.elem)
      var s = l.next('.layui-slider')
      if (
        (s[0] && s.remove(),
        (n.elemTemp = x(i)),
        a.range
          ? (n.elemTemp
              .find('.' + w)
              .eq(0)
              .data('value', a.value[0]),
            n.elemTemp
              .find('.' + w)
              .eq(1)
              .data('value', a.value[1]))
          : n.elemTemp.find('.' + w).data('value', a.value),
        l.html(n.elemTemp),
        a.type === 'vertical' && n.elemTemp.height(a.height + 'px'),
        a.showstep)
      ) {
        for (var o = (a.max - a.min) / a.step, r = '', u = 1; u < 1 + o; u++) {
          var c = (100 * u) / o
          c < 100 && (r += '<div class="layui-slider-step" style="' + (a.type === 'vertical' ? 'bottom' : 'left') + ':' + c + '%"></div>')
        }
        n.elemTemp.append(r)
      }
      function d(e) {
        ;(e = e.parent().data('value')), (e = a.setTips ? a.setTips(e) : e)
        n.elemTemp.find('.' + L).html(e)
      }
      function p(e) {
        var t = a.type === 'vertical' ? a.height : n.elemTemp[0].offsetWidth
        var i = n.elemTemp.find('.' + w)
        return ((a.type === 'vertical' ? t - e.parent()[0].offsetTop - i.height() : e.parent()[0].offsetLeft) / t) * 100
      }
      function v(e) {
        a.type === 'vertical'
          ? n.elemTemp.find('.' + L).css({ bottom: e + '%', 'margin-bottom': '20px', display: 'inline-block' })
          : n.elemTemp.find('.' + L).css({ left: e + '%', display: 'inline-block' })
      }
      a.input &&
        !a.range &&
        ((e = x(
          '<div class="layui-slider-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'
        )),
        l.css('position', 'relative'),
        l.append(e),
        l
          .find('.' + E)
          .children('input')
          .val(a.value),
        a.type === 'vertical' ? e.css({ left: 0, top: -48 }) : n.elemTemp.css('margin-right', e.outerWidth() + 15)),
        a.disabled ? (n.elemTemp.addClass(f), n.elemTemp.find('.' + M).addClass(f)) : n.slide(),
        a.tips &&
          (a.tipsAlways
            ? (d((s = n.elemTemp.find('.' + M))), v(p(s)))
            : n.elemTemp
                .find('.' + M)
                .on('mouseover', function () {
                  d(x(this))
                  var e = p(x(this))
                  clearTimeout(t),
                    (t = setTimeout(function () {
                      v(e)
                    }, 300))
                })
                .on('mouseout', function () {
                  clearTimeout(t), a.tipsAlways || n.elemTemp.find('.' + L).css('display', 'none')
                }))
    }),
    (t.prototype.slide = function (e, t, i) {
      var u = this
      var c = u.config
      var d = u.elemTemp
      var p = function () {
        return c.type === 'vertical' ? c.height : d[0].offsetWidth
      }
      var v = d.find('.' + w)
      var o = d.next('.layui-slider-input')
      var r = o
        .children('.' + E)
        .children('input')
        .val()
      var m = 100 / ((c.max - c.min) / c.step)
      var f = u.precision()
      var h = function (e, t, i) {
        ;(e = (e = (e = 100 < Math.ceil(e) * m ? Math.ceil(e) * m : Math.round(e) * m) > 100 ? 100 : e) < 0 ? 0 : e),
          v.eq(t).css(c.type === 'vertical' ? 'bottom' : 'left', e + '%')
        var n;
            var a = y(v[0].offsetLeft);
            var l = c.range ? y(v[1].offsetLeft) : 0;
            var s =
              ('vertical' === c.type
                ? (d.find('.' + L).css({ bottom: e + '%', 'margin-bottom': '20px' }),
                  (a = y(p() - v[0].offsetTop - v.height())),
                  (l = c.range ? y(p() - v[1].offsetTop - v.height()) : 0))
                : d.find('.' + L).css('left', e + '%'),
              (a = 100 < a ? 100 : a),
              (l = 100 < l ? 100 : l),
              Math.min(a, l));
            var a = Math.abs(a - l);
            var l =
              ('vertical' === c.type ? d.find('.' + T).css({ height: a + '%', bottom: s + '%' }) : d.find('.' + T).css({ width: a + '%', left: s + '%' }),
              c.min + ((c.max - c.min) * e) / 100);
            var l = Number(parseFloat(l).toFixed(f))
        ;(r = l),
          o
            .children('.' + E)
            .children('input')
            .val(r),
          v.eq(t).data('value', l),
          d.find('.' + L).html(c.setTips ? c.setTips(l) : l),
          c.range && (n = [v.eq(0).data('value'), v.eq(1).data('value')])[0] > n[1] && n.reverse(),
          (u.value = c.range ? n : l),
          c.change && c.change(u.value),
          'done' === i && c.done && c.done(u.value)
      }
      var y = function (e) {
        var t = ((e / p()) * 100) / m;
            var i = Math.round(t) * m
        return (i = e == p() ? Math.ceil(t) * m : i)
      }
      var g = x(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(''))
      if (e === 'set') return h((((t - c.min) / (c.max - c.min)) * 100) / m, i, 'done')
      d.find('.' + M).each(function (o) {
        var r = x(this)
        r.on('mousedown touchstart', function (e) {
          ;(e = e || window.event).type === 'touchstart' && ((e.clientX = e.originalEvent.touches[0].clientX), (e.clientY = e.originalEvent.touches[0].clientY))
          var t
          var i
          var n
          var a
          var l = r.parent()[0].offsetLeft
          var s = e.clientX
          c.type === 'vertical' && ((l = p() - r.parent()[0].offsetTop - v.height()), (s = e.clientY))
          ;(t = r),
            (i = function (e) {
              ;(e = e || window.event).type === 'touchmove' && ((e.clientX = e.touches[0].clientX), (e.clientY = e.touches[0].clientY))
              var t = l + (c.type === 'vertical' ? s - e.clientY : e.clientX - s)
              var t = (((t = (t = t < 0 ? 0 : t) > p() ? p() : t) / p()) * 100) / m
              h(t, o), r.addClass(Y), d.find('.' + L).show(), e.preventDefault()
            }),
            (n = function (e) {
              r.removeClass(Y),
                c.tipsAlways ||
                  setTimeout(function () {
                    d.find('.' + L).hide()
                  }, e)
            }),
            (a = function () {
              n && n(b.touchEventsSupported() ? 1e3 : 0),
                g.remove(),
                c.done && c.done(u.value),
                b.touchEventsSupported() &&
                  (t[0].removeEventListener('touchmove', i, !!b.passiveSupported && { passive: !1 }),
                  t[0].removeEventListener('touchend', a),
                  t[0].removeEventListener('touchcancel', a))
            }),
            x('#LAY-slider-moving')[0] || x('body').append(g),
            g.on('mousemove', i),
            g.on('mouseup', a).on('mouseleave', a),
            b.touchEventsSupported() &&
              (t[0].addEventListener('touchmove', i, !!b.passiveSupported && { passive: !1 }), t[0].addEventListener('touchend', a), t[0].addEventListener('touchcancel', a))
        })
      }),
        d.on('click', function (e) {
          var t = x('.' + M)
          var i = x(this)
          !t.is(event.target) &&
            t.has(event.target).length === 0 &&
            t.length &&
            ((i =
              (((t =
                (t = (t = c.type === 'vertical' ? p() - e.clientY + i.offset().top - x(window).scrollTop() : e.clientX - i.offset().left - x(window).scrollLeft()) < 0 ? 0 : t) >
                p()
                  ? p()
                  : t) /
                p()) *
                100) /
              m),
            (t = c.range
              ? c.type === 'vertical'
                ? Math.abs(t - parseInt(x(v[0]).css('bottom'))) > Math.abs(t - parseInt(x(v[1]).css('bottom')))
                  ? 1
                  : 0
                : Math.abs(t - v[0].offsetLeft) > Math.abs(t - v[1].offsetLeft)
                ? 1
                : 0
              : 0),
            h(i, t, 'done'),
            e.preventDefault())
        }),
        o
          .children('.layui-slider-input-btn')
          .children('i')
          .each(function (t) {
            x(this).on('click', function () {
              r = o
                .children('.' + E)
                .children('input')
                .val()
              var e =
                ((((r = t == 1 ? (r - c.step < c.min ? c.min : Number(r) - c.step) : Number(r) + c.step > c.max ? c.max : Number(r) + c.step) - c.min) / (c.max - c.min)) * 100) / m
              h(e, 0, 'done')
            })
          })
      var n = function () {
        var e = this.value
        var e = ((e = (e = (e = isNaN(e) ? 0 : e) < c.min ? c.min : e) > c.max ? c.max : e), ((((this.value = e) - c.min) / (c.max - c.min)) * 100) / m)
        h(e, 0, 'done')
      }
      o.children('.' + E)
        .children('input')
        .on('keydown', function (e) {
          e.keyCode === 13 && (e.preventDefault(), n.call(this))
        })
        .on('change', n)
    }),
    (t.prototype.events = function () {
      this.config
    }),
    (m.render = function (e) {
      e = new t(e)
      return function () {
        var i = this
        var n = i.config
        return {
          setValue: function (e, t) {
            return (e = (e = e > n.max ? n.max : e) < n.min ? n.min : e), (n.value = e), i.slide('set', e, t || 0)
          },
          config: n
        }
      }.call(e)
    }),
    e(i, m)
})
layui.define(['jquery', 'lay'], function (e) {
  'use strict'
  var x = layui.$
  var P = layui.lay
  var o = layui.hint()
  var i = layui.device().mobile ? 'click' : 'mousedown'
  var r = {
    config: {},
    index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
    set: function (e) {
      var i = this
      return (i.config = x.extend({}, i.config, e)), i
    },
    on: function (e, i) {
      return layui.onevent.call(this, 'colorpicker', e, i)
    }
  }
  var n = function () {
    var e = this.config;
        var i = e.id
    return (n.that[i] = this), { config: e }
  }
  var t = 'colorpicker'
  var l = 'layui-colorpicker'
  var c = '.layui-colorpicker-main'
  var C = 'layui-icon-down'
  var w = 'layui-icon-close'
  var T = 'layui-colorpicker-trigger-span'
  var B = 'layui-colorpicker-trigger-i'
  var I = 'layui-colorpicker-side-slider'
  var E = 'layui-colorpicker-basis'
  var D = 'layui-colorpicker-alpha-bgcolor'
  var Y = 'layui-colorpicker-alpha-slider'
  var M = 'layui-colorpicker-basis-cursor'
  var X = 'layui-colorpicker-main-input'
  var j = function (e) {
    var i = { h: 0, s: 0, b: 0 };
        var o = Math.min(e.r, e.g, e.b);
        var t = Math.max(e.r, e.g, e.b);
        var n = t - o
    return (
      (i.b = t),
      (i.s = t !== 0 ? (255 * n) / t : 0),
      i.s !== 0 ? (e.r == t ? (i.h = (e.g - e.b) / n) : e.g == t ? (i.h = 2 + (e.b - e.r) / n) : (i.h = 4 + (e.r - e.g) / n)) : (i.h = -1),
      t === o && (i.h = 0),
      (i.h *= 60),
      i.h < 0 && (i.h += 360),
      (i.s *= 100 / 255),
      (i.b *= 100 / 255),
      i
    )
  }
  var F = function (e) {
    var i;
        var o = {};
        var t = e.h;
        var n = (255 * e.s) / 100;
        var e = (255 * e.b) / 100
    return (
      0 == n
        ? (o.r = o.g = o.b = e)
        : ((e = ((t % 60) * ((i = e) - (n = ((255 - n) * e) / 255))) / 60),
          (t = t === 360 ? 0 : t) < 60
            ? ((o.r = i), (o.b = n), (o.g = n + e))
            : t < 120
            ? ((o.g = i), (o.b = n), (o.r = i - e))
            : t < 180
            ? ((o.g = i), (o.r = n), (o.b = n + e))
            : t < 240
            ? ((o.b = i), (o.r = n), (o.g = i - e))
            : t < 300
            ? ((o.b = i), (o.g = n), (o.r = n + e))
            : t < 360
            ? ((o.r = i), (o.g = n), (o.b = i - e))
            : ((o.r = 0), (o.g = 0), (o.b = 0))),
      { r: Math.round(o.r), g: Math.round(o.g), b: Math.round(o.b) }
    )
  }
  var H = function (e) {
    var e = F(e);
        var o = [e.r.toString(16), e.g.toString(16), e.b.toString(16)]
    return (
      x.each(o, function (e, i) {
        i.length === 1 && (o[e] = '0' + i)
      }),
      o.join('')
    )
  }
  var L = function (e) {
    e = e.match(/[0-9]{1,3}/g) || []
    return { r: e[0], g: e[1], b: e[2] }
  }
  var W = x(window)
  var a = x(document)
  var s = function (e) {
    ;(this.index = ++r.index), (this.config = x.extend({}, this.config, r.config, e)), this.render()
  }
  ;(s.prototype.config = {
    color: '',
    size: null,
    alpha: !1,
    format: 'hex',
    predefine: !1,
    colors: [
      '#16baaa',
      '#16b777',
      '#1E9FFF',
      '#FF5722',
      '#FFB800',
      '#01AAED',
      '#999',
      '#c00',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgb(0, 186, 189)',
      'rgb(255, 120, 0)',
      'rgb(250, 212, 0)',
      '#393D49',
      'rgba(0,0,0,.5)',
      'rgba(255, 69, 0, 0.68)',
      'rgba(144, 240, 144, 0.5)',
      'rgba(31, 147, 255, 0.73)'
    ]
  }),
    (s.prototype.render = function () {
      var e = this
      var i = e.config
      if ((t = x(i.elem)).length > 1) {
        return (
          layui.each(t, function () {
            r.render(x.extend({}, i, { elem: this }))
          }),
          e
        )
      }
      x.extend(i, P.options(t[0]))
      var o = x(
        [
          '<div class="layui-unselect layui-colorpicker">',
          '<span ' + (i.format == 'rgb' && i.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : '') + '>',
          '<span class="layui-colorpicker-trigger-span" ',
          'lay-type="' + (i.format == 'rgb' ? (i.alpha ? 'rgba' : 'torgb') : '') + '" ',
          'style="' +
            ((o = ''),
            i.color
              ? ((o = i.color), (i.color.match(/[0-9]{1,3}/g) || []).length > 3 && ((i.alpha && i.format == 'rgb') || (o = '#' + H(j(L(i.color))))), 'background: ' + o)
              : o) +
            '">',
          '<i class="layui-icon layui-colorpicker-trigger-i ' + (i.color ? C : w) + '"></i>',
          '</span>',
          '</span>',
          '</div>'
        ].join('')
      )
      var t = (i.elem = x(i.elem))
      i.size && o.addClass('layui-colorpicker-' + i.size),
        t.addClass('layui-inline').html((e.elemColorBox = o)),
        (i.id = 'id' in i ? i.id : t.attr('id') || e.index),
        (e.color = e.elemColorBox.find('.' + T)[0].style.background),
        e.events()
    }),
    (s.prototype.renderPicker = function () {
      var o
      var e = this
      var i = e.config
      var t = e.elemColorBox[0]
      var n = (e.elemPicker = x(
        [
          '<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-downbit layui-colorpicker-main">',
          '<div class="layui-colorpicker-main-wrapper">',
          '<div class="layui-colorpicker-basis">',
          '<div class="layui-colorpicker-basis-white"></div>',
          '<div class="layui-colorpicker-basis-black"></div>',
          '<div class="layui-colorpicker-basis-cursor"></div>',
          '</div>',
          '<div class="layui-colorpicker-side">',
          '<div class="layui-colorpicker-side-slider"></div>',
          '</div>',
          '</div>',
          '<div class="layui-colorpicker-main-alpha ' + (i.alpha ? 'layui-show' : '') + '">',
          '<div class="layui-colorpicker-alpha-bgcolor">',
          '<div class="layui-colorpicker-alpha-slider"></div>',
          '</div>',
          '</div>',
          i.predefine
            ? ((o = ['<div class="layui-colorpicker-main-pre">']),
              layui.each(i.colors, function (e, i) {
                o.push(
                  [
                    '<div class="layui-colorpicker-pre' + ((i.match(/[0-9]{1,3}/g) || []).length > 3 ? ' layui-colorpicker-pre-isalpha' : '') + '">',
                    '<div style="background:' + i + '"></div>',
                    '</div>'
                  ].join('')
                )
              }),
              o.push('</div>'),
              o.join(''))
            : '',
          '<div class="layui-colorpicker-main-input">',
          '<div class="layui-inline">',
          '<input type="text" class="layui-input">',
          '</div>',
          '<div class="layui-btn-container">',
          '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">\u6e05\u7a7a</button>',
          '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">\u786e\u5b9a</button>',
          '</div',
          '</div>',
          '</div>'
        ].join('')
      ))
      e.elemColorBox.find('.' + T)[0]
      x(c)[0] && x(c).data('index') == e.index ? e.removePicker(s.thisElemInd) : (e.removePicker(s.thisElemInd), x('body').append(n)),
        (r.thisId = i.id),
        (s.thisElemInd = e.index),
        (s.thisColor = t.style.background),
        e.position(),
        e.pickerEvents()
    }),
    (s.prototype.removePicker = function (e) {
      var i = this.config
      var e = x('#layui-colorpicker' + (e || this.index))
      return e[0] && (e.remove(), delete r.thisId, typeof i.close == 'function') && i.close(this.color), this
    }),
    (s.prototype.position = function () {
      var e = this
      var i = e.config
      return P.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], { position: i.position, align: 'center' }), e
    }),
    (s.prototype.val = function () {
      var e
      var i = this
      var o = (i.config, i.elemColorBox.find('.' + T))
      var t = i.elemPicker.find('.' + X)
      var n = o[0].style.backgroundColor
      n
        ? ((e = j(L(n))),
          (o = o.attr('lay-type')),
          i.select(e.h, e.s, e.b),
          o === 'torgb'
            ? t.find('input').val(n)
            : o === 'rgba'
            ? ((o = L(n)),
              (n.match(/[0-9]{1,3}/g) || []).length === 3
                ? (t.find('input').val('rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', 1)'), i.elemPicker.find('.' + Y).css('left', 280))
                : (t.find('input').val(n), (n = 280 * n.slice(n.lastIndexOf(',') + 1, n.length - 1)), i.elemPicker.find('.' + Y).css('left', n)),
              (i.elemPicker.find('.' + D)[0].style.background =
                'linear-gradient(to right, rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', 0), rgb(' + o.r + ', ' + o.g + ', ' + o.b + '))'))
            : t.find('input').val('#' + H(e)))
        : (i.select(0, 100, 100), t.find('input').val(''), (i.elemPicker.find('.' + D)[0].style.background = ''), i.elemPicker.find('.' + Y).css('left', 280))
    }),
    (s.prototype.side = function () {
      var r = this
      var l = r.config
      var c = r.elemColorBox.find('.' + T)
      var a = c.attr('lay-type')
      var s = r.elemPicker.find('.layui-colorpicker-side')
      var o = r.elemPicker.find('.' + I)
      var d = r.elemPicker.find('.' + E)
      var t = r.elemPicker.find('.' + M)
      var u = r.elemPicker.find('.' + D)
      var f = r.elemPicker.find('.' + Y)
      var p = (o[0].offsetTop / 180) * 360
      var h = 100 - ((t[0].offsetTop + 3) / 180) * 100
      var g = ((t[0].offsetLeft + 3) / 260) * 100
      var v = Math.round((f[0].offsetLeft / 280) * 100) / 100
      var m = r.elemColorBox.find('.' + B)
      var e = r.elemPicker.find('.layui-colorpicker-pre').children('div')
      var y = function (e, i, o, t) {
        r.select(e, i, o)
        var n = F({ h: e, s: i, b: o });
            var e = H({ h: e, s: i, b: o });
            var i = r.elemPicker.find('.' + X).find('input')
        m.addClass(C).removeClass(w),
          (c[0].style.background = 'rgb(' + n.r + ', ' + n.g + ', ' + n.b + ')'),
          'torgb' === a
            ? i.val('rgb(' + n.r + ', ' + n.g + ', ' + n.b + ')')
            : a === 'rgba'
            ? (f.css('left', 280 * t),
              i.val('rgba(' + n.r + ', ' + n.g + ', ' + n.b + ', ' + t + ')'),
              (c[0].style.background = 'rgba(' + n.r + ', ' + n.g + ', ' + n.b + ', ' + t + ')'),
              (u[0].style.background = 'linear-gradient(to right, rgba(' + n.r + ', ' + n.g + ', ' + n.b + ', 0), rgb(' + n.r + ', ' + n.g + ', ' + n.b + '))'))
            : i.val('#' + e),
          l.change &&
            l.change(
              x.trim(
                r.elemPicker
                  .find('.' + X)
                  .find('input')
                  .val()
              )
            )
      }
      var i = x(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join(''))
      var b = function (e) {
        x('#LAY-colorpicker-moving')[0] || x('body').append(i),
          i.on('mousemove', e),
          i
            .on('mouseup', function () {
              i.remove()
            })
            .on('mouseleave', function () {
              i.remove()
            })
      }
      var n = !0
      var k = !0
      o.on('mousedown', function (e, i) {
        var t = this.offsetTop
        var n = (e.clientY === undefined ? i : e).clientY
        k && layui.stope(e),
          b(function (e) {
            var i = t + (e.clientY - n)
            var o = s[0].offsetHeight
            var o = ((i = o < (i = i < 0 ? 0 : i) ? o : i) / 180) * 360
            y((p = o), g, h, v), e.preventDefault()
          }),
          e.preventDefault()
      }),
        s.on('mousedown', function (e) {
          var i = e.clientY - x(this).offset().top + W.scrollTop()
          var i = ((i = (i = i < 0 ? 0 : i) > this.offsetHeight ? this.offsetHeight : i) / 180) * 360
          y((p = i), g, h, v), e.preventDefault(), n && o.trigger('mousedown', e)
        }),
        t.on('mousedown', function (e, i) {
          var r = this.offsetTop
          var l = this.offsetLeft
          var c = (e.clientY === undefined ? i : e).clientY
          var a = (e.clientX === undefined ? i : e).clientX
          k && layui.stope(e),
            b(function (e) {
              var i = r + (e.clientY - c)
              var o = l + (e.clientX - a)
              var t = d[0].offsetHeight
              var n = d[0].offsetWidth
              var n = ((o = n < (o = o < 0 ? 0 : o) ? n : o) / 260) * 100
              var o = 100 - ((i = t < (i = i < 0 ? 0 : i) ? t : i) / 180) * 100
              y(p, (g = n), (h = o), v), e.preventDefault()
            }),
            e.preventDefault()
        }),
        d.on('mousedown', function (e) {
          var i = e.clientY - x(this).offset().top + W.scrollTop()
          var o = e.clientX - x(this).offset().left + W.scrollLeft()
          var o = ((i = i < 0 ? 0 : i) > this.offsetHeight && (i = this.offsetHeight), ((o = (o = o < 0 ? 0 : o) > this.offsetWidth ? this.offsetWidth : o) / 260) * 100)
          var i = 100 - (i / 180) * 100
          y(p, (g = o), (h = i), v), layui.stope(e), e.preventDefault(), n && t.trigger('mousedown', e)
        }),
        f.on('mousedown', function (e, i) {
          var t = this.offsetLeft
          var n = (e.clientX === undefined ? i : e).clientX
          k && layui.stope(e),
            b(function (e) {
              var i = t + (e.clientX - n)
              var o = u[0].offsetWidth
              var o = (o < (i = i < 0 ? 0 : i) && (i = o), Math.round((i / 280) * 100) / 100)
              y(p, g, h, (v = o)), e.preventDefault()
            }),
            e.preventDefault()
        }),
        u.on('mousedown', function (e) {
          var i = e.clientX - x(this).offset().left
          var i = ((i = i < 0 ? 0 : i) > this.offsetWidth && (i = this.offsetWidth), Math.round((i / 280) * 100) / 100)
          y(p, g, h, (v = i)), e.preventDefault(), n && f.trigger('mousedown', e)
        }),
        e.each(function () {
          x(this).on('click', function () {
            x(this).parent('.layui-colorpicker-pre').addClass('selected').siblings().removeClass('selected')
            var e = this.style.backgroundColor
            var i = j(L(e))
            var o = e.slice(e.lastIndexOf(',') + 1, e.length - 1)
            ;(p = i.h), (g = i.s), (h = i.b), (e.match(/[0-9]{1,3}/g) || []).length === 3 && (o = 1), (v = o), y(i.h, i.s, i.b, o)
          })
        }),
        P.touchEventsSupported() &&
          layui.each(
            [
              { elem: s, eventType: 'mousedown' },
              { elem: u, eventType: 'mousedown' },
              { elem: d, eventType: 'mousedown' }
            ],
            function (e, t) {
              P.touchSwipe(t.elem, {
                onTouchStart: function () {
                  k = n = !1
                },
                onTouchMove: function (e) {
                  var i, o
                  ;(e = e),
                    (i = t.eventType),
                    (e = e.touches[0]),
                    (o = document.createEvent('MouseEvent')).initMouseEvent(i, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
                    e.target.dispatchEvent(o)
                },
                onTouchEnd: function () {
                  i.remove(), (k = n = !0)
                }
              })
            }
          )
    }),
    (s.prototype.select = function (e, i, o, t) {
      this.config
      var n = H({ h: e, s: 100, b: 100 })
      var e = (H({ h: e, s: i, b: o }), (e / 360) * 180)
      var o = 180 - (o / 100) * 180
      var i = (i / 100) * 260
      var r = this.elemPicker.find('.' + E)[0]
      this.elemPicker.find('.' + I).css('top', e),
        (r.style.background = '#' + n),
        this.elemPicker.find('.' + M).css({ top: (o / r.offsetHeight) * 100 + '%', left: (i / r.offsetWidth) * 100 + '%' })
    }),
    (s.prototype.pickerEvents = function () {
      var c = this
      var a = c.config
      var s = c.elemColorBox.find('.' + T)
      var d = c.elemPicker.find('.' + X + ' input')
      var o = {
        clear: function (e) {
          ;(s[0].style.background = ''),
            c.elemColorBox
              .find('.' + B)
              .removeClass(C)
              .addClass(w),
            (c.color = ''),
            a.done && a.done(''),
            c.removePicker()
        },
        confirm: function (e, i) {
          var o
          var t
          var n
          var r
          var l = x.trim(d.val())
          l.indexOf(',') > -1
            ? ((t = j(L(l))),
              c.select(t.h, t.s, t.b),
              (s[0].style.background = o = '#' + H(t)),
              (l.match(/[0-9]{1,3}/g) || []).length > 3 &&
                s.attr('lay-type') === 'rgba' &&
                ((n = 280 * l.slice(l.lastIndexOf(',') + 1, l.length - 1)), c.elemPicker.find('.' + Y).css('left', n), (o = s[0].style.background = l)))
            : ((n = (n = l).indexOf('#') > -1 ? n.substring(1) : n).length === 3 && (n = (r = n.split(''))[0] + r[0] + r[1] + r[1] + r[2] + r[2]),
              (r = { r: (n = parseInt(n, 16)) >> 16, g: (65280 & n) >> 8, b: 255 & n }),
              (t = j(r)),
              (s[0].style.background = o = '#' + H(t)),
              c.elemColorBox
                .find('.' + B)
                .removeClass(w)
                .addClass(C)),
            i === 'change' ? (c.select(t.h, t.s, t.b, i), a.change && a.change(o)) : ((c.color = l), a.done && a.done(l), c.removePicker())
        }
      }
      c.elemPicker.on('click', '*[colorpicker-events]', function () {
        var e = x(this)
        var i = e.attr('colorpicker-events')
        o[i] && o[i].call(this, e)
      }),
        d.on('keyup', function (e) {
          var i = x(this)
          o.confirm.call(this, i, e.keyCode === 13 ? null : 'change')
        })
    }),
    (s.prototype.events = function () {
      var e = this
      e.config
      e.elemColorBox.on('click', function () {
        e.renderPicker(), x(c)[0] && (e.val(), e.side())
      })
    }),
    a.on(i, function (e) {
      var i, o, t
      r.thisId &&
        (i = n.getThis(r.thisId)) &&
        ((o = i.config),
        (t = i.elemColorBox.find('.' + T)),
        x(e.target).hasClass(l) ||
          x(e.target).parents('.' + l)[0] ||
          x(e.target).hasClass(c.replace(/\./g, '')) ||
          x(e.target).parents(c)[0] ||
          (i.elemPicker &&
            (i.color
              ? ((e = j(L(i.color))), i.select(e.h, e.s, e.b))
              : i.elemColorBox
                  .find('.' + B)
                  .removeClass(C)
                  .addClass(w),
            (t[0].style.background = i.color || ''),
            typeof o.cancel == 'function' && o.cancel(i.color),
            i.removePicker())))
    }),
    W.on('resize', function () {
      if (r.thisId) {
        var e = n.getThis(r.thisId)
        if (e) return !(!e.elemPicker || !x(c)[0]) && void e.position()
      }
    }),
    (n.that = {}),
    (n.getThis = function (e) {
      var i = n.that[e]
      return i || o.error(e ? t + " instance with ID '" + e + "' not found" : 'ID argument required'), i
    }),
    (r.render = function (e) {
      e = new s(e)
      return n.call(e)
    }),
    e(t, r)
})
layui.define('jquery', function (t) {
  'use strict'
  var u = layui.$
  var d = (layui.hint(), layui.device())
  var c = 'element'
  var r = 'layui-this'
  var h = 'layui-show'
  var o = '.layui-tab-title'
  var i = function () {
    this.config = {}
  }
  var y =
    ((i.prototype.set = function (t) {
      return u.extend(!0, this.config, t), this
    }),
    (i.prototype.on = function (t, i) {
      return layui.onevent.call(this, c, t, i)
    }),
    (i.prototype.tabAdd = function (t, i) {
      var a;
          var e = u('.layui-tab[lay-filter=' + t + ']');
          var l = e.children(o);
          var n = l.children('.layui-tab-bar');
          var e = e.children('.layui-tab-content');
          var s =
          '<li' +
          ((a = []),
          layui.each(i, function (t, i) {
            ;/^(title|content)$/.test(t) || a.push('lay-' + t + '="' + i + '"')
          }),
          0 < a.length && a.unshift(''),
          a.join(' ')) +
          '>' +
          (i.title || 'unnaming') +
          '</li>'
      return (
        n[0] ? n.before(s) : l.append(s),
        e.append('<div class="layui-tab-item" ' + (i.id ? 'lay-id="' + i.id + '"' : '') + '>' + (i.content || '') + '</div>'),
        i.change && this.tabChange(t, i.id),
        l.data('LAY_TAB_CHANGE', i.change),
        C.tabAuto(i.change ? 'change' : null),
        this
      )
    }),
    (i.prototype.tabDelete = function (t, i) {
      t = u('.layui-tab[lay-filter=' + t + ']')
        .children(o)
        .find('>li[lay-id="' + i + '"]')
      return C.tabDelete(null, t), this
    }),
    (i.prototype.tabChange = function (t, i) {
      t = u('.layui-tab[lay-filter=' + t + ']')
        .children(o)
        .find('>li[lay-id="' + i + '"]')
      return C.tabClick.call(t[0], { liElem: t }), this
    }),
    (i.prototype.tab = function (a) {
      ;(a = a || {}),
        e.on('click', a.headerElem, function (t) {
          var i = u(a.headerElem).index(u(this))
          C.tabClick.call(this, { index: i, options: a })
        })
    }),
    (i.prototype.progress = function (t, i) {
      var a = 'layui-progress';
          var t = u('.' + a + '[lay-filter=' + t + ']').find('.' + a + '-bar');
          var a = t.find('.' + a + '-text')
      return (
        t
          .css('width', function () {
            return /^.+\/.+$/.test(i) ? 100 * new Function('return ' + i)() + '%' : i
          })
          .attr('lay-percent', i),
        a.text(i),
        this
      )
    }),
    '.layui-nav')
  var f = 'layui-nav-item'
  var p = 'layui-nav-bar'
  var b = 'layui-nav-tree'
  var v = 'layui-nav-child'
  var m = 'layui-nav-more'
  var g = 'layui-anim layui-anim-upbit'
  var C = {
    tabClick: function (t) {
      var i = (t = t || {}).options || {};
          var a = t.liElem || u(this);
          var e = i.headerElem ? a.parent() : a.parents('.layui-tab').eq(0);
          var i = i.bodyElem ? u(i.bodyElem) : e.children('.layui-tab-content').children('.layui-tab-item');
          var l = a.find('a');
          var l = 'javascript:;' !== l.attr('href') && '_blank' === l.attr('target');
          var n = 'string' == typeof a.attr('lay-unselect');
          var s = e.attr('lay-filter');
          var o = a.attr('lay-id');
          var t = 'index' in t ? t.index : a.parent().children('li').index(a)
      l || n || (a.addClass(r).siblings().removeClass(r), (o ? (l = (l = i.filter('[lay-id="' + o + '"]')).length ? l : i.eq(t)) : i.eq(t)).addClass(h).siblings().removeClass(h)),
        layui.event.call(this, c, 'tab(' + s + ')', { elem: e, index: t, id: o })
    },
    tabDelete: function (t, i) {
      var i = i || u(this).parent();
          var a = i.parent().children('li').index(i);
          var e = i.closest('.layui-tab');
          var l = e.children('.layui-tab-content').children('.layui-tab-item');
          var n = e.attr('lay-filter');
          var s = i.attr('lay-id')
      !1 !== layui.event.call(i[0], c, 'tabBeforeDelete(' + n + ')', { elem: e, index: a, id: s }) &&
        (i.hasClass(r) &&
          (i.next()[0] && i.next().is('li') ? C.tabClick.call(i.next()[0], { index: a + 1 }) : i.prev()[0] && i.prev().is('li') && C.tabClick.call(i.prev()[0], null, a - 1)),
        i.remove(),
        (s ? (i = (i = l.filter('[lay-id="' + s + '"]')).length ? i : l.eq(a)) : l.eq(a)).remove(),
        setTimeout(function () {
          C.tabAuto()
        }, 50),
        layui.event.call(this, c, 'tabDelete(' + n + ')', { elem: e, index: a, id: s }))
    },
    tabAuto: function (l) {
      var n = 'layui-tab-more';
          var s = 'layui-tab-bar';
          var o = 'layui-tab-close';
          var c = this
      u('.layui-tab').each(function () {
        var t = u(this);
            var a = t.children('.layui-tab-title');
            var i = (t.children('.layui-tab-content').children('.layui-tab-item'), 'lay-stope="tabmore"');
            var i = u('<span class="layui-unselect layui-tab-bar" ' + i + '><i ' + i + ' class="layui-icon">&#xe61a;</i></span>');
            var e = (c === window && d.ie, t.attr('lay-allowclose'))
        e &&
          'false' !== e &&
          a.find('li').each(function () {
            var t;
                var i = u(this)
            i.find('.' + o)[0] ||
              i.attr('lay-allowclose') === 'false' ||
              ((t = u('<i class="layui-icon layui-icon-close layui-unselect ' + o + '"></i>')).on('click', C.tabDelete), i.append(t))
          }),
          typeof t.attr('lay-unauto') != 'string' &&
            (a.prop('scrollWidth') > a.outerWidth() + 1 || (a.find('li').length && a.height() > (e = a.find('li').eq(0).height()) + e / 2)
              ? (l === 'change' && a.data('LAY_TAB_CHANGE') && a.addClass(n),
                a.find('.' + s)[0] ||
                  (a.append(i),
                  t.attr('overflow', ''),
                  i.on('click', function (t) {
                    var i = a.hasClass(n)
                    a[i ? 'removeClass' : 'addClass'](n)
                  })))
              : (a.find('.' + s).remove(), t.removeAttr('overflow')))
      })
    },
    hideTabMore: function (t) {
      var i = u('.layui-tab-title')
      ;(!0 !== t && u(t.target).attr('lay-stope') === 'tabmore') || (i.removeClass('layui-tab-more'), i.find('.layui-tab-bar').attr('title', ''))
    },
    clickThis: function () {
      var t = u(this);
          var i = t.closest(y);
          var a = i.attr('lay-filter');
          var e = t.parent();
          var l = t.siblings('.' + v);
          var n = typeof e.attr('lay-unselect') == 'string'
      if (((t.attr('href') !== 'javascript:;' && t.attr('target') === '_blank') || n || l[0] || (i.find('.' + r).removeClass(r), e.addClass(r)), i.hasClass(b))) {
        var n = f + 'ed';
            var s = !e.hasClass(n);
            var o = function () {
            u(this).css({ display: '' }), i.children('.' + p).css({ opacity: 0 })
          }
        if (l.is(':animated')) return
        l.removeClass(g),
          l[0] &&
            (s ? (l.slideDown(200, o), e.addClass(n)) : (e.removeClass(n), l.show().slideUp(200, o)),
            (typeof i.attr('lay-accordion') != 'string' && i.attr('lay-shrink') !== 'all') ||
              ((s = e.siblings('.' + n)).removeClass(n),
              s
                .children('.' + v)
                .show()
                .stop()
                .slideUp(200, o)))
      }
      layui.event.call(this, c, 'nav(' + a + ')', t)
    },
    collapse: function () {
      var t = u(this);
          var i = t.find('.layui-colla-icon');
          var a = t.siblings('.layui-colla-content');
          var e = t.parents('.layui-collapse').eq(0);
          var l = e.attr('lay-filter');
          var n = a.css('display') === 'none'
      'string' == typeof e.attr('lay-accordion') &&
        ((e = e.children('.layui-colla-item').children('.' + h)).siblings('.layui-colla-title').children('.layui-colla-icon').html('&#xe602;'), e.removeClass(h)),
        a[n ? 'addClass' : 'removeClass'](h),
        i.html(n ? '&#xe61a;' : '&#xe602;'),
        layui.event.call(this, c, 'collapse(' + l + ')', { title: t, content: a, show: n })
    }
  }
  var a =
    ((i.prototype.render = i.prototype.init =
      function (t, i) {
        var a = i ? '[lay-filter="' + i + '"]' : '';
            var i = {
            tab: function () {
              C.tabAuto.call({})
            },
            nav: function () {
              var s = {};
                  var o = {};
                  var c = {};
                  var r = 'layui-nav-title'
              u(y + a).each(function (t) {
                var i = u(this);
                    var a = u('<span class="' + p + '"></span>');
                    var e = i.find('.' + f)
                i.find('.' + p)[0] ||
                  (i.append(a),
                  (i.hasClass(b) ? e.find('dd,>.' + r) : e)
                    .on('mouseenter', function () {
                      !function (t, i, a) {
                        var e;
                            var l = u(this);
                            var n = l.find('.' + v)
                        i.hasClass(b)
                          ? n[0] || ((e = l.children('.' + r)), t.css({ top: l.offset().top - i.offset().top, height: (e[0] ? e : l).outerHeight(), opacity: 1 }))
                          : (n.addClass(g),
                            n.hasClass('layui-nav-child-c') && n.css({ left: -(n.outerWidth() - l.width()) / 2 }),
                            n[0]
                              ? t.css({ left: t.position().left + t.width() / 2, width: 0, opacity: 0 })
                              : t.css({ left: l.position().left + parseFloat(l.css('marginLeft')), top: l.position().top + l.height() - t.height() }),
                            (s[a] = setTimeout(
                              function () {
                                t.css({ width: n[0] ? 0 : l.width(), opacity: n[0] ? 0 : 1 })
                              },
                              d.ie && d.ie < 10 ? 0 : 200
                            )),
                            clearTimeout(c[a]),
                            'block' === n.css('display') && clearTimeout(o[a]),
                            (o[a] = setTimeout(function () {
                              n.addClass(h), l.find('.' + m).addClass(m + 'd')
                            }, 300)))
                      }.call(this, a, i, t)
                    })
                    .on('mouseleave', function () {
                      i.hasClass(b)
                        ? a.css({ height: 0, opacity: 0 })
                        : (clearTimeout(o[t]),
                          (o[t] = setTimeout(function () {
                            i.find('.' + v).removeClass(h), i.find('.' + m).removeClass(m + 'd')
                          }, 300)))
                    }),
                  i.on('mouseleave', function () {
                    clearTimeout(s[t]),
                      (c[t] = setTimeout(function () {
                        i.hasClass(b) || a.css({ width: 0, left: a.position().left + a.width() / 2, opacity: 0 })
                      }, 200))
                  })),
                  e.find('a').each(function () {
                    var t = u(this)
                    t.parent()
                    t.siblings('.' + v)[0] && !t.children('.' + m)[0] && t.append('<i class="layui-icon layui-icon-down ' + m + '"></i>'),
                      t.off('click', C.clickThis).on('click', C.clickThis)
                  })
              })
            },
            breadcrumb: function () {
              u('.layui-breadcrumb' + a).each(function () {
                var t = u(this);
                    var i = 'lay-separator';
                    var a = t.attr(i) || '/';
                    var e = t.find('a')
                e.next('span[' + i + ']')[0] ||
                  (e.each(function (t) {
                    t !== e.length - 1 && u(this).after('<span ' + i + '>' + a + '</span>')
                  }),
                  t.css('visibility', 'visible'))
              })
            },
            progress: function () {
              var e = 'layui-progress'
              u('.' + e + a).each(function () {
                var t = u(this);
                    var i = t.find('.layui-progress-bar');
                    var a = i.attr('lay-percent')
                i.css('width', function () {
                  return /^.+\/.+$/.test(a) ? 100 * new Function('return ' + a)() + '%' : a
                }),
                  t.attr('lay-showpercent') &&
                    setTimeout(function () {
                      i.html('<span class="' + e + '-text">' + a + '</span>')
                    }, 350)
              })
            },
            collapse: function () {
              u('.layui-collapse' + a).each(function () {
                u(this)
                  .find('.layui-colla-item')
                  .each(function () {
                    var t = u(this);
                        var i = t.find('.layui-colla-title');
                        var t = t.find('.layui-colla-content').css('display') === 'none'
                    i.find('.layui-colla-icon').remove(),
                      i.append('<i class="layui-icon layui-colla-icon">' + (t ? '&#xe602;' : '&#xe61a;') + '</i>'),
                      i.off('click', C.collapse).on('click', C.collapse)
                  })
              })
            }
          }
        return i[t]
          ? i[t]()
          : layui.each(i, function (t, i) {
              i()
            })
      }),
    new i())
  var e = u(document)
  u(function () {
    a.render()
  }),
    e.on('click', '.layui-tab-title li', C.tabClick),
    u(window).on('resize', C.tabAuto),
    t(c, a)
})
layui.define(['lay', 'layer'], function (e) {
  'use strict'
  var F = layui.$
  var a = layui.lay
  var t = layui.layer
  var R = layui.device()
  var i = 'upload'
  var s = 'layui_' + i + '_index'
  var w = {
    config: {},
    index: layui[i] ? layui[i].index + 1e4 : 0,
    set: function (e) {
      var t = this
      return (t.config = F.extend({}, t.config, e)), t
    },
    on: function (e, t) {
      return layui.onevent.call(this, i, e, t)
    }
  }
  var o = function () {
    var t = this;
        var e = t.config.id
    return {
      upload: function (e) {
        t.upload.call(t, e)
      },
      reload: function (e) {
        t.reload.call(t, e)
      },
      config: (o.that[e] = t).config
    }
  }
  var r = 'layui-upload-file'
  var l = 'layui-upload-form'
  var E = 'layui-upload-iframe'
  var L = 'layui-upload-choose'
  var T = 'UPLOADING'
  var D = function (e) {
    var t = this
    ;(t.index = ++w.index), (t.config = F.extend({}, t.config, w.config, e)), t.render()
  }
  ;(D.prototype.config = {
    accept: 'images',
    exts: '',
    auto: !0,
    bindAction: '',
    url: '',
    force: '',
    field: 'file',
    acceptMime: '',
    method: 'post',
    data: {},
    drag: !0,
    size: 0,
    number: 0,
    multiple: !1,
    text: {
      'cross-domain': 'Cross-domain requests are not supported',
      'data-format-error': 'Please return JSON data format',
      'check-error': '',
      error: '',
      'limit-number': null,
      'limit-size': null
    }
  }),
    (D.prototype.reload = function (e) {
      var t = this
      ;(t.config = F.extend({}, t.config, e)), t.render(!0)
    }),
    (D.prototype.render = function (e) {
      var t = this
      var i = t.config
      var n = F(i.elem)
      return n.length > 1
        ? (layui.each(n, function () {
            w.render(F.extend({}, i, { elem: this }))
          }),
          t)
        : (F.extend(i, a.options(n[0], { attr: n.attr('lay-data') ? 'lay-data' : null })),
          !e && n[0] && n.data(s)
            ? (e = o.getThis(n.data(s)))
              ? e.reload(i)
              : void 0
            : ((i.elem = F(i.elem)), (i.bindAction = F(i.bindAction)), (i.id = 'id' in i ? i.id : n.attr('id') || t.index), t.file(), void t.events()))
    }),
    (D.prototype.file = function () {
      var e = this
      var t = e.config
      var i = (e.elemFile = F(['<input class="' + r + '" type="file" accept="' + t.acceptMime + '" name="' + t.field + '"', t.multiple ? ' multiple' : '', '>'].join('')))
      var n = t.elem.next()
      ;(n.hasClass(r) || n.hasClass(l)) && n.remove(),
        R.ie && R.ie < 10 && t.elem.wrap('<div class="layui-upload-wrap"></div>'),
        e.isFile() ? ((e.elemFile = t.elem), (t.field = t.elem[0].name)) : t.elem.after(i),
        R.ie && R.ie < 10 && e.initIE()
    }),
    (D.prototype.initIE = function () {
      var i
      var e = this.config
      var t = F('<iframe id="' + E + '" class="' + E + '" name="' + E + '" frameborder="0"></iframe>')
      var n = F(['<form target="' + E + '" class="' + l + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">', '</form>'].join(''))
      F('#' + E)[0] || F('body').append(t),
        e.elem.next().hasClass(l) ||
          (this.elemFile.wrap(n),
          e.elem.next('.' + l).append(
            ((i = []),
            layui.each(e.data, function (e, t) {
              ;(t = typeof t == 'function' ? t() : t), i.push('<input type="hidden" name="' + e + '" value="' + t + '">')
            }),
            i.join(''))
          ))
    }),
    (D.prototype.msg = function (e) {
      return t.msg(e, { icon: 2, shift: 6 })
    }),
    (D.prototype.isFile = function () {
      var e = this.config.elem[0]
      if (e) return e.tagName.toLocaleLowerCase() === 'input' && e.type === 'file'
    }),
    (D.prototype.preview = function (n) {
      window.FileReader &&
        layui.each(this.chooseFiles, function (e, t) {
          var i = new FileReader()
          i.readAsDataURL(t),
            (i.onload = function () {
              n && n(e, t, this.result)
            })
        })
    }),
    (D.prototype.upload = function (e, t) {
      var i
      var n
      var a
      var o
      var r
      var u = this
      var f = u.config
      var s = f.text || {}
      var l = u.elemFile[0]
      var c = function () {
        return e || u.files || u.chooseFiles || l.files
      }
      var d = function () {
        var a = 0;
            var o = 0;
            var r = c();
            var l = function () {
              f.multiple && a + o === u.fileLength && 'function' == typeof f.allDone && f.allDone({ total: u.fileLength, successful: a, failed: o })
            };
            var i = function (i) {
            var n = new FormData();
                var t = function (e) {
                i.unified
                  ? layui.each(r, function (e, t) {
                      delete t[T]
                    })
                  : delete e[T]
              }
            if (
              (layui.each(f.data, function (e, t) {
                ;(t = typeof t == 'function' ? (i.unified ? t() : t(i.index, i.file)) : t), n.append(e, t)
              }),
              i.unified)
            )
              {layui.each(r, function (e, t) {
                  t[T] || ((t[T] = !0), n.append(f.field, t))
                })}
            else {
              if (i.file[T]) return
              n.append(f.field, i.file), (i.file[T] = !0)
            }
            var e = {
              url: f.url,
              type: 'post',
              data: n,
              dataType: f.dataType || 'json',
              contentType: !1,
              processData: !1,
              headers: f.headers || {},
              success: function (e) {
                f.unified ? (a += u.fileLength) : a++, m(i.index, e), l(i.index), t(i.file)
              },
              error: function (e) {
                f.unified ? (o += u.fileLength) : o++,
                  u.msg(s.error || ['Upload failed, please try again.', 'status: ' + (e.status || '') + ' - ' + (e.statusText || 'error')].join('<br>')),
                  g(i.index, e.responseText),
                  l(i.index),
                  t(i.file)
              }
            }
            typeof f.progress == 'function' &&
              (e.xhr = function () {
                var e = F.ajaxSettings.xhr()
                return (
                  e.upload.addEventListener('progress', function (e) {
                    var t
                    e.lengthComputable && ((t = Math.floor((e.loaded / e.total) * 100)), f.progress(t, (f.item || f.elem)[0], e, i.index))
                  }),
                  e
                )
              }),
              F.ajax(e)
          }
        f.unified
          ? i({ unified: !0, index: 0 })
          : layui.each(r, function (e, t) {
              i({ index: e, file: t })
            })
      }
      var p = function () {
        var n = F('#' + E)
        u.elemFile.parent().submit(),
          clearInterval(D.timer),
          (D.timer = setInterval(function () {
            var e;
                var t = n.contents().find('body')
            try {
              e = t.text()
            } catch (i) {
              u.msg(s['cross-domain']), clearInterval(D.timer), g()
            }
            e && (clearInterval(D.timer), t.html(''), m(0, e))
          }, 30))
      }
      var h = function (e) {
        if (f.force === 'json' && typeof e != 'object')
          {try {
              return { status: 'CONVERTED', data: JSON.parse(e) }
            } catch (t) {
              return u.msg(s['data-format-error']), { status: 'FORMAT_ERROR', data: {} }
            }}
        return { status: 'DO_NOTHING', data: {} }
      }
      var m = function (e, t) {
        u.elemFile.next('.' + L).remove(), (l.value = '')
        var i = h(t)
        switch (i.status) {
          case 'CONVERTED':
            t = i.data
            break
          case 'FORMAT_ERROR':
            return
        }
        typeof f.done == 'function' &&
          f.done(t, e || 0, function (e) {
            u.upload(e)
          })
      }
      var g = function (e, t) {
        f.auto && (l.value = '')
        var i = h(t)
        switch (i.status) {
          case 'CONVERTED':
            t = i.data
            break
          case 'FORMAT_ERROR':
            return
        }
        typeof f.error == 'function' &&
          f.error(
            e || 0,
            function (e) {
              u.upload(e)
            },
            t
          )
      }
      var v = f.exts
      var y =
        ((n = []),
        layui.each(e || u.chooseFiles, function (e, t) {
          n.push(t.name)
        }),
        n)
      var x = {
        preview: function (e) {
          u.preview(e)
        },
        upload: function (e, t) {
          var i = {}
          ;(i[e] = t), u.upload(i)
        },
        pushFile: function () {
          return (
            (u.files = u.files || {}),
            layui.each(u.chooseFiles, function (e, t) {
              u.files[e] = t
            }),
            u.files
          )
        },
        resetFile: function (e, t, i) {
          t = new File([t], i)
          ;(u.files = u.files || {}), (u.files[e] = t)
        },
        getChooseFiles: function () {
          return u.chooseFiles
        }
      }
      var b = { file: '\u6587\u4ef6', images: '\u56fe\u7247', video: '\u89c6\u9891', audio: '\u97f3\u9891' }[f.accept] || '\u6587\u4ef6'
      var y = y.length === 0 ? l.value.match(/[^\/\\]+\..+/g) || [] : y
      if (y.length !== 0) {
        switch (f.accept) {
          case 'file':
            layui.each(y, function (e, t) {
              if (v && !RegExp('.\\.(' + v + ')$', 'i').test(escape(t))) return (i = !0)
            })
            break
          case 'video':
            layui.each(y, function (e, t) {
              if (!RegExp('.\\.(' + (v || 'avi|mp4|wma|rmvb|rm|flash|3gp|flv') + ')$', 'i').test(escape(t))) return (i = !0)
            })
            break
          case 'audio':
            layui.each(y, function (e, t) {
              if (!RegExp('.\\.(' + (v || 'mp3|wav|mid') + ')$', 'i').test(escape(t))) return (i = !0)
            })
            break
          default:
            layui.each(y, function (e, t) {
              if (!RegExp('.\\.(' + (v || 'jpg|png|gif|bmp|jpeg|svg|webp') + ')$', 'i').test(escape(t))) return (i = !0)
            })
        }
        if (i) return u.msg(s['check-error'] || '\u9009\u62e9\u7684' + b + '\u4e2d\u5305\u542b\u4e0d\u652f\u6301\u7684\u683c\u5f0f'), (l.value = '')
        if ((t !== 'choose' && !f.auto) || (f.choose && f.choose(x), t !== 'choose')) {
          if (
            ((u.fileLength =
              ((a = 0),
              (b = c()),
              layui.each(b, function () {
                a++
              }),
              a)),
            f.number && u.fileLength > f.number)
          ) {
            return u.msg(
              typeof s['limit-number'] == 'function'
                ? s['limit-number'](f, u.fileLength)
                : '\u540c\u65f6\u6700\u591a\u53ea\u80fd\u4e0a\u4f20: ' +
                    f.number +
                    ' \u4e2a\u6587\u4ef6<br>\u60a8\u5f53\u524d\u5df2\u7ecf\u9009\u62e9\u4e86: ' +
                    u.fileLength +
                    ' \u4e2a\u6587\u4ef6'
            )
          }
          if (f.size > 0 && !(R.ie && R.ie < 10)) {
            if (
              (layui.each(c(), function (e, t) {
                t.size > 1024 * f.size && ((t = (t = f.size / 1024) >= 1 ? t.toFixed(2) + 'MB' : f.size + 'KB'), (l.value = ''), (o = t))
              }),
              o)
            )
              {return u.msg('function' == typeof s['limit-size'] ? s['limit-size'](f, o) : '\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 ' + o)
          ;}}(r = function () {
            if (R.ie) return (R.ie > 9 ? d : p)()
            d()
          }),
            typeof f.before == 'function'
              ? w.util.promiseLikeResolve(f.before(x)).then(
                  function (e) {
                    !1 !== e ? r() : f.auto && (l.value = '')
                  },
                  function (e) {
                    f.auto && (l.value = ''), e !== undefined && layui.hint().error(e)
                  }
                )
              : r()
        }
      }
    }),
    (D.prototype.events = function () {
      var a = this
      var n = a.config
      var o = function (e) {
        ;(a.chooseFiles = {}),
          layui.each(e, function (e, t) {
            var i = new Date().getTime()
            a.chooseFiles[i + '-' + e] = t
          })
      }
      var r = function (e, t) {
        var i = a.elemFile;
            var e = (n.item || n.elem, e.length > 1 ? e.length + '\u4e2a\u6587\u4ef6' : (e[0] || {}).name || i[0].value.match(/[^\/\\]+\..+/g) || [])
        i.next().hasClass(L) && i.next().remove(), a.upload(null, 'choose'), a.isFile() || n.choose || i.after('<span class="layui-inline ' + L + '">' + e + '</span>')
      }
      var l = function (i) {
        var n = !0
        return (
          layui.each(a.files, function (e, t) {
            if (!(n = !(t.name === i.name))) return !0
          }),
          n
        )
      }
      var u = function (e) {
        var i = function (e) {
          ;(e.ext = e.name.substr(e.name.lastIndexOf('.') + 1).toLowerCase()), (e.sizes = w.util.parseSize(e.size))
        }
        return (
          e instanceof FileList
            ? layui.each(e, function (e, t) {
                i(t)
              })
            : i(e),
          e
        )
      }
      var f = function (e) {
        var i
        return (e = e || []).length
          ? a.files
            ? ((i = []),
              layui.each(e, function (e, t) {
                l(t) && i.push(u(t))
              }),
              i)
            : u(e)
          : []
      }
      n.elem.off('upload.start').on('upload.start', function () {
        var e = F(this)
        ;(a.config.item = e), a.elemFile[0].click()
      }),
        (R.ie && R.ie < 10) ||
          n.elem
            .off('upload.over')
            .on('upload.over', function () {
              F(this).attr('lay-over', '')
            })
            .off('upload.leave')
            .on('upload.leave', function () {
              F(this).removeAttr('lay-over')
            })
            .off('upload.drop')
            .on('upload.drop', function (e, t) {
              var i = F(this)
              var t = f(t.originalEvent.dataTransfer.files)
              i.removeAttr('lay-over'), o(t), n.auto ? a.upload() : r(t)
            }),
        a.elemFile.on('change', function () {
          var e = f(this.files)
          e.length !== 0 && (o(e), n.auto ? a.upload() : r(e))
        }),
        n.bindAction.off('upload.action').on('upload.action', function () {
          a.upload()
        }),
        n.elem.data(s) ||
          (n.elem.on('click', function () {
            a.isFile() || F(this).trigger('upload.start')
          }),
          n.drag &&
            n.elem
              .on('dragover', function (e) {
                e.preventDefault(), F(this).trigger('upload.over')
              })
              .on('dragleave', function (e) {
                F(this).trigger('upload.leave')
              })
              .on('drop', function (e) {
                e.preventDefault(), F(this).trigger('upload.drop', e)
              }),
          n.bindAction.on('click', function () {
            F(this).trigger('upload.action')
          }),
          n.elem.data(s, n.id))
    }),
    (w.util = {
      parseSize: function (e, t) {
        var i, n
        return (
          (t = t || 2),
          e != null && e
            ? ((i = typeof e == 'string' ? parseFloat(e) : e),
              (n = Math.floor(Math.log(i) / Math.log(1024))),
              (e = (e = i / Math.pow(1024, n)) % 1 == 0 ? e : parseFloat(e.toFixed(t))) + ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'][n])
            : '0'
        )
      },
      promiseLikeResolve: function (e) {
        var t = F.Deferred()
        return e && typeof e.then == 'function' ? e.then(t.resolve, t.reject) : t.resolve(e), t.promise()
      }
    }),
    (o.that = {}),
    (o.getThis = function (e) {
      var t = o.that[e]
      return t || hint.error(e ? i + " instance with ID '" + e + "' not found" : 'ID argument required'), t
    }),
    (w.render = function (e) {
      e = new D(e)
      return o.call(e)
    }),
    e(i, w)
})
layui.define(['lay', 'layer', 'util'], function (e) {
  'use strict'
  var T = layui.$
  var p = layui.layer
  var N = layui.util
  var l = layui.hint()
  var $ = (layui.device(), 'form')
  var d = '.layui-form'
  var A = 'layui-this'
  var j = 'layui-hide'
  var E = 'layui-disabled'
  var t = function () {
    this.config = {
      verify: {
        required: function (e) {
          if (!/[\S]+/.test(e)) return '\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a'
        },
        phone: function (e) {
          if (e && !/^1\d{10}$/.test(e)) return '\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e'
        },
        email: function (e) {
          if (e && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)) return '\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e'
        },
        url: function (e) {
          if (e && !/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/.test(e)) return '\u94fe\u63a5\u683c\u5f0f\u4e0d\u6b63\u786e'
        },
        number: function (e) {
          if (e && isNaN(e)) return '\u53ea\u80fd\u586b\u5199\u6570\u5b57'
        },
        date: function (e) {
          if (e && !/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/.test(e)) return '\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e'
        },
        identity: function (e) {
          if (e && !/(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(e)) return '\u8eab\u4efd\u8bc1\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e'
        }
      },
      autocomplete: null
    }
  }
  var i =
    ((t.prototype.set = function (e) {
      return T.extend(!0, this.config, e), this
    }),
    (t.prototype.verify = function (e) {
      return T.extend(!0, this.config.verify, e), this
    }),
    (t.prototype.getFormElem = function (e) {
      return T(d + (e ? '[lay-filter="' + e + '"]' : ''))
    }),
    (t.prototype.on = function (e, t) {
      return layui.onevent.call(this, $, e, t)
    }),
    (t.prototype.val = function (e, i) {
      return (
        this.getFormElem(e).each(function (e, t) {
          var a = T(this)
          layui.each(i, function (e, t) {
            var i
            var e = a.find('[name="' + e + '"]')
            e[0] &&
              ((i = e[0].type) === 'checkbox'
                ? (e[0].checked = t)
                : i === 'radio'
                ? e.each(function () {
                    this.checked = this.value == t + ''
                  })
                : e.val(t))
          })
        }),
        r.render(null, e),
        this.getValue(e)
      )
    }),
    (t.prototype.getValue = function (e, t) {
      t = t || this.getFormElem(e)
      var a = {}
      var n = {}
      var e = t.find('input,select,textarea')
      return (
        layui.each(e, function (e, t) {
          var i
          T(this)
          ;(t.name = (t.name || '').replace(/^\s*|\s*&/, '')),
            t.name &&
              (/^.*\[\]$/.test(t.name) && ((i = t.name.match(/^(.*)\[\]$/g)[0]), (a[i] = 0 | a[i]), (i = t.name.replace(/^(.*)\[\]$/, '$1[' + a[i]++ + ']'))),
              (/^(checkbox|radio)$/.test(t.type) && !t.checked) || (n[i || t.name] = t.value))
        }),
        n
      )
    }),
    (t.prototype.render = function (e, t) {
      var u = this
      var i = u.config
      var a = T(d + (t ? '[lay-filter="' + t + '"]' : ''))
      var n = {
        input: function (e) {
          var e = e || a.find('input,textarea');
                var t =
              (i.autocomplete && e.attr('autocomplete', i.autocomplete),
              function (e, t) {
                var i = e.val();
                      var a = Number(i);
                      var n = Number(e.attr('step')) || 1;
                      var l = Number(e.attr('min'));
                      var r = Number(e.attr('max'));
                      var s = Number(e.attr('lay-precision'));
                      var o = 'click' !== t && '' === i;
                      var c = t === 'init'
                isNaN(a) ||
                  (t === 'click' && (a = T(this).index() ? a - n : a + n),
                  (t = function (e) {
                    return ((e.toString().match(/\.(\d+$)/) || [])[1] || '').length
                  }),
                  (s = s >= 0 ? s : Math.max(t(n), t(i))),
                  o || (c || (r <= (a = a <= l ? l : a) && (a = r)), s === 0 ? (a = parseInt(a)) : s > 0 && (a = a.toFixed(s)), e.val(a)),
                  e[(a < l || r < a) && !o ? 'addClass' : 'removeClass']('layui-input-number-out-of-range'),
                  c) ||
                  ((n = { increment: e.next().find('.layui-icon-up'), decrement: e.next().find('.layui-icon-down') }).increment[r <= a && !o ? 'addClass' : 'removeClass'](E),
                  n.decrement[a <= l && !o ? 'addClass' : 'removeClass'](E))
              })
          a.find('input[lay-affix],textarea[lay-affix]').each(function () {
            var r = T(this);
                  var s = r.attr('lay-affix');
                  var o = 'layui-input-wrap';
                  var c = 'layui-input-suffix';
                  var u = 'layui-input-affix';
                  var e = r.is('[disabled]') || r.is('[readonly]');
                  var d = function (e, t) {
                    ;(e = T(e))[0] && e[T.trim(t) ? 'removeClass' : 'addClass'](j)
                  };
                  var n = function (i) {
                    i = T.extend({}, h[s] || { value: s }, i, lay.options(r[0]))
                    var a,
                      t = T('<div class="' + u + '">'),
                      e = layui.isArray(i.value) ? i.value : [i.value],
                      e = T(
                        ((a = []),
                        layui.each(e, function (e, t) {
                          a.push('<i class="layui-icon layui-icon-' + t + (i.disabled ? ' ' + E : '') + '"></i>')
                        }),
                        a.join(''))
                      ),
                      n = (t.append(e), i.split && t.addClass('layui-input-split'), i.className && t.addClass(i.className), r.next('.' + u)),
                      l = (n[0] && n.remove(), r.parent().hasClass(o) || r.wrap('<div class="' + o + '"></div>'), r.next('.' + c))
                    l[0]
                      ? ((n = l.find('.' + u))[0] && n.remove(),
                        l.prepend(t),
                        r.css('padding-right', function () {
                          return (r.closest('.layui-input-group')[0] ? 0 : l.outerWidth()) + t.outerWidth()
                        }))
                      : (t.addClass(c), r.after(t)),
                      'auto' === i.show && d(t, r.val()),
                      'function' == typeof i.init && i.init.call(this, r, i),
                      r.on('input propertychange', function () {
                        var e = this.value
                        'auto' === i.show && d(t, e)
                      }),
                      r.on('blur', function () {
                        'function' == typeof i.blur && i.blur.call(this, r, i)
                      }),
                      e.on('click', function () {
                        var e = r.attr('lay-filter')
                        T(this).hasClass(E) ||
                          ('function' == typeof i.click && i.click.call(this, r, i), layui.event.call(this, $, 'input-affix(' + e + ')', { elem: r[0], affix: s, options: i }))
                      })
                  };
                  var h = {
                eye: {
                  value: 'eye-invisible',
                  click: function (e, t) {
                    var i = 'LAY_FORM_INPUT_AFFIX_SHOW';
                          var a = e.data(i)
                    e.attr('type', a ? 'password' : 'text').data(i, !a), n({ value: a ? 'eye-invisible' : 'eye' })
                  }
                },
                clear: {
                  value: 'clear',
                  click: function (e) {
                    e.val('').focus(), d(T(this).parent(), null)
                  },
                  show: 'auto',
                  disabled: e
                },
                number: {
                  value: ['up', 'down'],
                  split: !0,
                  className: 'layui-input-number',
                  disabled: r.is('[disabled]'),
                  init: function (e) {
                    t.call(this, e, 'init')
                  },
                  click: function (e) {
                    t.call(this, e, 'click')
                  },
                  blur: function (e) {
                    t.call(this, e, 'blur')
                  }
                }
              }
            n()
          })
        },
        select: function (e) {
          var p = '\u8bf7\u9009\u62e9';
                var C = 'layui-form-select';
                var w = 'layui-select-none';
                var _ = 'layui-select-create-option';
                var f = 'layui-select-panel-elem-data';
                var e = e || a.find('select');
                var y = function (n, e, t, i, d, a) {
              var l;
                    var h;
                    var r;
                    var s;
                    var o;
                    var c;
                    var u;
                    var p;
                    var f;
                    var y = T(this);
                    var v = e;
                    var m = v.find('input');
                    var g = n.find('dl');
                    var b = (g.children('dd'), g.children('dt'));
                    var k = this.selectedIndex;
                    var x = ''
              t ||
                ((h = y.attr('lay-search')),
                (r = y.attr('lay-append-to') || 'body'),
                (s = y.attr('lay-append-position')),
                (o = !(!lay.ie || (lay.ie !== '10' && lay.ie !== '11') || !m.attr('placeholder'))),
                (c = function () {
                  a &&
                    (n.appendTo(r).css({ width: v.width() + 'px' }),
                    (e = function () {
                      lay.position(v[0], n[0], { position: s, allowBottomOut: !0, offset: [0, 5] })
                    })(),
                    T(window).on('resize.lay_select_resize', e))
                  var e = n.offset().top + n.outerHeight() + 5 - F.scrollTop();
                        var t = g.outerHeight();
                        var i = g.children('dd')
                  ;(k = y[0].selectedIndex),
                    v.parent().addClass(C + 'ed'),
                    i.removeClass(j),
                    b.removeClass(j),
                    i.removeClass(A),
                    k >= 0 && i.eq(k).addClass(A),
                    e + t > F.height() && t <= e && n.addClass(C + 'up'),
                    p(),
                    o &&
                      g.off('mousedown.lay_select_ieph').on('mousedown.lay_select_ieph', function () {
                        ;(m[0].__ieph = !0),
                          setTimeout(function () {
                            m[0].__ieph = !1
                          }, 60)
                      }),
                    (l = lay.onClickOutside(
                      (a ? n : g)[0],
                      function () {
                        u(), x && m.val(x)
                      },
                      { ignore: v }
                    ))
                }),
                (u = function (e) {
                  v.parent().removeClass(C + 'ed ' + C + 'up'),
                    m.blur(),
                    d && g.children('.' + _).remove(),
                    l && l(),
                    a && (n.detach(), T(window).off('resize.lay_select_resize')),
                    e ||
                      f(m.val(), function (e) {
                        var t = y[0].selectedIndex
                        e && ((x = T(y[0].options[t]).html()), t === 0 && x === m.attr('placeholder') && (x = ''), m.val(x || ''))
                      })
                }),
                (p = function () {
                  var e;
                        var t;
                        var i = g.children('dd.' + A)
                  i[0] &&
                    ((e = i.position().top), (t = g.height()), (i = i.height()), t < e && g.scrollTop(e + g.scrollTop() - t + i - 5), e < 0) &&
                    g.scrollTop(e + g.scrollTop() - 5)
                }),
                v.on('click', function (e) {
                  ;(v.parent().hasClass(C + 'ed') ? u : c)(), g.find('.' + w).remove()
                }),
                v.find('.layui-edge').on('click', function () {
                  m.focus()
                }),
                m
                  .on('keyup', function (e) {
                    e.keyCode === 9 && c()
                  })
                  .on('keydown', function (n) {
                    var e = n.keyCode;
                          var t =
                        (e === 9 && u(),
                        function (e) {
                          n.preventDefault()
                          var t;
                                var i;
                                var a = g.children('dd:not(.' + j + ',.' + E + ')')
                          a.length &&
                            ((t = a.length - 1),
                            (i = -1),
                            layui.each(a, function (e, t) {
                              if (T(t).hasClass(A)) return (i = e), !0
                            }),
                            (e = e === 'prev' ? (i - 1 < 0 ? t : i - 1) : t < i + 1 ? 0 : i + 1),
                            a.eq(e).addClass(A).siblings().removeClass(A),
                            p())
                        })
                    38 === e && t('prev'), e === 40 && t('next'), e === 13 && (n.preventDefault(), g.children('dd.' + A).trigger('click'))
                  })
                  .on('paste', function () {
                    c()
                  }),
                (f = function (n, e, l) {
                  var r = 0;
                        var t = g.children('dd');
                        var s = !1;
                        var o = n;
                        var c = 'cs' !== h;
                        var u = (function (e, t) {
                          var i = {},
                            a = ['^']
                          t && (e = e.toLowerCase())
                          for (var n = e.trim().split(''), l = 0; l < n.length; l++) {
                            var r = n[l]
                            i[r] = (i[r] || 0) + 1
                          }
                          for (r in i) {
                            a.push('(?=.*')
                            for (l = 0; l < i[r]; l++) a.push(r.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), l !== i[r] - 1 && a.push('.*')
                            a.push(')')
                          }
                          return a.push('.*'), new RegExp(a.join(''), t ? 'i' : undefined)
                        })((n = c ? n.toLowerCase() : n), c);
                        var t =
                      (layui.each(t, function () {
                        var e = T(this);
                              var t = e.text();
                              var i = d && e.hasClass(_);
                              var a = (d && !i && t === o && (s = !0), c && (t = t.toLowerCase()), !u.test(t))
                        ;(n === '' || l === 'blur' ? n !== t : a) && r++, l === 'keyup' && e[(d ? a && !i : a) ? 'addClass' : 'removeClass'](j)
                      }),
                      'keyup' === l &&
                        layui.each(b, function () {
                          var e = T(this);
                                var t = e.nextUntil('dt').filter('dd')
                          e[(t = d ? t.not('.' + _) : t).length == t.filter('.' + j).length ? 'addClass' : 'removeClass'](j)
                        }),
                      r === t.length)
                  return e(t, s), t
                }),
                i &&
                  m
                    .on(
                      'input propertychange',
                      layui.debounce(function (e) {
                        var n = this.value;
                              var t = e.keyCode
                        return (
                          9 !== t &&
                          t !== 13 &&
                          37 !== t &&
                          t !== 38 &&
                          t !== 39 &&
                          40 !== t &&
                          (o && e.target.__ieph
                            ? (e.target.__ieph = !1)
                            : (f(
                                n,
                                function (e, t) {
                                  var i, a
                                  d
                                    ? t
                                      ? g.children('.' + _).remove()
                                      : (t = g.children('.' + _))[0]
                                      ? t.attr('lay-value', n).html(N.escape(n))
                                      : ((t = T('<dd>').addClass(_).attr('lay-value', n).html(N.escape(n))),
                                        (a = (i = g.children().eq(0)).hasClass('layui-select-tips')),
                                        i[a ? 'after' : 'before'](t))
                                    : e
                                    ? g.find('.' + w)[0] || g.append('<p class="' + w + '">\u65e0\u5339\u914d\u9879</p>')
                                    : g.find('.' + w).remove()
                                },
                                'keyup'
                              ),
                              n === '' &&
                                (y.val(''), g.find('.' + A).removeClass(A), (y[0].options[0] || {}).value || g.children('dd:eq(0)').addClass(A), g.find('.' + w).remove(), d) &&
                                g.children('.' + _).remove(),
                              void p()))
                        )
                      }, 50)
                    )
                    .on('blur', function (e) {
                      var t = y[0].selectedIndex
                      ;(x = T(y[0].options[t]).text()),
                        0 === t && x === m.attr('placeholder') && (x = ''),
                        setTimeout(function () {
                          f(
                            m.val(),
                            function (e) {
                              x || m.val('')
                            },
                            'blur'
                          )
                        }, 200)
                    }),
                g.on('click', 'dd', function () {
                  var e;
                        var t = T(this);
                        var i = t.attr('lay-value');
                        var a = y.attr('lay-filter')
                  return (
                    t.hasClass(E) ||
                      (t.hasClass('layui-select-tips') ? m.val('') : (m.val(t.text()), t.addClass(A)),
                      d && t.hasClass(_) && (g.append(t.removeClass(_)), (e = T('<option>').attr('value', i).text(t.text())), y.append(e)),
                      t.siblings().removeClass(A),
                      y.val(i).removeClass('layui-form-danger'),
                      layui.event.call(this, $, 'select(' + a + ')', { elem: y[0], value: i, othis: n }),
                      u(!0)),
                    !1
                  )
                }),
                n.find('dl>dt').on('click', function (e) {
                  return !1
                }),
                a &&
                  e.on('_lay-select-destroy', function () {
                    n.remove()
                  }))
            }
          ;(T.event.special['_lay-select-destroy'] = {
            remove: function (e) {
              e.handler()
            }
          }),
            e.each(function (e, t) {
              var i = T(this);
                    var a = i.next('.' + C);
                    var n = this.disabled;
                    var l = t.value;
                    var r = T(t.options[t.selectedIndex]);
                    var t = t.options[0]
              if (typeof i.attr('lay-ignore') == 'string') return i.show()
              var s;
                    var o;
                    var c = 'string' == typeof i.attr('lay-search');
                    var u = 'string' == typeof i.attr('lay-creatable') && c;
                    var d = 'string' == typeof i.attr('lay-append-to');
                    var t = (t && !t.value && t.innerHTML) || p;
                    var h = T(['<div class="' + (c ? '' : 'layui-unselect ') + C, (n ? ' layui-select-disabled' : '') + '"></div>'].join(''));
                    var t = T(
                      [
                        '<div class="layui-select-title">',
                        '<input type="text" placeholder="' +
                          N.escape(T.trim(t)) +
                          '" value="' +
                          N.escape(T.trim(l ? r.html() : '')) +
                          '"' +
                          (!n && c ? '' : ' readonly') +
                          ' class="layui-input' +
                          (c ? '' : ' layui-unselect') +
                          (n ? ' ' + E : '') +
                          '">',
                        '<i class="layui-edge"></i>',
                        '</div>'
                      ].join('')
                    );
                    var r = T(
                  [
                    '<dl class="layui-anim layui-anim-upbit' + (i.find('optgroup')[0] ? ' layui-select-group' : '') + '">',
                    ((r = i.find('*')),
                    (s = []),
                    layui.each(r, function (e, t) {
                      var i = t.tagName.toLowerCase()
                      e !== 0 || t.value || i === 'optgroup'
                        ? s.push(
                            i === 'optgroup'
                              ? '<dt>' + t.label + '</dt>'
                              : '<dd lay-value="' + N.escape(t.value) + '" class="' + (l === t.value ? A : '') + (t.disabled ? ' ' + E : '') + '">' + T.trim(t.innerHTML) + '</dd>'
                          )
                        : s.push('<dd lay-value="" class="layui-select-tips">' + T.trim(t.innerHTML || p) + '</dd>')
                    }),
                    s.length === 0 && s.push('<dd lay-value="" class="' + E + '">\u6ca1\u6709\u9009\u9879</dd>'),
                    s.join('') + '</dl>')
                  ].join('')
                )
              a[0] && (d && (o = a.data(f)) && o.remove(), a.remove()),
                d
                  ? (h.append(t), i.after(h), (o = T('<div class="' + C + ' layui-select-panel-wrap"></div>').append(r)), h.data(f, o), y.call(this, o, t, n, c, u, d))
                  : (h.append(t).append(r), i.after(h), y.call(this, h, t, n, c, u, d))
            })
        },
        checkbox: function (e) {
          var c = {
              checkbox: ['layui-form-checkbox', 'layui-form-checked', 'checkbox'],
              switch: ['layui-form-switch', 'layui-form-onswitch', 'switch'],
              SUBTRA: 'layui-icon-indeterminate'
            };
                var e = e || a.find('input[type=checkbox]')
          e.each(function (e, t) {
            var i = T(this);
                  var a = i.attr('lay-skin') || 'primary';
                  var n = N.escape(T.trim(t.title || (t.title = i.attr('lay-text') || '')));
                  var l = this.disabled;
                  var r = c[a] || c.checkbox;
                  var s = i.next('.' + r[0]);
                  var o = (s[0] && s.remove(), [])
            if (
              (i.next('[lay-checkbox]')[0] &&
                ((s = i.next()), (n = s.html() || ''), s[0].attributes.length > 1) &&
                layui.each(s[0].attributes, function (e, t) {
                  'lay-checkbox' !== t.name && o.push(t.name + '="' + t.value + '"')
                }),
              (o = o.join(' ')),
              (n = a === 'switch' ? n.split('|') : [n]),
              typeof i.attr('lay-ignore') == 'string')
            )
              return i.show()
            l = T(
              [
                '<div class="layui-unselect ' + r[0],
                t.checked ? ' ' + r[1] : '',
                l ? ' layui-checkbox-disabled ' + E : '',
                '"',
                a ? ' lay-skin="' + a + '"' : '',
                '>',
                (s = {
                  checkbox: [
                    n[0] ? '<div ' + o + '>' + n[0] + '</div>' : a === 'primary' ? '' : '<div></div>',
                    '<i class="layui-icon ' + (a === 'primary' && !t.checked && i.get(0).indeterminate ? c.SUBTRA : 'layui-icon-ok') + '"></i>'
                  ].join(''),
                  switch: '<div>' + ((!t.checked && n[1]) || n[0] || '') + '</div><i></i>'
                })[a] || s.checkbox,
                '</div>'
              ].join('')
            )
            i.after(l),
              function (t, i) {
                var a = T(this);
                      var e = a.attr('lay-skin') || 'primary';
                      var n = 'switch' === e;
                      var e = e === 'primary'
                t.on('click', function () {
                  var e = a.attr('lay-filter')
                  a[0].disabled ||
                    (a[0].indeterminate && (a[0].indeterminate = !1),
                    (a[0].checked = !a[0].checked),
                    layui.event.call(a[0], $, i[2] + '(' + e + ')', { elem: a[0], value: a[0].value, othis: t }))
                }),
                  u.syncAppearanceOnPropChanged(this, 'checked', function () {
                    var e
                    n && ((e = (t.next('*[lay-checkbox]')[0] ? t.next().html() : a.attr('title') || '').split('|')), t.children('div').html((!this.checked && e[1]) || e[0])),
                      t.toggleClass(i[1], this.checked)
                  }),
                  e &&
                    u.syncAppearanceOnPropChanged(this, 'indeterminate', function () {
                      this.indeterminate
                        ? t.children('.layui-icon-ok').removeClass('layui-icon-ok').addClass(c.SUBTRA)
                        : t
                            .children('.' + c.SUBTRA)
                            .removeClass(c.SUBTRA)
                            .addClass('layui-icon-ok')
                    })
              }.call(this, l, r)
          })
        },
        radio: function (e) {
          var o = 'layui-form-radio';
                var c = ['layui-icon-radio', 'layui-icon-circle'];
                var e = e || a.find('input[type=radio]')
          e.each(function (e, t) {
            var i = T(this);
                  var a = i.next('.' + o);
                  var n = this.disabled;
                  var l = i.attr('lay-skin')
            if (typeof i.attr('lay-ignore') == 'string') return i.show()
            a[0] && a.remove()
            var a = N.escape(t.title || '');
                  var r = [];
                  var s =
                (i.next('[lay-radio]')[0] &&
                  ((a = (s = i.next()).html() || ''), s[0].attributes.length > 1) &&
                  layui.each(s[0].attributes, function (e, t) {
                    t.name !== 'lay-radio' && r.push(t.name + '="' + t.value + '"')
                  }),
                (r = r.join(' ')),
                T(
                  [
                    '<div class="layui-unselect ' + o,
                    t.checked ? ' ' + o + 'ed' : '',
                    (n ? ' layui-radio-disabled ' + E : '') + '"',
                    l ? ' lay-skin="' + l + '"' : '',
                    '>',
                    '<i class="layui-anim layui-icon ' + c[t.checked ? 0 : 1] + '"></i>',
                    '<div ' + r + '>' + a + '</div>',
                    '</div>'
                  ].join('')
                ))
            i.after(s),
              function (i) {
                var a = T(this);
                      var n = 'layui-anim-scaleSpring'
                i.on('click', function () {
                  var e = a.attr('lay-filter')
                  a[0].disabled || ((a[0].checked = !0), layui.event.call(a[0], $, 'radio(' + e + ')', { elem: a[0], value: a[0].value, othis: i }))
                }),
                  u.syncAppearanceOnPropChanged(this, 'checked', function () {
                    var e;
                          var t = this
                    t.checked
                      ? (i.addClass(o + 'ed'),
                        i.children('.layui-icon').addClass(n + ' ' + c[0]),
                        (e = a.parents(d).find('input[name=' + t.name.replace(/(\.|#|\[|\])/g, '\\$1') + ']')),
                        layui.each(e, function () {
                          t !== this && (this.checked = !1)
                        }))
                      : (i.removeClass(o + 'ed'),
                        i
                          .children('.layui-icon')
                          .removeClass(n + ' ' + c[0])
                          .addClass(c[1]))
                  })
              }.call(this, s)
          })
        }
      }
      var t = function () {
        layui.each(n, function (e, t) {
          t()
        })
      }
      return (
        layui.type(e) === 'object'
          ? T(e).is(d)
            ? ((a = T(e)), t())
            : e.each(function (e, t) {
                var i = T(t)
                i.closest(d).length && (t.tagName === 'SELECT' ? n.select(i) : t.tagName === 'INPUT' && ((t = t.type) === 'checkbox' || t === 'radio' ? n[t](i) : n.input(i)))
              })
          : e
          ? n[e]
            ? n[e]()
            : l.error('\u4e0d\u652f\u6301\u7684 "' + e + '" \u8868\u5355\u6e32\u67d3')
          : t(),
        u
      )
    }),
    (t.prototype.syncAppearanceOnPropChanged = function (e, t, i) {
      var a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, t)
      Object.defineProperty(
        e,
        t,
        lay.extend({}, a, {
          get: function () {
            return a.get.call(this)
          },
          set: function (e) {
            a.set.call(this, e), i.call(this)
          }
        })
      )
    }),
    (t.prototype.validate = function (e) {
      var u
      var d = this.config.verify
      var h = 'layui-form-danger'
      return (
        !(e = T(e))[0] ||
        ((e.attr('lay-verify') !== undefined || !1 !== this.validate(e.find('*[lay-verify]'))) &&
          (layui.each(e, function (e, r) {
            var s = T(this)
            var t = (s.attr('lay-verify') || '').split('|')
            var o = s.attr('lay-vertype')
            var c = T.trim(s.val())
            if (
              (s.removeClass(h),
              layui.each(t, function (e, t) {
                var i = ''
                var a = d[t]
                if (a) {
                  var n = typeof a == 'function' ? (i = a(c, r)) : !a[0].test(c)
                  var l = 'select' === r.tagName.toLowerCase() || /^(checkbox|radio)$/.test(r.type)
                  var i = i || a[1]
                  if ((t === 'required' && (i = s.attr('lay-reqtext') || i), n)) {
                    return (
                      o === 'tips'
                        ? p.tips(i, typeof s.attr('lay-ignore') != 'string' && l ? s.next() : s, { tips: 1 })
                        : o === 'alert'
                        ? p.alert(i, { title: '\u63d0\u793a', shadeClose: !0 })
                        : /\b(string|number)\b/.test(typeof i) && p.msg(i, { icon: 5, shift: 6 }),
                      setTimeout(function () {
                        ;(l ? s.next().find('input') : r).focus()
                      }, 7),
                      s.addClass(h),
                      (u = !0)
                    )
                  }
                }
              }),
              u) { return u }
            }
          }),
          !u))
      )
    }),
    (t.prototype.submit = function (e, t) {
      var i = {}
      var a = T(this)
      var e = 'string' == typeof e ? e : a.attr('lay-filter')
      var n = this.getFormElem ? this.getFormElem(e) : a.parents(d).eq(0)
      var l = n.find('*[lay-verify]')
      return (
        !!r.validate(l) &&
        ((i = r.getValue(null, n)),
        (l = { elem: this.getFormElem ? window.event && window.event.target : this, form: (this.getFormElem ? n : a.parents('form'))[0], field: i }),
        typeof t == 'function' && t(l),
        layui.event.call(this, $, 'submit(' + e + ')', l))
      )
    }))
  var r = new t()
  var t = T(document)
  var F = T(window)
  T(function () {
    r.render()
  }),
    t.on('reset', d, function () {
      var e = T(this).attr('lay-filter')
      setTimeout(function () {
        r.render(null, e)
      }, 50)
    }),
    t.on('submit', d, i).on('click', '*[lay-submit]', i),
    e($, r)
})
layui.define(['lay', 'laytpl', 'laypage', 'form', 'util'], function (s) {
  'use strict'
  var p = layui.$
  var d = layui.lay
  var m = layui.laytpl
  var z = layui.laypage
  var f = layui.layer
  var i = layui.form
  var v = layui.util
  var g = layui.hint()
  var b = layui.device()
  var x = {
    config: { checkName: 'LAY_CHECKED', indexName: 'LAY_INDEX', numbersName: 'LAY_NUM', disabledName: 'LAY_DISABLED' },
    cache: {},
    index: layui.table ? layui.table.index + 1e4 : 0,
    set: function (e) {
      return (this.config = p.extend({}, this.config, e)), this
    },
    on: function (e, t) {
      return layui.onevent.call(this, T, e, t)
    }
  }
  var k = function () {
    var a = this;
        var e = a.config;
        var i = e.id || e.index
    return {
      config: e,
      reload: function (e, t) {
        a.reload.call(a, e, t)
      },
      reloadData: function (e, t) {
        x.reloadData(i, e, t)
      },
      setColsWidth: function () {
        a.setColsWidth.call(a)
      },
      resize: function () {
        a.resize.call(a)
      }
    }
  }
  var w = function (e) {
    var t = k.that[e]
    return t || g.error(e ? "The table instance with ID '" + e + "' not found" : 'ID argument required'), t || null
  }
  var l = function (e) {
    var t = k.config[e]
    return t || g.error(e ? "The table instance with ID '" + e + "' not found" : 'ID argument required'), t || null
  }
  var C = function (e) {
    var t = this.config || {};
        var a = (e = e || {}).item3;
        var i = e.content
    'numbers' === a.type && (i = e.tplData[x.config.numbersName])
    ;('escape' in a ? a : t).escape && (i = v.escape(i))
    t = (e.text && a.exportTemplet) || a.templet || a.toolbar
    return (
      t &&
        (i =
          'function' == typeof t
            ? t.call(a, e.tplData, e.obj)
            : m(
                (function (e) {
                  try {
                    return d(e).html()
                  } catch (t) {
                    return e
                  }
                })(t) || String(i)
              ).render(p.extend({ LAY_COL: a }, e.tplData))),
      e.text ? p('<div>' + i + '</div>').text() : i
    )
  }
  var T = 'table'
  var N = 'lay-' + T + '-id'
  var t = '.layui-table'
  var R = 'layui-hide'
  var y = 'layui-hide-v'
  var h = 'layui-none'
  var D = 'layui-table-view'
  var o = '.layui-table-header'
  var A = '.layui-table-body'
  var O = '.layui-table-fixed-r'
  var P = '.layui-table-pageview'
  var E = '.layui-table-sort'
  var _ = 'layui-table-checked'
  var L = 'layui-table-edit'
  var M = 'layui-table-hover'
  var u = 'laytable-cell-group'
  var W = 'layui-table-col-special'
  var H = 'layui-table-tool-panel'
  var j = 'layui-table-expanded'
  var I = 'layui-table-disabled-transition'
  var S = 'LAY_TABLE_MOVE_DICT'
  var e = function (e) {
    return [
      '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
      '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
      '<thead>',
      '{{# layui.each(d.data.cols, function(i1, item1){ }}',
      '<tr>',
      '{{# layui.each(item1, function(i2, item2){ }}',
      '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}',
      '{{# if(item2.fixed === "right"){ right = true; } }}',
      (e = e || {}).fixed && e.fixed !== 'right' ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : e.fixed === 'right' ? '{{# if(item2.fixed === "right"){ }}' : '',
      '{{# var isSort = !(item2.colGroup) && item2.sort; }}',
      '<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{# if(item2.maxWidth){ }}data-maxwidth="{{=item2.maxWidth}}"{{# } }} {{# if(item2.style){ }}style="{{=item2.style}}"{{# } }} {{#var colspan = layui.type(item2.colspan2) === \'number\' ? item2.colspan2 : item2.colspan; if(colspan){}} colspan="{{=colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}"{{# if(item2.title){ }} title="{{ layui.$(\'<div>\' + item2.title + \'</div>\').text() }}"{{# } }}>',
      '<div class="layui-table-cell laytable-cell-',
      '{{# if(item2.colGroup){ }}',
      'group',
      '{{# } else { }}',
      '{{=d.index}}-{{=i1}}-{{=i2}}',
      '{{# if(item2.type !== "normal"){ }}',
      ' laytable-cell-{{= item2.type }}',
      '{{# } }}',
      '{{# } }}',
      '" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>',
      '{{# if(item2.type === "checkbox"){ }}',
      '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',
      '{{# } else { }}',
      '<span>{{-item2.title||""}}</span>',
      '{{# if(isSort){ }}',
      '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>',
      '{{# } }}',
      '{{# } }}',
      '</div>',
      '</th>',
      e.fixed ? '{{# }; }}' : '',
      '{{# }); }}',
      '</tr>',
      '{{# }); }}',
      '</thead>',
      '</table>'
    ].join('')
  }
  var a = [
    '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
    '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
    '<tbody></tbody>',
    '</table>'
  ].join('')
  var B = [
    ,
    '{{# if(d.data.toolbar){ }}',
    '<div class="layui-table-tool">',
    '<div class="layui-table-tool-temp"></div>',
    '<div class="layui-table-tool-self"></div>',
    '</div>',
    '{{# } }}',
    '<div class="layui-table-box">',
    '{{# if(d.data.loading){ }}',
    '<div class="layui-table-init">',
    '<div class="layui-table-loading-icon">',
    '{{# if(typeof d.data.loading === "string"){ }}',
    '{{- d.data.loading}}',
    '{{# } else{ }}',
    '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
    '{{# } }}',
    '</div>',
    '</div>',
    '{{# } }}',
    '{{# var left, right; }}',
    '<div class="layui-table-header">',
    e(),
    '</div>',
    '<div class="layui-table-body layui-table-main">',
    a,
    '</div>',
    '{{# if(left){ }}',
    '<div class="layui-table-fixed layui-table-fixed-l">',
    '<div class="layui-table-header">',
    e({ fixed: !0 }),
    '</div>',
    '<div class="layui-table-body">',
    a,
    '</div>',
    '</div>',
    '{{# }; }}',
    '{{# if(right){ }}',
    '<div class="layui-table-fixed layui-table-fixed-r layui-hide">',
    '<div class="layui-table-header">',
    e({ fixed: 'right' }),
    '<div class="layui-table-mend"></div>',
    '</div>',
    '<div class="layui-table-body">',
    a,
    '</div>',
    '</div>',
    '{{# }; }}',
    '</div>',
    '{{# if(d.data.totalRow){ }}',
    '<div class="layui-table-total">',
    '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
    '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
    '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',
    '</table>',
    '</div>',
    '{{# } }}',
    '<div class="layui-table-column layui-table-page layui-hide">',
    '<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>',
    '</div>'
  ].join('')
  var r = p(window)
  var F = p(document)
  var n = function (e) {
    ;(this.index = ++x.index), (this.config = p.extend({}, this.config, x.config, e)), this.render()
  }
  var c =
    ((n.prototype.config = {
      limit: 10,
      loading: !0,
      escape: !0,
      cellMinWidth: 60,
      cellMaxWidth: Number.MAX_VALUE,
      editTrigger: 'click',
      defaultToolbar: ['filter', 'exports', 'print'],
      defaultContextmenu: !0,
      autoSort: !0,
      text: { none: '\u65e0\u6570\u636e' },
      cols: []
    }),
    (n.prototype.render = function (e) {
      var t = this
      var a = t.config
      var i = ((a.elem = p(a.elem)), (a.where = a.where || {}), (a.id = 'id' in a ? a.id : a.elem.attr('id') || t.index))
      if (
        ((k.that[i] = t),
        ((k.config[i] = a).request = p.extend({ pageName: 'page', limitName: 'limit' }, a.request)),
        (a.response = p.extend({ statusName: 'code', statusCode: 0, msgName: 'msg', dataName: 'data', totalRowName: 'totalRow', countName: 'count' }, a.response)),
        a.page !== null &&
          typeof a.page == 'object' &&
          ((a.limit = a.page.limit || a.limit), (a.limits = a.page.limits || a.limits), (t.page = a.page.curr = a.page.curr || 1), delete a.page.elem, delete a.page.jump),
        !a.elem[0])
      ) {
        return t
      }
      if ((a.elem.attr('lay-filter') || a.elem.attr('lay-filter', a.id), e === 'reloadData')) return t.pullData(t.page, { type: 'reloadData' })
      ;(a.index = t.index),
        (t.key = a.id || a.index),
        t.setInit(),
        a.height && /^full-.+$/.test(a.height)
          ? ((t.fullHeightGap = a.height.split('-')[1]), (a.height = r.height() - (parseFloat(t.fullHeightGap) || 0)))
          : a.height && /^#\w+\S*-.+$/.test(a.height)
          ? ((i = a.height.split('-')), (t.parentHeightGap = i.pop()), (t.parentDiv = i.join('-')), (a.height = p(t.parentDiv).height() - (parseFloat(t.parentHeightGap) || 0)))
          : typeof a.height == 'function' && ((t.customHeightFunc = a.height), (a.height = t.customHeightFunc()))
      var l
      var e = a.elem
      var i = e.next('.' + D)
      var n = (t.elem = p('<div></div>'))
      n
        .addClass(((l = [D, D + '-' + t.index, 'layui-form', 'layui-border-box']), a.className && l.push(a.className), l.join(' ')))
        .attr((((l = { 'lay-filter': 'LAY-TABLE-FORM-DF-' + t.index, style: ((l = []), a.width && l.push('width:' + a.width + 'px;'), l.join('')) })[N] = a.id), l))
        .html(m(B, { open: '{{', close: '}}' }).render({ data: a, index: t.index })),
        t.renderStyle(),
        i[0] && (t.resizeObserver && t.resizeObserver.unobserve(t.elem[0]), i.remove()),
        e.after(n),
        (t.layTool = n.find('.layui-table-tool')),
        (t.layBox = n.find('.layui-table-box')),
        (t.layHeader = n.find(o)),
        (t.layMain = n.find('.layui-table-main')),
        (t.layBody = n.find(A)),
        (t.layFixed = n.find('.layui-table-fixed')),
        (t.layFixLeft = n.find('.layui-table-fixed-l')),
        (t.layFixRight = n.find(O)),
        (t.layTotal = n.find('.layui-table-total')),
        (t.layPage = n.find('.layui-table-page')),
        t.renderToolbar(),
        t.renderPagebar(),
        t.fullSize(),
        t.pullData(t.page),
        t.events()
    }),
    (n.prototype.initOpts = function (e) {
      this.config
      e.checkbox && (e.type = 'checkbox'),
        e.space && (e.type = 'space'),
        e.type || (e.type = 'normal'),
        e.type !== 'normal' && ((e.unresize = !0), (e.width = e.width || { checkbox: 50, radio: 50, space: 30, numbers: 60 }[e.type]))
    }),
    (n.prototype.setInit = function (e) {
      var l
      var a
      var r = this
      var d = r.config
      if (
        ((d.clientWidth =
          d.width ||
          (l = function (e) {
            var t
            var a = (e = e || d.elem.parent()).width()
            try {
              t = e.css('display') === 'none'
            } catch (i) {}
            return !e[0] || (a && !t) ? a : l(e.parent())
          })()),
        e === 'width')
      ) {
        return d.clientWidth
      }
      ;(d.height = d.maxHeight || d.height),
        d.css &&
          d.css.indexOf(D) === -1 &&
          ((a = d.css.split('}')),
          layui.each(a, function (e, t) {
            t && (a[e] = '.' + D + '-' + r.index + ' ' + t)
          }),
          (d.css = a.join('}')))
      var c = function (a, e, i, l) {
        var n, o
        l
          ? ((l.key = [d.index, a, i].join('-')),
            (l.colspan = l.colspan || 0),
            (l.rowspan = l.rowspan || 0),
            r.initOpts(l),
            (n = a + (parseInt(l.rowspan) || 1)) < d.cols.length
              ? ((l.colGroup = !0),
                (o = 0),
                layui.each(d.cols[n], function (e, t) {
                  t.HAS_PARENT ||
                    (o >= 1 && o == (l.colspan || 1)) ||
                    ((t.HAS_PARENT = !0), (t.parentKey = [d.index, a, i].join('-')), (o += parseInt(t.colspan > 1 ? t.colspan : 1)), c(n, d.cols[n], e, t))
                }))
              : (l.colGroup = !1),
            (l.hide = (l.hide && !l.colGroup) || !1))
          : e.splice(i, 1)
      }
      layui.each(d.cols, function (a, i) {
        layui.each(i, function (e, t) {
          a ? delete t.HAS_PARENT : c(a, i, e, t)
        })
      })
    }),
    (n.prototype.renderStyle = function () {
      var e
      var a
      var t
      var i
      var l = this.config
      var n = this.index
      var o = []
      layui.each(l.cols, function (a, e) {
        layui.each(e, function (e, t) {
          ;(e = [n, a, e].join('-')), (t = ['width: ', t.width || l.cellMinWidth, 'px'].join(''))
          o.push('.laytable-cell-' + e + '{' + t + '}')
        })
      }),
        (e = l.lineStyle) &&
          ((a = '.layui-table-view-' + n + ' .layui-table-body .layui-table tr'),
          (t = e.split(';')),
          (i = 'none'),
          layui.each(t, function (e, t) {
            if ((t = t.split(':'))[0] === 'height') return (t = parseFloat(t[1])), isNaN(t) || (i = t - 1 + 'px'), !0
          }),
          layui.each(
            [
              '{' + e + '}',
              '.layui-table-cell{height: auto; max-height: ' + i + '; white-space: normal; text-overflow: clip;}',
              '> td:hover > .layui-table-cell{overflow: auto;}'
            ].concat(b.ie ? ['.layui-table-edit{height: ' + i + ';}', 'td[data-edit]:hover:after{height: ' + i + ';}'] : []),
            function (e, t) {
              t && o.push(a + ' ' + t)
            }
          )),
        l.css && o.push(l.css),
        d.style({ target: this.elem[0], text: o.join(''), id: 'DF-table-' + n })
    }),
    (n.prototype.renderToolbar = function () {
      var l
      var o = this
      var e = o.config
      var r = e.elem.attr('lay-filter')
      var t = [
        '<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>',
        '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>',
        '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'
      ].join('')
      var a = o.layTool.find('.layui-table-tool-temp')
      var n =
        (e.toolbar === 'default' ? a.html(t) : typeof e.toolbar == 'string' && (t = p(e.toolbar).html() || '') && a.html(m(t).render(e)),
        {
          filter: {
            title: '\u7b5b\u9009\u5217',
            layEvent: 'LAYTABLE_COLS',
            icon: 'layui-icon-cols',
            onClick: function (e) {
              var a
              var n = e.config
              ;(0, e.openPanel)({
                list:
                  ((a = []),
                  o.eachCols(function (e, t) {
                    t.field &&
                      t.type == 'normal' &&
                      a.push(
                        '<li><input type="checkbox" name="' +
                          t.field +
                          '" data-key="' +
                          t.key +
                          '" data-parentkey="' +
                          (t.parentKey || '') +
                          '" lay-skin="primary" ' +
                          (t.hide ? '' : 'checked') +
                          ' title="' +
                          v.escape(p('<div>' + (t.fieldTitle || t.title || t.field) + '</div>').text()) +
                          '" lay-filter="LAY_TABLE_TOOL_COLS"></li>'
                      )
                  }),
                  a.join('')),
                done: function () {
                  i.on('checkbox(LAY_TABLE_TOOL_COLS)', function (e) {
                    var e = p(e.elem)
                    var t = this.checked
                    var a = e.data('key')
                    var i = o.col(a)
                    var l = i.hide
                    var e = e.data('parentkey')
                    i.key &&
                      ((i.hide = !t),
                      o.elem.find('*[data-key="' + a + '"]')[t ? 'removeClass' : 'addClass'](R),
                      l != i.hide && o.setParentCol(!t, e),
                      o.resize(),
                      layui.event.call(this, T, 'colToggled(' + r + ')', { col: i, config: n }))
                  })
                }
              })
            }
          },
          exports: {
            title: '\u5bfc\u51fa',
            layEvent: 'LAYTABLE_EXPORT',
            icon: 'layui-icon-export',
            onClick: function (e) {
              var t = e.data
              var a = e.config
              var i = e.openPanel
              var e = e.elem
              if (!t.length) return f.tips('\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e', e, { tips: 3 })
              b.ie
                ? f.tips('\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa', e, { tips: 3 })
                : i({
                    list: ['<li data-type="csv">\u5bfc\u51fa CSV \u6587\u4ef6</li>'].join(''),
                    done: function (e, t) {
                      t.on('click', function () {
                        var e = p(this).data('type')
                        x.exportFile.call(o, a.id, null, e)
                      })
                    }
                  })
            }
          },
          print: {
            title: '\u6253\u5370',
            layEvent: 'LAYTABLE_PRINT',
            icon: 'layui-icon-print',
            onClick: function (e) {
              var t = e.data
              var e = (e.config, e.elem)
              if (!t.length) return f.tips('\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e', e, { tips: 3 })
              var t = window.open('about:blank', '_blank')
              var e = [
                '<style>',
                'body{font-size: 12px; color: #5F5F5F;}',
                'table{width: 100%; border-collapse: collapse; border-spacing: 0;}',
                'th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}',
                'a{color: #5F5F5F; text-decoration:none;}',
                'img{max-height: 100%;}',
                '*.layui-hide{display: none}',
                '</style>'
              ].join('')
              var a = p(o.layHeader.html())
              a.append(o.layMain.find('table').html()),
                a.append(o.layTotal.find('table').html()),
                a.find('th.layui-table-patch').remove(),
                a
                  .find('thead>tr>th.' + W)
                  .filter(function (e, t) {
                    return !p(t).children('.' + u).length
                  })
                  .remove(),
                a.find('tbody>tr>td.' + W).remove(),
                t.document.write(e + a.prop('outerHTML')),
                t.document.close(),
                layui.device('edg').edg ? ((t.onafterprint = t.close), t.print()) : (t.print(), t.close())
            }
          }
        })
      typeof e.defaultToolbar == 'object' &&
        ((l = []),
        (e.defaultToolbar = p.map(e.defaultToolbar, function (e, t) {
          var a = typeof e == 'string';
              var i = a ? n[e] : e
          return (
            i &&
              (!(i = i.name && n[i.name] ? p.extend({}, n[i.name], i) : i).name && a && (i.name = e),
              l.push('<div class="layui-inline" title="' + i.title + '" lay-event="' + i.layEvent + '"><i class="layui-icon ' + i.icon + '"></i></div>')),
            i
          )
        })),
        o.layTool.find('.layui-table-tool-self').html(l.join('')))
    }),
    (n.prototype.renderPagebar = function () {
      var e
      var t = this.config
      var a = (this.layPagebar = p('<div class="layui-inline layui-table-pagebar"></div>'))
      t.pagebar && ((e = p(t.pagebar).html() || '') && a.append(m(e).render(t)), this.layPage.append(a))
    }),
    (n.prototype.setParentCol = function (e, t) {
      var a = this.config
      var i = this.layHeader.find('th[data-key="' + t + '"]')
      var l = parseInt(i.attr('colspan')) || 0
      i[0] &&
        ((t = t.split('-')),
        (t = a.cols[t[1]][t[2]]),
        e ? l-- : l++,
        i.attr('colspan', l),
        i[l ? 'removeClass' : 'addClass'](R),
        (t.colspan2 = l),
        (t.hide = l < 1),
        (a = i.data('parentkey'))) &&
        this.setParentCol(e, a)
    }),
    (n.prototype.setColsPatch = function () {
      var a = this
      var e = a.config
      layui.each(e.cols, function (e, t) {
        layui.each(t, function (e, t) {
          t.hide && a.setParentCol(t.hide, t.parentKey)
        })
      })
    }),
    (n.prototype.setGroupWidth = function (i) {
      var e
      var l = this
      l.config.cols.length <= 1 ||
        ((e = l.layHeader.find((i ? 'th[data-key=' + i.data('parentkey') + ']>' : '') + '.' + u)).css('width', 0),
        layui.each(e.get().reverse(), function () {
          var e = p(this)
          var t = e.parent().data('key')
          var a = 0
          l.layHeader
            .eq(0)
            .find('th[data-parentkey=' + t + ']')
            .width(function (e, t) {
              p(this).hasClass(R) || (t > 0 && (a += t))
            }),
            a && e.css('max-width', a - 1),
            i && e.parent().data('parentkey') && l.setGroupWidth(e.parent())
        }),
        e.css('width', 'auto'))
    }),
    (n.prototype.setColsWidth = function () {
      var t
      var a
      var n = this
      var r = n.config
      var i = 0
      var d = 0
      var c = 0
      var s = 0
      var u = n.setInit('width')
      var e =
        (n.eachCols(function (e, t) {
          t.hide || i++
        }),
        (u = u - (r.skin === 'line' || r.skin === 'nob' ? 2 : i + 1) - n.getScrollWidth(n.layMain[0]) - 1),
        function (o) {
          layui.each(r.cols, function (e, n) {
            layui.each(n, function (e, t) {
              var a = 0;
                    var i = t.minWidth || r.cellMinWidth;
                    var l = t.maxWidth || r.cellMaxWidth
              t
                ? t.colGroup ||
                  t.hide ||
                  (o
                    ? c && c < i
                      ? (d--, (a = i))
                      : c && l < c && (d--, (a = l))
                    : ((a = t.width || 0),
                      /\d+%$/.test(a)
                        ? l < (a = (a = Math.floor((parseFloat(a) / 100) * u)) < i ? i : a) && (a = l)
                        : a
                        ? t.type === 'normal' && (a < i && (t.width = a = i), l < a) && (t.width = a = l)
                        : ((t.width = a = 0), d++)),
                  t.hide && (a = 0),
                  (s += a))
                : n.splice(e, 1)
            })
          }),
            s < u && d > 0 && (c = (u - s) / d)
        })
      var l =
        (e(),
        e(!0),
        (n.autoColNums = d = d > 0 ? d : 0),
        n.eachCols(function (e, a) {
          var i = a.minWidth || r.cellMinWidth
          var l = a.maxWidth || r.cellMaxWidth
          a.colGroup ||
            a.hide ||
            (a.width === 0
              ? n.cssRules(a.key, function (e) {
                  e.style.width = Math.floor(c < i ? i : l < c ? l : c) + 'px'
                })
              : /\d+%$/.test(a.width)
              ? n.cssRules(a.key, function (e) {
                  var t = Math.floor((parseFloat(a.width) / 100) * u)
                  e.style.width = (t = l < (t = t < i ? i : t) ? l : t) + 'px'
                })
              : n.cssRules(a.key, function (e) {
                  e.style.width = a.width + 'px'
                }))
        }),
        n.layMain.width() - n.getScrollWidth(n.layMain[0]) - n.layMain.children('table').outerWidth())
      n.autoColNums > 0 &&
        -i <= l &&
        l <= i &&
        ((e = (a = (t = function (e) {
          return !(e = e || n.layHeader.eq(0).find('thead > tr:first-child > th:last-child')).data('field') && e.prev()[0] ? t(e.prev()) : e
        })()).data('key')),
        n.cssRules(e, function (e) {
          var t = e.style.width || a.outerWidth()
          ;(e.style.width = parseFloat(t) + l + 'px'), n.layMain.height() - n.layMain.prop('clientHeight') > 0 && (e.style.width = parseFloat(e.style.width) - 1 + 'px')
        })),
        n.setGroupWidth(),
        n.layMain.find('tbody').is(':empty') ? ((e = n.layHeader.first().children('table').width()), n.layMain.find('table').width(e)) : n.layMain.find('table').width('auto')
    }),
    (n.prototype.resize = function () {
      this.layMain && (this.fullSize(), this.setColsWidth(), this.scrollPatch())
    }),
    (n.prototype.reload = function (e, t, a) {
      var i = this
      ;(e = e || {}),
        delete i.haveInit,
        layui.each(e, function (e, t) {
          layui.type(t) === 'array' && delete i.config[e]
        }),
        (i.config = p.extend(t, {}, i.config, e)),
        a !== 'reloadData' &&
          (layui.each(i.config.cols, function (e, t) {
            layui.each(t, function (e, t) {
              delete t.colspan2
            })
          }),
          delete i.config.HAS_SET_COLS_PATCH),
        i.render(a)
    }),
    (n.prototype.errorView = function (e) {
      var t = this
      var a = t.layMain.find('.' + h)
      var e = p('<div class="' + h + '">' + (e || 'Error') + '</div>')
      a[0] && (t.layNone.remove(), a.remove()),
        t.layFixed.addClass(R),
        t.layMain.find('tbody').html(''),
        t.layMain.append((t.layNone = e)),
        t.layTotal.addClass(y),
        t.layPage.find(P).addClass(y),
        (x.cache[t.key] = []),
        t.syncCheckAll(),
        t.renderForm(),
        t.setColsWidth(),
        t.loading(!1)
    }),
    (n.prototype.page = 1),
    (n.prototype.pullData = function (a, t) {
      var e
      var i
      var l = this
      var n = l.config
      var o = (n.HAS_SET_COLS_PATCH || l.setColsPatch(), (n.HAS_SET_COLS_PATCH = !0), n.request)
      var r = n.response
      var d = function () {
        typeof n.initSort == 'object' && l.sort({ field: n.initSort.field, type: n.initSort.type, reloadType: t.type })
      }
      var c = function (e, t) {
        l.setColsWidth(), l.loading(!1), typeof n.done == 'function' && n.done(e, a, e[r.countName], t)
      }
      ;(t = t || {}),
        typeof n.before == 'function' && n.before(n),
        (l.startTime = new Date().getTime()),
        t.renderData
          ? (((e = {})[r.dataName] = x.cache[l.key]),
            (e[r.countName] = n.url ? (layui.type(n.page) === 'object' ? n.page.count : e[r.dataName].length) : n.data.length),
            typeof n.totalRow == 'object' && (e[r.totalRowName] = p.extend({}, l.totalRow)),
            l.renderData({ res: e, curr: a, count: e[r.countName], type: t.type, sort: !0 }),
            c(e, 'renderData'))
          : n.url
          ? ((i = {}),
            n.page && ((i[o.pageName] = a), (i[o.limitName] = n.limit)),
            (o = p.extend(i, n.where)),
            n.contentType && n.contentType.indexOf('application/json') == 0 && (o = JSON.stringify(o)),
            l.loading(!0),
            p.ajax({
              type: n.method || 'get',
              url: n.url,
              contentType: n.contentType,
              data: o,
              dataType: n.dataType || 'json',
              jsonpCallback: n.jsonpCallback,
              headers: n.headers || {},
              complete: typeof n.complete == 'function' ? n.complete : undefined,
              success: function (e) {
                ;(e = typeof n.parseData == 'function' ? n.parseData(e) || e : e)[r.statusName] != r.statusCode
                  ? l.errorView(
                      e[r.msgName] ||
                        '\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801\u5e94\u4e3a\uff1a"' +
                          r.statusName +
                          '": ' +
                          r.statusCode
                    )
                  : ((l.totalRow = e[r.totalRowName]),
                    l.renderData({ res: e, curr: a, count: e[r.countName], type: t.type }),
                    d(),
                    (n.time = new Date().getTime() - l.startTime + ' ms')),
                  c(e, t.type)
              },
              error: function (e, t) {
                l.errorView('\u8bf7\u6c42\u5f02\u5e38\uff0c\u9519\u8bef\u63d0\u793a\uff1a' + t), typeof n.error == 'function' && n.error(e, t)
              }
            }))
          : layui.type(n.data) === 'array' &&
            ((e = {}),
            (i = a * n.limit - n.limit),
            (o = n.data.concat()),
            (e[r.dataName] = n.page ? o.splice(i, n.limit) : o),
            (e[r.countName] = n.data.length),
            typeof n.totalRow == 'object' && (e[r.totalRowName] = p.extend({}, n.totalRow)),
            (l.totalRow = e[r.totalRowName]),
            l.renderData({ res: e, curr: a, count: e[r.countName], type: t.type }),
            d(),
            c(e, t.type))
    }),
    (n.prototype.eachCols = function (e) {
      return x.eachCols(null, e, this.config.cols), this
    }),
    (n.prototype.col = function (e) {
      try {
        return (e = e.split('-')), this.config.cols[e[1]][e[2]] || {}
      } catch (t) {
        return g.error(t), {}
      }
    }),
    (n.prototype.getTrHtml = function (a, l, n, e) {
      var s = this
      var u = s.config
      var y = (e && e.trs) || []
      var h = (e && e.trs_fixed) || []
      var f = (e && e.trs_fixed_r) || []
      return (
        (n = n || 1),
        layui.each(a, function (e, o) {
          var i = []
          var r = []
          var d = []
          var c = e + u.limit * (n - 1) + 1
          if (typeof o != 'object') {
            a[e] = o = { LAY_KEY: o }
            try {
              x.cache[s.key][e] = o
            } catch (t) {}
          }
          ;(layui.type(o) === 'array' && o.length === 0) ||
            ((o[x.config.numbersName] = c),
            l || (o[x.config.indexName] = e),
            s.eachCols(function (e, l) {
              var t
              var e = l.field || e
              var a = l.key
              var n = o[e]
              ;(n !== undefined && n !== null) || (n = ''),
                l.colGroup ||
                  ((e = [
                    '<td data-field="' +
                      e +
                      '" data-key="' +
                      a +
                      '" ' +
                      ((e = []),
                      (t = typeof l.edit == 'function' ? l.edit(o) : l.edit) && e.push('data-edit="' + t + '"'),
                      l.templet && e.push('data-content="' + v.escape(n) + '"'),
                      l.toolbar && e.push('data-off="true"'),
                      l.event && e.push('lay-event="' + l.event + '"'),
                      l.minWidth && e.push('data-minwidth="' + l.minWidth + '"'),
                      l.maxWidth && e.push('data-maxwidth="' + l.maxWidth + '"'),
                      l.style && e.push('style="' + l.style + '"'),
                      e.join(' ')) +
                      ' class="' +
                      ((t = []), l.hide && t.push(R), l.field || t.push(W), t.join(' ')) +
                      '">',
                    '<div class="layui-table-cell laytable-cell-' +
                      (l.type === 'normal' ? a : a + ' laytable-cell-' + l.type) +
                      '"' +
                      (l.align ? ' align="' + l.align + '"' : '') +
                      '>' +
                      (function () {
                        var e
                        var t = p.extend(!0, { LAY_COL: l }, o)
                        var a = x.config.checkName
                        var i = x.config.disabledName
                        switch (l.type) {
                          case 'checkbox':
                            return (
                              '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' +
                              ((e = []), l[a] && ((o[a] = l[a]), l[a]) && (e[0] = 'checked'), t[a] && (e[0] = 'checked'), t[i] && e.push('disabled'), e.join(' ')) +
                              ' lay-type="layTableCheckbox">'
                            )
                          case 'radio':
                            return (
                              '<input type="radio" name="layTableRadio_' +
                              u.index +
                              '" ' +
                              ((e = []), t[a] && (e[0] = 'checked'), t[i] && e.push('disabled'), e.join(' ')) +
                              ' lay-type="layTableRadio">'
                            )
                          case 'numbers':
                            return c
                        }
                        return l.toolbar ? m(p(l.toolbar).html() || '').render(t) : C.call(s, { item3: l, content: n, tplData: t })
                      })(),
                    '</div></td>'
                  ].join('')),
                  i.push(e),
                  l.fixed && l.fixed !== 'right' && r.push(e),
                  l.fixed === 'right' && d.push(e))
            }),
            (e = ['data-index="' + e + '"']),
            o[x.config.checkName] && e.push('class="' + _ + '"'),
            (e = e.join(' ')),
            y.push('<tr ' + e + '>' + i.join('') + '</tr>'),
            h.push('<tr ' + e + '>' + r.join('') + '</tr>'),
            f.push('<tr ' + e + '>' + d.join('') + '</tr>'))
        }),
        { trs: y, trs_fixed: h, trs_fixed_r: f }
      )
    }),
    (x.getTrHtml = function (e, t) {
      e = w(e)
      return e.getTrHtml(t, null, e.page)
    }),
    (n.prototype.renderData = function (e) {
      var a = this
      var i = a.config
      var t = e.res
      var l = e.curr
      var n = (a.count = e.count)
      var o = e.sort
      var r = t[i.response.dataName] || []
      var t = t[i.response.totalRowName]
      var d = []
      var c = []
      var s = []
      var u = function () {
        if (!o && a.sortKey) return a.sort({ field: a.sortKey.field, type: a.sortKey.sort, pull: !0, reloadType: e.type })
        a.getTrHtml(r, o, l, { trs: d, trs_fixed: c, trs_fixed_r: s }),
          (i.scrollPos === 'fixed' && e.type === 'reloadData') || a.layBody.scrollTop(0),
          i.scrollPos === 'reset' && a.layBody.scrollLeft(0),
          a.layMain.find('.' + h).remove(),
          a.layMain.find('tbody').html(d.join('')),
          a.layFixLeft.find('tbody').html(c.join('')),
          a.layFixRight.find('tbody').html(s.join('')),
          a.syncCheckAll(),
          a.renderForm(),
          a.fullSize(),
          a.haveInit
            ? a.scrollPatch()
            : setTimeout(function () {
                a.scrollPatch()
              }, 50),
          (a.haveInit = !0),
          f.close(a.tipsIndex)
      }
      return (
        (x.cache[a.key] = r),
        a.layTotal[r.length == 0 ? 'addClass' : 'removeClass'](y),
        a.layPage[i.page || i.pagebar ? 'removeClass' : 'addClass'](R),
        a.layPage.find(P)[!i.page || n == 0 || (r.length === 0 && l == 1) ? 'addClass' : 'removeClass'](y),
        r.length === 0
          ? a.errorView(i.text.none)
          : (a.layFixLeft.removeClass(R),
            o
              ? u()
              : (u(),
                a.renderTotal(r, t),
                a.layTotal && a.layTotal.removeClass(R),
                void (
                  i.page &&
                  ((i.page = p.extend(
                    {
                      elem: 'layui-table-page' + i.index,
                      count: n,
                      limit: i.limit,
                      limits: i.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
                      groups: 3,
                      layout: ['prev', 'page', 'next', 'skip', 'count', 'limit'],
                      prev: '<i class="layui-icon">&#xe603;</i>',
                      next: '<i class="layui-icon">&#xe602;</i>',
                      jump: function (e, t) {
                        t || ((a.page = e.curr), (i.limit = e.limit), a.pullData(e.curr))
                      }
                    },
                    i.page
                  )),
                  (i.page.count = n),
                  z.render(i.page))
                )))
      )
    }),
    (x.renderData = function (e) {
      e = w(e)
      e && e.pullData(e.page, { renderData: !0, type: 'reloadData' })
    }),
    (n.prototype.renderTotal = function (e, o) {
      var r
      var d = this
      var c = d.config
      var s = {}
      c.totalRow &&
        (layui.each(e, function (e, i) {
          ;(layui.type(i) === 'array' && i.length === 0) ||
            d.eachCols(function (e, t) {
              var e = t.field || e
              var a = i[e]
              t.totalRow && (s[e] = (s[e] || 0) + (parseFloat(a) || 0))
            })
        }),
        (d.dataTotal = []),
        (r = []),
        d.eachCols(function (e, t) {
          var a
          var e = t.field || e
          var i = o && o[t.field]
          var l = 'totalRowDecimals' in t ? t.totalRowDecimals : 2
          var l = s[e] ? parseFloat(s[e] || 0).toFixed(l) : ''
          var l = ((a = t.totalRowText || ''), ((n = { LAY_COL: t })[e] = l), (n = (t.totalRow && C.call(d, { item3: t, content: l, tplData: n })) || a), i || n)
          var n =
            (t.field && d.dataTotal.push({ field: t.field, total: p('<div>' + l + '</div>').text() }),
            [
              '<td data-field="' +
                e +
                '" data-key="' +
                t.key +
                '" ' +
                ((a = []),
                t.minWidth && a.push('data-minwidth="' + t.minWidth + '"'),
                t.maxWidth && a.push('data-maxwidth="' + t.maxWidth + '"'),
                t.style && a.push('style="' + t.style + '"'),
                a.join(' ')) +
                ' class="' +
                ((n = []), t.hide && n.push(R), t.field || n.push(W), n.join(' ')) +
                '">',
              '<div class="layui-table-cell laytable-cell-' +
                ((a = t.key), t.type === 'normal' ? a : a + ' laytable-cell-' + t.type) +
                '"' +
                ((n = []), t.align && n.push('align="' + t.align + '"'), n.join(' ')) +
                '>' +
                (typeof (a = t.totalRow || c.totalRow) == 'string' ? m(a).render(p.extend({ TOTAL_NUMS: i || s[e], TOTAL_ROW: o || {}, LAY_COL: t }, t)) : l),
              '</div></td>'
            ].join(''))
          r.push(n)
        }),
        (e = d.layTotal.find('.layui-table-patch')),
        d.layTotal.find('tbody').html('<tr>' + r.join('') + (e.length ? e.get(0).outerHTML : '') + '</tr>'))
    }),
    (n.prototype.getColElem = function (e, t) {
      return e.eq(0).find('.laytable-cell-' + t + ':eq(0)')
    }),
    (n.prototype.renderForm = function (e) {
      this.config
      var t = this.elem.attr('lay-filter')
      i.render(e, t)
    }),
    (n.prototype.renderFormByElem = function (a) {
      layui.each(['input', 'select'], function (e, t) {
        i.render(a.find(t))
      })
    }),
    (n.prototype.syncCheckAll = function () {
      var a
      var e = this
      var i = e.config
      var t = e.layHeader.find('input[name="layTableCheckbox"]')
      var l = x.checkStatus(e.key)
      t[0] &&
        ((a = l.isAll),
        e.eachCols(function (e, t) {
          t.type === 'checkbox' && (t[i.checkName] = a)
        }),
        t.prop({ checked: l.isAll, indeterminate: !l.isAll && l.data.length }))
    }),
    (n.prototype.setRowActive = function (e, t, a) {
      this.config
      e = this.layBody.find('tr[data-index="' + e + '"]')
      if (((t = t || 'layui-table-click'), a)) return e.removeClass(t)
      e.addClass(t), e.siblings('tr').removeClass(t)
    }),
    (n.prototype.setRowChecked = function (i) {
      var a
      var e = this
      var l = e.config
      var n = 'all' === i.index
      var o = 'array' === layui.type(i.index)
      var t = n || o
      var r =
        (t && e.layBox.addClass(I),
        o &&
          ((a = {}),
          layui.each(i.index, function (e, t) {
            a[t] = !0
          }),
          (i.index = a)),
        n || o ? 'tr' : 'tr[data-index="' + i.index + '"]')
      var d =
        ((r = e.layBody.find(r)),
        n
          ? r
          : r.filter(
              o
                ? function () {
                    var e = p(this).data('index')
                    return i.index[e]
                  }
                : '[data-index="' + i.index + '"]'
            ))
      var c = ((i = p.extend({ type: 'checkbox' }, i)), x.cache[e.key])
      var s = 'checked' in i
      var u = function (e) {
        return i.type === 'radio' || (s ? i.checked : !e)
      }
      var y = {}
      var r =
        (layui.each(c, function (e, t) {
          var a
          'array' === layui.type(t) || t[l.disabledName]
            ? (y[e] = !0)
            : n || (o ? i.index[e] : Number(i.index) === e)
            ? ((a = t[l.checkName] = u(t[l.checkName])),
              n || o || ((e = d.filter('[data-index="' + e + '"]'))[a ? 'addClass' : 'removeClass'](_), i.type === 'radio' && e.siblings().removeClass(_)))
            : i.type === 'radio' && delete t[l.checkName]
        }),
        n
          ? d.each(function (e) {
              var t = this.getAttribute('data-index')
              y[t] || p(this).toggleClass(_, !!u(c[t][l.checkName]))
            })
          : o &&
            d.each(function (e) {
              var t = this.getAttribute('data-index')
              i.index[t] && !y[t] && p(this).toggleClass(_, !!u(c[t][l.checkName]))
            }),
        d.find('input[lay-type="' + ({ radio: 'layTableRadio', checkbox: 'layTableCheckbox' }[i.type] || 'checkbox') + '"]:not(:disabled)'))
      var h = r.last()
      var f = h.closest(O)
      ;(i.type === 'radio' && f.hasClass(R) ? r.first() : r).prop('checked', u(h.prop('checked'))),
        e.syncCheckAll(),
        t &&
          setTimeout(function () {
            e.layBox.removeClass(I)
          }, 100)
    }),
    (n.prototype.sort = function (l) {
      var e
      var t = this
      var a = {}
      var i = t.config
      var n = i.elem.attr('lay-filter')
      var o = x.cache[t.key]
      typeof (l = l || {}).field == 'string' &&
        ((r = l.field),
        t.layHeader.find('th').each(function (e, t) {
          var a = p(this)
          var i = a.data('field')
          if (i === l.field) return (l.field = a), (r = i), !1
        }))
      try {
        var r = r || l.field.data('field')
        var d = l.field.data('key')
        if (t.sortKey && !l.pull && r === t.sortKey.field && l.type === t.sortKey.sort) return
        var c = t.layHeader.find('th .laytable-cell-' + d).find(E)
        t.layHeader.find('th').find(E).removeAttr('lay-sort'), c.attr('lay-sort', l.type || null), t.layFixed.find('th')
      } catch (s) {
        g.error("Table modules: sort field '" + r + "' not matched")
      }
      ;(t.sortKey = { field: r, sort: l.type }),
        i.autoSort &&
          (l.type === 'asc'
            ? (e = layui.sort(o, r, null, !0))
            : l.type === 'desc'
            ? (e = layui.sort(o, r, !0, !0))
            : ((e = layui.sort(o, x.config.indexName, null, !0)), delete t.sortKey, delete i.initSort)),
        (a[i.response.dataName] = e || o),
        t.renderData({ res: a, curr: t.page, count: t.count, sort: !0, type: l.reloadType }),
        l.fromEvent && ((i.initSort = { field: r, type: l.type }), layui.event.call(l.field, T, 'sort(' + n + ')', p.extend({ config: i }, i.initSort)))
    }),
    (n.prototype.loading = function (e) {
      this.config.loading && this.layBox.find('.layui-table-init').toggleClass(y, !e)
    }),
    (n.prototype.cssRules = function (t, a) {
      var e = this.elem.children('style')[0]
      d.getStyleRules(e, function (e) {
        if (e.selectorText === '.laytable-cell-' + t) return a(e), !0
      })
    }),
    (n.prototype.fullSize = function () {
      var e
      var a
      var i = this
      var t = i.config
      var l = t.height
      i.fullHeightGap
        ? (l = r.height() - i.fullHeightGap) < 135 && (l = 135)
        : i.parentDiv && i.parentHeightGap
        ? (l = p(i.parentDiv).height() - i.parentHeightGap) < 135 && (l = 135)
        : i.customHeightFunc && (l = i.customHeightFunc()) < 135 && (l = 135),
        t.cols.length > 1 &&
          ((e = i.layFixed.find(o).find('th')),
          (a = i.layHeader.first()),
          layui.each(e, function (e, t) {
            ;(t = p(t)).height(a.find('th[data-key="' + t.attr('data-key') + '"]').height() + 'px')
          })),
        l &&
          ((e = parseFloat(l) - (i.layHeader.outerHeight() || 39)),
          t.toolbar && (e -= i.layTool.outerHeight() || 51),
          t.totalRow && (e -= i.layTotal.outerHeight() || 40),
          (t.page || t.pagebar) && (e -= i.layPage.outerHeight() || 43),
          t.maxHeight
            ? layui.each({ elem: l, layMain: e }, function (e, t) {
                i[e].css({ height: 'auto', maxHeight: t + 'px' })
              })
            : i.layMain.outerHeight(e))
    }),
    (n.prototype.getScrollWidth = function (e) {
      var t
      return (
        e
          ? (t = e.offsetWidth - e.clientWidth)
          : (((e = document.createElement('div')).style.width = '100px'),
            (e.style.height = '100px'),
            (e.style.overflowY = 'scroll'),
            document.body.appendChild(e),
            (t = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e)),
        t
      )
    }),
    (n.prototype.scrollPatch = function () {
      var e = this
      var t = e.layMain.children('table')
      var a = e.layMain.width() - e.layMain.prop('clientWidth')
      var i = e.layMain.height() - e.layMain.prop('clientHeight')
      var l = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width())
      var n = function (e) {
        var t
        a && i
          ? (e = e.eq(0)).find('.layui-table-patch')[0] ||
            ((t = p('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find('div').css({ width: a }), e.find('tr').append(t))
          : e.find('.layui-table-patch').remove()
      }
      n(e.layHeader), n(e.layTotal)
      n = e.layMain.height() - i
      e.layFixed
        .find(A)
        .css('height', t.height() >= n ? n : 'auto')
        .scrollTop(e.layMain.scrollTop()),
        e.layFixRight[x.cache[e.key] && x.cache[e.key].length && l > 0 ? 'removeClass' : 'addClass'](R),
        e.layFixRight.css('right', a - 1)
    }),
    (n.prototype.updateRow = function (e, i) {
      var d = this
      var c = '.layui-table-cell'
      var e = 'array' === layui.type(e) ? e : [e]
      var s = x.cache[d.key] || []
      layui.each(e, function (e, t) {
        var a, l, n, o, r
        ;(a = t.index),
          (l = t.data),
          (n = t.related),
          (o = s[a] || {}),
          (r = d.layBody.find('tr[data-index="' + a + '"]')),
          layui.each(l, function (e, t) {
            ;(o[e] = t), i && i(e, t)
          }),
          d.eachCols(function (e, t) {
            var a
            var i = String(t.field || e)
            ;(i in l || ((typeof n == 'function' ? n(i, e) : n) && (t.templet || t.toolbar))) &&
              ((i = (e = r.children('td[data-field="' + i + '"]')).children(c)),
              (a = o[t.field]),
              i.html(C.call(d, { item3: t, content: a, tplData: p.extend({ LAY_COL: t }, o) })),
              e.data('content', a),
              d.renderFormByElem(i))
          })
      })
    }),
    (x.updateRow = function (e, t) {
      return w(e).updateRow(t)
    }),
    (n.prototype.events = function () {
      var c = this
      var s = c.config
      var o = s.elem.attr('lay-filter')
      var e = c.layHeader.find('th')
      var u = '.layui-table-cell'
      var r = p('body')
      var d = {}
      var y =
        (c.layTool.on('click', '*[lay-event]', function (e) {
          var i = p(this);
                var a = i.attr('lay-event');
                var l = x.cache[s.id];
                var n = function (e) {
              var t = p(e.list);
                    var a = p('<ul class="' + H + '"></ul>')
              a.html(t),
                s.height && a.css('max-height', s.height - (c.layTool.outerHeight() || 50)),
                i.find('.' + H)[0] || i.append(a),
                c.renderForm(),
                a.on('click', function (e) {
                  layui.stope(e)
                }),
                e.done && e.done(a, t)
            }
          layui.stope(e),
            F.trigger('table.tool.panel.remove'),
            f.close(c.tipsIndex),
            layui.each(s.defaultToolbar, function (e, t) {
              if (t.layEvent === a) return typeof t.onClick == 'function' && t.onClick({ data: l, config: s, openPanel: n, elem: i }), !0
            }),
            layui.event.call(this, T, 'toolbar(' + o + ')', p.extend({ event: a, config: s }, {}))
        }),
        c.layHeader.on('click', '*[lay-event]', function (e) {
          var t = p(this);
                var a = t.attr('lay-event');
                var t = t.closest('th').data('key');
                var t = c.col(t)
          layui.event.call(this, T, 'colTool(' + o + ')', p.extend({ event: a, config: s, col: t }, {}))
        }),
        c.layPagebar.on('click', '*[lay-event]', function (e) {
          var t = p(this).attr('lay-event')
          layui.event.call(this, T, 'pagebar(' + o + ')', p.extend({ event: t, config: s }, {}))
        }),
        e
          .on('mousemove', function (e) {
            var t = p(this);
                  var a = t.offset().left;
                  var e = e.clientX - a
            t.data('unresize') || k.eventMoveElem || ((d.allowResize = t.width() - e <= 10), r.css('cursor', d.allowResize ? 'col-resize' : ''))
          })
          .on('mouseleave', function () {
            p(this)
            k.eventMoveElem || ((d.allowResize = !1), r.css('cursor', ''))
          })
          .on('mousedown', function (e) {
            var t;
                  var a = p(this)
            d.allowResize &&
              ((t = a.data('key')),
              e.preventDefault(),
              (d.offset = [e.clientX, e.clientY]),
              c.cssRules(t, function (e) {
                var t = e.style.width || a.outerWidth()
                ;(d.rule = e), (d.ruleWidth = parseFloat(t)), (d.minWidth = a.data('minwidth') || s.cellMinWidth), (d.maxWidth = a.data('maxwidth') || s.cellMaxWidth)
              }),
              a.data(S, d),
              (k.eventMoveElem = a))
          }),
        k.docEvent ||
          F.on('mousemove', function (e) {
            var t, a
            k.eventMoveElem &&
              ((t = k.eventMoveElem.data(S) || {}), k.eventMoveElem.data('resizing', 1), e.preventDefault(), t.rule) &&
              ((e = t.ruleWidth + e.clientX - t.offset[0]), (a = k.eventMoveElem.closest('.' + D).attr(N)), (a = w(a))) &&
              ((e = e < t.minWidth ? t.minWidth : e) > t.maxWidth && (e = t.maxWidth), (t.rule.style.width = e + 'px'), a.setGroupWidth(k.eventMoveElem), f.close(c.tipsIndex))
          }).on('mouseup', function (e) {
            var t, a, i, l, n
            k.eventMoveElem &&
              ((i = (t = k.eventMoveElem).closest('.' + D).attr(N)), (a = w(i))) &&
              ((i = t.data('key')),
              (l = a.col(i)),
              (n = a.config.elem.attr('lay-filter')),
              (d = {}),
              r.css('cursor', ''),
              a.scrollPatch(),
              t.removeData(S),
              delete k.eventMoveElem,
              a.cssRules(i, function (e) {
                ;(l.width = parseFloat(e.style.width)), layui.event.call(t[0], T, 'colResized(' + n + ')', { col: l, config: a.config })
              }))
          }),
        (k.docEvent = !0),
        e
          .on('click', function (e) {
            var t = p(this);
                  var a = t.find(E);
                  var i = a.attr('lay-sort')
            if (!a[0] || t.data('resizing') === 1) return t.removeData('resizing')
            c.sort({ field: t, type: i === 'asc' ? 'desc' : i === 'desc' ? null : 'asc', fromEvent: !0 })
          })
          .find(E + ' .layui-edge ')
          .on('click', function (e) {
            var t = p(this);
                  var a = t.index();
                  var t = t.parents('th').eq(0).data('field')
            layui.stope(e), a === 0 ? c.sort({ field: t, type: 'asc', fromEvent: !0 }) : c.sort({ field: t, type: 'desc', fromEvent: !0 })
          }),
        (c.commonMember = function (e) {
          var a = p(this).parents('tr').eq(0).data('index');
                var t = c.layBody.find('tr[data-index="' + a + '"]');
                var i = (x.cache[c.key] || [])[a] || {};
                var l = {
              tr: t,
              config: s,
              data: x.clearCacheKey(i),
              dataCache: i,
              index: a,
              del: function () {
                ;(x.cache[c.key][a] = []), t.remove(), c.scrollPatch()
              },
              update: function (e, t) {
                c.updateRow({ index: a, data: (e = e || {}), related: t }, function (e, t) {
                  l.data[e] = t
                })
              },
              setRowChecked: function (e) {
                c.setRowChecked(p.extend({ index: a }, e))
              }
            }
          return p.extend(l, e)
        }))
      var t =
        (c.elem.on('click', 'input[name="layTableCheckbox"]+', function (e) {
          var t = p(this);
                var a = t.closest('td');
                var t = t.prev();
                var i = (c.layBody.find('input[name="layTableCheckbox"]'), t.parents('tr').eq(0).data('index'));
                var l = t[0].checked;
                var n = t.attr('lay-filter') === 'layTableAllChoose'
          t[0].disabled ||
            (n ? c.setRowChecked({ index: 'all', checked: l }) : (c.setRowChecked({ index: i, checked: l }), layui.stope(e)),
            layui.event.call(
              t[0],
              T,
              'checkbox(' + o + ')',
              y.call(t[0], {
                checked: l,
                type: n ? 'all' : 'one',
                getCol: function () {
                  return c.col(a.data('key'))
                }
              })
            ))
        }),
        c.elem.on('click', 'input[lay-type="layTableRadio"]+', function (e) {
          var t = p(this);
                var a = t.closest('td');
                var t = t.prev();
                var i = t[0].checked;
                var l = t.parents('tr').eq(0).data('index')
          if ((layui.stope(e), t[0].disabled)) return !1
          c.setRowChecked({ type: 'radio', index: l }),
            layui.event.call(
              t[0],
              T,
              'radio(' + o + ')',
              y.call(t[0], {
                checked: i,
                getCol: function () {
                  return c.col(a.data('key'))
                }
              })
            )
        }),
        c.layBody
          .on('mouseenter', 'tr', function () {
            var e = p(this);
                  var t = e.index()
            e.data('off') || c.layBody.find('tr:eq(' + t + ')').addClass(M)
          })
          .on('mouseleave', 'tr', function () {
            var e = p(this);
                  var t = e.index()
            e.data('off') || c.layBody.find('tr:eq(' + t + ')').removeClass(M)
          })
          .on('click', 'tr', function (e) {
            t.call(this, 'row', e)
          })
          .on('dblclick', 'tr', function (e) {
            t.call(this, 'rowDouble', e)
          })
          .on('contextmenu', 'tr', function (e) {
            s.defaultContextmenu || e.preventDefault(), t.call(this, 'rowContextmenu', e)
          }),
        function (e, t) {
          var a = p(this)
          if (!a.data('off')) {
            if (e !== 'rowContextmenu') {
              var i = ['.layui-form-checkbox', '.layui-form-switch', '.layui-form-radio', '[lay-unrow]'].join(',')
              if (p(t.target).is(i) || p(t.target).closest(i)[0]) return
            }
            layui.event.call(this, T, e + '(' + o + ')', y.call(a.children('td')[0], { e: t }))
          }
        })
      var n = function (e, t) {
        var a, i, l
        ;(e = p(e)).data('off') ||
          ((l = e.data('field')),
          (i = e.data('key')),
          (i = c.col(i)),
          (a = e.closest('tr').data('index')),
          (a = x.cache[c.key][a]),
          e.children(u),
          (i = typeof i.edit == 'function' ? i.edit(a) : i.edit) &&
            (((i = p(i === 'textarea' ? '<textarea class="layui-input ' + L + '" lay-unrow></textarea>' : '<input class="layui-input ' + L + '" lay-unrow>'))[0].value =
              (l = e.data('content') || a[l]) === undefined || l === null ? '' : l),
            e.find('.' + L)[0] || e.append(i),
            i.focus(),
            t) &&
            layui.stope(t))
      }
      var i =
        (c.layBody
          .on('change', '.' + L, function () {
            var e = p(this);
                  var t = e.parent();
                  var a = this.value;
                  var i = e.parent().data('field');
                  var e = e.closest('tr').data('index');
                  var e = x.cache[c.key][e];
                  var l = y.call(t[0], {
                    value: a,
                    field: i,
                    oldValue: e[i],
                    td: t,
                    reedit: function () {
                      setTimeout(function () {
                        n(l.td)
                        var e = {}
                        ;(e[i] = l.oldValue), l.update(e)
                      })
                    },
                    getCol: function () {
                      return c.col(t.data('key'))
                    }
                  });
                  var e = {}
            ;(e[i] = a), l.update(e), layui.event.call(t[0], T, 'edit(' + o + ')', l)
          })
          .on('blur', '.' + L, function () {
            p(this).remove()
          }),
        c.layBody
          .on(s.editTrigger, 'td', function (e) {
            n(this, e)
          })
          .on('mouseenter', 'td', function () {
            a.call(this)
          })
          .on('mouseleave', 'td', function () {
            a.call(this, 'hide')
          }),
        c.layTotal
          .on('mouseenter', 'td', function () {
            a.call(this)
          })
          .on('mouseleave', 'td', function () {
            a.call(this, 'hide')
          }),
        'layui-table-grid-down')
      var a = function (e) {
        var t = p(this);
              var a = t.children(u)
        t.data('off') ||
          t.parent().hasClass(j) ||
          (e
            ? t.find('.layui-table-grid-down').remove()
            : !(a.prop('scrollWidth') > a.prop('clientWidth') || a.find('br').length > 0) ||
              s.lineStyle ||
              a.find('.' + i)[0] ||
              t.append('<div class="' + i + '"><i class="layui-icon layui-icon-down"></i></div>'))
      }
      var l = function (e, t) {
        var a = p(this);
              var i = a.parent();
              var l = i.data('key');
              var n = c.col(l);
              var o = i.parent().data('index');
              var r = i.children(u);
              var i = 'layui-table-cell-c';
              var d = p('<i class="layui-icon layui-icon-up ' + i + '">')
        'tips' === (t = t || n.expandedMode || s.cellExpandedMode)
          ? (c.tipsIndex = f.tips(
              [
                '<div class="layui-table-tips-main" style="margin-top: -' +
                  (r.height() + 23) +
                  'px;' +
                  (s.size === 'sm' ? 'padding: 4px 15px; font-size: 12px;' : s.size === 'lg' ? 'padding: 14px 15px;' : '') +
                  '">',
                r.html(),
                '</div>',
                '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'
              ].join(''),
              r[0],
              {
                tips: [3, ''],
                time: -1,
                anim: -1,
                maxWidth: b.ios || b.android ? 300 : c.elem.width() / 2,
                isOutAnim: !1,
                skin: 'layui-table-tips',
                success: function (e, t) {
                  e.find('.layui-table-tips-c').on('click', function () {
                    f.close(t)
                  })
                }
              }
            ))
          : (c.elem.find('.' + i).trigger('click'),
            c.cssRules(l, function (e) {
              var t = e.style.width;
                    var a = n.expandedWidth || s.cellExpandedWidth
              a < parseFloat(t) && (a = parseFloat(t)),
                d.data('cell-width', t),
                (e.style.width = a + 'px'),
                setTimeout(function () {
                  c.scrollPatch()
                })
            }),
            c.setRowActive(o, j),
            r.next('.' + i)[0] || r.after(d),
            d.on('click', function () {
              var t = p(this)
              c.setRowActive(o, [j, M].join(' '), !0),
                c.cssRules(l, function (e) {
                  ;(e.style.width = t.data('cell-width')),
                    setTimeout(function () {
                      c.resize()
                    })
                }),
                t.remove(),
                r.scrollTop(0),
                r.scrollLeft(0)
            })),
          a.remove(),
          layui.stope(e)
      }
      var h =
        (c.layBody.on('click', '.' + i, function (e) {
          l.call(this, e)
        }),
        c.layTotal.on('click', '.' + i, function (e) {
          l.call(this, e, 'tips')
        }),
        function (e) {
          var t = p(this)
          var a = t.closest('td')
          var i = t.parents('tr').eq(0).data('index')
          c.setRowActive(i),
            layui.event.call(
              this,
              T,
              (e || 'tool') + '(' + o + ')',
              y.call(this, {
                event: t.attr('lay-event'),
                getCol: function () {
                  return c.col(a.data('key'))
                }
              })
            )
        })
      c.layBody
        .on('click', '*[lay-event]', function (e) {
          h.call(this), layui.stope(e)
        })
        .on('dblclick', '*[lay-event]', function (e) {
          h.call(this, 'toolDouble'), layui.stope(e)
        }),
        c.layMain.on('scroll', function () {
          var e = p(this)
          var t = e.scrollLeft()
          var e = e.scrollTop()
          c.layHeader.scrollLeft(t), c.layTotal.scrollLeft(t), c.layFixed.find(A).scrollTop(e), f.close(c.tipsIndex)
        }),
        c.layFixed.find(A).on('mousewheel DOMMouseScroll', function (e) {
          var t = e.originalEvent.wheelDelta || -e.originalEvent.detail
          var a = c.layMain.scrollTop()
          e.preventDefault(), c.layMain.scrollTop(a + (t > 0 ? -30 : 30))
        }),
        window.ResizeObserver &&
          (c.resizeObserver ||
            (c.resizeObserver = new ResizeObserver(function () {
              x.resize(c.key)
            })),
          c.resizeObserver.observe(c.elem[0]))
    }),
    r.on('resize', function () {
      layui.each(k.that, function () {
        this.resize()
      })
    }),
    F.on('click', function () {
      F.trigger('table.remove.tool.panel')
    }),
    F.on('table.remove.tool.panel', function () {
      p('.' + H).remove()
    }),
    (x.init = function (i, o) {
      o = o || {}
      var e = typeof i == 'object' ? i : p(typeof i == 'string' ? 'table[lay-filter="' + i + '"]' : t + '[lay-data], ' + t + '[lay-options]')
      var r = 'Table element property lay-data configuration item has a syntax error: '
      return (
        e.each(function () {
          var l
          var e = p(this)
          var t = e.attr('lay-data')
          var t = d.options(this, { attr: t ? 'lay-data' : null, errorText: r + (t || e.attr('lay-options')) })
          var n = p.extend({ elem: this, cols: [], data: [], skin: e.attr('lay-skin'), size: e.attr('lay-size'), even: 'string' == typeof e.attr('lay-even') }, x.config, o, t)
          var a =
            (i && e.hide(),
            e.find('thead>tr').each(function (i) {
              ;(n.cols[i] = []),
                p(this)
                  .children()
                  .each(function (e) {
                    var t = p(this);
                          var a = t.attr('lay-data');
                          var a = d.options(this, { attr: a ? 'lay-data' : null, errorText: r + (a || t.attr('lay-options')) });
                          var t = p.extend({ title: t.text(), colspan: parseInt(t.attr('colspan')) || 1, rowspan: parseInt(t.attr('rowspan')) || 1 }, a)
                    n.cols[i].push(t)
                  })
            }),
            e.find('tbody>tr'))
          var t = x.render(n)
          !a.length ||
            o.data ||
            t.config.url ||
            ((l = 0),
            x.eachCols(t.config.id, function (e, i) {
              a.each(function (e) {
                n.data[e] = n.data[e] || {}
                var t = p(this)
                var a = i.field
                n.data[e][a] = t.children('td').eq(l).html()
              }),
                l++
            }),
            t.reloadData({ data: n.data }))
        }),
        this
      )
    }),
    (k.that = {}),
    (k.config = {}),
    function (a, i, e, l) {
      var n, o
      l.colGroup &&
        ((n = 0),
        a++,
        (l.CHILD_COLS = []),
        (o = e + (parseInt(l.rowspan) || 1)),
        layui.each(i[o], function (e, t) {
          t.parentKey
            ? t.parentKey === l.key && ((t.PARENT_COL_INDEX = a), l.CHILD_COLS.push(t), c(a, i, o, t))
            : t.PARENT_COL_INDEX ||
              (n >= 1 && n == (l.colspan || 1)) ||
              ((t.PARENT_COL_INDEX = a), l.CHILD_COLS.push(t), (n += parseInt(t.colspan > 1 ? t.colspan : 1)), c(a, i, o, t))
        }))
    })
  ;(x.eachCols = function (e, a, i) {
    var e = k.config[e] || {}
    var l = []
    var n =
      ((i = p.extend(!0, [], i || e.cols)),
      layui.each(i, function (a, e) {
        if (a) return !0
        layui.each(e, function (e, t) {
          c(0, i, a, t), t.PARENT_COL_INDEX || l.push(t)
        })
      }),
      function (e) {
        layui.each(e || l, function (e, t) {
          if (t.CHILD_COLS) return n(t.CHILD_COLS)
          typeof a == 'function' && a(e, t)
        })
      })
    n()
  }),
    (x.checkStatus = function (e) {
      var a = 0
      var i = 0
      var l = []
      var e = x.cache[e] || []
      return (
        layui.each(e, function (e, t) {
          layui.type(t) === 'array' || t[x.config.disabledName] ? i++ : t[x.config.checkName] && (a++, t[x.config.disabledName] || l.push(x.clearCacheKey(t)))
        }),
        { data: l, isAll: !!e.length && a === e.length - i }
      )
    }),
    (x.setRowChecked = function (e, t) {
      e = w(e)
      e && e.setRowChecked(t)
    }),
    (x.getData = function (e) {
      var a = []
      var e = x.cache[e] || []
      return (
        layui.each(e, function (e, t) {
          layui.type(t) !== 'array' && a.push(x.clearCacheKey(t))
        }),
        a
      )
    }),
    (x.resize = function (e) {
      e
        ? l(e) && w(e).resize()
        : layui.each(k.that, function () {
            this.resize()
          })
    }),
    (x.exportFile = function (e, t, a) {
      t = t || x.clearCacheKey(x.cache[e])
      var i = (a = typeof a == 'object' ? a : ((i = {}), a && (i.type = a), i)).type || 'csv'
      var o = k.that[e]
      var l = k.config[e] || {}
      var n = { csv: 'text/csv', xls: 'application/vnd.ms-excel' }[i]
      var r = document.createElement('a')
      if (b.ie) return g.error('IE_NOT_SUPPORT_EXPORTS')
      var d
      var c
      var s
      var u
      var y = l.tree && l.tree.view
      if (y) {
        try {
          ;(t = p.extend(!0, [], x.cache[e])),
            (t = (function h(e) {
              return e.reduce(function (e, t) {
                var a = t.children || []
                return delete t.children, e.concat(t, h(a))
              }, [])
            })(Array.from(t)))
        } catch (f) {}
      }
      ;(r.href =
        'data:' +
        n +
        ';charset=utf-8,\ufeff' +
        encodeURIComponent(
          ((d = []),
          (c = []),
          (s = []),
          (u = {}),
          layui.each(t, function (i, l) {
            var n = []
            typeof e == 'object'
              ? (layui.each(e, function (e, t) {
                  i == 0 && d.push(t || '')
                }),
                layui.each(layui.isArray(l) ? p.extend([], l) : x.clearCacheKey(l), function (e, t) {
                  n.push('"' + (t || '') + '"')
                }))
              : x.eachCols(e, function (e, t) {
                  var a
                  !1 === t.ignoreExport || (t.field && t.type == 'normal')
                    ? (t.hide && !1 !== t.ignoreExport) || !0 === t.ignoreExport
                      ? i == 0 && (u[t.field] = !0)
                      : (((a = l[t.field]) !== undefined && a !== null) || (a = ''),
                        i == 0 && d.push(t.fieldTitle || t.title || t.field || ''),
                        (a = (a = C.call(o, {
                          item3: t,
                          content: a,
                          tplData: l,
                          text: 'text',
                          obj: {
                            td: function (e) {
                              return y && (i = l.LAY_DATA_INDEX), o.layBody.find('tr[data-index="' + i + '"]>td').filter('[data-field="' + e + '"]')
                            }
                          }
                        })).replace(/"/g, '""')),
                        n.push((a = '"' + a + '"')))
                    : t.field && t.type !== 'normal' && i == 0 && (u[t.field] = !0)
                }),
              c.push(n.join(','))
          }),
          o &&
            layui.each(o.dataTotal, function (e, t) {
              u[t.field] || s.push('"' + (t.total || '') + '"')
            }),
          d.join(',') + '\r\n' + c.join('\r\n') + '\r\n' + s.join(','))
        )),
        (r.download = (a.title || l.title || 'table_' + (l.index || '')) + '.' + i),
        document.body.appendChild(r),
        r.click(),
        document.body.removeChild(r)
    }),
    (x.getOptions = l),
    (x.hideCol = function (e, l) {
      var n = w(e)
      n &&
        (layui.type(l) === 'boolean'
          ? n.eachCols(function (e, t) {
              var a = t.key
              var i = n.col(a)
              var t = t.parentKey
              i.hide != l && ((i = i.hide = l), n.elem.find('*[data-key="' + a + '"]')[i ? 'addClass' : 'removeClass'](R), n.setParentCol(i, t))
            })
          : ((l = layui.isArray(l) ? l : [l]),
            layui.each(l, function (e, l) {
              n.eachCols(function (e, t) {
                var a, i
                l.field === t.field &&
                  ((a = t.key), (i = n.col(a)), (t = t.parentKey), 'hide' in l) &&
                  i.hide != l.hide &&
                  ((i = i.hide = !!l.hide), n.elem.find('*[data-key="' + a + '"]')[i ? 'addClass' : 'removeClass'](R), n.setParentCol(i, t))
              })
            })),
        p('.' + H).remove(),
        n.resize())
    }),
    (x.reload = function (e, t, a, i) {
      if (l(e)) return (e = w(e)).reload(t, a, i), k.call(e)
    }),
    (x.reloadData = function () {
      var a = p.extend([], arguments)
      var i =
        ((a[3] = 'reloadData'),
        new RegExp('^(' + ['elem', 'id', 'cols', 'width', 'height', 'maxHeight', 'toolbar', 'defaultToolbar', 'className', 'css', 'pagebar'].join('|') + ')$'))
      return (
        layui.each(a[1], function (e, t) {
          i.test(e) && delete a[1][e]
        }),
        x.reload.apply(null, a)
      )
    }),
    (x.render = function (e) {
      e = new n(e)
      return k.call(e)
    }),
    (x.clearCacheKey = function (e) {
      return delete (e = p.extend({}, e))[x.config.checkName], delete e[x.config.indexName], delete e[x.config.numbersName], delete e[x.config.disabledName], e
    }),
    p(function () {
      x.init()
    }),
    s(T, x)
})
layui.define(['table'], function (e) {
  'use strict'
  var A = layui.$
  var x = layui.form
  var P = layui.table
  var y = layui.hint()
  var B = {
    config: {},
    on: P.on,
    eachCols: P.eachCols,
    index: P.index,
    set: function (e) {
      var t = this
      return (t.config = A.extend({}, t.config, e)), t
    },
    resize: P.resize,
    getOptions: P.getOptions,
    hideCol: P.hideCol,
    renderData: P.renderData
  }
  var i = function () {
    var a = this;
        var e = a.config;
        var n = e.id || e.index
    return {
      config: e,
      reload: function (e, t) {
        a.reload.call(a, e, t)
      },
      reloadData: function (e, t) {
        B.reloadData(n, e, t)
      }
    }
  }
  var j = function (e) {
    var t = i.that[e]
    return t || y.error(e ? "The treeTable instance with ID '" + e + "' not found" : 'ID argument required'), t || null
  }
  var F = 'lay-table-id'
  var L = 'layui-hide'
  var s = '.layui-table-body'
  var q = '.layui-table-main'
  var R = '.layui-table-fixed-l'
  var Y = '.layui-table-fixed-r'
  var l = 'layui-table-checked'
  var h = 'layui-table-tree'
  var z = 'LAY_DATA_INDEX'
  var m = 'LAY_DATA_INDEX_HISTORY'
  var p = 'LAY_PARENT_INDEX'
  var b = 'LAY_CHECKBOX_HALF'
  var H = 'LAY_EXPAND'
  var X = 'LAY_HAS_EXPANDED'
  var V = 'LAY_ASYNC_STATUS'
  var n = ['all', 'parent', 'children', 'none']
  var t = /<[^>]+?>/
  var f = ['flexIconClose', 'flexIconOpen', 'iconClose', 'iconOpen', 'iconLeaf', 'icon']
  var a = function (e) {
    var t = this
    ;(t.index = ++B.index), (t.config = A.extend(!0, {}, t.config, B.config, e)), t.init(), t.render()
  }
  var g = function (n, i, e) {
    var l = P.cache[n]
    layui.each(e || l, function (e, t) {
      var a = t[z] || ''
      ;a.indexOf('-') !== -1 && (l[a] = t), t[i] && g(n, i, t[i])
    })
  }
  var d = function (d, a, e) {
    var r = j(d)
    var o = ('reloadData' !== e && (r.status = { expand: {} }), A.extend(!0, {}, r.getOptions(), a))
    var n = o.tree
    var c = n.customName.children
    var i = n.customName.id
    var l =
      (delete a.hasNumberCol,
      delete a.hasChecboxCol,
      delete a.hasRadioCol,
      P.eachCols(
        null,
        function (e, t) {
          t.type === 'numbers' ? (a.hasNumberCol = !0) : t.type === 'checkbox' ? (a.hasChecboxCol = !0) : t.type === 'radio' && (a.hasRadioCol = !0)
        },
        o.cols
      ),
      a.parseData)
    var u = a.done
    e === 'reloadData' && o.scrollPos === 'fixed' && (r.scrollTopCache = r.config.elem.next().find(s).scrollTop()),
      o.url
        ? (e && (!l || l.mod)) ||
          ((a.parseData = function () {
            var e = this
            var t = arguments
            var a = t[0]
            var t = (layui.type(l) === 'function' && (a = l.apply(e, t) || t[0]), e.response.dataName)
            return (
              n.data.isSimpleData && !n['async'].enable && (a[t] = r.flatToTree(a[t])),
              N(
                a[t],
                function (e) {
                  e[H] = H in e ? e[H] : e[i] !== undefined && r.status.expand[e[i]]
                },
                c
              ),
              e.autoSort && e.initSort && e.initSort.type && layui.sort(a[t], e.initSort.field, e.initSort.type === 'desc', !0),
              r.initData(a[t]),
              a
            )
          }),
          (a.parseData.mod = !0))
        : a.data !== undefined && ((a.data = a.data || []), n.data.isSimpleData && (a.data = r.flatToTree(a.data)), r.initData(a.data)),
      (e && (!u || u.mod)) ||
        ((a.done = function () {
          var e
          var t = arguments
          var a = t[3]
          var n = 'renderData' === a
          var i = (n || delete r.isExpandAll, this.elem.next())
          var l = (r.updateStatus(null, { LAY_HAS_EXPANDED: !1 }), g(d, c), i.find('[name="layTableCheckbox"][lay-filter="layTableAllChoose"]'))
          if (
            (l.length && ((e = B.checkStatus(d)), l.prop({ checked: e.isAll && e.data.length, indeterminate: !e.isAll && e.data.length })),
            !n && o.autoSort && o.initSort && o.initSort.type && B.sort(d),
            r.renderTreeTable(i),
            a === 'reloadData' && this.scrollPos === 'fixed' && i.find(s).scrollTop(r.scrollTopCache),
            layui.type(u) === 'function')
          ) {
            return u.apply(this, t)
          }
        }),
        (a.done.mod = !0)),
      a &&
        a.tree &&
        a.tree.view &&
        layui.each(f, function (e, t) {
          a.tree.view[t] !== undefined && (a.tree.view[t] = r.normalizedIcon(a.tree.view[t]))
        })
  }
  ;(a.prototype.init = function () {
    var e = this.config
    var t = e.tree.data.cascade
    var t = (-1 === n.indexOf(t) && (e.tree.data.cascade = 'all'), P.render(A.extend({}, e, { data: [], url: '', done: null })))
    var a = t.config.id
    ;((i.that[a] = this).tableIns = t), d(a, e)
  }),
    (a.prototype.config = {
      tree: {
        customName: { children: 'children', isParent: 'isParent', name: 'name', id: 'id', pid: 'parentId', icon: 'icon' },
        view: {
          indent: 14,
          flexIconClose: '<i class="layui-icon layui-icon-triangle-r"></i>',
          flexIconOpen: '<i class="layui-icon layui-icon-triangle-d"></i>',
          showIcon: !0,
          icon: '',
          iconClose: '<i class="layui-icon layui-icon-folder"></i>',
          iconOpen: '<i class="layui-icon layui-icon-folder-open"></i>',
          iconLeaf: '<i class="layui-icon layui-icon-leaf"></i>',
          showFlexIconIfNotParent: !1,
          dblClickExpand: !0,
          expandAllDefault: !1
        },
        data: { isSimpleData: !1, rootPid: null, cascade: 'all' },
        async: { enable: !1, url: '', type: null, contentType: null, headers: null, where: null, autoParam: [] },
        callback: { beforeExpand: null, onExpand: null }
      }
    }),
    (a.prototype.normalizedIcon = function (e) {
      return e ? (t.test(e) ? e : '<i class="' + e + '"></i>') : ''
    }),
    (a.prototype.getOptions = function () {
      return this.tableIns ? P.getOptions(this.tableIns.config.id) : this.config
    }),
    (a.prototype.flatToTree = function (e) {
      var n
      var i
      var l
      var d
      var r
      var o
      var c
      var u
      var t = this.getOptions()
      var a = t.tree
      var s = a.customName
      var t = t.id
      return (
        (e = e || P.cache[t]),
        (t = e),
        (n = s.id),
        (i = s.pid),
        (l = s.children),
        (d = a.data.rootPid),
        (n = n || 'id'),
        (i = i || 'parentId'),
        (l = l || 'children'),
        (c = {}),
        (u = []),
        layui.each(t, function (e, t) {
          ;(r = n + t[n]), (o = n + t[i]), c[r] || ((c[r] = {}), (c[r][l] = []))
          var a = {}
          ;(a[l] = c[r][l]), (c[r] = A.extend({}, t, a)), ((d ? c[r][i] === d : !c[r][i]) ? u : (c[o] || ((c[o] = {}), (c[o][l] = [])), c[o][l])).push(c[r])
        }),
        u
      )
    }),
    (a.prototype.treeToFlat = function (e, n, i) {
      var l = this
      var d = l.getOptions().tree.customName
      var r = d.children
      var o = d.pid
      var c = []
      return (
        layui.each(e, function (e, t) {
          var e = (i ? i + '-' : '') + e
          var a = A.extend({}, t)
          ;(a[o] = t[o] || n), c.push(a), (c = c.concat(l.treeToFlat(t[r], t[d.id], e)))
        }),
        c
      )
    }),
    (a.prototype.getTreeNode = function (e) {
      var t
      var a
      var n = this
      return e
        ? ((a = (t = n.getOptions()).tree),
          t.id,
          a.customName,
          {
            data: e,
            dataIndex: e[z],
            getParentNode: function () {
              return n.getNodeByIndex(e[p])
            }
          })
        : y.error('\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e')
    }),
    (a.prototype.getNodeByIndex = function (t) {
      var a
      var e
      var n = this
      var i = n.getNodeDataByIndex(t)
      return i
        ? ((e = n.getOptions()).tree.customName.parent,
          (a = e.id),
          ((e = {
            data: i,
            dataIndex: i[z],
            getParentNode: function () {
              return n.getNodeByIndex(i[p])
            },
            update: function (e) {
              return B.updateNode(a, t, e)
            },
            remove: function () {
              return B.removeNode(a, t)
            },
            expand: function (e) {
              return B.expandNode(a, A.extend({}, e, { index: t }))
            },
            setChecked: function (e) {
              return B.setRowChecked(a, A.extend({}, e, { index: t }))
            }
          }).dataIndex = t),
          e)
        : y.error('\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e')
    }),
    (a.prototype.getNodeById = function (a) {
      var e = this.getOptions()
      var n = e.tree.customName.id
      var i = ''
      var e = B.getData(e.id, !0)
      if (
        (layui.each(e, function (e, t) {
          if (t[n] === a) return (i = t[z]), !0
        }),
        i)
      ) {
        return this.getNodeByIndex(i)
      }
    }),
    (a.prototype.getNodeDataByIndex = function (e, t, a) {
      var n = this.getOptions()
      var i = n.tree
      var n = n.id
      var n = P.cache[n]
      var l = n[e]
      if (a !== 'delete' && l) return A.extend(l, a), t ? A.extend({}, l) : l
      for (var d = n, r = String(e).split('-'), o = 0, c = i.customName.children; o < r.length; o++) {
        if (a && o === r.length - 1) {
          if (a === 'delete') return (o ? d[c] : d).splice(r[o], 1)[0]
          A.extend((o ? d[c] : d)[r[o]], a)
        }
        d = (o ? d[c] : d)[r[o]]
      }
      return t ? A.extend({}, d) : d
    }),
    (B.getNodeDataByIndex = function (e, t) {
      e = j(e)
      if (e) return e.getNodeDataByIndex(t, !0)
    })
  ;(a.prototype.initData = function (e, t) {
    var a = this.getOptions()
    var n = a.tree
    var a = a.id
    var n = ((e = e || this.getTableData()), n.customName)
    var i = n.isParent
    var l = n.children
    var d = function (e, a) {
      layui.each(e, function (e, t) {
        i in t || (t[i] = !(!t[l] || !t[l].length)), (t[m] = t[z]), (t[p] = a = a || '')
        e = t[z] = (a ? a + '-' : '') + e
        d(t[l] || [], e)
      })
    }
    return d(e, t), g(a, l, e), e
  }),
    (r = {})
  var r
  var U = function (e, t, a) {
    return r[e] || (r[e] = layui.debounce(t, a)), r[e]
  }
  var J = function (t, a, n, i, l) {
    var e = t.trElem;
        var d = t.tableViewElem || e.closest('.layui-table-view');
        var r = t.tableId || d.attr(F);
        var o = t.options || P.getOptions(r);
        var e = t.dataIndex || e.attr('lay-data-index');
        var c = j(r);
        var u = o.tree || {};
        var s = u.customName || {};
        var f = s.isParent;
        var y = c.getNodeDataByIndex(e);
        var p = 'boolean' !== layui.type(a);
        var x = p ? !y[H] : a;
        var h = y[f] ? x : null
    if (l && x != y[H] && (!y[V] || y[V] === 'local')) {
      var m = u.callback.beforeExpand
      if (layui.type(m) === 'function' && !1 === m(r, y, a)) return h
    }
    var m = y[X];
        var b = d.find('tr[lay-data-index="' + e + '"]');
        var g = b.find('.layui-table-tree-flexIcon');
        var v = (c.updateNodeIcon({ scopeEl: b, isExpand: x, isParent: y[f] }), (y[H] = x), y[s.id])
    if ((v !== undefined && (c.status.expand[v] = x), h !== null)) {
      v = y[s.children] || []
      if (x)
        if (m) {
          if (!v.length) return
          b
            .nextAll(
              v
                .map(function (e, t, a) {
                  return 'tr[lay-data-index="' + e[z] + '"]'
                })
                .join(',')
            )
            .removeClass(L),
            layui.each(v, function (e, t) {
              t[f] &&
                (!n || p || t[H]
                  ? t[H] && J({ dataIndex: t[z], trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: d, tableId: r, options: o }, !0)
                  : J({ dataIndex: t[z], trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: d, tableId: r, options: o }, a, n, i, l))
            })
        } else {
          var N;
              var I;
              var C;
              var D;
              var T;
              var _;
              var k;
              var w;
              var O;
              var S;
              var E;
              var m = u['async'] || {};
              var b = m.url || o.url
          if (m.enable && y[f] && !y[V])
            return (
              (y[V] = 'loading'),
              g.html('<i class="layui-icon layui-icon-loading layui-anim layui-anim-loop layui-anim-rotate"></i>'),
              (N = function (e) {
                ;(y[V] = 'success'), (y[s.children] = e), c.initData(y[s.children], y[z]), J(t, !0, !p && n, i, l)
              }),
              (C = m.format),
              layui.type(C) === 'function'
                ? C(y, o, N)
                : ((I = A.extend({}, m.where || o.where)),
                  (C = m.autoParam),
                  layui.each(C, function (e, t) {
                    t = t.split('=')
                    I[t[0].trim()] = y[(t[1] || t[0]).trim()]
                  }),
                  (C = m.contentType || o.contentType) && C.indexOf('application/json') == 0 && (I = JSON.stringify(I)),
                  (O = m.method || o.method),
                  (D = m.dataType || o.dataType),
                  (T = m.jsonpCallback || o.jsonpCallback),
                  (_ = m.headers || o.headers),
                  (k = m.parseData || o.parseData),
                  (w = m.response || o.response),
                  A.ajax({
                    type: O || 'get',
                    url: b,
                    contentType: C,
                    data: I,
                    dataType: D || 'json',
                    jsonpCallback: T,
                    headers: _ || {},
                    success: function (e) {
                      ;(e = typeof k == 'function' ? k.call(o, e) || e : e)[w.statusName] != w.statusCode
                        ? ((y[V] = 'error'), g.html('<i class="layui-icon layui-icon-refresh"></i>'))
                        : N(e[w.dataName])
                    },
                    error: function (e, t) {
                      ;(y[V] = 'error'), typeof o.error == 'function' && o.error(e, t)
                    }
                  })),
              h
            )
          ;(y[X] = !0),
            v.length &&
              (!o.initSort || (o.url && !o.autoSort) || ((m = o.initSort).type ? layui.sort(v, m.field, m.type === 'desc', !0) : layui.sort(v, P.config.indexName, null, !0)),
              c.initData(y[s.children], y[z]),
              (O = P.getTrHtml(r, v, null, null, e)),
              (S = { trs: A(O.trs.join('')), trs_fixed: A(O.trs_fixed.join('')), trs_fixed_r: A(O.trs_fixed_r.join('')) }),
              (E = (e.split('-').length - 1 || 0) + 1),
              layui.each(v, function (e, t) {
                S.trs.eq(e).attr({ 'data-index': t[z], 'lay-data-index': t[z], 'data-level': E }).data('index', t[z]),
                  S.trs_fixed.eq(e).attr({ 'data-index': t[z], 'lay-data-index': t[z], 'data-level': E }).data('index', t[z]),
                  S.trs_fixed_r.eq(e).attr({ 'data-index': t[z], 'lay-data-index': t[z], 'data-level': E }).data('index', t[z])
              }),
              d
                .find(q)
                .find('tbody tr[lay-data-index="' + e + '"]')
                .after(S.trs),
              d
                .find(R)
                .find('tbody tr[lay-data-index="' + e + '"]')
                .after(S.trs_fixed),
              d
                .find(Y)
                .find('tbody tr[lay-data-index="' + e + '"]')
                .after(S.trs_fixed_r),
              c.renderTreeTable(S.trs, E),
              n) &&
              !p &&
              layui.each(v, function (e, t) {
                J({ dataIndex: t[z], trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: d, tableId: r, options: o }, a, n, i, l)
              })
        }
      else
        (c.isExpandAll = !1),
          (n && !p
            ? (layui.each(v, function (e, t) {
                J({ dataIndex: t[z], trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: d, tableId: r, options: o }, a, n, i, l)
              }),
              d.find(
                v
                  .map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[z] + '"]'
                  })
                  .join(',')
              ))
            : ((b = c.treeToFlat(v, y[s.id], e)),
              d.find(
                b
                  .map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[z] + '"]'
                  })
                  .join(',')
              ))
          ).addClass(L)
      U(
        'resize-' + r,
        function () {
          B.resize(r)
        },
        0
      )(),
        l && y[V] !== 'loading' && ((C = u.callback.onExpand), layui.type(C) === 'function') && C(r, y, x)
    }
    return h
  }
  var v =
    ((B.expandNode = function (e, t) {
      var a;
          var n;
          var i;
          var e = j(e)
      if (e)
        return (
          (a = (t = t || {}).index),
          (n = t.expandFlag),
          (i = t.inherit),
          (t = t.callbackFlag),
          (e = e.getOptions().elem.next()),
          J({ trElem: e.find('tr[lay-data-index="' + a + '"]').first() }, n, i, null, t)
        )
    }),
    (B.expandAll = function (a, e) {
      if (layui.type(e) !== 'boolean') return y.error('expandAll \u7684\u5c55\u5f00\u72b6\u6001\u53c2\u6570\u53ea\u63a5\u6536true/false')
      var t = j(a)
      if (t) {
        t.isExpandAll = e
        var n = t.getOptions();
            var i = n.tree;
            var l = n.elem.next();
            var d = i.customName.isParent;
            var r = i.customName.id;
            var o = i.view.showFlexIconIfNotParent
        if (e) {
          e = B.getData(a, !0)
          if (i['async'].enable) {
            var c = !0
            if (
              (layui.each(e, function (e, t) {
                if (t[d] && !t[V]) return !(c = !1)
              }),
              !c)
            )
              {return void layui.each(B.getData(a), function (e, t) {
                  B.expandNode(a, { index: t[z], expandFlag: !0, inherit: !0 })
                })}
          }
          var u = !0
          if (
            (layui.each(e, function (e, t) {
              if (t[d] && !t[X]) return !(u = !1)
            }),
            u)
          )
            {t.updateStatus(null, function (e) {
                ;(e[d] || o) && ((e[H] = !0), e[r] !== undefined) && (t.status.expand[e[r]] = !0)
              }),
                l.find('tbody tr[data-level!="0"]').removeClass(L),
                l.find('.layui-table-tree-flexIcon').html(i.view.flexIconOpen),
                i.view.showIcon && l.find('.layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)').html(i.view.iconOpen)}
          else {
            if (
              (t.updateStatus(null, function (e) {
                ;(e[d] || o) && ((e[H] = !0), (e[X] = !0), e[r] !== undefined) && (t.status.expand[e[r]] = !0)
              }),
              n.initSort && n.initSort.type && n.autoSort)
            )
              return B.sort(a)
            var s;
                var n = P.getTrHtml(a, e);
                var f = { trs: A(n.trs.join('')), trs_fixed: A(n.trs_fixed.join('')), trs_fixed_r: A(n.trs_fixed_r.join('')) }
            layui.each(e, function (e, t) {
              var a = t[z].split('-').length - 1
              ;(s = { 'data-index': t[z], 'lay-data-index': t[z], 'data-level': a }),
                f.trs.eq(e).attr(s).data('index', t[z]),
                f.trs_fixed.eq(e).attr(s).data('index', t[z]),
                f.trs_fixed_r.eq(e).attr(s).data('index', t[z])
            }),
              layui.each(['main', 'fixed-l', 'fixed-r'], function (e, t) {
                l.find('.layui-table-' + t + ' tbody').html(f[['trs', 'trs_fixed', 'trs_fixed_r'][e]])
              }),
              t.renderTreeTable(l, 0, !1)
          }
        } else
          {t.updateStatus(null, function (e) {
              ;(e[d] || o) && ((e[H] = !1), e[r] !== undefined) && (t.status.expand[e[r]] = !1)
            }),
              l.find('.layui-table-box tbody tr[data-level!="0"]').addClass(L),
              l.find('.layui-table-tree-flexIcon').html(i.view.flexIconClose),
              i.view.showIcon && l.find('.layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)').html(i.view.iconClose)}
        B.resize(a)
      }
    }),
    (a.prototype.updateNodeIcon = function (e) {
      var t = this.getOptions().tree || {};
          var a = e.scopeEl;
          var n = e.isExpand;
          var e = e.isParent
      a
        .find('.layui-table-tree-flexIcon')
        .css('visibility', e || t.view.showFlexIconIfNotParent ? 'visible' : 'hidden')
        .html(n ? t.view.flexIconOpen : t.view.flexIconClose),
        t.view.showIcon &&
          ((a = a.find('.layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom)')),
          (n = e ? (n ? t.view.iconOpen : t.view.iconClose) : t.view.iconLeaf),
          a.toggleClass('layui-table-tree-iconLeaf', !e).html(n))
    }),
    (a.prototype.renderTreeTable = function (e, t, a) {
      var l = this;
          var n = l.getOptions();
          var d = n.elem.next();
          var i = (d.hasClass(h) || d.addClass(h), n.id);
          var r = n.tree || {};
          var o = (r.data, r.view || {});
          var c = r.customName || {};
          var u = c.isParent;
          var s = (d.attr('lay-filter'), l);
          var f =
            ((t = t || 0) ||
              (d.find('.layui-table-body tr:not([data-level])').attr('data-level', t),
              layui.each(P.cache[i], function (e, t) {
                d.find('.layui-table-main tbody tr[data-level="0"]:eq(' + e + ')').attr('lay-data-index', t[z]),
                  d.find('.layui-table-fixed-l tbody tr[data-level="0"]:eq(' + e + ')').attr('lay-data-index', t[z]),
                  d.find('.layui-table-fixed-r tbody tr[data-level="0"]:eq(' + e + ')').attr('lay-data-index', t[z])
              })),
            null);
          var y = c.name;
          var p = o.indent || 14
      if (
        (layui.each(e.find('td[data-field="' + y + '"]'), function (e, t) {
          var a;
              var n;
              var i = (t = A(t)).closest('tr');
              var t = t.children('.layui-table-cell')
          t.hasClass('layui-table-tree-item') ||
            ((n = i.attr('lay-data-index')) &&
              ((i = d.find('tr[lay-data-index="' + n + '"]')),
              (a = s.getNodeDataByIndex(n))[H] && a[u] && ((f = f || {})[n] = !0),
              a[b] && i.find('input[type="checkbox"][name="layTableCheckbox"]').prop('indeterminate', !0),
              (n = t.html()),
              (t = i.find('td[data-field="' + y + '"]>div.layui-table-cell')).addClass('layui-table-tree-item'),
              t
                .html(
                  [
                    '<div class="layui-inline layui-table-tree-flexIcon" ',
                    'style="',
                    'margin-left: ' + p * i.attr('data-level') + 'px;',
                    a[u] || o.showFlexIconIfNotParent ? '' : ' visibility: hidden;',
                    '">',
                    a[H] ? o.flexIconOpen : o.flexIconClose,
                    '</div>',
                    o.showIcon
                      ? '<div class="layui-inline layui-table-tree-nodeIcon' +
                        (a[c.icon] || o.icon ? ' layui-table-tree-iconCustom' : '') +
                        (a[u] ? '' : ' layui-table-tree-iconLeaf') +
                        '">' +
                        (l.normalizedIcon(a[c.icon]) || o.icon || (a[u] ? (a[H] ? o.iconOpen : o.iconClose) : o.iconLeaf) || '') +
                        '</div>'
                      : '',
                    n
                  ].join('')
                )
                .find('.layui-table-tree-flexIcon')
                .on('click', function (e) {
                  layui.stope(e), J({ trElem: i }, null, null, null, !0)
                })))
        }),
        !t && r.view.expandAllDefault && l.isExpandAll === undefined)
      )
        {return B.expandAll(i, !0)
        ;}(!1 !== a && f
        ? (layui.each(f, function (e, t) {
            e = d.find('tr[lay-data-index="' + e + '"]')
            e.find('.layui-table-tree-flexIcon').html(o.flexIconOpen), J({ trElem: e.first() }, !0)
          }),
          U(
            'renderTreeTable2-' + i,
            function () {
              x.render(A('.layui-table-tree[' + F + '="' + i + '"]'))
            },
            0
          ))
        : U(
            'renderTreeTable-' + i,
            function () {
              n.hasNumberCol && v(l), x.render(A('.layui-table-tree[' + F + '="' + i + '"]'))
            },
            0
          ))()
    }),
    function (a) {
      var e = a.getOptions();
          var t = e.elem.next();
          var n = 0;
          var i = t.find('.layui-table-main tbody tr');
          var l = t.find('.layui-table-fixed-l tbody tr');
          var d = t.find('.layui-table-fixed-r tbody tr')
      layui.each(a.treeToFlat(P.cache[e.id]), function (e, t) {
        t.LAY_HIDE ||
          ((a.getNodeDataByIndex(t[z]).LAY_NUM = ++n),
          i.eq(e).find('.laytable-cell-numbers').html(n),
          l.eq(e).find('.laytable-cell-numbers').html(n),
          d.eq(e).find('.laytable-cell-numbers').html(n))
      })
    })
  var N =
    ((a.prototype.render = function (e) {
      var t = this
      ;(t.tableIns = P[e === 'reloadData' ? 'reloadData' : 'reload'](t.tableIns.config.id, A.extend(!0, {}, t.config))), (t.config = t.tableIns.config)
    }),
    (a.prototype.reload = function (e, t, a) {
      var n = this
      ;(e = e || {}),
        delete n.haveInit,
        layui.each(e, function (e, t) {
          'array' === layui.type(t) && delete n.config[e]
        }),
        d(n.getOptions().id, e, a || !0),
        (n.config = A.extend(t, {}, n.config, e)),
        n.render(a)
    }),
    (B.reloadData = function () {
      var e = A.extend(!0, [], arguments)
      return (e[3] = 'reloadData'), B.reload.apply(null, e)
    }),
    function (e, a, n, i) {
      var l = []
      return (
        layui.each(e, function (e, t) {
          layui.type(a) === 'function' ? a(t) : A.extend(t, a), l.push(A.extend({}, t)), i || (l = l.concat(N(t[n], a, n, i)))
        }),
        l
      )
    })
  var o =
    ((a.prototype.updateStatus = function (e, t, a) {
      var n = this.getOptions();
          var i = n.tree
      return (e = e || P.cache[n.id]), N(e, t, i.customName.children, a)
    }),
    (a.prototype.getTableData = function () {
      var e = this.getOptions()
      return P.cache[e.id]
    }),
    (B.updateStatus = function (e, t, a) {
      var e = j(e);
          var n = e.getOptions()
      return (a = a || (n.url ? P.cache[n.id] : n.data)), e.updateStatus(a, t)
    }),
    (B.sort = function (e) {
      var t;
          var a;
          var i;
          var l;
          var n;
          var d = j(e)
      d &&
        ((n = (t = d.getOptions()).tree),
        (a = B.getData(e)),
        (i = n.customName.children),
        (l = function (e, a, n) {
          layui.sort(e, a, n, !0),
            layui.each(e, function (e, t) {
              l(t[i] || [], a, n)
            })
        }),
        t.autoSort) &&
        ((n = t.initSort).type ? l(a, n.field, n.type === 'desc') : l(a, P.config.indexName, null), (P.cache[e] = a), d.initData(a), B.renderData(e))
    }),
    function (n) {
      var t = n.config.id;
          var i = j(t);
          var a = (n.data = B.getNodeDataByIndex(t, n.index));
          var l = a[z];
          var d = ((n.dataIndex = l), n.update)
      ;(n.update = function () {
        var e = arguments;
            var t = (A.extend(i.getNodeDataByIndex(l), e[0]), d.apply(this, e));
            var a = n.config.tree.customName.name
        return (
          a in e[0] &&
            n.tr
              .find('td[data-field="' + a + '"]')
              .children('div.layui-table-cell')
              .removeClass('layui-table-tree-item'),
          i.renderTreeTable(n.tr, n.tr.attr('data-level'), !1),
          t
        )
      }),
        (n.del = function () {
          B.removeNode(t, a)
        }),
        (n.setRowChecked = function (e) {
          B.setRowChecked(t, { index: a, checked: e })
        })
    })
  var u =
    ((B.updateNode = function (e, a, t) {
      var n
      var i
      var l
      var d
      var r
      var o = j(e)
      o &&
        ((d = o.getOptions()).tree, (d = (n = d.elem.next()).find('tr[lay-data-index="' + a + '"]')), (i = d.attr('data-index')), (l = d.attr('data-level')), t) &&
        ((d = o.getNodeDataByIndex(a, !1, t)),
        (r = P.getTrHtml(e, [d])),
        layui.each(['main', 'fixed-l', 'fixed-r'], function (e, t) {
          n.find('.layui-table-' + t + ' tbody tr[lay-data-index="' + a + '"]').replaceWith(
            A(r[['trs', 'trs_fixed', 'trs_fixed_r'][e]].join('')).attr({ 'data-index': i, 'lay-data-index': a, 'data-level': l }).data('index', i)
          )
        }),
        o.renderTreeTable(n.find('tr[lay-data-index="' + a + '"]'), l))
    }),
    (B.removeNode = function (e, t, a) {
      var n = j(e)
      if (n) {
        var i
        var l = n.getOptions()
        var d = l.tree
        var r = d.customName.isParent
        var o = d.customName.children
        var c = l.elem.next()
        var u = []
        var s = P.cache[e]
        var t = n.getNodeDataByIndex('string' === layui.type(t) ? t : t[z], !1, 'delete')
        var f = n.getNodeDataByIndex(t[p])
        var d = (n.updateCheckStatus(f), n.treeToFlat([t], t[d.customName.pid], t[p]))
        var t =
          (layui.each(d, function (e, t) {
            t = t[z]
            u.push('tr[lay-data-index="' + t + '"]'), t.indexOf('-') !== -1 && delete s[t]
          }),
          c.find(u.join(',')).remove(),
          n.initData())
        for (i in s) i.indexOf('-') !== -1 && i !== s[i][z] && delete s[i]
        layui.each(n.treeToFlat(t), function (e, t) {
          t[m] &&
            t[m] !== t[z] &&
            c
              .find('tr[lay-data-index="' + t[m] + '"]')
              .attr({ 'data-index': t[z], 'lay-data-index': t[z] })
              .data('index', t[z])
        }),
          layui.each(s, function (e, t) {
            c.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]')
              .attr('data-index', e)
              .data('index', e)
          }),
          l.hasNumberCol && v(n),
          f && ((d = c.find('tr[lay-data-index="' + f[z] + '"]')), a || (f[r] = !(!f[o] || !f[o].length)), n.updateNodeIcon({ scopeEl: d, isExpand: f[H], isParent: f[r] })),
          B.resize(e)
      }
    }),
    (B.addNodes = function (e, t) {
      var a = j(e)
      if (a) {
        var n = a.getOptions()
        var i = n.tree
        var l = n.elem.next()
        var d = P.config.checkName
        var r = (t = t || {}).parentIndex
        var o = t.index
        var c = t.data
        var t = t.focus
        var u = (r = 'number' === layui.type(r) ? r.toString() : r) ? a.getNodeDataByIndex(r) : null
        var o = 'number' === layui.type(o) ? o : -1
        var c = A.extend(!0, [], layui.isArray(c) ? c : [c])
        layui.each(c, function (e, t) {
          d in t || !u || (t[d] = u[d])
        }),
          a.getTableData()
        if (u) {
          var s = i.customName.isParent
          var f = i.customName.children
          u[s] = !0
          var y = (y = u[f]) ? ((p = y.splice(o === -1 ? y.length : o)), (u[f] = y.concat(c, p))) : (u[f] = c)
          var f =
            (a.updateStatus(y, function (e) {
              ;(e[s] || i.view.showFlexIconIfNotParent) && (e[X] = !1)
            }),
            a.treeToFlat(y))
          l
            .find(
              f
                .map(function (e) {
                  return 'tr[lay-data-index="' + e[z] + '"]'
                })
                .join(',')
            )
            .remove(),
            a.initData(),
            (u[X] = !1),
            (u[V] = 'local'),
            J({ trElem: l.find('tr[lay-data-index="' + r + '"]') }, !0)
        } else {
          var p = P.cache[e].splice(o === -1 ? P.cache[e].length : o)
          if (
            ((P.cache[e] = P.cache[e].concat(c, p)),
            n.url || (n.page ? ((y = n.page), n.data.splice.apply(n.data, [y.limit * (y.curr - 1), y.limit].concat(P.cache[e]))) : (n.data = P.cache[e])),
            a.initData(),
            l.find('.layui-none').length)
          ) {
            return P.renderData(e), c
          }
          var x
          var f = P.getTrHtml(e, c)
          var h = { trs: A(f.trs.join('')), trs_fixed: A(f.trs_fixed.join('')), trs_fixed_r: A(f.trs_fixed_r.join('')) }
          var r =
            (layui.each(c, function (e, t) {
              ;(x = { 'data-index': t[z], 'lay-data-index': t[z], 'data-level': '0' }),
                h.trs.eq(e).attr(x).data('index', t[z]),
                h.trs_fixed.eq(e).attr(x).data('index', t[z]),
                h.trs_fixed_r.eq(e).attr(x).data('index', t[z])
            }),
            parseInt(c[0][z]) - 1)
          var y = l.find(q)
          var n = l.find(R)
          var f = l.find(Y)
          r == -1
            ? y.find('tr[data-level="0"][data-index="0"]')[0]
              ? (y.find('tr[data-level="0"][data-index="0"]').before(h.trs),
                n.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed),
                f.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed_r))
              : (y.find('tbody').prepend(h.trs), n.find('tbody').prepend(h.trs_fixed), f.find('tbody').prepend(h.trs_fixed_r))
            : o === -1
            ? (y.find('tbody').append(h.trs), n.find('tbody').append(h.trs_fixed), f.find('tbody').append(h.trs_fixed_r))
            : ((r = p[0][m]),
              y.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs),
              n.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed),
              f.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed_r)),
            layui.each(P.cache[e], function (e, t) {
              l.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]')
                .attr('data-index', e)
                .data('index', e)
            }),
            a.renderTreeTable(
              l.find(
                c
                  .map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[z] + '"]'
                  })
                  .join(',')
              )
            )
        }
        return (
          a.updateCheckStatus(u),
          u && ((o = l.find('tr[lay-data-index="' + u[z] + '"]')), a.updateNodeIcon({ scopeEl: o, isExpand: u[H], isParent: u[s] })),
          B.resize(e),
          t &&
            l
              .find(q)
              .find('tr[lay-data-index="' + c[0][z] + '"]')
              .get(0)
              .scrollIntoViewIfNeeded(),
          c
        )
      }
    }),
    (B.checkStatus = function (e, n) {
      var i
      var t
      var a
      var l = j(e)
      if (l) {
        return (
          (l = l.getOptions().tree),
          (i = P.config.checkName),
          (t = B.getData(e, !0).filter(function (e, t, a) {
            return e[i] || (n && e[b])
          })),
          (a = !0),
          layui.each(l.data.cascade === 'all' ? P.cache[e] : B.getData(e, !0), function (e, t) {
            if (!t[i]) return !(a = !1)
          }),
          { data: t, isAll: a }
        )
      }
    }),
    B.on('sort', function (e) {
      var e = e.config
      var t = e.elem.next()
      var e = e.id
      t.hasClass(h) && B.sort(e)
    }),
    B.on('row', function (e) {
      e.config.elem.next().hasClass(h) && o(e)
    }),
    B.on('rowDouble', function (e) {
      var t = e.config
      var a = t.elem.next()
      t.id
      a.hasClass(h) && (o(e), (t.tree || {}).view.dblClickExpand) && J({ trElem: e.tr.first() }, null, null, null, !0)
    }),
    B.on('rowContextmenu', function (e) {
      var t = e.config
      var a = t.elem.next()
      t.id
      a.hasClass(h) && o(e)
    }),
    B.on('tool', function (e) {
      var t = e.config
      var a = t.elem.next()
      t.id
      a.hasClass(h) && o(e)
    }),
    B.on('edit', function (e) {
      var t = e.config
      var a = t.elem.next()
      t.id
      a.hasClass(h) && (o(e), e.field === t.tree.customName.name) && (((a = {})[e.field] = e.value), e.update(a))
    }),
    B.on('radio', function (e) {
      var t = e.config
      var a = t.elem.next()
      var t = t.id
      a.hasClass(h) && ((a = j(t)), o(e), u.call(a, e.tr, e.checked))
    }),
    (a.prototype.setRowCheckedClass = function (e, t) {
      var a = this.getOptions()
      var n = (e.data('index'), a.elem.next())
      e[t ? 'addClass' : 'removeClass'](l),
        e.each(function () {
          var e = A(this).data('index')
          n.find('.layui-table-fixed-r tbody tr[data-index="' + e + '"]')[t ? 'addClass' : 'removeClass'](l)
        })
    }),
    (a.prototype.updateCheckStatus = function (e, t) {
      var a
      var n
      var i
      var l
      var d
      var r
      var o
      var c = this
      var u = c.getOptions()
      return (
        !!u.hasChecboxCol &&
        ((a = u.tree),
        (n = u.id),
        (i = u.elem.next()),
        (l = P.config.checkName),
        ((d = a.data.cascade) !== 'all' && d !== 'parent') ||
          !e ||
          ((d = c.updateParentCheckStatus(e, layui.type(t) === 'boolean' ? t : null)),
          layui.each(d, function (e, t) {
            var a = i.find('tr[lay-data-index="' + t[z] + '"]  input[name="layTableCheckbox"]:not(:disabled)')
            var n = t[l]
            c.setRowCheckedClass(a.closest('tr'), n), x.render(a.prop({ checked: n, indeterminate: t[b] }))
          })),
        (o = !(r = !0)),
        (e = (e = a.data.cascade === 'all' ? P.cache[n] : B.getData(n, !0)).filter(function (e) {
          return !e[u.disabledName]
        })).length > 0
          ? layui.each(e, function (e, t) {
              if (((t[l] || t[b]) && (o = !0), t[l] || (r = !1), o && !r)) return !0
            })
          : (r = !1),
        (o = o && !r),
        x.render(i.find('input[name="layTableCheckbox"][lay-filter="layTableAllChoose"]').prop({ checked: r, indeterminate: o })),
        r)
      )
    }),
    (a.prototype.updateParentCheckStatus = function (a, n) {
      var i
      var e = this.getOptions()
      var t = e.tree
      var e = e.id
      var l = P.config.checkName
      var t = t.customName.children
      var d = []
      return (
        !(a[b] = !1) === n
          ? a[t].length
            ? layui.each(a[t], function (e, t) {
                if (!t[l]) return (n = !1), (a[b] = !0)
              })
            : (n = !1)
          : !1 === n
          ? layui.each(a[t], function (e, t) {
              if (t[l] || t[b]) return (a[b] = !0)
            })
          : ((n = !1),
            (i = 0),
            layui.each(a[t], function (e, t) {
              t[l] && i++
            }),
            (n = a[t].length ? a[t].length === i : a[l]),
            (a[b] = !n && i > 0)),
        (a[l] = n),
        d.push(A.extend({}, a)),
        (d = a[p] ? d.concat(this.updateParentCheckStatus(P.cache[e][a[p]], n)) : d)
      )
    }),
    function (e, t, a) {
      var n = this
      var i = n.getOptions()
      var l = i.tree
      var d = i.id
      var r = i.elem.next()
      var o = (e.length ? e : r).find('.laytable-cell-radio, .laytable-cell-checkbox').children('input').last()
      var i = o.attr('type') === 'radio'
      if (a) {
        a = function () {
          var e = function (e) {
            layui.stope(e)
          }
          o.parent().on('click', e), o.next().click(), o.parent().off('click', e)
        }
        i ? t && !o.prop('checked') && a() : (layui.type(t) === 'boolean' && o.prop('checked') === t) || a()
      } else {
        var c
        var a = n.getNodeDataByIndex(e.attr('data-index'))
        var u = P.config.checkName
        if (!i) {
          return (
            (t = layui.type(t) === 'boolean' ? t : !a[u]),
            (i = n.updateStatus(
              a ? [a] : P.cache[d],
              function (e) {
                e[P.config.disabledName] || ((e[u] = t), (e[b] = !1))
              },
              a && ['parent', 'none'].indexOf(l.data.cascade) !== -1
            )),
            (d = r.find(
              i
                .map(function (e) {
                  return 'tr[lay-data-index="' + e[z] + '"] input[name="layTableCheckbox"]:not(:disabled)'
                })
                .join(',')
            )),
            n.setRowCheckedClass(d.closest('tr'), t),
            x.render(d.prop({ checked: t, indeterminate: !1 })),
            a && a[p] && (c = n.getNodeDataByIndex(a[p])),
            n.updateCheckStatus(c, t)
          )
        }
        a &&
          (n.updateStatus(null, function (e) {
            var t
            e[u] &&
              ((t = r.find('tr[lay-data-index="' + e[z] + '"] input[type="radio"][lay-type="layTableRadio"]')),
              (e[u] = !1),
              n.setRowCheckedClass(t.closest('tr'), !1),
              x.render(t.prop('checked', !1)))
          }),
          (a[u] = t),
          n.setRowCheckedClass(e, t),
          n.setRowCheckedClass(e.siblings(), !1),
          x.render(e.find('input[type="radio"][lay-type="layTableRadio"]').prop('checked', t)))
      }
    })
  B.on('checkbox', function (e) {
    var t = e.config
    var a = t.elem.next()
    var t = t.id
    a.hasClass(h) && ((a = j(t)), (t = e.checked), o(e), (e.isAll = u.call(a, e.tr, t)))
  }),
    (B.setRowChecked = function (a, e) {
      var t
      var n
      var i
      var l
      var d
      var r
      var o
      var c = j(a)
      c &&
        ((t = c.getOptions().elem.next()),
        (i = (e = e || {}).index),
        (n = e.checked),
        (e = e.callbackFlag),
        (i = layui.type(i) === 'string' ? i : i[z]),
        (r = c.getNodeDataByIndex(i))) &&
        ((l = function (e) {
          o.push(e), t.find('tr[lay-data-index="' + e + '"]').length || ((e = c.getNodeDataByIndex(e)[p]) && l(e))
        }),
        (d = t.find('tr[lay-data-index="' + i + '"]')).length ||
          ((r = r[p]),
          (o = []),
          l(r),
          layui.each(o.reverse(), function (e, t) {
            B.expandNode(a, { index: t, expandFlag: !0 })
          }),
          (d = t.find('tr[lay-data-index="' + i + '"]'))),
        u.call(c, d, n, e))
    }),
    (B.checkAllNodes = function (e, t) {
      var a
      var e = j(e)
      e && ((a = e.getOptions().elem.next()), u.call(e, a.find('tr[data-index="NONE"]'), !!t))
    }),
    (B.getData = function (e, t) {
      var a
      var n = j(e)
      if (n) {
        return (
          (a = []),
          layui.each(A.extend(!0, [], P.cache[e] || []), function (e, t) {
            a.push(t)
          }),
          t ? n.treeToFlat(a) : a
        )
      }
    }),
    (B.reloadAsyncNode = function (a, e) {
      var t
      var n
      var i = j(a)
      i &&
        (t = i.getOptions().tree)['async'] &&
        t['async'].enable &&
        (n = i.getNodeDataByIndex(e)) &&
        ((n[X] = !1),
        (n[H] = !1),
        (n[V] = !1),
        layui.each(i.treeToFlat(n[t.customName.children]).reverse(), function (e, t) {
          B.removeNode(a, t[z], !0)
        }),
        B.expandNode(a, { index: e, expandFlag: !0, callbackFlag: !0 }))
    }),
    (B.getNodeById = function (e, t) {
      e = j(e)
      if (e) return e.getNodeById(t)
    }),
    (B.getNodesByFilter = function (e, t, a) {
      var n
      var i
      var l
      var d = j(e)
      if (d) {
        return (
          (i = d.getOptions()),
          (n = (a = a || {}).isSingle),
          (a = (a = a.parentNode) && a.data),
          (i = d.treeToFlat(a ? a[i.tree.customName.children] || [] : P.cache[e]).filter(t)),
          (l = []),
          layui.each(i, function (e, t) {
            if ((l.push(d.getNodeByIndex(t[z])), n)) return !0
          }),
          l
        )
      }
    }),
    (i.that = {}),
    (B.reload = function (e, t, a, n) {
      e = j(e)
      if (e) return e.reload(t, a, n), i.call(e)
    }),
    (B.render = function (e) {
      e = new a(e)
      return i.call(e)
    }),
    e('treeTable', B)
})
layui.define(['form', 'util'], function (e) {
  'use strict'
  var p = layui.$
  var i = layui.form
  var y = layui.layer
  var f = layui.util
  var a = 'tree'
  var t = {
    config: { customName: { id: 'id', title: 'title', children: 'children' } },
    index: layui[a] ? layui[a].index + 1e4 : 0,
    set: function (e) {
      var i = this
      return (i.config = p.extend({}, i.config, e)), i
    },
    on: function (e, i) {
      return layui.onevent.call(this, a, e, i)
    }
  }
  var n = function () {
    var i = this;
        var e = i.config;
        var a = e.id || i.index
    return (
      (n.that[a] = i),
      {
        config: (n.config[a] = e),
        reload: function (e) {
          i.reload.call(i, e)
        },
        getChecked: function () {
          return i.getChecked.call(i)
        },
        setChecked: function (e) {
          return i.setChecked.call(i, e)
        }
      }
    )
  }
  var m = 'layui-hide'
  var u = 'layui-disabled'
  var k = 'layui-tree-set'
  var C = 'layui-tree-iconClick'
  var v = 'layui-icon-addition'
  var x = 'layui-icon-subtraction'
  var b = 'layui-tree-entry'
  var g = 'layui-tree-main'
  var w = 'layui-tree-txt'
  var N = 'layui-tree-pack'
  var F = 'layui-tree-spread'
  var T = 'layui-tree-setLineShort'
  var L = 'layui-tree-showLine'
  var S = 'layui-tree-lineExtend'
  var l = function (e) {
    var i = this
    ;(i.index = ++t.index), (i.config = p.extend({}, i.config, t.config, e)), i.render()
  }
  ;(l.prototype.config = {
    data: [],
    showCheckbox: !1,
    showLine: !0,
    accordion: !1,
    onlyIconControl: !1,
    isJump: !1,
    edit: !1,
    text: { defaultNodeName: '\u672a\u547d\u540d', none: '\u65e0\u6570\u636e' }
  }),
    (l.prototype.reload = function (e) {
      var a = this
      layui.each(e, function (e, i) {
        layui.type(i) === 'array' && delete a.config[e]
      }),
        (a.config = p.extend(!0, {}, a.config, e)),
        a.render()
    }),
    (l.prototype.render = function () {
      var e = this
      var i = e.config
      var a =
        ((i.customName = p.extend({}, t.config.customName, i.customName)),
        (e.checkids = []),
        p(
          '<div class="layui-tree layui-border-box' +
            (i.showCheckbox ? ' layui-form' : '') +
            (i.showLine ? ' layui-tree-line' : '') +
            '" lay-filter="LAY-tree-' +
            e.index +
            '"></div>'
        ))
      var n = (e.tree(a), (i.elem = p(i.elem)))
      if (n[0]) {
        if (
          ((e.key = i.id || e.index),
          (e.elem = a),
          (e.elemNone = p('<div class="layui-tree-emptyText">' + i.text.none + '</div>')),
          n.html(e.elem),
          e.elem.find('.layui-tree-set').length == 0)
        ) {
          return e.elem.append(e.elemNone)
        }
        i.showCheckbox && e.renderForm('checkbox'),
          e.elem.find('.layui-tree-set').each(function () {
            var e = p(this)
            e.parent('.layui-tree-pack')[0] || e.addClass('layui-tree-setHide'),
              !e.next()[0] && e.parents('.layui-tree-pack').eq(1).hasClass('layui-tree-lineExtend') && e.addClass(T),
              e.next()[0] || e.parents('.layui-tree-set').eq(0).next()[0] || e.addClass(T)
          }),
          e.events()
      }
    }),
    (l.prototype.renderForm = function (e) {
      i.render(e, 'LAY-tree-' + this.index)
    }),
    (l.prototype.tree = function (r, e) {
      var d = this
      var s = d.config
      var o = s.customName
      var e = e || s.data
      layui.each(e, function (e, i) {
        var a
        var n
        var t = i[o.children] && 0 < i[o.children].length
        var l = p('<div class="layui-tree-pack" ' + (i.spread ? 'style="display: block;"' : '') + '></div>')
        var c = p(
          [
            '<div data-id="' + i[o.id] + '" class="layui-tree-set' + (i.spread ? ' layui-tree-spread' : '') + (i.checked ? ' layui-tree-checkedFirst' : '') + '">',
            '<div class="layui-tree-entry">',
            '<div class="layui-tree-main">',
            s.showLine
              ? t
                ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (i.spread ? 'layui-icon-subtraction' : 'layui-icon-addition') + '"></i></span>'
                : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>'
              : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (t ? '' : m) + '"></i></span>',
            s.showCheckbox
              ? '<input type="checkbox" name="' +
                (i.field || 'layuiTreeCheck_' + i[o.id]) +
                '" same="layuiTreeCheck" lay-skin="primary" ' +
                (i.disabled ? 'disabled' : '') +
                ' value="' +
                i[o.id] +
                '">'
              : '',
            s.isJump && i.href
              ? '<a href="' + i.href + '" target="_blank" class="' + w + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + '</a>'
              : '<span class="' + w + (i.disabled ? ' ' + u : '') + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + '</span>',
            '</div>',
            s.edit
              ? ((a = {
                  add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
                  update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
                  del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
                }),
                (n = ['<div class="layui-btn-group layui-tree-btnGroup">']),
                !0 === s.edit && (s.edit = ['update', 'del']),
                typeof s.edit == 'object'
                  ? (layui.each(s.edit, function (e, i) {
                      n.push(a[i] || '')
                    }),
                    n.join('') + '</div>')
                  : void 0)
              : '',
            '</div></div>'
          ].join('')
        )
        t && (c.append(l), d.tree(l, i[o.children])),
          r.append(c),
          c.prev('.' + k)[0] && c.prev().children('.layui-tree-pack').addClass('layui-tree-showLine'),
          t || c.parent('.layui-tree-pack').addClass('layui-tree-lineExtend'),
          d.spread(c, i),
          s.showCheckbox && (i.checked && d.checkids.push(i[o.id]), d.checkClick(c, i)),
          s.edit && d.operate(c, i)
      })
    }),
    (l.prototype.spread = function (n, t) {
      var l = this
      var c = l.config
      var e = n.children('.' + b)
      var i = e.children('.' + g)
      var a = i.find('input[same="layuiTreeCheck"]')
      var r = e.find('.' + C)
      var e = e.find('.' + w)
      var d = c.onlyIconControl ? r : i
      var s = ''
      d.on('click', function (e) {
        var i = n.children('.' + N)
        var a = (d.children('.layui-icon')[0] ? d : d.find('.layui-tree-icon')).children('.layui-icon')
        i[0]
          ? n.hasClass(F)
            ? (n.removeClass(F), i.slideUp(200), a.removeClass(x).addClass(v), l.updateFieldValue(t, 'spread', !1))
            : (n.addClass(F),
              i.slideDown(200),
              a.addClass(x).removeClass(v),
              l.updateFieldValue(t, 'spread', !0),
              c.accordion &&
                ((i = n.siblings('.' + k)).removeClass(F), i.children('.' + N).slideUp(200), i.find('.layui-tree-icon').children('.layui-icon').removeClass(x).addClass(v)))
          : (s = 'normal')
      }),
        e.on('click', function () {
          p(this).hasClass(u) ||
            ((s = n.hasClass(F) ? (c.onlyIconControl ? 'open' : 'close') : c.onlyIconControl ? 'close' : 'open'),
            a[0] && l.updateFieldValue(t, 'checked', a.prop('checked')),
            c.click && c.click({ elem: n, state: s, data: t }))
        })
    }),
    (l.prototype.updateFieldValue = function (e, i, a) {
      i in e && (e[i] = a)
    }),
    (l.prototype.setCheckbox = function (e, i, a) {
      var t
      var n = this
      var l = n.config.customName
      var c = a.prop('checked')
      a.prop('disabled') ||
        ((typeof i[l.children] != 'object' && !e.find('.' + N)[0]) ||
          e
            .find('.' + N)
            .find('input[same="layuiTreeCheck"]')
            .each(function (e) {
              this.disabled || ((e = i[l.children][e]) && n.updateFieldValue(e, 'checked', c), n.updateFieldValue(this, 'checked', c))
            }),
        (t = function (e) {
          var i, a, n
          e.parents('.' + k)[0] &&
            ((a = (e = e.parent('.' + N)).parent()),
            (n = e.prev().find('input[same="layuiTreeCheck"]')),
            c
              ? n.prop('checked', c)
              : (e.find('input[same="layuiTreeCheck"]').each(function () {
                  this.checked && (i = !0)
                }),
                i || n.prop('checked', !1)),
            t(a))
        })(e),
        n.renderForm('checkbox'))
    }),
    (l.prototype.checkClick = function (a, n) {
      var t = this
      var l = t.config
      a.children('.' + b)
        .children('.' + g)
        .on('click', 'input[same="layuiTreeCheck"]+', function (e) {
          layui.stope(e)
          var e = p(this).prev()
          var i = e.prop('checked')
          e.prop('disabled') || (t.setCheckbox(a, n, e), t.updateFieldValue(n, 'checked', i), l.oncheck && l.oncheck({ elem: a, checked: i, data: n }))
        })
    }),
    (l.prototype.operate = function (r, d) {
      var s = this
      var o = s.config
      var u = o.customName
      var e = r.children('.' + b)
      var h = e.children('.' + g)
      e.children('.layui-tree-btnGroup').on('click', '.layui-icon', function (e) {
        layui.stope(e)
        var i
        var e = p(this).data('type')
        var n = r.children('.' + N)
        var t = { data: d, type: e, elem: r }
        if (e == 'add') {
          n[0] ||
            (o.showLine
              ? (h.find('.' + C).addClass('layui-tree-icon'),
                h
                  .find('.' + C)
                  .children('.layui-icon')
                  .addClass(v)
                  .removeClass('layui-icon-file'))
              : h.find('.layui-tree-iconArrow').removeClass(m),
            r.append('<div class="layui-tree-pack"></div>'))
          var a
          var l = o.operate && o.operate(t)
          var c = {}
          if (
            ((c[u.title] = o.text.defaultNodeName),
            (c[u.id] = l),
            s.tree(r.children('.' + N), [c]),
            o.showLine &&
              (n[0]
                ? (n.hasClass(S) || n.addClass(S),
                  r.find('.' + N).each(function () {
                    p(this)
                      .children('.' + k)
                      .last()
                      .addClass(T)
                  }),
                  (n
                    .children('.' + k)
                    .last()
                    .prev()
                    .hasClass(T)
                    ? n
                        .children('.' + k)
                        .last()
                        .prev()
                    : n.children('.' + k).last()
                  ).removeClass(T),
                  !r.parent('.' + N)[0] &&
                    r.next()[0] &&
                    n
                      .children('.' + k)
                      .last()
                      .removeClass(T))
                : ((l = r.siblings('.' + k)),
                  (a = 1),
                  (c = r.parent('.' + N)),
                  layui.each(l, function (e, i) {
                    p(i).children('.' + N)[0] || (a = 0)
                  }),
                  (a == 1
                    ? (l.children('.' + N).addClass(L),
                      l
                        .children('.' + N)
                        .children('.' + k)
                        .removeClass(T),
                      r.children('.' + N).addClass(L),
                      c.removeClass(S),
                      c
                        .children('.' + k)
                        .last()
                        .children('.' + N)
                        .children('.' + k)
                        .last())
                    : r.children('.' + N).children('.' + k)
                  ).addClass(T))),
            !o.showCheckbox)
          ) {
            return
          }
          h.find('input[same="layuiTreeCheck"]')[0].checked &&
            (r
              .children('.' + N)
              .children('.' + k)
              .last()
              .find('input[same="layuiTreeCheck"]')[0].checked = !0),
            s.renderForm('checkbox')
        } else
          {e == 'update'
            ? ((l = h.children('.' + w).html()),
              h.children('.' + w).html(''),
              h.append('<input type="text" class="layui-tree-editInput">'),
              h.children('.layui-tree-editInput').val(f.unescape(l)).focus(),
              (i = function (e) {
                var i = f.escape(e.val().trim()) || o.text.defaultNodeName
                e.remove(), h.children('.' + w).html(i), (t.data[u.title] = i), o.operate && o.operate(t)
              }),
              h.children('.layui-tree-editInput').blur(function () {
                i(p(this))
              }),
              h.children('.layui-tree-editInput').on('keydown', function (e) {
                e.keyCode === 13 && (e.preventDefault(), i(p(this)))
              }))
            : y.confirm('\u786e\u8ba4\u5220\u9664\u8be5\u8282\u70b9 "<span style="color: #999;">' + (d[u.title] || '') + '</span>" \u5417\uff1f', function (e) {
                var l, a, i
                o.operate && o.operate(t),
                  (t.status = 'remove'),
                  y.close(e),
                  r.prev('.' + k)[0] || r.next('.' + k)[0] || r.parent('.' + N)[0]
                    ? (r.siblings('.' + k).children('.' + b)[0]
                        ? (o.showCheckbox &&
                            (l = function (e) {
                              var i, a, n, t
                              e.parents('.' + k)[0] &&
                                ((i = e.siblings('.' + k).children('.' + b)),
                                (a = (e = e.parent('.' + N).prev()).find('input[same="layuiTreeCheck"]')[0]),
                                (n = 1),
                                (t = 0) == a.checked) &&
                                (i.each(function (e, i) {
                                  i = p(i).find('input[same="layuiTreeCheck"]')[0]
                                  i.checked != 0 || i.disabled || (n = 0), i.disabled || (t = 1)
                                }),
                                n == 1) &&
                                t == 1 &&
                                ((a.checked = !0), s.renderForm('checkbox'), l(e.parent('.' + k)))
                            })(r),
                          o.showLine &&
                            ((e = r.siblings('.' + k)),
                            (a = 1),
                            (i = r.parent('.' + N)),
                            layui.each(e, function (e, i) {
                              p(i).children('.' + N)[0] || (a = 0)
                            }),
                            a == 1
                              ? (n[0] ||
                                  (i.removeClass(S),
                                  e.children('.' + N).addClass(L),
                                  e
                                    .children('.' + N)
                                    .children('.' + k)
                                    .removeClass(T)),
                                (r.next()[0] ? i.children('.' + k).last() : r.prev())
                                  .children('.' + N)
                                  .children('.' + k)
                                  .last()
                                  .addClass(T),
                                r.next()[0] ||
                                  r.parents('.' + k)[1] ||
                                  r
                                    .parents('.' + k)
                                    .eq(0)
                                    .next()[0] ||
                                  r.prev('.' + k).addClass(T))
                              : !r.next()[0] && r.hasClass(T) && r.prev().addClass(T)))
                        : ((e = r.parent('.' + N).prev()),
                          o.showLine
                            ? (e.find('.' + C).removeClass('layui-tree-icon'),
                              e
                                .find('.' + C)
                                .children('.layui-icon')
                                .removeClass(x)
                                .addClass('layui-icon-file'),
                              (i = e.parents('.' + N).eq(0)).addClass(S),
                              i.children('.' + k).each(function () {
                                p(this)
                                  .children('.' + N)
                                  .children('.' + k)
                                  .last()
                                  .addClass(T)
                              }))
                            : e.find('.layui-tree-iconArrow').addClass(m),
                          r
                            .parents('.' + k)
                            .eq(0)
                            .removeClass(F),
                          r.parent('.' + N).remove()),
                      r.remove())
                    : (r.remove(), s.elem.append(s.elemNone))
              })}
      })
    }),
    (l.prototype.events = function () {
      var i = this
      var t = i.config
      i.elem.find('.layui-tree-checkedFirst')
      i.setChecked(i.checkids),
        i.elem.find('.layui-tree-search').on('keyup', function () {
          var e = p(this)
          var a = e.val()
          var e = e.nextAll()
          var n = []
          e.find('.' + w).each(function () {
            var i
            var e = p(this).parents('.' + b)
            p(this).html().indexOf(a) != -1 &&
              (n.push(p(this).parent()),
              (i = function (e) {
                e.addClass('layui-tree-searchShow'), e.parent('.' + N)[0] && i(e.parent('.' + N).parent('.' + k))
              })(e.parent('.' + k)))
          }),
            e.find('.' + b).each(function () {
              var e = p(this).parent('.' + k)
              e.hasClass('layui-tree-searchShow') || e.addClass(m)
            }),
            e.find('.layui-tree-searchShow').length == 0 && i.elem.append(i.elemNone),
            t.onsearch && t.onsearch({ elem: n })
        }),
        i.elem.find('.layui-tree-search').on('keydown', function () {
          p(this)
            .nextAll()
            .find('.' + b)
            .each(function () {
              p(this)
                .parent('.' + k)
                .removeClass('layui-tree-searchShow ' + m)
            }),
            p('.layui-tree-emptyText')[0] && p('.layui-tree-emptyText').remove()
        })
    }),
    (l.prototype.getChecked = function () {
      var t = this
      var e = t.config
      var l = e.customName
      var i = []
      var a = []
      var c =
        (t.elem.find('.layui-form-checked').each(function () {
          i.push(p(this).prev()[0].value)
        }),
        function (e, n) {
          layui.each(e, function (e, a) {
            layui.each(i, function (e, i) {
              if (a[l.id] == i) {
                return (
                  t.updateFieldValue(a, 'checked', !0),
                  delete (i = p.extend({}, a))[l.children],
                  n.push(i),
                  a[l.children] && ((i[l.children] = []), c(a[l.children], i[l.children])),
                  !0
                )
              }
            })
          })
        })
      return c(p.extend({}, e.data), a), a
    }),
    (l.prototype.setChecked = function (l) {
      this.config
      this.elem.find('.' + k).each(function (e, i) {
        var a = p(this).data('id')
        var n = p(i)
          .children('.' + b)
          .find('input[same="layuiTreeCheck"]')
        var t = n.next()
        if (typeof l == 'number') {
          if (a.toString() == l.toString()) return n[0].checked || t.click(), !1
        } else
          {typeof l == 'object' &&
            layui.each(l, function (e, i) {
              if (i.toString() == a.toString() && !n[0].checked) return t.click(), !0
            })}
      })
    }),
    (n.that = {}),
    (n.config = {}),
    (t.reload = function (e, i) {
      e = n.that[e]
      return e.reload(i), n.call(e)
    }),
    (t.getChecked = function (e) {
      return n.that[e].getChecked()
    }),
    (t.setChecked = function (e, i) {
      return n.that[e].setChecked(i)
    }),
    (t.render = function (e) {
      e = new l(e)
      return n.call(e)
    }),
    e(a, t)
})
layui.define(['laytpl', 'form'], function (e) {
  'use strict'
  var d = layui.$
  var n = layui.laytpl
  var t = layui.form
  var a = 'transfer'
  var i = {
    config: {},
    index: layui[a] ? layui[a].index + 1e4 : 0,
    set: function (e) {
      var t = this
      return (t.config = d.extend({}, t.config, e)), t
    },
    on: function (e, t) {
      return layui.onevent.call(this, a, e, t)
    }
  }
  var l = function () {
    var t = this;
        var e = t.config;
        var a = e.id || t.index
    return (
      (l.that[a] = t),
      {
        config: (l.config[a] = e),
        reload: function (e) {
          t.reload.call(t, e)
        },
        getData: function () {
          return t.getData.call(t)
        }
      }
    )
  }
  var s = 'layui-hide'
  var u = 'layui-btn-disabled'
  var c = 'layui-none'
  var r = 'layui-transfer-box'
  var h = 'layui-transfer-header'
  var o = 'layui-transfer-search'
  var f = 'layui-transfer-data'
  var y = function (e) {
    return [
      '<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">',
      '<div class="layui-transfer-header">',
      '<input type="checkbox" name="' +
        e.checkAllName +
        '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{= d.data.title[' +
        e.index +
        "] || 'list" +
        (e.index + 1) +
        '\' }}">',
      '</div>',
      '{{# if(d.data.showSearch){ }}',
      '<div class="layui-transfer-search">',
      '<i class="layui-icon layui-icon-search"></i>',
      '<input type="text" class="layui-input" placeholder="\u5173\u952e\u8bcd\u641c\u7d22">',
      '</div>',
      '{{# } }}',
      '<ul class="layui-transfer-data"></ul>',
      '</div>'
    ].join('')
  }
  var p = [
    '<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{= d.index }}">',
    y({ index: 0, checkAllName: 'layTransferLeftCheckAll' }),
    '<div class="layui-transfer-active">',
    '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">',
    '<i class="layui-icon layui-icon-next"></i>',
    '</button>',
    '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">',
    '<i class="layui-icon layui-icon-prev"></i>',
    '</button>',
    '</div>',
    y({ index: 1, checkAllName: 'layTransferRightCheckAll' }),
    '</div>'
  ].join('')
  var v = function (e) {
    var t = this
    ;(t.index = ++i.index), (t.config = d.extend({}, t.config, i.config, e)), t.render()
  }
  ;(v.prototype.config = {
    title: ['\u5217\u8868\u4e00', '\u5217\u8868\u4e8c'],
    width: 200,
    height: 360,
    data: [],
    value: [],
    showSearch: !1,
    id: '',
    text: { none: '\u65e0\u6570\u636e', searchNone: '\u65e0\u5339\u914d\u6570\u636e' }
  }),
    (v.prototype.reload = function (e) {
      var t = this
      ;(t.config = d.extend({}, t.config, e)), t.render()
    }),
    (v.prototype.render = function () {
      var e = this
      var t = e.config
      var a = (e.elem = d(n(p, { open: '{{', close: '}}' }).render({ data: t, index: e.index })))
      var i = (t.elem = d(t.elem))
      i[0] &&
        ((t.data = t.data || []),
        (t.value = t.value || []),
        (t.id = 'id' in t ? t.id : elem.attr('id') || e.index),
        (e.key = t.id),
        i.html(e.elem),
        (e.layBox = e.elem.find('.' + r)),
        (e.layHeader = e.elem.find('.' + h)),
        (e.laySearch = e.elem.find('.' + o)),
        (e.layData = a.find('.' + f)),
        (e.layBtn = a.find('.layui-transfer-active .layui-btn')),
        e.layBox.css({ width: t.width, height: t.height }),
        e.layData.css({ height: ((i = t.height - e.layHeader.outerHeight()), t.showSearch && (i -= e.laySearch.outerHeight()), i - 2) }),
        e.renderData(),
        e.events())
    }),
    (v.prototype.renderData = function () {
      var e = this
      var t = e.config
      var l = [
        { checkName: 'layTransferLeftCheck', views: [] },
        { checkName: 'layTransferRightCheck', views: [] }
      ]
      e.parseData(function (a) {
        var i = a.selected ? 1 : 0
        var n = [
          '<li>',
          '<input type="checkbox" name="' +
            l[i].checkName +
            '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' +
            a.title +
            '"' +
            (a.disabled ? ' disabled' : '') +
            (a.checked ? ' checked' : '') +
            ' value="' +
            a.value +
            '">',
          '</li>'
        ].join('')
        i
          ? layui.each(t.value, function (e, t) {
              t == a.value && a.selected && (l[i].views[e] = n)
            })
          : l[i].views.push(n),
          delete a.selected
      }),
        e.layData.eq(0).html(l[0].views.join('')),
        e.layData.eq(1).html(l[1].views.join('')),
        e.renderCheckBtn()
    }),
    (v.prototype.renderForm = function (e) {
      t.render(e, 'LAY-transfer-' + this.index)
    }),
    (v.prototype.renderCheckBtn = function (c) {
      var r = this
      var o = r.config
      ;(c = c || {}),
        r.layBox.each(function (e) {
          var t = d(this)
          var a = t.find('.' + f)
          var t = t.find('.' + h).find('input[type="checkbox"]')
          var i = a.find('input[type="checkbox"]')
          var n = 0
          var l = !1
          i.each(function () {
            var e = d(this).data('hide')
            ;(this.checked || this.disabled || e) && n++, this.checked && !e && (l = !0)
          }),
            t.prop('checked', l && n === i.length),
            r.layBtn.eq(e)[l ? 'removeClass' : 'addClass'](u),
            c.stopNone || ((i = a.children('li:not(.' + s + ')').length), r.noneView(a, i ? '' : o.text.none))
        }),
        r.renderForm('checkbox')
    }),
    (v.prototype.noneView = function (e, t) {
      var a = d('<p class="layui-none">' + (t || '') + '</p>')
      e.find('.' + c)[0] && e.find('.' + c).remove(), t.replace(/\s/g, '') && e.append(a)
    }),
    (v.prototype.setValue = function () {
      var e = this.config
      var t = []
      return (
        this.layBox
          .eq(1)
          .find('.' + f + ' input[type="checkbox"]')
          .each(function () {
            d(this).data('hide') || t.push(this.value)
          }),
        (e.value = t),
        this
      )
    }),
    (v.prototype.parseData = function (t) {
      var i = this.config
      var n = []
      return (
        layui.each(i.data, function (e, a) {
          ;(a = (typeof i.parseData == 'function' ? i.parseData(a) : a) || a),
            n.push((a = d.extend({}, a))),
            layui.each(i.value, function (e, t) {
              t == a.value && (a.selected = !0)
            }),
            t && t(a)
        }),
        (i.data = n),
        this
      )
    }),
    (v.prototype.getData = function (e) {
      var t = this.config
      var i = []
      return (
        this.setValue(),
        layui.each(e || t.value, function (e, a) {
          layui.each(t.data, function (e, t) {
            delete t.selected, a == t.value && i.push(t)
          })
        }),
        i
      )
    }),
    (v.prototype.transfer = function (e, t) {
      var a
      var i = this
      var n = i.config
      var l = i.layBox.eq(e)
      var c = []
      var t =
        (t
          ? (((a = (t = t).find('input[type="checkbox"]'))[0].checked = !1),
            l
              .siblings('.' + r)
              .find('.' + f)
              .append(t.clone()),
            t.remove(),
            c.push(a[0].value),
            i.setValue())
          : l.each(function (e) {
              d(this)
                .find('.' + f)
                .children('li')
                .each(function () {
                  var e = d(this)
                  var t = e.find('input[type="checkbox"]')
                  var a = t.data('hide')
                  t[0].checked &&
                    !a &&
                    ((t[0].checked = !1),
                    l
                      .siblings('.' + r)
                      .find('.' + f)
                      .append(e.clone()),
                    e.remove(),
                    c.push(t[0].value)),
                    i.setValue()
                })
            }),
        i.renderCheckBtn(),
        l.siblings('.' + r).find('.' + o + ' input'))
      t.val() !== '' && t.trigger('keyup'), n.onchange && n.onchange(i.getData(c), e)
    }),
    (v.prototype.events = function () {
      var n = this
      var l = n.config
      n.elem.on('click', 'input[lay-filter="layTransferCheckbox"]+', function () {
        var e = d(this).prev()
        var t = e[0].checked
        var a = e
          .parents('.' + r)
          .eq(0)
          .find('.' + f)
        e[0].disabled ||
          (e.attr('lay-type') === 'all' &&
            a.find('input[type="checkbox"]').each(function () {
              this.disabled || (this.checked = t)
            }),
          setTimeout(function () {
            n.renderCheckBtn({ stopNone: !0 })
          }, 0))
      }),
        n.elem.on('dblclick', '.' + f + '>li', function (e) {
          var t = d(this)
          var a = t.children('input[type="checkbox"]')
          var i = t.parent().parent().data('index')
          a[0].disabled || (!1 !== (typeof l.dblclick == 'function' ? l.dblclick({ elem: t, data: n.getData([a[0].value])[0], index: i }) : null) && n.transfer(i, t))
        }),
        n.layBtn.on('click', function () {
          var e = d(this)
          var t = e.data('index')
          e.hasClass(u) || n.transfer(t)
        }),
        n.laySearch.find('input').on('keyup', function () {
          var i = this.value
          var e = d(this)
            .parents('.' + o)
            .eq(0)
            .siblings('.' + f)
          var t = e.children('li')
          var t =
            (t.each(function () {
              var e = d(this)
              var t = e.find('input[type="checkbox"]')
              var a = t[0].title
              var a = (l.showSearch !== 'cs' && ((a = a.toLowerCase()), (i = i.toLowerCase())), a.indexOf(i) !== -1)
              e[a ? 'removeClass' : 'addClass'](s), t.data('hide', !a)
            }),
            n.renderCheckBtn(),
            t.length === e.children('li.' + s).length)
          n.noneView(e, t ? l.text.searchNone : '')
        })
    }),
    (l.that = {}),
    (l.config = {}),
    (i.reload = function (e, t) {
      e = l.that[e]
      return e.reload(t), l.call(e)
    }),
    (i.getData = function (e) {
      return l.that[e].getData()
    }),
    (i.render = function (e) {
      e = new v(e)
      return l.call(e)
    }),
    e(a, i)
})
layui.define(['jquery', 'lay'], function (e) {
  'use strict'
  var a = layui.$
  var l = layui.lay
  var t =
    (layui.hint(),
    layui.device(),
    {
      config: {},
      set: function (e) {
        var i = this
        return (i.config = a.extend({}, i.config, e)), i
      },
      on: function (e, i) {
        return layui.onevent.call(this, d, e, i)
      }
    })
  var d = 'carousel'
  var r = 'layui-this'
  var s = 'layui-carousel-left'
  var u = 'layui-carousel-right'
  var c = 'layui-carousel-prev'
  var h = 'layui-carousel-next'
  var o = 'layui-carousel-arrow'
  var m = 'layui-carousel-ind'
  var i = function (e) {
    var i = this
    ;(i.config = a.extend({}, i.config, t.config, e)), i.render()
  }
  ;(i.prototype.config = { width: '600px', height: '280px', full: !1, arrow: 'hover', indicator: 'inside', autoplay: !0, interval: 3e3, anim: '', trigger: 'click', index: 0 }),
    (i.prototype.render = function () {
      var e = this
      var i = e.config
      var n = a(i.elem)
      if (n.length > 1) {
        return (
          layui.each(n, function () {
            t.render(a.extend({}, i, { elem: this }))
          }),
          e
        )
      }
      a.extend(i, l.options(n[0])),
        (i.elem = a(i.elem)),
        i.elem[0] &&
          ((e.elemItem = i.elem.find('>*[carousel-item]>*')),
          i.index < 0 && (i.index = 0),
          i.index >= e.elemItem.length && (i.index = e.elemItem.length - 1),
          i.interval < 800 && (i.interval = 800),
          i.full ? i.elem.css({ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }) : i.elem.css({ width: i.width, height: i.height }),
          i.elem.attr('lay-anim', i.anim),
          e.elemItem.eq(i.index).addClass(r),
          e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
    }),
    (i.prototype.reload = function (e) {
      var i = this
      clearInterval(i.timer), (i.config = a.extend({}, i.config, e)), i.render()
    }),
    (i.prototype.prevIndex = function () {
      var e = this.config.index - 1
      return (e = e < 0 ? this.elemItem.length - 1 : e)
    }),
    (i.prototype.nextIndex = function () {
      var e = this.config.index + 1
      return (e = e >= this.elemItem.length ? 0 : e)
    }),
    (i.prototype.addIndex = function (e) {
      var i = this.config
      ;(i.index = i.index + (e = e || 1)), i.index >= this.elemItem.length && (i.index = 0)
    }),
    (i.prototype.subIndex = function (e) {
      var i = this.config
      ;(i.index = i.index - (e = e || 1)), i.index < 0 && (i.index = this.elemItem.length - 1)
    }),
    (i.prototype.autoplay = function () {
      var e = this
      var i = e.config
      i.autoplay &&
        (clearInterval(e.timer),
        (e.timer = setInterval(function () {
          e.slide()
        }, i.interval)))
    }),
    (i.prototype.arrow = function () {
      var i = this
      var e = i.config
      var n = a(
        [
          '<button type="button" class="layui-icon ' + (e.anim === 'updown' ? 'layui-icon-up' : 'layui-icon-left') + ' ' + o + '" lay-type="sub"></button>',
          '<button type="button" class="layui-icon ' + (e.anim === 'updown' ? 'layui-icon-down' : 'layui-icon-right') + ' ' + o + '" lay-type="add"></button>'
        ].join('')
      )
      e.elem.attr('lay-arrow', e.arrow),
        e.elem.find('.' + o)[0] && e.elem.find('.' + o).remove(),
        e.elem.append(n),
        n.on('click', function () {
          var e = a(this).attr('lay-type')
          i.slide(e)
        })
    }),
    (i.prototype['goto'] = function (e) {
      var i = this
      var n = i.config
      e > n.index ? i.slide('add', e - n.index) : e < n.index && i.slide('sub', n.index - e)
    }),
    (i.prototype.indicator = function () {
      var i
      var e = this
      var n = e.config
      var t = (e.elemInd = a(
        [
          '<div class="' + m + '"><ul>',
          ((i = []),
          layui.each(e.elemItem, function (e) {
            i.push('<li' + (n.index === e ? ' class="layui-this"' : '') + '></li>')
          }),
          i.join('')),
          '</ul></div>'
        ].join('')
      ))
      n.elem.attr('lay-indicator', n.indicator),
        n.elem.find('.' + m)[0] && n.elem.find('.' + m).remove(),
        n.elem.append(t),
        n.anim === 'updown' && t.css('margin-top', -t.height() / 2),
        t.find('li').on(n.trigger === 'hover' ? 'mouseover' : n.trigger, function () {
          e['goto'](a(this).index())
        })
    }),
    (i.prototype.slide = function (e, i) {
      var n = this
      var t = n.elemItem
      var a = n.config
      var o = a.index
      var l = a.elem.attr('lay-filter')
      n.haveSlide ||
        (e === 'sub'
          ? (n.subIndex(i),
            t.eq(a.index).addClass(c),
            setTimeout(function () {
              t.eq(o).addClass(u), t.eq(a.index).addClass(u)
            }, 50))
          : (n.addIndex(i),
            t.eq(a.index).addClass(h),
            setTimeout(function () {
              t.eq(o).addClass(s), t.eq(a.index).addClass(s)
            }, 50)),
        setTimeout(function () {
          t.removeClass(r + ' ' + c + ' ' + h + ' ' + s + ' ' + u), t.eq(a.index).addClass(r), (n.haveSlide = !1)
        }, 350),
        n.elemInd.find('li').eq(a.index).addClass(r).siblings().removeClass(r),
        (n.haveSlide = !0),
        (e = { index: a.index, prevIndex: o, item: t.eq(a.index) }),
        typeof a.change == 'function' && a.change(e),
        layui.event.call(this, d, 'change(' + l + ')', e))
    }),
    (i.prototype.events = function () {
      var t
      var a
      var o = this
      var e = o.config
      e.elem.data('haveEvents') ||
        (e.elem
          .on('mouseenter touchstart', function () {
            o.config.autoplay !== 'always' && clearInterval(o.timer)
          })
          .on('mouseleave touchend', function () {
            o.config.autoplay !== 'always' && o.autoplay()
          }),
        (t = e.elem),
        (a = e.anim === 'updown'),
        l.touchSwipe(t, {
          onTouchEnd: function (e, i) {
            var n = Date.now() - i.timeStart
            var i = a ? i.distanceY : i.distanceX
            ;(Math.abs(i / n) > 0.25 || Math.abs(i) > t[a ? 'height' : 'width']() / 3) && o.slide(i > 0 ? '' : 'sub')
          }
        }),
        e.elem.data('haveEvents', !0))
    }),
    (t.render = function (e) {
      return new i(e)
    }),
    e(d, t)
})
layui.define(['jquery', 'lay'], function (e) {
  'use strict'
  var u = layui.jquery
  var r = layui.lay
  var c = {
    config: {},
    index: layui.rate ? layui.rate.index + 1e4 : 0,
    set: function (e) {
      var a = this
      return (a.config = u.extend({}, a.config, e)), a
    },
    on: function (e, a) {
      return layui.onevent.call(this, l, e, a)
    }
  }
  var l = 'rate'
  var h = 'layui-icon-rate'
  var f = 'layui-icon-rate-solid'
  var o = 'layui-icon-rate-half'
  var s = 'layui-icon-rate-solid layui-icon-rate-half'
  var v = 'layui-icon-rate layui-icon-rate-half'
  var a = function (e) {
    var a = this
    ;(a.index = ++c.index), (a.config = u.extend({}, a.config, c.config, e)), a.render()
  }
  ;(a.prototype.config = { length: 5, text: !1, readonly: !1, half: !1, value: 0, theme: '' }),
    (a.prototype.render = function () {
      var e = this
      var a = e.config
      var l = u(a.elem)
      if (l.length > 1) {
        return (
          layui.each(l, function () {
            c.render(u.extend({}, a, { elem: this }))
          }),
          e
        )
      }
      u.extend(a, r.options(l[0]))
      for (
        var t = a.theme ? 'style="color: ' + a.theme + ';"' : '',
          i =
            ((a.elem = u(a.elem)),
            a.value > a.length && (a.value = a.length),
            parseInt(a.value) === a.value || a.half || (a.value = Math.ceil(a.value) - a.value < 0.5 ? Math.ceil(a.value) : Math.floor(a.value)),
            '<ul class="layui-rate" ' + (a.readonly ? 'readonly' : '') + '>'),
          n = 1;
        n <= a.length;
        n++
      ) {
        var o = '<li class="layui-inline"><i class="layui-icon ' + (n > Math.floor(a.value) ? h : f) + '" ' + t + '></i></li>'
        a.half && parseInt(a.value) !== a.value && n == Math.ceil(a.value) ? (i = i + '<li><i class="layui-icon layui-icon-rate-half" ' + t + '></i></li>') : (i += o)
      }
      i += '</ul>' + (a.text ? '<span class="layui-inline">' + a.value + '\u661f' : '') + '</span>'
      var l = a.elem
      var s = l.next('.layui-rate')
      s[0] && s.remove(),
        (e.elemTemp = u(i)),
        (a.span = e.elemTemp.next('span')),
        a.setText && a.setText(a.value),
        l.html(e.elemTemp),
        l.addClass('layui-inline'),
        a.readonly || e.action()
    }),
    (a.prototype.setvalue = function (e) {
      ;(this.config.value = e), this.render()
    }),
    (a.prototype.action = function () {
      var n = this.config
      var t = this.elemTemp
      var i = t.find('i').width()
      var l = t.children('li')
      l.each(function (e) {
        var a = e + 1
        var l = u(this)
        l.on('click', function (e) {
          ;(n.value = a),
            n.half && e.pageX - u(this).offset().left <= i / 2 && (n.value = n.value - 0.5),
            n.text && t.next('span').text(n.value + '\u661f'),
            n.choose && n.choose(n.value),
            n.setText && n.setText(n.value)
        }),
          l.on('mousemove', function (e) {
            t.find('i').each(function () {
              u(this).addClass(h).removeClass(s)
            }),
              t.find('i:lt(' + a + ')').each(function () {
                u(this).addClass(f).removeClass(v)
              }),
              n.half && e.pageX - u(this).offset().left <= i / 2 && l.children('i').addClass(o).removeClass(f)
          }),
          l.on('mouseleave', function () {
            t.find('i').each(function () {
              u(this).addClass(h).removeClass(s)
            }),
              t.find('i:lt(' + Math.floor(n.value) + ')').each(function () {
                u(this).addClass(f).removeClass(v)
              }),
              n.half &&
                parseInt(n.value) !== n.value &&
                t
                  .children('li:eq(' + Math.floor(n.value) + ')')
                  .children('i')
                  .addClass(o)
                  .removeClass('layui-icon-rate-solid layui-icon-rate')
          })
      }),
        r.touchSwipe(t, {
          onTouchMove: function (e, a) {
            var i
            Date.now() - a.timeStart <= 200 ||
              ((a = e.touches[0].pageX),
              (e = t.width() / n.length),
              (a = (a - t.offset().left) / e),
              (i = (i = (e = a % 1) <= 0.5 && n.half ? 0.5 + (a - e) : Math.ceil(a)) > n.length ? n.length : i) < 0 && (i = 0),
              l.each(function (e) {
                var a = u(this).children('i')
                var l = Math.ceil(i) - e == 1
                var t = Math.ceil(i) > e
                var e = i - e == 0.5
                t ? (a.addClass(f).removeClass(v), n.half && e && a.addClass(o).removeClass(f)) : a.addClass(h).removeClass(s), a.toggleClass('layui-rate-hover', l)
              }),
              (n.value = i),
              n.text && t.next('span').text(n.value + '\u661f'),
              n.setText && n.setText(n.value))
          },
          onTouchEnd: function (e, a) {
            Date.now() - a.timeStart <= 200 || (t.find('i').removeClass('layui-rate-hover'), n.choose && n.choose(n.value), n.setText && n.setText(n.value))
          }
        })
    }),
    (a.prototype.events = function () {}),
    (c.render = function (e) {
      e = new a(e)
      return function () {
        var a = this
        return {
          setvalue: function (e) {
            a.setvalue.call(a, e)
          },
          config: a.config
        }
      }.call(e)
    }),
    e(l, c)
})
layui.define('jquery', function (o) {
  'use strict'
  var w = layui.$
  var l = function (o) {}
  ;(l.prototype.load = function (o) {
    var i
    var n
    var r
    var l
    var c
    var m
    var e
    var t
    var a
    var f
    var s
    var u
    var p
    var d
    var y
    var h = this
    var g = 0
    var v = w((o = o || {}).elem)
    if (v[0]) {
      return (
        (c = w(o.scrollElem || document)),
        (m = 'mb' in o ? o.mb : 50),
        (e = !('isAuto' in o) || o.isAuto),
        (t = o.moreText || '\u52a0\u8f7d\u66f4\u591a'),
        (a = o.end || '\u6ca1\u6709\u66f4\u591a\u4e86'),
        (f = (o.direction || 'bottom') === 'top'),
        h._cleanup(v, c),
        (s = o.scrollElem && o.scrollElem !== document),
        (p = w('<div class="layui-flow-more"><a href="javascript:;">' + (u = '<cite>' + t + '</cite>') + '</a></div>')),
        v.find('.layui-flow-more')[0] || v[f ? 'prepend' : 'append'](p),
        (d = function (o, l) {
          var e = s ? c.prop('scrollHeight') : document.documentElement.scrollHeight;
            var t = c.scrollTop()
          ;(o = w(o)),
            p[f ? 'after' : 'before'](o),
            (l = l == 0 || null) ? p.html(a) : p.find('a').html(u),
            (n = l),
            (i = null),
            r && r(),
            f && ((o = s ? c.prop('scrollHeight') : document.documentElement.scrollHeight), g === 1 ? c.scrollTop(o) : g > 1 && c.scrollTop(t + (o - e)))
        }),
        (y = function () {
          ;(i = !0), p.find('a').html('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'), typeof o.done == 'function' && o.done(++g, d)
        })(),
        p.find('a').on('click.flow', function () {
          w(this)
          n || i || y()
        }),
        o.isLazyimg && (r = h.lazyimg({ elem: o.elem + ' img', scrollElem: o.scrollElem, direction: o.direction })),
        e &&
          c.on('scroll.flow', function () {
            var e = w(this);
              var t = e.scrollTop()
            l && clearTimeout(l),
              !n &&
                v.width() &&
                (l = setTimeout(function () {
                  var o = (s ? e : w(window)).height();
                    var l = s ? e.prop('scrollHeight') : document.documentElement.scrollHeight
                  ;(f ? t <= m : l - t - o <= m) && !i && y()
                }, 100))
          }),
        h
      )
    }
  }),
    (l.prototype.lazyimg = function (o) {
      var l
      var m = this
      var a = 0
      var f = w((o = o || {}).scrollElem || document)
      var s = o.elem || 'img'
      var n = 'top' === (o.direction || 'bottom')
      var u = o.scrollElem && o.scrollElem !== document
      var p = function (l, o) {
        var e;
            var t = f.scrollTop();
            var o = t + o;
            var i = u ? l.offset().top - f.offset().top + t : l.offset().top
        ;(n ? i + l.height() : i) >= t &&
          i <= o &&
          l.attr('lay-src') &&
          ((e = l.attr('lay-src')),
          layui.img(
            e,
            function () {
              var o = m.lazyimg.elem.eq(a)
              l.attr('src', e).removeAttr('lay-src'), o[0] && r(o), a++
            },
            function () {
              m.lazyimg.elem.eq(a)
              l.removeAttr('lay-src')
            }
          ))
      }
      var r = function (o, l) {
        var e = (u ? l || f : w(window)).height()
        var t = f.scrollTop()
        var i = t + e
        if (((m.lazyimg.elem = w(s)), o)) p(o, e)
        else {
          for (var n = 0; n < m.lazyimg.elem.length; n++) {
            var r = m.lazyimg.elem.eq(n);
                var c = u ? r.offset().top - f.offset().top + t : r.offset().top
            if ((p(r, e), (a = n), i < c)) break
          }
        }
      }
      return (
        r(),
        f.on('scroll.lazyimg', function () {
          var o = w(this)
          l && clearTimeout(l),
            (l = setTimeout(function () {
              r(null, o)
            }, 50))
        }),
        r
      )
    }),
    (l.prototype._cleanup = function (o, l) {
      l.off('scroll.flow').off('scroll.lazyimg'), o.find('.layui-flow-more').find('a').off('click.flow'), o.html('')
    }),
    o('flow', new l())
})
layui.define(['lay', 'util', 'element', 'form'], function (e) {
  'use strict'
  var x = layui.$
  var D = layui.util
  var S = layui.element
  var I = layui.form
  var N = layui.layer
  var A =
    (layui.hint(),
    {
      ELEM_VIEW: 'layui-code-view',
      ELEM_TAB: 'layui-tab',
      ELEM_HEADER: 'layui-code-header',
      ELEM_FULL: 'layui-code-full',
      ELEM_PREVIEW: 'layui-code-preview',
      ELEM_ITEM: 'layui-code-item',
      ELEM_SHOW: 'layui-show',
      ELEM_LINE: 'layui-code-line',
      ELEM_LINE_NUM: 'layui-code-line-number',
      ELEM_LN_MODE: 'layui-code-ln-mode',
      CDDE_DATA_CLASS: 'LayuiCodeDataClass',
      LINE_RAW_WIDTH: 45
    })
  var T = {
    elem: '',
    about: '',
    ln: !0,
    header: !1,
    encode: !0,
    copy: !0,
    text: { code: D.escape('</>'), preview: 'Preview' },
    wordWrap: !0,
    lang: 'text',
    highlighter: !1,
    langMarker: !1
  }
  var W = layui.code ? layui.code.index + 1e4 : 0
  var R = function (e) {
    return String(e)
      .replace(/\s+$/, '')
      .replace(/^\n|\n$/, '')
  }
  e('code', function (l, e) {
    var o
    var i
    var t
    var a
    var n
    var d
    var c
    var s
    var r
    var u
    var y
    var p
    var E
    var f
    var h
    var v
    var m
    var L
    var _
    var M
    var C
    var g = {
      config: (l = x.extend(!0, {}, T, l)),
      reload: function (e) {
        layui.code(this.updateOptions(e))
      },
      updateOptions: function (e) {
        return delete (e = e || {}).elem, x.extend(!0, l, e)
      },
      reloadCode: function (e) {
        layui.code(this.updateOptions(e), 'reloadCode')
      }
    }
    var w = x(l.elem)
    return (
      w.length > 1
        ? layui.each(l.obverse ? w : w.get().reverse(), function () {
            layui.code(x.extend({}, l, { elem: this }), e)
          })
        : (o = l.elem = x(l.elem))[0] &&
          (x.extend(
            !0,
            l,
            lay.options(o[0]),
            ((i = {}),
            layui.each(['title', 'height', 'encode', 'skin', 'about'], function (e, t) {
              var a = o.attr('lay-' + t)
              typeof a == 'string' && (i[t] = a)
            }),
            i)
          ),
          (l.encode = (l.encode || l.preview) && !l.codeRender),
          (l.code =
            l.code ||
            ((t = []),
            o.children('textarea').each(function () {
              t.push(R(this.value))
            }),
            t.length === 0 && t.push(R(o.html())),
            t.join(''))),
          (w = function (e) {
            typeof l.codeRender == 'function' && (e = l.codeRender(String(e), l))
            var t = String(e).split(/\r?\n/g)
            return {
              lines: t,
              html: (e = x.map(t, function (e, t) {
                return [
                  '<div class="' + A.ELEM_LINE + '">',
                  l.ln ? ['<div class="' + A.ELEM_LINE_NUM + '">', D.digit(t + 1) + '.', '</div>'].join('') : '',
                  '<div class="layui-code-line-content">',
                  e || ' ',
                  '</div>',
                  '</div>'
                ].join('')
              }))
            }
          }),
          (a = l.code),
          (n = function (e) {
            return typeof l.codeParse == 'function' ? l.codeParse(e, l) : e
          }),
          e === 'reloadCode'
            ? o.children('.layui-code-wrap').html(w(n(a)).html)
            : ((d = layui.code.index = ++W),
              o.attr('lay-code-index', d),
              (M = A.CDDE_DATA_CLASS in o.data()) && o.attr('class', o.data(A.CDDE_DATA_CLASS) || ''),
              M || o.data(A.CDDE_DATA_CLASS, o.attr('class')),
              (c = {
                copy: {
                  className: 'file-b',
                  title: ['\u590d\u5236\u4ee3\u7801'],
                  event: function (e) {
                    var t = D.unescape(n(l.code))
                    lay.clipboard.writeText({
                      text: t,
                      done: function () {
                        N.msg('\u5df2\u590d\u5236', { icon: 1 })
                      },
                      error: function () {
                        N.msg('\u590d\u5236\u5931\u8d25', { icon: 2 })
                      }
                    }),
                      typeof l.onCopy == 'function' && l.onCopy(t)
                  }
                }
              }),
              (function b() {
                var e = o.parent('.' + A.ELEM_PREVIEW)
                var t = e.children('.' + A.ELEM_TAB)
                var a = e.children('.' + A.ELEM_ITEM + '-preview')
                return t.remove(), a.remove(), e[0] && o.unwrap(), b
              })(),
              l.preview &&
                ((M = 'LAY-CODE-DF-' + d),
                (f = l.layout || ['code', 'preview']),
                (s = l.preview === 'iframe'),
                (E = x('<div class="' + A.ELEM_PREVIEW + '">')),
                (C = x('<div class="layui-tab layui-tab-brief">')),
                (r = x('<div class="layui-tab-title">')),
                (_ = x('<div class="' + [A.ELEM_ITEM, A.ELEM_ITEM + '-preview', 'layui-border'].join(' ') + '">')),
                (u = x('<div class="layui-code-tools"></div>')),
                l.id && E.attr('id', l.id),
                E.addClass(l.className),
                C.attr('lay-filter', M),
                layui.each(f, function (e, t) {
                  var a = x('<li lay-id="' + t + '">')
                  e === 0 && a.addClass('layui-this'), a.html(l.text[t]), r.append(a)
                }),
                x.extend(c, {
                  full: {
                    className: 'screen-full',
                    title: ['\u6700\u5927\u5316\u663e\u793a', '\u8fd8\u539f\u663e\u793a'],
                    event: function (e) {
                      var e = e.elem
                      var t = e.closest('.' + A.ELEM_PREVIEW)
                      var a = 'layui-icon-' + this.className
                      var i = 'layui-icon-screen-restore'
                      var l = this.title
                      var o = x('html,body')
                      var n = 'layui-scrollbar-hide'
                      e.hasClass(a)
                        ? (t.addClass(A.ELEM_FULL), e.removeClass(a).addClass(i), e.attr('title', l[1]), o.addClass(n))
                        : (t.removeClass(A.ELEM_FULL), e.removeClass(i).addClass(a), e.attr('title', l[0]), o.removeClass(n))
                    }
                  },
                  window: {
                    className: 'release',
                    title: ['\u5728\u65b0\u7a97\u53e3\u9884\u89c8'],
                    event: function (e) {
                      D.openWin({ content: n(l.code) })
                    }
                  }
                }),
                l.copy && (layui.type(l.tools) === 'array' ? l.tools.indexOf('copy') === -1 && l.tools.unshift('copy') : (l.tools = ['copy'])),
                u.on('click', '>i', function () {
                  var e = x(this)
                  var t = e.data('type')
                  var e = { elem: e, type: t, options: l, rawCode: l.code, finalCode: D.unescape(n(l.code)) }
                  c[t] && typeof c[t].event == 'function' && c[t].event(e), typeof l.toolsEvent == 'function' && l.toolsEvent(e)
                }),
                l.addTools && l.tools && (l.tools = [].concat(l.tools, l.addTools)),
                layui.each(l.tools, function (e, t) {
                  var a = typeof t == 'object';
                    var i = a ? t : c[t] || { className: t, title: [t] };
                    var l = i.className || i.type;
                    var o = i.title || [''];
                    var a = a ? i.type || l : t
                  a && (c[a] || (((t = {})[a] = i), x.extend(c, t)), u.append('<i class="layui-icon layui-icon-' + l + '" data-type="' + a + '" title="' + o[0] + '"></i>'))
                }),
                o.addClass(A.ELEM_ITEM).wrap(E),
                C.append(r),
                l.tools && C.append(u),
                o.before(C),
                s && _.html('<iframe allowtransparency="true" frameborder="0"></iframe>'),
                (y = function (e) {
                  var t = e.children('iframe')[0]
                  s && t ? (t.srcdoc = n(l.code)) : e.html(l.code),
                    setTimeout(function () {
                      typeof l.done == 'function' &&
                        l.done({
                          container: e,
                          options: l,
                          render: function () {
                            I.render(e.find('.layui-form')), S.render()
                          }
                        })
                    }, 3)
                }),
                f[0] === 'preview' ? (_.addClass(A.ELEM_SHOW), o.before(_), y(_)) : o.addClass(A.ELEM_SHOW).after(_),
                (l.previewStyle = [l.style, l.previewStyle].join('')),
                _.attr('style', l.previewStyle),
                S.on('tab(' + M + ')', function (e) {
                  var t = x(this)
                  var a = x(e.elem)
                    .closest('.' + A.ELEM_PREVIEW)
                    .find('.' + A.ELEM_ITEM)
                  var e = a.eq(e.index)
                  a.removeClass(A.ELEM_SHOW), e.addClass(A.ELEM_SHOW), t.attr('lay-id') === 'preview' && y(e), L()
                })),
              (p = x('<code class="layui-code-wrap"></code>')),
              o.addClass(((E = ['layui-code-view layui-border-box']), l.wordWrap || E.push('layui-code-nowrap'), E.join(' '))),
              (C = l.theme || l.skin) && (o.removeClass('layui-code-theme-dark layui-code-theme-light'), o.addClass('layui-code-theme-' + C)),
              l.highlighter && o.addClass([l.highlighter, 'language-' + l.lang, 'layui-code-hl'].join(' ')),
              (f = w(l.encode ? D.escape(n(a)) : a)),
              (h = f.lines),
              o.html(p.html(f.html)),
              l.ln && o.append('<div class="layui-code-ln-side"></div>'),
              l.height && p.css('max-height', l.height),
              (l.codeStyle = [l.style, l.codeStyle].join('')),
              l.codeStyle &&
                p.attr('style', function (e, t) {
                  return (t || '') + l.codeStyle
                }),
              (v = [
                {
                  selector: '>.layui-code-wrap>.layui-code-line{}',
                  setValue: function (e, t) {
                    e.style['padding-left'] = t + 'px'
                  }
                },
                {
                  selector: '>.layui-code-wrap>.layui-code-line>.layui-code-line-number{}',
                  setValue: function (e, t) {
                    e.style.width = t + 'px'
                  }
                },
                {
                  selector: '>.layui-code-ln-side{}',
                  setValue: function (e, t) {
                    e.style.width = t + 'px'
                  }
                }
              ]),
              (m = lay.style({
                target: o[0],
                id: 'DF-code-' + d,
                text: x
                  .map(
                    x.map(v, function (e) {
                      return e.selector
                    }),
                    function (e, t) {
                      return ['.layui-code-view[lay-code-index="' + d + '"]', e].join(' ')
                    }
                  )
                  .join('')
              })),
              (L = (function b() {
                var e, i
                return (
                  l.ln &&
                    ((e = Math.floor(h.length / 100)),
                    (i = p
                      .children('.' + A.ELEM_LINE)
                      .last()
                      .children('.' + A.ELEM_LINE_NUM)
                      .outerWidth()),
                    o.addClass(A.ELEM_LN_MODE),
                    e) &&
                    A.LINE_RAW_WIDTH < i &&
                    lay.getStyleRules(m, function (e, t) {
                      try {
                        v[t].setValue(e, i)
                      } catch (a) {}
                    }),
                  b
                )
              })()),
              l.header && ((_ = x('<div class="' + A.ELEM_HEADER + '"></div>')).html(l.title || l.text.code), o.prepend(_)),
              (M = x('<div class="layui-code-fixbar"></div>')),
              l.copy &&
                !l.preview &&
                ((C = x(['<span class="layui-code-copy">', '<i class="layui-icon layui-icon-file-b" title="\u590d\u5236"></i>', '</span>'].join(''))).on('click', function () {
                  c.copy.event()
                }),
                M.append(C)),
              l.langMarker && M.append('<span class="layui-code-lang-marker">' + l.lang + '</span>'),
              l.about && M.append(l.about),
              o.append(M),
              l.preview ||
                setTimeout(function () {
                  typeof l.done == 'function' && l.done({})
                }, 3),
              l.elem.length === 1 + d && typeof l.allDone == 'function' && l.allDone())),
      g
    )
  })
}),
  layui['layui.all'] || layui.addcss('modules/code.css?v=6', 'skincodecss')
