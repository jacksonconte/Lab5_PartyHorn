// main.js

const mediaPath = "./assets/media/";
const iconPath = mediaPath + "icons/";
const imagePath = mediaPath + "images/";
const audioPath = mediaPath + "audio/";

const volImg0 = "volume-level-0.svg";
const volImg1 = "volume-level-1.svg";
const volImg2 = "volume-level-2.svg";
const volImg3 = "volume-level-3.svg";

const volBox = document.getElementById("volume-number");
const volSlide = document.getElementById("volume-slider");
const audio = document.getElementById("horn-sound");
const selection = document.getElementById("audio-selection");
const honkButton = document.getElementById("honk-btn");

volBox.addEventListener("change", boxChange);
volSlide.addEventListener("change", slideChange);
selection.addEventListener("change", soundChange);
// honkButton.addEventListener("click", playSound);
document.getElementById("party-horn-form").addEventListener("submit", playSound);

function boxChange() {
    // change slider
    volSlide.value = volBox.value;
    // change actual audio level
    volChange(volBox.value);
}

function slideChange() {
    // change box
    volBox.value = volSlide.value;
    // change actual audio level
    volChange(volSlide.value);
}

function volChange(vol) {
    let image;
    honkButton.disabled = (vol == 0);
    if (vol == 0) {
        image = volImg0;
    } else if (vol <= 33) {
        image = volImg1;
    } else if (vol <= 66) {
        image = volImg2;
    } else {
        image = volImg3;
    }

    document.getElementById("volume-image").src = iconPath + image;
    audio.volume = vol / 100;
}

function soundChange() {
    let radios = document.getElementsByName("radio-sound");
    let i, image, sel, sound;
    for (i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            sel = radios[i].id;
            break;
        }
    }
    if (sel === "radio-air-horn") {
        image = "air-horn.svg";
        sound = "air-horn.mp3";
    } else if (sel === "radio-car-horn") {
        image = "car.svg";
        sound = "car-horn.mp3";
    } else {
        image = "party-horn.svg";
        sound = "party-horn.mp3";
    }
    document.getElementById("sound-image").src = imagePath + image;
    audio.src = audioPath + sound;
}

function playSound() {
    event.preventDefault();
    audio.play();
}