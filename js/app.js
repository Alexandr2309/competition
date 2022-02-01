import {obj} from '../js/zoos.js';
import {zoosLinks} from '../js/main.js';
let locationHTM = obj.locationHTML;
for(let i=0;i<zoosLinks.length;i++){
    zoosLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        locationHTM.call(obj, i);
    });
};
let peopleUl = document.querySelectorAll('#people__ul > li > a');
for(let elem of peopleUl){
    elem.addEventListener('click', (e) => {
       if(window.location.href.includes('People.html')){
           e.preventDefault();
           let scrollBlock = elem.dataset.name;
           let scrollTO = document.querySelector('#' + scrollBlock);
           scrollTO.scrollIntoView({
            behavior: 'smooth',
            block:'start'
         })
       } else{
           localStorage.setItem('scroll', elem.dataset.name);
        if(window.location.href.includes('index.html')){
            window.location.replace('HTML/People.html')
        }else{
            window.location.href = '../HTML/People.html';
        }
       }
    })
}

