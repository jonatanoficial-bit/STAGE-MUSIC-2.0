window.StageMusicBuild = {
  version: 'v0.2.0',
  date: '22/04/2026',
  time: '12:43',
  phase: 'Fase 2'
};

document.querySelectorAll('#build-info').forEach((el) => {
  el.textContent = `Build ${window.StageMusicBuild.version} | ${window.StageMusicBuild.date} ${window.StageMusicBuild.time}`;
});
