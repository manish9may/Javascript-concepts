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
var CustomersCardComponent = (function () {
	function CustomersCardComponent(trackby){
		this.trackby = trackby;
        this.customers = [];
	}
	CustomersCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
          core_1.Input(),
        __metadata('design:type', Array)
    ], CustomersCardComponent.prototype, "customers", void 0);
    CustomersCardComponent = __decorate([
    	core_1.Component({
    		moduleId: module.id,
            selector: 'customers-card',
            templateUrl: 'customers-card.component.html'
        }),
        __metadata('design:paramtypes', [])
    	],CustomersCardComponent);
    return CustomersCardComponent;
})();

exports.CustomersCardComponent = CustomersCardComponent;