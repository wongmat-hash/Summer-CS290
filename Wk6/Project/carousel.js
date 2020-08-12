//works cited: https://www.w3schools.com/howto/howto_js_slideshow.asp
//create the variables required for JS to work properly
var slideIndex = 1;     //this will track the position
//this tracks the time spent on a single image
var myTimer;
//this will be the container for the slideshow
var slideshowContainer;

//use eventlistener to wait for page load then run when page has finished loading
window.addEventListener("load",function()
{
    showSlides(slideIndex);
    //set the timer to an interval of 4 seconds per image
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    //slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL function
function plusSlides(n)
{
  //clears the timer interval to restart when the user manually parses
  //now adjust the index of the pictures to position correctly
  clearInterval(myTimer);
  if (n < 0)
  {
    showSlides(slideIndex -= 1);
  }
  else
  {
   showSlides(slideIndex += 1);
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1)
  {
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  }
  else
  {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n)
{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

//this function controls the display of the slideshow
function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length)
  {
    slideIndex = 1
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++)
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () =>
{
  clearInterval(myTimer);
}

resume = () =>
{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}
