function spiele (anz: number) {
    for (let Index = 0; Index <= anz; Index++) {
        anzeige()
    }
    basic.showString("A")
}
input.onSound(DetectedSound.Loud, function () {
    spiele(1)
})
input.onButtonPressed(Button.A, function () {
    spiele(10)
})
input.onGesture(Gesture.Shake, function () {
    spiele(1)
})
function anzeige () {
    basic.clearScreen()
    basic.showString("BMBWF")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.OnceInBackground)
    basic.showString("DLPL")
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(1000)
}
basic.showIcon(IconNames.Happy)
input.setSoundThreshold(SoundThreshold.Loud, 202)
