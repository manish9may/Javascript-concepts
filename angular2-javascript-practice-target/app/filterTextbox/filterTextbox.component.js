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
var FilterTextboxComponent = (function () {
	function FilterTextboxComponent(){
		this.model = { filter: null };
        this.changed = new core_1.EventEmitter();
	}
	FilterTextboxComponent.prototype.filterChanged = function (event) {
		event.preventDefault();
		this.changed.emit(this.model.filter); //Raise changed event
	}
	__decorate([
          core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FilterTextboxComponent.prototype, "changed", void 0);
	FilterTextboxComponent = __decorate([
		core_1.Component({
			moduleId: module.id,
            selector: 'filter-textbox',
            templateUrl: "filter-textbox.html"
        }),
        __metadata('design:paramtypes', [])
	],FilterTextboxComponent);
	return FilterTextboxComponent;
})();
exports.FilterTextboxComponent = FilterTextboxComponent;