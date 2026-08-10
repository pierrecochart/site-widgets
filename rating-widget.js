(function () {
  fetch('https://cdn.jsdelivr.net/gh/YOURUSERNAME/site-widgets@main/rating.json')
    .then(res => res.json())
    .then(data => {
      var stars = '★'.repeat(Math.round(data.rating)) + '☆'.repeat(5 - Math.round(data.rating));
      var googleIcon =
        '<svg width="16" height="16" viewBox="0 0 48 48" style="flex-shrink:0">' +
        '<path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>' +
        '<path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>' +
        '<path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>' +
        '<path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>' +
        '</svg>';
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
        '<span>' + data.rating + ' — On Google</span>' +
        googleIcon +
        '</a>';
      document.querySelectorAll('.google-rating-widget').forEach(function (el) {
        el.innerHTML = html;
      });
    });
})();
