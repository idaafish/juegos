// ===== SISTEMA SIMPLE DE GRÁFICOS PNG =====
// Este archivo contiene funciones simples para cargar y usar imágenes PNG

// Variables globales para las imágenes
let exploradorImg = null;
let bosque1Img = null;  // Pared densa
let bosque2Img = null;  // Pared con troncos
let bosque3Img = null;  // Pared rocosa
let sueloBosqueImg = null;
let imagenesListas = false;

// Función para cargar todas las imágenes
function cargarImagenes() {
    console.log("🎨 Cargando imágenes PNG...");
    
    let imagenesCargadas = 0;
    const totalImagenes = 5; // Ahora son 5 imágenes
    
    function imagenCargada() {
        imagenesCargadas++;
        if (imagenesCargadas === totalImagenes) {
            imagenesListas = true;
            console.log("✅ Todas las imágenes PNG cargadas exitosamente");
        }
    }
    
    // Cargar explorador
    exploradorImg = new Image();
    exploradorImg.onload = imagenCargada;
    exploradorImg.onerror = () => {
        console.log("⚠️ No se pudo cargar explorador.png, usando gráficos vectoriales");
        imagenCargada();
    };
    exploradorImg.src = "Images/explorador.png";
    
    // Cargar bosque1 (pared densa)
    bosque1Img = new Image();
    bosque1Img.onload = imagenCargada;
    bosque1Img.onerror = () => {
        console.log("⚠️ No se pudo cargar bosque1.png, usando gráficos vectoriales");
        imagenCargada();
    };
    bosque1Img.src = "Images/bosque1.png";
    
    // Cargar bosque2 (pared con troncos)
    bosque2Img = new Image();
    bosque2Img.onload = imagenCargada;
    bosque2Img.onerror = () => {
        console.log("⚠️ No se pudo cargar bosque2.png, usando gráficos vectoriales");
        imagenCargada();
    };
    bosque2Img.src = "Images/bosque2.png";
    
    // Cargar bosque3 (pared rocosa)
    bosque3Img = new Image();
    bosque3Img.onload = imagenCargada;
    bosque3Img.onerror = () => {
        console.log("⚠️ No se pudo cargar bosque3.png, usando gráficos vectoriales");
        imagenCargada();
    };
    bosque3Img.src = "Images/bosque3.png";
    
    // Cargar suelo bosque
    sueloBosqueImg = new Image();
    sueloBosqueImg.onload = imagenCargada;
    sueloBosqueImg.onerror = () => {
        console.log("⚠️ No se pudo cargar suelo_bosque.png, usando gráficos vectoriales");
        imagenCargada();
    };
    sueloBosqueImg.src = "Images/suelo_bosque.png";
}

// Función simple para dibujar el explorador
function dibujarExplorador(ctx, x, y, cellSize, highlight = false) {
    if (exploradorImg && exploradorImg.complete) {
        // Usar imagen PNG
        const size = cellSize * 0.9; // Ajustar tamaño
        ctx.drawImage(exploradorImg, 
            x * cellSize + (cellSize - size) / 2, 
            y * cellSize + (cellSize - size) / 2, 
            size, size);
    } else {
        // Fallback: gráficos vectoriales simplificados
        ctx.save();
        ctx.translate(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
        
        if (highlight) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, cellSize * 0.9, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255,255,0,0.35)";
            ctx.shadowColor = "#fff";
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.restore();
        }
        
        const scale = cellSize / 24;
        
        // Cuerpo simple
        ctx.fillStyle = "#8b4513";
        ctx.fillRect(-5 * scale, -2 * scale, 10 * scale, 16 * scale);
        
        // Cabeza
        ctx.fillStyle = "#f5d7b7";
        ctx.beginPath();
        ctx.arc(0, -8 * scale, 6 * scale, 0, 2 * Math.PI);
        ctx.fill();
        
        // Sombrero
        ctx.fillStyle = "#3e2723";
        ctx.beginPath();
        ctx.arc(0, -12 * scale, 8 * scale, 0, Math.PI);
        ctx.fill();
        
        ctx.restore();
    }
}

// Función simple para dibujar pared de bosque con variedad
function dibujarParedBosque(ctx, x, y, cellSize) {
    // Usar coordenadas para determinar qué tipo de pared usar
    const tipoSeed = x * 1000 + y;
    const tipoPared = tipoSeed % 3; // 0, 1, o 2
    
    let imagen = null;
    switch(tipoPared) {
        case 0:
            imagen = bosque1Img; // Pared densa
            break;
        case 1:
            imagen = bosque2Img; // Pared con troncos
            break;
        case 2:
            imagen = bosque3Img; // Pared rocosa
            break;
    }
    
    if (imagen && imagen.complete) {
        // Usar imagen PNG
        ctx.drawImage(imagen, 
            x * cellSize, 
            y * cellSize, 
            cellSize, cellSize);
    } else {
        // Fallback: colores diferentes según el tipo
        let color;
        switch(tipoPared) {
            case 0:
                color = "#0d4f1a"; // Verde muy oscuro (densa)
                break;
            case 1:
                color = "#3e2723"; // Marrón (troncos)
                break;
            case 2:
                color = "#424242"; // Gris (rocosa)
                break;
        }
        ctx.fillStyle = color;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
}

// Función simple para dibujar suelo de bosque
function dibujarSueloBosque(ctx, x, y, cellSize) {
    if (sueloBosqueImg && sueloBosqueImg.complete) {
        // Usar imagen PNG
        ctx.drawImage(sueloBosqueImg, 
            x * cellSize, 
            y * cellSize, 
            cellSize, cellSize);
    } else {
        // Fallback: color sólido
        ctx.fillStyle = "#b9f6ca";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
}
