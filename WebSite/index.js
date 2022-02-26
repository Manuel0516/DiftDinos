const list = document.querySelectorAll('.list');
const contadorh2 = document.getElementById('contador');

function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) => item.addEventListener('click', activeLink))

window.addEventListener('scroll', function(){
    const header = document.querySelector('.navigation');
    header.classList.toggle("sticky", window.scrollY > 0)
})

function countTime() {
    var date = new Date();
    var now = date.getTime();    
    var endDate = new Date ("2021-01-30 18:00:00"); // Establecer la fecha límite
    var end = endDate.getTime();
    var leftTime = (end - now); // Diferencia horaria                              
    let d, h, m, s, ms;
    let content
    if(leftTime >= 0) {
        // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        ms = Math.floor(leftTime % 1000);
        if (ms = undefined){
            
        }
        if(ms < 100) {
            ms = "0" + ms;
        }
        if(s < 10) {
            s = "0" + s;
        }
        if(m < 10) {
            m = "0" + m;
        }
        if(h < 10) {
            h = "0" + h;
        }
    } else {
        content = 'NOW!!!! Go!!'
    }

    if(h != undefined){
        contadorh2.innerHTML = h + ":" + m + ":" + s;
    }else{
        contadorh2.innerHTML = content
    }
    setTimeout(countTime, 50);
}
countTime()





