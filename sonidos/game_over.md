# Game Over Sound Effect

**Archivo:** game_over.wav
**Categoría:** SFX (Efectos de Sonido)
**Duración recomendada:** 3.5 segundos
**Volumen por defecto:** 20% del volumen SFX

## Descripción
Melodía dramática descendente que se reproduce cuando el jugador es alcanzado por la lava.

## Características Técnicas Actuales (Web Audio API)
### Progresión descendente principal:
- **Frecuencias**: 523, 466, 415, 349, 311 Hz (progresión descendente dramática)
- **Oscilador**: Sawtooth
- **Timing**: Cada nota con delay de 0.3 segundos
- **Duración por nota**: 1.3 segundos
- **Filtro**: Pasa-bajos a frecuencia×1.5 (Q=2)

### Efecto "Doom" final:
- **Oscilador**: Square a 55 Hz (nota muy grave)
- **Duración**: 2.3 segundos (1.2s delay + 2.3s duración)
- **Filtro**: Pasa-bajos a 120 Hz (Q=3)
- **Volumen**: 30% del volumen SFX

## Cuándo se reproduce
- Cuando la lava alcanza al jugador
- Al mostrar el mensaje "¡La lava te alcanzó!"
- Marca el final del juego por derrota

## Recomendaciones de grabación
- Usar instrumentos graves y dramáticos: violonchelos, contrabajos
- Mantener progresión descendente para sensación de pérdida
- Añadir reverb oscuro y profundo
- El efecto final debe ser muy grave y amenazante
- Considerar efectos de trueno o retumbar lejano
