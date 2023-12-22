import { createClient } from "@supabase/supabase-js";

const apiUrl: string = import.meta.env.VITE_API_URL;
const apiKey: string = import.meta.env.VITE_API_KEY;

const supabase = createClient(apiUrl, apiKey);


export default supabase;