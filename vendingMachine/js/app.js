/**
 * Created by chewy on 1/14/17.
 */
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return VendingMachine;
}());
/**
 * Created by chewy on 1/14/17.
 */
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine); //binding to knockout.js
/**
 * Created by chewy on 1/14/17.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
//# sourceMappingURL=app.js.map