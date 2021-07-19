namespace footballSimulation {

    export abstract class Moveables {

        public position: Vector;
        protected velocity: Vector;
        public newBallPos: Vector;
        speed: number;
        // public followBall: Vector;


        constructor(_position?: Vector, _velocity?: Vector) {

            if (_velocity)
                this.velocity = _velocity.copy();

            if (_position)
                this.position = _position.copy();

        }

        public abstract draw(): void;

        public move(_newBallpos: Vector): void {
           

        }

    }
}


