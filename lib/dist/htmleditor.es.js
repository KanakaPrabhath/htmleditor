import ot, { createContext as dr, useContext as fr, useReducer as pr, useMemo as Te, useState as oe, useCallback as k, useRef as ee, useEffect as se, forwardRef as Ot, createElement as mt, memo as gr, useLayoutEffect as vn, useImperativeHandle as hr } from "react";
import { v4 as kt } from "uuid";
import { createPortal as wn } from "react-dom";
function mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ze = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function yr() {
  if (en) return Ne;
  en = 1;
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
  return Ne.Fragment = t, Ne.jsx = r, Ne.jsxs = r, Ne;
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
var tn;
function br() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === W ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case A:
          return "Fragment";
        case M:
          return "Profiler";
        case $:
          return "StrictMode";
        case y:
          return "Suspense";
        case I:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case v:
            return "Portal";
          case h:
            return f.displayName || "Context";
          case P:
            return (f._context.displayName || "Context") + ".Consumer";
          case p:
            var _ = f.render;
            return f = f.displayName, f || (f = _.displayName || _.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case S:
            return _ = f.displayName || null, _ !== null ? _ : e(f.type) || "Memo";
          case j:
            _ = f._payload, f = f._init;
            try {
              return e(f(_));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function r(f) {
      try {
        t(f);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var H = _.error, L = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return H.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(f);
      }
    }
    function n(f) {
      if (f === A) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === j)
        return "<...>";
      try {
        var _ = e(f);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var f = B.A;
      return f === null ? null : f.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(f) {
      if (E.call(f, "key")) {
        var _ = Object.getOwnPropertyDescriptor(f, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function i(f, _) {
      function H() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: H,
        configurable: !0
      });
    }
    function g() {
      var f = e(this.type);
      return Y[f] || (Y[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, _, H, L, V, G) {
      var z = H.ref;
      return f = {
        $$typeof: b,
        type: f,
        key: _,
        props: H,
        _owner: L
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: g
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
        value: V
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function c(f, _, H, L, V, G) {
      var z = _.children;
      if (z !== void 0)
        if (L)
          if (O(z)) {
            for (L = 0; L < z.length; L++)
              u(z[L]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(z);
      if (E.call(_, "key")) {
        z = e(f);
        var U = Object.keys(_).filter(function(Q) {
          return Q !== "key";
        });
        L = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", x[z + L] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          z,
          U,
          z
        ), x[z + L] = !0);
      }
      if (z = null, H !== void 0 && (r(H), z = "" + H), s(_) && (r(_.key), z = "" + _.key), "key" in _) {
        H = {};
        for (var X in _)
          X !== "key" && (H[X] = _[X]);
      } else H = _;
      return z && i(
        H,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        z,
        H,
        a(),
        V,
        G
      );
    }
    function u(f) {
      d(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === j && (f._payload.status === "fulfilled" ? d(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function d(f) {
      return typeof f == "object" && f !== null && f.$$typeof === b;
    }
    var T = ot, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), B = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, O = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var N, Y = {}, te = T.react_stack_bottom_frame.bind(
      T,
      o
    )(), ae = C(n(o)), x = {};
    Pe.Fragment = A, Pe.jsx = function(f, _, H) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return c(
        f,
        _,
        H,
        !1,
        L ? Error("react-stack-top-frame") : te,
        L ? C(n(f)) : ae
      );
    }, Pe.jsxs = function(f, _, H) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return c(
        f,
        _,
        H,
        !0,
        L ? Error("react-stack-top-frame") : te,
        L ? C(n(f)) : ae
      );
    };
  })()), Pe;
}
var nn;
function Tr() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? Ze.exports = yr() : Ze.exports = br()), Ze.exports;
}
var m = Tr();
const yt = 100, bt = 50, Tt = 200, rn = 5, vt = (e) => e < Tt, wt = (e) => e > bt, vr = 96, ye = (e) => Math.round(e * vr), tt = {
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
}, he = "NORMAL", xn = (e = he) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ye(e.top),
      bottom: ye(e.bottom),
      left: ye(e.left),
      right: ye(e.right)
    };
  const t = tt[e] || tt[he];
  return {
    top: ye(t.top),
    bottom: ye(t.bottom),
    left: ye(t.left),
    right: ye(t.right)
  };
}, wr = (e = he) => {
  const t = xn(e);
  return t.top + t.bottom;
}, xr = () => Object.keys(tt), Er = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = tt[e];
  return t ? t.label : "Unknown";
}, nt = {
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
}, En = "A4", He = (e) => {
  const t = nt[e] || nt[En];
  return {
    width: t.width,
    height: t.height
  };
}, Oa = (e) => Object.keys(nt).includes(e), ka = () => Object.keys(nt), De = En, Re = "<p><br></p>", Cr = "continuous", Me = (e, t = De) => ({
  id: kt(),
  index: e,
  size: t,
  content: Re,
  images: [],
  isBreakPoint: !1
}), Qe = (e) => typeof e != "string" || e.trim() === "" ? Re : e, Cn = (e, t = De) => (e.length > 0 ? e : [Me(0, t)]).map((n, a) => ({
  id: n.id || kt(),
  index: a,
  size: n.size || t,
  content: Qe(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Ar = (e = De) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: He(e).height
}], Ye = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), xt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || De, n = Cn(e.pages || [Me(0, r)], r);
  return {
    id: kt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Cr,
    continuousContent: e.continuousContent || Re,
    pageBoundaries: e.pageBoundaries || Ar(r),
    zoomLevel: e.zoomLevel || yt,
    pageMargins: e.pageMargins || he,
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
}, Et = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Re, pageSize: a = De } = t.payload || {}, o = { ...Me(0, a), content: Qe(n) };
      return xt({
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
        content: Qe(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Cn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : Ye(a);
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
      a.splice(n, 0, Me(n, e.pageSize));
      const o = a.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), s = Ye(o);
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
      const o = a.map((g, l) => ({
        ...g,
        index: l,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = Ye(o);
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
        He(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = Ye(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Z.RESET_DOCUMENT:
      return xt();
    case Z.UPDATE_CONTINUOUS_CONTENT: {
      const n = Qe(t.payload);
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
        const i = s.substring(0, n), g = s.substring(n);
        s = i + o + g;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && g.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < g.length) {
          const l = g[a], c = document.createElement("page-break");
          c.setAttribute("data-page-break", "true"), c.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", l.parentNode.insertBefore(c, l.nextSibling), c.parentNode.insertBefore(u, c.nextSibling), s = i.innerHTML;
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
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
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
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Re).join(`
`) || Re : e.continuousContent && e.continuousContent !== Re && (o = [{ ...Me(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < bt || n > Tt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${bt} and ${Tt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_IN: {
      if (!vt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_OUT: {
      if (!wt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.RESET_ZOOM:
      return e.zoomLevel === yt ? e : {
        ...e,
        zoomLevel: yt,
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
      return n.inverseOperation && (o = Et(e, n.inverseOperation)), {
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
      return n.operation && (o = Et(e, n.operation)), {
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
}, An = dr(null), _a = ({ children: e, initialState: t = {} }) => {
  const [r, n] = pr(Et, xt(t)), a = Te(() => ({
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
  }), []), o = Te(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ m.jsx(An.Provider, { value: o, children: e });
}, Rn = () => {
  const e = fr(An);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Sn = () => {
  const { state: e } = Rn();
  return e;
}, we = () => {
  const { actions: e } = Rn();
  return e;
};
var Ve = { exports: {} }, Ke = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Rr() {
  if (on) return ne;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function P(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case t:
          switch (p = p.type, p) {
            case g:
            case l:
            case n:
            case o:
            case a:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case c:
                case b:
                case T:
                case s:
                  return p;
                default:
                  return y;
              }
          }
        case r:
          return y;
      }
    }
  }
  function h(p) {
    return P(p) === l;
  }
  return ne.AsyncMode = g, ne.ConcurrentMode = l, ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = c, ne.Fragment = n, ne.Lazy = b, ne.Memo = T, ne.Portal = r, ne.Profiler = o, ne.StrictMode = a, ne.Suspense = u, ne.isAsyncMode = function(p) {
    return h(p) || P(p) === g;
  }, ne.isConcurrentMode = h, ne.isContextConsumer = function(p) {
    return P(p) === i;
  }, ne.isContextProvider = function(p) {
    return P(p) === s;
  }, ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ne.isForwardRef = function(p) {
    return P(p) === c;
  }, ne.isFragment = function(p) {
    return P(p) === n;
  }, ne.isLazy = function(p) {
    return P(p) === b;
  }, ne.isMemo = function(p) {
    return P(p) === T;
  }, ne.isPortal = function(p) {
    return P(p) === r;
  }, ne.isProfiler = function(p) {
    return P(p) === o;
  }, ne.isStrictMode = function(p) {
    return P(p) === a;
  }, ne.isSuspense = function(p) {
    return P(p) === u;
  }, ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === l || p === o || p === a || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === T || p.$$typeof === s || p.$$typeof === i || p.$$typeof === c || p.$$typeof === A || p.$$typeof === $ || p.$$typeof === M || p.$$typeof === v);
  }, ne.typeOf = P, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Sr() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function P(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === l || D === o || D === a || D === u || D === d || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === T || D.$$typeof === s || D.$$typeof === i || D.$$typeof === c || D.$$typeof === A || D.$$typeof === $ || D.$$typeof === M || D.$$typeof === v);
    }
    function h(D) {
      if (typeof D == "object" && D !== null) {
        var de = D.$$typeof;
        switch (de) {
          case t:
            var Oe = D.type;
            switch (Oe) {
              case g:
              case l:
              case n:
              case o:
              case a:
              case u:
                return Oe;
              default:
                var Be = Oe && Oe.$$typeof;
                switch (Be) {
                  case i:
                  case c:
                  case b:
                  case T:
                  case s:
                    return Be;
                  default:
                    return de;
                }
            }
          case r:
            return de;
        }
      }
    }
    var p = g, y = l, I = i, S = s, j = t, q = c, W = n, B = b, E = T, O = r, C = o, N = a, Y = u, te = !1;
    function ae(D) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(D) || h(D) === g;
    }
    function x(D) {
      return h(D) === l;
    }
    function f(D) {
      return h(D) === i;
    }
    function _(D) {
      return h(D) === s;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function L(D) {
      return h(D) === c;
    }
    function V(D) {
      return h(D) === n;
    }
    function G(D) {
      return h(D) === b;
    }
    function z(D) {
      return h(D) === T;
    }
    function U(D) {
      return h(D) === r;
    }
    function X(D) {
      return h(D) === o;
    }
    function Q(D) {
      return h(D) === a;
    }
    function ce(D) {
      return h(D) === u;
    }
    re.AsyncMode = p, re.ConcurrentMode = y, re.ContextConsumer = I, re.ContextProvider = S, re.Element = j, re.ForwardRef = q, re.Fragment = W, re.Lazy = B, re.Memo = E, re.Portal = O, re.Profiler = C, re.StrictMode = N, re.Suspense = Y, re.isAsyncMode = ae, re.isConcurrentMode = x, re.isContextConsumer = f, re.isContextProvider = _, re.isElement = H, re.isForwardRef = L, re.isFragment = V, re.isLazy = G, re.isMemo = z, re.isPortal = U, re.isProfiler = X, re.isStrictMode = Q, re.isSuspense = ce, re.isValidElementType = P, re.typeOf = h;
  })()), re;
}
var an;
function On() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Ke.exports = Rr() : Ke.exports = Sr()), Ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lt, cn;
function Or() {
  if (cn) return lt;
  cn = 1;
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
      var g = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lt = a() ? Object.assign : function(o, s) {
    for (var i, g = n(o), l, c = 1; c < arguments.length; c++) {
      i = Object(arguments[c]);
      for (var u in i)
        t.call(i, u) && (g[u] = i[u]);
      if (e) {
        l = e(i);
        for (var d = 0; d < l.length; d++)
          r.call(i, l[d]) && (g[l[d]] = i[l[d]]);
      }
    }
    return g;
  }, lt;
}
var ut, ln;
function _t() {
  if (ln) return ut;
  ln = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ut = e, ut;
}
var dt, un;
function kn() {
  return un || (un = 1, dt = Function.call.bind(Object.prototype.hasOwnProperty)), dt;
}
var ft, dn;
function kr() {
  if (dn) return ft;
  dn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _t(), r = {}, n = /* @__PURE__ */ kn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, g, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (n(o, c)) {
          var u;
          try {
            if (typeof o[c] != "function") {
              var d = Error(
                (g || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            u = o[c](s, c, g, i, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var T = l ? l() : "";
            e(
              "Failed " + i + " type: " + u.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ft = a, ft;
}
var pt, fn;
function _r() {
  if (fn) return pt;
  fn = 1;
  var e = On(), t = Or(), r = /* @__PURE__ */ _t(), n = /* @__PURE__ */ kn(), a = /* @__PURE__ */ kr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return pt = function(i, g) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function u(x) {
      var f = x && (l && x[l] || x[c]);
      if (typeof f == "function")
        return f;
    }
    var d = "<<anonymous>>", T = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: M(),
      arrayOf: P,
      element: h(),
      elementType: p(),
      instanceOf: y,
      node: q(),
      objectOf: S,
      oneOf: I,
      oneOfType: j,
      shape: B,
      exact: E
    };
    function b(x, f) {
      return x === f ? x !== 0 || 1 / x === 1 / f : x !== x && f !== f;
    }
    function v(x, f) {
      this.message = x, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function A(x) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, _ = 0;
      function H(V, G, z, U, X, Q, ce) {
        if (U = U || d, Q = Q || z, ce !== r) {
          if (g) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = U + ":" + z;
            !f[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[de] = !0, _++);
          }
        }
        return G[z] == null ? V ? G[z] === null ? new v("The " + X + " `" + Q + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new v("The " + X + " `" + Q + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : x(G, z, U, X, Q);
      }
      var L = H.bind(null, !1);
      return L.isRequired = H.bind(null, !0), L;
    }
    function $(x) {
      function f(_, H, L, V, G, z) {
        var U = _[H], X = N(U);
        if (X !== x) {
          var Q = Y(U);
          return new v(
            "Invalid " + V + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return A(f);
    }
    function M() {
      return A(s);
    }
    function P(x) {
      function f(_, H, L, V, G) {
        if (typeof x != "function")
          return new v("Property `" + G + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var z = _[H];
        if (!Array.isArray(z)) {
          var U = N(z);
          return new v("Invalid " + V + " `" + G + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected an array."));
        }
        for (var X = 0; X < z.length; X++) {
          var Q = x(z, X, L, V, G + "[" + X + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return A(f);
    }
    function h() {
      function x(f, _, H, L, V) {
        var G = f[_];
        if (!i(G)) {
          var z = N(G);
          return new v("Invalid " + L + " `" + V + "` of type " + ("`" + z + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(x);
    }
    function p() {
      function x(f, _, H, L, V) {
        var G = f[_];
        if (!e.isValidElementType(G)) {
          var z = N(G);
          return new v("Invalid " + L + " `" + V + "` of type " + ("`" + z + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(x);
    }
    function y(x) {
      function f(_, H, L, V, G) {
        if (!(_[H] instanceof x)) {
          var z = x.name || d, U = ae(_[H]);
          return new v("Invalid " + V + " `" + G + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return A(f);
    }
    function I(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(_, H, L, V, G) {
        for (var z = _[H], U = 0; U < x.length; U++)
          if (b(z, x[U]))
            return null;
        var X = JSON.stringify(x, function(ce, D) {
          var de = Y(D);
          return de === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + V + " `" + G + "` of value `" + String(z) + "` " + ("supplied to `" + L + "`, expected one of " + X + "."));
      }
      return A(f);
    }
    function S(x) {
      function f(_, H, L, V, G) {
        if (typeof x != "function")
          return new v("Property `" + G + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var z = _[H], U = N(z);
        if (U !== "object")
          return new v("Invalid " + V + " `" + G + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected an object."));
        for (var X in z)
          if (n(z, X)) {
            var Q = x(z, X, L, V, G + "." + X, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return A(f);
    }
    function j(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < x.length; f++) {
        var _ = x[f];
        if (typeof _ != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(_) + " at index " + f + "."
          ), s;
      }
      function H(L, V, G, z, U) {
        for (var X = [], Q = 0; Q < x.length; Q++) {
          var ce = x[Q], D = ce(L, V, G, z, U, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && X.push(D.data.expectedType);
        }
        var de = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + z + " `" + U + "` supplied to " + ("`" + G + "`" + de + "."));
      }
      return A(H);
    }
    function q() {
      function x(f, _, H, L, V) {
        return O(f[_]) ? null : new v("Invalid " + L + " `" + V + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return A(x);
    }
    function W(x, f, _, H, L) {
      return new v(
        (x || "React class") + ": " + f + " type `" + _ + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function B(x) {
      function f(_, H, L, V, G) {
        var z = _[H], U = N(z);
        if (U !== "object")
          return new v("Invalid " + V + " `" + G + "` of type `" + U + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var X in x) {
          var Q = x[X];
          if (typeof Q != "function")
            return W(L, V, G, X, Y(Q));
          var ce = Q(z, X, L, V, G + "." + X, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return A(f);
    }
    function E(x) {
      function f(_, H, L, V, G) {
        var z = _[H], U = N(z);
        if (U !== "object")
          return new v("Invalid " + V + " `" + G + "` of type `" + U + "` " + ("supplied to `" + L + "`, expected `object`."));
        var X = t({}, _[H], x);
        for (var Q in X) {
          var ce = x[Q];
          if (n(x, Q) && typeof ce != "function")
            return W(L, V, G, Q, Y(ce));
          if (!ce)
            return new v(
              "Invalid " + V + " `" + G + "` key `" + Q + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(_[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var D = ce(z, Q, L, V, G + "." + Q, r);
          if (D)
            return D;
        }
        return null;
      }
      return A(f);
    }
    function O(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(O);
          if (x === null || i(x))
            return !0;
          var f = u(x);
          if (f) {
            var _ = f.call(x), H;
            if (f !== x.entries) {
              for (; !(H = _.next()).done; )
                if (!O(H.value))
                  return !1;
            } else
              for (; !(H = _.next()).done; ) {
                var L = H.value;
                if (L && !O(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(x, f) {
      return x === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function N(x) {
      var f = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : C(f, x) ? "symbol" : f;
    }
    function Y(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var f = N(x);
      if (f === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function te(x) {
      var f = Y(x);
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
    function ae(x) {
      return !x.constructor || !x.constructor.name ? d : x.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, pt;
}
var gt, pn;
function Nr() {
  if (pn) return gt;
  pn = 1;
  var e = /* @__PURE__ */ _t();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, gt = function() {
    function n(s, i, g, l, c, u) {
      if (u !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
var gn;
function Pr() {
  if (gn) return Ve.exports;
  if (gn = 1, process.env.NODE_ENV !== "production") {
    var e = On(), t = !0;
    Ve.exports = /* @__PURE__ */ _r()(e.isElement, t);
  } else
    Ve.exports = /* @__PURE__ */ Nr()();
  return Ve.exports;
}
var Mr = /* @__PURE__ */ Pr();
const w = /* @__PURE__ */ mr(Mr), _n = {
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
], st = "16px", Ir = (e) => Math.round(e * 96 / 72), Hr = (e) => Math.round(e * 72 / 96 * 2) / 2, Na = (e) => {
  const t = Object.values(_n).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Ir(e)}px`;
}, Pa = (e) => {
  const t = parseInt(e), r = Object.values(_n).find((n) => n.px === t);
  return r ? r.pt : Hr(t);
}, Ma = (e) => {
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
}, Dr = {
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
}, hn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: st,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, jr = () => {
  const [e, t] = oe(hn), r = we(), n = k((T, b, v = null) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const $ = A.getRangeAt(0);
      if (!$.toString())
        return t((P) => ({ ...P, [T]: b })), !1;
      try {
        const P = document.createElement("span");
        P.style[T] = b;
        const h = $.extractContents();
        return P.appendChild(h), $.insertNode(P), $.selectNodeContents(P), A.removeAllRanges(), A.addRange($), t((p) => ({ ...p, [T]: b })), !0;
      } catch {
        if (v) {
          const P = T === "fontSize" ? Dr[b] || "3" : b;
          return document.execCommand(v, !1, P), t((h) => ({ ...h, [T]: b })), !0;
        }
        return !1;
      }
    } catch (A) {
      return console.warn(`[useFormatting] Style application failed for ${T}:`, A), !1;
    }
  }, []), a = k((T) => n("fontFamily", T, "fontName"), [n]), o = k((T) => n("fontSize", T, "fontSize"), [n]), s = k((T) => n("color", T, "foreColor"), [n]), i = k((T) => {
    t((b) => ({
      ...b,
      alignLeft: T === "left",
      alignCenter: T === "center",
      alignRight: T === "right",
      alignJustify: T === "justify"
    }));
  }, []), g = k((T) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = v.toString(), M = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[T];
      if (!M)
        return !1;
      if (!A) {
        const h = v.startContainer, p = h.nodeType === Node.TEXT_NODE ? h.parentElement : h, y = Le(p) || $r();
        return y && (y.style.textAlign = M, i(M)), !0;
      }
      const P = zr(v);
      if (P.length === 0) {
        const h = document.createElement("p");
        h.style.textAlign = M;
        const p = v.extractContents();
        h.appendChild(p), v.insertNode(h), v.selectNodeContents(h), b.removeAllRanges(), b.addRange(v);
      } else
        P.forEach((h) => {
          h.style.textAlign = M;
        });
      return i(M), !0;
    } catch (b) {
      return console.warn("[useFormatting] Text alignment failed:", b), !1;
    }
  }, [i]), l = k((T) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = document.createElement("div");
      if (A.innerHTML = T, Array.from(A.children).some(
        (M) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(M.tagName)
      )) {
        const M = v.startContainer, P = M.nodeType === Node.TEXT_NODE ? M.parentElement : M, h = Le(P);
        if (h && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(h.tagName)) {
          const p = h.tagName.toLowerCase();
          if (v.startOffset === 0 && (M === h || M.nodeType === Node.TEXT_NODE && M === h.firstChild))
            h.parentNode.insertBefore(A, h);
          else if (v.startOffset === M.textContent?.length && M === h.lastChild && v.endOffset === M.textContent?.length) {
            const S = h.nextSibling;
            S ? h.parentNode.insertBefore(A, S) : h.parentNode.appendChild(A);
          } else {
            const S = v.extractContents(), j = document.createTextNode(""), q = document.createElement(p);
            q.appendChild(j), q.appendChild(S);
            const W = h.parentNode;
            W.insertBefore(A, h.nextSibling), W.insertBefore(q, A.nextSibling), !h.textContent.trim() && h.children.length === 0 && W.removeChild(h);
          }
        } else
          v.insertNode(A);
        v.setStartAfter(A), v.setEndAfter(A), b.removeAllRanges(), b.addRange(v);
      } else
        document.execCommand("insertHTML", !1, T);
      return !0;
    } catch (b) {
      console.warn("[useFormatting] InsertHTML failed:", b);
      try {
        return document.execCommand("insertHTML", !1, T), !0;
      } catch (v) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", v), !1;
      }
    }
  }, []), c = k((T, b = null) => {
    try {
      if (T === "undo") {
        r.undo();
        return;
      }
      if (T === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (T === "insertHTML" && b) {
        l(b);
        return;
      }
      if (T === "fontSize") {
        o(b);
        return;
      }
      if (T === "fontName") {
        a(b);
        return;
      }
      if (T === "foreColor") {
        s(b);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(T)) {
        g(T);
        return;
      }
      switch (document.execCommand(T, !1, b) || console.warn(`[useFormatting] Command "${T}" failed`), T) {
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
          t((A) => ({ ...A, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${T}":`, v);
    }
  }, [o, a, g, l, r]), u = k(() => {
    try {
      const T = window.getSelection();
      if (!T || T.rangeCount === 0)
        return;
      const b = T.getRangeAt(0), v = b.toString();
      let A = st, $ = "Arial", M = "#000000", P = "p", h = "left";
      if (v) {
        const y = b.startContainer, I = y.nodeType === Node.TEXT_NODE ? y.parentElement : y;
        if (I) {
          const S = window.getComputedStyle(I), j = S.fontSize, q = S.fontFamily;
          j && j.endsWith("px") && (A = j), q && q !== "serif" && ($ = q.split(",")[0].replace(/['"]/g, "").trim());
          const W = S.color;
          W && W !== "rgb(0, 0, 0)" && W !== "#000000" && (W.startsWith("rgb") ? M = Br(W) : M = W);
          const B = Le(I);
          if (B) {
            const E = B.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(E) && (P = E);
            const C = window.getComputedStyle(B).textAlign;
            ["left", "center", "right", "justify"].includes(C) && (h = C);
          }
        }
      }
      const p = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: h === "left",
        alignCenter: h === "center",
        alignRight: h === "right",
        alignJustify: h === "justify",
        fontFamily: $,
        fontSize: A,
        fontColor: M,
        headingLevel: P
      };
      t((y) => ({
        ...y,
        ...p
      }));
    } catch (T) {
      console.warn("[useFormatting] Error updating format from selection:", T);
    }
  }, []), d = k(() => {
    t(hn);
  }, []);
  return {
    currentFormat: e,
    formatText: c,
    resetFormat: d,
    updateCurrentFormatFromSelection: u
  };
};
function Br(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function Le(e) {
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
function zr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = Le(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = Le(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (g) => {
        const l = g.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function $r() {
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
const ve = 'page-break, [data-page-break="true"]', Fr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = He(r), a = e.querySelectorAll(ve), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((g, l) => {
    const u = g.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: u,
      height: n.height
    });
  }), o;
}, Nn = (e, t = 100, r = he) => {
  const n = He(e), a = wr(r), o = n.height - a, s = t / 100;
  return o / s;
}, Ur = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(ve);
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
}, mn = (e) => {
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
}, Wr = (e) => {
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
}, qr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, Gr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const g = Nn(r, n, a) * (t - 1), l = Array.from(e.children);
    let c = 0, u = null;
    for (let d = 0; d < l.length; d++) {
      const T = l[d];
      if (T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true")
        continue;
      const b = Wr(T);
      if (c + b > g) {
        u = T;
        break;
      }
      c += b;
    }
    if (u) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), u.parentNode.insertBefore(d, u), o) {
        const T = e.innerHTML;
        o(T);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const T = document.createElement("p");
      if (T.innerHTML = "<br>", e.appendChild(T), o) {
        const b = e.innerHTML;
        o(b);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Zr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(ve));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let c = !1, u = [], d = null;
    if (t === 0) {
      const b = g[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== b; )
        u.push(v), v = v.nextSibling;
      d = b;
    } else {
      const b = g[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = g[t];
      let A = b.nextSibling;
      for (; A && A !== v; )
        u.push(A), A = A.nextSibling;
      d = b;
    }
    if (l && l.rangeCount > 0) {
      const v = l.getRangeAt(0).startContainer;
      for (const A of u)
        if (A.contains(v) || A === v) {
          c = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), u.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(ve).forEach((b, v) => {
      b.setAttribute("data-page-number", String(v + 2));
    }), c && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const b = e.innerHTML;
      n(b);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, Yr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ve).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Vr = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Yr(t), r) {
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
}, Kr = 200, Xr = 50, yn = 3, Jr = 20, Pn = (e) => {
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
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Pn(o);
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
}, eo = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const g = Nn(t, r, n);
    let l = mn(e), c = !1, u = 0;
    for (let d = 0; d < l.length && u < yn; d++) {
      const T = l[d], b = Qr(T, g);
      if (b && b.overflowIndex > 0) {
        let v = 0;
        for (let P = 0; P < T.length; P++) {
          const h = T[P];
          h && h.getBoundingClientRect && (v += Pn(h));
        }
        if (v - g < Jr)
          continue;
        const $ = d + 2;
        qr(b.overflowElement, $) && (c = !0, u++, l = mn(e));
      }
    }
    if (c) {
      if (a) {
        const d = e.innerHTML;
        a(d);
      }
      setTimeout(() => {
        o && o(), u >= yn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Xr);
    }
    return c;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    s.current = !1;
  }
}, to = (e, t, r = Kr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, no = 400, Mn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(ve)[t - 1];
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
}, ro = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(ve)[r - 1];
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
        n ? n(r) : Mn(t, r);
      }, no);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, oo = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, so = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(ve);
  for (const c of a)
    if (r.comparePoint(c, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), g = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: g
  };
}, ao = 300, io = (e, t, r = 100, n = "NARROW") => {
  const a = we(), o = ee(null), s = ee(null), i = ee(e), g = ee(r), l = ee(n), c = ee(!1);
  se(() => {
    i.current = e;
  }, [e]), se(() => {
    g.current = r;
  }, [r]), se(() => {
    l.current = n;
  }, [n]), se(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const u = k((y = {}) => t?.current ? Fr(t.current, y) : [], [t]), d = k((y = {}) => {
    const I = u(y);
    return a.updatePageBoundaries(I), I;
  }, [u, a]), T = k((y = {}) => {
    const I = typeof y.delay == "number" ? y.delay : ao;
    oo(d, o, y, I);
  }, [d]), b = k(() => {
    t?.current && eo(
      t.current,
      i.current,
      g.current,
      l.current,
      a.updateContinuousContent,
      d,
      c,
      b
    );
  }, [t, a, d]), v = k((y) => {
    to(b, s, y);
  }, [b]), A = k((y) => !y?.current || !t?.current ? 0 : Ur(y.current, t.current), [t]), $ = k((y) => {
    t?.current && Mn(t.current, y);
  }, [t]), M = k((y, I) => {
    if (!I?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    ro(I.current, t.current, y, $);
  }, [t, $]), P = k(async (y) => t?.current ? Gr(
    t.current,
    y,
    i.current,
    g.current,
    l.current,
    a.updateContinuousContent,
    d
  ) : !1, [t, a, d]), h = k((y) => t?.current ? Zr(
    t.current,
    y,
    u,
    a.updateContinuousContent,
    d,
    $,
    b
  ) : !1, [t, u, a, d, $, b]), p = k((y) => t?.current ? Vr(
    y,
    t.current,
    a.updateContinuousContent,
    d,
    b
  ) : !1, [t, a, d, b]);
  return se(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), Te(() => ({
    calculatePageBoundaries: u,
    checkAndUpdateBoundaries: T,
    updateBoundaries: d,
    getCurrentPage: A,
    scrollToPage: M,
    positionCursorAtPage: $,
    checkAndReflow: b,
    triggerAutoReflow: v,
    removePageAndContent: h,
    removePageBreak: p,
    insertPageBreakAtBoundary: P,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    u,
    T,
    d,
    A,
    M,
    $,
    b,
    v,
    h,
    p,
    P
  ]);
}, ke = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, F = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function La({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = ke
}) {
  const g = n - t, l = a - r;
  let c = o, u = s;
  switch (e) {
    case F.TOP_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case F.TOP_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case F.BOTTOM_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case F.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case F.LEFT:
      c = Math.max(i.minWidth, o - g);
      break;
    case F.RIGHT:
      c = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: c, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const d = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? c / d > u ? u = Math.max(i.minHeight, c / d) : c = Math.max(i.minWidth, u * d) : [F.TOP, F.BOTTOM].includes(e) ? c = u * d : [F.LEFT, F.RIGHT].includes(e) && (u = c / d);
  }
  return i.maxWidth && c > i.maxWidth && (c = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = c / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (c = u * (o / s))), c = Math.max(i.minWidth, c), u = Math.max(i.minHeight, u), {
    width: Math.round(c),
    height: Math.round(u)
  };
}
function be(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ia(e) {
  return be(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Ha(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function co(e, t = ke) {
  if (!be(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(F).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = lo(o), s.style.pointerEvents = "all", Ln(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function lo(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ln(e, t, r, n) {
  switch (t) {
    case F.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case F.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case F.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case F.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case F.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case F.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ct(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Ln(a, o, r.width, r.height);
  });
}
function ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const uo = "html-editor-storage", fo = 1, fe = "images";
function po() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function je() {
  return new Promise((e, t) => {
    const r = indexedDB.open(uo, fo);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(fe) || a.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function go(e) {
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
      const s = o.target.result, g = s.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await je(), c = `editor-image-${po()}`, d = l.transaction([fe], "readwrite").objectStore(fe), T = {
          key: c,
          dataUrl: s,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, b = d.add(T);
        b.onsuccess = () => {
          l.close(), t(c);
        }, b.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function ho(e) {
  try {
    const t = await je();
    return new Promise((r, n) => {
      const s = t.transaction([fe], "readonly").objectStore(fe).get(e);
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
async function mo(e) {
  try {
    const t = await je();
    return new Promise((r, n) => {
      const s = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
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
async function Da() {
  try {
    const e = await je();
    return new Promise((t, r) => {
      const o = e.transaction([fe], "readwrite").objectStore(fe).clear();
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
async function ja() {
  try {
    const e = await je();
    return new Promise((t, r) => {
      const o = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
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
const In = [
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
], yo = [
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
], bo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function To(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Hn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function et(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Ie(r) || "<p><br></p>";
}
function vo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function wo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => In.includes(r.tagName));
}
function xo(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      In.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Ie(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${To(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), g = Hn(o);
      if (s === "DIV") {
        const l = Ie(o);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (s === "P")
        wo(o) ? t.push(xo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const l = vo(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(Eo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Co(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const l = Ie(o);
        t.push(`<blockquote${g}>${l}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (yo.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (bo.includes(s))
        t.push(o.outerHTML);
      else {
        const l = Ie(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Eo(e) {
  const t = e.tagName.toLowerCase(), r = Hn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Ie(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Co(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ro = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), bn = (e) => {
  const t = Ro(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Dn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), So = (e) => {
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
var Oo = {
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
const ko = Ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, g) => mt(
    "svg",
    {
      ref: g,
      ...Oo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Dn("lucide", a),
      ...!o && !So(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, c]) => mt(l, c)),
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
const J = (e, t) => {
  const r = Ot(
    ({ className: n, ...a }, o) => mt(ko, {
      ref: o,
      iconNode: t,
      className: Dn(
        `lucide-${Ao(bn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = bn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], No = J("arrow-down", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Mo = J("arrow-left", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Io = J("arrow-right", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Do = J("arrow-up", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Bo = J("bold", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], $o = J("chevron-left", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Uo = J("chevron-right", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], qo = J("file-check", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], rt = J("file-text", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Yo = J("hash", Zo);
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
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Ko = J("heading-1", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Jo = J("heading-2", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], es = J("heading-3", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], ns = J("image-upscale", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], os = J("image", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], as = J("italic", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], cs = J("link", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], us = J("list-indent-decrease", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], fs = J("list-indent-increase", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], gs = J("list-ordered", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], jn = J("list", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
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
], ys = J("palette", ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ts = J("plus", bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ws = J("redo", vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Es = J("scaling", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], As = J("settings", Cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Ss = J("strikethrough", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ks = J("table", Os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nt = J("text-align-center", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Pt = J("text-align-end", Ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ms = J("text-align-justify", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mt = J("text-align-start", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = J("trash-2", Is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ds = J("underline", Hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Bs = J("undo", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], $s = J("x", zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Us = J("zoom-in", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], qs = J("zoom-out", Ws), Tn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), g = o.textContent.trim();
    return g ? {
      id: `${r}heading-${s}`,
      level: i,
      text: g,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Gs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Zs = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = Sn(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: g, outline: l } = Te(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: Tn(i, 1, "continuous-")
      };
    let u = 0;
    const d = [];
    return o.forEach((T, b) => {
      u += Gs(T.content), d.push(...Tn(T.content, b + 1, `page-${b}-`));
    }), { wordCount: u, outline: d };
  }, [o, r, n, i]), c = n !== void 0 ? n : o.length;
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
            /* @__PURE__ */ m.jsx(rt, { size: 18 }),
            /* @__PURE__ */ m.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ m.jsx(Uo, { size: 16 }) : /* @__PURE__ */ m.jsx($o, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(qo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: c })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Yo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(rt, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsxs("h3", { children: [
              /* @__PURE__ */ m.jsx(jn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((u) => {
              const d = u.level === 1 ? Ko : u.level === 2 ? Jo : es;
              return /* @__PURE__ */ m.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${u.level}`,
                  style: { marginLeft: `${(u.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ m.jsx(d, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ m.jsx("span", { className: "outline-text", children: u.text }),
                    /* @__PURE__ */ m.jsxs("span", { className: "outline-page", children: [
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
class Ys {
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
const Ce = new Ys("Editor"), Bn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), zn = 32;
function $n(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * zn}px`, e.dataset.indentLevel = String(n));
}
function Vs(e, t) {
  $n(e, t);
}
function Ks(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Bn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Xs() {
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
      let l = i.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && Bn.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
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
function Js(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * zn}px`, e.dataset.indentLevel = String(r));
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
function Rt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = Xs();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = Ks(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Vs(s, e);
      return;
    }
    e ? Js(s) : $n(s, !1);
  });
  try {
    const s = document.createRange(), i = (u) => u.nodeType === Node.TEXT_NODE ? u : document.createTreeWalker(
      u,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (u) => {
      if (u.nodeType === Node.TEXT_NODE)
        return u;
      const d = document.createTreeWalker(
        u,
        NodeFilter.SHOW_TEXT,
        null
      );
      let T = null, b = d.nextNode();
      for (; b; )
        T = b, b = d.nextNode();
      return T;
    }, l = i(a);
    l ? s.setStart(l, 0) : s.setStart(a, 0);
    const c = g(o);
    c ? s.setEnd(c, c.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
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
function Qs(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Rt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Fn = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = oe(!1), o = ee(null), s = [
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
  se(() => {
    const l = (c) => {
      o.current && !o.current.contains(c.target) && a(!1);
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, []);
  const i = (l) => {
    t(l), a(!1);
  }, g = (l) => {
    const c = l.target.value;
    t(c);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ m.jsx(
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
        children: /* @__PURE__ */ m.jsx(ys, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ m.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ m.jsx("div", { className: "color-grid", children: s.map((l) => /* @__PURE__ */ m.jsx(
        "button",
        {
          onClick: () => i(l),
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
      /* @__PURE__ */ m.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ m.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: g,
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
Fn.propTypes = {
  currentColor: w.string,
  onColorSelect: w.func.isRequired,
  title: w.string
};
const ea = [
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
], ta = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], na = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Lt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = async (c) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(c.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (c.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      Ce.info("Starting image upload", { fileName: c.name, fileSize: c.size });
      const d = await go(c);
      Ce.info("Image saved to IndexedDB", { key: d });
      const T = await ho(d);
      if (Ce.info("Image retrieved from IndexedDB", { key: d, hasUrl: !!T }), T && n) {
        const v = `<img src="${T}" data-key="${d}" alt="Inserted image" />`;
        Ce.info("Calling onInsertImage with HTML", { imageHtml: v.substring(0, 100) }), n(v), Ce.info("Image inserted", { key: d });
      } else
        Ce.warn("Image not inserted: missing imageUrl or onInsertImage callback", {
          hasUrl: !!T,
          hasCallback: !!n
        });
      const b = document.getElementById("image-upload");
      b && (b.value = "");
    } catch (u) {
      Ce.error("Error uploading image", u);
    }
  }, i = (c, u, d, T) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: () => t(c),
      className: e[u] ? "active" : "",
      title: T,
      children: /* @__PURE__ */ m.jsx(d, { size: 16 })
    },
    c
  ), g = (c, u, d, T = !1) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: c,
      disabled: T,
      title: d,
      style: { opacity: T ? 0.5 : 1 },
      children: /* @__PURE__ */ m.jsx(u, { size: 16 })
    },
    d
  ), l = () => /* @__PURE__ */ m.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ m.jsxs("div", { className: "editor-toolbar", children: [
    g(() => t("undo"), Bs, "Undo", !a),
    g(() => t("redo"), ws, "Redo", !o),
    l(),
    i("bold", "bold", Bo, "Bold"),
    i("italic", "italic", as, "Italic"),
    i("underline", "underline", Ds, "Underline"),
    i("strikethrough", "strikethrough", Ss, "Strikethrough"),
    l(),
    i("justifyLeft", "alignLeft", Mt, "Align Left"),
    i("justifyCenter", "alignCenter", Nt, "Align Center"),
    i("justifyRight", "alignRight", Pt, "Align Right"),
    i("justifyFull", "alignJustify", Ms, "Justify"),
    l(),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("fontName", c.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ea.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("fontSize", c.target.value),
        value: e.fontSize || st,
        title: "Font Size",
        children: Lr.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    /* @__PURE__ */ m.jsx(
      Fn,
      {
        currentColor: e.fontColor,
        onColorSelect: (c) => t("foreColor", c),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (c) => t("formatBlock", c.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: ta.map(({ value: c, label: u }) => /* @__PURE__ */ m.jsx("option", { value: c, children: u }, c))
      }
    ),
    l(),
    g(() => t("insertUnorderedList"), jn, "Bullet List"),
    g(() => t("insertOrderedList"), gs, "Numbered List"),
    l(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ m.jsx(fs, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Rt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ m.jsx(us, { size: 16 })
      }
    ),
    l(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          const c = prompt("Enter URL:");
          c && t("createLink", c);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ m.jsx(cs, { size: 16 })
      }
    ),
    g(() => t("insertHTML", na), ks, "Insert Table"),
    r && g(r, rt, "Insert Page Break"),
    l(),
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (c) => c.target.files[0] && s(c.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ m.jsx(os, { size: 16 })
      }
    )
  ] });
};
Lt.propTypes = {
  currentFormat: w.shape({
    bold: w.bool,
    italic: w.bool,
    underline: w.bool,
    strikethrough: w.bool,
    alignLeft: w.bool,
    alignCenter: w.bool,
    alignRight: w.bool,
    alignJustify: w.bool,
    fontFamily: w.string,
    fontSize: w.string,
    fontColor: w.string,
    headingLevel: w.string
  }).isRequired,
  onFormatText: w.func.isRequired,
  onAddPageBreak: w.func,
  onInsertImage: w.func,
  canUndo: w.bool,
  canRedo: w.bool
};
Lt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function ra(e) {
  return !e || typeof e != "string" ? e : et(e);
}
function oa(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ra(r) : r = sa(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function sa(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => aa(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function aa(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ae = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Ae(e.parentElement) : !1, It = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: g,
  zoomLevel: l = 100,
  pageMargins: c = he
}) => {
  const u = Te(() => xn(c), [c]), d = l / 100, T = k((h, p) => {
    if (!h) return !1;
    const y = h.getBoundingClientRect(), I = p - y.top;
    return I < u.top || I > y.height - u.bottom;
  }, [u.top, u.bottom]), b = k((h, p) => {
    p.preventDefault();
    const y = h.getBoundingClientRect(), I = p.clientX - y.left, S = p.clientY - y.top, j = y.width - 40, q = -12, W = y.width - 20;
    I >= j && I <= W && S >= q && S <= 8 && g && g(h);
  }, [g]), v = k((h) => {
    h.preventDefault();
    const p = t.current.getBoundingClientRect();
    if (h.clientY - p.top < u.top) {
      const I = t.current.firstElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), j = window.getSelection();
        S.setStart(I, 0), S.collapse(!0), j.removeAllRanges(), j.addRange(S);
      }
    } else {
      const I = t.current.lastElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), j = window.getSelection();
        S.selectNodeContents(I), S.collapse(!1), j.removeAllRanges(), j.addRange(S);
      }
    }
  }, [t, u.top]), A = k((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: I, endContainer: S } = y;
    if ((Ae(I) || Ae(S)) && (h.key.length === 1 || h.key === "Enter" || h.key === " "))
      return h.preventDefault(), !1;
    if (Qs(h))
      return n && n(), !1;
    if ((h.key === "Backspace" || h.key === "Delete") && (Ae(I) || Ae(S)))
      return h.preventDefault(), !1;
    a && a(h);
  }, [a, n]), $ = k((h) => {
    if (!t.current) return;
    const p = h.target;
    if (Ae(p)) {
      b(p, h);
      return;
    }
    if (T(t.current, h.clientY)) {
      v(h);
      return;
    }
    o && o(h);
  }, [t, o, b, v, T]), M = k((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: I } = y;
    if (Ae(I))
      return h.preventDefault(), !1;
  }, []), P = k((h) => {
    const p = oa(h);
    i && i(h, p);
  }, [i]);
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
        transform: `scale(${d})`,
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
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: st,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: A,
          onBeforeInput: M,
          onClick: $,
          onScroll: s,
          onPaste: P,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
It.propTypes = {
  dimensions: w.shape({
    width: w.number.isRequired,
    height: w.number.isRequired
  }).isRequired,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: w.func.isRequired,
  onContentChange: w.func,
  onKeyDown: w.func,
  onClick: w.func,
  onScroll: w.func,
  onPaste: w.func,
  onRemovePageBreak: w.func,
  zoomLevel: w.number,
  pageMargins: w.string
};
It.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: he
};
const ia = gr(It), Ht = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = he,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: l,
  onPageSizeChange: c,
  onPageMarginsChange: u,
  onZoomIn: d,
  onZoomOut: T,
  onZoomReset: b
} = {}) => {
  const v = Math.max(e?.length || 0, 1), A = (p) => {
    i && i(p);
  }, $ = () => {
    g && g();
  }, M = (p) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(p);
  }, P = (p) => {
    c && c(p);
  }, h = (p) => {
    u && u(p);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ m.jsx(As, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: r,
              onChange: (p) => P(p.target.value),
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
              value: n,
              onChange: (p) => h(p.target.value),
              children: xr().map((p) => /* @__PURE__ */ m.jsx("option", { value: p, children: Er(p) }, p))
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
          onClick: T,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ m.jsx(qs, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: d,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ m.jsx(Us, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: b,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "page-list", children: e.map((p, y) => /* @__PURE__ */ m.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${y === t ? "active" : ""}`,
          onClick: () => A(y),
          "aria-label": `Go to page ${y + 1}`,
          "aria-current": y === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ m.jsx(rt, { size: 14 }),
            /* @__PURE__ */ m.jsxs("span", { children: [
              "Page ",
              y + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (I) => {
            I.stopPropagation(), M(y);
          },
          "aria-label": `Delete page ${y + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ m.jsx($s, { size: 14 })
        }
      )
    ] }, p.id || `page-${y}`)) }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: $,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ m.jsx(Ts, { size: 16 }),
          /* @__PURE__ */ m.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Ht.propTypes = {
  pageBoundaries: w.arrayOf(
    w.shape({
      id: w.string.isRequired,
      pageNumber: w.number.isRequired,
      top: w.number,
      height: w.number
    })
  ),
  activePage: w.number,
  pageSize: w.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: w.string,
  zoomLevel: w.number,
  canZoomIn: w.bool,
  canZoomOut: w.bool,
  onNavigate: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onZoomIn: w.func,
  onZoomOut: w.func,
  onZoomReset: w.func
};
Ht.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: he,
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
const ca = ot.memo(Ht);
function la(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function ua({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = ke
}) {
  const g = n - t, l = a - r;
  let c = o, u = s;
  switch (e) {
    case F.TOP_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case F.TOP_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM_LEFT:
      c = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case F.BOTTOM_RIGHT:
      c = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case F.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case F.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case F.LEFT:
      c = Math.max(i.minWidth, o - g);
      break;
    case F.RIGHT:
      c = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: c, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const d = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? c / d > u ? u = Math.max(i.minHeight, c / d) : c = Math.max(i.minWidth, u * d) : [F.TOP, F.BOTTOM].includes(e) ? c = u * d : [F.LEFT, F.RIGHT].includes(e) && (u = c / d);
  }
  return i.maxWidth && c > i.maxWidth && (c = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = c / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (c = u * (o / s))), c = Math.max(i.minWidth, c), u = Math.max(i.minHeight, u), {
    width: Math.round(c),
    height: Math.round(u)
  };
}
function Un(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function da(e, t, r) {
  Un(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function fa(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, g = a || o, l = r.offsetWidth, c = r.offsetHeight, d = {
    // Increase width
    ">": g && s ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: c
    }) : null,
    // Decrease width
    "<": g && s ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: c
    }) : null,
    // Increase height
    "+": g && s ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, c + 10)
    }) : null,
    // Decrease height
    "-": g && s ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, c - 10)
    }) : null,
    // Reset to default
    r: g && !s ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (d) {
    e.preventDefault();
    const T = d();
    return da(t, r, T), !0;
  }
  return !1;
}
const Dt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = ke
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(a), c = ee(!1), u = we();
  se(() => {
    l.current = a;
  }, [a]);
  const d = k((h) => {
    if (!be(h)) return;
    o.current && (ht(o.current), o.current = null), h.classList.add("selected");
    const p = co(h, l.current);
    p && (o.current = p, s.current = h, document.body.appendChild(p), p.querySelectorAll(".resize-handler").forEach((I) => {
      I.addEventListener("mousedown", b);
    }), r && r(h));
  }, [r]), T = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ht(o.current), o.current = null), i.current = null, g.current = null, c.current = !1, n && n();
  }, [n]), b = k((h) => {
    if (h.preventDefault(), h.stopPropagation(), !s.current) return;
    const p = h.currentTarget.dataset.handler, y = s.current.getBoundingClientRect(), I = window.pageYOffset || document.documentElement.scrollTop, S = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: h.clientX,
      y: h.clientY,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight,
      originalWidth: s.current.offsetWidth,
      originalHeight: s.current.offsetHeight,
      offsetX: h.clientX - y.left - S,
      offsetY: h.clientY - y.top - I
    }, g.current = p, c.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = la(p), document.addEventListener("mousemove", v), document.addEventListener("mouseup", A);
  }, []), v = k((h) => {
    if (!c.current || !s.current || !i.current || !g.current) return;
    h.preventDefault(), h.stopPropagation();
    const { x: p, y, width: I, height: S } = i.current, j = g.current, q = h.clientX, W = h.clientY, B = ua({
      handler: j,
      startX: p,
      startY: y,
      currentX: q,
      currentY: W,
      startWidth: I,
      startHeight: S,
      options: l.current
    });
    Un(s.current, B), o.current && Ct(o.current, s.current);
  }, []), A = k((h) => {
    if (c.current) {
      if (h.preventDefault(), h.stopPropagation(), s.current && i.current) {
        const p = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, y = {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        };
        (p.width !== y.width || p.height !== y.height) && u.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: y } },
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: p } }
        );
      }
      if (i.current = null, g.current = null, c.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
        const p = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(p), t && t(s.current, {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        });
      }
    }
  }, [t, u]), $ = k((h) => {
    o.current && !o.current.contains(h.target) && T();
    const p = h.target;
    if (be(p)) {
      if (p === s.current)
        return;
      d(p);
    }
  }, [d, T]), M = k((h) => {
    if ((h.key === "Delete" || h.key === "Backspace") && s.current && !c.current) {
      h.preventDefault();
      const p = s.current;
      if (p.parentNode) {
        p.parentNode.removeChild(p), T();
        const y = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(y);
      }
    }
    h.key === "Escape" && s.current && T(), s.current && !c.current && fa(h, e, s.current, l.current);
  }, [e, T]), P = k(() => {
    o.current && s.current && Ct(o.current, s.current);
  }, []);
  return se(() => {
    if (!e.current) return;
    const p = e.current.closest(".editor-viewport");
    return p && (p.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      p && p.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), se(() => {
    if (!e.current) return;
    const h = e.current;
    return h.addEventListener("click", $), h.addEventListener("keydown", M), window.addEventListener("resize", P), () => {
      h.removeEventListener("click", $), h.removeEventListener("keydown", M), window.removeEventListener("resize", P), c.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && ht(o.current);
    };
  }, [e, $, M, P, v, A]), se(() => {
    if (!e.current) return;
    const h = new MutationObserver((p) => {
      p.forEach((y) => {
        y.type === "childList" && (y.removedNodes.forEach((I) => {
          I.nodeType === Node.ELEMENT_NODE && be(I) && I === s.current && T();
        }), y.addedNodes.forEach((I) => {
          if (I.nodeType !== Node.ELEMENT_NODE) return;
          if (be(I)) {
            setTimeout(() => d(I), 50);
            return;
          }
          const S = I.querySelectorAll?.("img") || [];
          S.length > 0 && setTimeout(() => d(S[0]), 50);
        }));
      });
    });
    return h.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => h.disconnect();
  }, [e, T, d]), null;
};
Dt.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: w.func,
  onImageSelect: w.func,
  onImageDeselect: w.func,
  resizeOptions: w.shape({
    minWidth: w.number,
    minHeight: w.number,
    maxWidth: w.number,
    maxHeight: w.number,
    aspectRatio: w.bool,
    preserveAspectRatio: w.bool,
    defaultWidth: w.number,
    defaultHeight: w.number
  })
};
Dt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ke
};
const jt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [c, u] = oe("top"), [d, T] = oe(o), b = ee(null), v = ee(null), A = we(), $ = (E) => {
    if (!E)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (C) => setTimeout(C, 16))(() => {
      const C = document.querySelector(".image-resize-overlay");
      C && Ct(C, E);
    });
  }, M = (E) => {
    if (!E) return null;
    const O = window.getComputedStyle(E);
    return {
      float: O.float || "none",
      margin: E.style.margin || "",
      display: O.display || "inline",
      width: E.style.width || E.width || "",
      height: E.style.height || E.height || "",
      aspectRatio: d
    };
  }, P = k(() => {
    if (!e) return "left";
    const E = window.getComputedStyle(e);
    return E.float === "right" ? "right" : E.float === "left" ? "left" : E.display === "block" && E.margin.includes("auto") ? "center" : "left";
  }, [e]), [h, p] = oe("left");
  se(() => {
    e && p(P());
  }, [e, P]);
  const y = k(() => {
    if (!e || !b.current) return;
    const E = e.getBoundingClientRect(), O = b.current.getBoundingClientRect(), C = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, N = E.bottom >= 0 && E.top <= C.height && E.right >= 0 && E.left <= C.width;
    let Y = "top", te = 0, ae = 0;
    if (N) {
      const L = E.top - O.height - 10, V = C.height - E.bottom - O.height - 10;
      V > L && V > 0 ? (Y = "bottom", te = E.bottom + 10) : (Y = "top", te = E.top - O.height - 10);
    } else
      Y = "top", te = 10;
    ae = E.left + E.width / 2 - O.width / 2;
    const x = window.innerWidth, f = window.innerHeight;
    let _ = Math.max(10, Math.min(ae, x - O.width - 10)), H = Math.max(10, Math.min(te, f - O.height - 10));
    i({ top: H, left: _ }), u(Y), l(!0);
  }, [e]);
  vn(() => {
    y();
    const E = () => {
      y();
    }, O = v.current;
    return O && O.addEventListener("scroll", E), window.addEventListener("scroll", E), window.addEventListener("resize", E), () => {
      O && O.removeEventListener("scroll", E), window.removeEventListener("scroll", E), window.removeEventListener("resize", E), l(!1);
    };
  }, [e, y]), se(() => {
    const E = (O) => {
      b.current && !b.current.contains(O.target) && O.target !== e && a();
    };
    return document.addEventListener("mousedown", E), () => {
      document.removeEventListener("mousedown", E);
    };
  }, [e, a]);
  const I = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, S = (E) => {
    if (e && I[E]) {
      const O = M(e), C = h, N = I[E];
      e.style.float = N.float, e.style.margin = N.margin, e.style.display = N.display, p(E), $(e);
      const Y = M(e);
      A.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: E, state: Y } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C, state: O } }
      ), t && t(E);
    }
  }, j = () => {
    if (e && e.parentNode) {
      const E = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      A.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: E } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, q = () => {
    const E = d, O = !d;
    T(O), A.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: O } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: E } }
    ), r && r(O);
  }, W = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (E) => ({
    ...W,
    background: E ? "#007bff" : "transparent",
    color: E ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : wn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": c,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${d ? "" : "active"}`,
              onClick: q,
              title: `Toggle aspect ratio preservation (currently ${d ? "ON" : "OFF"})`,
              children: d ? /* @__PURE__ */ m.jsx(Es, { size: 14 }) : /* @__PURE__ */ m.jsx(ns, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "left" ? "active" : ""}`,
              onClick: () => S("left"),
              title: "Align Left",
              style: B(h === "left"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "center" ? "active" : ""}`,
              onClick: () => S("center"),
              title: "Align Center",
              style: B(h === "center"),
              children: /* @__PURE__ */ m.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "right" ? "active" : ""}`,
              onClick: () => S("right"),
              title: "Align Right",
              style: B(h === "right"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: j,
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
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  imageElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onAspectRatioToggle: w.func,
  onDelete: w.func,
  onClose: w.func.isRequired,
  initialPreserveAspectRatio: w.bool
};
jt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const at = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, le = {
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
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let g = 0; g < n; g++) {
      const l = s[g], c = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      a.push(c || 100);
    }
  else if (r.length > 0) {
    const g = r[0];
    for (let l = 0; l < g.cells.length; l++) {
      const c = g.cells[l];
      a.push(c.offsetWidth);
    }
  }
  const i = r.map((g) => (g.style.height ? parseInt(g.style.height, 10) : null) || g.offsetHeight);
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
function pa({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = at
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, g, l, c, u) => {
    g >= 0 && g < i.length && (i[g] = Math.max(c, Math.min(u, i[g] + l)));
  };
  switch (e) {
    case le.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case le.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case le.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case le.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function me(e) {
  if (!ue(e)) return;
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
function Se(e, t, r) {
  if (!ue(e)) return;
  me(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((l, c) => l + c, 0) : 0, g = a ? a.reduce((l, c) => l + c, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : g > 0 && (e.style.height = `${g}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((u, d) => {
      d < n.length && (u.style.width = `${n[d]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((c, u) => {
    u < a.length && (c.style.height = `${a[u]}px`);
  }), e.style.height = `${g}px`), e.offsetHeight;
}
function ga(e, t = at) {
  if (!ue(e)) return null;
  me(e);
  const r = pe(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const g = Wn(i, r, a, e);
    n.appendChild(g);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const g = qn(i, r, a, e);
    n.appendChild(g);
  }
  const o = Gn(r, a);
  n.appendChild(o);
  const s = Zn(r, a);
  return n.appendChild(s), n;
}
function Wn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = le.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Yn(a, e, t, r, n), a;
}
function qn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = le.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Vn(a, e, t, r, n), a;
}
function Gn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Kn(r, e, t), r;
}
function Zn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Xn(r, e, t), r;
}
function St(e, t) {
  if (!e || !t) return;
  me(t);
  const r = pe(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let u = 0; u < r.columns - 1; u++) {
      const d = Wn(u, r, n, t);
      e.appendChild(d);
    }
    for (let u = 0; u < r.rows - 1; u++) {
      const d = qn(u, r, n, t);
      e.appendChild(d);
    }
    const l = Gn(r, n);
    e.appendChild(l);
    const c = Zn(r, n);
    e.appendChild(c);
  } else
    a.forEach((l, c) => {
      Yn(l, c, r, n, t);
    }), o.forEach((l, c) => {
      Vn(l, c, r, n, t);
    }), s && Kn(s, r, n), i && Xn(i, r, n);
}
function Xe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ha(e, t) {
  if (!ue(e))
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
  me(e);
  const o = pe(e);
  return o && Se(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function ma(e, t) {
  if (!ue(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const g = document.createElement("td");
    g.innerHTML = "&nbsp;", n.appendChild(g);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  me(e);
  const s = pe(e);
  return s && Se(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Yn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const g = s.cells[t].getBoundingClientRect(), l = a.getBoundingClientRect(), c = g.right - l.left - 2;
      e.style.left = `${c}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Vn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const g = s.cells[0].getBoundingClientRect(), l = a.getBoundingClientRect(), c = g.bottom - l.top - 2;
      e.style.top = `${c}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function Kn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Xn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function ya(e, t) {
  if (!ue(e))
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
    me(e);
    const n = pe(e);
    return n && Se(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function ba(e, t) {
  if (!ue(e))
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
    me(e);
    const n = pe(e);
    return n && Se(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function Ta(e, t) {
  if (!ue(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), me(e);
    const n = pe(e);
    return n && Se(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function va(e, t) {
  if (!ue(e))
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
    me(e);
    const n = pe(e);
    return n && Se(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
const Bt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = at
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(null), c = ee(a), u = ee(!1), [d, T] = oe(null), b = we();
  se(() => {
    c.current = a;
  }, [a]);
  const v = k(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Xe(o.current), o.current = null), T(null), i.current = null, g.current = null, l.current = null, u.current = !1, n && n();
  }, [n]), A = k((S) => {
    if (S.preventDefault(), S.stopPropagation(), !s.current) return;
    const j = S.currentTarget, q = j.dataset.type, W = parseInt(j.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const B = pe(s.current);
    i.current = {
      x: S.clientX,
      y: S.clientY,
      structure: { ...B }
    }, g.current = q, l.current = W, u.current = !0, document.body.classList.add("table-resize-in-progress");
    const E = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = E[q] || "default", document.addEventListener("mousemove", P), document.addEventListener("mouseup", h);
  }, []), $ = k((S) => {
    const j = ga(S, c.current);
    return j && (o.current = j, s.current = S, document.body.appendChild(j), j.querySelectorAll(".table-resize-handler").forEach((W) => {
      W.addEventListener("mousedown", A);
    })), j;
  }, [A]), M = k((S) => {
    if (!ue(S)) return;
    o.current && (Xe(o.current), o.current = null), S.classList.add("selected"), $(S) && (T(S), r && r(S));
  }, [r, $]), P = k((S) => {
    if (!u.current || !s.current || !i.current || !g.current) return;
    S.preventDefault(), S.stopPropagation();
    const { x: j, y: q, structure: W } = i.current, B = g.current, E = l.current, O = S.clientX, C = S.clientY;
    let N = 0;
    switch (B) {
      case le.COLUMN:
        N = O - j;
        break;
      case le.ROW:
        N = C - q;
        break;
      case le.TABLE_BOTTOM:
        N = C - q;
        break;
      case le.TABLE_RIGHT:
        N = O - j;
        break;
    }
    const Y = pa({
      type: B,
      index: E,
      delta: N,
      currentStructure: W,
      options: c.current
    });
    Se(s.current, Y), o.current && St(o.current, s.current);
  }, []), h = k((S) => {
    if (u.current) {
      if (S.preventDefault(), S.stopPropagation(), s.current && i.current) {
        const j = {
          structure: i.current.structure
        }, q = {
          structure: pe(s.current)
        };
        (j.structure.width !== q.structure.width || j.structure.height !== q.structure.height || JSON.stringify(j.structure.columnWidths) !== JSON.stringify(q.structure.columnWidths) || JSON.stringify(j.structure.rowHeights) !== JSON.stringify(q.structure.rowHeights)) && b.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: q } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: j } }
        );
      }
      if (i.current = null, g.current = null, l.current = null, u.current = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(j), t && t(s.current, pe(s.current));
      }
    }
  }, [t, b]), p = k((S) => {
    o.current && !o.current.contains(S.target) && v();
    const q = S.target.closest("table");
    if (q && ue(q)) {
      if (q === s.current)
        return;
      M(q);
    }
  }, [M, v]), y = k((S) => {
    if (S.key === "Delete" && s.current && !u.current) {
      S.preventDefault();
      const j = s.current;
      if (j.parentNode) {
        j.parentNode.removeChild(j), v();
        const q = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(q);
      }
    }
    S.key === "Escape" && s.current && v();
  }, [e, v]), I = k(() => {
    o.current && s.current && St(o.current, s.current);
  }, []);
  return se(() => {
    if (!e.current) return;
    const j = e.current.closest(".editor-viewport");
    return j && (j.addEventListener("scroll", I), window.addEventListener("scroll", I)), () => {
      j && j.removeEventListener("scroll", I), window.removeEventListener("scroll", I);
    };
  }, [e, I]), se(() => {
    if (!e.current) return;
    const S = e.current;
    return S.addEventListener("click", p), S.addEventListener("keydown", y), window.addEventListener("resize", I), () => {
      S.removeEventListener("click", p), S.removeEventListener("keydown", y), window.removeEventListener("resize", I), u.current && (document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Xe(o.current);
    };
  }, [e, p, y, I, P, h]), se(() => {
    if (!e.current) return;
    const S = new MutationObserver((j) => {
      j.forEach((q) => {
        q.type === "childList" && (q.removedNodes.forEach((W) => {
          W.nodeType === Node.ELEMENT_NODE && ue(W) && W === d && v();
        }), q.addedNodes.forEach((W) => {
          if (W.nodeType !== Node.ELEMENT_NODE) return;
          if (ue(W)) {
            setTimeout(() => M(W), 50);
            return;
          }
          const B = W.querySelectorAll?.("table") || [];
          B.length > 0 && setTimeout(() => M(B[0]), 50);
        }));
      });
    });
    return S.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => S.disconnect();
  }, [e, v, M]), se(() => {
    if (!d) return;
    const S = new MutationObserver((j) => {
      j.some((W) => {
        if (W.type === "childList") {
          if ([...W.addedNodes, ...W.removedNodes].some(
            (E) => E.nodeType === Node.ELEMENT_NODE && E.tagName === "TR"
          )) return !0;
        } else if (W.type === "attributes" && ["colspan", "rowspan"].includes(W.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (Xe(o.current), o.current = null, $(s.current));
    });
    return S.observe(d, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => S.disconnect();
  }, [d, $]), null;
};
Bt.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: w.func,
  onTableSelect: w.func,
  onTableDeselect: w.func,
  resizeOptions: w.shape({
    minColumnWidth: w.number,
    minRowHeight: w.number,
    maxColumnWidth: w.number,
    maxRowHeight: w.number,
    tableMinWidth: w.number,
    tableMinHeight: w.number,
    tableMaxWidth: w.number,
    tableMaxHeight: w.number
  })
};
Bt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: at
};
const zt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [c, u] = oe("top"), d = ee(null), T = ee(null), b = we(), v = (C) => {
    if (!C)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (Y) => setTimeout(Y, 16))(() => {
      const Y = document.querySelector(".table-resize-overlay");
      Y && St(Y, C);
    });
  }, A = (C) => {
    if (!C) return null;
    const N = window.getComputedStyle(C);
    return {
      float: N.float || "none",
      margin: C.style.margin || "",
      marginLeft: C.style.marginLeft || "",
      marginRight: C.style.marginRight || "",
      display: N.display || "table"
    };
  }, $ = k(() => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.marginLeft === "auto" && C.marginRight === "auto" ? "center" : C.float === "right" ? "right" : (C.float === "left", "left");
  }, [e]), [M, P] = oe("left");
  se(() => {
    e && P($());
  }, [e, $]);
  const h = k(() => {
    if (!e || !d.current) return;
    const C = e.getBoundingClientRect(), N = d.current.getBoundingClientRect(), Y = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, te = C.bottom >= 0 && C.top <= Y.height && C.right >= 0 && C.left <= Y.width;
    let ae = "top", x = 0, f = 0;
    if (te) {
      const G = C.top - N.height - 10, z = Y.height - C.bottom - N.height - 10;
      z > G && z > 0 ? (ae = "bottom", x = C.bottom + 10) : (ae = "top", x = C.top - N.height - 10);
    } else
      ae = "top", x = 10;
    f = C.left + C.width / 2 - N.width / 2;
    const _ = window.innerWidth, H = window.innerHeight;
    let L = Math.max(10, Math.min(f, _ - N.width - 10)), V = Math.max(10, Math.min(x, H - N.height - 10));
    i({ top: V, left: L }), u(ae), l(!0);
  }, [e]);
  vn(() => {
    h();
    const C = () => {
      h();
    }, N = T.current;
    return N && N.addEventListener("scroll", C), window.addEventListener("scroll", C), window.addEventListener("resize", C), () => {
      N && N.removeEventListener("scroll", C), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), l(!1);
    };
  }, [e, h]), se(() => {
    const C = (N) => {
      d.current && !d.current.contains(N.target) && N.target !== e && !e.contains(N.target) && r();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, r]);
  const p = {
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
  }, y = (C) => {
    if (e && p[C]) {
      const N = A(e), Y = M, te = p[C];
      e.style.float = te.float, e.style.margin = te.margin, e.style.marginLeft = te.marginLeft, e.style.marginRight = te.marginRight, P(C), v(e);
      const ae = A(e);
      b.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: C, state: ae } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: Y, state: N } }
      ), t && t(C);
    }
  }, I = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const C = ha(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row above");
  }, S = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const C = ma(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row below");
  }, j = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), ya(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column left");
  }, q = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), ba(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column right");
  }, W = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), Ta(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to delete row");
  }, B = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), va(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const N = o.current.innerHTML;
        console.log("Updated content length:", N.length), b.updateContinuousContent(N);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), v(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to delete column");
  }, E = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, O = (C) => ({
    ...E,
    background: C ? "#007bff" : "transparent",
    color: C ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : wn(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: d,
        className: "table-tooltip-menu",
        "data-menu-position": c,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${M === "left" ? "active" : ""}`,
              onClick: () => y("left"),
              title: "Align Left",
              style: O(M === "left"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${M === "center" ? "active" : ""}`,
              onClick: () => y("center"),
              title: "Align Center",
              style: O(M === "center"),
              children: /* @__PURE__ */ m.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${M === "right" ? "active" : ""}`,
              onClick: () => y("right"),
              title: "Align Right",
              style: O(M === "right"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: I,
                title: "Insert Row Above",
                style: {
                  ...E,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(Do, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: S,
                title: "Insert Row Below",
                style: {
                  ...E,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(No, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: W,
                title: "Delete Row",
                style: {
                  ...E,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: j,
                title: "Insert Column Left",
                style: {
                  ...E,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Mo, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: q,
                title: "Insert Column Right",
                style: {
                  ...E,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Io, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: B,
                title: "Delete Column",
                style: {
                  ...E,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
zt.propTypes = {
  tableElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onClose: w.func.isRequired,
  selectedRowIndex: w.number,
  selectedColIndex: w.number,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
zt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const $t = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = oe(/* @__PURE__ */ new Set()), [a, o] = oe(null), [s, i] = oe(null), [g, l] = oe(null), [c, u] = oe(!1), [d, T] = oe(!1), [b, v] = oe(null), [A, $] = oe(null);
  we(), ee(null);
  const M = ee(null), P = k(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), l(null), v(null), $(null), u(!1), T(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((B) => {
      B.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), M.current !== null && (M.current = null, t && t(null));
  }, [t]), h = k((B) => {
    const E = B.closest("tr"), O = B.closest("table");
    if (!E || !O) return null;
    const C = Array.from(O.rows).indexOf(E), N = Array.from(E.cells).indexOf(B);
    return { rowIndex: C, cellIndex: N, table: O };
  }, []), p = k((B) => {
    if (B.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const E = Array.from(B), O = E[0], C = h(O);
    if (!C) return { mode: null, rowIndex: null, colIndex: null };
    const { table: N } = C;
    return E.filter((ae) => {
      const x = h(ae);
      return x && x.table === N && x.rowIndex === C.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: C.rowIndex, colIndex: null } : E.filter((ae) => {
      const x = h(ae);
      return x && x.table === N && x.cellIndex === C.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: C.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [h]), y = k((B, E, O, C, N) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((Y) => {
      Y.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!N || !B)) {
      if (B === "row" && E !== null) {
        const Y = N.rows[E];
        Y && Array.from(Y.cells).forEach((te) => {
          te.classList.add("table-row-selected");
        });
      } else B === "column" && O !== null ? Array.from(N.rows).forEach((Y) => {
        const te = Y.cells[O];
        te && te.classList.add("table-col-selected");
      }) : B === "cells" && C.forEach((Y) => {
        Y.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), I = k((B, E) => {
    const O = p(B);
    n(B), o(O.mode), i(O.rowIndex), l(O.colIndex), $(E), y(O.mode, O.rowIndex, O.colIndex, B, E);
    const C = O.mode ? {
      mode: O.mode,
      cells: B,
      rowIndex: O.rowIndex,
      colIndex: O.colIndex,
      table: E
    } : null;
    JSON.stringify(M.current) !== JSON.stringify(C) && (M.current = C, t && t(C));
  }, [p, y, t]), S = k((B) => {
    const E = B.target.closest("td, th");
    if (!E) return;
    const O = h(E);
    O && (u(!0), v(E), $(O.table), T(!1));
  }, [h]), j = k((B) => {
    if (!c || !b) return;
    const E = B.target.closest("td, th");
    if (!E || !A || !A.contains(E)) return;
    T(!0), B.preventDefault();
    const O = h(b), C = h(E);
    if (!O || !C || O.table !== C.table) return;
    const N = Math.min(O.rowIndex, C.rowIndex), Y = Math.max(O.rowIndex, C.rowIndex), te = Math.min(O.cellIndex, C.cellIndex), ae = Math.max(O.cellIndex, C.cellIndex), x = /* @__PURE__ */ new Set();
    for (let f = N; f <= Y; f++) {
      const _ = A.rows[f];
      if (_)
        for (let H = te; H <= ae; H++) {
          const L = _.cells[H];
          L && x.add(L);
        }
    }
    I(x, A);
  }, [c, h]), q = k(() => {
    d || P(), u(!1), v(null);
  }, [d, P]), W = k((B) => {
    const E = B.target.closest("td, th"), O = B.target.closest("table");
    if (!(E && A && A.contains(E))) {
      if (O && O !== A) {
        P();
        return;
      }
      O || P();
    }
  }, [P, A]);
  return se(() => {
    if (!e.current) return;
    const B = e.current, E = (C) => {
      C.target.closest("td, th") && S(C);
    }, O = (C) => {
      C.target.closest("td, th") && j(C);
    };
    return B.addEventListener("mousedown", E, !0), B.addEventListener("mouseenter", O, !0), document.addEventListener("mouseup", q), document.addEventListener("click", W), () => {
      B.removeEventListener("mousedown", E, !0), B.removeEventListener("mouseenter", O, !0), document.removeEventListener("mouseup", q), document.removeEventListener("click", W);
    };
  }, [e, S, j, q, W]), se(() => {
    if (!e.current) return;
    const B = new MutationObserver((E) => {
      E.forEach((O) => {
        O.type === "childList" && A && !e.current.contains(A) && P();
      });
    });
    return B.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => B.disconnect();
  }, [e, P]), null;
};
$t.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: w.func
};
$t.defaultProps = {
  onCellSelectionChange: void 0
};
const wa = 50, Je = 50, xa = 50, Ea = 100, Ca = 300, Ft = Ot(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: l = !0
}, c) => {
  const u = Sn(), d = we(), { pageSize: T, pageMargins: b, continuousContent: v, pageBoundaries: A, activePage: $, zoomLevel: M, canUndo: P, canRedo: h } = u, p = ee(null), y = ee(null), { currentFormat: I, formatText: S, updateCurrentFormatFromSelection: j } = jr(), [q, W] = oe(!1), [B, E] = oe(null), [O, C] = oe(!0), [N, Y] = oe(!1), [te, ae] = oe(null), [x, f] = oe(null), [_, H] = oe(null), L = ee(null), {
    checkAndUpdateBoundaries: V,
    getCurrentPage: G,
    scrollToPage: z,
    updateBoundaries: U,
    triggerAutoReflow: X,
    removePageAndContent: Q,
    removePageBreak: ce,
    insertPageBreakAtBoundary: D
  } = io(T, y, M, b), de = Te(() => He(T), [T]), [Oe, Be] = oe(!1), xe = ee(null), ze = ee(!1), $e = ee(!1), it = ee(!1), Ee = ee(v);
  se(() => {
    if (y.current) {
      if (!it.current) {
        y.current.innerHTML = v, it.current = !0, Ee.current = v;
        const R = setTimeout(() => {
          U();
        }, wa);
        return () => clearTimeout(R);
      }
      if (Ee.current !== v) {
        if (y.current.innerHTML !== v) {
          y.current.innerHTML = v;
          const K = setTimeout(() => {
            U(), ze.current && Wt();
          }, Je);
          return Ee.current = v, () => clearTimeout(K);
        }
        Ee.current = v;
      }
    }
  }, [v, U, A.length, d, z]), se(() => {
    s && it.current && s(v);
  }, [v, s]);
  const Fe = k(() => {
    if (!y.current) return;
    const R = window.getSelection();
    if (L.current)
      try {
        R.removeAllRanges(), R.addRange(L.current);
        return;
      } catch (ie) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", ie);
      }
    const K = y.current.lastChild;
    if (K) {
      const ie = document.createRange();
      K.nodeType === Node.TEXT_NODE ? ie.setStart(K, K.textContent.length) : ie.setStartAfter(K), ie.collapse(!0), R.removeAllRanges(), R.addRange(ie);
    }
  }, []), Ue = k(() => {
    if (!y.current) return !1;
    const R = window.getSelection();
    if (!R || R.rangeCount === 0) return !1;
    const K = R.getRangeAt(0);
    return y.current.contains(K.commonAncestorContainer);
  }, []), Ut = Te(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y.current ? y.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (y.current ? y.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => y.current ? so(y.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (R) => {
      const K = et(R);
      K !== v && d.updateContinuousContent(K), y.current && y.current.innerHTML !== K && (y.current.innerHTML = K), Ee.current = K, y.current && setTimeout(() => {
        U();
      }, Je);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (R) => {
      d.updatePageSize(R), U({ pageSize: R });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (R) => {
      d.updatePageMargins(R), U({ pageMargins: R });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (R) => {
      if (!y.current || !R) return;
      const K = et(R);
      Ue() || Fe(), document.execCommand("insertHTML", !1, K);
      const ie = y.current.innerHTML;
      d.updateContinuousContent(ie), Ee.current = ie, setTimeout(() => {
        U(), X(200);
      }, Je);
    }
  }), [v, d, U, X, Ue, Fe]);
  hr(c, () => Ut, [Ut]), se(() => {
    const R = () => {
      if (j(), y.current) {
        const ie = window.getSelection();
        if (ie.rangeCount > 0) {
          const ge = ie.getRangeAt(0);
          ge.collapsed && y.current.contains(ge.commonAncestorContainer) && (L.current = ge.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", R);
    const K = () => {
      if (setTimeout(j, 10), L.current && y.current)
        try {
          const ie = window.getSelection();
          ie.removeAllRanges(), ie.addRange(L.current);
        } catch (ie) {
          console.warn("[handleFocus] Failed to restore cursor:", ie);
        }
    };
    return y.current && y.current.addEventListener("focus", K), () => {
      document.removeEventListener("selectionchange", R), y.current && y.current.removeEventListener("focus", K);
    };
  }, [j]);
  const Wt = k(() => {
    ze.current = !1;
    const R = Math.max(0, A.length - 1);
    d.setActivePage(R), setTimeout(() => {
      z(R, p);
    }, xa);
  }, [A.length, d, z]), ct = k(() => {
    if (!y.current) return;
    let R = y.current.innerHTML;
    R = et(R), R !== y.current.innerHTML && (y.current.innerHTML = R);
    const K = v;
    if (K !== R) {
      const ge = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: R
      }, _e = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: K
      };
      d.recordOperation(ge, _e);
    }
    d.updateContinuousContent(R), V(), X(200);
    const ie = G(p);
    ie !== $ && d.setActivePage(ie);
  }, [d, V, G, $, X, p, y, v]), Qn = k((R) => {
    ct();
  }, [ct]), qt = k((R) => {
    d.updatePageSize(R), U({ pageSize: R }), a && a(R);
  }, [d, U, a]), Gt = k((R) => {
    d.updatePageMargins(R), U({ pageMargins: R }), o && o(R);
  }, [d, U, o]), Zt = k((R) => {
    R < 0 || R >= A.length || ($e.current = !0, d.setActivePage(R), z(R, p), setTimeout(() => {
      $e.current = !1;
    }, Ca), t && t(R));
  }, [d, z, t, A.length]), Yt = k(() => {
    const R = A.length + 1;
    D(R) && (ze.current = !0, setTimeout(() => {
      ze.current && Wt();
    }, 100)), r && r();
  }, [A.length, D, d, z, r]), er = k(() => {
    const R = window.getSelection();
    if (R && R.rangeCount > 0) {
      if (!y?.current) return;
      const ge = `<page-break data-page-break="true" contenteditable="false" data-page-number="${y.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ge), setTimeout(() => {
        U();
        const _e = G(p);
        d.setActivePage(_e);
      }, 150);
    }
  }, [U, G, d, p]), tr = k((R) => {
    if (!y.current || !R) return;
    Ue() || Fe(), document.execCommand("insertHTML", !1, R);
    const K = y.current.innerHTML;
    d.updateContinuousContent(K), Ee.current = K, setTimeout(() => {
      U(), X(200);
    }, Je);
  }, [d, U, X, Ue, Fe]), nr = k((R) => {
    if (!R) return;
    ce(R) && setTimeout(() => {
      const ie = G(p);
      d.setActivePage(ie);
    }, 200);
  }, [ce, G, d, p]), Vt = k((R) => {
    if (A.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Q(R) && (d.setActivePage(0), n && n(R));
  }, [A.length, Q, d, n]), We = k(() => {
    d.zoomIn();
  }, [d]), qe = k(() => {
    d.zoomOut();
  }, [d]), Ge = k(() => {
    d.resetZoom();
  }, [d]), Kt = k(() => {
    d.undo();
  }, [d]), Xt = k(() => {
    d.redo();
  }, [d]);
  se(() => {
    const R = (K) => {
      if (K.ctrlKey || K.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(K.key) && K.preventDefault();
        const ie = document.activeElement === y.current, ge = document.activeElement === p.current, _e = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ie || ge || !_e)
          switch (K.key) {
            case "+":
            case "=":
              We();
              break;
            case "-":
            case "_":
              qe();
              break;
            case "0":
              Ge();
              break;
            case "z":
              K.shiftKey || Kt();
              break;
            case "y":
              Xt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", R), () => {
      window.removeEventListener("keydown", R);
    };
  }, [We, qe, Ge, Kt, Xt]);
  const rr = k(() => {
    !p.current || !y.current || $e.current || (xe.current && clearTimeout(xe.current), xe.current = setTimeout(() => {
      if ($e.current) {
        xe.current = null;
        return;
      }
      const R = G(p);
      R !== $ && R >= 0 && d.setActivePage(R), xe.current = null;
    }, Ea));
  }, [G, $, d]), or = Te(() => {
    if (!v) return 0;
    const K = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return K ? K.length : 0;
  }, [v]), sr = A.length || 1, ar = k((R) => {
    W(!0), E(R);
  }, []), Jt = k(() => {
    W(!1), E(null);
  }, []), ir = k((R, K) => {
  }, []), cr = k((R) => {
    R && R.mode === "row" ? (f(R.rowIndex), H(null)) : R && R.mode === "column" ? (H(R.colIndex), f(null)) : (f(null), H(null));
  }, []), lr = k((R) => {
    Y(!0), ae(R);
  }, []), Qt = k(() => {
    Y(!1), ae(null);
  }, []), ur = k((R, K) => {
  }, []);
  return se(() => () => {
    xe.current && clearTimeout(xe.current);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ m.jsx(
      Lt,
      {
        currentFormat: {
          ...I,
          imageSelected: q
        },
        onFormatText: S,
        onAddPageBreak: er,
        onInsertImage: tr,
        canUndo: P,
        canRedo: h
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ m.jsx(
        Zs,
        {
          editorView: null,
          isCollapsed: Oe,
          onToggle: () => Be((R) => !R),
          wordCount: or,
          pageCount: sr
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: rr,
          children: /* @__PURE__ */ m.jsx(
            ia,
            {
              content: v,
              dimensions: de,
              pageSize: T,
              pageMargins: b,
              pageBoundaries: A,
              editorRef: y,
              onInput: Qn,
              onContentChange: ct,
              onClick: () => y.current?.focus(),
              onRemovePageBreak: nr,
              zoomLevel: M
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        Dt,
        {
          editorRef: y,
          onImageSelect: ar,
          onImageDeselect: Jt,
          onImageResize: ir,
          resizeOptions: {
            ...ke,
            preserveAspectRatio: O,
            aspectRatio: O
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        Bt,
        {
          editorRef: y,
          onTableSelect: lr,
          onTableDeselect: Qt,
          onTableResize: ur
        }
      ),
      /* @__PURE__ */ m.jsx(
        $t,
        {
          editorRef: y,
          onCellSelectionChange: cr
        }
      ),
      q && B && /* @__PURE__ */ m.jsx(
        jt,
        {
          imageElement: B,
          initialPreserveAspectRatio: O,
          onAlignChange: (R) => {
          },
          onAspectRatioToggle: (R) => {
            C(R);
          },
          onDelete: () => {
            if (B) {
              const R = B.getAttribute("data-key");
              R && mo(R).catch((K) => {
                console.error("Failed to delete image from IndexedDB:", K);
              });
            }
          },
          onClose: Jt
        }
      ),
      N && te && /* @__PURE__ */ m.jsx(
        zt,
        {
          tableElement: te,
          onAlignChange: (R) => {
          },
          onClose: Qt,
          selectedRowIndex: x,
          selectedColIndex: _,
          editorRef: y
        }
      ),
      l && /* @__PURE__ */ m.jsx("div", { className: "page-manager-sidebar", children: e ? ot.cloneElement(e, {
        onNavigate: Zt,
        onAddPage: Yt,
        onDeletePage: Vt,
        onPageSizeChange: qt,
        onPageMarginsChange: Gt,
        zoomLevel: M,
        canZoomIn: vt(M),
        canZoomOut: wt(M),
        onZoomIn: We,
        onZoomOut: qe,
        onZoomReset: Ge
      }) : /* @__PURE__ */ m.jsx(
        ca,
        {
          pageBoundaries: A,
          activePage: $,
          pageSize: T,
          pageMargins: b,
          zoomLevel: M,
          canZoomIn: vt(M),
          canZoomOut: wt(M),
          onNavigate: Zt,
          onAddPage: Yt,
          onDeletePage: Vt,
          onPageSizeChange: qt,
          onPageMarginsChange: Gt,
          onZoomIn: We,
          onZoomOut: qe,
          onZoomReset: Ge
        }
      ) })
    ] })
  ] });
});
Ft.displayName = "HtmlEditor";
Ft.propTypes = {
  pageManagerComponent: w.element,
  onNavigatePage: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onChange: w.func,
  showSidebar: w.bool,
  showToolbar: w.bool,
  showPageManager: w.bool
};
Ft.defaultProps = {
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
class Jn extends ot.Component {
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
Jn.propTypes = {
  children: w.node.isRequired,
  fallback: w.node,
  onError: w.func,
  onReset: w.func,
  showDetails: w.bool
};
Jn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Lr as COMMON_FONT_SIZES,
  Fn as ColorPickerDropdown,
  st as DEFAULT_FONT_SIZE,
  ke as DEFAULT_IMAGE_RESIZE_OPTIONS,
  En as DEFAULT_PAGE_SIZE,
  at as DEFAULT_TABLE_RESIZE_OPTIONS,
  _a as DocumentProvider,
  Lt as EditorToolbar,
  Jn as ErrorBoundary,
  _n as FONT_SIZE_MAP,
  Ft as HtmlEditor,
  Dt as ImageResizeHandlers,
  nt as PAGE_SIZES,
  ca as PageManager,
  ia as PageView,
  F as RESIZE_HANDLERS,
  Zs as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  Bt as TableResizeHandlers,
  Ha as applyImageDimensions,
  Se as applyTableDimensions,
  La as calculateResizeDimensions,
  pa as calculateTableResizeDimensions,
  Da as clearImages,
  co as createResizeOverlay,
  ga as createTableResizeOverlay,
  mo as deleteImage,
  ja as getAllImageKeys,
  ka as getAvailablePageSizes,
  ho as getImage,
  Ia as getImageDimensions,
  He as getPageDimensions,
  Na as getPixelValue,
  Pa as getPointValue,
  pe as getTableStructure,
  be as isResizableImage,
  ue as isResizableTable,
  Ma as isValidFontSize,
  Oa as isValidPageSize,
  Ys as logger,
  Hr as pixelsToPoints,
  Ir as pointsToPixels,
  ht as removeResizeOverlay,
  Xe as removeTableResizeOverlay,
  go as saveImage,
  Ct as updateResizeOverlay,
  St as updateTableResizeOverlay,
  io as useContinuousReflow,
  Rn as useDocument,
  we as useDocumentActions,
  Sn as useDocumentState,
  jr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
