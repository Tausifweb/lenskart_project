// function showSlides(slideIndex) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";

//     slides[slideIndex - 1].style.display = "block";
//   }

//   //setInterval(showSlides, 2000);
// }

// setInterval(() => {
//   showSlides(slideIndex);
// }, 2000);

// //showSlides(slideIndex);
var i = 0; //here initially i am taking i value as zero because i am taking url from above array from its starting index which is zero.

//here i am creating time interval for 2 seconds so that it will display each image in every 2 seconds.

var arr_imgs = [
  "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/UpdatedBanner1912360_16thJune21.jpg",
  "https://static1.lenskart.com/media/desktop/img/Monsoonweb.jpg",
  "https://static1.lenskart.com/media/desktop/img/Mar21/FlexAppeal_Desktop_12thMay21.png",
  "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/14thMay_Eyeglasses_DesktopBanner_17thMay21.jpg",
];
setInterval(() => {
  if (i < arr_imgs.length) {
    var imgBox = document.getElementById("slide-show-img-box");
    imgBox.innerHTML = "";
    var img = document.createElement("img");
    img.setAttribute("src", arr_imgs[i]);
    img.setAttribute("id", "slide-show-img");
    imgBox.append(img);
    i = i + 1;
  }

  if (i == 4) {
    i = 0;
  }
}, 3000);
