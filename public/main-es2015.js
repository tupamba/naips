(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication/auth-guard.service */ "./src/app/services/authentication/auth-guard.service.ts");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _pages_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-game/create-game.component */ "./src/app/pages/create-game/create-game.component.ts");









const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'table', component: _pages_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'menu', component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'newGame', component: _pages_create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__["CreateGameComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["/newGame"]; };
const _c1 = function () { return ["/table"]; };
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nueva partida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ir a la mesa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_5_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
} }
class AppComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'cards';
        this.islogued = false;
        this.auth.getUser().subscribe((userResult) => {
            this.islogued = userResult != null;
            this.user = userResult;
            //if(!this.islogued)
            // this.router.navigate(['login']);
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.auth.login();
        });
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "mb-4"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], [1, "navbar-toggler-icon"], ["class", "navbar-collapse collapse", "id", "navbarsExampleDefault", 4, "ngIf"], ["role", "main", 1, "container"], [1, "jumbotron"], ["id", "navbarsExampleDefault", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Naipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 11, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.islogued);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_srvice_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/srvice.module */ "./src/app/services/srvice.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _pages_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page.module */ "./src/app/pages/page.module.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _pages_page_module__WEBPACK_IMPORTED_MODULE_8__["PageModule"],
            _services_srvice_module__WEBPACK_IMPORTED_MODULE_0__["SrviceModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
        _pages_page_module__WEBPACK_IMPORTED_MODULE_8__["PageModule"],
        _services_srvice_module__WEBPACK_IMPORTED_MODULE_0__["SrviceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                    _pages_page_module__WEBPACK_IMPORTED_MODULE_8__["PageModule"],
                    _services_srvice_module__WEBPACK_IMPORTED_MODULE_0__["SrviceModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/card-view-table/card-view-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/card-view-table/card-view-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardViewTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewTableComponent", function() { return CardViewTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardViewTableComponent {
    constructor() {
        this.playCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.card.card.type.toUpperCase() == "COPA")
            this.cardType = "./assets/images/icons/cup.png";
        else if (this.card.card.type.toUpperCase() == "ESPADA")
            this.cardType = "./assets/images/icons/sward.png";
        else if (this.card.card.type.toUpperCase() == "ORO")
            this.cardType = "./assets/images/icons/sun.jpg";
        else if (this.card.card.type.toUpperCase() == "BASTO")
            this.cardType = "./assets/images/icons/basto.png";
    }
}
CardViewTableComponent.ɵfac = function CardViewTableComponent_Factory(t) { return new (t || CardViewTableComponent)(); };
CardViewTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardViewTableComponent, selectors: [["app-card-view-table"]], inputs: { card: "card" }, outputs: { playCard: "playCard" }, decls: 11, vars: 4, consts: [[1, "card"], [1, "card-title"], [1, "card-body"], [1, "row"], [1, "col-8", "float-right", "card-subtitle", "mb-2", "text-muted"], [1, "col-12", 3, "src"]], template: function CardViewTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Jugador: ", ctx.card.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.card.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.card.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardType, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC12aWV3LXRhYmxlL2NhcmQtdmlldy10YWJsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardViewTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-view-table',
                templateUrl: './card-view-table.component.html',
                styleUrls: ['./card-view-table.component.css']
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/card-view/card-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-view/card-view.component.ts ***!
  \*************************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardViewComponent {
    constructor() {
        this.playCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.card.type.toUpperCase() == "COPA")
            this.cardType = "./assets/images/icons/cup.png";
        else if (this.card.type.toUpperCase() == "ESPADA")
            this.cardType = "./assets/images/icons/sward.png";
        else if (this.card.type.toUpperCase() == "ORO")
            this.cardType = "./assets/images/icons/sun.jpg";
        else if (this.card.type.toUpperCase() == "BASTO")
            this.cardType = "./assets/images/icons/basto.png";
    }
}
CardViewComponent.ɵfac = function CardViewComponent_Factory(t) { return new (t || CardViewComponent)(); };
CardViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardViewComponent, selectors: [["app-card-view"]], inputs: { card: "card" }, outputs: { playCard: "playCard" }, decls: 12, vars: 3, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "card-title"], [1, "col-8", "float-right", "card-subtitle", "mb-2", "text-muted"], [1, "col-12", 3, "src"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-share-square-o"]], template: function CardViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardViewComponent_Template_a_click_9_listener() { return ctx.playCard.emit(ctx.card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardType, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC12aWV3L2NhcmQtdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-view',
                templateUrl: './card-view.component.html',
                styleUrls: ['./card-view.component.css']
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/component.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-user/search-user.component */ "./src/app/components/search-user/search-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-view/card-view.component */ "./src/app/components/card-view/card-view.component.ts");
/* harmony import */ var _deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deal-cards/deal-cards.component */ "./src/app/components/deal-cards/deal-cards.component.ts");
/* harmony import */ var _card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-view-table/card-view-table.component */ "./src/app/components/card-view-table/card-view-table.component.ts");
/* harmony import */ var _deackof_cards_deackof_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deackof-cards/deackof-cards.component */ "./src/app/components/deackof-cards/deackof-cards.component.ts");









