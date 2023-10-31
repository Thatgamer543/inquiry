radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
})
radio.setGroup(69)
let Alphabet = 0
let READY = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
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
    # . . . #
    # # # # #
    # # . # #
    # # # # #
    # . . . #
    `)
basic.clearScreen()
basic.showString("READY!")
READY = 1
let text_list = [
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
"Z"
]
let NUMBER = 0
basic.showString("" + (text_list[NUMBER]))
basic.forever(function () {
    if (READY == 1) {
        if (input.buttonIsPressed(Button.B)) {
            NUMBER += 1
            basic.showString("" + (text_list[NUMBER]))
        }
        if (NUMBER == 27) {
            NUMBER = -1
        }
        if (input.buttonIsPressed(Button.AB)) {
            let list: string[] = []
            list.push(text_list[NUMBER])
        }
    }
})
