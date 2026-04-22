window.StageMusicBuild = {
  version: 'v0.4.0',
  date: '22/04/2026',
  time: '12:17',
  phase: 'Fase 4'
};

document.querySelectorAll('#build-info').forEach((el) => {
  el.textContent = `Build ${window.StageMusicBuild.version} | ${window.StageMusicBuild.date} ${window.StageMusicBuild.time}`;
});
