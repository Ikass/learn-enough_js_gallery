// Activates teh image gallery.
// attach an event listener to each image in the gallery,
// respond appropriately on click.
function activateGallery() {
    
    // Select all `img` elements inside `div` elements within `div` with ID `galley-thumbs`.
    let thumbnails       = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage        = document.querySelector("#gallery-photo img");
    // Image info to be updated in the aside
    let galleryInfo      = document.querySelector("#gallery-info");
    let asideTitle       = galleryInfo.querySelector(".title");
    let asideDescription = galleryInfo.querySelector(".description");
    let currentClass     = "current";

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
            // Remove `current` class
            document.querySelector(".current").classList.remove(currentClass);
            // Set `current` class on thumbnail div.
            // thumbnail.parentNode.className = "current";
            // OR, as suggested by Michael Hartl:
            thumbnail.parentNode.classList.add(currentClass);
            // Set `alt` attribute
            mainImage.setAttribute("alt", thumbnail.alt);
            // Update aside title and description
            // Chose `textContent` over `innerHTML` to avoid security issues
            asideTitle.textContent = thumbnail.dataset.title;
            asideDescription.textContent = thumbnail.dataset.description;
        });
    });
};