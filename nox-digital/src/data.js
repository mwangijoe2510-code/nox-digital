// ─────────────────────────────────────────────────────────────
//  All the site's content lives here (blog posts are in posts.js).
//  Edit text, add projects, update contact details — no need to
//  touch the components.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: 'NOX Digital',
  tagline: 'Your Vision. Our Digital Solutions.',
  phone: '+254 715 404 194',
  whatsapp: '254715404194',
  email: 'info@noxdigital.co.ke',
  location: 'Eldoret, Kenya',
  // Paste your Calendly / Cal.com link here to show a "Book a call" button that opens it.
  // Leave empty and the button opens WhatsApp with a "book a call" message instead.
  bookingUrl: '',
  // Typical reply times shown on the site. Edit to match what you can really deliver.
  replyTimes: [
    { id: 'call', icon: 'phone', label: 'Phone call', note: 'Call us any time', time: 'Instant' },
    { id: 'wa', icon: 'whatsapp', label: 'WhatsApp', note: 'Fastest way to reach us', time: 'Within 2 hrs', fast: true },
    { id: 'mail', icon: 'mail', label: 'Email', note: 'Best for files and details', time: 'Up to 4 hrs' },
  ],
  // Paste a Formspree (formspree.io) endpoint like https://formspree.io/f/xxxxxxx to
  // also save every enquiry to your email/inbox. Leave empty to use WhatsApp/email only.
  formEndpoint: '',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Work', to: '/work' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export const marquee = [
  'Websites',
  'SEO',
  'Digital Marketing',
  'POS Systems',
  'E-commerce',
  'Mobile Apps',
  'Branding',
  'Content',
  'Maintenance',
]

export const stats = [
  { n: 10, s: '+', l: 'Years of experience' },
  { n: 50, s: '+', l: 'Happy clients' },
  { n: 9, s: '', l: 'Digital services' },
  { n: 6, s: '', l: 'Featured case studies' },
]

// Shown on the home page only when you add real client quotes here:
// { quote: '...', name: 'Client name', role: 'Company' }
export const testimonials = []

export const about = {
  headline: 'A digital studio built on 10+ years of craft.',
  body: [
    'NOX Digital helps businesses, brands and creators across Kenya build a strong online presence and grow. For over a decade we have turned ideas into websites, stores, systems and brands that earn trust and bring in customers.',
    'We are one team for everything digital: design, development, marketing and support, so you never have to juggle suppliers or explain your business twice.',
  ],
  pillars: [
    'One studio for web, brand, marketing and tech',
    'Built mobile-first, fast and secure',
    'Clear pricing and honest timelines',
    'Support that continues after launch',
  ],
}

export const manifesto =
  'We build websites, brands and digital systems that make businesses impossible to ignore. Clear thinking, bold design and fast, reliable code. For ten years and counting.'

export const values = [
  {
    n: '01',
    title: 'Clarity first',
    text: 'We start by understanding your business and customers. Every page, pixel and line of copy has a job to do.',
  },
  {
    n: '02',
    title: 'Craft, not templates',
    text: 'Every project is designed and built for the business behind it, with careful typography, motion and details.',
  },
  {
    n: '03',
    title: 'Speed that shows',
    text: 'Fast websites win customers and rank higher. We obsess over performance, mobile-first, on real devices and real networks.',
  },
  {
    n: '04',
    title: 'Honest partnership',
    text: 'Clear pricing, clear timelines and straight advice, even when that means recommending a smaller project.',
  },
]

export const tech = [
  'React',
  'JavaScript',
  'PHP',
  'MySQL',
  'HTML & CSS',
  'M-Pesa',
  'WhatsApp ordering',
  'SEO',
  'Admin dashboards',
  'Figma-grade design',
]

