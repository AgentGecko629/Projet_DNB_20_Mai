function Chronometre () {
    entree = ""
    Temps = 15
    while (StopChronometre == false && Temps > 0) {
        basic.showNumber(Temps)
        basic.pause(1000)
        Temps += 0 - 1
    }
}
input.onButtonPressed(Button.A, function () {
    entree = "" + entree + "A"
})
function Verifier () {
    if (StopChronometre == false && input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.No)
        Chronometre()
    } else if (StopChronometre == false && input.magneticForce(Dimension.Strength) > 200) {
        basic.showIcon(IconNames.Yes)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (entree == Motdepasse) {
        StopChronometre = true
        entree = ""
        basic.showIcon(IconNames.Yes)
        Verifier()
    } else {
        StopChronometre = true
        basic.showIcon(IconNames.Angry)
        bluetooth.uartWriteLine("ALERTE !!")
        basic.pause(5000)
        control.reset()
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
    basic.pause(200)
    basic.clearScreen()
}
let Temps = 0
let entree = ""
let Motdepasse = ""
let StopChronometre = false
StopChronometre = false
Motdepasse = "ABBABAA"
entree = ""
bluetooth.startUartService()
Demarrage()
basic.forever(function () {
    Verifier()
})
