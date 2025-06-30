# CatFactGif

Este projecto fue generado en la version 16.2.16 de Angular

## Instalacion

```bash
git clone https://github.com/LuisMiguelMesaGarcia/cat-fact-gif-app.git
cd cat-fact-gif-app
```
## Instalacion de dependencias (recuerda estar en la ruta raiz)

```bash
npm install
```

## Configuarción
Antes de ejecutar la aplicación, asegúrate de configurar correctamente la URL del backend en
```bash
src/environments/environment.development.ts
```
Ejemplo:
```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7148/api'
};
```

## Ejecución de la aplicación (recuerda estar en la ruta raiz)
```bash
ng s -o
```
La aplicación se abrirá automáticamente en http://localhost:4200