export const areas = [
  { slug: 'eldoret', city: 'Eldoret', note: 'Home base' },
  { slug: 'nairobi', city: 'Nairobi', note: 'Capital & commerce' },
  { slug: 'nakuru', city: 'Nakuru', note: 'Rift Valley' },
  { slug: 'kisumu', city: 'Kisumu', note: 'Lakeside business' },
  { slug: 'mombasa', city: 'Mombasa', note: 'Coast & tourism' },
  { slug: 'kitale', city: 'Kitale', note: 'Trans Nzoia' },
  { slug: 'thika', city: 'Thika', note: 'Industrial hub' },
  { slug: 'kakamega', city: 'Kakamega', note: 'Western Kenya' },
  { slug: 'nyeri', city: 'Nyeri', note: 'Mt. Kenya region' },
  { slug: 'remote', city: 'Remote', note: 'Anywhere in the world' },
]

export const yr = (p) => (p.year ? ` · ${p.year}` : '')

export const services = [
  {
    slug: 'web-design',
    icon: 'code',
    title: 'Web Design & Development',
    text: 'Modern, responsive and fast websites tailored to your business.',
    chips: ['Mobile-first builds', 'Custom admin panels', 'Speed optimised'],
    long: 'Your website is your hardest-working salesperson. We design and build fast, mobile-first websites that explain what you do, build trust in seconds and turn visitors into enquiries.',
    includes: [
      'Custom design, no cookie-cutter templates',
      'Mobile-first, responsive layouts',
      'Fast loading and clean code',
      'Contact forms, WhatsApp and click-to-call',
      'Admin panel so you can edit content yourself',
      'Basic SEO set-up and analytics',
    ],
    forWho: 'Businesses, consultancies, schools and organisations that need a credible online home.',
  },
  {
    slug: 'seo',
    icon: 'search',
    title: 'SEO & Google Ranking',
    text: 'Get found, rank higher and attract more customers organically.',
    chips: ['On-page SEO', 'Google Business setup', 'Keyword strategy'],
    long: 'Ranking on Google is about being the clearest answer to what people search for. We fix the technical foundations, shape your content around real searches and set up your local presence so nearby customers find you first.',
    includes: [
      'Technical SEO audit and fixes',
      'Keyword and competitor research',
      'On-page optimisation',
      'Google Business Profile set-up',
      'Speed and Core Web Vitals tuning',
      'Progress reporting you can understand',
    ],
    forWho: 'Local shops, service businesses and brands that want steady organic enquiries.',
  },
  {
    slug: 'digital-marketing',
    icon: 'megaphone',
    title: 'Digital Marketing',
    text: 'Social media, ads, content and strategy to grow your brand online.',
    chips: ['Social media', 'Paid ads', 'Campaign strategy'],
    long: 'Great marketing is consistent, measurable and true to your brand. We plan campaigns across social media and ads, create the content, and report on what actually brings customers.',
    includes: [
      'Social media strategy and management',
      'Paid ads on Meta and Google',
      'Content calendars and creatives',
      'Campaign tracking and reporting',
      'Audience and offer planning',
      'Email and WhatsApp broadcast set-up',
    ],
    forWho: 'Brands launching products, running promotions or building an online audience.',
  },
  {
    slug: 'pos-systems',
    icon: 'pos',
    title: 'POS Systems',
    text: 'Reliable and easy-to-use POS solutions for your business.',
    chips: ['Sales & inventory', 'Receipts & reports', 'Easy to learn'],
    long: 'A good point-of-sale system saves hours every day. We build simple POS systems that record sales, track stock and give you clear reports, designed so your staff learn them in minutes.',
    includes: [
      'Fast sales screen and receipts',
      'Stock and inventory tracking',
      'Daily and monthly reports',
      'Multiple users and roles',
      'M-Pesa payment recording',
      'Training and ongoing support',
    ],
    forWho: 'Shops, restaurants, salons and retailers who want control of sales and stock.',
  },
  {
    slug: 'ecommerce',
    icon: 'cart',
    title: 'E-commerce Development',
    text: 'Online stores that sell, with secure payments and smooth checkout.',
    chips: ['M-Pesa & cash on delivery', 'WhatsApp ordering', 'Cart & wishlist'],
    long: 'Online stores built for how Kenyans actually buy: M-Pesa, cash on delivery and orders straight to WhatsApp. Smooth for customers, simple for you to run.',
    includes: [
      'Product catalogue and categories',
      'Cart, wishlist and checkout',
      'M-Pesa and cash on delivery',
      'Orders sent to your WhatsApp',
      'Order management dashboard',
      'Delivery and stock settings',
    ],
    forWho: 'Retailers and brands ready to sell online without the complexity.',
  },
  {
    slug: 'mobile-apps',
    icon: 'phone',
    title: 'Mobile Apps',
    text: 'Custom mobile applications for Android & iOS.',
    chips: ['Android & iOS', 'Custom features', 'Launch support'],
    long: 'Custom Android and iOS apps for businesses that need more than a website: bookings, ordering, loyalty programmes, field tools or internal systems.',
    includes: [
      'Discovery and product planning',
      'UI and UX design',
      'Android and iOS builds',
      'Backend and admin dashboard',
      'Testing on real devices',
      'Store submission and launch support',
    ],
    forWho: 'Startups and businesses with a clear app idea and a goal to reach.',
  },
  {
    slug: 'branding',
    icon: 'palette',
    title: 'Graphic Design & Branding',
    text: 'Logos, posters, flyers, social media designs and full brand identity.',
    chips: ['Logos & identity', 'Posters & flyers', 'Social media kits'],
    long: 'Logos, posters, flyers, social media designs and full brand identity. We create a look that is consistent everywhere your customers meet you: online, in print and in their feed.',
    includes: [
      'Logo and brand identity',
      'Colour and typography system',
      'Posters and flyers',
      'Social media templates',
      'Business cards and stationery',
      'Brand guidelines',
    ],
    forWho: 'New businesses, rebrands and anyone whose look no longer matches their quality.',
  },
  {
    slug: 'content',
    icon: 'pen',
    title: 'Content Creation',
    text: 'Engaging content, copywriting and visuals that tell your story.',
    chips: ['Copywriting', 'Visual content', 'Brand storytelling'],
    long: 'Words and visuals that make people stop, understand and act. We write and design the content your website, social channels and campaigns need, in a voice that sounds like your brand.',
    includes: [
      'Website copywriting',
      'Blog and article writing',
      'Social media content',
      'Product descriptions',
      'Graphic and photo assets',
      'Brand voice guide',
    ],
    forWho: 'Brands that know what they want to say but need help saying it well.',
  },
  {
    slug: 'maintenance',
    icon: 'sliders',
    title: 'Website Maintenance',
    text: 'Keep your site secure, updated and running smoothly.',
    chips: ['Updates & backups', 'Security checks', 'Quick fixes'],
    long: 'A website is never really finished. We keep yours secure, updated and running smoothly so you can focus on running your business.',
    includes: [
      'Updates and regular backups',
      'Security monitoring',
      'Uptime and speed checks',
      'Content changes on request',
      'Bug fixes',
      'Simple monthly summary',
    ],
    forWho: 'Any business with a live website that cannot afford downtime.',
  },
]

