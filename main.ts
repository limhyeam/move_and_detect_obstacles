let position = 0
// basic.showIcon(IconNames.Heart)
while (!(input.buttonIsPressed(Button.A))) {
	
}
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
// }
basic.forever(function () {
    // if (zoombit.readUltrasonic() < 30) {
    // zoombit.brake()
    // } else if (zoombit.readUltrasonic() < 20) {
    if (zoombit.readUltrasonic() < 20) {
        if (zoombit.isLineDetectedOn(LinePosition.Center)) {
            zoombit.move(MotorDirection.Backward, 128)
        } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
            zoombit.setMotorsSpeed(100, 50)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
            zoombit.setMotorsSpeed(50, 100)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
            zoombit.setMotorsSpeed(100, 0)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
            zoombit.setMotorsSpeed(0, 100)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.None)) {
            if (position == 1) {
                zoombit.turn(TurnDirection.Right, 80)
            } else if (position == 2) {
                zoombit.turn(TurnDirection.Left, 80)
            }
        }
    } else {
        if (zoombit.isLineDetectedOn(LinePosition.Center)) {
            basic.showIcon(IconNames.Yes)
            zoombit.move(MotorDirection.Forward, 128)
        } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
            basic.showIcon(IconNames.No)
            zoombit.setMotorsSpeed(50, 100)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
            basic.showIcon(IconNames.Asleep)
            zoombit.setMotorsSpeed(100, 50)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
            basic.showIcon(IconNames.Happy)
            zoombit.setMotorsSpeed(0, 100)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
            basic.showIcon(IconNames.StickFigure)
            zoombit.setMotorsSpeed(100, 0)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.None)) {
            basic.showIcon(IconNames.Tortoise)
            if (position == 1) {
                zoombit.turn(TurnDirection.Left, 40)
            } else if (position == 2) {
                zoombit.turn(TurnDirection.Right, 40)
            }
        }
    }
})
