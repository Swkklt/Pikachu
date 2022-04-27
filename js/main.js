!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(
            ()=>{
                n += 1
                container.innerHTML = code.substring(0,n)
                styleTag.innerHTML = code.substring(0,n)
                container.scrollTop = container.scrollHeight
                if(n>code.length){
                    window.clearInterval(id)
                    fn && fn.call()  // 如果传的是回调，那么久就调用一下回调
                }
            },
            20
        )
    }
    let code = `
/*
 * 首先，需要准备皮卡丘的皮 
 */
.preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#FEE433;
}
.wrapper{
    width: 100%;
    height: 165px;
    position:relative;
    /* border:1px solid blue; */
}
.wrapper > :not(:last-child){   /* wrapper类里边的所有选择器除了last-child最后一个孩子 */
    z-index: 1;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
    width:0px;
    height:0px;
    border-style:solid;
    border-width:12px;
    border-color:black transparent transparent;
    border-radius:11px;
    position:absolute;
    left:50%;
    top:28px;
    margin-left:-12px; /* 向左移动12px */
    /* transform:translateX(-50%)利用CSS3属性向左移动自身的50% */
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position:absolute; /* 定位后会直接浮动到上级元素的左上角 */
    border-radius:50%;
    border:2px solid #000000;
}
/*
 * 眼里边的眼珠来了
 */
.eye::before{
    content:'';
    display:block;
    width:24px;
    height:24px;
    background:white;
    position:absolute;
    border-radius:50%;
    left:6px;
    top:-1px;
    border:2px solid #000;
}
/*
 * 左眼
 */
.eye.left{
    right:50%;
    margin-right:90px;
}
/*
 * 右眼
 */
.eye.right{
    left:50%;
    margin-left:90px;
}
/*
 * 皮卡丘的脸
 */
.face{
    width:68px;
    height:68px;
    background:#FC0D1C;
    border:2px solid black;
    border-radius:50%;
    position:absolute;
    top:85px;
}
/*
 * 调整脸的位置
 */
.face.left{
    right:50%;
    margin-right:116px;
}
.face.right{
    left:50%;
    margin-left:116px;
}
/*
 * 上嘴唇
 */
.upperLip{
    height:25px;
    width:80px;
    border:2px solid black;
    position:absolute;
    top:50px;
    background:#FDE348;
}
.upperLip.left{
    right:50%;
    border-bottom-left-radius:40px 25px; /* 椭圆 */
    border-top:none;
    border-right:none;
    transform:rotate(-20deg);/* 逆时针旋转20度 */
    
}
.upperLip.right{
    left:50%;
    border-bottom-right-radius:40px 25px; /* 椭圆 */
    border-top:none;
    border-left:none;
    transform:rotate(20deg);/* 顺时针旋转20度 */
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper{
    width:300px;
    height:110px;
    left:50%;
    margin-left:-150px;
    bottom:0;
    position:absolute;
    overflow:hidden;
}
.lowerLip{
    height:3500px;
    width:300px;
    background:#990513;
    border-radius:200px/2000px;
    border:2px solid black;
    position:absolute;
    bottom:0;
    overflow:hidden;
}
/*
 * 皮卡丘的舌头
 */
.lowerLip::after{
    content:'';
    position:absolute;
    bottom:-20px;
    width:100px;
    height:100px;
    background:#FC4A62;
    left:50%;
    margin-left:-50px;
    border-radius:50px;
}
/*
 * 好了，皮卡丘画完了
 */
`
    writeCode('',code)
}.call()