// To add a project: copy a block, change the details, and (optionally) drop a
// screenshot at /public/work/<slug>.jpg — it replaces the built-in mockup.
export const projects = [
  {
    slug: 'trailblaze360',
    kind: 'trail',
    featured: true,
    serves: ['web-design', 'content'],
    name: 'Trailblaze 360',
    host: 'trailblaze360.co.ke',
    url: 'https://trailblaze360.co.ke',
    year: '2026',
    category: 'Corporate website',
    filter: 'Websites',
    sector: 'Organizational performance consultancy · Nairobi',
    blurb: 'A credible, conversion-focused home for a leadership and performance consultancy.',
    scope: ['Web design', 'Development', 'Content structure'],
    challenge:
      'Trailblaze 360 sells expertise, not a product. The site had to explain proprietary frameworks clearly, earn trust fast and make it easy for organizations to start a conversation.',
    approach: [
      ['Clarify the offer', 'We mapped six solutions and a signature framework into a simple structure so visitors understand what Trailblaze 360 does within seconds.'],
      ['Design for credibility', 'A confident, uncluttered layout with proof points, client logos and clear calls to action that feels as professional as the work it sells.'],
      ['Build for conversation', 'Every page leads to one action: starting a conversation, with a contact form and office details always within reach.'],
    ],
    built: [
      'Home page with a rotating hero carousel and clear calls to action',
      'Six solution pages, from Organizational Performance to the Performance Diagnostic™',
      'The ASCEND™ framework presented as a six-stage tile grid',
      'Impact figures, client logo wall and testimonials',
      'Insights (blog) and downloadable resources',
      'Conversation-starter contact form with office details',
    ],
    outcomes: [
      'A single, clear home for six solutions and a signature framework',
      'A short path from first visit to first conversation',
      'A content engine for insights and downloadable resources',
    ],
  },
  {
    slug: 'manesports',
    kind: 'mane',
    featured: true,
    serves: ['ecommerce', 'web-design'],
    name: 'Mane Sports Collection',
    host: 'manesportscollection.co.ke',
    url: 'https://manesportscollection.co.ke',
    year: '2026',
    category: 'E-commerce store',
    filter: 'E-commerce',
    sector: 'Football gear retailer · Eldoret',
    blurb: 'A bold football-gear store where customers order in seconds, straight to WhatsApp.',
    scope: ['E-commerce', 'WhatsApp ordering', 'M-Pesa'],
    challenge:
      'A ten-year-old Eldoret sports shop needed to sell online without forcing customers through accounts and complicated checkouts. Orders had to land where the owner already works: WhatsApp.',
    approach: [
      ['Remove friction', 'No accounts, no complicated checkout. Customers add to cart and send their order in a single tap.'],
      ['Sell the culture', 'A “Squad Number” category system and bold, energetic copy that feels like football, not a generic shop.'],
      ['Fit how Kenyans pay', 'M-Pesa or cash on delivery, with every order arriving as a ready-made message in the owner’s WhatsApp.'],
    ],
    built: [
      'Rotating banners, featured categories, top sellers and latest arrivals',
      'A “Squad Number” category system across eight product categories',
      'Cart and wishlist with no account required',
      'Checkout that sends a ready-made order to the shop on WhatsApp',
      'Pay by M-Pesa or cash on delivery',
      'Customer reviews, brand partners, FAQs and legal pages',
    ],
    outcomes: [
      'Orders arrive on WhatsApp, where the shop already works',
      'Shopping that takes seconds, with no sign-up wall',
      'A storefront as bold as the brands it stocks',
    ],
  },
  {
    slug: 'brighthill',
    kind: 'bright',
    featured: true,
    serves: ['web-design'],
    name: 'BrightHill Insurance Agency',
    host: 'brighthillagency.co.ke',
    url: 'https://brighthillagency.co.ke',
    year: '2026',
    category: 'Website + admin CMS',
    filter: 'Websites',
    sector: 'Insurance agency',
    blurb: 'An insurance website with a full admin panel, instant quotes and an AI chat assistant.',
    scope: ['PHP', 'MySQL', 'Admin CMS', 'AI chat'],
    challenge:
      'An insurance agency needs to look trustworthy, explain many products simply and capture leads, while staff update the site themselves without calling a developer.',
    approach: [
      ['Make it editable', 'A full admin panel so staff can change any page, text, photo or background without a developer.'],
      ['Explain products simply', 'Category pages with plan choice cards, so visitors compare options without insurance jargon.'],
      ['Capture and answer', 'An instant quote calculator and an AI chat assistant that answers from the site’s own content.'],
    ],
    built: [
      'Full admin panel: every page, text, photo and background is editable',
      'Category pages (Medical, Motor, Travel, General, Professional Indemnity) with plan choice cards',
      'Instant quote calculator in the style of leading insurers',
      'AI live-chat assistant that answers from the site’s own content',
      'Dynamic testimonials, news & insurance tips, cookie consent',
      'Services that re-flow automatically when edited in admin',
    ],
    outcomes: [
      'Staff can update the entire site themselves',
      'Visitors get quotes and answers without waiting',
      'A trustworthy, modern look for an established agency',
    ],
  },
  {
    slug: 'agrovet-pos',
    kind: 'agro',
    serves: ['pos-systems'],
    name: 'Agrovet POS System',
    host: 'agrovet-pos',
    url: null,
    year: null,
    category: 'POS system',
    filter: 'POS Systems',
    sector: 'Agrovet shop',
    blurb: 'A fast point-of-sale and stock system built for the way an agrovet shop really trades.',
    scope: ['POS system', 'Inventory', 'Reports', 'Staff training'],
    challenge:
      'An agrovet sells hundreds of different products, from animal feeds and drugs to seeds and fertiliser, often in small measured quantities. Paper records and guesswork made it hard to know what was in stock, what was selling and what the day had earned.',
    approach: [
      ['Study the counter', 'We started at the shop counter: how products are weighed, priced and sold, so the screen matches the real workflow.'],
      ['Make selling fast', 'A clean sales screen with quick product search, so a customer is served in seconds and a receipt is printed straight away.'],
      ['Make stock visible', 'Every sale updates stock automatically, with low-stock warnings and daily reports the owner can trust.'],
    ],
    built: [
      'Quick sales screen with product search and instant receipts',
      'Product catalogue with categories, prices and units',
      'Automatic stock deduction and low-stock alerts',
      'Daily, weekly and monthly sales reports',
      'Multiple users with roles, so staff only see what they need',
      'Training for the shop team so they are confident from day one',
    ],
    outcomes: [
      'Fast, accurate sales at the counter',
      'Stock levels the owner can trust at any time',
      'Clear reports that show what is selling and what is not',
    ],
  },
  {
    slug: 'veloprime',
    kind: 'velo',
    serves: ['web-design', 'branding'],
    name: 'Veloprime IT Solutions',
    host: 'veloprime',
    url: null,
    year: null,
    category: 'Corporate website',
    filter: 'Websites',
    sector: 'IT solutions company',
    blurb: 'A sharp, modern website for a technology company that wants to look as capable as it is.',
    scope: ['Web design', 'Development', 'Brand look'],
    challenge:
      'Technology buyers judge a provider by how professional it looks online. Veloprime needed a website that explains its IT services clearly, builds confidence quickly and makes it easy for businesses to ask for help.',
    approach: [
      ['Explain it simply', 'IT services can sound complicated, so each service is presented in plain language with clear benefits.'],
      ['Look the part', 'A confident, modern visual style that signals reliability and technical skill.'],
      ['Make contact effortless', 'Calls to action and enquiry options placed where a business owner will actually use them.'],
    ],
    built: [
      'Modern, responsive company website',
      'Clear service pages with plain-language explanations',
      'Company profile and credibility sections',
      'Enquiry form and click-to-call / WhatsApp options',
      'Fast loading and mobile-first layouts',
      'Search-friendly page structure',
    ],
    outcomes: [
      'A professional first impression for technology clients',
      'Services that are easy to understand and request',
      'A website that works on every phone and screen',
    ],
  },
  {
    slug: 'beeyond-nature',
    kind: 'nature',
    serves: ['web-design', 'content'],
    name: 'Beeyond Nature',
    host: 'beeyond-nature',
    url: null,
    year: null,
    category: 'Brand website',
    filter: 'Websites',
    sector: 'Nature & natural products brand',
    blurb: 'A warm, nature-led website that tells the Beeyond Nature story and invites people in.',
    scope: ['Web design', 'Development', 'Brand storytelling'],
    challenge:
      'Beeyond Nature needed an online home that feels as natural and trustworthy as the brand itself: easy to browse, rich in story and simple to get in touch with.',
    approach: [
      ['Lead with the story', 'The brand’s connection to nature comes first, through imagery, tone and layout.'],
      ['Keep it calm and clear', 'Generous space, readable type and simple navigation, so nothing gets in the way.'],
      ['Turn interest into contact', 'Clear paths to enquire, ask questions or reach the team directly.'],
    ],
    built: [
      'Responsive brand website with a natural, calming look',
      'Story and about sections that build trust',
      'Showcase of the brand’s offering',
      'Contact form and WhatsApp links',
      'Image-led layouts optimised for speed',
      'Search-friendly structure',
    ],
    outcomes: [
      'A brand presence that feels authentic',
      'Visitors understand the offering in moments',
      'Easy, direct contact from any device',
    ],
  },
  {
    slug: 'nox-brand',
    kind: 'nox',
    serves: ['branding'],
    name: 'NOX Digital Brand Identity',
    host: 'noxdigital',
    url: null,
    year: '2026',
    category: 'Brand identity',
    filter: 'Branding',
    sector: 'Our own studio brand',
    blurb: 'A brush-stroke, black-and-white identity: logo, poster, social and stationery.',
    scope: ['Logo design', 'Poster', 'Social templates', 'Stationery'],
    challenge:
      'We wanted our own brand to prove what we sell: confident, memorable and consistent from a business card to a website.',
    approach: [
      ['Find the voice', 'Bold, honest and a little rebellious: a hand-painted NOX mark with a clean DIGITAL wordmark.'],
      ['Strip to essentials', 'A strict black-and-white palette that stays striking in print, on screen and on social.'],
      ['Build the system', 'Poster, flyers, business cards and templates that all feel like one brand.'],
    ],
    built: [
      'Brush-stroke NOX DIGITAL logo and wordmark',
      'Black-and-white colour system with handwritten accents',
      'Service poster and flyer layouts',
      'Business cards and brand cards',
      'Social media post templates',
      'This website, built to match',
    ],
    outcomes: [
      'One recognisable look across print and digital',
      'A flexible system we reuse for every campaign',
      'A brand that feels established from day one',
    ],
  },
]

