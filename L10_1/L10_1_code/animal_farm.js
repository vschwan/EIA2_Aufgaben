"use strict";
var L10_1_Farm;
(function (L10_1_Farm) {
    class Animal {
        sing() {
            return "<br>" + this.type + " sings: <br> Old MacDonald had a farm, E-I-E-I-O <br>" +
                "and on his farm he had a " + this.type + ", E-I-E-I-O <br>" +
                "with a " + this.sound + this.sound + " here and a " + this.sound + this.sound + " there <br> here a "
                + this.sound + ", there a " + this.sound + " everywhere a " + this.sound + "<br> old Mac Donald had a farm E - I - E - I - O";
        }
        eat() {
            //console.log("animal eats");
            this.amntFood -= this.hunger;
            return this.type + " ate " + this.hunger + " " + this.food + ". " + this.amntFood + " " + this.food + " left.";
        }
        doSpecialAction() {
            return this.type + " " + this.specialAction;
        }
    }
    L10_1_Farm.Animal = Animal;
})(L10_1_Farm || (L10_1_Farm = {}));
//# sourceMappingURL=animal_farm.js.map