const menuBtn = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");
const navLinks = navigation.querySelectorAll("li");
const tabList = document.querySelector("[role='tablist']");
const tabPanels = document.querySelectorAll("[role='tabpanel']");
const tabs = document.querySelectorAll("[role='tab']");
const images = document.querySelectorAll("picture");

menuBtn.addEventListener("click", () => {
  if (navigation.getAttribute("data-visible") === "false") {
    navigation.setAttribute("data-visible", "true");
    menuBtn.style.backgroundImage = "url('/assets/shared/icon-close.svg')";
  } else {
    navigation.setAttribute("data-visible", "false");
    menuBtn.style.backgroundImage = "url('/assets/shared/icon-hamburger.svg')";
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

tabPanels.forEach((panel, i) => i !== 0 && (panel.style.display = "none"));
images.forEach((panel, i) => i !== 0 && (panel.style.display = "none"));
function changeTabPanel(e) {
  tabs.forEach((tab) => tab.setAttribute("aria-selected", false));

  const tabToDisplay = e.target.getAttribute("aria-controls");
  const imageToDisplay = e.target.getAttribute("data-image");

  if (e.target.getAttribute("aria-selected") === "false") {
    e.target.setAttribute("aria-selected", true);
    tabPanels.forEach((panel) => {
      if (panel.getAttribute("id") === tabToDisplay) {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });

    images.forEach((image) => {
      if (image.getAttribute("id") === imageToDisplay) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
}
