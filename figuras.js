
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro de cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

console.group("Triangulos");

const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triángulo miden: ${LadoTriangulo1} cm, ${LadoTriangulo2} cm, ${baseTriangulo} cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

const perimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${alturaTriangulo} cm^2`);
console.groupEnd();

console.group("circulos");
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

const PI = Math.PI;
console.log(`PI es: ${PI} `);

const perimetroCirculo = PI * diametroCirculo;
console.log(`la circuferencia de circulo es: ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo)* PI;
console.log(`el área del circulo es: ${areaCirculo} cm^2`);
console.groupEnd();

