const app = document.getElementById("app");
const tg = window.Telegram?.WebApp;
if (tg) { try { tg.ready(); tg.expand(); } catch(e){} }
const cards = [
{"id":"card-001","src":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA..."}
];