export const why = [
  { icon: 'shield', top: 'Professional', bottom: '& Reliable' },
  { icon: 'bolt', top: 'Fast', bottom: 'Delivery' },
  { icon: 'users', top: '50+ Happy', bottom: 'Clients' },
  { icon: 'star', top: 'Affordable &', bottom: 'Flexible Pricing' },
]

export const process = [
  {
    n: '01',
    title: 'Discover',
    text: 'We talk about your business, your customers and your goals. You get honest advice and a clear plan.',
    note: 'free chat',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Layouts, brand and content take shape. You see it, react to it and we refine it together.',
    note: 'your vision',
  },
  {
    n: '03',
    title: 'Develop',
    text: 'A fast, secure, mobile-first build, tested on real devices before anything goes live.',
    note: 'built right',
  },
  {
    n: '04',
    title: 'Deliver & grow',
    text: 'Launch, training and ongoing support, so your website keeps working as your business grows.',
    note: 'real results',
  },
]

export const faqs = [
  {
    q: 'What does a typical project include?',
    a: 'Strategy, design, development, content set-up, launch and support. Depending on what you need, that can also include branding, SEO, an admin panel so you can edit the site yourself, or an online store.',
  },
  {
    q: 'How long will my project take?',
    a: 'It depends on the size and how quickly feedback comes in. A focused business website moves much faster than a full online store or app. We agree a clear timeline before we start.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing is affordable and flexible. It depends on what you need, so we start with a free conversation and send you a clear quote with no surprises.',
  },
  {
    q: 'Can my customers pay with M-Pesa or order on WhatsApp?',
    a: 'Yes. We have built stores that accept M-Pesa or cash on delivery and send each order straight to the shop on WhatsApp, with no account needed.',
  },
  {
    q: 'Can I edit the website myself?',
    a: 'Absolutely. We can build an admin panel where you change text, photos and backgrounds on any page and see it live immediately.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Website maintenance covers updates, backups, security checks and quick fixes, so your site stays fast, safe and current.',
  },
  {
    q: 'Where are you based and who do you work with?',
    a: 'We are based in Eldoret, Kenya, and work with businesses, brands and creators across the country and beyond. Everything can be done remotely.',
  },
]

