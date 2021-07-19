"use strict";
var footballSimulation;
(function (footballSimulation) {
    class Player extends footballSimulation.Moveables {
        constructor(_team, _color, _shirtNumber, _speed, _position, _precision) {
            super();
            this.ballinRadius = false;
            this.ballContact = false;
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
        checkforBallContact(_radiusBall, _posBall) {
            let distX = this.position.x - _posBall.x;
            let distY = this.position.y - _posBall.y;
            let rSum = _radiusBall + Player.radius;
            let distance = (distX * distX) + (distY * distY);
            if (distance <= rSum * rSum) {
                this.ballinRadius = true;
            }
            else {
                this.ballinRadius = false;
            }
            if (distance <= 150) {
                this.ballContact = true;
            }
            else {
                this.ballContact = false;
            }
        }
        draw() {
            //  console.log("drawPlayer");
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.beginPath();
            footballSimulation.crc2.fillStyle = this.color;
            footballSimulation.crc2.lineWidth = 2;
            footballSimulation.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            footballSimulation.crc2.stroke();
            footballSimulation.crc2.fill();
            footballSimulation.crc2.restore();
            //radius
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.beginPath();
            if (this.ballinRadius == true) {
                footballSimulation.crc2.fillStyle = "HSLA(61, 100%, 62%, 0.2)";
            }
            else {
                footballSimulation.crc2.fillStyle = "HSLA(61, 100%, 62%, 0.2)";
            }
            footballSimulation.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            footballSimulation.crc2.fill();
            footballSimulation.crc2.restore();
            //tshirtNumber
            footballSimulation.crc2.save();
            footballSimulation.crc2.translate(this.position.x, this.position.y);
            footballSimulation.crc2.strokeStyle = "white";
            footballSimulation.crc2.textAlign = "center";
            footballSimulation.crc2.font = "11px Comic Sans MS";
            footballSimulation.crc2.fillStyle = "black";
            footballSimulation.crc2.strokeText(String(this.shirtNumber), 0, 4);
            footballSimulation.crc2.fillText(String(this.shirtNumber), 0, 4);
            footballSimulation.crc2.restore();
        }
        move(_newPos) {
            if (_newPos.x == this.position.x && _newPos.y == this.position.y)
                return;
            if (!this.ballContact) {
                let difference = footballSimulation.Vector.getDifference(_newPos, this.position);
                if (difference.length < 10) {
                    return;
                }
                difference = difference.norm(difference);
                //  let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2)))));
                difference.scale(this.speed / 50);
                this.position.add(difference);
            }
        }
    }
    Player.radius = 30;
    footballSimulation.Player = Player;
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=player.js.map