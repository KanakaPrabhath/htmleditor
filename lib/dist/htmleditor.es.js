import Ke, { createContext as rr, useContext as or, useReducer as ar, useMemo as be, useState as ie, useCallback as O, useRef as X, useEffect as oe, forwardRef as Et, createElement as lt, memo as ir, useLayoutEffect as gn, useImperativeHandle as sr } from "react";
import { v4 as vt } from "uuid";
import { createPortal as hn } from "react-dom";
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function lr() {
  if (Zt) return _e;
  Zt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return _e.Fragment = t, _e.jsx = n, _e.jsxs = n, _e;
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
var Yt;
function ur() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === $ ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case S:
          return "Fragment";
        case H:
          return "Profiler";
        case L:
          return "StrictMode";
        case g:
          return "Suspense";
        case A:
          return "SuspenseList";
        case j:
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
          case I:
            return (f._context.displayName || "Context") + ".Consumer";
          case p:
            var R = f.render;
            return f = f.displayName, f || (f = R.displayName || R.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case w:
            return R = f.displayName || null, R !== null ? R : e(f.type) || "Memo";
          case k:
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
    function n(f) {
      try {
        t(f);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var M = R.error, _ = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return M.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(f);
      }
    }
    function r(f) {
      if (f === S) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === k)
        return "<...>";
      try {
        var R = e(f);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var f = K.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (N.call(f, "key")) {
        var R = Object.getOwnPropertyDescriptor(f, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function s(f, R) {
      function M() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: M,
        configurable: !0
      });
    }
    function h() {
      var f = e(this.type);
      return ne[f] || (ne[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, R, M, _, U, F) {
      var D = M.ref;
      return f = {
        $$typeof: E,
        type: f,
        key: R,
        props: M,
        _owner: _
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(f, "ref", {
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
        value: U
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, R, M, _, U, F) {
      var D = R.children;
      if (D !== void 0)
        if (_)
          if (G(D)) {
            for (_ = 0; _ < D.length; _++)
              c(D[_]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(D);
      if (N.call(R, "key")) {
        D = e(f);
        var W = Object.keys(R).filter(function(q) {
          return q !== "key";
        });
        _ = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", v[D + _] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          D,
          W,
          D
        ), v[D + _] = !0);
      }
      if (D = null, M !== void 0 && (n(M), D = "" + M), o(R) && (n(R.key), D = "" + R.key), "key" in R) {
        M = {};
        for (var Z in R)
          Z !== "key" && (M[Z] = R[Z]);
      } else M = R;
      return D && s(
        M,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        D,
        M,
        i(),
        U,
        F
      );
    }
    function c(f) {
      u(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === k && (f._payload.status === "fulfilled" ? u(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === E;
    }
    var x = Ke, E = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), K = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, G = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var ee, ne = {}, ae = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), ue = te(r(a)), v = {};
    Pe.Fragment = S, Pe.jsx = function(f, R, M) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        f,
        R,
        M,
        !1,
        _ ? Error("react-stack-top-frame") : ae,
        _ ? te(r(f)) : ue
      );
    }, Pe.jsxs = function(f, R, M) {
      var _ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        f,
        R,
        M,
        !0,
        _ ? Error("react-stack-top-frame") : ae,
        _ ? te(r(f)) : ue
      );
    };
  })()), Pe;
}
var Vt;
function dr() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? je.exports = lr() : je.exports = ur()), je.exports;
}
var m = dr();
const ut = 100, dt = 50, ft = 200, Kt = 5, pt = (e) => e < ft, gt = (e) => e > dt, fr = 96, ze = (e) => Math.round(e * fr), Ze = {
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
}, ge = "NORMAL", mn = (e = ge) => {
  const t = Ze[e] || Ze[ge];
  return {
    top: ze(t.top),
    bottom: ze(t.bottom),
    left: ze(t.left),
    right: ze(t.right)
  };
}, pr = (e = ge) => {
  const t = mn(e);
  return t.top + t.bottom;
}, gr = () => Object.keys(Ze), hr = (e) => {
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
}, yn = "A4", xt = (e) => {
  const t = Re[e] || Re[yn];
  return {
    width: t.width,
    height: t.height
  };
}, ai = (e) => Object.keys(Re).includes(e), ii = () => Object.keys(Re), Me = yn, ve = "<p><br></p>", mr = "continuous", Oe = (e, t = Me) => ({
  id: vt(),
  index: e,
  size: t,
  content: ve,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? ve : e, bn = (e, t = Me) => (e.length > 0 ? e : [Oe(0, t)]).map((r, i) => ({
  id: r.id || vt(),
  index: i,
  size: r.size || t,
  content: We(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), yr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: xt(e).height
}], $e = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), ht = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Me, r = bn(e.pages || [Oe(0, n)], n);
  return {
    id: vt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || mr,
    continuousContent: e.continuousContent || ve,
    pageBoundaries: e.pageBoundaries || yr(n),
    zoomLevel: e.zoomLevel || ut,
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
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case z.INITIALIZE_DOCUMENT: {
      const { initialContent: r = ve, pageSize: i = Me } = t.payload || {}, a = { ...Oe(0, i), content: We(r) };
      return ht({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[r] = {
        ...a[r],
        content: We(i)
      }, {
        ...e,
        pages: a,
        updatedAt: n
      };
    }
    case z.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = bn(r.pages || [], e.pageSize), a = Array.isArray(r.pageBreaks) ? r.pageBreaks : $e(i);
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: n
      };
    }
    case z.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, Oe(r, e.pageSize));
      const a = i.map((s, h) => ({
        ...s,
        index: h,
        size: e.pageSize
      })), o = $e(a);
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: n
      };
    }
    case z.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const a = i.map((h, l) => ({
        ...h,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : r <= o && o > 0 && (o -= 1);
      const s = $e(a);
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: n
      };
    }
    case z.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= i ? e : {
        ...e,
        activePage: r,
        updatedAt: n
      };
    }
    case z.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        xt(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((o, s) => ({
        ...o,
        index: s,
        size: r
      })), a = $e(i);
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: a,
        updatedAt: n
      };
    }
    case z.RESET_DOCUMENT:
      return ht();
    case z.UPDATE_CONTINUOUS_CONTENT: {
      const r = We(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case z.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const i = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: i,
        updatedAt: n
      };
    }
    case z.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (r === "end")
        o = o + a + "<p><br></p>";
      else if (typeof r == "number") {
        const s = o.substring(0, r), h = o.substring(r);
        o = s + a + h;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = o;
        const h = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && h.length === 0)
          o = o + a + "<p><br></p>";
        else if (i < h.length) {
          const l = h[i], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const c = document.createElement("p");
          c.innerHTML = "<br>", l.parentNode.insertBefore(d, l.nextSibling), d.parentNode.insertBefore(c, d.nextSibling), o = s.innerHTML;
        } else
          o = o + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: n
      };
    }
    case z.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[r] && a[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, h) => {
        s.setAttribute("data-page-number", String(h + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: n
      };
    }
    case z.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return r === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== ve).join(`
`) || ve : e.continuousContent && e.continuousContent !== ve && (a = [{ ...Oe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: a,
        updatedAt: n
      };
    }
    case z.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < dt || r > ft ? (console.warn(`Invalid zoom level: ${r}. Must be between ${dt} and ${ft}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case z.ZOOM_IN: {
      if (!pt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Kt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case z.ZOOM_OUT: {
      if (!gt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Kt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case z.RESET_ZOOM:
      return e.zoomLevel === ut ? e : {
        ...e,
        zoomLevel: ut,
        updatedAt: n
      };
    case z.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case z.RECORD_OPERATION: {
      const { operation: r, inverseOperation: i } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: r, inverseOperation: i }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: n
      };
    }
    case z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return r.inverseOperation && (a = mt(e, r.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, r],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return r.operation && (a = mt(e, r.operation)), {
        ...a,
        undoStack: [...e.undoStack, r],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: n
      };
    }
    case z.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: n
      };
    default:
      return e;
  }
}, Tn = rr(null), si = ({ children: e, initialState: t = {} }) => {
  const [n, r] = ar(mt, ht(t)), i = be(() => ({
    initializeDocument: (o) => r({ type: z.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => r({ type: z.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => r({ type: z.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => r({ type: z.UPDATE_PAGES, payload: o }),
    addPage: (o) => r({ type: z.ADD_PAGE, payload: o }),
    deletePage: (o) => r({ type: z.DELETE_PAGE, payload: o }),
    setActivePage: (o) => r({ type: z.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => r({ type: z.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => r({ type: z.RESET_DOCUMENT }),
    updateContinuousContent: (o) => r({ type: z.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => r({ type: z.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => r({ type: z.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => r({ type: z.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => r({ type: z.SET_EDITOR_MODE, payload: o }),
    setZoomLevel: (o) => r({ type: z.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => r({ type: z.ZOOM_IN }),
    zoomOut: () => r({ type: z.ZOOM_OUT }),
    resetZoom: () => r({ type: z.RESET_ZOOM }),
    updatePageMargins: (o) => r({ type: z.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, s) => r({
      type: z.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: s }
    }),
    undo: () => r({ type: z.UNDO }),
    redo: () => r({ type: z.REDO }),
    clearUndoRedo: () => r({ type: z.CLEAR_UNDO_REDO })
  }), []), a = be(() => ({
    state: n,
    actions: i,
    dispatch: r
  }), [n, i]);
  return /* @__PURE__ */ m.jsx(Tn.Provider, { value: a, children: e });
}, En = () => {
  const e = or(Tn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, vn = () => {
  const { state: e } = En();
  return e;
}, xe = () => {
  const { actions: e } = En();
  return e;
};
var Ue = { exports: {} }, Fe = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function br() {
  if (Xt) return J;
  Xt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function I(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case t:
          switch (p = p.type, p) {
            case h:
            case l:
            case r:
            case a:
            case i:
            case c:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case d:
                case E:
                case x:
                case o:
                  return p;
                default:
                  return g;
              }
          }
        case n:
          return g;
      }
    }
  }
  function y(p) {
    return I(p) === l;
  }
  return J.AsyncMode = h, J.ConcurrentMode = l, J.ContextConsumer = s, J.ContextProvider = o, J.Element = t, J.ForwardRef = d, J.Fragment = r, J.Lazy = E, J.Memo = x, J.Portal = n, J.Profiler = a, J.StrictMode = i, J.Suspense = c, J.isAsyncMode = function(p) {
    return y(p) || I(p) === h;
  }, J.isConcurrentMode = y, J.isContextConsumer = function(p) {
    return I(p) === s;
  }, J.isContextProvider = function(p) {
    return I(p) === o;
  }, J.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, J.isForwardRef = function(p) {
    return I(p) === d;
  }, J.isFragment = function(p) {
    return I(p) === r;
  }, J.isLazy = function(p) {
    return I(p) === E;
  }, J.isMemo = function(p) {
    return I(p) === x;
  }, J.isPortal = function(p) {
    return I(p) === n;
  }, J.isProfiler = function(p) {
    return I(p) === a;
  }, J.isStrictMode = function(p) {
    return I(p) === i;
  }, J.isSuspense = function(p) {
    return I(p) === c;
  }, J.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === l || p === a || p === i || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === E || p.$$typeof === x || p.$$typeof === o || p.$$typeof === s || p.$$typeof === d || p.$$typeof === S || p.$$typeof === L || p.$$typeof === H || p.$$typeof === b);
  }, J.typeOf = I, J;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Tr() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
    function I(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === r || C === l || C === a || C === i || C === c || C === u || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === x || C.$$typeof === o || C.$$typeof === s || C.$$typeof === d || C.$$typeof === S || C.$$typeof === L || C.$$typeof === H || C.$$typeof === b);
    }
    function y(C) {
      if (typeof C == "object" && C !== null) {
        var le = C.$$typeof;
        switch (le) {
          case t:
            var pe = C.type;
            switch (pe) {
              case h:
              case l:
              case r:
              case a:
              case i:
              case c:
                return pe;
              default:
                var we = pe && pe.$$typeof;
                switch (we) {
                  case s:
                  case d:
                  case E:
                  case x:
                  case o:
                    return we;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var p = h, g = l, A = s, w = o, k = t, j = d, $ = r, K = E, N = x, G = n, te = a, ee = i, ne = c, ae = !1;
    function ue(C) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(C) || y(C) === h;
    }
    function v(C) {
      return y(C) === l;
    }
    function f(C) {
      return y(C) === s;
    }
    function R(C) {
      return y(C) === o;
    }
    function M(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function _(C) {
      return y(C) === d;
    }
    function U(C) {
      return y(C) === r;
    }
    function F(C) {
      return y(C) === E;
    }
    function D(C) {
      return y(C) === x;
    }
    function W(C) {
      return y(C) === n;
    }
    function Z(C) {
      return y(C) === a;
    }
    function q(C) {
      return y(C) === i;
    }
    function se(C) {
      return y(C) === c;
    }
    Q.AsyncMode = p, Q.ConcurrentMode = g, Q.ContextConsumer = A, Q.ContextProvider = w, Q.Element = k, Q.ForwardRef = j, Q.Fragment = $, Q.Lazy = K, Q.Memo = N, Q.Portal = G, Q.Profiler = te, Q.StrictMode = ee, Q.Suspense = ne, Q.isAsyncMode = ue, Q.isConcurrentMode = v, Q.isContextConsumer = f, Q.isContextProvider = R, Q.isElement = M, Q.isForwardRef = _, Q.isFragment = U, Q.isLazy = F, Q.isMemo = D, Q.isPortal = W, Q.isProfiler = Z, Q.isStrictMode = q, Q.isSuspense = se, Q.isValidElementType = I, Q.typeOf = y;
  })()), Q;
}
var Qt;
function xn() {
  return Qt || (Qt = 1, process.env.NODE_ENV === "production" ? Fe.exports = br() : Fe.exports = Tr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tt, en;
function Er() {
  if (en) return tt;
  en = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
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
  return tt = i() ? Object.assign : function(a, o) {
    for (var s, h = r(a), l, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var c in s)
        t.call(s, c) && (h[c] = s[c]);
      if (e) {
        l = e(s);
        for (var u = 0; u < l.length; u++)
          n.call(s, l[u]) && (h[l[u]] = s[l[u]]);
      }
    }
    return h;
  }, tt;
}
var nt, tn;
function wt() {
  if (tn) return nt;
  tn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nt = e, nt;
}
var rt, nn;
function wn() {
  return nn || (nn = 1, rt = Function.call.bind(Object.prototype.hasOwnProperty)), rt;
}
var ot, rn;
function vr() {
  if (rn) return ot;
  rn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wt(), n = {}, r = /* @__PURE__ */ wn();
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
      for (var d in a)
        if (r(a, d)) {
          var c;
          try {
            if (typeof a[d] != "function") {
              var u = Error(
                (h || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            c = a[d](o, d, h, s, null, t);
          } catch (E) {
            c = E;
          }
          if (c && !(c instanceof Error) && e(
            (h || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in n)) {
            n[c.message] = !0;
            var x = l ? l() : "";
            e(
              "Failed " + s + " type: " + c.message + (x ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ot = i, ot;
}
var at, on;
function xr() {
  if (on) return at;
  on = 1;
  var e = xn(), t = Er(), n = /* @__PURE__ */ wt(), r = /* @__PURE__ */ wn(), i = /* @__PURE__ */ vr(), a = function() {
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
  return at = function(s, h) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function c(v) {
      var f = v && (l && v[l] || v[d]);
      if (typeof f == "function")
        return f;
    }
    var u = "<<anonymous>>", x = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: H(),
      arrayOf: I,
      element: y(),
      elementType: p(),
      instanceOf: g,
      node: j(),
      objectOf: w,
      oneOf: A,
      oneOfType: k,
      shape: K,
      exact: N
    };
    function E(v, f) {
      return v === f ? v !== 0 || 1 / v === 1 / f : v !== v && f !== f;
    }
    function b(v, f) {
      this.message = v, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function S(v) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, R = 0;
      function M(U, F, D, W, Z, q, se) {
        if (W = W || u, q = q || D, se !== n) {
          if (h) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = W + ":" + D;
            !f[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[le] = !0, R++);
          }
        }
        return F[D] == null ? U ? F[D] === null ? new b("The " + Z + " `" + q + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new b("The " + Z + " `" + q + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : v(F, D, W, Z, q);
      }
      var _ = M.bind(null, !1);
      return _.isRequired = M.bind(null, !0), _;
    }
    function L(v) {
      function f(R, M, _, U, F, D) {
        var W = R[M], Z = ee(W);
        if (Z !== v) {
          var q = ne(W);
          return new b(
            "Invalid " + U + " `" + F + "` of type " + ("`" + q + "` supplied to `" + _ + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return S(f);
    }
    function H() {
      return S(o);
    }
    function I(v) {
      function f(R, M, _, U, F) {
        if (typeof v != "function")
          return new b("Property `" + F + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var D = R[M];
        if (!Array.isArray(D)) {
          var W = ee(D);
          return new b("Invalid " + U + " `" + F + "` of type " + ("`" + W + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var Z = 0; Z < D.length; Z++) {
          var q = v(D, Z, _, U, F + "[" + Z + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return S(f);
    }
    function y() {
      function v(f, R, M, _, U) {
        var F = f[R];
        if (!s(F)) {
          var D = ee(F);
          return new b("Invalid " + _ + " `" + U + "` of type " + ("`" + D + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(v);
    }
    function p() {
      function v(f, R, M, _, U) {
        var F = f[R];
        if (!e.isValidElementType(F)) {
          var D = ee(F);
          return new b("Invalid " + _ + " `" + U + "` of type " + ("`" + D + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(v);
    }
    function g(v) {
      function f(R, M, _, U, F) {
        if (!(R[M] instanceof v)) {
          var D = v.name || u, W = ue(R[M]);
          return new b("Invalid " + U + " `" + F + "` of type " + ("`" + W + "` supplied to `" + _ + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return S(f);
    }
    function A(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(R, M, _, U, F) {
        for (var D = R[M], W = 0; W < v.length; W++)
          if (E(D, v[W]))
            return null;
        var Z = JSON.stringify(v, function(se, C) {
          var le = ne(C);
          return le === "symbol" ? String(C) : C;
        });
        return new b("Invalid " + U + " `" + F + "` of value `" + String(D) + "` " + ("supplied to `" + _ + "`, expected one of " + Z + "."));
      }
      return S(f);
    }
    function w(v) {
      function f(R, M, _, U, F) {
        if (typeof v != "function")
          return new b("Property `" + F + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var D = R[M], W = ee(D);
        if (W !== "object")
          return new b("Invalid " + U + " `" + F + "` of type " + ("`" + W + "` supplied to `" + _ + "`, expected an object."));
        for (var Z in D)
          if (r(D, Z)) {
            var q = v(D, Z, _, U, F + "." + Z, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return S(f);
    }
    function k(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < v.length; f++) {
        var R = v[f];
        if (typeof R != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(R) + " at index " + f + "."
          ), o;
      }
      function M(_, U, F, D, W) {
        for (var Z = [], q = 0; q < v.length; q++) {
          var se = v[q], C = se(_, U, F, D, W, n);
          if (C == null)
            return null;
          C.data && r(C.data, "expectedType") && Z.push(C.data.expectedType);
        }
        var le = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new b("Invalid " + D + " `" + W + "` supplied to " + ("`" + F + "`" + le + "."));
      }
      return S(M);
    }
    function j() {
      function v(f, R, M, _, U) {
        return G(f[R]) ? null : new b("Invalid " + _ + " `" + U + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return S(v);
    }
    function $(v, f, R, M, _) {
      return new b(
        (v || "React class") + ": " + f + " type `" + R + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function K(v) {
      function f(R, M, _, U, F) {
        var D = R[M], W = ee(D);
        if (W !== "object")
          return new b("Invalid " + U + " `" + F + "` of type `" + W + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var Z in v) {
          var q = v[Z];
          if (typeof q != "function")
            return $(_, U, F, Z, ne(q));
          var se = q(D, Z, _, U, F + "." + Z, n);
          if (se)
            return se;
        }
        return null;
      }
      return S(f);
    }
    function N(v) {
      function f(R, M, _, U, F) {
        var D = R[M], W = ee(D);
        if (W !== "object")
          return new b("Invalid " + U + " `" + F + "` of type `" + W + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var Z = t({}, R[M], v);
        for (var q in Z) {
          var se = v[q];
          if (r(v, q) && typeof se != "function")
            return $(_, U, F, q, ne(se));
          if (!se)
            return new b(
              "Invalid " + U + " `" + F + "` key `" + q + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(R[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var C = se(D, q, _, U, F + "." + q, n);
          if (C)
            return C;
        }
        return null;
      }
      return S(f);
    }
    function G(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(G);
          if (v === null || s(v))
            return !0;
          var f = c(v);
          if (f) {
            var R = f.call(v), M;
            if (f !== v.entries) {
              for (; !(M = R.next()).done; )
                if (!G(M.value))
                  return !1;
            } else
              for (; !(M = R.next()).done; ) {
                var _ = M.value;
                if (_ && !G(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(v, f) {
      return v === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function ee(v) {
      var f = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : te(f, v) ? "symbol" : f;
    }
    function ne(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var f = ee(v);
      if (f === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function ae(v) {
      var f = ne(v);
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
    function ue(v) {
      return !v.constructor || !v.constructor.name ? u : v.constructor.name;
    }
    return x.checkPropTypes = i, x.resetWarningCache = i.resetWarningCache, x.PropTypes = x, x;
  }, at;
}
var it, an;
function wr() {
  if (an) return it;
  an = 1;
  var e = /* @__PURE__ */ wt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, it = function() {
    function r(o, s, h, l, d, c) {
      if (c !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, it;
}
var sn;
function Ar() {
  if (sn) return Ue.exports;
  if (sn = 1, process.env.NODE_ENV !== "production") {
    var e = xn(), t = !0;
    Ue.exports = /* @__PURE__ */ xr()(e.isElement, t);
  } else
    Ue.exports = /* @__PURE__ */ wr()();
  return Ue.exports;
}
var Rr = /* @__PURE__ */ Ar();
const T = /* @__PURE__ */ cr(Rr), An = {
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
}, Sr = [
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
], Xe = "16px", Cr = (e) => Math.round(e * 96 / 72), _r = (e) => Math.round(e * 72 / 96 * 2) / 2, ci = (e) => {
  const t = Object.values(An).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Cr(e)}px`;
}, li = (e) => {
  const t = parseInt(e), n = Object.values(An).find((r) => r.px === t);
  return n ? n.pt : _r(t);
}, ui = (e) => {
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
}, Pr = {
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
}, cn = {
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
}, Or = () => {
  const [e, t] = ie(cn), n = xe(), r = O((c, u, x = null) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const b = E.getRangeAt(0);
      if (!b.toString())
        return t((L) => ({ ...L, [c]: u })), !1;
      try {
        const L = document.createElement("span");
        L.style[c] = u;
        const H = b.extractContents();
        return L.appendChild(H), b.insertNode(L), b.selectNodeContents(L), E.removeAllRanges(), E.addRange(b), t((I) => ({ ...I, [c]: u })), !0;
      } catch {
        if (x) {
          const L = c === "fontSize" ? Pr[u] || "3" : u;
          return document.execCommand(x, !1, L), t((H) => ({ ...H, [c]: u })), !0;
        }
        return !1;
      }
    } catch (E) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, E), !1;
    }
  }, []), i = O((c) => r("fontFamily", c, "fontName"), [r]), a = O((c) => r("fontSize", c, "fontSize"), [r]), o = O((c) => {
    t((u) => ({
      ...u,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), s = O((c) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const x = u.getRangeAt(0), E = x.toString(), S = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!S)
        return !1;
      if (!E) {
        const H = x.startContainer, I = H.nodeType === Node.TEXT_NODE ? H.parentElement : H, y = Ye(I) || Nr();
        return y && (y.style.textAlign = S, o(S)), !0;
      }
      const L = kr(x);
      if (L.length === 0) {
        const H = document.createElement("p");
        H.style.textAlign = S;
        const I = x.extractContents();
        H.appendChild(I), x.insertNode(H), x.selectNodeContents(H), u.removeAllRanges(), u.addRange(x);
      } else
        L.forEach((H) => {
          H.style.textAlign = S;
        });
      return o(S), !0;
    } catch (u) {
      return console.warn("[useFormatting] Text alignment failed:", u), !1;
    }
  }, [o]), h = O((c, u = null) => {
    try {
      if (c === "undo") {
        n.undo();
        return;
      }
      if (c === "redo") {
        n.redo();
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
        i(u);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(c)) {
        s(c);
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
          t((E) => ({ ...E, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (x) {
      console.warn(`[useFormatting] Error executing command "${c}":`, x);
    }
  }, [a, i, s, n]), l = O(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0), x = u.toString();
      let E = Xe, b = "Arial", S = "p", L = "left";
      if (x) {
        const I = u.startContainer, y = I.nodeType === Node.TEXT_NODE ? I.parentElement : I;
        if (y) {
          const p = window.getComputedStyle(y), g = p.fontSize, A = p.fontFamily;
          g && g.endsWith("px") && (E = g), A && A !== "serif" && (b = A.split(",")[0].replace(/['"]/g, "").trim());
          const w = Ye(y);
          if (w) {
            const k = w.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(k) && (S = k);
            const $ = window.getComputedStyle(w).textAlign;
            ["left", "center", "right", "justify"].includes($) && (L = $);
          }
        }
      }
      const H = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: L === "left",
        alignCenter: L === "center",
        alignRight: L === "right",
        alignJustify: L === "justify",
        fontFamily: b,
        fontSize: E,
        headingLevel: S
      };
      t((I) => ({
        ...I,
        ...H
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), d = O(() => {
    t(cn);
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
    const n = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(n))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function kr(e) {
  const t = [], n = e.startContainer, r = e.endContainer, i = Ye(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), a = Ye(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
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
function Nr() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), n = document.createElement("p");
    return n.innerHTML = "<br>", t.insertNode(n), t.selectNodeContents(n), t.collapse(!0), e.removeAllRanges(), e.addRange(t), n;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
const Te = 'page-break, [data-page-break="true"]', Rn = (e) => Re[e] || Re.A4, Mr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Rn(n), i = e.querySelectorAll(Te), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const o = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((h, l) => {
    const c = h.getBoundingClientRect().top - o.top + s;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: c,
      height: r.height
    });
  }), a;
}, Sn = (e, t = 100, n = ge) => {
  const r = Rn(e), i = pr(n), a = r.height - i, o = t / 100;
  return a / o;
}, Lr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(Te);
    if (n.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), i = r.top + r.height / 2;
    for (let a = n.length - 1; a >= 0; a--)
      if (n[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (n) {
    return console.warn("[getCurrentPage] Failed to calculate page:", n), 0;
  }
}, ln = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let n = [], r = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? r.length > 0 && (n.push(r), r = []) : r.push(i);
  return r.length > 0 && n.push(r), n.length === 0 && t.length > 0 && n.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), n;
}, Ir = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const a = n[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Dr = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Hr = (e, t, n, r, i, a, o) => {
  if (!e)
    return !1;
  try {
    const h = Sn(n, r, i) * (t - 1), l = Array.from(e.children);
    let d = 0, c = null;
    for (let u = 0; u < l.length; u++) {
      const x = l[u];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const E = Ir(x);
      if (d + E > h) {
        c = x;
        break;
      }
      d += E;
    }
    if (c) {
      const u = document.createElement("page-break");
      if (u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(u, c), a) {
        const x = e.innerHTML;
        a(x);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const u = document.createElement("page-break");
      u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), e.appendChild(u);
      const x = document.createElement("p");
      if (x.innerHTML = "<br>", e.appendChild(x), a) {
        const E = e.innerHTML;
        a(E);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, Br = (e, t, n, r, i, a, o) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(Te));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let d = !1, c = [], u = null;
    if (t === 0) {
      const E = h[0];
      if (!E)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let b = e.firstChild;
      for (; b && b !== E; )
        c.push(b), b = b.nextSibling;
      u = E;
    } else {
      const E = h[t - 1];
      if (!E)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const b = h[t];
      let S = E.nextSibling;
      for (; S && S !== b; )
        c.push(S), S = S.nextSibling;
      u = E;
    }
    if (l && l.rangeCount > 0) {
      const b = l.getRangeAt(0).startContainer;
      for (const S of c)
        if (S.contains(b) || S === b) {
          d = !0;
          break;
        }
    }
    if (u && u.parentNode && u.remove(), c.forEach((E) => {
      E.parentNode && E.remove();
    }), e.querySelectorAll(Te).forEach((E, b) => {
      E.setAttribute("data-page-number", String(b + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), r) {
      const E = e.innerHTML;
      r(E);
    }
    return i && setTimeout(() => {
      i(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, jr = (e) => {
  if (e)
    try {
      e.querySelectorAll(Te).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, zr = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), jr(t), n) {
      const a = t.innerHTML;
      n(a);
    }
    return r && setTimeout(() => {
      r(), i && setTimeout(() => {
        i();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, $r = 200, Ur = 50, un = 3, Fr = 20, Cn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const a = n[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Gr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = Cn(a);
    if (o < 1)
      continue;
    if (n + o > t)
      return r === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: n
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: n
      };
    n += o, r = a;
  }
  return null;
}, Wr = (e, t, n, r, i, a, o, s) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const h = Sn(t, n, r);
    let l = ln(e), d = !1, c = 0;
    for (let u = 0; u < l.length && c < un; u++) {
      const x = l[u], E = Gr(x, h);
      if (E && E.overflowIndex > 0) {
        let b = 0;
        for (let I = 0; I < x.length; I++) {
          const y = x[I];
          y && y.getBoundingClientRect && (b += Cn(y));
        }
        if (b - h < Fr)
          continue;
        const L = u + 2;
        Dr(E.overflowElement, L) && (d = !0, c++, l = ln(e));
      }
    }
    if (d) {
      if (i) {
        const u = e.innerHTML;
        i(u);
      }
      setTimeout(() => {
        a && a(), c >= un && s && setTimeout(() => {
          o.current || s();
        }, 100);
      }, Ur);
    }
    return d;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    o.current = !1;
  }
}, qr = (e, t, n = $r) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Zr = 400, _n = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const a = e.querySelectorAll(Te)[t - 1];
        a && a.nextSibling && (n = a.nextSibling, r = 0);
      }
      if (n) {
        const i = document.createRange(), a = window.getSelection();
        n.nodeType === Node.TEXT_NODE ? i.setStart(n, r) : i.setStart(n, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (n) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", n);
    }
  }
}, Yr = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (n === 0)
      i = t;
    else {
      const o = t.querySelectorAll(Te)[n - 1];
      if (o)
        i = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), o = e.getBoundingClientRect(), s = e.scrollTop + (a.top - o.top);
      e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : _n(t, n);
      }, Zr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Vr = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Kr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const i = e.querySelectorAll(Te);
  for (const d of i)
    if (n.comparePoint(d, 0) > 0)
      r++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(n.startContainer, n.startOffset);
  const s = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), h = s.length, l = (s.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: l,
    charOffset: h
  };
}, Xr = 300, Jr = (e, t, n = 100, r = "NARROW") => {
  const i = xe(), a = X(null), o = X(null), s = X(e), h = X(n), l = X(r), d = X(!1);
  oe(() => {
    s.current = e;
  }, [e]), oe(() => {
    h.current = n;
  }, [n]), oe(() => {
    l.current = r;
  }, [r]), oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = O((g = {}) => t?.current ? Mr(t.current, g) : [], [t]), u = O((g = {}) => {
    const A = c(g);
    return i.updatePageBoundaries(A), A;
  }, [c, i]), x = O((g = {}) => {
    const A = typeof g.delay == "number" ? g.delay : Xr;
    Vr(u, a, g, A);
  }, [u]), E = O(() => {
    t?.current && Wr(
      t.current,
      s.current,
      h.current,
      l.current,
      i.updateContinuousContent,
      u,
      d,
      E
    );
  }, [t, i, u]), b = O((g) => {
    qr(E, o, g);
  }, [E]), S = O((g) => !g?.current || !t?.current ? 0 : Lr(g.current, t.current), [t]), L = O((g) => {
    t?.current && _n(t.current, g);
  }, [t]), H = O((g, A) => {
    if (!A?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Yr(A.current, t.current, g, L);
  }, [t, L]), I = O(async (g) => t?.current ? Hr(
    t.current,
    g,
    s.current,
    h.current,
    l.current,
    i.updateContinuousContent,
    u
  ) : !1, [t, i, u]), y = O((g) => t?.current ? Br(
    t.current,
    g,
    c,
    i.updateContinuousContent,
    u,
    L,
    E
  ) : !1, [t, c, i, u, L, E]), p = O((g) => t?.current ? zr(
    g,
    t.current,
    i.updateContinuousContent,
    u,
    E
  ) : !1, [t, i, u, E]);
  return oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), be(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: x,
    updateBoundaries: u,
    getCurrentPage: S,
    scrollToPage: H,
    positionCursorAtPage: L,
    checkAndReflow: E,
    triggerAutoReflow: b,
    removePageAndContent: y,
    removePageBreak: p,
    insertPageBreakAtBoundary: I,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    x,
    u,
    S,
    H,
    L,
    E,
    b,
    y,
    p,
    I
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
}, B = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function di({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: a,
  startHeight: o,
  options: s = Se
}) {
  const h = r - t, l = i - n;
  let d = a, c = o;
  switch (e) {
    case B.TOP_LEFT:
      d = Math.max(s.minWidth, a - h), c = Math.max(s.minHeight, o - l);
      break;
    case B.TOP_RIGHT:
      d = Math.max(s.minWidth, a + h), c = Math.max(s.minHeight, o - l);
      break;
    case B.BOTTOM_LEFT:
      d = Math.max(s.minWidth, a - h), c = Math.max(s.minHeight, o + l);
      break;
    case B.BOTTOM_RIGHT:
      d = Math.max(s.minWidth, a + h), c = Math.max(s.minHeight, o + l);
      break;
    case B.TOP:
      c = Math.max(s.minHeight, o - l);
      break;
    case B.BOTTOM:
      c = Math.max(s.minHeight, o + l);
      break;
    case B.LEFT:
      d = Math.max(s.minWidth, a - h);
      break;
    case B.RIGHT:
      d = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: d, height: c };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const u = a / o;
    [
      B.TOP_LEFT,
      B.TOP_RIGHT,
      B.BOTTOM_LEFT,
      B.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(s.minHeight, d / u) : d = Math.max(s.minWidth, c * u) : [B.TOP, B.BOTTOM].includes(e) ? d = c * u : [B.LEFT, B.RIGHT].includes(e) && (c = d / u);
  }
  return s.maxWidth && d > s.maxWidth && (d = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (c = d / (a / o))), s.maxHeight && c > s.maxHeight && (c = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (d = c * (a / o))), d = Math.max(s.minWidth, d), c = Math.max(s.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function me(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function fi(e) {
  return me(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function pi(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Qr(e, t = Se) {
  if (!me(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(B).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = eo(a), o.style.pointerEvents = "all", Pn(o, a, r.width, r.height), n.appendChild(o);
  }), n;
}
function eo(e) {
  switch (e) {
    case B.TOP_LEFT:
    case B.BOTTOM_RIGHT:
      return "nwse-resize";
    case B.TOP_RIGHT:
    case B.BOTTOM_LEFT:
      return "nesw-resize";
    case B.TOP:
    case B.BOTTOM:
      return "ns-resize";
    case B.LEFT:
    case B.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Pn(e, t, n, r) {
  switch (t) {
    case B.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case B.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case B.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case B.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case B.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case B.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case B.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case B.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function yt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Pn(i, a, n.width, n.height);
  });
}
function st(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const to = "html-editor-storage", no = 1, fe = "images";
function ro() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const n = indexedDB.open(to, no);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const i = r.target.result;
      i.objectStoreNames.contains(fe) || i.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function oo(e) {
  return new Promise((t, n) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      n(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      n(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (a) => {
      const o = a.target.result, h = o.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        n(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Le(), d = `editor-image-${ro()}`, u = l.transaction([fe], "readwrite").objectStore(fe), x = {
          key: d,
          dataUrl: o,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, E = u.add(x);
        E.onsuccess = () => {
          l.close(), t(d);
        }, E.onerror = () => {
          l.close(), n(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        n(l);
      }
    }, i.onerror = () => {
      n(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function ao(e) {
  try {
    const t = await Le();
    return new Promise((n, r) => {
      const o = t.transaction([fe], "readonly").objectStore(fe).get(e);
      o.onsuccess = () => {
        t.close();
        const s = o.result;
        n(s ? s.dataUrl : null);
      }, o.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function io(e) {
  try {
    const t = await Le();
    return new Promise((n, r) => {
      const o = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
      o.onsuccess = () => {
        t.close(), n();
      }, o.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function gi() {
  try {
    const e = await Le();
    return new Promise((t, n) => {
      const a = e.transaction([fe], "readwrite").objectStore(fe).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), n(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function hi() {
  try {
    const e = await Le();
    return new Promise((t, n) => {
      const a = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), n(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const On = [
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
], so = [
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
], co = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function lo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function kn(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function qe(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, ke(n) || "<p><br></p>";
}
function uo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function fo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => On.includes(n.tagName));
}
function po(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      On.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function ke(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${lo(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, o = a.tagName, s = o.toLowerCase(), h = kn(a);
      if (o === "DIV") {
        const l = ke(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        fo(a) ? t.push(po(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = uo(a);
        t.push(`<${s}${h}>${l}</${s}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(go(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(ho(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = ke(a);
        t.push(`<blockquote${h}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (so.includes(o))
        t.push(a.outerHTML);
      else if (o === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (o === "HR")
        t.push(a.outerHTML);
      else if (o === "FIGURE")
        t.push(a.outerHTML);
      else if (co.includes(o))
        t.push(a.outerHTML);
      else {
        const l = ke(a);
        t.push(`<${s}${h}>${l}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function go(e) {
  const t = e.tagName.toLowerCase(), n = kn(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const a = ke(i);
      a.trim() && r.push(`<li>${a}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function ho(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), dn = (e) => {
  const t = yo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), bo = (e) => {
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
const Eo = Et(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: a,
    iconNode: o,
    ...s
  }, h) => lt(
    "svg",
    {
      ref: h,
      ...To,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nn("lucide", i),
      ...!a && !bo(s) && { "aria-hidden": "true" },
      ...s
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
const V = (e, t) => {
  const n = Et(
    ({ className: r, ...i }, a) => lt(Eo, {
      ref: a,
      iconNode: t,
      className: Nn(
        `lucide-${mo(dn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = dn(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], xo = V("bold", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ao = V("chevron-left", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], So = V("chevron-right", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], _o = V("file-check", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ve = V("file-text", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ko = V("hash", Oo);
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
], Mo = V("heading-1", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Io = V("heading-2", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Ho = V("heading-3", Do);
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
], jo = V("image-upscale", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], $o = V("image", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Fo = V("italic", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Wo = V("link", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Zo = V("list-indent-decrease", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Vo = V("list-indent-increase", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Xo = V("list-ordered", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Mn = V("list", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ea = V("plus", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], na = V("redo", ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], oa = V("scaling", ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ia = V("settings", aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], ca = V("strikethrough", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ua = V("table", la);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], At = V("text-align-center", da);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Rt = V("text-align-end", fa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ga = V("text-align-justify", pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], St = V("text-align-start", ha);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ya = V("trash-2", ma);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ta = V("underline", ba);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], va = V("undo", Ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], wa = V("x", xa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ra = V("zoom-in", Aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ca = V("zoom-out", Sa), fn = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((a, o) => {
    const s = parseInt(a.tagName.charAt(1)), h = a.textContent.trim();
    return h ? {
      id: `${n}heading-${o}`,
      level: s,
      text: h,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, _a = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, Pa = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = vn(), { pages: a, activePage: o, continuousContent: s } = i, { wordCount: h, outline: l } = be(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: fn(s, 1, "continuous-")
      };
    let c = 0;
    const u = [];
    return a.forEach((x, E) => {
      c += _a(x.content), u.push(...fn(x.content, E + 1, `page-${E}-`));
    }), { wordCount: c, outline: u };
  }, [a, n, r, s]), d = r !== void 0 ? r : a.length;
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
              children: e ? /* @__PURE__ */ m.jsx(So, { size: 16 }) : /* @__PURE__ */ m.jsx(Ao, { size: 16 })
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
                /* @__PURE__ */ m.jsx(ko, { size: 14 }),
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
              /* @__PURE__ */ m.jsx(Mn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((c) => {
              const u = c.level === 1 ? Mo : c.level === 2 ? Io : Ho;
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
class Oa {
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
  _format(t, n, r) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${n}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, n) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, n) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, n) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, n) {
  }
}
const pn = new Oa("Editor"), Ln = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), In = 32;
function Dn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * In}px`, e.dataset.indentLevel = String(r));
}
function ka(e, t) {
  Dn(e, t);
}
function Na(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Ln.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Ma() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((o) => {
    document.createRange().selectNodeContents(o), t.intersectsNode(o) && n.add(o);
  }), n.size === 0 && r.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let l = s.parentElement;
      for (; l && l !== r; ) {
        if (l.tagName && Ln.has(l.tagName.toUpperCase())) {
          n.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(n).filter((o) => {
    let s = o.parentElement;
    for (; s; ) {
      if (n.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function La(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * In}px`, e.dataset.indentLevel = String(n));
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
    let n = t.nextNode();
    for (; n; ) {
      const r = n.textContent;
      if (r.startsWith("    ")) {
        n.textContent = r.substring(4);
        break;
      }
      n = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function bt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = Ma();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const o = Na(r.startContainer);
    if (!o) return !1;
    n = [o];
  }
  const i = n[0], a = n[n.length - 1];
  n.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      ka(o, e);
      return;
    }
    e ? La(o) : Dn(o, !1);
  });
  try {
    const o = document.createRange(), s = (c) => c.nodeType === Node.TEXT_NODE ? c : document.createTreeWalker(
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
      let x = null, E = u.nextNode();
      for (; E; )
        x = E, E = u.nextNode();
      return x;
    }, l = s(i);
    l ? o.setStart(l, 0) : o.setStart(i, 0);
    const d = h(a);
    d ? o.setEnd(d, d.length) : o.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(o);
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
function Ia(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && bt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Da = [
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
], Ha = [
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
  onAddPageBreak: n,
  canUndo: r = !1,
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
      const c = await oo(l), u = await ao(c);
      if (u) {
        const E = `<img src="${u}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, E), pn.info("Image inserted", { key: c });
      }
      const x = document.getElementById("image-upload");
      x && (x.value = "");
    } catch (d) {
      pn.error("Error uploading image", d);
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
  ), s = (l, d, c, u = !1) => /* @__PURE__ */ m.jsx(
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
    s(() => t("undo"), va, "Undo", !r),
    s(() => t("redo"), na, "Redo", !i),
    h(),
    o("bold", "bold", xo, "Bold"),
    o("italic", "italic", Fo, "Italic"),
    o("underline", "underline", Ta, "Underline"),
    o("strikethrough", "strikethrough", ca, "Strikethrough"),
    h(),
    o("justifyLeft", "alignLeft", St, "Align Left"),
    o("justifyCenter", "alignCenter", At, "Align Center"),
    o("justifyRight", "alignRight", Rt, "Align Right"),
    o("justifyFull", "alignJustify", ga, "Justify"),
    h(),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Da.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: Sr.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Ha.map(({ value: l, label: d }) => /* @__PURE__ */ m.jsx("option", { value: l, children: d }, l))
      }
    ),
    h(),
    s(() => t("insertUnorderedList"), Mn, "Bullet List"),
    s(() => t("insertOrderedList"), Xo, "Numbered List"),
    h(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          bt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ m.jsx(Vo, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          bt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ m.jsx(Zo, { size: 16 })
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
        children: /* @__PURE__ */ m.jsx(Wo, { size: 16 })
      }
    ),
    s(() => t("insertHTML", Ba), ua, "Insert Table"),
    n && s(n, Ve, "Insert Page Break"),
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
        children: /* @__PURE__ */ m.jsx($o, { size: 16 })
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
function ja(e) {
  return !e || typeof e != "string" ? e : qe(e);
}
function za(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = ja(n) : n = $a(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function $a(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((a) => a.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((a) => Ua(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function Ua(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ee = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Ee(e.parentElement) : !1, _t = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: a,
  onScroll: o,
  onPaste: s,
  onRemovePageBreak: h,
  zoomLevel: l = 100,
  pageMargins: d = ge
}) => {
  const c = be(() => mn(d), [d]), u = l / 100, x = O((y, p) => {
    if (!y) return !1;
    const g = y.getBoundingClientRect(), A = p - g.top;
    return A < c.top || A > g.height - c.bottom;
  }, [c.top, c.bottom]), E = O((y, p) => {
    p.preventDefault();
    const g = y.getBoundingClientRect(), A = p.clientX - g.left, w = p.clientY - g.top, k = g.width - 40, j = -12, $ = g.width - 20;
    A >= k && A <= $ && w >= j && w <= 8 && h && h(y);
  }, [h]), b = O((y) => {
    y.preventDefault();
    const p = t.current.getBoundingClientRect();
    if (y.clientY - p.top < c.top) {
      const A = t.current.firstElementChild;
      if (A && A.tagName !== "PAGE-BREAK") {
        const w = document.createRange(), k = window.getSelection();
        w.setStart(A, 0), w.collapse(!0), k.removeAllRanges(), k.addRange(w);
      }
    } else {
      const A = t.current.lastElementChild;
      if (A && A.tagName !== "PAGE-BREAK") {
        const w = document.createRange(), k = window.getSelection();
        w.selectNodeContents(A), w.collapse(!1), k.removeAllRanges(), k.addRange(w);
      }
    }
  }, [t, c.top]), S = O((y) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const g = p.getRangeAt(0), { startContainer: A, endContainer: w } = g;
    if ((Ee(A) || Ee(w)) && (y.key.length === 1 || y.key === "Enter" || y.key === " "))
      return y.preventDefault(), !1;
    if (Ia(y))
      return r && r(), !1;
    if ((y.key === "Backspace" || y.key === "Delete") && (Ee(A) || Ee(w)))
      return y.preventDefault(), !1;
    i && i(y);
  }, [i, r]), L = O((y) => {
    if (!t.current) return;
    const p = y.target;
    if (Ee(p)) {
      E(p, y);
      return;
    }
    if (x(t.current, y.clientY)) {
      b(y);
      return;
    }
    a && a(y);
  }, [t, a, E, b, x]), H = O((y) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const g = p.getRangeAt(0), { startContainer: A } = g;
    if (Ee(A))
      return y.preventDefault(), !1;
  }, []), I = O((y) => {
    const p = za(y);
    s && s(y, p);
  }, [s]);
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
          onInput: n,
          onKeyDown: S,
          onBeforeInput: H,
          onClick: L,
          onScroll: o,
          onPaste: I,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
_t.propTypes = {
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
_t.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const Fa = ir(_t), Pt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ge,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: s,
  onAddPage: h,
  onDeletePage: l,
  onPageSizeChange: d,
  onPageMarginsChange: c,
  onZoomIn: u,
  onZoomOut: x,
  onZoomReset: E
} = {}) => {
  const b = Math.max(e?.length || 0, 1), S = (p) => {
    s && s(p);
  }, L = () => {
    h && h();
  }, H = (p) => {
    if (b <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(p);
  }, I = (p) => {
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
              value: n,
              onChange: (p) => I(p.target.value),
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
              value: r,
              onChange: (p) => y(p.target.value),
              children: gr().map((p) => /* @__PURE__ */ m.jsx("option", { value: p, children: hr(p) }, p))
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
          onClick: x,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ m.jsx(Ca, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsxs("span", { className: "zoom-level-display", children: [
        i,
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
          children: /* @__PURE__ */ m.jsx(Ra, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsx(
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
    /* @__PURE__ */ m.jsx("div", { className: "page-list", children: e.map((p, g) => /* @__PURE__ */ m.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${g === t ? "active" : ""}`,
          onClick: () => S(g),
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
            A.stopPropagation(), H(g);
          },
          "aria-label": `Delete page ${g + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ m.jsx(wa, { size: 14 })
        }
      )
    ] }, p.id || `page-${g}`)) }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: L,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ m.jsx(ea, { size: 16 }),
          /* @__PURE__ */ m.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Pt.propTypes = {
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
Pt.defaultProps = {
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
const Ga = Ke.memo(Pt);
function Wa(e) {
  switch (e) {
    case B.TOP_LEFT:
    case B.BOTTOM_RIGHT:
      return "nwse-resize";
    case B.TOP_RIGHT:
    case B.BOTTOM_LEFT:
      return "nesw-resize";
    case B.TOP:
    case B.BOTTOM:
      return "ns-resize";
    case B.LEFT:
    case B.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function qa({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: a,
  startHeight: o,
  options: s = Se
}) {
  const h = r - t, l = i - n;
  let d = a, c = o;
  switch (e) {
    case B.TOP_LEFT:
      d = Math.max(s.minWidth, a - h), c = Math.max(s.minHeight, o - l);
      break;
    case B.TOP_RIGHT:
      d = Math.max(s.minWidth, a + h), c = Math.max(s.minHeight, o - l);
      break;
    case B.BOTTOM_LEFT:
      d = Math.max(s.minWidth, a - h), c = Math.max(s.minHeight, o + l);
      break;
    case B.BOTTOM_RIGHT:
      d = Math.max(s.minWidth, a + h), c = Math.max(s.minHeight, o + l);
      break;
    case B.TOP:
      c = Math.max(s.minHeight, o - l);
      break;
    case B.BOTTOM:
      c = Math.max(s.minHeight, o + l);
      break;
    case B.LEFT:
      d = Math.max(s.minWidth, a - h);
      break;
    case B.RIGHT:
      d = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: d, height: c };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const u = a / o;
    [
      B.TOP_LEFT,
      B.TOP_RIGHT,
      B.BOTTOM_LEFT,
      B.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(s.minHeight, d / u) : d = Math.max(s.minWidth, c * u) : [B.TOP, B.BOTTOM].includes(e) ? d = c * u : [B.LEFT, B.RIGHT].includes(e) && (c = d / u);
  }
  return s.maxWidth && d > s.maxWidth && (d = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (c = d / (a / o))), s.maxHeight && c > s.maxHeight && (c = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (d = c * (a / o))), d = Math.max(s.minWidth, d), c = Math.max(s.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function Hn(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Za(e, t, n) {
  Hn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function Ya(e, t, n, r) {
  const { ctrlKey: i, metaKey: a, shiftKey: o, key: s } = e, h = i || a, l = n.offsetWidth, d = n.offsetHeight, u = {
    // Increase width
    ">": h && o ? () => ({
      width: Math.min(r.maxWidth || 800, l + 10),
      height: d
    }) : null,
    // Decrease width
    "<": h && o ? () => ({
      width: Math.max(r.minWidth || 50, l - 10),
      height: d
    }) : null,
    // Increase height
    "+": h && o ? () => ({
      width: l,
      height: Math.min(r.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": h && o ? () => ({
      width: l,
      height: Math.max(r.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: h && !o ? () => ({ width: 300, height: 200 }) : null
  }[s];
  if (u) {
    e.preventDefault();
    const x = u();
    return Za(t, n, x), !0;
  }
  return !1;
}
const Ot = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: i = Se
}) => {
  const a = X(null), o = X(null), s = X(null), h = X(null), l = X(i), d = X(!1), c = xe();
  oe(() => {
    l.current = i;
  }, [i]);
  const u = O((y) => {
    if (!me(y)) return;
    a.current && (st(a.current), a.current = null), y.classList.add("selected");
    const p = Qr(y, l.current);
    p && (a.current = p, o.current = y, document.body.appendChild(p), p.querySelectorAll(".resize-handler").forEach((A) => {
      A.addEventListener("mousedown", E);
    }), n && n(y));
  }, [n]), x = O(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (st(a.current), a.current = null), s.current = null, h.current = null, d.current = !1, r && r();
  }, [r]), E = O((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current) return;
    const p = y.currentTarget.dataset.handler, g = o.current.getBoundingClientRect(), A = window.pageYOffset || document.documentElement.scrollTop, w = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: y.clientX - g.left - w,
      offsetY: y.clientY - g.top - A
    }, h.current = p, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Wa(p), document.addEventListener("mousemove", b), document.addEventListener("mouseup", S);
  }, []), b = O((y) => {
    if (!d.current || !o.current || !s.current || !h.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: p, y: g, width: A, height: w } = s.current, k = h.current, j = y.clientX, $ = y.clientY, K = qa({
      handler: k,
      startX: p,
      startY: g,
      currentX: j,
      currentY: $,
      startWidth: A,
      startHeight: w,
      options: l.current
    });
    Hn(o.current, K), a.current && yt(a.current, o.current);
  }, []), S = O((y) => {
    if (d.current) {
      if (y.preventDefault(), y.stopPropagation(), o.current && s.current) {
        const p = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, g = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (p.width !== g.width || p.height !== g.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: g } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: p } }
        );
      }
      if (s.current = null, h.current = null, d.current = !1, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const p = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(p), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), L = O((y) => {
    a.current && !a.current.contains(y.target) && x();
    const p = y.target;
    if (me(p)) {
      if (p === o.current)
        return;
      u(p);
    }
  }, [u, x]), H = O((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current && !d.current) {
      y.preventDefault();
      const p = o.current;
      if (p.parentNode) {
        p.parentNode.removeChild(p), x();
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(g);
      }
    }
    y.key === "Escape" && o.current && x(), o.current && !d.current && Ya(y, e, o.current, l.current);
  }, [e, x]), I = O(() => {
    a.current && o.current && yt(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const p = e.current.closest(".editor-viewport");
    return p && (p.addEventListener("scroll", I), window.addEventListener("scroll", I)), () => {
      p && p.removeEventListener("scroll", I), window.removeEventListener("scroll", I);
    };
  }, [e, I]), oe(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", L), y.addEventListener("keydown", H), window.addEventListener("resize", I), () => {
      y.removeEventListener("click", L), y.removeEventListener("keydown", H), window.removeEventListener("resize", I), d.current && (document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && st(a.current);
    };
  }, [e, L, H, I, b, S]), oe(() => {
    if (!e.current) return;
    const y = new MutationObserver((p) => {
      p.forEach((g) => {
        g.type === "childList" && (g.removedNodes.forEach((A) => {
          A.nodeType === Node.ELEMENT_NODE && me(A) && A === o.current && x();
        }), g.addedNodes.forEach((A) => {
          if (A.nodeType !== Node.ELEMENT_NODE) return;
          if (me(A)) {
            setTimeout(() => u(A), 50);
            return;
          }
          const w = A.querySelectorAll?.("img") || [];
          w.length > 0 && setTimeout(() => u(w[0]), 50);
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, x, u]), null;
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
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, s] = ie({ top: 0, left: 0 }), [h, l] = ie(!1), [d, c] = ie("top"), [u, x] = ie(a), E = X(null), b = X(null), S = xe(), L = (N) => {
    if (!N)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (te) => setTimeout(te, 16))(() => {
      const te = document.querySelector(".image-resize-overlay");
      te && yt(te, N);
    });
  }, H = (N) => {
    if (!N) return null;
    const G = window.getComputedStyle(N);
    return {
      float: G.float || "none",
      margin: N.style.margin || "",
      display: G.display || "inline",
      width: N.style.width || N.width || "",
      height: N.style.height || N.height || "",
      aspectRatio: u
    };
  }, I = O(() => {
    if (!e) return "left";
    const N = window.getComputedStyle(e);
    return N.float === "right" ? "right" : N.float === "left" ? "left" : N.display === "block" && N.margin.includes("auto") ? "center" : "left";
  }, [e]), [y, p] = ie("left");
  oe(() => {
    e && p(I());
  }, [e, I]);
  const g = O(() => {
    if (!e || !E.current) return;
    const N = e.getBoundingClientRect(), G = E.current.getBoundingClientRect(), te = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, ee = N.bottom >= 0 && N.top <= te.height && N.right >= 0 && N.left <= te.width;
    let ne = "top", ae = 0, ue = 0;
    if (ee) {
      const _ = N.top - G.height - 10, U = te.height - N.bottom - G.height - 10;
      U > _ && U > 0 ? (ne = "bottom", ae = N.bottom + 10) : (ne = "top", ae = N.top - G.height - 10);
    } else
      ne = "top", ae = 10;
    ue = N.left + N.width / 2 - G.width / 2;
    const v = window.innerWidth, f = window.innerHeight;
    let R = Math.max(10, Math.min(ue, v - G.width - 10)), M = Math.max(10, Math.min(ae, f - G.height - 10));
    s({ top: M, left: R }), c(ne), l(!0);
  }, [e]);
  gn(() => {
    g();
    const N = () => {
      g();
    }, G = b.current;
    return G && G.addEventListener("scroll", N), window.addEventListener("scroll", N), window.addEventListener("resize", N), () => {
      G && G.removeEventListener("scroll", N), window.removeEventListener("scroll", N), window.removeEventListener("resize", N), l(!1);
    };
  }, [e, g]), oe(() => {
    const N = (G) => {
      E.current && !E.current.contains(G.target) && G.target !== e && i();
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, [e, i]);
  const A = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, w = (N) => {
    if (e && A[N]) {
      const G = H(e), te = y, ee = A[N];
      e.style.float = ee.float, e.style.margin = ee.margin, e.style.display = ee.display, p(N), L(e);
      const ne = H(e);
      S.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: N, state: ne } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: te, state: G } }
      ), t && t(N);
    }
  }, k = () => {
    if (e && e.parentNode) {
      const N = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      S.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: N } }
      ), e.parentNode.removeChild(e), r && r(), i();
    }
  }, j = () => {
    const N = u, G = !u;
    x(G), S.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: G } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: N } }
    ), n && n(G);
  }, $ = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, K = (N) => ({
    ...$,
    background: N ? "#007bff" : "transparent",
    color: N ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : hn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: E,
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
              onClick: j,
              title: `Toggle aspect ratio preservation (currently ${u ? "ON" : "OFF"})`,
              children: u ? /* @__PURE__ */ m.jsx(oa, { size: 14 }) : /* @__PURE__ */ m.jsx(jo, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => w("left"),
              title: "Align Left",
              style: K(y === "left"),
              children: /* @__PURE__ */ m.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => w("center"),
              title: "Align Center",
              style: K(y === "center"),
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => w("right"),
              title: "Align Right",
              style: K(y === "right"),
              children: /* @__PURE__ */ m.jsx(Rt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: k,
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
              children: /* @__PURE__ */ m.jsx(ya, { size: 14 })
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
}, ce = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ye(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function Ne(e) {
  if (!ye(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, i = [], a = e.querySelector("colgroup"), o = a ? a.querySelectorAll("col") : [];
  if (o.length >= r)
    for (let h = 0; h < r; h++) {
      const l = o[h], d = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      i.push(d || 100);
    }
  else if (n.length > 0) {
    const h = n[0];
    for (let l = 0; l < h.cells.length; l++) {
      const d = h.cells[l];
      i.push(d.offsetWidth);
    }
  }
  const s = n.map((h) => (h.style.height ? parseInt(h.style.height, 10) : null) || h.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: i,
    rowHeights: s,
    rect: t
  };
}
function Va({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = Je
}) {
  const a = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, o = (s, h, l, d, c) => {
    h >= 0 && h < s.length && (s[h] = Math.max(d, Math.min(c, s[h] + l)));
  };
  switch (e) {
    case ce.COLUMN:
      o(a.columnWidths, t, n, i.minColumnWidth, i.maxColumnWidth), a.tableWidth = r.width;
      break;
    case ce.ROW:
      o(a.rowHeights, t, n, i.minRowHeight, i.maxRowHeight), a.tableHeight = r.height;
      break;
    case ce.TABLE_BOTTOM:
      o(a.rowHeights, r.rows - 1, n, i.minRowHeight, i.maxRowHeight);
      break;
    case ce.TABLE_RIGHT:
      o(a.columnWidths, r.columns - 1, n, i.minColumnWidth, i.maxColumnWidth);
      break;
  }
  return a;
}
function Nt(e) {
  if (!ye(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const i = r.querySelectorAll("col"), a = i.length;
  if (a < n)
    for (let o = a; o < n; o++) {
      const s = document.createElement("col");
      r.appendChild(s);
    }
  else if (a > n)
    for (let o = a - 1; o >= n; o--)
      r.removeChild(i[o]);
}
function Ka(e, t, n) {
  if (!ye(e)) return;
  Nt(e);
  const { columnWidths: r, rowHeights: i, tableWidth: a, tableHeight: o } = t, s = r ? r.reduce((l, d) => l + d, 0) : 0, h = i ? i.reduce((l, d) => l + d, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : h > 0 && (e.style.height = `${h}px`), r && r.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((c, u) => {
      u < r.length && (c.style.width = `${r[u]}px`);
    }), e.style.width = `${s}px`;
  }
  i && i.length > 0 && (Array.from(e.rows).forEach((d, c) => {
    c < i.length && (d.style.height = `${i[c]}px`);
  }), e.style.height = `${h}px`), e.offsetHeight;
}
function Xa(e, t = Je) {
  if (!ye(e)) return null;
  Nt(e);
  const n = Ne(e);
  if (!n) return null;
  const r = document.createElement("div");
  r.className = "table-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const i = e.getBoundingClientRect();
  r.style.top = `${i.top}px`, r.style.left = `${i.left}px`, r.style.width = `${i.width}px`, r.style.height = `${i.height}px`;
  for (let s = 0; s < n.columns - 1; s++) {
    const h = Bn(s, n, i, e);
    r.appendChild(h);
  }
  for (let s = 0; s < n.rows - 1; s++) {
    const h = jn(s, n, i, e);
    r.appendChild(h);
  }
  const a = zn(n, i);
  r.appendChild(a);
  const o = $n(n, i);
  return r.appendChild(o), r;
}
function Bn(e, t, n, r) {
  const i = document.createElement("div");
  return i.className = "table-resize-handler table-column-resize-handler", i.dataset.type = ce.COLUMN, i.dataset.index = e, i.style.position = "absolute", i.style.width = "4px", i.style.height = `${n.height}px`, i.style.cursor = "col-resize", i.style.pointerEvents = "all", Un(i, e, t, n, r), i;
}
function jn(e, t, n, r) {
  const i = document.createElement("div");
  return i.className = "table-resize-handler table-row-resize-handler", i.dataset.type = ce.ROW, i.dataset.index = e, i.style.position = "absolute", i.style.width = `${n.width}px`, i.style.height = "4px", i.style.cursor = "row-resize", i.style.pointerEvents = "all", Fn(i, e, t, n, r), i;
}
function zn(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-bottom-resize-handler", n.dataset.type = ce.TABLE_BOTTOM, n.style.position = "absolute", n.style.width = `${t.width}px`, n.style.height = "4px", n.style.cursor = "ns-resize", n.style.pointerEvents = "all", Gn(n, e, t), n;
}
function $n(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-right-resize-handler", n.dataset.type = ce.TABLE_RIGHT, n.style.position = "absolute", n.style.width = "4px", n.style.height = `${t.height}px`, n.style.cursor = "ew-resize", n.style.pointerEvents = "all", Wn(n, e, t), n;
}
function Tt(e, t) {
  if (!e || !t) return;
  Nt(t);
  const n = Ne(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), a = e.querySelectorAll(".table-row-resize-handler"), o = e.querySelector(".table-bottom-resize-handler"), s = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || a.length !== n.rows - 1 || !o || !s) {
    e.innerHTML = "";
    for (let c = 0; c < n.columns - 1; c++) {
      const u = Bn(c, n, r, t);
      e.appendChild(u);
    }
    for (let c = 0; c < n.rows - 1; c++) {
      const u = jn(c, n, r, t);
      e.appendChild(u);
    }
    const l = zn(n, r);
    e.appendChild(l);
    const d = $n(n, r);
    e.appendChild(d);
  } else
    i.forEach((l, d) => {
      Un(l, d, n, r, t);
    }), a.forEach((l, d) => {
      Fn(l, d, n, r, t);
    }), o && Gn(o, n, r), s && Wn(s, n, r);
}
function Ge(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Un(e, t, n, r, i) {
  if (i && i.rows.length > 0) {
    const o = i.rows[0];
    if (o.cells.length > t) {
      const h = o.cells[t].getBoundingClientRect(), l = i.getBoundingClientRect(), d = h.right - l.left - 2;
      e.style.left = `${d}px`, e.style.height = `${r.height}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += n.columnWidths[o];
  e.style.left = `${a - 2}px`, e.style.height = `${r.height}px`;
}
function Fn(e, t, n, r, i) {
  if (i && i.rows.length > t) {
    const o = i.rows[t];
    if (o.cells.length > 0) {
      const h = o.cells[0].getBoundingClientRect(), l = i.getBoundingClientRect(), d = h.bottom - l.top - 2;
      e.style.top = `${d}px`, e.style.width = `${r.width}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += n.rowHeights[o];
  e.style.top = `${a - 2}px`, e.style.width = `${r.width}px`;
}
function Gn(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Wn(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
const Mt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = Je
}) => {
  const a = X(null), o = X(null), s = X(null), h = X(null), l = X(null), d = X(i), c = X(!1), [u, x] = ie(null), E = xe();
  oe(() => {
    d.current = i;
  }, [i]);
  const b = O(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (Ge(a.current), a.current = null), x(null), s.current = null, h.current = null, l.current = null, c.current = !1, r && r();
  }, [r]), S = O((w) => {
    if (w.preventDefault(), w.stopPropagation(), !o.current) return;
    const k = w.currentTarget, j = k.dataset.type, $ = parseInt(k.dataset.index, 10);
    o.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const K = Ne(o.current);
    s.current = {
      x: w.clientX,
      y: w.clientY,
      structure: { ...K }
    }, h.current = j, l.current = $, c.current = !0, document.body.classList.add("table-resize-in-progress");
    const N = {
      [ce.COLUMN]: "col-resize",
      [ce.ROW]: "row-resize",
      [ce.TABLE_BOTTOM]: "ns-resize",
      [ce.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = N[j] || "default", document.addEventListener("mousemove", I), document.addEventListener("mouseup", y);
  }, []), L = O((w) => {
    const k = Xa(w, d.current);
    return k && (a.current = k, o.current = w, document.body.appendChild(k), k.querySelectorAll(".table-resize-handler").forEach(($) => {
      $.addEventListener("mousedown", S);
    })), k;
  }, [S]), H = O((w) => {
    if (!ye(w)) return;
    a.current && (Ge(a.current), a.current = null), w.classList.add("selected"), L(w) && (x(w), n && n(w));
  }, [n, L]), I = O((w) => {
    if (!c.current || !o.current || !s.current || !h.current) return;
    w.preventDefault(), w.stopPropagation();
    const { x: k, y: j, structure: $ } = s.current, K = h.current, N = l.current, G = w.clientX, te = w.clientY;
    let ee = 0;
    switch (K) {
      case ce.COLUMN:
        ee = G - k;
        break;
      case ce.ROW:
        ee = te - j;
        break;
      case ce.TABLE_BOTTOM:
        ee = te - j;
        break;
      case ce.TABLE_RIGHT:
        ee = G - k;
        break;
    }
    const ne = Va({
      type: K,
      index: N,
      delta: ee,
      currentStructure: $,
      options: d.current
    });
    Ka(o.current, ne), a.current && Tt(a.current, o.current);
  }, []), y = O((w) => {
    if (c.current) {
      if (w.preventDefault(), w.stopPropagation(), o.current && s.current) {
        const k = {
          structure: s.current.structure
        }, j = {
          structure: Ne(o.current)
        };
        (k.structure.width !== j.structure.width || k.structure.height !== j.structure.height || JSON.stringify(k.structure.columnWidths) !== JSON.stringify(j.structure.columnWidths) || JSON.stringify(k.structure.rowHeights) !== JSON.stringify(j.structure.rowHeights)) && E.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: o.current, state: j } },
          { type: "TABLE_RESIZE", payload: { element: o.current, state: k } }
        );
      }
      if (s.current = null, h.current = null, l.current = null, c.current = !1, document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", o.current) {
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(k), t && t(o.current, Ne(o.current));
      }
    }
  }, [t, E]), p = O((w) => {
    a.current && !a.current.contains(w.target) && b();
    const j = w.target.closest("table");
    if (j && ye(j)) {
      if (j === o.current)
        return;
      H(j);
    }
  }, [H, b]), g = O((w) => {
    if ((w.key === "Delete" || w.key === "Backspace") && o.current && !c.current) {
      w.preventDefault();
      const k = o.current;
      if (k.parentNode) {
        k.parentNode.removeChild(k), b();
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(j);
      }
    }
    w.key === "Escape" && o.current && b();
  }, [e, b]), A = O(() => {
    a.current && o.current && Tt(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const k = e.current.closest(".editor-viewport");
    return k && (k.addEventListener("scroll", A), window.addEventListener("scroll", A)), () => {
      k && k.removeEventListener("scroll", A), window.removeEventListener("scroll", A);
    };
  }, [e, A]), oe(() => {
    if (!e.current) return;
    const w = e.current;
    return w.addEventListener("click", p), w.addEventListener("keydown", g), window.addEventListener("resize", A), () => {
      w.removeEventListener("click", p), w.removeEventListener("keydown", g), window.removeEventListener("resize", A), c.current && (document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", y), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), a.current && Ge(a.current);
    };
  }, [e, p, g, A, I, y]), oe(() => {
    if (!e.current) return;
    const w = new MutationObserver((k) => {
      k.forEach((j) => {
        j.type === "childList" && (j.removedNodes.forEach(($) => {
          $.nodeType === Node.ELEMENT_NODE && ye($) && $ === u && b();
        }), j.addedNodes.forEach(($) => {
          if ($.nodeType !== Node.ELEMENT_NODE) return;
          if (ye($)) {
            setTimeout(() => H($), 50);
            return;
          }
          const K = $.querySelectorAll?.("table") || [];
          K.length > 0 && setTimeout(() => H(K[0]), 50);
        }));
      });
    });
    return w.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => w.disconnect();
  }, [e, b, H]), oe(() => {
    if (!u) return;
    const w = new MutationObserver((k) => {
      k.some(($) => {
        if ($.type === "childList") {
          if ([...$.addedNodes, ...$.removedNodes].some(
            (N) => N.nodeType === Node.ELEMENT_NODE && N.tagName === "TR"
          )) return !0;
        } else if ($.type === "attributes" && ["colspan", "rowspan"].includes($.attributeName))
          return !0;
        return !1;
      }) && a.current && o.current && (Ge(a.current), a.current = null, L(o.current));
    });
    return w.observe(u, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => w.disconnect();
  }, [u, L]), null;
};
Mt.propTypes = {
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
Mt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const Lt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n
}) => {
  const [r, i] = ie({ top: 0, left: 0 }), [a, o] = ie(!1), [s, h] = ie("top"), l = X(null), d = X(null), c = xe(), u = (g) => {
    if (!g)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (w) => setTimeout(w, 16))(() => {
      const w = document.querySelector(".table-resize-overlay");
      w && Tt(w, g);
    });
  }, x = (g) => {
    if (!g) return null;
    const A = window.getComputedStyle(g);
    return {
      float: A.float || "none",
      margin: g.style.margin || "",
      marginLeft: g.style.marginLeft || "",
      marginRight: g.style.marginRight || "",
      display: A.display || "table"
    };
  }, E = O(() => {
    if (!e) return "left";
    const g = window.getComputedStyle(e);
    return g.marginLeft === "auto" && g.marginRight === "auto" ? "center" : g.float === "right" ? "right" : (g.float === "left", "left");
  }, [e]), [b, S] = ie("left");
  oe(() => {
    e && S(E());
  }, [e, E]);
  const L = O(() => {
    if (!e || !l.current) return;
    const g = e.getBoundingClientRect(), A = l.current.getBoundingClientRect(), w = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, k = g.bottom >= 0 && g.top <= w.height && g.right >= 0 && g.left <= w.width;
    let j = "top", $ = 0, K = 0;
    if (k) {
      const ne = g.top - A.height - 10, ae = w.height - g.bottom - A.height - 10;
      ae > ne && ae > 0 ? (j = "bottom", $ = g.bottom + 10) : (j = "top", $ = g.top - A.height - 10);
    } else
      j = "top", $ = 10;
    K = g.left + g.width / 2 - A.width / 2;
    const N = window.innerWidth, G = window.innerHeight;
    let te = Math.max(10, Math.min(K, N - A.width - 10)), ee = Math.max(10, Math.min($, G - A.height - 10));
    i({ top: ee, left: te }), h(j), o(!0);
  }, [e]);
  gn(() => {
    L();
    const g = () => {
      L();
    }, A = d.current;
    return A && A.addEventListener("scroll", g), window.addEventListener("scroll", g), window.addEventListener("resize", g), () => {
      A && A.removeEventListener("scroll", g), window.removeEventListener("scroll", g), window.removeEventListener("resize", g), o(!1);
    };
  }, [e, L]), oe(() => {
    const g = (A) => {
      l.current && !l.current.contains(A.target) && A.target !== e && !e.contains(A.target) && n();
    };
    return document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [e, n]);
  const H = {
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
  }, I = (g) => {
    if (e && H[g]) {
      const A = x(e), w = b, k = H[g];
      e.style.float = k.float, e.style.margin = k.margin, e.style.marginLeft = k.marginLeft, e.style.marginRight = k.marginRight, S(g), u(e);
      const j = x(e);
      c.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: g, state: j } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: w, state: A } }
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
  return !e || typeof document > "u" ? null : hn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: l,
        className: "table-tooltip-menu",
        "data-menu-position": s,
        "aria-hidden": !a,
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
              onClick: () => I("left"),
              title: "Align Left",
              style: p(b === "left"),
              children: /* @__PURE__ */ m.jsx(St, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${b === "center" ? "active" : ""}`,
              onClick: () => I("center"),
              title: "Align Center",
              style: p(b === "center"),
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${b === "right" ? "active" : ""}`,
              onClick: () => I("right"),
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
const Ja = 50, ct = 50, Qa = 50, ei = 100, ti = 300, It = Et(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: s = !0,
  showToolbar: h = !0,
  showPageManager: l = !0
}, d) => {
  const c = vn(), u = xe(), { pageSize: x, pageMargins: E, continuousContent: b, pageBoundaries: S, activePage: L, zoomLevel: H, canUndo: I, canRedo: y } = c, p = X(null), g = X(null), { currentFormat: A, formatText: w, updateCurrentFormatFromSelection: k } = Or(), [j, $] = ie(!1), [K, N] = ie(null), [G, te] = ie(!0), [ee, ne] = ie(!1), [ae, ue] = ie(null), v = X(null), {
    checkAndUpdateBoundaries: f,
    getCurrentPage: R,
    scrollToPage: M,
    updateBoundaries: _,
    triggerAutoReflow: U,
    removePageAndContent: F,
    removePageBreak: D,
    insertPageBreakAtBoundary: W
  } = Jr(x, g, H, E), Z = be(() => xt(x), [x]), [q, se] = ie(!1), C = X(null), le = X(!1), pe = X(!1), we = X(!1), Ae = X(b);
  oe(() => {
    if (g.current) {
      if (!we.current) {
        g.current.innerHTML = b, we.current = !0, Ae.current = b;
        const P = setTimeout(() => {
          _();
        }, Ja);
        return () => clearTimeout(P);
      }
      if (Ae.current !== b) {
        if (g.current.innerHTML !== b) {
          g.current.innerHTML = b;
          const Y = setTimeout(() => {
            _(), le.current && Ht();
          }, ct);
          return Ae.current = b, () => clearTimeout(Y);
        }
        Ae.current = b;
      }
    }
  }, [b, _, S.length, u, M]), oe(() => {
    o && we.current && o(b);
  }, [b, o]);
  const Dt = be(() => ({
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
    getCursorPosition: () => g.current ? Kr(g.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (P) => {
      const Y = qe(P);
      Y !== b && u.updateContinuousContent(Y), g.current && g.current.innerHTML !== Y && (g.current.innerHTML = Y), Ae.current = Y, g.current && setTimeout(() => {
        _();
      }, ct);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (P) => {
      if (!g.current || !P) return;
      const Y = qe(P), re = window.getSelection();
      let de = !1;
      if (re && re.rangeCount > 0) {
        const et = re.getRangeAt(0);
        g.current.contains(et.commonAncestorContainer) && (de = !0);
      }
      if (!de && v.current)
        try {
          re.removeAllRanges(), re.addRange(v.current);
        } catch (et) {
          console.warn("[insertContent] Failed to restore last cursor position:", et);
          const Ce = g.current.lastChild;
          if (Ce) {
            const Be = document.createRange();
            Ce.nodeType === Node.TEXT_NODE ? Be.setStart(Ce, Ce.textContent.length) : Be.setStartAfter(Ce), Be.collapse(!0), re.removeAllRanges(), re.addRange(Be);
          }
        }
      document.execCommand("insertHTML", !1, Y);
      const he = g.current.innerHTML;
      u.updateContinuousContent(he), Ae.current = he, setTimeout(() => {
        _(), U(200);
      }, ct);
    }
  }), [b, u, _, g, v, f]);
  sr(d, () => Dt, [Dt]), oe(() => {
    const P = () => {
      if (k(), g.current) {
        const re = window.getSelection();
        if (re.rangeCount > 0) {
          const de = re.getRangeAt(0);
          de.collapsed && g.current.contains(de.commonAncestorContainer) && (v.current = de.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", P);
    const Y = () => {
      if (setTimeout(k, 10), v.current && g.current)
        try {
          const re = window.getSelection();
          re.removeAllRanges(), re.addRange(v.current);
        } catch (re) {
          console.warn("[handleFocus] Failed to restore cursor:", re);
        }
    };
    return g.current && g.current.addEventListener("focus", Y), () => {
      document.removeEventListener("selectionchange", P), g.current && g.current.removeEventListener("focus", Y);
    };
  }, [k]);
  const Ht = O(() => {
    le.current = !1;
    const P = Math.max(0, S.length - 1);
    u.setActivePage(P), setTimeout(() => {
      M(P, p);
    }, Qa);
  }, [S.length, u, M]), Qe = O(() => {
    if (!g.current) return;
    let P = g.current.innerHTML;
    P = qe(P), P !== g.current.innerHTML && (g.current.innerHTML = P);
    const Y = b;
    if (Y !== P) {
      const de = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: P
      }, he = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: Y
      };
      u.recordOperation(de, he);
    }
    u.updateContinuousContent(P), f(), U(200);
    const re = R(p);
    re !== L && u.setActivePage(re);
  }, [u, f, R, L, U, p, g, b]), Zn = O((P) => {
    Qe();
  }, [Qe]), Bt = O((P) => {
    u.updatePageSize(P), _({ pageSize: P }), i && i(P);
  }, [u, _, i]), jt = O((P) => {
    u.updatePageMargins(P), _({ pageMargins: P }), a && a(P);
  }, [u, _, a]), zt = O((P) => {
    P < 0 || P >= S.length || (pe.current = !0, u.setActivePage(P), M(P, p), setTimeout(() => {
      pe.current = !1;
    }, ti), t && t(P));
  }, [u, M, t, S.length]), $t = O(() => {
    const P = S.length + 1;
    W(P) && (le.current = !0, setTimeout(() => {
      le.current && Ht();
    }, 100)), n && n();
  }, [S.length, W, u, M, n]), Yn = O(() => {
    const P = window.getSelection();
    if (P && P.rangeCount > 0) {
      if (!g?.current) return;
      const de = `<page-break data-page-break="true" contenteditable="false" data-page-number="${g.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, de), setTimeout(() => {
        _();
        const he = R(p);
        u.setActivePage(he);
      }, 150);
    }
  }, [_, R, u, p]), Vn = O((P) => {
    if (!P) return;
    D(P) && setTimeout(() => {
      const re = R(p);
      u.setActivePage(re);
    }, 200);
  }, [D, R, u, p]), Ut = O((P) => {
    if (S.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    F(P) && (u.setActivePage(0), r && r(P));
  }, [S.length, F, u, r]), Ie = O(() => {
    u.zoomIn();
  }, [u]), De = O(() => {
    u.zoomOut();
  }, [u]), He = O(() => {
    u.resetZoom();
  }, [u]), Ft = O(() => {
    u.undo();
  }, [u]), Gt = O(() => {
    u.redo();
  }, [u]);
  oe(() => {
    const P = (Y) => {
      if (Y.ctrlKey || Y.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Y.key) && Y.preventDefault();
        const re = document.activeElement === g.current, de = document.activeElement === p.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (re || de || !he)
          switch (Y.key) {
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
              Y.shiftKey || Ft();
              break;
            case "y":
              Gt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", P), () => {
      window.removeEventListener("keydown", P);
    };
  }, [Ie, De, He, Ft, Gt]);
  const Kn = O(() => {
    !p.current || !g.current || pe.current || (C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      if (pe.current) {
        C.current = null;
        return;
      }
      const P = R(p);
      P !== L && P >= 0 && u.setActivePage(P), C.current = null;
    }, ei));
  }, [R, L, u]), Xn = be(() => {
    if (!b) return 0;
    const Y = b.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Y ? Y.length : 0;
  }, [b]), Jn = S.length || 1, Qn = O((P) => {
    $(!0), N(P);
  }, []), Wt = O(() => {
    $(!1), N(null);
  }, []), er = O((P, Y) => {
  }, []), tr = O((P) => {
    ne(!0), ue(P);
  }, []), qt = O(() => {
    ne(!1), ue(null);
  }, []), nr = O((P, Y) => {
  }, []);
  return oe(() => () => {
    C.current && clearTimeout(C.current);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ m.jsx(
      Ct,
      {
        currentFormat: {
          ...A,
          imageSelected: j
        },
        onFormatText: w,
        onAddPageBreak: Yn,
        canUndo: I,
        canRedo: y
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ m.jsx(
        Pa,
        {
          editorView: null,
          isCollapsed: q,
          onToggle: () => se((P) => !P),
          wordCount: Xn,
          pageCount: Jn
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: Kn,
          children: /* @__PURE__ */ m.jsx(
            Fa,
            {
              content: b,
              dimensions: Z,
              pageSize: x,
              pageMargins: E,
              pageBoundaries: S,
              editorRef: g,
              onInput: Zn,
              onContentChange: Qe,
              onClick: () => g.current?.focus(),
              onRemovePageBreak: Vn,
              zoomLevel: H
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        Ot,
        {
          editorRef: g,
          onImageSelect: Qn,
          onImageDeselect: Wt,
          onImageResize: er,
          resizeOptions: {
            ...Se,
            preserveAspectRatio: G,
            aspectRatio: G
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        Mt,
        {
          editorRef: g,
          onTableSelect: tr,
          onTableDeselect: qt,
          onTableResize: nr
        }
      ),
      j && K && /* @__PURE__ */ m.jsx(
        kt,
        {
          imageElement: K,
          initialPreserveAspectRatio: G,
          onAlignChange: (P) => {
          },
          onAspectRatioToggle: (P) => {
            te(P);
          },
          onDelete: () => {
            if (K) {
              const P = K.getAttribute("data-key");
              P && io(P).catch((Y) => {
                console.error("Failed to delete image from IndexedDB:", Y);
              });
            }
          },
          onClose: Wt
        }
      ),
      ee && ae && /* @__PURE__ */ m.jsx(
        Lt,
        {
          tableElement: ae,
          onAlignChange: (P) => {
          },
          onClose: qt
        }
      ),
      l && /* @__PURE__ */ m.jsx("div", { className: "page-manager-sidebar", children: e ? Ke.cloneElement(e, {
        onNavigate: zt,
        onAddPage: $t,
        onDeletePage: Ut,
        onPageSizeChange: Bt,
        onPageMarginsChange: jt,
        zoomLevel: H,
        canZoomIn: pt(H),
        canZoomOut: gt(H),
        onZoomIn: Ie,
        onZoomOut: De,
        onZoomReset: He
      }) : /* @__PURE__ */ m.jsx(
        Ga,
        {
          pageBoundaries: S,
          activePage: L,
          pageSize: x,
          pageMargins: E,
          zoomLevel: H,
          canZoomIn: pt(H),
          canZoomOut: gt(H),
          onNavigate: zt,
          onAddPage: $t,
          onDeletePage: Ut,
          onPageSizeChange: Bt,
          onPageMarginsChange: jt,
          onZoomIn: Ie,
          onZoomOut: De,
          onZoomReset: He
        }
      ) })
    ] })
  ] });
});
It.displayName = "HtmlEditor";
It.propTypes = {
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
It.defaultProps = {
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
class qn extends Ke.Component {
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
  componentDidCatch(t, n) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", n), this.setState({
      error: t,
      errorInfo: n
    }), this.props.onError && this.props.onError(t, n);
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
qn.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
qn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Sr as COMMON_FONT_SIZES,
  Xe as DEFAULT_FONT_SIZE,
  Se as DEFAULT_IMAGE_RESIZE_OPTIONS,
  yn as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  si as DocumentProvider,
  Ct as EditorToolbar,
  qn as ErrorBoundary,
  An as FONT_SIZE_MAP,
  It as HtmlEditor,
  Ot as ImageResizeHandlers,
  Re as PAGE_SIZES,
  Ga as PageManager,
  Fa as PageView,
  B as RESIZE_HANDLERS,
  Pa as Sidebar,
  ce as TABLE_RESIZE_HANDLERS,
  Mt as TableResizeHandlers,
  pi as applyImageDimensions,
  Ka as applyTableDimensions,
  di as calculateResizeDimensions,
  Va as calculateTableResizeDimensions,
  gi as clearImages,
  Qr as createResizeOverlay,
  Xa as createTableResizeOverlay,
  io as deleteImage,
  hi as getAllImageKeys,
  ii as getAvailablePageSizes,
  ao as getImage,
  fi as getImageDimensions,
  xt as getPageDimensions,
  ci as getPixelValue,
  li as getPointValue,
  Ne as getTableStructure,
  me as isResizableImage,
  ye as isResizableTable,
  ui as isValidFontSize,
  ai as isValidPageSize,
  Oa as logger,
  _r as pixelsToPoints,
  Cr as pointsToPixels,
  st as removeResizeOverlay,
  Ge as removeTableResizeOverlay,
  oo as saveImage,
  yt as updateResizeOverlay,
  Tt as updateTableResizeOverlay,
  Jr as useContinuousReflow,
  En as useDocument,
  xe as useDocumentActions,
  vn as useDocumentState,
  Or as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
