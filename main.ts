basic.forever(function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("Don't Fart!")
    music.playTone(60, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    music.playMelody("- F A C5 - C C C ", 281)
})
