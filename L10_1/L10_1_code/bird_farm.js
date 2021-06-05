"use strict";
var L10_1_Farm;
(function (L10_1_Farm) {
    class Bird extends L10_1_Farm.Animal {
        constructor() {
            super();
            this.type = "bird";
            this.food = "fruit";
            this.hunger = 5;
            this.amntFood = 15;
            this.sound = "cheep";
            this.specialAction = "flies around";
        }
        sing() {
            return super.sing();
        }
        eat() {
            return super.eat();
        }
        doSpecialAction() {
            return super.doSpecialAction();
        }
    }
    L10_1_Farm.Bird = Bird;
})(L10_1_Farm || (L10_1_Farm = {}));
//# sourceMappingURL=bird_farm.js.map