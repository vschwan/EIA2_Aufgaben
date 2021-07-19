namespace L11_Virus {

    export abstract class Moveable {

        public position: Vector;
        protected velocity: Vector;
        protected hitRadius: number = 0;

        public constructor(_position: Vector) {
            // this.position = _position;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);

        }

        public isHitBy(_partner: Moveable): boolean {
            //let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            let difference: Vector = Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;

            return true;
        }

        public hit(): void { //standardverhalten eines moveable bei kollision
            console.log("Hit", this);
           // this.expendable = true;
        }

        abstract draw(): void;

        public move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

        }

    }


}