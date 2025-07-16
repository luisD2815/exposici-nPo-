// AlertObserver.ts
import { IObserver } from './IObserver'; // Importa la interfaz del observador

// Esta clase implementa la interfaz IObserver y reacciona a los cambios,
// emitiendo una alerta si el mensaje contiene la palabra "urgente".
export class AlertObserver implements IObserver {
private nombre: string;

constructor(nombre: string) {
    this.nombre = nombre;
}

public actualizar(mensaje: string): void {
    if (mensaje.includes("urgente")) {
    console.warn(`${this.nombre}: ¡ALERTA! Se detectó un mensaje urgente: "${mensaje}"`);
    } else {
    console.log(`${this.nombre}: Mensaje recibido: "${mensaje}"`);
    }
}
}
