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

/***/ "(app-pages-browser)/./src/components/favourite/players-view.tsx":
/*!***************************************************!*\
  !*** ./src/components/favourite/players-view.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayersView: function() { return /* binding */ PlayersView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"ALLAN OKELLO\",\n        team: \"VIPERS\",\n        country: \"UG\",\n        age: 23,\n        image: \"/images/allan.jpeg\",\n        color: \"bg-red-600\"\n    },\n    {\n        id: 2,\n        name: \"SSALI ALPHA\",\n        team: \"EXPRESS\",\n        country: \"UG\",\n        age: 19,\n        image: \"/images/sali.jpg\",\n        color: \"bg-red-600\"\n    },\n    {\n        id: 3,\n        name: \"JOHN REVITTA\",\n        team: \"KCCA\",\n        country: \"UG\",\n        age: 31,\n        image: \"/images/john.jpg\",\n        color: \"bg-yellow-400\"\n    },\n    {\n        id: 4,\n        name: \"JOSHUA LUBWAMA\",\n        team: \"URA\",\n        country: \"UG\",\n        age: 21,\n        image: \"/images/joshua.jpeg\",\n        color: \"bg-blue-700\"\n    }\n];\nfunction PlayersView() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 gap-4\",\n        children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"\".concat(player.color, \" text-white\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                    className: \"p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-12 h-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: player.image,\n                                    alt: player.name,\n                                    fill: true,\n                                    className: \"object-cover rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-bold text-sm\",\n                                        children: player.name\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs opacity-90\",\n                                        children: [\n                                            \"COUNTRY:\",\n                                            player.country\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs opacity-90\",\n                                        children: [\n                                            \"AGE:\",\n                                            player.age,\n                                            \"yrs\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, player.id, false, {\n                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\players-view.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = PlayersView;\nvar _c;\n$RefreshReg$(_c, \"PlayersView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zhdm91cml0ZS9wbGF5ZXJzLXZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUMwQjtBQUV4RCxNQUFNRyxVQUFVO0lBQ2Q7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFTSxTQUFTQztJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaVixRQUFRVyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNkLHFEQUFJQTtnQkFBaUJZLFdBQVcsR0FBZ0IsT0FBYkUsT0FBT0wsS0FBSyxFQUFDOzBCQUMvQyw0RUFBQ1IsNERBQVdBO29CQUFDVyxXQUFVOzhCQUNyQiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2IsbURBQUtBO29DQUNKZ0IsS0FBS0QsT0FBT04sS0FBSztvQ0FDakJRLEtBQUtGLE9BQU9WLElBQUk7b0NBQ2hCYSxJQUFJO29DQUNKTCxXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ0Q7O2tEQUNDLDhEQUFDTzt3Q0FBR04sV0FBVTtrREFBcUJFLE9BQU9WLElBQUk7Ozs7OztrREFDOUMsOERBQUNlO3dDQUFFUCxXQUFVOzs0Q0FBcUI7NENBQVNFLE9BQU9SLE9BQU87Ozs7Ozs7a0RBQ3pELDhEQUFDYTt3Q0FBRVAsV0FBVTs7NENBQXFCOzRDQUFLRSxPQUFPUCxHQUFHOzRDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFkL0NPLE9BQU9YLEVBQUU7Ozs7Ozs7Ozs7QUFzQjVCO0tBMUJnQk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmF2b3VyaXRlL3BsYXllcnMtdmlldy50c3g/ZDY0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXHJcblxyXG5jb25zdCBwbGF5ZXJzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJBTExBTiBPS0VMTE9cIixcclxuICAgIHRlYW06IFwiVklQRVJTXCIsXHJcbiAgICBjb3VudHJ5OiBcIlVHXCIsXHJcbiAgICBhZ2U6IDIzLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9hbGxhbi5qcGVnXCIsXHJcbiAgICBjb2xvcjogXCJiZy1yZWQtNjAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJTU0FMSSBBTFBIQVwiLFxyXG4gICAgdGVhbTogXCJFWFBSRVNTXCIsXHJcbiAgICBjb3VudHJ5OiBcIlVHXCIsXHJcbiAgICBhZ2U6IDE5LFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9zYWxpLmpwZ1wiLFxyXG4gICAgY29sb3I6IFwiYmctcmVkLTYwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6IFwiSk9ITiBSRVZJVFRBXCIsXHJcbiAgICB0ZWFtOiBcIktDQ0FcIixcclxuICAgIGNvdW50cnk6IFwiVUdcIixcclxuICAgIGFnZTogMzEsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2pvaG4uanBnXCIsXHJcbiAgICBjb2xvcjogXCJiZy15ZWxsb3ctNDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogXCJKT1NIVUEgTFVCV0FNQVwiLFxyXG4gICAgdGVhbTogXCJVUkFcIixcclxuICAgIGNvdW50cnk6IFwiVUdcIixcclxuICAgIGFnZTogMjEsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2pvc2h1YS5qcGVnXCIsXHJcbiAgICBjb2xvcjogXCJiZy1ibHVlLTcwMFwiXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyc1ZpZXcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgIDxDYXJkIGtleT17cGxheWVyLmlkfSBjbGFzc05hbWU9e2Ake3BsYXllci5jb2xvcn0gdGV4dC13aGl0ZWB9PlxyXG4gICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cGxheWVyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3BsYXllci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtXCI+e3BsYXllci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG9wYWNpdHktOTBcIj5DT1VOVFJZOntwbGF5ZXIuY291bnRyeX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG9wYWNpdHktOTBcIj5BR0U6e3BsYXllci5hZ2V9eXJzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwicGxheWVycyIsImlkIiwibmFtZSIsInRlYW0iLCJjb3VudHJ5IiwiYWdlIiwiaW1hZ2UiLCJjb2xvciIsIlBsYXllcnNWaWV3IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicGxheWVyIiwic3JjIiwiYWx0IiwiZmlsbCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/favourite/players-view.tsx\n"));

/***/ })

});