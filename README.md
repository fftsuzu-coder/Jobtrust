# JobTrust

Job-search platform for freshers in India. Next.js 14 (static export) + TypeScript + Tailwind + optional Supabase. Hosted on GitHub Pages.

## Run locally
```
npm install
cp .env.example .env.local   # optional; leave empty for demo mode
npm run dev
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo's `main` branch.
2. Repo **Settings > Pages > Source: GitHub Actions**.
3. (Optional) Settings > Secrets and variables > Actions: add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Push. The workflow builds and publishes to `https://<user>.github.io/<repo>/`.
For a custom domain or `<user>.github.io` repo, change `NEXT_PUBLIC_BASE_PATH` in the workflow to an empty string.

## Turn on real accounts (Supabase)
1. Create a Supabase project, run `supabase/schema.sql` in the SQL editor.
2. Auth > Providers: enable Email. Add your Pages URL under Auth > URL configuration.
3. Add the two env values above. Only the anon key goes in the frontend; never the service_role key.

## Trust and security model
- **Demo vs real:** the 7 sample listings are fictional and labelled "Demo data". Real listings come only from Supabase rows with `status = 'published'`.
- **Verification:** employers cannot set `verification` or `status` themselves (RLS). You set `verified` and `published` manually in the Supabase dashboard after real checks.
- **Server-side validation:** GitHub Pages has no server, so validation is enforced in Postgres (RLS policies, CHECK constraints, unique application per job). Client checks are only for UX.
- **Scam flags** are keyword heuristics, not proof. They help but can miss scams.

## Known limits
Saved jobs, resume, and demo applications live in localStorage. Employer review/admin screens, email notifications, and file uploads are not built.
