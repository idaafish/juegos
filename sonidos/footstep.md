# Footstep Sound Effect

**Archivo:** footstep.wav
**Categoría:** SFX (Efectos de Sonido)
**Duración recomendada:** 0.25 segundos
**Volumen por defecto:** 12% del volumen SFX

## Descripción
Sonido de pasos en el bosque volcánico. Debe incluir:
- Pisada principal en tierra húmeda (frecuencias graves: 60-90 Hz)
- Crujido de hojas secas (frecuencias agudas: 1500-2300 Hz)
- Pequeño crujido de ramas (frecuencias medias: 800-1200 Hz)

## Características Técnicas Actuales (Web Audio API)
- **Oscilador 1**: Sawtooth a 60-90 Hz con filtro pasa-bajos (150-230 Hz)
- **Oscilador 2**: Square a 1500-2300 Hz con filtro pasa-altos (1200-1800 Hz)
- **Oscilador 3**: Triangle a 800-1200 Hz con filtro pasa-banda (900 Hz)

## Cuándo se reproduce
- Cada vez que el jugador se mueve por el laberinto
- Se activa con las teclas de dirección (←↑→↓)

## Recomendaciones de grabación
- Grabar pisadas reales en hojas secas y tierra húmeda
- Añadir variaciones aleatorias para evitar repetición
- Ecualizar para resaltar frecuencias graves y agudas
