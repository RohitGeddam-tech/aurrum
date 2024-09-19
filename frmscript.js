let openedViaDownloadButton = false;

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};

function myEnquirefunction(dev, form) {
  var name = $('#' + dev + form + '_Name').val();
  var email = $('#' + dev + form + '_Email').val();
  var phone = $('#' + dev + form + '_Mobile').val();
  var source = getUrlParameter('utm_source');
  var medium = getUrlParameter('utm_medium');
  var campaign = getUrlParameter('utm_campaign');
  var term = getUrlParameter('utm_term');

  var formData = {
    
      name: name,
      email: email,
      phone: phone,
      source: source,
      medium: medium,
      campaign: campaign,
      term: term
  };
  // alert('test');
  if (callEnquireValidation(dev, form)) {
      $('#' + dev + form + '_submit').prop('disabled', true);
      $('#' + dev + form + '_submit').text('Processing...');
      console.log('Processing...');
      try {
          $.ajax({
              type: 'POST',
              url: "formdata.php",
              data: formData,
              success: function(resultData) {
                if(resultData == 'success')
                {
                  //alert(resultData);

                  setTimeout(() => {
                    togglePopup(false);
          
                    if (openedViaDownloadButton) {
                      const link = document.createElement("a");
                      link.href = pdfPath;
                      link.download = "4S_The_Aurrum_Brochure.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      openedViaDownloadButton = false;
                    }
                  }, 1000);
                
                
                  setTimeout(() => {
                    window.location.href = "/thank-you.html";
                  }, 1000);


                  location.href= "thank-you.html";
                  $('#' + dev + form + '_submit').prop('disabled', false);
                  $('#' + dev + form + '_submit').text('Submit');
                }
                else
                {
                    alert(resultData);
                    $('#' + dev + form + '_submit').prop('disabled', false);
                    $('#' + dev + form + '_submit').text('Submit');
                }
              }
          });
      } catch (err) {
          alert("Error: " + err);
      }
  }
}

function callEnquireValidation(dev, form) {
  var str = 'Please Enter ';

  var name = document.getElementById(dev + form + '_Name').value;
  var phone = document.getElementById(dev + form + '_Mobile').value;
  var email = document.getElementById(dev + form + '_Email').value;

  if (name == "" && email == "" && phone == "") {
      alert("Please fill all the Fields");
      return false;
  } else if (name == "" || email == "" || phone == "") {
      if (name == "") {
          str = str + "Name";
          if (email == "" || phone == "") {
              str = str + ", ";
          } else {
              str = str + ".";
          }
      }

      

      if (email == "") {
          str = str + "Email ID";
          if (name == "" || phone == "") {
              str = str + ", ";
          } else {
              str = str + ".";
          }
      } 
      
      if (phone == "") {
              str = str + "Mobile No";
              if (name == "" || email == "") {
                  str = str + ", ";
              } else {
                  str = str + ".";
              }
      }
      alert(str);
      return false;
  }

  if (document.getElementById(dev + form + '_Name').value == '') {
      alert('Please enter Name');
      return false;
  } else {
      var x = document.getElementById(dev + form + '_Name').value;
      var reg = /^[A-z ]+$/;
      if (!reg.test(x)) {
          alert('Name must contain only characters');
          return false;
      }
  }


  if (document.getElementById(dev + form + '_Email').value == '') {
      alert('Please enter Email');
      return false;
  } else {
      var email = document.getElementById(dev + form + '_Email').value;
      var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (!emailReg) {
          alert("You have entered an invalid email address!")
          return false;
      }
  }

  var p;
  p = document.getElementById(dev + form + '_Mobile').value;
  if (isNaN(p) || p < 5999999999 || p > 10000000000) {
      alert("Please enter a valid 10-digit Mobile number");
      return false;
  }

  return true;
}


// js file
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  var player = new YT.Player('player', {

    videoId: 'OvY59Q_MRYI', 
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'loop': 1,
      'mute': 1,
      'playlist': 'OvY59Q_MRYI' 
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setPlaybackQuality('hd720'); 
  event.target.playVideo(); 
}

function resizeIframe() {
  const bannerSwiper = document.querySelector('.banner-swiper');
  const iframe = document.getElementById('videoFrame');
  
  const width = bannerSwiper.offsetWidth;
  const height = bannerSwiper.offsetHeight;
  iframe.width = iframe.contentWindow.width;
  iframe.height = iframe.contentWindow.height;
}

window.addEventListener('resize', resizeIframe);

resizeIframe();

const cards = document.querySelectorAll(".amenities-img-card");

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");

    const paragraph = card.querySelector(".overlay-content p");
    if (paragraph) {
      paragraph.classList.remove("active");
    }
  });
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    removeActiveClasses();
    card.classList.add("active");
    const paragraph = card.querySelector(".overlay-content p");
    setTimeout(() => {
      if (paragraph) {
        paragraph.classList.add("active");
      }
    }, 700);
  });
});

