let circleX = 40;
let circleY = 40
let spawnValueX = 40;
let spawnValueY = 40;
let circleDiameter = 30;
let circleSpeed = 5;

let currentLevel = 0
let x = 100;
let y = 310;
let deathZones = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
let levels = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
let levelColours = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
let monkeyImages = [];

let hasShownMonkey = true;

function setup() {
  createCanvas(400, 400);
  levelSetup();
}

function draw() {
  let nextX = circleX;
  let nextY = circleY;

  if (keyIsDown(LEFT_ARROW)) {
    nextX -= circleSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    nextX += circleSpeed;
  }
  if (keyIsDown(UP_ARROW)) {
    nextY -= circleSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    nextY += circleSpeed;
  }
function movement()
  {
    
  }
  let collisionWithRects = false;
  for (let i = 0; i < levels[currentLevel].length; i++) {
    let rectInfo = levels[currentLevel][i];
    if (
      nextX + circleDiameter / 2 > rectInfo.x &&
      nextX - circleDiameter / 2 < rectInfo.x + rectInfo.w &&
      nextY + circleDiameter / 2 > rectInfo.y &&
      nextY - circleDiameter / 2 < rectInfo.y + rectInfo.h
    ) {
      collisionWithRects = true;
      break; //I used https://www.w3schools.com/js/js_break.asp to find out about break statements as I decided they would be useful here. (AD)
    }
  }
   let collisionWithDeath = false;
   for (let i = 0; i < deathZones[currentLevel].length; i++) {
    let deathInfo = deathZones[currentLevel][i];
    if (
      nextX + circleDiameter / 2 > deathInfo.x &&
      nextX - circleDiameter / 2 < deathInfo.x + deathInfo.w &&
      nextY + circleDiameter / 2 > deathInfo.y &&
      nextY - circleDiameter / 2 < deathInfo.y + deathInfo.h
    ) {
      collisionWithDeath = true;
      circleX = spawnValueX;
      circleY = spawnValueY;
      break; //I used https://www.w3schools.com/js/js_break.asp to find out about break statements as I decided they would be useful here. (AD)
    }
  }
  
  let collisionWithCanvas = false;
  if (
    nextX - circleDiameter / 2 < 0 ||
    nextX + circleDiameter / 2 > width ||
    nextY - circleDiameter / 2 < 0 ||
    nextY + circleDiameter / 2 > height
  ) {
    collisionWithCanvas = true;
  }

  let collisionWithFinish = false;
  if (nextY + circleDiameter / 2 > height) {
    collisionWithFinish = true;
  }

  if (collisionWithFinish) {
    hasShownMonkey = false;
    circleX = 40;
    circleY = 40
    image(monkeyImages[currentLevel], 0, 0);
    setTimeout(() => { hasShownMonkey = true; currentLevel++; }, 2000); //I used https://developer.mozilla.org/en-US/docs/Web/API/setTimeout to learn about the setTimeout(); method,  (AD)
  } else if (hasShownMonkey) {
    background(levelColours[currentLevel][1]);
    noStroke();
    fill(levelColours[currentLevel][0]);

  for (let i = 0; i < levels[currentLevel].length; i++) { //Loops for every rectangle in the currentLevel of the levels array.
    let rectInfo = levels[currentLevel][i]; //Sets rectInfo to the value of the current rectangle in the array.
   
    rect(rectInfo.x, rectInfo.y, rectInfo.w, rectInfo.h); //Draws a rectangle using the values of the current rectangle in the array.
  }
    for (let i = 0; i < deathZones[currentLevel].length; i++)
    {
       fill("red")
      stroke(1)
      strokeWeight(5)
       let deathInfo = deathZones[currentLevel][i];
        rect(deathInfo.x, deathInfo.y, deathInfo.w, deathInfo.h)
    }


    if (!collisionWithRects && !collisionWithCanvas && !collisionWithDeath) {
      circleX = nextX; //Sets circleX to the value of nextX if nextX does not collide with the rectangles or the canvas
      circleY = nextY; //Sets circleY to the value of nextY if nextY does not collide with the rectangles or the canvas
    }
  
    fill(255, 0, 0); // Sets up circle colour
    circle(circleX, circleY, circleDiameter); //Draws circle using the X, Y and Diameter variables.
  }
}

