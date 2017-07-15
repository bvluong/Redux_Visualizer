export const fetchGif = searchTerm => (
  $.ajax ({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=50c44e390cba4035a4688152112d4d7f&limit=1`
  })
);
