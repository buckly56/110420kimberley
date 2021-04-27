input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(randint(1, 10))
})
let A = 0
basic.showNumber(A)
A = 2
basic.showNumber(2)
let B = 4
basic.showNumber(B)
let C = 6
basic.showNumber(C)
if (input.isGesture(Gesture.TiltRight)) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Heart)
}
