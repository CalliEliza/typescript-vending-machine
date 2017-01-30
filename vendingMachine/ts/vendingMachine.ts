/**
 * Created by chewy on 1/14/17.
 */
/// <reference path ="./coin.ts" />
/// <reference path ="typings/knockout.d.ts" />
/// <reference path ="typings/require.d.ts" />
/// <reference path ="./product.ts" />
/// <reference path="productFactory.ts" />


enum VendingMachineSize {
        small =6,
        medium = 9,
        large = 12
    }

class Cell {
    constructor (public product: Product) {

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Initial()));
    cells = ko.observableArray([]);
    acceptedCoins: Coins.Coin[] = [new Coins.Dollar(), new Coins.Half(), new Coins.Dime(), new Coins.Quarter()];
    canPay = ko.pureComputed(() => this.paid() -
            this.selectedCell().product.price >=0);
    set size(givenSize: VendingMachineSize) {
        this.cells([]);  //make sure cell empty

        for (let i =0;i<givenSize;++i) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }

    }

    select = (cell : Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round((( currentPaid -
                    this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}
