window.StageMusicBuild = {
  version: 'v0.3.0',
  date: '22/04/2026',
  time: '13:15',
  phase: 'Fase 3'
};

document.querySelectorAll('#build-info').forEach((el) => {
  el.textContent = `Build ${window.StageMusicBuild.version} | ${window.StageMusicBuild.date} ${window.StageMusicBuild.time}`;
});
