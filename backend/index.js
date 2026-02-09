import qr from "qr-image";
import fs from "fs";

var link = "https://rahul-kaushal24.github.io/htmll-css-qr_generation/";

var qr_img = qr.image(link);
qr_img.pipe(fs.createWriteStream("image.png"));