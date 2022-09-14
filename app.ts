class Escuela {
    alumnos: string[];
    profesores: string[];
    estadoAlumno: string[];
    estadoProfesor: string[];

    getAlumnos():string[] {
        this.alumnos = ['Franco','Ariel','Sophia','Valeria'];
        return this.alumnos
    }

    getProfesores():string[] {
        this.profesores = ['Nadia','Javier','Carlos','Santiago'];
        return this.profesores
    }

    getEstadoAlumnos():string[] {
        this.alumnos = ['Matriculado','Expulsado','Expulsado','Matriculado'];
        return this.alumnos
    }

    getEstadoProfesores():string[] {
        this.profesores = ['Contratado','Contratado','Despedido','Contratado'];
        return this.profesores
    }

}

let controlador = new Escuela()

console.log('----------------------------------------------------')
console.log('Listado de alumnos: ' + controlador.getAlumnos())
console.log('Esatdo de alumnos: ' + controlador.getEstadoAlumnos())
console.log('----------------------------------------------------')
console.log('Listado de profesores: ' + controlador.getProfesores())
console.log('Estado de profesores: ' + controlador.getEstadoProfesores())
console.log('----------------------------------------------------')

class Alumnos {
    nota : number
    aprobado : boolean;

    constructor (paramNota: number){
        this.nota = paramNota;
    }   

    getNota():number {
        return this.nota
    }

    getAprobado(): boolean{
        if(this.nota > 6){
            return this.aprobado = true; 
        } else {
            return this.aprobado = false
        }
    }
}

let franco = new Alumnos(6)
let sophia = new Alumnos(9)

console.log('Franco nota: ' + franco.getNota() + ' | Alumno aprobado: ' + franco.getAprobado())
console.log('Sophia nota: ' + sophia.getNota() + ' | Alumno aprobado: ' + sophia.getAprobado())