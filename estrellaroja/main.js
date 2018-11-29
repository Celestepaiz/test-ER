(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start your project here-->\n<div>\n  \t<div>\n\t  <router-outlet></router-outlet>\n\t</div>\n</div>\n<!-- /Start your project here-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _donde_llegas_donde_llegas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./donde-llegas/donde-llegas.component */ "./src/app/donde-llegas/donde-llegas.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _pago_pago_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pago/pago.component */ "./src/app/pago/pago.component.ts");
/* harmony import */ var _asientos_asientos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asientos/asientos.component */ "./src/app/asientos/asientos.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar.component */ "./src/app/components/navbar.component.ts");
/* harmony import */ var _components_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer.component */ "./src/app/components/footer.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _tourister_tourister_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tourister/tourister.component */ "./src/app/tourister/tourister.component.ts");
/* harmony import */ var _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./boleto/boleto.component */ "./src/app/boleto/boleto.component.ts");
/* harmony import */ var _rollo_rollo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rollo/rollo.component */ "./src/app/rollo/rollo.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _navbar_principal_navbar_principal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navbar-principal/navbar-principal.component */ "./src/app/navbar-principal/navbar-principal.component.ts");
/* harmony import */ var _navabar_tourister_navabar_tourister_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./navabar-tourister/navabar-tourister.component */ "./src/app/navabar-tourister/navabar-tourister.component.ts");
/* harmony import */ var _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./detalles/detalles.component */ "./src/app/detalles/detalles.component.ts");
/* harmony import */ var _footer_tourister_footer_tourister_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer-tourister/footer-tourister.component */ "./src/app/footer-tourister/footer-tourister.component.ts");
/* harmony import */ var _pago_regreso_pago_regreso_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pago-regreso/pago-regreso.component */ "./src/app/pago-regreso/pago-regreso.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _donde_llegas_donde_llegas_component__WEBPACK_IMPORTED_MODULE_8__["DondeLlegasComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _asientos_asientos_component__WEBPACK_IMPORTED_MODULE_11__["AsientosComponent"],
                _pago_pago_component__WEBPACK_IMPORTED_MODULE_10__["PagoComponent"],
                _components_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _components_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"],
                _tourister_tourister_component__WEBPACK_IMPORTED_MODULE_19__["TouristerComponent"],
                _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_20__["BoletoComponent"],
                _rollo_rollo_component__WEBPACK_IMPORTED_MODULE_21__["RolloComponent"],
                _navbar_principal_navbar_principal_component__WEBPACK_IMPORTED_MODULE_24__["NavbarPrincipalComponent"],
                _navabar_tourister_navabar_tourister_component__WEBPACK_IMPORTED_MODULE_25__["NavabarTouristerComponent"],
                _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_26__["DetallesComponent"],
                _footer_tourister_footer_tourister_component__WEBPACK_IMPORTED_MODULE_27__["FooterTouristerComponent"],
                _pago_regreso_pago_regreso_component__WEBPACK_IMPORTED_MODULE_28__["PagoRegresoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__["CollapseModule"].forRoot()
            ],
            providers: [_app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _donde_llegas_donde_llegas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donde-llegas/donde-llegas.component */ "./src/app/donde-llegas/donde-llegas.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _pago_pago_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pago/pago.component */ "./src/app/pago/pago.component.ts");
/* harmony import */ var _asientos_asientos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asientos/asientos.component */ "./src/app/asientos/asientos.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _tourister_tourister_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tourister/tourister.component */ "./src/app/tourister/tourister.component.ts");
/* harmony import */ var _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boleto/boleto.component */ "./src/app/boleto/boleto.component.ts");
/* harmony import */ var _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detalles/detalles.component */ "./src/app/detalles/detalles.component.ts");
/* harmony import */ var _rollo_rollo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rollo/rollo.component */ "./src/app/rollo/rollo.component.ts");
/* harmony import */ var _pago_regreso_pago_regreso_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pago-regreso/pago-regreso.component */ "./src/app/pago-regreso/pago-regreso.component.ts");

//Aqui importaremos las rutas de los componentes











//Estas son las rutas de nuestro proyecto que agregaremos poco a poco
var appRoutes = [
    { path: 'home', component: _components_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'donde-sales', component: _donde_llegas_donde_llegas_component__WEBPACK_IMPORTED_MODULE_2__["DondeLlegasComponent"] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'asientos', component: _asientos_asientos_component__WEBPACK_IMPORTED_MODULE_5__["AsientosComponent"] },
    { path: 'pago', component: _pago_pago_component__WEBPACK_IMPORTED_MODULE_4__["PagoComponent"] },
    { path: 'tourister', component: _tourister_tourister_component__WEBPACK_IMPORTED_MODULE_7__["TouristerComponent"] },
    { path: 'landing-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: 'boleto', component: _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_8__["BoletoComponent"] },
    { path: 'detalles', component: _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_9__["DetallesComponent"] },
    { path: 'rollo', component: _rollo_rollo_component__WEBPACK_IMPORTED_MODULE_10__["RolloComponent"] },
    { path: 'pagoIdaVuelta', component: _pago_regreso_pago_regreso_component__WEBPACK_IMPORTED_MODULE_11__["PagoRegresoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'landing-page' }
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/asientos/asientos.component.css":
/*!*************************************************!*\
  !*** ./src/app/asientos/asientos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/asientos/asientos.component.html":
/*!**************************************************!*\
  !*** ./src/app/asientos/asientos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--navbar-->\n<!--Ends navbar-->\n<app-navbar></app-navbar>\n<div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n        <br><br>\n        <button (click)='vuelveConParametros()' type=\"button\" class=\"btn btn-primary btn-lg\">Regresar</button>\n        <br><br><br>\n    </div>\n\n    <div class=\"col-md-6 text-center\">\n        <br><br>\n        <button [routerLink]=\"['/donde-llegas']\" type=\"button\" class=\"btn btn-danger btn-lg\">Salir</button>\n        <br><br><br>\n    </div>\n</div>\n\n<div class=\"text-center\">\n  <h1>\n    Selecciona tu lugar\n  </h1>\n</div>\n\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <h2>Guía de Selección:</h2>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-1 offset-md-1 text-center\">\n      <img src=\"assets/img/camion-asientoB-H.png\" class=\"img-thumbnail rotateimg90 quitar-borde\" alt=\"\">\n    </div>\n    <div class=\"col-md-2 text-left\">\n      <h5 class=\"alinear-texto-asientos-guia\">Libre</h5>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <img src=\"assets/img/camion-asientoR-H.png\" class=\"img-thumbnail rotateimg90 quitar-borde\" alt=\"\">\n    </div>\n    <div class=\"col-md-3 text-left\">\n      <h5 class=\"alinear-texto-asientos-guia\">Ocupado</h5>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <img src=\"assets/img/camion-asientoA-H.png\" class=\"img-thumbnail rotateimg90 quitar-borde\" alt=\"\">      \n    </div>\n    <div class=\"col-md-2 text-left\">\n      <h5 class=\"alinear-texto-asientos-guia\">Seleccionado</h5>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 bus-vertical\">\n      <br><br><br><br><br><br><br><br><br>\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">                \n            <label (click)=\"bloqueaAsiento(1)\" [ngClass]=\"status1 === true ? 'asiento-ocupado' : 'asiento'\">1</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(2)\" [ngClass]=\"status2 === true ? 'asiento-ocupado' : 'asiento'\">2</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(3)\" [ngClass]=\"status3 === true ? 'asiento-ocupado' : 'asiento'\">3</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(4)\" [ngClass]=\"status4 === true ? 'asiento-ocupado' : 'asiento'\">4</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(5)\" [ngClass]=\"status5 === true ? 'asiento-ocupado' : 'asiento'\">5</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(6)\" [ngClass]=\"status6 === true ? 'asiento-ocupado' : 'asiento'\">6</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(7)\" [ngClass]=\"status7 === true ? 'asiento-ocupado' : 'asiento'\">7</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(8)\" [ngClass]=\"status8 === true ? 'asiento-ocupado' : 'asiento'\">8</label>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(9)\" [ngClass]=\"status9 === true ? 'asiento-ocupado' : 'asiento'\">9</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(10)\" [ngClass]=\"status10 === true ? 'asiento-ocupado' : 'asiento'\">10</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(11)\" [ngClass]=\"status11 === true ? 'asiento-ocupado' : 'asiento'\">11</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(12)\" [ngClass]=\"status12 === true ? 'asiento-ocupado' : 'asiento'\">12</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(13)\" [ngClass]=\"status13 === true ? 'asiento-ocupado' : 'asiento'\">13</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(14)\" [ngClass]=\"status14 === true ? 'asiento-ocupado' : 'asiento'\">14</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(15)\" [ngClass]=\"status15 === true ? 'asiento-ocupado' : 'asiento'\">15</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(16)\" [ngClass]=\"status16 === true ? 'asiento-ocupado' : 'asiento'\">16</label>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(17)\" [ngClass]=\"status17 === true ? 'asiento-ocupado' : 'asiento'\">17</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(18)\" [ngClass]=\"status18 === true ? 'asiento-ocupado' : 'asiento'\">18</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(19)\" [ngClass]=\"status19 === true ? 'asiento-ocupado' : 'asiento'\">19</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(20)\" [ngClass]=\"status20 === true ? 'asiento-ocupado' : 'asiento'\">20</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(21)\" [ngClass]=\"status21 === true ? 'asiento-ocupado' : 'asiento'\">21</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(22)\" [ngClass]=\"status22 === true ? 'asiento-ocupado' : 'asiento'\">22</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(23)\" [ngClass]=\"status23 === true ? 'asiento-ocupado' : 'asiento'\">23</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(24)\" [ngClass]=\"status24 === true ? 'asiento-ocupado' : 'asiento'\">24</label>\n        </div>\n      </div>\n      <br><br>\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(25)\" [ngClass]=\"status25 === true ? 'asiento-ocupado' : 'asiento'\">25</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(26)\" [ngClass]=\"status26 === true ? 'asiento-ocupado' : 'asiento'\">26</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(27)\" [ngClass]=\"status27 === true ? 'asiento-ocupado' : 'asiento'\">27</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(28)\" [ngClass]=\"status28 === true ? 'asiento-ocupado' : 'asiento'\">28</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(29)\" [ngClass]=\"status29 === true ? 'asiento-ocupado' : 'asiento'\">29</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(30)\" [ngClass]=\"status30 === true ? 'asiento-ocupado' : 'asiento'\">30</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(31)\" [ngClass]=\"status31 === true ? 'asiento-ocupado' : 'asiento'\">31</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(32)\" [ngClass]=\"status32 === true ? 'asiento-ocupado' : 'asiento'\">32</label>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(33)\" [ngClass]=\"status33 === true ? 'asiento-ocupado' : 'asiento'\">33</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(34)\" [ngClass]=\"status34 === true ? 'asiento-ocupado' : 'asiento'\">34</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(35)\" [ngClass]=\"status35 === true ? 'asiento-ocupado' : 'asiento'\">35</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(36)\" [ngClass]=\"status36 === true ? 'asiento-ocupado' : 'asiento'\">36</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-1 offset-md-2 col-lg-1 offset-lg-3 first-seats\">\n            <label (click)=\"bloqueaAsiento(37)\" [ngClass]=\"status37 === true ? 'asiento-ocupado' : 'asiento'\">37</label>\n        </div>\n        <div class=\"col-md-1 second-seats\">\n            <label (click)=\"bloqueaAsiento(38)\" [ngClass]=\"status38 === true ? 'asiento-ocupado' : 'asiento'\">38</label>\n        </div>\n        <div class=\"col-md-1 third-seats\">\n            <label (click)=\"bloqueaAsiento(39)\" [ngClass]=\"status39 === true ? 'asiento-ocupado' : 'asiento'\">39</label>\n        </div>\n        <div class=\"col-md-1 fourth-seats\">\n            <label (click)=\"bloqueaAsiento(40)\" [ngClass]=\"status40 === true ? 'asiento-ocupado' : 'asiento'\">40</label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h4 class=\"text-center\">Estás eligiendo el asiento:</h4>\n      <h4 class=\"text-center\">#</h4>\n    </div>\n      <div class=\"col-md-12 text-center\">\n        <button (click)=\"sendAsientos()\" type=\"button\" class=\"btn btn-primary\">Siguiente</button>\n      </div>\n  </div>\n  <br><br>\n\n  <div class=\"modal fade\" #modal>\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                    <header class=\"font-12 bold\">Modal Header</header>\n                </div>\n                <div class=\"modal-body\">\n                    Your Content ...\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">close</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n</div>\n<!--footer-->\n  <app-footer></app-footer>\n<!--Ends navbar-->\n"

/***/ }),

/***/ "./src/app/asientos/asientos.component.ts":
/*!************************************************!*\
  !*** ./src/app/asientos/asientos.component.ts ***!
  \************************************************/
/*! exports provided: AsientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsientosComponent", function() { return AsientosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/totem-apis.service */ "./src/app/services/totem-apis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsientosComponent = /** @class */ (function () {
    function AsientosComponent(_route, _router, _totemService) {
        this._route = _route;
        this._router = _router;
        this._totemService = _totemService;
    }
    AsientosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = false;
        this.contador = 0;
        this.banderaAsiento = false;
        this.identity = this._totemService.getIdentity();
        this._route.queryParams.subscribe(function (params) {
            _this.salida = params['salida'] || null;
            _this.llegada = params['llegada'] || null;
            _this.fechaSalida = params['fech'] || null;
            _this.claveViaje = params['clave'] || null;
            _this.tarifa = params['tarifa'] || null;
            _this.asientosAdulto = params['asientosAdulto'] || null;
            _this.asientosNinio = params['asientosNinio'] || null;
            _this.asientosInapam = params['asientosInapam'] || null;
        });
    };
    AsientosComponent.prototype.sendAsientos = function () {
        var myFecha = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
        this._router.navigate(['pago'], {
            queryParams: {
                salida: this.salida,
                llegada: this.llegada,
                fech: myFecha,
                clave: this.claveViaje,
                tarifa: this.tarifa,
                asientosAdulto: this.asientosAdulto,
                asientosNinio: this.asientosNinio,
                asientosInapam: this.asientosInapam
            }
        });
    };
    AsientosComponent.prototype.vuelveConParametros = function () {
        this._router.navigate(['list'], {
            queryParams: {
                salida: this.salida,
                llegada: this.llegada,
                fech: this.fechaSalida,
                asientosAdulto: this.asientosAdulto,
                asientosNinio: this.asientosNinio,
                asientosInapam: this.asientosInapam
            }
        });
    };
    AsientosComponent.prototype.bloqueaAsiento = function (numeroAsiento) {
        if (numeroAsiento == 1)
            if (this.status1 == false)
                this.status1 = true;
            else
                this.status1 = false;
        if (numeroAsiento == 2)
            if (this.status2 == false)
                this.status2 = true;
            else
                this.status2 = false;
        if (numeroAsiento == 3)
            if (this.status3 == false)
                this.status3 = true;
            else
                this.status3 = false;
        if (numeroAsiento == 4)
            if (this.status4 == false)
                this.status4 = true;
            else
                this.status4 = false;
        if (numeroAsiento == 5)
            if (this.status5 == false)
                this.status5 = true;
            else
                this.status5 = false;
        if (numeroAsiento == 6)
            if (this.status6 == false)
                this.status6 = true;
            else
                this.status6 = false;
        if (numeroAsiento == 7)
            if (this.status7 == false)
                this.status7 = true;
            else
                this.status7 = false;
        if (numeroAsiento == 8)
            if (this.status8 == false)
                this.status8 = true;
            else
                this.status8 = false;
        if (numeroAsiento == 9)
            if (this.status9 == false)
                this.status9 = true;
            else
                this.status9 = false;
        if (numeroAsiento == 10)
            if (this.status10 == false)
                this.status10 = true;
            else
                this.status10 = false;
        if (numeroAsiento == 11)
            if (this.status11 == false)
                this.status11 = true;
            else
                this.status11 = false;
        if (numeroAsiento == 12)
            if (this.status12 == false)
                this.status12 = true;
            else
                this.status12 = false;
        if (numeroAsiento == 13)
            if (this.status13 == false)
                this.status13 = true;
            else
                this.status13 = false;
        if (numeroAsiento == 14)
            if (this.status14 == false)
                this.status14 = true;
            else
                this.status14 = false;
        if (numeroAsiento == 15)
            if (this.status15 == false)
                this.status15 = true;
            else
                this.status15 = false;
        if (numeroAsiento == 16)
            if (this.status16 == false)
                this.status16 = true;
            else
                this.status16 = false;
        if (numeroAsiento == 17)
            if (this.status17 == false)
                this.status17 = true;
            else
                this.status17 = false;
        if (numeroAsiento == 18)
            if (this.status18 == false)
                this.status18 = true;
            else
                this.status18 = false;
        if (numeroAsiento == 19)
            if (this.status19 == false)
                this.status19 = true;
            else
                this.status19 = false;
        if (numeroAsiento == 20)
            if (this.status20 == false)
                this.status20 = true;
            else
                this.status20 = false;
        if (numeroAsiento == 21)
            if (this.status21 == false)
                this.status21 = true;
            else
                this.status21 = false;
        if (numeroAsiento == 22)
            if (this.status22 == false)
                this.status22 = true;
            else
                this.status22 = false;
        if (numeroAsiento == 23)
            if (this.status23 == false)
                this.status23 = true;
            else
                this.status23 = false;
        if (numeroAsiento == 24)
            if (this.status24 == false)
                this.status24 = true;
            else
                this.status24 = false;
        if (numeroAsiento == 25)
            if (this.status25 == false)
                this.status25 = true;
            else
                this.status25 = false;
        if (numeroAsiento == 26)
            if (this.status26 == false)
                this.status26 = true;
            else
                this.status26 = false;
        if (numeroAsiento == 27)
            if (this.status27 == false)
                this.status27 = true;
            else
                this.status27 = false;
        if (numeroAsiento == 28)
            if (this.status28 == false)
                this.status28 = true;
            else
                this.status28 = false;
        if (numeroAsiento == 29)
            if (this.status29 == false)
                this.status29 = true;
            else
                this.status29 = false;
        if (numeroAsiento == 30)
            if (this.status30 == false)
                this.status30 = true;
            else
                this.status30 = false;
        if (numeroAsiento == 31)
            if (this.status31 == false)
                this.status31 = true;
            else
                this.status31 = false;
        if (numeroAsiento == 32)
            if (this.status32 == false)
                this.status32 = true;
            else
                this.status32 = false;
        if (numeroAsiento == 33)
            if (this.status33 == false)
                this.status33 = true;
            else
                this.status33 = false;
        if (numeroAsiento == 34)
            if (this.status34 == false)
                this.status34 = true;
            else
                this.status34 = false;
        if (numeroAsiento == 35)
            if (this.status35 == false)
                this.status35 = true;
            else
                this.status35 = false;
        if (numeroAsiento == 36)
            if (this.status36 == false)
                this.status36 = true;
            else
                this.status36 = false;
        if (numeroAsiento == 37)
            if (this.status37 == false)
                this.status37 = true;
            else
                this.status37 = false;
        if (numeroAsiento == 38)
            if (this.status38 == false)
                this.status38 = true;
            else
                this.status38 = false;
        if (numeroAsiento == 39)
            if (this.status39 == false)
                this.status39 = true;
            else
                this.status39 = false;
        if (numeroAsiento == 40)
            if (this.status40 == false)
                this.status40 = true;
            else
                this.status40 = false;
    };
    AsientosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asientos',
            template: __webpack_require__(/*! ./asientos.component.html */ "./src/app/asientos/asientos.component.html"),
            styles: [__webpack_require__(/*! ./asientos.component.css */ "./src/app/asientos/asientos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__["TotemApisService"]])
    ], AsientosComponent);
    return AsientosComponent;
}());



