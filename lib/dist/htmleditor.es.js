import qe, { createContext as Cn, useContext as Nn, useReducer as Mn, useMemo as Te, useState as ue, useCallback as L, useRef as J, useEffect as ae, forwardRef as ft, createElement as nt, memo as In, useLayoutEffect as Ln, useImperativeHandle as Dn } from "react";
import { v4 as pt } from "uuid";
import { createPortal as jn } from "react-dom";
function Bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Hn() {
  if (Ot) return Pe;
  Ot = 1;
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
var Ct;
function zn() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === re ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case _:
          return "Fragment";
        case D:
          return "Profiler";
        case N:
          return "StrictMode";
        case m:
          return "Suspense";
        case O:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case v:
            return "Portal";
          case y:
            return u.displayName || "Context";
          case M:
            return (u._context.displayName || "Context") + ".Consumer";
          case d:
            var A = u.render;
            return u = u.displayName, u || (u = A.displayName || A.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case G:
            return A = u.displayName || null, A !== null ? A : e(u.type) || "Memo";
          case V:
            A = u._payload, u = u._init;
            try {
              return e(u(A));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var R = A.error, S = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return R.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(u);
      }
    }
    function n(u) {
      if (u === _) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === V)
        return "<...>";
      try {
        var A = e(u);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = ne.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (k.call(u, "key")) {
        var A = Object.getOwnPropertyDescriptor(u, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function i(u, A) {
      function R() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: R,
        configurable: !0
      });
    }
    function g() {
      var u = e(this.type);
      return Q[u] || (Q[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, A, R, S, z, H) {
      var C = R.ref;
      return u = {
        $$typeof: b,
        type: u,
        key: A,
        props: R,
        _owner: S
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function p(u, A, R, S, z, H) {
      var C = A.children;
      if (C !== void 0)
        if (S)
          if (F(C)) {
            for (S = 0; S < C.length; S++)
              c(C[S]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(C);
      if (k.call(A, "key")) {
        C = e(u);
        var j = Object.keys(A).filter(function($) {
          return $ !== "key";
        });
        S = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", E[C + S] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          C,
          j,
          C
        ), E[C + S] = !0);
      }
      if (C = null, R !== void 0 && (r(R), C = "" + R), o(A) && (r(A.key), C = "" + A.key), "key" in A) {
        R = {};
        for (var U in A)
          U !== "key" && (R[U] = A[U]);
      } else R = A;
      return C && i(
        R,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        C,
        R,
        s(),
        z,
        H
      );
    }
    function c(u) {
      l(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === V && (u._payload.status === "fulfilled" ? l(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function l(u) {
      return typeof u == "object" && u !== null && u.$$typeof === b;
    }
    var T = qe, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), ne = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, F = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var K, Q = {}, ee = T.react_stack_bottom_frame.bind(
      T,
      a
    )(), se = te(n(a)), E = {};
    _e.Fragment = _, _e.jsx = function(u, A, R) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return p(
        u,
        A,
        R,
        !1,
        S ? Error("react-stack-top-frame") : ee,
        S ? te(n(u)) : se
      );
    }, _e.jsxs = function(u, A, R) {
      var S = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return p(
        u,
        A,
        R,
        !0,
        S ? Error("react-stack-top-frame") : ee,
        S ? te(n(u)) : se
      );
    };
  })()), _e;
}
var Nt;
function $n() {
  return Nt || (Nt = 1, process.env.NODE_ENV === "production" ? Le.exports = Hn() : Le.exports = zn()), Le.exports;
}
var h = $n();
const rt = 100, ot = 50, at = 200, Mt = 5, st = (e) => e < at, it = (e) => e > ot, Un = 96, De = (e) => Math.round(e * Un), Ue = {
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
}, fe = "NORMAL", Kt = (e = fe) => {
  const t = Ue[e] || Ue[fe];
  return {
    top: De(t.top),
    bottom: De(t.bottom),
    left: De(t.left),
    right: De(t.right)
  };
}, Fn = (e = fe) => {
  const t = Kt(e);
  return t.top + t.bottom;
}, Gn = () => Object.keys(Ue), qn = (e) => {
  const t = Ue[e];
  return t ? t.label : "Unknown";
}, ve = {
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
}, Xt = "A4", gt = (e) => {
  const t = ve[e] || ve[Xt];
  return {
    width: t.width,
    height: t.height
  };
}, Na = (e) => Object.keys(ve).includes(e), Ma = () => Object.keys(ve), Re = Xt, Ee = "<p><br></p>", Wn = "continuous", we = (e, t = Re) => ({
  id: pt(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), ze = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, Jt = (e, t = Re) => (e.length > 0 ? e : [we(0, t)]).map((n, s) => ({
  id: n.id || pt(),
  index: s,
  size: n.size || t,
  content: ze(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Zn = (e = Re) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: gt(e).height
}], je = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), ct = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Re, n = Jt(e.pages || [we(0, r)], r);
  return {
    id: pt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Wn,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || Zn(r),
    zoomLevel: e.zoomLevel || rt,
    pageMargins: e.pageMargins || fe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, B = {
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
}, lt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case B.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ee, pageSize: s = Re } = t.payload || {}, a = { ...we(0, s), content: ze(n) };
      return ct({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case B.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case B.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: ze(s)
      }, {
        ...e,
        pages: a,
        updatedAt: r
      };
    }
    case B.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = Jt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : je(s);
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case B.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, we(n, e.pageSize));
      const a = s.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), o = je(a);
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case B.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((g, f) => ({
        ...g,
        index: f,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : n <= o && o > 0 && (o -= 1);
      const i = je(a);
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case B.SET_ACTIVE_PAGE: {
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
    case B.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        gt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const s = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: n
      })), a = je(s);
      return {
        ...e,
        pageSize: n,
        pages: s,
        pageBreaks: a,
        updatedAt: r
      };
    }
    case B.RESET_DOCUMENT:
      return ct();
    case B.UPDATE_CONTINUOUS_CONTENT: {
      const n = ze(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case B.UPDATE_PAGE_BOUNDARIES: {
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
    case B.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (n === "end")
        o = o + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = o.substring(0, n), g = o.substring(n);
        o = i + a + g;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = o;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && g.length === 0)
          o = o + a + "<p><br></p>";
        else if (s < g.length) {
          const f = g[s], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const c = document.createElement("p");
          c.innerHTML = "<br>", f.parentNode.insertBefore(p, f.nextSibling), p.parentNode.insertBefore(c, p.nextSibling), o = i.innerHTML;
        } else
          o = o + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: r
      };
    }
    case B.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: r
      };
    }
    case B.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== Ee).join(`
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (a = [{ ...we(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: r
      };
    }
    case B.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < ot || n > at ? (console.warn(`Invalid zoom level: ${n}. Must be between ${ot} and ${at}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.ZOOM_IN: {
      if (!st(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Mt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.ZOOM_OUT: {
      if (!it(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Mt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.RESET_ZOOM:
      return e.zoomLevel === rt ? e : {
        ...e,
        zoomLevel: rt,
        updatedAt: r
      };
    case B.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case B.RECORD_OPERATION: {
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
    case B.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = lt(e, n.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, n],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case B.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = lt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: r
      };
    }
    case B.CLEAR_UNDO_REDO:
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
}, Qt = Cn(null), Ia = ({ children: e, initialState: t = {} }) => {
  const [r, n] = Mn(lt, ct(t)), s = Te(() => ({
    initializeDocument: (o) => n({ type: B.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => n({ type: B.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => n({ type: B.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => n({ type: B.UPDATE_PAGES, payload: o }),
    addPage: (o) => n({ type: B.ADD_PAGE, payload: o }),
    deletePage: (o) => n({ type: B.DELETE_PAGE, payload: o }),
    setActivePage: (o) => n({ type: B.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => n({ type: B.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => n({ type: B.RESET_DOCUMENT }),
    updateContinuousContent: (o) => n({ type: B.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => n({ type: B.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => n({ type: B.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => n({ type: B.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => n({ type: B.SET_EDITOR_MODE, payload: o }),
    setZoomLevel: (o) => n({ type: B.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => n({ type: B.ZOOM_IN }),
    zoomOut: () => n({ type: B.ZOOM_OUT }),
    resetZoom: () => n({ type: B.RESET_ZOOM }),
    updatePageMargins: (o) => n({ type: B.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, i) => n({
      type: B.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: i }
    }),
    undo: () => n({ type: B.UNDO }),
    redo: () => n({ type: B.REDO }),
    clearUndoRedo: () => n({ type: B.CLEAR_UNDO_REDO })
  }), []), a = Te(() => ({
    state: r,
    actions: s,
    dispatch: n
  }), [r, s]);
  return /* @__PURE__ */ h.jsx(Qt.Provider, { value: a, children: e });
}, en = () => {
  const e = Nn(Qt);
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
var Be = { exports: {} }, He = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function Yn() {
  if (It) return Z;
  It = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function M(d) {
    if (typeof d == "object" && d !== null) {
      var m = d.$$typeof;
      switch (m) {
        case t:
          switch (d = d.type, d) {
            case g:
            case f:
            case n:
            case a:
            case s:
            case c:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case i:
                case p:
                case b:
                case T:
                case o:
                  return d;
                default:
                  return m;
              }
          }
        case r:
          return m;
      }
    }
  }
  function y(d) {
    return M(d) === f;
  }
  return Z.AsyncMode = g, Z.ConcurrentMode = f, Z.ContextConsumer = i, Z.ContextProvider = o, Z.Element = t, Z.ForwardRef = p, Z.Fragment = n, Z.Lazy = b, Z.Memo = T, Z.Portal = r, Z.Profiler = a, Z.StrictMode = s, Z.Suspense = c, Z.isAsyncMode = function(d) {
    return y(d) || M(d) === g;
  }, Z.isConcurrentMode = y, Z.isContextConsumer = function(d) {
    return M(d) === i;
  }, Z.isContextProvider = function(d) {
    return M(d) === o;
  }, Z.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, Z.isForwardRef = function(d) {
    return M(d) === p;
  }, Z.isFragment = function(d) {
    return M(d) === n;
  }, Z.isLazy = function(d) {
    return M(d) === b;
  }, Z.isMemo = function(d) {
    return M(d) === T;
  }, Z.isPortal = function(d) {
    return M(d) === r;
  }, Z.isProfiler = function(d) {
    return M(d) === a;
  }, Z.isStrictMode = function(d) {
    return M(d) === s;
  }, Z.isSuspense = function(d) {
    return M(d) === c;
  }, Z.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === a || d === s || d === c || d === l || typeof d == "object" && d !== null && (d.$$typeof === b || d.$$typeof === T || d.$$typeof === o || d.$$typeof === i || d.$$typeof === p || d.$$typeof === _ || d.$$typeof === N || d.$$typeof === D || d.$$typeof === v);
  }, Z.typeOf = M, Z;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Vn() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function M(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === f || P === a || P === s || P === c || P === l || typeof P == "object" && P !== null && (P.$$typeof === b || P.$$typeof === T || P.$$typeof === o || P.$$typeof === i || P.$$typeof === p || P.$$typeof === _ || P.$$typeof === N || P.$$typeof === D || P.$$typeof === v);
    }
    function y(P) {
      if (typeof P == "object" && P !== null) {
        var ce = P.$$typeof;
        switch (ce) {
          case t:
            var me = P.type;
            switch (me) {
              case g:
              case f:
              case n:
              case a:
              case s:
              case c:
                return me;
              default:
                var be = me && me.$$typeof;
                switch (be) {
                  case i:
                  case p:
                  case b:
                  case T:
                  case o:
                    return be;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var d = g, m = f, O = i, G = o, V = t, ie = p, re = n, ne = b, k = T, F = r, te = a, K = s, Q = c, ee = !1;
    function se(P) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(P) || y(P) === g;
    }
    function E(P) {
      return y(P) === f;
    }
    function u(P) {
      return y(P) === i;
    }
    function A(P) {
      return y(P) === o;
    }
    function R(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function S(P) {
      return y(P) === p;
    }
    function z(P) {
      return y(P) === n;
    }
    function H(P) {
      return y(P) === b;
    }
    function C(P) {
      return y(P) === T;
    }
    function j(P) {
      return y(P) === r;
    }
    function U(P) {
      return y(P) === a;
    }
    function $(P) {
      return y(P) === s;
    }
    function oe(P) {
      return y(P) === c;
    }
    Y.AsyncMode = d, Y.ConcurrentMode = m, Y.ContextConsumer = O, Y.ContextProvider = G, Y.Element = V, Y.ForwardRef = ie, Y.Fragment = re, Y.Lazy = ne, Y.Memo = k, Y.Portal = F, Y.Profiler = te, Y.StrictMode = K, Y.Suspense = Q, Y.isAsyncMode = se, Y.isConcurrentMode = E, Y.isContextConsumer = u, Y.isContextProvider = A, Y.isElement = R, Y.isForwardRef = S, Y.isFragment = z, Y.isLazy = H, Y.isMemo = C, Y.isPortal = j, Y.isProfiler = U, Y.isStrictMode = $, Y.isSuspense = oe, Y.isValidElementType = M, Y.typeOf = y;
  })()), Y;
}
var Dt;
function nn() {
  return Dt || (Dt = 1, process.env.NODE_ENV === "production" ? He.exports = Yn() : He.exports = Vn()), He.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, jt;
function Kn() {
  if (jt) return Ye;
  jt = 1;
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
      var g = Object.getOwnPropertyNames(o).map(function(p) {
        return o[p];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = s() ? Object.assign : function(a, o) {
    for (var i, g = n(a), f, p = 1; p < arguments.length; p++) {
      i = Object(arguments[p]);
      for (var c in i)
        t.call(i, c) && (g[c] = i[c]);
      if (e) {
        f = e(i);
        for (var l = 0; l < f.length; l++)
          r.call(i, f[l]) && (g[f[l]] = i[f[l]]);
      }
    }
    return g;
  }, Ye;
}
var Ve, Bt;
function ht() {
  if (Bt) return Ve;
  Bt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = e, Ve;
}
var Ke, Ht;
function rn() {
  return Ht || (Ht = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Xe, zt;
function Xn() {
  if (zt) return Xe;
  zt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ht(), r = {}, n = /* @__PURE__ */ rn();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, i, g, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var c;
          try {
            if (typeof a[p] != "function") {
              var l = Error(
                (g || "React class") + ": " + i + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw l.name = "Invariant Violation", l;
            }
            c = a[p](o, p, g, i, null, t);
          } catch (b) {
            c = b;
          }
          if (c && !(c instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in r)) {
            r[c.message] = !0;
            var T = f ? f() : "";
            e(
              "Failed " + i + " type: " + c.message + (T ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Xe = s, Xe;
}
var Je, $t;
function Jn() {
  if ($t) return Je;
  $t = 1;
  var e = nn(), t = Kn(), r = /* @__PURE__ */ ht(), n = /* @__PURE__ */ rn(), s = /* @__PURE__ */ Xn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Je = function(i, g) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function c(E) {
      var u = E && (f && E[f] || E[p]);
      if (typeof u == "function")
        return u;
    }
    var l = "<<anonymous>>", T = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: D(),
      arrayOf: M,
      element: y(),
      elementType: d(),
      instanceOf: m,
      node: ie(),
      objectOf: G,
      oneOf: O,
      oneOfType: V,
      shape: ne,
      exact: k
    };
    function b(E, u) {
      return E === u ? E !== 0 || 1 / E === 1 / u : E !== E && u !== u;
    }
    function v(E, u) {
      this.message = E, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function _(E) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, A = 0;
      function R(z, H, C, j, U, $, oe) {
        if (j = j || l, $ = $ || C, oe !== r) {
          if (g) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = j + ":" + C;
            !u[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ce] = !0, A++);
          }
        }
        return H[C] == null ? z ? H[C] === null ? new v("The " + U + " `" + $ + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new v("The " + U + " `" + $ + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : E(H, C, j, U, $);
      }
      var S = R.bind(null, !1);
      return S.isRequired = R.bind(null, !0), S;
    }
    function N(E) {
      function u(A, R, S, z, H, C) {
        var j = A[R], U = K(j);
        if (U !== E) {
          var $ = Q(j);
          return new v(
            "Invalid " + z + " `" + H + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return _(u);
    }
    function D() {
      return _(o);
    }
    function M(E) {
      function u(A, R, S, z, H) {
        if (typeof E != "function")
          return new v("Property `" + H + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var C = A[R];
        if (!Array.isArray(C)) {
          var j = K(C);
          return new v("Invalid " + z + " `" + H + "` of type " + ("`" + j + "` supplied to `" + S + "`, expected an array."));
        }
        for (var U = 0; U < C.length; U++) {
          var $ = E(C, U, S, z, H + "[" + U + "]", r);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return _(u);
    }
    function y() {
      function E(u, A, R, S, z) {
        var H = u[A];
        if (!i(H)) {
          var C = K(H);
          return new v("Invalid " + S + " `" + z + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(E);
    }
    function d() {
      function E(u, A, R, S, z) {
        var H = u[A];
        if (!e.isValidElementType(H)) {
          var C = K(H);
          return new v("Invalid " + S + " `" + z + "` of type " + ("`" + C + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(E);
    }
    function m(E) {
      function u(A, R, S, z, H) {
        if (!(A[R] instanceof E)) {
          var C = E.name || l, j = se(A[R]);
          return new v("Invalid " + z + " `" + H + "` of type " + ("`" + j + "` supplied to `" + S + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return _(u);
    }
    function O(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function u(A, R, S, z, H) {
        for (var C = A[R], j = 0; j < E.length; j++)
          if (b(C, E[j]))
            return null;
        var U = JSON.stringify(E, function(oe, P) {
          var ce = Q(P);
          return ce === "symbol" ? String(P) : P;
        });
        return new v("Invalid " + z + " `" + H + "` of value `" + String(C) + "` " + ("supplied to `" + S + "`, expected one of " + U + "."));
      }
      return _(u);
    }
    function G(E) {
      function u(A, R, S, z, H) {
        if (typeof E != "function")
          return new v("Property `" + H + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var C = A[R], j = K(C);
        if (j !== "object")
          return new v("Invalid " + z + " `" + H + "` of type " + ("`" + j + "` supplied to `" + S + "`, expected an object."));
        for (var U in C)
          if (n(C, U)) {
            var $ = E(C, U, S, z, H + "." + U, r);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return _(u);
    }
    function V(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var u = 0; u < E.length; u++) {
        var A = E[u];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(A) + " at index " + u + "."
          ), o;
      }
      function R(S, z, H, C, j) {
        for (var U = [], $ = 0; $ < E.length; $++) {
          var oe = E[$], P = oe(S, z, H, C, j, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && U.push(P.data.expectedType);
        }
        var ce = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new v("Invalid " + C + " `" + j + "` supplied to " + ("`" + H + "`" + ce + "."));
      }
      return _(R);
    }
    function ie() {
      function E(u, A, R, S, z) {
        return F(u[A]) ? null : new v("Invalid " + S + " `" + z + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return _(E);
    }
    function re(E, u, A, R, S) {
      return new v(
        (E || "React class") + ": " + u + " type `" + A + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function ne(E) {
      function u(A, R, S, z, H) {
        var C = A[R], j = K(C);
        if (j !== "object")
          return new v("Invalid " + z + " `" + H + "` of type `" + j + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var U in E) {
          var $ = E[U];
          if (typeof $ != "function")
            return re(S, z, H, U, Q($));
          var oe = $(C, U, S, z, H + "." + U, r);
          if (oe)
            return oe;
        }
        return null;
      }
      return _(u);
    }
    function k(E) {
      function u(A, R, S, z, H) {
        var C = A[R], j = K(C);
        if (j !== "object")
          return new v("Invalid " + z + " `" + H + "` of type `" + j + "` " + ("supplied to `" + S + "`, expected `object`."));
        var U = t({}, A[R], E);
        for (var $ in U) {
          var oe = E[$];
          if (n(E, $) && typeof oe != "function")
            return re(S, z, H, $, Q(oe));
          if (!oe)
            return new v(
              "Invalid " + z + " `" + H + "` key `" + $ + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(A[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var P = oe(C, $, S, z, H + "." + $, r);
          if (P)
            return P;
        }
        return null;
      }
      return _(u);
    }
    function F(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(F);
          if (E === null || i(E))
            return !0;
          var u = c(E);
          if (u) {
            var A = u.call(E), R;
            if (u !== E.entries) {
              for (; !(R = A.next()).done; )
                if (!F(R.value))
                  return !1;
            } else
              for (; !(R = A.next()).done; ) {
                var S = R.value;
                if (S && !F(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(E, u) {
      return E === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function K(E) {
      var u = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : te(u, E) ? "symbol" : u;
    }
    function Q(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var u = K(E);
      if (u === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ee(E) {
      var u = Q(E);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function se(E) {
      return !E.constructor || !E.constructor.name ? l : E.constructor.name;
    }
    return T.checkPropTypes = s, T.resetWarningCache = s.resetWarningCache, T.PropTypes = T, T;
  }, Je;
}
var Qe, Ut;
function Qn() {
  if (Ut) return Qe;
  Ut = 1;
  var e = /* @__PURE__ */ ht();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qe = function() {
    function n(o, i, g, f, p, c) {
      if (c !== e) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
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
  }, Qe;
}
var Ft;
function er() {
  if (Ft) return Be.exports;
  if (Ft = 1, process.env.NODE_ENV !== "production") {
    var e = nn(), t = !0;
    Be.exports = /* @__PURE__ */ Jn()(e.isElement, t);
  } else
    Be.exports = /* @__PURE__ */ Qn()();
  return Be.exports;
}
var tr = /* @__PURE__ */ er();
const x = /* @__PURE__ */ Bn(tr), on = {
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
}, nr = [
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
], We = "16px", rr = (e) => Math.round(e * 96 / 72), or = (e) => Math.round(e * 72 / 96 * 2) / 2, La = (e) => {
  const t = Object.values(on).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${rr(e)}px`;
}, Da = (e) => {
  const t = parseInt(e), r = Object.values(on).find((n) => n.px === t);
  return r ? r.pt : or(t);
}, ja = (e) => {
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
}, ar = {
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
}, Gt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: We,
  headingLevel: "p"
  // Add heading level tracking
}, sr = () => {
  const [e, t] = ue(Gt), r = ke(), n = L((c, l, T = null) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0);
      if (!v.toString())
        return t((N) => ({ ...N, [c]: l })), !1;
      try {
        const N = document.createElement("span");
        N.style[c] = l;
        const D = v.extractContents();
        return N.appendChild(D), v.insertNode(N), v.selectNodeContents(N), b.removeAllRanges(), b.addRange(v), t((M) => ({ ...M, [c]: l })), !0;
      } catch {
        if (T) {
          const N = c === "fontSize" ? ar[l] || "3" : l;
          return document.execCommand(T, !1, N), t((D) => ({ ...D, [c]: l })), !0;
        }
        return !1;
      }
    } catch (b) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, b), !1;
    }
  }, []), s = L((c) => n("fontFamily", c, "fontName"), [n]), a = L((c) => n("fontSize", c, "fontSize"), [n]), o = L((c) => {
    t((l) => ({
      ...l,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = L((c) => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return !1;
      const T = l.getRangeAt(0), b = T.toString(), _ = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!_)
        return !1;
      if (!b) {
        const D = T.startContainer, M = D.nodeType === Node.TEXT_NODE ? D.parentElement : D, y = Fe(M) || cr();
        return y && (y.style.textAlign = _, o(_)), !0;
      }
      const N = ir(T);
      if (N.length === 0) {
        const D = document.createElement("p");
        D.style.textAlign = _;
        const M = T.extractContents();
        D.appendChild(M), T.insertNode(D), T.selectNodeContents(D), l.removeAllRanges(), l.addRange(T);
      } else
        N.forEach((D) => {
          D.style.textAlign = _;
        });
      return o(_), !0;
    } catch (l) {
      return console.warn("[useFormatting] Text alignment failed:", l), !1;
    }
  }, [o]), g = L((c, l = null) => {
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
        a(l);
        return;
      }
      if (c === "fontName") {
        s(l);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(c)) {
        i(c);
        return;
      }
      switch (document.execCommand(c, !1, l) || console.warn(`[useFormatting] Command "${c}" failed`), c) {
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
          t((b) => ({ ...b, headingLevel: l }));
          break;
        default:
          break;
      }
    } catch (T) {
      console.warn(`[useFormatting] Error executing command "${c}":`, T);
    }
  }, [a, s, i, r]), f = L(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const l = c.getRangeAt(0), T = l.toString();
      let b = We, v = "Arial", _ = "p", N = "left";
      if (T) {
        const M = l.startContainer, y = M.nodeType === Node.TEXT_NODE ? M.parentElement : M;
        if (y) {
          const d = window.getComputedStyle(y), m = d.fontSize, O = d.fontFamily;
          m && m.endsWith("px") && (b = m), O && O !== "serif" && (v = O.split(",")[0].replace(/['"]/g, "").trim());
          const G = Fe(y);
          if (G) {
            const V = G.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(V) && (_ = V);
            const re = window.getComputedStyle(G).textAlign;
            ["left", "center", "right", "justify"].includes(re) && (N = re);
          }
        }
      }
      const D = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: N === "left",
        alignCenter: N === "center",
        alignRight: N === "right",
        alignJustify: N === "justify",
        fontFamily: v,
        fontSize: b,
        headingLevel: _
      };
      t((M) => ({
        ...M,
        ...D
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), p = L(() => {
    t(Gt);
  }, []);
  return {
    currentFormat: e,
    formatText: g,
    resetFormat: p,
    updateCurrentFormatFromSelection: f
  };
};
function Fe(e) {
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
  const t = [], r = e.startContainer, n = e.endContainer, s = Fe(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), a = Fe(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (s === a && s)
    return [s];
  const o = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (g) => {
        const f = g.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(f) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = o.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = o.nextNode();
  return t;
}
function cr() {
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
const he = 'page-break, [data-page-break="true"]', an = (e) => ve[e] || ve.A4, lr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = an(r), s = e.querySelectorAll(he), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const o = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((g, f) => {
    const c = g.getBoundingClientRect().top - o.top + i;
    a.push({
      id: `page-${f + 1}`,
      pageNumber: f + 2,
      top: c,
      height: n.height
    });
  }), a;
}, sn = (e, t = 100, r = fe) => {
  const n = an(e), s = Fn(r), a = n.height - s, o = t / 100;
  return a / o;
}, ur = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(he);
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
}, qt = (e) => {
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
}, dr = (e) => {
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
}, fr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, pr = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  try {
    const g = sn(r, n, s) * (t - 1), f = Array.from(e.children);
    let p = 0, c = null;
    for (let l = 0; l < f.length; l++) {
      const T = f[l];
      if (T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true")
        continue;
      const b = dr(T);
      if (p + b > g) {
        c = T;
        break;
      }
      p += b;
    }
    if (c) {
      const l = document.createElement("page-break");
      if (l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(l, c), a) {
        const T = e.innerHTML;
        a(T);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const l = document.createElement("page-break");
      l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", String(t)), e.appendChild(l);
      const T = document.createElement("p");
      if (T.innerHTML = "<br>", e.appendChild(T), a) {
        const b = e.innerHTML;
        a(b);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, gr = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(he));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const f = window.getSelection();
    let p = !1, c = [], l = null;
    if (t === 0) {
      const b = g[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== b; )
        c.push(v), v = v.nextSibling;
      l = b;
    } else {
      const b = g[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = g[t];
      let _ = b.nextSibling;
      for (; _ && _ !== v; )
        c.push(_), _ = _.nextSibling;
      l = b;
    }
    if (f && f.rangeCount > 0) {
      const v = f.getRangeAt(0).startContainer;
      for (const _ of c)
        if (_.contains(v) || _ === v) {
          p = !0;
          break;
        }
    }
    if (l && l.parentNode && l.remove(), c.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(he).forEach((b, v) => {
      b.setAttribute("data-page-number", String(v + 2));
    }), p && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const b = e.innerHTML;
      n(b);
    }
    return s && setTimeout(() => {
      s(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, hr = (e) => {
  if (e)
    try {
      e.querySelectorAll(he).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, mr = (e, t, r, n, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), hr(t), r) {
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
}, yr = 200, Er = 50, Wt = 3, Tr = 20, cn = (e) => {
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
}, br = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = cn(a);
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
}, vr = (e, t, r, n, s, a, o, i) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const g = sn(t, r, n);
    let f = qt(e), p = !1, c = 0;
    for (let l = 0; l < f.length && c < Wt; l++) {
      const T = f[l], b = br(T, g);
      if (b && b.overflowIndex > 0) {
        let v = 0;
        for (let M = 0; M < T.length; M++) {
          const y = T[M];
          y && y.getBoundingClientRect && (v += cn(y));
        }
        if (v - g < Tr)
          continue;
        const N = l + 2;
        fr(b.overflowElement, N) && (p = !0, c++, f = qt(e));
      }
    }
    if (p) {
      if (s) {
        const l = e.innerHTML;
        s(l);
      }
      setTimeout(() => {
        a && a(), c >= Wt && i && setTimeout(() => {
          o.current || i();
        }, 100);
      }, Er);
    }
    return p;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    o.current = !1;
  }
}, xr = (e, t, r = yr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, Ar = 400, ln = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(he)[t - 1];
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
}, Pr = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (r === 0)
      s = t;
    else {
      const o = t.querySelectorAll(he)[r - 1];
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
        n ? n(r) : ln(t, r);
      }, Ar);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, _r = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, wr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const s = e.querySelectorAll(he);
  for (const p of s)
    if (r.comparePoint(p, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(r.startContainer, r.startOffset);
  const i = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), g = i.length, f = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: f,
    charOffset: g
  };
}, Sr = 300, Rr = (e, t, r = 100, n = "NARROW") => {
  const s = ke(), a = J(null), o = J(null), i = J(e), g = J(r), f = J(n), p = J(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    g.current = r;
  }, [r]), ae(() => {
    f.current = n;
  }, [n]), ae(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = L((m = {}) => t?.current ? lr(t.current, m) : [], [t]), l = L((m = {}) => {
    const O = c(m);
    return s.updatePageBoundaries(O), O;
  }, [c, s]), T = L((m = {}) => {
    const O = typeof m.delay == "number" ? m.delay : Sr;
    _r(l, a, m, O);
  }, [l]), b = L(() => {
    t?.current && vr(
      t.current,
      i.current,
      g.current,
      f.current,
      s.updateContinuousContent,
      l,
      p,
      b
    );
  }, [t, s, l]), v = L((m) => {
    xr(b, o, m);
  }, [b]), _ = L((m) => !m?.current || !t?.current ? 0 : ur(m.current, t.current), [t]), N = L((m) => {
    t?.current && ln(t.current, m);
  }, [t]), D = L((m, O) => {
    if (!O?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Pr(O.current, t.current, m, N);
  }, [t, N]), M = L(async (m) => t?.current ? pr(
    t.current,
    m,
    i.current,
    g.current,
    f.current,
    s.updateContinuousContent,
    l
  ) : !1, [t, s, l]), y = L((m) => t?.current ? gr(
    t.current,
    m,
    c,
    s.updateContinuousContent,
    l,
    N,
    b
  ) : !1, [t, c, s, l, N, b]), d = L((m) => t?.current ? mr(
    m,
    t.current,
    s.updateContinuousContent,
    l,
    b
  ) : !1, [t, s, l, b]);
  return ae(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), Te(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: T,
    updateBoundaries: l,
    getCurrentPage: _,
    scrollToPage: D,
    positionCursorAtPage: N,
    checkAndReflow: b,
    triggerAutoReflow: v,
    removePageAndContent: y,
    removePageBreak: d,
    insertPageBreakAtBoundary: M,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    T,
    l,
    _,
    D,
    N,
    b,
    v,
    y,
    d,
    M
  ]);
}, xe = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, I = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ba({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = xe
}) {
  const g = n - t, f = s - r;
  let p = a, c = o;
  switch (e) {
    case I.TOP_LEFT:
      p = Math.max(i.minWidth, a - g), c = Math.max(i.minHeight, o - f);
      break;
    case I.TOP_RIGHT:
      p = Math.max(i.minWidth, a + g), c = Math.max(i.minHeight, o - f);
      break;
    case I.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - g), c = Math.max(i.minHeight, o + f);
      break;
    case I.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + g), c = Math.max(i.minHeight, o + f);
      break;
    case I.TOP:
      c = Math.max(i.minHeight, o - f);
      break;
    case I.BOTTOM:
      c = Math.max(i.minHeight, o + f);
      break;
    case I.LEFT:
      p = Math.max(i.minWidth, a - g);
      break;
    case I.RIGHT:
      p = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: p, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const l = a / o;
    [
      I.TOP_LEFT,
      I.TOP_RIGHT,
      I.BOTTOM_LEFT,
      I.BOTTOM_RIGHT
    ].includes(e) ? p / l > c ? c = Math.max(i.minHeight, p / l) : p = Math.max(i.minWidth, c * l) : [I.TOP, I.BOTTOM].includes(e) ? p = c * l : [I.LEFT, I.RIGHT].includes(e) && (c = p / l);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = p / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = c * (a / o))), p = Math.max(i.minWidth, p), c = Math.max(i.minHeight, c), {
    width: Math.round(p),
    height: Math.round(c)
  };
}
function ge(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ha(e) {
  return ge(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function za(e, { width: t, height: r }) {
  ge(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function kr(e, t = xe) {
  if (!ge(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(I).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = Or(a), o.style.pointerEvents = "all", un(o, a, n.width, n.height), r.appendChild(o);
  }), r;
}
function Or(e) {
  switch (e) {
    case I.TOP_LEFT:
    case I.BOTTOM_RIGHT:
      return "nwse-resize";
    case I.TOP_RIGHT:
    case I.BOTTOM_LEFT:
      return "nesw-resize";
    case I.TOP:
    case I.BOTTOM:
      return "ns-resize";
    case I.LEFT:
    case I.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function un(e, t, r, n) {
  switch (t) {
    case I.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case I.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case I.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case I.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case I.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case I.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case I.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case I.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function ut(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    un(s, a, r.width, r.height);
  });
}
function et(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Cr = "html-editor-storage", Nr = 1, de = "images";
function Mr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Oe() {
  return new Promise((e, t) => {
    const r = indexedDB.open(Cr, Nr);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(de) || s.createObjectStore(de, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
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
    const s = new FileReader();
    s.onload = async (a) => {
      const o = a.target.result, g = o.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const f = await Oe(), p = `editor-image-${Mr()}`, l = f.transaction([de], "readwrite").objectStore(de), T = {
          key: p,
          dataUrl: o,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, b = l.add(T);
        b.onsuccess = () => {
          f.close(), t(p);
        }, b.onerror = () => {
          f.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (f) {
        r(f);
      }
    }, s.onerror = () => {
      r(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function Lr(e) {
  try {
    const t = await Oe();
    return new Promise((r, n) => {
      const o = t.transaction([de], "readonly").objectStore(de).get(e);
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
async function Dr(e) {
  try {
    const t = await Oe();
    return new Promise((r, n) => {
      const o = t.transaction([de], "readwrite").objectStore(de).delete(e);
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
async function $a() {
  try {
    const e = await Oe();
    return new Promise((t, r) => {
      const a = e.transaction([de], "readwrite").objectStore(de).clear();
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
async function Ua() {
  try {
    const e = await Oe();
    return new Promise((t, r) => {
      const a = e.transaction([de], "readonly").objectStore(de).getAllKeys();
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
const dn = [
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
], jr = [
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
  return r.innerHTML = t, Se(r) || "<p><br></p>";
}
function zr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function $r(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => dn.includes(r.tagName));
}
function Ur(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const s = n;
      dn.includes(s.tagName) ? t.push(s.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Se(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${Hr(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), g = fn(a);
      if (o === "DIV") {
        const f = Se(a);
        f.trim() ? t.push(f) : t.push("<p><br></p>");
      } else if (o === "P")
        $r(a) ? t.push(Ur(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const f = zr(a);
        t.push(`<${i}${g}>${f}</${i}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(Fr(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(Gr(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const f = Se(a);
        t.push(`<blockquote${g}>${f}</blockquote>`);
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
        const f = Se(a);
        t.push(`<${i}${g}>${f}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Fr(e) {
  const t = e.tagName.toLowerCase(), r = fn(e), n = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      n.push(s.outerHTML);
    else {
      const a = Se(s);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Gr(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Zt = (e) => {
  const t = Wr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, pn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Zr = (e) => {
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
var Yr = {
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
const Vr = ft(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...i
  }, g) => nt(
    "svg",
    {
      ref: g,
      ...Yr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: pn("lucide", s),
      ...!a && !Zr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...o.map(([f, p]) => nt(f, p)),
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
const q = (e, t) => {
  const r = ft(
    ({ className: n, ...s }, a) => nt(Vr, {
      ref: a,
      iconNode: t,
      className: pn(
        `lucide-${qr(Zt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Zt(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Xr = q("bold", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Qr = q("chevron-left", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], to = q("chevron-right", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], ro = q("file-check", no);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ge = q("file-text", oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], so = q("hash", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], co = q("heading-1", io);
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
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], uo = q("heading-2", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], po = q("heading-3", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], ho = q("image-upscale", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], yo = q("image", mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], To = q("italic", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], vo = q("link", bo);
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
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Ao = q("list-indent-decrease", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], _o = q("list-indent-increase", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], So = q("list-ordered", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], gn = q("list", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Oo = q("plus", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], No = q("redo", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Io = q("scaling", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Do = q("settings", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Bo = q("strikethrough", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], zo = q("table", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], hn = q("text-align-center", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], mn = q("text-align-end", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Go = q("text-align-justify", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], yn = q("text-align-start", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Zo = q("trash-2", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Vo = q("underline", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Xo = q("undo", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Qo = q("x", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ta = q("zoom-in", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ra = q("zoom-out", na), Yt = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const s = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(s).map((a, o) => {
    const i = parseInt(a.tagName.charAt(1)), g = a.textContent.trim();
    return g ? {
      id: `${r}heading-${o}`,
      level: i,
      text: g,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, oa = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, aa = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const s = tn(), { pages: a, activePage: o, continuousContent: i } = s, [g, f] = ue(0), [p, c] = ue([]);
  ae(() => {
    if (r !== void 0 && n !== void 0) {
      f(r), c(Yt(i, 1, "continuous-"));
      return;
    }
    let T = 0;
    const b = [];
    a.forEach((v, _) => {
      T += oa(v.content), b.push(...Yt(v.content, _ + 1, `page-${_}-`));
    }), f(T), c(b);
  }, [a, r, n, i]);
  const l = n !== void 0 ? n : a.length;
  return /* @__PURE__ */ h.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ h.jsx(Ge, { size: 18 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ h.jsx(to, { size: 16 }) : /* @__PURE__ */ h.jsx(Qr, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(ro, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: l })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(so, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Ge, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          p.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsxs("h3", { children: [
              /* @__PURE__ */ h.jsx(gn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "document-outline", "data-testid": "outline", children: p.map((T) => {
              const b = T.level === 1 ? co : T.level === 2 ? uo : po;
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${T.level}`,
                  style: { marginLeft: `${(T.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ h.jsx(b, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ h.jsx("span", { className: "outline-text", children: T.text }),
                    /* @__PURE__ */ h.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      T.page
                    ] })
                  ]
                },
                T.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class sa {
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
const Vt = new sa("Editor"), En = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Tn = 32;
function bn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Tn}px`, e.dataset.indentLevel = String(n));
}
function ia(e, t) {
  bn(e, t);
}
function ca(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && En.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function la() {
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
      let f = i.parentElement;
      for (; f && f !== n; ) {
        if (f.tagName && En.has(f.tagName.toUpperCase())) {
          r.add(f);
          break;
        }
        f = f.parentElement;
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
function ua(e) {
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
function dt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = la();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const o = ca(n.startContainer);
    if (!o) return !1;
    r = [o];
  }
  const s = r[0], a = r[r.length - 1];
  r.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      ia(o, e);
      return;
    }
    e ? ua(o) : bn(o, !1);
  });
  try {
    const o = document.createRange(), i = (c) => c.nodeType === Node.TEXT_NODE ? c : document.createTreeWalker(
      c,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (c) => {
      if (c.nodeType === Node.TEXT_NODE)
        return c;
      const l = document.createTreeWalker(
        c,
        NodeFilter.SHOW_TEXT,
        null
      );
      let T = null, b = l.nextNode();
      for (; b; )
        T = b, b = l.nextNode();
      return T;
    }, f = i(s);
    f ? o.setStart(f, 0) : o.setStart(s, 0);
    const p = g(a);
    p ? o.setEnd(p, p.length) : o.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(o);
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
function da(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && dt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const fa = [
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
], pa = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], ga = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', mt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: s = !1
}) => {
  const a = async (f) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(f.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (f.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const c = await Ir(f), l = await Lr(c);
      if (l) {
        const b = `<img src="${l}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, b), Vt.info("Image inserted", { key: c });
      }
      const T = document.getElementById("image-upload");
      T && (T.value = "");
    } catch (p) {
      Vt.error("Error uploading image", p);
    }
  }, o = (f, p, c, l) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: () => t(f),
      className: e[p] ? "active" : "",
      title: l,
      children: /* @__PURE__ */ h.jsx(c, { size: 16 })
    },
    f
  ), i = (f, p, c, l = !1) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: f,
      disabled: l,
      title: c,
      style: { opacity: l ? 0.5 : 1 },
      children: /* @__PURE__ */ h.jsx(p, { size: 16 })
    },
    c
  ), g = () => /* @__PURE__ */ h.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ h.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), Xo, "Undo", !n),
    i(() => t("redo"), No, "Redo", !s),
    g(),
    o("bold", "bold", Xr, "Bold"),
    o("italic", "italic", To, "Italic"),
    o("underline", "underline", Vo, "Underline"),
    o("strikethrough", "strikethrough", Bo, "Strikethrough"),
    g(),
    o("justifyLeft", "alignLeft", yn, "Align Left"),
    o("justifyCenter", "alignCenter", hn, "Align Center"),
    o("justifyRight", "alignRight", mn, "Align Right"),
    o("justifyFull", "alignJustify", Go, "Justify"),
    g(),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (f) => t("fontName", f.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: fa.map(({ value: f, label: p }) => /* @__PURE__ */ h.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (f) => t("fontSize", f.target.value),
        value: e.fontSize || We,
        title: "Font Size",
        children: nr.map(({ value: f, label: p }) => /* @__PURE__ */ h.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (f) => t("formatBlock", f.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: pa.map(({ value: f, label: p }) => /* @__PURE__ */ h.jsx("option", { value: f, children: p }, f))
      }
    ),
    g(),
    i(() => t("insertUnorderedList"), gn, "Bullet List"),
    i(() => t("insertOrderedList"), So, "Numbered List"),
    g(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          dt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ h.jsx(_o, { size: 16 })
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          dt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ h.jsx(Ao, { size: 16 })
      }
    ),
    g(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          const f = prompt("Enter URL:");
          f && t("createLink", f);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ h.jsx(vo, { size: 16 })
      }
    ),
    i(() => t("insertHTML", ga), zo, "Insert Table"),
    r && i(r, Ge, "Insert Page Break"),
    g(),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (f) => f.target.files[0] && a(f.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ h.jsx(yo, { size: 16 })
      }
    )
  ] });
};
mt.propTypes = {
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
mt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function ha(e) {
  return !e || typeof e != "string" ? e : $e(e);
}
function ma(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ha(r) : r = ya(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function ya(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => Ea(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function Ea(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ye = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && ye(e.parentElement) : !1, yt = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: s,
  onClick: a,
  onScroll: o,
  onPaste: i,
  onRemovePageBreak: g,
  zoomLevel: f = 100,
  pageMargins: p = fe
}) => {
  const c = Te(() => Kt(p), [p]), l = f / 100, T = L((y, d) => {
    if (!y) return !1;
    const m = y.getBoundingClientRect(), O = d - m.top;
    return O < c.top || O > m.height - c.bottom;
  }, [c.top, c.bottom]), b = L((y, d) => {
    d.preventDefault();
    const m = y.getBoundingClientRect(), O = d.clientX - m.left, G = d.clientY - m.top, V = m.width - 40, ie = -12, re = m.width - 20;
    O >= V && O <= re && G >= ie && G <= 8 && g && g(y);
  }, [g]), v = L((y) => {
    y.preventDefault();
    const d = t.current.getBoundingClientRect();
    if (y.clientY - d.top < c.top) {
      const O = t.current.firstElementChild;
      if (O && O.tagName !== "PAGE-BREAK") {
        const G = document.createRange(), V = window.getSelection();
        G.setStart(O, 0), G.collapse(!0), V.removeAllRanges(), V.addRange(G);
      }
    } else {
      const O = t.current.lastElementChild;
      if (O && O.tagName !== "PAGE-BREAK") {
        const G = document.createRange(), V = window.getSelection();
        G.selectNodeContents(O), G.collapse(!1), V.removeAllRanges(), V.addRange(G);
      }
    }
  }, [t, c.top]), _ = L((y) => {
    const d = window.getSelection();
    if (!d || d.rangeCount === 0) return;
    const m = d.getRangeAt(0), { startContainer: O, endContainer: G } = m;
    if ((ye(O) || ye(G)) && (y.key.length === 1 || y.key === "Enter" || y.key === " "))
      return y.preventDefault(), !1;
    if (da(y))
      return n && n(), !1;
    if ((y.key === "Backspace" || y.key === "Delete") && (ye(O) || ye(G)))
      return y.preventDefault(), !1;
    s && s(y);
  }, [s, n]), N = L((y) => {
    if (!t.current) return;
    const d = y.target;
    if (ye(d)) {
      b(d, y);
      return;
    }
    if (T(t.current, y.clientY)) {
      v(y);
      return;
    }
    a && a(y);
  }, [t, a, b, v, T]), D = L((y) => {
    const d = window.getSelection();
    if (!d || d.rangeCount === 0) return;
    const m = d.getRangeAt(0), { startContainer: O } = m;
    if (ye(O))
      return y.preventDefault(), !1;
  }, []), M = L((y) => {
    const d = ma(y);
    i && i(y, d);
  }, [i]);
  return /* @__PURE__ */ h.jsx(
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
        transform: `scale(${l})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ h.jsx(
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
            fontSize: We,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: _,
          onBeforeInput: D,
          onClick: N,
          onScroll: o,
          onPaste: M,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
yt.propTypes = {
  dimensions: x.shape({
    width: x.number.isRequired,
    height: x.number.isRequired
  }).isRequired,
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: x.func.isRequired,
  onContentChange: x.func,
  onKeyDown: x.func,
  onClick: x.func,
  onScroll: x.func,
  onPaste: x.func,
  onRemovePageBreak: x.func,
  zoomLevel: x.number,
  pageMargins: x.string
};
yt.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: fe
};
const Ta = In(yt), Et = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = fe,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: f,
  onPageSizeChange: p,
  onPageMarginsChange: c,
  onZoomIn: l,
  onZoomOut: T,
  onZoomReset: b
} = {}) => {
  const v = Math.max(e?.length || 0, 1), _ = (d) => {
    i && i(d);
  }, N = () => {
    g && g();
  }, D = (d) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    f && f(d);
  }, M = (d) => {
    p && p(d);
  }, y = (d) => {
    c && c(d);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ h.jsx(Do, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ h.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (d) => M(d.target.value),
              children: [
                /* @__PURE__ */ h.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ h.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ h.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (d) => y(d.target.value),
              children: Gn().map((d) => /* @__PURE__ */ h.jsx("option", { value: d, children: qn(d) }, d))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: T,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ h.jsx(ra, { size: 12 })
        }
      ),
      /* @__PURE__ */ h.jsxs("span", { className: "zoom-level-display", children: [
        s,
        "%"
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: l,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ h.jsx(ta, { size: 12 })
        }
      ),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: b,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "page-list", children: e.map((d, m) => /* @__PURE__ */ h.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${m === t ? "active" : ""}`,
          onClick: () => _(m),
          "aria-label": `Go to page ${m + 1}`,
          "aria-current": m === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ h.jsx(Ge, { size: 14 }),
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Page ",
              m + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (O) => {
            O.stopPropagation(), D(m);
          },
          "aria-label": `Delete page ${m + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ h.jsx(Qo, { size: 14 })
        }
      )
    ] }, d.id || `page-${m}`)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: N,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ h.jsx(Oo, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Et.propTypes = {
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
Et.defaultProps = {
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
const ba = qe.memo(Et);
function va(e) {
  switch (e) {
    case I.TOP_LEFT:
    case I.BOTTOM_RIGHT:
      return "nwse-resize";
    case I.TOP_RIGHT:
    case I.BOTTOM_LEFT:
      return "nesw-resize";
    case I.TOP:
    case I.BOTTOM:
      return "ns-resize";
    case I.LEFT:
    case I.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function xa({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = xe
}) {
  const g = n - t, f = s - r;
  let p = a, c = o;
  switch (e) {
    case I.TOP_LEFT:
      p = Math.max(i.minWidth, a - g), c = Math.max(i.minHeight, o - f);
      break;
    case I.TOP_RIGHT:
      p = Math.max(i.minWidth, a + g), c = Math.max(i.minHeight, o - f);
      break;
    case I.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - g), c = Math.max(i.minHeight, o + f);
      break;
    case I.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + g), c = Math.max(i.minHeight, o + f);
      break;
    case I.TOP:
      c = Math.max(i.minHeight, o - f);
      break;
    case I.BOTTOM:
      c = Math.max(i.minHeight, o + f);
      break;
    case I.LEFT:
      p = Math.max(i.minWidth, a - g);
      break;
    case I.RIGHT:
      p = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: p, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const l = a / o;
    [
      I.TOP_LEFT,
      I.TOP_RIGHT,
      I.BOTTOM_LEFT,
      I.BOTTOM_RIGHT
    ].includes(e) ? p / l > c ? c = Math.max(i.minHeight, p / l) : p = Math.max(i.minWidth, c * l) : [I.TOP, I.BOTTOM].includes(e) ? p = c * l : [I.LEFT, I.RIGHT].includes(e) && (c = p / l);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = p / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = c * (a / o))), p = Math.max(i.minWidth, p), c = Math.max(i.minHeight, c), {
    width: Math.round(p),
    height: Math.round(c)
  };
}
function vn(e, { width: t, height: r }) {
  ge(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function Aa(e, t, r) {
  vn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function Pa(e, t, r, n) {
  const { ctrlKey: s, metaKey: a, shiftKey: o, key: i } = e, g = s || a, f = r.offsetWidth, p = r.offsetHeight, l = {
    // Increase width
    ">": g && o ? () => ({
      width: Math.min(n.maxWidth || 800, f + 10),
      height: p
    }) : null,
    // Decrease width
    "<": g && o ? () => ({
      width: Math.max(n.minWidth || 50, f - 10),
      height: p
    }) : null,
    // Increase height
    "+": g && o ? () => ({
      width: f,
      height: Math.min(n.maxHeight || 600, p + 10)
    }) : null,
    // Decrease height
    "-": g && o ? () => ({
      width: f,
      height: Math.max(n.minHeight || 50, p - 10)
    }) : null,
    // Reset to default
    r: g && !o ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (l) {
    e.preventDefault();
    const T = l();
    return Aa(t, r, T), !0;
  }
  return !1;
}
const Tt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: s = xe
}) => {
  const a = J(null), o = J(null), i = J(null), g = J(null), f = J(s), p = J(!1), c = ke();
  ae(() => {
    f.current = s;
  }, [s]);
  const l = L((y) => {
    if (!ge(y)) return;
    a.current && (et(a.current), a.current = null), y.classList.add("selected");
    const d = kr(y, f.current);
    d && (a.current = d, o.current = y, document.body.appendChild(d), d.querySelectorAll(".resize-handler").forEach((O) => {
      O.addEventListener("mousedown", b);
    }), r && r(y));
  }, [r]), T = L(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (et(a.current), a.current = null), i.current = null, g.current = null, p.current = !1, n && n();
  }, [n]), b = L((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current) return;
    const d = y.currentTarget.dataset.handler, m = o.current.getBoundingClientRect(), O = window.pageYOffset || document.documentElement.scrollTop, G = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: y.clientX - m.left - G,
      offsetY: y.clientY - m.top - O
    }, g.current = d, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = va(d), document.addEventListener("mousemove", v), document.addEventListener("mouseup", _);
  }, []), v = L((y) => {
    if (!p.current || !o.current || !i.current || !g.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: d, y: m, width: O, height: G } = i.current, V = g.current, ie = y.clientX, re = y.clientY, ne = xa({
      handler: V,
      startX: d,
      startY: m,
      currentX: ie,
      currentY: re,
      startWidth: O,
      startHeight: G,
      options: f.current
    });
    vn(o.current, ne), a.current && ut(a.current, o.current);
  }, []), _ = L((y) => {
    if (p.current) {
      if (y.preventDefault(), y.stopPropagation(), o.current && i.current) {
        const d = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, m = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (d.width !== m.width || d.height !== m.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: m } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: d } }
        );
      }
      if (i.current = null, g.current = null, p.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", _), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const d = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(d), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), N = L((y) => {
    a.current && !a.current.contains(y.target) && T();
    const d = y.target;
    if (ge(d)) {
      if (d === o.current)
        return;
      l(d);
    }
  }, [l, T]), D = L((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current && !p.current) {
      y.preventDefault();
      const d = o.current;
      if (d.parentNode) {
        d.parentNode.removeChild(d), T();
        const m = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(m);
      }
    }
    y.key === "Escape" && o.current && T(), o.current && !p.current && Pa(y, e, o.current, f.current);
  }, [e, T]), M = L(() => {
    a.current && o.current && ut(a.current, o.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const d = e.current.closest(".editor-viewport");
    return d && (d.addEventListener("scroll", M), window.addEventListener("scroll", M)), () => {
      d && d.removeEventListener("scroll", M), window.removeEventListener("scroll", M);
    };
  }, [e, M]), ae(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", N), y.addEventListener("keydown", D), window.addEventListener("resize", M), () => {
      y.removeEventListener("click", N), y.removeEventListener("keydown", D), window.removeEventListener("resize", M), p.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", _), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && et(a.current);
    };
  }, [e, N, D, M, v, _]), ae(() => {
    if (!e.current) return;
    const y = new MutationObserver((d) => {
      d.forEach((m) => {
        m.type === "childList" && (m.removedNodes.forEach((O) => {
          O.nodeType === Node.ELEMENT_NODE && ge(O) && O === o.current && T();
        }), m.addedNodes.forEach((O) => {
          if (O.nodeType !== Node.ELEMENT_NODE) return;
          if (ge(O)) {
            setTimeout(() => l(O), 50);
            return;
          }
          const G = O.querySelectorAll?.("img") || [];
          G.length > 0 && setTimeout(() => l(G[0]), 50);
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, T, l]), null;
};
Tt.propTypes = {
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
Tt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: xe
};
const bt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, i] = ue({ top: 0, left: 0 }), [g, f] = ue(!1), [p, c] = ue("top"), [l, T] = ue(a), b = J(null), v = J(null), _ = ke(), N = (k) => {
    if (!k)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (te) => setTimeout(te, 16))(() => {
      const te = document.querySelector(".image-resize-overlay");
      te && ut(te, k);
    });
  }, D = (k) => {
    if (!k) return null;
    const F = window.getComputedStyle(k);
    return {
      float: F.float || "none",
      margin: k.style.margin || "",
      display: F.display || "inline",
      width: k.style.width || k.width || "",
      height: k.style.height || k.height || "",
      aspectRatio: l
    };
  }, M = L(() => {
    if (!e) return "left";
    const k = window.getComputedStyle(e);
    return k.float === "right" ? "right" : k.float === "left" ? "left" : k.display === "block" && k.margin.includes("auto") ? "center" : "left";
  }, [e]), [y, d] = ue("left");
  ae(() => {
    e && d(M());
  }, [e, M]);
  const m = L(() => {
    if (!e || !b.current) return;
    const k = e.getBoundingClientRect(), F = b.current.getBoundingClientRect(), te = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, K = k.bottom >= 0 && k.top <= te.height && k.right >= 0 && k.left <= te.width;
    let Q = "top", ee = 0, se = 0;
    if (K) {
      const S = k.top - F.height - 10, z = te.height - k.bottom - F.height - 10;
      z > S && z > 0 ? (Q = "bottom", ee = k.bottom + 10) : (Q = "top", ee = k.top - F.height - 10);
    } else
      Q = "top", ee = 10;
    se = k.left + k.width / 2 - F.width / 2;
    const E = window.innerWidth, u = window.innerHeight;
    let A = Math.max(10, Math.min(se, E - F.width - 10)), R = Math.max(10, Math.min(ee, u - F.height - 10));
    i({ top: R, left: A }), c(Q), f(!0);
  }, [e]);
  Ln(() => {
    m();
    const k = () => {
      m();
    }, F = v.current;
    return F && F.addEventListener("scroll", k), window.addEventListener("scroll", k), window.addEventListener("resize", k), () => {
      F && F.removeEventListener("scroll", k), window.removeEventListener("scroll", k), window.removeEventListener("resize", k), f(!1);
    };
  }, [e, m]), ae(() => {
    const k = (F) => {
      b.current && !b.current.contains(F.target) && F.target !== e && s();
    };
    return document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [e, s]);
  const O = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, G = (k) => {
    if (e && O[k]) {
      const F = D(e), te = y, K = O[k];
      e.style.float = K.float, e.style.margin = K.margin, e.style.display = K.display, d(k), N(e);
      const Q = D(e);
      _.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: k, state: Q } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: te, state: F } }
      ), t && t(k);
    }
  }, V = () => {
    if (e && e.parentNode) {
      const k = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      _.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: k } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, ie = () => {
    const k = l, F = !l;
    T(F), _.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: k } }
    ), r && r(F);
  }, re = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, ne = (k) => ({
    ...re,
    background: k ? "#007bff" : "transparent",
    color: k ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : jn(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${l ? "" : "active"}`,
              onClick: ie,
              title: `Toggle aspect ratio preservation (currently ${l ? "ON" : "OFF"})`,
              children: l ? /* @__PURE__ */ h.jsx(Io, { size: 14 }) : /* @__PURE__ */ h.jsx(ho, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => G("left"),
              title: "Align Left",
              style: ne(y === "left"),
              children: /* @__PURE__ */ h.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => G("center"),
              title: "Align Center",
              style: ne(y === "center"),
              children: /* @__PURE__ */ h.jsx(hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => G("right"),
              title: "Align Right",
              style: ne(y === "right"),
              children: /* @__PURE__ */ h.jsx(mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: V,
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
              children: /* @__PURE__ */ h.jsx(Zo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
bt.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
bt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const _a = 50, tt = 50, wa = 50, Sa = 100, Ra = 300, vt = ft(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: f = !0
}, p) => {
  const c = tn(), l = ke(), { pageSize: T, pageMargins: b, continuousContent: v, pageBoundaries: _, activePage: N, zoomLevel: D, canUndo: M, canRedo: y } = c, d = J(null), m = J(null), { currentFormat: O, formatText: G, updateCurrentFormatFromSelection: V } = sr(), [ie, re] = ue(!1), [ne, k] = ue(null), [F, te] = ue(!0), K = J(null), {
    checkAndUpdateBoundaries: Q,
    getCurrentPage: ee,
    scrollToPage: se,
    updateBoundaries: E,
    triggerAutoReflow: u,
    removePageAndContent: A,
    removePageBreak: R,
    insertPageBreakAtBoundary: S
  } = Rr(T, m, D, b), z = Te(() => gt(T), [T]), [H, C] = ue(!1), j = J(null), U = J(!1), $ = J(!1), oe = J(!1), P = J(v);
  ae(() => {
    if (m.current) {
      if (!oe.current) {
        m.current.innerHTML = v, oe.current = !0, P.current = v;
        const w = setTimeout(() => {
          E();
        }, _a);
        return () => clearTimeout(w);
      }
      if (P.current !== v) {
        if (m.current.innerHTML !== v) {
          m.current.innerHTML = v;
          const W = setTimeout(() => {
            E(), U.current && me();
          }, tt);
          return P.current = v, () => clearTimeout(W);
        }
        P.current = v;
      }
    }
  }, [v, E, _.length, l, se]), ae(() => {
    o && oe.current && o(v);
  }, [v, o]);
  const ce = Te(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m.current ? m.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? wr(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (w) => {
      const W = $e(w);
      W !== v && l.updateContinuousContent(W), m.current && m.current.innerHTML !== W && (m.current.innerHTML = W), P.current = W, m.current && setTimeout(() => {
        E();
      }, tt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (w) => {
      if (!m.current || !w) return;
      const W = $e(w), X = window.getSelection();
      let le = !1;
      if (X && X.rangeCount > 0) {
        const Ze = X.getRangeAt(0);
        m.current.contains(Ze.commonAncestorContainer) && (le = !0);
      }
      if (!le && K.current)
        try {
          X.removeAllRanges(), X.addRange(K.current);
        } catch (Ze) {
          console.warn("[insertContent] Failed to restore last cursor position:", Ze);
          const Ae = m.current.lastChild;
          if (Ae) {
            const Ie = document.createRange();
            Ae.nodeType === Node.TEXT_NODE ? Ie.setStart(Ae, Ae.textContent.length) : Ie.setStartAfter(Ae), Ie.collapse(!0), X.removeAllRanges(), X.addRange(Ie);
          }
        }
      document.execCommand("insertHTML", !1, W);
      const pe = m.current.innerHTML;
      l.updateContinuousContent(pe), P.current = pe, setTimeout(() => {
        E(), u(200);
      }, tt);
    }
  }), [v, l, E, m, K, Q]);
  Dn(p, () => ce, [ce]), ae(() => {
    const w = () => {
      if (V(), m.current) {
        const X = window.getSelection();
        if (X.rangeCount > 0) {
          const le = X.getRangeAt(0);
          le.collapsed && m.current.contains(le.commonAncestorContainer) && (K.current = le.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", w);
    const W = () => {
      if (setTimeout(V, 10), K.current && m.current)
        try {
          const X = window.getSelection();
          X.removeAllRanges(), X.addRange(K.current);
        } catch (X) {
          console.warn("[handleFocus] Failed to restore cursor:", X);
        }
    };
    return m.current && m.current.addEventListener("focus", W), () => {
      document.removeEventListener("selectionchange", w), m.current && m.current.removeEventListener("focus", W);
    };
  }, [V]);
  const me = L(() => {
    U.current = !1;
    const w = Math.max(0, _.length - 1);
    l.setActivePage(w), setTimeout(() => {
      se(w, d);
    }, wa);
  }, [_.length, l, se]), be = L(() => {
    if (!m.current) return;
    let w = m.current.innerHTML;
    w = $e(w), w !== m.current.innerHTML && (m.current.innerHTML = w);
    const W = v;
    if (W !== w) {
      const le = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: w
      }, pe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: W
      };
      l.recordOperation(le, pe);
    }
    l.updateContinuousContent(w), Q(), u(200);
    const X = ee(d);
    X !== N && l.setActivePage(X);
  }, [l, Q, ee, N, u, d, m, v]), An = L((w) => {
    be();
  }, [be]), xt = L((w) => {
    l.updatePageSize(w), E({ pageSize: w }), s && s(w);
  }, [l, E, s]), At = L((w) => {
    l.updatePageMargins(w), E({ pageMargins: w }), a && a(w);
  }, [l, E, a]), Pt = L((w) => {
    w < 0 || w >= _.length || ($.current = !0, l.setActivePage(w), se(w, d), setTimeout(() => {
      $.current = !1;
    }, Ra), t && t(w));
  }, [l, se, t, _.length]), _t = L(() => {
    const w = _.length + 1;
    S(w) && (U.current = !0, setTimeout(() => {
      U.current && me();
    }, 100)), r && r();
  }, [_.length, S, l, se, r]), Pn = L(() => {
    const w = window.getSelection();
    if (w && w.rangeCount > 0) {
      if (!m?.current) return;
      const le = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, le), setTimeout(() => {
        E();
        const pe = ee(d);
        l.setActivePage(pe);
      }, 150);
    }
  }, [E, ee, l, d]), _n = L((w) => {
    if (!w) return;
    R(w) && setTimeout(() => {
      const X = ee(d);
      l.setActivePage(X);
    }, 200);
  }, [R, ee, l, d]), wt = L((w) => {
    if (_.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    A(w) && (l.setActivePage(0), n && n(w));
  }, [_.length, A, l, n]), Ce = L(() => {
    l.zoomIn();
  }, [l]), Ne = L(() => {
    l.zoomOut();
  }, [l]), Me = L(() => {
    l.resetZoom();
  }, [l]), St = L(() => {
    l.undo();
  }, [l]), Rt = L(() => {
    l.redo();
  }, [l]);
  ae(() => {
    const w = (W) => {
      if (W.ctrlKey || W.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(W.key) && W.preventDefault();
        const X = document.activeElement === m.current, le = document.activeElement === d.current, pe = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (X || le || !pe)
          switch (W.key) {
            case "+":
            case "=":
              Ce();
              break;
            case "-":
            case "_":
              Ne();
              break;
            case "0":
              Me();
              break;
            case "z":
              W.shiftKey || St();
              break;
            case "y":
              Rt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", w), () => {
      window.removeEventListener("keydown", w);
    };
  }, [Ce, Ne, Me, St, Rt]);
  const wn = L(() => {
    !d.current || !m.current || $.current || (j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      if ($.current) {
        j.current = null;
        return;
      }
      const w = ee(d);
      w !== N && w >= 0 && l.setActivePage(w), j.current = null;
    }, Sa));
  }, [ee, N, l]), Sn = Te(() => {
    if (!v) return 0;
    const W = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return W ? W.length : 0;
  }, [v]), Rn = _.length || 1, kn = L((w) => {
    re(!0), k(w);
  }, []), kt = L(() => {
    re(!1), k(null);
  }, []), On = L((w, W) => {
  }, []);
  return ae(() => () => {
    j.current && clearTimeout(j.current);
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ h.jsx(
      mt,
      {
        currentFormat: {
          ...O,
          imageSelected: ie
        },
        onFormatText: G,
        onAddPageBreak: Pn,
        canUndo: M,
        canRedo: y
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ h.jsx(
        aa,
        {
          editorView: null,
          isCollapsed: H,
          onToggle: () => C((w) => !w),
          wordCount: Sn,
          pageCount: Rn
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: d,
          onScroll: wn,
          children: /* @__PURE__ */ h.jsx(
            Ta,
            {
              content: v,
              dimensions: z,
              pageSize: T,
              pageMargins: b,
              pageBoundaries: _,
              editorRef: m,
              onInput: An,
              onContentChange: be,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: _n,
              zoomLevel: D
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsx(
        Tt,
        {
          editorRef: m,
          onImageSelect: kn,
          onImageDeselect: kt,
          onImageResize: On,
          resizeOptions: {
            ...xe,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      ie && ne && /* @__PURE__ */ h.jsx(
        bt,
        {
          imageElement: ne,
          initialPreserveAspectRatio: F,
          onAlignChange: (w) => {
          },
          onAspectRatioToggle: (w) => {
            te(w);
          },
          onDelete: () => {
            if (ne) {
              const w = ne.getAttribute("data-key");
              w && Dr(w).catch((W) => {
                console.error("Failed to delete image from IndexedDB:", W);
              });
            }
          },
          onClose: kt
        }
      ),
      f && /* @__PURE__ */ h.jsx("div", { className: "page-manager-sidebar", children: e ? qe.cloneElement(e, {
        onNavigate: Pt,
        onAddPage: _t,
        onDeletePage: wt,
        onPageSizeChange: xt,
        onPageMarginsChange: At,
        zoomLevel: D,
        canZoomIn: st(D),
        canZoomOut: it(D),
        onZoomIn: Ce,
        onZoomOut: Ne,
        onZoomReset: Me
      }) : /* @__PURE__ */ h.jsx(
        ba,
        {
          pageBoundaries: _,
          activePage: N,
          pageSize: T,
          pageMargins: b,
          zoomLevel: D,
          canZoomIn: st(D),
          canZoomOut: it(D),
          onNavigate: Pt,
          onAddPage: _t,
          onDeletePage: wt,
          onPageSizeChange: xt,
          onPageMarginsChange: At,
          onZoomIn: Ce,
          onZoomOut: Ne,
          onZoomReset: Me
        }
      ) })
    ] })
  ] });
});
vt.displayName = "HtmlEditor";
vt.propTypes = {
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
vt.defaultProps = {
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
class xn extends qe.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ h.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ h.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ h.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ h.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ h.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ h.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ h.jsx(
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
xn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
xn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  nr as COMMON_FONT_SIZES,
  We as DEFAULT_FONT_SIZE,
  xe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Xt as DEFAULT_PAGE_SIZE,
  Ia as DocumentProvider,
  mt as EditorToolbar,
  xn as ErrorBoundary,
  on as FONT_SIZE_MAP,
  vt as HtmlEditor,
  Tt as ImageResizeHandlers,
  ve as PAGE_SIZES,
  ba as PageManager,
  Ta as PageView,
  I as RESIZE_HANDLERS,
  aa as Sidebar,
  za as applyImageDimensions,
  Ba as calculateResizeDimensions,
  $a as clearImages,
  kr as createResizeOverlay,
  Dr as deleteImage,
  Ua as getAllImageKeys,
  Ma as getAvailablePageSizes,
  Lr as getImage,
  Ha as getImageDimensions,
  gt as getPageDimensions,
  La as getPixelValue,
  Da as getPointValue,
  ge as isResizableImage,
  ja as isValidFontSize,
  Na as isValidPageSize,
  sa as logger,
  or as pixelsToPoints,
  rr as pointsToPixels,
  et as removeResizeOverlay,
  Ir as saveImage,
  ut as updateResizeOverlay,
  Rr as useContinuousReflow,
  en as useDocument,
  ke as useDocumentActions,
  tn as useDocumentState,
  sr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
