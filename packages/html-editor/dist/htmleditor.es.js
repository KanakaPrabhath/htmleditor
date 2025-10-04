import Pe, { createContext as bt, useContext as Et, useReducer as vt, useMemo as ve, useState as xe, useCallback as W, useRef as te, useEffect as oe, forwardRef as Ie, createElement as Ne, useImperativeHandle as xt } from "react";
import { v4 as se } from "uuid";
import { createSlice as At } from "@reduxjs/toolkit";
function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fe = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function kt() {
  if (qe) return ce;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(t, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var l in i)
        l !== "key" && (s[l] = i[l]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: t,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return ce.Fragment = n, ce.jsx = r, ce.jsxs = r, ce;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Tt() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === U ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case O:
          return "Fragment";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case C:
          return "Suspense";
        case L:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case w:
            return "Portal";
          case S:
            return o.displayName || "Context";
          case T:
            return (o._context.displayName || "Context") + ".Consumer";
          case u:
            var h = o.render;
            return o = o.displayName, o || (o = h.displayName || h.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case M:
            return h = o.displayName || null, h !== null ? h : e(o.type) || "Memo";
          case z:
            h = o._payload, o = o._init;
            try {
              return e(o(h));
            } catch {
            }
        }
      return null;
    }
    function n(o) {
      return "" + o;
    }
    function r(o) {
      try {
        n(o);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var x = h.error, v = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), n(o);
      }
    }
    function t(o) {
      if (o === O) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === z)
        return "<...>";
      try {
        var h = e(o);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = V.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (G.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, h) {
      function x() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: x,
        configurable: !0
      });
    }
    function g() {
      var o = e(this.type);
      return X[o] || (X[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function p(o, h, x, v, B, N) {
      var P = x.ref;
      return o = {
        $$typeof: D,
        type: o,
        key: h,
        props: x,
        _owner: v
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function b(o, h, x, v, B, N) {
      var P = h.children;
      if (P !== void 0)
        if (v)
          if (Y(P)) {
            for (v = 0; v < P.length; v++)
              f(P[v]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(P);
      if (G.call(h, "key")) {
        P = e(o);
        var m = Object.keys(h).filter(function(I) {
          return I !== "key";
        });
        v = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", d[P + v] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          P,
          m,
          P
        ), d[P + v] = !0);
      }
      if (P = null, x !== void 0 && (r(x), P = "" + x), a(h) && (r(h.key), P = "" + h.key), "key" in h) {
        x = {};
        for (var j in h)
          j !== "key" && (x[j] = h[j]);
      } else x = h;
      return P && l(
        x,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), p(
        o,
        P,
        x,
        i(),
        B,
        N
      );
    }
    function f(o) {
      A(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === z && (o._payload.status === "fulfilled" ? A(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function A(o) {
      return typeof o == "object" && o !== null && o.$$typeof === D;
    }
    var E = Pe, D = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), V = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, Y = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var K, X = {}, ee = E.react_stack_bottom_frame.bind(
      E,
      s
    )(), re = Q(t(s)), d = {};
    le.Fragment = O, le.jsx = function(o, h, x) {
      var v = 1e4 > V.recentlyCreatedOwnerStacks++;
      return b(
        o,
        h,
        x,
        !1,
        v ? Error("react-stack-top-frame") : ee,
        v ? Q(t(o)) : re
      );
    }, le.jsxs = function(o, h, x) {
      var v = 1e4 > V.recentlyCreatedOwnerStacks++;
      return b(
        o,
        h,
        x,
        !0,
        v ? Error("react-stack-top-frame") : ee,
        v ? Q(t(o)) : re
      );
    };
  })()), le;
}
var Ge;
function _t() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? fe.exports = kt() : fe.exports = Tt()), fe.exports;
}
var c = _t();
const pe = "A4", ie = "<p><br></p>", St = "continuous", je = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ue = (e, n = pe) => ({
  id: se(),
  index: e,
  size: n,
  content: ie,
  images: [],
  isBreakPoint: !1
}), be = (e) => typeof e != "string" || e.trim() === "" ? ie : e, it = (e, n = pe) => (e.length > 0 ? e : [ue(0, n)]).map((t, i) => ({
  id: t.id || se(),
  index: i,
  size: t.size || n,
  content: be(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), Ct = (e = pe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (je[e] || je.A4).height
}], Oe = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || pe, t = it(e.pages || [ue(0, r)], r);
  return {
    id: se(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: r,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || St,
    continuousContent: e.continuousContent || ie,
    pageBoundaries: e.pageBoundaries || Ct(r)
  };
}, $ = {
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
  DUPLICATE_PAGE: "DUPLICATE_PAGE"
}, wt = (e, n) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case $.INITIALIZE_DOCUMENT: {
      const { initialContent: t = ie, pageSize: i = pe } = n.payload || {}, s = { ...ue(0, i), content: be(t) };
      return Oe({
        title: e.title,
        pageSize: i,
        pages: [s]
      });
    }
    case $.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: r
      };
    case $.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: i } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: be(i)
      }, {
        ...e,
        pages: s,
        updatedAt: r
      };
    }
    case $.UPDATE_PAGES: {
      const t = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, i = it(t.pages || [], e.pageSize), s = Array.isArray(t.pageBreaks) ? t.pageBreaks : i.slice(0, -1).map((a, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: s,
        totalPages: i.length,
        updatedAt: r
      };
    }
    case $.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(t, 0, ue(t, e.pageSize));
      const s = i.map((l, g) => ({
        ...l,
        index: g,
        size: e.pageSize
      })), a = s.slice(0, -1).map((l, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: t,
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case $.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(t, 1);
      const s = i.map((g, p) => ({
        ...g,
        index: p,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= s.length ? a = s.length - 1 : t <= a && a > 0 && (a -= 1);
      const l = s.slice(0, -1).map((g, p) => ({
        id: `auto-break-${p}`,
        pageNumber: p + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: a,
        pageBreaks: l,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case $.SET_ACTIVE_PAGE: {
      const t = n.payload;
      if (t === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t < 0 || t >= i ? e : {
        ...e,
        activePage: t,
        updatedAt: r
      };
    }
    case $.UPDATE_PAGE_SIZE: {
      const t = n.payload;
      if (t === e.pageSize)
        return e;
      if (!je[t])
        return console.warn(`Invalid page size: ${t}`), e;
      const i = e.pages.map((a, l) => ({
        ...a,
        index: l,
        size: t
      })), s = i.slice(0, -1).map((a, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: i,
        pageBreaks: s,
        updatedAt: r
      };
    }
    case $.RESET_DOCUMENT:
      return Oe();
    case $.UPDATE_CONTINUOUS_CONTENT: {
      const t = be(n.payload);
      return t === e.continuousContent ? e : {
        ...e,
        continuousContent: t,
        updatedAt: r
      };
    }
    case $.UPDATE_PAGE_BOUNDARIES: {
      const t = Array.isArray(n.payload) ? n.payload : [];
      if (t.length === e.pageBoundaries.length && t.length > 0 && t[0].id === e.pageBoundaries[0]?.id && t[t.length - 1].id === e.pageBoundaries[t.length - 1]?.id)
        return e;
      const i = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: i,
        updatedAt: r
      };
    }
    case $.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: i } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (t === "end")
        a = a + s + "<p><br></p>";
      else if (typeof t == "number") {
        const l = a.substring(0, t), g = a.substring(t);
        a = l + s + g;
      } else if (typeof i == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = a;
        const g = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && g.length === 0)
          a = a + s + "<p><br></p>";
        else if (i < g.length) {
          const p = g[i], b = document.createElement("page-break");
          b.setAttribute("data-page-break", "true"), b.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const f = document.createElement("p");
          f.innerHTML = "<br>", p.parentNode.insertBefore(b, p.nextSibling), b.parentNode.insertBefore(f, b.nextSibling), a = l.innerHTML;
        } else
          a = a + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: r
      };
    }
    case $.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const s = i.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, g) => {
        l.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: r
      };
    }
    case $.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let i = e.continuousContent, s = e.pages;
      return t === "continuous" ? i = e.pages.map((l) => l.content).filter((l) => l && l !== ie).join(`
`) || ie : e.continuousContent && e.continuousContent !== ie && (s = [{ ...ue(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: i,
        pages: s,
        updatedAt: r
      };
    }
    default:
      return e;
  }
}, st = bt(null), lr = ({ children: e, initialState: n = {} }) => {
  const [r, t] = vt(wt, Oe(n)), i = ve(() => ({
    initializeDocument: (a) => t({ type: $.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => t({ type: $.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => t({ type: $.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => t({ type: $.UPDATE_PAGES, payload: a }),
    addPage: (a) => t({ type: $.ADD_PAGE, payload: a }),
    deletePage: (a) => t({ type: $.DELETE_PAGE, payload: a }),
    setActivePage: (a) => t({ type: $.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => t({ type: $.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => t({ type: $.RESET_DOCUMENT }),
    updateContinuousContent: (a) => t({ type: $.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => t({ type: $.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => t({ type: $.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => t({ type: $.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => t({ type: $.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => t({ type: $.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => t({ type: $.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => t({ type: $.DUPLICATE_PAGE, payload: a })
  }), []), s = ve(() => ({
    state: r,
    actions: i,
    dispatch: t
  }), [r, i]);
  return /* @__PURE__ */ c.jsx(st.Provider, { value: s, children: e });
}, ct = () => {
  const e = Et(st);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, lt = () => {
  const { state: e } = ct();
  return e;
}, ut = () => {
  const { actions: e } = ct();
  return e;
};
var he = { exports: {} }, me = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Rt() {
  if (Ye) return q;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function T(u) {
    if (typeof u == "object" && u !== null) {
      var C = u.$$typeof;
      switch (C) {
        case n:
          switch (u = u.type, u) {
            case g:
            case p:
            case t:
            case s:
            case i:
            case f:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case l:
                case b:
                case D:
                case E:
                case a:
                  return u;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function S(u) {
    return T(u) === p;
  }
  return q.AsyncMode = g, q.ConcurrentMode = p, q.ContextConsumer = l, q.ContextProvider = a, q.Element = n, q.ForwardRef = b, q.Fragment = t, q.Lazy = D, q.Memo = E, q.Portal = r, q.Profiler = s, q.StrictMode = i, q.Suspense = f, q.isAsyncMode = function(u) {
    return S(u) || T(u) === g;
  }, q.isConcurrentMode = S, q.isContextConsumer = function(u) {
    return T(u) === l;
  }, q.isContextProvider = function(u) {
    return T(u) === a;
  }, q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, q.isForwardRef = function(u) {
    return T(u) === b;
  }, q.isFragment = function(u) {
    return T(u) === t;
  }, q.isLazy = function(u) {
    return T(u) === D;
  }, q.isMemo = function(u) {
    return T(u) === E;
  }, q.isPortal = function(u) {
    return T(u) === r;
  }, q.isProfiler = function(u) {
    return T(u) === s;
  }, q.isStrictMode = function(u) {
    return T(u) === i;
  }, q.isSuspense = function(u) {
    return T(u) === f;
  }, q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === t || u === p || u === s || u === i || u === f || u === A || typeof u == "object" && u !== null && (u.$$typeof === D || u.$$typeof === E || u.$$typeof === a || u.$$typeof === l || u.$$typeof === b || u.$$typeof === O || u.$$typeof === R || u.$$typeof === _ || u.$$typeof === w);
  }, q.typeOf = T, q;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Nt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function T(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === t || y === p || y === s || y === i || y === f || y === A || typeof y == "object" && y !== null && (y.$$typeof === D || y.$$typeof === E || y.$$typeof === a || y.$$typeof === l || y.$$typeof === b || y.$$typeof === O || y.$$typeof === R || y.$$typeof === _ || y.$$typeof === w);
    }
    function S(y) {
      if (typeof y == "object" && y !== null) {
        var ne = y.$$typeof;
        switch (ne) {
          case n:
            var ge = y.type;
            switch (ge) {
              case g:
              case p:
              case t:
              case s:
              case i:
              case f:
                return ge;
              default:
                var Ue = ge && ge.$$typeof;
                switch (Ue) {
                  case l:
                  case b:
                  case D:
                  case E:
                  case a:
                    return Ue;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var u = g, C = p, L = l, M = a, z = n, J = b, U = t, V = D, G = E, Y = r, Q = s, K = i, X = f, ee = !1;
    function re(y) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(y) || S(y) === g;
    }
    function d(y) {
      return S(y) === p;
    }
    function o(y) {
      return S(y) === l;
    }
    function h(y) {
      return S(y) === a;
    }
    function x(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function v(y) {
      return S(y) === b;
    }
    function B(y) {
      return S(y) === t;
    }
    function N(y) {
      return S(y) === D;
    }
    function P(y) {
      return S(y) === E;
    }
    function m(y) {
      return S(y) === r;
    }
    function j(y) {
      return S(y) === s;
    }
    function I(y) {
      return S(y) === i;
    }
    function Z(y) {
      return S(y) === f;
    }
    H.AsyncMode = u, H.ConcurrentMode = C, H.ContextConsumer = L, H.ContextProvider = M, H.Element = z, H.ForwardRef = J, H.Fragment = U, H.Lazy = V, H.Memo = G, H.Portal = Y, H.Profiler = Q, H.StrictMode = K, H.Suspense = X, H.isAsyncMode = re, H.isConcurrentMode = d, H.isContextConsumer = o, H.isContextProvider = h, H.isElement = x, H.isForwardRef = v, H.isFragment = B, H.isLazy = N, H.isMemo = P, H.isPortal = m, H.isProfiler = j, H.isStrictMode = I, H.isSuspense = Z, H.isValidElementType = T, H.typeOf = S;
  })()), H;
}
var Ve;
function dt() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? me.exports = Rt() : me.exports = Nt()), me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, We;
function jt() {
  if (We) return Te;
  We = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var g = Object.getOwnPropertyNames(a).map(function(b) {
        return a[b];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        p[b] = b;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = i() ? Object.assign : function(s, a) {
    for (var l, g = t(s), p, b = 1; b < arguments.length; b++) {
      l = Object(arguments[b]);
      for (var f in l)
        n.call(l, f) && (g[f] = l[f]);
      if (e) {
        p = e(l);
        for (var A = 0; A < p.length; A++)
          r.call(l, p[A]) && (g[p[A]] = l[p[A]]);
      }
    }
    return g;
  }, Te;
}
var _e, Je;
function De() {
  if (Je) return _e;
  Je = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _e = e, _e;
}
var Se, Ke;
function pt() {
  return Ke || (Ke = 1, Se = Function.call.bind(Object.prototype.hasOwnProperty)), Se;
}
var Ce, Ze;
function Ot() {
  if (Ze) return Ce;
  Ze = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ De(), r = {}, t = /* @__PURE__ */ pt();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, g, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in s)
        if (t(s, b)) {
          var f;
          try {
            if (typeof s[b] != "function") {
              var A = Error(
                (g || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            f = s[b](a, b, g, l, null, n);
          } catch (D) {
            f = D;
          }
          if (f && !(f instanceof Error) && e(
            (g || "React class") + ": type specification of " + l + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var E = p ? p() : "";
            e(
              "Failed " + l + " type: " + f.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ce = i, Ce;
}
var we, Xe;
function Mt() {
  if (Xe) return we;
  Xe = 1;
  var e = dt(), n = jt(), r = /* @__PURE__ */ De(), t = /* @__PURE__ */ pt(), i = /* @__PURE__ */ Ot(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var g = "Warning: " + l;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return we = function(l, g) {
    var p = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function f(d) {
      var o = d && (p && d[p] || d[b]);
      if (typeof o == "function")
        return o;
    }
    var A = "<<anonymous>>", E = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: _(),
      arrayOf: T,
      element: S(),
      elementType: u(),
      instanceOf: C,
      node: J(),
      objectOf: M,
      oneOf: L,
      oneOfType: z,
      shape: V,
      exact: G
    };
    function D(d, o) {
      return d === o ? d !== 0 || 1 / d === 1 / o : d !== d && o !== o;
    }
    function w(d, o) {
      this.message = d, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function O(d) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, h = 0;
      function x(B, N, P, m, j, I, Z) {
        if (m = m || A, I = I || P, Z !== r) {
          if (g) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = m + ":" + P;
            !o[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            h < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + m + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[ne] = !0, h++);
          }
        }
        return N[P] == null ? B ? N[P] === null ? new w("The " + j + " `" + I + "` is marked as required " + ("in `" + m + "`, but its value is `null`.")) : new w("The " + j + " `" + I + "` is marked as required in " + ("`" + m + "`, but its value is `undefined`.")) : null : d(N, P, m, j, I);
      }
      var v = x.bind(null, !1);
      return v.isRequired = x.bind(null, !0), v;
    }
    function R(d) {
      function o(h, x, v, B, N, P) {
        var m = h[x], j = K(m);
        if (j !== d) {
          var I = X(m);
          return new w(
            "Invalid " + B + " `" + N + "` of type " + ("`" + I + "` supplied to `" + v + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return O(o);
    }
    function _() {
      return O(a);
    }
    function T(d) {
      function o(h, x, v, B, N) {
        if (typeof d != "function")
          return new w("Property `" + N + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var P = h[x];
        if (!Array.isArray(P)) {
          var m = K(P);
          return new w("Invalid " + B + " `" + N + "` of type " + ("`" + m + "` supplied to `" + v + "`, expected an array."));
        }
        for (var j = 0; j < P.length; j++) {
          var I = d(P, j, v, B, N + "[" + j + "]", r);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return O(o);
    }
    function S() {
      function d(o, h, x, v, B) {
        var N = o[h];
        if (!l(N)) {
          var P = K(N);
          return new w("Invalid " + v + " `" + B + "` of type " + ("`" + P + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(d);
    }
    function u() {
      function d(o, h, x, v, B) {
        var N = o[h];
        if (!e.isValidElementType(N)) {
          var P = K(N);
          return new w("Invalid " + v + " `" + B + "` of type " + ("`" + P + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(d);
    }
    function C(d) {
      function o(h, x, v, B, N) {
        if (!(h[x] instanceof d)) {
          var P = d.name || A, m = re(h[x]);
          return new w("Invalid " + B + " `" + N + "` of type " + ("`" + m + "` supplied to `" + v + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return O(o);
    }
    function L(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function o(h, x, v, B, N) {
        for (var P = h[x], m = 0; m < d.length; m++)
          if (D(P, d[m]))
            return null;
        var j = JSON.stringify(d, function(Z, y) {
          var ne = X(y);
          return ne === "symbol" ? String(y) : y;
        });
        return new w("Invalid " + B + " `" + N + "` of value `" + String(P) + "` " + ("supplied to `" + v + "`, expected one of " + j + "."));
      }
      return O(o);
    }
    function M(d) {
      function o(h, x, v, B, N) {
        if (typeof d != "function")
          return new w("Property `" + N + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var P = h[x], m = K(P);
        if (m !== "object")
          return new w("Invalid " + B + " `" + N + "` of type " + ("`" + m + "` supplied to `" + v + "`, expected an object."));
        for (var j in P)
          if (t(P, j)) {
            var I = d(P, j, v, B, N + "." + j, r);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return O(o);
    }
    function z(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var o = 0; o < d.length; o++) {
        var h = d[o];
        if (typeof h != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(h) + " at index " + o + "."
          ), a;
      }
      function x(v, B, N, P, m) {
        for (var j = [], I = 0; I < d.length; I++) {
          var Z = d[I], y = Z(v, B, N, P, m, r);
          if (y == null)
            return null;
          y.data && t(y.data, "expectedType") && j.push(y.data.expectedType);
        }
        var ne = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new w("Invalid " + P + " `" + m + "` supplied to " + ("`" + N + "`" + ne + "."));
      }
      return O(x);
    }
    function J() {
      function d(o, h, x, v, B) {
        return Y(o[h]) ? null : new w("Invalid " + v + " `" + B + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return O(d);
    }
    function U(d, o, h, x, v) {
      return new w(
        (d || "React class") + ": " + o + " type `" + h + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function V(d) {
      function o(h, x, v, B, N) {
        var P = h[x], m = K(P);
        if (m !== "object")
          return new w("Invalid " + B + " `" + N + "` of type `" + m + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var j in d) {
          var I = d[j];
          if (typeof I != "function")
            return U(v, B, N, j, X(I));
          var Z = I(P, j, v, B, N + "." + j, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return O(o);
    }
    function G(d) {
      function o(h, x, v, B, N) {
        var P = h[x], m = K(P);
        if (m !== "object")
          return new w("Invalid " + B + " `" + N + "` of type `" + m + "` " + ("supplied to `" + v + "`, expected `object`."));
        var j = n({}, h[x], d);
        for (var I in j) {
          var Z = d[I];
          if (t(d, I) && typeof Z != "function")
            return U(v, B, N, I, X(Z));
          if (!Z)
            return new w(
              "Invalid " + B + " `" + N + "` key `" + I + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(h[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var y = Z(P, I, v, B, N + "." + I, r);
          if (y)
            return y;
        }
        return null;
      }
      return O(o);
    }
    function Y(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(Y);
          if (d === null || l(d))
            return !0;
          var o = f(d);
          if (o) {
            var h = o.call(d), x;
            if (o !== d.entries) {
              for (; !(x = h.next()).done; )
                if (!Y(x.value))
                  return !1;
            } else
              for (; !(x = h.next()).done; ) {
                var v = x.value;
                if (v && !Y(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(d, o) {
      return d === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function K(d) {
      var o = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : Q(o, d) ? "symbol" : o;
    }
    function X(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var o = K(d);
      if (o === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function ee(d) {
      var o = X(d);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function re(d) {
      return !d.constructor || !d.constructor.name ? A : d.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, we;
}
var Re, Qe;
function It() {
  if (Qe) return Re;
  Qe = 1;
  var e = /* @__PURE__ */ De();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Re = function() {
    function t(a, l, g, p, b, f) {
      if (f !== e) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var s = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: i,
      element: t,
      elementType: t,
      instanceOf: i,
      node: t,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, Re;
}
var et;
function Dt() {
  if (et) return he.exports;
  if (et = 1, process.env.NODE_ENV !== "production") {
    var e = dt(), n = !0;
    he.exports = /* @__PURE__ */ Mt()(e.isElement, n);
  } else
    he.exports = /* @__PURE__ */ It()();
  return he.exports;
}
var Bt = /* @__PURE__ */ Dt();
const k = /* @__PURE__ */ Pt(Bt), Lt = {
  "10px": "1",
  "12px": "2",
  "14px": "3",
  "16px": "4",
  "18px": "5",
  "24px": "6",
  "32px": "7"
}, tt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: "12px"
}, zt = () => {
  const [e, n] = xe(tt), r = W((a) => {
    n((l) => ({
      ...l,
      alignLeft: a === "left",
      alignCenter: a === "center",
      alignRight: a === "right",
      alignJustify: a === "justify"
    }));
  }, []), t = W((a) => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return !1;
      const g = l.getRangeAt(0);
      if (!g.toString())
        return n((b) => ({ ...b, fontSize: a })), !1;
      try {
        const b = document.createElement("span");
        b.style.fontSize = a;
        const f = g.extractContents();
        return b.appendChild(f), g.insertNode(b), g.selectNodeContents(b), l.removeAllRanges(), l.addRange(g), n((A) => ({ ...A, fontSize: a })), !0;
      } catch {
        const f = Lt[a] || "2";
        return document.execCommand("fontSize", !1, f), n((A) => ({ ...A, fontSize: a })), !0;
      }
    } catch (l) {
      return console.warn("[useFormatting] Font size change failed:", l), !1;
    }
  }, []), i = W((a, l = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (a === "fontSize") {
        t(l);
        return;
      }
      switch (document.execCommand(a, !1, l) || console.warn(`[useFormatting] Command "${a}" failed`), a) {
        case "bold":
          n((p) => ({ ...p, bold: !p.bold }));
          break;
        case "italic":
          n((p) => ({ ...p, italic: !p.italic }));
          break;
        case "underline":
          n((p) => ({ ...p, underline: !p.underline }));
          break;
        case "strikethrough":
          n((p) => ({ ...p, strikethrough: !p.strikethrough }));
          break;
        case "justifyLeft":
          r("left");
          break;
        case "justifyCenter":
          r("center");
          break;
        case "justifyRight":
          r("right");
          break;
        case "justifyFull":
          r("justify");
          break;
        case "fontName":
          n((p) => ({ ...p, fontFamily: l }));
          break;
        default:
          break;
      }
    } catch (g) {
      console.warn(`[useFormatting] Error executing command "${a}":`, g);
    }
  }, [t, r]), s = W(() => {
    n(tt);
  }, []);
  return {
    currentFormat: e,
    formatText: i,
    resetFormat: s
  };
}, ye = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, nt = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, $t = 300, Ut = 500, qt = 50, Ht = 'page-break, [data-page-break="true"]', Gt = (e, n) => {
  const r = ut(), t = te(null), i = te(null), s = te(e), a = te(!1);
  oe(() => {
    s.current = e;
  }, [e]), oe(() => () => {
    t.current && clearTimeout(t.current), i.current && clearTimeout(i.current);
  }, []);
  const l = W((_, T) => {
    if (!_ || _.length === 0)
      return null;
    let S = 0;
    for (let u = 0; u < _.length; u++) {
      const C = _[u];
      if (!C || !C.getBoundingClientRect)
        continue;
      const L = C.getBoundingClientRect().height;
      if (S + L > T)
        return {
          overflowIndex: u,
          overflowElement: C,
          accumulatedHeight: S
        };
      S += L;
    }
    return null;
  }, []), g = W((_, T) => {
    if (!_ || !n?.current)
      return !1;
    try {
      const S = n.current, u = document.createElement("page-break");
      return u.setAttribute("data-page-break", "true"), u.setAttribute("contenteditable", "false"), u.setAttribute("data-page-number", T || "2"), _.parentNode.insertBefore(u, _), !0;
    } catch (S) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", S), !1;
    }
  }, [n]), p = W((_ = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const T = _.pageSize || s.current || "A4", S = ye[T] || ye.A4, u = n.current, C = u.querySelectorAll(Ht), L = [];
    L.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: S.height
    });
    const M = u.getBoundingClientRect(), z = u.scrollTop;
    return C.forEach((J, U) => {
      const G = J.getBoundingClientRect().top - M.top + z;
      L.push({
        id: `page-${U + 1}`,
        pageNumber: U + 2,
        top: G,
        height: S.height
      });
    }), L;
  }, [n]), b = W((_ = {}) => {
    const T = p(_);
    return r.updatePageBoundaries(T), T;
  }, [p, r]), f = W(() => {
    if (!(!n?.current || a.current))
      try {
        a.current = !0;
        const _ = n.current, T = s.current || "A4", u = (ye[T] || ye.A4).height - nt.top - nt.bottom, C = Array.from(_.children);
        if (C.length === 0)
          return;
        const L = C.filter(
          (U) => U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true"
        ), M = [];
        let z = [];
        for (const U of C)
          U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true" ? z.length > 0 && (M.push(z), z = []) : z.push(U);
        z.length > 0 && M.push(z), M.length === 0 && C.length > 0 && M.push(C.filter(
          (U) => !(U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true")
        ));
        let J = !1;
        for (let U = 0; U < M.length; U++) {
          const V = M[U], G = l(V, u);
          if (G && G.overflowIndex > 0) {
            const Y = U + 2;
            if (g(G.overflowElement, Y)) {
              J = !0;
              break;
            }
          }
        }
        if (J) {
          const U = _.innerHTML;
          r.updateContinuousContent(U), setTimeout(() => {
            b();
          }, qt);
        }
      } catch (_) {
        console.warn("[checkAndReflow] Reflow failed:", _);
      } finally {
        a.current = !1;
      }
  }, [n, l, g, r, b]), A = W((_ = Ut) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, f();
    }, _);
  }, [f]), E = W((_ = {}) => {
    t.current && clearTimeout(t.current);
    const T = typeof _.delay == "number" ? _.delay : $t;
    t.current = setTimeout(() => {
      t.current = null, b(_);
    }, Math.max(0, T));
  }, [b]), D = W((_) => {
    if (!_?.current || !n?.current)
      return 0;
    try {
      const T = _.current, u = n.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (u.length === 0)
        return 0;
      const C = T.getBoundingClientRect(), L = C.top + C.height / 2;
      for (let M = u.length - 1; M >= 0; M--)
        if (u[M].getBoundingClientRect().top < L)
          return M + 1;
      return 0;
    } catch (T) {
      return console.warn("[getCurrentPage] Failed to calculate page:", T), 0;
    }
  }, [n]), w = W((_) => {
    if (!n?.current)
      return;
    const T = n.current;
    T.focus();
    try {
      let S = null, u = 0;
      if (_ === 0)
        S = T.firstChild, u = 0;
      else {
        const L = T.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
        L && L.nextSibling && (S = L.nextSibling, u = 0);
      }
      if (S) {
        const C = document.createRange(), L = window.getSelection();
        S.nodeType === Node.TEXT_NODE ? C.setStart(S, u) : C.setStart(S, 0), C.collapse(!0), L.removeAllRanges(), L.addRange(C);
      }
    } catch (S) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", S);
    }
  }, [n]), O = W((_, T) => {
    if (!T?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const S = T.current, u = n.current;
    try {
      let C = null;
      if (_ === 0)
        C = u;
      else {
        const M = u.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
        if (M)
          C = M;
        else {
          console.warn("[scrollToPage] Page break not found for page", _);
          return;
        }
      }
      if (C) {
        const L = C.getBoundingClientRect(), M = S.getBoundingClientRect(), z = S.scrollTop + (L.top - M.top);
        console.log("[scrollToPage] Scrolling to page", _, "scrollTop:", z), S.scrollTo({
          top: z,
          behavior: "smooth"
        }), setTimeout(() => {
          w(_);
        }, 400);
      }
    } catch (C) {
      console.error("[scrollToPage] Error:", C);
    }
  }, [n, w]), R = W((_) => {
    if (!n?.current)
      return !1;
    const T = n.current;
    if (p().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const u = Array.from(T.querySelectorAll('page-break, [data-page-break="true"]'));
      if (_ > u.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const C = window.getSelection();
      let L = !1, M = [], z = null;
      if (_ === 0) {
        const V = u[0];
        if (!V)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let G = T.firstChild;
        for (; G && G !== V; )
          M.push(G), G = G.nextSibling;
        z = V;
      } else {
        const V = u[_ - 1];
        if (!V)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const G = u[_];
        let Y = V.nextSibling;
        for (; Y && Y !== G; )
          M.push(Y), Y = Y.nextSibling;
        z = V;
      }
      if (C && C.rangeCount > 0) {
        const G = C.getRangeAt(0).startContainer;
        for (const Y of M)
          if (Y.contains(G) || Y === G) {
            L = !0;
            break;
          }
      }
      z && z.parentNode && z.remove(), M.forEach((V) => {
        V.parentNode && V.remove();
      }), T.querySelectorAll('page-break, [data-page-break="true"]').forEach((V, G) => {
        V.setAttribute("data-page-number", String(G + 2));
      }), L && setTimeout(() => {
        w(0);
      }, 50);
      const U = T.innerHTML;
      return r.updateContinuousContent(U), setTimeout(() => {
        b();
      }, 100), !0;
    } catch (u) {
      return console.error("[removePageAndContent] Failed to remove page:", u), !1;
    }
  }, [n, p, r, b, w]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: E,
    updateBoundaries: b,
    getCurrentPage: D,
    scrollToPage: O,
    positionCursorAtPage: w,
    checkAndReflow: f,
    triggerAutoReflow: A,
    removePageAndContent: R,
    boundaryTimeoutRef: t,
    reflowTimeoutRef: i
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ft = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, r, t) => t ? t.toUpperCase() : r.toLowerCase()
), rt = (e) => {
  const n = Ft(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, gt = (...e) => e.filter((n, r, t) => !!n && n.trim() !== "" && t.indexOf(n) === r).join(" ").trim(), Vt = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wt = {
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
const Jt = Ie(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: t,
    className: i = "",
    children: s,
    iconNode: a,
    ...l
  }, g) => Ne(
    "svg",
    {
      ref: g,
      ...Wt,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(r) * 24 / Number(n) : r,
      className: gt("lucide", i),
      ...!s && !Vt(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([p, b]) => Ne(p, b)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F = (e, n) => {
  const r = Ie(
    ({ className: t, ...i }, s) => Ne(Jt, {
      ref: s,
      iconNode: n,
      className: gt(
        `lucide-${Yt(rt(e))}`,
        `lucide-${e}`,
        t
      ),
      ...i
    })
  );
  return r.displayName = rt(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Zt = F("bold", Kt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Qt = F("chevron-left", Xt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], tn = F("chevron-right", en);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], rn = F("file-check", nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ae = F("file-text", an);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], sn = F("hash", on);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], ln = F("heading-1", cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], dn = F("heading-2", un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], gn = F("heading-3", pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], hn = F("image", fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], yn = F("italic", mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], En = F("link", bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], xn = F("list-ordered", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], ft = F("list", An);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], kn = F("plus", Pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], _n = F("redo", Tn);
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
], Cn = F("settings", Sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Rn = F("square-check-big", wn);
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
], jn = F("strikethrough", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Mn = F("table", On);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Dn = F("text-align-center", In);
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
], Ln = F("text-align-end", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], $n = F("text-align-justify", zn);
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
], qn = F("text-align-start", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Gn = F("underline", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Fn = F("undo", Yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Wn = F("x", Vn), Jn = ({ editorView: e, isCollapsed: n, onToggle: r, wordCount: t, pageCount: i }) => {
  const s = lt(), { pages: a, activePage: l, continuousContent: g, editorMode: p } = s, [b, f] = xe(0), [A, E] = xe([]);
  oe(() => {
    if (t !== void 0 && i !== void 0) {
      if (f(t), g) {
        const R = document.createElement("div");
        R.innerHTML = g;
        const _ = R.querySelectorAll("h1, h2, h3, h4, h5, h6"), T = Array.from(_).map((S, u) => {
          const C = parseInt(S.tagName.charAt(1)), L = S.textContent.trim();
          return L ? {
            id: `heading-${u}`,
            level: C,
            text: L,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        E(T);
      }
      return;
    }
    let w = 0;
    const O = [];
    a.forEach((R, _) => {
      if (R.content) {
        const T = document.createElement("div");
        T.innerHTML = R.content;
        const u = (T.textContent || T.innerText || "").trim().split(/\s+/).filter((L) => L.length > 0);
        w += u.length, T.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((L, M) => {
          const z = parseInt(L.tagName.charAt(1)), J = L.textContent.trim();
          J && O.push({
            id: `heading-${_}-${M}`,
            level: z,
            text: J,
            page: _ + 1
          });
        });
      }
    }), f(w), E(O);
  }, [a, t, i, g]);
  const D = i !== void 0 ? i : a.length;
  return /* @__PURE__ */ c.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ c.jsx(Ae, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: r,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ c.jsx(tn, { size: 16 }) : /* @__PURE__ */ c.jsx(Qt, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(rn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: D })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(sn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: b.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Ae, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: l + 1 })
            ] })
          ] }),
          A.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(ft, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: A.map((w) => {
              const O = w.level === 1 ? ln : w.level === 2 ? dn : gn;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${w.level}`,
                  style: { marginLeft: `${(w.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(O, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ c.jsx("span", { className: "outline-text", children: w.text }),
                    /* @__PURE__ */ c.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      w.page
                    ] })
                  ]
                },
                w.id
              );
            }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ c.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ c.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Kn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Zn(e) {
  return new Promise((n, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (s) => {
      const a = s.target.result;
      if (a.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = `editor-image-${Kn()}`;
        localStorage.setItem(p, a), n(p);
      } catch (p) {
        p.name === "QuotaExceededError" ? r(new Error("Storage quota exceeded")) : r(p);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function ur(e) {
  return localStorage.getItem(e);
}
function dr(e) {
  localStorage.removeItem(e);
}
function pr() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function gr() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Xn {
  constructor(n = "Editor") {
    this.namespace = n;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(n, r, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${r}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, r) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, r) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, r) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, r) {
  }
}
const at = new Xn("Editor"), Be = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: r,
  onPageSizeChange: t,
  onAddPageBreak: i
}) => {
  const s = async (a) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(a.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (a.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const g = await Zn(a), p = localStorage.getItem(g);
      p && (document.execCommand("insertImage", !1, p), at.info("Image inserted", { key: g }));
    } catch (l) {
      at.error("Error uploading image", l);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ c.jsx(Zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ c.jsx(yn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ c.jsx(Gn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ c.jsx(jn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ c.jsx(qn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ c.jsx(Dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ c.jsx(Ln, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ c.jsx($n, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (a) => r("fontName", a.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ c.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ c.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ c.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ c.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (a) => r("fontSize", a.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ c.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ c.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ c.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ c.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ c.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ c.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ c.jsx(ft, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ c.jsx(xn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ c.jsx(Rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => {
          const a = prompt("Enter URL:");
          a && r("createLink", a);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(En, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ c.jsx(Mn, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ c.jsx(Ae, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: /* @__PURE__ */ c.jsx(Fn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: /* @__PURE__ */ c.jsx(_n, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (a) => a.target.files[0] && s(a.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        value: n,
        onChange: (a) => t(a.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
};
Be.propTypes = {
  currentFormat: k.shape({
    bold: k.bool,
    italic: k.bool,
    underline: k.bool,
    strikethrough: k.bool,
    alignLeft: k.bool,
    alignCenter: k.bool,
    alignRight: k.bool,
    alignJustify: k.bool,
    fontFamily: k.string,
    fontSize: k.string
  }).isRequired,
  pageSize: k.oneOf(["A4", "Letter", "Legal"]).isRequired,
  onFormatText: k.func.isRequired,
  onPageSizeChange: k.func.isRequired,
  onAddPageBreak: k.func
};
Be.defaultProps = {
  onAddPageBreak: void 0
};
const Le = ({
  content: e,
  dimensions: n,
  pageSize: r,
  pageBoundaries: t = [],
  editorRef: i,
  onInput: s,
  onKeyDown: a,
  onClick: l,
  onScroll: g
}) => {
  const p = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, b = (f) => {
    if (f.key === "Tab")
      return f.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const A = window.getSelection();
    if (!A || A.rangeCount === 0) return;
    const E = A.getRangeAt(0), { startContainer: D, endContainer: w } = E, O = (R) => R ? R.nodeType === Node.ELEMENT_NODE ? R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true" : R.parentElement && O(R.parentElement) : !1;
    if ((f.key === "Backspace" || f.key === "Delete") && (O(D) || O(w)))
      return f.preventDefault(), !1;
    a && a(f);
  };
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${n.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            lineHeight: "1.15",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: s,
          onKeyDown: b,
          onClick: l,
          onScroll: g,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Le.propTypes = {
  content: k.string.isRequired,
  dimensions: k.shape({
    width: k.number.isRequired,
    height: k.number.isRequired
  }).isRequired,
  pageSize: k.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: k.arrayOf(
    k.shape({
      id: k.string.isRequired,
      pageNumber: k.number.isRequired,
      top: k.number,
      height: k.number
    })
  ),
  editorRef: k.shape({
    current: k.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: k.func.isRequired,
  onKeyDown: k.func,
  onClick: k.func,
  onScroll: k.func
};
Le.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0
};
const ze = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: r = "A4",
  onNavigate: t,
  onAddPage: i,
  onDeletePage: s,
  onPageSizeChange: a
} = {}) => {
  const l = Math.max(e?.length || 0, 1), g = (A) => {
    t && t(A);
  }, p = () => {
    i && i();
  }, b = (A) => {
    if (l <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    s && s(A);
  }, f = (A) => {
    a && a(A);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ c.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ c.jsx(Cn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: r,
          onChange: (A) => f(A.target.value),
          children: [
            /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((A, E) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${E === n ? "active" : ""}`,
          onClick: () => g(E),
          "aria-label": `Go to page ${E + 1}`,
          "aria-current": E === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(Ae, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              E + 1
            ] })
          ]
        }
      ),
      l > 1 && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (D) => {
            D.stopPropagation(), b(E);
          },
          "aria-label": `Delete page ${E + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(Wn, { size: 14 })
        }
      )
    ] }, A.id || `page-${E}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: p,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(kn, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
ze.propTypes = {
  pageBoundaries: k.arrayOf(
    k.shape({
      id: k.string.isRequired,
      pageNumber: k.number.isRequired,
      top: k.number,
      height: k.number
    })
  ),
  activePage: k.number,
  pageSize: k.oneOf(["A4", "Letter", "Legal"]),
  onNavigate: k.func,
  onAddPage: k.func,
  onDeletePage: k.func,
  onPageSizeChange: k.func
};
ze.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  onNavigate: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0
};
const Qn = Pe.memo(ze), ot = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, er = 50, tr = 50, nr = 50, rr = 100, ar = 500, $e = Ie(({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: r,
  onDeletePage: t,
  onPageSizeChange: i,
  onChange: s,
  showSidebar: a = !0,
  showToolbar: l = !0,
  showPageManager: g = !0
}, p) => {
  const b = lt(), f = ut(), { pageSize: A, continuousContent: E, pageBoundaries: D, activePage: w } = b, O = te(null), R = te(null), { currentFormat: _, formatText: T } = zt(), {
    checkAndUpdateBoundaries: S,
    getCurrentPage: u,
    scrollToPage: C,
    positionCursorAtPage: L,
    updateBoundaries: M,
    triggerAutoReflow: z,
    removePageAndContent: J
  } = Gt(A, R), U = ve(() => ot[A] || ot.A4, [A]), [V, G] = xe(!1), Y = te(null), Q = te(!1), K = te(!1), X = te(!1), ee = te(E);
  oe(() => {
    if (R.current) {
      if (!X.current) {
        R.current.innerHTML = E, X.current = !0, ee.current = E;
        const m = setTimeout(() => {
          M();
        }, er);
        return () => clearTimeout(m);
      }
      if (ee.current !== E) {
        if (R.current.innerHTML !== E) {
          R.current.innerHTML = E;
          const j = setTimeout(() => {
            if (M(), Q.current) {
              Q.current = !1;
              const I = Math.max(0, D.length - 1);
              f.setActivePage(I), setTimeout(() => {
                C(I, O);
              }, nr);
            }
          }, tr);
          return ee.current = E, () => clearTimeout(j);
        }
        ee.current = E;
      }
    }
  }, [E, M, D.length, f, C]), oe(() => {
    s && X.current && s(E);
  }, [E, s]), xt(p, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => E,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => E.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (m) => {
      f.updateContinuousContent(m), R.current && (R.current.innerHTML = m, setTimeout(() => {
        M();
      }, 50));
    }
  }), [E, f, M]), oe(() => {
    const m = setTimeout(() => {
      R.current && R.current.focus();
    }, 200);
    return () => clearTimeout(m);
  }, []);
  const re = W((m) => {
    const j = m.currentTarget.innerHTML;
    f.updateContinuousContent(j), S(), z();
    const I = u(O);
    I !== w && f.setActivePage(I);
  }, [S, f, u, w, z, O]), d = W((m) => {
    f.updatePageSize(m), M({ pageSize: m }), i && i(m);
  }, [f, M, i]), o = W((m) => {
    m < 0 || m >= D.length || (K.current = !0, f.setActivePage(m), C(m, O), setTimeout(() => {
      K.current = !1;
    }, ar), n && n(m));
  }, [f, C, n, D.length]), h = W(() => {
    Q.current = !0, f.addPageBreak({ position: "end" }), r && r();
  }, [f, r]), x = W(() => {
    const m = window.getSelection();
    if (m && m.rangeCount > 0) {
      if (!R?.current) return;
      const Z = `<page-break data-page-break="true" contenteditable="false" data-page-number="${R.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Z), setTimeout(() => {
        M();
        const y = u(O);
        f.setActivePage(y);
      }, 150);
    }
  }, [M, u, f, O]), v = W((m) => {
    if (D.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(m) && (f.setActivePage(0), t && t(m));
  }, [D.length, J, f, t]), B = W(() => {
    !O.current || !R.current || K.current || (Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
      if (K.current) {
        Y.current = null;
        return;
      }
      const m = u(O);
      m !== w && m >= 0 && f.setActivePage(m), Y.current = null;
    }, rr));
  }, [u, w, f]), N = ve(() => {
    if (!E) return 0;
    const j = E.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return j ? j.length : 0;
  }, [E]), P = D.length || 1;
  return oe(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ c.jsx(
      Be,
      {
        currentFormat: _,
        pageSize: A,
        onFormatText: T,
        onPageSizeChange: d,
        onAddPageBreak: x
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ c.jsx(
        Jn,
        {
          editorView: null,
          isCollapsed: V,
          onToggle: () => G((m) => !m),
          wordCount: N,
          pageCount: P
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: O,
          onScroll: B,
          children: /* @__PURE__ */ c.jsx(
            Le,
            {
              content: E,
              dimensions: U,
              pageSize: A,
              pageBoundaries: D,
              editorRef: R,
              onInput: re,
              onClick: () => R.current?.focus()
            }
          )
        }
      ),
      g && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? Pe.cloneElement(e, {
        onNavigate: o,
        onAddPage: h,
        onDeletePage: v,
        onPageSizeChange: d
      }) : /* @__PURE__ */ c.jsx(
        Qn,
        {
          pageBoundaries: D,
          activePage: w,
          pageSize: A,
          onNavigate: o,
          onAddPage: h,
          onDeletePage: v,
          onPageSizeChange: d
        }
      ) })
    ] })
  ] });
});
$e.displayName = "ContentEditableEditor";
$e.propTypes = {
  pageManagerComponent: k.element,
  onNavigatePage: k.func,
  onAddPage: k.func,
  onDeletePage: k.func,
  onPageSizeChange: k.func,
  onChange: k.func,
  showSidebar: k.bool,
  showToolbar: k.bool,
  showPageManager: k.bool
};
$e.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onChange: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class ht extends Pe.Component {
  constructor(n) {
    super(n), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0 };
  }
  componentDidCatch(n, r) {
    console.error("[ErrorBoundary] Caught error:", n), console.error("[ErrorBoundary] Error info:", r), this.setState({
      error: n,
      errorInfo: r
    }), this.props.onError && this.props.onError(n, r);
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
ht.propTypes = {
  children: k.node.isRequired,
  fallback: k.node,
  onError: k.func,
  onReset: k.func,
  showDetails: k.bool
};
ht.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const ke = "A4", ae = "<p><br></p>", de = (e, n = ke) => ({
  id: se(),
  index: e,
  size: n,
  content: ae,
  images: [],
  isBreakPoint: !1
}), mt = (e, n = ke) => (e.length > 0 ? e : [de(0, n)]).map((t, i) => ({
  id: t.id || se(),
  index: i,
  size: t.size || n,
  content: Ee(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), Ee = (e) => typeof e != "string" || e.trim() === "" ? ae : e, Me = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || ke, t = mt(e.pages || [de(0, r)], r), i = {
    A4: { width: 794, height: 1123 },
    Letter: { width: 816, height: 1056 },
    Legal: { width: 816, height: 1344 }
  }, a = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (i[r] || i.A4).height
  }];
  return {
    id: se(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: r,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || ae,
    pageBoundaries: e.pageBoundaries || a
  };
}, or = Me(), yt = At({
  name: "document",
  initialState: or,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: r = ae, pageSize: t = ke } = n.payload || {}, i = { ...de(0, t), content: Ee(r) };
      return Me({
        title: e.title,
        pageSize: t,
        pages: [i]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: r, content: t } = n.payload;
      r < 0 || r >= e.pages.length || (e.pages[r].content = Ee(t), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const r = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, t = mt(r.pages || [], e.pageSize);
      e.pages = t, e.activePage = Math.min(e.activePage, t.length - 1), e.pageBreaks = Array.isArray(r.pageBreaks) ? r.pageBreaks : t.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = t.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const r = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(r, 0, de(r, e.pageSize)), e.pages = e.pages.map((t, i) => ({
        ...t,
        index: i,
        size: e.pageSize
      })), e.activePage = r, e.pageBreaks = e.pages.slice(0, -1).map((t, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const r = n.payload;
      e.pages.length <= 1 || (e.pages.splice(r, 1), e.pages = e.pages.map((t, i) => ({
        ...t,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : r <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((t, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const r = n.payload, t = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      r >= 0 && r < t && (e.activePage = r, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const r = n.payload;
      e.pageSize = r, e.pages = e.pages.map((t, i) => ({
        ...t,
        index: i,
        size: r
      })), e.pageBreaks = e.pages.slice(0, -1).map((t, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => Me(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = Ee(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.activePage >= e.pageBoundaries.length && (e.activePage = Math.max(0, e.pageBoundaries.length - 1)), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: r = "end", pageIndex: t } = n.payload || {}, i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (r === "end")
        e.continuousContent = e.continuousContent + i + "<p><br></p>";
      else if (typeof r == "number") {
        const s = e.continuousContent.substring(0, r), a = e.continuousContent.substring(r);
        e.continuousContent = s + i + a;
      } else if (typeof t == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const a = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (t === 0 && a.length === 0)
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
        else if (t < a.length) {
          const l = a[t], g = document.createElement("page-break");
          g.setAttribute("data-page-break", "true"), g.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", l.parentNode.insertBefore(g, l.nextSibling), g.parentNode.insertBefore(p, g.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (typeof r == "number" && typeof document < "u") {
        const t = document.createElement("div");
        t.innerHTML = e.continuousContent;
        const i = t.querySelectorAll('page-break, [data-page-break="true"]');
        i[r] && i[r].remove(), t.querySelectorAll('page-break, [data-page-break="true"]').forEach((a, l) => {
          a.setAttribute("data-page-number", String(l + 2));
        }), e.continuousContent = t.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const r = n.payload;
      if (r !== e.editorMode) {
        if (e.editorMode = r, r === "continuous") {
          const t = e.pages.map((i) => i.content).filter((i) => i && i !== ae).join(`
`);
          e.continuousContent = t || ae;
        } else
          e.continuousContent && e.continuousContent !== ae && (e.pages = [{ ...de(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: r, content: t = ae } = n.payload || {};
      if (!(typeof r != "number" || r < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent;
          const s = i.querySelectorAll('page-break, [data-page-break="true"]'), a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (r === 0)
            e.continuousContent = t + a + e.continuousContent;
          else if (r >= s.length)
            e.continuousContent = e.continuousContent + a + t;
          else {
            const l = s[r - 1], g = document.createElement("div");
            g.innerHTML = t;
            const p = document.createElement("page-break");
            p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), l.parentNode.insertBefore(g, l.nextSibling), l.parentNode.insertBefore(p, g.nextSibling), e.continuousContent = i.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: r, toIndex: t } = n.payload || {};
      if (!(typeof r != "number" || typeof t != "number") && !(r < 0 || t < 0 || r === t)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent, Array.from(i.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let a = i.firstChild, l = [];
          for (; a; )
            a.nodeType === 1 && (a.tagName.toLowerCase() === "page-break" || a.getAttribute("data-page-break") === "true") ? (s.push(l), l = []) : l.push(a.cloneNode(!0)), a = a.nextSibling;
          if (l.length > 0 && s.push(l), r >= s.length || t >= s.length)
            return;
          const [g] = s.splice(r, 1);
          s.splice(t, 0, g);
          const p = [];
          s.forEach((b, f) => {
            b.forEach((A) => p.push(A.outerHTML || A.textContent)), f < s.length - 1 && p.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = p.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (!(typeof r != "number" || r < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const t = document.createElement("div");
          t.innerHTML = e.continuousContent;
          const i = Array.from(t.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], a = t.firstChild, l = 0;
          for (; a; ) {
            if (a.nodeType === 1 && (a.tagName.toLowerCase() === "page-break" || a.getAttribute("data-page-break") === "true")) {
              if (l === r)
                break;
              l++, s = [];
            } else l === r && s.push(a.cloneNode(!0));
            a = a.nextSibling;
          }
          if (s.length > 0 && r < i.length) {
            const g = i[r], f = s.map((D) => D.outerHTML || D.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', A = document.createElement("div");
            A.innerHTML = f;
            let E = g;
            Array.from(A.children).forEach((D) => {
              E.parentNode.insertBefore(D.cloneNode(!0), E.nextSibling), E = E.nextSibling;
            }), e.continuousContent = t.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: fr,
  updateTitle: hr,
  updatePageContent: mr,
  updatePages: yr,
  addPage: br,
  deletePage: Er,
  setActivePage: vr,
  updatePageSize: xr,
  resetDocument: Ar,
  updateContinuousContent: Pr,
  updatePageBoundaries: kr,
  addPageBreak: Tr,
  removePageBreak: _r,
  setEditorMode: Sr,
  insertPageAt: Cr,
  movePageTo: wr,
  duplicatePage: Rr
} = yt.actions, Nr = yt.reducer, jr = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  $e as ContentEditableEditor,
  Le as ContinuousPageView,
  lr as DocumentProvider,
  Be as EditorToolbar,
  ht as ErrorBoundary,
  jr as PAGE_DIMENSIONS,
  Qn as PageManager,
  Jn as Sidebar,
  br as addPage,
  Tr as addPageBreak,
  pr as clearImages,
  dr as deleteImage,
  Er as deletePage,
  Nr as documentReducer,
  Rr as duplicatePage,
  gr as getAllImageKeys,
  ur as getImage,
  fr as initializeDocument,
  Cr as insertPageAt,
  Xn as logger,
  wr as movePageTo,
  _r as removePageBreak,
  Ar as resetDocument,
  Zn as saveImage,
  vr as setActivePage,
  Sr as setEditorMode,
  Pr as updateContinuousContent,
  kr as updatePageBoundaries,
  mr as updatePageContent,
  xr as updatePageSize,
  yr as updatePages,
  hr as updateTitle,
  Gt as useContinuousReflow,
  ct as useDocument,
  ut as useDocumentActions,
  lt as useDocumentState,
  zt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
