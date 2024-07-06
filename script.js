function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Activate the current tab link
    evt.currentTarget.classList.add("active");
}

// Function to control image slider
var slideIndex = [];

function plusSlides(n, tabName) {
    showSlides(slideIndex[tabName] += n, tabName);
}

function currentSlide(n, tabName) {
    showSlides(slideIndex[tabName] = n, tabName);
}

function showSlides(n, tabName) {
    var i;
    var slides = document.getElementById(tabName).getElementsByClassName("mySlides");
    var dots = document.getElementById(tabName).getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex[tabName] = 1;
    }
    if (n < 1) {
        slideIndex[tabName] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[tabName] - 1].style.display = "block";
    dots[slideIndex[tabName] - 1].className += " active";
}

// Open the default tab
document.getElementsByClassName("tablinks")[0].click();