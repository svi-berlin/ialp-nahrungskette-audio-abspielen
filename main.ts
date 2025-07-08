input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (audiofile > anfang) {
        audiofile += -1
    } else {
        audiofile = ende
    }
    serialmp3.playMp3Track(audiofile, audioordner)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (audiofile < ende) {
        audiofile += 1
    } else {
        audiofile = anfang
    }
    serialmp3.playMp3Track(audiofile, audioordner)
})
let ende = 0
let anfang = 0
let audiofile = 0
let audioordner = 0
basic.setLedColor(0x00ff00)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(30)
let audioanzahl = 12
audioordner = 4
audiofile = 1
anfang = 1
ende = audioanzahl
basic.forever(function () {
    basic.showNumber(audiofile)
})
