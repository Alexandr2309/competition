window.addEventListener('load', function() {
    let scrollBlock;
    for(let key in localStorage){
        if(key === 'scroll'){
            scrollBlock = localStorage.getItem(key);
            document.querySelector('#' + scrollBlock).scrollIntoView({
                behavior: 'smooth',
                block:'start'
             });
            localStorage.clear();
        }
    }
})