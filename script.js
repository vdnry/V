if (window.netlifyIdentity) {
  window.netlifyIdentity.on("login", (user) => {
    console.log("Logged in as:", user.email);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var toolsDropdown = document.getElementById("tools-dropdown");
  var dropdownContent = document.getElementById("tools-dropdown-content");
  toolsDropdown.addEventListener("click", function (event) {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    var isClickInsideDropdown =
      toolsDropdown.contains(event.target) ||
      dropdownContent.contains(event.target);

    if (!isClickInsideDropdown) {
      dropdownContent.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
var hindi = document.getElementById("hindiButton");

function handleClick(event) {
    event.preventDefault();
    hindi.innerHTML = "See in English";
  }

hindi.addEventListener('click', handleClick);
});