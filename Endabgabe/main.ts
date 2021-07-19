namespace footballSimulation {

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveables[] = [];
    let ball: Ball;
    let posBall: Vector;
    let background: ImageData;
    let formData: FormData;
    // let selectPlayer: HTMLButtonElement;
    let removePlayer: HTMLButtonElement;
    let givePlayerNewPos: HTMLButtonElement;
    let pauseAnimation: boolean = false;
    let newBallpos: Vector;
    let selection: HTMLSelectElement;
    let createNewPlayerTA: HTMLButtonElement;
    let createNewPlayerTB: HTMLButtonElement;
    let teamA: string;
    let teamAColour: string;

    let teamB: string;
    let teamBColour: string;
    let teamBmaxPrecision: number;
    let teamBminPrecision: number;
    let teamAmaxPrecision: number;
    let teamAminPrecision: number;

    let teamBspeed: number;
    let teamBmaxSpeed: number;
    let teamBminSpeed: number;
    let teamAspeed: number;
    let teamAmaxSpeed: number;
    let teamAminSpeed: number;

    //get form elements
    let playerPositionX: HTMLInputElement;
    let playerPositionY: HTMLInputElement;
    let resetPlayerSettings: HTMLButtonElement;
    let submitPlayerSettings: HTMLButtonElement;



    function handleLoad(_event: Event): void {
        //handle click on startButton
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startGame");
        startButton.addEventListener("click", handleStart);

        let restartButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#restartGame");
        restartButton.addEventListener("click", function (): void { location.reload(); });

        // selectPlayer = <HTMLButtonElement>document.querySelector("#selectPlayer");
        // selectPlayer.addEventListener("click", handlePlayerSelection);
    }

    function handleStart(): void {
        //hide start div
        let startDiv: HTMLDivElement = <HTMLDivElement>document.querySelector("#start");
        startDiv.style.display = "none";

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // const frameRate: number = 50; // frames per second
        // const frameTime: number = 1 / frameRate; // time per frame in seconds

        //functions
        drawBackground();
        drawBall();
        drawReferees();
        handleForm();
        //make general settings visible
        let playerSettings: HTMLFormElement = <HTMLFormElement>document.querySelector("#playerSettings");
        playerSettings.style.display = "inherit";
        let scoreline: HTMLDivElement = <HTMLDivElement>document.querySelector("#scoreline");
        scoreline.style.display = "inherit";
        let generalSettings: HTMLDivElement = <HTMLDivElement>document.querySelector("#generalSettings");
        generalSettings.style.display = "inherit";

        playerPositionX = <HTMLInputElement>document.querySelector("#playerPositionX");
        playerPositionY = <HTMLInputElement>document.querySelector("#playerPositionY");
        resetPlayerSettings = <HTMLButtonElement>document.querySelector("#resetPlayerSettings");
        submitPlayerSettings = <HTMLButtonElement>document.querySelector("#submitPlayerSettings");

        createNewPlayerTA = <HTMLButtonElement>document.querySelector("#createnewPlayerTeamA");
        createNewPlayerTA.addEventListener("click", function createNewPlTA(): void {
            let buttonTA: HTMLButtonElement = <HTMLButtonElement>this;
            createNewPlayer(buttonTA);
        });
        createNewPlayerTB = <HTMLButtonElement>document.querySelector("#createnewPlayerTeamB");
        createNewPlayerTB.addEventListener("click", function createNewPlTB(): void {
            let buttonTB: HTMLButtonElement = <HTMLButtonElement>this;
            createNewPlayer(buttonTB);
        });

        handlePlayerBallApproach();
        showScoreline();

        window.setInterval(animate, 20);
    }

    //handle the team seetings form
    function handleForm(): void {
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
                    let teamAposition: Vector[] = [new Vector(canvas.width - 40, 180), new Vector(360, 170), new Vector(135, 150),
                    new Vector(160, 250), new Vector(210, 95), new Vector(250, 285), new Vector(220, 190), new Vector(310, 95),
                    new Vector(310, 255), new Vector(400, 95), new Vector(400, 260)];
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
                    let teamBposition: Vector[] = [new Vector(40, 180), new Vector(125, 95), new Vector(160, 190), new Vector(120, 295),
                    new Vector(270, 95), new Vector(220, 265), new Vector(260, 200), new Vector(370, 210),
                    new Vector(330, 285), new Vector(420, 80), new Vector(420, 300)];
                    //  console.log(teamB, teamBColour, teamBmaxSpeed, teamBminSpeed, teamBmaxPrecision, teamBminPrecision);
                    createTeam(teamB, teamBColour, teamBspeed, teamBmaxPrecision, teamBminPrecision, teamBposition);
                    break;
                default:
                    break;
            }
        }

        let teamSettings: HTMLFormElement = <HTMLFormElement>document.getElementById("teamSettings");
        teamSettings.style.display = "none";

    }

    function createTeam(_teamName: string, _teamColour: string, _teamSpeed: number, _teamMaxPrecision: number, _teamMinPrecision: number, _teamPosition: Vector[]): void {
        let nPlayer: number = 11;
        let nShirtNumber: number;

        let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("#select");
        let labelSelection: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        labelSelection.htmlFor = _teamName;
        labelSelection.innerText = _teamName;
        selection = <HTMLSelectElement>document.createElement("select");
        selection.id = _teamName;
        selection.name = _teamName;
        fieldset.appendChild(labelSelection);
        fieldset.appendChild(selection);

        //create remove button
        removePlayer = <HTMLButtonElement>document.createElement("button");
        let buttonid: string = "removePlayer" + _teamName;
        removePlayer.id = buttonid;
        removePlayer.innerText = "remove this Player";
        removePlayer.type = "button";
        fieldset.appendChild(removePlayer);

        //create select new position button
        givePlayerNewPos = <HTMLButtonElement>document.createElement("button");
        givePlayerNewPos.id = "giveNewPos" + _teamName;
        givePlayerNewPos.innerText = "give player new position";
        givePlayerNewPos.type = "button";
        fieldset.appendChild(givePlayerNewPos);


        for (let i: number = 0; i < nPlayer; i++) {
            let posPlayer: Vector = _teamPosition[i];
            // speed = (Math.random() * (_teamMaxSpeed - _teamMinSpeed) + _teamMinSpeed);
            let precision: number = (Math.random() * (_teamMaxPrecision - _teamMinPrecision) + _teamMinPrecision);

            nShirtNumber = i + 1;
            // let posPlayer: Vector = new Vector(x, y);
            let newPlayer: Player = new Player(_teamName, _teamColour, nShirtNumber, _teamSpeed, posPlayer, precision);
            newPlayer.draw();

            //create new player as option in select-list
            let newOptionPlayer: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
            newOptionPlayer.text = "Player" + nShirtNumber + " (" + _teamName + ")";
            newOptionPlayer.setAttribute("teamName", _teamName);
            newOptionPlayer.setAttribute("shirtNumber", nShirtNumber.toString());
            selection.appendChild(newOptionPlayer);
            moveables.push(newPlayer);
        }
        console.log(moveables);

        givePlayerNewPos.addEventListener("click", function (): void {
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

            submitPlayerSettings.addEventListener("click", function submit(): void {
                let team: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#" + _teamName);
                //selected option
                let player: HTMLOptionElement = <HTMLOptionElement>team.options[team.selectedIndex];
                // let playertext: string = <string>team.options[team.selectedIndex].text;
                let attShirtNumber: string = <string>player.getAttribute("shirtNumber");
                let attTeamName: string = <string>player.getAttribute("teamName");

                for (let x of moveables) {
                    let values: any = Object.values(x);
                    let currentteam: string = <string>values[3];
                    let shirt: number = <number>values[4];
                    let index: number = <number>moveables.indexOf(x);
                    if (parseFloat(attShirtNumber) === shirt && currentteam === attTeamName) {
                        let newPosPlayer: Vector = new Vector(parseFloat(playerPositionX.value), parseFloat(playerPositionY.value));
                        let p: Moveables = moveables[index];
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

        removePlayer.addEventListener("click", function (): void {
            //whole selection
            let team: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#" + _teamName);
            //selected option
            let player: HTMLOptionElement = <HTMLOptionElement>team.options[team.selectedIndex];
            let playertext: string = <string>team.options[team.selectedIndex].text;
            alert("removing " + playertext + " at Index: " + [team.selectedIndex]);
            let attShirtNumber: string = <string>player.getAttribute("shirtNumber");
            let attTeamName: string = <string>player.getAttribute("teamName");
            //console.log(player, attShirtNumber, attTeamName, team.selectedIndex, people);
            //remove option from list 
            team.remove(team.selectedIndex);

            //remove player from array people
            for (let x of moveables) {
                let values: any = Object.values(x);
                let currentteam: string = <string>values[2];
                let shirt: number = <number>values[4];
                let index: number = <number>moveables.indexOf(x);
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

    function drawBackground(): void {
        let playfield: Playfield = new Playfield();
        playfield.draw();
        background = crc2.getImageData(0, 0, canvas.width, canvas.height);

    }

    function drawReferees(): void {
        let posAssistantReferee1: Vector = new Vector(crc2.canvas.width / 2, 10);
        let assistantReferee1: AssistantReferee = new AssistantReferee(posAssistantReferee1, new Vector(4, 3));
        // assistantReferee1.draw();
        moveables.push(assistantReferee1); //zweiten parameter draw referees

        let posAssistantReferee2: Vector = new Vector(crc2.canvas.width / 2, crc2.canvas.height - 10);
        let assistantReferee2: AssistantReferee = new AssistantReferee(posAssistantReferee2, new Vector(8, 2));
        //   assistantReferee2.draw();
        moveables.push(assistantReferee2);

        let posReferee: Vector = new Vector(crc2.canvas.width / 2, crc2.canvas.height / 4);
        let referee: Referee = new Referee(posReferee);
        //  referee.draw();
        moveables.push(referee);
        background = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // let posPlayer: Vector = new Vector(50, 50);
        // let testplayer: Player = new Player(posPlayer, "red", 1);
        // testplayer.draw();
    }

    function drawBall(): void {
        let posBall: Vector = new Vector(crc2.canvas.width / 2, crc2.canvas.height / 2);
        ball = new Ball(posBall);
        ball.speed = 240;
        ball.draw();
        moveables.push(ball);

    }

    //check if ball near player
    function handlePlayerBallApproach(): void {
        let ballRadius: number = ball.radius;
        posBall = ball.position;
        //console.log(posBall);
        for (let player of moveables) {
            if (player instanceof Player) {
                player.checkforBallContact(ballRadius, posBall);

                if (player.ballContact == true) {
                    pauseAnimation = true;
                    canvas.addEventListener("click", function (e: MouseEvent): void {
                        handleBallContact(canvas, e);
                    });

                } else if (player.ballinRadius == true) {
                    pauseAnimation = false;

                }
            }
        }
    }

    function handleBallContact(canvas: HTMLCanvasElement, event: MouseEvent): void {
        let rect: DOMRect = <DOMRect>canvas.getBoundingClientRect();
        let x: number = event.clientX - rect.left;
        let y: number = event.clientY - rect.top;
        console.log("Balldestination: x:" + x + ", y:" + y);
        newBallpos = new Vector(x, y);
        console.log(newBallpos);
        pauseAnimation = false;
    }

    function createNewPlayer(_createNewPlayer: HTMLButtonElement): void {
        let teamASelection: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#" + teamA);
        let teamBSelection: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#" + teamB);
        let divNewPlayerTA: HTMLDivElement = <HTMLDivElement>document.querySelector("#newPlayerTA");
        let divNewPlayerTB: HTMLDivElement = <HTMLDivElement>document.querySelector("#newPlayerTB");

        let posXlabel: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        let inputPlayerposX: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        inputPlayerposX.type = "number";
        posXlabel.htmlFor = "newPlayerPosX";
        inputPlayerposX.id = "newPlayerPosX";
        posXlabel.innerText = "Pos X: ";

        let posYlabel: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        let inputPlayerposY: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        inputPlayerposY.type = "number";
        posYlabel.htmlFor = "newPlayerPosY";
        inputPlayerposY.id = "newPlayerPosY";
        posYlabel.innerText = "Pos Y: ";

        let shirtNumberLabel: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        let inputPlayerShirtNumber: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        inputPlayerShirtNumber.type = "number";
        shirtNumberLabel.htmlFor = "newPlayerShirtNumber";
        inputPlayerShirtNumber.id = "newPlayerShirtNumber";
        shirtNumberLabel.innerText = "Shirt-Number: ";

        let submitNewPlayer: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
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

            submitNewPlayer.addEventListener("click", function newPlayer(): void {
                console.log("submit new player");

                let newPlayerPos: Vector = new Vector(parseFloat(inputPlayerposX.value), parseFloat(inputPlayerposY.value));
                let newPlayerShirtNumber: number = parseFloat(inputPlayerShirtNumber.value);

                let newPlayer: Player = new Player(_createNewPlayer.id, teamAColour, newPlayerShirtNumber, teamAspeed, newPlayerPos);
                newPlayer.draw();
                moveables.push(newPlayer);

                //create new player as option in select-list
                let optionNewPlayer: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
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

            submitNewPlayer.addEventListener("click", function newPlayer(): void {
                console.log("submit new player");

                let newPlayerPos: Vector = new Vector(parseFloat(inputPlayerposX.value), parseFloat(inputPlayerposY.value));
                let newPlayerShirtNumber: number = parseFloat(inputPlayerShirtNumber.value);

                let newPlayer: Player = new Player(_createNewPlayer.id, teamBColour, newPlayerShirtNumber, teamBspeed, newPlayerPos);
                newPlayer.draw();
                moveables.push(newPlayer);

                //create new player as option in select-list
                let optionNewPlayer: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
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

    function showScoreline(): void {
        let showBallPossession: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#currentBallPossession");
        let showScore: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#currentScore");

        for (let player of moveables) {
            if (player instanceof Player && player.ballContact == true) {
                showBallPossession.innerText = "Player " + player.shirtNumber + " of " + player.team;
            }
        }
    }


    function animate(): void {
        //    requestAnimationFrame(animate);
        crc2.putImageData(background, 0, 0);



        for (let object of moveables) {

            if (pauseAnimation == true) {
                object.draw();
            }
            else if (pauseAnimation == false && object instanceof Ball) {
                console.log(object, moveables, newBallpos);
                object.draw();
                object.move(newBallpos);
            }
            else if (object instanceof Referee || object instanceof AssistantReferee) {
                object.draw();
                object.move(posBall);
            }
            else if (object instanceof Player && object.ballinRadius == true) {
                object.draw();
                object.move(posBall);
            }
            else if (object instanceof Player && object.ballinRadius == false) {
                object.draw();
                object.move(object.startPos);

            }

        }

        handlePlayerBallApproach();
        showScoreline();

    }
}