import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://bpkuvjjbpclgvzgluxfr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwa3V2ampicGNsZ3Z6Z2x1eGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4NjAwMzEsImV4cCI6MTk5NjQzNjAzMX0.NbKkxYNhZzZ5XRMaHPpMJJ39bPrEdLMhRaDZl8gCyPQ";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);


