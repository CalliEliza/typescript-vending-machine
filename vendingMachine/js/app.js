/**
 * Created by chewy on 1/14/17.
 */
var machine = new VendingMachine();
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
/**
 * Created by chewy on 1/14/17.
 */
var VendingMachine = (function () {
    function VendingMachine() {
        this.paid = 0;
    }
    VendingMachine.prototype.acceptCoin = function (coin) {
    };
    return VendingMachine;
}());
//# sourceMappingURL=app.js.map