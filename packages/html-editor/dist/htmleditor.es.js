import qe, { createContext as Rn, useContext as Sn, useReducer as kn, useMemo as ze, useState as de, useCallback as $, useRef as re, useEffect as se, forwardRef as ut, createElement as tt, useLayoutEffect as On, useImperativeHandle as Cn } from "react";
import { v4 as dt } from "uuid";
import { createPortal as Mn } from "react-dom";
function Nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function In() {
  if (Rt) return Ae;
  Rt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, i, a) {
    var r = null;
    if (a !== void 0 && (r = "" + a), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Ae.Fragment = t, Ae.jsx = o, Ae.jsxs = o, Ae;
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
var St;
function Ln() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === M ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case C:
          return "Fragment";
        case A:
          return "Profiler";
        case b:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case v:
            return "Portal";
          case B:
            return c.displayName || "Context";
          case P:
            return (c._context.displayName || "Context") + ".Consumer";
          case g:
            var w = c.render;
            return c = c.displayName, c || (c = w.displayName || w.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case T:
            return w = c.displayName || null, w !== null ? w : e(c.type) || "Memo";
          case O:
            w = c._payload, c = c._init;
            try {
              return e(c(w));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function o(c) {
      try {
        t(c);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var N = w.error, I = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(c);
      }
    }
    function n(c) {
      if (c === C) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === O)
        return "<...>";
      try {
        var w = e(c);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = j.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (F.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, w) {
      function N() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: N,
        configurable: !0
      });
    }
    function m() {
      var c = e(this.type);
      return Z[c] || (Z[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function p(c, w, N, I, Y, W) {
      var H = N.ref;
      return c = {
        $$typeof: _,
        type: c,
        key: w,
        props: N,
        _owner: I
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function h(c, w, N, I, Y, W) {
      var H = w.children;
      if (H !== void 0)
        if (I)
          if (z(H)) {
            for (I = 0; I < H.length; I++)
              y(H[I]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(H);
      if (F.call(w, "key")) {
        H = e(c);
        var G = Object.keys(w).filter(function(K) {
          return K !== "key";
        });
        I = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", E[H + I] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          H,
          G,
          H
        ), E[H + I] = !0);
      }
      if (H = null, N !== void 0 && (o(N), H = "" + N), r(w) && (o(w.key), H = "" + w.key), "key" in w) {
        N = {};
        for (var V in w)
          V !== "key" && (N[V] = w[V]);
      } else N = w;
      return H && s(
        N,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), p(
        c,
        H,
        N,
        i(),
        Y,
        W
      );
    }
    function y(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === O && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === _;
    }
    var k = qe, _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), B = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), j = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, z = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var Q, Z = {}, q = k.react_stack_bottom_frame.bind(
      k,
      a
    )(), ae = oe(n(a)), E = {};
    Pe.Fragment = C, Pe.jsx = function(c, w, N) {
      var I = 1e4 > j.recentlyCreatedOwnerStacks++;
      return h(
        c,
        w,
        N,
        !1,
        I ? Error("react-stack-top-frame") : q,
        I ? oe(n(c)) : ae
      );
    }, Pe.jsxs = function(c, w, N) {
      var I = 1e4 > j.recentlyCreatedOwnerStacks++;
      return h(
        c,
        w,
        N,
        !0,
        I ? Error("react-stack-top-frame") : q,
        I ? oe(n(c)) : ae
      );
    };
  })()), Pe;
}
var kt;
function jn() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? Ie.exports = In() : Ie.exports = Ln()), Ie.exports;
}
var l = jn();
const nt = 100, rt = 50, ot = 200, Ot = 5, at = (e) => e < ot, it = (e) => e > rt, Dn = 96, Le = (e) => Math.round(e * Dn), $e = {
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
}, ge = "NORMAL", Yt = (e = ge) => {
  const t = $e[e] || $e[ge];
  return {
    top: Le(t.top),
    bottom: Le(t.bottom),
    left: Le(t.left),
    right: Le(t.right)
  };
}, Bn = (e = ge) => {
  const t = Yt(e);
  return t.top + t.bottom;
}, Hn = () => Object.keys($e), zn = (e) => {
  const t = $e[e];
  return t ? t.label : "Unknown";
}, ue = {
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
}, Vt = "A4", ft = (e) => {
  const t = ue[e] || ue[Vt];
  return {
    width: t.width,
    height: t.height
  };
}, ya = (e) => Object.keys(ue).includes(e), Ea = () => Object.keys(ue), Re = Vt, Ee = "<p><br></p>", $n = "continuous", _e = (e, t = Re) => ({
  id: dt(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), Be = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, Kt = (e, t = Re) => (e.length > 0 ? e : [_e(0, t)]).map((n, i) => ({
  id: n.id || dt(),
  index: i,
  size: n.size || t,
  content: Be(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Un = (e = Re) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: ft(e).height
}], st = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Re, n = Kt(e.pages || [_e(0, o)], o);
  return {
    id: dt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || $n,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || Un(o),
    zoomLevel: e.zoomLevel || nt,
    pageMargins: e.pageMargins || ge,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, U = {
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
  INSERT_PAGE_AT: "INSERT_PAGE_AT",
  MOVE_PAGE_TO: "MOVE_PAGE_TO",
  DUPLICATE_PAGE: "DUPLICATE_PAGE",
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
}, ct = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case U.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ee, pageSize: i = Re } = t.payload || {}, a = { ..._e(0, i), content: Be(n) };
      return st({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case U.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case U.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: Be(i)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Kt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: o
      };
    }
    case U.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, _e(n, e.pageSize));
      const a = i.map((s, m) => ({
        ...s,
        index: m,
        size: e.pageSize
      })), r = a.slice(0, -1).map((s, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: r,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case U.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const a = i.map((m, p) => ({
        ...m,
        index: p,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = a.slice(0, -1).map((m, p) => ({
        id: `auto-break-${p}`,
        pageNumber: p + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case U.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= i ? e : {
        ...e,
        activePage: n,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        ft(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const i = e.pages.map((r, s) => ({
        ...r,
        index: s,
        size: n
      })), a = i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: i,
        pageBreaks: a,
        updatedAt: o
      };
    }
    case U.RESET_DOCUMENT:
      return st();
    case U.UPDATE_CONTINUOUS_CONTENT: {
      const n = Be(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const i = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: i,
        updatedAt: o
      };
    }
    case U.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const s = r.substring(0, n), m = r.substring(n);
        r = s + a + m;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const m = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && m.length === 0)
          r = r + a + "<p><br></p>";
        else if (i < m.length) {
          const p = m[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const y = document.createElement("p");
          y.innerHTML = "<br>", p.parentNode.insertBefore(h, p.nextSibling), h.parentNode.insertBefore(y, h.nextSibling), r = s.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case U.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, m) => {
        s.setAttribute("data-page-number", String(m + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: o
      };
    }
    case U.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== Ee).join(`
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (a = [{ ..._e(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case U.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < rt || n > ot ? (console.warn(`Invalid zoom level: ${n}. Must be between ${rt} and ${ot}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_IN: {
      if (!at(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Ot;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_OUT: {
      if (!it(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Ot;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.RESET_ZOOM:
      return e.zoomLevel === nt ? e : {
        ...e,
        zoomLevel: nt,
        updatedAt: o
      };
    case U.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    case U.RECORD_OPERATION: {
      const { operation: n, inverseOperation: i } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: i }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: o
      };
    }
    case U.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = ct(e, n.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: o
      };
    }
    case U.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = ct(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: o
      };
    }
    case U.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: o
      };
    // Image operation actions (for undo/redo)
    case "IMAGE_ALIGN": {
      const { element: n, state: i } = t.payload;
      return n && i && (n.style.float = i.float, n.style.margin = i.margin, n.style.display = i.display, i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    case "IMAGE_DELETE": {
      const { element: n } = t.payload;
      return n && n.parentNode && n.parentNode.removeChild(n), e;
    }
    case "IMAGE_REINSERT": {
      const { state: n } = t.payload;
      return n && n.parent && n.element && (n.nextSibling ? n.parent.insertBefore(n.element, n.nextSibling) : n.parent.appendChild(n.element)), e;
    }
    case "IMAGE_ASPECT_RATIO":
      return e;
    case "IMAGE_RESIZE": {
      const { element: n, state: i } = t.payload;
      return n && i && (i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    default:
      return e;
  }
}, Xt = Rn(null), ba = ({ children: e, initialState: t = {} }) => {
  const [o, n] = kn(ct, st(t)), i = ze(() => ({
    initializeDocument: (r) => n({ type: U.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: U.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: U.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: U.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: U.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: U.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: U.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: U.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: U.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: U.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: U.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: U.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: U.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: U.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: U.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: U.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: U.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: U.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: U.ZOOM_IN }),
    zoomOut: () => n({ type: U.ZOOM_OUT }),
    resetZoom: () => n({ type: U.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: U.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: U.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: U.UNDO }),
    redo: () => n({ type: U.REDO }),
    clearUndoRedo: () => n({ type: U.CLEAR_UNDO_REDO })
  }), []), a = ze(() => ({
    state: o,
    actions: i,
    dispatch: n
  }), [o, i]);
  return /* @__PURE__ */ l.jsx(Xt.Provider, { value: a, children: e });
}, Jt = () => {
  const e = Sn(Xt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Qt = () => {
  const { state: e } = Jt();
  return e;
}, Se = () => {
  const { actions: e } = Jt();
  return e;
};
var je = { exports: {} }, De = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Gn() {
  if (Ct) return ee;
  Ct = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function P(g) {
    if (typeof g == "object" && g !== null) {
      var u = g.$$typeof;
      switch (u) {
        case t:
          switch (g = g.type, g) {
            case m:
            case p:
            case n:
            case a:
            case i:
            case y:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case h:
                case _:
                case k:
                case r:
                  return g;
                default:
                  return u;
              }
          }
        case o:
          return u;
      }
    }
  }
  function B(g) {
    return P(g) === p;
  }
  return ee.AsyncMode = m, ee.ConcurrentMode = p, ee.ContextConsumer = s, ee.ContextProvider = r, ee.Element = t, ee.ForwardRef = h, ee.Fragment = n, ee.Lazy = _, ee.Memo = k, ee.Portal = o, ee.Profiler = a, ee.StrictMode = i, ee.Suspense = y, ee.isAsyncMode = function(g) {
    return B(g) || P(g) === m;
  }, ee.isConcurrentMode = B, ee.isContextConsumer = function(g) {
    return P(g) === s;
  }, ee.isContextProvider = function(g) {
    return P(g) === r;
  }, ee.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ee.isForwardRef = function(g) {
    return P(g) === h;
  }, ee.isFragment = function(g) {
    return P(g) === n;
  }, ee.isLazy = function(g) {
    return P(g) === _;
  }, ee.isMemo = function(g) {
    return P(g) === k;
  }, ee.isPortal = function(g) {
    return P(g) === o;
  }, ee.isProfiler = function(g) {
    return P(g) === a;
  }, ee.isStrictMode = function(g) {
    return P(g) === i;
  }, ee.isSuspense = function(g) {
    return P(g) === y;
  }, ee.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === p || g === a || g === i || g === y || g === f || typeof g == "object" && g !== null && (g.$$typeof === _ || g.$$typeof === k || g.$$typeof === r || g.$$typeof === s || g.$$typeof === h || g.$$typeof === C || g.$$typeof === b || g.$$typeof === A || g.$$typeof === v);
  }, ee.typeOf = P, ee;
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
var Mt;
function Fn() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function P(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === p || S === a || S === i || S === y || S === f || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === k || S.$$typeof === r || S.$$typeof === s || S.$$typeof === h || S.$$typeof === C || S.$$typeof === b || S.$$typeof === A || S.$$typeof === v);
    }
    function B(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case t:
            var be = S.type;
            switch (be) {
              case m:
              case p:
              case n:
              case a:
              case i:
              case y:
                return be;
              default:
                var ve = be && be.$$typeof;
                switch (ve) {
                  case s:
                  case h:
                  case _:
                  case k:
                  case r:
                    return ve;
                  default:
                    return ce;
                }
            }
          case o:
            return ce;
        }
      }
    }
    var g = m, u = p, d = s, T = r, O = t, D = h, M = n, j = _, F = k, z = o, oe = a, Q = i, Z = y, q = !1;
    function ae(S) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(S) || B(S) === m;
    }
    function E(S) {
      return B(S) === p;
    }
    function c(S) {
      return B(S) === s;
    }
    function w(S) {
      return B(S) === r;
    }
    function N(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function I(S) {
      return B(S) === h;
    }
    function Y(S) {
      return B(S) === n;
    }
    function W(S) {
      return B(S) === _;
    }
    function H(S) {
      return B(S) === k;
    }
    function G(S) {
      return B(S) === o;
    }
    function V(S) {
      return B(S) === a;
    }
    function K(S) {
      return B(S) === i;
    }
    function ie(S) {
      return B(S) === y;
    }
    te.AsyncMode = g, te.ConcurrentMode = u, te.ContextConsumer = d, te.ContextProvider = T, te.Element = O, te.ForwardRef = D, te.Fragment = M, te.Lazy = j, te.Memo = F, te.Portal = z, te.Profiler = oe, te.StrictMode = Q, te.Suspense = Z, te.isAsyncMode = ae, te.isConcurrentMode = E, te.isContextConsumer = c, te.isContextProvider = w, te.isElement = N, te.isForwardRef = I, te.isFragment = Y, te.isLazy = W, te.isMemo = H, te.isPortal = G, te.isProfiler = V, te.isStrictMode = K, te.isSuspense = ie, te.isValidElementType = P, te.typeOf = B;
  })()), te;
}
var Nt;
function en() {
  return Nt || (Nt = 1, process.env.NODE_ENV === "production" ? De.exports = Gn() : De.exports = Fn()), De.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ye, It;
function qn() {
  if (It) return Ye;
  It = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(a) {
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
      for (var r = {}, s = 0; s < 10; s++)
        r["_" + String.fromCharCode(s)] = s;
      var m = Object.getOwnPropertyNames(r).map(function(h) {
        return r[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ye = i() ? Object.assign : function(a, r) {
    for (var s, m = n(a), p, h = 1; h < arguments.length; h++) {
      s = Object(arguments[h]);
      for (var y in s)
        t.call(s, y) && (m[y] = s[y]);
      if (e) {
        p = e(s);
        for (var f = 0; f < p.length; f++)
          o.call(s, p[f]) && (m[p[f]] = s[p[f]]);
      }
    }
    return m;
  }, Ye;
}
var Ve, Lt;
function pt() {
  if (Lt) return Ve;
  Lt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ve = e, Ve;
}
var Ke, jt;
function tn() {
  return jt || (jt = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Xe, Dt;
function Wn() {
  if (Dt) return Xe;
  Dt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pt(), o = {}, n = /* @__PURE__ */ tn();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(a, r, s, m, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var f = Error(
                (m || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            y = a[h](r, h, m, s, null, t);
          } catch (_) {
            y = _;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + s + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in o)) {
            o[y.message] = !0;
            var k = p ? p() : "";
            e(
              "Failed " + s + " type: " + y.message + (k ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Xe = i, Xe;
}
var Je, Bt;
function Zn() {
  if (Bt) return Je;
  Bt = 1;
  var e = en(), t = qn(), o = /* @__PURE__ */ pt(), n = /* @__PURE__ */ tn(), i = /* @__PURE__ */ Wn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var m = "Warning: " + s;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Je = function(s, m) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(E) {
      var c = E && (p && E[p] || E[h]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", k = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: A(),
      arrayOf: P,
      element: B(),
      elementType: g(),
      instanceOf: u,
      node: D(),
      objectOf: T,
      oneOf: d,
      oneOfType: O,
      shape: j,
      exact: F
    };
    function _(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function v(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function C(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, w = 0;
      function N(Y, W, H, G, V, K, ie) {
        if (G = G || f, K = K || H, ie !== o) {
          if (m) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = G + ":" + H;
            !c[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ce] = !0, w++);
          }
        }
        return W[H] == null ? Y ? W[H] === null ? new v("The " + V + " `" + K + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new v("The " + V + " `" + K + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : E(W, H, G, V, K);
      }
      var I = N.bind(null, !1);
      return I.isRequired = N.bind(null, !0), I;
    }
    function b(E) {
      function c(w, N, I, Y, W, H) {
        var G = w[N], V = Q(G);
        if (V !== E) {
          var K = Z(G);
          return new v(
            "Invalid " + Y + " `" + W + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return C(c);
    }
    function A() {
      return C(r);
    }
    function P(E) {
      function c(w, N, I, Y, W) {
        if (typeof E != "function")
          return new v("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var H = w[N];
        if (!Array.isArray(H)) {
          var G = Q(H);
          return new v("Invalid " + Y + " `" + W + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected an array."));
        }
        for (var V = 0; V < H.length; V++) {
          var K = E(H, V, I, Y, W + "[" + V + "]", o);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return C(c);
    }
    function B() {
      function E(c, w, N, I, Y) {
        var W = c[w];
        if (!s(W)) {
          var H = Q(W);
          return new v("Invalid " + I + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(E);
    }
    function g() {
      function E(c, w, N, I, Y) {
        var W = c[w];
        if (!e.isValidElementType(W)) {
          var H = Q(W);
          return new v("Invalid " + I + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(E);
    }
    function u(E) {
      function c(w, N, I, Y, W) {
        if (!(w[N] instanceof E)) {
          var H = E.name || f, G = ae(w[N]);
          return new v("Invalid " + Y + " `" + W + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return C(c);
    }
    function d(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(w, N, I, Y, W) {
        for (var H = w[N], G = 0; G < E.length; G++)
          if (_(H, E[G]))
            return null;
        var V = JSON.stringify(E, function(ie, S) {
          var ce = Z(S);
          return ce === "symbol" ? String(S) : S;
        });
        return new v("Invalid " + Y + " `" + W + "` of value `" + String(H) + "` " + ("supplied to `" + I + "`, expected one of " + V + "."));
      }
      return C(c);
    }
    function T(E) {
      function c(w, N, I, Y, W) {
        if (typeof E != "function")
          return new v("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var H = w[N], G = Q(H);
        if (G !== "object")
          return new v("Invalid " + Y + " `" + W + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected an object."));
        for (var V in H)
          if (n(H, V)) {
            var K = E(H, V, I, Y, W + "." + V, o);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return C(c);
    }
    function O(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var w = E[c];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(w) + " at index " + c + "."
          ), r;
      }
      function N(I, Y, W, H, G) {
        for (var V = [], K = 0; K < E.length; K++) {
          var ie = E[K], S = ie(I, Y, W, H, G, o);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && V.push(S.data.expectedType);
        }
        var ce = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new v("Invalid " + H + " `" + G + "` supplied to " + ("`" + W + "`" + ce + "."));
      }
      return C(N);
    }
    function D() {
      function E(c, w, N, I, Y) {
        return z(c[w]) ? null : new v("Invalid " + I + " `" + Y + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return C(E);
    }
    function M(E, c, w, N, I) {
      return new v(
        (E || "React class") + ": " + c + " type `" + w + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function j(E) {
      function c(w, N, I, Y, W) {
        var H = w[N], G = Q(H);
        if (G !== "object")
          return new v("Invalid " + Y + " `" + W + "` of type `" + G + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var V in E) {
          var K = E[V];
          if (typeof K != "function")
            return M(I, Y, W, V, Z(K));
          var ie = K(H, V, I, Y, W + "." + V, o);
          if (ie)
            return ie;
        }
        return null;
      }
      return C(c);
    }
    function F(E) {
      function c(w, N, I, Y, W) {
        var H = w[N], G = Q(H);
        if (G !== "object")
          return new v("Invalid " + Y + " `" + W + "` of type `" + G + "` " + ("supplied to `" + I + "`, expected `object`."));
        var V = t({}, w[N], E);
        for (var K in V) {
          var ie = E[K];
          if (n(E, K) && typeof ie != "function")
            return M(I, Y, W, K, Z(ie));
          if (!ie)
            return new v(
              "Invalid " + Y + " `" + W + "` key `" + K + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(w[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var S = ie(H, K, I, Y, W + "." + K, o);
          if (S)
            return S;
        }
        return null;
      }
      return C(c);
    }
    function z(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(z);
          if (E === null || s(E))
            return !0;
          var c = y(E);
          if (c) {
            var w = c.call(E), N;
            if (c !== E.entries) {
              for (; !(N = w.next()).done; )
                if (!z(N.value))
                  return !1;
            } else
              for (; !(N = w.next()).done; ) {
                var I = N.value;
                if (I && !z(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function Q(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : oe(c, E) ? "symbol" : c;
    }
    function Z(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = Q(E);
      if (c === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function q(E) {
      var c = Z(E);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function ae(E) {
      return !E.constructor || !E.constructor.name ? f : E.constructor.name;
    }
    return k.checkPropTypes = i, k.resetWarningCache = i.resetWarningCache, k.PropTypes = k, k;
  }, Je;
}
var Qe, Ht;
function Yn() {
  if (Ht) return Qe;
  Ht = 1;
  var e = /* @__PURE__ */ pt();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Qe = function() {
    function n(r, s, m, p, h, y) {
      if (y !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Qe;
}
var zt;
function Vn() {
  if (zt) return je.exports;
  if (zt = 1, process.env.NODE_ENV !== "production") {
    var e = en(), t = !0;
    je.exports = /* @__PURE__ */ Zn()(e.isElement, t);
  } else
    je.exports = /* @__PURE__ */ Yn()();
  return je.exports;
}
var Kn = /* @__PURE__ */ Vn();
const x = /* @__PURE__ */ Nn(Kn), nn = {
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
}, Xn = [
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
], We = "16px", Jn = (e) => Math.round(e * 96 / 72), Qn = (e) => Math.round(e * 72 / 96 * 2) / 2, Ta = (e) => {
  const t = Object.values(nn).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Jn(e)}px`;
}, va = (e) => {
  const t = parseInt(e), o = Object.values(nn).find((n) => n.px === t);
  return o ? o.pt : Qn(t);
}, xa = (e) => {
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
}, he = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, R = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Aa({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = he
}) {
  const m = n - t, p = i - o;
  let h = a, y = r;
  switch (e) {
    case R.TOP_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r - p);
      break;
    case R.TOP_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r - p);
      break;
    case R.BOTTOM_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r + p);
      break;
    case R.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r + p);
      break;
    case R.TOP:
      y = Math.max(s.minHeight, r - p);
      break;
    case R.BOTTOM:
      y = Math.max(s.minHeight, r + p);
      break;
    case R.LEFT:
      h = Math.max(s.minWidth, a - m);
      break;
    case R.RIGHT:
      h = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: h, height: y };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      R.TOP_LEFT,
      R.TOP_RIGHT,
      R.BOTTOM_LEFT,
      R.BOTTOM_RIGHT
    ].includes(e) ? h / f > y ? y = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, y * f) : [R.TOP, R.BOTTOM].includes(e) ? h = y * f : [R.LEFT, R.RIGHT].includes(e) && (y = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (y = h / (a / r))), s.maxHeight && y > s.maxHeight && (y = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = y * (a / r))), h = Math.max(s.minWidth, h), y = Math.max(s.minHeight, y), {
    width: Math.round(h),
    height: Math.round(y)
  };
}
function pe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Pa(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function _a(e, { width: t, height: o }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function rn(e, t = he) {
  if (!pe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(R).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = er(a), r.style.pointerEvents = "all", on(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function er(e) {
  switch (e) {
    case R.TOP_LEFT:
    case R.BOTTOM_RIGHT:
      return "nwse-resize";
    case R.TOP_RIGHT:
    case R.BOTTOM_LEFT:
      return "nesw-resize";
    case R.TOP:
    case R.BOTTOM:
      return "ns-resize";
    case R.LEFT:
    case R.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function on(e, t, o, n) {
  switch (t) {
    case R.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case R.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case R.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case R.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case R.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case R.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case R.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case R.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ue(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    on(i, a, o.width, o.height);
  });
}
function Te(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const tr = {
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
}, $t = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: We,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: he,
  preserveAspectRatio: !0
}, nr = () => {
  const [e, t] = de($t), o = Se(), n = $((b) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0);
      if (!P.toString())
        return t((g) => ({ ...g, fontFamily: b })), !1;
      try {
        const g = document.createElement("span");
        g.style.fontFamily = b;
        const u = P.extractContents();
        return g.appendChild(u), P.insertNode(g), P.selectNodeContents(g), A.removeAllRanges(), A.addRange(P), t((d) => ({ ...d, fontFamily: b })), !0;
      } catch {
        return document.execCommand("fontName", !1, b), t((u) => ({ ...u, fontFamily: b })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font family change failed:", A), !1;
    }
  }, []), i = $((b) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0);
      if (!P.toString())
        return t((g) => ({ ...g, fontSize: b })), !1;
      try {
        const g = document.createElement("span");
        g.style.fontSize = b;
        const u = P.extractContents();
        return g.appendChild(u), P.insertNode(g), P.selectNodeContents(g), A.removeAllRanges(), A.addRange(P), t((d) => ({ ...d, fontSize: b })), !0;
      } catch {
        const u = tr[b] || "3";
        return document.execCommand("fontSize", !1, u), t((d) => ({ ...d, fontSize: b })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font size change failed:", A), !1;
    }
  }, []), a = $((b) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0), B = P.toString(), u = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[b];
      if (!u)
        return !1;
      if (!B) {
        const T = P.startContainer, O = T.nodeType === Node.TEXT_NODE ? T.parentElement : T, D = Ge(O) || or();
        return D && (D.style.textAlign = u, r(u)), !0;
      }
      const d = rr(P);
      if (d.length === 0) {
        const T = document.createElement("p");
        T.style.textAlign = u;
        const O = P.extractContents();
        T.appendChild(O), P.insertNode(T), P.selectNodeContents(T), A.removeAllRanges(), A.addRange(P);
      } else
        d.forEach((T) => {
          T.style.textAlign = u;
        });
      return r(u), !0;
    } catch (A) {
      return console.warn("[useFormatting] Text alignment failed:", A), !1;
    }
  }, []), r = $((b) => {
    t((A) => ({
      ...A,
      alignLeft: b === "left",
      alignCenter: b === "center",
      alignRight: b === "right",
      alignJustify: b === "justify"
    }));
  }, []), s = $((b, A = null) => {
    try {
      if (b === "undo") {
        o.undo();
        return;
      }
      if (b === "redo") {
        o.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (b === "fontSize") {
        i(A);
        return;
      }
      if (b === "fontName") {
        n(A);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(b)) {
        a(b);
        return;
      }
      switch (document.execCommand(b, !1, A) || console.warn(`[useFormatting] Command "${b}" failed`), b) {
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
          t((B) => ({ ...B, headingLevel: A }));
          break;
        default:
          break;
      }
    } catch (P) {
      console.warn(`[useFormatting] Error executing command "${b}":`, P);
    }
  }, [i, n, o]), m = re(null), p = re(null), h = re(null), y = re(null), f = re(he);
  $((b) => {
    if (!pe(b)) return;
    m.current && (Te(m.current), m.current = null), b.classList.add("selected");
    const A = rn(b);
    A && (m.current = A, p.current = b, document.body.appendChild(A), t((P) => ({
      ...P,
      imageSelected: !0,
      preserveAspectRatio: f.current.preserveAspectRatio
    })));
  }, []);
  const k = $(() => {
    p.current && (p.current.classList.remove("selected"), p.current = null), m.current && (Te(m.current), m.current = null), h.current = null, y.current = null, t((b) => ({
      ...b,
      imageSelected: !1
    }));
  }, []), _ = $(() => {
    const b = !f.current.preserveAspectRatio;
    f.current = {
      ...f.current,
      preserveAspectRatio: b,
      aspectRatio: b
    }, t((A) => ({
      ...A,
      preserveAspectRatio: b
    }));
  }, []);
  $((b, A, P) => {
    p.current && (h.current = {
      x: A,
      y: P,
      width: p.current.offsetWidth,
      height: p.current.offsetHeight
    }, y.current = b, document.body.classList.add("resize-in-progress"), document.body.style.cursor = ar(b));
  }, []), $((b, A) => {
    if (!p.current || !h.current || !y.current) return;
    const { x: P, y: B, width: g, height: u } = h.current, d = y.current, T = ir({
      handler: d,
      startX: P,
      startY: B,
      currentX: b,
      currentY: A,
      startWidth: g,
      startHeight: u,
      options: f.current
    });
    sr(p.current, T), m.current && Ue(m.current, p.current);
  }, []), $(() => {
    if (h.current = null, y.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", p.current) {
      const b = new Event("input", { bubbles: !0, cancelable: !0 });
      p.current.dispatchEvent(b);
    }
  }, []);
  const v = $(() => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return;
      const A = b.getRangeAt(0), P = A.toString();
      let B = We, g = "Arial", u = "p", d = "left";
      if (P) {
        const O = A.startContainer, D = O.nodeType === Node.TEXT_NODE ? O.parentElement : O;
        if (D) {
          const M = window.getComputedStyle(D), j = M.fontSize, F = M.fontFamily;
          j && j.endsWith("px") && (B = j), F && F !== "serif" && (g = F.split(",")[0].replace(/['"]/g, "").trim());
          const z = Ge(D);
          if (z) {
            const oe = z.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(oe) && (u = oe);
            const Z = window.getComputedStyle(z).textAlign;
            ["left", "center", "right", "justify"].includes(Z) && (d = Z);
          }
        }
      }
      const T = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: d === "left",
        alignCenter: d === "center",
        alignRight: d === "right",
        alignJustify: d === "justify",
        fontFamily: g,
        fontSize: B,
        headingLevel: u
      };
      t((O) => ({
        ...O,
        ...T
      }));
    } catch (b) {
      console.warn("[useFormatting] Error updating format from selection:", b);
    }
  }, []), C = $(() => {
    k(), t($t);
  }, [k]);
  return se(() => () => {
    m.current && Te(m.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: C,
    updateCurrentFormatFromSelection: v,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: _
  };
};
function Ge(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const o = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(o))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function rr(e) {
  const t = [], o = e.startContainer, n = e.endContainer, i = Ge(
    o.nodeType === Node.TEXT_NODE ? o.parentElement : o
  ), a = Ge(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (i === a && i)
    return [i];
  const r = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (m) => {
        const p = m.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(p) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let s = r.nextNode();
  for (; s; )
    e.intersectsNode(s) && t.push(s), s = r.nextNode();
  return t;
}
function or() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), o = document.createElement("p");
    return o.innerHTML = "<br>", t.insertNode(o), t.selectNodeContents(o), t.collapse(!0), e.removeAllRanges(), e.addRange(t), o;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
function ar(e) {
  switch (e) {
    case R.TOP_LEFT:
    case R.BOTTOM_RIGHT:
      return "nwse-resize";
    case R.TOP_RIGHT:
    case R.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case R.BOTTOM:
      return "ns-resize";
    case R.LEFT:
    case R.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function ir({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = he
}) {
  const m = n - t, p = i - o;
  let h = a, y = r;
  switch (e) {
    case R.TOP_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r - p);
      break;
    case R.TOP_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r - p);
      break;
    case R.BOTTOM_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r + p);
      break;
    case R.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r + p);
      break;
    case R.TOP:
      y = Math.max(s.minHeight, r - p);
      break;
    case R.BOTTOM:
      y = Math.max(s.minHeight, r + p);
      break;
    case R.LEFT:
      h = Math.max(s.minWidth, a - m);
      break;
    case R.RIGHT:
      h = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: h, height: y };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      R.TOP_LEFT,
      R.TOP_RIGHT,
      R.BOTTOM_LEFT,
      R.BOTTOM_RIGHT
    ].includes(e) ? h / f > y ? y = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, y * f) : [R.TOP, R.BOTTOM].includes(e) ? h = y * f : [R.LEFT, R.RIGHT].includes(e) && (y = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (y = h / (a / r))), s.maxHeight && y > s.maxHeight && (y = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = y * (a / r))), h = Math.max(s.minWidth, h), y = Math.max(s.minHeight, y), {
    width: Math.round(h),
    height: Math.round(y)
  };
}
function sr(e, { width: t, height: o }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const ye = 'page-break, [data-page-break="true"]', an = (e) => ue[e] || ue.A4, cr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = an(o), i = e.querySelectorAll(ye), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((m, p) => {
    const y = m.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${p + 1}`,
      pageNumber: p + 2,
      top: y,
      height: n.height
    });
  }), a;
}, sn = (e, t = 100, o = ge) => {
  const n = an(e), i = Bn(o), a = n.height - i, r = t / 100;
  return a / r;
}, lr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(ye);
    if (o.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), i = n.top + n.height / 2;
    for (let a = o.length - 1; a >= 0; a--)
      if (o[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, Ut = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], n = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? n.length > 0 && (o.push(n), n = []) : n.push(i);
  return n.length > 0 && o.push(n), o.length === 0 && t.length > 0 && o.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), o;
}, ur = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const o = e.querySelectorAll("img"), n = e.textContent.trim();
    if (o.length === 1 && !n) {
      const a = o[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, dr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, fr = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const m = sn(o, n, i) * (t - 1), p = Array.from(e.children);
    let h = 0, y = null;
    for (let f = 0; f < p.length; f++) {
      const k = p[f];
      if (k.tagName === "PAGE-BREAK" || k.getAttribute("data-page-break") === "true")
        continue;
      const _ = ur(k);
      if (h + _ > m) {
        y = k;
        break;
      }
      h += _;
    }
    if (y) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), y.parentNode.insertBefore(f, y), a) {
        const k = e.innerHTML;
        a(k);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const k = document.createElement("p");
      if (k.innerHTML = "<br>", e.appendChild(k), a) {
        const _ = e.innerHTML;
        a(_);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, pr = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const m = Array.from(e.querySelectorAll(ye));
    if (t > m.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const p = window.getSelection();
    let h = !1, y = [], f = null;
    if (t === 0) {
      const _ = m[0];
      if (!_)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== _; )
        y.push(v), v = v.nextSibling;
      f = _;
    } else {
      const _ = m[t - 1];
      if (!_)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = m[t];
      let C = _.nextSibling;
      for (; C && C !== v; )
        y.push(C), C = C.nextSibling;
      f = _;
    }
    if (p && p.rangeCount > 0) {
      const v = p.getRangeAt(0).startContainer;
      for (const C of y)
        if (C.contains(v) || C === v) {
          h = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), y.forEach((_) => {
      _.parentNode && _.remove();
    }), e.querySelectorAll(ye).forEach((_, v) => {
      _.setAttribute("data-page-number", String(v + 2));
    }), h && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const _ = e.innerHTML;
      n(_);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (m) {
    return console.error("[removePageAndContent] Failed to remove page:", m), !1;
  }
}, gr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ye).forEach((o, n) => {
        o.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, hr = (e, t, o, n, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), gr(t), o) {
      const a = t.innerHTML;
      o(a);
    }
    return n && setTimeout(() => {
      n(), i && setTimeout(() => {
        i();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, mr = 200, yr = 50, Gt = 3, Er = 20, cn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const o = e.querySelectorAll("img"), n = e.textContent.trim();
    if (o.length === 1 && !n) {
      const a = o[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, br = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = cn(a);
    if (r < 1)
      continue;
    if (o + r > t)
      return n === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      };
    o += r, n = a;
  }
  return null;
}, Tr = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const m = sn(t, o, n);
    let p = Ut(e), h = !1, y = 0;
    for (let f = 0; f < p.length && y < Gt; f++) {
      const k = p[f], _ = br(k, m);
      if (_ && _.overflowIndex > 0) {
        let v = 0;
        for (let P = 0; P < k.length; P++) {
          const B = k[P];
          B && B.getBoundingClientRect && (v += cn(B));
        }
        if (v - m < Er)
          continue;
        const b = f + 2;
        dr(_.overflowElement, b) && (h = !0, y++, p = Ut(e));
      }
    }
    if (h) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        a && a(), y >= Gt && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, yr);
    }
    return h;
  } catch (m) {
    return console.warn("[checkAndReflow] Reflow failed:", m), !1;
  } finally {
    r.current = !1;
  }
}, vr = (e, t, o = mr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, xr = 400, ln = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(ye)[t - 1];
        a && a.nextSibling && (o = a.nextSibling, n = 0);
      }
      if (o) {
        const i = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? i.setStart(o, n) : i.setStart(o, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, Ar = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const r = t.querySelectorAll(ye)[o - 1];
      if (r)
        i = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), r = e.getBoundingClientRect(), s = e.scrollTop + (a.top - r.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(o) : ln(t, o);
      }, xr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Pr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, _r = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const o = t.getRangeAt(0);
  if (!e.contains(o.commonAncestorContainer)) return null;
  let n = 1;
  const i = e.querySelectorAll(ye);
  for (const h of i)
    if (o.comparePoint(h, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(o.startContainer, o.startOffset);
  const s = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), m = s.length, p = (s.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: p,
    charOffset: m
  };
}, wr = 300, Rr = (e, t, o = 100, n = "NARROW") => {
  const i = Se(), a = re(null), r = re(null), s = re(e), m = re(o), p = re(n), h = re(!1);
  se(() => {
    s.current = e;
  }, [e]), se(() => {
    m.current = o;
  }, [o]), se(() => {
    p.current = n;
  }, [n]), se(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const y = $((u = {}) => t?.current ? cr(t.current, u) : [], [t]), f = $((u = {}) => {
    const d = y(u);
    return i.updatePageBoundaries(d), d;
  }, [y, i]), k = $(async (u) => {
    if (!t?.current)
      return !1;
    const d = s.current || "A4", T = m.current || 100, O = p.current || "NARROW";
    return fr(
      t.current,
      u,
      d,
      T,
      O,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), _ = $(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", d = m.current || 100, T = p.current || "NARROW";
    Tr(
      t.current,
      u,
      d,
      T,
      i.updateContinuousContent,
      f,
      h,
      _
    );
  }, [t, i, f]), v = $((u) => {
    vr(_, r, u);
  }, [_]), C = $((u = {}) => {
    const d = typeof u.delay == "number" ? u.delay : wr;
    Pr(f, a, u, d);
  }, [f]), b = $((u) => !u?.current || !t?.current ? 0 : lr(u.current, t.current), [t]), A = $((u) => {
    t?.current && ln(t.current, u);
  }, [t]), P = $((u, d) => {
    if (!d?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Ar(d.current, t.current, u, A);
  }, [t, A]), B = $((u) => t?.current ? pr(
    t.current,
    u,
    y,
    i.updateContinuousContent,
    f,
    A,
    _
  ) : !1, [t, y, i, f, A, _]), g = $((u) => t?.current ? hr(
    u,
    t.current,
    i.updateContinuousContent,
    f,
    _
  ) : !1, [t, i, f, _]);
  return {
    calculatePageBoundaries: y,
    checkAndUpdateBoundaries: C,
    updateBoundaries: f,
    getCurrentPage: b,
    scrollToPage: P,
    positionCursorAtPage: A,
    checkAndReflow: _,
    triggerAutoReflow: v,
    removePageAndContent: B,
    removePageBreak: g,
    insertPageBreakAtBoundary: k,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, Sr = "html-editor-storage", kr = 1, fe = "images";
function Or() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ke() {
  return new Promise((e, t) => {
    const o = indexedDB.open(Sr, kr);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(fe) || i.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Cr(e) {
  return new Promise((t, o) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      o(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      o(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (a) => {
      const r = a.target.result, m = r.split(",")[1].length * 3 / 4;
      if (m > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = await ke(), h = `editor-image-${Or()}`, f = p.transaction([fe], "readwrite").objectStore(fe), k = {
          key: h,
          dataUrl: r,
          size: m,
          type: e.type,
          timestamp: Date.now()
        }, _ = f.add(k);
        _.onsuccess = () => {
          p.close(), t(h);
        }, _.onerror = () => {
          p.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (p) {
        o(p);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function Mr(e) {
  try {
    const t = await ke();
    return new Promise((o, n) => {
      const r = t.transaction([fe], "readonly").objectStore(fe).get(e);
      r.onsuccess = () => {
        t.close();
        const s = r.result;
        o(s ? s.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Nr(e) {
  try {
    const t = await ke();
    return new Promise((o, n) => {
      const r = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
      r.onsuccess = () => {
        t.close(), o();
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function wa() {
  try {
    const e = await ke();
    return new Promise((t, o) => {
      const a = e.transaction([fe], "readwrite").objectStore(fe).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function Ra() {
  try {
    const e = await ke();
    return new Promise((t, o) => {
      const a = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const Ir = [
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
], Lr = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function jr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function un(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function He(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, we(o) || "<p><br></p>";
}
function Dr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function we(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${jr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, r = a.tagName, s = r.toLowerCase(), m = un(a);
      if (r === "DIV") {
        const p = we(a);
        p.trim() ? t.push(p) : t.push("<p><br></p>");
      } else if (r === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(r)) {
        const p = Dr(a);
        t.push(`<${s}${m}>${p}</${s}>`);
      } else if (r === "BR")
        t.push("<p><br></p>");
      else if (r === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(r))
        t.push(Br(a));
      else if (r === "LI")
        t.push(a.outerHTML);
      else if (r === "TABLE")
        t.push(Hr(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(r))
        t.push(a.outerHTML);
      else if (r === "BLOCKQUOTE") {
        const p = we(a);
        t.push(`<blockquote${m}>${p}</blockquote>`);
      } else if (r === "PRE")
        t.push(a.outerHTML);
      else if (Ir.includes(r))
        t.push(a.outerHTML);
      else if (r === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (r === "HR")
        t.push(a.outerHTML);
      else if (r === "FIGURE")
        t.push(a.outerHTML);
      else if (Lr.includes(r))
        t.push(a.outerHTML);
      else {
        const p = we(a);
        t.push(`<${s}${m}>${p}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Br(e) {
  const t = e.tagName.toLowerCase(), o = un(e), n = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      n.push(i.outerHTML);
    else {
      const a = we(i);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${o}><li><br></li></${t}>` : `<${t}${o}>${n.join("")}</${t}>`;
}
function Hr(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $r = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Ft = (e) => {
  const t = $r(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, dn = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), Ur = (e) => {
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
var Gr = {
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
const Fr = ut(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, m) => tt(
    "svg",
    {
      ref: m,
      ...Gr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: dn("lucide", i),
      ...!a && !Ur(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([p, h]) => tt(p, h)),
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
const X = (e, t) => {
  const o = ut(
    ({ className: n, ...i }, a) => tt(Fr, {
      ref: a,
      iconNode: t,
      className: dn(
        `lucide-${zr(Ft(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return o.displayName = Ft(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Wr = X("bold", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Yr = X("chevron-left", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Kr = X("chevron-right", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Jr = X("file-check", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Fe = X("file-text", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], to = X("hash", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], ro = X("heading-1", no);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], ao = X("heading-2", oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], so = X("heading-3", io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], lo = X("image-upscale", co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], fo = X("image", uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], go = X("italic", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], mo = X("link", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Eo = X("list-indent-decrease", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], To = X("list-indent-increase", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], xo = X("list-ordered", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], fn = X("list", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _o = X("plus", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Ro = X("redo", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], ko = X("scaling", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Co = X("settings", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], No = X("strikethrough", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Lo = X("table", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], pn = X("text-align-center", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], gn = X("text-align-end", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ho = X("text-align-justify", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], hn = X("text-align-start", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Uo = X("trash-2", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Fo = X("underline", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Wo = X("undo", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Yo = X("x", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ko = X("zoom-in", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Jo = X("zoom-out", Xo), Qo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Qt(), { pages: r, activePage: s, continuousContent: m, editorMode: p } = a, [h, y] = de(0), [f, k] = de([]);
  se(() => {
    if (n !== void 0 && i !== void 0) {
      if (y(n), m) {
        const b = document.createElement("div");
        b.innerHTML = m;
        const A = b.querySelectorAll("h1, h2, h3, h4, h5, h6"), P = Array.from(A).map((B, g) => {
          const u = parseInt(B.tagName.charAt(1)), d = B.textContent.trim();
          return d ? {
            id: `heading-${g}`,
            level: u,
            text: d,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        k(P);
      }
      return;
    }
    let v = 0;
    const C = [];
    r.forEach((b, A) => {
      if (b.content) {
        const P = document.createElement("div");
        P.innerHTML = b.content;
        const g = (P.textContent || P.innerText || "").trim().split(/\s+/).filter((d) => d.length > 0);
        v += g.length, P.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((d, T) => {
          const O = parseInt(d.tagName.charAt(1)), D = d.textContent.trim();
          D && C.push({
            id: `heading-${A}-${T}`,
            level: O,
            text: D,
            page: A + 1
          });
        });
      }
    }), y(v), k(C);
  }, [r, n, i, m]);
  const _ = i !== void 0 ? i : r.length;
  return /* @__PURE__ */ l.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ l.jsx(Fe, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(Kr, { size: 16 }) : /* @__PURE__ */ l.jsx(Yr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Jr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: _ })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(to, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Fe, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(fn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((v) => {
              const C = v.level === 1 ? ro : v.level === 2 ? ao : so;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${v.level}`,
                  style: { marginLeft: `${(v.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(C, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: v.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      v.page
                    ] })
                  ]
                },
                v.id
              );
            }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ l.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ l.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
class ea {
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
  _format(t, o, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${o}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, o) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, o) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, o) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, o) {
  }
}
const qt = new ea("Editor"), mn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), yn = 32;
function En(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * yn}px`, e.dataset.indentLevel = String(n));
}
function ta(e, t) {
  En(e, t);
}
function na(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && mn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ra() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), o = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((r) => {
    document.createRange().selectNodeContents(r), t.intersectsNode(r) && o.add(r);
  }), o.size === 0 && n.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let p = s.parentElement;
      for (; p && p !== n; ) {
        if (p.tagName && mn.has(p.tagName.toUpperCase())) {
          o.add(p);
          break;
        }
        p = p.parentElement;
      }
    }
  }), Array.from(o).filter((r) => {
    let s = r.parentElement;
    for (; s; ) {
      if (o.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function oa(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), o = Math.max(0, t - 1);
    o === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${o * yn}px`, e.dataset.indentLevel = String(o));
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
    let o = t.nextNode();
    for (; o; ) {
      const n = o.textContent;
      if (n.startsWith("    ")) {
        o.textContent = n.substring(4);
        break;
      }
      o = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function lt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let o = ra();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = na(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const i = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      ta(r, e);
      return;
    }
    e ? oa(r) : En(r, !1);
  });
  try {
    const r = document.createRange(), s = (y) => y.nodeType === Node.TEXT_NODE ? y : document.createTreeWalker(
      y,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), m = (y) => {
      if (y.nodeType === Node.TEXT_NODE)
        return y;
      const f = document.createTreeWalker(
        y,
        NodeFilter.SHOW_TEXT,
        null
      );
      let k = null, _ = f.nextNode();
      for (; _; )
        k = _, _ = f.nextNode();
      return k;
    }, p = s(i);
    p ? r.setStart(p, 0) : r.setStart(i, 0);
    const h = m(a);
    h ? r.setEnd(h, h.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
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
function aa(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, o = window.getSelection(), n = o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
  return o && o.rangeCount > 0 && n && !n.collapsed && lt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const gt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o,
  canUndo: n = !1,
  canRedo: i = !1
}) => {
  const a = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const m = await Cr(r), p = await Mr(m);
      if (p) {
        const y = `<img src="${p}" data-key="${m}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, y), qt.info("Image inserted", { key: m });
      }
      const h = document.getElementById("image-upload");
      h && (h.value = "");
    } catch (s) {
      qt.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        disabled: !n,
        title: "Undo",
        style: { opacity: n ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(Wo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(Ro, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(go, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(Fo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(No, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(pn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(gn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Ho, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala " }),
          /* @__PURE__ */ l.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans", children: "Noto Sans " })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        value: e.fontSize || We,
        title: "Font Size",
        children: Xn.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ l.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ l.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ l.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ l.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ l.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ l.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ l.jsx(fn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(xo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          lt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ l.jsx(To, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          lt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ l.jsx(Eo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(mo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Lo, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Fe, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && a(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(fo, { size: 16 })
      }
    )
  ] });
};
gt.propTypes = {
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
    headingLevel: x.string
  }).isRequired,
  onFormatText: x.func.isRequired,
  onAddPageBreak: x.func,
  canUndo: x.bool,
  canRedo: x.bool
};
gt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function ia(e) {
  return !e || typeof e != "string" ? e : He(e);
}
function sa(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = ia(o) : o = ca(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function ca(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => la(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function la(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ht = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: a,
  onContentChange: r,
  onKeyDown: s,
  onClick: m,
  onScroll: p,
  onPaste: h,
  onRemovePageBreak: y,
  zoomLevel: f = 100,
  pageMargins: k = ge
}) => {
  const _ = Yt(k), v = f / 100, C = (u, d) => {
    if (!u) return !1;
    const T = u.getBoundingClientRect(), O = d - T.top;
    return O < _.top || O > T.height - _.bottom;
  }, b = (u) => u ? u.nodeType === Node.ELEMENT_NODE ? u.tagName === "PAGE-BREAK" || u.getAttribute("data-page-break") === "true" : u.parentElement && b(u.parentElement) : !1, A = (u) => {
    const d = window.getSelection();
    if (!d || d.rangeCount === 0) return;
    const T = d.getRangeAt(0), { startContainer: O, endContainer: D } = T;
    if ((b(O) || b(D)) && (u.key.length === 1 || u.key === "Enter" || u.key === " "))
      return u.preventDefault(), !1;
    if (aa(u))
      return r && r(), !1;
    if ((u.key === "Backspace" || u.key === "Delete") && (b(O) || b(D)))
      return u.preventDefault(), !1;
    s && s(u);
  }, P = (u) => {
    if (!i.current) return;
    const d = u.target;
    if (b(d)) {
      u.preventDefault();
      const T = d.getBoundingClientRect(), O = u.clientX - T.left, D = u.clientY - T.top, M = T.width - 40, j = -12, F = T.width - 20;
      O >= M && O <= F && D >= j && D <= 8 && y && y(d);
      return;
    }
    if (C(i.current, u.clientY)) {
      u.preventDefault();
      const T = i.current.getBoundingClientRect();
      if (u.clientY - T.top < _.top) {
        const D = i.current.firstElementChild;
        if (D && D.tagName !== "PAGE-BREAK") {
          const M = document.createRange(), j = window.getSelection();
          M.setStart(D, 0), M.collapse(!0), j.removeAllRanges(), j.addRange(M);
        }
      } else {
        const D = i.current.lastElementChild;
        if (D && D.tagName !== "PAGE-BREAK") {
          const M = document.createRange(), j = window.getSelection();
          M.selectNodeContents(D), M.collapse(!1), j.removeAllRanges(), j.addRange(M);
        }
      }
      return;
    }
    m && m(u);
  }, B = (u) => {
    const d = window.getSelection();
    if (!d || d.rangeCount === 0) return;
    const T = d.getRangeAt(0), { startContainer: O } = T;
    if (b(O))
      return u.preventDefault(), !1;
  }, g = (u) => {
    const d = sa(u);
    h && h(u, d);
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${t.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${v})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${t.height}px`,
            width: `${t.width}px`,
            backgroundColor: "white",
            padding: `${_.top}px ${_.right}px ${_.bottom}px ${_.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: We,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: A,
          onBeforeInput: B,
          onClick: P,
          onScroll: p,
          onPaste: g,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ht.propTypes = {
  content: x.string.isRequired,
  dimensions: x.shape({
    width: x.number.isRequired,
    height: x.number.isRequired
  }).isRequired,
  pageSize: x.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: x.arrayOf(
    x.shape({
      id: x.string.isRequired,
      pageNumber: x.number.isRequired,
      top: x.number,
      height: x.number
    })
  ),
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
ht.defaultProps = {
  pageBoundaries: [],
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const mt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = ge,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: m,
  onDeletePage: p,
  onPageSizeChange: h,
  onPageMarginsChange: y,
  onZoomIn: f,
  onZoomOut: k,
  onZoomReset: _
} = {}) => {
  const v = Math.max(e?.length || 0, 1), C = (g) => {
    s && s(g);
  }, b = () => {
    m && m();
  }, A = (g) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    p && p(g);
  }, P = (g) => {
    h && h(g);
  }, B = (g) => {
    y && y(g);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(Co, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ l.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: o,
              onChange: (g) => P(g.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ l.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ l.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ l.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (g) => B(g.target.value),
              children: Hn().map((g) => /* @__PURE__ */ l.jsx("option", { value: g, children: zn(g) }, g))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: k,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Jo, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: f,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Ko, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: _,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((g, u) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${u === t ? "active" : ""}`,
          onClick: () => C(u),
          "aria-label": `Go to page ${u + 1}`,
          "aria-current": u === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Fe, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              u + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (d) => {
            d.stopPropagation(), A(u);
          },
          "aria-label": `Delete page ${u + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(Yo, { size: 14 })
        }
      )
    ] }, g.id || `page-${u}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: b,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(_o, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
mt.propTypes = {
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
mt.defaultProps = {
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
const ua = qe.memo(mt), yt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = he
}) => {
  const a = re(null), r = re(null), s = re(null), m = re(null), p = re(i), h = re(!1), y = Se();
  se(() => {
    p.current = i;
  }, [i]);
  const f = $((d) => {
    if (!pe(d)) return;
    a.current && (Te(a.current), a.current = null), d.classList.add("selected");
    const T = rn(d, p.current);
    T && (a.current = T, r.current = d, document.body.appendChild(T), T.querySelectorAll(".resize-handler").forEach((D) => {
      D.addEventListener("mousedown", _);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(d)));
  }, [o]), k = $(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (Te(a.current), a.current = null), s.current = null, m.current = null, h.current = !1, n && n();
  }, [n]), _ = $((d) => {
    if (d.preventDefault(), d.stopPropagation(), !r.current) return;
    const T = d.currentTarget.dataset.handler, O = r.current.getBoundingClientRect(), D = window.pageYOffset || document.documentElement.scrollTop, M = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: d.clientX,
      y: d.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: d.clientX - O.left - M,
      offsetY: d.clientY - O.top - D
    }, m.current = T, h.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = B(T), document.addEventListener("mousemove", v), document.addEventListener("mouseup", C);
  }, []), v = $((d) => {
    if (!h.current || !r.current || !s.current || !m.current) return;
    d.preventDefault(), d.stopPropagation();
    const { x: T, y: O, width: D, height: M } = s.current, j = m.current, F = d.clientX, z = d.clientY, oe = g({
      handler: j,
      startX: T,
      startY: O,
      currentX: F,
      currentY: z,
      startWidth: D,
      startHeight: M,
      options: p.current
    });
    u(r.current, oe), a.current && Ue(a.current, r.current);
  }, []), C = $((d) => {
    if (h.current) {
      if (d.preventDefault(), d.stopPropagation(), r.current && s.current) {
        const T = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, O = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (T.width !== O.width || T.height !== O.height) && y.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: O } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: T } }
        );
      }
      if (s.current = null, m.current = null, h.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(T), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, y]), b = $((d) => {
    a.current && !a.current.contains(d.target) && k();
    const T = d.target;
    if (pe(T)) {
      if (T === r.current)
        return;
      f(T);
    } else
      console.log("Clicked on non-image element");
  }, [f, k]), A = $((d) => {
    if ((d.key === "Delete" || d.key === "Backspace") && r.current && !h.current) {
      d.preventDefault();
      const T = r.current;
      if (T.parentNode) {
        T.parentNode.removeChild(T), k();
        const O = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(O);
      }
    }
    if (d.key === "Escape" && r.current && k(), r.current && !h.current) {
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === ">") {
        d.preventDefault();
        const T = r.current.offsetWidth, O = Math.min(p.current.maxWidth || 800, T + 10);
        u(r.current, { width: O, height: r.current.offsetHeight });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "<") {
        d.preventDefault();
        const T = r.current.offsetWidth, O = Math.max(p.current.minWidth || 50, T - 10);
        u(r.current, { width: O, height: r.current.offsetHeight });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "+") {
        d.preventDefault();
        const T = r.current.offsetHeight, O = Math.min(p.current.maxHeight || 600, T + 10);
        u(r.current, { width: r.current.offsetWidth, height: O });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "-") {
        d.preventDefault();
        const T = r.current.offsetHeight, O = Math.max(p.current.minHeight || 50, T - 10);
        u(r.current, { width: r.current.offsetWidth, height: O });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.key === "r") {
        d.preventDefault(), u(r.current, { width: 300, height: 200 });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
    }
  }, [e, k]), P = $(() => {
    a.current && r.current && Ue(a.current, r.current);
  }, []);
  se(() => {
    if (!e.current) return;
    const T = e.current.closest(".editor-viewport");
    return T && (T.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      T && T.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), se(() => {
    if (!e.current) return;
    const d = e.current;
    d.addEventListener("click", b), d.addEventListener("keydown", A);
    const T = d.closest(".editor-viewport");
    return T && T.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      d.removeEventListener("click", b), d.removeEventListener("keydown", A), T && T.removeEventListener("scroll", P), window.removeEventListener("resize", P), h.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && Te(a.current);
    };
  }, [e, b, A, P, v, C]), se(() => {
    if (!e.current) return;
    const d = new MutationObserver((T) => {
      T.forEach((O) => {
        O.type === "childList" && (O.removedNodes.length > 0 && O.removedNodes.forEach((D) => {
          D.nodeType === Node.ELEMENT_NODE && pe(D) && D === r.current && k();
        }), O.addedNodes.length > 0 && O.addedNodes.forEach((D) => {
          if (D.nodeType === Node.ELEMENT_NODE)
            if (pe(D))
              setTimeout(() => {
                f(D);
              }, 50);
            else {
              const M = D.querySelectorAll ? D.querySelectorAll("img") : [];
              M.length > 0 && setTimeout(() => {
                f(M[0]);
              }, 50);
            }
        }));
      });
    });
    return d.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      d.disconnect();
    };
  }, [e, k, f]);
  function B(d) {
    switch (d) {
      case R.TOP_LEFT:
      case R.BOTTOM_RIGHT:
        return "nwse-resize";
      case R.TOP_RIGHT:
      case R.BOTTOM_LEFT:
        return "nesw-resize";
      case R.TOP:
      case R.BOTTOM:
        return "ns-resize";
      case R.LEFT:
      case R.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function g({
    handler: d,
    startX: T,
    startY: O,
    currentX: D,
    currentY: M,
    startWidth: j,
    startHeight: F,
    options: z = he
  }) {
    const oe = D - T, Q = M - O;
    let Z = j, q = F;
    switch (d) {
      case R.TOP_LEFT:
        Z = Math.max(z.minWidth, j - oe), q = Math.max(z.minHeight, F - Q);
        break;
      case R.TOP_RIGHT:
        Z = Math.max(z.minWidth, j + oe), q = Math.max(z.minHeight, F - Q);
        break;
      case R.BOTTOM_LEFT:
        Z = Math.max(z.minWidth, j - oe), q = Math.max(z.minHeight, F + Q);
        break;
      case R.BOTTOM_RIGHT:
        Z = Math.max(z.minWidth, j + oe), q = Math.max(z.minHeight, F + Q);
        break;
      case R.TOP:
        q = Math.max(z.minHeight, F - Q);
        break;
      case R.BOTTOM:
        q = Math.max(z.minHeight, F + Q);
        break;
      case R.LEFT:
        Z = Math.max(z.minWidth, j - oe);
        break;
      case R.RIGHT:
        Z = Math.max(z.minWidth, j + oe);
        break;
      default:
        return { width: Z, height: q };
    }
    if (z.preserveAspectRatio && z.aspectRatio) {
      const ae = j / F;
      [
        R.TOP_LEFT,
        R.TOP_RIGHT,
        R.BOTTOM_LEFT,
        R.BOTTOM_RIGHT
      ].includes(d) ? Z / ae > q ? q = Math.max(z.minHeight, Z / ae) : Z = Math.max(z.minWidth, q * ae) : [R.TOP, R.BOTTOM].includes(d) ? Z = q * ae : [R.LEFT, R.RIGHT].includes(d) && (q = Z / ae);
    }
    return z.maxWidth && Z > z.maxWidth && (Z = z.maxWidth, z.preserveAspectRatio && z.aspectRatio && (q = Z / (j / F))), z.maxHeight && q > z.maxHeight && (q = z.maxHeight, z.preserveAspectRatio && z.aspectRatio && (Z = q * (j / F))), Z = Math.max(z.minWidth, Z), q = Math.max(z.minHeight, q), {
      width: Math.round(Z),
      height: Math.round(q)
    };
  }
  function u(d, { width: T, height: O }) {
    pe(d) && (d.tagName === "IMG" ? (d.style.width = `${T}px`, d.style.height = `${O}px`, d.width = T, d.height = O) : d.tagName === "DIV" && (d.style.width = `${T}px`, d.style.height = `${O}px`));
  }
  return null;
};
yt.propTypes = {
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
yt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: he
};
const Et = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, s] = de({ top: 0, left: 0 }), [m, p] = de(!1), [h, y] = de("top"), [f, k] = de(a), _ = re(null), v = re(null), C = Se(), b = (M) => {
    if (!M)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (F) => setTimeout(F, 16))(() => {
      const F = document.querySelector(".image-resize-overlay");
      F && Ue(F, M);
    });
  }, A = (M) => {
    if (!M) return null;
    const j = window.getComputedStyle(M);
    return {
      float: j.float || "none",
      margin: M.style.margin || "",
      display: j.display || "inline",
      width: M.style.width || M.width || "",
      height: M.style.height || M.height || "",
      aspectRatio: f
    };
  }, P = () => {
    if (!e) return "left";
    const M = window.getComputedStyle(e);
    return M.float || M.display === "block" ? "left" : M.display === "flex" && M.justifyContent === "center" ? "center" : M.float === "right" ? "right" : "left";
  }, [B, g] = de(P());
  se(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), se(() => {
    if (e) {
      let M = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      M && (v.current = M);
    }
  }, [e]), On(() => {
    if (!e || !_.current) return;
    const M = () => {
      const F = e.getBoundingClientRect(), z = _.current.getBoundingClientRect();
      v.current;
      const oe = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, Q = F.bottom >= 0 && F.top <= oe.height && F.right >= 0 && F.left <= oe.width;
      let Z = "top", q = 0, ae = 0;
      if (Q) {
        const I = F.top - z.height - 10, Y = oe.height - F.bottom - z.height - 10;
        Y > I && Y > 0 ? (Z = "bottom", q = F.bottom + 10) : (Z = "top", q = F.top - z.height - 10);
      } else
        Z = "top", q = 10;
      ae = F.left + F.width / 2 - z.width / 2;
      const E = window.innerWidth, c = window.innerHeight;
      let w = ae, N = q;
      ae < 10 ? w = 10 : ae + z.width > E - 10 && (w = E - z.width - 10), q < 10 ? N = 10 : q + z.height > c - 10 && (N = c - z.height - 10), s({
        top: N,
        left: w
      }), y(Z), p(!0);
    };
    M();
    const j = () => {
      M();
    };
    return v.current && v.current.addEventListener("scroll", j), window.addEventListener("scroll", j), window.addEventListener("resize", j), () => {
      v.current && v.current.removeEventListener("scroll", j), window.removeEventListener("scroll", j), window.removeEventListener("resize", j), p(!1);
    };
  }, [e]), se(() => {
    const M = (j) => {
      _.current && !_.current.contains(j.target) && j.target !== e && i();
    };
    return document.addEventListener("mousedown", M), () => {
      document.removeEventListener("mousedown", M);
    };
  }, [e, i]);
  const u = () => {
    if (e) {
      const M = A(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", g("left"), b(e);
      const j = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: j } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("left");
    }
  }, d = () => {
    if (e) {
      const M = A(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", g("center"), b(e);
      const j = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: j } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("center");
    }
  }, T = () => {
    if (e) {
      const M = A(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", g("right"), b(e);
      const j = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: j } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("right");
    }
  }, O = () => {
    if (e && e.parentNode) {
      const M = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      C.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: M } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, D = () => {
    const M = f, j = !f;
    k(j), C.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: j } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: M } }
    ), o && o(j);
  };
  return !e || typeof document > "u" ? null : Mn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: _,
        className: "image-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !m,
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
          pointerEvents: m ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: m ? 1 : 0,
          visibility: m ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: D,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ l.jsx(ko, { size: 14 }) : /* @__PURE__ */ l.jsx(lo, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "left" ? "active" : ""}`,
              onClick: u,
              title: "Align Left",
              style: {
                background: B === "left" ? "#007bff" : "transparent",
                color: B === "left" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "center" ? "active" : ""}`,
              onClick: d,
              title: "Align Center",
              style: {
                background: B === "center" ? "#007bff" : "transparent",
                color: B === "center" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "right" ? "active" : ""}`,
              onClick: T,
              title: "Align Right",
              style: {
                background: B === "right" ? "#007bff" : "transparent",
                color: B === "right" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(gn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: O,
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
              children: /* @__PURE__ */ l.jsx(Uo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Et.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
Et.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const da = 50, et = 50, Wt = 50, fa = 100, pa = 500, Zt = "UPDATE_CONTINUOUS_CONTENT", bt = ut(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: m = !0,
  showPageManager: p = !0
}, h) => {
  const y = Qt(), f = Se(), { pageSize: k, pageMargins: _, continuousContent: v, pageBoundaries: C, activePage: b, zoomLevel: A, canUndo: P, canRedo: B } = y, g = re(null), u = re(null), { currentFormat: d, formatText: T, updateCurrentFormatFromSelection: O } = nr(), [D, M] = de(!1), [j, F] = de(null), [z, oe] = de(!0), Q = re(null), {
    checkAndUpdateBoundaries: Z,
    getCurrentPage: q,
    scrollToPage: ae,
    updateBoundaries: E,
    triggerAutoReflow: c,
    removePageAndContent: w,
    removePageBreak: N,
    insertPageBreakAtBoundary: I
  } = Rr(k, u, A, _), Y = ze(() => ft(k), [k]), [W, H] = de(!1), G = re(null), V = re(!1), K = re(!1), ie = re(!1), S = re(v);
  se(() => {
    if (u.current) {
      if (!ie.current) {
        u.current.innerHTML = v, ie.current = !0, S.current = v;
        const L = setTimeout(() => {
          E();
        }, da);
        return () => clearTimeout(L);
      }
      if (S.current !== v) {
        if (u.current.innerHTML !== v) {
          u.current.innerHTML = v;
          const J = setTimeout(() => {
            if (E(), V.current) {
              V.current = !1;
              const ne = Math.max(0, C.length - 1);
              f.setActivePage(ne), setTimeout(() => {
                ae(ne, g);
              }, Wt);
            }
          }, et);
          return S.current = v, () => clearTimeout(J);
        }
        S.current = v;
      }
    }
  }, [v, E, C.length, f, ae]), se(() => {
    r && ie.current && r(v);
  }, [v, r]), Cn(h, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => u.current ? u.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (u.current ? u.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => u.current ? _r(u.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (L) => {
      const J = He(L);
      J !== v && f.updateContinuousContent(J), u.current && u.current.innerHTML !== J && (u.current.innerHTML = J), S.current = J, u.current && setTimeout(() => {
        E();
      }, et);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (L) => {
      if (!u.current || !L) return;
      const J = He(L), ne = window.getSelection();
      let le = !1;
      if (ne && ne.rangeCount > 0) {
        const Ze = ne.getRangeAt(0);
        u.current.contains(Ze.commonAncestorContainer) && (le = !0);
      }
      if (!le && Q.current)
        try {
          ne.removeAllRanges(), ne.addRange(Q.current);
        } catch (Ze) {
          console.warn("[insertContent] Failed to restore last cursor position:", Ze);
          const xe = u.current.lastChild;
          if (xe) {
            const Ne = document.createRange();
            xe.nodeType === Node.TEXT_NODE ? Ne.setStart(xe, xe.textContent.length) : Ne.setStartAfter(xe), Ne.collapse(!0), ne.removeAllRanges(), ne.addRange(Ne);
          }
        }
      document.execCommand("insertHTML", !1, J);
      const me = u.current.innerHTML;
      f.updateContinuousContent(me), S.current = me, setTimeout(() => {
        E(), c(200);
      }, et);
    }
  }), [v, f, E, u, Q, Z]), se(() => {
    const L = () => {
      if (O(), u.current) {
        const ne = window.getSelection();
        if (ne.rangeCount > 0) {
          const le = ne.getRangeAt(0);
          le.collapsed && u.current.contains(le.commonAncestorContainer) && (Q.current = le.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", L);
    const J = () => {
      if (setTimeout(O, 10), Q.current && u.current)
        try {
          const ne = window.getSelection();
          ne.removeAllRanges(), ne.addRange(Q.current);
        } catch (ne) {
          console.warn("[handleFocus] Failed to restore cursor:", ne);
        }
    };
    return u.current && u.current.addEventListener("focus", J), () => {
      document.removeEventListener("selectionchange", L), u.current && u.current.removeEventListener("focus", J);
    };
  }, [O]);
  const ce = $(() => {
    if (!u.current) return;
    let L = u.current.innerHTML;
    L = He(L), L !== u.current.innerHTML && (u.current.innerHTML = L);
    const J = v;
    if (J !== L) {
      const le = {
        type: Zt,
        payload: L
      }, me = {
        type: Zt,
        payload: J
      };
      f.recordOperation(le, me);
    }
    f.updateContinuousContent(L), Z(), c(200);
    const ne = q(g);
    ne !== b && f.setActivePage(ne);
  }, [f, Z, q, b, c, g, u, v]), be = $((L) => {
    ce();
  }, [ce]), ve = $((L) => {
    f.updatePageSize(L), E({ pageSize: L }), i && i(L);
  }, [f, E, i]), Tt = $((L) => {
    f.updatePageMargins(L), E({ pageMargins: L }), a && a(L);
  }, [f, E, a]), vt = $((L) => {
    L < 0 || L >= C.length || (K.current = !0, f.setActivePage(L), ae(L, g), setTimeout(() => {
      K.current = !1;
    }, pa), t && t(L));
  }, [f, ae, t, C.length]), xt = $(() => {
    const L = C.length + 1;
    I(L) && (V.current = !0, setTimeout(() => {
      if (V.current) {
        V.current = !1;
        const ne = Math.max(0, C.length - 1);
        f.setActivePage(ne), setTimeout(() => {
          ae(ne, g);
        }, Wt);
      }
    }, 100)), o && o();
  }, [C.length, I, f, ae, o]), Tn = $(() => {
    const L = window.getSelection();
    if (L && L.rangeCount > 0) {
      if (!u?.current) return;
      const le = `<page-break data-page-break="true" contenteditable="false" data-page-number="${u.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, le), setTimeout(() => {
        E();
        const me = q(g);
        f.setActivePage(me);
      }, 150);
    }
  }, [E, q, f, g]), vn = $((L) => {
    if (!L) return;
    N(L) && setTimeout(() => {
      const ne = q(g);
      f.setActivePage(ne);
    }, 200);
  }, [N, q, f, g]), At = $((L) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    w(L) && (f.setActivePage(0), n && n(L));
  }, [C.length, w, f, n]), Oe = $(() => {
    f.zoomIn();
  }, [f]), Ce = $(() => {
    f.zoomOut();
  }, [f]), Me = $(() => {
    f.resetZoom();
  }, [f]), Pt = $(() => {
    f.undo();
  }, [f]), _t = $(() => {
    f.redo();
  }, [f]);
  se(() => {
    const L = (J) => {
      if (J.ctrlKey || J.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(J.key) && J.preventDefault();
        const ne = document.activeElement === u.current, le = document.activeElement === g.current, me = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ne || le || !me)
          switch (J.key) {
            case "+":
            case "=":
              Oe();
              break;
            case "-":
            case "_":
              Ce();
              break;
            case "0":
              Me();
              break;
            case "z":
              J.shiftKey || Pt();
              break;
            case "y":
              _t();
              break;
          }
      }
    };
    return window.addEventListener("keydown", L), () => {
      window.removeEventListener("keydown", L);
    };
  }, [Oe, Ce, Me, Pt, _t]);
  const xn = $(() => {
    !g.current || !u.current || K.current || (G.current && clearTimeout(G.current), G.current = setTimeout(() => {
      if (K.current) {
        G.current = null;
        return;
      }
      const L = q(g);
      L !== b && L >= 0 && f.setActivePage(L), G.current = null;
    }, fa));
  }, [q, b, f]), An = ze(() => {
    if (!v) return 0;
    const J = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return J ? J.length : 0;
  }, [v]), Pn = C.length || 1, _n = $((L) => {
    M(!0), F(L);
  }, []), wt = $(() => {
    M(!1), F(null);
  }, []), wn = $((L, J) => {
  }, []);
  return se(() => () => {
    G.current && clearTimeout(G.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    m && /* @__PURE__ */ l.jsx(
      gt,
      {
        currentFormat: {
          ...d,
          imageSelected: D
        },
        onFormatText: T,
        onAddPageBreak: Tn,
        canUndo: P,
        canRedo: B
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        Qo,
        {
          editorView: null,
          isCollapsed: W,
          onToggle: () => H((L) => !L),
          wordCount: An,
          pageCount: Pn
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: g,
          onScroll: xn,
          children: /* @__PURE__ */ l.jsx(
            ht,
            {
              content: v,
              dimensions: Y,
              pageSize: k,
              pageMargins: _,
              pageBoundaries: C,
              editorRef: u,
              onInput: be,
              onContentChange: ce,
              onClick: () => u.current?.focus(),
              onRemovePageBreak: vn,
              zoomLevel: A
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        yt,
        {
          editorRef: u,
          onImageSelect: _n,
          onImageDeselect: wt,
          onImageResize: wn,
          resizeOptions: {
            ...he,
            preserveAspectRatio: z,
            aspectRatio: z
          }
        }
      ),
      D && j && /* @__PURE__ */ l.jsx(
        Et,
        {
          imageElement: j,
          initialPreserveAspectRatio: z,
          onAlignChange: (L) => {
          },
          onAspectRatioToggle: (L) => {
            oe(L);
          },
          onDelete: () => {
            if (j) {
              const L = j.getAttribute("data-key");
              L && Nr(L).catch((J) => {
                console.error("Failed to delete image from IndexedDB:", J);
              });
            }
          },
          onClose: wt
        }
      ),
      p && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? qe.cloneElement(e, {
        onNavigate: vt,
        onAddPage: xt,
        onDeletePage: At,
        onPageSizeChange: ve,
        onPageMarginsChange: Tt,
        zoomLevel: A,
        canZoomIn: at(A),
        canZoomOut: it(A),
        onZoomIn: Oe,
        onZoomOut: Ce,
        onZoomReset: Me
      }) : /* @__PURE__ */ l.jsx(
        ua,
        {
          pageBoundaries: C,
          activePage: b,
          pageSize: k,
          pageMargins: _,
          zoomLevel: A,
          canZoomIn: at(A),
          canZoomOut: it(A),
          onNavigate: vt,
          onAddPage: xt,
          onDeletePage: At,
          onPageSizeChange: ve,
          onPageMarginsChange: Tt,
          onZoomIn: Oe,
          onZoomOut: Ce,
          onZoomReset: Me
        }
      ) })
    ] })
  ] });
});
bt.displayName = "HtmlEditor";
bt.propTypes = {
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
bt.defaultProps = {
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
class bn extends qe.Component {
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
  componentDidCatch(t, o) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", o), this.setState({
      error: t,
      errorInfo: o
    }), this.props.onError && this.props.onError(t, o);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ l.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ l.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ l.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ l.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ l.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ l.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ l.jsx(
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
bn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
bn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Sa = {
  A4: { width: ue.A4.width, height: ue.A4.height },
  Letter: { width: ue.Letter.width, height: ue.Letter.height },
  Legal: { width: ue.Legal.width, height: ue.Legal.height }
};
export {
  Xn as COMMON_FONT_SIZES,
  We as DEFAULT_FONT_SIZE,
  he as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Vt as DEFAULT_PAGE_SIZE,
  ba as DocumentProvider,
  gt as EditorToolbar,
  bn as ErrorBoundary,
  nn as FONT_SIZE_MAP,
  bt as HtmlEditor,
  yt as ImageResizeHandlers,
  Sa as PAGE_DIMENSIONS,
  ue as PAGE_SIZES,
  ua as PageManager,
  ht as PageView,
  R as RESIZE_HANDLERS,
  Qo as Sidebar,
  _a as applyImageDimensions,
  Aa as calculateResizeDimensions,
  wa as clearImages,
  rn as createResizeOverlay,
  Nr as deleteImage,
  Ra as getAllImageKeys,
  Ea as getAvailablePageSizes,
  Mr as getImage,
  Pa as getImageDimensions,
  ft as getPageDimensions,
  Ta as getPixelValue,
  va as getPointValue,
  pe as isResizableImage,
  xa as isValidFontSize,
  ya as isValidPageSize,
  ea as logger,
  Qn as pixelsToPoints,
  Jn as pointsToPixels,
  Te as removeResizeOverlay,
  Cr as saveImage,
  Ue as updateResizeOverlay,
  Rr as useContinuousReflow,
  Jt as useDocument,
  Se as useDocumentActions,
  Qt as useDocumentState,
  nr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
