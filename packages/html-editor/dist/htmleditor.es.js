import He, { createContext as gn, useContext as hn, useReducer as mn, useMemo as je, useState as le, useCallback as q, useRef as te, useEffect as ae, forwardRef as at, createElement as Ye, useLayoutEffect as yn, useImperativeHandle as bn } from "react";
import { v4 as it } from "uuid";
import { createPortal as En } from "react-dom";
function xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Tn() {
  if (bt) return Ee;
  bt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, i, a) {
    var r = null;
    if (a !== void 0 && (r = "" + a), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Ee.Fragment = t, Ee.jsx = o, Ee.jsxs = o, Ee;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function vn() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case b:
          return "Fragment";
        case I:
          return "Profiler";
        case M:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case d:
            return "Portal";
          case T:
            return c.displayName || "Context";
          case _:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var v = c.render;
            return c = c.displayName, c || (c = v.displayName || v.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case P:
            return v = c.displayName || null, v !== null ? v : e(c.type) || "Memo";
          case j:
            v = c._payload, c = c._init;
            try {
              return e(c(v));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function o(c) {
      try {
        t(c);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var C = v.error, N = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return C.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === j)
        return "<...>";
      try {
        var v = e(c);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = V.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (X.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, v) {
      function C() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: C,
        configurable: !0
      });
    }
    function f() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, v, C, N, $, H) {
      var L = C.ref;
      return c = {
        $$typeof: w,
        type: c,
        key: v,
        props: C,
        _owner: N
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: f
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
        value: $
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function g(c, v, C, N, $, H) {
      var L = v.children;
      if (L !== void 0)
        if (N)
          if (B(L)) {
            for (N = 0; N < L.length; N++)
              h(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(L);
      if (X.call(v, "key")) {
        L = e(c);
        var W = Object.keys(v).filter(function(Y) {
          return Y !== "key";
        });
        N = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", E[L + N] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          L,
          W,
          L
        ), E[L + N] = !0);
      }
      if (L = null, C !== void 0 && (o(C), L = "" + C), r(v) && (o(v.key), L = "" + v.key), "key" in v) {
        C = {};
        for (var Z in v)
          Z !== "key" && (C[Z] = v[Z]);
      } else C = v;
      return L && s(
        C,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        L,
        C,
        i(),
        $,
        H
      );
    }
    function h(c) {
      p(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === j && (c._payload.status === "fulfilled" ? p(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function p(c) {
      return typeof c == "object" && c !== null && c.$$typeof === w;
    }
    var O = He, w = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), T = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), V = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, B = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var J, G = {}, U = O.react_stack_bottom_frame.bind(
      O,
      a
    )(), oe = re(n(a)), E = {};
    xe.Fragment = b, xe.jsx = function(c, v, C) {
      var N = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        v,
        C,
        !1,
        N ? Error("react-stack-top-frame") : U,
        N ? re(n(c)) : oe
      );
    }, xe.jsxs = function(c, v, C) {
      var N = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        v,
        C,
        !0,
        N ? Error("react-stack-top-frame") : U,
        N ? re(n(c)) : oe
      );
    };
  })()), xe;
}
var xt;
function An() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? Se.exports = Tn() : Se.exports = vn()), Se.exports;
}
var l = An();
const Ve = 100, Ke = 50, Xe = 200, Tt = 5, Je = (e) => e < Xe, Qe = (e) => e > Ke, _n = 96, Me = (e) => Math.round(e * _n), De = {
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
}, fe = "NORMAL", Bt = (e = fe) => {
  const t = De[e] || De[fe];
  return {
    top: Me(t.top),
    bottom: Me(t.bottom),
    left: Me(t.left),
    right: Me(t.right)
  };
}, Pn = (e = fe) => {
  const t = Bt(e);
  return t.top + t.bottom;
}, kn = () => Object.keys(De), wn = (e) => {
  const t = De[e];
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
}, $t = "A4", st = (e) => {
  const t = ce[e] || ce[$t];
  return {
    width: t.width,
    height: t.height
  };
}, Ko = (e) => Object.keys(ce).includes(e), Xo = () => Object.keys(ce), Ae = $t, me = "<p><br></p>", Rn = "continuous", ve = (e, t = Ae) => ({
  id: it(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Gt = (e, t = Ae) => (e.length > 0 ? e : [ve(0, t)]).map((n, i) => ({
  id: n.id || it(),
  index: i,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), On = (e = Ae) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: st(e).height
}], et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Ae, n = Gt(e.pages || [ve(0, o)], o);
  return {
    id: it(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Rn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || On(o),
    zoomLevel: e.zoomLevel || Ve,
    pageMargins: e.pageMargins || fe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, z = {
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
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS",
  // Undo/Redo actions
  RECORD_OPERATION: "RECORD_OPERATION",
  UNDO: "UNDO",
  REDO: "REDO",
  CLEAR_UNDO_REDO: "CLEAR_UNDO_REDO"
}, tt = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: i = Ae } = t.payload || {}, a = { ...ve(0, i), content: Ie(n) };
      return et({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: Ie(i)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Gt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: o
      };
    }
    case z.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, ve(n, e.pageSize));
      const a = i.map((s, f) => ({
        ...s,
        index: f,
        size: e.pageSize
      })), r = a.slice(0, -1).map((s, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: r,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const a = i.map((f, m) => ({
        ...f,
        index: m,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = a.slice(0, -1).map((f, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case z.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= i ? e : {
        ...e,
        activePage: n,
        updatedAt: o
      };
    }
    case z.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        st(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const i = e.pages.map((r, s) => ({
        ...r,
        index: s,
        size: n
      })), a = i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: i,
        pageBreaks: a,
        updatedAt: o
      };
    }
    case z.RESET_DOCUMENT:
      return et();
    case z.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ie(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case z.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const i = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: i,
        updatedAt: o
      };
    }
    case z.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const s = r.substring(0, n), f = r.substring(n);
        r = s + a + f;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const f = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && f.length === 0)
          r = r + a + "<p><br></p>";
        else if (i < f.length) {
          const m = f[i], g = document.createElement("page-break");
          g.setAttribute("data-page-break", "true"), g.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", m.parentNode.insertBefore(g, m.nextSibling), g.parentNode.insertBefore(h, g.nextSibling), r = s.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case z.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, f) => {
        s.setAttribute("data-page-number", String(f + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: o
      };
    }
    case z.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (a = [{ ...ve(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ke || n > Xe ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ke} and ${Xe}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case z.ZOOM_IN: {
      if (!Je(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case z.ZOOM_OUT: {
      if (!Qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case z.RESET_ZOOM:
      return e.zoomLevel === Ve ? e : {
        ...e,
        zoomLevel: Ve,
        updatedAt: o
      };
    case z.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    case z.RECORD_OPERATION: {
      const { operation: n, inverseOperation: i } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: i }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: o
      };
    }
    case z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = tt(e, n.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: o
      };
    }
    case z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = tt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: o
      };
    }
    case z.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: o
      };
    // Image operation actions (for undo/redo)
    case "IMAGE_ALIGN": {
      const { element: n, state: i } = t.payload;
      return n && i && (n.style.float = i.float, n.style.margin = i.margin, n.style.display = i.display, i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    case "IMAGE_DELETE": {
      const { element: n } = t.payload;
      return n && n.parentNode && n.parentNode.removeChild(n), e;
    }
    case "IMAGE_REINSERT": {
      const { state: n } = t.payload;
      return n && n.parent && n.element && (n.nextSibling ? n.parent.insertBefore(n.element, n.nextSibling) : n.parent.appendChild(n.element)), e;
    }
    case "IMAGE_ASPECT_RATIO":
      return e;
    case "IMAGE_RESIZE": {
      const { element: n, state: i } = t.payload;
      return n && i && (i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    default:
      return e;
  }
}, Ut = gn(null), Jo = ({ children: e, initialState: t = {} }) => {
  const [o, n] = mn(tt, et(t)), i = je(() => ({
    initializeDocument: (r) => n({ type: z.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: z.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: z.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: z.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: z.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: z.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: z.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: z.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: z.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: z.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: z.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: z.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: z.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: z.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: z.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: z.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: z.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: z.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: z.ZOOM_IN }),
    zoomOut: () => n({ type: z.ZOOM_OUT }),
    resetZoom: () => n({ type: z.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: z.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: z.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: z.UNDO }),
    redo: () => n({ type: z.REDO }),
    clearUndoRedo: () => n({ type: z.CLEAR_UNDO_REDO })
  }), []), a = je(() => ({
    state: o,
    actions: i,
    dispatch: n
  }), [o, i]);
  return /* @__PURE__ */ l.jsx(Ut.Provider, { value: a, children: e });
}, Ft = () => {
  const e = hn(Ut);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Wt = () => {
  const { state: e } = Ft();
  return e;
}, _e = () => {
  const { actions: e } = Ft();
  return e;
};
var Ne = { exports: {} }, Ce = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Sn() {
  if (vt) return Q;
  vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function _(u) {
    if (typeof u == "object" && u !== null) {
      var S = u.$$typeof;
      switch (S) {
        case t:
          switch (u = u.type, u) {
            case f:
            case m:
            case n:
            case a:
            case i:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case g:
                case w:
                case O:
                case r:
                  return u;
                default:
                  return S;
              }
          }
        case o:
          return S;
      }
    }
  }
  function T(u) {
    return _(u) === m;
  }
  return Q.AsyncMode = f, Q.ConcurrentMode = m, Q.ContextConsumer = s, Q.ContextProvider = r, Q.Element = t, Q.ForwardRef = g, Q.Fragment = n, Q.Lazy = w, Q.Memo = O, Q.Portal = o, Q.Profiler = a, Q.StrictMode = i, Q.Suspense = h, Q.isAsyncMode = function(u) {
    return T(u) || _(u) === f;
  }, Q.isConcurrentMode = T, Q.isContextConsumer = function(u) {
    return _(u) === s;
  }, Q.isContextProvider = function(u) {
    return _(u) === r;
  }, Q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Q.isForwardRef = function(u) {
    return _(u) === g;
  }, Q.isFragment = function(u) {
    return _(u) === n;
  }, Q.isLazy = function(u) {
    return _(u) === w;
  }, Q.isMemo = function(u) {
    return _(u) === O;
  }, Q.isPortal = function(u) {
    return _(u) === o;
  }, Q.isProfiler = function(u) {
    return _(u) === a;
  }, Q.isStrictMode = function(u) {
    return _(u) === i;
  }, Q.isSuspense = function(u) {
    return _(u) === h;
  }, Q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === m || u === a || u === i || u === h || u === p || typeof u == "object" && u !== null && (u.$$typeof === w || u.$$typeof === O || u.$$typeof === r || u.$$typeof === s || u.$$typeof === g || u.$$typeof === b || u.$$typeof === M || u.$$typeof === I || u.$$typeof === d);
  }, Q.typeOf = _, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Mn() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function _(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === m || R === a || R === i || R === h || R === p || typeof R == "object" && R !== null && (R.$$typeof === w || R.$$typeof === O || R.$$typeof === r || R.$$typeof === s || R.$$typeof === g || R.$$typeof === b || R.$$typeof === M || R.$$typeof === I || R.$$typeof === d);
    }
    function T(R) {
      if (typeof R == "object" && R !== null) {
        var se = R.$$typeof;
        switch (se) {
          case t:
            var he = R.type;
            switch (he) {
              case f:
              case m:
              case n:
              case a:
              case i:
              case h:
                return he;
              default:
                var ke = he && he.$$typeof;
                switch (ke) {
                  case s:
                  case g:
                  case w:
                  case O:
                  case r:
                    return ke;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var u = f, S = m, y = s, P = r, j = t, k = g, F = n, V = w, X = O, B = o, re = a, J = i, G = h, U = !1;
    function oe(R) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(R) || T(R) === f;
    }
    function E(R) {
      return T(R) === m;
    }
    function c(R) {
      return T(R) === s;
    }
    function v(R) {
      return T(R) === r;
    }
    function C(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function N(R) {
      return T(R) === g;
    }
    function $(R) {
      return T(R) === n;
    }
    function H(R) {
      return T(R) === w;
    }
    function L(R) {
      return T(R) === O;
    }
    function W(R) {
      return T(R) === o;
    }
    function Z(R) {
      return T(R) === a;
    }
    function Y(R) {
      return T(R) === i;
    }
    function ie(R) {
      return T(R) === h;
    }
    ee.AsyncMode = u, ee.ConcurrentMode = S, ee.ContextConsumer = y, ee.ContextProvider = P, ee.Element = j, ee.ForwardRef = k, ee.Fragment = F, ee.Lazy = V, ee.Memo = X, ee.Portal = B, ee.Profiler = re, ee.StrictMode = J, ee.Suspense = G, ee.isAsyncMode = oe, ee.isConcurrentMode = E, ee.isContextConsumer = c, ee.isContextProvider = v, ee.isElement = C, ee.isForwardRef = N, ee.isFragment = $, ee.isLazy = H, ee.isMemo = L, ee.isPortal = W, ee.isProfiler = Z, ee.isStrictMode = Y, ee.isSuspense = ie, ee.isValidElementType = _, ee.typeOf = T;
  })()), ee;
}
var _t;
function qt() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Ce.exports = Sn() : Ce.exports = Mn()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Pt;
function Nn() {
  if (Pt) return Ge;
  Pt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var r = {}, s = 0; s < 10; s++)
        r["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(r).map(function(g) {
        return r[g];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        m[g] = g;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = i() ? Object.assign : function(a, r) {
    for (var s, f = n(a), m, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        m = e(s);
        for (var p = 0; p < m.length; p++)
          o.call(s, m[p]) && (f[m[p]] = s[m[p]]);
      }
    }
    return f;
  }, Ge;
}
var Ue, kt;
function ct() {
  if (kt) return Ue;
  kt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ue = e, Ue;
}
var Fe, wt;
function Zt() {
  return wt || (wt = 1, Fe = Function.call.bind(Object.prototype.hasOwnProperty)), Fe;
}
var We, Rt;
function Cn() {
  if (Rt) return We;
  Rt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ct(), o = {}, n = /* @__PURE__ */ Zt();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(a, r, s, f, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in a)
        if (n(a, g)) {
          var h;
          try {
            if (typeof a[g] != "function") {
              var p = Error(
                (f || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = a[g](r, g, f, s, null, t);
          } catch (w) {
            h = w;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in o)) {
            o[h.message] = !0;
            var O = m ? m() : "";
            e(
              "Failed " + s + " type: " + h.message + (O ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, We = i, We;
}
var qe, Ot;
function In() {
  if (Ot) return qe;
  Ot = 1;
  var e = qt(), t = Nn(), o = /* @__PURE__ */ ct(), n = /* @__PURE__ */ Zt(), i = /* @__PURE__ */ Cn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return qe = function(s, f) {
    var m = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function h(E) {
      var c = E && (m && E[m] || E[g]);
      if (typeof c == "function")
        return c;
    }
    var p = "<<anonymous>>", O = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: I(),
      arrayOf: _,
      element: T(),
      elementType: u(),
      instanceOf: S,
      node: k(),
      objectOf: P,
      oneOf: y,
      oneOfType: j,
      shape: V,
      exact: X
    };
    function w(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function d(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, v = 0;
      function C($, H, L, W, Z, Y, ie) {
        if (W = W || p, Y = Y || L, ie !== o) {
          if (f) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = W + ":" + L;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, v++);
          }
        }
        return H[L] == null ? $ ? H[L] === null ? new d("The " + Z + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new d("The " + Z + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : E(H, L, W, Z, Y);
      }
      var N = C.bind(null, !1);
      return N.isRequired = C.bind(null, !0), N;
    }
    function M(E) {
      function c(v, C, N, $, H, L) {
        var W = v[C], Z = J(W);
        if (Z !== E) {
          var Y = G(W);
          return new d(
            "Invalid " + $ + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(c);
    }
    function I() {
      return b(r);
    }
    function _(E) {
      function c(v, C, N, $, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var L = v[C];
        if (!Array.isArray(L)) {
          var W = J(L);
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an array."));
        }
        for (var Z = 0; Z < L.length; Z++) {
          var Y = E(L, Z, N, $, H + "[" + Z + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function T() {
      function E(c, v, C, N, $) {
        var H = c[v];
        if (!s(H)) {
          var L = J(H);
          return new d("Invalid " + N + " `" + $ + "` of type " + ("`" + L + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function u() {
      function E(c, v, C, N, $) {
        var H = c[v];
        if (!e.isValidElementType(H)) {
          var L = J(H);
          return new d("Invalid " + N + " `" + $ + "` of type " + ("`" + L + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function S(E) {
      function c(v, C, N, $, H) {
        if (!(v[C] instanceof E)) {
          var L = E.name || p, W = oe(v[C]);
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return b(c);
    }
    function y(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(v, C, N, $, H) {
        for (var L = v[C], W = 0; W < E.length; W++)
          if (w(L, E[W]))
            return null;
        var Z = JSON.stringify(E, function(ie, R) {
          var se = G(R);
          return se === "symbol" ? String(R) : R;
        });
        return new d("Invalid " + $ + " `" + H + "` of value `" + String(L) + "` " + ("supplied to `" + N + "`, expected one of " + Z + "."));
      }
      return b(c);
    }
    function P(E) {
      function c(v, C, N, $, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an object."));
        for (var Z in L)
          if (n(L, Z)) {
            var Y = E(L, Z, N, $, H + "." + Z, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(c);
    }
    function j(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var v = E[c];
        if (typeof v != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(v) + " at index " + c + "."
          ), r;
      }
      function C(N, $, H, L, W) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], R = ie(N, $, H, L, W, o);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new d("Invalid " + L + " `" + W + "` supplied to " + ("`" + H + "`" + se + "."));
      }
      return b(C);
    }
    function k() {
      function E(c, v, C, N, $) {
        return B(c[v]) ? null : new d("Invalid " + N + " `" + $ + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function F(E, c, v, C, N) {
      return new d(
        (E || "React class") + ": " + c + " type `" + v + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function V(E) {
      function c(v, C, N, $, H) {
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return F(N, $, H, Z, G(Y));
          var ie = Y(L, Z, N, $, H + "." + Z, o);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(c);
    }
    function X(E) {
      function c(v, C, N, $, H) {
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        var Z = t({}, v[C], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return F(N, $, H, Y, G(ie));
          if (!ie)
            return new d(
              "Invalid " + $ + " `" + H + "` key `" + Y + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(v[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var R = ie(L, Y, N, $, H + "." + Y, o);
          if (R)
            return R;
        }
        return null;
      }
      return b(c);
    }
    function B(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(B);
          if (E === null || s(E))
            return !0;
          var c = h(E);
          if (c) {
            var v = c.call(E), C;
            if (c !== E.entries) {
              for (; !(C = v.next()).done; )
                if (!B(C.value))
                  return !1;
            } else
              for (; !(C = v.next()).done; ) {
                var N = C.value;
                if (N && !B(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function J(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : re(c, E) ? "symbol" : c;
    }
    function G(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = J(E);
      if (c === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function U(E) {
      var c = G(E);
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
    function oe(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return O.checkPropTypes = i, O.resetWarningCache = i.resetWarningCache, O.PropTypes = O, O;
  }, qe;
}
var Ze, St;
function Ln() {
  if (St) return Ze;
  St = 1;
  var e = /* @__PURE__ */ ct();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ze = function() {
    function n(r, s, f, m, g, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ze;
}
var Mt;
function jn() {
  if (Mt) return Ne.exports;
  if (Mt = 1, process.env.NODE_ENV !== "production") {
    var e = qt(), t = !0;
    Ne.exports = /* @__PURE__ */ In()(e.isElement, t);
  } else
    Ne.exports = /* @__PURE__ */ Ln()();
  return Ne.exports;
}
var Dn = /* @__PURE__ */ jn();
const x = /* @__PURE__ */ xn(Dn), Yt = {
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
}, zn = [
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
], lt = "16px", Hn = (e) => Math.round(e * 96 / 72), Bn = (e) => Math.round(e * 72 / 96 * 2) / 2, Qo = (e) => {
  const t = Object.values(Yt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Hn(e)}px`;
}, ea = (e) => {
  const t = parseInt(e), o = Object.values(Yt).find((n) => n.px === t);
  return o ? o.pt : Bn(t);
}, ta = (e) => {
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
}, A = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function na({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const f = n - t, m = i - o;
  let g = a, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, a - f), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, a + f), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, a - f), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, a + f), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, a - f);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, a + f);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const p = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / p > h ? h = Math.max(s.minHeight, g / p) : g = Math.max(s.minWidth, h * p) : [A.TOP, A.BOTTOM].includes(e) ? g = h * p : [A.LEFT, A.RIGHT].includes(e) && (h = g / p);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (a / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (a / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function pe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ra(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function oa(e, { width: t, height: o }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Vt(e, t = ge) {
  if (!pe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(A).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = $n(a), r.style.pointerEvents = "all", Kt(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function $n(e) {
  switch (e) {
    case A.TOP_LEFT:
    case A.BOTTOM_RIGHT:
      return "nwse-resize";
    case A.TOP_RIGHT:
    case A.BOTTOM_LEFT:
      return "nesw-resize";
    case A.TOP:
    case A.BOTTOM:
      return "ns-resize";
    case A.LEFT:
    case A.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Kt(e, t, o, n) {
  switch (t) {
    case A.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case A.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case A.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case A.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case A.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case A.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case A.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case A.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function nt(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Kt(i, a, o.width, o.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Gn = {
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
}, Nt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: lt,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Un = () => {
  const [e, t] = le(Nt), o = _e(), n = q((d) => {
    t((b) => ({
      ...b,
      alignLeft: d === "left",
      alignCenter: d === "center",
      alignRight: d === "right",
      alignJustify: d === "justify"
    }));
  }, []), i = q((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const M = b.getRangeAt(0);
      if (!M.toString())
        return t((_) => ({ ..._, fontFamily: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontFamily = d;
        const T = M.extractContents();
        return _.appendChild(T), M.insertNode(_), M.selectNodeContents(_), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((T) => ({ ...T, fontFamily: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font family change failed:", b), !1;
    }
  }, []), a = q((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const M = b.getRangeAt(0);
      if (!M.toString())
        return t((_) => ({ ..._, fontSize: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontSize = d;
        const T = M.extractContents();
        return _.appendChild(T), M.insertNode(_), M.selectNodeContents(_), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontSize: d })), !0;
      } catch {
        const T = Gn[d] || "3";
        return document.execCommand("fontSize", !1, T), t((u) => ({ ...u, fontSize: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), r = q((d, b = null) => {
    try {
      if (d === "undo") {
        o.undo();
        return;
      }
      if (d === "redo") {
        o.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (d === "fontSize") {
        a(b);
        return;
      }
      if (d === "fontName") {
        i(b);
        return;
      }
      switch (document.execCommand(d, !1, b) || console.warn(`[useFormatting] Command "${d}" failed`), d) {
        case "bold":
          t((I) => ({ ...I, bold: !I.bold }));
          break;
        case "italic":
          t((I) => ({ ...I, italic: !I.italic }));
          break;
        case "underline":
          t((I) => ({ ...I, underline: !I.underline }));
          break;
        case "strikethrough":
          t((I) => ({ ...I, strikethrough: !I.strikethrough }));
          break;
        case "justifyLeft":
          n("left");
          break;
        case "justifyCenter":
          n("center");
          break;
        case "justifyRight":
          n("right");
          break;
        case "justifyFull":
          n("justify");
          break;
        case "fontName":
          t((I) => ({ ...I, fontFamily: b }));
          break;
        case "formatBlock":
          t((I) => ({ ...I, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (M) {
      console.warn(`[useFormatting] Error executing command "${d}":`, M);
    }
  }, [a, i, n, o]), s = te(null), f = te(null), m = te(null), g = te(null), h = te(ge);
  q((d) => {
    if (!pe(d)) return;
    s.current && (ye(s.current), s.current = null), d.classList.add("selected");
    const b = Vt(d);
    b && (s.current = b, f.current = d, document.body.appendChild(b), t((M) => ({
      ...M,
      imageSelected: !0,
      preserveAspectRatio: h.current.preserveAspectRatio
    })));
  }, []);
  const p = q(() => {
    f.current && (f.current.classList.remove("selected"), f.current = null), s.current && (ye(s.current), s.current = null), m.current = null, g.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), O = q(() => {
    const d = !h.current.preserveAspectRatio;
    h.current = {
      ...h.current,
      preserveAspectRatio: d,
      aspectRatio: d
    }, t((b) => ({
      ...b,
      preserveAspectRatio: d
    }));
  }, []);
  q((d, b, M) => {
    f.current && (m.current = {
      x: b,
      y: M,
      width: f.current.offsetWidth,
      height: f.current.offsetHeight
    }, g.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Fn(d));
  }, []), q((d, b) => {
    if (!f.current || !m.current || !g.current) return;
    const { x: M, y: I, width: _, height: T } = m.current, u = g.current, S = Wn({
      handler: u,
      startX: M,
      startY: I,
      currentX: d,
      currentY: b,
      startWidth: _,
      startHeight: T,
      options: h.current
    });
    qn(f.current, S), s.current && nt(s.current, f.current);
  }, []), q(() => {
    if (m.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", f.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      f.current.dispatchEvent(d);
    }
  }, []);
  const w = q(() => {
    p(), t(Nt);
  }, [p]);
  return ae(() => () => {
    s.current && ye(s.current);
  }, []), {
    currentFormat: e,
    formatText: r,
    resetFormat: w,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: O
  };
};
function Fn(e) {
  switch (e) {
    case A.TOP_LEFT:
    case A.BOTTOM_RIGHT:
      return "nwse-resize";
    case A.TOP_RIGHT:
    case A.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case A.BOTTOM:
      return "ns-resize";
    case A.LEFT:
    case A.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Wn({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const f = n - t, m = i - o;
  let g = a, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, a - f), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, a + f), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, a - f), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, a + f), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, a - f);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, a + f);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const p = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / p > h ? h = Math.max(s.minHeight, g / p) : g = Math.max(s.minWidth, h * p) : [A.TOP, A.BOTTOM].includes(e) ? g = h * p : [A.LEFT, A.RIGHT].includes(e) && (h = g / p);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (a / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (a / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function qn(e, { width: t, height: o }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const be = 'page-break, [data-page-break="true"]', Xt = (e) => ce[e] || ce.A4, Zn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = Xt(o), i = e.querySelectorAll(be), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((f, m) => {
    const h = f.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: h,
      height: n.height
    });
  }), a;
}, Jt = (e, t = 100, o = fe) => {
  const n = Xt(e), i = Pn(o), a = n.height - i, r = t / 100;
  return a / r;
}, Yn = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(be);
    if (o.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), i = n.top + n.height / 2;
    for (let a = o.length - 1; a >= 0; a--)
      if (o[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, Ct = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], n = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? n.length > 0 && (o.push(n), n = []) : n.push(i);
  return n.length > 0 && o.push(n), o.length === 0 && t.length > 0 && o.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), o;
}, Vn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Kn = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, Xn = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const f = Jt(o, n, i) * (t - 1), m = Array.from(e.children);
    let g = 0, h = null;
    for (let p = 0; p < m.length; p++) {
      const O = m[p];
      if (O.tagName === "PAGE-BREAK" || O.getAttribute("data-page-break") === "true")
        continue;
      const w = Vn(O);
      if (g + w > f) {
        h = O;
        break;
      }
      g += w;
    }
    if (h) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(p, h), a) {
        const O = e.innerHTML;
        a(O);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const O = document.createElement("p");
      if (O.innerHTML = "<br>", e.appendChild(O), a) {
        const w = e.innerHTML;
        a(w);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, Jn = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const f = Array.from(e.querySelectorAll(be));
    if (t > f.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let g = !1, h = [], p = null;
    if (t === 0) {
      const w = f[0];
      if (!w)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== w; )
        h.push(d), d = d.nextSibling;
      p = w;
    } else {
      const w = f[t - 1];
      if (!w)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = f[t];
      let b = w.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      p = w;
    }
    if (m && m.rangeCount > 0) {
      const d = m.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          g = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), h.forEach((w) => {
      w.parentNode && w.remove();
    }), e.querySelectorAll(be).forEach((w, d) => {
      w.setAttribute("data-page-number", String(d + 2));
    }), g && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const w = e.innerHTML;
      n(w);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (f) {
    return console.error("[removePageAndContent] Failed to remove page:", f), !1;
  }
}, Qn = 200, er = 50, It = 3, tr = 20, Qt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, nr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = Qt(a);
    if (r < 1)
      continue;
    if (o + r > t)
      return n === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      };
    o += r, n = a;
  }
  return null;
}, rr = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const f = Jt(t, o, n);
    let m = Ct(e), g = !1, h = 0;
    for (let p = 0; p < m.length && h < It; p++) {
      const O = m[p], w = nr(O, f);
      if (w && w.overflowIndex > 0) {
        let d = 0;
        for (let _ = 0; _ < O.length; _++) {
          const T = O[_];
          T && T.getBoundingClientRect && (d += Qt(T));
        }
        if (d - f < tr)
          continue;
        const M = p + 2;
        Kn(w.overflowElement, M) && (g = !0, h++, m = Ct(e));
      }
    }
    if (g) {
      if (i) {
        const p = e.innerHTML;
        i(p);
      }
      setTimeout(() => {
        a && a(), h >= It && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, er);
    }
    return g;
  } catch (f) {
    return console.warn("[checkAndReflow] Reflow failed:", f), !1;
  } finally {
    r.current = !1;
  }
}, or = (e, t, o = Qn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, ar = 400, en = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(be)[t - 1];
        a && a.nextSibling && (o = a.nextSibling, n = 0);
      }
      if (o) {
        const i = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? i.setStart(o, n) : i.setStart(o, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, ir = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const r = t.querySelectorAll(be)[o - 1];
      if (r)
        i = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), r = e.getBoundingClientRect(), s = e.scrollTop + (a.top - r.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(o) : en(t, o);
      }, ar);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, sr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, cr = 300, lr = (e, t, o = 100, n = "NARROW") => {
  const i = _e(), a = te(null), r = te(null), s = te(e), f = te(o), m = te(n), g = te(!1);
  ae(() => {
    s.current = e;
  }, [e]), ae(() => {
    f.current = o;
  }, [o]), ae(() => {
    m.current = n;
  }, [n]), ae(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const h = q((u = {}) => t?.current ? Zn(t.current, u) : [], [t]), p = q((u = {}) => {
    const S = h(u);
    return i.updatePageBoundaries(S), S;
  }, [h, i]), O = q(async (u) => {
    if (!t?.current)
      return !1;
    const S = s.current || "A4", y = f.current || 100, P = m.current || "NARROW";
    return Xn(
      t.current,
      u,
      S,
      y,
      P,
      i.updateContinuousContent,
      p
    );
  }, [t, i, p]), w = q(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", S = f.current || 100, y = m.current || "NARROW";
    rr(
      t.current,
      u,
      S,
      y,
      i.updateContinuousContent,
      p,
      g,
      w
    );
  }, [t, i, p]), d = q((u) => {
    or(w, r, u);
  }, [w]), b = q((u = {}) => {
    const S = typeof u.delay == "number" ? u.delay : cr;
    sr(p, a, u, S);
  }, [p]), M = q((u) => !u?.current || !t?.current ? 0 : Yn(u.current, t.current), [t]), I = q((u) => {
    t?.current && en(t.current, u);
  }, [t]), _ = q((u, S) => {
    if (!S?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    ir(S.current, t.current, u, I);
  }, [t, I]), T = q((u) => t?.current ? Jn(
    t.current,
    u,
    h,
    i.updateContinuousContent,
    p,
    I,
    w
  ) : !1, [t, h, i, p, I, w]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: p,
    getCurrentPage: M,
    scrollToPage: _,
    positionCursorAtPage: I,
    checkAndReflow: w,
    triggerAutoReflow: d,
    removePageAndContent: T,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, ur = "html-editor-storage", dr = 1, ue = "images";
function pr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Pe() {
  return new Promise((e, t) => {
    const o = indexedDB.open(ur, dr);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(ue) || i.createObjectStore(ue, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function fr(e) {
  return new Promise((t, o) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      o(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      o(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (a) => {
      const r = a.target.result, f = r.split(",")[1].length * 3 / 4;
      if (f > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Pe(), g = `editor-image-${pr()}`, p = m.transaction([ue], "readwrite").objectStore(ue), O = {
          key: g,
          dataUrl: r,
          size: f,
          type: e.type,
          timestamp: Date.now()
        }, w = p.add(O);
        w.onsuccess = () => {
          m.close(), t(g);
        }, w.onerror = () => {
          m.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (m) {
        o(m);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function gr(e) {
  try {
    const t = await Pe();
    return new Promise((o, n) => {
      const r = t.transaction([ue], "readonly").objectStore(ue).get(e);
      r.onsuccess = () => {
        t.close();
        const s = r.result;
        o(s ? s.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function hr(e) {
  try {
    const t = await Pe();
    return new Promise((o, n) => {
      const r = t.transaction([ue], "readwrite").objectStore(ue).delete(e);
      r.onsuccess = () => {
        t.close(), o();
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function aa() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const a = e.transaction([ue], "readwrite").objectStore(ue).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function ia() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const a = e.transaction([ue], "readonly").objectStore(ue).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
function mr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Lt(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function yr(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, Le(o);
}
function Le(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${mr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i;
      if (a.tagName === "DIV") {
        const r = Le(a);
        r.trim() ? t.push(r) : t.push("<p><br></p>");
      } else if (a.tagName === "P")
        t.push(a.outerHTML);
      else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = Le(a), s = a.tagName.toLowerCase(), f = Lt(a);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else if (a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else {
        const r = Le(a), s = a.tagName.toLowerCase(), f = Lt(a);
        t.push(`<${s}${f}>${r}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "<p><br></p>" : t.join("");
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Er = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), jt = (e) => {
  const t = Er(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, tn = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), xr = (e) => {
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
var Tr = {
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
const vr = at(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, f) => Ye(
    "svg",
    {
      ref: f,
      ...Tr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: tn("lucide", i),
      ...!a && !xr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([m, g]) => Ye(m, g)),
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
const K = (e, t) => {
  const o = at(
    ({ className: n, ...i }, a) => Ye(vr, {
      ref: a,
      iconNode: t,
      className: tn(
        `lucide-${br(jt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return o.displayName = jt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], _r = K("bold", Ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], kr = K("chevron-left", Pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Rr = K("chevron-right", wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Sr = K("file-check", Or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ze = K("file-text", Mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Cr = K("hash", Nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Lr = K("heading-1", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Dr = K("heading-2", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Hr = K("heading-3", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], $r = K("image-upscale", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ur = K("image", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Wr = K("italic", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Zr = K("link", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Vr = K("list-indent-decrease", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Xr = K("list-indent-increase", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Qr = K("list-ordered", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], nn = K("list", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], no = K("plus", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], oo = K("redo", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], io = K("scaling", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], co = K("settings", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], uo = K("strikethrough", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], fo = K("table", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], rn = K("text-align-center", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], on = K("text-align-end", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], yo = K("text-align-justify", mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], an = K("text-align-start", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], xo = K("trash-2", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], vo = K("underline", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], _o = K("undo", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ko = K("x", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ro = K("zoom-in", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], So = K("zoom-out", Oo), Mo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Wt(), { pages: r, activePage: s, continuousContent: f, editorMode: m } = a, [g, h] = le(0), [p, O] = le([]);
  ae(() => {
    if (n !== void 0 && i !== void 0) {
      if (h(n), f) {
        const M = document.createElement("div");
        M.innerHTML = f;
        const I = M.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(I).map((T, u) => {
          const S = parseInt(T.tagName.charAt(1)), y = T.textContent.trim();
          return y ? {
            id: `heading-${u}`,
            level: S,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        O(_);
      }
      return;
    }
    let d = 0;
    const b = [];
    r.forEach((M, I) => {
      if (M.content) {
        const _ = document.createElement("div");
        _.innerHTML = M.content;
        const u = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        d += u.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, P) => {
          const j = parseInt(y.tagName.charAt(1)), k = y.textContent.trim();
          k && b.push({
            id: `heading-${I}-${P}`,
            level: j,
            text: k,
            page: I + 1
          });
        });
      }
    }), h(d), O(b);
  }, [r, n, i, f]);
  const w = i !== void 0 ? i : r.length;
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
            /* @__PURE__ */ l.jsx(ze, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(Rr, { size: 16 }) : /* @__PURE__ */ l.jsx(kr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Sr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: w })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Cr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(ze, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          p.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(nn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: p.map((d) => {
              const b = d.level === 1 ? Lr : d.level === 2 ? Dr : Hr;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(b, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      d.page
                    ] })
                  ]
                },
                d.id
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
};
class No {
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
const Dt = new No("Editor"), sn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Co = 32;
function Io(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Co}px`, e.dataset.indentLevel = String(n));
}
function Lo(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && sn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function jo() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), o = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((r) => {
    document.createRange().selectNodeContents(r), t.intersectsNode(r) && o.add(r);
  }), o.size === 0 && n.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let m = s.parentElement;
      for (; m && m !== n; ) {
        if (m.tagName && sn.has(m.tagName.toUpperCase())) {
          o.add(m);
          break;
        }
        m = m.parentElement;
      }
    }
  }), Array.from(o).filter((r) => {
    let s = r.parentElement;
    for (; s; ) {
      if (o.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function Do(e) {
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
    let o = t.nextNode();
    for (; o; ) {
      const n = o.textContent;
      if (n.startsWith("    ")) {
        o.textContent = n.substring(4);
        break;
      }
      o = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function rt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let o = jo();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = Lo(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const i = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Io(r, e);
      return;
    }
    e ? Do(r) : r.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + r.innerHTML;
  });
  try {
    const r = document.createRange(), s = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), f = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const p = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let O = null, w = p.nextNode();
      for (; w; )
        O = w, w = p.nextNode();
      return O;
    }, m = s(i);
    m ? r.setStart(m, 0) : r.setStart(i, 0);
    const g = f(a);
    g ? r.setEnd(g, g.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
  } catch {
    try {
      const s = document.createRange();
      s.setStartBefore(i), s.setEndAfter(a), t.removeAllRanges(), t.addRange(s);
    } catch (s) {
      console.warn("Could not restore selection after indentation:", s);
    }
  }
  return !0;
}
function zo(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, o = window.getSelection(), n = o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
  return o && o.rangeCount > 0 && n && !n.collapsed && rt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const ut = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o,
  canUndo: n = !1,
  canRedo: i = !1
}) => {
  const a = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const f = await fr(r), m = await gr(f);
      if (m) {
        const h = `<img src="${m}" data-key="${f}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Dt.info("Image inserted", { key: f });
      }
      const g = document.getElementById("image-upload");
      g && (g.value = "");
    } catch (s) {
      Dt.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        disabled: !n,
        title: "Undo",
        style: { opacity: n ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(_o, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(oo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(_r, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(vo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(an, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(on, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(yo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        defaultValue: "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala (සිංහල)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota (සිංහල)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil (தமிழ்)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans", children: "Noto Sans (Unicode)" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: lt,
        title: "Font Size",
        children: zn.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
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
        children: /* @__PURE__ */ l.jsx(nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(Qr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ l.jsx(Xr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          rt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ l.jsx(Vr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(Zr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(fo, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(ze, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && a(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(Ur, { size: 16 })
      }
    )
  ] });
};
ut.propTypes = {
  currentFormat: x.shape({
    bold: x.bool,
    italic: x.bool,
    underline: x.bool,
    strikethrough: x.bool,
    alignLeft: x.bool,
    alignCenter: x.bool,
    alignRight: x.bool,
    alignJustify: x.bool,
    fontFamily: x.string,
    fontSize: x.string,
    headingLevel: x.string
  }).isRequired,
  onFormatText: x.func.isRequired,
  onAddPageBreak: x.func,
  canUndo: x.bool,
  canRedo: x.bool
};
ut.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Ho(e) {
  if (!e || typeof e != "string")
    return e;
  const t = document.createElement("div");
  return t.innerHTML = e, Te(t);
}
function Te(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      if (a)
        if (a.match(/^\s*$/) && a.includes(`
`)) {
          const r = a.split(`
`).filter((s) => s.trim());
          r.length > 0 ? r.forEach((s) => {
            s.trim() && t.push(`<p>${ot(s.trim())}</p>`);
          }) : t.push("<p><br></p>");
        } else
          t.push(`<p>${ot(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i;
      if (a.tagName === "DIV") {
        const r = Te(a);
        r.trim() ? t.push(`<p>${r}</p>`) : t.push("<p><br></p>");
      } else if (a.tagName === "P") {
        const r = Te(a);
        t.push(`<p>${r}</p>`);
      } else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = Te(a), s = a.tagName.toLowerCase(), f = zt(a);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else {
        const r = Te(a), s = a.tagName.toLowerCase(), f = zt(a);
        t.push(`<${s}${f}>${r}</${s}>`);
      }
    }
  }
  return t.join("");
}
function zt(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function ot(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Bo(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = Ho(o) : o = $o(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function $o(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => ot(a.trim())).join("<br>")}</p>`;
  }).join("");
}
const dt = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: a,
  onKeyDown: r,
  onClick: s,
  onScroll: f,
  onPaste: m,
  zoomLevel: g = 100,
  pageMargins: h = fe
}) => {
  const p = Bt(h), O = g / 100, w = (T, u) => {
    if (!T) return !1;
    const S = T.getBoundingClientRect(), y = u - S.top;
    return y < p.top || y > S.height - p.bottom;
  }, d = (T) => T ? T.nodeType === Node.ELEMENT_NODE ? T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true" : T.parentElement && d(T.parentElement) : !1, b = (T) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const S = u.getRangeAt(0), { startContainer: y, endContainer: P } = S;
    if ((d(y) || d(P)) && (T.key.length === 1 || T.key === "Enter" || T.key === " "))
      return T.preventDefault(), !1;
    if (zo(T))
      return !1;
    if ((T.key === "Backspace" || T.key === "Delete") && (d(y) || d(P)))
      return T.preventDefault(), !1;
    r && r(T);
  }, M = (T) => {
    if (!i.current) return;
    const u = T.target;
    if (d(u)) {
      T.preventDefault();
      return;
    }
    if (w(i.current, T.clientY)) {
      T.preventDefault();
      const S = i.current.getBoundingClientRect();
      if (T.clientY - S.top < p.top) {
        const P = i.current.firstElementChild;
        if (P && P.tagName !== "PAGE-BREAK") {
          const j = document.createRange(), k = window.getSelection();
          j.setStart(P, 0), j.collapse(!0), k.removeAllRanges(), k.addRange(j);
        }
      } else {
        const P = i.current.lastElementChild;
        if (P && P.tagName !== "PAGE-BREAK") {
          const j = document.createRange(), k = window.getSelection();
          j.selectNodeContents(P), j.collapse(!1), k.removeAllRanges(), k.addRange(j);
        }
      }
      return;
    }
    s && s(T);
  }, I = (T) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const S = u.getRangeAt(0), { startContainer: y } = S;
    if (d(y))
      return T.preventDefault(), !1;
  }, _ = (T) => {
    const u = Bo(T);
    m && m(T, u);
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
        transform: `scale(${O})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${t.height}px`,
            width: `${t.width}px`,
            backgroundColor: "white",
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: lt,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: b,
          onBeforeInput: I,
          onClick: M,
          onScroll: f,
          onPaste: _,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
dt.propTypes = {
  content: x.string.isRequired,
  dimensions: x.shape({
    width: x.number.isRequired,
    height: x.number.isRequired
  }).isRequired,
  pageSize: x.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: x.arrayOf(
    x.shape({
      id: x.string.isRequired,
      pageNumber: x.number.isRequired,
      top: x.number,
      height: x.number
    })
  ),
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: x.func.isRequired,
  onKeyDown: x.func,
  onClick: x.func,
  onScroll: x.func,
  onPaste: x.func,
  zoomLevel: x.number,
  pageMargins: x.string
};
dt.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  zoomLevel: 100,
  pageMargins: fe
};
const pt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = fe,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: f,
  onDeletePage: m,
  onPageSizeChange: g,
  onPageMarginsChange: h,
  onZoomIn: p,
  onZoomOut: O,
  onZoomReset: w
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (u) => {
    s && s(u);
  }, M = () => {
    f && f();
  }, I = (u) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, _ = (u) => {
    g && g(u);
  }, T = (u) => {
    h && h(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(co, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: o,
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
              onChange: (u) => T(u.target.value),
              children: kn().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: wn(u) }, u))
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
          onClick: O,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(So, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: p,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Ro, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: w,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, S) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${S === t ? "active" : ""}`,
          onClick: () => b(S),
          "aria-label": `Go to page ${S + 1}`,
          "aria-current": S === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(ze, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              S + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (y) => {
            y.stopPropagation(), I(S);
          },
          "aria-label": `Delete page ${S + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(ko, { size: 14 })
        }
      )
    ] }, u.id || `page-${S}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: M,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(no, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
pt.propTypes = {
  pageBoundaries: x.arrayOf(
    x.shape({
      id: x.string.isRequired,
      pageNumber: x.number.isRequired,
      top: x.number,
      height: x.number
    })
  ),
  activePage: x.number,
  pageSize: x.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: x.string,
  zoomLevel: x.number,
  canZoomIn: x.bool,
  canZoomOut: x.bool,
  onNavigate: x.func,
  onAddPage: x.func,
  onDeletePage: x.func,
  onPageSizeChange: x.func,
  onPageMarginsChange: x.func,
  onZoomIn: x.func,
  onZoomOut: x.func,
  onZoomReset: x.func
};
pt.defaultProps = {
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
const Go = He.memo(pt), ft = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const a = te(null), r = te(null), s = te(null), f = te(null), m = te(i), g = te(!1), h = _e();
  ae(() => {
    m.current = i;
  }, [i]);
  const p = q((y) => {
    if (!pe(y)) return;
    a.current && (ye(a.current), a.current = null), y.classList.add("selected");
    const P = Vt(y, m.current);
    P && (a.current = P, r.current = y, document.body.appendChild(P), P.querySelectorAll(".resize-handler").forEach((k) => {
      k.addEventListener("mousedown", w);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(y)));
  }, [o]), O = q(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (ye(a.current), a.current = null), s.current = null, f.current = null, g.current = !1, n && n();
  }, [n]), w = q((y) => {
    if (y.preventDefault(), y.stopPropagation(), !r.current) return;
    const P = y.currentTarget.dataset.handler, j = r.current.getBoundingClientRect(), k = window.pageYOffset || document.documentElement.scrollTop, F = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: y.clientX - j.left - F,
      offsetY: y.clientY - j.top - k
    }, f.current = P, g.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = T(P), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = q((y) => {
    if (!g.current || !r.current || !s.current || !f.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: P, y: j, width: k, height: F } = s.current, V = f.current, X = y.clientX, B = y.clientY, re = u({
      handler: V,
      startX: P,
      startY: j,
      currentX: X,
      currentY: B,
      startWidth: k,
      startHeight: F,
      options: m.current
    });
    S(r.current, re), a.current && nt(a.current, r.current);
  }, []), b = q((y) => {
    if (g.current) {
      if (y.preventDefault(), y.stopPropagation(), r.current && s.current) {
        const P = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, j = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (P.width !== j.width || P.height !== j.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: j } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: P } }
        );
      }
      if (s.current = null, f.current = null, g.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(P), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), M = q((y) => {
    a.current && !a.current.contains(y.target) && O();
    const P = y.target;
    if (pe(P)) {
      if (P === r.current)
        return;
      p(P);
    } else
      console.log("Clicked on non-image element");
  }, [p, O]), I = q((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && r.current && !g.current) {
      y.preventDefault();
      const P = r.current;
      if (P.parentNode) {
        P.parentNode.removeChild(P), O();
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(j);
      }
    }
    if (y.key === "Escape" && r.current && O(), r.current && !g.current) {
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === ">") {
        y.preventDefault();
        const P = r.current.offsetWidth, j = Math.min(m.current.maxWidth || 800, P + 10);
        S(r.current, { width: j, height: r.current.offsetHeight });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "<") {
        y.preventDefault();
        const P = r.current.offsetWidth, j = Math.max(m.current.minWidth || 50, P - 10);
        S(r.current, { width: j, height: r.current.offsetHeight });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "+") {
        y.preventDefault();
        const P = r.current.offsetHeight, j = Math.min(m.current.maxHeight || 600, P + 10);
        S(r.current, { width: r.current.offsetWidth, height: j });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "-") {
        y.preventDefault();
        const P = r.current.offsetHeight, j = Math.max(m.current.minHeight || 50, P - 10);
        S(r.current, { width: r.current.offsetWidth, height: j });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((y.ctrlKey || y.metaKey) && y.key === "r") {
        y.preventDefault(), S(r.current, { width: 300, height: 200 });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
    }
  }, [e, O]), _ = q(() => {
    a.current && r.current && nt(a.current, r.current);
  }, []);
  ae(() => {
    if (!e.current) return;
    const P = e.current.closest(".editor-viewport");
    return P && (P.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      P && P.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), ae(() => {
    if (!e.current) return;
    const y = e.current;
    y.addEventListener("click", M), y.addEventListener("keydown", I);
    const P = y.closest(".editor-viewport");
    return P && P.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      y.removeEventListener("click", M), y.removeEventListener("keydown", I), P && P.removeEventListener("scroll", _), window.removeEventListener("resize", _), g.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ye(a.current);
    };
  }, [e, M, I, _, d, b]), ae(() => {
    if (!e.current) return;
    const y = new MutationObserver((P) => {
      P.forEach((j) => {
        j.type === "childList" && (j.removedNodes.length > 0 && j.removedNodes.forEach((k) => {
          k.nodeType === Node.ELEMENT_NODE && pe(k) && k === r.current && O();
        }), j.addedNodes.length > 0 && j.addedNodes.forEach((k) => {
          if (k.nodeType === Node.ELEMENT_NODE)
            if (pe(k))
              setTimeout(() => {
                p(k);
              }, 50);
            else {
              const F = k.querySelectorAll ? k.querySelectorAll("img") : [];
              F.length > 0 && setTimeout(() => {
                p(F[0]);
              }, 50);
            }
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      y.disconnect();
    };
  }, [e, O, p]);
  function T(y) {
    switch (y) {
      case A.TOP_LEFT:
      case A.BOTTOM_RIGHT:
        return "nwse-resize";
      case A.TOP_RIGHT:
      case A.BOTTOM_LEFT:
        return "nesw-resize";
      case A.TOP:
      case A.BOTTOM:
        return "ns-resize";
      case A.LEFT:
      case A.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function u({
    handler: y,
    startX: P,
    startY: j,
    currentX: k,
    currentY: F,
    startWidth: V,
    startHeight: X,
    options: B = ge
  }) {
    const re = k - P, J = F - j;
    let G = V, U = X;
    switch (y) {
      case A.TOP_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, X - J);
        break;
      case A.TOP_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, X - J);
        break;
      case A.BOTTOM_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, X + J);
        break;
      case A.BOTTOM_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, X + J);
        break;
      case A.TOP:
        U = Math.max(B.minHeight, X - J);
        break;
      case A.BOTTOM:
        U = Math.max(B.minHeight, X + J);
        break;
      case A.LEFT:
        G = Math.max(B.minWidth, V - re);
        break;
      case A.RIGHT:
        G = Math.max(B.minWidth, V + re);
        break;
      default:
        return { width: G, height: U };
    }
    if (B.preserveAspectRatio && B.aspectRatio) {
      const oe = V / X;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(y) ? G / oe > U ? U = Math.max(B.minHeight, G / oe) : G = Math.max(B.minWidth, U * oe) : [A.TOP, A.BOTTOM].includes(y) ? G = U * oe : [A.LEFT, A.RIGHT].includes(y) && (U = G / oe);
    }
    return B.maxWidth && G > B.maxWidth && (G = B.maxWidth, B.preserveAspectRatio && B.aspectRatio && (U = G / (V / X))), B.maxHeight && U > B.maxHeight && (U = B.maxHeight, B.preserveAspectRatio && B.aspectRatio && (G = U * (V / X))), G = Math.max(B.minWidth, G), U = Math.max(B.minHeight, U), {
      width: Math.round(G),
      height: Math.round(U)
    };
  }
  function S(y, { width: P, height: j }) {
    pe(y) && (y.tagName === "IMG" ? (y.style.width = `${P}px`, y.style.height = `${j}px`, y.width = P, y.height = j) : y.tagName === "DIV" && (y.style.width = `${P}px`, y.style.height = `${j}px`));
  }
  return null;
};
ft.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: x.func,
  onImageSelect: x.func,
  onImageDeselect: x.func,
  resizeOptions: x.shape({
    minWidth: x.number,
    minHeight: x.number,
    maxWidth: x.number,
    maxHeight: x.number,
    aspectRatio: x.bool,
    preserveAspectRatio: x.bool,
    defaultWidth: x.number,
    defaultHeight: x.number
  })
};
ft.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const gt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [f, m] = le(!1), [g, h] = le("top"), [p, O] = le(a), w = te(null), d = te(null), b = _e(), M = (k) => {
    if (!k) return null;
    const F = window.getComputedStyle(k);
    return {
      float: F.float || "none",
      margin: k.style.margin || "",
      display: F.display || "inline",
      width: k.style.width || k.width || "",
      height: k.style.height || k.height || "",
      aspectRatio: p
    };
  }, I = () => {
    if (!e) return "left";
    const k = window.getComputedStyle(e);
    return k.float || k.display === "block" ? "left" : k.display === "flex" && k.justifyContent === "center" ? "center" : k.float === "right" ? "right" : "left";
  }, [_, T] = le(I());
  ae(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ae(() => {
    if (e) {
      let k = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      k && (d.current = k);
    }
  }, [e]), yn(() => {
    if (!e || !w.current) return;
    const k = () => {
      const V = e.getBoundingClientRect(), X = w.current.getBoundingClientRect();
      d.current;
      const B = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, re = V.bottom >= 0 && V.top <= B.height && V.right >= 0 && V.left <= B.width;
      let J = "top", G = 0, U = 0;
      if (re) {
        const C = V.top - X.height - 10, N = B.height - V.bottom - X.height - 10;
        N > C && N > 0 ? (J = "bottom", G = V.bottom + 10) : (J = "top", G = V.top - X.height - 10);
      } else
        J = "top", G = 10;
      U = V.left + V.width / 2 - X.width / 2;
      const oe = window.innerWidth, E = window.innerHeight;
      let c = U, v = G;
      U < 10 ? c = 10 : U + X.width > oe - 10 && (c = oe - X.width - 10), G < 10 ? v = 10 : G + X.height > E - 10 && (v = E - X.height - 10), s({
        top: v,
        left: c
      }), h(J), m(!0);
    };
    k();
    const F = () => {
      k();
    };
    return d.current && d.current.addEventListener("scroll", F), window.addEventListener("scroll", F), window.addEventListener("resize", F), () => {
      d.current && d.current.removeEventListener("scroll", F), window.removeEventListener("scroll", F), window.removeEventListener("resize", F), m(!1);
    };
  }, [e]), ae(() => {
    const k = (F) => {
      w.current && !w.current.contains(F.target) && F.target !== e && i();
    };
    return document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [e, i]);
  const u = () => {
    if (e) {
      const k = M(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", T("left");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("left");
    }
  }, S = () => {
    if (e) {
      const k = M(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", T("center");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("center");
    }
  }, y = () => {
    if (e) {
      const k = M(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", T("right");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("right");
    }
  }, P = () => {
    if (e && e.parentNode) {
      const k = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: k } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, j = () => {
    const k = p, F = !p;
    O(F), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: k } }
    ), o && o(F);
  };
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: w,
        className: "image-tooltip-menu",
        "data-menu-position": g,
        "aria-hidden": !f,
        style: {
          position: "fixed",
          top: `${r.top}px`,
          left: `${r.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: f ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: f ? 1 : 0,
          visibility: f ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: j,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ l.jsx(io, { size: 14 }) : /* @__PURE__ */ l.jsx($r, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: u,
              title: "Align Left",
              style: {
                background: _ === "left" ? "#007bff" : "transparent",
                color: _ === "left" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(an, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: S,
              title: "Align Center",
              style: {
                background: _ === "center" ? "#007bff" : "transparent",
                color: _ === "center" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(rn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: y,
              title: "Align Right",
              style: {
                background: _ === "right" ? "#007bff" : "transparent",
                color: _ === "right" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(on, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: P,
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
              children: /* @__PURE__ */ l.jsx(xo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
gt.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
gt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Uo = 50, Fo = 50, Ht = 50, Wo = 100, qo = 500, ht = at(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: f = !0,
  showPageManager: m = !0
}, g) => {
  const h = Wt(), p = _e(), { pageSize: O, pageMargins: w, continuousContent: d, pageBoundaries: b, activePage: M, zoomLevel: I, canUndo: _, canRedo: T } = h, u = te(null), S = te(null), { currentFormat: y, formatText: P } = Un(), [j, k] = le(!1), [F, V] = le(null), [X, B] = le(!0), {
    checkAndUpdateBoundaries: re,
    getCurrentPage: J,
    scrollToPage: G,
    updateBoundaries: U,
    triggerAutoReflow: oe,
    removePageAndContent: E,
    insertPageBreakAtBoundary: c
  } = lr(O, S, I, w), v = je(() => st(O), [O]), [C, N] = le(!1), $ = te(null), H = te(!1), L = te(!1), W = te(!1), Z = te(d);
  ae(() => {
    if (S.current) {
      if (!W.current) {
        S.current.innerHTML = d, W.current = !0, Z.current = d;
        const D = setTimeout(() => {
          U();
        }, Uo);
        return () => clearTimeout(D);
      }
      if (Z.current !== d) {
        if (S.current.innerHTML !== d) {
          S.current.innerHTML = d;
          const ne = setTimeout(() => {
            if (U(), H.current) {
              H.current = !1;
              const de = Math.max(0, b.length - 1);
              p.setActivePage(de), setTimeout(() => {
                G(de, u);
              }, Ht);
            }
          }, Fo);
          return Z.current = d, () => clearTimeout(ne);
        }
        Z.current = d;
      }
    }
  }, [d, U, b.length, p, G]), ae(() => {
    r && W.current && r(d);
  }, [d, r]), bn(g, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => d,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => d.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      p.updateContinuousContent(D), S.current && (S.current.innerHTML = D, setTimeout(() => {
        U();
      }, 50));
    }
  }), [d, p, U]), ae(() => {
    const D = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const Y = q((D) => {
    let ne = D.currentTarget.innerHTML;
    ne = yr(ne), ne !== D.currentTarget.innerHTML && (D.currentTarget.innerHTML = ne), p.updateContinuousContent(ne), re(), oe(200);
    const de = J(u);
    de !== M && p.setActivePage(de);
  }, [re, p, J, M, oe, u]), ie = q((D) => {
    p.updatePageSize(D), U({ pageSize: D }), i && i(D);
  }, [p, U, i]), R = q((D) => {
    p.updatePageMargins(D), U({ pageMargins: D }), a && a(D);
  }, [p, U, a]), se = q((D) => {
    D < 0 || D >= b.length || (L.current = !0, p.setActivePage(D), G(D, u), setTimeout(() => {
      L.current = !1;
    }, qo), t && t(D));
  }, [p, G, t, b.length]), he = q(() => {
    const D = b.length + 1;
    c(D) && (H.current = !0, setTimeout(() => {
      if (H.current) {
        H.current = !1;
        const de = Math.max(0, b.length - 1);
        p.setActivePage(de), setTimeout(() => {
          G(de, u);
        }, Ht);
      }
    }, 100)), o && o();
  }, [b.length, c, p, G, o]), ke = q(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!S?.current) return;
      const Be = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Be), setTimeout(() => {
        U();
        const $e = J(u);
        p.setActivePage($e);
      }, 150);
    }
  }, [U, J, p, u]), mt = q((D) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    E(D) && (p.setActivePage(0), n && n(D));
  }, [b.length, E, p, n]), we = q(() => {
    p.zoomIn();
  }, [p]), Re = q(() => {
    p.zoomOut();
  }, [p]), Oe = q(() => {
    p.resetZoom();
  }, [p]);
  ae(() => {
    const D = (ne) => {
      if (ne.ctrlKey || ne.metaKey) {
        ["+", "=", "-", "_", "0"].includes(ne.key) && ne.preventDefault();
        const de = document.activeElement === S.current, Be = document.activeElement === u.current, $e = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || Be || !$e)
          switch (ne.key) {
            case "+":
            case "=":
              we();
              break;
            case "-":
            case "_":
              Re();
              break;
            case "0":
              Oe();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [we, Re, Oe]);
  const ln = q(() => {
    !u.current || !S.current || L.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (L.current) {
        $.current = null;
        return;
      }
      const D = J(u);
      D !== M && D >= 0 && p.setActivePage(D), $.current = null;
    }, Wo));
  }, [J, M, p]), un = je(() => {
    if (!d) return 0;
    const ne = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ne ? ne.length : 0;
  }, [d]), dn = b.length || 1, pn = q((D) => {
    k(!0), V(D);
  }, []), yt = q(() => {
    k(!1), V(null);
  }, []), fn = q((D, ne) => {
  }, []);
  return ae(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    f && /* @__PURE__ */ l.jsx(
      ut,
      {
        currentFormat: {
          ...y,
          imageSelected: j
        },
        onFormatText: P,
        onAddPageBreak: ke,
        canUndo: _,
        canRedo: T
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        Mo,
        {
          editorView: null,
          isCollapsed: C,
          onToggle: () => N((D) => !D),
          wordCount: un,
          pageCount: dn
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: u,
          onScroll: ln,
          children: /* @__PURE__ */ l.jsx(
            dt,
            {
              content: d,
              dimensions: v,
              pageSize: O,
              pageMargins: w,
              pageBoundaries: b,
              editorRef: S,
              onInput: Y,
              onClick: () => S.current?.focus(),
              zoomLevel: I
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        ft,
        {
          editorRef: S,
          onImageSelect: pn,
          onImageDeselect: yt,
          onImageResize: fn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: X,
            aspectRatio: X
          }
        }
      ),
      j && F && /* @__PURE__ */ l.jsx(
        gt,
        {
          imageElement: F,
          initialPreserveAspectRatio: X,
          onAlignChange: (D) => {
          },
          onAspectRatioToggle: (D) => {
            B(D);
          },
          onDelete: () => {
            if (F) {
              const D = F.getAttribute("data-key");
              D && hr(D).catch((ne) => {
                console.error("Failed to delete image from IndexedDB:", ne);
              });
            }
          },
          onClose: yt
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? He.cloneElement(e, {
        onNavigate: se,
        onAddPage: he,
        onDeletePage: mt,
        onPageSizeChange: ie,
        onPageMarginsChange: R,
        zoomLevel: I,
        canZoomIn: Je(I),
        canZoomOut: Qe(I),
        onZoomIn: we,
        onZoomOut: Re,
        onZoomReset: Oe
      }) : /* @__PURE__ */ l.jsx(
        Go,
        {
          pageBoundaries: b,
          activePage: M,
          pageSize: O,
          pageMargins: w,
          zoomLevel: I,
          canZoomIn: Je(I),
          canZoomOut: Qe(I),
          onNavigate: se,
          onAddPage: he,
          onDeletePage: mt,
          onPageSizeChange: ie,
          onPageMarginsChange: R,
          onZoomIn: we,
          onZoomOut: Re,
          onZoomReset: Oe
        }
      ) })
    ] })
  ] });
});
ht.displayName = "HtmlEditor";
ht.propTypes = {
  pageManagerComponent: x.element,
  onNavigatePage: x.func,
  onAddPage: x.func,
  onDeletePage: x.func,
  onPageSizeChange: x.func,
  onPageMarginsChange: x.func,
  onChange: x.func,
  showSidebar: x.bool,
  showToolbar: x.bool,
  showPageManager: x.bool
};
ht.defaultProps = {
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
class cn extends He.Component {
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
cn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
cn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const sa = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  zn as COMMON_FONT_SIZES,
  lt as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  $t as DEFAULT_PAGE_SIZE,
  Jo as DocumentProvider,
  ut as EditorToolbar,
  cn as ErrorBoundary,
  Yt as FONT_SIZE_MAP,
  ht as HtmlEditor,
  ft as ImageResizeHandlers,
  sa as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Go as PageManager,
  dt as PageView,
  A as RESIZE_HANDLERS,
  Mo as Sidebar,
  oa as applyImageDimensions,
  na as calculateResizeDimensions,
  aa as clearImages,
  Vt as createResizeOverlay,
  hr as deleteImage,
  ia as getAllImageKeys,
  Xo as getAvailablePageSizes,
  gr as getImage,
  ra as getImageDimensions,
  st as getPageDimensions,
  Qo as getPixelValue,
  ea as getPointValue,
  pe as isResizableImage,
  ta as isValidFontSize,
  Ko as isValidPageSize,
  No as logger,
  Bn as pixelsToPoints,
  Hn as pointsToPixels,
  ye as removeResizeOverlay,
  fr as saveImage,
  nt as updateResizeOverlay,
  lr as useContinuousReflow,
  Ft as useDocument,
  _e as useDocumentActions,
  Wt as useDocumentState,
  Un as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
