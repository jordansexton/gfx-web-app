;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['go-to-date-dialog-impl'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'
    },
    '/Wph': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5C6.67 7 6 7.67 6 8.5v11c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'
    },
    '2sPR': function (e, t, n) {
      e.exports = {
        calendar: 'calendar-3r0qUNSu',
        popupStyle: 'popupStyle-3r0qUNSu',
        header: 'header-3r0qUNSu',
        title: 'title-3r0qUNSu',
        switchBtn: 'switchBtn-3r0qUNSu',
        prev: 'prev-3r0qUNSu',
        month: 'month-3r0qUNSu',
        weekdays: 'weekdays-3r0qUNSu',
        weeks: 'weeks-3r0qUNSu',
        week: 'week-3r0qUNSu',
        day: 'day-3r0qUNSu',
        disabled: 'disabled-3r0qUNSu',
        selected: 'selected-3r0qUNSu',
        currentDay: 'currentDay-3r0qUNSu',
        isOnHighlightedEdge: 'isOnHighlightedEdge-3r0qUNSu',
        withinSelectedRange: 'withinSelectedRange-3r0qUNSu'
      }
    },
    '5VK0': function (e, t, n) {
      e.exports = {
        scrollWrap: 'scrollWrap-1KEqJy8_',
        tabsWrap: 'tabsWrap-1KEqJy8_',
        tabs: 'tabs-1KEqJy8_',
        tab: 'tab-1KEqJy8_',
        withHover: 'withHover-1KEqJy8_',
        headerBottomSeparator: 'headerBottomSeparator-1KEqJy8_'
      }
    },
    '5o6O': function (e, t, n) {
      e.exports = {
        tabs: 'tabs-3I2ohC86',
        tab: 'tab-3I2ohC86',
        noBorder: 'noBorder-3I2ohC86',
        disabled: 'disabled-3I2ohC86',
        active: 'active-3I2ohC86',
        defaultCursor: 'defaultCursor-3I2ohC86',
        slider: 'slider-3I2ohC86',
        content: 'content-3I2ohC86'
      }
    },
    '77yN': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M4 0c-.6 0-1 .4-1 1v1H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1h-2V1c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1v1H6V1c0-.6-.4-1-1-1H4zM2 5h12v9H2V5zm5 2v2h2V7H7zm3 0v2h2V7h-2zm-6 3v2h2v-2H4zm3 0v2h2v-2H7zm3 0v2h2v-2h-2z"/></svg>'
    },
    '8JZL': function (e, t, n) {
      e.exports = { tooltip: 'tooltip-3y8LFwiB' }
    },
    '9dlw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var s = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        r = n('i8i4'),
        i = n.n(r),
        c = (n('EsMY'), n('AiMB')),
        l = n('DTHj'),
        u = n('X0gx'),
        h = n('8Rai')
      function d(e) {
        const {
            controller: t,
            children: n,
            isOpened: r,
            closeOnClickOutside: d = !0,
            doNotCloseOn: p,
            onClickOutside: m,
            onClose: f
          } = e,
          v = Object(s.a)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose'
          ]),
          b = Object(o.useContext)(u.a),
          g = Object(h.a)({
            handler: function (e) {
              m && m(e)
              if (!d) return
              if (p && e.target instanceof Node) {
                const t = i.a.findDOMNode(p)
                if (t instanceof Node && t.contains(e.target)) return
              }
              f()
            },
            mouseDown: !0,
            touchStart: !0
          })
        return r
          ? a.a.createElement(
              c.a,
              { top: '0', left: '0', right: '0', bottom: '0', pointerEvents: 'none' },
              a.a.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                a.a.createElement(
                  l.b,
                  Object.assign({}, v, {
                    isOpened: r,
                    onClose: f,
                    onScroll: function (t) {
                      const { onScroll: n } = e
                      n && n(t)
                      t.stopPropagation()
                    },
                    customCloseDelegate: b,
                    ref: t
                  }),
                  n
                )
              )
            )
          : null
      }
    },
    E3Fn: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      class s {
        constructor() {
          this._storage = new Map()
        }
        setAsOpened(e, t) {
          this._storage.set(e, t)
        }
        setAsClosed(e) {
          this._storage.delete(e)
        }
        isOpened(e) {
          return this._storage.has(e)
        }
        getDialogPayload(e) {
          return this._storage.get(e)
        }
      }
    },
    F6Wo: function (e, t, n) {
      e.exports = {
        container: 'container-3tk-77P6',
        icon: 'icon-3tk-77P6',
        tooltip: 'tooltip-3tk-77P6',
        date: 'date-3tk-77P6',
        time: 'time-3tk-77P6'
      }
    },
    FT3R: function (e, t, n) {
      e.exports = {
        dialogWrapper: 'dialogWrapper-C-Wab_3K',
        dialogWrapperSmall: 'dialogWrapperSmall-C-Wab_3K',
        tabs: 'tabs-C-Wab_3K',
        content: 'content-C-Wab_3K',
        contentMobile: 'contentMobile-C-Wab_3K',
        bodyWrapper: 'bodyWrapper-C-Wab_3K'
      }
    },
    Hrlb: function (e, t, n) {
      e.exports = {
        pickerInput: 'pickerInput-2oRut0q-',
        icon: 'icon-2oRut0q-',
        disabled: 'disabled-2oRut0q-',
        picker: 'picker-2oRut0q-',
        fixed: 'fixed-2oRut0q-',
        absolute: 'absolute-2oRut0q-',
        nativePicker: 'nativePicker-2oRut0q-'
      }
    },
    K3s3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return l
        })
      var s = n('q1tI'),
        o = n('TSYQ'),
        a = n('Eyy1'),
        r = n('5o6O')
      const i = r
      function c(e) {
        const t = o(e.className, r.tab, {
          [r.active]: e.isActive,
          [r.disabled]: e.isDisabled,
          [r.defaultCursor]: !!e.shouldUseDefaultCursor,
          [r.noBorder]: !!e.noBorder
        })
        return s.createElement('div', { className: t, onClick: e.onClick, ref: e.reference }, e.children)
      }
      function l(e) {
        return class extends s.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null })
          }
          componentDidUpdate() {
            ;(Object(a.ensureNotNull)(this._slider).style.transition = 'transform 350ms'), this._componentDidUpdate()
          }
          componentDidMount() {
            this._componentDidUpdate()
          }
          render() {
            const { className: t } = this.props,
              n = this._generateTabs()
            return s.createElement(
              'div',
              { className: o(t, r.tabs), 'data-name': this.props['data-name'] },
              n,
              s.createElement(e, {
                reference: (e) => {
                  this._slider = e
                }
              })
            )
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              s.Children.map(this.props.children, (e) => {
                const t = e,
                  n = Boolean(t.props.isActive),
                  o = {
                    reference: (e) => {
                      n && (this.activeTab.current = e), t.props.reference && t.props.reference(e)
                    }
                  }
                return s.cloneElement(t, o)
              })
            )
          }
          _componentDidUpdate() {
            const e = Object(a.ensureNotNull)(this._slider).style
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                n = this.activeTab.current.offsetLeft
              ;(e.transform = `translateX(${n}px)`), (e.width = t + 'px'), (e.opacity = '1')
            } else e.opacity = '0'
          }
        }
      }
      l(function (e) {
        return s.createElement('div', { className: r.slider, ref: e.reference })
      })
    },
    N5tr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return m
        })
      var s = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        r = n('TSYQ'),
        i = n('tWVy'),
        c = n('JWMC'),
        l = n('ijHL'),
        u = n('v1bN')
      const h = u
      function d(e) {
        const { reference: t } = e,
          n = Object(s.a)(e, ['reference']),
          o = Object.assign(Object.assign({}, n), { ref: t })
        return a.a.createElement(e.href ? 'a' : 'div', o)
      }
      function p(e) {
        e.stopPropagation()
      }
      function m(e) {
        const {
            id: t,
            role: n,
            'aria-selected': s,
            className: h,
            title: m,
            labelRowClassName: f,
            labelClassName: v,
            shortcut: b,
            forceShowShortcuts: g,
            icon: w,
            isActive: D,
            isDisabled: C,
            isHovered: _,
            appearAsDisabled: O,
            label: E,
            link: y,
            showToolboxOnHover: S,
            target: N,
            toolbox: k,
            reference: x,
            onMouseOut: I,
            onMouseOver: j,
            theme: T = u
          } = e,
          M = Object(l.b)(e),
          R = Object(o.useRef)(null)
        return a.a.createElement(
          d,
          Object.assign({}, M, {
            id: t,
            role: n,
            'aria-selected': s,
            className: r(h, T.item, w && T.withIcon, { [T.isActive]: D, [T.isDisabled]: C || O, [T.hovered]: _ }),
            title: m,
            href: y,
            target: N,
            reference: function (e) {
              ;(R.current = e), 'function' == typeof x && x(e)
              'object' == typeof x && (x.current = e)
            },
            onClick: function (t) {
              const { dontClosePopup: n, onClick: s, onClickArg: o, trackEventObject: a } = e
              if (C) return
              a && Object(c.trackEvent)(a.category, a.event, a.label)
              s && s(o, t)
              n || Object(i.b)()
            },
            onContextMenu: function (t) {
              const { trackEventObject: n, trackRightClick: s } = e
              n && s && Object(c.trackEvent)(n.category, n.event, n.label + '_rightClick')
            },
            onMouseUp: function (t) {
              const { trackEventObject: n, trackMouseWheelClick: s } = e
              if (1 === t.button && y && n) {
                let e = n.label
                s && (e += '_mouseWheelClick'), Object(c.trackEvent)(n.category, n.event, e)
              }
            },
            onMouseOver: j,
            onMouseOut: I
          }),
          void 0 !== w && a.a.createElement('div', { className: T.icon, dangerouslySetInnerHTML: { __html: w } }),
          a.a.createElement(
            'div',
            { className: r(T.labelRow, f) },
            a.a.createElement('div', { className: r(T.label, v) }, E)
          ),
          (void 0 !== b || g) &&
            a.a.createElement('div', { className: T.shortcut }, (P = b) && P.split('+').join(' + ')),
          void 0 !== k && a.a.createElement('div', { onClick: p, className: r(T.toolbox, { [T.showOnHover]: S }) }, k)
        )
        var P
      }
    },
    aDg1: function (e, t, n) {
      'use strict'
      n('EsMY')
      var s = n('q1tI'),
        o = n('TSYQ'),
        a = n('K3s3'),
        r = n('nPPD'),
        i = n('dMmr')
      const c = Object(r.a)(a.a, i)
      var l = n('4Cm8'),
        u = n('5VK0')
      n.d(t, 'a', function () {
        return d
      })
      const h = Object(a.c)(function (e) {
        return s.createElement(
          'div',
          { className: c.slider, ref: e.reference },
          s.createElement('div', { className: c.inner })
        )
      })
      class d extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._createClickHandler = (e) => () => {
              this.props.onSelect(e)
            })
        }
        render() {
          const e = this._generateDialogTabs()
          return s.createElement(
            'div',
            { className: u.scrollWrap },
            s.createElement('div', { className: u.headerBottomSeparator }),
            s.createElement(
              l.a,
              {
                isVisibleFade: Modernizr.mobiletouch,
                isVisibleButtons: !Modernizr.mobiletouch,
                isVisibleScrollbar: !1
              },
              s.createElement('div', { className: u.tabsWrap }, s.createElement(h, { className: u.tabs }, e))
            )
          )
        }
        _generateDialogTabs() {
          const { activeTabId: e, tabs: t } = this.props
          return t.allIds.map((n) => {
            const r = e === n
            return s.createElement(
              a.b,
              { key: n, className: o(u.tab, !r && u.withHover), isActive: r, onClick: this._createClickHandler(n) },
              t.byId[n].title
            )
          })
        }
      }
    },
    dMmr: function (e, t, n) {
      e.exports = { slider: 'slider-3RfwXbxu', inner: 'inner-3RfwXbxu' }
    },
    nPPD: function (e, t, n) {
      'use strict'
      function s(e, t, n = {}) {
        const s = Object.assign({}, t)
        for (const o of Object.keys(t)) {
          const a = n[o] || o
          a in e && (s[o] = [e[a], t[o]].join(' '))
        }
        return s
      }
      function o(e, t, n = {}) {
        return Object.assign({}, e, s(e, t, n))
      }
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return o
        })
    },
    sw0u: function (e, t, n) {
      e.exports = { row: 'row-PABCY1cG', mobileRow: 'mobileRow-PABCY1cG' }
    },
    'uUY/': function (e, t, n) {
      'use strict'
      n.r(t)
      var s = n('q1tI'),
        o = n.n(s),
        a = n('i8i4'),
        r = n.n(a),
        i = n('Eyy1'),
        c = n('PT1i')
      function l(e) {
        return ('0' + e).slice(-2)
      }
      function u(e) {
        const t = new Date(e)
        return t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t
      }
      function h(e, t = !1) {
        const n = u(e),
          s = t
            ? (function (e) {
                if (e > 6) throw new Error('Invalid day is provided')
                return 0 === e ? 6 : e - 1
              })(n.getDay())
            : n.getDay()
        return n.setDate(n.getDate() - s), n
      }
      function d(e) {
        const t = u(e)
        return t.setDate(1), t
      }
      function p(e, t) {
        return Number(u(e)) === Number(u(t))
      }
      function m(e) {
        const t = new Date(e)
        return t.setDate(t.getDate() + 7), t
      }
      function f(e, t, n) {
        const s = !t || Number(u(t)) - Number(u(e)) <= 0
        return (!n || Number(u(n)) - Number(u(e)) >= 0) && s
      }
      function v(e) {
        return new Date(e).getTimezoneOffset() / 60
      }
      function b(e) {
        const t = new Date(e)
        return t.setHours(t.getHours() + v(t)), t
      }
      function g(e) {
        const t = new Date(e)
        return t.setHours(t.getHours() - v(t)), t
      }
      var w = n('E3Fn'),
        D = n('jCNj'),
        C = n.n(D)
      const _ = o.a.createContext(null)
      function O(e) {
        const { initialGoToDate: t, children: n } = e,
          [a, r] = Object(s.useState)(t),
          i =
            a.valueOf() <=
            (function (e) {
              const t = new Date(e)
              return t.setMilliseconds(999), t.setSeconds(59), t.setMinutes(59), t.setHours(23), t
            })(new Date()).valueOf(),
          c = Object(s.useMemo)(() => ({ date: a, setDate: r, isValid: i }), [a, i])
        return o.a.createElement(_.Provider, { value: c }, n)
      }
      const E = o.a.createContext(null)
      function y(e) {
        const { initialRanges: t, children: n } = e,
          [a, r] = Object(s.useState)(t.from),
          [i, c] = Object(s.useState)(t.to),
          l = a.valueOf() <= i.valueOf(),
          u = Object(s.useMemo)(() => ({ dateFrom: a, dateTo: i, setDateFrom: r, setDateTo: c, isValid: l }), [a, i, l])
        return o.a.createElement(E.Provider, { value: u }, n)
      }
      n('EsMY')
      var S = n('YFKU'),
        N = n('TSYQ'),
        k = n.n(N),
        x = n('FQhm'),
        I = n('Vdly'),
        j = n.n(I),
        T = n('ZjKI'),
        M = n('uhCe'),
        R = n('ycFu'),
        P = n('sw0u')
      function F(e) {
        const { children: t } = e
        return o.a.createElement('div', { className: k()(P.row, _e && P.mobileRow) }, t)
      }
      var H = n('gQ5K'),
        W = n('Iivm'),
        z = n('2sPR')
      class A extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._dateFormatter = new H.DateFormatter()),
            (this._onClick = () => {
              this.props.onClick && !this.props.isDisabled && this.props.onClick(new Date(this.props.day))
            })
        }
        render() {
          const e = N(z.day, {
            [z.selected]: this.props.isSelected,
            [z.disabled]: this.props.isDisabled,
            [z.withinSelectedRange]: this._withinSelectedRange(),
            [z.isOnHighlightedEdge]: this._isOnHighlightedEdge(),
            [z.currentDay]: this._isCurrentDay()
          })
          return s.createElement(
            'span',
            { className: e, onClick: this._onClick, 'data-day': this._dateFormatter.formatLocal(this.props.day) },
            this.props.day.getDate()
          )
        }
        _isOnHighlightedEdge() {
          const { day: e, highlightedFrom: t, highlightedTo: n } = this.props
          return !(!t || !n) && (p(e, t) || p(e, n))
        }
        _withinSelectedRange() {
          const { day: e, highlightedFrom: t, highlightedTo: n } = this.props
          return !(!t || !n) && this._isBetweenByDay(t, e, n)
        }
        _isCurrentDay() {
          return p(new Date(), this.props.day)
        }
        _isBetweenByDay(e, t, n) {
          const s = u(e),
            o = u(t),
            a = u(n)
          return s < o && o < a
        }
      }
      const B = [
        Object(S.t)('Mo', { context: 'day_of_week' }),
        Object(S.t)('Tu', { context: 'day_of_week' }),
        Object(S.t)('We', { context: 'day_of_week' }),
        Object(S.t)('Th', {
          context: 'day_of_week'
        }),
        Object(S.t)('Fr', { context: 'day_of_week' }),
        Object(S.t)('Sa', { context: 'day_of_week' }),
        Object(S.t)('Su', { context: 'day_of_week' })
      ]
      class q extends s.PureComponent {
        constructor() {
          super(...arguments), (this._renderWeekdays = () => B.map((e) => s.createElement('span', { key: e }, e)))
        }
        render() {
          return s.createElement(
            'div',
            { className: z.month },
            s.createElement('div', { className: z.weekdays }, this._renderWeekdays()),
            s.createElement('div', { className: z.weeks }, this._renderWeeks())
          )
        }
        _renderWeeks() {
          const e = []
          let t = h(d(this.props.viewDate), !0)
          for (let n = 0; n < 6; n++) e.push(this._renderWeek(t)), (t = new Date(m(t)))
          return e
        }
        _renderWeek(e) {
          const t = []
          for (let r = 0; r < 7; r++) {
            const a = new Date(e)
            a.setDate(a.getDate() + r),
              ((n = a), (o = this.props.viewDate), Number(d(n)) === Number(d(o))) &&
                t.push(
                  s.createElement(A, {
                    key: r,
                    day: a,
                    isDisabled: this._isDayDisabled(a),
                    isSelected: p(a, this.props.selectedDate),
                    onClick: this.props.onClickDay,
                    highlightedFrom: this.props.highlightedFrom,
                    highlightedTo: this.props.highlightedTo
                  })
                )
          }
          var n, o
          if (0 === t.length) return null
          const a = (function (e) {
            const t = new Date(e.getFullYear(), 0, 1),
              n = (Number(e) - Number(t)) / 864e5
            return Math.ceil((n + t.getDay() + 1) / 7)
          })(e)
          return s.createElement('div', { className: z.week, key: a }, t)
        }
        _isDayDisabled(e) {
          if (!f(e, this.props.minDate, this.props.maxDate)) return !0
          const t = [6, 0].includes(e.getDay())
          return !!this.props.disableWeekends && t
        }
      }
      var V = n('++0f')
      const K = [
        Object(S.t)('January'),
        Object(S.t)('February'),
        Object(S.t)('March'),
        Object(S.t)('April'),
        Object(S.t)('May'),
        Object(S.t)('June'),
        Object(S.t)('July'),
        Object(S.t)('August'),
        Object(S.t)('September'),
        Object(S.t)('October'),
        Object(S.t)('November'),
        Object(S.t)('December')
      ]
      class U extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._prevMonth = () => {
              const e = new Date(this.state.viewDate)
              e.setMonth(e.getMonth() - 1),
                this.setState({ viewDate: e }),
                this.props.onMonthSwitch && this.props.onMonthSwitch()
            }),
            (this._nextMonth = () => {
              const e = new Date(this.state.viewDate)
              e.setMonth(e.getMonth() + 1),
                this.setState({ viewDate: e }),
                this.props.onMonthSwitch && this.props.onMonthSwitch()
            }),
            (this._onClickDay = (e) => {
              this.setState({ viewDate: new Date(e) }), this.props.onSelect && this.props.onSelect(new Date(e))
            }),
            (this.state = { viewDate: e.selectedDate })
        }
        render() {
          return s.createElement(
            'div',
            { className: N(z.calendar, this.props.popupStyle && z.popupStyle, this.props.className), tabIndex: -1 },
            s.createElement(
              'div',
              { className: z.header },
              s.createElement(W.a, { icon: V, onClick: this._prevMonth, className: N(z.switchBtn, z.prev) }),
              s.createElement(
                'div',
                { className: z.title },
                `${K[this.state.viewDate.getMonth()]} ${this.state.viewDate.getFullYear()}`
              ),
              s.createElement(W.a, { icon: V, onClick: this._nextMonth, className: N(z.switchBtn, z.next) })
            ),
            s.createElement(q, {
              viewDate: this.state.viewDate,
              selectedDate: this.props.selectedDate,
              maxDate: this.props.maxDate,
              minDate: this.props.minDate,
              onClickDay: this._onClickDay,
              disableWeekends: this.props.disableWeekends,
              highlightedFrom: this.props.highlightedFrom,
              highlightedTo: this.props.highlightedTo
            })
          )
        }
      }
      U.defaultProps = { popupStyle: !0 }
      var G = n('dKnb'),
        L = n('jh7f'),
        Y = n('xADF'),
        J = n('RgaO'),
        $ = n('Hrlb')
      class Q extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._handleFocus = () => {
              this.props.showOnFocus && this.props.onShowPicker()
            }),
            (this._handleInputRef = (e) => {
              ;(this._input = e), this.props.inputReference && this.props.inputReference(this._input)
            }),
            (this._onShowPicker = (e) => {
              if (e) {
                const t = e.getBoundingClientRect()
                t.width && t.right > window.innerWidth ? (e.style.right = '0') : (e.style.right = 'auto')
              }
            }),
            (this._onChange = () => {
              const e = Object(i.ensureNotNull)(this._input).value
              this.setState({ value: e }), this.props.onType(e)
            }),
            (this._onKeyDown = (e) => {
              this.props.onHidePicker()
            }),
            (this._onKeyPress = (e) => {
              if (e.charCode) {
                const t = String.fromCharCode(e.charCode)
                this.props.inputRegex.test(t) || e.preventDefault()
              }
            }),
            (this._onKeyUp = (e) => {
              if (8 !== e.keyCode) {
                const e = Object(i.ensureNotNull)(this._input).value,
                  t = this.props.fixValue(e)
                t !== e && this.setState({ value: t })
              }
            }),
            (this.state = { value: e.value })
        }
        componentWillReceiveProps(e) {
          e.value !== this.props.value && this.setState({ value: e.value })
        }
        render() {
          const {
            position: e = 'fixed',
            className: t,
            size: n,
            disabled: o,
            readonly: a,
            errors: r,
            icon: i,
            InputComponent: c = G.a
          } = this.props
          return s.createElement(
            'div',
            { className: $.pickerInput },
            s.createElement(c, {
              value: this.state.value,
              onBlur: this.props.onBlur,
              onKeyDown: this._onKeyDown,
              onKeyPress: this._onKeyPress,
              onKeyUp: this._onKeyUp,
              onChange: this._onChange,
              onFocus: this._handleFocus,
              onClick: this.props.onShowPicker,
              reference: this._handleInputRef,
              className: t,
              size: n,
              disabled: o,
              errors: r,
              messagesPosition: L.a.Attached,
              hasErrors: this.props.showErrorMessages && r && r.length > 0,
              name: this.props.name,
              readonly: a,
              endSlot:
                r && r.length
                  ? void 0
                  : s.createElement(
                      Y.b,
                      null,
                      s.createElement(W.a, {
                        icon: i,
                        className: N($.icon, o && $.disabled),
                        onClick: o || a ? void 0 : this.props.onShowPicker
                      })
                    )
            }),
            this.props.showPicker && !a
              ? s.createElement(J.a, { mouseDown: !0, handler: this.props.onHidePicker }, (t) =>
                  s.createElement(
                    'span',
                    { ref: t },
                    s.createElement(
                      'div',
                      { className: N($.picker, $[e]), key: '0', ref: this._onShowPicker },
                      this.props.children
                    )
                  )
                )
              : null
          )
        }
      }
      Q.defaultProps = { showOnFocus: !0 }
      class Z extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._nativeInputRef = s.createRef()),
            (this._handleInputRef = (e) => {
              ;(this._input = e), this.props.inputReference && this.props.inputReference(this._input)
            }),
            (this._onFocus = () => {
              this.setState({ isFocused: !0 })
            }),
            (this._onBlur = () => {
              this._nativeInputRef.current && (this._nativeInputRef.current.defaultValue = this.state.value),
                this.setState({ isFocused: !1 })
            }),
            (this._onChange = (e) => {
              const { value: t } = e.target
              t && (this.setState({ value: t }), this.props.onChange(t))
            }),
            (this.state = { value: e.value, isFocused: !1 })
        }
        componentDidMount() {
          this._nativeInputRef.current && (this._nativeInputRef.current.defaultValue = this.props.value)
        }
        render() {
          const { className: e, disabled: t, errors: n, InputComponent: o = G.a } = this.props,
            a = !this.props.readonly && !t,
            r = this.props.showErrorMessages && n && n.length > 0
          return s.createElement(
            'div',
            { className: $.pickerInput },
            s.createElement(o, {
              value: this.state.value,
              readonly: !0,
              noReadonlyStyles: !0,
              endSlot:
                n && n.length
                  ? void 0
                  : s.createElement(
                      Y.b,
                      null,
                      s.createElement(W.a, { icon: this.props.icon, className: N($.icon, t && $.disabled) })
                    ),
              className: e,
              inputClassName: $.textInput,
              size: this.props.size,
              disabled: t,
              hasErrors: r,
              errors: n,
              alwaysShowAttachedErrors: !0,
              messagesPosition: L.a.Attached,
              name: a ? void 0 : this.props.name,
              reference: this._handleInputRef,
              highlight: this.state.isFocused,
              intent: !r && this.state.isFocused ? 'primary' : void 0
            }),
            a &&
              s.createElement('input', {
                ref: this._nativeInputRef,
                type: this.props.type,
                className: $.nativePicker,
                onChange: this._onChange,
                onInput: this._onChange,
                min: this.props.min,
                max: this.props.max,
                name: this.props.name,
                onFocus: this._onFocus,
                onBlur: this._onBlur
              })
          )
        }
      }
      var X = n('ldG2'),
        ee = n('77yN')
      class te extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._pickerInputContainerRef = o.a.createRef()),
            (this._dateFormatter = new H.DateFormatter()),
            (this._fixValue = (e) => (
              (e = (e = e.substr(0, 10)).replace(/-+/g, '-')),
              (/^\d{4}$/.test(e) || /^\d{4}-\d{2}$/.test(e)) && (e += '-'),
              e
            )),
            (this._isValid = (e) => {
              if (/^[0-9]{4}(-[0-9]{2}){2}/.test(e)) {
                const t = new Date(e.concat('T00:00'))
                return (
                  !(function (e) {
                    return Number.isNaN(Number(e))
                  })(t) &&
                  (!!this.props.noRangeValidation || f(t, this.props.minDate, this.props.maxDate))
                )
              }
              return !1
            }),
            (this._onBlur = (e) => {
              var t
              if (
                !this.props.revertInvalidData ||
                (null === (t = this._pickerInputContainerRef.current) || void 0 === t
                  ? void 0
                  : t.contains(e.relatedTarget))
              )
                return
              const { value: n } = e.target
              if (!this._isValid(n)) {
                const t = new Date(this.state.date)
                this.setState({ pickerInputKey: e.timeStamp, date: t, isInvalid: !1 }), this.props.onPick(t)
              }
            }),
            (this._onType = (e) => {
              const t = this._isValid(e) ? new Date(e.concat('T00:00')) : null
              t ? this.setState({ date: t, isInvalid: !1 }) : this.setState({ isInvalid: !0 }), this.props.onPick(t)
            }),
            (this._onSelect = (e) => {
              this.setState({ date: e, showCalendar: !1, isInvalid: !1 }), this.props.onPick(e)
            }),
            (this._showCalendar = () => {
              this.setState({ showCalendar: !0 })
            }),
            (this._hideCalendar = () => {
              this.setState({ showCalendar: !1 })
            }),
            (this._getErrors = () => {
              const e = this.props.errors ? [...this.props.errors] : []
              return this.state.isInvalid && e.push(window.t('Please enter the right date format yyyy-mm-dd')), e
            }),
            (this.state = {
              pickerInputKey: 0,
              date: e.initial,
              showCalendar: !1,
              isInvalid: !this._isValid(this._dateFormatter.formatLocal(e.initial))
            })
        }
        render() {
          return Modernizr.mobiletouch
            ? o.a.createElement(Z, {
                value: this._dateFormatter.formatLocal(this.state.date),
                type: 'date',
                onChange: this._onType,
                icon: ee,
                disabled: this.props.disabled,
                size: this.props.size,
                min: this.props.minDate && this._dateFormatter.formatLocal(this.props.minDate),
                max: this.props.maxDate && this._dateFormatter.formatLocal(this.props.maxDate),
                errors: this._getErrors(),
                showErrorMessages: this.props.showErrorMessages,
                name: this.props.name,
                readonly: this.props.readonly,
                className: N(this._getFontSizeClassName(this.props.size), this.props.className),
                inputReference: this.props.inputReference,
                InputComponent: this.props.InputComponent
              })
            : o.a.createElement(
                'div',
                { ref: this._pickerInputContainerRef },
                o.a.createElement(
                  Q,
                  {
                    key: this.state.pickerInputKey,
                    value: this._dateFormatter.formatLocal(this.state.date),
                    inputRegex: /[0-9.]/,
                    fixValue: this._fixValue,
                    onType: this._onType,
                    onBlur: this._onBlur,
                    onShowPicker: this._showCalendar,
                    onHidePicker: this._hideCalendar,
                    showPicker: this.state.showCalendar && this.props.withCalendar,
                    showOnFocus: this.props.showOnFocus,
                    icon: ee,
                    disabled: this.props.disabled,
                    size: this.props.size,
                    errors: this._getErrors(),
                    showErrorMessages: this.props.showErrorMessages,
                    name: this.props.name,
                    readonly: this.props.readonly,
                    position: this.props.position,
                    className: N(this._getFontSizeClassName(this.props.size), this.props.className),
                    inputReference: this.props.inputReference,
                    InputComponent: this.props.InputComponent
                  },
                  o.a.createElement(U, {
                    selectedDate: this.state.date,
                    maxDate: this.props.maxDate,
                    minDate: this.props.minDate,
                    onSelect: this._onSelect
                  })
                )
              )
        }
        componentWillReceiveProps(e) {
          this.props.initial !== e.initial && this.setState({ date: e.initial })
        }
        _getFontSizeClassName(e) {
          return e ? ('large' === e ? X.b.FontSizeLarge : X.b.FontSizeMedium) : void 0
        }
      }
      te.defaultProps = { position: 'fixed', withCalendar: !0 }
      var ne = n('mrSG'),
        se = n('8JZL')
      function oe(e) {
        const { className: t, text: n } = e
        return o.a.createElement('span', { className: k()(se.tooltip, t) }, n)
      }
      var ae = n('/Wph'),
        re = n('F6Wo')
      function ie(e) {
        const { hasErrors: t, onClick: n, errors: s } = e,
          a = Object(ne.a)(e, ['hasErrors', 'onClick', 'errors'])
        return o.a.createElement(
          'div',
          { className: re.container, onClick: n },
          o.a.createElement(
            G.a,
            Object.assign({}, a, {
              className: re.date,
              hasErrors: t,
              errors: [],
              endSlot:
                !t &&
                o.a.createElement(
                  Y.b,
                  { icon: !0, interactive: !1 },
                  o.a.createElement(W.a, { icon: ae, className: re.icon })
                )
            })
          ),
          t && o.a.createElement(oe, { text: Object(S.t)('Please enter the right date'), className: re.tooltip })
        )
      }
      const ce = o.a.createContext({ isActive: !1, isFocused: !1 })
      function le(e) {
        const { value: t, reference: n, isActive: a, onPick: r, onFocus: i } = e,
          [c, l] = Object(s.useState)(!1)
        return o.a.createElement(
          ce.Provider,
          { value: { isActive: a, isFocused: c } },
          o.a.createElement(
            'div',
            {
              onFocus: function () {
                l(!0), i && i()
              },
              onBlur: function () {
                l(!1)
              }
            },
            o.a.createElement(te, {
              initial: t,
              inputReference: n,
              InputComponent: ue,
              withCalendar: !1,
              onPick: function (e) {
                if (!e) return
                r(new Date(e))
              },
              revertInvalidData: !0
            })
          )
        )
      }
      function ue(e) {
        const { isActive: t, isFocused: n } = Object(s.useContext)(ce)
        return o.a.createElement(ie, Object.assign({}, e, { highlight: t || n }))
      }
      var he = n('qZIh')
      function de(e) {
        const { value: t, isDisabled: n, onPick: s } = e
        return o.a.createElement(he.a, {
          value: ((a = t), l(a.getHours()) + ':' + l(a.getMinutes())),
          onChange: s,
          disabled: n
        })
        var a
      }
      var pe = n('vx8J')
      function me(e) {
        return o.a.createElement(U, Object.assign({}, e, { className: pe.calendar, popupStyle: !1 }))
      }
      function fe(e, t) {
        const n = new Date(t)
        return n.setFullYear(e.getFullYear()), n.setMonth(e.getMonth()), n.setDate(e.getDate()), n
      }
      function ve(e, t) {
        const n = new Date(t)
        return n.setHours(e.getHours()), n.setMinutes(e.getMinutes()), n
      }
      function be(e) {
        const { dateOnly: t, onCalendarMonthSwitch: n } = e,
          { date: a, setDate: r } = Object(i.ensureNotNull)(Object(s.useContext)(_)),
          c = Object(s.useRef)(null),
          l = Object(s.useRef)(null)
        return (
          Object(s.useEffect)(() => {
            _e || null === l.current || l.current.focus()
          }, []),
          o.a.createElement(
            'div',
            { ref: c, tabIndex: -1 },
            o.a.createElement(
              F,
              null,
              o.a.createElement(le, {
                reference: function (e) {
                  l.current = e
                },
                value: new Date(a),
                onPick: function (e) {
                  const t = fe(e, a)
                  r(t)
                },
                isActive: !_e
              }),
              o.a.createElement(de, {
                value: new Date(a),
                isDisabled: t,
                onPick: function (e) {
                  var t
                  const [n, s] = e.split(':'),
                    o = new Date()
                  o.setHours(Number(n)), o.setMinutes(Number(s))
                  const i = ve(o, a)
                  r(i), _e || null === (t = c.current) || void 0 === t || t.focus({ preventScroll: !0 })
                }
              })
            ),
            !_e &&
              o.a.createElement(me, {
                key: `${a.getFullYear()}-${a.getMonth()}-${a.getDate()}`,
                selectedDate: new Date(a),
                onSelect: function (e) {
                  var t
                  const n = fe(e, a)
                  r(n), null === (t = c.current) || void 0 === t || t.focus({ preventScroll: !0 })
                },
                onMonthSwitch: n,
                maxDate: new Date()
              })
          )
        )
      }
      function ge(e) {
        const { dateOnly: t, onCalendarMonthSwitch: n, onDateInputFocus: a } = e,
          { dateFrom: r, dateTo: c, setDateFrom: l, setDateTo: u } = Object(i.ensureNotNull)(Object(s.useContext)(E)),
          [h, d] = Object(s.useState)('from'),
          p = Object(s.useRef)(null),
          m = Object(s.useRef)(null),
          f = Object(s.useRef)(null),
          v = Object(s.useMemo)(() => ('from' === h ? new Date(r) : new Date(c)), [h, c, r])
        return (
          Object(s.useEffect)(() => {
            _e || null === m.current || m.current.focus()
          }, []),
          o.a.createElement(
            'div',
            { ref: p, tabIndex: -1 },
            o.a.createElement(
              F,
              null,
              o.a.createElement(le, {
                value: r,
                reference: function (e) {
                  m.current = e
                },
                isActive: !_e && 'from' === h,
                onPick: function (e) {
                  const t = fe(e, r)
                  l(t)
                },
                onFocus: function () {
                  d('from'), a()
                }
              }),
              o.a.createElement(de, {
                value: r,
                isDisabled: t,
                onPick: function (e) {
                  b(e, r, l)
                }
              })
            ),
            o.a.createElement(
              F,
              null,
              o.a.createElement(le, {
                value: c,
                reference: function (e) {
                  f.current = e
                },
                isActive: !_e && 'to' === h,
                onPick: function (e) {
                  const t = fe(e, c)
                  u(t)
                },
                onFocus: function () {
                  d('to'), a()
                }
              }),
              o.a.createElement(de, {
                value: c,
                isDisabled: t,
                onPick: function (e) {
                  b(e, c, u)
                }
              })
            ),
            !_e &&
              o.a.createElement(me, {
                key: `${v.getFullYear()}-${v.getMonth()}-${v.getDate()}`,
                selectedDate: new Date(v),
                onSelect: function (e) {
                  const t = fe(e, 'from' === h ? r : c)
                  ;({
                    from: () => {
                      var e
                      l(t), null === (e = f.current) || void 0 === e || e.focus({ preventScroll: !0 })
                    },
                    to: () => {
                      var e
                      u(t), null === (e = p.current) || void 0 === e || e.focus({ preventScroll: !0 })
                    }
                  }[h]())
                },
                onMonthSwitch: n,
                highlightedFrom: new Date(r),
                highlightedTo: new Date(c),
                maxDate: 'from' === h ? new Date(c) : void 0,
                minDate: 'to' === h ? new Date(r) : void 0
              })
          )
        )
        function b(e, t, n) {
          var s
          const [o, a] = e.split(':'),
            r = new Date()
          r.setHours(Number(o)), r.setMinutes(Number(a))
          n(ve(r, t)), _e || null === (s = p.current) || void 0 === s || s.focus({ preventScroll: !0 })
        }
      }
      var we = n('aDg1'),
        De = n('/KDZ'),
        Ce = n('FT3R')
      const _e = Modernizr.mobiletouch,
        Oe = () => !0,
        Ee = {
          byId: { Date: { title: 'Date' }, CustomRange: { title: 'Custom range' } },
          allIds: ['Date', 'CustomRange']
        }
      function ye(e) {
        const { dateOnly: t, onClose: n, onGoToDate: a, onGoToRange: r } = e,
          c = Object(s.useRef)(null),
          [l, u] = Object(s.useState)(j.a.getValue('GoToDialog.activeTab', 'Date')),
          [h, d] = Object(s.useState)(0),
          { date: p, isValid: m } = Object(i.ensureNotNull)(Object(s.useContext)(_)),
          { dateFrom: f, dateTo: v, isValid: b } = Object(i.ensureNotNull)(Object(s.useContext)(E))
        return (
          Object(s.useEffect)(
            () => (
              x.subscribe(T.CLOSE_POPUPS_AND_DIALOGS_COMMAND, C, null),
              () => {
                x.unsubscribe(T.CLOSE_POPUPS_AND_DIALOGS_COMMAND, C, null)
              }
            ),
            [n]
          ),
          Object(s.useEffect)(() => {
            null !== c.current && c.current()
          }, [h, l, p, f, v]),
          o.a.createElement(De.a, { rule: M.a.TabletSmall }, (e) =>
            o.a.createElement(R.a, {
              className: k()(Ce.dialogWrapper, e && Ce.dialogWrapperSmall),
              title: Object(S.t)('Go to'),
              dataName: 'go-to-date-dialog',
              render: g,
              defaultActionOnClose: 'cancel',
              onClose: C,
              onClickOutside: C,
              onCancel: C,
              onSubmit: D,
              submitButtonDisabled: w(),
              submitButtonText: Object(S.t)('Go to'),
              forceCloseOnEsc: Oe,
              shouldForceFocus: !1,
              fullScreen: e,
              isOpened: !0
            })
          )
        )
        function g({ requestResize: e }) {
          return (
            (c.current = e),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                'div',
                { className: Ce.tabs },
                o.a.createElement(we.a, { activeTabId: l, tabs: Ee, onSelect: O })
              ),
              o.a.createElement(
                'div',
                { className: k()(Ce.content, _e && Ce.contentMobile) },
                o.a.createElement(
                  'div',
                  { className: Ce.bodyWrapper },
                  o.a.createElement(Se, { onCalendarMonthSwitch: y, onDateInputFocus: y, activeTab: l, dateOnly: t })
                )
              )
            )
          )
        }
        function w() {
          return { CustomRange: !b, Date: !m }[l]
        }
        function D() {
          switch (l) {
            case 'Date':
              a(p)
              break
            case 'CustomRange':
              r(f, v)
          }
        }
        function C() {
          n()
        }
        function O(e) {
          u(e), j.a.setValue('GoToDialog.activeTab', e)
        }
        function y() {
          d(h + 1)
        }
      }
      function Se(e) {
        const { activeTab: t, dateOnly: n, onCalendarMonthSwitch: s, onDateInputFocus: a } = e
        switch (t) {
          case 'Date':
            return o.a.createElement(be, { dateOnly: n, onCalendarMonthSwitch: s })
          case 'CustomRange':
            return o.a.createElement(ge, { dateOnly: n, onCalendarMonthSwitch: s, onDateInputFocus: a })
        }
      }
      function Ne(e) {
        const { dateOnly: t, onClose: n, onGoToDate: s, onGoToRange: a, initialGoToDate: r, initialRanges: i } = e
        return o.a.createElement(
          O,
          { initialGoToDate: r },
          o.a.createElement(
            y,
            { initialRanges: i },
            o.a.createElement(ye, { dateOnly: t, onClose: n, onGoToDate: s, onGoToRange: a })
          )
        )
      }
      var ke = n('pPtI'),
        xe = n('k9/m')
      const Ie = new (class {
        constructor() {
          this._hasError = !1
        }
        getItemOrDefault(e, t) {
          return !sessionStorage || this._hasError ? t : sessionStorage.getItem(e)
        }
        setItem(e, t = 'true') {
          try {
            sessionStorage.setItem(e, t), (this._hasError = !1)
          } catch (n) {
            this._hasError = !0
          }
        }
      })()
      n.d(t, 'showGoToDateDialog', function () {
        return Te
      })
      const je = new w.a()
      function Te(e) {
        if (je.isOpened('goTo')) return
        const t = e.model()
        if (!t) return
        const n = document.createElement('div'),
          s = o.a.createElement(Ne, {
            onClose: a,
            dateOnly: t.model().mainSeries().isDWM(),
            initialGoToDate: Me(),
            initialRanges: Re(e),
            onGoToDate: (e) => {
              !(function (e, t) {
                Ie.setItem('goToDateTabLastPickedDate', String(t.valueOf()))
                if (void 0 === e.model().timeScale().tickMarks().minIndex) return
                const n = g(t).valueOf()
                e.model()
                  .gotoTime(n)
                  .done((t) => {
                    const n = e.model().mainSeries()
                    void 0 === t ? n.clearGotoDateResult() : n.setGotoDateResult(t)
                  })
              })(t, e),
                a()
            },
            onGoToRange: (t, n) => {
              !(function (e, t, n) {
                const s = (function (e) {
                  const t = e.timezone()
                  if ('exchange' !== t) return t
                  const n = e.mainSeries().symbolInfo()
                  return null == n ? void 0 : n.timezone
                })(e.model().model())
                if (!s) return
                const o = c.linking.interval.value(),
                  a = o && Object(ke.normalizeIntervalString)(o),
                  r = C.a.get_timezone(s),
                  i = (e) => Object(D.cal_to_utc)(r, new Date(e)),
                  l = g(t).valueOf(),
                  u = g(n).valueOf(),
                  h = { val: { type: 'time-range', from: i(l) / 1e3, to: i(u) / 1e3 }, res: a }
                e.chartWidgetCollection().setTimeFrame(h)
              })(e, t, n),
                a()
            }
          })
        function a() {
          r.a.unmountComponentAtNode(n), je.setAsClosed('goTo')
        }
        r.a.render(s, n), je.setAsOpened('goTo')
      }
      function Me() {
        const e = Ie.getItemOrDefault('goToDateTabLastPickedDate', null)
        return null === e ? u(new Date()) : new Date(Number(e))
      }
      function Re(e) {
        const t = (function (e) {
          const t = e.model().timeScale(),
            n = t.visibleBarsStrictRange()
          if (null === n) return
          const s = e.model().mainSeries(),
            o = s.nearestIndex(n.firstBar(), xe.PlotRowSearchMode.NearestRight),
            a = s.nearestIndex(n.lastBar(), xe.PlotRowSearchMode.NearestLeft)
          if (void 0 === o || void 0 === a) return
          return {
            from: Object(i.ensureNotNull)(t.indexToUserTime(o)),
            to: Object(i.ensureNotNull)(t.indexToUserTime(a))
          }
        })(e)
        return t ? { from: b(t.from), to: b(t.to) } : { from: b(new Date()), to: b(new Date()) }
      }
    },
    v1bN: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        item: 'item-2IihgTnv',
        hovered: 'hovered-2IihgTnv',
        isDisabled: 'isDisabled-2IihgTnv',
        isActive: 'isActive-2IihgTnv',
        shortcut: 'shortcut-2IihgTnv',
        toolbox: 'toolbox-2IihgTnv',
        withIcon: 'withIcon-2IihgTnv',
        icon: 'icon-2IihgTnv',
        labelRow: 'labelRow-2IihgTnv',
        label: 'label-2IihgTnv',
        showOnHover: 'showOnHover-2IihgTnv'
      }
    },
    vx8J: function (e, t, n) {
      e.exports = { calendar: 'calendar-1NjzAl_S' }
    }
  }
])
