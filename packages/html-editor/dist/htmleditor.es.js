import de, { useState as re, useCallback as L, useRef as D, useEffect as U, forwardRef as Ce, createElement as le } from "react";
import { useDispatch as ge, useSelector as pe } from "react-redux";
import { createSlice as Me } from "@reduxjs/toolkit";
import { v4 as he } from "uuid";
var ee = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function ze() {
  if (fe) return V;
  fe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(o, i, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: l,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return V.Fragment = n, V.jsx = r, V.jsxs = r, V;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Be() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === N ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case M:
          return "Fragment";
        case h:
          return "Profiler";
        case B:
          return "StrictMode";
        case g:
          return "Suspense";
        case k:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case y:
            return "Portal";
          case u:
            return a.displayName || "Context";
          case f:
            return (a._context.displayName || "Context") + ".Consumer";
          case c:
            var b = a.render;
            return a = a.displayName, a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case j:
            return b = a.displayName || null, b !== null ? b : e(a.type) || "Memo";
          case v:
            b = a._payload, a = a._init;
            try {
              return e(a(b));
            } catch {
            }
        }
      return null;
    }
    function n(a) {
      return "" + a;
    }
    function r(a) {
      try {
        n(a);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var S = b.error, z = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return S.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), n(a);
      }
    }
    function o(a) {
      if (a === M) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === v)
        return "<...>";
      try {
        var b = e(a);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = T.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(a) {
      if (_.call(a, "key")) {
        var b = Object.getOwnPropertyDescriptor(a, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function d(a, b) {
      function S() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: S,
        configurable: !0
      });
    }
    function p() {
      var a = e(this.type);
      return F[a] || (F[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function m(a, b, S, z, Q, ie) {
      var R = S.ref;
      return a = {
        $$typeof: P,
        type: a,
        key: b,
        props: S,
        _owner: z
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function A(a, b, S, z, Q, ie) {
      var R = b.children;
      if (R !== void 0)
        if (z)
          if (I(R)) {
            for (z = 0; z < R.length; z++)
              x(R[z]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(R);
      if (_.call(b, "key")) {
        R = e(a);
        var q = Object.keys(b).filter(function(_e) {
          return _e !== "key";
        });
        z = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", Z[R + z] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          R,
          q,
          R
        ), Z[R + z] = !0);
      }
      if (R = null, S !== void 0 && (r(S), R = "" + S), l(b) && (r(b.key), R = "" + b.key), "key" in b) {
        S = {};
        for (var se in b)
          se !== "key" && (S[se] = b[se]);
      } else S = b;
      return R && d(
        S,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), m(
        a,
        R,
        S,
        i(),
        Q,
        ie
      );
    }
    function x(a) {
      C(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === v && (a._payload.status === "fulfilled" ? C(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function C(a) {
      return typeof a == "object" && a !== null && a.$$typeof === P;
    }
    var E = de, P = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), T = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, I = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var J, F = {}, K = E.react_stack_bottom_frame.bind(
      E,
      s
    )(), X = H(o(s)), Z = {};
    G.Fragment = M, G.jsx = function(a, b, S) {
      var z = 1e4 > T.recentlyCreatedOwnerStacks++;
      return A(
        a,
        b,
        S,
        !1,
        z ? Error("react-stack-top-frame") : K,
        z ? H(o(a)) : X
      );
    }, G.jsxs = function(a, b, S) {
      var z = 1e4 > T.recentlyCreatedOwnerStacks++;
      return A(
        a,
        b,
        S,
        !0,
        z ? Error("react-stack-top-frame") : K,
        z ? H(o(a)) : X
      );
    };
  })()), G;
}
var be;
function Re() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ee.exports = ze() : ee.exports = Be()), ee.exports;
}
var t = Re();
const oe = "A4", $ = "<p><br></p>", Y = (e, n = oe) => ({
  id: he(),
  index: e,
  size: n,
  content: $,
  images: [],
  isBreakPoint: !1
}), je = (e, n = oe) => (e.length > 0 ? e : [Y(0, n)]).map((o, i) => ({
  id: o.id || he(),
  index: i,
  size: o.size || n,
  content: ne(o.content),
  images: o.images || [],
  isBreakPoint: !!o.isBreakPoint
})), ne = (e) => typeof e != "string" || e.trim() === "" ? $ : e, ce = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || oe, o = je(e.pages || [Y(0, r)], r);
  return {
    id: he(),
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
    continuousContent: e.continuousContent || $,
    pageBoundaries: e.pageBoundaries || []
  };
}, Le = ce(), we = Me({
  name: "document",
  initialState: Le,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: r = $, pageSize: o = oe } = n.payload || {}, i = { ...Y(0, o), content: ne(r) };
      return ce({
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
      r < 0 || r >= e.pages.length || (e.pages[r].content = ne(o), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const r = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, o = je(r.pages || [], e.pageSize);
      e.pages = o, e.activePage = Math.min(e.activePage, o.length - 1), e.pageBreaks = Array.isArray(r.pageBreaks) ? r.pageBreaks : o.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = o.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const r = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(r, 0, Y(r, e.pageSize)), e.pages = e.pages.map((o, i) => ({
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
    resetDocument: () => ce(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = ne(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: r = "end", pageIndex: o } = n.payload || {}, i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (r === "end")
        e.continuousContent = e.continuousContent + i + "<p><br></p>";
      else if (typeof r == "number") {
        const s = e.continuousContent.substring(0, r), l = e.continuousContent.substring(r);
        e.continuousContent = s + i + l;
      } else if (typeof o == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const l = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (o === 0 && l.length === 0)
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
        else if (o < l.length) {
          const d = l[o], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const m = document.createElement("p");
          m.innerHTML = "<br>", d.parentNode.insertBefore(p, d.nextSibling), p.parentNode.insertBefore(m, p.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (typeof r == "number" && typeof document < "u") {
        const o = document.createElement("div");
        o.innerHTML = e.continuousContent;
        const i = o.querySelectorAll('page-break, [data-page-break="true"]');
        i[r] && i[r].remove(), o.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, d) => {
          l.setAttribute("data-page-number", String(d + 2));
        }), e.continuousContent = o.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const r = n.payload;
      if (r !== e.editorMode) {
        if (e.editorMode = r, r === "continuous") {
          const o = e.pages.map((i) => i.content).filter((i) => i && i !== $).join(`
`);
          e.continuousContent = o || $;
        } else
          e.continuousContent && e.continuousContent !== $ && (e.pages = [{ ...Y(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: r, content: o = $ } = n.payload || {};
      if (!(typeof r != "number" || r < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent;
          const s = i.querySelectorAll('page-break, [data-page-break="true"]'), l = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (r === 0)
            e.continuousContent = o + l + e.continuousContent;
          else if (r >= s.length)
            e.continuousContent = e.continuousContent + l + o;
          else {
            const d = s[r - 1], p = document.createElement("div");
            p.innerHTML = o;
            const m = document.createElement("page-break");
            m.setAttribute("data-page-break", "true"), m.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), d.parentNode.insertBefore(p, d.nextSibling), d.parentNode.insertBefore(m, p.nextSibling), e.continuousContent = i.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: r, toIndex: o } = n.payload || {};
      if (!(typeof r != "number" || typeof o != "number") && !(r < 0 || o < 0 || r === o)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent, Array.from(i.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let l = i.firstChild, d = [];
          for (; l; )
            l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true") ? (s.push(d), d = []) : d.push(l.cloneNode(!0)), l = l.nextSibling;
          if (d.length > 0 && s.push(d), r >= s.length || o >= s.length)
            return;
          const [p] = s.splice(r, 1);
          s.splice(o, 0, p);
          const m = [];
          s.forEach((A, x) => {
            A.forEach((C) => m.push(C.outerHTML || C.textContent)), x < s.length - 1 && m.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = m.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (!(typeof r != "number" || r < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const o = document.createElement("div");
          o.innerHTML = e.continuousContent;
          const i = Array.from(o.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], l = o.firstChild, d = 0;
          for (; l; ) {
            if (l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true")) {
              if (d === r)
                break;
              d++, s = [];
            } else d === r && s.push(l.cloneNode(!0));
            l = l.nextSibling;
          }
          if (s.length > 0 && r < i.length) {
            const p = i[r], x = s.map((P) => P.outerHTML || P.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', C = document.createElement("div");
            C.innerHTML = x;
            let E = p;
            Array.from(C.children).forEach((P) => {
              E.parentNode.insertBefore(P.cloneNode(!0), E.nextSibling), E = E.nextSibling;
            }), e.continuousContent = o.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: Qt,
  updateTitle: en,
  updatePageContent: tn,
  updatePages: nn,
  addPage: rn,
  deletePage: an,
  setActivePage: W,
  updatePageSize: Se,
  resetDocument: on,
  updateContinuousContent: ue,
  updatePageBoundaries: Ie,
  addPageBreak: Ae,
  removePageBreak: Oe,
  setEditorMode: sn,
  insertPageAt: ln,
  movePageTo: cn,
  duplicatePage: un
} = we.actions, dn = we.reducer, $e = () => {
  const [e, n] = re({
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
  }), r = L((o, i = null) => {
    if (o === "fontSize") {
      const l = {
        "10px": "1",
        "12px": "2",
        "14px": "3",
        "16px": "4",
        "18px": "5",
        "24px": "6",
        "32px": "7"
      }[i] || "2";
      document.execCommand("fontSize", !1, l);
      const d = window.getSelection();
      if (d && d.rangeCount > 0) {
        const p = d.getRangeAt(0);
        if (p.toString()) {
          const A = document.createElement("span");
          A.style.fontSize = i, p.surroundContents(A);
        }
      }
    } else
      document.execCommand(o, !1, i);
    o === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : o === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : o === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : o === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : o === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : o === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : o === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : o === "justifyFull" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : o === "fontSize" && n((s) => ({ ...s, fontSize: i }));
  }, []);
  return {
    currentFormat: e,
    formatText: r
  };
}, te = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ke = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, De = (e, n) => {
  const r = ge(), o = D(null), i = D(null), s = D(e), l = D(!1);
  U(() => {
    s.current = e;
  }, [e]), U(() => () => {
    o.current && clearTimeout(o.current), i.current && clearTimeout(i.current);
  }, []);
  const d = L((h, f) => {
    let u = 0;
    for (let c = 0; c < h.length; c++) {
      const g = h[c], k = g.getBoundingClientRect().height;
      if (u + k > f)
        return { overflowIndex: c, overflowElement: g, accumulatedHeight: u };
      u += k;
    }
    return null;
  }, []), p = L((h, f) => {
    if (!h || !n?.current)
      return !1;
    try {
      const u = n.current, c = document.createElement("page-break");
      return c.setAttribute("data-page-break", "true"), c.setAttribute("contenteditable", "false"), c.setAttribute("data-page-number", f || "2"), h.parentNode.insertBefore(c, h), !0;
    } catch (u) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", u), !1;
    }
  }, [n]), m = L(() => {
    if (!(!n?.current || l.current))
      try {
        l.current = !0;
        const h = n.current, f = s.current || "A4", c = (te[f] || te.A4).height - ke.top - ke.bottom, g = Array.from(h.children), k = g.filter(
          (N) => N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true"
        ), j = [];
        let v = [];
        for (const N of g)
          N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true" ? v.length > 0 && (j.push(v), v = []) : v.push(N);
        v.length > 0 && j.push(v), j.length === 0 && g.length > 0 && j.push(g.filter(
          (N) => !(N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true")
        ));
        let O = !1;
        for (let N = 0; N < j.length; N++) {
          const T = j[N], _ = d(T, c);
          if (_ && _.overflowIndex > 0) {
            const I = N + 2;
            if (p(_.overflowElement, I)) {
              O = !0;
              break;
            }
          }
        }
        if (O) {
          const N = h.innerHTML;
          r(ue(N)), setTimeout(() => {
            C();
          }, 50);
        }
      } catch (h) {
        console.warn("[checkAndReflow] Reflow failed:", h);
      } finally {
        l.current = !1;
      }
  }, [n, d, p, r]), A = L((h = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, m();
    }, h);
  }, [m]), x = L((h = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const f = h.pageSize || s.current || "A4", u = te[f] || te.A4, c = n.current, g = c.querySelectorAll('page-break, [data-page-break="true"]'), k = [];
    return k.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: u.height
      // No breakElement for first page
    }), g.forEach((j, v) => {
      const O = j.getBoundingClientRect(), N = c.getBoundingClientRect(), T = O.top - N.top + c.scrollTop;
      k.push({
        id: `page-${v + 1}`,
        pageNumber: v + 2,
        top: T,
        height: u.height
        // Don't store breakElement - not serializable
      });
    }), k;
  }, [n]), C = L((h = {}) => {
    const f = x(h);
    return r(Ie(f)), f;
  }, [x, r]), E = L((h = {}) => {
    o.current && clearTimeout(o.current);
    const f = typeof h.delay == "number" ? h.delay : 300;
    o.current = setTimeout(() => {
      o.current = null, C(h);
    }, Math.max(0, f));
  }, [C]), P = L(() => {
    if (!n?.current)
      return 0;
    const h = window.getSelection();
    if (!h || h.rangeCount === 0)
      return 0;
    try {
      const f = h.getRangeAt(0), u = n.current;
      let c = f.startContainer;
      const g = Array.from(u.querySelectorAll('page-break, [data-page-break="true"]'));
      if (g.length === 0)
        return 0;
      for (; c && c !== u; ) {
        for (let k = g.length - 1; k >= 0; k--)
          if (g[k].compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING)
            return k + 1;
        c = c.parentNode;
      }
      return 0;
    } catch (f) {
      return console.warn("[getCurrentPage] Failed to calculate page:", f), 0;
    }
  }, [n]), y = L((h, f) => {
    if (!f?.current || !n?.current)
      return;
    n.current;
    const c = x().find((g) => g.pageNumber === h + 1);
    c && (f.current.scrollTo({
      top: c.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      M(h);
    }, 300));
  }, [n]), M = L((h) => {
    if (!n?.current)
      return;
    const f = n.current;
    f.focus();
    try {
      let u = null, c = 0;
      if (h === 0)
        u = f.firstChild, c = 0;
      else {
        const k = f.querySelectorAll('page-break, [data-page-break="true"]')[h - 1];
        k && k.nextSibling && (u = k.nextSibling, c = 0);
      }
      if (u) {
        const g = document.createRange(), k = window.getSelection();
        u.nodeType === Node.TEXT_NODE ? g.setStart(u, c) : g.setStart(u, 0), g.collapse(!0), k.removeAllRanges(), k.addRange(g);
      }
    } catch (u) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", u);
    }
  }, [n]), B = L((h) => {
    if (!n?.current)
      return !1;
    const f = n.current;
    if (x().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const c = Array.from(f.querySelectorAll('page-break, [data-page-break="true"]'));
      if (h > c.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const g = window.getSelection();
      let k = !1, j = [], v = null;
      if (h === 0) {
        const T = c[0];
        if (!T)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let _ = f.firstChild;
        for (; _ && _ !== T; )
          j.push(_), _ = _.nextSibling;
        v = T;
      } else {
        const T = c[h - 1];
        if (!T)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const _ = c[h];
        let I = T.nextSibling;
        for (; I && I !== _; )
          j.push(I), I = I.nextSibling;
        v = T;
      }
      if (g && g.rangeCount > 0) {
        const _ = g.getRangeAt(0).startContainer;
        for (const I of j)
          if (I.contains(_) || I === _) {
            k = !0;
            break;
          }
      }
      v && v.parentNode && v.remove(), j.forEach((T) => {
        T.parentNode && T.remove();
      }), f.querySelectorAll('page-break, [data-page-break="true"]').forEach((T, _) => {
        T.setAttribute("data-page-number", String(_ + 2));
      }), k && setTimeout(() => {
        M(0);
      }, 50);
      const N = f.innerHTML;
      return r(ue(N)), setTimeout(() => {
        C();
      }, 100), !0;
    } catch (c) {
      return console.error("[removePageAndContent] Failed to remove page:", c), !1;
    }
  }, [n, x, r, C, M]);
  return {
    calculatePageBoundaries: x,
    checkAndUpdateBoundaries: E,
    updateBoundaries: C,
    getCurrentPage: P,
    scrollToPage: y,
    positionCursorAtPage: M,
    checkAndReflow: m,
    triggerAutoReflow: A,
    removePageAndContent: B,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: i
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qe = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), xe = (e) => {
  const n = qe(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ne = (...e) => e.filter((n, r, o) => !!n && n.trim() !== "" && o.indexOf(n) === r).join(" ").trim(), Ue = (e) => {
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
var Ve = {
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
const Ge = Ce(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: s,
    iconNode: l,
    ...d
  }, p) => le(
    "svg",
    {
      ref: p,
      ...Ve,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(n) : r,
      className: Ne("lucide", i),
      ...!s && !Ue(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...l.map(([m, A]) => le(m, A)),
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
const w = (e, n) => {
  const r = Ce(
    ({ className: o, ...i }, s) => le(Ge, {
      ref: s,
      iconNode: n,
      className: Ne(
        `lucide-${He(xe(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return r.displayName = xe(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Ye = w("bold", We);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ee = w("chevron-left", Je);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Pe = w("chevron-right", Fe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Xe = w("file-check", Ke);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ae = w("file-text", Ze);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], et = w("hash", Qe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], nt = w("heading-1", tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], at = w("heading-2", rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], it = w("heading-3", ot);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], lt = w("image", st);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ut = w("italic", ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], gt = w("link", dt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ht = w("list-ordered", pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Te = w("list", ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], bt = w("plus", mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], xt = w("redo", kt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], vt = w("settings", yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], jt = w("square-check-big", Ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], St = w("strikethrough", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Nt = w("table", At);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Pt = w("text-align-center", Et);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], _t = w("text-align-end", Tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], zt = w("text-align-justify", Mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Rt = w("text-align-start", Bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], It = w("underline", Lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], $t = w("undo", Ot);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ht = w("x", Dt), qt = ({ editorView: e, isCollapsed: n, onToggle: r, wordCount: o, pageCount: i }) => {
  const s = pe((y) => y.document), { pages: l, activePage: d, continuousContent: p, editorMode: m } = s, [A, x] = re(0), [C, E] = re([]);
  U(() => {
    if (o !== void 0 && i !== void 0) {
      if (x(o), p) {
        const B = document.createElement("div");
        B.innerHTML = p;
        const h = B.querySelectorAll("h1, h2, h3, h4, h5, h6"), f = Array.from(h).map((u, c) => {
          const g = parseInt(u.tagName.charAt(1)), k = u.textContent.trim();
          return k ? {
            id: `heading-${c}`,
            level: g,
            text: k,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        E(f);
      }
      return;
    }
    let y = 0;
    const M = [];
    l.forEach((B, h) => {
      if (B.content) {
        const f = document.createElement("div");
        f.innerHTML = B.content;
        const c = (f.textContent || f.innerText || "").trim().split(/\s+/).filter((k) => k.length > 0);
        y += c.length, f.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((k, j) => {
          const v = parseInt(k.tagName.charAt(1)), O = k.textContent.trim();
          O && M.push({
            id: `heading-${h}-${j}`,
            level: v,
            text: O,
            page: h + 1
          });
        });
      }
    }), x(y), E(M);
  }, [l, o, i, p]);
  const P = i !== void 0 ? i : l.length;
  return /* @__PURE__ */ t.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ t.jsx(ae, { size: 18 }),
            /* @__PURE__ */ t.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: r,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ t.jsx(Pe, { size: 16 }) : /* @__PURE__ */ t.jsx(Ee, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(Xe, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: P })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(et, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: A.toLocaleString() })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(ae, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: d + 1 })
            ] })
          ] }),
          C.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsxs("h3", { children: [
              /* @__PURE__ */ t.jsx(Te, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "document-outline", "data-testid": "outline", children: C.map((y) => {
              const M = y.level === 1 ? nt : y.level === 2 ? at : it;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${y.level}`,
                  style: { marginLeft: `${(y.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ t.jsx(M, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ t.jsx("span", { className: "outline-text", children: y.text }),
                    /* @__PURE__ */ t.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      y.page
                    ] })
                  ]
                },
                y.id
              );
            }) })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ t.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ t.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Ut() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Vt(e) {
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
      const l = s.target.result;
      if (l.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = `editor-image-${Ut()}`;
        localStorage.setItem(m, l), n(m);
      } catch (m) {
        m.name === "QuotaExceededError" ? r(new Error("Storage quota exceeded")) : r(m);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function gn(e) {
  return localStorage.getItem(e);
}
function pn(e) {
  localStorage.removeItem(e);
}
function hn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function fn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Gt {
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
const ye = new Gt("Editor"), Wt = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: r,
  onPageSizeChange: o,
  onAddPageBreak: i
}) => {
  const s = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (l.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const p = await Vt(l), m = localStorage.getItem(p);
      m && (document.execCommand("insertImage", !1, m), ye.info("Image inserted", { key: p }));
    } catch (d) {
      ye.error("Error uploading image", d);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ t.jsx(Ye, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ t.jsx(ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ t.jsx(It, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ t.jsx(St, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ t.jsx(Rt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ t.jsx(Pt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ t.jsx(_t, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ t.jsx(zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        onChange: (l) => r("fontName", l.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ t.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ t.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ t.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ t.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        onChange: (l) => r("fontSize", l.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ t.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ t.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ t.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ t.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ t.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ t.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ t.jsx(Te, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ t.jsx(ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ t.jsx(jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && r("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ t.jsx(gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ t.jsx(Nt, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ t.jsx(ae, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: /* @__PURE__ */ t.jsx($t, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: /* @__PURE__ */ t.jsx(xt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && s(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ t.jsx(lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        value: n,
        onChange: (l) => o(l.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ t.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ t.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, Yt = ({
  content: e,
  dimensions: n,
  pageSize: r,
  pageBoundaries: o = [],
  editorRef: i,
  onInput: s,
  onKeyDown: l,
  onClick: d,
  onScroll: p
}) => {
  const m = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, A = (x) => {
    if (x.key === "Tab")
      return x.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const E = C.getRangeAt(0), { startContainer: P, endContainer: y } = E, M = (B) => B ? B.nodeType === Node.ELEMENT_NODE ? B.tagName === "PAGE-BREAK" || B.getAttribute("data-page-break") === "true" : B.parentElement && M(B.parentElement) : !1;
    if ((x.key === "Backspace" || x.key === "Delete") && (M(P) || M(y)))
      return x.preventDefault(), !1;
    l && l(x);
  };
  return /* @__PURE__ */ t.jsx(
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
      children: /* @__PURE__ */ t.jsx(
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
            padding: `${m.top}px ${m.right}px ${m.bottom}px ${m.left}px`,
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
          onKeyDown: A,
          onClick: d,
          onScroll: p,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, Jt = ({
  onNavigate: e,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: o,
  scrollContainerRef: i
} = {}) => {
  const s = ge(), { pageBoundaries: l, activePage: d, pageSize: p } = pe((u) => u.document), m = D(null);
  U(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const A = l.map((u, c) => ({
    id: u.id || `page-${c}`,
    index: c,
    size: p
  })), x = A.length || 1, C = (u, c) => {
    if (!i?.current)
      return;
    i.current.scrollTo({
      top: c.top - 40,
      // Offset for better visibility
      behavior: "smooth"
    }), setTimeout(() => {
      E(u);
    }, 400);
  }, E = (u) => {
    const c = i?.current?.querySelector('[contenteditable="true"]');
    if (c) {
      c.focus();
      try {
        let g = null, k = 0;
        if (u === 0)
          g = c.firstChild, k = 0;
        else {
          const v = c.querySelectorAll('page-break, [data-page-break="true"]')[u - 1];
          v && v.nextSibling && (g = v.nextSibling, k = 0);
        }
        if (g) {
          const j = document.createRange(), v = window.getSelection();
          g.nodeType === Node.TEXT_NODE ? j.setStart(g, k) : g.firstChild ? j.setStart(g.firstChild, 0) : j.setStart(g, 0), j.collapse(!0), v.removeAllRanges(), v.addRange(j);
        }
      } catch (g) {
        console.warn("[positionCursorAtPage] Failed to position cursor:", g), c.focus();
      }
    }
  }, P = (u) => {
    s(W(u)), i?.current && l[u] && (m.current && clearTimeout(m.current), m.current = setTimeout(() => {
      C(u, l[u]);
    }, 50)), e && e(u);
  }, y = () => {
    s(Ae({ position: "end" })), n && n();
  }, M = (u) => {
    if (x <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    s(Oe({ pageIndex: u })), r && r(u);
  }, B = (u) => {
    s(Se(u)), o && o(u);
  }, h = () => {
    d > 0 && P(d - 1);
  }, f = () => {
    d < x - 1 && P(d + 1);
  };
  return de.useEffect(() => {
    const u = (c) => {
      c.target.closest(".page-manager") && (c.ctrlKey || c.metaKey) && (c.key === "ArrowUp" || c.key === "PageUp" ? (c.preventDefault(), h()) : (c.key === "ArrowDown" || c.key === "PageDown") && (c.preventDefault(), f()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [d, x]), /* @__PURE__ */ t.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ t.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ t.jsx(vt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ t.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: p,
          onChange: (u) => B(u.target.value),
          children: [
            /* @__PURE__ */ t.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ t.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ t.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "page-navigation-controls", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: h,
          disabled: d === 0,
          "aria-label": "Previous page",
          title: "Previous page (Ctrl+↑)",
          children: /* @__PURE__ */ t.jsx(Ee, { size: 16 })
        }
      ),
      /* @__PURE__ */ t.jsxs("span", { className: "page-counter", "aria-live": "polite", children: [
        "Page ",
        d + 1,
        " of ",
        x
      ] }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: f,
          disabled: d >= x - 1,
          "aria-label": "Next page",
          title: "Next page (Ctrl+↓)",
          children: /* @__PURE__ */ t.jsx(Pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "page-list", children: A.map((u, c) => /* @__PURE__ */ t.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${c === d ? "active" : ""}`,
          onClick: () => P(c),
          "aria-label": `Go to page ${c + 1}`,
          "aria-current": c === d ? "page" : void 0,
          children: [
            /* @__PURE__ */ t.jsx(ae, { size: 14 }),
            /* @__PURE__ */ t.jsxs("span", { children: [
              "Page ",
              c + 1
            ] })
          ]
        }
      ),
      x > 1 && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (g) => {
            g.stopPropagation(), M(c);
          },
          "aria-label": `Delete page ${c + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ t.jsx(Ht, { size: 14 })
        }
      )
    ] }, u.id)) }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: y,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ t.jsx(bt, { size: 16 }),
          /* @__PURE__ */ t.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, ve = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, mn = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: r,
  onDeletePage: o,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: l = !0,
  showPageManager: d = !0
}) => {
  const p = ge(), m = pe((a) => a.document), { pageSize: A, continuousContent: x, pageBoundaries: C, activePage: E } = m, P = D(null), y = D(null), { currentFormat: M, formatText: B } = $e(), {
    checkAndUpdateBoundaries: h,
    getCurrentPage: f,
    scrollToPage: u,
    positionCursorAtPage: c,
    updateBoundaries: g,
    triggerAutoReflow: k,
    removePageAndContent: j
  } = De(A, y), v = ve[A] || ve.A4, [O, N] = re(!1);
  U(() => {
    y.current && y.current.innerHTML !== x && (y.current.innerHTML = x, setTimeout(() => {
      g();
    }, 100));
  }, [x, g]), U(() => {
    const a = setTimeout(() => {
      y.current && y.current.focus();
    }, 200);
    return () => clearTimeout(a);
  }, []);
  const T = L((a) => {
    const b = a.currentTarget.innerHTML;
    p(ue(b)), h(), k();
    const S = f();
    S !== E && p(W(S));
  }, [h, p, f, E, k]), _ = L((a) => {
    p(Se(a)), g({ pageSize: a }), i && i(a);
  }, [p, g, i]), I = L((a) => {
    p(W(a)), u(a, P), n && n(a);
  }, [p, u, n]), H = L(() => {
    p(Ae({ position: "end" })), setTimeout(() => {
      g();
    }, 100), r && r();
  }, [p, g, r]), J = L(() => {
    const a = window.getSelection();
    if (a && a.rangeCount > 0) {
      if (!y?.current) return;
      const z = `<page-break data-page-break="true" contenteditable="false" data-page-number="${y.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, z), setTimeout(() => {
        g();
      }, 100);
    }
  }, [g, y]), F = L((a) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    j(a) && (p(W(0)), o && o(a));
  }, [C.length, j, p, o]), K = L(() => {
    if (!P.current || !y.current) return;
    const a = f();
    a !== E && p(W(a));
  }, [f, E, p]), X = x ? (x.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g) || []).length : 0, Z = C.length || 1;
  return /* @__PURE__ */ t.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ t.jsx(
      Wt,
      {
        currentFormat: M,
        pageSize: A,
        onFormatText: B,
        onPageSizeChange: _,
        onAddPageBreak: J
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ t.jsx(
        qt,
        {
          editorView: null,
          isCollapsed: O,
          onToggle: () => N((a) => !a),
          wordCount: X,
          pageCount: Z
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: P,
          onScroll: K,
          children: /* @__PURE__ */ t.jsx(
            Yt,
            {
              content: x,
              dimensions: v,
              pageSize: A,
              pageBoundaries: C,
              editorRef: y,
              onInput: T,
              onClick: () => y.current?.focus()
            }
          )
        }
      ),
      d && /* @__PURE__ */ t.jsx("div", { className: "page-manager-sidebar", children: e ? de.cloneElement(e, {
        onNavigate: I,
        onAddPage: H,
        onDeletePage: F,
        onPageSizeChange: _,
        scrollContainerRef: P
      }) : /* @__PURE__ */ t.jsx(
        Jt,
        {
          onNavigate: n,
          onAddPage: r,
          onDeletePage: o,
          onPageSizeChange: i,
          scrollContainerRef: P
        }
      ) })
    ] })
  ] });
}, bn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  mn as ContentEditableEditor,
  Yt as ContinuousPageView,
  Wt as EditorToolbar,
  bn as PAGE_DIMENSIONS,
  Jt as PageManager,
  qt as Sidebar,
  rn as addPage,
  Ae as addPageBreak,
  hn as clearImages,
  pn as deleteImage,
  an as deletePage,
  dn as documentReducer,
  un as duplicatePage,
  fn as getAllImageKeys,
  gn as getImage,
  Qt as initializeDocument,
  ln as insertPageAt,
  Gt as logger,
  cn as movePageTo,
  Oe as removePageBreak,
  on as resetDocument,
  Vt as saveImage,
  W as setActivePage,
  sn as setEditorMode,
  ue as updateContinuousContent,
  Ie as updatePageBoundaries,
  tn as updatePageContent,
  Se as updatePageSize,
  nn as updatePages,
  en as updateTitle,
  De as useContinuousReflow,
  $e as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
