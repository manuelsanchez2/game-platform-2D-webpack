const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
const limitPlayer = canvas.width / 1.5;
const normalGameSpeed = 5;

const gravity = 0.5;

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
    this.width = 30;
    this.height = 30;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    // Controla que la gravedad acabe justo al final
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };

    this.width = 200;
    this.height = 20;
  }

  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
const platforms = [
  new Platform({ x: 200, y: 400 }),
  new Platform({ x: 500, y: 400 }),
  new Platform({ x: 500, y: 200 }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

// end of the game
let scrollOffset = 0;

function animationLoop() {
  requestAnimationFrame(animationLoop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < limitPlayer) {
    player.velocity.x = normalGameSpeed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -normalGameSpeed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += normalGameSpeed;
      platforms.forEach((platform) => {
        platform.position.x -= normalGameSpeed;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= normalGameSpeed;
      platforms.forEach((platform) => {
        platform.position.x += normalGameSpeed;
      });
    }
  }

  console.log(scrollOffset);

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

  if (scrollOffset > 2000) {
    console.log("end of the game");
  }
}

animationLoop();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;

    case 38:
      console.log("up");
      player.velocity.y += -10;
      break;

    case 39:
      keys.right.pressed = true;
      break;

    case 40:
      console.log("down");
      player.velocity.y += 10;
      break;
  }
  console.log(keys.right.pressed);
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      console.log("lefties");
      keys.left.pressed = false;
      player.velocity.x = 0;
      break;

    case 38:
      console.log("up");
      player.velocity.y += -10;
      break;

    case 39:
      keys.right.pressed = false;
      console.log("right");
      break;

    case 40:
      console.log("down");
      player.velocity.y += 10;
      break;
  }
  console.log(keys.right.pressed);
});
