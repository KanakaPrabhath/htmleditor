import nt, { createContext as _r, useContext as Or, useReducer as Sr, useMemo as ce, useState as oe, useCallback as P, useRef as ne, useEffect as re, forwardRef as It, createElement as wt, memo as kr, useLayoutEffect as Mn, useImperativeHandle as Pr } from "react";
import { v4 as Ht } from "uuid";
import { createPortal as In } from "react-dom";
function Nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fe = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Lr() {
  if (sn) return Oe;
  sn = 1;
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
  return Oe.Fragment = t, Oe.jsx = r, Oe.jsxs = r, Oe;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function Mr() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === L ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case E:
          return "Fragment";
        case k:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case O:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case y:
            return "Portal";
          case v:
            return l.displayName || "Context";
          case _:
            return (l._context.displayName || "Context") + ".Consumer";
          case b:
            var M = l.render;
            return l = l.displayName, l || (l = M.displayName || M.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case C:
            return M = l.displayName || null, M !== null ? M : e(l.type) || "Memo";
          case N:
            M = l._payload, l = l._init;
            try {
              return e(l(M));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function r(l) {
      try {
        t(l);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var D = M.error, j = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return D.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(l);
      }
    }
    function n(l) {
      if (l === E) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === N)
        return "<...>";
      try {
        var M = e(l);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = q.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (B.call(l, "key")) {
        var M = Object.getOwnPropertyDescriptor(l, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function i(l, M) {
      function D() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: D,
        configurable: !0
      });
    }
    function d() {
      var l = e(this.type);
      return Q[l] || (Q[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, M, D, j, $, U) {
      var I = D.ref;
      return l = {
        $$typeof: m,
        type: l,
        key: M,
        props: D,
        _owner: j
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, M, D, j, $, U) {
      var I = M.children;
      if (I !== void 0)
        if (j)
          if (F(I)) {
            for (j = 0; j < I.length; j++)
              u(I[j]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(I);
      if (B.call(M, "key")) {
        I = e(l);
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
      if (I = null, D !== void 0 && (r(D), I = "" + D), s(M) && (r(M.key), I = "" + M.key), "key" in M) {
        D = {};
        for (var K in M)
          K !== "key" && (D[K] = M[K]);
      } else D = M;
      return I && i(
        D,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        I,
        D,
        a(),
        $,
        U
      );
    }
    function u(l) {
      p(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === N && (l._payload.status === "fulfilled" ? p(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function p(l) {
      return typeof l == "object" && l !== null && l.$$typeof === m;
    }
    var g = nt, m = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, F = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var Y, Q = {}, se = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), le = J(n(o)), R = {};
    Se.Fragment = E, Se.jsx = function(l, M, D) {
      var j = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        l,
        M,
        D,
        !1,
        j ? Error("react-stack-top-frame") : se,
        j ? J(n(l)) : le
      );
    }, Se.jsxs = function(l, M, D) {
      var j = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        l,
        M,
        D,
        !0,
        j ? Error("react-stack-top-frame") : se,
        j ? J(n(l)) : le
      );
    };
  })()), Se;
}
var cn;
function Ir() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? Fe.exports = Lr() : Fe.exports = Mr()), Fe.exports;
}
var h = Ir();
const At = 100, Ct = 50, Rt = 200, ln = 5, _t = (e) => e < Rt, Ot = (e) => e > Ct, Hr = 96, he = (e) => Math.round(e * Hr), Xe = {
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
}, me = "NORMAL", Hn = (e = me) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: he(e.top),
      bottom: he(e.bottom),
      left: he(e.left),
      right: he(e.right)
    };
  const t = Xe[e] || Xe[me];
  return {
    top: he(t.top),
    bottom: he(t.bottom),
    left: he(t.left),
    right: he(t.right)
  };
}, Br = (e = me) => {
  const t = Hn(e);
  return t.top + t.bottom;
}, Dr = () => Object.keys(Xe), jr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Xe[e];
  return t ? t.label : "Unknown";
}, Je = {
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
}, Bn = "A4", Me = (e) => {
  const t = Je[e] || Je[Bn];
  return {
    width: t.width,
    height: t.height
  };
}, gi = (e) => Object.keys(Je).includes(e), hi = () => Object.keys(Je), Ie = Bn, Te = "<p><br></p>", zr = "continuous", Pe = (e, t = Ie) => ({
  id: Ht(),
  index: e,
  size: t,
  content: Te,
  images: [],
  isBreakPoint: !1
}), Ze = (e) => typeof e != "string" || e.trim() === "" ? Te : e, Dn = (e, t = Ie) => (e.length > 0 ? e : [Pe(0, t)]).map((n, a) => ({
  id: n.id || Ht(),
  index: a,
  size: n.size || t,
  content: Ze(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), $r = (e = Ie) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Me(e).height
}], Ue = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), St = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Ie, n = Dn(e.pages || [Pe(0, r)], r);
  return {
    id: Ht(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || zr,
    continuousContent: e.continuousContent || Te,
    pageBoundaries: e.pageBoundaries || $r(r),
    zoomLevel: e.zoomLevel || At,
    pageMargins: e.pageMargins || me,
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
}, kt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case W.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Te, pageSize: a = Ie } = t.payload || {}, o = { ...Pe(0, a), content: Ze(n) };
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
        updatedAt: r
      };
    case W.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: a } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[n] = {
        ...o[n],
        content: Ze(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case W.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Dn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : Ue(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case W.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(n, 0, Pe(n, e.pageSize));
      const o = a.map((i, d) => ({
        ...i,
        index: d,
        size: e.pageSize
      })), s = Ue(o);
      return {
        ...e,
        pages: o,
        activePage: n,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case W.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(n, 1);
      const o = a.map((d, c) => ({
        ...d,
        index: c,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = Ue(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: i,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case W.SET_ACTIVE_PAGE: {
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
    case W.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Me(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = Ue(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case W.RESET_DOCUMENT:
      return St();
    case W.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ze(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case W.UPDATE_PAGE_BOUNDARIES: {
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
    case W.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (n === "end")
        s = s + o + "<p><br></p>";
      else if (typeof n == "number") {
        const i = s.substring(0, n), d = s.substring(n);
        s = i + o + d;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const d = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && d.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < d.length) {
          const c = d[a], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", c.parentNode.insertBefore(f, c.nextSibling), f.parentNode.insertBefore(u, f.nextSibling), s = i.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: r
      };
    }
    case W.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, d) => {
        i.setAttribute("data-page-number", String(d + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: r
      };
    }
    case W.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Te).join(`
`) || Te : e.continuousContent && e.continuousContent !== Te && (o = [{ ...Pe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case W.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ct || n > Rt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ct} and ${Rt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case W.ZOOM_IN: {
      if (!_t(e.zoomLevel))
        return e;
      const n = e.zoomLevel + ln;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case W.ZOOM_OUT: {
      if (!Ot(e.zoomLevel))
        return e;
      const n = e.zoomLevel - ln;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case W.RESET_ZOOM:
      return e.zoomLevel === At ? e : {
        ...e,
        zoomLevel: At,
        updatedAt: r
      };
    case W.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case W.RECORD_OPERATION: {
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
    case W.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return n.inverseOperation && (o = kt(e, n.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, n],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case W.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return n.operation && (o = kt(e, n.operation)), {
        ...o,
        undoStack: [...e.undoStack, n],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: r
      };
    }
    case W.CLEAR_UNDO_REDO:
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
}, jn = _r(null), mi = ({ children: e, initialState: t = {} }) => {
  const [r, n] = Sr(kt, St(t)), a = ce(() => ({
    initializeDocument: (s) => n({ type: W.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => n({ type: W.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => n({ type: W.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => n({ type: W.UPDATE_PAGES, payload: s }),
    addPage: (s) => n({ type: W.ADD_PAGE, payload: s }),
    deletePage: (s) => n({ type: W.DELETE_PAGE, payload: s }),
    setActivePage: (s) => n({ type: W.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => n({ type: W.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => n({ type: W.RESET_DOCUMENT }),
    updateContinuousContent: (s) => n({ type: W.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => n({ type: W.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => n({ type: W.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => n({ type: W.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => n({ type: W.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => n({ type: W.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => n({ type: W.ZOOM_IN }),
    zoomOut: () => n({ type: W.ZOOM_OUT }),
    resetZoom: () => n({ type: W.RESET_ZOOM }),
    updatePageMargins: (s) => n({ type: W.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, i) => n({
      type: W.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: i }
    }),
    undo: () => n({ type: W.UNDO }),
    redo: () => n({ type: W.REDO }),
    clearUndoRedo: () => n({ type: W.CLEAR_UNDO_REDO })
  }), []), o = ce(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ h.jsx(jn.Provider, { value: o, children: e });
}, zn = () => {
  const e = Or(jn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, $n = () => {
  const { state: e } = zn();
  return e;
}, xe = () => {
  const { actions: e } = zn();
  return e;
};
var We = { exports: {} }, Ge = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Fr() {
  if (un) return ee;
  un = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function _(b) {
    if (typeof b == "object" && b !== null) {
      var T = b.$$typeof;
      switch (T) {
        case t:
          switch (b = b.type, b) {
            case d:
            case c:
            case n:
            case o:
            case a:
            case u:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case i:
                case f:
                case m:
                case g:
                case s:
                  return b;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function v(b) {
    return _(b) === c;
  }
  return ee.AsyncMode = d, ee.ConcurrentMode = c, ee.ContextConsumer = i, ee.ContextProvider = s, ee.Element = t, ee.ForwardRef = f, ee.Fragment = n, ee.Lazy = m, ee.Memo = g, ee.Portal = r, ee.Profiler = o, ee.StrictMode = a, ee.Suspense = u, ee.isAsyncMode = function(b) {
    return v(b) || _(b) === d;
  }, ee.isConcurrentMode = v, ee.isContextConsumer = function(b) {
    return _(b) === i;
  }, ee.isContextProvider = function(b) {
    return _(b) === s;
  }, ee.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ee.isForwardRef = function(b) {
    return _(b) === f;
  }, ee.isFragment = function(b) {
    return _(b) === n;
  }, ee.isLazy = function(b) {
    return _(b) === m;
  }, ee.isMemo = function(b) {
    return _(b) === g;
  }, ee.isPortal = function(b) {
    return _(b) === r;
  }, ee.isProfiler = function(b) {
    return _(b) === o;
  }, ee.isStrictMode = function(b) {
    return _(b) === a;
  }, ee.isSuspense = function(b) {
    return _(b) === u;
  }, ee.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === o || b === a || b === u || b === p || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === g || b.$$typeof === s || b.$$typeof === i || b.$$typeof === f || b.$$typeof === E || b.$$typeof === A || b.$$typeof === k || b.$$typeof === y);
  }, ee.typeOf = _, ee;
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
var dn;
function Ur() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function _(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === n || H === c || H === o || H === a || H === u || H === p || typeof H == "object" && H !== null && (H.$$typeof === m || H.$$typeof === g || H.$$typeof === s || H.$$typeof === i || H.$$typeof === f || H.$$typeof === E || H.$$typeof === A || H.$$typeof === k || H.$$typeof === y);
    }
    function v(H) {
      if (typeof H == "object" && H !== null) {
        var ue = H.$$typeof;
        switch (ue) {
          case t:
            var we = H.type;
            switch (we) {
              case d:
              case c:
              case n:
              case o:
              case a:
              case u:
                return we;
              default:
                var fe = we && we.$$typeof;
                switch (fe) {
                  case i:
                  case f:
                  case m:
                  case g:
                  case s:
                    return fe;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var b = d, T = c, O = i, C = s, N = t, w = f, L = n, q = m, B = g, F = r, J = o, Y = a, Q = u, se = !1;
    function le(H) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(H) || v(H) === d;
    }
    function R(H) {
      return v(H) === c;
    }
    function l(H) {
      return v(H) === i;
    }
    function M(H) {
      return v(H) === s;
    }
    function D(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function j(H) {
      return v(H) === f;
    }
    function $(H) {
      return v(H) === n;
    }
    function U(H) {
      return v(H) === m;
    }
    function I(H) {
      return v(H) === g;
    }
    function G(H) {
      return v(H) === r;
    }
    function K(H) {
      return v(H) === o;
    }
    function V(H) {
      return v(H) === a;
    }
    function ie(H) {
      return v(H) === u;
    }
    te.AsyncMode = b, te.ConcurrentMode = T, te.ContextConsumer = O, te.ContextProvider = C, te.Element = N, te.ForwardRef = w, te.Fragment = L, te.Lazy = q, te.Memo = B, te.Portal = F, te.Profiler = J, te.StrictMode = Y, te.Suspense = Q, te.isAsyncMode = le, te.isConcurrentMode = R, te.isContextConsumer = l, te.isContextProvider = M, te.isElement = D, te.isForwardRef = j, te.isFragment = $, te.isLazy = U, te.isMemo = I, te.isPortal = G, te.isProfiler = K, te.isStrictMode = V, te.isSuspense = ie, te.isValidElementType = _, te.typeOf = v;
  })()), te;
}
var fn;
function Fn() {
  return fn || (fn = 1, process.env.NODE_ENV === "production" ? Ge.exports = Fr() : Ge.exports = Ur()), Ge.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gt, pn;
function Wr() {
  if (pn) return gt;
  pn = 1;
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
      var d = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gt = a() ? Object.assign : function(o, s) {
    for (var i, d = n(o), c, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var u in i)
        t.call(i, u) && (d[u] = i[u]);
      if (e) {
        c = e(i);
        for (var p = 0; p < c.length; p++)
          r.call(i, c[p]) && (d[c[p]] = i[c[p]]);
      }
    }
    return d;
  }, gt;
}
var ht, gn;
function Bt() {
  if (gn) return ht;
  gn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ht = e, ht;
}
var mt, hn;
function Un() {
  return hn || (hn = 1, mt = Function.call.bind(Object.prototype.hasOwnProperty)), mt;
}
var yt, mn;
function Gr() {
  if (mn) return yt;
  mn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Bt(), r = {}, n = /* @__PURE__ */ Un();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, d, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var u;
          try {
            if (typeof o[f] != "function") {
              var p = Error(
                (d || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            u = o[f](s, f, d, i, null, t);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && e(
            (d || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + i + " type: " + u.message + (g ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, yt = a, yt;
}
var Tt, yn;
function qr() {
  if (yn) return Tt;
  yn = 1;
  var e = Fn(), t = Wr(), r = /* @__PURE__ */ Bt(), n = /* @__PURE__ */ Un(), a = /* @__PURE__ */ Gr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var d = "Warning: " + i;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Tt = function(i, d) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(R) {
      var l = R && (c && R[c] || R[f]);
      if (typeof l == "function")
        return l;
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
      arrayOf: _,
      element: v(),
      elementType: b(),
      instanceOf: T,
      node: w(),
      objectOf: C,
      oneOf: O,
      oneOfType: N,
      shape: q,
      exact: B
    };
    function m(R, l) {
      return R === l ? R !== 0 || 1 / R === 1 / l : R !== R && l !== l;
    }
    function y(R, l) {
      this.message = R, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function E(R) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, M = 0;
      function D($, U, I, G, K, V, ie) {
        if (G = G || p, V = V || I, ie !== r) {
          if (d) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = G + ":" + I;
            !l[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ue] = !0, M++);
          }
        }
        return U[I] == null ? $ ? U[I] === null ? new y("The " + K + " `" + V + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new y("The " + K + " `" + V + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : R(U, I, G, K, V);
      }
      var j = D.bind(null, !1);
      return j.isRequired = D.bind(null, !0), j;
    }
    function A(R) {
      function l(M, D, j, $, U, I) {
        var G = M[D], K = Y(G);
        if (K !== R) {
          var V = Q(G);
          return new y(
            "Invalid " + $ + " `" + U + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return E(l);
    }
    function k() {
      return E(s);
    }
    function _(R) {
      function l(M, D, j, $, U) {
        if (typeof R != "function")
          return new y("Property `" + U + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var I = M[D];
        if (!Array.isArray(I)) {
          var G = Y(I);
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an array."));
        }
        for (var K = 0; K < I.length; K++) {
          var V = R(I, K, j, $, U + "[" + K + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return E(l);
    }
    function v() {
      function R(l, M, D, j, $) {
        var U = l[M];
        if (!i(U)) {
          var I = Y(U);
          return new y("Invalid " + j + " `" + $ + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(R);
    }
    function b() {
      function R(l, M, D, j, $) {
        var U = l[M];
        if (!e.isValidElementType(U)) {
          var I = Y(U);
          return new y("Invalid " + j + " `" + $ + "` of type " + ("`" + I + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(R);
    }
    function T(R) {
      function l(M, D, j, $, U) {
        if (!(M[D] instanceof R)) {
          var I = R.name || p, G = le(M[D]);
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return E(l);
    }
    function O(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(M, D, j, $, U) {
        for (var I = M[D], G = 0; G < R.length; G++)
          if (m(I, R[G]))
            return null;
        var K = JSON.stringify(R, function(ie, H) {
          var ue = Q(H);
          return ue === "symbol" ? String(H) : H;
        });
        return new y("Invalid " + $ + " `" + U + "` of value `" + String(I) + "` " + ("supplied to `" + j + "`, expected one of " + K + "."));
      }
      return E(l);
    }
    function C(R) {
      function l(M, D, j, $, U) {
        if (typeof R != "function")
          return new y("Property `" + U + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an object."));
        for (var K in I)
          if (n(I, K)) {
            var V = R(I, K, j, $, U + "." + K, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return E(l);
    }
    function N(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < R.length; l++) {
        var M = R[l];
        if (typeof M != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(M) + " at index " + l + "."
          ), s;
      }
      function D(j, $, U, I, G) {
        for (var K = [], V = 0; V < R.length; V++) {
          var ie = R[V], H = ie(j, $, U, I, G, r);
          if (H == null)
            return null;
          H.data && n(H.data, "expectedType") && K.push(H.data.expectedType);
        }
        var ue = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new y("Invalid " + I + " `" + G + "` supplied to " + ("`" + U + "`" + ue + "."));
      }
      return E(D);
    }
    function w() {
      function R(l, M, D, j, $) {
        return F(l[M]) ? null : new y("Invalid " + j + " `" + $ + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return E(R);
    }
    function L(R, l, M, D, j) {
      return new y(
        (R || "React class") + ": " + l + " type `" + M + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function q(R) {
      function l(M, D, j, $, U) {
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var K in R) {
          var V = R[K];
          if (typeof V != "function")
            return L(j, $, U, K, Q(V));
          var ie = V(I, K, j, $, U + "." + K, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return E(l);
    }
    function B(R) {
      function l(M, D, j, $, U) {
        var I = M[D], G = Y(I);
        if (G !== "object")
          return new y("Invalid " + $ + " `" + U + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        var K = t({}, M[D], R);
        for (var V in K) {
          var ie = R[V];
          if (n(R, V) && typeof ie != "function")
            return L(j, $, U, V, Q(ie));
          if (!ie)
            return new y(
              "Invalid " + $ + " `" + U + "` key `" + V + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(M[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var H = ie(I, V, j, $, U + "." + V, r);
          if (H)
            return H;
        }
        return null;
      }
      return E(l);
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
          var l = u(R);
          if (l) {
            var M = l.call(R), D;
            if (l !== R.entries) {
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
    function J(R, l) {
      return R === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function Y(R) {
      var l = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : J(l, R) ? "symbol" : l;
    }
    function Q(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var l = Y(R);
      if (l === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function se(R) {
      var l = Q(R);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function le(R) {
      return !R.constructor || !R.constructor.name ? p : R.constructor.name;
    }
    return g.checkPropTypes = a, g.resetWarningCache = a.resetWarningCache, g.PropTypes = g, g;
  }, Tt;
}
var Et, Tn;
function Yr() {
  if (Tn) return Et;
  Tn = 1;
  var e = /* @__PURE__ */ Bt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Et = function() {
    function n(s, i, d, c, f, u) {
      if (u !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, Et;
}
var En;
function Zr() {
  if (En) return We.exports;
  if (En = 1, process.env.NODE_ENV !== "production") {
    var e = Fn(), t = !0;
    We.exports = /* @__PURE__ */ qr()(e.isElement, t);
  } else
    We.exports = /* @__PURE__ */ Yr()();
  return We.exports;
}
var Vr = /* @__PURE__ */ Zr();
const x = /* @__PURE__ */ Nr(Vr), Wn = {
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
}, Kr = [
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
], rt = "16px", Xr = (e) => Math.round(e * 96 / 72), Jr = (e) => Math.round(e * 72 / 96 * 2) / 2, yi = (e) => {
  const t = Object.values(Wn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Xr(e)}px`;
}, Ti = (e) => {
  const t = parseInt(e), r = Object.values(Wn).find((n) => n.px === t);
  return r ? r.pt : Jr(t);
}, Ei = (e) => {
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
}, Qr = {
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
}, bn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: rt,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, eo = () => {
  const [e, t] = oe(bn), r = xe(), n = P((g, m, y = null) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const A = E.getRangeAt(0);
      if (!A.toString())
        return t((_) => ({ ..._, [g]: m })), !1;
      try {
        const _ = document.createElement("span");
        _.style[g] = m;
        const v = A.extractContents();
        return _.appendChild(v), A.insertNode(_), A.selectNodeContents(_), E.removeAllRanges(), E.addRange(A), t((b) => ({ ...b, [g]: m })), !0;
      } catch {
        if (y) {
          const _ = g === "fontSize" ? Qr[m] || "3" : m;
          return document.execCommand(y, !1, _), t((v) => ({ ...v, [g]: m })), !0;
        }
        return !1;
      }
    } catch (E) {
      return console.warn(`[useFormatting] Style application failed for ${g}:`, E), !1;
    }
  }, []), a = P((g) => n("fontFamily", g, "fontName"), [n]), o = P((g) => n("fontSize", g, "fontSize"), [n]), s = P((g) => n("color", g, "foreColor"), [n]), i = P((g) => {
    t((m) => ({
      ...m,
      alignLeft: g === "left",
      alignCenter: g === "center",
      alignRight: g === "right",
      alignJustify: g === "justify"
    }));
  }, []), d = P((g) => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return !1;
      const y = m.getRangeAt(0), E = y.toString(), k = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[g];
      if (!k)
        return !1;
      if (!E) {
        const v = y.startContainer, b = v.nodeType === Node.TEXT_NODE ? v.parentElement : v, T = Ne(b) || ro();
        return T && (T.style.textAlign = k, i(k)), !0;
      }
      const _ = no(y);
      if (_.length === 0) {
        const v = document.createElement("p");
        v.style.textAlign = k;
        const b = y.extractContents();
        v.appendChild(b), y.insertNode(v), y.selectNodeContents(v), m.removeAllRanges(), m.addRange(y);
      } else
        _.forEach((v) => {
          v.style.textAlign = k;
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
      const y = m.getRangeAt(0), E = document.createElement("div");
      if (E.innerHTML = g, Array.from(E.children).some(
        (k) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(k.tagName)
      )) {
        const k = y.startContainer, _ = k.nodeType === Node.TEXT_NODE ? k.parentElement : k, v = Ne(_);
        if (v && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(v.tagName)) {
          const b = v.tagName.toLowerCase();
          if (y.startOffset === 0 && (k === v || k.nodeType === Node.TEXT_NODE && k === v.firstChild))
            v.parentNode.insertBefore(E, v);
          else if (y.startOffset === k.textContent?.length && k === v.lastChild && y.endOffset === k.textContent?.length) {
            const C = v.nextSibling;
            C ? v.parentNode.insertBefore(E, C) : v.parentNode.appendChild(E);
          } else {
            const C = y.extractContents(), N = document.createTextNode(""), w = document.createElement(b);
            w.appendChild(N), w.appendChild(C);
            const L = v.parentNode;
            L.insertBefore(E, v.nextSibling), L.insertBefore(w, E.nextSibling), !v.textContent.trim() && v.children.length === 0 && L.removeChild(v);
          }
        } else
          y.insertNode(E);
        y.setStartAfter(E), y.setEndAfter(E), m.removeAllRanges(), m.addRange(y);
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
        r.undo();
        return;
      }
      if (g === "redo") {
        r.redo();
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
        d(g);
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
          t((E) => ({ ...E, headingLevel: m }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${g}":`, y);
    }
  }, [o, a, d, c, r]), u = P(() => {
    try {
      const g = window.getSelection();
      if (!g || g.rangeCount === 0)
        return;
      const m = g.getRangeAt(0), y = m.toString();
      let E = rt, A = "Arial", k = "#000000", _ = "p", v = "left";
      if (y) {
        const T = m.startContainer, O = T.nodeType === Node.TEXT_NODE ? T.parentElement : T;
        if (O) {
          const C = window.getComputedStyle(O), N = C.fontSize, w = C.fontFamily;
          N && N.endsWith("px") && (E = N), w && w !== "serif" && (A = w.split(",")[0].replace(/['"]/g, "").trim());
          const L = C.color;
          L && L !== "rgb(0, 0, 0)" && L !== "#000000" && (L.startsWith("rgb") ? k = to(L) : k = L);
          const q = Ne(O);
          if (q) {
            const B = q.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(B) && (_ = B);
            const J = window.getComputedStyle(q).textAlign;
            ["left", "center", "right", "justify"].includes(J) && (v = J);
          }
        }
      }
      const b = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: v === "left",
        alignCenter: v === "center",
        alignRight: v === "right",
        alignJustify: v === "justify",
        fontFamily: A,
        fontSize: E,
        fontColor: k,
        headingLevel: _
      };
      t((T) => ({
        ...T,
        ...b
      }));
    } catch (g) {
      console.warn("[useFormatting] Error updating format from selection:", g);
    }
  }, []), p = P(() => {
    t(bn);
  }, []);
  return {
    currentFormat: e,
    formatText: f,
    resetFormat: p,
    updateCurrentFormatFromSelection: u
  };
};
function to(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function Ne(e) {
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
function no(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = Ne(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = Ne(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (d) => {
        const c = d.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(c) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function ro() {
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
const ye = 'page-break, [data-page-break="true"]', oo = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Me(r), a = e.querySelectorAll(ye), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((d, c) => {
    const u = d.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: u,
      height: n.height
    });
  }), o;
}, Gn = (e, t = 100, r = me) => {
  const n = Me(e), a = Br(r), o = n.height - a, s = t / 100;
  return o / s;
}, so = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(ye);
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
}, xn = (e) => {
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
}, ao = (e) => {
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
}, io = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, co = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const d = Gn(r, n, a) * (t - 1), c = Array.from(e.children);
    let f = 0, u = null;
    for (let p = 0; p < c.length; p++) {
      const g = c[p];
      if (g.tagName === "PAGE-BREAK" || g.getAttribute("data-page-break") === "true")
        continue;
      const m = ao(g);
      if (f + m > d) {
        u = g;
        break;
      }
      f += m;
    }
    if (u) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), u.parentNode.insertBefore(p, u), o) {
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
}, lo = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const d = Array.from(e.querySelectorAll(ye));
    if (t > d.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
    let f = !1, u = [], p = null;
    if (t === 0) {
      const m = d[0];
      if (!m)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let y = e.firstChild;
      for (; y && y !== m; )
        u.push(y), y = y.nextSibling;
      p = m;
    } else {
      const m = d[t - 1];
      if (!m)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const y = d[t];
      let E = m.nextSibling;
      for (; E && E !== y; )
        u.push(E), E = E.nextSibling;
      p = m;
    }
    if (c && c.rangeCount > 0) {
      const y = c.getRangeAt(0).startContainer;
      for (const E of u)
        if (E.contains(y) || E === y) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), u.forEach((m) => {
      m.parentNode && m.remove();
    }), e.querySelectorAll(ye).forEach((m, y) => {
      m.setAttribute("data-page-number", String(y + 2));
    }), f && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const m = e.innerHTML;
      n(m);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (d) {
    return console.error("[removePageAndContent] Failed to remove page:", d), !1;
  }
}, uo = (e) => {
  if (e)
    try {
      e.querySelectorAll(ye).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, fo = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), uo(t), r) {
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
}, po = 200, go = 50, vn = 3, ho = 20, qn = (e) => {
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
}, mo = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = qn(o);
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
}, yo = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const d = Gn(t, r, n);
    let c = xn(e), f = !1, u = 0;
    for (let p = 0; p < c.length && u < vn; p++) {
      const g = c[p], m = mo(g, d);
      if (m && m.overflowIndex > 0) {
        let y = 0;
        for (let _ = 0; _ < g.length; _++) {
          const v = g[_];
          v && v.getBoundingClientRect && (y += qn(v));
        }
        if (y - d < ho)
          continue;
        const A = p + 2;
        io(m.overflowElement, A) && (f = !0, u++, c = xn(e));
      }
    }
    if (f) {
      if (a) {
        const p = e.innerHTML;
        a(p);
      }
      setTimeout(() => {
        o && o(), u >= vn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, go);
    }
    return f;
  } catch (d) {
    return console.warn("[checkAndReflow] Reflow failed:", d), !1;
  } finally {
    s.current = !1;
  }
}, To = (e, t, r = po) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, Eo = 400, Yn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(ye)[t - 1];
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
}, bo = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(ye)[r - 1];
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
        n ? n(r) : Yn(t, r);
      }, Eo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, xo = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, vo = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(ye);
  for (const f of a)
    if (r.comparePoint(f, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), d = i.length, c = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: c,
    charOffset: d
  };
}, wo = 300, Ao = (e, t, r = 100, n = "NARROW") => {
  const a = xe(), o = ne(null), s = ne(null), i = ne(e), d = ne(r), c = ne(n), f = ne(!1);
  re(() => {
    i.current = e;
  }, [e]), re(() => {
    d.current = r;
  }, [r]), re(() => {
    c.current = n;
  }, [n]), re(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const u = P((T = {}) => t?.current ? oo(t.current, T) : [], [t]), p = P((T = {}) => {
    const O = u(T);
    return a.updatePageBoundaries(O), O;
  }, [u, a]), g = P((T = {}) => {
    const O = typeof T.delay == "number" ? T.delay : wo;
    xo(p, o, T, O);
  }, [p]), m = P(() => {
    t?.current && yo(
      t.current,
      i.current,
      d.current,
      c.current,
      a.updateContinuousContent,
      p,
      f,
      m
    );
  }, [t, a, p]), y = P((T) => {
    To(m, s, T);
  }, [m]), E = P((T) => !T?.current || !t?.current ? 0 : so(T.current, t.current), [t]), A = P((T) => {
    t?.current && Yn(t.current, T);
  }, [t]), k = P((T, O) => {
    if (!O?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    bo(O.current, t.current, T, A);
  }, [t, A]), _ = P(async (T) => t?.current ? co(
    t.current,
    T,
    i.current,
    d.current,
    c.current,
    a.updateContinuousContent,
    p
  ) : !1, [t, a, p]), v = P((T) => t?.current ? lo(
    t.current,
    T,
    u,
    a.updateContinuousContent,
    p,
    A,
    m
  ) : !1, [t, u, a, p, A, m]), b = P((T) => t?.current ? fo(
    T,
    t.current,
    a.updateContinuousContent,
    p,
    m
  ) : !1, [t, a, p, m]);
  return re(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ce(() => ({
    calculatePageBoundaries: u,
    checkAndUpdateBoundaries: g,
    updateBoundaries: p,
    getCurrentPage: E,
    scrollToPage: k,
    positionCursorAtPage: A,
    checkAndReflow: m,
    triggerAutoReflow: y,
    removePageAndContent: v,
    removePageBreak: b,
    insertPageBreakAtBoundary: _,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    u,
    g,
    p,
    E,
    k,
    A,
    m,
    y,
    v,
    b,
    _
  ]);
}, Co = (e, t) => {
  const { handleZoomIn: r, handleZoomOut: n, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: i, containerRef: d } = t;
  re(() => {
    const c = (f) => {
      if (f.ctrlKey || f.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(f.key) && f.preventDefault();
        const u = document.activeElement === i.current, p = document.activeElement === d.current, g = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (u || p || !g)
          switch (f.key) {
            case "+":
            case "=":
              r();
              break;
            case "-":
            case "_":
              n();
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
  }, [r, n, a, o, s, i, d]);
}, Ro = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const r = ne(null), n = P(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (r.current)
      try {
        o.removeAllRanges(), o.addRange(r.current);
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
  return re(() => {
    const o = () => {
      if (e(), t.current) {
        const i = window.getSelection();
        if (i.rangeCount > 0) {
          const d = i.getRangeAt(0);
          d.collapsed && t.current.contains(d.commonAncestorContainer) && (r.current = d.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), r.current && t.current)
        try {
          const i = window.getSelection();
          i.removeAllRanges(), i.addRange(r.current);
        } catch (i) {
          console.warn("[handleFocus] Failed to restore cursor:", i);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: n,
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
function bi({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Re
}) {
  const d = n - t, c = a - r;
  let f = o, u = s;
  switch (e) {
    case z.TOP_LEFT:
      f = Math.max(i.minWidth, o - d), u = Math.max(i.minHeight, s - c);
      break;
    case z.TOP_RIGHT:
      f = Math.max(i.minWidth, o + d), u = Math.max(i.minHeight, s - c);
      break;
    case z.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - d), u = Math.max(i.minHeight, s + c);
      break;
    case z.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + d), u = Math.max(i.minHeight, s + c);
      break;
    case z.TOP:
      u = Math.max(i.minHeight, s - c);
      break;
    case z.BOTTOM:
      u = Math.max(i.minHeight, s + c);
      break;
    case z.LEFT:
      f = Math.max(i.minWidth, o - d);
      break;
    case z.RIGHT:
      f = Math.max(i.minWidth, o + d);
      break;
    default:
      return { width: f, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = o / s;
    [
      z.TOP_LEFT,
      z.TOP_RIGHT,
      z.BOTTOM_LEFT,
      z.BOTTOM_RIGHT
    ].includes(e) ? f / p > u ? u = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, u * p) : [z.TOP, z.BOTTOM].includes(e) ? f = u * p : [z.LEFT, z.RIGHT].includes(e) && (u = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = f / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = u * (o / s))), f = Math.max(i.minWidth, f), u = Math.max(i.minHeight, u), {
    width: Math.round(f),
    height: Math.round(u)
  };
}
function Ee(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function xi(e) {
  return Ee(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function vi(e, { width: t, height: r }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function _o(e, t = Re) {
  if (!Ee(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(z).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = Oo(o), s.style.pointerEvents = "all", Zn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
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
function Zn(e, t, r, n) {
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
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case z.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case z.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case z.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Pt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Zn(a, o, r.width, r.height);
  });
}
function bt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const So = "html-editor-storage", ko = 1, de = "images";
function Po() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function He() {
  return new Promise((e, t) => {
    const r = indexedDB.open(So, ko);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(de) || a.createObjectStore(de, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function No(e) {
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
      const s = o.target.result, d = s.split(",")[1].length * 3 / 4;
      if (d > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const c = await He(), f = `editor-image-${Po()}`, p = c.transaction([de], "readwrite").objectStore(de), g = {
          key: f,
          dataUrl: s,
          size: d,
          type: e.type,
          timestamp: Date.now()
        }, m = p.add(g);
        m.onsuccess = () => {
          c.close(), t(f);
        }, m.onerror = () => {
          c.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (c) {
        r(c);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function Lo(e) {
  try {
    const t = await He();
    return new Promise((r, n) => {
      const s = t.transaction([de], "readonly").objectStore(de).get(e);
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
async function Mo(e) {
  try {
    const t = await He();
    return new Promise((r, n) => {
      const s = t.transaction([de], "readwrite").objectStore(de).delete(e);
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
async function wi() {
  try {
    const e = await He();
    return new Promise((t, r) => {
      const o = e.transaction([de], "readwrite").objectStore(de).clear();
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
async function Ai() {
  try {
    const e = await He();
    return new Promise((t, r) => {
      const o = e.transaction([de], "readonly").objectStore(de).getAllKeys();
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
const Vn = [
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
], Io = [
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
], Ho = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Bo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Kn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Ve(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Le(r) || "<p><br></p>";
}
function Do(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function jo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Vn.includes(r.tagName));
}
function zo(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      Vn.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Le(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${Bo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), d = Kn(o);
      if (s === "DIV") {
        const c = Le(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        jo(o) ? t.push(zo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = Do(o);
        t.push(`<${i}${d}>${c}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push($o(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Fo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Le(o);
        t.push(`<blockquote${d}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (Io.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (Ho.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Le(o);
        t.push(`<${i}${d}>${c}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function $o(e) {
  const t = e.tagName.toLowerCase(), r = Kn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Le(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Fo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), wn = (e) => {
  const t = Wo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Xn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Go = (e) => {
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
var qo = {
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
const Yo = It(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, d) => wt(
    "svg",
    {
      ref: d,
      ...qo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Xn("lucide", a),
      ...!o && !Go(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([c, f]) => wt(c, f)),
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
  const r = It(
    ({ className: n, ...a }, o) => wt(Yo, {
      ref: o,
      iconNode: t,
      className: Xn(
        `lucide-${Uo(wn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = wn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Vo = Z("arrow-down", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Xo = Z("arrow-left", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Qo = Z("arrow-right", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ts = Z("arrow-up", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], rs = Z("bold", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ss = Z("chevron-left", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], is = Z("chevron-right", as);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], ls = Z("file-check", cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Qe = Z("file-text", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], fs = Z("hash", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], gs = Z("heading-1", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], ms = Z("heading-2", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Ts = Z("heading-3", ys);
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
], bs = Z("image-upscale", Es);
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
], vs = Z("image", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], As = Z("italic", ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Rs = Z("link", Cs);
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
const Ss = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ks = Z("list-indent-increase", Ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Ns = Z("list-ordered", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Jn = Z("list", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
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
], Is = Z("palette", Ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Bs = Z("plus", Hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], js = Z("redo", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], $s = Z("scaling", zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Us = Z("settings", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Gs = Z("strikethrough", Ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ys = Z("table", qs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Dt = Z("text-align-center", Zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], jt = Z("text-align-end", Vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Xs = Z("text-align-justify", Ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], zt = Z("text-align-start", Js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Nt = Z("trash-2", Qs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], ta = Z("underline", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ra = Z("undo", na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], sa = Z("x", oa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ia = Z("zoom-in", aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], la = Z("zoom-out", ca), An = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), d = o.textContent.trim();
    return d ? {
      id: `${r}heading-${s}`,
      level: i,
      text: d,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, ua = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, da = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = $n(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: d, outline: c } = ce(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: An(i, 1, "continuous-")
      };
    let u = 0;
    const p = [];
    return o.forEach((g, m) => {
      u += ua(g.content), p.push(...An(g.content, m + 1, `page-${m}-`));
    }), { wordCount: u, outline: p };
  }, [o, r, n, i]), f = n !== void 0 ? n : o.length;
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
            /* @__PURE__ */ h.jsx(Qe, { size: 18 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ h.jsx(is, { size: 16 }) : /* @__PURE__ */ h.jsx(ss, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(ls, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: f })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(fs, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: d.toLocaleString() })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ h.jsx(Qe, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ h.jsxs("h3", { children: [
              /* @__PURE__ */ h.jsx(Jn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((u) => {
              const p = u.level === 1 ? gs : u.level === 2 ? ms : Ts;
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${u.level}`,
                  style: { marginLeft: `${(u.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ h.jsx(p, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ h.jsx("span", { className: "outline-text", children: u.text }),
                    /* @__PURE__ */ h.jsxs("span", { className: "outline-page", children: [
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
class fa {
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
const Cn = new fa("Editor"), Qn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), er = 32;
function tr(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * er}px`, e.dataset.indentLevel = String(n));
}
function pa(e, t) {
  tr(e, t);
}
function ga(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Qn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ha() {
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
      let c = i.parentElement;
      for (; c && c !== n; ) {
        if (c.tagName && Qn.has(c.tagName.toUpperCase())) {
          r.add(c);
          break;
        }
        c = c.parentElement;
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
function ma(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * er}px`, e.dataset.indentLevel = String(r));
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
function Lt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = ha();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = ga(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      pa(s, e);
      return;
    }
    e ? ma(s) : tr(s, !1);
  });
  try {
    const s = document.createRange(), i = (u) => u.nodeType === Node.TEXT_NODE ? u : document.createTreeWalker(
      u,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), d = (u) => {
      if (u.nodeType === Node.TEXT_NODE)
        return u;
      const p = document.createTreeWalker(
        u,
        NodeFilter.SHOW_TEXT,
        null
      );
      let g = null, m = p.nextNode();
      for (; m; )
        g = m, m = p.nextNode();
      return g;
    }, c = i(a);
    c ? s.setStart(c, 0) : s.setStart(a, 0);
    const f = d(o);
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
function ya(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Lt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const nr = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = oe(!1), o = ne(null), s = [
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
  re(() => {
    const c = (f) => {
      o.current && !o.current.contains(f.target) && a(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const i = (c) => {
    t(c), a(!1);
  }, d = (c) => {
    const f = c.target.value;
    t(f);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ h.jsx(
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
        children: /* @__PURE__ */ h.jsx(Is, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ h.jsxs("div", { className: "color-picker-palette", children: [
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
            onChange: d,
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
nr.propTypes = {
  currentColor: x.string,
  onColorSelect: x.func.isRequired,
  title: x.string
};
const Ta = [
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
], ba = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', $t = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (g, m, y, E = null, A = !1) => /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: g,
      className: E && e[E] ? "active" : "",
      disabled: A,
      title: y,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ h.jsx(m, { size: 16 })
    },
    y
  ), i = () => /* @__PURE__ */ h.jsx("div", { className: "toolbar-separator" }), d = async (g) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(g.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (g.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const y = await No(g), E = await Lo(y);
      if (E && n) {
        const A = `<img src="${E}" data-key="${y}" alt="Inserted image" />`;
        n(A);
      } else
        Cn.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (m) {
      Cn.error("Error uploading image", m);
    }
  }, c = () => {
    Lt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, f = () => {
    Lt(!0);
  }, u = () => {
    const g = prompt("Enter URL:");
    g && t("createLink", g);
  }, p = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), ra, "Undo", null, !a),
    s(() => t("redo"), js, "Redo", null, !o),
    i(),
    s(() => t("bold"), rs, "Bold", "bold"),
    s(() => t("italic"), As, "Italic", "italic"),
    s(() => t("underline"), ta, "Underline", "underline"),
    s(() => t("strikethrough"), Gs, "Strikethrough", "strikethrough"),
    i(),
    s(() => t("justifyLeft"), zt, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Dt, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), jt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Xs, "Justify", "alignJustify"),
    i(),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (g) => t("fontName", g.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Ta.map(({ value: g, label: m }) => /* @__PURE__ */ h.jsx("option", { value: g, children: m }, g))
      }
    ),
    /* @__PURE__ */ h.jsx(
      "select",
      {
        onChange: (g) => t("fontSize", g.target.value),
        value: e.fontSize || rt,
        title: "Font Size",
        children: Kr.map(({ value: g, label: m }) => /* @__PURE__ */ h.jsx("option", { value: g, children: m }, g))
      }
    ),
    /* @__PURE__ */ h.jsx(
      nr,
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
    s(() => t("insertUnorderedList"), Jn, "Bullet List"),
    s(() => t("insertOrderedList"), Ns, "Numbered List"),
    i(),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ h.jsx(ks, { size: 16 })
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
        onClick: u,
        title: "Insert Link",
        children: /* @__PURE__ */ h.jsx(Rs, { size: 16 })
      }
    ),
    s(() => t("insertHTML", ba), Ys, "Insert Table"),
    r && s(r, Qe, "Insert Page Break"),
    i(),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (g) => g.target.files[0] && d(g.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: p,
        title: "Insert Image",
        children: /* @__PURE__ */ h.jsx(vs, { size: 16 })
      }
    )
  ] });
};
$t.propTypes = {
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
    fontColor: x.string,
    headingLevel: x.string
  }).isRequired,
  onFormatText: x.func.isRequired,
  onAddPageBreak: x.func,
  onInsertImage: x.func,
  canUndo: x.bool,
  canRedo: x.bool
};
$t.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function xa(e) {
  return !e || typeof e != "string" ? e : Ve(e);
}
function va(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = xa(r) : r = wa(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function wa(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => Aa(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function Aa(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ca = 20, Ra = 20, Rn = 20, _n = -12, _a = {
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
  fontSize: rt,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, On = (e, t = !0) => {
  if (!e) return;
  const r = document.createRange(), n = window.getSelection();
  t ? (r.setStart(e, 0), r.collapse(!0)) : (r.selectNodeContents(e), r.collapse(!1)), n.removeAllRanges(), n.addRange(r);
}, Sa = (e, t, r) => !!((be(t) || be(r)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), ka = (e, t, r) => !!((e.key === "Backspace" || e.key === "Delete") && (be(t) || be(r))), be = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && be(e.parentElement) : !1, Ft = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: d,
  zoomLevel: c = 100,
  pageMargins: f = me
}) => {
  const u = ce(() => Hn(f), [f]), p = c / 100, g = P((v, b) => {
    if (!v) return !1;
    const T = v.getBoundingClientRect(), O = b - T.top;
    return O < u.top || O > T.height - u.bottom;
  }, [u.top, u.bottom]), m = P((v, b) => {
    b.preventDefault();
    const T = v.getBoundingClientRect(), O = b.clientX - T.left, C = b.clientY - T.top, N = T.width - Rn - Ca, w = _n, L = T.width - Rn, q = _n + Ra;
    O >= N && O <= L && C >= w && C <= q && d && d(v);
  }, [d]), y = P((v) => {
    v.preventDefault();
    const b = t.current.getBoundingClientRect();
    if (v.clientY - b.top < u.top) {
      const O = t.current.firstElementChild;
      O && O.tagName !== "PAGE-BREAK" && On(O, !0);
    } else {
      const O = t.current.lastElementChild;
      O && O.tagName !== "PAGE-BREAK" && On(O, !1);
    }
  }, [t, u.top]), E = P((v) => {
    const b = window.getSelection();
    if (!b || b.rangeCount === 0) return;
    const T = b.getRangeAt(0), { startContainer: O, endContainer: C } = T;
    if (Sa(v, O, C))
      return v.preventDefault(), !1;
    if (ya(v))
      return n && n(), !1;
    if (ka(v, O, C))
      return v.preventDefault(), !1;
    a && a(v);
  }, [a, n]), A = P((v) => {
    if (!t.current) return;
    const b = v.target;
    if (be(b)) {
      m(b, v);
      return;
    }
    if (g(t.current, v.clientY)) {
      y(v);
      return;
    }
    o && o(v);
  }, [t, o, m, y, g]), k = P((v) => {
    const b = window.getSelection();
    if (!b || b.rangeCount === 0) return;
    const T = b.getRangeAt(0), { startContainer: O } = T;
    if (be(O))
      return v.preventDefault(), !1;
  }, []), _ = P((v) => {
    const b = va(v);
    i && i(v, b);
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
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`
          },
          onInput: r,
          onKeyDown: E,
          onBeforeInput: k,
          onClick: A,
          onScroll: s,
          onPaste: _,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ft.propTypes = {
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
Ft.defaultProps = {
  zoomLevel: 100,
  pageMargins: me
};
const Pa = kr(Ft), rr = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = me,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: d,
  onDeletePage: c,
  onPageSizeChange: f,
  onPageMarginsChange: u,
  onZoomIn: p,
  onZoomOut: g,
  onZoomReset: m
} = {}) => {
  const y = Math.max(e?.length || 0, 1), E = (A) => {
    if (y <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c?.(A);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ h.jsx(Us, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: n,
              onChange: (A) => u?.(A.target.value),
              children: Dr().map((A) => /* @__PURE__ */ h.jsx("option", { value: A, children: jr(A) }, A))
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
          children: /* @__PURE__ */ h.jsx(la, { size: 12 })
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
          children: /* @__PURE__ */ h.jsx(ia, { size: 12 })
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
            /* @__PURE__ */ h.jsx(Qe, { size: 14 }),
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
          onClick: (_) => {
            _.stopPropagation(), E(k);
          },
          "aria-label": `Delete page ${k + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ h.jsx(sa, { size: 14 })
        }
      )
    ] }, A.id || `page-${k}`)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => d?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ h.jsx(Bs, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
rr.propTypes = {
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
const Na = nt.memo(rr), qe = 10, La = 300, Ma = 200;
function Ia(e) {
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
function Ha(e, t, r, n, a, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = r / n;
  return [
    z.TOP_LEFT,
    z.TOP_RIGHT,
    z.BOTTOM_LEFT,
    z.BOTTOM_RIGHT
  ].includes(a) ? e / s > t ? t = e / s : e = t * s : [z.TOP, z.BOTTOM].includes(a) ? e = t * s : [z.LEFT, z.RIGHT].includes(a) && (t = e / s), { width: e, height: t };
}
function Ba({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Re
}) {
  const d = n - t, c = a - r;
  let f = o, u = s;
  switch (e) {
    case z.TOP_LEFT:
      f = o - d, u = s - c;
      break;
    case z.TOP_RIGHT:
      f = o + d, u = s - c;
      break;
    case z.BOTTOM_LEFT:
      f = o - d, u = s + c;
      break;
    case z.BOTTOM_RIGHT:
      f = o + d, u = s + c;
      break;
    case z.TOP:
      u = s - c;
      break;
    case z.BOTTOM:
      u = s + c;
      break;
    case z.LEFT:
      f = o - d;
      break;
    case z.RIGHT:
      f = o + d;
      break;
    default:
      return { width: f, height: u };
  }
  return { width: f, height: u } = Ha(
    f,
    u,
    o,
    s,
    e,
    i
  ), i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && (u = f / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && (f = u * (o / s))), f = Math.max(i.minWidth, Math.min(i.maxWidth || f, f)), u = Math.max(i.minHeight, Math.min(i.maxHeight || u, u)), {
    width: Math.round(f),
    height: Math.round(u)
  };
}
function or(e, { width: t, height: r }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function Da(e, t, r) {
  or(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function ja(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, d = a || o, c = r.offsetWidth, f = r.offsetHeight, p = {
    // Increase width
    ">": d && s ? () => ({
      width: Math.min(n.maxWidth || 800, c + qe),
      height: f
    }) : null,
    // Decrease width
    "<": d && s ? () => ({
      width: Math.max(n.minWidth || 50, c - qe),
      height: f
    }) : null,
    // Increase height
    "+": d && s ? () => ({
      width: c,
      height: Math.min(n.maxHeight || 600, f + qe)
    }) : null,
    // Decrease height
    "-": d && s ? () => ({
      width: c,
      height: Math.max(n.minHeight || 50, f - qe)
    }) : null,
    // Reset to default
    r: d && !s ? () => ({ width: La, height: Ma }) : null
  }[i];
  if (p) {
    e.preventDefault();
    const g = p();
    return Da(t, r, g), !0;
  }
  return !1;
}
const Ut = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Re
}) => {
  const o = ne({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = ne(a), i = xe();
  re(() => {
    s.current = a;
  }, [a]);
  const d = P((E) => {
    if (!Ee(E)) return;
    o.current.overlay && (bt(o.current.overlay), o.current.overlay = null), E.classList.add("selected");
    const A = _o(E, s.current);
    A && (o.current.overlay = A, o.current.image = E, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((_) => {
      _.addEventListener("mousedown", f);
    }), r && r(E));
  }, [r]), c = P(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (bt(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, n && n();
  }, [n]), f = P((E) => {
    if (E.preventDefault(), E.stopPropagation(), !o.current.image) return;
    const A = E.currentTarget.dataset.handler, k = o.current.image.getBoundingClientRect(), _ = window.pageYOffset || document.documentElement.scrollTop, v = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: E.clientX,
      y: E.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: E.clientX - k.left - v,
      offsetY: E.clientY - k.top - _
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ia(A), document.addEventListener("mousemove", u), document.addEventListener("mouseup", p);
  }, []), u = P((E) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    E.preventDefault(), E.stopPropagation();
    const { x: A, y: k, width: _, height: v } = o.current.start, b = o.current.handler, T = E.clientX, O = E.clientY, C = Ba({
      handler: b,
      startX: A,
      startY: k,
      currentX: T,
      currentY: O,
      startWidth: _,
      startHeight: v,
      options: s.current
    });
    or(o.current.image, C), o.current.overlay && Pt(o.current.overlay, o.current.image);
  }, []), p = P((E) => {
    if (o.current.isResizing) {
      if (E.preventDefault(), E.stopPropagation(), o.current.image && o.current.start) {
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
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const A = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(A), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, i]), g = P((E) => {
    o.current.overlay && !o.current.overlay.contains(E.target) && c();
    const A = E.target;
    if (Ee(A)) {
      if (A === o.current.image)
        return;
      d(A);
    }
  }, [d, c]), m = P((E) => {
    if ((E.key === "Delete" || E.key === "Backspace") && o.current.image && !o.current.isResizing) {
      E.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), c();
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
    E.key === "Escape" && o.current.image && c(), o.current.image && !o.current.isResizing && ja(E, e, o.current.image, s.current);
  }, [e, c]), y = P(() => {
    o.current.overlay && o.current.image && Pt(o.current.overlay, o.current.image);
  }, []);
  return re(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", y), window.addEventListener("scroll", y)), () => {
      A && A.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
  }, [e, y]), re(() => {
    if (!e.current) return;
    const E = e.current;
    return E.addEventListener("click", g), E.addEventListener("keydown", m), window.addEventListener("resize", y), () => {
      E.removeEventListener("click", g), E.removeEventListener("keydown", m), window.removeEventListener("resize", y), o.current.isResizing && (document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && bt(o.current.overlay);
    };
  }, [e, g, m, y, u, p]), re(() => {
    if (!e.current) return;
    const E = new MutationObserver((A) => {
      A.forEach((k) => {
        k.type === "childList" && k.removedNodes.forEach((_) => {
          _.nodeType === Node.ELEMENT_NODE && Ee(_) && _ === o.current.image && c();
        });
      });
    });
    return E.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => E.disconnect();
  }, [e, c, d]), null;
};
Ut.propTypes = {
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
Ut.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Re
};
const sr = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, za = {
  ...sr,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, xt = (e) => ({
  ...sr,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), Wt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [d, c] = oe(!1), [f, u] = oe("top"), [p, g] = oe(o), m = ne(null), y = xe(), E = (w) => {
    w && requestAnimationFrame(() => {
      const L = document.querySelector(".image-resize-overlay");
      L && Pt(L, w);
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
  }, [e]), [_, v] = oe("left");
  re(() => {
    e && v(k());
  }, [e, k]);
  const b = P(() => {
    if (!e || !m.current) return;
    const w = e.getBoundingClientRect(), L = m.current.getBoundingClientRect(), q = window.innerWidth, B = window.innerHeight, F = w.bottom >= 0 && w.top <= B && w.right >= 0 && w.left <= q;
    let J = "top", Y = 0, Q = 0;
    if (F) {
      const R = w.top - L.height - 10, l = B - w.bottom - L.height - 10;
      l > R && l > 0 ? (J = "bottom", Y = w.bottom + 10) : (J = "top", Y = w.top - L.height - 10);
    } else
      J = "top", Y = 10;
    Q = w.left + w.width / 2 - L.width / 2;
    let se = Math.max(10, Math.min(Q, q - L.width - 10)), le = Math.max(10, Math.min(Y, B - L.height - 10));
    i({ top: le, left: se }), u(J), c(!0);
  }, [e]);
  Mn(() => {
    b();
    const w = () => {
      b();
    };
    return window.addEventListener("scroll", w), window.addEventListener("resize", w), () => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", w), c(!1);
    };
  }, [e, b]), re(() => {
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
  }, O = (w) => {
    if (e && T[w]) {
      const L = A(e), q = _, B = T[w];
      e.style.float = B.float, e.style.margin = B.margin, e.style.display = B.display, v(w), E(e);
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
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, N = () => {
    const w = p, L = !p;
    g(L), y.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: L } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: w } }
    ), r && r(L);
  };
  return !e || typeof document > "u" ? null : In(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: m,
        className: "image-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !d,
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
          pointerEvents: d ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: d ? 1 : 0,
          visibility: d ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: N,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ h.jsx($s, { size: 14 }) : /* @__PURE__ */ h.jsx(bs, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: () => O("left"),
              title: "Align Left",
              style: xt(_ === "left"),
              children: /* @__PURE__ */ h.jsx(zt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: () => O("center"),
              title: "Align Center",
              style: xt(_ === "center"),
              children: /* @__PURE__ */ h.jsx(Dt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: () => O("right"),
              title: "Align Right",
              style: xt(_ === "right"),
              children: /* @__PURE__ */ h.jsx(jt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: C,
              title: "Delete Image",
              style: za,
              children: /* @__PURE__ */ h.jsx(Nt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Wt.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
Wt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ke = (e) => {
  e.preventDefault(), e.stopPropagation();
}, $a = (e, t) => {
  const r = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((n) => {
    r.forEach((a) => {
      n.classList.remove(a);
    });
  });
}, Sn = (e, t) => !e || !t ? !1 : e.contains(t), Fa = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, Gt = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, X = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function pe(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function ge(e) {
  if (!pe(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let d = 0; d < n; d++) {
      const c = s[d], f = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      a.push(f || 100);
    }
  else if (r.length > 0) {
    const d = r[0];
    for (let c = 0; c < d.cells.length; c++) {
      const f = d.cells[c];
      a.push(f.offsetWidth);
    }
  }
  const i = r.map((d) => (d.style.height ? parseInt(d.style.height, 10) : null) || d.offsetHeight);
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
function Ua({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = Gt
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, d, c, f, u) => {
    d >= 0 && d < i.length && (i[d] = Math.max(f, Math.min(u, i[d] + c)));
  };
  switch (e) {
    case X.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case X.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case X.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case X.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function ve(e) {
  if (!pe(e)) return;
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
function Be(e, t) {
  if (!pe(e)) return;
  ve(e);
  const { columnWidths: r, rowHeights: n, tableWidth: a, tableHeight: o } = t, s = r ? r.reduce((d, c) => d + c, 0) : 0, i = n ? n.reduce((d, c) => d + c, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : i > 0 && (e.style.height = `${i}px`), r && r.length > 0) {
    e.style.tableLayout = "fixed";
    const d = e.querySelector("colgroup");
    d && d.querySelectorAll("col").forEach((f, u) => {
      u < r.length && (f.style.width = `${r[u]}px`);
    }), e.style.width = `${s}px`;
  }
  n && n.length > 0 && (Array.from(e.rows).forEach((c, f) => {
    f < n.length && (c.style.height = `${n[f]}px`);
  }), e.style.height = `${i}px`), e.offsetHeight;
}
function Wa(e) {
  if (!pe(e)) return null;
  ve(e);
  const t = ge(e);
  if (!t) return null;
  const r = document.createElement("div");
  r.className = "table-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const i = et(X.COLUMN, s, t, n, e);
    r.appendChild(i);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const i = et(X.ROW, s, t, n, e);
    r.appendChild(i);
  }
  const a = tt(X.TABLE_BOTTOM, t, n);
  r.appendChild(a);
  const o = tt(X.TABLE_RIGHT, t, n);
  return r.appendChild(o), r;
}
const Ga = {
  [X.COLUMN]: {
    className: "table-resize-handler table-column-resize-handler",
    cursor: "col-resize",
    isVertical: !0
  },
  [X.ROW]: {
    className: "table-resize-handler table-row-resize-handler",
    cursor: "row-resize",
    isVertical: !1
  },
  [X.TABLE_BOTTOM]: {
    className: "table-resize-handler table-bottom-resize-handler",
    cursor: "ns-resize",
    isVertical: !1
  },
  [X.TABLE_RIGHT]: {
    className: "table-resize-handler table-right-resize-handler",
    cursor: "ew-resize",
    isVertical: !0
  }
};
function ar(e, t, r) {
  const n = Ga[e];
  if (!n)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const a = document.createElement("div");
  return a.className = n.className, a.dataset.type = e, a.style.position = "absolute", a.style.cursor = n.cursor, a.style.pointerEvents = "all", n.isVertical ? (a.style.width = "4px", a.style.height = `${t}px`) : (a.style.width = `${t}px`, a.style.height = "4px"), r != null && (a.dataset.index = r), a;
}
function et(e, t, r, n, a) {
  const o = e === X.COLUMN ? n.height : n.width, s = ar(e, o, t);
  return Ce(s, e, t, r, n, a), s;
}
function tt(e, t, r) {
  const n = e === X.TABLE_RIGHT ? r.height : r.width, a = ar(e, n);
  return Ce(a, e, null, t, r, null), a;
}
function Mt(e, t) {
  if (!e || !t) return;
  ve(t);
  const r = ge(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let u = 0; u < r.columns - 1; u++) {
      const p = et(X.COLUMN, u, r, n, t);
      e.appendChild(p);
    }
    for (let u = 0; u < r.rows - 1; u++) {
      const p = et(X.ROW, u, r, n, t);
      e.appendChild(p);
    }
    const c = tt(X.TABLE_BOTTOM, r, n);
    e.appendChild(c);
    const f = tt(X.TABLE_RIGHT, r, n);
    e.appendChild(f);
  } else
    a.forEach((c, f) => {
      Ce(c, X.COLUMN, f, r, n, t);
    }), o.forEach((c, f) => {
      Ce(c, X.ROW, f, r, n, t);
    }), s && Ce(s, X.TABLE_BOTTOM, null, r, n, null), i && Ce(i, X.TABLE_RIGHT, null, r, n, null);
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function qt(e, t = "Operation") {
  return pe(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function qa(e) {
  const t = document.createElement("tr"), r = e.cells.length;
  for (let n = 0; n < r; n++) {
    const a = document.createElement("td");
    a.innerHTML = "&nbsp;", t.appendChild(a);
  }
  return t;
}
function ir(e, t, r = 0) {
  if (!qt(e, "insertRowAtPosition"))
    return null;
  const n = r === -1 ? t : t + 1;
  if (n < 0 || n > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${n}, table has ${e.rows.length} rows`), null;
  const a = e.rows[t];
  if (!a)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = qa(a);
    n < e.rows.length ? e.rows[n].parentNode.insertBefore(o, e.rows[n]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), ve(e);
    const s = ge(e);
    return s && Be(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function Ya(e, t) {
  return ir(e, t, -1);
}
function Za(e, t) {
  return ir(e, t, 1);
}
function Va() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function cr(e, t, r = 0) {
  if (!qt(e, "insertColumnAtPosition"))
    return !1;
  if (t < 0)
    return console.warn(`insertColumnAtPosition: Invalid column index ${t}`), !1;
  const n = Array.from(e.rows);
  if (n.length === 0)
    return console.warn("insertColumnAtPosition: Table has no rows"), !1;
  const a = r === -1 ? t : t + 1;
  if (a > n[0].cells.length)
    return console.warn(`insertColumnAtPosition: Column index ${a} out of bounds`), !1;
  try {
    for (const s of n) {
      const i = Va();
      a < s.cells.length ? s.insertBefore(i, s.cells[a]) : s.appendChild(i);
    }
    ve(e);
    const o = ge(e);
    return o && Be(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function Ka(e, t) {
  return cr(e, t, -1);
}
function Xa(e, t) {
  return cr(e, t, 1);
}
function Ce(e, t, r, n, a, o) {
  switch (t) {
    case X.COLUMN:
      Ja(e, r, n, a, o);
      break;
    case X.ROW:
      Qa(e, r, n, a, o);
      break;
    case X.TABLE_BOTTOM:
      ei(e, n, a);
      break;
    case X.TABLE_RIGHT:
      ti(e, n, a);
      break;
  }
}
function Ja(e, t, r, n, a) {
  if (a?.rows.length > 0 && a.rows[0].cells.length > t) {
    const s = a.rows[0].cells[t].getBoundingClientRect(), i = a.getBoundingClientRect();
    e.style.left = `${s.right - i.left - 2}px`, e.style.height = `${n.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Qa(e, t, r, n, a) {
  if (a?.rows.length > t && a.rows[t].cells.length > 0) {
    const s = a.rows[t].cells[0].getBoundingClientRect(), i = a.getBoundingClientRect();
    e.style.top = `${s.bottom - i.top - 2}px`, e.style.width = `${n.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function ei(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function ti(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function lr(e, t, r) {
  return qt(e, `delete${r.charAt(0).toUpperCase() + r.slice(1)}`) ? r === "row" ? ni(e, t) : r === "column" ? ri(e, t) : !1 : !1;
}
function ni(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), ve(e);
    const n = ge(e);
    return n && Be(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function ri(e, t) {
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
    ve(e);
    const n = ge(e);
    return n && Be(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
function oi(e, t) {
  return lr(e, t, "row");
}
function si(e, t) {
  return lr(e, t, "column");
}
const Yt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = Gt
}) => {
  const o = ne(null), s = ne(null), i = ne(null), d = ne(null), c = ne(null), f = ne(a), u = ne(!1), [p, g] = oe(null), m = xe();
  re(() => {
    f.current = a;
  }, [a]);
  const y = P(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ke(o.current), o.current = null), g(null), i.current = null, d.current = null, c.current = null, u.current = !1, n && n();
  }, [n]), E = P((C) => {
    if (Ke(C), !s.current) return;
    const N = C.currentTarget, w = N.dataset.type, L = parseInt(N.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const q = ge(s.current);
    i.current = {
      x: C.clientX,
      y: C.clientY,
      structure: { ...q }
    }, d.current = w, c.current = L, u.current = !0, document.body.classList.add("table-resize-in-progress");
    const F = {
      [X.COLUMN]: "col-resize",
      [X.ROW]: "row-resize",
      [X.TABLE_BOTTOM]: "ns-resize",
      [X.TABLE_RIGHT]: "ew-resize"
    }[w] || "default";
    document.body.style.cursor = F, document.addEventListener("mousemove", _), document.addEventListener("mouseup", v);
  }, []), A = P((C) => {
    const N = Wa(C, f.current);
    return N && (o.current = N, s.current = C, document.body.appendChild(N), N.querySelectorAll(".table-resize-handler").forEach((L) => {
      L.addEventListener("mousedown", E);
    })), N;
  }, [E]), k = P((C) => {
    if (!pe(C)) return;
    o.current && (ke(o.current), o.current = null), C.classList.add("selected"), A(C) && (g(C), r && r(C));
  }, [r, A]), _ = P((C) => {
    if (!u.current || !s.current || !i.current || !d.current) return;
    Ke(C);
    const { x: N, y: w, structure: L } = i.current, q = d.current, B = c.current, F = C.clientX, J = C.clientY;
    let Y = 0;
    switch (q) {
      case X.COLUMN:
        Y = F - N;
        break;
      case X.ROW:
        Y = J - w;
        break;
      case X.TABLE_BOTTOM:
        Y = J - w;
        break;
      case X.TABLE_RIGHT:
        Y = F - N;
        break;
    }
    const Q = Ua({
      type: q,
      index: B,
      delta: Y,
      currentStructure: L,
      options: f.current
    });
    Be(s.current, Q), o.current && Mt(o.current, s.current);
  }, []), v = P((C) => {
    if (u.current) {
      if (Ke(C), s.current && i.current) {
        const N = {
          structure: i.current.structure
        }, w = {
          structure: ge(s.current)
        };
        (N.structure.width !== w.structure.width || N.structure.height !== w.structure.height || JSON.stringify(N.structure.columnWidths) !== JSON.stringify(w.structure.columnWidths) || JSON.stringify(N.structure.rowHeights) !== JSON.stringify(w.structure.rowHeights)) && m.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: w } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: N } }
        );
      }
      if (i.current = null, d.current = null, c.current = null, u.current = !1, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(N), t && t(s.current, ge(s.current));
      }
    }
  }, [t, m]), b = P((C) => {
    o.current && !o.current.contains(C.target) && y();
    const w = C.target.closest("table");
    if (w && pe(w)) {
      if (w === s.current)
        return;
      k(w);
    }
  }, [k, y]), T = P((C) => {
    if (C.key === "Delete" && s.current && !u.current) {
      C.preventDefault();
      const N = s.current;
      if (N.parentNode) {
        N.parentNode.removeChild(N), y();
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
    }
    C.key === "Escape" && s.current && y();
  }, [e, y]), O = P(() => {
    o.current && s.current && Mt(o.current, s.current);
  }, []);
  return re(() => {
    if (!e.current) return;
    const N = e.current.closest(".editor-viewport");
    return N && (N.addEventListener("scroll", O), window.addEventListener("scroll", O)), () => {
      N && N.removeEventListener("scroll", O), window.removeEventListener("scroll", O);
    };
  }, [e, O]), re(() => {
    if (!e.current) return;
    const C = e.current;
    return C.addEventListener("click", b), C.addEventListener("keydown", T), window.addEventListener("resize", O), () => {
      C.removeEventListener("click", b), C.removeEventListener("keydown", T), window.removeEventListener("resize", O), u.current && (document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && ke(o.current);
    };
  }, [e, b, T, O, _, v]), re(() => {
    if (!e.current) return;
    const C = new MutationObserver((N) => {
      N.forEach((w) => {
        w.type === "childList" ? (w.removedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && pe(L) && L === p && y();
        }), w.addedNodes.forEach((L) => {
          if (L.nodeType !== Node.ELEMENT_NODE) return;
          if (pe(L)) {
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
Yt.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: x.func,
  onTableSelect: x.func,
  onTableDeselect: x.func,
  resizeOptions: x.shape({
    minColumnWidth: x.number,
    minRowHeight: x.number,
    maxColumnWidth: x.number,
    maxRowHeight: x.number,
    tableMinWidth: x.number,
    tableMinHeight: x.number,
    tableMaxWidth: x.number,
    tableMaxHeight: x.number
  })
};
Yt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Gt
};
const Ye = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, kn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, Ae = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, Pn = (e) => {
  if (!e) return;
  const t = (r) => {
    const n = document.querySelector(".table-resize-overlay");
    n && Mt(n, r);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, Nn = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, Zt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [d, c] = oe(!1), [f, u] = oe("top"), [p, g] = oe("left"), m = ne(null), y = xe(), E = P(() => {
    if (!e) return "left";
    const B = window.getComputedStyle(e);
    return B.marginLeft === "auto" && B.marginRight === "auto" ? "center" : B.float === "right" ? "right" : (B.float === "left", "left");
  }, [e]);
  re(() => {
    e && g(E());
  }, [e, E]);
  const A = P(() => {
    if (!e || !m.current) return;
    const B = e.getBoundingClientRect(), F = m.current.getBoundingClientRect(), J = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, Y = B.bottom >= 0 && B.top <= J.height && B.right >= 0 && B.left <= J.width;
    let Q = "top", se = 0, le = 0;
    if (Y) {
      const j = B.top - F.height - 10, $ = J.height - B.bottom - F.height - 10;
      $ > j && $ > 0 ? (Q = "bottom", se = B.bottom + 10) : (Q = "top", se = B.top - F.height - 10);
    } else
      Q = "top", se = 10;
    le = B.left + B.width / 2 - F.width / 2;
    const R = window.innerWidth, l = window.innerHeight;
    let M = Math.max(10, Math.min(le, R - F.width - 10)), D = Math.max(10, Math.min(se, l - F.height - 10));
    i({ top: D, left: M }), u(Q), c(!0);
  }, [e]);
  Mn(() => {
    A();
    const B = () => {
      A();
    };
    return window.addEventListener("scroll", B), window.addEventListener("resize", B), () => {
      window.removeEventListener("scroll", B), window.removeEventListener("resize", B), c(!1);
    };
  }, [e, A]), re(() => {
    const B = (F) => {
      m.current && !m.current.contains(F.target) && F.target !== e && !e.contains(F.target) && r();
    };
    return document.addEventListener("mousedown", B), () => {
      document.removeEventListener("mousedown", B);
    };
  }, [e, r]);
  const k = P((B) => {
    if (!e || !kn[B]) return;
    const F = Nn(e), J = p, Y = kn[B];
    e.style.float = Y.float, e.style.margin = Y.margin, e.style.marginLeft = Y.marginLeft, e.style.marginRight = Y.marginRight, g(B), Pn(e);
    const Q = Nn(e);
    y.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: B, state: Q } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: J, state: F } }
    ), t?.(B);
  }, [e, p, y, t]), _ = P((B, F) => () => {
    if (!e) return;
    const J = B.includes("ROW"), Y = J ? n : a;
    if (Y == null || !F(e, Y)) return;
    o?.current && y.updateContinuousContent(o.current.innerHTML);
    const se = J ? { element: e, index: Y } : { element: e, index: Y };
    y.recordOperation(
      { type: B, payload: se },
      { type: B, payload: se }
      // Reverse operation would be same type
    ), Pn(e), requestAnimationFrame(() => A());
  }, [e, n, a, o, y, A]), v = ce(
    () => _(Ae.INSERT_ROW_ABOVE, Ya),
    [_]
  ), b = ce(
    () => _(Ae.INSERT_ROW_BELOW, Za),
    [_]
  ), T = ce(
    () => _(Ae.INSERT_COL_LEFT, Ka),
    [_]
  ), O = ce(
    () => _(Ae.INSERT_COL_RIGHT, Xa),
    [_]
  ), C = ce(
    () => _(Ae.DELETE_ROW, oi),
    [_]
  ), N = ce(
    () => _(Ae.DELETE_COL, si),
    [_]
  ), w = (B) => ({
    ...Ye,
    background: B ? "#007bff" : "transparent",
    color: B ? "#fff" : "#333"
  }), L = ce(() => ({
    rowAction: { ...Ye, background: "#28a745", color: "#fff" },
    colAction: { ...Ye, background: "#0056b3", color: "#fff" },
    delete: { ...Ye, background: "#dc3545", color: "#fff" },
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
    pointerEvents: d ? "auto" : "none",
    minWidth: "100px",
    minHeight: "32px",
    opacity: d ? 1 : 0,
    visibility: d ? "visible" : "hidden",
    transition: "opacity 0.15s ease, visibility 0.15s ease"
  }), [s, d]);
  return !e || typeof document > "u" ? null : In(
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: m,
        className: "table-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !d,
        style: q,
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "left" ? "active" : ""}`,
              onClick: () => k("left"),
              title: "Align Left",
              style: w(p === "left"),
              children: /* @__PURE__ */ h.jsx(zt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "center" ? "active" : ""}`,
              onClick: () => k("center"),
              title: "Align Center",
              style: w(p === "center"),
              children: /* @__PURE__ */ h.jsx(Dt, { size: 14 })
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `tooltip-button ${p === "right" ? "active" : ""}`,
              onClick: () => k("right"),
              title: "Align Right",
              style: w(p === "right"),
              children: /* @__PURE__ */ h.jsx(jt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { style: L.divider }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: v,
                title: "Insert Row Above",
                style: L.rowAction,
                children: /* @__PURE__ */ h.jsx(ts, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: b,
                title: "Insert Row Below",
                style: L.rowAction,
                children: /* @__PURE__ */ h.jsx(Vo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: C,
                title: "Delete Row",
                style: L.delete,
                children: /* @__PURE__ */ h.jsx(Nt, { size: 14 })
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
                children: /* @__PURE__ */ h.jsx(Xo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: O,
                title: "Insert Column Right",
                style: L.colAction,
                children: /* @__PURE__ */ h.jsx(Qo, { size: 14 })
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: N,
                title: "Delete Column",
                style: L.delete,
                children: /* @__PURE__ */ h.jsx(Nt, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Zt.propTypes = {
  tableElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onClose: x.func.isRequired,
  selectedRowIndex: x.number,
  selectedColIndex: x.number,
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Zt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const ai = ".table-cell-selected, .table-row-selected, .table-col-selected", Ln = () => {
  $a(ai, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, Vt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const r = ne({
    selectedCells: /* @__PURE__ */ new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: !1,
    hasDragged: !1,
    startCell: null
  }), [n, a] = oe(!1), [o, s] = oe(!1), [i, d] = oe(null), [c, f] = oe(null), u = ne(null), p = P(() => {
    r.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, a(!1), s(!1), d(null), f(null);
  }, []), g = P(() => {
    p(), Ln(), u.current !== null && (u.current = null, t && t(null));
  }, [t, p]), m = P((T) => {
    const O = T.closest("tr"), C = T.closest("table");
    if (!O || !C) return null;
    const N = Array.from(C.rows).indexOf(O), w = Array.from(O.cells).indexOf(T);
    return { rowIndex: N, cellIndex: w, table: C };
  }, []), y = P((T) => {
    if (T.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const O = Array.from(T), C = O[0], N = m(C);
    if (!N) return { mode: null, rowIndex: null, colIndex: null };
    const { table: w } = N;
    return O.filter((B) => {
      const F = m(B);
      return F && F.table === w && F.rowIndex === N.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: N.rowIndex, colIndex: null } : O.filter((B) => {
      const F = m(B);
      return F && F.table === w && F.cellIndex === N.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: N.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [m]), E = P((T, O, C, N, w) => {
    if (Ln(), !(!w || !T)) {
      if (T === "row" && O !== null) {
        const L = w.rows[O];
        L && Array.from(L.cells).forEach((q) => {
          q.classList.add("table-row-selected");
        });
      } else T === "column" && C !== null ? Array.from(w.rows).forEach((L) => {
        const q = L.cells[C];
        q && q.classList.add("table-col-selected");
      }) : T === "cells" && N.forEach((L) => {
        L.classList.add("table-cell-selected");
      });
      Fa();
    }
  }, []), A = P((T, O) => {
    const C = y(T);
    r.current.selectedCells = T, r.current.selectionMode = C.mode, r.current.selectedRowIndex = C.rowIndex, r.current.selectedColIndex = C.colIndex, r.current.currentTable = O, f(O), E(C.mode, C.rowIndex, C.colIndex, T, O);
    const N = C.mode ? {
      mode: C.mode,
      cells: T,
      rowIndex: C.rowIndex,
      colIndex: C.colIndex,
      table: O
    } : null;
    JSON.stringify(u.current) !== JSON.stringify(N) && (u.current = N, t && t(N));
  }, [y, E, t]), k = P((T) => {
    const O = T.target.closest("td, th");
    if (!O) return;
    const C = m(O);
    C && (a(!0), d(O), f(C.table), s(!1));
  }, [m]), _ = P((T) => {
    if (!n || !i) return;
    const O = T.target.closest("td, th");
    if (!O || !c || !Sn(c, O)) return;
    s(!0), Ke(T);
    const C = m(i), N = m(O);
    if (!C || !N || C.table !== N.table) return;
    const w = Math.min(C.rowIndex, N.rowIndex), L = Math.max(C.rowIndex, N.rowIndex), q = Math.min(C.cellIndex, N.cellIndex), B = Math.max(C.cellIndex, N.cellIndex), F = /* @__PURE__ */ new Set();
    for (let J = w; J <= L; J++) {
      const Y = c.rows[J];
      if (Y)
        for (let Q = q; Q <= B; Q++) {
          const se = Y.cells[Q];
          se && F.add(se);
        }
    }
    A(F, c);
  }, [n, i, c, m, A]), v = P(() => {
    o || g(), a(!1), d(null);
  }, [o, g]), b = P((T) => {
    const O = T.target.closest("td, th"), C = T.target.closest("table");
    if (!(O && c && Sn(c, O))) {
      if (C && C !== c) {
        g();
        return;
      }
      C || g();
    }
  }, [g, c]);
  return re(() => {
    if (!e.current) return;
    const T = e.current, O = (N) => {
      N.target.closest("td, th") && k(N);
    }, C = (N) => {
      N.target.closest("td, th") && _(N);
    };
    return T.addEventListener("mousedown", O, !0), T.addEventListener("mouseenter", C, !0), document.addEventListener("mouseup", v), document.addEventListener("click", b), () => {
      T.removeEventListener("mousedown", O, !0), T.removeEventListener("mouseenter", C, !0), document.removeEventListener("mouseup", v), document.removeEventListener("click", b);
    };
  }, [e, k, _, v, b]), re(() => {
    if (!e.current) return;
    const T = new MutationObserver((O) => {
      O.forEach((C) => {
        C.type === "childList" && c && !e.current.contains(c) && g();
      });
    });
    return T.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => T.disconnect();
  }, [e, g, c]), null;
};
Vt.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: x.func
};
Vt.defaultProps = {
  onCellSelectionChange: void 0
};
const ii = 50, vt = 50, ci = 50, li = 100, ui = 300, Kt = It(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: d = !0,
  showPageManager: c = !0
}, f) => {
  const u = $n(), p = xe(), { pageSize: g, pageMargins: m, continuousContent: y, pageBoundaries: E, activePage: A, zoomLevel: k, canUndo: _, canRedo: v } = u, b = ne(null), T = ne(null), { currentFormat: O, formatText: C, updateCurrentFormatFromSelection: N } = eo(), [w, L] = oe(!1), [q, B] = oe(null), [F, J] = oe(!0), [Y, Q] = oe(!1), [se, le] = oe(null), [R, l] = oe(null), [M, D] = oe(null), {
    checkAndUpdateBoundaries: j,
    getCurrentPage: $,
    scrollToPage: U,
    updateBoundaries: I,
    triggerAutoReflow: G,
    removePageAndContent: K,
    removePageBreak: V,
    insertPageBreakAtBoundary: ie
  } = Ao(g, T, k, m), H = ce(() => Me(g), [g]), [ue, we] = oe(!1), fe = ne(null), De = ne(!1), je = ne(!1), ze = ne(!1), $e = ne(y), ot = P(() => {
    De.current = !1;
    const S = Math.max(0, E.length - 1);
    p.setActivePage(S), setTimeout(() => {
      U(S, b);
    }, ci);
  }, [E.length, p, U]);
  re(() => {
    if (!T.current || ze.current) return;
    T.current.innerHTML = y, ze.current = !0, $e.current = y;
    const S = setTimeout(() => {
      I();
    }, ii);
    return () => clearTimeout(S);
  }, []), re(() => {
    if (!T.current || !ze.current) return;
    if (T.current.innerHTML !== y) {
      T.current.innerHTML = y;
      const ae = setTimeout(() => {
        I(), De.current && ot();
      }, vt);
      return $e.current = y, () => clearTimeout(ae);
    }
  }, [y, I, ot]), re(() => {
    s && ze.current && s(y);
  }, [y, s]);
  const { restoreCursorPosition: st, hasActiveCursorSelection: at } = Ro({
    updateCurrentFormatFromSelection: N,
    editorRef: T
  }), dr = P((S) => {
    S !== y && p.updateContinuousContent(S), T.current && T.current.innerHTML !== S && (T.current.innerHTML = S), $e.current = S, setTimeout(() => {
      I();
    }, vt);
  }, [y, p, I]), it = P((S) => {
    if (!T.current || !S) return;
    at() || st(), document.execCommand("insertHTML", !1, S);
    const ae = T.current.innerHTML;
    p.updateContinuousContent(ae), $e.current = ae, setTimeout(() => {
      I(), G(200);
    }, vt);
  }, [at, st, p, I, G]), Xt = ce(() => ({
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
    getCursorPosition: () => T.current ? vo(T.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (S) => {
      const ae = Ve(S);
      dr(ae);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (S) => {
      p.updatePageSize(S), I({ pageSize: S });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (S) => {
      p.updatePageMargins(S), I({ pageMargins: S });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (S) => {
      const ae = Ve(S);
      it(ae);
    }
  }), [y, p, I, G, at, st]);
  Pr(f, () => Xt, [Xt]);
  const ct = P(() => {
    if (!T.current) return;
    let S = T.current.innerHTML;
    S = Ve(S), S !== T.current.innerHTML && (T.current.innerHTML = S);
    const ae = y;
    if (ae !== S) {
      const ft = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: S
      }, pt = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: ae
      };
      p.recordOperation(ft, pt);
    }
    p.updateContinuousContent(S), j(), G(200);
    const _e = $(b);
    _e !== A && p.setActivePage(_e);
  }, [p, j, $, A, G, b, T, y]), fr = P((S) => {
    ct();
  }, [ct]), Jt = P((S) => {
    p.updatePageSize(S), I({ pageSize: S }), a && a(S);
  }, [p, I, a]), Qt = P((S) => {
    p.updatePageMargins(S), I({ pageMargins: S }), o && o(S);
  }, [p, I, o]), en = P((S) => {
    S < 0 || S >= E.length || (je.current = !0, p.setActivePage(S), U(S, b), setTimeout(() => {
      je.current = !1;
    }, ui), t && t(S));
  }, [p, U, t, E.length]), tn = P(() => {
    const S = E.length + 1;
    ie(S) && (De.current = !0, setTimeout(() => {
      De.current && ot();
    }, 100)), r && r();
  }, [E.length, ie, p, U, r]), pr = P(() => {
    const S = window.getSelection();
    if (S && S.rangeCount > 0) {
      if (!T?.current) return;
      const ft = `<page-break data-page-break="true" contenteditable="false" data-page-number="${T.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ft), setTimeout(() => {
        I();
        const pt = $(b);
        p.setActivePage(pt);
      }, 150);
    }
  }, [I, $, p, b]), gr = P((S) => {
    it(S);
  }, [it]), hr = P((S) => {
    if (!S) return;
    V(S) && setTimeout(() => {
      const _e = $(b);
      p.setActivePage(_e);
    }, 200);
  }, [V, $, p, b]), nn = P((S) => {
    if (E.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    K(S) && (p.setActivePage(0), n && n(S));
  }, [E.length, K, p, n]), mr = ce(() => ({
    handleZoomIn: () => p.zoomIn(),
    handleZoomOut: () => p.zoomOut(),
    handleZoomReset: () => p.resetZoom(),
    handleUndo: () => p.undo(),
    handleRedo: () => p.redo()
  }), [p]), { handleZoomIn: lt, handleZoomOut: ut, handleZoomReset: dt, handleUndo: yr, handleRedo: Tr } = mr;
  Co(
    { handleZoomIn: lt, handleZoomOut: ut, handleZoomReset: dt, handleUndo: yr, handleRedo: Tr },
    { editorRef: T, containerRef: b }
  );
  const Er = P(() => {
    !b.current || !T.current || je.current || (fe.current && clearTimeout(fe.current), fe.current = setTimeout(() => {
      if (je.current) {
        fe.current = null;
        return;
      }
      const S = $(b);
      S !== A && S >= 0 && p.setActivePage(S), fe.current = null;
    }, li));
  }, [$, A, p]), br = ce(() => {
    if (!y) return 0;
    const ae = y.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ae ? ae.length : 0;
  }, [y]), xr = E.length || 1, vr = P((S) => {
    L(!0), B(S);
  }, []), rn = P(() => {
    L(!1), B(null);
  }, []), wr = P((S, ae) => {
  }, []), Ar = P((S) => {
    S && S.mode === "row" ? (l(S.rowIndex), D(null)) : S && S.mode === "column" ? (D(S.colIndex), l(null)) : (l(null), D(null));
  }, []), Cr = P((S) => {
    Q(!0), le(S);
  }, []), on = P(() => {
    Q(!1), le(null);
  }, []), Rr = P((S, ae) => {
  }, []);
  return re(() => () => {
    fe.current && clearTimeout(fe.current);
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ h.jsx(
      $t,
      {
        currentFormat: {
          ...O,
          imageSelected: w
        },
        onFormatText: C,
        onAddPageBreak: pr,
        onInsertImage: gr,
        canUndo: _,
        canRedo: v
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ h.jsx(
        da,
        {
          editorView: null,
          isCollapsed: ue,
          onToggle: () => we((S) => !S),
          wordCount: br,
          pageCount: xr
        }
      ),
      /* @__PURE__ */ h.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: b,
          onScroll: Er,
          children: /* @__PURE__ */ h.jsx(
            Pa,
            {
              content: y,
              dimensions: H,
              pageSize: g,
              pageMargins: m,
              pageBoundaries: E,
              editorRef: T,
              onInput: fr,
              onContentChange: ct,
              onClick: () => T.current?.focus(),
              onRemovePageBreak: hr,
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsx(
        Ut,
        {
          editorRef: T,
          onImageSelect: vr,
          onImageDeselect: rn,
          onImageResize: wr,
          resizeOptions: {
            ...Re,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      /* @__PURE__ */ h.jsx(
        Yt,
        {
          editorRef: T,
          onTableSelect: Cr,
          onTableDeselect: on,
          onTableResize: Rr
        }
      ),
      /* @__PURE__ */ h.jsx(
        Vt,
        {
          editorRef: T,
          onCellSelectionChange: Ar
        }
      ),
      w && q && /* @__PURE__ */ h.jsx(
        Wt,
        {
          imageElement: q,
          initialPreserveAspectRatio: F,
          onAlignChange: (S) => {
          },
          onAspectRatioToggle: (S) => {
            J(S);
          },
          onDelete: () => {
            if (q) {
              const S = q.getAttribute("data-key");
              S && Mo(S).catch((ae) => {
                console.error("Failed to delete image from IndexedDB:", ae);
              });
            }
          },
          onClose: rn
        }
      ),
      Y && se && /* @__PURE__ */ h.jsx(
        Zt,
        {
          tableElement: se,
          onAlignChange: (S) => {
          },
          onClose: on,
          selectedRowIndex: R,
          selectedColIndex: M,
          editorRef: T
        }
      ),
      c && /* @__PURE__ */ h.jsx("div", { className: "page-manager-sidebar", children: e ? nt.cloneElement(e, {
        onNavigate: en,
        onAddPage: tn,
        onDeletePage: nn,
        onPageSizeChange: Jt,
        onPageMarginsChange: Qt,
        zoomLevel: k,
        canZoomIn: _t(k),
        canZoomOut: Ot(k),
        onZoomIn: lt,
        onZoomOut: ut,
        onZoomReset: dt
      }) : /* @__PURE__ */ h.jsx(
        Na,
        {
          pageBoundaries: E,
          activePage: A,
          pageSize: g,
          pageMargins: m,
          zoomLevel: k,
          canZoomIn: _t(k),
          canZoomOut: Ot(k),
          onNavigate: en,
          onAddPage: tn,
          onDeletePage: nn,
          onPageSizeChange: Jt,
          onPageMarginsChange: Qt,
          onZoomIn: lt,
          onZoomOut: ut,
          onZoomReset: dt
        }
      ) })
    ] })
  ] });
});
Kt.displayName = "HtmlEditor";
Kt.propTypes = {
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
Kt.defaultProps = {
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
class ur extends nt.Component {
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
ur.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
ur.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Kr as COMMON_FONT_SIZES,
  nr as ColorPickerDropdown,
  rt as DEFAULT_FONT_SIZE,
  Re as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Bn as DEFAULT_PAGE_SIZE,
  Gt as DEFAULT_TABLE_RESIZE_OPTIONS,
  mi as DocumentProvider,
  $t as EditorToolbar,
  ur as ErrorBoundary,
  Wn as FONT_SIZE_MAP,
  Kt as HtmlEditor,
  Ut as ImageResizeHandlers,
  Je as PAGE_SIZES,
  Na as PageManager,
  Pa as PageView,
  z as RESIZE_HANDLERS,
  da as Sidebar,
  X as TABLE_RESIZE_HANDLERS,
  Yt as TableResizeHandlers,
  vi as applyImageDimensions,
  Be as applyTableDimensions,
  bi as calculateResizeDimensions,
  Ua as calculateTableResizeDimensions,
  wi as clearImages,
  _o as createResizeOverlay,
  Wa as createTableResizeOverlay,
  Mo as deleteImage,
  Ai as getAllImageKeys,
  hi as getAvailablePageSizes,
  Lo as getImage,
  xi as getImageDimensions,
  Me as getPageDimensions,
  yi as getPixelValue,
  Ti as getPointValue,
  ge as getTableStructure,
  Ee as isResizableImage,
  pe as isResizableTable,
  Ei as isValidFontSize,
  gi as isValidPageSize,
  fa as logger,
  Jr as pixelsToPoints,
  Xr as pointsToPixels,
  bt as removeResizeOverlay,
  ke as removeTableResizeOverlay,
  No as saveImage,
  Pt as updateResizeOverlay,
  Mt as updateTableResizeOverlay,
  Ao as useContinuousReflow,
  zn as useDocument,
  xe as useDocumentActions,
  $n as useDocumentState,
  eo as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
