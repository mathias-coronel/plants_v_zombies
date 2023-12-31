namespace SpriteKind {
    export const Shilld = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Shilld)
    mySprite.follow(conehead_zombie)
    if (Math.percentChance(25)) {
        mySprite.setImage(assets.image`myImage1`)
        mySprite.follow(conehead_zombie)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroy(mySprite)
    } else {
        sprites.destroy(mySprite)
    }
})
// This is the code for shooting puffs
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    puff = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f a a a a f . . . . . 
        . . . f a a a c f a a f . . . . 
        . . . f f f a a a a a f . . . . 
        . . . f f f f a a f a a f . . . 
        . . . f a a a a f f a f . . . . 
        . . . . f a a a f a f . . . . . 
        . . . . . f a a a f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    puff.setScale(0.5, ScaleAnchor.Middle)
    puff.setVelocity(50, 0)
    puff.x = puff_shroom.x + 2
    puff.y = puff_shroom.y + 6
})
// This is the code for when a puff hits a zombie
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.data.num_hits = sprite.data.num_hits + 1
// check if bigger than max_hits
    if (sprite.data.num_hits >= sprite.data.max_hits) {
        sprite.destroy()
        otherSprite.destroy()
    } else {
        otherSprite.destroy()
    }
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "yay you win")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), true)
})
sprites.onOverlap(SpriteKind.Shilld, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(conehead_zombie)
})
// This is the code block for game over
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "the zombie ate your brainz")
    game.gameOver(false)
})
let y2 = 0
let x2 = 0
let y = 0
let x = 0
let puff: Sprite = null
let mySprite: Sprite = null
let puff_shroom: Sprite = null
let screendoor_zombie: Sprite = null
let conehead_zombie: Sprite = null
let garg: Sprite = null
let flag_zombie: Sprite = null
let mySprite2 = null
game.splash("plants vs zombies")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff111111111111111f11111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffff33fffffffffff
    fffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333f3333ffffffffffffffff33f3fffcccfcf
    fffffcfffffffffffffff333f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333933fffffffffffff333333ffffcffcc
    ffffccf33ffffffffff3333333ffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3335333fffffffffffff33333b33ffcccffc
    ffcff33333ccfffffff3333333fffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333555333ffffffffffff333355333fccffff
    fccf33333333fffffff333533333ffffffffffffffffccfffffcccfff333333ffccfffffffffffffffffffffffffffffffffccfffffffffccffffffffff333553333fffffffffffff33555333fcccfff
    cc9c93353333ccfffff33555333fffffccffffffffffccfffffffff33355333fffffffffccfccffffffccffffffffcffffffccffffcffffcccfffffffffff333333ffffffcffffff3333533cffcccccf
    c99cc3555339ccffcf3333533333cfffccffccfffffffffffffffff33353333fffffffffcfffcfffffffffffcffffcffffffffffffcffffcfffffffccccf3333333ccfffcccfffff333333cccccccccf
    9cc9333333399ccfff333333333ffffffffccffffffcffffffccfff3333333ffffffffcffffffffffccfffffccfffffcfffcfccffffccfffffcccffccccf7333739ccffffccffffff333333ccccccfff
    9ccc33333339ccffffff333333fffffccffffffffcfffffffffffff3333333fcfccfffcffcfffffffccfffffffcfffccfffffffffffccfffffffcfffccff77777799cffffccfffccffff79399cc9ccff
    ccccc977339cccffff7797777cfffffccffffffffcfffffffaffffff393333ffffcffffffcffcfffffffffccfccfffcfffccffffff6fffffffffffffffff77777999ccffffcfffccfff777799cc9ccff
    cc997777799c97fff77797777ffffffffaa7fcff77fff777aaff77c7977377777fffffcffffccffffff77ffcfaaff7cfff77fc7fff6f7fccf77cc7aafcfff7779997ccffffcfffff77f777799cc9ccff
    c779777779777777f797777777f7c77f6a77f7cf777f7777aaaaa7779777777777ff77cff77fff77fcf77779a6af7777ff77f77fff6f7f7cf77c779a6c77f7797777c77c77fffc7a7aa777cc99ccccff
    9777977779777a7777c7777977f7c77faaa77777777777777777777777777777777c77c777777777777777777aa777777777777777aa777777777aa7aa777777777777777777ff7a7a7779979c7797cf
    9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a777777cc7797cf
    777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
    7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
    77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
    77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
    777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
    777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777aa7777777
    77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
