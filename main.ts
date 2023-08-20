let position = 0
// basic.showIcon(IconNames.Heart)
while (!(input.buttonIsPressed(Button.A))) {
	
}
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
let ChgTune = 0
loops.everyInterval(15000, function () {
    if (ChgTune == 0) {
        ChgTune = 1
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    } else {
        ChgTune = 0
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
    if (zoombit.readUltrasonic() < 20) {
        zoombit.move(MotorDirection.Backward, 100)
    } else {
        if (zoombit.isLineDetectedOn(LinePosition.Center)) {
            zoombit.move(MotorDirection.Forward, 80)
        } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
            zoombit.setMotorsSpeed(40, 80)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
            zoombit.setMotorsSpeed(80, 40)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
            zoombit.setMotorsSpeed(0, 80)
            position = 1
        } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
            zoombit.setMotorsSpeed(80, 0)
            position = 2
        } else if (zoombit.isLineDetectedOn(LinePosition.None)) {
            if (position == 1) {
                zoombit.turn(TurnDirection.Left, 80)
            } else if (position == 2) {
                zoombit.turn(TurnDirection.Right, 80)
            }
        }
    }
})
