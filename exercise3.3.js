const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

app.get('/factorial', (req, res) => {
  const number = req.query.number;
  res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number) || number < 0) {
    res.send("Invalid number");
  } else {
    res.send(`Factorial of ${number} is ${factorial(number)}`);
  }
});