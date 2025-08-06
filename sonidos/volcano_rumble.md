# Volcano Rumble Sound Effect

**Archivo:** volcano_rumble.wav
**Categoría:** AMBIENT (Sonidos Ambientales)
**Duración recomendada:** 3.0 segundos
**Volumen por defecto:** 25% del volumen AMBIENT

## Descripción
Retumbar profundo y amenazante del volcán que se reproduce periódicamente para crear tensión y urgencia en el juego.

## Características Técnicas Actuales (Web Audio API)
### Retumbar principal:
- **Oscilador**: Sawtooth a 30 Hz base
- **LFO**: Sine a 2 Hz
- **Modulación**: ±20 Hz para movimiento realista
- **Filtro**: Pasa-bajos a 100 Hz (Q=2)
- **Duración**: 3 segundos

### Frecuencias medias de profundidad:
- **Oscilador**: Triangle a 80 Hz base
- **LFO**: Sine a 1.3 Hz
- **Modulación**: ±30 Hz
- **Filtro**: Pasa-banda a 150 Hz
- **Volumen**: 15% del volumen AMBIENT

## Cuándo se reproduce
- Periódicamente durante el juego para crear tensión
- Al inicio de cada nivel para establecer el ambiente
- Durante momentos de alta tensión del gameplay

## Recomendaciones de grabación
- Grabar truenos lejanos y procesarlos para hacerlos más graves
- Usar generadores de infrasonidos o subwoofers potentes
- Añadir reverb de caverna profunda
- El sonido debe sentirse más que escucharse (frecuencias muy bajas)
- Procesar con compresión para mantener consistencia
- Añadir ligera distorsión para efecto amenazante
