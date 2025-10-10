import Ne, { createContext as Jt, useContext as Qt, useReducer as er, useMemo as Me, useState as fe, useCallback as B, useRef as re, useEffect as oe, forwardRef as Ke, createElement as Ge, useLayoutEffect as tr, useImperativeHandle as rr } from "react";
import { v4 as Xe } from "uuid";
import { createPortal as nr } from "react-dom";
function or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _e = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function ar() {
  if (ct) return Ee;
  ct = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function a(r, i, n) {
    var o = null;
    if (n !== void 0 && (o = "" + n), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      n = {};
      for (var s in i)
        s !== "key" && (n[s] = i[s]);
    } else n = i;
    return i = n.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return Ee.Fragment = t, Ee.jsx = a, Ee.jsxs = a, Ee;
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
var lt;
function ir() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === H ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case A:
          return "Fragment";
        case k:
          return "Profiler";
        case j:
          return "StrictMode";
        case C:
          return "Suspense";
        case L:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case b:
            return "Portal";
          case T:
            return c.displayName || "Context";
          case R:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var P = c.render;
            return c = c.displayName, c || (c = P.displayName || P.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case p:
            return P = c.displayName || null, P !== null ? P : e(c.type) || "Memo";
          case w:
            P = c._payload, c = c._init;
            try {
              return e(c(P));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function a(c) {
      try {
        t(c);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var M = P.error, S = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return M.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(c);
      }
    }
    function r(c) {
      if (c === A) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === w)
        return "<...>";
      try {
        var P = e(c);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = V.A;
      return c === null ? null : c.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (J.call(c, "key")) {
        var P = Object.getOwnPropertyDescriptor(c, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, P) {
      function M() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: M,
        configurable: !0
      });
    }
    function g() {
      var c = e(this.type);
      return ne[c] || (ne[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, P, M, S, G, $) {
      var N = M.ref;
      return c = {
        $$typeof: y,
        type: c,
        key: P,
        props: M,
        _owner: S
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: g
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
        value: G
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function h(c, P, M, S, G, $) {
      var N = P.children;
      if (N !== void 0)
        if (S)
          if (W(N)) {
            for (S = 0; S < N.length; S++)
              d(N[S]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(N);
      if (J.call(P, "key")) {
        N = e(c);
        var U = Object.keys(P).filter(function(q) {
          return q !== "key";
        });
        S = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", x[N + S] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          N,
          U,
          N
        ), x[N + S] = !0);
      }
      if (N = null, M !== void 0 && (a(M), N = "" + M), o(P) && (a(P.key), N = "" + P.key), "key" in P) {
        M = {};
        for (var Z in P)
          Z !== "key" && (M[Z] = P[Z]);
      } else M = P;
      return N && s(
        M,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        N,
        M,
        i(),
        G,
        $
      );
    }
    function d(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === w && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === y;
    }
    var E = Ne, y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), T = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), V = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, W = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var Q, ne = {}, Y = E.react_stack_bottom_frame.bind(
      E,
      n
    )(), ee = z(r(n)), x = {};
    ve.Fragment = A, ve.jsx = function(c, P, M) {
      var S = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        c,
        P,
        M,
        !1,
        S ? Error("react-stack-top-frame") : Y,
        S ? z(r(c)) : ee
      );
    }, ve.jsxs = function(c, P, M) {
      var S = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        c,
        P,
        M,
        !0,
        S ? Error("react-stack-top-frame") : Y,
        S ? z(r(c)) : ee
      );
    };
  })()), ve;
}
var ut;
function sr() {
  return ut || (ut = 1, process.env.NODE_ENV === "production" ? _e.exports = ar() : _e.exports = ir()), _e.exports;
}
var l = sr();
const Ue = 100, Fe = 50, qe = 200, dt = 5, We = (e) => e < qe, Ze = (e) => e > Fe, cr = 96, we = (e) => Math.round(e * cr), Se = {
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
}, ge = "NORMAL", Rt = (e = ge) => {
  const t = Se[e] || Se[ge];
  return {
    top: we(t.top),
    bottom: we(t.bottom),
    left: we(t.left),
    right: we(t.right)
  };
}, lr = (e = ge) => {
  const t = Rt(e);
  return t.top + t.bottom;
}, ur = () => Object.keys(Se), dr = (e) => {
  const t = Se[e];
  return t ? t.label : "Unknown";
}, ce = {
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
}, Ot = "A4", Je = (e) => {
  const t = ce[e] || ce[Ot];
  return {
    width: t.width,
    height: t.height
  };
}, yo = (e) => Object.keys(ce).includes(e), bo = () => Object.keys(ce), Ae = Ot, ye = "<p><br></p>", fr = "continuous", Te = (e, t = Ae) => ({
  id: Xe(),
  index: e,
  size: t,
  content: ye,
  images: [],
  isBreakPoint: !1
}), Oe = (e) => typeof e != "string" || e.trim() === "" ? ye : e, Mt = (e, t = Ae) => (e.length > 0 ? e : [Te(0, t)]).map((r, i) => ({
  id: r.id || Xe(),
  index: i,
  size: r.size || t,
  content: Oe(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), pr = (e = Ae) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Je(e).height
}], Ye = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || Ae, r = Mt(e.pages || [Te(0, a)], a);
  return {
    id: Xe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: a,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || fr,
    continuousContent: e.continuousContent || ye,
    pageBoundaries: e.pageBoundaries || pr(a),
    zoomLevel: e.zoomLevel || Ue,
    pageMargins: e.pageMargins || ge
  };
}, F = {
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
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS"
}, gr = (e, t) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case F.INITIALIZE_DOCUMENT: {
      const { initialContent: r = ye, pageSize: i = Ae } = t.payload || {}, n = { ...Te(0, i), content: Oe(r) };
      return Ye({
        title: e.title,
        pageSize: i,
        pages: [n]
      });
    }
    case F.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: a
      };
    case F.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const n = [...e.pages];
      return n[r] = {
        ...n[r],
        content: Oe(i)
      }, {
        ...e,
        pages: n,
        updatedAt: a
      };
    }
    case F.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Mt(r.pages || [], e.pageSize), n = Array.isArray(r.pageBreaks) ? r.pageBreaks : i.slice(0, -1).map((o, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: n,
        totalPages: i.length,
        updatedAt: a
      };
    }
    case F.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, Te(r, e.pageSize));
      const n = i.map((s, g) => ({
        ...s,
        index: g,
        size: e.pageSize
      })), o = n.slice(0, -1).map((s, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: n,
        activePage: r,
        pageBreaks: o,
        totalPages: n.length,
        updatedAt: a
      };
    }
    case F.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const n = i.map((g, m) => ({
        ...g,
        index: m,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= n.length ? o = n.length - 1 : r <= o && o > 0 && (o -= 1);
      const s = n.slice(0, -1).map((g, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: n,
        activePage: o,
        pageBreaks: s,
        totalPages: n.length,
        updatedAt: a
      };
    }
    case F.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= i ? e : {
        ...e,
        activePage: r,
        updatedAt: a
      };
    }
    case F.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Je(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((o, s) => ({
        ...o,
        index: s,
        size: r
      })), n = i.slice(0, -1).map((o, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: n,
        updatedAt: a
      };
    }
    case F.RESET_DOCUMENT:
      return Ye();
    case F.UPDATE_CONTINUOUS_CONTENT: {
      const r = Oe(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: a
      };
    }
    case F.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const i = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: i,
        updatedAt: a
      };
    }
    case F.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, n = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (r === "end")
        o = o + n + "<p><br></p>";
      else if (typeof r == "number") {
        const s = o.substring(0, r), g = o.substring(r);
        o = s + n + g;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = o;
        const g = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && g.length === 0)
          o = o + n + "<p><br></p>";
        else if (i < g.length) {
          const m = g[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", m.parentNode.insertBefore(h, m.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), o = s.innerHTML;
        } else
          o = o + n + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: a
      };
    }
    case F.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const n = i.querySelectorAll('page-break, [data-page-break="true"]');
      return n[r] && n[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, g) => {
        s.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: a
      };
    }
    case F.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, n = e.pages;
      return r === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== ye).join(`
`) || ye : e.continuousContent && e.continuousContent !== ye && (n = [{ ...Te(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: n,
        updatedAt: a
      };
    }
    case F.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < Fe || r > qe ? (console.warn(`Invalid zoom level: ${r}. Must be between ${Fe} and ${qe}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: a
      };
    }
    case F.ZOOM_IN: {
      if (!We(e.zoomLevel))
        return e;
      const r = e.zoomLevel + dt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: a
      };
    }
    case F.ZOOM_OUT: {
      if (!Ze(e.zoomLevel))
        return e;
      const r = e.zoomLevel - dt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: a
      };
    }
    case F.RESET_ZOOM:
      return e.zoomLevel === Ue ? e : {
        ...e,
        zoomLevel: Ue,
        updatedAt: a
      };
    case F.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: a
      };
    }
    default:
      return e;
  }
}, St = Jt(null), xo = ({ children: e, initialState: t = {} }) => {
  const [a, r] = er(gr, Ye(t)), i = Me(() => ({
    initializeDocument: (o) => r({ type: F.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => r({ type: F.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => r({ type: F.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => r({ type: F.UPDATE_PAGES, payload: o }),
    addPage: (o) => r({ type: F.ADD_PAGE, payload: o }),
    deletePage: (o) => r({ type: F.DELETE_PAGE, payload: o }),
    setActivePage: (o) => r({ type: F.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => r({ type: F.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => r({ type: F.RESET_DOCUMENT }),
    updateContinuousContent: (o) => r({ type: F.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => r({ type: F.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => r({ type: F.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => r({ type: F.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => r({ type: F.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => r({ type: F.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => r({ type: F.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => r({ type: F.DUPLICATE_PAGE, payload: o }),
    setZoomLevel: (o) => r({ type: F.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => r({ type: F.ZOOM_IN }),
    zoomOut: () => r({ type: F.ZOOM_OUT }),
    resetZoom: () => r({ type: F.RESET_ZOOM }),
    updatePageMargins: (o) => r({ type: F.UPDATE_PAGE_MARGINS, payload: o })
  }), []), n = Me(() => ({
    state: a,
    actions: i,
    dispatch: r
  }), [a, i]);
  return /* @__PURE__ */ l.jsx(St.Provider, { value: n, children: e });
}, Ct = () => {
  const e = Qt(St);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Nt = () => {
  const { state: e } = Ct();
  return e;
}, It = () => {
  const { actions: e } = Ct();
  return e;
};
var ke = { exports: {} }, Re = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function hr() {
  if (ft) return K;
  ft = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(u) {
    if (typeof u == "object" && u !== null) {
      var C = u.$$typeof;
      switch (C) {
        case t:
          switch (u = u.type, u) {
            case g:
            case m:
            case r:
            case n:
            case i:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case h:
                case y:
                case E:
                case o:
                  return u;
                default:
                  return C;
              }
          }
        case a:
          return C;
      }
    }
  }
  function T(u) {
    return R(u) === m;
  }
  return K.AsyncMode = g, K.ConcurrentMode = m, K.ContextConsumer = s, K.ContextProvider = o, K.Element = t, K.ForwardRef = h, K.Fragment = r, K.Lazy = y, K.Memo = E, K.Portal = a, K.Profiler = n, K.StrictMode = i, K.Suspense = d, K.isAsyncMode = function(u) {
    return T(u) || R(u) === g;
  }, K.isConcurrentMode = T, K.isContextConsumer = function(u) {
    return R(u) === s;
  }, K.isContextProvider = function(u) {
    return R(u) === o;
  }, K.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, K.isForwardRef = function(u) {
    return R(u) === h;
  }, K.isFragment = function(u) {
    return R(u) === r;
  }, K.isLazy = function(u) {
    return R(u) === y;
  }, K.isMemo = function(u) {
    return R(u) === E;
  }, K.isPortal = function(u) {
    return R(u) === a;
  }, K.isProfiler = function(u) {
    return R(u) === n;
  }, K.isStrictMode = function(u) {
    return R(u) === i;
  }, K.isSuspense = function(u) {
    return R(u) === d;
  }, K.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === m || u === n || u === i || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === E || u.$$typeof === o || u.$$typeof === s || u.$$typeof === h || u.$$typeof === A || u.$$typeof === j || u.$$typeof === k || u.$$typeof === b);
  }, K.typeOf = R, K;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function mr() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === m || O === n || O === i || O === d || O === f || typeof O == "object" && O !== null && (O.$$typeof === y || O.$$typeof === E || O.$$typeof === o || O.$$typeof === s || O.$$typeof === h || O.$$typeof === A || O.$$typeof === j || O.$$typeof === k || O.$$typeof === b);
    }
    function T(O) {
      if (typeof O == "object" && O !== null) {
        var se = O.$$typeof;
        switch (se) {
          case t:
            var pe = O.type;
            switch (pe) {
              case g:
              case m:
              case r:
              case n:
              case i:
              case d:
                return pe;
              default:
                var me = pe && pe.$$typeof;
                switch (me) {
                  case s:
                  case h:
                  case y:
                  case E:
                  case o:
                    return me;
                  default:
                    return se;
                }
            }
          case a:
            return se;
        }
      }
    }
    var u = g, C = m, L = s, p = o, w = t, I = h, H = r, V = y, J = E, W = a, z = n, Q = i, ne = d, Y = !1;
    function ee(O) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(O) || T(O) === g;
    }
    function x(O) {
      return T(O) === m;
    }
    function c(O) {
      return T(O) === s;
    }
    function P(O) {
      return T(O) === o;
    }
    function M(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function S(O) {
      return T(O) === h;
    }
    function G(O) {
      return T(O) === r;
    }
    function $(O) {
      return T(O) === y;
    }
    function N(O) {
      return T(O) === E;
    }
    function U(O) {
      return T(O) === a;
    }
    function Z(O) {
      return T(O) === n;
    }
    function q(O) {
      return T(O) === i;
    }
    function ae(O) {
      return T(O) === d;
    }
    X.AsyncMode = u, X.ConcurrentMode = C, X.ContextConsumer = L, X.ContextProvider = p, X.Element = w, X.ForwardRef = I, X.Fragment = H, X.Lazy = V, X.Memo = J, X.Portal = W, X.Profiler = z, X.StrictMode = Q, X.Suspense = ne, X.isAsyncMode = ee, X.isConcurrentMode = x, X.isContextConsumer = c, X.isContextProvider = P, X.isElement = M, X.isForwardRef = S, X.isFragment = G, X.isLazy = $, X.isMemo = N, X.isPortal = U, X.isProfiler = Z, X.isStrictMode = q, X.isSuspense = ae, X.isValidElementType = R, X.typeOf = T;
  })()), X;
}
var gt;
function jt() {
  return gt || (gt = 1, process.env.NODE_ENV === "production" ? Re.exports = hr() : Re.exports = mr()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, ht;
function yr() {
  if (ht) return Le;
  ht = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function r(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var g = Object.getOwnPropertyNames(o).map(function(h) {
        return o[h];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        m[h] = h;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = i() ? Object.assign : function(n, o) {
    for (var s, g = r(n), m, h = 1; h < arguments.length; h++) {
      s = Object(arguments[h]);
      for (var d in s)
        t.call(s, d) && (g[d] = s[d]);
      if (e) {
        m = e(s);
        for (var f = 0; f < m.length; f++)
          a.call(s, m[f]) && (g[m[f]] = s[m[f]]);
      }
    }
    return g;
  }, Le;
}
var De, mt;
function Qe() {
  if (mt) return De;
  mt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = e, De;
}
var ze, yt;
function Lt() {
  return yt || (yt = 1, ze = Function.call.bind(Object.prototype.hasOwnProperty)), ze;
}
var Be, bt;
function br() {
  if (bt) return Be;
  bt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qe(), a = {}, r = /* @__PURE__ */ Lt();
    e = function(n) {
      var o = "Warning: " + n;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(n, o, s, g, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in n)
        if (r(n, h)) {
          var d;
          try {
            if (typeof n[h] != "function") {
              var f = Error(
                (g || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = n[h](o, h, g, s, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (g || "React class") + ": type specification of " + s + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in a)) {
            a[d.message] = !0;
            var E = m ? m() : "";
            e(
              "Failed " + s + " type: " + d.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, Be = i, Be;
}
var He, xt;
function xr() {
  if (xt) return He;
  xt = 1;
  var e = jt(), t = yr(), a = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Lt(), i = /* @__PURE__ */ br(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(s) {
    var g = "Warning: " + s;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return He = function(s, g) {
    var m = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(x) {
      var c = x && (m && x[m] || x[h]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", E = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: k(),
      arrayOf: R,
      element: T(),
      elementType: u(),
      instanceOf: C,
      node: I(),
      objectOf: p,
      oneOf: L,
      oneOfType: w,
      shape: V,
      exact: J
    };
    function y(x, c) {
      return x === c ? x !== 0 || 1 / x === 1 / c : x !== x && c !== c;
    }
    function b(x, c) {
      this.message = x, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function A(x) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, P = 0;
      function M(G, $, N, U, Z, q, ae) {
        if (U = U || f, q = q || N, ae !== a) {
          if (g) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = U + ":" + N;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, P++);
          }
        }
        return $[N] == null ? G ? $[N] === null ? new b("The " + Z + " `" + q + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new b("The " + Z + " `" + q + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : x($, N, U, Z, q);
      }
      var S = M.bind(null, !1);
      return S.isRequired = M.bind(null, !0), S;
    }
    function j(x) {
      function c(P, M, S, G, $, N) {
        var U = P[M], Z = Q(U);
        if (Z !== x) {
          var q = ne(U);
          return new b(
            "Invalid " + G + " `" + $ + "` of type " + ("`" + q + "` supplied to `" + S + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return A(c);
    }
    function k() {
      return A(o);
    }
    function R(x) {
      function c(P, M, S, G, $) {
        if (typeof x != "function")
          return new b("Property `" + $ + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var N = P[M];
        if (!Array.isArray(N)) {
          var U = Q(N);
          return new b("Invalid " + G + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + S + "`, expected an array."));
        }
        for (var Z = 0; Z < N.length; Z++) {
          var q = x(N, Z, S, G, $ + "[" + Z + "]", a);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return A(c);
    }
    function T() {
      function x(c, P, M, S, G) {
        var $ = c[P];
        if (!s($)) {
          var N = Q($);
          return new b("Invalid " + S + " `" + G + "` of type " + ("`" + N + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(x);
    }
    function u() {
      function x(c, P, M, S, G) {
        var $ = c[P];
        if (!e.isValidElementType($)) {
          var N = Q($);
          return new b("Invalid " + S + " `" + G + "` of type " + ("`" + N + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(x);
    }
    function C(x) {
      function c(P, M, S, G, $) {
        if (!(P[M] instanceof x)) {
          var N = x.name || f, U = ee(P[M]);
          return new b("Invalid " + G + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + S + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return A(c);
    }
    function L(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), o;
      function c(P, M, S, G, $) {
        for (var N = P[M], U = 0; U < x.length; U++)
          if (y(N, x[U]))
            return null;
        var Z = JSON.stringify(x, function(ae, O) {
          var se = ne(O);
          return se === "symbol" ? String(O) : O;
        });
        return new b("Invalid " + G + " `" + $ + "` of value `" + String(N) + "` " + ("supplied to `" + S + "`, expected one of " + Z + "."));
      }
      return A(c);
    }
    function p(x) {
      function c(P, M, S, G, $) {
        if (typeof x != "function")
          return new b("Property `" + $ + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var N = P[M], U = Q(N);
        if (U !== "object")
          return new b("Invalid " + G + " `" + $ + "` of type " + ("`" + U + "` supplied to `" + S + "`, expected an object."));
        for (var Z in N)
          if (r(N, Z)) {
            var q = x(N, Z, S, G, $ + "." + Z, a);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return A(c);
    }
    function w(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var c = 0; c < x.length; c++) {
        var P = x[c];
        if (typeof P != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(P) + " at index " + c + "."
          ), o;
      }
      function M(S, G, $, N, U) {
        for (var Z = [], q = 0; q < x.length; q++) {
          var ae = x[q], O = ae(S, G, $, N, U, a);
          if (O == null)
            return null;
          O.data && r(O.data, "expectedType") && Z.push(O.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new b("Invalid " + N + " `" + U + "` supplied to " + ("`" + $ + "`" + se + "."));
      }
      return A(M);
    }
    function I() {
      function x(c, P, M, S, G) {
        return W(c[P]) ? null : new b("Invalid " + S + " `" + G + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return A(x);
    }
    function H(x, c, P, M, S) {
      return new b(
        (x || "React class") + ": " + c + " type `" + P + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function V(x) {
      function c(P, M, S, G, $) {
        var N = P[M], U = Q(N);
        if (U !== "object")
          return new b("Invalid " + G + " `" + $ + "` of type `" + U + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var Z in x) {
          var q = x[Z];
          if (typeof q != "function")
            return H(S, G, $, Z, ne(q));
          var ae = q(N, Z, S, G, $ + "." + Z, a);
          if (ae)
            return ae;
        }
        return null;
      }
      return A(c);
    }
    function J(x) {
      function c(P, M, S, G, $) {
        var N = P[M], U = Q(N);
        if (U !== "object")
          return new b("Invalid " + G + " `" + $ + "` of type `" + U + "` " + ("supplied to `" + S + "`, expected `object`."));
        var Z = t({}, P[M], x);
        for (var q in Z) {
          var ae = x[q];
          if (r(x, q) && typeof ae != "function")
            return H(S, G, $, q, ne(ae));
          if (!ae)
            return new b(
              "Invalid " + G + " `" + $ + "` key `" + q + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(P[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var O = ae(N, q, S, G, $ + "." + q, a);
          if (O)
            return O;
        }
        return null;
      }
      return A(c);
    }
    function W(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(W);
          if (x === null || s(x))
            return !0;
          var c = d(x);
          if (c) {
            var P = c.call(x), M;
            if (c !== x.entries) {
              for (; !(M = P.next()).done; )
                if (!W(M.value))
                  return !1;
            } else
              for (; !(M = P.next()).done; ) {
                var S = M.value;
                if (S && !W(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(x, c) {
      return x === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function Q(x) {
      var c = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : z(c, x) ? "symbol" : c;
    }
    function ne(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var c = Q(x);
      if (c === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function Y(x) {
      var c = ne(x);
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
    function ee(x) {
      return !x.constructor || !x.constructor.name ? f : x.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, He;
}
var $e, Et;
function Er() {
  if (Et) return $e;
  Et = 1;
  var e = /* @__PURE__ */ Qe();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, $e = function() {
    function r(o, s, g, m, h, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var n = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return n.PropTypes = n, n;
  }, $e;
}
var vt;
function vr() {
  if (vt) return ke.exports;
  if (vt = 1, process.env.NODE_ENV !== "production") {
    var e = jt(), t = !0;
    ke.exports = /* @__PURE__ */ xr()(e.isElement, t);
  } else
    ke.exports = /* @__PURE__ */ Er()();
  return ke.exports;
}
var Tr = /* @__PURE__ */ vr();
const v = /* @__PURE__ */ or(Tr), Dt = {
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
}, Ar = [
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
], et = "16px", Pr = (e) => Math.round(e * 96 / 72), _r = (e) => Math.round(e * 72 / 96 * 2) / 2, Eo = (e) => {
  const t = Object.values(Dt).find((a) => a.pt === e);
  return t ? `${t.px}px` : `${Pr(e)}px`;
}, vo = (e) => {
  const t = parseInt(e), a = Object.values(Dt).find((r) => r.px === t);
  return a ? a.pt : _r(t);
}, To = (e) => {
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
}, _ = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ao({
  handler: e,
  startX: t,
  startY: a,
  currentX: r,
  currentY: i,
  startWidth: n,
  startHeight: o,
  options: s = he
}) {
  const g = r - t, m = i - a;
  let h = n, d = o;
  switch (e) {
    case _.TOP_LEFT:
      h = Math.max(s.minWidth, n - g), d = Math.max(s.minHeight, o - m);
      break;
    case _.TOP_RIGHT:
      h = Math.max(s.minWidth, n + g), d = Math.max(s.minHeight, o - m);
      break;
    case _.BOTTOM_LEFT:
      h = Math.max(s.minWidth, n - g), d = Math.max(s.minHeight, o + m);
      break;
    case _.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, n + g), d = Math.max(s.minHeight, o + m);
      break;
    case _.TOP:
      d = Math.max(s.minHeight, o - m);
      break;
    case _.BOTTOM:
      d = Math.max(s.minHeight, o + m);
      break;
    case _.LEFT:
      h = Math.max(s.minWidth, n - g);
      break;
    case _.RIGHT:
      h = Math.max(s.minWidth, n + g);
      break;
    default:
      return { width: h, height: d };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = n / o;
    [
      _.TOP_LEFT,
      _.TOP_RIGHT,
      _.BOTTOM_LEFT,
      _.BOTTOM_RIGHT
    ].includes(e) ? h / f > d ? d = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, d * f) : [_.TOP, _.BOTTOM].includes(e) ? h = d * f : [_.LEFT, _.RIGHT].includes(e) && (d = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (d = h / (n / o))), s.maxHeight && d > s.maxHeight && (d = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = d * (n / o))), h = Math.max(s.minWidth, h), d = Math.max(s.minHeight, d), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function de(e) {
  return e ? (console.log("Checking if element is resizable image:", e, "tagName:", e.tagName), e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none" ? (console.log("Element is a DIV with background image, returning true"), !0) : (console.log("Element is not a resizable image, returning false"), !1)) : !1;
}
function Po(e) {
  return de(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function _o(e, { width: t, height: a }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
function zt(e, t = he) {
  if (!de(e)) return null;
  const a = document.createElement("div");
  a.className = "image-resize-overlay", a.style.position = "fixed", a.style.zIndex = "1000", a.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  a.style.top = `${r.top}px`, a.style.left = `${r.left}px`, a.style.width = `${r.width}px`, a.style.height = `${r.height}px`, Object.values(_).forEach((s) => {
    const g = document.createElement("div");
    g.className = `resize-handler resize-handler-${s}`, g.dataset.handler = s, g.style.position = "absolute", g.style.width = "10px", g.style.height = "10px", g.style.backgroundColor = "#007bff", g.style.border = "2px solid white", g.style.borderRadius = "50%", g.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", g.style.cursor = wr(s), g.style.pointerEvents = "all", Bt(g, s, r.width, r.height), a.appendChild(g);
  });
  const n = document.createElement("div");
  return n.className = "aspect-ratio-toggle", t.preserveAspectRatio && t.aspectRatio ? (n.innerHTML = "🔓", n.title = "Toggle aspect ratio preservation (currently ON)") : (n.innerHTML = "🔗", n.title = "Toggle aspect ratio preservation (currently OFF)"), n.style.position = "absolute", n.style.top = "-15px", n.style.right = "-15px", n.style.width = "20px", n.style.height = "20px", n.style.backgroundColor = "#007bff", n.style.color = "white", n.style.borderRadius = "50%", n.style.display = "flex", n.style.alignItems = "center", n.style.justifyContent = "center", n.style.fontSize = "12px", n.style.cursor = "pointer", n.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", n.style.pointerEvents = "all", a.appendChild(n), a;
}
function wr(e) {
  switch (e) {
    case _.TOP_LEFT:
    case _.BOTTOM_RIGHT:
      return "nwse-resize";
    case _.TOP_RIGHT:
    case _.BOTTOM_LEFT:
      return "nesw-resize";
    case _.TOP:
    case _.BOTTOM:
      return "ns-resize";
    case _.LEFT:
    case _.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Bt(e, t, a, r) {
  switch (t) {
    case _.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case _.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case _.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case _.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case _.TOP:
      e.style.top = "-5px", e.style.left = `${a / 2 + -5}px`;
      break;
    case _.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${a / 2 + -5}px`;
      break;
    case _.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case _.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ve(e, t) {
  if (!e || !t) return;
  const a = t.getBoundingClientRect();
  e.style.top = `${a.top}px`, e.style.left = `${a.left}px`, e.style.width = `${a.width}px`, e.style.height = `${a.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const n = i.dataset.handler;
    Bt(i, n, a.width, a.height);
  });
}
function be(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const kr = {
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
}, Tt = {
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
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: he,
  preserveAspectRatio: !0
}, Rr = () => {
  const [e, t] = fe(Tt), a = B((E) => {
    t((y) => ({
      ...y,
      alignLeft: E === "left",
      alignCenter: E === "center",
      alignRight: E === "right",
      alignJustify: E === "justify"
    }));
  }, []), r = B((E) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const b = y.getRangeAt(0);
      if (!b.toString())
        return t((j) => ({ ...j, fontSize: E })), !1;
      try {
        const j = document.createElement("span");
        j.style.fontSize = E;
        const k = b.extractContents();
        return j.appendChild(k), b.insertNode(j), b.selectNodeContents(j), y.removeAllRanges(), y.addRange(b), t((R) => ({ ...R, fontSize: E })), !0;
      } catch {
        const k = kr[E] || "2";
        return document.execCommand("fontSize", !1, k), t((R) => ({ ...R, fontSize: E })), !0;
      }
    } catch (y) {
      return console.warn("[useFormatting] Font size change failed:", y), !1;
    }
  }, []), i = B((E, y = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (E === "fontSize") {
        r(y);
        return;
      }
      switch (document.execCommand(E, !1, y) || console.warn(`[useFormatting] Command "${E}" failed`), E) {
        case "bold":
          t((A) => ({ ...A, bold: !A.bold }));
          break;
        case "italic":
          t((A) => ({ ...A, italic: !A.italic }));
          break;
        case "underline":
          t((A) => ({ ...A, underline: !A.underline }));
          break;
        case "strikethrough":
          t((A) => ({ ...A, strikethrough: !A.strikethrough }));
        case "justifyLeft":
          a("left");
          break;
        case "justifyCenter":
          a("center");
        case "justifyRight":
          a("right");
        case "justifyFull":
          a("justify");
        case "fontName":
          t((A) => ({ ...A, fontFamily: y }));
        case "formatBlock":
          t((A) => ({ ...A, headingLevel: y }));
        default:
          break;
      }
    } catch (b) {
      console.warn(`[useFormatting] Error executing command "${E}":`, b);
    }
  }, [r, a]), n = re(null), o = re(null), s = re(null), g = re(null), m = re(he);
  B((E) => {
    if (!de(E)) return;
    n.current && (be(n.current), n.current = null), E.classList.add("selected");
    const y = zt(E);
    y && (n.current = y, o.current = E, document.body.appendChild(y), t((b) => ({
      ...b,
      imageSelected: !0,
      preserveAspectRatio: m.current.preserveAspectRatio
    })));
  }, []);
  const h = B(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), n.current && (be(n.current), n.current = null), s.current = null, g.current = null, t((E) => ({
      ...E,
      imageSelected: !1
    }));
  }, []), d = B(() => {
    const E = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: E,
      aspectRatio: E
    }, t((y) => ({
      ...y,
      preserveAspectRatio: E
    }));
  }, []);
  B((E, y, b) => {
    o.current && (s.current = {
      x: y,
      y: b,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight
    }, g.current = E, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Or(E));
  }, []), B((E, y) => {
    if (!o.current || !s.current || !g.current) return;
    const { x: b, y: A, width: j, height: k } = s.current, R = g.current, T = Mr({
      handler: R,
      startX: b,
      startY: A,
      currentX: E,
      currentY: y,
      startWidth: j,
      startHeight: k,
      options: m.current
    });
    Sr(o.current, T), n.current && Ve(n.current, o.current);
  }, []), B(() => {
    if (s.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
      const E = new Event("input", { bubbles: !0, cancelable: !0 });
      o.current.dispatchEvent(E);
    }
  }, []);
  const f = B(() => {
    h(), t(Tt);
  }, [h]);
  return oe(() => () => {
    n.current && be(n.current);
  }, []), {
    currentFormat: e,
    formatText: i,
    resetFormat: f,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: d
  };
};
function Or(e) {
  switch (e) {
    case _.TOP_LEFT:
    case _.BOTTOM_RIGHT:
      return "nwse-resize";
    case _.TOP_RIGHT:
    case _.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case _.BOTTOM:
      return "ns-resize";
    case _.LEFT:
    case _.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Mr({
  handler: e,
  startX: t,
  startY: a,
  currentX: r,
  currentY: i,
  startWidth: n,
  startHeight: o,
  options: s = he
}) {
  const g = r - t, m = i - a;
  let h = n, d = o;
  switch (e) {
    case _.TOP_LEFT:
      h = Math.max(s.minWidth, n - g), d = Math.max(s.minHeight, o - m);
      break;
    case _.TOP_RIGHT:
      h = Math.max(s.minWidth, n + g), d = Math.max(s.minHeight, o - m);
      break;
    case _.BOTTOM_LEFT:
      h = Math.max(s.minWidth, n - g), d = Math.max(s.minHeight, o + m);
      break;
    case _.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, n + g), d = Math.max(s.minHeight, o + m);
      break;
    case _.TOP:
      d = Math.max(s.minHeight, o - m);
      break;
    case _.BOTTOM:
      d = Math.max(s.minHeight, o + m);
      break;
    case _.LEFT:
      h = Math.max(s.minWidth, n - g);
      break;
    case _.RIGHT:
      h = Math.max(s.minWidth, n + g);
      break;
    default:
      return { width: h, height: d };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = n / o;
    [
      _.TOP_LEFT,
      _.TOP_RIGHT,
      _.BOTTOM_LEFT,
      _.BOTTOM_RIGHT
    ].includes(e) ? h / f > d ? d = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, d * f) : [_.TOP, _.BOTTOM].includes(e) ? h = d * f : [_.LEFT, _.RIGHT].includes(e) && (d = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (d = h / (n / o))), s.maxHeight && d > s.maxHeight && (d = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = d * (n / o))), h = Math.max(s.minWidth, h), d = Math.max(s.minHeight, d), {
    width: Math.round(h),
    height: Math.round(d)
  };
}
function Sr(e, { width: t, height: a }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
const xe = 'page-break, [data-page-break="true"]', Ht = (e) => ce[e] || ce.A4, Cr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const a = t.pageSize || "A4", r = Ht(a), i = e.querySelectorAll(xe), n = [];
  n.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const o = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((g, m) => {
    const d = g.getBoundingClientRect().top - o.top + s;
    n.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: d,
      height: r.height
    });
  }), n;
}, $t = (e, t = 100, a = ge) => {
  const r = Ht(e), i = lr(a), n = r.height - i, o = t / 100;
  return n / o;
}, Nr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const a = t.querySelectorAll(xe);
    if (a.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), i = r.top + r.height / 2;
    for (let n = a.length - 1; n >= 0; n--)
      if (a[n].getBoundingClientRect().top < i)
        return n + 1;
    return 0;
  } catch (a) {
    return console.warn("[getCurrentPage] Failed to calculate page:", a), 0;
  }
}, At = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let a = [], r = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? r.length > 0 && (a.push(r), r = []) : r.push(i);
  return r.length > 0 && a.push(r), a.length === 0 && t.length > 0 && a.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), a;
}, Ir = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, jr = (e, t) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, Lr = (e, t, a, r, i, n, o) => {
  if (!e)
    return !1;
  try {
    const g = $t(a, r, i) * (t - 1), m = Array.from(e.children);
    let h = 0, d = null;
    for (let f = 0; f < m.length; f++) {
      const E = m[f];
      if (E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        continue;
      const y = Ir(E);
      if (h + y > g) {
        d = E;
        break;
      }
      h += y;
    }
    if (d) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(f, d), n) {
        const E = e.innerHTML;
        n(E);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const E = document.createElement("p");
      if (E.innerHTML = "<br>", e.appendChild(E), n) {
        const y = e.innerHTML;
        n(y);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, Dr = (e, t, a, r, i, n, o) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(xe));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let h = !1, d = [], f = null;
    if (t === 0) {
      const y = g[0];
      if (!y)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let b = e.firstChild;
      for (; b && b !== y; )
        d.push(b), b = b.nextSibling;
      f = y;
    } else {
      const y = g[t - 1];
      if (!y)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const b = g[t];
      let A = y.nextSibling;
      for (; A && A !== b; )
        d.push(A), A = A.nextSibling;
      f = y;
    }
    if (m && m.rangeCount > 0) {
      const b = m.getRangeAt(0).startContainer;
      for (const A of d)
        if (A.contains(b) || A === b) {
          h = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), d.forEach((y) => {
      y.parentNode && y.remove();
    }), e.querySelectorAll(xe).forEach((y, b) => {
      y.setAttribute("data-page-number", String(b + 2));
    }), h && n && setTimeout(() => {
      n(0);
    }, 50), r) {
      const y = e.innerHTML;
      r(y);
    }
    return i && setTimeout(() => {
      i(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, zr = 200, Br = 50, Pt = 3, Hr = 20, Gt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, $r = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let a = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    if (!n || !n.getBoundingClientRect)
      continue;
    const o = Gt(n);
    if (o < 1)
      continue;
    if (a + o > t)
      return r === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: n,
        accumulatedHeight: a
      } : null : {
        overflowIndex: i,
        overflowElement: n,
        accumulatedHeight: a
      };
    a += o, r = n;
  }
  return null;
}, Gr = (e, t, a, r, i, n, o, s) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const g = $t(t, a, r);
    let m = At(e), h = !1, d = 0;
    for (let f = 0; f < m.length && d < Pt; f++) {
      const E = m[f], y = $r(E, g);
      if (y && y.overflowIndex > 0) {
        let b = 0;
        for (let R = 0; R < E.length; R++) {
          const T = E[R];
          T && T.getBoundingClientRect && (b += Gt(T));
        }
        if (b - g < Hr)
          continue;
        const j = f + 2;
        jr(y.overflowElement, j) && (h = !0, d++, m = At(e));
      }
    }
    if (h) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        n && n(), d >= Pt && s && setTimeout(() => {
          o.current || s();
        }, 100);
      }, Br);
    }
    return h;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    o.current = !1;
  }
}, Ur = (e, t, a = zr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, a);
}, Fr = 400, Ut = (e, t) => {
  if (e) {
    e.focus();
    try {
      let a = null, r = 0;
      if (t === 0)
        a = e.firstChild, r = 0;
      else {
        const n = e.querySelectorAll(xe)[t - 1];
        n && n.nextSibling && (a = n.nextSibling, r = 0);
      }
      if (a) {
        const i = document.createRange(), n = window.getSelection();
        a.nodeType === Node.TEXT_NODE ? i.setStart(a, r) : i.setStart(a, 0), i.collapse(!0), n.removeAllRanges(), n.addRange(i);
      }
    } catch (a) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", a);
    }
  }
}, qr = (e, t, a, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (a === 0)
      i = t;
    else {
      const o = t.querySelectorAll(xe)[a - 1];
      if (o)
        i = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", a);
        return;
      }
    }
    if (i) {
      const n = i.getBoundingClientRect(), o = e.getBoundingClientRect(), s = e.scrollTop + (n.top - o.top);
      console.log("[scrollToPage] Scrolling to page", a, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(a) : Ut(t, a);
      }, Fr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Wr = (e, t, a = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(a);
  }, Math.max(0, r));
}, Zr = 300, Yr = (e, t, a = 100, r = "NARROW") => {
  const i = It(), n = re(null), o = re(null), s = re(e), g = re(a), m = re(r), h = re(!1);
  oe(() => {
    s.current = e;
  }, [e]), oe(() => {
    g.current = a;
  }, [a]), oe(() => {
    m.current = r;
  }, [r]), oe(() => () => {
    n.current && clearTimeout(n.current), o.current && clearTimeout(o.current);
  }, []);
  const d = B((u = {}) => t?.current ? Cr(t.current, u) : [], [t]), f = B((u = {}) => {
    const C = d(u);
    return i.updatePageBoundaries(C), C;
  }, [d, i]), E = B(async (u) => {
    if (!t?.current)
      return !1;
    const C = s.current || "A4", L = g.current || 100, p = m.current || "NARROW";
    return Lr(
      t.current,
      u,
      C,
      L,
      p,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), y = B(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", C = g.current || 100, L = m.current || "NARROW";
    Gr(
      t.current,
      u,
      C,
      L,
      i.updateContinuousContent,
      f,
      h,
      y
    );
  }, [t, i, f]), b = B((u) => {
    Ur(y, o, u);
  }, [y]), A = B((u = {}) => {
    const C = typeof u.delay == "number" ? u.delay : Zr;
    Wr(f, n, u, C);
  }, [f]), j = B((u) => !u?.current || !t?.current ? 0 : Nr(u.current, t.current), [t]), k = B((u) => {
    t?.current && Ut(t.current, u);
  }, [t]), R = B((u, C) => {
    if (!C?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    qr(C.current, t.current, u, k);
  }, [t, k]), T = B((u) => t?.current ? Dr(
    t.current,
    u,
    d,
    i.updateContinuousContent,
    f,
    k,
    y
  ) : !1, [t, d, i, f, k, y]);
  return {
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: A,
    updateBoundaries: f,
    getCurrentPage: j,
    scrollToPage: R,
    positionCursorAtPage: k,
    checkAndReflow: y,
    triggerAutoReflow: b,
    removePageAndContent: T,
    insertPageBreakAtBoundary: E,
    boundaryTimeoutRef: n,
    reflowTimeoutRef: o
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), _t = (e) => {
  const t = Kr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ft = (...e) => e.filter((t, a, r) => !!t && t.trim() !== "" && r.indexOf(t) === a).join(" ").trim(), Xr = (e) => {
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
var Jr = {
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
const Qr = Ke(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: n,
    iconNode: o,
    ...s
  }, g) => Ge(
    "svg",
    {
      ref: g,
      ...Jr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(a) * 24 / Number(t) : a,
      className: Ft("lucide", i),
      ...!n && !Xr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...o.map(([m, h]) => Ge(m, h)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = (e, t) => {
  const a = Ke(
    ({ className: r, ...i }, n) => Ge(Qr, {
      ref: n,
      iconNode: t,
      className: Ft(
        `lucide-${Vr(_t(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return a.displayName = _t(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], tn = te("bold", en);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], nn = te("chevron-left", rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], an = te("chevron-right", on);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], cn = te("file-check", sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ce = te("file-text", ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], dn = te("hash", un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], pn = te("heading-1", fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], hn = te("heading-2", gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], yn = te("heading-3", mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], xn = te("image", bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], vn = te("italic", En);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], An = te("link", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], _n = te("list-ordered", Pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], qt = te("list", wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Rn = te("plus", kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Mn = te("redo", On);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Cn = te("settings", Sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], In = te("strikethrough", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ln = te("table", jn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], zn = te("text-align-center", Dn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Hn = te("text-align-end", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Gn = te("text-align-justify", $n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Fn = te("text-align-start", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Wn = te("underline", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Yn = te("undo", Zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Kn = te("x", Vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Jn = te("zoom-in", Xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], eo = te("zoom-out", Qn), to = ({ editorView: e, isCollapsed: t, onToggle: a, wordCount: r, pageCount: i }) => {
  const n = Nt(), { pages: o, activePage: s, continuousContent: g, editorMode: m } = n, [h, d] = fe(0), [f, E] = fe([]);
  oe(() => {
    if (r !== void 0 && i !== void 0) {
      if (d(r), g) {
        const j = document.createElement("div");
        j.innerHTML = g;
        const k = j.querySelectorAll("h1, h2, h3, h4, h5, h6"), R = Array.from(k).map((T, u) => {
          const C = parseInt(T.tagName.charAt(1)), L = T.textContent.trim();
          return L ? {
            id: `heading-${u}`,
            level: C,
            text: L,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        E(R);
      }
      return;
    }
    let b = 0;
    const A = [];
    o.forEach((j, k) => {
      if (j.content) {
        const R = document.createElement("div");
        R.innerHTML = j.content;
        const u = (R.textContent || R.innerText || "").trim().split(/\s+/).filter((L) => L.length > 0);
        b += u.length, R.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((L, p) => {
          const w = parseInt(L.tagName.charAt(1)), I = L.textContent.trim();
          I && A.push({
            id: `heading-${k}-${p}`,
            level: w,
            text: I,
            page: k + 1
          });
        });
      }
    }), d(b), E(A);
  }, [o, r, i, g]);
  const y = i !== void 0 ? i : o.length;
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
            /* @__PURE__ */ l.jsx(Ce, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(an, { size: 16 }) : /* @__PURE__ */ l.jsx(nn, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(cn, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: y })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(dn, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(qt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((b) => {
              const A = b.level === 1 ? pn : b.level === 2 ? hn : yn;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${b.level}`,
                  style: { marginLeft: `${(b.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(A, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: b.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      b.page
                    ] })
                  ]
                },
                b.id
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
}, ro = "html-editor-storage", no = 1, le = "images";
function oo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Pe() {
  return new Promise((e, t) => {
    const a = indexedDB.open(ro, no);
    a.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, a.onsuccess = () => {
      e(a.result);
    }, a.onupgradeneeded = (r) => {
      const i = r.target.result;
      i.objectStoreNames.contains(le) || i.createObjectStore(le, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function ao(e) {
  return new Promise((t, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (n) => {
      const o = n.target.result, g = o.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Pe(), h = `editor-image-${oo()}`, f = m.transaction([le], "readwrite").objectStore(le), E = {
          key: h,
          dataUrl: o,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, y = f.add(E);
        y.onsuccess = () => {
          m.close(), t(h);
        }, y.onerror = () => {
          m.close(), a(new Error("Failed to save image to IndexedDB"));
        };
      } catch (m) {
        a(m);
      }
    }, i.onerror = () => {
      a(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function io(e) {
  try {
    const t = await Pe();
    return new Promise((a, r) => {
      const o = t.transaction([le], "readonly").objectStore(le).get(e);
      o.onsuccess = () => {
        t.close();
        const s = o.result;
        a(s ? s.dataUrl : null);
      }, o.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function wo(e) {
  try {
    const t = await Pe();
    return new Promise((a, r) => {
      const o = t.transaction([le], "readwrite").objectStore(le).delete(e);
      o.onsuccess = () => {
        t.close(), a();
      }, o.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function ko() {
  try {
    const e = await Pe();
    return new Promise((t, a) => {
      const n = e.transaction([le], "readwrite").objectStore(le).clear();
      n.onsuccess = () => {
        e.close(), t();
      }, n.onerror = () => {
        e.close(), a(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function Ro() {
  try {
    const e = await Pe();
    return new Promise((t, a) => {
      const n = e.transaction([le], "readonly").objectStore(le).getAllKeys();
      n.onsuccess = () => {
        e.close(), t(n.result || []);
      }, n.onerror = () => {
        e.close(), a(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
class so {
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
  _format(t, a, r) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${a}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, a) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, a) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, a) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, a) {
  }
}
const wt = new so("Editor"), tt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: a
}) => {
  const r = async (i) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(i.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (i.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const o = await ao(i), s = await io(o);
      s && (document.execCommand("insertImage", !1, s), wt.info("Image inserted", { key: o }));
    } catch (n) {
      wt.error("Error uploading image", n);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ l.jsx(Yn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ l.jsx(Mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(tn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(vn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(Wn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(In, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(Fn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(zn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(Hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Gn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (i) => t("fontName", i.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (i) => t("fontSize", i.target.value),
        defaultValue: et,
        title: "Font Size",
        children: Ar.map(({ value: i, label: n, pt: o }) => /* @__PURE__ */ l.jsx("option", { value: i, children: n }, i))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (i) => t("formatBlock", i.target.value),
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
        children: /* @__PURE__ */ l.jsx(qt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(_n, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && t("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(An, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Ln, { size: 16 })
      }
    ),
    a && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: a,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Ce, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (i) => i.target.files[0] && r(i.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(xn, { size: 16 })
      }
    )
  ] });
};
tt.propTypes = {
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
    headingLevel: v.string
  }).isRequired,
  onFormatText: v.func.isRequired,
  onAddPageBreak: v.func
};
tt.defaultProps = {
  onAddPageBreak: void 0
};
const rt = ({
  content: e,
  dimensions: t,
  pageSize: a,
  pageBoundaries: r = [],
  editorRef: i,
  onInput: n,
  onKeyDown: o,
  onClick: s,
  onScroll: g,
  zoomLevel: m = 100,
  pageMargins: h = ge
}) => {
  const d = Rt(h), f = m / 100, E = (k, R) => {
    if (!k) return !1;
    const T = k.getBoundingClientRect(), u = R - T.top;
    return u < d.top || u > T.height - d.bottom;
  }, y = (k) => k ? k.nodeType === Node.ELEMENT_NODE ? k.tagName === "PAGE-BREAK" || k.getAttribute("data-page-break") === "true" : k.parentElement && y(k.parentElement) : !1, b = (k) => {
    const R = window.getSelection();
    if (!R || R.rangeCount === 0) return;
    const T = R.getRangeAt(0), { startContainer: u, endContainer: C } = T;
    if ((y(u) || y(C)) && (k.key.length === 1 || k.key === "Enter" || k.key === " "))
      return k.preventDefault(), !1;
    if (k.key === "Tab")
      return k.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((k.key === "Backspace" || k.key === "Delete") && (y(u) || y(C)))
      return k.preventDefault(), !1;
    o && o(k);
  }, A = (k) => {
    if (!i.current) return;
    const R = k.target;
    if (y(R)) {
      k.preventDefault();
      return;
    }
    if (E(i.current, k.clientY)) {
      k.preventDefault();
      const T = i.current.getBoundingClientRect();
      if (k.clientY - T.top < d.top) {
        const C = i.current.firstElementChild;
        if (C && C.tagName !== "PAGE-BREAK") {
          const L = document.createRange(), p = window.getSelection();
          L.setStart(C, 0), L.collapse(!0), p.removeAllRanges(), p.addRange(L);
        }
      } else {
        const C = i.current.lastElementChild;
        if (C && C.tagName !== "PAGE-BREAK") {
          const L = document.createRange(), p = window.getSelection();
          L.selectNodeContents(C), L.collapse(!1), p.removeAllRanges(), p.addRange(L);
        }
      }
      return;
    }
    s && s(k);
  }, j = (k) => {
    const R = window.getSelection();
    if (!R || R.rangeCount === 0) return;
    const T = R.getRangeAt(0), { startContainer: u } = T;
    if (y(u))
      return k.preventDefault(), !1;
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
        transform: `scale(${f})`,
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
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: et,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: n,
          onKeyDown: b,
          onBeforeInput: j,
          onClick: A,
          onScroll: g,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
rt.propTypes = {
  content: v.string.isRequired,
  dimensions: v.shape({
    width: v.number.isRequired,
    height: v.number.isRequired
  }).isRequired,
  pageSize: v.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: v.arrayOf(
    v.shape({
      id: v.string.isRequired,
      pageNumber: v.number.isRequired,
      top: v.number,
      height: v.number
    })
  ),
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: v.func.isRequired,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  zoomLevel: v.number,
  pageMargins: v.string
};
rt.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const nt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: a = "A4",
  pageMargins: r = ge,
  zoomLevel: i = 100,
  canZoomIn: n = !0,
  canZoomOut: o = !0,
  onNavigate: s,
  onAddPage: g,
  onDeletePage: m,
  onPageSizeChange: h,
  onPageMarginsChange: d,
  onZoomIn: f,
  onZoomOut: E,
  onZoomReset: y
} = {}) => {
  const b = Math.max(e?.length || 0, 1), A = (u) => {
    s && s(u);
  }, j = () => {
    g && g();
  }, k = (u) => {
    if (b <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, R = (u) => {
    h && h(u);
  }, T = (u) => {
    d && d(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(Cn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: a,
              onChange: (u) => R(u.target.value),
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
              onChange: (u) => T(u.target.value),
              children: ur().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: dr(u) }, u))
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
          onClick: E,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(eo, { size: 12 })
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
          disabled: !n,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Jn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: y,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, C) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${C === t ? "active" : ""}`,
          onClick: () => A(C),
          "aria-label": `Go to page ${C + 1}`,
          "aria-current": C === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              C + 1
            ] })
          ]
        }
      ),
      b > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (L) => {
            L.stopPropagation(), k(C);
          },
          "aria-label": `Delete page ${C + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(Kn, { size: 14 })
        }
      )
    ] }, u.id || `page-${C}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: j,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Rn, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
nt.propTypes = {
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
nt.defaultProps = {
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
const co = Ne.memo(nt), ot = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: a,
  onImageDeselect: r,
  resizeOptions: i = he
}) => {
  const n = re(null), o = re(null), s = re(null), g = re(null), m = re(i), h = re(!1);
  oe(() => {
    m.current = i;
  }, [i]);
  const d = B((p) => {
    if (!de(p)) return;
    n.current && (be(n.current), n.current = null), p.classList.add("selected");
    const w = zt(p, m.current);
    if (w) {
      n.current = w, o.current = p, document.body.appendChild(w), w.querySelectorAll(".resize-handler").forEach((V) => {
        V.addEventListener("mousedown", b);
      });
      const H = w.querySelector(".aspect-ratio-toggle");
      H && H.addEventListener("click", E), a && (console.log("Image selected, calling onImageSelect callback"), a(p));
    }
  }, [a]), f = B(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), n.current && (be(n.current), n.current = null), s.current = null, g.current = null, h.current = !1, r && r();
  }, [r]), E = B((p) => {
    p.preventDefault(), p.stopPropagation();
    const w = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: w,
      aspectRatio: w
    };
    const I = p.currentTarget;
    w ? (I.innerHTML = "🔓", I.title = "Toggle aspect ratio preservation (currently ON)", I.classList.remove("locked")) : (I.innerHTML = "🔗", I.title = "Toggle aspect ratio preservation (currently OFF)", I.classList.add("locked"));
  }, []), y = B((p, w) => {
    p && (w ? (p.innerHTML = "🔓", p.title = "Toggle aspect ratio preservation (currently ON)", p.classList.remove("locked")) : (p.innerHTML = "🔗", p.title = "Toggle aspect ratio preservation (currently OFF)", p.classList.add("locked")));
  }, []), b = B((p) => {
    if (p.preventDefault(), p.stopPropagation(), !o.current) return;
    const w = p.currentTarget.dataset.handler, I = o.current.getBoundingClientRect(), H = window.pageYOffset || document.documentElement.scrollTop, V = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: p.clientX,
      y: p.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      offsetX: p.clientX - I.left - V,
      offsetY: p.clientY - I.top - H
    }, g.current = w, h.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = u(w), document.addEventListener("mousemove", A), document.addEventListener("mouseup", j);
  }, []), A = B((p) => {
    if (!h.current || !o.current || !s.current || !g.current) return;
    p.preventDefault(), p.stopPropagation();
    const { x: w, y: I, width: H, height: V } = s.current, J = g.current, W = p.clientX, z = p.clientY, Q = C({
      handler: J,
      startX: w,
      startY: I,
      currentX: W,
      currentY: z,
      startWidth: H,
      startHeight: V,
      options: m.current
    });
    L(o.current, Q), n.current && Ve(n.current, o.current);
  }, []), j = B((p) => {
    if (h.current && (p.preventDefault(), p.stopPropagation(), s.current = null, g.current = null, h.current = !1, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", j), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current)) {
      const w = new Event("input", { bubbles: !0, cancelable: !0 });
      o.current.dispatchEvent(w), t && t(o.current, {
        width: o.current.offsetWidth,
        height: o.current.offsetHeight
      });
    }
  }, [t]), k = B((p) => {
    console.log("handleEditorClick called with target:", p.target), n.current && !n.current.contains(p.target) && (console.log("Clicking outside image, clearing selection"), f());
    const w = p.target;
    if (de(w)) {
      if (console.log("Clicked on a resizable image"), w === o.current) {
        console.log("Image already selected, not reselecting");
        return;
      }
      console.log("Selecting new image"), d(w);
    } else
      console.log("Clicked on non-image element");
  }, [d, f]), R = B((p) => {
    if ((p.key === "Delete" || p.key === "Backspace") && o.current && !h.current) {
      p.preventDefault();
      const w = o.current;
      if (w.parentNode) {
        w.parentNode.removeChild(w), f();
        const I = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(I);
      }
    }
    if (p.key === "Escape" && o.current && f(), o.current && !h.current) {
      if ((p.ctrlKey || p.metaKey) && p.shiftKey && p.key === ">") {
        p.preventDefault();
        const w = o.current.offsetWidth, I = Math.min(m.current.maxWidth || 800, w + 10);
        L(o.current, { width: I, height: o.current.offsetHeight });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((p.ctrlKey || p.metaKey) && p.shiftKey && p.key === "<") {
        p.preventDefault();
        const w = o.current.offsetWidth, I = Math.max(m.current.minWidth || 50, w - 10);
        L(o.current, { width: I, height: o.current.offsetHeight });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((p.ctrlKey || p.metaKey) && p.shiftKey && p.key === "+") {
        p.preventDefault();
        const w = o.current.offsetHeight, I = Math.min(m.current.maxHeight || 600, w + 10);
        L(o.current, { width: o.current.offsetWidth, height: I });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((p.ctrlKey || p.metaKey) && p.shiftKey && p.key === "-") {
        p.preventDefault();
        const w = o.current.offsetHeight, I = Math.max(m.current.minHeight || 50, w - 10);
        L(o.current, { width: o.current.offsetWidth, height: I });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((p.ctrlKey || p.metaKey) && p.key === "r") {
        p.preventDefault(), L(o.current, { width: 300, height: 200 });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((p.ctrlKey || p.metaKey) && p.altKey && p.key === "l") {
        p.preventDefault();
        const w = !m.current.preserveAspectRatio;
        if (m.current = {
          ...m.current,
          preserveAspectRatio: w,
          aspectRatio: w
        }, n.current) {
          const I = n.current.querySelector(".aspect-ratio-toggle");
          I && y(I, w);
        }
      }
    }
  }, [e, f]), T = B(() => {
    n.current && o.current && Ve(n.current, o.current);
  }, []);
  oe(() => {
    if (!e.current) return;
    const w = e.current.closest(".editor-viewport");
    return w && (w.addEventListener("scroll", T), window.addEventListener("scroll", T)), () => {
      w && w.removeEventListener("scroll", T), window.removeEventListener("scroll", T);
    };
  }, [e, T]), oe(() => {
    if (!e.current) return;
    const p = e.current;
    p.addEventListener("click", k), p.addEventListener("keydown", R);
    const w = p.closest(".editor-viewport");
    return w && w.addEventListener("scroll", T), window.addEventListener("resize", T), () => {
      p.removeEventListener("click", k), p.removeEventListener("keydown", R), w && w.removeEventListener("scroll", T), window.removeEventListener("resize", T), h.current && (document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", j), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), n.current && be(n.current);
    };
  }, [e, k, R, T, A, j]), oe(() => {
    if (!e.current) return;
    const p = new MutationObserver((w) => {
      w.forEach((I) => {
        I.type === "childList" && (I.removedNodes.length > 0 && I.removedNodes.forEach((H) => {
          H.nodeType === Node.ELEMENT_NODE && de(H) && H === o.current && f();
        }), I.addedNodes.length > 0 && I.addedNodes.forEach((H) => {
          if (H.nodeType === Node.ELEMENT_NODE)
            if (de(H))
              setTimeout(() => {
                d(H);
              }, 50);
            else {
              const V = H.querySelectorAll ? H.querySelectorAll("img") : [];
              V.length > 0 && setTimeout(() => {
                d(V[0]);
              }, 50);
            }
        }));
      });
    });
    return p.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      p.disconnect();
    };
  }, [e, f, d]);
  function u(p) {
    switch (p) {
      case _.TOP_LEFT:
      case _.BOTTOM_RIGHT:
        return "nwse-resize";
      case _.TOP_RIGHT:
      case _.BOTTOM_LEFT:
        return "nesw-resize";
      case _.TOP:
      case _.BOTTOM:
        return "ns-resize";
      case _.LEFT:
      case _.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function C({
    handler: p,
    startX: w,
    startY: I,
    currentX: H,
    currentY: V,
    startWidth: J,
    startHeight: W,
    options: z = he
  }) {
    const Q = H - w, ne = V - I;
    let Y = J, ee = W;
    switch (p) {
      case _.TOP_LEFT:
        Y = Math.max(z.minWidth, J - Q), ee = Math.max(z.minHeight, W - ne);
        break;
      case _.TOP_RIGHT:
        Y = Math.max(z.minWidth, J + Q), ee = Math.max(z.minHeight, W - ne);
        break;
      case _.BOTTOM_LEFT:
        Y = Math.max(z.minWidth, J - Q), ee = Math.max(z.minHeight, W + ne);
        break;
      case _.BOTTOM_RIGHT:
        Y = Math.max(z.minWidth, J + Q), ee = Math.max(z.minHeight, W + ne);
        break;
      case _.TOP:
        ee = Math.max(z.minHeight, W - ne);
        break;
      case _.BOTTOM:
        ee = Math.max(z.minHeight, W + ne);
        break;
      case _.LEFT:
        Y = Math.max(z.minWidth, J - Q);
        break;
      case _.RIGHT:
        Y = Math.max(z.minWidth, J + Q);
        break;
      default:
        return { width: Y, height: ee };
    }
    if (z.preserveAspectRatio && z.aspectRatio) {
      const x = J / W;
      [
        _.TOP_LEFT,
        _.TOP_RIGHT,
        _.BOTTOM_LEFT,
        _.BOTTOM_RIGHT
      ].includes(p) ? Y / x > ee ? ee = Math.max(z.minHeight, Y / x) : Y = Math.max(z.minWidth, ee * x) : [_.TOP, _.BOTTOM].includes(p) ? Y = ee * x : [_.LEFT, _.RIGHT].includes(p) && (ee = Y / x);
    }
    return z.maxWidth && Y > z.maxWidth && (Y = z.maxWidth, z.preserveAspectRatio && z.aspectRatio && (ee = Y / (J / W))), z.maxHeight && ee > z.maxHeight && (ee = z.maxHeight, z.preserveAspectRatio && z.aspectRatio && (Y = ee * (J / W))), Y = Math.max(z.minWidth, Y), ee = Math.max(z.minHeight, ee), {
      width: Math.round(Y),
      height: Math.round(ee)
    };
  }
  function L(p, { width: w, height: I }) {
    de(p) && (p.tagName === "IMG" ? (p.style.width = `${w}px`, p.style.height = `${I}px`, p.width = w, p.height = I) : p.tagName === "DIV" && (p.style.width = `${w}px`, p.style.height = `${I}px`));
  }
  return null;
};
ot.propTypes = {
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
ot.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: he
};
const at = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: a,
  onDelete: r,
  onClose: i
}) => {
  const [n, o] = fe({ top: 0, left: 0 }), [s, g] = fe(!1), [m, h] = fe("top"), d = re(null), f = re(null), E = () => {
    if (!e) return "left";
    const T = window.getComputedStyle(e);
    return T.float || T.display === "block" ? "left" : T.display === "flex" && T.justifyContent === "center" ? "center" : T.float === "right" ? "right" : "left";
  }, [y, b] = fe(E());
  oe(() => (console.log("ImageTooltipMenu mounted with imageElement:", e), () => {
    console.log("ImageTooltipMenu unmounted");
  }), [e]), oe(() => {
    if (e) {
      let T = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      T && (f.current = T);
    }
  }, [e]), tr(() => {
    if (!e || !d.current) return;
    const T = () => {
      const C = e.getBoundingClientRect(), L = d.current.getBoundingClientRect();
      f.current;
      const p = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, w = C.bottom >= 0 && C.top <= p.height && C.right >= 0 && C.left <= p.width;
      let I = "top", H = 0, V = 0;
      if (w) {
        const ne = C.top - L.height - 10, Y = p.height - C.bottom - L.height - 10;
        Y > ne && Y > 0 ? (I = "bottom", H = C.bottom + 10) : (I = "top", H = C.top - L.height - 10);
      } else
        I = "top", H = 10;
      V = C.left + C.width / 2 - L.width / 2;
      const J = window.innerWidth, W = window.innerHeight;
      let z = V, Q = H;
      V < 10 ? z = 10 : V + L.width > J - 10 && (z = J - L.width - 10), H < 10 ? Q = 10 : H + L.height > W - 10 && (Q = W - L.height - 10), o({
        top: Q,
        left: z
      }), h(I), g(!0);
    };
    T();
    const u = () => {
      T();
    };
    return f.current && f.current.addEventListener("scroll", u), window.addEventListener("scroll", u), window.addEventListener("resize", u), () => {
      f.current && f.current.removeEventListener("scroll", u), window.removeEventListener("scroll", u), window.removeEventListener("resize", u), g(!1);
    };
  }, [e]), oe(() => {
    const T = (u) => {
      d.current && !d.current.contains(u.target) && u.target !== e && i();
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [e, i]);
  const A = () => {
    e && (e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", b("left"), t && t("left"));
  }, j = () => {
    e && (e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", b("center"), t && t("center"));
  }, k = () => {
    e && (e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", b("right"), t && t("right"));
  }, R = () => {
    e && e.parentNode && (e.parentNode.removeChild(e), r && r(), i());
  };
  return !e || (console.log("Rendering ImageTooltipMenu with position:", n, "isVisible:", s), typeof document > "u") ? null : nr(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: d,
        className: "image-tooltip-menu",
        "data-menu-position": m,
        "aria-hidden": !s,
        style: {
          position: "fixed",
          top: `${n.top}px`,
          left: `${n.left}px`,
          zIndex: 10001,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "4px",
          alignItems: "center",
          pointerEvents: s ? "auto" : "none",
          minWidth: "100px",
          minHeight: "30px",
          opacity: s ? 1 : 0,
          visibility: s ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: A,
              title: "Align Left",
              style: {
                background: y === "left" ? "#007bff" : "transparent",
                color: y === "left" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: "⬅️"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: j,
              title: "Align Center",
              style: {
                background: y === "center" ? "#007bff" : "transparent",
                color: y === "center" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: "↔️"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: k,
              title: "Align Right",
              style: {
                background: y === "right" ? "#007bff" : "transparent",
                color: y === "right" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: "➡️"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button aspect-ratio-toggle",
              onClick: a,
              title: "Toggle Aspect Ratio",
              style: {
                background: "transparent",
                color: "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: "🔗"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: R,
              title: "Delete Image",
              style: {
                background: "transparent",
                color: "#dc3545",
                border: "1px solid #dc3545",
                borderRadius: "4px",
                padding: "6px 8px",
                cursor: "pointer",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: "🗑️"
            }
          )
        ]
      }
    ),
    document.body
  );
};
at.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired
};
at.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0
};
const lo = 50, uo = 50, kt = 50, fo = 100, po = 500, it = Ke(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: a,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: n,
  onChange: o,
  showSidebar: s = !0,
  showToolbar: g = !0,
  showPageManager: m = !0
}, h) => {
  const d = Nt(), f = It(), { pageSize: E, pageMargins: y, continuousContent: b, pageBoundaries: A, activePage: j, zoomLevel: k } = d, R = re(null), T = re(null), { currentFormat: u, formatText: C } = Rr(), [L, p] = fe(!1), [w, I] = fe(null), {
    checkAndUpdateBoundaries: H,
    getCurrentPage: V,
    scrollToPage: J,
    updateBoundaries: W,
    triggerAutoReflow: z,
    removePageAndContent: Q,
    insertPageBreakAtBoundary: ne
  } = Yr(E, T, k, y), Y = Me(() => Je(E), [E]), [ee, x] = fe(!1), c = re(null), P = re(!1), M = re(!1), S = re(!1), G = re(b);
  oe(() => {
    if (T.current) {
      if (!S.current) {
        T.current.innerHTML = b, S.current = !0, G.current = b;
        const D = setTimeout(() => {
          W();
        }, lo);
        return () => clearTimeout(D);
      }
      if (G.current !== b) {
        if (T.current.innerHTML !== b) {
          T.current.innerHTML = b;
          const ie = setTimeout(() => {
            if (W(), P.current) {
              P.current = !1;
              const ue = Math.max(0, A.length - 1);
              f.setActivePage(ue), setTimeout(() => {
                J(ue, R);
              }, kt);
            }
          }, uo);
          return G.current = b, () => clearTimeout(ie);
        }
        G.current = b;
      }
    }
  }, [b, W, A.length, f, J]), oe(() => {
    o && S.current && o(b);
  }, [b, o]), rr(h, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => b,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => b.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      f.updateContinuousContent(D), T.current && (T.current.innerHTML = D, setTimeout(() => {
        W();
      }, 50));
    }
  }), [b, f, W]), oe(() => {
    const D = setTimeout(() => {
      T.current && T.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const $ = B((D) => {
    const ie = D.currentTarget.innerHTML;
    f.updateContinuousContent(ie), H(), z(200);
    const ue = V(R);
    ue !== j && f.setActivePage(ue);
  }, [H, f, V, j, z, R]), N = B((D) => {
    f.updatePageSize(D), W({ pageSize: D }), i && i(D);
  }, [f, W, i]), U = B((D) => {
    f.updatePageMargins(D), W({ pageMargins: D }), n && n(D);
  }, [f, W, n]), Z = B((D) => {
    D < 0 || D >= A.length || (M.current = !0, f.setActivePage(D), J(D, R), setTimeout(() => {
      M.current = !1;
    }, po), t && t(D));
  }, [f, J, t, A.length]), q = B(() => {
    const D = A.length + 1;
    ne(D) && (P.current = !0, setTimeout(() => {
      if (P.current) {
        P.current = !1;
        const ue = Math.max(0, A.length - 1);
        f.setActivePage(ue), setTimeout(() => {
          J(ue, R);
        }, kt);
      }
    }, 100)), a && a();
  }, [A.length, ne, f, J, a]), ae = B(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!T?.current) return;
      const Ie = `<page-break data-page-break="true" contenteditable="false" data-page-number="${T.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Ie), setTimeout(() => {
        W();
        const je = V(R);
        f.setActivePage(je);
      }, 150);
    }
  }, [W, V, f, R]), O = B((D) => {
    if (A.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Q(D) && (f.setActivePage(0), r && r(D));
  }, [A.length, Q, f, r]), se = B(() => {
    f.zoomIn();
  }, [f]), pe = B(() => {
    f.zoomOut();
  }, [f]), me = B(() => {
    f.resetZoom();
  }, [f]);
  oe(() => {
    const D = (ie) => {
      if (ie.ctrlKey || ie.metaKey) {
        ["+", "=", "-", "_", "0"].includes(ie.key) && ie.preventDefault();
        const ue = document.activeElement === T.current, Ie = document.activeElement === R.current, je = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ue || Ie || !je)
          switch (ie.key) {
            case "+":
            case "=":
              se();
              break;
            case "-":
            case "_":
              pe();
              break;
            case "0":
              me();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [se, pe, me]);
  const Zt = B(() => {
    !R.current || !T.current || M.current || (c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      if (M.current) {
        c.current = null;
        return;
      }
      const D = V(R);
      D !== j && D >= 0 && f.setActivePage(D), c.current = null;
    }, fo));
  }, [V, j, f]), Yt = Me(() => {
    if (!b) return 0;
    const ie = b.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return ie ? ie.length : 0;
  }, [b]), Vt = A.length || 1, Kt = B((D) => {
    console.log("handleImageSelect called with:", D), p(!0), I(D);
  }, []), st = B(() => {
    console.log("handleImageDeselect called"), p(!1), I(null);
  }, []), Xt = B((D, ie) => {
  }, []);
  return oe(() => () => {
    c.current && clearTimeout(c.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ l.jsx(
      tt,
      {
        currentFormat: {
          ...u,
          imageSelected: L
        },
        onFormatText: C,
        onAddPageBreak: ae
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        to,
        {
          editorView: null,
          isCollapsed: ee,
          onToggle: () => x((D) => !D),
          wordCount: Yt,
          pageCount: Vt
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: R,
          onScroll: Zt,
          children: /* @__PURE__ */ l.jsx(
            rt,
            {
              content: b,
              dimensions: Y,
              pageSize: E,
              pageMargins: y,
              pageBoundaries: A,
              editorRef: T,
              onInput: $,
              onClick: () => T.current?.focus(),
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        ot,
        {
          editorRef: T,
          onImageSelect: Kt,
          onImageDeselect: st,
          onImageResize: Xt
        }
      ),
      console.log("Rendering check - imageSelected:", L, "selectedImage:", w) || L && w && /* @__PURE__ */ l.jsx(
        at,
        {
          imageElement: w,
          onAlignChange: (D) => {
            console.log("Image alignment changed to:", D);
          },
          onAspectRatioToggle: () => {
            console.log("Aspect ratio toggled");
          },
          onDelete: () => {
            console.log("Image deleted");
          },
          onClose: st
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Ne.cloneElement(e, {
        onNavigate: Z,
        onAddPage: q,
        onDeletePage: O,
        onPageSizeChange: N,
        onPageMarginsChange: U,
        zoomLevel: k,
        canZoomIn: We(k),
        canZoomOut: Ze(k),
        onZoomIn: se,
        onZoomOut: pe,
        onZoomReset: me
      }) : /* @__PURE__ */ l.jsx(
        co,
        {
          pageBoundaries: A,
          activePage: j,
          pageSize: E,
          pageMargins: y,
          zoomLevel: k,
          canZoomIn: We(k),
          canZoomOut: Ze(k),
          onNavigate: Z,
          onAddPage: q,
          onDeletePage: O,
          onPageSizeChange: N,
          onPageMarginsChange: U,
          onZoomIn: se,
          onZoomOut: pe,
          onZoomReset: me
        }
      ) })
    ] })
  ] });
});
it.displayName = "HtmlEditor";
it.propTypes = {
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
it.defaultProps = {
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
class Wt extends Ne.Component {
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
  componentDidCatch(t, a) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", a), this.setState({
      error: t,
      errorInfo: a
    }), this.props.onError && this.props.onError(t, a);
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
Wt.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
Wt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Oo = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Ar as COMMON_FONT_SIZES,
  et as DEFAULT_FONT_SIZE,
  he as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Ot as DEFAULT_PAGE_SIZE,
  xo as DocumentProvider,
  tt as EditorToolbar,
  Wt as ErrorBoundary,
  Dt as FONT_SIZE_MAP,
  it as HtmlEditor,
  ot as ImageResizeHandlers,
  Oo as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  co as PageManager,
  rt as PageView,
  _ as RESIZE_HANDLERS,
  to as Sidebar,
  _o as applyImageDimensions,
  Ao as calculateResizeDimensions,
  ko as clearImages,
  zt as createResizeOverlay,
  wo as deleteImage,
  Ro as getAllImageKeys,
  bo as getAvailablePageSizes,
  io as getImage,
  Po as getImageDimensions,
  Je as getPageDimensions,
  Eo as getPixelValue,
  vo as getPointValue,
  de as isResizableImage,
  To as isValidFontSize,
  yo as isValidPageSize,
  so as logger,
  _r as pixelsToPoints,
  Pr as pointsToPixels,
  be as removeResizeOverlay,
  ao as saveImage,
  Ve as updateResizeOverlay,
  Yr as useContinuousReflow,
  Ct as useDocument,
  It as useDocumentActions,
  Nt as useDocumentState,
  Rr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
