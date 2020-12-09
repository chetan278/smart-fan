let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = smarthome.ReadLightIntensity(AnalogPin.P1)
    OLED.clear()
    OLED.writeString("Temperature")
    OLED.writeNum(temp)
    if (temp > 30) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