// ─────────────────────────────────────────────────────────────
//  PRICING  (KES). These are EXAMPLE figures: edit them to your real
//  rates. They feed the Pricing page and the Cost Estimator.
// ─────────────────────────────────────────────────────────────
export const pricing = [
  {
    slug: 'starter',
    name: 'Starter',
    from: 25000,
    for: 'Small businesses, startups and personal brands that need a professional first website.',
    features: ['Up to 5 pages', 'Mobile-friendly design', 'Contact form + WhatsApp button', 'Basic SEO set-up', 'Hosting guidance & launch'],
    time: '1–2 weeks',
  },
  {
    slug: 'business',
    name: 'Business',
    from: 60000,
    popular: true,
    for: 'Growing companies that want a full website, content and a way to edit it themselves.',
    features: ['Up to 12 pages', 'Admin panel to edit content', 'Blog / news section', 'On-page SEO + Google Business help', 'Analytics & speed optimisation', '30 days of free support'],
    time: '3–5 weeks',
  },
  {
    slug: 'custom',
    name: 'Custom system',
    from: 120000,
    for: 'Online stores, POS systems, apps and anything built around how your business really runs.',
    features: ['Online store with M-Pesa / WhatsApp checkout', 'POS, stock and reports', 'Custom dashboards & user roles', 'Training for your team', '60 days of free support'],
    time: '6+ weeks',
  },
]

