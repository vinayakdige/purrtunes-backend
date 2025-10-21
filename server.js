const express = require('express');
const dotenv = require('dotenv');
const supabase = require('./config/supabaseClient');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test Supabase connection
async function testConnection() {
  try {
    const { data, error } = await supabase.from('users').select('*').limit(1);
    if (error) {
      console.error('❌ Supabase connection failed:', error.message);
    } else {
      console.log('✅ Supabase connected successfully!');
    }
  } catch (err) {
    console.error('❌ Supabase connection error:', err.message);
  }
}


// Call test on server start
testConnection();

// Sample route
app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
