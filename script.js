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

function togglePopup(show) {
  if (show) {
    backdrop.style.display = "block";
    form.style.display = "flex";
  } else {
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

  // $.ajax({
  //   url: "formdata.php",
  //   type: "POST",
  //   data: $.param(formData), 
  //   success: function(response) {
  //     alert(response);
  //   },
  //   error: function(jqXHR, textStatus, errorThrown) {
  //     alert('Error: ' + textStatus + ' - ' + errorThrown);
  //   }
  // });

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
