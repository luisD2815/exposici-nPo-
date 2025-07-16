
// Define la interfaz que todos los observadores deben implementar.
// Cualquier clase que quiera ser un observador debe tener un método 'actualizar'.
export interface IObserver {
    actualizar(temperatura: number): void;
}