import Ke, { createContext as or, useContext as ar, useReducer as sr, useMemo as be, useState as re, useCallback as _, useRef as ee, useEffect as oe, forwardRef as Tt, createElement as lt, memo as ir, useLayoutEffect as hn, useImperativeHandle as cr } from "react";
import { v4 as vt } from "uuid";
import { createPortal as mn } from "react-dom";
function lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Be = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function ur() {
  if (Yt) return Pe;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      a = {};
      for (var i in s)
        i !== "key" && (a[i] = s[i]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Pe.Fragment = t, Pe.jsx = r, Pe.jsxs = r, Pe;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function dr() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === P ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case C:
          return "Fragment";
        case j:
          return "Profiler";
        case D:
          return "StrictMode";
        case g:
          return "Suspense";
        case A:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case b:
            return "Portal";
          case y:
            return f.displayName || "Context";
          case O:
            return (f._context.displayName || "Context") + ".Consumer";
          case p:
            var S = f.render;
            return f = f.displayName, f || (f = S.displayName || S.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case R:
            return S = f.displayName || null, S !== null ? S : e(f.type) || "Memo";
          case L:
            S = f._payload, f = f._init;
            try {
              return e(f(S));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function r(f) {
      try {
        t(f);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var I = S.error, M = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return I.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(f);
      }
    }
    function n(f) {
      if (f === C) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === L)
        return "<...>";
      try {
        var S = e(f);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = B.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (E.call(f, "key")) {
        var S = Object.getOwnPropertyDescriptor(f, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, S) {
      function I() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: I,
        configurable: !0
      });
    }
    function h() {
      var f = e(this.type);
      return Q[f] || (Q[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, S, I, M, G, W) {
      var z = I.ref;
      return f = {
        $$typeof: v,
        type: f,
        key: S,
        props: I,
        _owner: M
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, S, I, M, G, W) {
      var z = S.children;
      if (z !== void 0)
        if (M)
          if (H(z)) {
            for (M = 0; M < z.length; M++)
              c(z[M]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(z);
      if (E.call(S, "key")) {
        z = e(f);
        var q = Object.keys(S).filter(function(V) {
          return V !== "key";
        });
        M = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", x[z + M] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          z,
          q,
          z
        ), x[z + M] = !0);
      }
      if (z = null, I !== void 0 && (r(I), z = "" + I), o(S) && (r(S.key), z = "" + S.key), "key" in S) {
        I = {};
        for (var K in S)
          K !== "key" && (I[K] = S[K]);
      } else I = S;
      return z && i(
        I,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        z,
        I,
        s(),
        G,
        W
      );
    }
    function c(f) {
      u(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === L && (f._payload.status === "fulfilled" ? u(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === v;
    }
    var w = Ke, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), B = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, H = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var Z, Q = {}, ae = w.react_stack_bottom_frame.bind(
      w,
      a
    )(), se = Y(n(a)), x = {};
    _e.Fragment = C, _e.jsx = function(f, S, I) {
      var M = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        f,
        S,
        I,
        !1,
        M ? Error("react-stack-top-frame") : ae,
        M ? Y(n(f)) : se
      );
    }, _e.jsxs = function(f, S, I) {
      var M = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        f,
        S,
        I,
        !0,
        M ? Error("react-stack-top-frame") : ae,
        M ? Y(n(f)) : se
      );
    };
  })()), _e;
}
var Kt;
function fr() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Be.exports = ur() : Be.exports = dr()), Be.exports;
}
var m = fr();
const ut = 100, dt = 50, ft = 200, Xt = 5, pt = (e) => e < ft, gt = (e) => e > dt, pr = 96, ze = (e) => Math.round(e * pr), Ze = {
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
}, ge = "NORMAL", yn = (e = ge) => {
  const t = Ze[e] || Ze[ge];
  return {
    top: ze(t.top),
    bottom: ze(t.bottom),
    left: ze(t.left),
    right: ze(t.right)
  };
}, gr = (e = ge) => {
  const t = yn(e);
  return t.top + t.bottom;
}, hr = () => Object.keys(Ze), mr = (e) => {
  const t = Ze[e];
  return t ? t.label : "Unknown";
}, Re = {
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
}, bn = "A4", xt = (e) => {
  const t = Re[e] || Re[bn];
  return {
    width: t.width,
    height: t.height
  };
}, ss = (e) => Object.keys(Re).includes(e), is = () => Object.keys(Re), Ne = bn, xe = "<p><br></p>", yr = "continuous", Oe = (e, t = Ne) => ({
  id: vt(),
  index: e,
  size: t,
  content: xe,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? xe : e, En = (e, t = Ne) => (e.length > 0 ? e : [Oe(0, t)]).map((n, s) => ({
  id: n.id || vt(),
  index: s,
  size: n.size || t,
  content: We(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), br = (e = Ne) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: xt(e).height
}], $e = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), ht = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Ne, n = En(e.pages || [Oe(0, r)], r);
  return {
    id: vt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || yr,
    continuousContent: e.continuousContent || xe,
    pageBoundaries: e.pageBoundaries || br(r),
    zoomLevel: e.zoomLevel || ut,
    pageMargins: e.pageMargins || ge,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, F = {
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
  SET_ZOOM_LEVEL: "SET_ZOOM_LEVEL",
  ZOOM_IN: "ZOOM_IN",
  ZOOM_OUT: "ZOOM_OUT",
  RESET_ZOOM: "RESET_ZOOM",
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS",
  // Undo/Redo actions
  RECORD_OPERATION: "RECORD_OPERATION",
  UNDO: "UNDO",
  REDO: "REDO",
  CLEAR_UNDO_REDO: "CLEAR_UNDO_REDO"
}, mt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case F.INITIALIZE_DOCUMENT: {
      const { initialContent: n = xe, pageSize: s = Ne } = t.payload || {}, a = { ...Oe(0, s), content: We(n) };
      return ht({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case F.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case F.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: We(s)
      }, {
        ...e,
        pages: a,
        updatedAt: r
      };
    }
    case F.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = En(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : $e(s);
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case F.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, Oe(n, e.pageSize));
      const a = s.map((i, h) => ({
        ...i,
        index: h,
        size: e.pageSize
      })), o = $e(a);
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case F.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((h, l) => ({
        ...h,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : n <= o && o > 0 && (o -= 1);
      const i = $e(a);
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case F.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const s = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= s ? e : {
        ...e,
        activePage: n,
        updatedAt: r
      };
    }
    case F.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        xt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const s = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: n
      })), a = $e(s);
      return {
        ...e,
        pageSize: n,
        pages: s,
        pageBreaks: a,
        updatedAt: r
      };
    }
    case F.RESET_DOCUMENT:
      return ht();
    case F.UPDATE_CONTINUOUS_CONTENT: {
      const n = We(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case F.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const s = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: s,
        updatedAt: r
      };
    }
    case F.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (n === "end")
        o = o + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = o.substring(0, n), h = o.substring(n);
        o = i + a + h;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = o;
        const h = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && h.length === 0)
          o = o + a + "<p><br></p>";
        else if (s < h.length) {
          const l = h[s], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const c = document.createElement("p");
          c.innerHTML = "<br>", l.parentNode.insertBefore(d, l.nextSibling), d.parentNode.insertBefore(c, d.nextSibling), o = i.innerHTML;
        } else
          o = o + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: r
      };
    }
    case F.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, h) => {
        i.setAttribute("data-page-number", String(h + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: r
      };
    }
    case F.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== xe).join(`
`) || xe : e.continuousContent && e.continuousContent !== xe && (a = [{ ...Oe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: r
      };
    }
    case F.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < dt || n > ft ? (console.warn(`Invalid zoom level: ${n}. Must be between ${dt} and ${ft}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case F.ZOOM_IN: {
      if (!pt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Xt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case F.ZOOM_OUT: {
      if (!gt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Xt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case F.RESET_ZOOM:
      return e.zoomLevel === ut ? e : {
        ...e,
        zoomLevel: ut,
        updatedAt: r
      };
    case F.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case F.RECORD_OPERATION: {
      const { operation: n, inverseOperation: s } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: s }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: r
      };
    }
    case F.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = mt(e, n.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, n],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case F.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = mt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: r
      };
    }
    case F.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: r
      };
    default:
      return e;
  }
}, Tn = or(null), cs = ({ children: e, initialState: t = {} }) => {
  const [r, n] = sr(mt, ht(t)), s = be(() => ({
    initializeDocument: (o) => n({ type: F.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => n({ type: F.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => n({ type: F.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => n({ type: F.UPDATE_PAGES, payload: o }),
    addPage: (o) => n({ type: F.ADD_PAGE, payload: o }),
    deletePage: (o) => n({ type: F.DELETE_PAGE, payload: o }),
    setActivePage: (o) => n({ type: F.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => n({ type: F.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => n({ type: F.RESET_DOCUMENT }),
    updateContinuousContent: (o) => n({ type: F.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => n({ type: F.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => n({ type: F.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => n({ type: F.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => n({ type: F.SET_EDITOR_MODE, payload: o }),
    setZoomLevel: (o) => n({ type: F.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => n({ type: F.ZOOM_IN }),
    zoomOut: () => n({ type: F.ZOOM_OUT }),
    resetZoom: () => n({ type: F.RESET_ZOOM }),
    updatePageMargins: (o) => n({ type: F.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, i) => n({
      type: F.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: i }
    }),
    undo: () => n({ type: F.UNDO }),
    redo: () => n({ type: F.REDO }),
    clearUndoRedo: () => n({ type: F.CLEAR_UNDO_REDO })
  }), []), a = be(() => ({
    state: r,
    actions: s,
    dispatch: n
  }), [r, s]);
  return /* @__PURE__ */ m.jsx(Tn.Provider, { value: a, children: e });
}, vn = () => {
  const e = ar(Tn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, xn = () => {
  const { state: e } = vn();
  return e;
}, Te = () => {
  const { actions: e } = vn();
  return e;
};
var Ue = { exports: {} }, Fe = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Er() {
  if (Jt) return te;
  Jt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function O(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case t:
          switch (p = p.type, p) {
            case h:
            case l:
            case n:
            case a:
            case s:
            case c:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case d:
                case v:
                case w:
                case o:
                  return p;
                default:
                  return g;
              }
          }
        case r:
          return g;
      }
    }
  }
  function y(p) {
    return O(p) === l;
  }
  return te.AsyncMode = h, te.ConcurrentMode = l, te.ContextConsumer = i, te.ContextProvider = o, te.Element = t, te.ForwardRef = d, te.Fragment = n, te.Lazy = v, te.Memo = w, te.Portal = r, te.Profiler = a, te.StrictMode = s, te.Suspense = c, te.isAsyncMode = function(p) {
    return y(p) || O(p) === h;
  }, te.isConcurrentMode = y, te.isContextConsumer = function(p) {
    return O(p) === i;
  }, te.isContextProvider = function(p) {
    return O(p) === o;
  }, te.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, te.isForwardRef = function(p) {
    return O(p) === d;
  }, te.isFragment = function(p) {
    return O(p) === n;
  }, te.isLazy = function(p) {
    return O(p) === v;
  }, te.isMemo = function(p) {
    return O(p) === w;
  }, te.isPortal = function(p) {
    return O(p) === r;
  }, te.isProfiler = function(p) {
    return O(p) === a;
  }, te.isStrictMode = function(p) {
    return O(p) === s;
  }, te.isSuspense = function(p) {
    return O(p) === c;
  }, te.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === l || p === a || p === s || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === w || p.$$typeof === o || p.$$typeof === i || p.$$typeof === d || p.$$typeof === C || p.$$typeof === D || p.$$typeof === j || p.$$typeof === b);
  }, te.typeOf = O, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function Tr() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function O(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === l || k === a || k === s || k === c || k === u || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === w || k.$$typeof === o || k.$$typeof === i || k.$$typeof === d || k.$$typeof === C || k.$$typeof === D || k.$$typeof === j || k.$$typeof === b);
    }
    function y(k) {
      if (typeof k == "object" && k !== null) {
        var ue = k.$$typeof;
        switch (ue) {
          case t:
            var pe = k.type;
            switch (pe) {
              case h:
              case l:
              case n:
              case a:
              case s:
              case c:
                return pe;
              default:
                var we = pe && pe.$$typeof;
                switch (we) {
                  case i:
                  case d:
                  case v:
                  case w:
                  case o:
                    return we;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var p = h, g = l, A = i, R = o, L = t, U = d, P = n, B = v, E = w, H = r, Y = a, Z = s, Q = c, ae = !1;
    function se(k) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(k) || y(k) === h;
    }
    function x(k) {
      return y(k) === l;
    }
    function f(k) {
      return y(k) === i;
    }
    function S(k) {
      return y(k) === o;
    }
    function I(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function M(k) {
      return y(k) === d;
    }
    function G(k) {
      return y(k) === n;
    }
    function W(k) {
      return y(k) === v;
    }
    function z(k) {
      return y(k) === w;
    }
    function q(k) {
      return y(k) === r;
    }
    function K(k) {
      return y(k) === a;
    }
    function V(k) {
      return y(k) === s;
    }
    function ce(k) {
      return y(k) === c;
    }
    ne.AsyncMode = p, ne.ConcurrentMode = g, ne.ContextConsumer = A, ne.ContextProvider = R, ne.Element = L, ne.ForwardRef = U, ne.Fragment = P, ne.Lazy = B, ne.Memo = E, ne.Portal = H, ne.Profiler = Y, ne.StrictMode = Z, ne.Suspense = Q, ne.isAsyncMode = se, ne.isConcurrentMode = x, ne.isContextConsumer = f, ne.isContextProvider = S, ne.isElement = I, ne.isForwardRef = M, ne.isFragment = G, ne.isLazy = W, ne.isMemo = z, ne.isPortal = q, ne.isProfiler = K, ne.isStrictMode = V, ne.isSuspense = ce, ne.isValidElementType = O, ne.typeOf = y;
  })()), ne;
}
var en;
function wn() {
  return en || (en = 1, process.env.NODE_ENV === "production" ? Fe.exports = Er() : Fe.exports = Tr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tt, tn;
function vr() {
  if (tn) return tt;
  tn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, i = 0; i < 10; i++)
        o["_" + String.fromCharCode(i)] = i;
      var h = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return tt = s() ? Object.assign : function(a, o) {
    for (var i, h = n(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var c in i)
        t.call(i, c) && (h[c] = i[c]);
      if (e) {
        l = e(i);
        for (var u = 0; u < l.length; u++)
          r.call(i, l[u]) && (h[l[u]] = i[l[u]]);
      }
    }
    return h;
  }, tt;
}
var nt, nn;
function wt() {
  if (nn) return nt;
  nn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nt = e, nt;
}
var rt, rn;
function An() {
  return rn || (rn = 1, rt = Function.call.bind(Object.prototype.hasOwnProperty)), rt;
}
var ot, on;
function xr() {
  if (on) return ot;
  on = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), r = {}, n = /* @__PURE__ */ An();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, i, h, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var c;
          try {
            if (typeof a[d] != "function") {
              var u = Error(
                (h || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            c = a[d](o, d, h, i, null, t);
          } catch (v) {
            c = v;
          }
          if (c && !(c instanceof Error) && e(
            (h || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in r)) {
            r[c.message] = !0;
            var w = l ? l() : "";
            e(
              "Failed " + i + " type: " + c.message + (w ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ot = s, ot;
}
var at, an;
function wr() {
  if (an) return at;
  an = 1;
  var e = wn(), t = vr(), r = /* @__PURE__ */ wt(), n = /* @__PURE__ */ An(), s = /* @__PURE__ */ xr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var h = "Warning: " + i;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return at = function(i, h) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function c(x) {
      var f = x && (l && x[l] || x[d]);
      if (typeof f == "function")
        return f;
    }
    var u = "<<anonymous>>", w = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: j(),
      arrayOf: O,
      element: y(),
      elementType: p(),
      instanceOf: g,
      node: U(),
      objectOf: R,
      oneOf: A,
      oneOfType: L,
      shape: B,
      exact: E
    };
    function v(x, f) {
      return x === f ? x !== 0 || 1 / x === 1 / f : x !== x && f !== f;
    }
    function b(x, f) {
      this.message = x, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function C(x) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, S = 0;
      function I(G, W, z, q, K, V, ce) {
        if (q = q || u, V = V || z, ce !== r) {
          if (h) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = q + ":" + z;
            !f[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ue] = !0, S++);
          }
        }
        return W[z] == null ? G ? W[z] === null ? new b("The " + K + " `" + V + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + K + " `" + V + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : x(W, z, q, K, V);
      }
      var M = I.bind(null, !1);
      return M.isRequired = I.bind(null, !0), M;
    }
    function D(x) {
      function f(S, I, M, G, W, z) {
        var q = S[I], K = Z(q);
        if (K !== x) {
          var V = Q(q);
          return new b(
            "Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return C(f);
    }
    function j() {
      return C(o);
    }
    function O(x) {
      function f(S, I, M, G, W) {
        if (typeof x != "function")
          return new b("Property `" + W + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var z = S[I];
        if (!Array.isArray(z)) {
          var q = Z(z);
          return new b("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected an array."));
        }
        for (var K = 0; K < z.length; K++) {
          var V = x(z, K, M, G, W + "[" + K + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return C(f);
    }
    function y() {
      function x(f, S, I, M, G) {
        var W = f[S];
        if (!i(W)) {
          var z = Z(W);
          return new b("Invalid " + M + " `" + G + "` of type " + ("`" + z + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(x);
    }
    function p() {
      function x(f, S, I, M, G) {
        var W = f[S];
        if (!e.isValidElementType(W)) {
          var z = Z(W);
          return new b("Invalid " + M + " `" + G + "` of type " + ("`" + z + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(x);
    }
    function g(x) {
      function f(S, I, M, G, W) {
        if (!(S[I] instanceof x)) {
          var z = x.name || u, q = se(S[I]);
          return new b("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return C(f);
    }
    function A(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(S, I, M, G, W) {
        for (var z = S[I], q = 0; q < x.length; q++)
          if (v(z, x[q]))
            return null;
        var K = JSON.stringify(x, function(ce, k) {
          var ue = Q(k);
          return ue === "symbol" ? String(k) : k;
        });
        return new b("Invalid " + G + " `" + W + "` of value `" + String(z) + "` " + ("supplied to `" + M + "`, expected one of " + K + "."));
      }
      return C(f);
    }
    function R(x) {
      function f(S, I, M, G, W) {
        if (typeof x != "function")
          return new b("Property `" + W + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var z = S[I], q = Z(z);
        if (q !== "object")
          return new b("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected an object."));
        for (var K in z)
          if (n(z, K)) {
            var V = x(z, K, M, G, W + "." + K, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return C(f);
    }
    function L(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < x.length; f++) {
        var S = x[f];
        if (typeof S != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(S) + " at index " + f + "."
          ), o;
      }
      function I(M, G, W, z, q) {
        for (var K = [], V = 0; V < x.length; V++) {
          var ce = x[V], k = ce(M, G, W, z, q, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && K.push(k.data.expectedType);
        }
        var ue = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new b("Invalid " + z + " `" + q + "` supplied to " + ("`" + W + "`" + ue + "."));
      }
      return C(I);
    }
    function U() {
      function x(f, S, I, M, G) {
        return H(f[S]) ? null : new b("Invalid " + M + " `" + G + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return C(x);
    }
    function P(x, f, S, I, M) {
      return new b(
        (x || "React class") + ": " + f + " type `" + S + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function B(x) {
      function f(S, I, M, G, W) {
        var z = S[I], q = Z(z);
        if (q !== "object")
          return new b("Invalid " + G + " `" + W + "` of type `" + q + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var K in x) {
          var V = x[K];
          if (typeof V != "function")
            return P(M, G, W, K, Q(V));
          var ce = V(z, K, M, G, W + "." + K, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return C(f);
    }
    function E(x) {
      function f(S, I, M, G, W) {
        var z = S[I], q = Z(z);
        if (q !== "object")
          return new b("Invalid " + G + " `" + W + "` of type `" + q + "` " + ("supplied to `" + M + "`, expected `object`."));
        var K = t({}, S[I], x);
        for (var V in K) {
          var ce = x[V];
          if (n(x, V) && typeof ce != "function")
            return P(M, G, W, V, Q(ce));
          if (!ce)
            return new b(
              "Invalid " + G + " `" + W + "` key `" + V + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(S[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var k = ce(z, V, M, G, W + "." + V, r);
          if (k)
            return k;
        }
        return null;
      }
      return C(f);
    }
    function H(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(H);
          if (x === null || i(x))
            return !0;
          var f = c(x);
          if (f) {
            var S = f.call(x), I;
            if (f !== x.entries) {
              for (; !(I = S.next()).done; )
                if (!H(I.value))
                  return !1;
            } else
              for (; !(I = S.next()).done; ) {
                var M = I.value;
                if (M && !H(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(x, f) {
      return x === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function Z(x) {
      var f = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Y(f, x) ? "symbol" : f;
    }
    function Q(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var f = Z(x);
      if (f === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function ae(x) {
      var f = Q(x);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function se(x) {
      return !x.constructor || !x.constructor.name ? u : x.constructor.name;
    }
    return w.checkPropTypes = s, w.resetWarningCache = s.resetWarningCache, w.PropTypes = w, w;
  }, at;
}
var st, sn;
function Ar() {
  if (sn) return st;
  sn = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, st = function() {
    function n(o, i, h, l, d, c) {
      if (c !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    n.isRequired = n;
    function s() {
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
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, st;
}
var cn;
function Rr() {
  if (cn) return Ue.exports;
  if (cn = 1, process.env.NODE_ENV !== "production") {
    var e = wn(), t = !0;
    Ue.exports = /* @__PURE__ */ wr()(e.isElement, t);
  } else
    Ue.exports = /* @__PURE__ */ Ar()();
  return Ue.exports;
}
var Sr = /* @__PURE__ */ Rr();
const T = /* @__PURE__ */ lr(Sr), Rn = {
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
}, Cr = [
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
], Xe = "16px", Pr = (e) => Math.round(e * 96 / 72), _r = (e) => Math.round(e * 72 / 96 * 2) / 2, ls = (e) => {
  const t = Object.values(Rn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Pr(e)}px`;
}, us = (e) => {
  const t = parseInt(e), r = Object.values(Rn).find((n) => n.px === t);
  return r ? r.pt : _r(t);
}, ds = (e) => {
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
}, Or = {
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
}, ln = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Xe,
  headingLevel: "p"
  // Add heading level tracking
}, kr = () => {
  const [e, t] = re(ln), r = Te(), n = _((c, u, w = null) => {
    try {
      const v = window.getSelection();
      if (!v || v.rangeCount === 0)
        return !1;
      const b = v.getRangeAt(0);
      if (!b.toString())
        return t((D) => ({ ...D, [c]: u })), !1;
      try {
        const D = document.createElement("span");
        D.style[c] = u;
        const j = b.extractContents();
        return D.appendChild(j), b.insertNode(D), b.selectNodeContents(D), v.removeAllRanges(), v.addRange(b), t((O) => ({ ...O, [c]: u })), !0;
      } catch {
        if (w) {
          const D = c === "fontSize" ? Or[u] || "3" : u;
          return document.execCommand(w, !1, D), t((j) => ({ ...j, [c]: u })), !0;
        }
        return !1;
      }
    } catch (v) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, v), !1;
    }
  }, []), s = _((c) => n("fontFamily", c, "fontName"), [n]), a = _((c) => n("fontSize", c, "fontSize"), [n]), o = _((c) => {
    t((u) => ({
      ...u,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = _((c) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const w = u.getRangeAt(0), v = w.toString(), C = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!C)
        return !1;
      if (!v) {
        const j = w.startContainer, O = j.nodeType === Node.TEXT_NODE ? j.parentElement : j, y = Ye(O) || Nr();
        return y && (y.style.textAlign = C, o(C)), !0;
      }
      const D = Mr(w);
      if (D.length === 0) {
        const j = document.createElement("p");
        j.style.textAlign = C;
        const O = w.extractContents();
        j.appendChild(O), w.insertNode(j), w.selectNodeContents(j), u.removeAllRanges(), u.addRange(w);
      } else
        D.forEach((j) => {
          j.style.textAlign = C;
        });
      return o(C), !0;
    } catch (u) {
      return console.warn("[useFormatting] Text alignment failed:", u), !1;
    }
  }, [o]), h = _((c, u = null) => {
    try {
      if (c === "undo") {
        r.undo();
        return;
      }
      if (c === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (c === "fontSize") {
        a(u);
        return;
      }
      if (c === "fontName") {
        s(u);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(c)) {
        i(c);
        return;
      }
      switch (document.execCommand(c, !1, u) || console.warn(`[useFormatting] Command "${c}" failed`), c) {
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
        case "justifyLeft":
        case "justifyCenter":
        case "justifyRight":
        case "justifyFull":
        case "fontName":
          break;
        case "formatBlock":
          t((v) => ({ ...v, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (w) {
      console.warn(`[useFormatting] Error executing command "${c}":`, w);
    }
  }, [a, s, i, r]), l = _(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0), w = u.toString();
      let v = Xe, b = "Arial", C = "p", D = "left";
      if (w) {
        const O = u.startContainer, y = O.nodeType === Node.TEXT_NODE ? O.parentElement : O;
        if (y) {
          const p = window.getComputedStyle(y), g = p.fontSize, A = p.fontFamily;
          g && g.endsWith("px") && (v = g), A && A !== "serif" && (b = A.split(",")[0].replace(/['"]/g, "").trim());
          const R = Ye(y);
          if (R) {
            const L = R.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(L) && (C = L);
            const P = window.getComputedStyle(R).textAlign;
            ["left", "center", "right", "justify"].includes(P) && (D = P);
          }
        }
      }
      const j = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: D === "left",
        alignCenter: D === "center",
        alignRight: D === "right",
        alignJustify: D === "justify",
        fontFamily: b,
        fontSize: v,
        headingLevel: C
      };
      t((O) => ({
        ...O,
        ...j
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), d = _(() => {
    t(ln);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: d,
    updateCurrentFormatFromSelection: l
  };
};
function Ye(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const r = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(r))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function Mr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, s = Ye(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), a = Ye(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (s === a && s)
    return [s];
  const o = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (h) => {
        const l = h.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = o.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = o.nextNode();
  return t;
}
function Nr() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), r = document.createElement("p");
    return r.innerHTML = "<br>", t.insertNode(r), t.selectNodeContents(r), t.collapse(!0), e.removeAllRanges(), e.addRange(t), r;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
const Ee = 'page-break, [data-page-break="true"]', Sn = (e) => Re[e] || Re.A4, Lr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Sn(r), s = e.querySelectorAll(Ee), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const o = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((h, l) => {
    const c = h.getBoundingClientRect().top - o.top + i;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: c,
      height: n.height
    });
  }), a;
}, Cn = (e, t = 100, r = ge) => {
  const n = Sn(e), s = gr(r), a = n.height - s, o = t / 100;
  return a / o;
}, Ir = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(Ee);
    if (r.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), s = n.top + n.height / 2;
    for (let a = r.length - 1; a >= 0; a--)
      if (r[a].getBoundingClientRect().top < s)
        return a + 1;
    return 0;
  } catch (r) {
    return console.warn("[getCurrentPage] Failed to calculate page:", r), 0;
  }
}, un = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let r = [], n = [];
  for (const s of t)
    s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true" ? n.length > 0 && (r.push(n), n = []) : n.push(s);
  return n.length > 0 && r.push(n), r.length === 0 && t.length > 0 && r.push(t.filter(
    (s) => !(s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true")
  )), r;
}, Dr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Hr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, jr = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  try {
    const h = Cn(r, n, s) * (t - 1), l = Array.from(e.children);
    let d = 0, c = null;
    for (let u = 0; u < l.length; u++) {
      const w = l[u];
      if (w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true")
        continue;
      const v = Dr(w);
      if (d + v > h) {
        c = w;
        break;
      }
      d += v;
    }
    if (c) {
      const u = document.createElement("page-break");
      if (u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(u, c), a) {
        const w = e.innerHTML;
        a(w);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const u = document.createElement("page-break");
      u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), e.appendChild(u);
      const w = document.createElement("p");
      if (w.innerHTML = "<br>", e.appendChild(w), a) {
        const v = e.innerHTML;
        a(v);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Br = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(Ee));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let d = !1, c = [], u = null;
    if (t === 0) {
      const v = h[0];
      if (!v)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let b = e.firstChild;
      for (; b && b !== v; )
        c.push(b), b = b.nextSibling;
      u = v;
    } else {
      const v = h[t - 1];
      if (!v)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const b = h[t];
      let C = v.nextSibling;
      for (; C && C !== b; )
        c.push(C), C = C.nextSibling;
      u = v;
    }
    if (l && l.rangeCount > 0) {
      const b = l.getRangeAt(0).startContainer;
      for (const C of c)
        if (C.contains(b) || C === b) {
          d = !0;
          break;
        }
    }
    if (u && u.parentNode && u.remove(), c.forEach((v) => {
      v.parentNode && v.remove();
    }), e.querySelectorAll(Ee).forEach((v, b) => {
      v.setAttribute("data-page-number", String(b + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const v = e.innerHTML;
      n(v);
    }
    return s && setTimeout(() => {
      s(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, zr = (e) => {
  if (e)
    try {
      e.querySelectorAll(Ee).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, $r = (e, t, r, n, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), zr(t), r) {
      const a = t.innerHTML;
      r(a);
    }
    return n && setTimeout(() => {
      n(), s && setTimeout(() => {
        s();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, Ur = 200, Fr = 50, dn = 3, Gr = 20, Pn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Wr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = Pn(a);
    if (o < 1)
      continue;
    if (r + o > t)
      return n === null ? s > 0 ? {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: r
      } : null : {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: r
      };
    r += o, n = a;
  }
  return null;
}, qr = (e, t, r, n, s, a, o, i) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const h = Cn(t, r, n);
    let l = un(e), d = !1, c = 0;
    for (let u = 0; u < l.length && c < dn; u++) {
      const w = l[u], v = Wr(w, h);
      if (v && v.overflowIndex > 0) {
        let b = 0;
        for (let O = 0; O < w.length; O++) {
          const y = w[O];
          y && y.getBoundingClientRect && (b += Pn(y));
        }
        if (b - h < Gr)
          continue;
        const D = u + 2;
        Hr(v.overflowElement, D) && (d = !0, c++, l = un(e));
      }
    }
    if (d) {
      if (s) {
        const u = e.innerHTML;
        s(u);
      }
      setTimeout(() => {
        a && a(), c >= dn && i && setTimeout(() => {
          o.current || i();
        }, 100);
      }, Fr);
    }
    return d;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    o.current = !1;
  }
}, Zr = (e, t, r = Ur) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, Yr = 400, _n = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(Ee)[t - 1];
        a && a.nextSibling && (r = a.nextSibling, n = 0);
      }
      if (r) {
        const s = document.createRange(), a = window.getSelection();
        r.nodeType === Node.TEXT_NODE ? s.setStart(r, n) : s.setStart(r, 0), s.collapse(!0), a.removeAllRanges(), a.addRange(s);
      }
    } catch (r) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", r);
    }
  }
}, Vr = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (r === 0)
      s = t;
    else {
      const o = t.querySelectorAll(Ee)[r - 1];
      if (o)
        s = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", r);
        return;
      }
    }
    if (s) {
      const a = s.getBoundingClientRect(), o = e.getBoundingClientRect(), i = e.scrollTop + (a.top - o.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(r) : _n(t, r);
      }, Yr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, Kr = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, Xr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const s = e.querySelectorAll(Ee);
  for (const d of s)
    if (r.comparePoint(d, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(r.startContainer, r.startOffset);
  const i = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), h = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: h
  };
}, Jr = 300, Qr = (e, t, r = 100, n = "NARROW") => {
  const s = Te(), a = ee(null), o = ee(null), i = ee(e), h = ee(r), l = ee(n), d = ee(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    h.current = r;
  }, [r]), oe(() => {
    l.current = n;
  }, [n]), oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = _((g = {}) => t?.current ? Lr(t.current, g) : [], [t]), u = _((g = {}) => {
    const A = c(g);
    return s.updatePageBoundaries(A), A;
  }, [c, s]), w = _((g = {}) => {
    const A = typeof g.delay == "number" ? g.delay : Jr;
    Kr(u, a, g, A);
  }, [u]), v = _(() => {
    t?.current && qr(
      t.current,
      i.current,
      h.current,
      l.current,
      s.updateContinuousContent,
      u,
      d,
      v
    );
  }, [t, s, u]), b = _((g) => {
    Zr(v, o, g);
  }, [v]), C = _((g) => !g?.current || !t?.current ? 0 : Ir(g.current, t.current), [t]), D = _((g) => {
    t?.current && _n(t.current, g);
  }, [t]), j = _((g, A) => {
    if (!A?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Vr(A.current, t.current, g, D);
  }, [t, D]), O = _(async (g) => t?.current ? jr(
    t.current,
    g,
    i.current,
    h.current,
    l.current,
    s.updateContinuousContent,
    u
  ) : !1, [t, s, u]), y = _((g) => t?.current ? Br(
    t.current,
    g,
    c,
    s.updateContinuousContent,
    u,
    D,
    v
  ) : !1, [t, c, s, u, D, v]), p = _((g) => t?.current ? $r(
    g,
    t.current,
    s.updateContinuousContent,
    u,
    v
  ) : !1, [t, s, u, v]);
  return oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), be(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: w,
    updateBoundaries: u,
    getCurrentPage: C,
    scrollToPage: j,
    positionCursorAtPage: D,
    checkAndReflow: v,
    triggerAutoReflow: b,
    removePageAndContent: y,
    removePageBreak: p,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    w,
    u,
    C,
    j,
    D,
    v,
    b,
    y,
    p,
    O
  ]);
}, Se = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, $ = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function fs({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = Se
}) {
  const h = n - t, l = s - r;
  let d = a, c = o;
  switch (e) {
    case $.TOP_LEFT:
      d = Math.max(i.minWidth, a - h), c = Math.max(i.minHeight, o - l);
      break;
    case $.TOP_RIGHT:
      d = Math.max(i.minWidth, a + h), c = Math.max(i.minHeight, o - l);
      break;
    case $.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - h), c = Math.max(i.minHeight, o + l);
      break;
    case $.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + h), c = Math.max(i.minHeight, o + l);
      break;
    case $.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case $.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case $.LEFT:
      d = Math.max(i.minWidth, a - h);
      break;
    case $.RIGHT:
      d = Math.max(i.minWidth, a + h);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      $.TOP_LEFT,
      $.TOP_RIGHT,
      $.BOTTOM_LEFT,
      $.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [$.TOP, $.BOTTOM].includes(e) ? d = c * u : [$.LEFT, $.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function me(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ps(e) {
  return me(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function gs(e, { width: t, height: r }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function eo(e, t = Se) {
  if (!me(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values($).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = to(a), o.style.pointerEvents = "all", On(o, a, n.width, n.height), r.appendChild(o);
  }), r;
}
function to(e) {
  switch (e) {
    case $.TOP_LEFT:
    case $.BOTTOM_RIGHT:
      return "nwse-resize";
    case $.TOP_RIGHT:
    case $.BOTTOM_LEFT:
      return "nesw-resize";
    case $.TOP:
    case $.BOTTOM:
      return "ns-resize";
    case $.LEFT:
    case $.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function On(e, t, r, n) {
  switch (t) {
    case $.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case $.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case $.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case $.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case $.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case $.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case $.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case $.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function yt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    On(s, a, r.width, r.height);
  });
}
function it(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const no = "html-editor-storage", ro = 1, fe = "images";
function oo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(no, ro);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(fe) || s.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function ao(e) {
  return new Promise((t, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const s = new FileReader();
    s.onload = async (a) => {
      const o = a.target.result, h = o.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Le(), d = `editor-image-${oo()}`, u = l.transaction([fe], "readwrite").objectStore(fe), w = {
          key: d,
          dataUrl: o,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, v = u.add(w);
        v.onsuccess = () => {
          l.close(), t(d);
        }, v.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, s.onerror = () => {
      r(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function so(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const o = t.transaction([fe], "readonly").objectStore(fe).get(e);
      o.onsuccess = () => {
        t.close();
        const i = o.result;
        r(i ? i.dataUrl : null);
      }, o.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function io(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const o = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
      o.onsuccess = () => {
        t.close(), r();
      }, o.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function hs() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const a = e.transaction([fe], "readwrite").objectStore(fe).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), r(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function ms() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const a = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), r(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const kn = [
  "P",
  "DIV",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "UL",
  "OL",
  "LI",
  "TABLE",
  "TBODY",
  "TR",
  "TD",
  "TH",
  "THEAD",
  "TFOOT",
  "BLOCKQUOTE",
  "PRE",
  "HR",
  "FIGURE",
  "FIGCAPTION",
  "PAGE-BREAK"
], co = [
  "SPAN",
  "STRONG",
  "EM",
  "B",
  "I",
  "U",
  "S",
  "STRIKE",
  "DEL",
  "INS",
  "SUB",
  "SUP",
  "MARK",
  "SMALL",
  "CODE",
  "KBD",
  "SAMP",
  "VAR",
  "A",
  "ABBR",
  "CITE",
  "DFN",
  "TIME"
], lo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function uo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Mn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function qe(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, ke(r) || "<p><br></p>";
}
function fo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function po(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => kn.includes(r.tagName));
}
function go(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const s = n;
      kn.includes(s.tagName) ? t.push(s.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function ke(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${uo(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), h = Mn(a);
      if (o === "DIV") {
        const l = ke(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        po(a) ? t.push(go(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = fo(a);
        t.push(`<${i}${h}>${l}</${i}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(ho(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(mo(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = ke(a);
        t.push(`<blockquote${h}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (co.includes(o))
        t.push(a.outerHTML);
      else if (o === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (o === "HR")
        t.push(a.outerHTML);
      else if (o === "FIGURE")
        t.push(a.outerHTML);
      else if (lo.includes(o))
        t.push(a.outerHTML);
      else {
        const l = ke(a);
        t.push(`<${i}${h}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function ho(e) {
  const t = e.tagName.toLowerCase(), r = Mn(e), n = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      n.push(s.outerHTML);
    else {
      const a = ke(s);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function mo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), fn = (e) => {
  const t = bo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Eo = (e) => {
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
var To = {
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
const vo = Tt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...i
  }, h) => lt(
    "svg",
    {
      ref: h,
      ...To,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Nn("lucide", s),
      ...!a && !Eo(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...o.map(([l, d]) => lt(l, d)),
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
const J = (e, t) => {
  const r = Tt(
    ({ className: n, ...s }, a) => lt(vo, {
      ref: a,
      iconNode: t,
      className: Nn(
        `lucide-${yo(fn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = fn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], wo = J("bold", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ro = J("chevron-left", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Co = J("chevron-right", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], _o = J("file-check", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ve = J("file-text", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Mo = J("hash", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Lo = J("heading-1", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Do = J("heading-2", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], jo = J("heading-3", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], zo = J("image-upscale", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Uo = J("image", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Go = J("italic", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], qo = J("link", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Yo = J("list-indent-decrease", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Ko = J("list-indent-increase", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Jo = J("list-ordered", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ln = J("list", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ta = J("plus", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ra = J("redo", na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], aa = J("scaling", oa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ia = J("settings", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], la = J("strikethrough", ca);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], da = J("table", ua);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], At = J("text-align-center", fa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Rt = J("text-align-end", pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ha = J("text-align-justify", ga);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], St = J("text-align-start", ma);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ba = J("trash-2", ya);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ta = J("underline", Ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], xa = J("undo", va);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Aa = J("x", wa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Sa = J("zoom-in", Ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Pa = J("zoom-out", Ca), pn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const s = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(s).map((a, o) => {
    const i = parseInt(a.tagName.charAt(1)), h = a.textContent.trim();
    return h ? {
      id: `${r}heading-${o}`,
      level: i,
      text: h,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, _a = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Oa = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const s = xn(), { pages: a, activePage: o, continuousContent: i } = s, { wordCount: h, outline: l } = be(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: pn(i, 1, "continuous-")
      };
    let c = 0;
    const u = [];
    return a.forEach((w, v) => {
      c += _a(w.content), u.push(...pn(w.content, v + 1, `page-${v}-`));
    }), { wordCount: c, outline: u };
  }, [a, r, n, i]), d = n !== void 0 ? n : a.length;
  return /* @__PURE__ */ m.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ m.jsx(Ve, { size: 18 }),
            /* @__PURE__ */ m.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ m.jsx(Co, { size: 16 }) : /* @__PURE__ */ m.jsx(Ro, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(_o, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Mo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Ve, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsxs("h3", { children: [
              /* @__PURE__ */ m.jsx(Ln, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((c) => {
              const u = c.level === 1 ? Lo : c.level === 2 ? Do : jo;
              return /* @__PURE__ */ m.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${c.level}`,
                  style: { marginLeft: `${(c.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ m.jsx(u, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ m.jsx("span", { className: "outline-text", children: c.text }),
                    /* @__PURE__ */ m.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      c.page
                    ] })
                  ]
                },
                c.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class ka {
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
  _format(t, r, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${r}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, r) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, r) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, r) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, r) {
  }
}
const gn = new ka("Editor"), In = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Dn = 32;
function Hn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Dn}px`, e.dataset.indentLevel = String(n));
}
function Ma(e, t) {
  Hn(e, t);
}
function Na(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && In.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function La() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), r = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((o) => {
    document.createRange().selectNodeContents(o), t.intersectsNode(o) && r.add(o);
  }), r.size === 0 && n.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let l = i.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && In.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(r).filter((o) => {
    let i = o.parentElement;
    for (; i; ) {
      if (r.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function Ia(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Dn}px`, e.dataset.indentLevel = String(r));
    return;
  }
  if (e.innerHTML.startsWith("&nbsp;&nbsp;&nbsp;&nbsp;")) {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
    return;
  }
  try {
    const t = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let r = t.nextNode();
    for (; r; ) {
      const n = r.textContent;
      if (n.startsWith("    ")) {
        r.textContent = n.substring(4);
        break;
      }
      r = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function bt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = La();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const o = Na(n.startContainer);
    if (!o) return !1;
    r = [o];
  }
  const s = r[0], a = r[r.length - 1];
  r.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      Ma(o, e);
      return;
    }
    e ? Ia(o) : Hn(o, !1);
  });
  try {
    const o = document.createRange(), i = (c) => c.nodeType === Node.TEXT_NODE ? c : document.createTreeWalker(
      c,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), h = (c) => {
      if (c.nodeType === Node.TEXT_NODE)
        return c;
      const u = document.createTreeWalker(
        c,
        NodeFilter.SHOW_TEXT,
        null
      );
      let w = null, v = u.nextNode();
      for (; v; )
        w = v, v = u.nextNode();
      return w;
    }, l = i(s);
    l ? o.setStart(l, 0) : o.setStart(s, 0);
    const d = h(a);
    d ? o.setEnd(d, d.length) : o.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(o);
  } catch {
    try {
      const i = document.createRange();
      i.setStartBefore(s), i.setEndAfter(a), t.removeAllRanges(), t.addRange(i);
    } catch (i) {
      console.warn("Could not restore selection after indentation:", i);
    }
  }
  return !0;
}
function Da(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && bt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Ha = [
  // English Fonts
  { value: "Segoe UI", label: "Segoe UI" },
  { value: "Arial", label: "Arial" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Verdana", label: "Verdana" },
  // Sinhala Fonts
  { value: "Noto Sans Sinhala", label: "Noto Sans Sinhala" },
  { value: "Iskoola Pota", label: "Iskoola Pota" },
  // Tamil Fonts
  { value: "Noto Sans Tamil", label: "Noto Sans Tamil" },
  // Unicode Fonts
  { value: "Noto Sans", label: "Noto Sans" }
], ja = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Ba = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Ct = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: s = !1
}) => {
  const a = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (l.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const c = await ao(l), u = await so(c);
      if (u) {
        const v = `<img src="${u}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, v), gn.info("Image inserted", { key: c });
      }
      const w = document.getElementById("image-upload");
      w && (w.value = "");
    } catch (d) {
      gn.error("Error uploading image", d);
    }
  }, o = (l, d, c, u) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[d] ? "active" : "",
      title: u,
      children: /* @__PURE__ */ m.jsx(c, { size: 16 })
    },
    l
  ), i = (l, d, c, u = !1) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: l,
      disabled: u,
      title: c,
      style: { opacity: u ? 0.5 : 1 },
      children: /* @__PURE__ */ m.jsx(d, { size: 16 })
    },
    c
  ), h = () => /* @__PURE__ */ m.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ m.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), xa, "Undo", !n),
    i(() => t("redo"), ra, "Redo", !s),
    h(),
    o("bold", "bold", wo, "Bold"),
    o("italic", "italic", Go, "Italic"),
    o("underline", "underline", Ta, "Underline"),
    o("strikethrough", "strikethrough", la, "Strikethrough"),
    h(),
    o("justifyLeft", "alignLeft", St, "Align Left"),
    o("justifyCenter", "alignCenter", At, "Align Center"),
    o("justifyRight", "alignRight", Rt, "Align Right"),
    o("justifyFull", "alignJustify", ha, "Justify"),
    h(),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Ha.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: Cr.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: ja.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    h(),
    i(() => t("insertUnorderedList"), Ln, "Bullet List"),
    i(() => t("insertOrderedList"), Jo, "Numbered List"),
    h(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          bt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ m.jsx(Ko, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          bt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ m.jsx(Yo, { size: 16 })
      }
    ),
    h(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ m.jsx(qo, { size: 16 })
      }
    ),
    i(() => t("insertHTML", Ba), da, "Insert Table"),
    r && i(r, Ve, "Insert Page Break"),
    h(),
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && a(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ m.jsx(Uo, { size: 16 })
      }
    )
  ] });
};
Ct.propTypes = {
  currentFormat: T.shape({
    bold: T.bool,
    italic: T.bool,
    underline: T.bool,
    strikethrough: T.bool,
    alignLeft: T.bool,
    alignCenter: T.bool,
    alignRight: T.bool,
    alignJustify: T.bool,
    fontFamily: T.string,
    fontSize: T.string,
    headingLevel: T.string
  }).isRequired,
  onFormatText: T.func.isRequired,
  onAddPageBreak: T.func,
  canUndo: T.bool,
  canRedo: T.bool
};
Ct.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function za(e) {
  return !e || typeof e != "string" ? e : qe(e);
}
function $a(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = za(r) : r = Ua(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function Ua(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => Fa(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function Fa(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ve = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && ve(e.parentElement) : !1, Pt = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: s,
  onClick: a,
  onScroll: o,
  onPaste: i,
  onRemovePageBreak: h,
  zoomLevel: l = 100,
  pageMargins: d = ge
}) => {
  const c = be(() => yn(d), [d]), u = l / 100, w = _((y, p) => {
    if (!y) return !1;
    const g = y.getBoundingClientRect(), A = p - g.top;
    return A < c.top || A > g.height - c.bottom;
  }, [c.top, c.bottom]), v = _((y, p) => {
    p.preventDefault();
    const g = y.getBoundingClientRect(), A = p.clientX - g.left, R = p.clientY - g.top, L = g.width - 40, U = -12, P = g.width - 20;
    A >= L && A <= P && R >= U && R <= 8 && h && h(y);
  }, [h]), b = _((y) => {
    y.preventDefault();
    const p = t.current.getBoundingClientRect();
    if (y.clientY - p.top < c.top) {
      const A = t.current.firstElementChild;
      if (A && A.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), L = window.getSelection();
        R.setStart(A, 0), R.collapse(!0), L.removeAllRanges(), L.addRange(R);
      }
    } else {
      const A = t.current.lastElementChild;
      if (A && A.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), L = window.getSelection();
        R.selectNodeContents(A), R.collapse(!1), L.removeAllRanges(), L.addRange(R);
      }
    }
  }, [t, c.top]), C = _((y) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const g = p.getRangeAt(0), { startContainer: A, endContainer: R } = g;
    if ((ve(A) || ve(R)) && (y.key.length === 1 || y.key === "Enter" || y.key === " "))
      return y.preventDefault(), !1;
    if (Da(y))
      return n && n(), !1;
    if ((y.key === "Backspace" || y.key === "Delete") && (ve(A) || ve(R)))
      return y.preventDefault(), !1;
    s && s(y);
  }, [s, n]), D = _((y) => {
    if (!t.current) return;
    const p = y.target;
    if (ve(p)) {
      v(p, y);
      return;
    }
    if (w(t.current, y.clientY)) {
      b(y);
      return;
    }
    a && a(y);
  }, [t, a, v, b, w]), j = _((y) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const g = p.getRangeAt(0), { startContainer: A } = g;
    if (ve(A))
      return y.preventDefault(), !1;
  }, []), O = _((y) => {
    const p = $a(y);
    i && i(y, p);
  }, [i]);
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${e.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${u})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            backgroundColor: "white",
            padding: `${c.top}px ${c.right}px ${c.bottom}px ${c.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Xe,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: C,
          onBeforeInput: j,
          onClick: D,
          onScroll: o,
          onPaste: O,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Pt.propTypes = {
  dimensions: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired,
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: T.func.isRequired,
  onContentChange: T.func,
  onKeyDown: T.func,
  onClick: T.func,
  onScroll: T.func,
  onPaste: T.func,
  onRemovePageBreak: T.func,
  zoomLevel: T.number,
  pageMargins: T.string
};
Pt.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const Ga = ir(Pt), _t = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = ge,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: i,
  onAddPage: h,
  onDeletePage: l,
  onPageSizeChange: d,
  onPageMarginsChange: c,
  onZoomIn: u,
  onZoomOut: w,
  onZoomReset: v
} = {}) => {
  const b = Math.max(e?.length || 0, 1), C = (p) => {
    i && i(p);
  }, D = () => {
    h && h();
  }, j = (p) => {
    if (b <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(p);
  }, O = (p) => {
    d && d(p);
  }, y = (p) => {
    c && c(p);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ m.jsx(ia, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (p) => O(p.target.value),
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ m.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ m.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (p) => y(p.target.value),
              children: hr().map((p) => /* @__PURE__ */ m.jsx("option", { value: p, children: mr(p) }, p))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: w,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ m.jsx(Pa, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsxs("span", { className: "zoom-level-display", children: [
        s,
        "%"
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: u,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ m.jsx(Sa, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: v,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "page-list", children: e.map((p, g) => /* @__PURE__ */ m.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${g === t ? "active" : ""}`,
          onClick: () => C(g),
          "aria-label": `Go to page ${g + 1}`,
          "aria-current": g === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ m.jsx(Ve, { size: 14 }),
            /* @__PURE__ */ m.jsxs("span", { children: [
              "Page ",
              g + 1
            ] })
          ]
        }
      ),
      b > 1 && /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (A) => {
            A.stopPropagation(), j(g);
          },
          "aria-label": `Delete page ${g + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ m.jsx(Aa, { size: 14 })
        }
      )
    ] }, p.id || `page-${g}`)) }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: D,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ m.jsx(ta, { size: 16 }),
          /* @__PURE__ */ m.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
_t.propTypes = {
  pageBoundaries: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      pageNumber: T.number.isRequired,
      top: T.number,
      height: T.number
    })
  ),
  activePage: T.number,
  pageSize: T.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: T.string,
  zoomLevel: T.number,
  canZoomIn: T.bool,
  canZoomOut: T.bool,
  onNavigate: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onPageMarginsChange: T.func,
  onZoomIn: T.func,
  onZoomOut: T.func,
  onZoomReset: T.func
};
_t.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: ge,
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
const Wa = Ke.memo(_t);
function qa(e) {
  switch (e) {
    case $.TOP_LEFT:
    case $.BOTTOM_RIGHT:
      return "nwse-resize";
    case $.TOP_RIGHT:
    case $.BOTTOM_LEFT:
      return "nesw-resize";
    case $.TOP:
    case $.BOTTOM:
      return "ns-resize";
    case $.LEFT:
    case $.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Za({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = Se
}) {
  const h = n - t, l = s - r;
  let d = a, c = o;
  switch (e) {
    case $.TOP_LEFT:
      d = Math.max(i.minWidth, a - h), c = Math.max(i.minHeight, o - l);
      break;
    case $.TOP_RIGHT:
      d = Math.max(i.minWidth, a + h), c = Math.max(i.minHeight, o - l);
      break;
    case $.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - h), c = Math.max(i.minHeight, o + l);
      break;
    case $.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + h), c = Math.max(i.minHeight, o + l);
      break;
    case $.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case $.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case $.LEFT:
      d = Math.max(i.minWidth, a - h);
      break;
    case $.RIGHT:
      d = Math.max(i.minWidth, a + h);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      $.TOP_LEFT,
      $.TOP_RIGHT,
      $.BOTTOM_LEFT,
      $.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [$.TOP, $.BOTTOM].includes(e) ? d = c * u : [$.LEFT, $.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function jn(e, { width: t, height: r }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function Ya(e, t, r) {
  jn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function Va(e, t, r, n) {
  const { ctrlKey: s, metaKey: a, shiftKey: o, key: i } = e, h = s || a, l = r.offsetWidth, d = r.offsetHeight, u = {
    // Increase width
    ">": h && o ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: d
    }) : null,
    // Decrease width
    "<": h && o ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: d
    }) : null,
    // Increase height
    "+": h && o ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": h && o ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: h && !o ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (u) {
    e.preventDefault();
    const w = u();
    return Ya(t, r, w), !0;
  }
  return !1;
}
const Ot = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: s = Se
}) => {
  const a = ee(null), o = ee(null), i = ee(null), h = ee(null), l = ee(s), d = ee(!1), c = Te();
  oe(() => {
    l.current = s;
  }, [s]);
  const u = _((y) => {
    if (!me(y)) return;
    a.current && (it(a.current), a.current = null), y.classList.add("selected");
    const p = eo(y, l.current);
    p && (a.current = p, o.current = y, document.body.appendChild(p), p.querySelectorAll(".resize-handler").forEach((A) => {
      A.addEventListener("mousedown", v);
    }), r && r(y));
  }, [r]), w = _(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (it(a.current), a.current = null), i.current = null, h.current = null, d.current = !1, n && n();
  }, [n]), v = _((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current) return;
    const p = y.currentTarget.dataset.handler, g = o.current.getBoundingClientRect(), A = window.pageYOffset || document.documentElement.scrollTop, R = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: y.clientX - g.left - R,
      offsetY: y.clientY - g.top - A
    }, h.current = p, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = qa(p), document.addEventListener("mousemove", b), document.addEventListener("mouseup", C);
  }, []), b = _((y) => {
    if (!d.current || !o.current || !i.current || !h.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: p, y: g, width: A, height: R } = i.current, L = h.current, U = y.clientX, P = y.clientY, B = Za({
      handler: L,
      startX: p,
      startY: g,
      currentX: U,
      currentY: P,
      startWidth: A,
      startHeight: R,
      options: l.current
    });
    jn(o.current, B), a.current && yt(a.current, o.current);
  }, []), C = _((y) => {
    if (d.current) {
      if (y.preventDefault(), y.stopPropagation(), o.current && i.current) {
        const p = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, g = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (p.width !== g.width || p.height !== g.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: g } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: p } }
        );
      }
      if (i.current = null, h.current = null, d.current = !1, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const p = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(p), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), D = _((y) => {
    a.current && !a.current.contains(y.target) && w();
    const p = y.target;
    if (me(p)) {
      if (p === o.current)
        return;
      u(p);
    }
  }, [u, w]), j = _((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current && !d.current) {
      y.preventDefault();
      const p = o.current;
      if (p.parentNode) {
        p.parentNode.removeChild(p), w();
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(g);
      }
    }
    y.key === "Escape" && o.current && w(), o.current && !d.current && Va(y, e, o.current, l.current);
  }, [e, w]), O = _(() => {
    a.current && o.current && yt(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const p = e.current.closest(".editor-viewport");
    return p && (p.addEventListener("scroll", O), window.addEventListener("scroll", O)), () => {
      p && p.removeEventListener("scroll", O), window.removeEventListener("scroll", O);
    };
  }, [e, O]), oe(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", D), y.addEventListener("keydown", j), window.addEventListener("resize", O), () => {
      y.removeEventListener("click", D), y.removeEventListener("keydown", j), window.removeEventListener("resize", O), d.current && (document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && it(a.current);
    };
  }, [e, D, j, O, b, C]), oe(() => {
    if (!e.current) return;
    const y = new MutationObserver((p) => {
      p.forEach((g) => {
        g.type === "childList" && (g.removedNodes.forEach((A) => {
          A.nodeType === Node.ELEMENT_NODE && me(A) && A === o.current && w();
        }), g.addedNodes.forEach((A) => {
          if (A.nodeType !== Node.ELEMENT_NODE) return;
          if (me(A)) {
            setTimeout(() => u(A), 50);
            return;
          }
          const R = A.querySelectorAll?.("img") || [];
          R.length > 0 && setTimeout(() => u(R[0]), 50);
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, w, u]), null;
};
Ot.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: T.func,
  onImageSelect: T.func,
  onImageDeselect: T.func,
  resizeOptions: T.shape({
    minWidth: T.number,
    minHeight: T.number,
    maxWidth: T.number,
    maxHeight: T.number,
    aspectRatio: T.bool,
    preserveAspectRatio: T.bool,
    defaultWidth: T.number,
    defaultHeight: T.number
  })
};
Ot.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Se
};
const kt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, i] = re({ top: 0, left: 0 }), [h, l] = re(!1), [d, c] = re("top"), [u, w] = re(a), v = ee(null), b = ee(null), C = Te(), D = (E) => {
    if (!E)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (Y) => setTimeout(Y, 16))(() => {
      const Y = document.querySelector(".image-resize-overlay");
      Y && yt(Y, E);
    });
  }, j = (E) => {
    if (!E) return null;
    const H = window.getComputedStyle(E);
    return {
      float: H.float || "none",
      margin: E.style.margin || "",
      display: H.display || "inline",
      width: E.style.width || E.width || "",
      height: E.style.height || E.height || "",
      aspectRatio: u
    };
  }, O = _(() => {
    if (!e) return "left";
    const E = window.getComputedStyle(e);
    return E.float === "right" ? "right" : E.float === "left" ? "left" : E.display === "block" && E.margin.includes("auto") ? "center" : "left";
  }, [e]), [y, p] = re("left");
  oe(() => {
    e && p(O());
  }, [e, O]);
  const g = _(() => {
    if (!e || !v.current) return;
    const E = e.getBoundingClientRect(), H = v.current.getBoundingClientRect(), Y = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, Z = E.bottom >= 0 && E.top <= Y.height && E.right >= 0 && E.left <= Y.width;
    let Q = "top", ae = 0, se = 0;
    if (Z) {
      const M = E.top - H.height - 10, G = Y.height - E.bottom - H.height - 10;
      G > M && G > 0 ? (Q = "bottom", ae = E.bottom + 10) : (Q = "top", ae = E.top - H.height - 10);
    } else
      Q = "top", ae = 10;
    se = E.left + E.width / 2 - H.width / 2;
    const x = window.innerWidth, f = window.innerHeight;
    let S = Math.max(10, Math.min(se, x - H.width - 10)), I = Math.max(10, Math.min(ae, f - H.height - 10));
    i({ top: I, left: S }), c(Q), l(!0);
  }, [e]);
  hn(() => {
    g();
    const E = () => {
      g();
    }, H = b.current;
    return H && H.addEventListener("scroll", E), window.addEventListener("scroll", E), window.addEventListener("resize", E), () => {
      H && H.removeEventListener("scroll", E), window.removeEventListener("scroll", E), window.removeEventListener("resize", E), l(!1);
    };
  }, [e, g]), oe(() => {
    const E = (H) => {
      v.current && !v.current.contains(H.target) && H.target !== e && s();
    };
    return document.addEventListener("mousedown", E), () => {
      document.removeEventListener("mousedown", E);
    };
  }, [e, s]);
  const A = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, R = (E) => {
    if (e && A[E]) {
      const H = j(e), Y = y, Z = A[E];
      e.style.float = Z.float, e.style.margin = Z.margin, e.style.display = Z.display, p(E), D(e);
      const Q = j(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: E, state: Q } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: Y, state: H } }
      ), t && t(E);
    }
  }, L = () => {
    if (e && e.parentNode) {
      const E = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      C.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: E } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, U = () => {
    const E = u, H = !u;
    w(H), C.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: H } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: E } }
    ), r && r(H);
  }, P = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (E) => ({
    ...P,
    background: E ? "#007bff" : "transparent",
    color: E ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : mn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: v,
        className: "image-tooltip-menu",
        "data-menu-position": d,
        "aria-hidden": !h,
        style: {
          position: "fixed",
          top: `${o.top}px`,
          left: `${o.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: h ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: h ? 1 : 0,
          visibility: h ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${u ? "" : "active"}`,
              onClick: U,
              title: `Toggle aspect ratio preservation (currently ${u ? "ON" : "OFF"})`,
              children: u ? /* @__PURE__ */ m.jsx(aa, { size: 14 }) : /* @__PURE__ */ m.jsx(zo, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => R("left"),
              title: "Align Left",
              style: B(y === "left"),
              children: /* @__PURE__ */ m.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => R("center"),
              title: "Align Center",
              style: B(y === "center"),
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => R("right"),
              title: "Align Right",
              style: B(y === "right"),
              children: /* @__PURE__ */ m.jsx(Rt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: L,
              title: "Delete Image",
              style: {
                background: "transparent",
                color: "#dc3545",
                border: "1px solid #dc3545",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ m.jsx(ba, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
kt.propTypes = {
  imageElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onAspectRatioToggle: T.func,
  onDelete: T.func,
  onClose: T.func.isRequired,
  initialPreserveAspectRatio: T.bool
};
kt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Je = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, le = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ye(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function Me(e) {
  if (!ye(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, s = [], a = e.querySelector("colgroup"), o = a ? a.querySelectorAll("col") : [];
  if (o.length >= n)
    for (let h = 0; h < n; h++) {
      const l = o[h], d = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      s.push(d || 100);
    }
  else if (r.length > 0) {
    const h = r[0];
    for (let l = 0; l < h.cells.length; l++) {
      const d = h.cells[l];
      s.push(d.offsetWidth);
    }
  }
  const i = r.map((h) => (h.style.height ? parseInt(h.style.height, 10) : null) || h.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: n,
    rows: r.length,
    columnWidths: s,
    rowHeights: i,
    rect: t
  };
}
function Ka({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: s = Je
}) {
  const a = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, o = (i, h, l, d, c) => {
    h >= 0 && h < i.length && (i[h] = Math.max(d, Math.min(c, i[h] + l)));
  };
  switch (e) {
    case le.COLUMN:
      o(a.columnWidths, t, r, s.minColumnWidth, s.maxColumnWidth), a.tableWidth = n.width;
      break;
    case le.ROW:
      o(a.rowHeights, t, r, s.minRowHeight, s.maxRowHeight), a.tableHeight = n.height;
      break;
    case le.TABLE_BOTTOM:
      o(a.rowHeights, n.rows - 1, r, s.minRowHeight, s.maxRowHeight);
      break;
    case le.TABLE_RIGHT:
      o(a.columnWidths, n.columns - 1, r, s.minColumnWidth, s.maxColumnWidth);
      break;
  }
  return a;
}
function Mt(e) {
  if (!ye(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const r = t[0].cells.length;
  let n = e.querySelector("colgroup");
  n || (n = document.createElement("colgroup"), e.insertBefore(n, e.firstChild));
  const s = n.querySelectorAll("col"), a = s.length;
  if (a < r)
    for (let o = a; o < r; o++) {
      const i = document.createElement("col");
      n.appendChild(i);
    }
  else if (a > r)
    for (let o = a - 1; o >= r; o--)
      n.removeChild(s[o]);
}
function Xa(e, t, r) {
  if (!ye(e)) return;
  Mt(e);
  const { columnWidths: n, rowHeights: s, tableWidth: a, tableHeight: o } = t, i = n ? n.reduce((l, d) => l + d, 0) : 0, h = s ? s.reduce((l, d) => l + d, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : i > 0 && (e.style.width = `${i}px`), o !== void 0 ? e.style.height = `${o}px` : h > 0 && (e.style.height = `${h}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((c, u) => {
      u < n.length && (c.style.width = `${n[u]}px`);
    }), e.style.width = `${i}px`;
  }
  s && s.length > 0 && (Array.from(e.rows).forEach((d, c) => {
    c < s.length && (d.style.height = `${s[c]}px`);
  }), e.style.height = `${h}px`), e.offsetHeight;
}
function Ja(e, t = Je) {
  if (!ye(e)) return null;
  Mt(e);
  const r = Me(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const s = e.getBoundingClientRect();
  n.style.top = `${s.top}px`, n.style.left = `${s.left}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const h = Bn(i, r, s, e);
    n.appendChild(h);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const h = zn(i, r, s, e);
    n.appendChild(h);
  }
  const a = $n(r, s);
  n.appendChild(a);
  const o = Un(r, s);
  return n.appendChild(o), n;
}
function Bn(e, t, r, n) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-column-resize-handler", s.dataset.type = le.COLUMN, s.dataset.index = e, s.style.position = "absolute", s.style.width = "4px", s.style.height = `${r.height}px`, s.style.cursor = "col-resize", s.style.pointerEvents = "all", Fn(s, e, t, r, n), s;
}
function zn(e, t, r, n) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-row-resize-handler", s.dataset.type = le.ROW, s.dataset.index = e, s.style.position = "absolute", s.style.width = `${r.width}px`, s.style.height = "4px", s.style.cursor = "row-resize", s.style.pointerEvents = "all", Gn(s, e, t, r, n), s;
}
function $n(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Wn(r, e, t), r;
}
function Un(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", qn(r, e, t), r;
}
function Et(e, t) {
  if (!e || !t) return;
  Mt(t);
  const r = Me(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const s = e.querySelectorAll(".table-column-resize-handler"), a = e.querySelectorAll(".table-row-resize-handler"), o = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (s.length !== r.columns - 1 || a.length !== r.rows - 1 || !o || !i) {
    e.innerHTML = "";
    for (let c = 0; c < r.columns - 1; c++) {
      const u = Bn(c, r, n, t);
      e.appendChild(u);
    }
    for (let c = 0; c < r.rows - 1; c++) {
      const u = zn(c, r, n, t);
      e.appendChild(u);
    }
    const l = $n(r, n);
    e.appendChild(l);
    const d = Un(r, n);
    e.appendChild(d);
  } else
    s.forEach((l, d) => {
      Fn(l, d, r, n, t);
    }), a.forEach((l, d) => {
      Gn(l, d, r, n, t);
    }), o && Wn(o, r, n), i && qn(i, r, n);
}
function Ge(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Fn(e, t, r, n, s) {
  if (s && s.rows.length > 0) {
    const o = s.rows[0];
    if (o.cells.length > t) {
      const h = o.cells[t].getBoundingClientRect(), l = s.getBoundingClientRect(), d = h.right - l.left - 2;
      e.style.left = `${d}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += r.columnWidths[o];
  e.style.left = `${a - 2}px`, e.style.height = `${n.height}px`;
}
function Gn(e, t, r, n, s) {
  if (s && s.rows.length > t) {
    const o = s.rows[t];
    if (o.cells.length > 0) {
      const h = o.cells[0].getBoundingClientRect(), l = s.getBoundingClientRect(), d = h.bottom - l.top - 2;
      e.style.top = `${d}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += r.rowHeights[o];
  e.style.top = `${a - 2}px`, e.style.width = `${n.width}px`;
}
function Wn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function qn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
const Nt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: s = Je
}) => {
  const a = ee(null), o = ee(null), i = ee(null), h = ee(null), l = ee(null), d = ee(s), c = ee(!1), [u, w] = re(null), v = Te();
  oe(() => {
    d.current = s;
  }, [s]);
  const b = _(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (Ge(a.current), a.current = null), w(null), i.current = null, h.current = null, l.current = null, c.current = !1, n && n();
  }, [n]), C = _((R) => {
    if (R.preventDefault(), R.stopPropagation(), !o.current) return;
    const L = R.currentTarget, U = L.dataset.type, P = parseInt(L.dataset.index, 10);
    o.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const B = Me(o.current);
    i.current = {
      x: R.clientX,
      y: R.clientY,
      structure: { ...B }
    }, h.current = U, l.current = P, c.current = !0, document.body.classList.add("table-resize-in-progress");
    const E = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = E[U] || "default", document.addEventListener("mousemove", O), document.addEventListener("mouseup", y);
  }, []), D = _((R) => {
    const L = Ja(R, d.current);
    return L && (a.current = L, o.current = R, document.body.appendChild(L), L.querySelectorAll(".table-resize-handler").forEach((P) => {
      P.addEventListener("mousedown", C);
    })), L;
  }, [C]), j = _((R) => {
    if (!ye(R)) return;
    a.current && (Ge(a.current), a.current = null), R.classList.add("selected"), D(R) && (w(R), r && r(R));
  }, [r, D]), O = _((R) => {
    if (!c.current || !o.current || !i.current || !h.current) return;
    R.preventDefault(), R.stopPropagation();
    const { x: L, y: U, structure: P } = i.current, B = h.current, E = l.current, H = R.clientX, Y = R.clientY;
    let Z = 0;
    switch (B) {
      case le.COLUMN:
        Z = H - L;
        break;
      case le.ROW:
        Z = Y - U;
        break;
      case le.TABLE_BOTTOM:
        Z = Y - U;
        break;
      case le.TABLE_RIGHT:
        Z = H - L;
        break;
    }
    const Q = Ka({
      type: B,
      index: E,
      delta: Z,
      currentStructure: P,
      options: d.current
    });
    Xa(o.current, Q), a.current && Et(a.current, o.current);
  }, []), y = _((R) => {
    if (c.current) {
      if (R.preventDefault(), R.stopPropagation(), o.current && i.current) {
        const L = {
          structure: i.current.structure
        }, U = {
          structure: Me(o.current)
        };
        (L.structure.width !== U.structure.width || L.structure.height !== U.structure.height || JSON.stringify(L.structure.columnWidths) !== JSON.stringify(U.structure.columnWidths) || JSON.stringify(L.structure.rowHeights) !== JSON.stringify(U.structure.rowHeights)) && v.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: o.current, state: U } },
          { type: "TABLE_RESIZE", payload: { element: o.current, state: L } }
        );
      }
      if (i.current = null, h.current = null, l.current = null, c.current = !1, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", o.current) {
        const L = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(L), t && t(o.current, Me(o.current));
      }
    }
  }, [t, v]), p = _((R) => {
    a.current && !a.current.contains(R.target) && b();
    const U = R.target.closest("table");
    if (U && ye(U)) {
      if (U === o.current)
        return;
      j(U);
    }
  }, [j, b]), g = _((R) => {
    if (R.key === "Delete" && o.current && !c.current) {
      R.preventDefault();
      const L = o.current;
      if (L.parentNode) {
        L.parentNode.removeChild(L), b();
        const U = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(U);
      }
    }
    R.key === "Escape" && o.current && b();
  }, [e, b]), A = _(() => {
    a.current && o.current && Et(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const L = e.current.closest(".editor-viewport");
    return L && (L.addEventListener("scroll", A), window.addEventListener("scroll", A)), () => {
      L && L.removeEventListener("scroll", A), window.removeEventListener("scroll", A);
    };
  }, [e, A]), oe(() => {
    if (!e.current) return;
    const R = e.current;
    return R.addEventListener("click", p), R.addEventListener("keydown", g), window.addEventListener("resize", A), () => {
      R.removeEventListener("click", p), R.removeEventListener("keydown", g), window.removeEventListener("resize", A), c.current && (document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), a.current && Ge(a.current);
    };
  }, [e, p, g, A, O, y]), oe(() => {
    if (!e.current) return;
    const R = new MutationObserver((L) => {
      L.forEach((U) => {
        U.type === "childList" && (U.removedNodes.forEach((P) => {
          P.nodeType === Node.ELEMENT_NODE && ye(P) && P === u && b();
        }), U.addedNodes.forEach((P) => {
          if (P.nodeType !== Node.ELEMENT_NODE) return;
          if (ye(P)) {
            setTimeout(() => j(P), 50);
            return;
          }
          const B = P.querySelectorAll?.("table") || [];
          B.length > 0 && setTimeout(() => j(B[0]), 50);
        }));
      });
    });
    return R.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => R.disconnect();
  }, [e, b, j]), oe(() => {
    if (!u) return;
    const R = new MutationObserver((L) => {
      L.some((P) => {
        if (P.type === "childList") {
          if ([...P.addedNodes, ...P.removedNodes].some(
            (E) => E.nodeType === Node.ELEMENT_NODE && E.tagName === "TR"
          )) return !0;
        } else if (P.type === "attributes" && ["colspan", "rowspan"].includes(P.attributeName))
          return !0;
        return !1;
      }) && a.current && o.current && (Ge(a.current), a.current = null, D(o.current));
    });
    return R.observe(u, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => R.disconnect();
  }, [u, D]), null;
};
Nt.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: T.func,
  onTableSelect: T.func,
  onTableDeselect: T.func,
  resizeOptions: T.shape({
    minColumnWidth: T.number,
    minRowHeight: T.number,
    maxColumnWidth: T.number,
    maxRowHeight: T.number,
    tableMinWidth: T.number,
    tableMinHeight: T.number,
    tableMaxWidth: T.number,
    tableMaxHeight: T.number
  })
};
Nt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const Lt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r
}) => {
  const [n, s] = re({ top: 0, left: 0 }), [a, o] = re(!1), [i, h] = re("top"), l = ee(null), d = ee(null), c = Te(), u = (g) => {
    if (!g)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (R) => setTimeout(R, 16))(() => {
      const R = document.querySelector(".table-resize-overlay");
      R && Et(R, g);
    });
  }, w = (g) => {
    if (!g) return null;
    const A = window.getComputedStyle(g);
    return {
      float: A.float || "none",
      margin: g.style.margin || "",
      marginLeft: g.style.marginLeft || "",
      marginRight: g.style.marginRight || "",
      display: A.display || "table"
    };
  }, v = _(() => {
    if (!e) return "left";
    const g = window.getComputedStyle(e);
    return g.marginLeft === "auto" && g.marginRight === "auto" ? "center" : g.float === "right" ? "right" : (g.float === "left", "left");
  }, [e]), [b, C] = re("left");
  oe(() => {
    e && C(v());
  }, [e, v]);
  const D = _(() => {
    if (!e || !l.current) return;
    const g = e.getBoundingClientRect(), A = l.current.getBoundingClientRect(), R = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, L = g.bottom >= 0 && g.top <= R.height && g.right >= 0 && g.left <= R.width;
    let U = "top", P = 0, B = 0;
    if (L) {
      const Q = g.top - A.height - 10, ae = R.height - g.bottom - A.height - 10;
      ae > Q && ae > 0 ? (U = "bottom", P = g.bottom + 10) : (U = "top", P = g.top - A.height - 10);
    } else
      U = "top", P = 10;
    B = g.left + g.width / 2 - A.width / 2;
    const E = window.innerWidth, H = window.innerHeight;
    let Y = Math.max(10, Math.min(B, E - A.width - 10)), Z = Math.max(10, Math.min(P, H - A.height - 10));
    s({ top: Z, left: Y }), h(U), o(!0);
  }, [e]);
  hn(() => {
    D();
    const g = () => {
      D();
    }, A = d.current;
    return A && A.addEventListener("scroll", g), window.addEventListener("scroll", g), window.addEventListener("resize", g), () => {
      A && A.removeEventListener("scroll", g), window.removeEventListener("scroll", g), window.removeEventListener("resize", g), o(!1);
    };
  }, [e, D]), oe(() => {
    const g = (A) => {
      l.current && !l.current.contains(A.target) && A.target !== e && !e.contains(A.target) && r();
    };
    return document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [e, r]);
  const j = {
    left: {
      float: "left",
      margin: "10px 10px 10px 0",
      marginLeft: "",
      marginRight: ""
    },
    center: {
      float: "none",
      margin: "10px auto",
      marginLeft: "auto",
      marginRight: "auto"
    },
    right: {
      float: "right",
      margin: "10px 0 10px 10px",
      marginLeft: "",
      marginRight: ""
    }
  }, O = (g) => {
    if (e && j[g]) {
      const A = w(e), R = b, L = j[g];
      e.style.float = L.float, e.style.margin = L.margin, e.style.marginLeft = L.marginLeft, e.style.marginRight = L.marginRight, C(g), u(e);
      const U = w(e);
      c.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: g, state: U } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: R, state: A } }
      ), t && t(g);
    }
  }, y = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, p = (g) => ({
    ...y,
    background: g ? "#007bff" : "transparent",
    color: g ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : mn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: l,
        className: "table-tooltip-menu",
        "data-menu-position": i,
        "aria-hidden": !a,
        style: {
          position: "fixed",
          top: `${n.top}px`,
          left: `${n.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: a ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: a ? 1 : 0,
          visibility: a ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${b === "left" ? "active" : ""}`,
              onClick: () => O("left"),
              title: "Align Left",
              style: p(b === "left"),
              children: /* @__PURE__ */ m.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${b === "center" ? "active" : ""}`,
              onClick: () => O("center"),
              title: "Align Center",
              style: p(b === "center"),
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${b === "right" ? "active" : ""}`,
              onClick: () => O("right"),
              title: "Align Right",
              style: p(b === "right"),
              children: /* @__PURE__ */ m.jsx(Rt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Lt.propTypes = {
  tableElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onClose: T.func.isRequired
};
Lt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0
};
const It = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = re(/* @__PURE__ */ new Set()), [s, a] = re(null), [o, i] = re(null), [h, l] = re(null), [d, c] = re(!1), [u, w] = re(!1), [v, b] = re(null), [C, D] = re(null);
  Te(), ee(null);
  const j = _(() => {
    n(/* @__PURE__ */ new Set()), a(null), i(null), l(null), b(null), D(null), c(!1), w(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((P) => {
      P.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), t && t(null);
  }, [t]), O = _((P) => {
    const B = P.closest("tr"), E = P.closest("table");
    if (!B || !E) return null;
    const H = Array.from(E.rows).indexOf(B), Y = Array.from(B.cells).indexOf(P);
    return { rowIndex: H, cellIndex: Y, table: E };
  }, []), y = _((P) => {
    if (P.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const B = Array.from(P), E = B[0], H = O(E);
    if (!H) return { mode: null, rowIndex: null, colIndex: null };
    const { table: Y } = H;
    return B.filter((ae) => {
      const se = O(ae);
      return se && se.table === Y && se.rowIndex === H.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: H.rowIndex, colIndex: null } : B.filter((ae) => {
      const se = O(ae);
      return se && se.table === Y && se.cellIndex === H.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: H.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [O]), p = _((P, B, E, H, Y) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((Z) => {
      Z.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!Y || !P)) {
      if (P === "row" && B !== null) {
        const Z = Y.rows[B];
        Z && Array.from(Z.cells).forEach((Q) => {
          Q.classList.add("table-row-selected");
        });
      } else P === "column" && E !== null ? Array.from(Y.rows).forEach((Z) => {
        const Q = Z.cells[E];
        Q && Q.classList.add("table-col-selected");
      }) : P === "cells" && H.forEach((Z) => {
        Z.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), g = _((P, B) => {
    const E = y(P);
    n(P), a(E.mode), i(E.rowIndex), l(E.colIndex), D(B), p(E.mode, E.rowIndex, E.colIndex, P, B), t && E.mode && t({
      mode: E.mode,
      cells: P,
      rowIndex: E.rowIndex,
      colIndex: E.colIndex,
      table: B
    });
  }, [y, p, t]), A = _((P) => {
    const B = P.target.closest("td, th");
    if (!B) return;
    const E = O(B);
    E && (c(!0), b(B), D(E.table), w(!1));
  }, [O]), R = _((P) => {
    if (!d || !v) return;
    const B = P.target.closest("td, th");
    if (!B || !C || !C.contains(B)) return;
    w(!0), P.preventDefault();
    const E = O(v), H = O(B);
    if (!E || !H || E.table !== H.table) return;
    const Y = Math.min(E.rowIndex, H.rowIndex), Z = Math.max(E.rowIndex, H.rowIndex), Q = Math.min(E.cellIndex, H.cellIndex), ae = Math.max(E.cellIndex, H.cellIndex), se = /* @__PURE__ */ new Set();
    for (let x = Y; x <= Z; x++) {
      const f = C.rows[x];
      if (f)
        for (let S = Q; S <= ae; S++) {
          const I = f.cells[S];
          I && se.add(I);
        }
    }
    g(se, C);
  }, [d, O]), L = _(() => {
    u || j(), c(!1), b(null);
  }, [u, j]), U = _((P) => {
    const B = P.target.closest("td, th"), E = P.target.closest("table");
    if (!(B && C && C.contains(B))) {
      if (E && E !== C) {
        j();
        return;
      }
      E || j();
    }
  }, [j, C]);
  return oe(() => {
    if (!e.current) return;
    const P = e.current, B = (H) => {
      H.target.closest("td, th") && A(H);
    }, E = (H) => {
      H.target.closest("td, th") && R(H);
    };
    return P.addEventListener("mousedown", B, !0), P.addEventListener("mouseenter", E, !0), document.addEventListener("mouseup", L), document.addEventListener("click", U), () => {
      P.removeEventListener("mousedown", B, !0), P.removeEventListener("mouseenter", E, !0), document.removeEventListener("mouseup", L), document.removeEventListener("click", U);
    };
  }, [e, A, R, L, U]), oe(() => {
    if (!e.current) return;
    const P = new MutationObserver((B) => {
      B.forEach((E) => {
        E.type === "childList" && C && !e.current.contains(C) && j();
      });
    });
    return P.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => P.disconnect();
  }, [e, j]), null;
};
It.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: T.func
};
It.defaultProps = {
  onCellSelectionChange: void 0
};
const Qa = 50, ct = 50, es = 50, ts = 100, ns = 300, Dt = Tt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: i = !0,
  showToolbar: h = !0,
  showPageManager: l = !0
}, d) => {
  const c = xn(), u = Te(), { pageSize: w, pageMargins: v, continuousContent: b, pageBoundaries: C, activePage: D, zoomLevel: j, canUndo: O, canRedo: y } = c, p = ee(null), g = ee(null), { currentFormat: A, formatText: R, updateCurrentFormatFromSelection: L } = kr(), [U, P] = re(!1), [B, E] = re(null), [H, Y] = re(!0), [Z, Q] = re(!1), [ae, se] = re(null), x = ee(null), {
    checkAndUpdateBoundaries: f,
    getCurrentPage: S,
    scrollToPage: I,
    updateBoundaries: M,
    triggerAutoReflow: G,
    removePageAndContent: W,
    removePageBreak: z,
    insertPageBreakAtBoundary: q
  } = Qr(w, g, j, v), K = be(() => xt(w), [w]), [V, ce] = re(!1), k = ee(null), ue = ee(!1), pe = ee(!1), we = ee(!1), Ae = ee(b);
  oe(() => {
    if (g.current) {
      if (!we.current) {
        g.current.innerHTML = b, we.current = !0, Ae.current = b;
        const N = setTimeout(() => {
          M();
        }, Qa);
        return () => clearTimeout(N);
      }
      if (Ae.current !== b) {
        if (g.current.innerHTML !== b) {
          g.current.innerHTML = b;
          const X = setTimeout(() => {
            M(), ue.current && jt();
          }, ct);
          return Ae.current = b, () => clearTimeout(X);
        }
        Ae.current = b;
      }
    }
  }, [b, M, C.length, u, I]), oe(() => {
    o && we.current && o(b);
  }, [b, o]);
  const Ht = be(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => g.current ? g.current.innerHTML : b,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (g.current ? g.current.innerHTML : b).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => g.current ? Xr(g.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (N) => {
      const X = qe(N);
      X !== b && u.updateContinuousContent(X), g.current && g.current.innerHTML !== X && (g.current.innerHTML = X), Ae.current = X, g.current && setTimeout(() => {
        M();
      }, ct);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (N) => {
      if (!g.current || !N) return;
      const X = qe(N), ie = window.getSelection();
      let de = !1;
      if (ie && ie.rangeCount > 0) {
        const et = ie.getRangeAt(0);
        g.current.contains(et.commonAncestorContainer) && (de = !0);
      }
      if (!de && x.current)
        try {
          ie.removeAllRanges(), ie.addRange(x.current);
        } catch (et) {
          console.warn("[insertContent] Failed to restore last cursor position:", et);
          const Ce = g.current.lastChild;
          if (Ce) {
            const je = document.createRange();
            Ce.nodeType === Node.TEXT_NODE ? je.setStart(Ce, Ce.textContent.length) : je.setStartAfter(Ce), je.collapse(!0), ie.removeAllRanges(), ie.addRange(je);
          }
        }
      document.execCommand("insertHTML", !1, X);
      const he = g.current.innerHTML;
      u.updateContinuousContent(he), Ae.current = he, setTimeout(() => {
        M(), G(200);
      }, ct);
    }
  }), [b, u, M, g, x, f]);
  cr(d, () => Ht, [Ht]), oe(() => {
    const N = () => {
      if (L(), g.current) {
        const ie = window.getSelection();
        if (ie.rangeCount > 0) {
          const de = ie.getRangeAt(0);
          de.collapsed && g.current.contains(de.commonAncestorContainer) && (x.current = de.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", N);
    const X = () => {
      if (setTimeout(L, 10), x.current && g.current)
        try {
          const ie = window.getSelection();
          ie.removeAllRanges(), ie.addRange(x.current);
        } catch (ie) {
          console.warn("[handleFocus] Failed to restore cursor:", ie);
        }
    };
    return g.current && g.current.addEventListener("focus", X), () => {
      document.removeEventListener("selectionchange", N), g.current && g.current.removeEventListener("focus", X);
    };
  }, [L]);
  const jt = _(() => {
    ue.current = !1;
    const N = Math.max(0, C.length - 1);
    u.setActivePage(N), setTimeout(() => {
      I(N, p);
    }, es);
  }, [C.length, u, I]), Qe = _(() => {
    if (!g.current) return;
    let N = g.current.innerHTML;
    N = qe(N), N !== g.current.innerHTML && (g.current.innerHTML = N);
    const X = b;
    if (X !== N) {
      const de = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: N
      }, he = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: X
      };
      u.recordOperation(de, he);
    }
    u.updateContinuousContent(N), f(), G(200);
    const ie = S(p);
    ie !== D && u.setActivePage(ie);
  }, [u, f, S, D, G, p, g, b]), Yn = _((N) => {
    Qe();
  }, [Qe]), Bt = _((N) => {
    u.updatePageSize(N), M({ pageSize: N }), s && s(N);
  }, [u, M, s]), zt = _((N) => {
    u.updatePageMargins(N), M({ pageMargins: N }), a && a(N);
  }, [u, M, a]), $t = _((N) => {
    N < 0 || N >= C.length || (pe.current = !0, u.setActivePage(N), I(N, p), setTimeout(() => {
      pe.current = !1;
    }, ns), t && t(N));
  }, [u, I, t, C.length]), Ut = _(() => {
    const N = C.length + 1;
    q(N) && (ue.current = !0, setTimeout(() => {
      ue.current && jt();
    }, 100)), r && r();
  }, [C.length, q, u, I, r]), Vn = _(() => {
    const N = window.getSelection();
    if (N && N.rangeCount > 0) {
      if (!g?.current) return;
      const de = `<page-break data-page-break="true" contenteditable="false" data-page-number="${g.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, de), setTimeout(() => {
        M();
        const he = S(p);
        u.setActivePage(he);
      }, 150);
    }
  }, [M, S, u, p]), Kn = _((N) => {
    if (!N) return;
    z(N) && setTimeout(() => {
      const ie = S(p);
      u.setActivePage(ie);
    }, 200);
  }, [z, S, u, p]), Ft = _((N) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    W(N) && (u.setActivePage(0), n && n(N));
  }, [C.length, W, u, n]), Ie = _(() => {
    u.zoomIn();
  }, [u]), De = _(() => {
    u.zoomOut();
  }, [u]), He = _(() => {
    u.resetZoom();
  }, [u]), Gt = _(() => {
    u.undo();
  }, [u]), Wt = _(() => {
    u.redo();
  }, [u]);
  oe(() => {
    const N = (X) => {
      if (X.ctrlKey || X.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(X.key) && X.preventDefault();
        const ie = document.activeElement === g.current, de = document.activeElement === p.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ie || de || !he)
          switch (X.key) {
            case "+":
            case "=":
              Ie();
              break;
            case "-":
            case "_":
              De();
              break;
            case "0":
              He();
              break;
            case "z":
              X.shiftKey || Gt();
              break;
            case "y":
              Wt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", N), () => {
      window.removeEventListener("keydown", N);
    };
  }, [Ie, De, He, Gt, Wt]);
  const Xn = _(() => {
    !p.current || !g.current || pe.current || (k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      if (pe.current) {
        k.current = null;
        return;
      }
      const N = S(p);
      N !== D && N >= 0 && u.setActivePage(N), k.current = null;
    }, ts));
  }, [S, D, u]), Jn = be(() => {
    if (!b) return 0;
    const X = b.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return X ? X.length : 0;
  }, [b]), Qn = C.length || 1, er = _((N) => {
    P(!0), E(N);
  }, []), qt = _(() => {
    P(!1), E(null);
  }, []), tr = _((N, X) => {
  }, []), nr = _((N) => {
    Q(!0), se(N);
  }, []), Zt = _(() => {
    Q(!1), se(null);
  }, []), rr = _((N, X) => {
  }, []);
  return oe(() => () => {
    k.current && clearTimeout(k.current);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ m.jsx(
      Ct,
      {
        currentFormat: {
          ...A,
          imageSelected: U
        },
        onFormatText: R,
        onAddPageBreak: Vn,
        canUndo: O,
        canRedo: y
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ m.jsx(
        Oa,
        {
          editorView: null,
          isCollapsed: V,
          onToggle: () => ce((N) => !N),
          wordCount: Jn,
          pageCount: Qn
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: Xn,
          children: /* @__PURE__ */ m.jsx(
            Ga,
            {
              content: b,
              dimensions: K,
              pageSize: w,
              pageMargins: v,
              pageBoundaries: C,
              editorRef: g,
              onInput: Yn,
              onContentChange: Qe,
              onClick: () => g.current?.focus(),
              onRemovePageBreak: Kn,
              zoomLevel: j
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        Ot,
        {
          editorRef: g,
          onImageSelect: er,
          onImageDeselect: qt,
          onImageResize: tr,
          resizeOptions: {
            ...Se,
            preserveAspectRatio: H,
            aspectRatio: H
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        Nt,
        {
          editorRef: g,
          onTableSelect: nr,
          onTableDeselect: Zt,
          onTableResize: rr
        }
      ),
      /* @__PURE__ */ m.jsx(
        It,
        {
          editorRef: g,
          onCellSelectionChange: (N) => {
            console.log("Cell selection changed:", N);
          }
        }
      ),
      U && B && /* @__PURE__ */ m.jsx(
        kt,
        {
          imageElement: B,
          initialPreserveAspectRatio: H,
          onAlignChange: (N) => {
          },
          onAspectRatioToggle: (N) => {
            Y(N);
          },
          onDelete: () => {
            if (B) {
              const N = B.getAttribute("data-key");
              N && io(N).catch((X) => {
                console.error("Failed to delete image from IndexedDB:", X);
              });
            }
          },
          onClose: qt
        }
      ),
      Z && ae && /* @__PURE__ */ m.jsx(
        Lt,
        {
          tableElement: ae,
          onAlignChange: (N) => {
          },
          onClose: Zt
        }
      ),
      l && /* @__PURE__ */ m.jsx("div", { className: "page-manager-sidebar", children: e ? Ke.cloneElement(e, {
        onNavigate: $t,
        onAddPage: Ut,
        onDeletePage: Ft,
        onPageSizeChange: Bt,
        onPageMarginsChange: zt,
        zoomLevel: j,
        canZoomIn: pt(j),
        canZoomOut: gt(j),
        onZoomIn: Ie,
        onZoomOut: De,
        onZoomReset: He
      }) : /* @__PURE__ */ m.jsx(
        Wa,
        {
          pageBoundaries: C,
          activePage: D,
          pageSize: w,
          pageMargins: v,
          zoomLevel: j,
          canZoomIn: pt(j),
          canZoomOut: gt(j),
          onNavigate: $t,
          onAddPage: Ut,
          onDeletePage: Ft,
          onPageSizeChange: Bt,
          onPageMarginsChange: zt,
          onZoomIn: Ie,
          onZoomOut: De,
          onZoomReset: He
        }
      ) })
    ] })
  ] });
});
Dt.displayName = "HtmlEditor";
Dt.propTypes = {
  pageManagerComponent: T.element,
  onNavigatePage: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onPageMarginsChange: T.func,
  onChange: T.func,
  showSidebar: T.bool,
  showToolbar: T.bool,
  showPageManager: T.bool
};
Dt.defaultProps = {
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
class Zn extends Ke.Component {
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
  componentDidCatch(t, r) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", r), this.setState({
      error: t,
      errorInfo: r
    }), this.props.onError && this.props.onError(t, r);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ m.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ m.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ m.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ m.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ m.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ m.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
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
Zn.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
Zn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Cr as COMMON_FONT_SIZES,
  Xe as DEFAULT_FONT_SIZE,
  Se as DEFAULT_IMAGE_RESIZE_OPTIONS,
  bn as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  cs as DocumentProvider,
  Ct as EditorToolbar,
  Zn as ErrorBoundary,
  Rn as FONT_SIZE_MAP,
  Dt as HtmlEditor,
  Ot as ImageResizeHandlers,
  Re as PAGE_SIZES,
  Wa as PageManager,
  Ga as PageView,
  $ as RESIZE_HANDLERS,
  Oa as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  Nt as TableResizeHandlers,
  gs as applyImageDimensions,
  Xa as applyTableDimensions,
  fs as calculateResizeDimensions,
  Ka as calculateTableResizeDimensions,
  hs as clearImages,
  eo as createResizeOverlay,
  Ja as createTableResizeOverlay,
  io as deleteImage,
  ms as getAllImageKeys,
  is as getAvailablePageSizes,
  so as getImage,
  ps as getImageDimensions,
  xt as getPageDimensions,
  ls as getPixelValue,
  us as getPointValue,
  Me as getTableStructure,
  me as isResizableImage,
  ye as isResizableTable,
  ds as isValidFontSize,
  ss as isValidPageSize,
  ka as logger,
  _r as pixelsToPoints,
  Pr as pointsToPixels,
  it as removeResizeOverlay,
  Ge as removeTableResizeOverlay,
  ao as saveImage,
  yt as updateResizeOverlay,
  Et as updateTableResizeOverlay,
  Qr as useContinuousReflow,
  vn as useDocument,
  Te as useDocumentActions,
  xn as useDocumentState,
  kr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
