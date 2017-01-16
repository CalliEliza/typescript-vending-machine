/**
 * Created by chewy on 1/14/17.
 */

class Quarter {
    private value: number = .25;
    get Value() {
        return this.value;
    }
    getImageUrl(): string {
        return "img/Quarter.png";
    }
}

    let coin = new Quarter();
