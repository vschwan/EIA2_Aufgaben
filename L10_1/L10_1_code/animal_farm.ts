namespace L10_1_Farm {

    export class Animal {

        type: string;
        food: string;
        amntFood: number;
        hunger: number;
        sound: string;
        specialAction: string;



        sing(): string {
            return "<br>" + this.type + " sings: <br> Old MacDonald had a farm, E-I-E-I-O <br>" +
                "and on his farm he had a " + this.type + ", E-I-E-I-O <br>" +
                "with a " + this.sound + this.sound + " here and a " + this.sound + this.sound + " there <br> here a "
                + this.sound + ", there a " + this.sound + " everywhere a " + this.sound + "<br> old Mac Donald had a farm E - I - E - I - O";

        }

        eat(): string {
            //console.log("animal eats");
            this.amntFood -= this.hunger;
            return this.type + " ate " + this.hunger + " " + this.food + ". " + this.amntFood + " " + this.food + " left.";




        }

        doSpecialAction(): string {
            return this.type + " " + this.specialAction;


        }


    }
}