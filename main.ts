let race_start = 0
let textSprite: TextSprite = null
let Traffic_Light = sprites.create(img`
    .............................................
    .............................................
    ..fffffffffffffffffffffffffffffffffff........
    ..ffcccccccccccccccccccccccccccccccccf.......
    ..fcfcccccccccccccccccccccccccccccccccf......
    ..fccfcccccccccccccccccccccccccccccccccf.....
    ..fcccfcccccccccccccccccccccccccccccccccf....
    ..fccccfcccccccccccccccccccccccccccccccccf...
    ..fcccccfcccccccccccccccccccccccccccccccccf..
    ..fccccccfffffffffffffffffffffffffffffffffff.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbffcccccccccffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbfcccccccccccccfbbbbbbbbbf.
    ..fccccccfbbbbbbbbfccccfffffffffccfbbbbbbbbf.
    ..fccccccfbbbbbbbfcccffeeeeeeeeeffcfbbbbbbbf.
    ..fccccccfbbbbbbfcccfeeeeeeeeeeeeefcfbbbbbbf.
    ..fccccccfbbbbbbfccfeeeeeeeeeeeeeeeffbbbbbbf.
    ..fccccccfbbbbbfccfeeeeeeeeeeeeeeeeeffbbbbbf.
    ..fccccccfbbbbbfcfeeeeeeeeeeeeeeeeeeefbbbbbf.
    ..fccccccfbbbbbfcfeeeeeeeeeeeeeeeeeeefbbbbbf.
    ..fccccccfbbbbbffeeeeeeeeeeeeeeeeeeeefbbbbbf.
    ..fccccccfbbbbbffeeeeeeeeeeeeeeeeeeeefbbbbbf.
    ..fccccccfbbbbbfeeeeeeeeeeeeeeeeeeeeefbbbbbf.
    ..fccccccfbbbbbfeeeeeeeeeeeeeeeeeeee1fbbbbbf.
    ..fccccccfbbbbbfeeeeeeeeeeeeeeeeeeee1fbbbbbf.
    ..fccccccfbbbbbfeeeeeeeeeeeeeeeeeee11fbbbbbf.
    ..fccccccfbbbbbbfeeeeeeeeeeeeeeeeee1fbbbbbbf.
    ..fccccccfbbbbbbfeeeeeeeeeeeeeeeee11fbbbbbbf.
    ..fccccccfbbbbbbbfeeeeeeeeeeeeeee11fbbbbbbbf.
    ..fccccccfbbbbbbbbfeeeeeeeeeeeee11fbbbbbbbbf.
    ..fccccccfbbbbbbbbbfeeeeeeeeee111fbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbffeee111111ffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbffcccccccccffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbfcccccccccccccfbbbbbbbbbf.
    ..fccccccfbbbbbbbbfccccfffffffffccfbbbbbbbbf.
    ..fccccccfbbbbbbbfcccff444444444ffcfbbbbbbbf.
    ..fccccccfbbbbbbfcccf4444444444444fcfbbbbbbf.
    ..fccccccfbbbbbbfccf444444444444444ffbbbbbbf.
    ..fccccccfbbbbbfccf44444444444444444ffbbbbbf.
    ..fccccccfbbbbbfcf4444444444444444444fbbbbbf.
    ..fccccccfbbbbbfcf4444444444444444444fbbbbbf.
    ..fccccccfbbbbbff44444444444444444444fbbbbbf.
    ..fccccccfbbbbbff44444444444444444444fbbbbbf.
    ..fccccccfbbbbbf444444444444444444444fbbbbbf.
    ..fccccccfbbbbbf444444444444444444441fbbbbbf.
    ..fccccccfbbbbbf444444444444444444441fbbbbbf.
    ..fccccccfbbbbbf444444444444444444411fbbbbbf.
    ..fccccccfbbbbbbf4444444444444444441fbbbbbbf.
    ..fccccccfbbbbbbf4444444444444444411fbbbbbbf.
    ..fccccccfbbbbbbbf44444444444444411fbbbbbbbf.
    ..fccccccfbbbbbbbbf444444444444411fbbbbbbbbf.
    ..fccccccfbbbbbbbbbf4444444444111fbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbff444411111ffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbffffffffffbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbffcccccccccffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbfcccccccccccccfbbbbbbbbbf.
    ..fccccccfbbbbbbbbfccccfffffffffccfbbbbbbbbf.
    ..fccccccfbbbbbbbfcccff666666666ffcfbbbbbbbf.
    ..fccccccfbbbbbbfcccf6666666666666fcfbbbbbbf.
    ..fccccccfbbbbbbfccf666666666666666ffbbbbbbf.
    ..fccccccfbbbbbfccf66666666666666666ffbbbbbf.
    ..fccccccfbbbbbfcf6666666666666666666fbbbbbf.
    ..fccccccfbbbbbfcf6666666666666666666fbbbbbf.
    ..fccccccfbbbbbff66666666666666666666fbbbbbf.
    ..fccccccfbbbbbff66666666666666666666fbbbbbf.
    ..fccccccfbbbbbf666666666666666666666fbbbbbf.
    ..fccccccfbbbbbf666666666666666666661fbbbbbf.
    ..fccccccfbbbbbf666666666666666666661fbbbbbf.
    ..fccccccfbbbbbf666666666666666666611fbbbbbf.
    ..fccccccfbbbbbbf6666666666666666661fbbbbbbf.
    ..fccccccfbbbbbbf6666666666666666611fbbbbbbf.
    ..fccccccfbbbbbbbf66666666666666611fbbbbbbbf.
    ..fccccccfbbbbbbbbf666666666666611fbbbbbbbbf.
    ..fccccccfbbbbbbbbbf6666666666111fbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbff666111111ffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbbbffffffffffbbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbbffcccccccccffbbbbbbbbbbf.
    ..fccccccfbbbbbbbbbfcccccccccccccfbbbbbbbbbf.
    ..fccccccfbbbbbbbbfccccfffffffffccfbbbbbbbbf.
    ..fccccccfbbbbbbbfcccff666666666ffcfbbbbbbbf.
    ..fccccccfbbbbbbfcccf6666666666666fcfbbbbbbf.
    ..fccccccfbbbbbbfccf666666666666666ffbbbbbbf.
    ..fccccccfbbbbbfccf66666666666666666ffbbbbbf.
    ..fccccccfbbbbbfcf6666666666666666666fbbbbbf.
    ..fccccccfbbbbbfcf6666666666666666666fbbbbbf.
    ..fccccccfbbbbbff66666666666666666666fbbbbbf.
    ..fccccccfbbbbbff66666666666666666666fbbbbbf.
    ..fccccccfbbbbbf666666666666666666666fbbbbbf.
    ..fccccccfbbbbbf666666666666666666661fbbbbbf.
    ..fccccccfbbbbbf666666666666666666661fbbbbbf.
    ..fccccccfbbbbbf666666666666666666611fbbbbbf.
    ..fccccccfbbbbbbf6666666666666666661fbbbbbbf.
    ..fccccccfbbbbbbf6666666666666666611fbbbbbbf.
    ..fccccccfbbbbbbbf66666666666666611fbbbbbbbf.
    ...fcccccfbbbbbbbbf666666666666611fbbbbbbbbf.
    ....fccccfbbbbbbbbbf6666666666111fbbbbbbbbbf.
    .....fcccfbbbbbbbbbbff666111111ffbbbbbbbbbbf.
    ......fccfbbbbbbbbbbbbfffffffffbbbbbbbbbbbbf.
    .......fcfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    ........ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    .........fffffffffffffffffffffffffffffffffff.
    .............................................
    .............................................
    `, SpriteKind.Player)
Traffic_Light.z = 102
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let _1 = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_1.bottom = 65
let _2 = sprites.create(img`
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
_2.top = 97
timer.background(function () {
    pause(1000)
    Traffic_Light.image.replace(14, 2)
    pause(1000)
    Traffic_Light.image.replace(2, 14)
    Traffic_Light.image.replace(4, 5)
    pause(1000)
    Traffic_Light.image.replace(5, 4)
    Traffic_Light.image.replace(6, 7)
    pause(1000)
    Traffic_Light.destroy()
    textSprite = textsprite.create("GO")
    textSprite.setPosition(34, 35)
    textSprite.setOutline(2, 4)
    textSprite.setMaxFontHeight(50)
    pause(1000)
    textSprite.destroy()
    race_start = 0
})