export const estimator = {
  types: [
    { id: 'brochure', label: 'Business website', base: 25000, note: 'Presents your company and gets enquiries' },
    { id: 'store', label: 'Online store', base: 70000, note: 'Products, cart and M-Pesa / WhatsApp orders' },
    { id: 'pos', label: 'POS / stock system', base: 120000, note: 'Sales, inventory and reports for a shop' },
    { id: 'app', label: 'Mobile or web app', base: 150000, note: 'Custom tool built around your process' },
    { id: 'brand', label: 'Branding only', base: 15000, note: 'Logo, colours and brand kit' },
  ],
  pages: [
    { id: 'p5', label: 'Up to 5 pages', add: 0 },
    { id: 'p10', label: '6–10 pages', add: 15000 },
    { id: 'p20', label: '11–20 pages', add: 35000 },
  ],
  extras: [
    { id: 'cms', label: 'Admin panel to edit content', add: 20000 },
    { id: 'seo', label: 'SEO set-up', add: 10000 },
    { id: 'brand', label: 'Logo & brand kit', add: 15000 },
    { id: 'mpesa', label: 'M-Pesa / payment integration', add: 25000 },
    { id: 'copy', label: 'Content writing', add: 12000 },
    { id: 'sw', label: 'Swahili + English versions', add: 15000 },
  ],
  speed: [
    { id: 'normal', label: 'Normal timeline', mult: 1 },
    { id: 'fast', label: 'Rush (priority)', mult: 1.25 },
  ],
}

