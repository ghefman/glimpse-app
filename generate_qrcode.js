// Writes qrcode.svg: a QR code for the platform-aware download page, which sends
// iOS visitors to the App Store, Android visitors to Google Play, everyone else
// to the landing page. The trailing slash is deliberate: it avoids a 301 on scan.
//
// Run from this folder: node generate_qrcode.js
// Uses the QR library vendored in the app (../web/qrcode.js, qrcode-generator, MIT).
const fs = require('fs');
const path = require('path');
const qrcode = require(path.join(__dirname, '..', 'web', 'qrcode.js'));

const url = 'https://ghefman.github.io/glimpse-app/get/';

const qr = qrcode(0, 'H');   // smallest version that fits, high error correction
qr.addData(url);
qr.make();

const cell = 10, margin = 4, n = qr.getModuleCount(), size = (n + 2 * margin) * cell;
let d = '';
for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    if (qr.isDark(r, c)) d += `M${(c + margin) * cell} ${(r + margin) * cell}h${cell}v${cell}h-${cell}z`;
  }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" shape-rendering="crispEdges">`
  + `<rect width="${size}" height="${size}" fill="#fff"/><path d="${d}" fill="#000"/></svg>\n`;
fs.writeFileSync(path.join(__dirname, 'qrcode.svg'), svg);
console.log('QR code for ' + url + ' saved as qrcode.svg');
