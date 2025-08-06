# Configuración Técnica de Audio - Laberinto Volcán

## Implementación Actual
El juego actualmente utiliza **Web Audio API** para generar todos los sonidos de forma procedural mediante osciladores, filtros y envolventes ADSR.

## Sistema de Volúmenes
```javascript
const audioConfig = {
    sfx: 0.8,      // Efectos de sonido (80%)
    ambient: 0.1,   // Sonidos ambientales (10%)
    music: 0.4,     // Música de fondo (40%)
    ui: 0.5         // Sonidos de interfaz (50%)
};

let masterVolume = 0.7; // Volumen maestro (70%)
```

## Métodos del AudioSystem

### Efectos de Sonido (SFX)
- `playFootstep()` - Pasos del jugador
- `playLavaBubble()` - Burbujeo de lava  
- `playVictorySound()` - Sonido de victoria
- `playGameOverSound()` - Sonido de derrota

### Interfaz de Usuario (UI)
- `playMarkerSound()` - Grito de ayuda (tecla ESPACIO)

### Sonidos Ambientales (AMBIENT)
- `playAmbientWaves()` - Olas del mar (bucle automático)
- `playVolcanoRumble()` - Retumbar del volcán

### Música (MUSIC)
- `playBackgroundMusic()` - Música épica de aventura (bucle automático)

## Controles de Usuario
- **+ / =**: Subir volumen maestro (+10%)
- **-**: Bajar volumen maestro (-10%)
- **0**: Alternar silencio/volumen normal
- **Panel de configuración**: Control granular por categorías

## Características Técnicas

### Osciladores Utilizados
- **Sine**: Tonos puros, líneas de bajo
- **Triangle**: Melodías principales, harmonías
- **Sawtooth**: Texturas ásperas, efectos dramáticos  
- **Square**: Ruido blanco, efectos percusivos

### Filtros Aplicados
- **Lowpass**: Suavizar agudos, efectos graves
- **Highpass**: Eliminar graves, efectos agudos
- **Bandpass**: Aislar frecuencias específicas

### Envolventes ADSR
- **Attack**: Tiempo de subida del volumen
- **Decay**: Tiempo de bajada inicial
- **Sustain**: Nivel de mantenimiento
- **Release**: Tiempo de desvanecimiento final

## Migración a Archivos de Audio

Para reemplazar la generación procedural con archivos reales:

1. **Grabar/obtener archivos** según especificaciones en cada archivo .md
2. **Cargar archivos** usando `new Audio()` o `fetch()` + `AudioContext.decodeAudioData()`
3. **Reemplazar métodos** del AudioSystem manteniendo la misma API
4. **Mantener controles de volumen** aplicando gainNodes
5. **Conservar sistema de categorías** para compatibilidad

## Ejemplo de Migración

```javascript
// Actual (procedural)
playFootstep() {
    const osc = this.createOscillator('sawtooth', 60);
    // ... código procedural
}

// Futuro (archivo)
playFootstep() {
    const audio = new Audio('sonidos/footstep.wav');
    audio.volume = audioConfig.sfx * masterVolume;
    audio.play();
}
```

## Ventajas del Sistema Actual
- ✅ No requiere archivos externos
- ✅ Tamaño de juego mínimo
- ✅ Variación procedural automática
- ✅ Control granular de parámetros

## Ventajas de Archivos de Audio
- ✅ Mayor calidad y realismo
- ✅ Sonidos grabados profesionalmente
- ✅ Menor carga de CPU
- ✅ Compatibilidad con editores de audio
