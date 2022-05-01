function CpVerification () {
    if (input.buttonIsPressed(Button.A)) {
        bluetooth.uartWriteLine("Mdp incorrect et porte ouverte !!")
    } else if (input.buttonIsPressed(Button.B)) {
        bluetooth.uartWriteLine("Mdp incorrect et porte ouverte !!")
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2500)
        Verifier()
    }
}
input.onSound(DetectedSound.Loud, function () {
    Chronometre()
})
function Chronometre () {
    cp = 60
    while (cp > 0) {
        music.playMelody("C5 C5 - - - - - - ", 500)
        CpVerification()
        basic.showNumber(cp)
        basic.pause(1000)
        cp += 0 - 1
    }
}
function Verifier () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        music.playMelody("C5 C5 C5 C5 C5 C C C5 ", 500)
        OuverturePorte = true
        basic.showIcon(IconNames.No)
        Chronometre()
    } else {
        basic.showIcon(IconNames.Yes)
        OuverturePorte = false
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    control.reset()
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
    soundExpression.happy.playUntilDone()
    basic.clearScreen()
}
let OuverturePorte = false
let cp = 0
bluetooth.startUartService()
basic.pause(200)
Demarrage()
basic.pause(2000)
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
    input.setSoundThreshold(SoundThreshold.Loud, 200)
    Verifier()
})
