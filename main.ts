radio.onReceivedNumber(function (receivedNumber) {
    comment.comment("When a number is received, store it as \"v\"")
    v = receivedNumber
})
function stop () {
    wuKong.stopAllMotor()
}
function forward () {
    wuKong.setAllMotor(100, 100)
}
let v = 0
comment.comment("Tell the Micro:Bit it is attached to the Joystick")
joystickbit.initJoystickBit()
comment.comment("Specify the frequency for your set")
radio.setGroup(2)
basic.showLeds(`
    # . . . .
    # . . . .
    # # # . .
    # . . . .
    # # # # #
    `)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        comment.comment("When the joystick moves forward, send the number 1")
        radio.sendNumber(1)
    } else {
        comment.comment("When the joystick does not move, send the number 0")
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (v == 1) {
        comment.comment("If the received number is 1, go forward")
        forward()
    } else if (v == 0) {
        comment.comment("If the received number is 0, stop")
        stop()
    }
})
basic.forever(function () {
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
