import ge, { useState as oe, useCallback as I, useRef as D, useEffect as q, forwardRef as je, createElement as ce, useMemo as fe } from "react";
import { useDispatch as Ae, useSelector as pe } from "react-redux";
import { createSlice as _e } from "@reduxjs/toolkit";
import { v4 as he } from "uuid";
var ne = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Me() {
  if (me) return K;
  me = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(r, i, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      s = {};
      for (var u in i)
        u !== "key" && (s[u] = i[u]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return K.Fragment = n, K.jsx = a, K.jsxs = a, K;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ze() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === E ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case z:
          return "Fragment";
        case d:
          return "Profiler";
        case L:
          return "StrictMode";
        case f:
          return "Suspense";
        case y:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case p:
            return "Portal";
          case k:
            return o.displayName || "Context";
          case g:
            return (o._context.displayName || "Context") + ".Consumer";
          case h:
            var m = o.render;
            return o = o.displayName, o || (o = m.displayName || m.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case B:
            return m = o.displayName || null, m !== null ? m : e(o.type) || "Memo";
          case P:
            m = o._payload, o = o._init;
            try {
              return e(o(m));
            } catch {
            }
        }
      return null;
    }
    function n(o) {
      return "" + o;
    }
    function a(o) {
      try {
        n(o);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var T = m.error, R = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return T.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(o);
      }
    }
    function r(o) {
      if (o === z) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === P)
        return "<...>";
      try {
        var m = e(o);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = S.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(o) {
      if (M.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function u(o, m) {
      function T() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: T,
        configurable: !0
      });
    }
    function c() {
      var o = e(this.type);
      return te[o] || (te[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function x(o, m, T, R, W, v) {
      var A = T.ref;
      return o = {
        $$typeof: j,
        type: o,
        key: m,
        props: T,
        _owner: R
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: c
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
        value: W
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function N(o, m, T, R, W, v) {
      var A = m.children;
      if (A !== void 0)
        if (R)
          if (O(A)) {
            for (R = 0; R < A.length; R++)
              b(A[R]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(A);
      if (M.call(m, "key")) {
        A = e(o);
        var H = Object.keys(m).filter(function(le) {
          return le !== "key";
        });
        R = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", X[A + R] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          A,
          H,
          A
        ), X[A + R] = !0);
      }
      if (A = null, T !== void 0 && (a(T), A = "" + T), l(m) && (a(m.key), A = "" + m.key), "key" in m) {
        T = {};
        for (var Z in m)
          Z !== "key" && (T[Z] = m[Z]);
      } else T = m;
      return A && u(
        T,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), x(
        o,
        A,
        T,
        i(),
        W,
        v
      );
    }
    function b(o) {
      C(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === P && (o._payload.status === "fulfilled" ? C(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function C(o) {
      return typeof o == "object" && o !== null && o.$$typeof === j;
    }
    var _ = ge, j = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), k = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), S = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, O = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var J, te = {}, G = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), F = V(r(s)), X = {};
    Q.Fragment = z, Q.jsx = function(o, m, T) {
      var R = 1e4 > S.recentlyCreatedOwnerStacks++;
      return N(
        o,
        m,
        T,
        !1,
        R ? Error("react-stack-top-frame") : G,
        R ? V(r(o)) : F
      );
    }, Q.jsxs = function(o, m, T) {
      var R = 1e4 > S.recentlyCreatedOwnerStacks++;
      return N(
        o,
        m,
        T,
        !0,
        R ? Error("react-stack-top-frame") : G,
        R ? V(r(o)) : F
      );
    };
  })()), Q;
}
var be;
function Be() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = Me() : ne.exports = ze()), ne.exports;
}
var t = Be();
const se = "A4", U = "<p><br></p>", ee = (e, n = se) => ({
  id: he(),
  index: e,
  size: n,
  content: U,
  images: [],
  isBreakPoint: !1
}), Se = (e, n = se) => (e.length > 0 ? e : [ee(0, n)]).map((r, i) => ({
  id: r.id || he(),
  index: i,
  size: r.size || n,
  content: re(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), re = (e) => typeof e != "string" || e.trim() === "" ? U : e, ue = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || se, r = Se(e.pages || [ee(0, a)], a), i = {
    A4: { width: 794, height: 1123 },
    Letter: { width: 816, height: 1056 },
    Legal: { width: 816, height: 1344 }
  }, l = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (i[a] || i.A4).height
  }];
  return {
    id: he(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || U,
    pageBoundaries: e.pageBoundaries || l
  };
}, Re = ue(), we = _e({
  name: "document",
  initialState: Re,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: a = U, pageSize: r = se } = n.payload || {}, i = { ...ee(0, r), content: re(a) };
      return ue({
        title: e.title,
        pageSize: r,
        pages: [i]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: a, content: r } = n.payload;
      a < 0 || a >= e.pages.length || (e.pages[a].content = re(r), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const a = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, r = Se(a.pages || [], e.pageSize);
      e.pages = r, e.activePage = Math.min(e.activePage, r.length - 1), e.pageBreaks = Array.isArray(a.pageBreaks) ? a.pageBreaks : r.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = r.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const a = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(a, 0, ee(a, e.pageSize)), e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: e.pageSize
      })), e.activePage = a, e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const a = n.payload;
      e.pages.length <= 1 || (e.pages.splice(a, 1), e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : a <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const a = n.payload, r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      a >= 0 && a < r && (e.activePage = a, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const a = n.payload;
      e.pageSize = a, e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: a
      })), e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => ue(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = re(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.activePage >= e.pageBoundaries.length && (e.activePage = Math.max(0, e.pageBoundaries.length - 1)), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: a = "end", pageIndex: r } = n.payload || {}, i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (a === "end")
        e.continuousContent = e.continuousContent + i + "<p><br></p>";
      else if (typeof a == "number") {
        const s = e.continuousContent.substring(0, a), l = e.continuousContent.substring(a);
        e.continuousContent = s + i + l;
      } else if (typeof r == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const l = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && l.length === 0)
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
        else if (r < l.length) {
          const u = l[r], c = document.createElement("page-break");
          c.setAttribute("data-page-break", "true"), c.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const x = document.createElement("p");
          x.innerHTML = "<br>", u.parentNode.insertBefore(c, u.nextSibling), c.parentNode.insertBefore(x, c.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (typeof a == "number" && typeof document < "u") {
        const r = document.createElement("div");
        r.innerHTML = e.continuousContent;
        const i = r.querySelectorAll('page-break, [data-page-break="true"]');
        i[a] && i[a].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, u) => {
          l.setAttribute("data-page-number", String(u + 2));
        }), e.continuousContent = r.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const a = n.payload;
      if (a !== e.editorMode) {
        if (e.editorMode = a, a === "continuous") {
          const r = e.pages.map((i) => i.content).filter((i) => i && i !== U).join(`
`);
          e.continuousContent = r || U;
        } else
          e.continuousContent && e.continuousContent !== U && (e.pages = [{ ...ee(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: a, content: r = U } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent;
          const s = i.querySelectorAll('page-break, [data-page-break="true"]'), l = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (a === 0)
            e.continuousContent = r + l + e.continuousContent;
          else if (a >= s.length)
            e.continuousContent = e.continuousContent + l + r;
          else {
            const u = s[a - 1], c = document.createElement("div");
            c.innerHTML = r;
            const x = document.createElement("page-break");
            x.setAttribute("data-page-break", "true"), x.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), u.parentNode.insertBefore(c, u.nextSibling), u.parentNode.insertBefore(x, c.nextSibling), e.continuousContent = i.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: a, toIndex: r } = n.payload || {};
      if (!(typeof a != "number" || typeof r != "number") && !(a < 0 || r < 0 || a === r)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent, Array.from(i.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let l = i.firstChild, u = [];
          for (; l; )
            l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true") ? (s.push(u), u = []) : u.push(l.cloneNode(!0)), l = l.nextSibling;
          if (u.length > 0 && s.push(u), a >= s.length || r >= s.length)
            return;
          const [c] = s.splice(a, 1);
          s.splice(r, 0, c);
          const x = [];
          s.forEach((N, b) => {
            N.forEach((C) => x.push(C.outerHTML || C.textContent)), b < s.length - 1 && x.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = x.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent;
          const i = Array.from(r.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], l = r.firstChild, u = 0;
          for (; l; ) {
            if (l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true")) {
              if (u === a)
                break;
              u++, s = [];
            } else u === a && s.push(l.cloneNode(!0));
            l = l.nextSibling;
          }
          if (s.length > 0 && a < i.length) {
            const c = i[a], b = s.map((j) => j.outerHTML || j.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', C = document.createElement("div");
            C.innerHTML = b;
            let _ = c;
            Array.from(C.children).forEach((j) => {
              _.parentNode.insertBefore(j.cloneNode(!0), _.nextSibling), _ = _.nextSibling;
            }), e.continuousContent = r.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: en,
  updateTitle: tn,
  updatePageContent: nn,
  updatePages: an,
  addPage: rn,
  deletePage: on,
  setActivePage: Y,
  updatePageSize: Ie,
  resetDocument: sn,
  updateContinuousContent: de,
  updatePageBoundaries: Le,
  addPageBreak: Oe,
  removePageBreak: ln,
  setEditorMode: cn,
  insertPageAt: un,
  movePageTo: dn,
  duplicatePage: gn
} = we.actions, pn = we.reducer, $e = () => {
  const [e, n] = oe({
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
  }), a = I((r, i = null) => {
    if (r === "fontSize") {
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
      const u = window.getSelection();
      if (u && u.rangeCount > 0) {
        const c = u.getRangeAt(0);
        if (c.toString()) {
          const N = document.createElement("span");
          N.style.fontSize = i, c.surroundContents(N);
        }
      }
    } else
      document.execCommand(r, !1, i);
    r === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : r === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : r === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : r === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : r === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : r === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : r === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : r === "justifyFull" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : r === "fontSize" && n((s) => ({ ...s, fontSize: i }));
  }, []);
  return {
    currentFormat: e,
    formatText: a
  };
}, ae = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ke = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, De = (e, n) => {
  const a = Ae(), r = D(null), i = D(null), s = D(e), l = D(!1);
  q(() => {
    s.current = e;
  }, [e]), q(() => () => {
    r.current && clearTimeout(r.current), i.current && clearTimeout(i.current);
  }, []);
  const u = I((d, g) => {
    let k = 0;
    for (let h = 0; h < d.length; h++) {
      const f = d[h], y = f.getBoundingClientRect().height;
      if (k + y > g)
        return { overflowIndex: h, overflowElement: f, accumulatedHeight: k };
      k += y;
    }
    return null;
  }, []), c = I((d, g) => {
    if (!d || !n?.current)
      return !1;
    try {
      const k = n.current, h = document.createElement("page-break");
      return h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", g || "2"), d.parentNode.insertBefore(h, d), !0;
    } catch (k) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", k), !1;
    }
  }, [n]), x = I(() => {
    if (!(!n?.current || l.current))
      try {
        l.current = !0;
        const d = n.current, g = s.current || "A4", h = (ae[g] || ae.A4).height - ke.top - ke.bottom, f = Array.from(d.children), y = f.filter(
          (E) => E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true"
        ), B = [];
        let P = [];
        for (const E of f)
          E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true" ? P.length > 0 && (B.push(P), P = []) : P.push(E);
        P.length > 0 && B.push(P), B.length === 0 && f.length > 0 && B.push(f.filter(
          (E) => !(E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        ));
        let $ = !1;
        for (let E = 0; E < B.length; E++) {
          const S = B[E], M = u(S, h);
          if (M && M.overflowIndex > 0) {
            const O = E + 2;
            if (c(M.overflowElement, O)) {
              $ = !0;
              break;
            }
          }
        }
        if ($) {
          const E = d.innerHTML;
          a(de(E)), setTimeout(() => {
            C();
          }, 50);
        }
      } catch (d) {
        console.warn("[checkAndReflow] Reflow failed:", d);
      } finally {
        l.current = !1;
      }
  }, [n, u, c, a]), N = I((d = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, x();
    }, d);
  }, [x]), b = I((d = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const g = d.pageSize || s.current || "A4", k = ae[g] || ae.A4, h = n.current, f = h.querySelectorAll('page-break, [data-page-break="true"]'), y = [];
    return y.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: k.height
      // No breakElement for first page
    }), f.forEach((B, P) => {
      const $ = B.getBoundingClientRect(), E = h.getBoundingClientRect(), S = $.top - E.top + h.scrollTop;
      y.push({
        id: `page-${P + 1}`,
        pageNumber: P + 2,
        top: S,
        height: k.height
        // Don't store breakElement - not serializable
      });
    }), y;
  }, [n]), C = I((d = {}) => {
    const g = b(d);
    return a(Le(g)), g;
  }, [b, a]), _ = I((d = {}) => {
    r.current && clearTimeout(r.current);
    const g = typeof d.delay == "number" ? d.delay : 300;
    r.current = setTimeout(() => {
      r.current = null, C(d);
    }, Math.max(0, g));
  }, [C]), j = I(() => {
    if (!n?.current)
      return 0;
    const d = window.getSelection();
    if (!d || d.rangeCount === 0)
      return 0;
    try {
      const g = d.getRangeAt(0), k = n.current;
      let h = g.startContainer;
      const f = Array.from(k.querySelectorAll('page-break, [data-page-break="true"]'));
      if (f.length === 0)
        return 0;
      for (; h && h !== k; ) {
        for (let y = f.length - 1; y >= 0; y--)
          if (f[y].compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)
            return y + 1;
        h = h.parentNode;
      }
      return 0;
    } catch (g) {
      return console.warn("[getCurrentPage] Failed to calculate page:", g), 0;
    }
  }, [n]), p = I((d, g) => {
    if (!g?.current || !n?.current)
      return;
    n.current;
    const h = b().find((f) => f.pageNumber === d + 1);
    h && (g.current.scrollTo({
      top: h.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      z(d);
    }, 300));
  }, [n]), z = I((d) => {
    if (!n?.current)
      return;
    const g = n.current;
    g.focus();
    try {
      let k = null, h = 0;
      if (d === 0)
        k = g.firstChild, h = 0;
      else {
        const y = g.querySelectorAll('page-break, [data-page-break="true"]')[d - 1];
        y && y.nextSibling && (k = y.nextSibling, h = 0);
      }
      if (k) {
        const f = document.createRange(), y = window.getSelection();
        k.nodeType === Node.TEXT_NODE ? f.setStart(k, h) : f.setStart(k, 0), f.collapse(!0), y.removeAllRanges(), y.addRange(f);
      }
    } catch (k) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", k);
    }
  }, [n]), L = I((d) => {
    if (!n?.current)
      return !1;
    const g = n.current;
    if (b().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const h = Array.from(g.querySelectorAll('page-break, [data-page-break="true"]'));
      if (d > h.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const f = window.getSelection();
      let y = !1, B = [], P = null;
      if (d === 0) {
        const S = h[0];
        if (!S)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let M = g.firstChild;
        for (; M && M !== S; )
          B.push(M), M = M.nextSibling;
        P = S;
      } else {
        const S = h[d - 1];
        if (!S)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const M = h[d];
        let O = S.nextSibling;
        for (; O && O !== M; )
          B.push(O), O = O.nextSibling;
        P = S;
      }
      if (f && f.rangeCount > 0) {
        const M = f.getRangeAt(0).startContainer;
        for (const O of B)
          if (O.contains(M) || O === M) {
            y = !0;
            break;
          }
      }
      P && P.parentNode && P.remove(), B.forEach((S) => {
        S.parentNode && S.remove();
      }), g.querySelectorAll('page-break, [data-page-break="true"]').forEach((S, M) => {
        S.setAttribute("data-page-number", String(M + 2));
      }), y && setTimeout(() => {
        z(0);
      }, 50);
      const E = g.innerHTML;
      return a(de(E)), setTimeout(() => {
        C();
      }, 100), !0;
    } catch (h) {
      return console.error("[removePageAndContent] Failed to remove page:", h), !1;
    }
  }, [n, b, a, C, z]);
  return {
    calculatePageBoundaries: b,
    checkAndUpdateBoundaries: _,
    updateBoundaries: C,
    getCurrentPage: j,
    scrollToPage: p,
    positionCursorAtPage: z,
    checkAndReflow: x,
    triggerAutoReflow: N,
    removePageAndContent: L,
    boundaryTimeoutRef: r,
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
  (n, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), ye = (e) => {
  const n = qe(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ne = (...e) => e.filter((n, a, r) => !!n && n.trim() !== "" && r.indexOf(n) === a).join(" ").trim(), Ue = (e) => {
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
const Ge = je(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: l,
    ...u
  }, c) => ce(
    "svg",
    {
      ref: c,
      ...Ve,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(a) * 24 / Number(n) : a,
      className: Ne("lucide", i),
      ...!s && !Ue(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([x, N]) => ce(x, N)),
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
  const a = je(
    ({ className: r, ...i }, s) => ce(Ge, {
      ref: s,
      iconNode: n,
      className: Ne(
        `lucide-${He(ye(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return a.displayName = ye(e), a;
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
const Je = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Pe = w("chevron-left", Je);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ee = w("chevron-right", Fe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Ze = w("file-check", Xe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ie = w("file-text", Ke);
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
const at = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], rt = w("heading-2", at);
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
], xt = w("plus", mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], kt = w("redo", bt);
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
const At = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], St = w("strikethrough", At);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Nt = w("table", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Et = w("text-align-center", Pt);
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
const It = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Lt = w("underline", It);
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
], Ht = w("x", Dt), qt = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: r, pageCount: i }) => {
  const s = pe((p) => p.document), { pages: l, activePage: u, continuousContent: c, editorMode: x } = s, [N, b] = oe(0), [C, _] = oe([]);
  q(() => {
    if (r !== void 0 && i !== void 0) {
      if (b(r), c) {
        const L = document.createElement("div");
        L.innerHTML = c;
        const d = L.querySelectorAll("h1, h2, h3, h4, h5, h6"), g = Array.from(d).map((k, h) => {
          const f = parseInt(k.tagName.charAt(1)), y = k.textContent.trim();
          return y ? {
            id: `heading-${h}`,
            level: f,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        _(g);
      }
      return;
    }
    let p = 0;
    const z = [];
    l.forEach((L, d) => {
      if (L.content) {
        const g = document.createElement("div");
        g.innerHTML = L.content;
        const h = (g.textContent || g.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        p += h.length, g.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, B) => {
          const P = parseInt(y.tagName.charAt(1)), $ = y.textContent.trim();
          $ && z.push({
            id: `heading-${d}-${B}`,
            level: P,
            text: $,
            page: d + 1
          });
        });
      }
    }), b(p), _(z);
  }, [l, r, i, c]);
  const j = i !== void 0 ? i : l.length;
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
            /* @__PURE__ */ t.jsx(ie, { size: 18 }),
            /* @__PURE__ */ t.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ t.jsx(Ee, { size: 16 }) : /* @__PURE__ */ t.jsx(Pe, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(Ze, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: j })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(et, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: N.toLocaleString() })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(ie, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: u + 1 })
            ] })
          ] }),
          C.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsxs("h3", { children: [
              /* @__PURE__ */ t.jsx(Te, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "document-outline", "data-testid": "outline", children: C.map((p) => {
              const z = p.level === 1 ? nt : p.level === 2 ? rt : it;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${p.level}`,
                  style: { marginLeft: `${(p.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ t.jsx(z, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ t.jsx("span", { className: "outline-text", children: p.text }),
                    /* @__PURE__ */ t.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      p.page
                    ] })
                  ]
                },
                p.id
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
  return new Promise((n, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (s) => {
      const l = s.target.result;
      if (l.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const x = `editor-image-${Ut()}`;
        localStorage.setItem(x, l), n(x);
      } catch (x) {
        x.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(x);
      }
    }, i.onerror = () => {
      a(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function hn(e) {
  return localStorage.getItem(e);
}
function fn(e) {
  localStorage.removeItem(e);
}
function mn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function xn() {
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
  _format(n, a, r) {
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
const ve = new Gt("Editor"), Wt = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: a,
  onPageSizeChange: r,
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
      const c = await Vt(l), x = localStorage.getItem(c);
      x && (document.execCommand("insertImage", !1, x), ve.info("Image inserted", { key: c }));
    } catch (u) {
      ve.error("Error uploading image", u);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ t.jsx(Ye, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ t.jsx(ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ t.jsx(Lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ t.jsx(St, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ t.jsx(Rt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ t.jsx(Et, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ t.jsx(_t, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ t.jsx(zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        onChange: (l) => a("fontName", l.target.value),
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
        onChange: (l) => a("fontSize", l.target.value),
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
        onClick: () => a("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ t.jsx(Te, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ t.jsx(ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertCheckList"),
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
          l && a("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ t.jsx(gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ t.jsx(Nt, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ t.jsx(ie, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("undo"),
        title: "Undo",
        children: /* @__PURE__ */ t.jsx($t, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("redo"),
        title: "Redo",
        children: /* @__PURE__ */ t.jsx(kt, { size: 16 })
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
        onChange: (l) => r(l.target.value),
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
  pageSize: a,
  pageBoundaries: r = [],
  editorRef: i,
  onInput: s,
  onKeyDown: l,
  onClick: u,
  onScroll: c
}) => {
  const x = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, N = (b) => {
    if (b.key === "Tab")
      return b.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const _ = C.getRangeAt(0), { startContainer: j, endContainer: p } = _, z = (L) => L ? L.nodeType === Node.ELEMENT_NODE ? L.tagName === "PAGE-BREAK" || L.getAttribute("data-page-break") === "true" : L.parentElement && z(L.parentElement) : !1;
    if ((b.key === "Backspace" || b.key === "Delete") && (z(j) || z(p)))
      return b.preventDefault(), !1;
    l && l(b);
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
            padding: `${x.top}px ${x.right}px ${x.bottom}px ${x.left}px`,
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
          onKeyDown: N,
          onClick: u,
          onScroll: c,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, Jt = ({
  onNavigate: e,
  onAddPage: n,
  onDeletePage: a,
  onPageSizeChange: r
} = {}) => {
  const { pageBoundaries: i, activePage: s, pageSize: l } = pe((j) => j.document), u = Math.max(i?.length || 0, 1), c = (j) => {
    e && e(j);
  }, x = () => {
    n && n();
  }, N = (j) => {
    if (u <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    a && a(j);
  }, b = (j) => {
    r && r(j);
  }, C = () => {
    s > 0 && c(s - 1);
  }, _ = () => {
    s < u - 1 && c(s + 1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "page-manager", children: [
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
          value: l,
          onChange: (j) => b(j.target.value),
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
          onClick: C,
          disabled: s === 0,
          "aria-label": "Previous page",
          title: "Previous page (Ctrl+↑)",
          children: /* @__PURE__ */ t.jsx(Pe, { size: 16 })
        }
      ),
      /* @__PURE__ */ t.jsxs("span", { className: "page-counter", "aria-live": "polite", children: [
        "Page ",
        s + 1,
        " of ",
        u
      ] }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: _,
          disabled: s >= u - 1,
          "aria-label": "Next page",
          title: "Next page (Ctrl+↓)",
          children: /* @__PURE__ */ t.jsx(Ee, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "page-list", children: (i && i.length > 0 ? i : [{ id: "page-0", pageNumber: 1 }]).map((j, p) => /* @__PURE__ */ t.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${p === s ? "active" : ""}`,
          onClick: () => c(p),
          "aria-label": `Go to page ${p + 1}`,
          "aria-current": p === s ? "page" : void 0,
          children: [
            /* @__PURE__ */ t.jsx(ie, { size: 14 }),
            /* @__PURE__ */ t.jsxs("span", { children: [
              "Page ",
              p + 1
            ] })
          ]
        }
      ),
      u > 1 && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (z) => {
            z.stopPropagation(), N(p);
          },
          "aria-label": `Delete page ${p + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ t.jsx(Ht, { size: 14 })
        }
      )
    ] }, j.id || `page-${p}`)) }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: x,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ t.jsx(xt, { size: 16 }),
          /* @__PURE__ */ t.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, Ft = ge.memo(Jt), Ce = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, bn = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: r,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: l = !0,
  showPageManager: u = !0
}) => {
  const c = Ae(), x = pe((v) => v.document), { pageSize: N, continuousContent: b, pageBoundaries: C, activePage: _ } = x, j = D(null), p = D(null), { currentFormat: z, formatText: L } = $e(), {
    checkAndUpdateBoundaries: d,
    getCurrentPage: g,
    scrollToPage: k,
    positionCursorAtPage: h,
    updateBoundaries: f,
    triggerAutoReflow: y,
    removePageAndContent: B
  } = De(N, p), P = fe(() => Ce[N] || Ce.A4, [N]), [$, E] = oe(!1), S = D(null), M = D(!1), O = D(!1);
  q(() => {
    if (p.current && !O.current) {
      p.current.innerHTML = b, O.current = !0;
      const v = setTimeout(() => {
        f();
      }, 50);
      return () => clearTimeout(v);
    }
  }, [b, f]);
  const V = D(b);
  q(() => {
    p.current && O.current && V.current !== b && (p.current.innerHTML !== b && (p.current.innerHTML = b, setTimeout(() => {
      f(), M.current && (M.current = !1, setTimeout(() => {
        const A = C.length > 0 ? C.length - 1 : 0;
        c(Y(A)), k(A, j);
      }, 50));
    }, 50)), V.current = b);
  }, [b, f, C.length, c, k]);
  const J = D(!1);
  q(() => {
    if (!J.current && p.current) {
      J.current = !0;
      const v = setTimeout(() => {
        f();
      }, 100);
      return () => clearTimeout(v);
    }
  }, [f]), q(() => {
    const v = setTimeout(() => {
      p.current && p.current.focus();
    }, 200);
    return () => clearTimeout(v);
  }, []);
  const te = I((v) => {
    const A = v.currentTarget.innerHTML;
    c(de(A)), d(), y();
    const H = g();
    H !== _ && c(Y(H));
  }, [d, c, g, _, y]), G = I((v) => {
    c(Ie(v)), f({ pageSize: v }), i && i(v);
  }, [c, f, i]), F = I((v) => {
    c(Y(v)), k(v, j), n && n(v);
  }, [c, k, n]), X = I(() => {
    M.current = !0, c(Oe({ position: "end" })), a && a();
  }, [c, a]), o = I(() => {
    const v = window.getSelection();
    if (v && v.rangeCount > 0) {
      if (!p?.current) return;
      const Z = `<page-break data-page-break="true" contenteditable="false" data-page-number="${p.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Z), setTimeout(() => {
        f();
        const le = g();
        c(Y(le));
      }, 150);
    }
  }, [f, g, c]), m = I((v) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    B(v) && (c(Y(0)), r && r(v));
  }, [C.length, B, c, r]), T = I(() => {
    !j.current || !p.current || (S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      const v = g();
      v !== _ && c(Y(v)), S.current = null;
    }, 100));
  }, [g, _, c]), R = fe(() => {
    if (!b) return 0;
    const A = b.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return A ? A.length : 0;
  }, [b]), W = C.length || 1;
  return q(() => () => {
    S.current && clearTimeout(S.current);
  }, []), /* @__PURE__ */ t.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ t.jsx(
      Wt,
      {
        currentFormat: z,
        pageSize: N,
        onFormatText: L,
        onPageSizeChange: G,
        onAddPageBreak: o
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ t.jsx(
        qt,
        {
          editorView: null,
          isCollapsed: $,
          onToggle: () => E((v) => !v),
          wordCount: R,
          pageCount: W
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: j,
          onScroll: T,
          children: /* @__PURE__ */ t.jsx(
            Yt,
            {
              content: b,
              dimensions: P,
              pageSize: N,
              pageBoundaries: C,
              editorRef: p,
              onInput: te,
              onClick: () => p.current?.focus()
            }
          )
        }
      ),
      u && /* @__PURE__ */ t.jsx("div", { className: "page-manager-sidebar", children: e ? ge.cloneElement(e, {
        onNavigate: F,
        onAddPage: X,
        onDeletePage: m,
        onPageSizeChange: G
      }) : /* @__PURE__ */ t.jsx(
        Ft,
        {
          onNavigate: F,
          onAddPage: X,
          onDeletePage: m,
          onPageSizeChange: G
        }
      ) })
    ] })
  ] });
}, kn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  bn as ContentEditableEditor,
  Yt as ContinuousPageView,
  Wt as EditorToolbar,
  kn as PAGE_DIMENSIONS,
  Ft as PageManager,
  qt as Sidebar,
  rn as addPage,
  Oe as addPageBreak,
  mn as clearImages,
  fn as deleteImage,
  on as deletePage,
  pn as documentReducer,
  gn as duplicatePage,
  xn as getAllImageKeys,
  hn as getImage,
  en as initializeDocument,
  un as insertPageAt,
  Gt as logger,
  dn as movePageTo,
  ln as removePageBreak,
  sn as resetDocument,
  Vt as saveImage,
  Y as setActivePage,
  cn as setEditorMode,
  de as updateContinuousContent,
  Le as updatePageBoundaries,
  nn as updatePageContent,
  Ie as updatePageSize,
  an as updatePages,
  tn as updateTitle,
  De as useContinuousReflow,
  $e as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
