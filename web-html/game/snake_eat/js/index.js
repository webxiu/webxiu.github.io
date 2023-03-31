var sw = 20,// 一个方块的宽度
    sh = 20,// 一个方块的高度
    tr = 30,// 行数
    td = 30;// 列数

var snake = null, // 蛇的实例
    food = null,// 食物实例
    game = null; // 游戏实例

function Square(x, y, classname) {
    this.x = x * sw
    this.y = y * sh
    this.class = classname

    this.viewContent = document.createElement('div') // 方块 domZ
    this.viewContent.classList.add(this.class)
    this.parent = document.getElementById('snakeWrap')// 方块的父级
}

// 方块
Square.prototype.create = function () {
    this.viewContent.style.position = 'absolute';
    this.viewContent.style.width = sw + 'px';
    this.viewContent.style.height = sh + 'px';
    this.viewContent.style.left = this.x + 'px';
    this.viewContent.style.top = this.y + 'px';

    this.parent.appendChild(this.viewContent)
}

Square.prototype.remove = function () {
    this.parent.removeChild(this.viewContent)
}

// 蛇
function Snake() {
    this.head = null; // 蛇头信息
    this.tail = null; // 蛇尾信息
    this.pos = []; // 蛇身上方块的所有位置

    // 存蛇走的方向
    this.directionNum = {
        left: { x: -1, y: 0, rotate: 180 },
        right: { x: 1, y: 0, rotate: 0 },
        up: { x: 0, y: -1, rotate: -90 },
        down: { x: 0, y: 1, rotate: 90 },
    }
}

Snake.prototype.init = function () {
    // 创建蛇头
    var snakeHead = new Square(2, 0, 'snakeHead')
    snakeHead.create();
    this.head = snakeHead
    this.pos.push([2, 0])

    // 创建蛇身
    var snakeBody1 = new Square(1, 0, 'snakeBody')
    snakeBody1.create()
    this.pos.push([1, 0])

    // 创建蛇身2
    var snakeBody2 = new Square(0, 0, 'snakeBody')
    snakeBody2.create()
    this.tail = snakeBody2
    this.pos.push([0, 0])

    // 蛇头/身/尾形成链表关系
    snakeHead.last = null
    snakeHead.next = snakeBody1

    snakeBody1.last = snakeHead
    snakeBody1.next = snakeBody2

    snakeBody2.last = snakeBody1
    snakeBody2.next = null

    // 给蛇添加默认向右 走的方向属性
    this.direction = this.directionNum.right
}

Snake.prototype.getNextPos = function () {
    // 蛇头要走的下一个点的坐标
    var nextPos = [
        this.head.x / sw + this.direction.x,
        this.head.y / sh + this.direction.y
    ]

    var selfCollied = false // 是否撞到自己
    this.pos.forEach(function (value) {
        if (value[0] == nextPos[0] && value[1] == nextPos[1]) {
            selfCollied = true
        }
    })

    // 撞到自己
    if (selfCollied) {
        console.log('撞到自己..');
        this.strategies.die.call(this)
        return
    }
    // 撞到围墙
    if (nextPos[0] < 0 || nextPos[1] < 0 || nextPos[0] > td - 1 || nextPos[1] > tr - 1) {
        console.log('撞到围墙..');
        this.strategies.die.call(this)
        return
    }
    // 撞到食物
    if (food && food.pos[0] == nextPos[0] && food.pos[1] == nextPos[1]) {
        console.log('撞到食物..');
        this.strategies.eat.call(this)
        return
    }

    // 否则没撞到, 走
    this.strategies.move.call(this)
}

