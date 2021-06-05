"use strict";
var L10_1_Farm;
(function (L10_1_Farm) {
    class Dog extends L10_1_Farm.Animal {
        constructor() {
            super();
            this.type = "dog";
            this.food = "meat";
            this.amntFood = 40;
            this.hunger = 15;
            this.sound = "woof";
            this.specialAction = "jumps playfully";
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
    L10_1_Farm.Dog = Dog;
})(L10_1_Farm || (L10_1_Farm = {}));
//# sourceMappingURL=dog_farm.js.map