function levelSetup() { //Adds information to the arrays.
  levels[0].push({ x: 0, y: 0, w: 400, h: 20 });
  levels[0].push({ x: 370, y: 0, w: 30, h: 400 });
  levels[0].push({ x: 0, y: 100, w: 30, h: 300 });
  levels[0].push({ x: 0, y: 100, w: 250, h: 30 });
  levels[0].push({ x: 250, y: 220, w: 150, h: 30 });
  levels[0].push({ x: 0, y: 330, w: 270, h: 30 });
  deathZones[0].push({ x: 100, y: 310, w: 120, h: 10});
  levelColours[0].push("yellow", "blue");
  monkeyImages.push(loadImage('images/ImageOne.jpg'));

  levels[1].push({x: 0, y: 70, w:10, h:330 });
  levels[1].push({x:0, y:0, w:400, h:10});
  levels[1].push({x: 0, y:370, w:330, h:30});
  levels[1].push({x: 390, y:0, w:10, h:400});
  levels[1].push({x: 0, y:70, w:300, h:30});
  levels[1].push({x: 270, y:70, w:50, h:160});
  levels[1].push({x:160, y:280, w:240, h:30});
  deathZones[1].push({x: 130, y:170, w:30, h:140});
  levels[1].push({x: 70, y:170, w:70, h:140});
  levelColours[1].push("lime", "white");
  monkeyImages.push(loadImage('images/ImageTwo.jpg'));


  levels[2].push({x:0, y:70, w:10, h:330});
  deathZones[2].push({x:0, y:0, w:400, h:10});
  levels[2].push({x:0, y:390, w: 330, h:10});
  deathZones[2].push({x:390, y:0, w:10, h:400});
  levels[2].push({x:70, y:0, w:60, h:290});
  deathZones[2].push({x:0, y:340, w:200, h:60});
  deathZones[2].push({x:190, y:70, w:140, h:340});
  levelColours[2].push("blue","grey");
  monkeyImages.push(loadImage('images/ImageThree.jpg'));

  levels[3].push({x:0, y:0, w:400, h:10});
  levels[3].push({x:0, y:70, w:10, h:330});
  levels[3].push({x:0, y: 390, w:320, h:10});
  levels[3].push({x: 390, y: 0, w:10, h:400});
  levels[3].push({x:0, y:70, w:250, h:20});
  deathZones[3].push({x:0, y:200, w:100, h:25});
  levels[3].push({x:200, y:200, w:30, h:100});
  levels[3].push({x:75, y:300, w:155, h:20});
  levels[3].push({x:300, y:270, w:20, h:150});
  levels[3].push({x:10, y:90, w:90, h:110});
  deathZones[3].push({x:260, y:150, w:140, h:40});
  levels[3].push({x:210, y:170, w:60, h:30});
  levels[3].push({x:100, y:85, w:50, h:50});
  levels[3].push({x:150, y:85, w:30, h:20});
  levelColours[3].push("magenta","black");
  monkeyImages.push(loadImage('images/ImageFour.jpg'));

  levels[4].push({x:0, y:70, w:10, h:330});
  levels[4].push({x:0, y:0, w: 400, h: 10});
  deathZones[4].push({x:0, y:390, w:330, h: 10});
  levels[4].push({x:390, y:0, w:10, h:400});
  levels[4].push({x:80, y:0, w:30, h:150});
  deathZones[4].push({x:80, y:200, w:150, h:30});
  levels[4].push({x:300, y:70, w:30, h:270});
  levels[4].push({x:150, y:50, w:100, h:30});
  deathZones[4].push({x:0, y:280, w:250, h:30});
  levels[4].push({x:170, y:120, w:130, h:30});
  levelColours[4].push("cyan","purple");
  monkeyImages.push(loadImage('images/ImageFive.jpg'));

  levels[5].push({x:0, y:90, w:10, h:310});
  deathZones[5].push({x:0, y:0, w:400, h:10});
  levels[5].push({x:390, y:0, w:10, h:400});
  levels[5].push({x:10, y:390, w:320, h:10});
  deathZones[5].push({x:80, y:0, w:10, h:320});
  levels[5].push({x:160, y:80, w:10, h:320});
  levels[5].push({x:240, y:0, w:10, h:320});
  levels[5].push({x:320, y:80, w:10, h:320});
  levelColours[5].push("blue","orange");
  monkeyImages.push(loadImage('images/ImageSix.jpg'));

  levels[6].push({x:0, y:90, w:10, h:310});
  levels[6].push({x:0, y:0, w:400, h:10});
  deathZones[6].push({x:390, y:0, w:10, h:400});
  levels[6].push({x:10, y:390, w:320, h:10});
  levels[6].push({x:0, y:90, w:100, h:90});
  deathZones[6].push({x:100, y:70, w:120, h:80});
  levels[6].push({x:220, y:50, w:110, h:50});
  deathZones[6].push({x:280, y:170, w:120, h:160});
  levels[6].push({x:170, y:200, w:110, h:120});
  levels[6].push({x:70, y:220, w:100, h:80});
  levelColours[6].push("lime","purple");
  monkeyImages.push(loadImage('images/ImageSeven.jpg'));

  levels[7].push({x:0, y:0, w:400, h:10});
  levels[7].push({x:0, y:70, w:10, h:400});
  deathZones[7].push({x:0, y:390, w:330, h:10});
  levels[7].push({x:390, y:0, w:0, h:400});
  levels[7].push({x:0, y:200, w:170, h:20});
  levels[7].push({x:70, y:0, w:15, h:140});
  deathZones[7].push({x:155, y:70, w:15, h:130});
  levels[7].push({x:155, y:70, w:150, h:80});
  levels[7].push({x:230, y:200, w:170, h:75});
  deathZones[7].push({x: 60, y:275, w:170, h:75});
  levels[7].push({x:290, y:330, w:40, h:60});
  levelColours[7].push("red","black");
  monkeyImages.push(loadImage('images/ImageEight.jpg'));

  levels[8].push({x:0, y:70, w:10, h:310});
  levels[8].push({x:0, y:0, w:400, h:10});
  deathZones[8].push({x:0, y:390, w:330, h:10});
  levels[8].push({x:390, y:0, w:10, h:400});
  levels[8].push({x:150, y:140, w:100, h:100});
  levels[8].push({x:0, y:70, w:150, h:150});
  deathZones[8].push({x:150, y:110, w:40, h:40});
  levels[8].push({x:320, y:240, w:70, h:70});
  levels[8].push({x:280, y:290, w:40, h:40});
  deathZones[8].push({x:100, y:310, w:190, h:40});
  levelColours[8].push("yellow","black");
  monkeyImages.push(loadImage('images/ImageNine.jpg'));

  levels[9].push({x:0, y:70, w:10, h:330});
  deathZones[9].push({x:0, y:0, w:400, h:10});
  levels[9].push({x:0, y:390, w:330, h:10});
  levels[9].push({x:390, y:0, w:10, h:400});
  levels[9].push({x:0, y:70, w:330, h:10});
  levels[9].push({x:70, y:140, w:330, h:10});
  deathZones[9].push({x:0, y:210, w:330, h:10});
  levels[9].push({x:70, y:280, w:330, h:10});
  levels[9].push({x:70, y:280, w:10, h:60});
  levels[9].push({x:140, y:340, w:10, h:60});
  deathZones[9].push({x:210, y:280, w:10, h:60});
  levels[9].push({x:280, y:340, w:10, h:60});
  levelColours[9].push("purple","black");
  monkeyImages.push(loadImage('images/ImageTen.jpg'));

  levels[10].push({x:0, y:70, w:10, h:330});
  levels[10].push({x:0, y:0, w:400, h:10});
  deathZones[10].push({x:0, y:390, w:330, h:10});
  levels[10].push({x:390, y:0, w:10, h:400});
  levels[10].push({x:195, y:0, w:10, h:160});
  levels[10].push({x:195, y:240, w:10, h:160});
  deathZones[10].push({x:0, y:70, w:140, h:10});
  levels[10].push({x:130, y:70, w:10, h:20});
  levels[10].push({x:70, y:150, w:125, h:10});
  levels[10].push({x:70, y:140, w:10, h:190});
  levels[10].push({x:70, y:320, w:70, h:10});
  levels[10].push({x:130, y:200, w:10, h:130});
  deathZones[10].push({x:195, y:240, w:110, h:10});
  levels[10].push({x:295, y:80, w:10, h:160});
  levels[10].push({x:270, y:310, w:120, h:10});
  levelColours[10].push("yellow","black");
  monkeyImages.push(loadImage('images/ImageEleven.jpg'));

  levels[11].push({x:0, y:60, w:10, h:350});
  deathZones[11].push({x:0, y:0, w:400, h:10});
  levels[11].push({x:390, y:0, w:10, h:400});
  levels[11].push({x:10, y:390, w:300, h:10});
  levels[11].push({x:0, y:60, w:320, h:10});
  deathZones[11].push({x:310, y:60, w:10, h:200});
  levels[11].push({x:70, y:320, w:330, h:10});
  levels[11].push({x:240, y:120, w:10, h:200});
  levels[11].push({x:70, y:120, w:170, h:10});
  deathZones[11].push({x:70, y:260, w:10, h:60});
  levels[11].push({x:0, y:190, w:180, h:10});
  levels[11].push({x:180, y:190, w:10, h:80});
  levels[11].push({x:130, y:260, w:60, h:10});
  levels[11].push({x:130, y:230, w:10, h:30});
  levelColours[11].push("pink","black");
  monkeyImages.push(loadImage('images/ImageTwelve.jpg'));

  levels[12].push({x:0,y:70, w:10, h:330});
  levels[12].push({x:0, y:0, w:400, h:10});
  levels[12].push({x:0, y:390, w:330, h:10});
  deathZones[12].push({x:390, y:0, w:10, h:400});
  levels[12].push({x:70, y:70, w:60, h:40});
  levels[12].push({x:110, y:110, w:40, h:60});
  deathZones[12].push({x:150, y:150, w:60, h:40});
  levels[12].push({x:190, y:190, w:60, h:40});
  deathZones[12].push({x:30, y:190, w:40, h:60});
  levels[12].push({x:200, y:0, w:50, h:100});
  levels[12].push({x:150, y:210, w:40, h:80});
  levels[12].push({x:110, y:270, w:40, h:80});
  deathZones[12].push({x:250, y:270, w:80, h:120});
  levels[12].push({x:240, y:80, w:40, h:40});
  levels[12].push({x:270, y:110, w:130, h:40});
  levels[12].push({x:300, y:190, w:40, h:40});
  levelColours[12].push("blue","grey");
  monkeyImages.push(loadImage('images/ImageThirteen.jpg'));

  levels[13].push({x:0, y:70, w:10, h:330});
  levels[13].push({x:0, y:0, w:400, h:10});
  deathZones[13].push({x:0, y:390, w:330, h:10});
  levels[13].push({x:390, y:0, w:10, h:400});
  levels[13].push({x:70, y:70, w:250, h:10});
  deathZones[13].push({x:70, y:70, w:10, h:260});
  levels[13].push({x:140, y:200, w:10, h:250});
  levels[13].push({x:200, y:140, w:220, h:10});
  deathZones[13].push({x:220, y:220, w:90, h:10});
  levels[13].push({x:220, y:220, w:10, h:90});
  levels[13].push({x:280, y:280, w:70, h:10});
  levels[13].push({x:280, y:280, w:10, h:70});
  levelColours[13].push("black","grey");
  monkeyImages.push(loadImage('images/ImageFourteen.jpg'));

  deathZones[14].push({x:0, y:70, w:10, h:330});
  deathZones[14].push({x:0, y:0, w:400, h:10});
  deathZones[14].push({x:0, y:390, w:330, h:10});
  deathZones[14].push({x:390, y:0, w:10, h:400});
  deathZones[14].push({x:70, y:70, w:130, h:10});
  deathZones[14].push({x:70, y:70, w:10, h:100});
  deathZones[14].push({x:0, y:220, w:140, h:10});
  deathZones[14].push({x:250, y:0, w:10, h:200});
  deathZones[14].push({x:130, y:130, w:10, h:100});
  deathZones[14].push({x:130, y:130, w:70, h:10});
  deathZones[14].push({x:190, y:70, w:10, h:60});
  deathZones[14].push({x:190, y:200, w:10, h:140});
  deathZones[14].push({x:190, y:260, w:140, h:10});
  deathZones[14].push({x:320, y:60, w:10, h:270});
  deathZones[14].push({x:320, y:170, w:80, h:10});
  deathZones[14].push({x:70, y:310, w:120, h:10});
  deathZones[14].push({x:260, y:320, w:10, h:70});
  levelColours[14].push("orange","cyan");
  monkeyImages.push(loadImage('images/ImageFifteen.jpg'));
}
