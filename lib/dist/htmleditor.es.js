import Xe, { createContext as dr, useContext as gr, useReducer as pr, useMemo as J, useState as K, useCallback as N, useRef as G, useEffect as q, forwardRef as At, createElement as dt, memo as fr, useLayoutEffect as pn, useImperativeHandle as hr } from "react";
import { v4 as Ct } from "uuid";
import x from "prop-types";
import { createPortal as fn } from "react-dom";
var ze = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function mr() {
  if (Zt) return Ae;
  Zt = 1;
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
  return Ae.Fragment = t, Ae.jsx = n, Ae.jsxs = n, Ae;
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
var Vt;
function yr() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === w ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case y:
          return "Fragment";
        case k:
          return "Profiler";
        case A:
          return "StrictMode";
        case m:
          return "Suspense";
        case L:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case T:
            return "Portal";
          case E:
            return b.displayName || "Context";
          case O:
            return (b._context.displayName || "Context") + ".Consumer";
          case M:
            var H = b.render;
            return b = b.displayName, b || (b = H.displayName || H.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case v:
            return H = b.displayName || null, H !== null ? H : e(b.type) || "Memo";
          case R:
            H = b._payload, b = b._init;
            try {
              return e(b(H));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function n(b) {
      try {
        t(b);
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var W = H.error, Y = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return W.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(b);
      }
    }
    function r(b) {
      if (b === y) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === R)
        return "<...>";
      try {
        var H = e(b);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var b = P.A;
      return b === null ? null : b.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(b) {
      if (_.call(b, "key")) {
        var H = Object.getOwnPropertyDescriptor(b, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, H) {
      function W() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: W,
        configurable: !0
      });
    }
    function l() {
      var b = e(this.type);
      return V[b] || (V[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, H, W, Y, Q, se) {
      var D = W.ref;
      return b = {
        $$typeof: f,
        type: b,
        key: H,
        props: W,
        _owner: Y
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function h(b, H, W, Y, Q, se) {
      var D = H.children;
      if (D !== void 0)
        if (Y)
          if (j(D)) {
            for (Y = 0; Y < D.length; Y++)
              d(D[Y]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(D);
      if (_.call(H, "key")) {
        D = e(b);
        var te = Object.keys(H).filter(function(Ie) {
          return Ie !== "key";
        });
        Y = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", ce[D + Y] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          D,
          te,
          D
        ), ce[D + Y] = !0);
      }
      if (D = null, W !== void 0 && (n(W), D = "" + W), s(H) && (n(H.key), D = "" + H.key), "key" in H) {
        W = {};
        for (var Te in H)
          Te !== "key" && (W[Te] = H[Te]);
      } else W = H;
      return D && a(
        W,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        D,
        W,
        i(),
        Q,
        se
      );
    }
    function d(b) {
      g(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === R && (b._payload.status === "fulfilled" ? g(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function g(b) {
      return typeof b == "object" && b !== null && b.$$typeof === f;
    }
    var p = Xe, f = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), E = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), P = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, j = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var z, V = {}, X = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), oe = U(r(o)), ce = {};
    Ce.Fragment = y, Ce.jsx = function(b, H, W) {
      var Y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        b,
        H,
        W,
        !1,
        Y ? Error("react-stack-top-frame") : X,
        Y ? U(r(b)) : oe
      );
    }, Ce.jsxs = function(b, H, W) {
      var Y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        b,
        H,
        W,
        !0,
        Y ? Error("react-stack-top-frame") : X,
        Y ? U(r(b)) : oe
      );
    };
  })()), Ce;
}
var Yt;
function xr() {
  return Yt || (Yt = 1, process.env.NODE_ENV === "production" ? ze.exports = mr() : ze.exports = yr()), ze.exports;
}
var c = xr();
const gt = 100, pt = 50, ft = 200, Kt = 5, ht = (e) => e < ft, mt = (e) => e > pt, Tr = 96, le = (e) => Math.round(e * Tr), Ze = {
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
}, de = "NORMAL", hn = (e = de) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: le(e.top),
      bottom: le(e.bottom),
      left: le(e.left),
      right: le(e.right)
    };
  const t = Ze[e] || Ze[de];
  return {
    top: le(t.top),
    bottom: le(t.bottom),
    left: le(t.left),
    right: le(t.right)
  };
}, br = (e = de) => {
  const t = hn(e);
  return t.top + t.bottom;
}, Er = () => Object.keys(Ze), wr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ze[e];
  return t ? t.label : "Unknown";
}, Ve = {
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
}, mn = "A4", Se = (e) => {
  const t = Ve[e] || Ve[mn];
  return {
    width: t.width,
    height: t.height
  };
}, Ui = (e) => Object.keys(Ve).includes(e), Wi = () => Object.keys(Ve), _e = mn, fe = "<p><br></p>", vr = "continuous", Le = (e, t = _e) => ({
  id: Ct(),
  index: e,
  size: t,
  content: fe,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? fe : e, yn = (e, t = _e) => (e.length > 0 ? e : [Le(0, t)]).map((r, i) => ({
  id: r.id || Ct(),
  index: i,
  size: r.size || t,
  content: We(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), Ar = (e = _e) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Se(e).height
}], $e = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), yt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || _e, r = yn(e.pages || [Le(0, n)], n);
  return {
    id: Ct(),
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
    pageBoundaries: e.pageBoundaries || Ar(n),
    zoomLevel: e.zoomLevel || gt,
    pageMargins: e.pageMargins || de,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, B = {
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
    case B.INITIALIZE_DOCUMENT: {
      const { initialContent: r = fe, pageSize: i = _e } = t.payload || {}, o = { ...Le(0, i), content: We(r) };
      return yt({
        title: e.title,
        pageSize: i,
        pages: [o]
      });
    }
    case B.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case B.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[r] = {
        ...o[r],
        content: We(i)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case B.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = yn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : $e(i);
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: o,
        totalPages: i.length,
        updatedAt: n
      };
    }
    case B.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, Le(r, e.pageSize));
      const o = i.map((a, l) => ({
        ...a,
        index: l,
        size: e.pageSize
      })), s = $e(o);
      return {
        ...e,
        pages: o,
        activePage: r,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case B.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const o = i.map((l, u) => ({
        ...l,
        index: u,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const a = $e(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: a,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case B.SET_ACTIVE_PAGE: {
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
    case B.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Se(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((s, a) => ({
        ...s,
        index: a,
        size: r
      })), o = $e(i);
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case B.RESET_DOCUMENT:
      return yt();
    case B.UPDATE_CONTINUOUS_CONTENT: {
      const r = We(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case B.UPDATE_PAGE_BOUNDARIES: {
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
    case B.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (r === "end")
        s = s + o + "<p><br></p>";
      else if (typeof r == "number") {
        const a = s.substring(0, r), l = s.substring(r);
        s = a + o + l;
      } else if (typeof i == "number" && typeof document < "u") {
        const a = document.createElement("div");
        a.innerHTML = s;
        const l = a.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && l.length === 0)
          s = s + o + "<p><br></p>";
        else if (i < l.length) {
          const u = l[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", u.parentNode.insertBefore(h, u.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), s = a.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: n
      };
    }
    case B.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const o = i.querySelectorAll('page-break, [data-page-break="true"]');
      return o[r] && o[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((a, l) => {
        a.setAttribute("data-page-number", String(l + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: n
      };
    }
    case B.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, o = e.pages;
      return r === "continuous" ? i = e.pages.map((a) => a.content).filter((a) => a && a !== fe).join(`
`) || fe : e.continuousContent && e.continuousContent !== fe && (o = [{ ...Le(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: o,
        updatedAt: n
      };
    }
    case B.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < pt || r > ft ? (console.warn(`Invalid zoom level: ${r}. Must be between ${pt} and ${ft}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case B.ZOOM_IN: {
      if (!ht(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Kt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case B.ZOOM_OUT: {
      if (!mt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Kt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case B.RESET_ZOOM:
      return e.zoomLevel === gt ? e : {
        ...e,
        zoomLevel: gt,
        updatedAt: n
      };
    case B.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case B.RECORD_OPERATION: {
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
    case B.UNDO: {
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
    case B.REDO: {
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
    case B.CLEAR_UNDO_REDO:
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
}, xn = dr(null), Gi = ({ children: e, initialState: t = {} }) => {
  const [n, r] = pr(xt, yt(t)), i = J(() => ({
    initializeDocument: (s) => r({ type: B.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => r({ type: B.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => r({ type: B.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => r({ type: B.UPDATE_PAGES, payload: s }),
    addPage: (s) => r({ type: B.ADD_PAGE, payload: s }),
    deletePage: (s) => r({ type: B.DELETE_PAGE, payload: s }),
    setActivePage: (s) => r({ type: B.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => r({ type: B.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => r({ type: B.RESET_DOCUMENT }),
    updateContinuousContent: (s) => r({ type: B.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => r({ type: B.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => r({ type: B.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => r({ type: B.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => r({ type: B.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => r({ type: B.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => r({ type: B.ZOOM_IN }),
    zoomOut: () => r({ type: B.ZOOM_OUT }),
    resetZoom: () => r({ type: B.RESET_ZOOM }),
    updatePageMargins: (s) => r({ type: B.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, a) => r({
      type: B.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: a }
    }),
    undo: () => r({ type: B.UNDO }),
    redo: () => r({ type: B.REDO }),
    clearUndoRedo: () => r({ type: B.CLEAR_UNDO_REDO })
  }), []), o = J(() => ({
    state: n,
    actions: i,
    dispatch: r
  }), [n, i]);
  return /* @__PURE__ */ c.jsx(xn.Provider, { value: o, children: e });
}, Tn = () => {
  const e = gr(xn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, bn = () => {
  const { state: e } = Tn();
  return e;
}, ye = () => {
  const { actions: e } = Tn();
  return e;
}, En = {
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
}, Cr = [
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
], Je = "16px", Rr = (e) => Math.round(e * 96 / 72), kr = (e) => Math.round(e * 72 / 96 * 2) / 2, qi = (e) => {
  const t = Object.values(En).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Rr(e)}px`;
}, Zi = (e) => {
  const t = parseInt(e), n = Object.values(En).find((r) => r.px === t);
  return n ? n.pt : kr(t);
}, Vi = (e) => {
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
}, Lr = {
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
}, Xt = {
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
}, Nr = () => {
  const [e, t] = K(Xt), n = ye(), r = N((p, f, T = null) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const A = y.getRangeAt(0);
      if (!A.toString())
        return t((O) => ({ ...O, [p]: f })), !1;
      try {
        const O = document.createElement("span");
        O.style[p] = f;
        const E = A.extractContents();
        return O.appendChild(E), A.insertNode(O), A.selectNodeContents(O), y.removeAllRanges(), y.addRange(A), t((M) => ({ ...M, [p]: f })), !0;
      } catch {
        if (T) {
          const O = p === "fontSize" ? Lr[f] || "3" : f;
          return document.execCommand(T, !1, O), t((E) => ({ ...E, [p]: f })), !0;
        }
        return !1;
      }
    } catch (y) {
      return console.warn(`[useFormatting] Style application failed for ${p}:`, y), !1;
    }
  }, []), i = N((p) => r("fontFamily", p, "fontName"), [r]), o = N((p) => r("fontSize", p, "fontSize"), [r]), s = N((p) => r("color", p, "foreColor"), [r]), a = N((p) => {
    t((f) => ({
      ...f,
      alignLeft: p === "left",
      alignCenter: p === "center",
      alignRight: p === "right",
      alignJustify: p === "justify"
    }));
  }, []), l = N((p) => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return !1;
      const T = f.getRangeAt(0), y = T.toString(), k = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[p];
      if (!k)
        return !1;
      if (!y) {
        const E = T.startContainer, M = E.nodeType === Node.TEXT_NODE ? E.parentElement : E, m = Ne(M) || _r();
        return m && (m.style.textAlign = k, a(k)), !0;
      }
      const O = Sr(T);
      if (O.length === 0) {
        const E = document.createElement("p");
        E.style.textAlign = k;
        const M = T.extractContents();
        E.appendChild(M), T.insertNode(E), T.selectNodeContents(E), f.removeAllRanges(), f.addRange(T);
      } else
        O.forEach((E) => {
          E.style.textAlign = k;
        });
      return a(k), !0;
    } catch (f) {
      return console.warn("[useFormatting] Text alignment failed:", f), !1;
    }
  }, [a]), u = N((p) => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return !1;
      const T = f.getRangeAt(0), y = document.createElement("div");
      if (y.innerHTML = p, Array.from(y.children).some(
        (k) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(k.tagName)
      )) {
        const k = T.startContainer, O = k.nodeType === Node.TEXT_NODE ? k.parentElement : k, E = Ne(O);
        if (E && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(E.tagName)) {
          const M = E.tagName.toLowerCase();
          if (T.startOffset === 0 && (k === E || k.nodeType === Node.TEXT_NODE && k === E.firstChild))
            E.parentNode.insertBefore(y, E);
          else if (T.startOffset === k.textContent?.length && k === E.lastChild && T.endOffset === k.textContent?.length) {
            const v = E.nextSibling;
            v ? E.parentNode.insertBefore(y, v) : E.parentNode.appendChild(y);
          } else {
            const v = T.extractContents(), R = document.createTextNode(""), S = document.createElement(M);
            S.appendChild(R), S.appendChild(v);
            const w = E.parentNode;
            w.insertBefore(y, E.nextSibling), w.insertBefore(S, y.nextSibling), !E.textContent.trim() && E.children.length === 0 && w.removeChild(E);
          }
        } else
          T.insertNode(y);
        T.setStartAfter(y), T.setEndAfter(y), f.removeAllRanges(), f.addRange(T);
      } else
        document.execCommand("insertHTML", !1, p);
      return !0;
    } catch (f) {
      console.warn("[useFormatting] InsertHTML failed:", f);
      try {
        return document.execCommand("insertHTML", !1, p), !0;
      } catch (T) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", T), !1;
      }
    }
  }, []), h = N((p, f = null) => {
    try {
      if (p === "undo") {
        n.undo();
        return;
      }
      if (p === "redo") {
        n.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (p === "insertHTML" && f) {
        u(f);
        return;
      }
      if (p === "fontSize") {
        o(f);
        return;
      }
      if (p === "fontName") {
        i(f);
        return;
      }
      if (p === "foreColor") {
        s(f);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(p)) {
        l(p);
        return;
      }
      switch (document.execCommand(p, !1, f) || console.warn(`[useFormatting] Command "${p}" failed`), p) {
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
          t((y) => ({ ...y, headingLevel: f }));
          break;
        default:
          break;
      }
    } catch (T) {
      console.warn(`[useFormatting] Error executing command "${p}":`, T);
    }
  }, [o, i, l, u, n]), d = N(() => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return;
      const f = p.getRangeAt(0), T = f.toString();
      let y = Je, A = "Arial", k = "#000000", O = "p", E = "left";
      if (T) {
        const m = f.startContainer, L = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
        if (L) {
          const v = window.getComputedStyle(L), R = v.fontSize, S = v.fontFamily;
          R && R.endsWith("px") && (y = R), S && S !== "serif" && (A = S.split(",")[0].replace(/['"]/g, "").trim());
          const w = v.color;
          w && w !== "rgb(0, 0, 0)" && w !== "#000000" && (w.startsWith("rgb") ? k = Or(w) : k = w);
          const P = Ne(L);
          if (P) {
            const _ = P.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(_) && (O = _);
            const U = window.getComputedStyle(P).textAlign;
            ["left", "center", "right", "justify"].includes(U) && (E = U);
          }
        }
      }
      const M = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: E === "left",
        alignCenter: E === "center",
        alignRight: E === "right",
        alignJustify: E === "justify",
        fontFamily: A,
        fontSize: y,
        fontColor: k,
        headingLevel: O
      };
      t((m) => ({
        ...m,
        ...M
      }));
    } catch (p) {
      console.warn("[useFormatting] Error updating format from selection:", p);
    }
  }, []), g = N(() => {
    t(Xt);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: g,
    updateCurrentFormatFromSelection: d
  };
};
function Or(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), i = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + i).toString(16).slice(1)}`;
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
function Sr(e) {
  const t = [], n = e.startContainer, r = e.endContainer, i = Ne(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = Ne(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (i === o && i)
    return [i];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (l) => {
        const u = l.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(u) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let a = s.nextNode();
  for (; a; )
    e.intersectsNode(a) && t.push(a), a = s.nextNode();
  return t;
}
function _r() {
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
const ge = 'page-break, [data-page-break="true"]', Mr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = Se(n), i = e.querySelectorAll(ge), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), a = e.scrollTop;
  return i.forEach((l, u) => {
    const d = l.getBoundingClientRect().top - s.top + a;
    o.push({
      id: `page-${u + 1}`,
      pageNumber: u + 2,
      top: d,
      height: r.height
    });
  }), o;
}, wn = (e, t = 100, n = de) => {
  const r = Se(e), i = br(n), o = r.height - i, s = t / 100;
  return o / s;
}, Pr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(ge);
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
}, Jt = (e) => {
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
      const o = n[0].getBoundingClientRect(), a = window.getComputedStyle(e).textAlign;
      if (a === "center" || a === "-webkit-center")
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
}, Br = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  try {
    const l = wn(n, r, i) * (t - 1), u = Array.from(e.children);
    let h = 0, d = null;
    for (let g = 0; g < u.length; g++) {
      const p = u[g];
      if (p.tagName === "PAGE-BREAK" || p.getAttribute("data-page-break") === "true")
        continue;
      const f = Ir(p);
      if (h + f > l) {
        d = p;
        break;
      }
      h += f;
    }
    if (d) {
      const g = document.createElement("page-break");
      if (g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(g, d), o) {
        const p = e.innerHTML;
        o(p);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const g = document.createElement("page-break");
      g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), e.appendChild(g);
      const p = document.createElement("p");
      if (p.innerHTML = "<br>", e.appendChild(p), o) {
        const f = e.innerHTML;
        o(f);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (a) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", a), !1;
  }
}, Hr = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const l = Array.from(e.querySelectorAll(ge));
    if (t > l.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const u = window.getSelection();
    let h = !1, d = [], g = null;
    if (t === 0) {
      const f = l[0];
      if (!f)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let T = e.firstChild;
      for (; T && T !== f; )
        d.push(T), T = T.nextSibling;
      g = f;
    } else {
      const f = l[t - 1];
      if (!f)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const T = l[t];
      let y = f.nextSibling;
      for (; y && y !== T; )
        d.push(y), y = y.nextSibling;
      g = f;
    }
    if (u && u.rangeCount > 0) {
      const T = u.getRangeAt(0).startContainer;
      for (const y of d)
        if (y.contains(T) || y === T) {
          h = !0;
          break;
        }
    }
    if (g && g.parentNode && g.remove(), d.forEach((f) => {
      f.parentNode && f.remove();
    }), e.querySelectorAll(ge).forEach((f, T) => {
      f.setAttribute("data-page-number", String(T + 2));
    }), h && o && setTimeout(() => {
      o(0);
    }, 50), r) {
      const f = e.innerHTML;
      r(f);
    }
    return i && setTimeout(() => {
      i(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (l) {
    return console.error("[removePageAndContent] Failed to remove page:", l), !1;
  }
}, Dr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ge).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, zr = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Dr(t), n) {
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
}, $r = 200, Fr = 50, Qt = 3, Ur = 20, vn = (e) => {
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
}, Wr = (e, t) => {
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
}, Gr = (e, t, n, r, i, o, s, a) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const l = wn(t, n, r);
    let u = Jt(e), h = !1, d = 0;
    for (let g = 0; g < u.length && d < Qt; g++) {
      const p = u[g], f = Wr(p, l);
      if (f && f.overflowIndex > 0) {
        let T = 0;
        for (let O = 0; O < p.length; O++) {
          const E = p[O];
          E && E.getBoundingClientRect && (T += vn(E));
        }
        if (T - l < Ur)
          continue;
        const A = g + 2;
        jr(f.overflowElement, A) && (h = !0, d++, u = Jt(e));
      }
    }
    if (h) {
      if (i) {
        const g = e.innerHTML;
        i(g);
      }
      setTimeout(() => {
        o && o(), d >= Qt && a && setTimeout(() => {
          s.current || a();
        }, 100);
      }, Fr);
    }
    return h;
  } catch (l) {
    return console.warn("[checkAndReflow] Reflow failed:", l), !1;
  } finally {
    s.current = !1;
  }
}, qr = (e, t, n = $r) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Zr = 400, An = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const o = e.querySelectorAll(ge)[t - 1];
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
}, Vr = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (n === 0)
      i = t;
    else {
      const s = t.querySelectorAll(ge)[n - 1];
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
        r ? r(n) : An(t, n);
      }, Zr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Yr = (e, t, n = {}, r = 300) => {
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
  const i = e.querySelectorAll(ge);
  for (const h of i)
    if (n.comparePoint(h, 0) > 0)
      r++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset);
  const a = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), l = a.length, u = (a.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: u,
    charOffset: l
  };
}, Xr = 300, Jr = (e, t, n = 100, r = "NARROW") => {
  const i = ye(), o = G(null), s = G(null), a = G(e), l = G(n), u = G(r), h = G(!1);
  q(() => {
    a.current = e;
  }, [e]), q(() => {
    l.current = n;
  }, [n]), q(() => {
    u.current = r;
  }, [r]), q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = N((m = {}) => t?.current ? Mr(t.current, m) : [], [t]), g = N((m = {}) => {
    const L = d(m);
    return i.updatePageBoundaries(L), L;
  }, [d, i]), p = N((m = {}) => {
    const L = typeof m.delay == "number" ? m.delay : Xr;
    Yr(g, o, m, L);
  }, [g]), f = N(() => {
    t?.current && Gr(
      t.current,
      a.current,
      l.current,
      u.current,
      i.updateContinuousContent,
      g,
      h,
      f
    );
  }, [t, i, g]), T = N((m) => {
    qr(f, s, m);
  }, [f]), y = N((m) => !m?.current || !t?.current ? 0 : Pr(m.current, t.current), [t]), A = N((m) => {
    t?.current && An(t.current, m);
  }, [t]), k = N((m, L) => {
    if (!L?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Vr(L.current, t.current, m, A);
  }, [t, A]), O = N(async (m) => t?.current ? Br(
    t.current,
    m,
    a.current,
    l.current,
    u.current,
    i.updateContinuousContent,
    g
  ) : !1, [t, i, g]), E = N((m) => t?.current ? Hr(
    t.current,
    m,
    d,
    i.updateContinuousContent,
    g,
    A,
    f
  ) : !1, [t, d, i, g, A, f]), M = N((m) => t?.current ? zr(
    m,
    t.current,
    i.updateContinuousContent,
    g,
    f
  ) : !1, [t, i, g, f]);
  return q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), J(() => ({
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: p,
    updateBoundaries: g,
    getCurrentPage: y,
    scrollToPage: k,
    positionCursorAtPage: A,
    checkAndReflow: f,
    triggerAutoReflow: T,
    removePageAndContent: E,
    removePageBreak: M,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    p,
    g,
    y,
    k,
    A,
    f,
    T,
    E,
    M,
    O
  ]);
}, Qr = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: i, handleUndo: o, handleRedo: s } = e, { editorRef: a, containerRef: l } = t;
  q(() => {
    const u = (h) => {
      if (h.ctrlKey || h.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(h.key) && h.preventDefault();
        const d = document.activeElement === a.current, g = document.activeElement === l.current, p = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (d || g || !p)
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
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [n, r, i, o, s, a, l]);
}, eo = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = G(null), r = N(() => {
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
  return q(() => {
    const o = () => {
      if (e(), t.current) {
        const a = window.getSelection();
        if (a.rangeCount > 0) {
          const l = a.getRangeAt(0);
          l.collapsed && t.current.contains(l.commonAncestorContainer) && (n.current = l.cloneRange());
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
}, ve = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, I = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Yi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = ve
}) {
  const l = r - t, u = i - n;
  let h = o, d = s;
  switch (e) {
    case I.TOP_LEFT:
      h = Math.max(a.minWidth, o - l), d = Math.max(a.minHeight, s - u);
      break;
    case I.TOP_RIGHT:
      h = Math.max(a.minWidth, o + l), d = Math.max(a.minHeight, s - u);
      break;
    case I.BOTTOM_LEFT:
      h = Math.max(a.minWidth, o - l), d = Math.max(a.minHeight, s + u);
      break;
    case I.BOTTOM_RIGHT:
      h = Math.max(a.minWidth, o + l), d = Math.max(a.minHeight, s + u);
      break;
    case I.TOP:
      d = Math.max(a.minHeight, s - u);
      break;
    case I.BOTTOM:
      d = Math.max(a.minHeight, s + u);
      break;
    case I.LEFT:
      h = Math.max(a.minWidth, o - l);
      break;
    case I.RIGHT:
      h = Math.max(a.minWidth, o + l);
      break;
    default:
      return { width: h, height: d };
  }
  if (a.preserveAspectRatio && a.aspectRatio) {
    const g = o / s;
    [
      I.TOP_LEFT,
      I.TOP_RIGHT,
      I.BOTTOM_LEFT,
      I.BOTTOM_RIGHT
    ].includes(e) ? h / g > d ? d = Math.max(a.minHeight, h / g) : h = Math.max(a.minWidth, d * g) : [I.TOP, I.BOTTOM].includes(e) ? h = d * g : [I.LEFT, I.RIGHT].includes(e) && (d = h / g);
  }
  return a.maxWidth && h > a.maxWidth && (h = a.maxWidth, a.preserveAspectRatio && a.aspectRatio && (d = h / (o / s))), a.maxHeight && d > a.maxHeight && (d = a.maxHeight, a.preserveAspectRatio && a.aspectRatio && (h = d * (o / s))), h = Math.max(a.minWidth, h), d = Math.max(a.minHeight, d), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function he(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ki(e) {
  return he(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Xi(e, { width: t, height: n }) {
  he(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function to(e, t = ve) {
  if (!he(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(I).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = no(o), s.style.pointerEvents = "all", Cn(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function no(e) {
  switch (e) {
    case I.TOP_LEFT:
    case I.BOTTOM_RIGHT:
      return "nwse-resize";
    case I.TOP_RIGHT:
    case I.BOTTOM_LEFT:
      return "nesw-resize";
    case I.TOP:
    case I.BOTTOM:
      return "ns-resize";
    case I.LEFT:
    case I.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Cn(e, t, n, r) {
  switch (t) {
    case I.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case I.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case I.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case I.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case I.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case I.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case I.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case I.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Tt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const o = i.dataset.handler;
    Cn(i, o, n.width, n.height);
  });
}
function at(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ro = "html-editor-storage", oo = 2, re = "images", ue = /* @__PURE__ */ new Map();
function so() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Me() {
  return new Promise((e, t) => {
    const n = indexedDB.open(ro, oo);
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
async function Rn(e) {
  if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type))
    throw new Error("Invalid image format. Supported formats: png, jpeg, gif, webp");
  if (e.size > 2 * 1024 * 1024)
    throw new Error("Image exceeds maximum size of 2MB. Image should be optimized before storage.");
  try {
    const n = await Me(), r = `editor-image-${so()}`, o = n.transaction([re], "readwrite").objectStore(re), s = {
      key: r,
      blob: e,
      // Store the file directly as a Blob
      size: e.size,
      type: e.type,
      name: e.name,
      timestamp: Date.now()
    };
    return new Promise((a, l) => {
      const u = o.add(s);
      u.onsuccess = () => {
        n.close(), a(r);
      }, u.onerror = () => {
        n.close(), l(new Error("Failed to save image to IndexedDB"));
      };
    });
  } catch (n) {
    throw new Error(`Failed to save image: ${n.message}`);
  }
}
async function Rt(e) {
  if (ue.has(e))
    return ue.get(e);
  try {
    const t = await Me();
    return new Promise((n, r) => {
      const s = t.transaction([re], "readonly").objectStore(re).get(e);
      s.onsuccess = () => {
        t.close();
        const a = s.result;
        if (a && a.blob) {
          const l = URL.createObjectURL(a.blob);
          ue.set(e, l), n(l);
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
async function io(e) {
  try {
    ue.has(e) && (URL.revokeObjectURL(ue.get(e)), ue.delete(e));
    const t = await Me();
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
async function Ji() {
  try {
    ue.forEach((t) => URL.revokeObjectURL(t)), ue.clear();
    const e = await Me();
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
async function Qi() {
  try {
    const e = await Me();
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
async function kn(e) {
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
async function ao(e) {
  try {
    return await (await fetch(e)).blob();
  } catch (t) {
    throw console.error("Error converting base64 to blob:", t), t;
  }
}
async function co(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="blob:"]'), r = Array.from(n).map(async (i) => {
    try {
      const o = i.getAttribute("src"), s = await kn(o);
      i.setAttribute("src", s), i.removeAttribute("data-key");
    } catch (o) {
      console.error("Failed to convert image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function en(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="data:image/"]'), r = Array.from(n).map(async (i) => {
    try {
      const o = i.getAttribute("src"), s = await ao(o), a = s.type || "image/png", l = a.split("/")[1] || "png", u = `imported-image-${Date.now()}.${l}`, h = new File([s], u, { type: a }), d = await Rn(h), g = await Rt(d);
      g && (i.setAttribute("src", g), i.setAttribute("data-key", d));
    } catch (o) {
      console.error("Failed to convert and store image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function ea(e) {
  try {
    const t = await Rt(e);
    return t ? await kn(t) : null;
  } catch (t) {
    return console.error("Error getting image as base64:", t), null;
  }
}
const Ln = [
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
], lo = [
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
], uo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function go(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Nn(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function Ge(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, Oe(n) || "<p><br></p>";
}
function po(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function fo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => Ln.includes(n.tagName));
}
function ho(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      Ln.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Oe(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${go(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i, s = o.tagName, a = s.toLowerCase(), l = Nn(o);
      if (s === "DIV") {
        const u = Oe(o);
        u.trim() ? t.push(u) : t.push("<p><br></p>");
      } else if (s === "P")
        fo(o) ? t.push(ho(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const u = po(o);
        t.push(`<${a}${l}>${u}</${a}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(mo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(yo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const u = Oe(o);
        t.push(`<blockquote${l}>${u}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (lo.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (uo.includes(s))
        t.push(o.outerHTML);
      else {
        const u = Oe(o);
        t.push(`<${a}${l}>${u}</${a}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function mo(e) {
  const t = e.tagName.toLowerCase(), n = Nn(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const o = Oe(i);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function yo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), To = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), tn = (e) => {
  const t = To(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, On = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), bo = (e) => {
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
const wo = At(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, l) => dt(
    "svg",
    {
      ref: l,
      ...Eo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: On("lucide", i),
      ...!o && !bo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([u, h]) => dt(u, h)),
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
    ({ className: r, ...i }, o) => dt(wo, {
      ref: o,
      iconNode: t,
      className: On(
        `lucide-${xo(tn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = tn(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Ao = Z("arrow-down", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Ro = Z("arrow-left", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Lo = Z("arrow-right", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Oo = Z("arrow-up", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], _o = Z("chevron-left", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Po = Z("chevron-right", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], jo = Z("download", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Ho = Z("file-check", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], bt = Z("file-text", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], $o = Z("hash", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Uo = Z("heading-1", Fo);
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
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Go = Z("heading-2", Wo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Zo = Z("heading-3", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Yo = Z("image-upscale", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Xo = Z("list", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
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
], Qo = Z("palette", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ts = Z("plus", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], rs = Z("scaling", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ss = Z("settings", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Sn = Z("text-align-center", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], _n = Z("text-align-end", as);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mn = Z("text-align-start", cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Et = Z("trash-2", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ds = Z("x", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ps = Z("zoom-in", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], hs = Z("zoom-out", fs), nn = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((o, s) => {
    const a = parseInt(o.tagName.charAt(1)), l = o.textContent.trim();
    return l ? {
      id: `${n}heading-${s}`,
      level: a,
      text: l,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, ms = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, ys = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = bn(), { pages: o, activePage: s, continuousContent: a } = i, { wordCount: l, outline: u } = J(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: nn(a, 1, "continuous-")
      };
    let d = 0;
    const g = [];
    return o.forEach((p, f) => {
      d += ms(p.content), g.push(...nn(p.content, f + 1, `page-${f}-`));
    }), { wordCount: d, outline: g };
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
            /* @__PURE__ */ c.jsx(bt, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ c.jsx(Po, { size: 16 }) : /* @__PURE__ */ c.jsx(_o, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Ho, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: h })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx($o, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: l.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(bt, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          u.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(Xo, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: u.map((d) => {
              const g = d.level === 1 ? Uo : d.level === 2 ? Go : Zo;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(g, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ c.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ c.jsxs("span", { className: "outline-page", children: [
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
}, xs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), Ts = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ c.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ c.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ c.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), Es = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ c.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ c.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), ws = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), vs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), As = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), Cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), Rs = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), ks = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ c.jsx("path", { d: "M6 18v0" })
] }), Ls = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ c.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), Ns = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ c.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ c.jsx("path", { d: "M15 6v12" })
] }), Os = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ c.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ c.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ c.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), Ss = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ c.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), _s = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ c.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), Ms = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ c.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ c.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), Ps = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Is = ({ size: e = 16, ...t }) => /* @__PURE__ */ c.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ c.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ c.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), js = {
  maxWidth: 1200,
  maxHeight: 1200,
  maxSizeBytes: 2 * 1024 * 1024,
  // 2MB
  initialQuality: 0.9,
  minQuality: 0.6,
  qualityStep: 0.05
};
async function Bs(e, t = {}) {
  const n = { ...js, ...t };
  return new Promise((r, i) => {
    const o = new Image(), s = new FileReader();
    s.onload = (a) => {
      o.src = a.target.result;
    }, s.onerror = () => {
      i(new Error("Failed to read image file"));
    }, o.onload = async () => {
      try {
        let { width: a, height: l } = o;
        const u = a, h = l, d = a / l;
        let g = !1;
        (a > n.maxWidth || l > n.maxHeight) && (g = !0, a > l ? (a = Math.min(a, n.maxWidth), l = a / d) : (l = Math.min(l, n.maxHeight), a = l * d), a = Math.round(a), l = Math.round(l));
        const p = document.createElement("canvas");
        p.width = a, p.height = l;
        const f = p.getContext("2d");
        f.imageSmoothingEnabled = !0, f.imageSmoothingQuality = "high", f.drawImage(o, 0, 0, a, l);
        const T = e.type === "image/png" && Hs(f, a, l) ? "image/png" : "image/jpeg", y = await Pn(
          p,
          T,
          n.maxSizeBytes,
          n.initialQuality,
          n.minQuality,
          n.qualityStep
        ), A = T === "image/png" ? ".png" : ".jpg", k = e.name.replace(/\.[^/.]+$/, "") + A, O = new File([y], k, { type: T }), E = O.size < e.size;
        r({
          file: O,
          width: a,
          height: l,
          originalSize: e.size,
          optimizedSize: O.size,
          wasOptimized: g || E,
          wasResized: g,
          wasCompressed: E,
          originalWidth: u,
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
function Hs(e, t, n) {
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
async function Pn(e, t, n, r, i, o) {
  let s = r, a = null;
  if (t === "image/png")
    return a = await rn(e, t, s), a.size > n ? Pn(e, "image/jpeg", n, r, i, o) : a;
  for (; s >= i; ) {
    if (a = await rn(e, t, s), a.size <= n)
      return a;
    s -= o;
  }
  return a;
}
function rn(e, t, n) {
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
function on(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB"], r = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, r) * 100) / 100 + " " + n[r];
}
function Ds(e) {
  if (!e.wasOptimized)
    return "Image inserted";
  const t = [];
  return e.wasResized && t.push(`resized from ${e.originalWidth}×${e.originalHeight} to ${e.width}×${e.height}`), e.wasCompressed && t.push(`compressed from ${on(e.originalSize)} to ${on(e.optimizedSize)}`), `Image optimized: ${t.join(", ")}`;
}
class zs {
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
const Re = new zs("Editor"), In = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), jn = 32;
function Bn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * jn}px`, e.dataset.indentLevel = String(r));
}
function $s(e, t) {
  Bn(e, t);
}
function Fs(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && In.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Us() {
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
      let u = a.parentElement;
      for (; u && u !== r; ) {
        if (u.tagName && In.has(u.tagName.toUpperCase())) {
          n.add(u);
          break;
        }
        u = u.parentElement;
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
function Ws(e) {
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
function wt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = Us();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = Fs(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const i = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      $s(s, e);
      return;
    }
    e ? Ws(s) : Bn(s, !1);
  });
  try {
    const s = document.createRange(), a = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), l = (d) => {
      if (d.nodeType === Node.TEXT_NODE)
        return d;
      const g = document.createTreeWalker(
        d,
        NodeFilter.SHOW_TEXT,
        null
      );
      let p = null, f = g.nextNode();
      for (; f; )
        p = f, f = g.nextNode();
      return p;
    }, u = a(i);
    u ? s.setStart(u, 0) : s.setStart(i, 0);
    const h = l(o);
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
function Gs(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && wt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Hn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
  const [r, i] = K(!1), o = G(null), s = [
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
    const u = (h) => {
      o.current && !o.current.contains(h.target) && i(!1);
    };
    return document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, []);
  const a = (u) => {
    t(u), i(!1);
  }, l = (u) => {
    const h = u.target.value;
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
        children: /* @__PURE__ */ c.jsx(Qo, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ c.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ c.jsx("div", { className: "color-grid", children: s.map((u) => /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => a(u),
          className: `color-option ${e === u ? "selected" : ""}`,
          style: {
            backgroundColor: u,
            border: e === u ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: u
        },
        u
      )) }),
      /* @__PURE__ */ c.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ c.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ c.jsx(
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
Hn.propTypes = {
  currentColor: x.string,
  onColorSelect: x.func.isRequired,
  title: x.string
};
const qs = [
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
], Zs = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Vs = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', kt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: i = !1,
  canRedo: o = !1
}) => {
  const s = (p, f, T, y = null, A = !1) => /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: p,
      className: y && e[y] ? "active" : "",
      disabled: A,
      title: T,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ c.jsx(f, { size: 16 })
    },
    T
  ), a = () => /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }), l = async (p) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(p.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      p.size > 1 * 1024 * 1024 && Re.info("Optimizing large image...");
      const y = await Bs(p), A = y.file;
      if (y.wasOptimized) {
        const E = Ds(y);
        Re.info(E), console.log("Image optimization:", {
          original: `${y.originalWidth}×${y.originalHeight} (${(y.originalSize / 1024 / 1024).toFixed(2)}MB)`,
          optimized: `${y.width}×${y.height} (${(y.optimizedSize / 1024 / 1024).toFixed(2)}MB)`
        });
      }
      if (A.size > 2097152) {
        alert("Unable to compress image to under 2MB. Please use a smaller or simpler image."), Re.warn("Image still exceeds 2MB after optimization");
        return;
      }
      const k = await Rn(A), O = await Rt(k);
      if (O && r) {
        const E = `<img src="${O}" data-key="${k}" alt="Inserted image" style="max-width: 100%;" />`;
        r(E);
      } else
        Re.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (f) {
      Re.error("Error uploading image", f), alert(`Failed to upload image: ${f.message}`);
    }
  }, u = () => {
    wt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, h = () => {
    wt(!0);
  }, d = () => {
    const p = prompt("Enter URL:");
    p && t("createLink", p);
  }, g = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Ss, "Undo", null, !i),
    s(() => t("redo"), _s, "Redo", null, !o),
    a(),
    s(() => t("bold"), xs, "Bold", "bold"),
    s(() => t("italic"), Ts, "Italic", "italic"),
    s(() => t("underline"), bs, "Underline", "underline"),
    s(() => t("strikethrough"), Es, "Strikethrough", "strikethrough"),
    a(),
    s(() => t("justifyLeft"), ws, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), vs, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), As, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Cs, "Justify", "alignJustify"),
    a(),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (p) => t("fontName", p.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: qs.map(({ value: p, label: f }) => /* @__PURE__ */ c.jsx("option", { value: p, children: f }, p))
      }
    ),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (p) => t("fontSize", p.target.value),
        value: e.fontSize || Je,
        title: "Font Size",
        children: Cr.map(({ value: p, label: f }) => /* @__PURE__ */ c.jsx("option", { value: p, children: f }, p))
      }
    ),
    /* @__PURE__ */ c.jsx(
      Hn,
      {
        currentColor: e.fontColor,
        onColorSelect: (p) => t("foreColor", p),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (p) => t("formatBlock", p.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Zs.map(({ value: p, label: f }) => /* @__PURE__ */ c.jsx("option", { value: p, children: f }, p))
      }
    ),
    a(),
    s(() => t("insertUnorderedList"), Rs, "Bullet List"),
    s(() => t("insertOrderedList"), ks, "Numbered List"),
    a(),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: u,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ c.jsx(Ps, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: h,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ c.jsx(Is, { size: 16 })
      }
    ),
    a(),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(Ls, { size: 16 })
      }
    ),
    s(() => t("insertHTML", Vs), Ns, "Insert Table"),
    n && s(n, Os, "Insert Page Break"),
    a(),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (p) => p.target.files[0] && l(p.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: g,
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(Ms, { size: 16 })
      }
    )
  ] });
};
kt.propTypes = {
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
kt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function Ys(e) {
  return !e || typeof e != "string" ? e : Ge(e);
}
function Ks(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Ys(n) : n = Xs(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Xs(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => Js(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function Js(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Qs = 20, ei = 20, sn = 20, an = -12, ti = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, ni = {
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
}, ct = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, ri = (e, t, n) => !!((me(t) || me(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), oi = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (me(t) || me(n))), me = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && me(e.parentElement) : !1, Lt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: o,
  onScroll: s,
  onPaste: a,
  onRemovePageBreak: l,
  zoomLevel: u = 100,
  pageMargins: h = de
}) => {
  const d = J(() => hn(h), [h]), g = u / 100, p = N((E, M) => {
    if (!E) return !1;
    const m = E.getBoundingClientRect(), L = M - m.top;
    return L < d.top || L > m.height - d.bottom;
  }, [d.top, d.bottom]), f = N((E, M) => {
    M.preventDefault();
    const m = E.getBoundingClientRect(), L = M.clientX - m.left, v = M.clientY - m.top, R = m.width - sn - Qs, S = an, w = m.width - sn, P = an + ei;
    L >= R && L <= w && v >= S && v <= P && l && l(E);
  }, [l]), T = N((E) => {
    E.preventDefault();
    const M = t.current.getBoundingClientRect();
    if (E.clientY - M.top < d.top) {
      const L = t.current.firstElementChild;
      L && L.tagName !== "PAGE-BREAK" && ct(L, !0);
    } else {
      const L = t.current.lastElementChild;
      L && L.tagName !== "PAGE-BREAK" && ct(L, !1);
    }
  }, [t, d.top]), y = N((E) => {
    const M = window.getSelection();
    if (!M || M.rangeCount === 0) return;
    const m = M.getRangeAt(0), { startContainer: L, endContainer: v } = m;
    if (ri(E, L, v))
      return E.preventDefault(), !1;
    if (E.key === "Enter" && !E.shiftKey) {
      let R = L;
      for (R.nodeType === Node.TEXT_NODE && (R = R.parentElement); R && R !== t.current; ) {
        if (/^H[1-6]$/.test(R.tagName)) {
          E.preventDefault();
          const S = document.createElement("p");
          return S.innerHTML = "<br>", R.nextSibling ? R.parentNode.insertBefore(S, R.nextSibling) : R.parentNode.appendChild(S), ct(S, !0), r && r(), !1;
        }
        R = R.parentElement;
      }
    }
    if (Gs(E))
      return r && r(), !1;
    if (oi(E, L, v))
      return E.preventDefault(), !1;
    i && i(E);
  }, [i, r, t]), A = N((E) => {
    if (!t.current) return;
    const M = E.target;
    if (me(M)) {
      f(M, E);
      return;
    }
    if (p(t.current, E.clientY)) {
      T(E);
      return;
    }
    o && o(E);
  }, [t, o, f, T, p]), k = N((E) => {
    const M = window.getSelection();
    if (!M || M.rangeCount === 0) return;
    const m = M.getRangeAt(0), { startContainer: L } = m;
    if (me(L))
      return E.preventDefault(), !1;
  }, []), O = N((E) => {
    const M = Ks(E);
    a && a(E, M);
  }, [a]);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...ti,
        maxWidth: `${e.width}px`,
        transform: `scale(${g})`,
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
            ...ni,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`
          },
          onInput: n,
          onKeyDown: y,
          onBeforeInput: k,
          onClick: A,
          onScroll: s,
          onPaste: O,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Lt.propTypes = {
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
Lt.defaultProps = {
  zoomLevel: 100,
  pageMargins: de
};
const si = fr(Lt), Dn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = de,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: a,
  onAddPage: l,
  onDeletePage: u,
  onPageSizeChange: h,
  onPageMarginsChange: d,
  onZoomIn: g,
  onZoomOut: p,
  onZoomReset: f
} = {}) => {
  const T = Math.max(e?.length || 0, 1), y = (A) => {
    if (T <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    u?.(A);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ c.jsx(ss, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (A) => h?.(A.target.value),
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
              onChange: (A) => d?.(A.target.value),
              children: Er().map((A) => /* @__PURE__ */ c.jsx("option", { value: A, children: wr(A) }, A))
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
          onClick: p,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ c.jsx(hs, { size: 12 })
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
          onClick: g,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ c.jsx(ps, { size: 12 })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: f,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: e.map((A, k) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${k === t ? "active" : ""}`,
          onClick: () => a?.(k),
          "aria-label": `Go to page ${k + 1}`,
          "aria-current": k === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(bt, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              k + 1
            ] })
          ]
        }
      ),
      T > 1 && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (O) => {
            O.stopPropagation(), y(k);
          },
          "aria-label": `Delete page ${k + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(ds, { size: 14 })
        }
      )
    ] }, A.id || `page-${k}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => l?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(ts, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Dn.propTypes = {
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
const ii = Xe.memo(Dn), Fe = 10, ai = 300, ci = 200;
function li(e) {
  switch (e) {
    case I.TOP_LEFT:
    case I.BOTTOM_RIGHT:
      return "nwse-resize";
    case I.TOP_RIGHT:
    case I.BOTTOM_LEFT:
      return "nesw-resize";
    case I.TOP:
    case I.BOTTOM:
      return "ns-resize";
    case I.LEFT:
    case I.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function ui(e, t, n, r, i, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    I.TOP_LEFT,
    I.TOP_RIGHT,
    I.BOTTOM_LEFT,
    I.BOTTOM_RIGHT
  ].includes(i) ? e / s > t ? t = e / s : e = t * s : [I.TOP, I.BOTTOM].includes(i) ? e = t * s : [I.LEFT, I.RIGHT].includes(i) && (t = e / s), { width: e, height: t };
}
function di({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = ve
}) {
  const l = r - t, u = i - n;
  let h = o, d = s;
  switch (e) {
    case I.TOP_LEFT:
      h = o - l, d = s - u;
      break;
    case I.TOP_RIGHT:
      h = o + l, d = s - u;
      break;
    case I.BOTTOM_LEFT:
      h = o - l, d = s + u;
      break;
    case I.BOTTOM_RIGHT:
      h = o + l, d = s + u;
      break;
    case I.TOP:
      d = s - u;
      break;
    case I.BOTTOM:
      d = s + u;
      break;
    case I.LEFT:
      h = o - l;
      break;
    case I.RIGHT:
      h = o + l;
      break;
    default:
      return { width: h, height: d };
  }
  return { width: h, height: d } = ui(
    h,
    d,
    o,
    s,
    e,
    a
  ), a.maxWidth && h > a.maxWidth && (h = a.maxWidth, a.preserveAspectRatio && (d = h / (o / s))), a.maxHeight && d > a.maxHeight && (d = a.maxHeight, a.preserveAspectRatio && (h = d * (o / s))), h = Math.max(a.minWidth, Math.min(a.maxWidth || h, h)), d = Math.max(a.minHeight, Math.min(a.maxHeight || d, d)), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function zn(e, { width: t, height: n }) {
  he(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function gi(e, t, n) {
  zn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function pi(e, t, n, r) {
  const { ctrlKey: i, metaKey: o, shiftKey: s, key: a } = e, l = i || o, u = n.offsetWidth, h = n.offsetHeight, g = {
    // Increase width
    ">": l && s ? () => ({
      width: Math.min(r.maxWidth || 800, u + Fe),
      height: h
    }) : null,
    // Decrease width
    "<": l && s ? () => ({
      width: Math.max(r.minWidth || 50, u - Fe),
      height: h
    }) : null,
    // Increase height
    "+": l && s ? () => ({
      width: u,
      height: Math.min(r.maxHeight || 600, h + Fe)
    }) : null,
    // Decrease height
    "-": l && s ? () => ({
      width: u,
      height: Math.max(r.minHeight || 50, h - Fe)
    }) : null,
    // Reset to default
    r: l && !s ? () => ({ width: ai, height: ci }) : null
  }[a];
  if (g) {
    e.preventDefault();
    const p = g();
    return gi(t, n, p), !0;
  }
  return !1;
}
const Nt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: i = ve
}) => {
  const o = G({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = G(i), a = ye();
  q(() => {
    s.current = i;
  }, [i]);
  const l = N((y) => {
    if (!he(y)) return;
    o.current.overlay && (at(o.current.overlay), o.current.overlay = null), y.classList.add("selected");
    const A = to(y, s.current);
    A && (o.current.overlay = A, o.current.image = y, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((O) => {
      O.addEventListener("mousedown", h);
    }), n && n(y));
  }, [n]), u = N(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (at(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), h = N((y) => {
    if (y.preventDefault(), y.stopPropagation(), !o.current.image) return;
    const A = y.currentTarget.dataset.handler, k = o.current.image.getBoundingClientRect(), O = window.pageYOffset || document.documentElement.scrollTop, E = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: y.clientX,
      y: y.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: y.clientX - k.left - E,
      offsetY: y.clientY - k.top - O
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = li(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", g);
  }, []), d = N((y) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    y.preventDefault(), y.stopPropagation();
    const { x: A, y: k, width: O, height: E } = o.current.start, M = o.current.handler, m = y.clientX, L = y.clientY, v = di({
      handler: M,
      startX: A,
      startY: k,
      currentX: m,
      currentY: L,
      startWidth: O,
      startHeight: E,
      options: s.current
    });
    zn(o.current.image, v), o.current.overlay && Tt(o.current.overlay, o.current.image);
  }, []), g = N((y) => {
    if (o.current.isResizing) {
      if (y.preventDefault(), y.stopPropagation(), o.current.image && o.current.start) {
        const A = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, k = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (A.width !== k.width || A.height !== k.height) && a.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: k } },
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
  }, [t, a]), p = N((y) => {
    o.current.overlay && !o.current.overlay.contains(y.target) && u();
    const A = y.target;
    if (he(A)) {
      if (A === o.current.image)
        return;
      l(A);
    }
  }, [l, u]), f = N((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && o.current.image && !o.current.isResizing) {
      y.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), u();
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
    y.key === "Escape" && o.current.image && u(), o.current.image && !o.current.isResizing && pi(y, e, o.current.image, s.current);
  }, [e, u]), T = N(() => {
    o.current.overlay && o.current.image && Tt(o.current.overlay, o.current.image);
  }, []);
  return q(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", T), window.addEventListener("scroll", T)), () => {
      A && A.removeEventListener("scroll", T), window.removeEventListener("scroll", T);
    };
  }, [e, T]), q(() => {
    if (!e.current) return;
    const y = e.current;
    return y.addEventListener("click", p), y.addEventListener("keydown", f), window.addEventListener("resize", T), () => {
      y.removeEventListener("click", p), y.removeEventListener("keydown", f), window.removeEventListener("resize", T), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && at(o.current.overlay);
    };
  }, [e, p, f, T, d, g]), q(() => {
    if (!e.current) return;
    const y = new MutationObserver((A) => {
      A.forEach((k) => {
        k.type === "childList" && k.removedNodes.forEach((O) => {
          O.nodeType === Node.ELEMENT_NODE && he(O) && O === o.current.image && u();
        });
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => y.disconnect();
  }, [e, u, l]), null;
};
Nt.propTypes = {
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
Nt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ve
};
const Ot = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, fi = {
  ...Ot,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, lt = (e) => ({
  ...Ot,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), St = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, a] = K({ top: 0, left: 0 }), [l, u] = K(!1), [h, d] = K("top"), [g, p] = K(o), f = G(null), T = ye(), y = (w) => {
    w && requestAnimationFrame(() => {
      const P = document.querySelector(".image-resize-overlay");
      P && Tt(P, w);
    });
  }, A = (w) => {
    if (!w) return null;
    const P = window.getComputedStyle(w);
    return {
      float: P.float || "none",
      margin: w.style.margin || "",
      display: P.display || "inline",
      width: w.style.width || w.width || "",
      height: w.style.height || w.height || "",
      aspectRatio: g
    };
  }, k = N(() => {
    if (!e) return "left";
    const w = window.getComputedStyle(e);
    return w.float === "right" ? "right" : w.float === "left" ? "left" : w.display === "block" && w.margin.includes("auto") ? "center" : "left";
  }, [e]), [O, E] = K("left");
  q(() => {
    e && E(k());
  }, [e, k]);
  const M = N(() => {
    if (!e || !f.current) return;
    const w = e.getBoundingClientRect(), P = f.current.getBoundingClientRect(), _ = window.innerWidth, j = window.innerHeight, U = w.bottom >= 0 && w.top <= j && w.right >= 0 && w.left <= _;
    let z = "top", V = 0, X = 0;
    if (U) {
      const b = w.top - P.height - 10, H = j - w.bottom - P.height - 10;
      H > b && H > 0 ? (z = "bottom", V = w.bottom + 10) : (z = "top", V = w.top - P.height - 10);
    } else
      z = "top", V = 10;
    X = w.left + w.width / 2 - P.width / 2;
    let oe = Math.max(10, Math.min(X, _ - P.width - 10)), ce = Math.max(10, Math.min(V, j - P.height - 10));
    a({ top: ce, left: oe }), d(z), u(!0);
  }, [e]);
  pn(() => {
    M();
    const w = () => {
      M();
    };
    return window.addEventListener("scroll", w), window.addEventListener("resize", w), () => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", w), u(!1);
    };
  }, [e, M]), q(() => {
    const w = (P) => {
      f.current && !f.current.contains(P.target) && P.target !== e && i();
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [e, i]);
  const m = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, L = (w) => {
    if (e && m[w]) {
      const P = A(e), _ = O, j = m[w];
      e.style.float = j.float, e.style.margin = j.margin, e.style.display = j.display, E(w), y(e);
      const U = A(e);
      T.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w, state: U } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _, state: P } }
      ), t && t(w);
    }
  }, v = () => {
    if (e && e.parentNode) {
      const w = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      T.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: w } }
      ), e.parentNode.removeChild(e), r && r(), i();
    }
  }, R = () => {
    const w = g, P = !g;
    p(P), T.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: P } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: w } }
    ), n && n(P);
  }, S = () => {
    if (!e) return;
    const w = e.src;
    let P = "image.png";
    try {
      if (w.startsWith("blob:"))
        P = "image.png";
      else {
        const U = new URL(w).pathname.split("/"), z = U[U.length - 1];
        z && z.includes(".") && (P = z);
      }
    } catch {
      P = "image.png";
    }
    const _ = document.createElement("a");
    _.href = w, _.download = P, _.style.display = "none", document.body.appendChild(_), _.click(), document.body.removeChild(_);
  };
  return !e || typeof document > "u" ? null : fn(
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: f,
        className: "image-tooltip-menu",
        "data-menu-position": h,
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
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${g ? "" : "active"}`,
              onClick: R,
              title: `Toggle aspect ratio preservation (currently ${g ? "ON" : "OFF"})`,
              children: g ? /* @__PURE__ */ c.jsx(rs, { size: 14 }) : /* @__PURE__ */ c.jsx(Yo, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "tooltip-button download-button",
              onClick: S,
              title: "Download Image",
              style: Ot,
              children: /* @__PURE__ */ c.jsx(jo, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${O === "left" ? "active" : ""}`,
              onClick: () => L("left"),
              title: "Align Left",
              style: lt(O === "left"),
              children: /* @__PURE__ */ c.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${O === "center" ? "active" : ""}`,
              onClick: () => L("center"),
              title: "Align Center",
              style: lt(O === "center"),
              children: /* @__PURE__ */ c.jsx(Sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${O === "right" ? "active" : ""}`,
              onClick: () => L("right"),
              title: "Align Right",
              style: lt(O === "right"),
              children: /* @__PURE__ */ c.jsx(_n, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: v,
              title: "Delete Image",
              style: fi,
              children: /* @__PURE__ */ c.jsx(Et, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
St.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
St.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const qe = (e) => {
  e.preventDefault(), e.stopPropagation();
}, hi = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((i) => {
      r.classList.remove(i);
    });
  });
}, cn = (e, t) => !e || !t ? !1 : e.contains(t), mi = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, _t = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, F = {
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
    for (let l = 0; l < r; l++) {
      const u = s[l], h = u.style.width ? parseInt(u.style.width, 10) : u.offsetWidth;
      i.push(h || 100);
    }
  else if (n.length > 0) {
    const l = n[0];
    for (let u = 0; u < l.cells.length; u++) {
      const h = l.cells[u];
      i.push(h.offsetWidth);
    }
  }
  const a = n.map((l) => (l.style.height ? parseInt(l.style.height, 10) : null) || l.offsetHeight);
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
function yi({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = _t
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (a, l, u, h, d) => {
    l >= 0 && l < a.length && (a[l] = Math.max(h, Math.min(d, a[l] + u)));
  };
  switch (e) {
    case F.COLUMN:
      s(o.columnWidths, t, n, i.minColumnWidth, i.maxColumnWidth), o.tableWidth = r.width;
      break;
    case F.ROW:
      s(o.rowHeights, t, n, i.minRowHeight, i.maxRowHeight), o.tableHeight = r.height;
      break;
    case F.TABLE_BOTTOM:
      s(o.rowHeights, r.rows - 1, n, i.minRowHeight, i.maxRowHeight);
      break;
    case F.TABLE_RIGHT:
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
      const a = document.createElement("col");
      r.appendChild(a);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(i[s]);
}
function Pe(e, t) {
  if (!ie(e)) return;
  xe(e);
  const { columnWidths: n, rowHeights: r, tableWidth: i, tableHeight: o } = t, s = n ? n.reduce((l, u) => l + u, 0) : 0, a = r ? r.reduce((l, u) => l + u, 0) : 0;
  if (i !== void 0 ? e.style.width = `${i}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : a > 0 && (e.style.height = `${a}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((h, d) => {
      d < n.length && (h.style.width = `${n[d]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((u, h) => {
    h < r.length && (u.style.height = `${r[h]}px`);
  }), e.style.height = `${a}px`), e.offsetHeight;
}
function xi(e) {
  if (!ie(e)) return null;
  xe(e);
  const t = ae(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const a = Ye(F.COLUMN, s, t, r, e);
    n.appendChild(a);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const a = Ye(F.ROW, s, t, r, e);
    n.appendChild(a);
  }
  const i = Ke(F.TABLE_BOTTOM, t, r);
  n.appendChild(i);
  const o = Ke(F.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const Ti = {
  [F.COLUMN]: {
    className: "table-resize-handler table-column-resize-handler",
    cursor: "col-resize",
    isVertical: !0
  },
  [F.ROW]: {
    className: "table-resize-handler table-row-resize-handler",
    cursor: "row-resize",
    isVertical: !1
  },
  [F.TABLE_BOTTOM]: {
    className: "table-resize-handler table-bottom-resize-handler",
    cursor: "ns-resize",
    isVertical: !1
  },
  [F.TABLE_RIGHT]: {
    className: "table-resize-handler table-right-resize-handler",
    cursor: "ew-resize",
    isVertical: !0
  }
};
function $n(e, t, n) {
  const r = Ti[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const i = document.createElement("div");
  return i.className = r.className, i.dataset.type = e, i.style.position = "absolute", i.style.cursor = r.cursor, i.style.pointerEvents = "all", r.isVertical ? (i.style.width = "4px", i.style.height = `${t}px`) : (i.style.width = `${t}px`, i.style.height = "4px"), n != null && (i.dataset.index = n), i;
}
function Ye(e, t, n, r, i) {
  const o = e === F.COLUMN ? r.height : r.width, s = $n(e, o, t);
  return we(s, e, t, n, r, i), s;
}
function Ke(e, t, n) {
  const r = e === F.TABLE_RIGHT ? n.height : n.width, i = $n(e, r);
  return we(i, e, null, t, n, null), i;
}
function vt(e, t) {
  if (!e || !t) return;
  xe(t);
  const n = ae(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), a = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !a) {
    e.innerHTML = "";
    for (let d = 0; d < n.columns - 1; d++) {
      const g = Ye(F.COLUMN, d, n, r, t);
      e.appendChild(g);
    }
    for (let d = 0; d < n.rows - 1; d++) {
      const g = Ye(F.ROW, d, n, r, t);
      e.appendChild(g);
    }
    const u = Ke(F.TABLE_BOTTOM, n, r);
    e.appendChild(u);
    const h = Ke(F.TABLE_RIGHT, n, r);
    e.appendChild(h);
  } else
    i.forEach((u, h) => {
      we(u, F.COLUMN, h, n, r, t);
    }), o.forEach((u, h) => {
      we(u, F.ROW, h, n, r, t);
    }), s && we(s, F.TABLE_BOTTOM, null, n, r, null), a && we(a, F.TABLE_RIGHT, null, n, r, null);
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Mt(e, t = "Operation") {
  return ie(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function bi(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", t.appendChild(i);
  }
  return t;
}
function Fn(e, t, n = 0) {
  if (!Mt(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const i = e.rows[t];
  if (!i)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = bi(i);
    r < e.rows.length ? e.rows[r].parentNode.insertBefore(o, e.rows[r]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), xe(e);
    const s = ae(e);
    return s && Pe(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function Ei(e, t) {
  return Fn(e, t, -1);
}
function wi(e, t) {
  return Fn(e, t, 1);
}
function vi() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function Un(e, t, n = 0) {
  if (!Mt(e, "insertColumnAtPosition"))
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
      const a = vi();
      i < s.cells.length ? s.insertBefore(a, s.cells[i]) : s.appendChild(a);
    }
    xe(e);
    const o = ae(e);
    return o && Pe(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function Ai(e, t) {
  return Un(e, t, -1);
}
function Ci(e, t) {
  return Un(e, t, 1);
}
function we(e, t, n, r, i, o) {
  switch (t) {
    case F.COLUMN:
      Ri(e, n, r, i, o);
      break;
    case F.ROW:
      ki(e, n, r, i, o);
      break;
    case F.TABLE_BOTTOM:
      Li(e, r, i);
      break;
    case F.TABLE_RIGHT:
      Ni(e, r, i);
      break;
  }
}
function Ri(e, t, n, r, i) {
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
function ki(e, t, n, r, i) {
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
function Li(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Ni(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function Wn(e, t, n) {
  return Mt(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? Oi(e, t) : n === "column" ? Si(e, t) : !1 : !1;
}
function Oi(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), xe(e);
    const r = ae(e);
    return r && Pe(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function Si(e, t) {
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
    return r && Pe(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
function _i(e, t) {
  return Wn(e, t, "row");
}
function Mi(e, t) {
  return Wn(e, t, "column");
}
const Pt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = _t
}) => {
  const o = G(null), s = G(null), a = G(null), l = G(null), u = G(null), h = G(i), d = G(!1), [g, p] = K(null), f = ye();
  q(() => {
    h.current = i;
  }, [i]);
  const T = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ke(o.current), o.current = null), p(null), a.current = null, l.current = null, u.current = null, d.current = !1, r && r();
  }, [r]), y = N((v) => {
    if (qe(v), !s.current) return;
    const R = v.currentTarget, S = R.dataset.type, w = parseInt(R.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const P = ae(s.current);
    a.current = {
      x: v.clientX,
      y: v.clientY,
      structure: { ...P }
    }, l.current = S, u.current = w, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const j = {
      [F.COLUMN]: "col-resize",
      [F.ROW]: "row-resize",
      [F.TABLE_BOTTOM]: "ns-resize",
      [F.TABLE_RIGHT]: "ew-resize"
    }[S] || "default";
    document.body.style.cursor = j, document.addEventListener("mousemove", O), document.addEventListener("mouseup", E);
  }, []), A = N((v) => {
    const R = xi(v, h.current);
    return R && (o.current = R, s.current = v, document.body.appendChild(R), R.querySelectorAll(".table-resize-handler").forEach((w) => {
      w.addEventListener("mousedown", y);
    })), R;
  }, [y]), k = N((v) => {
    if (!ie(v)) return;
    o.current && (ke(o.current), o.current = null), v.classList.add("selected"), A(v) && (p(v), n && n(v));
  }, [n, A]), O = N((v) => {
    if (!d.current || !s.current || !a.current || !l.current) return;
    qe(v);
    const { x: R, y: S, structure: w } = a.current, P = l.current, _ = u.current, j = v.clientX, U = v.clientY;
    let z = 0;
    switch (P) {
      case F.COLUMN:
        z = j - R;
        break;
      case F.ROW:
        z = U - S;
        break;
      case F.TABLE_BOTTOM:
        z = U - S;
        break;
      case F.TABLE_RIGHT:
        z = j - R;
        break;
    }
    const V = yi({
      type: P,
      index: _,
      delta: z,
      currentStructure: w,
      options: h.current
    });
    Pe(s.current, V), o.current && vt(o.current, s.current);
  }, []), E = N((v) => {
    if (d.current) {
      if (qe(v), s.current && a.current) {
        const R = {
          structure: a.current.structure
        }, S = {
          structure: ae(s.current)
        };
        (R.structure.width !== S.structure.width || R.structure.height !== S.structure.height || JSON.stringify(R.structure.columnWidths) !== JSON.stringify(S.structure.columnWidths) || JSON.stringify(R.structure.rowHeights) !== JSON.stringify(S.structure.rowHeights)) && f.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: S } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: R } }
        );
      }
      if (a.current = null, l.current = null, u.current = null, d.current = !1, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", E), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(R), t && t(s.current, ae(s.current));
      }
    }
  }, [t, f]), M = N((v) => {
    o.current && !o.current.contains(v.target) && T();
    const S = v.target.closest("table");
    if (S && ie(S)) {
      if (S === s.current)
        return;
      k(S);
    }
  }, [k, T]), m = N((v) => {
    if (v.key === "Delete" && s.current && !d.current) {
      v.preventDefault();
      const R = s.current;
      if (R.parentNode) {
        R.parentNode.removeChild(R), T();
        const S = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(S);
      }
    }
    v.key === "Escape" && s.current && T();
  }, [e, T]), L = N(() => {
    o.current && s.current && vt(o.current, s.current);
  }, []);
  return q(() => {
    if (!e.current) return;
    const R = e.current.closest(".editor-viewport");
    return R && (R.addEventListener("scroll", L), window.addEventListener("scroll", L)), () => {
      R && R.removeEventListener("scroll", L), window.removeEventListener("scroll", L);
    };
  }, [e, L]), q(() => {
    if (!e.current) return;
    const v = e.current;
    return v.addEventListener("click", M), v.addEventListener("keydown", m), window.addEventListener("resize", L), () => {
      v.removeEventListener("click", M), v.removeEventListener("keydown", m), window.removeEventListener("resize", L), d.current && (document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", E), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && ke(o.current);
    };
  }, [e, M, m, L, O, E]), q(() => {
    if (!e.current) return;
    const v = new MutationObserver((R) => {
      R.forEach((S) => {
        S.type === "childList" ? (S.removedNodes.forEach((w) => {
          w.nodeType === Node.ELEMENT_NODE && ie(w) && w === g && T();
        }), S.addedNodes.forEach((w) => {
          if (w.nodeType !== Node.ELEMENT_NODE) return;
          if (ie(w)) {
            setTimeout(() => k(w), 50);
            return;
          }
          const P = w.querySelectorAll?.("table") || [];
          P.length > 0 && setTimeout(() => k(P[0]), 50);
        }), g && [...S.addedNodes, ...S.removedNodes].some(
          (P) => P.nodeType === Node.ELEMENT_NODE && P.tagName === "TR"
        ) && o.current && s.current && (ke(o.current), o.current = null, A(s.current))) : S.type === "attributes" && ["colspan", "rowspan"].includes(S.attributeName) && g && o.current && s.current && (ke(o.current), o.current = null, A(s.current));
      });
    });
    return v.observe(e.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => v.disconnect();
  }, [e, g, T, k, A]), null;
};
Pt.propTypes = {
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
Pt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: _t
};
const Ue = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, ln = {
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
}, un = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && vt(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, dn = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, It = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: i,
  editorRef: o
}) => {
  const [s, a] = K({ top: 0, left: 0 }), [l, u] = K(!1), [h, d] = K("top"), [g, p] = K("left"), f = G(null), T = ye(), y = N(() => {
    if (!e) return "left";
    const _ = window.getComputedStyle(e);
    return _.marginLeft === "auto" && _.marginRight === "auto" ? "center" : _.float === "right" ? "right" : (_.float === "left", "left");
  }, [e]);
  q(() => {
    e && p(y());
  }, [e, y]);
  const A = N(() => {
    if (!e || !f.current) return;
    const _ = e.getBoundingClientRect(), j = f.current.getBoundingClientRect(), U = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, z = _.bottom >= 0 && _.top <= U.height && _.right >= 0 && _.left <= U.width;
    let V = "top", X = 0, oe = 0;
    if (z) {
      const Y = _.top - j.height - 10, Q = U.height - _.bottom - j.height - 10;
      Q > Y && Q > 0 ? (V = "bottom", X = _.bottom + 10) : (V = "top", X = _.top - j.height - 10);
    } else
      V = "top", X = 10;
    oe = _.left + _.width / 2 - j.width / 2;
    const ce = window.innerWidth, b = window.innerHeight;
    let H = Math.max(10, Math.min(oe, ce - j.width - 10)), W = Math.max(10, Math.min(X, b - j.height - 10));
    a({ top: W, left: H }), d(V), u(!0);
  }, [e]);
  pn(() => {
    A();
    const _ = () => {
      A();
    };
    return window.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      window.removeEventListener("scroll", _), window.removeEventListener("resize", _), u(!1);
    };
  }, [e, A]), q(() => {
    const _ = (j) => {
      f.current && !f.current.contains(j.target) && j.target !== e && !e.contains(j.target) && n();
    };
    return document.addEventListener("mousedown", _), () => {
      document.removeEventListener("mousedown", _);
    };
  }, [e, n]);
  const k = N((_) => {
    if (!e || !ln[_]) return;
    const j = dn(e), U = g, z = ln[_];
    e.style.float = z.float, e.style.margin = z.margin, e.style.marginLeft = z.marginLeft, e.style.marginRight = z.marginRight, p(_), un(e);
    const V = dn(e);
    T.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: _, state: V } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: U, state: j } }
    ), t?.(_);
  }, [e, g, T, t]), O = N((_, j) => () => {
    if (!e) return;
    const U = _.includes("ROW"), z = U ? r : i;
    if (z == null || !j(e, z)) return;
    o?.current && T.updateContinuousContent(o.current.innerHTML);
    const X = U ? { element: e, index: z } : { element: e, index: z };
    T.recordOperation(
      { type: _, payload: X },
      { type: _, payload: X }
      // Reverse operation would be same type
    ), un(e), requestAnimationFrame(() => A());
  }, [e, r, i, o, T, A]), E = J(
    () => O(Ee.INSERT_ROW_ABOVE, Ei),
    [O]
  ), M = J(
    () => O(Ee.INSERT_ROW_BELOW, wi),
    [O]
  ), m = J(
    () => O(Ee.INSERT_COL_LEFT, Ai),
    [O]
  ), L = J(
    () => O(Ee.INSERT_COL_RIGHT, Ci),
    [O]
  ), v = J(
    () => O(Ee.DELETE_ROW, _i),
    [O]
  ), R = J(
    () => O(Ee.DELETE_COL, Mi),
    [O]
  ), S = (_) => ({
    ...Ue,
    background: _ ? "#007bff" : "transparent",
    color: _ ? "#fff" : "#333"
  }), w = J(() => ({
    rowAction: { ...Ue, background: "#28a745", color: "#fff" },
    colAction: { ...Ue, background: "#0056b3", color: "#fff" },
    delete: { ...Ue, background: "#dc3545", color: "#fff" },
    divider: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" }
  }), []), P = J(() => ({
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
  return !e || typeof document > "u" ? null : fn(
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: f,
        className: "table-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !l,
        style: P,
        children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${g === "left" ? "active" : ""}`,
              onClick: () => k("left"),
              title: "Align Left",
              style: S(g === "left"),
              children: /* @__PURE__ */ c.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${g === "center" ? "active" : ""}`,
              onClick: () => k("center"),
              title: "Align Center",
              style: S(g === "center"),
              children: /* @__PURE__ */ c.jsx(Sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `tooltip-button ${g === "right" ? "active" : ""}`,
              onClick: () => k("right"),
              title: "Align Right",
              style: S(g === "right"),
              children: /* @__PURE__ */ c.jsx(_n, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx("div", { style: w.divider }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: E,
                title: "Insert Row Above",
                style: w.rowAction,
                children: /* @__PURE__ */ c.jsx(Oo, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: M,
                title: "Insert Row Below",
                style: w.rowAction,
                children: /* @__PURE__ */ c.jsx(Ao, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: v,
                title: "Delete Row",
                style: w.delete,
                children: /* @__PURE__ */ c.jsx(Et, { size: 14 })
              }
            )
          ] }),
          i != null && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx("div", { style: w.divider }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: m,
                title: "Insert Column Left",
                style: w.colAction,
                children: /* @__PURE__ */ c.jsx(Ro, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: L,
                title: "Insert Column Right",
                style: w.colAction,
                children: /* @__PURE__ */ c.jsx(Lo, { size: 14 })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: R,
                title: "Delete Column",
                style: w.delete,
                children: /* @__PURE__ */ c.jsx(Et, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
It.propTypes = {
  tableElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onClose: x.func.isRequired,
  selectedRowIndex: x.number,
  selectedColIndex: x.number,
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
It.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Pi = ".table-cell-selected, .table-row-selected, .table-col-selected", gn = () => {
  hi(Pi, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, jt = ({
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
  }), [r, i] = K(!1), [o, s] = K(!1), [a, l] = K(null), [u, h] = K(null), d = G(null), g = N(() => {
    n.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, i(!1), s(!1), l(null), h(null);
  }, []), p = N(() => {
    g(), gn(), d.current !== null && (d.current = null, t && t(null));
  }, [t, g]), f = N((m) => {
    const L = m.closest("tr"), v = m.closest("table");
    if (!L || !v) return null;
    const R = Array.from(v.rows).indexOf(L), S = Array.from(L.cells).indexOf(m);
    return { rowIndex: R, cellIndex: S, table: v };
  }, []), T = N((m) => {
    if (m.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const L = Array.from(m), v = L[0], R = f(v);
    if (!R) return { mode: null, rowIndex: null, colIndex: null };
    const { table: S } = R;
    return L.filter((_) => {
      const j = f(_);
      return j && j.table === S && j.rowIndex === R.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: R.rowIndex, colIndex: null } : L.filter((_) => {
      const j = f(_);
      return j && j.table === S && j.cellIndex === R.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: R.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [f]), y = N((m, L, v, R, S) => {
    if (gn(), !(!S || !m)) {
      if (m === "row" && L !== null) {
        const w = S.rows[L];
        w && Array.from(w.cells).forEach((P) => {
          P.classList.add("table-row-selected");
        });
      } else m === "column" && v !== null ? Array.from(S.rows).forEach((w) => {
        const P = w.cells[v];
        P && P.classList.add("table-col-selected");
      }) : m === "cells" && R.forEach((w) => {
        w.classList.add("table-cell-selected");
      });
      mi();
    }
  }, []), A = N((m, L) => {
    const v = T(m);
    n.current.selectedCells = m, n.current.selectionMode = v.mode, n.current.selectedRowIndex = v.rowIndex, n.current.selectedColIndex = v.colIndex, n.current.currentTable = L, h(L), y(v.mode, v.rowIndex, v.colIndex, m, L);
    const R = v.mode ? {
      mode: v.mode,
      cells: m,
      rowIndex: v.rowIndex,
      colIndex: v.colIndex,
      table: L
    } : null;
    JSON.stringify(d.current) !== JSON.stringify(R) && (d.current = R, t && t(R));
  }, [T, y, t]), k = N((m) => {
    const L = m.target.closest("td, th");
    if (!L) return;
    const v = f(L);
    v && (i(!0), l(L), h(v.table), s(!1));
  }, [f]), O = N((m) => {
    if (!r || !a) return;
    const L = m.target.closest("td, th");
    if (!L || !u || !cn(u, L)) return;
    s(!0), qe(m);
    const v = f(a), R = f(L);
    if (!v || !R || v.table !== R.table) return;
    const S = Math.min(v.rowIndex, R.rowIndex), w = Math.max(v.rowIndex, R.rowIndex), P = Math.min(v.cellIndex, R.cellIndex), _ = Math.max(v.cellIndex, R.cellIndex), j = /* @__PURE__ */ new Set();
    for (let U = S; U <= w; U++) {
      const z = u.rows[U];
      if (z)
        for (let V = P; V <= _; V++) {
          const X = z.cells[V];
          X && j.add(X);
        }
    }
    A(j, u);
  }, [r, a, u, f, A]), E = N(() => {
    o || p(), i(!1), l(null);
  }, [o, p]), M = N((m) => {
    const L = m.target.closest("td, th"), v = m.target.closest("table");
    if (!(L && u && cn(u, L))) {
      if (v && v !== u) {
        p();
        return;
      }
      v || p();
    }
  }, [p, u]);
  return q(() => {
    if (!e.current) return;
    const m = e.current, L = (R) => {
      R.target.closest("td, th") && k(R);
    }, v = (R) => {
      R.target.closest("td, th") && O(R);
    };
    return m.addEventListener("mousedown", L, !0), m.addEventListener("mouseenter", v, !0), document.addEventListener("mouseup", E), document.addEventListener("click", M), () => {
      m.removeEventListener("mousedown", L, !0), m.removeEventListener("mouseenter", v, !0), document.removeEventListener("mouseup", E), document.removeEventListener("click", M);
    };
  }, [e, k, O, E, M]), q(() => {
    if (!e.current) return;
    const m = new MutationObserver((L) => {
      L.forEach((v) => {
        v.type === "childList" && u && !e.current.contains(u) && p();
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, p, u]), null;
};
jt.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: x.func
};
jt.defaultProps = {
  onCellSelectionChange: void 0
};
const Ii = 50, ut = 50, ji = 50, Bi = 100, Hi = 300, Bt = At(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: a = !0,
  showToolbar: l = !0,
  showPageManager: u = !0
}, h) => {
  const d = bn(), g = ye(), { pageSize: p, pageMargins: f, continuousContent: T, pageBoundaries: y, activePage: A, zoomLevel: k, canUndo: O, canRedo: E } = d, M = G(null), m = G(null), { currentFormat: L, formatText: v, updateCurrentFormatFromSelection: R } = Nr(), [S, w] = K(!1), [P, _] = K(null), [j, U] = K(!0), [z, V] = K(!1), [X, oe] = K(null), [ce, b] = K(null), [H, W] = K(null), {
    checkAndUpdateBoundaries: Y,
    getCurrentPage: Q,
    scrollToPage: se,
    updateBoundaries: D,
    triggerAutoReflow: te,
    removePageAndContent: Te,
    removePageBreak: Ie,
    insertPageBreakAtBoundary: Ht
  } = Jr(p, m, k, f), qn = J(() => Se(p), [p]), [Zn, Vn] = K(!1), pe = G(null), je = G(!1), Be = G(!1), He = G(!1), De = G(T), Qe = N(() => {
    je.current = !1;
    const C = Math.max(0, y.length - 1);
    g.setActivePage(C), setTimeout(() => {
      se(C, M);
    }, ji);
  }, [y.length, g, se]);
  q(() => {
    if (!m.current || He.current) return;
    m.current.innerHTML = T, He.current = !0, De.current = T;
    const C = setTimeout(() => {
      D();
    }, Ii);
    return () => clearTimeout(C);
  }, []), q(() => {
    if (!m.current || !He.current) return;
    if (m.current.innerHTML !== T) {
      m.current.innerHTML = T;
      const $ = setTimeout(() => {
        D(), je.current && Qe();
      }, ut);
      return De.current = T, () => clearTimeout($);
    }
  }, [T, D, Qe]), q(() => {
    s && He.current && s(T);
  }, [T, s]);
  const { restoreCursorPosition: et, hasActiveCursorSelection: tt } = eo({
    updateCurrentFormatFromSelection: R,
    editorRef: m
  }), Yn = N((C) => {
    C !== T && g.updateContinuousContent(C), m.current && m.current.innerHTML !== C && (m.current.innerHTML = C), De.current = C, setTimeout(() => {
      D();
    }, ut);
  }, [T, g, D]), nt = N((C) => {
    if (!m.current || !C) return;
    tt() || et(), document.execCommand("insertHTML", !1, C);
    const $ = m.current.innerHTML;
    g.updateContinuousContent($), De.current = $, setTimeout(() => {
      D(), te(200);
    }, ut);
  }, [tt, et, g, D, te]), Dt = J(() => ({
    /**
     * Get the current HTML content from the editor with blob URLs converted to base64
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * All blob:// image URLs are converted to base64 data URLs for portability
     * @returns {Promise<string>} Promise resolving to HTML content with base64 images
     */
    getHTMLContent: async () => {
      const C = m.current ? m.current.innerHTML : T;
      try {
        return await co(C);
      } catch ($) {
        return console.error("Error converting images to base64:", $), C;
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
      const C = window.getSelection();
      if (!C || C.rangeCount === 0) return "";
      const $ = C.getRangeAt(0);
      if (!m.current.contains($.commonAncestorContainer)) return "";
      if ($.collapsed) {
        const ne = $.commonAncestorContainer;
        return ne.nodeType === Node.TEXT_NODE ? ne.parentElement ? ne.parentElement.outerHTML : "" : ne.outerHTML || "";
      }
      let ee = $.commonAncestorContainer;
      if (ee.nodeType === Node.TEXT_NODE && (ee = ee.parentElement), ee === m.current) {
        const ne = $.cloneContents(), be = document.createElement("div");
        return be.appendChild(ne), be.innerHTML;
      }
      return ee ? ee.outerHTML : "";
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
    getCursorPosition: () => m.current ? Kr(m.current) : null,
    /**
     * Set the editor content programmatically
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to set (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    setContent: async (C) => {
      let $;
      try {
        $ = await en(C);
      } catch (ne) {
        console.error("Error converting base64 images to blobs:", ne), $ = C;
      }
      const ee = Ge($);
      Yn(ee);
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
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to insert (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    insertContent: async (C) => {
      let $;
      try {
        $ = await en(C);
      } catch (ne) {
        console.error("Error converting base64 images to blobs:", ne), $ = C;
      }
      const ee = Ge($);
      nt(ee);
    }
  }), [T, g, D, te, tt, et]);
  hr(h, () => Dt, [Dt]);
  const rt = N(() => {
    if (!m.current) return;
    let C = m.current.innerHTML;
    C = Ge(C), C !== m.current.innerHTML && (m.current.innerHTML = C);
    const $ = T;
    if ($ !== C) {
      const ne = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: C
      }, be = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: $
      };
      g.recordOperation(ne, be);
    }
    g.updateContinuousContent(C), Y(), te(200);
    const ee = Q(M);
    ee !== A && g.setActivePage(ee);
  }, [g, Y, Q, A, te, M, m, T]), Kn = N((C) => {
    rt();
  }, [rt]), zt = N((C) => {
    g.updatePageSize(C), D({ pageSize: C }), i && i(C);
  }, [g, D, i]), $t = N((C) => {
    g.updatePageMargins(C), D({ pageMargins: C }), o && o(C);
  }, [g, D, o]), Ft = N((C) => {
    C < 0 || C >= y.length || (Be.current = !0, g.setActivePage(C), se(C, M), setTimeout(() => {
      Be.current = !1;
    }, Hi), t && t(C));
  }, [g, se, t, y.length]), Ut = N(() => {
    const C = y.length + 1;
    Ht(C) && (je.current = !0, setTimeout(() => {
      je.current && Qe();
    }, 100)), n && n();
  }, [y.length, Ht, g, se, n]), Xn = N(() => {
    const C = window.getSelection();
    if (C && C.rangeCount > 0) {
      if (!m?.current) return;
      const ne = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ne), setTimeout(() => {
        D();
        const be = Q(M);
        g.setActivePage(be);
      }, 150);
    }
  }, [D, Q, g, M]), Jn = N((C) => {
    nt(C), setTimeout(() => {
      te(800);
    }, 100);
  }, [nt, te]), Qn = N((C) => {
    if (!C) return;
    Ie(C) && setTimeout(() => {
      const ee = Q(M);
      g.setActivePage(ee);
    }, 200);
  }, [Ie, Q, g, M]), Wt = N((C) => {
    if (y.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Te(C) && (g.setActivePage(0), r && r(C));
  }, [y.length, Te, g, r]), er = J(() => ({
    handleZoomIn: () => g.zoomIn(),
    handleZoomOut: () => g.zoomOut(),
    handleZoomReset: () => g.resetZoom(),
    handleUndo: () => g.undo(),
    handleRedo: () => g.redo()
  }), [g]), { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: tr, handleRedo: nr } = er;
  Qr(
    { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: tr, handleRedo: nr },
    { editorRef: m, containerRef: M }
  );
  const rr = N(() => {
    !M.current || !m.current || Be.current || (pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      if (Be.current) {
        pe.current = null;
        return;
      }
      const C = Q(M);
      C !== A && C >= 0 && g.setActivePage(C), pe.current = null;
    }, Bi));
  }, [Q, A, g]), or = J(() => {
    if (!T) return 0;
    const $ = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return $ ? $.length : 0;
  }, [T]), sr = y.length || 1, ir = N((C) => {
    w(!0), _(C);
  }, []), Gt = N(() => {
    w(!1), _(null);
  }, []), ar = N((C, $) => {
  }, []), cr = N((C) => {
    C && C.mode === "row" ? (b(C.rowIndex), W(null)) : C && C.mode === "column" ? (W(C.colIndex), b(null)) : (b(null), W(null));
  }, []), lr = N((C) => {
    V(!0), oe(C);
  }, []), qt = N(() => {
    V(!1), oe(null);
  }, []), ur = N((C, $) => {
  }, []);
  return q(() => () => {
    pe.current && clearTimeout(pe.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ c.jsx(
      kt,
      {
        currentFormat: {
          ...L,
          imageSelected: S
        },
        onFormatText: v,
        onAddPageBreak: Xn,
        onInsertImage: Jn,
        canUndo: O,
        canRedo: E
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ c.jsx(
        ys,
        {
          editorView: null,
          isCollapsed: Zn,
          onToggle: () => Vn((C) => !C),
          wordCount: or,
          pageCount: sr
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: M,
          onScroll: rr,
          children: /* @__PURE__ */ c.jsx(
            si,
            {
              content: T,
              dimensions: qn,
              pageSize: p,
              pageMargins: f,
              pageBoundaries: y,
              editorRef: m,
              onInput: Kn,
              onContentChange: rt,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: Qn,
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsx(
        Nt,
        {
          editorRef: m,
          onImageSelect: ir,
          onImageDeselect: Gt,
          onImageResize: ar,
          resizeOptions: {
            ...ve,
            preserveAspectRatio: j,
            aspectRatio: j
          }
        }
      ),
      /* @__PURE__ */ c.jsx(
        Pt,
        {
          editorRef: m,
          onTableSelect: lr,
          onTableDeselect: qt,
          onTableResize: ur
        }
      ),
      /* @__PURE__ */ c.jsx(
        jt,
        {
          editorRef: m,
          onCellSelectionChange: cr
        }
      ),
      S && P && /* @__PURE__ */ c.jsx(
        St,
        {
          imageElement: P,
          initialPreserveAspectRatio: j,
          onAlignChange: (C) => {
          },
          onAspectRatioToggle: (C) => {
            U(C);
          },
          onDelete: () => {
            if (P) {
              const C = P.getAttribute("data-key");
              C && io(C).catch(($) => {
                console.error("Failed to delete image from IndexedDB:", $);
              });
            }
          },
          onClose: Gt
        }
      ),
      z && X && /* @__PURE__ */ c.jsx(
        It,
        {
          tableElement: X,
          onAlignChange: (C) => {
          },
          onClose: qt,
          selectedRowIndex: ce,
          selectedColIndex: H,
          editorRef: m
        }
      ),
      u && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? Xe.cloneElement(e, {
        onNavigate: Ft,
        onAddPage: Ut,
        onDeletePage: Wt,
        onPageSizeChange: zt,
        onPageMarginsChange: $t,
        zoomLevel: k,
        canZoomIn: ht(k),
        canZoomOut: mt(k),
        onZoomIn: ot,
        onZoomOut: st,
        onZoomReset: it
      }) : /* @__PURE__ */ c.jsx(
        ii,
        {
          pageBoundaries: y,
          activePage: A,
          pageSize: p,
          pageMargins: f,
          zoomLevel: k,
          canZoomIn: ht(k),
          canZoomOut: mt(k),
          onNavigate: Ft,
          onAddPage: Ut,
          onDeletePage: Wt,
          onPageSizeChange: zt,
          onPageMarginsChange: $t,
          onZoomIn: ot,
          onZoomOut: st,
          onZoomReset: it
        }
      ) })
    ] })
  ] });
});
Bt.displayName = "HtmlEditor";
Bt.propTypes = {
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
Bt.defaultProps = {
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
class Gn extends Xe.Component {
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
Gn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
Gn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Cr as COMMON_FONT_SIZES,
  Hn as ColorPickerDropdown,
  Je as DEFAULT_FONT_SIZE,
  ve as DEFAULT_IMAGE_RESIZE_OPTIONS,
  mn as DEFAULT_PAGE_SIZE,
  _t as DEFAULT_TABLE_RESIZE_OPTIONS,
  Gi as DocumentProvider,
  kt as EditorToolbar,
  Gn as ErrorBoundary,
  En as FONT_SIZE_MAP,
  Bt as HtmlEditor,
  Nt as ImageResizeHandlers,
  Ve as PAGE_SIZES,
  ii as PageManager,
  si as PageView,
  I as RESIZE_HANDLERS,
  ys as Sidebar,
  F as TABLE_RESIZE_HANDLERS,
  Pt as TableResizeHandlers,
  Xi as applyImageDimensions,
  Pe as applyTableDimensions,
  ao as base64ToBlob,
  kn as blobUrlToBase64,
  Yi as calculateResizeDimensions,
  yi as calculateTableResizeDimensions,
  Ji as clearImages,
  en as convertBase64ToBlobUrls,
  co as convertBlobUrlsToBase64,
  to as createResizeOverlay,
  xi as createTableResizeOverlay,
  io as deleteImage,
  Qi as getAllImageKeys,
  Wi as getAvailablePageSizes,
  Rt as getImage,
  ea as getImageAsBase64,
  Ki as getImageDimensions,
  Se as getPageDimensions,
  qi as getPixelValue,
  Zi as getPointValue,
  ae as getTableStructure,
  he as isResizableImage,
  ie as isResizableTable,
  Vi as isValidFontSize,
  Ui as isValidPageSize,
  zs as logger,
  kr as pixelsToPoints,
  Rr as pointsToPixels,
  at as removeResizeOverlay,
  ke as removeTableResizeOverlay,
  Rn as saveImage,
  Tt as updateResizeOverlay,
  vt as updateTableResizeOverlay,
  Jr as useContinuousReflow,
  Tn as useDocument,
  ye as useDocumentActions,
  bn as useDocumentState,
  Nr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
