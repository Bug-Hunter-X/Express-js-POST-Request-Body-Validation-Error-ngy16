const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Validate request body
  if (!req.body || !req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const userName = req.body.name;
  // ... process the user data ...
  res.status(201).json({ message: 'User created' });
});

// ... other routes ...
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});