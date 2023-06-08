//INTERFACE: es un tipo molde para el tipado de los datos de un objeto
interface Alumno {
    //cuando es opcional se puede poner un signo de interrogación
    matricula?: number;
    nombre: string;
    email: string;
    edad: number;
}

//OBJETO:
//para que los datos del objeto sean tipados se debe de indicar a que interface corresponde
const alumnos: Alumno = {
    nombre: 'Brenda',
    edad: 21,
    email: 'brenda@gmail.com',
    matricula: 123
}

//ARREGLO:
//por la transpilación a javascript no se puede re declarar una variable incluso en diferentes archivos.
//var, let o const es la declaración de la variable, 'var' es para diferentes secciones del código
//let vector:Array<number> = [9, 8, 7, 6, 5]

let vector1:Array<number> = [9, 8, 7, 6, 5]
vector1.push(34)

for(let elemento of vector1) {
    console.log(elemento)
}