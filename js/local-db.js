(function () {
  const SONGS_KEY = 'stage_music_local_songs';
  const DRAFT_KEY = 'stage_music_song_draft';

  const safeParse = (value, fallback) => {
    try {
      const parsed = JSON.parse(value);
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  };

  const readSongs = () => {
    const songs = safeParse(localStorage.getItem(SONGS_KEY), []);
    return Array.isArray(songs) ? songs : [];
  };

  const writeSongs = (songs) => {
    localStorage.setItem(SONGS_KEY, JSON.stringify(songs));
    return songs;
  };

  const buildSearchBlob = (song) => [song.title, song.artist, song.key, song.content, ...(song.tags || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const createSongFromForm = (payload) => {
    const nowIso = new Date().toISOString();
    return {
      id: payload.id || `song_${Date.now()}`,
      title: (payload.title || '').trim() || 'Sem título',
      artist: (payload.artist || '').trim() || 'Sem artista',
      key: (payload.key || 'C').trim(),
      bpm: String(payload.bpm || '72').trim(),
      content: (payload.content || '').trim(),
      notes: (payload.notes || '').trim(),
      tags: Array.isArray(payload.tags) ? payload.tags : String(payload.tags || '').split(',').map(item => item.trim()).filter(Boolean),
      createdAt: payload.createdAt || nowIso,
      updatedAt: nowIso,
      source: 'local'
    };
  };

  const api = {
    getAllSongs() {
      return readSongs().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    },
    getSongById(id) {
      return readSongs().find(song => song.id === id) || null;
    },
    saveSong(payload) {
      const songs = readSongs();
      const song = createSongFromForm(payload);
      const index = songs.findIndex(item => item.id === song.id);
      if (index >= 0) {
        song.createdAt = songs[index].createdAt || song.createdAt;
        songs[index] = song;
      } else {
        songs.push(song);
      }
      writeSongs(songs);
      this.clearDraft();
      return song;
    },
    deleteSong(id) {
      const filtered = readSongs().filter(song => song.id !== id);
      writeSongs(filtered);
      return filtered;
    },
    searchSongs(term) {
      const query = String(term || '').trim().toLowerCase();
      const songs = this.getAllSongs();
      if (!query) return songs;
      return songs.filter(song => buildSearchBlob(song).includes(query));
    },
    saveDraft(payload) {
      const current = this.getDraft();
      const draft = {
        id: payload.id || current.id || `draft_${Date.now()}`,
        title: (payload.title || '').trim(),
        artist: (payload.artist || '').trim(),
        key: (payload.key || 'C').trim(),
        bpm: String(payload.bpm || '72').trim(),
        content: (payload.content || '').trim(),
        notes: (payload.notes || '').trim(),
        tags: String(payload.tags || '').trim(),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      return draft;
    },
    getDraft() {
      return safeParse(localStorage.getItem(DRAFT_KEY), null);
    },
    clearDraft() {
      localStorage.removeItem(DRAFT_KEY);
    },
    getStats() {
      const songs = this.getAllSongs();
      const draft = this.getDraft();
      return {
        songsCount: songs.length,
        draftExists: !!draft,
        lastSongUpdatedAt: songs[0]?.updatedAt || null,
        lastDraftUpdatedAt: draft?.updatedAt || null
      };
    },
    exportSongs() {
      return JSON.stringify(this.getAllSongs(), null, 2);
    }
  };

  window.StageMusicLocalDB = api;
})();