/***/ }),

/***/ "./src/app/boleto/boleto.component.css":
/*!*********************************************!*\
  !*** ./src/app/boleto/boleto.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\tbody {\n\t\t\tbackground: #eee;\n\t\t}\n\t\t.event{\n\t\t\tborder-radius: 4px;\n\t\t\twidth: 400px;\n\t\t\theight: 150px;\n            margin: 40px auto 0;\n\t\t}\n\t\t.event-side{\n\t\t\tpadding: 10px;\n            border-radius: 4px;\n            border: 20px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: calc(15% - 1px);\n\t\t\tbox-shadow: 1px 2px 2px -1px rgb(90, 88, 88);\n\t\t\tbackground: white;\n\t\t\tz-index: 1000;\n\t\t\tborder-bottom-right-radius: 10px;\n\t\t\tborder-top-right-radius: 10px;\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tfont-size: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n\t\t.cut-out {\n\t\t\tborder-radius: 1000px;\n\t\t\twidth: 100%;\n\t\t\theight: 40%;\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: -60%;\n\t\t\ttop: 25%;\n\t\t\tbackground: white;\n\t\t\tbox-shadow: inset -1px 2px 2px -1px #888\n\t\t}\n\t\t.event-body {\n\t\t\tborder-radius: 4px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: 85%;\n\t\t\tbox-shadow: 0 2px 2px -1px #888;\n\t\t\tbackground:white;\n\t\t\tpadding-right: 10px;\n\t\t\tborder-bottom-left-radius: 10px;\n\t\t\tborder-top-left-radius: 10px; \n        }\n\t\t.boleto {\n            margin: 5px;\n        }\n\t\t.origen-destino {\n            text-align: center!important;\n            margin-bottom: 5px;\n        }\n\t\t.tarifa-asiento {\n            text-align: center!important;\n        }\n\t\t.fecha {\n            color: rgb(153, 4, 4);\n            font-weight: bold;\n        }\n\t\t.cliente {\n            color: rgb(54, 53, 53);\n            font-weight: bold;\n        }\n\t\t.txt-blue {\n            color: #148abd;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\t\t.dark-blue {\n            color: #002958;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\t\t.black {\n            font-size: 18px;\n            color: #000;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n       "

/***/ }),

/***/ "./src/app/boleto/boleto.component.html":
/*!**********************************************!*\
  !*** ./src/app/boleto/boleto.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n      <button  [routerLink]=\"['/boletos']\" type=\"button\" class=\"btn btn-primary btn-lg\">Regresar</button>\n      <br><br><br>\n    </div>\n\n    <div class=\"col-md-6 text-center\">\n      <button [routerLink]=\"['/donde-llegas']\" type=\"button\" class=\"btn btn-danger btn-lg\">Salir</button>\n      <br><br><br>\n    </div>\n  </div>\n  <!--\n  <div *ngIf=\"!loading\" class=\"card text-center\">\n    <div class=\"card-header\">\n      Estrella Roja\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <br><br><br><br>\n          <h1 class=\"display-4\">Preparando tu viaje</h1>\n          <div class=\"lds-hourglass\"></div>\n          <p class=\"h5\">Cargando boletos</p>\n          <br><br><br><br>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Aeropuerto\n    </div>\n  </div>-->\n  <div class=\"card text-center\">\n    <div class=\"card-header\">\n      Estrella Roja\n    </div>\n    <div class=\"event\">\n      <div class=\"event-side\">\n        <div class=\"cut-out\"></div>\n      </div>\n      <div class=\"event-body\">\n        <div class=\"boleto black\">\n          Boleto Sencillo\n        </div>\n        <div class=\"fecha\">\n          31 NOV 2018\n        </div>\n        <div class=\"cliente\">\n          Celeste Paiz\n        </div>\n        <div class=\"origen-destino txt-blue\">\n          PUE - AEROPUERTO\n        </div>\n        <div class=\"d-flex justify-content-around\">\n          <div class=\"tarifa-asiento d-flex justify-content-around\">\n            <h6 class=\"dark-blue\">Tarifa:</h6>\n            <h6>$300</h6>\n          </div>\n          <div class=\"tarifa-asiento d-flex justify-content-around\">\n            <h6 class=\"dark-blue\">Asiento:</h6>\n            <h6>20</h6>\n          </div>\n        </div>\n        <div class=\"back\"></div>\n      </div>\n    </div>\n    <br><br><br>\n    <div class=\"card-footer text-muted\">\n      Aeropuerto\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/boleto/boleto.component.ts":
/*!********************************************!*\
  !*** ./src/app/boleto/boleto.component.ts ***!
  \********************************************/
