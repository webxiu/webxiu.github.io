$(function(){
    //header购物车
    (function(){
	    var $shop = $('#h_main .h_m_right .h_m_r_shop');
	    var $s_hide = $('#h_main .h_m_right .h_m_r_shop .h_m_r_s_hide');
	    $shop.hover(function(){//封装了onmouseover和onmouseout
	        $s_hide.stop(true).slideDown();
	    },function(){
	        $s_hide.stop(true).slideUp();
	    });
	    //搜索框下方搜索列表
	    var $search = $('#nav .n_search');
	    var $input = $('#nav .n_search .n_s_input input');
	    var $c_hide = $('#nav .n_search .n_s_input .n_s_hide');
	    $input.focus(function(){
	    	$search.addClass('focus');
	    	$c_hide.show();
	    }).blur(function(){
	    	$search.removeClass('focus');
	    	$c_hide.hide();
	    });
    })();

    //鼠标滑动到手机平板路由器等产品区域显示下方隐藏产品
    (function(){
    	var $one = $('#nav .n_main .n_m_one');
	    var $product = $('#n_w_product');
	    var $_ul = $('#n_w_product .n_w_p_main ul');
	    $one.hover(function(){
	        var _index = $(this).index();
	        $product.stop(true).slideDown();
	        $_ul.eq(_index).show().siblings().hide();
	    },function(){
	        $product.stop(true).slideUp();
	    });
	    //产品下拉事件
	    $product.hover(function(){
	        $(this).stop(true).slideDown();
	    },function(){
	        $(this).stop(true).slideUp();
	    });
    })();

    //轮播图指示灯
    (function(){
	    var $tabLi = $('#b_main .b_m_tab li');
	    var $picLi = $('#b_main .b_m_pic li');
	    var $btn = $('#b_main .b_m_btn div')
	    var _index = 0;//全局索引
	    var len = $tabLi.length;//5
	    var timer = null;//定时器
	    var $banner_main = $('#b_main');

	    $tabLi.hover(function(){//hover事件可以用css做
	    	$(this).addClass('hover');
	    },function(){
	    	$(this).removeClass('hover');
	    }).click(function(){
	    	_index = $(this).index();
	    	plays();
	    });
	    //点击左右按钮
	    $btn.click(function(){
	    	var index = $(this).index();
	    	if(index){//判断点击的是否右按钮
	    		_index++;
	    		if(_index > len-1){
	    			_index = 0;
	    		}
	    		plays();
	    	}else{
	    		_index--;
	    		if(_index < 0){
	    			_index = 4;
	    		}
	    		plays();
	    	}
	    });
	    //封装重复代码
	    function plays(){
	    	$tabLi.eq(_index).addClass('click').siblings().removeClass('click');
	    	$picLi.eq(_index).fadeIn().siblings().fadeOut();
	    }
	    //自动轮播
	    function autoPlay(){
	    	timer = setInterval(function(){
	    		_index++;
	    		if(_index > len-1){
	    			_index = 0;
	    		}
	    		plays();
	    	},3000);
	    }
	    autoPlay();//调用执行定时轮播

	    //停止定时轮播，离开继续
	    $banner_main.hover(function(){
	    	clearInterval(timer);
	    },function(){
	    	autoPlay();
	    });
    })();

    //鼠标滑入banner右侧菜单显示、隐藏内容
	(function(){
		var $nav_li = $('#b_nav>ul>li');
		$nav_li.hover(function(){
			$(this).find('.b_n_hide').show();
		},function(){
			$(this).find('.b_n_hide').hide();
		});
	})();

	//明星单品 动态添加数据
	(function(){
		var $data = miData.starGoods;
		var len = $data.imgSrc.length;
		var html = "";
		var $ul = $('#stargoods .s_goods ul');
		var $btn = $('#stargoods .s_title .s_t_btn div');
		var mark = true;
		var $left = $('#stargoods .s_title .s_t_btn .s_t_b_left');
		var $right = $('#stargoods .s_title .s_t_btn .s_t_b_right');
		var timer = '';
		for(var i=0;i<len;i++){
			html += "<li>"+

                   "<a href='' class='s_g_img'><img src='"+$data.imgSrc[i]+"'></a>"+
                   "<a href='' class='s_g_title'>"+$data.title[i]+"</a>"+
                   "<p class='s_g_detail'>"+$data.detail[i]+"</p>"+
                   "<p class='s_g_price'>"+$data.price[i]+"</p>"+
                "</li>";
		}
        $ul.append(html);//在原生js中用appendChild

        var $li = $('#stargoods .s_goods li');
        var margin = $li.eq(5).position().left;//拿到定位元素的左边位置(是第六个元素，下标是5)
        //左右点击移动
        $btn.click(function(){
        	var idx = $(this).index();
        	if(idx){
        		if(mark){//如果是右边(左右两边的下标是0和1，0是false,1是true)
        			mark = !mark;
        			$ul.stop(true).animate({
        				marginLeft: -margin
        			},500);
        			toggle();
        			clearInterval(timer);
					auto();
        		}
        	}else{
        		if(!mark){
        			mark = !mark;
        			$ul.stop(true).animate({
        				marginLeft: 0
        			},500);
        			toggle();
        			clearInterval(timer);
					auto();
        		}
        	}
        });
        //实现click点击样式的轮播切换
        function toggle(){
        	$left.toggleClass('click');//左边有click就让它消失
        	$right.toggleClass('click');//右边有click就让它消失
        };
        //自动轮播
       	function auto(){
       		 timer = setInterval(function(){
	        	if(mark){
	    			mark = !mark;
	    			$ul.stop(true).animate({
	    				marginLeft: -margin
	    			},500);
	    			toggle();
	    		}else{
	    			mark = !mark;
	    			$ul.stop(true).animate({
	    				marginLeft: 0
	    			},500);
	    			toggle();
	    		}
	        },6000);
       	};
		auto();
	})();

	//搭配 动态添加数据
	(function(){
		var $data = miData.match;
		var len = $data.length;
		var $right =$('#match .m_cont .m_c_right');
		var $t_li = $('#match .m_title ul li');
		$t_li.eq(0).addClass('hover');
		for(var i=0;i<len;i++){
			var $ul = $('<ul></ul>');
			$right.append($ul);
		}
		var $ul = $('#match .m_cont .m_c_right ul');
		//让第一个ul显示出来
		$ul.eq(0).css('display','block');

		$ul.each(function(index){
			for(var i=0;i<9;i++){
				if(i<7){
					$li = $("<li class='m_c_bottom'>"+
                                "<a href='' class='m_c_r_img'><img src='image/match/"+$data.attr[index]+"/"+(i+1)+".jpg' alt=''></a>"+
                                "<a href='' class='m_c_r_title'>"+$data[$data.attr[index]].title[i]+"</a>"+
                                "<p class='m_c_r_price'>"+$data[$data.attr[index]].price[i]+"</p>"+
                                "<p class='m_c_r_comment'>"+$data[$data.attr[index]].comment[i]+"</p>"+
                            "</li>");
							var $div = $("<div class='m_c_hide'>"+
	                                    "<span class='review'>B2C的产品值得信赖，用了一段时间，无论是听歌，打电话...</span>"+
	                                    "<span class='author'>来自于 气功流 的评价</span>"+
	                                "</div>");
								$li.append($div);

		//单独给没一个加，改变i==6的值即可
					//if(i==6 && index==0){
						// var $div = $("<div class='m_c_hide'>"+
	     //                                "<span class='review'>B2C的产品值得信赖，用了一段时间，无论是听歌，打电话...</span>"+
	     //                                "<span class='author'>来自于 气功流 的评价</span>"+
	     //                            "</div>");
						// 			$li.append($div);
					//}
				}else if(i==7){
					$li = $("<li class='m_c_eight'>"+
                                "<a href='' class='m_c_e_title'>"+$data[$data.attr[index]].title[i]+"</a>"+
                                "<a href='' class='m_c_e_img'><img src='image/match/"+$data.attr[index]+"/"+(i+1)+".jpg'></a>"+
                                "<p class='m_c_e_price'>"+$data[$data.attr[index]].price[i]+"</p>"+
                            "</li>");
				}else{
					$li = $("<li class='m_c_nine'>"+
                                "<a href='' class='m_c_n_more'>浏览更多</a>"+
                                "<a href='' class='m_c_n_ear'>耳机音箱</a>"+
                                "<a href='' class='iconfont'>&#xe617;</a>"+
                            "</li>");
				}
				$(this).append($li);	//给当前的ul追加li
			}
		});
		//当鼠标滑动到li的时候
		var $li = $('#match .m_cont .m_c_right ul li');
		$li.hover(function(){
			$(this).find('.m_c_hide').stop(true).animate({
				bottom:0,
				opacity:1
			},300);
		},function(){
			$(this).find('.m_c_hide').stop(true).animate({
				bottom:-74,
				opacity:0
			},300);
		});
		//鼠标移入四个标题中的li元素，显示下方ul
		$t_li.mouseover(function(){
			var _index = $(this).index();
			$(this).addClass('hover').siblings().removeClass('hover');
			$ul.eq(_index).show().siblings().hide();
		});
	})();

	//智能硬件
	(function(){
		var $freetag = $('#smart .s_cont li.freetag');
		var $gifttag = $('#smart .s_cont li.gift');
		var $freeDiv = $("<div class='icon'>免邮费</div>");
		var $giftDiv = $("<div class='icon' style='background: #2196f3'>有赠品</div>");
		$freetag.append($freeDiv);
		$gifttag.append($giftDiv);
	})();

    //内容_左右轮播 开始
    (function(){
        var $tabLi = $('#content .c_cont .c_c_li .tab li');
        var $box_wrap = $('#content .c_cont .c_c_li .box_wrap');
        var $li = $('#content .c_cont .c_c_li');
        var $btn = $('#content .c_cont .c_c_li .btn div');
        var len = $box_wrap.length;//4
        //给$box_wrap附加一个属性a
        $box_wrap.each(function(){
            this.a = 0;//js的this
        });
        //给li上面的border-top更好颜色
        $li.each(function(i){
            var color = '#f60';
            switch(i){
                case 1:
                    color = '#83c44e';
                    break;
                case 2:
                    color = '#e53935';
                    break;
                case 3:
                    color = '#2196f3';
                    break;
            }
            $(this).css('border-color',color).find('h3').css('color',color);
        });
        //点击tabLi的时候
        $tabLi.click(function(){
            //给点击的li加上on样式
            $(this).addClass('on').siblings().removeClass('on');
            //获取当前点击的tabLi的索引
            var index = $(this).index();
            var pIndex = $(this).parent().parent().parent().index();
            $box_wrap.eq(pIndex)[0].a = index;//jquery转换js,写法2：$box_wrap.eq(pIndex)get(0);
            $box_wrap.eq(pIndex).stop(true).animate({
                marginLeft: -296 * $box_wrap.eq(pIndex)[0].a
            },500);
        });
        //鼠标滑入$li的时候，将左右btn按钮出现
        $li.hover(function(){
            $(this).find('.btn').fadeIn(500);//不要延时时间就直接.show();
        },function(){
            $(this).find('.btn').fadeOut(500);//不要延时时间就直接.hide();
        });

        //点击$btn出发事件
        $btn.click(function(){
            var index = $(this).index();
            var pIndex = $(this).parent().parent().index();
            if(index){//点击的为右按钮
                if($box_wrap.eq(pIndex)[0].a<len-1){
                    $box_wrap.eq(pIndex)[0].a++;
                }
            }else{
                if($box_wrap.eq(pIndex)[0].a>0){
                    $box_wrap.eq(pIndex)[0].a--;
                }
            }
            //控制ul滚动切换
            $box_wrap.eq(pIndex).stop(true).animate({
                marginLeft:-296*$box_wrap.eq(pIndex)[0].a
            },500);
            //控制li的颜色的切换
            $("#content .c_cont .c_c_li .tab").eq(pIndex).find("li").eq($box_wrap.eq(pIndex).get(0).a).addClass("on").siblings().removeClass("on");
        });
    })();

    //视频 鼠标滑入提示播放
    (function(){
        var $img = $('#video .v_cont li img');
        var $icon = $('#video .v_cont li span');
        $img.hover(function(){
            $(this).parent().find('span').addClass('hover');
        },function(){
            $(this).parent().find('span').removeClass('hover');
        });
        $icon.hover(function(){
            $(this).addClass('hover');
        },function(){
            $(this).removeClass('hover');
        });
    })();

    //回到顶部
    (function(){
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            $('#upbtn').stop(true).fadeIn();
            if(top<=700){
                $('#upbtn').stop(true).fadeOut();
            }
        });
        //点击滚回顶部
        $('#upbtn').click(function(){
            $('html,body').animate({'scrollTop':0},800);
            return false;
        });
    })();

});


