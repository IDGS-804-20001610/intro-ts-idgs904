//Desestructuración de Objetos

interface Alumno1 {
    matricula1: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo:Grupo;
}

interface Grupo {
    grupo: string;
    year: number;
}

const alumno2: Alumno1 = {
    matricula1: 12345,
    nombre: 'Brenda',
    edad: 21,
    correo: 'bren@gmail.com',
    grupo: {
        grupo: 'idgs904',
        year: 2023
    }
}

//Renombramiento de una variable 'grupo:xx'
const {matricula1, edad, correo, grupo:xx} = alumno2;
const {grupo} = xx;

//Formas de llamar los datos (desestrucutración de objetos)
console.log(`La MATRÍCULA es: ${matricula1}`);
console.log(`El NOMBRE es: ${alumno2.nombre}`);
console.log(`La EDAD es: ${alumno2.edad}`);
console.log(`EL CORREO es: ${alumno2.correo}`);
console.log(`La GRUPO es: ${grupo}`);
console.log(`La GENERACIÓN es: ${alumno2.grupo.year}`);


const gps: string[] = ['IDGS', 'IEVN', 'REDES'];
//Desestructuración de Arreglos
const [a , , b] = gps;
console.log(`GRUPO 1: ${a}`)
console.log(`GRUPO 2: ${b}`)
console.log(`GRUPO 3: ${gps[2]}`)