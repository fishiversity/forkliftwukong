joystickbit.initJoystickBit()
radio.setGroup(2)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        radio.sendNumber(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P13))) {
        radio.sendNumber(0)
    } else if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P12))) {
        radio.sendNumber(0)
    } else {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    let v = 0
    if (v == 1) {
        wuKong.setAllMotor(100, 100)
    } else if (v == 2) {
        wuKong.setAllMotor(-100, -100)
    } else if (v == 3) {
        wuKong.setAllMotor(-50, 50)
    } else if (v == 4) {
        wuKong.setAllMotor(50, -50)
    } else if (v == 0) {
        wuKong.stopAllMotor()
    } else if (v == 5) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    } else if (v == 6) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
    }
})
