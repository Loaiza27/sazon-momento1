# Historia de usuario común: Planificador Sazón

## Historia de Usuario 5.5.1: Interfaz interactiva de casillas de verificación (Checkboxes) para compras
- **Código de Rama:** `feature/planificador/G5-CHK-F01-interaccion`
- **Descripción del entregable:** Componente `ItemMercado` con una casilla de verificación junto a cada ítem de la lista de mercado, para marcar lo ya comprado (ej. "Pasta Doria 250 g"). Al marcarla, el texto se muestra tachado.
- **Criterios de aceptación:**
  1. Cada ítem usa un `<input type="checkbox">` semántico y controlado, con `<label htmlFor>` asociado y nombre accesible.
  2. Las clases `.planificador-item-comprado` y `.planificador-item-tachado` se aplican de forma condicional para tachar el texto.
  3. El evento `change` de cada casilla se captura con `onChange` y alterna el estado `comprado` mediante `useListaMercado`.
  4. Los estilos usan únicamente las variables corporativas de `sazon.css`.

## Ubicación de los componentes

| Componente | Ruta | Responsabilidad |
|---|---|---|
| `Navbar` | `src/components/Navbar/` | Barra superior con botón de menú y botón de perfil de usuario a la derecha |
| `Sidebar` | `src/components/Sidebar/` | Barra lateral izquierda desplegable en verde hoja |
| `ItemMercado` | `src/components/ItemMercado/` | Fila con checkbox, label y tachado (HU 5.5.1) |
| `ListaMercado` | `src/components/ListaMercado/` | Lista de ítems y contador de comprados |
| `ProductCard` | `src/components/ProductCard/` | Tarjeta reutilizable de producto |
| `Footer` | `src/components/Footer/` | Pie de página: cacao sobre marfil, marfil sobre verde Nutresa |
| `ThemeToggle` | `src/components/ThemeToggle/` | Conmutador día/noche, abajo a la derecha |

## Vistas
| Vista | Ruta |
|---|---|
| Inicio | `src/views/Inicio/` |
| Planificador | `src/views/Planificador/` |
| Productos | `src/views/Productos/` |

## Hooks, datos y estilos
| Archivo | Responsabilidad |
|---|---|
| `src/hooks/useListaMercado.js` | Estado de los ítems y alternancia de `comprado` |
| `src/hooks/useTema.js` | Modo día/noche con `data-theme` en `<html>` |
| `src/data/itemsMercado.js` | Datos de ejemplo de la lista de mercado |
| `src/data/productos.js` | Datos de ejemplo del catálogo |
| `src/styles/sazon.css` | Kit de marca: paleta, tipografías y modos día/noche |

## Estilos
- CSS Modules (`*.module.css`) por componente y vista.
- Tipografías: títulos Poppins, cuerpo Inter, etiquetas IBM Plex Mono.
- Modo día: fondo marfil. Modo noche: fondo verde Nutresa.

## Estructura
```text
src/
├── App.jsx
├── App.module.css
├── main.jsx
├── assets/
├── components/
│   ├── Footer/
│   ├── ItemMercado/
│   ├── ListaMercado/
│   ├── Navbar/
│   ├── ProductCard/
│   ├── Sidebar/
│   └── ThemeToggle/
├── data/
├── hooks/
├── styles/sazon.css
└── views/
    ├── Inicio/
    ├── Planificador/
    └── Productos/
```

## Pendientes
- El botón de perfil de usuario aún no abre ninguna vista.