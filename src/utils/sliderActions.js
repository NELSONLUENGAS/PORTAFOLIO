export function next(){
    // event.preventDefault(); 
    const slider = document.querySelector('.skillsBody');
    const first = document.querySelectorAll('.skillCard')[0];
    slider.style.marginLeft = '-69vw';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', first);
        slider.style.marginLeft = '-46vw';
    }, 500);
}

export function prev(event){
    // event && event.preventDefault(); 
    const slider = document.querySelector('.skillsBody');
    let techs = document.querySelectorAll('.skillCard');
    let last = techs[techs.length - 1];
    slider.style.marginLeft = '-23vw';
    slider.style.transition = 'all 0.5s ease-in-out';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider?.insertAdjacentElement('afterbegin', last);
        slider.style.marginLeft = '-46vw';
    }, 500);
}
