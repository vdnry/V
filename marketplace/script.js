const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
})

if (window.netlifyIdentity) {
    window.netlifyIdentity.on("login", (user) => {
      console.log("Logged in as:", user.email);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var toolsDropdown = document.getElementById("tools-dropdown");
    var dropdownContent = document.getElementById("tools-dropdown-content");
    var hindi = document.getElementById("hindiButton");
    var buttonClick = false;
  
    dropdown(toolsDropdown, dropdownContent);
  
    buttonClick = hindiButtonClickCheck(buttonClick, hindi);
  });
  
  function hindiButtonClickCheck(buttonClick, hindi) {
    function handleClick(event) {
      buttonClick = !buttonClick;
      buttonClick ? changeToHindi(event, hindi) : changeToEnglish(event, hindi);
    }
  
    hindi.addEventListener("click", handleClick);
    return buttonClick;
  }
  
  function dropdown(toolsDropdown, dropdownContent) {
    toolsDropdown.addEventListener("click", function (event) {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
      event.stopPropagation();
    });
  
    document.addEventListener("click", function (event) {
      var isClickInsideDropdown = toolsDropdown.contains(event.target) ||
        dropdownContent.contains(event.target);
  
      if (!isClickInsideDropdown) {
        dropdownContent.style.display = "none";
      }
    });
  }
  
  function changeToEnglish(event, hindi, buttonClick) {
    event.preventDefault();
    document.getElementById("title").textContent = "KhetGuru";
    document.getElementById("home").textContent = "Home";
    document.getElementById("tools-dropdown").textContent = "Tools";
    document.getElementById("soilcalculatorlink").textContent = "Soil Calculator";
    document.getElementById("forumlink").textContent = "Khetu Forum";
    userCheckEnglish();
    hindi.textContent = "हिंदी में देखें";
    document.getElementById("heading1").textContent = "Welcome to KhetGuru";
    document.getElementById("heading2").textContent = "Please login or signup to continue";
    document.getElementById("para1").textContent =
      `KhetGuru App will be a pioneering agricultural project to transform
          farming practices through the integration of technology and community
          support. This innovative initiative combines soil sensors, data
          analytics, and a community-driven mobile application to optimise crop
          selection and promote knowledge sharing among farmers.`;
    document.getElementById("para2").textContent =
      `No more guesswork. No more uncertainty. KhetGuru takes into account
          your location, the time of year, and the local climate, offering
          tailored recommendations for crops that are most likely to thrive in
          your specific conditions. But it doesn't stop there. KhetGuru goes a
          step further, calculating the precise amount of fertilizer you'll need
          and even estimating the associated costs.`;
    document.getElementById("para3").textContent =
      `With KhetGuru, you're not just farming; you're farming smart.`;
    buttonClick = false;
    return buttonClick;
  }
  
  function changeToHindi(event, hindi, buttonClick) {
    event.preventDefault();
    document.getElementById("title").textContent = "खेतगुरु";
    document.getElementById("home").textContent = "होम";
    document.getElementById("tools-dropdown").textContent = "उपकरण";
    document.getElementById("soilcalculatorlink").textContent = "मृदा कैलकुलेटर";
    document.getElementById("forumlink").textContent = "खेतू फोरम";
    userCheckHindi();
    hindi.textContent = "See in English";
    document.getElementById("heading1").textContent = "खेतगुरु में आपका स्वागत है";
    document.getElementById("heading2").textContent = "कृपया जारी रखने के लिए लॉगिन या साइनअप करें";
    document.getElementById("para1").textContent =
      `खेतगुरु एप्लिकेशन एक प्रवर्तनकारी कृषि परियोजना होगी जो प्रौद्योगिकी और समुदाय
          समर्थन के समक्ष कृषि अभ्यास को सुधारने का उद्दीपक होगा। यह नवाचारी पहल सोइल सेंसर,
          डेटा विश्लेषण, और एक समुदाय-निर्मित मोबाइल एप्लिकेशन को एक साथ लाने के माध्यम से
          फसल का चयन करने और किसानों के बीच ज्ञान साझा करने को बढ़ावा देने का काम करेगी।`;
    document.getElementById("para2").textContent =
      `अब अनुमान नहीं। अब अनिश्चितता नहीं। खेतगुरु आपके स्थान, वर्ष के समय, और स्थानीय
          जलवायु को ध्यान में रखकर आपको आपकी विशिष्ट परिस्थितियों में सबसे अच्छी तरह से फलने 
          वाली फसलों के लिए अनुकूलित सिफारिशें प्रदान करता है। लेकिन यह यहाँ रुकता नहीं है। 
          खेतगुरु एक कदम आगे जाता है, आपके आवश्यकतानुसार उर्वरक की ठीक मात्रा की गणना 
          करता है और संबंधित लागत का अनुमान लगाता है।`;
    document.getElementById("para3").textContent =
      `खेतगुरु के साथ, आप सिर्फ कृषि नहीं कर रहे; आप स्मार्ट कृषि कर रहे हैं।`;
    buttonClick = true;
    return buttonClick;
  }
  
  function userCheckHindi() {
    if (window.netlifyIdentity.currentUser()) {
      document.getElementsByClassName("netlify-identity-button")[0].innerHTML = "लॉग आउट";
    } else {
      document.getElementsByClassName("netlify-identity-button")[0].textContent = "लॉग इन";
    }
  }
  
  function userCheckEnglish() {
    if (window.netlifyIdentity.currentUser()) {
      document.getElementsByClassName("netlify-identity-button")[0].textContent = "Log out";
    } else {
      document.getElementsByClassName("netlify-identity-button")[0].textContent = "Log in";
    }
  }