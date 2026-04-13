# InsureThing.com: Wix to Vercel Migration Guide

---

## Part 1: Vercel Account Setup

**Create the account.** Go to vercel.com and sign up with your GitHub account. This links the two services and enables automatic deployments on every push. The Hobby plan ($0/month) covers everything InsureThing needs. Upgrade to Pro ($20/month) only if you add collaborators or exceed 100 GB bandwidth.

**Install the Vercel CLI.** From any terminal:

```bash
npm i -g vercel
vercel login
```

Follow the prompts to authenticate via browser.

**Install the Vercel plugin for Claude Code.**

```bash
npx plugins add vercel/vercel-plugin
```

This lets Claude Code deploy directly.

**Connect GitHub.** In the Vercel dashboard, import your GitHub repository. Every push to `main` triggers a production deployment. Every push to a branch creates a preview deployment with its own URL.

---

## Part 2: Build the Site with Claude Code

Create a new directory and initialize a GitHub repo:

```bash
mkdir insure-thing && cd insure-thing
git init
```

Create a `CLAUDE.md` file at the project root. This is the prompt Claude Code reads for project context. Paste the following, then run `claude` from the project directory.

### CLAUDE.md

```markdown
# InsureThing.com

## Project Overview

Build a Next.js 14+ website for InsureThing, an insurance consulting firm
run by Don Seibert. The site serves as a professional presence, a blog for
industry writing, and a platform for hosting interactive demos and
vibe-coded projects.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MDX for blog posts (via @next/mdx or contentlayer)
- Deployed on Vercel (Hobby plan)
- No database required for initial build
- No CMS. Blog posts are .mdx files in the repo.

## Site Structure

### Pages

1. **Home** (`/`)
   - Company name: InsureThing
   - Tagline area with value proposition
   - Brief overview of services (not a bullet list; use cards or grid)
   - Call to action to contact or learn more
   - Link to recent blog posts

2. **Who We Are** (`/about`)
   - About Don Seibert: 20+ years in commercial insurance
   - Key roles: Next Insurance (Underwriting Lead), Farmers, Progressive,
     Valen Analytics, Genpact, McKinsey
   - Education: MBA from Yale, MS Mathematics from RPI
   - Focus areas: underwriting automation, pricing, AI-driven workflows
   - Professional headshot (placeholder image for now)
   - Logo bar of past companies (placeholder for now)

3. **Services** (`/services`)
   - Six service areas presented as a grid or cards:
     - Data-Driven Strategic Insights
     - Generative AI and ML Solutions
     - Regulatory and Compliance Expertise
     - Underwriting and Pricing Optimization
     - Process and Efficiency Improvements
     - Commercial Insurance Focus
   - Each card should have a short description (2-3 sentences)

4. **Blog** (`/blog`)
   - Index page listing all posts, sorted by date descending
   - Each post rendered from .mdx files in `/content/blog/`
   - Post metadata via frontmatter: title, date, description, tags
   - Individual post pages at `/blog/[slug]`
   - Clean typography optimized for long-form reading
   - Code syntax highlighting (for technical posts)

5. **Labs / Demos** (`/labs`)
   - Gallery page for interactive demos and projects
   - Each demo gets its own route under `/labs/[project]`
   - This is where vibe-coded experiments will live
   - Start with a placeholder page explaining the section

6. **Contact** (`/contact`)
   - Email: hello@insure-thing.com
   - LinkedIn link for Don Seibert
   - Simple contact form (can use Formspree or similar;
     no backend needed)

### Navigation

- Top nav bar: Home, About, Services, Blog, Labs, Contact
- Mobile: hamburger menu
- Footer: same links, plus email, LinkedIn, copyright

## Design Direction

**Aesthetic:** Clean, confident, modern. Not flashy. Not corporate-bland.
Think: a smart person who knows what they're doing and doesn't need to
prove it. The site should feel like it was designed with intention.

**Typography:** Use a distinctive serif or slab-serif for headings (try
Fraunces, Newsreader, or Literata). Clean sans-serif for body text (try
Outfit, Satoshi, or General Sans via Google Fonts or Fontsource). Generous
line height (1.6-1.7 for body).

**Color palette:** Dark navy or charcoal as primary. A warm accent color
(amber, copper, or burnt orange). White or very light gray for
backgrounds. High contrast throughout.

**Layout:** Generous whitespace. Asymmetric grids where appropriate.
Full-width hero sections. Cards with subtle shadows or borders for service
items. No stock photography of handshakes or office buildings.

**Motion:** Subtle. Fade-in on scroll for content sections. No bouncing,
no parallax, no animation for its own sake.

## Blog Starter Content

Create one sample blog post as a template:

**File:** `/content/blog/hello-world.mdx`
**Title:** "Building What's Ahead"
**Date:** 2026-04-12
**Description:** "InsureThing launches a new home on the web."
**Content:** A brief post (3-4 paragraphs) announcing the new site,
mentioning the blog and labs sections, and setting the tone for future
writing about AI in insurance.

## Writing Style (for any generated copy)

- Short, declarative sentences
- Active voice, strong verbs
- No em dashes
- No "ensure," "moreover," or "it's worth noting"
- Confident but not boastful
- Technical credibility without jargon overload

## File Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with nav and footer
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Individual posts
│   ├── labs/
│   │   ├── page.tsx        # Labs index
│   │   └── [project]/page.tsx
│   └── contact/page.tsx
├── content/
│   └── blog/
│       └── hello-world.mdx
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── blog-card.tsx
│   └── service-card.tsx
├── lib/
│   └── blog.ts             # MDX utilities
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
├── CLAUDE.md
└── package.json
```