class ComponentModule {
}
ComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentModule });
ComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentModule_Factory(t) { return new (t || ComponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentModule, { declarations: [_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_2__["SearchUserComponent"],
        _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_4__["CardViewComponent"],
        _deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_5__["DealCardsComponent"],
        _card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_6__["CardViewTableComponent"],
        _deackof_cards_deackof_cards_component__WEBPACK_IMPORTED_MODULE_7__["DeackofCardsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_2__["SearchUserComponent"],
        _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_4__["CardViewComponent"],
        _deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_5__["DealCardsComponent"],
        _card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_6__["CardViewTableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_2__["SearchUserComponent"],
                    _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_4__["CardViewComponent"],
                    _deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_5__["DealCardsComponent"],
                    _card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_6__["CardViewTableComponent"],
                    _deackof_cards_deackof_cards_component__WEBPACK_IMPORTED_MODULE_7__["DeackofCardsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                exports: [
                    _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_2__["SearchUserComponent"],
                    _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_4__["CardViewComponent"],
                    _deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_5__["DealCardsComponent"],
                    _card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_6__["CardViewTableComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/deackof-cards/deackof-cards.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/deackof-cards/deackof-cards.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeackofCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeackofCardsComponent", function() { return DeackofCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DeackofCardsComponent {
    constructor() { }
    ngOnInit() {
    }
    takeaCard() {
    }
}
DeackofCardsComponent.ɵfac = function DeackofCardsComponent_Factory(t) { return new (t || DeackofCardsComponent)(); };
DeackofCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeackofCardsComponent, selectors: [["app-deackof-cards"]], decls: 6, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "btn", "btn-primary"]], template: function DeackofCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Robar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVhY2tvZi1jYXJkcy9kZWFja29mLWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeackofCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deackof-cards',
                templateUrl: './deackof-cards.component.html',
                styleUrls: ['./deackof-cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/deal-cards/deal-cards.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/deal-cards/deal-cards.component.ts ***!
  \***************************************************************/
/*! exports provided: DealCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealCardsComponent", function() { return DealCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class DealCardsComponent {
    constructor() {
        this.dealCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chkPutSample = false;
    }
    ngOnInit() {
    }
    sednData() {
        this.dealCard.emit({ PutSample: this.chkPutSample,
            countCardUsers: this.cardCount,
            countCardTable: this.cardCountTable });
    }
}
DealCardsComponent.ɵfac = function DealCardsComponent_Factory(t) { return new (t || DealCardsComponent)(); };
DealCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealCardsComponent, selectors: [["app-deal-cards"]], inputs: { idModal: "idModal" }, outputs: { dealCard: "dealCard" }, decls: 24, vars: 5, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", 3, "id"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "number", "aria-describedby", "emailHelp", "placeholder", "Ingrese la cantidad de cartas a repartir", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "number", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Ingrese la cantidad de cartas a poenr en la mesa", 1, "form-control", 3, "ngModel", "hidden", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function DealCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vas a repartir las cartas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cantidad de cartas a repartir a cada participante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DealCardsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.cardCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DealCardsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.chkPutSample = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quiero poner muestra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DealCardsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.cardCountTable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DealCardsComponent_Template_button_click_22_listener() { return ctx.sednData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Repartir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.idModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chkPutSample);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCountTable)("hidden", !ctx.chkPutSample);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVhbC1jYXJkcy9kZWFsLWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deal-cards',
                templateUrl: './deal-cards.component.html',
                styleUrls: ['./deal-cards.component.css']
            }]
    }], function () { return []; }, { idModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dealCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-user/search-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-user/search-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserComponent", function() { return SearchUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_game_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/game/game */ "./src/app/models/game/game.ts");
/* harmony import */ var _models_game_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/game/user */ "./src/app/models/game/user.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game/game.service */ "./src/app/services/game/game.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_game_card_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/game/card.service */ "./src/app/services/game/card.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_game_usergame_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/game/usergame.service */ "./src/app/services/game/usergame.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function SearchUserComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r43.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r43.name);
} }
class SearchUserComponent {
    constructor(userService, gameService, auth, cardService, router, userGameService) {
        this.userService = userService;
        this.gameService = gameService;
        this.auth = auth;
        this.cardService = cardService;
        this.router = router;
        this.userGameService = userGameService;
        this.messageError = "No pudimos hacer tu tarea.";
        this.hiddenError = true;
        this.typeDeck = 1;
    }
    ngOnInit() {
        this.cardService.getListDeckofCardsAsync().then((decks) => {
            this.deckCards = decks;
        });
    }
    joinGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hiddenError = true;
            if (this.nameGame == null || this.nameGame == "")
                return;
            let games = yield this.gameService.getGame(this.nameGame);
            if (games == null || games.length == 0)
                this.setErrorMessage("No tenemos ninguna partida en curso.", true);
            else if (games.find(x => x.owner.user.id == this.auth.getCurrentUser().id))
                this.setErrorMessage("Ya sos parte de esta partida, es mas sos el creador.", true);
            else {
                let game = games[0];
                let cuser = this.auth.getCurrentUser();
                let user = new _models_game_user__WEBPACK_IMPORTED_MODULE_3__["User"](cuser.id, cuser.name);
                yield this.gameService.addUsertoGame(game.id, user);
                this.router.navigate(['table'], { queryParams: { gameData: game } });
            }
        });
    }
    createGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hiddenError = true;
            if (this.nameGame == null || this.nameGame == "")
                return;
            let games = yield this.gameService.getGame(this.nameGame);
            if (games != null && games.length > 0 && games[0].id != this.auth.getCurrentUser().id)
                this.setErrorMessage("Este nombre de partida ya esta en uso.", true);
            else {
                let users = yield this.userGameService.getUsersGame(this.auth.getCurrentUser().id);
                if (users)
                    users.forEach(element => {
                        this.userGameService.deleteUserforGame(this.auth.getCurrentUser().id, element.user.id).then();
                    });
                yield this.gameService.deleteGame(this.auth.getCurrentUser().id);
                let game = this.getNewGame();
                let createNameGame = yield this.gameService.createNewGame(game);
                this.router.navigate(['table'], { queryParams: { game: game } });
            }
        });
    }
    getNewGame() {
        let cuser = this.auth.getCurrentUser();
        let user = new _models_game_user__WEBPACK_IMPORTED_MODULE_3__["User"](cuser.id, cuser.name);
        var response = new _models_game_game__WEBPACK_IMPORTED_MODULE_2__["Game"](this.nameGame, user, this.getCards(this.typeDeck).cardList);
        response.users = [this.auth.getCurrentUser().id];
        return response;
    }
    getCards(typeDeck) {
        let deck = this.deckCards.find(x => x.type == typeDeck);
        deck.cardList = this.shuffle(deck.cardList);
        return deck;
    }
    setErrorMessage(message, show) {
        this.hiddenError = !show;
        this.messageError = message;
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
SearchUserComponent.ɵfac = function SearchUserComponent_Factory(t) { return new (t || SearchUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_card_service__WEBPACK_IMPORTED_MODULE_7__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_usergame_service__WEBPACK_IMPORTED_MODULE_9__["UserGameService"])); };
SearchUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchUserComponent, selectors: [["app-search-user"]], decls: 29, vars: 5, consts: [[1, "form-group"], ["type", "text", "placeholder", "Nombre de la nueva partida", "aria-label", "Nombre de la nueva partida", "aria-describedby", "button-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "data-toggle", "modal", "data-target", "#typeCardsModal", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary", "pull-right", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", 3, "hidden"], ["tabindex", "-1", "role", "dialog", "id", "typeCardsModal", 1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function SearchUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUserComponent_Template_input_ngModelChange_2_listener($event) { return ctx.nameGame = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchUserComponent_Template_button_click_5_listener() { return ctx.joinGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Unirme al juego");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Vas a creaar una nueva partida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Selecciona el tipo de cartas a jugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUserComponent_Template_select_ngModelChange_22_listener($event) { return ctx.typeDeck = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SearchUserComponent_option_23_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchUserComponent_Template_button_click_27_listener() { return ctx.createGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nameGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.messageError, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeDeck);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.deckCards);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXVzZXIvc2VhcmNoLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search-user',
                templateUrl: './search-user.component.html',
                styleUrls: ['./search-user.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _services_game_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _services_game_card_service__WEBPACK_IMPORTED_MODULE_7__["CardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_game_usergame_service__WEBPACK_IMPORTED_MODULE_9__["UserGameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/authentication/userLogin.ts":
/*!****************************************************!*\
  !*** ./src/app/models/authentication/userLogin.ts ***!
  \****************************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
class UserLogin {
    constructor(idx, displayName) {
        this.id = idx;
        this.name = displayName;
    }
}


/***/ }),

/***/ "./src/app/models/game/cardTable.ts":
/*!******************************************!*\
  !*** ./src/app/models/game/cardTable.ts ***!
  \******************************************/
/*! exports provided: CardTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTable", function() { return CardTable; });
class CardTable {
    constructor(ccard, cuserName) {
        this.card = ccard;
        this.userName = cuserName;
    }
}


/***/ }),

