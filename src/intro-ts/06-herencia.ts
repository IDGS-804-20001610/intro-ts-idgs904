//Heredamos de otra clase las propiedades y métodos de la clase "original"(padre) mediante la palabra extends
class Persona5 {
    protected nombre: string;
    protected edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona5 {
    private sueldo: number;
    constructor(nom: string, edad: number, sueldo: number) {
        super(nom, edad);
        this.sueldo = sueldo;
    }
    
    imprimir() {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}