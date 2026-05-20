const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/049/855/471/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg",
    "https://4kwallpapers.com/images/wallpapers/shanghai-city-cityscape-night-city-city-lights-aerial-view-2880x1800-8851.jpg",
    "https://wallpapercat.com/w/full/0/f/3/5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg",
    "https://images.alphacoders.com/591/thumb-1920-591832.jpg",
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
    "https://wallpapers.com/images/hd/surreal-vista-of-a-bustling-urban-skyline-in-4k-resolution-eae11l38l12zh2qw.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
    const items = document.querySelectorAll(".image-box");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}