const gallery = document.getElementById('gallery');
const popupModal = document.getElementById('popup');
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
    "./images/21.jpg",
    "./images/22.jpg",
    "./images/23.jpg",
    "./images/24.jpg",
    "./images/25.jpg",
    "./images/26.jpg",
    "./images/27.jpg",
    "./images/28.jpg",
    "./images/29.jpg",
    "./images/30.jpg",

]
let currentImageIndex = 0;

// Create gallery images dynamically

images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.classList.add(
        "galleryImg",
        "block",
        "w-full",
        "h-[3.5rem]",
        "sm:h-[6rem]",
        "lg:h-[6rem]",
        "xl:h-[9rem]",
        "2xl:h-[18rem]",
        "cursor-pointer",
        "hover:opacity-80"
    );
    img.dataset.index = index;
    img.src = imageUrl;
    img.alt = `Image ${index + 1}`;
    gallery.appendChild(img);
});

gallery.onclick = (event) => {
    const dataIndex = event.target.dataset.index;
    openPopup(dataIndex);
};

const openPopup = (index) => {
        popupImage.src = images[index];
        popupModal.classList.remove("hidden");
        currentImageIndex = index;
        showAndHideNavButtons();
        // Add event listener to close popup when clicking outside the image
        popupModal.addEventListener('click', closePopup);
    }

const closePopup = (event)=> {
    if (event.target === popupModal) {
        popupModal.classList.add("hidden")
        popupModal.removeEventListener('click', closePopup);
    }
}

nextBtn.onclick = () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    popupImage.src = images[currentImageIndex];
    showAndHideNavButtons()
};
// Event listener for previous button click
prevBtn.onclick = () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    popupImage.src = images[currentImageIndex];
    showAndHideNavButtons()
};

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

// Select field for setting the number of images per row
const imagesPerRowSelect = document.getElementById('images-per-row');
let num = imagesPerRowSelect.value;
console.log(num);
imagesPerRowSelect.addEventListener('change', () => {
        num = imagesPerRowSelect.value;
        setGrid(imagesPerRowSelect.value);
});

const setGrid = (num) =>{
    gallery.style.gridTemplateColumns = `repeat(${num}, minmax(0, 1fr))`;
}
setGrid(num);

// Checkbox for enabling keyboard navigation
const backdropCheckbox = document.getElementById('backdrop-checkbox');
backdropCheckbox.addEventListener('change', () => {
    if (backdropCheckbox.checked) {
        popupModal.classList.add("bg-opacity-60");
    } else {
        popupModal.classList.remove("bg-opacity-60");
    }
});

// Checkbox for enabling keyboard navigation
const keyboardCheckbox = document.getElementById('keyboard-nav-checkbox');
keyboardCheckbox.addEventListener('change', () => {
    if (keyboardCheckbox.checked) {
        document.addEventListener('keydown', handleKeyboardNavigation);
    } else {
        document.removeEventListener('keydown', handleKeyboardNavigation);
    }
});

// Function to handle keyboard navigation
const handleKeyboardNavigation = (event)=> {
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
}

// Initialize gallery
