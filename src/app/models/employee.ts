export class Employee {
  constructor(_id = "", nombre = "", usuario = "", pwd = "", email = "") {
    this._id = _id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.pwd = pwd;
    this.email = email;
  }

  _id: string;
  nombre: string;
  usuario: string;
  pwd: string;
  email: string;
}
