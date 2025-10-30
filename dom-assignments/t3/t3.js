const target = document.querySelector('#target');
const now = new Date();

const html = `<p>browser: ${navigator.userAgentData.brands[0].brand} version: ${
  navigator.userAgentData.brands[0].version
}</p> <p>os: ${navigator.userAgentData.platform}</p> <p>screen width: ${
  screen.width
} px screen height: ${screen.height} px</p> <p>available width: ${
  screen.availWidth
} px available height: ${
  screen.availHeight
}</p> <p>date: ${now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})}</p> <p>${now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
})}</p>`;

target.innerHTML = html;
