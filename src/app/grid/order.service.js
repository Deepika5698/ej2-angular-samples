var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
var OrdersService = /** @class */ (function (_super) {
    __extends(OrdersService, _super);
    function OrdersService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
        return _this;
    }
    OrdersService.prototype.execute = function (state) {
        var _this = this;
        this.getData(state).subscribe(function (x) { return _super.prototype.next.call(_this, x); });
    };
    OrdersService.prototype.getData = function (state) {
        var pageQuery = "$skip=" + state.skip + "&$top=" + state.take;
        var sortQuery = '';
        if ((state.sorted || []).length) {
            sortQuery = "&$orderby=" + state.sorted.map(function (obj) {
                return obj.direction === 'descending' ? obj.name + " desc" : obj.name;
            }).reverse().join(',');
        }
        return this.http
            .get(this.BASE_URL + "?" + pageQuery + sortQuery + "&$count=true")
            .pipe(map(function (response) { return response.json(); }))
            .pipe(map(function (response) { return ({
            result: response['value'],
            count: parseInt(response['@odata.count'], 10)
        }); }))
            .pipe(function (data) { return data; });
    };
    OrdersService.decorators = [
        { type: Injectable }
    ];
    OrdersService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    return OrdersService;
}(Subject));
export { OrdersService };
//# sourceMappingURL=order.service.js.map