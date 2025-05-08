app.get('/board/page/:page', (req, res) => {
    res.send(`Page: ${req.params.page}`);
  });
  