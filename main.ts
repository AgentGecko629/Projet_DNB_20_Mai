function Chronometre () {
    cp = 10
    while (cp > 0) {
        basic.showNumber(cp)
        basic.pause(1000)
        cp += 0 - 1
    }
}
input.onButtonPressed(Button.A, function () {
    entree = "" + entree + "A"
})
function Verifier () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        OuverturePorte = true
        basic.showIcon(IconNames.No)
        Chronometre()
    } else {
        basic.showIcon(IconNames.Yes)
        OuverturePorte = false
    }
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    if (entree == Mdp) {
        entree = ""
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.pause(300000)
        Verifier()
    } else {
        basic.showIcon(IconNames.Angry)
        basic.pause(500)
        bluetooth.uartWriteLine("ALERTE !!")
        basic.pause(5000)
    }
})
input.onButtonPressed(Button.B, function () {
    entree = "" + entree + "B"
})
function Demarrage () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
}
let OuverturePorte = false
let cp = 0
let entree = ""
let Mdp = ""
Mdp = "ABBAB"
entree = ""
bluetooth.startUartService()
basic.pause(200)
Demarrage()
basic.pause(2000)
basic.forever(function () {
    Verifier()
})
