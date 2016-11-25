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
var data_service_1 = require('../core/services/data.service');
var CustomersComponent = (function () {
	function CustomersComponent(dataService){
		this.dataService = dataService;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
	}
	CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.ngOnInit = function () {
    	var _this = this;
    	this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.dataService.getCustomers()
            .subscribe(function (customers) {
            _this.customers = _this.filteredCustomers = customers;
        });
    }
    CustomersComponent.prototype.filterChanged = function (data) {
    	console.log(data)
    }
	CustomersComponent = __decorate([
			core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: 'customers.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
		],CustomersComponent);
	return CustomersComponent;
})();
exports.CustomersComponent = CustomersComponent;
var DisplayModeEnum;
(function(){
	DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));