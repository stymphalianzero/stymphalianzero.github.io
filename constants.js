// Sky Hoffert
// Constants for Stymphalian Zero.

// Generic Constants
const WIDTH = 800;
const HEIGHT = 600;
const PI = 3.1415926;
const TWOPI = PI*2;

// Game specific constants that could change.
const ASTEROID_MIN_MASS = 1000;

var AUDIO_bgmusic = null;
var AUDIO_shoot = null;
var AUDIO_accel = null;
var AUDIO_boom = null;
var AUDIO_click = null;
var AUDIO_introrobot = null;
var AUDIO_introrobot2 = null;
var AUDIO_introrobot3 = null;

// Load audio files depending on stage.
// All loading will occur asynchonously. Other classes must check for completion.
function LoadAudio(s) {
    if (AUDIO_shoot === null && (s === "Testground" || s === "IntroLevel")) {
        //AUDIO_shoot = new Audio("audio/shoot.mp3");
        // DEBUG
        AUDIO_shoot = new Audio("audio/testlaser-007.wav");
    }
    if (AUDIO_accel === null && (s === "Testground" || s === "IntroLevel")) {
        //AUDIO_accel = new Audio("audio/accel.mp3");
        // DEBUG
        AUDIO_accel = new Audio("audio/testengine-008.wav");
    }
    if (AUDIO_boom === null && (s === "Testground" || s === "IntroLevel")) {
        AUDIO_boom = new Audio("audio/boom.mp3");
    }
    if (AUDIO_bgmusic === null && (s === "Testground" || s === "IntroLevel")) {
        AUDIO_bgmusic = new Audio("audio/bgmusic.mp3");
    }
    if (AUDIO_click === null && (s === "Testground" || s === "IntroLevel")) {
        AUDIO_click = new Audio("audio/click.mp3");
    }
    if (AUDIO_introrobot === null && (s === "IntroLevel")) {
        AUDIO_introrobot = new Audio("audio/introrobot.mp3");
    }
    if (AUDIO_introrobot2 === null && (s === "IntroLevel")) {
        AUDIO_introrobot2 = new Audio("audio/introrobot2.mp3");
    }
    if (AUDIO_introrobot3 === null && (s === "IntroLevel")) {
        AUDIO_introrobot3 = new Audio("audio/introrobot3.mp3");
    }
}
