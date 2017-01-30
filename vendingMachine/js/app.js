var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by chewy on 1/14/17.
 */
var Coins;
(function (Coins) {
    var imagePath = "img/";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            _super.call(this, .25);
        }
        Quarter.prototype.getImageUrl = function () {
            return imagePath + "Quarter.png";
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, .10);
        }
        Dime.prototype.getImageUrl = function () {
            return imagePath + "Dime.png";
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            _super.call(this, .50);
        }
        Half.prototype.getImageUrl = function () {
            return imagePath + "Half.png";
        };
        return Half;
    }(Coin));
    Coins.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            _super.call(this, 1);
        }
        Dollar.prototype.getImageUrl = function () {
            return imagePath + "Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    Coins.Dollar = Dollar;
})(Coins || (Coins = {}));
/**
 * Created by chewy on 1/17/17.
 */
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        _super.apply(this, arguments);
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        _super.apply(this, arguments);
        this.name = "Potato chips";
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.apply(this, arguments);
        this.name = "Candy";
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.apply(this, arguments);
        this.name = "Candy bar";
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + "CandyBar.png";
    };
    return CandyBarCategory;
}(ProductCategory));
var NutsCategory = (function (_super) {
    __extends(NutsCategory, _super);
    function NutsCategory() {
        _super.apply(this, arguments);
        this.name = "Nuts";
    }
    NutsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Nuts.png";
    };
    return NutsCategory;
}(ProductCategory));
/**
 * Created by chewy on 1/17/17.
 */
/// <reference path ="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var MilkWay = (function () {
    function MilkWay() {
        this.name = "Milk Way";
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return MilkWay;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = "Hersey's";
        this.price = 1.30;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Fanta = (function () {
    function Fanta() {
        this.name = "Fanta";
        this.price = 2.00;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = "Sprite";
        this.price = 1.80;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = "Peanuts";
        this.price = 1.50;
        this.category = new NutsCategory();
    }
    return Peanuts;
}());
var Plain = (function () {
    function Plain() {
        this.name = "Plain";
        this.price = 1.00;
        this.category = new ChipsCategory();
    }
    return Plain;
}());
var Cheddar = (function () {
    function Cheddar() {
        this.name = "Cheddar";
        this.price = 1.00;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Cashews = (function () {
    function Cashews() {
        this.name = "Cashews";
        this.price = 1.00;
        this.category = new NutsCategory();
    }
    return Cashews;
}());
var Mints = (function () {
    function Mints() {
        this.name = "Mints";
        this.price = .75;
    }
    return Mints;
}());
/**
 * Created by chewy on 1/17/17.
 */
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Mints();
            case 8: return new Gummies();
            case 9: return new Hersey();
            case 10: return new MilkWay();
        }
    };
    return productFactory;
}());
/**
 * Created by chewy on 1/14/17.
 */
/// <reference path ="./coin.ts" />
/// <reference path ="typings/knockout.d.ts" />
/// <reference path ="typings/require.d.ts" />
/// <reference path ="./product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Coins.Dollar(), new Coins.Half(), new Coins.Dime(), new Coins.Quarter()];
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, we're out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid -
                _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]); //make sure cell empty
            for (var i = 0; i < givenSize; ++i) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/**
 * Created by chewy on 1/14/17.
 */
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine); //binding to knockout.js
//# sourceMappingURL=app.js.map