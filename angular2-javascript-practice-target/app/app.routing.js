"use strict";
var router_1 = require('@angular/router');

var app_routes = [
    { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

exports.app_routing = router_1.RouterModule.forRoot(app_routes);