import confetti from 'canvas-confetti';

interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    originY?: number; // Cambiado a camelCase (originY en lugar de originy)
}

export const generarConfetti = ({ particleCount = 100, spread = 120, originY = 0.6 }: ConfettiOptions) => {
    confetti({
        particleCount, // En JS/TS moderno, si la llave y el valor se llaman igual, se pone una sola vez
        spread,
        origin: { y: originY },
    });
}

export const generarConfettiEnIntervalo = (cantidadEjecucion: number = 5) => {
    let ejecuciones = 0;

    const intervaloConfeti = setInterval(() => {
        // 1. Generamos coordenadas aleatorias para la pantalla (entre 0.1 y 0.9)
        const xAleatorio = Math.random() * 0.8 + 0.1;
        const yAleatorio = Math.random() * 0.6 + 0.2;

        // 2. Lanzamos el confeti
        confetti({
            particleCount: 100,
            spread: 120,
            origin: { x: xAleatorio, y: yAleatorio },
        });

        ejecuciones++;

        // 3. Detener el intervalo cuando llegue al límite
        if (ejecuciones >= cantidadEjecucion) {
            clearInterval(intervaloConfeti);
        }
    }, 400);

    // NUEVO: Retornamos una función que permite cancelar el intervalo manualmente
    return () => clearInterval(intervaloConfeti);
}