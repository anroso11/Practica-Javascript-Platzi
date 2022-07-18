
/*Variables Cuadrado*/ 

const btnCuadradoPerimetro = document.querySelector('#cuadrado-per-id');
const btnCuadradoArea = document.querySelector('#cuadrado-are-id');
const cuadradoSel = document.querySelector('#input-cuadrado-id');
const resultadoSel = document.querySelector('#resultado-cuadrado');
const btnResetearCuadro = document.querySelector('#resetear-cuadro');
const resetcuadro = document.querySelector("#cuadro-form");


/*Variables Triangulo*/

const btnTrianguloPerimetro = document.querySelector('#triangulo-per-id');
const btnTrianguloArea = document.querySelector('#triangulo-are-id');
const ladoTrianguloA = document.querySelector('#input-longitudA-id');
const ladoTrianguloB = document.querySelector('#input-longitudB-id');
const altuTri = document.querySelector('#input-Altura-id');
const ladoBase = document.querySelector('#input-Basetri-id');
const resultadoTri = document.querySelector('#resultado-triangulo');
const btnResetearTri = document.querySelector('#resetear-triangulo');
const resettria = document.querySelector("#triangulo-form");

/*Variables Triangulo Isosceles*/
const btnTrianguloAltura = document.querySelector('#triangulo-Alt-id')
const ladoTriangulo1 = document.querySelector('#input-longitud1-id');
const ladoTriangulo2 = document.querySelector('#input-longitud2-id');
const ladoBaseAlt = document.querySelector('#input-Basetrialt-id');
const resultadoTriAltura = document.querySelector('#resultado-triangulo-alt');
const resetTriAlt = document.querySelector("#trianguloIsoceles-form");
const btnResetTriAlt = document.querySelector('#resetear-triangulo-alt');



/*Variables Circulo*/

const btnCirculoPerimetro =document.querySelector('#circulo-per-id');
const btnCirculoArea =document.querySelector('#circulo-are-id');
const circuloRadio = document.querySelector('#input-circulo-id');
const resultadoCir = document.querySelector('#resultado-circulo');
const btnResetearCir = document.querySelector('#resetear-circulo');
const resetCir = document.querySelector("#circulo-form");

/*Variables Globales*/


/*Eventos de Botones*/ 

btnTrianguloAltura.addEventListener('click', calcularAlturaIsosceles)
btnCuadradoPerimetro.addEventListener('click', calcularPerimetroCuadrado);
btnCuadradoArea.addEventListener('click', calcularAreaCuadrado);
btnTrianguloPerimetro.addEventListener('click', calcularPerimetroTriangulo);
btnTrianguloArea.addEventListener('click', calcularAreaTriangulo );
btnCirculoPerimetro.addEventListener('click', calcularPerimetroCirculo);
btnCirculoArea.addEventListener('click', calcularAreaCirculo);
btnResetearCuadro.addEventListener('click', resetearCuadro );
btnResetearTri.addEventListener('click', resetearTriangulo );
btnResetearCir.addEventListener('click', resetearCirculo );
btnResetTriAlt.addEventListener('click', resetearTrianguloIsosceles );




//console.group("Cuadrado");


function perimetroCuadrado (lado) {
    
    return lado * 4;
  
}

function calcularPerimetroCuadrado(){
    ladoCuadrado = parseInt(cuadradoSel.value);
    const perimetro = perimetroCuadrado(ladoCuadrado);
    resultadoSel.value = perimetro;
}

//perimetroCuadrado();


function areaCuadrado(lado)
{
    return lado * lado;
}

function calcularAreaCuadrado(){
    ladoCuadrado = parseInt(cuadradoSel.value);
    const area = areaCuadrado(ladoCuadrado);
    resultadoSel.value = area;
}


// //areaCuadrado();

// console.groupEnd();

// console.group("Triangulos");

function perimetroTriangulo (lado1,lado2,baseTriangulo){
    return lado1 + lado2 + baseTriangulo;
}

function calcularPerimetroTriangulo(){
    longitudA = parseInt(ladoTrianguloA.value);
    LongitudB = parseInt(ladoTrianguloB.value);
    LongitudBase= parseInt(ladoBase.value);
    const triPerimetro = perimetroTriangulo(longitudA,LongitudB,LongitudBase);
    resultadoTri.value = triPerimetro;
}

// perimetroTriangulo();

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return baseTriangulo * alturaTriangulo / 2;
}

function calcularAreaTriangulo(){
    baseTri = parseFloat(ladoBase.value);
    triAltura= parseFloat(altuTri.value);
    const triArea = areaTriangulo(baseTri,triAltura);
    resultadoTri.value = triArea;

}

function AlturaIsosceles (LadoTriangulo1, LadoTriangulo2, baseTria) {
    
    if (LadoTriangulo1 === LadoTriangulo2 && LadoTriangulo1 != baseTria){
        alert("Es un triángulo isósceles");
        const altura = Math.sqrt((Math.pow(LadoTriangulo1,2)- Math.pow(LadoTriangulo2,2) / 4 ));
        return altura;
        
    }else{
        alert("No es un triangulo isosceles");
    }
}

function calcularAlturaIsosceles () {
    longitud1 = parseInt(ladoTriangulo1.value);
    Longitud2 = parseInt(ladoTriangulo2.value);
    LongitudBaseAlt= parseInt(ladoBaseAlt.value);
    const triIsosceles = AlturaIsosceles(longitud1,Longitud2,LongitudBaseAlt);
    resultadoTriAltura.value = triIsosceles;
    
}
// areaTriangulo();

// console.groupEnd();

// console.group("circulos");

function diametroCirculo (radio){
    return radio * 2;
}

// diametroCirculo();

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function calcularPerimetroCirculo() {
    radioCir = parseFloat(circuloRadio.value);
    const cirPer = perimetroCirculo(radioCir);
    resultadoCir.value = cirPer;
    
}
// perimetroCirculo();

function areaCirculo (radio) {
    return Math.pow(radio,2) * PI;
}

function calcularAreaCirculo() {
    radioCirculo = parseFloat(circuloRadio.value);
    const cirAre = areaCirculo(radioCirculo);
    resultadoCir.value = cirAre;
}

// areaCirculo();
// console.groupEnd();

function resetearCuadro () {
    resetcuadro.reset();
}

function resetearTriangulo () {
    resettria.reset();
}

function resetearCirculo () {
    resetCir.reset();
}

function resetearTrianguloIsosceles(){
    resetTriAlt.reset();
}


