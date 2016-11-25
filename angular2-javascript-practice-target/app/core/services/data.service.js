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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DataService = (function () {
	function DataService(http){
		this.http = http;
        this.customersBaseUrl = '/api/customers';
        this.ordersBaseUrl = '/api/orders';
	}
	DataService.prototype.getCustomers = function () {
		var _this = this;
        return this.http.get(this.customersBaseUrl)
            .map(function (res) {
            _this.customers = res.json();
            return _this.customers;
        })
        .catch(this.handleError);
	}
	DataService.prototype.handleError = function (error) {
		console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
	}
	DataService = __decorate([
          //core_1.Injectable(),
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
})();

exports.DataService = DataService;