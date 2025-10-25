import ot, { createContext as pr, useContext as gr, useReducer as hr, useMemo as we, useState as oe, useCallback as k, useRef as ee, useEffect as ae, forwardRef as Ot, createElement as mt, memo as mr, useLayoutEffect as wn, useImperativeHandle as yr } from "react";
import { v4 as kt } from "uuid";
import { createPortal as En } from "react-dom";
function br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ze = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Tr() {
  if (tn) return Me;
  tn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var i in a)
        i !== "key" && (o[i] = a[i]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Me.Fragment = t, Me.jsx = r, Me.jsxs = r, Me;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function vr() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === U ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case A:
          return "Fragment";
        case L:
          return "Profiler";
        case $:
          return "StrictMode";
        case y:
          return "Suspense";
        case I:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case v:
            return "Portal";
          case h:
            return f.displayName || "Context";
          case P:
            return (f._context.displayName || "Context") + ".Consumer";
          case p:
            var O = f.render;
            return f = f.displayName, f || (f = O.displayName || O.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case R:
            return O = f.displayName || null, O !== null ? O : e(f.type) || "Memo";
          case j:
            O = f._payload, f = f._init;
            try {
              return e(f(O));
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
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var H = O.error, M = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return H.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(f);
      }
    }
    function n(f) {
      if (f === A) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === j)
        return "<...>";
      try {
        var O = e(f);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var f = B.A;
      return f === null ? null : f.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(f) {
      if (x.call(f, "key")) {
        var O = Object.getOwnPropertyDescriptor(f, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, O) {
      function H() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: H,
        configurable: !0
      });
    }
    function g() {
      var f = e(this.type);
      return V[f] || (V[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, O, H, M, Z, G) {
      var z = H.ref;
      return f = {
        $$typeof: b,
        type: f,
        key: O,
        props: H,
        _owner: M
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: g
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
        value: Z
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function c(f, O, H, M, Z, G) {
      var z = O.children;
      if (z !== void 0)
        if (M)
          if (S(z)) {
            for (M = 0; M < z.length; M++)
              u(z[M]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(z);
      if (x.call(O, "key")) {
        z = e(f);
        var W = Object.keys(O).filter(function(Q) {
          return Q !== "key";
        });
        M = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", E[z + M] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          z,
          W,
          z
        ), E[z + M] = !0);
      }
      if (z = null, H !== void 0 && (r(H), z = "" + H), s(O) && (r(O.key), z = "" + O.key), "key" in O) {
        H = {};
        for (var X in O)
          X !== "key" && (H[X] = O[X]);
      } else H = O;
      return z && i(
        H,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        z,
        H,
        a(),
        Z,
        G
      );
    }
    function u(f) {
      d(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === j && (f._payload.status === "fulfilled" ? d(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function d(f) {
      return typeof f == "object" && f !== null && f.$$typeof === b;
    }
    var T = ot, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), B = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, S = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var _, V = {}, te = T.react_stack_bottom_frame.bind(
      T,
      o
    )(), ie = C(n(o)), E = {};
    Le.Fragment = A, Le.jsx = function(f, O, H) {
      var M = 1e4 > B.recentlyCreatedOwnerStacks++;
      return c(
        f,
        O,
        H,
        !1,
        M ? Error("react-stack-top-frame") : te,
        M ? C(n(f)) : ie
      );
    }, Le.jsxs = function(f, O, H) {
      var M = 1e4 > B.recentlyCreatedOwnerStacks++;
      return c(
        f,
        O,
        H,
        !0,
        M ? Error("react-stack-top-frame") : te,
        M ? C(n(f)) : ie
      );
    };
  })()), Le;
}
var rn;
function wr() {
  return rn || (rn = 1, process.env.NODE_ENV === "production" ? Ze.exports = Tr() : Ze.exports = vr()), Ze.exports;
}
var m = wr();
const yt = 100, bt = 50, Tt = 200, on = 5, vt = (e) => e < Tt, wt = (e) => e > bt, Er = 96, Ye = (e) => Math.round(e * Er), nt = {
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
}, be = "NORMAL", xn = (e = be) => {
  const t = nt[e] || nt[be];
  return {
    top: Ye(t.top),
    bottom: Ye(t.bottom),
    left: Ye(t.left),
    right: Ye(t.right)
  };
}, xr = (e = be) => {
  const t = xn(e);
  return t.top + t.bottom;
}, Cr = () => Object.keys(nt), Ar = (e) => {
  const t = nt[e];
  return t ? t.label : "Unknown";
}, Ne = {
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
}, Cn = "A4", _t = (e) => {
  const t = Ne[e] || Ne[Cn];
  return {
    width: t.width,
    height: t.height
  };
}, _a = (e) => Object.keys(Ne).includes(e), Na = () => Object.keys(Ne), je = Cn, Oe = "<p><br></p>", Rr = "continuous", Ie = (e, t = je) => ({
  id: kt(),
  index: e,
  size: t,
  content: Oe,
  images: [],
  isBreakPoint: !1
}), et = (e) => typeof e != "string" || e.trim() === "" ? Oe : e, An = (e, t = je) => (e.length > 0 ? e : [Ie(0, t)]).map((n, a) => ({
  id: n.id || kt(),
  index: a,
  size: n.size || t,
  content: et(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Sr = (e = je) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: _t(e).height
}], Ve = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), Et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || je, n = An(e.pages || [Ie(0, r)], r);
  return {
    id: kt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Rr,
    continuousContent: e.continuousContent || Oe,
    pageBoundaries: e.pageBoundaries || Sr(r),
    zoomLevel: e.zoomLevel || yt,
    pageMargins: e.pageMargins || be,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, Y = {
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
}, xt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Y.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Oe, pageSize: a = je } = t.payload || {}, o = { ...Ie(0, a), content: et(n) };
      return Et({
        title: e.title,
        pageSize: a,
        pages: [o]
      });
    }
    case Y.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case Y.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: a } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[n] = {
        ...o[n],
        content: et(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Y.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = An(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : Ve(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case Y.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(n, 0, Ie(n, e.pageSize));
      const o = a.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), s = Ve(o);
      return {
        ...e,
        pages: o,
        activePage: n,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Y.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(n, 1);
      const o = a.map((g, l) => ({
        ...g,
        index: l,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = Ve(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: i,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Y.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const a = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= a ? e : {
        ...e,
        activePage: n,
        updatedAt: r
      };
    }
    case Y.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        _t(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = Ve(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Y.RESET_DOCUMENT:
      return Et();
    case Y.UPDATE_CONTINUOUS_CONTENT: {
      const n = et(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case Y.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const a = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: a,
        updatedAt: r
      };
    }
    case Y.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (n === "end")
        s = s + o + "<p><br></p>";
      else if (typeof n == "number") {
        const i = s.substring(0, n), g = s.substring(n);
        s = i + o + g;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && g.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < g.length) {
          const l = g[a], c = document.createElement("page-break");
          c.setAttribute("data-page-break", "true"), c.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", l.parentNode.insertBefore(c, l.nextSibling), c.parentNode.insertBefore(u, c.nextSibling), s = i.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: r
      };
    }
    case Y.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: r
      };
    }
    case Y.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Oe).join(`
`) || Oe : e.continuousContent && e.continuousContent !== Oe && (o = [{ ...Ie(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Y.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < bt || n > Tt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${bt} and ${Tt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.ZOOM_IN: {
      if (!vt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + on;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.ZOOM_OUT: {
      if (!wt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - on;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.RESET_ZOOM:
      return e.zoomLevel === yt ? e : {
        ...e,
        zoomLevel: yt,
        updatedAt: r
      };
    case Y.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case Y.RECORD_OPERATION: {
      const { operation: n, inverseOperation: a } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: a }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: r
      };
    }
    case Y.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return n.inverseOperation && (o = xt(e, n.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, n],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case Y.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return n.operation && (o = xt(e, n.operation)), {
        ...o,
        undoStack: [...e.undoStack, n],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: r
      };
    }
    case Y.CLEAR_UNDO_REDO:
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
}, Rn = pr(null), Pa = ({ children: e, initialState: t = {} }) => {
  const [r, n] = hr(xt, Et(t)), a = we(() => ({
    initializeDocument: (s) => n({ type: Y.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => n({ type: Y.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => n({ type: Y.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => n({ type: Y.UPDATE_PAGES, payload: s }),
    addPage: (s) => n({ type: Y.ADD_PAGE, payload: s }),
    deletePage: (s) => n({ type: Y.DELETE_PAGE, payload: s }),
    setActivePage: (s) => n({ type: Y.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => n({ type: Y.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => n({ type: Y.RESET_DOCUMENT }),
    updateContinuousContent: (s) => n({ type: Y.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => n({ type: Y.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => n({ type: Y.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => n({ type: Y.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => n({ type: Y.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => n({ type: Y.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => n({ type: Y.ZOOM_IN }),
    zoomOut: () => n({ type: Y.ZOOM_OUT }),
    resetZoom: () => n({ type: Y.RESET_ZOOM }),
    updatePageMargins: (s) => n({ type: Y.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, i) => n({
      type: Y.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: i }
    }),
    undo: () => n({ type: Y.UNDO }),
    redo: () => n({ type: Y.REDO }),
    clearUndoRedo: () => n({ type: Y.CLEAR_UNDO_REDO })
  }), []), o = we(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ m.jsx(Rn.Provider, { value: o, children: e });
}, Sn = () => {
  const e = gr(Rn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, On = () => {
  const { state: e } = Sn();
  return e;
}, xe = () => {
  const { actions: e } = Sn();
  return e;
};
var Ke = { exports: {} }, Xe = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Or() {
  if (sn) return ne;
  sn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function P(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case t:
          switch (p = p.type, p) {
            case g:
            case l:
            case n:
            case o:
            case a:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case c:
                case b:
                case T:
                case s:
                  return p;
                default:
                  return y;
              }
          }
        case r:
          return y;
      }
    }
  }
  function h(p) {
    return P(p) === l;
  }
  return ne.AsyncMode = g, ne.ConcurrentMode = l, ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = b, ne.Memo = T, ne.Portal = r, ne.Profiler = o, ne.StrictMode = a, ne.Suspense = u, ne.isAsyncMode = function(p) {
    return h(p) || P(p) === g;
  }, ne.isConcurrentMode = h, ne.isContextConsumer = function(p) {
    return P(p) === i;
  }, ne.isContextProvider = function(p) {
    return P(p) === s;
  }, ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ne.isForwardRef = function(p) {
    return P(p) === c;
  }, ne.isFragment = function(p) {
    return P(p) === n;
  }, ne.isLazy = function(p) {
    return P(p) === b;
  }, ne.isMemo = function(p) {
    return P(p) === T;
  }, ne.isPortal = function(p) {
    return P(p) === r;
  }, ne.isProfiler = function(p) {
    return P(p) === o;
  }, ne.isStrictMode = function(p) {
    return P(p) === a;
  }, ne.isSuspense = function(p) {
    return P(p) === u;
  }, ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === l || p === o || p === a || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === T || p.$$typeof === s || p.$$typeof === i || p.$$typeof === c || p.$$typeof === A || p.$$typeof === $ || p.$$typeof === L || p.$$typeof === v);
  }, ne.typeOf = P, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function kr() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function P(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === l || D === o || D === a || D === u || D === d || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === T || D.$$typeof === s || D.$$typeof === i || D.$$typeof === c || D.$$typeof === A || D.$$typeof === $ || D.$$typeof === L || D.$$typeof === v);
    }
    function h(D) {
      if (typeof D == "object" && D !== null) {
        var fe = D.$$typeof;
        switch (fe) {
          case t:
            var _e = D.type;
            switch (_e) {
              case g:
              case l:
              case n:
              case o:
              case a:
              case u:
                return _e;
              default:
                var ze = _e && _e.$$typeof;
                switch (ze) {
                  case i:
                  case c:
                  case b:
                  case T:
                  case s:
                    return ze;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var p = g, y = l, I = i, R = s, j = t, q = c, U = n, B = b, x = T, S = r, C = o, _ = a, V = u, te = !1;
    function ie(D) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(D) || h(D) === g;
    }
    function E(D) {
      return h(D) === l;
    }
    function f(D) {
      return h(D) === i;
    }
    function O(D) {
      return h(D) === s;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function M(D) {
      return h(D) === c;
    }
    function Z(D) {
      return h(D) === n;
    }
    function G(D) {
      return h(D) === b;
    }
    function z(D) {
      return h(D) === T;
    }
    function W(D) {
      return h(D) === r;
    }
    function X(D) {
      return h(D) === o;
    }
    function Q(D) {
      return h(D) === a;
    }
    function ce(D) {
      return h(D) === u;
    }
    re.AsyncMode = p, re.ConcurrentMode = y, re.ContextConsumer = I, re.ContextProvider = R, re.Element = j, re.ForwardRef = q, re.Fragment = U, re.Lazy = B, re.Memo = x, re.Portal = S, re.Profiler = C, re.StrictMode = _, re.Suspense = V, re.isAsyncMode = ie, re.isConcurrentMode = E, re.isContextConsumer = f, re.isContextProvider = O, re.isElement = H, re.isForwardRef = M, re.isFragment = Z, re.isLazy = G, re.isMemo = z, re.isPortal = W, re.isProfiler = X, re.isStrictMode = Q, re.isSuspense = ce, re.isValidElementType = P, re.typeOf = h;
  })()), re;
}
var cn;
function kn() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? Xe.exports = Or() : Xe.exports = kr()), Xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lt, ln;
function _r() {
  if (ln) return lt;
  ln = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var g = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lt = a() ? Object.assign : function(o, s) {
    for (var i, g = n(o), l, c = 1; c < arguments.length; c++) {
      i = Object(arguments[c]);
      for (var u in i)
        t.call(i, u) && (g[u] = i[u]);
      if (e) {
        l = e(i);
        for (var d = 0; d < l.length; d++)
          r.call(i, l[d]) && (g[l[d]] = i[l[d]]);
      }
    }
    return g;
  }, lt;
}
var ut, un;
function Nt() {
  if (un) return ut;
  un = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ut = e, ut;
}
var dt, dn;
function _n() {
  return dn || (dn = 1, dt = Function.call.bind(Object.prototype.hasOwnProperty)), dt;
}
var ft, fn;
function Nr() {
  if (fn) return ft;
  fn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Nt(), r = {}, n = /* @__PURE__ */ _n();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, g, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (n(o, c)) {
          var u;
          try {
            if (typeof o[c] != "function") {
              var d = Error(
                (g || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            u = o[c](s, c, g, i, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var T = l ? l() : "";
            e(
              "Failed " + i + " type: " + u.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ft = a, ft;
}
var pt, pn;
function Pr() {
  if (pn) return pt;
  pn = 1;
  var e = kn(), t = _r(), r = /* @__PURE__ */ Nt(), n = /* @__PURE__ */ _n(), a = /* @__PURE__ */ Nr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return pt = function(i, g) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function u(E) {
      var f = E && (l && E[l] || E[c]);
      if (typeof f == "function")
        return f;
    }
    var d = "<<anonymous>>", T = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: L(),
      arrayOf: P,
      element: h(),
      elementType: p(),
      instanceOf: y,
      node: q(),
      objectOf: R,
      oneOf: I,
      oneOfType: j,
      shape: B,
      exact: x
    };
    function b(E, f) {
      return E === f ? E !== 0 || 1 / E === 1 / f : E !== E && f !== f;
    }
    function v(E, f) {
      this.message = E, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function A(E) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, O = 0;
      function H(Z, G, z, W, X, Q, ce) {
        if (W = W || d, Q = Q || z, ce !== r) {
          if (g) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = W + ":" + z;
            !f[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[fe] = !0, O++);
          }
        }
        return G[z] == null ? Z ? G[z] === null ? new v("The " + X + " `" + Q + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new v("The " + X + " `" + Q + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : E(G, z, W, X, Q);
      }
      var M = H.bind(null, !1);
      return M.isRequired = H.bind(null, !0), M;
    }
    function $(E) {
      function f(O, H, M, Z, G, z) {
        var W = O[H], X = _(W);
        if (X !== E) {
          var Q = V(W);
          return new v(
            "Invalid " + Z + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + M + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return A(f);
    }
    function L() {
      return A(s);
    }
    function P(E) {
      function f(O, H, M, Z, G) {
        if (typeof E != "function")
          return new v("Property `" + G + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var z = O[H];
        if (!Array.isArray(z)) {
          var W = _(z);
          return new v("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an array."));
        }
        for (var X = 0; X < z.length; X++) {
          var Q = E(z, X, M, Z, G + "[" + X + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return A(f);
    }
    function h() {
      function E(f, O, H, M, Z) {
        var G = f[O];
        if (!i(G)) {
          var z = _(G);
          return new v("Invalid " + M + " `" + Z + "` of type " + ("`" + z + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(E);
    }
    function p() {
      function E(f, O, H, M, Z) {
        var G = f[O];
        if (!e.isValidElementType(G)) {
          var z = _(G);
          return new v("Invalid " + M + " `" + Z + "` of type " + ("`" + z + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(E);
    }
    function y(E) {
      function f(O, H, M, Z, G) {
        if (!(O[H] instanceof E)) {
          var z = E.name || d, W = ie(O[H]);
          return new v("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return A(f);
    }
    function I(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(O, H, M, Z, G) {
        for (var z = O[H], W = 0; W < E.length; W++)
          if (b(z, E[W]))
            return null;
        var X = JSON.stringify(E, function(ce, D) {
          var fe = V(D);
          return fe === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + Z + " `" + G + "` of value `" + String(z) + "` " + ("supplied to `" + M + "`, expected one of " + X + "."));
      }
      return A(f);
    }
    function R(E) {
      function f(O, H, M, Z, G) {
        if (typeof E != "function")
          return new v("Property `" + G + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var z = O[H], W = _(z);
        if (W !== "object")
          return new v("Invalid " + Z + " `" + G + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an object."));
        for (var X in z)
          if (n(z, X)) {
            var Q = E(z, X, M, Z, G + "." + X, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return A(f);
    }
    function j(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < E.length; f++) {
        var O = E[f];
        if (typeof O != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(O) + " at index " + f + "."
          ), s;
      }
      function H(M, Z, G, z, W) {
        for (var X = [], Q = 0; Q < E.length; Q++) {
          var ce = E[Q], D = ce(M, Z, G, z, W, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && X.push(D.data.expectedType);
        }
        var fe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + z + " `" + W + "` supplied to " + ("`" + G + "`" + fe + "."));
      }
      return A(H);
    }
    function q() {
      function E(f, O, H, M, Z) {
        return S(f[O]) ? null : new v("Invalid " + M + " `" + Z + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return A(E);
    }
    function U(E, f, O, H, M) {
      return new v(
        (E || "React class") + ": " + f + " type `" + O + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function B(E) {
      function f(O, H, M, Z, G) {
        var z = O[H], W = _(z);
        if (W !== "object")
          return new v("Invalid " + Z + " `" + G + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var X in E) {
          var Q = E[X];
          if (typeof Q != "function")
            return U(M, Z, G, X, V(Q));
          var ce = Q(z, X, M, Z, G + "." + X, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return A(f);
    }
    function x(E) {
      function f(O, H, M, Z, G) {
        var z = O[H], W = _(z);
        if (W !== "object")
          return new v("Invalid " + Z + " `" + G + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        var X = t({}, O[H], E);
        for (var Q in X) {
          var ce = E[Q];
          if (n(E, Q) && typeof ce != "function")
            return U(M, Z, G, Q, V(ce));
          if (!ce)
            return new v(
              "Invalid " + Z + " `" + G + "` key `" + Q + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(O[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var D = ce(z, Q, M, Z, G + "." + Q, r);
          if (D)
            return D;
        }
        return null;
      }
      return A(f);
    }
    function S(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(S);
          if (E === null || i(E))
            return !0;
          var f = u(E);
          if (f) {
            var O = f.call(E), H;
            if (f !== E.entries) {
              for (; !(H = O.next()).done; )
                if (!S(H.value))
                  return !1;
            } else
              for (; !(H = O.next()).done; ) {
                var M = H.value;
                if (M && !S(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(E, f) {
      return E === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function _(E) {
      var f = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : C(f, E) ? "symbol" : f;
    }
    function V(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var f = _(E);
      if (f === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function te(E) {
      var f = V(E);
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
    function ie(E) {
      return !E.constructor || !E.constructor.name ? d : E.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, pt;
}
var gt, gn;
function Mr() {
  if (gn) return gt;
  gn = 1;
  var e = /* @__PURE__ */ Nt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, gt = function() {
    function n(s, i, g, l, c, u) {
      if (u !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, gt;
}
var hn;
function Lr() {
  if (hn) return Ke.exports;
  if (hn = 1, process.env.NODE_ENV !== "production") {
    var e = kn(), t = !0;
    Ke.exports = /* @__PURE__ */ Pr()(e.isElement, t);
  } else
    Ke.exports = /* @__PURE__ */ Mr()();
  return Ke.exports;
}
var Ir = /* @__PURE__ */ Lr();
const w = /* @__PURE__ */ br(Ir), Nn = {
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
}, Hr = [
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
], st = "16px", Dr = (e) => Math.round(e * 96 / 72), jr = (e) => Math.round(e * 72 / 96 * 2) / 2, Ma = (e) => {
  const t = Object.values(Nn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Dr(e)}px`;
}, La = (e) => {
  const t = parseInt(e), r = Object.values(Nn).find((n) => n.px === t);
  return r ? r.pt : jr(t);
}, Ia = (e) => {
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
}, Br = {
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
}, mn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: st,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, zr = () => {
  const [e, t] = oe(mn), r = xe(), n = k((T, b, v = null) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const $ = A.getRangeAt(0);
      if (!$.toString())
        return t((P) => ({ ...P, [T]: b })), !1;
      try {
        const P = document.createElement("span");
        P.style[T] = b;
        const h = $.extractContents();
        return P.appendChild(h), $.insertNode(P), $.selectNodeContents(P), A.removeAllRanges(), A.addRange($), t((p) => ({ ...p, [T]: b })), !0;
      } catch {
        if (v) {
          const P = T === "fontSize" ? Br[b] || "3" : b;
          return document.execCommand(v, !1, P), t((h) => ({ ...h, [T]: b })), !0;
        }
        return !1;
      }
    } catch (A) {
      return console.warn(`[useFormatting] Style application failed for ${T}:`, A), !1;
    }
  }, []), a = k((T) => n("fontFamily", T, "fontName"), [n]), o = k((T) => n("fontSize", T, "fontSize"), [n]), s = k((T) => n("color", T, "foreColor"), [n]), i = k((T) => {
    t((b) => ({
      ...b,
      alignLeft: T === "left",
      alignCenter: T === "center",
      alignRight: T === "right",
      alignJustify: T === "justify"
    }));
  }, []), g = k((T) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = v.toString(), L = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[T];
      if (!L)
        return !1;
      if (!A) {
        const h = v.startContainer, p = h.nodeType === Node.TEXT_NODE ? h.parentElement : h, y = He(p) || Ur();
        return y && (y.style.textAlign = L, i(L)), !0;
      }
      const P = Fr(v);
      if (P.length === 0) {
        const h = document.createElement("p");
        h.style.textAlign = L;
        const p = v.extractContents();
        h.appendChild(p), v.insertNode(h), v.selectNodeContents(h), b.removeAllRanges(), b.addRange(v);
      } else
        P.forEach((h) => {
          h.style.textAlign = L;
        });
      return i(L), !0;
    } catch (b) {
      return console.warn("[useFormatting] Text alignment failed:", b), !1;
    }
  }, [i]), l = k((T) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = document.createElement("div");
      if (A.innerHTML = T, Array.from(A.children).some(
        (L) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(L.tagName)
      )) {
        const L = v.startContainer, P = L.nodeType === Node.TEXT_NODE ? L.parentElement : L, h = He(P);
        if (h && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(h.tagName)) {
          const p = h.tagName.toLowerCase();
          if (v.startOffset === 0 && (L === h || L.nodeType === Node.TEXT_NODE && L === h.firstChild))
            h.parentNode.insertBefore(A, h);
          else if (v.startOffset === L.textContent?.length && L === h.lastChild && v.endOffset === L.textContent?.length) {
            const R = h.nextSibling;
            R ? h.parentNode.insertBefore(A, R) : h.parentNode.appendChild(A);
          } else {
            const R = v.extractContents(), j = document.createTextNode(""), q = document.createElement(p);
            q.appendChild(j), q.appendChild(R);
            const U = h.parentNode;
            U.insertBefore(A, h.nextSibling), U.insertBefore(q, A.nextSibling), !h.textContent.trim() && h.children.length === 0 && U.removeChild(h);
          }
        } else
          v.insertNode(A);
        v.setStartAfter(A), v.setEndAfter(A), b.removeAllRanges(), b.addRange(v);
      } else
        document.execCommand("insertHTML", !1, T);
      return !0;
    } catch (b) {
      console.warn("[useFormatting] InsertHTML failed:", b);
      try {
        return document.execCommand("insertHTML", !1, T), !0;
      } catch (v) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", v), !1;
      }
    }
  }, []), c = k((T, b = null) => {
    try {
      if (T === "undo") {
        r.undo();
        return;
      }
      if (T === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (T === "insertHTML" && b) {
        l(b);
        return;
      }
      if (T === "fontSize") {
        o(b);
        return;
      }
      if (T === "fontName") {
        a(b);
        return;
      }
      if (T === "foreColor") {
        s(b);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(T)) {
        g(T);
        return;
      }
      switch (document.execCommand(T, !1, b) || console.warn(`[useFormatting] Command "${T}" failed`), T) {
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
        case "justifyLeft":
        case "justifyCenter":
        case "justifyRight":
        case "justifyFull":
        case "fontName":
        case "foreColor":
          break;
        case "formatBlock":
          t((A) => ({ ...A, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${T}":`, v);
    }
  }, [o, a, g, l, r]), u = k(() => {
    try {
      const T = window.getSelection();
      if (!T || T.rangeCount === 0)
        return;
      const b = T.getRangeAt(0), v = b.toString();
      let A = st, $ = "Arial", L = "#000000", P = "p", h = "left";
      if (v) {
        const y = b.startContainer, I = y.nodeType === Node.TEXT_NODE ? y.parentElement : y;
        if (I) {
          const R = window.getComputedStyle(I), j = R.fontSize, q = R.fontFamily;
          j && j.endsWith("px") && (A = j), q && q !== "serif" && ($ = q.split(",")[0].replace(/['"]/g, "").trim());
          const U = R.color;
          U && U !== "rgb(0, 0, 0)" && U !== "#000000" && (U.startsWith("rgb") ? L = $r(U) : L = U);
          const B = He(I);
          if (B) {
            const x = B.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(x) && (P = x);
            const C = window.getComputedStyle(B).textAlign;
            ["left", "center", "right", "justify"].includes(C) && (h = C);
          }
        }
      }
      const p = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: h === "left",
        alignCenter: h === "center",
        alignRight: h === "right",
        alignJustify: h === "justify",
        fontFamily: $,
        fontSize: A,
        fontColor: L,
        headingLevel: P
      };
      t((y) => ({
        ...y,
        ...p
      }));
    } catch (T) {
      console.warn("[useFormatting] Error updating format from selection:", T);
    }
  }, []), d = k(() => {
    t(mn);
  }, []);
  return {
    currentFormat: e,
    formatText: c,
    resetFormat: d,
    updateCurrentFormatFromSelection: u
  };
};
function $r(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function He(e) {
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
function Fr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = He(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = He(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (g) => {
        const l = g.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function Ur() {
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
const Ee = 'page-break, [data-page-break="true"]', Pn = (e) => Ne[e] || Ne.A4, Wr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Pn(r), a = e.querySelectorAll(Ee), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((g, l) => {
    const u = g.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: u,
      height: n.height
    });
  }), o;
}, Mn = (e, t = 100, r = be) => {
  const n = Pn(e), a = xr(r), o = n.height - a, s = t / 100;
  return o / s;
}, qr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(Ee);
    if (r.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), a = n.top + n.height / 2;
    for (let o = r.length - 1; o >= 0; o--)
      if (r[o].getBoundingClientRect().top < a)
        return o + 1;
    return 0;
  } catch (r) {
    return console.warn("[getCurrentPage] Failed to calculate page:", r), 0;
  }
}, yn = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let r = [], n = [];
  for (const a of t)
    a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true" ? n.length > 0 && (r.push(n), n = []) : n.push(a);
  return n.length > 0 && r.push(n), r.length === 0 && t.length > 0 && r.push(t.filter(
    (a) => !(a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
  )), r;
}, Gr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const o = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Zr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, Yr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const g = Mn(r, n, a) * (t - 1), l = Array.from(e.children);
    let c = 0, u = null;
    for (let d = 0; d < l.length; d++) {
      const T = l[d];
      if (T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true")
        continue;
      const b = Gr(T);
      if (c + b > g) {
        u = T;
        break;
      }
      c += b;
    }
    if (u) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), u.parentNode.insertBefore(d, u), o) {
        const T = e.innerHTML;
        o(T);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const T = document.createElement("p");
      if (T.innerHTML = "<br>", e.appendChild(T), o) {
        const b = e.innerHTML;
        o(b);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Vr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(Ee));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let c = !1, u = [], d = null;
    if (t === 0) {
      const b = g[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== b; )
        u.push(v), v = v.nextSibling;
      d = b;
    } else {
      const b = g[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = g[t];
      let A = b.nextSibling;
      for (; A && A !== v; )
        u.push(A), A = A.nextSibling;
      d = b;
    }
    if (l && l.rangeCount > 0) {
      const v = l.getRangeAt(0).startContainer;
      for (const A of u)
        if (A.contains(v) || A === v) {
          c = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), u.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(Ee).forEach((b, v) => {
      b.setAttribute("data-page-number", String(v + 2));
    }), c && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const b = e.innerHTML;
      n(b);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, Kr = (e) => {
  if (e)
    try {
      e.querySelectorAll(Ee).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Xr = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Kr(t), r) {
      const o = t.innerHTML;
      r(o);
    }
    return n && setTimeout(() => {
      n(), a && setTimeout(() => {
        a();
      }, 100);
    }, 50), !0;
  } catch (o) {
    return console.error("[removePageBreak] Failed to remove page break:", o), !1;
  }
}, Jr = 200, Qr = 50, bn = 3, eo = 20, Ln = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const o = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, to = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Ln(o);
    if (s < 1)
      continue;
    if (r + s > t)
      return n === null ? a > 0 ? {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: r
      } : null : {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: r
      };
    r += s, n = o;
  }
  return null;
}, no = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const g = Mn(t, r, n);
    let l = yn(e), c = !1, u = 0;
    for (let d = 0; d < l.length && u < bn; d++) {
      const T = l[d], b = to(T, g);
      if (b && b.overflowIndex > 0) {
        let v = 0;
        for (let P = 0; P < T.length; P++) {
          const h = T[P];
          h && h.getBoundingClientRect && (v += Ln(h));
        }
        if (v - g < eo)
          continue;
        const $ = d + 2;
        Zr(b.overflowElement, $) && (c = !0, u++, l = yn(e));
      }
    }
    if (c) {
      if (a) {
        const d = e.innerHTML;
        a(d);
      }
      setTimeout(() => {
        o && o(), u >= bn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Qr);
    }
    return c;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    s.current = !1;
  }
}, ro = (e, t, r = Jr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, oo = 400, In = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(Ee)[t - 1];
        o && o.nextSibling && (r = o.nextSibling, n = 0);
      }
      if (r) {
        const a = document.createRange(), o = window.getSelection();
        r.nodeType === Node.TEXT_NODE ? a.setStart(r, n) : a.setStart(r, 0), a.collapse(!0), o.removeAllRanges(), o.addRange(a);
      }
    } catch (r) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", r);
    }
  }
}, so = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(Ee)[r - 1];
      if (s)
        a = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", r);
        return;
      }
    }
    if (a) {
      const o = a.getBoundingClientRect(), s = e.getBoundingClientRect(), i = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(r) : In(t, r);
      }, oo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, ao = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, io = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(Ee);
  for (const c of a)
    if (r.comparePoint(c, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), g = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: g
  };
}, co = 300, lo = (e, t, r = 100, n = "NARROW") => {
  const a = xe(), o = ee(null), s = ee(null), i = ee(e), g = ee(r), l = ee(n), c = ee(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    g.current = r;
  }, [r]), ae(() => {
    l.current = n;
  }, [n]), ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const u = k((y = {}) => t?.current ? Wr(t.current, y) : [], [t]), d = k((y = {}) => {
    const I = u(y);
    return a.updatePageBoundaries(I), I;
  }, [u, a]), T = k((y = {}) => {
    const I = typeof y.delay == "number" ? y.delay : co;
    ao(d, o, y, I);
  }, [d]), b = k(() => {
    t?.current && no(
      t.current,
      i.current,
      g.current,
      l.current,
      a.updateContinuousContent,
      d,
      c,
      b
    );
  }, [t, a, d]), v = k((y) => {
    ro(b, s, y);
  }, [b]), A = k((y) => !y?.current || !t?.current ? 0 : qr(y.current, t.current), [t]), $ = k((y) => {
    t?.current && In(t.current, y);
  }, [t]), L = k((y, I) => {
    if (!I?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    so(I.current, t.current, y, $);
  }, [t, $]), P = k(async (y) => t?.current ? Yr(
    t.current,
    y,
    i.current,
    g.current,
    l.current,
    a.updateContinuousContent,
    d
  ) : !1, [t, a, d]), h = k((y) => t?.current ? Vr(
    t.current,
    y,
    u,
    a.updateContinuousContent,
    d,
    $,
    b
  ) : !1, [t, u, a, d, $, b]), p = k((y) => t?.current ? Xr(
    y,
    t.current,
    a.updateContinuousContent,
    d,
    b
  ) : !1, [t, a, d, b]);
  return ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), we(() => ({
    calculatePageBoundaries: u,
    checkAndUpdateBoundaries: T,
    updateBoundaries: d,
    getCurrentPage: A,
    scrollToPage: L,
    positionCursorAtPage: $,
    checkAndReflow: b,
    triggerAutoReflow: v,
    removePageAndContent: h,
    removePageBreak: p,
    insertPageBreakAtBoundary: P,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    u,
    T,
    d,
    A,
    L,
    $,
    b,
    v,
    h,
    p,
    P
  ]);
}, Pe = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, F = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ha({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Pe
}) {
  const g = n - t, l = a - r;
  let c = o, u = s;
  switch (e) {
    case F.TOP_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case F.TOP_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case F.BOTTOM_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case F.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case F.LEFT:
      c = Math.max(i.minWidth, o - g);
      break;
    case F.RIGHT:
      c = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: c, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const d = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? c / d > u ? u = Math.max(i.minHeight, c / d) : c = Math.max(i.minWidth, u * d) : [F.TOP, F.BOTTOM].includes(e) ? c = u * d : [F.LEFT, F.RIGHT].includes(e) && (u = c / d);
  }
  return i.maxWidth && c > i.maxWidth && (c = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = c / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (c = u * (o / s))), c = Math.max(i.minWidth, c), u = Math.max(i.minHeight, u), {
    width: Math.round(c),
    height: Math.round(u)
  };
}
function ve(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Da(e) {
  return ve(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ja(e, { width: t, height: r }) {
  ve(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function uo(e, t = Pe) {
  if (!ve(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(F).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = fo(o), s.style.pointerEvents = "all", Hn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function fo(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Hn(e, t, r, n) {
  switch (t) {
    case F.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case F.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case F.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case F.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case F.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case F.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ct(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Hn(a, o, r.width, r.height);
  });
}
function ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const po = "html-editor-storage", go = 1, ge = "images";
function ho() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Be() {
  return new Promise((e, t) => {
    const r = indexedDB.open(po, go);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(ge) || a.createObjectStore(ge, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function mo(e) {
  return new Promise((t, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const a = new FileReader();
    a.onload = async (o) => {
      const s = o.target.result, g = s.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Be(), c = `editor-image-${ho()}`, d = l.transaction([ge], "readwrite").objectStore(ge), T = {
          key: c,
          dataUrl: s,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, b = d.add(T);
        b.onsuccess = () => {
          l.close(), t(c);
        }, b.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function yo(e) {
  try {
    const t = await Be();
    return new Promise((r, n) => {
      const s = t.transaction([ge], "readonly").objectStore(ge).get(e);
      s.onsuccess = () => {
        t.close();
        const i = s.result;
        r(i ? i.dataUrl : null);
      }, s.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function bo(e) {
  try {
    const t = await Be();
    return new Promise((r, n) => {
      const s = t.transaction([ge], "readwrite").objectStore(ge).delete(e);
      s.onsuccess = () => {
        t.close(), r();
      }, s.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function Ba() {
  try {
    const e = await Be();
    return new Promise((t, r) => {
      const o = e.transaction([ge], "readwrite").objectStore(ge).clear();
      o.onsuccess = () => {
        e.close(), t();
      }, o.onerror = () => {
        e.close(), r(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function za() {
  try {
    const e = await Be();
    return new Promise((t, r) => {
      const o = e.transaction([ge], "readonly").objectStore(ge).getAllKeys();
      o.onsuccess = () => {
        e.close(), t(o.result || []);
      }, o.onerror = () => {
        e.close(), r(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const Dn = [
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
], To = [
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
], vo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function wo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function jn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function tt(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, De(r) || "<p><br></p>";
}
function Eo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function xo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Dn.includes(r.tagName));
}
function Co(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      Dn.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function De(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${wo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), g = jn(o);
      if (s === "DIV") {
        const l = De(o);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (s === "P")
        xo(o) ? t.push(Co(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const l = Eo(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(Ao(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Ro(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const l = De(o);
        t.push(`<blockquote${g}>${l}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (To.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (vo.includes(s))
        t.push(o.outerHTML);
      else {
        const l = De(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Ao(e) {
  const t = e.tagName.toLowerCase(), r = jn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = De(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Ro(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Oo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Tn = (e) => {
  const t = Oo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Bn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), ko = (e) => {
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
var _o = {
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
const No = Ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, g) => mt(
    "svg",
    {
      ref: g,
      ..._o,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Bn("lucide", a),
      ...!o && !ko(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, c]) => mt(l, c)),
      ...Array.isArray(o) ? o : [o]
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
  const r = Ot(
    ({ className: n, ...a }, o) => mt(No, {
      ref: o,
      iconNode: t,
      className: Bn(
        `lucide-${So(Tn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = Tn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Mo = J("arrow-down", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Io = J("arrow-left", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Do = J("arrow-right", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Bo = J("arrow-up", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], $o = J("bold", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Uo = J("chevron-left", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], qo = J("chevron-right", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Zo = J("file-check", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], rt = J("file-text", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Ko = J("hash", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Jo = J("heading-1", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], es = J("heading-2", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], ns = J("heading-3", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], os = J("image-upscale", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], as = J("image", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], cs = J("italic", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], us = J("link", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], fs = J("list-indent-decrease", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], gs = J("list-indent-increase", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ms = J("list-ordered", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], zn = J("list", ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Ts = J("palette", bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ws = J("plus", vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], xs = J("redo", Es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], As = J("scaling", Cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ss = J("settings", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], ks = J("strikethrough", Os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ns = J("table", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Pt = J("text-align-center", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Mt = J("text-align-end", Ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Is = J("text-align-justify", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Lt = J("text-align-start", Hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = J("trash-2", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Bs = J("underline", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], $s = J("undo", zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Us = J("x", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], qs = J("zoom-in", Ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Zs = J("zoom-out", Gs), vn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), g = o.textContent.trim();
    return g ? {
      id: `${r}heading-${s}`,
      level: i,
      text: g,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Ys = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Vs = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = On(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: g, outline: l } = we(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: vn(i, 1, "continuous-")
      };
    let u = 0;
    const d = [];
    return o.forEach((T, b) => {
      u += Ys(T.content), d.push(...vn(T.content, b + 1, `page-${b}-`));
    }), { wordCount: u, outline: d };
  }, [o, r, n, i]), c = n !== void 0 ? n : o.length;
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
            /* @__PURE__ */ m.jsx(rt, { size: 18 }),
            /* @__PURE__ */ m.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ m.jsx(qo, { size: 16 }) : /* @__PURE__ */ m.jsx(Uo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Zo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: c })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Ko, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(rt, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsxs("h3", { children: [
              /* @__PURE__ */ m.jsx(zn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((u) => {
              const d = u.level === 1 ? Jo : u.level === 2 ? es : ns;
              return /* @__PURE__ */ m.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${u.level}`,
                  style: { marginLeft: `${(u.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ m.jsx(d, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ m.jsx("span", { className: "outline-text", children: u.text }),
                    /* @__PURE__ */ m.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      u.page
                    ] })
                  ]
                },
                u.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class Ks {
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
const Re = new Ks("Editor"), $n = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Fn = 32;
function Un(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Fn}px`, e.dataset.indentLevel = String(n));
}
function Xs(e, t) {
  Un(e, t);
}
function Js(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && $n.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Qs() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), r = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && r.add(s);
  }), r.size === 0 && n.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let l = i.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && $n.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(r).filter((s) => {
    let i = s.parentElement;
    for (; i; ) {
      if (r.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function ea(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Fn}px`, e.dataset.indentLevel = String(r));
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
function Rt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = Qs();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = Js(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Xs(s, e);
      return;
    }
    e ? ea(s) : Un(s, !1);
  });
  try {
    const s = document.createRange(), i = (u) => u.nodeType === Node.TEXT_NODE ? u : document.createTreeWalker(
      u,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (u) => {
      if (u.nodeType === Node.TEXT_NODE)
        return u;
      const d = document.createTreeWalker(
        u,
        NodeFilter.SHOW_TEXT,
        null
      );
      let T = null, b = d.nextNode();
      for (; b; )
        T = b, b = d.nextNode();
      return T;
    }, l = i(a);
    l ? s.setStart(l, 0) : s.setStart(a, 0);
    const c = g(o);
    c ? s.setEnd(c, c.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const i = document.createRange();
      i.setStartBefore(a), i.setEndAfter(o), t.removeAllRanges(), t.addRange(i);
    } catch (i) {
      console.warn("Could not restore selection after indentation:", i);
    }
  }
  return !0;
}
function ta(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Rt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Wn = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = oe(!1), o = ee(null), s = [
    "#000000",
    // Black
    "#FF0000",
    // Red
    "#00FF00",
    // Green
    "#0000FF",
    // Blue
    "#FFFF00",
    // Yellow
    "#FF00FF",
    // Magenta
    "#00FFFF",
    // Cyan
    "#FFA500",
    // Orange
    "#800080",
    // Purple
    "#FFC0CB",
    // Pink
    "#A52A2A",
    // Brown
    "#808080",
    // Gray
    "#FFFFFF"
    // White
  ];
  ae(() => {
    const l = (c) => {
      o.current && !o.current.contains(c.target) && a(!1);
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, []);
  const i = (l) => {
    t(l), a(!1);
  }, g = (l) => {
    const c = l.target.value;
    t(c);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => a(!n),
        className: "color-picker-button",
        title: r,
        style: {
          backgroundColor: e || "#000000",
          border: "1px solid #ccc",
          borderRadius: "3px",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          position: "relative"
        },
        children: /* @__PURE__ */ m.jsx(Ts, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ m.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ m.jsx("div", { className: "color-grid", children: s.map((l) => /* @__PURE__ */ m.jsx(
        "button",
        {
          onClick: () => i(l),
          className: `color-option ${e === l ? "selected" : ""}`,
          style: {
            backgroundColor: l,
            border: e === l ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: l
        },
        l
      )) }),
      /* @__PURE__ */ m.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ m.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: g,
            style: {
              width: "100%",
              height: "32px",
              border: "1px solid #ccc",
              borderRadius: "3px",
              cursor: "pointer"
            }
          }
        )
      ] })
    ] })
  ] });
};
Wn.propTypes = {
  currentColor: w.string,
  onColorSelect: w.func.isRequired,
  title: w.string
};
const na = [
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
], ra = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], oa = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', It = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = async (c) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(c.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (c.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      Re.info("Starting image upload", { fileName: c.name, fileSize: c.size });
      const d = await mo(c);
      Re.info("Image saved to IndexedDB", { key: d });
      const T = await yo(d);
      if (Re.info("Image retrieved from IndexedDB", { key: d, hasUrl: !!T }), T && n) {
        const v = `<img src="${T}" data-key="${d}" alt="Inserted image" />`;
        Re.info("Calling onInsertImage with HTML", { imageHtml: v.substring(0, 100) }), n(v), Re.info("Image inserted", { key: d });
      } else
        Re.warn("Image not inserted: missing imageUrl or onInsertImage callback", {
          hasUrl: !!T,
          hasCallback: !!n
        });
      const b = document.getElementById("image-upload");
      b && (b.value = "");
    } catch (u) {
      Re.error("Error uploading image", u);
    }
  }, i = (c, u, d, T) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: () => t(c),
      className: e[u] ? "active" : "",
      title: T,
      children: /* @__PURE__ */ m.jsx(d, { size: 16 })
    },
    c
  ), g = (c, u, d, T = !1) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: c,
      disabled: T,
      title: d,
      style: { opacity: T ? 0.5 : 1 },
      children: /* @__PURE__ */ m.jsx(u, { size: 16 })
    },
    d
  ), l = () => /* @__PURE__ */ m.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ m.jsxs("div", { className: "editor-toolbar", children: [
    g(() => t("undo"), $s, "Undo", !a),
    g(() => t("redo"), xs, "Redo", !o),
    l(),
    i("bold", "bold", $o, "Bold"),
    i("italic", "italic", cs, "Italic"),
    i("underline", "underline", Bs, "Underline"),
    i("strikethrough", "strikethrough", ks, "Strikethrough"),
    l(),
    i("justifyLeft", "alignLeft", Lt, "Align Left"),
    i("justifyCenter", "alignCenter", Pt, "Align Center"),
    i("justifyRight", "alignRight", Mt, "Align Right"),
    i("justifyFull", "alignJustify", Is, "Justify"),
    l(),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("fontName", c.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: na.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("fontSize", c.target.value),
        value: e.fontSize || st,
        title: "Font Size",
        children: Hr.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    /* @__PURE__ */ m.jsx(
      Wn,
      {
        currentColor: e.fontColor,
        onColorSelect: (c) => t("foreColor", c),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("formatBlock", c.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: ra.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    l(),
    g(() => t("insertUnorderedList"), zn, "Bullet List"),
    g(() => t("insertOrderedList"), ms, "Numbered List"),
    l(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ m.jsx(gs, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Rt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ m.jsx(fs, { size: 16 })
      }
    ),
    l(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          const c = prompt("Enter URL:");
          c && t("createLink", c);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ m.jsx(us, { size: 16 })
      }
    ),
    g(() => t("insertHTML", oa), Ns, "Insert Table"),
    r && g(r, rt, "Insert Page Break"),
    l(),
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (c) => c.target.files[0] && s(c.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ m.jsx(as, { size: 16 })
      }
    )
  ] });
};
It.propTypes = {
  currentFormat: w.shape({
    bold: w.bool,
    italic: w.bool,
    underline: w.bool,
    strikethrough: w.bool,
    alignLeft: w.bool,
    alignCenter: w.bool,
    alignRight: w.bool,
    alignJustify: w.bool,
    fontFamily: w.string,
    fontSize: w.string,
    fontColor: w.string,
    headingLevel: w.string
  }).isRequired,
  onFormatText: w.func.isRequired,
  onAddPageBreak: w.func,
  onInsertImage: w.func,
  canUndo: w.bool,
  canRedo: w.bool
};
It.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function sa(e) {
  return !e || typeof e != "string" ? e : tt(e);
}
function aa(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = sa(r) : r = ia(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function ia(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => ca(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function ca(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Se = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Se(e.parentElement) : !1, Ht = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: g,
  zoomLevel: l = 100,
  pageMargins: c = be
}) => {
  const u = we(() => xn(c), [c]), d = l / 100, T = k((h, p) => {
    if (!h) return !1;
    const y = h.getBoundingClientRect(), I = p - y.top;
    return I < u.top || I > y.height - u.bottom;
  }, [u.top, u.bottom]), b = k((h, p) => {
    p.preventDefault();
    const y = h.getBoundingClientRect(), I = p.clientX - y.left, R = p.clientY - y.top, j = y.width - 40, q = -12, U = y.width - 20;
    I >= j && I <= U && R >= q && R <= 8 && g && g(h);
  }, [g]), v = k((h) => {
    h.preventDefault();
    const p = t.current.getBoundingClientRect();
    if (h.clientY - p.top < u.top) {
      const I = t.current.firstElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), j = window.getSelection();
        R.setStart(I, 0), R.collapse(!0), j.removeAllRanges(), j.addRange(R);
      }
    } else {
      const I = t.current.lastElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), j = window.getSelection();
        R.selectNodeContents(I), R.collapse(!1), j.removeAllRanges(), j.addRange(R);
      }
    }
  }, [t, u.top]), A = k((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: I, endContainer: R } = y;
    if ((Se(I) || Se(R)) && (h.key.length === 1 || h.key === "Enter" || h.key === " "))
      return h.preventDefault(), !1;
    if (ta(h))
      return n && n(), !1;
    if ((h.key === "Backspace" || h.key === "Delete") && (Se(I) || Se(R)))
      return h.preventDefault(), !1;
    a && a(h);
  }, [a, n]), $ = k((h) => {
    if (!t.current) return;
    const p = h.target;
    if (Se(p)) {
      b(p, h);
      return;
    }
    if (T(t.current, h.clientY)) {
      v(h);
      return;
    }
    o && o(h);
  }, [t, o, b, v, T]), L = k((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: I } = y;
    if (Se(I))
      return h.preventDefault(), !1;
  }, []), P = k((h) => {
    const p = aa(h);
    i && i(h, p);
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
        transform: `scale(${d})`,
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
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: st,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: A,
          onBeforeInput: L,
          onClick: $,
          onScroll: s,
          onPaste: P,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ht.propTypes = {
  dimensions: w.shape({
    width: w.number.isRequired,
    height: w.number.isRequired
  }).isRequired,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: w.func.isRequired,
  onContentChange: w.func,
  onKeyDown: w.func,
  onClick: w.func,
  onScroll: w.func,
  onPaste: w.func,
  onRemovePageBreak: w.func,
  zoomLevel: w.number,
  pageMargins: w.string
};
Ht.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: be
};
const la = mr(Ht), Dt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = be,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: l,
  onPageSizeChange: c,
  onPageMarginsChange: u,
  onZoomIn: d,
  onZoomOut: T,
  onZoomReset: b
} = {}) => {
  const v = Math.max(e?.length || 0, 1), A = (p) => {
    i && i(p);
  }, $ = () => {
    g && g();
  }, L = (p) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(p);
  }, P = (p) => {
    c && c(p);
  }, h = (p) => {
    u && u(p);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ m.jsx(Ss, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (p) => P(p.target.value),
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
              onChange: (p) => h(p.target.value),
              children: Cr().map((p) => /* @__PURE__ */ m.jsx("option", { value: p, children: Ar(p) }, p))
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
          onClick: T,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ m.jsx(Zs, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: d,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ m.jsx(qs, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsx(
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
    /* @__PURE__ */ m.jsx("div", { className: "page-list", children: e.map((p, y) => /* @__PURE__ */ m.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${y === t ? "active" : ""}`,
          onClick: () => A(y),
          "aria-label": `Go to page ${y + 1}`,
          "aria-current": y === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ m.jsx(rt, { size: 14 }),
            /* @__PURE__ */ m.jsxs("span", { children: [
              "Page ",
              y + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (I) => {
            I.stopPropagation(), L(y);
          },
          "aria-label": `Delete page ${y + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ m.jsx(Us, { size: 14 })
        }
      )
    ] }, p.id || `page-${y}`)) }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: $,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ m.jsx(ws, { size: 16 }),
          /* @__PURE__ */ m.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Dt.propTypes = {
  pageBoundaries: w.arrayOf(
    w.shape({
      id: w.string.isRequired,
      pageNumber: w.number.isRequired,
      top: w.number,
      height: w.number
    })
  ),
  activePage: w.number,
  pageSize: w.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: w.string,
  zoomLevel: w.number,
  canZoomIn: w.bool,
  canZoomOut: w.bool,
  onNavigate: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onZoomIn: w.func,
  onZoomOut: w.func,
  onZoomReset: w.func
};
Dt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: be,
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
const ua = ot.memo(Dt);
function da(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function fa({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Pe
}) {
  const g = n - t, l = a - r;
  let c = o, u = s;
  switch (e) {
    case F.TOP_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case F.TOP_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case F.BOTTOM_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case F.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case F.LEFT:
      c = Math.max(i.minWidth, o - g);
      break;
    case F.RIGHT:
      c = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: c, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const d = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? c / d > u ? u = Math.max(i.minHeight, c / d) : c = Math.max(i.minWidth, u * d) : [F.TOP, F.BOTTOM].includes(e) ? c = u * d : [F.LEFT, F.RIGHT].includes(e) && (u = c / d);
  }
  return i.maxWidth && c > i.maxWidth && (c = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = c / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (c = u * (o / s))), c = Math.max(i.minWidth, c), u = Math.max(i.minHeight, u), {
    width: Math.round(c),
    height: Math.round(u)
  };
}
function qn(e, { width: t, height: r }) {
  ve(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function pa(e, t, r) {
  qn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function ga(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, g = a || o, l = r.offsetWidth, c = r.offsetHeight, d = {
    // Increase width
    ">": g && s ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: c
    }) : null,
    // Decrease width
    "<": g && s ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: c
    }) : null,
    // Increase height
    "+": g && s ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, c + 10)
    }) : null,
    // Decrease height
    "-": g && s ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, c - 10)
    }) : null,
    // Reset to default
    r: g && !s ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (d) {
    e.preventDefault();
    const T = d();
    return pa(t, r, T), !0;
  }
  return !1;
}
const jt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Pe
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(a), c = ee(!1), u = xe();
  ae(() => {
    l.current = a;
  }, [a]);
  const d = k((h) => {
    if (!ve(h)) return;
    o.current && (ht(o.current), o.current = null), h.classList.add("selected");
    const p = uo(h, l.current);
    p && (o.current = p, s.current = h, document.body.appendChild(p), p.querySelectorAll(".resize-handler").forEach((I) => {
      I.addEventListener("mousedown", b);
    }), r && r(h));
  }, [r]), T = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ht(o.current), o.current = null), i.current = null, g.current = null, c.current = !1, n && n();
  }, [n]), b = k((h) => {
    if (h.preventDefault(), h.stopPropagation(), !s.current) return;
    const p = h.currentTarget.dataset.handler, y = s.current.getBoundingClientRect(), I = window.pageYOffset || document.documentElement.scrollTop, R = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: h.clientX,
      y: h.clientY,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight,
      originalWidth: s.current.offsetWidth,
      originalHeight: s.current.offsetHeight,
      offsetX: h.clientX - y.left - R,
      offsetY: h.clientY - y.top - I
    }, g.current = p, c.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = da(p), document.addEventListener("mousemove", v), document.addEventListener("mouseup", A);
  }, []), v = k((h) => {
    if (!c.current || !s.current || !i.current || !g.current) return;
    h.preventDefault(), h.stopPropagation();
    const { x: p, y, width: I, height: R } = i.current, j = g.current, q = h.clientX, U = h.clientY, B = fa({
      handler: j,
      startX: p,
      startY: y,
      currentX: q,
      currentY: U,
      startWidth: I,
      startHeight: R,
      options: l.current
    });
    qn(s.current, B), o.current && Ct(o.current, s.current);
  }, []), A = k((h) => {
    if (c.current) {
      if (h.preventDefault(), h.stopPropagation(), s.current && i.current) {
        const p = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, y = {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        };
        (p.width !== y.width || p.height !== y.height) && u.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: y } },
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: p } }
        );
      }
      if (i.current = null, g.current = null, c.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
        const p = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(p), t && t(s.current, {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        });
      }
    }
  }, [t, u]), $ = k((h) => {
    o.current && !o.current.contains(h.target) && T();
    const p = h.target;
    if (ve(p)) {
      if (p === s.current)
        return;
      d(p);
    }
  }, [d, T]), L = k((h) => {
    if ((h.key === "Delete" || h.key === "Backspace") && s.current && !c.current) {
      h.preventDefault();
      const p = s.current;
      if (p.parentNode) {
        p.parentNode.removeChild(p), T();
        const y = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(y);
      }
    }
    h.key === "Escape" && s.current && T(), s.current && !c.current && ga(h, e, s.current, l.current);
  }, [e, T]), P = k(() => {
    o.current && s.current && Ct(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const p = e.current.closest(".editor-viewport");
    return p && (p.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      p && p.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), ae(() => {
    if (!e.current) return;
    const h = e.current;
    return h.addEventListener("click", $), h.addEventListener("keydown", L), window.addEventListener("resize", P), () => {
      h.removeEventListener("click", $), h.removeEventListener("keydown", L), window.removeEventListener("resize", P), c.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && ht(o.current);
    };
  }, [e, $, L, P, v, A]), ae(() => {
    if (!e.current) return;
    const h = new MutationObserver((p) => {
      p.forEach((y) => {
        y.type === "childList" && (y.removedNodes.forEach((I) => {
          I.nodeType === Node.ELEMENT_NODE && ve(I) && I === s.current && T();
        }), y.addedNodes.forEach((I) => {
          if (I.nodeType !== Node.ELEMENT_NODE) return;
          if (ve(I)) {
            setTimeout(() => d(I), 50);
            return;
          }
          const R = I.querySelectorAll?.("img") || [];
          R.length > 0 && setTimeout(() => d(R[0]), 50);
        }));
      });
    });
    return h.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => h.disconnect();
  }, [e, T, d]), null;
};
jt.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: w.func,
  onImageSelect: w.func,
  onImageDeselect: w.func,
  resizeOptions: w.shape({
    minWidth: w.number,
    minHeight: w.number,
    maxWidth: w.number,
    maxHeight: w.number,
    aspectRatio: w.bool,
    preserveAspectRatio: w.bool,
    defaultWidth: w.number,
    defaultHeight: w.number
  })
};
jt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Pe
};
const Bt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [c, u] = oe("top"), [d, T] = oe(o), b = ee(null), v = ee(null), A = xe(), $ = (x) => {
    if (!x)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (C) => setTimeout(C, 16))(() => {
      const C = document.querySelector(".image-resize-overlay");
      C && Ct(C, x);
    });
  }, L = (x) => {
    if (!x) return null;
    const S = window.getComputedStyle(x);
    return {
      float: S.float || "none",
      margin: x.style.margin || "",
      display: S.display || "inline",
      width: x.style.width || x.width || "",
      height: x.style.height || x.height || "",
      aspectRatio: d
    };
  }, P = k(() => {
    if (!e) return "left";
    const x = window.getComputedStyle(e);
    return x.float === "right" ? "right" : x.float === "left" ? "left" : x.display === "block" && x.margin.includes("auto") ? "center" : "left";
  }, [e]), [h, p] = oe("left");
  ae(() => {
    e && p(P());
  }, [e, P]);
  const y = k(() => {
    if (!e || !b.current) return;
    const x = e.getBoundingClientRect(), S = b.current.getBoundingClientRect(), C = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, _ = x.bottom >= 0 && x.top <= C.height && x.right >= 0 && x.left <= C.width;
    let V = "top", te = 0, ie = 0;
    if (_) {
      const M = x.top - S.height - 10, Z = C.height - x.bottom - S.height - 10;
      Z > M && Z > 0 ? (V = "bottom", te = x.bottom + 10) : (V = "top", te = x.top - S.height - 10);
    } else
      V = "top", te = 10;
    ie = x.left + x.width / 2 - S.width / 2;
    const E = window.innerWidth, f = window.innerHeight;
    let O = Math.max(10, Math.min(ie, E - S.width - 10)), H = Math.max(10, Math.min(te, f - S.height - 10));
    i({ top: H, left: O }), u(V), l(!0);
  }, [e]);
  wn(() => {
    y();
    const x = () => {
      y();
    }, S = v.current;
    return S && S.addEventListener("scroll", x), window.addEventListener("scroll", x), window.addEventListener("resize", x), () => {
      S && S.removeEventListener("scroll", x), window.removeEventListener("scroll", x), window.removeEventListener("resize", x), l(!1);
    };
  }, [e, y]), ae(() => {
    const x = (S) => {
      b.current && !b.current.contains(S.target) && S.target !== e && a();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [e, a]);
  const I = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, R = (x) => {
    if (e && I[x]) {
      const S = L(e), C = h, _ = I[x];
      e.style.float = _.float, e.style.margin = _.margin, e.style.display = _.display, p(x), $(e);
      const V = L(e);
      A.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: x, state: V } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C, state: S } }
      ), t && t(x);
    }
  }, j = () => {
    if (e && e.parentNode) {
      const x = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      A.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: x } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, q = () => {
    const x = d, S = !d;
    T(S), A.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: S } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: x } }
    ), r && r(S);
  }, U = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (x) => ({
    ...U,
    background: x ? "#007bff" : "transparent",
    color: x ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": c,
        "aria-hidden": !g,
        style: {
          position: "fixed",
          top: `${s.top}px`,
          left: `${s.left}px`,
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
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${d ? "" : "active"}`,
              onClick: q,
              title: `Toggle aspect ratio preservation (currently ${d ? "ON" : "OFF"})`,
              children: d ? /* @__PURE__ */ m.jsx(As, { size: 14 }) : /* @__PURE__ */ m.jsx(os, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "left" ? "active" : ""}`,
              onClick: () => R("left"),
              title: "Align Left",
              style: B(h === "left"),
              children: /* @__PURE__ */ m.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "center" ? "active" : ""}`,
              onClick: () => R("center"),
              title: "Align Center",
              style: B(h === "center"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "right" ? "active" : ""}`,
              onClick: () => R("right"),
              title: "Align Right",
              style: B(h === "right"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: j,
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
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Bt.propTypes = {
  imageElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onAspectRatioToggle: w.func,
  onDelete: w.func,
  onClose: w.func.isRequired,
  initialPreserveAspectRatio: w.bool
};
Bt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const at = {
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
function de(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function he(e) {
  if (!de(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let g = 0; g < n; g++) {
      const l = s[g], c = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      a.push(c || 100);
    }
  else if (r.length > 0) {
    const g = r[0];
    for (let l = 0; l < g.cells.length; l++) {
      const c = g.cells[l];
      a.push(c.offsetWidth);
    }
  }
  const i = r.map((g) => (g.style.height ? parseInt(g.style.height, 10) : null) || g.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: n,
    rows: r.length,
    columnWidths: a,
    rowHeights: i,
    rect: t
  };
}
function ha({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = at
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, g, l, c, u) => {
    g >= 0 && g < i.length && (i[g] = Math.max(c, Math.min(u, i[g] + l)));
  };
  switch (e) {
    case le.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case le.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case le.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case le.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function Te(e) {
  if (!de(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const r = t[0].cells.length;
  let n = e.querySelector("colgroup");
  n || (n = document.createElement("colgroup"), e.insertBefore(n, e.firstChild));
  const a = n.querySelectorAll("col"), o = a.length;
  if (o < r)
    for (let s = o; s < r; s++) {
      const i = document.createElement("col");
      n.appendChild(i);
    }
  else if (o > r)
    for (let s = o - 1; s >= r; s--)
      n.removeChild(a[s]);
}
function ke(e, t, r) {
  if (!de(e)) return;
  Te(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((l, c) => l + c, 0) : 0, g = a ? a.reduce((l, c) => l + c, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : g > 0 && (e.style.height = `${g}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((u, d) => {
      d < n.length && (u.style.width = `${n[d]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((c, u) => {
    u < a.length && (c.style.height = `${a[u]}px`);
  }), e.style.height = `${g}px`), e.offsetHeight;
}
function ma(e, t = at) {
  if (!de(e)) return null;
  Te(e);
  const r = he(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const g = Gn(i, r, a, e);
    n.appendChild(g);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const g = Zn(i, r, a, e);
    n.appendChild(g);
  }
  const o = Yn(r, a);
  n.appendChild(o);
  const s = Vn(r, a);
  return n.appendChild(s), n;
}
function Gn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = le.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Kn(a, e, t, r, n), a;
}
function Zn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = le.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Xn(a, e, t, r, n), a;
}
function Yn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Jn(r, e, t), r;
}
function Vn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Qn(r, e, t), r;
}
function St(e, t) {
  if (!e || !t) return;
  Te(t);
  const r = he(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let u = 0; u < r.columns - 1; u++) {
      const d = Gn(u, r, n, t);
      e.appendChild(d);
    }
    for (let u = 0; u < r.rows - 1; u++) {
      const d = Zn(u, r, n, t);
      e.appendChild(d);
    }
    const l = Yn(r, n);
    e.appendChild(l);
    const c = Vn(r, n);
    e.appendChild(c);
  } else
    a.forEach((l, c) => {
      Kn(l, c, r, n, t);
    }), o.forEach((l, c) => {
      Xn(l, c, r, n, t);
    }), s && Jn(s, r, n), i && Qn(i, r, n);
}
function Je(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ya(e, t) {
  if (!de(e))
    return console.warn("insertRowAbove: Invalid table element"), null;
  if (t < 0 || t > e.rows.length)
    return console.warn(`insertRowAbove: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowAbove: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let s = 0; s < a; s++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", n.appendChild(i);
  }
  try {
    r.parentNode.insertBefore(n, r);
  } catch (s) {
    return console.error("insertRowAbove: Failed to insert row", s), null;
  }
  Te(e);
  const o = he(e);
  return o && ke(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function ba(e, t) {
  if (!de(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const g = document.createElement("td");
    g.innerHTML = "&nbsp;", n.appendChild(g);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  Te(e);
  const s = he(e);
  return s && ke(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Kn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const g = s.cells[t].getBoundingClientRect(), l = a.getBoundingClientRect(), c = g.right - l.left - 2;
      e.style.left = `${c}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Xn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const g = s.cells[0].getBoundingClientRect(), l = a.getBoundingClientRect(), c = g.bottom - l.top - 2;
      e.style.top = `${c}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function Jn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Qn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function Ta(e, t) {
  if (!de(e))
    return console.warn("insertColumnLeft: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnLeft: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnLeft: Table has no rows"), !1;
  if (t > r[0].cells.length)
    return console.warn(`insertColumnLeft: Column index ${t} out of bounds`), !1;
  try {
    for (const a of r) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;", t < a.cells.length ? a.insertBefore(o, a.cells[t]) : a.appendChild(o);
    }
    Te(e);
    const n = he(e);
    return n && ke(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function va(e, t) {
  if (!de(e))
    return console.warn("insertColumnRight: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnRight: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnRight: Table has no rows"), !1;
  if (t >= r[0].cells.length)
    return console.warn(`insertColumnRight: Column index ${t} out of bounds`), !1;
  try {
    for (const a of r) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;";
      const s = a.cells[t + 1];
      s ? a.insertBefore(o, s) : a.appendChild(o);
    }
    Te(e);
    const n = he(e);
    return n && ke(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function wa(e, t) {
  if (!de(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), Te(e);
    const n = he(e);
    return n && ke(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function Ea(e, t) {
  if (!de(e))
    return console.warn("deleteColumn: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`deleteColumn: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("deleteColumn: Table has no rows"), !1;
  if (t >= r[0].cells.length)
    return console.warn(`deleteColumn: Column index ${t} out of bounds`), !1;
  if (r[0].cells.length <= 1)
    return console.warn("deleteColumn: Cannot delete the last column in the table"), !1;
  try {
    for (const a of r)
      a.cells.length > t && a.removeChild(a.cells[t]);
    Te(e);
    const n = he(e);
    return n && ke(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
const zt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = at
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(null), c = ee(a), u = ee(!1), [d, T] = oe(null), b = xe();
  ae(() => {
    c.current = a;
  }, [a]);
  const v = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Je(o.current), o.current = null), T(null), i.current = null, g.current = null, l.current = null, u.current = !1, n && n();
  }, [n]), A = k((R) => {
    if (R.preventDefault(), R.stopPropagation(), !s.current) return;
    const j = R.currentTarget, q = j.dataset.type, U = parseInt(j.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const B = he(s.current);
    i.current = {
      x: R.clientX,
      y: R.clientY,
      structure: { ...B }
    }, g.current = q, l.current = U, u.current = !0, document.body.classList.add("table-resize-in-progress");
    const x = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = x[q] || "default", document.addEventListener("mousemove", P), document.addEventListener("mouseup", h);
  }, []), $ = k((R) => {
    const j = ma(R, c.current);
    return j && (o.current = j, s.current = R, document.body.appendChild(j), j.querySelectorAll(".table-resize-handler").forEach((U) => {
      U.addEventListener("mousedown", A);
    })), j;
  }, [A]), L = k((R) => {
    if (!de(R)) return;
    o.current && (Je(o.current), o.current = null), R.classList.add("selected"), $(R) && (T(R), r && r(R));
  }, [r, $]), P = k((R) => {
    if (!u.current || !s.current || !i.current || !g.current) return;
    R.preventDefault(), R.stopPropagation();
    const { x: j, y: q, structure: U } = i.current, B = g.current, x = l.current, S = R.clientX, C = R.clientY;
    let _ = 0;
    switch (B) {
      case le.COLUMN:
        _ = S - j;
        break;
      case le.ROW:
        _ = C - q;
        break;
      case le.TABLE_BOTTOM:
        _ = C - q;
        break;
      case le.TABLE_RIGHT:
        _ = S - j;
        break;
    }
    const V = ha({
      type: B,
      index: x,
      delta: _,
      currentStructure: U,
      options: c.current
    });
    ke(s.current, V), o.current && St(o.current, s.current);
  }, []), h = k((R) => {
    if (u.current) {
      if (R.preventDefault(), R.stopPropagation(), s.current && i.current) {
        const j = {
          structure: i.current.structure
        }, q = {
          structure: he(s.current)
        };
        (j.structure.width !== q.structure.width || j.structure.height !== q.structure.height || JSON.stringify(j.structure.columnWidths) !== JSON.stringify(q.structure.columnWidths) || JSON.stringify(j.structure.rowHeights) !== JSON.stringify(q.structure.rowHeights)) && b.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: q } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: j } }
        );
      }
      if (i.current = null, g.current = null, l.current = null, u.current = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(j), t && t(s.current, he(s.current));
      }
    }
  }, [t, b]), p = k((R) => {
    o.current && !o.current.contains(R.target) && v();
    const q = R.target.closest("table");
    if (q && de(q)) {
      if (q === s.current)
        return;
      L(q);
    }
  }, [L, v]), y = k((R) => {
    if (R.key === "Delete" && s.current && !u.current) {
      R.preventDefault();
      const j = s.current;
      if (j.parentNode) {
        j.parentNode.removeChild(j), v();
        const q = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(q);
      }
    }
    R.key === "Escape" && s.current && v();
  }, [e, v]), I = k(() => {
    o.current && s.current && St(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const j = e.current.closest(".editor-viewport");
    return j && (j.addEventListener("scroll", I), window.addEventListener("scroll", I)), () => {
      j && j.removeEventListener("scroll", I), window.removeEventListener("scroll", I);
    };
  }, [e, I]), ae(() => {
    if (!e.current) return;
    const R = e.current;
    return R.addEventListener("click", p), R.addEventListener("keydown", y), window.addEventListener("resize", I), () => {
      R.removeEventListener("click", p), R.removeEventListener("keydown", y), window.removeEventListener("resize", I), u.current && (document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Je(o.current);
    };
  }, [e, p, y, I, P, h]), ae(() => {
    if (!e.current) return;
    const R = new MutationObserver((j) => {
      j.forEach((q) => {
        q.type === "childList" && (q.removedNodes.forEach((U) => {
          U.nodeType === Node.ELEMENT_NODE && de(U) && U === d && v();
        }), q.addedNodes.forEach((U) => {
          if (U.nodeType !== Node.ELEMENT_NODE) return;
          if (de(U)) {
            setTimeout(() => L(U), 50);
            return;
          }
          const B = U.querySelectorAll?.("table") || [];
          B.length > 0 && setTimeout(() => L(B[0]), 50);
        }));
      });
    });
    return R.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => R.disconnect();
  }, [e, v, L]), ae(() => {
    if (!d) return;
    const R = new MutationObserver((j) => {
      j.some((U) => {
        if (U.type === "childList") {
          if ([...U.addedNodes, ...U.removedNodes].some(
            (x) => x.nodeType === Node.ELEMENT_NODE && x.tagName === "TR"
          )) return !0;
        } else if (U.type === "attributes" && ["colspan", "rowspan"].includes(U.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (Je(o.current), o.current = null, $(s.current));
    });
    return R.observe(d, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => R.disconnect();
  }, [d, $]), null;
};
zt.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: w.func,
  onTableSelect: w.func,
  onTableDeselect: w.func,
  resizeOptions: w.shape({
    minColumnWidth: w.number,
    minRowHeight: w.number,
    maxColumnWidth: w.number,
    maxRowHeight: w.number,
    tableMinWidth: w.number,
    tableMinHeight: w.number,
    tableMaxWidth: w.number,
    tableMaxHeight: w.number
  })
};
zt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: at
};
const $t = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [c, u] = oe("top"), d = ee(null), T = ee(null), b = xe(), v = (C) => {
    if (!C)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (V) => setTimeout(V, 16))(() => {
      const V = document.querySelector(".table-resize-overlay");
      V && St(V, C);
    });
  }, A = (C) => {
    if (!C) return null;
    const _ = window.getComputedStyle(C);
    return {
      float: _.float || "none",
      margin: C.style.margin || "",
      marginLeft: C.style.marginLeft || "",
      marginRight: C.style.marginRight || "",
      display: _.display || "table"
    };
  }, $ = k(() => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.marginLeft === "auto" && C.marginRight === "auto" ? "center" : C.float === "right" ? "right" : (C.float === "left", "left");
  }, [e]), [L, P] = oe("left");
  ae(() => {
    e && P($());
  }, [e, $]);
  const h = k(() => {
    if (!e || !d.current) return;
    const C = e.getBoundingClientRect(), _ = d.current.getBoundingClientRect(), V = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, te = C.bottom >= 0 && C.top <= V.height && C.right >= 0 && C.left <= V.width;
    let ie = "top", E = 0, f = 0;
    if (te) {
      const G = C.top - _.height - 10, z = V.height - C.bottom - _.height - 10;
      z > G && z > 0 ? (ie = "bottom", E = C.bottom + 10) : (ie = "top", E = C.top - _.height - 10);
    } else
      ie = "top", E = 10;
    f = C.left + C.width / 2 - _.width / 2;
    const O = window.innerWidth, H = window.innerHeight;
    let M = Math.max(10, Math.min(f, O - _.width - 10)), Z = Math.max(10, Math.min(E, H - _.height - 10));
    i({ top: Z, left: M }), u(ie), l(!0);
  }, [e]);
  wn(() => {
    h();
    const C = () => {
      h();
    }, _ = T.current;
    return _ && _.addEventListener("scroll", C), window.addEventListener("scroll", C), window.addEventListener("resize", C), () => {
      _ && _.removeEventListener("scroll", C), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), l(!1);
    };
  }, [e, h]), ae(() => {
    const C = (_) => {
      d.current && !d.current.contains(_.target) && _.target !== e && !e.contains(_.target) && r();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, r]);
  const p = {
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
  }, y = (C) => {
    if (e && p[C]) {
      const _ = A(e), V = L, te = p[C];
      e.style.float = te.float, e.style.margin = te.margin, e.style.marginLeft = te.marginLeft, e.style.marginRight = te.marginRight, P(C), v(e);
      const ie = A(e);
      b.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: C, state: ie } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: V, state: _ } }
      ), t && t(C);
    }
  }, I = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const C = ya(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row above");
  }, R = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const C = ba(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row below");
  }, j = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), Ta(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column left");
  }, q = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), va(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column right");
  }, U = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), wa(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to delete row");
  }, B = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), Ea(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to delete column");
  }, x = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, S = (C) => ({
    ...x,
    background: C ? "#007bff" : "transparent",
    color: C ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: d,
        className: "table-tooltip-menu",
        "data-menu-position": c,
        "aria-hidden": !g,
        style: {
          position: "fixed",
          top: `${s.top}px`,
          left: `${s.left}px`,
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
          minWidth: "100px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${L === "left" ? "active" : ""}`,
              onClick: () => y("left"),
              title: "Align Left",
              style: S(L === "left"),
              children: /* @__PURE__ */ m.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${L === "center" ? "active" : ""}`,
              onClick: () => y("center"),
              title: "Align Center",
              style: S(L === "center"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${L === "right" ? "active" : ""}`,
              onClick: () => y("right"),
              title: "Align Right",
              style: S(L === "right"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: I,
                title: "Insert Row Above",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(Bo, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: R,
                title: "Insert Row Below",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(Mo, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: U,
                title: "Delete Row",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: j,
                title: "Insert Column Left",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Io, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: q,
                title: "Insert Column Right",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Do, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: B,
                title: "Delete Column",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
$t.propTypes = {
  tableElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onClose: w.func.isRequired,
  selectedRowIndex: w.number,
  selectedColIndex: w.number,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
$t.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Ft = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = oe(/* @__PURE__ */ new Set()), [a, o] = oe(null), [s, i] = oe(null), [g, l] = oe(null), [c, u] = oe(!1), [d, T] = oe(!1), [b, v] = oe(null), [A, $] = oe(null);
  xe(), ee(null);
  const L = ee(null), P = k(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), l(null), v(null), $(null), u(!1), T(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((B) => {
      B.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), L.current !== null && (L.current = null, t && t(null));
  }, [t]), h = k((B) => {
    const x = B.closest("tr"), S = B.closest("table");
    if (!x || !S) return null;
    const C = Array.from(S.rows).indexOf(x), _ = Array.from(x.cells).indexOf(B);
    return { rowIndex: C, cellIndex: _, table: S };
  }, []), p = k((B) => {
    if (B.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const x = Array.from(B), S = x[0], C = h(S);
    if (!C) return { mode: null, rowIndex: null, colIndex: null };
    const { table: _ } = C;
    return x.filter((ie) => {
      const E = h(ie);
      return E && E.table === _ && E.rowIndex === C.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: C.rowIndex, colIndex: null } : x.filter((ie) => {
      const E = h(ie);
      return E && E.table === _ && E.cellIndex === C.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: C.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [h]), y = k((B, x, S, C, _) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((V) => {
      V.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!_ || !B)) {
      if (B === "row" && x !== null) {
        const V = _.rows[x];
        V && Array.from(V.cells).forEach((te) => {
          te.classList.add("table-row-selected");
        });
      } else B === "column" && S !== null ? Array.from(_.rows).forEach((V) => {
        const te = V.cells[S];
        te && te.classList.add("table-col-selected");
      }) : B === "cells" && C.forEach((V) => {
        V.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), I = k((B, x) => {
    const S = p(B);
    n(B), o(S.mode), i(S.rowIndex), l(S.colIndex), $(x), y(S.mode, S.rowIndex, S.colIndex, B, x);
    const C = S.mode ? {
      mode: S.mode,
      cells: B,
      rowIndex: S.rowIndex,
      colIndex: S.colIndex,
      table: x
    } : null;
    JSON.stringify(L.current) !== JSON.stringify(C) && (L.current = C, t && t(C));
  }, [p, y, t]), R = k((B) => {
    const x = B.target.closest("td, th");
    if (!x) return;
    const S = h(x);
    S && (u(!0), v(x), $(S.table), T(!1));
  }, [h]), j = k((B) => {
    if (!c || !b) return;
    const x = B.target.closest("td, th");
    if (!x || !A || !A.contains(x)) return;
    T(!0), B.preventDefault();
    const S = h(b), C = h(x);
    if (!S || !C || S.table !== C.table) return;
    const _ = Math.min(S.rowIndex, C.rowIndex), V = Math.max(S.rowIndex, C.rowIndex), te = Math.min(S.cellIndex, C.cellIndex), ie = Math.max(S.cellIndex, C.cellIndex), E = /* @__PURE__ */ new Set();
    for (let f = _; f <= V; f++) {
      const O = A.rows[f];
      if (O)
        for (let H = te; H <= ie; H++) {
          const M = O.cells[H];
          M && E.add(M);
        }
    }
    I(E, A);
  }, [c, h]), q = k(() => {
    d || P(), u(!1), v(null);
  }, [d, P]), U = k((B) => {
    const x = B.target.closest("td, th"), S = B.target.closest("table");
    if (!(x && A && A.contains(x))) {
      if (S && S !== A) {
        P();
        return;
      }
      S || P();
    }
  }, [P, A]);
  return ae(() => {
    if (!e.current) return;
    const B = e.current, x = (C) => {
      C.target.closest("td, th") && R(C);
    }, S = (C) => {
      C.target.closest("td, th") && j(C);
    };
    return B.addEventListener("mousedown", x, !0), B.addEventListener("mouseenter", S, !0), document.addEventListener("mouseup", q), document.addEventListener("click", U), () => {
      B.removeEventListener("mousedown", x, !0), B.removeEventListener("mouseenter", S, !0), document.removeEventListener("mouseup", q), document.removeEventListener("click", U);
    };
  }, [e, R, j, q, U]), ae(() => {
    if (!e.current) return;
    const B = new MutationObserver((x) => {
      x.forEach((S) => {
        S.type === "childList" && A && !e.current.contains(A) && P();
      });
    });
    return B.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => B.disconnect();
  }, [e, P]), null;
};
Ft.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: w.func
};
Ft.defaultProps = {
  onCellSelectionChange: void 0
};
const xa = 50, Qe = 50, Ca = 50, Aa = 100, Ra = 300, Ut = Ot(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: l = !0
}, c) => {
  const u = On(), d = xe(), { pageSize: T, pageMargins: b, continuousContent: v, pageBoundaries: A, activePage: $, zoomLevel: L, canUndo: P, canRedo: h } = u, p = ee(null), y = ee(null), { currentFormat: I, formatText: R, updateCurrentFormatFromSelection: j } = zr(), [q, U] = oe(!1), [B, x] = oe(null), [S, C] = oe(!0), [_, V] = oe(!1), [te, ie] = oe(null), [E, f] = oe(null), [O, H] = oe(null), M = ee(null), {
    checkAndUpdateBoundaries: Z,
    getCurrentPage: G,
    scrollToPage: z,
    updateBoundaries: W,
    triggerAutoReflow: X,
    removePageAndContent: Q,
    removePageBreak: ce,
    insertPageBreakAtBoundary: D
  } = lo(T, y, L, b), fe = we(() => _t(T), [T]), [_e, ze] = oe(!1), Ce = ee(null), $e = ee(!1), Fe = ee(!1), it = ee(!1), Ae = ee(v);
  ae(() => {
    if (y.current) {
      if (!it.current) {
        y.current.innerHTML = v, it.current = !0, Ae.current = v;
        const N = setTimeout(() => {
          W();
        }, xa);
        return () => clearTimeout(N);
      }
      if (Ae.current !== v) {
        if (y.current.innerHTML !== v) {
          y.current.innerHTML = v;
          const K = setTimeout(() => {
            W(), $e.current && qt();
          }, Qe);
          return Ae.current = v, () => clearTimeout(K);
        }
        Ae.current = v;
      }
    }
  }, [v, W, A.length, d, z]), ae(() => {
    s && it.current && s(v);
  }, [v, s]);
  const Wt = we(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y.current ? y.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (y.current ? y.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => y.current ? io(y.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (N) => {
      const K = tt(N);
      K !== v && d.updateContinuousContent(K), y.current && y.current.innerHTML !== K && (y.current.innerHTML = K), Ae.current = K, y.current && setTimeout(() => {
        W();
      }, Qe);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (N) => {
      if (!y.current || !N) return;
      const K = tt(N), se = window.getSelection();
      let ue = !1;
      if (se && se.rangeCount > 0) {
        const ye = se.getRangeAt(0);
        y.current.contains(ye.commonAncestorContainer) && (ue = !0);
      }
      if (!ue && M.current)
        try {
          se.removeAllRanges(), se.addRange(M.current);
        } catch (ye) {
          console.warn("[insertContent] Failed to restore last cursor position:", ye);
          const me = y.current.lastChild;
          if (me) {
            const Ge = document.createRange();
            me.nodeType === Node.TEXT_NODE ? Ge.setStart(me, me.textContent.length) : Ge.setStartAfter(me), Ge.collapse(!0), se.removeAllRanges(), se.addRange(Ge);
          }
        }
      document.execCommand("insertHTML", !1, K);
      const pe = y.current.innerHTML;
      d.updateContinuousContent(pe), Ae.current = pe, setTimeout(() => {
        W(), X(200);
      }, Qe);
    }
  }), [v, d, W, y, M, Z]);
  yr(c, () => Wt, [Wt]), ae(() => {
    const N = () => {
      if (j(), y.current) {
        const se = window.getSelection();
        if (se.rangeCount > 0) {
          const ue = se.getRangeAt(0);
          ue.collapsed && y.current.contains(ue.commonAncestorContainer) && (M.current = ue.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", N);
    const K = () => {
      if (setTimeout(j, 10), M.current && y.current)
        try {
          const se = window.getSelection();
          se.removeAllRanges(), se.addRange(M.current);
        } catch (se) {
          console.warn("[handleFocus] Failed to restore cursor:", se);
        }
    };
    return y.current && y.current.addEventListener("focus", K), () => {
      document.removeEventListener("selectionchange", N), y.current && y.current.removeEventListener("focus", K);
    };
  }, [j]);
  const qt = k(() => {
    $e.current = !1;
    const N = Math.max(0, A.length - 1);
    d.setActivePage(N), setTimeout(() => {
      z(N, p);
    }, Ca);
  }, [A.length, d, z]), ct = k(() => {
    if (!y.current) return;
    let N = y.current.innerHTML;
    N = tt(N), N !== y.current.innerHTML && (y.current.innerHTML = N);
    const K = v;
    if (K !== N) {
      const ue = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: N
      }, pe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: K
      };
      d.recordOperation(ue, pe);
    }
    d.updateContinuousContent(N), Z(), X(200);
    const se = G(p);
    se !== $ && d.setActivePage(se);
  }, [d, Z, G, $, X, p, y, v]), tr = k((N) => {
    ct();
  }, [ct]), Gt = k((N) => {
    d.updatePageSize(N), W({ pageSize: N }), a && a(N);
  }, [d, W, a]), Zt = k((N) => {
    d.updatePageMargins(N), W({ pageMargins: N }), o && o(N);
  }, [d, W, o]), Yt = k((N) => {
    N < 0 || N >= A.length || (Fe.current = !0, d.setActivePage(N), z(N, p), setTimeout(() => {
      Fe.current = !1;
    }, Ra), t && t(N));
  }, [d, z, t, A.length]), Vt = k(() => {
    const N = A.length + 1;
    D(N) && ($e.current = !0, setTimeout(() => {
      $e.current && qt();
    }, 100)), r && r();
  }, [A.length, D, d, z, r]), nr = k(() => {
    const N = window.getSelection();
    if (N && N.rangeCount > 0) {
      if (!y?.current) return;
      const ue = `<page-break data-page-break="true" contenteditable="false" data-page-number="${y.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ue), setTimeout(() => {
        W();
        const pe = G(p);
        d.setActivePage(pe);
      }, 150);
    }
  }, [W, G, d, p]), rr = k((N) => {
    if (!y.current || !N) return;
    const K = window.getSelection();
    let se = !1;
    if (K && K.rangeCount > 0) {
      const pe = K.getRangeAt(0);
      y.current.contains(pe.commonAncestorContainer) && (se = !0);
    }
    if (!se && M.current)
      try {
        K.removeAllRanges(), K.addRange(M.current);
      } catch (pe) {
        console.warn("[handleInsertImage] Failed to restore last cursor position:", pe);
        const ye = y.current.lastChild;
        if (ye) {
          const me = document.createRange();
          ye.nodeType === Node.TEXT_NODE ? me.setStart(ye, ye.textContent.length) : me.setStartAfter(ye), me.collapse(!0), K.removeAllRanges(), K.addRange(me);
        }
      }
    document.execCommand("insertHTML", !1, N);
    const ue = y.current.innerHTML;
    d.updateContinuousContent(ue), Ae.current = ue, setTimeout(() => {
      W(), X(200);
    }, Qe);
  }, [d, W, X, y, M]), or = k((N) => {
    if (!N) return;
    ce(N) && setTimeout(() => {
      const se = G(p);
      d.setActivePage(se);
    }, 200);
  }, [ce, G, d, p]), Kt = k((N) => {
    if (A.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Q(N) && (d.setActivePage(0), n && n(N));
  }, [A.length, Q, d, n]), Ue = k(() => {
    d.zoomIn();
  }, [d]), We = k(() => {
    d.zoomOut();
  }, [d]), qe = k(() => {
    d.resetZoom();
  }, [d]), Xt = k(() => {
    d.undo();
  }, [d]), Jt = k(() => {
    d.redo();
  }, [d]);
  ae(() => {
    const N = (K) => {
      if (K.ctrlKey || K.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(K.key) && K.preventDefault();
        const se = document.activeElement === y.current, ue = document.activeElement === p.current, pe = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (se || ue || !pe)
          switch (K.key) {
            case "+":
            case "=":
              Ue();
              break;
            case "-":
            case "_":
              We();
              break;
            case "0":
              qe();
              break;
            case "z":
              K.shiftKey || Xt();
              break;
            case "y":
              Jt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", N), () => {
      window.removeEventListener("keydown", N);
    };
  }, [Ue, We, qe, Xt, Jt]);
  const sr = k(() => {
    !p.current || !y.current || Fe.current || (Ce.current && clearTimeout(Ce.current), Ce.current = setTimeout(() => {
      if (Fe.current) {
        Ce.current = null;
        return;
      }
      const N = G(p);
      N !== $ && N >= 0 && d.setActivePage(N), Ce.current = null;
    }, Aa));
  }, [G, $, d]), ar = we(() => {
    if (!v) return 0;
    const K = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return K ? K.length : 0;
  }, [v]), ir = A.length || 1, cr = k((N) => {
    U(!0), x(N);
  }, []), Qt = k(() => {
    U(!1), x(null);
  }, []), lr = k((N, K) => {
  }, []), ur = k((N) => {
    N && N.mode === "row" ? (f(N.rowIndex), H(null)) : N && N.mode === "column" ? (H(N.colIndex), f(null)) : (f(null), H(null));
  }, []), dr = k((N) => {
    V(!0), ie(N);
  }, []), en = k(() => {
    V(!1), ie(null);
  }, []), fr = k((N, K) => {
  }, []);
  return ae(() => () => {
    Ce.current && clearTimeout(Ce.current);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ m.jsx(
      It,
      {
        currentFormat: {
          ...I,
          imageSelected: q
        },
        onFormatText: R,
        onAddPageBreak: nr,
        onInsertImage: rr,
        canUndo: P,
        canRedo: h
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ m.jsx(
        Vs,
        {
          editorView: null,
          isCollapsed: _e,
          onToggle: () => ze((N) => !N),
          wordCount: ar,
          pageCount: ir
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: sr,
          children: /* @__PURE__ */ m.jsx(
            la,
            {
              content: v,
              dimensions: fe,
              pageSize: T,
              pageMargins: b,
              pageBoundaries: A,
              editorRef: y,
              onInput: tr,
              onContentChange: ct,
              onClick: () => y.current?.focus(),
              onRemovePageBreak: or,
              zoomLevel: L
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        jt,
        {
          editorRef: y,
          onImageSelect: cr,
          onImageDeselect: Qt,
          onImageResize: lr,
          resizeOptions: {
            ...Pe,
            preserveAspectRatio: S,
            aspectRatio: S
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        zt,
        {
          editorRef: y,
          onTableSelect: dr,
          onTableDeselect: en,
          onTableResize: fr
        }
      ),
      /* @__PURE__ */ m.jsx(
        Ft,
        {
          editorRef: y,
          onCellSelectionChange: ur
        }
      ),
      q && B && /* @__PURE__ */ m.jsx(
        Bt,
        {
          imageElement: B,
          initialPreserveAspectRatio: S,
          onAlignChange: (N) => {
          },
          onAspectRatioToggle: (N) => {
            C(N);
          },
          onDelete: () => {
            if (B) {
              const N = B.getAttribute("data-key");
              N && bo(N).catch((K) => {
                console.error("Failed to delete image from IndexedDB:", K);
              });
            }
          },
          onClose: Qt
        }
      ),
      _ && te && /* @__PURE__ */ m.jsx(
        $t,
        {
          tableElement: te,
          onAlignChange: (N) => {
          },
          onClose: en,
          selectedRowIndex: E,
          selectedColIndex: O,
          editorRef: y
        }
      ),
      l && /* @__PURE__ */ m.jsx("div", { className: "page-manager-sidebar", children: e ? ot.cloneElement(e, {
        onNavigate: Yt,
        onAddPage: Vt,
        onDeletePage: Kt,
        onPageSizeChange: Gt,
        onPageMarginsChange: Zt,
        zoomLevel: L,
        canZoomIn: vt(L),
        canZoomOut: wt(L),
        onZoomIn: Ue,
        onZoomOut: We,
        onZoomReset: qe
      }) : /* @__PURE__ */ m.jsx(
        ua,
        {
          pageBoundaries: A,
          activePage: $,
          pageSize: T,
          pageMargins: b,
          zoomLevel: L,
          canZoomIn: vt(L),
          canZoomOut: wt(L),
          onNavigate: Yt,
          onAddPage: Vt,
          onDeletePage: Kt,
          onPageSizeChange: Gt,
          onPageMarginsChange: Zt,
          onZoomIn: Ue,
          onZoomOut: We,
          onZoomReset: qe
        }
      ) })
    ] })
  ] });
});
Ut.displayName = "HtmlEditor";
Ut.propTypes = {
  pageManagerComponent: w.element,
  onNavigatePage: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onChange: w.func,
  showSidebar: w.bool,
  showToolbar: w.bool,
  showPageManager: w.bool
};
Ut.defaultProps = {
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
class er extends ot.Component {
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
er.propTypes = {
  children: w.node.isRequired,
  fallback: w.node,
  onError: w.func,
  onReset: w.func,
  showDetails: w.bool
};
er.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Hr as COMMON_FONT_SIZES,
  Wn as ColorPickerDropdown,
  st as DEFAULT_FONT_SIZE,
  Pe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Cn as DEFAULT_PAGE_SIZE,
  at as DEFAULT_TABLE_RESIZE_OPTIONS,
  Pa as DocumentProvider,
  It as EditorToolbar,
  er as ErrorBoundary,
  Nn as FONT_SIZE_MAP,
  Ut as HtmlEditor,
  jt as ImageResizeHandlers,
  Ne as PAGE_SIZES,
  ua as PageManager,
  la as PageView,
  F as RESIZE_HANDLERS,
  Vs as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  zt as TableResizeHandlers,
  ja as applyImageDimensions,
  ke as applyTableDimensions,
  Ha as calculateResizeDimensions,
  ha as calculateTableResizeDimensions,
  Ba as clearImages,
  uo as createResizeOverlay,
  ma as createTableResizeOverlay,
  bo as deleteImage,
  za as getAllImageKeys,
  Na as getAvailablePageSizes,
  yo as getImage,
  Da as getImageDimensions,
  _t as getPageDimensions,
  Ma as getPixelValue,
  La as getPointValue,
  he as getTableStructure,
  ve as isResizableImage,
  de as isResizableTable,
  Ia as isValidFontSize,
  _a as isValidPageSize,
  Ks as logger,
  jr as pixelsToPoints,
  Dr as pointsToPixels,
  ht as removeResizeOverlay,
  Je as removeTableResizeOverlay,
  mo as saveImage,
  Ct as updateResizeOverlay,
  St as updateTableResizeOverlay,
  lo as useContinuousReflow,
  Sn as useDocument,
  xe as useDocumentActions,
  On as useDocumentState,
  zr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
