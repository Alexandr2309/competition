let arrayF = [document.querySelector('.zoos__block1'),
document.querySelector('.zoos__block2'),
document.querySelector('.zoos__block3'),
document.querySelector('.zoos__block4'),
document.querySelector('.zoos__block5'),
document.querySelector('.zoos__block6')];

export let obj = {
     locationHTML: function (num) {
        if(window.location.href.includes('zoos.html')){
            this.array[num].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else{
            localStorage.setItem(num, num);
            window.location.replace('../HTML/zoos.html');
        }
},
array : arrayF
};


window.onload = function(){
        const head = header.querySelector('.container');
        const foot = footer.querySelector('.container');
       head.classList.remove('container');
       foot.classList.remove('container');
       head.classList.add('container-fluid');
       foot.classList.add('container-fluid');
       let nowItem,
       i=0;
       if(localStorage.length <=0) return;
       for(let key in localStorage){
           i == 0 ? nowItem = key : 0;
          i++;
        };
        if(isFinite(nowItem)){
            arrayF[localStorage.getItem(nowItem)].scrollIntoView({
                behavior: 'smooth',
                block:'start'
             })
             localStorage.clear();
        };
    };
