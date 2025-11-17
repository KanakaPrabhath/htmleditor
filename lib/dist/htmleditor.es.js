import Je, { createContext as fr, useContext as hr, useReducer as mr, useMemo as Q, useState as Y, useCallback as N, useRef as U, useEffect as W, forwardRef as Ct, createElement as gt, memo as yr, useLayoutEffect as mn, useImperativeHandle as xr } from "react";
import { v4 as Rt } from "uuid";
import y from "prop-types";
import { createPortal as yn } from "react-dom";
var $e = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Tr() {
  if (Yt) return Re;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Re.Fragment = t, Re.jsx = n, Re.jsxs = n, Re;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function br() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === v ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case f:
          return "Fragment";
        case O:
          return "Profiler";
        case b:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case R:
            return "Portal";
          case w:
            return T.displayName || "Context";
          case L:
            return (T._context.displayName || "Context") + ".Consumer";
          case I:
            var j = T.render;
            return T = T.displayName, T || (T = j.displayName || j.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case C:
            return j = T.displayName || null, j !== null ? j : e(T.type) || "Memo";
          case k:
            j = T._payload, T = T._init;
            try {
              return e(T(j));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function n(T) {
      try {
        t(T);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var G = j.error, Z = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return G.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Z
        ), t(T);
      }
    }
    function r(T) {
      if (T === f) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === k)
        return "<...>";
      try {
        var j = e(T);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var T = M.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(T) {
      if (S.call(T, "key")) {
        var j = Object.getOwnPropertyDescriptor(T, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function a(T, j) {
      function G() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: G,
        configurable: !0
      });
    }
    function u() {
      var T = e(this.type);
      return K[T] || (K[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function d(T, j, G, Z, ie, ne) {
      var V = G.ref;
      return T = {
        $$typeof: p,
        type: T,
        key: j,
        props: G,
        _owner: Z
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function h(T, j, G, Z, ie, ne) {
      var V = j.children;
      if (V !== void 0)
        if (Z)
          if (B(V)) {
            for (Z = 0; Z < V.length; Z++)
              g(V[Z]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(V);
      if (S.call(j, "key")) {
        V = e(T);
        var X = Object.keys(j).filter(function(Be) {
          return Be !== "key";
        });
        Z = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", ae[V + Z] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Z,
          V,
          X,
          V
        ), ae[V + Z] = !0);
      }
      if (V = null, G !== void 0 && (n(G), V = "" + G), s(j) && (n(j.key), V = "" + j.key), "key" in j) {
        G = {};
        for (var oe in j)
          oe !== "key" && (G[oe] = j[oe]);
      } else G = j;
      return V && a(
        G,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), d(
        T,
        V,
        G,
        i(),
        ie,
        ne
      );
    }
    function g(T) {
      x(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === k && (T._payload.status === "fulfilled" ? x(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function x(T) {
      return typeof T == "object" && T !== null && T.$$typeof === p;
    }
    var l = Je, p = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), w = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), M = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, S = Object.prototype.hasOwnProperty, B = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var z, K = {}, J = l.react_stack_bottom_frame.bind(
      l,
      o
    )(), se = F(r(o)), ae = {};
    ke.Fragment = f, ke.jsx = function(T, j, G) {
      var Z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return h(
        T,
        j,
        G,
        !1,
        Z ? Error("react-stack-top-frame") : J,
        Z ? F(r(T)) : se
      );
    }, ke.jsxs = function(T, j, G) {
      var Z = 1e4 > M.recentlyCreatedOwnerStacks++;
      return h(
        T,
        j,
        G,
        !0,
        Z ? Error("react-stack-top-frame") : J,
        Z ? F(r(T)) : se
      );
    };
  })()), ke;
}
var Xt;
function Er() {
  return Xt || (Xt = 1, process.env.NODE_ENV === "production" ? $e.exports = Tr() : $e.exports = br()), $e.exports;
}
var c = Er();
const pt = 100, ft = 50, ht = 200, Jt = 5, mt = (e) => e < ht, yt = (e) => e > ft, wr = 96, ue = (e) => Math.round(e * wr), Ve = {
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
}, ge = "NORMAL", xn = (e = ge) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ue(e.top),
      bottom: ue(e.bottom),
      left: ue(e.left),
      right: ue(e.right)
    };
  const t = Ve[e] || Ve[ge];
  return {
    top: ue(t.top),
    bottom: ue(t.bottom),
    left: ue(t.left),
    right: ue(t.right)
  };
}, vr = (e = ge) => {
  const t = xn(e);
  return t.top + t.bottom;
}, Ar = () => Object.keys(Ve), Cr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ve[e];
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
}, Tn = "A4", Me = (e) => {
  const t = Ye[e] || Ye[Tn];
  return {
    width: t.width,
    height: t.height
  };
}, qi = (e) => Object.keys(Ye).includes(e), Zi = () => Object.keys(Ye), Pe = Tn, me = "<p><br></p>", Rr = "continuous", Oe = (e, t = Pe) => ({
  id: Rt(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ge = (e) => typeof e != "string" || e.trim() === "" ? me : e, bn = (e, t = Pe) => (e.length > 0 ? e : [Oe(0, t)]).map((r, i) => ({
  id: r.id || Rt(),
  index: i,
  size: r.size || t,
  content: Ge(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), kr = (e = Pe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Me(e).height
}], Fe = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), xt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Pe, r = bn(e.pages || [Oe(0, n)], n);
  return {
    id: Rt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || Rr,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || kr(n),
    zoomLevel: e.zoomLevel || pt,
    pageMargins: e.pageMargins || ge,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, H = {
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
}, Tt = (e, t) => {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case H.INITIALIZE_DOCUMENT: {
      const { initialContent: r = me, pageSize: i = Pe } = t.payload || {}, o = { ...Oe(0, i), content: Ge(r) };
      return xt({
        title: e.title,
        pageSize: i,
        pages: [o]
      });
    }
    case H.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case H.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[r] = {
        ...o[r],
        content: Ge(i)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case H.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = bn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : Fe(i);
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: o,
        totalPages: i.length,
        updatedAt: n
      };
    }
    case H.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, Oe(r, e.pageSize));
      const o = i.map((a, u) => ({
        ...a,
        index: u,
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
    case H.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const o = i.map((u, d) => ({
        ...u,
        index: d,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const a = Fe(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: a,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case H.SET_ACTIVE_PAGE: {
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
    case H.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Me(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((s, a) => ({
        ...s,
        index: a,
        size: r
      })), o = Fe(i);
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case H.RESET_DOCUMENT:
      return xt();
    case H.UPDATE_CONTINUOUS_CONTENT: {
      const r = Ge(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case H.UPDATE_PAGE_BOUNDARIES: {
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
    case H.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (r === "end")
        s = s + o + "<p><br></p>";
      else if (typeof r == "number") {
        const a = s.substring(0, r), u = s.substring(r);
        s = a + o + u;
      } else if (typeof i == "number" && typeof document < "u") {
        const a = document.createElement("div");
        a.innerHTML = s;
        const u = a.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (i < u.length) {
          const d = u[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", d.parentNode.insertBefore(h, d.nextSibling), h.parentNode.insertBefore(g, h.nextSibling), s = a.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: n
      };
    }
    case H.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const o = i.querySelectorAll('page-break, [data-page-break="true"]');
      return o[r] && o[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((a, u) => {
        a.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: n
      };
    }
    case H.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, o = e.pages;
      return r === "continuous" ? i = e.pages.map((a) => a.content).filter((a) => a && a !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (o = [{ ...Oe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: o,
        updatedAt: n
      };
    }
    case H.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < ft || r > ht ? (console.warn(`Invalid zoom level: ${r}. Must be between ${ft} and ${ht}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.ZOOM_IN: {
      if (!mt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Jt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.ZOOM_OUT: {
      if (!yt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Jt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.RESET_ZOOM:
      return e.zoomLevel === pt ? e : {
        ...e,
        zoomLevel: pt,
        updatedAt: n
      };
    case H.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case H.RECORD_OPERATION: {
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
    case H.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let o = e;
      return r.inverseOperation && (o = Tt(e, r.inverseOperation)), {
        ...o,
        undoStack: i,
        redoStack: [...e.redoStack, r],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case H.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let o = e;
      return r.operation && (o = Tt(e, r.operation)), {
        ...o,
        undoStack: [...e.undoStack, r],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: n
      };
    }
    case H.CLEAR_UNDO_REDO:
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
}, En = fr(null), Vi = ({ children: e, initialState: t = {} }) => {
  const [n, r] = mr(Tt, xt(t)), i = Q(() => ({
    initializeDocument: (s) => r({ type: H.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => r({ type: H.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => r({ type: H.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => r({ type: H.UPDATE_PAGES, payload: s }),
    addPage: (s) => r({ type: H.ADD_PAGE, payload: s }),
    deletePage: (s) => r({ type: H.DELETE_PAGE, payload: s }),
    setActivePage: (s) => r({ type: H.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => r({ type: H.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => r({ type: H.RESET_DOCUMENT }),
    updateContinuousContent: (s) => r({ type: H.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => r({ type: H.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => r({ type: H.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => r({ type: H.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => r({ type: H.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => r({ type: H.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => r({ type: H.ZOOM_IN }),
    zoomOut: () => r({ type: H.ZOOM_OUT }),
    resetZoom: () => r({ type: H.RESET_ZOOM }),
    updatePageMargins: (s) => r({ type: H.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, a) => r({
      type: H.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: a }
    }),
    undo: () => r({ type: H.UNDO }),
    redo: () => r({ type: H.REDO }),
    clearUndoRedo: () => r({ type: H.CLEAR_UNDO_REDO })
  }), []), o = Q(() => ({
    state: n,
    actions: i,
    dispatch: r
  }), [n, i]);
  return /* @__PURE__ */ c.jsx(En.Provider, { value: o, children: e });
}, wn = () => {
  const e = hr(En);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, vn = () => {
  const { state: e } = wn();
  return e;
}, Te = () => {
  const { actions: e } = wn();
  return e;
}, An = {
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
}, Lr = [
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
], Qe = "16px", Nr = (e) => Math.round(e * 96 / 72), Or = (e) => Math.round(e * 72 / 96 * 2) / 2, Yi = (e) => {
  const t = Object.values(An).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Nr(e)}px`;
}, Ki = (e) => {
  const t = parseInt(e), n = Object.values(An).find((r) => r.px === t);
  return n ? n.pt : Or(t);
}, Xi = (e) => {
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
}, Sr = {
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
}, Qt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Qe,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, _r = () => {
  const [e, t] = Y(Qt), n = Te(), r = N((l, p, R = null) => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return !1;
      const b = f.getRangeAt(0);
      if (!b.toString())
        return t((L) => ({ ...L, [l]: p })), !1;
      try {
        const L = document.createElement("span");
        L.style[l] = p;
        const w = b.extractContents();
        return L.appendChild(w), b.insertNode(L), b.selectNodeContents(L), f.removeAllRanges(), f.addRange(b), t((I) => ({ ...I, [l]: p })), !0;
      } catch {
        if (R) {
          const L = l === "fontSize" ? Sr[p] || "3" : p;
          return document.execCommand(R, !1, L), t((w) => ({ ...w, [l]: p })), !0;
        }
        return !1;
      }
    } catch (f) {
      return console.warn(`[useFormatting] Style application failed for ${l}:`, f), !1;
    }
  }, []), i = N((l) => r("fontFamily", l, "fontName"), [r]), o = N((l) => r("fontSize", l, "fontSize"), [r]), s = N((l) => r("color", l, "foreColor"), [r]), a = N((l) => {
    t((p) => ({
      ...p,
      alignLeft: l === "left",
      alignCenter: l === "center",
      alignRight: l === "right",
      alignJustify: l === "justify"
    }));
  }, []), u = N((l) => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return !1;
      const R = p.getRangeAt(0), f = R.toString(), O = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[l];
      if (!O)
        return !1;
      if (!f) {
        const w = R.startContainer, I = w.nodeType === Node.TEXT_NODE ? w.parentElement : w, E = Se(I) || Ir();
        return E && (E.style.textAlign = O, a(O)), !0;
      }
      const L = Pr(R);
      if (L.length === 0) {
        const w = document.createElement("p");
        w.style.textAlign = O;
        const I = R.extractContents();
        w.appendChild(I), R.insertNode(w), R.selectNodeContents(w), p.removeAllRanges(), p.addRange(R);
      } else
        L.forEach((w) => {
          w.style.textAlign = O;
        });
      return a(O), !0;
    } catch (p) {
      return console.warn("[useFormatting] Text alignment failed:", p), !1;
    }
  }, [a]), d = N((l) => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return !1;
      const R = p.getRangeAt(0), f = document.createElement("div");
      if (f.innerHTML = l, Array.from(f.children).some(
        (O) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(O.tagName)
      )) {
        const O = R.startContainer, L = O.nodeType === Node.TEXT_NODE ? O.parentElement : O, w = Se(L);
        if (w && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(w.tagName)) {
          const I = w.tagName.toLowerCase();
          if (R.startOffset === 0 && (O === w || O.nodeType === Node.TEXT_NODE && O === w.firstChild))
            w.parentNode.insertBefore(f, w);
          else if (R.startOffset === O.textContent?.length && O === w.lastChild && R.endOffset === O.textContent?.length) {
            const C = w.nextSibling;
            C ? w.parentNode.insertBefore(f, C) : w.parentNode.appendChild(f);
          } else {
            const C = R.extractContents(), k = document.createTextNode(""), _ = document.createElement(I);
            _.appendChild(k), _.appendChild(C);
            const v = w.parentNode;
            v.insertBefore(f, w.nextSibling), v.insertBefore(_, f.nextSibling), !w.textContent.trim() && w.children.length === 0 && v.removeChild(w);
          }
        } else
          R.insertNode(f);
        R.setStartAfter(f), R.setEndAfter(f), p.removeAllRanges(), p.addRange(R);
      } else
        document.execCommand("insertHTML", !1, l);
      return !0;
    } catch (p) {
      console.warn("[useFormatting] InsertHTML failed:", p);
      try {
        return document.execCommand("insertHTML", !1, l), !0;
      } catch (R) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", R), !1;
      }
    }
  }, []), h = N((l, p = null) => {
    try {
      if (l === "undo") {
        n.undo();
        return;
      }
      if (l === "redo") {
        n.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (l === "insertHTML" && p) {
        d(p);
        return;
      }
      if (l === "fontSize") {
        o(p);
        return;
      }
      if (l === "fontName") {
        i(p);
        return;
      }
      if (l === "foreColor") {
        s(p);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(l)) {
        u(l);
        return;
      }
      switch (document.execCommand(l, !1, p) || console.warn(`[useFormatting] Command "${l}" failed`), l) {
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
          t((f) => ({ ...f, headingLevel: p }));
          break;
        default:
          break;
      }
    } catch (R) {
      console.warn(`[useFormatting] Error executing command "${l}":`, R);
    }
  }, [o, i, u, d, n]), g = N(() => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return;
      const p = l.getRangeAt(0), R = p.toString();
      let f = Qe, b = "Arial", O = "#000000", L = "p", w = "left";
      if (R) {
        const E = p.startContainer, m = E.nodeType === Node.TEXT_NODE ? E.parentElement : E;
        if (m) {
          const C = window.getComputedStyle(m), k = C.fontSize, _ = C.fontFamily;
          k && k.endsWith("px") && (f = k), _ && _ !== "serif" && (b = _.split(",")[0].replace(/['"]/g, "").trim());
          const v = C.color;
          v && v !== "rgb(0, 0, 0)" && v !== "#000000" && (v.startsWith("rgb") ? O = Mr(v) : O = v);
          const M = Se(m);
          if (M) {
            const S = M.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(S) && (L = S);
            const F = window.getComputedStyle(M).textAlign;
            ["left", "center", "right", "justify"].includes(F) && (w = F);
          }
        }
      }
      const I = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: w === "left",
        alignCenter: w === "center",
        alignRight: w === "right",
        alignJustify: w === "justify",
        fontFamily: b,
        fontSize: f,
        fontColor: O,
        headingLevel: L
      };
      t((E) => ({
        ...E,
        ...I
      }));
    } catch (l) {
      console.warn("[useFormatting] Error updating format from selection:", l);
    }
  }, []), x = N(() => {
    t(Qt);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: x,
    updateCurrentFormatFromSelection: g
  };
};
function Mr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), i = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + i).toString(16).slice(1)}`;
}
function Se(e) {
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
function Pr(e) {
  const t = [], n = e.startContainer, r = e.endContainer, i = Se(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = Se(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (i === o && i)
    return [i];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (u) => {
        const d = u.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(d) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let a = s.nextNode();
  for (; a; )
    e.intersectsNode(a) && t.push(a), a = s.nextNode();
  return t;
}
function Ir() {
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
const pe = 'page-break, [data-page-break="true"]', jr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Me(n), i = e.querySelectorAll(pe), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), a = e.scrollTop;
  return i.forEach((u, d) => {
    const g = u.getBoundingClientRect().top - s.top + a;
    o.push({
      id: `page-${d + 1}`,
      pageNumber: d + 2,
      top: g,
      height: r.height
    });
  }), o;
}, Cn = (e, t = 100, n = ge) => {
  const r = Me(e), i = vr(n), o = r.height - i, s = t / 100;
  return o / s;
}, Br = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(pe);
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
}, en = (e) => {
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
}, Hr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), a = window.getComputedStyle(e).textAlign;
      if (a === "center" || a === "-webkit-center")
        return o.height + 16;
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
}, zr = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  try {
    const u = Cn(n, r, i) * (t - 1), d = Array.from(e.children);
    let h = 0, g = null;
    for (let x = 0; x < d.length; x++) {
      const l = d[x];
      if (l.tagName === "PAGE-BREAK" || l.getAttribute("data-page-break") === "true")
        continue;
      const p = Hr(l);
      if (h + p > u) {
        g = l;
        break;
      }
      h += p;
    }
    if (g) {
      const x = document.createElement("page-break");
      if (x.setAttribute("data-page-break", "true"), x.setAttribute("contenteditable", "false"), x.setAttribute("data-page-number", String(t)), g.parentNode.insertBefore(x, g), o) {
        const l = e.innerHTML;
        o(l);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const x = document.createElement("page-break");
      x.setAttribute("data-page-break", "true"), x.setAttribute("contenteditable", "false"), x.setAttribute("data-page-number", String(t)), e.appendChild(x);
      const l = document.createElement("p");
      if (l.innerHTML = "<br>", e.appendChild(l), o) {
        const p = e.innerHTML;
        o(p);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (a) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", a), !1;
  }
}, $r = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(pe));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const d = window.getSelection();
    let h = !1, g = [], x = null;
    if (t === 0) {
      const p = u[0];
      if (!p)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let R = e.firstChild;
      for (; R && R !== p; )
        g.push(R), R = R.nextSibling;
      x = p;
    } else {
      const p = u[t - 1];
      if (!p)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const R = u[t];
      let f = p.nextSibling;
      for (; f && f !== R; )
        g.push(f), f = f.nextSibling;
      x = p;
    }
    if (d && d.rangeCount > 0) {
      const R = d.getRangeAt(0).startContainer;
      for (const f of g)
        if (f.contains(R) || f === R) {
          h = !0;
          break;
        }
    }
    if (x && x.parentNode && x.remove(), g.forEach((p) => {
      p.parentNode && p.remove();
    }), e.querySelectorAll(pe).forEach((p, R) => {
      p.setAttribute("data-page-number", String(R + 2));
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
}, Fr = (e) => {
  if (e)
    try {
      e.querySelectorAll(pe).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Ur = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Fr(t), n) {
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
}, Wr = 200, Gr = 50, tn = 3, qr = 20, Rn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), a = window.getComputedStyle(e).textAlign;
      if (a === "center" || a === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Zr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Rn(o);
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
}, Vr = (e, t, n, r, i, o, s, a) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = Cn(t, n, r);
    let d = en(e), h = !1, g = 0;
    for (let x = 0; x < d.length && g < tn; x++) {
      const l = d[x], p = Zr(l, u);
      if (p && p.overflowIndex > 0) {
        let R = 0;
        for (let L = 0; L < l.length; L++) {
          const w = l[L];
          w && w.getBoundingClientRect && (R += Rn(w));
        }
        if (R - u < qr)
          continue;
        const b = x + 2;
        Dr(p.overflowElement, b) && (h = !0, g++, d = en(e));
      }
    }
    if (h) {
      if (i) {
        const x = e.innerHTML;
        i(x);
      }
      setTimeout(() => {
        o && o(), g >= tn && a && setTimeout(() => {
          s.current || a();
        }, 100);
      }, Gr);
    }
    return h;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, Yr = (e, t, n = Wr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Kr = 400, kn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const o = e.querySelectorAll(pe)[t - 1];
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
}, Xr = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (n === 0)
      i = t;
    else {
      const s = t.querySelectorAll(pe)[n - 1];
      if (s)
        i = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (i) {
      const o = i.getBoundingClientRect(), s = e.getBoundingClientRect(), a = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: a,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : kn(t, n);
      }, Kr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Jr = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Qr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const i = e.querySelectorAll(pe);
  for (const h of i)
    if (n.comparePoint(h, 0) > 0)
      r++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset);
  const a = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = a.length, d = (a.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: d,
    charOffset: u
  };
}, eo = 300, to = (e, t, n = 100, r = "NARROW") => {
  const i = Te(), o = U(null), s = U(null), a = U(e), u = U(n), d = U(r), h = U(!1);
  W(() => {
    a.current = e;
  }, [e]), W(() => {
    u.current = n;
  }, [n]), W(() => {
    d.current = r;
  }, [r]), W(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const g = N((E = {}) => t?.current ? jr(t.current, E) : [], [t]), x = N((E = {}) => {
    const m = g(E);
    return i.updatePageBoundaries(m), m;
  }, [g, i]), l = N((E = {}) => {
    const m = typeof E.delay == "number" ? E.delay : eo;
    Jr(x, o, E, m);
  }, [x]), p = N(() => {
    t?.current && Vr(
      t.current,
      a.current,
      u.current,
      d.current,
      i.updateContinuousContent,
      x,
      h,
      p
    );
  }, [t, i, x]), R = N((E) => {
    Yr(p, s, E);
  }, [p]), f = N((E) => !E?.current || !t?.current ? 0 : Br(E.current, t.current), [t]), b = N((E) => {
    t?.current && kn(t.current, E);
  }, [t]), O = N((E, m) => {
    if (!m?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Xr(m.current, t.current, E, b);
  }, [t, b]), L = N(async (E) => t?.current ? zr(
    t.current,
    E,
    a.current,
    u.current,
    d.current,
    i.updateContinuousContent,
    x
  ) : !1, [t, i, x]), w = N((E) => t?.current ? $r(
    t.current,
    E,
    g,
    i.updateContinuousContent,
    x,
    b,
    p
  ) : !1, [t, g, i, x, b, p]), I = N((E) => t?.current ? Ur(
    E,
    t.current,
    i.updateContinuousContent,
    x,
    p
  ) : !1, [t, i, x, p]);
  return W(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), Q(() => ({
    calculatePageBoundaries: g,
    checkAndUpdateBoundaries: l,
    updateBoundaries: x,
    getCurrentPage: f,
    scrollToPage: O,
    positionCursorAtPage: b,
    checkAndReflow: p,
    triggerAutoReflow: R,
    removePageAndContent: w,
    removePageBreak: I,
    insertPageBreakAtBoundary: L,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    g,
    l,
    x,
    f,
    O,
    b,
    p,
    R,
    w,
    I,
    L
  ]);
}, no = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: i, handleUndo: o, handleRedo: s } = e, { editorRef: a, containerRef: u } = t;
  W(() => {
    const d = (h) => {
      if (h.ctrlKey || h.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(h.key) && h.preventDefault();
        const g = document.activeElement === a.current, x = document.activeElement === u.current, l = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (g || x || !l)
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
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [n, r, i, o, s, a, u]);
}, ro = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = U(null), r = N(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (n.current)
      try {
        o.removeAllRanges(), o.addRange(n.current);
        return;
      } catch (a) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", a);
      }
    const s = t.current.lastChild;
    if (s) {
      const a = document.createRange();
      s.nodeType === Node.TEXT_NODE ? a.setStart(s, s.textContent.length) : a.setStartAfter(s), a.collapse(!0), o.removeAllRanges(), o.addRange(a);
    }
  }, [t]), i = N(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return W(() => {
    const o = () => {
      if (e(), t.current) {
        const a = window.getSelection();
        if (a.rangeCount > 0) {
          const u = a.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (n.current = u.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), n.current && t.current)
        try {
          const a = window.getSelection();
          a.removeAllRanges(), a.addRange(n.current);
        } catch (a) {
          console.warn("[handleFocus] Failed to restore cursor:", a);
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
}, P = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ji({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = Ae
}) {
  const u = r - t, d = i - n;
  let h = o, g = s;
  switch (e) {
    case P.TOP_LEFT:
      h = Math.max(a.minWidth, o - u), g = Math.max(a.minHeight, s - d);
      break;
    case P.TOP_RIGHT:
      h = Math.max(a.minWidth, o + u), g = Math.max(a.minHeight, s - d);
      break;
    case P.BOTTOM_LEFT:
      h = Math.max(a.minWidth, o - u), g = Math.max(a.minHeight, s + d);
      break;
    case P.BOTTOM_RIGHT:
      h = Math.max(a.minWidth, o + u), g = Math.max(a.minHeight, s + d);
      break;
    case P.TOP:
      g = Math.max(a.minHeight, s - d);
      break;
    case P.BOTTOM:
      g = Math.max(a.minHeight, s + d);
      break;
    case P.LEFT:
      h = Math.max(a.minWidth, o - u);
      break;
    case P.RIGHT:
      h = Math.max(a.minWidth, o + u);
      break;
    default:
      return { width: h, height: g };
  }
  if (a.preserveAspectRatio && a.aspectRatio) {
    const x = o / s;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? h / x > g ? g = Math.max(a.minHeight, h / x) : h = Math.max(a.minWidth, g * x) : [P.TOP, P.BOTTOM].includes(e) ? h = g * x : [P.LEFT, P.RIGHT].includes(e) && (g = h / x);
  }
  return a.maxWidth && h > a.maxWidth && (h = a.maxWidth, a.preserveAspectRatio && a.aspectRatio && (g = h / (o / s))), a.maxHeight && g > a.maxHeight && (g = a.maxHeight, a.preserveAspectRatio && a.aspectRatio && (h = g * (o / s))), h = Math.max(a.minWidth, h), g = Math.max(a.minHeight, g), {
    width: Math.round(h),
    height: Math.round(g)
  };
}
function ye(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Qi(e) {
  return ye(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ea(e, { width: t, height: n }) {
  ye(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function oo(e, t = Ae) {
  if (!ye(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(P).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = so(o), s.style.pointerEvents = "all", Ln(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function so(e) {
  switch (e) {
    case P.TOP_LEFT:
    case P.BOTTOM_RIGHT:
      return "nwse-resize";
    case P.TOP_RIGHT:
    case P.BOTTOM_LEFT:
      return "nesw-resize";
    case P.TOP:
    case P.BOTTOM:
      return "ns-resize";
    case P.LEFT:
    case P.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ln(e, t, n, r) {
  switch (t) {
    case P.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case P.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case P.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case P.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case P.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case P.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case P.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case P.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function bt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const o = i.dataset.handler;
    Ln(i, o, n.width, n.height);
  });
}
function ct(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const io = "html-editor-storage", ao = 2, re = "images", de = /* @__PURE__ */ new Map();
function co() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Ie() {
  return new Promise((e, t) => {
    const n = indexedDB.open(io, ao);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const i = r.target.result;
      i.objectStoreNames.contains(re) || i.createObjectStore(re, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
async function Nn(e) {
  if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type))
    throw new Error("Invalid image format. Supported formats: png, jpeg, gif, webp");
  if (e.size > 2 * 1024 * 1024)
    throw new Error("Image exceeds maximum size of 2MB. Image should be optimized before storage.");
  try {
    const n = await Ie(), r = `editor-image-${co()}`, o = n.transaction([re], "readwrite").objectStore(re), s = {
      key: r,
      blob: e,
      // Store the file directly as a Blob
      size: e.size,
      type: e.type,
      name: e.name,
      timestamp: Date.now()
    };
    return new Promise((a, u) => {
      const d = o.add(s);
      d.onsuccess = () => {
        n.close(), a(r);
      }, d.onerror = () => {
        n.close(), u(new Error("Failed to save image to IndexedDB"));
      };
    });
  } catch (n) {
    throw new Error(`Failed to save image: ${n.message}`);
  }
}
async function kt(e) {
  if (de.has(e))
    return de.get(e);
  try {
    const t = await Ie();
    return new Promise((n, r) => {
      const s = t.transaction([re], "readonly").objectStore(re).get(e);
      s.onsuccess = () => {
        t.close();
        const a = s.result;
        if (a && a.blob) {
          const u = URL.createObjectURL(a.blob);
          de.set(e, u), n(u);
        } else
          n(null);
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function lo(e) {
  try {
    de.has(e) && (URL.revokeObjectURL(de.get(e)), de.delete(e));
    const t = await Ie();
    return new Promise((n, r) => {
      const s = t.transaction([re], "readwrite").objectStore(re).delete(e);
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
async function ta() {
  try {
    de.forEach((t) => URL.revokeObjectURL(t)), de.clear();
    const e = await Ie();
    return new Promise((t, n) => {
      const o = e.transaction([re], "readwrite").objectStore(re).clear();
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
async function na() {
  try {
    const e = await Ie();
    return new Promise((t, n) => {
      const o = e.transaction([re], "readonly").objectStore(re).getAllKeys();
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
async function On(e) {
  try {
    const n = await (await fetch(e)).blob();
    return new Promise((r, i) => {
      const o = new FileReader();
      o.onloadend = () => r(o.result), o.onerror = i, o.readAsDataURL(n);
    });
  } catch (t) {
    throw console.error("Error converting blob URL to base64:", t), t;
  }
}
async function uo(e) {
  try {
    return await (await fetch(e)).blob();
  } catch (t) {
    throw console.error("Error converting base64 to blob:", t), t;
  }
}
async function nn(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="blob:"]'), r = Array.from(n).map(async (i) => {
    try {
      const o = i.getAttribute("src"), s = await On(o);
      i.setAttribute("src", s), i.removeAttribute("data-key");
    } catch (o) {
      console.error("Failed to convert image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function rn(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="data:image/"]'), r = Array.from(n).map(async (i) => {
    try {
      const o = i.getAttribute("src"), s = await uo(o), a = s.type || "image/png", u = a.split("/")[1] || "png", d = `imported-image-${Date.now()}.${u}`, h = new File([s], d, { type: a }), g = await Nn(h), x = await kt(g);
      x && (i.setAttribute("src", x), i.setAttribute("data-key", g));
    } catch (o) {
      console.error("Failed to convert and store image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function ra(e) {
  try {
    const t = await kt(e);
    return t ? await On(t) : null;
  } catch (t) {
    return console.error("Error getting image as base64:", t), null;
  }
}
const Sn = [
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
], go = [
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
], po = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function fo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function _n(e) {
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
  return n.innerHTML = t, _e(n) || "<p><br></p>";
}
function ho(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function mo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => Sn.includes(n.tagName));
}
function yo(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      Sn.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function _e(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${fo(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i, s = o.tagName, a = s.toLowerCase(), u = _n(o);
      if (s === "DIV") {
        const d = _e(o);
        d.trim() ? t.push(d) : t.push("<p><br></p>");
      } else if (s === "P")
        mo(o) ? t.push(yo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const d = ho(o);
        t.push(`<${a}${u}>${d}</${a}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(xo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(To(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const d = _e(o);
        t.push(`<blockquote${u}>${d}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (go.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (po.includes(s))
        t.push(o.outerHTML);
      else {
        const d = _e(o);
        t.push(`<${a}${u}>${d}</${a}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function xo(e) {
  const t = e.tagName.toLowerCase(), n = _n(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const o = _e(i);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function To(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Eo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), on = (e) => {
  const t = Eo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Mn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), wo = (e) => {
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
var vo = {
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
const Ao = Ct(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, u) => gt(
    "svg",
    {
      ref: u,
      ...vo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Mn("lucide", i),
      ...!o && !wo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([d, h]) => gt(d, h)),
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
const q = (e, t) => {
  const n = Ct(
    ({ className: r, ...i }, o) => gt(Ao, {
      ref: o,
      iconNode: t,
      className: Mn(
        `lucide-${bo(on(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
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
const Co = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Ro = q("arrow-down", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Lo = q("arrow-left", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Oo = q("arrow-right", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], _o = q("arrow-up", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Po = q("chevron-left", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], jo = q("chevron-right", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Ho = q("download", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], zo = q("file-check", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Et = q("file-text", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Uo = q("hash", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Go = q("heading-1", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Zo = q("heading-2", qo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Yo = q("heading-3", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Xo = q("image-upscale", Ko);
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
], Qo = q("list", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
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
], ts = q("palette", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], rs = q("plus", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], ss = q("scaling", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], as = q("settings", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Pn = q("text-align-center", cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], In = q("text-align-end", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], jn = q("text-align-start", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], wt = q("trash-2", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ps = q("x", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], hs = q("zoom-in", fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ys = q("zoom-out", ms), sn = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((o, s) => {
    const a = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${n}heading-${s}`,
      level: a,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, xs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, Ts = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = vn(), { pages: o, activePage: s, continuousContent: a } = i, { wordCount: u, outline: d } = Q(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: sn(a, 1, "continuous-")
      };
    let g = 0;
    const x = [];
    return o.forEach((l, p) => {
      g += xs(l.content), x.push(...sn(l.content, p + 1, `page-${p}-`));
    }), { wordCount: g, outline: x };
  }, [o, n, r, a]), h = r !== void 0 ? r : o.length;
  return /* @__PURE__ */ c.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ c.jsx(Et, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ c.jsx(jo, { size: 16 }) : /* @__PURE__ */ c.jsx(Po, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(zo, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: h })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Uo, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Et, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(Qo, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((g) => {
              const x = g.level === 1 ? Go : g.level === 2 ? Zo : Yo;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${g.level}`,
                  style: { marginLeft: `${(g.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(x, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ c.jsx("span", { className: "outline-text", children: g.text }),
                    /* @__PURE__ */ c.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      g.page
                    ] })
                  ]
                },
                g.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
}, bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), Es = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ c.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ c.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), ws = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ c.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), vs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ c.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ c.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), As = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), Cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), Rs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), ks = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), Ls = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), Ns = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 18v0" })
] }), Os = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ c.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), Ss = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ c.jsx("path", { d: "M15 6v12" })
] }), _s = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ c.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), Ms = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ c.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), Ps = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), Is = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ c.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ c.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), js = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Hs = {
  maxWidth: 1200,
  maxHeight: 1200,
  maxSizeBytes: 2 * 1024 * 1024,
  // 2MB
  initialQuality: 0.9,
  minQuality: 0.6,
  qualityStep: 0.05
};
async function Ds(e, t = {}) {
  const n = { ...Hs, ...t };
  return new Promise((r, i) => {
    const o = new Image(), s = new FileReader();
    s.onload = (a) => {
      o.src = a.target.result;
    }, s.onerror = () => {
      i(new Error("Failed to read image file"));
    }, o.onload = async () => {
      try {
        let { width: a, height: u } = o;
        const d = a, h = u, g = a / u;
        let x = !1;
        (a > n.maxWidth || u > n.maxHeight) && (x = !0, a > u ? (a = Math.min(a, n.maxWidth), u = a / g) : (u = Math.min(u, n.maxHeight), a = u * g), a = Math.round(a), u = Math.round(u));
        const l = document.createElement("canvas");
        l.width = a, l.height = u;
        const p = l.getContext("2d");
        p.imageSmoothingEnabled = !0, p.imageSmoothingQuality = "high", p.drawImage(o, 0, 0, a, u);
        const R = e.type === "image/png" && zs(p, a, u) ? "image/png" : "image/jpeg", f = await Bn(
          l,
          R,
          n.maxSizeBytes,
          n.initialQuality,
          n.minQuality,
          n.qualityStep
        ), b = R === "image/png" ? ".png" : ".jpg", O = e.name.replace(/\.[^/.]+$/, "") + b, L = new File([f], O, { type: R }), w = L.size < e.size;
        r({
          file: L,
          width: a,
          height: u,
          originalSize: e.size,
          optimizedSize: L.size,
          wasOptimized: x || w,
          wasResized: x,
          wasCompressed: w,
          originalWidth: d,
          originalHeight: h
        });
      } catch (a) {
        i(new Error(`Image optimization failed: ${a.message}`));
      }
    }, o.onerror = () => {
      i(new Error("Failed to load image"));
    }, s.readAsDataURL(e);
  });
}
function zs(e, t, n) {
  try {
    const i = Math.max(1, Math.floor(t / 10)), o = Math.max(1, Math.floor(n / 10));
    for (let s = 0; s < n; s += o)
      for (let a = 0; a < t; a += i)
        if (e.getImageData(a, s, 1, 1).data[3] < 255)
          return !0;
    return !1;
  } catch {
    return !1;
  }
}
async function Bn(e, t, n, r, i, o) {
  let s = r, a = null;
  if (t === "image/png")
    return a = await an(e, t, s), a.size > n ? Bn(e, "image/jpeg", n, r, i, o) : a;
  for (; s >= i; ) {
    if (a = await an(e, t, s), a.size <= n)
      return a;
    s -= o;
  }
  return a;
}
function an(e, t, n) {
  return new Promise((r, i) => {
    e.toBlob(
      (o) => {
        if (!o) {
          i(new Error("Failed to create blob from canvas"));
          return;
        }
        r(o);
      },
      t,
      n
    );
  });
}
function cn(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB"], r = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, r) * 100) / 100 + " " + n[r];
}
function $s(e) {
  if (!e.wasOptimized)
    return "Image inserted";
  const t = [];
  return e.wasResized && t.push(`resized from ${e.originalWidth}×${e.originalHeight} to ${e.width}×${e.height}`), e.wasCompressed && t.push(`compressed from ${cn(e.originalSize)} to ${cn(e.optimizedSize)}`), `Image optimized: ${t.join(", ")}`;
}
class Fs {
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
const Le = new Fs("Editor"), Hn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Dn = 32;
function zn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Dn}px`, e.dataset.indentLevel = String(r));
}
function Us(e, t) {
  zn(e, t);
}
function Ws(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Hn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Gs() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && n.add(s);
  }), n.size === 0 && r.querySelectorAll("img").forEach((a) => {
    if (document.createRange().selectNode(a), t.intersectsNode(a)) {
      let d = a.parentElement;
      for (; d && d !== r; ) {
        if (d.tagName && Hn.has(d.tagName.toUpperCase())) {
          n.add(d);
          break;
        }
        d = d.parentElement;
      }
    }
  }), Array.from(n).filter((s) => {
    let a = s.parentElement;
    for (; a; ) {
      if (n.has(a))
        return !1;
      a = a.parentElement;
    }
    return !0;
  })) : [];
}
function qs(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Dn}px`, e.dataset.indentLevel = String(n));
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
function vt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = Gs();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = Ws(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const i = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Us(s, e);
      return;
    }
    e ? qs(s) : zn(s, !1);
  });
  try {
    const s = document.createRange(), a = (g) => g.nodeType === Node.TEXT_NODE ? g : document.createTreeWalker(
      g,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (g) => {
      if (g.nodeType === Node.TEXT_NODE)
        return g;
      const x = document.createTreeWalker(
        g,
        NodeFilter.SHOW_TEXT,
        null
      );
      let l = null, p = x.nextNode();
      for (; p; )
        l = p, p = x.nextNode();
      return l;
    }, d = a(i);
    d ? s.setStart(d, 0) : s.setStart(i, 0);
    const h = u(o);
    h ? s.setEnd(h, h.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const a = document.createRange();
      a.setStartBefore(i), a.setEndAfter(o), t.removeAllRanges(), t.addRange(a);
    } catch (a) {
      console.warn("Could not restore selection after indentation:", a);
    }
  }
  return !0;
}
function Zs(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && vt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const $n = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
  const [r, i] = Y(!1), o = U(null), s = [
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
  W(() => {
    const d = (h) => {
      o.current && !o.current.contains(h.target) && i(!1);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []);
  const a = (d) => {
    t(d), i(!1);
  }, u = (d) => {
    const h = d.target.value;
    t(h);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(ts, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ c.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ c.jsx("div", { className: "color-grid", children: s.map((d) => /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => a(d),
          className: `color-option ${e === d ? "selected" : ""}`,
          style: {
            backgroundColor: d,
            border: e === d ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: d
        },
        d
      )) }),
      /* @__PURE__ */ c.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ c.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ c.jsx(
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
$n.propTypes = {
  currentColor: y.string,
  onColorSelect: y.func.isRequired,
  title: y.string
};
const Vs = [
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
], Ys = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Ks = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Lt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: i = !1,
  canRedo: o = !1
}) => {
  const s = (l, p, R, f = null, b = !1) => /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: l,
      className: f && e[f] ? "active" : "",
      disabled: b,
      title: R,
      style: { opacity: b ? 0.5 : 1 },
      children: /* @__PURE__ */ c.jsx(p, { size: 16 })
    },
    R
  ), a = () => /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }), u = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      l.size > 1 * 1024 * 1024 && Le.info("Optimizing large image...");
      const f = await Ds(l), b = f.file;
      if (f.wasOptimized) {
        const w = $s(f);
        Le.info(w), console.log("Image optimization:", {
          original: `${f.originalWidth}×${f.originalHeight} (${(f.originalSize / 1024 / 1024).toFixed(2)}MB)`,
          optimized: `${f.width}×${f.height} (${(f.optimizedSize / 1024 / 1024).toFixed(2)}MB)`
        });
      }
      if (b.size > 2097152) {
        alert("Unable to compress image to under 2MB. Please use a smaller or simpler image."), Le.warn("Image still exceeds 2MB after optimization");
        return;
      }
      const O = await Nn(b), L = await kt(O);
      if (L && r) {
        const w = `<img src="${L}" data-key="${O}" alt="Inserted image" style="max-width: 100%;" />`;
        r(w);
      } else
        Le.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (p) {
      Le.error("Error uploading image", p), alert(`Failed to upload image: ${p.message}`);
    }
  }, d = () => {
    vt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, h = () => {
    vt(!0);
  }, g = () => {
    const l = prompt("Enter URL:");
    l && t("createLink", l);
  }, x = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Ms, "Undo", null, !i),
    s(() => t("redo"), Ps, "Redo", null, !o),
    a(),
    s(() => t("bold"), bs, "Bold", "bold"),
    s(() => t("italic"), Es, "Italic", "italic"),
    s(() => t("underline"), ws, "Underline", "underline"),
    s(() => t("strikethrough"), vs, "Strikethrough", "strikethrough"),
    a(),
    s(() => t("justifyLeft"), As, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Cs, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Rs, "Align Right", "alignRight"),
    s(() => t("justifyFull"), ks, "Justify", "alignJustify"),
    a(),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Vs.map(({ value: l, label: p }) => /* @__PURE__ */ c.jsx("option", { value: l, children: p }, l))
      }
    ),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Qe,
        title: "Font Size",
        children: Lr.map(({ value: l, label: p }) => /* @__PURE__ */ c.jsx("option", { value: l, children: p }, l))
      }
    ),
    /* @__PURE__ */ c.jsx(
      $n,
      {
        currentColor: e.fontColor,
        onColorSelect: (l) => t("foreColor", l),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Ys.map(({ value: l, label: p }) => /* @__PURE__ */ c.jsx("option", { value: l, children: p }, l))
      }
    ),
    a(),
    s(() => t("insertUnorderedList"), Ls, "Bullet List"),
    s(() => t("insertOrderedList"), Ns, "Numbered List"),
    a(),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: d,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ c.jsx(js, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: h,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ c.jsx(Bs, { size: 16 })
      }
    ),
    a(),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: g,
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(Os, { size: 16 })
      }
    ),
    s(() => t("insertHTML", Ks), Ss, "Insert Table"),
    n && s(n, _s, "Insert Page Break"),
    a(),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && u(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: x,
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(Is, { size: 16 })
      }
    )
  ] });
};
Lt.propTypes = {
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
Lt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function Xs(e) {
  return !e || typeof e != "string" ? e : qe(e);
}
function Js(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Xs(n) : n = Qs(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Qs(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => ei(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function ei(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ti = 20, ni = 20, ln = 20, un = -12, ri = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, oi = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: Qe,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, lt = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, si = (e, t, n) => !!((xe(t) || xe(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), ii = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (xe(t) || xe(n))), xe = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && xe(e.parentElement) : !1, Nt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: o,
  onScroll: s,
  onPaste: a,
  onRemovePageBreak: u,
  zoomLevel: d = 100,
  pageMargins: h = ge
}) => {
  const g = Q(() => xn(h), [h]), x = d / 100, l = N((w, I) => {
    if (!w) return !1;
    const E = w.getBoundingClientRect(), m = I - E.top;
    return m < g.top || m > E.height - g.bottom;
  }, [g.top, g.bottom]), p = N((w, I) => {
    I.preventDefault();
    const E = w.getBoundingClientRect(), m = I.clientX - E.left, C = I.clientY - E.top, k = E.width - ln - ti, _ = un, v = E.width - ln, M = un + ni;
    m >= k && m <= v && C >= _ && C <= M && u && u(w);
  }, [u]), R = N((w) => {
    w.preventDefault();
    const I = t.current.getBoundingClientRect();
    if (w.clientY - I.top < g.top) {
      const m = t.current.firstElementChild;
      m && m.tagName !== "PAGE-BREAK" && lt(m, !0);
    } else {
      const m = t.current.lastElementChild;
      m && m.tagName !== "PAGE-BREAK" && lt(m, !1);
    }
  }, [t, g.top]), f = N((w) => {
    const I = window.getSelection();
    if (!I || I.rangeCount === 0) return;
    const E = I.getRangeAt(0), { startContainer: m, endContainer: C } = E;
    if (si(w, m, C))
      return w.preventDefault(), !1;
    if (w.key === "Enter" && !w.shiftKey) {
      let k = m;
      for (k.nodeType === Node.TEXT_NODE && (k = k.parentElement); k && k !== t.current; ) {
        if (/^H[1-6]$/.test(k.tagName)) {
          w.preventDefault();
          const _ = document.createElement("p");
          return _.innerHTML = "<br>", k.nextSibling ? k.parentNode.insertBefore(_, k.nextSibling) : k.parentNode.appendChild(_), lt(_, !0), r && r(), !1;
        }
        k = k.parentElement;
      }
    }
    if (Zs(w))
      return r && r(), !1;
    if (ii(w, m, C))
      return w.preventDefault(), !1;
    i && i(w);
  }, [i, r, t]), b = N((w) => {
    if (!t.current) return;
    const I = w.target;
    if (xe(I)) {
      p(I, w);
      return;
    }
    if (l(t.current, w.clientY)) {
      R(w);
      return;
    }
    o && o(w);
  }, [t, o, p, R, l]), O = N((w) => {
    const I = window.getSelection();
    if (!I || I.rangeCount === 0) return;
    const E = I.getRangeAt(0), { startContainer: m } = E;
    if (xe(m))
      return w.preventDefault(), !1;
  }, []), L = N((w) => {
    const I = Js(w);
    a && a(w, I);
  }, [a]);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...ri,
        maxWidth: `${e.width}px`,
        transform: `scale(${x})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            ...oi,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${g.top}px ${g.right}px ${g.bottom}px ${g.left}px`
          },
          onInput: n,
          onKeyDown: f,
          onBeforeInput: O,
          onClick: b,
          onScroll: s,
          onPaste: L,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Nt.propTypes = {
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
Nt.defaultProps = {
  zoomLevel: 100,
  pageMargins: ge
};
const ai = yr(Nt), Fn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = ge,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: a,
  onAddPage: u,
  onDeletePage: d,
  onPageSizeChange: h,
  onPageMarginsChange: g,
  onZoomIn: x,
  onZoomOut: l,
  onZoomReset: p
} = {}) => {
  const R = Math.max(e?.length || 0, 1), f = (b) => {
    if (R <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    d?.(b);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ c.jsx(as, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ c.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ c.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: n,
              onChange: (b) => h?.(b.target.value),
              children: [
                /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ c.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ c.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: r,
              onChange: (b) => g?.(b.target.value),
              children: Ar().map((b) => /* @__PURE__ */ c.jsx("option", { value: b, children: Cr(b) }, b))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: l,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ c.jsx(ys, { size: 12 })
        }
      ),
      /* @__PURE__ */ c.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: x,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ c.jsx(hs, { size: 12 })
        }
      ),
      /* @__PURE__ */ c.jsx(
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
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: e.map((b, O) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${O === t ? "active" : ""}`,
          onClick: () => a?.(O),
          "aria-label": `Go to page ${O + 1}`,
          "aria-current": O === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(Et, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              O + 1
            ] })
          ]
        }
      ),
      R > 1 && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (L) => {
            L.stopPropagation(), f(O);
          },
          "aria-label": `Delete page ${O + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(ps, { size: 14 })
        }
      )
    ] }, b.id || `page-${O}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => u?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(rs, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Fn.propTypes = {
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
const ci = Je.memo(Fn), Ue = 10, li = 300, ui = 200;
function di(e) {
  switch (e) {
    case P.TOP_LEFT:
    case P.BOTTOM_RIGHT:
      return "nwse-resize";
    case P.TOP_RIGHT:
    case P.BOTTOM_LEFT:
      return "nesw-resize";
    case P.TOP:
    case P.BOTTOM:
      return "ns-resize";
    case P.LEFT:
    case P.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function gi(e, t, n, r, i, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    P.TOP_LEFT,
    P.TOP_RIGHT,
    P.BOTTOM_LEFT,
    P.BOTTOM_RIGHT
  ].includes(i) ? e / s > t ? t = e / s : e = t * s : [P.TOP, P.BOTTOM].includes(i) ? e = t * s : [P.LEFT, P.RIGHT].includes(i) && (t = e / s), { width: e, height: t };
}
function pi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = Ae
}) {
  const u = r - t, d = i - n;
  let h = o, g = s;
  switch (e) {
    case P.TOP_LEFT:
      h = o - u, g = s - d;
      break;
    case P.TOP_RIGHT:
      h = o + u, g = s - d;
      break;
    case P.BOTTOM_LEFT:
      h = o - u, g = s + d;
      break;
    case P.BOTTOM_RIGHT:
      h = o + u, g = s + d;
      break;
    case P.TOP:
      g = s - d;
      break;
    case P.BOTTOM:
      g = s + d;
      break;
    case P.LEFT:
      h = o - u;
      break;
    case P.RIGHT:
      h = o + u;
      break;
    default:
      return { width: h, height: g };
  }
  return { width: h, height: g } = gi(
    h,
    g,
    o,
    s,
    e,
    a
  ), a.maxWidth && h > a.maxWidth && (h = a.maxWidth, a.preserveAspectRatio && (g = h / (o / s))), a.maxHeight && g > a.maxHeight && (g = a.maxHeight, a.preserveAspectRatio && (h = g * (o / s))), h = Math.max(a.minWidth, Math.min(a.maxWidth || h, h)), g = Math.max(a.minHeight, Math.min(a.maxHeight || g, g)), {
    width: Math.round(h),
    height: Math.round(g)
  };
}
function Un(e, { width: t, height: n }) {
  ye(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function fi(e, t, n) {
  Un(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function hi(e, t, n, r) {
  const { ctrlKey: i, metaKey: o, shiftKey: s, key: a } = e, u = i || o, d = n.offsetWidth, h = n.offsetHeight, x = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(r.maxWidth || 800, d + Ue),
      height: h
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(r.minWidth || 50, d - Ue),
      height: h
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: d,
      height: Math.min(r.maxHeight || 600, h + Ue)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: d,
      height: Math.max(r.minHeight || 50, h - Ue)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: li, height: ui }) : null
  }[a];
  if (x) {
    e.preventDefault();
    const l = x();
    return fi(t, n, l), !0;
  }
  return !1;
}
const Ot = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: i = Ae
}) => {
  const o = U({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = U(i), a = Te();
  W(() => {
    s.current = i;
  }, [i]);
  const u = N((f) => {
    if (!ye(f)) return;
    o.current.overlay && (ct(o.current.overlay), o.current.overlay = null), f.classList.add("selected");
    const b = oo(f, s.current);
    b && (o.current.overlay = b, o.current.image = f, document.body.appendChild(b), b.querySelectorAll(".resize-handler").forEach((L) => {
      L.addEventListener("mousedown", h);
    }), n && n(f));
  }, [n]), d = N(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (ct(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), h = N((f) => {
    if (f.preventDefault(), f.stopPropagation(), !o.current.image) return;
    const b = f.currentTarget.dataset.handler, O = o.current.image.getBoundingClientRect(), L = window.pageYOffset || document.documentElement.scrollTop, w = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: f.clientX,
      y: f.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: f.clientX - O.left - w,
      offsetY: f.clientY - O.top - L
    }, o.current.handler = b, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = di(b), document.addEventListener("mousemove", g), document.addEventListener("mouseup", x);
  }, []), g = N((f) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    f.preventDefault(), f.stopPropagation();
    const { x: b, y: O, width: L, height: w } = o.current.start, I = o.current.handler, E = f.clientX, m = f.clientY, C = pi({
      handler: I,
      startX: b,
      startY: O,
      currentX: E,
      currentY: m,
      startWidth: L,
      startHeight: w,
      options: s.current
    });
    Un(o.current.image, C), o.current.overlay && bt(o.current.overlay, o.current.image);
  }, []), x = N((f) => {
    if (o.current.isResizing) {
      if (f.preventDefault(), f.stopPropagation(), o.current.image && o.current.start) {
        const b = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, O = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (b.width !== O.width || b.height !== O.height) && a.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: O } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: b } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const b = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(b), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, a]), l = N((f) => {
    o.current.overlay && !o.current.overlay.contains(f.target) && d();
    const b = f.target;
    if (ye(b)) {
      if (b === o.current.image)
        return;
      u(b);
    }
  }, [u, d]), p = N((f) => {
    if ((f.key === "Delete" || f.key === "Backspace") && o.current.image && !o.current.isResizing) {
      f.preventDefault();
      const b = o.current.image;
      if (b.parentNode) {
        b.parentNode.removeChild(b), d();
        const O = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(O);
      }
    }
    f.key === "Escape" && o.current.image && d(), o.current.image && !o.current.isResizing && hi(f, e, o.current.image, s.current);
  }, [e, d]), R = N(() => {
    o.current.overlay && o.current.image && bt(o.current.overlay, o.current.image);
  }, []);
  return W(() => {
    if (!e.current) return;
    const b = e.current.closest(".editor-viewport");
    return b && (b.addEventListener("scroll", R), window.addEventListener("scroll", R)), () => {
      b && b.removeEventListener("scroll", R), window.removeEventListener("scroll", R);
    };
  }, [e, R]), W(() => {
    if (!e.current) return;
    const f = e.current;
    return f.addEventListener("click", l), f.addEventListener("keydown", p), window.addEventListener("resize", R), () => {
      f.removeEventListener("click", l), f.removeEventListener("keydown", p), window.removeEventListener("resize", R), o.current.isResizing && (document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && ct(o.current.overlay);
    };
  }, [e, l, p, R, g, x]), W(() => {
    if (!e.current) return;
    const f = new MutationObserver((b) => {
      b.forEach((O) => {
        O.type === "childList" && O.removedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && ye(L) && L === o.current.image && d();
        });
      });
    });
    return f.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => f.disconnect();
  }, [e, d, u]), null;
};
Ot.propTypes = {
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
Ot.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Ae
};
const St = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, mi = {
  ...St,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, ut = (e) => ({
  ...St,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), _t = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, a] = Y({ top: 0, left: 0 }), [u, d] = Y(!1), [h, g] = Y("top"), [x, l] = Y(o), p = U(null), R = Te(), f = (v) => {
    v && requestAnimationFrame(() => {
      const M = document.querySelector(".image-resize-overlay");
      M && bt(M, v);
    });
  }, b = (v) => {
    if (!v) return null;
    const M = window.getComputedStyle(v);
    return {
      float: M.float || "none",
      margin: v.style.margin || "",
      display: M.display || "inline",
      width: v.style.width || v.width || "",
      height: v.style.height || v.height || "",
      aspectRatio: x
    };
  }, O = N(() => {
    if (!e) return "left";
    const v = window.getComputedStyle(e);
    return v.float === "right" ? "right" : v.float === "left" ? "left" : v.display === "block" && v.margin.includes("auto") ? "center" : "left";
  }, [e]), [L, w] = Y("left");
  W(() => {
    e && w(O());
  }, [e, O]);
  const I = N(() => {
    if (!e || !p.current) return;
    const v = e.getBoundingClientRect(), M = p.current.getBoundingClientRect(), S = window.innerWidth, B = window.innerHeight, F = v.bottom >= 0 && v.top <= B && v.right >= 0 && v.left <= S;
    let z = "top", K = 0, J = 0;
    if (F) {
      const T = v.top - M.height - 10, j = B - v.bottom - M.height - 10;
      j > T && j > 0 ? (z = "bottom", K = v.bottom + 10) : (z = "top", K = v.top - M.height - 10);
    } else
      z = "top", K = 10;
    J = v.left + v.width / 2 - M.width / 2;
    let se = Math.max(10, Math.min(J, S - M.width - 10)), ae = Math.max(10, Math.min(K, B - M.height - 10));
    a({ top: ae, left: se }), g(z), d(!0);
  }, [e]);
  mn(() => {
    I();
    const v = () => {
      I();
    };
    return window.addEventListener("scroll", v), window.addEventListener("resize", v), () => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", v), d(!1);
    };
  }, [e, I]), W(() => {
    const v = (M) => {
      p.current && !p.current.contains(M.target) && M.target !== e && i();
    };
    return document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [e, i]);
  const E = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, m = (v) => {
    if (e && E[v]) {
      const M = b(e), S = L, B = E[v];
      e.style.float = B.float, e.style.margin = B.margin, e.style.display = B.display, w(v), f(e);
      const F = b(e);
      R.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: v, state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: S, state: M } }
      ), t && t(v);
    }
  }, C = () => {
    if (e && e.parentNode) {
      const v = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      R.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: v } }
      ), e.parentNode.removeChild(e), r && r(), i();
    }
  }, k = () => {
    const v = x, M = !x;
    l(M), R.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: M } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: v } }
    ), n && n(M);
  }, _ = () => {
    if (!e) return;
    const v = e.src;
    let M = "image.png";
    try {
      if (v.startsWith("blob:"))
        M = "image.png";
      else {
        const F = new URL(v).pathname.split("/"), z = F[F.length - 1];
        z && z.includes(".") && (M = z);
      }
    } catch {
      M = "image.png";
    }
    const S = document.createElement("a");
    S.href = v, S.download = M, S.style.display = "none", document.body.appendChild(S), S.click(), document.body.removeChild(S);
  };
  return !e || typeof document > "u" ? null : yn(
    /* @__PURE__ */ c.jsxs(
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
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${x ? "" : "active"}`,
              onClick: k,
              title: `Toggle aspect ratio preservation (currently ${x ? "ON" : "OFF"})`,
              children: x ? /* @__PURE__ */ c.jsx(ss, { size: 14 }) : /* @__PURE__ */ c.jsx(Xo, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "tooltip-button download-button",
              onClick: _,
              title: "Download Image",
              style: St,
              children: /* @__PURE__ */ c.jsx(Ho, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${L === "left" ? "active" : ""}`,
              onClick: () => m("left"),
              title: "Align Left",
              style: ut(L === "left"),
              children: /* @__PURE__ */ c.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${L === "center" ? "active" : ""}`,
              onClick: () => m("center"),
              title: "Align Center",
              style: ut(L === "center"),
              children: /* @__PURE__ */ c.jsx(Pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${L === "right" ? "active" : ""}`,
              onClick: () => m("right"),
              title: "Align Right",
              style: ut(L === "right"),
              children: /* @__PURE__ */ c.jsx(In, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: C,
              title: "Delete Image",
              style: mi,
              children: /* @__PURE__ */ c.jsx(wt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
_t.propTypes = {
  imageElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onAspectRatioToggle: y.func,
  onDelete: y.func,
  onClose: y.func.isRequired,
  initialPreserveAspectRatio: y.bool
};
_t.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ze = (e) => {
  e.preventDefault(), e.stopPropagation();
}, yi = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((i) => {
      r.classList.remove(i);
    });
  });
}, dn = (e, t) => !e || !t ? !1 : e.contains(t), xi = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, Mt = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, $ = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ce(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function le(e) {
  if (!ce(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, i = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= r)
    for (let u = 0; u < r; u++) {
      const d = s[u], h = d.style.width ? parseInt(d.style.width, 10) : d.offsetWidth;
      i.push(h || 100);
    }
  else if (n.length > 0) {
    const u = n[0];
    for (let d = 0; d < u.cells.length; d++) {
      const h = u.cells[d];
      i.push(h.offsetWidth);
    }
  }
  const a = n.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: i,
    rowHeights: a,
    rect: t
  };
}
function Ti({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = Mt
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (a, u, d, h, g) => {
    u >= 0 && u < a.length && (a[u] = Math.max(h, Math.min(g, a[u] + d)));
  };
  switch (e) {
    case $.COLUMN:
      s(o.columnWidths, t, n, i.minColumnWidth, i.maxColumnWidth), o.tableWidth = r.width;
      break;
    case $.ROW:
      s(o.rowHeights, t, n, i.minRowHeight, i.maxRowHeight), o.tableHeight = r.height;
      break;
    case $.TABLE_BOTTOM:
      s(o.rowHeights, r.rows - 1, n, i.minRowHeight, i.maxRowHeight);
      break;
    case $.TABLE_RIGHT:
      s(o.columnWidths, r.columns - 1, n, i.minColumnWidth, i.maxColumnWidth);
      break;
  }
  return o;
}
function be(e) {
  if (!ce(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const i = r.querySelectorAll("col"), o = i.length;
  if (o < n)
    for (let s = o; s < n; s++) {
      const a = document.createElement("col");
      r.appendChild(a);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(i[s]);
}
function je(e, t) {
  if (!ce(e)) return;
  be(e);
  const { columnWidths: n, rowHeights: r, tableWidth: i, tableHeight: o } = t, s = n ? n.reduce((u, d) => u + d, 0) : 0, a = r ? r.reduce((u, d) => u + d, 0) : 0;
  if (i !== void 0 ? e.style.width = `${i}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : a > 0 && (e.style.height = `${a}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const u = e.querySelector("colgroup");
    u && u.querySelectorAll("col").forEach((h, g) => {
      g < n.length && (h.style.width = `${n[g]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((d, h) => {
    h < r.length && (d.style.height = `${r[h]}px`);
  }), e.style.height = `${a}px`), e.offsetHeight;
}
function bi(e) {
  if (!ce(e)) return null;
  be(e);
  const t = le(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const a = Ke($.COLUMN, s, t, r, e);
    n.appendChild(a);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const a = Ke($.ROW, s, t, r, e);
    n.appendChild(a);
  }
  const i = Xe($.TABLE_BOTTOM, t, r);
  n.appendChild(i);
  const o = Xe($.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const Ei = {
  [$.COLUMN]: {
    className: "table-resize-handler table-column-resize-handler",
    cursor: "col-resize",
    isVertical: !0
  },
  [$.ROW]: {
    className: "table-resize-handler table-row-resize-handler",
    cursor: "row-resize",
    isVertical: !1
  },
  [$.TABLE_BOTTOM]: {
    className: "table-resize-handler table-bottom-resize-handler",
    cursor: "ns-resize",
    isVertical: !1
  },
  [$.TABLE_RIGHT]: {
    className: "table-resize-handler table-right-resize-handler",
    cursor: "ew-resize",
    isVertical: !0
  }
};
function Wn(e, t, n) {
  const r = Ei[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const i = document.createElement("div");
  return i.className = r.className, i.dataset.type = e, i.style.position = "absolute", i.style.cursor = r.cursor, i.style.pointerEvents = "all", r.isVertical ? (i.style.width = "4px", i.style.height = `${t}px`) : (i.style.width = `${t}px`, i.style.height = "4px"), n != null && (i.dataset.index = n), i;
}
function Ke(e, t, n, r, i) {
  const o = e === $.COLUMN ? r.height : r.width, s = Wn(e, o, t);
  return ve(s, e, t, n, r, i), s;
}
function Xe(e, t, n) {
  const r = e === $.TABLE_RIGHT ? n.height : n.width, i = Wn(e, r);
  return ve(i, e, null, t, n, null), i;
}
function At(e, t) {
  if (!e || !t) return;
  be(t);
  const n = le(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), a = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !a) {
    e.innerHTML = "";
    for (let g = 0; g < n.columns - 1; g++) {
      const x = Ke($.COLUMN, g, n, r, t);
      e.appendChild(x);
    }
    for (let g = 0; g < n.rows - 1; g++) {
      const x = Ke($.ROW, g, n, r, t);
      e.appendChild(x);
    }
    const d = Xe($.TABLE_BOTTOM, n, r);
    e.appendChild(d);
    const h = Xe($.TABLE_RIGHT, n, r);
    e.appendChild(h);
  } else
    i.forEach((d, h) => {
      ve(d, $.COLUMN, h, n, r, t);
    }), o.forEach((d, h) => {
      ve(d, $.ROW, h, n, r, t);
    }), s && ve(s, $.TABLE_BOTTOM, null, n, r, null), a && ve(a, $.TABLE_RIGHT, null, n, r, null);
}
function Ne(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Pt(e, t = "Operation") {
  return ce(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function wi(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", t.appendChild(i);
  }
  return t;
}
function Gn(e, t, n = 0) {
  if (!Pt(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const i = e.rows[t];
  if (!i)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = wi(i);
    r < e.rows.length ? e.rows[r].parentNode.insertBefore(o, e.rows[r]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), be(e);
    const s = le(e);
    return s && je(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function vi(e, t) {
  return Gn(e, t, -1);
}
function Ai(e, t) {
  return Gn(e, t, 1);
}
function Ci() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function qn(e, t, n = 0) {
  if (!Pt(e, "insertColumnAtPosition"))
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
      const a = Ci();
      i < s.cells.length ? s.insertBefore(a, s.cells[i]) : s.appendChild(a);
    }
    be(e);
    const o = le(e);
    return o && je(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function Ri(e, t) {
  return qn(e, t, -1);
}
function ki(e, t) {
  return qn(e, t, 1);
}
function ve(e, t, n, r, i, o) {
  switch (t) {
    case $.COLUMN:
      Li(e, n, r, i, o);
      break;
    case $.ROW:
      Ni(e, n, r, i, o);
      break;
    case $.TABLE_BOTTOM:
      Oi(e, r, i);
      break;
    case $.TABLE_RIGHT:
      Si(e, r, i);
      break;
  }
}
function Li(e, t, n, r, i) {
  if (i?.rows.length > 0 && i.rows[0].cells.length > t) {
    const s = i.rows[0].cells[t].getBoundingClientRect(), a = i.getBoundingClientRect();
    e.style.left = `${s.right - a.left - 2}px`, e.style.height = `${r.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${r.height}px`;
}
function Ni(e, t, n, r, i) {
  if (i?.rows.length > t && i.rows[t].cells.length > 0) {
    const s = i.rows[t].cells[0].getBoundingClientRect(), a = i.getBoundingClientRect();
    e.style.top = `${s.bottom - a.top - 2}px`, e.style.width = `${r.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${r.width}px`;
}
function Oi(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Si(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function Zn(e, t, n) {
  return Pt(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? _i(e, t) : n === "column" ? Mi(e, t) : !1 : !1;
}
function _i(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), be(e);
    const r = le(e);
    return r && je(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function Mi(e, t) {
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
    be(e);
    const r = le(e);
    return r && je(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
function Pi(e, t) {
  return Zn(e, t, "row");
}
function Ii(e, t) {
  return Zn(e, t, "column");
}
const It = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = Mt
}) => {
  const o = U(null), s = U(null), a = U(null), u = U(null), d = U(null), h = U(i), g = U(!1), [x, l] = Y(null), p = Te();
  W(() => {
    h.current = i;
  }, [i]);
  const R = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Ne(o.current), o.current = null), l(null), a.current = null, u.current = null, d.current = null, g.current = !1, r && r();
  }, [r]), f = N((C) => {
    if (Ze(C), !s.current) return;
    const k = C.currentTarget, _ = k.dataset.type, v = parseInt(k.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const M = le(s.current);
    a.current = {
      x: C.clientX,
      y: C.clientY,
      structure: { ...M }
    }, u.current = _, d.current = v, g.current = !0, document.body.classList.add("table-resize-in-progress");
    const B = {
      [$.COLUMN]: "col-resize",
      [$.ROW]: "row-resize",
      [$.TABLE_BOTTOM]: "ns-resize",
      [$.TABLE_RIGHT]: "ew-resize"
    }[_] || "default";
    document.body.style.cursor = B, document.addEventListener("mousemove", L), document.addEventListener("mouseup", w);
  }, []), b = N((C) => {
    const k = bi(C, h.current);
    return k && (o.current = k, s.current = C, document.body.appendChild(k), k.querySelectorAll(".table-resize-handler").forEach((v) => {
      v.addEventListener("mousedown", f);
    })), k;
  }, [f]), O = N((C) => {
    if (!ce(C)) return;
    o.current && (Ne(o.current), o.current = null), C.classList.add("selected"), b(C) && (l(C), n && n(C));
  }, [n, b]), L = N((C) => {
    if (!g.current || !s.current || !a.current || !u.current) return;
    Ze(C);
    const { x: k, y: _, structure: v } = a.current, M = u.current, S = d.current, B = C.clientX, F = C.clientY;
    let z = 0;
    switch (M) {
      case $.COLUMN:
        z = B - k;
        break;
      case $.ROW:
        z = F - _;
        break;
      case $.TABLE_BOTTOM:
        z = F - _;
        break;
      case $.TABLE_RIGHT:
        z = B - k;
        break;
    }
    const K = Ti({
      type: M,
      index: S,
      delta: z,
      currentStructure: v,
      options: h.current
    });
    je(s.current, K), o.current && At(o.current, s.current);
  }, []), w = N((C) => {
    if (g.current) {
      if (Ze(C), s.current && a.current) {
        const k = {
          structure: a.current.structure
        }, _ = {
          structure: le(s.current)
        };
        (k.structure.width !== _.structure.width || k.structure.height !== _.structure.height || JSON.stringify(k.structure.columnWidths) !== JSON.stringify(_.structure.columnWidths) || JSON.stringify(k.structure.rowHeights) !== JSON.stringify(_.structure.rowHeights)) && p.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: _ } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: k } }
        );
      }
      if (a.current = null, u.current = null, d.current = null, g.current = !1, document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", w), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(k), t && t(s.current, le(s.current));
      }
    }
  }, [t, p]), I = N((C) => {
    o.current && !o.current.contains(C.target) && R();
    const _ = C.target.closest("table");
    if (_ && ce(_)) {
      if (_ === s.current)
        return;
      O(_);
    }
  }, [O, R]), E = N((C) => {
    if (C.key === "Delete" && s.current && !g.current) {
      C.preventDefault();
      const k = s.current;
      if (k.parentNode) {
        k.parentNode.removeChild(k), R();
        const _ = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(_);
      }
    }
    C.key === "Escape" && s.current && R();
  }, [e, R]), m = N(() => {
    o.current && s.current && At(o.current, s.current);
  }, []);
  return W(() => {
    if (!e.current) return;
    const k = e.current.closest(".editor-viewport");
    return k && (k.addEventListener("scroll", m), window.addEventListener("scroll", m)), () => {
      k && k.removeEventListener("scroll", m), window.removeEventListener("scroll", m);
    };
  }, [e, m]), W(() => {
    if (!e.current) return;
    const C = e.current;
    return C.addEventListener("click", I), C.addEventListener("keydown", E), window.addEventListener("resize", m), () => {
      C.removeEventListener("click", I), C.removeEventListener("keydown", E), window.removeEventListener("resize", m), g.current && (document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", w), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Ne(o.current);
    };
  }, [e, I, E, m, L, w]), W(() => {
    if (!e.current) return;
    const C = new MutationObserver((k) => {
      k.forEach((_) => {
        _.type === "childList" ? (_.removedNodes.forEach((v) => {
          v.nodeType === Node.ELEMENT_NODE && ce(v) && v === x && R();
        }), _.addedNodes.forEach((v) => {
          if (v.nodeType !== Node.ELEMENT_NODE) return;
          if (ce(v)) {
            setTimeout(() => O(v), 50);
            return;
          }
          const M = v.querySelectorAll?.("table") || [];
          M.length > 0 && setTimeout(() => O(M[0]), 50);
        }), x && [..._.addedNodes, ..._.removedNodes].some(
          (M) => M.nodeType === Node.ELEMENT_NODE && M.tagName === "TR"
        ) && o.current && s.current && (Ne(o.current), o.current = null, b(s.current))) : _.type === "attributes" && ["colspan", "rowspan"].includes(_.attributeName) && x && o.current && s.current && (Ne(o.current), o.current = null, b(s.current));
      });
    });
    return C.observe(e.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => C.disconnect();
  }, [e, x, R, O, b]), null;
};
It.propTypes = {
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
It.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Mt
};
const We = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, gn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, we = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, pn = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && At(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, fn = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, jt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: i,
  editorRef: o
}) => {
  const [s, a] = Y({ top: 0, left: 0 }), [u, d] = Y(!1), [h, g] = Y("top"), [x, l] = Y("left"), p = U(null), R = Te(), f = N(() => {
    if (!e) return "left";
    const S = window.getComputedStyle(e);
    return S.marginLeft === "auto" && S.marginRight === "auto" ? "center" : S.float === "right" ? "right" : (S.float === "left", "left");
  }, [e]);
  W(() => {
    e && l(f());
  }, [e, f]);
  const b = N(() => {
    if (!e || !p.current) return;
    const S = e.getBoundingClientRect(), B = p.current.getBoundingClientRect(), F = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, z = S.bottom >= 0 && S.top <= F.height && S.right >= 0 && S.left <= F.width;
    let K = "top", J = 0, se = 0;
    if (z) {
      const Z = S.top - B.height - 10, ie = F.height - S.bottom - B.height - 10;
      ie > Z && ie > 0 ? (K = "bottom", J = S.bottom + 10) : (K = "top", J = S.top - B.height - 10);
    } else
      K = "top", J = 10;
    se = S.left + S.width / 2 - B.width / 2;
    const ae = window.innerWidth, T = window.innerHeight;
    let j = Math.max(10, Math.min(se, ae - B.width - 10)), G = Math.max(10, Math.min(J, T - B.height - 10));
    a({ top: G, left: j }), g(K), d(!0);
  }, [e]);
  mn(() => {
    b();
    const S = () => {
      b();
    };
    return window.addEventListener("scroll", S), window.addEventListener("resize", S), () => {
      window.removeEventListener("scroll", S), window.removeEventListener("resize", S), d(!1);
    };
  }, [e, b]), W(() => {
    const S = (B) => {
      p.current && !p.current.contains(B.target) && B.target !== e && !e.contains(B.target) && n();
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, [e, n]);
  const O = N((S) => {
    if (!e || !gn[S]) return;
    const B = fn(e), F = x, z = gn[S];
    e.style.float = z.float, e.style.margin = z.margin, e.style.marginLeft = z.marginLeft, e.style.marginRight = z.marginRight, l(S), pn(e);
    const K = fn(e);
    R.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: S, state: K } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: F, state: B } }
    ), t?.(S);
  }, [e, x, R, t]), L = N((S, B) => () => {
    if (!e) return;
    const F = S.includes("ROW"), z = F ? r : i;
    if (z == null || !B(e, z)) return;
    o?.current && R.updateContinuousContent(o.current.innerHTML);
    const J = F ? { element: e, index: z } : { element: e, index: z };
    R.recordOperation(
      { type: S, payload: J },
      { type: S, payload: J }
      // Reverse operation would be same type
    ), pn(e), requestAnimationFrame(() => b());
  }, [e, r, i, o, R, b]), w = Q(
    () => L(we.INSERT_ROW_ABOVE, vi),
    [L]
  ), I = Q(
    () => L(we.INSERT_ROW_BELOW, Ai),
    [L]
  ), E = Q(
    () => L(we.INSERT_COL_LEFT, Ri),
    [L]
  ), m = Q(
    () => L(we.INSERT_COL_RIGHT, ki),
    [L]
  ), C = Q(
    () => L(we.DELETE_ROW, Pi),
    [L]
  ), k = Q(
    () => L(we.DELETE_COL, Ii),
    [L]
  ), _ = (S) => ({
    ...We,
    background: S ? "#007bff" : "transparent",
    color: S ? "#fff" : "#333"
  }), v = Q(() => ({
    rowAction: { ...We, background: "#28a745", color: "#fff" },
    colAction: { ...We, background: "#0056b3", color: "#fff" },
    delete: { ...We, background: "#dc3545", color: "#fff" },
    divider: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" }
  }), []), M = Q(() => ({
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
  return !e || typeof document > "u" ? null : yn(
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: p,
        className: "table-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !u,
        style: M,
        children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${x === "left" ? "active" : ""}`,
              onClick: () => O("left"),
              title: "Align Left",
              style: _(x === "left"),
              children: /* @__PURE__ */ c.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${x === "center" ? "active" : ""}`,
              onClick: () => O("center"),
              title: "Align Center",
              style: _(x === "center"),
              children: /* @__PURE__ */ c.jsx(Pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${x === "right" ? "active" : ""}`,
              onClick: () => O("right"),
              title: "Align Right",
              style: _(x === "right"),
              children: /* @__PURE__ */ c.jsx(In, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx("div", { style: v.divider }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: w,
                title: "Insert Row Above",
                style: v.rowAction,
                children: /* @__PURE__ */ c.jsx(_o, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: I,
                title: "Insert Row Below",
                style: v.rowAction,
                children: /* @__PURE__ */ c.jsx(Ro, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: C,
                title: "Delete Row",
                style: v.delete,
                children: /* @__PURE__ */ c.jsx(wt, { size: 14 })
              }
            )
          ] }),
          i != null && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx("div", { style: v.divider }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: E,
                title: "Insert Column Left",
                style: v.colAction,
                children: /* @__PURE__ */ c.jsx(Lo, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: m,
                title: "Insert Column Right",
                style: v.colAction,
                children: /* @__PURE__ */ c.jsx(Oo, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: k,
                title: "Delete Column",
                style: v.delete,
                children: /* @__PURE__ */ c.jsx(wt, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  tableElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onClose: y.func.isRequired,
  selectedRowIndex: y.number,
  selectedColIndex: y.number,
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
jt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const ji = ".table-cell-selected, .table-row-selected, .table-col-selected", hn = () => {
  yi(ji, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, Bt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const n = U({
    selectedCells: /* @__PURE__ */ new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: !1,
    hasDragged: !1,
    startCell: null
  }), [r, i] = Y(!1), [o, s] = Y(!1), [a, u] = Y(null), [d, h] = Y(null), g = U(null), x = N(() => {
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
  }, []), l = N(() => {
    x(), hn(), g.current !== null && (g.current = null, t && t(null));
  }, [t, x]), p = N((E) => {
    const m = E.closest("tr"), C = E.closest("table");
    if (!m || !C) return null;
    const k = Array.from(C.rows).indexOf(m), _ = Array.from(m.cells).indexOf(E);
    return { rowIndex: k, cellIndex: _, table: C };
  }, []), R = N((E) => {
    if (E.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const m = Array.from(E), C = m[0], k = p(C);
    if (!k) return { mode: null, rowIndex: null, colIndex: null };
    const { table: _ } = k;
    return m.filter((S) => {
      const B = p(S);
      return B && B.table === _ && B.rowIndex === k.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: k.rowIndex, colIndex: null } : m.filter((S) => {
      const B = p(S);
      return B && B.table === _ && B.cellIndex === k.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: k.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [p]), f = N((E, m, C, k, _) => {
    if (hn(), !(!_ || !E)) {
      if (E === "row" && m !== null) {
        const v = _.rows[m];
        v && Array.from(v.cells).forEach((M) => {
          M.classList.add("table-row-selected");
        });
      } else E === "column" && C !== null ? Array.from(_.rows).forEach((v) => {
        const M = v.cells[C];
        M && M.classList.add("table-col-selected");
      }) : E === "cells" && k.forEach((v) => {
        v.classList.add("table-cell-selected");
      });
      xi();
    }
  }, []), b = N((E, m) => {
    const C = R(E);
    n.current.selectedCells = E, n.current.selectionMode = C.mode, n.current.selectedRowIndex = C.rowIndex, n.current.selectedColIndex = C.colIndex, n.current.currentTable = m, h(m), f(C.mode, C.rowIndex, C.colIndex, E, m);
    const k = C.mode ? {
      mode: C.mode,
      cells: E,
      rowIndex: C.rowIndex,
      colIndex: C.colIndex,
      table: m
    } : null;
    JSON.stringify(g.current) !== JSON.stringify(k) && (g.current = k, t && t(k));
  }, [R, f, t]), O = N((E) => {
    const m = E.target.closest("td, th");
    if (!m) return;
    const C = p(m);
    C && (i(!0), u(m), h(C.table), s(!1));
  }, [p]), L = N((E) => {
    if (!r || !a) return;
    const m = E.target.closest("td, th");
    if (!m || !d || !dn(d, m)) return;
    s(!0), Ze(E);
    const C = p(a), k = p(m);
    if (!C || !k || C.table !== k.table) return;
    const _ = Math.min(C.rowIndex, k.rowIndex), v = Math.max(C.rowIndex, k.rowIndex), M = Math.min(C.cellIndex, k.cellIndex), S = Math.max(C.cellIndex, k.cellIndex), B = /* @__PURE__ */ new Set();
    for (let F = _; F <= v; F++) {
      const z = d.rows[F];
      if (z)
        for (let K = M; K <= S; K++) {
          const J = z.cells[K];
          J && B.add(J);
        }
    }
    b(B, d);
  }, [r, a, d, p, b]), w = N(() => {
    o || l(), i(!1), u(null);
  }, [o, l]), I = N((E) => {
    const m = E.target.closest("td, th"), C = E.target.closest("table");
    if (!(m && d && dn(d, m))) {
      if (C && C !== d) {
        l();
        return;
      }
      C || l();
    }
  }, [l, d]);
  return W(() => {
    if (!e.current) return;
    const E = e.current, m = (k) => {
      k.target.closest("td, th") && O(k);
    }, C = (k) => {
      k.target.closest("td, th") && L(k);
    };
    return E.addEventListener("mousedown", m, !0), E.addEventListener("mouseenter", C, !0), document.addEventListener("mouseup", w), document.addEventListener("click", I), () => {
      E.removeEventListener("mousedown", m, !0), E.removeEventListener("mouseenter", C, !0), document.removeEventListener("mouseup", w), document.removeEventListener("click", I);
    };
  }, [e, O, L, w, I]), W(() => {
    if (!e.current) return;
    const E = new MutationObserver((m) => {
      m.forEach((C) => {
        C.type === "childList" && d && !e.current.contains(d) && l();
      });
    });
    return E.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => E.disconnect();
  }, [e, l, d]), null;
};
Bt.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: y.func
};
Bt.defaultProps = {
  onCellSelectionChange: void 0
};
const Bi = 50, dt = 50, Hi = 50, Di = 100, zi = 300, $i = 2e3, Ht = Ct(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: s,
  onContentFinalized: a,
  showSidebar: u = !0,
  showToolbar: d = !0,
  showPageManager: h = !0
}, g) => {
  const x = vn(), l = Te(), { pageSize: p, pageMargins: R, continuousContent: f, pageBoundaries: b, activePage: O, zoomLevel: L, canUndo: w, canRedo: I } = x, E = U(null), m = U(null), { currentFormat: C, formatText: k, updateCurrentFormatFromSelection: _ } = _r(), [v, M] = Y(!1), [S, B] = Y(null), [F, z] = Y(!0), [K, J] = Y(!1), [se, ae] = Y(null), [T, j] = Y(null), [G, Z] = Y(null), {
    checkAndUpdateBoundaries: ie,
    getCurrentPage: ne,
    scrollToPage: V,
    updateBoundaries: X,
    triggerAutoReflow: oe,
    removePageAndContent: Be,
    removePageBreak: Dt,
    insertPageBreakAtBoundary: zt
  } = to(p, m, L, R), Yn = Q(() => Me(p), [p]), [Kn, Xn] = Y(!1), fe = U(null), He = U(!1), De = U(!1), he = U(null), Ce = U(!1), ze = U(f), et = N(() => {
    He.current = !1;
    const A = Math.max(0, b.length - 1);
    l.setActivePage(A), setTimeout(() => {
      V(A, E);
    }, Hi);
  }, [b.length, l, V]);
  W(() => {
    if (!m.current || Ce.current) return;
    m.current.innerHTML = f, Ce.current = !0, ze.current = f;
    const A = setTimeout(() => {
      X();
    }, Bi);
    return () => clearTimeout(A);
  }, []), W(() => {
    if (!m.current || !Ce.current) return;
    if (m.current.innerHTML !== f) {
      m.current.innerHTML = f;
      const D = setTimeout(() => {
        X(), He.current && et();
      }, dt);
      return ze.current = f, () => clearTimeout(D);
    }
  }, [f, X, et]), W(() => {
    s && Ce.current && s(f);
  }, [f, s]), W(() => {
    if (!(!a || !Ce.current))
      return he.current && clearTimeout(he.current), he.current = setTimeout(async () => {
        try {
          const A = m.current ? m.current.innerHTML : f, D = await nn(A);
          a(D);
        } catch (A) {
          console.error("Error converting images to base64 for onContentFinalized:", A), a(f);
        }
      }, $i), () => {
        he.current && clearTimeout(he.current);
      };
  }, [f, a]);
  const { restoreCursorPosition: tt, hasActiveCursorSelection: nt } = ro({
    updateCurrentFormatFromSelection: _,
    editorRef: m
  }), Jn = N((A) => {
    A !== f && l.updateContinuousContent(A), m.current && m.current.innerHTML !== A && (m.current.innerHTML = A), ze.current = A, setTimeout(() => {
      X();
    }, dt);
  }, [f, l, X]), rt = N((A) => {
    if (!m.current || !A) return;
    nt() || tt(), document.execCommand("insertHTML", !1, A);
    const D = m.current.innerHTML;
    l.updateContinuousContent(D), ze.current = D, setTimeout(() => {
      X(), oe(200);
    }, dt);
  }, [nt, tt, l, X, oe]), $t = Q(() => ({
    /**
     * Get the current HTML content from the editor with blob URLs converted to base64
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * All blob:// image URLs are converted to base64 data URLs for portability
     * @returns {Promise<string>} Promise resolving to HTML content with base64 images
     */
    getHTMLContent: async () => {
      const A = m.current ? m.current.innerHTML : f;
      try {
        return await nn(A);
      } catch (D) {
        return console.error("Error converting images to base64:", D), A;
      }
    },
    /**
     * Get the selected HTML content from the editor
     * Returns the HTML content of the selected element or the common ancestor of the selection
     * Supports images and table content
     * @returns {string} The selected HTML content
     */
    getSelectedHTMLContent: () => {
      if (!m.current) return "";
      const A = window.getSelection();
      if (!A || A.rangeCount === 0) return "";
      const D = A.getRangeAt(0);
      if (!m.current.contains(D.commonAncestorContainer)) return "";
      if (D.collapsed) {
        const te = D.commonAncestorContainer;
        return te.nodeType === Node.TEXT_NODE ? te.parentElement ? te.parentElement.outerHTML : "" : te.outerHTML || "";
      }
      let ee = D.commonAncestorContainer;
      if (ee.nodeType === Node.TEXT_NODE && (ee = ee.parentElement), ee === m.current) {
        const te = D.cloneContents(), Ee = document.createElement("div");
        return Ee.appendChild(te), Ee.innerHTML;
      }
      return ee ? ee.outerHTML : "";
    },
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : f).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? Qr(m.current) : null,
    /**
     * Set the editor content programmatically
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to set (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    setContent: async (A) => {
      let D;
      try {
        D = await rn(A);
      } catch (te) {
        console.error("Error converting base64 images to blobs:", te), D = A;
      }
      const ee = qe(D);
      Jn(ee);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (A) => {
      l.updatePageSize(A), X({ pageSize: A });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (A) => {
      l.updatePageMargins(A), X({ pageMargins: A });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to insert (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    insertContent: async (A) => {
      let D;
      try {
        D = await rn(A);
      } catch (te) {
        console.error("Error converting base64 images to blobs:", te), D = A;
      }
      const ee = qe(D);
      rt(ee);
    }
  }), [f, l, X, oe, nt, tt]);
  xr(g, () => $t, [$t]);
  const ot = N(() => {
    if (!m.current) return;
    let A = m.current.innerHTML;
    A = qe(A), A !== m.current.innerHTML && (m.current.innerHTML = A);
    const D = f;
    if (D !== A) {
      const te = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: A
      }, Ee = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: D
      };
      l.recordOperation(te, Ee);
    }
    l.updateContinuousContent(A), ie(), oe(200);
    const ee = ne(E);
    ee !== O && l.setActivePage(ee);
  }, [l, ie, ne, O, oe, E, m, f]), Qn = N((A) => {
    ot();
  }, [ot]), Ft = N((A) => {
    l.updatePageSize(A), X({ pageSize: A }), i && i(A);
  }, [l, X, i]), Ut = N((A) => {
    l.updatePageMargins(A), X({ pageMargins: A }), o && o(A);
  }, [l, X, o]), Wt = N((A) => {
    A < 0 || A >= b.length || (De.current = !0, l.setActivePage(A), V(A, E), setTimeout(() => {
      De.current = !1;
    }, zi), t && t(A));
  }, [l, V, t, b.length]), Gt = N(() => {
    const A = b.length + 1;
    zt(A) && (He.current = !0, setTimeout(() => {
      He.current && et();
    }, 100)), n && n();
  }, [b.length, zt, l, V, n]), er = N(() => {
    const A = window.getSelection();
    if (A && A.rangeCount > 0) {
      if (!m?.current) return;
      const te = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, te), setTimeout(() => {
        X();
        const Ee = ne(E);
        l.setActivePage(Ee);
      }, 150);
    }
  }, [X, ne, l, E]), tr = N((A) => {
    rt(A), setTimeout(() => {
      oe(800);
    }, 100);
  }, [rt, oe]), nr = N((A) => {
    if (!A) return;
    Dt(A) && setTimeout(() => {
      const ee = ne(E);
      l.setActivePage(ee);
    }, 200);
  }, [Dt, ne, l, E]), qt = N((A) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Be(A) && (l.setActivePage(0), r && r(A));
  }, [b.length, Be, l, r]), rr = Q(() => ({
    handleZoomIn: () => l.zoomIn(),
    handleZoomOut: () => l.zoomOut(),
    handleZoomReset: () => l.resetZoom(),
    handleUndo: () => l.undo(),
    handleRedo: () => l.redo()
  }), [l]), { handleZoomIn: st, handleZoomOut: it, handleZoomReset: at, handleUndo: or, handleRedo: sr } = rr;
  no(
    { handleZoomIn: st, handleZoomOut: it, handleZoomReset: at, handleUndo: or, handleRedo: sr },
    { editorRef: m, containerRef: E }
  );
  const ir = N(() => {
    !E.current || !m.current || De.current || (fe.current && clearTimeout(fe.current), fe.current = setTimeout(() => {
      if (De.current) {
        fe.current = null;
        return;
      }
      const A = ne(E);
      A !== O && A >= 0 && l.setActivePage(A), fe.current = null;
    }, Di));
  }, [ne, O, l]), ar = Q(() => {
    if (!f) return 0;
    const D = f.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return D ? D.length : 0;
  }, [f]), cr = b.length || 1, lr = N((A) => {
    M(!0), B(A);
  }, []), Zt = N(() => {
    M(!1), B(null);
  }, []), ur = N((A, D) => {
  }, []), dr = N((A) => {
    A && A.mode === "row" ? (j(A.rowIndex), Z(null)) : A && A.mode === "column" ? (Z(A.colIndex), j(null)) : (j(null), Z(null));
  }, []), gr = N((A) => {
    J(!0), ae(A);
  }, []), Vt = N(() => {
    J(!1), ae(null);
  }, []), pr = N((A, D) => {
  }, []);
  return W(() => () => {
    fe.current && clearTimeout(fe.current), he.current && clearTimeout(he.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ c.jsx(
      Lt,
      {
        currentFormat: {
          ...C,
          imageSelected: v
        },
        onFormatText: k,
        onAddPageBreak: er,
        onInsertImage: tr,
        canUndo: w,
        canRedo: I
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      u && /* @__PURE__ */ c.jsx(
        Ts,
        {
          editorView: null,
          isCollapsed: Kn,
          onToggle: () => Xn((A) => !A),
          wordCount: ar,
          pageCount: cr
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: E,
          onScroll: ir,
          children: /* @__PURE__ */ c.jsx(
            ai,
            {
              content: f,
              dimensions: Yn,
              pageSize: p,
              pageMargins: R,
              pageBoundaries: b,
              editorRef: m,
              onInput: Qn,
              onContentChange: ot,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: nr,
              zoomLevel: L
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsx(
        Ot,
        {
          editorRef: m,
          onImageSelect: lr,
          onImageDeselect: Zt,
          onImageResize: ur,
          resizeOptions: {
            ...Ae,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      /* @__PURE__ */ c.jsx(
        It,
        {
          editorRef: m,
          onTableSelect: gr,
          onTableDeselect: Vt,
          onTableResize: pr
        }
      ),
      /* @__PURE__ */ c.jsx(
        Bt,
        {
          editorRef: m,
          onCellSelectionChange: dr
        }
      ),
      v && S && /* @__PURE__ */ c.jsx(
        _t,
        {
          imageElement: S,
          initialPreserveAspectRatio: F,
          onAlignChange: (A) => {
          },
          onAspectRatioToggle: (A) => {
            z(A);
          },
          onDelete: () => {
            if (S) {
              const A = S.getAttribute("data-key");
              A && lo(A).catch((D) => {
                console.error("Failed to delete image from IndexedDB:", D);
              });
            }
          },
          onClose: Zt
        }
      ),
      K && se && /* @__PURE__ */ c.jsx(
        jt,
        {
          tableElement: se,
          onAlignChange: (A) => {
          },
          onClose: Vt,
          selectedRowIndex: T,
          selectedColIndex: G,
          editorRef: m
        }
      ),
      h && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? Je.cloneElement(e, {
        onNavigate: Wt,
        onAddPage: Gt,
        onDeletePage: qt,
        onPageSizeChange: Ft,
        onPageMarginsChange: Ut,
        zoomLevel: L,
        canZoomIn: mt(L),
        canZoomOut: yt(L),
        onZoomIn: st,
        onZoomOut: it,
        onZoomReset: at
      }) : /* @__PURE__ */ c.jsx(
        ci,
        {
          pageBoundaries: b,
          activePage: O,
          pageSize: p,
          pageMargins: R,
          zoomLevel: L,
          canZoomIn: mt(L),
          canZoomOut: yt(L),
          onNavigate: Wt,
          onAddPage: Gt,
          onDeletePage: qt,
          onPageSizeChange: Ft,
          onPageMarginsChange: Ut,
          onZoomIn: st,
          onZoomOut: it,
          onZoomReset: at
        }
      ) })
    ] })
  ] });
});
Ht.displayName = "HtmlEditor";
Ht.propTypes = {
  pageManagerComponent: y.element,
  onNavigatePage: y.func,
  onAddPage: y.func,
  onDeletePage: y.func,
  onPageSizeChange: y.func,
  onPageMarginsChange: y.func,
  onChange: y.func,
  onContentFinalized: y.func,
  showSidebar: y.bool,
  showToolbar: y.bool,
  showPageManager: y.bool
};
Ht.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onChange: void 0,
  onContentFinalized: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class Vn extends Je.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ c.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ c.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ c.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ c.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ c.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ c.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
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
Vn.propTypes = {
  children: y.node.isRequired,
  fallback: y.node,
  onError: y.func,
  onReset: y.func,
  showDetails: y.bool
};
Vn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Lr as COMMON_FONT_SIZES,
  $n as ColorPickerDropdown,
  Qe as DEFAULT_FONT_SIZE,
  Ae as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Tn as DEFAULT_PAGE_SIZE,
  Mt as DEFAULT_TABLE_RESIZE_OPTIONS,
  Vi as DocumentProvider,
  Lt as EditorToolbar,
  Vn as ErrorBoundary,
  An as FONT_SIZE_MAP,
  Ht as HtmlEditor,
  Ot as ImageResizeHandlers,
  Ye as PAGE_SIZES,
  ci as PageManager,
  ai as PageView,
  P as RESIZE_HANDLERS,
  Ts as Sidebar,
  $ as TABLE_RESIZE_HANDLERS,
  It as TableResizeHandlers,
  ea as applyImageDimensions,
  je as applyTableDimensions,
  uo as base64ToBlob,
  On as blobUrlToBase64,
  Ji as calculateResizeDimensions,
  Ti as calculateTableResizeDimensions,
  ta as clearImages,
  rn as convertBase64ToBlobUrls,
  nn as convertBlobUrlsToBase64,
  oo as createResizeOverlay,
  bi as createTableResizeOverlay,
  lo as deleteImage,
  na as getAllImageKeys,
  Zi as getAvailablePageSizes,
  kt as getImage,
  ra as getImageAsBase64,
  Qi as getImageDimensions,
  Me as getPageDimensions,
  Yi as getPixelValue,
  Ki as getPointValue,
  le as getTableStructure,
  ye as isResizableImage,
  ce as isResizableTable,
  Xi as isValidFontSize,
  qi as isValidPageSize,
  Fs as logger,
  Or as pixelsToPoints,
  Nr as pointsToPixels,
  ct as removeResizeOverlay,
  Ne as removeTableResizeOverlay,
  Nn as saveImage,
  bt as updateResizeOverlay,
  At as updateTableResizeOverlay,
  to as useContinuousReflow,
  wn as useDocument,
  Te as useDocumentActions,
  vn as useDocumentState,
  _r as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