/*! exports provided: BoletoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoComponent", function() { return BoletoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoletoComponent = /** @class */ (function () {
    function BoletoComponent() {
    }
    BoletoComponent.prototype.ngOnInit = function () {
    };
    BoletoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boleto',
            template: __webpack_require__(/*! ./boleto.component.html */ "./src/app/boleto/boleto.component.html"),
            styles: [__webpack_require__(/*! ./boleto.component.css */ "./src/app/boleto/boleto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoletoComponent);
    return BoletoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/footer.component.ts ***!
  \************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.titulo = 'Footer';
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.logout = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ../views/footer.html */ "./src/app/views/footer.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.titulo = 'Home';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home.component cargado');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ../views/home.html */ "./src/app/views/home.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.titulo = 'Nav Bar';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ../views/navbar.html */ "./src/app/views/navbar.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/detalles/detalles.component.css":
/*!*************************************************!*\
  !*** ./src/app/detalles/detalles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: #c0392b;\n  font-family: Raleway;\n  color: white;\n  letter-spacing: 1px;\n}\n\n.card-form{\n  width: 500px;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);\n}\n\n.title{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n    background: #1d4ab8 !important;\n    border-radius: 10px 10px 0 0;\n  }\n\n.form-body{\n    padding: 10px;\n  }\n\n.row{\n      display: flex;\n      justify-content: space-around;\n      padding: 10px;\n    }\n\n.input{\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        width: 100%;\n        margin: 0 15px;\n        height: 35px;\n        padding: 5px 15px;\n        border-radius: 20px;\n        outline: none;\n        border: none;\n        background: #e8ebed;\n        color: #576366;\n        font-size: 14px;\n      }\n\n.rule{\n    height: 2px;\n    background: #e8ebed;\n    margin: 0px 35px;\n  }\n\n.form-footer{\n    margin: 0 25px 15px 25px;\n    padding: 15px 10px;}\n\n.button{\n    width: 40%;\n    display: inline-block;\n    padding: 0.5em 2.5em;\n    border-radius: 20px;\n    margin: 0 auto;\n    font-size: 12pt;\n    font-size: 1rem;\n    font-weight: 700;\n    text-align: center;\n    text-transform: uppercase;\n    background-color: transparent;\n    transition: background-color .2s;\n    color: #fff;\n    background-color: #e8132f;\n }\n\n.text{\n    margin-top: 0px;\n    margin-bottom: 0px;\n    font-size: 18pt;\n    font-size: 1.5rem;\n    margin-bottom: 2px;\n    color: #1aa2de;\n }\n\n.description{\n  color: #595959;\n  font-weight: bold;\n  padding-left: 0px;\n  margin-left: 0px;\n }\n   \n\n"

/***/ }),

/***/ "./src/app/detalles/detalles.component.html":
/*!**************************************************!*\
  !*** ./src/app/detalles/detalles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n    <div class=\"card-form\">\n        <form class=\"detalles\">\n          <div class=\"title\">Detalles de compra</div>\n          <div class=\"d-flex justify-content-around\">\n              <div class=\"text\">Adulto $375</div>\n              <div class=\"text\">Niño $365</div>\n          </div>\n          <div class=\"d-flex justify-content-around\">\n            <div class=\"description\">De 13 a 59 años de edad</div>\n            <div class=\"description\">De 90 a 120 cm de estatura</div>\n          </div>\n          <div class=\"form-body\">\n            <div class=\"row\">\n              <input class=\"input\" placeholder=\"Email\">\n              <br>\n              <input class=\"input\" placeholder=\"Nombre completo\">\n            </div>\n            <div class=\"d-flex justify-content-left row\">\n              <input class=\"input\" placeholder=\"Total a pagar\">\n            </div>\n          </div>\n          <div class=\"rule\"></div>\n          <div class=\"form-footer\">\n          <input class=\"button button-flat primary\" name=\"comprar\" value=\"pagar\">\n          </div>\n        </form>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/detalles/detalles.component.ts":
/*!************************************************!*\
  !*** ./src/app/detalles/detalles.component.ts ***!
  \************************************************/
/*! exports provided: DetallesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesComponent", function() { return DetallesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetallesComponent = /** @class */ (function () {
    function DetallesComponent() {
    }
    DetallesComponent.prototype.ngOnInit = function () {
    };
    DetallesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalles',
            template: __webpack_require__(/*! ./detalles.component.html */ "./src/app/detalles/detalles.component.html"),
            styles: [__webpack_require__(/*! ./detalles.component.css */ "./src/app/detalles/detalles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetallesComponent);
    return DetallesComponent;
}());



/***/ }),

/***/ "./src/app/donde-llegas/donde-llegas.component.css":
/*!*********************************************************!*\
  !*** ./src/app/donde-llegas/donde-llegas.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Seccipn de carga*/\n.loading-container2 {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  background-color: #000000;\n  z-index: 9999999;\n}\n.quitar-padding{\n  padding-left: unset !important;\n}\n.loading-container2 .loading-logo {\n  position: absolute;\n  top: 25vh;\n  left: 50vh;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.loading-container2 .pulse {\n  border: 3px solid #148abd;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: pulsate s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation: pulsate 2s ease-out;\n          animation: pulsate 2s ease-out;\n  animation-iteration-count: infinite;\n  border-radius: 30px;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n}\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0.1, 0.1);\n            transform: scale(0.1, 0.1);\n    opacity: 0.0;\n  }\n  50% {\n    opacity: 1.0;\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n    opacity: 0.0;\n  }\n}\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0.1, 0.1);\n            transform: scale(0.1, 0.1);\n    opacity: 0.0;\n  }\n  50% {\n    opacity: 1.0;\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n    opacity: 0.0;\n  }\n}\n/*Fondo de rayas*/\n.fondo1{\n  margin-left: -15px;\n  margin-right: -15px;\n  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/ParallaxBack.png);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n/* Clase que llama al fondo de la izquierda*/\n.portadaIzquierda {\n  position: relative;\n  display: inline-block;\n  max-width: 1000px;\n  height: 100vh;\n  min-width: 50vw;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 0.2s linear;\n  overflow: hidden;\n  background-image: url('imagen-portada2.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: right bottom;\n  vertical-align: bottom;\n  font-size: 50px;\n}\n/* Clase que llama al fondo derecho*/\n.portadaDerecha {\n  position: relative;\n  display: inline-block;\n  max-width: 1000px;\n  height: 100vh;\n  min-width: 50vw;\n  padding-left: 0px;\n  padding-right: -10px;\n  transition: all 0.2s linear;\n  overflow: hidden;\n  background-image: url('imagen-portada.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: left bottom;\n  vertical-align: bottom;\n  font-size: 50px;\n\n}\n.btn1 {\n  position: relative;\n  border: none;\n  background: rgba(57, 177, 228, 0.65);\n  color: #f2f2f2;\n  padding: 0.5em;\n  font-size: 2.8vw;\n  letter-spacing: 2px;\n  border-radius: 7vw;\n  box-sizing: border-box;\n  transition: all 500ms ease;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50vh;\n  font-family: sans-serif;\n  overflow: hidden;\n\n}\n.btn1:hover {\n  background: rgba(0,0,0,0);\n  color: #f2f2f2;\n  box-shadow: inset 0 0 0 3px #3a7999;\n  cursor: pointer;\n}\n.titulo{\n  font-size: 65px;\n  letter-spacing: 2px;\n  text-align: center;\n  margin-top: -83vh;\n  margin-bottom: 63vh;\n  font-family: sans-serif bold;\n  overflow: hidden;\n}\n.titulo h1{\n  color: white;\n  letter-spacing: 0.5em;\n  font-size: 0.5em;\n  overflow: hidden;\n}\n.titulo p{\n  color: white;\n  letter-spacing: 0.2em;\n  font-size: 0.4em;\n  overflow: hidden;\n}\n.modal-contenido{\n  background:  linear-gradient(to right, black 1%, black 93%, rgba(0, 0, 0, 0) 100%);\n  width: 60vw;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25vh;\n  position: relative;\n  border-radius: 5px;\n  box-sizing: border-box;\n  transition: all 500ms ease;\n  border: none;\n}\n#miModal:target{\n  opacity:1;\n  pointer-events:auto;\n}\n.sencillo{\n  background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajesencillo.png\");\n  background-repeat: no-repeat;\n  width: 11.9vw;\n  height: 4.8vh;\n  margin-left: 10vw;\n  background-color: transparent !important;\n  outline: none;\n  border: none !important;\n}\n.sencillo:hover{\n  background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajesencillo-on.png\");\n  background-repeat: no-repeat;\n  width: 11.9vw;\n  height: 4.8vh;\n  margin-left: 10vw;\n  background-color: transparent !important;\n  outline: none;\n  border: none !important;\n  cursor: pointer;\n}\n.sencillo1{\n  width: 11.9vw;\n  margin-left: 10vw;\n}\n.sencilloDiv{\n  color: white;\n}\n.redondo{\n  background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajeredondo-off.png\");\n  background-repeat: no-repeat;\n  width: 11.9vw;\n  height: 4.8vh;\n  margin-left: 6vw;\n  background-color: transparent !important;\n  outline: none;\n  border: none !important;\n}\n.redondo:hover{\n  background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajeredondo-on.png\");\n  background-repeat: no-repeat;\n  width: 11.9vw;\n  height: 4.8vh;\n  margin-left: 6vw;\n  background-color: transparent !important;\n  outline: none;\n  border: none !important;\n  cursor: pointer;\n}\n.redondo1{\n  width: 11.9vw;\n  margin-left: 6vw;\n\n}\n.redondoDiv{\n  color: white;\n}\nlabel{\n  color: white;\n  margin-left: 8vw;\n}\n/*Clase para la equis de cerrar el modal*/\n.close{\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n.divViaje{\n  text-align: center;\n  font-size: 40px;\n}\n.btnViaje {\n  background-color: #17a0db;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.5em;\n  text-transform: uppercase;\n  font-family: sans-serif;\n  padding: 6px 12px;\n}\nselect#viaje {\n  margin: 0.3vw;\n  width: 22.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(\"https://Celestepaiz.github.io/test-ER/assets/img/down-arrow.png\") 96% / 15% no-repeat #eee;\n  background-color: white;\n}\nbutton#viaje {\n  margin: 0.3vw;\n  width: 22.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n}\n/* CAUTION: IE hackery ahead */\nselect#viaje::-ms-expand {\n    display: none; /* remove default arrow on ie10 and ie11 */\n}\n/* target Internet Explorer 9 to undo the custom arrow */\n@media screen and (min-width:0\\0) {\n    select#viaje {\n        background:none\\9;\n        padding: 5px\\9;\n    }\n}\np{\n  color: white;\n}\ninput#viaje {\n  margin: 0.3vw;\n  width: 22.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n@media only screen and (max-width: 700px) {\n  select#viaje {\n  margin: 0.3vw;\n  width: 60vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(\"https://Celestepaiz.github.io/test-ER/assets/img/down-arrow.png\") 96% / 15% no-repeat #eee;\n}\ninput#viaje {\n  margin: 0.3vw;\n  width: 60vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n}\n.btnMas{\n  color: white;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n  border: 1px solid transparent;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  cursor: pointer;\n}\n.btnMenos{\n  color: white;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  border: 1px solid transparent;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  cursor: pointer;\n  padding-right: 10px;\n  align-items: center;\n  -webkit-margin-start: 20px;\n          margin-inline-start: 20px;\n  margin-top: 1px;\n}\n.dropdown-menu{\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: .5rem 0;\n  margin: .125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: center;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: .25rem;\n  width: 22vw;\n}\n.dropdown-menu.show {\n    display: block;\n}\n\n"

/***/ }),

/***/ "./src/app/donde-llegas/donde-llegas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/donde-llegas/donde-llegas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"loading-container2\">\n  <img class=\"loading-logo\" src=\"https://aeropuertoer.com.mx/airport/img/logo-ER-white.png\">\n  <div class=\"pulse\"></div>\n</div>\n-->\n<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"fondo1\">\n    <div class=\"row justify-content-center\">\n\n\n        <div *ngIf=\"alertRegister\" class=\"col-8 col-md-8 col-xl-8 text-center\">\n          <div class=\"alert alert-danger fade show\" role=\"alert\">\n            <strong>¡Error!</strong> {{alertRegister}}\n          </div>\n        </div>\n\n      <div class=\"col-md-6 col-6 col-xl-6 portadaIzquierda\">\n          <button [disabled]=\"lockButtons\" (click)=\"pueblaShow();\" class=\"btn1\">Puebla</button>\n      </div>\n      <div class=\"col-md-6 col-6 col-xl-6 portadaDerecha\">\n          <button [disabled]=\"lockButtons\" (click)=\"mexicoShow();\" class=\"btn1\">Aeropuerto CDMX</button>\n      </div>\n      <div class=\"col-md-12 col-xl-12 col-12 titulo\">\n        <h1>¡Tu viaje comienza aquí!</h1>\n        <p>¿A dónde llegas?</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Inicio del modal de puebla-->\n<div #muestraPuebla id=\"miModal\" class=\"modal\">\n  <div class=\"modal-contenido\">\n  \t<div class=\"row\">\n  \t\t<div class=\"col-10 col-md-10 col-xl-10\"></div>\n  \t\t<div class=\"col-2 col-md-2 col-xl-2\">\n  \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n  \t\t\t\t<span aria-hidden=\"true\">&times;</span>\n        \t</button>\n  \t\t</div>\n  \t\t<div class=\"col-6 col-md-6 col-xl-6 sencilloDiv\">\n  \t\t\t<button (click)='setTipoViajeIda(true);setTipoViajeRedondo(false);' class=\"sencillo\"></button>\n  \t\t\t<p class=\"sencillo1\">Sencillo</p>\n  \t\t</div>\n  \t\t<div class=\"col-6 col-md-6 col-xl-6 redondoDiv\">\n  \t\t\t<button (click)='setTipoViajeRedondo(true);setTipoViajeIda(false);' class=\"redondo\"></button>\n  \t\t\t<p class=\"redondo1\">Redondo</p>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"row\">\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>¿De dónde sales?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<select [(ngModel)]=\"selectedValuePueblaDondeSales\" id=\"viaje\">\n  \t\t\t\t<option *ngFor=\"let option of optionsPueblaDondeSales\" selected=\"option.name == 'Aeropuerto T1 CDMX'\" [value]=\"option.value\">{{option.name}}</option>\n  \t\t\t\t<!--<option value=\"CAPU\">Central CAPU PUE</option>value=\"4PTE\"\n  \t\t\t\t<option value=\"PSNDIEGO\">Plaza San Diego Cholula PUE</option>-->\n  \t\t\t</select>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>¿A dónde llegas?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<select [(ngModel)]=\"selectedValuePueblaDondeLlegas\" id=\"viaje\">\n  \t\t\t\t<option *ngFor=\"let option of optionsPueblaDondeLlegas\" [value]=\"option.value\">{{option.name}}</option>\n  \t\t\t\t<!--<option value=\"AEROT2\">Aeropuerto T2 CDMX</option>-->\n  \t\t\t</select>\n  \t\t</div>\n\n      <div *ngIf=\"valueIda\" class=\"col-12 col-md-6 col-xl-6 \">\n        <label>¿Qué día es tu viaje?</label>\n      </div>\n      <div *ngIf=\"valueIda\" class=\"col-12 col-md-6 col-xl-6 \" >\n        <input id=\"viaje\" name=\"todayDatePuebla\" type=\"text\" #dp=\"bsDatepicker\" bsDatepicker [bsValue]=\"todayDatePuebla\" [minDate]=\"todayDatePuebla\">\n      </div>\n\n\n\t\t\t<div *ngIf=\"valueRedondo\" class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>Selecciona ida y regreso</label>\n  \t\t</div>\n  \t\t<div *ngIf=\"valueRedondo\" class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<input id=\"viaje\" type=\"text\" name=\"todayDatePueblaRegreso\" [minDate]=\"todayDatePuebla\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"bsRangeValue\">\n  \t\t</div>\n\n\t\t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>¿Cuántos viajan?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n\t\t\t\t<!--<input [(ngModel)]=\"selectedAsientosNumberPuebla\" type=\"number\" min=\"1\" max=\"5\" id=\"viaje\" value=\"1\" name=\"\">-->\n\t\t\t\t<div class=\"btn-group\" dropdown [autoClose]=\"false\">\n\t\t\t\t\t<button id=\"viaje\" dropdownToggle type=\"button\" \n\t\t\t\t\t\t\t\t\taria-controls=\"dropdown-autoclose2\">\n\t\t\t\t\t\tAdultos: {{contadorAdultos}}, Niños: {{contadorNinios}}, Inapam: {{contadorInapam}}<span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul id=\"dropdown-autoclose2\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-autoclose2\">\n\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaAdulto('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\tAdulto: {{contadorAdultos}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaAdulto('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaNinio('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\tNiño: {{contadorNinios}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaNinio('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaInapam('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\tINAPAM: {{contadorInapam}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaInapam('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\n  \t\t</div>          \n      <div class=\"col-12 col-md-12 col-xl-12 divViaje\">\n        <button data-dismiss=\"modal\" (click)=\"checkValuesPuebla()\" class=\"btnViaje\">Inicia tu viaje</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Inicio del modal de mexico-->\n<div #muestraMex id=\"miModal\" class=\"modal\">\n  <div class=\"modal-contenido\">\n  \t<div class=\"row\">\n  \t\t<div class=\"col-10 col-md-10 col-xl-10\"></div>\n  \t\t<div class=\"col-2 col-md-2 col-xl-2\">\n  \t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n  \t\t\t\t<span aria-hidden=\"true\">&times;</span>\n        \t</button>\n  \t\t</div>\n  \t\t<div class=\"col-6 col-md-6 col-xl-6 sencilloDiv\">\n  \t\t\t<button (click)='setTipoViajeIda(true);setTipoViajeRedondo(false);' class=\"sencillo\"></button>\n  \t\t\t<p class=\"sencillo1\">Sencillo</p>\n  \t\t</div>\n  \t\t<div class=\"col-6 col-md-6 col-xl-6 redondoDiv\">\n  \t\t\t<button (click)='setTipoViajeRedondo(true);setTipoViajeIda(false);' class=\"redondo\"></button>\n  \t\t\t<p class=\"redondo1\">Redondo</p>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"row\">\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>¿De dónde sales?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<select [(ngModel)]=\"selectedValueMexicoDondeSales\" id=\"viaje\">\n  \t\t\t\t<option *ngFor=\"let option of optionsMexicoDondeSales\" [value]=\"option.value\">{{option.name}}</option>\n  \t\t\t</select>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6\">\n  \t\t\t<label>¿A dónde llegas?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6\">\n  \t\t\t<select [(ngModel)]=\"selectedValueMexicoDondeLlegas\" id=\"viaje\">\n  \t\t\t\t<option *ngFor=\"let option of optionsMexicoDondeLlegas\" [value]=\"option.value\">{{option.name}}</option>\n  \t\t\t</select>\n  \t\t</div>\n      <div *ngIf=\"valueIda\" class=\"col-12 col-md-6 col-xl-6\">\n        <label>¿Qué día es tu viaje?</label>\n      </div>\n      <div *ngIf=\"valueIda\" class=\"col-12 col-md-6 col-xl-6 \" >\n        <input id=\"viaje\" name=\"todayDateMexico\" type=\"text\" #dp=\"bsDatepicker\" bsDatepicker [bsValue]=\"todayDateMexico\" [minDate]=\"todayDateMexico\">\n      </div>\n\n      <div *ngIf=\"valueRedondo\" class=\"col-12 col-md-6 col-xl-6 \">\n        <label>Selecciona ida y regreso</label>\n      </div>\n      <div *ngIf=\"valueRedondo\" class=\"col-12 col-md-6 col-xl-6 \">\n        <input id=\"viaje\" type=\"text\" name=\"todayDateMexicoRegreso\" [minDate]=\"todayDateMexico\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"bsRangeValue\">\n      </div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n  \t\t\t<label>¿Cuántos viajan?</label>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-6 col-xl-6 \">\n\t\t\t\t<!--<input [(ngModel)]=\"selectedAsientosNumberMexico\" type=\"number\" min=\"1\" max=\"5\" id=\"viaje\" value=\"1\" name=\"\">-->\n\t\t\t\t<div class=\"btn-group\" dropdown [autoClose]=\"false\">\n\t\t\t\t\t\t<button id=\"viaje\" dropdownToggle type=\"button\"\n\t\t\t\t\t\t\t\t\t\taria-controls=\"dropdown-autoclose2\">\n\t\t\t\t\t\t\tAdultos: {{contadorAdultosMexico}}, Niños: {{contadorNiniosMexico}}, Inapam: {{contadorInapamMexico}}<span class=\"caret\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul id=\"dropdown-autoclose2\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-autoclose2\">\n\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaAdultoMexico('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\t\tAdulto: {{contadorAdultosMexico}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaAdultoMexico('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaNinioMexico('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\t\tNiño: {{contadorNiniosMexico}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaNinioMexico('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaInapamMexico('menos')\" type=\"button\" class=\"btnMenos\">-</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-xl-6 quitar-padding text-center\">\n\t\t\t\t\t\t\t\t\t\t\tINAPAM: {{contadorInapamMexico}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-xl-3 quitar-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"aumentaInapamMexico('mas')\" type=\"button\" class=\"btnMas\">+</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"col-12 col-md-12 col-xl-12 divViaje\">\n  \t\t\t<button data-dismiss=\"modal\" (click)=\"checkValuesMexico()\"  class=\"btnViaje\">Inicia tu viaje</button>\n  \t\t</div>\n  \t</div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/donde-llegas/donde-llegas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/donde-llegas/donde-llegas.component.ts ***!
  \********************************************************/
/*! exports provided: DondeLlegasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DondeLlegasComponent", function() { return DondeLlegasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/totem-apis.service */ "./src/app/services/totem-apis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DondeLlegasComponent = /** @class */ (function () {
    function DondeLlegasComponent(_route, _router, _totemService) {
        this._route = _route;
        this._router = _router;
        this._totemService = _totemService;
        this.valueIda = true;
        this.todayDatePuebla = new Date();
        this.todayDateMexico = new Date();
        this.todayDatePueblaRegreso = new Date();
        this.todayDateMexicoRegreso = new Date();
        this.optionsPueblaDondeLlegas = [
            {
                value: '4PTE',
                name: "Terminal 4 Poniente PUE"
            },
            {
                value: 'CAPU',
                name: "Central CAPU PUE"
            },
            {
                value: 'PSNDIEGO',
                name: "Plaza San Diego Cholula PUE"
            }
        ];
        this.optionsPueblaDondeSales = [
            {
                value: 'AERO',
                name: "Aeropuerto T1 CDMX"
            },
            {
                value: 'AEROT2',
                name: "Aeropuerto T2 CDMX"
            }
        ];
        this.optionsMexicoDondeLlegas = [
            {
                value: 'AERO',
                name: "Aeropuerto T1 CDMX"
            },
            {
                value: 'AEROT2',
                name: "Aeropuerto T2 CDMX"
            }
        ];
        this.optionsMexicoDondeSales = [
            {
                value: '4PTE',
                name: "Terminal 4 Poniente PUE"
            },
            {
                value: 'CAPU',
                name: "Central CAPU PUE"
            },
            {
                value: 'PSNDIEGO',
                name: "Plaza San Diego Cholula PUE"
            }
        ];
        this.todayDatePueblaRegreso.setDate(this.todayDatePueblaRegreso.getDate() + 7);
        this.bsRangeValue = [this.todayDatePuebla, this.todayDatePueblaRegreso];
    }
    DondeLlegasComponent.prototype.ngOnInit = function () {
        this.getServerStatus();
        this.lockButtons = true;
        this.contadorGeneral = 0;
        this.contadorAdultos = 0;
        this.contadorNinios = 0;
        this.contadorInapam = 0;
        this.contadorGeneralMexico = 0;
        this.contadorAdultosMexico = 0;
        this.contadorNiniosMexico = 0;
        this.contadorInapamMexico = 0;
    };
    DondeLlegasComponent.prototype.getServerStatus = function () {
        var _this = this;
        this._totemService.getServerStatus().subscribe(function (response) {
            _this.serverLives = true;
            _this.iniciarSesion();
        }, function (error) {
            _this.serverLives = false;
            _this.alertRegister = '¡Oops! Ocurrió un error en el servidor';
        });
    };
    DondeLlegasComponent.prototype.iniciarSesion = function () {
        var _this = this;
        this.lockButtons = true;
        this.alertRegister = null;
        this._totemService.getIDFromLogin().subscribe(function (response) {
            //console.log(response.sesionID);
            if (response.sesionID == 0) {
                _this.lockButtons = false;
                _this.serverLives = false;
                _this.alertRegister = '¡Oops! Server no disponible';
            }
            else {
                _this.lockButtons = false;
                _this.serverLives = true;
                var identity = response;
                _this.identity = identity;
                _this.alertRegister = null;
                localStorage.setItem('myID', JSON.stringify(identity));
            }
        }, function (error) {
            _this.serverLives = false;
            _this.alertRegister = '¡Oops! Ocurrió un error en el servidor';
        });
    };
    DondeLlegasComponent.prototype.aumentaAdulto = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorAdultos > 0) {
                this.contadorAdultos--;
                this.contadorGeneral--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneral < 10) {
                this.contadorAdultos++;
                this.contadorGeneral++;
            }
        }
    };
    DondeLlegasComponent.prototype.aumentaAdultoMexico = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorAdultosMexico > 0) {
                this.contadorAdultosMexico--;
                this.contadorGeneralMexico--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneralMexico < 10) {
                this.contadorAdultosMexico++;
                this.contadorGeneralMexico++;
            }
        }
    };
    DondeLlegasComponent.prototype.aumentaNinio = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorNinios > 0) {
                this.contadorNinios--;
                this.contadorGeneral--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneral < 10) {
                this.contadorNinios++;
                this.contadorGeneral++;
            }
        }
    };
    DondeLlegasComponent.prototype.aumentaNinioMexico = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorNiniosMexico > 0) {
                this.contadorNiniosMexico--;
                this.contadorGeneralMexico--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneralMexico < 10) {
                this.contadorNiniosMexico++;
                this.contadorGeneralMexico++;
            }
        }
    };
    DondeLlegasComponent.prototype.aumentaInapam = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorInapam > 0) {
                this.contadorInapam--;
                this.contadorGeneral--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneral < 10) {
                this.contadorInapam++;
                this.contadorGeneral++;
            }
        }
    };
    DondeLlegasComponent.prototype.aumentaInapamMexico = function (status) {
        if (status == 'menos') {
            if (this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorInapamMexico > 0) {
                this.contadorInapamMexico--;
                this.contadorGeneralMexico--;
            }
        }
        if (status == 'mas') {
            if (this.contadorGeneralMexico < 10) {
                this.contadorInapamMexico++;
                this.contadorGeneralMexico++;
            }
        }
    };
    DondeLlegasComponent.prototype.checkValuesPuebla = function () {
        if (this.serverLives == true) {
            if (this.selectedValuePueblaDondeSales == null || this.selectedValuePueblaDondeLlegas == null) {
                this.alertRegister = 'Selecciona lugar de Salida y Llegada';
            }
            else {
                this.alertRegister = null;
                if (this.valueRedondo) {
                    if (this.todayDatePueblaRegreso == null) {
                        this.alertRegister = 'Selecciona una fecha para tu viaje de regreso';
                    }
                    else {
                        if (this.contadorAdultos == 0 && this.contadorNinios == 0 && this.contadorInapam == 0) {
                            this.alertRegister = 'Selecciona el número de asientos';
                        }
                        else {
                            this.alertRegister = null; // Aqui todo esta bien en el viaje redondo                
                            this._router.navigate(['list'], {
                                queryParams: {
                                    salida: this.selectedValuePueblaDondeSales,
                                    llegada: this.selectedValuePueblaDondeLlegas,
                                    fech: this.bsRangeValue[0],
                                    fecReg: this.bsRangeValue[1],
                                    asientosAdulto: this.contadorAdultos,
                                    asientosNinio: this.contadorNinios,
                                    asientosInapam: this.contadorInapam
                                }
                            });
                        }
                    }
                }
                else {
                    if (this.todayDatePuebla == null) {
                        this.alertRegister = 'Selecciona una fecha para tu viaje de ida';
                    }
                    else {
                        if (this.contadorAdultos == 0 && this.contadorNinios == 0 && this.contadorInapam == 0) {
                            this.alertRegister = 'Selecciona el número de asientos';
                        }
                        else {
                            this.alertRegister = null; // Aqui todo esta bien en el viaje no redondo
                            this._router.navigate(['list'], {
                                queryParams: {
                                    salida: this.selectedValuePueblaDondeSales,
                                    llegada: this.selectedValuePueblaDondeLlegas,
                                    fech: this.todayDatePuebla,
                                    asientosAdulto: this.contadorAdultos,
                                    asientosNinio: this.contadorNinios,
                                    asientosInapam: this.contadorInapam
                                }
                            });
                        }
                    }
                }
            }
        }
        else {
            this.alertRegister = 'No podemos consultar corridas, servidor no está disponible';
        }
    };
    DondeLlegasComponent.prototype.checkValuesMexico = function () {
        if (this.serverLives == true) {
            if (this.selectedValueMexicoDondeSales == null || this.selectedValueMexicoDondeLlegas == null) {
                this.alertRegister = 'Selecciona lugar de Salida y Llegada';
            }
            else {
                this.alertRegister = null;
                if (this.valueRedondo) {
                    if (this.todayDateMexicoRegreso == null) {
                        this.alertRegister = 'Selecciona una fecha para tu viaje de regreso';
                    }
                    else {
                        if (this.contadorAdultosMexico == 0 && this.contadorNiniosMexico == 0 && this.contadorInapamMexico == 0) {
                            this.alertRegister = 'Selecciona el número de asientos';
                        }
                        else {
                            this.alertRegister = null; // Aqui todo esta bien en el viaje redondo
                            this._router.navigate(['list'], {
                                queryParams: {
                                    salida: this.selectedValueMexicoDondeSales,
                                    llegada: this.selectedValueMexicoDondeLlegas,
                                    fech: this.bsRangeValue[0],
                                    fecReg: this.bsRangeValue[1],
                                    asientosAdulto: this.contadorAdultosMexico,
                                    asientosNinio: this.contadorNiniosMexico,
                                    asientosInapam: this.contadorInapamMexico
                                }
                            });
                        }
                    }
                }
                else {
                    if (this.todayDateMexico == null) {
                        this.alertRegister = 'Selecciona una fecha para tu viaje de ida';
                    }
                    else {
                        if (this.contadorAdultosMexico == 0 && this.contadorNiniosMexico == 0 && this.contadorInapamMexico == 0) {
                            this.alertRegister = 'Selecciona el número de asientos';
                        }
                        else {
                            this.alertRegister = null; // Aqui todo esta bien en el viaje no redondo
                            this._router.navigate(['list'], {
                                queryParams: {
                                    salida: this.selectedValueMexicoDondeSales,
                                    llegada: this.selectedValueMexicoDondeLlegas,
                                    fech: this.todayDateMexico,
                                    asientosAdulto: this.contadorAdultosMexico,
                                    asientosNinio: this.contadorNiniosMexico,
                                    asientosInapam: this.contadorInapamMexico
                                }
                            });
                        }
                    }
                }
            }
        }
        else {
            this.alertRegister = 'No podemos consultar corridas, servidor no está disponible';
        }
    };
    DondeLlegasComponent.prototype.setTipoViajeIda = function (value) {
        this.valueIda = value;
    };
    DondeLlegasComponent.prototype.setTipoViajeRedondo = function (value) {
        this.valueRedondo = value;
    };
    DondeLlegasComponent.prototype.logout = function () {
        localStorage.removeItem('myID');
        localStorage.clear();
        this.identity = null;
        //this._router.navigate(['/login']);
    };
    DondeLlegasComponent.prototype.pueblaShow = function () {
        $(this.puebla.nativeElement).modal('show');
    };
    DondeLlegasComponent.prototype.mexicoShow = function () {
        $(this.mexico.nativeElement).modal('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('muestraPuebla'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DondeLlegasComponent.prototype, "puebla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('muestraMex'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DondeLlegasComponent.prototype, "mexico", void 0);
    DondeLlegasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donde-llegas',
            template: __webpack_require__(/*! ./donde-llegas.component.html */ "./src/app/donde-llegas/donde-llegas.component.html"),
            styles: [__webpack_require__(/*! ./donde-llegas.component.css */ "./src/app/donde-llegas/donde-llegas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_2__["TotemApisService"]])
    ], DondeLlegasComponent);
    return DondeLlegasComponent;
}());



