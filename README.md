# Orange County Handy — Site Admin Guide

This guide is for the **site owner / content manager**. It explains where to change content, how to enter data, and how to manage form submissions — without needing a developer.

> Follow the WordPress admin sidebar. Menu names below match what you see in English admin.

---

## Languages

1. [English](#english--admin-guide)
2. [فارسی](#فارسی--راهنمای-مدیر-سایت)

---

# English — Admin Guide

## Table of contents

1. [Quick start](#1-quick-start)
2. [Site information (Customize)](#2-site-information-customize)
3. [Menus](#3-menus)
4. [Main pages](#4-main-pages)
5. [Services](#5-services)
6. [Blog (Posts)](#6-blog-posts)
7. [Reviews](#7-reviews)
8. [FAQ](#8-faq)
9. [Forms, email & Telegram](#9-forms-email--telegram)
10. [Media & images](#10-media--images)
11. [Common tasks checklist](#11-common-tasks-checklist)
12. [Typical URLs](#12-typical-urls)

---

## 1. Quick start

| Task | Admin path |
|------|------------|
| Homepage | **Pages** → page with template **Home** (usually `/home`) + set as Homepage in **Settings → Reading** |
| Blog archive | Page with slug `blogs` + set as Posts page in **Settings → Reading** |
| Main logo | **Appearance → Customize → Site Identity** |
| Contact info / social / form recipient | **Appearance → Customize → Site Information** |
| Menus | **Appearance → Menus** |

**Required plugin:** Advanced Custom Fields (ACF) must be active so page and service fields appear.

---

## 2. Site information (Customize)

Path: **Appearance → Customize → Site Information**

### 2.1 Social Media

| Field | Used for |
|-------|----------|
| Instagram / WhatsApp / X / Facebook / LinkedIn | Footer and contact areas |

### 2.2 Contact Info

| Field | Used for |
|-------|----------|
| Phone Number | Main phone (header, buttons, footer) |
| Support Phone Number | Support phone (where used in the theme) |
| Email | Display email on the site |
| **Forms Recipient** | Inbox for Contact & Quote forms. If empty → Email, then WordPress admin email |
| **Telegram Bot Token** | Bot token from [@BotFather](https://t.me/BotFather) |
| **Telegram User ID** | Numeric chat ID that receives form alerts |
| Telegram test → **Send test message** | Sends a test message (Publish not required) |
| Service Areas | e.g. Orange County, CA |
| Work Hours | Business hours |
| Copyright Text | Footer copyright |

**Telegram note:** Both Token and User ID must be filled. The user must message the bot once (`/start`).

### 2.3 Other Logos

| Field | Used for |
|-------|----------|
| Mobile Menu Logo | Mobile menu logo |
| Footer Logo | Footer logo |

### 2.4 Reviews / Blog / Services / FAQ archive copy

- **Reviews Archive:** title, subtitle, Thumbtack hires number  
- **Blog Archive:** blog archive title (category/tag pages use the term name)  
- **Services Archive:** hero title, hero text, hero image, services grid title  
- **FAQ Section:** default FAQ title and CTA text (pages can override)

### 2.5 Custom code (optional)

**Appearance → Customize → Custom code settings**  
For analytics scripts in `head` / start of `body` / end of `body`. Use carefully.

---

## 3. Menus

Path: **Appearance → Menus**

| Location | Used for |
|----------|----------|
| Header Menu | Desktop header |
| Mobile Menu | Mobile menu |
| Footer Menu Column 1 | Footer column 1 |
| Footer Menu Column 2 | Footer column 2 |
| Footer Bottom Menu | Footer bottom links (Privacy / Terms, etc.) |

After editing, **Assign** the menu to the correct location and save.

---

## 4. Main pages

Path: **Pages**

Each special page needs the correct **Template** (Page Attributes / Template).

| Page | Template | What you edit |
|------|----------|---------------|
| Home | `Home` | ACF tabs under the page (Hero, Why Choose Us, …) |
| About Us | `About Us` | Intro, Values, Our Story, Gallery |
| Contact Us | `Contact Us` | Form title, subjects, quote box, quick answers |
| Get a Quote | `Get Quote` | Full quote form page |

### 4.1 Home — content tabs

| Tab | Content |
|-----|---------|
| **Hero** | Image, title, yellow highlight word, text |
| **Why Choose Us** | Mobile title + 3 features |
| **Services & Reviews** | Titles for services & reviews sliders |
| **About** | Title, text, 3 badges, 3 photos |
| **Fast Quote** | Image, title, note next to the short form |
| **How It Works** | Title + 3 steps (title + text) |
| **FAQ** | Selected FAQs + CTA title/text |

If no FAQs are selected, FAQs with Place `home` are shown.

### 4.2 About Us

| Tab | Content |
|-----|---------|
| **Intro** | Images, accent color, title, body, quote |
| **Values** | Label, title, up to 4 values |
| **Our Story** | Label, title, intro, up to 4 story steps |
| **Gallery** | Title + up to 16 photos |

### 4.3 Contact Us

| Field | Used for |
|-------|----------|
| Form Title / Subtitle | Above the contact form |
| Form Subjects | One subject option per line |
| Quote Box Title / Text | Side “estimate” box |
| Quick Answers Title | Quick answers section title |

### 4.4 Settings → Reading

1. **Your homepage displays:** A static page  
2. **Homepage:** Home page  
3. **Posts page:** Blogs page (`/blogs/`)

---

## 5. Services

Menu: **Services**

- Archive: usually `/service/`  
- Each service: its own URL slug  

### Adding / editing a service

1. **Title** — service name  
2. **Featured Image** — hero image (needed for the image hero layout)  
3. **Order** (Page Attributes) — list order  
4. ACF tabs:

| Tab | Fields |
|-----|--------|
| **General** | Icon (search), hero subtitle, **Two-tone Yellow** switch, **Hero Yellow Split** slider |
| **What We Help With** | Section title + up to 8 cards |
| **About** | Image, title, about text |
| **Recent Projects** | Gallery title + up to 8 photos |
| **FAQ** | Selected FAQs; if empty → Place `services` |

**Two-tone Yellow**

- **On:** yellow + light yellow split (use the slider)  
- **Off:** solid yellow only  

---

## 6. Blog (Posts)

Menu: **Posts**

| Task | Notes |
|------|--------|
| New post | Title + Editor + Featured Image + Category / Tag |
| Extra fields | **FAQs** and **Related Services** (optional) |
| Archive | `/blogs/` — 9 posts per page |
| Article search | Blog archive search (`search-type=post`) |

Archive title: Customize → Blog Archive.

---

## 7. Reviews

Menu: **Reviews**

| Field | Notes |
|-------|--------|
| Title | Internal admin title |
| Editor | Review text |
| Reviewer Name | Display name |
| Rating | 1–5 |

- No single review page; all go to `/review/`  
- `/reviews` redirects to `/review`  
- Archive title/subtitle & Thumbtack number: Customize → Reviews Archive  

---

## 8. FAQ

Menu: **FAQ**

| Part | Used for |
|------|----------|
| Title | Question |
| Editor | Answer |
| **FAQ Category** | Topic grouping |
| **FAQ Place** | Default placement: e.g. `home`, `services` |

| Location | If manual pick is empty |
|----------|-------------------------|
| Home | FAQs with Place `home` |
| Service page | FAQs with Place `services` |
| Blog post / service | You can pick FAQs manually |

---

## 9. Forms, email & Telegram

| Form | On the site | In admin |
|------|-------------|----------|
| Contact | Contact Us page | **Contact Form** |
| Full Quote | Get a Quote page | **Quote Requests** |
| Fast Quote | Home short form | **Quote Requests** (Source = Fast Quote) |

### 9.1 After someone submits

1. An admin post is created immediately  
2. The visitor sees a **success** message right away (they are not kept waiting on email/Telegram)  
3. Email and Telegram are sent **in the background** a moment later  
4. HTML email goes to **Forms Recipient** (needs working SMTP on the server)  
5. If Telegram Token + User ID are set, the same info is sent to Telegram  
6. Default status is usually **Unread**; if email fails → **Unsend**

**How background delivery works (brief):** the theme tries to send right after the success response (PHP-FPM when available, plus a quick background request). If that does not finish, WordPress Cron retries within about 15 seconds so messages are not stuck waiting for random site traffic.

### 9.2 Statuses

#### Quote Requests

| Status | Meaning |
|--------|---------|
| Unread | New, not opened yet |
| Unsend | Notification email failed |
| Under Review | Being reviewed |
| Reviewed & Coordinated | Coordinated |
| Completed | Done |
| Cancelled | Cancelled |

#### Contact Form

| Status | Meaning |
|--------|---------|
| Unread | New |
| Unsend | Notification email failed |
| Awaiting Response | Waiting on the customer |
| Reviewed & Contacted | Contacted |
| No Answer | No answer |
| Spam | Spam |

Opening an **Unread** item usually moves it to the next working status.

### 9.3 Status box on the edit screen

On each Quote / Contact:

- Manual status dropdown  
- **Email notification** result (success / failure + reason)  
- **Telegram notification** result (success / failure + reason)  

### 9.4 Notification setup

1. Customize → Contact Info → **Forms Recipient**  
2. Telegram: Token + User ID → **Send test message**  
3. On production, use an SMTP plugin (WP Mail SMTP / FluentSMTP, etc.)  

> On local environments, email often does not reach a real inbox. Check **Unsend** and the reason in the Status box.

### 9.5 Quote photos

On the full **Get a Quote** form, customers may attach project photos (optional).

| Topic | Detail |
|-------|--------|
| Allowed formats | JPG, PNG, WebP, GIF, plus phone formats **HEIC / HEIF** (iPhone) and **AVIF** (newer Android) |
| Limits | Up to 8 files, max 10 MB each |
| Storage | Saved under Media uploads in a protected `quotes` folder (not the Media Library grid) |
| Email | Preview in the HTML email **and** files attached |
| Telegram | Text summary first, then photos (JPG/PNG as an album; HEIC/WebP/GIF/AVIF as documents) |

If Imagick on the server supports HEIC, iPhone photos may be converted to JPG for easier preview. Check Email / Telegram results in the Status box if something did not arrive.

---

## 10. Media & images

Menu: **Media**

| Place | Tip |
|-------|-----|
| Service / blog featured image | Good quality, suitable crop |
| About / service galleries | Real project photos |
| Logos | Transparent PNG (or SVG if host allows) |

Compress images before upload when possible.

---

## 11. Common tasks checklist

### Change phone or display email

Customize → Site Information → Contact Info → Publish

### Change form inbox

Same section → **Forms Recipient** (+ Telegram if needed)

### Add a service

1. Services → Add Service  
2. Title + Featured Image + Order  
3. Fill ACF tabs  
4. Publish  

### Edit the homepage

Pages → Home → ACF tabs → Update

### Publish a blog post

Posts → Add Post → featured image + category → Publish

### Add a review

Reviews → Add Review → name + rating + text → Publish

### Add an FAQ

1. Create Place / Category if needed  
2. FAQ → Add FAQ  
3. Optionally select it on Home / Service  

### Follow up on a quote

Quote Requests → open item → change Status → if Unsend, read email/Telegram reason

---

## 12. Typical URLs

| URL | Content |
|-----|---------|
| `/` | Home (after Reading settings) |
| `/about-us/` | About |
| `/contact-us/` | Contact |
| `/get-quote/` | Full quote form |
| `/service/` | Services archive |
| `/service/…` | Single service |
| `/blogs/` | Blog archive |
| `/review/` | Reviews archive |

You can change page slugs under **Pages**; update menus afterward.

---

## Technical support

Theme: **Orange County Handy**  
Developer: [Cyan Dm](https://cyandm.com)

For bugs or code/design changes, contact the development team. For **content, images, services, blog, FAQ, reviews, and form follow-up**, this guide is enough.

---
---

# فارسی — راهنمای مدیر سایت

این راهنما برای **کارفرما / مدیر محتوا** است. هدف این است که بدون نیاز به برنامه‌نویس، بدانی هر بخش سایت از کجا عوض می‌شود، دادهٔ جدید چطور وارد می‌شود، و درخواست‌های فرم کجا مدیریت می‌شوند.

> منوی وردپرس را از نوار کناری ادمین دنبال کن. نام‌ها دقیقاً همان چیزی است که در ادمین انگلیسی می‌بینی.

## فهرست

1. [شروع سریع](#1-شروع-سریع)
2. [اطلاعات کلی سایت (Customize)](#2-اطلاعات-کلی-سایت-customize)
3. [منوها](#3-منوها)
4. [صفحات اصلی](#4-صفحات-اصلی)
5. [خدمات (Services)](#5-خدمات-services)
6. [بلاگ (Posts)](#6-بلاگ-posts)
7. [نظرات مشتریان (Reviews)](#7-نظرات-مشتریان-reviews)
8. [سؤالات متداول (FAQ)](#8-سؤالات-متداول-faq)
9. [فرم‌ها، ایمیل و تلگرام](#9-فرم‌ها-ایمیل-و-تلگرام)
10. [رسانه و تصاویر](#10-رسانه-و-تصاویر)
11. [چک‌لیست کارهای رایج](#11-چکلیست-کارهای-رایج)
12. [نقشهٔ سریع URLها](#12-نقشهٔ-سریع-urlها)

---

## 1. شروع سریع

| کار | مسیر در ادمین |
|-----|----------------|
| صفحهٔ اصلی سایت | **Pages** → صفحه با قالب **Home** (معمولاً `/home`) + در **Settings → Reading** به‌عنوان Homepage |
| آرشیو بلاگ | صفحه با اسلاگ `blogs` + در **Settings → Reading** به‌عنوان Posts page |
| لوگو اصلی سایت | **Appearance → Customize → Site Identity** |
| اطلاعات تماس / شبکه‌ها / گیرنده فرم | **Appearance → Customize → Site Information** |
| منوها | **Appearance → Menus** |

**افزونهٔ لازم:** Advanced Custom Fields (ACF) باید فعال باشد.

---

## 2. اطلاعات کلی سایت (Customize)

مسیر: **Appearance → Customize → Site Information**

### 2.1 Social Media

| فیلد | کاربرد |
|------|--------|
| Instagram / WhatsApp / X / Facebook / LinkedIn | لینک‌های فوتر و بخش‌های تماس |

### 2.2 Contact Info

| فیلد | کاربرد |
|------|--------|
| Phone Number | شماره اصلی (هدر، دکمه‌ها، فوتر) |
| Support Phone Number | شماره پشتیبانی |
| Email | ایمیل نمایشی سایت |
| **Forms Recipient** | گیرندهٔ فرم‌های Contact و Quote (اگر خالی → Email → ایمیل ادمین) |
| **Telegram Bot Token** | توکن از [@BotFather](https://t.me/BotFather) |
| **Telegram User ID** | آیدی عددی دریافت‌کنندهٔ اعلان |
| Telegram test → **Send test message** | پیام آزمایشی (بدون نیاز به Publish) |
| Service Areas | محدودهٔ خدمات |
| Work Hours | ساعت کاری |
| Copyright Text | کپی‌رایت فوتر |

**نکته تلگرام:** هر دو فیلد باید پر باشند و کاربر یک‌بار با ربات `/start` زده باشد.

### 2.3 Other Logos

| فیلد | کاربرد |
|------|--------|
| Mobile Menu Logo | لوگوی منوی موبایل |
| Footer Logo | لوگوی فوتر |

### 2.4 آرشیوها (Reviews / Blog / Services / FAQ)

- **Reviews Archive:** عنوان، زیرعنوان، عدد Thumbtack  
- **Blog Archive:** عنوان آرشیو بلاگ  
- **Services Archive:** هیرو + عنوان گرید  
- **FAQ Section:** عنوان و CTA پیش‌فرض  

### 2.5 کدهای سفارشی (اختیاری)

**Appearance → Customize → تنظیمات کدهای سفارشی** — برای آنالیتیکس و اسکریپت‌ها؛ با دقت استفاده کن.

---

## 3. منوها

مسیر: **Appearance → Menus**

| محل منو | کاربرد |
|---------|--------|
| Header Menu | منوی دسکتاپ |
| Mobile Menu | منوی موبایل |
| Footer Menu Column 1 / 2 | ستون‌های فوتر |
| Footer Bottom Menu | لینک‌های پایین فوتر |

بعد از ویرایش، منو را به محل درست **Assign** کن.

---

## 4. صفحات اصلی

مسیر: **Pages** — هر صفحه باید **Template** درست داشته باشد.

| صفحه | Template | چه چیزی را ویرایش می‌کنی؟ |
|------|----------|---------------------------|
| Home | `Home` | تب‌های ACF (Hero، Why Choose Us، …) |
| About Us | `About Us` | Intro، Values، Our Story، Gallery |
| Contact Us | `Contact Us` | فرم، موضوعات، باکس Quote |
| Get a Quote | `Get Quote` | فرم کامل درخواست قیمت |

### 4.1 Home

| تب | محتوا |
|----|--------|
| **Hero** | تصویر، عنوان، کلمهٔ هایلایت، متن |
| **Why Choose Us** | عنوان موبایل + ۳ ویژگی |
| **Services & Reviews** | عنوان اسلایدرها |
| **About** | عنوان، متن، ۳ بج، ۳ عکس |
| **Fast Quote** | تصویر، عنوان، یادداشت |
| **How It Works** | ۳ مرحله |
| **FAQ** | انتخاب FAQ + CTA |

اگر FAQ انتخاب نشود، Place = `home` نشان داده می‌شود.

### 4.2 About Us

Intro / Values / Our Story / Gallery (تا ۱۶ عکس).

### 4.3 Contact Us

عنوان فرم، Subjects (هر خط یک گزینه)، باکس Quote، Quick Answers.

### 4.4 Settings → Reading

1. Static page  
2. Homepage = Home  
3. Posts page = Blogs (`/blogs/`)

---

## 5. خدمات (Services)

منو: **Services** — آرشیو `/service/`، هر خدمت صفحهٔ جدا.

1. Title + Featured Image + Order  
2. تب‌های ACF:

| تب | فیلدها |
|----|--------|
| **General** | آیکون، زیرعنوان هیرو، Two-tone Yellow، Hero Yellow Split |
| **What We Help With** | تا ۸ کارت |
| **About** | تصویر، عنوان، متن |
| **Recent Projects** | تا ۸ عکس |
| **FAQ** | انتخاب دستی یا Place `services` |

**Two-tone:** On = دو رنگ + اسلایدر / Off = فقط زرد یکدست.

---

## 6. بلاگ (Posts)

منو: **Posts** — Title، Editor، تصویر شاخص، دسته/برچسب؛ فیلدهای اختیاری FAQs و Related Services. آرشیو: `/blogs/` (۹ تا در صفحه).

---

## 7. نظرات مشتریان (Reviews)

منو: **Reviews** — Title، متن، Reviewer Name، Rating (۱–۵). صفحهٔ تکی ندارد؛ آرشیو `/review/`. عنوان آرشیو از Customize.

---

## 8. سؤالات متداول (FAQ)

منو: **FAQ** — سؤال، پاسخ، Category، Place (`home` / `services` و …). در Home و Service اگر انتخاب دستی خالی باشد از Place استفاده می‌شود.

---

## 9. فرم‌ها، ایمیل و تلگرام

| فرم | در سایت | در ادمین |
|-----|---------|----------|
| Contact | Contact Us | **Contact Form** |
| Full Quote | Get a Quote | **Quote Requests** |
| Fast Quote | فرم کوتاه Home | **Quote Requests** |

### بعد از ارسال

1. پست در ادمین همان لحظه ساخته می‌شود  
2. کاربر فوراً پیام **موفقیت** را می‌بیند (معطل ایمیل/تلگرام نمی‌ماند)  
3. ایمیل و تلگرام **در پس‌زمینه** چند لحظه بعد ارسال می‌شوند  
4. ایمیل HTML به **Forms Recipient** می‌رود (SMTP روی سرور لازم است)  
5. اگر Token و User ID تلگرام تنظیم باشد، همان اطلاعات به تلگرام هم می‌رود  
6. وضعیت پیش‌فرض معمولاً **Unread** است؛ اگر ایمیل خطا بدهد → **Unsend**

**ارسال پس‌زمینه (خلاصه):** ترجیحاً بلافاصله بعد از پاسخ موفقیت ارسال می‌شود (PHP-FPM در صورت وجود + درخواست پس‌زمینه). اگر تمام نشود، Cron وردپرس حدود ۱۵ ثانیه بعد دوباره تلاش می‌کند تا پیام پشت ترافیک تصادفی سایت گیر نکند.

### عکس‌های فرم Quote

در فرم کامل **Get a Quote** مشتری می‌تواند عکس پروژه بفرستد (اختیاری).

| موضوع | توضیح |
|-------|--------|
| فرمت‌های مجاز | JPG، PNG، WebP، GIF و فرمت گوشی **HEIC / HEIF** (آیفون) و **AVIF** (اندروید جدیدتر) |
| محدودیت | حداکثر ۸ فایل، هر کدام تا ۱۰ مگابایت |
| ذخیره | در پوشهٔ محافظت‌شدهٔ `quotes` داخل آپلودها (نه Media Library) |
| ایمیل | پیش‌نمایش در HTML + ضمیمهٔ فایل‌ها |
| تلگرام | ابتدا متن خلاصه، بعد عکس‌ها (JPG/PNG به‌صورت آلبوم؛ HEIC/WebP/GIF/AVIF به‌صورت فایل) |

اگر سرور Imagick با پشتیبانی HEIC داشته باشد، عکس آیفون ممکن است به JPG تبدیل شود. نتیجهٔ Email / Telegram را در باکس Status ببین.

### وضعیت‌های Quote

Unread / Unsend / Under Review / Reviewed & Coordinated / Completed / Cancelled

### وضعیت‌های Contact

Unread / Unsend / Awaiting Response / Reviewed & Contacted / No Answer / Spam

باکس **Status** کنار هر درخواست: تغییر دستی وضعیت + نتیجهٔ Email و Telegram.

**تنظیم:** Customize → Forms Recipient + Token/User ID تلگرام + دکمه تست. روی سرور واقعی SMTP توصیه می‌شود.

---

## 10. رسانه و تصاویر

منو: **Media** — تصاویر شاخص و گالری را با کیفیت مناسب و حجم کمتر آپلود کن. لوگو ترجیحاً PNG شفاف.

---

## 11. چک‌لیست کارهای رایج

- تلفن/ایمیل نمایشی → Customize → Contact Info  
- گیرنده فرم → Forms Recipient (+ تلگرام)  
- خدمت جدید → Services → Add → ACF → Publish  
- صفحهٔ اصلی → Pages → Home → ACF → Update  
- بلاگ → Posts → Add Post  
- نظر → Reviews → Add Review  
- FAQ → FAQ → Add (+ Place/Category)  
- پیگیری Quote → Quote Requests → Status  

---

## 12. نقشهٔ سریع URLها

| آدرس | محتوا |
|------|--------|
| `/` | Home |
| `/about-us/` | درباره ما |
| `/contact-us/` | تماس |
| `/get-quote/` | فرم Quote |
| `/service/` | آرشیو خدمات |
| `/service/…` | یک خدمت |
| `/blogs/` | بلاگ |
| `/review/` | نظرات |

با تغییر اسلاگ در Pages، منوها را هم به‌روز کن.

---

## پشتیبانی فنی

قالب: **Orange County Handy**  
توسعه‌دهنده: [Cyan Dm](https://cyandm.com)

برای باگ یا تغییر کد/طراحی با تیم توسعه هماهنگ کن. برای **محتوا، تصاویر، خدمات، بلاگ، FAQ، نظرات و پیگیری فرم‌ها** همین راهنما کافی است.
