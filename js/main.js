var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const frame = document.querySelector("#identity");
  const panel = frame.querySelector(".panel");
  const panel_li = panel.querySelectorAll("li");
  const btns = frame.querySelectorAll(".btns li");
  let enableClick = true;
 
  btns.forEach(function(btn,index){
      btn.addEventListener("click",function(e){
          e.preventDefault();
  
          let isOn = e.currentTarget.classList.contains("on");
          if(isOn) return;
  
          if(enableClick){
              enableClick = false;
              activation(index);
          }
  
          enableClick = true;
       
      })
  })
  
  function activation(index){
      for(let el of btns){
          el.classList.remove("on");
      }
      btns[index].classList.add("on");
      new Anim(panel,{
              prop: "margin-left",
              value: -100 * index + "%",
              duration: 500
      })
  }