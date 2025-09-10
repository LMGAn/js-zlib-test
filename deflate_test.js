import fs from 'fs';
import zlib from 'zlib';

// deflate压缩

const readStream = fs.createReadStream('origin.txt')
const writeStream = fs.createWriteStream('index.txt.deflate')

readStream.pipe(zlib.createDeflate()).pipe(writeStream)
