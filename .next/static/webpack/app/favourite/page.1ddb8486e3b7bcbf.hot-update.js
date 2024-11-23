"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/favourite/page",{

/***/ "(app-pages-browser)/./src/components/favourite/transfers-view.tsx":
/*!*****************************************************!*\
  !*** ./src/components/favourite/transfers-view.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransfersView: function() { return /* binding */ TransfersView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n\n\n\n\nconst transfers = [\n    {\n        id: 1,\n        player: \"Allan Okello\",\n        date: \"18/9/2023\",\n        image: \"/images/allan.jpeg\",\n        fromTeam: {\n            name: \"Kcca\",\n            logo: \"/images/kcca.png\"\n        },\n        toTeam: {\n            name: \"Vipers\",\n            logo: \"/images/vipers.jpeg\"\n        }\n    },\n    {\n        id: 2,\n        player: \"Ssali Alpha\",\n        date: \"18/9/2023\",\n        image: \"/images/sali.jpg\",\n        fromTeam: {\n            name: \"Proline\",\n            logo: \"/images/proline.jpeg\"\n        },\n        toTeam: {\n            name: \"Express\",\n            logo: \"/images/express.jpeg\"\n        }\n    },\n    {\n        id: 3,\n        player: \"Joshua Lubwama\",\n        date: \"18/9/2023\",\n        image: \"/images/joshua.jpeg\",\n        fromTeam: {\n            name: \"Wakiso Giants\",\n            logo: \"/images/wakiso giants\"\n        },\n        toTeam: {\n            name: \"URA\",\n            logo: \"/images/ura.png\"\n        }\n    }\n];\nfunction TransfersView() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold mb-4\",\n                children: \"All Transfers\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            transfers.map((transfer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-16 h-16\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: transfer.image,\n                                        alt: transfer.player,\n                                        fill: true,\n                                        className: \"object-cover rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"font-semibold\",\n                                            children: transfer.player\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2 mt-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: transfer.fromTeam.logo,\n                                                    alt: transfer.fromTeam.name,\n                                                    width: 24,\n                                                    height: 24\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    className: \"h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: transfer.toTeam.logo,\n                                                    alt: transfer.toTeam.name,\n                                                    width: 24,\n                                                    height: 24\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground mt-1\",\n                                            children: transfer.date\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, transfer.id, false, {\n                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\transfers-view.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_c = TransfersView;\nvar _c;\n$RefreshReg$(_c, \"TransfersView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zhdm91cml0ZS90cmFuc2ZlcnMtdmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNXO0FBQ2U7QUFFeEQsTUFBTUksWUFBWTtJQUNoQjtRQUNFQyxJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUkMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQUMsUUFBUTtZQUNORixNQUFNO1lBQ05DLE1BQU07UUFDUjtJQUNGO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0FDLFFBQVE7WUFDTkYsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7SUFDRjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtZQUNSQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBQyxRQUFRO1lBQ05GLE1BQU07WUFDTkMsTUFBTTtRQUNSO0lBQ0Y7Q0FDRDtBQUVNLFNBQVNFO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNkI7Ozs7OztZQUMxQ1gsVUFBVWEsR0FBRyxDQUFDLENBQUNDLHlCQUNkLDhEQUFDaEIscURBQUlBOzhCQUNILDRFQUFDQyw0REFBV0E7d0JBQUNZLFdBQVU7a0NBQ3JCLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDZixtREFBS0E7d0NBQ0ptQixLQUFLRCxTQUFTVixLQUFLO3dDQUNuQlksS0FBS0YsU0FBU1osTUFBTTt3Q0FDcEJlLElBQUk7d0NBQ0pOLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFHUCxXQUFVO3NEQUFpQkcsU0FBU1osTUFBTTs7Ozs7O3NEQUM5Qyw4REFBQ1E7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDZixtREFBS0E7b0RBQ0ptQixLQUFLRCxTQUFTVCxRQUFRLENBQUNFLElBQUk7b0RBQzNCUyxLQUFLRixTQUFTVCxRQUFRLENBQUNDLElBQUk7b0RBQzNCYSxPQUFPO29EQUNQQyxRQUFROzs7Ozs7OERBRVYsOERBQUN2QixzRkFBVUE7b0RBQUNjLFdBQVU7Ozs7Ozs4REFDdEIsOERBQUNmLG1EQUFLQTtvREFDSm1CLEtBQUtELFNBQVNOLE1BQU0sQ0FBQ0QsSUFBSTtvREFDekJTLEtBQUtGLFNBQVNOLE1BQU0sQ0FBQ0YsSUFBSTtvREFDekJhLE9BQU87b0RBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OztzREFHWiw4REFBQ0M7NENBQUVWLFdBQVU7c0RBQXNDRyxTQUFTWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkE1QjdEVyxTQUFTYixFQUFFOzs7Ozs7Ozs7OztBQW9DOUI7S0F6Q2dCUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mYXZvdXJpdGUvdHJhbnNmZXJzLXZpZXcudHN4PzFlNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5cclxuY29uc3QgdHJhbnNmZXJzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcGxheWVyOiBcIkFsbGFuIE9rZWxsb1wiLFxyXG4gICAgZGF0ZTogXCIxOC85LzIwMjNcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvYWxsYW4uanBlZ1wiLFxyXG4gICAgZnJvbVRlYW06IHtcclxuICAgICAgbmFtZTogXCJLY2NhXCIsXHJcbiAgICAgIGxvZ286IFwiL2ltYWdlcy9rY2NhLnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHRvVGVhbToge1xyXG4gICAgICBuYW1lOiBcIlZpcGVyc1wiLFxyXG4gICAgICBsb2dvOiBcIi9pbWFnZXMvdmlwZXJzLmpwZWdcIixcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgcGxheWVyOiBcIlNzYWxpIEFscGhhXCIsXHJcbiAgICBkYXRlOiBcIjE4LzkvMjAyM1wiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9zYWxpLmpwZ1wiLFxyXG4gICAgZnJvbVRlYW06IHtcclxuICAgICAgbmFtZTogXCJQcm9saW5lXCIsXHJcbiAgICAgIGxvZ286IFwiL2ltYWdlcy9wcm9saW5lLmpwZWdcIixcclxuICAgIH0sXHJcbiAgICB0b1RlYW06IHtcclxuICAgICAgbmFtZTogXCJFeHByZXNzXCIsXHJcbiAgICAgIGxvZ286IFwiL2ltYWdlcy9leHByZXNzLmpwZWdcIixcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgcGxheWVyOiBcIkpvc2h1YSBMdWJ3YW1hXCIsXHJcbiAgICBkYXRlOiBcIjE4LzkvMjAyM1wiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9qb3NodWEuanBlZ1wiLFxyXG4gICAgZnJvbVRlYW06IHtcclxuICAgICAgbmFtZTogXCJXYWtpc28gR2lhbnRzXCIsXHJcbiAgICAgIGxvZ286IFwiL2ltYWdlcy93YWtpc28gZ2lhbnRzXCIsXHJcbiAgICB9LFxyXG4gICAgdG9UZWFtOiB7XHJcbiAgICAgIG5hbWU6IFwiVVJBXCIsXHJcbiAgICAgIGxvZ286IFwiL2ltYWdlcy91cmEucG5nXCIsXHJcbiAgICB9XHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmZXJzVmlldygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+QWxsIFRyYW5zZmVyczwvaDI+XHJcbiAgICAgIHt0cmFuc2ZlcnMubWFwKCh0cmFuc2ZlcikgPT4gKFxyXG4gICAgICAgIDxDYXJkIGtleT17dHJhbnNmZXIuaWR9PlxyXG4gICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTE2IGgtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3RyYW5zZmVyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3RyYW5zZmVyLnBsYXllcn1cclxuICAgICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3RyYW5zZmVyLnBsYXllcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dHJhbnNmZXIuZnJvbVRlYW0ubG9nb31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RyYW5zZmVyLmZyb21UZWFtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RyYW5zZmVyLnRvVGVhbS5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dHJhbnNmZXIudG9UZWFtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIj57dHJhbnNmZXIuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJBcnJvd1JpZ2h0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwidHJhbnNmZXJzIiwiaWQiLCJwbGF5ZXIiLCJkYXRlIiwiaW1hZ2UiLCJmcm9tVGVhbSIsIm5hbWUiLCJsb2dvIiwidG9UZWFtIiwiVHJhbnNmZXJzVmlldyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwidHJhbnNmZXIiLCJzcmMiLCJhbHQiLCJmaWxsIiwiaDMiLCJ3aWR0aCIsImhlaWdodCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/favourite/transfers-view.tsx\n"));

/***/ })

});