//做飞翔的小鸟游戏，需要保证5张图片全局加载完毕之后进行游戏画面绘制
//function{loadImage}   函数加载图像
//param{imgUrl:Object}  按照key,val的形式储存所有要加载的图像地址
//param{fn:Function}    当所有的图像加载完毕之后，就会被调用，同时会把所有的图像资源传递过去
function loadImage(imgUrl,fn){

     //存储图像资源
     var imgObj = {};

     var tempImg;

     //记录已经加载完毕的图片数量
     var loaded = 0;
     //统计要加载的图像数量
     var imgLength = 0;

     //遍历所有的url，动态创建imh
     for(var key in imgUrl){
        imgLength++;
        //根据遍历到的url，加载图像
        tempImg = new Image();

        //给所有图像监听load事件
        tempImg.onload = function(){
            loaded++;
            //当图片加载的数量大于等于要加载的数量，就执行回调函数
            if(loaded >= imgLength){
                fn(imgObj);

            }
        };

        tempImg.src = imgUrl[key];

        //把当前加载的图像存储起来
        imgObj[key] = tempImg;
     }
}