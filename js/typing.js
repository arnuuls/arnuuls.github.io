// typing.js

// Obtener todas las variables CSS personalizadas
const root = getComputedStyle(document.documentElement);

// Obtener el número de colores definidos
const colorsCount = 7; // Ajustar esto según la cantidad de colores definidos

// Array para almacenar los nombres de las variables CSS personalizadas
const colorVariables = [];

// Llenar el array con los nombres de las variables CSS personalizadas
for (let i = 1; i <= colorsCount; i++) {
    colorVariables.push(root.getPropertyValue(`--color-ty${i}`).trim());
}

// Función para obtener el color correspondiente
function getColor(index) {
    return colorVariables[index % colorsCount];
}

// No alterar el script original de Typed.js, solo preparar las configuraciones para Typed
const typedConfig = {
    strings: [
        '<span style="color:' + getColor(0) + ';">Digital Artist</span>',
        '<span style="color:' + getColor(1) + ';">Graphic Designer</span>',
        '<span style="color:' + getColor(2) + ';">3D Modeler</span>',
        '<span style="color:' + getColor(3) + ';">Web Designer</span>',
        '<span style="color:' + getColor(4) + ';">Web Developer</span>',
        '<span style="color:' + getColor(5) + ';">UI/UX Designer</span>'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
};

// Typing header
var typed = new Typed(".typing", typedConfig);

// Función para cambiar el color de .name
function changeNameColor() {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const randomIndex = Math.floor(Math.random() * colorsCount);
        nameElement.style.color = getColor(randomIndex);
    }
}

// Cambiar el color de .name cada 160 segundos
setInterval(changeNameColor, 4300);
