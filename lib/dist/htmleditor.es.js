import Ye, { createContext as rr, useContext as or, useReducer as sr, useMemo as J, useState as Y, useCallback as k, useRef as G, useEffect as q, forwardRef as bt, createElement as lt, memo as ir, useLayoutEffect as an, useImperativeHandle as ar } from "react";
import { v4 as wt } from "uuid";
import y from "prop-types";
import { createPortal as ln } from "react-dom";
var He = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function lr() {
  if (Ft) return Ae;
  Ft = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var l in i)
        l !== "key" && (o[l] = i[l]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Ae.Fragment = t, Ae.jsx = n, Ae.jsxs = n, Ae;
}
var ve = {};
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
function cr() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case R:
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
    function l(E, j) {
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
    function c(E, j, U, V, Q, se) {
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
        var ee = Object.keys(j).filter(function(Pe) {
          return Pe !== "key";
        });
        V = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", le[D + V] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), le[D + V] = !0);
      }
      if (D = null, U !== void 0 && (n(U), D = "" + U), s(j) && (n(j.key), D = "" + j.key), "key" in j) {
        U = {};
        for (var ye in j)
          ye !== "key" && (U[ye] = j[ye]);
      } else U = j;
      return D && l(
        U,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), c(
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
    var f = Ye, p = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), v = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, B = Array.isArray, F = console.createTask ? console.createTask : function() {
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
    )(), re = F(r(o)), le = {};
    ve.Fragment = x, ve.jsx = function(E, j, U) {
      var V = 1e4 > H.recentlyCreatedOwnerStacks++;
      return h(
        E,
        j,
        U,
        !1,
        V ? Error("react-stack-top-frame") : X,
        V ? F(r(E)) : re
      );
    }, ve.jsxs = function(E, j, U) {
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
  })()), ve;
}
var Wt;
function ur() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? He.exports = lr() : He.exports = cr()), He.exports;
}
var a = ur();
const ct = 100, ut = 50, dt = 200, Gt = 5, gt = (e) => e < dt, ft = (e) => e > ut, dr = 96, ce = (e) => Math.round(e * dr), Ge = {
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
}, ue = "NORMAL", cn = (e = ue) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ce(e.top),
      bottom: ce(e.bottom),
      left: ce(e.left),
      right: ce(e.right)
    };
  const t = Ge[e] || Ge[ue];
  return {
    top: ce(t.top),
    bottom: ce(t.bottom),
    left: ce(t.left),
    right: ce(t.right)
  };
}, gr = (e = ue) => {
  const t = cn(e);
  return t.top + t.bottom;
}, fr = () => Object.keys(Ge), pr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ge[e];
  return t ? t.label : "Unknown";
}, qe = {
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
}, un = "A4", Ne = (e) => {
  const t = qe[e] || qe[un];
  return {
    width: t.width,
    height: t.height
  };
}, Ni = (e) => Object.keys(qe).includes(e), Oi = () => Object.keys(qe), Oe = un, fe = "<p><br></p>", hr = "continuous", Re = (e, t = Oe) => ({
  id: wt(),
  index: e,
  size: t,
  content: fe,
  images: [],
  isBreakPoint: !1
}), Fe = (e) => typeof e != "string" || e.trim() === "" ? fe : e, dn = (e, t = Oe) => (e.length > 0 ? e : [Re(0, t)]).map((r, i) => ({
  id: r.id || wt(),
  index: i,
  size: r.size || t,
  content: Fe(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), mr = (e = Oe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Ne(e).height
}], De = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), pt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Oe, r = dn(e.pages || [Re(0, n)], n);
  return {
    id: wt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || hr,
    continuousContent: e.continuousContent || fe,
    pageBoundaries: e.pageBoundaries || mr(n),
    zoomLevel: e.zoomLevel || ct,
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
}, ht = (e, t) => {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case I.INITIALIZE_DOCUMENT: {
      const { initialContent: r = fe, pageSize: i = Oe } = t.payload || {}, o = { ...Re(0, i), content: Fe(r) };
      return pt({
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
        content: Fe(i)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case I.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = dn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : De(i);
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
      i.splice(r, 0, Re(r, e.pageSize));
      const o = i.map((l, u) => ({
        ...l,
        index: u,
        size: e.pageSize
      })), s = De(o);
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
      const o = i.map((u, c) => ({
        ...u,
        index: c,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const l = De(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: l,
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
        Ne(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((s, l) => ({
        ...s,
        index: l,
        size: r
      })), o = De(i);
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case I.RESET_DOCUMENT:
      return pt();
    case I.UPDATE_CONTINUOUS_CONTENT: {
      const r = Fe(t.payload);
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
        const l = s.substring(0, r), u = s.substring(r);
        s = l + o + u;
      } else if (typeof i == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = s;
        const u = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (i < u.length) {
          const c = u[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", c.parentNode.insertBefore(h, c.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), s = l.innerHTML;
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
      return o[r] && o[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, u) => {
        l.setAttribute("data-page-number", String(u + 2));
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
      return r === "continuous" ? i = e.pages.map((l) => l.content).filter((l) => l && l !== fe).join(`
`) || fe : e.continuousContent && e.continuousContent !== fe && (o = [{ ...Re(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: o,
        updatedAt: n
      };
    }
    case I.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < ut || r > dt ? (console.warn(`Invalid zoom level: ${r}. Must be between ${ut} and ${dt}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.ZOOM_IN: {
      if (!gt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Gt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.ZOOM_OUT: {
      if (!ft(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Gt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case I.RESET_ZOOM:
      return e.zoomLevel === ct ? e : {
        ...e,
        zoomLevel: ct,
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
      return r.inverseOperation && (o = ht(e, r.inverseOperation)), {
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
      return r.operation && (o = ht(e, r.operation)), {
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
}, gn = rr(null), Si = ({ children: e, initialState: t = {} }) => {
  const [n, r] = sr(ht, pt(t)), i = J(() => ({
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
    recordOperation: (s, l) => r({
      type: I.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: l }
    }),
    undo: () => r({ type: I.UNDO }),
    redo: () => r({ type: I.REDO }),
    clearUndoRedo: () => r({ type: I.CLEAR_UNDO_REDO })
  }), []), o = J(() => ({
    state: n,
    actions: i,
    dispatch: r
  }), [n, i]);
  return /* @__PURE__ */ a.jsx(gn.Provider, { value: o, children: e });
}, fn = () => {
  const e = or(gn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, pn = () => {
  const { state: e } = fn();
  return e;
}, me = () => {
  const { actions: e } = fn();
  return e;
}, hn = {
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
}, xr = [
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
], Ke = "16px", yr = (e) => Math.round(e * 96 / 72), Tr = (e) => Math.round(e * 72 / 96 * 2) / 2, _i = (e) => {
  const t = Object.values(hn).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${yr(e)}px`;
}, Pi = (e) => {
  const t = parseInt(e), n = Object.values(hn).find((r) => r.px === t);
  return n ? n.pt : Tr(t);
}, Mi = (e) => {
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
}, Er = {
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
}, qt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ke,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, br = () => {
  const [e, t] = Y(qt), n = me(), r = k((f, p, T = null) => {
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
          const S = f === "fontSize" ? Er[p] || "3" : p;
          return document.execCommand(T, !1, S), t((v) => ({ ...v, [f]: p })), !0;
        }
        return !1;
      }
    } catch (x) {
      return console.warn(`[useFormatting] Style application failed for ${f}:`, x), !1;
    }
  }, []), i = k((f) => r("fontFamily", f, "fontName"), [r]), o = k((f) => r("fontSize", f, "fontSize"), [r]), s = k((f) => r("color", f, "foreColor"), [r]), l = k((f) => {
    t((p) => ({
      ...p,
      alignLeft: f === "left",
      alignCenter: f === "center",
      alignRight: f === "right",
      alignJustify: f === "justify"
    }));
  }, []), u = k((f) => {
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
        const v = T.startContainer, _ = v.nodeType === Node.TEXT_NODE ? v.parentElement : v, m = ke(_) || vr();
        return m && (m.style.textAlign = L, l(L)), !0;
      }
      const S = Ar(T);
      if (S.length === 0) {
        const v = document.createElement("p");
        v.style.textAlign = L;
        const _ = T.extractContents();
        v.appendChild(_), T.insertNode(v), T.selectNodeContents(v), p.removeAllRanges(), p.addRange(T);
      } else
        S.forEach((v) => {
          v.style.textAlign = L;
        });
      return l(L), !0;
    } catch (p) {
      return console.warn("[useFormatting] Text alignment failed:", p), !1;
    }
  }, [l]), c = k((f) => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return !1;
      const T = p.getRangeAt(0), x = document.createElement("div");
      if (x.innerHTML = f, Array.from(x.children).some(
        (L) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(L.tagName)
      )) {
        const L = T.startContainer, S = L.nodeType === Node.TEXT_NODE ? L.parentElement : L, v = ke(S);
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
  }, []), h = k((f, p = null) => {
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
        c(p);
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
  }, [o, i, u, c, n]), d = k(() => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return;
      const p = f.getRangeAt(0), T = p.toString();
      let x = Ke, A = "Arial", L = "#000000", S = "p", v = "left";
      if (T) {
        const m = p.startContainer, R = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
        if (R) {
          const w = window.getComputedStyle(R), N = w.fontSize, b = w.fontFamily;
          N && N.endsWith("px") && (x = N), b && b !== "serif" && (A = b.split(",")[0].replace(/['"]/g, "").trim());
          const O = w.color;
          O && O !== "rgb(0, 0, 0)" && O !== "#000000" && (O.startsWith("rgb") ? L = wr(O) : L = O);
          const H = ke(R);
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
  }, []), g = k(() => {
    t(qt);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: g,
    updateCurrentFormatFromSelection: d
  };
};
function wr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), i = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + i).toString(16).slice(1)}`;
}
function ke(e) {
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
function Ar(e) {
  const t = [], n = e.startContainer, r = e.endContainer, i = ke(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = ke(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (i === o && i)
    return [i];
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
  let l = s.nextNode();
  for (; l; )
    e.intersectsNode(l) && t.push(l), l = s.nextNode();
  return t;
}
function vr() {
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
const de = 'page-break, [data-page-break="true"]', Cr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Ne(n), i = e.querySelectorAll(de), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), l = e.scrollTop;
  return i.forEach((u, c) => {
    const d = u.getBoundingClientRect().top - s.top + l;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: d,
      height: r.height
    });
  }), o;
}, mn = (e, t = 100, n = ue) => {
  const r = Ne(e), i = gr(n), o = r.height - i, s = t / 100;
  return o / s;
}, Rr = (e, t) => {
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
}, Zt = (e) => {
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
}, kr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), l = window.getComputedStyle(e).textAlign;
      if (l === "center" || l === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Lr = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Nr = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  try {
    const u = mn(n, r, i) * (t - 1), c = Array.from(e.children);
    let h = 0, d = null;
    for (let g = 0; g < c.length; g++) {
      const f = c[g];
      if (f.tagName === "PAGE-BREAK" || f.getAttribute("data-page-break") === "true")
        continue;
      const p = kr(f);
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
  } catch (l) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", l), !1;
  }
}, Or = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(de));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
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
    if (c && c.rangeCount > 0) {
      const T = c.getRangeAt(0).startContainer;
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
}, Sr = (e) => {
  if (e)
    try {
      e.querySelectorAll(de).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, _r = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Sr(t), n) {
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
}, Pr = 200, Mr = 50, Vt = 3, Ir = 20, xn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), l = window.getComputedStyle(e).textAlign;
      if (l === "center" || l === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, jr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = xn(o);
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
}, Br = (e, t, n, r, i, o, s, l) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = mn(t, n, r);
    let c = Zt(e), h = !1, d = 0;
    for (let g = 0; g < c.length && d < Vt; g++) {
      const f = c[g], p = jr(f, u);
      if (p && p.overflowIndex > 0) {
        let T = 0;
        for (let S = 0; S < f.length; S++) {
          const v = f[S];
          v && v.getBoundingClientRect && (T += xn(v));
        }
        if (T - u < Ir)
          continue;
        const A = g + 2;
        Lr(p.overflowElement, A) && (h = !0, d++, c = Zt(e));
      }
    }
    if (h) {
      if (i) {
        const g = e.innerHTML;
        i(g);
      }
      setTimeout(() => {
        o && o(), d >= Vt && l && setTimeout(() => {
          s.current || l();
        }, 100);
      }, Mr);
    }
    return h;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, Hr = (e, t, n = Pr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Dr = 400, yn = (e, t) => {
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
}, zr = (e, t, n, r) => {
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
      const o = i.getBoundingClientRect(), s = e.getBoundingClientRect(), l = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: l,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : yn(t, n);
      }, Dr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, $r = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Fr = (e) => {
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
  const l = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = l.length, c = (l.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: c,
    charOffset: u
  };
}, Ur = 300, Wr = (e, t, n = 100, r = "NARROW") => {
  const i = me(), o = G(null), s = G(null), l = G(e), u = G(n), c = G(r), h = G(!1);
  q(() => {
    l.current = e;
  }, [e]), q(() => {
    u.current = n;
  }, [n]), q(() => {
    c.current = r;
  }, [r]), q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = k((m = {}) => t?.current ? Cr(t.current, m) : [], [t]), g = k((m = {}) => {
    const R = d(m);
    return i.updatePageBoundaries(R), R;
  }, [d, i]), f = k((m = {}) => {
    const R = typeof m.delay == "number" ? m.delay : Ur;
    $r(g, o, m, R);
  }, [g]), p = k(() => {
    t?.current && Br(
      t.current,
      l.current,
      u.current,
      c.current,
      i.updateContinuousContent,
      g,
      h,
      p
    );
  }, [t, i, g]), T = k((m) => {
    Hr(p, s, m);
  }, [p]), x = k((m) => !m?.current || !t?.current ? 0 : Rr(m.current, t.current), [t]), A = k((m) => {
    t?.current && yn(t.current, m);
  }, [t]), L = k((m, R) => {
    if (!R?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    zr(R.current, t.current, m, A);
  }, [t, A]), S = k(async (m) => t?.current ? Nr(
    t.current,
    m,
    l.current,
    u.current,
    c.current,
    i.updateContinuousContent,
    g
  ) : !1, [t, i, g]), v = k((m) => t?.current ? Or(
    t.current,
    m,
    d,
    i.updateContinuousContent,
    g,
    A,
    p
  ) : !1, [t, d, i, g, A, p]), _ = k((m) => t?.current ? _r(
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
}, Gr = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: i, handleUndo: o, handleRedo: s } = e, { editorRef: l, containerRef: u } = t;
  q(() => {
    const c = (h) => {
      if (h.ctrlKey || h.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(h.key) && h.preventDefault();
        const d = document.activeElement === l.current, g = document.activeElement === u.current, f = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
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
    return window.addEventListener("keydown", c), () => {
      window.removeEventListener("keydown", c);
    };
  }, [n, r, i, o, s, l, u]);
}, qr = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = G(null), r = k(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (n.current)
      try {
        o.removeAllRanges(), o.addRange(n.current);
        return;
      } catch (l) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", l);
      }
    const s = t.current.lastChild;
    if (s) {
      const l = document.createRange();
      s.nodeType === Node.TEXT_NODE ? l.setStart(s, s.textContent.length) : l.setStartAfter(s), l.collapse(!0), o.removeAllRanges(), o.addRange(l);
    }
  }, [t]), i = k(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return q(() => {
    const o = () => {
      if (e(), t.current) {
        const l = window.getSelection();
        if (l.rangeCount > 0) {
          const u = l.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (n.current = u.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), n.current && t.current)
        try {
          const l = window.getSelection();
          l.removeAllRanges(), l.addRange(n.current);
        } catch (l) {
          console.warn("[handleFocus] Failed to restore cursor:", l);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: r,
    hasActiveCursorSelection: i
  };
}, we = {
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
function Ii({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: l = we
}) {
  const u = r - t, c = i - n;
  let h = o, d = s;
  switch (e) {
    case M.TOP_LEFT:
      h = Math.max(l.minWidth, o - u), d = Math.max(l.minHeight, s - c);
      break;
    case M.TOP_RIGHT:
      h = Math.max(l.minWidth, o + u), d = Math.max(l.minHeight, s - c);
      break;
    case M.BOTTOM_LEFT:
      h = Math.max(l.minWidth, o - u), d = Math.max(l.minHeight, s + c);
      break;
    case M.BOTTOM_RIGHT:
      h = Math.max(l.minWidth, o + u), d = Math.max(l.minHeight, s + c);
      break;
    case M.TOP:
      d = Math.max(l.minHeight, s - c);
      break;
    case M.BOTTOM:
      d = Math.max(l.minHeight, s + c);
      break;
    case M.LEFT:
      h = Math.max(l.minWidth, o - u);
      break;
    case M.RIGHT:
      h = Math.max(l.minWidth, o + u);
      break;
    default:
      return { width: h, height: d };
  }
  if (l.preserveAspectRatio && l.aspectRatio) {
    const g = o / s;
    [
      M.TOP_LEFT,
      M.TOP_RIGHT,
      M.BOTTOM_LEFT,
      M.BOTTOM_RIGHT
    ].includes(e) ? h / g > d ? d = Math.max(l.minHeight, h / g) : h = Math.max(l.minWidth, d * g) : [M.TOP, M.BOTTOM].includes(e) ? h = d * g : [M.LEFT, M.RIGHT].includes(e) && (d = h / g);
  }
  return l.maxWidth && h > l.maxWidth && (h = l.maxWidth, l.preserveAspectRatio && l.aspectRatio && (d = h / (o / s))), l.maxHeight && d > l.maxHeight && (d = l.maxHeight, l.preserveAspectRatio && l.aspectRatio && (h = d * (o / s))), h = Math.max(l.minWidth, h), d = Math.max(l.minHeight, d), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function pe(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ji(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Bi(e, { width: t, height: n }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Zr(e, t = we) {
  if (!pe(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(M).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = Vr(o), s.style.pointerEvents = "all", Tn(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function Vr(e) {
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
function Tn(e, t, n, r) {
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
function mt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const o = i.dataset.handler;
    Tn(i, o, n.width, n.height);
  });
}
function st(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Yr = "html-editor-storage", Kr = 1, ne = "images";
function Xr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Se() {
  return new Promise((e, t) => {
    const n = indexedDB.open(Yr, Kr);
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
function Jr(e) {
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
        const c = await Se(), h = `editor-image-${Xr()}`, g = c.transaction([ne], "readwrite").objectStore(ne), f = {
          key: h,
          dataUrl: s,
          size: u,
          type: e.type,
          timestamp: Date.now()
        }, p = g.add(f);
        p.onsuccess = () => {
          c.close(), t(h);
        }, p.onerror = () => {
          c.close(), n(new Error("Failed to save image to IndexedDB"));
        };
      } catch (c) {
        n(c);
      }
    }, i.onerror = () => {
      n(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function Qr(e) {
  try {
    const t = await Se();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readonly").objectStore(ne).get(e);
      s.onsuccess = () => {
        t.close();
        const l = s.result;
        n(l ? l.dataUrl : null);
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function eo(e) {
  try {
    const t = await Se();
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
async function Hi() {
  try {
    const e = await Se();
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
async function Di() {
  try {
    const e = await Se();
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
const En = [
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
], to = [
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
], no = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function ro(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function bn(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function Ue(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, Le(n) || "<p><br></p>";
}
function oo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function so(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => En.includes(n.tagName));
}
function io(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      En.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Le(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${ro(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i, s = o.tagName, l = s.toLowerCase(), u = bn(o);
      if (s === "DIV") {
        const c = Le(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        so(o) ? t.push(io(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = oo(o);
        t.push(`<${l}${u}>${c}</${l}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(ao(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(lo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Le(o);
        t.push(`<blockquote${u}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (to.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (no.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Le(o);
        t.push(`<${l}${u}>${c}</${l}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function ao(e) {
  const t = e.tagName.toLowerCase(), n = bn(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const o = Le(i);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function lo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Yt = (e) => {
  const t = uo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, wn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), go = (e) => {
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
var fo = {
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
const po = bt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...l
  }, u) => lt(
    "svg",
    {
      ref: u,
      ...fo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: wn("lucide", i),
      ...!o && !go(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...s.map(([c, h]) => lt(c, h)),
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
  const n = bt(
    ({ className: r, ...i }, o) => lt(po, {
      ref: o,
      iconNode: t,
      className: wn(
        `lucide-${co(Yt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Yt(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], mo = Z("arrow-down", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], yo = Z("arrow-left", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Eo = Z("arrow-right", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], wo = Z("arrow-up", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], vo = Z("chevron-left", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ro = Z("chevron-right", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Lo = Z("file-check", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], xt = Z("file-text", No);
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
], So = Z("hash", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Po = Z("heading-1", _o);
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
], Io = Z("heading-2", Mo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Bo = Z("heading-3", jo);
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
], Do = Z("image-upscale", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], $o = Z("list", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
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
], Uo = Z("palette", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Go = Z("plus", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Zo = Z("scaling", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Yo = Z("settings", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], An = Z("text-align-center", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], vn = Z("text-align-end", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Cn = Z("text-align-start", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], yt = Z("trash-2", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ts = Z("x", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], rs = Z("zoom-in", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ss = Z("zoom-out", os), Kt = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((o, s) => {
    const l = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${n}heading-${s}`,
      level: l,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, is = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, as = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = pn(), { pages: o, activePage: s, continuousContent: l } = i, { wordCount: u, outline: c } = J(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: Kt(l, 1, "continuous-")
      };
    let d = 0;
    const g = [];
    return o.forEach((f, p) => {
      d += is(f.content), g.push(...Kt(f.content, p + 1, `page-${p}-`));
    }), { wordCount: d, outline: g };
  }, [o, n, r, l]), h = r !== void 0 ? r : o.length;
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
            /* @__PURE__ */ a.jsx(xt, { size: 18 }),
            /* @__PURE__ */ a.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ a.jsx(Ro, { size: 16 }) : /* @__PURE__ */ a.jsx(vo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Lo, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: h })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(So, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(xt, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsxs("h3", { children: [
              /* @__PURE__ */ a.jsx($o, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((d) => {
              const g = d.level === 1 ? Po : d.level === 2 ? Io : Bo;
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
}, ls = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ a.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ a.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), us = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), ds = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), gs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), fs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), ps = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), hs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), ms = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), xs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6 18v0" })
] }), ys = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), Ts = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ a.jsx("path", { d: "M15 6v12" })
] }), Es = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ a.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ a.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), ws = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), As = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), vs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ a.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ a.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] });
class Rs {
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
const Xt = new Rs("Editor"), Rn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), kn = 32;
function Ln(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * kn}px`, e.dataset.indentLevel = String(r));
}
function ks(e, t) {
  Ln(e, t);
}
function Ls(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Rn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Ns() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && n.add(s);
  }), n.size === 0 && r.querySelectorAll("img").forEach((l) => {
    if (document.createRange().selectNode(l), t.intersectsNode(l)) {
      let c = l.parentElement;
      for (; c && c !== r; ) {
        if (c.tagName && Rn.has(c.tagName.toUpperCase())) {
          n.add(c);
          break;
        }
        c = c.parentElement;
      }
    }
  }), Array.from(n).filter((s) => {
    let l = s.parentElement;
    for (; l; ) {
      if (n.has(l))
        return !1;
      l = l.parentElement;
    }
    return !0;
  })) : [];
}
function Os(e) {
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
function Tt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = Ns();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = Ls(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const i = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      ks(s, e);
      return;
    }
    e ? Os(s) : Ln(s, !1);
  });
  try {
    const s = document.createRange(), l = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
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
    }, c = l(i);
    c ? s.setStart(c, 0) : s.setStart(i, 0);
    const h = u(o);
    h ? s.setEnd(h, h.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const l = document.createRange();
      l.setStartBefore(i), l.setEndAfter(o), t.removeAllRanges(), t.addRange(l);
    } catch (l) {
      console.warn("Could not restore selection after indentation:", l);
    }
  }
  return !0;
}
function Ss(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && Tt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Nn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
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
    const c = (h) => {
      o.current && !o.current.contains(h.target) && i(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const l = (c) => {
    t(c), i(!1);
  }, u = (c) => {
    const h = c.target.value;
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
        children: /* @__PURE__ */ a.jsx(Uo, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ a.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ a.jsx("div", { className: "color-grid", children: s.map((c) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => l(c),
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
Nn.propTypes = {
  currentColor: y.string,
  onColorSelect: y.func.isRequired,
  title: y.string
};
const _s = [
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
], Ps = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Ms = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', At = ({
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
  ), l = () => /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }), u = async (f) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(f.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (f.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const T = await Jr(f), x = await Qr(T);
      if (x && r) {
        const A = `<img src="${x}" data-key="${T}" alt="Inserted image" />`;
        r(A);
      } else
        Xt.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (p) {
      Xt.error("Error uploading image", p);
    }
  }, c = () => {
    Tt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, h = () => {
    Tt(!0);
  }, d = () => {
    const f = prompt("Enter URL:");
    f && t("createLink", f);
  }, g = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), bs, "Undo", null, !i),
    s(() => t("redo"), ws, "Redo", null, !o),
    l(),
    s(() => t("bold"), ls, "Bold", "bold"),
    s(() => t("italic"), cs, "Italic", "italic"),
    s(() => t("underline"), us, "Underline", "underline"),
    s(() => t("strikethrough"), ds, "Strikethrough", "strikethrough"),
    l(),
    s(() => t("justifyLeft"), gs, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), fs, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), ps, "Align Right", "alignRight"),
    s(() => t("justifyFull"), hs, "Justify", "alignJustify"),
    l(),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (f) => t("fontName", f.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: _s.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (f) => t("fontSize", f.target.value),
        value: e.fontSize || Ke,
        title: "Font Size",
        children: xr.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    /* @__PURE__ */ a.jsx(
      Nn,
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
        children: Ps.map(({ value: f, label: p }) => /* @__PURE__ */ a.jsx("option", { value: f, children: p }, f))
      }
    ),
    l(),
    s(() => t("insertUnorderedList"), ms, "Bullet List"),
    s(() => t("insertOrderedList"), xs, "Numbered List"),
    l(),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ a.jsx(vs, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: h,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ a.jsx(Cs, { size: 16 })
      }
    ),
    l(),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ a.jsx(ys, { size: 16 })
      }
    ),
    s(() => t("insertHTML", Ms), Ts, "Insert Table"),
    n && s(n, Es, "Insert Page Break"),
    l(),
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
        children: /* @__PURE__ */ a.jsx(As, { size: 16 })
      }
    )
  ] });
};
At.propTypes = {
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
At.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function Is(e) {
  return !e || typeof e != "string" ? e : Ue(e);
}
function js(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Is(n) : n = Bs(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Bs(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => Hs(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function Hs(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ds = 20, zs = 20, Jt = 20, Qt = -12, $s = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, Fs = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: Ke,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, en = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, Us = (e, t, n) => !!((he(t) || he(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), Ws = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (he(t) || he(n))), he = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && he(e.parentElement) : !1, vt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: o,
  onScroll: s,
  onPaste: l,
  onRemovePageBreak: u,
  zoomLevel: c = 100,
  pageMargins: h = ue
}) => {
  const d = J(() => cn(h), [h]), g = c / 100, f = k((v, _) => {
    if (!v) return !1;
    const m = v.getBoundingClientRect(), R = _ - m.top;
    return R < d.top || R > m.height - d.bottom;
  }, [d.top, d.bottom]), p = k((v, _) => {
    _.preventDefault();
    const m = v.getBoundingClientRect(), R = _.clientX - m.left, w = _.clientY - m.top, N = m.width - Jt - Ds, b = Qt, O = m.width - Jt, H = Qt + zs;
    R >= N && R <= O && w >= b && w <= H && u && u(v);
  }, [u]), T = k((v) => {
    v.preventDefault();
    const _ = t.current.getBoundingClientRect();
    if (v.clientY - _.top < d.top) {
      const R = t.current.firstElementChild;
      R && R.tagName !== "PAGE-BREAK" && en(R, !0);
    } else {
      const R = t.current.lastElementChild;
      R && R.tagName !== "PAGE-BREAK" && en(R, !1);
    }
  }, [t, d.top]), x = k((v) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const m = _.getRangeAt(0), { startContainer: R, endContainer: w } = m;
    if (Us(v, R, w))
      return v.preventDefault(), !1;
    if (Ss(v))
      return r && r(), !1;
    if (Ws(v, R, w))
      return v.preventDefault(), !1;
    i && i(v);
  }, [i, r]), A = k((v) => {
    if (!t.current) return;
    const _ = v.target;
    if (he(_)) {
      p(_, v);
      return;
    }
    if (f(t.current, v.clientY)) {
      T(v);
      return;
    }
    o && o(v);
  }, [t, o, p, T, f]), L = k((v) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const m = _.getRangeAt(0), { startContainer: R } = m;
    if (he(R))
      return v.preventDefault(), !1;
  }, []), S = k((v) => {
    const _ = js(v);
    l && l(v, _);
  }, [l]);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...$s,
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
            ...Fs,
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
vt.propTypes = {
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
vt.defaultProps = {
  zoomLevel: 100,
  pageMargins: ue
};
const Gs = ir(vt), On = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ue,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: l,
  onAddPage: u,
  onDeletePage: c,
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
    c?.(A);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ a.jsx(Yo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              children: fr().map((A) => /* @__PURE__ */ a.jsx("option", { value: A, children: pr(A) }, A))
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
          children: /* @__PURE__ */ a.jsx(ss, { size: 12 })
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
          children: /* @__PURE__ */ a.jsx(rs, { size: 12 })
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
          onClick: () => l?.(L),
          "aria-label": `Go to page ${L + 1}`,
          "aria-current": L === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ a.jsx(xt, { size: 14 }),
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
          children: /* @__PURE__ */ a.jsx(ts, { size: 14 })
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
          /* @__PURE__ */ a.jsx(Go, { size: 16 }),
          /* @__PURE__ */ a.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
On.propTypes = {
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
const qs = Ye.memo(On), ze = 10, Zs = 300, Vs = 200;
function Ys(e) {
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
function Ks(e, t, n, r, i, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    M.TOP_LEFT,
    M.TOP_RIGHT,
    M.BOTTOM_LEFT,
    M.BOTTOM_RIGHT
  ].includes(i) ? e / s > t ? t = e / s : e = t * s : [M.TOP, M.BOTTOM].includes(i) ? e = t * s : [M.LEFT, M.RIGHT].includes(i) && (t = e / s), { width: e, height: t };
}
function Xs({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: l = we
}) {
  const u = r - t, c = i - n;
  let h = o, d = s;
  switch (e) {
    case M.TOP_LEFT:
      h = o - u, d = s - c;
      break;
    case M.TOP_RIGHT:
      h = o + u, d = s - c;
      break;
    case M.BOTTOM_LEFT:
      h = o - u, d = s + c;
      break;
    case M.BOTTOM_RIGHT:
      h = o + u, d = s + c;
      break;
    case M.TOP:
      d = s - c;
      break;
    case M.BOTTOM:
      d = s + c;
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
  return { width: h, height: d } = Ks(
    h,
    d,
    o,
    s,
    e,
    l
  ), l.maxWidth && h > l.maxWidth && (h = l.maxWidth, l.preserveAspectRatio && (d = h / (o / s))), l.maxHeight && d > l.maxHeight && (d = l.maxHeight, l.preserveAspectRatio && (h = d * (o / s))), h = Math.max(l.minWidth, Math.min(l.maxWidth || h, h)), d = Math.max(l.minHeight, Math.min(l.maxHeight || d, d)), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function Sn(e, { width: t, height: n }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Js(e, t, n) {
  Sn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function Qs(e, t, n, r) {
  const { ctrlKey: i, metaKey: o, shiftKey: s, key: l } = e, u = i || o, c = n.offsetWidth, h = n.offsetHeight, g = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(r.maxWidth || 800, c + ze),
      height: h
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(r.minWidth || 50, c - ze),
      height: h
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: c,
      height: Math.min(r.maxHeight || 600, h + ze)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: c,
      height: Math.max(r.minHeight || 50, h - ze)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: Zs, height: Vs }) : null
  }[l];
  if (g) {
    e.preventDefault();
    const f = g();
    return Js(t, n, f), !0;
  }
  return !1;
}
const Ct = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: i = we
}) => {
  const o = G({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = G(i), l = me();
  q(() => {
    s.current = i;
  }, [i]);
  const u = k((x) => {
    if (!pe(x)) return;
    o.current.overlay && (st(o.current.overlay), o.current.overlay = null), x.classList.add("selected");
    const A = Zr(x, s.current);
    A && (o.current.overlay = A, o.current.image = x, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((S) => {
      S.addEventListener("mousedown", h);
    }), n && n(x));
  }, [n]), c = k(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (st(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), h = k((x) => {
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
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ys(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", g);
  }, []), d = k((x) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    x.preventDefault(), x.stopPropagation();
    const { x: A, y: L, width: S, height: v } = o.current.start, _ = o.current.handler, m = x.clientX, R = x.clientY, w = Xs({
      handler: _,
      startX: A,
      startY: L,
      currentX: m,
      currentY: R,
      startWidth: S,
      startHeight: v,
      options: s.current
    });
    Sn(o.current.image, w), o.current.overlay && mt(o.current.overlay, o.current.image);
  }, []), g = k((x) => {
    if (o.current.isResizing) {
      if (x.preventDefault(), x.stopPropagation(), o.current.image && o.current.start) {
        const A = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, L = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (A.width !== L.width || A.height !== L.height) && l.recordOperation(
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
  }, [t, l]), f = k((x) => {
    o.current.overlay && !o.current.overlay.contains(x.target) && c();
    const A = x.target;
    if (pe(A)) {
      if (A === o.current.image)
        return;
      u(A);
    }
  }, [u, c]), p = k((x) => {
    if ((x.key === "Delete" || x.key === "Backspace") && o.current.image && !o.current.isResizing) {
      x.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), c();
        const L = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(L);
      }
    }
    x.key === "Escape" && o.current.image && c(), o.current.image && !o.current.isResizing && Qs(x, e, o.current.image, s.current);
  }, [e, c]), T = k(() => {
    o.current.overlay && o.current.image && mt(o.current.overlay, o.current.image);
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
      x.removeEventListener("click", f), x.removeEventListener("keydown", p), window.removeEventListener("resize", T), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && st(o.current.overlay);
    };
  }, [e, f, p, T, d, g]), q(() => {
    if (!e.current) return;
    const x = new MutationObserver((A) => {
      A.forEach((L) => {
        L.type === "childList" && L.removedNodes.forEach((S) => {
          S.nodeType === Node.ELEMENT_NODE && pe(S) && S === o.current.image && c();
        });
      });
    });
    return x.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => x.disconnect();
  }, [e, c, u]), null;
};
Ct.propTypes = {
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
Ct.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: we
};
const _n = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, ei = {
  ..._n,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, it = (e) => ({
  ..._n,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), Rt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, l] = Y({ top: 0, left: 0 }), [u, c] = Y(!1), [h, d] = Y("top"), [g, f] = Y(o), p = G(null), T = me(), x = (b) => {
    b && requestAnimationFrame(() => {
      const O = document.querySelector(".image-resize-overlay");
      O && mt(O, b);
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
  }, L = k(() => {
    if (!e) return "left";
    const b = window.getComputedStyle(e);
    return b.float === "right" ? "right" : b.float === "left" ? "left" : b.display === "block" && b.margin.includes("auto") ? "center" : "left";
  }, [e]), [S, v] = Y("left");
  q(() => {
    e && v(L());
  }, [e, L]);
  const _ = k(() => {
    if (!e || !p.current) return;
    const b = e.getBoundingClientRect(), O = p.current.getBoundingClientRect(), H = window.innerWidth, P = window.innerHeight, B = b.bottom >= 0 && b.top <= P && b.right >= 0 && b.left <= H;
    let F = "top", $ = 0, K = 0;
    if (B) {
      const le = b.top - O.height - 10, E = P - b.bottom - O.height - 10;
      E > le && E > 0 ? (F = "bottom", $ = b.bottom + 10) : (F = "top", $ = b.top - O.height - 10);
    } else
      F = "top", $ = 10;
    K = b.left + b.width / 2 - O.width / 2;
    let X = Math.max(10, Math.min(K, H - O.width - 10)), re = Math.max(10, Math.min($, P - O.height - 10));
    l({ top: re, left: X }), d(F), c(!0);
  }, [e]);
  an(() => {
    _();
    const b = () => {
      _();
    };
    return window.addEventListener("scroll", b), window.addEventListener("resize", b), () => {
      window.removeEventListener("scroll", b), window.removeEventListener("resize", b), c(!1);
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
  }, R = (b) => {
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
  return !e || typeof document > "u" ? null : ln(
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
              children: g ? /* @__PURE__ */ a.jsx(Zo, { size: 14 }) : /* @__PURE__ */ a.jsx(Do, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "left" ? "active" : ""}`,
              onClick: () => R("left"),
              title: "Align Left",
              style: it(S === "left"),
              children: /* @__PURE__ */ a.jsx(Cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "center" ? "active" : ""}`,
              onClick: () => R("center"),
              title: "Align Center",
              style: it(S === "center"),
              children: /* @__PURE__ */ a.jsx(An, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${S === "right" ? "active" : ""}`,
              onClick: () => R("right"),
              title: "Align Right",
              style: it(S === "right"),
              children: /* @__PURE__ */ a.jsx(vn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: w,
              title: "Delete Image",
              style: ei,
              children: /* @__PURE__ */ a.jsx(yt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Rt.propTypes = {
  imageElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onAspectRatioToggle: y.func,
  onDelete: y.func,
  onClose: y.func.isRequired,
  initialPreserveAspectRatio: y.bool
};
Rt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const We = (e) => {
  e.preventDefault(), e.stopPropagation();
}, ti = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((i) => {
      r.classList.remove(i);
    });
  });
}, tn = (e, t) => !e || !t ? !1 : e.contains(t), ni = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, kt = {
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
      const c = s[u], h = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      i.push(h || 100);
    }
  else if (n.length > 0) {
    const u = n[0];
    for (let c = 0; c < u.cells.length; c++) {
      const h = u.cells[c];
      i.push(h.offsetWidth);
    }
  }
  const l = n.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: i,
    rowHeights: l,
    rect: t
  };
}
function ri({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = kt
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (l, u, c, h, d) => {
    u >= 0 && u < l.length && (l[u] = Math.max(h, Math.min(d, l[u] + c)));
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
function xe(e) {
  if (!ie(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const i = r.querySelectorAll("col"), o = i.length;
  if (o < n)
    for (let s = o; s < n; s++) {
      const l = document.createElement("col");
      r.appendChild(l);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(i[s]);
}
function _e(e, t) {
  if (!ie(e)) return;
  xe(e);
  const { columnWidths: n, rowHeights: r, tableWidth: i, tableHeight: o } = t, s = n ? n.reduce((u, c) => u + c, 0) : 0, l = r ? r.reduce((u, c) => u + c, 0) : 0;
  if (i !== void 0 ? e.style.width = `${i}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : l > 0 && (e.style.height = `${l}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const u = e.querySelector("colgroup");
    u && u.querySelectorAll("col").forEach((h, d) => {
      d < n.length && (h.style.width = `${n[d]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((c, h) => {
    h < r.length && (c.style.height = `${r[h]}px`);
  }), e.style.height = `${l}px`), e.offsetHeight;
}
function oi(e) {
  if (!ie(e)) return null;
  xe(e);
  const t = ae(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const l = Ze(z.COLUMN, s, t, r, e);
    n.appendChild(l);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const l = Ze(z.ROW, s, t, r, e);
    n.appendChild(l);
  }
  const i = Ve(z.TABLE_BOTTOM, t, r);
  n.appendChild(i);
  const o = Ve(z.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const si = {
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
function Pn(e, t, n) {
  const r = si[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const i = document.createElement("div");
  return i.className = r.className, i.dataset.type = e, i.style.position = "absolute", i.style.cursor = r.cursor, i.style.pointerEvents = "all", r.isVertical ? (i.style.width = "4px", i.style.height = `${t}px`) : (i.style.width = `${t}px`, i.style.height = "4px"), n != null && (i.dataset.index = n), i;
}
function Ze(e, t, n, r, i) {
  const o = e === z.COLUMN ? r.height : r.width, s = Pn(e, o, t);
  return be(s, e, t, n, r, i), s;
}
function Ve(e, t, n) {
  const r = e === z.TABLE_RIGHT ? n.height : n.width, i = Pn(e, r);
  return be(i, e, null, t, n, null), i;
}
function Et(e, t) {
  if (!e || !t) return;
  xe(t);
  const n = ae(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), l = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !l) {
    e.innerHTML = "";
    for (let d = 0; d < n.columns - 1; d++) {
      const g = Ze(z.COLUMN, d, n, r, t);
      e.appendChild(g);
    }
    for (let d = 0; d < n.rows - 1; d++) {
      const g = Ze(z.ROW, d, n, r, t);
      e.appendChild(g);
    }
    const c = Ve(z.TABLE_BOTTOM, n, r);
    e.appendChild(c);
    const h = Ve(z.TABLE_RIGHT, n, r);
    e.appendChild(h);
  } else
    i.forEach((c, h) => {
      be(c, z.COLUMN, h, n, r, t);
    }), o.forEach((c, h) => {
      be(c, z.ROW, h, n, r, t);
    }), s && be(s, z.TABLE_BOTTOM, null, n, r, null), l && be(l, z.TABLE_RIGHT, null, n, r, null);
}
function Ce(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Lt(e, t = "Operation") {
  return ie(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function ii(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", t.appendChild(i);
  }
  return t;
}
function Mn(e, t, n = 0) {
  if (!Lt(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const i = e.rows[t];
  if (!i)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = ii(i);
    r < e.rows.length ? e.rows[r].parentNode.insertBefore(o, e.rows[r]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), xe(e);
    const s = ae(e);
    return s && _e(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function ai(e, t) {
  return Mn(e, t, -1);
}
function li(e, t) {
  return Mn(e, t, 1);
}
function ci() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function In(e, t, n = 0) {
  if (!Lt(e, "insertColumnAtPosition"))
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
      const l = ci();
      i < s.cells.length ? s.insertBefore(l, s.cells[i]) : s.appendChild(l);
    }
    xe(e);
    const o = ae(e);
    return o && _e(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function ui(e, t) {
  return In(e, t, -1);
}
function di(e, t) {
  return In(e, t, 1);
}
function be(e, t, n, r, i, o) {
  switch (t) {
    case z.COLUMN:
      gi(e, n, r, i, o);
      break;
    case z.ROW:
      fi(e, n, r, i, o);
      break;
    case z.TABLE_BOTTOM:
      pi(e, r, i);
      break;
    case z.TABLE_RIGHT:
      hi(e, r, i);
      break;
  }
}
function gi(e, t, n, r, i) {
  if (i?.rows.length > 0 && i.rows[0].cells.length > t) {
    const s = i.rows[0].cells[t].getBoundingClientRect(), l = i.getBoundingClientRect();
    e.style.left = `${s.right - l.left - 2}px`, e.style.height = `${r.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${r.height}px`;
}
function fi(e, t, n, r, i) {
  if (i?.rows.length > t && i.rows[t].cells.length > 0) {
    const s = i.rows[t].cells[0].getBoundingClientRect(), l = i.getBoundingClientRect();
    e.style.top = `${s.bottom - l.top - 2}px`, e.style.width = `${r.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${r.width}px`;
}
function pi(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function hi(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function jn(e, t, n) {
  return Lt(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? mi(e, t) : n === "column" ? xi(e, t) : !1 : !1;
}
function mi(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), xe(e);
    const r = ae(e);
    return r && _e(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function xi(e, t) {
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
    xe(e);
    const r = ae(e);
    return r && _e(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
function yi(e, t) {
  return jn(e, t, "row");
}
function Ti(e, t) {
  return jn(e, t, "column");
}
const Nt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = kt
}) => {
  const o = G(null), s = G(null), l = G(null), u = G(null), c = G(null), h = G(i), d = G(!1), [g, f] = Y(null), p = me();
  q(() => {
    h.current = i;
  }, [i]);
  const T = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Ce(o.current), o.current = null), f(null), l.current = null, u.current = null, c.current = null, d.current = !1, r && r();
  }, [r]), x = k((w) => {
    if (We(w), !s.current) return;
    const N = w.currentTarget, b = N.dataset.type, O = parseInt(N.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const H = ae(s.current);
    l.current = {
      x: w.clientX,
      y: w.clientY,
      structure: { ...H }
    }, u.current = b, c.current = O, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const B = {
      [z.COLUMN]: "col-resize",
      [z.ROW]: "row-resize",
      [z.TABLE_BOTTOM]: "ns-resize",
      [z.TABLE_RIGHT]: "ew-resize"
    }[b] || "default";
    document.body.style.cursor = B, document.addEventListener("mousemove", S), document.addEventListener("mouseup", v);
  }, []), A = k((w) => {
    const N = oi(w, h.current);
    return N && (o.current = N, s.current = w, document.body.appendChild(N), N.querySelectorAll(".table-resize-handler").forEach((O) => {
      O.addEventListener("mousedown", x);
    })), N;
  }, [x]), L = k((w) => {
    if (!ie(w)) return;
    o.current && (Ce(o.current), o.current = null), w.classList.add("selected"), A(w) && (f(w), n && n(w));
  }, [n, A]), S = k((w) => {
    if (!d.current || !s.current || !l.current || !u.current) return;
    We(w);
    const { x: N, y: b, structure: O } = l.current, H = u.current, P = c.current, B = w.clientX, F = w.clientY;
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
    const K = ri({
      type: H,
      index: P,
      delta: $,
      currentStructure: O,
      options: h.current
    });
    _e(s.current, K), o.current && Et(o.current, s.current);
  }, []), v = k((w) => {
    if (d.current) {
      if (We(w), s.current && l.current) {
        const N = {
          structure: l.current.structure
        }, b = {
          structure: ae(s.current)
        };
        (N.structure.width !== b.structure.width || N.structure.height !== b.structure.height || JSON.stringify(N.structure.columnWidths) !== JSON.stringify(b.structure.columnWidths) || JSON.stringify(N.structure.rowHeights) !== JSON.stringify(b.structure.rowHeights)) && p.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: b } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: N } }
        );
      }
      if (l.current = null, u.current = null, c.current = null, d.current = !1, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(N), t && t(s.current, ae(s.current));
      }
    }
  }, [t, p]), _ = k((w) => {
    o.current && !o.current.contains(w.target) && T();
    const b = w.target.closest("table");
    if (b && ie(b)) {
      if (b === s.current)
        return;
      L(b);
    }
  }, [L, T]), m = k((w) => {
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
  }, [e, T]), R = k(() => {
    o.current && s.current && Et(o.current, s.current);
  }, []);
  return q(() => {
    if (!e.current) return;
    const N = e.current.closest(".editor-viewport");
    return N && (N.addEventListener("scroll", R), window.addEventListener("scroll", R)), () => {
      N && N.removeEventListener("scroll", R), window.removeEventListener("scroll", R);
    };
  }, [e, R]), q(() => {
    if (!e.current) return;
    const w = e.current;
    return w.addEventListener("click", _), w.addEventListener("keydown", m), window.addEventListener("resize", R), () => {
      w.removeEventListener("click", _), w.removeEventListener("keydown", m), window.removeEventListener("resize", R), d.current && (document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", v), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Ce(o.current);
    };
  }, [e, _, m, R, S, v]), q(() => {
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
        ) && o.current && s.current && (Ce(o.current), o.current = null, A(s.current))) : b.type === "attributes" && ["colspan", "rowspan"].includes(b.attributeName) && g && o.current && s.current && (Ce(o.current), o.current = null, A(s.current));
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
Nt.propTypes = {
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
Nt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: kt
};
const $e = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, nn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, Ee = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, rn = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && Et(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, on = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, Ot = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: i,
  editorRef: o
}) => {
  const [s, l] = Y({ top: 0, left: 0 }), [u, c] = Y(!1), [h, d] = Y("top"), [g, f] = Y("left"), p = G(null), T = me(), x = k(() => {
    if (!e) return "left";
    const P = window.getComputedStyle(e);
    return P.marginLeft === "auto" && P.marginRight === "auto" ? "center" : P.float === "right" ? "right" : (P.float === "left", "left");
  }, [e]);
  q(() => {
    e && f(x());
  }, [e, x]);
  const A = k(() => {
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
    const le = window.innerWidth, E = window.innerHeight;
    let j = Math.max(10, Math.min(re, le - B.width - 10)), U = Math.max(10, Math.min(X, E - B.height - 10));
    l({ top: U, left: j }), d(K), c(!0);
  }, [e]);
  an(() => {
    A();
    const P = () => {
      A();
    };
    return window.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      window.removeEventListener("scroll", P), window.removeEventListener("resize", P), c(!1);
    };
  }, [e, A]), q(() => {
    const P = (B) => {
      p.current && !p.current.contains(B.target) && B.target !== e && !e.contains(B.target) && n();
    };
    return document.addEventListener("mousedown", P), () => {
      document.removeEventListener("mousedown", P);
    };
  }, [e, n]);
  const L = k((P) => {
    if (!e || !nn[P]) return;
    const B = on(e), F = g, $ = nn[P];
    e.style.float = $.float, e.style.margin = $.margin, e.style.marginLeft = $.marginLeft, e.style.marginRight = $.marginRight, f(P), rn(e);
    const K = on(e);
    T.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: P, state: K } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: F, state: B } }
    ), t?.(P);
  }, [e, g, T, t]), S = k((P, B) => () => {
    if (!e) return;
    const F = P.includes("ROW"), $ = F ? r : i;
    if ($ == null || !B(e, $)) return;
    o?.current && T.updateContinuousContent(o.current.innerHTML);
    const X = F ? { element: e, index: $ } : { element: e, index: $ };
    T.recordOperation(
      { type: P, payload: X },
      { type: P, payload: X }
      // Reverse operation would be same type
    ), rn(e), requestAnimationFrame(() => A());
  }, [e, r, i, o, T, A]), v = J(
    () => S(Ee.INSERT_ROW_ABOVE, ai),
    [S]
  ), _ = J(
    () => S(Ee.INSERT_ROW_BELOW, li),
    [S]
  ), m = J(
    () => S(Ee.INSERT_COL_LEFT, ui),
    [S]
  ), R = J(
    () => S(Ee.INSERT_COL_RIGHT, di),
    [S]
  ), w = J(
    () => S(Ee.DELETE_ROW, yi),
    [S]
  ), N = J(
    () => S(Ee.DELETE_COL, Ti),
    [S]
  ), b = (P) => ({
    ...$e,
    background: P ? "#007bff" : "transparent",
    color: P ? "#fff" : "#333"
  }), O = J(() => ({
    rowAction: { ...$e, background: "#28a745", color: "#fff" },
    colAction: { ...$e, background: "#0056b3", color: "#fff" },
    delete: { ...$e, background: "#dc3545", color: "#fff" },
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
  return !e || typeof document > "u" ? null : ln(
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
              children: /* @__PURE__ */ a.jsx(Cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${g === "center" ? "active" : ""}`,
              onClick: () => L("center"),
              title: "Align Center",
              style: b(g === "center"),
              children: /* @__PURE__ */ a.jsx(An, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `tooltip-button ${g === "right" ? "active" : ""}`,
              onClick: () => L("right"),
              title: "Align Right",
              style: b(g === "right"),
              children: /* @__PURE__ */ a.jsx(vn, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(wo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: _,
                title: "Insert Row Below",
                style: O.rowAction,
                children: /* @__PURE__ */ a.jsx(mo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: w,
                title: "Delete Row",
                style: O.delete,
                children: /* @__PURE__ */ a.jsx(yt, { size: 14 })
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
                children: /* @__PURE__ */ a.jsx(yo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: R,
                title: "Insert Column Right",
                style: O.colAction,
                children: /* @__PURE__ */ a.jsx(Eo, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: N,
                title: "Delete Column",
                style: O.delete,
                children: /* @__PURE__ */ a.jsx(yt, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Ot.propTypes = {
  tableElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onClose: y.func.isRequired,
  selectedRowIndex: y.number,
  selectedColIndex: y.number,
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Ot.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Ei = ".table-cell-selected, .table-row-selected, .table-col-selected", sn = () => {
  ti(Ei, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, St = ({
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
  }), [r, i] = Y(!1), [o, s] = Y(!1), [l, u] = Y(null), [c, h] = Y(null), d = G(null), g = k(() => {
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
  }, []), f = k(() => {
    g(), sn(), d.current !== null && (d.current = null, t && t(null));
  }, [t, g]), p = k((m) => {
    const R = m.closest("tr"), w = m.closest("table");
    if (!R || !w) return null;
    const N = Array.from(w.rows).indexOf(R), b = Array.from(R.cells).indexOf(m);
    return { rowIndex: N, cellIndex: b, table: w };
  }, []), T = k((m) => {
    if (m.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const R = Array.from(m), w = R[0], N = p(w);
    if (!N) return { mode: null, rowIndex: null, colIndex: null };
    const { table: b } = N;
    return R.filter((P) => {
      const B = p(P);
      return B && B.table === b && B.rowIndex === N.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: N.rowIndex, colIndex: null } : R.filter((P) => {
      const B = p(P);
      return B && B.table === b && B.cellIndex === N.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: N.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [p]), x = k((m, R, w, N, b) => {
    if (sn(), !(!b || !m)) {
      if (m === "row" && R !== null) {
        const O = b.rows[R];
        O && Array.from(O.cells).forEach((H) => {
          H.classList.add("table-row-selected");
        });
      } else m === "column" && w !== null ? Array.from(b.rows).forEach((O) => {
        const H = O.cells[w];
        H && H.classList.add("table-col-selected");
      }) : m === "cells" && N.forEach((O) => {
        O.classList.add("table-cell-selected");
      });
      ni();
    }
  }, []), A = k((m, R) => {
    const w = T(m);
    n.current.selectedCells = m, n.current.selectionMode = w.mode, n.current.selectedRowIndex = w.rowIndex, n.current.selectedColIndex = w.colIndex, n.current.currentTable = R, h(R), x(w.mode, w.rowIndex, w.colIndex, m, R);
    const N = w.mode ? {
      mode: w.mode,
      cells: m,
      rowIndex: w.rowIndex,
      colIndex: w.colIndex,
      table: R
    } : null;
    JSON.stringify(d.current) !== JSON.stringify(N) && (d.current = N, t && t(N));
  }, [T, x, t]), L = k((m) => {
    const R = m.target.closest("td, th");
    if (!R) return;
    const w = p(R);
    w && (i(!0), u(R), h(w.table), s(!1));
  }, [p]), S = k((m) => {
    if (!r || !l) return;
    const R = m.target.closest("td, th");
    if (!R || !c || !tn(c, R)) return;
    s(!0), We(m);
    const w = p(l), N = p(R);
    if (!w || !N || w.table !== N.table) return;
    const b = Math.min(w.rowIndex, N.rowIndex), O = Math.max(w.rowIndex, N.rowIndex), H = Math.min(w.cellIndex, N.cellIndex), P = Math.max(w.cellIndex, N.cellIndex), B = /* @__PURE__ */ new Set();
    for (let F = b; F <= O; F++) {
      const $ = c.rows[F];
      if ($)
        for (let K = H; K <= P; K++) {
          const X = $.cells[K];
          X && B.add(X);
        }
    }
    A(B, c);
  }, [r, l, c, p, A]), v = k(() => {
    o || f(), i(!1), u(null);
  }, [o, f]), _ = k((m) => {
    const R = m.target.closest("td, th"), w = m.target.closest("table");
    if (!(R && c && tn(c, R))) {
      if (w && w !== c) {
        f();
        return;
      }
      w || f();
    }
  }, [f, c]);
  return q(() => {
    if (!e.current) return;
    const m = e.current, R = (N) => {
      N.target.closest("td, th") && L(N);
    }, w = (N) => {
      N.target.closest("td, th") && S(N);
    };
    return m.addEventListener("mousedown", R, !0), m.addEventListener("mouseenter", w, !0), document.addEventListener("mouseup", v), document.addEventListener("click", _), () => {
      m.removeEventListener("mousedown", R, !0), m.removeEventListener("mouseenter", w, !0), document.removeEventListener("mouseup", v), document.removeEventListener("click", _);
    };
  }, [e, L, S, v, _]), q(() => {
    if (!e.current) return;
    const m = new MutationObserver((R) => {
      R.forEach((w) => {
        w.type === "childList" && c && !e.current.contains(c) && f();
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, f, c]), null;
};
St.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: y.func
};
St.defaultProps = {
  onCellSelectionChange: void 0
};
const bi = 50, at = 50, wi = 50, Ai = 100, vi = 300, _t = bt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: l = !0,
  showToolbar: u = !0,
  showPageManager: c = !0
}, h) => {
  const d = pn(), g = me(), { pageSize: f, pageMargins: p, continuousContent: T, pageBoundaries: x, activePage: A, zoomLevel: L, canUndo: S, canRedo: v } = d, _ = G(null), m = G(null), { currentFormat: R, formatText: w, updateCurrentFormatFromSelection: N } = br(), [b, O] = Y(!1), [H, P] = Y(null), [B, F] = Y(!0), [$, K] = Y(!1), [X, re] = Y(null), [le, E] = Y(null), [j, U] = Y(null), {
    checkAndUpdateBoundaries: V,
    getCurrentPage: Q,
    scrollToPage: se,
    updateBoundaries: D,
    triggerAutoReflow: ee,
    removePageAndContent: ye,
    removePageBreak: Pe,
    insertPageBreakAtBoundary: Pt
  } = Wr(f, m, L, p), Hn = J(() => Ne(f), [f]), [Dn, zn] = Y(!1), ge = G(null), Me = G(!1), Ie = G(!1), je = G(!1), Be = G(T), Xe = k(() => {
    Me.current = !1;
    const C = Math.max(0, x.length - 1);
    g.setActivePage(C), setTimeout(() => {
      se(C, _);
    }, wi);
  }, [x.length, g, se]);
  q(() => {
    if (!m.current || je.current) return;
    m.current.innerHTML = T, je.current = !0, Be.current = T;
    const C = setTimeout(() => {
      D();
    }, bi);
    return () => clearTimeout(C);
  }, []), q(() => {
    if (!m.current || !je.current) return;
    if (m.current.innerHTML !== T) {
      m.current.innerHTML = T;
      const W = setTimeout(() => {
        D(), Me.current && Xe();
      }, at);
      return Be.current = T, () => clearTimeout(W);
    }
  }, [T, D, Xe]), q(() => {
    s && je.current && s(T);
  }, [T, s]);
  const { restoreCursorPosition: Je, hasActiveCursorSelection: Qe } = qr({
    updateCurrentFormatFromSelection: N,
    editorRef: m
  }), $n = k((C) => {
    C !== T && g.updateContinuousContent(C), m.current && m.current.innerHTML !== C && (m.current.innerHTML = C), Be.current = C, setTimeout(() => {
      D();
    }, at);
  }, [T, g, D]), et = k((C) => {
    if (!m.current || !C) return;
    Qe() || Je(), document.execCommand("insertHTML", !1, C);
    const W = m.current.innerHTML;
    g.updateContinuousContent(W), Be.current = W, setTimeout(() => {
      D(), ee(200);
    }, at);
  }, [Qe, Je, g, D, ee]), Mt = J(() => ({
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
        const oe = W.cloneContents(), Te = document.createElement("div");
        return Te.appendChild(oe), Te.innerHTML;
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
    getCursorPosition: () => m.current ? Fr(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (C) => {
      const W = Ue(C);
      $n(W);
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
      const W = Ue(C);
      et(W);
    }
  }), [T, g, D, ee, Qe, Je]);
  ar(h, () => Mt, [Mt]);
  const tt = k(() => {
    if (!m.current) return;
    let C = m.current.innerHTML;
    C = Ue(C), C !== m.current.innerHTML && (m.current.innerHTML = C);
    const W = T;
    if (W !== C) {
      const oe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: C
      }, Te = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: W
      };
      g.recordOperation(oe, Te);
    }
    g.updateContinuousContent(C), V(), ee(200);
    const te = Q(_);
    te !== A && g.setActivePage(te);
  }, [g, V, Q, A, ee, _, m, T]), Fn = k((C) => {
    tt();
  }, [tt]), It = k((C) => {
    g.updatePageSize(C), D({ pageSize: C }), i && i(C);
  }, [g, D, i]), jt = k((C) => {
    g.updatePageMargins(C), D({ pageMargins: C }), o && o(C);
  }, [g, D, o]), Bt = k((C) => {
    C < 0 || C >= x.length || (Ie.current = !0, g.setActivePage(C), se(C, _), setTimeout(() => {
      Ie.current = !1;
    }, vi), t && t(C));
  }, [g, se, t, x.length]), Ht = k(() => {
    const C = x.length + 1;
    Pt(C) && (Me.current = !0, setTimeout(() => {
      Me.current && Xe();
    }, 100)), n && n();
  }, [x.length, Pt, g, se, n]), Un = k(() => {
    const C = window.getSelection();
    if (C && C.rangeCount > 0) {
      if (!m?.current) return;
      const oe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, oe), setTimeout(() => {
        D();
        const Te = Q(_);
        g.setActivePage(Te);
      }, 150);
    }
  }, [D, Q, g, _]), Wn = k((C) => {
    et(C);
  }, [et]), Gn = k((C) => {
    if (!C) return;
    Pe(C) && setTimeout(() => {
      const te = Q(_);
      g.setActivePage(te);
    }, 200);
  }, [Pe, Q, g, _]), Dt = k((C) => {
    if (x.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    ye(C) && (g.setActivePage(0), r && r(C));
  }, [x.length, ye, g, r]), qn = J(() => ({
    handleZoomIn: () => g.zoomIn(),
    handleZoomOut: () => g.zoomOut(),
    handleZoomReset: () => g.resetZoom(),
    handleUndo: () => g.undo(),
    handleRedo: () => g.redo()
  }), [g]), { handleZoomIn: nt, handleZoomOut: rt, handleZoomReset: ot, handleUndo: Zn, handleRedo: Vn } = qn;
  Gr(
    { handleZoomIn: nt, handleZoomOut: rt, handleZoomReset: ot, handleUndo: Zn, handleRedo: Vn },
    { editorRef: m, containerRef: _ }
  );
  const Yn = k(() => {
    !_.current || !m.current || Ie.current || (ge.current && clearTimeout(ge.current), ge.current = setTimeout(() => {
      if (Ie.current) {
        ge.current = null;
        return;
      }
      const C = Q(_);
      C !== A && C >= 0 && g.setActivePage(C), ge.current = null;
    }, Ai));
  }, [Q, A, g]), Kn = J(() => {
    if (!T) return 0;
    const W = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return W ? W.length : 0;
  }, [T]), Xn = x.length || 1, Jn = k((C) => {
    O(!0), P(C);
  }, []), zt = k(() => {
    O(!1), P(null);
  }, []), Qn = k((C, W) => {
  }, []), er = k((C) => {
    C && C.mode === "row" ? (E(C.rowIndex), U(null)) : C && C.mode === "column" ? (U(C.colIndex), E(null)) : (E(null), U(null));
  }, []), tr = k((C) => {
    K(!0), re(C);
  }, []), $t = k(() => {
    K(!1), re(null);
  }, []), nr = k((C, W) => {
  }, []);
  return q(() => () => {
    ge.current && clearTimeout(ge.current);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ a.jsx(
      At,
      {
        currentFormat: {
          ...R,
          imageSelected: b
        },
        onFormatText: w,
        onAddPageBreak: Un,
        onInsertImage: Wn,
        canUndo: S,
        canRedo: v
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "editor-container", children: [
      l && /* @__PURE__ */ a.jsx(
        as,
        {
          editorView: null,
          isCollapsed: Dn,
          onToggle: () => zn((C) => !C),
          wordCount: Kn,
          pageCount: Xn
        }
      ),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: _,
          onScroll: Yn,
          children: /* @__PURE__ */ a.jsx(
            Gs,
            {
              content: T,
              dimensions: Hn,
              pageSize: f,
              pageMargins: p,
              pageBoundaries: x,
              editorRef: m,
              onInput: Fn,
              onContentChange: tt,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: Gn,
              zoomLevel: L
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        Ct,
        {
          editorRef: m,
          onImageSelect: Jn,
          onImageDeselect: zt,
          onImageResize: Qn,
          resizeOptions: {
            ...we,
            preserveAspectRatio: B,
            aspectRatio: B
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        Nt,
        {
          editorRef: m,
          onTableSelect: tr,
          onTableDeselect: $t,
          onTableResize: nr
        }
      ),
      /* @__PURE__ */ a.jsx(
        St,
        {
          editorRef: m,
          onCellSelectionChange: er
        }
      ),
      b && H && /* @__PURE__ */ a.jsx(
        Rt,
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
              C && eo(C).catch((W) => {
                console.error("Failed to delete image from IndexedDB:", W);
              });
            }
          },
          onClose: zt
        }
      ),
      $ && X && /* @__PURE__ */ a.jsx(
        Ot,
        {
          tableElement: X,
          onAlignChange: (C) => {
          },
          onClose: $t,
          selectedRowIndex: le,
          selectedColIndex: j,
          editorRef: m
        }
      ),
      c && /* @__PURE__ */ a.jsx("div", { className: "page-manager-sidebar", children: e ? Ye.cloneElement(e, {
        onNavigate: Bt,
        onAddPage: Ht,
        onDeletePage: Dt,
        onPageSizeChange: It,
        onPageMarginsChange: jt,
        zoomLevel: L,
        canZoomIn: gt(L),
        canZoomOut: ft(L),
        onZoomIn: nt,
        onZoomOut: rt,
        onZoomReset: ot
      }) : /* @__PURE__ */ a.jsx(
        qs,
        {
          pageBoundaries: x,
          activePage: A,
          pageSize: f,
          pageMargins: p,
          zoomLevel: L,
          canZoomIn: gt(L),
          canZoomOut: ft(L),
          onNavigate: Bt,
          onAddPage: Ht,
          onDeletePage: Dt,
          onPageSizeChange: It,
          onPageMarginsChange: jt,
          onZoomIn: nt,
          onZoomOut: rt,
          onZoomReset: ot
        }
      ) })
    ] })
  ] });
});
_t.displayName = "HtmlEditor";
_t.propTypes = {
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
_t.defaultProps = {
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
class Bn extends Ye.Component {
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
Bn.propTypes = {
  children: y.node.isRequired,
  fallback: y.node,
  onError: y.func,
  onReset: y.func,
  showDetails: y.bool
};
Bn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  xr as COMMON_FONT_SIZES,
  Nn as ColorPickerDropdown,
  Ke as DEFAULT_FONT_SIZE,
  we as DEFAULT_IMAGE_RESIZE_OPTIONS,
  un as DEFAULT_PAGE_SIZE,
  kt as DEFAULT_TABLE_RESIZE_OPTIONS,
  Si as DocumentProvider,
  At as EditorToolbar,
  Bn as ErrorBoundary,
  hn as FONT_SIZE_MAP,
  _t as HtmlEditor,
  Ct as ImageResizeHandlers,
  qe as PAGE_SIZES,
  qs as PageManager,
  Gs as PageView,
  M as RESIZE_HANDLERS,
  as as Sidebar,
  z as TABLE_RESIZE_HANDLERS,
  Nt as TableResizeHandlers,
  Bi as applyImageDimensions,
  _e as applyTableDimensions,
  Ii as calculateResizeDimensions,
  ri as calculateTableResizeDimensions,
  Hi as clearImages,
  Zr as createResizeOverlay,
  oi as createTableResizeOverlay,
  eo as deleteImage,
  Di as getAllImageKeys,
  Oi as getAvailablePageSizes,
  Qr as getImage,
  ji as getImageDimensions,
  Ne as getPageDimensions,
  _i as getPixelValue,
  Pi as getPointValue,
  ae as getTableStructure,
  pe as isResizableImage,
  ie as isResizableTable,
  Mi as isValidFontSize,
  Ni as isValidPageSize,
  Rs as logger,
  Tr as pixelsToPoints,
  yr as pointsToPixels,
  st as removeResizeOverlay,
  Ce as removeTableResizeOverlay,
  Jr as saveImage,
  mt as updateResizeOverlay,
  Et as updateTableResizeOverlay,
  Wr as useContinuousReflow,
  fn as useDocument,
  me as useDocumentActions,
  pn as useDocumentState,
  br as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
