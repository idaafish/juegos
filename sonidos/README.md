# Sonidos del Juego Laberinto Volcán

Esta carpeta contiene todos los sonidos utilizados en el juego "Laberinto Volcán".

## Lista de Sonidos Implementados

### 1. Efectos de Sonido (SFX)
- **footstep.wav** - Sonido de pasos en el bosque (pisadas en tierra húmeda + hojas crujiendo)
- **marker_sound.wav** - Grito de aviso cuando el jugador presiona espacio (¡Ayuda!)
- **lava_bubble.wav** - Burbujeo de lava (sonido viscoso con "pop" de burbujas)
- **victory.wav** - Sonido de victoria (progresión de acordes triunfal)
- **game_over.wav** - Sonido de derrota (progresión descendente dramática)

### 2. Sonidos Ambientales (AMBIENT)
- **ambient_waves.wav** - Olas del mar de fondo (sonido constante con modulación)
- **volcano_rumble.wav** - Retumbar amenazante del volcán

### 3. Música (MUSIC)
- **background_music.wav** - Música épica de aventura (melodía heroica extendida)

## Configuración de Volúmenes

El juego utiliza el siguiente sistema de categorías de volumen:
- **SFX (Efectos)**: 80% por defecto
- **AMBIENT (Ambiente)**: 10% por defecto  
- **MUSIC (Música)**: 40% por defecto
- **UI (Interfaz)**: 50% por defecto
- **MASTER (Maestro)**: 70% por defecto

## Formatos Recomendados

Para máxima compatibilidad, se recomienda usar:
- **Formato**: WAV o MP3
- **Frecuencia de muestreo**: 44.1 kHz
- **Bits**: 16-bit
- **Canales**: Mono o Estéreo

## Implementación Actual

Actualmente el juego genera todos los sonidos de forma procedural usando Web Audio API con osciladores, filtros y envolventes ADSR. Esta carpeta está preparada para cuando se quiera reemplazar con archivos de audio reales.

## Notas de Desarrollo

- Los sonidos se activan en la primera interacción del usuario (política de navegadores)
- Cada sonido tiene controles de volumen independientes
- La música y efectos ambientales se repiten automáticamente en bucle
- Todos los sonidos respetan el volumen maestro del juego
