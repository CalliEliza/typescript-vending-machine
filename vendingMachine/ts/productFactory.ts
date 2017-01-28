/**
 * Created by chewy on 1/17/17.
 */
/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }
}