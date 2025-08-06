# Marker Sound Effect (Grito de Ayuda)

**Archivo:** marker_sound.wav
**Categoría:** UI (Interfaz de Usuario)
**Duración recomendada:** 0.8 segundos
**Volumen por defecto:** 25% del volumen UI

## Descripción
Grito dramático de ayuda cuando el jugador marca su posición. Simula un grito desesperado de "¡Ayuda!" o "¡Socorro!".

## Características Técnicas Actuales (Web Audio API)
### Primera parte (¡Ay!):
- **Oscilador**: Sawtooth 800→1100→900→600 Hz
- **Filtro**: Pasa-banda a 1200 Hz (Q=5)
- **Duración**: 0.4 segundos

### Segunda parte (¡Uda!):
- **Oscilador**: Triangle 600→450→350 Hz  
- **Filtro**: Pasa-banda a 900 Hz (Q=4)
- **Duración**: 0.45 segundos (con delay de 0.25s)

### Eco/Reverb:
- **Oscilador**: Sine 700→400 Hz
- **Filtro**: Pasa-bajos a 800 Hz
- **Duración**: 0.7 segundos con desvanecimiento

### Grito agudo adicional:
- **Oscilador**: Square 1400→1800→1000 Hz
- **Filtro**: Pasa-altos a 1000 Hz
- **Duración**: 0.25 segundos

## Cuándo se reproduce
- Al presionar la tecla ESPACIO
- Marca la posición del jugador con un círculo brillante
- Útil para recordar ubicaciones importantes

## Recomendaciones de grabación
- Grabar voz humana real gritando "¡Socorro!" o "¡Ayuda!"
- Añadir reverb natural (eco en montañas o cuevas)
- Procesar con modulación para simular urgencia
- Considerar múltiples variaciones para evitar repetición
