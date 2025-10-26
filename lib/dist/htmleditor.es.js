import Qe, { createContext as _r, useContext as Or, useReducer as kr, useMemo as ce, useState as re, useCallback as P, useRef as te, useEffect as ne, forwardRef as Lt, createElement as vt, memo as Pr, useLayoutEffect as Pn, useImperativeHandle as Nr } from "react";
import { v4 as Mt } from "uuid";
import { createPortal as Nn } from "react-dom";
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $e = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Mr() {
  if (nn) return _e;
  nn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var i in a)
        i !== "key" && (o[i] = a[i]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return _e.Fragment = t, _e.jsx = n, _e.jsxs = n, _e;
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
var rn;
function Ir() {
  return rn || (rn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === L ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case b:
          return "Fragment";
        case k:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case _:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case y:
            return "Portal";
          case x:
            return u.displayName || "Context";
          case S:
            return (u._context.displayName || "Context") + ".Consumer";
          case E:
            var M = u.render;
            return u = u.displayName, u || (u = M.displayName || M.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case C:
            return M = u.displayName || null, M !== null ? M : e(u.type) || "Memo";
          case N:
            M = u._payload, u = u._init;
            try {
              return e(u(M));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function n(u) {
      try {
        t(u);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var D = M.error, j = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return D.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(u);
      }
    }
    function r(u) {
      if (u === b) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === N)
        return "<...>";
      try {
        var M = e(u);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var u = q.A;
      return u === null ? null : u.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(u) {
      if (B.call(u, "key")) {
        var M = Object.getOwnPropertyDescriptor(u, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function i(u, M) {
      function D() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: D,
        configurable: !0
      });
    }
    function l() {
      var u = e(this.type);
      return J[u] || (J[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function c(u, M, D, j, $, U) {
      var I = D.ref;
      return u = {
        $$typeof: m,
        type: u,
        key: M,
        props: D,
        _owner: j
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: l
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
        value: $
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function f(u, M, D, j, $, U) {
      var I = M.children;
      if (I !== void 0)
        if (j)
          if (F(I)) {
            for (j = 0; j < I.length; j++)
              d(I[j]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (B.call(M, "key")) {
        I = e(u);
        var G = Object.keys(M).filter(function(V) {
          return V !== "key";
        });
        j = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", R[I + j] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          I,
          G,
          I
        ), R[I + j] = !0);
      }
      if (I = null, D !== void 0 && (n(D), I = "" + D), s(M) && (n(M.key), I = "" + M.key), "key" in M) {
        D = {};
        for (var K in M)
          K !== "key" && (D[K] = M[K]);
      } else D = M;
      return I && i(
        D,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), c(
        u,
        I,
        D,
        a(),
        $,
        U
      );
    }
    function d(u) {
      p(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === N && (u._payload.status === "fulfilled" ? p(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function p(u) {
      return typeof u == "object" && u !== null && u.$$typeof === m;
    }
    var g = Qe, m = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), x = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, F = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var Y, J = {}, oe = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), le = X(r(o)), R = {};
    Oe.Fragment = b, Oe.jsx = function(u, M, D) {
      var j = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        u,
        M,
        D,
        !1,
        j ? Error("react-stack-top-frame") : oe,
        j ? X(r(u)) : le
      );
    }, Oe.jsxs = function(u, M, D) {
      var j = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        u,
        M,
        D,
        !0,
        j ? Error("react-stack-top-frame") : oe,
        j ? X(r(u)) : le
      );
    };
  })()), Oe;
}
var on;
function Hr() {
  return on || (on = 1, process.env.NODE_ENV === "production" ? $e.exports = Mr() : $e.exports = Ir()), $e.exports;
}
var h = Hr();
const xt = 100, wt = 50, At = 200, sn = 5, Ct = (e) => e < At, Rt = (e) => e > wt, Br = 96, me = (e) => Math.round(e * Br), Ke = {
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
}, ye = "NORMAL", Ln = (e = ye) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: me(e.top),
      bottom: me(e.bottom),
      left: me(e.left),
      right: me(e.right)
    };
  const t = Ke[e] || Ke[ye];
  return {
    top: me(t.top),
    bottom: me(t.bottom),
    left: me(t.left),
    right: me(t.right)
  };
}, Dr = (e = ye) => {
  const t = Ln(e);
  return t.top + t.bottom;
}, jr = () => Object.keys(Ke), zr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ke[e];
  return t ? t.label : "Unknown";
}, Xe = {
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
}, Mn = "A4", Me = (e) => {
  const t = Xe[e] || Xe[Mn];
  return {
    width: t.width,
    height: t.height
  };
}, ai = (e) => Object.keys(Xe).includes(e), ii = () => Object.keys(Xe), Ie = Mn, be = "<p><br></p>", $r = "continuous", Pe = (e, t = Ie) => ({
  id: Mt(),
  index: e,
  size: t,
  content: be,
  images: [],
  isBreakPoint: !1
}), Ye = (e) => typeof e != "string" || e.trim() === "" ? be : e, In = (e, t = Ie) => (e.length > 0 ? e : [Pe(0, t)]).map((r, a) => ({
  id: r.id || Mt(),
  index: a,
  size: r.size || t,
  content: Ye(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), Fr = (e = Ie) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Me(e).height
}], Fe = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), St = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Ie, r = In(e.pages || [Pe(0, n)], n);
  return {
    id: Mt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || $r,
    continuousContent: e.continuousContent || be,
    pageBoundaries: e.pageBoundaries || Fr(n),
    zoomLevel: e.zoomLevel || xt,
    pageMargins: e.pageMargins || ye,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, W = {
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
}, _t = (e, t) => {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case W.INITIALIZE_DOCUMENT: {
      const { initialContent: r = be, pageSize: a = Ie } = t.payload || {}, o = { ...Pe(0, a), content: Ye(r) };
      return St({
        title: e.title,
        pageSize: a,
        pages: [o]
      });
    }
    case W.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case W.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: a } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[r] = {
        ...o[r],
        content: Ye(a)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case W.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = In(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : Fe(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: n
      };
    }
    case W.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(r, 0, Pe(r, e.pageSize));
      const o = a.map((i, l) => ({
        ...i,
        index: l,
        size: e.pageSize
      })), s = Fe(o);
      return {
        ...e,
        pages: o,
        activePage: r,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case W.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(r, 1);
      const o = a.map((l, c) => ({
        ...l,
        index: c,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const i = Fe(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: i,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case W.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const a = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= a ? e : {
        ...e,
        activePage: r,
        updatedAt: n
      };
    }
    case W.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Me(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: r
      })), o = Fe(a);
      return {
        ...e,
        pageSize: r,
        pages: a,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case W.RESET_DOCUMENT:
      return St();
    case W.UPDATE_CONTINUOUS_CONTENT: {
      const r = Ye(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case W.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const a = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: a,
        updatedAt: n
      };
    }
    case W.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (r === "end")
        s = s + o + "<p><br></p>";
      else if (typeof r == "number") {
        const i = s.substring(0, r), l = s.substring(r);
        s = i + o + l;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const l = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && l.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < l.length) {
          const c = l[a], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", c.parentNode.insertBefore(f, c.nextSibling), f.parentNode.insertBefore(d, f.nextSibling), s = i.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: n
      };
    }
    case W.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[r] && o[r].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, l) => {
        i.setAttribute("data-page-number", String(l + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: n
      };
    }
    case W.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return r === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== be).join(`
`) || be : e.continuousContent && e.continuousContent !== be && (o = [{ ...Pe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: a,
        pages: o,
        updatedAt: n
      };
    }
    case W.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < wt || r > At ? (console.warn(`Invalid zoom level: ${r}. Must be between ${wt} and ${At}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case W.ZOOM_IN: {
      if (!Ct(e.zoomLevel))
        return e;
      const r = e.zoomLevel + sn;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case W.ZOOM_OUT: {
      if (!Rt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - sn;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case W.RESET_ZOOM:
      return e.zoomLevel === xt ? e : {
        ...e,
        zoomLevel: xt,
        updatedAt: n
      };
    case W.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case W.RECORD_OPERATION: {
      const { operation: r, inverseOperation: a } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: r, inverseOperation: a }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: n
      };
    }
    case W.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return r.inverseOperation && (o = _t(e, r.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, r],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case W.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return r.operation && (o = _t(e, r.operation)), {
        ...o,
        undoStack: [...e.undoStack, r],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: n
      };
    }
    case W.CLEAR_UNDO_REDO:
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
}, Hn = _r(null), ci = ({ children: e, initialState: t = {} }) => {
  const [n, r] = kr(_t, St(t)), a = ce(() => ({
    initializeDocument: (s) => r({ type: W.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => r({ type: W.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => r({ type: W.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => r({ type: W.UPDATE_PAGES, payload: s }),
    addPage: (s) => r({ type: W.ADD_PAGE, payload: s }),
    deletePage: (s) => r({ type: W.DELETE_PAGE, payload: s }),
    setActivePage: (s) => r({ type: W.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => r({ type: W.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => r({ type: W.RESET_DOCUMENT }),
    updateContinuousContent: (s) => r({ type: W.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => r({ type: W.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => r({ type: W.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => r({ type: W.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => r({ type: W.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => r({ type: W.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => r({ type: W.ZOOM_IN }),
    zoomOut: () => r({ type: W.ZOOM_OUT }),
    resetZoom: () => r({ type: W.RESET_ZOOM }),
    updatePageMargins: (s) => r({ type: W.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, i) => r({
      type: W.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: i }
    }),
    undo: () => r({ type: W.UNDO }),
    redo: () => r({ type: W.REDO }),
    clearUndoRedo: () => r({ type: W.CLEAR_UNDO_REDO })
  }), []), o = ce(() => ({
    state: n,
    actions: a,
    dispatch: r
  }), [n, a]);
  return /* @__PURE__ */ h.jsx(Hn.Provider, { value: o, children: e });
}, Bn = () => {
  const e = Or(Hn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Dn = () => {
  const { state: e } = Bn();
  return e;
}, xe = () => {
  const { actions: e } = Bn();
  return e;
};
var Ue = { exports: {} }, We = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function Ur() {
  if (an) return Q;
  an = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var T = E.$$typeof;
      switch (T) {
        case t:
          switch (E = E.type, E) {
            case l:
            case c:
            case r:
            case o:
            case a:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case i:
                case f:
                case m:
                case g:
                case s:
                  return E;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function x(E) {
    return S(E) === c;
  }
  return Q.AsyncMode = l, Q.ConcurrentMode = c, Q.ContextConsumer = i, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = f, Q.Fragment = r, Q.Lazy = m, Q.Memo = g, Q.Portal = n, Q.Profiler = o, Q.StrictMode = a, Q.Suspense = d, Q.isAsyncMode = function(E) {
    return x(E) || S(E) === l;
  }, Q.isConcurrentMode = x, Q.isContextConsumer = function(E) {
    return S(E) === i;
  }, Q.isContextProvider = function(E) {
    return S(E) === s;
  }, Q.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Q.isForwardRef = function(E) {
    return S(E) === f;
  }, Q.isFragment = function(E) {
    return S(E) === r;
  }, Q.isLazy = function(E) {
    return S(E) === m;
  }, Q.isMemo = function(E) {
    return S(E) === g;
  }, Q.isPortal = function(E) {
    return S(E) === n;
  }, Q.isProfiler = function(E) {
    return S(E) === o;
  }, Q.isStrictMode = function(E) {
    return S(E) === a;
  }, Q.isSuspense = function(E) {
    return S(E) === d;
  }, Q.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === c || E === o || E === a || E === d || E === p || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === g || E.$$typeof === s || E.$$typeof === i || E.$$typeof === f || E.$$typeof === b || E.$$typeof === A || E.$$typeof === k || E.$$typeof === y);
  }, Q.typeOf = S, Q;
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
var cn;
function Wr() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function S(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === r || H === c || H === o || H === a || H === d || H === p || typeof H == "object" && H !== null && (H.$$typeof === m || H.$$typeof === g || H.$$typeof === s || H.$$typeof === i || H.$$typeof === f || H.$$typeof === b || H.$$typeof === A || H.$$typeof === k || H.$$typeof === y);
    }
    function x(H) {
      if (typeof H == "object" && H !== null) {
        var de = H.$$typeof;
        switch (de) {
          case t:
            var Ae = H.type;
            switch (Ae) {
              case l:
              case c:
              case r:
              case o:
              case a:
              case d:
                return Ae;
              default:
                var ge = Ae && Ae.$$typeof;
                switch (ge) {
                  case i:
                  case f:
                  case m:
                  case g:
                  case s:
                    return ge;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var E = l, T = c, _ = i, C = s, N = t, w = f, L = r, q = m, B = g, F = n, X = o, Y = a, J = d, oe = !1;
    function le(H) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(H) || x(H) === l;
    }
    function R(H) {
      return x(H) === c;
    }
    function u(H) {
      return x(H) === i;
    }
    function M(H) {
      return x(H) === s;
    }
    function D(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function j(H) {
      return x(H) === f;
    }
    function $(H) {
      return x(H) === r;
    }
    function U(H) {
      return x(H) === m;
    }
    function I(H) {
      return x(H) === g;
    }
    function G(H) {
      return x(H) === n;
    }
    function K(H) {
      return x(H) === o;
    }
    function V(H) {
      return x(H) === a;
    }
    function ie(H) {
      return x(H) === d;
    }
    ee.AsyncMode = E, ee.ConcurrentMode = T, ee.ContextConsumer = _, ee.ContextProvider = C, ee.Element = N, ee.ForwardRef = w, ee.Fragment = L, ee.Lazy = q, ee.Memo = B, ee.Portal = F, ee.Profiler = X, ee.StrictMode = Y, ee.Suspense = J, ee.isAsyncMode = le, ee.isConcurrentMode = R, ee.isContextConsumer = u, ee.isContextProvider = M, ee.isElement = D, ee.isForwardRef = j, ee.isFragment = $, ee.isLazy = U, ee.isMemo = I, ee.isPortal = G, ee.isProfiler = K, ee.isStrictMode = V, ee.isSuspense = ie, ee.isValidElementType = S, ee.typeOf = x;
  })()), ee;
}
var ln;
function jn() {
  return ln || (ln = 1, process.env.NODE_ENV === "production" ? We.exports = Ur() : We.exports = Wr()), We.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ft, un;
function Gr() {
  if (un) return ft;
  un = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
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
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ft = a() ? Object.assign : function(o, s) {
    for (var i, l = r(o), c, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var d in i)
        t.call(i, d) && (l[d] = i[d]);
      if (e) {
        c = e(i);
        for (var p = 0; p < c.length; p++)
          n.call(i, c[p]) && (l[c[p]] = i[c[p]]);
      }
    }
    return l;
  }, ft;
}
var pt, dn;
function It() {
  if (dn) return pt;
  dn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pt = e, pt;
}
var gt, fn;
function zn() {
  return fn || (fn = 1, gt = Function.call.bind(Object.prototype.hasOwnProperty)), gt;
}
var ht, pn;
function qr() {
  if (pn) return ht;
  pn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ It(), n = {}, r = /* @__PURE__ */ zn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var d;
          try {
            if (typeof o[f] != "function") {
              var p = Error(
                (l || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[f](s, f, l, i, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + i + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ht = a, ht;
}
var mt, gn;
function Yr() {
  if (gn) return mt;
  gn = 1;
  var e = jn(), t = Gr(), n = /* @__PURE__ */ It(), r = /* @__PURE__ */ zn(), a = /* @__PURE__ */ qr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var l = "Warning: " + i;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return mt = function(i, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(R) {
      var u = R && (c && R[c] || R[f]);
      if (typeof u == "function")
        return u;
    }
    var p = "<<anonymous>>", g = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: k(),
      arrayOf: S,
      element: x(),
      elementType: E(),
      instanceOf: T,
      node: w(),
      objectOf: C,
      oneOf: _,
      oneOfType: N,
      shape: q,
      exact: B
    };
    function m(R, u) {
      return R === u ? R !== 0 || 1 / R === 1 / u : R !== R && u !== u;
    }
    function y(R, u) {
      this.message = R, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(R) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, M = 0;
      function D($, U, I, G, K, V, ie) {
        if (G = G || p, V = V || I, ie !== n) {
          if (l) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = G + ":" + I;
            !u[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[de] = !0, M++);
          }
        }
        return U[I] == null ? $ ? U[I] === null ? new y("The " + K + " `" + V + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new y("The " + K + " `" + V + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : R(U, I, G, K, V);
      }
      var j = D.bind(null, !1);
      return j.isRequired = D.bind(null, !0), j;
    }
    function A(R) {
      function u(M, D, j, $, U, I) {
        var G = M[D], K = Y(G);
        if (K !== R) {
          var V = J(G);
          return new y(
            "Invalid " + $ + " `" + U + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return b(u);
    }
    function k() {
      return b(s);
    }
    function S(R) {
      function u(M, D, j, $, U) {
        if (typeof R != "function")
          return new y("Property `" + U + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var I = M[D];
        if (!Array.isArray(I)) {
          var G = Y(I);
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an array."));
        }
        for (var K = 0; K < I.length; K++) {
          var V = R(I, K, j, $, U + "[" + K + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return b(u);
    }
    function x() {
      function R(u, M, D, j, $) {
        var U = u[M];
        if (!i(U)) {
          var I = Y(U);
          return new y("Invalid " + j + " `" + $ + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(R);
    }
    function E() {
      function R(u, M, D, j, $) {
        var U = u[M];
        if (!e.isValidElementType(U)) {
          var I = Y(U);
          return new y("Invalid " + j + " `" + $ + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(R);
    }
    function T(R) {
      function u(M, D, j, $, U) {
        if (!(M[D] instanceof R)) {
          var I = R.name || p, G = le(M[D]);
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return b(u);
    }
    function _(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function u(M, D, j, $, U) {
        for (var I = M[D], G = 0; G < R.length; G++)
          if (m(I, R[G]))
            return null;
        var K = JSON.stringify(R, function(ie, H) {
          var de = J(H);
          return de === "symbol" ? String(H) : H;
        });
        return new y("Invalid " + $ + " `" + U + "` of value `" + String(I) + "` " + ("supplied to `" + j + "`, expected one of " + K + "."));
      }
      return b(u);
    }
    function C(R) {
      function u(M, D, j, $, U) {
        if (typeof R != "function")
          return new y("Property `" + U + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an object."));
        for (var K in I)
          if (r(I, K)) {
            var V = R(I, K, j, $, U + "." + K, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return b(u);
    }
    function N(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var u = 0; u < R.length; u++) {
        var M = R[u];
        if (typeof M != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(M) + " at index " + u + "."
          ), s;
      }
      function D(j, $, U, I, G) {
        for (var K = [], V = 0; V < R.length; V++) {
          var ie = R[V], H = ie(j, $, U, I, G, n);
          if (H == null)
            return null;
          H.data && r(H.data, "expectedType") && K.push(H.data.expectedType);
        }
        var de = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new y("Invalid " + I + " `" + G + "` supplied to " + ("`" + U + "`" + de + "."));
      }
      return b(D);
    }
    function w() {
      function R(u, M, D, j, $) {
        return F(u[M]) ? null : new y("Invalid " + j + " `" + $ + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return b(R);
    }
    function L(R, u, M, D, j) {
      return new y(
        (R || "React class") + ": " + u + " type `" + M + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function q(R) {
      function u(M, D, j, $, U) {
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var K in R) {
          var V = R[K];
          if (typeof V != "function")
            return L(j, $, U, K, J(V));
          var ie = V(I, K, j, $, U + "." + K, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(u);
    }
    function B(R) {
      function u(M, D, j, $, U) {
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        var K = t({}, M[D], R);
        for (var V in K) {
          var ie = R[V];
          if (r(R, V) && typeof ie != "function")
            return L(j, $, U, V, J(ie));
          if (!ie)
            return new y(
              "Invalid " + $ + " `" + U + "` key `" + V + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(M[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var H = ie(I, V, j, $, U + "." + V, n);
          if (H)
            return H;
        }
        return null;
      }
      return b(u);
    }
    function F(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(F);
          if (R === null || i(R))
            return !0;
          var u = d(R);
          if (u) {
            var M = u.call(R), D;
            if (u !== R.entries) {
              for (; !(D = M.next()).done; )
                if (!F(D.value))
                  return !1;
            } else
              for (; !(D = M.next()).done; ) {
                var j = D.value;
                if (j && !F(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(R, u) {
      return R === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function Y(R) {
      var u = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : X(u, R) ? "symbol" : u;
    }
    function J(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var u = Y(R);
      if (u === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function oe(R) {
      var u = J(R);
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
    function le(R) {
      return !R.constructor || !R.constructor.name ? p : R.constructor.name;
    }
    return g.checkPropTypes = a, g.resetWarningCache = a.resetWarningCache, g.PropTypes = g, g;
  }, mt;
}
var yt, hn;
function Zr() {
  if (hn) return yt;
  hn = 1;
  var e = /* @__PURE__ */ It();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, yt = function() {
    function r(s, i, l, c, f, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, yt;
}
var mn;
function Vr() {
  if (mn) return Ue.exports;
  if (mn = 1, process.env.NODE_ENV !== "production") {
    var e = jn(), t = !0;
    Ue.exports = /* @__PURE__ */ Yr()(e.isElement, t);
  } else
    Ue.exports = /* @__PURE__ */ Zr()();
  return Ue.exports;
}
var Kr = /* @__PURE__ */ Vr();
const v = /* @__PURE__ */ Lr(Kr), $n = {
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
}, Xr = [
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
], et = "16px", Jr = (e) => Math.round(e * 96 / 72), Qr = (e) => Math.round(e * 72 / 96 * 2) / 2, li = (e) => {
  const t = Object.values($n).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Jr(e)}px`;
}, ui = (e) => {
  const t = parseInt(e), n = Object.values($n).find((r) => r.px === t);
  return n ? n.pt : Qr(t);
}, di = (e) => {
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
}, eo = {
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
}, yn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: et,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, to = () => {
  const [e, t] = re(yn), n = xe(), r = P((g, m, y = null) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const A = b.getRangeAt(0);
      if (!A.toString())
        return t((S) => ({ ...S, [g]: m })), !1;
      try {
        const S = document.createElement("span");
        S.style[g] = m;
        const x = A.extractContents();
        return S.appendChild(x), A.insertNode(S), A.selectNodeContents(S), b.removeAllRanges(), b.addRange(A), t((E) => ({ ...E, [g]: m })), !0;
      } catch {
        if (y) {
          const S = g === "fontSize" ? eo[m] || "3" : m;
          return document.execCommand(y, !1, S), t((x) => ({ ...x, [g]: m })), !0;
        }
        return !1;
      }
    } catch (b) {
      return console.warn(`[useFormatting] Style application failed for ${g}:`, b), !1;
    }
  }, []), a = P((g) => r("fontFamily", g, "fontName"), [r]), o = P((g) => r("fontSize", g, "fontSize"), [r]), s = P((g) => r("color", g, "foreColor"), [r]), i = P((g) => {
    t((m) => ({
      ...m,
      alignLeft: g === "left",
      alignCenter: g === "center",
      alignRight: g === "right",
      alignJustify: g === "justify"
    }));
  }, []), l = P((g) => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return !1;
      const y = m.getRangeAt(0), b = y.toString(), k = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[g];
      if (!k)
        return !1;
      if (!b) {
        const x = y.startContainer, E = x.nodeType === Node.TEXT_NODE ? x.parentElement : x, T = Ne(E) || oo();
        return T && (T.style.textAlign = k, i(k)), !0;
      }
      const S = ro(y);
      if (S.length === 0) {
        const x = document.createElement("p");
        x.style.textAlign = k;
        const E = y.extractContents();
        x.appendChild(E), y.insertNode(x), y.selectNodeContents(x), m.removeAllRanges(), m.addRange(y);
      } else
        S.forEach((x) => {
          x.style.textAlign = k;
        });
      return i(k), !0;
    } catch (m) {
      return console.warn("[useFormatting] Text alignment failed:", m), !1;
    }
  }, [i]), c = P((g) => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return !1;
      const y = m.getRangeAt(0), b = document.createElement("div");
      if (b.innerHTML = g, Array.from(b.children).some(
        (k) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(k.tagName)
      )) {
        const k = y.startContainer, S = k.nodeType === Node.TEXT_NODE ? k.parentElement : k, x = Ne(S);
        if (x && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(x.tagName)) {
          const E = x.tagName.toLowerCase();
          if (y.startOffset === 0 && (k === x || k.nodeType === Node.TEXT_NODE && k === x.firstChild))
            x.parentNode.insertBefore(b, x);
          else if (y.startOffset === k.textContent?.length && k === x.lastChild && y.endOffset === k.textContent?.length) {
            const C = x.nextSibling;
            C ? x.parentNode.insertBefore(b, C) : x.parentNode.appendChild(b);
          } else {
            const C = y.extractContents(), N = document.createTextNode(""), w = document.createElement(E);
            w.appendChild(N), w.appendChild(C);
            const L = x.parentNode;
            L.insertBefore(b, x.nextSibling), L.insertBefore(w, b.nextSibling), !x.textContent.trim() && x.children.length === 0 && L.removeChild(x);
          }
        } else
          y.insertNode(b);
        y.setStartAfter(b), y.setEndAfter(b), m.removeAllRanges(), m.addRange(y);
      } else
        document.execCommand("insertHTML", !1, g);
      return !0;
    } catch (m) {
      console.warn("[useFormatting] InsertHTML failed:", m);
      try {
        return document.execCommand("insertHTML", !1, g), !0;
      } catch (y) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", y), !1;
      }
    }
  }, []), f = P((g, m = null) => {
    try {
      if (g === "undo") {
        n.undo();
        return;
      }
      if (g === "redo") {
        n.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (g === "insertHTML" && m) {
        c(m);
        return;
      }
      if (g === "fontSize") {
        o(m);
        return;
      }
      if (g === "fontName") {
        a(m);
        return;
      }
      if (g === "foreColor") {
        s(m);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(g)) {
        l(g);
        return;
      }
      switch (document.execCommand(g, !1, m) || console.warn(`[useFormatting] Command "${g}" failed`), g) {
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
          t((b) => ({ ...b, headingLevel: m }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${g}":`, y);
    }
  }, [o, a, l, c, n]), d = P(() => {
    try {
      const g = window.getSelection();
      if (!g || g.rangeCount === 0)
        return;
      const m = g.getRangeAt(0), y = m.toString();
      let b = et, A = "Arial", k = "#000000", S = "p", x = "left";
      if (y) {
        const T = m.startContainer, _ = T.nodeType === Node.TEXT_NODE ? T.parentElement : T;
        if (_) {
          const C = window.getComputedStyle(_), N = C.fontSize, w = C.fontFamily;
          N && N.endsWith("px") && (b = N), w && w !== "serif" && (A = w.split(",")[0].replace(/['"]/g, "").trim());
          const L = C.color;
          L && L !== "rgb(0, 0, 0)" && L !== "#000000" && (L.startsWith("rgb") ? k = no(L) : k = L);
          const q = Ne(_);
          if (q) {
            const B = q.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(B) && (S = B);
            const X = window.getComputedStyle(q).textAlign;
            ["left", "center", "right", "justify"].includes(X) && (x = X);
          }
        }
      }
      const E = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: x === "left",
        alignCenter: x === "center",
        alignRight: x === "right",
        alignJustify: x === "justify",
        fontFamily: A,
        fontSize: b,
        fontColor: k,
        headingLevel: S
      };
      t((T) => ({
        ...T,
        ...E
      }));
    } catch (g) {
      console.warn("[useFormatting] Error updating format from selection:", g);
    }
  }, []), p = P(() => {
    t(yn);
  }, []);
  return {
    currentFormat: e,
    formatText: f,
    resetFormat: p,
    updateCurrentFormatFromSelection: d
  };
};
function no(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + a).toString(16).slice(1)}`;
}
function Ne(e) {
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
function ro(e) {
  const t = [], n = e.startContainer, r = e.endContainer, a = Ne(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = Ne(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (l) => {
        const c = l.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(c) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function oo() {
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
const Te = 'page-break, [data-page-break="true"]', so = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Me(n), a = e.querySelectorAll(Te), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((l, c) => {
    const d = l.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: d,
      height: r.height
    });
  }), o;
}, Fn = (e, t = 100, n = ye) => {
  const r = Me(e), a = Dr(n), o = r.height - a, s = t / 100;
  return o / s;
}, ao = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(Te);
    if (n.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), a = r.top + r.height / 2;
    for (let o = n.length - 1; o >= 0; o--)
      if (n[o].getBoundingClientRect().top < a)
        return o + 1;
    return 0;
  } catch (n) {
    return console.warn("[getCurrentPage] Failed to calculate page:", n), 0;
  }
}, Tn = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let n = [], r = [];
  for (const a of t)
    a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true" ? r.length > 0 && (n.push(r), r = []) : r.push(a);
  return r.length > 0 && n.push(r), n.length === 0 && t.length > 0 && n.push(t.filter(
    (a) => !(a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
  )), n;
}, io = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, co = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, lo = (e, t, n, r, a, o, s) => {
  if (!e)
    return !1;
  try {
    const l = Fn(n, r, a) * (t - 1), c = Array.from(e.children);
    let f = 0, d = null;
    for (let p = 0; p < c.length; p++) {
      const g = c[p];
      if (g.tagName === "PAGE-BREAK" || g.getAttribute("data-page-break") === "true")
        continue;
      const m = io(g);
      if (f + m > l) {
        d = g;
        break;
      }
      f += m;
    }
    if (d) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(p, d), o) {
        const g = e.innerHTML;
        o(g);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const g = document.createElement("p");
      if (g.innerHTML = "<br>", e.appendChild(g), o) {
        const m = e.innerHTML;
        o(m);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, uo = (e, t, n, r, a, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const l = Array.from(e.querySelectorAll(Te));
    if (t > l.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
    let f = !1, d = [], p = null;
    if (t === 0) {
      const m = l[0];
      if (!m)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let y = e.firstChild;
      for (; y && y !== m; )
        d.push(y), y = y.nextSibling;
      p = m;
    } else {
      const m = l[t - 1];
      if (!m)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const y = l[t];
      let b = m.nextSibling;
      for (; b && b !== y; )
        d.push(b), b = b.nextSibling;
      p = m;
    }
    if (c && c.rangeCount > 0) {
      const y = c.getRangeAt(0).startContainer;
      for (const b of d)
        if (b.contains(y) || b === y) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), d.forEach((m) => {
      m.parentNode && m.remove();
    }), e.querySelectorAll(Te).forEach((m, y) => {
      m.setAttribute("data-page-number", String(y + 2));
    }), f && o && setTimeout(() => {
      o(0);
    }, 50), r) {
      const m = e.innerHTML;
      r(m);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (l) {
    return console.error("[removePageAndContent] Failed to remove page:", l), !1;
  }
}, fo = (e) => {
  if (e)
    try {
      e.querySelectorAll(Te).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, po = (e, t, n, r, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), fo(t), n) {
      const o = t.innerHTML;
      n(o);
    }
    return r && setTimeout(() => {
      r(), a && setTimeout(() => {
        a();
      }, 100);
    }, 50), !0;
  } catch (o) {
    return console.error("[removePageBreak] Failed to remove page break:", o), !1;
  }
}, go = 200, ho = 50, bn = 3, mo = 20, Un = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, yo = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Un(o);
    if (s < 1)
      continue;
    if (n + s > t)
      return r === null ? a > 0 ? {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: n
      } : null : {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: n
      };
    n += s, r = o;
  }
  return null;
}, To = (e, t, n, r, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const l = Fn(t, n, r);
    let c = Tn(e), f = !1, d = 0;
    for (let p = 0; p < c.length && d < bn; p++) {
      const g = c[p], m = yo(g, l);
      if (m && m.overflowIndex > 0) {
        let y = 0;
        for (let S = 0; S < g.length; S++) {
          const x = g[S];
          x && x.getBoundingClientRect && (y += Un(x));
        }
        if (y - l < mo)
          continue;
        const A = p + 2;
        co(m.overflowElement, A) && (f = !0, d++, c = Tn(e));
      }
    }
    if (f) {
      if (a) {
        const p = e.innerHTML;
        a(p);
      }
      setTimeout(() => {
        o && o(), d >= bn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, ho);
    }
    return f;
  } catch (l) {
    return console.warn("[checkAndReflow] Reflow failed:", l), !1;
  } finally {
    s.current = !1;
  }
}, bo = (e, t, n = go) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Eo = 400, Wn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const o = e.querySelectorAll(Te)[t - 1];
        o && o.nextSibling && (n = o.nextSibling, r = 0);
      }
      if (n) {
        const a = document.createRange(), o = window.getSelection();
        n.nodeType === Node.TEXT_NODE ? a.setStart(n, r) : a.setStart(n, 0), a.collapse(!0), o.removeAllRanges(), o.addRange(a);
      }
    } catch (n) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", n);
    }
  }
}, vo = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (n === 0)
      a = t;
    else {
      const s = t.querySelectorAll(Te)[n - 1];
      if (s)
        a = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (a) {
      const o = a.getBoundingClientRect(), s = e.getBoundingClientRect(), i = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : Wn(t, n);
      }, Eo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, xo = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, wo = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const a = e.querySelectorAll(Te);
  for (const f of a)
    if (n.comparePoint(f, 0) > 0)
      r++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), l = i.length, c = (i.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: c,
    charOffset: l
  };
}, Ao = 300, Co = (e, t, n = 100, r = "NARROW") => {
  const a = xe(), o = te(null), s = te(null), i = te(e), l = te(n), c = te(r), f = te(!1);
  ne(() => {
    i.current = e;
  }, [e]), ne(() => {
    l.current = n;
  }, [n]), ne(() => {
    c.current = r;
  }, [r]), ne(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = P((T = {}) => t?.current ? so(t.current, T) : [], [t]), p = P((T = {}) => {
    const _ = d(T);
    return a.updatePageBoundaries(_), _;
  }, [d, a]), g = P((T = {}) => {
    const _ = typeof T.delay == "number" ? T.delay : Ao;
    xo(p, o, T, _);
  }, [p]), m = P(() => {
    t?.current && To(
      t.current,
      i.current,
      l.current,
      c.current,
      a.updateContinuousContent,
      p,
      f,
      m
    );
  }, [t, a, p]), y = P((T) => {
    bo(m, s, T);
  }, [m]), b = P((T) => !T?.current || !t?.current ? 0 : ao(T.current, t.current), [t]), A = P((T) => {
    t?.current && Wn(t.current, T);
  }, [t]), k = P((T, _) => {
    if (!_?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    vo(_.current, t.current, T, A);
  }, [t, A]), S = P(async (T) => t?.current ? lo(
    t.current,
    T,
    i.current,
    l.current,
    c.current,
    a.updateContinuousContent,
    p
  ) : !1, [t, a, p]), x = P((T) => t?.current ? uo(
    t.current,
    T,
    d,
    a.updateContinuousContent,
    p,
    A,
    m
  ) : !1, [t, d, a, p, A, m]), E = P((T) => t?.current ? po(
    T,
    t.current,
    a.updateContinuousContent,
    p,
    m
  ) : !1, [t, a, p, m]);
  return ne(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ce(() => ({
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: g,
    updateBoundaries: p,
    getCurrentPage: b,
    scrollToPage: k,
    positionCursorAtPage: A,
    checkAndReflow: m,
    triggerAutoReflow: y,
    removePageAndContent: x,
    removePageBreak: E,
    insertPageBreakAtBoundary: S,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    g,
    p,
    b,
    k,
    A,
    m,
    y,
    x,
    E,
    S
  ]);
}, Ro = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: i, containerRef: l } = t;
  ne(() => {
    const c = (f) => {
      if (f.ctrlKey || f.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(f.key) && f.preventDefault();
        const d = document.activeElement === i.current, p = document.activeElement === l.current, g = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (d || p || !g)
          switch (f.key) {
            case "+":
            case "=":
              n();
              break;
            case "-":
            case "_":
              r();
              break;
            case "0":
              a();
              break;
            case "z":
              f.shiftKey || o();
              break;
            case "y":
              s();
              break;
          }
      }
    };
    return window.addEventListener("keydown", c), () => {
      window.removeEventListener("keydown", c);
    };
  }, [n, r, a, o, s, i, l]);
}, So = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = te(null), r = P(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (n.current)
      try {
        o.removeAllRanges(), o.addRange(n.current);
        return;
      } catch (i) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", i);
      }
    const s = t.current.lastChild;
    if (s) {
      const i = document.createRange();
      s.nodeType === Node.TEXT_NODE ? i.setStart(s, s.textContent.length) : i.setStartAfter(s), i.collapse(!0), o.removeAllRanges(), o.addRange(i);
    }
  }, [t]), a = P(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return ne(() => {
    const o = () => {
      if (e(), t.current) {
        const i = window.getSelection();
        if (i.rangeCount > 0) {
          const l = i.getRangeAt(0);
          l.collapsed && t.current.contains(l.commonAncestorContainer) && (n.current = l.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), n.current && t.current)
        try {
          const i = window.getSelection();
          i.removeAllRanges(), i.addRange(n.current);
        } catch (i) {
          console.warn("[handleFocus] Failed to restore cursor:", i);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: r,
    hasActiveCursorSelection: a
  };
}, Re = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, z = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function fi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Re
}) {
  const l = r - t, c = a - n;
  let f = o, d = s;
  switch (e) {
    case z.TOP_LEFT:
      f = Math.max(i.minWidth, o - l), d = Math.max(i.minHeight, s - c);
      break;
    case z.TOP_RIGHT:
      f = Math.max(i.minWidth, o + l), d = Math.max(i.minHeight, s - c);
      break;
    case z.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - l), d = Math.max(i.minHeight, s + c);
      break;
    case z.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + l), d = Math.max(i.minHeight, s + c);
      break;
    case z.TOP:
      d = Math.max(i.minHeight, s - c);
      break;
    case z.BOTTOM:
      d = Math.max(i.minHeight, s + c);
      break;
    case z.LEFT:
      f = Math.max(i.minWidth, o - l);
      break;
    case z.RIGHT:
      f = Math.max(i.minWidth, o + l);
      break;
    default:
      return { width: f, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = o / s;
    [
      z.TOP_LEFT,
      z.TOP_RIGHT,
      z.BOTTOM_LEFT,
      z.BOTTOM_RIGHT
    ].includes(e) ? f / p > d ? d = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, d * p) : [z.TOP, z.BOTTOM].includes(e) ? f = d * p : [z.LEFT, z.RIGHT].includes(e) && (d = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = f / (o / s))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = d * (o / s))), f = Math.max(i.minWidth, f), d = Math.max(i.minHeight, d), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function Ee(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function pi(e) {
  return Ee(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function gi(e, { width: t, height: n }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function _o(e, t = Re) {
  if (!Ee(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(z).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = Oo(o), s.style.pointerEvents = "all", Gn(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function Oo(e) {
  switch (e) {
    case z.TOP_LEFT:
    case z.BOTTOM_RIGHT:
      return "nwse-resize";
    case z.TOP_RIGHT:
    case z.BOTTOM_LEFT:
      return "nesw-resize";
    case z.TOP:
    case z.BOTTOM:
      return "ns-resize";
    case z.LEFT:
    case z.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Gn(e, t, n, r) {
  switch (t) {
    case z.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case z.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case z.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case z.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case z.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case z.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case z.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case z.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ot(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Gn(a, o, n.width, n.height);
  });
}
function Tt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ko = "html-editor-storage", Po = 1, fe = "images";
function No() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function He() {
  return new Promise((e, t) => {
    const n = indexedDB.open(ko, Po);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const a = r.target.result;
      a.objectStoreNames.contains(fe) || a.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Lo(e) {
  return new Promise((t, n) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      n(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      n(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const a = new FileReader();
    a.onload = async (o) => {
      const s = o.target.result, l = s.split(",")[1].length * 3 / 4;
      if (l > 5 * 1024 * 1024) {
        n(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const c = await He(), f = `editor-image-${No()}`, p = c.transaction([fe], "readwrite").objectStore(fe), g = {
          key: f,
          dataUrl: s,
          size: l,
          type: e.type,
          timestamp: Date.now()
        }, m = p.add(g);
        m.onsuccess = () => {
          c.close(), t(f);
        }, m.onerror = () => {
          c.close(), n(new Error("Failed to save image to IndexedDB"));
        };
      } catch (c) {
        n(c);
      }
    }, a.onerror = () => {
      n(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function Mo(e) {
  try {
    const t = await He();
    return new Promise((n, r) => {
      const s = t.transaction([fe], "readonly").objectStore(fe).get(e);
      s.onsuccess = () => {
        t.close();
        const i = s.result;
        n(i ? i.dataUrl : null);
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Io(e) {
  try {
    const t = await He();
    return new Promise((n, r) => {
      const s = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
      s.onsuccess = () => {
        t.close(), n();
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function hi() {
  try {
    const e = await He();
    return new Promise((t, n) => {
      const o = e.transaction([fe], "readwrite").objectStore(fe).clear();
      o.onsuccess = () => {
        e.close(), t();
      }, o.onerror = () => {
        e.close(), n(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function mi() {
  try {
    const e = await He();
    return new Promise((t, n) => {
      const o = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
      o.onsuccess = () => {
        e.close(), t(o.result || []);
      }, o.onerror = () => {
        e.close(), n(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const qn = [
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
], Ho = [
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
], Bo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Do(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Yn(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function Ze(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, Le(n) || "<p><br></p>";
}
function jo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function zo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => qn.includes(n.tagName));
}
function $o(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const a = r;
      qn.includes(a.tagName) ? t.push(a.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Le(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${Do(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), l = Yn(o);
      if (s === "DIV") {
        const c = Le(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        zo(o) ? t.push($o(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = jo(o);
        t.push(`<${i}${l}>${c}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(Fo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Uo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Le(o);
        t.push(`<blockquote${l}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (Ho.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (Bo.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Le(o);
        t.push(`<${i}${l}>${c}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Fo(e) {
  const t = e.tagName.toLowerCase(), n = Yn(e), r = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      r.push(a.outerHTML);
    else {
      const o = Le(a);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function Uo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Go = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), En = (e) => {
  const t = Go(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Zn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), qo = (e) => {
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
var Yo = {
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
const Zo = Lt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, l) => vt(
    "svg",
    {
      ref: l,
      ...Yo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Zn("lucide", a),
      ...!o && !qo(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([c, f]) => vt(c, f)),
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
const Z = (e, t) => {
  const n = Lt(
    ({ className: r, ...a }, o) => vt(Zo, {
      ref: o,
      iconNode: t,
      className: Zn(
        `lucide-${Wo(En(e))}`,
        `lucide-${e}`,
        r
      ),
      ...a
    })
  );
  return n.displayName = En(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Ko = Z("arrow-down", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Jo = Z("arrow-left", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], es = Z("arrow-right", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ns = Z("arrow-up", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], os = Z("bold", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], as = Z("chevron-left", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], cs = Z("chevron-right", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], us = Z("file-check", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Je = Z("file-text", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ps = Z("hash", fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], hs = Z("heading-1", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], ys = Z("heading-2", ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], bs = Z("heading-3", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], vs = Z("image-upscale", Es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ws = Z("image", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Cs = Z("italic", As);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Ss = Z("link", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Os = Z("list-indent-decrease", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Ps = Z("list-indent-increase", ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Ls = Z("list-ordered", Ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Vn = Z("list", Ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
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
], Hs = Z("palette", Is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ds = Z("plus", Bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], zs = Z("redo", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Fs = Z("scaling", $s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ws = Z("settings", Us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], qs = Z("strikethrough", Gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Zs = Z("table", Ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Ht = Z("text-align-center", Vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Bt = Z("text-align-end", Ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Js = Z("text-align-justify", Xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Dt = Z("text-align-start", Qs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], kt = Z("trash-2", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], na = Z("underline", ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], oa = Z("undo", ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], aa = Z("x", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ca = Z("zoom-in", ia);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ua = Z("zoom-out", la), vn = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const a = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), l = o.textContent.trim();
    return l ? {
      id: `${n}heading-${s}`,
      level: i,
      text: l,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, da = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, fa = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const a = Dn(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: l, outline: c } = ce(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: vn(i, 1, "continuous-")
      };
    let d = 0;
    const p = [];
    return o.forEach((g, m) => {
      d += da(g.content), p.push(...vn(g.content, m + 1, `page-${m}-`));
    }), { wordCount: d, outline: p };
  }, [o, n, r, i]), f = r !== void 0 ? r : o.length;
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
            /* @__PURE__ */ h.jsx(Je, { size: 18 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ h.jsx(cs, { size: 16 }) : /* @__PURE__ */ h.jsx(as, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(us, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: f })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(ps, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: l.toLocaleString() })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Je, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsxs("h3", { children: [
              /* @__PURE__ */ h.jsx(Vn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((d) => {
              const p = d.level === 1 ? hs : d.level === 2 ? ys : bs;
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ h.jsx(p, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ h.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ h.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      d.page
                    ] })
                  ]
                },
                d.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class pa {
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
const xn = new pa("Editor"), Kn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Xn = 32;
function Jn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Xn}px`, e.dataset.indentLevel = String(r));
}
function ga(e, t) {
  Jn(e, t);
}
function ha(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Kn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ma() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && n.add(s);
  }), n.size === 0 && r.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let c = i.parentElement;
      for (; c && c !== r; ) {
        if (c.tagName && Kn.has(c.tagName.toUpperCase())) {
          n.add(c);
          break;
        }
        c = c.parentElement;
      }
    }
  }), Array.from(n).filter((s) => {
    let i = s.parentElement;
    for (; i; ) {
      if (n.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function ya(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Xn}px`, e.dataset.indentLevel = String(n));
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
function Pt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = ma();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = ha(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const a = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      ga(s, e);
      return;
    }
    e ? ya(s) : Jn(s, !1);
  });
  try {
    const s = document.createRange(), i = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), l = (d) => {
      if (d.nodeType === Node.TEXT_NODE)
        return d;
      const p = document.createTreeWalker(
        d,
        NodeFilter.SHOW_TEXT,
        null
      );
      let g = null, m = p.nextNode();
      for (; m; )
        g = m, m = p.nextNode();
      return g;
    }, c = i(a);
    c ? s.setStart(c, 0) : s.setStart(a, 0);
    const f = l(o);
    f ? s.setEnd(f, f.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
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
function Ta(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && Pt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Qn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
  const [r, a] = re(!1), o = te(null), s = [
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
  ne(() => {
    const c = (f) => {
      o.current && !o.current.contains(f.target) && a(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const i = (c) => {
    t(c), a(!1);
  }, l = (c) => {
    const f = c.target.value;
    t(f);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => a(!r),
        className: "color-picker-button",
        title: n,
        style: {
          backgroundColor: e || "#000000",
          border: "1px solid #ccc",
          borderRadius: "3px",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          position: "relative"
        },
        children: /* @__PURE__ */ h.jsx(Hs, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ h.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ h.jsx("div", { className: "color-grid", children: s.map((c) => /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => i(c),
          className: `color-option ${e === c ? "selected" : ""}`,
          style: {
            backgroundColor: c,
            border: e === c ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: c
        },
        c
      )) }),
      /* @__PURE__ */ h.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ h.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: l,
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
Qn.propTypes = {
  currentColor: v.string,
  onColorSelect: v.func.isRequired,
  title: v.string
};
const ba = [
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
], Ea = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], va = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', jt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (g, m, y, b = null, A = !1) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: g,
      className: b && e[b] ? "active" : "",
      disabled: A,
      title: y,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ h.jsx(m, { size: 16 })
    },
    y
  ), i = () => /* @__PURE__ */ h.jsx("div", { className: "toolbar-separator" }), l = async (g) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(g.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (g.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const y = await Lo(g), b = await Mo(y);
      if (b && r) {
        const A = `<img src="${b}" data-key="${y}" alt="Inserted image" />`;
        r(A);
      } else
        xn.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (m) {
      xn.error("Error uploading image", m);
    }
  }, c = () => {
    Pt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, f = () => {
    Pt(!0);
  }, d = () => {
    const g = prompt("Enter URL:");
    g && t("createLink", g);
  }, p = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), oa, "Undo", null, !a),
    s(() => t("redo"), zs, "Redo", null, !o),
    i(),
    s(() => t("bold"), os, "Bold", "bold"),
    s(() => t("italic"), Cs, "Italic", "italic"),
    s(() => t("underline"), na, "Underline", "underline"),
    s(() => t("strikethrough"), qs, "Strikethrough", "strikethrough"),
    i(),
    s(() => t("justifyLeft"), Dt, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Ht, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Bt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Js, "Justify", "alignJustify"),
    i(),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (g) => t("fontName", g.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ba.map(({ value: g, label: m }) => /* @__PURE__ */ h.jsx("option", { value: g, children: m }, g))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (g) => t("fontSize", g.target.value),
        value: e.fontSize || et,
        title: "Font Size",
        children: Xr.map(({ value: g, label: m }) => /* @__PURE__ */ h.jsx("option", { value: g, children: m }, g))
      }
    ),
    /* @__PURE__ */ h.jsx(
      Qn,
      {
        currentColor: e.fontColor,
        onColorSelect: (g) => t("foreColor", g),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (g) => t("formatBlock", g.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Ea.map(({ value: g, label: m }) => /* @__PURE__ */ h.jsx("option", { value: g, children: m }, g))
      }
    ),
    i(),
    s(() => t("insertUnorderedList"), Vn, "Bullet List"),
    s(() => t("insertOrderedList"), Ls, "Numbered List"),
    i(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ h.jsx(Ps, { size: 16 })
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: f,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ h.jsx(Os, { size: 16 })
      }
    ),
    i(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ h.jsx(Ss, { size: 16 })
      }
    ),
    s(() => t("insertHTML", va), Zs, "Insert Table"),
    n && s(n, Je, "Insert Page Break"),
    i(),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (g) => g.target.files[0] && l(g.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: p,
        title: "Insert Image",
        children: /* @__PURE__ */ h.jsx(ws, { size: 16 })
      }
    )
  ] });
};
jt.propTypes = {
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
    fontColor: v.string,
    headingLevel: v.string
  }).isRequired,
  onFormatText: v.func.isRequired,
  onAddPageBreak: v.func,
  onInsertImage: v.func,
  canUndo: v.bool,
  canRedo: v.bool
};
jt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function xa(e) {
  return !e || typeof e != "string" ? e : Ze(e);
}
function wa(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = xa(n) : n = Aa(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Aa(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => Ca(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function Ca(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ra = 20, Sa = 20, wn = 20, An = -12, _a = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, Oa = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: et,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, Cn = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, ka = (e, t, n) => !!((ve(t) || ve(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), Pa = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (ve(t) || ve(n))), ve = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && ve(e.parentElement) : !1, zt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: l,
  zoomLevel: c = 100,
  pageMargins: f = ye
}) => {
  const d = ce(() => Ln(f), [f]), p = c / 100, g = P((x, E) => {
    if (!x) return !1;
    const T = x.getBoundingClientRect(), _ = E - T.top;
    return _ < d.top || _ > T.height - d.bottom;
  }, [d.top, d.bottom]), m = P((x, E) => {
    E.preventDefault();
    const T = x.getBoundingClientRect(), _ = E.clientX - T.left, C = E.clientY - T.top, N = T.width - wn - Ra, w = An, L = T.width - wn, q = An + Sa;
    _ >= N && _ <= L && C >= w && C <= q && l && l(x);
  }, [l]), y = P((x) => {
    x.preventDefault();
    const E = t.current.getBoundingClientRect();
    if (x.clientY - E.top < d.top) {
      const _ = t.current.firstElementChild;
      _ && _.tagName !== "PAGE-BREAK" && Cn(_, !0);
    } else {
      const _ = t.current.lastElementChild;
      _ && _.tagName !== "PAGE-BREAK" && Cn(_, !1);
    }
  }, [t, d.top]), b = P((x) => {
    const E = window.getSelection();
    if (!E || E.rangeCount === 0) return;
    const T = E.getRangeAt(0), { startContainer: _, endContainer: C } = T;
    if (ka(x, _, C))
      return x.preventDefault(), !1;
    if (Ta(x))
      return r && r(), !1;
    if (Pa(x, _, C))
      return x.preventDefault(), !1;
    a && a(x);
  }, [a, r]), A = P((x) => {
    if (!t.current) return;
    const E = x.target;
    if (ve(E)) {
      m(E, x);
      return;
    }
    if (g(t.current, x.clientY)) {
      y(x);
      return;
    }
    o && o(x);
  }, [t, o, m, y, g]), k = P((x) => {
    const E = window.getSelection();
    if (!E || E.rangeCount === 0) return;
    const T = E.getRangeAt(0), { startContainer: _ } = T;
    if (ve(_))
      return x.preventDefault(), !1;
  }, []), S = P((x) => {
    const E = wa(x);
    i && i(x, E);
  }, [i]);
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ..._a,
        maxWidth: `${e.width}px`,
        transform: `scale(${p})`,
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
            ...Oa,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`
          },
          onInput: n,
          onKeyDown: b,
          onBeforeInput: k,
          onClick: A,
          onScroll: s,
          onPaste: S,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
zt.propTypes = {
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
zt.defaultProps = {
  zoomLevel: 100,
  pageMargins: ye
};
const Na = Pr(zt), er = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ye,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: l,
  onDeletePage: c,
  onPageSizeChange: f,
  onPageMarginsChange: d,
  onZoomIn: p,
  onZoomOut: g,
  onZoomReset: m
} = {}) => {
  const y = Math.max(e?.length || 0, 1), b = (A) => {
    if (y <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c?.(A);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ h.jsx(Ws, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: n,
              onChange: (A) => f?.(A.target.value),
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
              value: r,
              onChange: (A) => d?.(A.target.value),
              children: jr().map((A) => /* @__PURE__ */ h.jsx("option", { value: A, children: zr(A) }, A))
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
          onClick: g,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ h.jsx(ua, { size: 12 })
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
          onClick: p,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ h.jsx(ca, { size: 12 })
        }
      ),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: m,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "page-list", children: e.map((A, k) => /* @__PURE__ */ h.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${k === t ? "active" : ""}`,
          onClick: () => i?.(k),
          "aria-label": `Go to page ${k + 1}`,
          "aria-current": k === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ h.jsx(Je, { size: 14 }),
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Page ",
              k + 1
            ] })
          ]
        }
      ),
      y > 1 && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (S) => {
            S.stopPropagation(), b(k);
          },
          "aria-label": `Delete page ${k + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ h.jsx(aa, { size: 14 })
        }
      )
    ] }, A.id || `page-${k}`)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => l?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ h.jsx(Ds, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
er.propTypes = {
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
const La = Qe.memo(er), Ge = 10, Ma = 300, Ia = 200;
function Ha(e) {
  switch (e) {
    case z.TOP_LEFT:
    case z.BOTTOM_RIGHT:
      return "nwse-resize";
    case z.TOP_RIGHT:
    case z.BOTTOM_LEFT:
      return "nesw-resize";
    case z.TOP:
    case z.BOTTOM:
      return "ns-resize";
    case z.LEFT:
    case z.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ba(e, t, n, r, a, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    z.TOP_LEFT,
    z.TOP_RIGHT,
    z.BOTTOM_LEFT,
    z.BOTTOM_RIGHT
  ].includes(a) ? e / s > t ? t = e / s : e = t * s : [z.TOP, z.BOTTOM].includes(a) ? e = t * s : [z.LEFT, z.RIGHT].includes(a) && (t = e / s), { width: e, height: t };
}
function Da({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Re
}) {
  const l = r - t, c = a - n;
  let f = o, d = s;
  switch (e) {
    case z.TOP_LEFT:
      f = o - l, d = s - c;
      break;
    case z.TOP_RIGHT:
      f = o + l, d = s - c;
      break;
    case z.BOTTOM_LEFT:
      f = o - l, d = s + c;
      break;
    case z.BOTTOM_RIGHT:
      f = o + l, d = s + c;
      break;
    case z.TOP:
      d = s - c;
      break;
    case z.BOTTOM:
      d = s + c;
      break;
    case z.LEFT:
      f = o - l;
      break;
    case z.RIGHT:
      f = o + l;
      break;
    default:
      return { width: f, height: d };
  }
  return { width: f, height: d } = Ba(
    f,
    d,
    o,
    s,
    e,
    i
  ), i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && (d = f / (o / s))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && (f = d * (o / s))), f = Math.max(i.minWidth, Math.min(i.maxWidth || f, f)), d = Math.max(i.minHeight, Math.min(i.maxHeight || d, d)), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function tr(e, { width: t, height: n }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function ja(e, t, n) {
  tr(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function za(e, t, n, r) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, l = a || o, c = n.offsetWidth, f = n.offsetHeight, p = {
    // Increase width
    ">": l && s ? () => ({
      width: Math.min(r.maxWidth || 800, c + Ge),
      height: f
    }) : null,
    // Decrease width
    "<": l && s ? () => ({
      width: Math.max(r.minWidth || 50, c - Ge),
      height: f
    }) : null,
    // Increase height
    "+": l && s ? () => ({
      width: c,
      height: Math.min(r.maxHeight || 600, f + Ge)
    }) : null,
    // Decrease height
    "-": l && s ? () => ({
      width: c,
      height: Math.max(r.minHeight || 50, f - Ge)
    }) : null,
    // Reset to default
    r: l && !s ? () => ({ width: Ma, height: Ia }) : null
  }[i];
  if (p) {
    e.preventDefault();
    const g = p();
    return ja(t, n, g), !0;
  }
  return !1;
}
const $t = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: a = Re
}) => {
  const o = te({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = te(a), i = xe();
  ne(() => {
    s.current = a;
  }, [a]);
  const l = P((b) => {
    if (!Ee(b)) return;
    o.current.overlay && (Tt(o.current.overlay), o.current.overlay = null), b.classList.add("selected");
    const A = _o(b, s.current);
    A && (o.current.overlay = A, o.current.image = b, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((S) => {
      S.addEventListener("mousedown", f);
    }), n && n(b));
  }, [n]), c = P(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (Tt(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), f = P((b) => {
    if (b.preventDefault(), b.stopPropagation(), !o.current.image) return;
    const A = b.currentTarget.dataset.handler, k = o.current.image.getBoundingClientRect(), S = window.pageYOffset || document.documentElement.scrollTop, x = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: b.clientX,
      y: b.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: b.clientX - k.left - x,
      offsetY: b.clientY - k.top - S
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ha(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", p);
  }, []), d = P((b) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    b.preventDefault(), b.stopPropagation();
    const { x: A, y: k, width: S, height: x } = o.current.start, E = o.current.handler, T = b.clientX, _ = b.clientY, C = Da({
      handler: E,
      startX: A,
      startY: k,
      currentX: T,
      currentY: _,
      startWidth: S,
      startHeight: x,
      options: s.current
    });
    tr(o.current.image, C), o.current.overlay && Ot(o.current.overlay, o.current.image);
  }, []), p = P((b) => {
    if (o.current.isResizing) {
      if (b.preventDefault(), b.stopPropagation(), o.current.image && o.current.start) {
        const A = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, k = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (A.width !== k.width || A.height !== k.height) && i.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: k } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: A } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const A = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(A), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, i]), g = P((b) => {
    o.current.overlay && !o.current.overlay.contains(b.target) && c();
    const A = b.target;
    if (Ee(A)) {
      if (A === o.current.image)
        return;
      l(A);
    }
  }, [l, c]), m = P((b) => {
    if ((b.key === "Delete" || b.key === "Backspace") && o.current.image && !o.current.isResizing) {
      b.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), c();
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
    b.key === "Escape" && o.current.image && c(), o.current.image && !o.current.isResizing && za(b, e, o.current.image, s.current);
  }, [e, c]), y = P(() => {
    o.current.overlay && o.current.image && Ot(o.current.overlay, o.current.image);
  }, []);
  return ne(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", y), window.addEventListener("scroll", y)), () => {
      A && A.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [e, y]), ne(() => {
    if (!e.current) return;
    const b = e.current;
    return b.addEventListener("click", g), b.addEventListener("keydown", m), window.addEventListener("resize", y), () => {
      b.removeEventListener("click", g), b.removeEventListener("keydown", m), window.removeEventListener("resize", y), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && Tt(o.current.overlay);
    };
  }, [e, g, m, y, d, p]), ne(() => {
    if (!e.current) return;
    const b = new MutationObserver((A) => {
      A.forEach((k) => {
        k.type === "childList" && k.removedNodes.forEach((S) => {
          S.nodeType === Node.ELEMENT_NODE && Ee(S) && S === o.current.image && c();
        });
      });
    });
    return b.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => b.disconnect();
  }, [e, c, l]), null;
};
$t.propTypes = {
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
$t.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Re
};
const nr = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, $a = {
  ...nr,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, bt = (e) => ({
  ...nr,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), Ft = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = re({ top: 0, left: 0 }), [l, c] = re(!1), [f, d] = re("top"), [p, g] = re(o), m = te(null), y = xe(), b = (w) => {
    w && requestAnimationFrame(() => {
      const L = document.querySelector(".image-resize-overlay");
      L && Ot(L, w);
    });
  }, A = (w) => {
    if (!w) return null;
    const L = window.getComputedStyle(w);
    return {
      float: L.float || "none",
      margin: w.style.margin || "",
      display: L.display || "inline",
      width: w.style.width || w.width || "",
      height: w.style.height || w.height || "",
      aspectRatio: p
    };
  }, k = P(() => {
    if (!e) return "left";
    const w = window.getComputedStyle(e);
    return w.float === "right" ? "right" : w.float === "left" ? "left" : w.display === "block" && w.margin.includes("auto") ? "center" : "left";
  }, [e]), [S, x] = re("left");
  ne(() => {
    e && x(k());
  }, [e, k]);
  const E = P(() => {
    if (!e || !m.current) return;
    const w = e.getBoundingClientRect(), L = m.current.getBoundingClientRect(), q = window.innerWidth, B = window.innerHeight, F = w.bottom >= 0 && w.top <= B && w.right >= 0 && w.left <= q;
    let X = "top", Y = 0, J = 0;
    if (F) {
      const R = w.top - L.height - 10, u = B - w.bottom - L.height - 10;
      u > R && u > 0 ? (X = "bottom", Y = w.bottom + 10) : (X = "top", Y = w.top - L.height - 10);
    } else
      X = "top", Y = 10;
    J = w.left + w.width / 2 - L.width / 2;
    let oe = Math.max(10, Math.min(J, q - L.width - 10)), le = Math.max(10, Math.min(Y, B - L.height - 10));
    i({ top: le, left: oe }), d(X), c(!0);
  }, [e]);
  Pn(() => {
    E();
    const w = () => {
      E();
    };
    return window.addEventListener("scroll", w), window.addEventListener("resize", w), () => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", w), c(!1);
    };
  }, [e, E]), ne(() => {
    const w = (L) => {
      m.current && !m.current.contains(L.target) && L.target !== e && a();
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [e, a]);
  const T = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, _ = (w) => {
    if (e && T[w]) {
      const L = A(e), q = S, B = T[w];
      e.style.float = B.float, e.style.margin = B.margin, e.style.display = B.display, x(w), b(e);
      const F = A(e);
      y.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w, state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: q, state: L } }
      ), t && t(w);
    }
  }, C = () => {
    if (e && e.parentNode) {
      const w = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      y.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: w } }
      ), e.parentNode.removeChild(e), r && r(), a();
    }
  }, N = () => {
    const w = p, L = !p;
    g(L), y.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: L } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: w } }
    ), n && n(L);
  };
  return !e || typeof document > "u" ? null : Nn(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: m,
        className: "image-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !l,
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
          pointerEvents: l ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: l ? 1 : 0,
          visibility: l ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: N,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ h.jsx(Fs, { size: 14 }) : /* @__PURE__ */ h.jsx(vs, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${S === "left" ? "active" : ""}`,
              onClick: () => _("left"),
              title: "Align Left",
              style: bt(S === "left"),
              children: /* @__PURE__ */ h.jsx(Dt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${S === "center" ? "active" : ""}`,
              onClick: () => _("center"),
              title: "Align Center",
              style: bt(S === "center"),
              children: /* @__PURE__ */ h.jsx(Ht, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${S === "right" ? "active" : ""}`,
              onClick: () => _("right"),
              title: "Align Right",
              style: bt(S === "right"),
              children: /* @__PURE__ */ h.jsx(Bt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: C,
              title: "Delete Image",
              style: $a,
              children: /* @__PURE__ */ h.jsx(kt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Ft.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired,
  initialPreserveAspectRatio: v.bool
};
Ft.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ve = (e) => {
  e.preventDefault(), e.stopPropagation();
}, Fa = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((a) => {
      r.classList.remove(a);
    });
  });
}, Rn = (e, t) => !e || !t ? !1 : e.contains(t), Ua = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, Ut = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, ae = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ue(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function pe(e) {
  if (!ue(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= r)
    for (let l = 0; l < r; l++) {
      const c = s[l], f = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      a.push(f || 100);
    }
  else if (n.length > 0) {
    const l = n[0];
    for (let c = 0; c < l.cells.length; c++) {
      const f = l.cells[c];
      a.push(f.offsetWidth);
    }
  }
  const i = n.map((l) => (l.style.height ? parseInt(l.style.height, 10) : null) || l.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: a,
    rowHeights: i,
    rect: t
  };
}
function Wa({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: a = Ut
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (i, l, c, f, d) => {
    l >= 0 && l < i.length && (i[l] = Math.max(f, Math.min(d, i[l] + c)));
  };
  switch (e) {
    case ae.COLUMN:
      s(o.columnWidths, t, n, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = r.width;
      break;
    case ae.ROW:
      s(o.rowHeights, t, n, a.minRowHeight, a.maxRowHeight), o.tableHeight = r.height;
      break;
    case ae.TABLE_BOTTOM:
      s(o.rowHeights, r.rows - 1, n, a.minRowHeight, a.maxRowHeight);
      break;
    case ae.TABLE_RIGHT:
      s(o.columnWidths, r.columns - 1, n, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function he(e) {
  if (!ue(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const a = r.querySelectorAll("col"), o = a.length;
  if (o < n)
    for (let s = o; s < n; s++) {
      const i = document.createElement("col");
      r.appendChild(i);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(a[s]);
}
function we(e, t) {
  if (!ue(e)) return;
  he(e);
  const { columnWidths: n, rowHeights: r, tableWidth: a, tableHeight: o } = t, s = n ? n.reduce((l, c) => l + c, 0) : 0, i = r ? r.reduce((l, c) => l + c, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : i > 0 && (e.style.height = `${i}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((f, d) => {
      d < n.length && (f.style.width = `${n[d]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((c, f) => {
    f < r.length && (c.style.height = `${r[f]}px`);
  }), e.style.height = `${i}px`), e.offsetHeight;
}
function Ga(e) {
  if (!ue(e)) return null;
  he(e);
  const t = pe(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const i = rr(s, t, r, e);
    n.appendChild(i);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const i = or(s, t, r, e);
    n.appendChild(i);
  }
  const a = sr(t, r);
  n.appendChild(a);
  const o = ar(t, r);
  return n.appendChild(o), n;
}
function tt(e, t, n, r, a) {
  const o = document.createElement("div");
  return o.className = t, o.dataset.type = e, o.style.position = "absolute", o.style.cursor = a, o.style.pointerEvents = "all", e === ae.COLUMN || e === ae.TABLE_RIGHT ? (o.style.width = "4px", o.style.height = `${n}px`) : (o.style.width = `${n}px`, o.style.height = "4px"), o;
}
function rr(e, t, n, r) {
  const a = tt(
    ae.COLUMN,
    "table-resize-handler table-column-resize-handler",
    n.height,
    4,
    "col-resize"
  );
  return a.dataset.index = e, ir(a, e, t, n, r), a;
}
function or(e, t, n, r) {
  const a = tt(
    ae.ROW,
    "table-resize-handler table-row-resize-handler",
    n.width,
    4,
    "row-resize"
  );
  return a.dataset.index = e, cr(a, e, t, n, r), a;
}
function sr(e, t) {
  const n = tt(
    ae.TABLE_BOTTOM,
    "table-resize-handler table-bottom-resize-handler",
    t.width,
    4,
    "ns-resize"
  );
  return lr(n, e, t), n;
}
function ar(e, t) {
  const n = tt(
    ae.TABLE_RIGHT,
    "table-resize-handler table-right-resize-handler",
    t.height,
    4,
    "ew-resize"
  );
  return ur(n, e, t), n;
}
function Nt(e, t) {
  if (!e || !t) return;
  he(t);
  const n = pe(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let d = 0; d < n.columns - 1; d++) {
      const p = rr(d, n, r, t);
      e.appendChild(p);
    }
    for (let d = 0; d < n.rows - 1; d++) {
      const p = or(d, n, r, t);
      e.appendChild(p);
    }
    const c = sr(n, r);
    e.appendChild(c);
    const f = ar(n, r);
    e.appendChild(f);
  } else
    a.forEach((c, f) => {
      ir(c, f, n, r, t);
    }), o.forEach((c, f) => {
      cr(c, f, n, r, t);
    }), s && lr(s, n, r), i && ur(i, n, r);
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function qa(e, t) {
  if (!ue(e))
    return console.warn("insertRowAbove: Invalid table element"), null;
  if (t < 0 || t > e.rows.length)
    return console.warn(`insertRowAbove: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const n = e.rows[t];
  if (!n)
    return console.warn(`insertRowAbove: Could not find reference row at index ${t}`), null;
  const r = document.createElement("tr"), a = n.cells.length;
  for (let s = 0; s < a; s++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", r.appendChild(i);
  }
  try {
    n.parentNode.insertBefore(r, n);
  } catch (s) {
    return console.error("insertRowAbove: Failed to insert row", s), null;
  }
  he(e);
  const o = pe(e);
  return o && we(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), r;
}
function Ya(e, t) {
  if (!ue(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const n = e.rows[t];
  if (!n)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const r = document.createElement("tr"), a = n.cells.length;
  for (let i = 0; i < a; i++) {
    const l = document.createElement("td");
    l.innerHTML = "&nbsp;", r.appendChild(l);
  }
  const o = n.nextSibling;
  try {
    o ? n.parentNode.insertBefore(r, o) : n.parentNode.appendChild(r);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  he(e);
  const s = pe(e);
  return s && we(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), r;
}
function ir(e, t, n, r, a) {
  if (a?.rows.length > 0 && a.rows[0].cells.length > t) {
    const s = a.rows[0].cells[t].getBoundingClientRect(), i = a.getBoundingClientRect();
    e.style.left = `${s.right - i.left - 2}px`, e.style.height = `${r.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${r.height}px`;
}
function cr(e, t, n, r, a) {
  if (a?.rows.length > t && a.rows[t].cells.length > 0) {
    const s = a.rows[t].cells[0].getBoundingClientRect(), i = a.getBoundingClientRect();
    e.style.top = `${s.bottom - i.top - 2}px`, e.style.width = `${r.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${r.width}px`;
}
function lr(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function ur(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function Za(e, t) {
  if (!ue(e))
    return console.warn("insertColumnLeft: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnLeft: Invalid column index ${t}`), !1;
  const n = Array.from(e.rows);
  if (n.length === 0)
    return console.warn("insertColumnLeft: Table has no rows"), !1;
  if (t > n[0].cells.length)
    return console.warn(`insertColumnLeft: Column index ${t} out of bounds`), !1;
  try {
    for (const a of n) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;", t < a.cells.length ? a.insertBefore(o, a.cells[t]) : a.appendChild(o);
    }
    he(e);
    const r = pe(e);
    return r && we(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("insertColumnLeft: Failed to insert column", r), !1;
  }
}
function Va(e, t) {
  if (!ue(e))
    return console.warn("insertColumnRight: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnRight: Invalid column index ${t}`), !1;
  const n = Array.from(e.rows);
  if (n.length === 0)
    return console.warn("insertColumnRight: Table has no rows"), !1;
  if (t >= n[0].cells.length)
    return console.warn(`insertColumnRight: Column index ${t} out of bounds`), !1;
  try {
    for (const a of n) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;";
      const s = a.cells[t + 1];
      s ? a.insertBefore(o, s) : a.appendChild(o);
    }
    he(e);
    const r = pe(e);
    return r && we(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("insertColumnRight: Failed to insert column", r), !1;
  }
}
function Ka(e, t) {
  if (!ue(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), he(e);
    const r = pe(e);
    return r && we(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function Xa(e, t) {
  if (!ue(e))
    return console.warn("deleteColumn: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`deleteColumn: Invalid column index ${t}`), !1;
  const n = Array.from(e.rows);
  if (n.length === 0)
    return console.warn("deleteColumn: Table has no rows"), !1;
  if (t >= n[0].cells.length)
    return console.warn(`deleteColumn: Column index ${t} out of bounds`), !1;
  if (n[0].cells.length <= 1)
    return console.warn("deleteColumn: Cannot delete the last column in the table"), !1;
  try {
    for (const a of n)
      a.cells.length > t && a.removeChild(a.cells[t]);
    he(e);
    const r = pe(e);
    return r && we(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
const Wt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: a = Ut
}) => {
  const o = te(null), s = te(null), i = te(null), l = te(null), c = te(null), f = te(a), d = te(!1), [p, g] = re(null), m = xe();
  ne(() => {
    f.current = a;
  }, [a]);
  const y = P(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ke(o.current), o.current = null), g(null), i.current = null, l.current = null, c.current = null, d.current = !1, r && r();
  }, [r]), b = P((C) => {
    if (Ve(C), !s.current) return;
    const N = C.currentTarget, w = N.dataset.type, L = parseInt(N.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const q = pe(s.current);
    i.current = {
      x: C.clientX,
      y: C.clientY,
      structure: { ...q }
    }, l.current = w, c.current = L, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const F = {
      [ae.COLUMN]: "col-resize",
      [ae.ROW]: "row-resize",
      [ae.TABLE_BOTTOM]: "ns-resize",
      [ae.TABLE_RIGHT]: "ew-resize"
    }[w] || "default";
    document.body.style.cursor = F, document.addEventListener("mousemove", S), document.addEventListener("mouseup", x);
  }, []), A = P((C) => {
    const N = Ga(C, f.current);
    return N && (o.current = N, s.current = C, document.body.appendChild(N), N.querySelectorAll(".table-resize-handler").forEach((L) => {
      L.addEventListener("mousedown", b);
    })), N;
  }, [b]), k = P((C) => {
    if (!ue(C)) return;
    o.current && (ke(o.current), o.current = null), C.classList.add("selected"), A(C) && (g(C), n && n(C));
  }, [n, A]), S = P((C) => {
    if (!d.current || !s.current || !i.current || !l.current) return;
    Ve(C);
    const { x: N, y: w, structure: L } = i.current, q = l.current, B = c.current, F = C.clientX, X = C.clientY;
    let Y = 0;
    switch (q) {
      case ae.COLUMN:
        Y = F - N;
        break;
      case ae.ROW:
        Y = X - w;
        break;
      case ae.TABLE_BOTTOM:
        Y = X - w;
        break;
      case ae.TABLE_RIGHT:
        Y = F - N;
        break;
    }
    const J = Wa({
      type: q,
      index: B,
      delta: Y,
      currentStructure: L,
      options: f.current
    });
    we(s.current, J), o.current && Nt(o.current, s.current);
  }, []), x = P((C) => {
    if (d.current) {
      if (Ve(C), s.current && i.current) {
        const N = {
          structure: i.current.structure
        }, w = {
          structure: pe(s.current)
        };
        (N.structure.width !== w.structure.width || N.structure.height !== w.structure.height || JSON.stringify(N.structure.columnWidths) !== JSON.stringify(w.structure.columnWidths) || JSON.stringify(N.structure.rowHeights) !== JSON.stringify(w.structure.rowHeights)) && m.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: w } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: N } }
        );
      }
      if (i.current = null, l.current = null, c.current = null, d.current = !1, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", x), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(N), t && t(s.current, pe(s.current));
      }
    }
  }, [t, m]), E = P((C) => {
    o.current && !o.current.contains(C.target) && y();
    const w = C.target.closest("table");
    if (w && ue(w)) {
      if (w === s.current)
        return;
      k(w);
    }
  }, [k, y]), T = P((C) => {
    if (C.key === "Delete" && s.current && !d.current) {
      C.preventDefault();
      const N = s.current;
      if (N.parentNode) {
        N.parentNode.removeChild(N), y();
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
    }
    C.key === "Escape" && s.current && y();
  }, [e, y]), _ = P(() => {
    o.current && s.current && Nt(o.current, s.current);
  }, []);
  return ne(() => {
    if (!e.current) return;
    const N = e.current.closest(".editor-viewport");
    return N && (N.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      N && N.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), ne(() => {
    if (!e.current) return;
    const C = e.current;
    return C.addEventListener("click", E), C.addEventListener("keydown", T), window.addEventListener("resize", _), () => {
      C.removeEventListener("click", E), C.removeEventListener("keydown", T), window.removeEventListener("resize", _), d.current && (document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", x), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && ke(o.current);
    };
  }, [e, E, T, _, S, x]), ne(() => {
    if (!e.current) return;
    const C = new MutationObserver((N) => {
      N.forEach((w) => {
        w.type === "childList" ? (w.removedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && ue(L) && L === p && y();
        }), w.addedNodes.forEach((L) => {
          if (L.nodeType !== Node.ELEMENT_NODE) return;
          if (ue(L)) {
            setTimeout(() => k(L), 50);
            return;
          }
          const q = L.querySelectorAll?.("table") || [];
          q.length > 0 && setTimeout(() => k(q[0]), 50);
        }), p && [...w.addedNodes, ...w.removedNodes].some(
          (q) => q.nodeType === Node.ELEMENT_NODE && q.tagName === "TR"
        ) && o.current && s.current && (ke(o.current), o.current = null, A(s.current))) : w.type === "attributes" && ["colspan", "rowspan"].includes(w.attributeName) && p && o.current && s.current && (ke(o.current), o.current = null, A(s.current));
      });
    });
    return C.observe(e.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => C.disconnect();
  }, [e, p, y, k, A]), null;
};
Wt.propTypes = {
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: v.func,
  onTableSelect: v.func,
  onTableDeselect: v.func,
  resizeOptions: v.shape({
    minColumnWidth: v.number,
    minRowHeight: v.number,
    maxColumnWidth: v.number,
    maxRowHeight: v.number,
    tableMinWidth: v.number,
    tableMinHeight: v.number,
    tableMaxWidth: v.number,
    tableMaxHeight: v.number
  })
};
Wt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Ut
};
const qe = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, Sn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, Ce = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, _n = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && Nt(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, On = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, Gt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = re({ top: 0, left: 0 }), [l, c] = re(!1), [f, d] = re("top"), [p, g] = re("left"), m = te(null), y = xe(), b = P(() => {
    if (!e) return "left";
    const B = window.getComputedStyle(e);
    return B.marginLeft === "auto" && B.marginRight === "auto" ? "center" : B.float === "right" ? "right" : (B.float === "left", "left");
  }, [e]);
  ne(() => {
    e && g(b());
  }, [e, b]);
  const A = P(() => {
    if (!e || !m.current) return;
    const B = e.getBoundingClientRect(), F = m.current.getBoundingClientRect(), X = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, Y = B.bottom >= 0 && B.top <= X.height && B.right >= 0 && B.left <= X.width;
    let J = "top", oe = 0, le = 0;
    if (Y) {
      const j = B.top - F.height - 10, $ = X.height - B.bottom - F.height - 10;
      $ > j && $ > 0 ? (J = "bottom", oe = B.bottom + 10) : (J = "top", oe = B.top - F.height - 10);
    } else
      J = "top", oe = 10;
    le = B.left + B.width / 2 - F.width / 2;
    const R = window.innerWidth, u = window.innerHeight;
    let M = Math.max(10, Math.min(le, R - F.width - 10)), D = Math.max(10, Math.min(oe, u - F.height - 10));
    i({ top: D, left: M }), d(J), c(!0);
  }, [e]);
  Pn(() => {
    A();
    const B = () => {
      A();
    };
    return window.addEventListener("scroll", B), window.addEventListener("resize", B), () => {
      window.removeEventListener("scroll", B), window.removeEventListener("resize", B), c(!1);
    };
  }, [e, A]), ne(() => {
    const B = (F) => {
      m.current && !m.current.contains(F.target) && F.target !== e && !e.contains(F.target) && n();
    };
    return document.addEventListener("mousedown", B), () => {
      document.removeEventListener("mousedown", B);
    };
  }, [e, n]);
  const k = P((B) => {
    if (!e || !Sn[B]) return;
    const F = On(e), X = p, Y = Sn[B];
    e.style.float = Y.float, e.style.margin = Y.margin, e.style.marginLeft = Y.marginLeft, e.style.marginRight = Y.marginRight, g(B), _n(e);
    const J = On(e);
    y.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: B, state: J } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: X, state: F } }
    ), t?.(B);
  }, [e, p, y, t]), S = P((B, F) => () => {
    if (!e) return;
    const X = B.includes("ROW"), Y = X ? r : a;
    if (Y == null || !F(e, Y)) return;
    o?.current && y.updateContinuousContent(o.current.innerHTML);
    const oe = X ? { element: e, index: Y } : { element: e, index: Y };
    y.recordOperation(
      { type: B, payload: oe },
      { type: B, payload: oe }
      // Reverse operation would be same type
    ), _n(e), requestAnimationFrame(() => A());
  }, [e, r, a, o, y, A]), x = ce(
    () => S(Ce.INSERT_ROW_ABOVE, qa),
    [S]
  ), E = ce(
    () => S(Ce.INSERT_ROW_BELOW, Ya),
    [S]
  ), T = ce(
    () => S(Ce.INSERT_COL_LEFT, Za),
    [S]
  ), _ = ce(
    () => S(Ce.INSERT_COL_RIGHT, Va),
    [S]
  ), C = ce(
    () => S(Ce.DELETE_ROW, Ka),
    [S]
  ), N = ce(
    () => S(Ce.DELETE_COL, Xa),
    [S]
  ), w = (B) => ({
    ...qe,
    background: B ? "#007bff" : "transparent",
    color: B ? "#fff" : "#333"
  }), L = ce(() => ({
    rowAction: { ...qe, background: "#28a745", color: "#fff" },
    colAction: { ...qe, background: "#0056b3", color: "#fff" },
    delete: { ...qe, background: "#dc3545", color: "#fff" },
    divider: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" }
  }), []), q = ce(() => ({
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
    pointerEvents: l ? "auto" : "none",
    minWidth: "100px",
    minHeight: "32px",
    opacity: l ? 1 : 0,
    visibility: l ? "visible" : "hidden",
    transition: "opacity 0.15s ease, visibility 0.15s ease"
  }), [s, l]);
  return !e || typeof document > "u" ? null : Nn(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: m,
        className: "table-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !l,
        style: q,
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "left" ? "active" : ""}`,
              onClick: () => k("left"),
              title: "Align Left",
              style: w(p === "left"),
              children: /* @__PURE__ */ h.jsx(Dt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "center" ? "active" : ""}`,
              onClick: () => k("center"),
              title: "Align Center",
              style: w(p === "center"),
              children: /* @__PURE__ */ h.jsx(Ht, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "right" ? "active" : ""}`,
              onClick: () => k("right"),
              title: "Align Right",
              style: w(p === "right"),
              children: /* @__PURE__ */ h.jsx(Bt, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: L.divider }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: x,
                title: "Insert Row Above",
                style: L.rowAction,
                children: /* @__PURE__ */ h.jsx(ns, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: E,
                title: "Insert Row Below",
                style: L.rowAction,
                children: /* @__PURE__ */ h.jsx(Ko, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: C,
                title: "Delete Row",
                style: L.delete,
                children: /* @__PURE__ */ h.jsx(kt, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: L.divider }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: T,
                title: "Insert Column Left",
                style: L.colAction,
                children: /* @__PURE__ */ h.jsx(Jo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: _,
                title: "Insert Column Right",
                style: L.colAction,
                children: /* @__PURE__ */ h.jsx(es, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: N,
                title: "Delete Column",
                style: L.delete,
                children: /* @__PURE__ */ h.jsx(kt, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Gt.propTypes = {
  tableElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onClose: v.func.isRequired,
  selectedRowIndex: v.number,
  selectedColIndex: v.number,
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Gt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Ja = ".table-cell-selected, .table-row-selected, .table-col-selected", kn = () => {
  Fa(Ja, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, qt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const n = te({
    selectedCells: /* @__PURE__ */ new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: !1,
    hasDragged: !1,
    startCell: null
  }), [r, a] = re(!1), [o, s] = re(!1), [i, l] = re(null), [c, f] = re(null), d = te(null), p = P(() => {
    n.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, a(!1), s(!1), l(null), f(null);
  }, []), g = P(() => {
    p(), kn(), d.current !== null && (d.current = null, t && t(null));
  }, [t, p]), m = P((T) => {
    const _ = T.closest("tr"), C = T.closest("table");
    if (!_ || !C) return null;
    const N = Array.from(C.rows).indexOf(_), w = Array.from(_.cells).indexOf(T);
    return { rowIndex: N, cellIndex: w, table: C };
  }, []), y = P((T) => {
    if (T.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const _ = Array.from(T), C = _[0], N = m(C);
    if (!N) return { mode: null, rowIndex: null, colIndex: null };
    const { table: w } = N;
    return _.filter((B) => {
      const F = m(B);
      return F && F.table === w && F.rowIndex === N.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: N.rowIndex, colIndex: null } : _.filter((B) => {
      const F = m(B);
      return F && F.table === w && F.cellIndex === N.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: N.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [m]), b = P((T, _, C, N, w) => {
    if (kn(), !(!w || !T)) {
      if (T === "row" && _ !== null) {
        const L = w.rows[_];
        L && Array.from(L.cells).forEach((q) => {
          q.classList.add("table-row-selected");
        });
      } else T === "column" && C !== null ? Array.from(w.rows).forEach((L) => {
        const q = L.cells[C];
        q && q.classList.add("table-col-selected");
      }) : T === "cells" && N.forEach((L) => {
        L.classList.add("table-cell-selected");
      });
      Ua();
    }
  }, []), A = P((T, _) => {
    const C = y(T);
    n.current.selectedCells = T, n.current.selectionMode = C.mode, n.current.selectedRowIndex = C.rowIndex, n.current.selectedColIndex = C.colIndex, n.current.currentTable = _, f(_), b(C.mode, C.rowIndex, C.colIndex, T, _);
    const N = C.mode ? {
      mode: C.mode,
      cells: T,
      rowIndex: C.rowIndex,
      colIndex: C.colIndex,
      table: _
    } : null;
    JSON.stringify(d.current) !== JSON.stringify(N) && (d.current = N, t && t(N));
  }, [y, b, t]), k = P((T) => {
    const _ = T.target.closest("td, th");
    if (!_) return;
    const C = m(_);
    C && (a(!0), l(_), f(C.table), s(!1));
  }, [m]), S = P((T) => {
    if (!r || !i) return;
    const _ = T.target.closest("td, th");
    if (!_ || !c || !Rn(c, _)) return;
    s(!0), Ve(T);
    const C = m(i), N = m(_);
    if (!C || !N || C.table !== N.table) return;
    const w = Math.min(C.rowIndex, N.rowIndex), L = Math.max(C.rowIndex, N.rowIndex), q = Math.min(C.cellIndex, N.cellIndex), B = Math.max(C.cellIndex, N.cellIndex), F = /* @__PURE__ */ new Set();
    for (let X = w; X <= L; X++) {
      const Y = c.rows[X];
      if (Y)
        for (let J = q; J <= B; J++) {
          const oe = Y.cells[J];
          oe && F.add(oe);
        }
    }
    A(F, c);
  }, [r, i, c, m, A]), x = P(() => {
    o || g(), a(!1), l(null);
  }, [o, g]), E = P((T) => {
    const _ = T.target.closest("td, th"), C = T.target.closest("table");
    if (!(_ && c && Rn(c, _))) {
      if (C && C !== c) {
        g();
        return;
      }
      C || g();
    }
  }, [g, c]);
  return ne(() => {
    if (!e.current) return;
    const T = e.current, _ = (N) => {
      N.target.closest("td, th") && k(N);
    }, C = (N) => {
      N.target.closest("td, th") && S(N);
    };
    return T.addEventListener("mousedown", _, !0), T.addEventListener("mouseenter", C, !0), document.addEventListener("mouseup", x), document.addEventListener("click", E), () => {
      T.removeEventListener("mousedown", _, !0), T.removeEventListener("mouseenter", C, !0), document.removeEventListener("mouseup", x), document.removeEventListener("click", E);
    };
  }, [e, k, S, x, E]), ne(() => {
    if (!e.current) return;
    const T = new MutationObserver((_) => {
      _.forEach((C) => {
        C.type === "childList" && c && !e.current.contains(c) && g();
      });
    });
    return T.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => T.disconnect();
  }, [e, g, c]), null;
};
qt.propTypes = {
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: v.func
};
qt.defaultProps = {
  onCellSelectionChange: void 0
};
const Qa = 50, Et = 50, ei = 50, ti = 100, ni = 300, Yt = Lt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: l = !0,
  showPageManager: c = !0
}, f) => {
  const d = Dn(), p = xe(), { pageSize: g, pageMargins: m, continuousContent: y, pageBoundaries: b, activePage: A, zoomLevel: k, canUndo: S, canRedo: x } = d, E = te(null), T = te(null), { currentFormat: _, formatText: C, updateCurrentFormatFromSelection: N } = to(), [w, L] = re(!1), [q, B] = re(null), [F, X] = re(!0), [Y, J] = re(!1), [oe, le] = re(null), [R, u] = re(null), [M, D] = re(null), {
    checkAndUpdateBoundaries: j,
    getCurrentPage: $,
    scrollToPage: U,
    updateBoundaries: I,
    triggerAutoReflow: G,
    removePageAndContent: K,
    removePageBreak: V,
    insertPageBreakAtBoundary: ie
  } = Co(g, T, k, m), H = ce(() => Me(g), [g]), [de, Ae] = re(!1), ge = te(null), Be = te(!1), De = te(!1), je = te(!1), ze = te(y), nt = P(() => {
    Be.current = !1;
    const O = Math.max(0, b.length - 1);
    p.setActivePage(O), setTimeout(() => {
      U(O, E);
    }, ei);
  }, [b.length, p, U]);
  ne(() => {
    if (!T.current || je.current) return;
    T.current.innerHTML = y, je.current = !0, ze.current = y;
    const O = setTimeout(() => {
      I();
    }, Qa);
    return () => clearTimeout(O);
  }, []), ne(() => {
    if (!T.current || !je.current) return;
    if (T.current.innerHTML !== y) {
      T.current.innerHTML = y;
      const se = setTimeout(() => {
        I(), Be.current && nt();
      }, Et);
      return ze.current = y, () => clearTimeout(se);
    }
  }, [y, I, nt]), ne(() => {
    s && je.current && s(y);
  }, [y, s]);
  const { restoreCursorPosition: rt, hasActiveCursorSelection: ot } = So({
    updateCurrentFormatFromSelection: N,
    editorRef: T
  }), fr = P((O) => {
    O !== y && p.updateContinuousContent(O), T.current && T.current.innerHTML !== O && (T.current.innerHTML = O), ze.current = O, setTimeout(() => {
      I();
    }, Et);
  }, [y, p, I]), st = P((O) => {
    if (!T.current || !O) return;
    ot() || rt(), document.execCommand("insertHTML", !1, O);
    const se = T.current.innerHTML;
    p.updateContinuousContent(se), ze.current = se, setTimeout(() => {
      I(), G(200);
    }, Et);
  }, [ot, rt, p, I, G]), Zt = ce(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => T.current ? T.current.innerHTML : y,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (T.current ? T.current.innerHTML : y).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => T.current ? wo(T.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (O) => {
      const se = Ze(O);
      fr(se);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (O) => {
      p.updatePageSize(O), I({ pageSize: O });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (O) => {
      p.updatePageMargins(O), I({ pageMargins: O });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (O) => {
      const se = Ze(O);
      st(se);
    }
  }), [y, p, I, G, ot, rt]);
  Nr(f, () => Zt, [Zt]);
  const at = P(() => {
    if (!T.current) return;
    let O = T.current.innerHTML;
    O = Ze(O), O !== T.current.innerHTML && (T.current.innerHTML = O);
    const se = y;
    if (se !== O) {
      const ut = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: O
      }, dt = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: se
      };
      p.recordOperation(ut, dt);
    }
    p.updateContinuousContent(O), j(), G(200);
    const Se = $(E);
    Se !== A && p.setActivePage(Se);
  }, [p, j, $, A, G, E, T, y]), pr = P((O) => {
    at();
  }, [at]), Vt = P((O) => {
    p.updatePageSize(O), I({ pageSize: O }), a && a(O);
  }, [p, I, a]), Kt = P((O) => {
    p.updatePageMargins(O), I({ pageMargins: O }), o && o(O);
  }, [p, I, o]), Xt = P((O) => {
    O < 0 || O >= b.length || (De.current = !0, p.setActivePage(O), U(O, E), setTimeout(() => {
      De.current = !1;
    }, ni), t && t(O));
  }, [p, U, t, b.length]), Jt = P(() => {
    const O = b.length + 1;
    ie(O) && (Be.current = !0, setTimeout(() => {
      Be.current && nt();
    }, 100)), n && n();
  }, [b.length, ie, p, U, n]), gr = P(() => {
    const O = window.getSelection();
    if (O && O.rangeCount > 0) {
      if (!T?.current) return;
      const ut = `<page-break data-page-break="true" contenteditable="false" data-page-number="${T.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ut), setTimeout(() => {
        I();
        const dt = $(E);
        p.setActivePage(dt);
      }, 150);
    }
  }, [I, $, p, E]), hr = P((O) => {
    st(O);
  }, [st]), mr = P((O) => {
    if (!O) return;
    V(O) && setTimeout(() => {
      const Se = $(E);
      p.setActivePage(Se);
    }, 200);
  }, [V, $, p, E]), Qt = P((O) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    K(O) && (p.setActivePage(0), r && r(O));
  }, [b.length, K, p, r]), yr = ce(() => ({
    handleZoomIn: () => p.zoomIn(),
    handleZoomOut: () => p.zoomOut(),
    handleZoomReset: () => p.resetZoom(),
    handleUndo: () => p.undo(),
    handleRedo: () => p.redo()
  }), [p]), { handleZoomIn: it, handleZoomOut: ct, handleZoomReset: lt, handleUndo: Tr, handleRedo: br } = yr;
  Ro(
    { handleZoomIn: it, handleZoomOut: ct, handleZoomReset: lt, handleUndo: Tr, handleRedo: br },
    { editorRef: T, containerRef: E }
  );
  const Er = P(() => {
    !E.current || !T.current || De.current || (ge.current && clearTimeout(ge.current), ge.current = setTimeout(() => {
      if (De.current) {
        ge.current = null;
        return;
      }
      const O = $(E);
      O !== A && O >= 0 && p.setActivePage(O), ge.current = null;
    }, ti));
  }, [$, A, p]), vr = ce(() => {
    if (!y) return 0;
    const se = y.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return se ? se.length : 0;
  }, [y]), xr = b.length || 1, wr = P((O) => {
    L(!0), B(O);
  }, []), en = P(() => {
    L(!1), B(null);
  }, []), Ar = P((O, se) => {
  }, []), Cr = P((O) => {
    O && O.mode === "row" ? (u(O.rowIndex), D(null)) : O && O.mode === "column" ? (D(O.colIndex), u(null)) : (u(null), D(null));
  }, []), Rr = P((O) => {
    J(!0), le(O);
  }, []), tn = P(() => {
    J(!1), le(null);
  }, []), Sr = P((O, se) => {
  }, []);
  return ne(() => () => {
    ge.current && clearTimeout(ge.current);
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ h.jsx(
      jt,
      {
        currentFormat: {
          ..._,
          imageSelected: w
        },
        onFormatText: C,
        onAddPageBreak: gr,
        onInsertImage: hr,
        canUndo: S,
        canRedo: x
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ h.jsx(
        fa,
        {
          editorView: null,
          isCollapsed: de,
          onToggle: () => Ae((O) => !O),
          wordCount: vr,
          pageCount: xr
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: E,
          onScroll: Er,
          children: /* @__PURE__ */ h.jsx(
            Na,
            {
              content: y,
              dimensions: H,
              pageSize: g,
              pageMargins: m,
              pageBoundaries: b,
              editorRef: T,
              onInput: pr,
              onContentChange: at,
              onClick: () => T.current?.focus(),
              onRemovePageBreak: mr,
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsx(
        $t,
        {
          editorRef: T,
          onImageSelect: wr,
          onImageDeselect: en,
          onImageResize: Ar,
          resizeOptions: {
            ...Re,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      /* @__PURE__ */ h.jsx(
        Wt,
        {
          editorRef: T,
          onTableSelect: Rr,
          onTableDeselect: tn,
          onTableResize: Sr
        }
      ),
      /* @__PURE__ */ h.jsx(
        qt,
        {
          editorRef: T,
          onCellSelectionChange: Cr
        }
      ),
      w && q && /* @__PURE__ */ h.jsx(
        Ft,
        {
          imageElement: q,
          initialPreserveAspectRatio: F,
          onAlignChange: (O) => {
          },
          onAspectRatioToggle: (O) => {
            X(O);
          },
          onDelete: () => {
            if (q) {
              const O = q.getAttribute("data-key");
              O && Io(O).catch((se) => {
                console.error("Failed to delete image from IndexedDB:", se);
              });
            }
          },
          onClose: en
        }
      ),
      Y && oe && /* @__PURE__ */ h.jsx(
        Gt,
        {
          tableElement: oe,
          onAlignChange: (O) => {
          },
          onClose: tn,
          selectedRowIndex: R,
          selectedColIndex: M,
          editorRef: T
        }
      ),
      c && /* @__PURE__ */ h.jsx("div", { className: "page-manager-sidebar", children: e ? Qe.cloneElement(e, {
        onNavigate: Xt,
        onAddPage: Jt,
        onDeletePage: Qt,
        onPageSizeChange: Vt,
        onPageMarginsChange: Kt,
        zoomLevel: k,
        canZoomIn: Ct(k),
        canZoomOut: Rt(k),
        onZoomIn: it,
        onZoomOut: ct,
        onZoomReset: lt
      }) : /* @__PURE__ */ h.jsx(
        La,
        {
          pageBoundaries: b,
          activePage: A,
          pageSize: g,
          pageMargins: m,
          zoomLevel: k,
          canZoomIn: Ct(k),
          canZoomOut: Rt(k),
          onNavigate: Xt,
          onAddPage: Jt,
          onDeletePage: Qt,
          onPageSizeChange: Vt,
          onPageMarginsChange: Kt,
          onZoomIn: it,
          onZoomOut: ct,
          onZoomReset: lt
        }
      ) })
    ] })
  ] });
});
Yt.displayName = "HtmlEditor";
Yt.propTypes = {
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
Yt.defaultProps = {
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
class dr extends Qe.Component {
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
dr.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
dr.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Xr as COMMON_FONT_SIZES,
  Qn as ColorPickerDropdown,
  et as DEFAULT_FONT_SIZE,
  Re as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Mn as DEFAULT_PAGE_SIZE,
  Ut as DEFAULT_TABLE_RESIZE_OPTIONS,
  ci as DocumentProvider,
  jt as EditorToolbar,
  dr as ErrorBoundary,
  $n as FONT_SIZE_MAP,
  Yt as HtmlEditor,
  $t as ImageResizeHandlers,
  Xe as PAGE_SIZES,
  La as PageManager,
  Na as PageView,
  z as RESIZE_HANDLERS,
  fa as Sidebar,
  ae as TABLE_RESIZE_HANDLERS,
  Wt as TableResizeHandlers,
  gi as applyImageDimensions,
  we as applyTableDimensions,
  fi as calculateResizeDimensions,
  Wa as calculateTableResizeDimensions,
  hi as clearImages,
  _o as createResizeOverlay,
  Ga as createTableResizeOverlay,
  Io as deleteImage,
  mi as getAllImageKeys,
  ii as getAvailablePageSizes,
  Mo as getImage,
  pi as getImageDimensions,
  Me as getPageDimensions,
  li as getPixelValue,
  ui as getPointValue,
  pe as getTableStructure,
  Ee as isResizableImage,
  ue as isResizableTable,
  di as isValidFontSize,
  ai as isValidPageSize,
  pa as logger,
  Qr as pixelsToPoints,
  Jr as pointsToPixels,
  Tt as removeResizeOverlay,
  ke as removeTableResizeOverlay,
  Lo as saveImage,
  Ot as updateResizeOverlay,
  Nt as updateTableResizeOverlay,
  Co as useContinuousReflow,
  Bn as useDocument,
  xe as useDocumentActions,
  Dn as useDocumentState,
  to as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
