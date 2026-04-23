(function () {
  const formatDate = (iso) => {
    if (!iso) return '—';
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '—';
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date);
  };

  const escapeHtml = (value) => String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.matches('[data-page="buscar-cifra"]')) return;
    const input = document.getElementById('search-local-input');
    const results = document.getElementById('search-local-results');
    const counter = document.getElementById('search-local-counter');

    const render = (term = '') => {
      const songs = window.StageMusicLocalDB.searchSongs(term);
      counter.textContent = songs.length ? `${songs.length} cifra(s) local(is)` : 'Nenhuma cifra local encontrada';
      if (!songs.length) {
        results.innerHTML = '<div class="result-row empty"><div><strong>Sem resultados</strong><small>Salve cifras na Fase 5 e elas aparecerão aqui.</small></div><span class="soft-pill">Local</span></div>';
        return;
      }
      results.innerHTML = songs.map(song => `
        <div class="result-row">
          <div>
            <strong>${escapeHtml(song.title)}</strong>
            <small>${escapeHtml(song.artist)} • Tom ${escapeHtml(song.key)} • ${escapeHtml(song.bpm)} BPM • ${escapeHtml(formatDate(song.updatedAt))}</small>
          </div>
          <span class="soft-pill">Local</span>
        </div>`).join('');
    };

    input.addEventListener('input', (event) => render(event.target.value));
    render('');
  });
})();
