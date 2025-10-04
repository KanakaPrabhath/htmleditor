import ke, { createContext as $e, useReducer as Ue, useMemo as ce, useContext as Ge, useState as ue, useCallback as D, useRef as U, useEffect as H, forwardRef as Ce, createElement as fe } from "react";
import { v4 as Z } from "uuid";
import { createSlice as He } from "@reduxjs/toolkit";
var oe = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function qe() {
  if (xe) return ee;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(t, r, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), r.key !== void 0 && (i = "" + r.key), "key" in r) {
      s = {};
      for (var c in r)
        c !== "key" && (s[c] = r[c]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: t,
      key: i,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return ee.Fragment = n, ee.jsx = a, ee.jsxs = a, ee;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ve() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === M ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case R:
          return "Fragment";
        case g:
          return "Profiler";
        case z:
          return "StrictMode";
        case h:
          return "Suspense";
        case E:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case f:
            return "Portal";
          case y:
            return l.displayName || "Context";
          case m:
            return (l._context.displayName || "Context") + ".Consumer";
          case k:
            var x = l.render;
            return l = l.displayName, l || (l = x.displayName || x.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case _:
            return x = l.displayName || null, x !== null ? x : e(l.type) || "Memo";
          case S:
            x = l._payload, l = l._init;
            try {
              return e(l(x));
            } catch {
            }
        }
      return null;
    }
    function n(l) {
      return "" + l;
    }
    function a(l) {
      try {
        n(l);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var w = x.error, I = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return w.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), n(l);
      }
    }
    function t(l) {
      if (l === R) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === S)
        return "<...>";
      try {
        var x = e(l);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var l = C.A;
      return l === null ? null : l.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(l) {
      if (B.call(l, "key")) {
        var x = Object.getOwnPropertyDescriptor(l, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function c(l, x) {
      function w() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: w,
        configurable: !0
      });
    }
    function d() {
      var l = e(this.type);
      return K[l] || (K[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function u(l, x, w, I, J, Q) {
      var p = w.ref;
      return l = {
        $$typeof: A,
        type: l,
        key: x,
        props: w,
        _owner: I
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: d
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
        value: J
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function T(l, x, w, I, J, Q) {
      var p = x.children;
      if (p !== void 0)
        if (I)
          if (O(p)) {
            for (I = 0; I < p.length; I++)
              b(p[I]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(p);
      if (B.call(x, "key")) {
        p = e(l);
        var L = Object.keys(x).filter(function(he) {
          return he !== "key";
        });
        I = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", X[p + I] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          p,
          L,
          p
        ), X[p + I] = !0);
      }
      if (p = null, w !== void 0 && (a(w), p = "" + w), i(x) && (a(x.key), p = "" + x.key), "key" in x) {
        w = {};
        for (var V in x)
          V !== "key" && (w[V] = x[V]);
      } else w = x;
      return p && c(
        w,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), u(
        l,
        p,
        w,
        r(),
        J,
        Q
      );
    }
    function b(l) {
      P(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === S && (l._payload.status === "fulfilled" ? P(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function P(l) {
      return typeof l == "object" && l !== null && l.$$typeof === A;
    }
    var j = ke, A = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), C = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, O = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var F, K = {}, re = j.react_stack_bottom_frame.bind(
      j,
      s
    )(), Y = G(t(s)), X = {};
    te.Fragment = R, te.jsx = function(l, x, w) {
      var I = 1e4 > C.recentlyCreatedOwnerStacks++;
      return T(
        l,
        x,
        w,
        !1,
        I ? Error("react-stack-top-frame") : re,
        I ? G(t(l)) : Y
      );
    }, te.jsxs = function(l, x, w) {
      var I = 1e4 > C.recentlyCreatedOwnerStacks++;
      return T(
        l,
        x,
        w,
        !0,
        I ? Error("react-stack-top-frame") : re,
        I ? G(t(l)) : Y
      );
    };
  })()), te;
}
var Ee;
function We() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? oe.exports = qe() : oe.exports = Ve()), oe.exports;
}
var o = We();
const ge = "A4", W = "<p><br></p>", Ae = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ne = (e, n = ge) => ({
  id: Z(),
  index: e,
  size: n,
  content: W,
  images: [],
  isBreakPoint: !1
}), se = (e) => typeof e != "string" || e.trim() === "" ? W : e, Se = (e, n = ge) => (e.length > 0 ? e : [ne(0, n)]).map((t, r) => ({
  id: t.id || Z(),
  index: r,
  size: t.size || n,
  content: se(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), me = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || ge, t = Se(e.pages || [ne(0, a)], a), s = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (Ae[a] || Ae.A4).height
  }];
  return {
    id: Z(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || "continuous",
    continuousContent: e.continuousContent || W,
    pageBoundaries: e.pageBoundaries || s
  };
}, v = {
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
}, Ye = (e, n) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case v.INITIALIZE_DOCUMENT: {
      const { initialContent: t = W, pageSize: r = ge } = n.payload || {}, s = { ...ne(0, r), content: se(t) };
      return me({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case v.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: a
      };
    case v.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: r } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: se(r)
      }, {
        ...e,
        pages: s,
        updatedAt: a
      };
    }
    case v.UPDATE_PAGES: {
      const t = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, r = Se(t.pages || [], e.pageSize), s = Array.isArray(t.pageBreaks) ? t.pageBreaks : r.slice(0, -1).map((i, c) => ({
        id: `auto-break-${c}`,
        pageNumber: c + 1
      }));
      return {
        ...e,
        pages: r,
        activePage: Math.min(e.activePage, r.length - 1),
        pageBreaks: s,
        totalPages: r.length,
        updatedAt: a
      };
    }
    case v.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(t, 0, ne(t, e.pageSize));
      const s = r.map((c, d) => ({
        ...c,
        index: d,
        size: e.pageSize
      })), i = s.slice(0, -1).map((c, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: t,
        pageBreaks: i,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case v.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(t, 1);
      const s = r.map((d, u) => ({
        ...d,
        index: u,
        size: e.pageSize
      }));
      let i = e.activePage;
      i >= s.length ? i = s.length - 1 : t <= i && i > 0 && (i -= 1);
      const c = s.slice(0, -1).map((d, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: i,
        pageBreaks: c,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case v.SET_ACTIVE_PAGE: {
      const t = n.payload, r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t >= 0 && t < r ? {
        ...e,
        activePage: t,
        updatedAt: a
      } : e;
    }
    case v.UPDATE_PAGE_SIZE: {
      const t = n.payload, r = e.pages.map((i, c) => ({
        ...i,
        index: c,
        size: t
      })), s = r.slice(0, -1).map((i, c) => ({
        id: `auto-break-${c}`,
        pageNumber: c + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: r,
        pageBreaks: s,
        updatedAt: a
      };
    }
    case v.RESET_DOCUMENT:
      return me();
    case v.UPDATE_CONTINUOUS_CONTENT:
      return {
        ...e,
        continuousContent: se(n.payload),
        updatedAt: a
      };
    case v.UPDATE_PAGE_BOUNDARIES: {
      const t = n.payload || [], r = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: r,
        updatedAt: a
      };
    }
    case v.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: r } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let i = e.continuousContent;
      if (t === "end")
        i = i + s + "<p><br></p>";
      else if (typeof t == "number") {
        const c = i.substring(0, t), d = i.substring(t);
        i = c + s + d;
      } else if (typeof r == "number" && typeof document < "u") {
        const c = document.createElement("div");
        c.innerHTML = i;
        const d = c.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && d.length === 0)
          i = i + s + "<p><br></p>";
        else if (r < d.length) {
          const u = d[r], T = document.createElement("page-break");
          T.setAttribute("data-page-break", "true"), T.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const b = document.createElement("p");
          b.innerHTML = "<br>", u.parentNode.insertBefore(T, u.nextSibling), T.parentNode.insertBefore(b, T.nextSibling), i = c.innerHTML;
        } else
          i = i + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: i,
        updatedAt: a
      };
    }
    case v.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((c, d) => {
        c.setAttribute("data-page-number", String(d + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: a
      };
    }
    case v.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return t === "continuous" ? r = e.pages.map((c) => c.content).filter((c) => c && c !== W).join(`
`) || W : e.continuousContent && e.continuousContent !== W && (s = [{ ...ne(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: r,
        pages: s,
        updatedAt: a
      };
    }
    default:
      return e;
  }
}, Ne = $e(null), un = ({ children: e, initialState: n = {} }) => {
  const [a, t] = Ue(Ye, me(n)), r = ce(() => ({
    initializeDocument: (i) => t({ type: v.INITIALIZE_DOCUMENT, payload: i }),
    updateTitle: (i) => t({ type: v.UPDATE_TITLE, payload: i }),
    updatePageContent: (i) => t({ type: v.UPDATE_PAGE_CONTENT, payload: i }),
    updatePages: (i) => t({ type: v.UPDATE_PAGES, payload: i }),
    addPage: (i) => t({ type: v.ADD_PAGE, payload: i }),
    deletePage: (i) => t({ type: v.DELETE_PAGE, payload: i }),
    setActivePage: (i) => t({ type: v.SET_ACTIVE_PAGE, payload: i }),
    updatePageSize: (i) => t({ type: v.UPDATE_PAGE_SIZE, payload: i }),
    resetDocument: () => t({ type: v.RESET_DOCUMENT }),
    updateContinuousContent: (i) => t({ type: v.UPDATE_CONTINUOUS_CONTENT, payload: i }),
    updatePageBoundaries: (i) => t({ type: v.UPDATE_PAGE_BOUNDARIES, payload: i }),
    addPageBreak: (i) => t({ type: v.ADD_PAGE_BREAK, payload: i }),
    removePageBreak: (i) => t({ type: v.REMOVE_PAGE_BREAK, payload: i }),
    setEditorMode: (i) => t({ type: v.SET_EDITOR_MODE, payload: i }),
    insertPageAt: (i) => t({ type: v.INSERT_PAGE_AT, payload: i }),
    movePageTo: (i) => t({ type: v.MOVE_PAGE_TO, payload: i }),
    duplicatePage: (i) => t({ type: v.DUPLICATE_PAGE, payload: i })
  }), []), s = ce(() => ({
    state: a,
    actions: r,
    dispatch: t
  }), [a, r]);
  return /* @__PURE__ */ o.jsx(Ne.Provider, { value: s, children: e });
}, we = () => {
  const e = Ge(Ne);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, je = () => {
  const { state: e } = we();
  return e;
}, Me = () => {
  const { actions: e } = we();
  return e;
}, Je = () => {
  const [e, n] = ue({
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
  }), a = D((t, r = null) => {
    if (t === "fontSize") {
      const i = {
        "10px": "1",
        "12px": "2",
        "14px": "3",
        "16px": "4",
        "18px": "5",
        "24px": "6",
        "32px": "7"
      }[r] || "2";
      document.execCommand("fontSize", !1, i);
      const c = window.getSelection();
      if (c && c.rangeCount > 0) {
        const d = c.getRangeAt(0);
        if (d.toString()) {
          const T = document.createElement("span");
          T.style.fontSize = r, d.surroundContents(T);
        }
      }
    } else
      document.execCommand(t, !1, r);
    t === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : t === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : t === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : t === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : t === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : t === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : t === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : t === "justifyFull" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : t === "fontSize" && n((s) => ({ ...s, fontSize: r }));
  }, []);
  return {
    currentFormat: e,
    formatText: a
  };
}, ie = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, Pe = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Ze = (e, n) => {
  const a = Me(), t = U(null), r = U(null), s = U(e), i = U(!1);
  H(() => {
    s.current = e;
  }, [e]), H(() => () => {
    t.current && clearTimeout(t.current), r.current && clearTimeout(r.current);
  }, []);
  const c = D((g, m) => {
    let y = 0;
    for (let k = 0; k < g.length; k++) {
      const h = g[k], E = h.getBoundingClientRect().height;
      if (y + E > m)
        return { overflowIndex: k, overflowElement: h, accumulatedHeight: y };
      y += E;
    }
    return null;
  }, []), d = D((g, m) => {
    if (!g || !n?.current)
      return !1;
    try {
      const y = n.current, k = document.createElement("page-break");
      return k.setAttribute("data-page-break", "true"), k.setAttribute("contenteditable", "false"), k.setAttribute("data-page-number", m || "2"), g.parentNode.insertBefore(k, g), !0;
    } catch (y) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", y), !1;
    }
  }, [n]), u = D(() => {
    if (!(!n?.current || i.current))
      try {
        i.current = !0;
        const g = n.current, m = s.current || "A4", k = (ie[m] || ie.A4).height - Pe.top - Pe.bottom, h = Array.from(g.children), E = h.filter(
          (M) => M.tagName === "PAGE-BREAK" || M.getAttribute("data-page-break") === "true"
        ), _ = [];
        let S = [];
        for (const M of h)
          M.tagName === "PAGE-BREAK" || M.getAttribute("data-page-break") === "true" ? S.length > 0 && (_.push(S), S = []) : S.push(M);
        S.length > 0 && _.push(S), _.length === 0 && h.length > 0 && _.push(h.filter(
          (M) => !(M.tagName === "PAGE-BREAK" || M.getAttribute("data-page-break") === "true")
        ));
        let $ = !1;
        for (let M = 0; M < _.length; M++) {
          const C = _[M], B = c(C, k);
          if (B && B.overflowIndex > 0) {
            const O = M + 2;
            if (d(B.overflowElement, O)) {
              $ = !0;
              break;
            }
          }
        }
        if ($) {
          const M = g.innerHTML;
          a.updateContinuousContent(M), setTimeout(() => {
            P();
          }, 50);
        }
      } catch (g) {
        console.warn("[checkAndReflow] Reflow failed:", g);
      } finally {
        i.current = !1;
      }
  }, [n, c, d, a]), T = D((g = 500) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      r.current = null, u();
    }, g);
  }, [u]), b = D((g = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const m = g.pageSize || s.current || "A4", y = ie[m] || ie.A4, k = n.current, h = k.querySelectorAll('page-break, [data-page-break="true"]'), E = [];
    return E.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: y.height
      // No breakElement for first page
    }), h.forEach((_, S) => {
      const $ = _.getBoundingClientRect(), M = k.getBoundingClientRect(), C = $.top - M.top + k.scrollTop;
      E.push({
        id: `page-${S + 1}`,
        pageNumber: S + 2,
        top: C,
        height: y.height
        // Don't store breakElement - not serializable
      });
    }), E;
  }, [n]), P = D((g = {}) => {
    const m = b(g);
    return a.updatePageBoundaries(m), m;
  }, [b, a]), j = D((g = {}) => {
    t.current && clearTimeout(t.current);
    const m = typeof g.delay == "number" ? g.delay : 300;
    t.current = setTimeout(() => {
      t.current = null, P(g);
    }, Math.max(0, m));
  }, [P]), A = D((g) => {
    if (!g?.current || !n?.current)
      return 0;
    try {
      const m = g.current, k = n.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (k.length === 0)
        return 0;
      const h = m.getBoundingClientRect(), E = h.top + h.height / 2;
      for (let _ = k.length - 1; _ >= 0; _--)
        if (k[_].getBoundingClientRect().top < E)
          return _ + 1;
      return 0;
    } catch (m) {
      return console.warn("[getCurrentPage] Failed to calculate page:", m), 0;
    }
  }, [n]), f = D((g) => {
    if (!n?.current)
      return;
    const m = n.current;
    m.focus();
    try {
      let y = null, k = 0;
      if (g === 0)
        y = m.firstChild, k = 0;
      else {
        const E = m.querySelectorAll('page-break, [data-page-break="true"]')[g - 1];
        E && E.nextSibling && (y = E.nextSibling, k = 0);
      }
      if (y) {
        const h = document.createRange(), E = window.getSelection();
        y.nodeType === Node.TEXT_NODE ? h.setStart(y, k) : h.setStart(y, 0), h.collapse(!0), E.removeAllRanges(), E.addRange(h);
      }
    } catch (y) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", y);
    }
  }, [n]), R = D((g, m) => {
    if (!m?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const y = m.current, k = n.current;
    try {
      let h = null;
      if (g === 0)
        h = k;
      else {
        const _ = k.querySelectorAll('page-break, [data-page-break="true"]')[g - 1];
        if (_)
          h = _;
        else {
          console.warn("[scrollToPage] Page break not found for page", g);
          return;
        }
      }
      if (h) {
        const E = h.getBoundingClientRect(), _ = y.getBoundingClientRect(), S = y.scrollTop + (E.top - _.top);
        console.log("[scrollToPage] Scrolling to page", g, "scrollTop:", S), y.scrollTo({
          top: S,
          behavior: "smooth"
        }), setTimeout(() => {
          f(g);
        }, 400);
      }
    } catch (h) {
      console.error("[scrollToPage] Error:", h);
    }
  }, [n, f]), z = D((g) => {
    if (!n?.current)
      return !1;
    const m = n.current;
    if (b().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const k = Array.from(m.querySelectorAll('page-break, [data-page-break="true"]'));
      if (g > k.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const h = window.getSelection();
      let E = !1, _ = [], S = null;
      if (g === 0) {
        const C = k[0];
        if (!C)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let B = m.firstChild;
        for (; B && B !== C; )
          _.push(B), B = B.nextSibling;
        S = C;
      } else {
        const C = k[g - 1];
        if (!C)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const B = k[g];
        let O = C.nextSibling;
        for (; O && O !== B; )
          _.push(O), O = O.nextSibling;
        S = C;
      }
      if (h && h.rangeCount > 0) {
        const B = h.getRangeAt(0).startContainer;
        for (const O of _)
          if (O.contains(B) || O === B) {
            E = !0;
            break;
          }
      }
      S && S.parentNode && S.remove(), _.forEach((C) => {
        C.parentNode && C.remove();
      }), m.querySelectorAll('page-break, [data-page-break="true"]').forEach((C, B) => {
        C.setAttribute("data-page-number", String(B + 2));
      }), E && setTimeout(() => {
        f(0);
      }, 50);
      const M = m.innerHTML;
      return a.updateContinuousContent(M), setTimeout(() => {
        P();
      }, 100), !0;
    } catch (k) {
      return console.error("[removePageAndContent] Failed to remove page:", k), !1;
    }
  }, [n, b, a, P, f]);
  return {
    calculatePageBoundaries: b,
    checkAndUpdateBoundaries: j,
    updateBoundaries: P,
    getCurrentPage: A,
    scrollToPage: R,
    positionCursorAtPage: f,
    checkAndReflow: u,
    triggerAutoReflow: T,
    removePageAndContent: z,
    boundaryTimeoutRef: t,
    reflowTimeoutRef: r
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ke = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, t) => t ? t.toUpperCase() : a.toLowerCase()
), Te = (e) => {
  const n = Ke(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Be = (...e) => e.filter((n, a, t) => !!n && n.trim() !== "" && t.indexOf(n) === a).join(" ").trim(), Xe = (e) => {
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
var Qe = {
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
const et = Ce(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: s,
    iconNode: i,
    ...c
  }, d) => fe(
    "svg",
    {
      ref: d,
      ...Qe,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(a) * 24 / Number(n) : a,
      className: Be("lucide", r),
      ...!s && !Xe(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([u, T]) => fe(u, T)),
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
const N = (e, n) => {
  const a = Ce(
    ({ className: t, ...r }, s) => fe(et, {
      ref: s,
      iconNode: n,
      className: Be(
        `lucide-${Fe(Te(e))}`,
        `lucide-${e}`,
        t
      ),
      ...r
    })
  );
  return a.displayName = Te(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], nt = N("bold", tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ie = N("chevron-left", at);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], De = N("chevron-right", rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], it = N("file-check", ot);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], de = N("file-text", st);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ct = N("hash", lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], dt = N("heading-1", ut);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], pt = N("heading-2", gt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], ft = N("heading-3", ht);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], bt = N("image", mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], xt = N("italic", kt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Et = N("link", yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Pt = N("list-ordered", At);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Re = N("list", Tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _t = N("plus", vt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], St = N("redo", Ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], wt = N("settings", Nt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Mt = N("square-check-big", jt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], It = N("strikethrough", Bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Rt = N("table", Dt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Ot = N("text-align-center", zt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], $t = N("text-align-end", Lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Gt = N("text-align-justify", Ut);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], qt = N("text-align-start", Ht);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Wt = N("underline", Vt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Jt = N("undo", Yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ft = N("x", Zt), Kt = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: t, pageCount: r }) => {
  const s = je(), { pages: i, activePage: c, continuousContent: d, editorMode: u } = s, [T, b] = ue(0), [P, j] = ue([]);
  H(() => {
    if (t !== void 0 && r !== void 0) {
      if (b(t), d) {
        const z = document.createElement("div");
        z.innerHTML = d;
        const g = z.querySelectorAll("h1, h2, h3, h4, h5, h6"), m = Array.from(g).map((y, k) => {
          const h = parseInt(y.tagName.charAt(1)), E = y.textContent.trim();
          return E ? {
            id: `heading-${k}`,
            level: h,
            text: E,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        j(m);
      }
      return;
    }
    let f = 0;
    const R = [];
    i.forEach((z, g) => {
      if (z.content) {
        const m = document.createElement("div");
        m.innerHTML = z.content;
        const k = (m.textContent || m.innerText || "").trim().split(/\s+/).filter((E) => E.length > 0);
        f += k.length, m.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((E, _) => {
          const S = parseInt(E.tagName.charAt(1)), $ = E.textContent.trim();
          $ && R.push({
            id: `heading-${g}-${_}`,
            level: S,
            text: $,
            page: g + 1
          });
        });
      }
    }), b(f), j(R);
  }, [i, t, r, d]);
  const A = r !== void 0 ? r : i.length;
  return /* @__PURE__ */ o.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ o.jsx(de, { size: 18 }),
            /* @__PURE__ */ o.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ o.jsx(De, { size: 16 }) : /* @__PURE__ */ o.jsx(Ie, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(it, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: A })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(ct, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: T.toLocaleString() })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(de, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: c + 1 })
            ] })
          ] }),
          P.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsxs("h3", { children: [
              /* @__PURE__ */ o.jsx(Re, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "document-outline", "data-testid": "outline", children: P.map((f) => {
              const R = f.level === 1 ? dt : f.level === 2 ? pt : ft;
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${f.level}`,
                  style: { marginLeft: `${(f.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ o.jsx(R, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ o.jsx("span", { className: "outline-text", children: f.text }),
                    /* @__PURE__ */ o.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      f.page
                    ] })
                  ]
                },
                f.id
              );
            }) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ o.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ o.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Xt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Qt(e) {
  return new Promise((n, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const r = new FileReader();
    r.onload = (s) => {
      const i = s.target.result;
      if (i.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const u = `editor-image-${Xt()}`;
        localStorage.setItem(u, i), n(u);
      } catch (u) {
        u.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(u);
      }
    }, r.onerror = () => {
      a(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function dn(e) {
  return localStorage.getItem(e);
}
function gn(e) {
  localStorage.removeItem(e);
}
function pn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function hn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class en {
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
  _format(n, a, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${a}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, a) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, a) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, a) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, a) {
  }
}
const ve = new en("Editor"), tn = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: a,
  onPageSizeChange: t,
  onAddPageBreak: r
}) => {
  const s = async (i) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(i.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (i.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const d = await Qt(i), u = localStorage.getItem(d);
      u && (document.execCommand("insertImage", !1, u), ve.info("Image inserted", { key: d }));
    } catch (c) {
      ve.error("Error uploading image", c);
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ o.jsx(nt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ o.jsx(xt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ o.jsx(Wt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ o.jsx(It, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ o.jsx(qt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ o.jsx(Ot, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ o.jsx($t, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ o.jsx(Gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (i) => a("fontName", i.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ o.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ o.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ o.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ o.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (i) => a("fontSize", i.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ o.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ o.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ o.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ o.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ o.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ o.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ o.jsx(Re, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ o.jsx(Pt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ o.jsx(Mt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && a("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ o.jsx(Et, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ o.jsx(Rt, { size: 16 })
      }
    ),
    r && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: r,
        title: "Insert Page Break",
        children: /* @__PURE__ */ o.jsx(de, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("undo"),
        title: "Undo",
        children: /* @__PURE__ */ o.jsx(Jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => a("redo"),
        title: "Redo",
        children: /* @__PURE__ */ o.jsx(St, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (i) => i.target.files[0] && s(i.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ o.jsx(bt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        value: n,
        onChange: (i) => t(i.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ o.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, nn = ({
  content: e,
  dimensions: n,
  pageSize: a,
  pageBoundaries: t = [],
  editorRef: r,
  onInput: s,
  onKeyDown: i,
  onClick: c,
  onScroll: d
}) => {
  const u = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, T = (b) => {
    if (b.key === "Tab")
      return b.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const P = window.getSelection();
    if (!P || P.rangeCount === 0) return;
    const j = P.getRangeAt(0), { startContainer: A, endContainer: f } = j, R = (z) => z ? z.nodeType === Node.ELEMENT_NODE ? z.tagName === "PAGE-BREAK" || z.getAttribute("data-page-break") === "true" : z.parentElement && R(z.parentElement) : !1;
    if ((b.key === "Backspace" || b.key === "Delete") && (R(A) || R(f)))
      return b.preventDefault(), !1;
    i && i(b);
  };
  return /* @__PURE__ */ o.jsx(
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
      children: /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: r,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`,
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
          onKeyDown: T,
          onClick: c,
          onScroll: d,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, an = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: a = "A4",
  onNavigate: t,
  onAddPage: r,
  onDeletePage: s,
  onPageSizeChange: i
} = {}) => {
  const c = Math.max(e?.length || 0, 1), d = (A) => {
    t && t(A);
  }, u = () => {
    r && r();
  }, T = (A) => {
    if (c <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    s && s(A);
  }, b = (A) => {
    i && i(A);
  }, P = () => {
    n > 0 && d(n - 1);
  }, j = () => {
    n < c - 1 && d(n + 1);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ o.jsx(wt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: a,
          onChange: (A) => b(A.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ o.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "page-navigation-controls", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: P,
          disabled: n === 0,
          "aria-label": "Previous page",
          title: "Previous page (Ctrl+↑)",
          children: /* @__PURE__ */ o.jsx(Ie, { size: 16 })
        }
      ),
      /* @__PURE__ */ o.jsxs("span", { className: "page-counter", "aria-live": "polite", children: [
        "Page ",
        n + 1,
        " of ",
        c
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: j,
          disabled: n >= c - 1,
          "aria-label": "Next page",
          title: "Next page (Ctrl+↓)",
          children: /* @__PURE__ */ o.jsx(De, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((A, f) => /* @__PURE__ */ o.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${f === n ? "active" : ""}`,
          onClick: () => d(f),
          "aria-label": `Go to page ${f + 1}`,
          "aria-current": f === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ o.jsx(de, { size: 14 }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Page ",
              f + 1
            ] })
          ]
        }
      ),
      c > 1 && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (R) => {
            R.stopPropagation(), T(f);
          },
          "aria-label": `Delete page ${f + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ o.jsx(Ft, { size: 14 })
        }
      )
    ] }, A.id || `page-${f}`)) }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: u,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ o.jsx(_t, { size: 16 }),
          /* @__PURE__ */ o.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, rn = ke.memo(an), _e = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, fn = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: t,
  onPageSizeChange: r,
  showSidebar: s = !0,
  showToolbar: i = !0,
  showPageManager: c = !0
}) => {
  const d = je(), u = Me(), { pageSize: T, continuousContent: b, pageBoundaries: P, activePage: j } = d, A = U(null), f = U(null), { currentFormat: R, formatText: z } = Je(), {
    checkAndUpdateBoundaries: g,
    getCurrentPage: m,
    scrollToPage: y,
    positionCursorAtPage: k,
    updateBoundaries: h,
    triggerAutoReflow: E,
    removePageAndContent: _
  } = Ze(T, f), S = ce(() => _e[T] || _e.A4, [T]), [$, M] = ue(!1), C = U(null), B = U(!1), O = U(!1), G = U(!1);
  H(() => {
    if (f.current && !G.current) {
      f.current.innerHTML = b, G.current = !0;
      const p = setTimeout(() => {
        h();
      }, 50);
      return () => clearTimeout(p);
    }
  }, [b, h]);
  const F = U(b);
  H(() => {
    f.current && G.current && F.current !== b && (f.current.innerHTML !== b && (f.current.innerHTML = b, setTimeout(() => {
      h(), B.current && (B.current = !1, setTimeout(() => {
        const L = P.length > 0 ? P.length - 1 : 0;
        u.setActivePage(L), y(L, A);
      }, 50));
    }, 50)), F.current = b);
  }, [b, h, P.length, u, y]);
  const K = U(!1);
  H(() => {
    if (!K.current && f.current) {
      K.current = !0;
      const p = setTimeout(() => {
        h();
      }, 100);
      return () => clearTimeout(p);
    }
  }, [h]), H(() => {
    const p = setTimeout(() => {
      f.current && f.current.focus();
    }, 200);
    return () => clearTimeout(p);
  }, []);
  const re = D((p) => {
    const L = p.currentTarget.innerHTML;
    u.updateContinuousContent(L), g(), E();
    const V = m(A);
    V !== j && u.setActivePage(V);
  }, [g, u, m, j, E, A]), Y = D((p) => {
    u.updatePageSize(p), h({ pageSize: p }), r && r(p);
  }, [u, h, r]), X = D((p) => {
    O.current = !0, u.setActivePage(p), y(p, A), setTimeout(() => {
      O.current = !1;
    }, 500), n && n(p);
  }, [u, y, n]), l = D(() => {
    B.current = !0, u.addPageBreak({ position: "end" }), a && a();
  }, [u, a]), x = D(() => {
    const p = window.getSelection();
    if (p && p.rangeCount > 0) {
      if (!f?.current) return;
      const he = `<page-break data-page-break="true" contenteditable="false" data-page-number="${f.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, he), setTimeout(() => {
        h();
        const Le = m(A);
        u.setActivePage(Le);
      }, 150);
    }
  }, [h, m, u, A]), w = D((p) => {
    if (P.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    _(p) && (u.setActivePage(0), t && t(p));
  }, [P.length, _, u, t]), I = D(() => {
    !A.current || !f.current || O.current || (C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      if (O.current) {
        C.current = null;
        return;
      }
      const p = m(A);
      p !== j && u.setActivePage(p), C.current = null;
    }, 100));
  }, [m, j, u, A]), J = ce(() => {
    if (!b) return 0;
    const L = b.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return L ? L.length : 0;
  }, [b]), Q = P.length || 1;
  return H(() => () => {
    C.current && clearTimeout(C.current);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "multi-page-editor", children: [
    i && /* @__PURE__ */ o.jsx(
      tn,
      {
        currentFormat: R,
        pageSize: T,
        onFormatText: z,
        onPageSizeChange: Y,
        onAddPageBreak: x
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ o.jsx(
        Kt,
        {
          editorView: null,
          isCollapsed: $,
          onToggle: () => M((p) => !p),
          wordCount: J,
          pageCount: Q
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: A,
          onScroll: I,
          children: /* @__PURE__ */ o.jsx(
            nn,
            {
              content: b,
              dimensions: S,
              pageSize: T,
              pageBoundaries: P,
              editorRef: f,
              onInput: re,
              onClick: () => f.current?.focus()
            }
          )
        }
      ),
      c && /* @__PURE__ */ o.jsx("div", { className: "page-manager-sidebar", children: e ? ke.cloneElement(e, {
        onNavigate: X,
        onAddPage: l,
        onDeletePage: w,
        onPageSizeChange: Y
      }) : /* @__PURE__ */ o.jsx(
        rn,
        {
          pageBoundaries: P,
          activePage: j,
          pageSize: T,
          onNavigate: X,
          onAddPage: l,
          onDeletePage: w,
          onPageSizeChange: Y
        }
      ) })
    ] })
  ] });
}, pe = "A4", q = "<p><br></p>", ae = (e, n = pe) => ({
  id: Z(),
  index: e,
  size: n,
  content: q,
  images: [],
  isBreakPoint: !1
}), ze = (e, n = pe) => (e.length > 0 ? e : [ae(0, n)]).map((t, r) => ({
  id: t.id || Z(),
  index: r,
  size: t.size || n,
  content: le(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), le = (e) => typeof e != "string" || e.trim() === "" ? q : e, be = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || pe, t = ze(e.pages || [ae(0, a)], a), r = {
    A4: { width: 794, height: 1123 },
    Letter: { width: 816, height: 1056 },
    Legal: { width: 816, height: 1344 }
  }, i = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (r[a] || r.A4).height
  }];
  return {
    id: Z(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || q,
    pageBoundaries: e.pageBoundaries || i
  };
}, on = be(), Oe = He({
  name: "document",
  initialState: on,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: a = q, pageSize: t = pe } = n.payload || {}, r = { ...ae(0, t), content: le(a) };
      return be({
        title: e.title,
        pageSize: t,
        pages: [r]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: a, content: t } = n.payload;
      a < 0 || a >= e.pages.length || (e.pages[a].content = le(t), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const a = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, t = ze(a.pages || [], e.pageSize);
      e.pages = t, e.activePage = Math.min(e.activePage, t.length - 1), e.pageBreaks = Array.isArray(a.pageBreaks) ? a.pageBreaks : t.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = t.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const a = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(a, 0, ae(a, e.pageSize)), e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: e.pageSize
      })), e.activePage = a, e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const a = n.payload;
      e.pages.length <= 1 || (e.pages.splice(a, 1), e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : a <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const a = n.payload, t = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      a >= 0 && a < t && (e.activePage = a, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const a = n.payload;
      e.pageSize = a, e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: a
      })), e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => be(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = le(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.activePage >= e.pageBoundaries.length && (e.activePage = Math.max(0, e.pageBoundaries.length - 1)), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: a = "end", pageIndex: t } = n.payload || {}, r = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (a === "end")
        e.continuousContent = e.continuousContent + r + "<p><br></p>";
      else if (typeof a == "number") {
        const s = e.continuousContent.substring(0, a), i = e.continuousContent.substring(a);
        e.continuousContent = s + r + i;
      } else if (typeof t == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const i = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (t === 0 && i.length === 0)
          e.continuousContent = e.continuousContent + r + "<p><br></p>";
        else if (t < i.length) {
          const c = i[t], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", c.parentNode.insertBefore(d, c.nextSibling), d.parentNode.insertBefore(u, d.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + r + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (typeof a == "number" && typeof document < "u") {
        const t = document.createElement("div");
        t.innerHTML = e.continuousContent;
        const r = t.querySelectorAll('page-break, [data-page-break="true"]');
        r[a] && r[a].remove(), t.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, c) => {
          i.setAttribute("data-page-number", String(c + 2));
        }), e.continuousContent = t.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const a = n.payload;
      if (a !== e.editorMode) {
        if (e.editorMode = a, a === "continuous") {
          const t = e.pages.map((r) => r.content).filter((r) => r && r !== q).join(`
`);
          e.continuousContent = t || q;
        } else
          e.continuousContent && e.continuousContent !== q && (e.pages = [{ ...ae(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: a, content: t = q } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent;
          const s = r.querySelectorAll('page-break, [data-page-break="true"]'), i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (a === 0)
            e.continuousContent = t + i + e.continuousContent;
          else if (a >= s.length)
            e.continuousContent = e.continuousContent + i + t;
          else {
            const c = s[a - 1], d = document.createElement("div");
            d.innerHTML = t;
            const u = document.createElement("page-break");
            u.setAttribute("data-page-break", "true"), u.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), c.parentNode.insertBefore(d, c.nextSibling), c.parentNode.insertBefore(u, d.nextSibling), e.continuousContent = r.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: a, toIndex: t } = n.payload || {};
      if (!(typeof a != "number" || typeof t != "number") && !(a < 0 || t < 0 || a === t)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent, Array.from(r.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let i = r.firstChild, c = [];
          for (; i; )
            i.nodeType === 1 && (i.tagName.toLowerCase() === "page-break" || i.getAttribute("data-page-break") === "true") ? (s.push(c), c = []) : c.push(i.cloneNode(!0)), i = i.nextSibling;
          if (c.length > 0 && s.push(c), a >= s.length || t >= s.length)
            return;
          const [d] = s.splice(a, 1);
          s.splice(t, 0, d);
          const u = [];
          s.forEach((T, b) => {
            T.forEach((P) => u.push(P.outerHTML || P.textContent)), b < s.length - 1 && u.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = u.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const t = document.createElement("div");
          t.innerHTML = e.continuousContent;
          const r = Array.from(t.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], i = t.firstChild, c = 0;
          for (; i; ) {
            if (i.nodeType === 1 && (i.tagName.toLowerCase() === "page-break" || i.getAttribute("data-page-break") === "true")) {
              if (c === a)
                break;
              c++, s = [];
            } else c === a && s.push(i.cloneNode(!0));
            i = i.nextSibling;
          }
          if (s.length > 0 && a < r.length) {
            const d = r[a], b = s.map((A) => A.outerHTML || A.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', P = document.createElement("div");
            P.innerHTML = b;
            let j = d;
            Array.from(P.children).forEach((A) => {
              j.parentNode.insertBefore(A.cloneNode(!0), j.nextSibling), j = j.nextSibling;
            }), e.continuousContent = t.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: mn,
  updateTitle: bn,
  updatePageContent: kn,
  updatePages: xn,
  addPage: yn,
  deletePage: En,
  setActivePage: An,
  updatePageSize: Pn,
  resetDocument: Tn,
  updateContinuousContent: vn,
  updatePageBoundaries: _n,
  addPageBreak: Cn,
  removePageBreak: Sn,
  setEditorMode: Nn,
  insertPageAt: wn,
  movePageTo: jn,
  duplicatePage: Mn
} = Oe.actions, Bn = Oe.reducer, In = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  fn as ContentEditableEditor,
  nn as ContinuousPageView,
  un as DocumentProvider,
  tn as EditorToolbar,
  In as PAGE_DIMENSIONS,
  rn as PageManager,
  Kt as Sidebar,
  yn as addPage,
  Cn as addPageBreak,
  pn as clearImages,
  gn as deleteImage,
  En as deletePage,
  Bn as documentReducer,
  Mn as duplicatePage,
  hn as getAllImageKeys,
  dn as getImage,
  mn as initializeDocument,
  wn as insertPageAt,
  en as logger,
  jn as movePageTo,
  Sn as removePageBreak,
  Tn as resetDocument,
  Qt as saveImage,
  An as setActivePage,
  Nn as setEditorMode,
  vn as updateContinuousContent,
  _n as updatePageBoundaries,
  kn as updatePageContent,
  Pn as updatePageSize,
  xn as updatePages,
  bn as updateTitle,
  Ze as useContinuousReflow,
  we as useDocument,
  Me as useDocumentActions,
  je as useDocumentState,
  Je as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
