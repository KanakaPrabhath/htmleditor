import Ne, { createContext as Vt, useContext as Kt, useReducer as Xt, useMemo as Me, useState as ve, useCallback as z, useRef as Q, useEffect as ie, forwardRef as Ke, createElement as Ge, useImperativeHandle as Jt } from "react";
import { v4 as Xe } from "uuid";
function Qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _e = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function er() {
  if (st) return be;
  st = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(n, o, a) {
    var r = null;
    if (a !== void 0 && (r = "" + a), o.key !== void 0 && (r = "" + o.key), "key" in o) {
      a = {};
      for (var i in o)
        i !== "key" && (a[i] = o[i]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return be.Fragment = t, be.jsx = s, be.jsxs = s, be;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function tr() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === J ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case P:
          return "Fragment";
        case w:
          return "Profiler";
        case j:
          return "StrictMode";
        case I:
          return "Suspense";
        case f:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case y:
            return "Portal";
          case M:
            return c.displayName || "Context";
          case _:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var A = c.render;
            return c = c.displayName, c || (c = A.displayName || A.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case O:
            return A = c.displayName || null, A !== null ? A : e(c.type) || "Memo";
          case N:
            A = c._payload, c = c._init;
            try {
              return e(c(A));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function s(c) {
      try {
        t(c);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var R = A.error, S = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(c);
      }
    }
    function n(c) {
      if (c === P) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === N)
        return "<...>";
      try {
        var A = e(c);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var c = Z.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (ee.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function i(c, A) {
      function R() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: R,
        configurable: !0
      });
    }
    function h() {
      var c = e(this.type);
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, A, R, S, U, L) {
      var C = R.ref;
      return c = {
        $$typeof: E,
        type: c,
        key: A,
        props: R,
        _owner: S
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, A, R, S, U, L) {
      var C = A.children;
      if (C !== void 0)
        if (S)
          if (H(C)) {
            for (S = 0; S < C.length; S++)
              d(C[S]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (ee.call(A, "key")) {
        C = e(c);
        var $ = Object.keys(A).filter(function(F) {
          return F !== "key";
        });
        S = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", b[C + S] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          C,
          $,
          C
        ), b[C + S] = !0);
      }
      if (C = null, R !== void 0 && (s(R), C = "" + R), r(A) && (s(A.key), C = "" + A.key), "key" in A) {
        R = {};
        for (var q in A)
          q !== "key" && (R[q] = A[q]);
      } else R = A;
      return C && i(
        R,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        C,
        R,
        o(),
        U,
        L
      );
    }
    function d(c) {
      g(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === N && (c._payload.status === "fulfilled" ? g(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function g(c) {
      return typeof c == "object" && c !== null && c.$$typeof === E;
    }
    var T = Ne, E = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), M = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), J = Symbol.for("react.client.reference"), Z = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, H = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var te, W = {}, K = T.react_stack_bottom_frame.bind(
      T,
      a
    )(), re = ne(n(a)), b = {};
    Ee.Fragment = P, Ee.jsx = function(c, A, R) {
      var S = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return p(
        c,
        A,
        R,
        !1,
        S ? Error("react-stack-top-frame") : K,
        S ? ne(n(c)) : re
      );
    }, Ee.jsxs = function(c, A, R) {
      var S = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return p(
        c,
        A,
        R,
        !0,
        S ? Error("react-stack-top-frame") : K,
        S ? ne(n(c)) : re
      );
    };
  })()), Ee;
}
var ct;
function rr() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? _e.exports = er() : _e.exports = tr()), _e.exports;
}
var l = rr();
const Ue = 100, Fe = 50, qe = 200, lt = 5, Ze = (e) => e < qe, We = (e) => e > Fe, nr = 96, Oe = (e) => Math.round(e * nr), Se = {
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
}, fe = "NORMAL", Ot = (e = fe) => {
  const t = Se[e] || Se[fe];
  return {
    top: Oe(t.top),
    bottom: Oe(t.bottom),
    left: Oe(t.left),
    right: Oe(t.right)
  };
}, ar = (e = fe) => {
  const t = Ot(e);
  return t.top + t.bottom;
}, or = () => Object.keys(Se), sr = (e) => {
  const t = Se[e];
  return t ? t.label : "Unknown";
}, ce = {
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
}, kt = "A4", Je = (e) => {
  const t = ce[e] || ce[kt];
  return {
    width: t.width,
    height: t.height
  };
}, ua = (e) => Object.keys(ce).includes(e), da = () => Object.keys(ce), xe = kt, pe = "<p><br></p>", ir = "continuous", Te = (e, t = xe) => ({
  id: Xe(),
  index: e,
  size: t,
  content: pe,
  images: [],
  isBreakPoint: !1
}), Re = (e) => typeof e != "string" || e.trim() === "" ? pe : e, wt = (e, t = xe) => (e.length > 0 ? e : [Te(0, t)]).map((n, o) => ({
  id: n.id || Xe(),
  index: o,
  size: n.size || t,
  content: Re(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), cr = (e = xe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Je(e).height
}], Ye = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), s = e.pageSize || xe, n = wt(e.pages || [Te(0, s)], s);
  return {
    id: Xe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: s,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || ir,
    continuousContent: e.continuousContent || pe,
    pageBoundaries: e.pageBoundaries || cr(s),
    zoomLevel: e.zoomLevel || Ue,
    pageMargins: e.pageMargins || fe
  };
}, G = {
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
}, lr = (e, t) => {
  const s = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case G.INITIALIZE_DOCUMENT: {
      const { initialContent: n = pe, pageSize: o = xe } = t.payload || {}, a = { ...Te(0, o), content: Re(n) };
      return Ye({
        title: e.title,
        pageSize: o,
        pages: [a]
      });
    }
    case G.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: s
      };
    case G.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: o } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: Re(o)
      }, {
        ...e,
        pages: a,
        updatedAt: s
      };
    }
    case G.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, o = wt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : o.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pages: o,
        activePage: Math.min(e.activePage, o.length - 1),
        pageBreaks: a,
        totalPages: o.length,
        updatedAt: s
      };
    }
    case G.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, o = [...e.pages];
      o.splice(n, 0, Te(n, e.pageSize));
      const a = o.map((i, h) => ({
        ...i,
        index: h,
        size: e.pageSize
      })), r = a.slice(0, -1).map((i, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: r,
        totalPages: a.length,
        updatedAt: s
      };
    }
    case G.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const o = [...e.pages];
      o.splice(n, 1);
      const a = o.map((h, m) => ({
        ...h,
        index: m,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const i = a.slice(0, -1).map((h, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: s
      };
    }
    case G.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const o = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= o ? e : {
        ...e,
        activePage: n,
        updatedAt: s
      };
    }
    case G.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Je(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const o = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: n
      })), a = o.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: o,
        pageBreaks: a,
        updatedAt: s
      };
    }
    case G.RESET_DOCUMENT:
      return Ye();
    case G.UPDATE_CONTINUOUS_CONTENT: {
      const n = Re(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: s
      };
    }
    case G.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const o = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: o,
        updatedAt: s
      };
    }
    case G.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: o } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = r.substring(0, n), h = r.substring(n);
        r = i + a + h;
      } else if (typeof o == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = r;
        const h = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (o === 0 && h.length === 0)
          r = r + a + "<p><br></p>";
        else if (o < h.length) {
          const m = h[o], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", m.parentNode.insertBefore(p, m.nextSibling), p.parentNode.insertBefore(d, p.nextSibling), r = i.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: s
      };
    }
    case G.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const o = document.createElement("div");
      o.innerHTML = e.continuousContent;
      const a = o.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), o.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, h) => {
        i.setAttribute("data-page-number", String(h + 2));
      }), {
        ...e,
        continuousContent: o.innerHTML,
        updatedAt: s
      };
    }
    case G.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let o = e.continuousContent, a = e.pages;
      return n === "continuous" ? o = e.pages.map((i) => i.content).filter((i) => i && i !== pe).join(`
`) || pe : e.continuousContent && e.continuousContent !== pe && (a = [{ ...Te(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: o,
        pages: a,
        updatedAt: s
      };
    }
    case G.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Fe || n > qe ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Fe} and ${qe}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: s
      };
    }
    case G.ZOOM_IN: {
      if (!Ze(e.zoomLevel))
        return e;
      const n = e.zoomLevel + lt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: s
      };
    }
    case G.ZOOM_OUT: {
      if (!We(e.zoomLevel))
        return e;
      const n = e.zoomLevel - lt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: s
      };
    }
    case G.RESET_ZOOM:
      return e.zoomLevel === Ue ? e : {
        ...e,
        zoomLevel: Ue,
        updatedAt: s
      };
    case G.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: s
      };
    }
    default:
      return e;
  }
}, Rt = Vt(null), fa = ({ children: e, initialState: t = {} }) => {
  const [s, n] = Xt(lr, Ye(t)), o = Me(() => ({
    initializeDocument: (r) => n({ type: G.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: G.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: G.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: G.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: G.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: G.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: G.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: G.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: G.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: G.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: G.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: G.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: G.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: G.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: G.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: G.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: G.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: G.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: G.ZOOM_IN }),
    zoomOut: () => n({ type: G.ZOOM_OUT }),
    resetZoom: () => n({ type: G.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: G.UPDATE_PAGE_MARGINS, payload: r })
  }), []), a = Me(() => ({
    state: s,
    actions: o,
    dispatch: n
  }), [s, o]);
  return /* @__PURE__ */ l.jsx(Rt.Provider, { value: a, children: e });
}, Mt = () => {
  const e = Kt(Rt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, St = () => {
  const { state: e } = Mt();
  return e;
}, Ct = () => {
  const { actions: e } = Mt();
  return e;
};
var ke = { exports: {} }, we = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function ur() {
  if (ut) return Y;
  ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, s = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function _(u) {
    if (typeof u == "object" && u !== null) {
      var I = u.$$typeof;
      switch (I) {
        case t:
          switch (u = u.type, u) {
            case h:
            case m:
            case n:
            case a:
            case o:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case i:
                case p:
                case E:
                case T:
                case r:
                  return u;
                default:
                  return I;
              }
          }
        case s:
          return I;
      }
    }
  }
  function M(u) {
    return _(u) === m;
  }
  return Y.AsyncMode = h, Y.ConcurrentMode = m, Y.ContextConsumer = i, Y.ContextProvider = r, Y.Element = t, Y.ForwardRef = p, Y.Fragment = n, Y.Lazy = E, Y.Memo = T, Y.Portal = s, Y.Profiler = a, Y.StrictMode = o, Y.Suspense = d, Y.isAsyncMode = function(u) {
    return M(u) || _(u) === h;
  }, Y.isConcurrentMode = M, Y.isContextConsumer = function(u) {
    return _(u) === i;
  }, Y.isContextProvider = function(u) {
    return _(u) === r;
  }, Y.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Y.isForwardRef = function(u) {
    return _(u) === p;
  }, Y.isFragment = function(u) {
    return _(u) === n;
  }, Y.isLazy = function(u) {
    return _(u) === E;
  }, Y.isMemo = function(u) {
    return _(u) === T;
  }, Y.isPortal = function(u) {
    return _(u) === s;
  }, Y.isProfiler = function(u) {
    return _(u) === a;
  }, Y.isStrictMode = function(u) {
    return _(u) === o;
  }, Y.isSuspense = function(u) {
    return _(u) === d;
  }, Y.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === m || u === a || u === o || u === d || u === g || typeof u == "object" && u !== null && (u.$$typeof === E || u.$$typeof === T || u.$$typeof === r || u.$$typeof === i || u.$$typeof === p || u.$$typeof === P || u.$$typeof === j || u.$$typeof === w || u.$$typeof === y);
  }, Y.typeOf = _, Y;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function dr() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, s = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function _(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === m || k === a || k === o || k === d || k === g || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === T || k.$$typeof === r || k.$$typeof === i || k.$$typeof === p || k.$$typeof === P || k.$$typeof === j || k.$$typeof === w || k.$$typeof === y);
    }
    function M(k) {
      if (typeof k == "object" && k !== null) {
        var se = k.$$typeof;
        switch (se) {
          case t:
            var he = k.type;
            switch (he) {
              case h:
              case m:
              case n:
              case a:
              case o:
              case d:
                return he;
              default:
                var Ae = he && he.$$typeof;
                switch (Ae) {
                  case i:
                  case p:
                  case E:
                  case T:
                  case r:
                    return Ae;
                  default:
                    return se;
                }
            }
          case s:
            return se;
        }
      }
    }
    var u = h, I = m, f = i, O = r, N = t, B = p, J = n, Z = E, ee = T, H = s, ne = a, te = o, W = d, K = !1;
    function re(k) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(k) || M(k) === h;
    }
    function b(k) {
      return M(k) === m;
    }
    function c(k) {
      return M(k) === i;
    }
    function A(k) {
      return M(k) === r;
    }
    function R(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function S(k) {
      return M(k) === p;
    }
    function U(k) {
      return M(k) === n;
    }
    function L(k) {
      return M(k) === E;
    }
    function C(k) {
      return M(k) === T;
    }
    function $(k) {
      return M(k) === s;
    }
    function q(k) {
      return M(k) === a;
    }
    function F(k) {
      return M(k) === o;
    }
    function ae(k) {
      return M(k) === d;
    }
    V.AsyncMode = u, V.ConcurrentMode = I, V.ContextConsumer = f, V.ContextProvider = O, V.Element = N, V.ForwardRef = B, V.Fragment = J, V.Lazy = Z, V.Memo = ee, V.Portal = H, V.Profiler = ne, V.StrictMode = te, V.Suspense = W, V.isAsyncMode = re, V.isConcurrentMode = b, V.isContextConsumer = c, V.isContextProvider = A, V.isElement = R, V.isForwardRef = S, V.isFragment = U, V.isLazy = L, V.isMemo = C, V.isPortal = $, V.isProfiler = q, V.isStrictMode = F, V.isSuspense = ae, V.isValidElementType = _, V.typeOf = M;
  })()), V;
}
var ft;
function Nt() {
  return ft || (ft = 1, process.env.NODE_ENV === "production" ? we.exports = ur() : we.exports = dr()), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, pt;
function fr() {
  if (pt) return Le;
  pt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var r = {}, i = 0; i < 10; i++)
        r["_" + String.fromCharCode(i)] = i;
      var h = Object.getOwnPropertyNames(r).map(function(p) {
        return r[p];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        m[p] = p;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = o() ? Object.assign : function(a, r) {
    for (var i, h = n(a), m, p = 1; p < arguments.length; p++) {
      i = Object(arguments[p]);
      for (var d in i)
        t.call(i, d) && (h[d] = i[d]);
      if (e) {
        m = e(i);
        for (var g = 0; g < m.length; g++)
          s.call(i, m[g]) && (h[m[g]] = i[m[g]]);
      }
    }
    return h;
  }, Le;
}
var De, gt;
function Qe() {
  if (gt) return De;
  gt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = e, De;
}
var ze, ht;
function It() {
  return ht || (ht = 1, ze = Function.call.bind(Object.prototype.hasOwnProperty)), ze;
}
var Be, mt;
function pr() {
  if (mt) return Be;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qe(), s = {}, n = /* @__PURE__ */ It();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function o(a, r, i, h, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var d;
          try {
            if (typeof a[p] != "function") {
              var g = Error(
                (h || "React class") + ": " + i + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            d = a[p](r, p, h, i, null, t);
          } catch (E) {
            d = E;
          }
          if (d && !(d instanceof Error) && e(
            (h || "React class") + ": type specification of " + i + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in s)) {
            s[d.message] = !0;
            var T = m ? m() : "";
            e(
              "Failed " + i + " type: " + d.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, Be = o, Be;
}
var He, yt;
function gr() {
  if (yt) return He;
  yt = 1;
  var e = Nt(), t = fr(), s = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ It(), o = /* @__PURE__ */ pr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var h = "Warning: " + i;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return He = function(i, h) {
    var m = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(b) {
      var c = b && (m && b[m] || b[p]);
      if (typeof c == "function")
        return c;
    }
    var g = "<<anonymous>>", T = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: w(),
      arrayOf: _,
      element: M(),
      elementType: u(),
      instanceOf: I,
      node: B(),
      objectOf: O,
      oneOf: f,
      oneOfType: N,
      shape: Z,
      exact: ee
    };
    function E(b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
    }
    function y(b, c) {
      this.message = b, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function P(b) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, A = 0;
      function R(U, L, C, $, q, F, ae) {
        if ($ = $ || g, F = F || C, ae !== s) {
          if (h) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = $ + ":" + C;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, A++);
          }
        }
        return L[C] == null ? U ? L[C] === null ? new y("The " + q + " `" + F + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new y("The " + q + " `" + F + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : b(L, C, $, q, F);
      }
      var S = R.bind(null, !1);
      return S.isRequired = R.bind(null, !0), S;
    }
    function j(b) {
      function c(A, R, S, U, L, C) {
        var $ = A[R], q = te($);
        if (q !== b) {
          var F = W($);
          return new y(
            "Invalid " + U + " `" + L + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return P(c);
    }
    function w() {
      return P(r);
    }
    function _(b) {
      function c(A, R, S, U, L) {
        if (typeof b != "function")
          return new y("Property `" + L + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var C = A[R];
        if (!Array.isArray(C)) {
          var $ = te(C);
          return new y("Invalid " + U + " `" + L + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected an array."));
        }
        for (var q = 0; q < C.length; q++) {
          var F = b(C, q, S, U, L + "[" + q + "]", s);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return P(c);
    }
    function M() {
      function b(c, A, R, S, U) {
        var L = c[A];
        if (!i(L)) {
          var C = te(L);
          return new y("Invalid " + S + " `" + U + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(b);
    }
    function u() {
      function b(c, A, R, S, U) {
        var L = c[A];
        if (!e.isValidElementType(L)) {
          var C = te(L);
          return new y("Invalid " + S + " `" + U + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(b);
    }
    function I(b) {
      function c(A, R, S, U, L) {
        if (!(A[R] instanceof b)) {
          var C = b.name || g, $ = re(A[R]);
          return new y("Invalid " + U + " `" + L + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return P(c);
    }
    function f(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(A, R, S, U, L) {
        for (var C = A[R], $ = 0; $ < b.length; $++)
          if (E(C, b[$]))
            return null;
        var q = JSON.stringify(b, function(ae, k) {
          var se = W(k);
          return se === "symbol" ? String(k) : k;
        });
        return new y("Invalid " + U + " `" + L + "` of value `" + String(C) + "` " + ("supplied to `" + S + "`, expected one of " + q + "."));
      }
      return P(c);
    }
    function O(b) {
      function c(A, R, S, U, L) {
        if (typeof b != "function")
          return new y("Property `" + L + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var C = A[R], $ = te(C);
        if ($ !== "object")
          return new y("Invalid " + U + " `" + L + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected an object."));
        for (var q in C)
          if (n(C, q)) {
            var F = b(C, q, S, U, L + "." + q, s);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return P(c);
    }
    function N(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < b.length; c++) {
        var A = b[c];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(A) + " at index " + c + "."
          ), r;
      }
      function R(S, U, L, C, $) {
        for (var q = [], F = 0; F < b.length; F++) {
          var ae = b[F], k = ae(S, U, L, C, $, s);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && q.push(k.data.expectedType);
        }
        var se = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + C + " `" + $ + "` supplied to " + ("`" + L + "`" + se + "."));
      }
      return P(R);
    }
    function B() {
      function b(c, A, R, S, U) {
        return H(c[A]) ? null : new y("Invalid " + S + " `" + U + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return P(b);
    }
    function J(b, c, A, R, S) {
      return new y(
        (b || "React class") + ": " + c + " type `" + A + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function Z(b) {
      function c(A, R, S, U, L) {
        var C = A[R], $ = te(C);
        if ($ !== "object")
          return new y("Invalid " + U + " `" + L + "` of type `" + $ + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var q in b) {
          var F = b[q];
          if (typeof F != "function")
            return J(S, U, L, q, W(F));
          var ae = F(C, q, S, U, L + "." + q, s);
          if (ae)
            return ae;
        }
        return null;
      }
      return P(c);
    }
    function ee(b) {
      function c(A, R, S, U, L) {
        var C = A[R], $ = te(C);
        if ($ !== "object")
          return new y("Invalid " + U + " `" + L + "` of type `" + $ + "` " + ("supplied to `" + S + "`, expected `object`."));
        var q = t({}, A[R], b);
        for (var F in q) {
          var ae = b[F];
          if (n(b, F) && typeof ae != "function")
            return J(S, U, L, F, W(ae));
          if (!ae)
            return new y(
              "Invalid " + U + " `" + L + "` key `" + F + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(A[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var k = ae(C, F, S, U, L + "." + F, s);
          if (k)
            return k;
        }
        return null;
      }
      return P(c);
    }
    function H(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(H);
          if (b === null || i(b))
            return !0;
          var c = d(b);
          if (c) {
            var A = c.call(b), R;
            if (c !== b.entries) {
              for (; !(R = A.next()).done; )
                if (!H(R.value))
                  return !1;
            } else
              for (; !(R = A.next()).done; ) {
                var S = R.value;
                if (S && !H(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(b, c) {
      return b === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function te(b) {
      var c = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : ne(c, b) ? "symbol" : c;
    }
    function W(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var c = te(b);
      if (c === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function K(b) {
      var c = W(b);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function re(b) {
      return !b.constructor || !b.constructor.name ? g : b.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, He;
}
var $e, bt;
function hr() {
  if (bt) return $e;
  bt = 1;
  var e = /* @__PURE__ */ Qe();
  function t() {
  }
  function s() {
  }
  return s.resetWarningCache = t, $e = function() {
    function n(r, i, h, m, p, d) {
      if (d !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: s,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, $e;
}
var Et;
function mr() {
  if (Et) return ke.exports;
  if (Et = 1, process.env.NODE_ENV !== "production") {
    var e = Nt(), t = !0;
    ke.exports = /* @__PURE__ */ gr()(e.isElement, t);
  } else
    ke.exports = /* @__PURE__ */ hr()();
  return ke.exports;
}
var yr = /* @__PURE__ */ mr();
const v = /* @__PURE__ */ Qt(yr), jt = {
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
}, br = [
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
], et = "16px", Er = (e) => Math.round(e * 96 / 72), Tr = (e) => Math.round(e * 72 / 96 * 2) / 2, pa = (e) => {
  const t = Object.values(jt).find((s) => s.pt === e);
  return t ? `${t.px}px` : `${Er(e)}px`;
}, ga = (e) => {
  const t = parseInt(e), s = Object.values(jt).find((n) => n.px === t);
  return s ? s.pt : Tr(t);
}, ha = (e) => {
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
}, ge = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, x = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function ma({
  handler: e,
  startX: t,
  startY: s,
  currentX: n,
  currentY: o,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const h = n - t, m = o - s;
  let p = a, d = r;
  switch (e) {
    case x.TOP_LEFT:
      p = Math.max(i.minWidth, a - h), d = Math.max(i.minHeight, r - m);
      break;
    case x.TOP_RIGHT:
      p = Math.max(i.minWidth, a + h), d = Math.max(i.minHeight, r - m);
      break;
    case x.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - h), d = Math.max(i.minHeight, r + m);
      break;
    case x.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + h), d = Math.max(i.minHeight, r + m);
      break;
    case x.TOP:
      d = Math.max(i.minHeight, r - m);
      break;
    case x.BOTTOM:
      d = Math.max(i.minHeight, r + m);
      break;
    case x.LEFT:
      p = Math.max(i.minWidth, a - h);
      break;
    case x.RIGHT:
      p = Math.max(i.minWidth, a + h);
      break;
    default:
      return { width: p, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const g = a / r;
    [
      x.TOP_LEFT,
      x.TOP_RIGHT,
      x.BOTTOM_LEFT,
      x.BOTTOM_RIGHT
    ].includes(e) ? p / g > d ? d = Math.max(i.minHeight, p / g) : p = Math.max(i.minWidth, d * g) : [x.TOP, x.BOTTOM].includes(e) ? p = d * g : [x.LEFT, x.RIGHT].includes(e) && (d = p / g);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = p / (a / r))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = d * (a / r))), p = Math.max(i.minWidth, p), d = Math.max(i.minHeight, d), {
    width: Math.round(p),
    height: Math.round(d)
  };
}
function de(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ya(e) {
  return de(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ba(e, { width: t, height: s }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${s}px`, e.width = t, e.height = s) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${s}px`));
}
function Lt(e) {
  if (!de(e)) return null;
  const t = document.createElement("div");
  t.className = "image-resize-overlay", t.style.position = "fixed", t.style.zIndex = "1000", t.style.pointerEvents = "none";
  const s = e.getBoundingClientRect();
  t.style.top = `${s.top}px`, t.style.left = `${s.left}px`, t.style.width = `${s.width}px`, t.style.height = `${s.height}px`, Object.values(x).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = vr(a), r.style.pointerEvents = "all", Dt(r, a, s.width, s.height), t.appendChild(r);
  });
  const o = document.createElement("div");
  return o.className = "aspect-ratio-toggle", o.innerHTML = "🔗", o.title = "Toggle aspect ratio preservation", o.style.position = "absolute", o.style.top = "-15px", o.style.right = "-15px", o.style.width = "20px", o.style.height = "20px", o.style.backgroundColor = "#007bff", o.style.color = "white", o.style.borderRadius = "50%", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.fontSize = "12px", o.style.cursor = "pointer", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.pointerEvents = "all", t.appendChild(o), t;
}
function vr(e) {
  switch (e) {
    case x.TOP_LEFT:
    case x.BOTTOM_RIGHT:
      return "nwse-resize";
    case x.TOP_RIGHT:
    case x.BOTTOM_LEFT:
      return "nesw-resize";
    case x.TOP:
    case x.BOTTOM:
      return "ns-resize";
    case x.LEFT:
    case x.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Dt(e, t, s, n) {
  switch (t) {
    case x.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case x.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case x.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case x.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case x.TOP:
      e.style.top = "-5px", e.style.left = `${s / 2 + -5}px`;
      break;
    case x.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${s / 2 + -5}px`;
      break;
    case x.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case x.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ve(e, t) {
  if (!e || !t) return;
  const s = t.getBoundingClientRect();
  e.style.top = `${s.top}px`, e.style.left = `${s.left}px`, e.style.width = `${s.width}px`, e.style.height = `${s.height}px`, e.querySelectorAll(".resize-handler").forEach((o) => {
    const a = o.dataset.handler;
    Dt(o, a, s.width, s.height);
  });
}
function me(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const xr = {
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
}, Tt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: et,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Pr = () => {
  const [e, t] = ve(Tt), s = z((T) => {
    t((E) => ({
      ...E,
      alignLeft: T === "left",
      alignCenter: T === "center",
      alignRight: T === "right",
      alignJustify: T === "justify"
    }));
  }, []), n = z((T) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const y = E.getRangeAt(0);
      if (!y.toString())
        return t((j) => ({ ...j, fontSize: T })), !1;
      try {
        const j = document.createElement("span");
        j.style.fontSize = T;
        const w = y.extractContents();
        return j.appendChild(w), y.insertNode(j), y.selectNodeContents(j), E.removeAllRanges(), E.addRange(y), t((_) => ({ ..._, fontSize: T })), !0;
      } catch {
        const w = xr[T] || "2";
        return document.execCommand("fontSize", !1, w), t((_) => ({ ..._, fontSize: T })), !0;
      }
    } catch (E) {
      return console.warn("[useFormatting] Font size change failed:", E), !1;
    }
  }, []), o = z((T, E = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (T === "fontSize") {
        n(E);
        return;
      }
      switch (document.execCommand(T, !1, E) || console.warn(`[useFormatting] Command "${T}" failed`), T) {
        case "bold":
          t((P) => ({ ...P, bold: !P.bold }));
          break;
        case "italic":
          t((P) => ({ ...P, italic: !P.italic }));
          break;
        case "underline":
          t((P) => ({ ...P, underline: !P.underline }));
          break;
        case "strikethrough":
          t((P) => ({ ...P, strikethrough: !P.strikethrough }));
        case "justifyLeft":
          s("left");
          break;
        case "justifyCenter":
          s("center");
        case "justifyRight":
          s("right");
        case "justifyFull":
          s("justify");
        case "fontName":
          t((P) => ({ ...P, fontFamily: E }));
        case "formatBlock":
          t((P) => ({ ...P, headingLevel: E }));
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${T}":`, y);
    }
  }, [n, s]), a = Q(null), r = Q(null), i = Q(null), h = Q(null), m = Q(ge);
  z((T) => {
    if (!de(T)) return;
    a.current && (me(a.current), a.current = null), T.classList.add("selected");
    const E = Lt(T);
    E && (a.current = E, r.current = T, document.body.appendChild(E), t((y) => ({
      ...y,
      imageSelected: !0,
      preserveAspectRatio: m.current.preserveAspectRatio
    })));
  }, []);
  const p = z(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (me(a.current), a.current = null), i.current = null, h.current = null, t((T) => ({
      ...T,
      imageSelected: !1
    }));
  }, []), d = z(() => {
    const T = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: T,
      aspectRatio: T
    }, t((E) => ({
      ...E,
      preserveAspectRatio: T
    }));
  }, []);
  z((T, E, y) => {
    r.current && (i.current = {
      x: E,
      y,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight
    }, h.current = T, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ar(T));
  }, []), z((T, E) => {
    if (!r.current || !i.current || !h.current) return;
    const { x: y, y: P, width: j, height: w } = i.current, _ = h.current, M = _r({
      handler: _,
      startX: y,
      startY: P,
      currentX: T,
      currentY: E,
      startWidth: j,
      startHeight: w,
      options: m.current
    });
    Or(r.current, M), a.current && Ve(a.current, r.current);
  }, []), z(() => {
    if (i.current = null, h.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
      const T = new Event("input", { bubbles: !0, cancelable: !0 });
      r.current.dispatchEvent(T);
    }
  }, []);
  const g = z(() => {
    p(), t(Tt);
  }, [p]);
  return ie(() => () => {
    a.current && me(a.current);
  }, []), {
    currentFormat: e,
    formatText: o,
    resetFormat: g,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: d
  };
};
function Ar(e) {
  switch (e) {
    case x.TOP_LEFT:
    case x.BOTTOM_RIGHT:
      return "nwse-resize";
    case x.TOP_RIGHT:
    case x.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case x.BOTTOM:
      return "ns-resize";
    case x.LEFT:
    case x.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function _r({
  handler: e,
  startX: t,
  startY: s,
  currentX: n,
  currentY: o,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const h = n - t, m = o - s;
  let p = a, d = r;
  switch (e) {
    case x.TOP_LEFT:
      p = Math.max(i.minWidth, a - h), d = Math.max(i.minHeight, r - m);
      break;
    case x.TOP_RIGHT:
      p = Math.max(i.minWidth, a + h), d = Math.max(i.minHeight, r - m);
      break;
    case x.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - h), d = Math.max(i.minHeight, r + m);
      break;
    case x.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + h), d = Math.max(i.minHeight, r + m);
      break;
    case x.TOP:
      d = Math.max(i.minHeight, r - m);
      break;
    case x.BOTTOM:
      d = Math.max(i.minHeight, r + m);
      break;
    case x.LEFT:
      p = Math.max(i.minWidth, a - h);
      break;
    case x.RIGHT:
      p = Math.max(i.minWidth, a + h);
      break;
    default:
      return { width: p, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const g = a / r;
    [
      x.TOP_LEFT,
      x.TOP_RIGHT,
      x.BOTTOM_LEFT,
      x.BOTTOM_RIGHT
    ].includes(e) ? p / g > d ? d = Math.max(i.minHeight, p / g) : p = Math.max(i.minWidth, d * g) : [x.TOP, x.BOTTOM].includes(e) ? p = d * g : [x.LEFT, x.RIGHT].includes(e) && (d = p / g);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = p / (a / r))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = d * (a / r))), p = Math.max(i.minWidth, p), d = Math.max(i.minHeight, d), {
    width: Math.round(p),
    height: Math.round(d)
  };
}
function Or(e, { width: t, height: s }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${s}px`, e.width = t, e.height = s) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${s}px`));
}
const ye = 'page-break, [data-page-break="true"]', zt = (e) => ce[e] || ce.A4, kr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const s = t.pageSize || "A4", n = zt(s), o = e.querySelectorAll(ye), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), i = e.scrollTop;
  return o.forEach((h, m) => {
    const d = h.getBoundingClientRect().top - r.top + i;
    a.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: d,
      height: n.height
    });
  }), a;
}, Bt = (e, t = 100, s = fe) => {
  const n = zt(e), o = ar(s), a = n.height - o, r = t / 100;
  return a / r;
}, wr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const s = t.querySelectorAll(ye);
    if (s.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), o = n.top + n.height / 2;
    for (let a = s.length - 1; a >= 0; a--)
      if (s[a].getBoundingClientRect().top < o)
        return a + 1;
    return 0;
  } catch (s) {
    return console.warn("[getCurrentPage] Failed to calculate page:", s), 0;
  }
}, vt = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let s = [], n = [];
  for (const o of t)
    o.tagName === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true" ? n.length > 0 && (s.push(n), n = []) : n.push(o);
  return n.length > 0 && s.push(n), s.length === 0 && t.length > 0 && s.push(t.filter(
    (o) => !(o.tagName === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
  )), s;
}, Rr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Mr = (e, t) => {
  if (!e)
    return !1;
  try {
    const s = document.createElement("page-break");
    return s.setAttribute("data-page-break", "true"), s.setAttribute("contenteditable", "false"), s.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(s, e), !0;
  } catch (s) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", s), !1;
  }
}, Sr = (e, t, s, n, o, a, r) => {
  if (!e)
    return !1;
  try {
    const h = Bt(s, n, o) * (t - 1), m = Array.from(e.children);
    let p = 0, d = null;
    for (let g = 0; g < m.length; g++) {
      const T = m[g];
      if (T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true")
        continue;
      const E = Rr(T);
      if (p + E > h) {
        d = T;
        break;
      }
      p += E;
    }
    if (d) {
      const g = document.createElement("page-break");
      if (g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(g, d), a) {
        const T = e.innerHTML;
        a(T);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const g = document.createElement("page-break");
      g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), e.appendChild(g);
      const T = document.createElement("p");
      if (T.innerHTML = "<br>", e.appendChild(T), a) {
        const E = e.innerHTML;
        a(E);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Cr = (e, t, s, n, o, a, r) => {
  if (!e)
    return !1;
  if (s().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(ye));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let p = !1, d = [], g = null;
    if (t === 0) {
      const E = h[0];
      if (!E)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let y = e.firstChild;
      for (; y && y !== E; )
        d.push(y), y = y.nextSibling;
      g = E;
    } else {
      const E = h[t - 1];
      if (!E)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const y = h[t];
      let P = E.nextSibling;
      for (; P && P !== y; )
        d.push(P), P = P.nextSibling;
      g = E;
    }
    if (m && m.rangeCount > 0) {
      const y = m.getRangeAt(0).startContainer;
      for (const P of d)
        if (P.contains(y) || P === y) {
          p = !0;
          break;
        }
    }
    if (g && g.parentNode && g.remove(), d.forEach((E) => {
      E.parentNode && E.remove();
    }), e.querySelectorAll(ye).forEach((E, y) => {
      E.setAttribute("data-page-number", String(y + 2));
    }), p && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const E = e.innerHTML;
      n(E);
    }
    return o && setTimeout(() => {
      o(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, Nr = 200, Ir = 50, xt = 3, jr = 20, Ht = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Lr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let s = 0, n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = Ht(a);
    if (r < 1)
      continue;
    if (s + r > t)
      return n === null ? o > 0 ? {
        overflowIndex: o,
        overflowElement: a,
        accumulatedHeight: s
      } : null : {
        overflowIndex: o,
        overflowElement: a,
        accumulatedHeight: s
      };
    s += r, n = a;
  }
  return null;
}, Dr = (e, t, s, n, o, a, r, i) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const h = Bt(t, s, n);
    let m = vt(e), p = !1, d = 0;
    for (let g = 0; g < m.length && d < xt; g++) {
      const T = m[g], E = Lr(T, h);
      if (E && E.overflowIndex > 0) {
        let y = 0;
        for (let _ = 0; _ < T.length; _++) {
          const M = T[_];
          M && M.getBoundingClientRect && (y += Ht(M));
        }
        if (y - h < jr)
          continue;
        const j = g + 2;
        Mr(E.overflowElement, j) && (p = !0, d++, m = vt(e));
      }
    }
    if (p) {
      if (o) {
        const g = e.innerHTML;
        o(g);
      }
      setTimeout(() => {
        a && a(), d >= xt && i && setTimeout(() => {
          r.current || i();
        }, 100);
      }, Ir);
    }
    return p;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    r.current = !1;
  }
}, zr = (e, t, s = Nr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, s);
}, Br = 400, $t = (e, t) => {
  if (e) {
    e.focus();
    try {
      let s = null, n = 0;
      if (t === 0)
        s = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(ye)[t - 1];
        a && a.nextSibling && (s = a.nextSibling, n = 0);
      }
      if (s) {
        const o = document.createRange(), a = window.getSelection();
        s.nodeType === Node.TEXT_NODE ? o.setStart(s, n) : o.setStart(s, 0), o.collapse(!0), a.removeAllRanges(), a.addRange(o);
      }
    } catch (s) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", s);
    }
  }
}, Hr = (e, t, s, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let o = null;
    if (s === 0)
      o = t;
    else {
      const r = t.querySelectorAll(ye)[s - 1];
      if (r)
        o = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", s);
        return;
      }
    }
    if (o) {
      const a = o.getBoundingClientRect(), r = e.getBoundingClientRect(), i = e.scrollTop + (a.top - r.top);
      console.log("[scrollToPage] Scrolling to page", s, "scrollTop:", i), e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(s) : $t(t, s);
      }, Br);
    }
  } catch (o) {
    console.error("[scrollToPage] Error:", o);
  }
}, $r = (e, t, s = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(s);
  }, Math.max(0, n));
}, Gr = 300, Ur = (e, t, s = 100, n = "NARROW") => {
  const o = Ct(), a = Q(null), r = Q(null), i = Q(e), h = Q(s), m = Q(n), p = Q(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    h.current = s;
  }, [s]), ie(() => {
    m.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const d = z((u = {}) => t?.current ? kr(t.current, u) : [], [t]), g = z((u = {}) => {
    const I = d(u);
    return o.updatePageBoundaries(I), I;
  }, [d, o]), T = z(async (u) => {
    if (!t?.current)
      return !1;
    const I = i.current || "A4", f = h.current || 100, O = m.current || "NARROW";
    return Sr(
      t.current,
      u,
      I,
      f,
      O,
      o.updateContinuousContent,
      g
    );
  }, [t, o, g]), E = z(() => {
    if (!t?.current)
      return;
    const u = i.current || "A4", I = h.current || 100, f = m.current || "NARROW";
    Dr(
      t.current,
      u,
      I,
      f,
      o.updateContinuousContent,
      g,
      p,
      E
    );
  }, [t, o, g]), y = z((u) => {
    zr(E, r, u);
  }, [E]), P = z((u = {}) => {
    const I = typeof u.delay == "number" ? u.delay : Gr;
    $r(g, a, u, I);
  }, [g]), j = z((u) => !u?.current || !t?.current ? 0 : wr(u.current, t.current), [t]), w = z((u) => {
    t?.current && $t(t.current, u);
  }, [t]), _ = z((u, I) => {
    if (!I?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Hr(I.current, t.current, u, w);
  }, [t, w]), M = z((u) => t?.current ? Cr(
    t.current,
    u,
    d,
    o.updateContinuousContent,
    g,
    w,
    E
  ) : !1, [t, d, o, g, w, E]);
  return {
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: P,
    updateBoundaries: g,
    getCurrentPage: j,
    scrollToPage: _,
    positionCursorAtPage: w,
    checkAndReflow: E,
    triggerAutoReflow: y,
    removePageAndContent: M,
    insertPageBreakAtBoundary: T,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, n) => n ? n.toUpperCase() : s.toLowerCase()
), Pt = (e) => {
  const t = qr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (...e) => e.filter((t, s, n) => !!t && t.trim() !== "" && n.indexOf(t) === s).join(" ").trim(), Zr = (e) => {
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
var Wr = {
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
const Yr = Ke(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: r,
    ...i
  }, h) => Ge(
    "svg",
    {
      ref: h,
      ...Wr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(s) * 24 / Number(t) : s,
      className: Gt("lucide", o),
      ...!a && !Zr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...r.map(([m, p]) => Ge(m, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (e, t) => {
  const s = Ke(
    ({ className: n, ...o }, a) => Ge(Yr, {
      ref: a,
      iconNode: t,
      className: Gt(
        `lucide-${Fr(Pt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return s.displayName = Pt(e), s;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Kr = X("bold", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Jr = X("chevron-left", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], en = X("chevron-right", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], rn = X("file-check", tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ce = X("file-text", nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], on = X("hash", an);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], cn = X("heading-1", sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], un = X("heading-2", ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], fn = X("heading-3", dn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], gn = X("image", pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], mn = X("italic", hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bn = X("link", yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Tn = X("list-ordered", En);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ut = X("list", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Pn = X("plus", xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], _n = X("redo", An);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], kn = X("settings", On);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Rn = X("strikethrough", wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Sn = X("table", Mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nn = X("text-align-center", Cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], jn = X("text-align-end", In);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Dn = X("text-align-justify", Ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Bn = X("text-align-start", zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], $n = X("underline", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Un = X("undo", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], qn = X("x", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Wn = X("zoom-in", Zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Vn = X("zoom-out", Yn), Kn = ({ editorView: e, isCollapsed: t, onToggle: s, wordCount: n, pageCount: o }) => {
  const a = St(), { pages: r, activePage: i, continuousContent: h, editorMode: m } = a, [p, d] = ve(0), [g, T] = ve([]);
  ie(() => {
    if (n !== void 0 && o !== void 0) {
      if (d(n), h) {
        const j = document.createElement("div");
        j.innerHTML = h;
        const w = j.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(w).map((M, u) => {
          const I = parseInt(M.tagName.charAt(1)), f = M.textContent.trim();
          return f ? {
            id: `heading-${u}`,
            level: I,
            text: f,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        T(_);
      }
      return;
    }
    let y = 0;
    const P = [];
    r.forEach((j, w) => {
      if (j.content) {
        const _ = document.createElement("div");
        _.innerHTML = j.content;
        const u = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((f) => f.length > 0);
        y += u.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((f, O) => {
          const N = parseInt(f.tagName.charAt(1)), B = f.textContent.trim();
          B && P.push({
            id: `heading-${w}-${O}`,
            level: N,
            text: B,
            page: w + 1
          });
        });
      }
    }), d(y), T(P);
  }, [r, n, o, h]);
  const E = o !== void 0 ? o : r.length;
  return /* @__PURE__ */ l.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: s,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(en, { size: 16 }) : /* @__PURE__ */ l.jsx(Jr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(rn, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: E })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(on, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: i + 1 })
            ] })
          ] }),
          g.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Ut, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: g.map((y) => {
              const P = y.level === 1 ? cn : y.level === 2 ? un : fn;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${y.level}`,
                  style: { marginLeft: `${(y.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(P, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: y.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      y.page
                    ] })
                  ]
                },
                y.id
              );
            }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ l.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ l.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
}, Xn = "html-editor-storage", Jn = 1, le = "images";
function Qn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Pe() {
  return new Promise((e, t) => {
    const s = indexedDB.open(Xn, Jn);
    s.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, s.onsuccess = () => {
      e(s.result);
    }, s.onupgradeneeded = (n) => {
      const o = n.target.result;
      o.objectStoreNames.contains(le) || o.createObjectStore(le, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function ea(e) {
  return new Promise((t, s) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      s(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      s(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const o = new FileReader();
    o.onload = async (a) => {
      const r = a.target.result, h = r.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        s(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Pe(), p = `editor-image-${Qn()}`, g = m.transaction([le], "readwrite").objectStore(le), T = {
          key: p,
          dataUrl: r,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, E = g.add(T);
        E.onsuccess = () => {
          m.close(), t(p);
        }, E.onerror = () => {
          m.close(), s(new Error("Failed to save image to IndexedDB"));
        };
      } catch (m) {
        s(m);
      }
    }, o.onerror = () => {
      s(new Error("Error reading image file"));
    }, o.readAsDataURL(e);
  });
}
async function ta(e) {
  try {
    const t = await Pe();
    return new Promise((s, n) => {
      const r = t.transaction([le], "readonly").objectStore(le).get(e);
      r.onsuccess = () => {
        t.close();
        const i = r.result;
        s(i ? i.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Ea(e) {
  try {
    const t = await Pe();
    return new Promise((s, n) => {
      const r = t.transaction([le], "readwrite").objectStore(le).delete(e);
      r.onsuccess = () => {
        t.close(), s();
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function Ta() {
  try {
    const e = await Pe();
    return new Promise((t, s) => {
      const a = e.transaction([le], "readwrite").objectStore(le).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), s(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function va() {
  try {
    const e = await Pe();
    return new Promise((t, s) => {
      const a = e.transaction([le], "readonly").objectStore(le).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), s(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
class ra {
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
  _format(t, s, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${s}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, s) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, s) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, s) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, s) {
  }
}
const At = new ra("Editor"), tt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: s
}) => {
  const n = async (o) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(o.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (o.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const r = await ea(o), i = await ta(r);
      i && (document.execCommand("insertImage", !1, i), At.info("Image inserted", { key: r }));
    } catch (a) {
      At.error("Error uploading image", a);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ l.jsx(Un, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ l.jsx(_n, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(Kr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx($n, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(Rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(Bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(Nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(jn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (o) => t("fontName", o.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (o) => t("fontSize", o.target.value),
        defaultValue: et,
        title: "Font Size",
        children: br.map(({ value: o, label: a, pt: r }) => /* @__PURE__ */ l.jsx("option", { value: o, children: a }, o))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (o) => t("formatBlock", o.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ l.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ l.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ l.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ l.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ l.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ l.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ l.jsx(Ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(Tn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const o = prompt("Enter URL:");
          o && t("createLink", o);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Sn, { size: 16 })
      }
    ),
    s && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: s,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Ce, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (o) => o.target.files[0] && n(o.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(gn, { size: 16 })
      }
    )
  ] });
};
tt.propTypes = {
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
tt.defaultProps = {
  onAddPageBreak: void 0
};
const rt = ({
  content: e,
  dimensions: t,
  pageSize: s,
  pageBoundaries: n = [],
  editorRef: o,
  onInput: a,
  onKeyDown: r,
  onClick: i,
  onScroll: h,
  zoomLevel: m = 100,
  pageMargins: p = fe
}) => {
  const d = Ot(p), g = m / 100, T = (w, _) => {
    if (!w) return !1;
    const M = w.getBoundingClientRect(), u = _ - M.top;
    return u < d.top || u > M.height - d.bottom;
  }, E = (w) => w ? w.nodeType === Node.ELEMENT_NODE ? w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true" : w.parentElement && E(w.parentElement) : !1, y = (w) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const M = _.getRangeAt(0), { startContainer: u, endContainer: I } = M;
    if ((E(u) || E(I)) && (w.key.length === 1 || w.key === "Enter" || w.key === " "))
      return w.preventDefault(), !1;
    if (w.key === "Tab")
      return w.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((w.key === "Backspace" || w.key === "Delete") && (E(u) || E(I)))
      return w.preventDefault(), !1;
    r && r(w);
  }, P = (w) => {
    if (!o.current) return;
    const _ = w.target;
    if (E(_)) {
      w.preventDefault();
      return;
    }
    if (T(o.current, w.clientY)) {
      w.preventDefault();
      const M = o.current.getBoundingClientRect();
      if (w.clientY - M.top < d.top) {
        const I = o.current.firstElementChild;
        if (I && I.tagName !== "PAGE-BREAK") {
          const f = document.createRange(), O = window.getSelection();
          f.setStart(I, 0), f.collapse(!0), O.removeAllRanges(), O.addRange(f);
        }
      } else {
        const I = o.current.lastElementChild;
        if (I && I.tagName !== "PAGE-BREAK") {
          const f = document.createRange(), O = window.getSelection();
          f.selectNodeContents(I), f.collapse(!1), O.removeAllRanges(), O.addRange(f);
        }
      }
      return;
    }
    i && i(w);
  }, j = (w) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const M = _.getRangeAt(0), { startContainer: u } = M;
    if (E(u))
      return w.preventDefault(), !1;
  };
  return /* @__PURE__ */ l.jsx(
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
        transform: `scale(${g})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: o,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${t.height}px`,
            width: `${t.width}px`,
            backgroundColor: "white",
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: et,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: y,
          onBeforeInput: j,
          onClick: P,
          onScroll: h,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
rt.propTypes = {
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
rt.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: fe
};
const nt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: s = "A4",
  pageMargins: n = fe,
  zoomLevel: o = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: i,
  onAddPage: h,
  onDeletePage: m,
  onPageSizeChange: p,
  onPageMarginsChange: d,
  onZoomIn: g,
  onZoomOut: T,
  onZoomReset: E
} = {}) => {
  const y = Math.max(e?.length || 0, 1), P = (u) => {
    i && i(u);
  }, j = () => {
    h && h();
  }, w = (u) => {
    if (y <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, _ = (u) => {
    p && p(u);
  }, M = (u) => {
    d && d(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(kn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ l.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: s,
              onChange: (u) => _(u.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ l.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ l.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ l.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (u) => M(u.target.value),
              children: or().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: sr(u) }, u))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: T,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Vn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "zoom-level-display", children: [
        o,
        "%"
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: g,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Wn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: E,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, I) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${I === t ? "active" : ""}`,
          onClick: () => P(I),
          "aria-label": `Go to page ${I + 1}`,
          "aria-current": I === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              I + 1
            ] })
          ]
        }
      ),
      y > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (f) => {
            f.stopPropagation(), w(I);
          },
          "aria-label": `Delete page ${I + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(qn, { size: 14 })
        }
      )
    ] }, u.id || `page-${I}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: j,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Pn, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
nt.propTypes = {
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
nt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: fe,
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
const na = Ne.memo(nt), at = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: s,
  onImageDeselect: n,
  resizeOptions: o = ge
}) => {
  const a = Q(null), r = Q(null), i = Q(null), h = Q(null), m = Q(o), p = Q(!1);
  ie(() => {
    m.current = o;
  }, [o]);
  const d = z((f) => {
    if (!de(f)) return;
    a.current && (me(a.current), a.current = null), f.classList.add("selected");
    const O = Lt(f);
    if (O) {
      a.current = O, r.current = f, document.body.appendChild(O), O.querySelectorAll(".resize-handler").forEach((J) => {
        J.addEventListener("mousedown", E);
      });
      const B = O.querySelector(".aspect-ratio-toggle");
      B && B.addEventListener("click", T), s && s(f);
    }
  }, [s]), g = z(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (me(a.current), a.current = null), i.current = null, h.current = null, p.current = !1, n && n();
  }, [n]), T = z((f) => {
    f.preventDefault(), f.stopPropagation();
    const O = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: O,
      aspectRatio: O
    };
    const N = f.currentTarget;
    O ? (N.innerHTML = "🔗", N.title = "Toggle aspect ratio preservation (currently ON)", N.classList.remove("locked")) : (N.innerHTML = "🔓", N.title = "Toggle aspect ratio preservation (currently OFF)", N.classList.add("locked"));
  }, []), E = z((f) => {
    if (f.preventDefault(), f.stopPropagation(), !r.current) return;
    const O = f.currentTarget.dataset.handler, N = r.current.getBoundingClientRect(), B = window.pageYOffset || document.documentElement.scrollTop, J = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: f.clientX,
      y: f.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      offsetX: f.clientX - N.left - J,
      offsetY: f.clientY - N.top - B
    }, h.current = O, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = M(O), document.addEventListener("mousemove", y), document.addEventListener("mouseup", P);
  }, []), y = z((f) => {
    if (!p.current || !r.current || !i.current || !h.current) return;
    f.preventDefault(), f.stopPropagation();
    const { x: O, y: N, width: B, height: J } = i.current, Z = h.current, ee = f.clientX, H = f.clientY, ne = u({
      handler: Z,
      startX: O,
      startY: N,
      currentX: ee,
      currentY: H,
      startWidth: B,
      startHeight: J,
      options: m.current
    });
    I(r.current, ne), a.current && Ve(a.current, r.current);
  }, []), P = z((f) => {
    if (p.current && (f.preventDefault(), f.stopPropagation(), i.current = null, h.current = null, p.current = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", P), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current)) {
      const O = new Event("input", { bubbles: !0, cancelable: !0 });
      r.current.dispatchEvent(O), t && t(r.current, {
        width: r.current.offsetWidth,
        height: r.current.offsetHeight
      });
    }
  }, [t]), j = z((f) => {
    a.current && !a.current.contains(f.target) && g();
    const O = f.target;
    if (de(O)) {
      if (O === r.current)
        return;
      d(O);
    }
  }, [d, g]), w = z((f) => {
    if ((f.key === "Delete" || f.key === "Backspace") && r.current && !p.current) {
      f.preventDefault();
      const O = r.current;
      if (O.parentNode) {
        O.parentNode.removeChild(O), g();
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(N);
      }
    }
    if (f.key === "Escape" && r.current && g(), r.current && !p.current) {
      if ((f.ctrlKey || f.metaKey) && f.shiftKey && f.key === ">") {
        f.preventDefault();
        const O = r.current.offsetWidth, N = Math.min(m.current.maxWidth || 800, O + 10);
        I(r.current, { width: N, height: r.current.offsetHeight });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((f.ctrlKey || f.metaKey) && f.shiftKey && f.key === "<") {
        f.preventDefault();
        const O = r.current.offsetWidth, N = Math.max(m.current.minWidth || 50, O - 10);
        I(r.current, { width: N, height: r.current.offsetHeight });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((f.ctrlKey || f.metaKey) && f.shiftKey && f.key === "+") {
        f.preventDefault();
        const O = r.current.offsetHeight, N = Math.min(m.current.maxHeight || 600, O + 10);
        I(r.current, { width: r.current.offsetWidth, height: N });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((f.ctrlKey || f.metaKey) && f.shiftKey && f.key === "-") {
        f.preventDefault();
        const O = r.current.offsetHeight, N = Math.max(m.current.minHeight || 50, O - 10);
        I(r.current, { width: r.current.offsetWidth, height: N });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((f.ctrlKey || f.metaKey) && f.key === "r") {
        f.preventDefault(), I(r.current, { width: 300, height: 200 });
        const O = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(O);
      }
      if ((f.ctrlKey || f.metaKey) && f.altKey && f.key === "l") {
        f.preventDefault();
        const O = !m.current.preserveAspectRatio;
        if (m.current = {
          ...m.current,
          preserveAspectRatio: O,
          aspectRatio: O
        }, a.current) {
          const N = a.current.querySelector(".aspect-ratio-toggle");
          N && (O ? (N.innerHTML = "🔗", N.title = "Toggle aspect ratio preservation (currently ON)", N.classList.remove("locked")) : (N.innerHTML = "🔓", N.title = "Toggle aspect ratio preservation (currently OFF)", N.classList.add("locked")));
        }
      }
    }
  }, [e, g]), _ = z(() => {
    a.current && r.current && Ve(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const O = e.current.closest(".editor-viewport");
    return O && (O.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      O && O.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), ie(() => {
    if (!e.current) return;
    const f = e.current;
    f.addEventListener("click", j), f.addEventListener("keydown", w);
    const O = f.closest(".editor-viewport");
    return O && O.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      f.removeEventListener("click", j), f.removeEventListener("keydown", w), O && O.removeEventListener("scroll", _), window.removeEventListener("resize", _), p.current && (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", P), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && me(a.current);
    };
  }, [e, j, w, _, y, P]), ie(() => {
    if (!e.current) return;
    const f = new MutationObserver((O) => {
      O.forEach((N) => {
        N.type === "childList" && (N.removedNodes.length > 0 && N.removedNodes.forEach((B) => {
          B.nodeType === Node.ELEMENT_NODE && de(B) && B === r.current && g();
        }), N.addedNodes.length > 0 && N.addedNodes.forEach((B) => {
          if (B.nodeType === Node.ELEMENT_NODE)
            if (de(B))
              setTimeout(() => {
                d(B);
              }, 50);
            else {
              const J = B.querySelectorAll ? B.querySelectorAll("img") : [];
              J.length > 0 && setTimeout(() => {
                d(J[0]);
              }, 50);
            }
        }));
      });
    });
    return f.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      f.disconnect();
    };
  }, [e, g, d]);
  function M(f) {
    switch (f) {
      case x.TOP_LEFT:
      case x.BOTTOM_RIGHT:
        return "nwse-resize";
      case x.TOP_RIGHT:
      case x.BOTTOM_LEFT:
        return "nesw-resize";
      case x.TOP:
      case x.BOTTOM:
        return "ns-resize";
      case x.LEFT:
      case x.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function u({
    handler: f,
    startX: O,
    startY: N,
    currentX: B,
    currentY: J,
    startWidth: Z,
    startHeight: ee,
    options: H = ge
  }) {
    const ne = B - O, te = J - N;
    let W = Z, K = ee;
    switch (f) {
      case x.TOP_LEFT:
        W = Math.max(H.minWidth, Z - ne), K = Math.max(H.minHeight, ee - te);
        break;
      case x.TOP_RIGHT:
        W = Math.max(H.minWidth, Z + ne), K = Math.max(H.minHeight, ee - te);
        break;
      case x.BOTTOM_LEFT:
        W = Math.max(H.minWidth, Z - ne), K = Math.max(H.minHeight, ee + te);
        break;
      case x.BOTTOM_RIGHT:
        W = Math.max(H.minWidth, Z + ne), K = Math.max(H.minHeight, ee + te);
        break;
      case x.TOP:
        K = Math.max(H.minHeight, ee - te);
        break;
      case x.BOTTOM:
        K = Math.max(H.minHeight, ee + te);
        break;
      case x.LEFT:
        W = Math.max(H.minWidth, Z - ne);
        break;
      case x.RIGHT:
        W = Math.max(H.minWidth, Z + ne);
        break;
      default:
        return { width: W, height: K };
    }
    if (H.preserveAspectRatio && H.aspectRatio) {
      const re = Z / ee;
      [
        x.TOP_LEFT,
        x.TOP_RIGHT,
        x.BOTTOM_LEFT,
        x.BOTTOM_RIGHT
      ].includes(f) ? W / re > K ? K = Math.max(H.minHeight, W / re) : W = Math.max(H.minWidth, K * re) : [x.TOP, x.BOTTOM].includes(f) ? W = K * re : [x.LEFT, x.RIGHT].includes(f) && (K = W / re);
    }
    return H.maxWidth && W > H.maxWidth && (W = H.maxWidth, H.preserveAspectRatio && H.aspectRatio && (K = W / (Z / ee))), H.maxHeight && K > H.maxHeight && (K = H.maxHeight, H.preserveAspectRatio && H.aspectRatio && (W = K * (Z / ee))), W = Math.max(H.minWidth, W), K = Math.max(H.minHeight, K), {
      width: Math.round(W),
      height: Math.round(K)
    };
  }
  function I(f, { width: O, height: N }) {
    de(f) && (f.tagName === "IMG" ? (f.style.width = `${O}px`, f.style.height = `${N}px`, f.width = O, f.height = N) : f.tagName === "DIV" && (f.style.width = `${O}px`, f.style.height = `${N}px`));
  }
  return null;
};
at.propTypes = {
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: v.func,
  onImageSelect: v.func,
  onImageDeselect: v.func,
  resizeOptions: v.shape({
    minWidth: v.number,
    minHeight: v.number,
    maxWidth: v.number,
    maxHeight: v.number,
    aspectRatio: v.bool,
    preserveAspectRatio: v.bool,
    defaultWidth: v.number,
    defaultHeight: v.number
  })
};
at.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const aa = 50, oa = 50, _t = 50, sa = 100, ia = 500, ot = Ke(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: s,
  onDeletePage: n,
  onPageSizeChange: o,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: i = !0,
  showToolbar: h = !0,
  showPageManager: m = !0
}, p) => {
  const d = St(), g = Ct(), { pageSize: T, pageMargins: E, continuousContent: y, pageBoundaries: P, activePage: j, zoomLevel: w } = d, _ = Q(null), M = Q(null), { currentFormat: u, formatText: I } = Pr(), [f, O] = ve(!1), {
    checkAndUpdateBoundaries: N,
    getCurrentPage: B,
    scrollToPage: J,
    updateBoundaries: Z,
    triggerAutoReflow: ee,
    removePageAndContent: H,
    insertPageBreakAtBoundary: ne
  } = Ur(T, M, w, E), te = Me(() => Je(T), [T]), [W, K] = ve(!1), re = Q(null), b = Q(!1), c = Q(!1), A = Q(!1), R = Q(y);
  ie(() => {
    if (M.current) {
      if (!A.current) {
        M.current.innerHTML = y, A.current = !0, R.current = y;
        const D = setTimeout(() => {
          Z();
        }, aa);
        return () => clearTimeout(D);
      }
      if (R.current !== y) {
        if (M.current.innerHTML !== y) {
          M.current.innerHTML = y;
          const oe = setTimeout(() => {
            if (Z(), b.current) {
              b.current = !1;
              const ue = Math.max(0, P.length - 1);
              g.setActivePage(ue), setTimeout(() => {
                J(ue, _);
              }, _t);
            }
          }, oa);
          return R.current = y, () => clearTimeout(oe);
        }
        R.current = y;
      }
    }
  }, [y, Z, P.length, g, J]), ie(() => {
    r && A.current && r(y);
  }, [y, r]), Jt(p, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => y.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      g.updateContinuousContent(D), M.current && (M.current.innerHTML = D, setTimeout(() => {
        Z();
      }, 50));
    }
  }), [y, g, Z]), ie(() => {
    const D = setTimeout(() => {
      M.current && M.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const S = z((D) => {
    const oe = D.currentTarget.innerHTML;
    g.updateContinuousContent(oe), N(), ee(200);
    const ue = B(_);
    ue !== j && g.setActivePage(ue);
  }, [N, g, B, j, ee, _]), U = z((D) => {
    g.updatePageSize(D), Z({ pageSize: D }), o && o(D);
  }, [g, Z, o]), L = z((D) => {
    g.updatePageMargins(D), Z({ pageMargins: D }), a && a(D);
  }, [g, Z, a]), C = z((D) => {
    D < 0 || D >= P.length || (c.current = !0, g.setActivePage(D), J(D, _), setTimeout(() => {
      c.current = !1;
    }, ia), t && t(D));
  }, [g, J, t, P.length]), $ = z(() => {
    const D = P.length + 1;
    ne(D) && (b.current = !0, setTimeout(() => {
      if (b.current) {
        b.current = !1;
        const ue = Math.max(0, P.length - 1);
        g.setActivePage(ue), setTimeout(() => {
          J(ue, _);
        }, _t);
      }
    }, 100)), s && s();
  }, [P.length, ne, g, J, s]), q = z(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!M?.current) return;
      const Ie = `<page-break data-page-break="true" contenteditable="false" data-page-number="${M.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Ie), setTimeout(() => {
        Z();
        const je = B(_);
        g.setActivePage(je);
      }, 150);
    }
  }, [Z, B, g, _]), F = z((D) => {
    if (P.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    H(D) && (g.setActivePage(0), n && n(D));
  }, [P.length, H, g, n]), ae = z(() => {
    g.zoomIn();
  }, [g]), k = z(() => {
    g.zoomOut();
  }, [g]), se = z(() => {
    g.resetZoom();
  }, [g]);
  ie(() => {
    const D = (oe) => {
      if (oe.ctrlKey || oe.metaKey) {
        ["+", "=", "-", "_", "0"].includes(oe.key) && oe.preventDefault();
        const ue = document.activeElement === M.current, Ie = document.activeElement === _.current, je = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ue || Ie || !je)
          switch (oe.key) {
            case "+":
            case "=":
              ae();
              break;
            case "-":
            case "_":
              k();
              break;
            case "0":
              se();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [ae, k, se]);
  const he = z(() => {
    !_.current || !M.current || c.current || (re.current && clearTimeout(re.current), re.current = setTimeout(() => {
      if (c.current) {
        re.current = null;
        return;
      }
      const D = B(_);
      D !== j && D >= 0 && g.setActivePage(D), re.current = null;
    }, sa));
  }, [B, j, g]), Ae = Me(() => {
    if (!y) return 0;
    const oe = y.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return oe ? oe.length : 0;
  }, [y]), qt = P.length || 1, Zt = z((D) => {
    O(!0);
  }, []), Wt = z(() => {
    O(!1);
  }, []), Yt = z((D, oe) => {
  }, []);
  return ie(() => () => {
    re.current && clearTimeout(re.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ l.jsx(
      tt,
      {
        currentFormat: {
          ...u,
          imageSelected: f
        },
        onFormatText: I,
        onAddPageBreak: q
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ l.jsx(
        Kn,
        {
          editorView: null,
          isCollapsed: W,
          onToggle: () => K((D) => !D),
          wordCount: Ae,
          pageCount: qt
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: _,
          onScroll: he,
          children: /* @__PURE__ */ l.jsx(
            rt,
            {
              content: y,
              dimensions: te,
              pageSize: T,
              pageMargins: E,
              pageBoundaries: P,
              editorRef: M,
              onInput: S,
              onClick: () => M.current?.focus(),
              zoomLevel: w
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        at,
        {
          editorRef: M,
          onImageSelect: Zt,
          onImageDeselect: Wt,
          onImageResize: Yt
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Ne.cloneElement(e, {
        onNavigate: C,
        onAddPage: $,
        onDeletePage: F,
        onPageSizeChange: U,
        onPageMarginsChange: L,
        zoomLevel: w,
        canZoomIn: Ze(w),
        canZoomOut: We(w),
        onZoomIn: ae,
        onZoomOut: k,
        onZoomReset: se
      }) : /* @__PURE__ */ l.jsx(
        na,
        {
          pageBoundaries: P,
          activePage: j,
          pageSize: T,
          pageMargins: E,
          zoomLevel: w,
          canZoomIn: Ze(w),
          canZoomOut: We(w),
          onNavigate: C,
          onAddPage: $,
          onDeletePage: F,
          onPageSizeChange: U,
          onPageMarginsChange: L,
          onZoomIn: ae,
          onZoomOut: k,
          onZoomReset: se
        }
      ) })
    ] })
  ] });
});
ot.displayName = "HtmlEditor";
ot.propTypes = {
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
ot.defaultProps = {
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
class Ft extends Ne.Component {
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
  componentDidCatch(t, s) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", s), this.setState({
      error: t,
      errorInfo: s
    }), this.props.onError && this.props.onError(t, s);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ l.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ l.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ l.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ l.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ l.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ l.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ l.jsx(
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
Ft.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
Ft.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const xa = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  br as COMMON_FONT_SIZES,
  et as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  kt as DEFAULT_PAGE_SIZE,
  fa as DocumentProvider,
  tt as EditorToolbar,
  Ft as ErrorBoundary,
  jt as FONT_SIZE_MAP,
  ot as HtmlEditor,
  at as ImageResizeHandlers,
  xa as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  na as PageManager,
  rt as PageView,
  x as RESIZE_HANDLERS,
  Kn as Sidebar,
  ba as applyImageDimensions,
  ma as calculateResizeDimensions,
  Ta as clearImages,
  Lt as createResizeOverlay,
  Ea as deleteImage,
  va as getAllImageKeys,
  da as getAvailablePageSizes,
  ta as getImage,
  ya as getImageDimensions,
  Je as getPageDimensions,
  pa as getPixelValue,
  ga as getPointValue,
  de as isResizableImage,
  ha as isValidFontSize,
  ua as isValidPageSize,
  ra as logger,
  Tr as pixelsToPoints,
  Er as pointsToPixels,
  me as removeResizeOverlay,
  ea as saveImage,
  Ve as updateResizeOverlay,
  Ur as useContinuousReflow,
  Mt as useDocument,
  Ct as useDocumentActions,
  St as useDocumentState,
  Pr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
