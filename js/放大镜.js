window.addEventListener('load',function(){
    var preview =document.querySelector('.preview');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview.addEventListener('mouseover',function(){
        mask.style.display='block';
        big.style.display='block';
    })
    preview.addEventListener('mouseout',function(){
        mask.style.display='none';
        big.style.display='none';
    })
    preview.addEventListener('mousemove',function(e){
        var x = e.pageX-this.offsetLeft;
        var y =e.pageY-this.offsetTop;
        var maskX= x-mask.offsetWidth/2;
        var maskY = top=y-mask.offsetHeight/2;
        if(maskX<0){
            maskX=0
        }else if(maskX>preview.offsetWidth-mask.offsetWidth){
            maskX=preview.offsetWidth-mask.offsetWidth
        }
        if(maskY<0){
            maskY=0
        }else if(maskY>preview.offsetHeight-mask.offsetHeight){
            maskY=preview.offsetHeight-mask.offsetHeight
        }
        mask.style.left=maskX+'px';
        mask.style.top=maskY+'px';
        var bigimg = document.querySelector('.bigimg')
        console.log(bigimg);
        var bigmaxx = big.offsetWidth-bigimg.offsetWidth;
        var bigmaxy = big.offsetHeight-bigimg.offsetHeight;
        var bigx = maskX*bigmaxx/(preview.offsetWidth-mask.offsetWidth);
        var bigy = maskY*bigmaxy/(preview.offsetHeight-mask.offsetHeight);
        bigimg.style.left=-bigx+'px';
        bigimg.style.top=-bigy+'px';
       

    })
})