/***/ "./src/app/models/game/game.ts":
/*!*************************************!*\
  !*** ./src/app/models/game/game.ts ***!
  \*************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor(gname, gowner, gcards) {
        this.users = [];
        this.name = gname;
        this.owner = gowner;
        this.deck = gcards;
        this.originalDeck = gcards;
        this.id = gowner.user.id;
    }
}


/***/ }),

/***/ "./src/app/models/game/table.ts":
/*!**************************************!*\
  !*** ./src/app/models/game/table.ts ***!
  \**************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
class Table {
}


/***/ }),

/***/ "./src/app/models/game/user.ts":
/*!*************************************!*\
  !*** ./src/app/models/game/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _authentication_userLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/userLogin */ "./src/app/models/authentication/userLogin.ts");

class User {
    constructor(idx, displayName) {
        this.user = new _authentication_userLogin__WEBPACK_IMPORTED_MODULE_0__["UserLogin"](idx, displayName);
    }
}


/***/ }),

/***/ "./src/app/pages/create-game/create-game.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/create-game/create-game.component.ts ***!
  \************************************************************/
/*! exports provided: CreateGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameComponent", function() { return CreateGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-user/search-user.component */ "./src/app/components/search-user/search-user.component.ts");



class CreateGameComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateGameComponent.ɵfac = function CreateGameComponent_Factory(t) { return new (t || CreateGameComponent)(); };
CreateGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateGameComponent, selectors: [["app-create-game"]], decls: 5, vars: 0, template: function CreateGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create una nueva partida o unite a una que ya existe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_1__["SearchUserComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1nYW1lL2NyZWF0ZS1nYW1lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-game',
                templateUrl: './create-game.component.html',
                styleUrls: ['./create-game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/join-game/join-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/join-game/join-game.component.ts ***!
  \********************************************************/
/*! exports provided: JoinGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function() { return JoinGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class JoinGameComponent {
    constructor() { }
    ngOnInit() {
    }
    joinGame() {
    }
}
JoinGameComponent.ɵfac = function JoinGameComponent_Factory(t) { return new (t || JoinGameComponent)(); };
JoinGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinGameComponent, selectors: [["app-join-game"]], decls: 12, vars: 2, consts: [[1, "form-group"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Nombre de la partida", "aria-label", "Nombre de la partida", "aria-describedby", "button-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", 3, "hidden"]], template: function JoinGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unirce a una partida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nameGame = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_Template_button_click_8_listener() { return ctx.joinGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " No fue posible unirce a la partida. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nameGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tZ2FtZS9qb2luLWdhbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-game',
                templateUrl: './join-game.component.html',
                styleUrls: ['./join-game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game/game.service */ "./src/app/services/game/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", user_r3.name, "!");
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar sesion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth, router, gameService) {
        this.auth = auth;
        this.router = router;
        this.gameService = gameService;
    }
    ngOnInit() {
        this.auth.getUser().subscribe((user) => {
            if (user) {
                //this.router.navigate(['newGame'])     
                let games = this.gameService.getGameforUserId(user.id);
                games.then((result) => {
                    if (result != null && result.length > 0)
                        this.router.navigate(['table'], { queryParams: { gameData: JSON.stringify(result[0]) } });
                    else
                        this.router.navigate(['menu']);
                });
            }
        });
    }
    login() {
        this.auth.login();
    }
    logout() {
        this.auth.logout();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 4, consts: [[1, "center"], [4, "ngIf", "ngIfElse"], ["showLogin", ""], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-google-plus-square"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.auth.getUser()))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".center[_ngcontent-%COMP%] {\r\n    margin: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIG1hcmdpbjogMjAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_game_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");



class MenuComponent {
    constructor(userService) {
        this.ntNewGame = false;
        this.users = userService.getObserverUsers();
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seleccione su menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    padding: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/page.module.ts":
/*!**************************************!*\
  !*** ./src/app/pages/page.module.ts ***!
  \**************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-game/create-game.component */ "./src/app/pages/create-game/create-game.component.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join-game/join-game.component */ "./src/app/pages/join-game/join-game.component.ts");










class PageModule {
}
PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageModule });
PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageModule_Factory(t) { return new (t || PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__["CreateGameComponent"],
        _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_8__["JoinGameComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_6__["CreateGameComponent"],
                    _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_8__["JoinGameComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_game_cardTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/game/cardTable */ "./src/app/models/game/cardTable.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_game_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game/card.service */ "./src/app/services/game/card.service.ts");
/* harmony import */ var _services_game_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game/table.service */ "./src/app/services/game/table.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/game/game.service */ "./src/app/services/game/game.service.ts");
/* harmony import */ var _services_game_usergame_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/game/usergame.service */ "./src/app/services/game/usergame.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/deal-cards/deal-cards.component */ "./src/app/components/deal-cards/deal-cards.component.ts");
/* harmony import */ var _components_card_view_card_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/card-view/card-view.component */ "./src/app/components/card-view/card-view.component.ts");
/* harmony import */ var _components_card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/card-view-table/card-view-table.component */ "./src/app/components/card-view-table/card-view-table.component.ts");














function TableComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_div_0_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.endGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Terminar juego");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_div_0_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.resetCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Resetear partida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Repartir cartas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_div_0_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.outGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Salir de la partida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableComponent_div_0_div_4_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_div_0_div_5_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableComponent_div_0_div_6_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TableComponent_div_0_div_7_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Estas jugando: ", ctx_r6.game.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.authService.getCurrentUser().id == ctx_r6.game.owner.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.authService.getCurrentUser().id == ctx_r6.game.owner.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.authService.getCurrentUser().id == ctx_r6.game.owner.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.authService.getCurrentUser().id != ctx_r6.game.owner.user.id);
} }
function TableComponent_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mis cartas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-card-view", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("playCard", function TableComponent_div_4_div_2_Template_app_card_view_playCard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.playCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("card", item_r29);
} }
function TableComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_div_4_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r8.mycards));
} }
function TableComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Esperando mis cartas... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_9_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mesa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "sample": a0, "current": a1 }; };
function TableComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-card-view-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("playCard", function TableComponent_div_9_div_3_Template_app_card_view_table_playCard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.playCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, item_r34.userName.toUpperCase() == "MUESTRA", item_r34.current));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("card", item_r34);
} }
function TableComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_div_9_h5_1_Template, 2, 0, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_div_9_div_3_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r11.tablecards));
} }
function TableComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Esperando cartas... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_h5_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cartas de los prticipantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r38.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r38.cardCount);
} }
function TableComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_div_15_div_2_Template, 6, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r15.usercards));
} }
function TableComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El juego no tiene otros participantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TableComponent {
    constructor(router, cardService, tableService, authService, gameService, userGameService, routerService) {
        this.router = router;
        this.cardService = cardService;
        this.tableService = tableService;
        this.authService = authService;
        this.gameService = gameService;
        this.userGameService = userGameService;
        this.routerService = routerService;
        this.hiddenError = false;
        this.messageError = "No pudimos hacer tu tarea.";
    }
    ngOnInit() {
        this.setErrorMessage("No pudimos hacer tu tarea.", false);
        this.gameService.getGameforUserId(this.authService.getCurrentUser().id).then((result) => {
            if (result && result.length > 0) {
                this.game = result[0];
                this.tablecards = this.tableService.getTableforGameId(this.game.id);
                this.mycards = this.tableService.getCardforUserforGameId(this.game.id, this.authService.getCurrentUser().id);
                this.usercards = this.userGameService.getChangeUsersGame(this.game.id, this.authService.getCurrentUser().id);
            }
        });
    }
    dealCards(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let index = 0;
            if (!data.countCardUsers || data.countCardUsers == 0) {
                this.setErrorMessage("Tenes que ingresar la cantidad de cartas a repartir.", true);
                return;
            }
            this.hiddenError = true;
            ;
            let deck = yield this.cardService.getDeckofCards(this.game.id);
            let users = yield this.userGameService.getUsersGame(this.game.id);
            if (users == null || users.length == 0)
                this.setErrorMessage("No tenes a quien repartir cartas.", true);
            else if (!users || deck.length < this.getNecesaryCard(data.countCardUsers, users.length))
                this.setErrorMessage("No te quedan suficientes cartas en el maso para repartir.", true);
            else {
                users.forEach(user => {
                    let card = deck.slice(index, index + data.countCardUsers);
                    this.cardService.sendUserCard(this.game.id, user.user.id, card).then();
                    this.cardService.deleteCardofDeckofCards(this.game.id, card).then();
                    index = index + data.countCardUsers;
                });
                if (data.PutSample) {
                    let count = !data.countCardTable || data.countCardTable == 0 ? 1 : data.countCardTable;
                    let cards = deck.slice(index, index + count);
                    this.putSampleprocess(cards, "Muestra");
                }
            }
        });
    }
    playCard(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.playCardprocess([card], this.authService.getCurrentUser().name);
        });
    }
    playCardprocess(card, userName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ctable = [];
            card.forEach(element => {
                ctable.push(new _models_game_cardTable__WEBPACK_IMPORTED_MODULE_2__["CardTable"](element, userName));
            });
            let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
            let deleteCard = this.userGameService.deleteCardofUser(this.game.id, this.authService.getCurrentUser().id, card);
            yield sendtCard.then(() => deleteCard.then());
            // .catch((error) =>  this.setErrorMessage("No pudimos hacer tu tarea.", true)))
            // .catch((error) => this.setErrorMessage("No pudimos hacer tu tarea.", true));
        });
    }
    putSampleprocess(card, userName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ctable = [];
            card.forEach(element => {
                ctable.push(new _models_game_cardTable__WEBPACK_IMPORTED_MODULE_2__["CardTable"](element, userName));
            });
            let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
            let deleteCard = this.cardService.deleteCardofDeckofCards(this.game.id, card).then();
            yield sendtCard.then(() => deleteCard.then());
            // .catch((error) =>  this.setErrorMessage("No pudimos hacer tu tarea.", true)))
            // .catch((error) => this.setErrorMessage("No pudimos hacer tu tarea.", true));
        });
    }
    resetCards() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setErrorMessage("No pudimos hacer tu tarea.", false);
            yield this.tableService.resetCardsinTable(this.game.id);
            let users = yield this.userGameService.getUsersGame(this.game.id);
            users.forEach(user => {
                this.userGameService.resetCardsforUser(this.game.id, user.user.id).then();
            });
            this.gameService.resetCardList(this.game.id).then();
        });
    }
    endGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setErrorMessage("No pudimos hacer tu tarea.", false);
            this.hiddenError = true;
            let users = yield this.userGameService.getUsersGame(this.authService.getCurrentUser().id);
            if (users)
                users.forEach(element => {
                    this.userGameService.deleteUserforGame(this.authService.getCurrentUser().id, element.user.id).then();
                });
            yield this.gameService.deleteGame(this.authService.getCurrentUser().id);
            this.routerService.navigate(['menu']);
        });
    }
    outGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userGameService.deleteUserforGame(this.game.id, this.authService.getCurrentUser().id);
            this.routerService.navigate(['menu']);
        });
    }
    getNecesaryCard(countCardforUser, usersLength) {
        return (countCardforUser * usersLength);
    }
    setErrorMessage(message, show) {
        this.hiddenError = !show;
        this.messageError = message;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_usergame_service__WEBPACK_IMPORTED_MODULE_8__["UserGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 21, vars: 24, consts: [["class", "container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", 3, "hidden"], ["class", "card-title", 4, "ngIf"], ["class", "container", 4, "ngIf", "ngIfElse"], ["showEmpty", ""], ["class", "container", "style", "background: beige;", 4, "ngIf", "ngIfElse"], ["showTableEmpty", ""], ["showUserEmpty", ""], [3, "idModal", "dealCard"], [1, "container"], [1, "row"], [1, "col-6"], ["class", "col-2", 4, "ngIf"], [1, "col-2"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#modalDeal", 1, "btn", "btn-dark"], [1, "card-title"], ["class", "col-md-2 col-4", "style", "margin: 10px;", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-4", 2, "margin", "10px"], [3, "card", "playCard"], ["role", "alert", 1, "alert", "alert-warning"], [1, "container", 2, "background", "beige"], ["class", "col-4 col-md-2", "style", "margin: 10px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2", 2, "margin", "10px", 3, "ngClass"], ["class", "col-12", "style", "margin: 10px;", 4, "ngFor", "ngForOf"], [1, "col-12", 2, "margin", "10px"], [1, "col-md-3", "col-sm-4"], [1, "col-md-9", "col-sm-8"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TableComponent_div_0_Template, 8, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_h5_3_Template, 2, 0, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableComponent_div_4_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TableComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TableComponent_div_9_Template, 5, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TableComponent_ng_template_12_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TableComponent_h5_14_Template, 2, 0, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TableComponent_div_15_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TableComponent_ng_template_18_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-deal-cards", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dealCard", function TableComponent_Template_app_deal_cards_dealCard_20_listener($event) { return ctx.dealCards($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        var tmp_4_0 = null;
        const currVal_4 = ctx.game && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx.mycards) && ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, ctx.mycards)) == null ? null : tmp_4_0.length) > 0;
        var tmp_6_0 = null;
        const currVal_6 = ctx.game && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, ctx.tablecards) && ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 18, ctx.tablecards)) == null ? null : tmp_6_0.length) > 0;
        var tmp_9_0 = null;
        const currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 20, ctx.usercards) && ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, ctx.usercards)) == null ? null : tmp_9_0.length) > 0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.messageError, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_4)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_6)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_9)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idModal", "modalDeal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_deal_cards_deal_cards_component__WEBPACK_IMPORTED_MODULE_10__["DealCardsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_card_view_card_view_component__WEBPACK_IMPORTED_MODULE_11__["CardViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _components_card_view_table_card_view_table_component__WEBPACK_IMPORTED_MODULE_12__["CardViewTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".sample[_ngcontent-%COMP%] {\r\n    opacity:0.5;\r\n}\r\n\r\n.current[_ngcontent-%COMP%] {\r\n    border: solid;\r\n    border-color: greenyellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbXBsZSB7XHJcbiAgICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuLmN1cnJlbnQge1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_game_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"] }, { type: _services_game_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] }, { type: _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _services_game_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"] }, { type: _services_game_usergame_service__WEBPACK_IMPORTED_MODULE_8__["UserGameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication/auth-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/authentication/auth.service.ts");




class AuthGuardService {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.auth.getUser().subscribe((user) => {
            this.user = user;
        });
    }
    canActivate(state) {
        if (this.user && this.user != null)
            return true;
        else {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _models_authentication_userLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/authentication/userLogin */ "./src/app/models/authentication/userLogin.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");







class AuthService {
    constructor(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getUser() {
        return this.userSubject.asObservable();
    }
    login() {
        this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).
            then((result) => {
            this.currentUser = new _models_authentication_userLogin__WEBPACK_IMPORTED_MODULE_0__["UserLogin"](result.user.uid, result.user.displayName);
            var userItems = this.firestore.collection('users');
            userItems.doc(this.currentUser.id).set(Object.assign({}, this.currentUser));
            this.userSubject.next(this.currentUser);
        });
    }
    logout() {
        this.auth.signOut().then((result) => {
            var userItems = this.firestore.collection('users');
            userItems.doc(this.currentUser.id).delete();
            this.currentUser = null;
            this.userSubject.next(this.currentUser);
        });
    }
    getCurrentUser() {
        return this.currentUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game/card.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/game/card.service.ts ***!
  \***********************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");







class CardService {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
    }
    getListDeckofCardsAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.firestore.collection('deck').get().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                return result.docs.map(map => map.data());
            })).toPromise();
        });
    }
    getDeckofCards(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).get()
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((game) => {
                if (game.exists)
                    return game.data().deck;
                else
                    return null;
            })).toPromise();
        });
    }
    sendUserCard(id, idUser, card) {
        return this.firestore.collection('games').doc(id).collection('users').
            doc(idUser).update({ cardList: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(...card) });
    }
    sendTableCard(id, card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).collection('tables').
                doc("one").update({ cardList: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(...JSON.parse(JSON.stringify(card))) });
        });
    }
    deleteCardofDeckofCards(id, card) {
        return this.firestore.collection('games').doc(id).
            update({ deck: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(...card) });
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game/game.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/game/game.service.ts ***!
  \***********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_gameModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/gameModel */ "./src/app/services/game/model/gameModel.ts");
