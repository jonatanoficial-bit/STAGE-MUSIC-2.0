window.StageMusicBuild = {
  version: 'v0.1.0',
  date: '22/04/2026',
  time: '12:23',
  phase: 'Fase 1'
};

document.querySelectorAll('#build-info').forEach((el) => {
  el.textContent = `Build ${window.StageMusicBuild.version} | ${window.StageMusicBuild.date} ${window.StageMusicBuild.time}`;
});
