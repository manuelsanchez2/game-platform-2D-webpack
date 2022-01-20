/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/character/spriteRunLeft.png":
/*!*********************************************!*\
  !*** ./src/img/character/spriteRunLeft.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/character/spriteRunRight.png":
/*!**********************************************!*\
  !*** ./src/img/character/spriteRunRight.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/character/spriteStandLeft.png":
/*!***********************************************!*\
  !*** ./src/img/character/spriteStandLeft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/character/spriteStandRight.png":
/*!************************************************!*\
  !*** ./src/img/character/spriteStandRight.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/keenan.png":
/*!****************************!*\
  !*** ./src/img/keenan.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2e9896366b5ae0190f6b2459923dea65.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_keenan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/keenan.png */ "./src/img/keenan.png");
/* harmony import */ var _img_character_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/character/spriteRunLeft.png */ "./src/img/character/spriteRunLeft.png");
/* harmony import */ var _img_character_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/character/spriteRunRight.png */ "./src/img/character/spriteRunRight.png");
/* harmony import */ var _img_character_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/character/spriteStandLeft.png */ "./src/img/character/spriteStandLeft.png");
/* harmony import */ var _img_character_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/character/spriteStandRight.png */ "./src/img/character/spriteStandRight.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_9__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var platformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var smallPlatformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var bgImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var hillImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var keenanImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_keenan_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var limitPlayer = canvas.width / 1.8; // Speed of character/platforms (collision livings) and backgrounds

var normalGameSpeed = 10;
var slowGameSpeed = normalGameSpeed / 1.5;
var gravity = 0.5; // Keys checker helper

var lastKey = "";
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; // CLASS AND CONSTRUCTORS - START

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Platform;
}(); // Generic Object is for things we do not interact with or not collide with anything


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image,
        width = _ref2.width,
        height = _ref2.height;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return GenericObject;
}();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.image = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_character_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.sprites = {
      stand: {
        right: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_character_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_character_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_character_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_character_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 340,
        width: 127.875
      }
    };
    this.frames = 0;
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // Here it is where we crop the sprite sheet
      ctx.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, // 400 is the height of the sprite sheet
      this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right || this.frames > 59 && this.currentSprite === this.sprites.stand.left) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.right || this.frames > 29 && this.currentSprite === this.sprites.run.left) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; // Controla que la gravedad acabe justo al final

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}(); // CLASS AND CONSTRUCTORS - END
// INITIAL POSITIONS OF THE OBJECTS IN THIS SCREEN


var player = new Player();
var platforms = [];
var genericObjects = []; // end of the game

var scrollOffset = 0;

function animationLoop() {
  requestAnimationFrame(animationLoop);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (object) {
    object.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < limitPlayer) {
    player.velocity.x = normalGameSpeed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -normalGameSpeed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += normalGameSpeed;
      platforms.forEach(function (platform) {
        platform.position.x -= normalGameSpeed;
      });
      genericObjects.forEach(function (object) {
        object.position.x -= slowGameSpeed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= normalGameSpeed;
      platforms.forEach(function (platform) {
        platform.position.x += normalGameSpeed;
      });
      genericObjects.forEach(function (object) {
        object.position.x += slowGameSpeed;
      });
    }
  } // Check collission between 2 rectangular objects with Rect Collission, first in y, then in x
  // Really well explained here: https://www.youtube.com/watch?v=_MyPLZSGS3s


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } // win condition


  if (scrollOffset > platformImage.width * 5 + 450 - 2) {
    console.log("end of the game");
  } // lose condition


  if (player.position.y > canvas.height) {
    startGame();
  }
}

function startGame() {
  platformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  bgImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  hillImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  smallPlatformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  keenanImage = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createImage"])(_img_keenan_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  player = new Player();
  platforms = [// Final platform - Win
  new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - smallPlatformImage.width,
    y: 270,
    image: smallPlatformImage
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 850 - 2,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: bgImage
  }), new GenericObject({
    x: -1,
    y: -1,
    image: hillImage
  }), new GenericObject({
    x: 600,
    y: 275,
    image: keenanImage,
    width: 200,
    height: 200
  })]; // end of the game

  scrollOffset = 0;
} // CONTROLLERS


addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

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
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

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
}); // BEGIN THE LOOP, BEGIN THE GAME

startGame();
animationLoop();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  createImage: createImage
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map