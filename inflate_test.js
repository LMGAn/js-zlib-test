import fs from 'fs';
import zlib from 'zlib';

// deflate解压

const readStream = fs.createReadStream('index.txt.deflate')
const writeStream = fs.createWriteStream('index3.txt')

readStream.pipe(zlib.createInflate()).pipe(writeStream)