/***/ }),

/***/ "./src/app/footer-tourister/footer-tourister.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/footer-tourister/footer-tourister.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img#tam{\n\twidth: 20vw;\n}\n\nfooter#collo{\n\tbackground-color: #0f2760;\n}"

/***/ }),

/***/ "./src/app/footer-tourister/footer-tourister.component.html":
/*!******************************************************************!*\
  !*** ./src/app/footer-tourister/footer-tourister.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" id=\"collo\">\n  <!--foote_bottom_ul_amrc ends here-->\n\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-lg-2\" style=\"text-align: center\">\n      <img id=\"tam\" src=\"../../assets/img/touristerF.png\">\n    </div>\n    <div class=\"col-lg-6\">\n      <p class=\"text-center\">\n\t\tAtención a clientes (222) 213 7135, (222) 273 8310 y (222) 273 8327\n\t\t</p>\n    </div>\n    <div class=\"col-lg-2\">\n      <img src=\"../../assets/img/sello.png\">\n    </div>\n    <div class=\"col-lg-2\" style=\"text-align: center\">\n      <p class=\"text-center\">Copyright © 2018 Estrella Roja</p>\n    </div>\n  </div>\n  <br>\n  <!--social_footer_ul ends here-->\n</footer>\n"

/***/ }),

