namespace L10_Virus {

    export class Moveable {

        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);

        }

        draw(): void {
            //console.log("drawmoveable");
        }

        move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

        }

    }


}