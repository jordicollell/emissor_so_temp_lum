radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("temp", input.temperature())
    radio.sendValue("so", input.soundLevel())
    radio.sendValue("llum", input.lightLevel())
    basic.pause(1000)
})
