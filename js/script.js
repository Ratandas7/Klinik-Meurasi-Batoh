
  //******** Mobile Menu ********/ 

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".menu_container");
    navBar.classList.toggle("active");
}



  //******** Date Time Show ********/ 

  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
  }

  // Initial call
  updateDateTime();
  
  // Update every second
  setInterval(updateDateTime, 1000);



  //******** Doctors ********/ 

//   document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".poli");
//     const menus = document.querySelectorAll(".doctor_slider");

//     buttons.forEach(button => {
//         button.addEventListener("click", function () {
//             const target = this.getAttribute("data-target");

//             // Hide all Doctors
//             menus.forEach(menu => menu.classList.remove("active"));

//             // Deactivate all buttons
//             buttons.forEach(btn => btn.classList.remove("active"));

//             // Show the selected doctor and mark button as active
//             document.getElementById(target).classList.add("active");
//             this.classList.add("active");
//         });
//     });

//     // Show first menu by default
//     buttons[0].click();
// });



  //******** Gallery ********/ 

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

