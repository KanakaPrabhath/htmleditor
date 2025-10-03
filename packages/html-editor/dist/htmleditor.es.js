import me, { useState as ne, useCallback as _, useRef as H, useEffect as J } from "react";
import { useDispatch as he, useSelector as be } from "react-redux";
import { createSlice as Se } from "@reduxjs/toolkit";
import { v4 as le } from "uuid";
var Z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Ee() {
  if (ce) return W;
  ce = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(o, i, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      s = {};
      for (var f in i)
        f !== "key" && (s[f] = i[f]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: d,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return W.Fragment = n, W.jsx = r, W.jsxs = r, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Ae() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === E ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case O:
          return "Fragment";
        case c:
          return "Profiler";
        case N:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case I:
            return "Portal";
          case b:
            return t.displayName || "Context";
          case g:
            return (t._context.displayName || "Context") + ".Consumer";
          case l:
            var u = t.render;
            return t = t.displayName, t || (t = u.displayName || u.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case w:
            return u = t.displayName || null, u !== null ? u : e(t.type) || "Memo";
          case S:
            u = t._payload, t = t._init;
            try {
              return e(t(u));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function r(t) {
      try {
        n(t);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var A = u.error, T = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return A.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), n(t);
      }
    }
    function o(t) {
      if (t === O) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === S)
        return "<...>";
      try {
        var u = e(t);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = v.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(t) {
      if (P.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function f(t, u) {
      function A() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: A,
        configurable: !0
      });
    }
    function j() {
      var t = e(this.type);
      return V[t] || (V[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function p(t, u, A, T, K, ae) {
      var R = A.ref;
      return t = {
        $$typeof: C,
        type: t,
        key: u,
        props: A,
        _owner: T
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function B(t, u, A, T, K, ae) {
      var R = u.children;
      if (R !== void 0)
        if (T)
          if (D(R)) {
            for (T = 0; T < R.length; T++)
              k(R[T]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(R);
      if (P.call(u, "key")) {
        R = e(t);
        var U = Object.keys(u).filter(function(ke) {
          return ke !== "key";
        });
        T = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", x[R + T] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          R,
          U,
          R
        ), x[R + T] = !0);
      }
      if (R = null, A !== void 0 && (r(A), R = "" + A), d(u) && (r(u.key), R = "" + u.key), "key" in u) {
        A = {};
        for (var oe in u)
          oe !== "key" && (A[oe] = u[oe]);
      } else A = u;
      return R && f(
        A,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), p(
        t,
        R,
        A,
        i(),
        K,
        ae
      );
    }
    function k(t) {
      y(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === S && (t._payload.status === "fulfilled" ? y(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function y(t) {
      return typeof t == "object" && t !== null && t.$$typeof === C;
    }
    var L = me, C = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), v = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, D = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    L = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var G, V = {}, F = L.react_stack_bottom_frame.bind(
      L,
      s
    )(), X = $(o(s)), x = {};
    Y.Fragment = O, Y.jsx = function(t, u, A) {
      var T = 1e4 > v.recentlyCreatedOwnerStacks++;
      return B(
        t,
        u,
        A,
        !1,
        T ? Error("react-stack-top-frame") : F,
        T ? $(o(t)) : X
      );
    }, Y.jsxs = function(t, u, A) {
      var T = 1e4 > v.recentlyCreatedOwnerStacks++;
      return B(
        t,
        u,
        A,
        !0,
        T ? Error("react-stack-top-frame") : F,
        T ? $(o(t)) : X
      );
    };
  })()), Y;
}
var de;
function ye() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? Z.exports = Ee() : Z.exports = Ae()), Z.exports;
}
var a = ye();
const re = "A4", M = "<p><br></p>", q = (e, n = re) => ({
  id: le(),
  index: e,
  size: n,
  content: M,
  images: [],
  isBreakPoint: !1
}), xe = (e, n = re) => (e.length > 0 ? e : [q(0, n)]).map((o, i) => ({
  id: o.id || le(),
  index: i,
  size: o.size || n,
  content: te(o.content),
  images: o.images || [],
  isBreakPoint: !!o.isBreakPoint
})), te = (e) => typeof e != "string" || e.trim() === "" ? M : e, ie = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || re, o = xe(e.pages || [q(0, r)], r);
  return {
    id: le(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: r,
    pages: o,
    activePage: e.activePage && e.activePage < o.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: o.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || M,
    pageBoundaries: e.pageBoundaries || []
  };
}, Pe = ie(), ve = Se({
  name: "document",
  initialState: Pe,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: r = M, pageSize: o = re } = n.payload || {}, i = { ...q(0, o), content: te(r) };
      return ie({
        title: e.title,
        pageSize: o,
        pages: [i]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: r, content: o } = n.payload;
      r < 0 || r >= e.pages.length || (e.pages[r].content = te(o), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const r = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, o = xe(r.pages || [], e.pageSize);
      e.pages = o, e.activePage = Math.min(e.activePage, o.length - 1), e.pageBreaks = Array.isArray(r.pageBreaks) ? r.pageBreaks : o.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = o.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const r = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(r, 0, q(r, e.pageSize)), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage = r, e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const r = n.payload;
      e.pages.length <= 1 || (e.pages.splice(r, 1), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : r <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const r = n.payload;
      r >= 0 && r < e.pages.length && r !== e.activePage && (e.activePage = r, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const r = n.payload;
      e.pageSize = r, e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: r
      })), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => ie(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = te(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: r = "end" } = n.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (r === "end")
        e.continuousContent = e.continuousContent + o + "<p><br></p>";
      else if (typeof r == "number") {
        const i = e.continuousContent.substring(0, r), s = e.continuousContent.substring(r);
        e.continuousContent = i + o + s;
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (typeof r == "number" && typeof document < "u") {
        const o = document.createElement("div");
        o.innerHTML = e.continuousContent;
        const i = o.querySelectorAll('page-break, [data-page-break="true"]');
        i[r] && i[r].remove(), o.querySelectorAll('page-break, [data-page-break="true"]').forEach((d, f) => {
          d.setAttribute("data-page-number", String(f + 2));
        }), e.continuousContent = o.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const r = n.payload;
      if (r !== e.editorMode) {
        if (e.editorMode = r, r === "continuous") {
          const o = e.pages.map((i) => i.content).filter((i) => i && i !== M).join(`
`);
          e.continuousContent = o || M;
        } else
          e.continuousContent && e.continuousContent !== M && (e.pages = [{ ...q(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: He,
  updateTitle: Ge,
  updatePageContent: We,
  updatePages: Ye,
  addPage: qe,
  deletePage: Je,
  setActivePage: Q,
  updatePageSize: Ce,
  resetDocument: Ve,
  updateContinuousContent: se,
  updatePageBoundaries: je,
  addPageBreak: we,
  removePageBreak: Fe,
  setEditorMode: Xe
} = ve.actions, Ke = ve.reducer, Ne = () => {
  const [e, n] = ne({
    bold: !1,
    italic: !1,
    underline: !1,
    strikethrough: !1,
    alignLeft: !1,
    alignCenter: !1,
    alignRight: !1,
    alignJustify: !1,
    fontFamily: "Arial",
    fontSize: "16px"
  }), r = _((o, i = null) => {
    document.execCommand(o, !1, i), o === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : o === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : o === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : o === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : o === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : o === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : o === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : o === "justifyFull" && n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 }));
  }, []);
  return {
    currentFormat: e,
    formatText: r
  };
}, ee = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ge = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Te = (e, n) => {
  const r = he(), o = H(null), i = H(null), s = H(e), d = H(!1);
  J(() => {
    s.current = e;
  }, [e]), J(() => () => {
    o.current && clearTimeout(o.current), i.current && clearTimeout(i.current);
  }, []);
  const f = _((c, g) => {
    let b = 0;
    for (let l = 0; l < c.length; l++) {
      const h = c[l], m = h.getBoundingClientRect().height;
      if (b + m > g)
        return { overflowIndex: l, overflowElement: h, accumulatedHeight: b };
      b += m;
    }
    return null;
  }, []), j = _((c, g) => {
    if (!c || !n?.current)
      return !1;
    try {
      const b = n.current, l = document.createElement("page-break");
      return l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", g || "2"), c.parentNode.insertBefore(l, c), !0;
    } catch (b) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", b), !1;
    }
  }, [n]), p = _(() => {
    if (!(!n?.current || d.current))
      try {
        d.current = !0;
        const c = n.current, g = s.current || "A4", l = (ee[g] || ee.A4).height - ge.top - ge.bottom, h = Array.from(c.children), m = h.filter(
          (E) => E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true"
        ), w = [];
        let S = [];
        for (const E of h)
          E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true" ? S.length > 0 && (w.push(S), S = []) : S.push(E);
        S.length > 0 && w.push(S), w.length === 0 && h.length > 0 && w.push(h.filter(
          (E) => !(E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        ));
        let z = !1;
        for (let E = 0; E < w.length; E++) {
          const v = w[E], P = f(v, l);
          if (P && P.overflowIndex > 0) {
            const D = E + 2;
            if (j(P.overflowElement, D)) {
              z = !0;
              break;
            }
          }
        }
        if (z) {
          const E = c.innerHTML;
          r(se(E)), setTimeout(() => {
            y();
          }, 50);
        }
      } catch (c) {
        console.warn("[checkAndReflow] Reflow failed:", c);
      } finally {
        d.current = !1;
      }
  }, [n, f, j, r]), B = _((c = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, p();
    }, c);
  }, [p]), k = _((c = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const g = c.pageSize || s.current || "A4", b = ee[g] || ee.A4, l = n.current, h = l.querySelectorAll('page-break, [data-page-break="true"]'), m = [];
    return m.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: b.height
      // No breakElement for first page
    }), h.forEach((w, S) => {
      const z = w.getBoundingClientRect(), E = l.getBoundingClientRect(), v = z.top - E.top + l.scrollTop;
      m.push({
        id: `page-${S + 1}`,
        pageNumber: S + 2,
        top: v,
        height: b.height
        // Don't store breakElement - not serializable
      });
    }), m;
  }, [n]), y = _((c = {}) => {
    const g = k(c);
    return r(je(g)), g;
  }, [k, r]), L = _((c = {}) => {
    o.current && clearTimeout(o.current);
    const g = typeof c.delay == "number" ? c.delay : 300;
    o.current = setTimeout(() => {
      o.current = null, y(c);
    }, Math.max(0, g));
  }, [y]), C = _(() => {
    if (!n?.current)
      return 0;
    const c = window.getSelection();
    if (!c || c.rangeCount === 0)
      return 0;
    try {
      const g = c.getRangeAt(0), b = n.current;
      let l = g.startContainer;
      const h = Array.from(b.querySelectorAll('page-break, [data-page-break="true"]'));
      if (h.length === 0)
        return 0;
      for (; l && l !== b; ) {
        for (let m = h.length - 1; m >= 0; m--)
          if (h[m].compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING)
            return m + 1;
        l = l.parentNode;
      }
      return 0;
    } catch (g) {
      return console.warn("[getCurrentPage] Failed to calculate page:", g), 0;
    }
  }, [n]), I = _((c, g) => {
    if (!g?.current || !n?.current)
      return;
    n.current;
    const l = k().find((h) => h.pageNumber === c + 1);
    l && (g.current.scrollTo({
      top: l.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      O(c);
    }, 300));
  }, [n]), O = _((c) => {
    if (!n?.current)
      return;
    const g = n.current;
    g.focus();
    try {
      let b = null, l = 0;
      if (c === 0)
        b = g.firstChild, l = 0;
      else {
        const m = g.querySelectorAll('page-break, [data-page-break="true"]')[c - 1];
        m && m.nextSibling && (b = m.nextSibling, l = 0);
      }
      if (b) {
        const h = document.createRange(), m = window.getSelection();
        b.nodeType === Node.TEXT_NODE ? h.setStart(b, l) : h.setStart(b, 0), h.collapse(!0), m.removeAllRanges(), m.addRange(h);
      }
    } catch (b) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", b);
    }
  }, [n]), N = _((c) => {
    if (!n?.current)
      return !1;
    const g = n.current;
    if (k().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const l = Array.from(g.querySelectorAll('page-break, [data-page-break="true"]'));
      if (c > l.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const h = window.getSelection();
      let m = !1, w = [], S = null;
      if (c === 0) {
        const v = l[0];
        if (!v)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let P = g.firstChild;
        for (; P && P !== v; )
          w.push(P), P = P.nextSibling;
        S = v;
      } else {
        const v = l[c - 1];
        if (!v)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const P = l[c];
        let D = v.nextSibling;
        for (; D && D !== P; )
          w.push(D), D = D.nextSibling;
        S = v;
      }
      if (h && h.rangeCount > 0) {
        const P = h.getRangeAt(0).startContainer;
        for (const D of w)
          if (D.contains(P) || D === P) {
            m = !0;
            break;
          }
      }
      S && S.parentNode && S.remove(), w.forEach((v) => {
        v.parentNode && v.remove();
      }), g.querySelectorAll('page-break, [data-page-break="true"]').forEach((v, P) => {
        v.setAttribute("data-page-number", String(P + 2));
      }), m && setTimeout(() => {
        O(0);
      }, 50);
      const E = g.innerHTML;
      return r(se(E)), setTimeout(() => {
        y();
      }, 100), !0;
    } catch (l) {
      return console.error("[removePageAndContent] Failed to remove page:", l), !1;
    }
  }, [n, k, r, y, O]);
  return {
    calculatePageBoundaries: k,
    checkAndUpdateBoundaries: L,
    updateBoundaries: y,
    getCurrentPage: C,
    scrollToPage: I,
    positionCursorAtPage: O,
    checkAndReflow: p,
    triggerAutoReflow: B,
    removePageAndContent: N,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: i
  };
}, Re = ({ editorView: e, isCollapsed: n, onToggle: r, wordCount: o, pageCount: i }) => {
  const s = be((I) => I.document), { pages: d, activePage: f, continuousContent: j, editorMode: p } = s, [B, k] = ne(0), [y, L] = ne([]);
  J(() => {
    if (o !== void 0 && i !== void 0) {
      if (k(o), j) {
        const N = document.createElement("div");
        N.innerHTML = j;
        const c = N.querySelectorAll("h1, h2, h3, h4, h5, h6"), g = Array.from(c).map((b, l) => {
          const h = parseInt(b.tagName.charAt(1)), m = b.textContent.trim();
          return m ? {
            id: `heading-${l}`,
            level: h,
            text: m,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        L(g);
      }
      return;
    }
    let I = 0;
    const O = [];
    d.forEach((N, c) => {
      if (N.content) {
        const g = document.createElement("div");
        g.innerHTML = N.content;
        const l = (g.textContent || g.innerText || "").trim().split(/\s+/).filter((m) => m.length > 0);
        I += l.length, g.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((m, w) => {
          const S = parseInt(m.tagName.charAt(1)), z = m.textContent.trim();
          z && O.push({
            id: `heading-${c}-${w}`,
            level: S,
            text: z,
            page: c + 1
          });
        });
      }
    }), k(I), L(O);
  }, [d, o, i, j]);
  const C = i !== void 0 ? i : d.length;
  return /* @__PURE__ */ a.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ a.jsx("h2", { children: "Document Info" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: r,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? "▶" : "◀"
            }
          )
        ] }),
        !n && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Pages:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: C })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Words:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: B.toLocaleString() })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Active Page:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: f + 1 })
            ] })
          ] }),
          y.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Document Outline" }),
            /* @__PURE__ */ a.jsx("div", { className: "document-outline", "data-testid": "outline", children: y.map((I) => /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: `outline-item outline-level-${I.level}`,
                style: { marginLeft: `${(I.level - 1) * 12}px` },
                children: [
                  /* @__PURE__ */ a.jsx("span", { className: "outline-text", children: I.text }),
                  /* @__PURE__ */ a.jsxs("span", { className: "outline-page", children: [
                    "p.",
                    I.page
                  ] })
                ]
              },
              I.id
            )) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ a.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ a.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function _e() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Ie(e) {
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
      const d = s.target.result;
      if (d.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = `editor-image-${_e()}`;
        localStorage.setItem(p, d), n(p);
      } catch (p) {
        p.name === "QuotaExceededError" ? r(new Error("Storage quota exceeded")) : r(p);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function Ze(e) {
  return localStorage.getItem(e);
}
function Qe(e) {
  localStorage.removeItem(e);
}
function et() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function tt() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Be {
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
  _format(n, r, o) {
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
const pe = new Be("Editor"), Oe = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: r,
  onPageSizeChange: o,
  onAddPageBreak: i
}) => {
  const s = async (d) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(d.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (d.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const j = await Ie(d), p = localStorage.getItem(j);
      p && (document.execCommand("insertImage", !1, p), pe.info("Image inserted", { key: j }));
    } catch (f) {
      pe.error("Error uploading image", f);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ a.jsx("strong", { children: "B" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ a.jsx("em", { children: "I" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ a.jsx("u", { children: "U" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ a.jsx("s", { children: "S" })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: "⬅️"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: "⬌"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: "➡️"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: "⬌"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (d) => r("fontName", d.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ a.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ a.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ a.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ a.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (d) => r("fontSize", d.target.value),
        defaultValue: "16px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ a.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ a.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ a.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ a.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ a.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ a.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: "• List"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: "1. List"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertCheckList"),
        title: "Checklist",
        children: "☑️ List"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => {
          const d = prompt("Enter URL:");
          d && r("createLink", d);
        },
        title: "Insert Link",
        children: "🔗 Link"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: "📊 Table"
      }
    ),
    i && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: "📄 Page Break"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: "↶ Undo"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: "↷ Redo"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (d) => d.target.files[0] && s(d.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: "🖼️ Image"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        value: n,
        onChange: (d) => o(d.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, Le = ({
  content: e,
  dimensions: n,
  pageSize: r,
  pageBoundaries: o = [],
  editorRef: i,
  onInput: s,
  onKeyDown: d,
  onClick: f,
  onScroll: j
}) => {
  const p = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, B = (k) => {
    const y = window.getSelection();
    if (!y || y.rangeCount === 0) return;
    const L = y.getRangeAt(0), { startContainer: C, endContainer: I } = L, O = (N) => N ? N.nodeType === Node.ELEMENT_NODE ? N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true" : N.parentElement && O(N.parentElement) : !1;
    if ((k.key === "Backspace" || k.key === "Delete") && (O(C) || O(I)))
      return k.preventDefault(), !1;
    d && d(k);
  };
  return /* @__PURE__ */ a.jsx(
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
      children: /* @__PURE__ */ a.jsx(
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
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: s,
          onKeyDown: B,
          onClick: f,
          onScroll: j,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, De = ({
  pages: e,
  activePage: n,
  pageSize: r,
  onNavigate: o,
  onAddPage: i,
  onDeletePage: s,
  onPageSizeChange: d,
  continuousMode: f = !1
}) => /* @__PURE__ */ a.jsxs("div", { className: "page-manager", children: [
  /* @__PURE__ */ a.jsxs("div", { className: "page-size-controls", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: "page-size-selector", children: "Page Size:" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        id: "page-size-selector",
        role: "combobox",
        "aria-label": "Page size selector",
        value: r,
        onChange: (j) => d(j.target.value),
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: "page-list", children: e.map((j, p) => /* @__PURE__ */ a.jsxs("div", { className: "page-item", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: `page-button ${p === n ? "active" : ""}`,
        onClick: () => o(p),
        "aria-label": `Go to page ${p + 1}`,
        children: [
          "Page ",
          p + 1
        ]
      }
    ),
    !f && e.length > 1 && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "delete-page-button",
        onClick: (B) => {
          B.stopPropagation(), s(p);
        },
        "aria-label": `Delete page ${p + 1}`,
        title: "Delete this page and its content",
        children: "×"
      }
    )
  ] }, j.id)) }),
  !f && /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      className: "add-page-button",
      onClick: i,
      "aria-label": "Add new page",
      children: "+ Add Page"
    }
  )
] }), fe = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, nt = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: r,
  onDeletePage: o,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: d = !0
}) => {
  const f = he(), j = be((x) => x.document), { pageSize: p, continuousContent: B, pageBoundaries: k, activePage: y } = j, L = H(null), C = H(null), { currentFormat: I, formatText: O } = Ne(), {
    checkAndUpdateBoundaries: N,
    getCurrentPage: c,
    scrollToPage: g,
    positionCursorAtPage: b,
    updateBoundaries: l,
    triggerAutoReflow: h,
    removePageAndContent: m
  } = Te(p, C), w = fe[p] || fe.A4, [S, z] = ne(!1);
  J(() => {
    C.current && C.current.innerHTML !== B && (C.current.innerHTML = B, setTimeout(() => {
      l();
    }, 100));
  }, [B, l]), J(() => {
    const x = setTimeout(() => {
      C.current && C.current.focus();
    }, 200);
    return () => clearTimeout(x);
  }, []);
  const E = _((x) => {
    const t = x.currentTarget.innerHTML;
    f(se(t)), N(), h();
    const u = c();
    u !== y && f(Q(u));
  }, [N, f, c, y, h]), v = _((x) => {
    f(Ce(x)), l({ pageSize: x }), i && i(x);
  }, [f, l, i]), P = _((x) => {
    f(Q(x)), g(x, L), n && n(x);
  }, [f, g, n]), D = _(() => {
    f(we({ position: "end" })), setTimeout(() => {
      l();
    }, 100), r && r();
  }, [f, l, r]), $ = _(() => {
    const x = window.getSelection();
    if (x && x.rangeCount > 0) {
      if (!C?.current) return;
      const A = `<page-break data-page-break="true" contenteditable="false" data-page-number="${C.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, A), setTimeout(() => {
        l();
      }, 100);
    }
  }, [l, C]), G = _((x) => {
    if (k.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    m(x) && (f(Q(0)), o && o(x));
  }, [k.length, m, f, o]), V = _(() => {
    if (!L.current || !C.current) return;
    const x = c();
    x !== y && f(Q(x));
  }, [c, y, f]), F = B ? (B.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g) || []).length : 0, X = k.length || 1;
  return /* @__PURE__ */ a.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ a.jsx(
      Oe,
      {
        currentFormat: I,
        pageSize: p,
        onFormatText: O,
        onPageSizeChange: v,
        onAddPageBreak: $
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ a.jsx(
        Re,
        {
          editorView: null,
          isCollapsed: S,
          onToggle: () => z((x) => !x),
          wordCount: F,
          pageCount: X
        }
      ),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: L,
          onScroll: V,
          children: /* @__PURE__ */ a.jsx(
            Le,
            {
              content: B,
              dimensions: w,
              pageSize: p,
              pageBoundaries: k,
              editorRef: C,
              onInput: E,
              onClick: () => C.current?.focus()
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "page-manager-sidebar", children: e ? me.cloneElement(e, {
        pages: k.map((x, t) => ({
          id: x.id,
          index: t,
          size: p
        })),
        activePage: y,
        pageSize: p,
        onNavigate: P,
        onAddPage: D,
        onDeletePage: G,
        onPageSizeChange: v
      }) : /* @__PURE__ */ a.jsx(
        De,
        {
          pages: k.map((x, t) => ({
            id: x.id,
            index: t,
            size: p
          })),
          activePage: y,
          pageSize: p,
          onNavigate: P,
          onAddPage: D,
          onDeletePage: G,
          onPageSizeChange: v,
          continuousMode: !1
        }
      ) })
    ] })
  ] });
}, rt = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  nt as ContentEditableEditor,
  Le as ContinuousPageView,
  Oe as EditorToolbar,
  rt as PAGE_DIMENSIONS,
  De as PageManager,
  Re as Sidebar,
  qe as addPage,
  we as addPageBreak,
  et as clearImages,
  Qe as deleteImage,
  Je as deletePage,
  Ke as documentReducer,
  tt as getAllImageKeys,
  Ze as getImage,
  He as initializeDocument,
  Be as logger,
  Fe as removePageBreak,
  Ve as resetDocument,
  Ie as saveImage,
  Q as setActivePage,
  Xe as setEditorMode,
  se as updateContinuousContent,
  je as updatePageBoundaries,
  We as updatePageContent,
  Ce as updatePageSize,
  Ye as updatePages,
  Ge as updateTitle,
  Te as useContinuousReflow,
  Ne as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
