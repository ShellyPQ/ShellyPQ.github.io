// ---------- Back to Projects ----------

const backLink = document.querySelector("#project-back-link");

backLink.innerHTML = `
    <a href="../projects.html" class="back-link">
        ← Back to Projects
    </a>
`;


// ---------- Project Media ----------

const projectMedia = document.querySelector("#project-media");

const projectMediaFiles = {
    waveform: [
        "01.jpg",
        "02.gif",
        "03.gif",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg"
    ],

    voleur: [
        "01.gif",
        "02.gif",
        "03.jpg",
        "04.jpg",
        "05.jpg"
    ],

    curtainfall: [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
    ],

    "cat-rising": [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg"
    ],

    "procedural-island": [
    "01.jpg",
    "02.gif",
    "03.jpg",
    "04.jpg"
    ],

    "cpp-networking": [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg"
],
};

const projectName = projectMedia.dataset.project;
const mediaFiles = projectMediaFiles[projectName];


// ---------- Create Media Layout ----------

projectMedia.innerHTML = `
    <div class="project-media-main">
        <img
            src="../images/projects/${projectName}/${mediaFiles[0]}"
            alt="${projectName} project media"
            id="project-main-media"
        >
    </div>

    <div class="project-thumbnail-carousel">

        <button
            class="thumbnail-arrow thumbnail-arrow-left"
            aria-label="Previous thumbnails">
            ‹
        </button>

        <div class="project-media-thumbnails"></div>

        <button
            class="thumbnail-arrow thumbnail-arrow-right"
            aria-label="Next thumbnails">
            ›
        </button>

    </div>
`;

const mainMedia =
    document.querySelector("#project-main-media");

const thumbnailContainer =
    document.querySelector(".project-media-thumbnails");

const leftArrow =
    document.querySelector(".thumbnail-arrow-left");

const rightArrow =
    document.querySelector(".thumbnail-arrow-right");


// ---------- Create Thumbnails ----------

const thumbnails = [];

mediaFiles.forEach((file, index) => {

    const thumbnail = document.createElement("button");

    thumbnail.classList.add("media-thumbnail");

    if (index === 0) {
        thumbnail.classList.add("active");
    }

    thumbnail.innerHTML = `
        <img
            src="../images/projects/${projectName}/${file}"
            alt=""
        >
    `;

    thumbnail.addEventListener("click", () => {

        mainMedia.src =
            `../images/projects/${projectName}/${file}`;

        thumbnails.forEach(button => {
            button.classList.remove("active");
        });

        thumbnail.classList.add("active");

    });

    thumbnailContainer.appendChild(thumbnail);

    thumbnails.push(thumbnail);

});


// ---------- Thumbnail Carousel ----------

const visibleThumbnails = 4;

let thumbnailStartIndex = 0;

function updateThumbnailCarousel() {

    thumbnails.forEach((thumbnail, index) => {

        const isVisible =
            index >= thumbnailStartIndex &&
            index < thumbnailStartIndex + visibleThumbnails;

        thumbnail.style.display =
            isVisible ? "block" : "none";

    });

}

rightArrow.addEventListener("click", () => {

    if (
        thumbnailStartIndex <
        thumbnails.length - visibleThumbnails
    ) {
        thumbnailStartIndex++;
    }
    else {
        thumbnailStartIndex = 0;
    }

    updateThumbnailCarousel();

});

leftArrow.addEventListener("click", () => {

    if (thumbnailStartIndex > 0) {
        thumbnailStartIndex--;
    }
    else {
        thumbnailStartIndex =
            thumbnails.length - visibleThumbnails;
    }

    updateThumbnailCarousel();

});


// Set initial thumbnails

updateThumbnailCarousel();