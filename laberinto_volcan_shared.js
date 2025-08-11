/* ===== SISTEMA DE AUDIO COMÚN ===== */

class AudioSystem {
    constructor() {
        this.sounds = {};
        this.musicVolume = 0.3;
        this.effectsVolume = 0.5;
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;
        
        try {
            const soundFiles = {
                'background': 'sonidos/ambient_waves.wav',
                'footstep': 'sonidos/footstep.wav',
                'wall_hit': 'sonidos/wall_hit.wav',
                'key_pickup': 'sonidos/key_pickup.wav',
                'treasure_pickup': 'sonidos/treasure_pickup.wav',
                'level_complete': 'sonidos/level_complete.wav',
                'typewriter': 'sonidos/typewriter.wav'
            };

            for (const [key, file] of Object.entries(soundFiles)) {
                this.sounds[key] = new Audio(file);
                this.sounds[key].volume = key === 'background' ? this.musicVolume : this.effectsVolume;
            }

            this.sounds.background.loop = true;
            this.isInitialized = true;
        } catch (error) {
            console.warn('Error inicializando sistema de audio:', error);
        }
    }

    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play().catch(e => console.warn(`Error reproduciendo ${soundName}:`, e));
        }
    }

    setMusicVolume(volume) {
        this.musicVolume = volume;
        if (this.sounds.background) {
            this.sounds.background.volume = volume;
        }
    }

    setEffectsVolume(volume) {
        this.effectsVolume = volume;
        Object.keys(this.sounds).forEach(key => {
            if (key !== 'background' && this.sounds[key]) {
                this.sounds[key].volume = volume;
            }
        });
    }

    startBackgroundMusic() {
        if (this.sounds.background) {
            this.sounds.background.play().catch(e => console.warn('Error reproduciendo música de fondo:', e));
        }
    }

    stopBackgroundMusic() {
        if (this.sounds.background) {
            this.sounds.background.pause();
            this.sounds.background.currentTime = 0;
        }
    }
}

/* ===== CONFIGURACIÓN COMÚN ===== */

class GameConfig {
    constructor() {
        this.musicVolume = 0.3;
        this.effectsVolume = 0.5;
        this.isFullscreen = false;
    }

    showConfigModal() {
        const modal = document.getElementById('configModal');
        if (modal) {
            modal.style.display = 'flex';
            this.updateVolumeSliders();
        }
    }

    hideConfigModal() {
        const modal = document.getElementById('configModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    updateVolumeSliders() {
        const musicSlider = document.getElementById('musicVolume');
        const effectsSlider = document.getElementById('effectsVolume');
        
        if (musicSlider) musicSlider.value = this.musicVolume * 100;
        if (effectsSlider) effectsSlider.value = this.effectsVolume * 100;
    }

    setMusicVolume(volume) {
        this.musicVolume = volume / 100;
        if (window.audioSystem) {
            window.audioSystem.setMusicVolume(this.musicVolume);
        }
    }

    setEffectsVolume(volume) {
        this.effectsVolume = volume / 100;
        if (window.audioSystem) {
            window.audioSystem.setEffectsVolume(this.effectsVolume);
        }
    }

    toggleFullscreen() {
        if (!this.isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            this.isFullscreen = true;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            this.isFullscreen = false;
        }
    }
}

/* ===== EFECTOS COMUNES ===== */

class Effects {
    static typeWriterEffect(element, text, speed = 50, callback = null) {
        element.innerHTML = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                
                // Reproducir sonido de máquina de escribir ocasionalmente
                if (i % 3 === 0 && window.audioSystem) {
                    window.audioSystem.playSound('typewriter');
                }
                
                setTimeout(typeWriter, speed);
            } else {
                // Agregar cursor parpadeante
                element.innerHTML += '<span class="story-cursor"></span>';
                if (callback) callback();
            }
        };
        
        typeWriter();
    }

    static showLevelCompleteModal(levelNumber, nextLevelFile = null) {
        const modal = document.getElementById('levelCompleteModal');
        if (!modal) return;

        const title = modal.querySelector('.level-complete-title');
        const subtitle = modal.querySelector('.level-complete-subtitle');
        
        if (title) {
            title.textContent = `¡Nivel ${levelNumber} Completado!`;
        }
        
        if (subtitle) {
            subtitle.textContent = '¡Has escapado exitosamente del volcán! Tu valentía y astucia te han llevado a la victoria.';
        }

        // Configurar botón de siguiente nivel
        const nextBtn = modal.querySelector('.level-option-btn.next');
        if (nextBtn && nextLevelFile) {
            nextBtn.onclick = () => window.location.href = nextLevelFile;
            nextBtn.style.display = 'inline-block';
        } else if (nextBtn) {
            nextBtn.style.display = 'none';
        }

        modal.style.display = 'flex';
        
        if (window.audioSystem) {
            window.audioSystem.playSound('level_complete');
        }
    }

    static hideLevelCompleteModal() {
        const modal = document.getElementById('levelCompleteModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
}

/* ===== UTILIDADES COMUNES ===== */

class Utils {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
}

/* ===== INICIALIZACIÓN COMÚN ===== */

function initCommonSystems() {
    // Inicializar sistema de audio
    window.audioSystem = new AudioSystem();
    window.audioSystem.init();

    // Inicializar configuración
    window.gameConfig = new GameConfig();

    // Event listeners comunes para modales
    document.addEventListener('click', (e) => {
        // Cerrar modal de configuración si se hace clic fuera
        if (e.target.id === 'configModal') {
            window.gameConfig.hideConfigModal();
        }
        
        // Cerrar modal de nivel completado si se hace clic fuera
        if (e.target.id === 'levelCompleteModal') {
            Effects.hideLevelCompleteModal();
        }
    });

    // Event listeners para controles de volumen
    const musicSlider = document.getElementById('musicVolume');
    const effectsSlider = document.getElementById('effectsVolume');
    
    if (musicSlider) {
        musicSlider.addEventListener('input', (e) => {
            window.gameConfig.setMusicVolume(e.target.value);
        });
    }
    
    if (effectsSlider) {
        effectsSlider.addEventListener('input', (e) => {
            window.gameConfig.setEffectsVolume(e.target.value);
        });
    }

    // Event listener para pantalla completa
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            window.gameConfig.toggleFullscreen();
        });
    }

    // Reproducir música de fondo después de la primera interacción del usuario
    let hasInteracted = false;
    const startMusic = () => {
        if (!hasInteracted) {
            hasInteracted = true;
            window.audioSystem.startBackgroundMusic();
            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
        }
    };
    
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
}

// Inicializar automáticamente cuando se carga el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommonSystems);
} else {
    initCommonSystems();
}
