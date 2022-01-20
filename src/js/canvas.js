import platform from "../img/platform.png";
import smallPlatform from "../img/platformSmallTall.png";

import hills from "../img/hills.png";
import background from "../img/background.png";
import keenan from "../img/keenan.png";
import spriteRunLeft from "../img/character/spriteRunLeft.png";
import spriteRunRight from "../img/character/spriteRunRight.png";
import spriteStandLeft from "../img/character/spriteStandLeft.png";
import spriteStandRight from "../img/character/spriteStandRight.png";

import { createImage } from "./utils";
let platformImage = createImage(platform);
let smallPlatformImage = createImage(smallPlatform);
let bgImage = createImage(background);
let hillImage = createImage(hills);
let keenanImage = createImage(keenan);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const limitPlayer = canvas.width / 1.8;

// Speed of character/platforms (collision livings) and backgrounds
const normalGameSpeed = 10;
const slowGameSpeed = normalGameSpeed / 1.5;
const gravity = 0.5;

// Keys checker helper
let lastKey = "";
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

// CLASS AND CONSTRUCTORS - START
class Platform {
  constructor({ x, y, image, width, height }) {
    this.position = {
      x,
      y,
    };

    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

// Generic Object is for things we do not interact with or not collide with anything
class GenericObject {
  constructor({ x, y, image, width, height }) {
    this.position = {
      x,
      y,
    };

    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 66;
    this.height = 150;

    this.image = createImage(spriteStandRight);
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
        cropWidth: 340,
        width: 127.875,
      },
    };
    this.frames = 0;
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  draw() {
    // Here it is where we crop the sprite sheet
    ctx.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400, // 400 is the height of the sprite sheet
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.frames++;
    if (
      (this.frames > 59 && this.currentSprite === this.sprites.stand.right) ||
      (this.frames > 59 && this.currentSprite === this.sprites.stand.left)
    ) {
      this.frames = 0;
    } else if (
      (this.frames > 29 && this.currentSprite === this.sprites.run.right) ||
      (this.frames > 29 && this.currentSprite === this.sprites.run.left)
    ) {
      this.frames = 0;
    }

    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    // Controla que la gravedad acabe justo al final
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

// CLASS AND CONSTRUCTORS - END
// INITIAL POSITIONS OF THE OBJECTS IN THIS SCREEN

let player = new Player();
let platforms = [];

let genericObjects = [];

// end of the game
let scrollOffset = 0;

function animationLoop() {
  requestAnimationFrame(animationLoop);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((object) => {
    object.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < limitPlayer) {
    player.velocity.x = normalGameSpeed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -normalGameSpeed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += normalGameSpeed;
      platforms.forEach((platform) => {
        platform.position.x -= normalGameSpeed;
      });
      genericObjects.forEach((object) => {
        object.position.x -= slowGameSpeed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= normalGameSpeed;
      platforms.forEach((platform) => {
        platform.position.x += normalGameSpeed;
      });
      genericObjects.forEach((object) => {
        object.position.x += slowGameSpeed;
      });
    }
  }

  // Check collission between 2 rectangular objects with Rect Collission, first in y, then in x
  // Really well explained here: https://www.youtube.com/watch?v=_MyPLZSGS3s
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  }

  // win condition
  if (scrollOffset > platformImage.width * 5 + 450 - 2) {
    console.log("end of the game");
  }

  // lose condition
  if (player.position.y > canvas.height) {
    startGame();
  }
}

function startGame() {
  platformImage = createImage(platform);
  bgImage = createImage(background);
  hillImage = createImage(hills);
  smallPlatformImage = createImage(smallPlatform);
  keenanImage = createImage(keenan);

  player = new Player();
  platforms = [
    // Final platform - Win
    new Platform({
      x:
        platformImage.width * 4 +
        300 -
        2 +
        platformImage.width -
        smallPlatformImage.width,
      y: 270,
      image: smallPlatformImage,
    }),

    new Platform({
      x: -1,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width - 3,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 5 + 850 - 2,
      y: 470,
      image: platformImage,
    }),
  ];

  genericObjects = [
    new GenericObject({ x: -1, y: -1, image: bgImage }),
    new GenericObject({ x: -1, y: -1, image: hillImage }),
    new GenericObject({
      x: 600,
      y: 275,
      image: keenanImage,
      width: 200,
      height: 200,
    }),
  ];

  // end of the game
  scrollOffset = 0;
}

// CONTROLLERS

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 38:
      player.velocity.y -= 15;
      break;

    case 39:
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 40:
      console.log("down");
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;

    case 38:
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 40:
      break;
  }
});

// BEGIN THE LOOP, BEGIN THE GAME
startGame();
animationLoop();