// 处理碰撞后要做的事
Snake.prototype.strategies = {
    // formate: 是否删除蛇尾, 传参代表要做的事情是吃
    move: function (format) {
        // 在蛇头位置创建新的身体
        var newBody = new Square(this.head.x / sw, this.head.y / sh, 'snakeBody')
        //  更新链表关系
        newBody.next = this.head.next
        newBody.next.last = newBody
        newBody.last = null

        this.head.remove()//把旧蛇头从原来的位置删除
        newBody.create()

        // 创建新的蛇头
        var newHead = new Square(this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y, 'snakeHead')
        // 更新链表关系
        newHead.next = newBody
        newHead.last = null
        newBody.last = newHead
        newHead.viewContent.style.transform = 'rotate(' + this.direction.rotate + 'deg)'
        newHead.create()

        // 蛇身上的每个方块的坐标也要更新
        this.pos.splice(0, 0, [this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y])
        this.head = newHead// 更新 this.head 的信息

        if (!format) {// 条件为 false 表示要删除 (除了吃之外的操作)
            this.tail.remove()
            this.tail = this.tail.last
            this.pos.pop()
        }
    },
    eat: function () {
        this.strategies.move.call(this, true)
        createFood()
        game.score++
    },
    die: function () {
        game.over()
    }
}

snake = new Snake()

function createFood() {
    // 食物方块的随机坐标
    var x = null
    var y = null

    var include = true; // 如果生成的坐标在蛇身上
    while (include) {
        x = Math.round(Math.random() * (td - 1))
        y = Math.round(Math.random() * (tr - 1))

        snake.pos.forEach(function (value) {
            if (x != value[0] && y != value[1]) {
                //生成的位置不再蛇身上
                include = false
            }
        })
    }

    // 生成食物
    food = new Square(x, y, 'food')
    food.pos = [x, y]
    var foodDom = document.querySelector('.food')
    if (foodDom) {
        foodDom.style.left = x * sw + 'px'
        foodDom.style.top = y * sh + 'px'
    } else {
        food.create()
    }
}

// 创建游戏
function Game() {
    this.timer = null
    this.score = 0
}

Game.prototype.init = function () {
    snake.init()
    createFood()
    document.onkeydown = function (ev) {
        var left = ev.which == 37 && snake.direction != snake.directionNum.right
        var up = ev.which == 38 && snake.direction != snake.directionNum.down
        var right = ev.which == 39 && snake.direction != snake.directionNum.left
        var down = ev.which == 40 && snake.direction != snake.directionNum.up

        if (left) {
            snake.direction = snake.directionNum.left
        } else if (up) {
            snake.direction = snake.directionNum.up
        } else if (right) {
            snake.direction = snake.directionNum.right
        } else if (down) {
            snake.direction = snake.directionNum.down
        }
    }
    this.start()
}

Game.prototype.start = function () {
    this.timer = setInterval(function () {
        snake.getNextPos()
    }, 200)
}

Game.prototype.pause = function () {
    clearInterval(this.timer)
}
Game.prototype.over = function () {
    clearInterval(this.timer)
    alert('你的得分为:' + this.score)

    // 回到游戏初始状态
    var snakeWrap = document.getElementById('snakeWrap')
    snakeWrap.innerHTML = ''
    snake = new Snake()
    game = new Game()

    var startBtnWrap = document.querySelector('.startBtn')
    startBtnWrap.style.display = 'block'
}

// 开启游戏
game = new Game()
var startBtn = document.querySelector('.startBtn button')
startBtn.onclick = function () {
    startBtn.parentNode.style.display = 'none'
    game.init(0)
}

// 继续/暂停
var isPlay = false
var snakeWrap = document.getElementById('snakeWrap')
var pauseBtn = document.querySelector('.pauseBtn button')

function play() {
    isPlay = true
    game.start()
    pauseBtn.parentNode.style.display = 'none'
}
function pause() {
    isPlay = false
    game.pause()
    pauseBtn.parentNode.style.display = 'block'
}

// 点击播放暂停
snakeWrap.onclick = pause;
pauseBtn.onclick = play;

// 空格键播放暂停
document.addEventListener('keydown', function (ev) {
    if (ev.which != 32) return
    isPlay ? pause() : play()
})