const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",
    "./images/18.jpg",
    "./images/19.jpg",
    "./images/20.jpg",
]
let currentImageIndex = 0;

// Create gallery images dynamically
images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.classList.add(
        "galleryImg",
        "block",
        "w-[250px]",
        "h-[250px]",
        "2xl:w-[300px]",
        "2xl:h-[300px]"
    );
    img.dataset.index = index;
    img.src = imageUrl;
    img.alt = `Image ${index + 1}`;
    gallery.appendChild(img);
});

// Assuming gallery is the parent element containing all the img elements
gallery.addEventListener('click', (event) => {
        const dataIndex = event.target.dataset.index;
        openPopup(dataIndex);
});


// Open popup
function openPopup(index) {
    popupImage.src = images[index];
    popup.classList.remove("hidden");
    currentImageIndex = index;
    showAndHideNavButtons();
    // Add event listener to close popup when clicking outside the image
    popup.addEventListener('click', closePopupOutside);
}

// Function to close popup when clicking outside the image
function closePopupOutside(event) {
    if (event.target === popup) {
        popup.classList.add("hidden")
        popup.removeEventListener('click', closePopupOutside);
    }
}

 // Event listener for next button click
nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    popupImage.src = images[currentImageIndex];
    showAndHideNavButtons()
});
// Event listener for previous button click
prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    popupImage.src = images[currentImageIndex];
    showAndHideNavButtons()
});

// show and hidde next and previous button
const showAndHideNavButtons = () => {
    if (currentImageIndex == 0) {
        prevBtn.style.visibility = "hidden";
        nextBtn.style.visibility = "visible";
    }
    else if (currentImageIndex == images.length - 1) {
        prevBtn.style.visibility = "visible";
            nextBtn.style.visibility = "hidden";
    }
    else {
        prevBtn.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
    }
}