const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const dropdown = document.querySelector("#dropdown");
const form = document.querySelector("#form");
const dotContainer = document.querySelector("#dot-container");

let myGallery = [];
let currentSlide = 0;
let auto;


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
for (let i=0; i<myGallery.length; i++) {
    createDot(`${i}`);
}


slideImage(currentSlide);

function showImage(img) {
    let image = document.querySelector("#image");
    image.setAttribute("src", `${img}`);
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
    
    if (myGallery.length == 0) {
        empty();
        return;
    }

    showImage(myGallery[n].img);
    showTitle(myGallery[n].title);
    showWhereAt(n+1, myGallery.length);
    activeDot(n);
    autoSlide(n);
}

function autoSlide(n) {
    auto = setTimeout(function(){ 
        currentSlide = n+1;
        if (currentSlide > myGallery.length-1) {
            currentSlide = 0;
        }
        slideImage(currentSlide);}, 5000);
}

function empty() {
        document.querySelector("#image").setAttribute("src", `./images/empty.png`);
        document.querySelector("#title").innerHTML = "Gallery is empty";
        document.querySelector("#where-at").innerHTML = "";
        alert("Gallery is empty! Add a picture.");
}

function clearForm() {
    document.querySelector("#picture-title").value = "";
    document.querySelector("#picture").value = "";
}

function createDot(n) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.id = `dot-${n}`;
    dot.addEventListener("click", () => {
        currentSlide = parseInt(n);
        clearTimeout(auto);
        slideImage(currentSlide);
    });
    dotContainer.appendChild(dot);
}

function removeDot(n) {
    dotContainer.removeChild(dotContainer.childNodes[`${n+1}`]);
}

function activeDot (n) {
    const dots = document.getElementsByClassName("dot");

    for (let i=0; i<myGallery.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }

    dots[n].className += " current";
}

leftBtn.addEventListener("click", () => {
    currentSlide -= 1;

    if (currentSlide < 0) {
        currentSlide =myGallery.length -1;
    }
    clearTimeout(auto);
    slideImage(currentSlide);
});

rightBtn.addEventListener("click", () => {
    currentSlide += 1;

    if (currentSlide > myGallery.length-1) {
        currentSlide = 0;
    }
    clearTimeout(auto);
    slideImage(currentSlide);
});

addBtn.addEventListener("click", () => {
    let title = document.querySelector("#picture-title").value;
    let url = document.querySelector("#picture").value;

    if(title.length > 30) {
        alert("Title too long.");
        return;
    }
    else if((url.match(/\.(jpeg|jpg|gif|png)$/) == null)) {
        alert("Image url not valid.");
        return;
    }

    const picture = new Image (`${title}`, `${url}`);
    myGallery.push(picture);

    clearTimeout(auto);
    currentSlide = myGallery.length-1;
    createDot(currentSlide);
    slideImage(currentSlide);
});

removeBtn.addEventListener("click", () => {
    removeDot(currentSlide);
    myGallery.splice(currentSlide, 1);
    if (currentSlide == 0) {
        currentSlide = myGallery.length-1;
    }
    else {
    currentSlide -= 1;
    }
    clearTimeout(auto);
    slideImage(currentSlide);   
});

dropdown.addEventListener("mouseenter", () => {
    document.querySelector("#form").style.display = "block";
});

form.addEventListener("mouseleave", () => {
    document.querySelector("#form").style.display = "none";
    clearForm();
});