/***/ "./src/app/footer-tourister/footer-tourister.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/footer-tourister/footer-tourister.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterTouristerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTouristerComponent", function() { return FooterTouristerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterTouristerComponent = /** @class */ (function () {
    function FooterTouristerComponent() {
    }
    FooterTouristerComponent.prototype.ngOnInit = function () {
    };
    FooterTouristerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-tourister',
            template: __webpack_require__(/*! ./footer-tourister.component.html */ "./src/app/footer-tourister/footer-tourister.component.html"),
            styles: [__webpack_require__(/*! ./footer-tourister.component.css */ "./src/app/footer-tourister/footer-tourister.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTouristerComponent);
    return FooterTouristerComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Seccipn de carga*/\n.loading-container2 {\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    left: 0;\n    background-color: #000000;\n    z-index: 9999999;\n  }\n.loading-container2 .loading-logo {\n    position: absolute;\n    top: 25vh;\n    left: 50vh;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n.loading-container2 .pulse {\n    border: 3px solid #148abd;\n    height: 30px;\n    width: 30px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-animation: pulsate s ease-out;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation: pulsate 2s ease-out;\n            animation: pulsate 2s ease-out;\n    animation-iteration-count: infinite;\n    border-radius: 30px;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n  }\n@-webkit-keyframes pulsate {\n    0% {\n      -webkit-transform: scale(0.1, 0.1);\n              transform: scale(0.1, 0.1);\n      opacity: 0.0;\n    }\n    50% {\n      opacity: 1.0;\n    }\n    100% {\n      -webkit-transform: scale(1.5, 1.5);\n              transform: scale(1.5, 1.5);\n      opacity: 0.0;\n    }\n  }\n@keyframes pulsate {\n    0% {\n      -webkit-transform: scale(0.1, 0.1);\n              transform: scale(0.1, 0.1);\n      opacity: 0.0;\n    }\n    50% {\n      opacity: 1.0;\n    }\n    100% {\n      -webkit-transform: scale(1.5, 1.5);\n              transform: scale(1.5, 1.5);\n      opacity: 0.0;\n    }\n  }\n/*Fondo de rayas*/\n.fondo1{\n    margin-left: -15px;\n    margin-right: -15px;\n    background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/foto1.jpeg);\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    overflow: hidden;\n  }\n/* Clase que llama al fondo de la izquierda*/\n.portadaIzquierda {\n    position: relative;\n    display: inline-block;\n    max-width: 1000px;\n    height: 100vh;\n    min-width: 50vw;\n    padding-left: 0px;\n    padding-right: 0px;\n    transition: all 0.2s linear;\n    overflow: hidden;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: right bottom;\n    vertical-align: bottom;\n    font-size: 50px;\n  }\n/* Clase que llama al fondo derecho*/\n.portadaDerecha {\n    position: relative;\n    display: inline-block;\n    max-width: 1000px;\n    height: 100vh;\n    min-width: 50vw;\n    padding-left: 0px;\n    padding-right: -10px;\n    transition: all 0.2s linear;\n    overflow: hidden;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: left bottom;\n    vertical-align: bottom;\n    font-size: 50px;\n  \n  }\n.btn1 {\n    position: relative;\n    border: none;\n    background: rgb(0, 55, 100);\n    color: #f2f2f2;\n    padding: 0.5em;\n    font-size: 0.5em;\n    letter-spacing: 1px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    transition: all 500ms ease;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50vh;\n    width: 300px;\n    font-family: sans-serif;\n    overflow: hidden;\n    \n  \n  }\n.btn2 {\n    position: relative;\n    border: none;\n    background: rgb(63, 174, 42);\n    color: #f2f2f2;\n    padding: 0.5em;\n    font-size: 0.5em;\n    letter-spacing: 1px;\n    border-radius: 5px;\n    box-sizing: border-box;\n    transition: all 500ms ease;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50vh;\n    width: 300px;\n    font-family: sans-serif;\n    overflow: hidden;\n    \n  \n  }\n.titulo{\n    background: #000; \n    opacity: .50;\n    font-size: 85px;\n    letter-spacing: 2px;\n    text-align: center;\n    margin-top: -83vh;\n    margin-bottom: 93vh;\n    font-family: Myriad Pro Regular;\n    overflow: hidden;\n    color: white;\n  }\n.titulo h1{\n    color: white;\n    letter-spacing: 0.5em;\n    font-size: 0.5em;\n    overflow: hidden;\n  }\n.titulo p{\n    color: white;\n    letter-spacing: 0.2em;\n    font-size: 0.4em;\n    overflow: hidden;\n  }\n.modal-contenido{\n    background:  linear-gradient(to right, black 1%, black 93%, rgba(0, 0, 0, 0) 100%);\n    width: 60vw;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 25vh;\n    position: relative;\n    border-radius: 5px;\n    box-sizing: border-box;\n    transition: all 500ms ease;\n    border: none;\n  }\n#miModal:target{\n    opacity:1;\n    pointer-events:auto;\n  }\n.sencillo{\n    background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajesencillo.png\");\n    background-repeat: no-repeat;\n    width: 6.5vh;\n    height: 3.5vh;\n    background-color: transparent !important;\n    outline: none;\n    border: none !important;\n  }\n.sencilloDiv{\n    text-align: center;\n    color: white;\n  }\n.redondo{\n    background-image: url(\"https://Celestepaiz.github.io/test-ER/assets/img/viajeredondo-off.png\");\n    background-repeat: no-repeat;\n    width: 6.5vh;\n    height: 3.9vh;\n    background-color: transparent !important;\n    outline: none;\n    border: none !important;\n  }\n.redondoDiv{\n    text-align: center;\n    color: white;\n  }\nlabel{\n    color: white;\n  }\n.llenado{\n    text-align: center;\n  }\n/*Clase para la equis de cerrar el modal*/\n.close{\n    float: right;\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-shadow: 0 1px 0 #fff;\n    opacity: .5;\n  }\n.divViaje{\n    text-align: center;\n    font-size: 40px;\n  }\n.btnViaje {\n    background-color: #17a0db;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 0.5em;\n    text-transform: uppercase;\n    font-family: sans-serif;\n    padding: 6px 12px;\n  }\nselect#viaje {\n    margin: 0.3vw;\n    width: 33vh;\n    color: #17a0db;\n    padding: 5px 35px 5px 5px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    height: 34px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url(\"https://Celestepaiz.github.io/test-ER/assets/img/down-arrow.png\") 96% / 15% no-repeat #eee;\n  }\n/* CAUTION: IE hackery ahead */\nselect#viaje::-ms-expand {\n      display: none; /* remove default arrow on ie10 and ie11 */\n  }\n/* target Internet Explorer 9 to undo the custom arrow */\n@media screen and (min-width:0\\0) {\n      select#viaje {\n          background:none\\9;\n          padding: 5px\\9;\n      }\n  }\np{\n    color: white;\n  }\ninput#viaje {\n    margin: 0.3vw;\n    width: 33vh;\n    color: #17a0db;\n    padding: 5px 35px 5px 5px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    height: 34px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  "

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-principal></app-navbar-principal>\n<link rel=\"stylesheet\" href=\"//brick.a.ssl.fastly.net/Roboto:400\"/>\n<div class=\"container-fluid\">\n\t<div class=\"fondo1\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-6 col-xl-6 portadaIzquierda\">\n\t\t\t\t\t<button [routerLink]=\"['/tourister']\" class=\"btn1\"><b style=\"font-size:2em;\">Tourister</b><br> Recorre Puebla y sus lugares mágicos de una manera especial.</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-6 col-xl-6 portadaDerecha\">\n\t\t\t\t\t<button [routerLink]=\"['/donde-sales']\" class=\"btn2\"><b style=\"font-size:2em;\">Aeropuerto</b><br> Llega con tiempo al aeropuerto de la Ciudad de México</button>\n      </div>\n      \n\t\t\t<div class=\"col-md-12 col-xl-12 col-12 titulo\">\n\t\t\t\t<h1>¿Qué quieres hacer el día de hoy?</h1>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.box{\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.txt-blue {\n    color: #148abd;\n    letter-spacing: 2px;\n    font-weight: bold;\n}\n\n.hora {\n    font-size: 24px;\n    color: #000;\n    letter-spacing: 2px;\n}\n\n/*Load css*/\n\n.lds-hourglass {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-hourglass:after {\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  width: 0;\n  height: 0;\n  margin: 6px;\n  box-sizing: border-box;\n  border: 26px solid #cef;\n  border-color: #cef transparent #cef transparent;\n  -webkit-animation: lds-hourglass 1.2s infinite;\n          animation: lds-hourglass 1.2s infinite;\n}\n\n@-webkit-keyframes lds-hourglass {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    -webkit-transform: rotate(900deg);\n            transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n\n@keyframes lds-hourglass {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    -webkit-transform: rotate(900deg);\n            transform: rotate(900deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n\n/**/\n"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container box\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6 text-center\">\n        <button [disabled]=\"!loading\" [routerLink]=\"['/donde-sales']\" type=\"button\" class=\"btn btn-primary btn-lg\">Regresar</button>\n        <br><br><br>\n      </div>\n\n      <div class=\"col-md-6 text-center\">\n          <button [disabled]=\"!loading\" [routerLink]=\"['/donde-llegas']\" type=\"button\" class=\"btn btn-danger btn-lg\">Salir</button>\n          <br><br><br>\n      </div>\n    </div>\n\n    <div *ngIf=\"!loading\" class=\"card text-center\">\n      <div class=\"card-header\">\n        Estrella Roja\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <br><br><br><br>\n            <h1 class=\"display-4\">Preparando tu viaje</h1>\n            <div class=\"lds-hourglass\"></div>\n            <p class=\"h5\">Cargando destinos</p>\n            <br><br><br><br>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer text-muted\">\n        Aeropuerto\n      </div>\n    </div>\n\n    <div *ngIf=\"noCorridas\" class=\"card text-center\">\n      <div class=\"card-header\">\n        Estrella Roja\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <br><br><br><br>\n            <h1 class=\"display-5\">¡Lo sentimos!</h1>\n            <p class=\"h4\">No hay corridas disponibles</p>\n            <br><br><br><br>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer text-muted\">\n        Aeropuerto\n      </div>\n    </div>\n\n    <div *ngIf=\"loading\" class=\"list-group\">\n        <div *ngFor=\"let corrida of corridasIda\"  class=\"list-group-item list-group-item-action\">\n            <div class=\"row\">\n                <div class=\"col-md-3 align-self-center\">\n                 <p class=\"txt-blue\">Hora salida</p>\n                </div>\n                <div class=\"col-md-3 align-self-center\">\n                    <p class=\"hora\"> {{corrida.fechaHoraSalida | date:'shortTime'}}</p>\n                </div>\n                <div class=\"col-md-3 align-self-center\">\n                    <p class=\"hora\"> {{corrida.descripcionOrigeSolicitado}}</p>\n                </div>\n                <div class=\"col-md-3 d-flex justify-content-center align-self-center d-flex mx-auto\">\n                    <p class=\"txt-blue\"> Tarifa </p>   <button (click)=\"sendCorrida(corrida.claveCorrida)\" type=\"button\" class=\"btn btn-outline-info\"> $300 </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 align-self-center\">\n                 <p class=\"txt-blue\">Disponibles</p>\n                </div>\n                <div class=\"col-md-3 align-self-center\">\n                    <p class=\"hora\"> {{corrida.pasajerosDisponibles}}</p>\n                </div>\n                <div class=\"col-md-3 align-self-center\">\n                    <p class=\"hora\"> {{corrida.descripcionDestinoSolicitado}}</p>\n                </div>\n            </div>\n        </div>\n      </div>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/totem-apis.service */ "./src/app/services/totem-apis.service.ts");
/* harmony import */ var _models_corridas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/corridas */ "./src/app/models/corridas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(_route, _router, _totemService) {
        this._route = _route;
        this._router = _router;
        this._totemService = _totemService;
        this.corridasIda = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = false;
        this.identity = this._totemService.getIdentity();
        this._route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            //this.page = +params['page'] || 0;
            _this.salida = params['salida'] || null;
            _this.llegada = params['llegada'] || null;
            _this.fechaSalida = params['fech'] || null;
            _this.fechaRegreso = params['fecReg'] || null;
            _this.asientosAdulto = params['asientosAdulto'] || null;
            _this.asientosNinio = params['asientosNinio'] || null;
            _this.asientosInapam = params['asientosInapam'] || null;
        });
        //Validaciones de que existan parametros
        if (this.salida == null || this.llegada == null) {
            this._router.navigate(['donde-sales']);
        }
        else {
            if (this.fechaRegreso != null) {
                console.log('Todo esta bien en el viaje redondo');
                this.consultaCorridas(true);
            }
            else {
                if (this.fechaSalida != null) {
                    console.log('Todo esta bien en el viaje sencillo');
                    this.consultaCorridas(false);
                }
                else {
                    this._router.navigate(['donde-sales']);
                }
            }
        }
    };
    ListComponent.prototype.consultaCorridas = function (redondo) {
        var _this = this;
        if (!redondo) {
            //Fecha en este formato ---> 2018-09-05T00:00:00
            var myFecha = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
            var body = {
                salida: this.salida,
                llegada: this.llegada,
                id: this.identity.sesionID,
                fecha: myFecha
            };
            //Peticion al Server en Node
            this._totemService.getCorridas(body).subscribe(function (response) {
                _this.loading = true;
                for (var i in response.corridas) {
                    if (response.corridas[i].destinoCorrida._text == _this.llegada) {
                        //console.log(response.corridas[i].claveCorrida._text);
                        var aux = new _models_corridas__WEBPACK_IMPORTED_MODULE_4__["Corridas"](response.corridas[i].claveCorrida._text, response.corridas[i].descripcionDestinoSolicitado._text, response.corridas[i].descripcionOrigeSolicitado._text, response.corridas[i].destinoSolicitado._text, response.corridas[i].origenSolicitado._text, response.corridas[i].fechaCorrida._text, response.corridas[i].fechaHoraSalida._text, response.corridas[i].pasajerosDisponibles._text, response.corridas[i].servicioNombre._text);
                        _this.corridasIda.push(aux);
                    }
                }
                if (_this.corridasIda.length == 0) {
                    _this.noCorridas = true;
                }
                //console.log(this.corridasIda);
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.loading = true;
                    _this.alertRegister = body.message;
                }
            });
        }
        else {
            /*Aqui haremos dos peticiones al Server la primera para obtener las corridas de ida
              y la segunda para obtener las corridas de vuelta*/
            //Fecha en este formato ---> 2018-09-05T00:00:00
            var myFechaSalida = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
            var bodySalida = {
                salida: this.salida,
                llegada: this.llegada,
                id: this.identity.sesionID,
                fecha: myFechaSalida
            };
            var myFechaRegreso = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.fechaRegreso, 'yyyy-MM-ddT00:00:00', 'en-US');
            var bodyVuelta = {
                salida: this.salida,
                llegada: this.llegada,
                id: this.identity.sesionID,
                fecha: myFechaRegreso
            };
        }
    };
    ListComponent.prototype.sendCorrida = function (claveViaje) {
        var myFecha = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
        this._router.navigate(['asientos'], {
            queryParams: {
                salida: this.salida,
                llegada: this.llegada,
                fech: myFecha,
                clave: claveViaje,
                tarifa: 300,
                asientosAdulto: this.asientosAdulto,
                asientosNinio: this.asientosNinio,
                asientosInapam: this.asientosInapam
            }
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__["TotemApisService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/models/corridas.ts":
/*!************************************!*\
  !*** ./src/app/models/corridas.ts ***!
  \************************************/
/*! exports provided: Corridas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corridas", function() { return Corridas; });
var Corridas = /** @class */ (function () {
    function Corridas(claveCorrida, descripcionDestinoSolicitado, descripcionOrigeSolicitado, destinoSolicitado, origenSolicitado, fechaCorrida, fechaHoraSalida, pasajerosDisponibles, servicioNombre) {
        this.claveCorrida = claveCorrida;
        this.descripcionDestinoSolicitado = descripcionDestinoSolicitado;
        this.descripcionOrigeSolicitado = descripcionOrigeSolicitado;
        this.destinoSolicitado = destinoSolicitado;
        this.origenSolicitado = origenSolicitado;
        this.fechaCorrida = fechaCorrida;
        this.fechaHoraSalida = fechaHoraSalida;
        this.pasajerosDisponibles = pasajerosDisponibles;
        this.servicioNombre = servicioNombre;
    }
    return Corridas;
}());



/***/ }),

/***/ "./src/app/navabar-tourister/navabar-tourister.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/navabar-tourister/navabar-tourister.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navabar-tourister/navabar-tourister.component.html":
/*!********************************************************************!*\
  !*** ./src/app/navabar-tourister/navabar-tourister.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo3\">\n\t<video class=\"video\" onloadedmetadata=\"this.muted=true\" autoplay loop>\n \t\t<source src=\"assets/img/video.ogg\" type=\"video/ogg\">\n\t</video>\n</div>"

/***/ }),

/***/ "./src/app/navabar-tourister/navabar-tourister.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/navabar-tourister/navabar-tourister.component.ts ***!
  \******************************************************************/
/*! exports provided: NavabarTouristerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavabarTouristerComponent", function() { return NavabarTouristerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavabarTouristerComponent = /** @class */ (function () {
    function NavabarTouristerComponent() {
    }
    NavabarTouristerComponent.prototype.ngOnInit = function () {
    };
    NavabarTouristerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navabar-tourister',
            template: __webpack_require__(/*! ./navabar-tourister.component.html */ "./src/app/navabar-tourister/navabar-tourister.component.html"),
            styles: [__webpack_require__(/*! ./navabar-tourister.component.css */ "./src/app/navabar-tourister/navabar-tourister.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavabarTouristerComponent);
    return NavabarTouristerComponent;
}());



/***/ }),

/***/ "./src/app/navbar-principal/navbar-principal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/navbar-principal/navbar-principal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar-principal/navbar-principal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/navbar-principal/navbar-principal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo2\">\n\t<video class=\"video\" onloadedmetadata=\"this.muted=true\" autoplay loop>\n \t\t<source src=\"assets/img/video.ogg\" type=\"video/ogg\">\n\t</video>\n</div>"

/***/ }),

