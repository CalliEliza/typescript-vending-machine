/**
 * Created by chewy on 1/17/17.
 */
/// <reference path ="productCategory.ts" />

   interface Product {
       name: string;
       price: number;
       category?: ProductCategory;
}

class Initial implements Product {
       name= "Please select a product";
       price= 0;
}

class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class MilkWay implements Product {
       name: string = "Milk Way";
       price = 1.80;
       category = new CandyBarCategory();
}

class Hersey implements Product {
       name: string = "Hersey's";
       price = 1.30;
       category = new CandyBarCategory();
}

class Gummies implements Product {
       name: string = "Gummies";
       price = 1.90;
       category = new CandyCategory();
}

class Fanta implements Product {
       name: string = "Fanta";
       price = 2.00;
       category = new SodaCategory();
}

class Sprite implements Product {
       name: string = "Sprite";
       price = 1.80;
       category = new SodaCategory();
}

class Peanuts implements Product {
       name: string = "Peanuts";
       price = 1.50;
       category = new NutsCategory();
}

class Plain implements Product {
       name: string = "Plain";
       price = 1.00;
       category = new ChipsCategory();
}

class Cheddar implements Product {
    name: string = "Cheddar";
    price = 1.00;
    category = new ChipsCategory();
}


class Cashews implements Product {
    name: string = "Cashews";
    price = 1.00;
    category = new NutsCategory();
}


class Mints implements Product {
    name: string = "Mints";
    price = .75;
}