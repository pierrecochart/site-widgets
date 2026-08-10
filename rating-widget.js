(function () {
  fetch('https://cdn.jsdelivr.net/gh/YOURUSERNAME/site-widgets@main/rating.json')
    .then(res => res.json())
    .then(data => {
      var stars = '★'.repeat(Math.round(data.rating)) + '☆'.repeat(5 - Math.round(data.rating));
      var html =
        '<a href="' + data.url + '" target="_blank" rel="dofollow" ' +
        'style="display:inline-flex;align-items:center;gap:8px;' +
        'margin:10px 0 20px;padding:8px 16px;border-radius:999px;' +
        'background:var(--orange-light, #fef0e6);' +
        'border:1px solid var(--border-warm, rgba(242,113,39,0.22));' +
        'text-decoration:none;color:var(--ink-mid, #3d3d55);' +
        'font-size:0.85rem;font-weight:600;transition:box-shadow 0.2s ease;" ' +
        'onmouseover="this.style.boxShadow=\'var(--shadow-sm, 0 2px 8px rgba(26,26,46,0.06))\'" ' +
        'onmouseout="this.style.boxShadow=\'none\'">' +
        '<span style="color:var(--orange, #f27127);letter-spacing:1px">' + stars + '</span>' +
        '<span>' + data.rating + ' out of 5 — ' + data.reviewCount + ' Google reviews</span>' +
        '</a>';
      document.querySelectorAll('.google-rating-widget').forEach(function (el) {
        el.innerHTML = html;
      });
    });
})();
