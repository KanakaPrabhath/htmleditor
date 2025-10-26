import Xe, { createContext as gr, useContext as fr, useReducer as pr, useMemo as J, useState as Y, useCallback as R, useRef as G, useEffect as q, forwardRef as At, createElement as ut, memo as hr, useLayoutEffect as un, useImperativeHandle as mr } from "react";
import { v4 as vt } from "uuid";
import y from "prop-types";
import { createPortal as dn } from "react-dom";
var De = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function xr() {
  if (Gt) return ve;
  Gt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var c in i)
        c !== "key" && (o[c] = i[c]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return ve.Fragment = t, ve.jsx = n, ve.jsxs = n, ve;
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
var qt;
function yr() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === O ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case x:
          return "Fragment";
        case L:
          return "Profiler";
        case A:
          return "StrictMode";
        case m:
          return "Suspense";
        case k:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case T:
            return "Portal";
          case v:
            return E.displayName || "Context";
          case S:
            return (E._context.displayName || "Context") + ".Consumer";
          case _:
            var j = E.render;
            return E = E.displayName, E || (E = j.displayName || j.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case w:
            return j = E.displayName || null, j !== null ? j : e(E.type) || "Memo";
          case N:
            j = E._payload, E = E._init;
            try {
              return e(E(j));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var U = j.error, V = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return U.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(E);
      }
    }
    function r(E) {
      if (E === x) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === N)
        return "<...>";
      try {
        var j = e(E);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var E = H.A;
      return E === null ? null : E.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(E) {
      if (P.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function c(E, j) {
      function U() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: U,
        configurable: !0
      });
    }
    function u() {
      var E = e(this.type);
      return K[E] || (K[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function l(E, j, U, V, Q, se) {
      var D = U.ref;
      return E = {
        $$typeof: p,
        type: E,
        key: j,
        props: U,
        _owner: V
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function h(E, j, U, V, Q, se) {
      var D = j.children;
      if (D !== void 0)
        if (V)
          if (B(D)) {
            for (V = 0; V < D.length; V++)
              d(D[V]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(D);
      if (P.call(j, "key")) {
        D = e(E);
        var ee = Object.keys(j).filter(function(Me) {
          return Me !== "key";
        });
        V = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", ce[D + V] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          D,
          ee,
          D
        ), ce[D + V] = !0);
      }
      if (D = null, U !== void 0 && (n(U), D = "" + U), s(j) && (n(j.key), D = "" + j.key), "key" in j) {
        U = {};
        for (var Te in j)
          Te !== "key" && (U[Te] = j[Te]);
      } else U = j;
      return D && c(
        U,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), l(
        E,
        D,
        U,
        i(),
        Q,
        se
      );
    }
    function d(E) {
      g(E) ? E._store && (E._store.validated = 1) : typeof E == "object" && E !== null && E.$$typeof === N && (E._payload.status === "fulfilled" ? g(E._payload.value) && E._payload.value._store && (E._payload.value._store.validated = 1) : E._store && (E._store.validated = 1));
    }
    function g(E) {
      return typeof E == "object" && E !== null && E.$$typeof === p;
    }
    var f = Xe, p = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), v = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, B = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var $, K = {}, X = f.react_stack_bottom_frame.bind(
      f,
      o
    )(), re = F(r(o)), ce = {};
    Ce.Fragment = x, Ce.jsx = function(E, j, U) {
      var V = 1e4 > H.recentlyCreatedOwnerStacks++;
      return h(
        E,
        j,
        U,
        !1,
        V ? Error("react-stack-top-frame") : X,
        V ? F(r(E)) : re
      );
    }, Ce.jsxs = function(E, j, U) {
      var V = 1e4 > H.recentlyCreatedOwnerStacks++;
      return h(
        E,
        j,
        U,
        !0,
        V ? Error("react-stack-top-frame") : X,
        V ? F(r(E)) : re
      );
    };
  })()), Ce;
}
var Zt;
function Tr() {
  return Zt || (Zt = 1, process.env.NODE_ENV === "production" ? De.exports = xr() : De.exports = yr()), De.exports;
}
var a = Tr();
const dt = 100, gt = 50, ft = 200, Vt = 5, pt = (e) => e < ft, ht = (e) => e > gt, Er = 96, le = (e) => Math.round(e * Er), qe = {
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
}, ue = "NORMAL", gn = (e = ue) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: le(e.top),
      bottom: le(e.bottom),
      left: le(e.left),
      right: le(e.right)
    };
  const t = qe[e] || qe[ue];
  return {
    top: le(t.top),
    bottom: le(t.bottom),
    left: le(t.left),
    right: le(t.right)
  };
}, br = (e = ue) => {
  const t = gn(e);
  return t.top + t.bottom;
}, wr = () => Object.keys(qe), Ar = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = qe[e];
  return t ? t.label : "Unknown";
}, Ze = {
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
}, fn = "A4", Oe = (e) => {
  const t = Ze[e] || Ze[fn];
  return {
    width: t.width,
    height: t.height
  };
}, Si = (e) => Object.keys(Ze).includes(e), _i = () => Object.keys(Ze), Se = fn, fe = "<p><br></p>", vr = "continuous", ke = (e, t = Se) => ({
  id: vt(),
  index: e,
  size: t,
  content: fe,
  images: [],
  isBreakPoint: !1
}), Ue = (e) => typeof e != "string" || e.trim() === "" ? fe : e, pn = (e, t = Se) => (e.length > 0 ? e : [ke(0, t)]).map((r, i) => ({
  id: r.id || vt(),
  index: i,
  size: r.size || t,
  content: Ue(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), Cr = (e = Se) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Oe(e).height
}], ze = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), mt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Se, r = pn(e.pages || [ke(0, n)], n);
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
    editorMode: e.editorMode || vr,
    continuousContent: e.continuousContent || fe,
    pageBoundaries: e.pageBoundaries || Cr(n),
    zoomLevel: e.zoomLevel || dt,
    pageMargins: e.pageMargins || ue,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, I = {
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
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case I.INITIALIZE_DOCUMENT: {
      const { initialContent: r = fe, pageSize: i = Se } = t.payload || {}, o = { ...ke(0, i), content: Ue(r) };
      return mt({
        title: e.title,
        pageSize: i,
        pages: [o]
      });
    }
    case I.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case I.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[r] = {
        ...o[r],
        content: Ue(i)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case I.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = pn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : ze(i);
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: o,
        totalPages: i.length,
        updatedAt: n
      };
    }
    case I.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, ke(r, e.pageSize));
      const o = i.map((c, u) => ({
        ...c,
        index: u,
        size: e.pageSize
      })), s = ze(o);
      return {
        ...e,
        pages: o,
        activePage: r,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case I.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const o = i.map((u, l) => ({
        ...u,
        index: l,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const c = ze(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: c,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case I.SET_ACTIVE_PAGE: {
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
    case I.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Oe(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((s, c) => ({
        ...s,
        index: c,
        size: r
      })), o = ze(i);
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case I.RESET_DOCUMENT:
      return mt();
    case I.UPDATE_CONTINUOUS_CONTENT: {
      const r = Ue(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case I.UPDATE_PAGE_BOUNDARIES: {
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
    case I.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (r === "end")
        s = s + o + "<p><br></p>";
      else if (typeof r == "number") {
        const c = s.substring(0, r), u = s.substring(r);
        s = c + o + u;
      } else if (typeof i == "number" && typeof document < "u") {
        const c = document.createElement("div");
        c.innerHTML = s;
        const u = c.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (i < u.length) {
          const l = u[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", l.parentNode.insertBefore(h, l.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), s = c.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: n
      };
    }
    case I.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const o = i.querySelectorAll('page-break, [data-page-break="true"]');
      return o[r] && o[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((c, u) => {
        c.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: n
      };
    }
    case I.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, o = e.pages;
      return r === "continuous" ? i = e.pages.map((c) => c.content).filter((c) => c && c !== fe).join(`
`) || fe : e.continuousContent && e.continuousContent !== fe && (o = [{ ...ke(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: o,
        updatedAt: n
      };
    }
    case I.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < gt || r > ft ? (console.warn(`Invalid zoom level: ${r}. Must be between ${gt} and ${ft}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.ZOOM_IN: {
      if (!pt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Vt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.ZOOM_OUT: {
      if (!ht(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Vt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.RESET_ZOOM:
      return e.zoomLevel === dt ? e : {
        ...e,
        zoomLevel: dt,
        updatedAt: n
      };
    case I.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case I.RECORD_OPERATION: {
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
    case I.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let o = e;
      return r.inverseOperation && (o = xt(e, r.inverseOperation)), {
        ...o,
        undoStack: i,
        redoStack: [...e.redoStack, r],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case I.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let o = e;
      return r.operation && (o = xt(e, r.operation)), {
        ...o,
        undoStack: [...e.undoStack, r],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: n
      };
    }
    case I.CLEAR_UNDO_REDO:
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
}, hn = gr(null), Pi = ({ children: e, initialState: t = {} }) => {
  const [n, r] = pr(xt, mt(t)), i = J(() => ({
    initializeDocument: (s) => r({ type: I.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => r({ type: I.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => r({ type: I.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => r({ type: I.UPDATE_PAGES, payload: s }),
    addPage: (s) => r({ type: I.ADD_PAGE, payload: s }),
    deletePage: (s) => r({ type: I.DELETE_PAGE, payload: s }),
    setActivePage: (s) => r({ type: I.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => r({ type: I.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => r({ type: I.RESET_DOCUMENT }),
    updateContinuousContent: (s) => r({ type: I.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => r({ type: I.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => r({ type: I.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => r({ type: I.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => r({ type: I.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => r({ type: I.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => r({ type: I.ZOOM_IN }),
    zoomOut: () => r({ type: I.ZOOM_OUT }),
    resetZoom: () => r({ type: I.RESET_ZOOM }),
    updatePageMargins: (s) => r({ type: I.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, c) => r({
      type: I.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: c }
    }),
    undo: () => r({ type: I.UNDO }),
    redo: () => r({ type: I.REDO }),
    clearUndoRedo: () => r({ type: I.CLEAR_UNDO_REDO })
  }), []), o = J(() => ({
    state: n,
    actions: i,
    dispatch: r
  }), [n, i]);
  return /* @__PURE__ */ a.jsx(hn.Provider, { value: o, children: e });
}, mn = () => {
  const e = fr(hn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, xn = () => {
  const { state: e } = mn();
  return e;
}, xe = () => {
  const { actions: e } = mn();
  return e;
}, yn = {
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
], Je = "16px", kr = (e) => Math.round(e * 96 / 72), Lr = (e) => Math.round(e * 72 / 96 * 2) / 2, Mi = (e) => {
  const t = Object.values(yn).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${kr(e)}px`;
}, Ii = (e) => {
  const t = parseInt(e), n = Object.values(yn).find((r) => r.px === t);
  return n ? n.pt : Lr(t);
}, ji = (e) => {
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
}, Nr = {
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
}, Yt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Je,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, Or = () => {
  const [e, t] = Y(Yt), n = xe(), r = R((f, p, T = null) => {
    try {
      const x = window.getSelection();
      if (!x || x.rangeCount === 0)
        return !1;
      const A = x.getRangeAt(0);
      if (!A.toString())
        return t((S) => ({ ...S, [f]: p })), !1;
      try {
        const S = document.createElement("span");
        S.style[f] = p;
        const v = A.extractContents();
        return S.appendChild(v), A.insertNode(S), A.selectNodeContents(S), x.removeAllRanges(), x.addRange(A), t((_) => ({ ..._, [f]: p })), !0;
      } catch {
        if (T) {
          const S = f === "fontSize" ? Nr[p] || "3" : p;
          return document.execCommand(T, !1, S), t((v) => ({ ...v, [f]: p })), !0;
        }
        return !1;
      }
    } catch (x) {
      return console.warn(`[useFormatting] Style application failed for ${f}:`, x), !1;
    }
  }, []), i = R((f) => r("fontFamily", f, "fontName"), [r]), o = R((f) => r("fontSize", f, "fontSize"), [r]), s = R((f) => r("color", f, "foreColor"), [r]), c = R((f) => {
    t((p) => ({
      ...p,
      alignLeft: f === "left",
      alignCenter: f === "center",
      alignRight: f === "right",
      alignJustify: f === "justify"
    }));
  }, []), u = R((f) => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return !1;
      const T = p.getRangeAt(0), x = T.toString(), L = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[f];
      if (!L)
        return !1;
      if (!x) {
        const v = T.startContainer, _ = v.nodeType === Node.TEXT_NODE ? v.parentElement : v, m = Le(_) || Pr();
        return m && (m.style.textAlign = L, c(L)), !0;
      }
      const S = _r(T);
      if (S.length === 0) {
        const v = document.createElement("p");
        v.style.textAlign = L;
        const _ = T.extractContents();
        v.appendChild(_), T.insertNode(v), T.selectNodeContents(v), p.removeAllRanges(), p.addRange(T);
      } else
        S.forEach((v) => {
          v.style.textAlign = L;
        });
      return c(L), !0;
    } catch (p) {
      return console.warn("[useFormatting] Text alignment failed:", p), !1;
    }
  }, [c]), l = R((f) => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return !1;
      const T = p.getRangeAt(0), x = document.createElement("div");
      if (x.innerHTML = f, Array.from(x.children).some(
        (L) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(L.tagName)
      )) {
        const L = T.startContainer, S = L.nodeType === Node.TEXT_NODE ? L.parentElement : L, v = Le(S);
        if (v && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(v.tagName)) {
          const _ = v.tagName.toLowerCase();
          if (T.startOffset === 0 && (L === v || L.nodeType === Node.TEXT_NODE && L === v.firstChild))
            v.parentNode.insertBefore(x, v);
          else if (T.startOffset === L.textContent?.length && L === v.lastChild && T.endOffset === L.textContent?.length) {
            const w = v.nextSibling;
            w ? v.parentNode.insertBefore(x, w) : v.parentNode.appendChild(x);
          } else {
            const w = T.extractContents(), N = document.createTextNode(""), b = document.createElement(_);
            b.appendChild(N), b.appendChild(w);
            const O = v.parentNode;
            O.insertBefore(x, v.nextSibling), O.insertBefore(b, x.nextSibling), !v.textContent.trim() && v.children.length === 0 && O.removeChild(v);
          }
        } else
          T.insertNode(x);
        T.setStartAfter(x), T.setEndAfter(x), p.removeAllRanges(), p.addRange(T);
      } else
        document.execCommand("insertHTML", !1, f);
      return !0;
    } catch (p) {
      console.warn("[useFormatting] InsertHTML failed:", p);
      try {
        return document.execCommand("insertHTML", !1, f), !0;
      } catch (T) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", T), !1;
      }
    }
  }, []), h = R((f, p = null) => {
    try {
      if (f === "undo") {
        n.undo();
        return;
      }
      if (f === "redo") {
        n.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (f === "insertHTML" && p) {
        l(p);
        return;
      }
      if (f === "fontSize") {
        o(p);
        return;
      }
      if (f === "fontName") {
        i(p);
        return;
      }
      if (f === "foreColor") {
        s(p);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(f)) {
        u(f);
        return;
      }
      switch (document.execCommand(f, !1, p) || console.warn(`[useFormatting] Command "${f}" failed`), f) {
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
          t((x) => ({ ...x, headingLevel: p }));
          break;
        default:
          break;
      }
    } catch (T) {
      console.warn(`[useFormatting] Error executing command "${f}":`, T);
    }
  }, [o, i, u, l, n]), d = R(() => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return;
      const p = f.getRangeAt(0), T = p.toString();
      let x = Je, A = "Arial", L = "#000000", S = "p", v = "left";
      if (T) {
        const m = p.startContainer, k = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
        if (k) {
          const w = window.getComputedStyle(k), N = w.fontSize, b = w.fontFamily;
          N && N.endsWith("px") && (x = N), b && b !== "serif" && (A = b.split(",")[0].replace(/['"]/g, "").trim());
          const O = w.color;
          O && O !== "rgb(0, 0, 0)" && O !== "#000000" && (O.startsWith("rgb") ? L = Sr(O) : L = O);
          const H = Le(k);
          if (H) {
            const P = H.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(P) && (S = P);
            const F = window.getComputedStyle(H).textAlign;
            ["left", "center", "right", "justify"].includes(F) && (v = F);
          }
        }
      }
      const _ = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: v === "left",
        alignCenter: v === "center",
        alignRight: v === "right",
        alignJustify: v === "justify",
        fontFamily: A,
        fontSize: x,
        fontColor: L,
        headingLevel: S
      };
      t((m) => ({
        ...m,
        ..._
      }));
    } catch (f) {
      console.warn("[useFormatting] Error updating format from selection:", f);
    }
  }, []), g = R(() => {
    t(Yt);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: g,
    updateCurrentFormatFromSelection: d
  };
};
function Sr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), i = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + i).toString(16).slice(1)}`;
}
function Le(e) {
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
function _r(e) {
  const t = [], n = e.startContainer, r = e.endContainer, i = Le(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = Le(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (i === o && i)
    return [i];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (u) => {
        const l = u.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let c = s.nextNode();
  for (; c; )
    e.intersectsNode(c) && t.push(c), c = s.nextNode();
  return t;
}
function Pr() {
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
const de = 'page-break, [data-page-break="true"]', Mr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Oe(n), i = e.querySelectorAll(de), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), c = e.scrollTop;
  return i.forEach((u, l) => {
    const d = u.getBoundingClientRect().top - s.top + c;
    o.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: d,
      height: r.height
    });
  }), o;
}, Tn = (e, t = 100, n = ue) => {
  const r = Oe(e), i = br(n), o = r.height - i, s = t / 100;
  return o / s;
}, En = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(de);
    if (n.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), i = r.top + r.height / 2;
    for (let o = n.length - 1; o >= 0; o--)
      if (n[o].getBoundingClientRect().top < i)
        return o + 1;
    return 0;
  } catch (n) {
    return console.warn("[getCurrentPage] Failed to calculate page:", n), 0;
  }
}, Kt = (e) => {
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
      const o = n[0].getBoundingClientRect(), c = window.getComputedStyle(e).textAlign;
      if (c === "center" || c === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, jr = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, bn = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  try {
    const u = Tn(n, r, i) * (t - 1), l = Array.from(e.children);
    let h = 0, d = null;
    for (let g = 0; g < l.length; g++) {
      const f = l[g];
      if (f.tagName === "PAGE-BREAK" || f.getAttribute("data-page-break") === "true")
        continue;
      const p = Ir(f);
      if (h + p > u) {
        d = f;
        break;
      }
      h += p;
    }
    if (d) {
      const g = document.createElement("page-break");
      if (g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(g, d), o) {
        const f = e.innerHTML;
        o(f);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const g = document.createElement("page-break");
      g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), e.appendChild(g);
      const f = document.createElement("p");
      if (f.innerHTML = "<br>", e.appendChild(f), o) {
        const p = e.innerHTML;
        o(p);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (c) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", c), !1;
  }
}, wn = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(de));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let h = !1, d = [], g = null;
    if (t === 0) {
      const p = u[0];
      if (!p)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let T = e.firstChild;
      for (; T && T !== p; )
        d.push(T), T = T.nextSibling;
      g = p;
    } else {
      const p = u[t - 1];
      if (!p)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const T = u[t];
      let x = p.nextSibling;
      for (; x && x !== T; )
        d.push(x), x = x.nextSibling;
      g = p;
    }
    if (l && l.rangeCount > 0) {
      const T = l.getRangeAt(0).startContainer;
      for (const x of d)
        if (x.contains(T) || x === T) {
          h = !0;
          break;
        }
    }
    if (g && g.parentNode && g.remove(), d.forEach((p) => {
      p.parentNode && p.remove();
    }), e.querySelectorAll(de).forEach((p, T) => {
      p.setAttribute("data-page-number", String(T + 2));
    }), h && o && setTimeout(() => {
      o(0);
    }, 50), r) {
      const p = e.innerHTML;
      r(p);
    }
    return i && setTimeout(() => {
      i(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (u) {
    return console.error("[removePageAndContent] Failed to remove page:", u), !1;
  }
}, Br = (e) => {
  if (e)
    try {
      e.querySelectorAll(de).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, An = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Br(t), n) {
      const o = t.innerHTML;
      n(o);
    }
    return r && setTimeout(() => {
      r(), i && setTimeout(() => {
        i();
      }, 100);
    }, 50), !0;
  } catch (o) {
    return console.error("[removePageBreak] Failed to remove page break:", o), !1;
  }
}, Hr = 200, Dr = 50, Xt = 3, zr = 20, vn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), c = window.getComputedStyle(e).textAlign;
      if (c === "center" || c === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, $r = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = vn(o);
    if (s < 1)
      continue;
    if (n + s > t)
      return r === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: o,
        accumulatedHeight: n
      } : null : {
        overflowIndex: i,
        overflowElement: o,
        accumulatedHeight: n
      };
    n += s, r = o;
  }
  return null;
}, Cn = (e, t, n, r, i, o, s, c) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = Tn(t, n, r);
    let l = Kt(e), h = !1, d = 0;
    for (let g = 0; g < l.length && d < Xt; g++) {
      const f = l[g], p = $r(f, u);
      if (p && p.overflowIndex > 0) {
        let T = 0;
        for (let S = 0; S < f.length; S++) {
          const v = f[S];
          v && v.getBoundingClientRect && (T += vn(v));
        }
        if (T - u < zr)
          continue;
        const A = g + 2;
        jr(p.overflowElement, A) && (h = !0, d++, l = Kt(e));
      }
    }
    if (h) {
      if (i) {
        const g = e.innerHTML;
        i(g);
      }
      setTimeout(() => {
        o && o(), d >= Xt && c && setTimeout(() => {
          s.current || c();
        }, 100);
      }, Dr);
    }
    return h;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, Rn = (e, t, n = Hr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Fr = 400, Ct = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const o = e.querySelectorAll(de)[t - 1];
        o && o.nextSibling && (n = o.nextSibling, r = 0);
      }
      if (n) {
        const i = document.createRange(), o = window.getSelection();
        n.nodeType === Node.TEXT_NODE ? i.setStart(n, r) : i.setStart(n, 0), i.collapse(!0), o.removeAllRanges(), o.addRange(i);
      }
    } catch (n) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", n);
    }
  }
}, kn = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (n === 0)
      i = t;
    else {
      const s = t.querySelectorAll(de)[n - 1];
      if (s)
        i = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (i) {
      const o = i.getBoundingClientRect(), s = e.getBoundingClientRect(), c = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: c,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : Ct(t, n);
      }, Fr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Ur = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Wr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const i = e.querySelectorAll(de);
  for (const h of i)
    if (n.comparePoint(h, 0) > 0)
      r++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset);
  const c = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = c.length, l = (c.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: l,
    charOffset: u
  };
}, Gr = 300, qr = (e, t, n = 100, r = "NARROW") => {
  const i = xe(), o = G(null), s = G(null), c = G(e), u = G(n), l = G(r), h = G(!1);
  q(() => {
    c.current = e;
  }, [e]), q(() => {
    u.current = n;
  }, [n]), q(() => {
    l.current = r;
  }, [r]), q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = R((m = {}) => t?.current ? Mr(t.current, m) : [], [t]), g = R((m = {}) => {
    const k = d(m);
    return i.updatePageBoundaries(k), k;
  }, [d, i]), f = R((m = {}) => {
    const k = typeof m.delay == "number" ? m.delay : Gr;
    Ur(g, o, m, k);
  }, [g]), p = R(() => {
    t?.current && Cn(
      t.current,
      c.current,
      u.current,
      l.current,
      i.updateContinuousContent,
      g,
      h,
      p
    );
  }, [t, i, g]), T = R((m) => {
    Rn(p, s, m);
  }, [p]), x = R((m) => !m?.current || !t?.current ? 0 : En(m.current, t.current), [t]), A = R((m) => {
    t?.current && Ct(t.current, m);
  }, [t]), L = R((m, k) => {
    if (!k?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    kn(k.current, t.current, m, A);
  }, [t, A]), S = R(async (m) => t?.current ? bn(
    t.current,
    m,
    c.current,
    u.current,
    l.current,
    i.updateContinuousContent,
    g
  ) : !1, [t, i, g]), v = R((m) => t?.current ? wn(
    t.current,
    m,
    d,
    i.updateContinuousContent,
    g,
    A,
    p
  ) : !1, [t, d, i, g, A, p]), _ = R((m) => t?.current ? An(
    m,
    t.current,
    i.updateContinuousContent,
    g,
    p
  ) : !1, [t, i, g, p]);
  return q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), J(() => ({
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: f,
    updateBoundaries: g,
    getCurrentPage: x,
    scrollToPage: L,
    positionCursorAtPage: A,
    checkAndReflow: p,
    triggerAutoReflow: T,
    removePageAndContent: v,
    removePageBreak: _,
    insertPageBreakAtBoundary: S,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    f,
    g,
    x,
    L,
    A,
    p,
    T,
    v,
    _,
    S
  ]);
}, he = R(() => {
  editorRef?.current && Cn(
    editorRef.current,
    latestPageSizeRef.current,
    latestZoomLevelRef.current,
    latestPageMarginsRef.current,
    actions.updateContinuousContent,
    updateBoundaries,
    isReflowingRef,
    he
  );
}, [editorRef, actions, updateBoundaries]);
R((e) => {
  Rn(he, reflowTimeoutRef, e);
}, [he]);
R((e) => !e?.current || !editorRef?.current ? 0 : En(e.current, editorRef.current), [editorRef]);
const Ve = R((e) => {
  editorRef?.current && Ct(editorRef.current, e);
}, [editorRef]);
R((e, t) => {
  if (!t?.current || !editorRef?.current) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  kn(t.current, editorRef.current, e, Ve);
}, [editorRef, Ve]);
R(async (e) => editorRef?.current ? bn(
  editorRef.current,
  e,
  latestPageSizeRef.current,
  latestZoomLevelRef.current,
  latestPageMarginsRef.current,
  actions.updateContinuousContent,
  updateBoundaries
) : !1, [editorRef, actions, updateBoundaries]);
R((e) => editorRef?.current ? wn(
  editorRef.current,
  e,
  calculatePageBoundariesCallback,
  actions.updateContinuousContent,
  updateBoundaries,
  Ve,
  he
) : !1, [editorRef, calculatePageBoundariesCallback, actions, updateBoundaries, Ve, he]);
R((e) => editorRef?.current ? An(
  e,
  editorRef.current,
  actions.updateContinuousContent,
  updateBoundaries,
  he
) : !1, [editorRef, actions, updateBoundaries, he]);
const Zr = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: i, handleUndo: o, handleRedo: s } = e, { editorRef: c, containerRef: u } = t;
  q(() => {
    const l = (h) => {
      if (h.ctrlKey || h.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(h.key) && h.preventDefault();
        const d = document.activeElement === c.current, g = document.activeElement === u.current, f = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (d || g || !f)
          switch (h.key) {
            case "+":
            case "=":
              n();
              break;
            case "-":
            case "_":
              r();
              break;
            case "0":
              i();
              break;
            case "z":
              h.shiftKey || o();
              break;
            case "y":
              s();
              break;
          }
      }
    };
    return window.addEventListener("keydown", l), () => {
      window.removeEventListener("keydown", l);
    };
  }, [n, r, i, o, s, c, u]);
}, Vr = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = G(null), r = R(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (n.current)
      try {
        o.removeAllRanges(), o.addRange(n.current);
        return;
      } catch (c) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", c);
      }
    const s = t.current.lastChild;
    if (s) {
      const c = document.createRange();
      s.nodeType === Node.TEXT_NODE ? c.setStart(s, s.textContent.length) : c.setStartAfter(s), c.collapse(!0), o.removeAllRanges(), o.addRange(c);
    }
  }, [t]), i = R(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return q(() => {
    const o = () => {
      if (e(), t.current) {
        const c = window.getSelection();
        if (c.rangeCount > 0) {
          const u = c.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (n.current = u.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), n.current && t.current)
        try {
          const c = window.getSelection();
          c.removeAllRanges(), c.addRange(n.current);
        } catch (c) {
          console.warn("[handleFocus] Failed to restore cursor:", c);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: r,
    hasActiveCursorSelection: i
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
}, M = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Bi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: c = Ae
}) {
  const u = r - t, l = i - n;
  let h = o, d = s;
  switch (e) {
    case M.TOP_LEFT:
      h = Math.max(c.minWidth, o - u), d = Math.max(c.minHeight, s - l);
      break;
    case M.TOP_RIGHT:
      h = Math.max(c.minWidth, o + u), d = Math.max(c.minHeight, s - l);
      break;
    case M.BOTTOM_LEFT:
      h = Math.max(c.minWidth, o - u), d = Math.max(c.minHeight, s + l);
      break;
    case M.BOTTOM_RIGHT:
      h = Math.max(c.minWidth, o + u), d = Math.max(c.minHeight, s + l);
      break;
    case M.TOP:
      d = Math.max(c.minHeight, s - l);
      break;
    case M.BOTTOM:
      d = Math.max(c.minHeight, s + l);
      break;
    case M.LEFT:
      h = Math.max(c.minWidth, o - u);
      break;
    case M.RIGHT:
      h = Math.max(c.minWidth, o + u);
      break;
    default:
      return { width: h, height: d };
  }
  if (c.preserveAspectRatio && c.aspectRatio) {
    const g = o / s;
    [
      M.TOP_LEFT,
      M.TOP_RIGHT,
      M.BOTTOM_LEFT,
      M.BOTTOM_RIGHT
    ].includes(e) ? h / g > d ? d = Math.max(c.minHeight, h / g) : h = Math.max(c.minWidth, d * g) : [M.TOP, M.BOTTOM].includes(e) ? h = d * g : [M.LEFT, M.RIGHT].includes(e) && (d = h / g);
  }
  return c.maxWidth && h > c.maxWidth && (h = c.maxWidth, c.preserveAspectRatio && c.aspectRatio && (d = h / (o / s))), c.maxHeight && d > c.maxHeight && (d = c.maxHeight, c.preserveAspectRatio && c.aspectRatio && (h = d * (o / s))), h = Math.max(c.minWidth, h), d = Math.max(c.minHeight, d), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function pe(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Hi(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Di(e, { width: t, height: n }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Yr(e, t = Ae) {
  if (!pe(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(M).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = Kr(o), s.style.pointerEvents = "all", Ln(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function Kr(e) {
  switch (e) {
    case M.TOP_LEFT:
    case M.BOTTOM_RIGHT:
      return "nwse-resize";
    case M.TOP_RIGHT:
    case M.BOTTOM_LEFT:
      return "nesw-resize";
    case M.TOP:
    case M.BOTTOM:
      return "ns-resize";
    case M.LEFT:
    case M.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ln(e, t, n, r) {
  switch (t) {
    case M.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case M.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case M.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case M.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case M.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case M.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case M.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case M.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function yt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const o = i.dataset.handler;
    Ln(i, o, n.width, n.height);
  });
}
function at(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Xr = "html-editor-storage", Jr = 1, ne = "images";
function Qr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function _e() {
  return new Promise((e, t) => {
    const n = indexedDB.open(Xr, Jr);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const i = r.target.result;
      i.objectStoreNames.contains(ne) || i.createObjectStore(ne, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function eo(e) {
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
    i.onload = async (o) => {
      const s = o.target.result, u = s.split(",")[1].length * 3 / 4;
      if (u > 5 * 1024 * 1024) {
        n(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await _e(), h = `editor-image-${Qr()}`, g = l.transaction([ne], "readwrite").objectStore(ne), f = {
          key: h,
          dataUrl: s,
          size: u,
          type: e.type,
          timestamp: Date.now()
        }, p = g.add(f);
        p.onsuccess = () => {
          l.close(), t(h);
        }, p.onerror = () => {
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
async function to(e) {
  try {
    const t = await _e();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readonly").objectStore(ne).get(e);
      s.onsuccess = () => {
        t.close();
        const c = s.result;
        n(c ? c.dataUrl : null);
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function no(e) {
  try {
    const t = await _e();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readwrite").objectStore(ne).delete(e);
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
async function zi() {
  try {
    const e = await _e();
    return new Promise((t, n) => {
      const o = e.transaction([ne], "readwrite").objectStore(ne).clear();
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
async function $i() {
  try {
    const e = await _e();
    return new Promise((t, n) => {
      const o = e.transaction([ne], "readonly").objectStore(ne).getAllKeys();
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
const Nn = [
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
], ro = [
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
], oo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function so(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function On(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function We(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, Ne(n) || "<p><br></p>";
}
function io(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function ao(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => Nn.includes(n.tagName));
}
function co(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      Nn.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Ne(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${so(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i, s = o.tagName, c = s.toLowerCase(), u = On(o);
      if (s === "DIV") {
        const l = Ne(o);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (s === "P")
        ao(o) ? t.push(co(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const l = io(o);
        t.push(`<${c}${u}>${l}</${c}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(lo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(uo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const l = Ne(o);
        t.push(`<blockquote${u}>${l}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (ro.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (oo.includes(s))
        t.push(o.outerHTML);
      else {
        const l = Ne(o);
        t.push(`<${c}${u}>${l}</${c}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function lo(e) {
  const t = e.tagName.toLowerCase(), n = On(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const o = Ne(i);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function uo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Jt = (e) => {
  const t = fo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Sn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), po = (e) => {
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
var ho = {
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
const mo = At(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...c
  }, u) => ut(
    "svg",
    {
      ref: u,
      ...ho,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Sn("lucide", i),
      ...!o && !po(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...s.map(([l, h]) => ut(l, h)),
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
  const n = At(
    ({ className: r, ...i }, o) => ut(mo, {
      ref: o,
      iconNode: t,
      className: Sn(
        `lucide-${go(Jt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Jt(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], yo = Z("arrow-down", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Eo = Z("arrow-left", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], wo = Z("arrow-right", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], vo = Z("arrow-up", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ro = Z("chevron-left", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Lo = Z("chevron-right", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Oo = Z("file-check", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Tt = Z("file-text", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Po = Z("hash", _o);
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
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Io = Z("heading-1", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Bo = Z("heading-2", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Do = Z("heading-3", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], $o = Z("image-upscale", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Uo = Z("list", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
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
], Go = Z("palette", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Zo = Z("plus", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Yo = Z("scaling", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Xo = Z("settings", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], _n = Z("text-align-center", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Pn = Z("text-align-end", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mn = Z("text-align-start", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Et = Z("trash-2", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], rs = Z("x", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ss = Z("zoom-in", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], as = Z("zoom-out", is), Qt = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((o, s) => {
    const c = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${n}heading-${s}`,
      level: c,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, cs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, ls = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = xn(), { pages: o, activePage: s, continuousContent: c } = i, { wordCount: u, outline: l } = J(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: Qt(c, 1, "continuous-")
      };
    let d = 0;
    const g = [];
    return o.forEach((f, p) => {
      d += cs(f.content), g.push(...Qt(f.content, p + 1, `page-${p}-`));
    }), { wordCount: d, outline: g };
  }, [o, n, r, c]), h = r !== void 0 ? r : o.length;
  return /* @__PURE__ */ a.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ a.jsx(Tt, { size: 18 }),
            /* @__PURE__ */ a.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ a.jsx(Lo, { size: 16 }) : /* @__PURE__ */ a.jsx(Ro, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Oo, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: h })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Po, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Tt, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsxs("h3", { children: [
              /* @__PURE__ */ a.jsx(Uo, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((d) => {
              const g = d.level === 1 ? Io : d.level === 2 ? Bo : Do;
              return /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ a.jsx(g, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ a.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ a.jsxs("span", { className: "outline-page", children: [
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
}, us = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), ds = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ a.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ a.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), gs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), fs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), ps = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), hs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), ms = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), xs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), ys = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), Ts = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 18v0" })
] }), Es = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ a.jsx("path", { d: "M15 6v12" })
] }), ws = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ a.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), As = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), vs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), Cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), Rs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), ks = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] });
class Ls {
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
const en = new Ls("Editor"), In = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), jn = 32;
function Bn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * jn}px`, e.dataset.indentLevel = String(r));
}
function Ns(e, t) {
  Bn(e, t);
}
function Os(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && In.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Ss() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && n.add(s);
  }), n.size === 0 && r.querySelectorAll("img").forEach((c) => {
    if (document.createRange().selectNode(c), t.intersectsNode(c)) {
      let l = c.parentElement;
      for (; l && l !== r; ) {
        if (l.tagName && In.has(l.tagName.toUpperCase())) {
          n.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(n).filter((s) => {
    let c = s.parentElement;
    for (; c; ) {
      if (n.has(c))
        return !1;
      c = c.parentElement;
    }
    return !0;
  })) : [];
}
function _s(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * jn}px`, e.dataset.indentLevel = String(n));
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
  let n = Ss();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = Os(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const i = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Ns(s, e);
      return;
    }
    e ? _s(s) : Bn(s, !1);
  });
  try {
    const s = document.createRange(), c = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (d) => {
      if (d.nodeType === Node.TEXT_NODE)
        return d;
      const g = document.createTreeWalker(
        d,
        NodeFilter.SHOW_TEXT,
        null
      );
      let f = null, p = g.nextNode();
      for (; p; )
        f = p, p = g.nextNode();
      return f;
    }, l = c(i);
    l ? s.setStart(l, 0) : s.setStart(i, 0);
    const h = u(o);
    h ? s.setEnd(h, h.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const c = document.createRange();
      c.setStartBefore(i), c.setEndAfter(o), t.removeAllRanges(), t.addRange(c);
    } catch (c) {
      console.warn("Could not restore selection after indentation:", c);
    }
  }
  return !0;
}
function Ps(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && bt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Hn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
  const [r, i] = Y(!1), o = G(null), s = [
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
  q(() => {
    const l = (h) => {
      o.current && !o.current.contains(h.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, []);
  const c = (l) => {
    t(l), i(!1);
  }, u = (l) => {
    const h = l.target.value;
    t(h);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => i(!r),
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
        children: /* @__PURE__ */ a.jsx(Go, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ a.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ a.jsx("div", { className: "color-grid", children: s.map((l) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => c(l),
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
      /* @__PURE__ */ a.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ a.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ a.jsx(
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
Hn.propTypes = {
  currentColor: y.string,
  onColorSelect: y.func.isRequired,
  title: y.string
};
const Ms = [
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
], Is = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], js = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Rt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: i = !1,
  canRedo: o = !1
}) => {
  const s = (f, p, T, x = null, A = !1) => /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: f,
      className: x && e[x] ? "active" : "",
      disabled: A,
      title: T,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ a.jsx(p, { size: 16 })
    },
    T
  ), c = () => /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }), u = async (f) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(f.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (f.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const T = await eo(f), x = await to(T);
      if (x && r) {
        const A = `<img src="${x}" data-key="${T}" alt="Inserted image" />`;
        r(A);
      } else
        en.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (p) {
      en.error("Error uploading image", p);
    }
  }, l = () => {
    bt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, h = () => {
    bt(!0);
  }, d = () => {
    const f = prompt("Enter URL:");
    f && t("createLink", f);
  }, g = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), As, "Undo", null, !i),
    s(() => t("redo"), vs, "Redo", null, !o),
    c(),
    s(() => t("bold"), us, "Bold", "bold"),
    s(() => t("italic"), ds, "Italic", "italic"),
    s(() => t("underline"), gs, "Underline", "underline"),
    s(() => t("strikethrough"), fs, "Strikethrough", "strikethrough"),
    c(),
    s(() => t("justifyLeft"), ps, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), hs, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), ms, "Align Right", "alignRight"),
    s(() => t("justifyFull"), xs, "Justify", "alignJustify"),
    c(),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (f) => t("fontName", f.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Ms.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (f) => t("fontSize", f.target.value),
        value: e.fontSize || Je,
        title: "Font Size",
        children: Rr.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ a.jsx(
      Hn,
      {
        currentColor: e.fontColor,
        onColorSelect: (f) => t("foreColor", f),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (f) => t("formatBlock", f.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Is.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    c(),
    s(() => t("insertUnorderedList"), ys, "Bullet List"),
    s(() => t("insertOrderedList"), Ts, "Numbered List"),
    c(),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: l,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ a.jsx(Rs, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: h,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ a.jsx(ks, { size: 16 })
      }
    ),
    c(),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ a.jsx(Es, { size: 16 })
      }
    ),
    s(() => t("insertHTML", js), bs, "Insert Table"),
    n && s(n, ws, "Insert Page Break"),
    c(),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (f) => f.target.files[0] && u(f.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: g,
        title: "Insert Image",
        children: /* @__PURE__ */ a.jsx(Cs, { size: 16 })
      }
    )
  ] });
};
Rt.propTypes = {
  currentFormat: y.shape({
    bold: y.bool,
    italic: y.bool,
    underline: y.bool,
    strikethrough: y.bool,
    alignLeft: y.bool,
    alignCenter: y.bool,
    alignRight: y.bool,
    alignJustify: y.bool,
    fontFamily: y.string,
    fontSize: y.string,
    fontColor: y.string,
    headingLevel: y.string
  }).isRequired,
  onFormatText: y.func.isRequired,
  onAddPageBreak: y.func,
  onInsertImage: y.func,
  canUndo: y.bool,
  canRedo: y.bool
};
Rt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function Bs(e) {
  return !e || typeof e != "string" ? e : We(e);
}
function Hs(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Bs(n) : n = Ds(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Ds(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => zs(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function zs(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const $s = 20, Fs = 20, tn = 20, nn = -12, Us = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, Ws = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: Je,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, rn = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, Gs = (e, t, n) => !!((me(t) || me(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), qs = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (me(t) || me(n))), me = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && me(e.parentElement) : !1, kt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: o,
  onScroll: s,
  onPaste: c,
  onRemovePageBreak: u,
  zoomLevel: l = 100,
  pageMargins: h = ue
}) => {
  const d = J(() => gn(h), [h]), g = l / 100, f = R((v, _) => {
    if (!v) return !1;
    const m = v.getBoundingClientRect(), k = _ - m.top;
    return k < d.top || k > m.height - d.bottom;
  }, [d.top, d.bottom]), p = R((v, _) => {
    _.preventDefault();
    const m = v.getBoundingClientRect(), k = _.clientX - m.left, w = _.clientY - m.top, N = m.width - tn - $s, b = nn, O = m.width - tn, H = nn + Fs;
    k >= N && k <= O && w >= b && w <= H && u && u(v);
  }, [u]), T = R((v) => {
    v.preventDefault();
    const _ = t.current.getBoundingClientRect();
    if (v.clientY - _.top < d.top) {
      const k = t.current.firstElementChild;
      k && k.tagName !== "PAGE-BREAK" && rn(k, !0);
    } else {
      const k = t.current.lastElementChild;
      k && k.tagName !== "PAGE-BREAK" && rn(k, !1);
    }
  }, [t, d.top]), x = R((v) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const m = _.getRangeAt(0), { startContainer: k, endContainer: w } = m;
    if (Gs(v, k, w))
      return v.preventDefault(), !1;
    if (Ps(v))
      return r && r(), !1;
    if (qs(v, k, w))
      return v.preventDefault(), !1;
    i && i(v);
  }, [i, r]), A = R((v) => {
    if (!t.current) return;
    const _ = v.target;
    if (me(_)) {
      p(_, v);
      return;
    }
    if (f(t.current, v.clientY)) {
      T(v);
      return;
    }
    o && o(v);
  }, [t, o, p, T, f]), L = R((v) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const m = _.getRangeAt(0), { startContainer: k } = m;
    if (me(k))
      return v.preventDefault(), !1;
  }, []), S = R((v) => {
    const _ = Hs(v);
    c && c(v, _);
  }, [c]);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...Us,
        maxWidth: `${e.width}px`,
        transform: `scale(${g})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            ...Ws,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`
          },
          onInput: n,
          onKeyDown: x,
          onBeforeInput: L,
          onClick: A,
          onScroll: s,
          onPaste: S,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
kt.propTypes = {
  dimensions: y.shape({
    width: y.number.isRequired,
    height: y.number.isRequired
  }).isRequired,
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: y.func.isRequired,
  onContentChange: y.func,
  onKeyDown: y.func,
  onClick: y.func,
  onScroll: y.func,
  onPaste: y.func,
  onRemovePageBreak: y.func,
  zoomLevel: y.number,
  pageMargins: y.string
};
kt.defaultProps = {
  zoomLevel: 100,
  pageMargins: ue
};
const Zs = hr(kt), Dn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ue,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: c,
  onAddPage: u,
  onDeletePage: l,
  onPageSizeChange: h,
  onPageMarginsChange: d,
  onZoomIn: g,
  onZoomOut: f,
  onZoomReset: p
} = {}) => {
  const T = Math.max(e?.length || 0, 1), x = (A) => {
    if (T <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l?.(A);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ a.jsx(Xo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ a.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ a.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: n,
              onChange: (A) => h?.(A.target.value),
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ a.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ a.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: r,
              onChange: (A) => d?.(A.target.value),
              children: wr().map((A) => /* @__PURE__ */ a.jsx("option", { value: A, children: Ar(A) }, A))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: f,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ a.jsx(as, { size: 12 })
        }
      ),
      /* @__PURE__ */ a.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: g,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ a.jsx(ss, { size: 12 })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: p,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "page-list", children: e.map((A, L) => /* @__PURE__ */ a.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${L === t ? "active" : ""}`,
          onClick: () => c?.(L),
          "aria-label": `Go to page ${L + 1}`,
          "aria-current": L === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ a.jsx(Tt, { size: 14 }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Page ",
              L + 1
            ] })
          ]
        }
      ),
      T > 1 && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (S) => {
            S.stopPropagation(), x(L);
          },
          "aria-label": `Delete page ${L + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ a.jsx(rs, { size: 14 })
        }
      )
    ] }, A.id || `page-${L}`)) }),
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => u?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ a.jsx(Zo, { size: 16 }),
          /* @__PURE__ */ a.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Dn.propTypes = {
  pageBoundaries: y.arrayOf(
    y.shape({
      id: y.string.isRequired,
      pageNumber: y.number.isRequired,
      top: y.number,
      height: y.number
    })
  ),
  activePage: y.number,
  pageSize: y.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: y.string,
  zoomLevel: y.number,
  canZoomIn: y.bool,
  canZoomOut: y.bool,
  onNavigate: y.func,
  onAddPage: y.func,
  onDeletePage: y.func,
  onPageSizeChange: y.func,
  onPageMarginsChange: y.func,
  onZoomIn: y.func,
  onZoomOut: y.func,
  onZoomReset: y.func
};
const Vs = Xe.memo(Dn), $e = 10, Ys = 300, Ks = 200;
function Xs(e) {
  switch (e) {
    case M.TOP_LEFT:
    case M.BOTTOM_RIGHT:
      return "nwse-resize";
    case M.TOP_RIGHT:
    case M.BOTTOM_LEFT:
      return "nesw-resize";
    case M.TOP:
    case M.BOTTOM:
      return "ns-resize";
    case M.LEFT:
    case M.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Js(e, t, n, r, i, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    M.TOP_LEFT,
    M.TOP_RIGHT,
    M.BOTTOM_LEFT,
    M.BOTTOM_RIGHT
  ].includes(i) ? e / s > t ? t = e / s : e = t * s : [M.TOP, M.BOTTOM].includes(i) ? e = t * s : [M.LEFT, M.RIGHT].includes(i) && (t = e / s), { width: e, height: t };
}
function Qs({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: c = Ae
}) {
  const u = r - t, l = i - n;
  let h = o, d = s;
  switch (e) {
    case M.TOP_LEFT:
      h = o - u, d = s - l;
      break;
    case M.TOP_RIGHT:
      h = o + u, d = s - l;
      break;
    case M.BOTTOM_LEFT:
      h = o - u, d = s + l;
      break;
    case M.BOTTOM_RIGHT:
      h = o + u, d = s + l;
      break;
    case M.TOP:
      d = s - l;
      break;
    case M.BOTTOM:
      d = s + l;
      break;
    case M.LEFT:
      h = o - u;
      break;
    case M.RIGHT:
      h = o + u;
      break;
    default:
      return { width: h, height: d };
  }
  return { width: h, height: d } = Js(
    h,
    d,
    o,
    s,
    e,
    c
  ), c.maxWidth && h > c.maxWidth && (h = c.maxWidth, c.preserveAspectRatio && (d = h / (o / s))), c.maxHeight && d > c.maxHeight && (d = c.maxHeight, c.preserveAspectRatio && (h = d * (o / s))), h = Math.max(c.minWidth, Math.min(c.maxWidth || h, h)), d = Math.max(c.minHeight, Math.min(c.maxHeight || d, d)), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function zn(e, { width: t, height: n }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function ei(e, t, n) {
  zn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function ti(e, t, n, r) {
  const { ctrlKey: i, metaKey: o, shiftKey: s, key: c } = e, u = i || o, l = n.offsetWidth, h = n.offsetHeight, g = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(r.maxWidth || 800, l + $e),
      height: h
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(r.minWidth || 50, l - $e),
      height: h
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: l,
      height: Math.min(r.maxHeight || 600, h + $e)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: l,
      height: Math.max(r.minHeight || 50, h - $e)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: Ys, height: Ks }) : null
  }[c];
  if (g) {
    e.preventDefault();
    const f = g();
    return ei(t, n, f), !0;
  }
  return !1;
}
const Lt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: i = Ae
}) => {
  const o = G({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = G(i), c = xe();
  q(() => {
    s.current = i;
  }, [i]);
  const u = R((x) => {
    if (!pe(x)) return;
    o.current.overlay && (at(o.current.overlay), o.current.overlay = null), x.classList.add("selected");
    const A = Yr(x, s.current);
    A && (o.current.overlay = A, o.current.image = x, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((S) => {
      S.addEventListener("mousedown", h);
    }), n && n(x));
  }, [n]), l = R(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (at(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), h = R((x) => {
    if (x.preventDefault(), x.stopPropagation(), !o.current.image) return;
    const A = x.currentTarget.dataset.handler, L = o.current.image.getBoundingClientRect(), S = window.pageYOffset || document.documentElement.scrollTop, v = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: x.clientX,
      y: x.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: x.clientX - L.left - v,
      offsetY: x.clientY - L.top - S
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Xs(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", g);
  }, []), d = R((x) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    x.preventDefault(), x.stopPropagation();
    const { x: A, y: L, width: S, height: v } = o.current.start, _ = o.current.handler, m = x.clientX, k = x.clientY, w = Qs({
      handler: _,
      startX: A,
      startY: L,
      currentX: m,
      currentY: k,
      startWidth: S,
      startHeight: v,
      options: s.current
    });
    zn(o.current.image, w), o.current.overlay && yt(o.current.overlay, o.current.image);
  }, []), g = R((x) => {
    if (o.current.isResizing) {
      if (x.preventDefault(), x.stopPropagation(), o.current.image && o.current.start) {
        const A = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, L = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (A.width !== L.width || A.height !== L.height) && c.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: L } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: A } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const A = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(A), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, c]), f = R((x) => {
    o.current.overlay && !o.current.overlay.contains(x.target) && l();
    const A = x.target;
    if (pe(A)) {
      if (A === o.current.image)
        return;
      u(A);
    }
  }, [u, l]), p = R((x) => {
    if ((x.key === "Delete" || x.key === "Backspace") && o.current.image && !o.current.isResizing) {
      x.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), l();
        const L = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(L);
      }
    }
    x.key === "Escape" && o.current.image && l(), o.current.image && !o.current.isResizing && ti(x, e, o.current.image, s.current);
  }, [e, l]), T = R(() => {
    o.current.overlay && o.current.image && yt(o.current.overlay, o.current.image);
  }, []);
  return q(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", T), window.addEventListener("scroll", T)), () => {
      A && A.removeEventListener("scroll", T), window.removeEventListener("scroll", T);
    };
  }, [e, T]), q(() => {
    if (!e.current) return;
    const x = e.current;
    return x.addEventListener("click", f), x.addEventListener("keydown", p), window.addEventListener("resize", T), () => {
      x.removeEventListener("click", f), x.removeEventListener("keydown", p), window.removeEventListener("resize", T), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && at(o.current.overlay);
    };
  }, [e, f, p, T, d, g]), q(() => {
    if (!e.current) return;
    const x = new MutationObserver((A) => {
      A.forEach((L) => {
        L.type === "childList" && L.removedNodes.forEach((S) => {
          S.nodeType === Node.ELEMENT_NODE && pe(S) && S === o.current.image && l();
        });
      });
    });
    return x.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => x.disconnect();
  }, [e, l, u]), null;
};
Lt.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: y.func,
  onImageSelect: y.func,
  onImageDeselect: y.func,
  resizeOptions: y.shape({
    minWidth: y.number,
    minHeight: y.number,
    maxWidth: y.number,
    maxHeight: y.number,
    aspectRatio: y.bool,
    preserveAspectRatio: y.bool,
    defaultWidth: y.number,
    defaultHeight: y.number
  })
};
Lt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Ae
};
const $n = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, ni = {
  ...$n,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, ct = (e) => ({
  ...$n,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), Nt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, c] = Y({ top: 0, left: 0 }), [u, l] = Y(!1), [h, d] = Y("top"), [g, f] = Y(o), p = G(null), T = xe(), x = (b) => {
    b && requestAnimationFrame(() => {
      const O = document.querySelector(".image-resize-overlay");
      O && yt(O, b);
    });
  }, A = (b) => {
    if (!b) return null;
    const O = window.getComputedStyle(b);
    return {
      float: O.float || "none",
      margin: b.style.margin || "",
      display: O.display || "inline",
      width: b.style.width || b.width || "",
      height: b.style.height || b.height || "",
      aspectRatio: g
    };
  }, L = R(() => {
    if (!e) return "left";
    const b = window.getComputedStyle(e);
    return b.float === "right" ? "right" : b.float === "left" ? "left" : b.display === "block" && b.margin.includes("auto") ? "center" : "left";
  }, [e]), [S, v] = Y("left");
  q(() => {
    e && v(L());
  }, [e, L]);
  const _ = R(() => {
    if (!e || !p.current) return;
    const b = e.getBoundingClientRect(), O = p.current.getBoundingClientRect(), H = window.innerWidth, P = window.innerHeight, B = b.bottom >= 0 && b.top <= P && b.right >= 0 && b.left <= H;
    let F = "top", $ = 0, K = 0;
    if (B) {
      const ce = b.top - O.height - 10, E = P - b.bottom - O.height - 10;
      E > ce && E > 0 ? (F = "bottom", $ = b.bottom + 10) : (F = "top", $ = b.top - O.height - 10);
    } else
      F = "top", $ = 10;
    K = b.left + b.width / 2 - O.width / 2;
    let X = Math.max(10, Math.min(K, H - O.width - 10)), re = Math.max(10, Math.min($, P - O.height - 10));
    c({ top: re, left: X }), d(F), l(!0);
  }, [e]);
  un(() => {
    _();
    const b = () => {
      _();
    };
    return window.addEventListener("scroll", b), window.addEventListener("resize", b), () => {
      window.removeEventListener("scroll", b), window.removeEventListener("resize", b), l(!1);
    };
  }, [e, _]), q(() => {
    const b = (O) => {
      p.current && !p.current.contains(O.target) && O.target !== e && i();
    };
    return document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [e, i]);
  const m = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, k = (b) => {
    if (e && m[b]) {
      const O = A(e), H = S, P = m[b];
      e.style.float = P.float, e.style.margin = P.margin, e.style.display = P.display, v(b), x(e);
      const B = A(e);
      T.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: b, state: B } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: H, state: O } }
      ), t && t(b);
    }
  }, w = () => {
    if (e && e.parentNode) {
      const b = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      T.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: b } }
      ), e.parentNode.removeChild(e), r && r(), i();
    }
  }, N = () => {
    const b = g, O = !g;
    f(O), T.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: O } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: b } }
    ), n && n(O);
  };
  return !e || typeof document > "u" ? null : dn(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: p,
        className: "image-tooltip-menu",
        "data-menu-position": h,
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
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${g ? "" : "active"}`,
              onClick: N,
              title: `Toggle aspect ratio preservation (currently ${g ? "ON" : "OFF"})`,
              children: g ? /* @__PURE__ */ a.jsx(Yo, { size: 14 }) : /* @__PURE__ */ a.jsx($o, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "left" ? "active" : ""}`,
              onClick: () => k("left"),
              title: "Align Left",
              style: ct(S === "left"),
              children: /* @__PURE__ */ a.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "center" ? "active" : ""}`,
              onClick: () => k("center"),
              title: "Align Center",
              style: ct(S === "center"),
              children: /* @__PURE__ */ a.jsx(_n, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "right" ? "active" : ""}`,
              onClick: () => k("right"),
              title: "Align Right",
              style: ct(S === "right"),
              children: /* @__PURE__ */ a.jsx(Pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: w,
              title: "Delete Image",
              style: ni,
              children: /* @__PURE__ */ a.jsx(Et, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Nt.propTypes = {
  imageElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onAspectRatioToggle: y.func,
  onDelete: y.func,
  onClose: y.func.isRequired,
  initialPreserveAspectRatio: y.bool
};
Nt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ge = (e) => {
  e.preventDefault(), e.stopPropagation();
}, ri = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((i) => {
      r.classList.remove(i);
    });
  });
}, on = (e, t) => !e || !t ? !1 : e.contains(t), oi = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, Ot = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, z = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ie(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function ae(e) {
  if (!ie(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, i = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= r)
    for (let u = 0; u < r; u++) {
      const l = s[u], h = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      i.push(h || 100);
    }
  else if (n.length > 0) {
    const u = n[0];
    for (let l = 0; l < u.cells.length; l++) {
      const h = u.cells[l];
      i.push(h.offsetWidth);
    }
  }
  const c = n.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: i,
    rowHeights: c,
    rect: t
  };
}
function si({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = Ot
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (c, u, l, h, d) => {
    u >= 0 && u < c.length && (c[u] = Math.max(h, Math.min(d, c[u] + l)));
  };
  switch (e) {
    case z.COLUMN:
      s(o.columnWidths, t, n, i.minColumnWidth, i.maxColumnWidth), o.tableWidth = r.width;
      break;
    case z.ROW:
      s(o.rowHeights, t, n, i.minRowHeight, i.maxRowHeight), o.tableHeight = r.height;
      break;
    case z.TABLE_BOTTOM:
      s(o.rowHeights, r.rows - 1, n, i.minRowHeight, i.maxRowHeight);
      break;
    case z.TABLE_RIGHT:
      s(o.columnWidths, r.columns - 1, n, i.minColumnWidth, i.maxColumnWidth);
      break;
  }
  return o;
}
function ye(e) {
  if (!ie(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const i = r.querySelectorAll("col"), o = i.length;
  if (o < n)
    for (let s = o; s < n; s++) {
      const c = document.createElement("col");
      r.appendChild(c);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(i[s]);
}
function Pe(e, t) {
  if (!ie(e)) return;
  ye(e);
  const { columnWidths: n, rowHeights: r, tableWidth: i, tableHeight: o } = t, s = n ? n.reduce((u, l) => u + l, 0) : 0, c = r ? r.reduce((u, l) => u + l, 0) : 0;
  if (i !== void 0 ? e.style.width = `${i}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : c > 0 && (e.style.height = `${c}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const u = e.querySelector("colgroup");
    u && u.querySelectorAll("col").forEach((h, d) => {
      d < n.length && (h.style.width = `${n[d]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((l, h) => {
    h < r.length && (l.style.height = `${r[h]}px`);
  }), e.style.height = `${c}px`), e.offsetHeight;
}
function ii(e) {
  if (!ie(e)) return null;
  ye(e);
  const t = ae(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const c = Ye(z.COLUMN, s, t, r, e);
    n.appendChild(c);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const c = Ye(z.ROW, s, t, r, e);
    n.appendChild(c);
  }
  const i = Ke(z.TABLE_BOTTOM, t, r);
  n.appendChild(i);
  const o = Ke(z.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const ai = {
  [z.COLUMN]: {
    className: "table-resize-handler table-column-resize-handler",
    cursor: "col-resize",
    isVertical: !0
  },
  [z.ROW]: {
    className: "table-resize-handler table-row-resize-handler",
    cursor: "row-resize",
    isVertical: !1
  },
  [z.TABLE_BOTTOM]: {
    className: "table-resize-handler table-bottom-resize-handler",
    cursor: "ns-resize",
    isVertical: !1
  },
  [z.TABLE_RIGHT]: {
    className: "table-resize-handler table-right-resize-handler",
    cursor: "ew-resize",
    isVertical: !0
  }
};
function Fn(e, t, n) {
  const r = ai[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const i = document.createElement("div");
  return i.className = r.className, i.dataset.type = e, i.style.position = "absolute", i.style.cursor = r.cursor, i.style.pointerEvents = "all", r.isVertical ? (i.style.width = "4px", i.style.height = `${t}px`) : (i.style.width = `${t}px`, i.style.height = "4px"), n != null && (i.dataset.index = n), i;
}
function Ye(e, t, n, r, i) {
  const o = e === z.COLUMN ? r.height : r.width, s = Fn(e, o, t);
  return we(s, e, t, n, r, i), s;
}
function Ke(e, t, n) {
  const r = e === z.TABLE_RIGHT ? n.height : n.width, i = Fn(e, r);
  return we(i, e, null, t, n, null), i;
}
function wt(e, t) {
  if (!e || !t) return;
  ye(t);
  const n = ae(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), c = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !c) {
    e.innerHTML = "";
    for (let d = 0; d < n.columns - 1; d++) {
      const g = Ye(z.COLUMN, d, n, r, t);
      e.appendChild(g);
    }
    for (let d = 0; d < n.rows - 1; d++) {
      const g = Ye(z.ROW, d, n, r, t);
      e.appendChild(g);
    }
    const l = Ke(z.TABLE_BOTTOM, n, r);
    e.appendChild(l);
    const h = Ke(z.TABLE_RIGHT, n, r);
    e.appendChild(h);
  } else
    i.forEach((l, h) => {
      we(l, z.COLUMN, h, n, r, t);
    }), o.forEach((l, h) => {
      we(l, z.ROW, h, n, r, t);
    }), s && we(s, z.TABLE_BOTTOM, null, n, r, null), c && we(c, z.TABLE_RIGHT, null, n, r, null);
}
function Re(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function St(e, t = "Operation") {
  return ie(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function ci(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", t.appendChild(i);
  }
  return t;
}
function Un(e, t, n = 0) {
  if (!St(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const i = e.rows[t];
  if (!i)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = ci(i);
    r < e.rows.length ? e.rows[r].parentNode.insertBefore(o, e.rows[r]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), ye(e);
    const s = ae(e);
    return s && Pe(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function li(e, t) {
  return Un(e, t, -1);
}
function ui(e, t) {
  return Un(e, t, 1);
}
function di() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function Wn(e, t, n = 0) {
  if (!St(e, "insertColumnAtPosition"))
    return !1;
  if (t < 0)
    return console.warn(`insertColumnAtPosition: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnAtPosition: Table has no rows"), !1;
  const i = n === -1 ? t : t + 1;
  if (i > r[0].cells.length)
    return console.warn(`insertColumnAtPosition: Column index ${i} out of bounds`), !1;
  try {
    for (const s of r) {
      const c = di();
      i < s.cells.length ? s.insertBefore(c, s.cells[i]) : s.appendChild(c);
    }
    ye(e);
    const o = ae(e);
    return o && Pe(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function gi(e, t) {
  return Wn(e, t, -1);
}
function fi(e, t) {
  return Wn(e, t, 1);
}
function we(e, t, n, r, i, o) {
  switch (t) {
    case z.COLUMN:
      pi(e, n, r, i, o);
      break;
    case z.ROW:
      hi(e, n, r, i, o);
      break;
    case z.TABLE_BOTTOM:
      mi(e, r, i);
      break;
    case z.TABLE_RIGHT:
      xi(e, r, i);
      break;
  }
}
function pi(e, t, n, r, i) {
  if (i?.rows.length > 0 && i.rows[0].cells.length > t) {
    const s = i.rows[0].cells[t].getBoundingClientRect(), c = i.getBoundingClientRect();
    e.style.left = `${s.right - c.left - 2}px`, e.style.height = `${r.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${r.height}px`;
}
function hi(e, t, n, r, i) {
  if (i?.rows.length > t && i.rows[t].cells.length > 0) {
    const s = i.rows[t].cells[0].getBoundingClientRect(), c = i.getBoundingClientRect();
    e.style.top = `${s.bottom - c.top - 2}px`, e.style.width = `${r.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${r.width}px`;
}
function mi(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function xi(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function Gn(e, t, n) {
  return St(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? yi(e, t) : n === "column" ? Ti(e, t) : !1 : !1;
}
function yi(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), ye(e);
    const r = ae(e);
    return r && Pe(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function Ti(e, t) {
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
    for (const i of n)
      i.cells.length > t && i.removeChild(i.cells[t]);
    ye(e);
    const r = ae(e);
    return r && Pe(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
function Ei(e, t) {
  return Gn(e, t, "row");
}
function bi(e, t) {
  return Gn(e, t, "column");
}
const _t = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = Ot
}) => {
  const o = G(null), s = G(null), c = G(null), u = G(null), l = G(null), h = G(i), d = G(!1), [g, f] = Y(null), p = xe();
  q(() => {
    h.current = i;
  }, [i]);
  const T = R(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Re(o.current), o.current = null), f(null), c.current = null, u.current = null, l.current = null, d.current = !1, r && r();
  }, [r]), x = R((w) => {
    if (Ge(w), !s.current) return;
    const N = w.currentTarget, b = N.dataset.type, O = parseInt(N.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const H = ae(s.current);
    c.current = {
      x: w.clientX,
      y: w.clientY,
      structure: { ...H }
    }, u.current = b, l.current = O, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const B = {
      [z.COLUMN]: "col-resize",
      [z.ROW]: "row-resize",
      [z.TABLE_BOTTOM]: "ns-resize",
      [z.TABLE_RIGHT]: "ew-resize"
    }[b] || "default";
    document.body.style.cursor = B, document.addEventListener("mousemove", S), document.addEventListener("mouseup", v);
  }, []), A = R((w) => {
    const N = ii(w, h.current);
    return N && (o.current = N, s.current = w, document.body.appendChild(N), N.querySelectorAll(".table-resize-handler").forEach((O) => {
      O.addEventListener("mousedown", x);
    })), N;
  }, [x]), L = R((w) => {
    if (!ie(w)) return;
    o.current && (Re(o.current), o.current = null), w.classList.add("selected"), A(w) && (f(w), n && n(w));
  }, [n, A]), S = R((w) => {
    if (!d.current || !s.current || !c.current || !u.current) return;
    Ge(w);
    const { x: N, y: b, structure: O } = c.current, H = u.current, P = l.current, B = w.clientX, F = w.clientY;
    let $ = 0;
    switch (H) {
      case z.COLUMN:
        $ = B - N;
        break;
      case z.ROW:
        $ = F - b;
        break;
      case z.TABLE_BOTTOM:
        $ = F - b;
        break;
      case z.TABLE_RIGHT:
        $ = B - N;
        break;
    }
    const K = si({
      type: H,
      index: P,
      delta: $,
      currentStructure: O,
      options: h.current
    });
    Pe(s.current, K), o.current && wt(o.current, s.current);
  }, []), v = R((w) => {
    if (d.current) {
      if (Ge(w), s.current && c.current) {
        const N = {
          structure: c.current.structure
        }, b = {
          structure: ae(s.current)
        };
        (N.structure.width !== b.structure.width || N.structure.height !== b.structure.height || JSON.stringify(N.structure.columnWidths) !== JSON.stringify(b.structure.columnWidths) || JSON.stringify(N.structure.rowHeights) !== JSON.stringify(b.structure.rowHeights)) && p.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: b } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: N } }
        );
      }
      if (c.current = null, u.current = null, l.current = null, d.current = !1, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(N), t && t(s.current, ae(s.current));
      }
    }
  }, [t, p]), _ = R((w) => {
    o.current && !o.current.contains(w.target) && T();
    const b = w.target.closest("table");
    if (b && ie(b)) {
      if (b === s.current)
        return;
      L(b);
    }
  }, [L, T]), m = R((w) => {
    if (w.key === "Delete" && s.current && !d.current) {
      w.preventDefault();
      const N = s.current;
      if (N.parentNode) {
        N.parentNode.removeChild(N), T();
        const b = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(b);
      }
    }
    w.key === "Escape" && s.current && T();
  }, [e, T]), k = R(() => {
    o.current && s.current && wt(o.current, s.current);
  }, []);
  return q(() => {
    if (!e.current) return;
    const N = e.current.closest(".editor-viewport");
    return N && (N.addEventListener("scroll", k), window.addEventListener("scroll", k)), () => {
      N && N.removeEventListener("scroll", k), window.removeEventListener("scroll", k);
    };
  }, [e, k]), q(() => {
    if (!e.current) return;
    const w = e.current;
    return w.addEventListener("click", _), w.addEventListener("keydown", m), window.addEventListener("resize", k), () => {
      w.removeEventListener("click", _), w.removeEventListener("keydown", m), window.removeEventListener("resize", k), d.current && (document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Re(o.current);
    };
  }, [e, _, m, k, S, v]), q(() => {
    if (!e.current) return;
    const w = new MutationObserver((N) => {
      N.forEach((b) => {
        b.type === "childList" ? (b.removedNodes.forEach((O) => {
          O.nodeType === Node.ELEMENT_NODE && ie(O) && O === g && T();
        }), b.addedNodes.forEach((O) => {
          if (O.nodeType !== Node.ELEMENT_NODE) return;
          if (ie(O)) {
            setTimeout(() => L(O), 50);
            return;
          }
          const H = O.querySelectorAll?.("table") || [];
          H.length > 0 && setTimeout(() => L(H[0]), 50);
        }), g && [...b.addedNodes, ...b.removedNodes].some(
          (H) => H.nodeType === Node.ELEMENT_NODE && H.tagName === "TR"
        ) && o.current && s.current && (Re(o.current), o.current = null, A(s.current))) : b.type === "attributes" && ["colspan", "rowspan"].includes(b.attributeName) && g && o.current && s.current && (Re(o.current), o.current = null, A(s.current));
      });
    });
    return w.observe(e.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => w.disconnect();
  }, [e, g, T, L, A]), null;
};
_t.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: y.func,
  onTableSelect: y.func,
  onTableDeselect: y.func,
  resizeOptions: y.shape({
    minColumnWidth: y.number,
    minRowHeight: y.number,
    maxColumnWidth: y.number,
    maxRowHeight: y.number,
    tableMinWidth: y.number,
    tableMinHeight: y.number,
    tableMaxWidth: y.number,
    tableMaxHeight: y.number
  })
};
_t.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Ot
};
const Fe = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, sn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, be = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, an = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && wt(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, cn = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, Pt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: i,
  editorRef: o
}) => {
  const [s, c] = Y({ top: 0, left: 0 }), [u, l] = Y(!1), [h, d] = Y("top"), [g, f] = Y("left"), p = G(null), T = xe(), x = R(() => {
    if (!e) return "left";
    const P = window.getComputedStyle(e);
    return P.marginLeft === "auto" && P.marginRight === "auto" ? "center" : P.float === "right" ? "right" : (P.float === "left", "left");
  }, [e]);
  q(() => {
    e && f(x());
  }, [e, x]);
  const A = R(() => {
    if (!e || !p.current) return;
    const P = e.getBoundingClientRect(), B = p.current.getBoundingClientRect(), F = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, $ = P.bottom >= 0 && P.top <= F.height && P.right >= 0 && P.left <= F.width;
    let K = "top", X = 0, re = 0;
    if ($) {
      const V = P.top - B.height - 10, Q = F.height - P.bottom - B.height - 10;
      Q > V && Q > 0 ? (K = "bottom", X = P.bottom + 10) : (K = "top", X = P.top - B.height - 10);
    } else
      K = "top", X = 10;
    re = P.left + P.width / 2 - B.width / 2;
    const ce = window.innerWidth, E = window.innerHeight;
    let j = Math.max(10, Math.min(re, ce - B.width - 10)), U = Math.max(10, Math.min(X, E - B.height - 10));
    c({ top: U, left: j }), d(K), l(!0);
  }, [e]);
  un(() => {
    A();
    const P = () => {
      A();
    };
    return window.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      window.removeEventListener("scroll", P), window.removeEventListener("resize", P), l(!1);
    };
  }, [e, A]), q(() => {
    const P = (B) => {
      p.current && !p.current.contains(B.target) && B.target !== e && !e.contains(B.target) && n();
    };
    return document.addEventListener("mousedown", P), () => {
      document.removeEventListener("mousedown", P);
    };
  }, [e, n]);
  const L = R((P) => {
    if (!e || !sn[P]) return;
    const B = cn(e), F = g, $ = sn[P];
    e.style.float = $.float, e.style.margin = $.margin, e.style.marginLeft = $.marginLeft, e.style.marginRight = $.marginRight, f(P), an(e);
    const K = cn(e);
    T.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: P, state: K } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: F, state: B } }
    ), t?.(P);
  }, [e, g, T, t]), S = R((P, B) => () => {
    if (!e) return;
    const F = P.includes("ROW"), $ = F ? r : i;
    if ($ == null || !B(e, $)) return;
    o?.current && T.updateContinuousContent(o.current.innerHTML);
    const X = F ? { element: e, index: $ } : { element: e, index: $ };
    T.recordOperation(
      { type: P, payload: X },
      { type: P, payload: X }
      // Reverse operation would be same type
    ), an(e), requestAnimationFrame(() => A());
  }, [e, r, i, o, T, A]), v = J(
    () => S(be.INSERT_ROW_ABOVE, li),
    [S]
  ), _ = J(
    () => S(be.INSERT_ROW_BELOW, ui),
    [S]
  ), m = J(
    () => S(be.INSERT_COL_LEFT, gi),
    [S]
  ), k = J(
    () => S(be.INSERT_COL_RIGHT, fi),
    [S]
  ), w = J(
    () => S(be.DELETE_ROW, Ei),
    [S]
  ), N = J(
    () => S(be.DELETE_COL, bi),
    [S]
  ), b = (P) => ({
    ...Fe,
    background: P ? "#007bff" : "transparent",
    color: P ? "#fff" : "#333"
  }), O = J(() => ({
    rowAction: { ...Fe, background: "#28a745", color: "#fff" },
    colAction: { ...Fe, background: "#0056b3", color: "#fff" },
    delete: { ...Fe, background: "#dc3545", color: "#fff" },
    divider: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" }
  }), []), H = J(() => ({
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
  }), [s, u]);
  return !e || typeof document > "u" ? null : dn(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: p,
        className: "table-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !u,
        style: H,
        children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${g === "left" ? "active" : ""}`,
              onClick: () => L("left"),
              title: "Align Left",
              style: b(g === "left"),
              children: /* @__PURE__ */ a.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${g === "center" ? "active" : ""}`,
              onClick: () => L("center"),
              title: "Align Center",
              style: b(g === "center"),
              children: /* @__PURE__ */ a.jsx(_n, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${g === "right" ? "active" : ""}`,
              onClick: () => L("right"),
              title: "Align Right",
              style: b(g === "right"),
              children: /* @__PURE__ */ a.jsx(Pn, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("div", { style: O.divider }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: v,
                title: "Insert Row Above",
                style: O.rowAction,
                children: /* @__PURE__ */ a.jsx(vo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: _,
                title: "Insert Row Below",
                style: O.rowAction,
                children: /* @__PURE__ */ a.jsx(yo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: w,
                title: "Delete Row",
                style: O.delete,
                children: /* @__PURE__ */ a.jsx(Et, { size: 14 })
              }
            )
          ] }),
          i != null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("div", { style: O.divider }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: m,
                title: "Insert Column Left",
                style: O.colAction,
                children: /* @__PURE__ */ a.jsx(Eo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: k,
                title: "Insert Column Right",
                style: O.colAction,
                children: /* @__PURE__ */ a.jsx(wo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: N,
                title: "Delete Column",
                style: O.delete,
                children: /* @__PURE__ */ a.jsx(Et, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Pt.propTypes = {
  tableElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onClose: y.func.isRequired,
  selectedRowIndex: y.number,
  selectedColIndex: y.number,
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Pt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const wi = ".table-cell-selected, .table-row-selected, .table-col-selected", ln = () => {
  ri(wi, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, Mt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const n = G({
    selectedCells: /* @__PURE__ */ new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: !1,
    hasDragged: !1,
    startCell: null
  }), [r, i] = Y(!1), [o, s] = Y(!1), [c, u] = Y(null), [l, h] = Y(null), d = G(null), g = R(() => {
    n.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, i(!1), s(!1), u(null), h(null);
  }, []), f = R(() => {
    g(), ln(), d.current !== null && (d.current = null, t && t(null));
  }, [t, g]), p = R((m) => {
    const k = m.closest("tr"), w = m.closest("table");
    if (!k || !w) return null;
    const N = Array.from(w.rows).indexOf(k), b = Array.from(k.cells).indexOf(m);
    return { rowIndex: N, cellIndex: b, table: w };
  }, []), T = R((m) => {
    if (m.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const k = Array.from(m), w = k[0], N = p(w);
    if (!N) return { mode: null, rowIndex: null, colIndex: null };
    const { table: b } = N;
    return k.filter((P) => {
      const B = p(P);
      return B && B.table === b && B.rowIndex === N.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: N.rowIndex, colIndex: null } : k.filter((P) => {
      const B = p(P);
      return B && B.table === b && B.cellIndex === N.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: N.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [p]), x = R((m, k, w, N, b) => {
    if (ln(), !(!b || !m)) {
      if (m === "row" && k !== null) {
        const O = b.rows[k];
        O && Array.from(O.cells).forEach((H) => {
          H.classList.add("table-row-selected");
        });
      } else m === "column" && w !== null ? Array.from(b.rows).forEach((O) => {
        const H = O.cells[w];
        H && H.classList.add("table-col-selected");
      }) : m === "cells" && N.forEach((O) => {
        O.classList.add("table-cell-selected");
      });
      oi();
    }
  }, []), A = R((m, k) => {
    const w = T(m);
    n.current.selectedCells = m, n.current.selectionMode = w.mode, n.current.selectedRowIndex = w.rowIndex, n.current.selectedColIndex = w.colIndex, n.current.currentTable = k, h(k), x(w.mode, w.rowIndex, w.colIndex, m, k);
    const N = w.mode ? {
      mode: w.mode,
      cells: m,
      rowIndex: w.rowIndex,
      colIndex: w.colIndex,
      table: k
    } : null;
    JSON.stringify(d.current) !== JSON.stringify(N) && (d.current = N, t && t(N));
  }, [T, x, t]), L = R((m) => {
    const k = m.target.closest("td, th");
    if (!k) return;
    const w = p(k);
    w && (i(!0), u(k), h(w.table), s(!1));
  }, [p]), S = R((m) => {
    if (!r || !c) return;
    const k = m.target.closest("td, th");
    if (!k || !l || !on(l, k)) return;
    s(!0), Ge(m);
    const w = p(c), N = p(k);
    if (!w || !N || w.table !== N.table) return;
    const b = Math.min(w.rowIndex, N.rowIndex), O = Math.max(w.rowIndex, N.rowIndex), H = Math.min(w.cellIndex, N.cellIndex), P = Math.max(w.cellIndex, N.cellIndex), B = /* @__PURE__ */ new Set();
    for (let F = b; F <= O; F++) {
      const $ = l.rows[F];
      if ($)
        for (let K = H; K <= P; K++) {
          const X = $.cells[K];
          X && B.add(X);
        }
    }
    A(B, l);
  }, [r, c, l, p, A]), v = R(() => {
    o || f(), i(!1), u(null);
  }, [o, f]), _ = R((m) => {
    const k = m.target.closest("td, th"), w = m.target.closest("table");
    if (!(k && l && on(l, k))) {
      if (w && w !== l) {
        f();
        return;
      }
      w || f();
    }
  }, [f, l]);
  return q(() => {
    if (!e.current) return;
    const m = e.current, k = (N) => {
      N.target.closest("td, th") && L(N);
    }, w = (N) => {
      N.target.closest("td, th") && S(N);
    };
    return m.addEventListener("mousedown", k, !0), m.addEventListener("mouseenter", w, !0), document.addEventListener("mouseup", v), document.addEventListener("click", _), () => {
      m.removeEventListener("mousedown", k, !0), m.removeEventListener("mouseenter", w, !0), document.removeEventListener("mouseup", v), document.removeEventListener("click", _);
    };
  }, [e, L, S, v, _]), q(() => {
    if (!e.current) return;
    const m = new MutationObserver((k) => {
      k.forEach((w) => {
        w.type === "childList" && l && !e.current.contains(l) && f();
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, f, l]), null;
};
Mt.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: y.func
};
Mt.defaultProps = {
  onCellSelectionChange: void 0
};
const Ai = 50, lt = 50, vi = 50, Ci = 100, Ri = 300, It = At(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: c = !0,
  showToolbar: u = !0,
  showPageManager: l = !0
}, h) => {
  const d = xn(), g = xe(), { pageSize: f, pageMargins: p, continuousContent: T, pageBoundaries: x, activePage: A, zoomLevel: L, canUndo: S, canRedo: v } = d, _ = G(null), m = G(null), { currentFormat: k, formatText: w, updateCurrentFormatFromSelection: N } = Or(), [b, O] = Y(!1), [H, P] = Y(null), [B, F] = Y(!0), [$, K] = Y(!1), [X, re] = Y(null), [ce, E] = Y(null), [j, U] = Y(null), {
    checkAndUpdateBoundaries: V,
    getCurrentPage: Q,
    scrollToPage: se,
    updateBoundaries: D,
    triggerAutoReflow: ee,
    removePageAndContent: Te,
    removePageBreak: Me,
    insertPageBreakAtBoundary: jt
  } = qr(f, m, L, p), Zn = J(() => Oe(f), [f]), [Vn, Yn] = Y(!1), ge = G(null), Ie = G(!1), je = G(!1), Be = G(!1), He = G(T), Qe = R(() => {
    Ie.current = !1;
    const C = Math.max(0, x.length - 1);
    g.setActivePage(C), setTimeout(() => {
      se(C, _);
    }, vi);
  }, [x.length, g, se]);
  q(() => {
    if (!m.current || Be.current) return;
    m.current.innerHTML = T, Be.current = !0, He.current = T;
    const C = setTimeout(() => {
      D();
    }, Ai);
    return () => clearTimeout(C);
  }, []), q(() => {
    if (!m.current || !Be.current) return;
    if (m.current.innerHTML !== T) {
      m.current.innerHTML = T;
      const W = setTimeout(() => {
        D(), Ie.current && Qe();
      }, lt);
      return He.current = T, () => clearTimeout(W);
    }
  }, [T, D, Qe]), q(() => {
    s && Be.current && s(T);
  }, [T, s]);
  const { restoreCursorPosition: et, hasActiveCursorSelection: tt } = Vr({
    updateCurrentFormatFromSelection: N,
    editorRef: m
  }), Kn = R((C) => {
    C !== T && g.updateContinuousContent(C), m.current && m.current.innerHTML !== C && (m.current.innerHTML = C), He.current = C, setTimeout(() => {
      D();
    }, lt);
  }, [T, g, D]), nt = R((C) => {
    if (!m.current || !C) return;
    tt() || et(), document.execCommand("insertHTML", !1, C);
    const W = m.current.innerHTML;
    g.updateContinuousContent(W), He.current = W, setTimeout(() => {
      D(), ee(200);
    }, lt);
  }, [tt, et, g, D, ee]), Bt = J(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m.current ? m.current.innerHTML : T,
    /**
     * Get the selected HTML content from the editor
     * Returns the HTML content of the selected element or the common ancestor of the selection
     * Supports images and table content
     * @returns {string} The selected HTML content
     */
    getSelectedHTMLContent: () => {
      if (!m.current) return "";
      const C = window.getSelection();
      if (!C || C.rangeCount === 0) return "";
      const W = C.getRangeAt(0);
      if (!m.current.contains(W.commonAncestorContainer)) return "";
      if (W.collapsed) {
        const oe = W.commonAncestorContainer;
        return oe.nodeType === Node.TEXT_NODE ? oe.parentElement ? oe.parentElement.outerHTML : "" : oe.outerHTML || "";
      }
      let te = W.commonAncestorContainer;
      if (te.nodeType === Node.TEXT_NODE && (te = te.parentElement), te === m.current) {
        const oe = W.cloneContents(), Ee = document.createElement("div");
        return Ee.appendChild(oe), Ee.innerHTML;
      }
      return te ? te.outerHTML : "";
    },
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : T).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? Wr(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (C) => {
      const W = We(C);
      Kn(W);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (C) => {
      g.updatePageSize(C), D({ pageSize: C });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (C) => {
      g.updatePageMargins(C), D({ pageMargins: C });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (C) => {
      const W = We(C);
      nt(W);
    }
  }), [T, g, D, ee, tt, et]);
  mr(h, () => Bt, [Bt]);
  const rt = R(() => {
    if (!m.current) return;
    let C = m.current.innerHTML;
    C = We(C), C !== m.current.innerHTML && (m.current.innerHTML = C);
    const W = T;
    if (W !== C) {
      const oe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: C
      }, Ee = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: W
      };
      g.recordOperation(oe, Ee);
    }
    g.updateContinuousContent(C), V(), ee(200);
    const te = Q(_);
    te !== A && g.setActivePage(te);
  }, [g, V, Q, A, ee, _, m, T]), Xn = R((C) => {
    rt();
  }, [rt]), Ht = R((C) => {
    g.updatePageSize(C), D({ pageSize: C }), i && i(C);
  }, [g, D, i]), Dt = R((C) => {
    g.updatePageMargins(C), D({ pageMargins: C }), o && o(C);
  }, [g, D, o]), zt = R((C) => {
    C < 0 || C >= x.length || (je.current = !0, g.setActivePage(C), se(C, _), setTimeout(() => {
      je.current = !1;
    }, Ri), t && t(C));
  }, [g, se, t, x.length]), $t = R(() => {
    const C = x.length + 1;
    jt(C) && (Ie.current = !0, setTimeout(() => {
      Ie.current && Qe();
    }, 100)), n && n();
  }, [x.length, jt, g, se, n]), Jn = R(() => {
    const C = window.getSelection();
    if (C && C.rangeCount > 0) {
      if (!m?.current) return;
      const oe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, oe), setTimeout(() => {
        D();
        const Ee = Q(_);
        g.setActivePage(Ee);
      }, 150);
    }
  }, [D, Q, g, _]), Qn = R((C) => {
    nt(C);
  }, [nt]), er = R((C) => {
    if (!C) return;
    Me(C) && setTimeout(() => {
      const te = Q(_);
      g.setActivePage(te);
    }, 200);
  }, [Me, Q, g, _]), Ft = R((C) => {
    if (x.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Te(C) && (g.setActivePage(0), r && r(C));
  }, [x.length, Te, g, r]), tr = J(() => ({
    handleZoomIn: () => g.zoomIn(),
    handleZoomOut: () => g.zoomOut(),
    handleZoomReset: () => g.resetZoom(),
    handleUndo: () => g.undo(),
    handleRedo: () => g.redo()
  }), [g]), { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: nr, handleRedo: rr } = tr;
  Zr(
    { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: nr, handleRedo: rr },
    { editorRef: m, containerRef: _ }
  );
  const or = R(() => {
    !_.current || !m.current || je.current || (ge.current && clearTimeout(ge.current), ge.current = setTimeout(() => {
      if (je.current) {
        ge.current = null;
        return;
      }
      const C = Q(_);
      C !== A && C >= 0 && g.setActivePage(C), ge.current = null;
    }, Ci));
  }, [Q, A, g]), sr = J(() => {
    if (!T) return 0;
    const W = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return W ? W.length : 0;
  }, [T]), ir = x.length || 1, ar = R((C) => {
    O(!0), P(C);
  }, []), Ut = R(() => {
    O(!1), P(null);
  }, []), cr = R((C, W) => {
  }, []), lr = R((C) => {
    C && C.mode === "row" ? (E(C.rowIndex), U(null)) : C && C.mode === "column" ? (U(C.colIndex), E(null)) : (E(null), U(null));
  }, []), ur = R((C) => {
    K(!0), re(C);
  }, []), Wt = R(() => {
    K(!1), re(null);
  }, []), dr = R((C, W) => {
  }, []);
  return q(() => () => {
    ge.current && clearTimeout(ge.current);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ a.jsx(
      Rt,
      {
        currentFormat: {
          ...k,
          imageSelected: b
        },
        onFormatText: w,
        onAddPageBreak: Jn,
        onInsertImage: Qn,
        canUndo: S,
        canRedo: v
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "editor-container", children: [
      c && /* @__PURE__ */ a.jsx(
        ls,
        {
          editorView: null,
          isCollapsed: Vn,
          onToggle: () => Yn((C) => !C),
          wordCount: sr,
          pageCount: ir
        }
      ),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: _,
          onScroll: or,
          children: /* @__PURE__ */ a.jsx(
            Zs,
            {
              content: T,
              dimensions: Zn,
              pageSize: f,
              pageMargins: p,
              pageBoundaries: x,
              editorRef: m,
              onInput: Xn,
              onContentChange: rt,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: er,
              zoomLevel: L
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        Lt,
        {
          editorRef: m,
          onImageSelect: ar,
          onImageDeselect: Ut,
          onImageResize: cr,
          resizeOptions: {
            ...Ae,
            preserveAspectRatio: B,
            aspectRatio: B
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        _t,
        {
          editorRef: m,
          onTableSelect: ur,
          onTableDeselect: Wt,
          onTableResize: dr
        }
      ),
      /* @__PURE__ */ a.jsx(
        Mt,
        {
          editorRef: m,
          onCellSelectionChange: lr
        }
      ),
      b && H && /* @__PURE__ */ a.jsx(
        Nt,
        {
          imageElement: H,
          initialPreserveAspectRatio: B,
          onAlignChange: (C) => {
          },
          onAspectRatioToggle: (C) => {
            F(C);
          },
          onDelete: () => {
            if (H) {
              const C = H.getAttribute("data-key");
              C && no(C).catch((W) => {
                console.error("Failed to delete image from IndexedDB:", W);
              });
            }
          },
          onClose: Ut
        }
      ),
      $ && X && /* @__PURE__ */ a.jsx(
        Pt,
        {
          tableElement: X,
          onAlignChange: (C) => {
          },
          onClose: Wt,
          selectedRowIndex: ce,
          selectedColIndex: j,
          editorRef: m
        }
      ),
      l && /* @__PURE__ */ a.jsx("div", { className: "page-manager-sidebar", children: e ? Xe.cloneElement(e, {
        onNavigate: zt,
        onAddPage: $t,
        onDeletePage: Ft,
        onPageSizeChange: Ht,
        onPageMarginsChange: Dt,
        zoomLevel: L,
        canZoomIn: pt(L),
        canZoomOut: ht(L),
        onZoomIn: ot,
        onZoomOut: st,
        onZoomReset: it
      }) : /* @__PURE__ */ a.jsx(
        Vs,
        {
          pageBoundaries: x,
          activePage: A,
          pageSize: f,
          pageMargins: p,
          zoomLevel: L,
          canZoomIn: pt(L),
          canZoomOut: ht(L),
          onNavigate: zt,
          onAddPage: $t,
          onDeletePage: Ft,
          onPageSizeChange: Ht,
          onPageMarginsChange: Dt,
          onZoomIn: ot,
          onZoomOut: st,
          onZoomReset: it
        }
      ) })
    ] })
  ] });
});
It.displayName = "HtmlEditor";
It.propTypes = {
  pageManagerComponent: y.element,
  onNavigatePage: y.func,
  onAddPage: y.func,
  onDeletePage: y.func,
  onPageSizeChange: y.func,
  onPageMarginsChange: y.func,
  onChange: y.func,
  showSidebar: y.bool,
  showToolbar: y.bool,
  showPageManager: y.bool
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
class qn extends Xe.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ a.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ a.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ a.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ a.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ a.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(
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
  children: y.node.isRequired,
  fallback: y.node,
  onError: y.func,
  onReset: y.func,
  showDetails: y.bool
};
qn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Rr as COMMON_FONT_SIZES,
  Hn as ColorPickerDropdown,
  Je as DEFAULT_FONT_SIZE,
  Ae as DEFAULT_IMAGE_RESIZE_OPTIONS,
  fn as DEFAULT_PAGE_SIZE,
  Ot as DEFAULT_TABLE_RESIZE_OPTIONS,
  Pi as DocumentProvider,
  Rt as EditorToolbar,
  qn as ErrorBoundary,
  yn as FONT_SIZE_MAP,
  It as HtmlEditor,
  Lt as ImageResizeHandlers,
  Ze as PAGE_SIZES,
  Vs as PageManager,
  Zs as PageView,
  M as RESIZE_HANDLERS,
  ls as Sidebar,
  z as TABLE_RESIZE_HANDLERS,
  _t as TableResizeHandlers,
  Di as applyImageDimensions,
  Pe as applyTableDimensions,
  Bi as calculateResizeDimensions,
  si as calculateTableResizeDimensions,
  zi as clearImages,
  Yr as createResizeOverlay,
  ii as createTableResizeOverlay,
  no as deleteImage,
  $i as getAllImageKeys,
  _i as getAvailablePageSizes,
  to as getImage,
  Hi as getImageDimensions,
  Oe as getPageDimensions,
  Mi as getPixelValue,
  Ii as getPointValue,
  ae as getTableStructure,
  pe as isResizableImage,
  ie as isResizableTable,
  ji as isValidFontSize,
  Si as isValidPageSize,
  Ls as logger,
  Lr as pixelsToPoints,
  kr as pointsToPixels,
  at as removeResizeOverlay,
  Re as removeTableResizeOverlay,
  eo as saveImage,
  yt as updateResizeOverlay,
  wt as updateTableResizeOverlay,
  qr as useContinuousReflow,
  mn as useDocument,
  xe as useDocumentActions,
  xn as useDocumentState,
  Or as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
