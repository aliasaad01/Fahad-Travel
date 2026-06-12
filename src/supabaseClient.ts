import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://corluyrnblnhyzjsvtox.supabase.co";
const supabaseAnonKey = "sb_publishable_96jhwjaMG6F4V7A3283h-A_zTFeWuOc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
