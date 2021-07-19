"use strict";
var footballSimulation;
(function (footballSimulation) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let ball;
    let posBall;
    let background;
    let formData;
    // let selectPlayer: HTMLButtonElement;
    let removePlayer;
    let givePlayerNewPos;
    let pauseAnimation = false;
    let newBallpos;
    let selection;
    let createNewPlayerTA;
    let createNewPlayerTB;
    let teamA;
    let teamAColour;
    let teamB;
    let teamBColour;
    let teamBmaxPrecision;
    let teamBminPrecision;
    let teamAmaxPrecision;
    let teamAminPrecision;
    let teamBspeed;
    let teamBmaxSpeed;
    let teamBminSpeed;
    let teamAspeed;
    let teamAmaxSpeed;
    let teamAminSpeed;
    //get form elements
    let playerPositionX;
    let playerPositionY;
    let resetPlayerSettings;
    let submitPlayerSettings;
    function handleLoad(_event) {
        //handle click on startButton
        let startButton = document.querySelector("#startGame");
        startButton.addEventListener("click", handleStart);
        let restartButton = document.querySelector("#restartGame");
        restartButton.addEventListener("click", function () { location.reload(); });
        // selectPlayer = <HTMLButtonElement>document.querySelector("#selectPlayer");
        // selectPlayer.addEventListener("click", handlePlayerSelection);
    }
    function handleStart() {
        //hide start div
        let startDiv = document.querySelector("#start");
        startDiv.style.display = "none";
        footballSimulation.canvas = document.querySelector("canvas");
        footballSimulation.crc2 = footballSimulation.canvas.getContext("2d");
        // const frameRate: number = 50; // frames per second
        // const frameTime: number = 1 / frameRate; // time per frame in seconds
        //functions
        drawBackground();
        drawBall();
        drawReferees();
        handleForm();
        //make general settings visible
        let playerSettings = document.querySelector("#playerSettings");
        playerSettings.style.display = "inherit";
        let scoreline = document.querySelector("#scoreline");
        scoreline.style.display = "inherit";
        let generalSettings = document.querySelector("#generalSettings");
        generalSettings.style.display = "inherit";
        playerPositionX = document.querySelector("#playerPositionX");
        playerPositionY = document.querySelector("#playerPositionY");
        resetPlayerSettings = document.querySelector("#resetPlayerSettings");
        submitPlayerSettings = document.querySelector("#submitPlayerSettings");
        createNewPlayerTA = document.querySelector("#createnewPlayerTeamA");
        createNewPlayerTA.addEventListener("click", function createNewPlTA() {
            let buttonTA = this;
            createNewPlayer(buttonTA);
        });
        createNewPlayerTB = document.querySelector("#createnewPlayerTeamB");
        createNewPlayerTB.addEventListener("click", function createNewPlTB() {
            let buttonTB = this;
            createNewPlayer(buttonTB);
        });
        handlePlayerBallApproach();
        showScoreline();
        window.setInterval(animate, 20);
    }
    //handle the team seetings form
    function handleForm() {
        formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            // let keyValue: string = "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            //console.log(keyValue);
            switch (entry[0]) {
                case "teamA":
                    teamA = String(formData.get("teamA"));
                    teamAColour = String(formData.get("teamAColour"));
                    teamAmaxSpeed = Number(formData.get("maxVelocityTA"));
                    teamAminSpeed = Number(formData.get("minVelocityTA"));
                    teamAspeed = (Math.random() * (teamAmaxSpeed - teamAminSpeed) + teamAminSpeed);
                    teamAmaxPrecision = Number(formData.get("maxPrecisionTA"));
                    teamAminPrecision = Number(formData.get("minPrecisionTA"));
                    let teamAposition = [new footballSimulation.Vector(footballSimulation.canvas.width - 40, 180), new footballSimulation.Vector(360, 170), new footballSimulation.Vector(135, 150),
                        new footballSimulation.Vector(160, 250), new footballSimulation.Vector(210, 95), new footballSimulation.Vector(250, 285), new footballSimulation.Vector(220, 190), new footballSimulation.Vector(310, 95),
                        new footballSimulation.Vector(310, 255), new footballSimulation.Vector(400, 95), new footballSimulation.Vector(400, 260)];
                    // console.log(teamA, teamAColour, teamAmaxSpeed, teamAminSpeed, teamAmaxPrecision, teamAminPrecision);
                    createTeam(teamA, teamAColour, teamAspeed, teamAmaxPrecision, teamAminPrecision, teamAposition);
                    break;
                case "teamB":
                    teamB = String(formData.get("teamB"));
                    teamBColour = String(formData.get("teamBColour"));
                    teamBmaxSpeed = Number(formData.get("maxVelocityTB"));
                    teamBminSpeed = Number(formData.get("minVelocityTB"));
                    teamBspeed = (Math.random() * (teamBmaxSpeed - teamBminSpeed) + teamBminSpeed);
                    teamBmaxPrecision = Number(formData.get("maxPrecisionTB"));
                    teamBminPrecision = Number(formData.get("minPrecisionTB"));
                    let teamBposition = [new footballSimulation.Vector(40, 180), new footballSimulation.Vector(125, 95), new footballSimulation.Vector(160, 190), new footballSimulation.Vector(120, 295),
                        new footballSimulation.Vector(270, 95), new footballSimulation.Vector(220, 265), new footballSimulation.Vector(260, 200), new footballSimulation.Vector(370, 210),
                        new footballSimulation.Vector(330, 285), new footballSimulation.Vector(420, 80), new footballSimulation.Vector(420, 300)];
                    //  console.log(teamB, teamBColour, teamBmaxSpeed, teamBminSpeed, teamBmaxPrecision, teamBminPrecision);
                    createTeam(teamB, teamBColour, teamBspeed, teamBmaxPrecision, teamBminPrecision, teamBposition);
                    break;
                default:
                    break;
            }
        }
        let teamSettings = document.getElementById("teamSettings");
        teamSettings.style.display = "none";
    }
    function createTeam(_teamName, _teamColour, _teamSpeed, _teamMaxPrecision, _teamMinPrecision, _teamPosition) {
        let nPlayer = 11;
        let nShirtNumber;
        let fieldset = document.querySelector("#select");
        let labelSelection = document.createElement("label");
        labelSelection.htmlFor = _teamName;
        labelSelection.innerText = _teamName;
        selection = document.createElement("select");
        selection.id = _teamName;
        selection.name = _teamName;
        fieldset.appendChild(labelSelection);
        fieldset.appendChild(selection);
        //create remove button
        removePlayer = document.createElement("button");
        let buttonid = "removePlayer" + _teamName;
        removePlayer.id = buttonid;
        removePlayer.innerText = "remove this Player";
        removePlayer.type = "button";
        fieldset.appendChild(removePlayer);
        //create select new position button
        givePlayerNewPos = document.createElement("button");
        givePlayerNewPos.id = "giveNewPos" + _teamName;
        givePlayerNewPos.innerText = "give player new position";
        givePlayerNewPos.type = "button";
        fieldset.appendChild(givePlayerNewPos);
        for (let i = 0; i < nPlayer; i++) {
            let posPlayer = _teamPosition[i];
            // speed = (Math.random() * (_teamMaxSpeed - _teamMinSpeed) + _teamMinSpeed);
            let precision = (Math.random() * (_teamMaxPrecision - _teamMinPrecision) + _teamMinPrecision);
            nShirtNumber = i + 1;
            // let posPlayer: Vector = new Vector(x, y);
            let newPlayer = new footballSimulation.Player(_teamName, _teamColour, nShirtNumber, _teamSpeed, posPlayer, precision);
            newPlayer.draw();
            //create new player as option in select-list
            let newOptionPlayer = document.createElement("option");
            newOptionPlayer.text = "Player" + nShirtNumber + " (" + _teamName + ")";
            newOptionPlayer.setAttribute("teamName", _teamName);
            newOptionPlayer.setAttribute("shirtNumber", nShirtNumber.toString());
            selection.appendChild(newOptionPlayer);
            moveables.push(newPlayer);
        }
        console.log(moveables);
        givePlayerNewPos.addEventListener("click", function () {
            //toggle form elements by click on selectPlayer-button
            if (playerPositionX.disabled === true) {
                playerPositionX.disabled = false;
                playerPositionY.disabled = false;
                resetPlayerSettings.disabled = false;
                submitPlayerSettings.disabled = false;
            }
            else {
                playerPositionX.disabled = true;
                playerPositionY.disabled = true;
                resetPlayerSettings.disabled = true;
                submitPlayerSettings.disabled = true;
            }
            submitPlayerSettings.addEventListener("click", function submit() {
                let team = document.querySelector("#" + _teamName);
                //selected option
                let player = team.options[team.selectedIndex];
                // let playertext: string = <string>team.options[team.selectedIndex].text;
                let attShirtNumber = player.getAttribute("shirtNumber");
                let attTeamName = player.getAttribute("teamName");
                for (let x of moveables) {
                    let values = Object.values(x);
                    let currentteam = values[3];
                    let shirt = values[4];
                    let index = moveables.indexOf(x);
                    if (parseFloat(attShirtNumber) === shirt && currentteam === attTeamName) {
                        let newPosPlayer = new footballSimulation.Vector(parseFloat(playerPositionX.value), parseFloat(playerPositionY.value));
                        let p = moveables[index];
                        p.position = newPosPlayer;
                        console.log(p, moveables);
                    }
                }
                playerPositionX.disabled = true;
                playerPositionY.disabled = true;
                resetPlayerSettings.disabled = true;
                submitPlayerSettings.disabled = true;
            });
        });
        removePlayer.addEventListener("click", function () {
            //whole selection
            let team = document.querySelector("#" + _teamName);
            //selected option
            let player = team.options[team.selectedIndex];
            let playertext = team.options[team.selectedIndex].text;
            alert("removing " + playertext + " at Index: " + [team.selectedIndex]);
            let attShirtNumber = player.getAttribute("shirtNumber");
            let attTeamName = player.getAttribute("teamName");
            //console.log(player, attShirtNumber, attTeamName, team.selectedIndex, people);
            //remove option from list 
            team.remove(team.selectedIndex);
            //remove player from array people
            for (let x of moveables) {
                let values = Object.values(x);
                let currentteam = values[2];
                let shirt = values[4];
                let index = moveables.indexOf(x);
                // console.log(x, values);
                //  people.splice(index, 1);
                // console.log(x, people);
                if (parseFloat(attShirtNumber) === shirt && currentteam === attTeamName) {
                    moveables.splice(index, 1);
                    console.log(x, moveables);
                }
            }
            console.log("player removed");
        });
    }
    function drawBackground() {
        let playfield = new footballSimulation.Playfield();
        playfield.draw();
        background = footballSimulation.crc2.getImageData(0, 0, footballSimulation.canvas.width, footballSimulation.canvas.height);
    }
    function drawReferees() {
        let posAssistantReferee1 = new footballSimulation.Vector(footballSimulation.crc2.canvas.width / 2, 10);
        let assistantReferee1 = new footballSimulation.AssistantReferee(posAssistantReferee1, new footballSimulation.Vector(4, 3));
        // assistantReferee1.draw();
        moveables.push(assistantReferee1); //zweiten parameter draw referees
        let posAssistantReferee2 = new footballSimulation.Vector(footballSimulation.crc2.canvas.width / 2, footballSimulation.crc2.canvas.height - 10);
        let assistantReferee2 = new footballSimulation.AssistantReferee(posAssistantReferee2, new footballSimulation.Vector(8, 2));
        //   assistantReferee2.draw();
        moveables.push(assistantReferee2);
        let posReferee = new footballSimulation.Vector(footballSimulation.crc2.canvas.width / 2, footballSimulation.crc2.canvas.height / 4);
        let referee = new footballSimulation.Referee(posReferee);
        //  referee.draw();
        moveables.push(referee);
        background = footballSimulation.crc2.getImageData(0, 0, footballSimulation.canvas.width, footballSimulation.canvas.height);
        // let posPlayer: Vector = new Vector(50, 50);
        // let testplayer: Player = new Player(posPlayer, "red", 1);
        // testplayer.draw();
    }
    function drawBall() {
        let posBall = new footballSimulation.Vector(footballSimulation.crc2.canvas.width / 2, footballSimulation.crc2.canvas.height / 2);
        ball = new footballSimulation.Ball(posBall);
        ball.speed = 240;
        ball.draw();
        moveables.push(ball);
    }
    //check if ball near player
    function handlePlayerBallApproach() {
        let ballRadius = ball.radius;
        posBall = ball.position;
        //console.log(posBall);
        for (let player of moveables) {
            if (player instanceof footballSimulation.Player) {
                player.checkforBallContact(ballRadius, posBall);
                if (player.ballContact == true) {
                    pauseAnimation = true;
                    footballSimulation.canvas.addEventListener("click", function (e) {
                        handleBallContact(footballSimulation.canvas, e);
                        pauseAnimation = false;
                    });
                }
                else if (player.ballinRadius == true) {
                    pauseAnimation = false;
                }
            }
        }
    }
    function handleBallContact(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Balldestination: x:" + x + ", y:" + y);
        newBallpos = new footballSimulation.Vector(x, y);
        console.log(newBallpos);
    }
    function createNewPlayer(_createNewPlayer) {
        let teamASelection = document.querySelector("#" + teamA);
        let teamBSelection = document.querySelector("#" + teamB);
        let divNewPlayerTA = document.querySelector("#newPlayerTA");
        let divNewPlayerTB = document.querySelector("#newPlayerTB");
        let posXlabel = document.createElement("label");
        let inputPlayerposX = document.createElement("input");
        inputPlayerposX.type = "number";
        posXlabel.htmlFor = "newPlayerPosX";
        inputPlayerposX.id = "newPlayerPosX";
        posXlabel.innerText = "Pos X: ";
        let posYlabel = document.createElement("label");
        let inputPlayerposY = document.createElement("input");
        inputPlayerposY.type = "number";
        posYlabel.htmlFor = "newPlayerPosY";
        inputPlayerposY.id = "newPlayerPosY";
        posYlabel.innerText = "Pos Y: ";
        let shirtNumberLabel = document.createElement("label");
        let inputPlayerShirtNumber = document.createElement("input");
        inputPlayerShirtNumber.type = "number";
        shirtNumberLabel.htmlFor = "newPlayerShirtNumber";
        inputPlayerShirtNumber.id = "newPlayerShirtNumber";
        shirtNumberLabel.innerText = "Shirt-Number: ";
        let submitNewPlayer = document.createElement("button");
        submitNewPlayer.innerHTML = "create Player";
        if (_createNewPlayer.id == "createnewPlayerTeamA") {
            console.log("teamA: ", teamA);
            //create input fields
            createNewPlayerTB.style.display = "none";
            divNewPlayerTA.style.display = "inherit";
            createNewPlayerTB.style.display = "none";
            divNewPlayerTA.appendChild(posXlabel);
            divNewPlayerTA.appendChild(inputPlayerposX);
            divNewPlayerTA.appendChild(posYlabel);
            divNewPlayerTA.appendChild(inputPlayerposY);
            divNewPlayerTA.appendChild(shirtNumberLabel);
            divNewPlayerTA.appendChild(inputPlayerShirtNumber);
            divNewPlayerTA.appendChild(submitNewPlayer);
            submitNewPlayer.addEventListener("click", function newPlayer() {
                console.log("submit new player");
                let newPlayerPos = new footballSimulation.Vector(parseFloat(inputPlayerposX.value), parseFloat(inputPlayerposY.value));
                let newPlayerShirtNumber = parseFloat(inputPlayerShirtNumber.value);
                let newPlayer = new footballSimulation.Player(_createNewPlayer.id, teamAColour, newPlayerShirtNumber, teamAspeed, newPlayerPos);
                newPlayer.draw();
                moveables.push(newPlayer);
                //create new player as option in select-list
                let optionNewPlayer = document.createElement("option");
                optionNewPlayer.text = "Player" + newPlayerShirtNumber + " (" + teamA + ")";
                optionNewPlayer.setAttribute("teamName", teamA);
                optionNewPlayer.setAttribute("shirtNumber", newPlayerShirtNumber.toString());
                teamASelection.appendChild(optionNewPlayer);
                divNewPlayerTA.style.display = "none";
                createNewPlayerTA.style.display = "inherit";
                createNewPlayerTB.style.display = "inherit";
            });
        }
        else if (_createNewPlayer.id == "createnewPlayerTeamB") {
            console.log("teamB: ", teamB);
            createNewPlayerTA.style.display = "none";
            createNewPlayerTB.style.display = "none";
            divNewPlayerTB.style.display = "inherit";
            divNewPlayerTB.appendChild(posXlabel);
            divNewPlayerTB.appendChild(inputPlayerposX);
            divNewPlayerTB.appendChild(posYlabel);
            divNewPlayerTB.appendChild(inputPlayerposY);
            divNewPlayerTB.appendChild(shirtNumberLabel);
            divNewPlayerTB.appendChild(inputPlayerShirtNumber);
            divNewPlayerTB.appendChild(submitNewPlayer);
            submitNewPlayer.addEventListener("click", function newPlayer() {
                console.log("submit new player");
                let newPlayerPos = new footballSimulation.Vector(parseFloat(inputPlayerposX.value), parseFloat(inputPlayerposY.value));
                let newPlayerShirtNumber = parseFloat(inputPlayerShirtNumber.value);
                let newPlayer = new footballSimulation.Player(_createNewPlayer.id, teamBColour, newPlayerShirtNumber, teamBspeed, newPlayerPos);
                newPlayer.draw();
                moveables.push(newPlayer);
                //create new player as option in select-list
                let optionNewPlayer = document.createElement("option");
                optionNewPlayer.text = "Player" + newPlayerShirtNumber + " (" + teamB + ")";
                optionNewPlayer.setAttribute("teamName", teamB);
                optionNewPlayer.setAttribute("shirtNumber", newPlayerShirtNumber.toString());
                teamBSelection.appendChild(optionNewPlayer);
                divNewPlayerTB.style.display = "none";
                createNewPlayerTB.style.display = "inherit";
                createNewPlayerTA.style.display = "inherit";
            });
        }
    }
    function showScoreline() {
        let showBallPossession = document.querySelector("#currentBallPossession");
        let showScore = document.querySelector("#currentScore");
        for (let player of moveables) {
            if (player instanceof footballSimulation.Player && player.ballContact == true) {
                showBallPossession.innerText = "Player " + player.shirtNumber + " of " + player.team;
            }
        }
    }
    function animate() {
        //    requestAnimationFrame(animate);
        footballSimulation.crc2.putImageData(background, 0, 0);
        for (let object of moveables) {
            if (pauseAnimation == true) {
                object.draw();
            }
            else if (pauseAnimation == false && object instanceof footballSimulation.Ball) {
                console.log(object, moveables, newBallpos);
                object.draw();
                object.move(newBallpos);
            }
            else if (object instanceof footballSimulation.Referee || object instanceof footballSimulation.AssistantReferee) {
                object.draw();
                object.move(posBall);
            }
            else if (object instanceof footballSimulation.Player && object.ballinRadius == true) {
                object.draw();
                object.move(posBall);
            }
            else if (object instanceof footballSimulation.Player && object.ballinRadius == false) {
                object.draw();
                object.move(object.startPos);
            }
        }
        handlePlayerBallApproach();
        showScoreline();
    }
})(footballSimulation || (footballSimulation = {}));
//# sourceMappingURL=main.js.map