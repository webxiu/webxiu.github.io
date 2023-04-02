/*
********mobileBanner使用方法***************

1、html结构：
    <div class="banner">
            <ul class="banner-img">
                <li href="javascript:;"><img src="./images/6.jpg"></li>
                <li href="javascript:;"><img src="./images/1.jpg"></li>
                <li href="javascript:;"><img src="./images/2.jpg"></li>
                <li href="javascript:;"><img src="./images/3.jpg"></li>
                <li href="javascript:;"><img src="./images/6.jpg"></li>
                <li href="javascript:;"><img src="./images/7.jpg"></li>
                <li href="javascript:;"><img src="./images/8.jpg"></li>
                <li href="javascript:;"><img src="./images/1.jpg"></li>
            </ul>
            <ul class="paging">
                <li href="javascript:;" class="active">1</li>
                <li href="javascript:;">2</li>
                <li href="javascript:;">3</li>
                <li href="javascript:;">4</li>
                <li href="javascript:;">5</li>
                <li href="javascript:;">6</li>
            </ul>
        </div>
    </div>

2、调用方式
    window.onload = function () {
        banner(图片UL，指示灯ul，active类名，图片数量，时间);
        banner(".banner-img",'.paging','active',6,1000);
    }

 */

function banner(bannerImgBox,tipBox,activeName,bannerImgNumber,setTime) {
	//初始化定时器
	clearInterval(timeId);
    //获取 轮播图的ul
    var moveUl = document.querySelector(bannerImgBox);
    //获取 轮播图所有的li
    var liDoms = moveUl.children;
    //获取 banner 图宽度
    var width = liDoms[0].offsetWidth;

    // 获取 指示灯的li标签
    var indexUl = document.querySelector(tipBox);
    var indexLiArr = indexUl.children;
    //让图片从第1个开始轮播
    var index = 1;
    // 开启定时器
    function startTime(){
        // 累加
        index++;
        // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
        moveUl.style.transition = 'all .3s';
        // 修改 ul的位置
        moveUl.style.transform = 'translateX('+index*width*-1+'px)';
    }
    var timeId = setInterval(startTime,setTime);

    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd',function () {
        //console.log('过渡结束');
        //  如果 index 超出最大索引
        if (index>bannerImgNumber) {
            index = 1;
            // 关闭过渡
            moveUl.style.transition = '';
            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }else if(index<1){
            // 跳到倒数第二张
            index= bannerImgNumber;
            // 关闭过渡
            moveUl.style.transition = '';
            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }

        // 修改 指示灯li标签的 class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }
        // 有一个 1的 差值
        indexLiArr[index-1].className = activeName;
    })

    //鼠标移动到图片停止轮播
    // 修改 指示灯li标签的 class
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].index = i;
        indexLiArr[i].onmouseover = function(){
            clearInterval(timeId);
            for(var i=0;i<indexLiArr.length;i++)  {
                indexLiArr[i].className = "";
            }

            index = this.index+1;
            //console.log(index-1);
            moveUl.style.transition = 'all .3s';
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            indexLiArr[index-1].className = activeName;
        }
        indexLiArr[i].onmouseout = function(){
            timeId = setInterval(startTime,setTime);
        }
    }
    moveUl.onmouseenter = function(){
        clearInterval(timeId);
    }
    moveUl.onmouseout = function(){
		//初始化定时器
		clearInterval(timeId);
        timeId = setInterval(startTime,setTime);
    }


    // 移动端滑屏 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;
    // 记录移动的值
    var moveX = 0;

    // 触摸开始
    moveUl.addEventListener('touchstart',function (event) {
        // 关闭定时器
        clearInterval(timeId);
        // 关闭过渡效果
        moveUl.style.transition = '';
        // 记录开始值
        startX = event.touches[0].clientX;

    })

    // 触摸中
    moveUl.addEventListener('touchmove',function (event) {
        // 计算移动的值
        moveX = event.touches[0].clientX - startX;
        // 移动ul默认的移动值是 index*-1*width
        moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
    })

    // 触摸结束
    /*
        手指松开的时候 判断 移动的距离 进行 是否吸附
            由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
                吸附回的值是 index*-1*width
            如果移动的距离较大
                需要判断正负
                    index++;
                    index--;
                     index*-1*width
    */
    moveUl.addEventListener('touchend',function (event) {
        // 定义 最大的 偏移值
        var maxDistance = width/3;
        // 判断 是否超过
        if (Math.abs(moveX)>maxDistance) {
            // 判断 到底是 往左 还是往右移动
            if (moveX>0) {
                index--;
            }else{
                index++;
            }
            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';

            // 吸附 一整页
            moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';

        }else{
            // 如果 进到这里了 说明 没有超过 我们定义的 最大偏移值 吸附回去即可

            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';
            // 吸附回去
            moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
        }

        // 记录结束值

        // 开启全局定时器
        timeId = setInterval(startTime,setTime)
    })
}