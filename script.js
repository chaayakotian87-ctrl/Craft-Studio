/* Craft Studio | basic state and interactivity (no frameworks)
   1. Mobile menu toggle
   2. Roadmap filter
   3. Progress tracking saved in localStorage */

(function () {
  'use strict';

  var STORAGE_KEY = 'craftStudio.progress.v1';

  /* ---------- 1. Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Escape closes the menu and returns focus to the button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    // Close after choosing a link on small screens
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) { setMenu(false); }
    });
  }

  /* ---------- 2. Filter ---------- */
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.card');
  var filterStatus = document.getElementById('filter-status');

  function applyFilter(category) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = category === 'all' || card.dataset.category === category;
      card.hidden = !match;
      if (match) { shown += 1; }
    });
    chips.forEach(function (chip) {
      var active = chip.dataset.filter === category;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    filterStatus.textContent = 'Showing ' + shown + (shown === 1 ? ' step' : ' steps') +
      (category === 'all' ? '.' : ' in ' + category + '.');
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { applyFilter(chip.dataset.filter); });
  });

  /* ---------- 3. Progress ---------- */
  var checks = document.querySelectorAll('[data-step-check]');
  var bar = document.getElementById('progress-bar');
  var countEl = document.getElementById('progress-count');
  var totalEl = document.getElementById('progress-total');
  var messageEl = document.getElementById('progress-message');
  var resetBtn = document.getElementById('reset-progress');

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {}; // storage blocked or corrupted: start fresh
    }
  }

  function save(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function messageFor(done, total) {
    if (done === 0) { return 'Ready when you are. Start with Discovery.'; }
    if (done === total) { return 'All six steps complete. Time to submit your project.'; }
    if (done >= total / 2) { return 'Over halfway there. Keep going.'; }
    return 'Good start. One step at a time.';
  }

  function render(state) {
    var done = 0;
    checks.forEach(function (box) {
      var isDone = Boolean(state[box.dataset.stepCheck]);
      box.checked = isDone;
      box.closest('.card').classList.toggle('is-done', isDone);
      if (isDone) { done += 1; }
    });
    var total = checks.length;
    bar.max = total;
    bar.value = done;
    bar.textContent = done + ' of ' + total;
    countEl.textContent = done;
    totalEl.textContent = total;
    messageEl.textContent = messageFor(done, total);
  }

  var state = load();
  render(state);

  checks.forEach(function (box) {
    box.addEventListener('change', function () {
      state[box.dataset.stepCheck] = box.checked;
      save(state);
      render(state);
    });
  });

  resetBtn.addEventListener('click', function () {
    state = {};
    save(state);
    render(state);
  });
})();