export const kenyaFeatures = [
  { icon: 'whatsapp', title: 'WhatsApp-first', text: 'Orders, enquiries and bookings land straight in the app your customers already use all day.' },
  { icon: 'bolt', title: 'M-Pesa ready', text: 'Checkout and payment flows designed around how Kenyans actually pay: paybill, till, STK push or on delivery.' },
  { icon: 'globe', title: 'Fast on mobile data', text: 'Lightweight pages that load quickly on 3G/4G, because most of your visitors are on a phone.' },
  { icon: 'pin', title: 'Found locally', text: 'Google Business and local SEO so people searching “near me” in your town find you first.' },
]

export const auditQuestions = [
  { q: 'Does your site load in under 3 seconds on a phone?', tip: 'Compress images, use fast hosting and remove heavy plugins. Slow sites lose visitors before they see anything.' },
  { q: 'Does it look good and work well on a mobile phone?', tip: 'Most Kenyan visitors browse on phones. Buttons, text and menus must be easy to use with a thumb.' },
  { q: 'Is there a WhatsApp or call button visible on every page?', tip: 'Make it effortless to reach you. A floating WhatsApp button often doubles enquiries.' },
  { q: 'Does the homepage say clearly what you do and who it is for within 5 seconds?', tip: 'Lead with one clear sentence and a single main button, not a list of everything.' },
  { q: 'Does your site have HTTPS (the padlock) and no browser warnings?', tip: 'An insecure site scares customers and ranks lower on Google.' },
  { q: 'Do you have a Google Business Profile with correct hours, phone and location?', tip: 'This is how you appear on Maps and “near me” searches. It is free and powerful.' },
  { q: 'Does each page have its own title and description that include what you do and your town?', tip: 'Search engines use these to understand and show your pages.' },
  { q: 'Do you show real proof: your work, reviews or client names?', tip: 'People buy from businesses they trust. Add testimonials, case studies and real photos.' },
  { q: 'Can customers do the main thing (enquire, book, order) in under a minute?', tip: 'Cut steps. Fewer fields, clearer buttons and no forced sign-ups.' },
  { q: 'Do you update your site or blog at least every few months?', tip: 'Fresh content shows you are active and gives Google more to rank.' },
]
