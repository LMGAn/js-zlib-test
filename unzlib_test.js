import fs from "fs";
import zlib from "zlib";
// zlib解压

const readStream = fs.createReadStream("./index.txt.gz");
const writeStream = fs.createWriteStream("index2.txt");

readStream.pipe(zlib.createGunzip()).pipe(writeStream);