/***/ "./src/app/navbar-principal/navbar-principal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/navbar-principal/navbar-principal.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarPrincipalComponent", function() { return NavbarPrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarPrincipalComponent = /** @class */ (function () {
    function NavbarPrincipalComponent() {
    }
    NavbarPrincipalComponent.prototype.ngOnInit = function () {
    };
    NavbarPrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-principal',
            template: __webpack_require__(/*! ./navbar-principal.component.html */ "./src/app/navbar-principal/navbar-principal.component.html"),
            styles: [__webpack_require__(/*! ./navbar-principal.component.css */ "./src/app/navbar-principal/navbar-principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarPrincipalComponent);
    return NavbarPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/pago-regreso/pago-regreso.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pago-regreso/pago-regreso.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import \"~bootstrap/dist/css/bootstrap.css\";\n@import \"~font-awesome/css/font-awesome.css\";\nYou can add global styles to this file, and also import other style files */\n\n\nh3 {\n  text-align: center;\n}\n\n\nh2.lefty{\n  text-align: left;\n}\n\n\n.formulario{\n  background: #000; \n  opacity: .90;\n  letter-spacing: 2px;\n  font-family: Myriad Pro Regular;\n  overflow: hidden;\n  color: white;\n}\n\n\nul{\n  list-style-type: none;\n  font-family: Myriad Pro Regular;\n  padding-left: 10%;\n}\n\n\n/*Fondo de rayas*/\n\n\n.fondo1{\n  margin-left: -15px;\n  margin-right: -15px;\n  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/ParallaxBack.png);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n\n\nform{\n  position: relative;\n  width: 800px;\n  margin:0 auto;\n}\n\n\nbody {\n     \n      padding-top: 230px;\n\t\t}\n\n\n.event{\n\t\t\tborder-radius: 4px;\n\t\t\twidth: 600px;\n\t\t\theight: 225px;\n            margin: 40px auto 0;\n\t\t}\n\n\n.event-side{\n\t\t\tpadding: 10px;\n            border-radius: 4px;\n            border: 20px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: calc(15% - 1px);\n\t\t\tbox-shadow: 1px 2px 2px -1px rgb(90, 88, 88);\n\t\t\tbackground: white;\n\t\t\tz-index: 1000;\n\t\t\tborder-bottom-right-radius: 10px;\n\t\t\tborder-top-right-radius: 10px;\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tfont-size: 0.8em;\n\t\t\ttext-align: right;\n    }\n\n\n.cut-out{\n\t\t\tborder-radius: 1000px;\n\t\t\twidth: 100%;\n\t\t\theight: 40%;\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: -60%;\n\t\t\ttop: 25%;\n\t\t  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/ParallaxBack.png);\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      overflow: hidden;\n\t\t\tbox-shadow: inset -1px 2px 2px -1px #888\n\t\t}\n\n\n.event-body {\n\t\t\tborder-radius: 4px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: 85%;\n\t\t\tbox-shadow: 0 2px 2px -1px #888;\n\t\t\tbackground:white;\n\t\t\tpadding-right: 10px;\n\t\t\tborder-bottom-left-radius: 10px;\n\t\t\tborder-top-left-radius: 10px; \n        }\n\n\n.boleto {\n            margin: 5px;\n        }\n\n\n.origen-destino {\n            text-align: center!important;\n            margin-bottom: 5px;\n        }\n\n\n.tarifa-asiento {\n            text-align: center!important;\n        }\n\n\n.fecha {\n            color: rgb(153, 4, 4);\n            font-weight: bold;\n        }\n\n\n.cliente {\n            color: rgb(54, 53, 53);\n            font-weight: bold;\n        }\n\n\n.txt-blue {\n            color: #148abd;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\n\n.dark-blue {\n            color: #002958;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\n\n.black {\n            font-size: 18px;\n            color: #000;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n       \n\n"

/***/ }),

/***/ "./src/app/pago-regreso/pago-regreso.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pago-regreso/pago-regreso.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"container\" class=\"fondo1\">\n  <header></header>\n\n  <div class=\"row\">\n      <div class=\"col-md-6 text-center\">\n          <br><br>\n          <button (click)='vuelveConParametros()' type=\"button\" class=\"btn btn-primary btn-lg\">Regresar</button>\n          <br><br><br>\n      </div>\n  \n      <div class=\"col-md-6 text-center\">\n          <br><br>\n          <button [routerLink]=\"['/donde-llegas']\" type=\"button\" class=\"btn btn-danger btn-lg\">Salir</button>\n          <br><br><br>\n      </div>\n  </div>\n\n\n  <section class=\"formulario\">\n    <br>\n    <h3>Llena tus datos</h3><br>\n    <form>\n    <div class=\"container box\">\n      <table>\n        <tr>\n          <th>\n              Nombre(s):\n          </th>\n          <th>\n              Apellidos:\n          </th>\n          <th>\n              Correo electrónico:\n          </th>\n        </tr>\n\n        <tr>\n          <th>\n              <input type = \"text\" [formControl]=\"name\" style=\"width:250px; height: 40px; margin:0 auto;\">\n          </th>\n          <th>\n              <input type = \"text\" [formControl]=\"lastName\" style=\"width:250px; height: 40px; margin:0 auto;\">\n          </th>\n          <th>\n              <input type = \"text\" [formControl]=\"email\" style=\"width:250px; height: 40px; margin:0 auto;\" placeholder=\"ejemplo@ejemplo.com\">\n          </th>\n        </tr>\n      </table>\n    </div>\n  </form>\n    <br>\n    <div class=\"fondo1 text-center\">\n      <div class=\"card-header\">\n        Estrella Roja\n      </div>\n      <!-- Informacion boleto de ida-->\n      <div class=\"event\">\n        <div class=\"event-side\">\n          <div class=\"cut-out\"></div>\n        </div>\n        <div class=\"event-body\">\n          <div class=\"boleto black\">\n            Boleto Ida\n          </div>\n          <div class=\"fecha\">\n            <h5>{{ today | date:'short' }}</h5>\n          </div>\n          <div class=\"cliente\">\n            Nombre: {{ name.value }} {{ lastName.value}}\n          </div>\n          <div class=\"cliente\">\n            Email: {{ email.value }}\n          </div>\n          <div class=\"origen-destino txt-blue\">\n            PUE - AEROPUERTO\n          </div>\n          <div class=\"d-flex justify-content-around\">\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Tarifa:</h6>\n              <h6 class=\"dark-blue\">$300</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Descuento:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Total:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n          </div>\n          <div class=\"tarifa-asiento d-flex justify-content-around\">\n            <h6 class=\"dark-blue\">Asiento:</h6>\n            <h6 class=\"dark-blue\">20</h6>\n          </div>\n          <div class=\"back\"></div>\n        </div>\n      </div>\n      <br><br><br>\n      <!--Informacion boleto de regreso-->\n      <div class=\"event\">\n        <div class=\"event-side\">\n          <div class=\"cut-out\"></div>\n        </div>\n        <div class=\"event-body\">\n          <div class=\"boleto black\">\n            Boleto Regreso\n          </div>\n          <div class=\"fecha\">\n            <h5>{{ today | date:'short' }}</h5>\n          </div>\n          <div class=\"cliente\">\n            Nombre: {{ name.value }} {{ lastName.value}}\n          </div>\n          <div class=\"cliente\">\n            Email: {{ email.value }}\n          </div>\n          <div class=\"origen-destino txt-blue\">\n            PUE - AEROPUERTO\n          </div>\n          <div class=\"d-flex justify-content-around\">\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Tarifa:</h6>\n              <h6 class=\"dark-blue\">$300</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Descuento:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Total:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n          </div>\n          <div class=\"tarifa-asiento d-flex justify-content-around\">\n            <h6 class=\"dark-blue\">Asiento:</h6>\n            <h6 class=\"dark-blue\">20</h6>\n          </div>\n          <div class=\"back\"></div>\n        </div>\n      </div>\n      <div class=\"card-footer text-muted\">\n        Aeropuerto\n      </div>\n    </div>\n    <br>\n    <div class=\"container box text-center\" style=\"width:700px; margin:0 auto; border:1px solid #cecece;\">\n        <h5>Pago</h5>\n        <br>\n        <h6>Paga y recibe tu boleto en tu correo electrónico</h6>\\\n        <h2 *ngIf=\"paypalLoad\">Cargando...</h2> \n          <div id=\"paypal-button-container\" class=\"text-center\"></div>\n    </div>\n  </section>\n</div>\n<br>\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "./src/app/pago-regreso/pago-regreso.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pago-regreso/pago-regreso.component.ts ***!
  \********************************************************/
/*! exports provided: PagoRegresoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoRegresoComponent", function() { return PagoRegresoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/totem-apis.service */ "./src/app/services/totem-apis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagoRegresoComponent = /** @class */ (function () {
    function PagoRegresoComponent(_route, _router, _totemService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._totemService = _totemService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.today = Date.now();
        this.addScript = false;
        this.paypalLoad = false;
        this.finalAmount = 1;
        this.paypalconfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AWXKT42pvW0yB-LHRMphM2t-rn4FS9pIldA7DYZdCaziB_bMeGXNsDeQYtXjleYxtM0K38aCTWwEwLGs'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.finalAmount, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    //do somenthing when payment is successful
                });
            }
        };
    }
    PagoRegresoComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalconfig, '#paypal-button-container');
                _this.paypalLoad = false;
            });
        }
    };
    PagoRegresoComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    PagoRegresoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identity = this._totemService.getIdentity();
        this._route.queryParams.subscribe(function (params) {
            _this.salida = params['salida'] || null;
            _this.llegada = params['llegada'] || null;
            _this.fechaSalida = params['fech'] || null;
            _this.claveViaje = params['clave'] || null;
            _this.tarifa = params['tarifa'] || null;
            _this.asientosAdulto = params['asientosAdulto'] || null;
            _this.asientosNinio = params['asientosNinio'] || null;
            _this.asientosInapam = params['asientosInapam'] || null;
        });
    };
    PagoRegresoComponent.prototype.vuelveConParametros = function () {
        this._router.navigate(['asientos'], {
            queryParams: {
                salida: this.salida,
                llegada: this.llegada,
                fech: this.fechaSalida,
                clave: this.claveViaje,
                tarifa: this.tarifa,
                asientosAdulto: this.asientosAdulto,
                asientosNinio: this.asientosNinio,
                asientosInapam: this.asientosInapam
            }
        });
    };
    PagoRegresoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pago-regreso',
            template: __webpack_require__(/*! ./pago-regreso.component.html */ "./src/app/pago-regreso/pago-regreso.component.html"),
            styles: [__webpack_require__(/*! ./pago-regreso.component.css */ "./src/app/pago-regreso/pago-regreso.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__["TotemApisService"]])
    ], PagoRegresoComponent);
    return PagoRegresoComponent;
}());



