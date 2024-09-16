const downloadButton = document.querySelector(".download-btn");
let openedViaDownloadButton = false;
downloadButton.addEventListener("click", () => {
  openedViaDownloadButton = true;
});

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