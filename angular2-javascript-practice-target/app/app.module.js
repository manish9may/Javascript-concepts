'use strict';
let __decorate,__metadata;
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var customers_module_1 = require('./customers/customers.module');
var AppModule = (function(){
	function AppModule() {

	};
	AppModule = __decorate([
		core_1.NgModule({
			imports : [platform_browser_1.BrowserModule,
						app_routing_1.app_routing,
						customers_module_1.CustomersModule],
			declarations : [app_component_1.AppComponent],
			bootstrap : [app_component_1.AppComponent]
		}),
		__metadata('design:paramtypes', [])
	],AppModule)
	return AppModule;
})();
exports.AppModule = AppModule;