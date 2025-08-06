// Script para generar todos los archivos de audio automáticamente
// Ejecutar en la consola del navegador en audio_generator.html

async function generateAllAudio() {
    console.log("🎵 Iniciando generación de archivos de audio...");
    
    try {
        await generateFootstep();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateMarkerSound();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateLavaBubble();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateVictory();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateGameOver();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateAmbientWaves();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateVolcanoRumble();
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await generateBackgroundMusic();
        
        console.log("✅ Todos los archivos de audio generados correctamente!");
        console.log("📁 Mueve los archivos descargados a la carpeta 'sonidos'");
        
    } catch (error) {
        console.error("❌ Error generando archivos:", error);
    }
}

// Ejecutar automáticamente
generateAllAudio();
