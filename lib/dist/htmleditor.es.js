import Xe, { createContext as ar, useContext as lr, useReducer as cr, useMemo as J, useState as K, useCallback as N, useRef as G, useEffect as q, forwardRef as At, createElement as dt, memo as ur, useLayoutEffect as dn, useImperativeHandle as dr } from "react";
import { v4 as Ct } from "uuid";
import y from "prop-types";
import { createPortal as gn } from "react-dom";
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
var qt;
function gr() {
  if (qt) return Ae;
  qt = 1;
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
var Zt;
function pr() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === w ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case x:
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
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case T:
            return "Portal";
          case b:
            return E.displayName || "Context";
          case O:
            return (E._context.displayName || "Context") + ".Consumer";
          case M:
            var H = E.render;
            return E = E.displayName, E || (E = H.displayName || H.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case v:
            return H = E.displayName || null, H !== null ? H : e(E.type) || "Memo";
          case R:
            H = E._payload, E = E._init;
            try {
              return e(E(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var U = H.error, Y = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return U.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(E);
      }
    }
    function r(E) {
      if (E === x) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === R)
        return "<...>";
      try {
        var H = e(E);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var E = P.A;
      return E === null ? null : E.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(E) {
      if (_.call(E, "key")) {
        var H = Object.getOwnPropertyDescriptor(E, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function a(E, H) {
      function U() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: U,
        configurable: !0
      });
    }
    function c() {
      var E = e(this.type);
      return V[E] || (V[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, H, U, Y, Q, se) {
      var D = U.ref;
      return E = {
        $$typeof: f,
        type: E,
        key: H,
        props: U,
        _owner: Y
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: c
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
    function h(E, H, U, Y, Q, se) {
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
        D = e(E);
        var ee = Object.keys(H).filter(function(Ie) {
          return Ie !== "key";
        });
        Y = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", le[D + Y] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          D,
          ee,
          D
        ), le[D + Y] = !0);
      }
      if (D = null, U !== void 0 && (n(U), D = "" + U), s(H) && (n(H.key), D = "" + H.key), "key" in H) {
        U = {};
        for (var Te in H)
          Te !== "key" && (U[Te] = H[Te]);
      } else U = H;
      return D && a(
        U,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        D,
        U,
        i(),
        Q,
        se
      );
    }
    function d(E) {
      g(E) ? E._store && (E._store.validated = 1) : typeof E == "object" && E !== null && E.$$typeof === R && (E._payload.status === "fulfilled" ? g(E._payload.value) && E._payload.value._store && (E._payload.value._store.validated = 1) : E._store && (E._store.validated = 1));
    }
    function g(E) {
      return typeof E == "object" && E !== null && E.$$typeof === f;
    }
    var p = Xe, f = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), b = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), P = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, j = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var z, V = {}, X = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), re = F(r(o)), le = {};
    Ce.Fragment = x, Ce.jsx = function(E, H, U) {
      var Y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        E,
        H,
        U,
        !1,
        Y ? Error("react-stack-top-frame") : X,
        Y ? F(r(E)) : re
      );
    }, Ce.jsxs = function(E, H, U) {
      var Y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return h(
        E,
        H,
        U,
        !0,
        Y ? Error("react-stack-top-frame") : X,
        Y ? F(r(E)) : re
      );
    };
  })()), Ce;
}
var Vt;
function fr() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? ze.exports = gr() : ze.exports = pr()), ze.exports;
}
var l = fr();
const gt = 100, pt = 50, ft = 200, Yt = 5, ht = (e) => e < ft, mt = (e) => e > pt, hr = 96, ce = (e) => Math.round(e * hr), Ze = {
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
}, de = "NORMAL", pn = (e = de) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ce(e.top),
      bottom: ce(e.bottom),
      left: ce(e.left),
      right: ce(e.right)
    };
  const t = Ze[e] || Ze[de];
  return {
    top: ce(t.top),
    bottom: ce(t.bottom),
    left: ce(t.left),
    right: ce(t.right)
  };
}, mr = (e = de) => {
  const t = pn(e);
  return t.top + t.bottom;
}, xr = () => Object.keys(Ze), yr = (e) => {
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
}, fn = "A4", Se = (e) => {
  const t = Ve[e] || Ve[fn];
  return {
    width: t.width,
    height: t.height
  };
}, Di = (e) => Object.keys(Ve).includes(e), zi = () => Object.keys(Ve), _e = fn, fe = "<p><br></p>", Tr = "continuous", Le = (e, t = _e) => ({
  id: Ct(),
  index: e,
  size: t,
  content: fe,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? fe : e, hn = (e, t = _e) => (e.length > 0 ? e : [Le(0, t)]).map((r, i) => ({
  id: r.id || Ct(),
  index: i,
  size: r.size || t,
  content: We(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), Er = (e = _e) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Se(e).height
}], $e = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), xt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || _e, r = hn(e.pages || [Le(0, n)], n);
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
    editorMode: e.editorMode || Tr,
    continuousContent: e.continuousContent || fe,
    pageBoundaries: e.pageBoundaries || Er(n),
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
}, yt = (e, t) => {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case B.INITIALIZE_DOCUMENT: {
      const { initialContent: r = fe, pageSize: i = _e } = t.payload || {}, o = { ...Le(0, i), content: We(r) };
      return xt({
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
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = hn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : $e(i);
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
      const o = i.map((a, c) => ({
        ...a,
        index: c,
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
      const o = i.map((c, u) => ({
        ...c,
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
      return xt();
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
        const a = s.substring(0, r), c = s.substring(r);
        s = a + o + c;
      } else if (typeof i == "number" && typeof document < "u") {
        const a = document.createElement("div");
        a.innerHTML = s;
        const c = a.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && c.length === 0)
          s = s + o + "<p><br></p>";
        else if (i < c.length) {
          const u = c[i], h = document.createElement("page-break");
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
      return o[r] && o[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((a, c) => {
        a.setAttribute("data-page-number", String(c + 2));
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
      const r = e.zoomLevel + Yt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case B.ZOOM_OUT: {
      if (!mt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Yt;
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
      return r.inverseOperation && (o = yt(e, r.inverseOperation)), {
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
      return r.operation && (o = yt(e, r.operation)), {
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
}, mn = ar(null), $i = ({ children: e, initialState: t = {} }) => {
  const [n, r] = cr(yt, xt(t)), i = J(() => ({
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
  return /* @__PURE__ */ l.jsx(mn.Provider, { value: o, children: e });
}, xn = () => {
  const e = lr(mn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, yn = () => {
  const { state: e } = xn();
  return e;
}, xe = () => {
  const { actions: e } = xn();
  return e;
}, Tn = {
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
}, br = [
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
], Je = "16px", wr = (e) => Math.round(e * 96 / 72), vr = (e) => Math.round(e * 72 / 96 * 2) / 2, Fi = (e) => {
  const t = Object.values(Tn).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${wr(e)}px`;
}, Ui = (e) => {
  const t = parseInt(e), n = Object.values(Tn).find((r) => r.px === t);
  return n ? n.pt : vr(t);
}, Wi = (e) => {
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
}, Ar = {
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
}, Kt = {
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
}, Cr = () => {
  const [e, t] = K(Kt), n = xe(), r = N((p, f, T = null) => {
    try {
      const x = window.getSelection();
      if (!x || x.rangeCount === 0)
        return !1;
      const A = x.getRangeAt(0);
      if (!A.toString())
        return t((O) => ({ ...O, [p]: f })), !1;
      try {
        const O = document.createElement("span");
        O.style[p] = f;
        const b = A.extractContents();
        return O.appendChild(b), A.insertNode(O), A.selectNodeContents(O), x.removeAllRanges(), x.addRange(A), t((M) => ({ ...M, [p]: f })), !0;
      } catch {
        if (T) {
          const O = p === "fontSize" ? Ar[f] || "3" : f;
          return document.execCommand(T, !1, O), t((b) => ({ ...b, [p]: f })), !0;
        }
        return !1;
      }
    } catch (x) {
      return console.warn(`[useFormatting] Style application failed for ${p}:`, x), !1;
    }
  }, []), i = N((p) => r("fontFamily", p, "fontName"), [r]), o = N((p) => r("fontSize", p, "fontSize"), [r]), s = N((p) => r("color", p, "foreColor"), [r]), a = N((p) => {
    t((f) => ({
      ...f,
      alignLeft: p === "left",
      alignCenter: p === "center",
      alignRight: p === "right",
      alignJustify: p === "justify"
    }));
  }, []), c = N((p) => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return !1;
      const T = f.getRangeAt(0), x = T.toString(), k = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[p];
      if (!k)
        return !1;
      if (!x) {
        const b = T.startContainer, M = b.nodeType === Node.TEXT_NODE ? b.parentElement : b, m = Ne(M) || Lr();
        return m && (m.style.textAlign = k, a(k)), !0;
      }
      const O = kr(T);
      if (O.length === 0) {
        const b = document.createElement("p");
        b.style.textAlign = k;
        const M = T.extractContents();
        b.appendChild(M), T.insertNode(b), T.selectNodeContents(b), f.removeAllRanges(), f.addRange(T);
      } else
        O.forEach((b) => {
          b.style.textAlign = k;
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
      const T = f.getRangeAt(0), x = document.createElement("div");
      if (x.innerHTML = p, Array.from(x.children).some(
        (k) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(k.tagName)
      )) {
        const k = T.startContainer, O = k.nodeType === Node.TEXT_NODE ? k.parentElement : k, b = Ne(O);
        if (b && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(b.tagName)) {
          const M = b.tagName.toLowerCase();
          if (T.startOffset === 0 && (k === b || k.nodeType === Node.TEXT_NODE && k === b.firstChild))
            b.parentNode.insertBefore(x, b);
          else if (T.startOffset === k.textContent?.length && k === b.lastChild && T.endOffset === k.textContent?.length) {
            const v = b.nextSibling;
            v ? b.parentNode.insertBefore(x, v) : b.parentNode.appendChild(x);
          } else {
            const v = T.extractContents(), R = document.createTextNode(""), S = document.createElement(M);
            S.appendChild(R), S.appendChild(v);
            const w = b.parentNode;
            w.insertBefore(x, b.nextSibling), w.insertBefore(S, x.nextSibling), !b.textContent.trim() && b.children.length === 0 && w.removeChild(b);
          }
        } else
          T.insertNode(x);
        T.setStartAfter(x), T.setEndAfter(x), f.removeAllRanges(), f.addRange(T);
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
        c(p);
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
          t((x) => ({ ...x, headingLevel: f }));
          break;
        default:
          break;
      }
    } catch (T) {
      console.warn(`[useFormatting] Error executing command "${p}":`, T);
    }
  }, [o, i, c, u, n]), d = N(() => {
    try {
      const p = window.getSelection();
      if (!p || p.rangeCount === 0)
        return;
      const f = p.getRangeAt(0), T = f.toString();
      let x = Je, A = "Arial", k = "#000000", O = "p", b = "left";
      if (T) {
        const m = f.startContainer, L = m.nodeType === Node.TEXT_NODE ? m.parentElement : m;
        if (L) {
          const v = window.getComputedStyle(L), R = v.fontSize, S = v.fontFamily;
          R && R.endsWith("px") && (x = R), S && S !== "serif" && (A = S.split(",")[0].replace(/['"]/g, "").trim());
          const w = v.color;
          w && w !== "rgb(0, 0, 0)" && w !== "#000000" && (w.startsWith("rgb") ? k = Rr(w) : k = w);
          const P = Ne(L);
          if (P) {
            const _ = P.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(_) && (O = _);
            const F = window.getComputedStyle(P).textAlign;
            ["left", "center", "right", "justify"].includes(F) && (b = F);
          }
        }
      }
      const M = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: b === "left",
        alignCenter: b === "center",
        alignRight: b === "right",
        alignJustify: b === "justify",
        fontFamily: A,
        fontSize: x,
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
    t(Kt);
  }, []);
  return {
    currentFormat: e,
    formatText: h,
    resetFormat: g,
    updateCurrentFormatFromSelection: d
  };
};
function Rr(e) {
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
function kr(e) {
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
      acceptNode: (c) => {
        const u = c.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(u) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let a = s.nextNode();
  for (; a; )
    e.intersectsNode(a) && t.push(a), a = s.nextNode();
  return t;
}
function Lr() {
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
const ge = 'page-break, [data-page-break="true"]', Nr = (e, t = {}) => {
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
  return i.forEach((c, u) => {
    const d = c.getBoundingClientRect().top - s.top + a;
    o.push({
      id: `page-${u + 1}`,
      pageNumber: u + 2,
      top: d,
      height: r.height
    });
  }), o;
}, En = (e, t = 100, n = de) => {
  const r = Se(e), i = mr(n), o = r.height - i, s = t / 100;
  return o / s;
}, Or = (e, t) => {
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
}, Xt = (e) => {
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
}, Sr = (e) => {
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
}, _r = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Mr = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  try {
    const c = En(n, r, i) * (t - 1), u = Array.from(e.children);
    let h = 0, d = null;
    for (let g = 0; g < u.length; g++) {
      const p = u[g];
      if (p.tagName === "PAGE-BREAK" || p.getAttribute("data-page-break") === "true")
        continue;
      const f = Sr(p);
      if (h + f > c) {
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
}, Pr = (e, t, n, r, i, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const c = Array.from(e.querySelectorAll(ge));
    if (t > c.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const u = window.getSelection();
    let h = !1, d = [], g = null;
    if (t === 0) {
      const f = c[0];
      if (!f)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let T = e.firstChild;
      for (; T && T !== f; )
        d.push(T), T = T.nextSibling;
      g = f;
    } else {
      const f = c[t - 1];
      if (!f)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const T = c[t];
      let x = f.nextSibling;
      for (; x && x !== T; )
        d.push(x), x = x.nextSibling;
      g = f;
    }
    if (u && u.rangeCount > 0) {
      const T = u.getRangeAt(0).startContainer;
      for (const x of d)
        if (x.contains(T) || x === T) {
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
  } catch (c) {
    return console.error("[removePageAndContent] Failed to remove page:", c), !1;
  }
}, Ir = (e) => {
  if (e)
    try {
      e.querySelectorAll(ge).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, jr = (e, t, n, r, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Ir(t), n) {
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
}, Br = 200, Hr = 50, Jt = 3, Dr = 20, bn = (e) => {
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
}, zr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = bn(o);
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
}, $r = (e, t, n, r, i, o, s, a) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const c = En(t, n, r);
    let u = Xt(e), h = !1, d = 0;
    for (let g = 0; g < u.length && d < Jt; g++) {
      const p = u[g], f = zr(p, c);
      if (f && f.overflowIndex > 0) {
        let T = 0;
        for (let O = 0; O < p.length; O++) {
          const b = p[O];
          b && b.getBoundingClientRect && (T += bn(b));
        }
        if (T - c < Dr)
          continue;
        const A = g + 2;
        _r(f.overflowElement, A) && (h = !0, d++, u = Xt(e));
      }
    }
    if (h) {
      if (i) {
        const g = e.innerHTML;
        i(g);
      }
      setTimeout(() => {
        o && o(), d >= Jt && a && setTimeout(() => {
          s.current || a();
        }, 100);
      }, Hr);
    }
    return h;
  } catch (c) {
    return console.warn("[checkAndReflow] Reflow failed:", c), !1;
  } finally {
    s.current = !1;
  }
}, Fr = (e, t, n = Br) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Ur = 400, wn = (e, t) => {
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
}, Wr = (e, t, n, r) => {
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
        r ? r(n) : wn(t, n);
      }, Ur);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Gr = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, qr = (e) => {
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
  const a = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), c = a.length, u = (a.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: u,
    charOffset: c
  };
}, Zr = 300, Vr = (e, t, n = 100, r = "NARROW") => {
  const i = xe(), o = G(null), s = G(null), a = G(e), c = G(n), u = G(r), h = G(!1);
  q(() => {
    a.current = e;
  }, [e]), q(() => {
    c.current = n;
  }, [n]), q(() => {
    u.current = r;
  }, [r]), q(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = N((m = {}) => t?.current ? Nr(t.current, m) : [], [t]), g = N((m = {}) => {
    const L = d(m);
    return i.updatePageBoundaries(L), L;
  }, [d, i]), p = N((m = {}) => {
    const L = typeof m.delay == "number" ? m.delay : Zr;
    Gr(g, o, m, L);
  }, [g]), f = N(() => {
    t?.current && $r(
      t.current,
      a.current,
      c.current,
      u.current,
      i.updateContinuousContent,
      g,
      h,
      f
    );
  }, [t, i, g]), T = N((m) => {
    Fr(f, s, m);
  }, [f]), x = N((m) => !m?.current || !t?.current ? 0 : Or(m.current, t.current), [t]), A = N((m) => {
    t?.current && wn(t.current, m);
  }, [t]), k = N((m, L) => {
    if (!L?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Wr(L.current, t.current, m, A);
  }, [t, A]), O = N(async (m) => t?.current ? Mr(
    t.current,
    m,
    a.current,
    c.current,
    u.current,
    i.updateContinuousContent,
    g
  ) : !1, [t, i, g]), b = N((m) => t?.current ? Pr(
    t.current,
    m,
    d,
    i.updateContinuousContent,
    g,
    A,
    f
  ) : !1, [t, d, i, g, A, f]), M = N((m) => t?.current ? jr(
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
    getCurrentPage: x,
    scrollToPage: k,
    positionCursorAtPage: A,
    checkAndReflow: f,
    triggerAutoReflow: T,
    removePageAndContent: b,
    removePageBreak: M,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    p,
    g,
    x,
    k,
    A,
    f,
    T,
    b,
    M,
    O
  ]);
}, Yr = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: i, handleUndo: o, handleRedo: s } = e, { editorRef: a, containerRef: c } = t;
  q(() => {
    const u = (h) => {
      if (h.ctrlKey || h.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(h.key) && h.preventDefault();
        const d = document.activeElement === a.current, g = document.activeElement === c.current, p = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
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
  }, [n, r, i, o, s, a, c]);
}, Kr = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
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
          const c = a.getRangeAt(0);
          c.collapsed && t.current.contains(c.commonAncestorContainer) && (n.current = c.cloneRange());
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
function Gi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = ve
}) {
  const c = r - t, u = i - n;
  let h = o, d = s;
  switch (e) {
    case I.TOP_LEFT:
      h = Math.max(a.minWidth, o - c), d = Math.max(a.minHeight, s - u);
      break;
    case I.TOP_RIGHT:
      h = Math.max(a.minWidth, o + c), d = Math.max(a.minHeight, s - u);
      break;
    case I.BOTTOM_LEFT:
      h = Math.max(a.minWidth, o - c), d = Math.max(a.minHeight, s + u);
      break;
    case I.BOTTOM_RIGHT:
      h = Math.max(a.minWidth, o + c), d = Math.max(a.minHeight, s + u);
      break;
    case I.TOP:
      d = Math.max(a.minHeight, s - u);
      break;
    case I.BOTTOM:
      d = Math.max(a.minHeight, s + u);
      break;
    case I.LEFT:
      h = Math.max(a.minWidth, o - c);
      break;
    case I.RIGHT:
      h = Math.max(a.minWidth, o + c);
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
function qi(e) {
  return he(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Zi(e, { width: t, height: n }) {
  he(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function Xr(e, t = ve) {
  if (!he(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(I).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = Jr(o), s.style.pointerEvents = "all", vn(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function Jr(e) {
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
function vn(e, t, n, r) {
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
    vn(i, o, n.width, n.height);
  });
}
function at(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Qr = "html-editor-storage", eo = 2, ne = "images", ue = /* @__PURE__ */ new Map();
function to() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Me() {
  return new Promise((e, t) => {
    const n = indexedDB.open(Qr, eo);
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
async function no(e) {
  if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type))
    throw new Error("Invalid image format. Supported formats: png, jpeg, gif, webp");
  if (e.size > 2 * 1024 * 1024)
    throw new Error("Image exceeds maximum size of 2MB. Image should be optimized before storage.");
  try {
    const n = await Me(), r = `editor-image-${to()}`, o = n.transaction([ne], "readwrite").objectStore(ne), s = {
      key: r,
      blob: e,
      // Store the file directly as a Blob
      size: e.size,
      type: e.type,
      name: e.name,
      timestamp: Date.now()
    };
    return new Promise((a, c) => {
      const u = o.add(s);
      u.onsuccess = () => {
        n.close(), a(r);
      }, u.onerror = () => {
        n.close(), c(new Error("Failed to save image to IndexedDB"));
      };
    });
  } catch (n) {
    throw new Error(`Failed to save image: ${n.message}`);
  }
}
async function ro(e) {
  if (ue.has(e))
    return ue.get(e);
  try {
    const t = await Me();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readonly").objectStore(ne).get(e);
      s.onsuccess = () => {
        t.close();
        const a = s.result;
        if (a && a.blob) {
          const c = URL.createObjectURL(a.blob);
          ue.set(e, c), n(c);
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
async function oo(e) {
  try {
    ue.has(e) && (URL.revokeObjectURL(ue.get(e)), ue.delete(e));
    const t = await Me();
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
async function Vi() {
  try {
    ue.forEach((t) => URL.revokeObjectURL(t)), ue.clear();
    const e = await Me();
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
async function Yi() {
  try {
    const e = await Me();
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
], so = [
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
], io = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function ao(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Cn(e) {
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
function lo(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function co(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => An.includes(n.tagName));
}
function uo(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      An.includes(i.tagName) ? t.push(i.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Oe(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${ao(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i, s = o.tagName, a = s.toLowerCase(), c = Cn(o);
      if (s === "DIV") {
        const u = Oe(o);
        u.trim() ? t.push(u) : t.push("<p><br></p>");
      } else if (s === "P")
        co(o) ? t.push(uo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const u = lo(o);
        t.push(`<${a}${c}>${u}</${a}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(go(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(po(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const u = Oe(o);
        t.push(`<blockquote${c}>${u}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (so.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (io.includes(s))
        t.push(o.outerHTML);
      else {
        const u = Oe(o);
        t.push(`<${a}${c}>${u}</${a}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function go(e) {
  const t = e.tagName.toLowerCase(), n = Cn(e), r = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      r.push(i.outerHTML);
    else {
      const o = Oe(i);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function po(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ho = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Qt = (e) => {
  const t = ho(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Rn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), mo = (e) => {
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
var xo = {
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
const yo = At(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, c) => dt(
    "svg",
    {
      ref: c,
      ...xo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Rn("lucide", i),
      ...!o && !mo(a) && { "aria-hidden": "true" },
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
    ({ className: r, ...i }, o) => dt(yo, {
      ref: o,
      iconNode: t,
      className: Rn(
        `lucide-${fo(Qt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Qt(e), n;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Eo = Z("arrow-down", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], wo = Z("arrow-left", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ao = Z("arrow-right", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ro = Z("arrow-up", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Lo = Z("chevron-left", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Oo = Z("chevron-right", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], _o = Z("download", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Po = Z("file-check", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Et = Z("file-text", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Bo = Z("hash", jo);
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
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Do = Z("heading-1", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], $o = Z("heading-2", zo);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Uo = Z("heading-3", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Go = Z("image-upscale", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Zo = Z("list", qo);
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
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Yo = Z("palette", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Xo = Z("plus", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Qo = Z("scaling", Jo);
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ts = Z("settings", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], kn = Z("text-align-center", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Ln = Z("text-align-end", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Nn = Z("text-align-start", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], bt = Z("trash-2", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], as = Z("x", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], cs = Z("zoom-in", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ds = Z("zoom-out", us), en = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const i = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(i).map((o, s) => {
    const a = parseInt(o.tagName.charAt(1)), c = o.textContent.trim();
    return c ? {
      id: `${n}heading-${s}`,
      level: a,
      text: c,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, gs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, ps = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const i = yn(), { pages: o, activePage: s, continuousContent: a } = i, { wordCount: c, outline: u } = J(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: en(a, 1, "continuous-")
      };
    let d = 0;
    const g = [];
    return o.forEach((p, f) => {
      d += gs(p.content), g.push(...en(p.content, f + 1, `page-${f}-`));
    }), { wordCount: d, outline: g };
  }, [o, n, r, a]), h = r !== void 0 ? r : o.length;
  return /* @__PURE__ */ l.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ l.jsx(Et, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ l.jsx(Oo, { size: 16 }) : /* @__PURE__ */ l.jsx(Lo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Po, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: h })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Bo, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: c.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Et, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          u.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Zo, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: u.map((d) => {
              const g = d.level === 1 ? Do : d.level === 2 ? $o : Uo;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(g, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
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
}, fs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ l.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), hs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ l.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ l.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), ms = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ l.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), xs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ l.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ l.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), ys = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), Ts = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), Es = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), bs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), ws = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ l.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), vs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ l.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ l.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ l.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ l.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ l.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ l.jsx("path", { d: "M6 18v0" })
] }), As = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ l.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), Cs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ l.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ l.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ l.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ l.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ l.jsx("path", { d: "M15 6v12" })
] }), Rs = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ l.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ l.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ l.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ l.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), ks = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ l.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), Ls = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ l.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), Ns = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ l.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), Os = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Ss = ({ size: e = 16, ...t }) => /* @__PURE__ */ l.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ l.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ l.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), _s = {
  maxWidth: 1200,
  maxHeight: 1200,
  maxSizeBytes: 2 * 1024 * 1024,
  // 2MB
  initialQuality: 0.9,
  minQuality: 0.6,
  qualityStep: 0.05
};
async function Ms(e, t = {}) {
  const n = { ..._s, ...t };
  return new Promise((r, i) => {
    const o = new Image(), s = new FileReader();
    s.onload = (a) => {
      o.src = a.target.result;
    }, s.onerror = () => {
      i(new Error("Failed to read image file"));
    }, o.onload = async () => {
      try {
        let { width: a, height: c } = o;
        const u = a, h = c, d = a / c;
        let g = !1;
        (a > n.maxWidth || c > n.maxHeight) && (g = !0, a > c ? (a = Math.min(a, n.maxWidth), c = a / d) : (c = Math.min(c, n.maxHeight), a = c * d), a = Math.round(a), c = Math.round(c));
        const p = document.createElement("canvas");
        p.width = a, p.height = c;
        const f = p.getContext("2d");
        f.imageSmoothingEnabled = !0, f.imageSmoothingQuality = "high", f.drawImage(o, 0, 0, a, c);
        const T = e.type === "image/png" && Ps(f, a, c) ? "image/png" : "image/jpeg", x = await On(
          p,
          T,
          n.maxSizeBytes,
          n.initialQuality,
          n.minQuality,
          n.qualityStep
        ), A = T === "image/png" ? ".png" : ".jpg", k = e.name.replace(/\.[^/.]+$/, "") + A, O = new File([x], k, { type: T }), b = O.size < e.size;
        r({
          file: O,
          width: a,
          height: c,
          originalSize: e.size,
          optimizedSize: O.size,
          wasOptimized: g || b,
          wasResized: g,
          wasCompressed: b,
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
function Ps(e, t, n) {
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
async function On(e, t, n, r, i, o) {
  let s = r, a = null;
  if (t === "image/png")
    return a = await tn(e, t, s), a.size > n ? On(e, "image/jpeg", n, r, i, o) : a;
  for (; s >= i; ) {
    if (a = await tn(e, t, s), a.size <= n)
      return a;
    s -= o;
  }
  return a;
}
function tn(e, t, n) {
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
function nn(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB"], r = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, r) * 100) / 100 + " " + n[r];
}
function Is(e) {
  if (!e.wasOptimized)
    return "Image inserted";
  const t = [];
  return e.wasResized && t.push(`resized from ${e.originalWidth}×${e.originalHeight} to ${e.width}×${e.height}`), e.wasCompressed && t.push(`compressed from ${nn(e.originalSize)} to ${nn(e.optimizedSize)}`), `Image optimized: ${t.join(", ")}`;
}
class js {
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
const Re = new js("Editor"), Sn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), _n = 32;
function Mn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * _n}px`, e.dataset.indentLevel = String(r));
}
function Bs(e, t) {
  Mn(e, t);
}
function Hs(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Sn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Ds() {
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
        if (u.tagName && Sn.has(u.tagName.toUpperCase())) {
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
function zs(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * _n}px`, e.dataset.indentLevel = String(n));
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
  let n = Ds();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = Hs(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const i = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Bs(s, e);
      return;
    }
    e ? zs(s) : Mn(s, !1);
  });
  try {
    const s = document.createRange(), a = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), c = (d) => {
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
    const h = c(o);
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
function $s(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && wt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Pn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
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
  }, c = (u) => {
    const h = u.target.value;
    t(h);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ l.jsx(
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
        children: /* @__PURE__ */ l.jsx(Yo, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ l.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ l.jsx("div", { className: "color-grid", children: s.map((u) => /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ l.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: c,
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
Pn.propTypes = {
  currentColor: y.string,
  onColorSelect: y.func.isRequired,
  title: y.string
};
const Fs = [
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
], Us = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Ws = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Rt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: i = !1,
  canRedo: o = !1
}) => {
  const s = (p, f, T, x = null, A = !1) => /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: p,
      className: x && e[x] ? "active" : "",
      disabled: A,
      title: T,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ l.jsx(f, { size: 16 })
    },
    T
  ), a = () => /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }), c = async (p) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(p.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      p.size > 1 * 1024 * 1024 && Re.info("Optimizing large image...");
      const x = await Ms(p), A = x.file;
      if (x.wasOptimized) {
        const b = Is(x);
        Re.info(b), console.log("Image optimization:", {
          original: `${x.originalWidth}×${x.originalHeight} (${(x.originalSize / 1024 / 1024).toFixed(2)}MB)`,
          optimized: `${x.width}×${x.height} (${(x.optimizedSize / 1024 / 1024).toFixed(2)}MB)`
        });
      }
      if (A.size > 2097152) {
        alert("Unable to compress image to under 2MB. Please use a smaller or simpler image."), Re.warn("Image still exceeds 2MB after optimization");
        return;
      }
      const k = await no(A), O = await ro(k);
      if (O && r) {
        const b = `<img src="${O}" data-key="${k}" alt="Inserted image" style="max-width: 100%;" />`;
        r(b);
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
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), ks, "Undo", null, !i),
    s(() => t("redo"), Ls, "Redo", null, !o),
    a(),
    s(() => t("bold"), fs, "Bold", "bold"),
    s(() => t("italic"), hs, "Italic", "italic"),
    s(() => t("underline"), ms, "Underline", "underline"),
    s(() => t("strikethrough"), xs, "Strikethrough", "strikethrough"),
    a(),
    s(() => t("justifyLeft"), ys, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Ts, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Es, "Align Right", "alignRight"),
    s(() => t("justifyFull"), bs, "Justify", "alignJustify"),
    a(),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (p) => t("fontName", p.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Fs.map(({ value: p, label: f }) => /* @__PURE__ */ l.jsx("option", { value: p, children: f }, p))
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (p) => t("fontSize", p.target.value),
        value: e.fontSize || Je,
        title: "Font Size",
        children: br.map(({ value: p, label: f }) => /* @__PURE__ */ l.jsx("option", { value: p, children: f }, p))
      }
    ),
    /* @__PURE__ */ l.jsx(
      Pn,
      {
        currentColor: e.fontColor,
        onColorSelect: (p) => t("foreColor", p),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (p) => t("formatBlock", p.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Us.map(({ value: p, label: f }) => /* @__PURE__ */ l.jsx("option", { value: p, children: f }, p))
      }
    ),
    a(),
    s(() => t("insertUnorderedList"), ws, "Bullet List"),
    s(() => t("insertOrderedList"), vs, "Numbered List"),
    a(),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: u,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ l.jsx(Os, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: h,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ l.jsx(Ss, { size: 16 })
      }
    ),
    a(),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(As, { size: 16 })
      }
    ),
    s(() => t("insertHTML", Ws), Cs, "Insert Table"),
    n && s(n, Rs, "Insert Page Break"),
    a(),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (p) => p.target.files[0] && c(p.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: g,
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(Ns, { size: 16 })
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
function Gs(e) {
  return !e || typeof e != "string" ? e : Ge(e);
}
function qs(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = Gs(n) : n = Zs(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function Zs(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => Vs(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function Vs(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Ys = 20, Ks = 20, rn = 20, on = -12, Xs = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, Js = {
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
}, lt = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, Qs = (e, t, n) => !!((me(t) || me(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), ei = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (me(t) || me(n))), me = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && me(e.parentElement) : !1, kt = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: i,
  onClick: o,
  onScroll: s,
  onPaste: a,
  onRemovePageBreak: c,
  zoomLevel: u = 100,
  pageMargins: h = de
}) => {
  const d = J(() => pn(h), [h]), g = u / 100, p = N((b, M) => {
    if (!b) return !1;
    const m = b.getBoundingClientRect(), L = M - m.top;
    return L < d.top || L > m.height - d.bottom;
  }, [d.top, d.bottom]), f = N((b, M) => {
    M.preventDefault();
    const m = b.getBoundingClientRect(), L = M.clientX - m.left, v = M.clientY - m.top, R = m.width - rn - Ys, S = on, w = m.width - rn, P = on + Ks;
    L >= R && L <= w && v >= S && v <= P && c && c(b);
  }, [c]), T = N((b) => {
    b.preventDefault();
    const M = t.current.getBoundingClientRect();
    if (b.clientY - M.top < d.top) {
      const L = t.current.firstElementChild;
      L && L.tagName !== "PAGE-BREAK" && lt(L, !0);
    } else {
      const L = t.current.lastElementChild;
      L && L.tagName !== "PAGE-BREAK" && lt(L, !1);
    }
  }, [t, d.top]), x = N((b) => {
    const M = window.getSelection();
    if (!M || M.rangeCount === 0) return;
    const m = M.getRangeAt(0), { startContainer: L, endContainer: v } = m;
    if (Qs(b, L, v))
      return b.preventDefault(), !1;
    if (b.key === "Enter" && !b.shiftKey) {
      let R = L;
      for (R.nodeType === Node.TEXT_NODE && (R = R.parentElement); R && R !== t.current; ) {
        if (/^H[1-6]$/.test(R.tagName)) {
          b.preventDefault();
          const S = document.createElement("p");
          return S.innerHTML = "<br>", R.nextSibling ? R.parentNode.insertBefore(S, R.nextSibling) : R.parentNode.appendChild(S), lt(S, !0), r && r(), !1;
        }
        R = R.parentElement;
      }
    }
    if ($s(b))
      return r && r(), !1;
    if (ei(b, L, v))
      return b.preventDefault(), !1;
    i && i(b);
  }, [i, r, t]), A = N((b) => {
    if (!t.current) return;
    const M = b.target;
    if (me(M)) {
      f(M, b);
      return;
    }
    if (p(t.current, b.clientY)) {
      T(b);
      return;
    }
    o && o(b);
  }, [t, o, f, T, p]), k = N((b) => {
    const M = window.getSelection();
    if (!M || M.rangeCount === 0) return;
    const m = M.getRangeAt(0), { startContainer: L } = m;
    if (me(L))
      return b.preventDefault(), !1;
  }, []), O = N((b) => {
    const M = qs(b);
    a && a(b, M);
  }, [a]);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...Xs,
        maxWidth: `${e.width}px`,
        transform: `scale(${g})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            ...Js,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`
          },
          onInput: n,
          onKeyDown: x,
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
  pageMargins: de
};
const ti = ur(kt), In = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = de,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: a,
  onAddPage: c,
  onDeletePage: u,
  onPageSizeChange: h,
  onPageMarginsChange: d,
  onZoomIn: g,
  onZoomOut: p,
  onZoomReset: f
} = {}) => {
  const T = Math.max(e?.length || 0, 1), x = (A) => {
    if (T <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    u?.(A);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(ts, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: n,
              onChange: (A) => h?.(A.target.value),
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
              value: r,
              onChange: (A) => d?.(A.target.value),
              children: xr().map((A) => /* @__PURE__ */ l.jsx("option", { value: A, children: yr(A) }, A))
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
          onClick: p,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(ds, { size: 12 })
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
          onClick: g,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(cs, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: e.map((A, k) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${k === t ? "active" : ""}`,
          onClick: () => a?.(k),
          "aria-label": `Go to page ${k + 1}`,
          "aria-current": k === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Et, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              k + 1
            ] })
          ]
        }
      ),
      T > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (O) => {
            O.stopPropagation(), x(k);
          },
          "aria-label": `Delete page ${k + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(as, { size: 14 })
        }
      )
    ] }, A.id || `page-${k}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => c?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Xo, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
In.propTypes = {
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
const ni = Xe.memo(In), Fe = 10, ri = 300, oi = 200;
function si(e) {
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
function ii(e, t, n, r, i, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    I.TOP_LEFT,
    I.TOP_RIGHT,
    I.BOTTOM_LEFT,
    I.BOTTOM_RIGHT
  ].includes(i) ? e / s > t ? t = e / s : e = t * s : [I.TOP, I.BOTTOM].includes(i) ? e = t * s : [I.LEFT, I.RIGHT].includes(i) && (t = e / s), { width: e, height: t };
}
function ai({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: i,
  startWidth: o,
  startHeight: s,
  options: a = ve
}) {
  const c = r - t, u = i - n;
  let h = o, d = s;
  switch (e) {
    case I.TOP_LEFT:
      h = o - c, d = s - u;
      break;
    case I.TOP_RIGHT:
      h = o + c, d = s - u;
      break;
    case I.BOTTOM_LEFT:
      h = o - c, d = s + u;
      break;
    case I.BOTTOM_RIGHT:
      h = o + c, d = s + u;
      break;
    case I.TOP:
      d = s - u;
      break;
    case I.BOTTOM:
      d = s + u;
      break;
    case I.LEFT:
      h = o - c;
      break;
    case I.RIGHT:
      h = o + c;
      break;
    default:
      return { width: h, height: d };
  }
  return { width: h, height: d } = ii(
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
function jn(e, { width: t, height: n }) {
  he(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function li(e, t, n) {
  jn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function ci(e, t, n, r) {
  const { ctrlKey: i, metaKey: o, shiftKey: s, key: a } = e, c = i || o, u = n.offsetWidth, h = n.offsetHeight, g = {
    // Increase width
    ">": c && s ? () => ({
      width: Math.min(r.maxWidth || 800, u + Fe),
      height: h
    }) : null,
    // Decrease width
    "<": c && s ? () => ({
      width: Math.max(r.minWidth || 50, u - Fe),
      height: h
    }) : null,
    // Increase height
    "+": c && s ? () => ({
      width: u,
      height: Math.min(r.maxHeight || 600, h + Fe)
    }) : null,
    // Decrease height
    "-": c && s ? () => ({
      width: u,
      height: Math.max(r.minHeight || 50, h - Fe)
    }) : null,
    // Reset to default
    r: c && !s ? () => ({ width: ri, height: oi }) : null
  }[a];
  if (g) {
    e.preventDefault();
    const p = g();
    return li(t, n, p), !0;
  }
  return !1;
}
const Lt = ({
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
  }), s = G(i), a = xe();
  q(() => {
    s.current = i;
  }, [i]);
  const c = N((x) => {
    if (!he(x)) return;
    o.current.overlay && (at(o.current.overlay), o.current.overlay = null), x.classList.add("selected");
    const A = Xr(x, s.current);
    A && (o.current.overlay = A, o.current.image = x, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((O) => {
      O.addEventListener("mousedown", h);
    }), n && n(x));
  }, [n]), u = N(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (at(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), h = N((x) => {
    if (x.preventDefault(), x.stopPropagation(), !o.current.image) return;
    const A = x.currentTarget.dataset.handler, k = o.current.image.getBoundingClientRect(), O = window.pageYOffset || document.documentElement.scrollTop, b = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: x.clientX,
      y: x.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: x.clientX - k.left - b,
      offsetY: x.clientY - k.top - O
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = si(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", g);
  }, []), d = N((x) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    x.preventDefault(), x.stopPropagation();
    const { x: A, y: k, width: O, height: b } = o.current.start, M = o.current.handler, m = x.clientX, L = x.clientY, v = ai({
      handler: M,
      startX: A,
      startY: k,
      currentX: m,
      currentY: L,
      startWidth: O,
      startHeight: b,
      options: s.current
    });
    jn(o.current.image, v), o.current.overlay && Tt(o.current.overlay, o.current.image);
  }, []), g = N((x) => {
    if (o.current.isResizing) {
      if (x.preventDefault(), x.stopPropagation(), o.current.image && o.current.start) {
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
  }, [t, a]), p = N((x) => {
    o.current.overlay && !o.current.overlay.contains(x.target) && u();
    const A = x.target;
    if (he(A)) {
      if (A === o.current.image)
        return;
      c(A);
    }
  }, [c, u]), f = N((x) => {
    if ((x.key === "Delete" || x.key === "Backspace") && o.current.image && !o.current.isResizing) {
      x.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), u();
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
    x.key === "Escape" && o.current.image && u(), o.current.image && !o.current.isResizing && ci(x, e, o.current.image, s.current);
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
    const x = e.current;
    return x.addEventListener("click", p), x.addEventListener("keydown", f), window.addEventListener("resize", T), () => {
      x.removeEventListener("click", p), x.removeEventListener("keydown", f), window.removeEventListener("resize", T), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && at(o.current.overlay);
    };
  }, [e, p, f, T, d, g]), q(() => {
    if (!e.current) return;
    const x = new MutationObserver((A) => {
      A.forEach((k) => {
        k.type === "childList" && k.removedNodes.forEach((O) => {
          O.nodeType === Node.ELEMENT_NODE && he(O) && O === o.current.image && u();
        });
      });
    });
    return x.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => x.disconnect();
  }, [e, u, c]), null;
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
  resizeOptions: ve
};
const Nt = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, ui = {
  ...Nt,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, ct = (e) => ({
  ...Nt,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), Ot = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, a] = K({ top: 0, left: 0 }), [c, u] = K(!1), [h, d] = K("top"), [g, p] = K(o), f = G(null), T = xe(), x = (w) => {
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
  }, [e]), [O, b] = K("left");
  q(() => {
    e && b(k());
  }, [e, k]);
  const M = N(() => {
    if (!e || !f.current) return;
    const w = e.getBoundingClientRect(), P = f.current.getBoundingClientRect(), _ = window.innerWidth, j = window.innerHeight, F = w.bottom >= 0 && w.top <= j && w.right >= 0 && w.left <= _;
    let z = "top", V = 0, X = 0;
    if (F) {
      const E = w.top - P.height - 10, H = j - w.bottom - P.height - 10;
      H > E && H > 0 ? (z = "bottom", V = w.bottom + 10) : (z = "top", V = w.top - P.height - 10);
    } else
      z = "top", V = 10;
    X = w.left + w.width / 2 - P.width / 2;
    let re = Math.max(10, Math.min(X, _ - P.width - 10)), le = Math.max(10, Math.min(V, j - P.height - 10));
    a({ top: le, left: re }), d(z), u(!0);
  }, [e]);
  dn(() => {
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
      e.style.float = j.float, e.style.margin = j.margin, e.style.display = j.display, b(w), x(e);
      const F = A(e);
      T.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w, state: F } },
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
        const F = new URL(w).pathname.split("/"), z = F[F.length - 1];
        z && z.includes(".") && (P = z);
      }
    } catch {
      P = "image.png";
    }
    const _ = document.createElement("a");
    _.href = w, _.download = P, _.style.display = "none", document.body.appendChild(_), _.click(), document.body.removeChild(_);
  };
  return !e || typeof document > "u" ? null : gn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: f,
        className: "image-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !c,
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
          pointerEvents: c ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: c ? 1 : 0,
          visibility: c ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${g ? "" : "active"}`,
              onClick: R,
              title: `Toggle aspect ratio preservation (currently ${g ? "ON" : "OFF"})`,
              children: g ? /* @__PURE__ */ l.jsx(Qo, { size: 14 }) : /* @__PURE__ */ l.jsx(Go, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button download-button",
              onClick: S,
              title: "Download Image",
              style: Nt,
              children: /* @__PURE__ */ l.jsx(_o, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${O === "left" ? "active" : ""}`,
              onClick: () => L("left"),
              title: "Align Left",
              style: ct(O === "left"),
              children: /* @__PURE__ */ l.jsx(Nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${O === "center" ? "active" : ""}`,
              onClick: () => L("center"),
              title: "Align Center",
              style: ct(O === "center"),
              children: /* @__PURE__ */ l.jsx(kn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${O === "right" ? "active" : ""}`,
              onClick: () => L("right"),
              title: "Align Right",
              style: ct(O === "right"),
              children: /* @__PURE__ */ l.jsx(Ln, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: v,
              title: "Delete Image",
              style: ui,
              children: /* @__PURE__ */ l.jsx(bt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Ot.propTypes = {
  imageElement: y.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: y.func,
  onAspectRatioToggle: y.func,
  onDelete: y.func,
  onClose: y.func.isRequired,
  initialPreserveAspectRatio: y.bool
};
Ot.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const qe = (e) => {
  e.preventDefault(), e.stopPropagation();
}, di = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((i) => {
      r.classList.remove(i);
    });
  });
}, sn = (e, t) => !e || !t ? !1 : e.contains(t), gi = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, St = {
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
function ie(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function ae(e) {
  if (!ie(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, i = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= r)
    for (let c = 0; c < r; c++) {
      const u = s[c], h = u.style.width ? parseInt(u.style.width, 10) : u.offsetWidth;
      i.push(h || 100);
    }
  else if (n.length > 0) {
    const c = n[0];
    for (let u = 0; u < c.cells.length; u++) {
      const h = c.cells[u];
      i.push(h.offsetWidth);
    }
  }
  const a = n.map((c) => (c.style.height ? parseInt(c.style.height, 10) : null) || c.offsetHeight);
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
function pi({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: i = St
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (a, c, u, h, d) => {
    c >= 0 && c < a.length && (a[c] = Math.max(h, Math.min(d, a[c] + u)));
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
      const a = document.createElement("col");
      r.appendChild(a);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(i[s]);
}
function Pe(e, t) {
  if (!ie(e)) return;
  ye(e);
  const { columnWidths: n, rowHeights: r, tableWidth: i, tableHeight: o } = t, s = n ? n.reduce((c, u) => c + u, 0) : 0, a = r ? r.reduce((c, u) => c + u, 0) : 0;
  if (i !== void 0 ? e.style.width = `${i}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : a > 0 && (e.style.height = `${a}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const c = e.querySelector("colgroup");
    c && c.querySelectorAll("col").forEach((h, d) => {
      d < n.length && (h.style.width = `${n[d]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((u, h) => {
    h < r.length && (u.style.height = `${r[h]}px`);
  }), e.style.height = `${a}px`), e.offsetHeight;
}
function fi(e) {
  if (!ie(e)) return null;
  ye(e);
  const t = ae(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const a = Ye($.COLUMN, s, t, r, e);
    n.appendChild(a);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const a = Ye($.ROW, s, t, r, e);
    n.appendChild(a);
  }
  const i = Ke($.TABLE_BOTTOM, t, r);
  n.appendChild(i);
  const o = Ke($.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const hi = {
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
function Bn(e, t, n) {
  const r = hi[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const i = document.createElement("div");
  return i.className = r.className, i.dataset.type = e, i.style.position = "absolute", i.style.cursor = r.cursor, i.style.pointerEvents = "all", r.isVertical ? (i.style.width = "4px", i.style.height = `${t}px`) : (i.style.width = `${t}px`, i.style.height = "4px"), n != null && (i.dataset.index = n), i;
}
function Ye(e, t, n, r, i) {
  const o = e === $.COLUMN ? r.height : r.width, s = Bn(e, o, t);
  return we(s, e, t, n, r, i), s;
}
function Ke(e, t, n) {
  const r = e === $.TABLE_RIGHT ? n.height : n.width, i = Bn(e, r);
  return we(i, e, null, t, n, null), i;
}
function vt(e, t) {
  if (!e || !t) return;
  ye(t);
  const n = ae(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const i = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), a = e.querySelector(".table-right-resize-handler");
  if (i.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !a) {
    e.innerHTML = "";
    for (let d = 0; d < n.columns - 1; d++) {
      const g = Ye($.COLUMN, d, n, r, t);
      e.appendChild(g);
    }
    for (let d = 0; d < n.rows - 1; d++) {
      const g = Ye($.ROW, d, n, r, t);
      e.appendChild(g);
    }
    const u = Ke($.TABLE_BOTTOM, n, r);
    e.appendChild(u);
    const h = Ke($.TABLE_RIGHT, n, r);
    e.appendChild(h);
  } else
    i.forEach((u, h) => {
      we(u, $.COLUMN, h, n, r, t);
    }), o.forEach((u, h) => {
      we(u, $.ROW, h, n, r, t);
    }), s && we(s, $.TABLE_BOTTOM, null, n, r, null), a && we(a, $.TABLE_RIGHT, null, n, r, null);
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function _t(e, t = "Operation") {
  return ie(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function mi(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", t.appendChild(i);
  }
  return t;
}
function Hn(e, t, n = 0) {
  if (!_t(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const i = e.rows[t];
  if (!i)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = mi(i);
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
function xi(e, t) {
  return Hn(e, t, -1);
}
function yi(e, t) {
  return Hn(e, t, 1);
}
function Ti() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function Dn(e, t, n = 0) {
  if (!_t(e, "insertColumnAtPosition"))
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
      const a = Ti();
      i < s.cells.length ? s.insertBefore(a, s.cells[i]) : s.appendChild(a);
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
function Ei(e, t) {
  return Dn(e, t, -1);
}
function bi(e, t) {
  return Dn(e, t, 1);
}
function we(e, t, n, r, i, o) {
  switch (t) {
    case $.COLUMN:
      wi(e, n, r, i, o);
      break;
    case $.ROW:
      vi(e, n, r, i, o);
      break;
    case $.TABLE_BOTTOM:
      Ai(e, r, i);
      break;
    case $.TABLE_RIGHT:
      Ci(e, r, i);
      break;
  }
}
function wi(e, t, n, r, i) {
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
function vi(e, t, n, r, i) {
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
function Ai(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Ci(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function zn(e, t, n) {
  return _t(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? Ri(e, t) : n === "column" ? ki(e, t) : !1 : !1;
}
function Ri(e, t) {
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
function ki(e, t) {
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
function Li(e, t) {
  return zn(e, t, "row");
}
function Ni(e, t) {
  return zn(e, t, "column");
}
const Mt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: i = St
}) => {
  const o = G(null), s = G(null), a = G(null), c = G(null), u = G(null), h = G(i), d = G(!1), [g, p] = K(null), f = xe();
  q(() => {
    h.current = i;
  }, [i]);
  const T = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ke(o.current), o.current = null), p(null), a.current = null, c.current = null, u.current = null, d.current = !1, r && r();
  }, [r]), x = N((v) => {
    if (qe(v), !s.current) return;
    const R = v.currentTarget, S = R.dataset.type, w = parseInt(R.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const P = ae(s.current);
    a.current = {
      x: v.clientX,
      y: v.clientY,
      structure: { ...P }
    }, c.current = S, u.current = w, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const j = {
      [$.COLUMN]: "col-resize",
      [$.ROW]: "row-resize",
      [$.TABLE_BOTTOM]: "ns-resize",
      [$.TABLE_RIGHT]: "ew-resize"
    }[S] || "default";
    document.body.style.cursor = j, document.addEventListener("mousemove", O), document.addEventListener("mouseup", b);
  }, []), A = N((v) => {
    const R = fi(v, h.current);
    return R && (o.current = R, s.current = v, document.body.appendChild(R), R.querySelectorAll(".table-resize-handler").forEach((w) => {
      w.addEventListener("mousedown", x);
    })), R;
  }, [x]), k = N((v) => {
    if (!ie(v)) return;
    o.current && (ke(o.current), o.current = null), v.classList.add("selected"), A(v) && (p(v), n && n(v));
  }, [n, A]), O = N((v) => {
    if (!d.current || !s.current || !a.current || !c.current) return;
    qe(v);
    const { x: R, y: S, structure: w } = a.current, P = c.current, _ = u.current, j = v.clientX, F = v.clientY;
    let z = 0;
    switch (P) {
      case $.COLUMN:
        z = j - R;
        break;
      case $.ROW:
        z = F - S;
        break;
      case $.TABLE_BOTTOM:
        z = F - S;
        break;
      case $.TABLE_RIGHT:
        z = j - R;
        break;
    }
    const V = pi({
      type: P,
      index: _,
      delta: z,
      currentStructure: w,
      options: h.current
    });
    Pe(s.current, V), o.current && vt(o.current, s.current);
  }, []), b = N((v) => {
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
      if (a.current = null, c.current = null, u.current = null, d.current = !1, document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", b), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
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
      v.removeEventListener("click", M), v.removeEventListener("keydown", m), window.removeEventListener("resize", L), d.current && (document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", b), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && ke(o.current);
    };
  }, [e, M, m, L, O, b]), q(() => {
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
Mt.propTypes = {
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
Mt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: St
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
}, an = {
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
}, ln = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && vt(r, n);
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
  const [s, a] = K({ top: 0, left: 0 }), [c, u] = K(!1), [h, d] = K("top"), [g, p] = K("left"), f = G(null), T = xe(), x = N(() => {
    if (!e) return "left";
    const _ = window.getComputedStyle(e);
    return _.marginLeft === "auto" && _.marginRight === "auto" ? "center" : _.float === "right" ? "right" : (_.float === "left", "left");
  }, [e]);
  q(() => {
    e && p(x());
  }, [e, x]);
  const A = N(() => {
    if (!e || !f.current) return;
    const _ = e.getBoundingClientRect(), j = f.current.getBoundingClientRect(), F = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, z = _.bottom >= 0 && _.top <= F.height && _.right >= 0 && _.left <= F.width;
    let V = "top", X = 0, re = 0;
    if (z) {
      const Y = _.top - j.height - 10, Q = F.height - _.bottom - j.height - 10;
      Q > Y && Q > 0 ? (V = "bottom", X = _.bottom + 10) : (V = "top", X = _.top - j.height - 10);
    } else
      V = "top", X = 10;
    re = _.left + _.width / 2 - j.width / 2;
    const le = window.innerWidth, E = window.innerHeight;
    let H = Math.max(10, Math.min(re, le - j.width - 10)), U = Math.max(10, Math.min(X, E - j.height - 10));
    a({ top: U, left: H }), d(V), u(!0);
  }, [e]);
  dn(() => {
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
    if (!e || !an[_]) return;
    const j = cn(e), F = g, z = an[_];
    e.style.float = z.float, e.style.margin = z.margin, e.style.marginLeft = z.marginLeft, e.style.marginRight = z.marginRight, p(_), ln(e);
    const V = cn(e);
    T.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: _, state: V } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: F, state: j } }
    ), t?.(_);
  }, [e, g, T, t]), O = N((_, j) => () => {
    if (!e) return;
    const F = _.includes("ROW"), z = F ? r : i;
    if (z == null || !j(e, z)) return;
    o?.current && T.updateContinuousContent(o.current.innerHTML);
    const X = F ? { element: e, index: z } : { element: e, index: z };
    T.recordOperation(
      { type: _, payload: X },
      { type: _, payload: X }
      // Reverse operation would be same type
    ), ln(e), requestAnimationFrame(() => A());
  }, [e, r, i, o, T, A]), b = J(
    () => O(be.INSERT_ROW_ABOVE, xi),
    [O]
  ), M = J(
    () => O(be.INSERT_ROW_BELOW, yi),
    [O]
  ), m = J(
    () => O(be.INSERT_COL_LEFT, Ei),
    [O]
  ), L = J(
    () => O(be.INSERT_COL_RIGHT, bi),
    [O]
  ), v = J(
    () => O(be.DELETE_ROW, Li),
    [O]
  ), R = J(
    () => O(be.DELETE_COL, Ni),
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
    pointerEvents: c ? "auto" : "none",
    minWidth: "100px",
    minHeight: "32px",
    opacity: c ? 1 : 0,
    visibility: c ? "visible" : "hidden",
    transition: "opacity 0.15s ease, visibility 0.15s ease"
  }), [s, c]);
  return !e || typeof document > "u" ? null : gn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: f,
        className: "table-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !c,
        style: P,
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${g === "left" ? "active" : ""}`,
              onClick: () => k("left"),
              title: "Align Left",
              style: S(g === "left"),
              children: /* @__PURE__ */ l.jsx(Nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${g === "center" ? "active" : ""}`,
              onClick: () => k("center"),
              title: "Align Center",
              style: S(g === "center"),
              children: /* @__PURE__ */ l.jsx(kn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${g === "right" ? "active" : ""}`,
              onClick: () => k("right"),
              title: "Align Right",
              style: S(g === "right"),
              children: /* @__PURE__ */ l.jsx(Ln, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("div", { style: w.divider }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: b,
                title: "Insert Row Above",
                style: w.rowAction,
                children: /* @__PURE__ */ l.jsx(Ro, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: M,
                title: "Insert Row Below",
                style: w.rowAction,
                children: /* @__PURE__ */ l.jsx(Eo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: v,
                title: "Delete Row",
                style: w.delete,
                children: /* @__PURE__ */ l.jsx(bt, { size: 14 })
              }
            )
          ] }),
          i != null && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("div", { style: w.divider }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: m,
                title: "Insert Column Left",
                style: w.colAction,
                children: /* @__PURE__ */ l.jsx(wo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: L,
                title: "Insert Column Right",
                style: w.colAction,
                children: /* @__PURE__ */ l.jsx(Ao, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: R,
                title: "Delete Column",
                style: w.delete,
                children: /* @__PURE__ */ l.jsx(bt, { size: 14 })
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
const Oi = ".table-cell-selected, .table-row-selected, .table-col-selected", un = () => {
  di(Oi, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, It = ({
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
  }), [r, i] = K(!1), [o, s] = K(!1), [a, c] = K(null), [u, h] = K(null), d = G(null), g = N(() => {
    n.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, i(!1), s(!1), c(null), h(null);
  }, []), p = N(() => {
    g(), un(), d.current !== null && (d.current = null, t && t(null));
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
  }, [f]), x = N((m, L, v, R, S) => {
    if (un(), !(!S || !m)) {
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
      gi();
    }
  }, []), A = N((m, L) => {
    const v = T(m);
    n.current.selectedCells = m, n.current.selectionMode = v.mode, n.current.selectedRowIndex = v.rowIndex, n.current.selectedColIndex = v.colIndex, n.current.currentTable = L, h(L), x(v.mode, v.rowIndex, v.colIndex, m, L);
    const R = v.mode ? {
      mode: v.mode,
      cells: m,
      rowIndex: v.rowIndex,
      colIndex: v.colIndex,
      table: L
    } : null;
    JSON.stringify(d.current) !== JSON.stringify(R) && (d.current = R, t && t(R));
  }, [T, x, t]), k = N((m) => {
    const L = m.target.closest("td, th");
    if (!L) return;
    const v = f(L);
    v && (i(!0), c(L), h(v.table), s(!1));
  }, [f]), O = N((m) => {
    if (!r || !a) return;
    const L = m.target.closest("td, th");
    if (!L || !u || !sn(u, L)) return;
    s(!0), qe(m);
    const v = f(a), R = f(L);
    if (!v || !R || v.table !== R.table) return;
    const S = Math.min(v.rowIndex, R.rowIndex), w = Math.max(v.rowIndex, R.rowIndex), P = Math.min(v.cellIndex, R.cellIndex), _ = Math.max(v.cellIndex, R.cellIndex), j = /* @__PURE__ */ new Set();
    for (let F = S; F <= w; F++) {
      const z = u.rows[F];
      if (z)
        for (let V = P; V <= _; V++) {
          const X = z.cells[V];
          X && j.add(X);
        }
    }
    A(j, u);
  }, [r, a, u, f, A]), b = N(() => {
    o || p(), i(!1), c(null);
  }, [o, p]), M = N((m) => {
    const L = m.target.closest("td, th"), v = m.target.closest("table");
    if (!(L && u && sn(u, L))) {
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
    return m.addEventListener("mousedown", L, !0), m.addEventListener("mouseenter", v, !0), document.addEventListener("mouseup", b), document.addEventListener("click", M), () => {
      m.removeEventListener("mousedown", L, !0), m.removeEventListener("mouseenter", v, !0), document.removeEventListener("mouseup", b), document.removeEventListener("click", M);
    };
  }, [e, k, O, b, M]), q(() => {
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
It.propTypes = {
  editorRef: y.shape({
    current: y.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: y.func
};
It.defaultProps = {
  onCellSelectionChange: void 0
};
const Si = 50, ut = 50, _i = 50, Mi = 100, Pi = 300, jt = At(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: a = !0,
  showToolbar: c = !0,
  showPageManager: u = !0
}, h) => {
  const d = yn(), g = xe(), { pageSize: p, pageMargins: f, continuousContent: T, pageBoundaries: x, activePage: A, zoomLevel: k, canUndo: O, canRedo: b } = d, M = G(null), m = G(null), { currentFormat: L, formatText: v, updateCurrentFormatFromSelection: R } = Cr(), [S, w] = K(!1), [P, _] = K(null), [j, F] = K(!0), [z, V] = K(!1), [X, re] = K(null), [le, E] = K(null), [H, U] = K(null), {
    checkAndUpdateBoundaries: Y,
    getCurrentPage: Q,
    scrollToPage: se,
    updateBoundaries: D,
    triggerAutoReflow: ee,
    removePageAndContent: Te,
    removePageBreak: Ie,
    insertPageBreakAtBoundary: Bt
  } = Vr(p, m, k, f), Fn = J(() => Se(p), [p]), [Un, Wn] = K(!1), pe = G(null), je = G(!1), Be = G(!1), He = G(!1), De = G(T), Qe = N(() => {
    je.current = !1;
    const C = Math.max(0, x.length - 1);
    g.setActivePage(C), setTimeout(() => {
      se(C, M);
    }, _i);
  }, [x.length, g, se]);
  q(() => {
    if (!m.current || He.current) return;
    m.current.innerHTML = T, He.current = !0, De.current = T;
    const C = setTimeout(() => {
      D();
    }, Si);
    return () => clearTimeout(C);
  }, []), q(() => {
    if (!m.current || !He.current) return;
    if (m.current.innerHTML !== T) {
      m.current.innerHTML = T;
      const W = setTimeout(() => {
        D(), je.current && Qe();
      }, ut);
      return De.current = T, () => clearTimeout(W);
    }
  }, [T, D, Qe]), q(() => {
    s && He.current && s(T);
  }, [T, s]);
  const { restoreCursorPosition: et, hasActiveCursorSelection: tt } = Kr({
    updateCurrentFormatFromSelection: R,
    editorRef: m
  }), Gn = N((C) => {
    C !== T && g.updateContinuousContent(C), m.current && m.current.innerHTML !== C && (m.current.innerHTML = C), De.current = C, setTimeout(() => {
      D();
    }, ut);
  }, [T, g, D]), nt = N((C) => {
    if (!m.current || !C) return;
    tt() || et(), document.execCommand("insertHTML", !1, C);
    const W = m.current.innerHTML;
    g.updateContinuousContent(W), De.current = W, setTimeout(() => {
      D(), ee(200);
    }, ut);
  }, [tt, et, g, D, ee]), Ht = J(() => ({
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
    getCursorPosition: () => m.current ? qr(m.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (C) => {
      const W = Ge(C);
      Gn(W);
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
      const W = Ge(C);
      nt(W);
    }
  }), [T, g, D, ee, tt, et]);
  dr(h, () => Ht, [Ht]);
  const rt = N(() => {
    if (!m.current) return;
    let C = m.current.innerHTML;
    C = Ge(C), C !== m.current.innerHTML && (m.current.innerHTML = C);
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
    g.updateContinuousContent(C), Y(), ee(200);
    const te = Q(M);
    te !== A && g.setActivePage(te);
  }, [g, Y, Q, A, ee, M, m, T]), qn = N((C) => {
    rt();
  }, [rt]), Dt = N((C) => {
    g.updatePageSize(C), D({ pageSize: C }), i && i(C);
  }, [g, D, i]), zt = N((C) => {
    g.updatePageMargins(C), D({ pageMargins: C }), o && o(C);
  }, [g, D, o]), $t = N((C) => {
    C < 0 || C >= x.length || (Be.current = !0, g.setActivePage(C), se(C, M), setTimeout(() => {
      Be.current = !1;
    }, Pi), t && t(C));
  }, [g, se, t, x.length]), Ft = N(() => {
    const C = x.length + 1;
    Bt(C) && (je.current = !0, setTimeout(() => {
      je.current && Qe();
    }, 100)), n && n();
  }, [x.length, Bt, g, se, n]), Zn = N(() => {
    const C = window.getSelection();
    if (C && C.rangeCount > 0) {
      if (!m?.current) return;
      const oe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, oe), setTimeout(() => {
        D();
        const Ee = Q(M);
        g.setActivePage(Ee);
      }, 150);
    }
  }, [D, Q, g, M]), Vn = N((C) => {
    nt(C), setTimeout(() => {
      ee(800);
    }, 100);
  }, [nt, ee]), Yn = N((C) => {
    if (!C) return;
    Ie(C) && setTimeout(() => {
      const te = Q(M);
      g.setActivePage(te);
    }, 200);
  }, [Ie, Q, g, M]), Ut = N((C) => {
    if (x.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Te(C) && (g.setActivePage(0), r && r(C));
  }, [x.length, Te, g, r]), Kn = J(() => ({
    handleZoomIn: () => g.zoomIn(),
    handleZoomOut: () => g.zoomOut(),
    handleZoomReset: () => g.resetZoom(),
    handleUndo: () => g.undo(),
    handleRedo: () => g.redo()
  }), [g]), { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: Xn, handleRedo: Jn } = Kn;
  Yr(
    { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: it, handleUndo: Xn, handleRedo: Jn },
    { editorRef: m, containerRef: M }
  );
  const Qn = N(() => {
    !M.current || !m.current || Be.current || (pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      if (Be.current) {
        pe.current = null;
        return;
      }
      const C = Q(M);
      C !== A && C >= 0 && g.setActivePage(C), pe.current = null;
    }, Mi));
  }, [Q, A, g]), er = J(() => {
    if (!T) return 0;
    const W = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return W ? W.length : 0;
  }, [T]), tr = x.length || 1, nr = N((C) => {
    w(!0), _(C);
  }, []), Wt = N(() => {
    w(!1), _(null);
  }, []), rr = N((C, W) => {
  }, []), or = N((C) => {
    C && C.mode === "row" ? (E(C.rowIndex), U(null)) : C && C.mode === "column" ? (U(C.colIndex), E(null)) : (E(null), U(null));
  }, []), sr = N((C) => {
    V(!0), re(C);
  }, []), Gt = N(() => {
    V(!1), re(null);
  }, []), ir = N((C, W) => {
  }, []);
  return q(() => () => {
    pe.current && clearTimeout(pe.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    c && /* @__PURE__ */ l.jsx(
      Rt,
      {
        currentFormat: {
          ...L,
          imageSelected: S
        },
        onFormatText: v,
        onAddPageBreak: Zn,
        onInsertImage: Vn,
        canUndo: O,
        canRedo: b
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ l.jsx(
        ps,
        {
          editorView: null,
          isCollapsed: Un,
          onToggle: () => Wn((C) => !C),
          wordCount: er,
          pageCount: tr
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: M,
          onScroll: Qn,
          children: /* @__PURE__ */ l.jsx(
            ti,
            {
              content: T,
              dimensions: Fn,
              pageSize: p,
              pageMargins: f,
              pageBoundaries: x,
              editorRef: m,
              onInput: qn,
              onContentChange: rt,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: Yn,
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        Lt,
        {
          editorRef: m,
          onImageSelect: nr,
          onImageDeselect: Wt,
          onImageResize: rr,
          resizeOptions: {
            ...ve,
            preserveAspectRatio: j,
            aspectRatio: j
          }
        }
      ),
      /* @__PURE__ */ l.jsx(
        Mt,
        {
          editorRef: m,
          onTableSelect: sr,
          onTableDeselect: Gt,
          onTableResize: ir
        }
      ),
      /* @__PURE__ */ l.jsx(
        It,
        {
          editorRef: m,
          onCellSelectionChange: or
        }
      ),
      S && P && /* @__PURE__ */ l.jsx(
        Ot,
        {
          imageElement: P,
          initialPreserveAspectRatio: j,
          onAlignChange: (C) => {
          },
          onAspectRatioToggle: (C) => {
            F(C);
          },
          onDelete: () => {
            if (P) {
              const C = P.getAttribute("data-key");
              C && oo(C).catch((W) => {
                console.error("Failed to delete image from IndexedDB:", W);
              });
            }
          },
          onClose: Wt
        }
      ),
      z && X && /* @__PURE__ */ l.jsx(
        Pt,
        {
          tableElement: X,
          onAlignChange: (C) => {
          },
          onClose: Gt,
          selectedRowIndex: le,
          selectedColIndex: H,
          editorRef: m
        }
      ),
      u && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Xe.cloneElement(e, {
        onNavigate: $t,
        onAddPage: Ft,
        onDeletePage: Ut,
        onPageSizeChange: Dt,
        onPageMarginsChange: zt,
        zoomLevel: k,
        canZoomIn: ht(k),
        canZoomOut: mt(k),
        onZoomIn: ot,
        onZoomOut: st,
        onZoomReset: it
      }) : /* @__PURE__ */ l.jsx(
        ni,
        {
          pageBoundaries: x,
          activePage: A,
          pageSize: p,
          pageMargins: f,
          zoomLevel: k,
          canZoomIn: ht(k),
          canZoomOut: mt(k),
          onNavigate: $t,
          onAddPage: Ft,
          onDeletePage: Ut,
          onPageSizeChange: Dt,
          onPageMarginsChange: zt,
          onZoomIn: ot,
          onZoomOut: st,
          onZoomReset: it
        }
      ) })
    ] })
  ] });
});
jt.displayName = "HtmlEditor";
jt.propTypes = {
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
jt.defaultProps = {
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
class $n extends Xe.Component {
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
$n.propTypes = {
  children: y.node.isRequired,
  fallback: y.node,
  onError: y.func,
  onReset: y.func,
  showDetails: y.bool
};
$n.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  br as COMMON_FONT_SIZES,
  Pn as ColorPickerDropdown,
  Je as DEFAULT_FONT_SIZE,
  ve as DEFAULT_IMAGE_RESIZE_OPTIONS,
  fn as DEFAULT_PAGE_SIZE,
  St as DEFAULT_TABLE_RESIZE_OPTIONS,
  $i as DocumentProvider,
  Rt as EditorToolbar,
  $n as ErrorBoundary,
  Tn as FONT_SIZE_MAP,
  jt as HtmlEditor,
  Lt as ImageResizeHandlers,
  Ve as PAGE_SIZES,
  ni as PageManager,
  ti as PageView,
  I as RESIZE_HANDLERS,
  ps as Sidebar,
  $ as TABLE_RESIZE_HANDLERS,
  Mt as TableResizeHandlers,
  Zi as applyImageDimensions,
  Pe as applyTableDimensions,
  Gi as calculateResizeDimensions,
  pi as calculateTableResizeDimensions,
  Vi as clearImages,
  Xr as createResizeOverlay,
  fi as createTableResizeOverlay,
  oo as deleteImage,
  Yi as getAllImageKeys,
  zi as getAvailablePageSizes,
  ro as getImage,
  qi as getImageDimensions,
  Se as getPageDimensions,
  Fi as getPixelValue,
  Ui as getPointValue,
  ae as getTableStructure,
  he as isResizableImage,
  ie as isResizableTable,
  Wi as isValidFontSize,
  Di as isValidPageSize,
  js as logger,
  vr as pixelsToPoints,
  wr as pointsToPixels,
  at as removeResizeOverlay,
  ke as removeTableResizeOverlay,
  no as saveImage,
  Tt as updateResizeOverlay,
  vt as updateTableResizeOverlay,
  Vr as useContinuousReflow,
  xn as useDocument,
  xe as useDocumentActions,
  yn as useDocumentState,
  Cr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