/* harmony import */ var _models_game_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/game/table */ "./src/app/models/game/table.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");










class GameService {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
    }
    createNewGame(game) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userItems = this.firestore.collection('games');
            let model = new _model_gameModel__WEBPACK_IMPORTED_MODULE_4__["GameModel"](game.name, game.owner, game.deck);
            model.users = game.users;
            return yield userItems.doc(game.owner.user.id).set(JSON.parse(JSON.stringify(model))).then(() => {
                let table = new _models_game_table__WEBPACK_IMPORTED_MODULE_5__["Table"]();
                table.cardList = [];
                table.id = "one";
                this.firestore.collection('games').doc(game.owner.user.id).collection("tables").
                    doc("one").set(JSON.parse(JSON.stringify(table))).then();
                let user = game.owner;
                user.cardList = [];
                this.firestore.collection('games').doc(game.owner.user.id).collection("users").
                    doc(user.user.id).set(JSON.parse(JSON.stringify(user))).then();
                return game.name;
            }).catch((error) => {
                throw error;
            });
        });
    }
    addUsertoGame(gameid, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.firestore.collection('games').doc(gameid)
                .update({ users: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(user.user.id) }).then(() => {
                return this.firestore.collection('games').doc(gameid).collection("users").
                    doc(user.user.id).set(JSON.parse(JSON.stringify(user)));
            });
        });
    }
    getGame(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userItems = this.firestore.collection('games', ref => ref.where('name', '==', name));
            return userItems.get().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                if (result.empty)
                    return null;
                else
                    return result.docs.map(map => {
                        let g = map.data();
                        g.id = map.id;
                        return g;
                    });
            })).toPromise();
        });
    }
    getGameforId(id) {
        let result = this.firestore.collection('games').doc(id);
        return result.valueChanges();
    }
    getGameforUserId(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = this.firestore.collection('games', ref => ref.where('users', 'array-contains', id));
            //return result.valueChanges({ idField: 'id' });
            return yield result.get().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                return result.docs.map(map => {
                    let g = map.data();
                    g.id = map.id;
                    return g;
                });
            })).toPromise();
        });
    }
    deleteGame(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.firestore.collection('games').doc(id)
                .delete().then((result) => this.firestore.collection('games').doc(id).collection('tables').
                doc("one").delete().then()).catch();
        });
    }
    resetCardList(id) {
        return this.firestore.collection('games').doc(id).get().
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])((result) => {
            let deck = this.shuffle(result.data().originalDeck);
            return this.firestore.collection('games').doc(id).
                update({ deck: deck });
        })).toPromise();
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }, { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game/model/gameModel.ts":
/*!**************************************************!*\
  !*** ./src/app/services/game/model/gameModel.ts ***!
  \**************************************************/
/*! exports provided: GameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return GameModel; });
class GameModel {
    constructor(gname, gowner, gdeck) {
        this.users = [];
        this.name = gname;
        this.owner = gowner;
        this.deck = gdeck;
        this.originalDeck = gdeck;
    }
}


/***/ }),

