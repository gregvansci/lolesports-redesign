// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { TypedSubabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import type { Session } from '@supabase/supabase-js'

declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSubabaseClient
			session: Session | null
		}
		interface PageData {
			session
		}
		// interface Platform {}
	}
}

export {};
