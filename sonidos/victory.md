# Victory Sound Effect

**Archivo:** victory.wav
**Categoría:** SFX (Efectos de Sonido)
**Duración recomendada:** 2.0 segundos
**Volumen por defecto:** 25% del volumen SFX

## Descripción
Melodía triunfal que se reproduce cuando el jugador llega al barco de rescate y gana el juego.

## Características Técnicas Actuales (Web Audio API)
### Progresión de acordes principal:
- **Frecuencias**: 523, 659, 784, 1047 Hz (Do, Mi, Sol, Do octava)
- **Oscilador**: Triangle
- **Timing**: Cada nota con delay de 0.2 segundos
- **Duración por nota**: 1.2 segundos
- **Filtro**: Pasa-bajos a frecuencia×2

### Campanillas mágicas:
- **5 osciladores adicionales**: Sine a 1047-1570 Hz aleatorios
- **Timing**: Inician a los 0.8 segundos
- **Espaciado**: 0.1 segundos entre cada campanilla
- **Duración**: 0.5 segundos cada una

## Cuándo se reproduce
- Al alcanzar el barco de rescate (zona de salida)
- Marca el final exitoso del juego
- Se reproduce una sola vez por victoria

## Recomendaciones de grabación
- Usar instrumentos reales: piano, campanas, carillón
- Mantener progresión ascendente para sensación de triunfo
- Añadir reverb dorado/brillante
- Considerar instrumentos épicos: trompetas, cuerdas orquestales
- Finalizar con campanillas o efectos mágicos
