export class Contact {
  firstName = "";
  lastName = "";
  email = "";
  connected = false;

  constructor(firstName, lastName, email, connected) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.connected = connected;
  }
}

// Nombre: que será un String.
// Apellido: también un String.
// Email: de nuevo un String.
// Conectado: será un booleano que nos indicará si la persona está conectada o no.
