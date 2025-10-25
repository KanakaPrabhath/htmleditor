import Ke, { createContext as er, useContext as tr, useReducer as nr, useMemo as Ee, useState as le, useCallback as k, useRef as J, useEffect as oe, forwardRef as Tt, createElement as lt, memo as rr, useLayoutEffect as or, useImperativeHandle as ar } from "react";
import { v4 as bt } from "uuid";
import { createPortal as sr } from "react-dom";
function ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function cr() {
  if ($t) return Pe;
  $t = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      a = {};
      for (var i in s)
        i !== "key" && (a[i] = s[i]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Pe.Fragment = t, Pe.jsx = n, Pe.jsxs = n, Pe;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function lr() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === G ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case S:
          return "Fragment";
        case B:
          return "Profiler";
        case M:
          return "StrictMode";
        case h:
          return "Suspense";
        case O:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case v:
            return "Portal";
          case m:
            return f.displayName || "Context";
          case L:
            return (f._context.displayName || "Context") + ".Consumer";
          case g:
            var w = f.render;
            return f = f.displayName, f || (f = w.displayName || w.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case A:
            return w = f.displayName || null, w !== null ? w : e(f.type) || "Memo";
          case I:
            w = f._payload, f = f._init;
            try {
              return e(f(w));
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
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var C = w.error, _ = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return C.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(f);
      }
    }
    function r(f) {
      if (f === S) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === I)
        return "<...>";
      try {
        var w = e(f);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = Q.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (N.call(f, "key")) {
        var w = Object.getOwnPropertyDescriptor(f, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, w) {
      function C() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: C,
        configurable: !0
      });
    }
    function p() {
      var f = e(this.type);
      return re[f] || (re[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, w, C, _, z, $) {
      var D = C.ref;
      return f = {
        $$typeof: T,
        type: f,
        key: w,
        props: C,
        _owner: _
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(f, "ref", {
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
        value: z
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, w, C, _, z, $) {
      var D = w.children;
      if (D !== void 0)
        if (_)
          if (W(D)) {
            for (_ = 0; _ < D.length; _++)
              c(D[_]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(D);
      if (N.call(w, "key")) {
        D = e(f);
        var U = Object.keys(w).filter(function(q) {
          return q !== "key";
        });
        _ = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", b[D + _] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          D,
          U,
          D
        ), b[D + _] = !0);
      }
      if (D = null, C !== void 0 && (n(C), D = "" + C), o(w) && (n(w.key), D = "" + w.key), "key" in w) {
        C = {};
        for (var Z in w)
          Z !== "key" && (C[Z] = w[Z]);
      } else C = w;
      return D && i(
        C,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        D,
        C,
        s(),
        z,
        $
      );
    }
    function c(f) {
      u(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === I && (f._payload.status === "fulfilled" ? u(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === T;
    }
    var x = Ke, T = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), Q = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, W = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var ee, re = {}, ce = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), ue = te(r(a)), b = {};
    Ce.Fragment = S, Ce.jsx = function(f, w, C) {
      var _ = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return d(
        f,
        w,
        C,
        !1,
        _ ? Error("react-stack-top-frame") : ce,
        _ ? te(r(f)) : ue
      );
    }, Ce.jsxs = function(f, w, C) {
      var _ = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return d(
        f,
        w,
        C,
        !0,
        _ ? Error("react-stack-top-frame") : ce,
        _ ? te(r(f)) : ue
      );
    };
  })()), Ce;
}
var Ft;
function ur() {
  return Ft || (Ft = 1, process.env.NODE_ENV === "production" ? je.exports = cr() : je.exports = lr()), je.exports;
}
var y = ur();
const ut = 100, dt = 50, ft = 200, Gt = 5, pt = (e) => e < ft, gt = (e) => e > dt, dr = 96, ze = (e) => Math.round(e * dr), Ze = {
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
}, ge = "NORMAL", ln = (e = ge) => {
  const t = Ze[e] || Ze[ge];
  return {
    top: ze(t.top),
    bottom: ze(t.bottom),
    left: ze(t.left),
    right: ze(t.right)
  };
}, fr = (e = ge) => {
  const t = ln(e);
  return t.top + t.bottom;
}, pr = () => Object.keys(Ze), gr = (e) => {
  const t = Ze[e];
  return t ? t.label : "Unknown";
}, Ae = {
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
}, un = "A4", vt = (e) => {
  const t = Ae[e] || Ae[un];
  return {
    width: t.width,
    height: t.height
  };
}, os = (e) => Object.keys(Ae).includes(e), as = () => Object.keys(Ae), Me = un, ve = "<p><br></p>", hr = "continuous", Oe = (e, t = Me) => ({
  id: bt(),
  index: e,
  size: t,
  content: ve,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? ve : e, dn = (e, t = Me) => (e.length > 0 ? e : [Oe(0, t)]).map((r, s) => ({
  id: r.id || bt(),
  index: s,
  size: r.size || t,
  content: We(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), mr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: vt(e).height
}], $e = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), ht = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Me, r = dn(e.pages || [Oe(0, n)], n);
  return {
    id: bt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || hr,
    continuousContent: e.continuousContent || ve,
    pageBoundaries: e.pageBoundaries || mr(n),
    zoomLevel: e.zoomLevel || ut,
    pageMargins: e.pageMargins || ge,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
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
    case j.INITIALIZE_DOCUMENT: {
      const { initialContent: r = ve, pageSize: s = Me } = t.payload || {}, a = { ...Oe(0, s), content: We(r) };
      return ht({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case j.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case j.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: s } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[r] = {
        ...a[r],
        content: We(s)
      }, {
        ...e,
        pages: a,
        updatedAt: n
      };
    }
    case j.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = dn(r.pages || [], e.pageSize), a = Array.isArray(r.pageBreaks) ? r.pageBreaks : $e(s);
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: n
      };
    }
    case j.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(r, 0, Oe(r, e.pageSize));
      const a = s.map((i, p) => ({
        ...i,
        index: p,
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
    case j.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(r, 1);
      const a = s.map((p, l) => ({
        ...p,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : r <= o && o > 0 && (o -= 1);
      const i = $e(a);
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: n
      };
    }
    case j.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const s = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= s ? e : {
        ...e,
        activePage: r,
        updatedAt: n
      };
    }
    case j.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        vt(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const s = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: r
      })), a = $e(s);
      return {
        ...e,
        pageSize: r,
        pages: s,
        pageBreaks: a,
        updatedAt: n
      };
    }
    case j.RESET_DOCUMENT:
      return ht();
    case j.UPDATE_CONTINUOUS_CONTENT: {
      const r = We(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case j.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const s = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: s,
        updatedAt: n
      };
    }
    case j.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (r === "end")
        o = o + a + "<p><br></p>";
      else if (typeof r == "number") {
        const i = o.substring(0, r), p = o.substring(r);
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
        updatedAt: n
      };
    }
    case j.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[r] && a[r].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, p) => {
        i.setAttribute("data-page-number", String(p + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: n
      };
    }
    case j.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return r === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== ve).join(`
`) || ve : e.continuousContent && e.continuousContent !== ve && (a = [{ ...Oe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: s,
        pages: a,
        updatedAt: n
      };
    }
    case j.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < dt || r > ft ? (console.warn(`Invalid zoom level: ${r}. Must be between ${dt} and ${ft}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case j.ZOOM_IN: {
      if (!pt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Gt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case j.ZOOM_OUT: {
      if (!gt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Gt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case j.RESET_ZOOM:
      return e.zoomLevel === ut ? e : {
        ...e,
        zoomLevel: ut,
        updatedAt: n
      };
    case j.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case j.RECORD_OPERATION: {
      const { operation: r, inverseOperation: s } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: r, inverseOperation: s }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: n
      };
    }
    case j.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return r.inverseOperation && (a = mt(e, r.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, r],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case j.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return r.operation && (a = mt(e, r.operation)), {
        ...a,
        undoStack: [...e.undoStack, r],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: n
      };
    }
    case j.CLEAR_UNDO_REDO:
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
}, fn = er(null), ss = ({ children: e, initialState: t = {} }) => {
  const [n, r] = nr(mt, ht(t)), s = Ee(() => ({
    initializeDocument: (o) => r({ type: j.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => r({ type: j.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => r({ type: j.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => r({ type: j.UPDATE_PAGES, payload: o }),
    addPage: (o) => r({ type: j.ADD_PAGE, payload: o }),
    deletePage: (o) => r({ type: j.DELETE_PAGE, payload: o }),
    setActivePage: (o) => r({ type: j.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => r({ type: j.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => r({ type: j.RESET_DOCUMENT }),
    updateContinuousContent: (o) => r({ type: j.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => r({ type: j.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => r({ type: j.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => r({ type: j.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => r({ type: j.SET_EDITOR_MODE, payload: o }),
    setZoomLevel: (o) => r({ type: j.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => r({ type: j.ZOOM_IN }),
    zoomOut: () => r({ type: j.ZOOM_OUT }),
    resetZoom: () => r({ type: j.RESET_ZOOM }),
    updatePageMargins: (o) => r({ type: j.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, i) => r({
      type: j.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: i }
    }),
    undo: () => r({ type: j.UNDO }),
    redo: () => r({ type: j.REDO }),
    clearUndoRedo: () => r({ type: j.CLEAR_UNDO_REDO })
  }), []), a = Ee(() => ({
    state: n,
    actions: s,
    dispatch: r
  }), [n, s]);
  return /* @__PURE__ */ y.jsx(fn.Provider, { value: a, children: e });
}, pn = () => {
  const e = tr(fn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, gn = () => {
  const { state: e } = pn();
  return e;
}, Re = () => {
  const { actions: e } = pn();
  return e;
};
var Ue = { exports: {} }, Fe = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function yr() {
  if (Wt) return K;
  Wt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function L(g) {
    if (typeof g == "object" && g !== null) {
      var h = g.$$typeof;
      switch (h) {
        case t:
          switch (g = g.type, g) {
            case p:
            case l:
            case r:
            case a:
            case s:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case d:
                case T:
                case x:
                case o:
                  return g;
                default:
                  return h;
              }
          }
        case n:
          return h;
      }
    }
  }
  function m(g) {
    return L(g) === l;
  }
  return K.AsyncMode = p, K.ConcurrentMode = l, K.ContextConsumer = i, K.ContextProvider = o, K.Element = t, K.ForwardRef = d, K.Fragment = r, K.Lazy = T, K.Memo = x, K.Portal = n, K.Profiler = a, K.StrictMode = s, K.Suspense = c, K.isAsyncMode = function(g) {
    return m(g) || L(g) === p;
  }, K.isConcurrentMode = m, K.isContextConsumer = function(g) {
    return L(g) === i;
  }, K.isContextProvider = function(g) {
    return L(g) === o;
  }, K.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, K.isForwardRef = function(g) {
    return L(g) === d;
  }, K.isFragment = function(g) {
    return L(g) === r;
  }, K.isLazy = function(g) {
    return L(g) === T;
  }, K.isMemo = function(g) {
    return L(g) === x;
  }, K.isPortal = function(g) {
    return L(g) === n;
  }, K.isProfiler = function(g) {
    return L(g) === a;
  }, K.isStrictMode = function(g) {
    return L(g) === s;
  }, K.isSuspense = function(g) {
    return L(g) === c;
  }, K.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === a || g === s || g === c || g === u || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === x || g.$$typeof === o || g.$$typeof === i || g.$$typeof === d || g.$$typeof === S || g.$$typeof === M || g.$$typeof === B || g.$$typeof === v);
  }, K.typeOf = L, K;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Er() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function L(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === l || R === a || R === s || R === c || R === u || typeof R == "object" && R !== null && (R.$$typeof === T || R.$$typeof === x || R.$$typeof === o || R.$$typeof === i || R.$$typeof === d || R.$$typeof === S || R.$$typeof === M || R.$$typeof === B || R.$$typeof === v);
    }
    function m(R) {
      if (typeof R == "object" && R !== null) {
        var ie = R.$$typeof;
        switch (ie) {
          case t:
            var pe = R.type;
            switch (pe) {
              case p:
              case l:
              case r:
              case a:
              case s:
              case c:
                return pe;
              default:
                var xe = pe && pe.$$typeof;
                switch (xe) {
                  case i:
                  case d:
                  case T:
                  case x:
                  case o:
                    return xe;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var g = p, h = l, O = i, A = o, I = t, F = d, G = r, Q = T, N = x, W = n, te = a, ee = s, re = c, ce = !1;
    function ue(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(R) || m(R) === p;
    }
    function b(R) {
      return m(R) === l;
    }
    function f(R) {
      return m(R) === i;
    }
    function w(R) {
      return m(R) === o;
    }
    function C(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function _(R) {
      return m(R) === d;
    }
    function z(R) {
      return m(R) === r;
    }
    function $(R) {
      return m(R) === T;
    }
    function D(R) {
      return m(R) === x;
    }
    function U(R) {
      return m(R) === n;
    }
    function Z(R) {
      return m(R) === a;
    }
    function q(R) {
      return m(R) === s;
    }
    function ae(R) {
      return m(R) === c;
    }
    X.AsyncMode = g, X.ConcurrentMode = h, X.ContextConsumer = O, X.ContextProvider = A, X.Element = I, X.ForwardRef = F, X.Fragment = G, X.Lazy = Q, X.Memo = N, X.Portal = W, X.Profiler = te, X.StrictMode = ee, X.Suspense = re, X.isAsyncMode = ue, X.isConcurrentMode = b, X.isContextConsumer = f, X.isContextProvider = w, X.isElement = C, X.isForwardRef = _, X.isFragment = z, X.isLazy = $, X.isMemo = D, X.isPortal = U, X.isProfiler = Z, X.isStrictMode = q, X.isSuspense = ae, X.isValidElementType = L, X.typeOf = m;
  })()), X;
}
var Zt;
function hn() {
  return Zt || (Zt = 1, process.env.NODE_ENV === "production" ? Fe.exports = yr() : Fe.exports = Er()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tt, Yt;
function Tr() {
  if (Yt) return tt;
  Yt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
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
  return tt = s() ? Object.assign : function(a, o) {
    for (var i, p = r(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var c in i)
        t.call(i, c) && (p[c] = i[c]);
      if (e) {
        l = e(i);
        for (var u = 0; u < l.length; u++)
          n.call(i, l[u]) && (p[l[u]] = i[l[u]]);
      }
    }
    return p;
  }, tt;
}
var nt, Vt;
function xt() {
  if (Vt) return nt;
  Vt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nt = e, nt;
}
var rt, Kt;
function mn() {
  return Kt || (Kt = 1, rt = Function.call.bind(Object.prototype.hasOwnProperty)), rt;
}
var ot, Xt;
function br() {
  if (Xt) return ot;
  Xt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ xt(), n = {}, r = /* @__PURE__ */ mn();
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
        if (r(a, d)) {
          var c;
          try {
            if (typeof a[d] != "function") {
              var u = Error(
                (p || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            c = a[d](o, d, p, i, null, t);
          } catch (T) {
            c = T;
          }
          if (c && !(c instanceof Error) && e(
            (p || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in n)) {
            n[c.message] = !0;
            var x = l ? l() : "";
            e(
              "Failed " + i + " type: " + c.message + (x ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ot = s, ot;
}
var at, Jt;
function vr() {
  if (Jt) return at;
  Jt = 1;
  var e = hn(), t = Tr(), n = /* @__PURE__ */ xt(), r = /* @__PURE__ */ mn(), s = /* @__PURE__ */ br(), a = function() {
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
  return at = function(i, p) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function c(b) {
      var f = b && (l && b[l] || b[d]);
      if (typeof f == "function")
        return f;
    }
    var u = "<<anonymous>>", x = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: B(),
      arrayOf: L,
      element: m(),
      elementType: g(),
      instanceOf: h,
      node: F(),
      objectOf: A,
      oneOf: O,
      oneOfType: I,
      shape: Q,
      exact: N
    };
    function T(b, f) {
      return b === f ? b !== 0 || 1 / b === 1 / f : b !== b && f !== f;
    }
    function v(b, f) {
      this.message = b, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function S(b) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, w = 0;
      function C(z, $, D, U, Z, q, ae) {
        if (U = U || u, q = q || D, ae !== n) {
          if (p) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = U + ":" + D;
            !f[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ie] = !0, w++);
          }
        }
        return $[D] == null ? z ? $[D] === null ? new v("The " + Z + " `" + q + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new v("The " + Z + " `" + q + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : b($, D, U, Z, q);
      }
      var _ = C.bind(null, !1);
      return _.isRequired = C.bind(null, !0), _;
    }
    function M(b) {
      function f(w, C, _, z, $, D) {
        var U = w[C], Z = ee(U);
        if (Z !== b) {
          var q = re(U);
          return new v(
            "Invalid " + z + " `" + $ + "` of type " + ("`" + q + "` supplied to `" + _ + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return S(f);
    }
    function B() {
      return S(o);
    }
    function L(b) {
      function f(w, C, _, z, $) {
        if (typeof b != "function")
          return new v("Property `" + $ + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var D = w[C];
        if (!Array.isArray(D)) {
          var U = ee(D);
          return new v("Invalid " + z + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var Z = 0; Z < D.length; Z++) {
          var q = b(D, Z, _, z, $ + "[" + Z + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return S(f);
    }
    function m() {
      function b(f, w, C, _, z) {
        var $ = f[w];
        if (!i($)) {
          var D = ee($);
          return new v("Invalid " + _ + " `" + z + "` of type " + ("`" + D + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(b);
    }
    function g() {
      function b(f, w, C, _, z) {
        var $ = f[w];
        if (!e.isValidElementType($)) {
          var D = ee($);
          return new v("Invalid " + _ + " `" + z + "` of type " + ("`" + D + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(b);
    }
    function h(b) {
      function f(w, C, _, z, $) {
        if (!(w[C] instanceof b)) {
          var D = b.name || u, U = ue(w[C]);
          return new v("Invalid " + z + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + _ + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return S(f);
    }
    function O(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(w, C, _, z, $) {
        for (var D = w[C], U = 0; U < b.length; U++)
          if (T(D, b[U]))
            return null;
        var Z = JSON.stringify(b, function(ae, R) {
          var ie = re(R);
          return ie === "symbol" ? String(R) : R;
        });
        return new v("Invalid " + z + " `" + $ + "` of value `" + String(D) + "` " + ("supplied to `" + _ + "`, expected one of " + Z + "."));
      }
      return S(f);
    }
    function A(b) {
      function f(w, C, _, z, $) {
        if (typeof b != "function")
          return new v("Property `" + $ + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var D = w[C], U = ee(D);
        if (U !== "object")
          return new v("Invalid " + z + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + _ + "`, expected an object."));
        for (var Z in D)
          if (r(D, Z)) {
            var q = b(D, Z, _, z, $ + "." + Z, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return S(f);
    }
    function I(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < b.length; f++) {
        var w = b[f];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(w) + " at index " + f + "."
          ), o;
      }
      function C(_, z, $, D, U) {
        for (var Z = [], q = 0; q < b.length; q++) {
          var ae = b[q], R = ae(_, z, $, D, U, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var ie = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new v("Invalid " + D + " `" + U + "` supplied to " + ("`" + $ + "`" + ie + "."));
      }
      return S(C);
    }
    function F() {
      function b(f, w, C, _, z) {
        return W(f[w]) ? null : new v("Invalid " + _ + " `" + z + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return S(b);
    }
    function G(b, f, w, C, _) {
      return new v(
        (b || "React class") + ": " + f + " type `" + w + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function Q(b) {
      function f(w, C, _, z, $) {
        var D = w[C], U = ee(D);
        if (U !== "object")
          return new v("Invalid " + z + " `" + $ + "` of type `" + U + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var Z in b) {
          var q = b[Z];
          if (typeof q != "function")
            return G(_, z, $, Z, re(q));
          var ae = q(D, Z, _, z, $ + "." + Z, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return S(f);
    }
    function N(b) {
      function f(w, C, _, z, $) {
        var D = w[C], U = ee(D);
        if (U !== "object")
          return new v("Invalid " + z + " `" + $ + "` of type `" + U + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var Z = t({}, w[C], b);
        for (var q in Z) {
          var ae = b[q];
          if (r(b, q) && typeof ae != "function")
            return G(_, z, $, q, re(ae));
          if (!ae)
            return new v(
              "Invalid " + z + " `" + $ + "` key `" + q + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(w[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var R = ae(D, q, _, z, $ + "." + q, n);
          if (R)
            return R;
        }
        return null;
      }
      return S(f);
    }
    function W(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(W);
          if (b === null || i(b))
            return !0;
          var f = c(b);
          if (f) {
            var w = f.call(b), C;
            if (f !== b.entries) {
              for (; !(C = w.next()).done; )
                if (!W(C.value))
                  return !1;
            } else
              for (; !(C = w.next()).done; ) {
                var _ = C.value;
                if (_ && !W(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(b, f) {
      return b === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function ee(b) {
      var f = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : te(f, b) ? "symbol" : f;
    }
    function re(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var f = ee(b);
      if (f === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function ce(b) {
      var f = re(b);
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
    function ue(b) {
      return !b.constructor || !b.constructor.name ? u : b.constructor.name;
    }
    return x.checkPropTypes = s, x.resetWarningCache = s.resetWarningCache, x.PropTypes = x, x;
  }, at;
}
var st, Qt;
function xr() {
  if (Qt) return st;
  Qt = 1;
  var e = /* @__PURE__ */ xt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, st = function() {
    function r(o, i, p, l, d, c) {
      if (c !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    r.isRequired = r;
    function s() {
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
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, st;
}
var en;
function wr() {
  if (en) return Ue.exports;
  if (en = 1, process.env.NODE_ENV !== "production") {
    var e = hn(), t = !0;
    Ue.exports = /* @__PURE__ */ vr()(e.isElement, t);
  } else
    Ue.exports = /* @__PURE__ */ xr()();
  return Ue.exports;
}
var Ar = /* @__PURE__ */ wr();
const E = /* @__PURE__ */ ir(Ar), yn = {
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
}, Rr = [
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
], Xe = "16px", _r = (e) => Math.round(e * 96 / 72), Sr = (e) => Math.round(e * 72 / 96 * 2) / 2, is = (e) => {
  const t = Object.values(yn).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${_r(e)}px`;
}, cs = (e) => {
  const t = parseInt(e), n = Object.values(yn).find((r) => r.px === t);
  return n ? n.pt : Sr(t);
}, ls = (e) => {
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
}, tn = {
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
}, Cr = () => {
  const [e, t] = le(tn), n = Re(), r = k((c, u, x = null) => {
    try {
      const T = window.getSelection();
      if (!T || T.rangeCount === 0)
        return !1;
      const v = T.getRangeAt(0);
      if (!v.toString())
        return t((M) => ({ ...M, [c]: u })), !1;
      try {
        const M = document.createElement("span");
        M.style[c] = u;
        const B = v.extractContents();
        return M.appendChild(B), v.insertNode(M), v.selectNodeContents(M), T.removeAllRanges(), T.addRange(v), t((L) => ({ ...L, [c]: u })), !0;
      } catch {
        if (x) {
          const M = c === "fontSize" ? Pr[u] || "3" : u;
          return document.execCommand(x, !1, M), t((B) => ({ ...B, [c]: u })), !0;
        }
        return !1;
      }
    } catch (T) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, T), !1;
    }
  }, []), s = k((c) => r("fontFamily", c, "fontName"), [r]), a = k((c) => r("fontSize", c, "fontSize"), [r]), o = k((c) => {
    t((u) => ({
      ...u,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = k((c) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const x = u.getRangeAt(0), T = x.toString(), S = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!S)
        return !1;
      if (!T) {
        const B = x.startContainer, L = B.nodeType === Node.TEXT_NODE ? B.parentElement : B, m = Ye(L) || kr();
        return m && (m.style.textAlign = S, o(S)), !0;
      }
      const M = Or(x);
      if (M.length === 0) {
        const B = document.createElement("p");
        B.style.textAlign = S;
        const L = x.extractContents();
        B.appendChild(L), x.insertNode(B), x.selectNodeContents(B), u.removeAllRanges(), u.addRange(x);
      } else
        M.forEach((B) => {
          B.style.textAlign = S;
        });
      return o(S), !0;
    } catch (u) {
      return console.warn("[useFormatting] Text alignment failed:", u), !1;
    }
  }, [o]), p = k((c, u = null) => {
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
          t((T) => ({ ...T, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (x) {
      console.warn(`[useFormatting] Error executing command "${c}":`, x);
    }
  }, [a, s, i, n]), l = k(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0), x = u.toString();
      let T = Xe, v = "Arial", S = "p", M = "left";
      if (x) {
        const L = u.startContainer, m = L.nodeType === Node.TEXT_NODE ? L.parentElement : L;
        if (m) {
          const g = window.getComputedStyle(m), h = g.fontSize, O = g.fontFamily;
          h && h.endsWith("px") && (T = h), O && O !== "serif" && (v = O.split(",")[0].replace(/['"]/g, "").trim());
          const A = Ye(m);
          if (A) {
            const I = A.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(I) && (S = I);
            const G = window.getComputedStyle(A).textAlign;
            ["left", "center", "right", "justify"].includes(G) && (M = G);
          }
        }
      }
      const B = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: M === "left",
        alignCenter: M === "center",
        alignRight: M === "right",
        alignJustify: M === "justify",
        fontFamily: v,
        fontSize: T,
        headingLevel: S
      };
      t((L) => ({
        ...L,
        ...B
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), d = k(() => {
    t(tn);
  }, []);
  return {
    currentFormat: e,
    formatText: p,
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
function Or(e) {
  const t = [], n = e.startContainer, r = e.endContainer, s = Ye(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), a = Ye(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
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
function kr() {
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
const Te = 'page-break, [data-page-break="true"]', En = (e) => Ae[e] || Ae.A4, Nr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = En(n), s = e.querySelectorAll(Te), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const o = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((p, l) => {
    const c = p.getBoundingClientRect().top - o.top + i;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: c,
      height: r.height
    });
  }), a;
}, Tn = (e, t = 100, n = ge) => {
  const r = En(e), s = fr(n), a = r.height - s, o = t / 100;
  return a / o;
}, Mr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(Te);
    if (n.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), s = r.top + r.height / 2;
    for (let a = n.length - 1; a >= 0; a--)
      if (n[a].getBoundingClientRect().top < s)
        return a + 1;
    return 0;
  } catch (n) {
    return console.warn("[getCurrentPage] Failed to calculate page:", n), 0;
  }
}, nn = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let n = [], r = [];
  for (const s of t)
    s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true" ? r.length > 0 && (n.push(r), r = []) : r.push(s);
  return r.length > 0 && n.push(r), n.length === 0 && t.length > 0 && n.push(t.filter(
    (s) => !(s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true")
  )), n;
}, Lr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const a = n[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Ir = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Dr = (e, t, n, r, s, a, o) => {
  if (!e)
    return !1;
  try {
    const p = Tn(n, r, s) * (t - 1), l = Array.from(e.children);
    let d = 0, c = null;
    for (let u = 0; u < l.length; u++) {
      const x = l[u];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const T = Lr(x);
      if (d + T > p) {
        c = x;
        break;
      }
      d += T;
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
        const T = e.innerHTML;
        a(T);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Hr = (e, t, n, r, s, a, o) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const p = Array.from(e.querySelectorAll(Te));
    if (t > p.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let d = !1, c = [], u = null;
    if (t === 0) {
      const T = p[0];
      if (!T)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== T; )
        c.push(v), v = v.nextSibling;
      u = T;
    } else {
      const T = p[t - 1];
      if (!T)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = p[t];
      let S = T.nextSibling;
      for (; S && S !== v; )
        c.push(S), S = S.nextSibling;
      u = T;
    }
    if (l && l.rangeCount > 0) {
      const v = l.getRangeAt(0).startContainer;
      for (const S of c)
        if (S.contains(v) || S === v) {
          d = !0;
          break;
        }
    }
    if (u && u.parentNode && u.remove(), c.forEach((T) => {
      T.parentNode && T.remove();
    }), e.querySelectorAll(Te).forEach((T, v) => {
      T.setAttribute("data-page-number", String(v + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), r) {
      const T = e.innerHTML;
      r(T);
    }
    return s && setTimeout(() => {
      s(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (p) {
    return console.error("[removePageAndContent] Failed to remove page:", p), !1;
  }
}, Br = (e) => {
  if (e)
    try {
      e.querySelectorAll(Te).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, jr = (e, t, n, r, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Br(t), n) {
      const a = t.innerHTML;
      n(a);
    }
    return r && setTimeout(() => {
      r(), s && setTimeout(() => {
        s();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, zr = 200, $r = 50, rn = 3, Ur = 20, bn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const a = n[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Fr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = bn(a);
    if (o < 1)
      continue;
    if (n + o > t)
      return r === null ? s > 0 ? {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: n
      } : null : {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: n
      };
    n += o, r = a;
  }
  return null;
}, Gr = (e, t, n, r, s, a, o, i) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const p = Tn(t, n, r);
    let l = nn(e), d = !1, c = 0;
    for (let u = 0; u < l.length && c < rn; u++) {
      const x = l[u], T = Fr(x, p);
      if (T && T.overflowIndex > 0) {
        let v = 0;
        for (let L = 0; L < x.length; L++) {
          const m = x[L];
          m && m.getBoundingClientRect && (v += bn(m));
        }
        if (v - p < Ur)
          continue;
        const M = u + 2;
        Ir(T.overflowElement, M) && (d = !0, c++, l = nn(e));
      }
    }
    if (d) {
      if (s) {
        const u = e.innerHTML;
        s(u);
      }
      setTimeout(() => {
        a && a(), c >= rn && i && setTimeout(() => {
          o.current || i();
        }, 100);
      }, $r);
    }
    return d;
  } catch (p) {
    return console.warn("[checkAndReflow] Reflow failed:", p), !1;
  } finally {
    o.current = !1;
  }
}, Wr = (e, t, n = zr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, qr = 400, vn = (e, t) => {
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
        const s = document.createRange(), a = window.getSelection();
        n.nodeType === Node.TEXT_NODE ? s.setStart(n, r) : s.setStart(n, 0), s.collapse(!0), a.removeAllRanges(), a.addRange(s);
      }
    } catch (n) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", n);
    }
  }
}, Zr = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (n === 0)
      s = t;
    else {
      const o = t.querySelectorAll(Te)[n - 1];
      if (o)
        s = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (s) {
      const a = s.getBoundingClientRect(), o = e.getBoundingClientRect(), i = e.scrollTop + (a.top - o.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : vn(t, n);
      }, qr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, Yr = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Vr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const s = e.querySelectorAll(Te);
  for (const d of s)
    if (n.comparePoint(d, 0) > 0)
      r++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(n.startContainer, n.startOffset);
  const i = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), p = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: l,
    charOffset: p
  };
}, Kr = 300, Xr = (e, t, n = 100, r = "NARROW") => {
  const s = Re(), a = J(null), o = J(null), i = J(e), p = J(n), l = J(r), d = J(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    p.current = n;
  }, [n]), oe(() => {
    l.current = r;
  }, [r]), oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = k((h = {}) => t?.current ? Nr(t.current, h) : [], [t]), u = k((h = {}) => {
    const O = c(h);
    return s.updatePageBoundaries(O), O;
  }, [c, s]), x = k((h = {}) => {
    const O = typeof h.delay == "number" ? h.delay : Kr;
    Yr(u, a, h, O);
  }, [u]), T = k(() => {
    t?.current && Gr(
      t.current,
      i.current,
      p.current,
      l.current,
      s.updateContinuousContent,
      u,
      d,
      T
    );
  }, [t, s, u]), v = k((h) => {
    Wr(T, o, h);
  }, [T]), S = k((h) => !h?.current || !t?.current ? 0 : Mr(h.current, t.current), [t]), M = k((h) => {
    t?.current && vn(t.current, h);
  }, [t]), B = k((h, O) => {
    if (!O?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Zr(O.current, t.current, h, M);
  }, [t, M]), L = k(async (h) => t?.current ? Dr(
    t.current,
    h,
    i.current,
    p.current,
    l.current,
    s.updateContinuousContent,
    u
  ) : !1, [t, s, u]), m = k((h) => t?.current ? Hr(
    t.current,
    h,
    c,
    s.updateContinuousContent,
    u,
    M,
    T
  ) : !1, [t, c, s, u, M, T]), g = k((h) => t?.current ? jr(
    h,
    t.current,
    s.updateContinuousContent,
    u,
    T
  ) : !1, [t, s, u, T]);
  return oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), Ee(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: x,
    updateBoundaries: u,
    getCurrentPage: S,
    scrollToPage: B,
    positionCursorAtPage: M,
    checkAndReflow: T,
    triggerAutoReflow: v,
    removePageAndContent: m,
    removePageBreak: g,
    insertPageBreakAtBoundary: L,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    x,
    u,
    S,
    B,
    M,
    T,
    v,
    m,
    g,
    L
  ]);
}, _e = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, H = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function us({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = _e
}) {
  const p = r - t, l = s - n;
  let d = a, c = o;
  switch (e) {
    case H.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case H.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case H.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case H.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case H.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case H.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case H.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case H.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      H.TOP_LEFT,
      H.TOP_RIGHT,
      H.BOTTOM_LEFT,
      H.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [H.TOP, H.BOTTOM].includes(e) ? d = c * u : [H.LEFT, H.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function me(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ds(e) {
  return me(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function fs(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Jr(e, t = _e) {
  if (!me(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(H).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = Qr(a), o.style.pointerEvents = "all", xn(o, a, r.width, r.height), n.appendChild(o);
  }), n;
}
function Qr(e) {
  switch (e) {
    case H.TOP_LEFT:
    case H.BOTTOM_RIGHT:
      return "nwse-resize";
    case H.TOP_RIGHT:
    case H.BOTTOM_LEFT:
      return "nesw-resize";
    case H.TOP:
    case H.BOTTOM:
      return "ns-resize";
    case H.LEFT:
    case H.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function xn(e, t, n, r) {
  switch (t) {
    case H.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case H.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case H.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case H.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case H.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case H.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case H.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case H.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function yt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    xn(s, a, n.width, n.height);
  });
}
function it(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const eo = "html-editor-storage", to = 1, fe = "images";
function no() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const n = indexedDB.open(eo, to);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const s = r.target.result;
      s.objectStoreNames.contains(fe) || s.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function ro(e) {
  return new Promise((t, n) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      n(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      n(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const s = new FileReader();
    s.onload = async (a) => {
      const o = a.target.result, p = o.split(",")[1].length * 3 / 4;
      if (p > 5 * 1024 * 1024) {
        n(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Le(), d = `editor-image-${no()}`, u = l.transaction([fe], "readwrite").objectStore(fe), x = {
          key: d,
          dataUrl: o,
          size: p,
          type: e.type,
          timestamp: Date.now()
        }, T = u.add(x);
        T.onsuccess = () => {
          l.close(), t(d);
        }, T.onerror = () => {
          l.close(), n(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        n(l);
      }
    }, s.onerror = () => {
      n(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function oo(e) {
  try {
    const t = await Le();
    return new Promise((n, r) => {
      const o = t.transaction([fe], "readonly").objectStore(fe).get(e);
      o.onsuccess = () => {
        t.close();
        const i = o.result;
        n(i ? i.dataUrl : null);
      }, o.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function ao(e) {
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
async function ps() {
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
async function gs() {
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
const wn = [
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
], io = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function co(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function An(e) {
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
function lo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function uo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => wn.includes(n.tagName));
}
function fo(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const s = r;
      wn.includes(s.tagName) ? t.push(s.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function ke(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${co(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), p = An(a);
      if (o === "DIV") {
        const l = ke(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        uo(a) ? t.push(fo(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = lo(a);
        t.push(`<${i}${p}>${l}</${i}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(po(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(go(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = ke(a);
        t.push(`<blockquote${p}>${l}</blockquote>`);
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
      else if (io.includes(o))
        t.push(a.outerHTML);
      else {
        const l = ke(a);
        t.push(`<${i}${p}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function po(e) {
  const t = e.tagName.toLowerCase(), n = An(e), r = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      r.push(s.outerHTML);
    else {
      const a = ke(s);
      a.trim() && r.push(`<li>${a}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function go(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), on = (e) => {
  const t = mo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Rn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), yo = (e) => {
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
var Eo = {
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
const To = Tt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: a,
    iconNode: o,
    ...i
  }, p) => lt(
    "svg",
    {
      ref: p,
      ...Eo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Rn("lucide", s),
      ...!a && !yo(i) && { "aria-hidden": "true" },
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
const V = (e, t) => {
  const n = Tt(
    ({ className: r, ...s }, a) => lt(To, {
      ref: a,
      iconNode: t,
      className: Rn(
        `lucide-${ho(on(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return n.displayName = on(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], vo = V("bold", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], wo = V("chevron-left", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ro = V("chevron-right", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], So = V("file-check", _o);
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
const Co = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Oo = V("hash", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], No = V("heading-1", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Lo = V("heading-2", Mo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Do = V("heading-3", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Bo = V("image-upscale", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], zo = V("image", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Uo = V("italic", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Go = V("link", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], qo = V("list-indent-decrease", Wo);
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
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Yo = V("list-indent-increase", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Ko = V("list-ordered", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], _n = V("list", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Qo = V("plus", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ta = V("redo", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], ra = V("scaling", na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], aa = V("settings", oa);
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
], ia = V("strikethrough", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], la = V("table", ca);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Sn = V("text-align-center", ua);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Pn = V("text-align-end", da);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], pa = V("text-align-justify", fa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Cn = V("text-align-start", ga);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ma = V("trash-2", ha);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ea = V("underline", ya);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ba = V("undo", Ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xa = V("x", va);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Aa = V("zoom-in", wa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], _a = V("zoom-out", Ra), an = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const s = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(s).map((a, o) => {
    const i = parseInt(a.tagName.charAt(1)), p = a.textContent.trim();
    return p ? {
      id: `${n}heading-${o}`,
      level: i,
      text: p,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Sa = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, Pa = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const s = gn(), { pages: a, activePage: o, continuousContent: i } = s, { wordCount: p, outline: l } = Ee(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: an(i, 1, "continuous-")
      };
    let c = 0;
    const u = [];
    return a.forEach((x, T) => {
      c += Sa(x.content), u.push(...an(x.content, T + 1, `page-${T}-`));
    }), { wordCount: c, outline: u };
  }, [a, n, r, i]), d = r !== void 0 ? r : a.length;
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
            /* @__PURE__ */ y.jsx(Ve, { size: 18 }),
            /* @__PURE__ */ y.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ y.jsx(Ro, { size: 16 }) : /* @__PURE__ */ y.jsx(wo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(So, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Oo, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Ve, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsxs("h3", { children: [
              /* @__PURE__ */ y.jsx(_n, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ y.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((c) => {
              const u = c.level === 1 ? No : c.level === 2 ? Lo : Do;
              return /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${c.level}`,
                  style: { marginLeft: `${(c.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ y.jsx(u, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ y.jsx("span", { className: "outline-text", children: c.text }),
                    /* @__PURE__ */ y.jsxs("span", { className: "outline-page", children: [
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
class Ca {
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
const sn = new Ca("Editor"), On = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), kn = 32;
function Nn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * kn}px`, e.dataset.indentLevel = String(r));
}
function Oa(e, t) {
  Nn(e, t);
}
function ka(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && On.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Na() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((o) => {
    document.createRange().selectNodeContents(o), t.intersectsNode(o) && n.add(o);
  }), n.size === 0 && r.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let l = i.parentElement;
      for (; l && l !== r; ) {
        if (l.tagName && On.has(l.tagName.toUpperCase())) {
          n.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(n).filter((o) => {
    let i = o.parentElement;
    for (; i; ) {
      if (n.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function Ma(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * kn}px`, e.dataset.indentLevel = String(n));
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
function Et(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = Na();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const o = ka(r.startContainer);
    if (!o) return !1;
    n = [o];
  }
  const s = n[0], a = n[n.length - 1];
  n.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      Oa(o, e);
      return;
    }
    e ? Ma(o) : Nn(o, !1);
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
      let x = null, T = u.nextNode();
      for (; T; )
        x = T, T = u.nextNode();
      return x;
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
function La(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && Et(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Ia = [
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
], Da = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Ha = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', wt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  canUndo: r = !1,
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
      const c = await ro(l), u = await oo(c);
      if (u) {
        const T = `<img src="${u}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, T), sn.info("Image inserted", { key: c });
      }
      const x = document.getElementById("image-upload");
      x && (x.value = "");
    } catch (d) {
      sn.error("Error uploading image", d);
    }
  }, o = (l, d, c, u) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[d] ? "active" : "",
      title: u,
      children: /* @__PURE__ */ y.jsx(c, { size: 16 })
    },
    l
  ), i = (l, d, c, u = !1) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: l,
      disabled: u,
      title: c,
      style: { opacity: u ? 0.5 : 1 },
      children: /* @__PURE__ */ y.jsx(d, { size: 16 })
    },
    c
  ), p = () => /* @__PURE__ */ y.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ y.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), ba, "Undo", !r),
    i(() => t("redo"), ta, "Redo", !s),
    p(),
    o("bold", "bold", vo, "Bold"),
    o("italic", "italic", Uo, "Italic"),
    o("underline", "underline", Ea, "Underline"),
    o("strikethrough", "strikethrough", ia, "Strikethrough"),
    p(),
    o("justifyLeft", "alignLeft", Cn, "Align Left"),
    o("justifyCenter", "alignCenter", Sn, "Align Center"),
    o("justifyRight", "alignRight", Pn, "Align Right"),
    o("justifyFull", "alignJustify", pa, "Justify"),
    p(),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Ia.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: Rr.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Da.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    p(),
    i(() => t("insertUnorderedList"), _n, "Bullet List"),
    i(() => t("insertOrderedList"), Ko, "Numbered List"),
    p(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          Et(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ y.jsx(Yo, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          Et(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ y.jsx(qo, { size: 16 })
      }
    ),
    p(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ y.jsx(Go, { size: 16 })
      }
    ),
    i(() => t("insertHTML", Ha), la, "Insert Table"),
    n && i(n, Ve, "Insert Page Break"),
    p(),
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
        children: /* @__PURE__ */ y.jsx(zo, { size: 16 })
      }
    )
  ] });
};
wt.propTypes = {
  currentFormat: E.shape({
    bold: E.bool,
    italic: E.bool,
    underline: E.bool,
    strikethrough: E.bool,
    alignLeft: E.bool,
    alignCenter: E.bool,
    alignRight: E.bool,
    alignJustify: E.bool,
    fontFamily: E.string,
    fontSize: E.string,
    headingLevel: E.string
  }).isRequired,
  onFormatText: E.func.isRequired,
  onAddPageBreak: E.func,
  canUndo: E.bool,
  canRedo: E.bool
};
wt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Ba(e) {
  return !e || typeof e != "string" ? e : qe(e);
}
function ja(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Ba(n) : n = za(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function za(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((a) => a.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((a) => $a(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function $a(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const be = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && be(e.parentElement) : !1, At = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: s,
  onClick: a,
  onScroll: o,
  onPaste: i,
  onRemovePageBreak: p,
  zoomLevel: l = 100,
  pageMargins: d = ge
}) => {
  const c = Ee(() => ln(d), [d]), u = l / 100, x = k((m, g) => {
    if (!m) return !1;
    const h = m.getBoundingClientRect(), O = g - h.top;
    return O < c.top || O > h.height - c.bottom;
  }, [c.top, c.bottom]), T = k((m, g) => {
    g.preventDefault();
    const h = m.getBoundingClientRect(), O = g.clientX - h.left, A = g.clientY - h.top, I = h.width - 40, F = -12, G = h.width - 20;
    O >= I && O <= G && A >= F && A <= 8 && p && p(m);
  }, [p]), v = k((m) => {
    m.preventDefault();
    const g = t.current.getBoundingClientRect();
    if (m.clientY - g.top < c.top) {
      const O = t.current.firstElementChild;
      if (O && O.tagName !== "PAGE-BREAK") {
        const A = document.createRange(), I = window.getSelection();
        A.setStart(O, 0), A.collapse(!0), I.removeAllRanges(), I.addRange(A);
      }
    } else {
      const O = t.current.lastElementChild;
      if (O && O.tagName !== "PAGE-BREAK") {
        const A = document.createRange(), I = window.getSelection();
        A.selectNodeContents(O), A.collapse(!1), I.removeAllRanges(), I.addRange(A);
      }
    }
  }, [t, c.top]), S = k((m) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const h = g.getRangeAt(0), { startContainer: O, endContainer: A } = h;
    if ((be(O) || be(A)) && (m.key.length === 1 || m.key === "Enter" || m.key === " "))
      return m.preventDefault(), !1;
    if (La(m))
      return r && r(), !1;
    if ((m.key === "Backspace" || m.key === "Delete") && (be(O) || be(A)))
      return m.preventDefault(), !1;
    s && s(m);
  }, [s, r]), M = k((m) => {
    if (!t.current) return;
    const g = m.target;
    if (be(g)) {
      T(g, m);
      return;
    }
    if (x(t.current, m.clientY)) {
      v(m);
      return;
    }
    a && a(m);
  }, [t, a, T, v, x]), B = k((m) => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0) return;
    const h = g.getRangeAt(0), { startContainer: O } = h;
    if (be(O))
      return m.preventDefault(), !1;
  }, []), L = k((m) => {
    const g = ja(m);
    i && i(m, g);
  }, [i]);
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
        transform: `scale(${u})`,
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
          onBeforeInput: B,
          onClick: M,
          onScroll: o,
          onPaste: L,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
At.propTypes = {
  dimensions: E.shape({
    width: E.number.isRequired,
    height: E.number.isRequired
  }).isRequired,
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: E.func.isRequired,
  onContentChange: E.func,
  onKeyDown: E.func,
  onClick: E.func,
  onScroll: E.func,
  onPaste: E.func,
  onRemovePageBreak: E.func,
  zoomLevel: E.number,
  pageMargins: E.string
};
At.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const Ua = rr(At), Rt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ge,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: i,
  onAddPage: p,
  onDeletePage: l,
  onPageSizeChange: d,
  onPageMarginsChange: c,
  onZoomIn: u,
  onZoomOut: x,
  onZoomReset: T
} = {}) => {
  const v = Math.max(e?.length || 0, 1), S = (g) => {
    i && i(g);
  }, M = () => {
    p && p();
  }, B = (g) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(g);
  }, L = (g) => {
    d && d(g);
  }, m = (g) => {
    c && c(g);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ y.jsx(aa, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: n,
              onChange: (g) => L(g.target.value),
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
              value: r,
              onChange: (g) => m(g.target.value),
              children: pr().map((g) => /* @__PURE__ */ y.jsx("option", { value: g, children: gr(g) }, g))
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
          children: /* @__PURE__ */ y.jsx(_a, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsxs("span", { className: "zoom-level-display", children: [
        s,
        "%"
      ] }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: u,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ y.jsx(Aa, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: T,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "page-list", children: e.map((g, h) => /* @__PURE__ */ y.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${h === t ? "active" : ""}`,
          onClick: () => S(h),
          "aria-label": `Go to page ${h + 1}`,
          "aria-current": h === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ y.jsx(Ve, { size: 14 }),
            /* @__PURE__ */ y.jsxs("span", { children: [
              "Page ",
              h + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (O) => {
            O.stopPropagation(), B(h);
          },
          "aria-label": `Delete page ${h + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ y.jsx(xa, { size: 14 })
        }
      )
    ] }, g.id || `page-${h}`)) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: M,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ y.jsx(Qo, { size: 16 }),
          /* @__PURE__ */ y.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Rt.propTypes = {
  pageBoundaries: E.arrayOf(
    E.shape({
      id: E.string.isRequired,
      pageNumber: E.number.isRequired,
      top: E.number,
      height: E.number
    })
  ),
  activePage: E.number,
  pageSize: E.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: E.string,
  zoomLevel: E.number,
  canZoomIn: E.bool,
  canZoomOut: E.bool,
  onNavigate: E.func,
  onAddPage: E.func,
  onDeletePage: E.func,
  onPageSizeChange: E.func,
  onPageMarginsChange: E.func,
  onZoomIn: E.func,
  onZoomOut: E.func,
  onZoomReset: E.func
};
Rt.defaultProps = {
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
const Fa = Ke.memo(Rt);
function Ga(e) {
  switch (e) {
    case H.TOP_LEFT:
    case H.BOTTOM_RIGHT:
      return "nwse-resize";
    case H.TOP_RIGHT:
    case H.BOTTOM_LEFT:
      return "nesw-resize";
    case H.TOP:
    case H.BOTTOM:
      return "ns-resize";
    case H.LEFT:
    case H.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Wa({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = _e
}) {
  const p = r - t, l = s - n;
  let d = a, c = o;
  switch (e) {
    case H.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case H.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case H.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case H.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case H.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case H.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case H.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case H.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      H.TOP_LEFT,
      H.TOP_RIGHT,
      H.BOTTOM_LEFT,
      H.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [H.TOP, H.BOTTOM].includes(e) ? d = c * u : [H.LEFT, H.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function Mn(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function qa(e, t, n) {
  Mn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function Za(e, t, n, r) {
  const { ctrlKey: s, metaKey: a, shiftKey: o, key: i } = e, p = s || a, l = n.offsetWidth, d = n.offsetHeight, u = {
    // Increase width
    ">": p && o ? () => ({
      width: Math.min(r.maxWidth || 800, l + 10),
      height: d
    }) : null,
    // Decrease width
    "<": p && o ? () => ({
      width: Math.max(r.minWidth || 50, l - 10),
      height: d
    }) : null,
    // Increase height
    "+": p && o ? () => ({
      width: l,
      height: Math.min(r.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": p && o ? () => ({
      width: l,
      height: Math.max(r.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: p && !o ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (u) {
    e.preventDefault();
    const x = u();
    return qa(t, n, x), !0;
  }
  return !1;
}
const _t = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: s = _e
}) => {
  const a = J(null), o = J(null), i = J(null), p = J(null), l = J(s), d = J(!1), c = Re();
  oe(() => {
    l.current = s;
  }, [s]);
  const u = k((m) => {
    if (!me(m)) return;
    a.current && (it(a.current), a.current = null), m.classList.add("selected");
    const g = Jr(m, l.current);
    g && (a.current = g, o.current = m, document.body.appendChild(g), g.querySelectorAll(".resize-handler").forEach((O) => {
      O.addEventListener("mousedown", T);
    }), n && n(m));
  }, [n]), x = k(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (it(a.current), a.current = null), i.current = null, p.current = null, d.current = !1, r && r();
  }, [r]), T = k((m) => {
    if (m.preventDefault(), m.stopPropagation(), !o.current) return;
    const g = m.currentTarget.dataset.handler, h = o.current.getBoundingClientRect(), O = window.pageYOffset || document.documentElement.scrollTop, A = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: m.clientX,
      y: m.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: m.clientX - h.left - A,
      offsetY: m.clientY - h.top - O
    }, p.current = g, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ga(g), document.addEventListener("mousemove", v), document.addEventListener("mouseup", S);
  }, []), v = k((m) => {
    if (!d.current || !o.current || !i.current || !p.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: g, y: h, width: O, height: A } = i.current, I = p.current, F = m.clientX, G = m.clientY, Q = Wa({
      handler: I,
      startX: g,
      startY: h,
      currentX: F,
      currentY: G,
      startWidth: O,
      startHeight: A,
      options: l.current
    });
    Mn(o.current, Q), a.current && yt(a.current, o.current);
  }, []), S = k((m) => {
    if (d.current) {
      if (m.preventDefault(), m.stopPropagation(), o.current && i.current) {
        const g = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, h = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (g.width !== h.width || g.height !== h.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: h } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: g } }
        );
      }
      if (i.current = null, p.current = null, d.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(g), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), M = k((m) => {
    a.current && !a.current.contains(m.target) && x();
    const g = m.target;
    if (me(g)) {
      if (g === o.current)
        return;
      u(g);
    }
  }, [u, x]), B = k((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && o.current && !d.current) {
      m.preventDefault();
      const g = o.current;
      if (g.parentNode) {
        g.parentNode.removeChild(g), x();
        const h = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(h);
      }
    }
    m.key === "Escape" && o.current && x(), o.current && !d.current && Za(m, e, o.current, l.current);
  }, [e, x]), L = k(() => {
    a.current && o.current && yt(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const g = e.current.closest(".editor-viewport");
    return g && (g.addEventListener("scroll", L), window.addEventListener("scroll", L)), () => {
      g && g.removeEventListener("scroll", L), window.removeEventListener("scroll", L);
    };
  }, [e, L]), oe(() => {
    if (!e.current) return;
    const m = e.current;
    return m.addEventListener("click", M), m.addEventListener("keydown", B), window.addEventListener("resize", L), () => {
      m.removeEventListener("click", M), m.removeEventListener("keydown", B), window.removeEventListener("resize", L), d.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && it(a.current);
    };
  }, [e, M, B, L, v, S]), oe(() => {
    if (!e.current) return;
    const m = new MutationObserver((g) => {
      g.forEach((h) => {
        h.type === "childList" && (h.removedNodes.forEach((O) => {
          O.nodeType === Node.ELEMENT_NODE && me(O) && O === o.current && x();
        }), h.addedNodes.forEach((O) => {
          if (O.nodeType !== Node.ELEMENT_NODE) return;
          if (me(O)) {
            setTimeout(() => u(O), 50);
            return;
          }
          const A = O.querySelectorAll?.("img") || [];
          A.length > 0 && setTimeout(() => u(A[0]), 50);
        }));
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, x, u]), null;
};
_t.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: E.func,
  onImageSelect: E.func,
  onImageDeselect: E.func,
  resizeOptions: E.shape({
    minWidth: E.number,
    minHeight: E.number,
    maxWidth: E.number,
    maxHeight: E.number,
    aspectRatio: E.bool,
    preserveAspectRatio: E.bool,
    defaultWidth: E.number,
    defaultHeight: E.number
  })
};
_t.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: _e
};
const St = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, i] = le({ top: 0, left: 0 }), [p, l] = le(!1), [d, c] = le("top"), [u, x] = le(a), T = J(null), v = J(null), S = Re(), M = (N) => {
    if (!N)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (te) => setTimeout(te, 16))(() => {
      const te = document.querySelector(".image-resize-overlay");
      te && yt(te, N);
    });
  }, B = (N) => {
    if (!N) return null;
    const W = window.getComputedStyle(N);
    return {
      float: W.float || "none",
      margin: N.style.margin || "",
      display: W.display || "inline",
      width: N.style.width || N.width || "",
      height: N.style.height || N.height || "",
      aspectRatio: u
    };
  }, L = k(() => {
    if (!e) return "left";
    const N = window.getComputedStyle(e);
    return N.float === "right" ? "right" : N.float === "left" ? "left" : N.display === "block" && N.margin.includes("auto") ? "center" : "left";
  }, [e]), [m, g] = le("left");
  oe(() => {
    e && g(L());
  }, [e, L]);
  const h = k(() => {
    if (!e || !T.current) return;
    const N = e.getBoundingClientRect(), W = T.current.getBoundingClientRect(), te = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, ee = N.bottom >= 0 && N.top <= te.height && N.right >= 0 && N.left <= te.width;
    let re = "top", ce = 0, ue = 0;
    if (ee) {
      const _ = N.top - W.height - 10, z = te.height - N.bottom - W.height - 10;
      z > _ && z > 0 ? (re = "bottom", ce = N.bottom + 10) : (re = "top", ce = N.top - W.height - 10);
    } else
      re = "top", ce = 10;
    ue = N.left + N.width / 2 - W.width / 2;
    const b = window.innerWidth, f = window.innerHeight;
    let w = Math.max(10, Math.min(ue, b - W.width - 10)), C = Math.max(10, Math.min(ce, f - W.height - 10));
    i({ top: C, left: w }), c(re), l(!0);
  }, [e]);
  or(() => {
    h();
    const N = () => {
      h();
    }, W = v.current;
    return W && W.addEventListener("scroll", N), window.addEventListener("scroll", N), window.addEventListener("resize", N), () => {
      W && W.removeEventListener("scroll", N), window.removeEventListener("scroll", N), window.removeEventListener("resize", N), l(!1);
    };
  }, [e, h]), oe(() => {
    const N = (W) => {
      T.current && !T.current.contains(W.target) && W.target !== e && s();
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, [e, s]);
  const O = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, A = (N) => {
    if (e && O[N]) {
      const W = B(e), te = m, ee = O[N];
      e.style.float = ee.float, e.style.margin = ee.margin, e.style.display = ee.display, g(N), M(e);
      const re = B(e);
      S.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: N, state: re } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: te, state: W } }
      ), t && t(N);
    }
  }, I = () => {
    if (e && e.parentNode) {
      const N = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      S.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: N } }
      ), e.parentNode.removeChild(e), r && r(), s();
    }
  }, F = () => {
    const N = u, W = !u;
    x(W), S.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: W } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: N } }
    ), n && n(W);
  }, G = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, Q = (N) => ({
    ...G,
    background: N ? "#007bff" : "transparent",
    color: N ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : sr(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: T,
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
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${u ? "" : "active"}`,
              onClick: F,
              title: `Toggle aspect ratio preservation (currently ${u ? "ON" : "OFF"})`,
              children: u ? /* @__PURE__ */ y.jsx(ra, { size: 14 }) : /* @__PURE__ */ y.jsx(Bo, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "left" ? "active" : ""}`,
              onClick: () => A("left"),
              title: "Align Left",
              style: Q(m === "left"),
              children: /* @__PURE__ */ y.jsx(Cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "center" ? "active" : ""}`,
              onClick: () => A("center"),
              title: "Align Center",
              style: Q(m === "center"),
              children: /* @__PURE__ */ y.jsx(Sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "right" ? "active" : ""}`,
              onClick: () => A("right"),
              title: "Align Right",
              style: Q(m === "right"),
              children: /* @__PURE__ */ y.jsx(Pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: I,
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
              children: /* @__PURE__ */ y.jsx(ma, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
St.propTypes = {
  imageElement: E.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: E.func,
  onAspectRatioToggle: E.func,
  onDelete: E.func,
  onClose: E.func.isRequired,
  initialPreserveAspectRatio: E.bool
};
St.defaultProps = {
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
}, se = {
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
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, s = [], a = e.querySelector("colgroup"), o = a ? a.querySelectorAll("col") : [];
  if (o.length >= r)
    for (let p = 0; p < r; p++) {
      const l = o[p], d = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      s.push(d || 100);
    }
  else if (n.length > 0) {
    const p = n[0];
    for (let l = 0; l < p.cells.length; l++) {
      const d = p.cells[l];
      s.push(d.offsetWidth);
    }
  }
  const i = n.map((p) => (p.style.height ? parseInt(p.style.height, 10) : null) || p.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: s,
    rowHeights: i,
    rect: t
  };
}
function Ya({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: s = Je
}) {
  const a = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, o = (i, p, l, d, c) => {
    p >= 0 && p < i.length && (i[p] = Math.max(d, Math.min(c, i[p] + l)));
  };
  switch (e) {
    case se.COLUMN:
      o(a.columnWidths, t, n, s.minColumnWidth, s.maxColumnWidth), a.tableWidth = r.width;
      break;
    case se.ROW:
      o(a.rowHeights, t, n, s.minRowHeight, s.maxRowHeight), a.tableHeight = r.height;
      break;
    case se.TABLE_BOTTOM:
      o(a.rowHeights, r.rows - 1, n, s.minRowHeight, s.maxRowHeight);
      break;
    case se.TABLE_RIGHT:
      o(a.columnWidths, r.columns - 1, n, s.minColumnWidth, s.maxColumnWidth);
      break;
  }
  return a;
}
function Pt(e) {
  if (!ye(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const s = r.querySelectorAll("col"), a = s.length;
  if (a < n)
    for (let o = a; o < n; o++) {
      const i = document.createElement("col");
      r.appendChild(i);
    }
  else if (a > n)
    for (let o = a - 1; o >= n; o--)
      r.removeChild(s[o]);
}
function Va(e, t, n) {
  if (!ye(e)) return;
  Pt(e);
  const { columnWidths: r, rowHeights: s, tableWidth: a, tableHeight: o } = t, i = r ? r.reduce((l, d) => l + d, 0) : 0, p = s ? s.reduce((l, d) => l + d, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : i > 0 && (e.style.width = `${i}px`), o !== void 0 ? e.style.height = `${o}px` : p > 0 && (e.style.height = `${p}px`), r && r.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((c, u) => {
      u < r.length && (c.style.width = `${r[u]}px`);
    }), e.style.width = `${i}px`;
  }
  s && s.length > 0 && (Array.from(e.rows).forEach((d, c) => {
    c < s.length && (d.style.height = `${s[c]}px`);
  }), e.style.height = `${p}px`), e.offsetHeight;
}
function Ka(e, t = Je) {
  if (!ye(e)) return null;
  Pt(e);
  const n = Ne(e);
  if (!n) return null;
  const r = document.createElement("div");
  r.className = "table-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const s = e.getBoundingClientRect();
  r.style.top = `${s.top}px`, r.style.left = `${s.left}px`, r.style.width = `${s.width}px`, r.style.height = `${s.height}px`;
  for (let i = 0; i < n.columns - 1; i++) {
    const p = Ln(i, n, s, e);
    r.appendChild(p);
  }
  for (let i = 0; i < n.rows - 1; i++) {
    const p = In(i, n, s, e);
    r.appendChild(p);
  }
  const a = Dn(n, s);
  r.appendChild(a);
  const o = Hn(n, s);
  return r.appendChild(o), r;
}
function Ln(e, t, n, r) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-column-resize-handler", s.dataset.type = se.COLUMN, s.dataset.index = e, s.style.position = "absolute", s.style.width = "4px", s.style.height = `${n.height}px`, s.style.cursor = "col-resize", s.style.pointerEvents = "all", Bn(s, e, t, n, r), s;
}
function In(e, t, n, r) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-row-resize-handler", s.dataset.type = se.ROW, s.dataset.index = e, s.style.position = "absolute", s.style.width = `${n.width}px`, s.style.height = "4px", s.style.cursor = "row-resize", s.style.pointerEvents = "all", jn(s, e, t, n, r), s;
}
function Dn(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-bottom-resize-handler", n.dataset.type = se.TABLE_BOTTOM, n.style.position = "absolute", n.style.width = `${t.width}px`, n.style.height = "4px", n.style.cursor = "ns-resize", n.style.pointerEvents = "all", zn(n, e, t), n;
}
function Hn(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-right-resize-handler", n.dataset.type = se.TABLE_RIGHT, n.style.position = "absolute", n.style.width = "4px", n.style.height = `${t.height}px`, n.style.cursor = "ew-resize", n.style.pointerEvents = "all", $n(n, e, t), n;
}
function cn(e, t) {
  if (!e || !t) return;
  Pt(t);
  const n = Ne(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const s = e.querySelectorAll(".table-column-resize-handler"), a = e.querySelectorAll(".table-row-resize-handler"), o = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (s.length !== n.columns - 1 || a.length !== n.rows - 1 || !o || !i) {
    e.innerHTML = "";
    for (let c = 0; c < n.columns - 1; c++) {
      const u = Ln(c, n, r, t);
      e.appendChild(u);
    }
    for (let c = 0; c < n.rows - 1; c++) {
      const u = In(c, n, r, t);
      e.appendChild(u);
    }
    const l = Dn(n, r);
    e.appendChild(l);
    const d = Hn(n, r);
    e.appendChild(d);
  } else
    s.forEach((l, d) => {
      Bn(l, d, n, r, t);
    }), a.forEach((l, d) => {
      jn(l, d, n, r, t);
    }), o && zn(o, n, r), i && $n(i, n, r);
}
function Ge(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Bn(e, t, n, r, s) {
  if (s && s.rows.length > 0) {
    const o = s.rows[0];
    if (o.cells.length > t) {
      const p = o.cells[t].getBoundingClientRect(), l = s.getBoundingClientRect(), d = p.right - l.left - 2;
      e.style.left = `${d}px`, e.style.height = `${r.height}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += n.columnWidths[o];
  e.style.left = `${a - 2}px`, e.style.height = `${r.height}px`;
}
function jn(e, t, n, r, s) {
  if (s && s.rows.length > t) {
    const o = s.rows[t];
    if (o.cells.length > 0) {
      const p = o.cells[0].getBoundingClientRect(), l = s.getBoundingClientRect(), d = p.bottom - l.top - 2;
      e.style.top = `${d}px`, e.style.width = `${r.width}px`;
      return;
    }
  }
  let a = 0;
  for (let o = 0; o <= t; o++)
    a += n.rowHeights[o];
  e.style.top = `${a - 2}px`, e.style.width = `${r.width}px`;
}
function zn(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function $n(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
const Ct = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: s = Je
}) => {
  const a = J(null), o = J(null), i = J(null), p = J(null), l = J(null), d = J(s), c = J(!1), [u, x] = le(null), T = Re();
  oe(() => {
    d.current = s;
  }, [s]);
  const v = k(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (Ge(a.current), a.current = null), x(null), i.current = null, p.current = null, l.current = null, c.current = !1, r && r();
  }, [r]), S = k((A) => {
    if (A.preventDefault(), A.stopPropagation(), !o.current) return;
    const I = A.currentTarget, F = I.dataset.type, G = parseInt(I.dataset.index, 10);
    o.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const Q = Ne(o.current);
    i.current = {
      x: A.clientX,
      y: A.clientY,
      structure: { ...Q }
    }, p.current = F, l.current = G, c.current = !0, document.body.classList.add("table-resize-in-progress");
    const N = {
      [se.COLUMN]: "col-resize",
      [se.ROW]: "row-resize",
      [se.TABLE_BOTTOM]: "ns-resize",
      [se.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = N[F] || "default", document.addEventListener("mousemove", L), document.addEventListener("mouseup", m);
  }, []), M = k((A) => {
    const I = Ka(A, d.current);
    return I && (a.current = I, o.current = A, document.body.appendChild(I), I.querySelectorAll(".table-resize-handler").forEach((G) => {
      G.addEventListener("mousedown", S);
    })), I;
  }, [S]), B = k((A) => {
    if (!ye(A)) return;
    a.current && (Ge(a.current), a.current = null), A.classList.add("selected"), M(A) && (x(A), n && n(A));
  }, [n, M]), L = k((A) => {
    if (!c.current || !o.current || !i.current || !p.current) return;
    A.preventDefault(), A.stopPropagation();
    const { x: I, y: F, structure: G } = i.current, Q = p.current, N = l.current, W = A.clientX, te = A.clientY;
    let ee = 0;
    switch (Q) {
      case se.COLUMN:
        ee = W - I;
        break;
      case se.ROW:
        ee = te - F;
        break;
      case se.TABLE_BOTTOM:
        ee = te - F;
        break;
      case se.TABLE_RIGHT:
        ee = W - I;
        break;
    }
    const re = Ya({
      type: Q,
      index: N,
      delta: ee,
      currentStructure: G,
      options: d.current
    });
    Va(o.current, re), a.current && cn(a.current, o.current);
  }, []), m = k((A) => {
    if (c.current) {
      if (A.preventDefault(), A.stopPropagation(), o.current && i.current) {
        const I = {
          structure: i.current.structure
        }, F = {
          structure: Ne(o.current)
        };
        (I.structure.width !== F.structure.width || I.structure.height !== F.structure.height || JSON.stringify(I.structure.columnWidths) !== JSON.stringify(F.structure.columnWidths) || JSON.stringify(I.structure.rowHeights) !== JSON.stringify(F.structure.rowHeights)) && T.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: o.current, state: F } },
          { type: "TABLE_RESIZE", payload: { element: o.current, state: I } }
        );
      }
      if (i.current = null, p.current = null, l.current = null, c.current = !1, document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", m), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", o.current) {
        const I = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(I), t && t(o.current, Ne(o.current));
      }
    }
  }, [t, T]), g = k((A) => {
    a.current && !a.current.contains(A.target) && v();
    const F = A.target.closest("table");
    if (F && ye(F)) {
      if (F === o.current)
        return;
      B(F);
    }
  }, [B, v]), h = k((A) => {
    if ((A.key === "Delete" || A.key === "Backspace") && o.current && !c.current) {
      A.preventDefault();
      const I = o.current;
      if (I.parentNode) {
        I.parentNode.removeChild(I), v();
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
    }
    A.key === "Escape" && o.current && v();
  }, [e, v]), O = k(() => {
    a.current && o.current && cn(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const I = e.current.closest(".editor-viewport");
    return I && (I.addEventListener("scroll", O), window.addEventListener("scroll", O)), () => {
      I && I.removeEventListener("scroll", O), window.removeEventListener("scroll", O);
    };
  }, [e, O]), oe(() => {
    if (!e.current) return;
    const A = e.current;
    return A.addEventListener("click", g), A.addEventListener("keydown", h), window.addEventListener("resize", O), () => {
      A.removeEventListener("click", g), A.removeEventListener("keydown", h), window.removeEventListener("resize", O), c.current && (document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", m), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), a.current && Ge(a.current);
    };
  }, [e, g, h, O, L, m]), oe(() => {
    if (!e.current) return;
    const A = new MutationObserver((I) => {
      I.forEach((F) => {
        F.type === "childList" && (F.removedNodes.forEach((G) => {
          G.nodeType === Node.ELEMENT_NODE && ye(G) && G === u && v();
        }), F.addedNodes.forEach((G) => {
          if (G.nodeType !== Node.ELEMENT_NODE) return;
          if (ye(G)) {
            setTimeout(() => B(G), 50);
            return;
          }
          const Q = G.querySelectorAll?.("table") || [];
          Q.length > 0 && setTimeout(() => B(Q[0]), 50);
        }));
      });
    });
    return A.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => A.disconnect();
  }, [e, v, B]), oe(() => {
    if (!u) return;
    const A = new MutationObserver((I) => {
      I.some((G) => {
        if (G.type === "childList") {
          if ([...G.addedNodes, ...G.removedNodes].some(
            (N) => N.nodeType === Node.ELEMENT_NODE && N.tagName === "TR"
          )) return !0;
        } else if (G.type === "attributes" && ["colspan", "rowspan"].includes(G.attributeName))
          return !0;
        return !1;
      }) && a.current && o.current && (Ge(a.current), a.current = null, M(o.current));
    });
    return A.observe(u, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => A.disconnect();
  }, [u, M]), null;
};
Ct.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: E.func,
  onTableSelect: E.func,
  onTableDeselect: E.func,
  resizeOptions: E.shape({
    minColumnWidth: E.number,
    minRowHeight: E.number,
    maxColumnWidth: E.number,
    maxRowHeight: E.number,
    tableMinWidth: E.number,
    tableMinHeight: E.number,
    tableMaxWidth: E.number,
    tableMaxHeight: E.number
  })
};
Ct.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const Xa = 50, ct = 50, Ja = 50, Qa = 100, es = 300, Ot = Tt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: i = !0,
  showToolbar: p = !0,
  showPageManager: l = !0
}, d) => {
  const c = gn(), u = Re(), { pageSize: x, pageMargins: T, continuousContent: v, pageBoundaries: S, activePage: M, zoomLevel: B, canUndo: L, canRedo: m } = c, g = J(null), h = J(null), { currentFormat: O, formatText: A, updateCurrentFormatFromSelection: I } = Cr(), [F, G] = le(!1), [Q, N] = le(null), [W, te] = le(!0), [ee, re] = le(!1), [ce, ue] = le(null), b = J(null), {
    checkAndUpdateBoundaries: f,
    getCurrentPage: w,
    scrollToPage: C,
    updateBoundaries: _,
    triggerAutoReflow: z,
    removePageAndContent: $,
    removePageBreak: D,
    insertPageBreakAtBoundary: U
  } = Xr(x, h, B, T), Z = Ee(() => vt(x), [x]), [q, ae] = le(!1), R = J(null), ie = J(!1), pe = J(!1), xe = J(!1), we = J(v);
  oe(() => {
    if (h.current) {
      if (!xe.current) {
        h.current.innerHTML = v, xe.current = !0, we.current = v;
        const P = setTimeout(() => {
          _();
        }, Xa);
        return () => clearTimeout(P);
      }
      if (we.current !== v) {
        if (h.current.innerHTML !== v) {
          h.current.innerHTML = v;
          const Y = setTimeout(() => {
            _(), ie.current && Nt();
          }, ct);
          return we.current = v, () => clearTimeout(Y);
        }
        we.current = v;
      }
    }
  }, [v, _, S.length, u, C]), oe(() => {
    o && xe.current && o(v);
  }, [v, o]);
  const kt = Ee(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => h.current ? h.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (h.current ? h.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => h.current ? Vr(h.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (P) => {
      const Y = qe(P);
      Y !== v && u.updateContinuousContent(Y), h.current && h.current.innerHTML !== Y && (h.current.innerHTML = Y), we.current = Y, h.current && setTimeout(() => {
        _();
      }, ct);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (P) => {
      if (!h.current || !P) return;
      const Y = qe(P), ne = window.getSelection();
      let de = !1;
      if (ne && ne.rangeCount > 0) {
        const et = ne.getRangeAt(0);
        h.current.contains(et.commonAncestorContainer) && (de = !0);
      }
      if (!de && b.current)
        try {
          ne.removeAllRanges(), ne.addRange(b.current);
        } catch (et) {
          console.warn("[insertContent] Failed to restore last cursor position:", et);
          const Se = h.current.lastChild;
          if (Se) {
            const Be = document.createRange();
            Se.nodeType === Node.TEXT_NODE ? Be.setStart(Se, Se.textContent.length) : Be.setStartAfter(Se), Be.collapse(!0), ne.removeAllRanges(), ne.addRange(Be);
          }
        }
      document.execCommand("insertHTML", !1, Y);
      const he = h.current.innerHTML;
      u.updateContinuousContent(he), we.current = he, setTimeout(() => {
        _(), z(200);
      }, ct);
    }
  }), [v, u, _, h, b, f]);
  ar(d, () => kt, [kt]), oe(() => {
    const P = () => {
      if (I(), h.current) {
        const ne = window.getSelection();
        if (ne.rangeCount > 0) {
          const de = ne.getRangeAt(0);
          de.collapsed && h.current.contains(de.commonAncestorContainer) && (b.current = de.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", P);
    const Y = () => {
      if (setTimeout(I, 10), b.current && h.current)
        try {
          const ne = window.getSelection();
          ne.removeAllRanges(), ne.addRange(b.current);
        } catch (ne) {
          console.warn("[handleFocus] Failed to restore cursor:", ne);
        }
    };
    return h.current && h.current.addEventListener("focus", Y), () => {
      document.removeEventListener("selectionchange", P), h.current && h.current.removeEventListener("focus", Y);
    };
  }, [I]);
  const Nt = k(() => {
    ie.current = !1;
    const P = Math.max(0, S.length - 1);
    u.setActivePage(P), setTimeout(() => {
      C(P, g);
    }, Ja);
  }, [S.length, u, C]), Qe = k(() => {
    if (!h.current) return;
    let P = h.current.innerHTML;
    P = qe(P), P !== h.current.innerHTML && (h.current.innerHTML = P);
    const Y = v;
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
    u.updateContinuousContent(P), f(), z(200);
    const ne = w(g);
    ne !== M && u.setActivePage(ne);
  }, [u, f, w, M, z, g, h, v]), Fn = k((P) => {
    Qe();
  }, [Qe]), Mt = k((P) => {
    u.updatePageSize(P), _({ pageSize: P }), s && s(P);
  }, [u, _, s]), Lt = k((P) => {
    u.updatePageMargins(P), _({ pageMargins: P }), a && a(P);
  }, [u, _, a]), It = k((P) => {
    P < 0 || P >= S.length || (pe.current = !0, u.setActivePage(P), C(P, g), setTimeout(() => {
      pe.current = !1;
    }, es), t && t(P));
  }, [u, C, t, S.length]), Dt = k(() => {
    const P = S.length + 1;
    U(P) && (ie.current = !0, setTimeout(() => {
      ie.current && Nt();
    }, 100)), n && n();
  }, [S.length, U, u, C, n]), Gn = k(() => {
    const P = window.getSelection();
    if (P && P.rangeCount > 0) {
      if (!h?.current) return;
      const de = `<page-break data-page-break="true" contenteditable="false" data-page-number="${h.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, de), setTimeout(() => {
        _();
        const he = w(g);
        u.setActivePage(he);
      }, 150);
    }
  }, [_, w, u, g]), Wn = k((P) => {
    if (!P) return;
    D(P) && setTimeout(() => {
      const ne = w(g);
      u.setActivePage(ne);
    }, 200);
  }, [D, w, u, g]), Ht = k((P) => {
    if (S.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    $(P) && (u.setActivePage(0), r && r(P));
  }, [S.length, $, u, r]), Ie = k(() => {
    u.zoomIn();
  }, [u]), De = k(() => {
    u.zoomOut();
  }, [u]), He = k(() => {
    u.resetZoom();
  }, [u]), Bt = k(() => {
    u.undo();
  }, [u]), jt = k(() => {
    u.redo();
  }, [u]);
  oe(() => {
    const P = (Y) => {
      if (Y.ctrlKey || Y.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Y.key) && Y.preventDefault();
        const ne = document.activeElement === h.current, de = document.activeElement === g.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ne || de || !he)
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
              Y.shiftKey || Bt();
              break;
            case "y":
              jt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", P), () => {
      window.removeEventListener("keydown", P);
    };
  }, [Ie, De, He, Bt, jt]);
  const qn = k(() => {
    !g.current || !h.current || pe.current || (R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      if (pe.current) {
        R.current = null;
        return;
      }
      const P = w(g);
      P !== M && P >= 0 && u.setActivePage(P), R.current = null;
    }, Qa));
  }, [w, M, u]), Zn = Ee(() => {
    if (!v) return 0;
    const Y = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Y ? Y.length : 0;
  }, [v]), Yn = S.length || 1, Vn = k((P) => {
    G(!0), N(P);
  }, []), zt = k(() => {
    G(!1), N(null);
  }, []), Kn = k((P, Y) => {
  }, []), Xn = k((P) => {
    re(!0), ue(P);
  }, []), Jn = k(() => {
    re(!1), ue(null);
  }, []), Qn = k((P, Y) => {
  }, []);
  return oe(() => () => {
    R.current && clearTimeout(R.current);
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "multi-page-editor", children: [
    p && /* @__PURE__ */ y.jsx(
      wt,
      {
        currentFormat: {
          ...O,
          imageSelected: F
        },
        onFormatText: A,
        onAddPageBreak: Gn,
        canUndo: L,
        canRedo: m
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ y.jsx(
        Pa,
        {
          editorView: null,
          isCollapsed: q,
          onToggle: () => ae((P) => !P),
          wordCount: Zn,
          pageCount: Yn
        }
      ),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: g,
          onScroll: qn,
          children: /* @__PURE__ */ y.jsx(
            Ua,
            {
              content: v,
              dimensions: Z,
              pageSize: x,
              pageMargins: T,
              pageBoundaries: S,
              editorRef: h,
              onInput: Fn,
              onContentChange: Qe,
              onClick: () => h.current?.focus(),
              onRemovePageBreak: Wn,
              zoomLevel: B
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsx(
        _t,
        {
          editorRef: h,
          onImageSelect: Vn,
          onImageDeselect: zt,
          onImageResize: Kn,
          resizeOptions: {
            ..._e,
            preserveAspectRatio: W,
            aspectRatio: W
          }
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ct,
        {
          editorRef: h,
          onTableSelect: Xn,
          onTableDeselect: Jn,
          onTableResize: Qn
        }
      ),
      F && Q && /* @__PURE__ */ y.jsx(
        St,
        {
          imageElement: Q,
          initialPreserveAspectRatio: W,
          onAlignChange: (P) => {
          },
          onAspectRatioToggle: (P) => {
            te(P);
          },
          onDelete: () => {
            if (Q) {
              const P = Q.getAttribute("data-key");
              P && ao(P).catch((Y) => {
                console.error("Failed to delete image from IndexedDB:", Y);
              });
            }
          },
          onClose: zt
        }
      ),
      l && /* @__PURE__ */ y.jsx("div", { className: "page-manager-sidebar", children: e ? Ke.cloneElement(e, {
        onNavigate: It,
        onAddPage: Dt,
        onDeletePage: Ht,
        onPageSizeChange: Mt,
        onPageMarginsChange: Lt,
        zoomLevel: B,
        canZoomIn: pt(B),
        canZoomOut: gt(B),
        onZoomIn: Ie,
        onZoomOut: De,
        onZoomReset: He
      }) : /* @__PURE__ */ y.jsx(
        Fa,
        {
          pageBoundaries: S,
          activePage: M,
          pageSize: x,
          pageMargins: T,
          zoomLevel: B,
          canZoomIn: pt(B),
          canZoomOut: gt(B),
          onNavigate: It,
          onAddPage: Dt,
          onDeletePage: Ht,
          onPageSizeChange: Mt,
          onPageMarginsChange: Lt,
          onZoomIn: Ie,
          onZoomOut: De,
          onZoomReset: He
        }
      ) })
    ] })
  ] });
});
Ot.displayName = "HtmlEditor";
Ot.propTypes = {
  pageManagerComponent: E.element,
  onNavigatePage: E.func,
  onAddPage: E.func,
  onDeletePage: E.func,
  onPageSizeChange: E.func,
  onPageMarginsChange: E.func,
  onChange: E.func,
  showSidebar: E.bool,
  showToolbar: E.bool,
  showPageManager: E.bool
};
Ot.defaultProps = {
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
class Un extends Ke.Component {
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
Un.propTypes = {
  children: E.node.isRequired,
  fallback: E.node,
  onError: E.func,
  onReset: E.func,
  showDetails: E.bool
};
Un.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Rr as COMMON_FONT_SIZES,
  Xe as DEFAULT_FONT_SIZE,
  _e as DEFAULT_IMAGE_RESIZE_OPTIONS,
  un as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  ss as DocumentProvider,
  wt as EditorToolbar,
  Un as ErrorBoundary,
  yn as FONT_SIZE_MAP,
  Ot as HtmlEditor,
  _t as ImageResizeHandlers,
  Ae as PAGE_SIZES,
  Fa as PageManager,
  Ua as PageView,
  H as RESIZE_HANDLERS,
  Pa as Sidebar,
  se as TABLE_RESIZE_HANDLERS,
  Ct as TableResizeHandlers,
  fs as applyImageDimensions,
  Va as applyTableDimensions,
  us as calculateResizeDimensions,
  Ya as calculateTableResizeDimensions,
  ps as clearImages,
  Jr as createResizeOverlay,
  Ka as createTableResizeOverlay,
  ao as deleteImage,
  gs as getAllImageKeys,
  as as getAvailablePageSizes,
  oo as getImage,
  ds as getImageDimensions,
  vt as getPageDimensions,
  is as getPixelValue,
  cs as getPointValue,
  Ne as getTableStructure,
  me as isResizableImage,
  ye as isResizableTable,
  ls as isValidFontSize,
  os as isValidPageSize,
  Ca as logger,
  Sr as pixelsToPoints,
  _r as pointsToPixels,
  it as removeResizeOverlay,
  Ge as removeTableResizeOverlay,
  ro as saveImage,
  yt as updateResizeOverlay,
  cn as updateTableResizeOverlay,
  Xr as useContinuousReflow,
  pn as useDocument,
  Re as useDocumentActions,
  gn as useDocumentState,
  Cr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
