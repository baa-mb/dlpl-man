function spiele (anz: number) {
    for (let Index = 0; Index <= anz; Index++) {
        anzeige()
    }
    basic.showIcon(IconNames.Happy)
}
input.onSound(DetectedSound.Loud, function () {
    spiele(0)
})
input.onButtonPressed(Button.A, function () {
    spiele(10)
})
input.onGesture(Gesture.Shake, function () {
    spiele(1)
})
function anzeige () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.OnceInBackground)
    basic.showString("BMBWF")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
    basic.showString("DLPL")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(2000)
}
basic.showIcon(IconNames.Happy)
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
    if (input.lightLevel() < 100) {
        spiele(0)
    }
    basic.pause(1000)
})
