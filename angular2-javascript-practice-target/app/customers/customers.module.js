"use strict";
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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var customers_routing_1 = require('./customers.routing');
var data_service_1 = require('../core/services/data.service');
var http_1 = require('@angular/http');
var CustomersModule = (function () {
	function CustomersModule(){};
	CustomersModule = __decorate([
		core_1.NgModule({
            imports: [common_1.CommonModule, customers_routing_1.customersRouting.routes,forms_1.FormsModule,http_1.HttpModule],
            declarations: [customers_routing_1.customersRouting.components],
            providers : [data_service_1.DataService]
        }),
        __metadata('design:paramtypes', [])
	],CustomersModule)
	return CustomersModule;
})();
exports.CustomersModule = CustomersModule;

