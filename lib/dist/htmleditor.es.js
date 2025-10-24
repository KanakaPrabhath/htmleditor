import qe, { createContext as On, useContext as kn, useReducer as Cn, useMemo as Se, useState as de, useCallback as B, useRef as re, useEffect as se, forwardRef as dt, createElement as nt, memo as Mn, useLayoutEffect as Nn, useImperativeHandle as In } from "react";
import { v4 as ft } from "uuid";
import { createPortal as Ln } from "react-dom";
function Dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var De = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function jn() {
  if (St) return Pe;
  St = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
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
var Ot;
function Bn() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === oe ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case j:
          return "Fragment";
        case S:
          return "Profiler";
        case b:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case P:
            return "Portal";
          case _:
            return c.displayName || "Context";
          case O:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var R = c.render;
            return c = c.displayName, c || (c = R.displayName || R.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case T:
            return R = c.displayName || null, R !== null ? R : e(c.type) || "Memo";
          case N:
            R = c._payload, c = c._init;
            try {
              return e(c(R));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function r(c) {
      try {
        t(c);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var L = R.error, I = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return L.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(c);
      }
    }
    function n(c) {
      if (c === j) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === N)
        return "<...>";
      try {
        var R = e(c);
        return R ? "<" + R + ">" : "<...>";
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
    function o(c) {
      if (k.call(c, "key")) {
        var R = Object.getOwnPropertyDescriptor(c, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, R) {
      function L() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: L,
        configurable: !0
      });
    }
    function h() {
      var c = e(this.type);
      return U[c] || (U[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function l(c, R, L, I, W, G) {
      var H = L.ref;
      return c = {
        $$typeof: A,
        type: c,
        key: R,
        props: L,
        _owner: I
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: W
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function f(c, R, L, I, W, G) {
      var H = R.children;
      if (H !== void 0)
        if (I)
          if (M(H)) {
            for (I = 0; I < H.length; I++)
              p(H[I]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(H);
      if (k.call(R, "key")) {
        H = e(c);
        var $ = Object.keys(R).filter(function(Y) {
          return Y !== "key";
        });
        I = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", E[H + I] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          H,
          $,
          H
        ), E[H + I] = !0);
      }
      if (H = null, L !== void 0 && (r(L), H = "" + L), o(R) && (r(R.key), H = "" + R.key), "key" in R) {
        L = {};
        for (var Z in R)
          Z !== "key" && (L[Z] = R[Z]);
      } else L = R;
      return H && s(
        L,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), l(
        c,
        H,
        L,
        i(),
        W,
        G
      );
    }
    function p(c) {
      d(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === N && (c._payload.status === "fulfilled" ? d(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function d(c) {
      return typeof c == "object" && c !== null && c.$$typeof === A;
    }
    var x = qe, A = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), V = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, M = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var K, U = {}, q = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), ae = J(n(a)), E = {};
    _e.Fragment = j, _e.jsx = function(c, R, L) {
      var I = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        c,
        R,
        L,
        !1,
        I ? Error("react-stack-top-frame") : q,
        I ? J(n(c)) : ae
      );
    }, _e.jsxs = function(c, R, L) {
      var I = 1e4 > V.recentlyCreatedOwnerStacks++;
      return f(
        c,
        R,
        L,
        !0,
        I ? Error("react-stack-top-frame") : q,
        I ? J(n(c)) : ae
      );
    };
  })()), _e;
}
var kt;
function Hn() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? De.exports = jn() : De.exports = Bn()), De.exports;
}
var y = Hn();
const rt = 100, ot = 50, at = 200, Ct = 5, it = (e) => e < at, st = (e) => e > ot, zn = 96, je = (e) => Math.round(e * zn), Fe = {
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
}, ge = "NORMAL", Kt = (e = ge) => {
  const t = Fe[e] || Fe[ge];
  return {
    top: je(t.top),
    bottom: je(t.bottom),
    left: je(t.left),
    right: je(t.right)
  };
}, $n = (e = ge) => {
  const t = Kt(e);
  return t.top + t.bottom;
}, Fn = () => Object.keys(Fe), Un = (e) => {
  const t = Fe[e];
  return t ? t.label : "Unknown";
}, ue = {
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
}, Xt = "A4", pt = (e) => {
  const t = ue[e] || ue[Xt];
  return {
    width: t.width,
    height: t.height
  };
}, _a = (e) => Object.keys(ue).includes(e), wa = () => Object.keys(ue), Oe = Xt, Te = "<p><br></p>", Gn = "continuous", we = (e, t = Oe) => ({
  id: ft(),
  index: e,
  size: t,
  content: Te,
  images: [],
  isBreakPoint: !1
}), ze = (e) => typeof e != "string" || e.trim() === "" ? Te : e, Jt = (e, t = Oe) => (e.length > 0 ? e : [we(0, t)]).map((n, i) => ({
  id: n.id || ft(),
  index: i,
  size: n.size || t,
  content: ze(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Wn = (e = Oe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: pt(e).height
}], ct = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Oe, n = Jt(e.pages || [we(0, r)], r);
  return {
    id: ft(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Gn,
    continuousContent: e.continuousContent || Te,
    pageBoundaries: e.pageBoundaries || Wn(r),
    zoomLevel: e.zoomLevel || rt,
    pageMargins: e.pageMargins || ge,
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
}, lt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Te, pageSize: i = Oe } = t.payload || {}, a = { ...we(0, i), content: ze(n) };
      return ct({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: ze(i)
      }, {
        ...e,
        pages: a,
        updatedAt: r
      };
    }
    case z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Jt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((o, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: r
      };
    }
    case z.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, we(n, e.pageSize));
      const a = i.map((s, h) => ({
        ...s,
        index: h,
        size: e.pageSize
      })), o = a.slice(0, -1).map((s, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const a = i.map((h, l) => ({
        ...h,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : n <= o && o > 0 && (o -= 1);
      const s = a.slice(0, -1).map((h, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case z.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        pt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const i = e.pages.map((o, s) => ({
        ...o,
        index: s,
        size: n
      })), a = i.slice(0, -1).map((o, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: i,
        pageBreaks: a,
        updatedAt: r
      };
    }
    case z.RESET_DOCUMENT:
      return ct();
    case z.UPDATE_CONTINUOUS_CONTENT: {
      const n = ze(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case z.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (n === "end")
        o = o + a + "<p><br></p>";
      else if (typeof n == "number") {
        const s = o.substring(0, n), h = o.substring(n);
        o = s + a + h;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = o;
        const h = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && h.length === 0)
          o = o + a + "<p><br></p>";
        else if (i < h.length) {
          const l = h[i], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", l.parentNode.insertBefore(f, l.nextSibling), f.parentNode.insertBefore(p, f.nextSibling), o = s.innerHTML;
        } else
          o = o + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: r
      };
    }
    case z.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, h) => {
        s.setAttribute("data-page-number", String(h + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: r
      };
    }
    case z.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== Te).join(`
`) || Te : e.continuousContent && e.continuousContent !== Te && (a = [{ ...we(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: r
      };
    }
    case z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < ot || n > at ? (console.warn(`Invalid zoom level: ${n}. Must be between ${ot} and ${at}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case z.ZOOM_IN: {
      if (!it(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Ct;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case z.ZOOM_OUT: {
      if (!st(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Ct;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case z.RESET_ZOOM:
      return e.zoomLevel === rt ? e : {
        ...e,
        zoomLevel: rt,
        updatedAt: r
      };
    case z.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = lt(e, n.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = lt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: r
      };
    }
    case z.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: r
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
}, Qt = On(null), Ra = ({ children: e, initialState: t = {} }) => {
  const [r, n] = Cn(lt, ct(t)), i = Se(() => ({
    initializeDocument: (o) => n({ type: z.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => n({ type: z.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => n({ type: z.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => n({ type: z.UPDATE_PAGES, payload: o }),
    addPage: (o) => n({ type: z.ADD_PAGE, payload: o }),
    deletePage: (o) => n({ type: z.DELETE_PAGE, payload: o }),
    setActivePage: (o) => n({ type: z.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => n({ type: z.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => n({ type: z.RESET_DOCUMENT }),
    updateContinuousContent: (o) => n({ type: z.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => n({ type: z.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => n({ type: z.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => n({ type: z.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => n({ type: z.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => n({ type: z.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => n({ type: z.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => n({ type: z.DUPLICATE_PAGE, payload: o }),
    setZoomLevel: (o) => n({ type: z.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => n({ type: z.ZOOM_IN }),
    zoomOut: () => n({ type: z.ZOOM_OUT }),
    resetZoom: () => n({ type: z.RESET_ZOOM }),
    updatePageMargins: (o) => n({ type: z.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, s) => n({
      type: z.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: s }
    }),
    undo: () => n({ type: z.UNDO }),
    redo: () => n({ type: z.REDO }),
    clearUndoRedo: () => n({ type: z.CLEAR_UNDO_REDO })
  }), []), a = Se(() => ({
    state: r,
    actions: i,
    dispatch: n
  }), [r, i]);
  return /* @__PURE__ */ y.jsx(Qt.Provider, { value: a, children: e });
}, en = () => {
  const e = kn(Qt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, tn = () => {
  const { state: e } = en();
  return e;
}, ke = () => {
  const { actions: e } = en();
  return e;
};
var Be = { exports: {} }, He = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function qn() {
  if (Mt) return ee;
  Mt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function O(u) {
    if (typeof u == "object" && u !== null) {
      var m = u.$$typeof;
      switch (m) {
        case t:
          switch (u = u.type, u) {
            case h:
            case l:
            case n:
            case a:
            case i:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case f:
                case A:
                case x:
                case o:
                  return u;
                default:
                  return m;
              }
          }
        case r:
          return m;
      }
    }
  }
  function _(u) {
    return O(u) === l;
  }
  return ee.AsyncMode = h, ee.ConcurrentMode = l, ee.ContextConsumer = s, ee.ContextProvider = o, ee.Element = t, ee.ForwardRef = f, ee.Fragment = n, ee.Lazy = A, ee.Memo = x, ee.Portal = r, ee.Profiler = a, ee.StrictMode = i, ee.Suspense = p, ee.isAsyncMode = function(u) {
    return _(u) || O(u) === h;
  }, ee.isConcurrentMode = _, ee.isContextConsumer = function(u) {
    return O(u) === s;
  }, ee.isContextProvider = function(u) {
    return O(u) === o;
  }, ee.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, ee.isForwardRef = function(u) {
    return O(u) === f;
  }, ee.isFragment = function(u) {
    return O(u) === n;
  }, ee.isLazy = function(u) {
    return O(u) === A;
  }, ee.isMemo = function(u) {
    return O(u) === x;
  }, ee.isPortal = function(u) {
    return O(u) === r;
  }, ee.isProfiler = function(u) {
    return O(u) === a;
  }, ee.isStrictMode = function(u) {
    return O(u) === i;
  }, ee.isSuspense = function(u) {
    return O(u) === p;
  }, ee.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === l || u === a || u === i || u === p || u === d || typeof u == "object" && u !== null && (u.$$typeof === A || u.$$typeof === x || u.$$typeof === o || u.$$typeof === s || u.$$typeof === f || u.$$typeof === j || u.$$typeof === b || u.$$typeof === S || u.$$typeof === P);
  }, ee.typeOf = O, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Zn() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, j = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function O(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === l || C === a || C === i || C === p || C === d || typeof C == "object" && C !== null && (C.$$typeof === A || C.$$typeof === x || C.$$typeof === o || C.$$typeof === s || C.$$typeof === f || C.$$typeof === j || C.$$typeof === b || C.$$typeof === S || C.$$typeof === P);
    }
    function _(C) {
      if (typeof C == "object" && C !== null) {
        var ce = C.$$typeof;
        switch (ce) {
          case t:
            var be = C.type;
            switch (be) {
              case h:
              case l:
              case n:
              case a:
              case i:
              case p:
                return be;
              default:
                var xe = be && be.$$typeof;
                switch (xe) {
                  case s:
                  case f:
                  case A:
                  case x:
                  case o:
                    return xe;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var u = h, m = l, g = s, T = o, N = t, F = f, oe = n, V = A, k = x, M = r, J = a, K = i, U = p, q = !1;
    function ae(C) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(C) || _(C) === h;
    }
    function E(C) {
      return _(C) === l;
    }
    function c(C) {
      return _(C) === s;
    }
    function R(C) {
      return _(C) === o;
    }
    function L(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function I(C) {
      return _(C) === f;
    }
    function W(C) {
      return _(C) === n;
    }
    function G(C) {
      return _(C) === A;
    }
    function H(C) {
      return _(C) === x;
    }
    function $(C) {
      return _(C) === r;
    }
    function Z(C) {
      return _(C) === a;
    }
    function Y(C) {
      return _(C) === i;
    }
    function ie(C) {
      return _(C) === p;
    }
    te.AsyncMode = u, te.ConcurrentMode = m, te.ContextConsumer = g, te.ContextProvider = T, te.Element = N, te.ForwardRef = F, te.Fragment = oe, te.Lazy = V, te.Memo = k, te.Portal = M, te.Profiler = J, te.StrictMode = K, te.Suspense = U, te.isAsyncMode = ae, te.isConcurrentMode = E, te.isContextConsumer = c, te.isContextProvider = R, te.isElement = L, te.isForwardRef = I, te.isFragment = W, te.isLazy = G, te.isMemo = H, te.isPortal = $, te.isProfiler = Z, te.isStrictMode = Y, te.isSuspense = ie, te.isValidElementType = O, te.typeOf = _;
  })()), te;
}
var It;
function nn() {
  return It || (It = 1, process.env.NODE_ENV === "production" ? He.exports = qn() : He.exports = Zn()), He.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ve, Lt;
function Yn() {
  if (Lt) return Ve;
  Lt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var h = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ve = i() ? Object.assign : function(a, o) {
    for (var s, h = n(a), l, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var p in s)
        t.call(s, p) && (h[p] = s[p]);
      if (e) {
        l = e(s);
        for (var d = 0; d < l.length; d++)
          r.call(s, l[d]) && (h[l[d]] = s[l[d]]);
      }
    }
    return h;
  }, Ve;
}
var Ke, Dt;
function gt() {
  if (Dt) return Ke;
  Dt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ke = e, Ke;
}
var Xe, jt;
function rn() {
  return jt || (jt = 1, Xe = Function.call.bind(Object.prototype.hasOwnProperty)), Xe;
}
var Je, Bt;
function Vn() {
  if (Bt) return Je;
  Bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ gt(), r = {}, n = /* @__PURE__ */ rn();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, h, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var p;
          try {
            if (typeof a[f] != "function") {
              var d = Error(
                (h || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = a[f](o, f, h, s, null, t);
          } catch (A) {
            p = A;
          }
          if (p && !(p instanceof Error) && e(
            (h || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = l ? l() : "";
            e(
              "Failed " + s + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Je = i, Je;
}
var Qe, Ht;
function Kn() {
  if (Ht) return Qe;
  Ht = 1;
  var e = nn(), t = Yn(), r = /* @__PURE__ */ gt(), n = /* @__PURE__ */ rn(), i = /* @__PURE__ */ Vn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var h = "Warning: " + s;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Qe = function(s, h) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(E) {
      var c = E && (l && E[l] || E[f]);
      if (typeof c == "function")
        return c;
    }
    var d = "<<anonymous>>", x = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: S(),
      arrayOf: O,
      element: _(),
      elementType: u(),
      instanceOf: m,
      node: F(),
      objectOf: T,
      oneOf: g,
      oneOfType: N,
      shape: V,
      exact: k
    };
    function A(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function P(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function j(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, R = 0;
      function L(W, G, H, $, Z, Y, ie) {
        if ($ = $ || d, Y = Y || H, ie !== r) {
          if (h) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = $ + ":" + H;
            !c[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ce] = !0, R++);
          }
        }
        return G[H] == null ? W ? G[H] === null ? new P("The " + Z + " `" + Y + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new P("The " + Z + " `" + Y + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : E(G, H, $, Z, Y);
      }
      var I = L.bind(null, !1);
      return I.isRequired = L.bind(null, !0), I;
    }
    function b(E) {
      function c(R, L, I, W, G, H) {
        var $ = R[L], Z = K($);
        if (Z !== E) {
          var Y = U($);
          return new P(
            "Invalid " + W + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + I + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return j(c);
    }
    function S() {
      return j(o);
    }
    function O(E) {
      function c(R, L, I, W, G) {
        if (typeof E != "function")
          return new P("Property `" + G + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var H = R[L];
        if (!Array.isArray(H)) {
          var $ = K(H);
          return new P("Invalid " + W + " `" + G + "` of type " + ("`" + $ + "` supplied to `" + I + "`, expected an array."));
        }
        for (var Z = 0; Z < H.length; Z++) {
          var Y = E(H, Z, I, W, G + "[" + Z + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return j(c);
    }
    function _() {
      function E(c, R, L, I, W) {
        var G = c[R];
        if (!s(G)) {
          var H = K(G);
          return new P("Invalid " + I + " `" + W + "` of type " + ("`" + H + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(E);
    }
    function u() {
      function E(c, R, L, I, W) {
        var G = c[R];
        if (!e.isValidElementType(G)) {
          var H = K(G);
          return new P("Invalid " + I + " `" + W + "` of type " + ("`" + H + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(E);
    }
    function m(E) {
      function c(R, L, I, W, G) {
        if (!(R[L] instanceof E)) {
          var H = E.name || d, $ = ae(R[L]);
          return new P("Invalid " + W + " `" + G + "` of type " + ("`" + $ + "` supplied to `" + I + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return j(c);
    }
    function g(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function c(R, L, I, W, G) {
        for (var H = R[L], $ = 0; $ < E.length; $++)
          if (A(H, E[$]))
            return null;
        var Z = JSON.stringify(E, function(ie, C) {
          var ce = U(C);
          return ce === "symbol" ? String(C) : C;
        });
        return new P("Invalid " + W + " `" + G + "` of value `" + String(H) + "` " + ("supplied to `" + I + "`, expected one of " + Z + "."));
      }
      return j(c);
    }
    function T(E) {
      function c(R, L, I, W, G) {
        if (typeof E != "function")
          return new P("Property `" + G + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var H = R[L], $ = K(H);
        if ($ !== "object")
          return new P("Invalid " + W + " `" + G + "` of type " + ("`" + $ + "` supplied to `" + I + "`, expected an object."));
        for (var Z in H)
          if (n(H, Z)) {
            var Y = E(H, Z, I, W, G + "." + Z, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return j(c);
    }
    function N(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var c = 0; c < E.length; c++) {
        var R = E[c];
        if (typeof R != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(R) + " at index " + c + "."
          ), o;
      }
      function L(I, W, G, H, $) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], C = ie(I, W, G, H, $, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && Z.push(C.data.expectedType);
        }
        var ce = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new P("Invalid " + H + " `" + $ + "` supplied to " + ("`" + G + "`" + ce + "."));
      }
      return j(L);
    }
    function F() {
      function E(c, R, L, I, W) {
        return M(c[R]) ? null : new P("Invalid " + I + " `" + W + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return j(E);
    }
    function oe(E, c, R, L, I) {
      return new P(
        (E || "React class") + ": " + c + " type `" + R + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function V(E) {
      function c(R, L, I, W, G) {
        var H = R[L], $ = K(H);
        if ($ !== "object")
          return new P("Invalid " + W + " `" + G + "` of type `" + $ + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return oe(I, W, G, Z, U(Y));
          var ie = Y(H, Z, I, W, G + "." + Z, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return j(c);
    }
    function k(E) {
      function c(R, L, I, W, G) {
        var H = R[L], $ = K(H);
        if ($ !== "object")
          return new P("Invalid " + W + " `" + G + "` of type `" + $ + "` " + ("supplied to `" + I + "`, expected `object`."));
        var Z = t({}, R[L], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return oe(I, W, G, Y, U(ie));
          if (!ie)
            return new P(
              "Invalid " + W + " `" + G + "` key `" + Y + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(R[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var C = ie(H, Y, I, W, G + "." + Y, r);
          if (C)
            return C;
        }
        return null;
      }
      return j(c);
    }
    function M(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(M);
          if (E === null || s(E))
            return !0;
          var c = p(E);
          if (c) {
            var R = c.call(E), L;
            if (c !== E.entries) {
              for (; !(L = R.next()).done; )
                if (!M(L.value))
                  return !1;
            } else
              for (; !(L = R.next()).done; ) {
                var I = L.value;
                if (I && !M(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function K(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : J(c, E) ? "symbol" : c;
    }
    function U(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = K(E);
      if (c === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function q(E) {
      var c = U(E);
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
    function ae(E) {
      return !E.constructor || !E.constructor.name ? d : E.constructor.name;
    }
    return x.checkPropTypes = i, x.resetWarningCache = i.resetWarningCache, x.PropTypes = x, x;
  }, Qe;
}
var et, zt;
function Xn() {
  if (zt) return et;
  zt = 1;
  var e = /* @__PURE__ */ gt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, et = function() {
    function n(o, s, h, l, f, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, et;
}
var $t;
function Jn() {
  if ($t) return Be.exports;
  if ($t = 1, process.env.NODE_ENV !== "production") {
    var e = nn(), t = !0;
    Be.exports = /* @__PURE__ */ Kn()(e.isElement, t);
  } else
    Be.exports = /* @__PURE__ */ Xn()();
  return Be.exports;
}
var Qn = /* @__PURE__ */ Jn();
const v = /* @__PURE__ */ Dn(Qn), on = {
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
}, er = [
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
], Ze = "16px", tr = (e) => Math.round(e * 96 / 72), nr = (e) => Math.round(e * 72 / 96 * 2) / 2, Sa = (e) => {
  const t = Object.values(on).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${tr(e)}px`;
}, Oa = (e) => {
  const t = parseInt(e), r = Object.values(on).find((n) => n.px === t);
  return r ? r.pt : nr(t);
}, ka = (e) => {
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
}, he = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, w = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ca({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: o,
  options: s = he
}) {
  const h = n - t, l = i - r;
  let f = a, p = o;
  switch (e) {
    case w.TOP_LEFT:
      f = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, o - l);
      break;
    case w.TOP_RIGHT:
      f = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, o - l);
      break;
    case w.BOTTOM_LEFT:
      f = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, o + l);
      break;
    case w.BOTTOM_RIGHT:
      f = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, o + l);
      break;
    case w.TOP:
      p = Math.max(s.minHeight, o - l);
      break;
    case w.BOTTOM:
      p = Math.max(s.minHeight, o + l);
      break;
    case w.LEFT:
      f = Math.max(s.minWidth, a - h);
      break;
    case w.RIGHT:
      f = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: f, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const d = a / o;
    [
      w.TOP_LEFT,
      w.TOP_RIGHT,
      w.BOTTOM_LEFT,
      w.BOTTOM_RIGHT
    ].includes(e) ? f / d > p ? p = Math.max(s.minHeight, f / d) : f = Math.max(s.minWidth, p * d) : [w.TOP, w.BOTTOM].includes(e) ? f = p * d : [w.LEFT, w.RIGHT].includes(e) && (p = f / d);
  }
  return s.maxWidth && f > s.maxWidth && (f = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = f / (a / o))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (f = p * (a / o))), f = Math.max(s.minWidth, f), p = Math.max(s.minHeight, p), {
    width: Math.round(f),
    height: Math.round(p)
  };
}
function pe(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ma(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Na(e, { width: t, height: r }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function an(e, t = he) {
  if (!pe(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(w).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = rr(a), o.style.pointerEvents = "all", sn(o, a, n.width, n.height), r.appendChild(o);
  }), r;
}
function rr(e) {
  switch (e) {
    case w.TOP_LEFT:
    case w.BOTTOM_RIGHT:
      return "nwse-resize";
    case w.TOP_RIGHT:
    case w.BOTTOM_LEFT:
      return "nesw-resize";
    case w.TOP:
    case w.BOTTOM:
      return "ns-resize";
    case w.LEFT:
    case w.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function sn(e, t, r, n) {
  switch (t) {
    case w.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case w.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case w.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case w.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case w.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case w.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case w.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case w.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ue(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    sn(i, a, r.width, r.height);
  });
}
function ve(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const or = {
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
}, Ft = {
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
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: he,
  preserveAspectRatio: !0
}, ar = () => {
  const [e, t] = de(Ft), r = ke(), n = B((b) => {
    try {
      const S = window.getSelection();
      if (!S || S.rangeCount === 0)
        return !1;
      const O = S.getRangeAt(0);
      if (!O.toString())
        return t((u) => ({ ...u, fontFamily: b })), !1;
      try {
        const u = document.createElement("span");
        u.style.fontFamily = b;
        const m = O.extractContents();
        return u.appendChild(m), O.insertNode(u), O.selectNodeContents(u), S.removeAllRanges(), S.addRange(O), t((g) => ({ ...g, fontFamily: b })), !0;
      } catch {
        return document.execCommand("fontName", !1, b), t((m) => ({ ...m, fontFamily: b })), !0;
      }
    } catch (S) {
      return console.warn("[useFormatting] Font family change failed:", S), !1;
    }
  }, []), i = B((b) => {
    try {
      const S = window.getSelection();
      if (!S || S.rangeCount === 0)
        return !1;
      const O = S.getRangeAt(0);
      if (!O.toString())
        return t((u) => ({ ...u, fontSize: b })), !1;
      try {
        const u = document.createElement("span");
        u.style.fontSize = b;
        const m = O.extractContents();
        return u.appendChild(m), O.insertNode(u), O.selectNodeContents(u), S.removeAllRanges(), S.addRange(O), t((g) => ({ ...g, fontSize: b })), !0;
      } catch {
        const m = or[b] || "3";
        return document.execCommand("fontSize", !1, m), t((g) => ({ ...g, fontSize: b })), !0;
      }
    } catch (S) {
      return console.warn("[useFormatting] Font size change failed:", S), !1;
    }
  }, []), a = B((b) => {
    try {
      const S = window.getSelection();
      if (!S || S.rangeCount === 0)
        return !1;
      const O = S.getRangeAt(0), _ = O.toString(), m = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[b];
      if (!m)
        return !1;
      if (!_) {
        const T = O.startContainer, N = T.nodeType === Node.TEXT_NODE ? T.parentElement : T, F = Ge(N) || sr();
        return F && (F.style.textAlign = m, o(m)), !0;
      }
      const g = ir(O);
      if (g.length === 0) {
        const T = document.createElement("p");
        T.style.textAlign = m;
        const N = O.extractContents();
        T.appendChild(N), O.insertNode(T), O.selectNodeContents(T), S.removeAllRanges(), S.addRange(O);
      } else
        g.forEach((T) => {
          T.style.textAlign = m;
        });
      return o(m), !0;
    } catch (S) {
      return console.warn("[useFormatting] Text alignment failed:", S), !1;
    }
  }, []), o = B((b) => {
    t((S) => ({
      ...S,
      alignLeft: b === "left",
      alignCenter: b === "center",
      alignRight: b === "right",
      alignJustify: b === "justify"
    }));
  }, []), s = B((b, S = null) => {
    try {
      if (b === "undo") {
        r.undo();
        return;
      }
      if (b === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (b === "fontSize") {
        i(S);
        return;
      }
      if (b === "fontName") {
        n(S);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(b)) {
        a(b);
        return;
      }
      switch (document.execCommand(b, !1, S) || console.warn(`[useFormatting] Command "${b}" failed`), b) {
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
          t((_) => ({ ..._, headingLevel: S }));
          break;
        default:
          break;
      }
    } catch (O) {
      console.warn(`[useFormatting] Error executing command "${b}":`, O);
    }
  }, [i, n, r]), h = re(null), l = re(null), f = re(null), p = re(null), d = re(he);
  B((b) => {
    if (!pe(b)) return;
    h.current && (ve(h.current), h.current = null), b.classList.add("selected");
    const S = an(b);
    S && (h.current = S, l.current = b, document.body.appendChild(S), t((O) => ({
      ...O,
      imageSelected: !0,
      preserveAspectRatio: d.current.preserveAspectRatio
    })));
  }, []);
  const x = B(() => {
    l.current && (l.current.classList.remove("selected"), l.current = null), h.current && (ve(h.current), h.current = null), f.current = null, p.current = null, t((b) => ({
      ...b,
      imageSelected: !1
    }));
  }, []), A = B(() => {
    const b = !d.current.preserveAspectRatio;
    d.current = {
      ...d.current,
      preserveAspectRatio: b,
      aspectRatio: b
    }, t((S) => ({
      ...S,
      preserveAspectRatio: b
    }));
  }, []);
  B((b, S, O) => {
    l.current && (f.current = {
      x: S,
      y: O,
      width: l.current.offsetWidth,
      height: l.current.offsetHeight
    }, p.current = b, document.body.classList.add("resize-in-progress"), document.body.style.cursor = cr(b));
  }, []), B((b, S) => {
    if (!l.current || !f.current || !p.current) return;
    const { x: O, y: _, width: u, height: m } = f.current, g = p.current, T = lr({
      handler: g,
      startX: O,
      startY: _,
      currentX: b,
      currentY: S,
      startWidth: u,
      startHeight: m,
      options: d.current
    });
    ur(l.current, T), h.current && Ue(h.current, l.current);
  }, []), B(() => {
    if (f.current = null, p.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", l.current) {
      const b = new Event("input", { bubbles: !0, cancelable: !0 });
      l.current.dispatchEvent(b);
    }
  }, []);
  const P = B(() => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return;
      const S = b.getRangeAt(0), O = S.toString();
      let _ = Ze, u = "Arial", m = "p", g = "left";
      if (O) {
        const N = S.startContainer, F = N.nodeType === Node.TEXT_NODE ? N.parentElement : N;
        if (F) {
          const oe = window.getComputedStyle(F), V = oe.fontSize, k = oe.fontFamily;
          V && V.endsWith("px") && (_ = V), k && k !== "serif" && (u = k.split(",")[0].replace(/['"]/g, "").trim());
          const M = Ge(F);
          if (M) {
            const J = M.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(J) && (m = J);
            const U = window.getComputedStyle(M).textAlign;
            ["left", "center", "right", "justify"].includes(U) && (g = U);
          }
        }
      }
      const T = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: g === "left",
        alignCenter: g === "center",
        alignRight: g === "right",
        alignJustify: g === "justify",
        fontFamily: u,
        fontSize: _,
        headingLevel: m
      };
      t((N) => ({
        ...N,
        ...T
      }));
    } catch (b) {
      console.warn("[useFormatting] Error updating format from selection:", b);
    }
  }, []), j = B(() => {
    x(), t(Ft);
  }, [x]);
  return se(() => () => {
    h.current && ve(h.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: j,
    updateCurrentFormatFromSelection: P,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: A
  };
};
function Ge(e) {
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
function ir(e) {
  const t = [], r = e.startContainer, n = e.endContainer, i = Ge(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), a = Ge(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (i === a && i)
    return [i];
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
  let s = o.nextNode();
  for (; s; )
    e.intersectsNode(s) && t.push(s), s = o.nextNode();
  return t;
}
function sr() {
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
function cr(e) {
  switch (e) {
    case w.TOP_LEFT:
    case w.BOTTOM_RIGHT:
      return "nwse-resize";
    case w.TOP_RIGHT:
    case w.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case w.BOTTOM:
      return "ns-resize";
    case w.LEFT:
    case w.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function lr({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: o,
  options: s = he
}) {
  const h = n - t, l = i - r;
  let f = a, p = o;
  switch (e) {
    case w.TOP_LEFT:
      f = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, o - l);
      break;
    case w.TOP_RIGHT:
      f = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, o - l);
      break;
    case w.BOTTOM_LEFT:
      f = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, o + l);
      break;
    case w.BOTTOM_RIGHT:
      f = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, o + l);
      break;
    case w.TOP:
      p = Math.max(s.minHeight, o - l);
      break;
    case w.BOTTOM:
      p = Math.max(s.minHeight, o + l);
      break;
    case w.LEFT:
      f = Math.max(s.minWidth, a - h);
      break;
    case w.RIGHT:
      f = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: f, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const d = a / o;
    [
      w.TOP_LEFT,
      w.TOP_RIGHT,
      w.BOTTOM_LEFT,
      w.BOTTOM_RIGHT
    ].includes(e) ? f / d > p ? p = Math.max(s.minHeight, f / d) : f = Math.max(s.minWidth, p * d) : [w.TOP, w.BOTTOM].includes(e) ? f = p * d : [w.LEFT, w.RIGHT].includes(e) && (p = f / d);
  }
  return s.maxWidth && f > s.maxWidth && (f = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = f / (a / o))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (f = p * (a / o))), f = Math.max(s.minWidth, f), p = Math.max(s.minHeight, p), {
    width: Math.round(f),
    height: Math.round(p)
  };
}
function ur(e, { width: t, height: r }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
const ye = 'page-break, [data-page-break="true"]', cn = (e) => ue[e] || ue.A4, dr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = cn(r), i = e.querySelectorAll(ye), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const o = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((h, l) => {
    const p = h.getBoundingClientRect().top - o.top + s;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: p,
      height: n.height
    });
  }), a;
}, ln = (e, t = 100, r = ge) => {
  const n = cn(e), i = $n(r), a = n.height - i, o = t / 100;
  return a / o;
}, fr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(ye);
    if (r.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), i = n.top + n.height / 2;
    for (let a = r.length - 1; a >= 0; a--)
      if (r[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (r) {
    return console.warn("[getCurrentPage] Failed to calculate page:", r), 0;
  }
}, Ut = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let r = [], n = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? n.length > 0 && (r.push(n), n = []) : n.push(i);
  return n.length > 0 && r.push(n), r.length === 0 && t.length > 0 && r.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), r;
}, pr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, gr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, hr = (e, t, r, n, i, a, o) => {
  if (!e)
    return !1;
  try {
    const h = ln(r, n, i) * (t - 1), l = Array.from(e.children);
    let f = 0, p = null;
    for (let d = 0; d < l.length; d++) {
      const x = l[d];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const A = pr(x);
      if (f + A > h) {
        p = x;
        break;
      }
      f += A;
    }
    if (p) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), p.parentNode.insertBefore(d, p), a) {
        const x = e.innerHTML;
        a(x);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const x = document.createElement("p");
      if (x.innerHTML = "<br>", e.appendChild(x), a) {
        const A = e.innerHTML;
        a(A);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, mr = (e, t, r, n, i, a, o) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(ye));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let f = !1, p = [], d = null;
    if (t === 0) {
      const A = h[0];
      if (!A)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let P = e.firstChild;
      for (; P && P !== A; )
        p.push(P), P = P.nextSibling;
      d = A;
    } else {
      const A = h[t - 1];
      if (!A)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const P = h[t];
      let j = A.nextSibling;
      for (; j && j !== P; )
        p.push(j), j = j.nextSibling;
      d = A;
    }
    if (l && l.rangeCount > 0) {
      const P = l.getRangeAt(0).startContainer;
      for (const j of p)
        if (j.contains(P) || j === P) {
          f = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), p.forEach((A) => {
      A.parentNode && A.remove();
    }), e.querySelectorAll(ye).forEach((A, P) => {
      A.setAttribute("data-page-number", String(P + 2));
    }), f && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const A = e.innerHTML;
      n(A);
    }
    return i && setTimeout(() => {
      i(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, yr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ye).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Er = (e, t, r, n, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), yr(t), r) {
      const a = t.innerHTML;
      r(a);
    }
    return n && setTimeout(() => {
      n(), i && setTimeout(() => {
        i();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, Tr = 200, br = 50, Gt = 3, vr = 20, un = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, xr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = un(a);
    if (o < 1)
      continue;
    if (r + o > t)
      return n === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: r
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: r
      };
    r += o, n = a;
  }
  return null;
}, Ar = (e, t, r, n, i, a, o, s) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const h = ln(t, r, n);
    let l = Ut(e), f = !1, p = 0;
    for (let d = 0; d < l.length && p < Gt; d++) {
      const x = l[d], A = xr(x, h);
      if (A && A.overflowIndex > 0) {
        let P = 0;
        for (let O = 0; O < x.length; O++) {
          const _ = x[O];
          _ && _.getBoundingClientRect && (P += un(_));
        }
        if (P - h < vr)
          continue;
        const b = d + 2;
        gr(A.overflowElement, b) && (f = !0, p++, l = Ut(e));
      }
    }
    if (f) {
      if (i) {
        const d = e.innerHTML;
        i(d);
      }
      setTimeout(() => {
        a && a(), p >= Gt && s && setTimeout(() => {
          o.current || s();
        }, 100);
      }, br);
    }
    return f;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    o.current = !1;
  }
}, Pr = (e, t, r = Tr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, _r = 400, dn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(ye)[t - 1];
        a && a.nextSibling && (r = a.nextSibling, n = 0);
      }
      if (r) {
        const i = document.createRange(), a = window.getSelection();
        r.nodeType === Node.TEXT_NODE ? i.setStart(r, n) : i.setStart(r, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (r) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", r);
    }
  }
}, wr = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (r === 0)
      i = t;
    else {
      const o = t.querySelectorAll(ye)[r - 1];
      if (o)
        i = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", r);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), o = e.getBoundingClientRect(), s = e.scrollTop + (a.top - o.top);
      e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(r) : dn(t, r);
      }, _r);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Rr = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, Sr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const i = e.querySelectorAll(ye);
  for (const f of i)
    if (r.comparePoint(f, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(r.startContainer, r.startOffset);
  const s = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), h = s.length, l = (s.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: h
  };
}, Or = 300, kr = (e, t, r = 100, n = "NARROW") => {
  const i = ke(), a = re(null), o = re(null), s = re(e), h = re(r), l = re(n), f = re(!1);
  se(() => {
    s.current = e;
  }, [e]), se(() => {
    h.current = r;
  }, [r]), se(() => {
    l.current = n;
  }, [n]), se(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const p = B((m = {}) => t?.current ? dr(t.current, m) : [], [t]), d = B((m = {}) => {
    const g = p(m);
    return i.updatePageBoundaries(g), g;
  }, [p, i]), x = B(async (m) => {
    if (!t?.current)
      return !1;
    const g = s.current || "A4", T = h.current || 100, N = l.current || "NARROW";
    return hr(
      t.current,
      m,
      g,
      T,
      N,
      i.updateContinuousContent,
      d
    );
  }, [t, i, d]), A = B(() => {
    if (!t?.current)
      return;
    const m = s.current || "A4", g = h.current || 100, T = l.current || "NARROW";
    Ar(
      t.current,
      m,
      g,
      T,
      i.updateContinuousContent,
      d,
      f,
      A
    );
  }, [t, i, d]), P = B((m) => {
    Pr(A, o, m);
  }, [A]), j = B((m = {}) => {
    const g = typeof m.delay == "number" ? m.delay : Or;
    Rr(d, a, m, g);
  }, [d]), b = B((m) => !m?.current || !t?.current ? 0 : fr(m.current, t.current), [t]), S = B((m) => {
    t?.current && dn(t.current, m);
  }, [t]), O = B((m, g) => {
    if (!g?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    wr(g.current, t.current, m, S);
  }, [t, S]), _ = B((m) => t?.current ? mr(
    t.current,
    m,
    p,
    i.updateContinuousContent,
    d,
    S,
    A
  ) : !1, [t, p, i, d, S, A]), u = B((m) => t?.current ? Er(
    m,
    t.current,
    i.updateContinuousContent,
    d,
    A
  ) : !1, [t, i, d, A]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: j,
    updateBoundaries: d,
    getCurrentPage: b,
    scrollToPage: O,
    positionCursorAtPage: S,
    checkAndReflow: A,
    triggerAutoReflow: P,
    removePageAndContent: _,
    removePageBreak: u,
    insertPageBreakAtBoundary: x,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  };
}, Cr = "html-editor-storage", Mr = 1, fe = "images";
function Nr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Ce() {
  return new Promise((e, t) => {
    const r = indexedDB.open(Cr, Mr);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(fe) || i.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Ir(e) {
  return new Promise((t, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (a) => {
      const o = a.target.result, h = o.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Ce(), f = `editor-image-${Nr()}`, d = l.transaction([fe], "readwrite").objectStore(fe), x = {
          key: f,
          dataUrl: o,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, A = d.add(x);
        A.onsuccess = () => {
          l.close(), t(f);
        }, A.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function Lr(e) {
  try {
    const t = await Ce();
    return new Promise((r, n) => {
      const o = t.transaction([fe], "readonly").objectStore(fe).get(e);
      o.onsuccess = () => {
        t.close();
        const s = o.result;
        r(s ? s.dataUrl : null);
      }, o.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Dr(e) {
  try {
    const t = await Ce();
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
async function Ia() {
  try {
    const e = await Ce();
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
async function La() {
  try {
    const e = await Ce();
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
const jr = [
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
], Br = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Hr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function fn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function $e(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Re(r) || "<p><br></p>";
}
function zr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Re(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${Hr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, o = a.tagName, s = o.toLowerCase(), h = fn(a);
      if (o === "DIV") {
        const l = Re(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = zr(a);
        t.push(`<${s}${h}>${l}</${s}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push($r(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(Fr(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = Re(a);
        t.push(`<blockquote${h}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (jr.includes(o))
        t.push(a.outerHTML);
      else if (o === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (o === "HR")
        t.push(a.outerHTML);
      else if (o === "FIGURE")
        t.push(a.outerHTML);
      else if (Br.includes(o))
        t.push(a.outerHTML);
      else {
        const l = Re(a);
        t.push(`<${s}${h}>${l}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function $r(e) {
  const t = e.tagName.toLowerCase(), r = fn(e), n = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      n.push(i.outerHTML);
    else {
      const a = Re(i);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Fr(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Wt = (e) => {
  const t = Gr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, pn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Wr = (e) => {
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
var qr = {
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
const Zr = dt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: o,
    ...s
  }, h) => nt(
    "svg",
    {
      ref: h,
      ...qr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: pn("lucide", i),
      ...!a && !Wr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...o.map(([l, f]) => nt(l, f)),
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
  const r = dt(
    ({ className: n, ...i }, a) => nt(Zr, {
      ref: a,
      iconNode: t,
      className: pn(
        `lucide-${Ur(Wt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return r.displayName = Wt(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Vr = X("bold", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xr = X("chevron-left", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qr = X("chevron-right", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], to = X("file-check", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], We = X("file-text", no);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], oo = X("hash", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], io = X("heading-1", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], co = X("heading-2", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], uo = X("heading-3", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], po = X("image-upscale", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ho = X("image", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], yo = X("italic", mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], To = X("link", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], vo = X("list-indent-decrease", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Ao = X("list-indent-increase", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], _o = X("list-ordered", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], gn = X("list", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], So = X("plus", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ko = X("redo", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Mo = X("scaling", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Io = X("settings", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Do = X("strikethrough", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Bo = X("table", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], hn = X("text-align-center", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], mn = X("text-align-end", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Fo = X("text-align-justify", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], yn = X("text-align-start", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Wo = X("trash-2", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Zo = X("underline", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Vo = X("undo", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Xo = X("x", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Qo = X("zoom-in", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ta = X("zoom-out", ea), qt = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const i = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((a, o) => {
    const s = parseInt(a.tagName.charAt(1)), h = a.textContent.trim();
    return h ? {
      id: `${r}heading-${o}`,
      level: s,
      text: h,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, na = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, ra = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const i = tn(), { pages: a, activePage: o, continuousContent: s } = i, [h, l] = de(0), [f, p] = de([]);
  se(() => {
    if (r !== void 0 && n !== void 0) {
      l(r), p(qt(s, 1, "continuous-"));
      return;
    }
    let x = 0;
    const A = [];
    a.forEach((P, j) => {
      x += na(P.content), A.push(...qt(P.content, j + 1, `page-${j}-`));
    }), l(x), p(A);
  }, [a, r, n, s]);
  const d = n !== void 0 ? n : a.length;
  return /* @__PURE__ */ y.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ y.jsx(We, { size: 18 }),
            /* @__PURE__ */ y.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ y.jsx(Qr, { size: 16 }) : /* @__PURE__ */ y.jsx(Xr, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(to, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(oo, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(We, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsxs("h3", { children: [
              /* @__PURE__ */ y.jsx(gn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ y.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((x) => {
              const A = x.level === 1 ? io : x.level === 2 ? co : uo;
              return /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${x.level}`,
                  style: { marginLeft: `${(x.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ y.jsx(A, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ y.jsx("span", { className: "outline-text", children: x.text }),
                    /* @__PURE__ */ y.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      x.page
                    ] })
                  ]
                },
                x.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class oa {
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
const Zt = new oa("Editor"), En = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Tn = 32;
function bn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Tn}px`, e.dataset.indentLevel = String(n));
}
function aa(e, t) {
  bn(e, t);
}
function ia(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && En.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function sa() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), r = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((o) => {
    document.createRange().selectNodeContents(o), t.intersectsNode(o) && r.add(o);
  }), r.size === 0 && n.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let l = s.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && En.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(r).filter((o) => {
    let s = o.parentElement;
    for (; s; ) {
      if (r.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function ca(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Tn}px`, e.dataset.indentLevel = String(r));
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
function ut(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = sa();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const o = ia(n.startContainer);
    if (!o) return !1;
    r = [o];
  }
  const i = r[0], a = r[r.length - 1];
  r.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      aa(o, e);
      return;
    }
    e ? ca(o) : bn(o, !1);
  });
  try {
    const o = document.createRange(), s = (p) => p.nodeType === Node.TEXT_NODE ? p : document.createTreeWalker(
      p,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), h = (p) => {
      if (p.nodeType === Node.TEXT_NODE)
        return p;
      const d = document.createTreeWalker(
        p,
        NodeFilter.SHOW_TEXT,
        null
      );
      let x = null, A = d.nextNode();
      for (; A; )
        x = A, A = d.nextNode();
      return x;
    }, l = s(i);
    l ? o.setStart(l, 0) : o.setStart(i, 0);
    const f = h(a);
    f ? o.setEnd(f, f.length) : o.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(o);
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
function la(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && ut(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const ua = [
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
], da = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], fa = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', ht = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: i = !1
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
      const p = await Ir(l), d = await Lr(p);
      if (d) {
        const A = `<img src="${d}" data-key="${p}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, A), Zt.info("Image inserted", { key: p });
      }
      const x = document.getElementById("image-upload");
      x && (x.value = "");
    } catch (f) {
      Zt.error("Error uploading image", f);
    }
  }, o = (l, f, p, d) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[f] ? "active" : "",
      title: d,
      children: /* @__PURE__ */ y.jsx(p, { size: 16 })
    },
    l
  ), s = (l, f, p, d = !1) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: l,
      disabled: d,
      title: p,
      style: { opacity: d ? 0.5 : 1 },
      children: /* @__PURE__ */ y.jsx(f, { size: 16 })
    },
    p
  ), h = () => /* @__PURE__ */ y.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ y.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Vo, "Undo", !n),
    s(() => t("redo"), ko, "Redo", !i),
    h(),
    o("bold", "bold", Vr, "Bold"),
    o("italic", "italic", yo, "Italic"),
    o("underline", "underline", Zo, "Underline"),
    o("strikethrough", "strikethrough", Do, "Strikethrough"),
    h(),
    o("justifyLeft", "alignLeft", yn, "Align Left"),
    o("justifyCenter", "alignCenter", hn, "Align Center"),
    o("justifyRight", "alignRight", mn, "Align Right"),
    o("justifyFull", "alignJustify", Fo, "Justify"),
    h(),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ua.map(({ value: l, label: f }) => /* @__PURE__ */ y.jsx("option", { value: l, children: f }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Ze,
        title: "Font Size",
        children: er.map(({ value: l, label: f }) => /* @__PURE__ */ y.jsx("option", { value: l, children: f }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: da.map(({ value: l, label: f }) => /* @__PURE__ */ y.jsx("option", { value: l, children: f }, l))
      }
    ),
    h(),
    s(() => t("insertUnorderedList"), gn, "Bullet List"),
    s(() => t("insertOrderedList"), _o, "Numbered List"),
    h(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          ut(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ y.jsx(Ao, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          ut(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ y.jsx(vo, { size: 16 })
      }
    ),
    h(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ y.jsx(To, { size: 16 })
      }
    ),
    s(() => t("insertHTML", fa), Bo, "Insert Table"),
    r && s(r, We, "Insert Page Break"),
    h(),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && a(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ y.jsx(ho, { size: 16 })
      }
    )
  ] });
};
ht.propTypes = {
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
  onAddPageBreak: v.func,
  canUndo: v.bool,
  canRedo: v.bool
};
ht.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function pa(e) {
  return !e || typeof e != "string" ? e : $e(e);
}
function ga(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = pa(r) : r = ha(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function ha(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => ma(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function ma(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ee = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Ee(e.parentElement) : !1, mt = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: i,
  onClick: a,
  onScroll: o,
  onPaste: s,
  onRemovePageBreak: h,
  zoomLevel: l = 100,
  pageMargins: f = ge
}) => {
  const p = Se(() => Kt(f), [f]), d = l / 100, x = B((_, u) => {
    if (!_) return !1;
    const m = _.getBoundingClientRect(), g = u - m.top;
    return g < p.top || g > m.height - p.bottom;
  }, [p.top, p.bottom]), A = B((_, u) => {
    u.preventDefault();
    const m = _.getBoundingClientRect(), g = u.clientX - m.left, T = u.clientY - m.top, N = m.width - 40, F = -12, oe = m.width - 20;
    g >= N && g <= oe && T >= F && T <= 8 && h && h(_);
  }, [h]), P = B((_) => {
    _.preventDefault();
    const u = t.current.getBoundingClientRect();
    if (_.clientY - u.top < p.top) {
      const g = t.current.firstElementChild;
      if (g && g.tagName !== "PAGE-BREAK") {
        const T = document.createRange(), N = window.getSelection();
        T.setStart(g, 0), T.collapse(!0), N.removeAllRanges(), N.addRange(T);
      }
    } else {
      const g = t.current.lastElementChild;
      if (g && g.tagName !== "PAGE-BREAK") {
        const T = document.createRange(), N = window.getSelection();
        T.selectNodeContents(g), T.collapse(!1), N.removeAllRanges(), N.addRange(T);
      }
    }
  }, [t, p.top]), j = B((_) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const m = u.getRangeAt(0), { startContainer: g, endContainer: T } = m;
    if ((Ee(g) || Ee(T)) && (_.key.length === 1 || _.key === "Enter" || _.key === " "))
      return _.preventDefault(), !1;
    if (la(_))
      return n && n(), !1;
    if ((_.key === "Backspace" || _.key === "Delete") && (Ee(g) || Ee(T)))
      return _.preventDefault(), !1;
    i && i(_);
  }, [i, n]), b = B((_) => {
    if (!t.current) return;
    const u = _.target;
    if (Ee(u)) {
      A(u, _);
      return;
    }
    if (x(t.current, _.clientY)) {
      P(_);
      return;
    }
    a && a(_);
  }, [t, a, A, P, x]), S = B((_) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const m = u.getRangeAt(0), { startContainer: g } = m;
    if (Ee(g))
      return _.preventDefault(), !1;
  }, []), O = B((_) => {
    const u = ga(_);
    s && s(_, u);
  }, [s]);
  return /* @__PURE__ */ y.jsx(
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
        transform: `scale(${d})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ y.jsx(
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
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Ze,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: j,
          onBeforeInput: S,
          onClick: b,
          onScroll: o,
          onPaste: O,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
mt.propTypes = {
  dimensions: v.shape({
    width: v.number.isRequired,
    height: v.number.isRequired
  }).isRequired,
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: v.func.isRequired,
  onContentChange: v.func,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  onPaste: v.func,
  onRemovePageBreak: v.func,
  zoomLevel: v.number,
  pageMargins: v.string
};
mt.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const ya = Mn(mt), yt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = ge,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: s,
  onAddPage: h,
  onDeletePage: l,
  onPageSizeChange: f,
  onPageMarginsChange: p,
  onZoomIn: d,
  onZoomOut: x,
  onZoomReset: A
} = {}) => {
  const P = Math.max(e?.length || 0, 1), j = (u) => {
    s && s(u);
  }, b = () => {
    h && h();
  }, S = (u) => {
    if (P <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(u);
  }, O = (u) => {
    f && f(u);
  }, _ = (u) => {
    p && p(u);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ y.jsx(Io, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ y.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (u) => O(u.target.value),
              children: [
                /* @__PURE__ */ y.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ y.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ y.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ y.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (u) => _(u.target.value),
              children: Fn().map((u) => /* @__PURE__ */ y.jsx("option", { value: u, children: Un(u) }, u))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: x,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ y.jsx(ta, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: d,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ y.jsx(Qo, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: A,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "page-list", children: e.map((u, m) => /* @__PURE__ */ y.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${m === t ? "active" : ""}`,
          onClick: () => j(m),
          "aria-label": `Go to page ${m + 1}`,
          "aria-current": m === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ y.jsx(We, { size: 14 }),
            /* @__PURE__ */ y.jsxs("span", { children: [
              "Page ",
              m + 1
            ] })
          ]
        }
      ),
      P > 1 && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (g) => {
            g.stopPropagation(), S(m);
          },
          "aria-label": `Delete page ${m + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ y.jsx(Xo, { size: 14 })
        }
      )
    ] }, u.id || `page-${m}`)) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: b,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ y.jsx(So, { size: 16 }),
          /* @__PURE__ */ y.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
yt.propTypes = {
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
yt.defaultProps = {
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
const Ea = qe.memo(yt), Et = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: i = he
}) => {
  const a = re(null), o = re(null), s = re(null), h = re(null), l = re(i), f = re(!1), p = ke();
  se(() => {
    l.current = i;
  }, [i]);
  const d = B((g) => {
    if (!pe(g)) return;
    a.current && (ve(a.current), a.current = null), g.classList.add("selected");
    const T = an(g, l.current);
    T && (a.current = T, o.current = g, document.body.appendChild(T), T.querySelectorAll(".resize-handler").forEach((F) => {
      F.addEventListener("mousedown", A);
    }), r && r(g));
  }, [r]), x = B(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (ve(a.current), a.current = null), s.current = null, h.current = null, f.current = !1, n && n();
  }, [n]), A = B((g) => {
    if (g.preventDefault(), g.stopPropagation(), !o.current) return;
    const T = g.currentTarget.dataset.handler, N = o.current.getBoundingClientRect(), F = window.pageYOffset || document.documentElement.scrollTop, oe = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: g.clientX,
      y: g.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: g.clientX - N.left - oe,
      offsetY: g.clientY - N.top - F
    }, h.current = T, f.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = _(T), document.addEventListener("mousemove", P), document.addEventListener("mouseup", j);
  }, []), P = B((g) => {
    if (!f.current || !o.current || !s.current || !h.current) return;
    g.preventDefault(), g.stopPropagation();
    const { x: T, y: N, width: F, height: oe } = s.current, V = h.current, k = g.clientX, M = g.clientY, J = u({
      handler: V,
      startX: T,
      startY: N,
      currentX: k,
      currentY: M,
      startWidth: F,
      startHeight: oe,
      options: l.current
    });
    m(o.current, J), a.current && Ue(a.current, o.current);
  }, []), j = B((g) => {
    if (f.current) {
      if (g.preventDefault(), g.stopPropagation(), o.current && s.current) {
        const T = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, N = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (T.width !== N.width || T.height !== N.height) && p.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: N } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: T } }
        );
      }
      if (s.current = null, h.current = null, f.current = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", j), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(T), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, p]), b = B((g) => {
    a.current && !a.current.contains(g.target) && x();
    const T = g.target;
    if (pe(T)) {
      if (T === o.current)
        return;
      d(T);
    }
  }, [d, x]), S = B((g) => {
    if ((g.key === "Delete" || g.key === "Backspace") && o.current && !f.current) {
      g.preventDefault();
      const T = o.current;
      if (T.parentNode) {
        T.parentNode.removeChild(T), x();
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(N);
      }
    }
    if (g.key === "Escape" && o.current && x(), o.current && !f.current) {
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === ">") {
        g.preventDefault();
        const T = o.current.offsetWidth, N = Math.min(l.current.maxWidth || 800, T + 10);
        m(o.current, { width: N, height: o.current.offsetHeight });
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "<") {
        g.preventDefault();
        const T = o.current.offsetWidth, N = Math.max(l.current.minWidth || 50, T - 10);
        m(o.current, { width: N, height: o.current.offsetHeight });
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "+") {
        g.preventDefault();
        const T = o.current.offsetHeight, N = Math.min(l.current.maxHeight || 600, T + 10);
        m(o.current, { width: o.current.offsetWidth, height: N });
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "-") {
        g.preventDefault();
        const T = o.current.offsetHeight, N = Math.max(l.current.minHeight || 50, T - 10);
        m(o.current, { width: o.current.offsetWidth, height: N });
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
      if ((g.ctrlKey || g.metaKey) && g.key === "r") {
        g.preventDefault(), m(o.current, { width: 300, height: 200 });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
    }
  }, [e, x]), O = B(() => {
    a.current && o.current && Ue(a.current, o.current);
  }, []);
  se(() => {
    if (!e.current) return;
    const T = e.current.closest(".editor-viewport");
    return T && (T.addEventListener("scroll", O), window.addEventListener("scroll", O)), () => {
      T && T.removeEventListener("scroll", O), window.removeEventListener("scroll", O);
    };
  }, [e, O]), se(() => {
    if (!e.current) return;
    const g = e.current;
    g.addEventListener("click", b), g.addEventListener("keydown", S);
    const T = g.closest(".editor-viewport");
    return T && T.addEventListener("scroll", O), window.addEventListener("resize", O), () => {
      g.removeEventListener("click", b), g.removeEventListener("keydown", S), T && T.removeEventListener("scroll", O), window.removeEventListener("resize", O), f.current && (document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", j), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ve(a.current);
    };
  }, [e, b, S, O, P, j]), se(() => {
    if (!e.current) return;
    const g = new MutationObserver((T) => {
      T.forEach((N) => {
        N.type === "childList" && (N.removedNodes.length > 0 && N.removedNodes.forEach((F) => {
          F.nodeType === Node.ELEMENT_NODE && pe(F) && F === o.current && x();
        }), N.addedNodes.length > 0 && N.addedNodes.forEach((F) => {
          if (F.nodeType === Node.ELEMENT_NODE)
            if (pe(F))
              setTimeout(() => {
                d(F);
              }, 50);
            else {
              const oe = F.querySelectorAll ? F.querySelectorAll("img") : [];
              oe.length > 0 && setTimeout(() => {
                d(oe[0]);
              }, 50);
            }
        }));
      });
    });
    return g.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      g.disconnect();
    };
  }, [e, x, d]);
  function _(g) {
    switch (g) {
      case w.TOP_LEFT:
      case w.BOTTOM_RIGHT:
        return "nwse-resize";
      case w.TOP_RIGHT:
      case w.BOTTOM_LEFT:
        return "nesw-resize";
      case w.TOP:
      case w.BOTTOM:
        return "ns-resize";
      case w.LEFT:
      case w.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function u({
    handler: g,
    startX: T,
    startY: N,
    currentX: F,
    currentY: oe,
    startWidth: V,
    startHeight: k,
    options: M = he
  }) {
    const J = F - T, K = oe - N;
    let U = V, q = k;
    switch (g) {
      case w.TOP_LEFT:
        U = Math.max(M.minWidth, V - J), q = Math.max(M.minHeight, k - K);
        break;
      case w.TOP_RIGHT:
        U = Math.max(M.minWidth, V + J), q = Math.max(M.minHeight, k - K);
        break;
      case w.BOTTOM_LEFT:
        U = Math.max(M.minWidth, V - J), q = Math.max(M.minHeight, k + K);
        break;
      case w.BOTTOM_RIGHT:
        U = Math.max(M.minWidth, V + J), q = Math.max(M.minHeight, k + K);
        break;
      case w.TOP:
        q = Math.max(M.minHeight, k - K);
        break;
      case w.BOTTOM:
        q = Math.max(M.minHeight, k + K);
        break;
      case w.LEFT:
        U = Math.max(M.minWidth, V - J);
        break;
      case w.RIGHT:
        U = Math.max(M.minWidth, V + J);
        break;
      default:
        return { width: U, height: q };
    }
    if (M.preserveAspectRatio && M.aspectRatio) {
      const ae = V / k;
      [
        w.TOP_LEFT,
        w.TOP_RIGHT,
        w.BOTTOM_LEFT,
        w.BOTTOM_RIGHT
      ].includes(g) ? U / ae > q ? q = Math.max(M.minHeight, U / ae) : U = Math.max(M.minWidth, q * ae) : [w.TOP, w.BOTTOM].includes(g) ? U = q * ae : [w.LEFT, w.RIGHT].includes(g) && (q = U / ae);
    }
    return M.maxWidth && U > M.maxWidth && (U = M.maxWidth, M.preserveAspectRatio && M.aspectRatio && (q = U / (V / k))), M.maxHeight && q > M.maxHeight && (q = M.maxHeight, M.preserveAspectRatio && M.aspectRatio && (U = q * (V / k))), U = Math.max(M.minWidth, U), q = Math.max(M.minHeight, q), {
      width: Math.round(U),
      height: Math.round(q)
    };
  }
  function m(g, { width: T, height: N }) {
    pe(g) && (g.tagName === "IMG" ? (g.style.width = `${T}px`, g.style.height = `${N}px`, g.width = T, g.height = N) : g.tagName === "DIV" && (g.style.width = `${T}px`, g.style.height = `${N}px`));
  }
  return null;
};
Et.propTypes = {
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
Et.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: he
};
const Tt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, s] = de({ top: 0, left: 0 }), [h, l] = de(!1), [f, p] = de("top"), [d, x] = de(a), A = re(null), P = re(null), j = ke(), b = (k) => {
    if (!k)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (J) => setTimeout(J, 16))(() => {
      const J = document.querySelector(".image-resize-overlay");
      J && Ue(J, k);
    });
  }, S = (k) => {
    if (!k) return null;
    const M = window.getComputedStyle(k);
    return {
      float: M.float || "none",
      margin: k.style.margin || "",
      display: M.display || "inline",
      width: k.style.width || k.width || "",
      height: k.style.height || k.height || "",
      aspectRatio: d
    };
  }, O = B(() => {
    if (!e) return "left";
    const k = window.getComputedStyle(e);
    return k.float === "right" ? "right" : k.float === "left" ? "left" : k.display === "block" && k.margin.includes("auto") ? "center" : "left";
  }, [e]), [_, u] = de("left");
  se(() => {
    e && u(O());
  }, [e, O]);
  const m = B(() => {
    if (!e || !A.current) return;
    const k = e.getBoundingClientRect(), M = A.current.getBoundingClientRect(), J = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, K = k.bottom >= 0 && k.top <= J.height && k.right >= 0 && k.left <= J.width;
    let U = "top", q = 0, ae = 0;
    if (K) {
      const I = k.top - M.height - 10, W = J.height - k.bottom - M.height - 10;
      W > I && W > 0 ? (U = "bottom", q = k.bottom + 10) : (U = "top", q = k.top - M.height - 10);
    } else
      U = "top", q = 10;
    ae = k.left + k.width / 2 - M.width / 2;
    const E = window.innerWidth, c = window.innerHeight;
    let R = Math.max(10, Math.min(ae, E - M.width - 10)), L = Math.max(10, Math.min(q, c - M.height - 10));
    s({ top: L, left: R }), p(U), l(!0);
  }, [e]);
  Nn(() => {
    m();
    const k = () => {
      m();
    }, M = P.current;
    return M && M.addEventListener("scroll", k), window.addEventListener("scroll", k), window.addEventListener("resize", k), () => {
      M && M.removeEventListener("scroll", k), window.removeEventListener("scroll", k), window.removeEventListener("resize", k), l(!1);
    };
  }, [e, m]), se(() => {
    const k = (M) => {
      A.current && !A.current.contains(M.target) && M.target !== e && i();
    };
    return document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [e, i]);
  const g = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, T = (k) => {
    if (e && g[k]) {
      const M = S(e), J = _, K = g[k];
      e.style.float = K.float, e.style.margin = K.margin, e.style.display = K.display, u(k), b(e);
      const U = S(e);
      j.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: k, state: U } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: J, state: M } }
      ), t && t(k);
    }
  }, N = () => {
    if (e && e.parentNode) {
      const k = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      j.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: k } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, F = () => {
    const k = d, M = !d;
    x(M), j.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: M } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: k } }
    ), r && r(M);
  }, oe = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, V = (k) => ({
    ...oe,
    background: k ? "#007bff" : "transparent",
    color: k ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : Ln(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: A,
        className: "image-tooltip-menu",
        "data-menu-position": f,
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
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${d ? "" : "active"}`,
              onClick: F,
              title: `Toggle aspect ratio preservation (currently ${d ? "ON" : "OFF"})`,
              children: d ? /* @__PURE__ */ y.jsx(Mo, { size: 14 }) : /* @__PURE__ */ y.jsx(po, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: () => T("left"),
              title: "Align Left",
              style: V(_ === "left"),
              children: /* @__PURE__ */ y.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: () => T("center"),
              title: "Align Center",
              style: V(_ === "center"),
              children: /* @__PURE__ */ y.jsx(hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: () => T("right"),
              title: "Align Right",
              style: V(_ === "right"),
              children: /* @__PURE__ */ y.jsx(mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: N,
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
              children: /* @__PURE__ */ y.jsx(Wo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Tt.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired,
  initialPreserveAspectRatio: v.bool
};
Tt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ta = 50, tt = 50, Yt = 50, ba = 100, va = 500, Vt = "UPDATE_CONTINUOUS_CONTENT", bt = dt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: s = !0,
  showToolbar: h = !0,
  showPageManager: l = !0
}, f) => {
  const p = tn(), d = ke(), { pageSize: x, pageMargins: A, continuousContent: P, pageBoundaries: j, activePage: b, zoomLevel: S, canUndo: O, canRedo: _ } = p, u = re(null), m = re(null), { currentFormat: g, formatText: T, updateCurrentFormatFromSelection: N } = ar(), [F, oe] = de(!1), [V, k] = de(null), [M, J] = de(!0), K = re(null), {
    checkAndUpdateBoundaries: U,
    getCurrentPage: q,
    scrollToPage: ae,
    updateBoundaries: E,
    triggerAutoReflow: c,
    removePageAndContent: R,
    removePageBreak: L,
    insertPageBreakAtBoundary: I
  } = kr(x, m, S, A), W = Se(() => pt(x), [x]), [G, H] = de(!1), $ = re(null), Z = re(!1), Y = re(!1), ie = re(!1), C = re(P);
  se(() => {
    if (m.current) {
      if (!ie.current) {
        m.current.innerHTML = P, ie.current = !0, C.current = P;
        const D = setTimeout(() => {
          E();
        }, Ta);
        return () => clearTimeout(D);
      }
      if (C.current !== P) {
        if (m.current.innerHTML !== P) {
          m.current.innerHTML = P;
          const Q = setTimeout(() => {
            if (E(), Z.current) {
              Z.current = !1;
              const ne = Math.max(0, j.length - 1);
              d.setActivePage(ne), setTimeout(() => {
                ae(ne, u);
              }, Yt);
            }
          }, tt);
          return C.current = P, () => clearTimeout(Q);
        }
        C.current = P;
      }
    }
  }, [P, E, j.length, d, ae]), se(() => {
    o && ie.current && o(P);
  }, [P, o]), In(f, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m.current ? m.current.innerHTML : P,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : P).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? Sr(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      const Q = $e(D);
      Q !== P && d.updateContinuousContent(Q), m.current && m.current.innerHTML !== Q && (m.current.innerHTML = Q), C.current = Q, m.current && setTimeout(() => {
        E();
      }, tt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (D) => {
      if (!m.current || !D) return;
      const Q = $e(D), ne = window.getSelection();
      let le = !1;
      if (ne && ne.rangeCount > 0) {
        const Ye = ne.getRangeAt(0);
        m.current.contains(Ye.commonAncestorContainer) && (le = !0);
      }
      if (!le && K.current)
        try {
          ne.removeAllRanges(), ne.addRange(K.current);
        } catch (Ye) {
          console.warn("[insertContent] Failed to restore last cursor position:", Ye);
          const Ae = m.current.lastChild;
          if (Ae) {
            const Le = document.createRange();
            Ae.nodeType === Node.TEXT_NODE ? Le.setStart(Ae, Ae.textContent.length) : Le.setStartAfter(Ae), Le.collapse(!0), ne.removeAllRanges(), ne.addRange(Le);
          }
        }
      document.execCommand("insertHTML", !1, Q);
      const me = m.current.innerHTML;
      d.updateContinuousContent(me), C.current = me, setTimeout(() => {
        E(), c(200);
      }, tt);
    }
  }), [P, d, E, m, K, U]), se(() => {
    const D = () => {
      if (N(), m.current) {
        const ne = window.getSelection();
        if (ne.rangeCount > 0) {
          const le = ne.getRangeAt(0);
          le.collapsed && m.current.contains(le.commonAncestorContainer) && (K.current = le.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", D);
    const Q = () => {
      if (setTimeout(N, 10), K.current && m.current)
        try {
          const ne = window.getSelection();
          ne.removeAllRanges(), ne.addRange(K.current);
        } catch (ne) {
          console.warn("[handleFocus] Failed to restore cursor:", ne);
        }
    };
    return m.current && m.current.addEventListener("focus", Q), () => {
      document.removeEventListener("selectionchange", D), m.current && m.current.removeEventListener("focus", Q);
    };
  }, [N]);
  const ce = B(() => {
    if (!m.current) return;
    let D = m.current.innerHTML;
    D = $e(D), D !== m.current.innerHTML && (m.current.innerHTML = D);
    const Q = P;
    if (Q !== D) {
      const le = {
        type: Vt,
        payload: D
      }, me = {
        type: Vt,
        payload: Q
      };
      d.recordOperation(le, me);
    }
    d.updateContinuousContent(D), U(), c(200);
    const ne = q(u);
    ne !== b && d.setActivePage(ne);
  }, [d, U, q, b, c, u, m, P]), be = B((D) => {
    ce();
  }, [ce]), xe = B((D) => {
    d.updatePageSize(D), E({ pageSize: D }), i && i(D);
  }, [d, E, i]), vt = B((D) => {
    d.updatePageMargins(D), E({ pageMargins: D }), a && a(D);
  }, [d, E, a]), xt = B((D) => {
    D < 0 || D >= j.length || (Y.current = !0, d.setActivePage(D), ae(D, u), setTimeout(() => {
      Y.current = !1;
    }, va), t && t(D));
  }, [d, ae, t, j.length]), At = B(() => {
    const D = j.length + 1;
    I(D) && (Z.current = !0, setTimeout(() => {
      if (Z.current) {
        Z.current = !1;
        const ne = Math.max(0, j.length - 1);
        d.setActivePage(ne), setTimeout(() => {
          ae(ne, u);
        }, Yt);
      }
    }, 100)), r && r();
  }, [j.length, I, d, ae, r]), xn = B(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!m?.current) return;
      const le = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, le), setTimeout(() => {
        E();
        const me = q(u);
        d.setActivePage(me);
      }, 150);
    }
  }, [E, q, d, u]), An = B((D) => {
    if (!D) return;
    L(D) && setTimeout(() => {
      const ne = q(u);
      d.setActivePage(ne);
    }, 200);
  }, [L, q, d, u]), Pt = B((D) => {
    if (j.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    R(D) && (d.setActivePage(0), n && n(D));
  }, [j.length, R, d, n]), Me = B(() => {
    d.zoomIn();
  }, [d]), Ne = B(() => {
    d.zoomOut();
  }, [d]), Ie = B(() => {
    d.resetZoom();
  }, [d]), _t = B(() => {
    d.undo();
  }, [d]), wt = B(() => {
    d.redo();
  }, [d]);
  se(() => {
    const D = (Q) => {
      if (Q.ctrlKey || Q.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Q.key) && Q.preventDefault();
        const ne = document.activeElement === m.current, le = document.activeElement === u.current, me = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ne || le || !me)
          switch (Q.key) {
            case "+":
            case "=":
              Me();
              break;
            case "-":
            case "_":
              Ne();
              break;
            case "0":
              Ie();
              break;
            case "z":
              Q.shiftKey || _t();
              break;
            case "y":
              wt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [Me, Ne, Ie, _t, wt]);
  const Pn = B(() => {
    !u.current || !m.current || Y.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (Y.current) {
        $.current = null;
        return;
      }
      const D = q(u);
      D !== b && D >= 0 && d.setActivePage(D), $.current = null;
    }, ba));
  }, [q, b, d]), _n = Se(() => {
    if (!P) return 0;
    const Q = P.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Q ? Q.length : 0;
  }, [P]), wn = j.length || 1, Rn = B((D) => {
    oe(!0), k(D);
  }, []), Rt = B(() => {
    oe(!1), k(null);
  }, []), Sn = B((D, Q) => {
  }, []);
  return se(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ y.jsx(
      ht,
      {
        currentFormat: {
          ...g,
          imageSelected: F
        },
        onFormatText: T,
        onAddPageBreak: xn,
        canUndo: O,
        canRedo: _
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ y.jsx(
        ra,
        {
          editorView: null,
          isCollapsed: G,
          onToggle: () => H((D) => !D),
          wordCount: _n,
          pageCount: wn
        }
      ),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: u,
          onScroll: Pn,
          children: /* @__PURE__ */ y.jsx(
            ya,
            {
              content: P,
              dimensions: W,
              pageSize: x,
              pageMargins: A,
              pageBoundaries: j,
              editorRef: m,
              onInput: be,
              onContentChange: ce,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: An,
              zoomLevel: S
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsx(
        Et,
        {
          editorRef: m,
          onImageSelect: Rn,
          onImageDeselect: Rt,
          onImageResize: Sn,
          resizeOptions: {
            ...he,
            preserveAspectRatio: M,
            aspectRatio: M
          }
        }
      ),
      F && V && /* @__PURE__ */ y.jsx(
        Tt,
        {
          imageElement: V,
          initialPreserveAspectRatio: M,
          onAlignChange: (D) => {
          },
          onAspectRatioToggle: (D) => {
            J(D);
          },
          onDelete: () => {
            if (V) {
              const D = V.getAttribute("data-key");
              D && Dr(D).catch((Q) => {
                console.error("Failed to delete image from IndexedDB:", Q);
              });
            }
          },
          onClose: Rt
        }
      ),
      l && /* @__PURE__ */ y.jsx("div", { className: "page-manager-sidebar", children: e ? qe.cloneElement(e, {
        onNavigate: xt,
        onAddPage: At,
        onDeletePage: Pt,
        onPageSizeChange: xe,
        onPageMarginsChange: vt,
        zoomLevel: S,
        canZoomIn: it(S),
        canZoomOut: st(S),
        onZoomIn: Me,
        onZoomOut: Ne,
        onZoomReset: Ie
      }) : /* @__PURE__ */ y.jsx(
        Ea,
        {
          pageBoundaries: j,
          activePage: b,
          pageSize: x,
          pageMargins: A,
          zoomLevel: S,
          canZoomIn: it(S),
          canZoomOut: st(S),
          onNavigate: xt,
          onAddPage: At,
          onDeletePage: Pt,
          onPageSizeChange: xe,
          onPageMarginsChange: vt,
          onZoomIn: Me,
          onZoomOut: Ne,
          onZoomReset: Ie
        }
      ) })
    ] })
  ] });
});
bt.displayName = "HtmlEditor";
bt.propTypes = {
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
bt.defaultProps = {
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
class vn extends qe.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ y.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ y.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ y.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ y.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ y.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ y.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ y.jsx(
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
vn.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
vn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Da = {
  A4: { width: ue.A4.width, height: ue.A4.height },
  Letter: { width: ue.Letter.width, height: ue.Letter.height },
  Legal: { width: ue.Legal.width, height: ue.Legal.height }
};
export {
  er as COMMON_FONT_SIZES,
  Ze as DEFAULT_FONT_SIZE,
  he as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Xt as DEFAULT_PAGE_SIZE,
  Ra as DocumentProvider,
  ht as EditorToolbar,
  vn as ErrorBoundary,
  on as FONT_SIZE_MAP,
  bt as HtmlEditor,
  Et as ImageResizeHandlers,
  Da as PAGE_DIMENSIONS,
  ue as PAGE_SIZES,
  Ea as PageManager,
  ya as PageView,
  w as RESIZE_HANDLERS,
  ra as Sidebar,
  Na as applyImageDimensions,
  Ca as calculateResizeDimensions,
  Ia as clearImages,
  an as createResizeOverlay,
  Dr as deleteImage,
  La as getAllImageKeys,
  wa as getAvailablePageSizes,
  Lr as getImage,
  Ma as getImageDimensions,
  pt as getPageDimensions,
  Sa as getPixelValue,
  Oa as getPointValue,
  pe as isResizableImage,
  ka as isValidFontSize,
  _a as isValidPageSize,
  oa as logger,
  nr as pixelsToPoints,
  tr as pointsToPixels,
  ve as removeResizeOverlay,
  Ir as saveImage,
  Ue as updateResizeOverlay,
  kr as useContinuousReflow,
  en as useDocument,
  ke as useDocumentActions,
  tn as useDocumentState,
  ar as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
