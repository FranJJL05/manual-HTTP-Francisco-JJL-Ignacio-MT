#!/bin/bash

# --- VARIABLES ---
CONTADOR_EXITO=0
CONTADOR_FALLO=0
ARCHIVO_PACKAGE="../package.json"
CAPTURAS_MINIMAS=6

# --- FUNCIONES ---

# Revisa existencia (archivo o carpeta) e incrementa contadores
function verificar_existencia() {
    local elemento=$1
    local tipo=$2
    
    if [ "$tipo" == "f" ] && [ -f "$elemento" ]; then
        echo "✔ OK: $elemento"
        CONTADOR_EXITO=$((CONTADOR_EXITO + 1))
    elif [ "$tipo" == "d" ] && [ -d "$elemento" ]; then
        echo "✔ OK: $elemento/"
        CONTADOR_EXITO=$((CONTADOR_EXITO + 1))
    else
        echo "✗ FALLA: $elemento"
        CONTADOR_FALLO=$((CONTADOR_FALLO + 1))
    fi
}

# Revisa si un patrón existe en package.json
function verificar_configuracion_json() {
    local patron=$1
    local requisito=$2
    if grep -q "$patron" "$ARCHIVO_PACKAGE"; then
        echo "✔ OK: $requisito"
        CONTADOR_EXITO=$((CONTADOR_EXITO + 1))
    else
        echo "✗ FALLA: $requisito"
        CONTADOR_FALLO=$((CONTADOR_FALLO + 1))
    fi
}

# --- 1. VERIFICACIÓN DE HERRAMIENTAS BASE ---
echo "--- HERRAMIENTAS BASE ---"

if command -v node &> /dev/null && command -v npm &> /dev/null; then
    echo "✔ OK: Node.js y npm instalados."
else
    echo "✗ FALLA: Node.js o npm no están instalados."
    CONTADOR_FALLO=$((CONTADOR_FALLO + 1))
fi

if command -v curl &> /dev/null; then
    echo "✔ OK: curl instalado."
else
    echo "✗ FALLA: curl no está instalado."
    CONTADOR_FALLO=$((CONTADOR_FALLO + 1))
fi

# --- 2. ARCHIVOS Y CARPETAS (AL MENOS 10) ---
echo "--- ESTRUCTURA DE ARCHIVOS ---"

verificar_existencia "$ARCHIVO_PACKAGE" "f"
verificar_existencia "../.gitignore" "f"
verificar_existencia "../.env.example" "f"
verificar_existencia "../README.md" "f"
verificar_existencia "../peticiones-crud.http" "f"
verificar_existencia "../src" "d"
verificar_existencia "../scripts" "d"
verificar_existencia "../images" "d"
verificar_existencia "../src/db/db.json" "f"
verificar_existencia "../src/crud-curl.js" "f"

# --- 3. CONTENIDO DE PACKAGE.JSON ---
echo "--- CONFIGURACIÓN DE PACKAGE.JSON ---"

verificar_configuracion_json '"type": "module"' "type: module"
verificar_configuracion_json '"dotenv":' "dotenv instalado"
verificar_configuracion_json '"json-server":' "json-server instalado"
verificar_configuracion_json '"server:up":' "Script server:up"
verificar_configuracion_json '"crud:curl":' "Script crud:curl"

# --- 4. CAPTURAS DE IMÁGENES (MÍNIMO 6) ---
echo "--- CAPTURAS DE THUNDER CLIENT ---"

CANTIDAD_IMAGENES=$(find ../images/ -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | wc -l)
CANTIDAD_IMAGENES=$(echo $CANTIDAD_IMAGENES | tr -d '[:space:]')

if [ "$CANTIDAD_IMAGENES" -ge "$CAPTURAS_MINIMAS" ]; then
    echo "✔ OK: $CANTIDAD_IMAGENES capturas encontradas (Mínimo: $CAPTURAS_MINIMAS)"
    CONTADOR_EXITO=$((CONTADOR_EXITO + 1))
else
    echo "✗ FALLA: Solo $CANTIDAD_IMAGENES capturas encontradas (Mínimo: $CAPTURAS_MINIMAS)"
    CONTADOR_FALLO=$((CONTADOR_FALLO + 1))
fi

# --- RESULTADO FINAL ---
echo "--- RESUMEN FINAL ---"
echo "Éxitos: $CONTADOR_EXITO / Fallos: $CONTADOR_FALLO"

if [ "$CONTADOR_FALLO" -eq 0 ]; then
    echo "VALIDACIÓN COMPLETADA SIN ERRORES. ✔"
    exit 0
else
    echo "VALIDACIÓN FALLIDA. Revise los errores. ✗"
    exit 1
fi