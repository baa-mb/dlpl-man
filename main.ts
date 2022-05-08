function spiele (anz: number) {
    for (let Index = 0; Index <= anz; Index++) {
        anzeige()
    }
    basic.showIcon(IconNames.No)
}
input.onSound(DetectedSound.Loud, function () {
    spiele(0)
})
input.onButtonPressed(Button.A, function () {
    spiele(10)
    power.lowPowerPause(3600000)
})
input.onGesture(Gesture.Shake, function () {
    spiele(0)
})
function anzeige () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.OnceInBackground)
    basic.showString("DLPL")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
    basic.showString("BMBWF")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(2000)
}
basic.showIcon(IconNames.Happy)
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        spiele(0)
    }
    basic.pause(1000)
})
