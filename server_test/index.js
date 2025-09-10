import zlib, { gzip } from 'zlib'
import http from 'http'
// 不压缩 12.2kB
//gzip  0.3kB
// deflate 0.3kB
const server = http.createServer((req, res)=>{
  const txt = '曼波曼巴'.repeat(1000)
  const result = zlib.deflateSync(txt)
  res.setHeader('Content-Encoding', 'deflate') // gzip
  res.setHeader('Content-type', 'text/plan;charset=utf-8')
  res.end(result)
})

server.listen(3000, ()=>{
  console.log('服务器启动成功')
})