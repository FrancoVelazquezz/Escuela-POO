var Escuela = /** @class */ (function () {
    function Escuela() {
    }
    Escuela.prototype.getAlumnos = function () {
        this.alumnos = ['Franco', 'Ariel', 'Sophia', 'Valeria'];
        return this.alumnos;
    };
    Escuela.prototype.getProfesores = function () {
        this.profesores = ['Nadia', 'Javier', 'Carlos', 'Santiago'];
        return this.profesores;
    };
    Escuela.prototype.getEstadoAlumnos = function () {
        this.alumnos = ['Matriculado', 'Expulsado', 'Expulsado', 'Matriculado'];
        return this.alumnos;
    };
    Escuela.prototype.getEstadoProfesores = function () {
        this.profesores = ['Contratado', 'Contratado', 'Despedido', 'Contratado'];
        return this.profesores;
    };
    return Escuela;
}());
var controlador = new Escuela();
console.log('----------------------------------------------------');
console.log('Listado de alumnos: ' + controlador.getAlumnos());
console.log('Esatdo de alumnos: ' + controlador.getEstadoAlumnos());
console.log('----------------------------------------------------');
console.log('Listado de profesores: ' + controlador.getProfesores());
console.log('Estado de profesores: ' + controlador.getEstadoProfesores());
console.log('----------------------------------------------------');
var Alumnos = /** @class */ (function () {
    function Alumnos(paramNota) {
        this.nota = paramNota;
    }
    Alumnos.prototype.getNota = function () {
        return this.nota;
    };
    Alumnos.prototype.getAprobado = function () {
        if (this.nota > 6) {
            return this.aprobado = true;
        }
        else {
            return this.aprobado = false;
        }
    };
    return Alumnos;
}());
var franco = new Alumnos(6);
var sophia = new Alumnos(9);
console.log('Franco nota: ' + franco.getNota() + ' | Alumno aprobado: ' + franco.getAprobado());
console.log('Sophia nota: ' + sophia.getNota() + ' | Alumno aprobado: ' + sophia.getAprobado());
