import { createBrowserClient } from '@supabase/ssr';
import { SUPABASE_CONFIGURED } from '@/lib/beta';

let _client: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (!SUPABASE_CONFIGURED) {
    // Return a mock that won't crash but won't do anything
    return null as unknown as ReturnType<typeof createBrowserClient>;
  }
  if (!_client) {
    _client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _client;
}
