import ke, { createContext as Nt, useContext as It, useReducer as Dt, useMemo as Ae, useState as Te, useCallback as G, useRef as X, useEffect as oe, forwardRef as $e, createElement as je, useImperativeHandle as Lt } from "react";
import { v4 as Ue } from "uuid";
function zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ye = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Bt() {
  if (We) return fe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function i(n, r, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      s = {};
      for (var u in r)
        u !== "key" && (s[u] = r[u]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return fe.Fragment = t, fe.jsx = i, fe.jsxs = i, fe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function $t() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ae ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case C:
          return "Fragment";
        case A:
          return "Profiler";
        case z:
          return "StrictMode";
        case R:
          return "Suspense";
        case B:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case h:
            return "Portal";
          case k:
            return o.displayName || "Context";
          case _:
            return (o._context.displayName || "Context") + ".Consumer";
          case l:
            var m = o.render;
            return o = o.displayName, o || (o = m.displayName || m.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case Z:
            return m = o.displayName || null, m !== null ? m : e(o.type) || "Memo";
          case V:
            m = o._payload, o = o._init;
            try {
              return e(o(m));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function i(o) {
      try {
        t(o);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var P = m.error, T = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return P.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), t(o);
      }
    }
    function n(o) {
      if (o === C) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === V)
        return "<...>";
      try {
        var m = e(o);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var o = ne.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (ie.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function u(o, m) {
      function P() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: P,
        configurable: !0
      });
    }
    function g() {
      var o = e(this.type);
      return F[o] || (F[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function f(o, m, P, T, I, w) {
      var S = P.ref;
      return o = {
        $$typeof: x,
        type: o,
        key: m,
        props: P,
        _owner: T
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function b(o, m, P, T, I, w) {
      var S = m.children;
      if (S !== void 0)
        if (T)
          if (re(S)) {
            for (T = 0; T < S.length; T++)
              y(S[T]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(S);
      if (ie.call(m, "key")) {
        S = e(o);
        var j = Object.keys(m).filter(function(D) {
          return D !== "key";
        });
        T = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", p[S + T] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          S,
          j,
          S
        ), p[S + T] = !0);
      }
      if (S = null, P !== void 0 && (i(P), S = "" + P), a(m) && (i(m.key), S = "" + m.key), "key" in m) {
        P = {};
        for (var L in m)
          L !== "key" && (P[L] = m[L]);
      } else P = m;
      return S && u(
        P,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), f(
        o,
        S,
        P,
        r(),
        I,
        w
      );
    }
    function y(o) {
      d(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === V && (o._payload.status === "fulfilled" ? d(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function d(o) {
      return typeof o == "object" && o !== null && o.$$typeof === x;
    }
    var O = ke, x = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), k = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), ne = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, re = Array.isArray, se = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var K, F = {}, J = O.react_stack_bottom_frame.bind(
      O,
      s
    )(), te = se(n(s)), p = {};
    ge.Fragment = C, ge.jsx = function(o, m, P) {
      var T = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return b(
        o,
        m,
        P,
        !1,
        T ? Error("react-stack-top-frame") : J,
        T ? se(n(o)) : te
      );
    }, ge.jsxs = function(o, m, P) {
      var T = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return b(
        o,
        m,
        P,
        !0,
        T ? Error("react-stack-top-frame") : J,
        T ? se(n(o)) : te
      );
    };
  })()), ge;
}
var Je;
function Ut() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? ye.exports = Bt() : ye.exports = $t()), ye.exports;
}
var c = Ut();
const Ne = 100, Ie = 50, De = 200, Xe = 5, Le = (e) => e < De, ze = (e) => e > Ie, Ht = 96, be = (e) => Math.round(e * Ht), Pe = {
  NORMAL: {
    name: "Normal",
    label: 'Normal (1")',
    top: 1,
    bottom: 1,
    left: 1,
    right: 1
  },
  NARROW: {
    name: "Narrow",
    label: 'Narrow (0.5")',
    top: 0.5,
    bottom: 0.5,
    left: 0.5,
    right: 0.5
  },
  MODERATE: {
    name: "Moderate",
    label: 'Moderate (1" / 0.75")',
    top: 1,
    bottom: 1,
    left: 0.75,
    right: 0.75
  },
  WIDE: {
    name: "Wide",
    label: 'Wide (1" / 2")',
    top: 1,
    bottom: 1,
    left: 2,
    right: 2
  },
  OFFICE_2003: {
    name: "Office 2003",
    label: 'Office 2003 (1" / 1.25")',
    top: 1,
    bottom: 1,
    left: 1.25,
    right: 1.25
  }
}, le = "NARROW", mt = (e = le) => {
  const t = Pe[e] || Pe[le];
  return {
    top: be(t.top),
    bottom: be(t.bottom),
    left: be(t.left),
    right: be(t.right)
  };
}, Gt = (e = le) => {
  const t = mt(e);
  return t.top + t.bottom;
}, Zt = () => Object.keys(Pe), qt = (e) => {
  const t = Pe[e];
  return t ? t.label : "Unknown";
}, ee = {
  A4: {
    name: "A4",
    width: 794,
    // 210mm = 210 * 96 / 25.4 ≈ 794px (Word A4 width)
    height: 1123,
    // 297mm = 297 * 96 / 25.4 ≈ 1123px (Word A4 height)
    widthMm: 210,
    heightMm: 297,
    widthIn: 8.27,
    heightIn: 11.69
  },
  Letter: {
    name: "Letter",
    width: 816,
    // 8.5 inches = 8.5 * 96 = 816px (Word Letter width)
    height: 1056,
    // 11 inches = 11 * 96 = 1056px (Word Letter height)
    widthMm: 216,
    heightMm: 279,
    widthIn: 8.5,
    heightIn: 11
  },
  Legal: {
    name: "Legal",
    width: 816,
    // 8.5 inches = 8.5 * 96 = 816px (Word Legal width)
    height: 1344,
    // 14 inches = 14 * 96 = 1344px (Word Legal height)
    widthMm: 216,
    heightMm: 356,
    widthIn: 8.5,
    heightIn: 14
  }
}, yt = "A4", He = (e) => {
  const t = ee[e] || ee[yt];
  return {
    width: t.width,
    height: t.height
  };
}, $r = (e) => Object.keys(ee).includes(e), Ur = () => Object.keys(ee), me = yt, ue = "<p><br></p>", Yt = "continuous", he = (e, t = me) => ({
  id: Ue(),
  index: e,
  size: t,
  content: ue,
  images: [],
  isBreakPoint: !1
}), xe = (e) => typeof e != "string" || e.trim() === "" ? ue : e, bt = (e, t = me) => (e.length > 0 ? e : [he(0, t)]).map((n, r) => ({
  id: n.id || Ue(),
  index: r,
  size: n.size || t,
  content: xe(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Ft = (e = me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: He(e).height
}], Be = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), i = e.pageSize || me, n = bt(e.pages || [he(0, i)], i);
  return {
    id: Ue(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: i,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Yt,
    continuousContent: e.continuousContent || ue,
    pageBoundaries: e.pageBoundaries || Ft(i),
    zoomLevel: e.zoomLevel || Ne,
    pageMargins: e.pageMargins || le
  };
}, N = {
  INITIALIZE_DOCUMENT: "INITIALIZE_DOCUMENT",
  UPDATE_TITLE: "UPDATE_TITLE",
  UPDATE_PAGE_CONTENT: "UPDATE_PAGE_CONTENT",
  UPDATE_PAGES: "UPDATE_PAGES",
  ADD_PAGE: "ADD_PAGE",
  DELETE_PAGE: "DELETE_PAGE",
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
  UPDATE_PAGE_SIZE: "UPDATE_PAGE_SIZE",
  RESET_DOCUMENT: "RESET_DOCUMENT",
  UPDATE_CONTINUOUS_CONTENT: "UPDATE_CONTINUOUS_CONTENT",
  UPDATE_PAGE_BOUNDARIES: "UPDATE_PAGE_BOUNDARIES",
  ADD_PAGE_BREAK: "ADD_PAGE_BREAK",
  REMOVE_PAGE_BREAK: "REMOVE_PAGE_BREAK",
  SET_EDITOR_MODE: "SET_EDITOR_MODE",
  INSERT_PAGE_AT: "INSERT_PAGE_AT",
  MOVE_PAGE_TO: "MOVE_PAGE_TO",
  DUPLICATE_PAGE: "DUPLICATE_PAGE",
  SET_ZOOM_LEVEL: "SET_ZOOM_LEVEL",
  ZOOM_IN: "ZOOM_IN",
  ZOOM_OUT: "ZOOM_OUT",
  RESET_ZOOM: "RESET_ZOOM",
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS"
}, Vt = (e, t) => {
  const i = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case N.INITIALIZE_DOCUMENT: {
      const { initialContent: n = ue, pageSize: r = me } = t.payload || {}, s = { ...he(0, r), content: xe(n) };
      return Be({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case N.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: i
      };
    case N.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: r } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[n] = {
        ...s[n],
        content: xe(r)
      }, {
        ...e,
        pages: s,
        updatedAt: i
      };
    }
    case N.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, r = bt(n.pages || [], e.pageSize), s = Array.isArray(n.pageBreaks) ? n.pageBreaks : r.slice(0, -1).map((a, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: r,
        activePage: Math.min(e.activePage, r.length - 1),
        pageBreaks: s,
        totalPages: r.length,
        updatedAt: i
      };
    }
    case N.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(n, 0, he(n, e.pageSize));
      const s = r.map((u, g) => ({
        ...u,
        index: g,
        size: e.pageSize
      })), a = s.slice(0, -1).map((u, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: n,
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: i
      };
    }
    case N.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(n, 1);
      const s = r.map((g, f) => ({
        ...g,
        index: f,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= s.length ? a = s.length - 1 : n <= a && a > 0 && (a -= 1);
      const u = s.slice(0, -1).map((g, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: a,
        pageBreaks: u,
        totalPages: s.length,
        updatedAt: i
      };
    }
    case N.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= r ? e : {
        ...e,
        activePage: n,
        updatedAt: i
      };
    }
    case N.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        He(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const r = e.pages.map((a, u) => ({
        ...a,
        index: u,
        size: n
      })), s = r.slice(0, -1).map((a, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: r,
        pageBreaks: s,
        updatedAt: i
      };
    }
    case N.RESET_DOCUMENT:
      return Be();
    case N.UPDATE_CONTINUOUS_CONTENT: {
      const n = xe(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: i
      };
    }
    case N.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const r = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: r,
        updatedAt: i
      };
    }
    case N.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: r } = t.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (n === "end")
        a = a + s + "<p><br></p>";
      else if (typeof n == "number") {
        const u = a.substring(0, n), g = a.substring(n);
        a = u + s + g;
      } else if (typeof r == "number" && typeof document < "u") {
        const u = document.createElement("div");
        u.innerHTML = a;
        const g = u.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && g.length === 0)
          a = a + s + "<p><br></p>";
        else if (r < g.length) {
          const f = g[r], b = document.createElement("page-break");
          b.setAttribute("data-page-break", "true"), b.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const y = document.createElement("p");
          y.innerHTML = "<br>", f.parentNode.insertBefore(b, f.nextSibling), b.parentNode.insertBefore(y, b.nextSibling), a = u.innerHTML;
        } else
          a = a + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: i
      };
    }
    case N.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[n] && s[n].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((u, g) => {
        u.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: i
      };
    }
    case N.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return n === "continuous" ? r = e.pages.map((u) => u.content).filter((u) => u && u !== ue).join(`
`) || ue : e.continuousContent && e.continuousContent !== ue && (s = [{ ...he(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: r,
        pages: s,
        updatedAt: i
      };
    }
    case N.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ie || n > De ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ie} and ${De}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: i
      };
    }
    case N.ZOOM_IN: {
      if (!Le(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Xe;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: i
      };
    }
    case N.ZOOM_OUT: {
      if (!ze(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Xe;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: i
      };
    }
    case N.RESET_ZOOM:
      return e.zoomLevel === Ne ? e : {
        ...e,
        zoomLevel: Ne,
        updatedAt: i
      };
    case N.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: i
      };
    }
    default:
      return e;
  }
}, Et = Nt(null), Hr = ({ children: e, initialState: t = {} }) => {
  const [i, n] = Dt(Vt, Be(t)), r = Ae(() => ({
    initializeDocument: (a) => n({ type: N.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => n({ type: N.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => n({ type: N.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => n({ type: N.UPDATE_PAGES, payload: a }),
    addPage: (a) => n({ type: N.ADD_PAGE, payload: a }),
    deletePage: (a) => n({ type: N.DELETE_PAGE, payload: a }),
    setActivePage: (a) => n({ type: N.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => n({ type: N.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => n({ type: N.RESET_DOCUMENT }),
    updateContinuousContent: (a) => n({ type: N.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => n({ type: N.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => n({ type: N.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => n({ type: N.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => n({ type: N.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => n({ type: N.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => n({ type: N.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => n({ type: N.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => n({ type: N.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => n({ type: N.ZOOM_IN }),
    zoomOut: () => n({ type: N.ZOOM_OUT }),
    resetZoom: () => n({ type: N.RESET_ZOOM }),
    updatePageMargins: (a) => n({ type: N.UPDATE_PAGE_MARGINS, payload: a })
  }), []), s = Ae(() => ({
    state: i,
    actions: r,
    dispatch: n
  }), [i, r]);
  return /* @__PURE__ */ c.jsx(Et.Provider, { value: s, children: e });
}, vt = () => {
  const e = It(Et);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, xt = () => {
  const { state: e } = vt();
  return e;
}, At = () => {
  const { actions: e } = vt();
  return e;
};
var Ee = { exports: {} }, ve = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Wt() {
  if (Qe) return $;
  Qe = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function _(l) {
    if (typeof l == "object" && l !== null) {
      var R = l.$$typeof;
      switch (R) {
        case t:
          switch (l = l.type, l) {
            case g:
            case f:
            case n:
            case s:
            case r:
            case y:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case u:
                case b:
                case x:
                case O:
                case a:
                  return l;
                default:
                  return R;
              }
          }
        case i:
          return R;
      }
    }
  }
  function k(l) {
    return _(l) === f;
  }
  return $.AsyncMode = g, $.ConcurrentMode = f, $.ContextConsumer = u, $.ContextProvider = a, $.Element = t, $.ForwardRef = b, $.Fragment = n, $.Lazy = x, $.Memo = O, $.Portal = i, $.Profiler = s, $.StrictMode = r, $.Suspense = y, $.isAsyncMode = function(l) {
    return k(l) || _(l) === g;
  }, $.isConcurrentMode = k, $.isContextConsumer = function(l) {
    return _(l) === u;
  }, $.isContextProvider = function(l) {
    return _(l) === a;
  }, $.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, $.isForwardRef = function(l) {
    return _(l) === b;
  }, $.isFragment = function(l) {
    return _(l) === n;
  }, $.isLazy = function(l) {
    return _(l) === x;
  }, $.isMemo = function(l) {
    return _(l) === O;
  }, $.isPortal = function(l) {
    return _(l) === i;
  }, $.isProfiler = function(l) {
    return _(l) === s;
  }, $.isStrictMode = function(l) {
    return _(l) === r;
  }, $.isSuspense = function(l) {
    return _(l) === y;
  }, $.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === f || l === s || l === r || l === y || l === d || typeof l == "object" && l !== null && (l.$$typeof === x || l.$$typeof === O || l.$$typeof === a || l.$$typeof === u || l.$$typeof === b || l.$$typeof === C || l.$$typeof === z || l.$$typeof === A || l.$$typeof === h);
  }, $.typeOf = _, $;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Kt() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function _(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === f || E === s || E === r || E === y || E === d || typeof E == "object" && E !== null && (E.$$typeof === x || E.$$typeof === O || E.$$typeof === a || E.$$typeof === u || E.$$typeof === b || E.$$typeof === C || E.$$typeof === z || E.$$typeof === A || E.$$typeof === h);
    }
    function k(E) {
      if (typeof E == "object" && E !== null) {
        var Q = E.$$typeof;
        switch (Q) {
          case t:
            var de = E.type;
            switch (de) {
              case g:
              case f:
              case n:
              case s:
              case r:
              case y:
                return de;
              default:
                var M = de && de.$$typeof;
                switch (M) {
                  case u:
                  case b:
                  case x:
                  case O:
                  case a:
                    return M;
                  default:
                    return Q;
                }
            }
          case i:
            return Q;
        }
      }
    }
    var l = g, R = f, B = u, Z = a, V = t, q = b, ae = n, ne = x, ie = O, re = i, se = s, K = r, F = y, J = !1;
    function te(E) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(E) || k(E) === g;
    }
    function p(E) {
      return k(E) === f;
    }
    function o(E) {
      return k(E) === u;
    }
    function m(E) {
      return k(E) === a;
    }
    function P(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function T(E) {
      return k(E) === b;
    }
    function I(E) {
      return k(E) === n;
    }
    function w(E) {
      return k(E) === x;
    }
    function S(E) {
      return k(E) === O;
    }
    function j(E) {
      return k(E) === i;
    }
    function L(E) {
      return k(E) === s;
    }
    function D(E) {
      return k(E) === r;
    }
    function Y(E) {
      return k(E) === y;
    }
    U.AsyncMode = l, U.ConcurrentMode = R, U.ContextConsumer = B, U.ContextProvider = Z, U.Element = V, U.ForwardRef = q, U.Fragment = ae, U.Lazy = ne, U.Memo = ie, U.Portal = re, U.Profiler = se, U.StrictMode = K, U.Suspense = F, U.isAsyncMode = te, U.isConcurrentMode = p, U.isContextConsumer = o, U.isContextProvider = m, U.isElement = P, U.isForwardRef = T, U.isFragment = I, U.isLazy = w, U.isMemo = S, U.isPortal = j, U.isProfiler = L, U.isStrictMode = D, U.isSuspense = Y, U.isValidElementType = _, U.typeOf = k;
  })()), U;
}
var tt;
function Tt() {
  return tt || (tt = 1, process.env.NODE_ENV === "production" ? ve.exports = Wt() : ve.exports = Kt()), ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Se, nt;
function Jt() {
  if (nt) return Se;
  nt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var g = Object.getOwnPropertyNames(a).map(function(b) {
        return a[b];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        f[b] = b;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Se = r() ? Object.assign : function(s, a) {
    for (var u, g = n(s), f, b = 1; b < arguments.length; b++) {
      u = Object(arguments[b]);
      for (var y in u)
        t.call(u, y) && (g[y] = u[y]);
      if (e) {
        f = e(u);
        for (var d = 0; d < f.length; d++)
          i.call(u, f[d]) && (g[f[d]] = u[f[d]]);
      }
    }
    return g;
  }, Se;
}
var Ce, rt;
function Ge() {
  if (rt) return Ce;
  rt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ce = e, Ce;
}
var Oe, ot;
function Pt() {
  return ot || (ot = 1, Oe = Function.call.bind(Object.prototype.hasOwnProperty)), Oe;
}
var Re, at;
function Xt() {
  if (at) return Re;
  at = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ge(), i = {}, n = /* @__PURE__ */ Pt();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function r(s, a, u, g, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in s)
        if (n(s, b)) {
          var y;
          try {
            if (typeof s[b] != "function") {
              var d = Error(
                (g || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            y = s[b](a, b, g, u, null, t);
          } catch (x) {
            y = x;
          }
          if (y && !(y instanceof Error) && e(
            (g || "React class") + ": type specification of " + u + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in i)) {
            i[y.message] = !0;
            var O = f ? f() : "";
            e(
              "Failed " + u + " type: " + y.message + (O ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Re = r, Re;
}
var we, it;
function Qt() {
  if (it) return we;
  it = 1;
  var e = Tt(), t = Jt(), i = /* @__PURE__ */ Ge(), n = /* @__PURE__ */ Pt(), r = /* @__PURE__ */ Xt(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(u) {
    var g = "Warning: " + u;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return we = function(u, g) {
    var f = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function y(p) {
      var o = p && (f && p[f] || p[b]);
      if (typeof o == "function")
        return o;
    }
    var d = "<<anonymous>>", O = {
      array: z("array"),
      bigint: z("bigint"),
      bool: z("boolean"),
      func: z("function"),
      number: z("number"),
      object: z("object"),
      string: z("string"),
      symbol: z("symbol"),
      any: A(),
      arrayOf: _,
      element: k(),
      elementType: l(),
      instanceOf: R,
      node: q(),
      objectOf: Z,
      oneOf: B,
      oneOfType: V,
      shape: ne,
      exact: ie
    };
    function x(p, o) {
      return p === o ? p !== 0 || 1 / p === 1 / o : p !== p && o !== o;
    }
    function h(p, o) {
      this.message = p, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function C(p) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, m = 0;
      function P(I, w, S, j, L, D, Y) {
        if (j = j || d, D = D || S, Y !== i) {
          if (g) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = j + ":" + S;
            !o[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[Q] = !0, m++);
          }
        }
        return w[S] == null ? I ? w[S] === null ? new h("The " + L + " `" + D + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new h("The " + L + " `" + D + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : p(w, S, j, L, D);
      }
      var T = P.bind(null, !1);
      return T.isRequired = P.bind(null, !0), T;
    }
    function z(p) {
      function o(m, P, T, I, w, S) {
        var j = m[P], L = K(j);
        if (L !== p) {
          var D = F(j);
          return new h(
            "Invalid " + I + " `" + w + "` of type " + ("`" + D + "` supplied to `" + T + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return C(o);
    }
    function A() {
      return C(a);
    }
    function _(p) {
      function o(m, P, T, I, w) {
        if (typeof p != "function")
          return new h("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var S = m[P];
        if (!Array.isArray(S)) {
          var j = K(S);
          return new h("Invalid " + I + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var L = 0; L < S.length; L++) {
          var D = p(S, L, T, I, w + "[" + L + "]", i);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return C(o);
    }
    function k() {
      function p(o, m, P, T, I) {
        var w = o[m];
        if (!u(w)) {
          var S = K(w);
          return new h("Invalid " + T + " `" + I + "` of type " + ("`" + S + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(p);
    }
    function l() {
      function p(o, m, P, T, I) {
        var w = o[m];
        if (!e.isValidElementType(w)) {
          var S = K(w);
          return new h("Invalid " + T + " `" + I + "` of type " + ("`" + S + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(p);
    }
    function R(p) {
      function o(m, P, T, I, w) {
        if (!(m[P] instanceof p)) {
          var S = p.name || d, j = te(m[P]);
          return new h("Invalid " + I + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return C(o);
    }
    function B(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function o(m, P, T, I, w) {
        for (var S = m[P], j = 0; j < p.length; j++)
          if (x(S, p[j]))
            return null;
        var L = JSON.stringify(p, function(Y, E) {
          var Q = F(E);
          return Q === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + I + " `" + w + "` of value `" + String(S) + "` " + ("supplied to `" + T + "`, expected one of " + L + "."));
      }
      return C(o);
    }
    function Z(p) {
      function o(m, P, T, I, w) {
        if (typeof p != "function")
          return new h("Property `" + w + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var S = m[P], j = K(S);
        if (j !== "object")
          return new h("Invalid " + I + " `" + w + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var L in S)
          if (n(S, L)) {
            var D = p(S, L, T, I, w + "." + L, i);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return C(o);
    }
    function V(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var o = 0; o < p.length; o++) {
        var m = p[o];
        if (typeof m != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(m) + " at index " + o + "."
          ), a;
      }
      function P(T, I, w, S, j) {
        for (var L = [], D = 0; D < p.length; D++) {
          var Y = p[D], E = Y(T, I, w, S, j, i);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && L.push(E.data.expectedType);
        }
        var Q = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new h("Invalid " + S + " `" + j + "` supplied to " + ("`" + w + "`" + Q + "."));
      }
      return C(P);
    }
    function q() {
      function p(o, m, P, T, I) {
        return re(o[m]) ? null : new h("Invalid " + T + " `" + I + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return C(p);
    }
    function ae(p, o, m, P, T) {
      return new h(
        (p || "React class") + ": " + o + " type `" + m + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function ne(p) {
      function o(m, P, T, I, w) {
        var S = m[P], j = K(S);
        if (j !== "object")
          return new h("Invalid " + I + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var L in p) {
          var D = p[L];
          if (typeof D != "function")
            return ae(T, I, w, L, F(D));
          var Y = D(S, L, T, I, w + "." + L, i);
          if (Y)
            return Y;
        }
        return null;
      }
      return C(o);
    }
    function ie(p) {
      function o(m, P, T, I, w) {
        var S = m[P], j = K(S);
        if (j !== "object")
          return new h("Invalid " + I + " `" + w + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var L = t({}, m[P], p);
        for (var D in L) {
          var Y = p[D];
          if (n(p, D) && typeof Y != "function")
            return ae(T, I, w, D, F(Y));
          if (!Y)
            return new h(
              "Invalid " + I + " `" + w + "` key `" + D + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(m[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var E = Y(S, D, T, I, w + "." + D, i);
          if (E)
            return E;
        }
        return null;
      }
      return C(o);
    }
    function re(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(re);
          if (p === null || u(p))
            return !0;
          var o = y(p);
          if (o) {
            var m = o.call(p), P;
            if (o !== p.entries) {
              for (; !(P = m.next()).done; )
                if (!re(P.value))
                  return !1;
            } else
              for (; !(P = m.next()).done; ) {
                var T = P.value;
                if (T && !re(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(p, o) {
      return p === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function K(p) {
      var o = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : se(o, p) ? "symbol" : o;
    }
    function F(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var o = K(p);
      if (o === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function J(p) {
      var o = F(p);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function te(p) {
      return !p.constructor || !p.constructor.name ? d : p.constructor.name;
    }
    return O.checkPropTypes = r, O.resetWarningCache = r.resetWarningCache, O.PropTypes = O, O;
  }, we;
}
var Me, st;
function en() {
  if (st) return Me;
  st = 1;
  var e = /* @__PURE__ */ Ge();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, Me = function() {
    function n(a, u, g, f, b, y) {
      if (y !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function r() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: r,
      element: n,
      elementType: n,
      instanceOf: r,
      node: n,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Me;
}
var ct;
function tn() {
  if (ct) return Ee.exports;
  if (ct = 1, process.env.NODE_ENV !== "production") {
    var e = Tt(), t = !0;
    Ee.exports = /* @__PURE__ */ Qt()(e.isElement, t);
  } else
    Ee.exports = /* @__PURE__ */ en()();
  return Ee.exports;
}
var nn = /* @__PURE__ */ tn();
const v = /* @__PURE__ */ zt(nn), _t = {
  "7.5pt": { pt: 7.5, px: 10, label: "7.5" },
  "9pt": { pt: 9, px: 12, label: "9" },
  "10pt": { pt: 10, px: 13, label: "10" },
  "11pt": { pt: 11, px: 15, label: "11" },
  "12pt": { pt: 12, px: 16, label: "12" },
  "14pt": { pt: 14, px: 19, label: "14" },
  "16pt": { pt: 16, px: 21, label: "16" },
  "18pt": { pt: 18, px: 24, label: "18" },
  "20pt": { pt: 20, px: 27, label: "20" },
  "22pt": { pt: 22, px: 29, label: "22" },
  "24pt": { pt: 24, px: 32, label: "24" },
  "26pt": { pt: 26, px: 35, label: "26" },
  "28pt": { pt: 28, px: 37, label: "28" },
  "36pt": { pt: 36, px: 48, label: "36" },
  "48pt": { pt: 48, px: 64, label: "48" },
  "72pt": { pt: 72, px: 96, label: "72" }
}, rn = [
  { value: "10px", label: "7.5", pt: 7.5 },
  // 7.5 pt ≈ 10 px
  { value: "12px", label: "9", pt: 9 },
  // 9 pt ≈ 12 px
  { value: "13px", label: "10", pt: 10 },
  // 10 pt ≈ 13 px
  { value: "15px", label: "11", pt: 11 },
  // 11 pt ≈ 15 px (default in Word)
  { value: "16px", label: "12", pt: 12 },
  // 12 pt ≈ 16 px
  { value: "19px", label: "14", pt: 14 },
  // 14 pt ≈ 19 px
  { value: "21px", label: "16", pt: 16 },
  // 16 pt ≈ 21 px
  { value: "24px", label: "18", pt: 18 },
  // 18 pt ≈ 24 px
  { value: "27px", label: "20", pt: 20 },
  // 20 pt ≈ 27 px
  { value: "32px", label: "24", pt: 24 },
  // 24 pt ≈ 32 px
  { value: "37px", label: "28", pt: 28 },
  // 28 pt ≈ 37 px
  { value: "48px", label: "36", pt: 36 },
  // 36 pt ≈ 48 px
  { value: "64px", label: "48", pt: 48 },
  // 48 pt ≈ 64 px
  { value: "96px", label: "72", pt: 72 }
  // 72 pt ≈ 96 px
], Ze = "16px", on = (e) => Math.round(e * 96 / 72), an = (e) => Math.round(e * 72 / 96 * 2) / 2, Gr = (e) => {
  const t = Object.values(_t).find((i) => i.pt === e);
  return t ? `${t.px}px` : `${on(e)}px`;
}, Zr = (e) => {
  const t = parseInt(e), i = Object.values(_t).find((n) => n.px === t);
  return i ? i.pt : an(t);
}, qr = (e) => {
  if (!e) return !1;
  if (e.endsWith("px")) {
    const t = parseInt(e);
    return t >= 8 && t <= 144;
  }
  if (e.endsWith("pt")) {
    const t = parseFloat(e);
    return t >= 6 && t <= 108;
  }
  return !1;
}, sn = {
  "10px": "1",
  // 7.5 pt
  "12px": "2",
  // 9 pt
  "13px": "2",
  // 10 pt
  "15px": "3",
  // 11 pt (Word default)
  "16px": "3",
  // 12 pt
  "19px": "4",
  // 14 pt
  "21px": "4",
  // 16 pt
  "24px": "5",
  // 18 pt
  "27px": "5",
  // 20 pt
  "32px": "6",
  // 24 pt
  "37px": "6",
  // 28 pt
  "48px": "6",
  // 36 pt
  "64px": "7",
  // 48 pt
  "96px": "7"
  // 72 pt
}, lt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ze,
  headingLevel: "p"
  // Add heading level tracking
}, cn = () => {
  const [e, t] = Te(lt), i = G((a) => {
    t((u) => ({
      ...u,
      alignLeft: a === "left",
      alignCenter: a === "center",
      alignRight: a === "right",
      alignJustify: a === "justify"
    }));
  }, []), n = G((a) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const g = u.getRangeAt(0);
      if (!g.toString())
        return t((b) => ({ ...b, fontSize: a })), !1;
      try {
        const b = document.createElement("span");
        b.style.fontSize = a;
        const y = g.extractContents();
        return b.appendChild(y), g.insertNode(b), g.selectNodeContents(b), u.removeAllRanges(), u.addRange(g), t((d) => ({ ...d, fontSize: a })), !0;
      } catch {
        const y = sn[a] || "2";
        return document.execCommand("fontSize", !1, y), t((d) => ({ ...d, fontSize: a })), !0;
      }
    } catch (u) {
      return console.warn("[useFormatting] Font size change failed:", u), !1;
    }
  }, []), r = G((a, u = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (a === "fontSize") {
        n(u);
        return;
      }
      switch (document.execCommand(a, !1, u) || console.warn(`[useFormatting] Command "${a}" failed`), a) {
        case "bold":
          t((f) => ({ ...f, bold: !f.bold }));
          break;
        case "italic":
          t((f) => ({ ...f, italic: !f.italic }));
          break;
        case "underline":
          t((f) => ({ ...f, underline: !f.underline }));
          break;
        case "strikethrough":
          t((f) => ({ ...f, strikethrough: !f.strikethrough }));
          break;
        case "justifyLeft":
          i("left");
          break;
        case "justifyCenter":
          i("center");
          break;
        case "justifyRight":
          i("right");
          break;
        case "justifyFull":
          i("justify");
          break;
        case "fontName":
          t((f) => ({ ...f, fontFamily: u }));
          break;
        case "formatBlock":
          t((f) => ({ ...f, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (g) {
      console.warn(`[useFormatting] Error executing command "${a}":`, g);
    }
  }, [n, i]), s = G(() => {
    t(lt);
  }, []);
  return {
    currentFormat: e,
    formatText: r,
    resetFormat: s
  };
}, pe = 'page-break, [data-page-break="true"]', kt = (e) => ee[e] || ee.A4, ln = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const i = t.pageSize || "A4", n = kt(i), r = e.querySelectorAll(pe), s = [];
  s.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const a = e.getBoundingClientRect(), u = e.scrollTop;
  return r.forEach((g, f) => {
    const y = g.getBoundingClientRect().top - a.top + u;
    s.push({
      id: `page-${f + 1}`,
      pageNumber: f + 2,
      top: y,
      height: n.height
    });
  }), s;
}, St = (e, t = 100, i = le) => {
  const n = kt(e), r = Gt(i), s = n.height - r, a = t / 100;
  return s / a;
}, un = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const i = t.querySelectorAll(pe);
    if (i.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), r = n.top + n.height / 2;
    for (let s = i.length - 1; s >= 0; s--)
      if (i[s].getBoundingClientRect().top < r)
        return s + 1;
    return 0;
  } catch (i) {
    return console.warn("[getCurrentPage] Failed to calculate page:", i), 0;
  }
}, ut = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let i = [], n = [];
  for (const r of t)
    r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true" ? n.length > 0 && (i.push(n), n = []) : n.push(r);
  return n.length > 0 && i.push(n), i.length === 0 && t.length > 0 && i.push(t.filter(
    (r) => !(r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true")
  )), i;
}, dn = (e, t) => {
  if (!e)
    return !1;
  try {
    const i = document.createElement("page-break");
    return i.setAttribute("data-page-break", "true"), i.setAttribute("contenteditable", "false"), i.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(i, e), !0;
  } catch (i) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", i), !1;
  }
}, pn = (e, t, i, n, r, s, a) => {
  if (!e)
    return !1;
  try {
    const g = St(i, n, r) * (t - 1), f = Array.from(e.children);
    let b = 0, y = null;
    for (let d = 0; d < f.length; d++) {
      const O = f[d];
      if (O.tagName === "PAGE-BREAK" || O.getAttribute("data-page-break") === "true")
        continue;
      const x = O.getBoundingClientRect().height;
      if (b + x > g) {
        y = O;
        break;
      }
      b += x;
    }
    if (y) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), y.parentNode.insertBefore(d, y), s) {
        const O = e.innerHTML;
        s(O);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const O = document.createElement("p");
      if (O.innerHTML = "<br>", e.appendChild(O), s) {
        const x = e.innerHTML;
        s(x);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    }
  } catch (u) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", u), !1;
  }
}, fn = (e, t, i, n, r, s, a) => {
  if (!e)
    return !1;
  if (i().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(pe));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const f = window.getSelection();
    let b = !1, y = [], d = null;
    if (t === 0) {
      const x = g[0];
      if (!x)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let h = e.firstChild;
      for (; h && h !== x; )
        y.push(h), h = h.nextSibling;
      d = x;
    } else {
      const x = g[t - 1];
      if (!x)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const h = g[t];
      let C = x.nextSibling;
      for (; C && C !== h; )
        y.push(C), C = C.nextSibling;
      d = x;
    }
    if (f && f.rangeCount > 0) {
      const h = f.getRangeAt(0).startContainer;
      for (const C of y)
        if (C.contains(h) || C === h) {
          b = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), y.forEach((x) => {
      x.parentNode && x.remove();
    }), e.querySelectorAll(pe).forEach((x, h) => {
      x.setAttribute("data-page-number", String(h + 2));
    }), b && s && setTimeout(() => {
      s(0);
    }, 50), n) {
      const x = e.innerHTML;
      n(x);
    }
    return r && setTimeout(() => {
      r(), a && setTimeout(() => {
        a();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, gn = 200, hn = 50, dt = 3, mn = 20, yn = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let i = 0, n = null;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (!s || !s.getBoundingClientRect)
      continue;
    const a = s.getBoundingClientRect().height;
    if (a < 1)
      continue;
    if (i + a > t)
      return n === null ? r > 0 ? {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: i
      } : null : {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: i
      };
    i += a, n = s;
  }
  return null;
}, bn = (e, t, i, n, r, s, a, u) => {
  if (!e || a.current)
    return !1;
  try {
    a.current = !0;
    const g = St(t, i, n);
    let f = ut(e), b = !1, y = 0;
    for (let d = 0; d < f.length && y < dt; d++) {
      const O = f[d], x = yn(O, g);
      if (x && x.overflowIndex > 0) {
        let h = 0;
        for (let _ = 0; _ < O.length; _++) {
          const k = O[_];
          k && k.getBoundingClientRect && (h += k.getBoundingClientRect().height);
        }
        if (h - g < mn)
          continue;
        const z = d + 2;
        dn(x.overflowElement, z) && (b = !0, y++, f = ut(e));
      }
    }
    if (b) {
      if (r) {
        const d = e.innerHTML;
        r(d);
      }
      setTimeout(() => {
        s && s(), y >= dt && u && setTimeout(() => {
          a.current || u();
        }, 100);
      }, hn);
    }
    return b;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    a.current = !1;
  }
}, En = (e, t, i = gn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, i);
}, vn = 400, Ct = (e, t) => {
  if (e) {
    e.focus();
    try {
      let i = null, n = 0;
      if (t === 0)
        i = e.firstChild, n = 0;
      else {
        const s = e.querySelectorAll(pe)[t - 1];
        s && s.nextSibling && (i = s.nextSibling, n = 0);
      }
      if (i) {
        const r = document.createRange(), s = window.getSelection();
        i.nodeType === Node.TEXT_NODE ? r.setStart(i, n) : r.setStart(i, 0), r.collapse(!0), s.removeAllRanges(), s.addRange(r);
      }
    } catch (i) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", i);
    }
  }
}, xn = (e, t, i, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let r = null;
    if (i === 0)
      r = t;
    else {
      const a = t.querySelectorAll(pe)[i - 1];
      if (a)
        r = a;
      else {
        console.warn("[scrollToPage] Page break not found for page", i);
        return;
      }
    }
    if (r) {
      const s = r.getBoundingClientRect(), a = e.getBoundingClientRect(), u = e.scrollTop + (s.top - a.top);
      console.log("[scrollToPage] Scrolling to page", i, "scrollTop:", u), e.scrollTo({
        top: u,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(i) : Ct(t, i);
      }, vn);
    }
  } catch (r) {
    console.error("[scrollToPage] Error:", r);
  }
}, An = (e, t, i = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(i);
  }, Math.max(0, n));
}, Tn = 300, Pn = (e, t, i = 100, n = "NARROW") => {
  const r = At(), s = X(null), a = X(null), u = X(e), g = X(i), f = X(n), b = X(!1);
  oe(() => {
    u.current = e;
  }, [e]), oe(() => {
    g.current = i;
  }, [i]), oe(() => {
    f.current = n;
  }, [n]), oe(() => () => {
    s.current && clearTimeout(s.current), a.current && clearTimeout(a.current);
  }, []);
  const y = G((l = {}) => t?.current ? ln(t.current, l) : [], [t]), d = G((l = {}) => {
    const R = y(l);
    return r.updatePageBoundaries(R), R;
  }, [y, r]), O = G(async (l) => {
    if (!t?.current)
      return !1;
    const R = u.current || "A4", B = g.current || 100, Z = f.current || "NARROW";
    return pn(
      t.current,
      l,
      R,
      B,
      Z,
      r.updateContinuousContent,
      d
    );
  }, [t, r, d]), x = G(() => {
    if (!t?.current)
      return;
    const l = u.current || "A4", R = g.current || 100, B = f.current || "NARROW";
    bn(
      t.current,
      l,
      R,
      B,
      r.updateContinuousContent,
      d,
      b,
      x
    );
  }, [t, r, d]), h = G((l) => {
    En(x, a, l);
  }, [x]), C = G((l = {}) => {
    const R = typeof l.delay == "number" ? l.delay : Tn;
    An(d, s, l, R);
  }, [d]), z = G((l) => !l?.current || !t?.current ? 0 : un(l.current, t.current), [t]), A = G((l) => {
    t?.current && Ct(t.current, l);
  }, [t]), _ = G((l, R) => {
    if (!R?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    xn(R.current, t.current, l, A);
  }, [t, A]), k = G((l) => t?.current ? fn(
    t.current,
    l,
    y,
    r.updateContinuousContent,
    d,
    A,
    x
  ) : !1, [t, y, r, d, A, x]);
  return {
    calculatePageBoundaries: y,
    checkAndUpdateBoundaries: C,
    updateBoundaries: d,
    getCurrentPage: z,
    scrollToPage: _,
    positionCursorAtPage: A,
    checkAndReflow: x,
    triggerAutoReflow: h,
    removePageAndContent: k,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: s,
    reflowTimeoutRef: a
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), kn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, i, n) => n ? n.toUpperCase() : i.toLowerCase()
), pt = (e) => {
  const t = kn(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ot = (...e) => e.filter((t, i, n) => !!t && t.trim() !== "" && n.indexOf(t) === i).join(" ").trim(), Sn = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = $e(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: s,
    iconNode: a,
    ...u
  }, g) => je(
    "svg",
    {
      ref: g,
      ...Cn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(i) * 24 / Number(t) : i,
      className: Ot("lucide", r),
      ...!s && !Sn(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...a.map(([f, b]) => je(f, b)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = (e, t) => {
  const i = $e(
    ({ className: n, ...r }, s) => je(On, {
      ref: s,
      iconNode: t,
      className: Ot(
        `lucide-${_n(pt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...r
    })
  );
  return i.displayName = pt(e), i;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], wn = H("bold", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], jn = H("chevron-left", Mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], In = H("chevron-right", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Ln = H("file-check", Dn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], _e = H("file-text", zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], $n = H("hash", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Hn = H("heading-1", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Zn = H("heading-2", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Yn = H("heading-3", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Vn = H("image", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Kn = H("italic", Wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Xn = H("link", Jn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], er = H("list-ordered", Qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Rt = H("list", tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], rr = H("plus", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ar = H("redo", or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ft = H("settings", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], cr = H("strikethrough", sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ur = H("table", lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], pr = H("text-align-center", dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], gr = H("text-align-end", fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], mr = H("text-align-justify", hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], br = H("text-align-start", yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], vr = H("underline", Er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Ar = H("undo", xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Pr = H("x", Tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], kr = H("zoom-in", _r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Cr = H("zoom-out", Sr), Or = ({ editorView: e, isCollapsed: t, onToggle: i, wordCount: n, pageCount: r }) => {
  const s = xt(), { pages: a, activePage: u, continuousContent: g, editorMode: f } = s, [b, y] = Te(0), [d, O] = Te([]);
  oe(() => {
    if (n !== void 0 && r !== void 0) {
      if (y(n), g) {
        const z = document.createElement("div");
        z.innerHTML = g;
        const A = z.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(A).map((k, l) => {
          const R = parseInt(k.tagName.charAt(1)), B = k.textContent.trim();
          return B ? {
            id: `heading-${l}`,
            level: R,
            text: B,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        O(_);
      }
      return;
    }
    let h = 0;
    const C = [];
    a.forEach((z, A) => {
      if (z.content) {
        const _ = document.createElement("div");
        _.innerHTML = z.content;
        const l = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((B) => B.length > 0);
        h += l.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((B, Z) => {
          const V = parseInt(B.tagName.charAt(1)), q = B.textContent.trim();
          q && C.push({
            id: `heading-${A}-${Z}`,
            level: V,
            text: q,
            page: A + 1
          });
        });
      }
    }), y(h), O(C);
  }, [a, n, r, g]);
  const x = r !== void 0 ? r : a.length;
  return /* @__PURE__ */ c.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ c.jsx(_e, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: i,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ c.jsx(In, { size: 16 }) : /* @__PURE__ */ c.jsx(jn, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Ln, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: x })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx($n, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: b.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(_e, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: u + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(Rt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((h) => {
              const C = h.level === 1 ? Hn : h.level === 2 ? Zn : Yn;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${h.level}`,
                  style: { marginLeft: `${(h.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(C, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ c.jsx("span", { className: "outline-text", children: h.text }),
                    /* @__PURE__ */ c.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      h.page
                    ] })
                  ]
                },
                h.id
              );
            }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ c.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ c.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Rr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function wr(e) {
  return new Promise((t, i) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      i(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      i(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const r = new FileReader();
    r.onload = (s) => {
      const a = s.target.result;
      if (a.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        i(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const f = `editor-image-${Rr()}`;
        localStorage.setItem(f, a), t(f);
      } catch (f) {
        f.name === "QuotaExceededError" ? i(new Error("Storage quota exceeded")) : i(f);
      }
    }, r.onerror = () => {
      i(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function Yr(e) {
  return localStorage.getItem(e);
}
function Fr(e) {
  localStorage.removeItem(e);
}
function Vr() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function Wr() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Mr {
  constructor(t = "Editor") {
    this.namespace = t;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(t, i, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${i}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, i) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, i) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, i) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, i) {
  }
}
const gt = new Mr("Editor"), qe = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: i
}) => {
  const n = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const a = await wr(r), u = localStorage.getItem(a);
      u && (document.execCommand("insertImage", !1, u), gt.info("Image inserted", { key: a }));
    } catch (s) {
      gt.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ c.jsx(Ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ c.jsx(ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ c.jsx(wn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ c.jsx(Kn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ c.jsx(vr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ c.jsx(cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ c.jsx(br, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ c.jsx(pr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ c.jsx(gr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ c.jsx(mr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ c.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ c.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ c.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ c.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: Ze,
        title: "Font Size",
        children: rn.map(({ value: r, label: s, pt: a }) => /* @__PURE__ */ c.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ c.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ c.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ c.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ c.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ c.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ c.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ c.jsx(Rt, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ c.jsx(er, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(Xn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ c.jsx(ur, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ c.jsx(_e, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && n(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(Vn, { size: 16 })
      }
    )
  ] });
};
qe.propTypes = {
  currentFormat: v.shape({
    bold: v.bool,
    italic: v.bool,
    underline: v.bool,
    strikethrough: v.bool,
    alignLeft: v.bool,
    alignCenter: v.bool,
    alignRight: v.bool,
    alignJustify: v.bool,
    fontFamily: v.string,
    fontSize: v.string,
    headingLevel: v.string
  }).isRequired,
  onFormatText: v.func.isRequired,
  onAddPageBreak: v.func
};
qe.defaultProps = {
  onAddPageBreak: void 0
};
const Ye = ({
  content: e,
  dimensions: t,
  pageSize: i,
  pageBoundaries: n = [],
  editorRef: r,
  onInput: s,
  onKeyDown: a,
  onClick: u,
  onScroll: g,
  zoomLevel: f = 100,
  pageMargins: b = le
}) => {
  const y = mt(b), d = f / 100, O = (A, _) => {
    if (!A) return !1;
    const k = A.getBoundingClientRect(), l = _ - k.top;
    return l < y.top || l > k.height - y.bottom;
  }, x = (A) => A ? A.nodeType === Node.ELEMENT_NODE ? A.tagName === "PAGE-BREAK" || A.getAttribute("data-page-break") === "true" : A.parentElement && x(A.parentElement) : !1, h = (A) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const k = _.getRangeAt(0), { startContainer: l, endContainer: R } = k;
    if ((x(l) || x(R)) && (A.key.length === 1 || A.key === "Enter" || A.key === " "))
      return A.preventDefault(), !1;
    if (A.key === "Tab")
      return A.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((A.key === "Backspace" || A.key === "Delete") && (x(l) || x(R)))
      return A.preventDefault(), !1;
    a && a(A);
  }, C = (A) => {
    if (!r.current) return;
    const _ = A.target;
    if (x(_)) {
      A.preventDefault();
      return;
    }
    if (O(r.current, A.clientY)) {
      A.preventDefault();
      const k = r.current.getBoundingClientRect();
      if (A.clientY - k.top < y.top) {
        const R = r.current.firstElementChild;
        if (R && R.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), Z = window.getSelection();
          B.setStart(R, 0), B.collapse(!0), Z.removeAllRanges(), Z.addRange(B);
        }
      } else {
        const R = r.current.lastElementChild;
        if (R && R.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), Z = window.getSelection();
          B.selectNodeContents(R), B.collapse(!1), Z.removeAllRanges(), Z.addRange(B);
        }
      }
      return;
    }
    u && u(A);
  }, z = (A) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const k = _.getRangeAt(0), { startContainer: l } = k;
    if (x(l))
      return A.preventDefault(), !1;
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${t.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${d})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: [
        n.map((A, _) => {
          const k = A.top + t.height;
          return /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "page-height-marker",
              style: {
                position: "absolute",
                top: `${k}px`,
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "red",
                zIndex: 10,
                pointerEvents: "none"
              },
              title: `End of Page ${A.pageNumber} (${t.height}px)`
            },
            `boundary-marker-${A.id}`
          );
        }),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: r,
            contentEditable: !0,
            suppressContentEditableWarning: !0,
            className: "continuous-content",
            style: {
              position: "relative",
              zIndex: 1,
              minHeight: `${t.height}px`,
              width: `${t.width}px`,
              backgroundColor: "white",
              padding: `${y.top}px ${y.right}px ${y.bottom}px ${y.left}px`,
              boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              outline: "none",
              cursor: "text",
              fontFamily: "Arial, sans-serif",
              fontSize: Ze,
              lineHeight: "1.15",
              color: "#333",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              border: "1px solid #e0e0e0"
            },
            onInput: s,
            onKeyDown: h,
            onBeforeInput: z,
            onClick: C,
            onScroll: g,
            "data-testid": "continuous-editor"
          }
        )
      ]
    }
  );
};
Ye.propTypes = {
  content: v.string.isRequired,
  dimensions: v.shape({
    width: v.number.isRequired,
    height: v.number.isRequired
  }).isRequired,
  pageSize: v.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: v.arrayOf(
    v.shape({
      id: v.string.isRequired,
      pageNumber: v.number.isRequired,
      top: v.number,
      height: v.number
    })
  ),
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: v.func.isRequired,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  zoomLevel: v.number,
  pageMargins: v.string
};
Ye.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: le
};
const Fe = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: i = "A4",
  pageMargins: n = le,
  zoomLevel: r = 100,
  canZoomIn: s = !0,
  canZoomOut: a = !0,
  onNavigate: u,
  onAddPage: g,
  onDeletePage: f,
  onPageSizeChange: b,
  onPageMarginsChange: y,
  onZoomIn: d,
  onZoomOut: O,
  onZoomReset: x
} = {}) => {
  const h = Math.max(e?.length || 0, 1), C = (l) => {
    u && u(l);
  }, z = () => {
    g && g();
  }, A = (l) => {
    if (h <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    f && f(l);
  }, _ = (l) => {
    b && b(l);
  }, k = (l) => {
    y && y(l);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ c.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ c.jsx(ft, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: i,
          onChange: (l) => _(l.target.value),
          children: [
            /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "page-margins-controls", children: [
      /* @__PURE__ */ c.jsxs("label", { htmlFor: "page-margins-selector", children: [
        /* @__PURE__ */ c.jsx(ft, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Margins:"
      ] }),
      /* @__PURE__ */ c.jsx(
        "select",
        {
          id: "page-margins-selector",
          role: "combobox",
          "aria-label": "Page margins selector",
          value: n,
          onChange: (l) => k(l.target.value),
          children: Zt().map((l) => /* @__PURE__ */ c.jsx("option", { value: l, children: qt(l) }, l))
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "zoom-controls", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: O,
          disabled: !a,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ c.jsx(Cr, { size: 14 })
        }
      ),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: "zoom-reset-button",
          onClick: x,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: [
            r,
            "%"
          ]
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: d,
          disabled: !s,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ c.jsx(kr, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((l, R) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${R === t ? "active" : ""}`,
          onClick: () => C(R),
          "aria-label": `Go to page ${R + 1}`,
          "aria-current": R === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(_e, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              R + 1
            ] })
          ]
        }
      ),
      h > 1 && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (B) => {
            B.stopPropagation(), A(R);
          },
          "aria-label": `Delete page ${R + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(Pr, { size: 14 })
        }
      )
    ] }, l.id || `page-${R}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: z,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(rr, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Fe.propTypes = {
  pageBoundaries: v.arrayOf(
    v.shape({
      id: v.string.isRequired,
      pageNumber: v.number.isRequired,
      top: v.number,
      height: v.number
    })
  ),
  activePage: v.number,
  pageSize: v.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: v.string,
  zoomLevel: v.number,
  canZoomIn: v.bool,
  canZoomOut: v.bool,
  onNavigate: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onPageMarginsChange: v.func,
  onZoomIn: v.func,
  onZoomOut: v.func,
  onZoomReset: v.func
};
Fe.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: le,
  zoomLevel: 100,
  canZoomIn: !0,
  canZoomOut: !0,
  onNavigate: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onZoomIn: void 0,
  onZoomOut: void 0,
  onZoomReset: void 0
};
const jr = ke.memo(Fe), Nr = 50, Ir = 50, ht = 50, Dr = 100, Lr = 500, Ve = $e(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: i,
  onDeletePage: n,
  onPageSizeChange: r,
  onPageMarginsChange: s,
  onChange: a,
  showSidebar: u = !0,
  showToolbar: g = !0,
  showPageManager: f = !0
}, b) => {
  const y = xt(), d = At(), { pageSize: O, pageMargins: x, continuousContent: h, pageBoundaries: C, activePage: z, zoomLevel: A } = y, _ = X(null), k = X(null), { currentFormat: l, formatText: R } = cn(), {
    checkAndUpdateBoundaries: B,
    getCurrentPage: Z,
    scrollToPage: V,
    updateBoundaries: q,
    triggerAutoReflow: ae,
    removePageAndContent: ne,
    insertPageBreakAtBoundary: ie
  } = Pn(O, k, A, x), re = Ae(() => He(O), [O]), [se, K] = Te(!1), F = X(null), J = X(!1), te = X(!1), p = X(!1), o = X(h);
  oe(() => {
    if (k.current) {
      if (!p.current) {
        k.current.innerHTML = h, p.current = !0, o.current = h;
        const M = setTimeout(() => {
          q();
        }, Nr);
        return () => clearTimeout(M);
      }
      if (o.current !== h) {
        if (k.current.innerHTML !== h) {
          k.current.innerHTML = h;
          const W = setTimeout(() => {
            if (q(), J.current) {
              J.current = !1;
              const ce = Math.max(0, C.length - 1);
              d.setActivePage(ce), setTimeout(() => {
                V(ce, _);
              }, ht);
            }
          }, Ir);
          return o.current = h, () => clearTimeout(W);
        }
        o.current = h;
      }
    }
  }, [h, q, C.length, d, V]), oe(() => {
    a && p.current && a(h);
  }, [h, a]), Lt(b, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => h,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (M) => {
      d.updateContinuousContent(M), k.current && (k.current.innerHTML = M, setTimeout(() => {
        q();
      }, 50));
    }
  }), [h, d, q]), oe(() => {
    const M = setTimeout(() => {
      k.current && k.current.focus();
    }, 200);
    return () => clearTimeout(M);
  }, []);
  const m = G((M) => {
    const W = M.currentTarget.innerHTML;
    d.updateContinuousContent(W), B(), ae(200);
    const ce = Z(_);
    ce !== z && d.setActivePage(ce);
  }, [B, d, Z, z, ae, _]), P = G((M) => {
    d.updatePageSize(M), q({ pageSize: M }), r && r(M);
  }, [d, q, r]), T = G((M) => {
    d.updatePageMargins(M), q({ pageMargins: M }), s && s(M);
  }, [d, q, s]), I = G((M) => {
    M < 0 || M >= C.length || (te.current = !0, d.setActivePage(M), V(M, _), setTimeout(() => {
      te.current = !1;
    }, Lr), t && t(M));
  }, [d, V, t, C.length]), w = G(() => {
    const M = C.length + 1;
    ie(M) && (J.current = !0, setTimeout(() => {
      if (J.current) {
        J.current = !1;
        const ce = Math.max(0, C.length - 1);
        d.setActivePage(ce), setTimeout(() => {
          V(ce, _);
        }, ht);
      }
    }, 100)), i && i();
  }, [C.length, ie, d, V, i]), S = G(() => {
    const M = window.getSelection();
    if (M && M.rangeCount > 0) {
      if (!k?.current) return;
      const Mt = `<page-break data-page-break="true" contenteditable="false" data-page-number="${k.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Mt), setTimeout(() => {
        q();
        const jt = Z(_);
        d.setActivePage(jt);
      }, 150);
    }
  }, [q, Z, d, _]), j = G((M) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    ne(M) && (d.setActivePage(0), n && n(M));
  }, [C.length, ne, d, n]), L = G(() => {
    d.zoomIn();
  }, [d]), D = G(() => {
    d.zoomOut();
  }, [d]), Y = G(() => {
    d.resetZoom();
  }, [d]);
  oe(() => {
    const M = (W) => {
      if (!(!k.current && !_.current) && (W.ctrlKey || W.metaKey))
        switch (W.key) {
          case "+":
          case "=":
            W.preventDefault(), L();
            break;
          case "-":
          case "_":
            W.preventDefault(), D();
            break;
          case "0":
            W.preventDefault(), Y();
            break;
        }
    };
    return window.addEventListener("keydown", M), () => {
      window.removeEventListener("keydown", M);
    };
  }, [L, D, Y]);
  const E = G(() => {
    !_.current || !k.current || te.current || (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      if (te.current) {
        F.current = null;
        return;
      }
      const M = Z(_);
      M !== z && M >= 0 && d.setActivePage(M), F.current = null;
    }, Dr));
  }, [Z, z, d]), Q = Ae(() => {
    if (!h) return 0;
    const W = h.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return W ? W.length : 0;
  }, [h]), de = C.length || 1;
  return oe(() => () => {
    F.current && clearTimeout(F.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ c.jsx(
      qe,
      {
        currentFormat: l,
        onFormatText: R,
        onAddPageBreak: S
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      u && /* @__PURE__ */ c.jsx(
        Or,
        {
          editorView: null,
          isCollapsed: se,
          onToggle: () => K((M) => !M),
          wordCount: Q,
          pageCount: de
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: _,
          onScroll: E,
          children: /* @__PURE__ */ c.jsx(
            Ye,
            {
              content: h,
              dimensions: re,
              pageSize: O,
              pageMargins: x,
              pageBoundaries: C,
              editorRef: k,
              onInput: m,
              onClick: () => k.current?.focus(),
              zoomLevel: A
            }
          )
        }
      ),
      f && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? ke.cloneElement(e, {
        onNavigate: I,
        onAddPage: w,
        onDeletePage: j,
        onPageSizeChange: P,
        onPageMarginsChange: T,
        zoomLevel: A,
        canZoomIn: Le(A),
        canZoomOut: ze(A),
        onZoomIn: L,
        onZoomOut: D,
        onZoomReset: Y
      }) : /* @__PURE__ */ c.jsx(
        jr,
        {
          pageBoundaries: C,
          activePage: z,
          pageSize: O,
          pageMargins: x,
          zoomLevel: A,
          canZoomIn: Le(A),
          canZoomOut: ze(A),
          onNavigate: I,
          onAddPage: w,
          onDeletePage: j,
          onPageSizeChange: P,
          onPageMarginsChange: T,
          onZoomIn: L,
          onZoomOut: D,
          onZoomReset: Y
        }
      ) })
    ] })
  ] });
});
Ve.displayName = "HtmlEditor";
Ve.propTypes = {
  pageManagerComponent: v.element,
  onNavigatePage: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onPageMarginsChange: v.func,
  onChange: v.func,
  showSidebar: v.bool,
  showToolbar: v.bool,
  showPageManager: v.bool
};
Ve.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onChange: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class wt extends ke.Component {
  constructor(t) {
    super(t), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, i) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", i), this.setState({
      error: t,
      errorInfo: i
    }), this.props.onError && this.props.onError(t, i);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ c.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ c.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ c.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ c.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ c.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ c.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: this.handleReset,
          style: {
            marginTop: "15px",
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          },
          children: "Try Again"
        }
      )
    ] }) : this.props.children;
  }
}
wt.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
wt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Kr = {
  A4: { width: ee.A4.width, height: ee.A4.height },
  Letter: { width: ee.Letter.width, height: ee.Letter.height },
  Legal: { width: ee.Legal.width, height: ee.Legal.height }
};
export {
  rn as COMMON_FONT_SIZES,
  Ze as DEFAULT_FONT_SIZE,
  yt as DEFAULT_PAGE_SIZE,
  Hr as DocumentProvider,
  qe as EditorToolbar,
  wt as ErrorBoundary,
  _t as FONT_SIZE_MAP,
  Ve as HtmlEditor,
  Kr as PAGE_DIMENSIONS,
  ee as PAGE_SIZES,
  jr as PageManager,
  Ye as PageView,
  Or as Sidebar,
  Vr as clearImages,
  Fr as deleteImage,
  Wr as getAllImageKeys,
  Ur as getAvailablePageSizes,
  Yr as getImage,
  He as getPageDimensions,
  Gr as getPixelValue,
  Zr as getPointValue,
  qr as isValidFontSize,
  $r as isValidPageSize,
  Mr as logger,
  an as pixelsToPoints,
  on as pointsToPixels,
  wr as saveImage,
  Pn as useContinuousReflow,
  vt as useDocument,
  At as useDocumentActions,
  xt as useDocumentState,
  cn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
