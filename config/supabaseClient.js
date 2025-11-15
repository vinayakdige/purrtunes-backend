// config/supabaseClient.js

const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config(); // Load .env when running locally

// --- Ensure the required environment variables exist ---
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error('❌ Missing Supabase credentials. Please set SUPABASE_URL and SUPABASE_KEY.');
  process.exit(1);
}

// --- Create Supabase client ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('✅ Supabase client initialized');

module.exports = supabase;
