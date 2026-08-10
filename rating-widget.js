(function () {
  fetch('https://cdn.jsdelivr.net/gh/pierrecochart/site-widgets@main/rating.json')
    .then(res => res.json())
    .then(data => {
      var stars = '★'.repeat(Math.round(data.rating)) + '☆'.repeat(5 - Math.round(data.rating));
      var html =
        '<a href="' + data.url + '" target="_blank" rel="dofollow" ' +
        'style="display:inline-flex;align-items:center;gap:8px;margin:10px 0 0;' +
        'text-decoration:none;color:#3d3d55;font-size:0.85rem;font-weight:600">' +
        '<span style="color:#f5b400;letter-spacing:1px">' + stars + '</span>' +
        '<span>' + data.rating + ' out of 5 — ' + data.reviewCount + ' Google reviews</span>' +
        '</a>';
      document.querySelectorAll('.google-rating-widget').forEach(function (el) {
        el.innerHTML = html;
      });
    });
})();
