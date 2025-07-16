// ConsoleObserver.ts
import { IObserver } from './IObserver'; // Importa la interfaz del observador

// Esta clase implementa la interfaz IObserver y reacciona a los cambios
// imprimiendo un mensaje en la consola.
export class ConsoleObserver implements IObserver {
private nombre: string;

constructor(nombre: string) {
    this.nombre = nombre;
}

public actualizar(mensaje: string): void {
    console.log(`${this.nombre}: ¡Estado actualizado! Nuevo mensaje: "${mensaje}"`);
}
}