puff_shroom = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f a a a a f f . . . . 
    . . . f f a a a a 1 1 f f . . . 
    . . f f a a a a a 1 1 1 f f . . 
    . f f 1 1 1 a a a a 1 1 a f f . 
    f f 1 1 1 1 a a a a a a a f f f 
    f a 1 1 1 a a a a a 1 1 1 f f f 
    f a a a a a 1 1 a a 1 1 1 f f f 
    f a a a a 1 1 1 1 a a 1 1 1 f f 
    . f a a a a 1 1 a a a a a a f . 
    . . f f a a a a a a a a f f . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 f b b c c . . . 
    . . . . . b b d f 1 b 1 1 . . . 
    . . . . . b d d d 1 b c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(puff_shroom, 0, 100)
puff_shroom.setPosition(20, 54)
puff_shroom.setStayInScreen(true)
game.showLongText("the zombies are coming", DialogLayout.Bottom)
info.startCountdown(60)
let max_hits_cone = 3
let max_hits_flag = 2
let max_hits_garg = 6
let max_hit_screen = 5
game.onUpdateInterval(3000, function () {
    conehead_zombie = sprites.create(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ............4.............
        ...........111............
        ...........444............
        ...........111............
        ..........44444...........
        ..........bbbbb...........
        ..........bfbfb...........
        ..........bfbfb...........
        ...........bbb............
        ..........ee2ee...........
        .........eee2eee..........
        ........e.ee2ee.e.........
        ........e.eefee.e.........
        ........b.88888.b.........
        ..........88.88...........
        ..........88.88...........
        ..........88.88...........
        ..........ff.ff...........
        ..........................
        ..........................
        ..........................
        ..........................
        `, SpriteKind.Enemy)
    conehead_zombie.follow(puff_shroom, 30)
    conehead_zombie.setPosition(161, 63)
    conehead_zombie.data.num_hits = 0
conehead_zombie.data.max_hits = max_hits_cone
if (Math.percentChance(25)) {
        garg = sprites.create(img`
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ..................................................................ffff..............................
            .................................................................ffeeeff............................
            ................................................................ffeeeeeeef...ff.....................
            ................................................................feeebbbbbe...bbb....................
            ................................................................feeebbbbbef.fbbb....................
            ................................................................feeebbbbbeeffbbbf...................
            ................................................................feeebbbbbeeefeeef...................
            .............................................................fffffeebbbbbefffeeef...................
            ..........................................................ffffeeeeeeeeeeeeeffeeeffff................
            ..........................................................feeeeeeeeeeeeeeeeeeeeeeeefff..............
            .............................................bbbbb........feeeeeeeeeeeeeeeeeeeeeeeeeef..............
            ............................................bbbbbbb.......feeeeeeeeeeeeeeeeeeeeeeeeeef..............
            ............................................bbfbfbb.......feeeeeeeeeeeeeeeeeeeeeeeeeeef.............
            ............................................bbbfbbb.......feeeeeeeeeeeeeeeeeeeeeeeeeeeff............
            ............................................bfbbbfb.......feeeeeeeeeeefeeeeeeeeeeeeefff.............
            ............................................bfbbbfb......ffffffffffffeeffeffffeeeefff...............
            ............................................bbbfbbb.....eeeee......eeeeeef..ffeeeef.................
            .............................................bfbfb......ebbee.....fbbbbbef...feeeeff................
            ............................................1212121....eebbee.....fbbbbbff...feeeeef................
            ........................................ee..2121212....ebebee.....fbbbbbf....ffeeeeff...............
            ...................................eeeeeeeeeeeeeeeeeee.eeeee......fbbbbbf.....feeeeef...............
            ..................................eebebbeeeeeeeeeeeeeeeeebee......fbbbbbf.....ffebbbf...............
            ..................................ebbbeeeeeeeeeeeeeeeebeeee........ffffff......ffbbbf...............
            ..................................eeeee.eeeeeeeeeeeeeebbeee...........ff........fbbbf...............
            ..................................ebbee.eeeeeeeeeeeeeeeee...........................................
            ..................................eebe..eeeeeeeeeeeeee..............................................
            ..................................bbee..eeeeeeeeeeeeee..............................................
            ..................................bbee..eeeeeeeeeeebee..............................................
            ..................................bbe...bbbbeeebbbbbee..............................................
            ..................................bb....bebbbb8b8bbbbb..............................................
            ..................................bb....88888888888888..............................................
            ........................................88888888888888..............................................
            ........................................8888.......888..............................................
            ........................................888........888..............................................
            ........................................8bb........888..............................................
            ........................................bbb........888..............................................
            ........................................bbbb.......888..............................................
            ........................................bbbb.......b88..............................................
            ........................................888........bbb..............................................
            ........................................888........bbb..............................................
            ........................................888........888..............................................
            ........................................888........888..............................................
            ........................................fff........fff..............................................
            .......................................ffff.......ffff..............................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            `, SpriteKind.Enemy)
        garg.setPosition(154, 63)
        garg.follow(puff_shroom, 30)
        garg.data.num_hits = 0
garg.data.max_hits = max_hits_garg
    }
    if (Math.percentChance(20)) {
        flag_zombie = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
        flag_zombie.follow(puff_shroom, 35)
        flag_zombie.setPosition(152, 57)
        flag_zombie.data.num_hits = 0
flag_zombie.data.max_hits = max_hits_flag
for (let index = 0; index <= 4; index++) {
            conehead_zombie = sprites.create(img`
                ..........................
                ..........................
                ..........................
                ..........................
                ............4.............
                ...........111............
                ...........444............
                ...........111............
                ..........44444...........
                ..........bbbbb...........
                ..........bfbfb...........
                ..........bfbfb...........
                ...........bbb............
                ..........ee2ee...........
                .........eee2eee..........
                ........e.ee2ee.e.........
                ........e.eefee.e.........
                ........b.88888.b.........
                ..........88.88...........
                ..........88.88...........
                ..........88.88...........
                ..........ff.ff...........
                ..........................
                ..........................
                ..........................
                ..........................
                `, SpriteKind.Enemy)
            conehead_zombie.follow(puff_shroom, 30)
            if (index % 2 == 0) {
                x = 161 + 10 * index + 5 * (index + 1)
                y = 63 + 10 * index + 5 * (index + 1)
            } else {
                x2 = 161 - 10 * index + 5 * (index + 1)
                y2 = 63 - 10 * index - 5 * (index + 1)
            }
            conehead_zombie.setPosition(x, y)
            conehead_zombie.data.num_hits = 0
conehead_zombie.data.max_hits = max_hits_cone
        }
        if (Math.percentChance(50)) {
            screendoor_zombie = sprites.create(img`
                ..........................
                ..........................
                ..........................
                ..........................
                ..........................
                ..........................
                ..........................
                ..........................
                ....aa.....bbb............
                ....55....bbbbb...........
                ....aa....bfbfb...........
                ....aa....bfbfb...........
                ....ba.....bbb............
                ....aa....99299...........
                ....bab99999299...........
                ....aa....99299...........
                ....bab99999999...........
                ....aa....66666...........
                ....aa....66.66...........
                ..........66.66...........
                ..........66.66...........
                ..........bb.bb...........
                ..........................
                ..........................
                ..........................
                ..........................
                `, SpriteKind.Enemy)
            screendoor_zombie.follow(puff_shroom, 40)
            screendoor_zombie.setPosition(152, 72)
            screendoor_zombie.data.num_hits = 0
screendoor_zombie.data.max_hits = max_hit_screen
        } else {
            sprites.destroy(puff, effects.spray, 500)
        }
    }
})
