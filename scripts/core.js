$(function(){

    indexSwiper1();
    indexSwiper2();
    enviromentSwiper3();

    allBottom();
    controlBread();
    navTop();
    mobileNav();
    mobileMenu();

    jobShow();
    allIcon();

    initialize();
    lookPic()
})

function indexSwiper1(){
    if($('.swiper1').get(0)){
        var mySwiper = new Swiper ('.swiper1', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination1',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next1',
            prevButton: '.swiper-button-prev1',
            
        })  
    }
}

function indexSwiper2(){
    if($('.swiper2').get(0)){
        var mySwiper = new Swiper ('.swiper2', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination2',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next2',
            prevButton: '.swiper-button-prev2',
            paginationType: 'fraction'
            
        })  
    }
}

function enviromentSwiper3(){
    if($('.swiper3').get(0)){
        var mySwiper = new Swiper ('.swiper3', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination3',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next3',
            prevButton: '.swiper-button-prev3',
            
        })  
    }
}

function mobileMenu(){
    $('.icon-menu').on('click',function(){
        $('.icon-menu').addClass('hide');
        $('.icon-close').removeClass('hide');
        $('.nav-body').removeClass('nav-off');
    })
    $('.icon-close').on('click',function(){
        $('.icon-menu').removeClass('hide');
        $('.icon-close').addClass('hide');
        $('.nav-body').addClass('nav-off');
    })
}

function allBottom(){
    if($('.bottom-box').get(0)){
        $('.bottom-box').append(
        '<div class="bottom">'+
            '<div class="bottom-info clearfix">'+
                '<div class="other-info fl">'+
                    '<a href="">入园流程</a><span class="pc"> | </span>'+
                    '<a href="">商务合作</a><span class="pc"> | </span>'+
                    '<a href="">在线留言</a><span class="pc"> | </span>'+
                    '<a href="">加入我们</a><span class="pc"> | </span>'+
                    '<a href="">隐私政策</a><span class="pc"> | </span>'+
                    '<a href="">条款和条件 </a>'+
                '</div>'+
                '<p class="phone fr link">全国热线：400-765-1616</p>'+
            '</div>'+
            '<div class="direction clearfix">'+
                '<div class="direct-left fl">'+
                    '<div class="con1">'+
                        '<a href="" class="link bottom-link">宣怀教育集团</a>'+
                        '<a href="" class="link bottom-link">宣怀核心素养学习中心</a>'+
                    '</div>'+
                    '<div class="con2">'+
                        '<span class="s1">版权所有</span>'+
                        '<span class="s1">宣怀教育</span>'+
                        '<span class="s1">京ICP备 18055791-1 号</span>'+
                    '</div>'+
                '</div>'+
                '<div class="direct-right fr">'+
                    '<ul class="clearfix">'+
                        '<li class="code-list fl tc">'+
                            '<img class="code" src="./images/code.jpg" alt="">'+
                            '<p class="p1">APP下载</p>'+
                        '</li>'+
                        '<li class="code-list fl tc">'+
                            '<img class="code" src="./images/code1.jpg" alt="">'+
                            '<p class="p1">微信关注</p>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
        '</div>'
        )
    }
}

function controlBread(){
    $('.choose-con').on('click',function(){
        var op = $(this).parents('.choosed');
        op.find('.option-con').toggleClass('hide')
    })
}

function navTop(){
    if($('.nav-wrap').get(0)){
        $('.nav-wrap').append(`
            <div class="nav-inner clearfix">
                <div class="logo">
                    <img class="logo-pic vm" src="./images/whitelogo.png" alt="">
                </div>
                <div class="cd-group">
                    <ul class="cd-con clearfix">
                        <li class="cd-list"><a href="">关于我们</a></li>
                        <li class="cd-list"><a href="">校园环境</a></li>
                        <li class="cd-list"><a href="">品质服务</a></li>
                        <li class="cd-list"><a href="">教学体系</a></li>
                        <li class="cd-list"><a href="">新闻活动</a></li>
                        <li class="cd-list"><a href="">入学流程</a></li>
                        <li class="cd-list"><a href="">联系我们</a></li>
                        <li class="cd-list pointer"><a >EN</a></li>
                    </ul>
                </div>
            </div>
        `)
    }
}

function mobileNav(){
    if($('.mobile-top').get(0)){
        $('.mobile-top').append(
            `
        <div class="mobile-nav mobile">
            <div class="nav-top clearfix">
                <img class="white-logo fl" src="./images/whitelogo.png" alt="">
                <div class="switch fr">
                    <img id="icon-menu" class="icon-menu" src="./images/menu.png" alt="">
                    <img class="icon-close hide" src="./images/close.png" alt="">
                </div>
            </div>
        </div>
        <div class="nav-body mobile nav-off">
            <ul class="nav-inner">
                <li class="nav-list"><a href="">首页</a></li>
                <li class="nav-list">
                    <a href="">校园环境</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
                <li class="nav-list">
                    <a href="">品质服务</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
                <li class="nav-list">
                    <a href="">教学体系</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
                <li class="nav-list">
                    <a href="">新闻活动</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
                <li class="nav-list">
                    <a href="">入学流程</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
                <li class="nav-list">
                    <a href="">联系我们</a>
                    <ul class="next-con">
                        <li class="next-list"><a href="">环境概况</a></li>
                        <li class="next-list"><a href="">环境概况</a></li>
                    </ul>
                </li>
            </ul>
        </div>
            `
        )
    }
}

function jobShow(){
    $('.job-list').on('click',function(){
        $(this).toggleClass('job-off');
    })
}

function allIcon(){
    if($('.menu-group').get(0)){
        $('.menu-group').append(
            `
            <ul class="menu-con clearfix">
            <li class="menu-list fl">
                <div class="icon-box tc">
                    <img class="icon-menu" src="../images/index/icon-index1.png" alt="">
                </div>
                <p class="p1">预约参观</p>
                <p class="p2 pc">带您了解幼儿园配套与师资</p>
            </li>
            <li class="menu-list fl">
                <div class="icon-box tc">
                    <img class="icon-menu" src="../images/index/icon-index2.png" alt="">
                </div>
                <p class="p1">入园流程</p>
                <p class="p2 pc">入园准备、常见问题</p>
            </li>
            <li class="menu-list fl">
                <div class="icon-box tc">
                    <img class="icon-menu" src="../images/index/icon-index3.png" alt="">
                </div>
                <p class="p1">资料下载</p>
                <p class="p2 pc">查看和下载幼儿园资料</p>
            </li>
            <li class="menu-list fl">
                <div class="icon-box tc">
                    <img class="icon-menu" src="../images/index/icon-index4.png" alt="">
                </div>
                <p class="p1">APP下载</p>
                <p class="p2 pc">家校互动、学生服务</p>
            </li>
        </ul>
            `
        )
    }
}

// 地图
function initialize() {
    if($('.allmap').get(0)){
        var map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom:11, //初始化地图层级
            center: [116.397428, 39.90923] //初始化地图中心点
        });

        // var marker = new AMap.Marker({
        //     position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //     title: '北京'
        // });
        
        // // 将创建的点标记添加到已有的地图实例：
        // map.add(marker);
    }
}

function lookPic(){
    $('.mirror').on('click',function(){
        var mySrc = $(this).parents('.chart').find('a').children('img').attr('src')
        console.log(mySrc)
        var bigUrl = $('.big-pic').attr('src',mySrc)
        $('.pic-show').removeClass('hide');

        $('.pic-show').on('click',function(){
            $('.pic-show').addClass('hide');
        })
    })
}