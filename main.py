def Chronometre():
    global entree, Temps
    entree = ""
    Temps = 10
    while StopChronometre == False and Temps > 0:
        basic.show_number(Temps)
        basic.pause(1000)
        Temps += 0 - 1

def on_button_pressed_a():
    global entree
    entree = "" + entree + "A"
input.on_button_pressed(Button.A, on_button_pressed_a)

def Verifier():
    if StopChronometre == False and input.magnetic_force(Dimension.STRENGTH) < 200:
        basic.show_icon(IconNames.NO)
        Chronometre()
    elif StopChronometre == False and input.magnetic_force(Dimension.STRENGTH) > 200:
        basic.show_icon(IconNames.YES)

def on_button_pressed_ab():
    global StopChronometre, entree
    if entree == Motdepasse:
        StopChronometre = True
        entree = ""
        basic.show_icon(IconNames.YES)
        basic.pause(60000)
        Verifier()
    else:
        StopChronometre = True
        basic.show_icon(IconNames.ANGRY)
        bluetooth.uart_write_line("ALERTE !!")
        basic.pause(5000)
        control.reset()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global entree
    entree = "" + entree + "B"
input.on_button_pressed(Button.B, on_button_pressed_b)

def Demarrage():
    basic.show_leds("""
        # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . # # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . # # # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . # . #
                # . # . #
                # . . . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . # . #
                # # # . #
                # . # . #
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                # . # . #
                # # # # #
                # . # . #
                # # # # #
    """)
    basic.pause(200)
    basic.clear_screen()
Temps = 0
entree = ""
Motdepasse = ""
StopChronometre = False
StopChronometre = False
Motdepasse = "ABBAB"
entree = ""
bluetooth.start_uart_service()
Demarrage()

def on_forever():
    Verifier()
basic.forever(on_forever)