/***/ }),

/***/ "./src/app/pago/pago.component.css":
/*!*****************************************!*\
  !*** ./src/app/pago/pago.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import \"~bootstrap/dist/css/bootstrap.css\";\n@import \"~font-awesome/css/font-awesome.css\";\nYou can add global styles to this file, and also import other style files */\n\n\nh3 {\n  text-align: center;\n}\n\n\nh2.lefty{\n  text-align: left;\n}\n\n\n.formulario{\n  background: #000; \n  opacity: .90;\n  letter-spacing: 2px;\n  font-family: Myriad Pro Regular;\n  overflow: hidden;\n  color: white;\n}\n\n\nul{\n  list-style-type: none;\n  font-family: Myriad Pro Regular;\n  padding-left: 10%;\n}\n\n\n/*Fondo de rayas*/\n\n\n.fondo1{\n  margin-left: -15px;\n  margin-right: -15px;\n  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/ParallaxBack.png);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n\n\nform{\n  position: relative;\n  width: 800px;\n  margin:0 auto;\n}\n\n\nbody {\n     \n      padding-top: 230px;\n\t\t}\n\n\n.event{\n\t\t\tborder-radius: 4px;\n\t\t\twidth: 600px;\n\t\t\theight: 225px;\n            margin: 40px auto 0;\n\t\t}\n\n\n.event-side{\n\t\t\tpadding: 10px;\n            border-radius: 4px;\n            border: 20px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: calc(15% - 1px);\n\t\t\tbox-shadow: 1px 2px 2px -1px rgb(90, 88, 88);\n\t\t\tbackground: white;\n\t\t\tz-index: 1000;\n\t\t\tborder-bottom-right-radius: 10px;\n\t\t\tborder-top-right-radius: 10px;\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tfont-size: 0.8em;\n\t\t\ttext-align: right;\n    }\n\n\n.cut-out{\n\t\t\tborder-radius: 1000px;\n\t\t\twidth: 100%;\n\t\t\theight: 40%;\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: -60%;\n\t\t\ttop: 25%;\n\t\t  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/ParallaxBack.png);\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      overflow: hidden;\n\t\t\tbox-shadow: inset -1px 2px 2px -1px #888\n\t\t}\n\n\n.event-body {\n\t\t\tborder-radius: 4px;\n\t\t\tfloat: left;\n\t\t\theight: 100%;\n\t\t\twidth: 85%;\n\t\t\tbox-shadow: 0 2px 2px -1px #888;\n\t\t\tbackground:white;\n\t\t\tpadding-right: 10px;\n\t\t\tborder-bottom-left-radius: 10px;\n\t\t\tborder-top-left-radius: 10px; \n        }\n\n\n.boleto {\n            margin: 5px;\n        }\n\n\n.origen-destino {\n            text-align: center!important;\n            margin-bottom: 5px;\n        }\n\n\n.tarifa-asiento {\n            text-align: center!important;\n        }\n\n\n.fecha {\n            color: rgb(153, 4, 4);\n            font-weight: bold;\n        }\n\n\n.cliente {\n            color: rgb(54, 53, 53);\n            font-weight: bold;\n        }\n\n\n.txt-blue {\n            color: #148abd;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\n\n.dark-blue {\n            color: #002958;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n\n\n.black {\n            font-size: 18px;\n            color: #000;\n            letter-spacing: 2px;\n            font-weight: bold;\n        }\n       \n\n"

/***/ }),

/***/ "./src/app/pago/pago.component.html":
/*!******************************************!*\
  !*** ./src/app/pago/pago.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"container\" class=\"fondo1\">\n  <header></header>\n\n  <div class=\"row\">\n      <div class=\"col-md-6 text-center\">\n          <br><br>\n          <button (click)='vuelveConParametros()' type=\"button\" class=\"btn btn-primary btn-lg\">Regresar</button>\n          <br><br><br>\n      </div>\n  \n      <div class=\"col-md-6 text-center\">\n          <br><br>\n          <button [routerLink]=\"['/donde-llegas']\" type=\"button\" class=\"btn btn-danger btn-lg\">Salir</button>\n          <br><br><br>\n      </div>\n  </div>\n\n\n  <section class=\"formulario\">\n    <br>\n    <h3>Llena tus datos</h3><br>\n    <form>\n    <div class=\"container box\">\n      <table>\n        <tr>\n          <th>\n              Nombre(s):\n          </th>\n          <th>\n              Apellidos:\n          </th>\n          <th>\n              Correo electrónico:\n          </th>\n        </tr>\n\n        <tr>\n          <th>\n              <input type = \"text\" [formControl]=\"name\" style=\"width:250px; height: 40px; margin:0 auto;\">\n          </th>\n          <th>\n              <input type = \"text\" [formControl]=\"lastName\" style=\"width:250px; height: 40px; margin:0 auto;\">\n          </th>\n          <th>\n              <input type = \"text\" [formControl]=\"email\" style=\"width:250px; height: 40px; margin:0 auto;\" placeholder=\"ejemplo@ejemplo.com\">\n          </th>\n        </tr>\n      </table>\n    </div>\n  </form>\n    <br>\n    <div class=\"fondo1 text-center\">\n      <div class=\"card-header\">\n        Estrella Roja\n      </div>\n      <div class=\"event\">\n        <div class=\"event-side\">\n          <div class=\"cut-out\"></div>\n        </div>\n        <div class=\"event-body\">\n          <div class=\"boleto black\">\n            Boleto Sencillo\n          </div>\n          <div class=\"fecha\">\n            <h5>{{ today | date:'short' }}</h5>\n          </div>\n          <div class=\"cliente\">\n            Nombre: {{ name.value }} {{ lastName.value}}\n          </div>\n          <div class=\"cliente\">\n            Email: {{ email.value }}\n          </div>\n          <div class=\"origen-destino txt-blue\">\n            PUE - AEROPUERTO\n          </div>\n          <div class=\"d-flex justify-content-around\">\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Tarifa:</h6>\n              <h6 class=\"dark-blue\">$300</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Descuento:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n            <div class=\"tarifa-asiento d-flex justify-content-around\">\n              <h6 class=\"dark-blue\">Total:</h6>\n              <h6 class=\"dark-blue\">$0</h6>\n            </div>\n          </div>\n          <div class=\"tarifa-asiento d-flex justify-content-around\">\n            <h6 class=\"dark-blue\">Asiento:</h6>\n            <h6 class=\"dark-blue\">20</h6>\n          </div>\n          <div class=\"back\"></div>\n        </div>\n      </div>\n      <br><br><br>\n      <div class=\"card-footer text-muted\">\n        Aeropuerto\n      </div>\n    </div>\n    <br>\n    <div class=\"container box text-center\" style=\"width:700px; margin:0 auto; border:1px solid #cecece;\">\n        <h5>Pago</h5>\n        <br>\n        <h6>Paga y recibe tu boleto en tu correo electrónico</h6>\\\n        <h2 *ngIf=\"paypalLoad\">Cargando...</h2> \n          <div id=\"paypal-button-container\" class=\"text-center\"></div>\n    </div>\n  </section>\n</div>\n<br>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pago/pago.component.ts":
/*!****************************************!*\
  !*** ./src/app/pago/pago.component.ts ***!
  \****************************************/
/*! exports provided: PagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoComponent", function() { return PagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/totem-apis.service */ "./src/app/services/totem-apis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagoComponent = /** @class */ (function () {
    function PagoComponent(_route, _router, _totemService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._totemService = _totemService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.today = Date.now();
        this.addScript = false;
        this.paypalLoad = false;
        this.finalAmount = 1;
        this.paypalconfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AWXKT42pvW0yB-LHRMphM2t-rn4FS9pIldA7DYZdCaziB_bMeGXNsDeQYtXjleYxtM0K38aCTWwEwLGs'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.finalAmount, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    //do somenthing when payment is successful
                });
            }
        };
    }
    PagoComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalconfig, '#paypal-button-container');
                _this.paypalLoad = false;
            });
        }
    };
    PagoComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    PagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identity = this._totemService.getIdentity();
        this._route.queryParams.subscribe(function (params) {
            _this.salida = params['salida'] || null;
            _this.llegada = params['llegada'] || null;
            _this.fechaSalida = params['fech'] || null;
            _this.claveViaje = params['clave'] || null;
            _this.tarifa = params['tarifa'] || null;
            _this.asientosAdulto = params['asientosAdulto'] || null;
            _this.asientosNinio = params['asientosNinio'] || null;
            _this.asientosInapam = params['asientosInapam'] || null;
        });
    };
    PagoComponent.prototype.vuelveConParametros = function () {
        this._router.navigate(['asientos'], {
            queryParams: {
                salida: this.salida,
                llegada: this.llegada,
                fech: this.fechaSalida,
                clave: this.claveViaje,
                tarifa: this.tarifa,
                asientosAdulto: this.asientosAdulto,
                asientosNinio: this.asientosNinio,
                asientosInapam: this.asientosInapam
            }
        });
    };
    PagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pago',
            template: __webpack_require__(/*! ./pago.component.html */ "./src/app/pago/pago.component.html"),
            styles: [__webpack_require__(/*! ./pago.component.css */ "./src/app/pago/pago.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_totem_apis_service__WEBPACK_IMPORTED_MODULE_3__["TotemApisService"]])
    ], PagoComponent);
    return PagoComponent;
}());



/***/ }),

/***/ "./src/app/rollo/rollo.component.css":
/*!*******************************************!*\
  !*** ./src/app/rollo/rollo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo1{\n  margin-left: -15px;\n  margin-right: -15px;\n  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/rentaT.jpg);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.card-header {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(250,250,0,.03);\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\n\nbutton#info {\n  margin: 0.3vw;\n  width: 13.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 8px\n}\n\nbutton#info2 {\n  margin: 0.3vw;\n  width: 13.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 8px\n}\n\n.styleInfo{\n  background-color: white;\n  color: black;\n  margin-left: -1vw;\n}\n\n.mapa{\n  width: 500px;\n  height: 350px;\n}\n\n@media screen and (max-width: 1024px) and (min-width: 700px){\n\n  button#info {\n  margin: 0.3vw;\n  width: 18.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 8px;\n  margin-left: 100px;\n}\n\nbutton#info2 {\n  margin: 0.3vw;\n  width: 20.5vw;\n  color: #17a0db;\n  padding: 5px 35px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  height: 34px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 8px;\n  margin-left: 80px;\n  align-content: center;\n}\n\n.styleInfo{\n  background-color: white;\n  color: black;\n  margin-left: -1.5vw;\n}\n\n.mapa{\n  width: 485px;\n  height: 370px;\n  margin-left: -3vw;\n}\n\n}\n\nbody{\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background: #c0392b;\n    font-family: Raleway;\n    color: white;\n    letter-spacing: 1px;\n  }\n\n.card-form{\n    width: 500px;\n    border-radius: 10px;\n    background: white;\n    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);\n  }\n\n.title{\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 40px;\n      font-size: 20px;\n      font-weight: bold;\n      color: white;\n      background: #1d4ab8 !important;\n      border-radius: 10px 10px 0 0;\n    }\n\n.form-body{\n      padding: 10px;\n    }\n\n.row{\n        display: flex;\n        justify-content: space-around;\n        padding: 10px;\n      }\n\n.input{\n          -webkit-appearance: none;\n             -moz-appearance: none;\n                  appearance: none;\n          width: 100%;\n          margin: 0 15px;\n          height: 35px;\n          padding: 5px 15px;\n          border-radius: 20px;\n          outline: none;\n          border: none;\n          background: #e8ebed;\n          color: #576366;\n          font-size: 14px;\n        }\n\n.rule{\n      height: 2px;\n      background: #e8ebed;\n      margin: 0px 35px;\n    }\n\n.form-footer{\n      margin: 0 25px 15px 25px;\n      padding: 15px 10px;}\n\n.button{\n      width: 40%;\n      display: inline-block;\n      padding: 0.5em 2.5em;\n      border-radius: 20px;\n      margin: 0 auto;\n      font-size: 12pt;\n      font-size: 1rem;\n      font-weight: 700;\n      text-align: center;\n      text-transform: uppercase;\n      background-color: transparent;\n      transition: background-color .2s;\n      color: #fff;\n      background-color: #e8132f;\n   }\n\n.text{\n      margin-top: 0px;\n      margin-bottom: 0px;\n      font-size: 18pt;\n      font-size: 1.5rem;\n      margin-bottom: 2px;\n      color: #1aa2de;\n   }\n\n.description{\n    color: #595959;\n    font-weight: bold;\n    padding-left: 0px;\n    margin-left: 0px;\n   }\n\n.fondoT{\n   \n    background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/fontoTourister.png);\n    background-position: center center;\n    background-repeat: no-repeat; \n    background-attachment: relative;\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n  }\n\n.titulo{\n    background: #000; \n    opacity: .50;\n    font-size: 85px;\n    letter-spacing: 2px;\n    text-align: center;\n    margin-top: -83vh;\n    margin-bottom: 93vh;\n    font-family: Myriad Pro Regular;\n    overflow: hidden;\n    color: white;\n  }\n\nh1{\n  font-size: 25px;\n}\n\np{\n  font-size: 16px;\n}"

/***/ }),

