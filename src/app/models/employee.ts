export class Employee {
  constructor(_id = "", nombre = "", usuario = "", pwd = "", email = "", role="") {
    this._id = _id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.pwd = pwd;
    this.email = email;
    this.role = role;
  }

  _id: string;
  nombre: string;
  usuario: string;
  pwd: string;
  email: string;
  role: string;


  public toString() : string {
    return JSON.stringify(this)
  }
}
