"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"67b152befd03\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NTUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjY3YjE1MmJlZmQwM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiMenu_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FiMenu,FiX!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navigation() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const navItems = [\n        {\n            label: \"Matches\",\n            href: \"/\"\n        },\n        {\n            label: \"Leagues\",\n            href: \"/leagues\"\n        },\n        {\n            label: \"Favourites\",\n            href: \"/favourite\"\n        },\n        {\n            label: \"Shop\",\n            href: \"/shop\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-green-700 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center h-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                className: \"font-bold text-xl\",\n                                children: \"Afrigoals\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-10 flex items-center space-x-4\",\n                                children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: item.href,\n                                        className: \"hover:bg-green-600 px-3 py-2 rounded-md\",\n                                        children: item.label\n                                    }, item.label, false, {\n                                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsOpen(!isOpen),\n                                className: \"p-2 rounded-md hover:bg-green-600\",\n                                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiMenu_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiMenu_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMenu, {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 55\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-2 pt-2 pb-3 space-y-1\",\n                    children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: item.href,\n                            className: \"block px-3 py-2 rounded-md hover:bg-green-600\",\n                            children: item.label\n                        }, item.label, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\Navigation.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFZ0M7QUFDWTtBQUU3QixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1NLFdBQVc7UUFDZjtZQUFFQyxPQUFPO1lBQVdDLE1BQU07UUFBSTtRQUM5QjtZQUFFRCxPQUFPO1lBQVdDLE1BQU07UUFBVztRQUNyQztZQUFFRCxPQUFPO1lBQWNDLE1BQU07UUFBYTtRQUMxQztZQUFFRCxPQUFPO1lBQVFDLE1BQU07UUFBUTtLQUNoQztJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUFFSixNQUFLO2dDQUFJRSxXQUFVOzBDQUFvQjs7Ozs7Ozs7Ozs7c0NBSTVDLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7MENBQ1pKLFNBQVNPLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ0Y7d0NBRUNKLE1BQU1NLEtBQUtOLElBQUk7d0NBQ2ZFLFdBQVU7a0RBRVRJLEtBQUtQLEtBQUs7dUNBSk5PLEtBQUtQLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztzQ0FXdkIsOERBQUNJOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDSztnQ0FDQ0MsU0FBUyxJQUFNWCxVQUFVLENBQUNEO2dDQUMxQk0sV0FBVTswQ0FFVE4sdUJBQVMsOERBQUNGLGlGQUFHQTtvQ0FBQ1EsV0FBVTs7Ozs7eURBQWUsOERBQUNULG9GQUFNQTtvQ0FBQ1MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT2pFTix3QkFDQyw4REFBQ087Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNaSixTQUFTTyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNGOzRCQUVDSixNQUFNTSxLQUFLTixJQUFJOzRCQUNmRSxXQUFVO3NDQUVUSSxLQUFLUCxLQUFLOzJCQUpOTyxLQUFLUCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZL0I7R0EvRHdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD8wMWRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpTWVudSwgRmlYIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IGxhYmVsOiAnTWF0Y2hlcycsIGhyZWY6ICcvJyB9LFxuICAgIHsgbGFiZWw6ICdMZWFndWVzJywgaHJlZjogJy9sZWFndWVzJyB9LFxuICAgIHsgbGFiZWw6ICdGYXZvdXJpdGVzJywgaHJlZjogJy9mYXZvdXJpdGUnIH0sXG4gICAgeyBsYWJlbDogJ1Nob3AnLCBocmVmOiAnL3Nob3AnIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNzAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+QWZyaWdvYWxzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1ncmVlbi02MDAgcHgtMyBweS0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNPcGVuID8gPEZpWCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz4gOiA8RmlNZW51IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIE5hdmlnYXRpb24gKi99XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbmF2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmlNZW51IiwiRmlYIiwiTmF2aWdhdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm5hdkl0ZW1zIiwibGFiZWwiLCJocmVmIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navigation.tsx\n"));

/***/ })

});