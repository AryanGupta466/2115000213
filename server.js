const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/average', (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  res.json({ average });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

