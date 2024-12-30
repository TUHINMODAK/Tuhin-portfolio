// Get all <link> elements with the class "cssPage"
const themeLinks = document.querySelectorAll(".cssPage");
const themeSwitcher = document.getElementById("theme");

// Event listener for the button
themeSwitcher.addEventListener("click", () => {
  
  themeLinks.forEach((link) => {
    // Replace "DarkMode" with "LightMode" or vice versa
    if (link.href.includes("DarkMode")) {
      link.href = link.href.replace("DarkMode", "LightMode");
    } else if (link.href.includes("LightMode")) {
      link.href = link.href.replace("LightMode", "DarkMode");
    }
  });
});