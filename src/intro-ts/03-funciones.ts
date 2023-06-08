//FUNCIÓN:
//Cuando no se le estable algun tipo de dato, automaticamente se toma como any (cualquier tipo de dato)
function sumar(a:any, b:any): void {
    console.log(a+b)
}
const resultado = sumar('Brenda ', 'Ruiz')

//Establecemos los tipos de datos dentro de una función (y también la función)
function suma(n1: number, n2: number): number {
    return n1 + n2
}
console.log(suma(4, 6))

//Podemos asignarle un valor predeterminado
function multiplcar(n3: number, n4: number, n5: number = 5): number {
    let tem = n3 * n5
    return tem
}
console.log(multiplcar(3, 0, 6))


//Las funciones tienes la capacidad de poder pasar objetos
interface Mascotas {
    nombre: string;
    edad: number;
    //se debe de definir de la siguiente manera una función dentro de una interface para poder usarla
    mostrarEdad:() => void;
}

function datosMascota(mascota: Mascotas, x: number): void {
    mascota.edad += x;
    console.log(mascota)
}

const nuevaMascota: Mascotas = {
    nombre: "Juan",
    edad: 23,
    mostrarEdad() {
        console.log("La edad es: ", this.edad)
    }
}

datosMascota(nuevaMascota, 4)

let funcSuma = function(n1: number, n2: number): number {
    return n1 + n2
}

console.log(funcSuma(4, 3))

//Función con parámetros REST
function suma3(...valores: number[]) {
    let suma = 0;
    for(let x = 0; x < valores.length; x ++) {
        suma += valores[x];
    }
    return suma;
}

console.log(suma3(10, 2, 3, 4))
console.log(suma3(1, 2))