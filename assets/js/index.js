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

function model(){
   //创建一个场景
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(0x0a0a0a); 
   //添加灯光
   const spotLight = new THREE.SpotLight(0xffffff);
   spotLight.position.set(-10,10,90);
   scene.add(spotLight);

   //创建一个相机，视点
   const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
   //设置相机的位置
   camera.position.set(0,0,0)
   //创建一个渲染器
   const renderer= new THREE.WebGLRenderer();
   //设置渲染器尺寸
   renderer.setSize(400,400);
   document.getElementById('3dScene').appendChild(renderer.domElement);
  

  const objLoader = new THREE.OBJLoader();
  objLoader.load("./assets/models/mars.obj",(obj)=>{
    scene.add(obj)
    obj.position.set(12,-6,0)
    obj.rotation.y = 100;
  })

  let angle = 0;
  const radius = 20;
   const animation = ()=>{
       requestAnimationFrame(animation);
       angle += 0.01;
       // camera.position.x = radius*Math.cos(angle);
       // camera.position.z = radius*Math.sin(angle);
       camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
       renderer.render(scene,camera);
   }
   animation();
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