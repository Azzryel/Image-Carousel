const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const addBtn = document.querySelector("#add");

let myGallery = [];
let currentSlide = 0;

class Image {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }
}

//test images
const image0 = new Image ("Image0", './images/photo1.jpeg');
myGallery.push(image0);
const image1 = new Image ("Image1", './images/photo2.jpeg');
myGallery.push(image1);
const image2 = new Image ("Image2", './images/photo3.JPG');
myGallery.push(image2);
const image3 = new Image ("Image3", './images/photo4.jpg');
myGallery.push(image3);

console.log(image1.title);
console.log(myGallery[2]);
console.log(myGallery[2].img);

slideImage(currentSlide);

function showImage(img) {
    let image = document.querySelector("#image");
    console.log(image);
    image.setAttribute("src", `${img}`);
    console.log(image);
}

function showTitle(name) {
    let title = document.querySelector("#title");
    title.innerHTML = `${name}`;
}

function showWhereAt(at, of) {
    let where = document.querySelector("#where-at");
    where.innerHTML = `${at} / ${of}`;
}

function slideImage(n) {
    showImage(myGallery[n].img);
    showTitle(myGallery[n].title);
    showWhereAt(n+1, myGallery.length);
}

leftBtn.addEventListener("click", () => {
    currentSlide -= 1;

    if (currentSlide < 0) {
        currentSlide =myGallery.length -1;
    }
    slideImage(currentSlide);
});

rightBtn.addEventListener("click", () => {
    currentSlide += 1;

    if (currentSlide > myGallery.length-1) {
        currentSlide = 0;
    }
    slideImage(currentSlide);
});

addBtn.addEventListener("click", () => {
    let title = document.querySelector("#picture-title").value;
    let url = document.querySelector("#picture").value;
    console.log(title);

    const picture = new Image (`${title}`, `${url}`);
    myGallery.push(picture);

    currentSlide = myGallery.length-1;
    slideImage(currentSlide);
});