/***/ "./src/app/services/game/table.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/game/table.service.ts ***!
  \************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");






class TableService {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
    }
    getTableforGameId(id) {
        let result = this.firestore.doc("games/" + id + "/tables/one");
        return result.valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((m) => {
            let result = m.cardList.reverse();
            let p = result.filter(x => x.userName.toUpperCase() != "MUESTRA");
            if (p && p.length > 0)
                result.filter(x => x.userName.toUpperCase() != "MUESTRA")[0].current = true;
            let response = result.filter(x => x.userName.toUpperCase() == "MUESTRA");
            response.push(...result.filter(x => x.userName.toUpperCase() != "MUESTRA"));
            return response;
        }));
    }
    getCardforUserforGameId(id, userId) {
        let result = this.firestore.doc("games/" + id + "/users/" + userId);
        return result.valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((m) => {
            if (m && m.cardList)
                return m.cardList;
            else
                return null;
        }));
    }
    resetCardsinTable(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).collection("tables").doc("one").
                update({ cardList: [] });
        });
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game/usergame.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/game/usergame.service.ts ***!
  \***************************************************/
/*! exports provided: UserGameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGameService", function() { return UserGameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");







class UserGameService {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
    }
    getUserforGameId(id, userId) {
        let result = this.firestore.doc("games/" + id + "/users/" + userId);
        return result.valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((m) => {
            var _a;
            return (_a = m.cardList) !== null && _a !== void 0 ? _a : null;
        }));
    }
    resetCardsforUser(id, iduser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).collection("users").
                doc(iduser).update({ cardList: [] });
        });
    }
    getUsersGame(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).collection("users").get()
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
                if (user.empty)
                    return null;
                else
                    return user.docs.map(map => map.data());
            })).toPromise();
        });
    }
    getChangeUsersGame(id, currentId) {
        return this.firestore.collection('games').doc(id).
            collection("users").
            valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            return user.filter(x => x.user.id != currentId).map(m => {
                return { cardCount: m.cardList ? m.cardList.length : 0, userName: m.user.name };
            });
        }));
    }
    deleteCardofUser(id, idUser, card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.firestore.collection('games').doc(id).collection("users").doc(idUser).
                update({ cardList: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(...card) });
        });
    }
    deleteUserforGame(id, idUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection('games').doc(id).collection('users').
                doc(idUser).delete();
        });
    }
}
UserGameService.ɵfac = function UserGameService_Factory(t) { return new (t || UserGameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
UserGameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserGameService, factory: UserGameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserGameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/srvice.module.ts":
/*!*******************************************!*\
  !*** ./src/app/services/srvice.module.ts ***!
  \*******************************************/
