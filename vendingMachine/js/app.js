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
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
/**
 * Created by chewy on 1/14/17.
 */
var VendingMachine = (function () {
    function VendingMachine() {
    }
    return VendingMachine;
}());
//# sourceMappingURL=app.js.map