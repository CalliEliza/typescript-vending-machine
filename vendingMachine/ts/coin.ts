/**
 * Created by chewy on 1/14/17.
 */

abstract class Coin {
    abstract getImageUrl(): string;
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}

class Quarter extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl(): string {
        return "img/Quarter.png";
    }
}

class Dime extends Coin {
    constructor() {
        super(.10);
    }
    getImageUrl() {
        return "img/Dime.png";
    }
}

class Half extends Coin {
    constructor() {
        super(.50);
    }
    getImageUrl() {
        return "img/Half.png";
    }
}

class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl() {
        return "img/Dollar.jpg";
    }
}

