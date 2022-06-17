export function next(){
    const slider = document.querySelector('.projectBody');
    const first = document.querySelectorAll('.project')[0];
    console.log(slider)
    slider.style.marginLeft = '-540vw';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', first);
        slider.style.marginLeft = '-360vw';
    }, 500);
}

export function prev(){ 
    const slider = document.querySelector('.projectBody');
    let techs = document.querySelectorAll('.project');
    let last = techs[techs.length - 1];
    slider.style.marginLeft = '-180vw';
    slider.style.transition = 'all 0.5s ease-in-out';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider?.insertAdjacentElement('afterbegin', last);
        slider.style.marginLeft = '-360vw';
    }, 500);
}