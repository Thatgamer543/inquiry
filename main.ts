enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.AB, function () {
    hi_mate = 1
})
radio.onReceivedString(function (receivedString) {
    name_123 = receivedString
    if (!(name_123 == "")) {
        basic.clearScreen()
        music.play(music.stringPlayable("C5 C A F B B E A ", 300), music.PlaybackMode.InBackground)
        basic.showString(receivedString)
        basic.clearScreen()
        READY = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 255, 9354, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    basic.showString("GET OUT!")
    basic.clearScreen()
    basic.showString("" + (text_list[NUMBER]))
})
function main_script () {
    if (NUMBER > 27) {
        NUMBER = 1
        basic.showString("" + (text_list[NUMBER]))
    }
    if (NUMBER < 1) {
        NUMBER = 27
        basic.showString("" + (text_list[NUMBER]))
    }
    if (input.logoIsPressed()) {
        basic.showLeds(`
            . . . . #
            . . . # #
            # . # # .
            # # # . .
            . # . . .
            `)
        basic.pause(100)
        text_list2 = "" + text_list2 + text_list[NUMBER]
        basic.clearScreen()
        basic.showString("" + (text_list[NUMBER]))
    }
    if (hi_mate == 1 && !(text_list2 == "")) {
        music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 120), music.PlaybackMode.InBackground)
        radio.sendString(text_list2)
        basic.clearScreen()
        basic.showString(text_list2)
        text_list2 = "" + ""
        hi_mate = 0
        basic.showString("" + (text_list[NUMBER]))
    }
    if (input.buttonIsPressed(Button.A) && NUMBER > 0) {
        basic.clearScreen()
        NUMBER += -1
        basic.showString("" + (text_list[NUMBER]))
    }
    if (input.buttonIsPressed(Button.B) && NUMBER < 29) {
        basic.clearScreen()
        NUMBER += 1
        basic.showString("" + (text_list[NUMBER]))
    }
}
let text_list2 = ""
let name_123 = ""
let hi_mate = 0
let NUMBER = 0
let text_list: string[] = []
let READY = 0
radio.setTransmitPower(7)
music.setVolume(255)
radio.setGroup(69)
READY = 0
music.play(music.stringPlayable("C5 A F C C5 A F C ", 150), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("C5 B G D C D C D ", 150), music.PlaybackMode.InBackground)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # # . # #
    # # # # #
    # # . # #
    `)
basic.showLeds(`
    # # . # #
    # # . # #
    # . # # #
    # # . # #
    # . # # #
    `)
basic.showLeds(`
    # # . . #
    # # . . #
    # . . . #
    # # . . #
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    # # . # #
    # # . # #
    # # . # #
    # . . . #
    `)
basic.showLeds(`
    # . # . #
    # # . # #
    # # . # #
    # # . # #
    # . # . #
    `)
basic.showLeds(`
    # . . . #
    # # # # #
    # # . # #
    # # # # #
    # . . . #
    `)
READY = 1
text_list = [
"",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"_",
""
]
NUMBER = 1
basic.showString("" + (text_list[NUMBER]))
basic.forever(function () {
    if (READY == 1) {
        main_script()
    }
})
