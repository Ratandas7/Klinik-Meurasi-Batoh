
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


 //******** Doctor ********/ 

  const buttons = document.querySelectorAll(".category_btn");
const categoryData = document.querySelectorAll(".category_data");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    categoryData.forEach((div) => (div.style.display = "none"));

    categoryData[index].style.display = "block";
  });
});