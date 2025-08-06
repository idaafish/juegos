# Instrucciones para Generar Archivos de Audio Reales

## ✅ Sistema Implementado

El juego ahora tiene un **sistema híbrido de audio** que:

1. **Intenta cargar archivos de audio reales** desde la carpeta `sonidos/`
2. **Fallback automático** a síntesis procedural si no encuentra los archivos

## 🎵 Cómo Funciona

### Carga de Archivos
- El juego busca automáticamente archivos `.wav` en la carpeta `sonidos/`
- Si encuentra un archivo válido, lo usa
- Si no lo encuentra o hay error, usa el sistema procedural original

### Archivos Necesarios
- `footstep.wav` - Pasos en el bosque
- `marker_sound.wav` - Grito de ayuda (tecla ESPACIO)
- `lava_bubble.wav` - Burbujeo de lava
- `victory.wav` - Sonido de victoria
- `game_over.wav` - Sonido de derrota
- `ambient_waves.wav` - Olas del mar (bucle)
- `volcano_rumble.wav` - Retumbar del volcán
- `background_music.wav` - Música de fondo (bucle)

## 🛠️ Métodos para Generar Audio Real

### Opción 1: Usar el Generador Web
1. Abrir `audio_generator.html` en el navegador
2. Hacer clic en cada botón para generar archivos
3. Descargar automáticamente los archivos WAV
4. Mover los archivos a la carpeta `sonidos/`

### Opción 2: Herramientas Externas
```bash
# Con ffmpeg (si está instalado)
ffmpeg -f lavfi -i "sine=frequency=75:duration=0.25" footstep.wav
ffmpeg -f lavfi -i "sine=frequency=800:duration=0.8" marker_sound.wav
# ... etc
```

### Opción 3: Software de Audio
- **Audacity** (gratuito)
- **Reaper** 
- **FL Studio**
- **Logic Pro** (Mac)
- Cualquier DAW o editor de audio

### Opción 4: Recursos Gratuitos
- **Freesound.org** - Biblioteca de sonidos gratuitos
- **Zapsplat** - Efectos de sonido
- **BBC Sound Effects** - Archivo de la BBC

## 📝 Especificaciones Técnicas

### Formato Recomendado
- **Formato**: WAV (recomendado) o MP3
- **Frecuencia**: 44.1 kHz
- **Bits**: 16-bit
- **Canales**: Mono o Estéreo

### Duraciones Objetivo
- `footstep.wav`: 0.25 segundos
- `marker_sound.wav`: 0.8 segundos
- `lava_bubble.wav`: 0.7 segundos
- `victory.wav`: 2.0 segundos
- `game_over.wav`: 3.5 segundos
- `ambient_waves.wav`: 8.0 segundos (seamless loop)
- `volcano_rumble.wav`: 3.0 segundos
- `background_music.wav`: 19.2 segundos (seamless loop)

## 🎮 Estado Actual

**FUNCIONANDO AHORA MISMO**: El juego funciona perfectamente con síntesis procedural

**MEJORA DISPONIBLE**: Reemplazar con archivos de audio reales siguiendo estas instrucciones

## 🔄 Proceso de Prueba

1. **Sin archivos**: El juego usa síntesis procedural (estado actual)
2. **Con archivos placeholder**: El juego detecta que no son audio válido y usa síntesis
3. **Con archivos WAV reales**: El juego usa los archivos y suena como audio grabado

## 🚀 Ventajas del Sistema Híbrido

✅ **Compatibilidad total** - Nunca se rompe
✅ **Mejora gradual** - Puedes agregar archivos uno por uno
✅ **Fácil testing** - Rápido intercambio entre modos
✅ **Tamaño flexible** - Juego mínimo sin archivos, completo con archivos
