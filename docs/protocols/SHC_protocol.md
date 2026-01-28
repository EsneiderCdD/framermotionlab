# Protocolo SHC (Semantic History of Confirmations)

Este protocolo genera un registro histórico semántico, objetivo y forense de los cambios en el código.

## FASE 1: EXTRACCIÓN
Ejecuta:
1. `git status -s`
2. `git diff --stat`
3. `git diff`

---

## FASE 2: ANÁLISIS FORENSE
Analiza la evidencia bajo estas reglas estrictas de **Objetividad y Precisión**.

**REGLA DE ORO: NO SUPONGAS INTENCIONES**
*   **Prohibido**: "Se ajusta padding *para mejorar la experiencia*." (Subjetivo/Suposición).
*   **Permitido**: "Se ajusta padding de 10px a 20px." (Hecho objetivo).
*   **Permitido**: "Se ajusta padding (ver comentario: 'fix mobile issue')." (Hecho documentado).

**Directrices por Estado:**

**[N] NUEVO - Inventario de Capacidades**
*   No describas el código línea a línea.
*   **Registra las Funciones**: Lista las funciones o métodos públicos creados.
    *   *Ejemplo*: "Nuevo utils.ts con funciones: `formatDate()`, `cleanInput()`, `validateEmail()`."
*   **Registra la Data**: Si es un archivo de datos, cuantifica.
    *   *Ejemplo*: "Nueva lista de usuarios con 10 entradas (Juan, Maria...)."

**[M] MODIFICADO - Contraste de Hechos**
*   Describe el cambio exacto.
*   *Cambio Lógico*: "Función `login()`: Se añade validación de longitud de password (>8 chars)."
*   *Cambio Estilo*: "Clase `.navbar`: height cambia de 50px a 60px."

**[D] BORRADO - Registro de Pérdida**
*   Indica qué funciones o componentes desaparecen.

---

## FASE 3: PRESENTACIÓN (Carpeta `shc/`)
Genera o actualiza el archivo en la carpeta `shc/` (Semantic History of Confirmations).

**Formato de Salida (Tabla Markdown):**
Fecha: YYYY-MM-DD HH:MM

| T | Archivo | Componente/Función | Descripción Forense Objetiva |
|:-:| :--- | :--- | :--- |
| **N** | `src/utils/date.ts` | `formatDate`, `getToday` | Creación de utilidades de fecha. Retornan string ISO. |
| **M** | `src/ui/header.css` | `.header-main` | Padding-bottom modificado: `10px` -> `20px`. Color cambiado a `#333`. |
| **M** | `data/users.json` | `initialUsers` | Se agregan 3 objetos user: 'Pedro', 'Ana', 'Luis'. |
| **D** | `src/temp.js` | `tempCalc` | Archivo eliminado. Contenía lógica de cálculo temporal. |

*Leyenda T (Tipo): N=Nuevo / M=Modificado / D=Borrado*
