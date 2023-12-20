import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Ingrese el nombre de la canción';

  try {
    let res = await fetch(`https://visionaryapi.boxmine.xyz/api/itunes?text=${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`Error`);
    }

    let json = await res.json();

    console.log('JSON response:', json);
    m.react(rwait);

    let songInfo = 
      `\t\t*${json.message.name}*\n\n` +
      `*Nombre:* ${json.message.name}\n` +
      `*Artista:* ${json.message.artist}\n` +
      `*Álbum:* ${json.message.album}\n` +
      `*Fecha de lanzamiento:* ${json.message.release_date}\n` +
      `*Precio:* ${json.message.price}\n` +
      `*Duración:* ${json.message.length}\n` +
      `*Género:* ${json.message.genre}\n` +
      `*Enlace:* ${json.message.url}`;

    if (json.message.thumbnail) {
      m.react(done);
      await conn.sendFile(m.chat, json.message.thumbnail, 'thumbnail.jpg', songInfo, m);
    } else {
      m.reply(songInfo);
    }

  } catch (error) {
    console.error(error);
  }
};

handler.help = ['itunes'];
handler.tags = ['dl'];
handler.command = /^(itunes)$/i;

export default handler;