## Deployment

- Target: Vercel Hobby plan
- Auto-deploy from `main` branch
- Preview deployments on feature branches
- Custom domain: insure-thing.com (configured separately)

## Important Notes

- Do NOT use placeholder services like Lorem Ipsum. Write real copy
  based on the company description above.
- All links should work. No dead links.
- The site must be fully responsive.
- Lighthouse score targets: 90+ on Performance, Accessibility, SEO.
- Use next/image for all images with proper alt text.
- Include proper meta tags, Open Graph tags, and a sitemap.
```

### First Claude Code Session

Launch Claude Code in the project directory:

```bash
claude
```

Start with:

```
Read CLAUDE.md and build this site from scratch. Initialize the Next.js
project, install dependencies, create all pages and components, write
the blog infrastructure, and make sure the dev server runs clean. Start
with `npx create-next-app@latest . --typescript --tailwind --eslint
--app --src-dir=false` and build from there.
```

Claude Code will scaffold the project, install packages, create components,
and wire up routing. Expect 10-20 minutes for the initial build. Review
what it produces, then iterate:

```
The heading font isn't distinctive enough. Try Fraunces from Google Fonts.
```

```
Add a second blog post about AI agents in underwriting.
```

```
The mobile nav hamburger isn't working. Fix it.
```

Each iteration refines the site. When satisfied:

```bash
git add -A
git commit -m "Initial site build"
git remote add origin git@github.com:YOUR_USERNAME/insure-thing.git
git push -u origin main
```

---

## Part 3: Deploy to Vercel

Once the repo is on GitHub:

1. Go to vercel.com/new
2. Import the `insure-thing` repository
3. Vercel auto-detects Next.js and configures build settings
4. Click Deploy
5. The site goes live at `insure-thing.vercel.app` within minutes

Every subsequent push to `main` triggers a new production deployment.
Branch pushes create preview URLs you can share for review.

---

## Part 4: DNS — Connecting insure-thing.com

The process depends on where you bought the domain.

### Scenario A: Domain purchased through Wix

Wix does not allow you to change nameservers on domains they registered.
You have two options:

**Option 1: Point via DNS records (keep domain at Wix)**

In the Vercel dashboard, go to your project > Settings > Domains. Add
`insure-thing.com`. Vercel will display the DNS records you need:

- **A Record:** Host `@`, Value `76.76.21.21` (verify in Vercel dashboard)
- **CNAME Record:** Host `www`, Value `cname.vercel-dns.com`

Then in your Wix account:

1. Go to Domains > Manage DNS Records
2. Delete existing A records pointing to Wix
3. Add the new A record with Vercel's IP
4. Delete the existing www CNAME record
5. Add the new CNAME pointing to Vercel
6. Save changes

Propagation takes up to 48 hours. Your Wix site stays live until the
DNS records propagate to Vercel.

**Option 2: Transfer domain away from Wix (recommended)**

Transfer the domain to Vercel directly or to a registrar like Cloudflare
or Namecheap. This gives you full control.

1. In Wix: Domains > click the domain > Transfer Away from Wix
2. Wix sends an authorization code (EPP code) via email
3. In Vercel: Domains (team sidebar) > Transfer In > enter domain and
   auth code
4. Vercel handles the rest. Transfer completes in 1-7 days.
5. Once transferred, Vercel auto-configures DNS and SSL. No records
   to set manually.

### Scenario B: Domain purchased elsewhere, connected to Wix

Go to your registrar (GoDaddy, Namecheap, Google Domains, etc.) and
change the nameservers. You have two paths:

**Path 1: Point to Vercel via A/CNAME records**

Keep your current nameservers. In your registrar's DNS settings:

- A Record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

**Path 2: Use Vercel's nameservers**

Change your nameservers at the registrar to:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

This hands DNS management to Vercel entirely. Vercel configures
everything automatically, including SSL.

**Warning:** If using the nameserver method, first add any DNS records
you want to keep (email MX records, TXT records for verification, etc.)
to Vercel's DNS settings before switching nameservers. Otherwise email
and other services break.

### Verification

After configuring DNS, verify in the Vercel dashboard. The domain status
will show "Valid Configuration" with a green checkmark once propagation
completes. Vercel auto-provisions an SSL certificate.

Test from the command line:

```bash
dig insure-thing.com A +short
# Should return 76.76.21.21

dig www.insure-thing.com CNAME +short
# Should return cname.vercel-dns.com (or similar)
```

---

## Part 5: Post-Launch Checklist

- [ ] Verify all pages load on the custom domain
- [ ] Test SSL certificate (padlock in browser)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Vercel Analytics (free, built-in)
- [ ] Redirect www to apex (or vice versa) in Vercel domain settings
- [ ] Remove Wix social links (Instagram @wixstudio, Facebook /WixStudio)
- [ ] Fix the "BULDING" typo (already fixed in new build)
- [ ] Update LinkedIn, email signatures, etc. with confirmed live URL
- [ ] Cancel Wix subscription (do this LAST, after DNS is fully propagated
  and verified)

---

## Part 6: Adding Demos and Labs Later

The `/labs` section is designed for growth. To add a new demo:

1. Create a new directory: `app/labs/my-demo/page.tsx`
2. Build the interactive component (React, D3, Three.js, whatever fits)
3. Push to GitHub
4. Vercel deploys automatically
5. The demo is live at `insure-thing.com/labs/my-demo`

For more complex demos that need their own dependencies or build config,
consider deploying them as separate Vercel projects on subdomains like
`demo.insure-thing.com`. Vercel supports unlimited subdomains.
