exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 5431:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8193))

/***/ }),

/***/ 9836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2913);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);


function Index({ children }) {
    const magnetic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        console.log(children);
        const xTo = gsap__WEBPACK_IMPORTED_MODULE_1___default().quickTo(magnetic.current, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
        const yTo = gsap__WEBPACK_IMPORTED_MODULE_1___default().quickTo(magnetic.current, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
        magnetic.current.addEventListener("mousemove", (e)=>{
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        });
        magnetic.current.addEventListener("mouseleave", (e)=>{
            xTo(0);
            yTo(0);
        });
    }, [
        children
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {
        ref: magnetic
    });
}


/***/ }),

/***/ 8410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1415);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2913);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Magnetic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9836);






function Index({ children, backgroundColor = "#ECEBDE", ...attributes }) {
    const circle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let timeline = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let timeoutId = null;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        timeline.current = gsap__WEBPACK_IMPORTED_MODULE_3___default().timeline({
            paused: true
        });
        timeline.current.to(circle.current, {
            top: "-25%",
            width: "150%",
            duration: 0.4,
            ease: "power3.in"
        }, "enter").to(circle.current, {
            top: "-150%",
            width: "125%",
            duration: 0.25
        }, "exit");
    }, []);
    const manageMouseEnter = ()=>{
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo("enter", "exit");
    };
    const manageMouseLeave = ()=>{
        timeoutId = setTimeout(()=>{
            timeline.current.play();
        }, 300);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Magnetic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().roundedButton),
            style: {
                overflow: "hidden"
            },
            onMouseEnter: ()=>{
                manageMouseEnter();
            },
            onMouseLeave: ()=>{
                manageMouseLeave();
            },
            ...attributes,
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: circle,
                    style: {
                        backgroundColor
                    },
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circle)
                })
            ]
        })
    });
}


/***/ }),

