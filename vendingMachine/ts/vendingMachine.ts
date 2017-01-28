/**
 * Created by chewy on 1/14/17.
 */
/// <reference path ="./coin.ts" />
/// <reference path ="typings/knockout.d.ts" />
/// <reference path ="./product.ts" />
/// <reference path="productFactory.ts" />

    enum VendingMachineSize {
        small =6,
        medium = 9,
        large = 12
    }

class Cell {
    constructor (public product: CocaCola) {

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new CocaCola()));
    cells = ko.observableArray([]);
    acceptedCoins: Quarter[] = [new Quarter()];
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

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}
