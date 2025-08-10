# 🎮 Buenas Prácticas de Git para el Proyecto de Juegos

## 📋 Convenciones de Commits

### Formato de mensajes de commit
```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[pie opcional]
```

### Tipos de commit
- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Documentación únicamente
- **style**: Cambios que no afectan el significado del código (espacios, formato, etc.)
- **refactor**: Cambio de código que no corrige errores ni añade funcionalidad
- **perf**: Cambio que mejora el rendimiento
- **test**: Añadir o corregir tests
- **chore**: Cambios en el proceso de build o herramientas auxiliares

### Ejemplos de buenos commits
```bash
feat(laberinto): añadir sistema de audio completo con efectos
fix(ruleta): corregir cálculo de probabilidades en apuestas múltiples  
docs: añadir documentación de controles del juego
style(mahjong): formatear código y eliminar espacios en blanco
refactor(tetris): optimizar algoritmo de detección de líneas completas
perf(space-invaders): mejorar rendimiento de detección de colisiones
```

## 🌿 Estrategia de Branching

### Ramas principales
- **main**: Código estable y probado
- **develop**: Integración de nuevas funcionalidades (opcional para proyectos pequeños)

### Ramas de funcionalidad
```bash
# Crear nueva rama para funcionalidad
git checkout -b feat/nombre-funcionalidad

# Ejemplo:
git checkout -b feat/pacman-niveles-dificultad
git checkout -b fix/laberinto-generacion-bucles
git checkout -b docs/instrucciones-juegos
```

### Nomenclatura de ramas
- `feat/`: Nuevas funcionalidades
- `fix/`: Corrección de errores
- `hotfix/`: Correcciones urgentes en producción
- `docs/`: Documentación
- `refactor/`: Refactorización de código

## 🔄 Flujo de Trabajo Recomendado

### 1. Antes de empezar a trabajar
```bash
# Asegurarse de estar en main y actualizado
git checkout main
git pull origin main

# Crear nueva rama para la funcionalidad
git checkout -b feat/nueva-funcionalidad
```

### 2. Durante el desarrollo
```bash
# Hacer commits frecuentes y atómicos
git add .
git commit -m "feat(juego): implementar mecánica específica"

# Si el trabajo toma varios días, sincronizar con main
git checkout main
git pull origin main
git checkout feat/nueva-funcionalidad
git merge main  # o git rebase main para historial limpio
```

### 3. Al terminar la funcionalidad
```bash
# Asegurarse de que todo está commitido
git status

# Cambiar a main y actualizar
git checkout main
git pull origin main

# Mergear la funcionalidad
git merge feat/nueva-funcionalidad

# Subir cambios
git push origin main

# Eliminar rama local (opcional)
git branch -d feat/nueva-funcionalidad
```

## 📁 Organización de Archivos

### Estructura recomendada
```
juegos/
├── GIT_BUENAS_PRACTICAS.md
├── README.md
├── inicio.html                 # Página principal
├── estilos.css                # Estilos compartidos
├── juegos/                    # Juegos individuales
│   ├── laberinto_volcan.html
│   ├── pacman.html
│   ├── tetris.html
│   └── ...
├── assets/                    # Recursos compartidos
│   ├── images/
│   ├── sounds/
│   └── fonts/
├── otros/                     # Versiones anteriores/experimentales
└── docs/                      # Documentación adicional
```

### Convenciones de nombres de archivos
- Usar snake_case para archivos HTML: `space_invaders.html`
- Usar kebab-case para carpetas: `assets/background-images/`
- Ser descriptivo: `Ruleta2_final.html` → `ruleta_casino_completa.html`

## 🚫 Qué NO hacer

### Archivos que no commitear
```bash
# Crear .gitignore si no existe
# Añadir patrones comunes:
*.log
*.tmp
.DS_Store
Thumbs.db
node_modules/
.env
*.backup
*~
```

### Malas prácticas a evitar
```bash
# ❌ Commits demasiado genéricos
git commit -m "cambios"
git commit -m "fix"
git commit -m "actualización"

# ❌ Commits gigantes con muchos cambios
git add .  # después de 2 semanas sin commits

# ❌ Mensajes en inglés y español mezclados
git commit -m "fix bug en el juego"

# ❌ Commitear archivos temporales
git add *.backup
git add *~
```

## 🛠️ Comandos Útiles

### Inspección y navegación
```bash
# Ver historial de commits
git log --oneline --graph

# Ver cambios específicos de un archivo
git log -p laberinto_volcan.html

# Ver quién cambió cada línea
git blame laberinto_volcan.html

# Ver diferencias entre commits
git diff HEAD~1 HEAD
```

### Correcciones rápidas
```bash
# Modificar el último commit (antes de push)
git commit --amend -m "nuevo mensaje"

# Añadir archivos al último commit
git add archivo_olvidado.html
git commit --amend --no-edit

# Deshacer cambios no commiteados
git checkout -- archivo.html
git reset --hard  # ⚠️ CUIDADO: elimina todos los cambios
```

### Etiquetas para versiones
```bash
# Crear etiqueta para versión estable
git tag v1.0.0
git tag v1.1.0 -m "Añadido sistema de audio completo"

# Subir etiquetas
git push origin --tags

# Ver todas las etiquetas
git tag -l
```

## 📝 Plantillas de Commit

### Para nuevos juegos
```
feat(nuevo-juego): implementar [nombre del juego]

- Mecánicas básicas de juego
- Interfaz de usuario
- Sistema de puntuación
- Controles responsivos

Fixes #[número de issue si existe]
```

### Para correcciones
```
fix(juego): corregir [descripción del problema]

- Problema: [descripción detallada]
- Solución: [cómo se solucionó]
- Impacto: [qué mejora o arregla]

Closes #[número de issue]
```

### Para mejoras de rendimiento
```
perf(juego): optimizar [qué se optimizó]

- Antes: [situación anterior]
- Después: [mejora obtenida]
- Método: [técnica utilizada]

Mejora la experiencia en dispositivos móviles
```

## 🎯 Consejos Específicos para este Proyecto

1. **Commits por juego**: Cuando modifiques un juego específico, incluye el nombre en el commit
2. **Versiones estables**: Usa tags para marcar versiones que funcionan bien
3. **Backup de configuraciones**: Commitea configuraciones de dificultad que funcionen bien
4. **Documentar cambios de audio**: Los cambios en sistemas de sonido son críticos para la experiencia
5. **Probar antes de commitear**: Especialmente importante en juegos, siempre probar que el juego funciona

## 🔗 Recursos Adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Semantic Versioning](https://semver.org/)

---

*Recuerda: Un buen historial de Git es como un buen save game - te permite volver a puntos estables cuando algo sale mal* 🎮
