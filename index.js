const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Token del bot desde variable de entorno (más seguro para Railway)
const TOKEN = process.env.DISCORD_TOKEN;
const FILE_PATH = './contador.json';

// Carga el contador desde archivo o inicia nuevo
let contador = fs.existsSync(FILE_PATH)
  ? JSON.parse(fs.readFileSync(FILE_PATH))
  : { total: 0 };

// Lista de variantes que debe detectar (puedes expandirla)
// Detecta "no webiemos" y sus variantes como "no huevemos", "no webeamos", etc.
const regex = /\bno\s*(w?h?ue?b?[ei]+[a-z]*)\b/gi;

client.on('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const coincidencias = [...message.content.matchAll(regex)];
  if (coincidencias.length > 0) {
    contador.total += coincidencias.length;

    // Guarda el nuevo total en el archivo
    fs.writeFileSync(FILE_PATH, JSON.stringify(contador, null, 2));

    console.log(
      `Mensaje detectado: ${message.content} — Total acumulado: ${contador.total}`
    );
  }

  // Comando para consultar el contador
  if (message.content === '!nowebiemos') {
    message.reply(`🧮 Se han dicho *"no webiemos"* y derivados ${contador.total} veces.`);
  }
});

client.login(TOKEN);