/***/ "./src/app/rollo/rollo.component.html":
/*!********************************************!*\
  !*** ./src/app/rollo/rollo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navabar-tourister></app-navabar-tourister>\n<div class=\"container-fluid\">\n  <div class=\"fondo1\">\n    <div class=\"row\">\n      <!--Inicio de maps y detalles-->\n      <div class=\"col-md-0 col-xl-1\"></div>\n      <div class=\"col-md-6 col-xl-5\">\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-center\">\n            <div class=\"card-form\">\n              <form class=\"detalles\">\n                <div class=\"title\">Detalles de compra</div>\n                  <div class=\"d-flex justify-content-around\">\n                    <div class=\"text\">Adulto $375</div>\n                    <div class=\"text\">Niño $365</div>\n                  </div>\n                  <div class=\"d-flex justify-content-around\">\n                    <div class=\"description\">De 13 a 59 años de edad</div>\n                    <div class=\"description\">De 90 a 120 cm de estatura</div>\n                  </div>\n                  <div class=\"form-body\">\n                    <div class=\"row\">\n                      <input class=\"input\" placeholder=\"Email\">\n                      <br>\n                      <input class=\"input\" placeholder=\"Nombre completo\">\n                    </div>\n                    <div class=\"d-flex justify-content-left row\">\n                      <input class=\"input\" placeholder=\"Total a pagar\">\n                    </div>\n                  </div>\n                  <div class=\"rule\"></div>\n                  <div class=\"form-footer\">\n                      <h2 *ngIf=\"paypalLoad\">Cargando...</h2> \n                      <div id=\"paypal-button-container\" class=\"text-center\"></div>\n                  </div>\n                </form>\n              </div>              \n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-xl-5\">\n        <div class=\"map-iframe\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.667492585968!2d-99.1562241!3d18.6340475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9b80b191584d53c!2sParque+Acu%C3%A1tico+%22El+Rollo%22!5e0!3m2!1ses-419!2smx!4v1490720556018\" class=\"mapa\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>           \n        </div>\n      </div>\n      <div class=\"col-md-0 col-xl-1\"></div>\n\n      <!--Termino de maps y detalles de compra-->\n\n      <!-- Inicio de los 2 botones -->\n      <div class=\"col-md-1 col-xl-1\"></div>\n      <div class=\"col-md-10 col-xl-10\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6 col-xl-6\" align=\"center\">\n            <button id=\"info\" type=\"button\" (click)=\"muestraDetalle();\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Detalles\n            </button>\n          </div>\n          <div class=\"col-md-6 col-xl-6\" >\n            <button  id=\"info2\" type=\"button\" (click)=\"muestraInfo();\" [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseBasic\">Información General\n            </button>\n          </div>          \n        </div>\n\n      </div>\n      <div class=\"col-md-1 col-xl-1\"></div>\n\n      <!--Fin de los 2 botones-->\n\n      <!--Inicio de info general-->\n      <div class=\"col-md-1 col-xl-2\"></div>\n\n      <div class=\"col-md-10 col-xl-8\">\n        <div class=\"row\">\n            <div id=\"collapseBasic\" [collapse]=\"isCollapsed\" class=\"card card-block card-header\">\n              <div class=\"row styleInfo\">\n                <div class=\"col-md-2 col-xl-2\">\n                <i class=\"fas fa-map-marked-alt fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>UBICACIÓN</h1>\n                <p>Tlaquiltenango, Morelos</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"far fa-check-square fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>INCLUYE</h1>\n                <p>Entrada al parque acuático El Rollo (acceso general)\n                  <br>Viaje Redondo (ida y vuelta)\n                  <br>Seguro de viajero</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"far fa-times-circle fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>NO INCLUYE</h1>\n                <p>Servicio dentro de El Rollo con costo adicional: Zona Vip, Ola de surfing, toldos, mesas, lockers y vestidores, alimentos y bebidas.</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"fas fa-bus fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>HORA DE SALIDA</h1>\n                <p>07:10 hrs. desde Terminal 4 Pte. Puebla.</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"fas fa-bus fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>HORA APROXIMADA DE LLEGADA</h1>\n                <p>21:00 hrs. a Terminal 4 Pte. Puebla.</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"fas fa-ticket-alt fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>COSTO</h1>\n                <p>$530 pesos Adulto - $530 pesos niños.</p>\n              </div>\n\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"far fa-clock fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>DURACIÓN</h1>\n                <p>14 hrs</p>\n              </div>\n              </div>\n            </div>                   \n        </div>\n\n        <div class=\"row\">\n          <div id=\"collapseBasic\" [collapse]=\"isCollapsed2\" class=\"card card-block card-header\">\n            <div class=\"row styleInfo\">\n              <div class=\"col-md-2 col-xl-2\">\n                <i class=\"far fa-map fa-4x\"></i>\n              </div>\n              <div class=\"col-md-10 col-xl-10\">\n                <h1>TOUR</h1>\n                <p>Vive una emocionante experiencia en las atracciones más extremas y de adrenalina.Reta a tus amigos y deslízate en un escalofriante descenso que empieza a 25 metros de altura en el Stuka o si no le tienes miedo a la oscuridad, recorre el Bubbatubo acompañado con tus 4 mejores amigos y sorpréndete. Atracciones familiares en la divertida isla infantil, un diluvio de alegría de emoción o un inolvidable viaje en el Río con Olas donde atravesarás más de 300 metros. ¡Wow!\n\n                EL ROLLO (VILLA) VIP : Entrada a vip tendrá que ser directamente en el parque, esta zona incluye villas de capacidad para 10 personas, estancia ventilada, baño completo con agua caliente, barra, jacuzzi, muebles de jardín, hamaca, camastros y TV.       \n                </p>\n              </div>\n            </div>\n          </div> \n        </div>\n\n      </div>\n\n      <div class=\"col-md-1 col-xl-2\"></div>\n\n      <!--Fin  de info general-->\n    </div>\n  </div>\n</div>\n<app-footer-tourister></app-footer-tourister>\n\n\n   \n"

/***/ }),

/***/ "./src/app/rollo/rollo.component.ts":
/*!******************************************!*\
  !*** ./src/app/rollo/rollo.component.ts ***!
  \******************************************/
/*! exports provided: RolloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolloComponent", function() { return RolloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RolloComponent = /** @class */ (function () {
    function RolloComponent() {
        var _this = this;
        this.isCollapsed = false;
        this.isCollapsed2 = true;
        this.addScript = false;
        this.paypalLoad = false;
        this.finalAmount = 1;
        this.paypalconfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AWXKT42pvW0yB-LHRMphM2t-rn4FS9pIldA7DYZdCaziB_bMeGXNsDeQYtXjleYxtM0K38aCTWwEwLGs'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.finalAmount, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    //do somenthing when payment is successful
                });
            }
        };
    }
    RolloComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    RolloComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalconfig, '#paypal-button-container');
                _this.paypalLoad = false;
            });
        }
    };
    RolloComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    RolloComponent.prototype.ngOnInit = function () {
    };
    RolloComponent.prototype.muestraDetalle = function () {
        if (this.isCollapsed == true && this.isCollapsed2 == false) {
            this.isCollapsed = false;
            this.isCollapsed2 = true;
        }
    };
    RolloComponent.prototype.muestraInfo = function () {
        if (this.isCollapsed2 == true && this.isCollapsed == false) {
            this.isCollapsed = true;
            this.isCollapsed2 = false;
        }
    };
    RolloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rollo',
            template: __webpack_require__(/*! ./rollo.component.html */ "./src/app/rollo/rollo.component.html"),
            styles: [__webpack_require__(/*! ./rollo.component.css */ "./src/app/rollo/rollo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RolloComponent);
    return RolloComponent;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://localhost:3000/api/',
    ip: '127.0.0.1'
};


/***/ }),

/***/ "./src/app/services/totem-apis.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/totem-apis.service.ts ***!
  \************************************************/
/*! exports provided: TotemApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotemApisService", function() { return TotemApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TotemApisService = /** @class */ (function () {
    function TotemApisService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    TotemApisService.prototype.getIDFromLogin = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.get(this.url + 'get-login-id', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TotemApisService.prototype.getServerStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.get(this.url + 'get-server-status', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TotemApisService.prototype.getCorridas = function (parametros) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this._http.get(this.url + 'get-corridas-id/' + parametros.salida + '/' + parametros.llegada + '/' + parametros.id + '/' + parametros.fecha, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TotemApisService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('myID'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    TotemApisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TotemApisService);
    return TotemApisService;
}());



/***/ }),

/***/ "./src/app/tourister/tourister.component.css":
/*!***************************************************!*\
  !*** ./src/app/tourister/tourister.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo1{\n  background-image: url(https://Celestepaiz.github.io/test-ER/assets/img/rentaT.jpg);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.container{\n  background-color: white;\n\n}\n\n.thumbnail{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nimg#tamanio{\n  width: 22.8vw;\n  height: 30vh;\n}\n\n@media screen and (max-width: 1024px) and (min-width: 700px){\n  .container-fluid{\n    margin-left: -0.7vw;\n  }\n\n  img#tamanio{\n    width: 28vw;\n    height: 20vh;\n  }\n}\n"

/***/ }),

/***/ "./src/app/tourister/tourister.component.html":
/*!****************************************************!*\
  !*** ./src/app/tourister/tourister.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navabar-tourister></app-navabar-tourister>\n<div class=\"container-fluid\">\n  <div class=\"fondo1\">\n    <br>\n    <div class=\"row\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/a98dbb77f8fcc3938817021a7a61f2cbe75fa7d3.png\">\n              <div class=\"caption\">\n                <h2><strong>EL ROLLO</strong> </h2> \n                <h3>$530</h3>\n                <p><strong>Tlaquiltenango, Morelos</strong></p>\n                <button [routerLink]=\"['/rollo']\" type=\"button\" class=\"btn btn-success\">QUIERO IR</button>                \n              </div>              \n            </div>            \n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/c4e498191dcedcf22e340c9ad1d0eb94b8d68077.png\">\n              <div class=\"caption\">\n                <h2><strong>VUELO EN GLOBO</strong> </h2>\n                <h3>$2915</h3>\n                <!--Text-->\n                <p><strong>Teotihuacan, CDMX</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>                \n              </div>              \n            </div>\n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/bae759859a145121894844dd7208ff595ec685c8.png\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>AFRICAM SAFARI</strong> </h2>\n                <h3>$375</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>Puebla, Puebla</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>                \n              </div>              \n            </div>\n          </div>\n\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/8279d52a00acd96234622491453ee41c27238eb4.png\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>LA VILLA Y CHAPULTEPEC</strong> </h2>\n                <h3>$389</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>CDMX</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>               \n              </div>              \n            </div>            \n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/67ab92000b1ab156e11796b7a9de7d0c0f3ae8ba.jpg\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>HURRICANE HARBOR</strong> </h2>\n                <h3>$500</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>Oaxtepec, Morelos</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>               \n              </div>              \n            </div>\n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/ee9030ac906d181271fc1aac4cfa570b57084496.jpg\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>SIX FLAGS FESTIVAL DEL TERROR</strong> </h2>\n                <h3>$849</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>CDMX</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>              \n              </div>              \n            </div>\n          </div>\n\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/8279d52a00acd96234622491453ee41c27238eb4.png\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>LA VILLA Y CHAPULTEPEC</strong> </h2>\n                <h3>$389</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>CDMX</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>               \n              </div>              \n            </div>            \n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/67ab92000b1ab156e11796b7a9de7d0c0f3ae8ba.jpg\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>HURRICANE HARBOR</strong> </h2>\n                <h3>$500</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>Oaxtepec, Morelos</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>               \n              </div>              \n            </div>\n          </div>\n          <div class=\"col-md-4 col-xl-4\">\n            <div class=\"thumbnail\">\n              <img id=\"tamanio\" src=\"https://www.tourister.com.mx/multimedia/imagenes/destino/ee9030ac906d181271fc1aac4cfa570b57084496.jpg\">\n              <div class=\"caption\">\n                <h2 class=\"card-title\"><strong>SIX FLAGS FESTIVAL DEL TERROR</strong> </h2>\n                <h3>$849</h3>\n                <!--Text-->\n                <p class=\"card-text\"><strong>CDMX</strong></p>\n                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                <button type=\"button\" class=\"btn btn-success\">QUIERO IR</button>              \n              </div>              \n            </div>\n          </div>\n\n        </div>        \n      </div>      \n    </div>\n    <br>\n  </div>\n</div>\n\n<app-footer-tourister></app-footer-tourister>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/tourister/tourister.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tourister/tourister.component.ts ***!
  \**************************************************/
/*! exports provided: TouristerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristerComponent", function() { return TouristerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TouristerComponent = /** @class */ (function () {
    function TouristerComponent() {
    }
    TouristerComponent.prototype.ngOnInit = function () {
    };
    TouristerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tourister',
            template: __webpack_require__(/*! ./tourister.component.html */ "./src/app/tourister/tourister.component.html"),
            styles: [__webpack_require__(/*! ./tourister.component.css */ "./src/app/tourister/tourister.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TouristerComponent);
    return TouristerComponent;
}());



/***/ }),

/***/ "./src/app/views/footer.html":
/*!***********************************!*\
  !*** ./src/app/views/footer.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <!--foote_bottom_ul_amrc ends here-->\n\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-3\" style=\"text-align: center\">\n      <img src=\"../../assets/img/tuviaje.png\">\n    </div>\n    <div class=\"col-lg-2\" style=\"text-align: center\">\n      <img src=\"../../assets/img/sello.png\">\n    </div>\n    <div class=\"col-lg-2\">\n      <p class=\"text-center\">(222) 273 8300</p>\n    </div>\n    <div class=\"col-lg-2\">\n      <p class=\"text-center\">© Copyright 2018 Aeropuerto ER</p>\n    </div>\n  </div>\n  <br>\n  <!--social_footer_ul ends here-->\n</footer>\n"

/***/ }),

/***/ "./src/app/views/home.html":
/*!*********************************!*\
  !*** ./src/app/views/home.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to TOTEM Estrella Roja\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2 style=\"text-align:center\">Está será la página principal del proyecto</h2>\n"

/***/ }),

/***/ "./src/app/views/navbar.html":
/*!***********************************!*\
  !*** ./src/app/views/navbar.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo1\">\n\t<video class=\"video\" onloadedmetadata=\"this.muted=true\" autoplay loop>\n \t\t<source src=\"assets/img/video.ogg\" type=\"video/ogg\">\n\t</video>\n</div>"

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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/surielasaelrosasmendez/Documents/ITESM-Puebla/ProyectoIntegrador/GitHub/test-ER/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map