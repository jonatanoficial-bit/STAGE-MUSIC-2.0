window.StageMusicBuild = {
  version: 'v0.5.0',
  date: '22/04/2026',
  time: '19:36',
  phase: 'Fase 5'
};

document.querySelectorAll('#build-info').forEach((el) => {
  el.textContent = `Build ${window.StageMusicBuild.version} | ${window.StageMusicBuild.date} ${window.StageMusicBuild.time}`;
});
