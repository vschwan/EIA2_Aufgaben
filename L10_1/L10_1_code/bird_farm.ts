namespace L10_1_Farm {


    export class Bird extends Animal {


        constructor() {
            super();

            this.type = "bird";
            this.food = "fruit";
            this.hunger = 5;
            this.amntFood = 15;
            this.sound = "cheep";
            this.specialAction = "flies around";

        }

        sing(): string {
            return super.sing();

        }

        eat(): string {
            return super.eat();
        }

        doSpecialAction(): string {
            return super.doSpecialAction();
        }
    }





}