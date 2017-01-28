/**
 * Created by chewy on 1/14/17.
 */

namespace Coins {

    let imagePath = "img/";

    export abstract class Coin {
        abstract getImageUrl(): string;

        value: number;

        constructor(value: number) {
            this.value = value;
        }
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }

        getImageUrl(): string {
            return imagePath+"Quarter.png";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }

        getImageUrl() {
            return imagePath+"Dime.png";
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.50);
        }

        getImageUrl() {
            return imagePath+"Half.png";
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }
        getImageUrl() {
            return imagePath+"Dollar.jpg";
        }
    }

}