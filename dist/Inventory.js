import * as React from "react";
import React__default, { useLayoutEffect, forwardRef, useContext, createContext, createElement, Fragment as Fragment$1, useRef, Children, isValidElement, cloneElement, useDebugValue, useEffect } from "react";
const common = {
  black: "#000",
  white: "#fff"
}, common$1 = common, red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, red$1 = red, purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, purple$1 = purple, blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, blue$1 = blue, lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, lightBlue$1 = lightBlue, green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, green$1 = green, orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, orange$1 = orange, grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, grey$1 = grey;
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var A = arguments[e];
      for (var n in A)
        Object.prototype.hasOwnProperty.call(A, n) && (t[n] = A[n]);
    }
    return t;
  }, _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(t, e) {
  if (t == null)
    return {};
  var A = {}, n = Object.keys(t), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(e.indexOf(o) >= 0) && (A[o] = t[o]);
  return A;
}
function memoize$1(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(A) {
    return e[A] === void 0 && (e[A] = t(A)), e[A];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize$1(
  function(t) {
    return reactPropsRegex.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
);
function sheetForTag(t) {
  if (t.sheet)
    return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t)
      return document.styleSheets[e];
}
function createStyleElement(t) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t.key), t.nonce !== void 0 && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var StyleSheet = /* @__PURE__ */ function() {
  function t(A) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = A.speedy === void 0 ? process.env.NODE_ENV === "production" : A.speedy, this.tags = [], this.ctr = 0, this.nonce = A.nonce, this.key = A.key, this.container = A.container, this.prepend = A.prepend, this.insertionPoint = A.insertionPoint, this.before = null;
  }
  var e = t.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = sheetForTag(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, t;
}(), MS = "-ms-", MOZ = "-moz-", WEBKIT = "-webkit-", COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", KEYFRAMES = "@keyframes", abs = Math.abs, from$1 = String.fromCharCode, assign = Object.assign;
function hash$1(t, e) {
  return charat(t, 0) ^ 45 ? (((e << 2 ^ charat(t, 0)) << 2 ^ charat(t, 1)) << 2 ^ charat(t, 2)) << 2 ^ charat(t, 3) : 0;
}
function trim(t) {
  return t.trim();
}
function match(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function replace(t, e, A) {
  return t.replace(e, A);
}
function indexof(t, e) {
  return t.indexOf(e);
}
function charat(t, e) {
  return t.charCodeAt(e) | 0;
}
function substr(t, e, A) {
  return t.slice(e, A);
}
function strlen(t) {
  return t.length;
}
function sizeof(t) {
  return t.length;
}
function append(t, e) {
  return e.push(t), t;
}
function combine(t, e) {
  return t.map(e).join("");
}
var line = 1, column = 1, length = 0, position$1 = 0, character = 0, characters = "";
function node(t, e, A, n, o, s, a) {
  return { value: t, root: e, parent: A, type: n, props: o, children: s, line, column, length: a, return: "" };
}
function copy(t, e) {
  return assign(node("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function char() {
  return character;
}
function prev() {
  return character = position$1 > 0 ? charat(characters, --position$1) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position$1 < length ? charat(characters, position$1++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position$1);
}
function caret() {
  return position$1;
}
function slice(t, e) {
  return substr(characters, t, e);
}
function token(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc$1(t) {
  return line = column = 1, length = strlen(characters = t), position$1 = 0, [];
}
function dealloc(t) {
  return characters = "", t;
}
function delimit(t) {
  return trim(slice(position$1 - 1, delimiter(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function whitespace(t) {
  for (; (character = peek()) && character < 33; )
    next();
  return token(t) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(t, e) {
  for (; --e && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(t, caret() + (e < 6 && peek() == 32 && next() == 32));
}
function delimiter(t) {
  for (; next(); )
    switch (character) {
      case t:
        return position$1;
      case 34:
      case 39:
        t !== 34 && t !== 39 && delimiter(character);
        break;
      case 40:
        t === 41 && delimiter(t);
        break;
      case 92:
        next();
        break;
    }
  return position$1;
}
function commenter(t, e) {
  for (; next() && t + character !== 47 + 10; )
    if (t + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(e, position$1 - 1) + "*" + from$1(t === 47 ? t : next());
}
function identifier(t) {
  for (; !token(peek()); )
    next();
  return slice(t, position$1);
}
function compile(t) {
  return dealloc(parse("", null, null, null, [""], t = alloc$1(t), 0, [0], t));
}
function parse(t, e, A, n, o, s, a, c, l) {
  for (var B = 0, g = 0, E = a, I = 0, x = 0, U = 0, v = 1, D = 1, T = 1, Z = 0, j = "", L = o, Y = s, W = n, h = j; D; )
    switch (U = Z, Z = next()) {
      case 40:
        if (U != 108 && charat(h, E - 1) == 58) {
          indexof(h += replace(delimit(Z), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        h += delimit(Z);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        h += whitespace(U);
        break;
      case 92:
        h += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), e, A), l);
            break;
          default:
            h += "/";
        }
        break;
      case 123 * v:
        c[B++] = strlen(h) * T;
      case 125 * v:
      case 59:
      case 0:
        switch (Z) {
          case 0:
          case 125:
            D = 0;
          case 59 + g:
            x > 0 && strlen(h) - E && append(x > 32 ? declaration(h + ";", n, A, E - 1) : declaration(replace(h, " ", "") + ";", n, A, E - 2), l);
            break;
          case 59:
            h += ";";
          default:
            if (append(W = ruleset(h, e, A, B, g, o, c, j, L = [], Y = [], E), s), Z === 123)
              if (g === 0)
                parse(h, e, W, W, L, s, E, c, Y);
              else
                switch (I === 99 && charat(h, 3) === 110 ? 100 : I) {
                  case 100:
                  case 109:
                  case 115:
                    parse(t, W, W, n && append(ruleset(t, W, W, 0, 0, o, c, j, o, L = [], E), Y), o, Y, E, c, n ? L : Y);
                    break;
                  default:
                    parse(h, W, W, W, [""], Y, 0, c, Y);
                }
        }
        B = g = x = 0, v = T = 1, j = h = "", E = a;
        break;
      case 58:
        E = 1 + strlen(h), x = U;
      default:
        if (v < 1) {
          if (Z == 123)
            --v;
          else if (Z == 125 && v++ == 0 && prev() == 125)
            continue;
        }
        switch (h += from$1(Z), Z * v) {
          case 38:
            T = g > 0 ? 1 : (h += "\f", -1);
            break;
          case 44:
            c[B++] = (strlen(h) - 1) * T, T = 1;
            break;
          case 64:
            peek() === 45 && (h += delimit(next())), I = peek(), g = E = strlen(j = h += identifier(caret())), Z++;
            break;
          case 45:
            U === 45 && strlen(h) == 2 && (v = 0);
        }
    }
  return s;
}
function ruleset(t, e, A, n, o, s, a, c, l, B, g) {
  for (var E = o - 1, I = o === 0 ? s : [""], x = sizeof(I), U = 0, v = 0, D = 0; U < n; ++U)
    for (var T = 0, Z = substr(t, E + 1, E = abs(v = a[U])), j = t; T < x; ++T)
      (j = trim(v > 0 ? I[T] + " " + Z : replace(Z, /&\f/g, I[T]))) && (l[D++] = j);
  return node(t, e, A, o === 0 ? RULESET : c, l, B, g);
}
function comment(t, e, A) {
  return node(t, e, A, COMMENT, from$1(char()), substr(t, 2, -2), 0);
}
function declaration(t, e, A, n) {
  return node(t, e, A, DECLARATION, substr(t, 0, n), substr(t, n + 1, -1), n);
}
function serialize(t, e) {
  for (var A = "", n = sizeof(t), o = 0; o < n; o++)
    A += e(t[o], o, t, e) || "";
  return A;
}
function stringify(t, e, A, n) {
  switch (t.type) {
    case IMPORT:
    case DECLARATION:
      return t.return = t.return || t.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return t.return = t.value + "{" + serialize(t.children, n) + "}";
    case RULESET:
      t.value = t.props.join(",");
  }
  return strlen(A = serialize(t.children, n)) ? t.return = t.value + "{" + A + "}" : "";
}
function middleware(t) {
  var e = sizeof(t);
  return function(A, n, o, s) {
    for (var a = "", c = 0; c < e; c++)
      a += t[c](A, n, o, s) || "";
    return a;
  };
}
function rulesheet(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
var identifierWithPointTracking = function(e, A, n) {
  for (var o = 0, s = 0; o = s, s = peek(), o === 38 && s === 12 && (A[n] = 1), !token(s); )
    next();
  return slice(e, position$1);
}, toRules = function(e, A) {
  var n = -1, o = 44;
  do
    switch (token(o)) {
      case 0:
        o === 38 && peek() === 12 && (A[n] = 1), e[n] += identifierWithPointTracking(position$1 - 1, A, n);
        break;
      case 2:
        e[n] += delimit(o);
        break;
      case 4:
        if (o === 44) {
          e[++n] = peek() === 58 ? "&\f" : "", A[n] = e[n].length;
          break;
        }
      default:
        e[n] += from$1(o);
    }
  while (o = next());
  return e;
}, getRules = function(e, A) {
  return dealloc(toRules(alloc$1(e), A));
}, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var A = e.value, n = e.parent, o = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(e.props.length === 1 && A.charCodeAt(0) !== 58 && !fixedElements.get(n)) && !o) {
      fixedElements.set(e, !0);
      for (var s = [], a = getRules(A, s), c = n.props, l = 0, B = 0; l < a.length; l++)
        for (var g = 0; g < c.length; g++, B++)
          e.props[B] = s[l] ? a[l].replace(/&\f/g, c[g]) : c[g] + " " + a[l];
    }
  }
}, removeLabel = function(e) {
  if (e.type === "decl") {
    var A = e.value;
    A.charCodeAt(0) === 108 && A.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(e) {
  return e.type === "comm" && e.children.indexOf(ignoreFlag) > -1;
}, createUnsafeSelectorsAlarm = function(e) {
  return function(A, n, o) {
    if (!(A.type !== "rule" || e.compat)) {
      var s = A.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var a = A.parent === o[0], c = a ? o[0].children : o, l = c.length - 1; l >= 0; l--) {
          var B = c[l];
          if (B.line < A.line)
            break;
          if (B.column < A.column) {
            if (isIgnoringComment(B))
              return;
            break;
          }
        }
        s.forEach(function(g) {
          console.error('The pseudo class "' + g + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + g.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, isImportRule = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, isPrependedWithRegularRules = function(e, A) {
  for (var n = e - 1; n >= 0; n--)
    if (!isImportRule(A[n]))
      return !0;
  return !1;
}, nullifyElement = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, incorrectImportAlarm = function(e, A, n) {
  !isImportRule(e) || (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nullifyElement(e)) : isPrependedWithRegularRules(A, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nullifyElement(e)));
};
function prefix(t, e) {
  switch (hash$1(t, e)) {
    case 5103:
      return WEBKIT + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + t + MOZ + t + MS + t + t;
    case 6828:
    case 4268:
      return WEBKIT + t + MS + t + t;
    case 6165:
      return WEBKIT + t + MS + "flex-" + t + t;
    case 5187:
      return WEBKIT + t + replace(t, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + t;
    case 5443:
      return WEBKIT + t + MS + "flex-item-" + replace(t, /flex-|-self/, "") + t;
    case 4675:
      return WEBKIT + t + MS + "flex-line-pack" + replace(t, /align-content|flex-|-self/, "") + t;
    case 5548:
      return WEBKIT + t + MS + replace(t, "shrink", "negative") + t;
    case 5292:
      return WEBKIT + t + MS + replace(t, "basis", "preferred-size") + t;
    case 6060:
      return WEBKIT + "box-" + replace(t, "-grow", "") + WEBKIT + t + MS + replace(t, "grow", "positive") + t;
    case 4554:
      return WEBKIT + replace(t, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + t;
    case 6187:
      return replace(replace(replace(t, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return replace(t, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(t, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + t + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(t, /(.+)-inline(.+)/, WEBKIT + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(t) - 1 - e > 6)
        switch (charat(t, e + 1)) {
          case 109:
            if (charat(t, e + 4) !== 45)
              break;
          case 102:
            return replace(t, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~indexof(t, "stretch") ? prefix(replace(t, "stretch", "fill-available"), e) + t : t;
        }
      break;
    case 4949:
      if (charat(t, e + 1) !== 115)
        break;
    case 6444:
      switch (charat(t, strlen(t) - 3 - (~indexof(t, "!important") && 10))) {
        case 107:
          return replace(t, ":", ":" + WEBKIT) + t;
        case 101:
          return replace(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(t, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + t;
      }
      break;
    case 5936:
      switch (charat(t, e + 11)) {
        case 114:
          return WEBKIT + t + MS + replace(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return WEBKIT + t + MS + replace(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return WEBKIT + t + MS + replace(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return WEBKIT + t + MS + t + t;
  }
  return t;
}
var prefixer = function(e, A, n, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case DECLARATION:
        e.return = prefix(e.value, e.length);
        break;
      case KEYFRAMES:
        return serialize([copy(e, {
          value: replace(e.value, "@", "@" + WEBKIT)
        })], o);
      case RULESET:
        if (e.length)
          return combine(e.props, function(s) {
            switch (match(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(e, {
                  props: [replace(s, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], o);
              case "::placeholder":
                return serialize([copy(e, {
                  props: [replace(s, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(e, {
                  props: [replace(s, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(e, {
                  props: [replace(s, /:(plac\w+)/, MS + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, defaultStylisPlugins = [prefixer], createCache = function(e) {
  var A = e.key;
  if (process.env.NODE_ENV !== "production" && !A)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (A === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var D = v.getAttribute("data-emotion");
      D.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = e.stylisPlugins || defaultStylisPlugins;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(A))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + A + '" was passed');
  var s = {}, a, c = [];
  a = e.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + A + ' "]'),
    function(v) {
      for (var D = v.getAttribute("data-emotion").split(" "), T = 1; T < D.length; T++)
        s[D[T]] = !0;
      c.push(v);
    }
  );
  var l, B = [compat, removeLabel];
  process.env.NODE_ENV !== "production" && B.push(createUnsafeSelectorsAlarm({
    get compat() {
      return U.compat;
    }
  }), incorrectImportAlarm);
  {
    var g, E = [stringify, process.env.NODE_ENV !== "production" ? function(v) {
      v.root || (v.return ? g.insert(v.return) : v.value && v.type !== COMMENT && g.insert(v.value + "{}"));
    } : rulesheet(function(v) {
      g.insert(v);
    })], I = middleware(B.concat(o, E)), x = function(D) {
      return serialize(compile(D), I);
    };
    l = function(D, T, Z, j) {
      g = Z, process.env.NODE_ENV !== "production" && T.map !== void 0 && (g = {
        insert: function(Y) {
          Z.insert(Y + T.map);
        }
      }), x(D ? D + "{" + T.styles + "}" : T.styles), j && (U.inserted[T.name] = !0);
    };
  }
  var U = {
    key: A,
    sheet: new StyleSheet({
      key: A,
      container: a,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return U.sheet.hydrate(c), U;
};
function getDefaultExportFromCjs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var reactIs$2 = { exports: {} }, reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min$1;
function requireReactIs_production_min$1() {
  if (hasRequiredReactIs_production_min$1)
    return reactIs_production_min$1;
  hasRequiredReactIs_production_min$1 = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, A = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, B = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, E = t ? Symbol.for("react.suspense") : 60113, I = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, T = t ? Symbol.for("react.responder") : 60118, Z = t ? Symbol.for("react.scope") : 60119;
  function j(Y) {
    if (typeof Y == "object" && Y !== null) {
      var W = Y.$$typeof;
      switch (W) {
        case e:
          switch (Y = Y.type, Y) {
            case l:
            case B:
            case n:
            case s:
            case o:
            case E:
              return Y;
            default:
              switch (Y = Y && Y.$$typeof, Y) {
                case c:
                case g:
                case U:
                case x:
                case a:
                  return Y;
                default:
                  return W;
              }
          }
        case A:
          return W;
      }
    }
  }
  function L(Y) {
    return j(Y) === B;
  }
  return reactIs_production_min$1.AsyncMode = l, reactIs_production_min$1.ConcurrentMode = B, reactIs_production_min$1.ContextConsumer = c, reactIs_production_min$1.ContextProvider = a, reactIs_production_min$1.Element = e, reactIs_production_min$1.ForwardRef = g, reactIs_production_min$1.Fragment = n, reactIs_production_min$1.Lazy = U, reactIs_production_min$1.Memo = x, reactIs_production_min$1.Portal = A, reactIs_production_min$1.Profiler = s, reactIs_production_min$1.StrictMode = o, reactIs_production_min$1.Suspense = E, reactIs_production_min$1.isAsyncMode = function(Y) {
    return L(Y) || j(Y) === l;
  }, reactIs_production_min$1.isConcurrentMode = L, reactIs_production_min$1.isContextConsumer = function(Y) {
    return j(Y) === c;
  }, reactIs_production_min$1.isContextProvider = function(Y) {
    return j(Y) === a;
  }, reactIs_production_min$1.isElement = function(Y) {
    return typeof Y == "object" && Y !== null && Y.$$typeof === e;
  }, reactIs_production_min$1.isForwardRef = function(Y) {
    return j(Y) === g;
  }, reactIs_production_min$1.isFragment = function(Y) {
    return j(Y) === n;
  }, reactIs_production_min$1.isLazy = function(Y) {
    return j(Y) === U;
  }, reactIs_production_min$1.isMemo = function(Y) {
    return j(Y) === x;
  }, reactIs_production_min$1.isPortal = function(Y) {
    return j(Y) === A;
  }, reactIs_production_min$1.isProfiler = function(Y) {
    return j(Y) === s;
  }, reactIs_production_min$1.isStrictMode = function(Y) {
    return j(Y) === o;
  }, reactIs_production_min$1.isSuspense = function(Y) {
    return j(Y) === E;
  }, reactIs_production_min$1.isValidElementType = function(Y) {
    return typeof Y == "string" || typeof Y == "function" || Y === n || Y === B || Y === s || Y === o || Y === E || Y === I || typeof Y == "object" && Y !== null && (Y.$$typeof === U || Y.$$typeof === x || Y.$$typeof === a || Y.$$typeof === c || Y.$$typeof === g || Y.$$typeof === D || Y.$$typeof === T || Y.$$typeof === Z || Y.$$typeof === v);
  }, reactIs_production_min$1.typeOf = j, reactIs_production_min$1;
}
var reactIs_development$1 = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  return hasRequiredReactIs_development$1 || (hasRequiredReactIs_development$1 = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, A = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, B = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, E = t ? Symbol.for("react.suspense") : 60113, I = t ? Symbol.for("react.suspense_list") : 60120, x = t ? Symbol.for("react.memo") : 60115, U = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, T = t ? Symbol.for("react.responder") : 60118, Z = t ? Symbol.for("react.scope") : 60119;
    function j(z) {
      return typeof z == "string" || typeof z == "function" || z === n || z === B || z === s || z === o || z === E || z === I || typeof z == "object" && z !== null && (z.$$typeof === U || z.$$typeof === x || z.$$typeof === a || z.$$typeof === c || z.$$typeof === g || z.$$typeof === D || z.$$typeof === T || z.$$typeof === Z || z.$$typeof === v);
    }
    function L(z) {
      if (typeof z == "object" && z !== null) {
        var pe = z.$$typeof;
        switch (pe) {
          case e:
            var re = z.type;
            switch (re) {
              case l:
              case B:
              case n:
              case s:
              case o:
              case E:
                return re;
              default:
                var d = re && re.$$typeof;
                switch (d) {
                  case c:
                  case g:
                  case U:
                  case x:
                  case a:
                    return d;
                  default:
                    return pe;
                }
            }
          case A:
            return pe;
        }
      }
    }
    var Y = l, W = B, h = c, C = a, y = e, R = g, G = n, N = U, M = x, S = A, p = s, w = o, k = E, O = !1;
    function te(z) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(z) || L(z) === l;
    }
    function q(z) {
      return L(z) === B;
    }
    function P(z) {
      return L(z) === c;
    }
    function ie(z) {
      return L(z) === a;
    }
    function se(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function Q(z) {
      return L(z) === g;
    }
    function Ae(z) {
      return L(z) === n;
    }
    function oe(z) {
      return L(z) === U;
    }
    function ue(z) {
      return L(z) === x;
    }
    function X(z) {
      return L(z) === A;
    }
    function ee(z) {
      return L(z) === s;
    }
    function ae(z) {
      return L(z) === o;
    }
    function ce(z) {
      return L(z) === E;
    }
    reactIs_development$1.AsyncMode = Y, reactIs_development$1.ConcurrentMode = W, reactIs_development$1.ContextConsumer = h, reactIs_development$1.ContextProvider = C, reactIs_development$1.Element = y, reactIs_development$1.ForwardRef = R, reactIs_development$1.Fragment = G, reactIs_development$1.Lazy = N, reactIs_development$1.Memo = M, reactIs_development$1.Portal = S, reactIs_development$1.Profiler = p, reactIs_development$1.StrictMode = w, reactIs_development$1.Suspense = k, reactIs_development$1.isAsyncMode = te, reactIs_development$1.isConcurrentMode = q, reactIs_development$1.isContextConsumer = P, reactIs_development$1.isContextProvider = ie, reactIs_development$1.isElement = se, reactIs_development$1.isForwardRef = Q, reactIs_development$1.isFragment = Ae, reactIs_development$1.isLazy = oe, reactIs_development$1.isMemo = ue, reactIs_development$1.isPortal = X, reactIs_development$1.isProfiler = ee, reactIs_development$1.isStrictMode = ae, reactIs_development$1.isSuspense = ce, reactIs_development$1.isValidElementType = j, reactIs_development$1.typeOf = L;
  }()), reactIs_development$1;
}
var hasRequiredReactIs;
function requireReactIs() {
  return hasRequiredReactIs || (hasRequiredReactIs = 1, function(t) {
    process.env.NODE_ENV === "production" ? t.exports = requireReactIs_production_min$1() : t.exports = requireReactIs_development$1();
  }(reactIs$2)), reactIs$2.exports;
}
var reactIs$1 = requireReactIs(), FORWARD_REF_STATICS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, MEMO_STATICS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var isBrowser$1 = !0;
function getRegisteredStyles(t, e, A) {
  var n = "";
  return A.split(" ").forEach(function(o) {
    t[o] !== void 0 ? e.push(t[o] + ";") : n += o + " ";
  }), n;
}
var registerStyles = function(e, A, n) {
  var o = e.key + "-" + A.name;
  (n === !1 || isBrowser$1 === !1) && e.registered[o] === void 0 && (e.registered[o] = A.styles);
}, insertStyles = function(e, A, n) {
  registerStyles(e, A, n);
  var o = e.key + "-" + A.name;
  if (e.inserted[A.name] === void 0) {
    var s = A;
    do
      e.insert(A === s ? "." + o : "", s, e.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function murmur2(t) {
  for (var e = 0, A, n = 0, o = t.length; o >= 4; ++n, o -= 4)
    A = t.charCodeAt(n) & 255 | (t.charCodeAt(++n) & 255) << 8 | (t.charCodeAt(++n) & 255) << 16 | (t.charCodeAt(++n) & 255) << 24, A = (A & 65535) * 1540483477 + ((A >>> 16) * 59797 << 16), A ^= A >>> 24, e = (A & 65535) * 1540483477 + ((A >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      e ^= (t.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(n) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(e) {
  return e.charCodeAt(1) === 45;
}, isProcessableValue = function(e) {
  return e != null && typeof e != "boolean";
}, processStyleName = /* @__PURE__ */ memoize$1(function(t) {
  return isCustomProperty(t) ? t : t.replace(hyphenateRegex, "-$&").toLowerCase();
}), processStyleValue = function(e, A) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof A == "string")
        return A.replace(animationRegex, function(n, o, s) {
          return cursor = {
            name: o,
            styles: s,
            next: cursor
          }, o;
        });
  }
  return unitlessKeys[e] !== 1 && !isCustomProperty(e) && typeof A == "number" && A !== 0 ? A + "px" : A;
};
if (process.env.NODE_ENV !== "production") {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, contentValues = ["normal", "none", "initial", "inherit", "unset"], oldProcessStyleValue = processStyleValue, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, hyphenatedCache = {};
  processStyleValue = function(e, A) {
    if (e === "content" && (typeof A != "string" || contentValues.indexOf(A) === -1 && !contentValuePattern.test(A) && (A.charAt(0) !== A.charAt(A.length - 1) || A.charAt(0) !== '"' && A.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + A + "\"'`");
    var n = oldProcessStyleValue(e, A);
    return n !== "" && !isCustomProperty(e) && e.indexOf("-") !== -1 && hyphenatedCache[e] === void 0 && (hyphenatedCache[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(msPattern, "ms-").replace(hyphenPattern, function(o, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(t, e, A) {
  if (A == null)
    return "";
  if (A.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && A.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(noComponentSelectorMessage);
    return A;
  }
  switch (typeof A) {
    case "boolean":
      return "";
    case "object": {
      if (A.anim === 1)
        return cursor = {
          name: A.name,
          styles: A.styles,
          next: cursor
        }, A.name;
      if (A.styles !== void 0) {
        var n = A.next;
        if (n !== void 0)
          for (; n !== void 0; )
            cursor = {
              name: n.name,
              styles: n.styles,
              next: cursor
            }, n = n.next;
        var o = A.styles + ";";
        return process.env.NODE_ENV !== "production" && A.map !== void 0 && (o += A.map), o;
      }
      return createStringFromObject(t, e, A);
    }
    case "function": {
      if (t !== void 0) {
        var s = cursor, a = A(t);
        return cursor = s, handleInterpolation(t, e, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = A.replace(animationRegex, function(g, E, I) {
          var x = "animation" + c.length;
          return c.push("const " + x + " = keyframes`" + I.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + x + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (e == null)
    return A;
  var B = e[A];
  return B !== void 0 ? B : A;
}
function createStringFromObject(t, e, A) {
  var n = "";
  if (Array.isArray(A))
    for (var o = 0; o < A.length; o++)
      n += handleInterpolation(t, e, A[o]) + ";";
  else
    for (var s in A) {
      var a = A[s];
      if (typeof a != "object")
        e != null && e[a] !== void 0 ? n += s + "{" + e[a] + "}" : isProcessableValue(a) && (n += processStyleName(s) + ":" + processStyleValue(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(noComponentSelectorMessage);
        if (Array.isArray(a) && typeof a[0] == "string" && (e == null || e[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            isProcessableValue(a[c]) && (n += processStyleName(s) + ":" + processStyleValue(s, a[c]) + ";");
        else {
          var l = handleInterpolation(t, e, a);
          switch (s) {
            case "animation":
            case "animationName": {
              n += processStyleName(s) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR), n += s + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sourceMapPattern;
process.env.NODE_ENV !== "production" && (sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var cursor, serializeStyles = function(e, A, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, s = "";
  cursor = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? (o = !1, s += handleInterpolation(n, A, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1), s += a[0]);
  for (var c = 1; c < e.length; c++)
    s += handleInterpolation(n, A, e[c]), o && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1), s += a[c]);
  var l;
  process.env.NODE_ENV !== "production" && (s = s.replace(sourceMapPattern, function(I) {
    return l = I, "";
  })), labelPattern.lastIndex = 0;
  for (var B = "", g; (g = labelPattern.exec(s)) !== null; )
    B += "-" + g[1];
  var E = murmur2(s) + B;
  return process.env.NODE_ENV !== "production" ? {
    name: E,
    styles: s,
    map: l,
    next: cursor,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: E,
    styles: s,
    next: cursor
  };
}, syncFallback = function(e) {
  return e();
}, useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : !1, useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback, useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect, hasOwnProperty = {}.hasOwnProperty, EmotionCacheContext = /* @__PURE__ */ createContext(
  typeof HTMLElement < "u" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (EmotionCacheContext.displayName = "EmotionCacheContext");
EmotionCacheContext.Provider;
var withEmotionCache = function(e) {
  return /* @__PURE__ */ forwardRef(function(A, n) {
    var o = useContext(EmotionCacheContext);
    return e(A, o, n);
  });
}, ThemeContext$2 = /* @__PURE__ */ createContext({});
process.env.NODE_ENV !== "production" && (ThemeContext$2.displayName = "EmotionThemeContext");
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Insertion$2 = function(e) {
  var A = e.cache, n = e.serialized, o = e.isStringTag;
  return registerStyles(A, n, o), useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(A, n, o);
  }), null;
}, Emotion = /* @__PURE__ */ withEmotionCache(function(t, e, A) {
  var n = t.css;
  typeof n == "string" && e.registered[n] !== void 0 && (n = e.registered[n]);
  var o = t[typePropName], s = [n], a = "";
  typeof t.className == "string" ? a = getRegisteredStyles(e.registered, s, t.className) : t.className != null && (a = t.className + " ");
  var c = serializeStyles(s, void 0, useContext(ThemeContext$2));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = t[labelPropName];
    l && (c = serializeStyles([c, "label:" + l + ";"]));
  }
  a += e.key + "-" + c.name;
  var B = {};
  for (var g in t)
    hasOwnProperty.call(t, g) && g !== "css" && g !== typePropName && (process.env.NODE_ENV === "production" || g !== labelPropName) && (B[g] = t[g]);
  return B.ref = A, B.className = a, /* @__PURE__ */ createElement(Fragment$1, null, /* @__PURE__ */ createElement(Insertion$2, {
    cache: e,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ createElement(o, B));
});
process.env.NODE_ENV !== "production" && (Emotion.displayName = "EmotionCssPropInternal");
var pkg = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, warnedAboutCssPropForGlobal = !1, Global = /* @__PURE__ */ withEmotionCache(function(t, e) {
  process.env.NODE_ENV !== "production" && !warnedAboutCssPropForGlobal && (t.className || t.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), warnedAboutCssPropForGlobal = !0);
  var A = t.styles, n = serializeStyles([A], void 0, useContext(ThemeContext$2)), o = useRef();
  return useInsertionEffectWithLayoutFallback(function() {
    var s = e.key + "-global", a = new e.sheet.constructor({
      key: s,
      nonce: e.sheet.nonce,
      container: e.sheet.container,
      speedy: e.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return e.sheet.tags.length && (a.before = e.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), o.current = [a, c], function() {
      a.flush();
    };
  }, [e]), useInsertionEffectWithLayoutFallback(function() {
    var s = o.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && insertStyles(e, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    e.insert("", n, a, !1);
  }, [e, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Global.displayName = "EmotionGlobal");
function css() {
  for (var t = arguments.length, e = new Array(t), A = 0; A < t; A++)
    e[A] = arguments[A];
  return serializeStyles(e);
}
var keyframes = function() {
  var e = css.apply(void 0, arguments), A = "animation-" + e.name;
  return {
    name: A,
    styles: "@keyframes " + A + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, classnames = function t(e) {
  for (var A = e.length, n = 0, o = ""; n < A; n++) {
    var s = e[n];
    if (s != null) {
      var a = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            a = t(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var c in s)
              s[c] && c && (a && (a += " "), a += c);
          }
          break;
        }
        default:
          a = s;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function merge$1(t, e, A) {
  var n = [], o = getRegisteredStyles(t, n, A);
  return n.length < 2 ? A : o + e(n);
}
var Insertion$1 = function(e) {
  var A = e.cache, n = e.serializedArr;
  return useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var o = 0; o < n.length; o++)
      insertStyles(A, n[o], !1);
  }), null;
}, ClassNames = /* @__PURE__ */ withEmotionCache(function(t, e) {
  var A = !1, n = [], o = function() {
    if (A && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var B = arguments.length, g = new Array(B), E = 0; E < B; E++)
      g[E] = arguments[E];
    var I = serializeStyles(g, e.registered);
    return n.push(I), registerStyles(e, I, !1), e.key + "-" + I.name;
  }, s = function() {
    if (A && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var B = arguments.length, g = new Array(B), E = 0; E < B; E++)
      g[E] = arguments[E];
    return merge$1(e.registered, o, classnames(g));
  }, a = {
    css: o,
    cx: s,
    theme: useContext(ThemeContext$2)
  }, c = t.children(a);
  return A = !0, /* @__PURE__ */ createElement(Fragment$1, null, /* @__PURE__ */ createElement(Insertion$1, {
    cache: e,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (ClassNames.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var isBrowser = !0, isTestEnv = typeof jest < "u" || typeof vi < "u";
  if (isBrowser && !isTestEnv) {
    var globalContext$1 = typeof globalThis < "u" ? globalThis : isBrowser ? window : global, globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    globalContext$1[globalKey] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), globalContext$1[globalKey] = !0;
  }
}
var testOmitPropsOnStringTag = isPropValid, testOmitPropsOnComponent = function(e) {
  return e !== "theme";
}, getDefaultShouldForwardProp = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
}, composeShouldForwardProps = function(e, A, n) {
  var o;
  if (A) {
    var s = A.shouldForwardProp;
    o = e.__emotion_forwardProp && s ? function(a) {
      return e.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && n && (o = e.__emotion_forwardProp), o;
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Insertion = function(e) {
  var A = e.cache, n = e.serialized, o = e.isStringTag;
  return registerStyles(A, n, o), useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(A, n, o);
  }), null;
}, createStyled$1 = function t(e, A) {
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = e.__emotion_real === e, o = n && e.__emotion_base || e, s, a;
  A !== void 0 && (s = A.label, a = A.target);
  var c = composeShouldForwardProps(e, A, n), l = c || getDefaultShouldForwardProp(o), B = !l("as");
  return function() {
    var g = arguments, E = n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (s !== void 0 && E.push("label:" + s + ";"), g[0] == null || g[0].raw === void 0)
      E.push.apply(E, g);
    else {
      process.env.NODE_ENV !== "production" && g[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), E.push(g[0][0]);
      for (var I = g.length, x = 1; x < I; x++)
        process.env.NODE_ENV !== "production" && g[0][x] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), E.push(g[x], g[0][x]);
    }
    var U = withEmotionCache(function(v, D, T) {
      var Z = B && v.as || o, j = "", L = [], Y = v;
      if (v.theme == null) {
        Y = {};
        for (var W in v)
          Y[W] = v[W];
        Y.theme = useContext(ThemeContext$2);
      }
      typeof v.className == "string" ? j = getRegisteredStyles(D.registered, L, v.className) : v.className != null && (j = v.className + " ");
      var h = serializeStyles(E.concat(L), D.registered, Y);
      j += D.key + "-" + h.name, a !== void 0 && (j += " " + a);
      var C = B && c === void 0 ? getDefaultShouldForwardProp(Z) : l, y = {};
      for (var R in v)
        B && R === "as" || C(R) && (y[R] = v[R]);
      return y.className = j, y.ref = T, /* @__PURE__ */ createElement(Fragment$1, null, /* @__PURE__ */ createElement(Insertion, {
        cache: D,
        serialized: h,
        isStringTag: typeof Z == "string"
      }), /* @__PURE__ */ createElement(Z, y));
    });
    return U.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", U.defaultProps = e.defaultProps, U.__emotion_real = U, U.__emotion_base = o, U.__emotion_styles = E, U.__emotion_forwardProp = c, Object.defineProperty(U, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), U.withComponent = function(v, D) {
      return t(v, _extends({}, A, D, {
        shouldForwardProp: composeShouldForwardProps(U, D, !0)
      })).apply(void 0, E);
    }, U;
  };
}, tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], newStyled = createStyled$1.bind();
tags.forEach(function(t) {
  newStyled[t] = newStyled(t);
});
const emStyled = newStyled;
var propTypes = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign, hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(g) {
        return a[g];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var B = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        B[g] = g;
      }), Object.keys(Object.assign({}, B)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return objectAssign = o() ? Object.assign : function(s, a) {
    for (var c, l = n(s), B, g = 1; g < arguments.length; g++) {
      c = Object(arguments[g]);
      for (var E in c)
        e.call(c, E) && (l[E] = c[E]);
      if (t) {
        B = t(c);
        for (var I = 0; I < B.length; I++)
          A.call(c, B[I]) && (l[B[I]] = c[B[I]]);
      }
    }
    return l;
  }, objectAssign;
}
var ReactPropTypesSecret_1, hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ReactPropTypesSecret_1 = t, ReactPropTypesSecret_1;
}
var has, hasRequiredHas;
function requireHas() {
  return hasRequiredHas || (hasRequiredHas = 1, has = Function.call.bind(Object.prototype.hasOwnProperty)), has;
}
var checkPropTypes_1, hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = requireReactPropTypesSecret(), A = {}, n = requireHas();
    t = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, c, l, B) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in s)
        if (n(s, g)) {
          var E;
          try {
            if (typeof s[g] != "function") {
              var I = Error(
                (l || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            E = s[g](a, g, l, c, null, e);
          } catch (U) {
            E = U;
          }
          if (E && !(E instanceof Error) && t(
            (l || "React class") + ": type specification of " + c + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in A)) {
            A[E.message] = !0;
            var x = B ? B() : "";
            t(
              "Failed " + c + " type: " + E.message + (x != null ? x : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (A = {});
  }, checkPropTypes_1 = o, checkPropTypes_1;
}
var factoryWithTypeCheckers, hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var t = requireReactIs(), e = requireObjectAssign(), A = requireReactPropTypesSecret(), n = requireHas(), o = requireCheckPropTypes(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return factoryWithTypeCheckers = function(c, l) {
    var B = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function E(q) {
      var P = q && (B && q[B] || q[g]);
      if (typeof P == "function")
        return P;
    }
    var I = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: Z(),
      arrayOf: j,
      element: L(),
      elementType: Y(),
      instanceOf: W,
      node: R(),
      objectOf: C,
      oneOf: h,
      oneOfType: y,
      shape: N,
      exact: M
    };
    function U(q, P) {
      return q === P ? q !== 0 || 1 / q === 1 / P : q !== q && P !== P;
    }
    function v(q, P) {
      this.message = q, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function D(q) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, ie = 0;
      function se(Ae, oe, ue, X, ee, ae, ce) {
        if (X = X || I, ae = ae || ue, ce !== A) {
          if (l) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = X + ":" + ue;
            !P[pe] && ie < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + ae + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[pe] = !0, ie++);
          }
        }
        return oe[ue] == null ? Ae ? oe[ue] === null ? new v("The " + ee + " `" + ae + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new v("The " + ee + " `" + ae + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : q(oe, ue, X, ee, ae);
      }
      var Q = se.bind(null, !1);
      return Q.isRequired = se.bind(null, !0), Q;
    }
    function T(q) {
      function P(ie, se, Q, Ae, oe, ue) {
        var X = ie[se], ee = w(X);
        if (ee !== q) {
          var ae = k(X);
          return new v(
            "Invalid " + Ae + " `" + oe + "` of type " + ("`" + ae + "` supplied to `" + Q + "`, expected ") + ("`" + q + "`."),
            { expectedType: q }
          );
        }
        return null;
      }
      return D(P);
    }
    function Z() {
      return D(a);
    }
    function j(q) {
      function P(ie, se, Q, Ae, oe) {
        if (typeof q != "function")
          return new v("Property `" + oe + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var ue = ie[se];
        if (!Array.isArray(ue)) {
          var X = w(ue);
          return new v("Invalid " + Ae + " `" + oe + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var ee = 0; ee < ue.length; ee++) {
          var ae = q(ue, ee, Q, Ae, oe + "[" + ee + "]", A);
          if (ae instanceof Error)
            return ae;
        }
        return null;
      }
      return D(P);
    }
    function L() {
      function q(P, ie, se, Q, Ae) {
        var oe = P[ie];
        if (!c(oe)) {
          var ue = w(oe);
          return new v("Invalid " + Q + " `" + Ae + "` of type " + ("`" + ue + "` supplied to `" + se + "`, expected a single ReactElement."));
        }
        return null;
      }
      return D(q);
    }
    function Y() {
      function q(P, ie, se, Q, Ae) {
        var oe = P[ie];
        if (!t.isValidElementType(oe)) {
          var ue = w(oe);
          return new v("Invalid " + Q + " `" + Ae + "` of type " + ("`" + ue + "` supplied to `" + se + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return D(q);
    }
    function W(q) {
      function P(ie, se, Q, Ae, oe) {
        if (!(ie[se] instanceof q)) {
          var ue = q.name || I, X = te(ie[se]);
          return new v("Invalid " + Ae + " `" + oe + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected ") + ("instance of `" + ue + "`."));
        }
        return null;
      }
      return D(P);
    }
    function h(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(ie, se, Q, Ae, oe) {
        for (var ue = ie[se], X = 0; X < q.length; X++)
          if (U(ue, q[X]))
            return null;
        var ee = JSON.stringify(q, function(ce, z) {
          var pe = k(z);
          return pe === "symbol" ? String(z) : z;
        });
        return new v("Invalid " + Ae + " `" + oe + "` of value `" + String(ue) + "` " + ("supplied to `" + Q + "`, expected one of " + ee + "."));
      }
      return D(P);
    }
    function C(q) {
      function P(ie, se, Q, Ae, oe) {
        if (typeof q != "function")
          return new v("Property `" + oe + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var ue = ie[se], X = w(ue);
        if (X !== "object")
          return new v("Invalid " + Ae + " `" + oe + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an object."));
        for (var ee in ue)
          if (n(ue, ee)) {
            var ae = q(ue, ee, Q, Ae, oe + "." + ee, A);
            if (ae instanceof Error)
              return ae;
          }
        return null;
      }
      return D(P);
    }
    function y(q) {
      if (!Array.isArray(q))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < q.length; P++) {
        var ie = q[P];
        if (typeof ie != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + O(ie) + " at index " + P + "."
          ), a;
      }
      function se(Q, Ae, oe, ue, X) {
        for (var ee = [], ae = 0; ae < q.length; ae++) {
          var ce = q[ae], z = ce(Q, Ae, oe, ue, X, A);
          if (z == null)
            return null;
          z.data && n(z.data, "expectedType") && ee.push(z.data.expectedType);
        }
        var pe = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new v("Invalid " + ue + " `" + X + "` supplied to " + ("`" + oe + "`" + pe + "."));
      }
      return D(se);
    }
    function R() {
      function q(P, ie, se, Q, Ae) {
        return S(P[ie]) ? null : new v("Invalid " + Q + " `" + Ae + "` supplied to " + ("`" + se + "`, expected a ReactNode."));
      }
      return D(q);
    }
    function G(q, P, ie, se, Q) {
      return new v(
        (q || "React class") + ": " + P + " type `" + ie + "." + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function N(q) {
      function P(ie, se, Q, Ae, oe) {
        var ue = ie[se], X = w(ue);
        if (X !== "object")
          return new v("Invalid " + Ae + " `" + oe + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var ee in q) {
          var ae = q[ee];
          if (typeof ae != "function")
            return G(Q, Ae, oe, ee, k(ae));
          var ce = ae(ue, ee, Q, Ae, oe + "." + ee, A);
          if (ce)
            return ce;
        }
        return null;
      }
      return D(P);
    }
    function M(q) {
      function P(ie, se, Q, Ae, oe) {
        var ue = ie[se], X = w(ue);
        if (X !== "object")
          return new v("Invalid " + Ae + " `" + oe + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var ee = e({}, ie[se], q);
        for (var ae in ee) {
          var ce = q[ae];
          if (n(q, ae) && typeof ce != "function")
            return G(Q, Ae, oe, ae, k(ce));
          if (!ce)
            return new v(
              "Invalid " + Ae + " `" + oe + "` key `" + ae + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(ie[se], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(q), null, "  ")
            );
          var z = ce(ue, ae, Q, Ae, oe + "." + ae, A);
          if (z)
            return z;
        }
        return null;
      }
      return D(P);
    }
    function S(q) {
      switch (typeof q) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !q;
        case "object":
          if (Array.isArray(q))
            return q.every(S);
          if (q === null || c(q))
            return !0;
          var P = E(q);
          if (P) {
            var ie = P.call(q), se;
            if (P !== q.entries) {
              for (; !(se = ie.next()).done; )
                if (!S(se.value))
                  return !1;
            } else
              for (; !(se = ie.next()).done; ) {
                var Q = se.value;
                if (Q && !S(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function p(q, P) {
      return q === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function w(q) {
      var P = typeof q;
      return Array.isArray(q) ? "array" : q instanceof RegExp ? "object" : p(P, q) ? "symbol" : P;
    }
    function k(q) {
      if (typeof q > "u" || q === null)
        return "" + q;
      var P = w(q);
      if (P === "object") {
        if (q instanceof Date)
          return "date";
        if (q instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function O(q) {
      var P = k(q);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function te(q) {
      return !q.constructor || !q.constructor.name ? I : q.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, factoryWithTypeCheckers;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var t = requireReactPropTypesSecret();
  function e() {
  }
  function A() {
  }
  return A.resetWarningCache = e, factoryWithThrowingShims = function() {
    function n(a, c, l, B, g, E) {
      if (E !== t) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: A,
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs(), throwOnDirectAccess = !0;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else
  propTypes.exports = requireFactoryWithThrowingShims()();
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var t = React__default, e = Symbol.for("react.element"), A = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, B) {
    var g, E = {}, I = null, x = null;
    B !== void 0 && (I = "" + B), l.key !== void 0 && (I = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (g in l)
      n.call(l, g) && !s.hasOwnProperty(g) && (E[g] = l[g]);
    if (c && c.defaultProps)
      for (g in l = c.defaultProps, l)
        E[g] === void 0 && (E[g] = l[g]);
    return { $$typeof: e, type: c, key: I, ref: x, props: E, _owner: o.current };
  }
  return reactJsxRuntime_production_min.Fragment = A, reactJsxRuntime_production_min.jsx = a, reactJsxRuntime_production_min.jsxs = a, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = React__default, e = Symbol.for("react.element"), A = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), U = Symbol.iterator, v = "@@iterator";
    function D(b) {
      if (b === null || typeof b != "object")
        return null;
      var J = U && b[U] || b[v];
      return typeof J == "function" ? J : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Z(b) {
      {
        for (var J = arguments.length, ne = new Array(J > 1 ? J - 1 : 0), fe = 1; fe < J; fe++)
          ne[fe - 1] = arguments[fe];
        j("error", b, ne);
      }
    }
    function j(b, J, ne) {
      {
        var fe = T.ReactDebugCurrentFrame, we = fe.getStackAddendum();
        we !== "" && (J += "%s", ne = ne.concat([we]));
        var Se = ne.map(function(de) {
          return String(de);
        });
        Se.unshift("Warning: " + J), Function.prototype.apply.call(console[b], console, Se);
      }
    }
    var L = !1, Y = !1, W = !1, h = !1, C = !1, y;
    y = Symbol.for("react.module.reference");
    function R(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === s || C || b === o || b === B || b === g || h || b === x || L || Y || W || typeof b == "object" && b !== null && (b.$$typeof === I || b.$$typeof === E || b.$$typeof === a || b.$$typeof === c || b.$$typeof === l || b.$$typeof === y || b.getModuleId !== void 0));
    }
    function G(b, J, ne) {
      var fe = b.displayName;
      if (fe)
        return fe;
      var we = J.displayName || J.name || "";
      return we !== "" ? ne + "(" + we + ")" : ne;
    }
    function N(b) {
      return b.displayName || "Context";
    }
    function M(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && Z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case A:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case B:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            var J = b;
            return N(J) + ".Consumer";
          case a:
            var ne = b;
            return N(ne._context) + ".Provider";
          case l:
            return G(b, b.render, "ForwardRef");
          case E:
            var fe = b.displayName || null;
            return fe !== null ? fe : M(b.type) || "Memo";
          case I: {
            var we = b, Se = we._payload, de = we._init;
            try {
              return M(de(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, p = 0, w, k, O, te, q, P, ie;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Q() {
      {
        if (p === 0) {
          w = console.log, k = console.info, O = console.warn, te = console.error, q = console.group, P = console.groupCollapsed, ie = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        p++;
      }
    }
    function Ae() {
      {
        if (p--, p === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, b, {
              value: w
            }),
            info: S({}, b, {
              value: k
            }),
            warn: S({}, b, {
              value: O
            }),
            error: S({}, b, {
              value: te
            }),
            group: S({}, b, {
              value: q
            }),
            groupCollapsed: S({}, b, {
              value: P
            }),
            groupEnd: S({}, b, {
              value: ie
            })
          });
        }
        p < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = T.ReactCurrentDispatcher, ue;
    function X(b, J, ne) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (we) {
            var fe = we.stack.trim().match(/\n( *(at )?)/);
            ue = fe && fe[1] || "";
          }
        return `
` + ue + b;
      }
    }
    var ee = !1, ae;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ce();
    }
    function z(b, J) {
      if (!b || ee)
        return "";
      {
        var ne = ae.get(b);
        if (ne !== void 0)
          return ne;
      }
      var fe;
      ee = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = oe.current, oe.current = null, Q();
      try {
        if (J) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (ge) {
              fe = ge;
            }
            Reflect.construct(b, [], de);
          } else {
            try {
              de.call();
            } catch (ge) {
              fe = ge;
            }
            b.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            fe = ge;
          }
          b();
        }
      } catch (ge) {
        if (ge && fe && typeof ge.stack == "string") {
          for (var Ie = ge.stack.split(`
`), Re = fe.stack.split(`
`), _e = Ie.length - 1, Be = Re.length - 1; _e >= 1 && Be >= 0 && Ie[_e] !== Re[Be]; )
            Be--;
          for (; _e >= 1 && Be >= 0; _e--, Be--)
            if (Ie[_e] !== Re[Be]) {
              if (_e !== 1 || Be !== 1)
                do
                  if (_e--, Be--, Be < 0 || Ie[_e] !== Re[Be]) {
                    var ke = `
` + Ie[_e].replace(" at new ", " at ");
                    return b.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", b.displayName)), typeof b == "function" && ae.set(b, ke), ke;
                  }
                while (_e >= 1 && Be >= 0);
              break;
            }
        }
      } finally {
        ee = !1, oe.current = Se, Ae(), Error.prepareStackTrace = we;
      }
      var Me = b ? b.displayName || b.name : "", F = Me ? X(Me) : "";
      return typeof b == "function" && ae.set(b, F), F;
    }
    function pe(b, J, ne) {
      return z(b, !1);
    }
    function re(b) {
      var J = b.prototype;
      return !!(J && J.isReactComponent);
    }
    function d(b, J, ne) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return z(b, re(b));
      if (typeof b == "string")
        return X(b);
      switch (b) {
        case B:
          return X("Suspense");
        case g:
          return X("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return pe(b.render);
          case E:
            return d(b.type, J, ne);
          case I: {
            var fe = b, we = fe._payload, Se = fe._init;
            try {
              return d(Se(we), J, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var u = Object.prototype.hasOwnProperty, f = {}, m = T.ReactDebugCurrentFrame;
    function H(b) {
      if (b) {
        var J = b._owner, ne = d(b.type, b._source, J ? J.type : null);
        m.setExtraStackFrame(ne);
      } else
        m.setExtraStackFrame(null);
    }
    function V(b, J, ne, fe, we) {
      {
        var Se = Function.call.bind(u);
        for (var de in b)
          if (Se(b, de)) {
            var Ie = void 0;
            try {
              if (typeof b[de] != "function") {
                var Re = Error((fe || "React class") + ": " + ne + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              Ie = b[de](J, de, fe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              Ie = _e;
            }
            Ie && !(Ie instanceof Error) && (H(we), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", ne, de, typeof Ie), H(null)), Ie instanceof Error && !(Ie.message in f) && (f[Ie.message] = !0, H(we), Z("Failed %s type: %s", ne, Ie.message), H(null));
          }
      }
    }
    var $ = Array.isArray;
    function he(b) {
      return $(b);
    }
    function ye(b) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, ne = J && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return ne;
      }
    }
    function me(b) {
      try {
        return Ge(b), !1;
      } catch {
        return !0;
      }
    }
    function Ge(b) {
      return "" + b;
    }
    function xe(b) {
      if (me(b))
        return Z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(b)), Ge(b);
    }
    var Ee = T.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, qe, Ue;
    Ue = {};
    function Oe(b) {
      if (u.call(b, "ref")) {
        var J = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function ve(b) {
      if (u.call(b, "key")) {
        var J = Object.getOwnPropertyDescriptor(b, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function je(b, J) {
      if (typeof b.ref == "string" && Ee.current && J && Ee.current.stateNode !== J) {
        var ne = M(Ee.current.type);
        Ue[ne] || (Z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Ee.current.type), b.ref), Ue[ne] = !0);
      }
    }
    function Ve(b, J) {
      {
        var ne = function() {
          le || (le = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ne.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Ze(b, J) {
      {
        var ne = function() {
          qe || (qe = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ne.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Ke = function(b, J, ne, fe, we, Se, de) {
      var Ie = {
        $$typeof: e,
        type: b,
        key: J,
        ref: ne,
        props: de,
        _owner: Se
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function We(b, J, ne, fe, we) {
      {
        var Se, de = {}, Ie = null, Re = null;
        ne !== void 0 && (xe(ne), Ie = "" + ne), ve(J) && (xe(J.key), Ie = "" + J.key), Oe(J) && (Re = J.ref, je(J, we));
        for (Se in J)
          u.call(J, Se) && !Te.hasOwnProperty(Se) && (de[Se] = J[Se]);
        if (b && b.defaultProps) {
          var _e = b.defaultProps;
          for (Se in _e)
            de[Se] === void 0 && (de[Se] = _e[Se]);
        }
        if (Ie || Re) {
          var Be = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          Ie && Ve(de, Be), Re && Ze(de, Be);
        }
        return Ke(b, Ie, Re, we, fe, Ee.current, de);
      }
    }
    var be = T.ReactCurrentOwner, Pe = T.ReactDebugCurrentFrame;
    function De(b) {
      if (b) {
        var J = b._owner, ne = d(b.type, b._source, J ? J.type : null);
        Pe.setExtraStackFrame(ne);
      } else
        Pe.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function Ye(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function $e() {
      {
        if (be.current) {
          var b = M(be.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Ne(b) {
      {
        if (b !== void 0) {
          var J = b.fileName.replace(/^.*[\\\/]/, ""), ne = b.lineNumber;
          return `

Check your code at ` + J + ":" + ne + ".";
        }
        return "";
      }
    }
    var ze = {};
    function it(b) {
      {
        var J = $e();
        if (!J) {
          var ne = typeof b == "string" ? b : b.displayName || b.name;
          ne && (J = `

Check the top-level render call using <` + ne + ">.");
        }
        return J;
      }
    }
    function Xe(b, J) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var ne = it(J);
        if (ze[ne])
          return;
        ze[ne] = !0;
        var fe = "";
        b && b._owner && b._owner !== be.current && (fe = " It was passed a child from " + M(b._owner.type) + "."), De(b), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, fe), De(null);
      }
    }
    function et(b, J) {
      {
        if (typeof b != "object")
          return;
        if (he(b))
          for (var ne = 0; ne < b.length; ne++) {
            var fe = b[ne];
            Ye(fe) && Xe(fe, J);
          }
        else if (Ye(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var we = D(b);
          if (typeof we == "function" && we !== b.entries)
            for (var Se = we.call(b), de; !(de = Se.next()).done; )
              Ye(de.value) && Xe(de.value, J);
        }
      }
    }
    function Fe(b) {
      {
        var J = b.type;
        if (J == null || typeof J == "string")
          return;
        var ne;
        if (typeof J == "function")
          ne = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === l || J.$$typeof === E))
          ne = J.propTypes;
        else
          return;
        if (ne) {
          var fe = M(J);
          V(ne, b.props, "prop", fe, b);
        } else if (J.PropTypes !== void 0 && !He) {
          He = !0;
          var we = M(J);
          Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ot(b) {
      {
        for (var J = Object.keys(b.props), ne = 0; ne < J.length; ne++) {
          var fe = J[ne];
          if (fe !== "children" && fe !== "key") {
            De(b), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), De(null);
            break;
          }
        }
        b.ref !== null && (De(b), Z("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function tt(b, J, ne, fe, we, Se) {
      {
        var de = R(b);
        if (!de) {
          var Ie = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Ne(we);
          Re ? Ie += Re : Ie += $e();
          var _e;
          b === null ? _e = "null" : he(b) ? _e = "array" : b !== void 0 && b.$$typeof === e ? (_e = "<" + (M(b.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof b, Z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, Ie);
        }
        var Be = We(b, J, ne, we, Se);
        if (Be == null)
          return Be;
        if (de) {
          var ke = J.children;
          if (ke !== void 0)
            if (fe)
              if (he(ke)) {
                for (var Me = 0; Me < ke.length; Me++)
                  et(ke[Me], b);
                Object.freeze && Object.freeze(ke);
              } else
                Z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              et(ke, b);
        }
        return b === n ? ot(Be) : Fe(Be), Be;
      }
    }
    function st(b, J, ne) {
      return tt(b, J, ne, !0);
    }
    function rt(b, J, ne) {
      return tt(b, J, ne, !1);
    }
    var At = rt, nt = st;
    reactJsxRuntime_development.Fragment = n, reactJsxRuntime_development.jsx = At, reactJsxRuntime_development.jsxs = nt;
  }()), reactJsxRuntime_development;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = requireReactJsxRuntime_production_min() : t.exports = requireReactJsxRuntime_development();
})(jsxRuntime);
const Fragment = jsxRuntime.exports.Fragment, jsx = jsxRuntime.exports.jsx, jsxs = jsxRuntime.exports.jsxs;
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$2(t, e) {
  const A = emStyled(t, e);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof t == "string" ? `"${t}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), A(...n);
  } : A;
}
const internal_processStyles = (t, e) => {
  Array.isArray(t.__emotion_styles) && (t.__emotion_styles = e(t.__emotion_styles));
}, responsivePropType = process.env.NODE_ENV !== "production" ? propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.object, propTypes.exports.array]) : {}, responsivePropType$1 = responsivePropType;
function chainPropTypes(t, e) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return t(...n) || e(...n);
  };
}
function isPlainObject(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function deepmerge(t, e, A = {
  clone: !0
}) {
  const n = A.clone ? _extends({}, t) : t;
  return isPlainObject(t) && isPlainObject(e) && Object.keys(e).forEach((o) => {
    o !== "__proto__" && (isPlainObject(e[o]) && o in t && isPlainObject(t[o]) ? n[o] = deepmerge(t[o], e[o], A) : n[o] = e[o]);
  }), n;
}
function isClassComponent(t) {
  const {
    prototype: e = {}
  } = t;
  return Boolean(e.isReactComponent);
}
function elementTypeAcceptingRef(t, e, A, n, o) {
  const s = t[e], a = o || e;
  if (s == null || typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !isClassComponent(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${A}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const elementTypeAcceptingRef$1 = chainPropTypes(propTypes.exports.elementType, elementTypeAcceptingRef);
function formatMuiErrorMessage(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let A = 1; A < arguments.length; A += 1)
    e += "&args[]=" + encodeURIComponent(arguments[A]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
var reactIs = { exports: {} }, reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), U;
  U = Symbol.for("react.module.reference");
  function v(D) {
    if (typeof D == "object" && D !== null) {
      var T = D.$$typeof;
      switch (T) {
        case t:
          switch (D = D.type, D) {
            case A:
            case o:
            case n:
            case B:
            case g:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case c:
                case a:
                case l:
                case I:
                case E:
                case s:
                  return D;
                default:
                  return T;
              }
          }
        case e:
          return T;
      }
    }
  }
  return reactIs_production_min.ContextConsumer = a, reactIs_production_min.ContextProvider = s, reactIs_production_min.Element = t, reactIs_production_min.ForwardRef = l, reactIs_production_min.Fragment = A, reactIs_production_min.Lazy = I, reactIs_production_min.Memo = E, reactIs_production_min.Portal = e, reactIs_production_min.Profiler = o, reactIs_production_min.StrictMode = n, reactIs_production_min.Suspense = B, reactIs_production_min.SuspenseList = g, reactIs_production_min.isAsyncMode = function() {
    return !1;
  }, reactIs_production_min.isConcurrentMode = function() {
    return !1;
  }, reactIs_production_min.isContextConsumer = function(D) {
    return v(D) === a;
  }, reactIs_production_min.isContextProvider = function(D) {
    return v(D) === s;
  }, reactIs_production_min.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === t;
  }, reactIs_production_min.isForwardRef = function(D) {
    return v(D) === l;
  }, reactIs_production_min.isFragment = function(D) {
    return v(D) === A;
  }, reactIs_production_min.isLazy = function(D) {
    return v(D) === I;
  }, reactIs_production_min.isMemo = function(D) {
    return v(D) === E;
  }, reactIs_production_min.isPortal = function(D) {
    return v(D) === e;
  }, reactIs_production_min.isProfiler = function(D) {
    return v(D) === o;
  }, reactIs_production_min.isStrictMode = function(D) {
    return v(D) === n;
  }, reactIs_production_min.isSuspense = function(D) {
    return v(D) === B;
  }, reactIs_production_min.isSuspenseList = function(D) {
    return v(D) === g;
  }, reactIs_production_min.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === A || D === o || D === n || D === B || D === g || D === x || typeof D == "object" && D !== null && (D.$$typeof === I || D.$$typeof === E || D.$$typeof === s || D.$$typeof === a || D.$$typeof === l || D.$$typeof === U || D.getModuleId !== void 0);
  }, reactIs_production_min.typeOf = v, reactIs_production_min;
}
var reactIs_development = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  return hasRequiredReactIs_development || (hasRequiredReactIs_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), U = !1, v = !1, D = !1, T = !1, Z = !1, j;
    j = Symbol.for("react.module.reference");
    function L(re) {
      return !!(typeof re == "string" || typeof re == "function" || re === A || re === o || Z || re === n || re === B || re === g || T || re === x || U || v || D || typeof re == "object" && re !== null && (re.$$typeof === I || re.$$typeof === E || re.$$typeof === s || re.$$typeof === a || re.$$typeof === l || re.$$typeof === j || re.getModuleId !== void 0));
    }
    function Y(re) {
      if (typeof re == "object" && re !== null) {
        var d = re.$$typeof;
        switch (d) {
          case t:
            var u = re.type;
            switch (u) {
              case A:
              case o:
              case n:
              case B:
              case g:
                return u;
              default:
                var f = u && u.$$typeof;
                switch (f) {
                  case c:
                  case a:
                  case l:
                  case I:
                  case E:
                  case s:
                    return f;
                  default:
                    return d;
                }
            }
          case e:
            return d;
        }
      }
    }
    var W = a, h = s, C = t, y = l, R = A, G = I, N = E, M = e, S = o, p = n, w = B, k = g, O = !1, te = !1;
    function q(re) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function P(re) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(re) {
      return Y(re) === a;
    }
    function se(re) {
      return Y(re) === s;
    }
    function Q(re) {
      return typeof re == "object" && re !== null && re.$$typeof === t;
    }
    function Ae(re) {
      return Y(re) === l;
    }
    function oe(re) {
      return Y(re) === A;
    }
    function ue(re) {
      return Y(re) === I;
    }
    function X(re) {
      return Y(re) === E;
    }
    function ee(re) {
      return Y(re) === e;
    }
    function ae(re) {
      return Y(re) === o;
    }
    function ce(re) {
      return Y(re) === n;
    }
    function z(re) {
      return Y(re) === B;
    }
    function pe(re) {
      return Y(re) === g;
    }
    reactIs_development.ContextConsumer = W, reactIs_development.ContextProvider = h, reactIs_development.Element = C, reactIs_development.ForwardRef = y, reactIs_development.Fragment = R, reactIs_development.Lazy = G, reactIs_development.Memo = N, reactIs_development.Portal = M, reactIs_development.Profiler = S, reactIs_development.StrictMode = p, reactIs_development.Suspense = w, reactIs_development.SuspenseList = k, reactIs_development.isAsyncMode = q, reactIs_development.isConcurrentMode = P, reactIs_development.isContextConsumer = ie, reactIs_development.isContextProvider = se, reactIs_development.isElement = Q, reactIs_development.isForwardRef = Ae, reactIs_development.isFragment = oe, reactIs_development.isLazy = ue, reactIs_development.isMemo = X, reactIs_development.isPortal = ee, reactIs_development.isProfiler = ae, reactIs_development.isStrictMode = ce, reactIs_development.isSuspense = z, reactIs_development.isSuspenseList = pe, reactIs_development.isValidElementType = L, reactIs_development.typeOf = Y;
  }()), reactIs_development;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = requireReactIs_production_min() : t.exports = requireReactIs_development();
})(reactIs);
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(t) {
  const e = `${t}`.match(fnNameMatchRegex);
  return e && e[1] || "";
}
function getFunctionComponentName(t, e = "") {
  return t.displayName || t.name || getFunctionName(t) || e;
}
function getWrappedName(t, e, A) {
  const n = getFunctionComponentName(e);
  return t.displayName || (n !== "" ? `${A}(${n})` : A);
}
function getDisplayName(t) {
  if (t != null) {
    if (typeof t == "string")
      return t;
    if (typeof t == "function")
      return getFunctionComponentName(t, "Component");
    if (typeof t == "object")
      switch (t.$$typeof) {
        case reactIs.exports.ForwardRef:
          return getWrappedName(t, t.render, "ForwardRef");
        case reactIs.exports.Memo:
          return getWrappedName(t, t.type, "memo");
        default:
          return;
      }
  }
}
const refType = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.object]), refType$1 = refType;
function capitalize(t) {
  if (typeof t != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : formatMuiErrorMessage(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function setRef(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
const useEnhancedEffect = typeof window < "u" ? React.useLayoutEffect : React.useEffect, useEnhancedEffect$1 = useEnhancedEffect;
function useEventCallback(t) {
  const e = React.useRef(t);
  return useEnhancedEffect$1(() => {
    e.current = t;
  }), React.useCallback((...A) => (0, e.current)(...A), []);
}
function useForkRef(...t) {
  return React.useMemo(() => t.every((e) => e == null) ? null : (e) => {
    t.forEach((A) => {
      setRef(A, e);
    });
  }, t);
}
let hadKeyboardEvent = !0, hadFocusVisibleRecently = !1, hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function focusTriggersKeyboardModality(t) {
  const {
    type: e,
    tagName: A
  } = t;
  return !!(A === "INPUT" && inputTypesWhitelist[e] && !t.readOnly || A === "TEXTAREA" && !t.readOnly || t.isContentEditable);
}
function handleKeyDown(t) {
  t.metaKey || t.altKey || t.ctrlKey || (hadKeyboardEvent = !0);
}
function handlePointerDown() {
  hadKeyboardEvent = !1;
}
function handleVisibilityChange() {
  this.visibilityState === "hidden" && hadFocusVisibleRecently && (hadKeyboardEvent = !0);
}
function prepare(t) {
  t.addEventListener("keydown", handleKeyDown, !0), t.addEventListener("mousedown", handlePointerDown, !0), t.addEventListener("pointerdown", handlePointerDown, !0), t.addEventListener("touchstart", handlePointerDown, !0), t.addEventListener("visibilitychange", handleVisibilityChange, !0);
}
function isFocusVisible(t) {
  const {
    target: e
  } = t;
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(e);
}
function useIsFocusVisible() {
  const t = React.useCallback((o) => {
    o != null && prepare(o.ownerDocument);
  }, []), e = React.useRef(!1);
  function A() {
    return e.current ? (hadFocusVisibleRecently = !0, window.clearTimeout(hadFocusVisibleRecentlyTimeout), hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
      hadFocusVisibleRecently = !1;
    }, 100), e.current = !1, !0) : !1;
  }
  function n(o) {
    return isFocusVisible(o) ? (e.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: e,
    onFocus: n,
    onBlur: A,
    ref: t
  };
}
function resolveProps(t, e) {
  const A = _extends({}, e);
  return Object.keys(t).forEach((n) => {
    A[n] === void 0 && (A[n] = t[n]);
  }), A;
}
function composeClasses(t, e, A) {
  const n = {};
  return Object.keys(t).forEach(
    (o) => {
      n[o] = t[o].reduce((s, a) => (a && (s.push(e(a)), A && A[a] && s.push(A[a])), s), []).join(" ");
    }
  ), n;
}
const defaultGenerator = (t) => t, createClassNameGenerator = () => {
  let t = defaultGenerator;
  return {
    configure(e) {
      t = e;
    },
    generate(e) {
      return t(e);
    },
    reset() {
      t = defaultGenerator;
    }
  };
}, ClassNameGenerator = createClassNameGenerator(), ClassNameGenerator$1 = ClassNameGenerator, globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(t, e, A = "Mui") {
  const n = globalStateClassesMapping[e];
  return n ? `${A}-${n}` : `${ClassNameGenerator$1.generate(t)}-${e}`;
}
function generateUtilityClasses(t, e, A = "Mui") {
  const n = {};
  return e.forEach((o) => {
    n[o] = generateUtilityClass(t, o, A);
  }), n;
}
function merge(t, e) {
  return e ? deepmerge(t, e, {
    clone: !1
  }) : t;
}
const values$1 = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${values$1[t]}px)`
};
function handleBreakpoints(t, e, A) {
  const n = t.theme || {};
  if (Array.isArray(e)) {
    const s = n.breakpoints || defaultBreakpoints;
    return e.reduce((a, c, l) => (a[s.up(s.keys[l])] = A(e[l]), a), {});
  }
  if (typeof e == "object") {
    const s = n.breakpoints || defaultBreakpoints;
    return Object.keys(e).reduce((a, c) => {
      if (Object.keys(s.values || values$1).indexOf(c) !== -1) {
        const l = s.up(c);
        a[l] = A(e[c], c);
      } else {
        const l = c;
        a[l] = e[l];
      }
      return a;
    }, {});
  }
  return A(e);
}
function createEmptyBreakpointObject(t = {}) {
  var e;
  return ((e = t.keys) == null ? void 0 : e.reduce((n, o) => {
    const s = t.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function removeUnusedBreakpoints(t, e) {
  return t.reduce((A, n) => {
    const o = A[n];
    return (!o || Object.keys(o).length === 0) && delete A[n], A;
  }, e);
}
function mergeBreakpointsInOrder(t, ...e) {
  const A = createEmptyBreakpointObject(t), n = [A, ...e].reduce((o, s) => deepmerge(o, s), {});
  return removeUnusedBreakpoints(Object.keys(A), n);
}
function computeBreakpointsBase(t, e) {
  if (typeof t != "object")
    return {};
  const A = {}, n = Object.keys(e);
  return Array.isArray(t) ? n.forEach((o, s) => {
    s < t.length && (A[o] = !0);
  }) : n.forEach((o) => {
    t[o] != null && (A[o] = !0);
  }), A;
}
function resolveBreakpointValues({
  values: t,
  breakpoints: e,
  base: A
}) {
  const n = A || computeBreakpointsBase(t, e), o = Object.keys(n);
  if (o.length === 0)
    return t;
  let s;
  return o.reduce((a, c, l) => (Array.isArray(t) ? (a[c] = t[l] != null ? t[l] : t[s], s = l) : typeof t == "object" ? (a[c] = t[c] != null ? t[c] : t[s], s = c) : a[c] = t, a), {});
}
function getPath(t, e, A = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && A) {
    const n = `vars.${e}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, t);
    if (n != null)
      return n;
  }
  return e.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, t);
}
function getValue$1(t, e, A, n = A) {
  let o;
  return typeof t == "function" ? o = t(A) : Array.isArray(t) ? o = t[A] || n : o = getPath(t, A) || n, e && (o = e(o, n)), o;
}
function style$2(t) {
  const {
    prop: e,
    cssProperty: A = t.prop,
    themeKey: n,
    transform: o
  } = t, s = (a) => {
    if (a[e] == null)
      return null;
    const c = a[e], l = a.theme, B = getPath(l, n) || {};
    return handleBreakpoints(a, c, (E) => {
      let I = getValue$1(B, o, E);
      return E === I && typeof E == "string" && (I = getValue$1(B, o, `${e}${E === "default" ? "" : capitalize(E)}`, E)), A === !1 ? I : {
        [A]: I
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: responsivePropType$1
  } : {}, s.filterProps = [e], s;
}
function compose(...t) {
  const e = t.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), A = (n) => Object.keys(n).reduce((o, s) => e[s] ? merge(o, e[s](n)) : o, {});
  return A.propTypes = process.env.NODE_ENV !== "production" ? t.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, A.filterProps = t.reduce((n, o) => n.concat(o.filterProps), []), A;
}
function memoize(t) {
  const e = {};
  return (A) => (e[A] === void 0 && (e[A] = t(A)), e[A]);
}
const properties = {
  m: "margin",
  p: "padding"
}, directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, getCssProperties = memoize((t) => {
  if (t.length > 2)
    if (aliases[t])
      t = aliases[t];
    else
      return [t];
  const [e, A] = t.split(""), n = properties[e], o = directions[A] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(t, e, A, n) {
  var o;
  const s = (o = getPath(t, e, !1)) != null ? o : A;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${e}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function createUnarySpacing(t) {
  return createUnaryUnit(t, "spacing", 8, "spacing");
}
function getValue(t, e) {
  if (typeof e == "string" || e == null)
    return e;
  const A = Math.abs(e), n = t(A);
  return e >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function getStyleFromPropValue(t, e) {
  return (A) => t.reduce((n, o) => (n[o] = getValue(e, A), n), {});
}
function resolveCssProperty(t, e, A, n) {
  if (e.indexOf(A) === -1)
    return null;
  const o = getCssProperties(A), s = getStyleFromPropValue(o, n), a = t[A];
  return handleBreakpoints(t, a, s);
}
function style$1(t, e) {
  const A = createUnarySpacing(t.theme);
  return Object.keys(t).map((n) => resolveCssProperty(t, e, n, A)).reduce(merge, {});
}
process.env.NODE_ENV !== "production" && marginKeys.reduce((t, e) => (t[e] = responsivePropType$1, t), {});
process.env.NODE_ENV !== "production" && paddingKeys.reduce((t, e) => (t[e] = responsivePropType$1, t), {});
function spacing(t) {
  return style$1(t, spacingKeys);
}
spacing.propTypes = process.env.NODE_ENV !== "production" ? spacingKeys.reduce((t, e) => (t[e] = responsivePropType$1, t), {}) : {};
spacing.filterProps = spacingKeys;
function getBorder(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
const border = style$2({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
}), borderTop = style$2({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
}), borderRight = style$2({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
}), borderBottom = style$2({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
}), borderLeft = style$2({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
}), borderColor = style$2({
  prop: "borderColor",
  themeKey: "palette"
}), borderTopColor = style$2({
  prop: "borderTopColor",
  themeKey: "palette"
}), borderRightColor = style$2({
  prop: "borderRightColor",
  themeKey: "palette"
}), borderBottomColor = style$2({
  prop: "borderBottomColor",
  themeKey: "palette"
}), borderLeftColor = style$2({
  prop: "borderLeftColor",
  themeKey: "palette"
}), borderRadius = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const e = createUnaryUnit(t.theme, "shape.borderRadius", 4, "borderRadius"), A = (n) => ({
      borderRadius: getValue(e, n)
    });
    return handleBreakpoints(t, t.borderRadius, A);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: responsivePropType$1
} : {};
borderRadius.filterProps = ["borderRadius"];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius), borders$1 = borders, displayPrint = style$2({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (t) => ({
    "@media print": {
      display: t
    }
  })
}), displayRaw = style$2({
  prop: "display"
}), overflow = style$2({
  prop: "overflow"
}), textOverflow = style$2({
  prop: "textOverflow"
}), visibility = style$2({
  prop: "visibility"
}), whiteSpace = style$2({
  prop: "whiteSpace"
}), display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace), flexBasis = style$2({
  prop: "flexBasis"
}), flexDirection = style$2({
  prop: "flexDirection"
}), flexWrap = style$2({
  prop: "flexWrap"
}), justifyContent = style$2({
  prop: "justifyContent"
}), alignItems = style$2({
  prop: "alignItems"
}), alignContent = style$2({
  prop: "alignContent"
}), order = style$2({
  prop: "order"
}), flex = style$2({
  prop: "flex"
}), flexGrow = style$2({
  prop: "flexGrow"
}), flexShrink = style$2({
  prop: "flexShrink"
}), alignSelf = style$2({
  prop: "alignSelf"
}), justifyItems = style$2({
  prop: "justifyItems"
}), justifySelf = style$2({
  prop: "justifySelf"
}), flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf), flexbox$1 = flexbox, gap = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = createUnaryUnit(t.theme, "spacing", 8, "gap"), A = (n) => ({
      gap: getValue(e, n)
    });
    return handleBreakpoints(t, t.gap, A);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: responsivePropType$1
} : {};
gap.filterProps = ["gap"];
const columnGap = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = createUnaryUnit(t.theme, "spacing", 8, "columnGap"), A = (n) => ({
      columnGap: getValue(e, n)
    });
    return handleBreakpoints(t, t.columnGap, A);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: responsivePropType$1
} : {};
columnGap.filterProps = ["columnGap"];
const rowGap = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = createUnaryUnit(t.theme, "spacing", 8, "rowGap"), A = (n) => ({
      rowGap: getValue(e, n)
    });
    return handleBreakpoints(t, t.rowGap, A);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: responsivePropType$1
} : {};
rowGap.filterProps = ["rowGap"];
const gridColumn = style$2({
  prop: "gridColumn"
}), gridRow = style$2({
  prop: "gridRow"
}), gridAutoFlow = style$2({
  prop: "gridAutoFlow"
}), gridAutoColumns = style$2({
  prop: "gridAutoColumns"
}), gridAutoRows = style$2({
  prop: "gridAutoRows"
}), gridTemplateColumns = style$2({
  prop: "gridTemplateColumns"
}), gridTemplateRows = style$2({
  prop: "gridTemplateRows"
}), gridTemplateAreas = style$2({
  prop: "gridTemplateAreas"
}), gridArea = style$2({
  prop: "gridArea"
}), grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea), grid$1 = grid;
function transform$1(t, e) {
  return e === "grey" ? e : t;
}
const color = style$2({
  prop: "color",
  themeKey: "palette",
  transform: transform$1
}), bgcolor = style$2({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: transform$1
}), backgroundColor = style$2({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: transform$1
}), palette = compose(color, bgcolor, backgroundColor), palette$1 = palette, position = style$2({
  prop: "position"
}), zIndex$2 = style$2({
  prop: "zIndex",
  themeKey: "zIndex"
}), top = style$2({
  prop: "top"
}), right = style$2({
  prop: "right"
}), bottom = style$2({
  prop: "bottom"
}), left = style$2({
  prop: "left"
}), positions = compose(position, zIndex$2, top, right, bottom, left), boxShadow = style$2({
  prop: "boxShadow",
  themeKey: "shadows"
}), shadows$2 = boxShadow;
function transform(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const width = style$2({
  prop: "width",
  transform
}), maxWidth = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const e = (A) => {
      var n, o, s;
      return {
        maxWidth: ((n = t.theme) == null || (o = n.breakpoints) == null || (s = o.values) == null ? void 0 : s[A]) || values$1[A] || transform(A)
      };
    };
    return handleBreakpoints(t, t.maxWidth, e);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
const minWidth = style$2({
  prop: "minWidth",
  transform
}), height = style$2({
  prop: "height",
  transform
}), maxHeight = style$2({
  prop: "maxHeight",
  transform
}), minHeight = style$2({
  prop: "minHeight",
  transform
});
style$2({
  prop: "size",
  cssProperty: "width",
  transform
});
style$2({
  prop: "size",
  cssProperty: "height",
  transform
});
const boxSizing = style$2({
  prop: "boxSizing"
}), sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing), sizing$1 = sizing, fontFamily = style$2({
  prop: "fontFamily",
  themeKey: "typography"
}), fontSize = style$2({
  prop: "fontSize",
  themeKey: "typography"
}), fontStyle = style$2({
  prop: "fontStyle",
  themeKey: "typography"
}), fontWeight = style$2({
  prop: "fontWeight",
  themeKey: "typography"
}), letterSpacing = style$2({
  prop: "letterSpacing"
}), textTransform = style$2({
  prop: "textTransform"
}), lineHeight = style$2({
  prop: "lineHeight"
}), textAlign = style$2({
  prop: "textAlign"
}), typographyVariant = style$2({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform), typography$1 = typography, filterPropsMapping = {
  borders: borders$1.filterProps,
  display: display.filterProps,
  flexbox: flexbox$1.filterProps,
  grid: grid$1.filterProps,
  positions: positions.filterProps,
  palette: palette$1.filterProps,
  shadows: shadows$2.filterProps,
  sizing: sizing$1.filterProps,
  spacing: spacing.filterProps,
  typography: typography$1.filterProps
}, styleFunctionMapping = {
  borders: borders$1,
  display,
  flexbox: flexbox$1,
  grid: grid$1,
  positions,
  palette: palette$1,
  shadows: shadows$2,
  sizing: sizing$1,
  spacing,
  typography: typography$1
}, propToStyleFunction = Object.keys(filterPropsMapping).reduce((t, e) => (filterPropsMapping[e].forEach((A) => {
  t[A] = styleFunctionMapping[e];
}), t), {});
function objectsHaveSameKeys(...t) {
  const e = t.reduce((n, o) => n.concat(Object.keys(o)), []), A = new Set(e);
  return t.every((n) => A.size === Object.keys(n).length);
}
function callIfFn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function unstable_createStyleFunctionSx(t = styleFunctionMapping) {
  const e = Object.keys(t).reduce((o, s) => (t[s].filterProps.forEach((a) => {
    o[a] = t[s];
  }), o), {});
  function A(o, s, a) {
    const c = {
      [o]: s,
      theme: a
    }, l = e[o];
    return l ? l(c) : {
      [o]: s
    };
  }
  function n(o) {
    const {
      sx: s,
      theme: a = {}
    } = o || {};
    if (!s)
      return null;
    function c(l) {
      let B = l;
      if (typeof l == "function")
        B = l(a);
      else if (typeof l != "object")
        return l;
      if (!B)
        return null;
      const g = createEmptyBreakpointObject(a.breakpoints), E = Object.keys(g);
      let I = g;
      return Object.keys(B).forEach((x) => {
        const U = callIfFn(B[x], a);
        if (U != null)
          if (typeof U == "object")
            if (e[x])
              I = merge(I, A(x, U, a));
            else {
              const v = handleBreakpoints({
                theme: a
              }, U, (D) => ({
                [x]: D
              }));
              objectsHaveSameKeys(v, U) ? I[x] = n({
                sx: U,
                theme: a
              }) : I = merge(I, v);
            }
          else
            I = merge(I, A(x, U, a));
      }), removeUnusedBreakpoints(E, I);
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return n;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
const defaultStyleFunctionSx = styleFunctionSx, _excluded$d = ["sx"], splitProps = (t) => {
  const e = {
    systemProps: {},
    otherProps: {}
  };
  return Object.keys(t).forEach((A) => {
    propToStyleFunction[A] ? e.systemProps[A] = t[A] : e.otherProps[A] = t[A];
  }), e;
};
function extendSxProp(t) {
  const {
    sx: e
  } = t, A = _objectWithoutPropertiesLoose(t, _excluded$d), {
    systemProps: n,
    otherProps: o
  } = splitProps(A);
  let s;
  return Array.isArray(e) ? s = [n, ...e] : typeof e == "function" ? s = (...a) => {
    const c = e(...a);
    return isPlainObject(c) ? _extends({}, n, c) : n;
  } : s = _extends({}, n, e), _extends({}, o, {
    sx: s
  });
}
function r(t) {
  var e, A, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (A = r(t[e])) && (n && (n += " "), n += A);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function clsx() {
  for (var t, e, A = 0, n = ""; A < arguments.length; )
    (t = arguments[A++]) && (e = r(t)) && (n && (n += " "), n += e);
  return n;
}
const _excluded$c = ["values", "unit", "step"], sortBreakpointsValues = (t) => {
  const e = Object.keys(t).map((A) => ({
    key: A,
    val: t[A]
  })) || [];
  return e.sort((A, n) => A.val - n.val), e.reduce((A, n) => _extends({}, A, {
    [n.key]: n.val
  }), {});
};
function createBreakpoints(t) {
  const {
    values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: A = "px",
    step: n = 5
  } = t, o = _objectWithoutPropertiesLoose(t, _excluded$c), s = sortBreakpointsValues(e), a = Object.keys(s);
  function c(I) {
    return `@media (min-width:${typeof e[I] == "number" ? e[I] : I}${A})`;
  }
  function l(I) {
    return `@media (max-width:${(typeof e[I] == "number" ? e[I] : I) - n / 100}${A})`;
  }
  function B(I, x) {
    const U = a.indexOf(x);
    return `@media (min-width:${typeof e[I] == "number" ? e[I] : I}${A}) and (max-width:${(U !== -1 && typeof e[a[U]] == "number" ? e[a[U]] : x) - n / 100}${A})`;
  }
  function g(I) {
    return a.indexOf(I) + 1 < a.length ? B(I, a[a.indexOf(I) + 1]) : c(I);
  }
  function E(I) {
    const x = a.indexOf(I);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? l(a[x]) : B(I, a[a.indexOf(I) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys: a,
    values: s,
    up: c,
    down: l,
    between: B,
    only: g,
    not: E,
    unit: A
  }, o);
}
const shape = {
  borderRadius: 4
}, shape$1 = shape;
function createSpacing(t = 8) {
  if (t.mui)
    return t;
  const e = createUnarySpacing({
    spacing: t
  }), A = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const a = e(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return A.mui = !0, A;
}
const _excluded$b = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(t = {}, ...e) {
  const {
    breakpoints: A = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = t, a = _objectWithoutPropertiesLoose(t, _excluded$b), c = createBreakpoints(A), l = createSpacing(o);
  let B = deepmerge({
    breakpoints: c,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, n),
    spacing: l,
    shape: _extends({}, shape$1, s)
  }, a);
  return B = e.reduce((g, E) => deepmerge(g, E), B), B;
}
const ThemeContext = /* @__PURE__ */ React.createContext(null);
process.env.NODE_ENV !== "production" && (ThemeContext.displayName = "ThemeContext");
const ThemeContext$1 = ThemeContext;
function useTheme$2() {
  const t = React.useContext(ThemeContext$1);
  return process.env.NODE_ENV !== "production" && React.useDebugValue(t), t;
}
function isObjectEmpty(t) {
  return Object.keys(t).length === 0;
}
function useTheme$1(t = null) {
  const e = useTheme$2();
  return !e || isObjectEmpty(e) ? t : e;
}
const systemDefaultTheme$1 = createTheme$1();
function useTheme(t = systemDefaultTheme$1) {
  return useTheme$1(t);
}
const _excluded$a = ["variant"];
function isEmpty$1(t) {
  return t.length === 0;
}
function propsToClassKey(t) {
  const {
    variant: e
  } = t, A = _objectWithoutPropertiesLoose(t, _excluded$a);
  let n = e || "";
  return Object.keys(A).sort().forEach((o) => {
    o === "color" ? n += isEmpty$1(n) ? t[o] : capitalize(t[o]) : n += `${isEmpty$1(n) ? o : capitalize(o)}${capitalize(t[o].toString())}`;
  }), n;
}
const _excluded$9 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded2 = ["theme"], _excluded3 = ["theme"];
function isEmpty(t) {
  return Object.keys(t).length === 0;
}
function isStringTag(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96;
}
const getStyleOverrides = (t, e) => e.components && e.components[t] && e.components[t].styleOverrides ? e.components[t].styleOverrides : null, getVariantStyles = (t, e) => {
  let A = [];
  e && e.components && e.components[t] && e.components[t].variants && (A = e.components[t].variants);
  const n = {};
  return A.forEach((o) => {
    const s = propsToClassKey(o.props);
    n[s] = o.style;
  }), n;
}, variantsResolver = (t, e, A, n) => {
  var o, s;
  const {
    ownerState: a = {}
  } = t, c = [], l = A == null || (o = A.components) == null || (s = o[n]) == null ? void 0 : s.variants;
  return l && l.forEach((B) => {
    let g = !0;
    Object.keys(B.props).forEach((E) => {
      a[E] !== B.props[E] && t[E] !== B.props[E] && (g = !1);
    }), g && c.push(e[propsToClassKey(B.props)]);
  }), c;
};
function shouldForwardProp(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const systemDefaultTheme = createTheme$1(), lowercaseFirstLetter = (t) => t.charAt(0).toLowerCase() + t.slice(1);
function createStyled(t = {}) {
  const {
    defaultTheme: e = systemDefaultTheme,
    rootShouldForwardProp: A = shouldForwardProp,
    slotShouldForwardProp: n = shouldForwardProp,
    styleFunctionSx: o = defaultStyleFunctionSx
  } = t, s = (a) => {
    const c = isEmpty(a.theme) ? e : a.theme;
    return o(_extends({}, a, {
      theme: c
    }));
  };
  return s.__mui_systemSx = !0, (a, c = {}) => {
    internal_processStyles(a, (L) => L.filter((Y) => !(Y != null && Y.__mui_systemSx)));
    const {
      name: l,
      slot: B,
      skipVariantsResolver: g,
      skipSx: E,
      overridesResolver: I
    } = c, x = _objectWithoutPropertiesLoose(c, _excluded$9), U = g !== void 0 ? g : B && B !== "Root" || !1, v = E || !1;
    let D;
    process.env.NODE_ENV !== "production" && l && (D = `${l}-${lowercaseFirstLetter(B || "Root")}`);
    let T = shouldForwardProp;
    B === "Root" ? T = A : B ? T = n : isStringTag(a) && (T = void 0);
    const Z = styled$2(a, _extends({
      shouldForwardProp: T,
      label: D
    }, x)), j = (L, ...Y) => {
      const W = Y ? Y.map((R) => typeof R == "function" && R.__emotion_real !== R ? (G) => {
        let {
          theme: N
        } = G, M = _objectWithoutPropertiesLoose(G, _excluded2);
        return R(_extends({
          theme: isEmpty(N) ? e : N
        }, M));
      } : R) : [];
      let h = L;
      l && I && W.push((R) => {
        const G = isEmpty(R.theme) ? e : R.theme, N = getStyleOverrides(l, G);
        if (N) {
          const M = {};
          return Object.entries(N).forEach(([S, p]) => {
            M[S] = typeof p == "function" ? p(_extends({}, R, {
              theme: G
            })) : p;
          }), I(R, M);
        }
        return null;
      }), l && !U && W.push((R) => {
        const G = isEmpty(R.theme) ? e : R.theme;
        return variantsResolver(R, getVariantStyles(l, G), G, l);
      }), v || W.push(s);
      const C = W.length - Y.length;
      if (Array.isArray(L) && C > 0) {
        const R = new Array(C).fill("");
        h = [...L, ...R], h.raw = [...L.raw, ...R];
      } else
        typeof L == "function" && L.__emotion_real !== L && (h = (R) => {
          let {
            theme: G
          } = R, N = _objectWithoutPropertiesLoose(R, _excluded3);
          return L(_extends({
            theme: isEmpty(G) ? e : G
          }, N));
        });
      const y = Z(h, ...W);
      if (process.env.NODE_ENV !== "production") {
        let R;
        l && (R = `${l}${B || ""}`), R === void 0 && (R = `Styled(${getDisplayName(a)})`), y.displayName = R;
      }
      return y;
    };
    return Z.withConfig && (j.withConfig = Z.withConfig), j;
  };
}
function getThemeProps(t) {
  const {
    theme: e,
    name: A,
    props: n
  } = t;
  return !e || !e.components || !e.components[A] || !e.components[A].defaultProps ? n : resolveProps(e.components[A].defaultProps, n);
}
function useThemeProps$1({
  props: t,
  name: e,
  defaultTheme: A
}) {
  const n = useTheme(A);
  return getThemeProps({
    theme: n,
    name: e,
    props: t
  });
}
function clamp(t, e = 0, A = 1) {
  return process.env.NODE_ENV !== "production" && (t < e || t > A) && console.error(`MUI: The value provided ${t} is out of range [${e}, ${A}].`), Math.min(Math.max(e, t), A);
}
function hexToRgb(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let A = t.match(e);
  return A && A[0].length === 1 && (A = A.map((n) => n + n)), A ? `rgb${A.length === 4 ? "a" : ""}(${A.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function decomposeColor(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return decomposeColor(hexToRgb(t));
  const e = t.indexOf("("), A = t.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(A) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${t}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, t));
  let n = t.substring(e + 1, t.length - 1), o;
  if (A === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: A,
    values: n,
    colorSpace: o
  };
}
function recomposeColor(t) {
  const {
    type: e,
    colorSpace: A
  } = t;
  let {
    values: n
  } = t;
  return e.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : e.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), e.indexOf("color") !== -1 ? n = `${A} ${n.join(" ")}` : n = `${n.join(", ")}`, `${e}(${n})`;
}
function hslToRgb(t) {
  t = decomposeColor(t);
  const {
    values: e
  } = t, A = e[0], n = e[1] / 100, o = e[2] / 100, s = n * Math.min(o, 1 - o), a = (B, g = (B + A / 30) % 12) => o - s * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return t.type === "hsla" && (c += "a", l.push(e[3])), recomposeColor({
    type: c,
    values: l
  });
}
function getLuminance(t) {
  t = decomposeColor(t);
  let e = t.type === "hsl" || t.type === "hsla" ? decomposeColor(hslToRgb(t)).values : t.values;
  return e = e.map((A) => (t.type !== "color" && (A /= 255), A <= 0.03928 ? A / 12.92 : ((A + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function getContrastRatio(t, e) {
  const A = getLuminance(t), n = getLuminance(e);
  return (Math.max(A, n) + 0.05) / (Math.min(A, n) + 0.05);
}
function alpha(t, e) {
  return t = decomposeColor(t), e = clamp(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, recomposeColor(t);
}
function darken(t, e) {
  if (t = decomposeColor(t), e = clamp(e), t.type.indexOf("hsl") !== -1)
    t.values[2] *= 1 - e;
  else if (t.type.indexOf("rgb") !== -1 || t.type.indexOf("color") !== -1)
    for (let A = 0; A < 3; A += 1)
      t.values[A] *= 1 - e;
  return recomposeColor(t);
}
function lighten(t, e) {
  if (t = decomposeColor(t), e = clamp(e), t.type.indexOf("hsl") !== -1)
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.indexOf("rgb") !== -1)
    for (let A = 0; A < 3; A += 1)
      t.values[A] += (255 - t.values[A]) * e;
  else if (t.type.indexOf("color") !== -1)
    for (let A = 0; A < 3; A += 1)
      t.values[A] += (1 - t.values[A]) * e;
  return recomposeColor(t);
}
function createMixins(t, e) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [t.up("sm")]: {
        minHeight: 64
      }
    }
  }, e);
}
const _excluded$8 = ["mode", "contrastThreshold", "tonalOffset"], light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(t, e, A, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  t[e] || (t.hasOwnProperty(A) ? t[e] = t[A] : e === "light" ? t.light = lighten(t.main, o) : e === "dark" && (t.dark = darken(t.main, s)));
}
function getDefaultPrimary(t = "light") {
  return t === "dark" ? {
    main: blue$1[200],
    light: blue$1[50],
    dark: blue$1[400]
  } : {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(t = "light") {
  return t === "dark" ? {
    main: purple$1[200],
    light: purple$1[50],
    dark: purple$1[400]
  } : {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(t = "light") {
  return t === "dark" ? {
    main: red$1[500],
    light: red$1[300],
    dark: red$1[700]
  } : {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(t = "light") {
  return t === "dark" ? {
    main: lightBlue$1[400],
    light: lightBlue$1[300],
    dark: lightBlue$1[700]
  } : {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(t = "light") {
  return t === "dark" ? {
    main: green$1[400],
    light: green$1[300],
    dark: green$1[700]
  } : {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(t = "light") {
  return t === "dark" ? {
    main: orange$1[400],
    light: orange$1[300],
    dark: orange$1[700]
  } : {
    main: "#ed6c02",
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(t) {
  const {
    mode: e = "light",
    contrastThreshold: A = 3,
    tonalOffset: n = 0.2
  } = t, o = _objectWithoutPropertiesLoose(t, _excluded$8), s = t.primary || getDefaultPrimary(e), a = t.secondary || getDefaultSecondary(e), c = t.error || getDefaultError(e), l = t.info || getDefaultInfo(e), B = t.success || getDefaultSuccess(e), g = t.warning || getDefaultWarning(e);
  function E(v) {
    const D = getContrastRatio(v, dark.text.primary) >= A ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = getContrastRatio(v, D);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${D} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return D;
  }
  const I = ({
    color: v,
    name: D,
    mainShade: T = 500,
    lightShade: Z = 300,
    darkShade: j = 700
  }) => {
    if (v = _extends({}, v), !v.main && v[T] && (v.main = v[T]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${D ? ` (${D})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : formatMuiErrorMessage(11, D ? ` (${D})` : "", T));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${D ? ` (${D})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, D ? ` (${D})` : "", JSON.stringify(v.main)));
    return addLightOrDark(v, "light", Z, n), addLightOrDark(v, "dark", j, n), v.contrastText || (v.contrastText = E(v.main)), v;
  }, x = {
    dark,
    light
  };
  return process.env.NODE_ENV !== "production" && (x[e] || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), deepmerge(_extends({
    common: _extends({}, common$1),
    mode: e,
    primary: I({
      color: s,
      name: "primary"
    }),
    secondary: I({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: I({
      color: c,
      name: "error"
    }),
    warning: I({
      color: g,
      name: "warning"
    }),
    info: I({
      color: l,
      name: "info"
    }),
    success: I({
      color: B,
      name: "success"
    }),
    grey: grey$1,
    contrastThreshold: A,
    getContrastText: E,
    augmentColor: I,
    tonalOffset: n
  }, x[e]), o);
}
const _excluded$7 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(t) {
  return Math.round(t * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
}, defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(t, e) {
  const A = typeof e == "function" ? e(t) : e, {
    fontFamily: n = defaultFontFamily,
    fontSize: o = 14,
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    htmlFontSize: B = 16,
    allVariants: g,
    pxToRem: E
  } = A, I = _objectWithoutPropertiesLoose(A, _excluded$7);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof B != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = o / 14, U = E || ((T) => `${T / B * x}rem`), v = (T, Z, j, L, Y) => _extends({
    fontFamily: n,
    fontWeight: T,
    fontSize: U(Z),
    lineHeight: j
  }, n === defaultFontFamily ? {
    letterSpacing: `${round(L / Z)}em`
  } : {}, Y, g), D = {
    h1: v(s, 96, 1.167, -1.5),
    h2: v(s, 60, 1.2, -0.5),
    h3: v(a, 48, 1.167, 0),
    h4: v(a, 34, 1.235, 0.25),
    h5: v(a, 24, 1.334, 0),
    h6: v(c, 20, 1.6, 0.15),
    subtitle1: v(a, 16, 1.75, 0.15),
    subtitle2: v(c, 14, 1.57, 0.1),
    body1: v(a, 16, 1.5, 0.15),
    body2: v(a, 14, 1.43, 0.15),
    button: v(c, 14, 1.75, 0.4, caseAllCaps),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize: B,
    pxToRem: U,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, D), I, {
    clone: !1
  });
}
const shadowKeyUmbraOpacity = 0.2, shadowKeyPenumbraOpacity = 0.14, shadowAmbientShadowOpacity = 0.12;
function createShadow(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], shadows$1 = shadows, _excluded$6 = ["duration", "easing", "delay"], easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(t) {
  return `${Math.round(t)}ms`;
}
function getAutoHeightDuration(t) {
  if (!t)
    return 0;
  const e = t / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function createTransitions(t) {
  const e = _extends({}, easing, t.easing), A = _extends({}, duration, t.duration);
  return _extends({
    getAutoHeightDuration,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = A.standard,
        easing: c = e.easeInOut,
        delay: l = 0
      } = s, B = _objectWithoutPropertiesLoose(s, _excluded$6);
      if (process.env.NODE_ENV !== "production") {
        const g = (I) => typeof I == "string", E = (I) => !isNaN(parseFloat(I));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !E(a) && !g(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), g(c) || console.error('MUI: Argument "easing" must be a string.'), !E(l) && !g(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(B).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(B).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof a == "string" ? a : formatMs(a)} ${c} ${typeof l == "string" ? l : formatMs(l)}`).join(",");
    }
  }, t, {
    easing: e,
    duration: A
  });
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zIndex$1 = zIndex, _excluded$5 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(t = {}, ...e) {
  const {
    mixins: A = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = t, a = _objectWithoutPropertiesLoose(t, _excluded$5);
  if (t.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : formatMuiErrorMessage(18));
  const c = createPalette(n), l = createTheme$1(t);
  let B = deepmerge(l, {
    mixins: createMixins(l.breakpoints, A),
    palette: c,
    shadows: shadows$1.slice(),
    typography: createTypography(c, s),
    transitions: createTransitions(o),
    zIndex: _extends({}, zIndex$1)
  });
  if (B = deepmerge(B, a), B = e.reduce((g, E) => deepmerge(g, E), B), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], E = (I, x) => {
      let U;
      for (U in I) {
        const v = I[U];
        if (g.indexOf(U) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const D = generateUtilityClass("", U);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${U}\` internal state.`, "You can not override it like this: ", JSON.stringify(I, null, 2), "", `Instead, you need to use the '&.${D}' syntax:`, JSON.stringify({
              root: {
                [`&.${D}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          I[U] = {};
        }
      }
    };
    Object.keys(B.components).forEach((I) => {
      const x = B.components[I].styleOverrides;
      x && I.indexOf("Mui") === 0 && E(x, I);
    });
  }
  return B;
}
const defaultTheme = createTheme(), defaultTheme$1 = defaultTheme;
function useThemeProps({
  props: t,
  name: e
}) {
  return useThemeProps$1({
    props: t,
    name: e,
    defaultTheme: defaultTheme$1
  });
}
const rootShouldForwardProp = (t) => shouldForwardProp(t) && t !== "classes", styled = createStyled({
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
}), styled$1 = styled;
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, _setPrototypeOf(t, e);
}
function _inheritsLoose(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, _setPrototypeOf(t, e);
}
const TransitionGroupContext = React__default.createContext(null);
function _assertThisInitialized(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function getChildMapping(t, e) {
  var A = function(s) {
    return e && isValidElement(s) ? e(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return t && Children.map(t, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = A(o);
  }), n;
}
function mergeChildMappings(t, e) {
  t = t || {}, e = e || {};
  function A(g) {
    return g in e ? e[g] : t[g];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in t)
    s in e ? o.length && (n[s] = o, o = []) : o.push(s);
  var a, c = {};
  for (var l in e) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var B = n[l][a];
        c[n[l][a]] = A(B);
      }
    c[l] = A(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = A(o[a]);
  return c;
}
function getProp(t, e, A) {
  return A[e] != null ? A[e] : t.props[e];
}
function getInitialChildMapping(t, e) {
  return getChildMapping(t.children, function(A) {
    return cloneElement(A, {
      onExited: e.bind(null, A),
      in: !0,
      appear: getProp(A, "appear", t),
      enter: getProp(A, "enter", t),
      exit: getProp(A, "exit", t)
    });
  });
}
function getNextChildMapping(t, e, A) {
  var n = getChildMapping(t.children), o = mergeChildMappings(e, n);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (!!isValidElement(a)) {
      var c = s in e, l = s in n, B = e[s], g = isValidElement(B) && !B.props.in;
      l && (!c || g) ? o[s] = cloneElement(a, {
        onExited: A.bind(null, a),
        in: !0,
        exit: getProp(a, "exit", t),
        enter: getProp(a, "enter", t)
      }) : !l && c && !g ? o[s] = cloneElement(a, {
        in: !1
      }) : l && c && isValidElement(B) && (o[s] = cloneElement(a, {
        onExited: A.bind(null, a),
        in: B.props.in,
        exit: getProp(a, "exit", t),
        enter: getProp(a, "enter", t)
      }));
    }
  }), o;
}
var values = Object.values || function(t) {
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}, defaultProps = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, TransitionGroup = /* @__PURE__ */ function(t) {
  _inheritsLoose(e, t);
  function e(n, o) {
    var s;
    s = t.call(this, n, o) || this;
    var a = s.handleExited.bind(_assertThisInitialized(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var A = e.prototype;
  return A.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, A.componentWillUnmount = function() {
    this.mounted = !1;
  }, e.getDerivedStateFromProps = function(o, s) {
    var a = s.children, c = s.handleExited, l = s.firstRender;
    return {
      children: l ? getInitialChildMapping(o, c) : getNextChildMapping(o, a, c),
      firstRender: !1
    };
  }, A.handleExited = function(o, s) {
    var a = getChildMapping(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = _extends({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, A.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, c = _objectWithoutPropertiesLoose(o, ["component", "childFactory"]), l = this.state.contextValue, B = values(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ jsx(TransitionGroupContext.Provider, {
      value: l,
      children: B
    }) : /* @__PURE__ */ jsx(TransitionGroupContext.Provider, {
      value: l,
      children: /* @__PURE__ */ jsx(s, {
        ...c,
        children: B
      })
    });
  }, e;
}(React__default.Component);
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  component: propTypes.exports.any,
  children: propTypes.exports.node,
  appear: propTypes.exports.bool,
  enter: propTypes.exports.bool,
  exit: propTypes.exports.bool,
  childFactory: propTypes.exports.func
} : {};
TransitionGroup.defaultProps = defaultProps;
const TransitionGroup$1 = TransitionGroup;
function Ripple(t) {
  const {
    className: e,
    classes: A,
    pulsate: n = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: B
  } = t, [g, E] = React.useState(!1), I = clsx(e, A.ripple, A.rippleVisible, n && A.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, U = clsx(A.child, g && A.childLeaving, n && A.childPulsate);
  return !c && !g && E(!0), React.useEffect(() => {
    if (!c && l != null) {
      const v = setTimeout(l, B);
      return () => {
        clearTimeout(v);
      };
    }
  }, [l, c, B]), /* @__PURE__ */ jsx("span", {
    className: I,
    style: x,
    children: /* @__PURE__ */ jsx("span", {
      className: U
    })
  });
}
process.env.NODE_ENV !== "production" && (Ripple.propTypes = {
  classes: propTypes.exports.object.isRequired,
  className: propTypes.exports.string,
  in: propTypes.exports.bool,
  onExited: propTypes.exports.func,
  pulsate: propTypes.exports.bool,
  rippleSize: propTypes.exports.number,
  rippleX: propTypes.exports.number,
  rippleY: propTypes.exports.number,
  timeout: propTypes.exports.number.isRequired
});
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), touchRippleClasses$1 = touchRippleClasses, _excluded$4 = ["center", "classes", "className"];
let _ = (t) => t, _t, _t2, _t3, _t4;
const DURATION = 550, DELAY_RIPPLE = 80, enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), TouchRippleRoot = styled$1("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), TouchRippleRipple = styled$1(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
  theme: t
}) => t.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
  theme: t
}) => t.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
  theme: t
}) => t.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
  theme: t
}) => t.transitions.easing.easeInOut), TouchRipple = /* @__PURE__ */ React.forwardRef(function(e, A) {
  const n = useThemeProps({
    props: e,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a
  } = n, c = _objectWithoutPropertiesLoose(n, _excluded$4), [l, B] = React.useState([]), g = React.useRef(0), E = React.useRef(null);
  React.useEffect(() => {
    E.current && (E.current(), E.current = null);
  }, [l]);
  const I = React.useRef(!1), x = React.useRef(null), U = React.useRef(null), v = React.useRef(null);
  React.useEffect(() => () => {
    clearTimeout(x.current);
  }, []);
  const D = React.useCallback((L) => {
    const {
      pulsate: Y,
      rippleX: W,
      rippleY: h,
      rippleSize: C,
      cb: y
    } = L;
    B((R) => [...R, /* @__PURE__ */ jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(s.ripple, touchRippleClasses$1.ripple),
        rippleVisible: clsx(s.rippleVisible, touchRippleClasses$1.rippleVisible),
        ripplePulsate: clsx(s.ripplePulsate, touchRippleClasses$1.ripplePulsate),
        child: clsx(s.child, touchRippleClasses$1.child),
        childLeaving: clsx(s.childLeaving, touchRippleClasses$1.childLeaving),
        childPulsate: clsx(s.childPulsate, touchRippleClasses$1.childPulsate)
      },
      timeout: DURATION,
      pulsate: Y,
      rippleX: W,
      rippleY: h,
      rippleSize: C
    }, g.current)]), g.current += 1, E.current = y;
  }, [s]), T = React.useCallback((L = {}, Y = {}, W = () => {
  }) => {
    const {
      pulsate: h = !1,
      center: C = o || Y.pulsate,
      fakeElement: y = !1
    } = Y;
    if ((L == null ? void 0 : L.type) === "mousedown" && I.current) {
      I.current = !1;
      return;
    }
    (L == null ? void 0 : L.type) === "touchstart" && (I.current = !0);
    const R = y ? null : v.current, G = R ? R.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, M, S;
    if (C || L === void 0 || L.clientX === 0 && L.clientY === 0 || !L.clientX && !L.touches)
      N = Math.round(G.width / 2), M = Math.round(G.height / 2);
    else {
      const {
        clientX: p,
        clientY: w
      } = L.touches && L.touches.length > 0 ? L.touches[0] : L;
      N = Math.round(p - G.left), M = Math.round(w - G.top);
    }
    if (C)
      S = Math.sqrt((2 * G.width ** 2 + G.height ** 2) / 3), S % 2 === 0 && (S += 1);
    else {
      const p = Math.max(Math.abs((R ? R.clientWidth : 0) - N), N) * 2 + 2, w = Math.max(Math.abs((R ? R.clientHeight : 0) - M), M) * 2 + 2;
      S = Math.sqrt(p ** 2 + w ** 2);
    }
    L != null && L.touches ? U.current === null && (U.current = () => {
      D({
        pulsate: h,
        rippleX: N,
        rippleY: M,
        rippleSize: S,
        cb: W
      });
    }, x.current = setTimeout(() => {
      U.current && (U.current(), U.current = null);
    }, DELAY_RIPPLE)) : D({
      pulsate: h,
      rippleX: N,
      rippleY: M,
      rippleSize: S,
      cb: W
    });
  }, [o, D]), Z = React.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), j = React.useCallback((L, Y) => {
    if (clearTimeout(x.current), (L == null ? void 0 : L.type) === "touchend" && U.current) {
      U.current(), U.current = null, x.current = setTimeout(() => {
        j(L, Y);
      });
      return;
    }
    U.current = null, B((W) => W.length > 0 ? W.slice(1) : W), E.current = Y;
  }, []);
  return React.useImperativeHandle(A, () => ({
    pulsate: Z,
    start: T,
    stop: j
  }), [Z, T, j]), /* @__PURE__ */ jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses$1.root, s.root, a),
    ref: v
  }, c, {
    children: /* @__PURE__ */ jsx(TransitionGroup$1, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (TouchRipple.propTypes = {
  center: propTypes.exports.bool,
  classes: propTypes.exports.object,
  className: propTypes.exports.string
});
const TouchRipple$1 = TouchRipple;
function getButtonBaseUtilityClass(t) {
  return generateUtilityClass("MuiButtonBase", t);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]), buttonBaseClasses$1 = buttonBaseClasses, _excluded$3 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], useUtilityClasses$2 = (t) => {
  const {
    disabled: e,
    focusVisible: A,
    focusVisibleClassName: n,
    classes: o
  } = t, a = composeClasses({
    root: ["root", e && "disabled", A && "focusVisible"]
  }, getButtonBaseUtilityClass, o);
  return A && n && (a.root += ` ${n}`), a;
}, ButtonBaseRoot = styled$1("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (t, e) => e.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
  },
  [`&.${buttonBaseClasses$1.disabled}`]: {
    pointerEvents: "none",
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ButtonBase = /* @__PURE__ */ React.forwardRef(function(e, A) {
  const n = useThemeProps({
    props: e,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: B = !1,
    disableRipple: g = !1,
    disableTouchRipple: E = !1,
    focusRipple: I = !1,
    LinkComponent: x = "a",
    onBlur: U,
    onClick: v,
    onContextMenu: D,
    onDragLeave: T,
    onFocus: Z,
    onFocusVisible: j,
    onKeyDown: L,
    onKeyUp: Y,
    onMouseDown: W,
    onMouseLeave: h,
    onMouseUp: C,
    onTouchEnd: y,
    onTouchMove: R,
    onTouchStart: G,
    tabIndex: N = 0,
    TouchRippleProps: M,
    touchRippleRef: S,
    type: p
  } = n, w = _objectWithoutPropertiesLoose(n, _excluded$3), k = React.useRef(null), O = React.useRef(null), te = useForkRef(O, S), {
    isFocusVisibleRef: q,
    onFocus: P,
    onBlur: ie,
    ref: se
  } = useIsFocusVisible(), [Q, Ae] = React.useState(!1);
  B && Q && Ae(!1), React.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Ae(!0), k.current.focus();
    }
  }), []);
  const [oe, ue] = React.useState(!1);
  React.useEffect(() => {
    ue(!0);
  }, []);
  const X = oe && !g && !B;
  React.useEffect(() => {
    Q && I && !g && oe && O.current.pulsate();
  }, [g, I, Q, oe]);
  function ee(le, qe, Ue = E) {
    return useEventCallback((Oe) => (qe && qe(Oe), !Ue && O.current && O.current[le](Oe), !0));
  }
  const ae = ee("start", W), ce = ee("stop", D), z = ee("stop", T), pe = ee("stop", C), re = ee("stop", (le) => {
    Q && le.preventDefault(), h && h(le);
  }), d = ee("start", G), u = ee("stop", y), f = ee("stop", R), m = ee("stop", (le) => {
    ie(le), q.current === !1 && Ae(!1), U && U(le);
  }, !1), H = useEventCallback((le) => {
    k.current || (k.current = le.currentTarget), P(le), q.current === !0 && (Ae(!0), j && j(le)), Z && Z(le);
  }), V = () => {
    const le = k.current;
    return l && l !== "button" && !(le.tagName === "A" && le.href);
  }, $ = React.useRef(!1), he = useEventCallback((le) => {
    I && !$.current && Q && O.current && le.key === " " && ($.current = !0, O.current.stop(le, () => {
      O.current.start(le);
    })), le.target === le.currentTarget && V() && le.key === " " && le.preventDefault(), L && L(le), le.target === le.currentTarget && V() && le.key === "Enter" && !B && (le.preventDefault(), v && v(le));
  }), ye = useEventCallback((le) => {
    I && le.key === " " && O.current && Q && !le.defaultPrevented && ($.current = !1, O.current.stop(le, () => {
      O.current.pulsate(le);
    })), Y && Y(le), v && le.target === le.currentTarget && V() && le.key === " " && !le.defaultPrevented && v(le);
  });
  let me = l;
  me === "button" && (w.href || w.to) && (me = x);
  const Ge = {};
  me === "button" ? (Ge.type = p === void 0 ? "button" : p, Ge.disabled = B) : (!w.href && !w.to && (Ge.role = "button"), B && (Ge["aria-disabled"] = B));
  const xe = useForkRef(A, se, k);
  process.env.NODE_ENV !== "production" && React.useEffect(() => {
    X && !O.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [X]);
  const Ee = _extends({}, n, {
    centerRipple: s,
    component: l,
    disabled: B,
    disableRipple: g,
    disableTouchRipple: E,
    focusRipple: I,
    tabIndex: N,
    focusVisible: Q
  }), Te = useUtilityClasses$2(Ee);
  return /* @__PURE__ */ jsxs(ButtonBaseRoot, _extends({
    as: me,
    className: clsx(Te.root, c),
    ownerState: Ee,
    onBlur: m,
    onClick: v,
    onContextMenu: ce,
    onFocus: H,
    onKeyDown: he,
    onKeyUp: ye,
    onMouseDown: ae,
    onMouseLeave: re,
    onMouseUp: pe,
    onDragLeave: z,
    onTouchEnd: u,
    onTouchMove: f,
    onTouchStart: d,
    ref: xe,
    tabIndex: B ? -1 : N,
    type: p
  }, Ge, w, {
    children: [a, X ? /* @__PURE__ */ jsx(TouchRipple$1, _extends({
      ref: te,
      center: s
    }, M)) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ButtonBase.propTypes = {
  action: refType$1,
  centerRipple: propTypes.exports.bool,
  children: propTypes.exports.node,
  classes: propTypes.exports.object,
  className: propTypes.exports.string,
  component: elementTypeAcceptingRef$1,
  disabled: propTypes.exports.bool,
  disableRipple: propTypes.exports.bool,
  disableTouchRipple: propTypes.exports.bool,
  focusRipple: propTypes.exports.bool,
  focusVisibleClassName: propTypes.exports.string,
  href: propTypes.exports.any,
  LinkComponent: propTypes.exports.elementType,
  onBlur: propTypes.exports.func,
  onClick: propTypes.exports.func,
  onContextMenu: propTypes.exports.func,
  onDragLeave: propTypes.exports.func,
  onFocus: propTypes.exports.func,
  onFocusVisible: propTypes.exports.func,
  onKeyDown: propTypes.exports.func,
  onKeyUp: propTypes.exports.func,
  onMouseDown: propTypes.exports.func,
  onMouseLeave: propTypes.exports.func,
  onMouseUp: propTypes.exports.func,
  onTouchEnd: propTypes.exports.func,
  onTouchMove: propTypes.exports.func,
  onTouchStart: propTypes.exports.func,
  sx: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.object, propTypes.exports.bool])), propTypes.exports.func, propTypes.exports.object]),
  tabIndex: propTypes.exports.number,
  TouchRippleProps: propTypes.exports.object,
  touchRippleRef: propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.shape({
    current: propTypes.exports.shape({
      pulsate: propTypes.exports.func.isRequired,
      start: propTypes.exports.func.isRequired,
      stop: propTypes.exports.func.isRequired
    })
  })]),
  type: propTypes.exports.oneOfType([propTypes.exports.oneOf(["button", "reset", "submit"]), propTypes.exports.string])
});
const ButtonBase$1 = ButtonBase;
function getIconButtonUtilityClass(t) {
  return generateUtilityClass("MuiIconButton", t);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), iconButtonClasses$1 = iconButtonClasses, _excluded$2 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], useUtilityClasses$1 = (t) => {
  const {
    classes: e,
    disabled: A,
    color: n,
    edge: o,
    size: s
  } = t, a = {
    root: ["root", A && "disabled", n !== "default" && `color${capitalize(n)}`, o && `edge${capitalize(o)}`, `size${capitalize(s)}`]
  };
  return composeClasses(a, getIconButtonUtilityClass, e);
}, IconButtonRoot = styled$1(ButtonBase$1, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (t, e) => {
    const {
      ownerState: A
    } = t;
    return [e.root, A.color !== "default" && e[`color${capitalize(A.color)}`], A.edge && e[`edge${capitalize(A.edge)}`], e[`size${capitalize(A.size)}`]];
  }
})(({
  theme: t,
  ownerState: e
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: t.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  color: (t.vars || t).palette.action.active,
  transition: t.transitions.create("background-color", {
    duration: t.transitions.duration.shortest
  })
}, !e.disableRipple && {
  "&:hover": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : alpha(t.palette.action.active, t.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
}), ({
  theme: t,
  ownerState: e
}) => _extends({}, e.color === "inherit" && {
  color: "inherit"
}, e.color !== "inherit" && e.color !== "default" && _extends({
  color: (t.vars || t).palette[e.color].main
}, !e.disableRipple && {
  "&:hover": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : alpha(t.palette[e.color].main, t.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}), e.size === "small" && {
  padding: 5,
  fontSize: t.typography.pxToRem(18)
}, e.size === "large" && {
  padding: 12,
  fontSize: t.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses$1.disabled}`]: {
    backgroundColor: "transparent",
    color: (t.vars || t).palette.action.disabled
  }
})), IconButton = /* @__PURE__ */ React.forwardRef(function(e, A) {
  const n = useThemeProps({
    props: e,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: B = !1,
    size: g = "medium"
  } = n, E = _objectWithoutPropertiesLoose(n, _excluded$2), I = _extends({}, n, {
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: B,
    size: g
  }), x = useUtilityClasses$1(I);
  return /* @__PURE__ */ jsx(IconButtonRoot, _extends({
    className: clsx(x.root, a),
    centerRipple: !0,
    focusRipple: !B,
    disabled: l,
    ref: A,
    ownerState: I
  }, E, {
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (IconButton.propTypes = {
  children: chainPropTypes(propTypes.exports.node, (t) => React.Children.toArray(t.children).some((A) => /* @__PURE__ */ React.isValidElement(A) && A.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  classes: propTypes.exports.object,
  className: propTypes.exports.string,
  color: propTypes.exports.oneOfType([propTypes.exports.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), propTypes.exports.string]),
  disabled: propTypes.exports.bool,
  disableFocusRipple: propTypes.exports.bool,
  disableRipple: propTypes.exports.bool,
  edge: propTypes.exports.oneOf(["end", "start", !1]),
  size: propTypes.exports.oneOfType([propTypes.exports.oneOf(["small", "medium", "large"]), propTypes.exports.string]),
  sx: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.object, propTypes.exports.bool])), propTypes.exports.func, propTypes.exports.object])
});
const IconButton$1 = IconButton;
function getButtonUtilityClass(t) {
  return generateUtilityClass("MuiButton", t);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), buttonClasses$1 = buttonClasses, ButtonGroupContext = /* @__PURE__ */ React.createContext({});
process.env.NODE_ENV !== "production" && (ButtonGroupContext.displayName = "ButtonGroupContext");
const ButtonGroupContext$1 = ButtonGroupContext, _excluded$1 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], useUtilityClasses = (t) => {
  const {
    color: e,
    disableElevation: A,
    fullWidth: n,
    size: o,
    variant: s,
    classes: a
  } = t, c = {
    root: ["root", s, `${s}${capitalize(e)}`, `size${capitalize(o)}`, `${s}Size${capitalize(o)}`, e === "inherit" && "colorInherit", A && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(o)}`],
    endIcon: ["endIcon", `iconSize${capitalize(o)}`]
  }, l = composeClasses(c, getButtonUtilityClass, a);
  return _extends({}, a, l);
}, commonIconStyles = (t) => _extends({}, t.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, t.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, t.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), ButtonRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: (t) => rootShouldForwardProp(t) || t === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (t, e) => {
    const {
      ownerState: A
    } = t;
    return [e.root, e[A.variant], e[`${A.variant}${capitalize(A.color)}`], e[`size${capitalize(A.size)}`], e[`${A.variant}Size${capitalize(A.size)}`], A.color === "inherit" && e.colorInherit, A.disableElevation && e.disableElevation, A.fullWidth && e.fullWidth];
  }
})(({
  theme: t,
  ownerState: e
}) => {
  var A, n;
  return _extends({}, t.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (t.vars || t).shape.borderRadius,
    transition: t.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: t.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : alpha(t.palette.text.primary, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "text" && e.color !== "inherit" && {
      backgroundColor: t.vars ? `rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : alpha(t.palette[e.color].main, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "outlined" && e.color !== "inherit" && {
      border: `1px solid ${(t.vars || t).palette[e.color].main}`,
      backgroundColor: t.vars ? `rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : alpha(t.palette[e.color].main, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, e.variant === "contained" && {
      backgroundColor: (t.vars || t).palette.grey.A100,
      boxShadow: (t.vars || t).shadows[4],
      "@media (hover: none)": {
        boxShadow: (t.vars || t).shadows[2],
        backgroundColor: (t.vars || t).palette.grey[300]
      }
    }, e.variant === "contained" && e.color !== "inherit" && {
      backgroundColor: (t.vars || t).palette[e.color].dark,
      "@media (hover: none)": {
        backgroundColor: (t.vars || t).palette[e.color].main
      }
    }),
    "&:active": _extends({}, e.variant === "contained" && {
      boxShadow: (t.vars || t).shadows[8]
    }),
    [`&.${buttonClasses$1.focusVisible}`]: _extends({}, e.variant === "contained" && {
      boxShadow: (t.vars || t).shadows[6]
    }),
    [`&.${buttonClasses$1.disabled}`]: _extends({
      color: (t.vars || t).palette.action.disabled
    }, e.variant === "outlined" && {
      border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
    }, e.variant === "outlined" && e.color === "secondary" && {
      border: `1px solid ${(t.vars || t).palette.action.disabled}`
    }, e.variant === "contained" && {
      color: (t.vars || t).palette.action.disabled,
      boxShadow: (t.vars || t).shadows[0],
      backgroundColor: (t.vars || t).palette.action.disabledBackground
    })
  }, e.variant === "text" && {
    padding: "6px 8px"
  }, e.variant === "text" && e.color !== "inherit" && {
    color: (t.vars || t).palette[e.color].main
  }, e.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, e.variant === "outlined" && e.color !== "inherit" && {
    color: (t.vars || t).palette[e.color].main,
    border: t.vars ? `1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)` : `1px solid ${alpha(t.palette[e.color].main, 0.5)}`
  }, e.variant === "contained" && {
    color: t.vars ? t.vars.palette.text.primary : (A = (n = t.palette).getContrastText) == null ? void 0 : A.call(n, t.palette.grey[300]),
    backgroundColor: (t.vars || t).palette.grey[300],
    boxShadow: (t.vars || t).shadows[2]
  }, e.variant === "contained" && e.color !== "inherit" && {
    color: (t.vars || t).palette[e.color].contrastText,
    backgroundColor: (t.vars || t).palette[e.color].main
  }, e.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, e.size === "small" && e.variant === "text" && {
    padding: "4px 5px",
    fontSize: t.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "text" && {
    padding: "8px 11px",
    fontSize: t.typography.pxToRem(15)
  }, e.size === "small" && e.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: t.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: t.typography.pxToRem(15)
  }, e.size === "small" && e.variant === "contained" && {
    padding: "4px 10px",
    fontSize: t.typography.pxToRem(13)
  }, e.size === "large" && e.variant === "contained" && {
    padding: "8px 22px",
    fontSize: t.typography.pxToRem(15)
  }, e.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: t
}) => t.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: "none"
  }
}), ButtonStartIcon = styled$1("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (t, e) => {
    const {
      ownerState: A
    } = t;
    return [e.startIcon, e[`iconSize${capitalize(A.size)}`]];
  }
})(({
  ownerState: t
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, t.size === "small" && {
  marginLeft: -2
}, commonIconStyles(t))), ButtonEndIcon = styled$1("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (t, e) => {
    const {
      ownerState: A
    } = t;
    return [e.endIcon, e[`iconSize${capitalize(A.size)}`]];
  }
})(({
  ownerState: t
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, t.size === "small" && {
  marginRight: -2
}, commonIconStyles(t))), Button = /* @__PURE__ */ React.forwardRef(function(e, A) {
  const n = React.useContext(ButtonGroupContext$1), o = resolveProps(n, e), s = useThemeProps({
    props: o,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: l = "button",
    className: B,
    disabled: g = !1,
    disableElevation: E = !1,
    disableFocusRipple: I = !1,
    endIcon: x,
    focusVisibleClassName: U,
    fullWidth: v = !1,
    size: D = "medium",
    startIcon: T,
    type: Z,
    variant: j = "text"
  } = s, L = _objectWithoutPropertiesLoose(s, _excluded$1), Y = _extends({}, s, {
    color: c,
    component: l,
    disabled: g,
    disableElevation: E,
    disableFocusRipple: I,
    fullWidth: v,
    size: D,
    type: Z,
    variant: j
  }), W = useUtilityClasses(Y), h = T && /* @__PURE__ */ jsx(ButtonStartIcon, {
    className: W.startIcon,
    ownerState: Y,
    children: T
  }), C = x && /* @__PURE__ */ jsx(ButtonEndIcon, {
    className: W.endIcon,
    ownerState: Y,
    children: x
  });
  return /* @__PURE__ */ jsxs(ButtonRoot, _extends({
    ownerState: Y,
    className: clsx(n.className, W.root, B),
    component: l,
    disabled: g,
    focusRipple: !I,
    focusVisibleClassName: clsx(W.focusVisible, U),
    ref: A,
    type: Z
  }, L, {
    classes: W,
    children: [h, a, C]
  }));
});
process.env.NODE_ENV !== "production" && (Button.propTypes = {
  children: propTypes.exports.node,
  classes: propTypes.exports.object,
  className: propTypes.exports.string,
  color: propTypes.exports.oneOfType([propTypes.exports.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), propTypes.exports.string]),
  component: propTypes.exports.elementType,
  disabled: propTypes.exports.bool,
  disableElevation: propTypes.exports.bool,
  disableFocusRipple: propTypes.exports.bool,
  disableRipple: propTypes.exports.bool,
  endIcon: propTypes.exports.node,
  focusVisibleClassName: propTypes.exports.string,
  fullWidth: propTypes.exports.bool,
  href: propTypes.exports.string,
  size: propTypes.exports.oneOfType([propTypes.exports.oneOf(["small", "medium", "large"]), propTypes.exports.string]),
  startIcon: propTypes.exports.node,
  sx: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.object, propTypes.exports.bool])), propTypes.exports.func, propTypes.exports.object]),
  type: propTypes.exports.oneOfType([propTypes.exports.oneOf(["button", "reset", "submit"]), propTypes.exports.string]),
  variant: propTypes.exports.oneOfType([propTypes.exports.oneOf(["contained", "outlined", "text"]), propTypes.exports.string])
});
const Button$1 = Button, _excluded = ["component", "direction", "spacing", "divider", "children"];
function joinChildren(t, e) {
  const A = React.Children.toArray(t).filter(Boolean);
  return A.reduce((n, o, s) => (n.push(o), s < A.length - 1 && n.push(/* @__PURE__ */ React.cloneElement(e, {
    key: `separator-${s}`
  })), n), []);
}
const getSideFromDirection = (t) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[t], style = ({
  ownerState: t,
  theme: e
}) => {
  let A = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme: e
  }, resolveBreakpointValues({
    values: t.direction,
    breakpoints: e.breakpoints.values
  }), (n) => ({
    flexDirection: n
  })));
  if (t.spacing) {
    const n = createUnarySpacing(e), o = Object.keys(e.breakpoints.values).reduce((l, B) => ((typeof t.spacing == "object" && t.spacing[B] != null || typeof t.direction == "object" && t.direction[B] != null) && (l[B] = !0), l), {}), s = resolveBreakpointValues({
      values: t.direction,
      base: o
    }), a = resolveBreakpointValues({
      values: t.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((l, B, g) => {
      if (!s[l]) {
        const I = B > 0 ? s[g[B - 1]] : "column";
        s[l] = I;
      }
    }), A = deepmerge(A, handleBreakpoints({
      theme: e
    }, a, (l, B) => ({
      "& > :not(style) + :not(style)": {
        margin: 0,
        [`margin${getSideFromDirection(B ? s[B] : t.direction)}`]: getValue(n, l)
      }
    })));
  }
  return A = mergeBreakpointsInOrder(e.breakpoints, A), A;
}, StackRoot = styled$1("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (t, e) => [e.root]
})(style), Stack = /* @__PURE__ */ React.forwardRef(function(e, A) {
  const n = useThemeProps({
    props: e,
    name: "MuiStack"
  }), o = extendSxProp(n), {
    component: s = "div",
    direction: a = "column",
    spacing: c = 0,
    divider: l,
    children: B
  } = o, g = _objectWithoutPropertiesLoose(o, _excluded);
  return /* @__PURE__ */ jsx(StackRoot, _extends({
    as: s,
    ownerState: {
      direction: a,
      spacing: c
    },
    ref: A
  }, g, {
    children: l ? joinChildren(B, l) : B
  }));
});
process.env.NODE_ENV !== "production" && (Stack.propTypes = {
  children: propTypes.exports.node,
  component: propTypes.exports.elementType,
  direction: propTypes.exports.oneOfType([propTypes.exports.oneOf(["column-reverse", "column", "row-reverse", "row"]), propTypes.exports.arrayOf(propTypes.exports.oneOf(["column-reverse", "column", "row-reverse", "row"])), propTypes.exports.object]),
  divider: propTypes.exports.node,
  spacing: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string])), propTypes.exports.number, propTypes.exports.object, propTypes.exports.string]),
  sx: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.object, propTypes.exports.bool])), propTypes.exports.func, propTypes.exports.object])
});
const Stack$1 = Stack, createStoreImpl = (t) => {
  let e;
  const A = /* @__PURE__ */ new Set(), n = (l, B) => {
    const g = typeof l == "function" ? l(e) : l;
    if (!Object.is(g, e)) {
      const E = e;
      e = (B != null ? B : typeof g != "object") ? g : Object.assign({}, e, g), A.forEach((I) => I(e, E));
    }
  }, o = () => e, c = { setState: n, getState: o, subscribe: (l) => (A.add(l), () => A.delete(l)), destroy: () => A.clear() };
  return e = t(n, o, c), c;
}, createStore = (t) => t ? createStoreImpl(t) : createStoreImpl;
var withSelector = { exports: {} }, withSelector_production_min = {}, shim = { exports: {} }, useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production_min;
function requireUseSyncExternalStoreShim_production_min() {
  if (hasRequiredUseSyncExternalStoreShim_production_min)
    return useSyncExternalStoreShim_production_min;
  hasRequiredUseSyncExternalStoreShim_production_min = 1;
  var t = React__default;
  function e(E, I) {
    return E === I && (E !== 0 || 1 / E === 1 / I) || E !== E && I !== I;
  }
  var A = typeof Object.is == "function" ? Object.is : e, n = t.useState, o = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function c(E, I) {
    var x = I(), U = n({ inst: { value: x, getSnapshot: I } }), v = U[0].inst, D = U[1];
    return s(function() {
      v.value = x, v.getSnapshot = I, l(v) && D({ inst: v });
    }, [E, x, I]), o(function() {
      return l(v) && D({ inst: v }), E(function() {
        l(v) && D({ inst: v });
      });
    }, [E]), a(x), x;
  }
  function l(E) {
    var I = E.getSnapshot;
    E = E.value;
    try {
      var x = I();
      return !A(E, x);
    } catch {
      return !0;
    }
  }
  function B(E, I) {
    return I();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? B : c;
  return useSyncExternalStoreShim_production_min.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : g, useSyncExternalStoreShim_production_min;
}
var useSyncExternalStoreShim_development = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_development;
function requireUseSyncExternalStoreShim_development() {
  return hasRequiredUseSyncExternalStoreShim_development || (hasRequiredUseSyncExternalStoreShim_development = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = React__default, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(j) {
      {
        for (var L = arguments.length, Y = new Array(L > 1 ? L - 1 : 0), W = 1; W < L; W++)
          Y[W - 1] = arguments[W];
        n("error", j, Y);
      }
    }
    function n(j, L, Y) {
      {
        var W = e.ReactDebugCurrentFrame, h = W.getStackAddendum();
        h !== "" && (L += "%s", Y = Y.concat([h]));
        var C = Y.map(function(y) {
          return String(y);
        });
        C.unshift("Warning: " + L), Function.prototype.apply.call(console[j], console, C);
      }
    }
    function o(j, L) {
      return j === L && (j !== 0 || 1 / j === 1 / L) || j !== j && L !== L;
    }
    var s = typeof Object.is == "function" ? Object.is : o, a = t.useState, c = t.useEffect, l = t.useLayoutEffect, B = t.useDebugValue, g = !1, E = !1;
    function I(j, L, Y) {
      g || t.startTransition !== void 0 && (g = !0, A("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var W = L();
      if (!E) {
        var h = L();
        s(W, h) || (A("The result of getSnapshot should be cached to avoid an infinite loop"), E = !0);
      }
      var C = a({
        inst: {
          value: W,
          getSnapshot: L
        }
      }), y = C[0].inst, R = C[1];
      return l(function() {
        y.value = W, y.getSnapshot = L, x(y) && R({
          inst: y
        });
      }, [j, W, L]), c(function() {
        x(y) && R({
          inst: y
        });
        var G = function() {
          x(y) && R({
            inst: y
          });
        };
        return j(G);
      }, [j]), B(W), W;
    }
    function x(j) {
      var L = j.getSnapshot, Y = j.value;
      try {
        var W = L();
        return !s(Y, W);
      } catch {
        return !0;
      }
    }
    function U(j, L, Y) {
      return L();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !v, T = D ? U : I, Z = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : T;
    useSyncExternalStoreShim_development.useSyncExternalStore = Z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), useSyncExternalStoreShim_development;
}
var hasRequiredShim;
function requireShim() {
  return hasRequiredShim || (hasRequiredShim = 1, function(t) {
    process.env.NODE_ENV === "production" ? t.exports = requireUseSyncExternalStoreShim_production_min() : t.exports = requireUseSyncExternalStoreShim_development();
  }(shim)), shim.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_production_min;
function requireWithSelector_production_min() {
  if (hasRequiredWithSelector_production_min)
    return withSelector_production_min;
  hasRequiredWithSelector_production_min = 1;
  var t = React__default, e = requireShim();
  function A(B, g) {
    return B === g && (B !== 0 || 1 / B === 1 / g) || B !== B && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : A, o = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, c = t.useMemo, l = t.useDebugValue;
  return withSelector_production_min.useSyncExternalStoreWithSelector = function(B, g, E, I, x) {
    var U = s(null);
    if (U.current === null) {
      var v = { hasValue: !1, value: null };
      U.current = v;
    } else
      v = U.current;
    U = c(function() {
      function T(W) {
        if (!Z) {
          if (Z = !0, j = W, W = I(W), x !== void 0 && v.hasValue) {
            var h = v.value;
            if (x(h, W))
              return L = h;
          }
          return L = W;
        }
        if (h = L, n(j, W))
          return h;
        var C = I(W);
        return x !== void 0 && x(h, C) ? h : (j = W, L = C);
      }
      var Z = !1, j, L, Y = E === void 0 ? null : E;
      return [function() {
        return T(g());
      }, Y === null ? void 0 : function() {
        return T(Y());
      }];
    }, [g, E, I, x]);
    var D = o(B, U[0], U[1]);
    return a(function() {
      v.hasValue = !0, v.value = D;
    }, [D]), l(D), D;
  }, withSelector_production_min;
}
var withSelector_development = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_development;
function requireWithSelector_development() {
  return hasRequiredWithSelector_development || (hasRequiredWithSelector_development = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = React__default, e = requireShim();
    function A(g, E) {
      return g === E && (g !== 0 || 1 / g === 1 / E) || g !== g && E !== E;
    }
    var n = typeof Object.is == "function" ? Object.is : A, o = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, c = t.useMemo, l = t.useDebugValue;
    function B(g, E, I, x, U) {
      var v = s(null), D;
      v.current === null ? (D = {
        hasValue: !1,
        value: null
      }, v.current = D) : D = v.current;
      var T = c(function() {
        var Y = !1, W, h, C = function(N) {
          if (!Y) {
            Y = !0, W = N;
            var M = x(N);
            if (U !== void 0 && D.hasValue) {
              var S = D.value;
              if (U(S, M))
                return h = S, S;
            }
            return h = M, M;
          }
          var p = W, w = h;
          if (n(p, N))
            return w;
          var k = x(N);
          return U !== void 0 && U(w, k) ? w : (W = N, h = k, k);
        }, y = I === void 0 ? null : I, R = function() {
          return C(E());
        }, G = y === null ? void 0 : function() {
          return C(y());
        };
        return [R, G];
      }, [E, I, x, U]), Z = T[0], j = T[1], L = o(g, Z, j);
      return a(function() {
        D.hasValue = !0, D.value = L;
      }, [L]), l(L), L;
    }
    withSelector_development.useSyncExternalStoreWithSelector = B, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), withSelector_development;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = requireWithSelector_production_min() : t.exports = requireWithSelector_development();
})(withSelector);
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelector.exports), { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
function useStore$1(t, e = t.getState, A) {
  const n = useSyncExternalStoreWithSelector(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    A
  );
  return useDebugValue(n), n;
}
const createImpl = (t) => {
  const e = typeof t == "function" ? createStore(t) : t, A = (n, o) => useStore$1(e, n, o);
  return Object.assign(A, e), A;
}, create = (t) => t ? createImpl(t) : createImpl;
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function createCommonjsModule(t, e, A) {
  return A = {
    path: e,
    exports: {},
    require: function(n, o) {
      return commonjsRequire(n, o == null ? A.path : o);
    }
  }, t(A, A.exports), A.exports;
}
function getDefaultExportFromNamespaceIfNotNamed(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default") && Object.keys(t).length === 1 ? t.default : t;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var byteLength_1 = byteLength, toByteArray_1 = toByteArray, fromByteArray_1 = fromByteArray, lookup = [], revLookup = [], Arr = typeof Uint8Array < "u" ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i)
  lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var A = t.indexOf("=");
  A === -1 && (A = e);
  var n = A === e ? 0 : 4 - A % 4;
  return [A, n];
}
function byteLength(t) {
  var e = getLens(t), A = e[0], n = e[1];
  return (A + n) * 3 / 4 - n;
}
function _byteLength(t, e, A) {
  return (e + A) * 3 / 4 - A;
}
function toByteArray(t) {
  var e, A = getLens(t), n = A[0], o = A[1], s = new Arr(_byteLength(t, n, o)), a = 0, c = o > 0 ? n - 4 : n, l;
  for (l = 0; l < c; l += 4)
    e = revLookup[t.charCodeAt(l)] << 18 | revLookup[t.charCodeAt(l + 1)] << 12 | revLookup[t.charCodeAt(l + 2)] << 6 | revLookup[t.charCodeAt(l + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = e & 255;
  return o === 2 && (e = revLookup[t.charCodeAt(l)] << 2 | revLookup[t.charCodeAt(l + 1)] >> 4, s[a++] = e & 255), o === 1 && (e = revLookup[t.charCodeAt(l)] << 10 | revLookup[t.charCodeAt(l + 1)] << 4 | revLookup[t.charCodeAt(l + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = e & 255), s;
}
function tripletToBase64(t) {
  return lookup[t >> 18 & 63] + lookup[t >> 12 & 63] + lookup[t >> 6 & 63] + lookup[t & 63];
}
function encodeChunk(t, e, A) {
  for (var n, o = [], s = e; s < A; s += 3)
    n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), o.push(tripletToBase64(n));
  return o.join("");
}
function fromByteArray(t) {
  for (var e, A = t.length, n = A % 3, o = [], s = 16383, a = 0, c = A - n; a < c; a += s)
    o.push(encodeChunk(t, a, a + s > c ? c : a + s));
  return n === 1 ? (e = t[A - 1], o.push(
    lookup[e >> 2] + lookup[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[A - 2] << 8) + t[A - 1], o.push(
    lookup[e >> 10] + lookup[e >> 4 & 63] + lookup[e << 2 & 63] + "="
  )), o.join("");
}
var base64Js = {
  byteLength: byteLength_1,
  toByteArray: toByteArray_1,
  fromByteArray: fromByteArray_1
};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var read = function(t, e, A, n, o) {
  var s, a, c = o * 8 - n - 1, l = (1 << c) - 1, B = l >> 1, g = -7, E = A ? o - 1 : 0, I = A ? -1 : 1, x = t[e + E];
  for (E += I, s = x & (1 << -g) - 1, x >>= -g, g += c; g > 0; s = s * 256 + t[e + E], E += I, g -= 8)
    ;
  for (a = s & (1 << -g) - 1, s >>= -g, g += n; g > 0; a = a * 256 + t[e + E], E += I, g -= 8)
    ;
  if (s === 0)
    s = 1 - B;
  else {
    if (s === l)
      return a ? NaN : (x ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), s = s - B;
  }
  return (x ? -1 : 1) * a * Math.pow(2, s - n);
}, write = function(t, e, A, n, o, s) {
  var a, c, l, B = s * 8 - o - 1, g = (1 << B) - 1, E = g >> 1, I = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = n ? 0 : s - 1, U = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, a = g) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + E >= 1 ? e += I / l : e += I * Math.pow(2, 1 - E), e * l >= 2 && (a++, l /= 2), a + E >= g ? (c = 0, a = g) : a + E >= 1 ? (c = (e * l - 1) * Math.pow(2, o), a = a + E) : (c = e * Math.pow(2, E - 1) * Math.pow(2, o), a = 0)); o >= 8; t[A + x] = c & 255, x += U, c /= 256, o -= 8)
    ;
  for (a = a << o | c, B += o; B > 0; t[A + x] = a & 255, x += U, a /= 256, B -= 8)
    ;
  t[A + x - U] |= v * 128;
}, ieee754 = {
  read,
  write
}, buffer = createCommonjsModule(function(t, e) {
  var A = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = T, e.INSPECT_MAX_BYTES = 50;
  var n = 2147483647;
  e.kMaxLength = n, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      var d = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(d, u), d.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(d) {
    if (d > n)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    var u = new Uint8Array(d);
    return Object.setPrototypeOf(u, a.prototype), u;
  }
  function a(d, u, f) {
    if (typeof d == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(d);
    }
    return c(d, u, f);
  }
  a.poolSize = 8192;
  function c(d, u, f) {
    if (typeof d == "string")
      return E(d, u);
    if (ArrayBuffer.isView(d))
      return x(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (z(d, ArrayBuffer) || d && z(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (z(d, SharedArrayBuffer) || d && z(d.buffer, SharedArrayBuffer)))
      return U(d, u, f);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var m = d.valueOf && d.valueOf();
    if (m != null && m !== d)
      return a.from(m, u, f);
    var H = v(d);
    if (H)
      return H;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return a.from(
        d[Symbol.toPrimitive]("string"),
        u,
        f
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  a.from = function(d, u, f) {
    return c(d, u, f);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function l(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function B(d, u, f) {
    return l(d), d <= 0 ? s(d) : u !== void 0 ? typeof f == "string" ? s(d).fill(u, f) : s(d).fill(u) : s(d);
  }
  a.alloc = function(d, u, f) {
    return B(d, u, f);
  };
  function g(d) {
    return l(d), s(d < 0 ? 0 : D(d) | 0);
  }
  a.allocUnsafe = function(d) {
    return g(d);
  }, a.allocUnsafeSlow = function(d) {
    return g(d);
  };
  function E(d, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    var f = Z(d, u) | 0, m = s(f), H = m.write(d, u);
    return H !== f && (m = m.slice(0, H)), m;
  }
  function I(d) {
    for (var u = d.length < 0 ? 0 : D(d.length) | 0, f = s(u), m = 0; m < u; m += 1)
      f[m] = d[m] & 255;
    return f;
  }
  function x(d) {
    if (z(d, Uint8Array)) {
      var u = new Uint8Array(d);
      return U(u.buffer, u.byteOffset, u.byteLength);
    }
    return I(d);
  }
  function U(d, u, f) {
    if (u < 0 || d.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var m;
    return u === void 0 && f === void 0 ? m = new Uint8Array(d) : f === void 0 ? m = new Uint8Array(d, u) : m = new Uint8Array(d, u, f), Object.setPrototypeOf(m, a.prototype), m;
  }
  function v(d) {
    if (a.isBuffer(d)) {
      var u = D(d.length) | 0, f = s(u);
      return f.length === 0 || d.copy(f, 0, 0, u), f;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || pe(d.length) ? s(0) : I(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return I(d.data);
  }
  function D(d) {
    if (d >= n)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
    return d | 0;
  }
  function T(d) {
    return +d != d && (d = 0), a.alloc(+d);
  }
  a.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== a.prototype;
  }, a.compare = function(u, f) {
    if (z(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), z(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(u) || !a.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    for (var m = u.length, H = f.length, V = 0, $ = Math.min(m, H); V < $; ++V)
      if (u[V] !== f[V]) {
        m = u[V], H = f[V];
        break;
      }
    return m < H ? -1 : H < m ? 1 : 0;
  }, a.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return a.alloc(0);
    var m;
    if (f === void 0)
      for (f = 0, m = 0; m < u.length; ++m)
        f += u[m].length;
    var H = a.allocUnsafe(f), V = 0;
    for (m = 0; m < u.length; ++m) {
      var $ = u[m];
      if (z($, Uint8Array))
        V + $.length > H.length ? a.from($).copy(H, V) : Uint8Array.prototype.set.call(
          H,
          $,
          V
        );
      else if (a.isBuffer($))
        $.copy(H, V);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      V += $.length;
    }
    return H;
  };
  function Z(d, u) {
    if (a.isBuffer(d))
      return d.length;
    if (ArrayBuffer.isView(d) || z(d, ArrayBuffer))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    var f = d.length, m = arguments.length > 2 && arguments[2] === !0;
    if (!m && f === 0)
      return 0;
    for (var H = !1; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return ue(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return ae(d).length;
        default:
          if (H)
            return m ? -1 : ue(d).length;
          u = ("" + u).toLowerCase(), H = !0;
      }
  }
  a.byteLength = Z;
  function j(d, u, f) {
    var m = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return O(this, u, f);
        case "utf8":
        case "utf-8":
          return M(this, u, f);
        case "ascii":
          return w(this, u, f);
        case "latin1":
        case "binary":
          return k(this, u, f);
        case "base64":
          return N(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, u, f);
        default:
          if (m)
            throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), m = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function L(d, u, f) {
    var m = d[u];
    d[u] = d[f], d[f] = m;
  }
  a.prototype.swap16 = function() {
    var u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var f = 0; f < u; f += 2)
      L(this, f, f + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var f = 0; f < u; f += 4)
      L(this, f, f + 3), L(this, f + 1, f + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var f = 0; f < u; f += 8)
      L(this, f, f + 7), L(this, f + 1, f + 6), L(this, f + 2, f + 5), L(this, f + 3, f + 4);
    return this;
  }, a.prototype.toString = function() {
    var u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? M(this, 0, u) : j.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(u) {
    if (!a.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : a.compare(this, u) === 0;
  }, a.prototype.inspect = function() {
    var u = "", f = e.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, A && (a.prototype[A] = a.prototype.inspect), a.prototype.compare = function(u, f, m, H, V) {
    if (z(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), m === void 0 && (m = u ? u.length : 0), H === void 0 && (H = 0), V === void 0 && (V = this.length), f < 0 || m > u.length || H < 0 || V > this.length)
      throw new RangeError("out of range index");
    if (H >= V && f >= m)
      return 0;
    if (H >= V)
      return -1;
    if (f >= m)
      return 1;
    if (f >>>= 0, m >>>= 0, H >>>= 0, V >>>= 0, this === u)
      return 0;
    for (var $ = V - H, he = m - f, ye = Math.min($, he), me = this.slice(H, V), Ge = u.slice(f, m), xe = 0; xe < ye; ++xe)
      if (me[xe] !== Ge[xe]) {
        $ = me[xe], he = Ge[xe];
        break;
      }
    return $ < he ? -1 : he < $ ? 1 : 0;
  };
  function Y(d, u, f, m, H) {
    if (d.length === 0)
      return -1;
    if (typeof f == "string" ? (m = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, pe(f) && (f = H ? 0 : d.length - 1), f < 0 && (f = d.length + f), f >= d.length) {
      if (H)
        return -1;
      f = d.length - 1;
    } else if (f < 0)
      if (H)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = a.from(u, m)), a.isBuffer(u))
      return u.length === 0 ? -1 : W(d, u, f, m, H);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? H ? Uint8Array.prototype.indexOf.call(d, u, f) : Uint8Array.prototype.lastIndexOf.call(d, u, f) : W(d, [u], f, m, H);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(d, u, f, m, H) {
    var V = 1, $ = d.length, he = u.length;
    if (m !== void 0 && (m = String(m).toLowerCase(), m === "ucs2" || m === "ucs-2" || m === "utf16le" || m === "utf-16le")) {
      if (d.length < 2 || u.length < 2)
        return -1;
      V = 2, $ /= 2, he /= 2, f /= 2;
    }
    function ye(Te, le) {
      return V === 1 ? Te[le] : Te.readUInt16BE(le * V);
    }
    var me;
    if (H) {
      var Ge = -1;
      for (me = f; me < $; me++)
        if (ye(d, me) === ye(u, Ge === -1 ? 0 : me - Ge)) {
          if (Ge === -1 && (Ge = me), me - Ge + 1 === he)
            return Ge * V;
        } else
          Ge !== -1 && (me -= me - Ge), Ge = -1;
    } else
      for (f + he > $ && (f = $ - he), me = f; me >= 0; me--) {
        for (var xe = !0, Ee = 0; Ee < he; Ee++)
          if (ye(d, me + Ee) !== ye(u, Ee)) {
            xe = !1;
            break;
          }
        if (xe)
          return me;
      }
    return -1;
  }
  a.prototype.includes = function(u, f, m) {
    return this.indexOf(u, f, m) !== -1;
  }, a.prototype.indexOf = function(u, f, m) {
    return Y(this, u, f, m, !0);
  }, a.prototype.lastIndexOf = function(u, f, m) {
    return Y(this, u, f, m, !1);
  };
  function h(d, u, f, m) {
    f = Number(f) || 0;
    var H = d.length - f;
    m ? (m = Number(m), m > H && (m = H)) : m = H;
    var V = u.length;
    m > V / 2 && (m = V / 2);
    for (var $ = 0; $ < m; ++$) {
      var he = parseInt(u.substr($ * 2, 2), 16);
      if (pe(he))
        return $;
      d[f + $] = he;
    }
    return $;
  }
  function C(d, u, f, m) {
    return ce(ue(u, d.length - f), d, f, m);
  }
  function y(d, u, f, m) {
    return ce(X(u), d, f, m);
  }
  function R(d, u, f, m) {
    return ce(ae(u), d, f, m);
  }
  function G(d, u, f, m) {
    return ce(ee(u, d.length - f), d, f, m);
  }
  a.prototype.write = function(u, f, m, H) {
    if (f === void 0)
      H = "utf8", m = this.length, f = 0;
    else if (m === void 0 && typeof f == "string")
      H = f, m = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(m) ? (m = m >>> 0, H === void 0 && (H = "utf8")) : (H = m, m = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var V = this.length - f;
    if ((m === void 0 || m > V) && (m = V), u.length > 0 && (m < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    H || (H = "utf8");
    for (var $ = !1; ; )
      switch (H) {
        case "hex":
          return h(this, u, f, m);
        case "utf8":
        case "utf-8":
          return C(this, u, f, m);
        case "ascii":
        case "latin1":
        case "binary":
          return y(this, u, f, m);
        case "base64":
          return R(this, u, f, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return G(this, u, f, m);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + H);
          H = ("" + H).toLowerCase(), $ = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function N(d, u, f) {
    return u === 0 && f === d.length ? base64Js.fromByteArray(d) : base64Js.fromByteArray(d.slice(u, f));
  }
  function M(d, u, f) {
    f = Math.min(d.length, f);
    for (var m = [], H = u; H < f; ) {
      var V = d[H], $ = null, he = V > 239 ? 4 : V > 223 ? 3 : V > 191 ? 2 : 1;
      if (H + he <= f) {
        var ye, me, Ge, xe;
        switch (he) {
          case 1:
            V < 128 && ($ = V);
            break;
          case 2:
            ye = d[H + 1], (ye & 192) === 128 && (xe = (V & 31) << 6 | ye & 63, xe > 127 && ($ = xe));
            break;
          case 3:
            ye = d[H + 1], me = d[H + 2], (ye & 192) === 128 && (me & 192) === 128 && (xe = (V & 15) << 12 | (ye & 63) << 6 | me & 63, xe > 2047 && (xe < 55296 || xe > 57343) && ($ = xe));
            break;
          case 4:
            ye = d[H + 1], me = d[H + 2], Ge = d[H + 3], (ye & 192) === 128 && (me & 192) === 128 && (Ge & 192) === 128 && (xe = (V & 15) << 18 | (ye & 63) << 12 | (me & 63) << 6 | Ge & 63, xe > 65535 && xe < 1114112 && ($ = xe));
        }
      }
      $ === null ? ($ = 65533, he = 1) : $ > 65535 && ($ -= 65536, m.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), m.push($), H += he;
    }
    return p(m);
  }
  var S = 4096;
  function p(d) {
    var u = d.length;
    if (u <= S)
      return String.fromCharCode.apply(String, d);
    for (var f = "", m = 0; m < u; )
      f += String.fromCharCode.apply(
        String,
        d.slice(m, m += S)
      );
    return f;
  }
  function w(d, u, f) {
    var m = "";
    f = Math.min(d.length, f);
    for (var H = u; H < f; ++H)
      m += String.fromCharCode(d[H] & 127);
    return m;
  }
  function k(d, u, f) {
    var m = "";
    f = Math.min(d.length, f);
    for (var H = u; H < f; ++H)
      m += String.fromCharCode(d[H]);
    return m;
  }
  function O(d, u, f) {
    var m = d.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > m) && (f = m);
    for (var H = "", V = u; V < f; ++V)
      H += re[d[V]];
    return H;
  }
  function te(d, u, f) {
    for (var m = d.slice(u, f), H = "", V = 0; V < m.length - 1; V += 2)
      H += String.fromCharCode(m[V] + m[V + 1] * 256);
    return H;
  }
  a.prototype.slice = function(u, f) {
    var m = this.length;
    u = ~~u, f = f === void 0 ? m : ~~f, u < 0 ? (u += m, u < 0 && (u = 0)) : u > m && (u = m), f < 0 ? (f += m, f < 0 && (f = 0)) : f > m && (f = m), f < u && (f = u);
    var H = this.subarray(u, f);
    return Object.setPrototypeOf(H, a.prototype), H;
  };
  function q(d, u, f) {
    if (d % 1 !== 0 || d < 0)
      throw new RangeError("offset is not uint");
    if (d + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(u, f, m) {
    u = u >>> 0, f = f >>> 0, m || q(u, f, this.length);
    for (var H = this[u], V = 1, $ = 0; ++$ < f && (V *= 256); )
      H += this[u + $] * V;
    return H;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(u, f, m) {
    u = u >>> 0, f = f >>> 0, m || q(u, f, this.length);
    for (var H = this[u + --f], V = 1; f > 0 && (V *= 256); )
      H += this[u + --f] * V;
    return H;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || q(u, 1, this.length), this[u];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || q(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || q(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, a.prototype.readIntLE = function(u, f, m) {
    u = u >>> 0, f = f >>> 0, m || q(u, f, this.length);
    for (var H = this[u], V = 1, $ = 0; ++$ < f && (V *= 256); )
      H += this[u + $] * V;
    return V *= 128, H >= V && (H -= Math.pow(2, 8 * f)), H;
  }, a.prototype.readIntBE = function(u, f, m) {
    u = u >>> 0, f = f >>> 0, m || q(u, f, this.length);
    for (var H = f, V = 1, $ = this[u + --H]; H > 0 && (V *= 256); )
      $ += this[u + --H] * V;
    return V *= 128, $ >= V && ($ -= Math.pow(2, 8 * f)), $;
  }, a.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || q(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, a.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || q(u, 2, this.length);
    var m = this[u] | this[u + 1] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, a.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || q(u, 2, this.length);
    var m = this[u + 1] | this[u] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, a.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, a.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, a.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), ieee754.read(this, u, !0, 23, 4);
  }, a.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || q(u, 4, this.length), ieee754.read(this, u, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || q(u, 8, this.length), ieee754.read(this, u, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || q(u, 8, this.length), ieee754.read(this, u, !1, 52, 8);
  };
  function P(d, u, f, m, H, V) {
    if (!a.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > H || u < V)
      throw new RangeError('"value" argument is out of bounds');
    if (f + m > d.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(u, f, m, H) {
    if (u = +u, f = f >>> 0, m = m >>> 0, !H) {
      var V = Math.pow(2, 8 * m) - 1;
      P(this, u, f, m, V, 0);
    }
    var $ = 1, he = 0;
    for (this[f] = u & 255; ++he < m && ($ *= 256); )
      this[f + he] = u / $ & 255;
    return f + m;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(u, f, m, H) {
    if (u = +u, f = f >>> 0, m = m >>> 0, !H) {
      var V = Math.pow(2, 8 * m) - 1;
      P(this, u, f, m, V, 0);
    }
    var $ = m - 1, he = 1;
    for (this[f + $] = u & 255; --$ >= 0 && (he *= 256); )
      this[f + $] = u / he & 255;
    return f + m;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, a.prototype.writeIntLE = function(u, f, m, H) {
    if (u = +u, f = f >>> 0, !H) {
      var V = Math.pow(2, 8 * m - 1);
      P(this, u, f, m, V - 1, -V);
    }
    var $ = 0, he = 1, ye = 0;
    for (this[f] = u & 255; ++$ < m && (he *= 256); )
      u < 0 && ye === 0 && this[f + $ - 1] !== 0 && (ye = 1), this[f + $] = (u / he >> 0) - ye & 255;
    return f + m;
  }, a.prototype.writeIntBE = function(u, f, m, H) {
    if (u = +u, f = f >>> 0, !H) {
      var V = Math.pow(2, 8 * m - 1);
      P(this, u, f, m, V - 1, -V);
    }
    var $ = m - 1, he = 1, ye = 0;
    for (this[f + $] = u & 255; --$ >= 0 && (he *= 256); )
      u < 0 && ye === 0 && this[f + $ + 1] !== 0 && (ye = 1), this[f + $] = (u / he >> 0) - ye & 255;
    return f + m;
  }, a.prototype.writeInt8 = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, a.prototype.writeInt16LE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, a.prototype.writeInt16BE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, a.prototype.writeInt32LE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, a.prototype.writeInt32BE = function(u, f, m) {
    return u = +u, f = f >>> 0, m || P(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function ie(d, u, f, m, H, V) {
    if (f + m > d.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function se(d, u, f, m, H) {
    return u = +u, f = f >>> 0, H || ie(d, u, f, 4), ieee754.write(d, u, f, m, 23, 4), f + 4;
  }
  a.prototype.writeFloatLE = function(u, f, m) {
    return se(this, u, f, !0, m);
  }, a.prototype.writeFloatBE = function(u, f, m) {
    return se(this, u, f, !1, m);
  };
  function Q(d, u, f, m, H) {
    return u = +u, f = f >>> 0, H || ie(d, u, f, 8), ieee754.write(d, u, f, m, 52, 8), f + 8;
  }
  a.prototype.writeDoubleLE = function(u, f, m) {
    return Q(this, u, f, !0, m);
  }, a.prototype.writeDoubleBE = function(u, f, m) {
    return Q(this, u, f, !1, m);
  }, a.prototype.copy = function(u, f, m, H) {
    if (!a.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (m || (m = 0), !H && H !== 0 && (H = this.length), f >= u.length && (f = u.length), f || (f = 0), H > 0 && H < m && (H = m), H === m || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (m < 0 || m >= this.length)
      throw new RangeError("Index out of range");
    if (H < 0)
      throw new RangeError("sourceEnd out of bounds");
    H > this.length && (H = this.length), u.length - f < H - m && (H = u.length - f + m);
    var V = H - m;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, m, H) : Uint8Array.prototype.set.call(
      u,
      this.subarray(m, H),
      f
    ), V;
  }, a.prototype.fill = function(u, f, m, H) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (H = f, f = 0, m = this.length) : typeof m == "string" && (H = m, m = this.length), H !== void 0 && typeof H != "string")
        throw new TypeError("encoding must be a string");
      if (typeof H == "string" && !a.isEncoding(H))
        throw new TypeError("Unknown encoding: " + H);
      if (u.length === 1) {
        var V = u.charCodeAt(0);
        (H === "utf8" && V < 128 || H === "latin1") && (u = V);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < m)
      throw new RangeError("Out of range index");
    if (m <= f)
      return this;
    f = f >>> 0, m = m === void 0 ? this.length : m >>> 0, u || (u = 0);
    var $;
    if (typeof u == "number")
      for ($ = f; $ < m; ++$)
        this[$] = u;
    else {
      var he = a.isBuffer(u) ? u : a.from(u, H), ye = he.length;
      if (ye === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for ($ = 0; $ < m - f; ++$)
        this[$ + f] = he[$ % ye];
    }
    return this;
  };
  var Ae = /[^+/0-9A-Za-z-_]/g;
  function oe(d) {
    if (d = d.split("=")[0], d = d.trim().replace(Ae, ""), d.length < 2)
      return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function ue(d, u) {
    u = u || 1 / 0;
    for (var f, m = d.length, H = null, V = [], $ = 0; $ < m; ++$) {
      if (f = d.charCodeAt($), f > 55295 && f < 57344) {
        if (!H) {
          if (f > 56319) {
            (u -= 3) > -1 && V.push(239, 191, 189);
            continue;
          } else if ($ + 1 === m) {
            (u -= 3) > -1 && V.push(239, 191, 189);
            continue;
          }
          H = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && V.push(239, 191, 189), H = f;
          continue;
        }
        f = (H - 55296 << 10 | f - 56320) + 65536;
      } else
        H && (u -= 3) > -1 && V.push(239, 191, 189);
      if (H = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        V.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        V.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        V.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        V.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return V;
  }
  function X(d) {
    for (var u = [], f = 0; f < d.length; ++f)
      u.push(d.charCodeAt(f) & 255);
    return u;
  }
  function ee(d, u) {
    for (var f, m, H, V = [], $ = 0; $ < d.length && !((u -= 2) < 0); ++$)
      f = d.charCodeAt($), m = f >> 8, H = f % 256, V.push(H), V.push(m);
    return V;
  }
  function ae(d) {
    return base64Js.toByteArray(oe(d));
  }
  function ce(d, u, f, m) {
    for (var H = 0; H < m && !(H + f >= u.length || H >= d.length); ++H)
      u[H + f] = d[H];
    return H;
  }
  function z(d, u) {
    return d instanceof u || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === u.name;
  }
  function pe(d) {
    return d !== d;
  }
  var re = function() {
    for (var d = "0123456789abcdef", u = new Array(256), f = 0; f < 16; ++f)
      for (var m = f * 16, H = 0; H < 16; ++H)
        u[m + H] = d[f] + d[H];
    return u;
  }();
}), global$1 = typeof global$1 < "u" ? global$1 : typeof self < "u" ? self : typeof window < "u" ? window : {}, lookup$1 = [], revLookup$1 = [], Arr$1 = typeof Uint8Array < "u" ? Uint8Array : Array, inited = !1;
function init() {
  inited = !0;
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, A = t.length; e < A; ++e)
    lookup$1[e] = t[e], revLookup$1[t.charCodeAt(e)] = e;
  revLookup$1["-".charCodeAt(0)] = 62, revLookup$1["_".charCodeAt(0)] = 63;
}
function toByteArray$1(t) {
  inited || init();
  var e, A, n, o, s, a, c = t.length;
  if (c % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  s = t[c - 2] === "=" ? 2 : t[c - 1] === "=" ? 1 : 0, a = new Arr$1(c * 3 / 4 - s), n = s > 0 ? c - 4 : c;
  var l = 0;
  for (e = 0, A = 0; e < n; e += 4, A += 3)
    o = revLookup$1[t.charCodeAt(e)] << 18 | revLookup$1[t.charCodeAt(e + 1)] << 12 | revLookup$1[t.charCodeAt(e + 2)] << 6 | revLookup$1[t.charCodeAt(e + 3)], a[l++] = o >> 16 & 255, a[l++] = o >> 8 & 255, a[l++] = o & 255;
  return s === 2 ? (o = revLookup$1[t.charCodeAt(e)] << 2 | revLookup$1[t.charCodeAt(e + 1)] >> 4, a[l++] = o & 255) : s === 1 && (o = revLookup$1[t.charCodeAt(e)] << 10 | revLookup$1[t.charCodeAt(e + 1)] << 4 | revLookup$1[t.charCodeAt(e + 2)] >> 2, a[l++] = o >> 8 & 255, a[l++] = o & 255), a;
}
function tripletToBase64$1(t) {
  return lookup$1[t >> 18 & 63] + lookup$1[t >> 12 & 63] + lookup$1[t >> 6 & 63] + lookup$1[t & 63];
}
function encodeChunk$1(t, e, A) {
  for (var n, o = [], s = e; s < A; s += 3)
    n = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], o.push(tripletToBase64$1(n));
  return o.join("");
}
function fromByteArray$1(t) {
  inited || init();
  for (var e, A = t.length, n = A % 3, o = "", s = [], a = 16383, c = 0, l = A - n; c < l; c += a)
    s.push(encodeChunk$1(t, c, c + a > l ? l : c + a));
  return n === 1 ? (e = t[A - 1], o += lookup$1[e >> 2], o += lookup$1[e << 4 & 63], o += "==") : n === 2 && (e = (t[A - 2] << 8) + t[A - 1], o += lookup$1[e >> 10], o += lookup$1[e >> 4 & 63], o += lookup$1[e << 2 & 63], o += "="), s.push(o), s.join("");
}
function read$1(t, e, A, n, o) {
  var s, a, c = o * 8 - n - 1, l = (1 << c) - 1, B = l >> 1, g = -7, E = A ? o - 1 : 0, I = A ? -1 : 1, x = t[e + E];
  for (E += I, s = x & (1 << -g) - 1, x >>= -g, g += c; g > 0; s = s * 256 + t[e + E], E += I, g -= 8)
    ;
  for (a = s & (1 << -g) - 1, s >>= -g, g += n; g > 0; a = a * 256 + t[e + E], E += I, g -= 8)
    ;
  if (s === 0)
    s = 1 - B;
  else {
    if (s === l)
      return a ? NaN : (x ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), s = s - B;
  }
  return (x ? -1 : 1) * a * Math.pow(2, s - n);
}
function write$1(t, e, A, n, o, s) {
  var a, c, l, B = s * 8 - o - 1, g = (1 << B) - 1, E = g >> 1, I = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = n ? 0 : s - 1, U = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, a = g) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + E >= 1 ? e += I / l : e += I * Math.pow(2, 1 - E), e * l >= 2 && (a++, l /= 2), a + E >= g ? (c = 0, a = g) : a + E >= 1 ? (c = (e * l - 1) * Math.pow(2, o), a = a + E) : (c = e * Math.pow(2, E - 1) * Math.pow(2, o), a = 0)); o >= 8; t[A + x] = c & 255, x += U, c /= 256, o -= 8)
    ;
  for (a = a << o | c, B += o; B > 0; t[A + x] = a & 255, x += U, a /= 256, B -= 8)
    ;
  t[A + x - U] |= v * 128;
}
var toString = {}.toString, isArray = Array.isArray || function(t) {
  return toString.call(t) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var INSPECT_MAX_BYTES = 50;
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== void 0 ? global$1.TYPED_ARRAY_SUPPORT : !0;
var _kMaxLength = kMaxLength();
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(t, e) {
  if (kMaxLength() < e)
    throw new RangeError("Invalid typed array length");
  return Buffer.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = Buffer.prototype) : (t === null && (t = new Buffer(e)), t.length = e), t;
}
function Buffer(t, e, A) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer))
    return new Buffer(t, e, A);
  if (typeof t == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return allocUnsafe(this, t);
  }
  return from(this, t, e, A);
}
Buffer.poolSize = 8192;
Buffer._augment = function(t) {
  return t.__proto__ = Buffer.prototype, t;
};
function from(t, e, A, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? fromArrayBuffer(t, e, A, n) : typeof e == "string" ? fromString(t, e, A) : fromObject(t, e);
}
Buffer.from = function(t, e, A) {
  return from(null, t, e, A);
};
Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array);
function assertSize(t) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
}
function alloc(t, e, A, n) {
  return assertSize(e), e <= 0 ? createBuffer(t, e) : A !== void 0 ? typeof n == "string" ? createBuffer(t, e).fill(A, n) : createBuffer(t, e).fill(A) : createBuffer(t, e);
}
Buffer.alloc = function(t, e, A) {
  return alloc(null, t, e, A);
};
function allocUnsafe(t, e) {
  if (assertSize(e), t = createBuffer(t, e < 0 ? 0 : checked(e) | 0), !Buffer.TYPED_ARRAY_SUPPORT)
    for (var A = 0; A < e; ++A)
      t[A] = 0;
  return t;
}
Buffer.allocUnsafe = function(t) {
  return allocUnsafe(null, t);
};
Buffer.allocUnsafeSlow = function(t) {
  return allocUnsafe(null, t);
};
function fromString(t, e, A) {
  if ((typeof A != "string" || A === "") && (A = "utf8"), !Buffer.isEncoding(A))
    throw new TypeError('"encoding" must be a valid string encoding');
  var n = byteLength$1(e, A) | 0;
  t = createBuffer(t, n);
  var o = t.write(e, A);
  return o !== n && (t = t.slice(0, o)), t;
}
function fromArrayLike(t, e) {
  var A = e.length < 0 ? 0 : checked(e.length) | 0;
  t = createBuffer(t, A);
  for (var n = 0; n < A; n += 1)
    t[n] = e[n] & 255;
  return t;
}
function fromArrayBuffer(t, e, A, n) {
  if (e.byteLength, A < 0 || e.byteLength < A)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < A + (n || 0))
    throw new RangeError("'length' is out of bounds");
  return A === void 0 && n === void 0 ? e = new Uint8Array(e) : n === void 0 ? e = new Uint8Array(e, A) : e = new Uint8Array(e, A, n), Buffer.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = Buffer.prototype) : t = fromArrayLike(t, e), t;
}
function fromObject(t, e) {
  if (internalIsBuffer(e)) {
    var A = checked(e.length) | 0;
    return t = createBuffer(t, A), t.length === 0 || e.copy(t, 0, 0, A), t;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || isnan(e.length) ? createBuffer(t, 0) : fromArrayLike(t, e);
    if (e.type === "Buffer" && isArray(e.data))
      return fromArrayLike(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(t) {
  if (t >= kMaxLength())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  return t | 0;
}
function SlowBuffer(t) {
  return +t != t && (t = 0), Buffer.alloc(+t);
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(t) {
  return !!(t != null && t._isBuffer);
}
Buffer.compare = function(e, A) {
  if (!internalIsBuffer(e) || !internalIsBuffer(A))
    throw new TypeError("Arguments must be Buffers");
  if (e === A)
    return 0;
  for (var n = e.length, o = A.length, s = 0, a = Math.min(n, o); s < a; ++s)
    if (e[s] !== A[s]) {
      n = e[s], o = A[s];
      break;
    }
  return n < o ? -1 : o < n ? 1 : 0;
};
Buffer.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
Buffer.concat = function(e, A) {
  if (!isArray(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return Buffer.alloc(0);
  var n;
  if (A === void 0)
    for (A = 0, n = 0; n < e.length; ++n)
      A += e[n].length;
  var o = Buffer.allocUnsafe(A), s = 0;
  for (n = 0; n < e.length; ++n) {
    var a = e[n];
    if (!internalIsBuffer(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    a.copy(o, s), s += a.length;
  }
  return o;
};
function byteLength$1(t, e) {
  if (internalIsBuffer(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var A = t.length;
  if (A === 0)
    return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return A;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return A * 2;
      case "hex":
        return A >>> 1;
      case "base64":
        return base64ToBytes(t).length;
      default:
        if (n)
          return utf8ToBytes(t).length;
        e = ("" + e).toLowerCase(), n = !0;
    }
}
Buffer.byteLength = byteLength$1;
function slowToString(t, e, A) {
  var n = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((A === void 0 || A > this.length) && (A = this.length), A <= 0) || (A >>>= 0, e >>>= 0, A <= e))
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return hexSlice(this, e, A);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, e, A);
      case "ascii":
        return asciiSlice(this, e, A);
      case "latin1":
      case "binary":
        return latin1Slice(this, e, A);
      case "base64":
        return base64Slice(this, e, A);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, e, A);
      default:
        if (n)
          throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), n = !0;
    }
}
Buffer.prototype._isBuffer = !0;
function swap(t, e, A) {
  var n = t[e];
  t[e] = t[A], t[A] = n;
}
Buffer.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var A = 0; A < e; A += 2)
    swap(this, A, A + 1);
  return this;
};
Buffer.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var A = 0; A < e; A += 4)
    swap(this, A, A + 3), swap(this, A + 1, A + 2);
  return this;
};
Buffer.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var A = 0; A < e; A += 8)
    swap(this, A, A + 7), swap(this, A + 1, A + 6), swap(this, A + 2, A + 5), swap(this, A + 3, A + 4);
  return this;
};
Buffer.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments);
};
Buffer.prototype.equals = function(e) {
  if (!internalIsBuffer(e))
    throw new TypeError("Argument must be a Buffer");
  return this === e ? !0 : Buffer.compare(this, e) === 0;
};
Buffer.prototype.inspect = function() {
  var e = "", A = INSPECT_MAX_BYTES;
  return this.length > 0 && (e = this.toString("hex", 0, A).match(/.{2}/g).join(" "), this.length > A && (e += " ... ")), "<Buffer " + e + ">";
};
Buffer.prototype.compare = function(e, A, n, o, s) {
  if (!internalIsBuffer(e))
    throw new TypeError("Argument must be a Buffer");
  if (A === void 0 && (A = 0), n === void 0 && (n = e ? e.length : 0), o === void 0 && (o = 0), s === void 0 && (s = this.length), A < 0 || n > e.length || o < 0 || s > this.length)
    throw new RangeError("out of range index");
  if (o >= s && A >= n)
    return 0;
  if (o >= s)
    return -1;
  if (A >= n)
    return 1;
  if (A >>>= 0, n >>>= 0, o >>>= 0, s >>>= 0, this === e)
    return 0;
  for (var a = s - o, c = n - A, l = Math.min(a, c), B = this.slice(o, s), g = e.slice(A, n), E = 0; E < l; ++E)
    if (B[E] !== g[E]) {
      a = B[E], c = g[E];
      break;
    }
  return a < c ? -1 : c < a ? 1 : 0;
};
function bidirectionalIndexOf(t, e, A, n, o) {
  if (t.length === 0)
    return -1;
  if (typeof A == "string" ? (n = A, A = 0) : A > 2147483647 ? A = 2147483647 : A < -2147483648 && (A = -2147483648), A = +A, isNaN(A) && (A = o ? 0 : t.length - 1), A < 0 && (A = t.length + A), A >= t.length) {
    if (o)
      return -1;
    A = t.length - 1;
  } else if (A < 0)
    if (o)
      A = 0;
    else
      return -1;
  if (typeof e == "string" && (e = Buffer.from(e, n)), internalIsBuffer(e))
    return e.length === 0 ? -1 : arrayIndexOf(t, e, A, n, o);
  if (typeof e == "number")
    return e = e & 255, Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(t, e, A) : Uint8Array.prototype.lastIndexOf.call(t, e, A) : arrayIndexOf(t, [e], A, n, o);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(t, e, A, n, o) {
  var s = 1, a = t.length, c = e.length;
  if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (t.length < 2 || e.length < 2)
      return -1;
    s = 2, a /= 2, c /= 2, A /= 2;
  }
  function l(x, U) {
    return s === 1 ? x[U] : x.readUInt16BE(U * s);
  }
  var B;
  if (o) {
    var g = -1;
    for (B = A; B < a; B++)
      if (l(t, B) === l(e, g === -1 ? 0 : B - g)) {
        if (g === -1 && (g = B), B - g + 1 === c)
          return g * s;
      } else
        g !== -1 && (B -= B - g), g = -1;
  } else
    for (A + c > a && (A = a - c), B = A; B >= 0; B--) {
      for (var E = !0, I = 0; I < c; I++)
        if (l(t, B + I) !== l(e, I)) {
          E = !1;
          break;
        }
      if (E)
        return B;
    }
  return -1;
}
Buffer.prototype.includes = function(e, A, n) {
  return this.indexOf(e, A, n) !== -1;
};
Buffer.prototype.indexOf = function(e, A, n) {
  return bidirectionalIndexOf(this, e, A, n, !0);
};
Buffer.prototype.lastIndexOf = function(e, A, n) {
  return bidirectionalIndexOf(this, e, A, n, !1);
};
function hexWrite(t, e, A, n) {
  A = Number(A) || 0;
  var o = t.length - A;
  n ? (n = Number(n), n > o && (n = o)) : n = o;
  var s = e.length;
  if (s % 2 !== 0)
    throw new TypeError("Invalid hex string");
  n > s / 2 && (n = s / 2);
  for (var a = 0; a < n; ++a) {
    var c = parseInt(e.substr(a * 2, 2), 16);
    if (isNaN(c))
      return a;
    t[A + a] = c;
  }
  return a;
}
function utf8Write(t, e, A, n) {
  return blitBuffer(utf8ToBytes(e, t.length - A), t, A, n);
}
function asciiWrite(t, e, A, n) {
  return blitBuffer(asciiToBytes(e), t, A, n);
}
function latin1Write(t, e, A, n) {
  return asciiWrite(t, e, A, n);
}
function base64Write(t, e, A, n) {
  return blitBuffer(base64ToBytes(e), t, A, n);
}
function ucs2Write(t, e, A, n) {
  return blitBuffer(utf16leToBytes(e, t.length - A), t, A, n);
}
Buffer.prototype.write = function(e, A, n, o) {
  if (A === void 0)
    o = "utf8", n = this.length, A = 0;
  else if (n === void 0 && typeof A == "string")
    o = A, n = this.length, A = 0;
  else if (isFinite(A))
    A = A | 0, isFinite(n) ? (n = n | 0, o === void 0 && (o = "utf8")) : (o = n, n = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var s = this.length - A;
  if ((n === void 0 || n > s) && (n = s), e.length > 0 && (n < 0 || A < 0) || A > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  o || (o = "utf8");
  for (var a = !1; ; )
    switch (o) {
      case "hex":
        return hexWrite(this, e, A, n);
      case "utf8":
      case "utf-8":
        return utf8Write(this, e, A, n);
      case "ascii":
        return asciiWrite(this, e, A, n);
      case "latin1":
      case "binary":
        return latin1Write(this, e, A, n);
      case "base64":
        return base64Write(this, e, A, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, e, A, n);
      default:
        if (a)
          throw new TypeError("Unknown encoding: " + o);
        o = ("" + o).toLowerCase(), a = !0;
    }
};
Buffer.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(t, e, A) {
  return e === 0 && A === t.length ? fromByteArray$1(t) : fromByteArray$1(t.slice(e, A));
}
function utf8Slice(t, e, A) {
  A = Math.min(t.length, A);
  for (var n = [], o = e; o < A; ) {
    var s = t[o], a = null, c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
    if (o + c <= A) {
      var l, B, g, E;
      switch (c) {
        case 1:
          s < 128 && (a = s);
          break;
        case 2:
          l = t[o + 1], (l & 192) === 128 && (E = (s & 31) << 6 | l & 63, E > 127 && (a = E));
          break;
        case 3:
          l = t[o + 1], B = t[o + 2], (l & 192) === 128 && (B & 192) === 128 && (E = (s & 15) << 12 | (l & 63) << 6 | B & 63, E > 2047 && (E < 55296 || E > 57343) && (a = E));
          break;
        case 4:
          l = t[o + 1], B = t[o + 2], g = t[o + 3], (l & 192) === 128 && (B & 192) === 128 && (g & 192) === 128 && (E = (s & 15) << 18 | (l & 63) << 12 | (B & 63) << 6 | g & 63, E > 65535 && E < 1114112 && (a = E));
      }
    }
    a === null ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), n.push(a), o += c;
  }
  return decodeCodePointsArray(n);
}
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(t) {
  var e = t.length;
  if (e <= MAX_ARGUMENTS_LENGTH)
    return String.fromCharCode.apply(String, t);
  for (var A = "", n = 0; n < e; )
    A += String.fromCharCode.apply(
      String,
      t.slice(n, n += MAX_ARGUMENTS_LENGTH)
    );
  return A;
}
function asciiSlice(t, e, A) {
  var n = "";
  A = Math.min(t.length, A);
  for (var o = e; o < A; ++o)
    n += String.fromCharCode(t[o] & 127);
  return n;
}
function latin1Slice(t, e, A) {
  var n = "";
  A = Math.min(t.length, A);
  for (var o = e; o < A; ++o)
    n += String.fromCharCode(t[o]);
  return n;
}
function hexSlice(t, e, A) {
  var n = t.length;
  (!e || e < 0) && (e = 0), (!A || A < 0 || A > n) && (A = n);
  for (var o = "", s = e; s < A; ++s)
    o += toHex(t[s]);
  return o;
}
function utf16leSlice(t, e, A) {
  for (var n = t.slice(e, A), o = "", s = 0; s < n.length; s += 2)
    o += String.fromCharCode(n[s] + n[s + 1] * 256);
  return o;
}
Buffer.prototype.slice = function(e, A) {
  var n = this.length;
  e = ~~e, A = A === void 0 ? n : ~~A, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), A < 0 ? (A += n, A < 0 && (A = 0)) : A > n && (A = n), A < e && (A = e);
  var o;
  if (Buffer.TYPED_ARRAY_SUPPORT)
    o = this.subarray(e, A), o.__proto__ = Buffer.prototype;
  else {
    var s = A - e;
    o = new Buffer(s, void 0);
    for (var a = 0; a < s; ++a)
      o[a] = this[a + e];
  }
  return o;
};
function checkOffset(t, e, A) {
  if (t % 1 !== 0 || t < 0)
    throw new RangeError("offset is not uint");
  if (t + e > A)
    throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUIntLE = function(e, A, n) {
  e = e | 0, A = A | 0, n || checkOffset(e, A, this.length);
  for (var o = this[e], s = 1, a = 0; ++a < A && (s *= 256); )
    o += this[e + a] * s;
  return o;
};
Buffer.prototype.readUIntBE = function(e, A, n) {
  e = e | 0, A = A | 0, n || checkOffset(e, A, this.length);
  for (var o = this[e + --A], s = 1; A > 0 && (s *= 256); )
    o += this[e + --A] * s;
  return o;
};
Buffer.prototype.readUInt8 = function(e, A) {
  return A || checkOffset(e, 1, this.length), this[e];
};
Buffer.prototype.readUInt16LE = function(e, A) {
  return A || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8;
};
Buffer.prototype.readUInt16BE = function(e, A) {
  return A || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1];
};
Buffer.prototype.readUInt32LE = function(e, A) {
  return A || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function(e, A) {
  return A || checkOffset(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
Buffer.prototype.readIntLE = function(e, A, n) {
  e = e | 0, A = A | 0, n || checkOffset(e, A, this.length);
  for (var o = this[e], s = 1, a = 0; ++a < A && (s *= 256); )
    o += this[e + a] * s;
  return s *= 128, o >= s && (o -= Math.pow(2, 8 * A)), o;
};
Buffer.prototype.readIntBE = function(e, A, n) {
  e = e | 0, A = A | 0, n || checkOffset(e, A, this.length);
  for (var o = A, s = 1, a = this[e + --o]; o > 0 && (s *= 256); )
    a += this[e + --o] * s;
  return s *= 128, a >= s && (a -= Math.pow(2, 8 * A)), a;
};
Buffer.prototype.readInt8 = function(e, A) {
  return A || checkOffset(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
Buffer.prototype.readInt16LE = function(e, A) {
  A || checkOffset(e, 2, this.length);
  var n = this[e] | this[e + 1] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
Buffer.prototype.readInt16BE = function(e, A) {
  A || checkOffset(e, 2, this.length);
  var n = this[e + 1] | this[e] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
Buffer.prototype.readInt32LE = function(e, A) {
  return A || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
Buffer.prototype.readInt32BE = function(e, A) {
  return A || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
Buffer.prototype.readFloatLE = function(e, A) {
  return A || checkOffset(e, 4, this.length), read$1(this, e, !0, 23, 4);
};
Buffer.prototype.readFloatBE = function(e, A) {
  return A || checkOffset(e, 4, this.length), read$1(this, e, !1, 23, 4);
};
Buffer.prototype.readDoubleLE = function(e, A) {
  return A || checkOffset(e, 8, this.length), read$1(this, e, !0, 52, 8);
};
Buffer.prototype.readDoubleBE = function(e, A) {
  return A || checkOffset(e, 8, this.length), read$1(this, e, !1, 52, 8);
};
function checkInt(t, e, A, n, o, s) {
  if (!internalIsBuffer(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > o || e < s)
    throw new RangeError('"value" argument is out of bounds');
  if (A + n > t.length)
    throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE = function(e, A, n, o) {
  if (e = +e, A = A | 0, n = n | 0, !o) {
    var s = Math.pow(2, 8 * n) - 1;
    checkInt(this, e, A, n, s, 0);
  }
  var a = 1, c = 0;
  for (this[A] = e & 255; ++c < n && (a *= 256); )
    this[A + c] = e / a & 255;
  return A + n;
};
Buffer.prototype.writeUIntBE = function(e, A, n, o) {
  if (e = +e, A = A | 0, n = n | 0, !o) {
    var s = Math.pow(2, 8 * n) - 1;
    checkInt(this, e, A, n, s, 0);
  }
  var a = n - 1, c = 1;
  for (this[A + a] = e & 255; --a >= 0 && (c *= 256); )
    this[A + a] = e / c & 255;
  return A + n;
};
Buffer.prototype.writeUInt8 = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[A] = e & 255, A + 1;
};
function objectWriteUInt16(t, e, A, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var o = 0, s = Math.min(t.length - A, 2); o < s; ++o)
    t[A + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> (n ? o : 1 - o) * 8;
}
Buffer.prototype.writeUInt16LE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e & 255, this[A + 1] = e >>> 8) : objectWriteUInt16(this, e, A, !0), A + 2;
};
Buffer.prototype.writeUInt16BE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e >>> 8, this[A + 1] = e & 255) : objectWriteUInt16(this, e, A, !1), A + 2;
};
function objectWriteUInt32(t, e, A, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var o = 0, s = Math.min(t.length - A, 4); o < s; ++o)
    t[A + o] = e >>> (n ? o : 3 - o) * 8 & 255;
}
Buffer.prototype.writeUInt32LE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[A + 3] = e >>> 24, this[A + 2] = e >>> 16, this[A + 1] = e >>> 8, this[A] = e & 255) : objectWriteUInt32(this, e, A, !0), A + 4;
};
Buffer.prototype.writeUInt32BE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e >>> 24, this[A + 1] = e >>> 16, this[A + 2] = e >>> 8, this[A + 3] = e & 255) : objectWriteUInt32(this, e, A, !1), A + 4;
};
Buffer.prototype.writeIntLE = function(e, A, n, o) {
  if (e = +e, A = A | 0, !o) {
    var s = Math.pow(2, 8 * n - 1);
    checkInt(this, e, A, n, s - 1, -s);
  }
  var a = 0, c = 1, l = 0;
  for (this[A] = e & 255; ++a < n && (c *= 256); )
    e < 0 && l === 0 && this[A + a - 1] !== 0 && (l = 1), this[A + a] = (e / c >> 0) - l & 255;
  return A + n;
};
Buffer.prototype.writeIntBE = function(e, A, n, o) {
  if (e = +e, A = A | 0, !o) {
    var s = Math.pow(2, 8 * n - 1);
    checkInt(this, e, A, n, s - 1, -s);
  }
  var a = n - 1, c = 1, l = 0;
  for (this[A + a] = e & 255; --a >= 0 && (c *= 256); )
    e < 0 && l === 0 && this[A + a + 1] !== 0 && (l = 1), this[A + a] = (e / c >> 0) - l & 255;
  return A + n;
};
Buffer.prototype.writeInt8 = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[A] = e & 255, A + 1;
};
Buffer.prototype.writeInt16LE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e & 255, this[A + 1] = e >>> 8) : objectWriteUInt16(this, e, A, !0), A + 2;
};
Buffer.prototype.writeInt16BE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e >>> 8, this[A + 1] = e & 255) : objectWriteUInt16(this, e, A, !1), A + 2;
};
Buffer.prototype.writeInt32LE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e & 255, this[A + 1] = e >>> 8, this[A + 2] = e >>> 16, this[A + 3] = e >>> 24) : objectWriteUInt32(this, e, A, !0), A + 4;
};
Buffer.prototype.writeInt32BE = function(e, A, n) {
  return e = +e, A = A | 0, n || checkInt(this, e, A, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[A] = e >>> 24, this[A + 1] = e >>> 16, this[A + 2] = e >>> 8, this[A + 3] = e & 255) : objectWriteUInt32(this, e, A, !1), A + 4;
};
function checkIEEE754(t, e, A, n, o, s) {
  if (A + n > t.length)
    throw new RangeError("Index out of range");
  if (A < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(t, e, A, n, o) {
  return o || checkIEEE754(t, e, A, 4), write$1(t, e, A, n, 23, 4), A + 4;
}
Buffer.prototype.writeFloatLE = function(e, A, n) {
  return writeFloat(this, e, A, !0, n);
};
Buffer.prototype.writeFloatBE = function(e, A, n) {
  return writeFloat(this, e, A, !1, n);
};
function writeDouble(t, e, A, n, o) {
  return o || checkIEEE754(t, e, A, 8), write$1(t, e, A, n, 52, 8), A + 8;
}
Buffer.prototype.writeDoubleLE = function(e, A, n) {
  return writeDouble(this, e, A, !0, n);
};
Buffer.prototype.writeDoubleBE = function(e, A, n) {
  return writeDouble(this, e, A, !1, n);
};
Buffer.prototype.copy = function(e, A, n, o) {
  if (n || (n = 0), !o && o !== 0 && (o = this.length), A >= e.length && (A = e.length), A || (A = 0), o > 0 && o < n && (o = n), o === n || e.length === 0 || this.length === 0)
    return 0;
  if (A < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (o < 0)
    throw new RangeError("sourceEnd out of bounds");
  o > this.length && (o = this.length), e.length - A < o - n && (o = e.length - A + n);
  var s = o - n, a;
  if (this === e && n < A && A < o)
    for (a = s - 1; a >= 0; --a)
      e[a + A] = this[a + n];
  else if (s < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
    for (a = 0; a < s; ++a)
      e[a + A] = this[a + n];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(n, n + s),
      A
    );
  return s;
};
Buffer.prototype.fill = function(e, A, n, o) {
  if (typeof e == "string") {
    if (typeof A == "string" ? (o = A, A = 0, n = this.length) : typeof n == "string" && (o = n, n = this.length), e.length === 1) {
      var s = e.charCodeAt(0);
      s < 256 && (e = s);
    }
    if (o !== void 0 && typeof o != "string")
      throw new TypeError("encoding must be a string");
    if (typeof o == "string" && !Buffer.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
  } else
    typeof e == "number" && (e = e & 255);
  if (A < 0 || this.length < A || this.length < n)
    throw new RangeError("Out of range index");
  if (n <= A)
    return this;
  A = A >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
  var a;
  if (typeof e == "number")
    for (a = A; a < n; ++a)
      this[a] = e;
  else {
    var c = internalIsBuffer(e) ? e : utf8ToBytes(new Buffer(e, o).toString()), l = c.length;
    for (a = 0; a < n - A; ++a)
      this[a + A] = c[a % l];
  }
  return this;
};
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(t) {
  if (t = stringtrim(t).replace(INVALID_BASE64_RE, ""), t.length < 2)
    return "";
  for (; t.length % 4 !== 0; )
    t = t + "=";
  return t;
}
function stringtrim(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function toHex(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function utf8ToBytes(t, e) {
  e = e || 1 / 0;
  for (var A, n = t.length, o = null, s = [], a = 0; a < n; ++a) {
    if (A = t.charCodeAt(a), A > 55295 && A < 57344) {
      if (!o) {
        if (A > 56319) {
          (e -= 3) > -1 && s.push(239, 191, 189);
          continue;
        } else if (a + 1 === n) {
          (e -= 3) > -1 && s.push(239, 191, 189);
          continue;
        }
        o = A;
        continue;
      }
      if (A < 56320) {
        (e -= 3) > -1 && s.push(239, 191, 189), o = A;
        continue;
      }
      A = (o - 55296 << 10 | A - 56320) + 65536;
    } else
      o && (e -= 3) > -1 && s.push(239, 191, 189);
    if (o = null, A < 128) {
      if ((e -= 1) < 0)
        break;
      s.push(A);
    } else if (A < 2048) {
      if ((e -= 2) < 0)
        break;
      s.push(
        A >> 6 | 192,
        A & 63 | 128
      );
    } else if (A < 65536) {
      if ((e -= 3) < 0)
        break;
      s.push(
        A >> 12 | 224,
        A >> 6 & 63 | 128,
        A & 63 | 128
      );
    } else if (A < 1114112) {
      if ((e -= 4) < 0)
        break;
      s.push(
        A >> 18 | 240,
        A >> 12 & 63 | 128,
        A >> 6 & 63 | 128,
        A & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return s;
}
function asciiToBytes(t) {
  for (var e = [], A = 0; A < t.length; ++A)
    e.push(t.charCodeAt(A) & 255);
  return e;
}
function utf16leToBytes(t, e) {
  for (var A, n, o, s = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
    A = t.charCodeAt(a), n = A >> 8, o = A % 256, s.push(o), s.push(n);
  return s;
}
function base64ToBytes(t) {
  return toByteArray$1(base64clean(t));
}
function blitBuffer(t, e, A, n) {
  for (var o = 0; o < n && !(o + A >= e.length || o >= t.length); ++o)
    e[o + A] = t[o];
  return o;
}
function isnan(t) {
  return t !== t;
}
function isBuffer(t) {
  return t != null && (!!t._isBuffer || isFastBuffer(t) || isSlowBuffer(t));
}
function isFastBuffer(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function isSlowBuffer(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && isFastBuffer(t.slice(0, 0));
}
var _polyfillNode_buffer = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Buffer,
  INSPECT_MAX_BYTES,
  SlowBuffer,
  isBuffer,
  kMaxLength: _kMaxLength
}), require$$0 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(_polyfillNode_buffer), safeBuffer = createCommonjsModule(function(t, e) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var A = require$$0.Buffer;
  function n(s, a) {
    for (var c in s)
      a[c] = s[c];
  }
  A.from && A.alloc && A.allocUnsafe && A.allocUnsafeSlow ? t.exports = require$$0 : (n(require$$0, e), e.Buffer = o);
  function o(s, a, c) {
    return A(s, a, c);
  }
  o.prototype = Object.create(A.prototype), n(A, o), o.from = function(s, a, c) {
    if (typeof s == "number")
      throw new TypeError("Argument must not be a number");
    return A(s, a, c);
  }, o.alloc = function(s, a, c) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    var l = A(s);
    return a !== void 0 ? typeof c == "string" ? l.fill(a, c) : l.fill(a) : l.fill(0), l;
  }, o.allocUnsafe = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return A(s);
  }, o.allocUnsafeSlow = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return require$$0.SlowBuffer(s);
  };
});
const Buffer$1 = safeBuffer.Buffer;
var bufferPipe = class {
  constructor(e = Buffer$1.from([])) {
    this.buffer = e, this._bytesRead = 0, this._bytesWrote = 0;
  }
  read(e) {
    this._bytesRead += e;
    const A = this.buffer.slice(0, e);
    return this.buffer = this.buffer.slice(e), A;
  }
  write(e) {
    e = Buffer$1.from(e), this._bytesWrote += e.length, this.buffer = Buffer$1.concat([this.buffer, e]);
  }
  get end() {
    return !this.buffer.length;
  }
  get bytesRead() {
    return this._bytesRead;
  }
  get bytesWrote() {
    return this._bytesWrote;
  }
};
function safeRead(t, e) {
  if (t.buffer.length < e)
    throw new Error("unexpected end of buffer");
  return t.read(e);
}
function lebEncode(t) {
  if (typeof t == "number" && (t = BigInt(t)), t < BigInt(0))
    throw new Error("Cannot leb encode negative values.");
  const e = new bufferPipe();
  for (; ; ) {
    const A = Number(t & BigInt(127));
    if (t /= BigInt(128), t === BigInt(0)) {
      e.write([A]);
      break;
    } else
      e.write([A | 128]);
  }
  return new buffer.Buffer(e.buffer);
}
function lebDecode(t) {
  let e = BigInt(1), A = BigInt(0), n;
  do
    n = safeRead(t, 1)[0], A += BigInt(n & 127).valueOf() * e, e *= BigInt(128);
  while (n >= 128);
  return A;
}
function slebEncode(t) {
  typeof t == "number" && (t = BigInt(t));
  const e = t < BigInt(0);
  e && (t = -t - BigInt(1));
  const A = new bufferPipe();
  for (; ; ) {
    const o = n(t);
    if (t /= BigInt(128), e && t === BigInt(0) && (o & 64) !== 0 || !e && t === BigInt(0) && (o & 64) === 0) {
      A.write([o]);
      break;
    } else
      A.write([o | 128]);
  }
  function n(o) {
    const s = o % BigInt(128);
    return Number(e ? BigInt(128) - s - BigInt(1) : s);
  }
  return new buffer.Buffer(A.buffer);
}
function slebDecode(t) {
  const e = new Uint8Array(t.buffer);
  let A = 0;
  for (; A < e.byteLength; A++)
    if (e[A] < 128) {
      if ((e[A] & 64) === 0)
        return lebDecode(t);
      break;
    }
  const n = new Uint8Array(safeRead(t, A + 1));
  let o = BigInt(0);
  for (let s = n.byteLength - 1; s >= 0; s--)
    o = o * BigInt(128) + BigInt(128 - (n[s] & 127) - 1);
  return -o - BigInt(1);
}
function writeUIntLE(t, e) {
  if (BigInt(t) < BigInt(0))
    throw new Error("Cannot write negative values.");
  return writeIntLE(t, e);
}
function writeIntLE(t, e) {
  t = BigInt(t);
  const A = new bufferPipe();
  let n = 0, o = BigInt(256), s = BigInt(0), a = Number(t % o);
  for (A.write([a]); ++n < e; )
    t < 0 && s === BigInt(0) && a !== 0 && (s = BigInt(1)), a = Number((t / o - s) % BigInt(256)), A.write([a]), o *= BigInt(256);
  return new buffer.Buffer(A.buffer);
}
function readUIntLE(t, e) {
  let A = BigInt(safeRead(t, 1)[0]), n = BigInt(1), o = 0;
  for (; ++o < e; ) {
    n *= BigInt(256);
    const s = BigInt(safeRead(t, 1)[0]);
    A = A + n * s;
  }
  return A;
}
function readIntLE(t, e) {
  let A = readUIntLE(t, e);
  const n = BigInt(2) ** (BigInt(8) * BigInt(e - 1) + BigInt(7));
  return A >= n && (A -= n * BigInt(2)), A;
}
function blobFromBuffer(t) {
  return t;
}
function blobFromUint8Array(t) {
  return buffer.Buffer.from(t);
}
function blobFromText(t) {
  return buffer.Buffer.from(t);
}
function blobFromHex(t) {
  return buffer.Buffer.from(t, "hex");
}
function blobToHex(t) {
  return t.toString("hex");
}
function blobToUint8Array(t) {
  return new Uint8Array(t.slice(0, t.byteLength));
}
const alphabet = "abcdefghijklmnopqrstuvwxyz234567", lookupTable = /* @__PURE__ */ Object.create(null);
for (let t = 0; t < alphabet.length; t++)
  lookupTable[alphabet[t]] = t;
lookupTable[0] = lookupTable.o;
lookupTable[1] = lookupTable.i;
function encode(t) {
  let e = 0, A = 0, n = "";
  function o(s) {
    return e < 0 ? A |= s >> -e : A = s << e & 248, e > 3 ? (e -= 8, 1) : (e < 4 && (n += alphabet[A >> 3], e += 5), 0);
  }
  for (let s = 0; s < t.length; )
    s += o(t[s]);
  return n + (e < 0 ? alphabet[A >> 3] : "");
}
function decode(t) {
  let e = 0, A = 0;
  const n = new Uint8Array(t.length * 4 / 3 | 0);
  let o = 0;
  function s(a) {
    let c = lookupTable[a.toLowerCase()];
    if (c === void 0)
      throw new Error(`Invalid character: ${JSON.stringify(a)}`);
    c <<= 3, A |= c >>> e, e += 5, e >= 8 && (n[o++] = A, e -= 8, e > 0 ? A = c << 5 - e & 255 : A = 0);
  }
  for (const a of t)
    s(a);
  return n.slice(0, o);
}
const lookUpTable = new Uint32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function getCrc32(t) {
  const e = new Uint8Array(t);
  let A = -1;
  for (let n = 0; n < e.length; n++) {
    const s = (e[n] ^ A) & 255;
    A = lookUpTable[s] ^ A >>> 8;
  }
  return (A ^ -1) >>> 0;
}
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout, cachedClearTimeout = defaultClearTimeout, globalContext;
typeof window < "u" ? globalContext = window : typeof self < "u" ? globalContext = self : globalContext = {};
typeof globalContext.setTimeout == "function" && (cachedSetTimeout = setTimeout);
typeof globalContext.clearTimeout == "function" && (cachedClearTimeout = clearTimeout);
function runTimeout(t) {
  if (cachedSetTimeout === setTimeout)
    return setTimeout(t, 0);
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
    return cachedSetTimeout = setTimeout, setTimeout(t, 0);
  try {
    return cachedSetTimeout(t, 0);
  } catch {
    try {
      return cachedSetTimeout.call(null, t, 0);
    } catch {
      return cachedSetTimeout.call(this, t, 0);
    }
  }
}
function runClearTimeout(t) {
  if (cachedClearTimeout === clearTimeout)
    return clearTimeout(t);
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
    return cachedClearTimeout = clearTimeout, clearTimeout(t);
  try {
    return cachedClearTimeout(t);
  } catch {
    try {
      return cachedClearTimeout.call(null, t);
    } catch {
      return cachedClearTimeout.call(this, t);
    }
  }
}
var queue = [], draining = !1, currentQueue, queueIndex = -1;
function cleanUpNextTick() {
  !draining || !currentQueue || (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
}
function drainQueue() {
  if (!draining) {
    var t = runTimeout(cleanUpNextTick);
    draining = !0;
    for (var e = queue.length; e; ) {
      for (currentQueue = queue, queue = []; ++queueIndex < e; )
        currentQueue && currentQueue[queueIndex].run();
      queueIndex = -1, e = queue.length;
    }
    currentQueue = null, draining = !1, runClearTimeout(t);
  }
}
function nextTick(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var A = 1; A < arguments.length; A++)
      e[A - 1] = arguments[A];
  queue.push(new Item$1(t, e)), queue.length === 1 && !draining && runTimeout(drainQueue);
}
function Item$1(t, e) {
  this.fun = t, this.array = e;
}
Item$1.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser", platform = "browser", browser = !0, argv = [], version = "", versions = {}, release = {}, config = {};
function noop() {
}
var on = noop, addListener = noop, once = noop, off = noop, removeListener = noop, removeAllListeners = noop, emit = noop;
function binding(t) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(t) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance = globalContext.performance || {}, performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(t) {
  var e = performanceNow.call(performance) * 1e-3, A = Math.floor(e), n = Math.floor(e % 1 * 1e9);
  return t && (A = A - t[0], n = n - t[1], n < 0 && (A--, n += 1e9)), [A, n];
}
var startTime = new Date();
function uptime() {
  var t = new Date(), e = t - startTime;
  return e / 1e3;
}
var process$1 = {
  nextTick,
  title,
  browser,
  env: { NODE_ENV: "production" },
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
}, sha256 = createCommonjsModule(function(module) {
  /**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.9.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   */
  (function() {
    var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process$1 == "object" && process$1.versions && process$1.versions.node;
    NODE_JS ? root = commonjsGlobal : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && !0 && module.exports, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [];
    (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
      return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
    });
    var createOutputMethod = function(t, e) {
      return function(A) {
        return new Sha256(e, !0).update(A)[t]();
      };
    }, createMethod = function(t) {
      var e = createOutputMethod("hex", t);
      NODE_JS && (e = nodeWrap(e, t)), e.create = function() {
        return new Sha256(t);
      }, e.update = function(o) {
        return e.create().update(o);
      };
      for (var A = 0; A < OUTPUT_TYPES.length; ++A) {
        var n = OUTPUT_TYPES[A];
        e[n] = createOutputMethod(n, t);
      }
      return e;
    }, nodeWrap = function(method, is224) {
      var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), algorithm = is224 ? "sha224" : "sha256", nodeMethod = function(t) {
        if (typeof t == "string")
          return crypto.createHash(algorithm).update(t, "utf8").digest("hex");
        if (t == null)
          throw new Error(ERROR);
        return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest("hex") : method(t);
      };
      return nodeMethod;
    }, createHmacOutputMethod = function(t, e) {
      return function(A, n) {
        return new HmacSha256(A, e, !0).update(n)[t]();
      };
    }, createHmacMethod = function(t) {
      var e = createHmacOutputMethod("hex", t);
      e.create = function(o) {
        return new HmacSha256(o, t);
      }, e.update = function(o, s) {
        return e.create(o).update(s);
      };
      for (var A = 0; A < OUTPUT_TYPES.length; ++A) {
        var n = OUTPUT_TYPES[A];
        e[n] = createHmacOutputMethod(n, t);
      }
      return e;
    };
    function Sha256(t, e) {
      e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t;
    }
    Sha256.prototype.update = function(t) {
      if (!this.finalized) {
        var e, A = typeof t;
        if (A !== "string") {
          if (A === "object") {
            if (t === null)
              throw new Error(ERROR);
            if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
              t = new Uint8Array(t);
            else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t)))
              throw new Error(ERROR);
          } else
            throw new Error(ERROR);
          e = !0;
        }
        for (var n, o = 0, s, a = t.length, c = this.blocks; o < a; ) {
          if (this.hashed && (this.hashed = !1, c[0] = this.block, c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0), e)
            for (s = this.start; o < a && s < 64; ++o)
              c[s >> 2] |= t[o] << SHIFT[s++ & 3];
          else
            for (s = this.start; o < a && s < 64; ++o)
              n = t.charCodeAt(o), n < 128 ? c[s >> 2] |= n << SHIFT[s++ & 3] : n < 2048 ? (c[s >> 2] |= (192 | n >> 6) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n & 63) << SHIFT[s++ & 3]) : n < 55296 || n >= 57344 ? (c[s >> 2] |= (224 | n >> 12) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n >> 6 & 63) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n & 63) << SHIFT[s++ & 3]) : (n = 65536 + ((n & 1023) << 10 | t.charCodeAt(++o) & 1023), c[s >> 2] |= (240 | n >> 18) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n >> 12 & 63) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n >> 6 & 63) << SHIFT[s++ & 3], c[s >> 2] |= (128 | n & 63) << SHIFT[s++ & 3]);
          this.lastByteIndex = s, this.bytes += s - this.start, s >= 64 ? (this.block = c[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }
    }, Sha256.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var t = this.blocks, e = this.lastByteIndex;
        t[16] = this.block, t[e >> 2] |= EXTRA[e & 3], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash();
      }
    }, Sha256.prototype.hash = function() {
      var t = this.h0, e = this.h1, A = this.h2, n = this.h3, o = this.h4, s = this.h5, a = this.h6, c = this.h7, l = this.blocks, B, g, E, I, x, U, v, D, T, Z, j;
      for (B = 16; B < 64; ++B)
        x = l[B - 15], g = (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3, x = l[B - 2], E = (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10, l[B] = l[B - 16] + g + l[B - 7] + E << 0;
      for (j = e & A, B = 0; B < 64; B += 4)
        this.first ? (this.is224 ? (D = 300032, x = l[0] - 1413257819, c = x - 150054599 << 0, n = x + 24177077 << 0) : (D = 704751109, x = l[0] - 210244248, c = x - 1521486534 << 0, n = x + 143694565 << 0), this.first = !1) : (g = (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10), E = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7), D = t & e, I = D ^ t & A ^ j, v = o & s ^ ~o & a, x = c + E + v + K[B] + l[B], U = g + I, c = n + x << 0, n = x + U << 0), g = (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10), E = (c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7), T = n & t, I = T ^ n & e ^ D, v = c & o ^ ~c & s, x = a + E + v + K[B + 1] + l[B + 1], U = g + I, a = A + x << 0, A = x + U << 0, g = (A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10), E = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7), Z = A & n, I = Z ^ A & t ^ T, v = a & c ^ ~a & o, x = s + E + v + K[B + 2] + l[B + 2], U = g + I, s = e + x << 0, e = x + U << 0, g = (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), E = (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7), j = e & A, I = j ^ e & n ^ Z, v = s & a ^ ~s & c, x = o + E + v + K[B + 3] + l[B + 3], U = g + I, o = t + x << 0, t = x + U << 0;
      this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + A << 0, this.h3 = this.h3 + n << 0, this.h4 = this.h4 + o << 0, this.h5 = this.h5 + s << 0, this.h6 = this.h6 + a << 0, this.h7 = this.h7 + c << 0;
    }, Sha256.prototype.hex = function() {
      this.finalize();
      var t = this.h0, e = this.h1, A = this.h2, n = this.h3, o = this.h4, s = this.h5, a = this.h6, c = this.h7, l = HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[t & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[e & 15] + HEX_CHARS[A >> 28 & 15] + HEX_CHARS[A >> 24 & 15] + HEX_CHARS[A >> 20 & 15] + HEX_CHARS[A >> 16 & 15] + HEX_CHARS[A >> 12 & 15] + HEX_CHARS[A >> 8 & 15] + HEX_CHARS[A >> 4 & 15] + HEX_CHARS[A & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[n & 15] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[o & 15] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[s & 15] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[a & 15];
      return this.is224 || (l += HEX_CHARS[c >> 28 & 15] + HEX_CHARS[c >> 24 & 15] + HEX_CHARS[c >> 20 & 15] + HEX_CHARS[c >> 16 & 15] + HEX_CHARS[c >> 12 & 15] + HEX_CHARS[c >> 8 & 15] + HEX_CHARS[c >> 4 & 15] + HEX_CHARS[c & 15]), l;
    }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
      this.finalize();
      var t = this.h0, e = this.h1, A = this.h2, n = this.h3, o = this.h4, s = this.h5, a = this.h6, c = this.h7, l = [
        t >> 24 & 255,
        t >> 16 & 255,
        t >> 8 & 255,
        t & 255,
        e >> 24 & 255,
        e >> 16 & 255,
        e >> 8 & 255,
        e & 255,
        A >> 24 & 255,
        A >> 16 & 255,
        A >> 8 & 255,
        A & 255,
        n >> 24 & 255,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255,
        o >> 24 & 255,
        o >> 16 & 255,
        o >> 8 & 255,
        o & 255,
        s >> 24 & 255,
        s >> 16 & 255,
        s >> 8 & 255,
        s & 255,
        a >> 24 & 255,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ];
      return this.is224 || l.push(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255), l;
    }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
      this.finalize();
      var t = new ArrayBuffer(this.is224 ? 28 : 32), e = new DataView(t);
      return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t;
    };
    function HmacSha256(t, e, A) {
      var n, o = typeof t;
      if (o === "string") {
        var s = [], a = t.length, c = 0, l;
        for (n = 0; n < a; ++n)
          l = t.charCodeAt(n), l < 128 ? s[c++] = l : l < 2048 ? (s[c++] = 192 | l >> 6, s[c++] = 128 | l & 63) : l < 55296 || l >= 57344 ? (s[c++] = 224 | l >> 12, s[c++] = 128 | l >> 6 & 63, s[c++] = 128 | l & 63) : (l = 65536 + ((l & 1023) << 10 | t.charCodeAt(++n) & 1023), s[c++] = 240 | l >> 18, s[c++] = 128 | l >> 12 & 63, s[c++] = 128 | l >> 6 & 63, s[c++] = 128 | l & 63);
        t = s;
      } else if (o === "object") {
        if (t === null)
          throw new Error(ERROR);
        if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
          t = new Uint8Array(t);
        else if (!Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t)))
          throw new Error(ERROR);
      } else
        throw new Error(ERROR);
      t.length > 64 && (t = new Sha256(e, !0).update(t).array());
      var B = [], g = [];
      for (n = 0; n < 64; ++n) {
        var E = t[n] || 0;
        B[n] = 92 ^ E, g[n] = 54 ^ E;
      }
      Sha256.call(this, e, A), this.update(g), this.oKeyPad = B, this.inner = !0, this.sharedMemory = A;
    }
    HmacSha256.prototype = new Sha256(), HmacSha256.prototype.finalize = function() {
      if (Sha256.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var t = this.array();
        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), Sha256.prototype.finalize.call(this);
      }
    };
    var exports = createMethod();
    exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224);
  })();
});
function sha224(t) {
  const e = sha256.sha224.create();
  return e.update(t), blobFromUint8Array(new Uint8Array(e.array()));
}
const SELF_AUTHENTICATING_SUFFIX = 2, ANONYMOUS_SUFFIX = 4;
class Principal {
  constructor(e) {
    this._blob = e, this._isPrincipal = !0;
  }
  static anonymous() {
    return new this(blobFromUint8Array(new Uint8Array([ANONYMOUS_SUFFIX])));
  }
  static selfAuthenticating(e) {
    const A = sha224(e);
    return new this(blobFromUint8Array(new Uint8Array([...A, SELF_AUTHENTICATING_SUFFIX])));
  }
  static from(e) {
    if (typeof e == "string")
      return Principal.fromText(e);
    if (typeof e == "object" && e !== null && e._isPrincipal === !0)
      return new Principal(e._blob);
    throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`);
  }
  static fromHex(e) {
    return new this(blobFromHex(e));
  }
  static fromText(e) {
    const A = e.toLowerCase().replace(/-/g, "");
    let n = decode(A);
    n = n.slice(4, n.length);
    const o = new this(blobFromUint8Array(n));
    if (o.toText() !== e)
      throw new Error(`Principal "${o.toText()}" does not have a valid checksum.`);
    return o;
  }
  static fromBlob(e) {
    return new this(e);
  }
  isAnonymous() {
    return this._blob.byteLength === 1 && this._blob[0] === ANONYMOUS_SUFFIX;
  }
  toBlob() {
    return this._blob;
  }
  toHash() {
    return this._blob;
  }
  toHex() {
    return blobToHex(this._blob).toUpperCase();
  }
  toText() {
    const e = new ArrayBuffer(4);
    new DataView(e).setUint32(0, getCrc32(this.toBlob()), !1);
    const n = Uint8Array.from(buffer.Buffer.from(e)), o = Uint8Array.from(this._blob), s = new Uint8Array([...n, ...o]), c = encode(s).match(/.{1,5}/g);
    if (!c)
      throw new Error();
    return c.join("-");
  }
  toString() {
    return this.toText();
  }
}
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
function clone(t) {
  var e, A, n, o = T.prototype = { constructor: T, toString: null, valueOf: null }, s = new T(1), a = 20, c = 4, l = -7, B = 21, g = -1e7, E = 1e7, I = !1, x = 1, U = 0, v = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    suffix: ""
  }, D = "0123456789abcdefghijklmnopqrstuvwxyz";
  function T(h, C) {
    var y, R, G, N, M, S, p, w, k = this;
    if (!(k instanceof T))
      return new T(h, C);
    if (C == null) {
      if (h && h._isBigNumber === !0) {
        k.s = h.s, !h.c || h.e > E ? k.c = k.e = null : h.e < g ? k.c = [k.e = 0] : (k.e = h.e, k.c = h.c.slice());
        return;
      }
      if ((S = typeof h == "number") && h * 0 == 0) {
        if (k.s = 1 / h < 0 ? (h = -h, -1) : 1, h === ~~h) {
          for (N = 0, M = h; M >= 10; M /= 10, N++)
            ;
          N > E ? k.c = k.e = null : (k.e = N, k.c = [h]);
          return;
        }
        w = String(h);
      } else {
        if (!isNumeric.test(w = String(h)))
          return n(k, w, S);
        k.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (N = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (M = w.search(/e/i)) > 0 ? (N < 0 && (N = M), N += +w.slice(M + 1), w = w.substring(0, M)) : N < 0 && (N = w.length);
    } else {
      if (intCheck(C, 2, D.length, "Base"), C == 10)
        return k = new T(h), Y(k, a + k.e + 1, c);
      if (w = String(h), S = typeof h == "number") {
        if (h * 0 != 0)
          return n(k, w, S, C);
        if (k.s = 1 / h < 0 ? (w = w.slice(1), -1) : 1, T.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(tooManyDigits + h);
      } else
        k.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
      for (y = D.slice(0, C), N = M = 0, p = w.length; M < p; M++)
        if (y.indexOf(R = w.charAt(M)) < 0) {
          if (R == ".") {
            if (M > N) {
              N = p;
              continue;
            }
          } else if (!G && (w == w.toUpperCase() && (w = w.toLowerCase()) || w == w.toLowerCase() && (w = w.toUpperCase()))) {
            G = !0, M = -1, N = 0;
            continue;
          }
          return n(k, String(h), S, C);
        }
      S = !1, w = A(w, C, 10, k.s), (N = w.indexOf(".")) > -1 ? w = w.replace(".", "") : N = w.length;
    }
    for (M = 0; w.charCodeAt(M) === 48; M++)
      ;
    for (p = w.length; w.charCodeAt(--p) === 48; )
      ;
    if (w = w.slice(M, ++p)) {
      if (p -= M, S && T.DEBUG && p > 15 && (h > MAX_SAFE_INTEGER || h !== mathfloor(h)))
        throw Error(tooManyDigits + k.s * h);
      if ((N = N - M - 1) > E)
        k.c = k.e = null;
      else if (N < g)
        k.c = [k.e = 0];
      else {
        if (k.e = N, k.c = [], M = (N + 1) % LOG_BASE, N < 0 && (M += LOG_BASE), M < p) {
          for (M && k.c.push(+w.slice(0, M)), p -= LOG_BASE; M < p; )
            k.c.push(+w.slice(M, M += LOG_BASE));
          M = LOG_BASE - (w = w.slice(M)).length;
        } else
          M -= p;
        for (; M--; w += "0")
          ;
        k.c.push(+w);
      }
    } else
      k.c = [k.e = 0];
  }
  T.clone = clone, T.ROUND_UP = 0, T.ROUND_DOWN = 1, T.ROUND_CEIL = 2, T.ROUND_FLOOR = 3, T.ROUND_HALF_UP = 4, T.ROUND_HALF_DOWN = 5, T.ROUND_HALF_EVEN = 6, T.ROUND_HALF_CEIL = 7, T.ROUND_HALF_FLOOR = 8, T.EUCLID = 9, T.config = T.set = function(h) {
    var C, y;
    if (h != null)
      if (typeof h == "object") {
        if (h.hasOwnProperty(C = "DECIMAL_PLACES") && (y = h[C], intCheck(y, 0, MAX, C), a = y), h.hasOwnProperty(C = "ROUNDING_MODE") && (y = h[C], intCheck(y, 0, 8, C), c = y), h.hasOwnProperty(C = "EXPONENTIAL_AT") && (y = h[C], y && y.pop ? (intCheck(y[0], -MAX, 0, C), intCheck(y[1], 0, MAX, C), l = y[0], B = y[1]) : (intCheck(y, -MAX, MAX, C), l = -(B = y < 0 ? -y : y))), h.hasOwnProperty(C = "RANGE"))
          if (y = h[C], y && y.pop)
            intCheck(y[0], -MAX, -1, C), intCheck(y[1], 1, MAX, C), g = y[0], E = y[1];
          else if (intCheck(y, -MAX, MAX, C), y)
            g = -(E = y < 0 ? -y : y);
          else
            throw Error(bignumberError + C + " cannot be zero: " + y);
        if (h.hasOwnProperty(C = "CRYPTO"))
          if (y = h[C], y === !!y)
            if (y)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                I = y;
              else
                throw I = !y, Error(bignumberError + "crypto unavailable");
            else
              I = y;
          else
            throw Error(bignumberError + C + " not true or false: " + y);
        if (h.hasOwnProperty(C = "MODULO_MODE") && (y = h[C], intCheck(y, 0, 9, C), x = y), h.hasOwnProperty(C = "POW_PRECISION") && (y = h[C], intCheck(y, 0, MAX, C), U = y), h.hasOwnProperty(C = "FORMAT"))
          if (y = h[C], typeof y == "object")
            v = y;
          else
            throw Error(bignumberError + C + " not an object: " + y);
        if (h.hasOwnProperty(C = "ALPHABET"))
          if (y = h[C], typeof y == "string" && !/^.$|[+-.\s]|(.).*\1/.test(y))
            D = y;
          else
            throw Error(bignumberError + C + " invalid: " + y);
      } else
        throw Error(bignumberError + "Object expected: " + h);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: c,
      EXPONENTIAL_AT: [l, B],
      RANGE: [g, E],
      CRYPTO: I,
      MODULO_MODE: x,
      POW_PRECISION: U,
      FORMAT: v,
      ALPHABET: D
    };
  }, T.isBigNumber = function(h) {
    if (!h || h._isBigNumber !== !0)
      return !1;
    if (!T.DEBUG)
      return !0;
    var C, y, R = h.c, G = h.e, N = h.s;
    e:
      if ({}.toString.call(R) == "[object Array]") {
        if ((N === 1 || N === -1) && G >= -MAX && G <= MAX && G === mathfloor(G)) {
          if (R[0] === 0) {
            if (G === 0 && R.length === 1)
              return !0;
            break e;
          }
          if (C = (G + 1) % LOG_BASE, C < 1 && (C += LOG_BASE), String(R[0]).length == C) {
            for (C = 0; C < R.length; C++)
              if (y = R[C], y < 0 || y >= BASE || y !== mathfloor(y))
                break e;
            if (y !== 0)
              return !0;
          }
        }
      } else if (R === null && G === null && (N === null || N === 1 || N === -1))
        return !0;
    throw Error(bignumberError + "Invalid BigNumber: " + h);
  }, T.maximum = T.max = function() {
    return j(arguments, o.lt);
  }, T.minimum = T.min = function() {
    return j(arguments, o.gt);
  }, T.random = function() {
    var h = 9007199254740992, C = Math.random() * h & 2097151 ? function() {
      return mathfloor(Math.random() * h);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(y) {
      var R, G, N, M, S, p = 0, w = [], k = new T(s);
      if (y == null ? y = a : intCheck(y, 0, MAX), M = mathceil(y / LOG_BASE), I)
        if (crypto.getRandomValues) {
          for (R = crypto.getRandomValues(new Uint32Array(M *= 2)); p < M; )
            S = R[p] * 131072 + (R[p + 1] >>> 11), S >= 9e15 ? (G = crypto.getRandomValues(new Uint32Array(2)), R[p] = G[0], R[p + 1] = G[1]) : (w.push(S % 1e14), p += 2);
          p = M / 2;
        } else if (crypto.randomBytes) {
          for (R = crypto.randomBytes(M *= 7); p < M; )
            S = (R[p] & 31) * 281474976710656 + R[p + 1] * 1099511627776 + R[p + 2] * 4294967296 + R[p + 3] * 16777216 + (R[p + 4] << 16) + (R[p + 5] << 8) + R[p + 6], S >= 9e15 ? crypto.randomBytes(7).copy(R, p) : (w.push(S % 1e14), p += 7);
          p = M / 7;
        } else
          throw I = !1, Error(bignumberError + "crypto unavailable");
      if (!I)
        for (; p < M; )
          S = C(), S < 9e15 && (w[p++] = S % 1e14);
      for (M = w[--p], y %= LOG_BASE, M && y && (S = POWS_TEN[LOG_BASE - y], w[p] = mathfloor(M / S) * S); w[p] === 0; w.pop(), p--)
        ;
      if (p < 0)
        w = [N = 0];
      else {
        for (N = -1; w[0] === 0; w.splice(0, 1), N -= LOG_BASE)
          ;
        for (p = 1, S = w[0]; S >= 10; S /= 10, p++)
          ;
        p < LOG_BASE && (N -= LOG_BASE - p);
      }
      return k.e = N, k.c = w, k;
    };
  }(), T.sum = function() {
    for (var h = 1, C = arguments, y = new T(C[0]); h < C.length; )
      y = y.plus(C[h++]);
    return y;
  }, A = function() {
    var h = "0123456789";
    function C(y, R, G, N) {
      for (var M, S = [0], p, w = 0, k = y.length; w < k; ) {
        for (p = S.length; p--; S[p] *= R)
          ;
        for (S[0] += N.indexOf(y.charAt(w++)), M = 0; M < S.length; M++)
          S[M] > G - 1 && (S[M + 1] == null && (S[M + 1] = 0), S[M + 1] += S[M] / G | 0, S[M] %= G);
      }
      return S.reverse();
    }
    return function(y, R, G, N, M) {
      var S, p, w, k, O, te, q, P, ie = y.indexOf("."), se = a, Q = c;
      for (ie >= 0 && (k = U, U = 0, y = y.replace(".", ""), P = new T(R), te = P.pow(y.length - ie), U = k, P.c = C(toFixedPoint(coeffToString(te.c), te.e, "0"), 10, G, h), P.e = P.c.length), q = C(y, R, G, M ? (S = D, h) : (S = h, D)), w = k = q.length; q[--k] == 0; q.pop())
        ;
      if (!q[0])
        return S.charAt(0);
      if (ie < 0 ? --w : (te.c = q, te.e = w, te.s = N, te = e(te, P, se, Q, G), q = te.c, O = te.r, w = te.e), p = w + se + 1, ie = q[p], k = G / 2, O = O || p < 0 || q[p + 1] != null, O = Q < 4 ? (ie != null || O) && (Q == 0 || Q == (te.s < 0 ? 3 : 2)) : ie > k || ie == k && (Q == 4 || O || Q == 6 && q[p - 1] & 1 || Q == (te.s < 0 ? 8 : 7)), p < 1 || !q[0])
        y = O ? toFixedPoint(S.charAt(1), -se, S.charAt(0)) : S.charAt(0);
      else {
        if (q.length = p, O)
          for (--G; ++q[--p] > G; )
            q[p] = 0, p || (++w, q = [1].concat(q));
        for (k = q.length; !q[--k]; )
          ;
        for (ie = 0, y = ""; ie <= k; y += S.charAt(q[ie++]))
          ;
        y = toFixedPoint(y, w, S.charAt(0));
      }
      return y;
    };
  }(), e = function() {
    function h(R, G, N) {
      var M, S, p, w, k = 0, O = R.length, te = G % SQRT_BASE, q = G / SQRT_BASE | 0;
      for (R = R.slice(); O--; )
        p = R[O] % SQRT_BASE, w = R[O] / SQRT_BASE | 0, M = q * p + w * te, S = te * p + M % SQRT_BASE * SQRT_BASE + k, k = (S / N | 0) + (M / SQRT_BASE | 0) + q * w, R[O] = S % N;
      return k && (R = [k].concat(R)), R;
    }
    function C(R, G, N, M) {
      var S, p;
      if (N != M)
        p = N > M ? 1 : -1;
      else
        for (S = p = 0; S < N; S++)
          if (R[S] != G[S]) {
            p = R[S] > G[S] ? 1 : -1;
            break;
          }
      return p;
    }
    function y(R, G, N, M) {
      for (var S = 0; N--; )
        R[N] -= S, S = R[N] < G[N] ? 1 : 0, R[N] = S * M + R[N] - G[N];
      for (; !R[0] && R.length > 1; R.splice(0, 1))
        ;
    }
    return function(R, G, N, M, S) {
      var p, w, k, O, te, q, P, ie, se, Q, Ae, oe, ue, X, ee, ae, ce, z = R.s == G.s ? 1 : -1, pe = R.c, re = G.c;
      if (!pe || !pe[0] || !re || !re[0])
        return new T(!R.s || !G.s || (pe ? re && pe[0] == re[0] : !re) ? NaN : pe && pe[0] == 0 || !re ? z * 0 : z / 0);
      for (ie = new T(z), se = ie.c = [], w = R.e - G.e, z = N + w + 1, S || (S = BASE, w = bitFloor(R.e / LOG_BASE) - bitFloor(G.e / LOG_BASE), z = z / LOG_BASE | 0), k = 0; re[k] == (pe[k] || 0); k++)
        ;
      if (re[k] > (pe[k] || 0) && w--, z < 0)
        se.push(1), O = !0;
      else {
        for (X = pe.length, ae = re.length, k = 0, z += 2, te = mathfloor(S / (re[0] + 1)), te > 1 && (re = h(re, te, S), pe = h(pe, te, S), ae = re.length, X = pe.length), ue = ae, Q = pe.slice(0, ae), Ae = Q.length; Ae < ae; Q[Ae++] = 0)
          ;
        ce = re.slice(), ce = [0].concat(ce), ee = re[0], re[1] >= S / 2 && ee++;
        do {
          if (te = 0, p = C(re, Q, ae, Ae), p < 0) {
            if (oe = Q[0], ae != Ae && (oe = oe * S + (Q[1] || 0)), te = mathfloor(oe / ee), te > 1)
              for (te >= S && (te = S - 1), q = h(re, te, S), P = q.length, Ae = Q.length; C(q, Q, P, Ae) == 1; )
                te--, y(q, ae < P ? ce : re, P, S), P = q.length, p = 1;
            else
              te == 0 && (p = te = 1), q = re.slice(), P = q.length;
            if (P < Ae && (q = [0].concat(q)), y(Q, q, Ae, S), Ae = Q.length, p == -1)
              for (; C(re, Q, ae, Ae) < 1; )
                te++, y(Q, ae < Ae ? ce : re, Ae, S), Ae = Q.length;
          } else
            p === 0 && (te++, Q = [0]);
          se[k++] = te, Q[0] ? Q[Ae++] = pe[ue] || 0 : (Q = [pe[ue]], Ae = 1);
        } while ((ue++ < X || Q[0] != null) && z--);
        O = Q[0] != null, se[0] || se.splice(0, 1);
      }
      if (S == BASE) {
        for (k = 1, z = se[0]; z >= 10; z /= 10, k++)
          ;
        Y(ie, N + (ie.e = k + w * LOG_BASE - 1) + 1, M, O);
      } else
        ie.e = w, ie.r = +O;
      return ie;
    };
  }();
  function Z(h, C, y, R) {
    var G, N, M, S, p;
    if (y == null ? y = c : intCheck(y, 0, 8), !h.c)
      return h.toString();
    if (G = h.c[0], M = h.e, C == null)
      p = coeffToString(h.c), p = R == 1 || R == 2 && (M <= l || M >= B) ? toExponential(p, M) : toFixedPoint(p, M, "0");
    else if (h = Y(new T(h), C, y), N = h.e, p = coeffToString(h.c), S = p.length, R == 1 || R == 2 && (C <= N || N <= l)) {
      for (; S < C; p += "0", S++)
        ;
      p = toExponential(p, N);
    } else if (C -= M, p = toFixedPoint(p, N, "0"), N + 1 > S) {
      if (--C > 0)
        for (p += "."; C--; p += "0")
          ;
    } else if (C += N - S, C > 0)
      for (N + 1 == S && (p += "."); C--; p += "0")
        ;
    return h.s < 0 && G ? "-" + p : p;
  }
  function j(h, C) {
    for (var y, R = 1, G = new T(h[0]); R < h.length; R++)
      if (y = new T(h[R]), y.s)
        C.call(G, y) && (G = y);
      else {
        G = y;
        break;
      }
    return G;
  }
  function L(h, C, y) {
    for (var R = 1, G = C.length; !C[--G]; C.pop())
      ;
    for (G = C[0]; G >= 10; G /= 10, R++)
      ;
    return (y = R + y * LOG_BASE - 1) > E ? h.c = h.e = null : y < g ? h.c = [h.e = 0] : (h.e = y, h.c = C), h;
  }
  n = function() {
    var h = /^(-?)0([xbo])(?=\w[\w.]*$)/i, C = /^([^.]+)\.$/, y = /^\.([^.]+)$/, R = /^-?(Infinity|NaN)$/, G = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(N, M, S, p) {
      var w, k = S ? M : M.replace(G, "");
      if (R.test(k))
        N.s = isNaN(k) ? null : k < 0 ? -1 : 1;
      else {
        if (!S && (k = k.replace(h, function(O, te, q) {
          return w = (q = q.toLowerCase()) == "x" ? 16 : q == "b" ? 2 : 8, !p || p == w ? te : O;
        }), p && (w = p, k = k.replace(C, "$1").replace(y, "0.$1")), M != k))
          return new T(k, w);
        if (T.DEBUG)
          throw Error(bignumberError + "Not a" + (p ? " base " + p : "") + " number: " + M);
        N.s = null;
      }
      N.c = N.e = null;
    };
  }();
  function Y(h, C, y, R) {
    var G, N, M, S, p, w, k, O = h.c, te = POWS_TEN;
    if (O) {
      e: {
        for (G = 1, S = O[0]; S >= 10; S /= 10, G++)
          ;
        if (N = C - G, N < 0)
          N += LOG_BASE, M = C, p = O[w = 0], k = p / te[G - M - 1] % 10 | 0;
        else if (w = mathceil((N + 1) / LOG_BASE), w >= O.length)
          if (R) {
            for (; O.length <= w; O.push(0))
              ;
            p = k = 0, G = 1, N %= LOG_BASE, M = N - LOG_BASE + 1;
          } else
            break e;
        else {
          for (p = S = O[w], G = 1; S >= 10; S /= 10, G++)
            ;
          N %= LOG_BASE, M = N - LOG_BASE + G, k = M < 0 ? 0 : p / te[G - M - 1] % 10 | 0;
        }
        if (R = R || C < 0 || O[w + 1] != null || (M < 0 ? p : p % te[G - M - 1]), R = y < 4 ? (k || R) && (y == 0 || y == (h.s < 0 ? 3 : 2)) : k > 5 || k == 5 && (y == 4 || R || y == 6 && (N > 0 ? M > 0 ? p / te[G - M] : 0 : O[w - 1]) % 10 & 1 || y == (h.s < 0 ? 8 : 7)), C < 1 || !O[0])
          return O.length = 0, R ? (C -= h.e + 1, O[0] = te[(LOG_BASE - C % LOG_BASE) % LOG_BASE], h.e = -C || 0) : O[0] = h.e = 0, h;
        if (N == 0 ? (O.length = w, S = 1, w--) : (O.length = w + 1, S = te[LOG_BASE - N], O[w] = M > 0 ? mathfloor(p / te[G - M] % te[M]) * S : 0), R)
          for (; ; )
            if (w == 0) {
              for (N = 1, M = O[0]; M >= 10; M /= 10, N++)
                ;
              for (M = O[0] += S, S = 1; M >= 10; M /= 10, S++)
                ;
              N != S && (h.e++, O[0] == BASE && (O[0] = 1));
              break;
            } else {
              if (O[w] += S, O[w] != BASE)
                break;
              O[w--] = 0, S = 1;
            }
        for (N = O.length; O[--N] === 0; O.pop())
          ;
      }
      h.e > E ? h.c = h.e = null : h.e < g && (h.c = [h.e = 0]);
    }
    return h;
  }
  function W(h) {
    var C, y = h.e;
    return y === null ? h.toString() : (C = coeffToString(h.c), C = y <= l || y >= B ? toExponential(C, y) : toFixedPoint(C, y, "0"), h.s < 0 ? "-" + C : C);
  }
  return o.absoluteValue = o.abs = function() {
    var h = new T(this);
    return h.s < 0 && (h.s = 1), h;
  }, o.comparedTo = function(h, C) {
    return compare(this, new T(h, C));
  }, o.decimalPlaces = o.dp = function(h, C) {
    var y, R, G, N = this;
    if (h != null)
      return intCheck(h, 0, MAX), C == null ? C = c : intCheck(C, 0, 8), Y(new T(N), h + N.e + 1, C);
    if (!(y = N.c))
      return null;
    if (R = ((G = y.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE, G = y[G])
      for (; G % 10 == 0; G /= 10, R--)
        ;
    return R < 0 && (R = 0), R;
  }, o.dividedBy = o.div = function(h, C) {
    return e(this, new T(h, C), a, c);
  }, o.dividedToIntegerBy = o.idiv = function(h, C) {
    return e(this, new T(h, C), 0, 1);
  }, o.exponentiatedBy = o.pow = function(h, C) {
    var y, R, G, N, M, S, p, w, k, O = this;
    if (h = new T(h), h.c && !h.isInteger())
      throw Error(bignumberError + "Exponent not an integer: " + W(h));
    if (C != null && (C = new T(C)), S = h.e > 14, !O.c || !O.c[0] || O.c[0] == 1 && !O.e && O.c.length == 1 || !h.c || !h.c[0])
      return k = new T(Math.pow(+W(O), S ? 2 - isOdd(h) : +W(h))), C ? k.mod(C) : k;
    if (p = h.s < 0, C) {
      if (C.c ? !C.c[0] : !C.s)
        return new T(NaN);
      R = !p && O.isInteger() && C.isInteger(), R && (O = O.mod(C));
    } else {
      if (h.e > 9 && (O.e > 0 || O.e < -1 || (O.e == 0 ? O.c[0] > 1 || S && O.c[1] >= 24e7 : O.c[0] < 8e13 || S && O.c[0] <= 9999975e7)))
        return N = O.s < 0 && isOdd(h) ? -0 : 0, O.e > -1 && (N = 1 / N), new T(p ? 1 / N : N);
      U && (N = mathceil(U / LOG_BASE + 2));
    }
    for (S ? (y = new T(0.5), p && (h.s = 1), w = isOdd(h)) : (G = Math.abs(+W(h)), w = G % 2), k = new T(s); ; ) {
      if (w) {
        if (k = k.times(O), !k.c)
          break;
        N ? k.c.length > N && (k.c.length = N) : R && (k = k.mod(C));
      }
      if (G) {
        if (G = mathfloor(G / 2), G === 0)
          break;
        w = G % 2;
      } else if (h = h.times(y), Y(h, h.e + 1, 1), h.e > 14)
        w = isOdd(h);
      else {
        if (G = +W(h), G === 0)
          break;
        w = G % 2;
      }
      O = O.times(O), N ? O.c && O.c.length > N && (O.c.length = N) : R && (O = O.mod(C));
    }
    return R ? k : (p && (k = s.div(k)), C ? k.mod(C) : N ? Y(k, U, c, M) : k);
  }, o.integerValue = function(h) {
    var C = new T(this);
    return h == null ? h = c : intCheck(h, 0, 8), Y(C, C.e + 1, h);
  }, o.isEqualTo = o.eq = function(h, C) {
    return compare(this, new T(h, C)) === 0;
  }, o.isFinite = function() {
    return !!this.c;
  }, o.isGreaterThan = o.gt = function(h, C) {
    return compare(this, new T(h, C)) > 0;
  }, o.isGreaterThanOrEqualTo = o.gte = function(h, C) {
    return (C = compare(this, new T(h, C))) === 1 || C === 0;
  }, o.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  }, o.isLessThan = o.lt = function(h, C) {
    return compare(this, new T(h, C)) < 0;
  }, o.isLessThanOrEqualTo = o.lte = function(h, C) {
    return (C = compare(this, new T(h, C))) === -1 || C === 0;
  }, o.isNaN = function() {
    return !this.s;
  }, o.isNegative = function() {
    return this.s < 0;
  }, o.isPositive = function() {
    return this.s > 0;
  }, o.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, o.minus = function(h, C) {
    var y, R, G, N, M = this, S = M.s;
    if (h = new T(h, C), C = h.s, !S || !C)
      return new T(NaN);
    if (S != C)
      return h.s = -C, M.plus(h);
    var p = M.e / LOG_BASE, w = h.e / LOG_BASE, k = M.c, O = h.c;
    if (!p || !w) {
      if (!k || !O)
        return k ? (h.s = -C, h) : new T(O ? M : NaN);
      if (!k[0] || !O[0])
        return O[0] ? (h.s = -C, h) : new T(k[0] ? M : c == 3 ? -0 : 0);
    }
    if (p = bitFloor(p), w = bitFloor(w), k = k.slice(), S = p - w) {
      for ((N = S < 0) ? (S = -S, G = k) : (w = p, G = O), G.reverse(), C = S; C--; G.push(0))
        ;
      G.reverse();
    } else
      for (R = (N = (S = k.length) < (C = O.length)) ? S : C, S = C = 0; C < R; C++)
        if (k[C] != O[C]) {
          N = k[C] < O[C];
          break;
        }
    if (N && (G = k, k = O, O = G, h.s = -h.s), C = (R = O.length) - (y = k.length), C > 0)
      for (; C--; k[y++] = 0)
        ;
    for (C = BASE - 1; R > S; ) {
      if (k[--R] < O[R]) {
        for (y = R; y && !k[--y]; k[y] = C)
          ;
        --k[y], k[R] += BASE;
      }
      k[R] -= O[R];
    }
    for (; k[0] == 0; k.splice(0, 1), --w)
      ;
    return k[0] ? L(h, k, w) : (h.s = c == 3 ? -1 : 1, h.c = [h.e = 0], h);
  }, o.modulo = o.mod = function(h, C) {
    var y, R, G = this;
    return h = new T(h, C), !G.c || !h.s || h.c && !h.c[0] ? new T(NaN) : !h.c || G.c && !G.c[0] ? new T(G) : (x == 9 ? (R = h.s, h.s = 1, y = e(G, h, 0, 3), h.s = R, y.s *= R) : y = e(G, h, 0, x), h = G.minus(y.times(h)), !h.c[0] && x == 1 && (h.s = G.s), h);
  }, o.multipliedBy = o.times = function(h, C) {
    var y, R, G, N, M, S, p, w, k, O, te, q, P, ie, se, Q = this, Ae = Q.c, oe = (h = new T(h, C)).c;
    if (!Ae || !oe || !Ae[0] || !oe[0])
      return !Q.s || !h.s || Ae && !Ae[0] && !oe || oe && !oe[0] && !Ae ? h.c = h.e = h.s = null : (h.s *= Q.s, !Ae || !oe ? h.c = h.e = null : (h.c = [0], h.e = 0)), h;
    for (R = bitFloor(Q.e / LOG_BASE) + bitFloor(h.e / LOG_BASE), h.s *= Q.s, p = Ae.length, O = oe.length, p < O && (P = Ae, Ae = oe, oe = P, G = p, p = O, O = G), G = p + O, P = []; G--; P.push(0))
      ;
    for (ie = BASE, se = SQRT_BASE, G = O; --G >= 0; ) {
      for (y = 0, te = oe[G] % se, q = oe[G] / se | 0, M = p, N = G + M; N > G; )
        w = Ae[--M] % se, k = Ae[M] / se | 0, S = q * w + k * te, w = te * w + S % se * se + P[N] + y, y = (w / ie | 0) + (S / se | 0) + q * k, P[N--] = w % ie;
      P[N] = y;
    }
    return y ? ++R : P.splice(0, 1), L(h, P, R);
  }, o.negated = function() {
    var h = new T(this);
    return h.s = -h.s || null, h;
  }, o.plus = function(h, C) {
    var y, R = this, G = R.s;
    if (h = new T(h, C), C = h.s, !G || !C)
      return new T(NaN);
    if (G != C)
      return h.s = -C, R.minus(h);
    var N = R.e / LOG_BASE, M = h.e / LOG_BASE, S = R.c, p = h.c;
    if (!N || !M) {
      if (!S || !p)
        return new T(G / 0);
      if (!S[0] || !p[0])
        return p[0] ? h : new T(S[0] ? R : G * 0);
    }
    if (N = bitFloor(N), M = bitFloor(M), S = S.slice(), G = N - M) {
      for (G > 0 ? (M = N, y = p) : (G = -G, y = S), y.reverse(); G--; y.push(0))
        ;
      y.reverse();
    }
    for (G = S.length, C = p.length, G - C < 0 && (y = p, p = S, S = y, C = G), G = 0; C; )
      G = (S[--C] = S[C] + p[C] + G) / BASE | 0, S[C] = BASE === S[C] ? 0 : S[C] % BASE;
    return G && (S = [G].concat(S), ++M), L(h, S, M);
  }, o.precision = o.sd = function(h, C) {
    var y, R, G, N = this;
    if (h != null && h !== !!h)
      return intCheck(h, 1, MAX), C == null ? C = c : intCheck(C, 0, 8), Y(new T(N), h, C);
    if (!(y = N.c))
      return null;
    if (G = y.length - 1, R = G * LOG_BASE + 1, G = y[G]) {
      for (; G % 10 == 0; G /= 10, R--)
        ;
      for (G = y[0]; G >= 10; G /= 10, R++)
        ;
    }
    return h && N.e + 1 > R && (R = N.e + 1), R;
  }, o.shiftedBy = function(h) {
    return intCheck(h, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER), this.times("1e" + h);
  }, o.squareRoot = o.sqrt = function() {
    var h, C, y, R, G, N = this, M = N.c, S = N.s, p = N.e, w = a + 4, k = new T("0.5");
    if (S !== 1 || !M || !M[0])
      return new T(!S || S < 0 && (!M || M[0]) ? NaN : M ? N : 1 / 0);
    if (S = Math.sqrt(+W(N)), S == 0 || S == 1 / 0 ? (C = coeffToString(M), (C.length + p) % 2 == 0 && (C += "0"), S = Math.sqrt(+C), p = bitFloor((p + 1) / 2) - (p < 0 || p % 2), S == 1 / 0 ? C = "5e" + p : (C = S.toExponential(), C = C.slice(0, C.indexOf("e") + 1) + p), y = new T(C)) : y = new T(S + ""), y.c[0]) {
      for (p = y.e, S = p + w, S < 3 && (S = 0); ; )
        if (G = y, y = k.times(G.plus(e(N, G, w, 1))), coeffToString(G.c).slice(0, S) === (C = coeffToString(y.c)).slice(0, S))
          if (y.e < p && --S, C = C.slice(S - 3, S + 1), C == "9999" || !R && C == "4999") {
            if (!R && (Y(G, G.e + a + 2, 0), G.times(G).eq(N))) {
              y = G;
              break;
            }
            w += 4, S += 4, R = 1;
          } else {
            (!+C || !+C.slice(1) && C.charAt(0) == "5") && (Y(y, y.e + a + 2, 1), h = !y.times(y).eq(N));
            break;
          }
    }
    return Y(y, y.e + a + 1, c, h);
  }, o.toExponential = function(h, C) {
    return h != null && (intCheck(h, 0, MAX), h++), Z(this, h, C, 1);
  }, o.toFixed = function(h, C) {
    return h != null && (intCheck(h, 0, MAX), h = h + this.e + 1), Z(this, h, C);
  }, o.toFormat = function(h, C, y) {
    var R, G = this;
    if (y == null)
      h != null && C && typeof C == "object" ? (y = C, C = null) : h && typeof h == "object" ? (y = h, h = C = null) : y = v;
    else if (typeof y != "object")
      throw Error(bignumberError + "Argument not an object: " + y);
    if (R = G.toFixed(h, C), G.c) {
      var N, M = R.split("."), S = +y.groupSize, p = +y.secondaryGroupSize, w = y.groupSeparator || "", k = M[0], O = M[1], te = G.s < 0, q = te ? k.slice(1) : k, P = q.length;
      if (p && (N = S, S = p, p = N, P -= N), S > 0 && P > 0) {
        for (N = P % S || S, k = q.substr(0, N); N < P; N += S)
          k += w + q.substr(N, S);
        p > 0 && (k += w + q.slice(N)), te && (k = "-" + k);
      }
      R = O ? k + (y.decimalSeparator || "") + ((p = +y.fractionGroupSize) ? O.replace(new RegExp("\\d{" + p + "}\\B", "g"), "$&" + (y.fractionGroupSeparator || "")) : O) : k;
    }
    return (y.prefix || "") + R + (y.suffix || "");
  }, o.toFraction = function(h) {
    var C, y, R, G, N, M, S, p, w, k, O, te, q = this, P = q.c;
    if (h != null && (S = new T(h), !S.isInteger() && (S.c || S.s !== 1) || S.lt(s)))
      throw Error(bignumberError + "Argument " + (S.isInteger() ? "out of range: " : "not an integer: ") + W(S));
    if (!P)
      return new T(q);
    for (C = new T(s), w = y = new T(s), R = p = new T(s), te = coeffToString(P), N = C.e = te.length - q.e - 1, C.c[0] = POWS_TEN[(M = N % LOG_BASE) < 0 ? LOG_BASE + M : M], h = !h || S.comparedTo(C) > 0 ? N > 0 ? C : w : S, M = E, E = 1 / 0, S = new T(te), p.c[0] = 0; k = e(S, C, 0, 1), G = y.plus(k.times(R)), G.comparedTo(h) != 1; )
      y = R, R = G, w = p.plus(k.times(G = w)), p = G, C = S.minus(k.times(G = C)), S = G;
    return G = e(h.minus(y), R, 0, 1), p = p.plus(G.times(w)), y = y.plus(G.times(R)), p.s = w.s = q.s, N = N * 2, O = e(w, R, N, c).minus(q).abs().comparedTo(e(p, y, N, c).minus(q).abs()) < 1 ? [w, R] : [p, y], E = M, O;
  }, o.toNumber = function() {
    return +W(this);
  }, o.toPrecision = function(h, C) {
    return h != null && intCheck(h, 1, MAX), Z(this, h, C, 2);
  }, o.toString = function(h) {
    var C, y = this, R = y.s, G = y.e;
    return G === null ? R ? (C = "Infinity", R < 0 && (C = "-" + C)) : C = "NaN" : (h == null ? C = G <= l || G >= B ? toExponential(coeffToString(y.c), G) : toFixedPoint(coeffToString(y.c), G, "0") : h === 10 ? (y = Y(new T(y), a + G + 1, c), C = toFixedPoint(coeffToString(y.c), y.e, "0")) : (intCheck(h, 2, D.length, "Base"), C = A(toFixedPoint(coeffToString(y.c), G, "0"), 10, h, R, !0)), R < 0 && y.c[0] && (C = "-" + C)), C;
  }, o.valueOf = o.toJSON = function() {
    return W(this);
  }, o._isBigNumber = !0, o[Symbol.toStringTag] = "BigNumber", o[Symbol.for("nodejs.util.inspect.custom")] = o.valueOf, t != null && T.set(t), T;
}
function bitFloor(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function coeffToString(t) {
  for (var e, A, n = 1, o = t.length, s = t[0] + ""; n < o; ) {
    for (e = t[n++] + "", A = LOG_BASE - e.length; A--; e = "0" + e)
      ;
    s += e;
  }
  for (o = s.length; s.charCodeAt(--o) === 48; )
    ;
  return s.slice(0, o + 1 || 1);
}
function compare(t, e) {
  var A, n, o = t.c, s = e.c, a = t.s, c = e.s, l = t.e, B = e.e;
  if (!a || !c)
    return null;
  if (A = o && !o[0], n = s && !s[0], A || n)
    return A ? n ? 0 : -c : a;
  if (a != c)
    return a;
  if (A = a < 0, n = l == B, !o || !s)
    return n ? 0 : !o ^ A ? 1 : -1;
  if (!n)
    return l > B ^ A ? 1 : -1;
  for (c = (l = o.length) < (B = s.length) ? l : B, a = 0; a < c; a++)
    if (o[a] != s[a])
      return o[a] > s[a] ^ A ? 1 : -1;
  return l == B ? 0 : l > B ^ A ? 1 : -1;
}
function intCheck(t, e, A, n) {
  if (t < e || t > A || t !== mathfloor(t))
    throw Error(bignumberError + (n || "Argument") + (typeof t == "number" ? t < e || t > A ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function isOdd(t) {
  var e = t.c.length - 1;
  return bitFloor(t.e / LOG_BASE) == e && t.c[e] % 2 != 0;
}
function toExponential(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(t, e, A) {
  var n, o;
  if (e < 0) {
    for (o = A + "."; ++e; o += A)
      ;
    t = o + t;
  } else if (n = t.length, ++e > n) {
    for (o = A, e -= n; --e; o += A)
      ;
    t += o;
  } else
    e < n && (t = t.slice(0, e) + "." + t.slice(e));
  return t;
}
var BigNumber = clone(), bignumber = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BigNumber,
  default: BigNumber
}), decoder_asm = function t(e, A, n) {
  var o = new e.Uint8Array(n), s = A.pushInt, a = A.pushInt32, c = A.pushInt32Neg, l = A.pushInt64, B = A.pushInt64Neg, g = A.pushFloat, E = A.pushFloatSingle, I = A.pushFloatDouble, x = A.pushTrue, U = A.pushFalse, v = A.pushUndefined, D = A.pushNull, T = A.pushInfinity, Z = A.pushInfinityNeg, j = A.pushNaN, L = A.pushNaNNeg, Y = A.pushArrayStart, W = A.pushArrayStartFixed, h = A.pushArrayStartFixed32, C = A.pushArrayStartFixed64, y = A.pushObjectStart, R = A.pushObjectStartFixed, G = A.pushObjectStartFixed32, N = A.pushObjectStartFixed64, M = A.pushByteString, S = A.pushByteStringStart, p = A.pushUtf8String, w = A.pushUtf8StringStart, k = A.pushSimpleUnassigned, O = A.pushTagStart, te = A.pushTagStart4, q = A.pushTagStart8, P = A.pushTagUnassigned, ie = A.pushBreak, se = e.Math.pow, Q = 0, Ae = 0, oe = 0;
  function ue(F) {
    for (F = F | 0, Q = 0, Ae = F; (Q | 0) < (Ae | 0) && (oe = Me[o[Q] & 255](o[Q] | 0) | 0, !((oe | 0) > 0)); )
      ;
    return oe | 0;
  }
  function X(F) {
    return F = F | 0, ((Q | 0) + (F | 0) | 0) < (Ae | 0) ? 0 : 1;
  }
  function ee(F) {
    return F = F | 0, o[F | 0] << 8 | o[F + 1 | 0] | 0;
  }
  function ae(F) {
    return F = F | 0, o[F | 0] << 24 | o[F + 1 | 0] << 16 | o[F + 2 | 0] << 8 | o[F + 3 | 0] | 0;
  }
  function ce(F) {
    return F = F | 0, s(F | 0), Q = Q + 1 | 0, 0;
  }
  function z(F) {
    return F = F | 0, X(1) | 0 ? 1 : (s(o[Q + 1 | 0] | 0), Q = Q + 2 | 0, 0);
  }
  function pe(F) {
    return F = F | 0, X(2) | 0 ? 1 : (s(
      ee(Q + 1 | 0) | 0
    ), Q = Q + 3 | 0, 0);
  }
  function re(F) {
    return F = F | 0, X(4) | 0 ? 1 : (a(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0
    ), Q = Q + 5 | 0, 0);
  }
  function d(F) {
    return F = F | 0, X(8) | 0 ? 1 : (l(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0,
      ee(Q + 5 | 0) | 0,
      ee(Q + 7 | 0) | 0
    ), Q = Q + 9 | 0, 0);
  }
  function u(F) {
    return F = F | 0, s(-1 - (F - 32 | 0) | 0), Q = Q + 1 | 0, 0;
  }
  function f(F) {
    return F = F | 0, X(1) | 0 ? 1 : (s(
      -1 - (o[Q + 1 | 0] | 0) | 0
    ), Q = Q + 2 | 0, 0);
  }
  function m(F) {
    F = F | 0;
    var ge = 0;
    return X(2) | 0 ? 1 : (ge = ee(Q + 1 | 0) | 0, s(-1 - (ge | 0) | 0), Q = Q + 3 | 0, 0);
  }
  function H(F) {
    return F = F | 0, X(4) | 0 ? 1 : (c(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0
    ), Q = Q + 5 | 0, 0);
  }
  function V(F) {
    return F = F | 0, X(8) | 0 ? 1 : (B(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0,
      ee(Q + 5 | 0) | 0,
      ee(Q + 7 | 0) | 0
    ), Q = Q + 9 | 0, 0);
  }
  function $(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return Ce = F - 64 | 0, X(Ce | 0) | 0 ? 1 : (ge = Q + 1 | 0, Qe = (Q + 1 | 0) + (Ce | 0) | 0, M(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function he(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(1) | 0 || (Ce = o[Q + 1 | 0] | 0, ge = Q + 2 | 0, Qe = (Q + 2 | 0) + (Ce | 0) | 0, X(Ce + 1 | 0) | 0) ? 1 : (M(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function ye(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(2) | 0 || (Ce = ee(Q + 1 | 0) | 0, ge = Q + 3 | 0, Qe = (Q + 3 | 0) + (Ce | 0) | 0, X(Ce + 2 | 0) | 0) ? 1 : (M(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function me(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(4) | 0 || (Ce = ae(Q + 1 | 0) | 0, ge = Q + 5 | 0, Qe = (Q + 5 | 0) + (Ce | 0) | 0, X(Ce + 4 | 0) | 0) ? 1 : (M(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function Ge(F) {
    return F = F | 0, 1;
  }
  function xe(F) {
    return F = F | 0, S(), Q = Q + 1 | 0, 0;
  }
  function Ee(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return Ce = F - 96 | 0, X(Ce | 0) | 0 ? 1 : (ge = Q + 1 | 0, Qe = (Q + 1 | 0) + (Ce | 0) | 0, p(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function Te(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(1) | 0 || (Ce = o[Q + 1 | 0] | 0, ge = Q + 2 | 0, Qe = (Q + 2 | 0) + (Ce | 0) | 0, X(Ce + 1 | 0) | 0) ? 1 : (p(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function le(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(2) | 0 || (Ce = ee(Q + 1 | 0) | 0, ge = Q + 3 | 0, Qe = (Q + 3 | 0) + (Ce | 0) | 0, X(Ce + 2 | 0) | 0) ? 1 : (p(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function qe(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 0;
    return X(4) | 0 || (Ce = ae(Q + 1 | 0) | 0, ge = Q + 5 | 0, Qe = (Q + 5 | 0) + (Ce | 0) | 0, X(Ce + 4 | 0) | 0) ? 1 : (p(ge | 0, Qe | 0), Q = Qe | 0, 0);
  }
  function Ue(F) {
    return F = F | 0, 1;
  }
  function Oe(F) {
    return F = F | 0, w(), Q = Q + 1 | 0, 0;
  }
  function ve(F) {
    return F = F | 0, W(F - 128 | 0), Q = Q + 1 | 0, 0;
  }
  function je(F) {
    return F = F | 0, X(1) | 0 ? 1 : (W(o[Q + 1 | 0] | 0), Q = Q + 2 | 0, 0);
  }
  function Ve(F) {
    return F = F | 0, X(2) | 0 ? 1 : (W(
      ee(Q + 1 | 0) | 0
    ), Q = Q + 3 | 0, 0);
  }
  function Ze(F) {
    return F = F | 0, X(4) | 0 ? 1 : (h(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0
    ), Q = Q + 5 | 0, 0);
  }
  function Ke(F) {
    return F = F | 0, X(8) | 0 ? 1 : (C(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0,
      ee(Q + 5 | 0) | 0,
      ee(Q + 7 | 0) | 0
    ), Q = Q + 9 | 0, 0);
  }
  function We(F) {
    return F = F | 0, Y(), Q = Q + 1 | 0, 0;
  }
  function be(F) {
    F = F | 0;
    var ge = 0;
    return ge = F - 160 | 0, X(ge | 0) | 0 ? 1 : (R(ge | 0), Q = Q + 1 | 0, 0);
  }
  function Pe(F) {
    return F = F | 0, X(1) | 0 ? 1 : (R(o[Q + 1 | 0] | 0), Q = Q + 2 | 0, 0);
  }
  function De(F) {
    return F = F | 0, X(2) | 0 ? 1 : (R(
      ee(Q + 1 | 0) | 0
    ), Q = Q + 3 | 0, 0);
  }
  function He(F) {
    return F = F | 0, X(4) | 0 ? 1 : (G(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0
    ), Q = Q + 5 | 0, 0);
  }
  function Ye(F) {
    return F = F | 0, X(8) | 0 ? 1 : (N(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0,
      ee(Q + 5 | 0) | 0,
      ee(Q + 7 | 0) | 0
    ), Q = Q + 9 | 0, 0);
  }
  function $e(F) {
    return F = F | 0, y(), Q = Q + 1 | 0, 0;
  }
  function Ne(F) {
    return F = F | 0, O(F - 192 | 0 | 0), Q = Q + 1 | 0, 0;
  }
  function ze(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function it(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function Xe(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function et(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function Fe(F) {
    return F = F | 0, O(F - 192 | 0 | 0), Q = Q + 1 | 0, 0;
  }
  function ot(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function tt(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function st(F) {
    return F = F | 0, O(F | 0), Q = Q + 1 | 0, 0;
  }
  function rt(F) {
    return F = F | 0, X(1) | 0 ? 1 : (O(o[Q + 1 | 0] | 0), Q = Q + 2 | 0, 0);
  }
  function At(F) {
    return F = F | 0, X(2) | 0 ? 1 : (O(
      ee(Q + 1 | 0) | 0
    ), Q = Q + 3 | 0, 0);
  }
  function nt(F) {
    return F = F | 0, X(4) | 0 ? 1 : (te(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0
    ), Q = Q + 5 | 0, 0);
  }
  function b(F) {
    return F = F | 0, X(8) | 0 ? 1 : (q(
      ee(Q + 1 | 0) | 0,
      ee(Q + 3 | 0) | 0,
      ee(Q + 5 | 0) | 0,
      ee(Q + 7 | 0) | 0
    ), Q = Q + 9 | 0, 0);
  }
  function J(F) {
    return F = F | 0, k((F | 0) - 224 | 0), Q = Q + 1 | 0, 0;
  }
  function ne(F) {
    return F = F | 0, U(), Q = Q + 1 | 0, 0;
  }
  function fe(F) {
    return F = F | 0, x(), Q = Q + 1 | 0, 0;
  }
  function we(F) {
    return F = F | 0, D(), Q = Q + 1 | 0, 0;
  }
  function Se(F) {
    return F = F | 0, v(), Q = Q + 1 | 0, 0;
  }
  function de(F) {
    return F = F | 0, X(1) | 0 ? 1 : (k(o[Q + 1 | 0] | 0), Q = Q + 2 | 0, 0);
  }
  function Ie(F) {
    F = F | 0;
    var ge = 0, Qe = 0, Ce = 1, Je = 0, Le = 0, at = 0;
    return X(2) | 0 ? 1 : (ge = o[Q + 1 | 0] | 0, Qe = o[Q + 2 | 0] | 0, (ge | 0) & 128 && (Ce = -1), Je = +(((ge | 0) & 124) >> 2), Le = +(((ge | 0) & 3) << 8 | Qe), +Je == 0 ? g(+(+Ce * 5960464477539063e-23 * +Le)) : +Je == 31 ? +Ce == 1 ? +Le > 0 ? j() : T() : +Le > 0 ? L() : Z() : g(+(+Ce * se(2, +(+Je - 25)) * +(1024 + Le))), Q = Q + 3 | 0, 0);
  }
  function Re(F) {
    return F = F | 0, X(4) | 0 ? 1 : (E(
      o[Q + 1 | 0] | 0,
      o[Q + 2 | 0] | 0,
      o[Q + 3 | 0] | 0,
      o[Q + 4 | 0] | 0
    ), Q = Q + 5 | 0, 0);
  }
  function _e(F) {
    return F = F | 0, X(8) | 0 ? 1 : (I(
      o[Q + 1 | 0] | 0,
      o[Q + 2 | 0] | 0,
      o[Q + 3 | 0] | 0,
      o[Q + 4 | 0] | 0,
      o[Q + 5 | 0] | 0,
      o[Q + 6 | 0] | 0,
      o[Q + 7 | 0] | 0,
      o[Q + 8 | 0] | 0
    ), Q = Q + 9 | 0, 0);
  }
  function Be(F) {
    return F = F | 0, 1;
  }
  function ke(F) {
    return F = F | 0, ie(), Q = Q + 1 | 0, 0;
  }
  var Me = [
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    ce,
    z,
    pe,
    re,
    d,
    Be,
    Be,
    Be,
    Be,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    u,
    f,
    m,
    H,
    V,
    Be,
    Be,
    Be,
    Be,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    $,
    he,
    ye,
    me,
    Ge,
    Be,
    Be,
    Be,
    xe,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Ee,
    Te,
    le,
    qe,
    Ue,
    Be,
    Be,
    Be,
    Oe,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    ve,
    je,
    Ve,
    Ze,
    Ke,
    Be,
    Be,
    Be,
    We,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    be,
    Pe,
    De,
    He,
    Ye,
    Be,
    Be,
    Be,
    $e,
    Ne,
    Ne,
    Ne,
    Ne,
    Ne,
    Ne,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    Fe,
    rt,
    At,
    nt,
    b,
    Be,
    Be,
    Be,
    Be,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    J,
    ne,
    fe,
    we,
    Se,
    de,
    Ie,
    Re,
    _e,
    Be,
    Be,
    Be,
    ke
  ];
  return {
    parse: ue
  };
}, require$$2 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(bignumber);
const Bignumber = require$$2.BigNumber;
var MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
}, TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  REGEXP: 35,
  MIME: 36
}, NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
}, SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
}, SYMS = {
  NULL: Symbol("null"),
  UNDEFINED: Symbol("undef"),
  PARENT: Symbol("parent"),
  BREAK: Symbol("break"),
  STREAM: Symbol("stream")
}, SHIFT32 = Math.pow(2, 32), SHIFT16 = Math.pow(2, 16), MAX_SAFE_HIGH = 2097151, NEG_ONE = new Bignumber(-1), TEN = new Bignumber(10), TWO = new Bignumber(2), PARENT = {
  ARRAY: 0,
  OBJECT: 1,
  MAP: 2,
  TAG: 3,
  BYTE_STRING: 4,
  UTF8_STRING: 5
}, constants = {
  MT,
  TAG,
  NUMBYTES,
  SIMPLE,
  SYMS,
  SHIFT32,
  SHIFT16,
  MAX_SAFE_HIGH,
  NEG_ONE,
  TEN,
  TWO,
  PARENT
}, utils = createCommonjsModule(function(t, e) {
  const { Buffer: A } = require$$0, n = require$$2.BigNumber, o = constants.SHIFT32, s = constants.SHIFT16, a = 2097151;
  e.parseHalf = function(B) {
    var g, E, I;
    return I = B[0] & 128 ? -1 : 1, g = (B[0] & 124) >> 2, E = (B[0] & 3) << 8 | B[1], g ? g === 31 ? I * (E ? 0 / 0 : 1 / 0) : I * Math.pow(2, g - 25) * (1024 + E) : I * 5960464477539063e-23 * E;
  };
  function c(l) {
    return l < 16 ? "0" + l.toString(16) : l.toString(16);
  }
  e.arrayBufferToBignumber = function(l) {
    const B = l.byteLength;
    let g = "";
    for (let E = 0; E < B; E++)
      g += c(l[E]);
    return new n(g, 16);
  }, e.buildMap = (l) => {
    const B = /* @__PURE__ */ new Map(), g = Object.keys(l), E = g.length;
    for (let I = 0; I < E; I++)
      B.set(g[I], l[g[I]]);
    return B;
  }, e.buildInt32 = (l, B) => l * s + B, e.buildInt64 = (l, B, g, E) => {
    const I = e.buildInt32(l, B), x = e.buildInt32(g, E);
    return I > a ? new n(I).times(o).plus(x) : I * o + x;
  }, e.writeHalf = function(B, g) {
    const E = A.allocUnsafe(4);
    E.writeFloatBE(g, 0);
    const I = E.readUInt32BE(0);
    if ((I & 8191) !== 0)
      return !1;
    var x = I >> 16 & 32768;
    const U = I >> 23 & 255, v = I & 8388607;
    if (U >= 113 && U <= 142)
      x += (U - 112 << 10) + (v >> 13);
    else if (U >= 103 && U < 113) {
      if (v & (1 << 126 - U) - 1)
        return !1;
      x += v + 8388608 >> 126 - U;
    } else
      return !1;
    return B.writeUInt16BE(x, 0), !0;
  }, e.keySorter = function(l, B) {
    var g = l[0].byteLength, E = B[0].byteLength;
    return g > E ? 1 : E > g ? -1 : l[0].compare(B[0]);
  }, e.isNegativeZero = (l) => l === 0 && 1 / l < 0, e.nextPowerOf2 = (l) => {
    let B = 0;
    if (l && !(l & l - 1))
      return l;
    for (; l !== 0; )
      l >>= 1, B += 1;
    return 1 << B;
  };
});
const MT$1 = constants.MT, SIMPLE$1 = constants.SIMPLE, SYMS$1 = constants.SYMS;
class Simple {
  constructor(e) {
    if (typeof e != "number")
      throw new Error("Invalid Simple type: " + typeof e);
    if (e < 0 || e > 255 || (e | 0) !== e)
      throw new Error("value must be a small positive integer: " + e);
    this.value = e;
  }
  toString() {
    return "simple(" + this.value + ")";
  }
  inspect() {
    return "simple(" + this.value + ")";
  }
  encodeCBOR(e) {
    return e._pushInt(this.value, MT$1.SIMPLE_FLOAT);
  }
  static isSimple(e) {
    return e instanceof Simple;
  }
  static decode(e, A) {
    switch (A == null && (A = !0), e) {
      case SIMPLE$1.FALSE:
        return !1;
      case SIMPLE$1.TRUE:
        return !0;
      case SIMPLE$1.NULL:
        return A ? null : SYMS$1.NULL;
      case SIMPLE$1.UNDEFINED:
        return A ? void 0 : SYMS$1.UNDEFINED;
      case -1:
        if (!A)
          throw new Error("Invalid BREAK");
        return SYMS$1.BREAK;
      default:
        return new Simple(e);
    }
  }
}
var simple = Simple;
class Tagged {
  constructor(e, A, n) {
    if (this.tag = e, this.value = A, this.err = n, typeof this.tag != "number")
      throw new Error("Invalid tag type (" + typeof this.tag + ")");
    if (this.tag < 0 || (this.tag | 0) !== this.tag)
      throw new Error("Tag must be a positive integer: " + this.tag);
  }
  toString() {
    return `${this.tag}(${JSON.stringify(this.value)})`;
  }
  encodeCBOR(e) {
    return e._pushTag(this.tag), e.pushAny(this.value);
  }
  convert(e) {
    var A, n;
    if (n = e != null ? e[this.tag] : void 0, typeof n != "function" && (n = Tagged["_tag" + this.tag], typeof n != "function"))
      return this;
    try {
      return n.call(Tagged, this.value);
    } catch (o) {
      return A = o, this.err = A, this;
    }
  }
}
var tagged = Tagged;
const defaultBase = self.location ? self.location.protocol + "//" + self.location.host : "", URL$1 = self.URL;
class URLWithLegacySupport {
  constructor(e = "", A = defaultBase) {
    this.super = new URL$1(e, A), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null;
  }
  get hash() {
    return this.super.hash;
  }
  get host() {
    return this.super.host;
  }
  get hostname() {
    return this.super.hostname;
  }
  get href() {
    return this.super.href;
  }
  get origin() {
    return this.super.origin;
  }
  get password() {
    return this.super.password;
  }
  get pathname() {
    return this.super.pathname;
  }
  get port() {
    return this.super.port;
  }
  get protocol() {
    return this.super.protocol;
  }
  get search() {
    return this.super.search;
  }
  get searchParams() {
    return this.super.searchParams;
  }
  get username() {
    return this.super.username;
  }
  set hash(e) {
    this.super.hash = e;
  }
  set host(e) {
    this.super.host = e;
  }
  set hostname(e) {
    this.super.hostname = e;
  }
  set href(e) {
    this.super.href = e;
  }
  set origin(e) {
    this.super.origin = e;
  }
  set password(e) {
    this.super.password = e;
  }
  set pathname(e) {
    this.super.pathname = e;
  }
  set port(e) {
    this.super.port = e;
  }
  set protocol(e) {
    this.super.protocol = e;
  }
  set search(e) {
    this.super.search = e;
  }
  set searchParams(e) {
    this.super.searchParams = e;
  }
  set username(e) {
    this.super.username = e;
  }
  createObjectURL(e) {
    return this.super.createObjectURL(e);
  }
  revokeObjectURL(e) {
    this.super.revokeObjectURL(e);
  }
  toJSON() {
    return this.super.toJSON();
  }
  toString() {
    return this.super.toString();
  }
  format() {
    return this.toString();
  }
}
function format(t) {
  if (typeof t == "string")
    return new URL$1(t).toString();
  if (!(t instanceof URL$1)) {
    const e = t.username && t.password ? `${t.username}:${t.password}@` : "", A = t.auth ? t.auth + "@" : "", n = t.port ? ":" + t.port : "", o = t.protocol ? t.protocol + "//" : "", s = t.host || "", a = t.hostname || "", c = t.search || (t.query ? "?" + t.query : ""), l = t.hash || "", B = t.pathname || "", g = t.path || B + c;
    return `${o}${e || A}${s || a + n}${g}${l}`;
  }
}
var urlBrowser = {
  URLWithLegacySupport,
  URLSearchParams: self.URLSearchParams,
  defaultBase,
  format
};
const { URLWithLegacySupport: URLWithLegacySupport$1, format: format$1 } = urlBrowser;
var relative = (t, e = {}, A = {}, n) => {
  let o = e.protocol ? e.protocol.replace(":", "") : "http";
  o = (A[o] || n || o) + ":";
  let s;
  try {
    s = new URLWithLegacySupport$1(t);
  } catch {
    s = {};
  }
  const a = Object.assign({}, e, {
    protocol: o || s.protocol,
    host: e.host || s.host
  });
  return new URLWithLegacySupport$1(t, format$1(a)).toString();
};
const {
  URLWithLegacySupport: URLWithLegacySupport$2,
  format: format$2,
  URLSearchParams,
  defaultBase: defaultBase$1
} = urlBrowser;
var isoUrl = {
  URL: URLWithLegacySupport$2,
  URLSearchParams,
  format: format$2,
  relative,
  defaultBase: defaultBase$1
};
const { Buffer: Buffer$2 } = require$$0, Bignumber$1 = require$$2.BigNumber, { URL: URL$2 } = isoUrl;
class Decoder {
  constructor(e) {
    e = e || {}, !e.size || e.size < 65536 ? e.size = 65536 : e.size = utils.nextPowerOf2(e.size), this._heap = new ArrayBuffer(e.size), this._heap8 = new Uint8Array(this._heap), this._buffer = Buffer$2.from(this._heap), this._reset(), this._knownTags = Object.assign({
      0: (A) => new Date(A),
      1: (A) => new Date(A * 1e3),
      2: (A) => utils.arrayBufferToBignumber(A),
      3: (A) => constants.NEG_ONE.minus(utils.arrayBufferToBignumber(A)),
      4: (A) => constants.TEN.pow(A[0]).times(A[1]),
      5: (A) => constants.TWO.pow(A[0]).times(A[1]),
      32: (A) => new URL$2(A),
      35: (A) => new RegExp(A)
    }, e.tags), this.parser = decoder_asm(commonjsGlobal, {
      log: console.log.bind(console),
      pushInt: this.pushInt.bind(this),
      pushInt32: this.pushInt32.bind(this),
      pushInt32Neg: this.pushInt32Neg.bind(this),
      pushInt64: this.pushInt64.bind(this),
      pushInt64Neg: this.pushInt64Neg.bind(this),
      pushFloat: this.pushFloat.bind(this),
      pushFloatSingle: this.pushFloatSingle.bind(this),
      pushFloatDouble: this.pushFloatDouble.bind(this),
      pushTrue: this.pushTrue.bind(this),
      pushFalse: this.pushFalse.bind(this),
      pushUndefined: this.pushUndefined.bind(this),
      pushNull: this.pushNull.bind(this),
      pushInfinity: this.pushInfinity.bind(this),
      pushInfinityNeg: this.pushInfinityNeg.bind(this),
      pushNaN: this.pushNaN.bind(this),
      pushNaNNeg: this.pushNaNNeg.bind(this),
      pushArrayStart: this.pushArrayStart.bind(this),
      pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
      pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
      pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
      pushObjectStart: this.pushObjectStart.bind(this),
      pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
      pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
      pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
      pushByteString: this.pushByteString.bind(this),
      pushByteStringStart: this.pushByteStringStart.bind(this),
      pushUtf8String: this.pushUtf8String.bind(this),
      pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
      pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
      pushTagUnassigned: this.pushTagUnassigned.bind(this),
      pushTagStart: this.pushTagStart.bind(this),
      pushTagStart4: this.pushTagStart4.bind(this),
      pushTagStart8: this.pushTagStart8.bind(this),
      pushBreak: this.pushBreak.bind(this)
    }, this._heap);
  }
  get _depth() {
    return this._parents.length;
  }
  get _currentParent() {
    return this._parents[this._depth - 1];
  }
  get _ref() {
    return this._currentParent.ref;
  }
  _closeParent() {
    var e = this._parents.pop();
    if (e.length > 0)
      throw new Error(`Missing ${e.length} elements`);
    switch (e.type) {
      case constants.PARENT.TAG:
        this._push(
          this.createTag(e.ref[0], e.ref[1])
        );
        break;
      case constants.PARENT.BYTE_STRING:
        this._push(this.createByteString(e.ref, e.length));
        break;
      case constants.PARENT.UTF8_STRING:
        this._push(this.createUtf8String(e.ref, e.length));
        break;
      case constants.PARENT.MAP:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createMap(e.ref, e.length));
        break;
      case constants.PARENT.OBJECT:
        if (e.values % 2 > 0)
          throw new Error("Odd number of elements in the map");
        this._push(this.createObject(e.ref, e.length));
        break;
      case constants.PARENT.ARRAY:
        this._push(this.createArray(e.ref, e.length));
        break;
    }
    this._currentParent && this._currentParent.type === constants.PARENT.TAG && this._dec();
  }
  _dec() {
    const e = this._currentParent;
    e.length < 0 || (e.length--, e.length === 0 && this._closeParent());
  }
  _push(e, A) {
    const n = this._currentParent;
    switch (n.values++, n.type) {
      case constants.PARENT.ARRAY:
      case constants.PARENT.BYTE_STRING:
      case constants.PARENT.UTF8_STRING:
        n.length > -1 ? this._ref[this._ref.length - n.length] = e : this._ref.push(e), this._dec();
        break;
      case constants.PARENT.OBJECT:
        n.tmpKey != null ? (this._ref[n.tmpKey] = e, n.tmpKey = null, this._dec()) : (n.tmpKey = e, typeof n.tmpKey != "string" && (n.type = constants.PARENT.MAP, n.ref = utils.buildMap(n.ref)));
        break;
      case constants.PARENT.MAP:
        n.tmpKey != null ? (this._ref.set(n.tmpKey, e), n.tmpKey = null, this._dec()) : n.tmpKey = e;
        break;
      case constants.PARENT.TAG:
        this._ref.push(e), A || this._dec();
        break;
      default:
        throw new Error("Unknown parent type");
    }
  }
  _createParent(e, A, n) {
    this._parents[this._depth] = {
      type: A,
      length: n,
      ref: e,
      values: 0,
      tmpKey: null
    };
  }
  _reset() {
    this._res = [], this._parents = [{
      type: constants.PARENT.ARRAY,
      length: -1,
      ref: this._res,
      values: 0,
      tmpKey: null
    }];
  }
  createTag(e, A) {
    const n = this._knownTags[e];
    return n ? n(A) : new tagged(e, A);
  }
  createMap(e, A) {
    return e;
  }
  createObject(e, A) {
    return e;
  }
  createArray(e, A) {
    return e;
  }
  createByteString(e, A) {
    return Buffer$2.concat(e);
  }
  createByteStringFromHeap(e, A) {
    return e === A ? Buffer$2.alloc(0) : Buffer$2.from(this._heap.slice(e, A));
  }
  createInt(e) {
    return e;
  }
  createInt32(e, A) {
    return utils.buildInt32(e, A);
  }
  createInt64(e, A, n, o) {
    return utils.buildInt64(e, A, n, o);
  }
  createFloat(e) {
    return e;
  }
  createFloatSingle(e, A, n, o) {
    return ieee754.read([e, A, n, o], 0, !1, 23, 4);
  }
  createFloatDouble(e, A, n, o, s, a, c, l) {
    return ieee754.read([e, A, n, o, s, a, c, l], 0, !1, 52, 8);
  }
  createInt32Neg(e, A) {
    return -1 - utils.buildInt32(e, A);
  }
  createInt64Neg(e, A, n, o) {
    const s = utils.buildInt32(e, A), a = utils.buildInt32(n, o);
    return s > constants.MAX_SAFE_HIGH ? constants.NEG_ONE.minus(new Bignumber$1(s).times(constants.SHIFT32).plus(a)) : -1 - (s * constants.SHIFT32 + a);
  }
  createTrue() {
    return !0;
  }
  createFalse() {
    return !1;
  }
  createNull() {
    return null;
  }
  createUndefined() {
  }
  createInfinity() {
    return 1 / 0;
  }
  createInfinityNeg() {
    return -1 / 0;
  }
  createNaN() {
    return NaN;
  }
  createNaNNeg() {
    return NaN;
  }
  createUtf8String(e, A) {
    return e.join("");
  }
  createUtf8StringFromHeap(e, A) {
    return e === A ? "" : this._buffer.toString("utf8", e, A);
  }
  createSimpleUnassigned(e) {
    return new simple(e);
  }
  pushInt(e) {
    this._push(this.createInt(e));
  }
  pushInt32(e, A) {
    this._push(this.createInt32(e, A));
  }
  pushInt64(e, A, n, o) {
    this._push(this.createInt64(e, A, n, o));
  }
  pushFloat(e) {
    this._push(this.createFloat(e));
  }
  pushFloatSingle(e, A, n, o) {
    this._push(this.createFloatSingle(e, A, n, o));
  }
  pushFloatDouble(e, A, n, o, s, a, c, l) {
    this._push(this.createFloatDouble(e, A, n, o, s, a, c, l));
  }
  pushInt32Neg(e, A) {
    this._push(this.createInt32Neg(e, A));
  }
  pushInt64Neg(e, A, n, o) {
    this._push(this.createInt64Neg(e, A, n, o));
  }
  pushTrue() {
    this._push(this.createTrue());
  }
  pushFalse() {
    this._push(this.createFalse());
  }
  pushNull() {
    this._push(this.createNull());
  }
  pushUndefined() {
    this._push(this.createUndefined());
  }
  pushInfinity() {
    this._push(this.createInfinity());
  }
  pushInfinityNeg() {
    this._push(this.createInfinityNeg());
  }
  pushNaN() {
    this._push(this.createNaN());
  }
  pushNaNNeg() {
    this._push(this.createNaNNeg());
  }
  pushArrayStart() {
    this._createParent([], constants.PARENT.ARRAY, -1);
  }
  pushArrayStartFixed(e) {
    this._createArrayStartFixed(e);
  }
  pushArrayStartFixed32(e, A) {
    const n = utils.buildInt32(e, A);
    this._createArrayStartFixed(n);
  }
  pushArrayStartFixed64(e, A, n, o) {
    const s = utils.buildInt64(e, A, n, o);
    this._createArrayStartFixed(s);
  }
  pushObjectStart() {
    this._createObjectStartFixed(-1);
  }
  pushObjectStartFixed(e) {
    this._createObjectStartFixed(e);
  }
  pushObjectStartFixed32(e, A) {
    const n = utils.buildInt32(e, A);
    this._createObjectStartFixed(n);
  }
  pushObjectStartFixed64(e, A, n, o) {
    const s = utils.buildInt64(e, A, n, o);
    this._createObjectStartFixed(s);
  }
  pushByteStringStart() {
    this._parents[this._depth] = {
      type: constants.PARENT.BYTE_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushByteString(e, A) {
    this._push(this.createByteStringFromHeap(e, A));
  }
  pushUtf8StringStart() {
    this._parents[this._depth] = {
      type: constants.PARENT.UTF8_STRING,
      length: -1,
      ref: [],
      values: 0,
      tmpKey: null
    };
  }
  pushUtf8String(e, A) {
    this._push(this.createUtf8StringFromHeap(e, A));
  }
  pushSimpleUnassigned(e) {
    this._push(this.createSimpleUnassigned(e));
  }
  pushTagStart(e) {
    this._parents[this._depth] = {
      type: constants.PARENT.TAG,
      length: 1,
      ref: [e]
    };
  }
  pushTagStart4(e, A) {
    this.pushTagStart(utils.buildInt32(e, A));
  }
  pushTagStart8(e, A, n, o) {
    this.pushTagStart(utils.buildInt64(e, A, n, o));
  }
  pushTagUnassigned(e) {
    this._push(this.createTag(e));
  }
  pushBreak() {
    if (this._currentParent.length > -1)
      throw new Error("Unexpected break");
    this._closeParent();
  }
  _createObjectStartFixed(e) {
    if (e === 0) {
      this._push(this.createObject({}));
      return;
    }
    this._createParent({}, constants.PARENT.OBJECT, e);
  }
  _createArrayStartFixed(e) {
    if (e === 0) {
      this._push(this.createArray([]));
      return;
    }
    this._createParent(new Array(e), constants.PARENT.ARRAY, e);
  }
  _decode(e) {
    if (e.byteLength === 0)
      throw new Error("Input too short");
    this._reset(), this._heap8.set(e);
    const A = this.parser.parse(e.byteLength);
    if (this._depth > 1) {
      for (; this._currentParent.length === 0; )
        this._closeParent();
      if (this._depth > 1)
        throw new Error("Undeterminated nesting");
    }
    if (A > 0)
      throw new Error("Failed to parse");
    if (this._res.length === 0)
      throw new Error("No valid result");
  }
  decodeFirst(e) {
    return this._decode(e), this._res[0];
  }
  decodeAll(e) {
    return this._decode(e), this._res;
  }
  static decode(e, A) {
    return typeof e == "string" && (e = Buffer$2.from(e, A || "hex")), new Decoder({ size: e.length }).decodeFirst(e);
  }
  static decodeAll(e, A) {
    return typeof e == "string" && (e = Buffer$2.from(e, A || "hex")), new Decoder({ size: e.length }).decodeAll(e);
  }
}
Decoder.decodeFirst = Decoder.decode;
var decoder = Decoder;
const { Buffer: Buffer$3 } = require$$0;
class Diagnose extends decoder {
  createTag(e, A) {
    return `${e}(${A})`;
  }
  createInt(e) {
    return super.createInt(e).toString();
  }
  createInt32(e, A) {
    return super.createInt32(e, A).toString();
  }
  createInt64(e, A, n, o) {
    return super.createInt64(e, A, n, o).toString();
  }
  createInt32Neg(e, A) {
    return super.createInt32Neg(e, A).toString();
  }
  createInt64Neg(e, A, n, o) {
    return super.createInt64Neg(e, A, n, o).toString();
  }
  createTrue() {
    return "true";
  }
  createFalse() {
    return "false";
  }
  createFloat(e) {
    const A = super.createFloat(e);
    return utils.isNegativeZero(e) ? "-0_1" : `${A}_1`;
  }
  createFloatSingle(e, A, n, o) {
    return `${super.createFloatSingle(e, A, n, o)}_2`;
  }
  createFloatDouble(e, A, n, o, s, a, c, l) {
    return `${super.createFloatDouble(e, A, n, o, s, a, c, l)}_3`;
  }
  createByteString(e, A) {
    const n = e.join(", ");
    return A === -1 ? `(_ ${n})` : `h'${n}`;
  }
  createByteStringFromHeap(e, A) {
    return `h'${Buffer$3.from(
      super.createByteStringFromHeap(e, A)
    ).toString("hex")}'`;
  }
  createInfinity() {
    return "Infinity_1";
  }
  createInfinityNeg() {
    return "-Infinity_1";
  }
  createNaN() {
    return "NaN_1";
  }
  createNaNNeg() {
    return "-NaN_1";
  }
  createNull() {
    return "null";
  }
  createUndefined() {
    return "undefined";
  }
  createSimpleUnassigned(e) {
    return `simple(${e})`;
  }
  createArray(e, A) {
    const n = super.createArray(e, A);
    return A === -1 ? `[_ ${n.join(", ")}]` : `[${n.join(", ")}]`;
  }
  createMap(e, A) {
    const n = super.createMap(e), o = Array.from(n.keys()).reduce(collectObject(n), "");
    return A === -1 ? `{_ ${o}}` : `{${o}}`;
  }
  createObject(e, A) {
    const n = super.createObject(e), o = Object.keys(n).reduce(collectObject(n), "");
    return A === -1 ? `{_ ${o}}` : `{${o}}`;
  }
  createUtf8String(e, A) {
    const n = e.join(", ");
    return A === -1 ? `(_ ${n})` : `"${n}"`;
  }
  createUtf8StringFromHeap(e, A) {
    return `"${Buffer$3.from(
      super.createUtf8StringFromHeap(e, A)
    ).toString("utf8")}"`;
  }
  static diagnose(e, A) {
    return typeof e == "string" && (e = Buffer$3.from(e, A || "hex")), new Diagnose().decodeFirst(e);
  }
}
var diagnose = Diagnose;
function collectObject(t) {
  return (e, A) => e ? `${e}, ${A}: ${t[A]}` : `${A}: ${t[A]}`;
}
const { Buffer: Buffer$4 } = require$$0, { URL: URL$3 } = isoUrl, Bignumber$2 = require$$2.BigNumber, MT$2 = constants.MT, NUMBYTES$1 = constants.NUMBYTES, SHIFT32$1 = constants.SHIFT32, SYMS$2 = constants.SYMS, TAG$1 = constants.TAG, HALF = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.TWO, FLOAT = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.FOUR, DOUBLE = constants.MT.SIMPLE_FLOAT << 5 | constants.NUMBYTES.EIGHT, TRUE = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.TRUE, FALSE = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.FALSE, UNDEFINED = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.UNDEFINED, NULL = constants.MT.SIMPLE_FLOAT << 5 | constants.SIMPLE.NULL, MAXINT_BN = new Bignumber$2("0x20000000000000"), BUF_NAN = Buffer$4.from("f97e00", "hex"), BUF_INF_NEG = Buffer$4.from("f9fc00", "hex"), BUF_INF_POS = Buffer$4.from("f97c00", "hex");
function toType(t) {
  return {}.toString.call(t).slice(8, -1);
}
class Encoder {
  constructor(e) {
    e = e || {}, this.streaming = typeof e.stream == "function", this.onData = e.stream, this.semanticTypes = [
      [URL$3, this._pushUrl],
      [Bignumber$2, this._pushBigNumber]
    ];
    const A = e.genTypes || [], n = A.length;
    for (let o = 0; o < n; o++)
      this.addSemanticType(
        A[o][0],
        A[o][1]
      );
    this._reset();
  }
  addSemanticType(e, A) {
    const n = this.semanticTypes.length;
    for (let o = 0; o < n; o++)
      if (this.semanticTypes[o][0] === e) {
        const a = this.semanticTypes[o][1];
        return this.semanticTypes[o][1] = A, a;
      }
    return this.semanticTypes.push([e, A]), null;
  }
  push(e) {
    return e && (this.result[this.offset] = e, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = e.length, this.offset++, this.streaming && this.onData(this.finalize())), !0;
  }
  pushWrite(e, A, n) {
    return this.result[this.offset] = e, this.resultMethod[this.offset] = A, this.resultLength[this.offset] = n, this.offset++, this.streaming && this.onData(this.finalize()), !0;
  }
  _pushUInt8(e) {
    return this.pushWrite(e, 1, 1);
  }
  _pushUInt16BE(e) {
    return this.pushWrite(e, 2, 2);
  }
  _pushUInt32BE(e) {
    return this.pushWrite(e, 3, 4);
  }
  _pushDoubleBE(e) {
    return this.pushWrite(e, 4, 8);
  }
  _pushNaN() {
    return this.push(BUF_NAN);
  }
  _pushInfinity(e) {
    const A = e < 0 ? BUF_INF_NEG : BUF_INF_POS;
    return this.push(A);
  }
  _pushFloat(e) {
    const A = Buffer$4.allocUnsafe(2);
    if (utils.writeHalf(A, e) && utils.parseHalf(A) === e)
      return this._pushUInt8(HALF) && this.push(A);
    const n = Buffer$4.allocUnsafe(4);
    return n.writeFloatBE(e, 0), n.readFloatBE(0) === e ? this._pushUInt8(FLOAT) && this.push(n) : this._pushUInt8(DOUBLE) && this._pushDoubleBE(e);
  }
  _pushInt(e, A, n) {
    const o = A << 5;
    return e < 24 ? this._pushUInt8(o | e) : e <= 255 ? this._pushUInt8(o | NUMBYTES$1.ONE) && this._pushUInt8(e) : e <= 65535 ? this._pushUInt8(o | NUMBYTES$1.TWO) && this._pushUInt16BE(e) : e <= 4294967295 ? this._pushUInt8(o | NUMBYTES$1.FOUR) && this._pushUInt32BE(e) : e <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(o | NUMBYTES$1.EIGHT) && this._pushUInt32BE(Math.floor(e / SHIFT32$1)) && this._pushUInt32BE(e % SHIFT32$1) : A === MT$2.NEG_INT ? this._pushFloat(n) : this._pushFloat(e);
  }
  _pushIntNum(e) {
    return e < 0 ? this._pushInt(-e - 1, MT$2.NEG_INT, e) : this._pushInt(e, MT$2.POS_INT);
  }
  _pushNumber(e) {
    switch (!1) {
      case e === e:
        return this._pushNaN(e);
      case isFinite(e):
        return this._pushInfinity(e);
      case e % 1 !== 0:
        return this._pushIntNum(e);
      default:
        return this._pushFloat(e);
    }
  }
  _pushString(e) {
    const A = Buffer$4.byteLength(e, "utf8");
    return this._pushInt(A, MT$2.UTF8_STRING) && this.pushWrite(e, 5, A);
  }
  _pushBoolean(e) {
    return this._pushUInt8(e ? TRUE : FALSE);
  }
  _pushUndefined(e) {
    return this._pushUInt8(UNDEFINED);
  }
  _pushArray(e, A) {
    const n = A.length;
    if (!e._pushInt(n, MT$2.ARRAY))
      return !1;
    for (let o = 0; o < n; o++)
      if (!e.pushAny(A[o]))
        return !1;
    return !0;
  }
  _pushTag(e) {
    return this._pushInt(e, MT$2.TAG);
  }
  _pushDate(e, A) {
    return e._pushTag(TAG$1.DATE_EPOCH) && e.pushAny(Math.round(A / 1e3));
  }
  _pushBuffer(e, A) {
    return e._pushInt(A.length, MT$2.BYTE_STRING) && e.push(A);
  }
  _pushNoFilter(e, A) {
    return e._pushBuffer(e, A.slice());
  }
  _pushRegexp(e, A) {
    return e._pushTag(TAG$1.REGEXP) && e.pushAny(A.source);
  }
  _pushSet(e, A) {
    if (!e._pushInt(A.size, MT$2.ARRAY))
      return !1;
    for (const n of A)
      if (!e.pushAny(n))
        return !1;
    return !0;
  }
  _pushUrl(e, A) {
    return e._pushTag(TAG$1.URI) && e.pushAny(A.format());
  }
  _pushBigint(e) {
    let A = TAG$1.POS_BIGINT;
    e.isNegative() && (e = e.negated().minus(1), A = TAG$1.NEG_BIGINT);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const o = Buffer$4.from(n, "hex");
    return this._pushTag(A) && this._pushBuffer(this, o);
  }
  _pushBigNumber(e, A) {
    if (A.isNaN())
      return e._pushNaN();
    if (!A.isFinite())
      return e._pushInfinity(A.isNegative() ? -1 / 0 : 1 / 0);
    if (A.isInteger())
      return e._pushBigint(A);
    if (!(e._pushTag(TAG$1.DECIMAL_FRAC) && e._pushInt(2, MT$2.ARRAY)))
      return !1;
    const n = A.decimalPlaces(), o = A.multipliedBy(new Bignumber$2(10).pow(n));
    return e._pushIntNum(-n) ? o.abs().isLessThan(MAXINT_BN) ? e._pushIntNum(o.toNumber()) : e._pushBigint(o) : !1;
  }
  _pushMap(e, A) {
    return e._pushInt(A.size, MT$2.MAP) ? this._pushRawMap(
      A.size,
      Array.from(A)
    ) : !1;
  }
  _pushObject(e) {
    if (!e)
      return this._pushUInt8(NULL);
    for (var A = this.semanticTypes.length, n = 0; n < A; n++)
      if (e instanceof this.semanticTypes[n][0])
        return this.semanticTypes[n][1].call(e, this, e);
    var o = e.encodeCBOR;
    if (typeof o == "function")
      return o.call(e, this);
    var s = Object.keys(e), a = s.length;
    return this._pushInt(a, MT$2.MAP) ? this._pushRawMap(
      a,
      s.map((c) => [c, e[c]])
    ) : !1;
  }
  _pushRawMap(e, A) {
    A = A.map(function(o) {
      return o[0] = Encoder.encode(o[0]), o;
    }).sort(utils.keySorter);
    for (var n = 0; n < e; n++)
      if (!this.push(A[n][0]) || !this.pushAny(A[n][1]))
        return !1;
    return !0;
  }
  write(e) {
    return this.pushAny(e);
  }
  pushAny(e) {
    var A = toType(e);
    switch (A) {
      case "Number":
        return this._pushNumber(e);
      case "String":
        return this._pushString(e);
      case "Boolean":
        return this._pushBoolean(e);
      case "Object":
        return this._pushObject(e);
      case "Array":
        return this._pushArray(this, e);
      case "Uint8Array":
        return this._pushBuffer(this, Buffer$4.isBuffer(e) ? e : Buffer$4.from(e));
      case "Null":
        return this._pushUInt8(NULL);
      case "Undefined":
        return this._pushUndefined(e);
      case "Map":
        return this._pushMap(this, e);
      case "Set":
        return this._pushSet(this, e);
      case "URL":
        return this._pushUrl(this, e);
      case "BigNumber":
        return this._pushBigNumber(this, e);
      case "Date":
        return this._pushDate(this, e);
      case "RegExp":
        return this._pushRegexp(this, e);
      case "Symbol":
        switch (e) {
          case SYMS$2.NULL:
            return this._pushObject(null);
          case SYMS$2.UNDEFINED:
            return this._pushUndefined(void 0);
          default:
            throw new Error("Unknown symbol: " + e.toString());
        }
      default:
        throw new Error("Unknown type: " + typeof e + ", " + (e ? e.toString() : ""));
    }
  }
  finalize() {
    if (this.offset === 0)
      return null;
    for (var e = this.result, A = this.resultLength, n = this.resultMethod, o = this.offset, s = 0, a = 0; a < o; a++)
      s += A[a];
    var c = Buffer$4.allocUnsafe(s), l = 0, B = 0;
    for (a = 0; a < o; a++) {
      switch (B = A[a], n[a]) {
        case 0:
          e[a].copy(c, l);
          break;
        case 1:
          c.writeUInt8(e[a], l, !0);
          break;
        case 2:
          c.writeUInt16BE(e[a], l, !0);
          break;
        case 3:
          c.writeUInt32BE(e[a], l, !0);
          break;
        case 4:
          c.writeDoubleBE(e[a], l, !0);
          break;
        case 5:
          c.write(e[a], l, B, "utf8");
          break;
        default:
          throw new Error("unkown method");
      }
      l += B;
    }
    var g = c;
    return this._reset(), g;
  }
  _reset() {
    this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0;
  }
  static encode(e) {
    const A = new Encoder();
    if (!A.pushAny(e))
      throw new Error("Failed to encode input");
    return A.finalize();
  }
}
var encoder = Encoder, src = createCommonjsModule(function(t, e) {
  e.Diagnose = diagnose, e.Decoder = decoder, e.Encoder = encoder, e.Simple = simple, e.Tagged = tagged, e.decodeAll = e.Decoder.decodeAll, e.decodeFirst = e.Decoder.decodeFirst, e.diagnose = e.Diagnose.diagnose, e.encode = e.Encoder.encode, e.decode = e.Decoder.decode, e.leveldb = {
    decode: e.Decoder.decodeAll,
    encode: e.Encoder.encode,
    buffer: !0,
    name: "cbor"
  };
});
function toHex$1(t) {
  return blobToHex(t);
}
function hash(t) {
  const e = sha256.sha256.create().update(t).arrayBuffer();
  return blobFromUint8Array(new Uint8Array(e));
}
function hashValue(t) {
  if (t instanceof src.Tagged)
    return hashValue(t.value);
  if (typeof t == "string")
    return hashString(t);
  if (typeof t == "number")
    return hash(lebEncode(t));
  if (buffer.Buffer.isBuffer(t))
    return hash(blobFromUint8Array(new Uint8Array(t)));
  if (t instanceof Uint8Array || t instanceof ArrayBuffer)
    return hash(blobFromUint8Array(new Uint8Array(t)));
  if (Array.isArray(t)) {
    const e = t.map(hashValue);
    return hash(buffer.Buffer.concat(e));
  } else {
    if (typeof t == "object" && t !== null && typeof t.toHash == "function")
      return hashValue(t.toHash());
    if (typeof t == "bigint")
      return hash(lebEncode(t));
  }
  throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${t}`), {
    value: t
  });
}
const hashString = (t) => {
  const A = new TextEncoder().encode(t);
  return hash(buffer.Buffer.from(A));
};
function concat(t) {
  return buffer.Buffer.concat(t);
}
function requestIdOf(t) {
  const n = Object.entries(t).filter(([, a]) => a !== void 0).map(([a, c]) => {
    const l = hashString(a), B = hashValue(c);
    return [l, B];
  }).sort(([a], [c]) => buffer.Buffer.compare(buffer.Buffer.from(a), buffer.Buffer.from(c))), o = concat(n.map(concat));
  return hash(o);
}
buffer.Buffer.from(new TextEncoder().encode(`
ic-request`));
class AnonymousIdentity {
  getPrincipal() {
    return Principal.anonymous();
  }
  async transformRequest(e) {
    return Object.assign(Object.assign({}, e), { body: { content: e.body } });
  }
}
var value = createCommonjsModule(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const A = 9007199254740992;
  function n(p, ...w) {
    const k = new Uint8Array(p.byteLength + w.reduce((te, q) => te + q.byteLength, 0));
    k.set(new Uint8Array(p), 0);
    let O = p.byteLength;
    for (const te of w)
      k.set(new Uint8Array(te), O), O += te.byteLength;
    return k.buffer;
  }
  function o(p, w, k) {
    k = k.replace(/[^0-9a-fA-F]/g, "");
    const O = 2 ** (w - 24);
    k = k.slice(-O * 2).padStart(O * 2, "0");
    const te = [(p << 5) + w].concat(k.match(/../g).map((q) => parseInt(q, 16)));
    return new Uint8Array(te).buffer;
  }
  function s(p, w) {
    if (w < 24)
      return new Uint8Array([(p << 5) + w]).buffer;
    {
      const k = w <= 255 ? 24 : w <= 65535 ? 25 : w <= 4294967295 ? 26 : 27;
      return o(p, k, w.toString(16));
    }
  }
  function a(p) {
    const w = [];
    for (let k = 0; k < p.length; k++) {
      let O = p.charCodeAt(k);
      O < 128 ? w.push(O) : O < 2048 ? w.push(192 | O >> 6, 128 | O & 63) : O < 55296 || O >= 57344 ? w.push(224 | O >> 12, 128 | O >> 6 & 63, 128 | O & 63) : (k++, O = (O & 1023) << 10 | p.charCodeAt(k) & 1023, w.push(240 | O >> 18, 128 | O >> 12 & 63, 128 | O >> 6 & 63, 128 | O & 63));
    }
    return n(new Uint8Array(s(3, p.length)), new Uint8Array(w));
  }
  function c(p, w) {
    if (p == 14277111)
      return n(new Uint8Array([217, 217, 247]), w);
    if (p < 24)
      return n(new Uint8Array([(6 << 5) + p]), w);
    {
      const k = p <= 255 ? 24 : p <= 65535 ? 25 : p <= 4294967295 ? 26 : 27, O = 2 ** (k - 24), te = p.toString(16).slice(-O * 2).padStart(O * 2, "0"), q = [(6 << 5) + k].concat(te.match(/../g).map((P) => parseInt(P, 16)));
      return new Uint8Array(q).buffer;
    }
  }
  e.tagged = c;
  function l(p) {
    return new Uint8Array(p).buffer;
  }
  e.raw = l;
  function B(p) {
    if (isNaN(p))
      throw new RangeError("Invalid number.");
    p = Math.min(Math.max(0, p), 23);
    const w = [(0 << 5) + p];
    return new Uint8Array(w).buffer;
  }
  e.uSmall = B;
  function g(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, p), 255), p = p.toString(16), o(0, 24, p);
  }
  e.u8 = g;
  function E(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, p), 65535), p = p.toString(16), o(0, 25, p);
  }
  e.u16 = E;
  function I(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, p), 4294967295), p = p.toString(16), o(0, 26, p);
  }
  e.u32 = I;
  function x(p, w) {
    if (typeof p == "string" && w == 16) {
      if (p.match(/[^0-9a-fA-F]/))
        throw new RangeError("Invalid number.");
      return o(0, 27, p);
    }
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, p), A), p = p.toString(16), o(0, 27, p);
  }
  e.u64 = x;
  function U(p) {
    if (isNaN(p))
      throw new RangeError("Invalid number.");
    if (p === 0)
      return B(0);
    p = Math.min(Math.max(0, -p), 24) - 1;
    const w = [(1 << 5) + p];
    return new Uint8Array(w).buffer;
  }
  e.iSmall = U;
  function v(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, -p - 1), 255), p = p.toString(16), o(1, 24, p);
  }
  e.i8 = v;
  function D(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, -p - 1), 65535), p = p.toString(16), o(1, 25, p);
  }
  e.i16 = D;
  function T(p, w) {
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, -p - 1), 4294967295), p = p.toString(16), o(1, 26, p);
  }
  e.i32 = T;
  function Z(p, w) {
    if (typeof p == "string" && w == 16) {
      if (p.startsWith("-") ? p = p.slice(1) : p = "0", p.match(/[^0-9a-fA-F]/) || p.length > 16)
        throw new RangeError("Invalid number.");
      let k = !1, O = p.split("").reduceRight((te, q) => {
        if (k)
          return q + te;
        let P = parseInt(q, 16) - 1;
        return P >= 0 ? (k = !0, P.toString(16) + te) : "f" + te;
      }, "");
      return k ? o(1, 27, O) : x(0);
    }
    if (p = parseInt("" + p, w), isNaN(p))
      throw new RangeError("Invalid number.");
    return p = Math.min(Math.max(0, -p - 1), 9007199254740992), p = p.toString(16), o(1, 27, p);
  }
  e.i64 = Z;
  function j(p) {
    return p >= 0 ? p < 24 ? B(p) : p <= 255 ? g(p) : p <= 65535 ? E(p) : p <= 4294967295 ? I(p) : x(p) : p >= -24 ? U(p) : p >= -255 ? v(p) : p >= -65535 ? D(p) : p >= -4294967295 ? T(p) : Z(p);
  }
  e.number = j;
  function L(p) {
    return n(s(2, p.byteLength), p);
  }
  e.bytes = L;
  function Y(p) {
    return a(p);
  }
  e.string = Y;
  function W(p) {
    return n(s(4, p.length), ...p);
  }
  e.array = W;
  function h(p, w = !1) {
    p instanceof Map || (p = new Map(Object.entries(p)));
    let k = Array.from(p.entries());
    return w && (k = k.sort(([O], [te]) => O.localeCompare(te))), n(s(5, p.size), ...k.map(([O, te]) => n(a(O), te)));
  }
  e.map = h;
  function C(p) {
    const w = new Float32Array([p]);
    return n(new Uint8Array([(7 << 5) + 26]), new Uint8Array(w.buffer));
  }
  e.singleFloat = C;
  function y(p) {
    const w = new Float64Array([p]);
    return n(new Uint8Array([(7 << 5) + 27]), new Uint8Array(w.buffer));
  }
  e.doubleFloat = y;
  function R(p) {
    return p ? G() : N();
  }
  e.bool = R;
  function G() {
    return l(new Uint8Array([(7 << 5) + 21]));
  }
  e.true_ = G;
  function N() {
    return l(new Uint8Array([(7 << 5) + 20]));
  }
  e.false_ = N;
  function M() {
    return l(new Uint8Array([(7 << 5) + 22]));
  }
  e.null_ = M;
  function S() {
    return l(new Uint8Array([(7 << 5) + 23]));
  }
  e.undefined_ = S;
}), serializer = createCommonjsModule(function(t, e) {
  var A = commonjsGlobal && commonjsGlobal.__importStar || function(B) {
    if (B && B.__esModule)
      return B;
    var g = {};
    if (B != null)
      for (var E in B)
        Object.hasOwnProperty.call(B, E) && (g[E] = B[E]);
    return g.default = B, g;
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  const n = A(value), o = [
    ArrayBuffer,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Float32Array,
    Float64Array
  ];
  class s {
    constructor(g, E = !1) {
      this._serializer = g, this._stable = E, this.name = "jsonDefault", this.priority = -100;
    }
    match(g) {
      return ["undefined", "boolean", "number", "string", "object"].indexOf(typeof g) != -1;
    }
    encode(g) {
      switch (typeof g) {
        case "undefined":
          return n.undefined_();
        case "boolean":
          return n.bool(g);
        case "number":
          return Math.floor(g) === g ? n.number(g) : n.doubleFloat(g);
        case "string":
          return n.string(g);
        case "object":
          if (g === null)
            return n.null_();
          if (Array.isArray(g))
            return n.array(g.map((E) => this._serializer.serializeValue(E)));
          if (o.find((E) => g instanceof E))
            return n.bytes(g.buffer);
          if (Object.getOwnPropertyNames(g).indexOf("toJSON") !== -1)
            return this.encode(g.toJSON());
          if (g instanceof Map) {
            const E = /* @__PURE__ */ new Map();
            for (const [I, x] of g.entries())
              E.set(I, this._serializer.serializeValue(x));
            return n.map(E, this._stable);
          } else {
            const E = /* @__PURE__ */ new Map();
            for (const [I, x] of Object.entries(g))
              E.set(I, this._serializer.serializeValue(x));
            return n.map(E, this._stable);
          }
        default:
          throw new Error("Invalid value.");
      }
    }
  }
  e.JsonDefaultCborEncoder = s;
  class a {
    constructor() {
      this.name = "cborEncoder", this.priority = -90;
    }
    match(g) {
      return typeof g == "object" && typeof g.toCBOR == "function";
    }
    encode(g) {
      return g.toCBOR();
    }
  }
  e.ToCborEncoder = a;
  class c {
    constructor() {
      this._encoders = /* @__PURE__ */ new Set();
    }
    static withDefaultEncoders(g = !1) {
      const E = new this();
      return E.addEncoder(new s(E, g)), E.addEncoder(new a()), E;
    }
    removeEncoder(g) {
      for (const E of this._encoders.values())
        E.name == g && this._encoders.delete(E);
    }
    addEncoder(g) {
      this._encoders.add(g);
    }
    getEncoderFor(g) {
      let E = null;
      for (const I of this._encoders)
        (!E || I.priority > E.priority) && I.match(g) && (E = I);
      if (E === null)
        throw new Error("Could not find an encoder for value.");
      return E;
    }
    serializeValue(g) {
      return this.getEncoderFor(g).encode(g);
    }
    serialize(g) {
      return this.serializeValue(g);
    }
  }
  e.CborSerializer = c;
  class l extends c {
    serialize(g) {
      return n.raw(new Uint8Array([
        ...new Uint8Array([217, 217, 247]),
        ...new Uint8Array(super.serializeValue(g))
      ]));
    }
  }
  e.SelfDescribeCborSerializer = l;
}), src$1 = createCommonjsModule(function(t, e) {
  function A(s) {
    for (var a in s)
      e.hasOwnProperty(a) || (e[a] = s[a]);
  }
  var n = commonjsGlobal && commonjsGlobal.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var a = {};
    if (s != null)
      for (var c in s)
        Object.hasOwnProperty.call(s, c) && (a[c] = s[c]);
    return a.default = s, a;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), A(serializer);
  const o = n(value);
  e.value = o;
});
class PrincipalEncoder {
  get name() {
    return "Principal";
  }
  get priority() {
    return 0;
  }
  match(e) {
    return e && e._isPrincipal === !0;
  }
  encode(e) {
    return src$1.value.bytes(e.toBlob());
  }
}
class BufferEncoder {
  get name() {
    return "Buffer";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return buffer.Buffer.isBuffer(e);
  }
  encode(e) {
    return src$1.value.bytes(new Uint8Array(e));
  }
}
class BigIntEncoder {
  get name() {
    return "BigInt";
  }
  get priority() {
    return 1;
  }
  match(e) {
    return typeof e == "bigint";
  }
  encode(e) {
    return e > BigInt(0) ? src$1.value.tagged(2, src$1.value.bytes(blobFromHex(e.toString(16)))) : src$1.value.tagged(3, src$1.value.bytes(blobFromHex((BigInt("-1") * e).toString(16))));
  }
}
const serializer$1 = src$1.SelfDescribeCborSerializer.withDefaultEncoders(!0);
serializer$1.addEncoder(new PrincipalEncoder());
serializer$1.addEncoder(new BufferEncoder());
serializer$1.addEncoder(new BigIntEncoder());
var CborTag;
(function(t) {
  t[t.Uint64LittleEndian = 71] = "Uint64LittleEndian", t[t.Semantic = 55799] = "Semantic";
})(CborTag || (CborTag = {}));
const encode$1 = (t) => buffer.Buffer.from(serializer$1.serialize(t));
function decodePositiveBigInt(t) {
  const e = t.byteLength;
  let A = BigInt(0);
  for (let n = 0; n < e; n++)
    A = A * BigInt(256) + BigInt(t[n]);
  return A;
}
function decode$1(t) {
  return new src.Decoder({
    size: t.byteLength,
    tags: {
      2: (n) => decodePositiveBigInt(n),
      3: (n) => -decodePositiveBigInt(n),
      [CborTag.Semantic]: (n) => n
    }
  }).decodeFirst(t);
}
const NANOSECONDS_PER_MILLISECONDS = BigInt(1e6), REPLICA_PERMITTED_DRIFT_MILLISECONDS = BigInt(60 * 1e3);
class Expiry {
  constructor(e) {
    this._value = (BigInt(Date.now()) + BigInt(e) - REPLICA_PERMITTED_DRIFT_MILLISECONDS) * NANOSECONDS_PER_MILLISECONDS;
  }
  toCBOR() {
    return src$1.value.u64(this._value.toString(16), 16);
  }
  toHash() {
    return lebEncode(this._value);
  }
}
var SubmitRequestType;
(function(t) {
  t.Call = "call";
})(SubmitRequestType || (SubmitRequestType = {}));
var RequestStatusResponseStatus;
(function(t) {
  t.Received = "received", t.Processing = "processing", t.Replied = "replied", t.Rejected = "rejected", t.Unknown = "unknown", t.Done = "done";
})(RequestStatusResponseStatus || (RequestStatusResponseStatus = {}));
const DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS = 5 * 60 * 1e3, IC_ROOT_KEY = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae";
function getDefaultFetch() {
  const t = typeof window > "u" ? typeof global$1 > "u" ? typeof self > "u" ? void 0 : self.fetch.bind(self) : global$1.fetch.bind(global$1) : window.fetch.bind(window);
  if (!t)
    throw new Error("Could not find default `fetch` implementation.");
  return t;
}
class HttpAgent {
  constructor(e = {}) {
    if (this._pipeline = [], this.rootKey = blobFromHex(IC_ROOT_KEY), e.source) {
      if (!(e.source instanceof HttpAgent))
        throw new Error("An Agent's source can only be another HttpAgent");
      this._pipeline = [...e.source._pipeline], this._identity = e.source._identity, this._fetch = e.source._fetch, this._host = e.source._host, this._credentials = e.source._credentials;
    } else
      this._fetch = e.fetch || getDefaultFetch() || fetch.bind(global$1);
    if (e.host !== void 0)
      !e.host.match(/^[a-z]+:/) && typeof window < "u" ? this._host = new URL(window.location.protocol + "//" + e.host) : this._host = new URL(e.host);
    else if (e.source !== void 0)
      this._host = e.source._host;
    else {
      const A = typeof window < "u" ? window.location : void 0;
      if (!A)
        throw new Error("Must specify a host to connect to.");
      this._host = new URL(A + "");
    }
    if (e.credentials) {
      const { name: A, password: n } = e.credentials;
      this._credentials = `${A}${n ? ":" + n : ""}`;
    }
    this._identity = Promise.resolve(e.identity || new AnonymousIdentity());
  }
  addTransform(e, A = e.priority || 0) {
    const n = this._pipeline.findIndex((o) => (o.priority || 0) < A);
    this._pipeline.splice(n >= 0 ? n : this._pipeline.length, 0, Object.assign(e, { priority: A }));
  }
  async getPrincipal() {
    return (await this._identity).getPrincipal();
  }
  async call(e, A, n) {
    const o = await (n !== void 0 ? n : this._identity), s = Principal.from(e), a = A.effectiveCanisterId ? Principal.from(A.effectiveCanisterId) : s, c = (o == null ? void 0 : o.getPrincipal()) || Principal.anonymous(), l = {
      request_type: SubmitRequestType.Call,
      canister_id: s,
      method_name: A.methodName,
      arg: A.arg,
      sender: c.toBlob(),
      ingress_expiry: new Expiry(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS)
    };
    let B = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "call",
      body: l
    });
    B = await o.transformRequest(B);
    const g = encode$1(B.body), [E, I] = await Promise.all([
      this._fetch("" + new URL(`/api/v2/canister/${a.toText()}/call`, this._host), Object.assign(Object.assign({}, B.request), { body: g })),
      requestIdOf(l)
    ]);
    if (!E.ok)
      throw new Error(`Server returned an error:
  Code: ${E.status} (${E.statusText})
  Body: ${await E.text()}
`);
    return {
      requestId: I,
      response: {
        ok: E.ok,
        status: E.status,
        statusText: E.statusText
      }
    };
  }
  async query(e, A, n) {
    const o = await (n || this._identity), s = typeof e == "string" ? Principal.fromText(e) : e, a = (o == null ? void 0 : o.getPrincipal()) || Principal.anonymous(), c = {
      request_type: "query",
      canister_id: s,
      method_name: A.methodName,
      arg: A.arg,
      sender: a.toBlob(),
      ingress_expiry: new Expiry(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS)
    };
    let l = await this._transform({
      request: {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "read",
      body: c
    });
    l = await o.transformRequest(l);
    const B = encode$1(l.body), g = await this._fetch("" + new URL(`/api/v2/canister/${s.toText()}/query`, this._host), Object.assign(Object.assign({}, l.request), { body: B }));
    if (!g.ok)
      throw new Error(`Server returned an error:
  Code: ${g.status} (${g.statusText})
  Body: ${await g.text()}
`);
    return decode$1(buffer.Buffer.from(await g.arrayBuffer()));
  }
  async readState(e, A, n) {
    const o = typeof e == "string" ? Principal.fromText(e) : e, s = await (n || this._identity), a = (s == null ? void 0 : s.getPrincipal()) || Principal.anonymous();
    let c = await this._transform({
      request: {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/cbor" }, this._credentials ? { Authorization: "Basic " + btoa(this._credentials) } : {})
      },
      endpoint: "read_state",
      body: {
        request_type: "read_state",
        paths: A.paths,
        sender: a.toBlob(),
        ingress_expiry: new Expiry(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS)
      }
    });
    c = await s.transformRequest(c);
    const l = encode$1(c.body), B = await this._fetch("" + new URL(`/api/v2/canister/${o}/read_state`, this._host), Object.assign(Object.assign({}, c.request), { body: l }));
    if (!B.ok)
      throw new Error(`Server returned an error:
  Code: ${B.status} (${B.statusText})
  Body: ${await B.text()}
`);
    return decode$1(buffer.Buffer.from(await B.arrayBuffer()));
  }
  async status() {
    const e = this._credentials ? {
      Authorization: "Basic " + btoa(this._credentials)
    } : {}, A = await this._fetch("" + new URL("/api/v2/status", this._host), { headers: e });
    if (!A.ok)
      throw new Error(`Server returned an error:
  Code: ${A.status} (${A.statusText})
  Body: ${await A.text()}
`);
    const n = await A.arrayBuffer();
    return decode$1(new Uint8Array(n));
  }
  async fetchRootKey() {
    return this.rootKey = blobFromUint8Array((await this.status()).root_key), this.rootKey;
  }
  _transform(e) {
    let A = Promise.resolve(e);
    for (const n of this._pipeline)
      A = A.then((o) => n(o).then((s) => s || o));
    return A;
  }
}
var ProxyMessageKind;
(function(t) {
  t.Error = "err", t.GetPrincipal = "gp", t.GetPrincipalResponse = "gpr", t.Query = "q", t.QueryResponse = "qr", t.Call = "c", t.CallResponse = "cr", t.ReadState = "rs", t.ReadStateResponse = "rsr", t.Status = "s", t.StatusResponse = "sr";
})(ProxyMessageKind || (ProxyMessageKind = {}));
function getDefaultAgent() {
  const t = typeof window > "u" ? typeof global$1 > "u" ? typeof self > "u" ? void 0 : self.ic.agent : global$1.ic.agent : window.ic.agent;
  if (!t)
    throw new Error("No Agent could be found.");
  return t;
}
var managementCanisterIdl = ({ IDL: t }) => {
  const e = t.Principal, A = t.Vec(t.Nat8), n = t.Record({
    compute_allocation: t.Opt(t.Nat),
    memory_allocation: t.Opt(t.Nat)
  });
  return t.Service({
    provisional_create_canister_with_cycles: t.Func([
      t.Record({ amount: t.Opt(t.Nat), settings: t.Opt(n) })
    ], [
      t.Record({ canister_id: e })
    ], []),
    create_canister: t.Func([], [t.Record({ canister_id: e })], []),
    install_code: t.Func([
      t.Record({
        mode: t.Variant({ install: t.Null, reinstall: t.Null, upgrade: t.Null }),
        canister_id: e,
        wasm_module: A,
        arg: t.Vec(t.Nat8)
      })
    ], [], []),
    set_controller: t.Func([t.Record({ canister_id: e, new_controller: t.Principal })], [], [])
  });
};
function getManagementCanister(t) {
  function e(A, n, o) {
    const s = n[0];
    let a = Principal.fromHex("");
    return s && typeof s == "object" && s.canister_id && (a = Principal.from(s.canister_id)), { effectiveCanisterId: a };
  }
  return Actor.createActor(managementCanisterIdl, Object.assign(Object.assign(Object.assign({}, t), { canisterId: Principal.fromHex("") }), {
    callTransform: e,
    queryTransform: e
  }));
}
function idlHash(t) {
  const A = new TextEncoder().encode(t);
  let n = 0;
  for (const o of A)
    n = (n * 223 + o) % 2 ** 32;
  return n;
}
function idlLabelToId(t) {
  if (/^_\d+_$/.test(t) || /^_0x[0-9a-fA-F]+_$/.test(t)) {
    const e = +t.slice(1, -1);
    if (Number.isSafeInteger(e) && e >= 0 && e < 2 ** 32)
      return e;
  }
  return idlHash(t);
}
const magicNumber = "DIDL";
function zipWith(t, e, A) {
  return t.map((n, o) => A(n, e[o]));
}
class TypeTable {
  constructor() {
    this._typs = [], this._idx = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this._idx.has(e.name);
  }
  add(e, A) {
    const n = this._typs.length;
    this._idx.set(e.name, n), this._typs.push(A);
  }
  merge(e, A) {
    const n = this._idx.get(e.name), o = this._idx.get(A);
    if (n === void 0)
      throw new Error("Missing type index for " + e);
    if (o === void 0)
      throw new Error("Missing type index for " + A);
    this._typs[n] = this._typs[o], this._typs.splice(o, 1), this._idx.delete(A);
  }
  encode() {
    const e = lebEncode(this._typs.length), A = buffer.Buffer.concat(this._typs);
    return buffer.Buffer.concat([e, A]);
  }
  indexOf(e) {
    if (!this._idx.has(e))
      throw new Error("Missing type index for " + e);
    return slebEncode(this._idx.get(e) || 0);
  }
}
class Visitor {
  visitType(e, A) {
    throw new Error("Not implemented");
  }
  visitPrimitive(e, A) {
    return this.visitType(e, A);
  }
  visitEmpty(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitBool(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitNull(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitReserved(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitText(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitNumber(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitInt(e, A) {
    return this.visitNumber(e, A);
  }
  visitNat(e, A) {
    return this.visitNumber(e, A);
  }
  visitFloat(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitFixedInt(e, A) {
    return this.visitNumber(e, A);
  }
  visitFixedNat(e, A) {
    return this.visitNumber(e, A);
  }
  visitPrincipal(e, A) {
    return this.visitPrimitive(e, A);
  }
  visitConstruct(e, A) {
    return this.visitType(e, A);
  }
  visitVec(e, A, n) {
    return this.visitConstruct(e, n);
  }
  visitOpt(e, A, n) {
    return this.visitConstruct(e, n);
  }
  visitRecord(e, A, n) {
    return this.visitConstruct(e, n);
  }
  visitTuple(e, A, n) {
    const o = A.map((s, a) => [`_${a}_`, s]);
    return this.visitRecord(e, o, n);
  }
  visitVariant(e, A, n) {
    return this.visitConstruct(e, n);
  }
  visitRec(e, A, n) {
    return this.visitConstruct(A, n);
  }
  visitFunc(e, A) {
    return this.visitConstruct(e, A);
  }
  visitService(e, A) {
    return this.visitConstruct(e, A);
  }
}
class Type {
  display() {
    return this.name;
  }
  valueToString(e) {
    return JSON.stringify(e);
  }
  buildTypeTable(e) {
    e.has(this) || this._buildTypeTableImpl(e);
  }
}
class PrimitiveType extends Type {
  checkType(e) {
    if (this.name !== e.name)
      throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
    return e;
  }
  _buildTypeTableImpl(e) {
  }
}
class ConstructType extends Type {
  checkType(e) {
    if (e instanceof RecClass) {
      const A = e.getType();
      if (typeof A > "u")
        throw new Error("type mismatch with uninitialized type");
      return A;
    }
    throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
  }
  encodeType(e) {
    return e.indexOf(this.name);
  }
}
class EmptyClass extends PrimitiveType {
  accept(e, A) {
    return e.visitEmpty(this, A);
  }
  covariant(e) {
    return !1;
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return slebEncode(-17);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class BoolClass extends PrimitiveType {
  accept(e, A) {
    return e.visitBool(this, A);
  }
  covariant(e) {
    return typeof e == "boolean";
  }
  encodeValue(e) {
    const A = buffer.Buffer.alloc(1);
    return A.writeInt8(e ? 1 : 0, 0), A;
  }
  encodeType() {
    return slebEncode(-2);
  }
  decodeValue(e, A) {
    this.checkType(A);
    const n = safeRead(e, 1).toString("hex");
    if (n === "00")
      return !1;
    if (n === "01")
      return !0;
    throw new Error("Boolean value out of range");
  }
  get name() {
    return "bool";
  }
}
class NullClass extends PrimitiveType {
  accept(e, A) {
    return e.visitNull(this, A);
  }
  covariant(e) {
    return e === null;
  }
  encodeValue() {
    return buffer.Buffer.alloc(0);
  }
  encodeType() {
    return slebEncode(-1);
  }
  decodeValue(e, A) {
    return this.checkType(A), null;
  }
  get name() {
    return "null";
  }
}
class ReservedClass extends PrimitiveType {
  accept(e, A) {
    return e.visitReserved(this, A);
  }
  covariant(e) {
    return !0;
  }
  encodeValue() {
    return buffer.Buffer.alloc(0);
  }
  encodeType() {
    return slebEncode(-16);
  }
  decodeValue(e, A) {
    return A.name !== this.name && A.decodeValue(e, A), null;
  }
  get name() {
    return "reserved";
  }
}
function isValidUTF8(t) {
  return buffer.Buffer.compare(new buffer.Buffer(t.toString(), "utf8"), t) === 0;
}
class TextClass extends PrimitiveType {
  accept(e, A) {
    return e.visitText(this, A);
  }
  covariant(e) {
    return typeof e == "string";
  }
  encodeValue(e) {
    const A = buffer.Buffer.from(e, "utf8"), n = lebEncode(A.length);
    return buffer.Buffer.concat([n, A]);
  }
  encodeType() {
    return slebEncode(-15);
  }
  decodeValue(e, A) {
    this.checkType(A);
    const n = lebDecode(e), o = safeRead(e, Number(n));
    if (!isValidUTF8(o))
      throw new Error("Not valid UTF8 text");
    return o.toString("utf8");
  }
  get name() {
    return "text";
  }
  valueToString(e) {
    return '"' + e + '"';
  }
}
class IntClass extends PrimitiveType {
  accept(e, A) {
    return e.visitInt(this, A);
  }
  covariant(e) {
    return typeof e == "bigint" || Number.isInteger(e);
  }
  encodeValue(e) {
    return slebEncode(e);
  }
  encodeType() {
    return slebEncode(-4);
  }
  decodeValue(e, A) {
    return this.checkType(A), slebDecode(e);
  }
  get name() {
    return "int";
  }
  valueToString(e) {
    return e.toString();
  }
}
class NatClass extends PrimitiveType {
  accept(e, A) {
    return e.visitNat(this, A);
  }
  covariant(e) {
    return typeof e == "bigint" && e >= BigInt(0) || Number.isInteger(e) && e >= 0;
  }
  encodeValue(e) {
    return lebEncode(e);
  }
  encodeType() {
    return slebEncode(-3);
  }
  decodeValue(e, A) {
    return this.checkType(A), lebDecode(e);
  }
  get name() {
    return "nat";
  }
  valueToString(e) {
    return e.toString();
  }
}
class FloatClass extends PrimitiveType {
  constructor(e) {
    if (super(), this._bits = e, e !== 32 && e !== 64)
      throw new Error("not a valid float type");
  }
  accept(e, A) {
    return e.visitFloat(this, A);
  }
  covariant(e) {
    return typeof e == "number" || e instanceof Number;
  }
  encodeValue(e) {
    const A = buffer.Buffer.allocUnsafe(this._bits / 8);
    return this._bits === 32 ? A.writeFloatLE(e, 0) : A.writeDoubleLE(e, 0), A;
  }
  encodeType() {
    const e = this._bits === 32 ? -13 : -14;
    return slebEncode(e);
  }
  decodeValue(e, A) {
    this.checkType(A);
    const n = safeRead(e, this._bits / 8);
    return this._bits === 32 ? n.readFloatLE(0) : n.readDoubleLE(0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(e) {
    return e.toString();
  }
}
class FixedIntClass extends PrimitiveType {
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, A) {
    return e.visitFixedInt(this, A);
  }
  covariant(e) {
    const A = BigInt(2) ** BigInt(this._bits - 1) * BigInt(-1), n = BigInt(2) ** BigInt(this._bits - 1) - BigInt(1);
    if (typeof e == "bigint")
      return e >= A && e <= n;
    if (Number.isInteger(e)) {
      const o = BigInt(e);
      return o >= A && o <= n;
    } else
      return !1;
  }
  encodeValue(e) {
    return writeIntLE(e, this._bits / 8);
  }
  encodeType() {
    const e = Math.log2(this._bits) - 3;
    return slebEncode(-9 - e);
  }
  decodeValue(e, A) {
    this.checkType(A);
    const n = readIntLE(e, this._bits / 8);
    return this._bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class FixedNatClass extends PrimitiveType {
  constructor(e) {
    super(), this.bits = e;
  }
  accept(e, A) {
    return e.visitFixedNat(this, A);
  }
  covariant(e) {
    const A = BigInt(2) ** BigInt(this.bits);
    return typeof e == "bigint" && e > BigInt(0) ? e < A : Number.isInteger(e) && e >= 0 ? BigInt(e) < A : !1;
  }
  encodeValue(e) {
    return writeUIntLE(e, this.bits / 8);
  }
  encodeType() {
    const e = Math.log2(this.bits) - 3;
    return slebEncode(-5 - e);
  }
  decodeValue(e, A) {
    this.checkType(A);
    const n = readUIntLE(e, this.bits / 8);
    return this.bits <= 32 ? Number(n) : n;
  }
  get name() {
    return `nat${this.bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}
class VecClass extends ConstructType {
  constructor(e) {
    super(), this._type = e, this._blobOptimization = !1, e instanceof FixedNatClass && e.bits === 8 && (this._blobOptimization = !0);
  }
  accept(e, A) {
    return e.visitVec(this, this._type, A);
  }
  covariant(e) {
    return Array.isArray(e) && e.every((A) => this._type.covariant(A));
  }
  encodeValue(e) {
    const A = lebEncode(e.length);
    return this._blobOptimization ? buffer.Buffer.concat([A, buffer.Buffer.from(e)]) : buffer.Buffer.concat([A, ...e.map((n) => this._type.encodeValue(n))]);
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const A = slebEncode(-19), n = this._type.encodeType(e);
    e.add(this, buffer.Buffer.concat([A, n]));
  }
  decodeValue(e, A) {
    const n = this.checkType(A);
    if (!(n instanceof VecClass))
      throw new Error("Not a vector type");
    const o = Number(lebDecode(e));
    if (this._blobOptimization)
      return [...new Uint8Array(e.read(o))];
    const s = [];
    for (let a = 0; a < o; a++)
      s.push(this._type.decodeValue(e, n._type));
    return s;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(e) {
    return "vec {" + e.map((n) => this._type.valueToString(n)).join("; ") + "}";
  }
}
class OptClass extends ConstructType {
  constructor(e) {
    super(), this._type = e;
  }
  accept(e, A) {
    return e.visitOpt(this, this._type, A);
  }
  covariant(e) {
    return Array.isArray(e) && (e.length === 0 || e.length === 1 && this._type.covariant(e[0]));
  }
  encodeValue(e) {
    return e.length === 0 ? buffer.Buffer.from([0]) : buffer.Buffer.concat([buffer.Buffer.from([1]), this._type.encodeValue(e[0])]);
  }
  _buildTypeTableImpl(e) {
    this._type.buildTypeTable(e);
    const A = slebEncode(-18), n = this._type.encodeType(e);
    e.add(this, buffer.Buffer.concat([A, n]));
  }
  decodeValue(e, A) {
    const n = this.checkType(A);
    if (!(n instanceof OptClass))
      throw new Error("Not an option type");
    const o = safeRead(e, 1).toString("hex");
    if (o === "00")
      return [];
    if (o === "01")
      return [this._type.decodeValue(e, n._type)];
    throw new Error("Not an option value");
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(e) {
    return e.length === 0 ? "null" : `opt ${this._type.valueToString(e[0])}`;
  }
}
class RecordClass extends ConstructType {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((A, n) => idlLabelToId(A[0]) - idlLabelToId(n[0]));
  }
  accept(e, A) {
    return e.visitRecord(this, this._fields, A);
  }
  tryAsTuple() {
    const e = [];
    for (let A = 0; A < this._fields.length; A++) {
      const [n, o] = this._fields[A];
      if (n !== `_${A}_`)
        return null;
      e.push(o);
    }
    return e;
  }
  covariant(e) {
    return typeof e == "object" && this._fields.every(([A, n]) => {
      if (!e.hasOwnProperty(A))
        throw new Error(`Record is missing key "${A}".`);
      return n.covariant(e[A]);
    });
  }
  encodeValue(e) {
    const A = this._fields.map(([o]) => e[o]), n = zipWith(this._fields, A, ([, o], s) => o.encodeValue(s));
    return buffer.Buffer.concat(n);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, a]) => a.buildTypeTable(e));
    const A = slebEncode(-20), n = lebEncode(this._fields.length), o = this._fields.map(([s, a]) => buffer.Buffer.concat([lebEncode(idlLabelToId(s)), a.encodeType(e)]));
    e.add(this, buffer.Buffer.concat([A, n, buffer.Buffer.concat(o)]));
  }
  decodeValue(e, A) {
    const n = this.checkType(A);
    if (!(n instanceof RecordClass))
      throw new Error("Not a record type");
    const o = {};
    let s = 0;
    for (const [a, c] of n._fields) {
      if (s >= this._fields.length || idlLabelToId(this._fields[s][0]) !== idlLabelToId(a)) {
        c.decodeValue(e, c);
        continue;
      }
      const [l, B] = this._fields[s];
      o[l] = B.decodeValue(e, c), s++;
    }
    if (s < this._fields.length)
      throw new Error("Cannot find field " + this._fields[s][0]);
    return o;
  }
  get name() {
    return `record {${this._fields.map(([A, n]) => A + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `record {${this._fields.map(([A, n]) => A + ":" + n.display()).join("; ")}}`;
  }
  valueToString(e) {
    const A = this._fields.map(([o]) => e[o]);
    return `record {${zipWith(this._fields, A, ([o, s], a) => o + "=" + s.valueToString(a)).join("; ")}}`;
  }
}
class TupleClass extends RecordClass {
  constructor(e) {
    const A = {};
    e.forEach((n, o) => A["_" + o + "_"] = n), super(A), this._components = e;
  }
  accept(e, A) {
    return e.visitTuple(this, this._components, A);
  }
  covariant(e) {
    return Array.isArray(e) && e.length >= this._fields.length && this._components.every((A, n) => A.covariant(e[n]));
  }
  encodeValue(e) {
    const A = zipWith(this._components, e, (n, o) => n.encodeValue(o));
    return buffer.Buffer.concat(A);
  }
  decodeValue(e, A) {
    const n = this.checkType(A);
    if (!(n instanceof TupleClass))
      throw new Error("not a tuple type");
    if (n._components.length < this._components.length)
      throw new Error("tuple mismatch");
    const o = [];
    for (const [s, a] of n._components.entries())
      s >= this._components.length ? a.decodeValue(e, a) : o.push(this._components[s].decodeValue(e, a));
    return o;
  }
  display() {
    return `record {${this._components.map((A) => A.display()).join("; ")}}`;
  }
  valueToString(e) {
    return `record {${zipWith(this._components, e, (n, o) => n.valueToString(o)).join("; ")}}`;
  }
}
class VariantClass extends ConstructType {
  constructor(e = {}) {
    super(), this._fields = Object.entries(e).sort((A, n) => idlLabelToId(A[0]) - idlLabelToId(n[0]));
  }
  accept(e, A) {
    return e.visitVariant(this, this._fields, A);
  }
  covariant(e) {
    return typeof e == "object" && Object.entries(e).length === 1 && this._fields.every(([A, n]) => !e.hasOwnProperty(A) || n.covariant(e[A]));
  }
  encodeValue(e) {
    for (let A = 0; A < this._fields.length; A++) {
      const [n, o] = this._fields[A];
      if (e.hasOwnProperty(n)) {
        const s = lebEncode(A), a = o.encodeValue(e[n]);
        return buffer.Buffer.concat([s, a]);
      }
    }
    throw Error("Variant has no data: " + e);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([, s]) => {
      s.buildTypeTable(e);
    });
    const A = slebEncode(-21), n = lebEncode(this._fields.length), o = this._fields.map(([s, a]) => buffer.Buffer.concat([lebEncode(idlLabelToId(s)), a.encodeType(e)]));
    e.add(this, buffer.Buffer.concat([A, n, ...o]));
  }
  decodeValue(e, A) {
    const n = this.checkType(A);
    if (!(n instanceof VariantClass))
      throw new Error("Not a variant type");
    const o = Number(lebDecode(e));
    if (o >= n._fields.length)
      throw Error("Invalid variant index: " + o);
    const [s, a] = n._fields[o];
    for (const [c, l] of this._fields)
      if (idlLabelToId(s) === idlLabelToId(c)) {
        const B = l.decodeValue(e, a);
        return { [c]: B };
      }
    throw new Error("Cannot find field hash " + s);
  }
  get name() {
    return `variant {${this._fields.map(([A, n]) => A + ":" + n.name).join("; ")}}`;
  }
  display() {
    return `variant {${this._fields.map(([A, n]) => A + (n.name === "null" ? "" : `:${n.display()}`)).join("; ")}}`;
  }
  valueToString(e) {
    for (const [A, n] of this._fields)
      if (e.hasOwnProperty(A)) {
        const o = n.valueToString(e[A]);
        return o === "null" ? `variant {${A}}` : `variant {${A}=${o}}`;
      }
    throw new Error("Variant has no data: " + e);
  }
}
class RecClass extends ConstructType {
  constructor() {
    super(...arguments), this._id = RecClass._counter++, this._type = void 0;
  }
  accept(e, A) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return e.visitRec(this, this._type, A);
  }
  fill(e) {
    this._type = e;
  }
  getType() {
    return this._type;
  }
  covariant(e) {
    return this._type ? this._type.covariant(e) : !1;
  }
  encodeValue(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.encodeValue(e);
  }
  _buildTypeTableImpl(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    e.add(this, buffer.Buffer.alloc(0)), this._type.buildTypeTable(e), e.merge(this, this._type.name);
  }
  decodeValue(e, A) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(e, A);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return `\u03BC${this.name}.${this._type.name}`;
  }
  valueToString(e) {
    if (!this._type)
      throw Error("Recursive type uninitialized.");
    return this._type.valueToString(e);
  }
}
RecClass._counter = 0;
function decodePrincipalId(t) {
  if (safeRead(t, 1).toString("hex") !== "01")
    throw new Error("Cannot decode principal");
  const A = Number(lebDecode(t)), n = safeRead(t, A).toString("hex").toUpperCase();
  return Principal.fromHex(n);
}
class PrincipalClass extends PrimitiveType {
  accept(e, A) {
    return e.visitPrincipal(this, A);
  }
  covariant(e) {
    return e && e._isPrincipal;
  }
  encodeValue(e) {
    const A = e.toHex(), n = buffer.Buffer.from(A, "hex"), o = lebEncode(n.length);
    return buffer.Buffer.concat([buffer.Buffer.from([1]), o, n]);
  }
  encodeType() {
    return slebEncode(-24);
  }
  decodeValue(e, A) {
    return this.checkType(A), decodePrincipalId(e);
  }
  get name() {
    return "principal";
  }
  valueToString(e) {
    return `${this.name} "${e.toText()}"`;
  }
}
class FuncClass extends ConstructType {
  constructor(e, A, n = []) {
    super(), this.argTypes = e, this.retTypes = A, this.annotations = n;
  }
  static argsToString(e, A) {
    if (e.length !== A.length)
      throw new Error("arity mismatch");
    return "(" + e.map((n, o) => n.valueToString(A[o])).join(", ") + ")";
  }
  accept(e, A) {
    return e.visitFunc(this, A);
  }
  covariant(e) {
    return Array.isArray(e) && e.length === 2 && e[0] && e[0]._isPrincipal && typeof e[1] == "string";
  }
  encodeValue(e) {
    const A = e[0].toHex(), n = buffer.Buffer.from(A, "hex"), o = lebEncode(n.length), s = buffer.Buffer.concat([buffer.Buffer.from([1]), o, n]), a = buffer.Buffer.from(e[1], "utf8"), c = lebEncode(a.length);
    return buffer.Buffer.concat([buffer.Buffer.from([1]), s, c, a]);
  }
  _buildTypeTableImpl(e) {
    this.argTypes.forEach((B) => B.buildTypeTable(e)), this.retTypes.forEach((B) => B.buildTypeTable(e));
    const A = slebEncode(-22), n = lebEncode(this.argTypes.length), o = buffer.Buffer.concat(this.argTypes.map((B) => B.encodeType(e))), s = lebEncode(this.retTypes.length), a = buffer.Buffer.concat(this.retTypes.map((B) => B.encodeType(e))), c = lebEncode(this.annotations.length), l = buffer.Buffer.concat(this.annotations.map((B) => this.encodeAnnotation(B)));
    e.add(this, buffer.Buffer.concat([A, n, o, s, a, c, l]));
  }
  decodeValue(e) {
    if (safeRead(e, 1).toString("hex") !== "01")
      throw new Error("Cannot decode function reference");
    const n = decodePrincipalId(e), o = Number(lebDecode(e)), s = safeRead(e, o);
    if (!isValidUTF8(s))
      throw new Error("Not valid UTF8 method name");
    const a = s.toString("utf8");
    return [n, a];
  }
  get name() {
    const e = this.argTypes.map((o) => o.name).join(", "), A = this.retTypes.map((o) => o.name).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) -> (${A})${n}`;
  }
  valueToString([e, A]) {
    return `func "${e.toText()}".${A}`;
  }
  display() {
    const e = this.argTypes.map((o) => o.display()).join(", "), A = this.retTypes.map((o) => o.display()).join(", "), n = " " + this.annotations.join(" ");
    return `(${e}) \u2192 (${A})${n}`;
  }
  encodeAnnotation(e) {
    if (e === "query")
      return buffer.Buffer.from([1]);
    if (e === "oneway")
      return buffer.Buffer.from([2]);
    throw new Error("Illeagal function annotation");
  }
}
class ServiceClass extends ConstructType {
  constructor(e) {
    super(), this._fields = Object.entries(e).sort((A, n) => idlLabelToId(A[0]) - idlLabelToId(n[0]));
  }
  accept(e, A) {
    return e.visitService(this, A);
  }
  covariant(e) {
    return e && e._isPrincipal;
  }
  encodeValue(e) {
    const A = e.toHex(), n = buffer.Buffer.from(A, "hex"), o = lebEncode(n.length);
    return buffer.Buffer.concat([buffer.Buffer.from([1]), o, n]);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, a]) => a.buildTypeTable(e));
    const A = slebEncode(-23), n = lebEncode(this._fields.length), o = this._fields.map(([s, a]) => {
      const c = buffer.Buffer.from(s, "utf8"), l = lebEncode(c.length);
      return buffer.Buffer.concat([l, c, a.encodeType(e)]);
    });
    e.add(this, buffer.Buffer.concat([A, n, buffer.Buffer.concat(o)]));
  }
  decodeValue(e) {
    return decodePrincipalId(e);
  }
  get name() {
    return `service {${this._fields.map(([A, n]) => A + ":" + n.name).join("; ")}}`;
  }
  valueToString(e) {
    return `service "${e.toText()}"`;
  }
}
function toReadableString(t) {
  return typeof t == "bigint" ? `BigInt(${t})` : JSON.stringify(t);
}
function encode$2(t, e) {
  if (e.length < t.length)
    throw Error("Wrong number of message arguments");
  const A = new TypeTable();
  t.forEach((l) => l.buildTypeTable(A));
  const n = buffer.Buffer.from(magicNumber, "utf8"), o = A.encode(), s = lebEncode(e.length), a = buffer.Buffer.concat(t.map((l) => l.encodeType(A))), c = buffer.Buffer.concat(zipWith(t, e, (l, B) => {
    if (!l.covariant(B))
      throw new Error(`Invalid ${l.display()} argument: ${toReadableString(B)}`);
    return l.encodeValue(B);
  }));
  return buffer.Buffer.concat([n, o, s, a, c]);
}
function decode$2(t, e) {
  const A = new bufferPipe(e);
  if (e.byteLength < magicNumber.length)
    throw new Error("Message length smaller than magic number");
  const n = safeRead(A, magicNumber.length).toString();
  if (n !== magicNumber)
    throw new Error("Wrong magic number: " + n);
  function o(I) {
    const x = [], U = Number(lebDecode(I));
    for (let T = 0; T < U; T++) {
      const Z = Number(slebDecode(I));
      switch (Z) {
        case -18:
        case -19: {
          const j = Number(slebDecode(I));
          x.push([Z, j]);
          break;
        }
        case -20:
        case -21: {
          const j = [];
          let L = Number(lebDecode(I)), Y;
          for (; L--; ) {
            const W = Number(lebDecode(I));
            if (W >= Math.pow(2, 32))
              throw new Error("field id out of 32-bit range");
            if (typeof Y == "number" && Y >= W)
              throw new Error("field id collision or not sorted");
            Y = W;
            const h = Number(slebDecode(I));
            j.push([W, h]);
          }
          x.push([Z, j]);
          break;
        }
        case -22: {
          for (let L = 0; L < 2; L++) {
            let Y = Number(lebDecode(I));
            for (; Y--; )
              slebDecode(I);
          }
          const j = Number(lebDecode(I));
          safeRead(I, j), x.push([Z, void 0]);
          break;
        }
        case -23: {
          let j = Number(lebDecode(I));
          for (; j--; ) {
            const L = Number(lebDecode(I));
            safeRead(I, L), slebDecode(I);
          }
          x.push([Z, void 0]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + Z);
      }
    }
    const v = [], D = Number(lebDecode(I));
    for (let T = 0; T < D; T++)
      v.push(Number(slebDecode(I)));
    return [x, v];
  }
  const [s, a] = o(A);
  if (a.length < t.length)
    throw new Error("Wrong number of return values");
  const c = s.map((I) => Rec());
  function l(I) {
    if (I < -24)
      throw new Error("future value not supported");
    if (I < 0)
      switch (I) {
        case -1:
          return Null;
        case -2:
          return Bool;
        case -3:
          return Nat;
        case -4:
          return Int;
        case -5:
          return Nat8;
        case -6:
          return Nat16;
        case -7:
          return Nat32;
        case -8:
          return Nat64;
        case -9:
          return Int8;
        case -10:
          return Int16;
        case -11:
          return Int32;
        case -12:
          return Int64;
        case -13:
          return Float32;
        case -14:
          return Float64;
        case -15:
          return Text;
        case -16:
          return Reserved;
        case -17:
          return Empty;
        case -24:
          return Principal$1;
        default:
          throw new Error("Illegal op_code: " + I);
      }
    if (I >= s.length)
      throw new Error("type index out of range");
    return c[I];
  }
  function B(I) {
    switch (I[0]) {
      case -19: {
        const x = l(I[1]);
        return Vec(x);
      }
      case -18: {
        const x = l(I[1]);
        return Opt(x);
      }
      case -20: {
        const x = {};
        for (const [D, T] of I[1]) {
          const Z = `_${D}_`;
          x[Z] = l(T);
        }
        const U = Record(x), v = U.tryAsTuple();
        return Array.isArray(v) ? Tuple(...v) : U;
      }
      case -21: {
        const x = {};
        for (const [U, v] of I[1]) {
          const D = `_${U}_`;
          x[D] = l(v);
        }
        return Variant(x);
      }
      case -22:
        return Func([], [], []);
      case -23:
        return Service({});
      default:
        throw new Error("Illegal op_code: " + I[0]);
    }
  }
  s.forEach((I, x) => {
    const U = B(I);
    c[x].fill(U);
  });
  const g = a.map((I) => l(I)), E = t.map((I, x) => I.decodeValue(A, g[x]));
  for (let I = t.length; I < g.length; I++)
    g[I].decodeValue(A, g[I]);
  if (A.buffer.length > 0)
    throw new Error("decode: Left-over bytes");
  return E;
}
const Empty = new EmptyClass(), Reserved = new ReservedClass(), Bool = new BoolClass(), Null = new NullClass(), Text = new TextClass(), Int = new IntClass(), Nat = new NatClass(), Float32 = new FloatClass(32), Float64 = new FloatClass(64), Int8 = new FixedIntClass(8), Int16 = new FixedIntClass(16), Int32 = new FixedIntClass(32), Int64 = new FixedIntClass(64), Nat8 = new FixedNatClass(8), Nat16 = new FixedNatClass(16), Nat32 = new FixedNatClass(32), Nat64 = new FixedNatClass(64), Principal$1 = new PrincipalClass();
function Tuple(...t) {
  return new TupleClass(t);
}
function Vec(t) {
  return new VecClass(t);
}
function Opt(t) {
  return new OptClass(t);
}
function Record(t) {
  return new RecordClass(t);
}
function Variant(t) {
  return new VariantClass(t);
}
function Rec() {
  return new RecClass();
}
function Func(t, e, A = []) {
  return new FuncClass(t, e, A);
}
function Service(t) {
  return new ServiceClass(t);
}
var IDL = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Visitor,
  Type,
  PrimitiveType,
  ConstructType,
  EmptyClass,
  BoolClass,
  NullClass,
  ReservedClass,
  TextClass,
  IntClass,
  NatClass,
  FloatClass,
  FixedIntClass,
  FixedNatClass,
  VecClass,
  OptClass,
  RecordClass,
  TupleClass,
  VariantClass,
  RecClass,
  PrincipalClass,
  FuncClass,
  ServiceClass,
  encode: encode$2,
  decode: decode$2,
  Empty,
  Reserved,
  Bool,
  Null,
  Text,
  Int,
  Nat,
  Float32,
  Float64,
  Int8,
  Int16,
  Int32,
  Int64,
  Nat8,
  Nat16,
  Nat32,
  Nat64,
  Principal: Principal$1,
  Tuple,
  Vec,
  Opt,
  Record,
  Variant,
  Rec,
  Func,
  Service
}), base64Arraybuffer = createCommonjsModule(function(t, e) {
  (function() {
    for (var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), o = 0; o < A.length; o++)
      n[A.charCodeAt(o)] = o;
    e.encode = function(s) {
      var a = new Uint8Array(s), c, l = a.length, B = "";
      for (c = 0; c < l; c += 3)
        B += A[a[c] >> 2], B += A[(a[c] & 3) << 4 | a[c + 1] >> 4], B += A[(a[c + 1] & 15) << 2 | a[c + 2] >> 6], B += A[a[c + 2] & 63];
      return l % 3 === 2 ? B = B.substring(0, B.length - 1) + "=" : l % 3 === 1 && (B = B.substring(0, B.length - 2) + "=="), B;
    }, e.decode = function(s) {
      var a = s.length * 0.75, c = s.length, l, B = 0, g, E, I, x;
      s[s.length - 1] === "=" && (a--, s[s.length - 2] === "=" && a--);
      var U = new ArrayBuffer(a), v = new Uint8Array(U);
      for (l = 0; l < c; l += 4)
        g = n[s.charCodeAt(l)], E = n[s.charCodeAt(l + 1)], I = n[s.charCodeAt(l + 2)], x = n[s.charCodeAt(l + 3)], v[B++] = g << 2 | E >> 4, v[B++] = (E & 15) << 4 | I >> 2, v[B++] = (I & 3) << 6 | x & 63;
      return U;
    };
  })();
});
let wasm;
const wasmBytesBase64 = `
    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
    g8AAEF8CQAJAIAZB6AFqEFoNACAGQShqEIQBDQAgBkGIPWoQS0EAIQcgBkGIwwBqQTgQchogBkG4IWpBOBByGiAGQYjA
    AGoQSyAGQcjEAGoQSyAGQcjJAGoQSyAGQcjMAGoQSyAGQagGahBLIAZBsAxqEEsgBkHIzwBqEEsgBkHQ1QBqEEsgBkHY
    2wBqEEsgBkG4FWoQSyAGQZgjaiAGQcjJAGpBwAEQZxogBkHYJGogBkHIzABqQcABEGcaIAZBmCZqIAZBqAZqQcABEGca
    IAZB2CdqIAZBsAxqQcABEGcaIAZBmClqIAZByM8AakHAARBnGiAGQdgqaiAGQdDVAGpBwAEQZxogBkGYLGogBkHY2wBq
    QcABEGcaIAZB2C1qIAZBuBVqQcABEGcaIAZBuBVqQecAEHIaIAZBiMAAaiAGQShqEH8gBkGIwABqEBggBkGYI2ogBkEo
    ahB/A0AgB0HACkYEQCAGQbghaiAGQegBahBrIAYpA7ghIRcgBkG4IWpBARCdASAGQbghahBEIAYpA7ghIRYgBkGIwwBq
    IAZBuCFqEGsgBkGIwwBqQQEQnQEgBkGIwwBqEEQgBkG4IWogBkGIwwBqIBdCAoGnEE8gBkGIwABqIAZBKGogFkICgacQ
    bSAGQcjEAGogBkGIwABqEH8gBkG4IWoQKUEDaiIJQQJ2IgdBAWohAkEAIQgCQAJAAkADQAJAIAZBuCFqQQUQjAEhAyAC
    IAhGBEAgCUGYA0kNASACQecAQbCEwAAQPAALIAhB5wBGDQIgBkG4FWogCGogA0FwaiIDOgAAIAZBuCFqIANBGHRBGHUQ
    ngEgBkG4IWoQRCAGQbghakEEEDsgCEEBaiEIDAELCyAGQbgVaiACaiADOgAAIANBGHRBGHVBf2oiA0EBdiECIANBD0sN
    ASAGQYg9aiAGQZgjaiACQcABbGoQfwNAIAdBf0YEQCAGQYg9aiAGQcjEAGoQcyAGQZgjaiAGQYg9akHAARBnGgwICyAH
    QeYASw0DIAZBiMAAaiAGQZgjaiAGQbgVaiAHaiwAABAfIAdBf2ohByAGQYg9ahAYIAZBiD1qEBggBkGIPWoQGCAGQYg9
    ahAYIAZBiD1qIAZBiMAAahAMDAALAAtB5wBB5wBBoITAABA8AAsgAkEIQcCEwAAQPAALIAdB5wBB0ITAABA8AAUgBkHI
    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
    UtcEAKAIAIgFBASACdCICcQRAIAAoAggMAQtB1LXBACABIAJyNgIAIAALIQEgACAENgIIIAEgBDYCDCAEIAA2AgwgBCAB
    NgIIC0EAIQVB6LjBACgCACIAIAZNDQBB6LjBACAAIAZrIgI2AgBB8LjBAEHwuMEAKAIAIgEgBmoiADYCACAAIAJBAXI2A
    gQgASAGQQNyNgIEIAFBCGoPCyAFDwsgASAHNgIYIAMoAhAiAARAIAEgADYCECAAIAE2AhgLIANBFGooAgAiAEUNACABQR
    RqIAA2AgAgACABNgIYCwJAIAVBEE8EQCADIAZBA3I2AgQgAyAGaiIEIAVBAXI2AgQgBCAFaiAFNgIAQeS4wQAoAgAiAAR
    AIABBA3YiAkEDdEHctcEAaiEAQey4wQAoAgAhBwJ/QdS1wQAoAgAiAUEBIAJBH3F0IgJxBEAgACgCCAwBC0HUtcEAIAEg
    AnI2AgAgAAshAiAAIAc2AgggAiAHNgIMIAcgADYCDCAHIAI2AggLQey4wQAgBDYCAEHkuMEAIAU2AgAMAQsgAyAFIAZqI
    gBBA3I2AgQgACADaiIAIAAoAgRBAXI2AgQLIANBCGoLtA8BA38jAEGAC2siAiQAIAJBCGoQSyACQcgBakE4EHIaIAJBAT
    YCgAIgAkGIAmpBOBByGiACQQE2AsACIAJByAJqQTgQchogAkEBNgKAAyACQYgDakE4EHIaIAJBATYCwAMgAkHIA2pBOBB
    yGiACQQE2AoAEIAJBiARqQQEQigEgAkHIBGpBOBByGiACQQE2AoAFIAJBiAVqQTgQchogAkEBNgLABSACQcgFaiABEIUB
    IAJBiAZqQTgQchogAkEBNgLABiACQcgGakE4EHIaIAJBATYCgAcgAkGIB2pBOBByGiACQQE2AsAHIAJByAdqQTgQchogA
    kEBNgKACCACQcgFahBYIQMgAkHICWpB4ITAABBfIAJBiApqIAJByAlqEIsBIAJByAFqIAJBiApqEKUBIAJByAlqQZiFwA
    AQXyACQYgKaiACQcgJahCLASACQYgCaiACQYgKahClASACQcgFahADIAJByAVqQQsQUiACQYgGaiACQcgFahClASACQYg
    GaiACQYgEahB4IAJBiAZqEEQgAkGIBmogAkHIBWoQSCACQYgFaiACQcgBahClASACQYgFaiACQYgGahBIIAJBiAZqIAJB
    iARqEHggAkGIBmoQRCACQYgGaiACQYgCahBIIAJBiAZqEEEgAkGIBmoQRCACQYgDaiACQYgGahClASACQcgDaiACQcgFa
    hClASACQcgDaiACQYgDahBIIAJByAdqIAJBiANqEKUBIAJByAdqEAMgAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgGai
    ACQcgBahClASACQYgGaiACQcgGahBIIAJByAdqIAJBiAZqEHggAkHIB2oQRCACQcgHaiACQYgDahBIIAJByAZqIAJBiAV
    qEEggAkGIBmogAkGIAmoQpQEgAkGIBmogAkHIBmoQSCACQcgHaiACQYgGahB4IAJByAdqEEQgAkGIBmogAkHIB2oQpQEg
    AkGIBmogAkGIBWoQSCACQYgGaiACQYgHahBcIQQgAkGIBWogAkGIBmoQpQEgAkGIBWogAkGIB2oQNCACQYgFaiACQcgHa
    hBIIAJBiANqIAJBiAVqEEggAkHIA2ogAkGIBWoQSCACQcgFaiABEEggAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgFai
    ACQcgGahClASACQYgFaiACQcgFahBIIAJByAVqIAJBiAZqEKUBIAJByAVqQQsQUiACQcgJakHQhcAAEF8gAkGICmogAkH
    ICWoQiwEgAkHIAmogAkGICmoQpQEgAkHIAmogAkGIB2oQSCACQYgDaiACQcgDakEBIARrIgEQeSACQcgGaiACQYgFaiAB
    EHkgAkGIBmogAkHIBWogARB5IAJBiAdqIAJByAJqIAEQeSACQYgKaiACQYgGaiACQYgHahAjIAJByARqIAJBiApqEKUBI
    AJByARqIAJByAZqEEggAkHIBGoQWCEBIAJBiAZqIAJByARqEKUBIAJBiAZqEEEgAkGIBmoQRCACQcgEaiACQYgGaiABIA
    NzEHkgAkGICmpBiIbAABBfIAJBiAhqIAJBiApqEIsBQTghAQNAIAFBoAVGRQRAIAJBiAhqIAJBiANqEEggAkHICWogAUG
    IhsAAahBfIAFBOGohASACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQYgIaiACQYgGahB4IAJBiAhqEEQMAQsL
    IAJByAhqIAJBiANqEIUBIAJByAlqQaiLwAAQXyACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQcgIaiACQYgGa
    hB4IAJByAhqEERBACEBA0AgAUH4A0ZFBEAgAkHICGogAkGIA2oQSCACQcgJaiABQeCLwABqEF8gAUE4aiEBIAJBiApqIA
    JByAlqEIsBIAJBiAZqIAJBiApqEKUBIAJByAhqIAJBiAZqEHggAkHICGoQRAwBCwsgAkGICmpB2I/AABBfIAJBiAlqIAJ
    BiApqEIsBQQAhAQNAIAFByAZGBEACQCACQcgJaiACQYgDahCFASACQcgKakHYlsAAEF8gAkGICmogAkHICmoQiwEgAkGI
    BmogAkGICmoQpQEgAkHICWogAkGIBmoQeCACQcgJahBEQQAhAQNAIAFBkAZGDQEgAkHICWogAkGIA2oQSCACQcgKaiABQ
    ZCXwABqEF8gAUE4aiEBIAJBiApqIAJByApqEIsBIAJBiAZqIAJBiApqEKUBIAJByAlqIAJBiAZqEHggAkHICWoQRAwACw
    ALBSACQYgJaiACQYgDahBIIAJByAlqIAFBkJDAAGoQXyABQThqIQEgAkGICmogAkHICWoQiwEgAkGIBmogAkGICmoQpQE
    gAkGICWogAkGIBmoQeCACQYgJahBEDAELCyACQYgJaiACQcgEahBIIAJBiAZqIAJBiAhqEKUBIAJBiAZqIAJByAlqEEgg
    AkEIaiACQYgGahClASACQYgGaiACQYgJahClASACQYgGaiACQcgIahBIIAJByABqIAJBiAZqEKUBIAJBiAZqIAJByAhqE
    KUBIAJBiAZqIAJByAlqEEggAkGIAWogAkGIBmoQpQEgACACQQhqQcABEGcaIAJBgAtqJAALzQ0CE38IfiMAQYADayIBJA
    AgADQCOCIUIBR+QoCAgBBaBEAgABASCyABQeABakHoABByGiABQcgBaiAAKQMAIhggGEI/hyIZIBggGRAxIAEgASkDyAE
    iFEL//////////wODNwPYASABQdABaikDACIXQgaGIBRCOoiEIRUgF0I6iCEaIABBCGoiCyEFIAAhBkEBIQcDQCAHQQZP
    BEAgAEEYaiEMIABBKGohCyAAQRBqIQcgACkDMCEYQQQhBkEAIQkgAUGgAWohDUEDIQpBAiEIQQchBQJAAkADQCAFQQpLD
    QIgBiAIIAYgCEsbIQ4gBiAKIAYgCksbQQN0QWhqIQ8gAUGYAWogBUEDdCIQIABqQVBqKQMAIhQgFEI/hyAYIBhCP4ciGR
    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
    OBByGiACQQE2AvgMIAJBgA1qQTgQchogAkG4DWpBATYCACACQYAIakE4EHIaIAJBATYCuAggAkHACGpBOBByGiACQfgIa
    kEBNgIAIAJBgApqIABBgANqIgMQXiACQYAIaiACQYAKahCQASACQYAKaiABQYADaiIFEF4gAkGACGogAkGACmoQDyACQc
    AMahCpASAERQRAIAJBgApqIAMQXiACQcAMaiACQYAKahCQASACQYAKaiABQYACahBeIAJBwAxqIAJBgApqEA8LIAAoAoA
    GQQRHBEAgAkGACmogAEGAAmoQXiACQcAMaiACQYAKahCQASACQYAKaiAFEF4gAkHADGogAkGACmoQDwsgAkGABGogAkHA
    DGogAkGACGoQoQEgAkGABGoQZgsgAkGACGogABCOASACQYAKaiABEI4BIAJBgAhqIABBgAJqIgQQlgEgAkGACGoQrAEgA
    kGACmogAUGAAmoiBRCWASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAQQkgEgAkGACG
    ogAEGABGoiAxCWASACQYAIahCsASACQYAKaiAFEJIBIAJBgApqIAFBgARqIgUQlgEgAkGACmoQrAEgAkGABmogAkGACGo
    QkgEgAkGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAI
    ahCWASAEIAJBgAJqEJIBIAQgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQ
    YAIaiADEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBRCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIA
    JBgAhqEJYBIAJBgAhqIAMQkgEgAkGACGogBRAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgAyACQYAEahCSASADIAJBgAp
    qEJYBIAJBgAZqIAJBgApqEJYBIAJBgAhqEGYgBCACQYAIahCWAQwDCyAAIAEQBgwECyACQcAMaiABQYAFahBeIAJBgAxq
    IAJBwAxqQcAAEGcaIAJBgAZqIAJBgAxqEKMBCyACQYAGahBmIAJBgAhqIAIQkgEgAkGACGoQKyACQYACaiACQYAIahCWA
    SAFIAJBgAJqEJIBIAJBgARqIAJBgAhqEJIBIAJBgAhqIAAQkgEgAkGACGogAxCWASACQYAIahCsASACQYAKaiABEJIBIA
    JBgApqIAFBgARqEJYBIAJBgApqEKwBIAJBgAhqIAJBgApqEBkgAkGABGogAkGACGoQlgEgAkGACGogAxCSAQJAIARBAkc
    EQCACQcAMaiABQYAFahBeIAJBgAhqIAJBwAxqEKIBDAELIAJBwAxqIAFBgAVqEF4gAkGADGogAkHADGpBwAAQZxogAkGA
    CGogAkGADGoQowELIAJBgAhqEGYgAkGACmogAkGACGoQkgEgAkGACmoQKyADIAJBgARqEJIBIAMgAkGACmoQlgEgAkGAB
    mogAkGACmoQlgEgAkGACGoQZiAFIAJBgAhqEJYBCyACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIABBBT
    YCgAYgABCZAQwBCyAAIAEQbAsgAkHADWokAAuaCQIPfwt+IwBBwAJrIgIkACACQeAAakGgp8AAEF8gAEE4EHIhDCACQZg
    BakHwABByGiACQZACakEwEHIaIAwQdCACIAEpAwAiFEL9//P/z///+QF+Qv//////////A4MiETcDiAIgAkHQAGogEUIA
    IAIpA2AiGCAYQj+HIhoQMSAUIAIpA1AiEXwiFiARVK0gAkHYAGopAwAgFEI/h3x8IhRCOocgASkDCCIRQj+HfCARIBRCB
    oYgFkI6iIQiEXwiEiARVK18IRNBASEDAkADQAJAIANBB0YEQCACQZACaiEJIAJB6ABqIQpBByEEIAJB4ABqIQ0gAkGIAm
    ohDkEGIQ8MAQsgA0EBdiIAQQFqIQUgCiAAayEGIAkgAEEDdCIHayEAIAdBCGohCCACQUBrIANBA3QiBCACQeAAamopAwA
    iFiAWQj+HIhQgAikDiAIiESARQj+HEDEgAkHIAGopAwAgEiAVfCIRIBJUrSATIBd8fHwgESACKQNAfCITIBFUrXwhEiAD
    QQFqIQcDQCADIAVNBEAgAkGIAmogBGogE0L9//P/z///+QF+Qv//////////A4MiETcDACACQTBqIBFCACAYIBoQMSACQ
    SBqIBFCACAWIBQQMSACQZgBaiADQQR0aiIAIAJBKGopAwAiGzcDCCAAIAIpAyAiGTcDACACKQMwIhEgE3wiFiARVK0gAk
    E4aikDACASfHwiFEI6hyABIAdBA3RqKQMAIhFCP4d8IBEgFEIGhiAWQjqIhCIRfCISIBFUrXwhEyAVIBl8IhUgGVStIBc
    gG3x8IRcgCUEIaiEJIApBAWohCiAHIQMMAwsgBkEGSw0DIAJBEGogAkHgAGogCGopAwAgAkHgAGogAGopAwB9IhEgEUI/
    hyACQYgCaiAAaikDACACQYgCaiAIaikDAH0iESARQj+HEDEgAikDECIRIBN8IhMgEVStIAJBGGopAwAgEnx8IRIgBUEBa
    iEFIABBeGohACAGQX9qIQYgCEEIaiEIDAALAAsLA0ACQCAEQQ1HBEAgDyAEQQF2IgBrIQUgDiAAQQN0IgtrIRAgDSALay
    EIIBMgF3wgEiAVfCITIBJUrXwhEiAEQQFqIQdBMCEAIAkhBiAKIQMDQCAAIAtGDQIgBUEGTQRAIAIgAyALaikDACAAIAh
    qKQMAfSIRIBFCP4cgACAQaikDACAGIAtqKQMAfSIRIBFCP4cQMSACKQMAIhEgE3wiEyARVK0gAkEIaikDACASfHwhEiAF
    QX9qIQUgBkEIaiEGIANBCGohAyAAQXhqIQAMAQsLIAVBB0HknsAAEDwACyAMIBJC//////////8DgzcDMCACQcACaiQAD
    wsgBEEDdCAMakFIaiATQv//////////A4M3AwAgEkI6hyABIAdBA3RqKQMAIhFCP4d8IBEgEkIGhiATQjqIhCIRfCISIB
    FUrXwhEyAXIARBBHQgAmpBOGoiAEEIaikDAH0gFSAAKQMAIhFUrX0hFyAOQQhqIQ4gDUEIaiENIA9BAWohDyAVIBF9IRU
    gByEEDAALAAsgBkEHQdSewAAQPAAL+QkBBH8jAEGACWsiAiQAIAJBgAhqIAAQXiACIAJBgAhqEF4gAkGACGogAEGAAWoi
    BBBeIAJBgAFqIAJBgAhqEF4gAkGACGogARBeIAIgAkGACGoQDyACQYAIaiABQYABaiIFEF4gAkGAAWogAkGACGoQDyAAK
    AKABiEDAkACQCABKAKABkECRwRAIANBAkYNASACQYAIaiAAQYAFahBeIAJBgAJqIAJBgAhqEF4gAkGACGogAUGABWoQXi
    ACQYACaiACQYAIahAPDAILIANBAkYEQCACQYAIaiAAQYAFahBeIAJBgAdqIAJBgAhqQcAAEGcaIAJBgAZqIAJBgAdqEIU
    BIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGABmogAkGAB2oQSCACQYAIakE4EHIaIAJBATYCuAggAkHA
    CGpBOBByIAJB+AhqQQE2AgAgAkGACGogAkGABmoQpQEQsgEgAkGAAmogAkGACGpBgAEQZxoMAgsgAkGACGogAEGABWoQX
    iACQYACaiACQYAIahBeIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAEMAQsgAkGACG
    ogAUGABWoQXiACQYACaiACQYAIahBeIAJBgAhqIABBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAE
    LIAJBgAhqIAAQXiACQYADaiACQYAIahBeIAJBgAhqIAEQXiACQYAEaiACQYAIahBeIAJBgAhqIAQQXiACQYADaiACQYAI
    ahCVASACQYADahCoASACQYAIaiAFEF4gAkGABGogAkGACGoQlQEgAkGABGoQqAEgAkGABWogAkGAA2oQXiACQYAFaiACQ
    YAEahAPIAJBgAZqIAIQXiACQYAGaiACQYABahCVASACQYAGahA6IAJBgAVqIAJBgAZqEJUBIAJBgAhqIAAQXiACQYADai
    ACQYAIahCQASACQYAIaiAAQYAFaiIDEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogARBeIAJBgARqIAJBgAh
    qEJABIAJBgAhqIAFBgAVqIgEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAHaiACQYADahBeIAJBgAdqIAJBgARq
    EA8gAkGABmogAhCQASACQYAGaiACQYACahCVASACQYAGahA6IAJBgAdqIAJBgAZqEJUBIAJBgAhqIAQQXiACQYADaiACQ
    YAIahCQASACQYAIaiADEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogBRBeIAJBgARqIAJBgAhqEJABIAJBgA
    hqIAEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAIaiACQYADahBeIAJBgAhqIAJBgARqEA8gAkGABmogAkGAAWo
    QkAEgAkGABmogAkGAAmoQlQEgAkGABmoQOiACQYAIaiACQYAGahCVASACQYABahBVIAIgAkGAAWoQlQEgACACIAJBgAVq
    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
    GogAkGABWoQfSACQYAEahCoASACQYAFaiAAEJABIAJBgAVqIAQQlQEgAkGABWoQqAEgAkGABmogARBeIAJBgAZqIAYQlQ
    EgAkGABmoQqAEgAkGABWogAkGABmoQDyACQYAGaiACEJABIAJBgAZqIAJBgAJqEJUBIAJBgAZqIAJBgAVqELUBIAJBgAZ
    qEKgBIAJBgAVqIAIQkAEgAkGABWogAhCVASACIAJBgAVqEJUBIAIQqAEgAkGAAmpBDBCfASACQYACahBVIAJBgAJqEKgB
    IAJBgAdqIAJBgAFqEF4gAkGAB2ogAkGAAmoQlQEgAkGAB2oQqAEgAkGAAWogAkGAAmoQfSACQYABahCoASACQYAGakEME
    J8BIAJBgAZqEFUgAkGABmoQqAEgAkGABWogAkGABmoQkAEgAkGABWogAkGABGoQDyACQYACaiACQYADahCQASACQYACai
    ACQYABahAPIAJBgAVqIAJBgAJqELUBIAJBgAZqIAIQDyACQYABaiACQYAHahAPIAJBgAZqIAJBgAFqEJUBIAIgAkGAA2o
    QDyACQYAHaiACQYAEahAPIAJBgAdqIAIQlQEgACACQYAFahCQASAAEKgBIAMgAkGABmoQkAEgAxCoASAEIAJBgAdqEJAB
    IAQQqAEgAkGACGokAAv2BQEFfyMAQYAEayICJAAgAiAAEIUBIAIgARBIIAJBQGsgAEFAayIDEIUBIAJBQGsgAUFAayIFE
    EggAkGAAWogAEGAAWoiBBCFASACQYABaiABQYABaiIGEEggAkHAAWogABCFASACQcABaiADEHggAkHAAWoQRCACQYACai
    ABEIUBIAJBgAJqIAUQeCACQYACahBEIAJBwAFqIAJBgAJqEEggAkGAAmogAhClASACQYACaiACQUBrEHggAkHAAWogAkG
    AAmoQgAEgAkHAAWoQRCACQYACaiADEKUBIAJBgAJqIAQQeCACQYACahBEIAJBwAJqIAUQhQEgAkHAAmogBhB4IAJBwAJq
    EEQgAkGAAmogAkHAAmoQSCACQcACaiACQUBrEKUBIAJBwAJqIAJBgAFqEHggAkGAAmogAkHAAmoQgAEgAkGAAmoQRCACQ
    cACaiAAEKUBIAJBwAJqIAQQeCACQcACahBEIAJBgANqIAEQhQEgAkGAA2ogBhB4IAJBgANqEEQgAkHAAmogAkGAA2oQSC
    ACQYADaiACEKUBIAJBgANqIAJBgAFqEHggAkGAA2ogAkHAAmoQswEgAkGAA2oQRCACQcACaiACEKUBIAJBwAJqIAIQeCA
    CIAJBwAJqEHggAhBEIAJBgAFqQQwQUiACQcADaiACQUBrEIUBIAJBwANqIAJBgAFqEHggAkHAA2oQRCACQUBrIAJBgAFq
    EIABIAJBQGsQRCACQYADakEMEFIgAkHAAmogAkGAA2oQpQEgAkHAAmogAkGAAmoQSCACQYABaiACQcABahClASACQYABa
    iACQUBrEEggAkHAAmogAkGAAWoQswEgAkGAA2ogAhBIIAJBQGsgAkHAA2oQSCACQYADaiACQUBrEHggAiACQcABahBIIA
    JBwANqIAJBgAJqEEggAkHAA2ogAhB4IAAgAkHAAmoQpQEgABBEIAMgAkGAA2oQpQEgAxBEIAQgAkHAA2oQpQEgBBBEIAJ
    BgARqJAALxQUBBH8jAEHwEmsiACQAIAAQOEF/IQEgABCIAUUEQCAAQYADakE4EHIaIABBuANqQTgQchogAEG4A2ogAEGA
    A2oQVCAAQfAKakG4gMAAEF8gAEHwDWpB8IDAABBfIABB8ANqIABB8ApqIABB8A1qEEkgAEHwBGpBOBByGiAAQQE2AqgFI
    ABBsAVqQTgQchogAEHoBWpBATYCACAAQfAFakE4EHIaIABBATYCqAYgAEGwBmpBOBByGiAAQegGakEBNgIAIABB8AZqQT
    gQchogAEEBNgKoByAAQbAHakE4EHIaIABB6AdqQQE2AgBBf2ohAyAAQfAHahAqIABB8AdqIAAQfiAAQfAKahAqIABB8Ap
    qIABB8AdqEH4gAEHwDWoQKiAAQfANaiAAQfAHahB+IABB8A1qEJwBAkACQAJAA0AgAiEBIANBAkkNAyAAQfAKaiAAQfAE
    aiAAQfAFaiAAQfAGahAlIAFBxABNBEAgAEHwEGogAEHwBGogAEHwBWogAEHwBmoQRiABQQh0QdCrwABqIABB8BBqEJIBI
    AFBAWohAgJAAkAgAEG4A2ogA0F/aiIDEFcgAEGAA2ogAxBXa0EBag4DAQMAAwsgAEHwCmogAEHwB2ogAEHwBGogAEHwBW
    ogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYgAkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQI
    MAgsgAEHwCmogAEHwDWogAEHwBGogAEHwBWogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYg
    AkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQIMAQsLIAFBxQBBvIHAABA8AAtBxQBBxQBBzIHAABA8AAtBxQBBxQBB3IHAA
    BA8AAtBACEBCyAAQfASaiQAIAEL8gQBBH8jAEGADGsiAiQAIAIgABCOASACQYACahAvIAJBgARqIABBgAJqIgMQjgEgAk
    GABmoQLyACQYAIaiAAEI4BIAJBgApqIAEQjgEgAiABEBkgAkGABGogAUGAAmoiBBAZIAJBgAhqIAMQlgEgAkGACmogBBC
    WASACQYAIahCsASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAMQkgEgAkGACGogAEGA
    BGoiBRCWASACQYAKaiAEEJIBIAJBgApqIAFBgARqIgQQlgEgAkGACGoQrAEgAkGACmoQrAEgAkGABmogAkGACGoQkgEgA
    kGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAIahCWAS
    ADIAJBgAJqEJIBIAMgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQYAIaiA
    FEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBBCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIAJBgAhq
    EJYBIAJBgAhqIAUQkgEgAkGACGogBBAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgBSACQYAEahCSASAFIAJBgApqEJYBI
    AJBgAZqIAJBgApqEJYBIAJBgAhqEGYgAyACQYAIahCWASACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIA
    BBBTYCgAYgABCZASACQYAMaiQAC68EAQV/IwBBkAZrIgIkACAAQUBrIQQCQCABQfgAaigCACABKAI4aqwgAEH4AGooAgA
    iAyAAKAI4IgVqrH5CgICAEFMNACAFQQJOBH8gABASIAAoAngFIAMLQQJIDQAgBBASCyACQaCnwAAQX0EAIQMgAkE4akHw
    ABByGiABQUBrIQUDQCADQThGBEAgAkHwAGohBkEAIQMDQCADQThGRQRAIAMgBmogAiADaikDADcDACADQQhqIQMMAQsLI
    AJBqAFqIAAQXyACQeABaiABEF8gAkGYAmogACABEAggAkGIA2ogBCAFEAggAkGoAWogBBBhIAJBqAFqEEQgAkHgAWogBR
    BhIAJB4AFqEEQgAkH4A2ogAkGoAWogAkHgAWoQCEEAIQMgAkHoBGpB8AAQchoDQCADQfAARkUEQCACQegEaiADaiACQZg
    CaiADaikDADcDACADQQhqIQMMAQsLIAJB6ARqIAJBiANqEGVBACEDA0AgA0HwAEZFBEAgAkGIA2ogA2oiASACQThqIANq
    KQMAIAEpAwB9NwMAIANBCGohAwwBCwsgAkGYAmogAkGIA2oQZSACQZgCahBFIAJB+ANqIAJB6ARqEGQgAkH4A2oQRSACQ
    dgFaiACQZgCahAFIAAgAkHYBWoQayAAQQM2AjggAkHYBWogAkH4A2oQBSAEIAJB2AVqEGsgAEECNgJ4IAJBkAZqJAAFIA
    JBOGogA2pCADcDACADQQhqIQMMAQsLC5QEAQF/IwBB0CJrIgMkACADQcAWakG4gMAAEF8gA0HIHGpB8IDAABBfIANBCGo
    gA0HAFmogA0HIHGoQSSADQYgBakE4EHIaIANBwAFqQTgQchogA0H4AWoQKgJAIAIQhAFFBEAgA0H4BGoQKiADQfgEaiAB
    EH4gA0H4BGoQSiADQfgHahBLIANB+AdqIAIQfyADQfgHahBHIANByBxqIANB+AdqEIUBIANBuAlqIANByBxqEIUBIANBy
    BxqIANBuAhqEIUBIANB+AlqIANByBxqEIUBIANBuApqECogA0G4DWoQYCADQbgKaiADQfgEahB+IANBwBNqECogA0HAE2
    ogA0H4BGoQfiADQcATahCcASADQcABaiADQYgBahBUQX9qIQIDQCACQQFNBEAgA0G4DWoQkwEgACADQbgNakGIBhBnGgw
    DBSADQbgNahAbIANBwBZqIANBuApqIANBuAlqIANB+AlqEBcCQAJAAkAgA0HAAWogAkF/aiICEFcgA0GIAWogAhBXa0EB
    ag4DAQIAAgsgA0HIHGogA0G4CmogA0H4BGogA0G4CWogA0H4CWoQFiADQcAWaiADQcgcahAGDAELIANByBxqIANBuApqI
    ANBwBNqIANBuAlqIANB+AlqEBYgA0HAFmogA0HIHGoQBgsgA0G4DWogA0HAFmoQBAwBCwALAAsgABBgCyADQdAiaiQAC8
    MDARV/A0AgAUHAAUYEQAJAIABBKGohCyAAQRRqKAIAIgwhCCAAQRBqKAIAIg0hAyAAQQxqKAIAIg4hAiAAKAIIIg8hASA
    AQRhqKAIAIhAhCiAAQRxqKAIAIhEhBCAAQSBqKAIAIhIhByAAQSRqKAIAIhMhBgNAIAchCSAEIQcgCiEEIAVBgAJGDQEg
    AiADcSEUIAIgA3MhFSAFIAtqKAIAIAVB9J7AAGooAgAgBEEadyAEQRV3cyAEQQd3cyAGaiAJIARBf3NxIAQgB3FyampqI
    gYgCGohCiAFQQRqIQUgAyEIIAIhAyABIQIgAUEedyABQRN3cyABQQp3cyAUIAEgFXFzaiAGaiEBIAkhBgwACwALBSAAIA
    FqIgNB6ABqIANBzABqKAIAIANBKGooAgAgA0EsaigCACICQRl3IAJBDndzIAJBA3ZzIANB4ABqKAIAIgJBD3cgAkENd3M
    gAkEKdnNqamo2AgAgAUEEaiEBDAELCyAAIAYgE2o2AiQgACAJIBJqNgIgIAAgByARajYCHCAAIAQgEGo2AhggACAIIAxq
    NgIUIAAgAyANajYCECAAIAIgDmo2AgwgACABIA9qNgIIC9YDAgZ/An4jAEHwAGsiASQAIAFBoKfAABBfIAFBOGogARBfI
    AAQRAJAAkACQCABAn8gACgCOCICQRBMBEAgAkF/ahA5DAELIAEpAzAiCEIBfCIHIAhUDQEgACkDMCIIQoCAgICAgICAgH
    9RQQAgB0J/URsNAiABQThqIAggB3+nECghByABIAEpA2ggB0I6hnw3A2ggACABQThqEGIgABBEQQILIgMQLSAAQQhqIQQ
    DQCADRQ0DIAEgASkDCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgASAAKQMAIAd9IgdC//////////8DgzcDOEEA
    IQIDQCAHQjqHIQcgAkEoRkUEQCABIAJqIgVBCGoiBiAFQRBqKQMAQjmGQoCAgICAgICAAoMgBikDAEIBh4QiCDcDACABI
    AJqQUBrIAIgBGopAwAgCH0gB3wiB0L//////////wODNwMAIAJBCGohAgwBCwsgASABKQMwQgGHIgg3AzAgASAAKQMwIA
    h9IAd8Igc3A2ggACABQThqIAdCP4enQQFqEE8gA0F/aiEDDAALAAtBoKLAAEEZQbyiwAAQWwALQdCiwABBH0G8osAAEFs
    ACyAAQQE2AjggAUHwAGokAAuhAwEBfyMAQZADayIGJAAgBkEIakHAABByGiAGQcgAakGoAhByGiAGQcgAahBDA0AgAQRA
    IAZByABqQQAQPiABQX9qIQEMAQUCQCACBEAgBkHIAGogAiADEHoLIAQEQCAGQcgAaiAEIAUQegsgBkGIA2pCADcDACAGQ
    YADakIANwMAIAZB+AJqQgA3AwAgBkIANwPwAiAGKAJIIQEgBigCTCECIAZByABqQYABED4DQCAGKAJIQf8DcUHAA0ZFBE
    AgBkHIAGpBABA+DAELCyAGQawBaiABNgIAIAZBqAFqIAI2AgAgBkHIAGoQEUEAIQJBACEBA0AgAUEgRkUEQCAGQfACaiA
    BaiABQXxxIAZqQdAAaigCACACQX9zQRhxdjoAACACQQhqIQIgAUEBaiEBDAELCyAGQcgAahBDQQAhAQNAIAFBIEZFBEAg
    BkEIaiABaiAGQfACaiABai0AADoAACABQQFqIQEMAQsLQQAhAQNAIAFBIEYNASAAIAFqIAZBCGogAWotAAA6AAAgAUEBa
    iEBDAALAAsLCyAGQZADaiQAC6EDAQN/IwBBgAZrIgEkACABIABBgAFqIgMQXiABQYABaiADEF4gAUGAAWoQMiABQYACai
    ABEF4gAUGAAmogAEGAAmoiAhAPIAFBgANqIAIQXiABQYADahAyIAIgAUGAAWoQkAEgAiABQYABahCVASACEKgBIAIQpwE
    gAhCnASACEKgBIAFBgANqQQwQnwEgAUGAA2oQVSABQYADahCoASABQYAEaiABQYADahBeIAFBgARqIAIQDyABQYAFaiAB
    QYABahBeIAFBgAVqIAFBgANqEJUBIAFBgAVqEKgBIAIgAUGAAmoQDyABQYACaiABQYADahCQASABQYACaiABQYADahCVA
    SABQYADaiABQYACahCVASABQYADahCoASABQYABaiABQYADahB9IAFBgAFqEKgBIAFBgAVqIAFBgAFqEA8gAUGABWogAU
    GABGoQlQEgAUGAAmogABCQASABQYACaiABEA8gACABQYABahCQASAAEKgBIAAgAUGAAmoQDyAAEKcBIAAQqAEgAyABQYA
    FahCQASADEKgBIAFBgAZqJAALhQMBBH8CQAJAIAFBgAJPBEAgAEEYaigCACEEAkACQCAAIAAoAgwiAkYEQCAAQRRBECAA
    QRRqIgIoAgAiAxtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIAIgAEEQaiADGyEDA0AgAyEFIAEiA
    kEUaiIDKAIAIgFFBEAgAkEQaiEDIAIoAhAhAQsgAQ0ACyAFQQA2AgALIARFDQIgACAAQRxqKAIAQQJ0QeS3wQBqIgEoAg
    BHBEAgBEEQQRQgBCgCECAARhtqIAI2AgAgAkUNAwwCCyABIAI2AgAgAg0BQdi1wQBB2LXBACgCAEF+IAAoAhx3cTYCAA8
    LIABBDGooAgAiAiAAQQhqKAIAIgBHBEAgACACNgIMIAIgADYCCA8LQdS1wQBB1LXBACgCAEF+IAFBA3Z3cTYCAAwBCyAC
    IAQ2AhggACgCECIBBEAgAiABNgIQIAEgAjYCGAsgAEEUaigCACIARQ0AIAJBFGogADYCACAAIAI2AhgLC7MCAQF/IwBBg
    AtrIgUkACAFEC8gBUGAAmoQLyAFQYAEahAvIAVBgAZqQTgQchogBUEBNgK4BiAFQcAGakE4EHIaIAVB+AZqQQE2AgAgBU
    GAB2pBOBByGiAFQQE2ArgHIAVBwAdqQTgQchogBUH4B2pBATYCACAFQYAIakE4EHIaIAVBATYCuAggBUHACGpBOBByGiA
    FQfgIakEBNgIAIAEgAiAFQYAGaiAFQYAHaiAFQYAIahAeIAVBgAhqIAMQoAEgBUGABmogBBCgASAFQYAJaiAFQYAGaiAF
    QYAHahCRASAFIAVBgAlqEJIBIAVBgAlqIAVBgAhqEJsBIAVBgARqIAVBgAlqEJIBIAVBgARqEGYgACAFIAVBgAJqIAVBg
    ARqEHYgAEEDNgKABiAFQYALaiQAC7ECAQF/IwBBgAtrIgQkACAEEC8gBEGAAmoQLyAEQYAEahAvIARBgAZqQTgQchogBE
    EBNgK4BiAEQcAGakE4EHIaIARB+AZqQQE2AgAgBEGAB2pBOBByGiAEQQE2ArgHIARBwAdqQTgQchogBEH4B2pBATYCACA
    EQYAIakE4EHIaIARBATYCuAggBEHACGpBOBByGiAEQfgIakEBNgIAIAEgBEGABmogBEGAB2ogBEGACGoQJSAEQYAIaiAC
    EKABIARBgAZqIAMQoAEgBEGACWogBEGABmogBEGAB2oQkQEgBCAEQYAJahCSASAEQYAJaiAEQYAIahCbASAEQYAEaiAEQ
    YAJahCSASAEQYAEahBmIAAgBCAEQYACaiAEQYAEahB2IABBAzYCgAYgBEGAC2okAAvJAgEDfyMAQcACayIBJAAgASAAQU
    BrIgMQhQEgARADIAFBQGsgAxCFASABQUBrIABBgAFqIgIQSCABQYABaiACEIUBIAFBgAFqEAMgAiABEKUBIAIgARB4IAI
    QRCACEE4gAhBOIAIQRCABQYABakEMEFIgAUHAAWogAUGAAWoQhQEgAUHAAWogAhBIIAFBgAJqIAEQhQEgAUGAAmogAUGA
    AWoQeCABQYACahBEIAIgAUFAaxBIIAFBQGsgAUGAAWoQpQEgAUFAayABQYABahB4IAFBgAFqIAFBQGsQeCABIAFBgAFqE
    IABIAEQRCABQYACaiABEEggAUGAAmogAUHAAWoQeCABQUBrIAAQpQEgAUFAayADEEggACABEKUBIAAQRCAAIAFBQGsQSC
    AAEE4gABBEIAMgAUGAAmoQpQEgAxBEIAFBwAJqJAALrQIBA38jAEGABGsiAiQAIAIgABBeIAJBgAFqIABBgAFqIgMQXiA
    CQYACakE4EHIaIAJBATYCuAIgAkHAAmpBOBByGiACQfgCakEBNgIAIAJBgANqIAMQXiACIAEQDyACQYABaiABQYABaiIE
    EA8gAkGAAmogBBCQASACQYACaiABEJUBIAJBgANqIAAQlQEgAkGAAmoQqAEgAkGAA2oQqAEgAkGAA2ogAkGAAmoQDyACQ
    YACaiACEJABIAJBgAJqEDogAkGAA2ogAkGAAmoQlQEgAkGAA2oQqAEgAkGAAmogAkGAAWoQkAEgAkGAAmoQOiADIAJBgA
    NqEJABIAMgAkGAAmoQlQEgAkGAAWoQVSAAIAJBgAFqEJABIAAgAhCVASAAEKwBIAJBgARqJAALvQIBA38jAEGACGsiASQ
    AIAEgABCOASABQYACaiAAQYAEaiICEI4BIAFBgARqIABBgAJqIgMQjgEgAUGABmoQLyAAECIgAUGABmogABCSASABQYAG
    aiAAEJYBIAAgAUGABmoQlgEgABCsASABELYBIAEQrwEgACABEJYBIAFBgAJqECIgAUGAAmoQZiABQYAGaiABQYACahCSA
    SABQYAGaiABQYACahCWASABQYACaiABQYAGahCWASABQYACahCsASABQYAEahAiIAFBgAZqIAFBgARqEJIBIAFBgAZqIA
    FBgARqEJYBIAFBgARqIAFBgAZqEJYBIAFBgARqEKwBIAMQrgEgAxCvASACELYBIAIQrwEgAyABQYACahCWASACIAFBgAR
    qEJYBIABBBTYCgAYgABCaASABQYAIaiQAC7ICAQN/IwBBgAhrIgEkACAAKAKABkEBRwRAIAEgABCOASABQYACaiAAQYAC
    aiIDEI4BIAFBgARqIABBgARqIgIQjgEgAUGABmogABCOASABECIgAUGAAmogAhAZIAFBgAJqEK8BIAFBgAJqEKwBIAFBg
    ARqECIgAUGABmogAxAZIAFBgAZqEK8BIAIgABCWASACIAMQlgEgAhCsASACECIgACABEJIBIAEgAUGAAmoQlgEgARCsAS
    ABIAFBgARqEJYBIAEgAUGABmoQlgEgARCsASABECsgAUGAAmoQZiABQYAEahBmIAAgAUGAAmoQlgEgAyABQYAEahCSASA
    DIAFBgAZqEJYBIAIgARCWASAAQQRBBSAAKAKABkF+cUECRhs2AoAGIAAQmQELIAFBgAhqJAALigIBAn8jAEHgAWsiAiQA
    IAAQRCACQQhqQTAQchogAkIBNwMAIAJBOGogABBfIAJB8ABqIAEQXyACQagBakE4EHIaIAAQdANAIAJBOGogAkHwAGoQN
    UF/TARAA0ACQCADQQBMDQAgAkHwAGpBARA7IAJBARA7IAJBqAFqIAJBOGoQayACQagBaiACQfAAahBiIAJBqAFqEEQgAk
    E4aiACQagBaiACKQPYAUI/h6dBAWoiARBPIAJBqAFqIAAQayACQagBaiACEGEgAkGoAWoQRCAAIAJBqAFqIAEQTyADQX9
    qIQMMAQsLBSACQQEQLSACQfAAakEBEC0gA0EBaiEDDAELCyACQeABaiQAC54CAQF/IwBBgA1rIgMkACADIAEQaiADEJkB
    IANBiAZqIAIQXyADQYgGahBEIANBwAZqIANBiAZqEF8gA0HABmpBAxAoGiADQcAGahBEIANB+AZqIAMQagJAIANBwAZqE
    FpFBEAgA0HABmoQKUF/aiECA0AgAkEBTQRAIANB+AZqEJoBDAMLIANB+AZqEBoCQAJAIANBwAZqIAJBf2oiAhBXIANBiA
    ZqIAIQV2tBAWoOAwECAAILIANB+AZqIAMQDgwBCyADEJMBIANB+AZqIAMQDiADEJMBDAALAAsgA0H4BmoQsAEgA0H4B2o
    QqQEgA0H4CGoQrQEgA0H4CmoQrQEgA0EBNgL4DAsgACADQfgGakGIBhBnGiADQYANaiQAC5ACAQJ/IwBBgAJrIgUkACAF
    QYABaiAAEF4gAiAFQYABahCQASAFQYABaiAAQYABahBeIAQgBUGAAWoQkAEgBUGAAWogAEGAAmoiBhBeIAUgBUGAAWoQX
    iAFQYABaiAGEF4gAyAFQYABahCQASAFQYABaiABQYABaiIGEF4gBSAFQYABahAPIAVBgAFqIAEQXiADIAVBgAFqEA8gAi
    ADEH0gAhCoASAEIAUQfSAEEKgBIAUgAhCQASACEFUgAhCoASAFQYABaiAGEF4gBSAFQYABahAPIAMgBBCQASAFQYABaiA
    BEF4gAyAFQYABahAPIAMgBRB9IAMQqAEgBBA6IAQQqAEgACABEAsgBUGAAmokAAvkAQECfyMAQcABayIDJAAgAxBLIAAg
    ASACQR91IgQgAnMgBEF/c2pBAm0iAkF/akEfdhBtIAAgAUHAAWogAkEBc0F/akEfdhBtIAAgAUGAA2ogAkECc0F/akEfd
    hBtIAAgAUHABGogAkEDc0F/akEfdhBtIAAgAUGABmogAkEEc0F/akEfdhBtIAAgAUHAB2ogAkEFc0F/akEfdhBtIAAgAU
    GACWogAkEGc0F/akEfdhBtIAAgAUHACmogAkEHc0F/akEfdhBtIAMgABB/IAMQpgEgACADIARBAXEQbSADQcABaiQAC+Q
    BAQJ/IwBBgANrIgMkACADECogACABIAJBH3UiBCACcyAEQX9zakECbSICQX9qQR92EG8gACABQYADaiACQQFzQX9qQR92
    EG8gACABQYAGaiACQQJzQX9qQR92EG8gACABQYAJaiACQQNzQX9qQR92EG8gACABQYAMaiACQQRzQX9qQR92EG8gACABQ
    YAPaiACQQVzQX9qQR92EG8gACABQYASaiACQQZzQX9qQR92EG8gACABQYAVaiACQQdzQX9qQR92EG8gAyAAEH4gAxCcAS
    AAIAMgBEEBcRBvIANBgANqJAALvAEBAn8jAEGwAWsiAiQAIAJBMBByIQIDQCADQTBGBEACQCABQTBqIQEgAkEwaiACEHV
    BACEDA0AgA0EwRg0BIAIgA2ogASADai0AADoAACADQQFqIQMMAAsACwUgAiADaiABIANqLQAAOgAAIANBAWohAwwBCwsg
    AkHwAGogAhB1IABBOBByIgBBATYCOCAAQUBrQTgQciAAQfgAakEBNgIAIAAgAkHwAGoQpQEgAkEwahClASACQbABaiQAC
    9QBAQJ/IwBBgANrIgEkACABIAAQXiABQYABaiAAQYABaiICEF4gAUGAAmogABBeIAFBgAJqIAIQDyABIAIQlQEgAUGAAW
    oQVSABQYABaiAAEJUBIAEQqAEgAUGAAWoQqAEgACABEJABIAAgAUGAAWoQDyABQYABaiABQYACahCQASABQYABahBVIAF
    BgAFqIAFBgAJqEJUBIAFBgAFqEKgBIAFBgAFqEDogACABQYABahCVASABQYACahCnASACIAFBgAJqEJABIAAQrAEgAUGA
    A2okAAvEAQEBfyMAQYADayIDJAAgA0EIaiABEIUBAkAgAkUEQCADQQhqEAcMAQsgA0EIaiACEKUBCyADQcgAakHYo8AAE
    F8gA0GAAWogA0HIAGoQiwEgA0HAAWogA0EIahCFASADQcABahADIANBwAFqIAEQSCAAIAEQhQEgACADQQhqEEggA0GAAm
    ogA0HAAWoQhQEgABBYIQEgA0HAAmogABCFASADQcACahBBIANBwAJqEEQgACADQcACaiABEHkgA0GAA2okAAufAQEBfyM
    AQfAAayICJAAgAiABEF9BACEBIAJBOGpBOBByGiAAEEQCQCAAIAIQNUEASA0AA0AgAkEBEC0gAUEBaiEBIAAgAhA1QX9K
    DQALA0AgAUEATA0BIAJBARA7IAJBOGogABBrIAJBOGogAhBiIAJBOGoQRCAAIAJBOGogAikDaEI/h6dBAWoQTyABQX9qI
    QEMAAsACyACQfAAaiQAC7IBAQF/IwBBgAJrIgQkACAEQYABaiAAEF4gAyAEQYABahCQASAEQYABaiAAQYABahBeIAQgBE
    GAAWoQXiAEQYABaiAAQYACahBeIAIgBEGAAWoQkAEgASAEEJABIAEgAhAPIAMQMiAEEDIgAhAyIAEQpwEgARA6IAEQqAE
    gARBVIAEQqAEgAkEMEJ8BIANBAxCfASACEFUgAhCoASACIAQQfSACEKgBIAAQFCAEQYACaiQAC58BAQJ/IwBBgAJrIgIk
    ACAAIAEQXiAAEDIgAkGIAWpB2KTAABBfIAJBCGpBOBByGiACQQE2AkAgAkHIAGpBOBByIAJBgAFqQQE2AgAgAkHAAWogA
    kGIAWoQiwEgAkEIaiACQcABahClARCyASACQQhqEKgBIAJBCGoQVSACQQhqEKgBIAAgARAPIAAgAkEIahCVASAAEKsBIA
    JBgAJqJAALowEBAX8jAEEwayIGJAAgBkEQaiAAIAEQsQEgBiAGKAIUIgA2AhwgBiAGKAIQIgE2AhggBkEIaiACIAMQsQE
    gBiAGKAIMIgI2AiQgBiAGKAIIIgM2AiAgBiAEIAUQsQEgBiAGKAIEIgQ2AiwgBiAGKAIAIgU2AiggASAAIAMgAiAFIAQQ
    ACAGQShqEKQBIAZBIGoQpAEgBkEYahCkASAGQTBqJAALiAECA38DfiMAQRBrIgIkAAN+IANBOEYEfiACQRBqJAAgBgUgA
    iAAIANqIgQpAwAiBSAFQj+HIAGsIgUgBUI/hxAxIAQgAikDACIHIAZ8IgVC//////////8DgzcDACAFIAdUrSACQQhqKQ
    MAIAZCP4d8fEIGhiAFQjqIhCEGIANBCGohAwwBCwsLhAECA38BfiMAQUBqIgEkACABQQhqIAAQXyABQQhqEEQgAUE4aiE
    CQQYhA0HcAiEAAn8DQEEAIANBAEgNARogAikDACIEUARAIAJBeGohAiAAQUZqIQAgA0F/aiEDDAELCwN/IARQBH8gAAUg
    AEEBaiEAIARCAn8hBAwBCwsLIAFBQGskAAuHAQEBfyMAQcABayIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAa
    kEBNgIAIAEQUCABQYgBakE4EHIaIABBgAFqIAFBgAEQZxogAEGAAmpBOBByGiAAQbgCakEBNgIAIABBvAJqIAFBhAFqQT
    wQZxogAEH4AmpBATYCACABQcABaiQAC48BAQJ/IwBBgAJrIgEkACAAEKwBIAEgABBeIAFBgAFqQTgQchogAUEBNgK4ASA
    BQcABakE4EHIaIAFB+AFqQQE2AgAgASAAQYABaiICEJUBIAEQOiABQYABaiABEJABIAFBgAFqIAIQlQEgAiABEJABIAIg
    ABCVASAAIAFBgAFqEJABIAAQrAEgAUGAAmokAAt9AgF/An4jAEGAAWsiASQAIAFBCGogABCFASABQQhqEBIgAUHIAGogA
    UEIahCDAUEIIQADQCAAQThGRQRAIAFByABqIABqKQMAIAKEIQIgAEEIaiEADAELCyABKQNIIQMgAUGAAWokACACQn98IA
    NCAYVCf3yDQjqIp0EBcQuJAQIBfwJ+IAAgACkDMCABQT9xrSIDhiAAKQMoQTogAWtBP3GtIgSHhDcDMCAAQShqIQFBBiE
    CA0AgAkEBTQRAIAAgACkDACADhkL//////////wODNwMABSABIAEpAwAgA4ZC//////////8DgyABQXhqIgEpAwAgBIeE
    NwMAIAJBf2ohAgwBCwsLiQECAX8CfiAAIAApA2BBOiABQTpwIgFrrSIEhyAAKQNoIAGtIgOGhDcDaCAAQeAAaiEBQQ0hA
    gNAIAJBAU0EQCAAIAApAwAgA4ZC//////////8DgzcDAAUgASABKQMAIAOGQv//////////A4MgAUF4aiIBKQMAIASHhD
    cDACACQX9qIQIMAQsLC3EBAX8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAakEBNgIAIAFBCGpBOBB
    yGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAEG8AWogAUEEakE8EGcaIABB+AFqQQE2AgAgAUFAayQAC4EBAgF/AX4gAEHw
    ABByIQADQCACQThGBEACQCAAIAEpAzAiA0I6hzcDOCAAIANC//////////8DgzcDMCAAQUBrIQBBACECA0AgAkEwRg0BI
    AAgAmpCADcDACACQQhqIQIMAAsACwUgACACaiABIAJqKQMANwMAIAJBCGohAgwBCwsLdQECfiAAIANCIIgiBSABQiCIIg
    Z+IAIgA358IAEgBH58IANC/////w+DIgIgAUL/////D4MiAX4iA0IgiCACIAZ+fCICQiCIfCABIAV+IAJC/////w+DfCI
    BQiCIfDcDCCAAIANC/////w+DIAFCIIaENwMAC3YBAn8jAEHAAWsiASQAIAEgABCFASABQUBrIAAQhQEgAUGAAWogAEFA
    ayICEIUBIAEgAhB4IAFBQGsgABB4IAFBQGsQRCACIAFBQGsQSCABQYABahBBIAAgAUGAAWoQeCABEEQgABBEIAAgARBII
    AFBwAFqJAALkwEBAn9B0LXBAEHQtcEAKAIAQQFqNgIAAkACQEGYucEAKAIAQQFGBEBBnLnBAEGcucEAKAIAQQFqIgA2Ag
    AgAEECSw0CQaC5wQAoAgAiAUF/Sg0BDAILQZi5wQBCgYCAgBA3AwBBoLnBACgCACIAQQBIDQFBoLnBACAANgIAAAtBoLn
    BACABNgIAIABBAUsNAAALAAtnAQJ/IwBBQGoiAiQAIAAQRCACIAAQhQECQCABRQRAIAAQBwwBCyAAIAEQpQELQQAhAQNA
    IAFBAUsgA3JFBEAgABADIAFBAEchAyABIAFFaiEBDAELCyAAIAIQSCAAEBIgAkFAayQAC18CAX8EfkIBIQNBMCECA38gA
    kF4RgR/IARCAYYgA3ynQX9qBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBeGohAiAFIAaFQn98QjqHIA
    ODIQMMAQsLC2ACAX8EfkIBIQNB6AAhAgN/IAJBeEYEfyAEQgGGIAN8p0F/agUgASACaikDACIFIAAgAmopAwAiBn1COoc
    gA4MgBIQhBCACQXhqIQIgBSAGhUJ/fEI6hyADgyEDDAELCwt3AQN/IwBBgAJrIgIkACACIAEQXiACQYABaiABEF4gAhAy
    IAJBgAFqIAIQDyAAIAJBgAFqEJcBIABBgAJqIgMgAkGAAWoQlwEgAEGABGoiBCACQYABahCXASADIAEQogEgBCACEKIBI
    ABBBTYCgAYgAkGAAmokAAt6AQF/IwBB4ANrIgEkACABQYABakHApcAAEF8gAUG4AWpB+KXAABBfIAEgAUGAAWogAUG4AW
    oQSSABQfACakGwpsAAEF8gAUGoA2pB6KbAABBfIAFB8AFqIAFB8AJqIAFBqANqEEkgACABIAFB8AFqED8gAUHgA2okAAt
    nACAAQQF2IAByIgBBAnYgAHIiAEEEdiAAciIAQQh2IAByIgBBEHYgAHIiACAAQQF2QdWq1aoFcWsiAEECdkGz5syZA3Eg
    AEGz5syZA3FqIgBBBHYgAGpBj568+ABxQYGChAhsQRh2C2cBAn8jAEGAAWsiASQAIAEgABCFASABQUBrQTgQchogAUEBN
    gJ4IAEgAEFAayICEHggARBBIAFBQGsgARClASABQUBrIAIQeCACIAEQpQEgAiAAEHggACABQUBrEKUBIAFBgAFqJAALaA
    IBfwJ+IAFBP3GtIQNBOiABa0E/ca0hBEEAIQEDQCABQTBGBEAgACAAKQMwIAOHNwMwBSAAIAFqIgIgAkEIaikDACAEhkL
    //////////wODIAIpAwAgA4eENwMAIAFBCGohAQwBCwsLbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYC
    ACADQSxqQQI2AgAgA0ICNwIMIANBlKjAADYCCCADQQI2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACE
    HAAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakECNgIAIANCAjcCDCADQbCqwAA2AgggA0
    ECNgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBwAAtlAQJ/IAAgACgCACICQQhqIgM2AgAgACACQQN
    2QTxxakEoaiICIAFB/wFxIAIoAgBBCHRyNgIAAkACQCADRQRAIABBADYCACAAIAAoAgRBAWo2AgQMAQsgA0H/A3ENAQsg
    ABARCwtnAQF/IwBBgAJrIgMkACAAECogACABEJABIABBgAFqIgEgAhCQASAAQYACahCwASAAEKgBIAMgABAmIANBgAFqI
    AEQXiADQYABahAyIANBgAFqIAMQe0UEQCAAEJgBCyADQYACaiQAC18BAn8jAEGAAWsiASQAIAAQqAEgASAAEIUBIAFBQG
    sgAEFAayICEIUBIAEQAyABQUBrEAMgASABQUBrEHggAUEAEDQgACABEEggARBBIAEQRCACIAEQSCABQYABaiQAC10BAn8
    jAEFAaiIBJAAgAUEIakGgp8AAEF8gAUEIaiAAKAI4QX9qEDkiAhAtIAAgAUEIahBjIABBASACQQFqQR9xdCICNgI4IAJB
    gICAEE4EQCAAEBILIAFBQGskAAtfAgF/AX4jAEHwAGsiASQAIAFBoKfAABBfIAApAwAhAiABQThqIAAQXyAAQQEQOyABQ
    ThqIAEQYSABQThqEEQgAUE4akEBEDsgACABQThqIAJCAoGnEE8gAUHwAGokAAt7AQJ/IABBKGohAgNAIAFBgAJGBEAgAE
    LnzKfQ1tDrs7t/NwIIIABCADcCACAAQSBqQquzj/yRo7Pw2wA3AgAgAEEYakL/pLmIxZHagpt/NwIAIABBEGpC8ua746O
    n/aelfzcCAAUgASACakEANgIAIAFBBGohAQwBCwsLaQICfwF+IAAgACkDACIDQv//////////A4M3AwBBCCEBA0AgA0I6
    hyEDIAFBMEYEQCAAIAApAzAgA3w3AzAFIAAgAWoiAiACKQMAIAN8IgNC//////////8DgzcDACABQQhqIQEMAQsLC2oCA
    n8BfiAAIAApAwAiA0L//////////wODNwMAQQghAQNAIANCOochAyABQegARgRAIAAgACkDaCADfDcDaAUgACABaiICIA
    IpAwAgA3wiA0L//////////wODNwMAIAFBCGohAQwBCwsLWQEBfyMAQYADayIEJAAgBCADEF4gBBBAIARBgAFqIAEQXiA
    EQYACaiACEF4gBEGAAWogBBAPIARBgAJqIAQQDyAAIARBgAFqIARBgAJqEJEBIARBgANqJAALWQECfyMAQUBqIgEkAAJA
    IAAQhAENACABQQEQigEgAEGAAWoiAiABEFkNACACQQAQNCAAIAIQSCAAEBIgAEFAayIAIAIQSCAAEBIgAiABEKUBCyABQ
    UBrJAALVwEBfyMAQbABayICJAAgATQCOCAANAI4fkKAgIAQWQRAIAAQEgsgAkEIaiAAIAEQCCACQfgAaiACQQhqEAUgAC
    ACQfgAahBrIABBAjYCOCACQbABaiQAC08BAn8jAEFAaiIDJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgA
    gAyABEIsBIAAgAxClASADIAIQiwEgAxClASADQUBrJAALWQECfyMAQYABayIBJAACQCAAEIgBDQAgARBQIABBgAJqIgIg
    ARB7DQAgAhBAIAAgAhAPIAAQqwEgAEGAAWoiACACEA8gABCrASACIAEQkAELIAFBgAFqJAALSwEBfyMAQUBqIgEkACAAQ
    TgQciIAQQE2AjggAUEBEIoBIABBQGsgAUHAABBnGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAUFAayQAC0sBAn8jAEHwAG
    siASQAIAAQd0UEQCABQaCnwAAQXyABQThqIAAQgwEgASABQThqEGIgARBEIAFBOGogARA1IQILIAFB8ABqJAAgAgtPAQF
    /IwBBgAFrIgIkACAAIAEQhQEgABADIAJByABqQdikwAAQXyACQQhqIAJByABqEIsBIAAgARBIIAAgAkEIahB4IAAQEiAC
    QYABaiQAC0kBAn8DQCABQThGRQRAIAAgAWoiAiACKQMAQgGGNwMAIAFBCGohAQwBCwsgACAAKAI4QQF0IgE2AjggAUGAg
    IAQTgRAIAAQEgsLQgIBfwJ+QQAgAmusIQQDQCADQThHBEAgACADaiICIAIpAwAiBSABIANqKQMAhSAEgyAFhTcDACADQQ
    hqIQMMAQsLC0YBAn8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgAgAUEBEIoBIAAgARClARC
    yASABQUBrJAALTgEBfyMAQYAEayIBJAAgABAvIAEQLyABQYACahAvIABBgAJqIAFBgAIQZxogAEGABGogAUGAAmpBgAIQ
    ZxogAEEANgKABiABQYAEaiQAC0sBAX8jAEFAaiICJAACQCAAKAI4IAFsQYCAgBBOBEAgAiABEIoBIAAgAhBIDAELIAAgA
    RAoGiAAIAAoAjggAWw2AjgLIAJBQGskAAtKAAJ/IAFBgIDEAEcEQEEBIAAoAhggASAAQRxqKAIAKAIQEQMADQEaCyACRQ
    RAQQAPCyAAKAIYIAJBACAAQRxqKAIAKAIMEQUACwtCAQF/IwBBQGoiAiQAIAJBCGpBgIDAABBfIAEgAkEIahBrIAEQRCA
    AIAEQayAAQQMQKBogABBEIAAQKSACQUBrJAALSQECfyMAQcABayIBJAAgASAAEF4gAUGAAWogABCFASAAIABBQGsiAhCl
    ASAAEEEgAiABQYABahClASAAIAEQlQEgAUHAAWokAAtIAQF/IwBB4AFrIgEkACABQeihwAAQXyABQThqIAAgARAIIAFBq
    AFqIAFBOGoQBSAAIAFBqAFqEGsgAEECNgI4IAFB4AFqJAALPgEBfyABQTpuIQIgAUGVA00EQCAAIAJBA3RqKQMAQgEgAU
    H//wNxQTpwrYaDQgBVDwsgAkEHQdSdwAAQPAALQAIBfwF+IwBBgAFrIgEkACABQQhqIAAQhQEgAUEIahASIAFByABqIAF
    BCGoQgwEgASkDSCABQYABaiQAQgKBpws8AQF/IwBBgAFrIgIkACACIAAQhQEgAkFAayABEIUBIAIQEiACQUBrEBIgAiAC
    QUBrEDUgAkGAAWokAEULPAIBfwF+A38gAUE4RgR/IAJCf3xCgICAgICAgIAEg0I6iKcFIAAgAWopAwAgAoQhAiABQQhqI
    QEMAQsLC0cBAX8jAEEgayIDJAAgA0EUakEANgIAIANB9KrAADYCECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2Ag
    AgAyACEHAACzkBAX8jAEFAaiICJAAgAiAAEIUBIAIQByABBEAgASACEKUBCyACEAMgAiAAEEggAhAsIAJBQGskAAs6AQF
    /IABBOBByIQADQCACQTBGRQRAIABBCBAtIAAgACkDACABIAJqMQAAfDcDACACQQFqIQIMAQsLCzQBAX8gAEE4EHIiAEEB
    NgI4IABBQGtBOBByIABB+ABqQQE2AgAgACABEKUBIAFBQGsQpQELMAEBfyAAQTgQciEAA0AgAkE4RwRAIAAgAmogASACa
    ikDADcDACACQQhqIQIMAQsLCz8BAX8jAEGAAmsiASQAIAAQUSABEG4gACABEJIBIABBgAJqEK0BIABBgARqEK0BIABBAT
    YCgAYgAUGAAmokAAswAQJ/A0AgAkE4RwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLMAECfwNAIAJ
    BOEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLCzABAn8DQCACQThHBEAgACACaiIDIAEgAmopAwAg
    AykDAH03AwAgAkEIaiECDAELCwsxAQJ/A0AgAkHwAEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLC
    zEBAn8DQCACQfAARwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLOQECfyMAQYABayIBJAAgASAAQY
    ABaiICEF4gAiAAEJABIAEQVSAAIAEQkAEgABCsASABQYABaiQACzMBAX8gAgRAIAAhAwNAIAMgAS0AADoAACABQQFqIQE
    gA0EBaiEDIAJBf2oiAg0ACwsgAAtIAQN/IwBBEGsiASQAIAAoAgwhAyAAKAIIIgJFBEBB9KrAAEErQaCrwAAQWwALIAEg
    AzYCCCABIAA2AgQgASACNgIAIAEQcQALMgEBfyAAQgE3AwBBCCEBA0AgAUE4RkUEQCAAIAFqQgA3AwAgAUEIaiEBDAELC
    yAAEFYLNwAgABBRIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahCSASAAIAEoAoAGNgKABgsoAQF/A0AgAk
    E4RwRAIAAgAmogASACaikDADcDACACQQhqIQIMAQsLCzMAIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahC
    SASAAIAEoAoAGNgKABgsoACAAIAEgAhB5IABBQGsgAUFAayACEHkgAEGAAWogAUGAAWogAhB5Cy4BAX8jAEGAAWsiASQA
    IAAQLyABEFAgACABEJABIABBgAFqEKkBIAFBgAFqJAALLQAgACABIAIQjwEgAEGAAWogAUGAAWogAhCPASAAQYACaiABQ
    YACaiACEI8BCzQBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQaSowAA2AgQgAkH0qsAANgIAIAIQaAALPgEBfyMAQR
    BrIgEkACABQQhqIABBCGooAgA2AgAgASAAKQIANwMAIAEoAgAiAEEUaigCABogACgCBBoQMwALKQEBfyABBEAgACECA0A
    gAkEAOgAAIAJBAWohAiABQX9qIgENAAsLIAALKwEBfyMAQcABayICJAAgAhBLIAIgARB/IAIQpgEgACACEAwgAkHAAWok
    AAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCycBAX8jAEFAaiICJAAgAkEIaiABEF0gACACQQhqEIsBI
    AJBQGskAAsrACAAEFEgACABEJIBIABBgAJqIAIQkgEgAEGABGogAxCSASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEI
    UBIAEQEiABEFogAUFAayQACykAIAAgARBhIAAgACgCOCABKAI4aiIBNgI4IAFBgICAEE4EQCAAEBILCyUAIAAgASACEE8
    gAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLIwADQCACBEAgACABLQAAED4gAkF/aiECIAFBAWohAQwBCwsLIgACQCAA
    IAEQWUUNACAAQUBrIAFBQGsQWUUNAEEBDwtBAAskAAJAIABBfE0EQCAARQRAQQQhAAwCCyAAEAEiAA0BCwALIAALJwEBf
    yMAQYABayICJAAgAiABEF4gAhA6IAAgAhCVASACQYABaiQACycAIAAgARCQASAAQYABaiABQYABahCQASAAQYACaiABQY
    ACahCQAQslACAAIAEQpQEgAEFAayABQUBrEKUBIABBgAFqIAFBgAFqEKUBCyUBAX8jAEFAaiICJAAgAiABEIUBIAIQQSA
    AIAIQeCACQUBrJAALKAEBfyMAQYACayICJAAgAiABEI4BIAIQKyAAIAIQlgEgAkGAAmokAAsjAEGEAiACSQRAIAJBhAIg
    AxA9AAsgACACNgIEIAAgATYCAAsiAQF/IwBB8ABrIgIkACACIAEQMCAAIAIQBSACQfAAaiQACxwAAkAgABB3RQ0AIABBg
    AFqEHdFDQBBAQ8LQQALHwAgAEE4EHIiAEEBNgI4IAAgARBrIAAgASgCODYCOAseAAJAIAAQhwFFDQAgAEGAAWoQhwFFDQ
    BBAQ8LQQALGwACQCAAEHdFDQAgAEFAaxB3RQ0AQQEPC0EACx4AAkAgABCHAUUNACAAQYACahCHAUUNAEEBDwtBAAsaAQF
    /IAAQWCIBIABBQGsQWCABcyAAEHdxcwsaACAAQTgQciIAQQE2AjggACABEJ0BIAAQVgsZACAAQTgQciIAQQE2AjggACAB
    EGsgABBWCxcAIAAQRCAAKAIAQX8gAUEfcXRBf3NxCxoAIAAgARBfIAAgAhAkIAAgAhBjIAAgAhAkCxwAIAAQLyAAIAEQk
    AEgAEGAAWogAUGAAWoQkAELGAAgACABIAIQeSAAQUBrIAFBQGsgAhB5CxYAIAAgARClASAAQUBrIAFBQGsQpQELGAAgAB
    AvIAAgARCQASAAQYABaiACEJABCxgAIAAgARCQASAAQYABaiABQYABahCQAQsZACAAEK4BIABBgAJqELYBIABBgARqEK4
    BCxcAIAAQsgEgAEFAaxBpIABBgAFqELIBCxQAIAAgARB4IABBQGsgAUFAaxB4CxgAIAAgARCVASAAQYABaiABQYABahCV
    AQsYACAAEKYBIABBgAFqIgAQpgEgACABEA8LGQAgABCpASAAQYABahCwASAAQYACahCpAQsZACAAEKwBIABBgAJqEKwBI
    ABBgARqEKwBCxkAIAAQqgEgAEGAAmoQqgEgAEGABGoQqgELFgAgABAvIAAgARCQASAAQYABahCpAQsWACAAQYABaiIAEK
    gBIAAQOiAAEKgBCxQAIAAQRCAAIAApAwAgAax8NwMACxQAIAAQRCAAIAApAwAgAax9NwMACxEAIAAgARBSIABBQGsgARB
    SCxEAIAAgARBIIABBQGsgARBICxQAIAAgARCQASAAQYABaiACEJABCxIAIAAgARAPIABBgAFqIAEQDwsUACAAIAEQoAEg
    AEGAAWogARCgAQsRACAAKAIEBEAgACgCABAJCwsSACAAIAEQayAAIAEoAjg2AjgLDwAgAEFAayIAEEEgABBECw0AIAAQT
    iAAQUBrEE4LDQAgABBEIABBQGsQRAsPACAAELIBIABBQGsQsgELEAAgABCrASAAQYABahCrAQsNACAAEBIgAEFAaxASCx
    AAIAAQqAEgAEGAAWoQqAELEAAgABCpASAAQYABahCpAQsPACAAQYABahA6IAAQrAELEAAgABCnASAAQYABahCnAQsOACA
    AEGkgAEFAaxCyAQsQACAAIAI2AgQgACABNgIACw0AIAAQdCAAQQE2AjgLDAAgABBBIAAgARB4CwwAIAAgARBrIAAQVgsN
    ACAAEDogACABEJUBCwsAIAAQOiAAEKwBCwwAQunQotvMouq7RgsDAAELAwABCwv+PZoCAEGCgMAACwcBAAAAAQI0AEG4g
    MAAC9sBuF8jku11BwFjT+D5WE+pA2dPnKtLeD0Akew9ffXy9AMD1g8fDSwgAK1vjPCZwa4A8DtNkAEAAADzStxtEor3AI
    uwH1tTsFYDgvLFYx+X7AAysL/NHtseAkehVLifHyMCQHo6ogw4sQGz4sMPAAAAAHNyYy9ibHMxMjM4MS9wYWlyLnJzqAA
    QABQAAAAHAQAACQAAAKgAEAAUAAAADAEAAA0AAACoABAAFAAAABEBAAANAAAAAAAAAAEAAAD///8Dv/+W/78AaQM7VYAd
    moCAAefMIPV1pkwBp+1zAEGogsAACyz+//7///8BAosAgILYBPYB4Y1oiW++kwLOdqvfPagdAMZpulHOdt8Dy1nGFwBB4
    ILAAAuRAZABEAATAAAA0AEAABgAAACQARAAEwAAANQBAAARAAAAkAEQABMAAADWAQAAHAAAAHNyYy9ibHMxMjM4MS9lY3
    AucnMAkAEQABMAAAAZBQAADQAAAJABEAATAAAAGwUAAAkAAACQARAAEwAAABwFAAARAAAAkAEQABMAAAAfBQAAHAAAAAA
    AAAABAAEAAAABAjQAQaCEwAALuSCQARAAEwAAAGcEAAARAAAAkAEQABMAAABsBAAADQAAAJABEAATAAAAbgQAABUAAACQ
    ARAAEwAAAHAEAAAgAAAAHUxYLQgo9ADXXz44aOPbAInJGoj9roEBomOjmrkPTgGY6rCCSW3JAoBOWs9QOu4AimlEAQAAA
    ADgKxeO6UjMAXSpOluMVsgAolXvNe/8FADngsIBPcnDA8EWIDvuPnUAusRiAAwgWgDRCCkuAQAAALgh6L1iEMUA3/4Vlz
    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
    GZYzb76G2KA7ycH+3PFk8AK2qmngEAAABhdHRlbXB0IHRvIGRpdmlkZSBieSB6ZXJvAAAAbxEQABIAAAB8AQAAFAAAAAA
    AAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93c3JjL2JsczEyMzgxL2ZwLnJzAAAAbxEQABIAAAASAgAADQAA
    AG8REAASAAAAHgIAACYAAABvERAAEgAAAB4CAAAjAAAAbxEQABIAAAAkAgAAFwAAAG8REAASAAAAJAIAABQAAAAAAAAAq
    qr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAABAEhAAFAAAABUBAAATAA
    AAQBIQABQAAAAeAQAAGAAAAEASEAAUAAAAJAEAABwAAABzcmMvYmxzMTIzODEvZWNwMi5ycwAAAAAEAEGQpcAAC7wGQBI
    QABQAAADmAgAACQAAAEASEAAUAAAA7gIAAA0AAABAEhAAFAAAAP4CAAAhAAAAuL0hwchWgAD1+24BqskAA7pwFz2uR7YA
    RNEK7ADpUwN65MZREMUtA0kBgkmkwiMALyuqJAAAAAB+KwRdBX2sAflVF+WERDwDNJME9ce9GwJp12rYgmRCA9BrWWVPJ
    4gA6DRrH9hnnAAFtgI+AQAAAAEouAiGVJMBeKIo6w5zsgIjyRINFpWmAQq1nU73MqoCm/2tGjUu2gJxczJjhFufAHdSXc
    4AAAAAvnlf8F8HqQJqaAc710nDAfOzmulytSoB0pm8jp0W+gEoPsuZi8IrAKw0qwwzzakDAkpsYAAAAACrqv/////+Ae7
    //1Ss//8C6kFiD2sPKgHDnP1KFM4TAkt3ZNesS0MC7enGkqb5XwKjHhGgAQAAAAgUEAALAAAAjwEAAA8AAAAIFBAACwAA
    AKcBAAATAAAACBQQAAsAAACqAQAADQAAAHNyYy9obWFjLnJzADQUEAAgAAAAVBQQABIAAAADAAAAAAAAAAEAAAAEAAAAa
    W5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAwMDAxMDIwMzA0MDUwNjA3MDgwOT
    EwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ
    0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5
    ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQAAQBUQABAAAABQFRAAIgAAAHJhbmdlIGVuZCBpb
    mRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIG
    EgYE5vbmVgIHZhbHVlALAVEAAcAAAA7gEAAB4AAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzAEGIrMAACwEBAEH
    IrMAACwEBAEGIrcAACwEBAEHIrcAACwEBAEGIrsAACwEBAEHIrsAACwEBAEGIr8AACwEBAEHIr8AACwEBAEGIsMAACwEB
    AEHIsMAACwEBAEGIscAACwEBAEHIscAACwEBAEGIssAACwEBAEHIssAACwEBAEGIs8AACwEBAEHIs8AACwEBAEGItMAAC
    wEBAEHItMAACwEBAEGItcAACwEBAEHItcAACwEBAEGItsAACwEBAEHItsAACwEBAEGIt8AACwEBAEHIt8AACwEBAEGIuM
    AACwEBAEHIuMAACwEBAEGIucAACwEBAEHIucAACwEBAEGIusAACwEBAEHIusAACwEBAEGIu8AACwEBAEHIu8AACwEBAEG
    IvMAACwEBAEHIvMAACwEBAEGIvcAACwEBAEHIvcAACwEBAEGIvsAACwEBAEHIvsAACwEBAEGIv8AACwEBAEHIv8AACwEB
    AEGIwMAACwEBAEHIwMAACwEBAEGIwcAACwEBAEHIwcAACwEBAEGIwsAACwEBAEHIwsAACwEBAEGIw8AACwEBAEHIw8AAC
    wEBAEGIxMAACwEBAEHIxMAACwEBAEGIxcAACwEBAEHIxcAACwEBAEGIxsAACwEBAEHIxsAACwEBAEGIx8AACwEBAEHIx8
    AACwEBAEGIyMAACwEBAEHIyMAACwEBAEGIycAACwEBAEHIycAACwEBAEGIysAACwEBAEHIysAACwEBAEGIy8AACwEBAEH
    Iy8AACwEBAEGIzMAACwEBAEHIzMAACwEBAEGIzcAACwEBAEHIzcAACwEBAEGIzsAACwEBAEHIzsAACwEBAEGIz8AACwEB
    AEHIz8AACwEBAEGI0MAACwEBAEHI0MAACwEBAEGI0cAACwEBAEHI0cAACwEBAEGI0sAACwEBAEHI0sAACwEBAEGI08AAC
    wEBAEHI08AACwEBAEGI1MAACwEBAEHI1MAACwEBAEGI1cAACwEBAEHI1cAACwEBAEGI1sAACwEBAEHI1sAACwEBAEGI18
    AACwEBAEHI18AACwEBAEGI2MAACwEBAEHI2MAACwEBAEGI2cAACwEBAEHI2cAACwEBAEGI2sAACwEBAEHI2sAACwEBAEG
    I28AACwEBAEHI28AACwEBAEGI3MAACwEBAEHI3MAACwEBAEGI3cAACwEBAEHI3cAACwEBAEGI3sAACwEBAEHI3sAACwEB
    AEGI38AACwEBAEHI38AACwEBAEGI4MAACwEBAEHI4MAACwEBAEGI4cAACwEBAEHI4cAACwEBAEGI4sAACwEBAEHI4sAAC
    wEBAEGI48AACwEBAEHI48AACwEBAEGI5MAACwEBAEHI5MAACwEBAEGI5cAACwEBAEHI5cAACwEBAEGI5sAACwEBAEHI5s
    AACwEBAEGI58AACwEBAEHI58AACwEBAEGI6MAACwEBAEHI6MAACwEBAEGI6cAACwEBAEHI6cAACwEBAEGI6sAACwEBAEH
    I6sAACwEBAEGI68AACwEBAEHI68AACwEBAEGI7MAACwEBAEHI7MAACwEBAEGI7cAACwEBAEHI7cAACwEBAEGI7sAACwEB
    AEHI7sAACwEBAEGI78AACwEBAEHI78AACwEBAEGI8MAACwEBAEHI8MAACwEBAEGI8cAACwEBAEHI8cAACwEBAEGI8sAAC
    wEBAEHI8sAACwEBAEGI88AACwEBAEHI88AACwEBAEGI9MAACwEBAEHI9MAACwEBAEGI9cAACwEBAEHI9cAACwEBAEGI9s
    AACwEBAEHI9sAACwEBAEGI98AACwEBAEHI98AACwEBAEGI+MAACwEBAEHI+MAACwEBAEGI+cAACwEBAEHI+cAACwEBAEG
    I+sAACwEBAEHI+sAACwEBAEGI+8AACwEBAEHI+8AACwEBAEGI/MAACwEBAEHI/MAACwEBAEGI/cAACwEBAEHI/cAACwEB
    AEGI/sAACwEBAEHI/sAACwEBAEGI/8AACwEBAEHI/8AACwEBAEGIgMEACwEBAEHIgMEACwEBAEGIgcEACwEBAEHIgcEAC
    wEBAEGIgsEACwEBAEHIgsEACwEBAEGIg8EACwEBAEHIg8EACwEBAEGIhMEACwEBAEHIhMEACwEBAEGIhcEACwEBAEHIhc
    EACwEBAEGIhsEACwEBAEHIhsEACwEBAEGIh8EACwEBAEHIh8EACwEBAEGIiMEACwEBAEHIiMEACwEBAEGIicEACwEBAEH
    IicEACwEBAEGIisEACwEBAEHIisEACwEBAEGIi8EACwEBAEHIi8EACwEBAEGIjMEACwEBAEHIjMEACwEBAEGIjcEACwEB
    AEHIjcEACwEBAEGIjsEACwEBAEHIjsEACwEBAEGIj8EACwEBAEHIj8EACwEBAEGIkMEACwEBAEHIkMEACwEBAEGIkcEAC
    wEBAEHIkcEACwEBAEGIksEACwEBAEHIksEACwEBAEGIk8EACwEBAEHIk8EACwEBAEGIlMEACwEBAEHIlMEACwEBAEGIlc
    EACwEBAEHIlcEACwEBAEGIlsEACwEBAEHIlsEACwEBAEGIl8EACwEBAEHIl8EACwEBAEGImMEACwEBAEHImMEACwEBAEG
    ImcEACwEBAEHImcEACwEBAEGImsEACwEBAEHImsEACwEBAEGIm8EACwEBAEHIm8EACwEBAEGInMEACwEBAEHInMEACwEB
    AEGIncEACwEBAEHIncEACwEBAEGInsEACwEBAEHInsEACwEBAEGIn8EACwEBAEHIn8EACwEBAEGIoMEACwEBAEHIoMEAC
    wEBAEGIocEACwEBAEHIocEACwEBAEGIosEACwEBAEHIosEACwEBAEGIo8EACwEBAEHIo8EACwEBAEGIpMEACwEBAEHIpM
    EACwEBAEGIpcEACwEBAEHIpcEACwEBAEGIpsEACwEBAEHIpsEACwEBAEGIp8EACwEBAEHIp8EACwEBAEGIqMEACwEBAEH
    IqMEACwEBAEGIqcEACwEBAEHIqcEACwEBAEGIqsEACwEBAEHIqsEACwEBAEGIq8EACwEBAEHIq8EACwEBAEGIrMEACwEB
    AEHIrMEACwEBAEGIrcEACwEBAEHIrcEACwEBAEGIrsEACwEBAEHIrsEACwEBAEGIr8EACwEBAEHIr8EACwEBAEGIsMEAC
    wEBAEHIsMEACwEBAEGIscEACwEBAEHIscEACwEBAEGIssEACwEBAEHIssEACwEBAEGIs8EACwEBAEHIs8EACwEBAEGItM
    EACwEBAEHItMEACwEBAEGItcEACwEBAEHItcEACwEBAHsJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2V
    kLWJ5AwVydXN0Yx0xLjQ5LjAgKGUxODg0YThlMyAyMDIwLTEyLTI5KQZ3YWxydXMGMC4xOC4wDHdhc20tYmluZGdlbhIw
    LjIuNzAgKGI2MzU1YzI3MCk=
`.replace(/[^0-9a-zA-Z/+]/g, ""), wasmBytes = base64Arraybuffer.decode(wasmBytesBase64);
function bls_init() {
  return wasm.bls_init();
}
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  return (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) && (cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer)), cachegetUint8Memory0;
}
function passArray8ToWasm0(t, e) {
  const A = e(t.length * 1);
  return getUint8Memory0().set(t, A / 1), [A, t.length];
}
function bls_verify(t, e, A) {
  const [n, o] = passArray8ToWasm0(t, wasm.__wbindgen_malloc), [s, a] = passArray8ToWasm0(e, wasm.__wbindgen_malloc), [c, l] = passArray8ToWasm0(A, wasm.__wbindgen_malloc);
  return wasm.bls_verify(n, o, s, a, c, l);
}
async function load(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    const A = await t.arrayBuffer();
    return await WebAssembly.instantiate(A, e);
  } else {
    const A = await WebAssembly.instantiate(t, e);
    return A instanceof WebAssembly.Instance ? { instance: A, module: t } : A;
  }
}
async function init$1() {
  const t = {}, { instance: e, module: A } = await load(wasmBytes, t);
  return wasm = e.exports, init$1.__wbindgen_wasm_module = A, wasm;
}
let verify;
async function blsVerify(t, e, A) {
  if (!verify) {
    if (await init$1(), bls_init() !== 0)
      throw new Error("Cannot initialize BLS");
    verify = (n, o, s) => bls_verify(o, s, n) === 0;
  }
  return verify(t, e, A);
}
function isBufferEqual(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let A = 0; A < t.length; A++)
    if (t[A] !== e[A])
      return !1;
  return !0;
}
class Certificate {
  constructor(e, A = getDefaultAgent()) {
    this._agent = A, this.verified = !1, this._rootKey = null, this.cert = decode$1(e.certificate);
  }
  lookupEx(e) {
    if (!this.verified)
      throw new Error("Cannot lookup unverified certificate");
    return lookupPathEx(e, this.cert.tree);
  }
  lookup(e) {
    if (!this.verified)
      throw new Error("Cannot lookup unverified certificate");
    return lookup_path(e, this.cert.tree);
  }
  async verify() {
    const e = await reconstruct(this.cert.tree), A = await this._checkDelegation(this.cert.delegation), n = this.cert.signature, o = extractDER(A), s = buffer.Buffer.concat([domain_sep("ic-state-root"), e]), a = await blsVerify(o, n, s);
    return this.verified = a, a;
  }
  async fetchRootKey() {
    await this._agent.fetchRootKey(), this._rootKey = this._agent.rootKey;
  }
  async _checkDelegation(e) {
    if (!e) {
      if (!this._rootKey) {
        if (this._agent.rootKey)
          return this._rootKey = this._agent.rootKey, this._rootKey;
        this._rootKey = await this._agent.fetchRootKey();
      }
      return this._rootKey;
    }
    const A = new Certificate(e, this._agent);
    if (!await A.verify())
      throw new Error("fail to verify delegation certificate");
    const n = A.lookup([buffer.Buffer.from("subnet"), e.subnet_id, buffer.Buffer.from("public_key")]);
    return Promise.resolve(n);
  }
}
const DER_PREFIX = buffer.Buffer.from("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100", "hex"), KEY_LENGTH = 96;
function extractDER(t) {
  const e = DER_PREFIX.length + KEY_LENGTH;
  if (t.length !== e)
    throw new TypeError(`BLS DER-encoded public key must be ${e} bytes long`);
  const A = t.slice(0, DER_PREFIX.length);
  if (!isBufferEqual(A, DER_PREFIX))
    throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${DER_PREFIX}, but get ${A}`);
  return t.slice(DER_PREFIX.length);
}
async function reconstruct(t) {
  switch (t[0]) {
    case 0:
      return hash(domain_sep("ic-hashtree-empty"));
    case 4:
      return buffer.Buffer.from(t[1]);
    case 3:
      return hash(buffer.Buffer.concat([
        domain_sep("ic-hashtree-leaf"),
        buffer.Buffer.from(t[1])
      ]));
    case 2:
      return hash(buffer.Buffer.concat([
        domain_sep("ic-hashtree-labeled"),
        buffer.Buffer.from(t[1]),
        buffer.Buffer.from(await reconstruct(t[2]))
      ]));
    case 1:
      return hash(buffer.Buffer.concat([
        domain_sep("ic-hashtree-fork"),
        buffer.Buffer.from(await reconstruct(t[1])),
        buffer.Buffer.from(await reconstruct(t[2]))
      ]));
    default:
      throw new Error("unreachable");
  }
}
function domain_sep(t) {
  const e = buffer.Buffer.alloc(1);
  return e.writeUInt8(t.length, 0), buffer.Buffer.concat([e, buffer.Buffer.from(t)]);
}
function lookupPathEx(t, e) {
  const A = lookup_path(t.map((n) => typeof n == "string" ? blobFromText(n) : blobFromUint8Array(new Uint8Array(n))), e);
  return A && blobToUint8Array(A);
}
function lookup_path(t, e) {
  if (t.length === 0)
    switch (e[0]) {
      case 3:
        return buffer.Buffer.from(e[1]);
      default:
        return;
    }
  const A = find_label(t[0], flatten_forks(e));
  if (A)
    return lookup_path(t.slice(1), A);
}
function flatten_forks(t) {
  switch (t[0]) {
    case 0:
      return [];
    case 1:
      return flatten_forks(t[1]).concat(flatten_forks(t[2]));
    default:
      return [t];
  }
}
function find_label(t, e) {
  if (e.length !== 0) {
    for (const A of e)
      if (A[0] === 2) {
        const n = buffer.Buffer.from(A[1]);
        if (isBufferEqual(t, n))
          return A[2];
      }
  }
}
const FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once$1(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once$1() {
  let t = !0;
  return async () => t ? (t = !1, !0) : !1;
}
function conditionalDelay(t, e) {
  return async (A, n, o) => {
    if (await t(A, n, o))
      return new Promise((s) => setTimeout(s, e));
  };
}
function timeout(t) {
  const e = Date.now() + t;
  return async (A, n, o) => {
    if (Date.now() > e)
      throw new Error(`Request timed out after ${t} msec:
  Request ID: ${toHex$1(n)}
  Request status: ${o}
`);
  };
}
function backoff(t, e) {
  let A = t;
  return () => new Promise((n) => setTimeout(() => {
    A *= e, n();
  }, A));
}
function chain(...t) {
  return async (e, A, n) => {
    for (const o of t)
      await o(e, A, n);
  };
}
async function pollForResponse(t, e, A, n) {
  const o = [blobFromText("request_status"), A], s = await t.readState(e, { paths: [o] }), a = new Certificate(s, t);
  if (!await a.verify())
    throw new Error("Fail to verify certificate");
  const l = a.lookup([...o, blobFromText("status")]);
  let B;
  switch (typeof l > "u" ? B = RequestStatusResponseStatus.Unknown : B = l.toString(), B) {
    case RequestStatusResponseStatus.Replied:
      return a.lookup([...o, blobFromText("reply")]);
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing:
      return await n(e, A, B), pollForResponse(t, e, A, n);
    case RequestStatusResponseStatus.Rejected: {
      const g = a.lookup([...o, blobFromText("reject_code")]).toString(), E = a.lookup([...o, blobFromText("reject_message")]).toString();
      throw new Error(`Call was rejected:
  Request ID: ${toHex$1(A)}
  Reject code: ${g}
  Reject text: ${E}
`);
    }
    case RequestStatusResponseStatus.Done:
      throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${toHex$1(A)}
`);
  }
  throw new Error("unreachable");
}
var CanisterInstallMode;
(function(t) {
  t.Install = "install", t.Reinstall = "reinstall", t.Upgrade = "upgrade";
})(CanisterInstallMode || (CanisterInstallMode = {}));
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
  constructor(e) {
    this[metadataSymbol] = Object.freeze(e);
  }
  static agentOf(e) {
    return e[metadataSymbol].config.agent;
  }
  static interfaceOf(e) {
    return e[metadataSymbol].service;
  }
  static canisterIdOf(e) {
    return Principal.from(e[metadataSymbol].config.canisterId);
  }
  static async install(e, A) {
    const n = e.mode === void 0 ? CanisterInstallMode.Install : e.mode, o = e.arg ? [...e.arg] : [], s = [...e.module], a = typeof A.canisterId == "string" ? Principal.fromText(A.canisterId) : A.canisterId;
    await getManagementCanister(A).install_code({
      mode: { [n]: null },
      arg: o,
      wasm_module: s,
      canister_id: a
    });
  }
  static async createCanister(e) {
    const { canister_id: A } = await getManagementCanister(e || {}).provisional_create_canister_with_cycles({ amount: [], settings: [] });
    return A;
  }
  static async createAndInstallCanister(e, A, n) {
    const o = await this.createCanister(n);
    return await this.install(Object.assign({}, A), Object.assign(Object.assign({}, n), { canisterId: o })), this.createActor(e, Object.assign(Object.assign({}, n), { canisterId: o }));
  }
  static createActorClass(e) {
    const A = e({ IDL });
    class n extends Actor {
      constructor(s) {
        const a = typeof s.canisterId == "string" ? Principal.fromText(s.canisterId) : s.canisterId;
        super({
          config: Object.assign(Object.assign(Object.assign({}, DEFAULT_ACTOR_CONFIG), s), { canisterId: a }),
          service: A
        });
        for (const [c, l] of A._fields)
          this[c] = _createActorMethod(this, c, l);
      }
    }
    return n;
  }
  static createActor(e, A) {
    return new (this.createActorClass(e))(A);
  }
}
function decodeReturnValue(t, e) {
  const A = decode$2(t, buffer.Buffer.from(e));
  switch (A.length) {
    case 0:
      return;
    case 1:
      return A[0];
    default:
      return A;
  }
}
const DEFAULT_ACTOR_CONFIG = {
  pollingStrategyFactory: defaultStrategy
};
function _createActorMethod(t, e, A) {
  let n;
  A.annotations.includes("query") ? n = async (s, ...a) => {
    var c, l;
    s = Object.assign(Object.assign({}, s), (l = (c = t[metadataSymbol].config).queryTransform) === null || l === void 0 ? void 0 : l.call(c, e, a, Object.assign(Object.assign({}, t[metadataSymbol].config), s)));
    const B = s.agent || t[metadataSymbol].config.agent || getDefaultAgent(), g = s.canisterId || t[metadataSymbol].config.canisterId, E = encode$2(A.argTypes, a), I = await B.query(g, { methodName: e, arg: E });
    switch (I.status) {
      case "rejected":
        throw new Error(`Query failed:
  Status: ${I.status}
  Message: ${I.reject_message}
`);
      case "replied":
        return decodeReturnValue(A.retTypes, I.reply.arg);
    }
  } : n = async (s, ...a) => {
    var c, l;
    s = Object.assign(Object.assign({}, s), (l = (c = t[metadataSymbol].config).callTransform) === null || l === void 0 ? void 0 : l.call(c, e, a, Object.assign(Object.assign({}, t[metadataSymbol].config), s)));
    const B = s.agent || t[metadataSymbol].config.agent || getDefaultAgent(), { canisterId: g, effectiveCanisterId: E, pollingStrategyFactory: I } = Object.assign(Object.assign(Object.assign({}, DEFAULT_ACTOR_CONFIG), t[metadataSymbol].config), s), x = Principal.from(g), U = E !== void 0 ? Principal.from(E) : x, v = encode$2(A.argTypes, a), { requestId: D, response: T } = await B.call(x, {
      methodName: e,
      arg: v,
      effectiveCanisterId: U
    });
    if (!T.ok)
      throw new Error([
        "Call failed:",
        `  Method: ${e}(${a})`,
        `  Canister ID: ${x}`,
        `  Request ID: ${toHex$1(D)}`,
        `  HTTP status code: ${T.status}`,
        `  HTTP status text: ${T.statusText}`
      ].join(`
`));
    const Z = I(), j = await pollForResponse(B, U, D, Z);
    if (j !== void 0)
      return decodeReturnValue(A.retTypes, j);
    if (A.retTypes.length === 0)
      return;
    throw new Error(`Call was returned undefined, but type [${A.retTypes.join(",")}].`);
  };
  const o = (...s) => n({}, ...s);
  return o.withOptions = (s) => (...a) => n(s, ...a), o;
}
function sudograph(t) {
  var s, a;
  const e = (s = t.queryFunctionName) != null ? s : "graphql_query", A = (a = t.mutationFunctionName) != null ? a : "graphql_mutation", n = ({ IDL: c }) => c.Service({
    [e]: c.Func([c.Text, c.Text], [c.Text], ["query"]),
    [A]: c.Func([c.Text, c.Text], [c.Text], [])
  }), o = t.canisterId;
  return {
    query: async (c, l = {}) => {
      const B = new HttpAgent({
        identity: t.identity
      });
      await B.fetchRootKey();
      const E = await Actor.createActor(n, {
        agent: B,
        canisterId: o
      })[e](c, JSON.stringify(l));
      return JSON.parse(E);
    },
    mutation: async (c, l = {}) => {
      const B = new HttpAgent({
        identity: t.identity
      });
      await B.fetchRootKey();
      const E = await Actor.createActor(n, {
        agent: B,
        canisterId: o
      })[A](c, JSON.stringify(l));
      return JSON.parse(E);
    }
  };
}
sudograph({
  canisterId: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }.CANISTER_ID
});
const initialItems = [{
  name: "0",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 0
}, {
  name: "1",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 2
}, {
  name: "2",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 4
}, {
  name: "3",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 6
}, {
  name: "4",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 7
}, {
  name: "5",
  image: "images/item.jpg",
  slotType: "inventory",
  slot: 8
}, {
  name: "6",
  image: "images/item.jpg",
  slotType: "local",
  slot: 0
}, {
  name: "7",
  image: "images/item.jpg",
  slotType: "local",
  slot: 2
}], useStore = create((t) => ({
  items: initialItems,
  updateItems: (e) => t((A) => ({
    items: e
  })),
  itemNumPerPage: 9,
  updateItemNumPerPage: (e) => t((A) => ({
    itemNumPerPage: e
  })),
  selItem: null,
  updateSelItem: (e) => t((A) => ({
    selItem: e
  })),
  selItemEl: null,
  updateSelItemEl: (e) => t((A) => ({
    selItemEl: e
  })),
  selCloneItemEl: null,
  updateSelCloneItemEl: (e) => t((A) => ({
    selCloneItemEl: e
  })),
  curInventoryPage: 1,
  updateCurInventoryPage: (e) => t((A) => ({
    curInventoryPage: e
  })),
  inventoryEl: null,
  updateInventoryEl: (e) => t((A) => ({
    inventoryEl: e
  })),
  inventoryTLEl: null,
  updateInventoryTLEl: (e) => t((A) => ({
    inventoryTLEl: e
  })),
  inventoryTREl: null,
  updateInventoryTREl: (e) => t((A) => ({
    inventoryTREl: e
  })),
  inventoryBREl: null,
  updateInventoryBREl: (e) => t((A) => ({
    inventoryBREl: e
  })),
  inventoryBLEl: null,
  updateInventoryBLEl: (e) => t((A) => ({
    inventoryBLEl: e
  }))
})), getSortedItems = ({
  items: t,
  slotType: e,
  itemNumPerPage: A
}) => {
  t || (t = []);
  const n = [];
  t.forEach((s) => {
    n[s.slot] = s;
  });
  const o = n.length ? Math.ceil(n.length / A) * A : A;
  for (let s = 0; s < o; s++)
    n[s] || (n[s] = {
      slot: s,
      slotType: e
    });
  return n;
}, getLength = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), getPosInInventory = (t) => {
  const e = t.inventoryEl.getBoundingClientRect(), A = t.inventoryTLEl.getBoundingClientRect(), n = t.inventoryTREl.getBoundingClientRect(), o = t.inventoryBREl.getBoundingClientRect(), s = t.inventoryBLEl.getBoundingClientRect(), a = getLength(A, n), c = getLength(s, o), l = getLength(A, s), B = getLength(n, o), g = (t.x - e.x) / e.width, E = A.y < n.y ? g : 1 - g, I = Math.abs((s.x - A.x) * (s.y - t.y) / (s.y - A.y)), x = A.y < n.y ? Math.abs((n.y - A.y) * (t.x - A.x) / (n.x - A.x)) : Math.abs((n.y - A.y) * (1 - (t.x - A.x) / (n.x - A.x))), U = Math.min(a, c) + Math.abs(a - c) * (t.y - e.y) / e.height, v = Math.min(l, B) + Math.abs(l - B) * E, D = (t.x - A.x - I + 5) * (600 / U), T = (t.y - Math.min(A.y, n.y) - x / 2 + 5) * (400 / v);
  return {
    x: D,
    y: T
  };
}, Item = ({
  item: t,
  isTrade: e
}) => {
  const {
    items: A,
    updateItems: n,
    inventoryEl: o,
    inventoryTLEl: s,
    inventoryTREl: a,
    inventoryBREl: c,
    inventoryBLEl: l,
    selItem: B,
    updateSelItem: g,
    selItemEl: E,
    updateSelItemEl: I,
    selCloneItemEl: x,
    updateSelCloneItemEl: U
  } = useStore();
  return t && t.name ? /* @__PURE__ */ jsxs(Stack$1, {
    justifyContent: "center",
    alignItems: "center",
    className: `class_item ${e ? "class_trade_item" : "class_user_item"}`,
    onMouseDown: (v) => {
      if (B || E || x)
        return;
      const D = v.target, T = D.cloneNode(!0), {
        x: Z,
        y: j
      } = getPosInInventory({
        x: v.clientX,
        y: v.clientY,
        inventoryEl: o,
        inventoryTLEl: s,
        inventoryTREl: a,
        inventoryBREl: c,
        inventoryBLEl: l
      });
      T.style.left = `${Z}px`, T.style.top = `${j}px`, o.appendChild(T), D.className += " selected", T.className += " virtual", g(t), I(D), U(T);
    },
    children: [/* @__PURE__ */ jsx("img", {
      className: "class_item_image",
      src: t.image
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("span", {
        className: "class_item_name",
        children: t.name
      })
    })]
  }) : /* @__PURE__ */ jsx(Stack$1, {
    justifyContent: "center",
    alignItems: "center",
    className: `class_item empty ${e ? "class_trade_item" : "class_user_item"}`,
    onMouseDown: (v) => {
      if (!B)
        return;
      const D = [...A], T = D.findIndex((Z) => Z.slot === B.slot && Z.slotType === B.slotType);
      D[T].slot = t.slot, D[T].slotType = t.slotType, n(D);
    }
  });
}, InventoryComponent = (t) => {
  const e = () => {
    const s = t.curPage, a = t.pageNum, c = t.updatePage;
    s >= a || !c || c(s + 1);
  }, A = () => {
    const s = t.curPage, a = t.updatePage;
    s <= 1 || !a || a(s - 1);
  }, n = () => {
    console.log("onAccept: ");
  }, o = () => {
    console.log("onCancel: ");
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "class_inventory_panel_component",
    children: [/* @__PURE__ */ jsx("div", {
      className: "class_inventory_panel_component_title",
      children: t.title
    }), /* @__PURE__ */ jsxs("div", {
      className: "class_inventory_panel_component_content",
      children: [/* @__PURE__ */ jsx(Stack$1, {
        direction: "row",
        justifyContent: "flex-start",
        gap: "8px",
        flexWrap: "wrap",
        sx: {
          position: "relative"
        },
        children: React__default.Children.toArray(Array.from({
          length: t.compItems.length
        }).map((s, a) => /* @__PURE__ */ jsx("div", {
          className: "class_item_container",
          children: /* @__PURE__ */ jsx(Item, {
            item: t.compItems[a],
            isTrade: t.isTrade
          })
        })))
      }), t.isTrade ? /* @__PURE__ */ jsx(Stack$1, {
        direction: "row",
        justifyContent: "space-around",
        alignItems: "center",
        children: t.isAcceptedOffer ? /* @__PURE__ */ jsx("div", {
          className: "class_common_text",
          children: "Accepted"
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Button$1, {
            variant: "contained",
            color: "success",
            onClick: n,
            children: "Accept"
          }), /* @__PURE__ */ jsx(Button$1, {
            variant: "contained",
            color: "error",
            onClick: o,
            children: "Cancel"
          })]
        })
      }) : /* @__PURE__ */ jsxs(Stack$1, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/* @__PURE__ */ jsx(IconButton$1, {
          sx: {
            svg: {
              color: "white"
            }
          },
          className: `class_pagination_btn ${t.curPage <= 1 ? "class_common_disable" : ""}`,
          onClick: () => A(),
          disabled: t.curPage < 1,
          children: "Back"
        }), /* @__PURE__ */ jsxs("p", {
          className: "class_common_text",
          children: ["Page ", `${t.curPage} - ${t.pageNum}`]
        }), /* @__PURE__ */ jsx(IconButton$1, {
          sx: {
            svg: {
              color: "white"
            }
          },
          className: `class_pagination_btn ${t.curPage >= t.pageNum ? "class_common_disable" : ""}`,
          onClick: () => e(),
          disabled: t.curPage >= t.pageNum,
          children: "Fwd"
        })]
      })]
    })]
  });
}, InventoryContent = () => {
  const {
    items: t,
    itemNumPerPage: e,
    curInventoryPage: A,
    updateCurInventoryPage: n
  } = useStore(), o = getSortedItems({
    items: t.filter((c) => c.slotType === "inventory"),
    slotType: "inventory",
    itemNumPerPage: e
  }), s = getSortedItems({
    items: t.filter((c) => c.slotType === "remote"),
    slotType: "remote",
    itemNumPerPage: e
  }), a = getSortedItems({
    items: t.filter((c) => c.slotType === "local"),
    slotType: "local",
    itemNumPerPage: e
  });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "class_inventory_panel",
      children: [/* @__PURE__ */ jsx(InventoryComponent, {
        title: "Remote Trade",
        compItems: s,
        isTrade: !0,
        isAcceptedOffer: !1
      }), /* @__PURE__ */ jsx(InventoryComponent, {
        title: "Local Trade",
        compItems: a,
        isTrade: !0
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "class_inventory_panel",
      children: /* @__PURE__ */ jsx(InventoryComponent, {
        title: "Inventory",
        compItems: o,
        pageNum: Math.ceil(o.length / e),
        curPage: A,
        updatePage: n
      })
    })]
  });
}, inventory = "", Inventory = () => {
  const {
    updateSelItem: t,
    selItemEl: e,
    updateSelItemEl: A,
    selCloneItemEl: n,
    updateSelCloneItemEl: o,
    inventoryEl: s,
    updateInventoryEl: a,
    inventoryTLEl: c,
    updateInventoryTLEl: l,
    inventoryTREl: B,
    updateInventoryTREl: g,
    inventoryBREl: E,
    updateInventoryBREl: I,
    inventoryBLEl: x,
    updateInventoryBLEl: U
  } = useStore(), v = useRef(), D = useRef(), T = useRef(), Z = useRef(), j = useRef();
  return useEffect(() => {
    a(v.current), l(D.current), g(T.current), I(Z.current), U(j.current);
  }, []), /* @__PURE__ */ jsxs("div", {
    ref: v,
    className: "class_inventory",
    onMouseMove: (L) => {
      if (!n)
        return;
      const {
        x: Y,
        y: W
      } = getPosInInventory({
        x: L.clientX,
        y: L.clientY,
        inventoryEl: s,
        inventoryTLEl: c,
        inventoryTREl: B,
        inventoryBREl: E,
        inventoryBLEl: x
      });
      n.style.left = `${Y}px`, n.style.top = `${W}px`;
    },
    onMouseDown: (L) => {
      !e || !n || (e.className = e.className.replace(" selected", ""), s.removeChild(n), t(null), A(null), o(null));
    },
    children: [/* @__PURE__ */ jsx(InventoryContent, {}), /* @__PURE__ */ jsx("div", {
      ref: D,
      className: "class_inventory_tl"
    }), /* @__PURE__ */ jsx("div", {
      ref: T,
      className: "class_inventory_tr"
    }), /* @__PURE__ */ jsx("div", {
      ref: Z,
      className: "class_inventory_br"
    }), /* @__PURE__ */ jsx("div", {
      ref: j,
      className: "class_inventory_bl"
    })]
  });
};
export {
  Inventory
};
