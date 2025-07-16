// main.ts
// Este es el archivo principal que orquesta la demostración del patrón Observer.

import { Subject } from './Subject'; // Importa el Sujeto
import { ConsoleObserver } from './ConsoleObserver'; // Importa el Observador de Consola
import { AlertObserver } from './AlertObserver'; // Importa el Observador de Alerta

console.log("--- INICIO DE LA DEMOSTRACIÓN ---");

// Crear un Sujeto
const miSujeto = new Subject("Estado inicial normal");

// Crear Observadores
const observador1 = new ConsoleObserver("Observador de Consola 1");
const observador2 = new ConsoleObserver("Observador de Consola 2");
const observadorAlerta = new AlertObserver("Observador de Alerta");

// Adjuntar Observadores al Sujeto
miSujeto.adjuntar(observador1);
miSujeto.adjuntar(observador2);
miSujeto.adjuntar(observadorAlerta);

// Cambiar el estado del Sujeto y ver cómo los observadores reaccionan
miSujeto.cambiarEstado("Nuevo estado: Todo bien");

miSujeto.cambiarEstado("Estado: Necesita atención urgente"); // Este activará la alerta

miSujeto.cambiarEstado("Estado finalizado");

// Desvincular un observador
console.log("\n--- Desvinculando Observador de Consola 1 ---");
miSujeto.desvincular(observador1);

// Cambiar el estado de nuevo para ver que el observador desvinculado no recibe notificación
miSujeto.cambiarEstado("Estado después de desvincular");

console.log("\n--- FIN DE LA DEMOSTRACIÓN ---");
