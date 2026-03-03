var filterMap    = { 'f-all': 'all', 'f-brand': 'brand', 'f-editorial': 'editorial', 'f-personal': 'personal', 'f-curation': 'curation', 'f-content': 'content' };
var filterIdMap  = { 'all': 'f-all', 'brand': 'f-brand', 'editorial': 'f-editorial', 'personal': 'f-personal', 'curation': 'f-curation', 'content': 'f-content' };

var staggerOffsets = [120,55,175,40,150,80,165,45,130,70,180,60,140,90,160,50,110,75,155,65,145,85,170,48,125,95,135,58,115,78];

function applyStagger() {
  var visible = Array.prototype.filter.call(
    document.querySelectorAll('.card'),
    function (c) { return c.style.display !== 'none'; }
  );
  visible.forEach(function (card, i) {
    card.style.marginTop = (i % 2 === 1)
      ? staggerOffsets[Math.floor((i - 1) / 2) % staggerOffsets.length] + 'px'
      : '';
  });
}

function applyFilter(f) {
  document.querySelectorAll('.fbtn').forEach(function (b) { b.classList.remove('on'); });
  var btn = document.getElementById(filterIdMap[f] || 'f-all');
  if (btn) btn.classList.add('on');
  document.querySelectorAll('.card').forEach(function (c) {
    c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
    c.style.marginTop = '';
  });
  applyStagger();
}

// Restore filter from URL on load
(function () {
  var search = window.location.search;
  if (!search && window.location.hash && window.location.hash.indexOf('?') !== -1) {
    search = window.location.hash.substring(window.location.hash.indexOf('?'));
  }
  applyFilter(new URLSearchParams(search).get('filter') || 'all');
})();

document.getElementById('filterBar').addEventListener('click', function (e) {
  var btn = e.target.closest('.fbtn');
  if (!btn) return;
  var f = filterMap[btn.id];
  if (f) applyFilter(f);
});
