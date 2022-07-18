
function calcularAlturaIsosceles (LadoTriangulo1, LadoTriangulo2, baseTria) {
    
    if (LadoTriangulo1 === LadoTriangulo2 && LadoTriangulo1 != baseTria){
        console.log("Es un triangulo isosceles");
        const altura = Math.sqrt((Math.pow(LadoTriangulo1,2)- Math.pow(LadoTriangulo2,2) / 4 ));
    
        console.log(`La altura de Triángulo isósceles es: ${altura} cm`);
        
    }else{
        console.log("No es un triangulo isosceles");
    }
}






