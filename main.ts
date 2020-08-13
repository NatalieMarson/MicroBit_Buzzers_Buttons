function soundthealarm () {
    // function to sound the arm
    while (play) {
        // while play is true sound the alarm
        music.playMelody("F D F D F D F D ", 120)
    }
}
// when button a is pressed the music will stop playing
// variable play turns to false
input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    play = false
})
// then turn the readlight false to stop reading the light
function alarm () {
    // if the light level is bigger than 20 sound the alarm
    if (input.lightLevel() >= 20) {
        soundthealarm()
        Readlight = false
    }
}
// when button b is pressed play is true therefore
// turning on the light sensor thus restarting the alarm
// this is only avaliable when the alarm is turned off
input.onButtonPressed(Button.B, function () {
    play = true
})
let play = false
let Readlight = false
Readlight = true
play = true
// the alarm will always be on unless disabled by button a
basic.forever(function () {
    alarm()
})
