def turn_left():
    rekabit.set_servo_position(ServoChannel.S1, 135)
    for index in range(4):
        rekabit.set_rgb_pixel_color(1, 0xff0000)
        basic.pause(100)
        rekabit.set_rgb_pixel_color(1, 0x000000)
        basic.pause(100)
    zoombit.turn(TurnDirection.RIGHT, 128)
    basic.pause(500)
    zoombit.brake()
    rekabit.set_servo_position(ServoChannel.S1, 90)
def detect_obstacle():
    if zoombit.read_ultrasonic() < 10:
        zoombit.move(MotorDirection.BACKWARD, 128)
    elif zoombit.read_ultrasonic() < 20:
        zoombit.brake()
    else:
        zoombit.move(MotorDirection.FORWARD, 128)
def turn_right():
    rekabit.set_servo_position(ServoChannel.S1, 45)
    for index2 in range(4):
        rekabit.set_rgb_pixel_color(0, 0xff0000)
        basic.pause(100)
        rekabit.set_rgb_pixel_color(0, 0x000000)
        basic.pause(100)
    zoombit.turn(TurnDirection.RIGHT, 128)
    basic.pause(500)
    zoombit.brake()
basic.show_icon(IconNames.HEART)
while not (input.button_is_pressed(Button.A)):
    pass
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)

def on_forever2():
    if zoombit.is_line_detected_on(LinePosition.CENTER):
        zoombit.move(MotorDirection.FORWARD, 128)
    elif zoombit.is_line_detected_on(LinePosition.LEFT1):
        zoombit.set_motors_speed(50, 100)
    elif zoombit.is_line_detected_on(LinePosition.RIGHT1):
        zoombit.set_motors_speed(100, 50)
    elif zoombit.is_line_detected_on(LinePosition.LEFT2):
        zoombit.set_motors_speed(0, 100)
    elif zoombit.is_line_detected_on(LinePosition.RIGHT2):
        zoombit.set_motors_speed(100, 0)
basic.forever(on_forever2)
