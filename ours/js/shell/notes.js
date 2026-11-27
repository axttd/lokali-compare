/* Reviewer notes switch (shell add-on). Dashed .anno notes are hidden by default; this shows them.
   Screens read localStorage 'lokali-notes' (js/lokali.js) and update live. */
(function () {
  'use strict';
  var KEY = 'lokali-notes';
  var slot = document.getElementById('addons'); if (!slot) return;
  var on = false; try { on = localStorage.getItem(KEY) === 'on'; } catch (e) {}
  var b = document.createElement('button');
  b.type = 'button'; b.setAttribute('role', 'switch');
  b.style.cssText = 'display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;margin-right:8px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--muted);font:500 12px/1 var(--font);cursor:pointer';
  function paint() {
    b.setAttribute('aria-checked', on);
    b.textContent = on ? 'Notes on' : 'Notes off';
    b.title = 'Reviewer notes on the screens';
    b.style.color = on ? 'var(--ink)' : 'var(--muted)';
    b.style.borderColor = on ? 'var(--ink)' : 'var(--line)';
    try { document.getElementById('screen').contentDocument.documentElement.setAttribute('data-notes', on ? 'on' : 'off'); } catch (x) {}
  }
  b.addEventListener('click', function () { on = !on; try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (x) {} paint(); });
  paint();
  slot.insertBefore(b, slot.children[1] || null);
})();
