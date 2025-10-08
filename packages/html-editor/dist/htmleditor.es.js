import Ce, { createContext as Dt, useContext as Lt, useReducer as zt, useMemo as Pe, useState as _e, useCallback as G, useRef as X, useEffect as se, forwardRef as Ze, createElement as Le, useImperativeHandle as Bt } from "react";
import { v4 as qe } from "uuid";
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ee = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Ut() {
  if (Qe) return fe;
  Qe = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, r, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      i = {};
      for (var u in r)
        u !== "key" && (i[u] = r[u]);
    } else i = r;
    return r = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: r !== void 0 ? r : null,
      props: i
    };
  }
  return fe.Fragment = t, fe.jsx = o, fe.jsxs = o, fe;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Ht() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === ie ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case w:
          return "Fragment";
        case P:
          return "Profiler";
        case z:
          return "StrictMode";
        case O:
          return "Suspense";
        case B:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case h:
            return "Portal";
          case S:
            return s.displayName || "Context";
          case _:
            return (s._context.displayName || "Context") + ".Consumer";
          case l:
            var y = s.render;
            return s = s.displayName, s || (s = y.displayName || y.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case Z:
            return y = s.displayName || null, y !== null ? y : e(s.type) || "Memo";
          case V:
            y = s._payload, s = s._init;
            try {
              return e(s(y));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function o(s) {
      try {
        t(s);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var T = y.error, A = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return T.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(s);
      }
    }
    function n(s) {
      if (s === w) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === V)
        return "<...>";
      try {
        var y = e(s);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var s = oe.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(s) {
      if (ce.call(s, "key")) {
        var y = Object.getOwnPropertyDescriptor(s, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, y) {
      function T() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: T,
        configurable: !0
      });
    }
    function f() {
      var s = e(this.type);
      return Y[s] || (Y[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function g(s, y, T, A, I, R) {
      var k = T.ref;
      return s = {
        $$typeof: x,
        type: s,
        key: y,
        props: T,
        _owner: A
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function b(s, y, T, A, I, R) {
      var k = y.children;
      if (k !== void 0)
        if (A)
          if (ae(k)) {
            for (A = 0; A < k.length; A++)
              m(k[A]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(k);
      if (ce.call(y, "key")) {
        k = e(s);
        var M = Object.keys(y).filter(function(D) {
          return D !== "key";
        });
        A = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", p[k + A] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          k,
          M,
          k
        ), p[k + A] = !0);
      }
      if (k = null, T !== void 0 && (o(T), k = "" + T), a(y) && (o(y.key), k = "" + y.key), "key" in y) {
        T = {};
        for (var L in y)
          L !== "key" && (T[L] = y[L]);
      } else T = y;
      return k && u(
        T,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), g(
        s,
        k,
        T,
        r(),
        I,
        R
      );
    }
    function m(s) {
      d(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === V && (s._payload.status === "fulfilled" ? d(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function d(s) {
      return typeof s == "object" && s !== null && s.$$typeof === x;
    }
    var C = Ce, x = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), S = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), oe = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, ae = Array.isArray, le = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var W, Y = {}, J = C.react_stack_bottom_frame.bind(
      C,
      i
    )(), ne = le(n(i)), p = {};
    he.Fragment = w, he.jsx = function(s, y, T) {
      var A = 1e4 > oe.recentlyCreatedOwnerStacks++;
      return b(
        s,
        y,
        T,
        !1,
        A ? Error("react-stack-top-frame") : J,
        A ? le(n(s)) : ne
      );
    }, he.jsxs = function(s, y, T) {
      var A = 1e4 > oe.recentlyCreatedOwnerStacks++;
      return b(
        s,
        y,
        T,
        !0,
        A ? Error("react-stack-top-frame") : J,
        A ? le(n(s)) : ne
      );
    };
  })()), he;
}
var tt;
function Gt() {
  return tt || (tt = 1, process.env.NODE_ENV === "production" ? Ee.exports = Ut() : Ee.exports = Ht()), Ee.exports;
}
var c = Gt();
const ze = 100, Be = 50, $e = 200, nt = 5, Ue = (e) => e < $e, He = (e) => e > Be, Zt = 96, ve = (e) => Math.round(e * Zt), ke = {
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
}, ue = "NORMAL", Et = (e = ue) => {
  const t = ke[e] || ke[ue];
  return {
    top: ve(t.top),
    bottom: ve(t.bottom),
    left: ve(t.left),
    right: ve(t.right)
  };
}, qt = (e = ue) => {
  const t = Et(e);
  return t.top + t.bottom;
}, Ft = () => Object.keys(ke), Yt = (e) => {
  const t = ke[e];
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
}, vt = "A4", Fe = (e) => {
  const t = ee[e] || ee[vt];
  return {
    width: t.width,
    height: t.height
  };
}, Yr = (e) => Object.keys(ee).includes(e), Vr = () => Object.keys(ee), ye = vt, de = "<p><br></p>", Vt = "continuous", me = (e, t = ye) => ({
  id: qe(),
  index: e,
  size: t,
  content: de,
  images: [],
  isBreakPoint: !1
}), Te = (e) => typeof e != "string" || e.trim() === "" ? de : e, xt = (e, t = ye) => (e.length > 0 ? e : [me(0, t)]).map((n, r) => ({
  id: n.id || qe(),
  index: r,
  size: n.size || t,
  content: Te(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Wt = (e = ye) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Fe(e).height
}], Ge = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || ye, n = xt(e.pages || [me(0, o)], o);
  return {
    id: qe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Vt,
    continuousContent: e.continuousContent || de,
    pageBoundaries: e.pageBoundaries || Wt(o),
    zoomLevel: e.zoomLevel || ze,
    pageMargins: e.pageMargins || ue
  };
}, j = {
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
}, Kt = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case j.INITIALIZE_DOCUMENT: {
      const { initialContent: n = de, pageSize: r = ye } = t.payload || {}, i = { ...me(0, r), content: Te(n) };
      return Ge({
        title: e.title,
        pageSize: r,
        pages: [i]
      });
    }
    case j.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case j.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: r } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const i = [...e.pages];
      return i[n] = {
        ...i[n],
        content: Te(r)
      }, {
        ...e,
        pages: i,
        updatedAt: o
      };
    }
    case j.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, r = xt(n.pages || [], e.pageSize), i = Array.isArray(n.pageBreaks) ? n.pageBreaks : r.slice(0, -1).map((a, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: r,
        activePage: Math.min(e.activePage, r.length - 1),
        pageBreaks: i,
        totalPages: r.length,
        updatedAt: o
      };
    }
    case j.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(n, 0, me(n, e.pageSize));
      const i = r.map((u, f) => ({
        ...u,
        index: f,
        size: e.pageSize
      })), a = i.slice(0, -1).map((u, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: n,
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: o
      };
    }
    case j.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(n, 1);
      const i = r.map((f, g) => ({
        ...f,
        index: g,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= i.length ? a = i.length - 1 : n <= a && a > 0 && (a -= 1);
      const u = i.slice(0, -1).map((f, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: a,
        pageBreaks: u,
        totalPages: i.length,
        updatedAt: o
      };
    }
    case j.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= r ? e : {
        ...e,
        activePage: n,
        updatedAt: o
      };
    }
    case j.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Fe(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const r = e.pages.map((a, u) => ({
        ...a,
        index: u,
        size: n
      })), i = r.slice(0, -1).map((a, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: r,
        pageBreaks: i,
        updatedAt: o
      };
    }
    case j.RESET_DOCUMENT:
      return Ge();
    case j.UPDATE_CONTINUOUS_CONTENT: {
      const n = Te(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case j.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const r = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: r,
        updatedAt: o
      };
    }
    case j.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: r } = t.payload || {}, i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (n === "end")
        a = a + i + "<p><br></p>";
      else if (typeof n == "number") {
        const u = a.substring(0, n), f = a.substring(n);
        a = u + i + f;
      } else if (typeof r == "number" && typeof document < "u") {
        const u = document.createElement("div");
        u.innerHTML = a;
        const f = u.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && f.length === 0)
          a = a + i + "<p><br></p>";
        else if (r < f.length) {
          const g = f[r], b = document.createElement("page-break");
          b.setAttribute("data-page-break", "true"), b.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const m = document.createElement("p");
          m.innerHTML = "<br>", g.parentNode.insertBefore(b, g.nextSibling), b.parentNode.insertBefore(m, b.nextSibling), a = u.innerHTML;
        } else
          a = a + i + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: o
      };
    }
    case j.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const i = r.querySelectorAll('page-break, [data-page-break="true"]');
      return i[n] && i[n].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((u, f) => {
        u.setAttribute("data-page-number", String(f + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: o
      };
    }
    case j.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let r = e.continuousContent, i = e.pages;
      return n === "continuous" ? r = e.pages.map((u) => u.content).filter((u) => u && u !== de).join(`
`) || de : e.continuousContent && e.continuousContent !== de && (i = [{ ...me(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: r,
        pages: i,
        updatedAt: o
      };
    }
    case j.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Be || n > $e ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Be} and ${$e}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case j.ZOOM_IN: {
      if (!Ue(e.zoomLevel))
        return e;
      const n = e.zoomLevel + nt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case j.ZOOM_OUT: {
      if (!He(e.zoomLevel))
        return e;
      const n = e.zoomLevel - nt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case j.RESET_ZOOM:
      return e.zoomLevel === ze ? e : {
        ...e,
        zoomLevel: ze,
        updatedAt: o
      };
    case j.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    default:
      return e;
  }
}, At = Dt(null), Wr = ({ children: e, initialState: t = {} }) => {
  const [o, n] = zt(Kt, Ge(t)), r = Pe(() => ({
    initializeDocument: (a) => n({ type: j.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => n({ type: j.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => n({ type: j.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => n({ type: j.UPDATE_PAGES, payload: a }),
    addPage: (a) => n({ type: j.ADD_PAGE, payload: a }),
    deletePage: (a) => n({ type: j.DELETE_PAGE, payload: a }),
    setActivePage: (a) => n({ type: j.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => n({ type: j.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => n({ type: j.RESET_DOCUMENT }),
    updateContinuousContent: (a) => n({ type: j.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => n({ type: j.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => n({ type: j.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => n({ type: j.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => n({ type: j.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => n({ type: j.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => n({ type: j.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => n({ type: j.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => n({ type: j.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => n({ type: j.ZOOM_IN }),
    zoomOut: () => n({ type: j.ZOOM_OUT }),
    resetZoom: () => n({ type: j.RESET_ZOOM }),
    updatePageMargins: (a) => n({ type: j.UPDATE_PAGE_MARGINS, payload: a })
  }), []), i = Pe(() => ({
    state: o,
    actions: r,
    dispatch: n
  }), [o, r]);
  return /* @__PURE__ */ c.jsx(At.Provider, { value: i, children: e });
}, Tt = () => {
  const e = Lt(At);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Pt = () => {
  const { state: e } = Tt();
  return e;
}, _t = () => {
  const { actions: e } = Tt();
  return e;
};
var xe = { exports: {} }, Ae = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function Jt() {
  if (rt) return $;
  rt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function _(l) {
    if (typeof l == "object" && l !== null) {
      var O = l.$$typeof;
      switch (O) {
        case t:
          switch (l = l.type, l) {
            case f:
            case g:
            case n:
            case i:
            case r:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case u:
                case b:
                case x:
                case C:
                case a:
                  return l;
                default:
                  return O;
              }
          }
        case o:
          return O;
      }
    }
  }
  function S(l) {
    return _(l) === g;
  }
  return $.AsyncMode = f, $.ConcurrentMode = g, $.ContextConsumer = u, $.ContextProvider = a, $.Element = t, $.ForwardRef = b, $.Fragment = n, $.Lazy = x, $.Memo = C, $.Portal = o, $.Profiler = i, $.StrictMode = r, $.Suspense = m, $.isAsyncMode = function(l) {
    return S(l) || _(l) === f;
  }, $.isConcurrentMode = S, $.isContextConsumer = function(l) {
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
    return _(l) === C;
  }, $.isPortal = function(l) {
    return _(l) === o;
  }, $.isProfiler = function(l) {
    return _(l) === i;
  }, $.isStrictMode = function(l) {
    return _(l) === r;
  }, $.isSuspense = function(l) {
    return _(l) === m;
  }, $.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === g || l === i || l === r || l === m || l === d || typeof l == "object" && l !== null && (l.$$typeof === x || l.$$typeof === C || l.$$typeof === a || l.$$typeof === u || l.$$typeof === b || l.$$typeof === w || l.$$typeof === z || l.$$typeof === P || l.$$typeof === h);
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
var ot;
function Xt() {
  return ot || (ot = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function _(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === g || E === i || E === r || E === m || E === d || typeof E == "object" && E !== null && (E.$$typeof === x || E.$$typeof === C || E.$$typeof === a || E.$$typeof === u || E.$$typeof === b || E.$$typeof === w || E.$$typeof === z || E.$$typeof === P || E.$$typeof === h);
    }
    function S(E) {
      if (typeof E == "object" && E !== null) {
        var Q = E.$$typeof;
        switch (Q) {
          case t:
            var pe = E.type;
            switch (pe) {
              case f:
              case g:
              case n:
              case i:
              case r:
              case m:
                return pe;
              default:
                var N = pe && pe.$$typeof;
                switch (N) {
                  case u:
                  case b:
                  case x:
                  case C:
                  case a:
                    return N;
                  default:
                    return Q;
                }
            }
          case o:
            return Q;
        }
      }
    }
    var l = f, O = g, B = u, Z = a, V = t, q = b, ie = n, oe = x, ce = C, ae = o, le = i, W = r, Y = m, J = !1;
    function ne(E) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(E) || S(E) === f;
    }
    function p(E) {
      return S(E) === g;
    }
    function s(E) {
      return S(E) === u;
    }
    function y(E) {
      return S(E) === a;
    }
    function T(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function A(E) {
      return S(E) === b;
    }
    function I(E) {
      return S(E) === n;
    }
    function R(E) {
      return S(E) === x;
    }
    function k(E) {
      return S(E) === C;
    }
    function M(E) {
      return S(E) === o;
    }
    function L(E) {
      return S(E) === i;
    }
    function D(E) {
      return S(E) === r;
    }
    function F(E) {
      return S(E) === m;
    }
    U.AsyncMode = l, U.ConcurrentMode = O, U.ContextConsumer = B, U.ContextProvider = Z, U.Element = V, U.ForwardRef = q, U.Fragment = ie, U.Lazy = oe, U.Memo = ce, U.Portal = ae, U.Profiler = le, U.StrictMode = W, U.Suspense = Y, U.isAsyncMode = ne, U.isConcurrentMode = p, U.isContextConsumer = s, U.isContextProvider = y, U.isElement = T, U.isForwardRef = A, U.isFragment = I, U.isLazy = R, U.isMemo = k, U.isPortal = M, U.isProfiler = L, U.isStrictMode = D, U.isSuspense = F, U.isValidElementType = _, U.typeOf = S;
  })()), U;
}
var at;
function kt() {
  return at || (at = 1, process.env.NODE_ENV === "production" ? Ae.exports = Jt() : Ae.exports = Xt()), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Re, st;
function Qt() {
  if (st) return Re;
  st = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var f = Object.getOwnPropertyNames(a).map(function(b) {
        return a[b];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        g[b] = b;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Re = r() ? Object.assign : function(i, a) {
    for (var u, f = n(i), g, b = 1; b < arguments.length; b++) {
      u = Object(arguments[b]);
      for (var m in u)
        t.call(u, m) && (f[m] = u[m]);
      if (e) {
        g = e(u);
        for (var d = 0; d < g.length; d++)
          o.call(u, g[d]) && (f[g[d]] = u[g[d]]);
      }
    }
    return f;
  }, Re;
}
var Ne, it;
function Ye() {
  if (it) return Ne;
  it = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = e, Ne;
}
var Me, ct;
function St() {
  return ct || (ct = 1, Me = Function.call.bind(Object.prototype.hasOwnProperty)), Me;
}
var je, lt;
function en() {
  if (lt) return je;
  lt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ye(), o = {}, n = /* @__PURE__ */ St();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function r(i, a, u, f, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in i)
        if (n(i, b)) {
          var m;
          try {
            if (typeof i[b] != "function") {
              var d = Error(
                (f || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            m = i[b](a, b, f, u, null, t);
          } catch (x) {
            m = x;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + u + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in o)) {
            o[m.message] = !0;
            var C = g ? g() : "";
            e(
              "Failed " + u + " type: " + m.message + (C ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, je = r, je;
}
var Ie, ut;
function tn() {
  if (ut) return Ie;
  ut = 1;
  var e = kt(), t = Qt(), o = /* @__PURE__ */ Ye(), n = /* @__PURE__ */ St(), r = /* @__PURE__ */ en(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var f = "Warning: " + u;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ie = function(u, f) {
    var g = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function m(p) {
      var s = p && (g && p[g] || p[b]);
      if (typeof s == "function")
        return s;
    }
    var d = "<<anonymous>>", C = {
      array: z("array"),
      bigint: z("bigint"),
      bool: z("boolean"),
      func: z("function"),
      number: z("number"),
      object: z("object"),
      string: z("string"),
      symbol: z("symbol"),
      any: P(),
      arrayOf: _,
      element: S(),
      elementType: l(),
      instanceOf: O,
      node: q(),
      objectOf: Z,
      oneOf: B,
      oneOfType: V,
      shape: oe,
      exact: ce
    };
    function x(p, s) {
      return p === s ? p !== 0 || 1 / p === 1 / s : p !== p && s !== s;
    }
    function h(p, s) {
      this.message = p, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function w(p) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, y = 0;
      function T(I, R, k, M, L, D, F) {
        if (M = M || d, D = D || k, F !== o) {
          if (f) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = M + ":" + k;
            !s[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Q] = !0, y++);
          }
        }
        return R[k] == null ? I ? R[k] === null ? new h("The " + L + " `" + D + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new h("The " + L + " `" + D + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : p(R, k, M, L, D);
      }
      var A = T.bind(null, !1);
      return A.isRequired = T.bind(null, !0), A;
    }
    function z(p) {
      function s(y, T, A, I, R, k) {
        var M = y[T], L = W(M);
        if (L !== p) {
          var D = Y(M);
          return new h(
            "Invalid " + I + " `" + R + "` of type " + ("`" + D + "` supplied to `" + A + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return w(s);
    }
    function P() {
      return w(a);
    }
    function _(p) {
      function s(y, T, A, I, R) {
        if (typeof p != "function")
          return new h("Property `" + R + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var k = y[T];
        if (!Array.isArray(k)) {
          var M = W(k);
          return new h("Invalid " + I + " `" + R + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected an array."));
        }
        for (var L = 0; L < k.length; L++) {
          var D = p(k, L, A, I, R + "[" + L + "]", o);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return w(s);
    }
    function S() {
      function p(s, y, T, A, I) {
        var R = s[y];
        if (!u(R)) {
          var k = W(R);
          return new h("Invalid " + A + " `" + I + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(p);
    }
    function l() {
      function p(s, y, T, A, I) {
        var R = s[y];
        if (!e.isValidElementType(R)) {
          var k = W(R);
          return new h("Invalid " + A + " `" + I + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(p);
    }
    function O(p) {
      function s(y, T, A, I, R) {
        if (!(y[T] instanceof p)) {
          var k = p.name || d, M = ne(y[T]);
          return new h("Invalid " + I + " `" + R + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return w(s);
    }
    function B(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function s(y, T, A, I, R) {
        for (var k = y[T], M = 0; M < p.length; M++)
          if (x(k, p[M]))
            return null;
        var L = JSON.stringify(p, function(F, E) {
          var Q = Y(E);
          return Q === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + I + " `" + R + "` of value `" + String(k) + "` " + ("supplied to `" + A + "`, expected one of " + L + "."));
      }
      return w(s);
    }
    function Z(p) {
      function s(y, T, A, I, R) {
        if (typeof p != "function")
          return new h("Property `" + R + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var k = y[T], M = W(k);
        if (M !== "object")
          return new h("Invalid " + I + " `" + R + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected an object."));
        for (var L in k)
          if (n(k, L)) {
            var D = p(k, L, A, I, R + "." + L, o);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return w(s);
    }
    function V(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var s = 0; s < p.length; s++) {
        var y = p[s];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(y) + " at index " + s + "."
          ), a;
      }
      function T(A, I, R, k, M) {
        for (var L = [], D = 0; D < p.length; D++) {
          var F = p[D], E = F(A, I, R, k, M, o);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && L.push(E.data.expectedType);
        }
        var Q = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new h("Invalid " + k + " `" + M + "` supplied to " + ("`" + R + "`" + Q + "."));
      }
      return w(T);
    }
    function q() {
      function p(s, y, T, A, I) {
        return ae(s[y]) ? null : new h("Invalid " + A + " `" + I + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return w(p);
    }
    function ie(p, s, y, T, A) {
      return new h(
        (p || "React class") + ": " + s + " type `" + y + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function oe(p) {
      function s(y, T, A, I, R) {
        var k = y[T], M = W(k);
        if (M !== "object")
          return new h("Invalid " + I + " `" + R + "` of type `" + M + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var L in p) {
          var D = p[L];
          if (typeof D != "function")
            return ie(A, I, R, L, Y(D));
          var F = D(k, L, A, I, R + "." + L, o);
          if (F)
            return F;
        }
        return null;
      }
      return w(s);
    }
    function ce(p) {
      function s(y, T, A, I, R) {
        var k = y[T], M = W(k);
        if (M !== "object")
          return new h("Invalid " + I + " `" + R + "` of type `" + M + "` " + ("supplied to `" + A + "`, expected `object`."));
        var L = t({}, y[T], p);
        for (var D in L) {
          var F = p[D];
          if (n(p, D) && typeof F != "function")
            return ie(A, I, R, D, Y(F));
          if (!F)
            return new h(
              "Invalid " + I + " `" + R + "` key `" + D + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(y[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var E = F(k, D, A, I, R + "." + D, o);
          if (E)
            return E;
        }
        return null;
      }
      return w(s);
    }
    function ae(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(ae);
          if (p === null || u(p))
            return !0;
          var s = m(p);
          if (s) {
            var y = s.call(p), T;
            if (s !== p.entries) {
              for (; !(T = y.next()).done; )
                if (!ae(T.value))
                  return !1;
            } else
              for (; !(T = y.next()).done; ) {
                var A = T.value;
                if (A && !ae(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(p, s) {
      return p === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function W(p) {
      var s = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : le(s, p) ? "symbol" : s;
    }
    function Y(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var s = W(p);
      if (s === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function J(p) {
      var s = Y(p);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function ne(p) {
      return !p.constructor || !p.constructor.name ? d : p.constructor.name;
    }
    return C.checkPropTypes = r, C.resetWarningCache = r.resetWarningCache, C.PropTypes = C, C;
  }, Ie;
}
var De, dt;
function nn() {
  if (dt) return De;
  dt = 1;
  var e = /* @__PURE__ */ Ye();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, De = function() {
    function n(a, u, f, g, b, m) {
      if (m !== e) {
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
    var i = {
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, De;
}
var pt;
function rn() {
  if (pt) return xe.exports;
  if (pt = 1, process.env.NODE_ENV !== "production") {
    var e = kt(), t = !0;
    xe.exports = /* @__PURE__ */ tn()(e.isElement, t);
  } else
    xe.exports = /* @__PURE__ */ nn()();
  return xe.exports;
}
var on = /* @__PURE__ */ rn();
const v = /* @__PURE__ */ $t(on), Ct = {
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
}, an = [
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
], Ve = "16px", sn = (e) => Math.round(e * 96 / 72), cn = (e) => Math.round(e * 72 / 96 * 2) / 2, Kr = (e) => {
  const t = Object.values(Ct).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${sn(e)}px`;
}, Jr = (e) => {
  const t = parseInt(e), o = Object.values(Ct).find((n) => n.px === t);
  return o ? o.pt : cn(t);
}, Xr = (e) => {
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
}, ln = {
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
}, gt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ve,
  headingLevel: "p"
  // Add heading level tracking
}, un = () => {
  const [e, t] = _e(gt), o = G((a) => {
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
      const f = u.getRangeAt(0);
      if (!f.toString())
        return t((b) => ({ ...b, fontSize: a })), !1;
      try {
        const b = document.createElement("span");
        b.style.fontSize = a;
        const m = f.extractContents();
        return b.appendChild(m), f.insertNode(b), f.selectNodeContents(b), u.removeAllRanges(), u.addRange(f), t((d) => ({ ...d, fontSize: a })), !0;
      } catch {
        const m = ln[a] || "2";
        return document.execCommand("fontSize", !1, m), t((d) => ({ ...d, fontSize: a })), !0;
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
          t((g) => ({ ...g, bold: !g.bold }));
          break;
        case "italic":
          t((g) => ({ ...g, italic: !g.italic }));
          break;
        case "underline":
          t((g) => ({ ...g, underline: !g.underline }));
          break;
        case "strikethrough":
          t((g) => ({ ...g, strikethrough: !g.strikethrough }));
          break;
        case "justifyLeft":
          o("left");
          break;
        case "justifyCenter":
          o("center");
          break;
        case "justifyRight":
          o("right");
          break;
        case "justifyFull":
          o("justify");
          break;
        case "fontName":
          t((g) => ({ ...g, fontFamily: u }));
          break;
        case "formatBlock":
          t((g) => ({ ...g, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (f) {
      console.warn(`[useFormatting] Error executing command "${a}":`, f);
    }
  }, [n, o]), i = G(() => {
    t(gt);
  }, []);
  return {
    currentFormat: e,
    formatText: r,
    resetFormat: i
  };
}, ge = 'page-break, [data-page-break="true"]', wt = (e) => ee[e] || ee.A4, dn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = wt(o), r = e.querySelectorAll(ge), i = [];
  i.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const a = e.getBoundingClientRect(), u = e.scrollTop;
  return r.forEach((f, g) => {
    const m = f.getBoundingClientRect().top - a.top + u;
    i.push({
      id: `page-${g + 1}`,
      pageNumber: g + 2,
      top: m,
      height: n.height
    });
  }), i;
}, Ot = (e, t = 100, o = ue) => {
  const n = wt(e), r = qt(o), i = n.height - r, a = t / 100;
  return i / a;
}, pn = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(ge);
    if (o.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), r = n.top + n.height / 2;
    for (let i = o.length - 1; i >= 0; i--)
      if (o[i].getBoundingClientRect().top < r)
        return i + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, ft = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], n = [];
  for (const r of t)
    r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true" ? n.length > 0 && (o.push(n), n = []) : n.push(r);
  return n.length > 0 && o.push(n), o.length === 0 && t.length > 0 && o.push(t.filter(
    (r) => !(r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true")
  )), o;
}, gn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, fn = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, hn = (e, t, o, n, r, i, a) => {
  if (!e)
    return !1;
  try {
    const f = Ot(o, n, r) * (t - 1), g = Array.from(e.children);
    let b = 0, m = null;
    for (let d = 0; d < g.length; d++) {
      const C = g[d];
      if (C.tagName === "PAGE-BREAK" || C.getAttribute("data-page-break") === "true")
        continue;
      const x = gn(C);
      if (b + x > f) {
        m = C;
        break;
      }
      b += x;
    }
    if (m) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), m.parentNode.insertBefore(d, m), i) {
        const C = e.innerHTML;
        i(C);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const C = document.createElement("p");
      if (C.innerHTML = "<br>", e.appendChild(C), i) {
        const x = e.innerHTML;
        i(x);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    }
  } catch (u) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", u), !1;
  }
}, mn = (e, t, o, n, r, i, a) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const f = Array.from(e.querySelectorAll(ge));
    if (t > f.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const g = window.getSelection();
    let b = !1, m = [], d = null;
    if (t === 0) {
      const x = f[0];
      if (!x)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let h = e.firstChild;
      for (; h && h !== x; )
        m.push(h), h = h.nextSibling;
      d = x;
    } else {
      const x = f[t - 1];
      if (!x)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const h = f[t];
      let w = x.nextSibling;
      for (; w && w !== h; )
        m.push(w), w = w.nextSibling;
      d = x;
    }
    if (g && g.rangeCount > 0) {
      const h = g.getRangeAt(0).startContainer;
      for (const w of m)
        if (w.contains(h) || w === h) {
          b = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), m.forEach((x) => {
      x.parentNode && x.remove();
    }), e.querySelectorAll(ge).forEach((x, h) => {
      x.setAttribute("data-page-number", String(h + 2));
    }), b && i && setTimeout(() => {
      i(0);
    }, 50), n) {
      const x = e.innerHTML;
      n(x);
    }
    return r && setTimeout(() => {
      r(), a && setTimeout(() => {
        a();
      }, 150);
    }, 100), !0;
  } catch (f) {
    return console.error("[removePageAndContent] Failed to remove page:", f), !1;
  }
}, yn = 200, bn = 50, ht = 3, En = 20, Rt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, vn = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (!i || !i.getBoundingClientRect)
      continue;
    const a = Rt(i);
    if (a < 1)
      continue;
    if (o + a > t)
      return n === null ? r > 0 ? {
        overflowIndex: r,
        overflowElement: i,
        accumulatedHeight: o
      } : null : {
        overflowIndex: r,
        overflowElement: i,
        accumulatedHeight: o
      };
    o += a, n = i;
  }
  return null;
}, xn = (e, t, o, n, r, i, a, u) => {
  if (!e || a.current)
    return !1;
  try {
    a.current = !0;
    const f = Ot(t, o, n);
    let g = ft(e), b = !1, m = 0;
    for (let d = 0; d < g.length && m < ht; d++) {
      const C = g[d], x = vn(C, f);
      if (x && x.overflowIndex > 0) {
        let h = 0;
        for (let _ = 0; _ < C.length; _++) {
          const S = C[_];
          S && S.getBoundingClientRect && (h += Rt(S));
        }
        if (h - f < En)
          continue;
        const z = d + 2;
        fn(x.overflowElement, z) && (b = !0, m++, g = ft(e));
      }
    }
    if (b) {
      if (r) {
        const d = e.innerHTML;
        r(d);
      }
      setTimeout(() => {
        i && i(), m >= ht && u && setTimeout(() => {
          a.current || u();
        }, 100);
      }, bn);
    }
    return b;
  } catch (f) {
    return console.warn("[checkAndReflow] Reflow failed:", f), !1;
  } finally {
    a.current = !1;
  }
}, An = (e, t, o = yn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Tn = 400, Nt = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const i = e.querySelectorAll(ge)[t - 1];
        i && i.nextSibling && (o = i.nextSibling, n = 0);
      }
      if (o) {
        const r = document.createRange(), i = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? r.setStart(o, n) : r.setStart(o, 0), r.collapse(!0), i.removeAllRanges(), i.addRange(r);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, Pn = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let r = null;
    if (o === 0)
      r = t;
    else {
      const a = t.querySelectorAll(ge)[o - 1];
      if (a)
        r = a;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (r) {
      const i = r.getBoundingClientRect(), a = e.getBoundingClientRect(), u = e.scrollTop + (i.top - a.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", u), e.scrollTo({
        top: u,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(o) : Nt(t, o);
      }, Tn);
    }
  } catch (r) {
    console.error("[scrollToPage] Error:", r);
  }
}, _n = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, kn = 300, Sn = (e, t, o = 100, n = "NARROW") => {
  const r = _t(), i = X(null), a = X(null), u = X(e), f = X(o), g = X(n), b = X(!1);
  se(() => {
    u.current = e;
  }, [e]), se(() => {
    f.current = o;
  }, [o]), se(() => {
    g.current = n;
  }, [n]), se(() => () => {
    i.current && clearTimeout(i.current), a.current && clearTimeout(a.current);
  }, []);
  const m = G((l = {}) => t?.current ? dn(t.current, l) : [], [t]), d = G((l = {}) => {
    const O = m(l);
    return r.updatePageBoundaries(O), O;
  }, [m, r]), C = G(async (l) => {
    if (!t?.current)
      return !1;
    const O = u.current || "A4", B = f.current || 100, Z = g.current || "NARROW";
    return hn(
      t.current,
      l,
      O,
      B,
      Z,
      r.updateContinuousContent,
      d
    );
  }, [t, r, d]), x = G(() => {
    if (!t?.current)
      return;
    const l = u.current || "A4", O = f.current || 100, B = g.current || "NARROW";
    xn(
      t.current,
      l,
      O,
      B,
      r.updateContinuousContent,
      d,
      b,
      x
    );
  }, [t, r, d]), h = G((l) => {
    An(x, a, l);
  }, [x]), w = G((l = {}) => {
    const O = typeof l.delay == "number" ? l.delay : kn;
    _n(d, i, l, O);
  }, [d]), z = G((l) => !l?.current || !t?.current ? 0 : pn(l.current, t.current), [t]), P = G((l) => {
    t?.current && Nt(t.current, l);
  }, [t]), _ = G((l, O) => {
    if (!O?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Pn(O.current, t.current, l, P);
  }, [t, P]), S = G((l) => t?.current ? mn(
    t.current,
    l,
    m,
    r.updateContinuousContent,
    d,
    P,
    x
  ) : !1, [t, m, r, d, P, x]);
  return {
    calculatePageBoundaries: m,
    checkAndUpdateBoundaries: w,
    updateBoundaries: d,
    getCurrentPage: z,
    scrollToPage: _,
    positionCursorAtPage: P,
    checkAndReflow: x,
    triggerAutoReflow: h,
    removePageAndContent: S,
    insertPageBreakAtBoundary: C,
    boundaryTimeoutRef: i,
    reflowTimeoutRef: a
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), mt = (e) => {
  const t = wn(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Mt = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), On = (e) => {
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
var Rn = {
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
const Nn = Ze(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: i,
    iconNode: a,
    ...u
  }, f) => Le(
    "svg",
    {
      ref: f,
      ...Rn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: Mt("lucide", r),
      ...!i && !On(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...a.map(([g, b]) => Le(g, b)),
      ...Array.isArray(i) ? i : [i]
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
  const o = Ze(
    ({ className: n, ...r }, i) => Le(Nn, {
      ref: i,
      iconNode: t,
      className: Mt(
        `lucide-${Cn(mt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...r
    })
  );
  return o.displayName = mt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], jn = H("bold", Mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Dn = H("chevron-left", In);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], zn = H("chevron-right", Ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], $n = H("file-check", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Se = H("file-text", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Gn = H("hash", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], qn = H("heading-1", Zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Yn = H("heading-2", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Wn = H("heading-3", Vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Jn = H("image", Kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Qn = H("italic", Xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], tr = H("link", er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], rr = H("list-ordered", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], jt = H("list", or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], sr = H("plus", ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], cr = H("redo", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ur = H("settings", lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], pr = H("strikethrough", dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], fr = H("table", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], mr = H("text-align-center", hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], br = H("text-align-end", yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], vr = H("text-align-justify", Er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Ar = H("text-align-start", xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Pr = H("underline", Tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], kr = H("undo", _r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Cr = H("x", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Or = H("zoom-in", wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Nr = H("zoom-out", Rr), Mr = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: r }) => {
  const i = Pt(), { pages: a, activePage: u, continuousContent: f, editorMode: g } = i, [b, m] = _e(0), [d, C] = _e([]);
  se(() => {
    if (n !== void 0 && r !== void 0) {
      if (m(n), f) {
        const z = document.createElement("div");
        z.innerHTML = f;
        const P = z.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(P).map((S, l) => {
          const O = parseInt(S.tagName.charAt(1)), B = S.textContent.trim();
          return B ? {
            id: `heading-${l}`,
            level: O,
            text: B,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        C(_);
      }
      return;
    }
    let h = 0;
    const w = [];
    a.forEach((z, P) => {
      if (z.content) {
        const _ = document.createElement("div");
        _.innerHTML = z.content;
        const l = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((B) => B.length > 0);
        h += l.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((B, Z) => {
          const V = parseInt(B.tagName.charAt(1)), q = B.textContent.trim();
          q && w.push({
            id: `heading-${P}-${Z}`,
            level: V,
            text: q,
            page: P + 1
          });
        });
      }
    }), m(h), C(w);
  }, [a, n, r, f]);
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
            /* @__PURE__ */ c.jsx(Se, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ c.jsx(zn, { size: 16 }) : /* @__PURE__ */ c.jsx(Dn, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx($n, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: x })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Gn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: b.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Se, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: u + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(jt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((h) => {
              const w = h.level === 1 ? qn : h.level === 2 ? Yn : Wn;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${h.level}`,
                  style: { marginLeft: `${(h.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(w, { size: 12, className: "outline-icon" }),
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
}, jr = "html-editor-storage", Ir = 1, te = "images";
function Dr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function be() {
  return new Promise((e, t) => {
    const o = indexedDB.open(jr, Ir);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const r = n.target.result;
      r.objectStoreNames.contains(te) || r.createObjectStore(te, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Lr(e) {
  return new Promise((t, o) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      o(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      o(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const r = new FileReader();
    r.onload = async (i) => {
      const a = i.target.result, f = a.split(",")[1].length * 3 / 4;
      if (f > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const g = await be(), b = `editor-image-${Dr()}`, d = g.transaction([te], "readwrite").objectStore(te), C = {
          key: b,
          dataUrl: a,
          size: f,
          type: e.type,
          timestamp: Date.now()
        }, x = d.add(C);
        x.onsuccess = () => {
          g.close(), t(b);
        }, x.onerror = () => {
          g.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (g) {
        o(g);
      }
    }, r.onerror = () => {
      o(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
async function zr(e) {
  try {
    const t = await be();
    return new Promise((o, n) => {
      const a = t.transaction([te], "readonly").objectStore(te).get(e);
      a.onsuccess = () => {
        t.close();
        const u = a.result;
        o(u ? u.dataUrl : null);
      }, a.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Qr(e) {
  try {
    const t = await be();
    return new Promise((o, n) => {
      const a = t.transaction([te], "readwrite").objectStore(te).delete(e);
      a.onsuccess = () => {
        t.close(), o();
      }, a.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function eo() {
  try {
    const e = await be();
    return new Promise((t, o) => {
      const i = e.transaction([te], "readwrite").objectStore(te).clear();
      i.onsuccess = () => {
        e.close(), t();
      }, i.onerror = () => {
        e.close(), o(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function to() {
  try {
    const e = await be();
    return new Promise((t, o) => {
      const i = e.transaction([te], "readonly").objectStore(te).getAllKeys();
      i.onsuccess = () => {
        e.close(), t(i.result || []);
      }, i.onerror = () => {
        e.close(), o(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
class Br {
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
  _format(t, o, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${o}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, o) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, o) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, o) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, o) {
  }
}
const yt = new Br("Editor"), We = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o
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
      const a = await Lr(r), u = await zr(a);
      u && (document.execCommand("insertImage", !1, u), yt.info("Image inserted", { key: a }));
    } catch (i) {
      yt.error("Error uploading image", i);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ c.jsx(kr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ c.jsx(cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ c.jsx(jn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ c.jsx(Qn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ c.jsx(Pr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ c.jsx(pr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ c.jsx(Ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ c.jsx(mr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ c.jsx(br, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ c.jsx(vr, { size: 16 })
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
        defaultValue: Ve,
        title: "Font Size",
        children: an.map(({ value: r, label: i, pt: a }) => /* @__PURE__ */ c.jsx("option", { value: r, children: i }, r))
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
        children: /* @__PURE__ */ c.jsx(jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ c.jsx(rr, { size: 16 })
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
        children: /* @__PURE__ */ c.jsx(tr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ c.jsx(fr, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ c.jsx(Se, { size: 16 })
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
        children: /* @__PURE__ */ c.jsx(Jn, { size: 16 })
      }
    )
  ] });
};
We.propTypes = {
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
We.defaultProps = {
  onAddPageBreak: void 0
};
const Ke = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: r,
  onInput: i,
  onKeyDown: a,
  onClick: u,
  onScroll: f,
  zoomLevel: g = 100,
  pageMargins: b = ue
}) => {
  const m = Et(b), d = g / 100, C = (P, _) => {
    if (!P) return !1;
    const S = P.getBoundingClientRect(), l = _ - S.top;
    return l < m.top || l > S.height - m.bottom;
  }, x = (P) => P ? P.nodeType === Node.ELEMENT_NODE ? P.tagName === "PAGE-BREAK" || P.getAttribute("data-page-break") === "true" : P.parentElement && x(P.parentElement) : !1, h = (P) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const S = _.getRangeAt(0), { startContainer: l, endContainer: O } = S;
    if ((x(l) || x(O)) && (P.key.length === 1 || P.key === "Enter" || P.key === " "))
      return P.preventDefault(), !1;
    if (P.key === "Tab")
      return P.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((P.key === "Backspace" || P.key === "Delete") && (x(l) || x(O)))
      return P.preventDefault(), !1;
    a && a(P);
  }, w = (P) => {
    if (!r.current) return;
    const _ = P.target;
    if (x(_)) {
      P.preventDefault();
      return;
    }
    if (C(r.current, P.clientY)) {
      P.preventDefault();
      const S = r.current.getBoundingClientRect();
      if (P.clientY - S.top < m.top) {
        const O = r.current.firstElementChild;
        if (O && O.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), Z = window.getSelection();
          B.setStart(O, 0), B.collapse(!0), Z.removeAllRanges(), Z.addRange(B);
        }
      } else {
        const O = r.current.lastElementChild;
        if (O && O.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), Z = window.getSelection();
          B.selectNodeContents(O), B.collapse(!1), Z.removeAllRanges(), Z.addRange(B);
        }
      }
      return;
    }
    u && u(P);
  }, z = (P) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const S = _.getRangeAt(0), { startContainer: l } = S;
    if (x(l))
      return P.preventDefault(), !1;
  };
  return /* @__PURE__ */ c.jsx(
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
      children: /* @__PURE__ */ c.jsx(
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
            padding: `${m.top}px ${m.right}px ${m.bottom}px ${m.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: Ve,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: i,
          onKeyDown: h,
          onBeforeInput: z,
          onClick: w,
          onScroll: f,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ke.propTypes = {
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
Ke.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: ue
};
const Je = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = ue,
  zoomLevel: r = 100,
  canZoomIn: i = !0,
  canZoomOut: a = !0,
  onNavigate: u,
  onAddPage: f,
  onDeletePage: g,
  onPageSizeChange: b,
  onPageMarginsChange: m,
  onZoomIn: d,
  onZoomOut: C,
  onZoomReset: x
} = {}) => {
  const h = Math.max(e?.length || 0, 1), w = (l) => {
    u && u(l);
  }, z = () => {
    f && f();
  }, P = (l) => {
    if (h <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    g && g(l);
  }, _ = (l) => {
    b && b(l);
  }, S = (l) => {
    m && m(l);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ c.jsx(ur, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ c.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ c.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: o,
              onChange: (l) => _(l.target.value),
              children: [
                /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ c.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ c.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (l) => S(l.target.value),
              children: Ft().map((l) => /* @__PURE__ */ c.jsx("option", { value: l, children: Yt(l) }, l))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: C,
          disabled: !a,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ c.jsx(Nr, { size: 12 })
        }
      ),
      /* @__PURE__ */ c.jsxs("span", { className: "zoom-level-display", children: [
        r,
        "%"
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: d,
          disabled: !i,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ c.jsx(Or, { size: 12 })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: x,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((l, O) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${O === t ? "active" : ""}`,
          onClick: () => w(O),
          "aria-label": `Go to page ${O + 1}`,
          "aria-current": O === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(Se, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              O + 1
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
            B.stopPropagation(), P(O);
          },
          "aria-label": `Delete page ${O + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(Cr, { size: 14 })
        }
      )
    ] }, l.id || `page-${O}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: z,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(sr, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Je.propTypes = {
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
Je.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: ue,
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
const $r = Ce.memo(Je), Ur = 50, Hr = 50, bt = 50, Gr = 100, Zr = 500, Xe = Ze(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: r,
  onPageMarginsChange: i,
  onChange: a,
  showSidebar: u = !0,
  showToolbar: f = !0,
  showPageManager: g = !0
}, b) => {
  const m = Pt(), d = _t(), { pageSize: C, pageMargins: x, continuousContent: h, pageBoundaries: w, activePage: z, zoomLevel: P } = m, _ = X(null), S = X(null), { currentFormat: l, formatText: O } = un(), {
    checkAndUpdateBoundaries: B,
    getCurrentPage: Z,
    scrollToPage: V,
    updateBoundaries: q,
    triggerAutoReflow: ie,
    removePageAndContent: oe,
    insertPageBreakAtBoundary: ce
  } = Sn(C, S, P, x), ae = Pe(() => Fe(C), [C]), [le, W] = _e(!1), Y = X(null), J = X(!1), ne = X(!1), p = X(!1), s = X(h);
  se(() => {
    if (S.current) {
      if (!p.current) {
        S.current.innerHTML = h, p.current = !0, s.current = h;
        const N = setTimeout(() => {
          q();
        }, Ur);
        return () => clearTimeout(N);
      }
      if (s.current !== h) {
        if (S.current.innerHTML !== h) {
          S.current.innerHTML = h;
          const K = setTimeout(() => {
            if (q(), J.current) {
              J.current = !1;
              const re = Math.max(0, w.length - 1);
              d.setActivePage(re), setTimeout(() => {
                V(re, _);
              }, bt);
            }
          }, Hr);
          return s.current = h, () => clearTimeout(K);
        }
        s.current = h;
      }
    }
  }, [h, q, w.length, d, V]), se(() => {
    a && p.current && a(h);
  }, [h, a]), Bt(b, () => ({
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
    setContent: (N) => {
      d.updateContinuousContent(N), S.current && (S.current.innerHTML = N, setTimeout(() => {
        q();
      }, 50));
    }
  }), [h, d, q]), se(() => {
    const N = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(N);
  }, []);
  const y = G((N) => {
    const K = N.currentTarget.innerHTML;
    d.updateContinuousContent(K), B(), ie(200);
    const re = Z(_);
    re !== z && d.setActivePage(re);
  }, [B, d, Z, z, ie, _]), T = G((N) => {
    d.updatePageSize(N), q({ pageSize: N }), r && r(N);
  }, [d, q, r]), A = G((N) => {
    d.updatePageMargins(N), q({ pageMargins: N }), i && i(N);
  }, [d, q, i]), I = G((N) => {
    N < 0 || N >= w.length || (ne.current = !0, d.setActivePage(N), V(N, _), setTimeout(() => {
      ne.current = !1;
    }, Zr), t && t(N));
  }, [d, V, t, w.length]), R = G(() => {
    const N = w.length + 1;
    ce(N) && (J.current = !0, setTimeout(() => {
      if (J.current) {
        J.current = !1;
        const re = Math.max(0, w.length - 1);
        d.setActivePage(re), setTimeout(() => {
          V(re, _);
        }, bt);
      }
    }, 100)), o && o();
  }, [w.length, ce, d, V, o]), k = G(() => {
    const N = window.getSelection();
    if (N && N.rangeCount > 0) {
      if (!S?.current) return;
      const we = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, we), setTimeout(() => {
        q();
        const Oe = Z(_);
        d.setActivePage(Oe);
      }, 150);
    }
  }, [q, Z, d, _]), M = G((N) => {
    if (w.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    oe(N) && (d.setActivePage(0), n && n(N));
  }, [w.length, oe, d, n]), L = G(() => {
    d.zoomIn();
  }, [d]), D = G(() => {
    d.zoomOut();
  }, [d]), F = G(() => {
    d.resetZoom();
  }, [d]);
  se(() => {
    const N = (K) => {
      if (K.ctrlKey || K.metaKey) {
        ["+", "=", "-", "_", "0"].includes(K.key) && K.preventDefault();
        const re = document.activeElement === S.current, we = document.activeElement === _.current, Oe = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (re || we || !Oe)
          switch (K.key) {
            case "+":
            case "=":
              L();
              break;
            case "-":
            case "_":
              D();
              break;
            case "0":
              F();
              break;
          }
      }
    };
    return window.addEventListener("keydown", N), () => {
      window.removeEventListener("keydown", N);
    };
  }, [L, D, F]);
  const E = G(() => {
    !_.current || !S.current || ne.current || (Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
      if (ne.current) {
        Y.current = null;
        return;
      }
      const N = Z(_);
      N !== z && N >= 0 && d.setActivePage(N), Y.current = null;
    }, Gr));
  }, [Z, z, d]), Q = Pe(() => {
    if (!h) return 0;
    const K = h.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return K ? K.length : 0;
  }, [h]), pe = w.length || 1;
  return se(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    f && /* @__PURE__ */ c.jsx(
      We,
      {
        currentFormat: l,
        onFormatText: O,
        onAddPageBreak: k
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      u && /* @__PURE__ */ c.jsx(
        Mr,
        {
          editorView: null,
          isCollapsed: le,
          onToggle: () => W((N) => !N),
          wordCount: Q,
          pageCount: pe
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: _,
          onScroll: E,
          children: /* @__PURE__ */ c.jsx(
            Ke,
            {
              content: h,
              dimensions: ae,
              pageSize: C,
              pageMargins: x,
              pageBoundaries: w,
              editorRef: S,
              onInput: y,
              onClick: () => S.current?.focus(),
              zoomLevel: P
            }
          )
        }
      ),
      g && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? Ce.cloneElement(e, {
        onNavigate: I,
        onAddPage: R,
        onDeletePage: M,
        onPageSizeChange: T,
        onPageMarginsChange: A,
        zoomLevel: P,
        canZoomIn: Ue(P),
        canZoomOut: He(P),
        onZoomIn: L,
        onZoomOut: D,
        onZoomReset: F
      }) : /* @__PURE__ */ c.jsx(
        $r,
        {
          pageBoundaries: w,
          activePage: z,
          pageSize: C,
          pageMargins: x,
          zoomLevel: P,
          canZoomIn: Ue(P),
          canZoomOut: He(P),
          onNavigate: I,
          onAddPage: R,
          onDeletePage: M,
          onPageSizeChange: T,
          onPageMarginsChange: A,
          onZoomIn: L,
          onZoomOut: D,
          onZoomReset: F
        }
      ) })
    ] })
  ] });
});
Xe.displayName = "HtmlEditor";
Xe.propTypes = {
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
Xe.defaultProps = {
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
class It extends Ce.Component {
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
  componentDidCatch(t, o) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", o), this.setState({
      error: t,
      errorInfo: o
    }), this.props.onError && this.props.onError(t, o);
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
It.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
It.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const no = {
  A4: { width: ee.A4.width, height: ee.A4.height },
  Letter: { width: ee.Letter.width, height: ee.Letter.height },
  Legal: { width: ee.Legal.width, height: ee.Legal.height }
};
export {
  an as COMMON_FONT_SIZES,
  Ve as DEFAULT_FONT_SIZE,
  vt as DEFAULT_PAGE_SIZE,
  Wr as DocumentProvider,
  We as EditorToolbar,
  It as ErrorBoundary,
  Ct as FONT_SIZE_MAP,
  Xe as HtmlEditor,
  no as PAGE_DIMENSIONS,
  ee as PAGE_SIZES,
  $r as PageManager,
  Ke as PageView,
  Mr as Sidebar,
  eo as clearImages,
  Qr as deleteImage,
  to as getAllImageKeys,
  Vr as getAvailablePageSizes,
  zr as getImage,
  Fe as getPageDimensions,
  Kr as getPixelValue,
  Jr as getPointValue,
  Xr as isValidFontSize,
  Yr as isValidPageSize,
  Br as logger,
  cn as pixelsToPoints,
  sn as pointsToPixels,
  Lr as saveImage,
  Sn as useContinuousReflow,
  Tt as useDocument,
  _t as useDocumentActions,
  Pt as useDocumentState,
  un as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
