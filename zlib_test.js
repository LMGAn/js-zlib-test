import fs from 'fs';
import zlib from 'zlib';

// zlib压缩

const readStream = fs.createReadStream('origin.txt')
const writeStream = fs.createWriteStream('index.txt.gz')

readStream.pipe(zlib.createGzip()).pipe(writeStream)
