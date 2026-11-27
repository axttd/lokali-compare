/* Lokali palette switch (shell add-on). Puts four swatches in the right card's add-on row.
   Screens read localStorage 'lokali-palette' (js/lokali.js) and update live through the storage event. */
(function () {
  'use strict';
  var KEY = 'lokali-palette';
  var P = [['forest', 'Habitat Forest', '#2F5D3A', '#D2B72E'], ['rainforest', 'Rainforest + Sand', '#1F4D3A', '#D8BE7A'], ['terracotta', 'Earth + Terracotta', '#B5562B', '#D9A441'], ['ocean', 'Ocean + Sun', '#0F6E6E', '#F2B33D']];
  /* the shell around the frame follows the app palette: page background, cards, text, lines, accent, font */
  var THEME = {
    forest:     { bg: '#EFE9DB', panel: '#FAF7F0', ink: '#1D2520', muted: '#575F50', line: '#E2DBC9', accent: '#2F5D3A' },
    rainforest: { bg: '#EAE3D2', panel: '#F7F4EC', ink: '#1D2520', muted: '#575F50', line: '#DED6C3', accent: '#1F4D3A' },
    terracotta: { bg: '#F1E6D8', panel: '#FBF6EF', ink: '#2A211C', muted: '#5F5249', line: '#E6D9C7', accent: '#B5562B' },
    ocean:      { bg: '#E3EDEA', panel: '#F6FAF9', ink: '#16222A', muted: '#4C5A5F', line: '#D3E1DE', accent: '#0F6E6E' }
  };
  function applyShell(key) {
    var t = THEME[key] || THEME.forest, r = document.documentElement.style;
    r.setProperty('--bg', t.bg); r.setProperty('--panel', t.panel); r.setProperty('--ink', t.ink); r.setProperty('--muted', t.muted); r.setProperty('--line', t.line);
    r.setProperty('--accent', t.accent); r.setProperty('--accent-strong', 'color-mix(in srgb, ' + t.accent + ' 78%, black)');
    r.setProperty('--font', '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif');
  }
  if (!document.getElementById('lokali-shell-theme')) {
    var st = document.createElement('style'); st.id = 'lokali-shell-theme';
    st.textContent = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");' +
      '.side{background:color-mix(in srgb,var(--panel) 92%,transparent)!important;box-shadow:0 12px 40px rgba(29,37,32,.10),0 2px 6px rgba(29,37,32,.05)!important}' +
      'body{background:var(--bg)!important;transition:background .3s}#screen{background:var(--bg)}';
    document.head.appendChild(st);
  }
  var slot = document.getElementById('addons'); if (!slot) return;
  var cur = 'forest'; try { cur = localStorage.getItem(KEY) || 'forest'; } catch (e) {}
  applyShell(cur);
  var wrap = document.createElement('div');
  wrap.setAttribute('role', 'radiogroup'); wrap.setAttribute('aria-label', 'Colour palette');
  wrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin-right:auto;font-size:12px;font-weight:600;color:var(--muted)';
  wrap.innerHTML = '<span>Palette</span>' + P.map(function (p) {
    return '<button type="button" role="radio" data-p="' + p[0] + '" title="' + p[1] + '" aria-label="' + p[1] + '" aria-checked="' + (p[0] === cur) + '" style="width:22px;height:22px;border-radius:50%;cursor:pointer;padding:0;border:2px solid ' + (p[0] === cur ? 'var(--ink)' : 'transparent') + ';background:linear-gradient(135deg,' + p[2] + ' 0 55%,' + p[3] + ' 55%);box-shadow:0 0 0 1px rgba(0,0,0,.08)"></button>';
  }).join('');
  wrap.addEventListener('click', function (e) {
    var b = e.target.closest('[data-p]'); if (!b) return;
    try { localStorage.setItem(KEY, b.dataset.p); } catch (x) {}
    applyShell(b.dataset.p);
    wrap.querySelectorAll('[data-p]').forEach(function (x) { var on = x === b; x.setAttribute('aria-checked', on); x.style.borderColor = on ? 'var(--ink)' : 'transparent'; });
    try { var f = document.getElementById('screen'); f.contentDocument.documentElement.setAttribute('data-palette', b.dataset.p); } catch (x) {}
  });
  slot.prepend(wrap);
})();
