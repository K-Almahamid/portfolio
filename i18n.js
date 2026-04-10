/**
 * Translations for EN/AR
 * Default: en (English)
 */

const translations = {
    en: {
        nav: { about: 'About', skills: 'Skills', services: 'Services', projects: 'Projects', experience: 'Experience', education: 'Education', tools: 'Tools', contact: 'Contact' },
        hero: {
            subtitle: 'Flutter Developer',
            intro: 'Flutter Developer with 4+ years of experience delivering production-ready Android & iOS apps across ride-hailing, fintech, and e-commerce.',
            intro2: 'Expert in Clean Architecture, GetX, Bloc/Cubit, real-time systems, and payment integrations — with a consistent record of cutting app sizes by up to 60%, leading end-to-end app delivery, and shipping 15+ apps to App Store & Google Play.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            downloadCV: 'Download CV',
            downloadCoverLetter: 'Download Cover Letter'
        },
        about: {
            title: 'About Me',
            p1: 'Flutter Developer with 4+ years of experience delivering production-ready Android & iOS apps across ride-hailing, fintech, and e-commerce.',
            p2: 'Expert in Clean Architecture, GetX, Bloc/Cubit, real-time systems, and payment integrations.',
            p3: 'Consistent record of cutting app sizes by up to 60%, leading end-to-end app delivery, and shipping 15+ apps to App Store & Google Play.'
        },
        skills: {
            title: 'Skills',
            proglang: 'Programming Languages',
            proglang1: 'Dart, Kotlin',
            frameworks: 'Frameworks & State Management',
            frameworks1: 'Flutter, Bloc, Cubit, GetX, Clean Architecture, Provider, Flutter Web',
            backend: 'Backend & APIs',
            backend1: 'REST APIs, Firebase (Auth, Firestore, Cloud Functions, Analytics, Crashlytics), Laravel',
            maps: 'Maps & Real-Time',
            maps1: 'Google Maps API, Places API, Real-time Tracking, Location Services',
            payments: 'Payments & Monetization',
            payments1: 'In-app Purchases, Stripe, PayPal, Google Pay, Apple Pay, Zain Cash, Orange, Umniah, Dinark',
            databases: 'Databases',
            databases1: 'SQLite, Firebase Realtime Database, Firestore',
            tools: 'Tools & CI/CD',
            tools1: 'Git, GitHub, CI/CD, Fastlane, Testing, Android SDK, iOS SDK, Xcode, Android Studio',
            tools2: 'Agora (Voice & Video), Push Notifications, Social Authentication',
            optimization: 'Optimization & Performance',
            optimization1: 'App performance optimization, app size reduction, animations'
        },
        services: {
            title: 'Services',
            lead: 'What I deliver end to end — from mobile releases to web dashboards your team can run day to day.',
            app: {
                title: 'Mobile app development',
                subtitle: 'Flutter apps for Android & iOS — architecture, integrations, and store-ready builds.',
                body: 'Production-grade cross-platform apps: Clean Architecture, state management, maps, payments, real-time features, and CI/CD toward Google Play and the App Store.'
            },
            web: {
                title: 'Websites & admin dashboards',
                subtitle: 'Responsive web apps and internal dashboards — clear UX, roles, and data at a glance.',
                body: 'Landing pages, client portals, and operator dashboards wired to your APIs or Firebase: authentication, charts, tables, and workflows so stakeholders can monitor and manage operations without friction.'
            }
        },
        projects: {
            title: 'Projects',
            lead: 'Selected work — open the store links or dive into full project details.',
            storeAndroid: 'Android',
            storeApp: 'App Store',
            viewDetails: 'View details',
            detailClose: 'Close',
            screenshots: 'Screenshots',
            tech: 'Technologies',
            taxi: { name: 'TaxiK & TaxiK Driver Apps', desc: 'Ride-hailing rider & driver apps with live maps, Firebase real-time rides, and lean ~18MB builds.', l1: 'Flutter + Clean Architecture with a Flutter–native Kotlin bridge for advanced device capabilities.', l2: 'Google Maps & Places for search, animated driver markers with bearing, route polylines, and live location streaming.', l3: 'Real-time ride sync via Firebase Realtime Database / Firestore plus hardened REST integrations.', l4: 'CI/CD, Crashlytics, App Aliases, and testing discipline to ship a ~18MB production build.', l5: 'End-to-end ride booking, dispatch, and rider–driver coordination tuned for production traffic.', tech: 'Flutter • Kotlin bridge • Clean Architecture • Google Maps & Places • Firebase RTDB / Firestore • REST • CI/CD • Crashlytics' },
            brain: { name: 'Brainogram App', desc: 'AI-based trading strategies platform with accounts, notifications, and credits.', l1: 'Architected with Bloc/Cubit and Clean Architecture (SOLID), covering AI trading flows, account handling, notifications, and credit management.', l2: 'In-app purchases plus Screen Coach / highlight onboarding; polished animations and secure real-time trading UX.', tech: 'Flutter • Bloc/Cubit • Clean Architecture • In-app purchases • Trading APIs' },
            expert: { name: 'Expert World App', desc: 'Marketing and service booking platform with HD voice & video.', l1: 'Multi-role marketing and service booking app with real-time chat, group communication, HD voice & video via Agora.', l2: 'Booking-focused UI/UX, backend-driven scheduling, and push notifications; built on Clean Architecture.', l3: 'End-to-end flows for providers and customers with performance-minded, scalable presentation layers.', tech: 'Flutter • Clean Architecture • Agora • REST APIs • Firebase • Push notifications' },
            black: { name: 'Black Iris App', desc: 'Merchant e-commerce with wallet, plans, invoices, and thermal printer integration (~7MB).', l1: 'Wallet, product plans, and advanced merchant filters for catalog & sales operations.', l2: 'Invoice generation and printer integration with Arabic/English support for retail workflows.', l3: 'Highly optimized build (~7MB) using reusable components and disciplined dependency choices.', tech: 'Flutter • REST • Wallet • Invoicing & printer • Localization • SQLite' },
            game: { name: 'Gamecard App', desc: 'Merchant app for digital game cards with wallet and local operator payments.', l1: 'Wallet-centric flows for selling digital game cards and managing merchant balances.', l2: 'Embedded regional payment paths: Umniah, Orange, Zain, and Dinark for frictionless top-ups.', l3: 'Streamlined purchase journeys with robust error handling and reconciliation-friendly UX.', tech: 'Flutter • Wallet • Umniah • Orange • Zain • Dinark • REST' },
            flower: { name: 'Elegant Flower App', desc: 'Full e-commerce flower marketplace with social login and multi-gateway checkout.', l1: 'Clean Architecture e-commerce with catalog, search, cart, and checkout tuned for floral retail.', l2: 'Social authentication plus multi-payment gateway integrations and REST-backed order APIs.', l3: 'UI/UX emphasis on discovery, seasonal promos, and reliable delivery scheduling states.', tech: 'Flutter • Clean Architecture • Social auth • Multi-payment • REST APIs' },
            nick: { name: 'NicknameLab App', desc: 'Text styling and nickname generator with Google Ads and offline SQLite storage.', l1: 'Creative text styles, symbols, and nickname presets with lightweight generation pipelines.', l2: 'Google Ads monetization across banner, interstitial, and rewarded placements.', l3: 'SQLite-backed offline storage with fast preference sync when connectivity returns.', l4: 'Compact, user-friendly build with reusable widgets and disciplined architecture.', tech: 'Flutter • SQLite • Google Ads' },
            masraf: { name: 'Masrafji App', desc: 'Personal finance app with games, rewards, vouchers, QR flows, and multi-currency tracking.', l1: 'Engagement layer: custom spin wheels, loyalty points, and redeemable vouchers.', l2: 'QR payments and external gateway integrations with OTP verification.', l3: 'Multi-currency expense tracking with merchant categorization.', tech: 'Flutter • Payment APIs • QR • Firebase' },
            wash: { name: 'WashApp & WashApper Apps', desc: 'On-demand laundry and delivery platform for customers, couriers, and laundry partners.', l1: 'Full Flutter flows for users and providers: map navigation, cart & checkout, multiple payment options, wallet, and live order tracking.', l2: 'Lean, reusable components and minimal dependencies to keep builds fast and app size efficient.', tech: 'Flutter • REST APIs • Stripe • Firebase • Maps' }
        },
        experience: {
            title: 'Work Experience',
            recovery: {
                role: 'Flutter Developer & Team Leader',
                company: 'Recovery Jordan — Amman, Jordan',
                date: 'Feb 2022 – Jan 2026',
                l1: 'Led overall IT operations, managing infrastructure, systems, and internal technical support.',
                l2: 'Managed the full lifecycle of 8+ apps — from requirements and architecture to App Store & Play Store deployment.',
                l3: 'Collaborated with designers, backend teams, and stakeholders to deliver solutions on schedule.',
                l4: 'Cut app sizes by up to 60% and boosted performance through code optimization, asset compression, and App Aliases.'
            },
            freelance: {
                role: 'Freelance Flutter Developer',
                company: 'Clients in Jordan & internationally',
                date: 'Jan 2022 – Present',
                l1: 'Delivered 7+ Flutter applications across ride-hailing, fintech, and e-commerce for clients in Jordan and internationally.',
                l2: 'Built real-time tracking solutions serving live users across Android & iOS.',
                l3: 'Built financial and merchant management applications.',
                l4: 'Embedded payment gateways and third-party services.'
            }
        },
        education: {
            title: 'Education',
            degree: "Bachelor's Degree in Computer Science",
            school: 'Zarqa University',
            date: 'Sep 2018 – Feb 2022',
            honors: 'Graduated with Honors',
            langTitle: 'Languages',
            ar: 'Arabic',
            arLevel: 'Native',
            en: 'English',
            enLevel: 'Intermediate'
        },
        contact: {
            title: 'Contact',
            panelDirect: 'Direct',
            panelForm: 'Message',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'your@email.com',
            messageLabel: 'Message',
            messagePlaceholder: 'Your message',
            send: 'Send'
        },
        tools: {
            title: 'Tools & Technologies',
            framework: 'Framework & Language',
            backend: 'Backend & Data',
            mapsRealtime: 'Maps & Real-time',
            payments: 'Payments',
            devops: 'DevOps & Deployment',
            ads: 'Ads & Quality'
        },
        themeDark: 'Dark',
        themeLight: 'Light',
        themeToggleToDark: 'Switch to dark mode',
        themeToggleToLight: 'Switch to light mode',
        a11y: { skipToMain: 'Skip to main content' },
        footer: {
            copyright: '© 2026 Khaled Almahamid',
            subtitle: 'Flutter & Mobile Developer — Amman, Jordan'
        }
    },
    ar: {
        nav: { about: 'نبذة', skills: 'المهارات', services: 'الخدمات', projects: 'المشاريع', experience: 'الخبرة', education: 'التعليم', tools: 'الأدوات', contact: 'تواصل' },
        hero: {
            subtitle: 'مطور Flutter',
            intro: 'مطور Flutter بأكثر من 4 سنوات من الخبرة في تسليم تطبيقات أندرويد و iOS جاهزة للإنتاج في مجالات النقل والتكنولوجيا المالية والتجارة الإلكترونية.',
            intro2: 'خبير في Clean Architecture و GetX و Bloc/Cubit والأنظمة الفورية وتكاملات الدفع — مع سجل ثابت في تقليل حجم التطبيقات حتى 60%، وقيادة التسليم من الطرف إلى الطرف، وإطلاق أكثر من 15 تطبيقاً على App Store و Google Play.',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي',
            downloadCV: 'تحميل السيرة الذاتية',
            downloadCoverLetter: 'تحميل خطاب التغطية'
        },
        about: {
            title: 'نبذة عني',
            p1: 'مطور Flutter بأكثر من 4 سنوات من الخبرة في تسليم تطبيقات أندرويد و iOS جاهزة للإنتاج في مجالات النقل والتكنولوجيا المالية والتجارة الإلكترونية.',
            p2: 'خبير في Clean Architecture و GetX و Bloc/Cubit والأنظمة الفورية وتكاملات الدفع.',
            p3: 'سجل ثابت في تقليل حجم التطبيقات حتى 60%، وقيادة التسليم من الطرف إلى الطرف، وإطلاق أكثر من 15 تطبيقاً على App Store و Google Play.'
        },
        skills: {
            title: 'المهارات',
            proglang: 'لغات البرمجة',
            proglang1: 'Dart، Kotlin',
            frameworks: 'الأطر وإدارة الحالة',
            frameworks1: 'Flutter، Bloc، Cubit، GetX، Clean Architecture، Provider، Flutter Web',
            backend: 'الخلفية وواجهات API',
            backend1: 'REST APIs، Firebase (Auth, Firestore, Cloud Functions, Analytics, Crashlytics)، Laravel',
            maps: 'الخرائط والوقت الفعلي',
            maps1: 'Google Maps API، Places API، التتبع الفوري، خدمات الموقع',
            payments: 'المدفوعات والربح',
            payments1: 'مشتريات داخل التطبيق، Stripe، PayPal، Google Pay، Apple Pay، Zain Cash، Orange، Umniah، Dinark',
            databases: 'قواعد البيانات',
            databases1: 'SQLite، Firebase Realtime Database، Firestore',
            tools: 'الأدوات وCI/CD',
            tools1: 'Git، GitHub، CI/CD، Fastlane، اختبار، Android SDK، iOS SDK، Xcode، Android Studio',
            tools2: 'Agora (صوت وفيديو)، إشعارات دفع، مصادقة اجتماعية',
            optimization: 'التحسين والأداء',
            optimization1: 'تحسين أداء التطبيق، تقليل الحجم، وحركات الواجهة'
        },
        services: {
            title: 'الخدمات',
            lead: 'ما أقدمه من البداية للنهاية — من إصدارات الجوال إلى لوحات التحكم التي يعتمد عليها فريقك يومياً.',
            app: {
                title: 'تطوير تطبيقات الجوال',
                subtitle: 'تطبيقات Flutter لأندرويد و iOS — بنية، تكاملات، وإصدارات جاهزة للمتاجر.',
                body: 'تطبيقات عبر المنصات بمستوى إنتاج: Clean Architecture، إدارة الحالة، الخرائط، المدفوعات، الميزات الفورية، وCI/CD باتجاه Google Play وApp Store.'
            },
            web: {
                title: 'مواقع ولوحات تحكم إدارية',
                subtitle: 'تطبيقات ويب متجاوبة ولوحات داخلية — تجربة واضحة، أدوار، وبيانات في لمحة.',
                body: 'صفحات هبوط، بوابات عملاء، ولوحات تشغيل متصلة بـ APIs أو Firebase: مصادقة، رسوم بيانية، جداول، وسير عمل يمكّن أصحاب المصلحة من المتابعة والإدارة بسلاسة.'
            }
        },
        projects: {
            title: 'المشاريع',
            lead: 'أعمال مختارة — افتح روابط المتجر أو اطلع على التفاصيل الكاملة للمشروع.',
            storeAndroid: 'أندرويد',
            storeApp: 'App Store',
            viewDetails: 'عرض التفاصيل',
            detailClose: 'إغلاق',
            screenshots: 'لقطات الشاشة',
            tech: 'التقنيات',
            taxi: { name: 'تطبيقا TaxiK و TaxiK Driver', desc: 'تطبيقا راكب وسائق لنقل الطلبات مع خرائط فورية ومزامنة رحلات عبر Firebase وبناء إنتاجي خفيف (~18MB).', l1: 'Flutter و Clean Architecture مع جسر Flutter–Kotlin لميزات أصلية متقدمة.', l2: 'Google Maps و Places للبحث، علامات سائق متحركة بالاتجاه، خطوط المسار، وبث موقع مباشر.', l3: 'مزامنة الرحلات الفورية عبر Firebase Realtime Database / Firestore وتكاملات REST مُحكَمة.', l4: 'CI/CD و Crashlytics و App Aliases واختبارات لإصدار إنتاجي ~18MB.', l5: 'حجز الرحلات والإسناد والتنسيق بين الراكب والسائق جاهز لحركة إنتاجية.', tech: 'Flutter • جسر Kotlin • Clean Architecture • Google Maps و Places • Firebase RTDB / Firestore • REST • CI/CD • Crashlytics' },
            brain: { name: 'تطبيق Brainogram', desc: 'منصة استراتيجيات تداول مدعومة بالذكاء الاصطناعي مع حسابات وإشعارات وأرصدة.', l1: 'بنية Bloc/Cubit و Clean Architecture (SOLID) لتدفقات التداول والحسابات والإشعارات وإدارة الرصيد.', l2: 'مشتريات داخل التطبيق وتجربة Screen Coach / شاشات إرشاد؛ حركات مصقولة وتداول فوري آمن.', tech: 'Flutter • Bloc/Cubit • Clean Architecture • مشتريات داخل التطبيق • واجهات تداول' },
            expert: { name: 'تطبيق Expert World', desc: 'منصة تسويق وحجز خدمات مع صوت وفيديو عالي الجودة.', l1: 'تطبيق متعدد الأدوار للتسويق وحجز الخدمات مع دردشة فورية، تواصل جماعي، صوت وفيديو HD عبر Agora.', l2: 'واجهة مركّزة على الحجز وجداول عبر الخلفية وإشعارات دفع؛ مبني على Clean Architecture.', l3: 'تدفقات كاملة لمقدمي الخدمة والعملاء مع طبقات عرض قابلة للتوسع.', tech: 'Flutter • Clean Architecture • Agora • REST APIs • Firebase • إشعارات دفع' },
            black: { name: 'تطبيق Black Iris', desc: 'تجارة إلكترونية للتجار مع محفظة وخطط وفواتير وطابعة حرارية (~7MB).', l1: 'محفظة وخطط منتجات وفلاتر متقدمة لعمليات الكتالوج والمبيعات.', l2: 'توليد فواتير وتكامل طابعة بدعم عربي/إنجليزي لسير عمل البيع بالتجزئة.', l3: 'بناء محسّن (~7MB) بمكونات قابلة لإعادة الاستخدام واعتماديات منضبطة.', tech: 'Flutter • REST • محفظة • فواتير وطابعة • توطين • SQLite' },
            game: { name: 'تطبيق Gamecard', desc: 'تطبيق تجار لبطاقات ألعاب رقمية مع محفظة ومدفوعات مشغلين محليين.', l1: 'تدفقات مركّزة على المحفظة لبيع بطاقات الألعاب الرقمية وإدارة أرصدة التجار.', l2: 'مسارات دفع إقليمية: Umniah و Orange و Zain و Dinark لشحن سلس.', l3: 'رحلات شراء مبسّطة مع معالجة أخطاء قوية وتجربة مناسبة للتسوية.', tech: 'Flutter • محفظة • Umniah • Orange • Zain • Dinark • REST' },
            flower: { name: 'تطبيق Elegant Flower', desc: 'سوق زهور تجارة إلكترونية كاملة مع تسجيل اجتماعي ودفع متعدد البوابات.', l1: 'تجارة إلكترونية Clean Architecture مع كتالوج وبحث وسلة ودفع مناسب لتجارة الزهور.', l2: 'مصادقة اجتماعية وتكاملات دفع متعددة وواجهات طلب عبر REST.', l3: 'تركيز على الاكتشاف والعروض الموسمية وحالات جدولة التوصيل الموثوقة.', tech: 'Flutter • Clean Architecture • مصادقة اجتماعية • دفع متعدد • REST APIs' },
            nick: { name: 'تطبيق NicknameLab', desc: 'تنسيق نصوص ومولّد ألقاب مع Google Ads وتخزين SQLite دون اتصال.', l1: 'أنماط نصوص ورموز وقوالب ألقاب إبداعية مع مسارات توليد خفيفة.', l2: 'ربح عبر Google Ads: بانر، بيني، ومكافأة.', l3: 'تخزين دون اتصال بـ SQLite ومزامنة سريعة للتفضيلات عند عودة الاتصال.', l4: 'بناء مضغوط وسهل الاستخدام مع ويدجت قابلة لإعادة الاستخدام وبنية منضبطة.', tech: 'Flutter • SQLite • Google Ads' },
            masraf: { name: 'تطبيق مصرفجي', desc: 'تطبيق إدارة مالية مع ألعاب، مكافآت، قسائم، رموز QR، وعملات متعددة.', l1: 'ميزات تفاعل: عجلات مخصصة، نقاط ولاء، وقسائم قابلة للاسترداد.', l2: 'مدفوعات QR وتكامل بوابات خارجية مع التحقق بـ OTP.', l3: 'تتبع مصروفات بعملات متعددة مع تصنيف التجار.', tech: 'Flutter • واجهات دفع • QR • Firebase' },
            wash: { name: 'تطبيقا WashApp و WashApper', desc: 'منصة غسيل وتوصيل عند الطلب للمستخدمين والموصلين والغسالين.', l1: 'تدفقات Flutter كاملة للمستخدمين ومقدمي الخدمة: تنقل بالخرائط، سلة ودفع، خيارات دفع متعددة، محفظة، وتتبع طلبات مباشر.', l2: 'مكونات قابلة لإعادة الاستخدام واعتماديات خفيفة لسرعة البناء وكفاءة حجم التطبيق.', tech: 'Flutter • REST APIs • Stripe • Firebase • خرائط' }
        },
        experience: {
            title: 'الخبرة العملية',
            recovery: {
                role: 'مطور Flutter وقائد فريق',
                company: 'Recovery Jordan — عمان، الأردن',
                date: 'فبراير 2022 – يناير 2026',
                l1: 'قيادة العمليات التقنية الإجمالية: إدارة البنية التحتية والأنظمة والدعم الفني الداخلي.',
                l2: 'إدارة دورة حياة كاملة لأكثر من 8 تطبيقات — من المتطلبات والبنية إلى نشر App Store ومتجر Play.',
                l3: 'التعاون مع المصممين وفرق الخلفية وأصحاب المصلحة لتسليم الحلول في الموعد.',
                l4: 'تقليل حجم التطبيقات حتى 60% ورفع الأداء عبر تحسين الكود وضغط الأصول و App Aliases.'
            },
            freelance: {
                role: 'مطور Flutter مستقل',
                company: 'عملاء في الأردن ودولياً',
                date: 'يناير 2022 – حتى الآن',
                l1: 'تسليم أكثر من 7 تطبيقات Flutter في النقل والتكنولوجيا المالية والتجارة الإلكترونية لعملاء في الأردن ودولياً.',
                l2: 'بناء حلول تتبع فوري تخدم مستخدمين مباشرين على أندرويد و iOS.',
                l3: 'بناء تطبيقات مالية وإدارة تجار.',
                l4: 'تضمين بوابات دفع وخدمات طرف ثالث.'
            }
        },
        education: {
            title: 'التعليم',
            degree: 'بكالوريوس في علوم الحاسوب',
            school: 'جامعة الزرقاء',
            date: 'سبتمبر 2018 – فبراير 2022',
            honors: 'تخرج بمرتبة الشرف',
            langTitle: 'اللغات',
            ar: 'العربية',
            arLevel: 'لغة أم',
            en: 'الإنجليزية',
            enLevel: 'متوسط'
        },
        tools: {
            title: 'الأدوات والتقنيات',
            framework: 'الإطار واللغة',
            backend: 'الخلفية والبيانات',
            mapsRealtime: 'الخرائط والوقت الفعلي',
            payments: 'المدفوعات',
            devops: 'DevOps والنشر',
            ads: 'الإعلانات والجودة'
        },
        themeDark: 'داكن',
        themeLight: 'فاتح',
        themeToggleToDark: 'التبديل إلى الوضع الداكن',
        themeToggleToLight: 'التبديل إلى الوضع الفاتح',
        a11y: { skipToMain: 'تخطي إلى المحتوى الرئيسي' },
        contact: {
            title: 'تواصل',
            panelDirect: 'مباشر',
            panelForm: 'رسالة',
            nameLabel: 'الاسم',
            namePlaceholder: 'اسمك',
            emailLabel: 'البريد الإلكتروني',
            emailPlaceholder: 'your@email.com',
            messageLabel: 'الرسالة',
            messagePlaceholder: 'رسالتك',
            send: 'إرسال'
        },
        footer: {
            copyright: '© 2026 خالد المحاميد',
            subtitle: 'مطور Flutter وتطبيقات الجوال — عمان، الأردن'
        }
    }
};
