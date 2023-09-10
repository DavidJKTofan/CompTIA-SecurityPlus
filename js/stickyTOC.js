function stickyTOC() {
  var tocContainer = document.getElementById("toc");
  var topOffset = 20; // Adjust this value as needed

  // Check if the user has scrolled beyond the top of the TOC container
  if (window.scrollY >= tocContainer.offsetTop - topOffset) {
    // Apply a fixed position to the TOC container
    tocContainer.style.position = "fixed";
    tocContainer.style.top = topOffset + "px";
  } else {
    // Restore the default position
    tocContainer.style.position = "static";
    tocContainer.style.top = "auto";
  }
}
// Call the stickyTOC function when the page scrolls
window.addEventListener("scroll", stickyTOC);
