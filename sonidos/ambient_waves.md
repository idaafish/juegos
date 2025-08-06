# Ambient Waves Sound Effect

**Archivo:** ambient_waves.wav
**Categoría:** AMBIENT (Sonidos Ambientales)
**Duración recomendada:** 8.0 segundos (loop)
**Volumen por defecto:** 15% del volumen AMBIENT

## Descripción
Sonido constante de olas del mar que se reproduce en bucle para crear ambiente de costa. Representa la cercanía del mar donde está el barco de rescate.

## Características Técnicas Actuales (Web Audio API)
### Oscilador principal de olas:
- **Oscilador**: Sine a 80 Hz base
- **LFO**: Sine a 0.3 Hz (modulación lenta)
- **Modulación**: ±30 Hz para simular ir y venir de olas
- **Filtro**: Pasa-bajos a 200 Hz
- **Duración**: 8 segundos

### Ruido blanco de espuma:
- **Oscilador**: Square a 2000 Hz base
- **LFO**: Sine a 0.7 Hz (modulación rápida)
- **Modulación**: ±500 Hz para simular espuma
- **Filtro**: Pasa-altos a 1500 Hz
- **Volumen**: 8% del volumen AMBIENT

## Cuándo se reproduce
- Se inicia automáticamente al comenzar el juego
- Se repite cada 10 segundos en bucle infinito
- Para cuando el juego termina (victoria o derrota)

## Recomendaciones de grabación
- Grabar olas reales del mar en playa tranquila
- Incluir tanto el sonido grave de las olas como el agudo de la espuma
- Asegurar que el loop sea seamless (sin cortes audibles)
- Procesar para que sea relajante y no distraiga del gameplay
- Ecualizar para resaltar frecuencias bajas (olas) y altas (espuma)
