namespace L11_Virus {

    export class Vector {
        x: number;
        y: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public static getDifference(_v0: Vector, _v1: Vector): Vector {

            // Differenz zweier Vektoren wird berechnet und liefert den resultierenden Vektor
            /* let vector: Vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
             return vector*/

            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }

        public static getRandom(_min: number, _max: number): Vector {

            let vector: Vector = new Vector(0, 0); //neuer Vektor um ihm die folgenden Komponenten zu geben (set, scale)
            let length: number = _min + Math.random() * (_max - _min);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        
        public get length(): number {
            return Math.hypot(this.x, this.y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }

    }

}