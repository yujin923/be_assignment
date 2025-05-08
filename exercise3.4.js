app.get('/', (req, res) => {
    res.send(`
      <form action="/login" method="post">
        Username: <input name="username"><br>
        Password: <input name="password" type="password"><br>
        <button type="submit">Login</button>
      </form>
    `);
  });
  
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
  });  