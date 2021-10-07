"use strict";
class Animal {
    voice = "";
    color = "black";
    go() {
        console.log("Go");
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
