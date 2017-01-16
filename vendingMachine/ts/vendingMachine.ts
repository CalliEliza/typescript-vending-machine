/**
 * Created by chewy on 1/14/17.
 */

class VendingMachine {
    private paid = ko.observable(0);
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}