cards[0].classList.add("active");
const initialParagraph = cards[0].querySelector(".overlay-content p");
if (initialParagraph) {
  setTimeout(() => {
    initialParagraph.classList.add("active");
  }, 700);
}

const closeBtn = document.getElementById("close-button");
const backdrop = document.querySelector(".screen-backdrop");
const enquire = document.querySelector(".enquire-now");
const form = document.querySelector(".pop-up-form");
const popupFormBtn = document.querySelector(".pop-up-form form button");
function togglePopup(show) {
  if (show) {
    if(openedViaDownloadButton){
     popupFormBtn.innerText = "Submit & Download"
    }else{
        popupFormBtn.innerText = "Submit"
    }
    backdrop.style.display = "block";
    form.style.display = "flex";
  } else {
    openedViaDownloadButton = false;
    backdrop.style.display = "none";
    form.style.display = "none";
  }
}

enquire.addEventListener("click", () => togglePopup(true));

backdrop.addEventListener("click", () => togglePopup(false));
closeBtn.addEventListener("click", () => togglePopup(false));

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  const collapseTarget = document.querySelector(
    button.getAttribute("data-bs-target")
  );

  collapseTarget.addEventListener("shown.bs.collapse", () => {
    const img = button.querySelector("img");
    img.src = "assets/mobile assests/amenities/minus icon.png";
  });

  collapseTarget.addEventListener("hidden.bs.collapse", () => {
    const img = button.querySelector("img");
    img.src = "assets/mobile assests/amenities/plus icon.png";
  });
});

// navbar
const menuToggle = document.querySelector("#mobile-menu");

const navLinks = document.querySelector(".nav-links-mob");

navLinks.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    closeNavbar();
  }
});

menuToggle.addEventListener("click", () => {
  console.log("clicked");
  
  navLinks.classList.toggle("show");
});

function closeNavbar() {
  const navbarCollapse = document.querySelector(".nav-links-mob");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
}


document.querySelectorAll(".nav-links-mob").forEach((item) => {
  item.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      closeNavbar();
    }
  });
});
const knowMoreBtn = document.querySelector(".know-more");
knowMoreBtn.addEventListener("click", () => {
  togglePopup(true);
});
const downloadButton = document.querySelector(".download-btn");
downloadButton.addEventListener("click", () => {
openedViaDownloadButton = true;
  togglePopup(true);
  
});

function validateName(element) {
  let inputValue = element.value;
  inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
  element.value = inputValue;
}

function validateNumber(element) {
  let inputValue = element.value;
  inputValue = inputValue.replace(/[^0-9]/g, "");
  if (inputValue.length > 10) {
    inputValue = inputValue.substring(0, 10);
  }
  element.value = inputValue;
}

function validateEmail(element) {
  let inputValue = element.value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}

const pdfPath = "/assets/4S_The Aurrum Brochure.pdf";

function handleSubmit(event) {
  event.preventDefault(); 
  const form = event.target;
  
  const isNameValid = checkName(form);
  const isNumberValid = checkNumber(form);
  const isEmailValid = checkEmail(form);

  if (!isNameValid || !isNumberValid || !isEmailValid) {
    alert("Please correct the errors before submitting the form.");
    return;
  }

  const formData = {
    name: form.querySelector(".nameInput").value,
    phone: form.querySelector(".numberInput").value,
    email: form.querySelector(".emailInput").value
  };



  event.target.reset();
}


function checkName(form) {
  const nameInput = form.querySelector(".nameInput");
  // const nameLabel = form.querySelector("#span-name");
  const nameRegex = /^[a-zA-Z\s]{3,}$/;

  if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add("error");
    return false;
  } else {
    nameInput.classList.remove("error");
  }

  return true;
}


function checkNumber(form) {
  const numberInput = form.querySelector(".numberInput");
  const numberLabel = form.querySelector("#span-number");
  const numberRegex = /^[6-9]\d{9}$/;

  if (!numberRegex.test(numberInput.value)) {
    numberInput.classList.add("error");
    // numberLabel.classList.add("errorText");
    // numberLabel.textContent = "Invalid number. It must start with 6-9 and be 10 digits long.";
    console.log("error at number");
    return false;
  } else {
    numberInput.classList.remove("error");
    // numberLabel.classList.remove("errorText");
    // numberLabel.textContent = "";
  }

  return true;
}

function checkEmail(form) {
  const emailInput = form.querySelector(".emailInput");
  // const emailLabel = form.querySelector("#span-email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailInput.value) {
    emailInput.classList.add("error");
    // emailLabel.textContent = "Email is required"; // Error if empty
    return false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");

    return false;
  } else {
    emailInput.classList.remove("error");

  }

  return true;
}
