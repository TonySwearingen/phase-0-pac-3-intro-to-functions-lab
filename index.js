function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    console.log(string)
    let info;
    if(string.toLowerCase() === string) {
       info = "I can\'t hear you!"
    }
    else if(string.toUpperCase() === string){
        info = "YES INDEED!"
    }
    else if (string ="Let\'s have dinner together!") {
        info = "I would love to!"
    }
    return info;
}
