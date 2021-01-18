let myGallery = [];

class Image {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }

}

//test images
const image0 = new Image ("Image0", './images/photo0.jpeg');
myGallery.push(image0);
const image1 = new Image ("Image1", './images/photo1.jpeg');
myGallery.push(image1);
const image2 = new Image ("Image2", './images/photo2.jpeg');
myGallery.push(image2);
const image3 = new Image ("Image3", './images/photo3.jpeg');
myGallery.push(image3);

console.log(image1.title);
console.log(myGallery[2]);

