# Bot No Webiemos 🤖

Bot de Discord que cuenta automáticamente las veces que se dice "no webiemos" y sus variantes en el servidor.

## Características

- 🔍 Detecta automáticamente "no webiemos" y variantes como "no huevemos", "no webeamos", etc.
- 📊 Mantiene un contador persistente guardado en archivo JSON
- 🎯 Comando `!nowebiemos` para consultar el total actual
- 🚀 Listo para desplegar en Railway

## Configuración Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   ```
   Edita `.env` y agrega tu token de Discord:
   ```
   DISCORD_TOKEN=tu_token_aqui
   ```

3. **Ejecutar el bot:**
   ```bash
   npm start
   ```

## Despliegue en Railway

1. **Conecta tu repositorio de GitHub a Railway**
2. **Configura la variable de entorno:**
   - Ve a tu proyecto en Railway
   - Agrega la variable `DISCORD_TOKEN` con tu token del bot
3. **Railway detectará automáticamente el `package.json` y ejecutará `npm start`**

## Comandos del Bot

- `!nowebiemos` o `!nw` - **Incrementa** el contador en +1 y muestra el total
- `!contador` o `!count` - **Solo consulta** el total actual sin incrementar

### Detección Automática

El bot también detecta automáticamente cuando alguien escribe "no webiemos" y sus variantes en el chat, incrementando el contador sin necesidad de comandos.

## Obtener Token de Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. Ve a la sección "Bot"
4. Copia el token y úsalo en tu variable de entorno
5. Invita el bot a tu servidor con los permisos necesarios

## Estructura del Proyecto

```
├── index.js          # Código principal del bot
├── package.json      # Dependencias y scripts
├── .env.example      # Plantilla de variables de entorno
├── .gitignore        # Archivos a ignorar en git
└── README.md         # Este archivo
```

## Tecnologías

- **Node.js** - Runtime de JavaScript
- **discord.js v14** - Librería para interactuar con la API de Discord
- **Railway** - Plataforma de despliegue