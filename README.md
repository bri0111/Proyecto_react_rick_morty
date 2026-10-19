# Proyecto Rick and Morty - React

Este es un proyecto desarrollado en React que consume la API publica de Rick and Morty.

## Caracteristicas
- Consumo de API: Conexion en tiempo real a rickandmortyapi.com.
- Buscador: Filtro por nombre en tiempo real (con debounce).
- Filtros: Seleccion por especie y estado (Alive, Dead, Unknown).
- Vista de detalle: Visualizacion completa de cada personaje (episodios, origen, etc.).
- Diseno: Interfaz responsiva inspirada en el estilo visual de la serie (colores neon y fondo espacial).

## Tecnologias
- React (con Vite)
- React Router (para la navegacion)
- CSS Puro (sin frameworks externos)

## Despliegue
La aplicacion esta desplegada en AWS EC2 (Amazon Linux 2023) y servida con Nginx.

URL de la app: http://52.91.112.15 (Nota: la IP publica cambia si la instancia EC2 se reinicia).
