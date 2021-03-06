function fetchAndRenderPage(n) {
  if (n >= 1 && n < 3) {
    axios.get(url)
      .then(this.renderPage)
  } 
}