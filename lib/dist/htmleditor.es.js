import Je, { createContext as ir, useContext as cr, useReducer as lr, useMemo as be, useState as re, useCallback as O, useRef as ee, useEffect as ae, forwardRef as wt, createElement as ft, memo as ur, useLayoutEffect as bn, useImperativeHandle as dr } from "react";
import { v4 as At } from "uuid";
import { createPortal as Tn } from "react-dom";
function fr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $e = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function pr() {
  if (Xt) return Oe;
  Xt = 1;
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
  return Oe.Fragment = t, Oe.jsx = r, Oe.jsxs = r, Oe;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function gr() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === w ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case S:
          return "Fragment";
        case z:
          return "Profiler";
        case N:
          return "StrictMode";
        case m:
          return "Suspense";
        case M:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case x:
            return "Portal";
          case y:
            return f.displayName || "Context";
          case k:
            return (f._context.displayName || "Context") + ".Consumer";
          case g:
            var C = f.render;
            return f = f.displayName, f || (f = C.displayName || C.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case _:
            return C = f.displayName || null, C !== null ? C : e(f.type) || "Memo";
          case B:
            C = f._payload, f = f._init;
            try {
              return e(f(C));
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
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var j = C.error, I = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return j.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(f);
      }
    }
    function n(f) {
      if (f === S) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === B)
        return "<...>";
      try {
        var C = e(f);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = D.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (b.call(f, "key")) {
        var C = Object.getOwnPropertyDescriptor(f, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, C) {
      function j() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: j,
        configurable: !0
      });
    }
    function p() {
      var f = e(this.type);
      return Q[f] || (Q[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, C, j, I, W, F) {
      var $ = j.ref;
      return f = {
        $$typeof: v,
        type: f,
        key: C,
        props: j,
        _owner: I
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: p
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
        value: W
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, C, j, I, W, F) {
      var $ = C.children;
      if ($ !== void 0)
        if (I)
          if (L($)) {
            for (I = 0; I < $.length; I++)
              c($[I]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c($);
      if (b.call(C, "key")) {
        $ = e(f);
        var Z = Object.keys(C).filter(function(V) {
          return V !== "key";
        });
        I = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", A[$ + I] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          $,
          Z,
          $
        ), A[$ + I] = !0);
      }
      if ($ = null, j !== void 0 && (r(j), $ = "" + j), o(C) && (r(C.key), $ = "" + C.key), "key" in C) {
        j = {};
        for (var K in C)
          K !== "key" && (j[K] = C[K]);
      } else j = C;
      return $ && i(
        j,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        $,
        j,
        s(),
        W,
        F
      );
    }
    function c(f) {
      u(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === B && (f._payload.status === "fulfilled" ? u(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === v;
    }
    var E = Je, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), y = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), D = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, L = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var q, Q = {}, se = E.react_stack_bottom_frame.bind(
      E,
      a
    )(), oe = Y(n(a)), A = {};
    Pe.Fragment = S, Pe.jsx = function(f, C, j) {
      var I = 1e4 > D.recentlyCreatedOwnerStacks++;
      return d(
        f,
        C,
        j,
        !1,
        I ? Error("react-stack-top-frame") : se,
        I ? Y(n(f)) : oe
      );
    }, Pe.jsxs = function(f, C, j) {
      var I = 1e4 > D.recentlyCreatedOwnerStacks++;
      return d(
        f,
        C,
        j,
        !0,
        I ? Error("react-stack-top-frame") : se,
        I ? Y(n(f)) : oe
      );
    };
  })()), Pe;
}
var Qt;
function hr() {
  return Qt || (Qt = 1, process.env.NODE_ENV === "production" ? $e.exports = pr() : $e.exports = gr()), $e.exports;
}
var h = hr();
const pt = 100, gt = 50, ht = 200, en = 5, mt = (e) => e < ht, yt = (e) => e > gt, mr = 96, Ue = (e) => Math.round(e * mr), Ve = {
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
}, he = "NORMAL", vn = (e = he) => {
  const t = Ve[e] || Ve[he];
  return {
    top: Ue(t.top),
    bottom: Ue(t.bottom),
    left: Ue(t.left),
    right: Ue(t.right)
  };
}, yr = (e = he) => {
  const t = vn(e);
  return t.top + t.bottom;
}, br = () => Object.keys(Ve), Tr = (e) => {
  const t = Ve[e];
  return t ? t.label : "Unknown";
}, Ce = {
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
}, En = "A4", Rt = (e) => {
  const t = Ce[e] || Ce[En];
  return {
    width: t.width,
    height: t.height
  };
}, gs = (e) => Object.keys(Ce).includes(e), hs = () => Object.keys(Ce), Me = En, we = "<p><br></p>", vr = "continuous", ke = (e, t = Me) => ({
  id: At(),
  index: e,
  size: t,
  content: we,
  images: [],
  isBreakPoint: !1
}), Ze = (e) => typeof e != "string" || e.trim() === "" ? we : e, xn = (e, t = Me) => (e.length > 0 ? e : [ke(0, t)]).map((n, s) => ({
  id: n.id || At(),
  index: s,
  size: n.size || t,
  content: Ze(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Er = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Rt(e).height
}], Fe = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), bt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Me, n = xn(e.pages || [ke(0, r)], r);
  return {
    id: At(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || vr,
    continuousContent: e.continuousContent || we,
    pageBoundaries: e.pageBoundaries || Er(r),
    zoomLevel: e.zoomLevel || pt,
    pageMargins: e.pageMargins || he,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
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
}, Tt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case G.INITIALIZE_DOCUMENT: {
      const { initialContent: n = we, pageSize: s = Me } = t.payload || {}, a = { ...ke(0, s), content: Ze(n) };
      return bt({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case G.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case G.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: Ze(s)
      }, {
        ...e,
        pages: a,
        updatedAt: r
      };
    }
    case G.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = xn(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : Fe(s);
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case G.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, ke(n, e.pageSize));
      const a = s.map((i, p) => ({
        ...i,
        index: p,
        size: e.pageSize
      })), o = Fe(a);
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case G.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((p, l) => ({
        ...p,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : n <= o && o > 0 && (o -= 1);
      const i = Fe(a);
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case G.SET_ACTIVE_PAGE: {
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
    case G.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Rt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const s = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: n
      })), a = Fe(s);
      return {
        ...e,
        pageSize: n,
        pages: s,
        pageBreaks: a,
        updatedAt: r
      };
    }
    case G.RESET_DOCUMENT:
      return bt();
    case G.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ze(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case G.UPDATE_PAGE_BOUNDARIES: {
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
    case G.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (n === "end")
        o = o + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = o.substring(0, n), p = o.substring(n);
        o = i + a + p;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = o;
        const p = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && p.length === 0)
          o = o + a + "<p><br></p>";
        else if (s < p.length) {
          const l = p[s], d = document.createElement("page-break");
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
    case G.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, p) => {
        i.setAttribute("data-page-number", String(p + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: r
      };
    }
    case G.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== we).join(`
`) || we : e.continuousContent && e.continuousContent !== we && (a = [{ ...ke(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: r
      };
    }
    case G.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < gt || n > ht ? (console.warn(`Invalid zoom level: ${n}. Must be between ${gt} and ${ht}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case G.ZOOM_IN: {
      if (!mt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + en;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case G.ZOOM_OUT: {
      if (!yt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - en;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case G.RESET_ZOOM:
      return e.zoomLevel === pt ? e : {
        ...e,
        zoomLevel: pt,
        updatedAt: r
      };
    case G.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case G.RECORD_OPERATION: {
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
    case G.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = Tt(e, n.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, n],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case G.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = Tt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: r
      };
    }
    case G.CLEAR_UNDO_REDO:
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
}, wn = ir(null), ms = ({ children: e, initialState: t = {} }) => {
  const [r, n] = lr(Tt, bt(t)), s = be(() => ({
    initializeDocument: (o) => n({ type: G.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => n({ type: G.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => n({ type: G.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => n({ type: G.UPDATE_PAGES, payload: o }),
    addPage: (o) => n({ type: G.ADD_PAGE, payload: o }),
    deletePage: (o) => n({ type: G.DELETE_PAGE, payload: o }),
    setActivePage: (o) => n({ type: G.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => n({ type: G.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => n({ type: G.RESET_DOCUMENT }),
    updateContinuousContent: (o) => n({ type: G.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => n({ type: G.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => n({ type: G.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => n({ type: G.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => n({ type: G.SET_EDITOR_MODE, payload: o }),
    setZoomLevel: (o) => n({ type: G.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => n({ type: G.ZOOM_IN }),
    zoomOut: () => n({ type: G.ZOOM_OUT }),
    resetZoom: () => n({ type: G.RESET_ZOOM }),
    updatePageMargins: (o) => n({ type: G.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, i) => n({
      type: G.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: i }
    }),
    undo: () => n({ type: G.UNDO }),
    redo: () => n({ type: G.REDO }),
    clearUndoRedo: () => n({ type: G.CLEAR_UNDO_REDO })
  }), []), a = be(() => ({
    state: r,
    actions: s,
    dispatch: n
  }), [r, s]);
  return /* @__PURE__ */ h.jsx(wn.Provider, { value: a, children: e });
}, An = () => {
  const e = cr(wn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Rn = () => {
  const { state: e } = An();
  return e;
}, ve = () => {
  const { actions: e } = An();
  return e;
};
var We = { exports: {} }, Ge = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function xr() {
  if (tn) return te;
  tn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function k(g) {
    if (typeof g == "object" && g !== null) {
      var m = g.$$typeof;
      switch (m) {
        case t:
          switch (g = g.type, g) {
            case p:
            case l:
            case n:
            case a:
            case s:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case d:
                case v:
                case E:
                case o:
                  return g;
                default:
                  return m;
              }
          }
        case r:
          return m;
      }
    }
  }
  function y(g) {
    return k(g) === l;
  }
  return te.AsyncMode = p, te.ConcurrentMode = l, te.ContextConsumer = i, te.ContextProvider = o, te.Element = t, te.ForwardRef = d, te.Fragment = n, te.Lazy = v, te.Memo = E, te.Portal = r, te.Profiler = a, te.StrictMode = s, te.Suspense = c, te.isAsyncMode = function(g) {
    return y(g) || k(g) === p;
  }, te.isConcurrentMode = y, te.isContextConsumer = function(g) {
    return k(g) === i;
  }, te.isContextProvider = function(g) {
    return k(g) === o;
  }, te.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, te.isForwardRef = function(g) {
    return k(g) === d;
  }, te.isFragment = function(g) {
    return k(g) === n;
  }, te.isLazy = function(g) {
    return k(g) === v;
  }, te.isMemo = function(g) {
    return k(g) === E;
  }, te.isPortal = function(g) {
    return k(g) === r;
  }, te.isProfiler = function(g) {
    return k(g) === a;
  }, te.isStrictMode = function(g) {
    return k(g) === s;
  }, te.isSuspense = function(g) {
    return k(g) === c;
  }, te.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === l || g === a || g === s || g === c || g === u || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === E || g.$$typeof === o || g.$$typeof === i || g.$$typeof === d || g.$$typeof === S || g.$$typeof === N || g.$$typeof === z || g.$$typeof === x);
  }, te.typeOf = k, te;
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
var nn;
function wr() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function k(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === n || H === l || H === a || H === s || H === c || H === u || typeof H == "object" && H !== null && (H.$$typeof === v || H.$$typeof === E || H.$$typeof === o || H.$$typeof === i || H.$$typeof === d || H.$$typeof === S || H.$$typeof === N || H.$$typeof === z || H.$$typeof === x);
    }
    function y(H) {
      if (typeof H == "object" && H !== null) {
        var ue = H.$$typeof;
        switch (ue) {
          case t:
            var de = H.type;
            switch (de) {
              case p:
              case l:
              case n:
              case a:
              case s:
              case c:
                return de;
              default:
                var Ee = de && de.$$typeof;
                switch (Ee) {
                  case i:
                  case d:
                  case v:
                  case E:
                  case o:
                    return Ee;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var g = p, m = l, M = i, _ = o, B = t, R = d, w = n, D = v, b = E, L = r, Y = a, q = s, Q = c, se = !1;
    function oe(H) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(H) || y(H) === p;
    }
    function A(H) {
      return y(H) === l;
    }
    function f(H) {
      return y(H) === i;
    }
    function C(H) {
      return y(H) === o;
    }
    function j(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function I(H) {
      return y(H) === d;
    }
    function W(H) {
      return y(H) === n;
    }
    function F(H) {
      return y(H) === v;
    }
    function $(H) {
      return y(H) === E;
    }
    function Z(H) {
      return y(H) === r;
    }
    function K(H) {
      return y(H) === a;
    }
    function V(H) {
      return y(H) === s;
    }
    function ce(H) {
      return y(H) === c;
    }
    ne.AsyncMode = g, ne.ConcurrentMode = m, ne.ContextConsumer = M, ne.ContextProvider = _, ne.Element = B, ne.ForwardRef = R, ne.Fragment = w, ne.Lazy = D, ne.Memo = b, ne.Portal = L, ne.Profiler = Y, ne.StrictMode = q, ne.Suspense = Q, ne.isAsyncMode = oe, ne.isConcurrentMode = A, ne.isContextConsumer = f, ne.isContextProvider = C, ne.isElement = j, ne.isForwardRef = I, ne.isFragment = W, ne.isLazy = F, ne.isMemo = $, ne.isPortal = Z, ne.isProfiler = K, ne.isStrictMode = V, ne.isSuspense = ce, ne.isValidElementType = k, ne.typeOf = y;
  })()), ne;
}
var rn;
function Cn() {
  return rn || (rn = 1, process.env.NODE_ENV === "production" ? Ge.exports = xr() : Ge.exports = wr()), Ge.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ot, on;
function Ar() {
  if (on) return ot;
  on = 1;
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
      var p = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ot = s() ? Object.assign : function(a, o) {
    for (var i, p = n(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var c in i)
        t.call(i, c) && (p[c] = i[c]);
      if (e) {
        l = e(i);
        for (var u = 0; u < l.length; u++)
          r.call(i, l[u]) && (p[l[u]] = i[l[u]]);
      }
    }
    return p;
  }, ot;
}
var at, an;
function Ct() {
  if (an) return at;
  an = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return at = e, at;
}
var st, sn;
function Sn() {
  return sn || (sn = 1, st = Function.call.bind(Object.prototype.hasOwnProperty)), st;
}
var it, cn;
function Rr() {
  if (cn) return it;
  cn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ct(), r = {}, n = /* @__PURE__ */ Sn();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, i, p, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var c;
          try {
            if (typeof a[d] != "function") {
              var u = Error(
                (p || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            c = a[d](o, d, p, i, null, t);
          } catch (v) {
            c = v;
          }
          if (c && !(c instanceof Error) && e(
            (p || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in r)) {
            r[c.message] = !0;
            var E = l ? l() : "";
            e(
              "Failed " + i + " type: " + c.message + (E ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, it = s, it;
}
var ct, ln;
function Cr() {
  if (ln) return ct;
  ln = 1;
  var e = Cn(), t = Ar(), r = /* @__PURE__ */ Ct(), n = /* @__PURE__ */ Sn(), s = /* @__PURE__ */ Rr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var p = "Warning: " + i;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return ct = function(i, p) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function c(A) {
      var f = A && (l && A[l] || A[d]);
      if (typeof f == "function")
        return f;
    }
    var u = "<<anonymous>>", E = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: z(),
      arrayOf: k,
      element: y(),
      elementType: g(),
      instanceOf: m,
      node: R(),
      objectOf: _,
      oneOf: M,
      oneOfType: B,
      shape: D,
      exact: b
    };
    function v(A, f) {
      return A === f ? A !== 0 || 1 / A === 1 / f : A !== A && f !== f;
    }
    function x(A, f) {
      this.message = A, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function S(A) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, C = 0;
      function j(W, F, $, Z, K, V, ce) {
        if (Z = Z || u, V = V || $, ce !== r) {
          if (p) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = Z + ":" + $;
            !f[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ue] = !0, C++);
          }
        }
        return F[$] == null ? W ? F[$] === null ? new x("The " + K + " `" + V + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new x("The " + K + " `" + V + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : A(F, $, Z, K, V);
      }
      var I = j.bind(null, !1);
      return I.isRequired = j.bind(null, !0), I;
    }
    function N(A) {
      function f(C, j, I, W, F, $) {
        var Z = C[j], K = q(Z);
        if (K !== A) {
          var V = Q(Z);
          return new x(
            "Invalid " + W + " `" + F + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return S(f);
    }
    function z() {
      return S(o);
    }
    function k(A) {
      function f(C, j, I, W, F) {
        if (typeof A != "function")
          return new x("Property `" + F + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var $ = C[j];
        if (!Array.isArray($)) {
          var Z = q($);
          return new x("Invalid " + W + " `" + F + "` of type " + ("`" + Z + "` supplied to `" + I + "`, expected an array."));
        }
        for (var K = 0; K < $.length; K++) {
          var V = A($, K, I, W, F + "[" + K + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return S(f);
    }
    function y() {
      function A(f, C, j, I, W) {
        var F = f[C];
        if (!i(F)) {
          var $ = q(F);
          return new x("Invalid " + I + " `" + W + "` of type " + ("`" + $ + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(A);
    }
    function g() {
      function A(f, C, j, I, W) {
        var F = f[C];
        if (!e.isValidElementType(F)) {
          var $ = q(F);
          return new x("Invalid " + I + " `" + W + "` of type " + ("`" + $ + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(A);
    }
    function m(A) {
      function f(C, j, I, W, F) {
        if (!(C[j] instanceof A)) {
          var $ = A.name || u, Z = oe(C[j]);
          return new x("Invalid " + W + " `" + F + "` of type " + ("`" + Z + "` supplied to `" + I + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return S(f);
    }
    function M(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(C, j, I, W, F) {
        for (var $ = C[j], Z = 0; Z < A.length; Z++)
          if (v($, A[Z]))
            return null;
        var K = JSON.stringify(A, function(ce, H) {
          var ue = Q(H);
          return ue === "symbol" ? String(H) : H;
        });
        return new x("Invalid " + W + " `" + F + "` of value `" + String($) + "` " + ("supplied to `" + I + "`, expected one of " + K + "."));
      }
      return S(f);
    }
    function _(A) {
      function f(C, j, I, W, F) {
        if (typeof A != "function")
          return new x("Property `" + F + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var $ = C[j], Z = q($);
        if (Z !== "object")
          return new x("Invalid " + W + " `" + F + "` of type " + ("`" + Z + "` supplied to `" + I + "`, expected an object."));
        for (var K in $)
          if (n($, K)) {
            var V = A($, K, I, W, F + "." + K, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return S(f);
    }
    function B(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < A.length; f++) {
        var C = A[f];
        if (typeof C != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(C) + " at index " + f + "."
          ), o;
      }
      function j(I, W, F, $, Z) {
        for (var K = [], V = 0; V < A.length; V++) {
          var ce = A[V], H = ce(I, W, F, $, Z, r);
          if (H == null)
            return null;
          H.data && n(H.data, "expectedType") && K.push(H.data.expectedType);
        }
        var ue = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new x("Invalid " + $ + " `" + Z + "` supplied to " + ("`" + F + "`" + ue + "."));
      }
      return S(j);
    }
    function R() {
      function A(f, C, j, I, W) {
        return L(f[C]) ? null : new x("Invalid " + I + " `" + W + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return S(A);
    }
    function w(A, f, C, j, I) {
      return new x(
        (A || "React class") + ": " + f + " type `" + C + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function D(A) {
      function f(C, j, I, W, F) {
        var $ = C[j], Z = q($);
        if (Z !== "object")
          return new x("Invalid " + W + " `" + F + "` of type `" + Z + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var K in A) {
          var V = A[K];
          if (typeof V != "function")
            return w(I, W, F, K, Q(V));
          var ce = V($, K, I, W, F + "." + K, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return S(f);
    }
    function b(A) {
      function f(C, j, I, W, F) {
        var $ = C[j], Z = q($);
        if (Z !== "object")
          return new x("Invalid " + W + " `" + F + "` of type `" + Z + "` " + ("supplied to `" + I + "`, expected `object`."));
        var K = t({}, C[j], A);
        for (var V in K) {
          var ce = A[V];
          if (n(A, V) && typeof ce != "function")
            return w(I, W, F, V, Q(ce));
          if (!ce)
            return new x(
              "Invalid " + W + " `" + F + "` key `" + V + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(C[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var H = ce($, V, I, W, F + "." + V, r);
          if (H)
            return H;
        }
        return null;
      }
      return S(f);
    }
    function L(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(L);
          if (A === null || i(A))
            return !0;
          var f = c(A);
          if (f) {
            var C = f.call(A), j;
            if (f !== A.entries) {
              for (; !(j = C.next()).done; )
                if (!L(j.value))
                  return !1;
            } else
              for (; !(j = C.next()).done; ) {
                var I = j.value;
                if (I && !L(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(A, f) {
      return A === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function q(A) {
      var f = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : Y(f, A) ? "symbol" : f;
    }
    function Q(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var f = q(A);
      if (f === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function se(A) {
      var f = Q(A);
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
    function oe(A) {
      return !A.constructor || !A.constructor.name ? u : A.constructor.name;
    }
    return E.checkPropTypes = s, E.resetWarningCache = s.resetWarningCache, E.PropTypes = E, E;
  }, ct;
}
var lt, un;
function Sr() {
  if (un) return lt;
  un = 1;
  var e = /* @__PURE__ */ Ct();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, lt = function() {
    function n(o, i, p, l, d, c) {
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
  }, lt;
}
var dn;
function _r() {
  if (dn) return We.exports;
  if (dn = 1, process.env.NODE_ENV !== "production") {
    var e = Cn(), t = !0;
    We.exports = /* @__PURE__ */ Cr()(e.isElement, t);
  } else
    We.exports = /* @__PURE__ */ Sr()();
  return We.exports;
}
var Or = /* @__PURE__ */ _r();
const T = /* @__PURE__ */ fr(Or), _n = {
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
}, Pr = [
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
], Qe = "16px", kr = (e) => Math.round(e * 96 / 72), Nr = (e) => Math.round(e * 72 / 96 * 2) / 2, ys = (e) => {
  const t = Object.values(_n).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${kr(e)}px`;
}, bs = (e) => {
  const t = parseInt(e), r = Object.values(_n).find((n) => n.px === t);
  return r ? r.pt : Nr(t);
}, Ts = (e) => {
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
}, Mr = {
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
}, fn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Qe,
  headingLevel: "p"
  // Add heading level tracking
}, Lr = () => {
  const [e, t] = re(fn), r = ve(), n = O((c, u, E = null) => {
    try {
      const v = window.getSelection();
      if (!v || v.rangeCount === 0)
        return !1;
      const x = v.getRangeAt(0);
      if (!x.toString())
        return t((N) => ({ ...N, [c]: u })), !1;
      try {
        const N = document.createElement("span");
        N.style[c] = u;
        const z = x.extractContents();
        return N.appendChild(z), x.insertNode(N), x.selectNodeContents(N), v.removeAllRanges(), v.addRange(x), t((k) => ({ ...k, [c]: u })), !0;
      } catch {
        if (E) {
          const N = c === "fontSize" ? Mr[u] || "3" : u;
          return document.execCommand(E, !1, N), t((z) => ({ ...z, [c]: u })), !0;
        }
        return !1;
      }
    } catch (v) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, v), !1;
    }
  }, []), s = O((c) => n("fontFamily", c, "fontName"), [n]), a = O((c) => n("fontSize", c, "fontSize"), [n]), o = O((c) => {
    t((u) => ({
      ...u,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = O((c) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const E = u.getRangeAt(0), v = E.toString(), S = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!S)
        return !1;
      if (!v) {
        const z = E.startContainer, k = z.nodeType === Node.TEXT_NODE ? z.parentElement : z, y = Ke(k) || Dr();
        return y && (y.style.textAlign = S, o(S)), !0;
      }
      const N = Ir(E);
      if (N.length === 0) {
        const z = document.createElement("p");
        z.style.textAlign = S;
        const k = E.extractContents();
        z.appendChild(k), E.insertNode(z), E.selectNodeContents(z), u.removeAllRanges(), u.addRange(E);
      } else
        N.forEach((z) => {
          z.style.textAlign = S;
        });
      return o(S), !0;
    } catch (u) {
      return console.warn("[useFormatting] Text alignment failed:", u), !1;
    }
  }, [o]), p = O((c, u = null) => {
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
    } catch (E) {
      console.warn(`[useFormatting] Error executing command "${c}":`, E);
    }
  }, [a, s, i, r]), l = O(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0), E = u.toString();
      let v = Qe, x = "Arial", S = "p", N = "left";
      if (E) {
        const k = u.startContainer, y = k.nodeType === Node.TEXT_NODE ? k.parentElement : k;
        if (y) {
          const g = window.getComputedStyle(y), m = g.fontSize, M = g.fontFamily;
          m && m.endsWith("px") && (v = m), M && M !== "serif" && (x = M.split(",")[0].replace(/['"]/g, "").trim());
          const _ = Ke(y);
          if (_) {
            const B = _.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(B) && (S = B);
            const w = window.getComputedStyle(_).textAlign;
            ["left", "center", "right", "justify"].includes(w) && (N = w);
          }
        }
      }
      const z = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: N === "left",
        alignCenter: N === "center",
        alignRight: N === "right",
        alignJustify: N === "justify",
        fontFamily: x,
        fontSize: v,
        headingLevel: S
      };
      t((k) => ({
        ...k,
        ...z
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), d = O(() => {
    t(fn);
  }, []);
  return {
    currentFormat: e,
    formatText: p,
    resetFormat: d,
    updateCurrentFormatFromSelection: l
  };
};
function Ke(e) {
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
function Ir(e) {
  const t = [], r = e.startContainer, n = e.endContainer, s = Ke(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), a = Ke(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (s === a && s)
    return [s];
  const o = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (p) => {
        const l = p.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = o.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = o.nextNode();
  return t;
}
function Dr() {
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
const Te = 'page-break, [data-page-break="true"]', On = (e) => Ce[e] || Ce.A4, Hr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = On(r), s = e.querySelectorAll(Te), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const o = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((p, l) => {
    const c = p.getBoundingClientRect().top - o.top + i;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: c,
      height: n.height
    });
  }), a;
}, Pn = (e, t = 100, r = he) => {
  const n = On(e), s = yr(r), a = n.height - s, o = t / 100;
  return a / o;
}, Br = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(Te);
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
}, pn = (e) => {
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
}, jr = (e) => {
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
}, zr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, $r = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  try {
    const p = Pn(r, n, s) * (t - 1), l = Array.from(e.children);
    let d = 0, c = null;
    for (let u = 0; u < l.length; u++) {
      const E = l[u];
      if (E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        continue;
      const v = jr(E);
      if (d + v > p) {
        c = E;
        break;
      }
      d += v;
    }
    if (c) {
      const u = document.createElement("page-break");
      if (u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(u, c), a) {
        const E = e.innerHTML;
        a(E);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const u = document.createElement("page-break");
      u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), e.appendChild(u);
      const E = document.createElement("p");
      if (E.innerHTML = "<br>", e.appendChild(E), a) {
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
}, Ur = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const p = Array.from(e.querySelectorAll(Te));
    if (t > p.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let d = !1, c = [], u = null;
    if (t === 0) {
      const v = p[0];
      if (!v)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let x = e.firstChild;
      for (; x && x !== v; )
        c.push(x), x = x.nextSibling;
      u = v;
    } else {
      const v = p[t - 1];
      if (!v)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const x = p[t];
      let S = v.nextSibling;
      for (; S && S !== x; )
        c.push(S), S = S.nextSibling;
      u = v;
    }
    if (l && l.rangeCount > 0) {
      const x = l.getRangeAt(0).startContainer;
      for (const S of c)
        if (S.contains(x) || S === x) {
          d = !0;
          break;
        }
    }
    if (u && u.parentNode && u.remove(), c.forEach((v) => {
      v.parentNode && v.remove();
    }), e.querySelectorAll(Te).forEach((v, x) => {
      v.setAttribute("data-page-number", String(x + 2));
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
  } catch (p) {
    return console.error("[removePageAndContent] Failed to remove page:", p), !1;
  }
}, Fr = (e) => {
  if (e)
    try {
      e.querySelectorAll(Te).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Wr = (e, t, r, n, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Fr(t), r) {
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
}, Gr = 200, qr = 50, gn = 3, Zr = 20, kn = (e) => {
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
}, Yr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = kn(a);
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
}, Vr = (e, t, r, n, s, a, o, i) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const p = Pn(t, r, n);
    let l = pn(e), d = !1, c = 0;
    for (let u = 0; u < l.length && c < gn; u++) {
      const E = l[u], v = Yr(E, p);
      if (v && v.overflowIndex > 0) {
        let x = 0;
        for (let k = 0; k < E.length; k++) {
          const y = E[k];
          y && y.getBoundingClientRect && (x += kn(y));
        }
        if (x - p < Zr)
          continue;
        const N = u + 2;
        zr(v.overflowElement, N) && (d = !0, c++, l = pn(e));
      }
    }
    if (d) {
      if (s) {
        const u = e.innerHTML;
        s(u);
      }
      setTimeout(() => {
        a && a(), c >= gn && i && setTimeout(() => {
          o.current || i();
        }, 100);
      }, qr);
    }
    return d;
  } catch (p) {
    return console.warn("[checkAndReflow] Reflow failed:", p), !1;
  } finally {
    o.current = !1;
  }
}, Kr = (e, t, r = Gr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, Xr = 400, Nn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(Te)[t - 1];
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
}, Jr = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (r === 0)
      s = t;
    else {
      const o = t.querySelectorAll(Te)[r - 1];
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
        n ? n(r) : Nn(t, r);
      }, Xr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, Qr = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, eo = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const s = e.querySelectorAll(Te);
  for (const d of s)
    if (r.comparePoint(d, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(r.startContainer, r.startOffset);
  const i = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), p = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: p
  };
}, to = 300, no = (e, t, r = 100, n = "NARROW") => {
  const s = ve(), a = ee(null), o = ee(null), i = ee(e), p = ee(r), l = ee(n), d = ee(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    p.current = r;
  }, [r]), ae(() => {
    l.current = n;
  }, [n]), ae(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = O((m = {}) => t?.current ? Hr(t.current, m) : [], [t]), u = O((m = {}) => {
    const M = c(m);
    return s.updatePageBoundaries(M), M;
  }, [c, s]), E = O((m = {}) => {
    const M = typeof m.delay == "number" ? m.delay : to;
    Qr(u, a, m, M);
  }, [u]), v = O(() => {
    t?.current && Vr(
      t.current,
      i.current,
      p.current,
      l.current,
      s.updateContinuousContent,
      u,
      d,
      v
    );
  }, [t, s, u]), x = O((m) => {
    Kr(v, o, m);
  }, [v]), S = O((m) => !m?.current || !t?.current ? 0 : Br(m.current, t.current), [t]), N = O((m) => {
    t?.current && Nn(t.current, m);
  }, [t]), z = O((m, M) => {
    if (!M?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Jr(M.current, t.current, m, N);
  }, [t, N]), k = O(async (m) => t?.current ? $r(
    t.current,
    m,
    i.current,
    p.current,
    l.current,
    s.updateContinuousContent,
    u
  ) : !1, [t, s, u]), y = O((m) => t?.current ? Ur(
    t.current,
    m,
    c,
    s.updateContinuousContent,
    u,
    N,
    v
  ) : !1, [t, c, s, u, N, v]), g = O((m) => t?.current ? Wr(
    m,
    t.current,
    s.updateContinuousContent,
    u,
    v
  ) : !1, [t, s, u, v]);
  return ae(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), be(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: E,
    updateBoundaries: u,
    getCurrentPage: S,
    scrollToPage: z,
    positionCursorAtPage: N,
    checkAndReflow: v,
    triggerAutoReflow: x,
    removePageAndContent: y,
    removePageBreak: g,
    insertPageBreakAtBoundary: k,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    E,
    u,
    S,
    z,
    N,
    v,
    x,
    y,
    g,
    k
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
}, U = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function vs({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = Se
}) {
  const p = n - t, l = s - r;
  let d = a, c = o;
  switch (e) {
    case U.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case U.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case U.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case U.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case U.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case U.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case U.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case U.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      U.TOP_LEFT,
      U.TOP_RIGHT,
      U.BOTTOM_LEFT,
      U.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [U.TOP, U.BOTTOM].includes(e) ? d = c * u : [U.LEFT, U.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function ye(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Es(e) {
  return ye(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function xs(e, { width: t, height: r }) {
  ye(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ro(e, t = Se) {
  if (!ye(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(U).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = oo(a), o.style.pointerEvents = "all", Mn(o, a, n.width, n.height), r.appendChild(o);
  }), r;
}
function oo(e) {
  switch (e) {
    case U.TOP_LEFT:
    case U.BOTTOM_RIGHT:
      return "nwse-resize";
    case U.TOP_RIGHT:
    case U.BOTTOM_LEFT:
      return "nesw-resize";
    case U.TOP:
    case U.BOTTOM:
      return "ns-resize";
    case U.LEFT:
    case U.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Mn(e, t, r, n) {
  switch (t) {
    case U.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case U.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case U.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case U.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case U.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case U.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case U.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case U.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function vt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    Mn(s, a, r.width, r.height);
  });
}
function ut(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ao = "html-editor-storage", so = 1, pe = "images";
function io() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(ao, so);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(pe) || s.createObjectStore(pe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function co(e) {
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
      const o = a.target.result, p = o.split(",")[1].length * 3 / 4;
      if (p > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Le(), d = `editor-image-${io()}`, u = l.transaction([pe], "readwrite").objectStore(pe), E = {
          key: d,
          dataUrl: o,
          size: p,
          type: e.type,
          timestamp: Date.now()
        }, v = u.add(E);
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
async function lo(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const o = t.transaction([pe], "readonly").objectStore(pe).get(e);
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
async function uo(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const o = t.transaction([pe], "readwrite").objectStore(pe).delete(e);
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
async function ws() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const a = e.transaction([pe], "readwrite").objectStore(pe).clear();
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
async function As() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const a = e.transaction([pe], "readonly").objectStore(pe).getAllKeys();
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
const Ln = [
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
], fo = [
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
], po = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function go(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function In(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Ye(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Ne(r) || "<p><br></p>";
}
function ho(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function mo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Ln.includes(r.tagName));
}
function yo(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const s = n;
      Ln.includes(s.tagName) ? t.push(s.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Ne(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${go(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), p = In(a);
      if (o === "DIV") {
        const l = Ne(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        mo(a) ? t.push(yo(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = ho(a);
        t.push(`<${i}${p}>${l}</${i}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(bo(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(To(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = Ne(a);
        t.push(`<blockquote${p}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (fo.includes(o))
        t.push(a.outerHTML);
      else if (o === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (o === "HR")
        t.push(a.outerHTML);
      else if (o === "FIGURE")
        t.push(a.outerHTML);
      else if (po.includes(o))
        t.push(a.outerHTML);
      else {
        const l = Ne(a);
        t.push(`<${i}${p}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function bo(e) {
  const t = e.tagName.toLowerCase(), r = In(e), n = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      n.push(s.outerHTML);
    else {
      const a = Ne(s);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function To(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Eo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), hn = (e) => {
  const t = Eo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Dn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), xo = (e) => {
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
var wo = {
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
const Ao = wt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...i
  }, p) => ft(
    "svg",
    {
      ref: p,
      ...wo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Dn("lucide", s),
      ...!a && !xo(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...o.map(([l, d]) => ft(l, d)),
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
  const r = wt(
    ({ className: n, ...s }, a) => ft(Ao, {
      ref: a,
      iconNode: t,
      className: Dn(
        `lucide-${vo(hn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = hn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Co = X("arrow-down", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], _o = X("arrow-up", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Po = X("bold", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], No = X("chevron-left", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Lo = X("chevron-right", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Do = X("file-check", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Xe = X("file-text", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], jo = X("hash", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], $o = X("heading-1", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Fo = X("heading-2", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Go = X("heading-3", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Zo = X("image-upscale", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Vo = X("image", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Xo = X("italic", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Qo = X("link", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], ta = X("list-indent-decrease", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ra = X("list-indent-increase", na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], aa = X("list-ordered", oa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Hn = X("list", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ca = X("plus", ia);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ua = X("redo", la);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], fa = X("scaling", da);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ga = X("settings", pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], ma = X("strikethrough", ha);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ba = X("table", ya);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], St = X("text-align-center", Ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], _t = X("text-align-end", va);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], xa = X("text-align-justify", Ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Ot = X("text-align-start", wa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ra = X("trash-2", Aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Sa = X("underline", Ca);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Oa = X("undo", _a);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ka = X("x", Pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Na = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ma = X("zoom-in", Na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const La = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ia = X("zoom-out", La), mn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const s = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(s).map((a, o) => {
    const i = parseInt(a.tagName.charAt(1)), p = a.textContent.trim();
    return p ? {
      id: `${r}heading-${o}`,
      level: i,
      text: p,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Da = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Ha = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const s = Rn(), { pages: a, activePage: o, continuousContent: i } = s, { wordCount: p, outline: l } = be(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: mn(i, 1, "continuous-")
      };
    let c = 0;
    const u = [];
    return a.forEach((E, v) => {
      c += Da(E.content), u.push(...mn(E.content, v + 1, `page-${v}-`));
    }), { wordCount: c, outline: u };
  }, [a, r, n, i]), d = n !== void 0 ? n : a.length;
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
            /* @__PURE__ */ h.jsx(Xe, { size: 18 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ h.jsx(Lo, { size: 16 }) : /* @__PURE__ */ h.jsx(No, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Do, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(jo, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Xe, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsxs("h3", { children: [
              /* @__PURE__ */ h.jsx(Hn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((c) => {
              const u = c.level === 1 ? $o : c.level === 2 ? Fo : Go;
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${c.level}`,
                  style: { marginLeft: `${(c.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ h.jsx(u, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ h.jsx("span", { className: "outline-text", children: c.text }),
                    /* @__PURE__ */ h.jsxs("span", { className: "outline-page", children: [
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
class Ba {
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
const yn = new Ba("Editor"), Bn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), jn = 32;
function zn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * jn}px`, e.dataset.indentLevel = String(n));
}
function ja(e, t) {
  zn(e, t);
}
function za(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Bn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function $a() {
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
        if (l.tagName && Bn.has(l.tagName.toUpperCase())) {
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
function Ua(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * jn}px`, e.dataset.indentLevel = String(r));
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
function Et(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = $a();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const o = za(n.startContainer);
    if (!o) return !1;
    r = [o];
  }
  const s = r[0], a = r[r.length - 1];
  r.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      ja(o, e);
      return;
    }
    e ? Ua(o) : zn(o, !1);
  });
  try {
    const o = document.createRange(), i = (c) => c.nodeType === Node.TEXT_NODE ? c : document.createTreeWalker(
      c,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), p = (c) => {
      if (c.nodeType === Node.TEXT_NODE)
        return c;
      const u = document.createTreeWalker(
        c,
        NodeFilter.SHOW_TEXT,
        null
      );
      let E = null, v = u.nextNode();
      for (; v; )
        E = v, v = u.nextNode();
      return E;
    }, l = i(s);
    l ? o.setStart(l, 0) : o.setStart(s, 0);
    const d = p(a);
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
function Fa(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Et(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Wa = [
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
], Ga = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], qa = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Pt = ({
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
      const c = await co(l), u = await lo(c);
      if (u) {
        const v = `<img src="${u}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, v), yn.info("Image inserted", { key: c });
      }
      const E = document.getElementById("image-upload");
      E && (E.value = "");
    } catch (d) {
      yn.error("Error uploading image", d);
    }
  }, o = (l, d, c, u) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[d] ? "active" : "",
      title: u,
      children: /* @__PURE__ */ h.jsx(c, { size: 16 })
    },
    l
  ), i = (l, d, c, u = !1) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: l,
      disabled: u,
      title: c,
      style: { opacity: u ? 0.5 : 1 },
      children: /* @__PURE__ */ h.jsx(d, { size: 16 })
    },
    c
  ), p = () => /* @__PURE__ */ h.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ h.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), Oa, "Undo", !n),
    i(() => t("redo"), ua, "Redo", !s),
    p(),
    o("bold", "bold", Po, "Bold"),
    o("italic", "italic", Xo, "Italic"),
    o("underline", "underline", Sa, "Underline"),
    o("strikethrough", "strikethrough", ma, "Strikethrough"),
    p(),
    o("justifyLeft", "alignLeft", Ot, "Align Left"),
    o("justifyCenter", "alignCenter", St, "Align Center"),
    o("justifyRight", "alignRight", _t, "Align Right"),
    o("justifyFull", "alignJustify", xa, "Justify"),
    p(),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Wa.map(({ value: l, label: d }) => /* @__PURE__ */ h.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Qe,
        title: "Font Size",
        children: Pr.map(({ value: l, label: d }) => /* @__PURE__ */ h.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Ga.map(({ value: l, label: d }) => /* @__PURE__ */ h.jsx("option", { value: l, children: d }, l))
      }
    ),
    p(),
    i(() => t("insertUnorderedList"), Hn, "Bullet List"),
    i(() => t("insertOrderedList"), aa, "Numbered List"),
    p(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          Et(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ h.jsx(ra, { size: 16 })
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          Et(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ h.jsx(ta, { size: 16 })
      }
    ),
    p(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ h.jsx(Qo, { size: 16 })
      }
    ),
    i(() => t("insertHTML", qa), ba, "Insert Table"),
    r && i(r, Xe, "Insert Page Break"),
    p(),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && a(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ h.jsx(Vo, { size: 16 })
      }
    )
  ] });
};
Pt.propTypes = {
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
Pt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Za(e) {
  return !e || typeof e != "string" ? e : Ye(e);
}
function Ya(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = Za(r) : r = Va(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function Va(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => Ka(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function Ka(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const xe = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && xe(e.parentElement) : !1, kt = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: s,
  onClick: a,
  onScroll: o,
  onPaste: i,
  onRemovePageBreak: p,
  zoomLevel: l = 100,
  pageMargins: d = he
}) => {
  const c = be(() => vn(d), [d]), u = l / 100, E = O((y, g) => {
    if (!y) return !1;
    const m = y.getBoundingClientRect(), M = g - m.top;
    return M < c.top || M > m.height - c.bottom;
  }, [c.top, c.bottom]), v = O((y, g) => {
    g.preventDefault();
    const m = y.getBoundingClientRect(), M = g.clientX - m.left, _ = g.clientY - m.top, B = m.width - 40, R = -12, w = m.width - 20;
    M >= B && M <= w && _ >= R && _ <= 8 && p && p(y);
  }, [p]), x = O((y) => {
    y.preventDefault();
    const g = t.current.getBoundingClientRect();
    if (y.clientY - g.top < c.top) {
      const M = t.current.firstElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const _ = document.createRange(), B = window.getSelection();
        _.setStart(M, 0), _.collapse(!0), B.removeAllRanges(), B.addRange(_);
      }
    } else {
      const M = t.current.lastElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const _ = document.createRange(), B = window.getSelection();
        _.selectNodeContents(M), _.collapse(!1), B.removeAllRanges(), B.addRange(_);
      }
    }
  }, [t, c.top]), S = O((y) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const m = g.getRangeAt(0), { startContainer: M, endContainer: _ } = m;
    if ((xe(M) || xe(_)) && (y.key.length === 1 || y.key === "Enter" || y.key === " "))
      return y.preventDefault(), !1;
    if (Fa(y))
      return n && n(), !1;
    if ((y.key === "Backspace" || y.key === "Delete") && (xe(M) || xe(_)))
      return y.preventDefault(), !1;
    s && s(y);
  }, [s, n]), N = O((y) => {
    if (!t.current) return;
    const g = y.target;
    if (xe(g)) {
      v(g, y);
      return;
    }
    if (E(t.current, y.clientY)) {
      x(y);
      return;
    }
    a && a(y);
  }, [t, a, v, x, E]), z = O((y) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const m = g.getRangeAt(0), { startContainer: M } = m;
    if (xe(M))
      return y.preventDefault(), !1;
  }, []), k = O((y) => {
    const g = Ya(y);
    i && i(y, g);
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
        transform: `scale(${u})`,
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
            fontSize: Qe,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: S,
          onBeforeInput: z,
          onClick: N,
          onScroll: o,
          onPaste: k,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
kt.propTypes = {
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
kt.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: he
};
const Xa = ur(kt), Nt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = he,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: i,
  onAddPage: p,
  onDeletePage: l,
  onPageSizeChange: d,
  onPageMarginsChange: c,
  onZoomIn: u,
  onZoomOut: E,
  onZoomReset: v
} = {}) => {
  const x = Math.max(e?.length || 0, 1), S = (g) => {
    i && i(g);
  }, N = () => {
    p && p();
  }, z = (g) => {
    if (x <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(g);
  }, k = (g) => {
    d && d(g);
  }, y = (g) => {
    c && c(g);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ h.jsx(ga, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (g) => k(g.target.value),
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
              onChange: (g) => y(g.target.value),
              children: br().map((g) => /* @__PURE__ */ h.jsx("option", { value: g, children: Tr(g) }, g))
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
          onClick: E,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ h.jsx(Ia, { size: 12 })
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
          onClick: u,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ h.jsx(Ma, { size: 12 })
        }
      ),
      /* @__PURE__ */ h.jsx(
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
    /* @__PURE__ */ h.jsx("div", { className: "page-list", children: e.map((g, m) => /* @__PURE__ */ h.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${m === t ? "active" : ""}`,
          onClick: () => S(m),
          "aria-label": `Go to page ${m + 1}`,
          "aria-current": m === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ h.jsx(Xe, { size: 14 }),
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Page ",
              m + 1
            ] })
          ]
        }
      ),
      x > 1 && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (M) => {
            M.stopPropagation(), z(m);
          },
          "aria-label": `Delete page ${m + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ h.jsx(ka, { size: 14 })
        }
      )
    ] }, g.id || `page-${m}`)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: N,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ h.jsx(ca, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Nt.propTypes = {
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
Nt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: he,
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
const Ja = Je.memo(Nt);
function Qa(e) {
  switch (e) {
    case U.TOP_LEFT:
    case U.BOTTOM_RIGHT:
      return "nwse-resize";
    case U.TOP_RIGHT:
    case U.BOTTOM_LEFT:
      return "nesw-resize";
    case U.TOP:
    case U.BOTTOM:
      return "ns-resize";
    case U.LEFT:
    case U.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function es({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = Se
}) {
  const p = n - t, l = s - r;
  let d = a, c = o;
  switch (e) {
    case U.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case U.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case U.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case U.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case U.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case U.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case U.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case U.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      U.TOP_LEFT,
      U.TOP_RIGHT,
      U.BOTTOM_LEFT,
      U.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [U.TOP, U.BOTTOM].includes(e) ? d = c * u : [U.LEFT, U.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function $n(e, { width: t, height: r }) {
  ye(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ts(e, t, r) {
  $n(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function ns(e, t, r, n) {
  const { ctrlKey: s, metaKey: a, shiftKey: o, key: i } = e, p = s || a, l = r.offsetWidth, d = r.offsetHeight, u = {
    // Increase width
    ">": p && o ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: d
    }) : null,
    // Decrease width
    "<": p && o ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: d
    }) : null,
    // Increase height
    "+": p && o ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": p && o ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: p && !o ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (u) {
    e.preventDefault();
    const E = u();
    return ts(t, r, E), !0;
  }
  return !1;
}
const Mt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: s = Se
}) => {
  const a = ee(null), o = ee(null), i = ee(null), p = ee(null), l = ee(s), d = ee(!1), c = ve();
  ae(() => {
    l.current = s;
  }, [s]);
  const u = O((y) => {
    if (!ye(y)) return;
    a.current && (ut(a.current), a.current = null), y.classList.add("selected");
    const g = ro(y, l.current);
    g && (a.current = g, o.current = y, document.body.appendChild(g), g.querySelectorAll(".resize-handler").forEach((M) => {
      M.addEventListener("mousedown", v);
    }), r && r(y));
  }, [r]), E = O(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (ut(a.current), a.current = null), i.current = null, p.current = null, d.current = !1, n && n();
  }, [n]), v = O((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current) return;
    const g = y.currentTarget.dataset.handler, m = o.current.getBoundingClientRect(), M = window.pageYOffset || document.documentElement.scrollTop, _ = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: y.clientX - m.left - _,
      offsetY: y.clientY - m.top - M
    }, p.current = g, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Qa(g), document.addEventListener("mousemove", x), document.addEventListener("mouseup", S);
  }, []), x = O((y) => {
    if (!d.current || !o.current || !i.current || !p.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: g, y: m, width: M, height: _ } = i.current, B = p.current, R = y.clientX, w = y.clientY, D = es({
      handler: B,
      startX: g,
      startY: m,
      currentX: R,
      currentY: w,
      startWidth: M,
      startHeight: _,
      options: l.current
    });
    $n(o.current, D), a.current && vt(a.current, o.current);
  }, []), S = O((y) => {
    if (d.current) {
      if (y.preventDefault(), y.stopPropagation(), o.current && i.current) {
        const g = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, m = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (g.width !== m.width || g.height !== m.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: m } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: g } }
        );
      }
      if (i.current = null, p.current = null, d.current = !1, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(g), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), N = O((y) => {
    a.current && !a.current.contains(y.target) && E();
    const g = y.target;
    if (ye(g)) {
      if (g === o.current)
        return;
      u(g);
    }
  }, [u, E]), z = O((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current && !d.current) {
      y.preventDefault();
      const g = o.current;
      if (g.parentNode) {
        g.parentNode.removeChild(g), E();
        const m = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(m);
      }
    }
    y.key === "Escape" && o.current && E(), o.current && !d.current && ns(y, e, o.current, l.current);
  }, [e, E]), k = O(() => {
    a.current && o.current && vt(a.current, o.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const g = e.current.closest(".editor-viewport");
    return g && (g.addEventListener("scroll", k), window.addEventListener("scroll", k)), () => {
      g && g.removeEventListener("scroll", k), window.removeEventListener("scroll", k);
    };
  }, [e, k]), ae(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", N), y.addEventListener("keydown", z), window.addEventListener("resize", k), () => {
      y.removeEventListener("click", N), y.removeEventListener("keydown", z), window.removeEventListener("resize", k), d.current && (document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ut(a.current);
    };
  }, [e, N, z, k, x, S]), ae(() => {
    if (!e.current) return;
    const y = new MutationObserver((g) => {
      g.forEach((m) => {
        m.type === "childList" && (m.removedNodes.forEach((M) => {
          M.nodeType === Node.ELEMENT_NODE && ye(M) && M === o.current && E();
        }), m.addedNodes.forEach((M) => {
          if (M.nodeType !== Node.ELEMENT_NODE) return;
          if (ye(M)) {
            setTimeout(() => u(M), 50);
            return;
          }
          const _ = M.querySelectorAll?.("img") || [];
          _.length > 0 && setTimeout(() => u(_[0]), 50);
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, E, u]), null;
};
Mt.propTypes = {
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
Mt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Se
};
const Lt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, i] = re({ top: 0, left: 0 }), [p, l] = re(!1), [d, c] = re("top"), [u, E] = re(a), v = ee(null), x = ee(null), S = ve(), N = (b) => {
    if (!b)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (Y) => setTimeout(Y, 16))(() => {
      const Y = document.querySelector(".image-resize-overlay");
      Y && vt(Y, b);
    });
  }, z = (b) => {
    if (!b) return null;
    const L = window.getComputedStyle(b);
    return {
      float: L.float || "none",
      margin: b.style.margin || "",
      display: L.display || "inline",
      width: b.style.width || b.width || "",
      height: b.style.height || b.height || "",
      aspectRatio: u
    };
  }, k = O(() => {
    if (!e) return "left";
    const b = window.getComputedStyle(e);
    return b.float === "right" ? "right" : b.float === "left" ? "left" : b.display === "block" && b.margin.includes("auto") ? "center" : "left";
  }, [e]), [y, g] = re("left");
  ae(() => {
    e && g(k());
  }, [e, k]);
  const m = O(() => {
    if (!e || !v.current) return;
    const b = e.getBoundingClientRect(), L = v.current.getBoundingClientRect(), Y = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, q = b.bottom >= 0 && b.top <= Y.height && b.right >= 0 && b.left <= Y.width;
    let Q = "top", se = 0, oe = 0;
    if (q) {
      const I = b.top - L.height - 10, W = Y.height - b.bottom - L.height - 10;
      W > I && W > 0 ? (Q = "bottom", se = b.bottom + 10) : (Q = "top", se = b.top - L.height - 10);
    } else
      Q = "top", se = 10;
    oe = b.left + b.width / 2 - L.width / 2;
    const A = window.innerWidth, f = window.innerHeight;
    let C = Math.max(10, Math.min(oe, A - L.width - 10)), j = Math.max(10, Math.min(se, f - L.height - 10));
    i({ top: j, left: C }), c(Q), l(!0);
  }, [e]);
  bn(() => {
    m();
    const b = () => {
      m();
    }, L = x.current;
    return L && L.addEventListener("scroll", b), window.addEventListener("scroll", b), window.addEventListener("resize", b), () => {
      L && L.removeEventListener("scroll", b), window.removeEventListener("scroll", b), window.removeEventListener("resize", b), l(!1);
    };
  }, [e, m]), ae(() => {
    const b = (L) => {
      v.current && !v.current.contains(L.target) && L.target !== e && s();
    };
    return document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [e, s]);
  const M = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, _ = (b) => {
    if (e && M[b]) {
      const L = z(e), Y = y, q = M[b];
      e.style.float = q.float, e.style.margin = q.margin, e.style.display = q.display, g(b), N(e);
      const Q = z(e);
      S.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: b, state: Q } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: Y, state: L } }
      ), t && t(b);
    }
  }, B = () => {
    if (e && e.parentNode) {
      const b = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      S.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: b } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, R = () => {
    const b = u, L = !u;
    E(L), S.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: L } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: b } }
    ), r && r(L);
  }, w = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, D = (b) => ({
    ...w,
    background: b ? "#007bff" : "transparent",
    color: b ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : Tn(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: v,
        className: "image-tooltip-menu",
        "data-menu-position": d,
        "aria-hidden": !p,
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
          pointerEvents: p ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: p ? 1 : 0,
          visibility: p ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${u ? "" : "active"}`,
              onClick: R,
              title: `Toggle aspect ratio preservation (currently ${u ? "ON" : "OFF"})`,
              children: u ? /* @__PURE__ */ h.jsx(fa, { size: 14 }) : /* @__PURE__ */ h.jsx(Zo, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => _("left"),
              title: "Align Left",
              style: D(y === "left"),
              children: /* @__PURE__ */ h.jsx(Ot, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => _("center"),
              title: "Align Center",
              style: D(y === "center"),
              children: /* @__PURE__ */ h.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => _("right"),
              title: "Align Right",
              style: D(y === "right"),
              children: /* @__PURE__ */ h.jsx(_t, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: B,
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
              children: /* @__PURE__ */ h.jsx(Ra, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Lt.propTypes = {
  imageElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onAspectRatioToggle: T.func,
  onDelete: T.func,
  onClose: T.func.isRequired,
  initialPreserveAspectRatio: T.bool
};
Lt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const et = {
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
function ge(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function Ae(e) {
  if (!ge(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, s = [], a = e.querySelector("colgroup"), o = a ? a.querySelectorAll("col") : [];
  if (o.length >= n)
    for (let p = 0; p < n; p++) {
      const l = o[p], d = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      s.push(d || 100);
    }
  else if (r.length > 0) {
    const p = r[0];
    for (let l = 0; l < p.cells.length; l++) {
      const d = p.cells[l];
      s.push(d.offsetWidth);
    }
  }
  const i = r.map((p) => (p.style.height ? parseInt(p.style.height, 10) : null) || p.offsetHeight);
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
function rs({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: s = et
}) {
  const a = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, o = (i, p, l, d, c) => {
    p >= 0 && p < i.length && (i[p] = Math.max(d, Math.min(c, i[p] + l)));
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
function Ie(e) {
  if (!ge(e)) return;
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
function It(e, t, r) {
  if (!ge(e)) return;
  Ie(e);
  const { columnWidths: n, rowHeights: s, tableWidth: a, tableHeight: o } = t, i = n ? n.reduce((l, d) => l + d, 0) : 0, p = s ? s.reduce((l, d) => l + d, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : i > 0 && (e.style.width = `${i}px`), o !== void 0 ? e.style.height = `${o}px` : p > 0 && (e.style.height = `${p}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((c, u) => {
      u < n.length && (c.style.width = `${n[u]}px`);
    }), e.style.width = `${i}px`;
  }
  s && s.length > 0 && (Array.from(e.rows).forEach((d, c) => {
    c < s.length && (d.style.height = `${s[c]}px`);
  }), e.style.height = `${p}px`), e.offsetHeight;
}
function os(e, t = et) {
  if (!ge(e)) return null;
  Ie(e);
  const r = Ae(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const s = e.getBoundingClientRect();
  n.style.top = `${s.top}px`, n.style.left = `${s.left}px`, n.style.width = `${s.width}px`, n.style.height = `${s.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const p = Un(i, r, s, e);
    n.appendChild(p);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const p = Fn(i, r, s, e);
    n.appendChild(p);
  }
  const a = Wn(r, s);
  n.appendChild(a);
  const o = Gn(r, s);
  return n.appendChild(o), n;
}
function Un(e, t, r, n) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-column-resize-handler", s.dataset.type = le.COLUMN, s.dataset.index = e, s.style.position = "absolute", s.style.width = "4px", s.style.height = `${r.height}px`, s.style.cursor = "col-resize", s.style.pointerEvents = "all", qn(s, e, t, r, n), s;
}
function Fn(e, t, r, n) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-row-resize-handler", s.dataset.type = le.ROW, s.dataset.index = e, s.style.position = "absolute", s.style.width = `${r.width}px`, s.style.height = "4px", s.style.cursor = "row-resize", s.style.pointerEvents = "all", Zn(s, e, t, r, n), s;
}
function Wn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Yn(r, e, t), r;
}
function Gn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Vn(r, e, t), r;
}
function xt(e, t) {
  if (!e || !t) return;
  Ie(t);
  const r = Ae(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const s = e.querySelectorAll(".table-column-resize-handler"), a = e.querySelectorAll(".table-row-resize-handler"), o = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (s.length !== r.columns - 1 || a.length !== r.rows - 1 || !o || !i) {
    e.innerHTML = "";
    for (let c = 0; c < r.columns - 1; c++) {
      const u = Un(c, r, n, t);
      e.appendChild(u);
    }
    for (let c = 0; c < r.rows - 1; c++) {
      const u = Fn(c, r, n, t);
      e.appendChild(u);
    }
    const l = Wn(r, n);
    e.appendChild(l);
    const d = Gn(r, n);
    e.appendChild(d);
  } else
    s.forEach((l, d) => {
      qn(l, d, r, n, t);
    }), a.forEach((l, d) => {
      Zn(l, d, r, n, t);
    }), o && Yn(o, r, n), i && Vn(i, r, n);
}
function qe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function as(e, t) {
  if (!ge(e))
    return console.warn("insertRowAbove: Invalid table element"), null;
  if (t < 0 || t > e.rows.length)
    return console.warn(`insertRowAbove: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowAbove: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), s = r.cells.length;
  for (let o = 0; o < s; o++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", n.appendChild(i);
  }
  try {
    r.parentNode.insertBefore(n, r);
  } catch (o) {
    return console.error("insertRowAbove: Failed to insert row", o), null;
  }
  Ie(e);
  const a = Ae(e);
  return a && It(e, {
    columnWidths: a.columnWidths,
    rowHeights: a.rowHeights
  }), n;
}
function ss(e, t) {
  if (!ge(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), s = r.cells.length;
  for (let i = 0; i < s; i++) {
    const p = document.createElement("td");
    p.innerHTML = "&nbsp;", n.appendChild(p);
  }
  const a = r.nextSibling;
  try {
    a ? r.parentNode.insertBefore(n, a) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  Ie(e);
  const o = Ae(e);
  return o && It(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function qn(e, t, r, n, s) {
  if (s && s.rows.length > 0) {
    const o = s.rows[0];
    if (o.cells.length > t) {
      const p = o.cells[t].getBoundingClientRect(), l = s.getBoundingClientRect(), d = p.right - l.left - 2;
      e.style.left = `${d}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += r.columnWidths[o];
  e.style.left = `${a - 2}px`, e.style.height = `${n.height}px`;
}
function Zn(e, t, r, n, s) {
  if (s && s.rows.length > t) {
    const o = s.rows[t];
    if (o.cells.length > 0) {
      const p = o.cells[0].getBoundingClientRect(), l = s.getBoundingClientRect(), d = p.bottom - l.top - 2;
      e.style.top = `${d}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += r.rowHeights[o];
  e.style.top = `${a - 2}px`, e.style.width = `${n.width}px`;
}
function Yn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Vn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
const Dt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: s = et
}) => {
  const a = ee(null), o = ee(null), i = ee(null), p = ee(null), l = ee(null), d = ee(s), c = ee(!1), [u, E] = re(null), v = ve();
  ae(() => {
    d.current = s;
  }, [s]);
  const x = O(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (qe(a.current), a.current = null), E(null), i.current = null, p.current = null, l.current = null, c.current = !1, n && n();
  }, [n]), S = O((_) => {
    if (_.preventDefault(), _.stopPropagation(), !o.current) return;
    const B = _.currentTarget, R = B.dataset.type, w = parseInt(B.dataset.index, 10);
    o.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const D = Ae(o.current);
    i.current = {
      x: _.clientX,
      y: _.clientY,
      structure: { ...D }
    }, p.current = R, l.current = w, c.current = !0, document.body.classList.add("table-resize-in-progress");
    const b = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = b[R] || "default", document.addEventListener("mousemove", k), document.addEventListener("mouseup", y);
  }, []), N = O((_) => {
    const B = os(_, d.current);
    return B && (a.current = B, o.current = _, document.body.appendChild(B), B.querySelectorAll(".table-resize-handler").forEach((w) => {
      w.addEventListener("mousedown", S);
    })), B;
  }, [S]), z = O((_) => {
    if (!ge(_)) return;
    a.current && (qe(a.current), a.current = null), _.classList.add("selected"), N(_) && (E(_), r && r(_));
  }, [r, N]), k = O((_) => {
    if (!c.current || !o.current || !i.current || !p.current) return;
    _.preventDefault(), _.stopPropagation();
    const { x: B, y: R, structure: w } = i.current, D = p.current, b = l.current, L = _.clientX, Y = _.clientY;
    let q = 0;
    switch (D) {
      case le.COLUMN:
        q = L - B;
        break;
      case le.ROW:
        q = Y - R;
        break;
      case le.TABLE_BOTTOM:
        q = Y - R;
        break;
      case le.TABLE_RIGHT:
        q = L - B;
        break;
    }
    const Q = rs({
      type: D,
      index: b,
      delta: q,
      currentStructure: w,
      options: d.current
    });
    It(o.current, Q), a.current && xt(a.current, o.current);
  }, []), y = O((_) => {
    if (c.current) {
      if (_.preventDefault(), _.stopPropagation(), o.current && i.current) {
        const B = {
          structure: i.current.structure
        }, R = {
          structure: Ae(o.current)
        };
        (B.structure.width !== R.structure.width || B.structure.height !== R.structure.height || JSON.stringify(B.structure.columnWidths) !== JSON.stringify(R.structure.columnWidths) || JSON.stringify(B.structure.rowHeights) !== JSON.stringify(R.structure.rowHeights)) && v.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: o.current, state: R } },
          { type: "TABLE_RESIZE", payload: { element: o.current, state: B } }
        );
      }
      if (i.current = null, p.current = null, l.current = null, c.current = !1, document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", o.current) {
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(B), t && t(o.current, Ae(o.current));
      }
    }
  }, [t, v]), g = O((_) => {
    a.current && !a.current.contains(_.target) && x();
    const R = _.target.closest("table");
    if (R && ge(R)) {
      if (R === o.current)
        return;
      z(R);
    }
  }, [z, x]), m = O((_) => {
    if (_.key === "Delete" && o.current && !c.current) {
      _.preventDefault();
      const B = o.current;
      if (B.parentNode) {
        B.parentNode.removeChild(B), x();
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(R);
      }
    }
    _.key === "Escape" && o.current && x();
  }, [e, x]), M = O(() => {
    a.current && o.current && xt(a.current, o.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const B = e.current.closest(".editor-viewport");
    return B && (B.addEventListener("scroll", M), window.addEventListener("scroll", M)), () => {
      B && B.removeEventListener("scroll", M), window.removeEventListener("scroll", M);
    };
  }, [e, M]), ae(() => {
    if (!e.current) return;
    const _ = e.current;
    return _.addEventListener("click", g), _.addEventListener("keydown", m), window.addEventListener("resize", M), () => {
      _.removeEventListener("click", g), _.removeEventListener("keydown", m), window.removeEventListener("resize", M), c.current && (document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), a.current && qe(a.current);
    };
  }, [e, g, m, M, k, y]), ae(() => {
    if (!e.current) return;
    const _ = new MutationObserver((B) => {
      B.forEach((R) => {
        R.type === "childList" && (R.removedNodes.forEach((w) => {
          w.nodeType === Node.ELEMENT_NODE && ge(w) && w === u && x();
        }), R.addedNodes.forEach((w) => {
          if (w.nodeType !== Node.ELEMENT_NODE) return;
          if (ge(w)) {
            setTimeout(() => z(w), 50);
            return;
          }
          const D = w.querySelectorAll?.("table") || [];
          D.length > 0 && setTimeout(() => z(D[0]), 50);
        }));
      });
    });
    return _.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => _.disconnect();
  }, [e, x, z]), ae(() => {
    if (!u) return;
    const _ = new MutationObserver((B) => {
      B.some((w) => {
        if (w.type === "childList") {
          if ([...w.addedNodes, ...w.removedNodes].some(
            (b) => b.nodeType === Node.ELEMENT_NODE && b.tagName === "TR"
          )) return !0;
        } else if (w.type === "attributes" && ["colspan", "rowspan"].includes(w.attributeName))
          return !0;
        return !1;
      }) && a.current && o.current && (qe(a.current), a.current = null, N(o.current));
    });
    return _.observe(u, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => _.disconnect();
  }, [u, N]), null;
};
Dt.propTypes = {
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
Dt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: et
};
const Ht = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  editorRef: s
}) => {
  const [a, o] = re({ top: 0, left: 0 }), [i, p] = re(!1), [l, d] = re("top"), c = ee(null), u = ee(null), E = ve(), v = (R) => {
    if (!R)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (D) => setTimeout(D, 16))(() => {
      const D = document.querySelector(".table-resize-overlay");
      D && xt(D, R);
    });
  }, x = (R) => {
    if (!R) return null;
    const w = window.getComputedStyle(R);
    return {
      float: w.float || "none",
      margin: R.style.margin || "",
      marginLeft: R.style.marginLeft || "",
      marginRight: R.style.marginRight || "",
      display: w.display || "table"
    };
  }, S = O(() => {
    if (!e) return "left";
    const R = window.getComputedStyle(e);
    return R.marginLeft === "auto" && R.marginRight === "auto" ? "center" : R.float === "right" ? "right" : (R.float === "left", "left");
  }, [e]), [N, z] = re("left");
  ae(() => {
    e && z(S());
  }, [e, S]);
  const k = O(() => {
    if (!e || !c.current) return;
    const R = e.getBoundingClientRect(), w = c.current.getBoundingClientRect(), D = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, b = R.bottom >= 0 && R.top <= D.height && R.right >= 0 && R.left <= D.width;
    let L = "top", Y = 0, q = 0;
    if (b) {
      const f = R.top - w.height - 10, C = D.height - R.bottom - w.height - 10;
      C > f && C > 0 ? (L = "bottom", Y = R.bottom + 10) : (L = "top", Y = R.top - w.height - 10);
    } else
      L = "top", Y = 10;
    q = R.left + R.width / 2 - w.width / 2;
    const Q = window.innerWidth, se = window.innerHeight;
    let oe = Math.max(10, Math.min(q, Q - w.width - 10)), A = Math.max(10, Math.min(Y, se - w.height - 10));
    o({ top: A, left: oe }), d(L), p(!0);
  }, [e]);
  bn(() => {
    k();
    const R = () => {
      k();
    }, w = u.current;
    return w && w.addEventListener("scroll", R), window.addEventListener("scroll", R), window.addEventListener("resize", R), () => {
      w && w.removeEventListener("scroll", R), window.removeEventListener("scroll", R), window.removeEventListener("resize", R), p(!1);
    };
  }, [e, k]), ae(() => {
    const R = (w) => {
      c.current && !c.current.contains(w.target) && w.target !== e && !e.contains(w.target) && r();
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [e, r]);
  const y = {
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
  }, g = (R) => {
    if (e && y[R]) {
      const w = x(e), D = N, b = y[R];
      e.style.float = b.float, e.style.margin = b.margin, e.style.marginLeft = b.marginLeft, e.style.marginRight = b.marginRight, z(R), v(e);
      const L = x(e);
      E.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: R, state: L } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: D, state: w } }
      ), t && t(R);
    }
  }, m = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!s }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const R = as(e, n);
    if (R) {
      if (console.log("Row inserted successfully, updating content"), s && s.current) {
        const w = s.current.innerHTML;
        console.log("Updated content length:", w.length), E.updateContinuousContent(w);
      } else
        console.warn("No editor ref available to update content");
      E.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: R, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), v(e);
    } else
      console.error("Failed to insert row above");
  }, M = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!s }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const R = ss(e, n);
    if (R) {
      if (console.log("Row inserted successfully, updating content"), s && s.current) {
        const w = s.current.innerHTML;
        console.log("Updated content length:", w.length), E.updateContinuousContent(w);
      } else
        console.warn("No editor ref available to update content");
      E.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: R, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), v(e);
    } else
      console.error("Failed to insert row below");
  }, _ = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (R) => ({
    ..._,
    background: R ? "#007bff" : "transparent",
    color: R ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : Tn(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: c,
        className: "table-tooltip-menu",
        "data-menu-position": l,
        "aria-hidden": !i,
        style: {
          position: "fixed",
          top: `${a.top}px`,
          left: `${a.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: i ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: i ? 1 : 0,
          visibility: i ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${N === "left" ? "active" : ""}`,
              onClick: () => g("left"),
              title: "Align Left",
              style: B(N === "left"),
              children: /* @__PURE__ */ h.jsx(Ot, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${N === "center" ? "active" : ""}`,
              onClick: () => g("center"),
              title: "Align Center",
              style: B(N === "center"),
              children: /* @__PURE__ */ h.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${N === "right" ? "active" : ""}`,
              onClick: () => g("right"),
              title: "Align Right",
              style: B(N === "right"),
              children: /* @__PURE__ */ h.jsx(_t, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: m,
                title: "Insert Row Above",
                style: {
                  ..._,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ h.jsx(_o, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: M,
                title: "Insert Row Below",
                style: {
                  ..._,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ h.jsx(Co, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Ht.propTypes = {
  tableElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onClose: T.func.isRequired,
  selectedRowIndex: T.number,
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Ht.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  editorRef: null
};
const Bt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = re(/* @__PURE__ */ new Set()), [s, a] = re(null), [o, i] = re(null), [p, l] = re(null), [d, c] = re(!1), [u, E] = re(!1), [v, x] = re(null), [S, N] = re(null);
  ve(), ee(null);
  const z = O(() => {
    n(/* @__PURE__ */ new Set()), a(null), i(null), l(null), x(null), N(null), c(!1), E(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((w) => {
      w.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), t && t(null);
  }, [t]), k = O((w) => {
    const D = w.closest("tr"), b = w.closest("table");
    if (!D || !b) return null;
    const L = Array.from(b.rows).indexOf(D), Y = Array.from(D.cells).indexOf(w);
    return { rowIndex: L, cellIndex: Y, table: b };
  }, []), y = O((w) => {
    if (w.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const D = Array.from(w), b = D[0], L = k(b);
    if (!L) return { mode: null, rowIndex: null, colIndex: null };
    const { table: Y } = L;
    return D.filter((se) => {
      const oe = k(se);
      return oe && oe.table === Y && oe.rowIndex === L.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: L.rowIndex, colIndex: null } : D.filter((se) => {
      const oe = k(se);
      return oe && oe.table === Y && oe.cellIndex === L.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: L.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [k]), g = O((w, D, b, L, Y) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((q) => {
      q.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!Y || !w)) {
      if (w === "row" && D !== null) {
        const q = Y.rows[D];
        q && Array.from(q.cells).forEach((Q) => {
          Q.classList.add("table-row-selected");
        });
      } else w === "column" && b !== null ? Array.from(Y.rows).forEach((q) => {
        const Q = q.cells[b];
        Q && Q.classList.add("table-col-selected");
      }) : w === "cells" && L.forEach((q) => {
        q.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), m = O((w, D) => {
    const b = y(w);
    n(w), a(b.mode), i(b.rowIndex), l(b.colIndex), N(D), g(b.mode, b.rowIndex, b.colIndex, w, D), t && b.mode && t({
      mode: b.mode,
      cells: w,
      rowIndex: b.rowIndex,
      colIndex: b.colIndex,
      table: D
    });
  }, [y, g, t]), M = O((w) => {
    const D = w.target.closest("td, th");
    if (!D) return;
    const b = k(D);
    b && (c(!0), x(D), N(b.table), E(!1));
  }, [k]), _ = O((w) => {
    if (!d || !v) return;
    const D = w.target.closest("td, th");
    if (!D || !S || !S.contains(D)) return;
    E(!0), w.preventDefault();
    const b = k(v), L = k(D);
    if (!b || !L || b.table !== L.table) return;
    const Y = Math.min(b.rowIndex, L.rowIndex), q = Math.max(b.rowIndex, L.rowIndex), Q = Math.min(b.cellIndex, L.cellIndex), se = Math.max(b.cellIndex, L.cellIndex), oe = /* @__PURE__ */ new Set();
    for (let A = Y; A <= q; A++) {
      const f = S.rows[A];
      if (f)
        for (let C = Q; C <= se; C++) {
          const j = f.cells[C];
          j && oe.add(j);
        }
    }
    m(oe, S);
  }, [d, k]), B = O(() => {
    u || z(), c(!1), x(null);
  }, [u, z]), R = O((w) => {
    const D = w.target.closest("td, th"), b = w.target.closest("table");
    if (!(D && S && S.contains(D))) {
      if (b && b !== S) {
        z();
        return;
      }
      b || z();
    }
  }, [z, S]);
  return ae(() => {
    if (!e.current) return;
    const w = e.current, D = (L) => {
      L.target.closest("td, th") && M(L);
    }, b = (L) => {
      L.target.closest("td, th") && _(L);
    };
    return w.addEventListener("mousedown", D, !0), w.addEventListener("mouseenter", b, !0), document.addEventListener("mouseup", B), document.addEventListener("click", R), () => {
      w.removeEventListener("mousedown", D, !0), w.removeEventListener("mouseenter", b, !0), document.removeEventListener("mouseup", B), document.removeEventListener("click", R);
    };
  }, [e, M, _, B, R]), ae(() => {
    if (!e.current) return;
    const w = new MutationObserver((D) => {
      D.forEach((b) => {
        b.type === "childList" && S && !e.current.contains(S) && z();
      });
    });
    return w.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => w.disconnect();
  }, [e, z]), null;
};
Bt.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: T.func
};
Bt.defaultProps = {
  onCellSelectionChange: void 0
};
const is = 50, dt = 50, cs = 50, ls = 100, us = 300, jt = wt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: i = !0,
  showToolbar: p = !0,
  showPageManager: l = !0
}, d) => {
  const c = Rn(), u = ve(), { pageSize: E, pageMargins: v, continuousContent: x, pageBoundaries: S, activePage: N, zoomLevel: z, canUndo: k, canRedo: y } = c, g = ee(null), m = ee(null), { currentFormat: M, formatText: _, updateCurrentFormatFromSelection: B } = Lr(), [R, w] = re(!1), [D, b] = re(null), [L, Y] = re(!0), [q, Q] = re(!1), [se, oe] = re(null), [A, f] = re(null), C = ee(null), {
    checkAndUpdateBoundaries: j,
    getCurrentPage: I,
    scrollToPage: W,
    updateBoundaries: F,
    triggerAutoReflow: $,
    removePageAndContent: Z,
    removePageBreak: K,
    insertPageBreakAtBoundary: V
  } = no(E, m, z, v), ce = be(() => Rt(E), [E]), [H, ue] = re(!1), de = ee(null), Ee = ee(!1), De = ee(!1), tt = ee(!1), Re = ee(x);
  ae(() => {
    if (m.current) {
      if (!tt.current) {
        m.current.innerHTML = x, tt.current = !0, Re.current = x;
        const P = setTimeout(() => {
          F();
        }, is);
        return () => clearTimeout(P);
      }
      if (Re.current !== x) {
        if (m.current.innerHTML !== x) {
          m.current.innerHTML = x;
          const J = setTimeout(() => {
            F(), Ee.current && $t();
          }, dt);
          return Re.current = x, () => clearTimeout(J);
        }
        Re.current = x;
      }
    }
  }, [x, F, S.length, u, W]), ae(() => {
    o && tt.current && o(x);
  }, [x, o]);
  const zt = be(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m.current ? m.current.innerHTML : x,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : x).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? eo(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (P) => {
      const J = Ye(P);
      J !== x && u.updateContinuousContent(J), m.current && m.current.innerHTML !== J && (m.current.innerHTML = J), Re.current = J, m.current && setTimeout(() => {
        F();
      }, dt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (P) => {
      if (!m.current || !P) return;
      const J = Ye(P), ie = window.getSelection();
      let fe = !1;
      if (ie && ie.rangeCount > 0) {
        const rt = ie.getRangeAt(0);
        m.current.contains(rt.commonAncestorContainer) && (fe = !0);
      }
      if (!fe && C.current)
        try {
          ie.removeAllRanges(), ie.addRange(C.current);
        } catch (rt) {
          console.warn("[insertContent] Failed to restore last cursor position:", rt);
          const _e = m.current.lastChild;
          if (_e) {
            const ze = document.createRange();
            _e.nodeType === Node.TEXT_NODE ? ze.setStart(_e, _e.textContent.length) : ze.setStartAfter(_e), ze.collapse(!0), ie.removeAllRanges(), ie.addRange(ze);
          }
        }
      document.execCommand("insertHTML", !1, J);
      const me = m.current.innerHTML;
      u.updateContinuousContent(me), Re.current = me, setTimeout(() => {
        F(), $(200);
      }, dt);
    }
  }), [x, u, F, m, C, j]);
  dr(d, () => zt, [zt]), ae(() => {
    const P = () => {
      if (B(), m.current) {
        const ie = window.getSelection();
        if (ie.rangeCount > 0) {
          const fe = ie.getRangeAt(0);
          fe.collapsed && m.current.contains(fe.commonAncestorContainer) && (C.current = fe.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", P);
    const J = () => {
      if (setTimeout(B, 10), C.current && m.current)
        try {
          const ie = window.getSelection();
          ie.removeAllRanges(), ie.addRange(C.current);
        } catch (ie) {
          console.warn("[handleFocus] Failed to restore cursor:", ie);
        }
    };
    return m.current && m.current.addEventListener("focus", J), () => {
      document.removeEventListener("selectionchange", P), m.current && m.current.removeEventListener("focus", J);
    };
  }, [B]);
  const $t = O(() => {
    Ee.current = !1;
    const P = Math.max(0, S.length - 1);
    u.setActivePage(P), setTimeout(() => {
      W(P, g);
    }, cs);
  }, [S.length, u, W]), nt = O(() => {
    if (!m.current) return;
    let P = m.current.innerHTML;
    P = Ye(P), P !== m.current.innerHTML && (m.current.innerHTML = P);
    const J = x;
    if (J !== P) {
      const fe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: P
      }, me = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: J
      };
      u.recordOperation(fe, me);
    }
    u.updateContinuousContent(P), j(), $(200);
    const ie = I(g);
    ie !== N && u.setActivePage(ie);
  }, [u, j, I, N, $, g, m, x]), Xn = O((P) => {
    nt();
  }, [nt]), Ut = O((P) => {
    u.updatePageSize(P), F({ pageSize: P }), s && s(P);
  }, [u, F, s]), Ft = O((P) => {
    u.updatePageMargins(P), F({ pageMargins: P }), a && a(P);
  }, [u, F, a]), Wt = O((P) => {
    P < 0 || P >= S.length || (De.current = !0, u.setActivePage(P), W(P, g), setTimeout(() => {
      De.current = !1;
    }, us), t && t(P));
  }, [u, W, t, S.length]), Gt = O(() => {
    const P = S.length + 1;
    V(P) && (Ee.current = !0, setTimeout(() => {
      Ee.current && $t();
    }, 100)), r && r();
  }, [S.length, V, u, W, r]), Jn = O(() => {
    const P = window.getSelection();
    if (P && P.rangeCount > 0) {
      if (!m?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        F();
        const me = I(g);
        u.setActivePage(me);
      }, 150);
    }
  }, [F, I, u, g]), Qn = O((P) => {
    if (!P) return;
    K(P) && setTimeout(() => {
      const ie = I(g);
      u.setActivePage(ie);
    }, 200);
  }, [K, I, u, g]), qt = O((P) => {
    if (S.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Z(P) && (u.setActivePage(0), n && n(P));
  }, [S.length, Z, u, n]), He = O(() => {
    u.zoomIn();
  }, [u]), Be = O(() => {
    u.zoomOut();
  }, [u]), je = O(() => {
    u.resetZoom();
  }, [u]), Zt = O(() => {
    u.undo();
  }, [u]), Yt = O(() => {
    u.redo();
  }, [u]);
  ae(() => {
    const P = (J) => {
      if (J.ctrlKey || J.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(J.key) && J.preventDefault();
        const ie = document.activeElement === m.current, fe = document.activeElement === g.current, me = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ie || fe || !me)
          switch (J.key) {
            case "+":
            case "=":
              He();
              break;
            case "-":
            case "_":
              Be();
              break;
            case "0":
              je();
              break;
            case "z":
              J.shiftKey || Zt();
              break;
            case "y":
              Yt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", P), () => {
      window.removeEventListener("keydown", P);
    };
  }, [He, Be, je, Zt, Yt]);
  const er = O(() => {
    !g.current || !m.current || De.current || (de.current && clearTimeout(de.current), de.current = setTimeout(() => {
      if (De.current) {
        de.current = null;
        return;
      }
      const P = I(g);
      P !== N && P >= 0 && u.setActivePage(P), de.current = null;
    }, ls));
  }, [I, N, u]), tr = be(() => {
    if (!x) return 0;
    const J = x.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return J ? J.length : 0;
  }, [x]), nr = S.length || 1, rr = O((P) => {
    w(!0), b(P);
  }, []), Vt = O(() => {
    w(!1), b(null);
  }, []), or = O((P, J) => {
  }, []), ar = O((P) => {
    Q(!0), oe(P);
  }, []), Kt = O(() => {
    Q(!1), oe(null);
  }, []), sr = O((P, J) => {
  }, []);
  return ae(() => () => {
    de.current && clearTimeout(de.current);
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "multi-page-editor", children: [
    p && /* @__PURE__ */ h.jsx(
      Pt,
      {
        currentFormat: {
          ...M,
          imageSelected: R
        },
        onFormatText: _,
        onAddPageBreak: Jn,
        canUndo: k,
        canRedo: y
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ h.jsx(
        Ha,
        {
          editorView: null,
          isCollapsed: H,
          onToggle: () => ue((P) => !P),
          wordCount: tr,
          pageCount: nr
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: g,
          onScroll: er,
          children: /* @__PURE__ */ h.jsx(
            Xa,
            {
              content: x,
              dimensions: ce,
              pageSize: E,
              pageMargins: v,
              pageBoundaries: S,
              editorRef: m,
              onInput: Xn,
              onContentChange: nt,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: Qn,
              zoomLevel: z
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsx(
        Mt,
        {
          editorRef: m,
          onImageSelect: rr,
          onImageDeselect: Vt,
          onImageResize: or,
          resizeOptions: {
            ...Se,
            preserveAspectRatio: L,
            aspectRatio: L
          }
        }
      ),
      /* @__PURE__ */ h.jsx(
        Dt,
        {
          editorRef: m,
          onTableSelect: ar,
          onTableDeselect: Kt,
          onTableResize: sr
        }
      ),
      /* @__PURE__ */ h.jsx(
        Bt,
        {
          editorRef: m,
          onCellSelectionChange: (P) => {
            console.log("onCellSelectionChange:", P), P && P.mode === "row" ? (console.log("Row selected with index:", P.rowIndex), f(P.rowIndex)) : (console.log("No row selected, clearing selection"), f(null));
          }
        }
      ),
      R && D && /* @__PURE__ */ h.jsx(
        Lt,
        {
          imageElement: D,
          initialPreserveAspectRatio: L,
          onAlignChange: (P) => {
          },
          onAspectRatioToggle: (P) => {
            Y(P);
          },
          onDelete: () => {
            if (D) {
              const P = D.getAttribute("data-key");
              P && uo(P).catch((J) => {
                console.error("Failed to delete image from IndexedDB:", J);
              });
            }
          },
          onClose: Vt
        }
      ),
      q && se && /* @__PURE__ */ h.jsx(
        Ht,
        {
          tableElement: se,
          onAlignChange: (P) => {
          },
          onClose: Kt,
          selectedRowIndex: A,
          editorRef: m
        }
      ),
      l && /* @__PURE__ */ h.jsx("div", { className: "page-manager-sidebar", children: e ? Je.cloneElement(e, {
        onNavigate: Wt,
        onAddPage: Gt,
        onDeletePage: qt,
        onPageSizeChange: Ut,
        onPageMarginsChange: Ft,
        zoomLevel: z,
        canZoomIn: mt(z),
        canZoomOut: yt(z),
        onZoomIn: He,
        onZoomOut: Be,
        onZoomReset: je
      }) : /* @__PURE__ */ h.jsx(
        Ja,
        {
          pageBoundaries: S,
          activePage: N,
          pageSize: E,
          pageMargins: v,
          zoomLevel: z,
          canZoomIn: mt(z),
          canZoomOut: yt(z),
          onNavigate: Wt,
          onAddPage: Gt,
          onDeletePage: qt,
          onPageSizeChange: Ut,
          onPageMarginsChange: Ft,
          onZoomIn: He,
          onZoomOut: Be,
          onZoomReset: je
        }
      ) })
    ] })
  ] });
});
jt.displayName = "HtmlEditor";
jt.propTypes = {
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
jt.defaultProps = {
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
class Kn extends Je.Component {
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
Kn.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
Kn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Pr as COMMON_FONT_SIZES,
  Qe as DEFAULT_FONT_SIZE,
  Se as DEFAULT_IMAGE_RESIZE_OPTIONS,
  En as DEFAULT_PAGE_SIZE,
  et as DEFAULT_TABLE_RESIZE_OPTIONS,
  ms as DocumentProvider,
  Pt as EditorToolbar,
  Kn as ErrorBoundary,
  _n as FONT_SIZE_MAP,
  jt as HtmlEditor,
  Mt as ImageResizeHandlers,
  Ce as PAGE_SIZES,
  Ja as PageManager,
  Xa as PageView,
  U as RESIZE_HANDLERS,
  Ha as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  Dt as TableResizeHandlers,
  xs as applyImageDimensions,
  It as applyTableDimensions,
  vs as calculateResizeDimensions,
  rs as calculateTableResizeDimensions,
  ws as clearImages,
  ro as createResizeOverlay,
  os as createTableResizeOverlay,
  uo as deleteImage,
  As as getAllImageKeys,
  hs as getAvailablePageSizes,
  lo as getImage,
  Es as getImageDimensions,
  Rt as getPageDimensions,
  ys as getPixelValue,
  bs as getPointValue,
  Ae as getTableStructure,
  ye as isResizableImage,
  ge as isResizableTable,
  Ts as isValidFontSize,
  gs as isValidPageSize,
  Ba as logger,
  Nr as pixelsToPoints,
  kr as pointsToPixels,
  ut as removeResizeOverlay,
  qe as removeTableResizeOverlay,
  co as saveImage,
  vt as updateResizeOverlay,
  xt as updateTableResizeOverlay,
  no as useContinuousReflow,
  An as useDocument,
  ve as useDocumentActions,
  Rn as useDocumentState,
  Lr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
