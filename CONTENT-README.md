# InsureThing.com Content Export

## How to Use This Package

Copy the contents of this directory into your project:

- `blog/*.mdx` files go into `content/blog/`
- `images/site/*` go into `public/images/site/`
- `images/blog/*` go into `public/images/blog/`

Then tell Claude Code:

```
I've added the existing blog content and images from the Wix site into
the project. The MDX files are in content/blog/ and images are in
public/images/. Read the MDX files, integrate them into the blog
infrastructure, and display the associated images. These are real
posts that should appear on the live blog.
```

## Page Content Reference

### Home Page

**Tagline:** "What's on your radar?"

**Description:** We partner with clients to drive innovation in
insurance, combining strategic insight with expertise in analytics,
AI, and insurance fundamentals to deliver clear, actionable solutions.

**CTA:** "Building What's Ahead"

### About / Who We Are

**Heading:** Who We Are

**Intro:** We work with a network of developers and mathematicians
to drive the future of insurance with AI underwriting optimization,
deep data insights, and dynamic risk intelligence. Our agile solutions
streamline processes and boost strategic clarity.

**Bio:** Founded by Don Seibert, a business leader with over 20 years
of experience in insurance and strategic management consulting. Best
known for driving innovation, transforming underwriting processes,
leveraging advanced data analytics, and deploying generative AI
applications to address the industry's crucial challenges.

His track record includes leadership roles at Next Insurance, Farmers
Insurance, and Valen Analytics, where he spearheaded advancements in
predictive modeling, risk management, regulatory compliance, and
product development. Holding an MBA from Yale and advanced degrees in
mathematics, he combines analytical rigor with strategic vision.

**Image:** don-seibert-headshot.png
**Image:** company-logos.png (logo bar of past companies)

### Services (from homepage "Things We Do")

1. Data-Driven Strategic Insights
2. Generative AI and ML Solutions
3. Regulatory and Compliance Expertise
4. Underwriting and Pricing Optimization
5. Process and Efficiency Improvements
6. Commercial Insurance Focus

### Blog Intro (from blog page header)

Welcome to my blog, where I explore the connections between insurance,
technology, and society. I'm fascinated by how technological changes
reshape society and, professionally, how they transform insurance.
This blog attempts to bridge all three, combining my thoughts on big
trends with nerdy deep dives into the practical challenges of real
world implementation.

### Contact

Email: hello@insure-thing.com
LinkedIn: https://www.linkedin.com/in/donald-seibert/

## Blog Posts (5 total, all in blog/ directory)

| File | Title | Date |
|---|---|---|
| ai-agents-and-the-transformation-of-insurance-processes.mdx | AI Agents and the Transformation of Insurance Processes | 2024-12-04 |
| generative-ai-in-underwriting-a-practical-guide.mdx | Generative AI in Underwriting: A Practical Guide | 2024-12-05 |
| deepseek-r1-and-insurance.mdx | Deepseek R1 and Insurance | 2025-02-10 |
| jevons-paradox-in-insurance.mdx | Jevons' Paradox in Insurance | 2025-02-16 |
| manus-maybe-a-bigger-deepseek-moment.mdx | Manus: Maybe a bigger 'DeepSeek Moment' than Deepseek itself | 2025-03-11 |

## Images

| File | Usage | Notes |
|---|---|---|
| site/don-seibert-headshot.png | About page | 836x914 |
| site/don-avatar.jpg | Blog author avatar | 64x64, small |
| site/company-logos.png | About page logo bar | 980x120 |
| site/blog-header.png | Blog index header | 570x532 |
| site/about-bg.jpg | About page background | 980x1473 |
| site/homepage-hero.jpg | Homepage hero | TINY (160x90), needs replacement |
| blog/ai-agents-insurance.webp | Blog post image | 980x980 |
| blog/genai-underwriting.webp | Blog post image | 980x980 |
| blog/deepseek-r1.png | Blog post image | 980x555 |
| blog/jevons-paradox.png | Blog post image | 980x551 |
| blog/manus-deepseek-moment.png | Blog post image | 980x626 |

## Notes

- The homepage hero image from Wix is only 160x90px (a thumbnail).
  It will need to be replaced or the homepage should use a different
  visual treatment.
- The Jevons' Paradox post on Wix had a duplicated section ("Underwriting:
  Every Detail, Every Account, Every Time" appeared twice). The MDX
  version has been de-duplicated.
- All em dashes from the original posts have been replaced with
  commas, periods, or semicolons.
- Blog post images appear to be AI-generated illustrations. They are
  functional but could be replaced over time.
- The Contact page on Wix had header social links pointing to
  Wix's own LinkedIn and X accounts (template defaults). These have
  been omitted.
