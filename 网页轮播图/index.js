window.addEventListener('load',function(){
    var arrowr = document.querySelector('.arrow-r');
    var arrowl = document.querySelector('.arrow-l');
    var focus = document.querySelector('.focus');
    var focuswidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrowl.style.display='block'
        arrowr.style.display='block'
        clearInterval(timer);
    })
    focus.addEventListener('mouseleave',function(){
        arrowl.style.display='none'
        arrowr.style.display='none'
        timer = setInterval(function(){
            arrowr.click();
        },2000)

    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    
    for(i=0;i<ul.children.length;i++){
        var li =document.createElement('li');
        li.setAttribute('num',i);
        
        ol.appendChild(li);

        li.addEventListener('click',function(){
           for(var i = 0;i<ol.children.length;i++){
               
               ol.children[i].style.background='pink';
           }
           this.style.background='black';
           var index = this.getAttribute('num');
           
           nu = index;
           circle=index;

        //    console.log(-index*focuswidth);
           animate(ul,-index*focuswidth);

            
        })

    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var nu = 0;
    var circle = 0;
    
    arrowr.addEventListener('click',function(){
        
            
            if(nu==ul.children.length-1){
                ul.style.left=0;
                nu=0;
               
            }
            nu++;
            animate(ul,-nu*focuswidth);
            circle++;
            if(circle==ol.children.length){
                circle=0;
            }
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].style.background='pink';
            }
            ol.children[circle].style.background='black';
        
      

    })

    arrowl.addEventListener('click',function(){
        
        if(nu==0){
            nu=ul.children.length-1;
            ul.style.left=-nu*focuswidth+'px';
          
           
        }
        nu--;
        animate(ul,-nu*focuswidth)
        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].style.background='pink';
        }
        ol.children[circle].style.background='black';

    })
    var timer = setInterval(function(){
        arrowr.click();
    },2000)
    

 

    
    


})