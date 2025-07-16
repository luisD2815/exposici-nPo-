// Subject.ts
import { IObserver } from './IObserver'; // Importa la interfaz del observador

// El Sujeto es el objeto que tiene un estado de interés y notifica a sus observadores.
export class Subject {
  private estado: string; // El estado que los observadores monitorean.
  private observadores: IObserver[] = []; // Lista de observadores registrados.

constructor(estadoInicial: string) {
    this.estado = estadoInicial;
    console.log(`Sujeto: Estado inicial establecido en "${this.estado}"`);
}

  // Método para añadir un observador a la lista.
public adjuntar(observador: IObserver): void {
    const existe = this.observadores.includes(observador);
    if (existe) {
    console.log('Sujeto: Observador ya adjunto.');
    return;
    }
    this.observadores.push(observador);
    console.log('Sujeto: Observador adjunto.');
}

  // Método para eliminar un observador de la lista.
public desvincular(observador: IObserver): void {
    const indice = this.observadores.indexOf(observador);
    if (indice === -1) {
    console.log('Sujeto: Observador no existe.');
    return;
    }
    this.observadores.splice(indice, 1);
    console.log('Sujeto: Observador desvinculado.');
}

  // Método para notificar a todos los observadores registrados.
private notificar(): void {
    console.log('\nSujeto: Notificando a los observadores...');
    for (const observador of this.observadores) {
      observador.actualizar(this.estado); // Llama al método 'actualizar' de cada observador.
    }
}

  // Método para cambiar el estado del Sujeto.
  // Cada vez que el estado cambia, se notifica a los observadores.
public cambiarEstado(nuevoEstado: string): void {
    if (this.estado === nuevoEstado) {
    console.log(`Sujeto: El estado ya es "${nuevoEstado}". No hay cambios.`);
    return;
    }
    console.log(`\nSujeto: Cambiando estado de "${this.estado}" a "${nuevoEstado}"`);
    this.estado = nuevoEstado;
    this.notificar(); // Notifica a los observadores sobre el cambio.
}
}
