import Ke, { createContext as tr, useContext as nr, useReducer as rr, useMemo as Ee, useState as de, useCallback as k, useRef as X, useEffect as oe, forwardRef as Tt, createElement as lt, memo as or, useLayoutEffect as ar, useImperativeHandle as sr } from "react";
import { v4 as bt } from "uuid";
import { createPortal as ir } from "react-dom";
function cr(e) {
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
function lr() {
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
var Oe = {};
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
function ur() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === Q ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case _:
          return "Fragment";
        case B:
          return "Profiler";
        case M:
          return "StrictMode";
        case g:
          return "Suspense";
        case w:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case x:
            return "Portal";
          case m:
            return f.displayName || "Context";
          case L:
            return (f._context.displayName || "Context") + ".Consumer";
          case h:
            var A = f.render;
            return f = f.displayName, f || (f = A.displayName || A.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case C:
            return A = f.displayName || null, A !== null ? A : e(f.type) || "Memo";
          case H:
            A = f._payload, f = f._init;
            try {
              return e(f(A));
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
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var O = A.error, S = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return O.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(f);
      }
    }
    function r(f) {
      if (f === _) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === H)
        return "<...>";
      try {
        var A = e(f);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = W.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (N.call(f, "key")) {
        var A = Object.getOwnPropertyDescriptor(f, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, A) {
      function O() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: O,
        configurable: !0
      });
    }
    function p() {
      var f = e(this.type);
      return re[f] || (re[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, A, O, S, z, $) {
      var I = O.ref;
      return f = {
        $$typeof: E,
        type: f,
        key: A,
        props: O,
        _owner: S
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(f, "ref", {
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
    function d(f, A, O, S, z, $) {
      var I = A.children;
      if (I !== void 0)
        if (S)
          if (U(I)) {
            for (S = 0; S < I.length; S++)
              c(I[S]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(I);
      if (N.call(A, "key")) {
        I = e(f);
        var F = Object.keys(A).filter(function(G) {
          return G !== "key";
        });
        S = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", b[I + S] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          I,
          F,
          I
        ), b[I + S] = !0);
      }
      if (I = null, O !== void 0 && (n(O), I = "" + O), o(A) && (n(A.key), I = "" + A.key), "key" in A) {
        O = {};
        for (var q in A)
          q !== "key" && (O[q] = A[q]);
      } else O = A;
      return I && i(
        O,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        I,
        O,
        s(),
        z,
        $
      );
    }
    function c(f) {
      u(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === H && (f._payload.status === "fulfilled" ? u(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === E;
    }
    var v = Ke, E = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), W = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, U = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var ne, re = {}, ce = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), le = te(r(a)), b = {};
    Oe.Fragment = _, Oe.jsx = function(f, A, O) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return d(
        f,
        A,
        O,
        !1,
        S ? Error("react-stack-top-frame") : ce,
        S ? te(r(f)) : le
      );
    }, Oe.jsxs = function(f, A, O) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return d(
        f,
        A,
        O,
        !0,
        S ? Error("react-stack-top-frame") : ce,
        S ? te(r(f)) : le
      );
    };
  })()), Oe;
}
var Ft;
function dr() {
  return Ft || (Ft = 1, process.env.NODE_ENV === "production" ? je.exports = lr() : je.exports = ur()), je.exports;
}
var y = dr();
const ut = 100, dt = 50, ft = 200, Wt = 5, pt = (e) => e < ft, gt = (e) => e > dt, fr = 96, ze = (e) => Math.round(e * fr), Ze = {
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
}, ge = "NORMAL", un = (e = ge) => {
  const t = Ze[e] || Ze[ge];
  return {
    top: ze(t.top),
    bottom: ze(t.bottom),
    left: ze(t.left),
    right: ze(t.right)
  };
}, pr = (e = ge) => {
  const t = un(e);
  return t.top + t.bottom;
}, gr = () => Object.keys(Ze), hr = (e) => {
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
}, dn = "A4", vt = (e) => {
  const t = Ae[e] || Ae[dn];
  return {
    width: t.width,
    height: t.height
  };
}, os = (e) => Object.keys(Ae).includes(e), as = () => Object.keys(Ae), Me = dn, ve = "<p><br></p>", mr = "continuous", Ce = (e, t = Me) => ({
  id: bt(),
  index: e,
  size: t,
  content: ve,
  images: [],
  isBreakPoint: !1
}), Ge = (e) => typeof e != "string" || e.trim() === "" ? ve : e, fn = (e, t = Me) => (e.length > 0 ? e : [Ce(0, t)]).map((r, s) => ({
  id: r.id || bt(),
  index: s,
  size: r.size || t,
  content: Ge(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), yr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: vt(e).height
}], $e = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), ht = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Me, r = fn(e.pages || [Ce(0, n)], n);
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
      const { initialContent: r = ve, pageSize: s = Me } = t.payload || {}, a = { ...Ce(0, s), content: Ge(r) };
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
        content: Ge(s)
      }, {
        ...e,
        pages: a,
        updatedAt: n
      };
    }
    case j.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = fn(r.pages || [], e.pageSize), a = Array.isArray(r.pageBreaks) ? r.pageBreaks : $e(s);
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
      s.splice(r, 0, Ce(r, e.pageSize));
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
      const r = Ge(t.payload);
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
`) || ve : e.continuousContent && e.continuousContent !== ve && (a = [{ ...Ce(0, e.pageSize), content: e.continuousContent }]), {
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
      const r = e.zoomLevel + Wt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case j.ZOOM_OUT: {
      if (!gt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Wt;
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
}, pn = tr(null), ss = ({ children: e, initialState: t = {} }) => {
  const [n, r] = rr(mt, ht(t)), s = Ee(() => ({
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
  return /* @__PURE__ */ y.jsx(pn.Provider, { value: a, children: e });
}, gn = () => {
  const e = nr(pn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, hn = () => {
  const { state: e } = gn();
  return e;
}, Re = () => {
  const { actions: e } = gn();
  return e;
};
var Ue = { exports: {} }, Fe = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function Er() {
  if (Gt) return V;
  Gt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function L(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case t:
          switch (h = h.type, h) {
            case p:
            case l:
            case r:
            case a:
            case s:
            case c:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case i:
                case d:
                case E:
                case v:
                case o:
                  return h;
                default:
                  return g;
              }
          }
        case n:
          return g;
      }
    }
  }
  function m(h) {
    return L(h) === l;
  }
  return V.AsyncMode = p, V.ConcurrentMode = l, V.ContextConsumer = i, V.ContextProvider = o, V.Element = t, V.ForwardRef = d, V.Fragment = r, V.Lazy = E, V.Memo = v, V.Portal = n, V.Profiler = a, V.StrictMode = s, V.Suspense = c, V.isAsyncMode = function(h) {
    return m(h) || L(h) === p;
  }, V.isConcurrentMode = m, V.isContextConsumer = function(h) {
    return L(h) === i;
  }, V.isContextProvider = function(h) {
    return L(h) === o;
  }, V.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, V.isForwardRef = function(h) {
    return L(h) === d;
  }, V.isFragment = function(h) {
    return L(h) === r;
  }, V.isLazy = function(h) {
    return L(h) === E;
  }, V.isMemo = function(h) {
    return L(h) === v;
  }, V.isPortal = function(h) {
    return L(h) === n;
  }, V.isProfiler = function(h) {
    return L(h) === a;
  }, V.isStrictMode = function(h) {
    return L(h) === s;
  }, V.isSuspense = function(h) {
    return L(h) === c;
  }, V.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === a || h === s || h === c || h === u || typeof h == "object" && h !== null && (h.$$typeof === E || h.$$typeof === v || h.$$typeof === o || h.$$typeof === i || h.$$typeof === d || h.$$typeof === _ || h.$$typeof === M || h.$$typeof === B || h.$$typeof === x);
  }, V.typeOf = L, V;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Tr() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function L(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === l || R === a || R === s || R === c || R === u || typeof R == "object" && R !== null && (R.$$typeof === E || R.$$typeof === v || R.$$typeof === o || R.$$typeof === i || R.$$typeof === d || R.$$typeof === _ || R.$$typeof === M || R.$$typeof === B || R.$$typeof === x);
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
                  case E:
                  case v:
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
    var h = p, g = l, w = i, C = o, H = t, J = d, Q = r, W = E, N = v, U = n, te = a, ne = s, re = c, ce = !1;
    function le(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(R) || m(R) === p;
    }
    function b(R) {
      return m(R) === l;
    }
    function f(R) {
      return m(R) === i;
    }
    function A(R) {
      return m(R) === o;
    }
    function O(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function S(R) {
      return m(R) === d;
    }
    function z(R) {
      return m(R) === r;
    }
    function $(R) {
      return m(R) === E;
    }
    function I(R) {
      return m(R) === v;
    }
    function F(R) {
      return m(R) === n;
    }
    function q(R) {
      return m(R) === a;
    }
    function G(R) {
      return m(R) === s;
    }
    function ae(R) {
      return m(R) === c;
    }
    K.AsyncMode = h, K.ConcurrentMode = g, K.ContextConsumer = w, K.ContextProvider = C, K.Element = H, K.ForwardRef = J, K.Fragment = Q, K.Lazy = W, K.Memo = N, K.Portal = U, K.Profiler = te, K.StrictMode = ne, K.Suspense = re, K.isAsyncMode = le, K.isConcurrentMode = b, K.isContextConsumer = f, K.isContextProvider = A, K.isElement = O, K.isForwardRef = S, K.isFragment = z, K.isLazy = $, K.isMemo = I, K.isPortal = F, K.isProfiler = q, K.isStrictMode = G, K.isSuspense = ae, K.isValidElementType = L, K.typeOf = m;
  })()), K;
}
var Zt;
function mn() {
  return Zt || (Zt = 1, process.env.NODE_ENV === "production" ? Fe.exports = Er() : Fe.exports = Tr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tt, Yt;
function br() {
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
function yn() {
  return Kt || (Kt = 1, rt = Function.call.bind(Object.prototype.hasOwnProperty)), rt;
}
var ot, Xt;
function vr() {
  if (Xt) return ot;
  Xt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ xt(), n = {}, r = /* @__PURE__ */ yn();
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
          } catch (E) {
            c = E;
          }
          if (c && !(c instanceof Error) && e(
            (p || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in n)) {
            n[c.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + i + " type: " + c.message + (v ?? "")
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
function xr() {
  if (Jt) return at;
  Jt = 1;
  var e = mn(), t = br(), n = /* @__PURE__ */ xt(), r = /* @__PURE__ */ yn(), s = /* @__PURE__ */ vr(), a = function() {
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
    var u = "<<anonymous>>", v = {
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
      elementType: h(),
      instanceOf: g,
      node: J(),
      objectOf: C,
      oneOf: w,
      oneOfType: H,
      shape: W,
      exact: N
    };
    function E(b, f) {
      return b === f ? b !== 0 || 1 / b === 1 / f : b !== b && f !== f;
    }
    function x(b, f) {
      this.message = b, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function _(b) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, A = 0;
      function O(z, $, I, F, q, G, ae) {
        if (F = F || u, G = G || I, ae !== n) {
          if (p) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = F + ":" + I;
            !f[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[ie] = !0, A++);
          }
        }
        return $[I] == null ? z ? $[I] === null ? new x("The " + q + " `" + G + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new x("The " + q + " `" + G + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : b($, I, F, q, G);
      }
      var S = O.bind(null, !1);
      return S.isRequired = O.bind(null, !0), S;
    }
    function M(b) {
      function f(A, O, S, z, $, I) {
        var F = A[O], q = ne(F);
        if (q !== b) {
          var G = re(F);
          return new x(
            "Invalid " + z + " `" + $ + "` of type " + ("`" + G + "` supplied to `" + S + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return _(f);
    }
    function B() {
      return _(o);
    }
    function L(b) {
      function f(A, O, S, z, $) {
        if (typeof b != "function")
          return new x("Property `" + $ + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var I = A[O];
        if (!Array.isArray(I)) {
          var F = ne(I);
          return new x("Invalid " + z + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected an array."));
        }
        for (var q = 0; q < I.length; q++) {
          var G = b(I, q, S, z, $ + "[" + q + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return _(f);
    }
    function m() {
      function b(f, A, O, S, z) {
        var $ = f[A];
        if (!i($)) {
          var I = ne($);
          return new x("Invalid " + S + " `" + z + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(b);
    }
    function h() {
      function b(f, A, O, S, z) {
        var $ = f[A];
        if (!e.isValidElementType($)) {
          var I = ne($);
          return new x("Invalid " + S + " `" + z + "` of type " + ("`" + I + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(b);
    }
    function g(b) {
      function f(A, O, S, z, $) {
        if (!(A[O] instanceof b)) {
          var I = b.name || u, F = le(A[O]);
          return new x("Invalid " + z + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return _(f);
    }
    function w(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function f(A, O, S, z, $) {
        for (var I = A[O], F = 0; F < b.length; F++)
          if (E(I, b[F]))
            return null;
        var q = JSON.stringify(b, function(ae, R) {
          var ie = re(R);
          return ie === "symbol" ? String(R) : R;
        });
        return new x("Invalid " + z + " `" + $ + "` of value `" + String(I) + "` " + ("supplied to `" + S + "`, expected one of " + q + "."));
      }
      return _(f);
    }
    function C(b) {
      function f(A, O, S, z, $) {
        if (typeof b != "function")
          return new x("Property `" + $ + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var I = A[O], F = ne(I);
        if (F !== "object")
          return new x("Invalid " + z + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected an object."));
        for (var q in I)
          if (r(I, q)) {
            var G = b(I, q, S, z, $ + "." + q, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return _(f);
    }
    function H(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var f = 0; f < b.length; f++) {
        var A = b[f];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(A) + " at index " + f + "."
          ), o;
      }
      function O(S, z, $, I, F) {
        for (var q = [], G = 0; G < b.length; G++) {
          var ae = b[G], R = ae(S, z, $, I, F, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && q.push(R.data.expectedType);
        }
        var ie = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new x("Invalid " + I + " `" + F + "` supplied to " + ("`" + $ + "`" + ie + "."));
      }
      return _(O);
    }
    function J() {
      function b(f, A, O, S, z) {
        return U(f[A]) ? null : new x("Invalid " + S + " `" + z + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return _(b);
    }
    function Q(b, f, A, O, S) {
      return new x(
        (b || "React class") + ": " + f + " type `" + A + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function W(b) {
      function f(A, O, S, z, $) {
        var I = A[O], F = ne(I);
        if (F !== "object")
          return new x("Invalid " + z + " `" + $ + "` of type `" + F + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var q in b) {
          var G = b[q];
          if (typeof G != "function")
            return Q(S, z, $, q, re(G));
          var ae = G(I, q, S, z, $ + "." + q, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return _(f);
    }
    function N(b) {
      function f(A, O, S, z, $) {
        var I = A[O], F = ne(I);
        if (F !== "object")
          return new x("Invalid " + z + " `" + $ + "` of type `" + F + "` " + ("supplied to `" + S + "`, expected `object`."));
        var q = t({}, A[O], b);
        for (var G in q) {
          var ae = b[G];
          if (r(b, G) && typeof ae != "function")
            return Q(S, z, $, G, re(ae));
          if (!ae)
            return new x(
              "Invalid " + z + " `" + $ + "` key `" + G + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(A[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var R = ae(I, G, S, z, $ + "." + G, n);
          if (R)
            return R;
        }
        return null;
      }
      return _(f);
    }
    function U(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(U);
          if (b === null || i(b))
            return !0;
          var f = c(b);
          if (f) {
            var A = f.call(b), O;
            if (f !== b.entries) {
              for (; !(O = A.next()).done; )
                if (!U(O.value))
                  return !1;
            } else
              for (; !(O = A.next()).done; ) {
                var S = O.value;
                if (S && !U(S[1]))
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
    function ne(b) {
      var f = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : te(f, b) ? "symbol" : f;
    }
    function re(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var f = ne(b);
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
    function le(b) {
      return !b.constructor || !b.constructor.name ? u : b.constructor.name;
    }
    return v.checkPropTypes = s, v.resetWarningCache = s.resetWarningCache, v.PropTypes = v, v;
  }, at;
}
var st, Qt;
function wr() {
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
function Ar() {
  if (en) return Ue.exports;
  if (en = 1, process.env.NODE_ENV !== "production") {
    var e = mn(), t = !0;
    Ue.exports = /* @__PURE__ */ xr()(e.isElement, t);
  } else
    Ue.exports = /* @__PURE__ */ wr()();
  return Ue.exports;
}
var Rr = /* @__PURE__ */ Ar();
const T = /* @__PURE__ */ cr(Rr), En = {
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
}, _r = [
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
], Xe = "16px", Sr = (e) => Math.round(e * 96 / 72), Pr = (e) => Math.round(e * 72 / 96 * 2) / 2, is = (e) => {
  const t = Object.values(En).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Sr(e)}px`;
}, cs = (e) => {
  const t = parseInt(e), n = Object.values(En).find((r) => r.px === t);
  return n ? n.pt : Pr(t);
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
  const [e, t] = de(tn), n = Re(), r = k((c, u, v = null) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const x = E.getRangeAt(0);
      if (!x.toString())
        return t((M) => ({ ...M, [c]: u })), !1;
      try {
        const M = document.createElement("span");
        M.style[c] = u;
        const B = x.extractContents();
        return M.appendChild(B), x.insertNode(M), x.selectNodeContents(M), E.removeAllRanges(), E.addRange(x), t((L) => ({ ...L, [c]: u })), !0;
      } catch {
        if (v) {
          const M = c === "fontSize" ? Or[u] || "3" : u;
          return document.execCommand(v, !1, M), t((B) => ({ ...B, [c]: u })), !0;
        }
        return !1;
      }
    } catch (E) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, E), !1;
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
      const v = u.getRangeAt(0), E = v.toString(), _ = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!_)
        return !1;
      if (!E) {
        const B = v.startContainer, L = B.nodeType === Node.TEXT_NODE ? B.parentElement : B, m = Ye(L) || Nr();
        return m && (m.style.textAlign = _, o(_)), !0;
      }
      const M = kr(v);
      if (M.length === 0) {
        const B = document.createElement("p");
        B.style.textAlign = _;
        const L = v.extractContents();
        B.appendChild(L), v.insertNode(B), v.selectNodeContents(B), u.removeAllRanges(), u.addRange(v);
      } else
        M.forEach((B) => {
          B.style.textAlign = _;
        });
      return o(_), !0;
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
          t((E) => ({ ...E, headingLevel: u }));
          break;
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${c}":`, v);
    }
  }, [a, s, i, n]), l = k(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0), v = u.toString();
      let E = Xe, x = "Arial", _ = "p", M = "left";
      if (v) {
        const L = u.startContainer, m = L.nodeType === Node.TEXT_NODE ? L.parentElement : L;
        if (m) {
          const h = window.getComputedStyle(m), g = h.fontSize, w = h.fontFamily;
          g && g.endsWith("px") && (E = g), w && w !== "serif" && (x = w.split(",")[0].replace(/['"]/g, "").trim());
          const C = Ye(m);
          if (C) {
            const H = C.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(H) && (_ = H);
            const Q = window.getComputedStyle(C).textAlign;
            ["left", "center", "right", "justify"].includes(Q) && (M = Q);
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
        fontFamily: x,
        fontSize: E,
        headingLevel: _
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
function kr(e) {
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
const Te = 'page-break, [data-page-break="true"]', Tn = (e) => Ae[e] || Ae.A4, Mr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Tn(n), s = e.querySelectorAll(Te), a = [];
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
}, bn = (e, t = 100, n = ge) => {
  const r = Tn(e), s = pr(n), a = r.height - s, o = t / 100;
  return a / o;
}, Lr = (e, t) => {
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
}, Ir = (e) => {
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
}, Dr = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Hr = (e, t, n, r, s, a, o) => {
  if (!e)
    return !1;
  try {
    const p = bn(n, r, s) * (t - 1), l = Array.from(e.children);
    let d = 0, c = null;
    for (let u = 0; u < l.length; u++) {
      const v = l[u];
      if (v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true")
        continue;
      const E = Ir(v);
      if (d + E > p) {
        c = v;
        break;
      }
      d += E;
    }
    if (c) {
      const u = document.createElement("page-break");
      if (u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), c.parentNode.insertBefore(u, c), a) {
        const v = e.innerHTML;
        a(v);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const u = document.createElement("page-break");
      u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", String(t)), e.appendChild(u);
      const v = document.createElement("p");
      if (v.innerHTML = "<br>", e.appendChild(v), a) {
        const E = e.innerHTML;
        a(E);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Br = (e, t, n, r, s, a, o) => {
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
      const E = p[0];
      if (!E)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let x = e.firstChild;
      for (; x && x !== E; )
        c.push(x), x = x.nextSibling;
      u = E;
    } else {
      const E = p[t - 1];
      if (!E)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const x = p[t];
      let _ = E.nextSibling;
      for (; _ && _ !== x; )
        c.push(_), _ = _.nextSibling;
      u = E;
    }
    if (l && l.rangeCount > 0) {
      const x = l.getRangeAt(0).startContainer;
      for (const _ of c)
        if (_.contains(x) || _ === x) {
          d = !0;
          break;
        }
    }
    if (u && u.parentNode && u.remove(), c.forEach((E) => {
      E.parentNode && E.remove();
    }), e.querySelectorAll(Te).forEach((E, x) => {
      E.setAttribute("data-page-number", String(x + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), r) {
      const E = e.innerHTML;
      r(E);
    }
    return s && setTimeout(() => {
      s(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (p) {
    return console.error("[removePageAndContent] Failed to remove page:", p), !1;
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
}, zr = (e, t, n, r, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), jr(t), n) {
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
}, $r = 200, Ur = 50, rn = 3, Fr = 20, vn = (e) => {
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
}, Wr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = vn(a);
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
    const p = bn(t, n, r);
    let l = nn(e), d = !1, c = 0;
    for (let u = 0; u < l.length && c < rn; u++) {
      const v = l[u], E = Wr(v, p);
      if (E && E.overflowIndex > 0) {
        let x = 0;
        for (let L = 0; L < v.length; L++) {
          const m = v[L];
          m && m.getBoundingClientRect && (x += vn(m));
        }
        if (x - p < Fr)
          continue;
        const M = u + 2;
        Dr(E.overflowElement, M) && (d = !0, c++, l = nn(e));
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
      }, Ur);
    }
    return d;
  } catch (p) {
    return console.warn("[checkAndReflow] Reflow failed:", p), !1;
  } finally {
    o.current = !1;
  }
}, qr = (e, t, n = $r) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Zr = 400, xn = (e, t) => {
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
}, Yr = (e, t, n, r) => {
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
        r ? r(n) : xn(t, n);
      }, Zr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
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
}, Xr = 300, Jr = (e, t, n = 100, r = "NARROW") => {
  const s = Re(), a = X(null), o = X(null), i = X(e), p = X(n), l = X(r), d = X(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    p.current = n;
  }, [n]), oe(() => {
    l.current = r;
  }, [r]), oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const c = k((g = {}) => t?.current ? Mr(t.current, g) : [], [t]), u = k((g = {}) => {
    const w = c(g);
    return s.updatePageBoundaries(w), w;
  }, [c, s]), v = k((g = {}) => {
    const w = typeof g.delay == "number" ? g.delay : Xr;
    Vr(u, a, g, w);
  }, [u]), E = k(() => {
    t?.current && Gr(
      t.current,
      i.current,
      p.current,
      l.current,
      s.updateContinuousContent,
      u,
      d,
      E
    );
  }, [t, s, u]), x = k((g) => {
    qr(E, o, g);
  }, [E]), _ = k((g) => !g?.current || !t?.current ? 0 : Lr(g.current, t.current), [t]), M = k((g) => {
    t?.current && xn(t.current, g);
  }, [t]), B = k((g, w) => {
    if (!w?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Yr(w.current, t.current, g, M);
  }, [t, M]), L = k(async (g) => t?.current ? Hr(
    t.current,
    g,
    i.current,
    p.current,
    l.current,
    s.updateContinuousContent,
    u
  ) : !1, [t, s, u]), m = k((g) => t?.current ? Br(
    t.current,
    g,
    c,
    s.updateContinuousContent,
    u,
    M,
    E
  ) : !1, [t, c, s, u, M, E]), h = k((g) => t?.current ? zr(
    g,
    t.current,
    s.updateContinuousContent,
    u,
    E
  ) : !1, [t, s, u, E]);
  return oe(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []), Ee(() => ({
    calculatePageBoundaries: c,
    checkAndUpdateBoundaries: v,
    updateBoundaries: u,
    getCurrentPage: _,
    scrollToPage: B,
    positionCursorAtPage: M,
    checkAndReflow: E,
    triggerAutoReflow: x,
    removePageAndContent: m,
    removePageBreak: h,
    insertPageBreakAtBoundary: L,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  }), [
    c,
    v,
    u,
    _,
    B,
    M,
    E,
    x,
    m,
    h,
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
}, D = {
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
    case D.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case D.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case D.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case D.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case D.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case D.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case D.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case D.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      D.TOP_LEFT,
      D.TOP_RIGHT,
      D.BOTTOM_LEFT,
      D.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [D.TOP, D.BOTTOM].includes(e) ? d = c * u : [D.LEFT, D.RIGHT].includes(e) && (c = d / u);
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
function Qr(e, t = _e) {
  if (!me(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(D).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = eo(a), o.style.pointerEvents = "all", wn(o, a, r.width, r.height), n.appendChild(o);
  }), n;
}
function eo(e) {
  switch (e) {
    case D.TOP_LEFT:
    case D.BOTTOM_RIGHT:
      return "nwse-resize";
    case D.TOP_RIGHT:
    case D.BOTTOM_LEFT:
      return "nesw-resize";
    case D.TOP:
    case D.BOTTOM:
      return "ns-resize";
    case D.LEFT:
    case D.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function wn(e, t, n, r) {
  switch (t) {
    case D.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case D.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case D.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case D.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case D.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case D.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case D.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case D.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function yt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    wn(s, a, n.width, n.height);
  });
}
function it(e) {
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
      const s = r.target.result;
      s.objectStoreNames.contains(fe) || s.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
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
    const s = new FileReader();
    s.onload = async (a) => {
      const o = a.target.result, p = o.split(",")[1].length * 3 / 4;
      if (p > 5 * 1024 * 1024) {
        n(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Le(), d = `editor-image-${ro()}`, u = l.transaction([fe], "readwrite").objectStore(fe), v = {
          key: d,
          dataUrl: o,
          size: p,
          type: e.type,
          timestamp: Date.now()
        }, E = u.add(v);
        E.onsuccess = () => {
          l.close(), t(d);
        }, E.onerror = () => {
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
async function ao(e) {
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
async function so(e) {
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
const An = [
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
], io = [
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
function Rn(e) {
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
  return t.length === 0 ? !1 : t.every((n) => An.includes(n.tagName));
}
function po(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const s = r;
      An.includes(s.tagName) ? t.push(s.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function ke(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${lo(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), p = Rn(a);
      if (o === "DIV") {
        const l = ke(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        fo(a) ? t.push(po(a)) : t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = uo(a);
        t.push(`<${i}${p}>${l}</${i}>`);
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
        t.push(`<blockquote${p}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (io.includes(o))
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
        t.push(`<${i}${p}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function go(e) {
  const t = e.tagName.toLowerCase(), n = Rn(e), r = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      r.push(s.outerHTML);
    else {
      const a = ke(s);
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
), on = (e) => {
  const t = yo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, _n = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Eo = (e) => {
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
const bo = Tt(
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
      ...To,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: _n("lucide", s),
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
const Y = (e, t) => {
  const n = Tt(
    ({ className: r, ...s }, a) => lt(bo, {
      ref: a,
      iconNode: t,
      className: _n(
        `lucide-${mo(on(e))}`,
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
const vo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], xo = Y("bold", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ao = Y("chevron-left", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _o = Y("chevron-right", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Po = Y("file-check", So);
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
], Ve = Y("file-text", Oo);
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
], ko = Y("hash", Co);
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
], Mo = Y("heading-1", No);
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
], Io = Y("heading-2", Lo);
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
], Ho = Y("heading-3", Do);
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
], jo = Y("image-upscale", Bo);
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
], $o = Y("image", zo);
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
], Fo = Y("italic", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Go = Y("link", Wo);
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
], Zo = Y("list-indent-decrease", qo);
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
], Vo = Y("list-indent-increase", Yo);
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
], Xo = Y("list-ordered", Ko);
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
], Sn = Y("list", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ea = Y("plus", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], na = Y("redo", ta);
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
], oa = Y("scaling", ra);
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
], sa = Y("settings", aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], ca = Y("strikethrough", ia);
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
], ua = Y("table", la);
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
], Pn = Y("text-align-center", da);
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
], On = Y("text-align-end", fa);
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
], ga = Y("text-align-justify", pa);
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
], Cn = Y("text-align-start", ha);
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
], ya = Y("trash-2", ma);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ta = Y("underline", Ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], va = Y("undo", ba);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], wa = Y("x", xa);
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
], Ra = Y("zoom-in", Aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Sa = Y("zoom-out", _a), an = (e, t, n = "") => {
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
}, Pa = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, Oa = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const s = hn(), { pages: a, activePage: o, continuousContent: i } = s, { wordCount: p, outline: l } = Ee(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: an(i, 1, "continuous-")
      };
    let c = 0;
    const u = [];
    return a.forEach((v, E) => {
      c += Pa(v.content), u.push(...an(v.content, E + 1, `page-${E}-`));
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
              children: e ? /* @__PURE__ */ y.jsx(_o, { size: 16 }) : /* @__PURE__ */ y.jsx(Ao, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Po, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(ko, { size: 14 }),
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
              /* @__PURE__ */ y.jsx(Sn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ y.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((c) => {
              const u = c.level === 1 ? Mo : c.level === 2 ? Io : Ho;
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
const sn = new Ca("Editor"), kn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Nn = 32;
function Mn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Nn}px`, e.dataset.indentLevel = String(r));
}
function ka(e, t) {
  Mn(e, t);
}
function Na(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && kn.has(t.tagName.toUpperCase()))
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
  }), n.size === 0 && r.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let l = i.parentElement;
      for (; l && l !== r; ) {
        if (l.tagName && kn.has(l.tagName.toUpperCase())) {
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
function La(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Nn}px`, e.dataset.indentLevel = String(n));
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
  let n = Ma();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const o = Na(r.startContainer);
    if (!o) return !1;
    n = [o];
  }
  const s = n[0], a = n[n.length - 1];
  n.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      ka(o, e);
      return;
    }
    e ? La(o) : Mn(o, !1);
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
      let v = null, E = u.nextNode();
      for (; E; )
        v = E, E = u.nextNode();
      return v;
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
function Ia(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && Et(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
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
], Ba = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', wt = ({
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
      const c = await oo(l), u = await ao(c);
      if (u) {
        const E = `<img src="${u}" data-key="${c}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, E), sn.info("Image inserted", { key: c });
      }
      const v = document.getElementById("image-upload");
      v && (v.value = "");
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
    i(() => t("undo"), va, "Undo", !r),
    i(() => t("redo"), na, "Redo", !s),
    p(),
    o("bold", "bold", xo, "Bold"),
    o("italic", "italic", Fo, "Italic"),
    o("underline", "underline", Ta, "Underline"),
    o("strikethrough", "strikethrough", ca, "Strikethrough"),
    p(),
    o("justifyLeft", "alignLeft", Cn, "Align Left"),
    o("justifyCenter", "alignCenter", Pn, "Align Center"),
    o("justifyRight", "alignRight", On, "Align Right"),
    o("justifyFull", "alignJustify", ga, "Justify"),
    p(),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Da.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: _r.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Ha.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    p(),
    i(() => t("insertUnorderedList"), Sn, "Bullet List"),
    i(() => t("insertOrderedList"), Xo, "Numbered List"),
    p(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          Et(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ y.jsx(Vo, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          Et(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ y.jsx(Zo, { size: 16 })
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
    i(() => t("insertHTML", Ba), ua, "Insert Table"),
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
        children: /* @__PURE__ */ y.jsx($o, { size: 16 })
      }
    )
  ] });
};
wt.propTypes = {
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
wt.defaultProps = {
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
  const c = Ee(() => un(d), [d]), u = l / 100, v = k((m, h) => {
    if (!m) return !1;
    const g = m.getBoundingClientRect(), w = h - g.top;
    return w < c.top || w > g.height - c.bottom;
  }, [c.top, c.bottom]), E = k((m, h) => {
    h.preventDefault();
    const g = m.getBoundingClientRect(), w = h.clientX - g.left, C = h.clientY - g.top, H = g.width - 40, J = -12, Q = g.width - 20;
    w >= H && w <= Q && C >= J && C <= 8 && p && p(m);
  }, [p]), x = k((m) => {
    m.preventDefault();
    const h = t.current.getBoundingClientRect();
    if (m.clientY - h.top < c.top) {
      const w = t.current.firstElementChild;
      if (w && w.tagName !== "PAGE-BREAK") {
        const C = document.createRange(), H = window.getSelection();
        C.setStart(w, 0), C.collapse(!0), H.removeAllRanges(), H.addRange(C);
      }
    } else {
      const w = t.current.lastElementChild;
      if (w && w.tagName !== "PAGE-BREAK") {
        const C = document.createRange(), H = window.getSelection();
        C.selectNodeContents(w), C.collapse(!1), H.removeAllRanges(), H.addRange(C);
      }
    }
  }, [t, c.top]), _ = k((m) => {
    const h = window.getSelection();
    if (!h || h.rangeCount === 0) return;
    const g = h.getRangeAt(0), { startContainer: w, endContainer: C } = g;
    if ((be(w) || be(C)) && (m.key.length === 1 || m.key === "Enter" || m.key === " "))
      return m.preventDefault(), !1;
    if (Ia(m))
      return r && r(), !1;
    if ((m.key === "Backspace" || m.key === "Delete") && (be(w) || be(C)))
      return m.preventDefault(), !1;
    s && s(m);
  }, [s, r]), M = k((m) => {
    if (!t.current) return;
    const h = m.target;
    if (be(h)) {
      E(h, m);
      return;
    }
    if (v(t.current, m.clientY)) {
      x(m);
      return;
    }
    a && a(m);
  }, [t, a, E, x, v]), B = k((m) => {
    const h = window.getSelection();
    if (!h || h.rangeCount === 0) return;
    const g = h.getRangeAt(0), { startContainer: w } = g;
    if (be(w))
      return m.preventDefault(), !1;
  }, []), L = k((m) => {
    const h = za(m);
    i && i(m, h);
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
          onKeyDown: _,
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
const Fa = or(At), Rt = ({
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
  onZoomOut: v,
  onZoomReset: E
} = {}) => {
  const x = Math.max(e?.length || 0, 1), _ = (h) => {
    i && i(h);
  }, M = () => {
    p && p();
  }, B = (h) => {
    if (x <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(h);
  }, L = (h) => {
    d && d(h);
  }, m = (h) => {
    c && c(h);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ y.jsx(sa, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (h) => L(h.target.value),
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
              onChange: (h) => m(h.target.value),
              children: gr().map((h) => /* @__PURE__ */ y.jsx("option", { value: h, children: hr(h) }, h))
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
          onClick: v,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ y.jsx(Sa, { size: 12 })
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
          children: /* @__PURE__ */ y.jsx(Ra, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsx("div", { className: "page-list", children: e.map((h, g) => /* @__PURE__ */ y.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${g === t ? "active" : ""}`,
          onClick: () => _(g),
          "aria-label": `Go to page ${g + 1}`,
          "aria-current": g === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ y.jsx(Ve, { size: 14 }),
            /* @__PURE__ */ y.jsxs("span", { children: [
              "Page ",
              g + 1
            ] })
          ]
        }
      ),
      x > 1 && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (w) => {
            w.stopPropagation(), B(g);
          },
          "aria-label": `Delete page ${g + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ y.jsx(wa, { size: 14 })
        }
      )
    ] }, h.id || `page-${g}`)) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: M,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ y.jsx(ea, { size: 16 }),
          /* @__PURE__ */ y.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Rt.propTypes = {
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
const Wa = Ke.memo(Rt);
function Ga(e) {
  switch (e) {
    case D.TOP_LEFT:
    case D.BOTTOM_RIGHT:
      return "nwse-resize";
    case D.TOP_RIGHT:
    case D.BOTTOM_LEFT:
      return "nesw-resize";
    case D.TOP:
    case D.BOTTOM:
      return "ns-resize";
    case D.LEFT:
    case D.RIGHT:
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
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = _e
}) {
  const p = r - t, l = s - n;
  let d = a, c = o;
  switch (e) {
    case D.TOP_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o - l);
      break;
    case D.TOP_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o - l);
      break;
    case D.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - p), c = Math.max(i.minHeight, o + l);
      break;
    case D.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + p), c = Math.max(i.minHeight, o + l);
      break;
    case D.TOP:
      c = Math.max(i.minHeight, o - l);
      break;
    case D.BOTTOM:
      c = Math.max(i.minHeight, o + l);
      break;
    case D.LEFT:
      d = Math.max(i.minWidth, a - p);
      break;
    case D.RIGHT:
      d = Math.max(i.minWidth, a + p);
      break;
    default:
      return { width: d, height: c };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const u = a / o;
    [
      D.TOP_LEFT,
      D.TOP_RIGHT,
      D.BOTTOM_LEFT,
      D.BOTTOM_RIGHT
    ].includes(e) ? d / u > c ? c = Math.max(i.minHeight, d / u) : d = Math.max(i.minWidth, c * u) : [D.TOP, D.BOTTOM].includes(e) ? d = c * u : [D.LEFT, D.RIGHT].includes(e) && (c = d / u);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (c = d / (a / o))), i.maxHeight && c > i.maxHeight && (c = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = c * (a / o))), d = Math.max(i.minWidth, d), c = Math.max(i.minHeight, c), {
    width: Math.round(d),
    height: Math.round(c)
  };
}
function Ln(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Za(e, t, n) {
  Ln(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function Ya(e, t, n, r) {
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
    const v = u();
    return Za(t, n, v), !0;
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
  const a = X(null), o = X(null), i = X(null), p = X(null), l = X(s), d = X(!1), c = Re();
  oe(() => {
    l.current = s;
  }, [s]);
  const u = k((m) => {
    if (!me(m)) return;
    a.current && (it(a.current), a.current = null), m.classList.add("selected");
    const h = Qr(m, l.current);
    h && (a.current = h, o.current = m, document.body.appendChild(h), h.querySelectorAll(".resize-handler").forEach((w) => {
      w.addEventListener("mousedown", E);
    }), n && n(m));
  }, [n]), v = k(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (it(a.current), a.current = null), i.current = null, p.current = null, d.current = !1, r && r();
  }, [r]), E = k((m) => {
    if (m.preventDefault(), m.stopPropagation(), !o.current) return;
    const h = m.currentTarget.dataset.handler, g = o.current.getBoundingClientRect(), w = window.pageYOffset || document.documentElement.scrollTop, C = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: m.clientX,
      y: m.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: m.clientX - g.left - C,
      offsetY: m.clientY - g.top - w
    }, p.current = h, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ga(h), document.addEventListener("mousemove", x), document.addEventListener("mouseup", _);
  }, []), x = k((m) => {
    if (!d.current || !o.current || !i.current || !p.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: h, y: g, width: w, height: C } = i.current, H = p.current, J = m.clientX, Q = m.clientY, W = qa({
      handler: H,
      startX: h,
      startY: g,
      currentX: J,
      currentY: Q,
      startWidth: w,
      startHeight: C,
      options: l.current
    });
    Ln(o.current, W), a.current && yt(a.current, o.current);
  }, []), _ = k((m) => {
    if (d.current) {
      if (m.preventDefault(), m.stopPropagation(), o.current && i.current) {
        const h = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, g = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (h.width !== g.width || h.height !== g.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: g } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: h } }
        );
      }
      if (i.current = null, p.current = null, d.current = !1, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", _), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const h = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(h), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, c]), M = k((m) => {
    a.current && !a.current.contains(m.target) && v();
    const h = m.target;
    if (me(h)) {
      if (h === o.current)
        return;
      u(h);
    }
  }, [u, v]), B = k((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && o.current && !d.current) {
      m.preventDefault();
      const h = o.current;
      if (h.parentNode) {
        h.parentNode.removeChild(h), v();
        const g = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(g);
      }
    }
    m.key === "Escape" && o.current && v(), o.current && !d.current && Ya(m, e, o.current, l.current);
  }, [e, v]), L = k(() => {
    a.current && o.current && yt(a.current, o.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const h = e.current.closest(".editor-viewport");
    return h && (h.addEventListener("scroll", L), window.addEventListener("scroll", L)), () => {
      h && h.removeEventListener("scroll", L), window.removeEventListener("scroll", L);
    };
  }, [e, L]), oe(() => {
    if (!e.current) return;
    const m = e.current;
    return m.addEventListener("click", M), m.addEventListener("keydown", B), window.addEventListener("resize", L), () => {
      m.removeEventListener("click", M), m.removeEventListener("keydown", B), window.removeEventListener("resize", L), d.current && (document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", _), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && it(a.current);
    };
  }, [e, M, B, L, x, _]), oe(() => {
    if (!e.current) return;
    const m = new MutationObserver((h) => {
      h.forEach((g) => {
        g.type === "childList" && (g.removedNodes.forEach((w) => {
          w.nodeType === Node.ELEMENT_NODE && me(w) && w === o.current && v();
        }), g.addedNodes.forEach((w) => {
          if (w.nodeType !== Node.ELEMENT_NODE) return;
          if (me(w)) {
            setTimeout(() => u(w), 50);
            return;
          }
          const C = w.querySelectorAll?.("img") || [];
          C.length > 0 && setTimeout(() => u(C[0]), 50);
        }));
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, v, u]), null;
};
_t.propTypes = {
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
  const [o, i] = de({ top: 0, left: 0 }), [p, l] = de(!1), [d, c] = de("top"), [u, v] = de(a), E = X(null), x = X(null), _ = Re(), M = (N) => {
    if (!N)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (te) => setTimeout(te, 16))(() => {
      const te = document.querySelector(".image-resize-overlay");
      te && yt(te, N);
    });
  }, B = (N) => {
    if (!N) return null;
    const U = window.getComputedStyle(N);
    return {
      float: U.float || "none",
      margin: N.style.margin || "",
      display: U.display || "inline",
      width: N.style.width || N.width || "",
      height: N.style.height || N.height || "",
      aspectRatio: u
    };
  }, L = k(() => {
    if (!e) return "left";
    const N = window.getComputedStyle(e);
    return N.float === "right" ? "right" : N.float === "left" ? "left" : N.display === "block" && N.margin.includes("auto") ? "center" : "left";
  }, [e]), [m, h] = de("left");
  oe(() => {
    e && h(L());
  }, [e, L]);
  const g = k(() => {
    if (!e || !E.current) return;
    const N = e.getBoundingClientRect(), U = E.current.getBoundingClientRect(), te = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, ne = N.bottom >= 0 && N.top <= te.height && N.right >= 0 && N.left <= te.width;
    let re = "top", ce = 0, le = 0;
    if (ne) {
      const S = N.top - U.height - 10, z = te.height - N.bottom - U.height - 10;
      z > S && z > 0 ? (re = "bottom", ce = N.bottom + 10) : (re = "top", ce = N.top - U.height - 10);
    } else
      re = "top", ce = 10;
    le = N.left + N.width / 2 - U.width / 2;
    const b = window.innerWidth, f = window.innerHeight;
    let A = Math.max(10, Math.min(le, b - U.width - 10)), O = Math.max(10, Math.min(ce, f - U.height - 10));
    i({ top: O, left: A }), c(re), l(!0);
  }, [e]);
  ar(() => {
    g();
    const N = () => {
      g();
    }, U = x.current;
    return U && U.addEventListener("scroll", N), window.addEventListener("scroll", N), window.addEventListener("resize", N), () => {
      U && U.removeEventListener("scroll", N), window.removeEventListener("scroll", N), window.removeEventListener("resize", N), l(!1);
    };
  }, [e, g]), oe(() => {
    const N = (U) => {
      E.current && !E.current.contains(U.target) && U.target !== e && s();
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, [e, s]);
  const w = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, C = (N) => {
    if (e && w[N]) {
      const U = B(e), te = m, ne = w[N];
      e.style.float = ne.float, e.style.margin = ne.margin, e.style.display = ne.display, h(N), M(e);
      const re = B(e);
      _.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: N, state: re } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: te, state: U } }
      ), t && t(N);
    }
  }, H = () => {
    if (e && e.parentNode) {
      const N = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      _.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: N } }
      ), e.parentNode.removeChild(e), r && r(), s();
    }
  }, J = () => {
    const N = u, U = !u;
    v(U), _.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: U } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: N } }
    ), n && n(U);
  }, Q = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, W = (N) => ({
    ...Q,
    background: N ? "#007bff" : "transparent",
    color: N ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : ir(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: E,
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
              onClick: J,
              title: `Toggle aspect ratio preservation (currently ${u ? "ON" : "OFF"})`,
              children: u ? /* @__PURE__ */ y.jsx(oa, { size: 14 }) : /* @__PURE__ */ y.jsx(jo, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "left" ? "active" : ""}`,
              onClick: () => C("left"),
              title: "Align Left",
              style: W(m === "left"),
              children: /* @__PURE__ */ y.jsx(Cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "center" ? "active" : ""}`,
              onClick: () => C("center"),
              title: "Align Center",
              style: W(m === "center"),
              children: /* @__PURE__ */ y.jsx(Pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "right" ? "active" : ""}`,
              onClick: () => C("right"),
              title: "Align Right",
              style: W(m === "right"),
              children: /* @__PURE__ */ y.jsx(On, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: H,
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
              children: /* @__PURE__ */ y.jsx(ya, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
St.propTypes = {
  imageElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onAspectRatioToggle: T.func,
  onDelete: T.func,
  onClose: T.func.isRequired,
  initialPreserveAspectRatio: T.bool
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
function Va({
  type: e,
  index: t,
  delta: n,
  deltaX: r,
  deltaY: s,
  currentStructure: a,
  options: o = Je
}) {
  const i = {
    columnWidths: [...a.columnWidths],
    rowHeights: [...a.rowHeights],
    tableWidth: a.width,
    tableHeight: a.height
  };
  switch (e) {
    case se.COLUMN:
      if (t >= 0 && t < i.columnWidths.length) {
        const d = Math.max(
          o.minColumnWidth,
          Math.min(o.maxColumnWidth, i.columnWidths[t] + n)
        );
        i.columnWidths[t] = d, i.tableWidth = a.width;
      }
      break;
    case se.ROW:
      if (t >= 0 && t < i.rowHeights.length) {
        const d = Math.max(
          o.minRowHeight,
          Math.min(o.maxRowHeight, i.rowHeights[t] + n)
        );
        i.rowHeights[t] = d, i.tableHeight = a.height;
      }
      break;
    case se.TABLE_BOTTOM:
      const p = a.rows - 1;
      if (p >= 0 && p < i.rowHeights.length) {
        const d = Math.max(
          o.minRowHeight,
          Math.min(o.maxRowHeight, i.rowHeights[p] + n)
        );
        i.rowHeights[p] = d;
      }
      break;
    case se.TABLE_RIGHT:
      const l = a.columns - 1;
      if (l >= 0 && l < i.columnWidths.length) {
        const d = Math.max(
          o.minColumnWidth,
          Math.min(o.maxColumnWidth, i.columnWidths[l] + n)
        );
        i.columnWidths[l] = d;
      }
      break;
  }
  return i;
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
function Ka(e, t, n) {
  if (!ye(e)) return;
  Pt(e);
  const { columnWidths: r, rowHeights: s, tableWidth: a, tableHeight: o } = t;
  if (a !== void 0)
    e.style.width = `${a}px`;
  else if (r && r.length > 0) {
    const i = r.reduce((p, l) => p + l, 0);
    e.style.width = `${i}px`;
  }
  if (o !== void 0)
    e.style.height = `${o}px`;
  else if (s && s.length > 0) {
    const i = s.reduce((p, l) => p + l, 0);
    e.style.height = `${i}px`;
  }
  if (r && r.length > 0) {
    e.style.tableLayout = "fixed";
    const i = e.querySelector("colgroup");
    i && i.querySelectorAll("col").forEach((d, c) => {
      c < r.length && (d.style.width = `${r[c]}px`);
    });
    const p = r.reduce((l, d) => l + d, 0);
    e.style.width = `${p}px`;
  }
  if (s && s.length > 0) {
    Array.from(e.rows).forEach((l, d) => {
      d < s.length && (l.style.height = `${s[d]}px`);
    });
    const p = s.reduce((l, d) => l + d, 0);
    e.style.height = `${p}px`;
  }
  e.offsetHeight;
}
function cn(e, t = Je) {
  if (!ye(e)) return null;
  Pt(e);
  const n = Ne(e);
  if (!n) return null;
  const r = document.createElement("div");
  r.className = "table-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const s = e.getBoundingClientRect();
  r.style.top = `${s.top}px`, r.style.left = `${s.left}px`, r.style.width = `${s.width}px`, r.style.height = `${s.height}px`;
  for (let i = 0; i < n.columns - 1; i++) {
    const p = In(i, n, s, e);
    r.appendChild(p);
  }
  for (let i = 0; i < n.rows - 1; i++) {
    const p = Dn(i, n, s, e);
    r.appendChild(p);
  }
  const a = Hn(n, s);
  r.appendChild(a);
  const o = Bn(n, s);
  return r.appendChild(o), r;
}
function In(e, t, n, r) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-column-resize-handler", s.dataset.type = se.COLUMN, s.dataset.index = e, s.style.position = "absolute", s.style.width = "4px", s.style.height = `${n.height}px`, s.style.cursor = "col-resize", s.style.pointerEvents = "all", jn(s, e, t, n, r), s;
}
function Dn(e, t, n, r) {
  const s = document.createElement("div");
  return s.className = "table-resize-handler table-row-resize-handler", s.dataset.type = se.ROW, s.dataset.index = e, s.style.position = "absolute", s.style.width = `${n.width}px`, s.style.height = "4px", s.style.cursor = "row-resize", s.style.pointerEvents = "all", zn(s, e, t, n, r), s;
}
function Hn(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-bottom-resize-handler", n.dataset.type = se.TABLE_BOTTOM, n.style.position = "absolute", n.style.width = `${t.width}px`, n.style.height = "4px", n.style.cursor = "ns-resize", n.style.pointerEvents = "all", $n(n, e, t), n;
}
function Bn(e, t) {
  const n = document.createElement("div");
  return n.className = "table-resize-handler table-right-resize-handler", n.dataset.type = se.TABLE_RIGHT, n.style.position = "absolute", n.style.width = "4px", n.style.height = `${t.height}px`, n.style.cursor = "ew-resize", n.style.pointerEvents = "all", Un(n, e, t), n;
}
function ln(e, t) {
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
      const u = In(c, n, r, t);
      e.appendChild(u);
    }
    for (let c = 0; c < n.rows - 1; c++) {
      const u = Dn(c, n, r, t);
      e.appendChild(u);
    }
    const l = Hn(n, r);
    e.appendChild(l);
    const d = Bn(n, r);
    e.appendChild(d);
  } else
    s.forEach((l, d) => {
      jn(l, d, n, r, t);
    }), a.forEach((l, d) => {
      zn(l, d, n, r, t);
    }), o && $n(o, n, r), i && Un(i, n, r);
}
function We(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function jn(e, t, n, r, s) {
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
function zn(e, t, n, r, s) {
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
function $n(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Un(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
const Ot = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: s = Je
}) => {
  const a = X(null), o = X(null), i = X(null), p = X(null), l = X(null), d = X(s), c = X(!1), u = Re();
  oe(() => {
    d.current = s;
  }, [s]);
  const v = k((g) => {
    if (!ye(g)) return;
    a.current && (We(a.current), a.current = null), g.classList.add("selected");
    const w = cn(g, d.current);
    w && (a.current = w, o.current = g, document.body.appendChild(w), w.querySelectorAll(".table-resize-handler").forEach((H) => {
      H.addEventListener("mousedown", x);
    }), n && n(g));
  }, [n]), E = k(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (We(a.current), a.current = null), i.current = null, p.current = null, l.current = null, c.current = !1, r && r();
  }, [r]), x = k((g) => {
    if (g.preventDefault(), g.stopPropagation(), !o.current) return;
    const w = g.currentTarget, C = w.dataset.type, H = parseInt(w.dataset.index, 10), J = o.current.getBoundingClientRect(), Q = window.pageYOffset || document.documentElement.scrollTop, W = window.pageXOffset || document.documentElement.scrollLeft, N = Ne(o.current);
    i.current = {
      x: g.clientX,
      y: g.clientY,
      structure: { ...N },
      offsetX: g.clientX - J.left - W,
      offsetY: g.clientY - J.top - Q
    }, p.current = C, l.current = H, c.current = !0, document.body.classList.add("table-resize-in-progress"), document.body.style.cursor = h(C), document.addEventListener("mousemove", _), document.addEventListener("mouseup", M);
  }, []), _ = k((g) => {
    if (!c.current || !o.current || !i.current || !p.current) return;
    g.preventDefault(), g.stopPropagation();
    const { x: w, y: C, structure: H } = i.current, J = p.current, Q = l.current, W = g.clientX, N = g.clientY;
    let U = 0, te = 0, ne = 0;
    switch (J) {
      case se.COLUMN:
        U = W - w;
        break;
      case se.ROW:
        U = N - C;
        break;
      case se.TABLE_BOTTOM:
        U = N - C;
        break;
      case se.TABLE_RIGHT:
        U = W - w;
        break;
    }
    const re = Va({
      type: J,
      index: Q,
      delta: U,
      deltaX: te,
      deltaY: ne,
      currentStructure: H,
      options: d.current
    });
    Ka(o.current, re), a.current && ln(a.current, o.current);
  }, []), M = k((g) => {
    if (c.current) {
      if (g.preventDefault(), g.stopPropagation(), o.current && i.current) {
        const w = {
          structure: i.current.structure
        }, C = {
          structure: Ne(o.current)
        };
        (w.structure.width !== C.structure.width || w.structure.height !== C.structure.height || JSON.stringify(w.structure.columnWidths) !== JSON.stringify(C.structure.columnWidths) || JSON.stringify(w.structure.rowHeights) !== JSON.stringify(C.structure.rowHeights)) && u.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: o.current, state: C } },
          { type: "TABLE_RESIZE", payload: { element: o.current, state: w } }
        );
      }
      if (i.current = null, p.current = null, l.current = null, c.current = !1, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", M), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", o.current) {
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(w), t && t(o.current, Ne(o.current));
      }
    }
  }, [t, u]), B = k((g) => {
    a.current && !a.current.contains(g.target) && E();
    const C = g.target.closest("table");
    if (C && ye(C)) {
      if (C === o.current)
        return;
      v(C);
    }
  }, [v, E]), L = k((g) => {
    if ((g.key === "Delete" || g.key === "Backspace") && o.current && !c.current) {
      g.preventDefault();
      const w = o.current;
      if (w.parentNode) {
        w.parentNode.removeChild(w), E();
        const C = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(C);
      }
    }
    g.key === "Escape" && o.current && E();
  }, [e, E]), m = k(() => {
    a.current && o.current && ln(a.current, o.current);
  }, []);
  function h(g) {
    switch (g) {
      case se.COLUMN:
        return "col-resize";
      case se.ROW:
        return "row-resize";
      case se.TABLE_BOTTOM:
        return "ns-resize";
      case se.TABLE_RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  return oe(() => {
    if (!e.current) return;
    const w = e.current.closest(".editor-viewport");
    return w && (w.addEventListener("scroll", m), window.addEventListener("scroll", m)), () => {
      w && w.removeEventListener("scroll", m), window.removeEventListener("scroll", m);
    };
  }, [e, m]), oe(() => {
    if (!e.current) return;
    const g = e.current;
    return g.addEventListener("click", B), g.addEventListener("keydown", L), window.addEventListener("resize", m), () => {
      g.removeEventListener("click", B), g.removeEventListener("keydown", L), window.removeEventListener("resize", m), c.current && (document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", M), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), a.current && We(a.current);
    };
  }, [e, B, L, m, _, M]), oe(() => {
    if (!e.current) return;
    const g = new MutationObserver((w) => {
      w.forEach((C) => {
        C.type === "childList" && (C.removedNodes.forEach((H) => {
          H.nodeType === Node.ELEMENT_NODE && ye(H) && H === o.current && E();
        }), C.addedNodes.forEach((H) => {
          if (H.nodeType !== Node.ELEMENT_NODE) return;
          if (ye(H)) {
            setTimeout(() => v(H), 50);
            return;
          }
          const J = H.querySelectorAll?.("table") || [];
          J.length > 0 && setTimeout(() => v(J[0]), 50);
        }));
      });
    });
    return g.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => g.disconnect();
  }, [e, E, v]), oe(() => {
    if (!o.current) return;
    const g = new MutationObserver((w) => {
      let C = !1;
      if (w.forEach((H) => {
        if (H.type === "childList") {
          const J = Array.from(H.addedNodes).filter(
            (W) => W.nodeType === Node.ELEMENT_NODE && W.tagName === "TR"
          ), Q = Array.from(H.removedNodes).filter(
            (W) => W.nodeType === Node.ELEMENT_NODE && W.tagName === "TR"
          );
          (J.length > 0 || Q.length > 0) && (C = !0), H.addedNodes.forEach((W) => {
            W.nodeType === Node.ELEMENT_NODE && W.tagName === "TR" && (C = !0);
          }), H.removedNodes.forEach((W) => {
            W.nodeType === Node.ELEMENT_NODE && W.tagName === "TR" && (C = !0);
          });
        } else H.type === "attributes" && H.attributeName === "colspan" && (C = !0);
      }), C && a.current && o.current) {
        We(a.current), a.current = null;
        const H = cn(o.current, d.current);
        H && (a.current = H, document.body.appendChild(H), H.querySelectorAll(".table-resize-handler").forEach((Q) => {
          Q.addEventListener("mousedown", x);
        }));
      }
    });
    return g.observe(o.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => g.disconnect();
  }, [o.current, x]), null;
};
Ot.propTypes = {
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
Ot.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const Xa = 50, ct = 50, Ja = 50, Qa = 100, es = 300, Ct = Tt(({
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
  const c = hn(), u = Re(), { pageSize: v, pageMargins: E, continuousContent: x, pageBoundaries: _, activePage: M, zoomLevel: B, canUndo: L, canRedo: m } = c, h = X(null), g = X(null), { currentFormat: w, formatText: C, updateCurrentFormatFromSelection: H } = Cr(), [J, Q] = de(!1), [W, N] = de(null), [U, te] = de(!0), [ne, re] = de(!1), [ce, le] = de(null), b = X(null), {
    checkAndUpdateBoundaries: f,
    getCurrentPage: A,
    scrollToPage: O,
    updateBoundaries: S,
    triggerAutoReflow: z,
    removePageAndContent: $,
    removePageBreak: I,
    insertPageBreakAtBoundary: F
  } = Jr(v, g, B, E), q = Ee(() => vt(v), [v]), [G, ae] = de(!1), R = X(null), ie = X(!1), pe = X(!1), xe = X(!1), we = X(x);
  oe(() => {
    if (g.current) {
      if (!xe.current) {
        g.current.innerHTML = x, xe.current = !0, we.current = x;
        const P = setTimeout(() => {
          S();
        }, Xa);
        return () => clearTimeout(P);
      }
      if (we.current !== x) {
        if (g.current.innerHTML !== x) {
          g.current.innerHTML = x;
          const Z = setTimeout(() => {
            S(), ie.current && Nt();
          }, ct);
          return we.current = x, () => clearTimeout(Z);
        }
        we.current = x;
      }
    }
  }, [x, S, _.length, u, O]), oe(() => {
    o && xe.current && o(x);
  }, [x, o]);
  const kt = Ee(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => g.current ? g.current.innerHTML : x,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (g.current ? g.current.innerHTML : x).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
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
      const Z = qe(P);
      Z !== x && u.updateContinuousContent(Z), g.current && g.current.innerHTML !== Z && (g.current.innerHTML = Z), we.current = Z, g.current && setTimeout(() => {
        S();
      }, ct);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (P) => {
      if (!g.current || !P) return;
      const Z = qe(P), ee = window.getSelection();
      let ue = !1;
      if (ee && ee.rangeCount > 0) {
        const et = ee.getRangeAt(0);
        g.current.contains(et.commonAncestorContainer) && (ue = !0);
      }
      if (!ue && b.current)
        try {
          ee.removeAllRanges(), ee.addRange(b.current);
        } catch (et) {
          console.warn("[insertContent] Failed to restore last cursor position:", et);
          const Se = g.current.lastChild;
          if (Se) {
            const Be = document.createRange();
            Se.nodeType === Node.TEXT_NODE ? Be.setStart(Se, Se.textContent.length) : Be.setStartAfter(Se), Be.collapse(!0), ee.removeAllRanges(), ee.addRange(Be);
          }
        }
      document.execCommand("insertHTML", !1, Z);
      const he = g.current.innerHTML;
      u.updateContinuousContent(he), we.current = he, setTimeout(() => {
        S(), z(200);
      }, ct);
    }
  }), [x, u, S, g, b, f]);
  sr(d, () => kt, [kt]), oe(() => {
    const P = () => {
      if (H(), g.current) {
        const ee = window.getSelection();
        if (ee.rangeCount > 0) {
          const ue = ee.getRangeAt(0);
          ue.collapsed && g.current.contains(ue.commonAncestorContainer) && (b.current = ue.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", P);
    const Z = () => {
      if (setTimeout(H, 10), b.current && g.current)
        try {
          const ee = window.getSelection();
          ee.removeAllRanges(), ee.addRange(b.current);
        } catch (ee) {
          console.warn("[handleFocus] Failed to restore cursor:", ee);
        }
    };
    return g.current && g.current.addEventListener("focus", Z), () => {
      document.removeEventListener("selectionchange", P), g.current && g.current.removeEventListener("focus", Z);
    };
  }, [H]);
  const Nt = k(() => {
    ie.current = !1;
    const P = Math.max(0, _.length - 1);
    u.setActivePage(P), setTimeout(() => {
      O(P, h);
    }, Ja);
  }, [_.length, u, O]), Qe = k(() => {
    if (!g.current) return;
    let P = g.current.innerHTML;
    P = qe(P), P !== g.current.innerHTML && (g.current.innerHTML = P);
    const Z = x;
    if (Z !== P) {
      const ue = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: P
      }, he = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: Z
      };
      u.recordOperation(ue, he);
    }
    u.updateContinuousContent(P), f(), z(200);
    const ee = A(h);
    ee !== M && u.setActivePage(ee);
  }, [u, f, A, M, z, h, g, x]), Wn = k((P) => {
    Qe();
  }, [Qe]), Mt = k((P) => {
    u.updatePageSize(P), S({ pageSize: P }), s && s(P);
  }, [u, S, s]), Lt = k((P) => {
    u.updatePageMargins(P), S({ pageMargins: P }), a && a(P);
  }, [u, S, a]), It = k((P) => {
    P < 0 || P >= _.length || (pe.current = !0, u.setActivePage(P), O(P, h), setTimeout(() => {
      pe.current = !1;
    }, es), t && t(P));
  }, [u, O, t, _.length]), Dt = k(() => {
    const P = _.length + 1;
    F(P) && (ie.current = !0, setTimeout(() => {
      ie.current && Nt();
    }, 100)), n && n();
  }, [_.length, F, u, O, n]), Gn = k(() => {
    const P = window.getSelection();
    if (P && P.rangeCount > 0) {
      if (!g?.current) return;
      const ue = `<page-break data-page-break="true" contenteditable="false" data-page-number="${g.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ue), setTimeout(() => {
        S();
        const he = A(h);
        u.setActivePage(he);
      }, 150);
    }
  }, [S, A, u, h]), qn = k((P) => {
    if (!P) return;
    I(P) && setTimeout(() => {
      const ee = A(h);
      u.setActivePage(ee);
    }, 200);
  }, [I, A, u, h]), Ht = k((P) => {
    if (_.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    $(P) && (u.setActivePage(0), r && r(P));
  }, [_.length, $, u, r]), Ie = k(() => {
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
    const P = (Z) => {
      if (Z.ctrlKey || Z.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Z.key) && Z.preventDefault();
        const ee = document.activeElement === g.current, ue = document.activeElement === h.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ee || ue || !he)
          switch (Z.key) {
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
              Z.shiftKey || Bt();
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
  const Zn = k(() => {
    !h.current || !g.current || pe.current || (R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      if (pe.current) {
        R.current = null;
        return;
      }
      const P = A(h);
      P !== M && P >= 0 && u.setActivePage(P), R.current = null;
    }, Qa));
  }, [A, M, u]), Yn = Ee(() => {
    if (!x) return 0;
    const Z = x.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Z ? Z.length : 0;
  }, [x]), Vn = _.length || 1, Kn = k((P) => {
    Q(!0), N(P);
  }, []), zt = k(() => {
    Q(!1), N(null);
  }, []), Xn = k((P, Z) => {
  }, []), Jn = k((P) => {
    re(!0), le(P);
  }, []), Qn = k(() => {
    re(!1), le(null);
  }, []), er = k((P, Z) => {
  }, []);
  return oe(() => () => {
    R.current && clearTimeout(R.current);
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "multi-page-editor", children: [
    p && /* @__PURE__ */ y.jsx(
      wt,
      {
        currentFormat: {
          ...w,
          imageSelected: J
        },
        onFormatText: C,
        onAddPageBreak: Gn,
        canUndo: L,
        canRedo: m
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ y.jsx(
        Oa,
        {
          editorView: null,
          isCollapsed: G,
          onToggle: () => ae((P) => !P),
          wordCount: Yn,
          pageCount: Vn
        }
      ),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: h,
          onScroll: Zn,
          children: /* @__PURE__ */ y.jsx(
            Fa,
            {
              content: x,
              dimensions: q,
              pageSize: v,
              pageMargins: E,
              pageBoundaries: _,
              editorRef: g,
              onInput: Wn,
              onContentChange: Qe,
              onClick: () => g.current?.focus(),
              onRemovePageBreak: qn,
              zoomLevel: B
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsx(
        _t,
        {
          editorRef: g,
          onImageSelect: Kn,
          onImageDeselect: zt,
          onImageResize: Xn,
          resizeOptions: {
            ..._e,
            preserveAspectRatio: U,
            aspectRatio: U
          }
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ot,
        {
          editorRef: g,
          onTableSelect: Jn,
          onTableDeselect: Qn,
          onTableResize: er
        }
      ),
      J && W && /* @__PURE__ */ y.jsx(
        St,
        {
          imageElement: W,
          initialPreserveAspectRatio: U,
          onAlignChange: (P) => {
          },
          onAspectRatioToggle: (P) => {
            te(P);
          },
          onDelete: () => {
            if (W) {
              const P = W.getAttribute("data-key");
              P && so(P).catch((Z) => {
                console.error("Failed to delete image from IndexedDB:", Z);
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
        Wa,
        {
          pageBoundaries: _,
          activePage: M,
          pageSize: v,
          pageMargins: E,
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
Ct.displayName = "HtmlEditor";
Ct.propTypes = {
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
Ct.defaultProps = {
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
class Fn extends Ke.Component {
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
Fn.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
Fn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  _r as COMMON_FONT_SIZES,
  Xe as DEFAULT_FONT_SIZE,
  _e as DEFAULT_IMAGE_RESIZE_OPTIONS,
  dn as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  ss as DocumentProvider,
  wt as EditorToolbar,
  Fn as ErrorBoundary,
  En as FONT_SIZE_MAP,
  Ct as HtmlEditor,
  _t as ImageResizeHandlers,
  Ae as PAGE_SIZES,
  Wa as PageManager,
  Fa as PageView,
  D as RESIZE_HANDLERS,
  Oa as Sidebar,
  se as TABLE_RESIZE_HANDLERS,
  Ot as TableResizeHandlers,
  fs as applyImageDimensions,
  Ka as applyTableDimensions,
  us as calculateResizeDimensions,
  Va as calculateTableResizeDimensions,
  ps as clearImages,
  Qr as createResizeOverlay,
  cn as createTableResizeOverlay,
  so as deleteImage,
  gs as getAllImageKeys,
  as as getAvailablePageSizes,
  ao as getImage,
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
  Pr as pixelsToPoints,
  Sr as pointsToPixels,
  it as removeResizeOverlay,
  We as removeTableResizeOverlay,
  oo as saveImage,
  yt as updateResizeOverlay,
  ln as updateTableResizeOverlay,
  Jr as useContinuousReflow,
  gn as useDocument,
  Re as useDocumentActions,
  hn as useDocumentState,
  Cr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
