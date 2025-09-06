const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

// calculate overlay position so it doesn't cover the drawer
function setOverlayForDrawer() {
  const drawerWidth = Math.min(window.innerWidth * 0.75, 360);
  overlay.style.left = drawerWidth + "px";
  overlay.style.width = `calc(100vw - ${drawerWidth}px)`;
}

function openMenu() {
  navLinks.classList.add("open");
  document.body.classList.add("no-scroll");
  setOverlayForDrawer();
  overlay.classList.add("show");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navLinks.classList.remove("open");
  document.body.classList.remove("no-scroll");
  overlay.classList.remove("show");
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");
  if (isOpen) closeMenu();
  else openMenu();
});

overlay.addEventListener("click", closeMenu);

// close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// close menu when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") closeMenu();
});

// adjust overlay on resize
window.addEventListener("resize", () => {
  if (navLinks.classList.contains("open")) {
    setOverlayForDrawer();
  }
});
