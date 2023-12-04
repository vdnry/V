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
