$(document).ready(() => {
  const toggleHome = (e) => {
    if (e.target.id === "home") {
      // abstract to function
      $home.removeClass("hide-home");
      $home.addClass("move-home");
    } else {
      $home.removeClass("move-home");
      $home.addClass("hide-home");
    }
  };
  //home content container animation
  //get home container
  //on click of the corresponding nav item trigger animation by adding class.
  //on page load the home container is showing
  const $home = $(".home-content");
  $home.addClass("move-home");

  $(".active").prepend(
    '<lottie-player  class="lottie  " src="https://assets5.lottiefiles.com/private_files/lf30_75f9senm.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>'
  );
  //nav animation
  //get the navigation li
  //on click add ::before element class
  const $navLi = $(".vertical-nav li");
  $navLi.on("click", (e) => {
    toggleHome(e);
    console.log(e.target);
    if (!$(e.target).hasClass("active")) {
      console.log("!!!!!!");
      $(e.target)
        .addClass("active")
        .prepend(
          '<lottie-player class="lottie " src="https://assets5.lottiefiles.com/private_files/lf30_75f9senm.json" mode="bounce" background="transparent"  speed="2"  "  loop  autoplay></lottie-player>'
        )
        .children()
        .addClass("float");
      if ($(e.target).siblings().hasClass("active")) {
        $(e.target)
          .siblings()
          .delay(50000)
          .removeClass("active")
          .children()
          .remove();
      }
    }
  });
  //card animations
  //get the project cards
  //on hover add move slider class
  const $projCard = $(".project-card");
  $projCard
    .mouseover((e) => {
      $(e.target).next().addClass("project-slider-move");
    })
    .mouseout((e) => {
      $(e.target).next().removeClass("project-slider-move");
    });
});