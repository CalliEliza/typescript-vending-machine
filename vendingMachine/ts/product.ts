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