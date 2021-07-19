namespace footballSimulation {

    export class Player extends Moveables {

        private static radius: number = 30;
        public color: string;
        public shirtNumber: number;
        public precision: number;
        public team: string;
        public ballinRadius: boolean = false;
        public ballContact: boolean = false;
        public startPos: Vector;


        constructor(_team: string, _color: string, _shirtNumber: number, _speed: number, _position: Vector, _precision?: number) {

            super();
            this.color = _color;
            this.team = _team;
            //  this.precision = _precision;
            this.shirtNumber = _shirtNumber;
            Player.radius = 30;
            this.speed = _speed;
            this.startPos = _position;

            if (_position)
                this.position = _position.copy();
        }


        public checkforBallContact(_radiusBall: number, _posBall: Vector): void {

            let distX: number = this.position.x - _posBall.x;
            let distY: number = this.position.y - _posBall.y;

            let rSum: number = _radiusBall + Player.radius;
            let distance: number = (distX * distX) + (distY * distY);

            if (distance <= rSum * rSum) {

                this.ballinRadius = true;
            } else {
                this.ballinRadius = false;
            }

            if (distance <= 150) {
                this.ballContact = true;
            } else {
                this.ballContact = false;
            }
        }



        public draw(): void {
            //  console.log("drawPlayer");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();

            crc2.fillStyle = this.color;
            crc2.lineWidth = 2;
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            crc2.restore();

            //radius
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();


            if (this.ballinRadius == true) {
                crc2.fillStyle = "HSLA(61, 100%, 62%, 0.2)";
            } else {
                crc2.fillStyle = "HSLA(61, 100%, 62%, 0.2)";
            }

            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();

            //tshirtNumber
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeStyle = "white";

            crc2.textAlign = "center";
            crc2.font = "11px Comic Sans MS";
            crc2.fillStyle = "black";
            crc2.strokeText(String(this.shirtNumber), 0, 4);
            crc2.fillText(String(this.shirtNumber), 0, 4);


            crc2.restore();

        }

        public move(_newPos: Vector): void {

         
            if (_newPos.x == this.position.x && _newPos.y == this.position.y)
                return;
            if (!this.ballContact) {
     
                let difference: Vector = Vector.getDifference(_newPos, this.position);
                if (difference.length < 10) {
                    return;
                }
                difference = difference.norm(difference);
                difference.scale(this.speed / 50); 
                this.position.add(difference);
            }

        }

    }

}

