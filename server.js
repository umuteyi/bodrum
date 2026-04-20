const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 5173;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".jfif": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Cache-Control": "no-store",
    ...headers,
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(decodeURI(req.url));
    let pathname = parsed.pathname || "/";
    if (pathname === "/") pathname = "/index.html";

    const safePath = path
      .normalize(path.join(ROOT, pathname))
      .replace(/^(\.\.[\\/])+/, "");

    if (!safePath.startsWith(ROOT)) {
      return send(res, 403, "Forbidden");
    }

    fs.stat(safePath, (err, stat) => {
      if (err || !stat.isFile()) {
        return send(res, 404, `Not Found: ${pathname}`);
      }
      const ext = path.extname(safePath).toLowerCase();
      const type = MIME[ext] || "application/octet-stream";
      res.writeHead(200, {
        "Content-Type": type,
        "Content-Length": stat.size,
        "Cache-Control": "no-store",
      });
      fs.createReadStream(safePath).pipe(res);
    });
  } catch (e) {
    send(res, 500, "Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Pilot Garage yerel sunucu: http://localhost:${PORT}`);
});
