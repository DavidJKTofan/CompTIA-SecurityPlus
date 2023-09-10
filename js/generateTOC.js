function generateTOC() {
  var tocContainer = document.getElementById("toc");
  var tocList = document.createElement("ol");
  var sections = document.querySelectorAll(".section");

  sections.forEach(function (section, index) {
    var tocItem = document.createElement("li");
    var tocLink = document.createElement("a");
    var h2 = section.querySelector("h2");

    if (h2) {
      tocLink.textContent = h2.textContent;
      tocLink.setAttribute("href", "#section-" + (index + 1));
      tocItem.appendChild(tocLink);

      // Check if the section contains categories
      var categories = section.querySelectorAll(".category");
      if (categories.length > 0) {
        var categoryList = document.createElement("ul");
        categories.forEach(function (category, catIndex) {
          var categoryItem = document.createElement("li");
          var categoryLink = document.createElement("a");
          var categoryId = category.getAttribute("id");
          var h3 = category.querySelector("h3");

          if (h3) {
            categoryLink.textContent = h3.textContent;
            categoryLink.setAttribute("href", "#" + categoryId);
            categoryItem.appendChild(categoryLink);

            // Check if the category contains subcategories with h4 elements
            var subcategories = category.querySelectorAll("h4");
            if (subcategories.length > 0) {
              var subcategoryList = document.createElement("ul");
              subcategories.forEach(function (subcategory, subcatIndex) {
                var subcategoryItem = document.createElement("li");
                var subcategoryLink = document.createElement("a");
                subcategoryLink.textContent = subcategory.textContent;
                var subcategoryId = subcategory.parentNode.getAttribute("id");
                subcategoryLink.setAttribute("href", "#" + subcategoryId);
                subcategoryItem.appendChild(subcategoryLink);
                subcategoryList.appendChild(subcategoryItem);
              });
              categoryItem.appendChild(subcategoryList);
            }
          }
          categoryList.appendChild(categoryItem);
        });
        tocItem.appendChild(categoryList);
      }
    }
    tocList.appendChild(tocItem);
  });
  tocContainer.appendChild(tocList);
}

window.onload = generateTOC;
