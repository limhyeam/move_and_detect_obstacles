position = 0
# basic.showIcon(IconNames.Heart)
while not (input.button_is_pressed(Button.A)):
    pass
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
ChgTune = 0

def on_every_interval():
    global ChgTune
    if ChgTune == 0:
        ChgTune = 1
        music._play_default_background(music.built_in_playable_melody(Melodies.BIRTHDAY),
            music.PlaybackMode.IN_BACKGROUND)
    else:
        ChgTune = 0
        rekabit.set_all_rgb_pixels_color(0xff0000)
loops.every_interval(15000, on_every_interval)

def on_forever():
    global position
    if zoombit.read_ultrasonic() < 20:
        zoombit.move(MotorDirection.BACKWARD, 100)
    else:
        if zoombit.is_line_detected_on(LinePosition.CENTER):
            zoombit.move(MotorDirection.FORWARD, 80)
        elif zoombit.is_line_detected_on(LinePosition.LEFT1):
            zoombit.set_motors_speed(40, 80)
            position = 1
        elif zoombit.is_line_detected_on(LinePosition.RIGHT1):
            zoombit.set_motors_speed(80, 40)
            position = 2
        elif zoombit.is_line_detected_on(LinePosition.LEFT2):
            zoombit.set_motors_speed(0, 80)
            position = 1
        elif zoombit.is_line_detected_on(LinePosition.RIGHT2):
            zoombit.set_motors_speed(80, 0)
            position = 2
        elif zoombit.is_line_detected_on(LinePosition.NONE):
            if position == 1:
                zoombit.turn(TurnDirection.LEFT, 80)
            elif position == 2:
                zoombit.turn(TurnDirection.RIGHT, 80)
basic.forever(on_forever)
