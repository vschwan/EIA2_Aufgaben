namespace L09_Test {

    class Vector {
        y: number = 0;
        x: number = 0;

        constructor(_x: number, _y: number) {


            this.set(_x, _y);
        }
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void { //method
            this.x += _addend.x;
            this.y += _addend.y;
        }

    }


    let v1: Vector = new Vector(2, 2); //v1 = object //mit new Vector wird eine Instanz der Klasse geschaffen= Instanzierung 
    v1.scale(2);
    
    console.log(v1);

}