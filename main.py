def on_button_pressed_a():
    basic.show_number(OuverturePorte)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Chronomètre():
    global Temps, OuverturePorte
    music.set_volume(255)
    Temps = 60
    while Temps >= 0:
        basic.show_number(Temps)
        basic.pause(1000)
        music.play_tone(262, music.beat(BeatFraction.BREVE))
        Temps += -1
    OuverturePorte += 1
    if Temps >= 0 and input.pin_is_pressed(TouchPin.P2):
        basic.clear_screen()
        music.stop_all_sounds()
        basic.pause(200)
        music.play_melody("- A C5 C5 C5 - - - ", 500)
        basic.show_icon(IconNames.YES)
        basic.show_string("Alarmedésactivée")
        basic.pause(100)
        WiFiIoT.send_ifttt("cyui2H8ek536ksPEE5kg4T", "AlarmeDesactivee")
    elif Temps >= 0 and input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.SAD)
        music.play_melody("C5 C5 C G C C5 C5 C5 ", 300)
        WiFiIoT.send_ifttt("cyui2H8ek536ksPEE5kg4T", "EnvoyerEmail")
    elif Temps >= 0 and input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SAD)
        music.play_melody("C5 C5 C G C C5 C5 C5 ", 300)
        WiFiIoT.send_ifttt("cyui2H8ek536ksPEE5kg4T", "EnvoyerEmail")
        basic.pause(300000)
        Vérifier()
    elif Temps == 0:
        music.play_melody("C - C - C F C5 C5 ", 500)
        basic.clear_screen()
        basic.pause(2500)
        Vérifier()
    else:
        music.play_melody("C5 C5 C G C C5 C5 C5 ", 300)
        WiFiIoT.send_ifttt("cyui2H8ek536ksPEE5kg4T", "EnvoyerEmail")

def on_gesture_shake():
    basic.show_string("Activation")
    basic.pause(200)
    basic.show_icon(IconNames.YES)
    basic.pause(500)
    Vérifier()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def Vérifier():
    if input.magnetic_force(Dimension.STRENGTH) < 200:
        music.play_melody("C C5 C5 B B C5 C5 C ", 500)
        music.set_volume(255)
        basic.show_icon(IconNames.NO)
        basic.pause(5000)
        Chronomètre()
    else:
        basic.show_icon(IconNames.YES)
Temps = 0
OuverturePorte = 0
music.play_melody("C5 C5 B A G F E C5 ", 1000)
basic.show_string("Initialisation")
basic.pause(250)
basic.show_icon(IconNames.YES)

def on_forever():
    Vérifier()
    if input.pin_is_pressed(TouchPin.P2):
        music.stop_all_sounds()
        basic.pause(500)
        basic.show_icon(IconNames.YES)
    else:
        Vérifier()
basic.forever(on_forever)

def on_in_background():
    global OuverturePorte
    OuverturePorte = 0
    WiFiIoT.initialize_wifi(SerialPin.P16, SerialPin.P8)
    WiFiIoT.set_wifi("FreeWood", "whatyouseeiswhatyougetyes")
control.in_background(on_in_background)

def on_every_interval():
    if OuverturePorte == 0 and input.magnetic_force(Dimension.STRENGTH) > 200:
        WiFiIoT.send_ifttt("cyui2H8ek536ksPEE5kg4T", "MessagePasAlerte")
        basic.pause(100)
        basic.show_icon(IconNames.YES)
loops.every_interval(86400000, on_every_interval)
