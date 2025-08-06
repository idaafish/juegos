# Background Music

**Archivo:** background_music.wav
**Categoría:** MUSIC (Música)
**Duración recomendada:** 19.2 segundos (loop)
**Volumen por defecto:** 8% del volumen MUSIC

## Descripción
Música épica de aventura que se reproduce en bucle continuo durante todo el juego. Tema heroico que inspira valentía y urgencia.

## Características Técnicas Actuales (Web Audio API)
### Melodía principal extendida (32 notas):
**Frase 1**: Do, Re, Mi, Fa, Sol, Fa, Mi, Re (523, 587, 659, 698, 784, 698, 659, 587 Hz)
**Frase 2**: Mi, Fa, Sol, La, Si, La, Sol, Fa (659, 698, 784, 880, 988, 880, 784, 698 Hz)
**Frase 3**: Sol, La, Si, Do, Re, Do, Si, La (784, 880, 988, 1047, 1175, 1047, 988, 880 Hz)
**Frase 4**: Fa, Sol, La, Sol, Fa, Mi, Re, Do (698, 784, 880, 784, 698, 659, 587, 523 Hz)

- **Oscilador**: Triangle
- **Timing**: 0.6 segundos por nota
- **Filtro**: Pasa-bajos a frecuencia×2

### Línea de bajo acompañante (32 notas):
Misma progresión pero una octava más baja
- **Oscilador**: Sine
- **Volumen**: 12% del volumen MUSIC
- **Filtro**: Pasa-bajos a frecuencia×3

## Cuándo se reproduce
- Se inicia automáticamente al comenzar el juego
- Se repite cada 19.2 segundos en bucle infinito
- Para cuando el juego termina (victoria o derrota)

## Recomendaciones de grabación
- Usar instrumentos orquestales: cuerdas, vientos, percusión
- Mantener tempo heroico y épico (aproximadamente 100-120 BPM)
- Incluir progresiones ascendentes para transmitir esperanza
- Añadir contramelodías en instrumentos graves
- Asegurar que el loop sea seamless
- Masterizar para que no compita con efectos de sonido importantes
- Considerar variaciones sutiles para evitar fatiga auditiva
