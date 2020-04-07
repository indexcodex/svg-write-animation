// this script will output the exact stroke-dasharray and stroke-dashoffset values
const svgMotion = document.querySelectorAll('.svg-motion path');

for (let i = 0; i < svgMotion.length; i++) {
    console.log(`Path ${i + 1} is ${svgMotion[i].getTotalLength()}`);
}