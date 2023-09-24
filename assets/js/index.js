function setActive(id) {
    const menuItems = document.getElementsByClassName('menu-item');
    
    for(let i = 0; i < menuItems.length; i++) {
       menuItems[i].classList.remove('active');
    }

    const targetItem = document.getElementById(id);
    targetItem.classList.add('active');
 }

 function leaveMessage() {
    var message = document.getElementById('exampleFormControlTextarea1').value;
    alert(message);
 }


 function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxyz0123456789");
    let letter = text[Math.floor(Math.random()*text.length)];
    return letter
 }

 function rain(){
    let cloud = document.querySelector('.cloud')
    let e = document.createElement('div')
    let left = Math.floor(Math.random()*320);
    let size = Math.random()*1.5;
    e.classList.add('text');
    e.innerText = randomText();
    e.style.left = left + 'px'
    e.style.fontSize = 0.5+size+'em'
    cloud.appendChild(e);

    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
 }




 window.addEventListener('scroll', function() {
    const menuItems = document.getElementsByClassName('menu-item');
    let scrollPos = window.scrollY+100;
    for(let i = 0; i < menuItems.length; i++) {
        let currLink = menuItems[i];
        let refElement = document.querySelector(currLink.getAttribute("href"));
        if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
            // 添加活动类
            currLink.classList.add('active');
        } else {
            // 删除活动类
            currLink.classList.remove('active');
        }
    }
 })