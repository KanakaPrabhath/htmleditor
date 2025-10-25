import tt, { createContext as ur, useContext as dr, useReducer as fr, useMemo as ve, useState as se, useCallback as k, useRef as ee, useEffect as ae, forwardRef as St, createElement as ht, memo as pr, useLayoutEffect as wn, useImperativeHandle as gr } from "react";
import { v4 as _t } from "uuid";
import { createPortal as En } from "react-dom";
function hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var We = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function mr() {
  if (en) return Pe;
  en = 1;
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
  return Pe.Fragment = t, Pe.jsx = r, Pe.jsxs = r, Pe;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function yr() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === P ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case C:
          return "Fragment";
        case D:
          return "Profiler";
        case j:
          return "StrictMode";
        case m:
          return "Suspense";
        case M:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case w:
            return "Portal";
          case y:
            return f.displayName || "Context";
          case N:
            return (f._context.displayName || "Context") + ".Consumer";
          case g:
            var R = f.render;
            return f = f.displayName, f || (f = R.displayName || R.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case S:
            return R = f.displayName || null, R !== null ? R : e(f.type) || "Memo";
          case z:
            R = f._payload, f = f._init;
            try {
              return e(f(R));
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
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var H = R.error, L = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return H.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(f);
      }
    }
    function n(f) {
      if (f === C) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === z)
        return "<...>";
      try {
        var R = e(f);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var f = U.A;
      return f === null ? null : f.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(f) {
      if (v.call(f, "key")) {
        var R = Object.getOwnPropertyDescriptor(f, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, R) {
      function H() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: H,
        configurable: !0
      });
    }
    function p() {
      var f = e(this.type);
      return V[f] || (V[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function u(f, R, H, L, Z, W) {
      var $ = H.ref;
      return f = {
        $$typeof: b,
        type: f,
        key: R,
        props: H,
        _owner: L
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
        value: Z
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, R, H, L, Z, W) {
      var $ = R.children;
      if ($ !== void 0)
        if (L)
          if (B($)) {
            for (L = 0; L < $.length; L++)
              c($[L]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c($);
      if (v.call(R, "key")) {
        $ = e(f);
        var G = Object.keys(R).filter(function(X) {
          return X !== "key";
        });
        L = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", E[$ + L] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          $,
          G,
          $
        ), E[$ + L] = !0);
      }
      if ($ = null, H !== void 0 && (r(H), $ = "" + H), s(R) && (r(R.key), $ = "" + R.key), "key" in R) {
        H = {};
        for (var K in R)
          K !== "key" && (H[K] = R[K]);
      } else H = R;
      return $ && i(
        H,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), u(
        f,
        $,
        H,
        a(),
        Z,
        W
      );
    }
    function c(f) {
      l(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === z && (f._payload.status === "fulfilled" ? l(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function l(f) {
      return typeof f == "object" && f !== null && f.$$typeof === b;
    }
    var x = tt, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), y = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), U = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, B = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var O, V = {}, oe = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), te = A(n(o)), E = {};
    Ne.Fragment = C, Ne.jsx = function(f, R, H) {
      var L = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        f,
        R,
        H,
        !1,
        L ? Error("react-stack-top-frame") : oe,
        L ? A(n(f)) : te
      );
    }, Ne.jsxs = function(f, R, H) {
      var L = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        f,
        R,
        H,
        !0,
        L ? Error("react-stack-top-frame") : oe,
        L ? A(n(f)) : te
      );
    };
  })()), Ne;
}
var nn;
function br() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? We.exports = mr() : We.exports = yr()), We.exports;
}
var h = br();
const mt = 100, yt = 50, bt = 200, rn = 5, vt = (e) => e < bt, Tt = (e) => e > yt, vr = 96, Ge = (e) => Math.round(e * vr), Je = {
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
}, he = "NORMAL", xn = (e = he) => {
  const t = Je[e] || Je[he];
  return {
    top: Ge(t.top),
    bottom: Ge(t.bottom),
    left: Ge(t.left),
    right: Ge(t.right)
  };
}, Tr = (e = he) => {
  const t = xn(e);
  return t.top + t.bottom;
}, wr = () => Object.keys(Je), Er = (e) => {
  const t = Je[e];
  return t ? t.label : "Unknown";
}, _e = {
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
}, An = "A4", Ot = (e) => {
  const t = _e[e] || _e[An];
  return {
    width: t.width,
    height: t.height
  };
}, Aa = (e) => Object.keys(_e).includes(e), Ca = () => Object.keys(_e), Ie = An, Ae = "<p><br></p>", xr = "continuous", Me = (e, t = Ie) => ({
  id: _t(),
  index: e,
  size: t,
  content: Ae,
  images: [],
  isBreakPoint: !1
}), Ke = (e) => typeof e != "string" || e.trim() === "" ? Ae : e, Cn = (e, t = Ie) => (e.length > 0 ? e : [Me(0, t)]).map((n, a) => ({
  id: n.id || _t(),
  index: a,
  size: n.size || t,
  content: Ke(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Ar = (e = Ie) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Ot(e).height
}], qe = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), wt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Ie, n = Cn(e.pages || [Me(0, r)], r);
  return {
    id: _t(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || xr,
    continuousContent: e.continuousContent || Ae,
    pageBoundaries: e.pageBoundaries || Ar(r),
    zoomLevel: e.zoomLevel || mt,
    pageMargins: e.pageMargins || he,
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
}, Et = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Y.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ae, pageSize: a = Ie } = t.payload || {}, o = { ...Me(0, a), content: Ke(n) };
      return wt({
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
        content: Ke(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Y.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Cn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : qe(a);
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
      a.splice(n, 0, Me(n, e.pageSize));
      const o = a.map((i, p) => ({
        ...i,
        index: p,
        size: e.pageSize
      })), s = qe(o);
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
      const o = a.map((p, u) => ({
        ...p,
        index: u,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = qe(o);
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
        Ot(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = qe(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Y.RESET_DOCUMENT:
      return wt();
    case Y.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ke(t.payload);
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
        const i = s.substring(0, n), p = s.substring(n);
        s = i + o + p;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const p = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && p.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < p.length) {
          const u = p[a], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const c = document.createElement("p");
          c.innerHTML = "<br>", u.parentNode.insertBefore(d, u.nextSibling), d.parentNode.insertBefore(c, d.nextSibling), s = i.innerHTML;
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
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, p) => {
        i.setAttribute("data-page-number", String(p + 2));
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
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Ae).join(`
`) || Ae : e.continuousContent && e.continuousContent !== Ae && (o = [{ ...Me(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Y.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < yt || n > bt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${yt} and ${bt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.ZOOM_IN: {
      if (!vt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.ZOOM_OUT: {
      if (!Tt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Y.RESET_ZOOM:
      return e.zoomLevel === mt ? e : {
        ...e,
        zoomLevel: mt,
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
      return n.inverseOperation && (o = Et(e, n.inverseOperation)), {
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
      return n.operation && (o = Et(e, n.operation)), {
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
}, Rn = ur(null), Ra = ({ children: e, initialState: t = {} }) => {
  const [r, n] = fr(Et, wt(t)), a = ve(() => ({
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
  }), []), o = ve(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ h.jsx(Rn.Provider, { value: o, children: e });
}, Sn = () => {
  const e = dr(Rn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, _n = () => {
  const { state: e } = Sn();
  return e;
}, we = () => {
  const { actions: e } = Sn();
  return e;
};
var Ze = { exports: {} }, Ye = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Cr() {
  if (on) return ne;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function N(g) {
    if (typeof g == "object" && g !== null) {
      var m = g.$$typeof;
      switch (m) {
        case t:
          switch (g = g.type, g) {
            case p:
            case u:
            case n:
            case o:
            case a:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case d:
                case b:
                case x:
                case s:
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
    return N(g) === u;
  }
  return ne.AsyncMode = p, ne.ConcurrentMode = u, ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = d, ne.Fragment = n, ne.Lazy = b, ne.Memo = x, ne.Portal = r, ne.Profiler = o, ne.StrictMode = a, ne.Suspense = c, ne.isAsyncMode = function(g) {
    return y(g) || N(g) === p;
  }, ne.isConcurrentMode = y, ne.isContextConsumer = function(g) {
    return N(g) === i;
  }, ne.isContextProvider = function(g) {
    return N(g) === s;
  }, ne.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ne.isForwardRef = function(g) {
    return N(g) === d;
  }, ne.isFragment = function(g) {
    return N(g) === n;
  }, ne.isLazy = function(g) {
    return N(g) === b;
  }, ne.isMemo = function(g) {
    return N(g) === x;
  }, ne.isPortal = function(g) {
    return N(g) === r;
  }, ne.isProfiler = function(g) {
    return N(g) === o;
  }, ne.isStrictMode = function(g) {
    return N(g) === a;
  }, ne.isSuspense = function(g) {
    return N(g) === c;
  }, ne.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === o || g === a || g === c || g === l || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === x || g.$$typeof === s || g.$$typeof === i || g.$$typeof === d || g.$$typeof === C || g.$$typeof === j || g.$$typeof === D || g.$$typeof === w);
  }, ne.typeOf = N, ne;
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
var sn;
function Rr() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function N(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === u || I === o || I === a || I === c || I === l || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === x || I.$$typeof === s || I.$$typeof === i || I.$$typeof === d || I.$$typeof === C || I.$$typeof === j || I.$$typeof === D || I.$$typeof === w);
    }
    function y(I) {
      if (typeof I == "object" && I !== null) {
        var de = I.$$typeof;
        switch (de) {
          case t:
            var Re = I.type;
            switch (Re) {
              case p:
              case u:
              case n:
              case o:
              case a:
              case c:
                return Re;
              default:
                var He = Re && Re.$$typeof;
                switch (He) {
                  case i:
                  case d:
                  case b:
                  case x:
                  case s:
                    return He;
                  default:
                    return de;
                }
            }
          case r:
            return de;
        }
      }
    }
    var g = p, m = u, M = i, S = s, z = t, q = d, P = n, U = b, v = x, B = r, A = o, O = a, V = c, oe = !1;
    function te(I) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(I) || y(I) === p;
    }
    function E(I) {
      return y(I) === u;
    }
    function f(I) {
      return y(I) === i;
    }
    function R(I) {
      return y(I) === s;
    }
    function H(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function L(I) {
      return y(I) === d;
    }
    function Z(I) {
      return y(I) === n;
    }
    function W(I) {
      return y(I) === b;
    }
    function $(I) {
      return y(I) === x;
    }
    function G(I) {
      return y(I) === r;
    }
    function K(I) {
      return y(I) === o;
    }
    function X(I) {
      return y(I) === a;
    }
    function ce(I) {
      return y(I) === c;
    }
    re.AsyncMode = g, re.ConcurrentMode = m, re.ContextConsumer = M, re.ContextProvider = S, re.Element = z, re.ForwardRef = q, re.Fragment = P, re.Lazy = U, re.Memo = v, re.Portal = B, re.Profiler = A, re.StrictMode = O, re.Suspense = V, re.isAsyncMode = te, re.isConcurrentMode = E, re.isContextConsumer = f, re.isContextProvider = R, re.isElement = H, re.isForwardRef = L, re.isFragment = Z, re.isLazy = W, re.isMemo = $, re.isPortal = G, re.isProfiler = K, re.isStrictMode = X, re.isSuspense = ce, re.isValidElementType = N, re.typeOf = y;
  })()), re;
}
var an;
function On() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Ye.exports = Cr() : Ye.exports = Rr()), Ye.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var it, cn;
function Sr() {
  if (cn) return it;
  cn = 1;
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
      var p = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return it = a() ? Object.assign : function(o, s) {
    for (var i, p = n(o), u, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var c in i)
        t.call(i, c) && (p[c] = i[c]);
      if (e) {
        u = e(i);
        for (var l = 0; l < u.length; l++)
          r.call(i, u[l]) && (p[u[l]] = i[u[l]]);
      }
    }
    return p;
  }, it;
}
var ct, ln;
function kt() {
  if (ln) return ct;
  ln = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ct = e, ct;
}
var lt, un;
function kn() {
  return un || (un = 1, lt = Function.call.bind(Object.prototype.hasOwnProperty)), lt;
}
var ut, dn;
function _r() {
  if (dn) return ut;
  dn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ kt(), r = {}, n = /* @__PURE__ */ kn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, p, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (n(o, d)) {
          var c;
          try {
            if (typeof o[d] != "function") {
              var l = Error(
                (p || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw l.name = "Invariant Violation", l;
            }
            c = o[d](s, d, p, i, null, t);
          } catch (b) {
            c = b;
          }
          if (c && !(c instanceof Error) && e(
            (p || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in r)) {
            r[c.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + i + " type: " + c.message + (x ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ut = a, ut;
}
var dt, fn;
function Or() {
  if (fn) return dt;
  fn = 1;
  var e = On(), t = Sr(), r = /* @__PURE__ */ kt(), n = /* @__PURE__ */ kn(), a = /* @__PURE__ */ _r(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var p = "Warning: " + i;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return dt = function(i, p) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function c(E) {
      var f = E && (u && E[u] || E[d]);
      if (typeof f == "function")
        return f;
    }
    var l = "<<anonymous>>", x = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: D(),
      arrayOf: N,
      element: y(),
      elementType: g(),
      instanceOf: m,
      node: q(),
      objectOf: S,
      oneOf: M,
      oneOfType: z,
      shape: U,
      exact: v
    };
    function b(E, f) {
      return E === f ? E !== 0 || 1 / E === 1 / f : E !== E && f !== f;
    }
    function w(E, f) {
      this.message = E, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function C(E) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, R = 0;
      function H(Z, W, $, G, K, X, ce) {
        if (G = G || l, X = X || $, ce !== r) {
          if (p) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = G + ":" + $;
            !f[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[de] = !0, R++);
          }
        }
        return W[$] == null ? Z ? W[$] === null ? new w("The " + K + " `" + X + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new w("The " + K + " `" + X + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : E(W, $, G, K, X);
      }
      var L = H.bind(null, !1);
      return L.isRequired = H.bind(null, !0), L;
    }
    function j(E) {
      function f(R, H, L, Z, W, $) {
        var G = R[H], K = O(G);
        if (K !== E) {
          var X = V(G);
          return new w(
            "Invalid " + Z + " `" + W + "` of type " + ("`" + X + "` supplied to `" + L + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return C(f);
    }
    function D() {
      return C(s);
    }
    function N(E) {
      function f(R, H, L, Z, W) {
        if (typeof E != "function")
          return new w("Property `" + W + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var $ = R[H];
        if (!Array.isArray($)) {
          var G = O($);
          return new w("Invalid " + Z + " `" + W + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected an array."));
        }
        for (var K = 0; K < $.length; K++) {
          var X = E($, K, L, Z, W + "[" + K + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return C(f);
    }
    function y() {
      function E(f, R, H, L, Z) {
        var W = f[R];
        if (!i(W)) {
          var $ = O(W);
          return new w("Invalid " + L + " `" + Z + "` of type " + ("`" + $ + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(E);
    }
    function g() {
      function E(f, R, H, L, Z) {
        var W = f[R];
        if (!e.isValidElementType(W)) {
          var $ = O(W);
          return new w("Invalid " + L + " `" + Z + "` of type " + ("`" + $ + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(E);
    }
    function m(E) {
      function f(R, H, L, Z, W) {
        if (!(R[H] instanceof E)) {
          var $ = E.name || l, G = te(R[H]);
          return new w("Invalid " + Z + " `" + W + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return C(f);
    }
    function M(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(R, H, L, Z, W) {
        for (var $ = R[H], G = 0; G < E.length; G++)
          if (b($, E[G]))
            return null;
        var K = JSON.stringify(E, function(ce, I) {
          var de = V(I);
          return de === "symbol" ? String(I) : I;
        });
        return new w("Invalid " + Z + " `" + W + "` of value `" + String($) + "` " + ("supplied to `" + L + "`, expected one of " + K + "."));
      }
      return C(f);
    }
    function S(E) {
      function f(R, H, L, Z, W) {
        if (typeof E != "function")
          return new w("Property `" + W + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var $ = R[H], G = O($);
        if (G !== "object")
          return new w("Invalid " + Z + " `" + W + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected an object."));
        for (var K in $)
          if (n($, K)) {
            var X = E($, K, L, Z, W + "." + K, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return C(f);
    }
    function z(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < E.length; f++) {
        var R = E[f];
        if (typeof R != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(R) + " at index " + f + "."
          ), s;
      }
      function H(L, Z, W, $, G) {
        for (var K = [], X = 0; X < E.length; X++) {
          var ce = E[X], I = ce(L, Z, W, $, G, r);
          if (I == null)
            return null;
          I.data && n(I.data, "expectedType") && K.push(I.data.expectedType);
        }
        var de = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new w("Invalid " + $ + " `" + G + "` supplied to " + ("`" + W + "`" + de + "."));
      }
      return C(H);
    }
    function q() {
      function E(f, R, H, L, Z) {
        return B(f[R]) ? null : new w("Invalid " + L + " `" + Z + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return C(E);
    }
    function P(E, f, R, H, L) {
      return new w(
        (E || "React class") + ": " + f + " type `" + R + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function U(E) {
      function f(R, H, L, Z, W) {
        var $ = R[H], G = O($);
        if (G !== "object")
          return new w("Invalid " + Z + " `" + W + "` of type `" + G + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var K in E) {
          var X = E[K];
          if (typeof X != "function")
            return P(L, Z, W, K, V(X));
          var ce = X($, K, L, Z, W + "." + K, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return C(f);
    }
    function v(E) {
      function f(R, H, L, Z, W) {
        var $ = R[H], G = O($);
        if (G !== "object")
          return new w("Invalid " + Z + " `" + W + "` of type `" + G + "` " + ("supplied to `" + L + "`, expected `object`."));
        var K = t({}, R[H], E);
        for (var X in K) {
          var ce = E[X];
          if (n(E, X) && typeof ce != "function")
            return P(L, Z, W, X, V(ce));
          if (!ce)
            return new w(
              "Invalid " + Z + " `" + W + "` key `" + X + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(R[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var I = ce($, X, L, Z, W + "." + X, r);
          if (I)
            return I;
        }
        return null;
      }
      return C(f);
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
          if (E === null || i(E))
            return !0;
          var f = c(E);
          if (f) {
            var R = f.call(E), H;
            if (f !== E.entries) {
              for (; !(H = R.next()).done; )
                if (!B(H.value))
                  return !1;
            } else
              for (; !(H = R.next()).done; ) {
                var L = H.value;
                if (L && !B(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(E, f) {
      return E === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function O(E) {
      var f = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : A(f, E) ? "symbol" : f;
    }
    function V(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var f = O(E);
      if (f === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function oe(E) {
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
    function te(E) {
      return !E.constructor || !E.constructor.name ? l : E.constructor.name;
    }
    return x.checkPropTypes = a, x.resetWarningCache = a.resetWarningCache, x.PropTypes = x, x;
  }, dt;
}
var ft, pn;
function kr() {
  if (pn) return ft;
  pn = 1;
  var e = /* @__PURE__ */ kt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ft = function() {
    function n(s, i, p, u, d, c) {
      if (c !== e) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
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
  }, ft;
}
var gn;
function Pr() {
  if (gn) return Ze.exports;
  if (gn = 1, process.env.NODE_ENV !== "production") {
    var e = On(), t = !0;
    Ze.exports = /* @__PURE__ */ Or()(e.isElement, t);
  } else
    Ze.exports = /* @__PURE__ */ kr()();
  return Ze.exports;
}
var Nr = /* @__PURE__ */ Pr();
const T = /* @__PURE__ */ hr(Nr), Pn = {
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
}, Mr = [
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
], nt = "16px", Lr = (e) => Math.round(e * 96 / 72), Ir = (e) => Math.round(e * 72 / 96 * 2) / 2, Sa = (e) => {
  const t = Object.values(Pn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Lr(e)}px`;
}, _a = (e) => {
  const t = parseInt(e), r = Object.values(Pn).find((n) => n.px === t);
  return r ? r.pt : Ir(t);
}, Oa = (e) => {
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
}, Dr = {
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
}, hn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: nt,
  headingLevel: "p"
  // Add heading level tracking
}, Hr = () => {
  const [e, t] = se(hn), r = we(), n = k((c, l, x = null) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const w = b.getRangeAt(0);
      if (!w.toString())
        return t((j) => ({ ...j, [c]: l })), !1;
      try {
        const j = document.createElement("span");
        j.style[c] = l;
        const D = w.extractContents();
        return j.appendChild(D), w.insertNode(j), w.selectNodeContents(j), b.removeAllRanges(), b.addRange(w), t((N) => ({ ...N, [c]: l })), !0;
      } catch {
        if (x) {
          const j = c === "fontSize" ? Dr[l] || "3" : l;
          return document.execCommand(x, !1, j), t((D) => ({ ...D, [c]: l })), !0;
        }
        return !1;
      }
    } catch (b) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, b), !1;
    }
  }, []), a = k((c) => n("fontFamily", c, "fontName"), [n]), o = k((c) => n("fontSize", c, "fontSize"), [n]), s = k((c) => {
    t((l) => ({
      ...l,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = k((c) => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return !1;
      const x = l.getRangeAt(0), b = x.toString(), C = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!C)
        return !1;
      if (!b) {
        const D = x.startContainer, N = D.nodeType === Node.TEXT_NODE ? D.parentElement : D, y = Qe(N) || Br();
        return y && (y.style.textAlign = C, s(C)), !0;
      }
      const j = jr(x);
      if (j.length === 0) {
        const D = document.createElement("p");
        D.style.textAlign = C;
        const N = x.extractContents();
        D.appendChild(N), x.insertNode(D), x.selectNodeContents(D), l.removeAllRanges(), l.addRange(x);
      } else
        j.forEach((D) => {
          D.style.textAlign = C;
        });
      return s(C), !0;
    } catch (l) {
      return console.warn("[useFormatting] Text alignment failed:", l), !1;
    }
  }, [s]), p = k((c, l = null) => {
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
        o(l);
        return;
      }
      if (c === "fontName") {
        a(l);
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
    } catch (x) {
      console.warn(`[useFormatting] Error executing command "${c}":`, x);
    }
  }, [o, a, i, r]), u = k(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const l = c.getRangeAt(0), x = l.toString();
      let b = nt, w = "Arial", C = "p", j = "left";
      if (x) {
        const N = l.startContainer, y = N.nodeType === Node.TEXT_NODE ? N.parentElement : N;
        if (y) {
          const g = window.getComputedStyle(y), m = g.fontSize, M = g.fontFamily;
          m && m.endsWith("px") && (b = m), M && M !== "serif" && (w = M.split(",")[0].replace(/['"]/g, "").trim());
          const S = Qe(y);
          if (S) {
            const z = S.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(z) && (C = z);
            const P = window.getComputedStyle(S).textAlign;
            ["left", "center", "right", "justify"].includes(P) && (j = P);
          }
        }
      }
      const D = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: j === "left",
        alignCenter: j === "center",
        alignRight: j === "right",
        alignJustify: j === "justify",
        fontFamily: w,
        fontSize: b,
        headingLevel: C
      };
      t((N) => ({
        ...N,
        ...D
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), d = k(() => {
    t(hn);
  }, []);
  return {
    currentFormat: e,
    formatText: p,
    resetFormat: d,
    updateCurrentFormatFromSelection: u
  };
};
function Qe(e) {
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
function jr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = Qe(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = Qe(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (p) => {
        const u = p.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(u) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function Br() {
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
const Te = 'page-break, [data-page-break="true"]', Nn = (e) => _e[e] || _e.A4, zr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Nn(r), a = e.querySelectorAll(Te), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((p, u) => {
    const c = p.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${u + 1}`,
      pageNumber: u + 2,
      top: c,
      height: n.height
    });
  }), o;
}, Mn = (e, t = 100, r = he) => {
  const n = Nn(e), a = Tr(r), o = n.height - a, s = t / 100;
  return o / s;
}, $r = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(Te);
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
}, mn = (e) => {
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
}, Ur = (e) => {
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
}, Fr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, Wr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const p = Mn(r, n, a) * (t - 1), u = Array.from(e.children);
    let d = 0, c = null;
    for (let l = 0; l < u.length; l++) {
      const x = u[l];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const b = Ur(x);
      if (d + b > p) {
        c = x;
        break;
      }
      d += b;
    }
    if (c) {
      const l = document.createElement("page-break");
      if (l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(l, c), o) {
        const x = e.innerHTML;
        o(x);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const l = document.createElement("page-break");
      l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", String(t)), e.appendChild(l);
      const x = document.createElement("p");
      if (x.innerHTML = "<br>", e.appendChild(x), o) {
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
}, Gr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const p = Array.from(e.querySelectorAll(Te));
    if (t > p.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const u = window.getSelection();
    let d = !1, c = [], l = null;
    if (t === 0) {
      const b = p[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let w = e.firstChild;
      for (; w && w !== b; )
        c.push(w), w = w.nextSibling;
      l = b;
    } else {
      const b = p[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const w = p[t];
      let C = b.nextSibling;
      for (; C && C !== w; )
        c.push(C), C = C.nextSibling;
      l = b;
    }
    if (u && u.rangeCount > 0) {
      const w = u.getRangeAt(0).startContainer;
      for (const C of c)
        if (C.contains(w) || C === w) {
          d = !0;
          break;
        }
    }
    if (l && l.parentNode && l.remove(), c.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(Te).forEach((b, w) => {
      b.setAttribute("data-page-number", String(w + 2));
    }), d && o && setTimeout(() => {
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
  } catch (p) {
    return console.error("[removePageAndContent] Failed to remove page:", p), !1;
  }
}, qr = (e) => {
  if (e)
    try {
      e.querySelectorAll(Te).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Zr = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), qr(t), r) {
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
}, Yr = 200, Vr = 50, yn = 3, Kr = 20, Ln = (e) => {
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
}, Xr = (e, t) => {
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
}, Jr = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const p = Mn(t, r, n);
    let u = mn(e), d = !1, c = 0;
    for (let l = 0; l < u.length && c < yn; l++) {
      const x = u[l], b = Xr(x, p);
      if (b && b.overflowIndex > 0) {
        let w = 0;
        for (let N = 0; N < x.length; N++) {
          const y = x[N];
          y && y.getBoundingClientRect && (w += Ln(y));
        }
        if (w - p < Kr)
          continue;
        const j = l + 2;
        Fr(b.overflowElement, j) && (d = !0, c++, u = mn(e));
      }
    }
    if (d) {
      if (a) {
        const l = e.innerHTML;
        a(l);
      }
      setTimeout(() => {
        o && o(), c >= yn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Vr);
    }
    return d;
  } catch (p) {
    return console.warn("[checkAndReflow] Reflow failed:", p), !1;
  } finally {
    s.current = !1;
  }
}, Qr = (e, t, r = Yr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, eo = 400, In = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(Te)[t - 1];
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
}, to = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(Te)[r - 1];
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
      }, eo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, no = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, ro = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(Te);
  for (const d of a)
    if (r.comparePoint(d, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), p = i.length, u = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: u,
    charOffset: p
  };
}, oo = 300, so = (e, t, r = 100, n = "NARROW") => {
  const a = we(), o = ee(null), s = ee(null), i = ee(e), p = ee(r), u = ee(n), d = ee(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    p.current = r;
  }, [r]), ae(() => {
    u.current = n;
  }, [n]), ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const c = k((m = {}) => t?.current ? zr(t.current, m) : [], [t]), l = k((m = {}) => {
    const M = c(m);
    return a.updatePageBoundaries(M), M;
  }, [c, a]), x = k((m = {}) => {
    const M = typeof m.delay == "number" ? m.delay : oo;
    no(l, o, m, M);
  }, [l]), b = k(() => {
    t?.current && Jr(
      t.current,
      i.current,
      p.current,
      u.current,
      a.updateContinuousContent,
      l,
      d,
      b
    );
  }, [t, a, l]), w = k((m) => {
    Qr(b, s, m);
  }, [b]), C = k((m) => !m?.current || !t?.current ? 0 : $r(m.current, t.current), [t]), j = k((m) => {
    t?.current && In(t.current, m);
  }, [t]), D = k((m, M) => {
    if (!M?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    to(M.current, t.current, m, j);
  }, [t, j]), N = k(async (m) => t?.current ? Wr(
    t.current,
    m,
    i.current,
    p.current,
    u.current,
    a.updateContinuousContent,
    l
  ) : !1, [t, a, l]), y = k((m) => t?.current ? Gr(
    t.current,
    m,
    c,
    a.updateContinuousContent,
    l,
    j,
    b
  ) : !1, [t, c, a, l, j, b]), g = k((m) => t?.current ? Zr(
    m,
    t.current,
    a.updateContinuousContent,
    l,
    b
  ) : !1, [t, a, l, b]);
  return ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ve(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: x,
    updateBoundaries: l,
    getCurrentPage: C,
    scrollToPage: D,
    positionCursorAtPage: j,
    checkAndReflow: b,
    triggerAutoReflow: w,
    removePageAndContent: y,
    removePageBreak: g,
    insertPageBreakAtBoundary: N,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    c,
    x,
    l,
    C,
    D,
    j,
    b,
    w,
    y,
    g,
    N
  ]);
}, Oe = {
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
function ka({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Oe
}) {
  const p = n - t, u = a - r;
  let d = o, c = s;
  switch (e) {
    case F.TOP_LEFT:
      d = Math.max(i.minWidth, o - p), c = Math.max(i.minHeight, s - u);
      break;
    case F.TOP_RIGHT:
      d = Math.max(i.minWidth, o + p), c = Math.max(i.minHeight, s - u);
      break;
    case F.BOTTOM_LEFT:
      d = Math.max(i.minWidth, o - p), c = Math.max(i.minHeight, s + u);
      break;
    case F.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, o + p), c = Math.max(i.minHeight, s + u);
      break;
    case F.TOP:
      c = Math.max(i.minHeight, s - u);
      break;
    case F.BOTTOM:
      c = Math.max(i.minHeight, s + u);
      break;
    case F.LEFT:
      d = Math.max(i.minWidth, o - p);
      break;
    case F.RIGHT:
      d = Math.max(i.minWidth, o + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const l = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? d / l > c ? c = Math.max(i.minHeight, d / l) : d = Math.max(i.minWidth, c * l) : [F.TOP, F.BOTTOM].includes(e) ? d = c * l : [F.LEFT, F.RIGHT].includes(e) && (c = d / l);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (o / s))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (o / s))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function be(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Pa(e) {
  return be(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Na(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ao(e, t = Oe) {
  if (!be(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(F).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = io(o), s.style.pointerEvents = "all", Dn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function io(e) {
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
function Dn(e, t, r, n) {
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
function xt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Dn(a, o, r.width, r.height);
  });
}
function pt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const co = "html-editor-storage", lo = 1, pe = "images";
function uo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function De() {
  return new Promise((e, t) => {
    const r = indexedDB.open(co, lo);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(pe) || a.createObjectStore(pe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function fo(e) {
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
      const s = o.target.result, p = s.split(",")[1].length * 3 / 4;
      if (p > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const u = await De(), d = `editor-image-${uo()}`, l = u.transaction([pe], "readwrite").objectStore(pe), x = {
          key: d,
          dataUrl: s,
          size: p,
          type: e.type,
          timestamp: Date.now()
        }, b = l.add(x);
        b.onsuccess = () => {
          u.close(), t(d);
        }, b.onerror = () => {
          u.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (u) {
        r(u);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function po(e) {
  try {
    const t = await De();
    return new Promise((r, n) => {
      const s = t.transaction([pe], "readonly").objectStore(pe).get(e);
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
async function go(e) {
  try {
    const t = await De();
    return new Promise((r, n) => {
      const s = t.transaction([pe], "readwrite").objectStore(pe).delete(e);
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
async function Ma() {
  try {
    const e = await De();
    return new Promise((t, r) => {
      const o = e.transaction([pe], "readwrite").objectStore(pe).clear();
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
async function La() {
  try {
    const e = await De();
    return new Promise((t, r) => {
      const o = e.transaction([pe], "readonly").objectStore(pe).getAllKeys();
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
const Hn = [
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
], ho = [
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
], mo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function yo(e) {
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
function Xe(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Le(r) || "<p><br></p>";
}
function bo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function vo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Hn.includes(r.tagName));
}
function To(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      Hn.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Le(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${yo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), p = jn(o);
      if (s === "DIV") {
        const u = Le(o);
        u.trim() ? t.push(u) : t.push("<p><br></p>");
      } else if (s === "P")
        vo(o) ? t.push(To(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const u = bo(o);
        t.push(`<${i}${p}>${u}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(wo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Eo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const u = Le(o);
        t.push(`<blockquote${p}>${u}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (ho.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (mo.includes(s))
        t.push(o.outerHTML);
      else {
        const u = Le(o);
        t.push(`<${i}${p}>${u}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function wo(e) {
  const t = e.tagName.toLowerCase(), r = jn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Le(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Eo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ao = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), bn = (e) => {
  const t = Ao(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Bn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Co = (e) => {
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
var Ro = {
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
const So = St(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, p) => ht(
    "svg",
    {
      ref: p,
      ...Ro,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Bn("lucide", a),
      ...!o && !Co(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([u, d]) => ht(u, d)),
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
  const r = St(
    ({ className: n, ...a }, o) => ht(So, {
      ref: o,
      iconNode: t,
      className: Bn(
        `lucide-${xo(bn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = bn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Oo = J("arrow-down", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Po = J("arrow-left", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Mo = J("arrow-right", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Io = J("arrow-up", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Ho = J("bold", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Bo = J("chevron-left", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $o = J("chevron-right", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Fo = J("file-check", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], et = J("file-text", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], qo = J("hash", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Yo = J("heading-1", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Ko = J("heading-2", Vo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Jo = J("heading-3", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], es = J("image-upscale", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ns = J("image", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], os = J("italic", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], as = J("link", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], cs = J("list-indent-decrease", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], us = J("list-indent-increase", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], fs = J("list-ordered", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], zn = J("list", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], hs = J("plus", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ys = J("redo", ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], vs = J("scaling", bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ws = J("settings", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], xs = J("strikethrough", Es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Cs = J("table", As);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Pt = J("text-align-center", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Nt = J("text-align-end", Ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Os = J("text-align-justify", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mt = J("text-align-start", ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = J("trash-2", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ms = J("underline", Ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Is = J("undo", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Hs = J("x", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Bs = J("zoom-in", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], $s = J("zoom-out", zs), vn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), p = o.textContent.trim();
    return p ? {
      id: `${r}heading-${s}`,
      level: i,
      text: p,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Us = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Fs = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = _n(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: p, outline: u } = ve(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: vn(i, 1, "continuous-")
      };
    let c = 0;
    const l = [];
    return o.forEach((x, b) => {
      c += Us(x.content), l.push(...vn(x.content, b + 1, `page-${b}-`));
    }), { wordCount: c, outline: l };
  }, [o, r, n, i]), d = n !== void 0 ? n : o.length;
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
            /* @__PURE__ */ h.jsx(et, { size: 18 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ h.jsx($o, { size: 16 }) : /* @__PURE__ */ h.jsx(Bo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Fo, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(qo, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(et, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          u.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsxs("h3", { children: [
              /* @__PURE__ */ h.jsx(zn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "document-outline", "data-testid": "outline", children: u.map((c) => {
              const l = c.level === 1 ? Yo : c.level === 2 ? Ko : Jo;
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${c.level}`,
                  style: { marginLeft: `${(c.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ h.jsx(l, { size: 12, className: "outline-icon" }),
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
class Ws {
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
const Tn = new Ws("Editor"), $n = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Un = 32;
function Fn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Un}px`, e.dataset.indentLevel = String(n));
}
function Gs(e, t) {
  Fn(e, t);
}
function qs(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && $n.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Zs() {
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
      let u = i.parentElement;
      for (; u && u !== n; ) {
        if (u.tagName && $n.has(u.tagName.toUpperCase())) {
          r.add(u);
          break;
        }
        u = u.parentElement;
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
function Ys(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Un}px`, e.dataset.indentLevel = String(r));
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
function Ct(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = Zs();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = qs(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Gs(s, e);
      return;
    }
    e ? Ys(s) : Fn(s, !1);
  });
  try {
    const s = document.createRange(), i = (c) => c.nodeType === Node.TEXT_NODE ? c : document.createTreeWalker(
      c,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), p = (c) => {
      if (c.nodeType === Node.TEXT_NODE)
        return c;
      const l = document.createTreeWalker(
        c,
        NodeFilter.SHOW_TEXT,
        null
      );
      let x = null, b = l.nextNode();
      for (; b; )
        x = b, b = l.nextNode();
      return x;
    }, u = i(a);
    u ? s.setStart(u, 0) : s.setStart(a, 0);
    const d = p(o);
    d ? s.setEnd(d, d.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
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
function Vs(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Ct(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Ks = [
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
], Xs = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Js = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Lt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: a = !1
}) => {
  const o = async (u) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(u.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (u.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const c = await fo(u), l = await po(c);
      if (l) {
        const b = `<img src="${l}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, b), Tn.info("Image inserted", { key: c });
      }
      const x = document.getElementById("image-upload");
      x && (x.value = "");
    } catch (d) {
      Tn.error("Error uploading image", d);
    }
  }, s = (u, d, c, l) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: () => t(u),
      className: e[d] ? "active" : "",
      title: l,
      children: /* @__PURE__ */ h.jsx(c, { size: 16 })
    },
    u
  ), i = (u, d, c, l = !1) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: u,
      disabled: l,
      title: c,
      style: { opacity: l ? 0.5 : 1 },
      children: /* @__PURE__ */ h.jsx(d, { size: 16 })
    },
    c
  ), p = () => /* @__PURE__ */ h.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ h.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), Is, "Undo", !n),
    i(() => t("redo"), ys, "Redo", !a),
    p(),
    s("bold", "bold", Ho, "Bold"),
    s("italic", "italic", os, "Italic"),
    s("underline", "underline", Ms, "Underline"),
    s("strikethrough", "strikethrough", xs, "Strikethrough"),
    p(),
    s("justifyLeft", "alignLeft", Mt, "Align Left"),
    s("justifyCenter", "alignCenter", Pt, "Align Center"),
    s("justifyRight", "alignRight", Nt, "Align Right"),
    s("justifyFull", "alignJustify", Os, "Justify"),
    p(),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (u) => t("fontName", u.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Ks.map(({ value: u, label: d }) => /* @__PURE__ */ h.jsx("option", { value: u, children: d }, u))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (u) => t("fontSize", u.target.value),
        value: e.fontSize || nt,
        title: "Font Size",
        children: Mr.map(({ value: u, label: d }) => /* @__PURE__ */ h.jsx("option", { value: u, children: d }, u))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (u) => t("formatBlock", u.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Xs.map(({ value: u, label: d }) => /* @__PURE__ */ h.jsx("option", { value: u, children: d }, u))
      }
    ),
    p(),
    i(() => t("insertUnorderedList"), zn, "Bullet List"),
    i(() => t("insertOrderedList"), fs, "Numbered List"),
    p(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          Ct(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ h.jsx(us, { size: 16 })
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          Ct(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ h.jsx(cs, { size: 16 })
      }
    ),
    p(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => {
          const u = prompt("Enter URL:");
          u && t("createLink", u);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ h.jsx(as, { size: 16 })
      }
    ),
    i(() => t("insertHTML", Js), Cs, "Insert Table"),
    r && i(r, et, "Insert Page Break"),
    p(),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (u) => u.target.files[0] && o(u.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ h.jsx(ns, { size: 16 })
      }
    )
  ] });
};
Lt.propTypes = {
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
Lt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Qs(e) {
  return !e || typeof e != "string" ? e : Xe(e);
}
function ea(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = Qs(r) : r = ta(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function ta(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => na(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function na(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const xe = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && xe(e.parentElement) : !1, It = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: p,
  zoomLevel: u = 100,
  pageMargins: d = he
}) => {
  const c = ve(() => xn(d), [d]), l = u / 100, x = k((y, g) => {
    if (!y) return !1;
    const m = y.getBoundingClientRect(), M = g - m.top;
    return M < c.top || M > m.height - c.bottom;
  }, [c.top, c.bottom]), b = k((y, g) => {
    g.preventDefault();
    const m = y.getBoundingClientRect(), M = g.clientX - m.left, S = g.clientY - m.top, z = m.width - 40, q = -12, P = m.width - 20;
    M >= z && M <= P && S >= q && S <= 8 && p && p(y);
  }, [p]), w = k((y) => {
    y.preventDefault();
    const g = t.current.getBoundingClientRect();
    if (y.clientY - g.top < c.top) {
      const M = t.current.firstElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), z = window.getSelection();
        S.setStart(M, 0), S.collapse(!0), z.removeAllRanges(), z.addRange(S);
      }
    } else {
      const M = t.current.lastElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), z = window.getSelection();
        S.selectNodeContents(M), S.collapse(!1), z.removeAllRanges(), z.addRange(S);
      }
    }
  }, [t, c.top]), C = k((y) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const m = g.getRangeAt(0), { startContainer: M, endContainer: S } = m;
    if ((xe(M) || xe(S)) && (y.key.length === 1 || y.key === "Enter" || y.key === " "))
      return y.preventDefault(), !1;
    if (Vs(y))
      return n && n(), !1;
    if ((y.key === "Backspace" || y.key === "Delete") && (xe(M) || xe(S)))
      return y.preventDefault(), !1;
    a && a(y);
  }, [a, n]), j = k((y) => {
    if (!t.current) return;
    const g = y.target;
    if (xe(g)) {
      b(g, y);
      return;
    }
    if (x(t.current, y.clientY)) {
      w(y);
      return;
    }
    o && o(y);
  }, [t, o, b, w, x]), D = k((y) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const m = g.getRangeAt(0), { startContainer: M } = m;
    if (xe(M))
      return y.preventDefault(), !1;
  }, []), N = k((y) => {
    const g = ea(y);
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
            fontSize: nt,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: C,
          onBeforeInput: D,
          onClick: j,
          onScroll: s,
          onPaste: N,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
It.propTypes = {
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
It.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: he
};
const ra = pr(It), Dt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = he,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: p,
  onDeletePage: u,
  onPageSizeChange: d,
  onPageMarginsChange: c,
  onZoomIn: l,
  onZoomOut: x,
  onZoomReset: b
} = {}) => {
  const w = Math.max(e?.length || 0, 1), C = (g) => {
    i && i(g);
  }, j = () => {
    p && p();
  }, D = (g) => {
    if (w <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    u && u(g);
  }, N = (g) => {
    d && d(g);
  }, y = (g) => {
    c && c(g);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ h.jsx(ws, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (g) => N(g.target.value),
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
              children: wr().map((g) => /* @__PURE__ */ h.jsx("option", { value: g, children: Er(g) }, g))
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
          onClick: x,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ h.jsx($s, { size: 12 })
        }
      ),
      /* @__PURE__ */ h.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: l,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ h.jsx(Bs, { size: 12 })
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
    /* @__PURE__ */ h.jsx("div", { className: "page-list", children: e.map((g, m) => /* @__PURE__ */ h.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${m === t ? "active" : ""}`,
          onClick: () => C(m),
          "aria-label": `Go to page ${m + 1}`,
          "aria-current": m === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ h.jsx(et, { size: 14 }),
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Page ",
              m + 1
            ] })
          ]
        }
      ),
      w > 1 && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (M) => {
            M.stopPropagation(), D(m);
          },
          "aria-label": `Delete page ${m + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ h.jsx(Hs, { size: 14 })
        }
      )
    ] }, g.id || `page-${m}`)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: j,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ h.jsx(hs, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Dt.propTypes = {
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
Dt.defaultProps = {
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
const oa = tt.memo(Dt);
function sa(e) {
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
function aa({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Oe
}) {
  const p = n - t, u = a - r;
  let d = o, c = s;
  switch (e) {
    case F.TOP_LEFT:
      d = Math.max(i.minWidth, o - p), c = Math.max(i.minHeight, s - u);
      break;
    case F.TOP_RIGHT:
      d = Math.max(i.minWidth, o + p), c = Math.max(i.minHeight, s - u);
      break;
    case F.BOTTOM_LEFT:
      d = Math.max(i.minWidth, o - p), c = Math.max(i.minHeight, s + u);
      break;
    case F.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, o + p), c = Math.max(i.minHeight, s + u);
      break;
    case F.TOP:
      c = Math.max(i.minHeight, s - u);
      break;
    case F.BOTTOM:
      c = Math.max(i.minHeight, s + u);
      break;
    case F.LEFT:
      d = Math.max(i.minWidth, o - p);
      break;
    case F.RIGHT:
      d = Math.max(i.minWidth, o + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const l = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? d / l > c ? c = Math.max(i.minHeight, d / l) : d = Math.max(i.minWidth, c * l) : [F.TOP, F.BOTTOM].includes(e) ? d = c * l : [F.LEFT, F.RIGHT].includes(e) && (c = d / l);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (o / s))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (o / s))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function Wn(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ia(e, t, r) {
  Wn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function ca(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, p = a || o, u = r.offsetWidth, d = r.offsetHeight, l = {
    // Increase width
    ">": p && s ? () => ({
      width: Math.min(n.maxWidth || 800, u + 10),
      height: d
    }) : null,
    // Decrease width
    "<": p && s ? () => ({
      width: Math.max(n.minWidth || 50, u - 10),
      height: d
    }) : null,
    // Increase height
    "+": p && s ? () => ({
      width: u,
      height: Math.min(n.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": p && s ? () => ({
      width: u,
      height: Math.max(n.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: p && !s ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (l) {
    e.preventDefault();
    const x = l();
    return ia(t, r, x), !0;
  }
  return !1;
}
const Ht = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Oe
}) => {
  const o = ee(null), s = ee(null), i = ee(null), p = ee(null), u = ee(a), d = ee(!1), c = we();
  ae(() => {
    u.current = a;
  }, [a]);
  const l = k((y) => {
    if (!be(y)) return;
    o.current && (pt(o.current), o.current = null), y.classList.add("selected");
    const g = ao(y, u.current);
    g && (o.current = g, s.current = y, document.body.appendChild(g), g.querySelectorAll(".resize-handler").forEach((M) => {
      M.addEventListener("mousedown", b);
    }), r && r(y));
  }, [r]), x = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (pt(o.current), o.current = null), i.current = null, p.current = null, d.current = !1, n && n();
  }, [n]), b = k((y) => {
    if (y.preventDefault(), y.stopPropagation(), !s.current) return;
    const g = y.currentTarget.dataset.handler, m = s.current.getBoundingClientRect(), M = window.pageYOffset || document.documentElement.scrollTop, S = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: y.clientX,
      y: y.clientY,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight,
      originalWidth: s.current.offsetWidth,
      originalHeight: s.current.offsetHeight,
      offsetX: y.clientX - m.left - S,
      offsetY: y.clientY - m.top - M
    }, p.current = g, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = sa(g), document.addEventListener("mousemove", w), document.addEventListener("mouseup", C);
  }, []), w = k((y) => {
    if (!d.current || !s.current || !i.current || !p.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: g, y: m, width: M, height: S } = i.current, z = p.current, q = y.clientX, P = y.clientY, U = aa({
      handler: z,
      startX: g,
      startY: m,
      currentX: q,
      currentY: P,
      startWidth: M,
      startHeight: S,
      options: u.current
    });
    Wn(s.current, U), o.current && xt(o.current, s.current);
  }, []), C = k((y) => {
    if (d.current) {
      if (y.preventDefault(), y.stopPropagation(), s.current && i.current) {
        const g = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, m = {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        };
        (g.width !== m.width || g.height !== m.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: m } },
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: g } }
        );
      }
      if (i.current = null, p.current = null, d.current = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(g), t && t(s.current, {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        });
      }
    }
  }, [t, c]), j = k((y) => {
    o.current && !o.current.contains(y.target) && x();
    const g = y.target;
    if (be(g)) {
      if (g === s.current)
        return;
      l(g);
    }
  }, [l, x]), D = k((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && s.current && !d.current) {
      y.preventDefault();
      const g = s.current;
      if (g.parentNode) {
        g.parentNode.removeChild(g), x();
        const m = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(m);
      }
    }
    y.key === "Escape" && s.current && x(), s.current && !d.current && ca(y, e, s.current, u.current);
  }, [e, x]), N = k(() => {
    o.current && s.current && xt(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const g = e.current.closest(".editor-viewport");
    return g && (g.addEventListener("scroll", N), window.addEventListener("scroll", N)), () => {
      g && g.removeEventListener("scroll", N), window.removeEventListener("scroll", N);
    };
  }, [e, N]), ae(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", j), y.addEventListener("keydown", D), window.addEventListener("resize", N), () => {
      y.removeEventListener("click", j), y.removeEventListener("keydown", D), window.removeEventListener("resize", N), d.current && (document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && pt(o.current);
    };
  }, [e, j, D, N, w, C]), ae(() => {
    if (!e.current) return;
    const y = new MutationObserver((g) => {
      g.forEach((m) => {
        m.type === "childList" && (m.removedNodes.forEach((M) => {
          M.nodeType === Node.ELEMENT_NODE && be(M) && M === s.current && x();
        }), m.addedNodes.forEach((M) => {
          if (M.nodeType !== Node.ELEMENT_NODE) return;
          if (be(M)) {
            setTimeout(() => l(M), 50);
            return;
          }
          const S = M.querySelectorAll?.("img") || [];
          S.length > 0 && setTimeout(() => l(S[0]), 50);
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, x, l]), null;
};
Ht.propTypes = {
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
Ht.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Oe
};
const jt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = se({ top: 0, left: 0 }), [p, u] = se(!1), [d, c] = se("top"), [l, x] = se(o), b = ee(null), w = ee(null), C = we(), j = (v) => {
    if (!v)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (A) => setTimeout(A, 16))(() => {
      const A = document.querySelector(".image-resize-overlay");
      A && xt(A, v);
    });
  }, D = (v) => {
    if (!v) return null;
    const B = window.getComputedStyle(v);
    return {
      float: B.float || "none",
      margin: v.style.margin || "",
      display: B.display || "inline",
      width: v.style.width || v.width || "",
      height: v.style.height || v.height || "",
      aspectRatio: l
    };
  }, N = k(() => {
    if (!e) return "left";
    const v = window.getComputedStyle(e);
    return v.float === "right" ? "right" : v.float === "left" ? "left" : v.display === "block" && v.margin.includes("auto") ? "center" : "left";
  }, [e]), [y, g] = se("left");
  ae(() => {
    e && g(N());
  }, [e, N]);
  const m = k(() => {
    if (!e || !b.current) return;
    const v = e.getBoundingClientRect(), B = b.current.getBoundingClientRect(), A = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, O = v.bottom >= 0 && v.top <= A.height && v.right >= 0 && v.left <= A.width;
    let V = "top", oe = 0, te = 0;
    if (O) {
      const L = v.top - B.height - 10, Z = A.height - v.bottom - B.height - 10;
      Z > L && Z > 0 ? (V = "bottom", oe = v.bottom + 10) : (V = "top", oe = v.top - B.height - 10);
    } else
      V = "top", oe = 10;
    te = v.left + v.width / 2 - B.width / 2;
    const E = window.innerWidth, f = window.innerHeight;
    let R = Math.max(10, Math.min(te, E - B.width - 10)), H = Math.max(10, Math.min(oe, f - B.height - 10));
    i({ top: H, left: R }), c(V), u(!0);
  }, [e]);
  wn(() => {
    m();
    const v = () => {
      m();
    }, B = w.current;
    return B && B.addEventListener("scroll", v), window.addEventListener("scroll", v), window.addEventListener("resize", v), () => {
      B && B.removeEventListener("scroll", v), window.removeEventListener("scroll", v), window.removeEventListener("resize", v), u(!1);
    };
  }, [e, m]), ae(() => {
    const v = (B) => {
      b.current && !b.current.contains(B.target) && B.target !== e && a();
    };
    return document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [e, a]);
  const M = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, S = (v) => {
    if (e && M[v]) {
      const B = D(e), A = y, O = M[v];
      e.style.float = O.float, e.style.margin = O.margin, e.style.display = O.display, g(v), j(e);
      const V = D(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: v, state: V } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: A, state: B } }
      ), t && t(v);
    }
  }, z = () => {
    if (e && e.parentNode) {
      const v = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      C.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: v } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, q = () => {
    const v = l, B = !l;
    x(B), C.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: B } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: v } }
    ), r && r(B);
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
  }, U = (v) => ({
    ...P,
    background: v ? "#007bff" : "transparent",
    color: v ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": d,
        "aria-hidden": !p,
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
              className: `tooltip-button aspect-ratio-toggle ${l ? "" : "active"}`,
              onClick: q,
              title: `Toggle aspect ratio preservation (currently ${l ? "ON" : "OFF"})`,
              children: l ? /* @__PURE__ */ h.jsx(vs, { size: 14 }) : /* @__PURE__ */ h.jsx(es, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => S("left"),
              title: "Align Left",
              style: U(y === "left"),
              children: /* @__PURE__ */ h.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => S("center"),
              title: "Align Center",
              style: U(y === "center"),
              children: /* @__PURE__ */ h.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => S("right"),
              title: "Align Right",
              style: U(y === "right"),
              children: /* @__PURE__ */ h.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: z,
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
              children: /* @__PURE__ */ h.jsx(At, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  imageElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onAspectRatioToggle: T.func,
  onDelete: T.func,
  onClose: T.func.isRequired,
  initialPreserveAspectRatio: T.bool
};
jt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const rt = {
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
function ue(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function ge(e) {
  if (!ue(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let p = 0; p < n; p++) {
      const u = s[p], d = u.style.width ? parseInt(u.style.width, 10) : u.offsetWidth;
      a.push(d || 100);
    }
  else if (r.length > 0) {
    const p = r[0];
    for (let u = 0; u < p.cells.length; u++) {
      const d = p.cells[u];
      a.push(d.offsetWidth);
    }
  }
  const i = r.map((p) => (p.style.height ? parseInt(p.style.height, 10) : null) || p.offsetHeight);
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
function la({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = rt
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, p, u, d, c) => {
    p >= 0 && p < i.length && (i[p] = Math.max(d, Math.min(c, i[p] + u)));
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
function me(e) {
  if (!ue(e)) return;
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
function Ce(e, t, r) {
  if (!ue(e)) return;
  me(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((u, d) => u + d, 0) : 0, p = a ? a.reduce((u, d) => u + d, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : p > 0 && (e.style.height = `${p}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const u = e.querySelector("colgroup");
    u && u.querySelectorAll("col").forEach((c, l) => {
      l < n.length && (c.style.width = `${n[l]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((d, c) => {
    c < a.length && (d.style.height = `${a[c]}px`);
  }), e.style.height = `${p}px`), e.offsetHeight;
}
function ua(e, t = rt) {
  if (!ue(e)) return null;
  me(e);
  const r = ge(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const p = Gn(i, r, a, e);
    n.appendChild(p);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const p = qn(i, r, a, e);
    n.appendChild(p);
  }
  const o = Zn(r, a);
  n.appendChild(o);
  const s = Yn(r, a);
  return n.appendChild(s), n;
}
function Gn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = le.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Vn(a, e, t, r, n), a;
}
function qn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = le.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Kn(a, e, t, r, n), a;
}
function Zn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Xn(r, e, t), r;
}
function Yn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Jn(r, e, t), r;
}
function Rt(e, t) {
  if (!e || !t) return;
  me(t);
  const r = ge(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let c = 0; c < r.columns - 1; c++) {
      const l = Gn(c, r, n, t);
      e.appendChild(l);
    }
    for (let c = 0; c < r.rows - 1; c++) {
      const l = qn(c, r, n, t);
      e.appendChild(l);
    }
    const u = Zn(r, n);
    e.appendChild(u);
    const d = Yn(r, n);
    e.appendChild(d);
  } else
    a.forEach((u, d) => {
      Vn(u, d, r, n, t);
    }), o.forEach((u, d) => {
      Kn(u, d, r, n, t);
    }), s && Xn(s, r, n), i && Jn(i, r, n);
}
function Ve(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function da(e, t) {
  if (!ue(e))
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
  me(e);
  const o = ge(e);
  return o && Ce(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function fa(e, t) {
  if (!ue(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const p = document.createElement("td");
    p.innerHTML = "&nbsp;", n.appendChild(p);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  me(e);
  const s = ge(e);
  return s && Ce(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Vn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const p = s.cells[t].getBoundingClientRect(), u = a.getBoundingClientRect(), d = p.right - u.left - 2;
      e.style.left = `${d}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Kn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const p = s.cells[0].getBoundingClientRect(), u = a.getBoundingClientRect(), d = p.bottom - u.top - 2;
      e.style.top = `${d}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function Xn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Jn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function pa(e, t) {
  if (!ue(e))
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
    me(e);
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function ga(e, t) {
  if (!ue(e))
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
    me(e);
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function ha(e, t) {
  if (!ue(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), me(e);
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function ma(e, t) {
  if (!ue(e))
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
    me(e);
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
const Bt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = rt
}) => {
  const o = ee(null), s = ee(null), i = ee(null), p = ee(null), u = ee(null), d = ee(a), c = ee(!1), [l, x] = se(null), b = we();
  ae(() => {
    d.current = a;
  }, [a]);
  const w = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Ve(o.current), o.current = null), x(null), i.current = null, p.current = null, u.current = null, c.current = !1, n && n();
  }, [n]), C = k((S) => {
    if (S.preventDefault(), S.stopPropagation(), !s.current) return;
    const z = S.currentTarget, q = z.dataset.type, P = parseInt(z.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const U = ge(s.current);
    i.current = {
      x: S.clientX,
      y: S.clientY,
      structure: { ...U }
    }, p.current = q, u.current = P, c.current = !0, document.body.classList.add("table-resize-in-progress");
    const v = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = v[q] || "default", document.addEventListener("mousemove", N), document.addEventListener("mouseup", y);
  }, []), j = k((S) => {
    const z = ua(S, d.current);
    return z && (o.current = z, s.current = S, document.body.appendChild(z), z.querySelectorAll(".table-resize-handler").forEach((P) => {
      P.addEventListener("mousedown", C);
    })), z;
  }, [C]), D = k((S) => {
    if (!ue(S)) return;
    o.current && (Ve(o.current), o.current = null), S.classList.add("selected"), j(S) && (x(S), r && r(S));
  }, [r, j]), N = k((S) => {
    if (!c.current || !s.current || !i.current || !p.current) return;
    S.preventDefault(), S.stopPropagation();
    const { x: z, y: q, structure: P } = i.current, U = p.current, v = u.current, B = S.clientX, A = S.clientY;
    let O = 0;
    switch (U) {
      case le.COLUMN:
        O = B - z;
        break;
      case le.ROW:
        O = A - q;
        break;
      case le.TABLE_BOTTOM:
        O = A - q;
        break;
      case le.TABLE_RIGHT:
        O = B - z;
        break;
    }
    const V = la({
      type: U,
      index: v,
      delta: O,
      currentStructure: P,
      options: d.current
    });
    Ce(s.current, V), o.current && Rt(o.current, s.current);
  }, []), y = k((S) => {
    if (c.current) {
      if (S.preventDefault(), S.stopPropagation(), s.current && i.current) {
        const z = {
          structure: i.current.structure
        }, q = {
          structure: ge(s.current)
        };
        (z.structure.width !== q.structure.width || z.structure.height !== q.structure.height || JSON.stringify(z.structure.columnWidths) !== JSON.stringify(q.structure.columnWidths) || JSON.stringify(z.structure.rowHeights) !== JSON.stringify(q.structure.rowHeights)) && b.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: q } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: z } }
        );
      }
      if (i.current = null, p.current = null, u.current = null, c.current = !1, document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const z = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(z), t && t(s.current, ge(s.current));
      }
    }
  }, [t, b]), g = k((S) => {
    o.current && !o.current.contains(S.target) && w();
    const q = S.target.closest("table");
    if (q && ue(q)) {
      if (q === s.current)
        return;
      D(q);
    }
  }, [D, w]), m = k((S) => {
    if (S.key === "Delete" && s.current && !c.current) {
      S.preventDefault();
      const z = s.current;
      if (z.parentNode) {
        z.parentNode.removeChild(z), w();
        const q = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(q);
      }
    }
    S.key === "Escape" && s.current && w();
  }, [e, w]), M = k(() => {
    o.current && s.current && Rt(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const z = e.current.closest(".editor-viewport");
    return z && (z.addEventListener("scroll", M), window.addEventListener("scroll", M)), () => {
      z && z.removeEventListener("scroll", M), window.removeEventListener("scroll", M);
    };
  }, [e, M]), ae(() => {
    if (!e.current) return;
    const S = e.current;
    return S.addEventListener("click", g), S.addEventListener("keydown", m), window.addEventListener("resize", M), () => {
      S.removeEventListener("click", g), S.removeEventListener("keydown", m), window.removeEventListener("resize", M), c.current && (document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Ve(o.current);
    };
  }, [e, g, m, M, N, y]), ae(() => {
    if (!e.current) return;
    const S = new MutationObserver((z) => {
      z.forEach((q) => {
        q.type === "childList" && (q.removedNodes.forEach((P) => {
          P.nodeType === Node.ELEMENT_NODE && ue(P) && P === l && w();
        }), q.addedNodes.forEach((P) => {
          if (P.nodeType !== Node.ELEMENT_NODE) return;
          if (ue(P)) {
            setTimeout(() => D(P), 50);
            return;
          }
          const U = P.querySelectorAll?.("table") || [];
          U.length > 0 && setTimeout(() => D(U[0]), 50);
        }));
      });
    });
    return S.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => S.disconnect();
  }, [e, w, D]), ae(() => {
    if (!l) return;
    const S = new MutationObserver((z) => {
      z.some((P) => {
        if (P.type === "childList") {
          if ([...P.addedNodes, ...P.removedNodes].some(
            (v) => v.nodeType === Node.ELEMENT_NODE && v.tagName === "TR"
          )) return !0;
        } else if (P.type === "attributes" && ["colspan", "rowspan"].includes(P.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (Ve(o.current), o.current = null, j(s.current));
    });
    return S.observe(l, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => S.disconnect();
  }, [l, j]), null;
};
Bt.propTypes = {
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
Bt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: rt
};
const zt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = se({ top: 0, left: 0 }), [p, u] = se(!1), [d, c] = se("top"), l = ee(null), x = ee(null), b = we(), w = (A) => {
    if (!A)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (V) => setTimeout(V, 16))(() => {
      const V = document.querySelector(".table-resize-overlay");
      V && Rt(V, A);
    });
  }, C = (A) => {
    if (!A) return null;
    const O = window.getComputedStyle(A);
    return {
      float: O.float || "none",
      margin: A.style.margin || "",
      marginLeft: A.style.marginLeft || "",
      marginRight: A.style.marginRight || "",
      display: O.display || "table"
    };
  }, j = k(() => {
    if (!e) return "left";
    const A = window.getComputedStyle(e);
    return A.marginLeft === "auto" && A.marginRight === "auto" ? "center" : A.float === "right" ? "right" : (A.float === "left", "left");
  }, [e]), [D, N] = se("left");
  ae(() => {
    e && N(j());
  }, [e, j]);
  const y = k(() => {
    if (!e || !l.current) return;
    const A = e.getBoundingClientRect(), O = l.current.getBoundingClientRect(), V = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, oe = A.bottom >= 0 && A.top <= V.height && A.right >= 0 && A.left <= V.width;
    let te = "top", E = 0, f = 0;
    if (oe) {
      const W = A.top - O.height - 10, $ = V.height - A.bottom - O.height - 10;
      $ > W && $ > 0 ? (te = "bottom", E = A.bottom + 10) : (te = "top", E = A.top - O.height - 10);
    } else
      te = "top", E = 10;
    f = A.left + A.width / 2 - O.width / 2;
    const R = window.innerWidth, H = window.innerHeight;
    let L = Math.max(10, Math.min(f, R - O.width - 10)), Z = Math.max(10, Math.min(E, H - O.height - 10));
    i({ top: Z, left: L }), c(te), u(!0);
  }, [e]);
  wn(() => {
    y();
    const A = () => {
      y();
    }, O = x.current;
    return O && O.addEventListener("scroll", A), window.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
      O && O.removeEventListener("scroll", A), window.removeEventListener("scroll", A), window.removeEventListener("resize", A), u(!1);
    };
  }, [e, y]), ae(() => {
    const A = (O) => {
      l.current && !l.current.contains(O.target) && O.target !== e && !e.contains(O.target) && r();
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [e, r]);
  const g = {
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
  }, m = (A) => {
    if (e && g[A]) {
      const O = C(e), V = D, oe = g[A];
      e.style.float = oe.float, e.style.margin = oe.margin, e.style.marginLeft = oe.marginLeft, e.style.marginRight = oe.marginRight, N(A), w(e);
      const te = C(e);
      b.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: A, state: te } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: V, state: O } }
      ), t && t(A);
    }
  }, M = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const A = da(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), w(e);
    } else
      console.error("Failed to insert row above");
  }, S = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const A = fa(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), w(e);
    } else
      console.error("Failed to insert row below");
  }, z = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), pa(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), w(e);
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
    if (console.log(`Inserting column right of index ${a}`), ga(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), w(e);
    } else
      console.error("Failed to insert column right");
  }, P = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), ha(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), w(e);
    } else
      console.error("Failed to delete row");
  }, U = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), ma(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const O = o.current.innerHTML;
        console.log("Updated content length:", O.length), b.updateContinuousContent(O);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), w(e);
    } else
      console.error("Failed to delete column");
  }, v = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (A) => ({
    ...v,
    background: A ? "#007bff" : "transparent",
    color: A ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: l,
        className: "table-tooltip-menu",
        "data-menu-position": d,
        "aria-hidden": !p,
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
          pointerEvents: p ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: p ? 1 : 0,
          visibility: p ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${D === "left" ? "active" : ""}`,
              onClick: () => m("left"),
              title: "Align Left",
              style: B(D === "left"),
              children: /* @__PURE__ */ h.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${D === "center" ? "active" : ""}`,
              onClick: () => m("center"),
              title: "Align Center",
              style: B(D === "center"),
              children: /* @__PURE__ */ h.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${D === "right" ? "active" : ""}`,
              onClick: () => m("right"),
              title: "Align Right",
              style: B(D === "right"),
              children: /* @__PURE__ */ h.jsx(Nt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: M,
                title: "Insert Row Above",
                style: {
                  ...v,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ h.jsx(Io, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: S,
                title: "Insert Row Below",
                style: {
                  ...v,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ h.jsx(Oo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: P,
                title: "Delete Row",
                style: {
                  ...v,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ h.jsx(At, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: z,
                title: "Insert Column Left",
                style: {
                  ...v,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ h.jsx(Po, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: q,
                title: "Insert Column Right",
                style: {
                  ...v,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ h.jsx(Mo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: U,
                title: "Delete Column",
                style: {
                  ...v,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ h.jsx(At, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
zt.propTypes = {
  tableElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onClose: T.func.isRequired,
  selectedRowIndex: T.number,
  selectedColIndex: T.number,
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
zt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const $t = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = se(/* @__PURE__ */ new Set()), [a, o] = se(null), [s, i] = se(null), [p, u] = se(null), [d, c] = se(!1), [l, x] = se(!1), [b, w] = se(null), [C, j] = se(null);
  we(), ee(null);
  const D = k(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), u(null), w(null), j(null), c(!1), x(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((P) => {
      P.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), t && t(null);
  }, [t]), N = k((P) => {
    const U = P.closest("tr"), v = P.closest("table");
    if (!U || !v) return null;
    const B = Array.from(v.rows).indexOf(U), A = Array.from(U.cells).indexOf(P);
    return { rowIndex: B, cellIndex: A, table: v };
  }, []), y = k((P) => {
    if (P.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const U = Array.from(P), v = U[0], B = N(v);
    if (!B) return { mode: null, rowIndex: null, colIndex: null };
    const { table: A } = B;
    return U.filter((oe) => {
      const te = N(oe);
      return te && te.table === A && te.rowIndex === B.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: B.rowIndex, colIndex: null } : U.filter((oe) => {
      const te = N(oe);
      return te && te.table === A && te.cellIndex === B.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: B.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [N]), g = k((P, U, v, B, A) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((O) => {
      O.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!A || !P)) {
      if (P === "row" && U !== null) {
        const O = A.rows[U];
        O && Array.from(O.cells).forEach((V) => {
          V.classList.add("table-row-selected");
        });
      } else P === "column" && v !== null ? Array.from(A.rows).forEach((O) => {
        const V = O.cells[v];
        V && V.classList.add("table-col-selected");
      }) : P === "cells" && B.forEach((O) => {
        O.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), m = k((P, U) => {
    const v = y(P);
    n(P), o(v.mode), i(v.rowIndex), u(v.colIndex), j(U), g(v.mode, v.rowIndex, v.colIndex, P, U), t && v.mode && t({
      mode: v.mode,
      cells: P,
      rowIndex: v.rowIndex,
      colIndex: v.colIndex,
      table: U
    });
  }, [y, g, t]), M = k((P) => {
    const U = P.target.closest("td, th");
    if (!U) return;
    const v = N(U);
    v && (c(!0), w(U), j(v.table), x(!1));
  }, [N]), S = k((P) => {
    if (!d || !b) return;
    const U = P.target.closest("td, th");
    if (!U || !C || !C.contains(U)) return;
    x(!0), P.preventDefault();
    const v = N(b), B = N(U);
    if (!v || !B || v.table !== B.table) return;
    const A = Math.min(v.rowIndex, B.rowIndex), O = Math.max(v.rowIndex, B.rowIndex), V = Math.min(v.cellIndex, B.cellIndex), oe = Math.max(v.cellIndex, B.cellIndex), te = /* @__PURE__ */ new Set();
    for (let E = A; E <= O; E++) {
      const f = C.rows[E];
      if (f)
        for (let R = V; R <= oe; R++) {
          const H = f.cells[R];
          H && te.add(H);
        }
    }
    m(te, C);
  }, [d, N]), z = k(() => {
    l || D(), c(!1), w(null);
  }, [l, D]), q = k((P) => {
    const U = P.target.closest("td, th"), v = P.target.closest("table");
    if (!(U && C && C.contains(U))) {
      if (v && v !== C) {
        D();
        return;
      }
      v || D();
    }
  }, [D, C]);
  return ae(() => {
    if (!e.current) return;
    const P = e.current, U = (B) => {
      B.target.closest("td, th") && M(B);
    }, v = (B) => {
      B.target.closest("td, th") && S(B);
    };
    return P.addEventListener("mousedown", U, !0), P.addEventListener("mouseenter", v, !0), document.addEventListener("mouseup", z), document.addEventListener("click", q), () => {
      P.removeEventListener("mousedown", U, !0), P.removeEventListener("mouseenter", v, !0), document.removeEventListener("mouseup", z), document.removeEventListener("click", q);
    };
  }, [e, M, S, z, q]), ae(() => {
    if (!e.current) return;
    const P = new MutationObserver((U) => {
      U.forEach((v) => {
        v.type === "childList" && C && !e.current.contains(C) && D();
      });
    });
    return P.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => P.disconnect();
  }, [e, D]), null;
};
$t.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: T.func
};
$t.defaultProps = {
  onCellSelectionChange: void 0
};
const ya = 50, gt = 50, ba = 50, va = 100, Ta = 300, Ut = St(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: p = !0,
  showPageManager: u = !0
}, d) => {
  const c = _n(), l = we(), { pageSize: x, pageMargins: b, continuousContent: w, pageBoundaries: C, activePage: j, zoomLevel: D, canUndo: N, canRedo: y } = c, g = ee(null), m = ee(null), { currentFormat: M, formatText: S, updateCurrentFormatFromSelection: z } = Hr(), [q, P] = se(!1), [U, v] = se(null), [B, A] = se(!0), [O, V] = se(!1), [oe, te] = se(null), [E, f] = se(null), [R, H] = se(null), L = ee(null), {
    checkAndUpdateBoundaries: Z,
    getCurrentPage: W,
    scrollToPage: $,
    updateBoundaries: G,
    triggerAutoReflow: K,
    removePageAndContent: X,
    removePageBreak: ce,
    insertPageBreakAtBoundary: I
  } = so(x, m, D, b), de = ve(() => Ot(x), [x]), [Re, He] = se(!1), Ee = ee(null), je = ee(!1), Be = ee(!1), ot = ee(!1), Se = ee(w);
  ae(() => {
    if (m.current) {
      if (!ot.current) {
        m.current.innerHTML = w, ot.current = !0, Se.current = w;
        const _ = setTimeout(() => {
          G();
        }, ya);
        return () => clearTimeout(_);
      }
      if (Se.current !== w) {
        if (m.current.innerHTML !== w) {
          m.current.innerHTML = w;
          const Q = setTimeout(() => {
            G(), je.current && Wt();
          }, gt);
          return Se.current = w, () => clearTimeout(Q);
        }
        Se.current = w;
      }
    }
  }, [w, G, C.length, l, $]), ae(() => {
    s && ot.current && s(w);
  }, [w, s]);
  const Ft = ve(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m.current ? m.current.innerHTML : w,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : w).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? ro(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (_) => {
      const Q = Xe(_);
      Q !== w && l.updateContinuousContent(Q), m.current && m.current.innerHTML !== Q && (m.current.innerHTML = Q), Se.current = Q, m.current && setTimeout(() => {
        G();
      }, gt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (_) => {
      if (!m.current || !_) return;
      const Q = Xe(_), ie = window.getSelection();
      let fe = !1;
      if (ie && ie.rangeCount > 0) {
        const at = ie.getRangeAt(0);
        m.current.contains(at.commonAncestorContainer) && (fe = !0);
      }
      if (!fe && L.current)
        try {
          ie.removeAllRanges(), ie.addRange(L.current);
        } catch (at) {
          console.warn("[insertContent] Failed to restore last cursor position:", at);
          const ke = m.current.lastChild;
          if (ke) {
            const Fe = document.createRange();
            ke.nodeType === Node.TEXT_NODE ? Fe.setStart(ke, ke.textContent.length) : Fe.setStartAfter(ke), Fe.collapse(!0), ie.removeAllRanges(), ie.addRange(Fe);
          }
        }
      document.execCommand("insertHTML", !1, Q);
      const ye = m.current.innerHTML;
      l.updateContinuousContent(ye), Se.current = ye, setTimeout(() => {
        G(), K(200);
      }, gt);
    }
  }), [w, l, G, m, L, Z]);
  gr(d, () => Ft, [Ft]), ae(() => {
    const _ = () => {
      if (z(), m.current) {
        const ie = window.getSelection();
        if (ie.rangeCount > 0) {
          const fe = ie.getRangeAt(0);
          fe.collapsed && m.current.contains(fe.commonAncestorContainer) && (L.current = fe.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", _);
    const Q = () => {
      if (setTimeout(z, 10), L.current && m.current)
        try {
          const ie = window.getSelection();
          ie.removeAllRanges(), ie.addRange(L.current);
        } catch (ie) {
          console.warn("[handleFocus] Failed to restore cursor:", ie);
        }
    };
    return m.current && m.current.addEventListener("focus", Q), () => {
      document.removeEventListener("selectionchange", _), m.current && m.current.removeEventListener("focus", Q);
    };
  }, [z]);
  const Wt = k(() => {
    je.current = !1;
    const _ = Math.max(0, C.length - 1);
    l.setActivePage(_), setTimeout(() => {
      $(_, g);
    }, ba);
  }, [C.length, l, $]), st = k(() => {
    if (!m.current) return;
    let _ = m.current.innerHTML;
    _ = Xe(_), _ !== m.current.innerHTML && (m.current.innerHTML = _);
    const Q = w;
    if (Q !== _) {
      const fe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: _
      }, ye = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: Q
      };
      l.recordOperation(fe, ye);
    }
    l.updateContinuousContent(_), Z(), K(200);
    const ie = W(g);
    ie !== j && l.setActivePage(ie);
  }, [l, Z, W, j, K, g, m, w]), er = k((_) => {
    st();
  }, [st]), Gt = k((_) => {
    l.updatePageSize(_), G({ pageSize: _ }), a && a(_);
  }, [l, G, a]), qt = k((_) => {
    l.updatePageMargins(_), G({ pageMargins: _ }), o && o(_);
  }, [l, G, o]), Zt = k((_) => {
    _ < 0 || _ >= C.length || (Be.current = !0, l.setActivePage(_), $(_, g), setTimeout(() => {
      Be.current = !1;
    }, Ta), t && t(_));
  }, [l, $, t, C.length]), Yt = k(() => {
    const _ = C.length + 1;
    I(_) && (je.current = !0, setTimeout(() => {
      je.current && Wt();
    }, 100)), r && r();
  }, [C.length, I, l, $, r]), tr = k(() => {
    const _ = window.getSelection();
    if (_ && _.rangeCount > 0) {
      if (!m?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        G();
        const ye = W(g);
        l.setActivePage(ye);
      }, 150);
    }
  }, [G, W, l, g]), nr = k((_) => {
    if (!_) return;
    ce(_) && setTimeout(() => {
      const ie = W(g);
      l.setActivePage(ie);
    }, 200);
  }, [ce, W, l, g]), Vt = k((_) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    X(_) && (l.setActivePage(0), n && n(_));
  }, [C.length, X, l, n]), ze = k(() => {
    l.zoomIn();
  }, [l]), $e = k(() => {
    l.zoomOut();
  }, [l]), Ue = k(() => {
    l.resetZoom();
  }, [l]), Kt = k(() => {
    l.undo();
  }, [l]), Xt = k(() => {
    l.redo();
  }, [l]);
  ae(() => {
    const _ = (Q) => {
      if (Q.ctrlKey || Q.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Q.key) && Q.preventDefault();
        const ie = document.activeElement === m.current, fe = document.activeElement === g.current, ye = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ie || fe || !ye)
          switch (Q.key) {
            case "+":
            case "=":
              ze();
              break;
            case "-":
            case "_":
              $e();
              break;
            case "0":
              Ue();
              break;
            case "z":
              Q.shiftKey || Kt();
              break;
            case "y":
              Xt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", _), () => {
      window.removeEventListener("keydown", _);
    };
  }, [ze, $e, Ue, Kt, Xt]);
  const rr = k(() => {
    !g.current || !m.current || Be.current || (Ee.current && clearTimeout(Ee.current), Ee.current = setTimeout(() => {
      if (Be.current) {
        Ee.current = null;
        return;
      }
      const _ = W(g);
      _ !== j && _ >= 0 && l.setActivePage(_), Ee.current = null;
    }, va));
  }, [W, j, l]), or = ve(() => {
    if (!w) return 0;
    const Q = w.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Q ? Q.length : 0;
  }, [w]), sr = C.length || 1, ar = k((_) => {
    P(!0), v(_);
  }, []), Jt = k(() => {
    P(!1), v(null);
  }, []), ir = k((_, Q) => {
  }, []), cr = k((_) => {
    V(!0), te(_);
  }, []), Qt = k(() => {
    V(!1), te(null);
  }, []), lr = k((_, Q) => {
  }, []);
  return ae(() => () => {
    Ee.current && clearTimeout(Ee.current);
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "multi-page-editor", children: [
    p && /* @__PURE__ */ h.jsx(
      Lt,
      {
        currentFormat: {
          ...M,
          imageSelected: q
        },
        onFormatText: S,
        onAddPageBreak: tr,
        canUndo: N,
        canRedo: y
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ h.jsx(
        Fs,
        {
          editorView: null,
          isCollapsed: Re,
          onToggle: () => He((_) => !_),
          wordCount: or,
          pageCount: sr
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: g,
          onScroll: rr,
          children: /* @__PURE__ */ h.jsx(
            ra,
            {
              content: w,
              dimensions: de,
              pageSize: x,
              pageMargins: b,
              pageBoundaries: C,
              editorRef: m,
              onInput: er,
              onContentChange: st,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: nr,
              zoomLevel: D
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsx(
        Ht,
        {
          editorRef: m,
          onImageSelect: ar,
          onImageDeselect: Jt,
          onImageResize: ir,
          resizeOptions: {
            ...Oe,
            preserveAspectRatio: B,
            aspectRatio: B
          }
        }
      ),
      /* @__PURE__ */ h.jsx(
        Bt,
        {
          editorRef: m,
          onTableSelect: cr,
          onTableDeselect: Qt,
          onTableResize: lr
        }
      ),
      /* @__PURE__ */ h.jsx(
        $t,
        {
          editorRef: m,
          onCellSelectionChange: (_) => {
            console.log("onCellSelectionChange:", _), _ && _.mode === "row" ? (console.log("Row selected with index:", _.rowIndex), f(_.rowIndex), H(null)) : _ && _.mode === "column" ? (console.log("Column selected with index:", _.colIndex), H(_.colIndex), f(null)) : (console.log("No row/column selected, clearing selection"), f(null), H(null));
          }
        }
      ),
      q && U && /* @__PURE__ */ h.jsx(
        jt,
        {
          imageElement: U,
          initialPreserveAspectRatio: B,
          onAlignChange: (_) => {
          },
          onAspectRatioToggle: (_) => {
            A(_);
          },
          onDelete: () => {
            if (U) {
              const _ = U.getAttribute("data-key");
              _ && go(_).catch((Q) => {
                console.error("Failed to delete image from IndexedDB:", Q);
              });
            }
          },
          onClose: Jt
        }
      ),
      O && oe && /* @__PURE__ */ h.jsx(
        zt,
        {
          tableElement: oe,
          onAlignChange: (_) => {
          },
          onClose: Qt,
          selectedRowIndex: E,
          selectedColIndex: R,
          editorRef: m
        }
      ),
      u && /* @__PURE__ */ h.jsx("div", { className: "page-manager-sidebar", children: e ? tt.cloneElement(e, {
        onNavigate: Zt,
        onAddPage: Yt,
        onDeletePage: Vt,
        onPageSizeChange: Gt,
        onPageMarginsChange: qt,
        zoomLevel: D,
        canZoomIn: vt(D),
        canZoomOut: Tt(D),
        onZoomIn: ze,
        onZoomOut: $e,
        onZoomReset: Ue
      }) : /* @__PURE__ */ h.jsx(
        oa,
        {
          pageBoundaries: C,
          activePage: j,
          pageSize: x,
          pageMargins: b,
          zoomLevel: D,
          canZoomIn: vt(D),
          canZoomOut: Tt(D),
          onNavigate: Zt,
          onAddPage: Yt,
          onDeletePage: Vt,
          onPageSizeChange: Gt,
          onPageMarginsChange: qt,
          onZoomIn: ze,
          onZoomOut: $e,
          onZoomReset: Ue
        }
      ) })
    ] })
  ] });
});
Ut.displayName = "HtmlEditor";
Ut.propTypes = {
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
class Qn extends tt.Component {
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
Qn.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
Qn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Mr as COMMON_FONT_SIZES,
  nt as DEFAULT_FONT_SIZE,
  Oe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  An as DEFAULT_PAGE_SIZE,
  rt as DEFAULT_TABLE_RESIZE_OPTIONS,
  Ra as DocumentProvider,
  Lt as EditorToolbar,
  Qn as ErrorBoundary,
  Pn as FONT_SIZE_MAP,
  Ut as HtmlEditor,
  Ht as ImageResizeHandlers,
  _e as PAGE_SIZES,
  oa as PageManager,
  ra as PageView,
  F as RESIZE_HANDLERS,
  Fs as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  Bt as TableResizeHandlers,
  Na as applyImageDimensions,
  Ce as applyTableDimensions,
  ka as calculateResizeDimensions,
  la as calculateTableResizeDimensions,
  Ma as clearImages,
  ao as createResizeOverlay,
  ua as createTableResizeOverlay,
  go as deleteImage,
  La as getAllImageKeys,
  Ca as getAvailablePageSizes,
  po as getImage,
  Pa as getImageDimensions,
  Ot as getPageDimensions,
  Sa as getPixelValue,
  _a as getPointValue,
  ge as getTableStructure,
  be as isResizableImage,
  ue as isResizableTable,
  Oa as isValidFontSize,
  Aa as isValidPageSize,
  Ws as logger,
  Ir as pixelsToPoints,
  Lr as pointsToPixels,
  pt as removeResizeOverlay,
  Ve as removeTableResizeOverlay,
  fo as saveImage,
  xt as updateResizeOverlay,
  Rt as updateTableResizeOverlay,
  so as useContinuousReflow,
  Sn as useDocument,
  we as useDocumentActions,
  _n as useDocumentState,
  Hr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
