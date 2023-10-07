function setActive(id) {
   const menuItems = document.getElementsByClassName('menu-item');

   for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
   }

   const targetItem = document.getElementById(id);
   targetItem.classList.add('active');
}

function leaveMessage() {
   const elements = document.getElementsByName("mycontact");
   elements.forEach(function (element) {
      // 在这里给元素添加动画效果
      // 例如: 使用 CSS 动画类
      element.classList.add('my-animation-contact');
   });
   var message = "对不起，我没搭建服务器，请通过左边的联系方式联系我！";
   alert(message);
}


function randomText() {
   var text = ("abcdefghijklmnopqrstuvwxyz0123456789");
   let letter = text[Math.floor(Math.random() * text.length)];
   return letter
}

function rain() {
   let cloud = document.querySelector('.cloud')
   let e = document.createElement('div')
   let left = Math.floor(Math.random() * 320);
   let size = Math.random() * 1.5;
   e.classList.add('text');
   e.innerText = randomText();
   e.style.left = left + 'px'
   e.style.fontSize = 0.5 + size + 'em'
   cloud.appendChild(e);

   setTimeout(function () {
      cloud.removeChild(e)
   }, 2000)
}


function transformElement(x, y,element) {
   let multiple = 10;
   let box = element.getBoundingClientRect();
   let calcX = -(y - box.y - (box.height / 2)) / multiple;
   let calcY = (x - box.x - (box.width / 2)) / multiple;

   element.style.transform = "rotateX(" + calcX + "deg) "
       + "rotateY(" + calcY + "deg)";
}




window.addEventListener('scroll', function () {
   const menuItems = document.getElementsByClassName('menu-item');
   let scrollPos = window.scrollY + 100;
   for (let i = 0; i < menuItems.length; i++) {
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