basic.pause(100)
let index = 0
basic.forever(function () {
    makerbit.clearLcd1602()
    makerbit.setLcdBacklight(LcdBacklight.On)
    makerbit.showStringOnLcd1602("Oyun ve Robotik", index + 1, 16)
    makerbit.showStringOnLcd1602("Kodlama Egitimi", index + 17, 16)
    index = index - 1
    if (index <= -16) {
        index = 0
    }
})
