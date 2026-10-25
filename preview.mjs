import http from 'node:http';import fs from 'node:fs';import path from 'node:path';
const args=process.argv;const p=args.indexOf('--port');const port=p>=0?Number(args[p+1]):3000;
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.png':'image/png'};
http.createServer((req,res)=>{let name=decodeURIComponent(req.url.split('?')[0]);if(name.endsWith('/'))name+='index.html';const file=path.resolve('.','.'+name);if(!file.startsWith(process.cwd()+path.sep)){res.writeHead(403);res.end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data)})}).listen(port,'0.0.0.0',()=>console.log(`http://0.0.0.0:${port}`));