/***/ 8193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Index)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/Header/style.module.scss
var style_module = __webpack_require__(3167);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(4338);
// EXTERNAL MODULE: ./src/components/Header/nav/style.module.scss
var nav_style_module = __webpack_require__(3601);
var nav_style_module_default = /*#__PURE__*/__webpack_require__.n(nav_style_module);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 167 modules
var motion = __webpack_require__(8655);
;// CONCATENATED MODULE: ./src/components/Header/animation.js
const menuSlide = {
    initial: {
        x: "calc(100% + 100px)"
    },
    enter: {
        x: "0",
        transition: {
            duration: 0.8,
            ease: [
                0.76,
                0,
                0.24,
                1
            ]
        }
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.8,
            ease: [
                0.76,
                0,
                0.24,
                1
            ]
        }
    }
};
const slide = {
    initial: {
        x: 80
    },
    enter: (i)=>({
            x: 0,
            transition: {
                duration: 0.8,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ],
                delay: 0.05 * i
            }
        }),
    exit: (i)=>({
            x: 80,
            transition: {
                duration: 0.8,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ],
                delay: 0.05 * i
            }
        })
};
const scale = {
    open: {
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    closed: {
        scale: 0,
        transition: {
            duration: 0.4
        }
    }
};

// EXTERNAL MODULE: ./src/components/Header/nav/Link/style.module.scss
var Link_style_module = __webpack_require__(3110);
var Link_style_module_default = /*#__PURE__*/__webpack_require__.n(Link_style_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/nav/Link/index.jsx





function Index({ data, isActive, setSelectedIndicator }) {
    const { title, href, index } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        className: (Link_style_module_default()).link,
        onMouseEnter: ()=>{
            setSelectedIndicator(href);
        },
        custom: index,
        variants: slide,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                variants: scale,
                animate: isActive ? "open" : "closed",
                className: (Link_style_module_default()).indicator
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                children: title
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Header/nav/Curve/styles.module.scss
var styles_module = __webpack_require__(2809);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/Header/nav/Curve/index.jsx




function Curve_Index() {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {
                duration: 1,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ]
            }
        },
        exit: {
            d: initialPath,
            transition: {
                duration: 0.8,
                ease: [
                    0.76,
                    0,
                    0.24,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: (styles_module_default()).svgCurve,
        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.path, {
            variants: curve,
            initial: "initial",
            animate: "enter",
            exit: "exit"
        })
    });
}

// EXTERNAL MODULE: ./src/components/Header/nav/Footer/style.module.scss
var Footer_style_module = __webpack_require__(2674);
var Footer_style_module_default = /*#__PURE__*/__webpack_require__.n(Footer_style_module);
;// CONCATENATED MODULE: ./src/components/Header/nav/Footer/index.jsx


function index() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_style_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: "Instagram"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: "Facebook"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: "LinkedIn"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/nav/index.jsx









const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contact",
        href: "/contact"
    }
];
function nav_Index() {
    const pathname = (0,navigation.usePathname)();
    const [selectedIndicator, setSelectedIndicator] = (0,react_.useState)(pathname);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        variants: menuSlide,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        className: (nav_style_module_default()).menu,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (nav_style_module_default()).body,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onMouseLeave: ()=>{
                            setSelectedIndicator(pathname);
                        },
                        className: (nav_style_module_default()).nav,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (nav_style_module_default()).header,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Goto"
                                })
                            }),
                            navItems.map((data, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(Index, {
                                    data: {
                                        ...data,
                                        index
                                    },
                                    isActive: selectedIndicator == data.href,
                                    setSelectedIndicator: setSelectedIndicator
                                }, index);
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(index, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Curve_Index, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(2913);
var gsap_default = /*#__PURE__*/__webpack_require__.n(gsap);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(9644);
// EXTERNAL MODULE: ./src/common/RoundedButton/index.jsx
var RoundedButton = __webpack_require__(8410);
// EXTERNAL MODULE: ./src/common/Magnetic/index.jsx
var Magnetic = __webpack_require__(9836);
;// CONCATENATED MODULE: ./src/components/Header/index.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function Header_Index() {
    const header = (0,react_.useRef)(null);
    const [isActive, setIsActive] = (0,react_.useState)(false);
    const pathname = (0,navigation.usePathname)();
    const button = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        if (isActive) setIsActive(false);
    }, [
        pathname
    ]);
    (0,react_.useLayoutEffect)(()=>{
        gsap_default().registerPlugin(ScrollTrigger/* ScrollTrigger */.i);
        gsap_default().to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: ()=>{
                    gsap_default().to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out"
                    });
                },
                onEnterBack: ()=>{
                    gsap_default().to(button.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: "power1.out"
                    }, setIsActive(false));
                }
            }
        });
    }, []);
    (0,react_.useLayoutEffect)(()=>{
        const handleScroll = ()=>{
            if (window.innerWidth <= 768) {
                if (window.scrollY > 150) {
                    gsap_default().to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out"
                    });
                } else {
                    gsap_default().to(button.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: "power1.out"
                    });
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call the function initially in case the user is already scrolled down
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const isProjectsPage = pathname === "/projects" || pathname === "/about";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: header,
                className: `${(style_module_default()).header} ${isProjectsPage ? (style_module_default()).headerBlack : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (style_module_default()).copyright,
                                children: "\xa9"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (style_module_default()).name,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (style_module_default()).codeBy,
                                        children: "Code by"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (style_module_default()).gowtham,
                                        children: "Gowtham"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (style_module_default()).thibhu,
                                        children: "thibhu"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).nav,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Magnetic/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (style_module_default()).el,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/projects",
                                            children: "Projects"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (style_module_default()).indicator
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Magnetic/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (style_module_default()).el,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (style_module_default()).indicator
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Magnetic/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (style_module_default()).el,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (style_module_default()).indicator
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: button,
                className: (style_module_default()).headerButtonContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RoundedButton/* default */.Z, {
                    onClick: ()=>{
                        setIsActive(!isActive);
                    },
                    className: `${(style_module_default()).button}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(style_module_default()).burger} ${isActive ? (style_module_default()).burgerActive : ""}`
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                mode: "wait",
                children: isActive && /*#__PURE__*/ jsx_runtime_.jsx(nav_Index, {})
            })
        ]
    });
}


/***/ }),

/***/ 1415:
/***/ ((module) => {

// Exports
module.exports = {
	"roundedButton": "style_roundedButton__ne1xQ",
	"circle": "style_circle__yB8nE"
};


/***/ }),

/***/ 2809:
/***/ ((module) => {

// Exports
module.exports = {
	"svgCurve": "styles_svgCurve__a63F0"
};


/***/ }),

/***/ 2674:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "style_footer__eZZQQ"
};


/***/ }),

/***/ 3110:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "style_link__p0dN0",
	"indicator": "style_indicator__IaE_R"
};


/***/ }),

/***/ 3601:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "style_menu__jOZ4g",
	"body": "style_body__g5v8Q",
	"nav": "style_nav__aHW3P",
	"header": "style_header__r4s_r"
};


/***/ }),

/***/ 3167:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "style_header__Pp4Zg",
	"headerBlack": "style_headerBlack__DoYpT",
	"logo": "style_logo__IVIWQ",
	"nav": "style_nav__bNmn6",
	"name": "style_name__egQcH",
	"el": "style_el__f_u5S",
	"copyright": "style_copyright__18m1I",
	"codeBy": "style_codeBy__4WfDj",
	"gowtham": "style_gowtham__LSkGl",
	"thibhu": "style_thibhu__QHmBd",
	"indicator": "style_indicator__nD4Ou",
	"overlay": "style_overlay__Txww_",
	"overlayText": "style_overlayText__11gqJ",
	"fadeIn": "style_fadeIn__HPEY5",
	"fadeOut": "style_fadeOut___shNM",
	"headerButtonContainer": "style_headerButtonContainer__Sg8RS",
	"button": "style_button__i4W7i",
	"burger": "style_burger__9M2JV",
	"burgerActive": "style_burgerActive__Jt0At"
};


/***/ }),

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(6588);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7814);
;// CONCATENATED MODULE: ./src/components/Header/index.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\gowth\Projects\gowtham-website\src\components\Header\index.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.js




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;