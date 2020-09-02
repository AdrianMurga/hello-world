input.onButtonPressed(Button.A, function () {
    basic.showString("Hello World!")
    basic.showIcon(IconNames.Happy)
})
basic.showNumber(123)
basic.forever(function () {
    basic.showString("...")
})