/*! exports provided: SrviceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrviceModule", function() { return SrviceModule; });
/* harmony import */ var _authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/auth-guard.service */ "./src/app/services/authentication/auth-guard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.service */ "./src/app/services/game/game.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _game_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/table.service */ "./src/app/services/game/table.service.ts");
/* harmony import */ var _game_usergame_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/usergame.service */ "./src/app/services/game/usergame.service.ts");









class SrviceModule {
}
SrviceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SrviceModule });
SrviceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SrviceModule_Factory(t) { return new (t || SrviceModule)(); }, providers: [
        _authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"],
        _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
        _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _game_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"],
        _game_usergame_service__WEBPACK_IMPORTED_MODULE_7__["UserGameService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SrviceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SrviceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [
                    _authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"],
                    _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
                    _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                    _game_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"],
                    _game_usergame_service__WEBPACK_IMPORTED_MODULE_7__["UserGameService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class UserService {
    constructor(firestore) {
        this.firestore = firestore;
        this.userSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getObserverUsers() {
        this.firestore.collection("users").valueChanges().subscribe((result) => {
            this.currentUsers = result;
            this.userSubject.next(this.currentUsers);
        });
        return this.userSubject.asObservable();
    }
    getUsersforName(name) {
        if (name == "")
            return;
        else {
            var users = this.currentUsers.filter(x => x.user.name.includes(name));
            this.userSubject.next(users);
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDmu6auDECXIbVmTfqp4AvLOInTvuRcOWE",
        authDomain: "pruebadeconcepto-1208.firebaseapp.com",
        databaseURL: "https://pruebadeconcepto-1208.firebaseio.com",
        projectId: "pruebadeconcepto-1208",
        storageBucket: "pruebadeconcepto-1208.appspot.com",
        messagingSenderId: "609815317337",
        appId: "1:609815317337:web:7b826f5b4cf447c98f5a48"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Solutions\Personal\Core\angular\cards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map