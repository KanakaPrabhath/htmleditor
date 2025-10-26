import Ke, { createContext as Tr, useContext as vr, useReducer as Er, useMemo as ge, useState as ne, useCallback as N, useRef as te, useEffect as oe, forwardRef as kt, createElement as bt, memo as wr, useLayoutEffect as wn, useImperativeHandle as xr } from "react";
import { v4 as Nt } from "uuid";
import { createPortal as xn } from "react-dom";
function Cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Ar() {
  if (Jt) return Se;
  Jt = 1;
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
  return Se.Fragment = t, Se.jsx = r, Se.jsxs = r, Se;
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
var Qt;
function Rr() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === I ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case y:
          return "Fragment";
        case S:
          return "Profiler";
        case x:
          return "StrictMode";
        case C:
          return "Suspense";
        case U:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case b:
            return "Portal";
          case v:
            return l.displayName || "Context";
          case _:
            return (l._context.displayName || "Context") + ".Consumer";
          case T:
            var k = l.render;
            return l = l.displayName, l || (l = k.displayName || k.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case L:
            return k = l.displayName || null, k !== null ? k : e(l.type) || "Memo";
          case F:
            k = l._payload, l = l._init;
            try {
              return e(l(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var B = k.error, j = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return B.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(l);
      }
    }
    function n(l) {
      if (l === y) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === F)
        return "<...>";
      try {
        var k = e(l);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = H.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (z.call(l, "key")) {
        var k = Object.getOwnPropertyDescriptor(l, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function i(l, k) {
      function B() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      B.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: B,
        configurable: !0
      });
    }
    function u() {
      var l = e(this.type);
      return V[l] || (V[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, k, B, j, q, G) {
      var M = B.ref;
      return l = {
        $$typeof: m,
        type: l,
        key: k,
        props: B,
        _owner: j
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
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
        value: q
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, k, B, j, q, G) {
      var M = k.children;
      if (M !== void 0)
        if (j)
          if ($(M)) {
            for (j = 0; j < M.length; j++)
              d(M[j]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(M);
      if (z.call(k, "key")) {
        M = e(l);
        var Y = Object.keys(k).filter(function(X) {
          return X !== "key";
        });
        j = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", w[M + j] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          M,
          Y,
          M
        ), w[M + j] = !0);
      }
      if (M = null, B !== void 0 && (r(B), M = "" + B), s(k) && (r(k.key), M = "" + k.key), "key" in k) {
        B = {};
        for (var J in k)
          J !== "key" && (B[J] = k[J]);
      } else B = k;
      return M && i(
        B,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        M,
        B,
        a(),
        q,
        G
      );
    }
    function d(l) {
      p(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === F && (l._payload.status === "fulfilled" ? p(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function p(l) {
      return typeof l == "object" && l !== null && l.$$typeof === m;
    }
    var h = Ke, m = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), v = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), H = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, $ = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var P, V = {}, re = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), se = A(n(o)), w = {};
    Oe.Fragment = y, Oe.jsx = function(l, k, B) {
      var j = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        l,
        k,
        B,
        !1,
        j ? Error("react-stack-top-frame") : re,
        j ? A(n(l)) : se
      );
    }, Oe.jsxs = function(l, k, B) {
      var j = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        l,
        k,
        B,
        !0,
        j ? Error("react-stack-top-frame") : re,
        j ? A(n(l)) : se
      );
    };
  })()), Oe;
}
var en;
function Sr() {
  return en || (en = 1, process.env.NODE_ENV === "production" ? je.exports = Ar() : je.exports = Rr()), je.exports;
}
var g = Sr();
const Tt = 100, vt = 50, Et = 200, tn = 5, wt = (e) => e < Et, xt = (e) => e > vt, Or = 96, me = (e) => Math.round(e * Or), Ze = {
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
}, ye = "NORMAL", Cn = (e = ye) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: me(e.top),
      bottom: me(e.bottom),
      left: me(e.left),
      right: me(e.right)
    };
  const t = Ze[e] || Ze[ye];
  return {
    top: me(t.top),
    bottom: me(t.bottom),
    left: me(t.left),
    right: me(t.right)
  };
}, _r = (e = ye) => {
  const t = Cn(e);
  return t.top + t.bottom;
}, kr = () => Object.keys(Ze), Nr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ze[e];
  return t ? t.label : "Unknown";
}, Ye = {
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
}, An = "A4", Pe = (e) => {
  const t = Ye[e] || Ye[An];
  return {
    width: t.width,
    height: t.height
  };
}, Ya = (e) => Object.keys(Ye).includes(e), Va = () => Object.keys(Ye), Me = An, ve = "<p><br></p>", Pr = "continuous", _e = (e, t = Me) => ({
  id: Nt(),
  index: e,
  size: t,
  content: ve,
  images: [],
  isBreakPoint: !1
}), Ge = (e) => typeof e != "string" || e.trim() === "" ? ve : e, Rn = (e, t = Me) => (e.length > 0 ? e : [_e(0, t)]).map((n, a) => ({
  id: n.id || Nt(),
  index: a,
  size: n.size || t,
  content: Ge(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Mr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Pe(e).height
}], ze = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), Ct = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Me, n = Rn(e.pages || [_e(0, r)], r);
  return {
    id: Nt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Pr,
    continuousContent: e.continuousContent || ve,
    pageBoundaries: e.pageBoundaries || Mr(r),
    zoomLevel: e.zoomLevel || Tt,
    pageMargins: e.pageMargins || ye,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, Z = {
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
}, At = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = ve, pageSize: a = Me } = t.payload || {}, o = { ..._e(0, a), content: Ge(n) };
      return Ct({
        title: e.title,
        pageSize: a,
        pages: [o]
      });
    }
    case Z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case Z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: a } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[n] = {
        ...o[n],
        content: Ge(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Rn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : ze(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case Z.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(n, 0, _e(n, e.pageSize));
      const o = a.map((i, u) => ({
        ...i,
        index: u,
        size: e.pageSize
      })), s = ze(o);
      return {
        ...e,
        pages: o,
        activePage: n,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(n, 1);
      const o = a.map((u, c) => ({
        ...u,
        index: c,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = ze(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: i,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Z.SET_ACTIVE_PAGE: {
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
    case Z.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Pe(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = ze(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Z.RESET_DOCUMENT:
      return Ct();
    case Z.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ge(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGE_BOUNDARIES: {
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
    case Z.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (n === "end")
        s = s + o + "<p><br></p>";
      else if (typeof n == "number") {
        const i = s.substring(0, n), u = s.substring(n);
        s = i + o + u;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const u = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < u.length) {
          const c = u[a], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", c.parentNode.insertBefore(f, c.nextSibling), f.parentNode.insertBefore(d, f.nextSibling), s = i.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: r
      };
    }
    case Z.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, u) => {
        i.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: r
      };
    }
    case Z.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== ve).join(`
`) || ve : e.continuousContent && e.continuousContent !== ve && (o = [{ ..._e(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < vt || n > Et ? (console.warn(`Invalid zoom level: ${n}. Must be between ${vt} and ${Et}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_IN: {
      if (!wt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + tn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_OUT: {
      if (!xt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - tn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.RESET_ZOOM:
      return e.zoomLevel === Tt ? e : {
        ...e,
        zoomLevel: Tt,
        updatedAt: r
      };
    case Z.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case Z.RECORD_OPERATION: {
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
    case Z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return n.inverseOperation && (o = At(e, n.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, n],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case Z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return n.operation && (o = At(e, n.operation)), {
        ...o,
        undoStack: [...e.undoStack, n],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: r
      };
    }
    case Z.CLEAR_UNDO_REDO:
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
}, Sn = Tr(null), Ka = ({ children: e, initialState: t = {} }) => {
  const [r, n] = Er(At, Ct(t)), a = ge(() => ({
    initializeDocument: (s) => n({ type: Z.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => n({ type: Z.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => n({ type: Z.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => n({ type: Z.UPDATE_PAGES, payload: s }),
    addPage: (s) => n({ type: Z.ADD_PAGE, payload: s }),
    deletePage: (s) => n({ type: Z.DELETE_PAGE, payload: s }),
    setActivePage: (s) => n({ type: Z.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => n({ type: Z.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => n({ type: Z.RESET_DOCUMENT }),
    updateContinuousContent: (s) => n({ type: Z.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => n({ type: Z.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => n({ type: Z.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => n({ type: Z.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => n({ type: Z.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => n({ type: Z.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => n({ type: Z.ZOOM_IN }),
    zoomOut: () => n({ type: Z.ZOOM_OUT }),
    resetZoom: () => n({ type: Z.RESET_ZOOM }),
    updatePageMargins: (s) => n({ type: Z.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, i) => n({
      type: Z.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: i }
    }),
    undo: () => n({ type: Z.UNDO }),
    redo: () => n({ type: Z.REDO }),
    clearUndoRedo: () => n({ type: Z.CLEAR_UNDO_REDO })
  }), []), o = ge(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ g.jsx(Sn.Provider, { value: o, children: e });
}, On = () => {
  const e = vr(Sn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, _n = () => {
  const { state: e } = On();
  return e;
}, Te = () => {
  const { actions: e } = On();
  return e;
};
var $e = { exports: {} }, Fe = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Lr() {
  if (nn) return Q;
  nn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function _(T) {
    if (typeof T == "object" && T !== null) {
      var C = T.$$typeof;
      switch (C) {
        case t:
          switch (T = T.type, T) {
            case u:
            case c:
            case n:
            case o:
            case a:
            case d:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case i:
                case f:
                case m:
                case h:
                case s:
                  return T;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function v(T) {
    return _(T) === c;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = c, Q.ContextConsumer = i, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = f, Q.Fragment = n, Q.Lazy = m, Q.Memo = h, Q.Portal = r, Q.Profiler = o, Q.StrictMode = a, Q.Suspense = d, Q.isAsyncMode = function(T) {
    return v(T) || _(T) === u;
  }, Q.isConcurrentMode = v, Q.isContextConsumer = function(T) {
    return _(T) === i;
  }, Q.isContextProvider = function(T) {
    return _(T) === s;
  }, Q.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, Q.isForwardRef = function(T) {
    return _(T) === f;
  }, Q.isFragment = function(T) {
    return _(T) === n;
  }, Q.isLazy = function(T) {
    return _(T) === m;
  }, Q.isMemo = function(T) {
    return _(T) === h;
  }, Q.isPortal = function(T) {
    return _(T) === r;
  }, Q.isProfiler = function(T) {
    return _(T) === o;
  }, Q.isStrictMode = function(T) {
    return _(T) === a;
  }, Q.isSuspense = function(T) {
    return _(T) === d;
  }, Q.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === n || T === c || T === o || T === a || T === d || T === p || typeof T == "object" && T !== null && (T.$$typeof === m || T.$$typeof === h || T.$$typeof === s || T.$$typeof === i || T.$$typeof === f || T.$$typeof === y || T.$$typeof === x || T.$$typeof === S || T.$$typeof === b);
  }, Q.typeOf = _, Q;
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
var rn;
function Ir() {
  return rn || (rn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function _(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === c || D === o || D === a || D === d || D === p || typeof D == "object" && D !== null && (D.$$typeof === m || D.$$typeof === h || D.$$typeof === s || D.$$typeof === i || D.$$typeof === f || D.$$typeof === y || D.$$typeof === x || D.$$typeof === S || D.$$typeof === b);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case t:
            var Ce = D.type;
            switch (Ce) {
              case u:
              case c:
              case n:
              case o:
              case a:
              case d:
                return Ce;
              default:
                var pe = Ce && Ce.$$typeof;
                switch (pe) {
                  case i:
                  case f:
                  case m:
                  case h:
                  case s:
                    return pe;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var T = u, C = c, U = i, L = s, F = t, R = f, I = n, H = m, z = h, $ = r, A = o, P = a, V = d, re = !1;
    function se(D) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(D) || v(D) === u;
    }
    function w(D) {
      return v(D) === c;
    }
    function l(D) {
      return v(D) === i;
    }
    function k(D) {
      return v(D) === s;
    }
    function B(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function j(D) {
      return v(D) === f;
    }
    function q(D) {
      return v(D) === n;
    }
    function G(D) {
      return v(D) === m;
    }
    function M(D) {
      return v(D) === h;
    }
    function Y(D) {
      return v(D) === r;
    }
    function J(D) {
      return v(D) === o;
    }
    function X(D) {
      return v(D) === a;
    }
    function ie(D) {
      return v(D) === d;
    }
    ee.AsyncMode = T, ee.ConcurrentMode = C, ee.ContextConsumer = U, ee.ContextProvider = L, ee.Element = F, ee.ForwardRef = R, ee.Fragment = I, ee.Lazy = H, ee.Memo = z, ee.Portal = $, ee.Profiler = A, ee.StrictMode = P, ee.Suspense = V, ee.isAsyncMode = se, ee.isConcurrentMode = w, ee.isContextConsumer = l, ee.isContextProvider = k, ee.isElement = B, ee.isForwardRef = j, ee.isFragment = q, ee.isLazy = G, ee.isMemo = M, ee.isPortal = Y, ee.isProfiler = J, ee.isStrictMode = X, ee.isSuspense = ie, ee.isValidElementType = _, ee.typeOf = v;
  })()), ee;
}
var on;
function kn() {
  return on || (on = 1, process.env.NODE_ENV === "production" ? Fe.exports = Lr() : Fe.exports = Ir()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lt, sn;
function Dr() {
  if (sn) return lt;
  sn = 1;
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
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lt = a() ? Object.assign : function(o, s) {
    for (var i, u = n(o), c, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var d in i)
        t.call(i, d) && (u[d] = i[d]);
      if (e) {
        c = e(i);
        for (var p = 0; p < c.length; p++)
          r.call(i, c[p]) && (u[c[p]] = i[c[p]]);
      }
    }
    return u;
  }, lt;
}
var ut, an;
function Pt() {
  if (an) return ut;
  an = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ut = e, ut;
}
var dt, cn;
function Nn() {
  return cn || (cn = 1, dt = Function.call.bind(Object.prototype.hasOwnProperty)), dt;
}
var ft, ln;
function Hr() {
  if (ln) return ft;
  ln = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Pt(), r = {}, n = /* @__PURE__ */ Nn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var d;
          try {
            if (typeof o[f] != "function") {
              var p = Error(
                (u || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[f](s, f, u, i, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + i + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ft = a, ft;
}
var pt, un;
function Br() {
  if (un) return pt;
  un = 1;
  var e = kn(), t = Dr(), r = /* @__PURE__ */ Pt(), n = /* @__PURE__ */ Nn(), a = /* @__PURE__ */ Hr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var u = "Warning: " + i;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return pt = function(i, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(w) {
      var l = w && (c && w[c] || w[f]);
      if (typeof l == "function")
        return l;
    }
    var p = "<<anonymous>>", h = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: S(),
      arrayOf: _,
      element: v(),
      elementType: T(),
      instanceOf: C,
      node: R(),
      objectOf: L,
      oneOf: U,
      oneOfType: F,
      shape: H,
      exact: z
    };
    function m(w, l) {
      return w === l ? w !== 0 || 1 / w === 1 / l : w !== w && l !== l;
    }
    function b(w, l) {
      this.message = w, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(w) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, k = 0;
      function B(q, G, M, Y, J, X, ie) {
        if (Y = Y || p, X = X || M, ie !== r) {
          if (u) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = Y + ":" + M;
            !l[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ue] = !0, k++);
          }
        }
        return G[M] == null ? q ? G[M] === null ? new b("The " + J + " `" + X + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new b("The " + J + " `" + X + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(G, M, Y, J, X);
      }
      var j = B.bind(null, !1);
      return j.isRequired = B.bind(null, !0), j;
    }
    function x(w) {
      function l(k, B, j, q, G, M) {
        var Y = k[B], J = P(Y);
        if (J !== w) {
          var X = V(Y);
          return new b(
            "Invalid " + q + " `" + G + "` of type " + ("`" + X + "` supplied to `" + j + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return y(l);
    }
    function S() {
      return y(s);
    }
    function _(w) {
      function l(k, B, j, q, G) {
        if (typeof w != "function")
          return new b("Property `" + G + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var M = k[B];
        if (!Array.isArray(M)) {
          var Y = P(M);
          return new b("Invalid " + q + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var J = 0; J < M.length; J++) {
          var X = w(M, J, j, q, G + "[" + J + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return y(l);
    }
    function v() {
      function w(l, k, B, j, q) {
        var G = l[k];
        if (!i(G)) {
          var M = P(G);
          return new b("Invalid " + j + " `" + q + "` of type " + ("`" + M + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(w);
    }
    function T() {
      function w(l, k, B, j, q) {
        var G = l[k];
        if (!e.isValidElementType(G)) {
          var M = P(G);
          return new b("Invalid " + j + " `" + q + "` of type " + ("`" + M + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(w);
    }
    function C(w) {
      function l(k, B, j, q, G) {
        if (!(k[B] instanceof w)) {
          var M = w.name || p, Y = se(k[B]);
          return new b("Invalid " + q + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return y(l);
    }
    function U(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(k, B, j, q, G) {
        for (var M = k[B], Y = 0; Y < w.length; Y++)
          if (m(M, w[Y]))
            return null;
        var J = JSON.stringify(w, function(ie, D) {
          var ue = V(D);
          return ue === "symbol" ? String(D) : D;
        });
        return new b("Invalid " + q + " `" + G + "` of value `" + String(M) + "` " + ("supplied to `" + j + "`, expected one of " + J + "."));
      }
      return y(l);
    }
    function L(w) {
      function l(k, B, j, q, G) {
        if (typeof w != "function")
          return new b("Property `" + G + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var M = k[B], Y = P(M);
        if (Y !== "object")
          return new b("Invalid " + q + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var J in M)
          if (n(M, J)) {
            var X = w(M, J, j, q, G + "." + J, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return y(l);
    }
    function F(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < w.length; l++) {
        var k = w[l];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(k) + " at index " + l + "."
          ), s;
      }
      function B(j, q, G, M, Y) {
        for (var J = [], X = 0; X < w.length; X++) {
          var ie = w[X], D = ie(j, q, G, M, Y, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && J.push(D.data.expectedType);
        }
        var ue = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + Y + "` supplied to " + ("`" + G + "`" + ue + "."));
      }
      return y(B);
    }
    function R() {
      function w(l, k, B, j, q) {
        return $(l[k]) ? null : new b("Invalid " + j + " `" + q + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return y(w);
    }
    function I(w, l, k, B, j) {
      return new b(
        (w || "React class") + ": " + l + " type `" + k + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function H(w) {
      function l(k, B, j, q, G) {
        var M = k[B], Y = P(M);
        if (Y !== "object")
          return new b("Invalid " + q + " `" + G + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var J in w) {
          var X = w[J];
          if (typeof X != "function")
            return I(j, q, G, J, V(X));
          var ie = X(M, J, j, q, G + "." + J, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return y(l);
    }
    function z(w) {
      function l(k, B, j, q, G) {
        var M = k[B], Y = P(M);
        if (Y !== "object")
          return new b("Invalid " + q + " `" + G + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var J = t({}, k[B], w);
        for (var X in J) {
          var ie = w[X];
          if (n(w, X) && typeof ie != "function")
            return I(j, q, G, X, V(ie));
          if (!ie)
            return new b(
              "Invalid " + q + " `" + G + "` key `" + X + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(k[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var D = ie(M, X, j, q, G + "." + X, r);
          if (D)
            return D;
        }
        return null;
      }
      return y(l);
    }
    function $(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every($);
          if (w === null || i(w))
            return !0;
          var l = d(w);
          if (l) {
            var k = l.call(w), B;
            if (l !== w.entries) {
              for (; !(B = k.next()).done; )
                if (!$(B.value))
                  return !1;
            } else
              for (; !(B = k.next()).done; ) {
                var j = B.value;
                if (j && !$(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(w, l) {
      return w === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function P(w) {
      var l = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : A(l, w) ? "symbol" : l;
    }
    function V(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var l = P(w);
      if (l === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function re(w) {
      var l = V(w);
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
    function se(w) {
      return !w.constructor || !w.constructor.name ? p : w.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, pt;
}
var gt, dn;
function jr() {
  if (dn) return gt;
  dn = 1;
  var e = /* @__PURE__ */ Pt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, gt = function() {
    function n(s, i, u, c, f, d) {
      if (d !== e) {
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
  }, gt;
}
var fn;
function zr() {
  if (fn) return $e.exports;
  if (fn = 1, process.env.NODE_ENV !== "production") {
    var e = kn(), t = !0;
    $e.exports = /* @__PURE__ */ Br()(e.isElement, t);
  } else
    $e.exports = /* @__PURE__ */ jr()();
  return $e.exports;
}
var $r = /* @__PURE__ */ zr();
const E = /* @__PURE__ */ Cr($r), Pn = {
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
}, Fr = [
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
], Xe = "16px", Ur = (e) => Math.round(e * 96 / 72), Wr = (e) => Math.round(e * 72 / 96 * 2) / 2, Xa = (e) => {
  const t = Object.values(Pn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Ur(e)}px`;
}, Ja = (e) => {
  const t = parseInt(e), r = Object.values(Pn).find((n) => n.px === t);
  return r ? r.pt : Wr(t);
}, Qa = (e) => {
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
}, Gr = {
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
}, pn = {
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
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, qr = () => {
  const [e, t] = ne(pn), r = Te(), n = N((h, m, b = null) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const x = y.getRangeAt(0);
      if (!x.toString())
        return t((_) => ({ ..._, [h]: m })), !1;
      try {
        const _ = document.createElement("span");
        _.style[h] = m;
        const v = x.extractContents();
        return _.appendChild(v), x.insertNode(_), x.selectNodeContents(_), y.removeAllRanges(), y.addRange(x), t((T) => ({ ...T, [h]: m })), !0;
      } catch {
        if (b) {
          const _ = h === "fontSize" ? Gr[m] || "3" : m;
          return document.execCommand(b, !1, _), t((v) => ({ ...v, [h]: m })), !0;
        }
        return !1;
      }
    } catch (y) {
      return console.warn(`[useFormatting] Style application failed for ${h}:`, y), !1;
    }
  }, []), a = N((h) => n("fontFamily", h, "fontName"), [n]), o = N((h) => n("fontSize", h, "fontSize"), [n]), s = N((h) => n("color", h, "foreColor"), [n]), i = N((h) => {
    t((m) => ({
      ...m,
      alignLeft: h === "left",
      alignCenter: h === "center",
      alignRight: h === "right",
      alignJustify: h === "justify"
    }));
  }, []), u = N((h) => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return !1;
      const b = m.getRangeAt(0), y = b.toString(), S = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[h];
      if (!S)
        return !1;
      if (!y) {
        const v = b.startContainer, T = v.nodeType === Node.TEXT_NODE ? v.parentElement : v, C = ke(T) || Vr();
        return C && (C.style.textAlign = S, i(S)), !0;
      }
      const _ = Yr(b);
      if (_.length === 0) {
        const v = document.createElement("p");
        v.style.textAlign = S;
        const T = b.extractContents();
        v.appendChild(T), b.insertNode(v), b.selectNodeContents(v), m.removeAllRanges(), m.addRange(b);
      } else
        _.forEach((v) => {
          v.style.textAlign = S;
        });
      return i(S), !0;
    } catch (m) {
      return console.warn("[useFormatting] Text alignment failed:", m), !1;
    }
  }, [i]), c = N((h) => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return !1;
      const b = m.getRangeAt(0), y = document.createElement("div");
      if (y.innerHTML = h, Array.from(y.children).some(
        (S) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(S.tagName)
      )) {
        const S = b.startContainer, _ = S.nodeType === Node.TEXT_NODE ? S.parentElement : S, v = ke(_);
        if (v && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(v.tagName)) {
          const T = v.tagName.toLowerCase();
          if (b.startOffset === 0 && (S === v || S.nodeType === Node.TEXT_NODE && S === v.firstChild))
            v.parentNode.insertBefore(y, v);
          else if (b.startOffset === S.textContent?.length && S === v.lastChild && b.endOffset === S.textContent?.length) {
            const L = v.nextSibling;
            L ? v.parentNode.insertBefore(y, L) : v.parentNode.appendChild(y);
          } else {
            const L = b.extractContents(), F = document.createTextNode(""), R = document.createElement(T);
            R.appendChild(F), R.appendChild(L);
            const I = v.parentNode;
            I.insertBefore(y, v.nextSibling), I.insertBefore(R, y.nextSibling), !v.textContent.trim() && v.children.length === 0 && I.removeChild(v);
          }
        } else
          b.insertNode(y);
        b.setStartAfter(y), b.setEndAfter(y), m.removeAllRanges(), m.addRange(b);
      } else
        document.execCommand("insertHTML", !1, h);
      return !0;
    } catch (m) {
      console.warn("[useFormatting] InsertHTML failed:", m);
      try {
        return document.execCommand("insertHTML", !1, h), !0;
      } catch (b) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", b), !1;
      }
    }
  }, []), f = N((h, m = null) => {
    try {
      if (h === "undo") {
        r.undo();
        return;
      }
      if (h === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (h === "insertHTML" && m) {
        c(m);
        return;
      }
      if (h === "fontSize") {
        o(m);
        return;
      }
      if (h === "fontName") {
        a(m);
        return;
      }
      if (h === "foreColor") {
        s(m);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(h)) {
        u(h);
        return;
      }
      switch (document.execCommand(h, !1, m) || console.warn(`[useFormatting] Command "${h}" failed`), h) {
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
          t((y) => ({ ...y, headingLevel: m }));
          break;
        default:
          break;
      }
    } catch (b) {
      console.warn(`[useFormatting] Error executing command "${h}":`, b);
    }
  }, [o, a, u, c, r]), d = N(() => {
    try {
      const h = window.getSelection();
      if (!h || h.rangeCount === 0)
        return;
      const m = h.getRangeAt(0), b = m.toString();
      let y = Xe, x = "Arial", S = "#000000", _ = "p", v = "left";
      if (b) {
        const C = m.startContainer, U = C.nodeType === Node.TEXT_NODE ? C.parentElement : C;
        if (U) {
          const L = window.getComputedStyle(U), F = L.fontSize, R = L.fontFamily;
          F && F.endsWith("px") && (y = F), R && R !== "serif" && (x = R.split(",")[0].replace(/['"]/g, "").trim());
          const I = L.color;
          I && I !== "rgb(0, 0, 0)" && I !== "#000000" && (I.startsWith("rgb") ? S = Zr(I) : S = I);
          const H = ke(U);
          if (H) {
            const z = H.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(z) && (_ = z);
            const A = window.getComputedStyle(H).textAlign;
            ["left", "center", "right", "justify"].includes(A) && (v = A);
          }
        }
      }
      const T = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: v === "left",
        alignCenter: v === "center",
        alignRight: v === "right",
        alignJustify: v === "justify",
        fontFamily: x,
        fontSize: y,
        fontColor: S,
        headingLevel: _
      };
      t((C) => ({
        ...C,
        ...T
      }));
    } catch (h) {
      console.warn("[useFormatting] Error updating format from selection:", h);
    }
  }, []), p = N(() => {
    t(pn);
  }, []);
  return {
    currentFormat: e,
    formatText: f,
    resetFormat: p,
    updateCurrentFormatFromSelection: d
  };
};
function Zr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function ke(e) {
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
function Yr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = ke(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = ke(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (u) => {
        const c = u.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(c) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function Vr() {
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
const be = 'page-break, [data-page-break="true"]', Kr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Pe(r), a = e.querySelectorAll(be), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((u, c) => {
    const d = u.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: d,
      height: n.height
    });
  }), o;
}, Mn = (e, t = 100, r = ye) => {
  const n = Pe(e), a = _r(r), o = n.height - a, s = t / 100;
  return o / s;
}, Xr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(be);
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
}, gn = (e) => {
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
}, Jr = (e) => {
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
}, Qr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, eo = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const u = Mn(r, n, a) * (t - 1), c = Array.from(e.children);
    let f = 0, d = null;
    for (let p = 0; p < c.length; p++) {
      const h = c[p];
      if (h.tagName === "PAGE-BREAK" || h.getAttribute("data-page-break") === "true")
        continue;
      const m = Jr(h);
      if (f + m > u) {
        d = h;
        break;
      }
      f += m;
    }
    if (d) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(p, d), o) {
        const h = e.innerHTML;
        o(h);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const h = document.createElement("p");
      if (h.innerHTML = "<br>", e.appendChild(h), o) {
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
}, to = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(be));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
    let f = !1, d = [], p = null;
    if (t === 0) {
      const m = u[0];
      if (!m)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let b = e.firstChild;
      for (; b && b !== m; )
        d.push(b), b = b.nextSibling;
      p = m;
    } else {
      const m = u[t - 1];
      if (!m)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const b = u[t];
      let y = m.nextSibling;
      for (; y && y !== b; )
        d.push(y), y = y.nextSibling;
      p = m;
    }
    if (c && c.rangeCount > 0) {
      const b = c.getRangeAt(0).startContainer;
      for (const y of d)
        if (y.contains(b) || y === b) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), d.forEach((m) => {
      m.parentNode && m.remove();
    }), e.querySelectorAll(be).forEach((m, b) => {
      m.setAttribute("data-page-number", String(b + 2));
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
  } catch (u) {
    return console.error("[removePageAndContent] Failed to remove page:", u), !1;
  }
}, no = (e) => {
  if (e)
    try {
      e.querySelectorAll(be).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, ro = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), no(t), r) {
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
}, oo = 200, so = 50, hn = 3, ao = 20, Ln = (e) => {
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
}, co = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = Mn(t, r, n);
    let c = gn(e), f = !1, d = 0;
    for (let p = 0; p < c.length && d < hn; p++) {
      const h = c[p], m = io(h, u);
      if (m && m.overflowIndex > 0) {
        let b = 0;
        for (let _ = 0; _ < h.length; _++) {
          const v = h[_];
          v && v.getBoundingClientRect && (b += Ln(v));
        }
        if (b - u < ao)
          continue;
        const x = p + 2;
        Qr(m.overflowElement, x) && (f = !0, d++, c = gn(e));
      }
    }
    if (f) {
      if (a) {
        const p = e.innerHTML;
        a(p);
      }
      setTimeout(() => {
        o && o(), d >= hn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, so);
    }
    return f;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, lo = (e, t, r = oo) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, uo = 400, In = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(be)[t - 1];
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
}, fo = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(be)[r - 1];
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
      }, uo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, po = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, go = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(be);
  for (const f of a)
    if (r.comparePoint(f, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = i.length, c = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: c,
    charOffset: u
  };
}, ho = 300, mo = (e, t, r = 100, n = "NARROW") => {
  const a = Te(), o = te(null), s = te(null), i = te(e), u = te(r), c = te(n), f = te(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    u.current = r;
  }, [r]), oe(() => {
    c.current = n;
  }, [n]), oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = N((C = {}) => t?.current ? Kr(t.current, C) : [], [t]), p = N((C = {}) => {
    const U = d(C);
    return a.updatePageBoundaries(U), U;
  }, [d, a]), h = N((C = {}) => {
    const U = typeof C.delay == "number" ? C.delay : ho;
    po(p, o, C, U);
  }, [p]), m = N(() => {
    t?.current && co(
      t.current,
      i.current,
      u.current,
      c.current,
      a.updateContinuousContent,
      p,
      f,
      m
    );
  }, [t, a, p]), b = N((C) => {
    lo(m, s, C);
  }, [m]), y = N((C) => !C?.current || !t?.current ? 0 : Xr(C.current, t.current), [t]), x = N((C) => {
    t?.current && In(t.current, C);
  }, [t]), S = N((C, U) => {
    if (!U?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    fo(U.current, t.current, C, x);
  }, [t, x]), _ = N(async (C) => t?.current ? eo(
    t.current,
    C,
    i.current,
    u.current,
    c.current,
    a.updateContinuousContent,
    p
  ) : !1, [t, a, p]), v = N((C) => t?.current ? to(
    t.current,
    C,
    d,
    a.updateContinuousContent,
    p,
    x,
    m
  ) : !1, [t, d, a, p, x, m]), T = N((C) => t?.current ? ro(
    C,
    t.current,
    a.updateContinuousContent,
    p,
    m
  ) : !1, [t, a, p, m]);
  return oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ge(() => ({
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: h,
    updateBoundaries: p,
    getCurrentPage: y,
    scrollToPage: S,
    positionCursorAtPage: x,
    checkAndReflow: m,
    triggerAutoReflow: b,
    removePageAndContent: v,
    removePageBreak: T,
    insertPageBreakAtBoundary: _,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    h,
    p,
    y,
    S,
    x,
    m,
    b,
    v,
    T,
    _
  ]);
}, yo = (e, t) => {
  const { handleZoomIn: r, handleZoomOut: n, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: i, containerRef: u } = t;
  oe(() => {
    const c = (f) => {
      if (f.ctrlKey || f.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(f.key) && f.preventDefault();
        const d = document.activeElement === i.current, p = document.activeElement === u.current, h = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (d || p || !h)
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
  }, [r, n, a, o, s, i, u]);
}, bo = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const r = te(null), n = N(() => {
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
  }, [t]), a = N(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return oe(() => {
    const o = () => {
      if (e(), t.current) {
        const i = window.getSelection();
        if (i.rangeCount > 0) {
          const u = i.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (r.current = u.cloneRange());
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
}, Ae = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, W = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function ei({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Ae
}) {
  const u = n - t, c = a - r;
  let f = o, d = s;
  switch (e) {
    case W.TOP_LEFT:
      f = Math.max(i.minWidth, o - u), d = Math.max(i.minHeight, s - c);
      break;
    case W.TOP_RIGHT:
      f = Math.max(i.minWidth, o + u), d = Math.max(i.minHeight, s - c);
      break;
    case W.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - u), d = Math.max(i.minHeight, s + c);
      break;
    case W.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + u), d = Math.max(i.minHeight, s + c);
      break;
    case W.TOP:
      d = Math.max(i.minHeight, s - c);
      break;
    case W.BOTTOM:
      d = Math.max(i.minHeight, s + c);
      break;
    case W.LEFT:
      f = Math.max(i.minWidth, o - u);
      break;
    case W.RIGHT:
      f = Math.max(i.minWidth, o + u);
      break;
    default:
      return { width: f, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = o / s;
    [
      W.TOP_LEFT,
      W.TOP_RIGHT,
      W.BOTTOM_LEFT,
      W.BOTTOM_RIGHT
    ].includes(e) ? f / p > d ? d = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, d * p) : [W.TOP, W.BOTTOM].includes(e) ? f = d * p : [W.LEFT, W.RIGHT].includes(e) && (d = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = f / (o / s))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = d * (o / s))), f = Math.max(i.minWidth, f), d = Math.max(i.minHeight, d), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function Ee(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ti(e) {
  return Ee(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ni(e, { width: t, height: r }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function To(e, t = Ae) {
  if (!Ee(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(W).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = vo(o), s.style.pointerEvents = "all", Dn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function vo(e) {
  switch (e) {
    case W.TOP_LEFT:
    case W.BOTTOM_RIGHT:
      return "nwse-resize";
    case W.TOP_RIGHT:
    case W.BOTTOM_LEFT:
      return "nesw-resize";
    case W.TOP:
    case W.BOTTOM:
      return "ns-resize";
    case W.LEFT:
    case W.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Dn(e, t, r, n) {
  switch (t) {
    case W.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case W.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case W.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case W.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case W.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case W.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case W.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case W.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Rt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Dn(a, o, r.width, r.height);
  });
}
function ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Eo = "html-editor-storage", wo = 1, de = "images";
function xo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(Eo, wo);
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
function Co(e) {
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
      const s = o.target.result, u = s.split(",")[1].length * 3 / 4;
      if (u > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const c = await Le(), f = `editor-image-${xo()}`, p = c.transaction([de], "readwrite").objectStore(de), h = {
          key: f,
          dataUrl: s,
          size: u,
          type: e.type,
          timestamp: Date.now()
        }, m = p.add(h);
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
async function Ao(e) {
  try {
    const t = await Le();
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
async function Ro(e) {
  try {
    const t = await Le();
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
async function ri() {
  try {
    const e = await Le();
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
async function oi() {
  try {
    const e = await Le();
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
], So = [
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
], Oo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function _o(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Bn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function qe(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Ne(r) || "<p><br></p>";
}
function ko(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function No(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Hn.includes(r.tagName));
}
function Po(e) {
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
function Ne(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${_o(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), u = Bn(o);
      if (s === "DIV") {
        const c = Ne(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        No(o) ? t.push(Po(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = ko(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(Mo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Lo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Ne(o);
        t.push(`<blockquote${u}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (So.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (Oo.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Ne(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Mo(e) {
  const t = e.tagName.toLowerCase(), r = Bn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Ne(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Lo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Do = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), mn = (e) => {
  const t = Do(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, jn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Ho = (e) => {
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
var Bo = {
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
const jo = kt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, u) => bt(
    "svg",
    {
      ref: u,
      ...Bo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: jn("lucide", a),
      ...!o && !Ho(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([c, f]) => bt(c, f)),
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
const K = (e, t) => {
  const r = kt(
    ({ className: n, ...a }, o) => bt(jo, {
      ref: o,
      iconNode: t,
      className: jn(
        `lucide-${Io(mn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = mn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], $o = K("arrow-down", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Uo = K("arrow-left", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Go = K("arrow-right", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Zo = K("arrow-up", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Vo = K("bold", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xo = K("chevron-left", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qo = K("chevron-right", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], ts = K("file-check", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ve = K("file-text", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], os = K("hash", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], as = K("heading-1", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], cs = K("heading-2", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], us = K("heading-3", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], fs = K("image-upscale", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], gs = K("image", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ms = K("italic", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bs = K("link", ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], vs = K("list-indent-decrease", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ws = K("list-indent-increase", Es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Cs = K("list-ordered", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], zn = K("list", As);
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
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Ss = K("palette", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _s = K("plus", Os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Ns = K("redo", ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Ms = K("scaling", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Is = K("settings", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Hs = K("strikethrough", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], js = K("table", Bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Mt = K("text-align-center", zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Lt = K("text-align-end", $s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Us = K("text-align-justify", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], It = K("text-align-start", Ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], St = K("trash-2", Gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Zs = K("underline", qs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Vs = K("undo", Ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Xs = K("x", Ks);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Qs = K("zoom-in", Js);
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
], ta = K("zoom-out", ea), yn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${r}heading-${s}`,
      level: i,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, na = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, ra = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = _n(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: u, outline: c } = ge(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: yn(i, 1, "continuous-")
      };
    let d = 0;
    const p = [];
    return o.forEach((h, m) => {
      d += na(h.content), p.push(...yn(h.content, m + 1, `page-${m}-`));
    }), { wordCount: d, outline: p };
  }, [o, r, n, i]), f = n !== void 0 ? n : o.length;
  return /* @__PURE__ */ g.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ g.jsx(Ve, { size: 18 }),
            /* @__PURE__ */ g.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ g.jsx(Qo, { size: 16 }) : /* @__PURE__ */ g.jsx(Xo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ g.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ g.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(ts, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: f })
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(os, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(Ve, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ g.jsxs("h3", { children: [
              /* @__PURE__ */ g.jsx(zn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ g.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((d) => {
              const p = d.level === 1 ? as : d.level === 2 ? cs : us;
              return /* @__PURE__ */ g.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ g.jsx(p, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ g.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ g.jsxs("span", { className: "outline-page", children: [
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
const bn = new oa("Editor"), $n = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Fn = 32;
function Un(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Fn}px`, e.dataset.indentLevel = String(n));
}
function sa(e, t) {
  Un(e, t);
}
function aa(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && $n.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ia() {
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
        if (c.tagName && $n.has(c.tagName.toUpperCase())) {
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
function ca(e) {
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
function Ot(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = ia();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = aa(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      sa(s, e);
      return;
    }
    e ? ca(s) : Un(s, !1);
  });
  try {
    const s = document.createRange(), i = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (d) => {
      if (d.nodeType === Node.TEXT_NODE)
        return d;
      const p = document.createTreeWalker(
        d,
        NodeFilter.SHOW_TEXT,
        null
      );
      let h = null, m = p.nextNode();
      for (; m; )
        h = m, m = p.nextNode();
      return h;
    }, c = i(a);
    c ? s.setStart(c, 0) : s.setStart(a, 0);
    const f = u(o);
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
function la(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Ot(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Wn = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = ne(!1), o = te(null), s = [
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
  oe(() => {
    const c = (f) => {
      o.current && !o.current.contains(f.target) && a(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const i = (c) => {
    t(c), a(!1);
  }, u = (c) => {
    const f = c.target.value;
    t(f);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ g.jsx(
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
        children: /* @__PURE__ */ g.jsx(Ss, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ g.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ g.jsx("div", { className: "color-grid", children: s.map((c) => /* @__PURE__ */ g.jsx(
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
      /* @__PURE__ */ g.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ g.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: u,
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
  currentColor: E.string,
  onColorSelect: E.func.isRequired,
  title: E.string
};
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
], fa = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Dt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (h, m, b, y = null, x = !1) => /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: h,
      className: y && e[y] ? "active" : "",
      disabled: x,
      title: b,
      style: { opacity: x ? 0.5 : 1 },
      children: /* @__PURE__ */ g.jsx(m, { size: 16 })
    },
    b
  ), i = () => /* @__PURE__ */ g.jsx("div", { className: "toolbar-separator" }), u = async (h) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(h.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (h.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const b = await Co(h), y = await Ao(b);
      if (y && n) {
        const x = `<img src="${y}" data-key="${b}" alt="Inserted image" />`;
        n(x);
      } else
        bn.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (m) {
      bn.error("Error uploading image", m);
    }
  }, c = () => {
    Ot(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, f = () => {
    Ot(!0);
  }, d = () => {
    const h = prompt("Enter URL:");
    h && t("createLink", h);
  }, p = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Vs, "Undo", null, !a),
    s(() => t("redo"), Ns, "Redo", null, !o),
    i(),
    s(() => t("bold"), Vo, "Bold", "bold"),
    s(() => t("italic"), ms, "Italic", "italic"),
    s(() => t("underline"), Zs, "Underline", "underline"),
    s(() => t("strikethrough"), Hs, "Strikethrough", "strikethrough"),
    i(),
    s(() => t("justifyLeft"), It, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Mt, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Lt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Us, "Justify", "alignJustify"),
    i(),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("fontName", h.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ua.map(({ value: h, label: m }) => /* @__PURE__ */ g.jsx("option", { value: h, children: m }, h))
      }
    ),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("fontSize", h.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: Fr.map(({ value: h, label: m }) => /* @__PURE__ */ g.jsx("option", { value: h, children: m }, h))
      }
    ),
    /* @__PURE__ */ g.jsx(
      Wn,
      {
        currentColor: e.fontColor,
        onColorSelect: (h) => t("foreColor", h),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("formatBlock", h.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: da.map(({ value: h, label: m }) => /* @__PURE__ */ g.jsx("option", { value: h, children: m }, h))
      }
    ),
    i(),
    s(() => t("insertUnorderedList"), zn, "Bullet List"),
    s(() => t("insertOrderedList"), Cs, "Numbered List"),
    i(),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ g.jsx(ws, { size: 16 })
      }
    ),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: f,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ g.jsx(vs, { size: 16 })
      }
    ),
    i(),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ g.jsx(bs, { size: 16 })
      }
    ),
    s(() => t("insertHTML", fa), js, "Insert Table"),
    r && s(r, Ve, "Insert Page Break"),
    i(),
    /* @__PURE__ */ g.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (h) => h.target.files[0] && u(h.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: p,
        title: "Insert Image",
        children: /* @__PURE__ */ g.jsx(gs, { size: 16 })
      }
    )
  ] });
};
Dt.propTypes = {
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
    fontColor: E.string,
    headingLevel: E.string
  }).isRequired,
  onFormatText: E.func.isRequired,
  onAddPageBreak: E.func,
  onInsertImage: E.func,
  canUndo: E.bool,
  canRedo: E.bool
};
Dt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function pa(e) {
  return !e || typeof e != "string" ? e : qe(e);
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
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => ma(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function ma(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ya = 20, ba = 20, Tn = 20, vn = -12, Ta = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, va = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: Xe,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, En = (e, t = !0) => {
  if (!e) return;
  const r = document.createRange(), n = window.getSelection();
  t ? (r.setStart(e, 0), r.collapse(!0)) : (r.selectNodeContents(e), r.collapse(!1)), n.removeAllRanges(), n.addRange(r);
}, Ea = (e, t, r) => !!((we(t) || we(r)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), wa = (e, t, r) => !!((e.key === "Backspace" || e.key === "Delete") && (we(t) || we(r))), we = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && we(e.parentElement) : !1, Ht = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: u,
  zoomLevel: c = 100,
  pageMargins: f = ye
}) => {
  const d = ge(() => Cn(f), [f]), p = c / 100, h = N((v, T) => {
    if (!v) return !1;
    const C = v.getBoundingClientRect(), U = T - C.top;
    return U < d.top || U > C.height - d.bottom;
  }, [d.top, d.bottom]), m = N((v, T) => {
    T.preventDefault();
    const C = v.getBoundingClientRect(), U = T.clientX - C.left, L = T.clientY - C.top, F = C.width - Tn - ya, R = vn, I = C.width - Tn, H = vn + ba;
    U >= F && U <= I && L >= R && L <= H && u && u(v);
  }, [u]), b = N((v) => {
    v.preventDefault();
    const T = t.current.getBoundingClientRect();
    if (v.clientY - T.top < d.top) {
      const U = t.current.firstElementChild;
      U && U.tagName !== "PAGE-BREAK" && En(U, !0);
    } else {
      const U = t.current.lastElementChild;
      U && U.tagName !== "PAGE-BREAK" && En(U, !1);
    }
  }, [t, d.top]), y = N((v) => {
    const T = window.getSelection();
    if (!T || T.rangeCount === 0) return;
    const C = T.getRangeAt(0), { startContainer: U, endContainer: L } = C;
    if (Ea(v, U, L))
      return v.preventDefault(), !1;
    if (la(v))
      return n && n(), !1;
    if (wa(v, U, L))
      return v.preventDefault(), !1;
    a && a(v);
  }, [a, n]), x = N((v) => {
    if (!t.current) return;
    const T = v.target;
    if (we(T)) {
      m(T, v);
      return;
    }
    if (h(t.current, v.clientY)) {
      b(v);
      return;
    }
    o && o(v);
  }, [t, o, m, b, h]), S = N((v) => {
    const T = window.getSelection();
    if (!T || T.rangeCount === 0) return;
    const C = T.getRangeAt(0), { startContainer: U } = C;
    if (we(U))
      return v.preventDefault(), !1;
  }, []), _ = N((v) => {
    const T = ga(v);
    i && i(v, T);
  }, [i]);
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...Ta,
        maxWidth: `${e.width}px`,
        transform: `scale(${p})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ g.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            ...va,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`
          },
          onInput: r,
          onKeyDown: y,
          onBeforeInput: S,
          onClick: x,
          onScroll: s,
          onPaste: _,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ht.propTypes = {
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
Ht.defaultProps = {
  zoomLevel: 100,
  pageMargins: ye
};
const xa = wr(Ht), Gn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = ye,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: u,
  onDeletePage: c,
  onPageSizeChange: f,
  onPageMarginsChange: d,
  onZoomIn: p,
  onZoomOut: h,
  onZoomReset: m
} = {}) => {
  const b = Math.max(e?.length || 0, 1), y = (x) => {
    if (b <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c?.(x);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ g.jsx(Is, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ g.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ g.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (x) => f?.(x.target.value),
              children: [
                /* @__PURE__ */ g.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ g.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ g.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ g.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ g.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (x) => d?.(x.target.value),
              children: kr().map((x) => /* @__PURE__ */ g.jsx("option", { value: x, children: Nr(x) }, x))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: h,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ g.jsx(ta, { size: 12 })
        }
      ),
      /* @__PURE__ */ g.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: p,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ g.jsx(Qs, { size: 12 })
        }
      ),
      /* @__PURE__ */ g.jsx(
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
    /* @__PURE__ */ g.jsx("div", { className: "page-list", children: e.map((x, S) => /* @__PURE__ */ g.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${S === t ? "active" : ""}`,
          onClick: () => i?.(S),
          "aria-label": `Go to page ${S + 1}`,
          "aria-current": S === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ g.jsx(Ve, { size: 14 }),
            /* @__PURE__ */ g.jsxs("span", { children: [
              "Page ",
              S + 1
            ] })
          ]
        }
      ),
      b > 1 && /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (_) => {
            _.stopPropagation(), y(S);
          },
          "aria-label": `Delete page ${S + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ g.jsx(Xs, { size: 14 })
        }
      )
    ] }, x.id || `page-${S}`)) }),
    /* @__PURE__ */ g.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => u?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ g.jsx(_s, { size: 16 }),
          /* @__PURE__ */ g.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Gn.propTypes = {
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
const Ca = Ke.memo(Gn), Ue = 10, Aa = 300, Ra = 200;
function Sa(e) {
  switch (e) {
    case W.TOP_LEFT:
    case W.BOTTOM_RIGHT:
      return "nwse-resize";
    case W.TOP_RIGHT:
    case W.BOTTOM_LEFT:
      return "nesw-resize";
    case W.TOP:
    case W.BOTTOM:
      return "ns-resize";
    case W.LEFT:
    case W.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Oa(e, t, r, n, a, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = r / n;
  return [
    W.TOP_LEFT,
    W.TOP_RIGHT,
    W.BOTTOM_LEFT,
    W.BOTTOM_RIGHT
  ].includes(a) ? e / s > t ? t = e / s : e = t * s : [W.TOP, W.BOTTOM].includes(a) ? e = t * s : [W.LEFT, W.RIGHT].includes(a) && (t = e / s), { width: e, height: t };
}
function _a({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Ae
}) {
  const u = n - t, c = a - r;
  let f = o, d = s;
  switch (e) {
    case W.TOP_LEFT:
      f = o - u, d = s - c;
      break;
    case W.TOP_RIGHT:
      f = o + u, d = s - c;
      break;
    case W.BOTTOM_LEFT:
      f = o - u, d = s + c;
      break;
    case W.BOTTOM_RIGHT:
      f = o + u, d = s + c;
      break;
    case W.TOP:
      d = s - c;
      break;
    case W.BOTTOM:
      d = s + c;
      break;
    case W.LEFT:
      f = o - u;
      break;
    case W.RIGHT:
      f = o + u;
      break;
    default:
      return { width: f, height: d };
  }
  return { width: f, height: d } = Oa(
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
function qn(e, { width: t, height: r }) {
  Ee(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ka(e, t, r) {
  qn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function Na(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, u = a || o, c = r.offsetWidth, f = r.offsetHeight, p = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(n.maxWidth || 800, c + Ue),
      height: f
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(n.minWidth || 50, c - Ue),
      height: f
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: c,
      height: Math.min(n.maxHeight || 600, f + Ue)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: c,
      height: Math.max(n.minHeight || 50, f - Ue)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: Aa, height: Ra }) : null
  }[i];
  if (p) {
    e.preventDefault();
    const h = p();
    return ka(t, r, h), !0;
  }
  return !1;
}
const Bt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Ae
}) => {
  const o = te({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = te(a), i = Te();
  oe(() => {
    s.current = a;
  }, [a]);
  const u = N((y) => {
    if (!Ee(y)) return;
    o.current.overlay && (ht(o.current.overlay), o.current.overlay = null), y.classList.add("selected");
    const x = To(y, s.current);
    x && (o.current.overlay = x, o.current.image = y, document.body.appendChild(x), x.querySelectorAll(".resize-handler").forEach((_) => {
      _.addEventListener("mousedown", f);
    }), r && r(y));
  }, [r]), c = N(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (ht(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, n && n();
  }, [n]), f = N((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current.image) return;
    const x = y.currentTarget.dataset.handler, S = o.current.image.getBoundingClientRect(), _ = window.pageYOffset || document.documentElement.scrollTop, v = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: y.clientX - S.left - v,
      offsetY: y.clientY - S.top - _
    }, o.current.handler = x, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Sa(x), document.addEventListener("mousemove", d), document.addEventListener("mouseup", p);
  }, []), d = N((y) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    y.preventDefault(), y.stopPropagation();
    const { x, y: S, width: _, height: v } = o.current.start, T = o.current.handler, C = y.clientX, U = y.clientY, L = _a({
      handler: T,
      startX: x,
      startY: S,
      currentX: C,
      currentY: U,
      startWidth: _,
      startHeight: v,
      options: s.current
    });
    qn(o.current.image, L), o.current.overlay && Rt(o.current.overlay, o.current.image);
  }, []), p = N((y) => {
    if (o.current.isResizing) {
      if (y.preventDefault(), y.stopPropagation(), o.current.image && o.current.start) {
        const x = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, S = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (x.width !== S.width || x.height !== S.height) && i.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: S } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: x } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const x = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(x), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, i]), h = N((y) => {
    o.current.overlay && !o.current.overlay.contains(y.target) && c();
    const x = y.target;
    if (Ee(x)) {
      if (x === o.current.image)
        return;
      u(x);
    }
  }, [u, c]), m = N((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current.image && !o.current.isResizing) {
      y.preventDefault();
      const x = o.current.image;
      if (x.parentNode) {
        x.parentNode.removeChild(x), c();
        const S = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(S);
      }
    }
    y.key === "Escape" && o.current.image && c(), o.current.image && !o.current.isResizing && Na(y, e, o.current.image, s.current);
  }, [e, c]), b = N(() => {
    o.current.overlay && o.current.image && Rt(o.current.overlay, o.current.image);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const x = e.current.closest(".editor-viewport");
    return x && (x.addEventListener("scroll", b), window.addEventListener("scroll", b)), () => {
      x && x.removeEventListener("scroll", b), window.removeEventListener("scroll", b);
    };
  }, [e, b]), oe(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", h), y.addEventListener("keydown", m), window.addEventListener("resize", b), () => {
      y.removeEventListener("click", h), y.removeEventListener("keydown", m), window.removeEventListener("resize", b), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && ht(o.current.overlay);
    };
  }, [e, h, m, b, d, p]), oe(() => {
    if (!e.current) return;
    const y = new MutationObserver((x) => {
      x.forEach((S) => {
        S.type === "childList" && S.removedNodes.forEach((_) => {
          _.nodeType === Node.ELEMENT_NODE && Ee(_) && _ === o.current.image && c();
        });
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, c, u]), null;
};
Bt.propTypes = {
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
Bt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Ae
};
const Zn = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, Pa = {
  ...Zn,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, mt = (e) => ({
  ...Zn,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), jt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = ne({ top: 0, left: 0 }), [u, c] = ne(!1), [f, d] = ne("top"), [p, h] = ne(o), m = te(null), b = Te(), y = (R) => {
    R && requestAnimationFrame(() => {
      const I = document.querySelector(".image-resize-overlay");
      I && Rt(I, R);
    });
  }, x = (R) => {
    if (!R) return null;
    const I = window.getComputedStyle(R);
    return {
      float: I.float || "none",
      margin: R.style.margin || "",
      display: I.display || "inline",
      width: R.style.width || R.width || "",
      height: R.style.height || R.height || "",
      aspectRatio: p
    };
  }, S = N(() => {
    if (!e) return "left";
    const R = window.getComputedStyle(e);
    return R.float === "right" ? "right" : R.float === "left" ? "left" : R.display === "block" && R.margin.includes("auto") ? "center" : "left";
  }, [e]), [_, v] = ne("left");
  oe(() => {
    e && v(S());
  }, [e, S]);
  const T = N(() => {
    if (!e || !m.current) return;
    const R = e.getBoundingClientRect(), I = m.current.getBoundingClientRect(), H = window.innerWidth, z = window.innerHeight, $ = R.bottom >= 0 && R.top <= z && R.right >= 0 && R.left <= H;
    let A = "top", P = 0, V = 0;
    if ($) {
      const w = R.top - I.height - 10, l = z - R.bottom - I.height - 10;
      l > w && l > 0 ? (A = "bottom", P = R.bottom + 10) : (A = "top", P = R.top - I.height - 10);
    } else
      A = "top", P = 10;
    V = R.left + R.width / 2 - I.width / 2;
    let re = Math.max(10, Math.min(V, H - I.width - 10)), se = Math.max(10, Math.min(P, z - I.height - 10));
    i({ top: se, left: re }), d(A), c(!0);
  }, [e]);
  wn(() => {
    T();
    const R = () => {
      T();
    };
    return window.addEventListener("scroll", R), window.addEventListener("resize", R), () => {
      window.removeEventListener("scroll", R), window.removeEventListener("resize", R), c(!1);
    };
  }, [e, T]), oe(() => {
    const R = (I) => {
      m.current && !m.current.contains(I.target) && I.target !== e && a();
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [e, a]);
  const C = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, U = (R) => {
    if (e && C[R]) {
      const I = x(e), H = _, z = C[R];
      e.style.float = z.float, e.style.margin = z.margin, e.style.display = z.display, v(R), y(e);
      const $ = x(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: R, state: $ } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: H, state: I } }
      ), t && t(R);
    }
  }, L = () => {
    if (e && e.parentNode) {
      const R = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: R } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, F = () => {
    const R = p, I = !p;
    h(I), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: I } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: R } }
    ), r && r(I);
  };
  return !e || typeof document > "u" ? null : xn(
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        ref: m,
        className: "image-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !u,
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
          pointerEvents: u ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: u ? 1 : 0,
          visibility: u ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: F,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ g.jsx(Ms, { size: 14 }) : /* @__PURE__ */ g.jsx(fs, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: () => U("left"),
              title: "Align Left",
              style: mt(_ === "left"),
              children: /* @__PURE__ */ g.jsx(It, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: () => U("center"),
              title: "Align Center",
              style: mt(_ === "center"),
              children: /* @__PURE__ */ g.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: () => U("right"),
              title: "Align Right",
              style: mt(_ === "right"),
              children: /* @__PURE__ */ g.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: L,
              title: "Delete Image",
              style: Pa,
              children: /* @__PURE__ */ g.jsx(St, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  imageElement: E.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: E.func,
  onAspectRatioToggle: E.func,
  onDelete: E.func,
  onClose: E.func.isRequired,
  initialPreserveAspectRatio: E.bool
};
jt.defaultProps = {
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
function le(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function fe(e) {
  if (!le(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let u = 0; u < n; u++) {
      const c = s[u], f = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      a.push(f || 100);
    }
  else if (r.length > 0) {
    const u = r[0];
    for (let c = 0; c < u.cells.length; c++) {
      const f = u.cells[c];
      a.push(f.offsetWidth);
    }
  }
  const i = r.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
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
function Ma({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = Je
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, u, c, f, d) => {
    u >= 0 && u < i.length && (i[u] = Math.max(f, Math.min(d, i[u] + c)));
  };
  switch (e) {
    case ce.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case ce.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case ce.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case ce.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function he(e) {
  if (!le(e)) return;
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
function xe(e, t, r) {
  if (!le(e)) return;
  he(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((c, f) => c + f, 0) : 0, u = a ? a.reduce((c, f) => c + f, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : u > 0 && (e.style.height = `${u}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const c = e.querySelector("colgroup");
    c && c.querySelectorAll("col").forEach((d, p) => {
      p < n.length && (d.style.width = `${n[p]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((f, d) => {
    d < a.length && (f.style.height = `${a[d]}px`);
  }), e.style.height = `${u}px`), e.offsetHeight;
}
function La(e, t = Je) {
  if (!le(e)) return null;
  he(e);
  const r = fe(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const u = Yn(i, r, a, e);
    n.appendChild(u);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const u = Vn(i, r, a, e);
    n.appendChild(u);
  }
  const o = Kn(r, a);
  n.appendChild(o);
  const s = Xn(r, a);
  return n.appendChild(s), n;
}
function Yn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = ce.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Jn(a, e, t, r, n), a;
}
function Vn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = ce.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Qn(a, e, t, r, n), a;
}
function Kn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = ce.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", er(r, e, t), r;
}
function Xn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = ce.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", tr(r, e, t), r;
}
function _t(e, t) {
  if (!e || !t) return;
  he(t);
  const r = fe(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let d = 0; d < r.columns - 1; d++) {
      const p = Yn(d, r, n, t);
      e.appendChild(p);
    }
    for (let d = 0; d < r.rows - 1; d++) {
      const p = Vn(d, r, n, t);
      e.appendChild(p);
    }
    const c = Kn(r, n);
    e.appendChild(c);
    const f = Xn(r, n);
    e.appendChild(f);
  } else
    a.forEach((c, f) => {
      Jn(c, f, r, n, t);
    }), o.forEach((c, f) => {
      Qn(c, f, r, n, t);
    }), s && er(s, r, n), i && tr(i, r, n);
}
function We(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ia(e, t) {
  if (!le(e))
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
  he(e);
  const o = fe(e);
  return o && xe(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function Da(e, t) {
  if (!le(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const u = document.createElement("td");
    u.innerHTML = "&nbsp;", n.appendChild(u);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  he(e);
  const s = fe(e);
  return s && xe(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Jn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const u = s.cells[t].getBoundingClientRect(), c = a.getBoundingClientRect(), f = u.right - c.left - 2;
      e.style.left = `${f}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Qn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const u = s.cells[0].getBoundingClientRect(), c = a.getBoundingClientRect(), f = u.bottom - c.top - 2;
      e.style.top = `${f}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function er(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function tr(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function Ha(e, t) {
  if (!le(e))
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
    he(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function Ba(e, t) {
  if (!le(e))
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
    he(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function ja(e, t) {
  if (!le(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), he(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function za(e, t) {
  if (!le(e))
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
    he(e);
    const n = fe(e);
    return n && xe(e, {
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
  resizeOptions: a = Je
}) => {
  const o = te(null), s = te(null), i = te(null), u = te(null), c = te(null), f = te(a), d = te(!1), [p, h] = ne(null), m = Te();
  oe(() => {
    f.current = a;
  }, [a]);
  const b = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (We(o.current), o.current = null), h(null), i.current = null, u.current = null, c.current = null, d.current = !1, n && n();
  }, [n]), y = N((L) => {
    if (L.preventDefault(), L.stopPropagation(), !s.current) return;
    const F = L.currentTarget, R = F.dataset.type, I = parseInt(F.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const H = fe(s.current);
    i.current = {
      x: L.clientX,
      y: L.clientY,
      structure: { ...H }
    }, u.current = R, c.current = I, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const z = {
      [ce.COLUMN]: "col-resize",
      [ce.ROW]: "row-resize",
      [ce.TABLE_BOTTOM]: "ns-resize",
      [ce.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = z[R] || "default", document.addEventListener("mousemove", _), document.addEventListener("mouseup", v);
  }, []), x = N((L) => {
    const F = La(L, f.current);
    return F && (o.current = F, s.current = L, document.body.appendChild(F), F.querySelectorAll(".table-resize-handler").forEach((I) => {
      I.addEventListener("mousedown", y);
    })), F;
  }, [y]), S = N((L) => {
    if (!le(L)) return;
    o.current && (We(o.current), o.current = null), L.classList.add("selected"), x(L) && (h(L), r && r(L));
  }, [r, x]), _ = N((L) => {
    if (!d.current || !s.current || !i.current || !u.current) return;
    L.preventDefault(), L.stopPropagation();
    const { x: F, y: R, structure: I } = i.current, H = u.current, z = c.current, $ = L.clientX, A = L.clientY;
    let P = 0;
    switch (H) {
      case ce.COLUMN:
        P = $ - F;
        break;
      case ce.ROW:
        P = A - R;
        break;
      case ce.TABLE_BOTTOM:
        P = A - R;
        break;
      case ce.TABLE_RIGHT:
        P = $ - F;
        break;
    }
    const V = Ma({
      type: H,
      index: z,
      delta: P,
      currentStructure: I,
      options: f.current
    });
    xe(s.current, V), o.current && _t(o.current, s.current);
  }, []), v = N((L) => {
    if (d.current) {
      if (L.preventDefault(), L.stopPropagation(), s.current && i.current) {
        const F = {
          structure: i.current.structure
        }, R = {
          structure: fe(s.current)
        };
        (F.structure.width !== R.structure.width || F.structure.height !== R.structure.height || JSON.stringify(F.structure.columnWidths) !== JSON.stringify(R.structure.columnWidths) || JSON.stringify(F.structure.rowHeights) !== JSON.stringify(R.structure.rowHeights)) && m.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: R } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: F } }
        );
      }
      if (i.current = null, u.current = null, c.current = null, d.current = !1, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(F), t && t(s.current, fe(s.current));
      }
    }
  }, [t, m]), T = N((L) => {
    o.current && !o.current.contains(L.target) && b();
    const R = L.target.closest("table");
    if (R && le(R)) {
      if (R === s.current)
        return;
      S(R);
    }
  }, [S, b]), C = N((L) => {
    if (L.key === "Delete" && s.current && !d.current) {
      L.preventDefault();
      const F = s.current;
      if (F.parentNode) {
        F.parentNode.removeChild(F), b();
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(R);
      }
    }
    L.key === "Escape" && s.current && b();
  }, [e, b]), U = N(() => {
    o.current && s.current && _t(o.current, s.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const F = e.current.closest(".editor-viewport");
    return F && (F.addEventListener("scroll", U), window.addEventListener("scroll", U)), () => {
      F && F.removeEventListener("scroll", U), window.removeEventListener("scroll", U);
    };
  }, [e, U]), oe(() => {
    if (!e.current) return;
    const L = e.current;
    return L.addEventListener("click", T), L.addEventListener("keydown", C), window.addEventListener("resize", U), () => {
      L.removeEventListener("click", T), L.removeEventListener("keydown", C), window.removeEventListener("resize", U), d.current && (document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && We(o.current);
    };
  }, [e, T, C, U, _, v]), oe(() => {
    if (!e.current) return;
    const L = new MutationObserver((F) => {
      F.forEach((R) => {
        R.type === "childList" && (R.removedNodes.forEach((I) => {
          I.nodeType === Node.ELEMENT_NODE && le(I) && I === p && b();
        }), R.addedNodes.forEach((I) => {
          if (I.nodeType !== Node.ELEMENT_NODE) return;
          if (le(I)) {
            setTimeout(() => S(I), 50);
            return;
          }
          const H = I.querySelectorAll?.("table") || [];
          H.length > 0 && setTimeout(() => S(H[0]), 50);
        }));
      });
    });
    return L.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => L.disconnect();
  }, [e, b, S]), oe(() => {
    if (!p) return;
    const L = new MutationObserver((F) => {
      F.some((I) => {
        if (I.type === "childList") {
          if ([...I.addedNodes, ...I.removedNodes].some(
            (z) => z.nodeType === Node.ELEMENT_NODE && z.tagName === "TR"
          )) return !0;
        } else if (I.type === "attributes" && ["colspan", "rowspan"].includes(I.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (We(o.current), o.current = null, x(s.current));
    });
    return L.observe(p, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => L.disconnect();
  }, [p, x]), null;
};
zt.propTypes = {
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
zt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const $t = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = ne({ top: 0, left: 0 }), [u, c] = ne(!1), [f, d] = ne("top"), p = te(null), h = te(null), m = Te(), b = (A) => {
    if (!A)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (V) => setTimeout(V, 16))(() => {
      const V = document.querySelector(".table-resize-overlay");
      V && _t(V, A);
    });
  }, y = (A) => {
    if (!A) return null;
    const P = window.getComputedStyle(A);
    return {
      float: P.float || "none",
      margin: A.style.margin || "",
      marginLeft: A.style.marginLeft || "",
      marginRight: A.style.marginRight || "",
      display: P.display || "table"
    };
  }, x = N(() => {
    if (!e) return "left";
    const A = window.getComputedStyle(e);
    return A.marginLeft === "auto" && A.marginRight === "auto" ? "center" : A.float === "right" ? "right" : (A.float === "left", "left");
  }, [e]), [S, _] = ne("left");
  oe(() => {
    e && _(x());
  }, [e, x]);
  const v = N(() => {
    if (!e || !p.current) return;
    const A = e.getBoundingClientRect(), P = p.current.getBoundingClientRect(), V = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, re = A.bottom >= 0 && A.top <= V.height && A.right >= 0 && A.left <= V.width;
    let se = "top", w = 0, l = 0;
    if (re) {
      const G = A.top - P.height - 10, M = V.height - A.bottom - P.height - 10;
      M > G && M > 0 ? (se = "bottom", w = A.bottom + 10) : (se = "top", w = A.top - P.height - 10);
    } else
      se = "top", w = 10;
    l = A.left + A.width / 2 - P.width / 2;
    const k = window.innerWidth, B = window.innerHeight;
    let j = Math.max(10, Math.min(l, k - P.width - 10)), q = Math.max(10, Math.min(w, B - P.height - 10));
    i({ top: q, left: j }), d(se), c(!0);
  }, [e]);
  wn(() => {
    v();
    const A = () => {
      v();
    }, P = h.current;
    return P && P.addEventListener("scroll", A), window.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
      P && P.removeEventListener("scroll", A), window.removeEventListener("scroll", A), window.removeEventListener("resize", A), c(!1);
    };
  }, [e, v]), oe(() => {
    const A = (P) => {
      p.current && !p.current.contains(P.target) && P.target !== e && !e.contains(P.target) && r();
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [e, r]);
  const T = {
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
  }, C = (A) => {
    if (e && T[A]) {
      const P = y(e), V = S, re = T[A];
      e.style.float = re.float, e.style.margin = re.margin, e.style.marginLeft = re.marginLeft, e.style.marginRight = re.marginRight, _(A), b(e);
      const se = y(e);
      m.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: A, state: se } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: V, state: P } }
      ), t && t(A);
    }
  }, U = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const A = Ia(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to insert row above");
  }, L = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const A = Da(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to insert row below");
  }, F = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), Ha(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to insert column left");
  }, R = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), Ba(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to insert column right");
  }, I = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), ja(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to delete row");
  }, H = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), za(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const P = o.current.innerHTML;
        console.log("Updated content length:", P.length), m.updateContinuousContent(P);
      } else
        console.warn("No editor ref available to update content");
      m.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), b(e), requestAnimationFrame(() => v());
    } else
      console.error("Failed to delete column");
  }, z = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, $ = (A) => ({
    ...z,
    background: A ? "#007bff" : "transparent",
    color: A ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : xn(
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        ref: p,
        className: "table-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !u,
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
          pointerEvents: u ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: u ? 1 : 0,
          visibility: u ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${S === "left" ? "active" : ""}`,
              onClick: () => C("left"),
              title: "Align Left",
              style: $(S === "left"),
              children: /* @__PURE__ */ g.jsx(It, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${S === "center" ? "active" : ""}`,
              onClick: () => C("center"),
              title: "Align Center",
              style: $(S === "center"),
              children: /* @__PURE__ */ g.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${S === "right" ? "active" : ""}`,
              onClick: () => C("right"),
              title: "Align Right",
              style: $(S === "right"),
              children: /* @__PURE__ */ g.jsx(Lt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: U,
                title: "Insert Row Above",
                style: {
                  ...z,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx(Zo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: L,
                title: "Insert Row Below",
                style: {
                  ...z,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx($o, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: I,
                title: "Delete Row",
                style: {
                  ...z,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx(St, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: F,
                title: "Insert Column Left",
                style: {
                  ...z,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(Uo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: R,
                title: "Insert Column Right",
                style: {
                  ...z,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(Go, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: H,
                title: "Delete Column",
                style: {
                  ...z,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(St, { size: 14 })
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
  tableElement: E.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: E.func,
  onClose: E.func.isRequired,
  selectedRowIndex: E.number,
  selectedColIndex: E.number,
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
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
  const [r, n] = ne(/* @__PURE__ */ new Set()), [a, o] = ne(null), [s, i] = ne(null), [u, c] = ne(null), [f, d] = ne(!1), [p, h] = ne(!1), [m, b] = ne(null), [y, x] = ne(null);
  Te(), te(null);
  const S = te(null), _ = N(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), c(null), b(null), x(null), d(!1), h(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((H) => {
      H.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), S.current !== null && (S.current = null, t && t(null));
  }, [t]), v = N((H) => {
    const z = H.closest("tr"), $ = H.closest("table");
    if (!z || !$) return null;
    const A = Array.from($.rows).indexOf(z), P = Array.from(z.cells).indexOf(H);
    return { rowIndex: A, cellIndex: P, table: $ };
  }, []), T = N((H) => {
    if (H.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const z = Array.from(H), $ = z[0], A = v($);
    if (!A) return { mode: null, rowIndex: null, colIndex: null };
    const { table: P } = A;
    return z.filter((se) => {
      const w = v(se);
      return w && w.table === P && w.rowIndex === A.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: A.rowIndex, colIndex: null } : z.filter((se) => {
      const w = v(se);
      return w && w.table === P && w.cellIndex === A.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: A.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [v]), C = N((H, z, $, A, P) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((V) => {
      V.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!P || !H)) {
      if (H === "row" && z !== null) {
        const V = P.rows[z];
        V && Array.from(V.cells).forEach((re) => {
          re.classList.add("table-row-selected");
        });
      } else H === "column" && $ !== null ? Array.from(P.rows).forEach((V) => {
        const re = V.cells[$];
        re && re.classList.add("table-col-selected");
      }) : H === "cells" && A.forEach((V) => {
        V.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), U = N((H, z) => {
    const $ = T(H);
    n(H), o($.mode), i($.rowIndex), c($.colIndex), x(z), C($.mode, $.rowIndex, $.colIndex, H, z);
    const A = $.mode ? {
      mode: $.mode,
      cells: H,
      rowIndex: $.rowIndex,
      colIndex: $.colIndex,
      table: z
    } : null;
    JSON.stringify(S.current) !== JSON.stringify(A) && (S.current = A, t && t(A));
  }, [T, C, t]), L = N((H) => {
    const z = H.target.closest("td, th");
    if (!z) return;
    const $ = v(z);
    $ && (d(!0), b(z), x($.table), h(!1));
  }, [v]), F = N((H) => {
    if (!f || !m) return;
    const z = H.target.closest("td, th");
    if (!z || !y || !y.contains(z)) return;
    h(!0), H.preventDefault();
    const $ = v(m), A = v(z);
    if (!$ || !A || $.table !== A.table) return;
    const P = Math.min($.rowIndex, A.rowIndex), V = Math.max($.rowIndex, A.rowIndex), re = Math.min($.cellIndex, A.cellIndex), se = Math.max($.cellIndex, A.cellIndex), w = /* @__PURE__ */ new Set();
    for (let l = P; l <= V; l++) {
      const k = y.rows[l];
      if (k)
        for (let B = re; B <= se; B++) {
          const j = k.cells[B];
          j && w.add(j);
        }
    }
    U(w, y);
  }, [f, v]), R = N(() => {
    p || _(), d(!1), b(null);
  }, [p, _]), I = N((H) => {
    const z = H.target.closest("td, th"), $ = H.target.closest("table");
    if (!(z && y && y.contains(z))) {
      if ($ && $ !== y) {
        _();
        return;
      }
      $ || _();
    }
  }, [_, y]);
  return oe(() => {
    if (!e.current) return;
    const H = e.current, z = (A) => {
      A.target.closest("td, th") && L(A);
    }, $ = (A) => {
      A.target.closest("td, th") && F(A);
    };
    return H.addEventListener("mousedown", z, !0), H.addEventListener("mouseenter", $, !0), document.addEventListener("mouseup", R), document.addEventListener("click", I), () => {
      H.removeEventListener("mousedown", z, !0), H.removeEventListener("mouseenter", $, !0), document.removeEventListener("mouseup", R), document.removeEventListener("click", I);
    };
  }, [e, L, F, R, I]), oe(() => {
    if (!e.current) return;
    const H = new MutationObserver((z) => {
      z.forEach(($) => {
        $.type === "childList" && y && !e.current.contains(y) && _();
      });
    });
    return H.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => H.disconnect();
  }, [e, _]), null;
};
Ft.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: E.func
};
Ft.defaultProps = {
  onCellSelectionChange: void 0
};
const $a = 50, yt = 50, Fa = 50, Ua = 100, Wa = 300, Ut = kt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: u = !0,
  showPageManager: c = !0
}, f) => {
  const d = _n(), p = Te(), { pageSize: h, pageMargins: m, continuousContent: b, pageBoundaries: y, activePage: x, zoomLevel: S, canUndo: _, canRedo: v } = d, T = te(null), C = te(null), { currentFormat: U, formatText: L, updateCurrentFormatFromSelection: F } = qr(), [R, I] = ne(!1), [H, z] = ne(null), [$, A] = ne(!0), [P, V] = ne(!1), [re, se] = ne(null), [w, l] = ne(null), [k, B] = ne(null), {
    checkAndUpdateBoundaries: j,
    getCurrentPage: q,
    scrollToPage: G,
    updateBoundaries: M,
    triggerAutoReflow: Y,
    removePageAndContent: J,
    removePageBreak: X,
    insertPageBreakAtBoundary: ie
  } = mo(h, C, S, m), D = ge(() => Pe(h), [h]), [ue, Ce] = ne(!1), pe = te(null), Ie = te(!1), De = te(!1), He = te(!1), Be = te(b), Qe = N(() => {
    Ie.current = !1;
    const O = Math.max(0, y.length - 1);
    p.setActivePage(O), setTimeout(() => {
      G(O, T);
    }, Fa);
  }, [y.length, p, G]);
  oe(() => {
    if (!C.current || He.current) return;
    C.current.innerHTML = b, He.current = !0, Be.current = b;
    const O = setTimeout(() => {
      M();
    }, $a);
    return () => clearTimeout(O);
  }, []), oe(() => {
    if (!C.current || !He.current) return;
    if (C.current.innerHTML !== b) {
      C.current.innerHTML = b;
      const ae = setTimeout(() => {
        M(), Ie.current && Qe();
      }, yt);
      return Be.current = b, () => clearTimeout(ae);
    }
  }, [b, M, Qe]), oe(() => {
    s && He.current && s(b);
  }, [b, s]);
  const { restoreCursorPosition: et, hasActiveCursorSelection: tt } = bo({
    updateCurrentFormatFromSelection: F,
    editorRef: C
  }), rr = N((O) => {
    O !== b && p.updateContinuousContent(O), C.current && C.current.innerHTML !== O && (C.current.innerHTML = O), Be.current = O, setTimeout(() => {
      M();
    }, yt);
  }, [b, p, M]), nt = N((O) => {
    if (!C.current || !O) return;
    tt() || et(), document.execCommand("insertHTML", !1, O);
    const ae = C.current.innerHTML;
    p.updateContinuousContent(ae), Be.current = ae, setTimeout(() => {
      M(), Y(200);
    }, yt);
  }, [tt, et, p, M, Y]), Wt = ge(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => C.current ? C.current.innerHTML : b,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (C.current ? C.current.innerHTML : b).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => C.current ? go(C.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (O) => {
      const ae = qe(O);
      rr(ae);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (O) => {
      p.updatePageSize(O), M({ pageSize: O });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (O) => {
      p.updatePageMargins(O), M({ pageMargins: O });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (O) => {
      const ae = qe(O);
      nt(ae);
    }
  }), [b, p, M, Y, tt, et]);
  xr(f, () => Wt, [Wt]);
  const rt = N(() => {
    if (!C.current) return;
    let O = C.current.innerHTML;
    O = qe(O), O !== C.current.innerHTML && (C.current.innerHTML = O);
    const ae = b;
    if (ae !== O) {
      const it = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: O
      }, ct = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: ae
      };
      p.recordOperation(it, ct);
    }
    p.updateContinuousContent(O), j(), Y(200);
    const Re = q(T);
    Re !== x && p.setActivePage(Re);
  }, [p, j, q, x, Y, T, C, b]), or = N((O) => {
    rt();
  }, [rt]), Gt = N((O) => {
    p.updatePageSize(O), M({ pageSize: O }), a && a(O);
  }, [p, M, a]), qt = N((O) => {
    p.updatePageMargins(O), M({ pageMargins: O }), o && o(O);
  }, [p, M, o]), Zt = N((O) => {
    O < 0 || O >= y.length || (De.current = !0, p.setActivePage(O), G(O, T), setTimeout(() => {
      De.current = !1;
    }, Wa), t && t(O));
  }, [p, G, t, y.length]), Yt = N(() => {
    const O = y.length + 1;
    ie(O) && (Ie.current = !0, setTimeout(() => {
      Ie.current && Qe();
    }, 100)), r && r();
  }, [y.length, ie, p, G, r]), sr = N(() => {
    const O = window.getSelection();
    if (O && O.rangeCount > 0) {
      if (!C?.current) return;
      const it = `<page-break data-page-break="true" contenteditable="false" data-page-number="${C.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, it), setTimeout(() => {
        M();
        const ct = q(T);
        p.setActivePage(ct);
      }, 150);
    }
  }, [M, q, p, T]), ar = N((O) => {
    nt(O);
  }, [nt]), ir = N((O) => {
    if (!O) return;
    X(O) && setTimeout(() => {
      const Re = q(T);
      p.setActivePage(Re);
    }, 200);
  }, [X, q, p, T]), Vt = N((O) => {
    if (y.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(O) && (p.setActivePage(0), n && n(O));
  }, [y.length, J, p, n]), cr = ge(() => ({
    handleZoomIn: () => p.zoomIn(),
    handleZoomOut: () => p.zoomOut(),
    handleZoomReset: () => p.resetZoom(),
    handleUndo: () => p.undo(),
    handleRedo: () => p.redo()
  }), [p]), { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: at, handleUndo: lr, handleRedo: ur } = cr;
  yo(
    { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: at, handleUndo: lr, handleRedo: ur },
    { editorRef: C, containerRef: T }
  );
  const dr = N(() => {
    !T.current || !C.current || De.current || (pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      if (De.current) {
        pe.current = null;
        return;
      }
      const O = q(T);
      O !== x && O >= 0 && p.setActivePage(O), pe.current = null;
    }, Ua));
  }, [q, x, p]), fr = ge(() => {
    if (!b) return 0;
    const ae = b.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ae ? ae.length : 0;
  }, [b]), pr = y.length || 1, gr = N((O) => {
    I(!0), z(O);
  }, []), Kt = N(() => {
    I(!1), z(null);
  }, []), hr = N((O, ae) => {
  }, []), mr = N((O) => {
    O && O.mode === "row" ? (l(O.rowIndex), B(null)) : O && O.mode === "column" ? (B(O.colIndex), l(null)) : (l(null), B(null));
  }, []), yr = N((O) => {
    V(!0), se(O);
  }, []), Xt = N(() => {
    V(!1), se(null);
  }, []), br = N((O, ae) => {
  }, []);
  return oe(() => () => {
    pe.current && clearTimeout(pe.current);
  }, []), /* @__PURE__ */ g.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ g.jsx(
      Dt,
      {
        currentFormat: {
          ...U,
          imageSelected: R
        },
        onFormatText: L,
        onAddPageBreak: sr,
        onInsertImage: ar,
        canUndo: _,
        canRedo: v
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ g.jsx(
        ra,
        {
          editorView: null,
          isCollapsed: ue,
          onToggle: () => Ce((O) => !O),
          wordCount: fr,
          pageCount: pr
        }
      ),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: T,
          onScroll: dr,
          children: /* @__PURE__ */ g.jsx(
            xa,
            {
              content: b,
              dimensions: D,
              pageSize: h,
              pageMargins: m,
              pageBoundaries: y,
              editorRef: C,
              onInput: or,
              onContentChange: rt,
              onClick: () => C.current?.focus(),
              onRemovePageBreak: ir,
              zoomLevel: S
            }
          )
        }
      ),
      /* @__PURE__ */ g.jsx(
        Bt,
        {
          editorRef: C,
          onImageSelect: gr,
          onImageDeselect: Kt,
          onImageResize: hr,
          resizeOptions: {
            ...Ae,
            preserveAspectRatio: $,
            aspectRatio: $
          }
        }
      ),
      /* @__PURE__ */ g.jsx(
        zt,
        {
          editorRef: C,
          onTableSelect: yr,
          onTableDeselect: Xt,
          onTableResize: br
        }
      ),
      /* @__PURE__ */ g.jsx(
        Ft,
        {
          editorRef: C,
          onCellSelectionChange: mr
        }
      ),
      R && H && /* @__PURE__ */ g.jsx(
        jt,
        {
          imageElement: H,
          initialPreserveAspectRatio: $,
          onAlignChange: (O) => {
          },
          onAspectRatioToggle: (O) => {
            A(O);
          },
          onDelete: () => {
            if (H) {
              const O = H.getAttribute("data-key");
              O && Ro(O).catch((ae) => {
                console.error("Failed to delete image from IndexedDB:", ae);
              });
            }
          },
          onClose: Kt
        }
      ),
      P && re && /* @__PURE__ */ g.jsx(
        $t,
        {
          tableElement: re,
          onAlignChange: (O) => {
          },
          onClose: Xt,
          selectedRowIndex: w,
          selectedColIndex: k,
          editorRef: C
        }
      ),
      c && /* @__PURE__ */ g.jsx("div", { className: "page-manager-sidebar", children: e ? Ke.cloneElement(e, {
        onNavigate: Zt,
        onAddPage: Yt,
        onDeletePage: Vt,
        onPageSizeChange: Gt,
        onPageMarginsChange: qt,
        zoomLevel: S,
        canZoomIn: wt(S),
        canZoomOut: xt(S),
        onZoomIn: ot,
        onZoomOut: st,
        onZoomReset: at
      }) : /* @__PURE__ */ g.jsx(
        Ca,
        {
          pageBoundaries: y,
          activePage: x,
          pageSize: h,
          pageMargins: m,
          zoomLevel: S,
          canZoomIn: wt(S),
          canZoomOut: xt(S),
          onNavigate: Zt,
          onAddPage: Yt,
          onDeletePage: Vt,
          onPageSizeChange: Gt,
          onPageMarginsChange: qt,
          onZoomIn: ot,
          onZoomOut: st,
          onZoomReset: at
        }
      ) })
    ] })
  ] });
});
Ut.displayName = "HtmlEditor";
Ut.propTypes = {
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
class nr extends Ke.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ g.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ g.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ g.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ g.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ g.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ g.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ g.jsx(
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
nr.propTypes = {
  children: E.node.isRequired,
  fallback: E.node,
  onError: E.func,
  onReset: E.func,
  showDetails: E.bool
};
nr.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Fr as COMMON_FONT_SIZES,
  Wn as ColorPickerDropdown,
  Xe as DEFAULT_FONT_SIZE,
  Ae as DEFAULT_IMAGE_RESIZE_OPTIONS,
  An as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  Ka as DocumentProvider,
  Dt as EditorToolbar,
  nr as ErrorBoundary,
  Pn as FONT_SIZE_MAP,
  Ut as HtmlEditor,
  Bt as ImageResizeHandlers,
  Ye as PAGE_SIZES,
  Ca as PageManager,
  xa as PageView,
  W as RESIZE_HANDLERS,
  ra as Sidebar,
  ce as TABLE_RESIZE_HANDLERS,
  zt as TableResizeHandlers,
  ni as applyImageDimensions,
  xe as applyTableDimensions,
  ei as calculateResizeDimensions,
  Ma as calculateTableResizeDimensions,
  ri as clearImages,
  To as createResizeOverlay,
  La as createTableResizeOverlay,
  Ro as deleteImage,
  oi as getAllImageKeys,
  Va as getAvailablePageSizes,
  Ao as getImage,
  ti as getImageDimensions,
  Pe as getPageDimensions,
  Xa as getPixelValue,
  Ja as getPointValue,
  fe as getTableStructure,
  Ee as isResizableImage,
  le as isResizableTable,
  Qa as isValidFontSize,
  Ya as isValidPageSize,
  oa as logger,
  Wr as pixelsToPoints,
  Ur as pointsToPixels,
  ht as removeResizeOverlay,
  We as removeTableResizeOverlay,
  Co as saveImage,
  Rt as updateResizeOverlay,
  _t as updateTableResizeOverlay,
  mo as useContinuousReflow,
  On as useDocument,
  Te as useDocumentActions,
  _n as useDocumentState,
  qr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
