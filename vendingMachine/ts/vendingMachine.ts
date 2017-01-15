/**
 * Created by chewy on 1/14/17.
 */

class VendingMachine {
    private paid = 0;
    acceptCoin = (coin: Quarter): void => {
        this.paid += coin.Value;
        var element = document.getElementById("total");
        element.innerHTML = this.paid.toString();
    }
}
