# Lava Bubble Sound Effect

**Archivo:** lava_bubble.wav
**Categoría:** SFX (Efectos de Sonido)
**Duración recomendada:** 0.7 segundos
**Volumen por defecto:** 18% del volumen SFX

## Descripción
Sonido de burbujeo de lava caliente. Incluye el burbujeo viscoso inicial y el "pop" cuando explota la burbuja.

## Características Técnicas Actuales (Web Audio API)
### Burbuja principal:
- **Oscilador**: Sawtooth a 40-60 Hz → 80-120 Hz
- **Filtro**: Pasa-bajos a 120-200 Hz (Q=2)
- **Duración**: 0.7 segundos
- **Efecto**: Sonido grave y viscoso que aumenta gradualmente

### Efecto "Pop":
- **Oscilador**: Triangle a 200-300 Hz
- **Filtro**: Pasa-banda a 250 Hz (Q=5)
- **Duración**: 0.15 segundos
- **Timing**: Inicia a los 0.5 segundos del burbujeo principal

## Cuándo se reproduce
- Durante la animación de lava burbujeante en el volcán
- Se reproduce de forma aleatoria para crear ambiente
- Acompaña los efectos visuales de lava

## Recomendaciones de grabación
- Grabar burbujeo real en líquidos viscosos (miel, pintura espesa)
- Añadir efectos de baja frecuencia para simular lava densa
- Incluir variaciones de "pop" para diferentes tamaños de burbujas
- Procesar con reverb para simular el eco en la caverna del volcán
