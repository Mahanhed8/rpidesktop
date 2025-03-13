controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(game.ask("Are You Sure To turn Off", "true = please turn off"))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("RPI Desktop v1.0.0")
})
let RPI: Sprite = null
game.splash("Welcome To The Raspberry Pi Desktop", "desktop.img")
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111122222222222222222222222222222222111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111122222222222222222222222f2222222222222222222222222111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111112212222222222222f222222222f2222222222222f22222222222222111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111222212222222222222f222222222f2222222222222f22222222222f22222211111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111112222221222222222222f222222222f22222222222222f22222222222f22222222211111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111122222222122222222222f2222222222f22222222222222f22222222222f22222222222111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111122222222222f2222222222f2222222222f22222222222222f22222222222f22222222222222111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111122222222222f222222222f22222222222f2222222222222f222222222222f22222222222222111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111122222222222f22222222f22222222222f22222222222222f222222222222f22222222222222211111111111111111111111111111111111111111
    111111111111111111111111111111111111111111122222222222f22222222f22222222222f22222222222222f22222222222f222222222222222221111111111111111111111111111111111111111
    111111111111111111111111111111111111111111222222222222f2222222f222222222222f22222222222222f22222222222f222222222222222222111111111111111111111111111111111111111
    111111111111111111111111111111111111111111222222222222f2222222f222222222222f2222222222222f222222222222f222222222222222222211111111111111111111111111111111111111
    111111111111111111111111111111111111111111222222222222f222222f2222222222222f2222222222222f222222222222f222222222222222222221111111111111111111111111111111111111
    11111111111111111111111111111111111111111122222222222f222222f2222222222222f22222222222222f222222222222f222222222222222222221111111111111111111111111111111111111
    11111111111111111111111111111111111111111122222222222f222222f2222222222222f2222222222222f222222222222f2222222222222222222221111111111111111111111111111111111111
    11111111111111111111111111111111111111111122222222222f22222f22222222222222f2222222222222f222222222222f2222222222222222222221111111111111111111111111111111111111
    1111111111111111111111111111111111111111212222222222f22222f22222222222222f22222222222222f222222222222f2222222222222222222221111111111111111111111111111111111111
    1111111111111111111111111111111111111111212222222222f22222f22222222222222f22222222222222f222222222222f2222222222222222222211111111111111111111111111111111111111
    1111111111111111111111111111111111111111212222222222f2222f22222222222222f22222222222222f2222222222222f2222222222222222222211111111111111111111111111111111111111
    111111111111111111111111111111111111111121222222222f22222f22222222222222f22222222222222f2222222222222f2222222222222222222111111111111111111111111111111111111111
    111111111111111111111111111111111111111121222222222f2222f222222222222222f22222222222222f222222222222f22222222222222222222111111111111111111111111111111111111111
    11111111111111111111111111111111111111112122222222f2222f222222222222222f22222222222222f2222222222222f22222222222222222221111111111111111111111111111111111111111
    11111111111111111111111111111111111111112122222222f2222f222222222222222f22222222222222f222222222222f222222222222222222211111111111111111111111111111111111111111
    11111111111111111111111111111111111111112222222222f222f222222222222222f222222222222222f222222222222f222222222222222222111111111111111111111111111111111111111111
    11111111111111111111111111111111111111112222222222f22f2222222222222222f222222222222222f22222222222f2222222222222222222111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222f22f22222222222222222f22222222222222f222222222222f2222222222222222221111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222f2f22222222222222222f222222222222222f222222222222f2222222222222222211111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222f2f22222222222222222f222222222222222f222222222222f2222222222222222211111111111111111111111111111111111111111111
    111111111111111111111111111111111111111112222222f2f22222222222222222f222222222222222f222222222222f22222222222222222111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111112222222ff222222222222222222f222222222222222f222222222222f22222222222222221111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111222222ff2222222222222222222f222222222222222f222222222222f22222222222222221111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111122222f2222222222222222222f2222222222222222f222222222222f22222222222222211111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111112222ff2222222222222222222f222222222222222f222222222222f222222222222222111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111222f2f222222222222222222f2222222222222222f222222222222f222222222222222111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111112f2f2222222222222222222f2222222222222222f222222222222f222222222222221111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111122f222222222222222222f22222222222222222f22222222222f2222222222222211111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111112f2222222222222222222f22222222222222222f22222222222f2222222222222211111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111112f222222222222222222f22222222222222222f222222222222f2222222222222111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111112222222222222222222f22222222222222222f22222222222f22222222222222111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111222222222222222222f22222222222222222f222222222222f22222222222221111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111122222222222222222f222222222222222222f222222222222f22222222222221111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111122222222222222222f22222222222222222f222222222222f222222222222221111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111222222222222222f222222222222222222f222222222222f222222222222211111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111122222222222222f2222222222222222222f222222222222f222222222222111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111122222222222222f222222222222222222f222222222222f2222222222222111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111222222222222f2222222222222222222f222222222222f2222222222221111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111122222222222f2222222222222222222f222222222222f22222222222221111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111122222222222f2222222222222222222f222222222222f22222222222221111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111222222222f2222222222222222222f222222222222f222222222222221111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111122222222f22222222222222222222f222222222222f222222222222211111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111122222222f2222222222222222222f2222222222222f222222222222211111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111222222f22222222222222222222f222222222222f2222222222222211111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111122222f222222222222222222222f222222222222f2222222222222211111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111112222f222222222222222222222f222222222222f22222222222222211111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111122ff222222222222222222222f222222222222f22222222222222111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111222222222222222222222222f2222222222222f22222222222222111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111222222222222222222222222f2222222222222f22222222222222111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111122222222222222222222222f222222222222f222222222222222111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111112222222222222222222f2222222222222f222222222222221111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111112222222222222222f2222222222222f222222222222221111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111112222222222222f22222222222222f222222222222211111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111222222222222f2222222222222f2222222222222211111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111222222222f22222222222222f2222222222222211111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111122222222f22222222222222f2222222222222111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111122222f222222222222222f2222222222222111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111221222222222222222f22222222222221111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111121222222222222222f22222222222221111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111222222222222222f22222222222111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111122222222222222f22222222211111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111122222222222f222222221111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111222222222f222222111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111222222f2222211111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111222221111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff7fffffff9ffffff555ffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff7fffffff999fffff5555fffff11f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff2fffffff99899ffff55555ffff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff222fffffff999fffff55555ffff11f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff2fffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
controller.moveSprite(RPI, 100, 100)
RPI = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
