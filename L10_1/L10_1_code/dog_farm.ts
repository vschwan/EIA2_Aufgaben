namespace L10_1_Farm {


    export class Dog extends Animal {


        constructor() {
            super();

            this.type = "dog";
            this.food = "meat";
            this.amntFood = 40;
            this.hunger = 15;
            this.sound = "woof";
            this.specialAction = "jumps playfully";

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