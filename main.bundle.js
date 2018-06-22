webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <a href=\"/\" class=\"navbar-brand\">\r\n    <span>\r\n      <img width=\"80\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n    </span>\r\n    {{ title }}\r\n  </a>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <!-- Lista de empleados -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 mt-4 mx-auto\">\r\n      <ul class=\"list-group\">\r\n        <li \r\n          *ngFor=\"let empleado of empleadoArray\" \r\n          class=\"list-group-item list-group-item-action\"\r\n          (click)=\"onSelectEmployee(empleado)\"\r\n          [class.active]=\"empleado === empleadoSeleccionado\"\r\n        >\r\n          <span class=\"badge badge-dark\">\r\n            {{ empleado.id }}\r\n          </span>\r\n          {{ empleado.nombre }} - {{ empleado.pais }}\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Formulario de empleados -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 mt-4 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Empleados\r\n        </div>\r\n        \r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <input \r\n              type=\"text\" class=\"form-control\" placeholder=\"Nombre\"\r\n              [(ngModel)]=\"empleadoSeleccionado.nombre\"\r\n              >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input \r\n              type=\"text\" class=\"form-control\" placeholder=\"País\"\r\n              [(ngModel)]=\"empleadoSeleccionado.pais\" \r\n              >\r\n          </div>\r\n\r\n          <button class=\"btn btn-primary\" (click)=\"onSave()\">\r\n            Guardar\r\n          </button>\r\n          <button \r\n            class=\"btn btn-danger\" \r\n            (click)=\"onDelete()\"\r\n            *ngIf=\"empleadoSeleccionado.id !== 0\"\r\n          >\r\n            Eliminar\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_empleado__ = __webpack_require__("../../../../../src/app/models/empleado.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CRUD de empleados';
        this.empleadoArray = [
            { id: 1, nombre: 'Gabriel', pais: 'Venezuela' },
            { id: 2, nombre: 'Gabriela', pais: 'Argentina' },
            { id: 3, nombre: 'Julio', pais: 'Venezuela' },
            { id: 4, nombre: 'Larry', pais: 'Argentina' },
            { id: 5, nombre: 'Lyra', pais: 'Venezuela' },
        ];
        this.empleadoSeleccionado = new __WEBPACK_IMPORTED_MODULE_1__models_empleado__["a" /* Empleado */]();
    }
    AppComponent.prototype.onSelectEmployee = function (empleado) {
        this.empleadoSeleccionado = empleado;
        console.log(this.empleadoSeleccionado.id);
    };
    AppComponent.prototype.onSave = function () {
        if (this.empleadoSeleccionado.id === 0) {
            this.empleadoSeleccionado.id = this.empleadoArray.length + 1;
            this.empleadoArray.push(this.empleadoSeleccionado);
        }
        else {
            // Actualmente está modificando directamente en el arreglo
        }
        this.empleadoSeleccionado = new __WEBPACK_IMPORTED_MODULE_1__models_empleado__["a" /* Empleado */]();
    };
    AppComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm('Eliminar este empleado?')) {
            this.empleadoArray = this.empleadoArray
                .filter(function (item) { return item !== _this.empleadoSeleccionado; });
        }
        this.empleadoSeleccionado = new __WEBPACK_IMPORTED_MODULE_1__models_empleado__["a" /* Empleado */]();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/empleado.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empleado; });
var Empleado = /** @class */ (function () {
    function Empleado() {
        this.id = 0;
    }
    return Empleado;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map