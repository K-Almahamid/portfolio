/**
 * Translations for EN/AR
 * Default: en (English)
 */

const translations = {
    en: {
        nav: { about: 'About', skills: 'Skills', services: 'Services', projects: 'Projects', experience: 'Experience', education: 'Education', tools: 'Tools', contact: 'Contact' },
        common: { name: 'Khaled Almahamid' },
        hero: {
            subtitle: 'Senior Flutter Developer',
            intro: '4+ years building production Android & iOS apps with end-to-end ownership — from architecture and APIs through CI/CD and store release.',
            tech: 'Flutter · Bloc/Cubit · Clean Architecture · Backend APIs · PostgreSQL · Firebase · CI/CD',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            downloadCV: 'Download CV'
        },
        about: {
            title: 'About Me',
            p1: 'Senior Flutter Developer with 4+ years of professional experience building production Android and iOS applications across ride-hailing, fintech, and e-commerce.',
            p2: 'Specializes in Clean Architecture, Bloc/Cubit, and reusable, maintainable mobile codebases — with hands-on experience in REST API integration, Firebase, payment systems, and real-time application features.',
            p3: 'Comfortable owning products end-to-end from architecture and CI/CD through production deployment, with experience extending into backend development (Node.js, Python/FastAPI) and AI-assisted development tools when a project calls for it.'
        },
        skills: {
            title: 'Skills',
            mobile: 'Mobile Development',
            mobile1: 'Flutter, Dart, Bloc, Cubit, Clean Architecture, Android, iOS, Kotlin',
            backend: 'Backend Development',
            backend1: 'Node.js, NestJS, Python, FastAPI, REST APIs, PostgreSQL, Redis',
            firebase: 'Firebase & Mobile Services',
            firebase1: 'Firebase Authentication, Firestore, Realtime Database, Cloud Functions, Crashlytics, Push Notifications / FCM',
            maps: 'Maps & Real-Time',
            maps1: 'Google Maps API, Places API, Real-time Tracking, Location Services',
            payments: 'Payments & Monetization',
            payments1: 'RevenueCat, In-App Purchases, Stripe, PayPal, Apple Pay, Google Pay, Zain Cash, Orange Umniah, Dinark',
            infrastructure: 'Data & Infrastructure',
            infrastructure1: 'PostgreSQL, Redis, Docker, SQLite',
            tools: 'DevOps & CI/CD',
            tools1: 'Git, GitHub Actions, CI/CD, Fastlane, Shorebird, Docker, unit, widget & integration testing',
            tools2: 'Production deployment, performance optimization, Android SDK, iOS SDK, Xcode, Android Studio',
            ai: 'AI & AI-Assisted Development',
            ai1: 'AI-assisted coding, prompt engineering, code generation, AI-based debugging, refactoring, and development workflow acceleration'
        },
        services: {
            title: 'Services',
            lead: 'What I deliver end to end — from mobile architecture and store releases to backend APIs and dashboards your team can run day to day.',
            app: {
                title: 'Mobile App Development',
                subtitle: 'Flutter apps for Android & iOS — architecture, integrations, and store-ready builds.',
                body: 'Production-grade cross-platform apps: Clean Architecture, Bloc/Cubit state management, REST APIs, maps, payments, real-time features, and CI/CD toward Google Play and the App Store.'
            },
            web: {
                title: 'Backend APIs & Dashboards',
                subtitle: 'REST APIs, admin dashboards, and web clients — clear UX, roles, and data at a glance.',
                body: 'Backend services with Node.js, NestJS, Python, or FastAPI — REST endpoints, PostgreSQL data models, Redis caching, and authentication workflows — plus operator dashboards wired to your APIs or Firebase.'
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
            brain: {
                name: 'Brainogram',
                desc: 'Full-stack AI trading platform for Gold & Silver markets — Flutter mobile, FastAPI backend, and real-time analysis pipeline.',
                l1: 'Owned end-to-end delivery of a cross-platform trading product — Flutter mobile client with Bloc/Cubit and Clean Architecture.',
                l2: 'Built the FastAPI backend with PostgreSQL and Redis — REST APIs, authentication, credit management, and trading workflows.',
                l3: 'Implemented an AI market-analysis pipeline with multiple strategies that delivers trading signals to clients in real time.',
                l4: 'Shipped with RevenueCat monetization, Firebase services, Docker containerization, and CI/CD to production VPS infrastructure.',
                tech: 'Flutter • FastAPI • PostgreSQL • Redis • AI Pipeline • RevenueCat • Firebase • Docker • CI/CD'
            },
            taxi: {
                name: 'TaxiK & TaxiK Driver Apps',
                desc: 'Ride-hailing platform with rider and driver apps — live maps, real-time tracking, and lean ~18MB builds.',
                l1: 'Engineered with Flutter using Clean Architecture and a Flutter–Native bridge (Kotlin) for advanced native features.',
                l2: 'Google Maps & Places for location search, custom animated markers, route polylines, and live location streaming.',
                l3: 'Real-time ride sync via Firebase Realtime Database / Firestore plus hardened REST API integrations.',
                l4: 'CI/CD, Crashlytics, App Aliases, and unit & integration testing to ship a ~18MB production build.',
                l5: 'Smooth driver marker animation with bearing and live location streaming for real-time tracking accuracy.',
                tech: 'Flutter • Kotlin bridge • Clean Architecture • Google Maps & Places • Firebase RTDB / Firestore • REST • CI/CD • Crashlytics'
            },
            expert: {
                name: 'Expert World App',
                desc: 'Marketing & service booking platform with real-time chat, video & voice calls.',
                l1: 'Built a multi-role app with real-time chat, video & voice calls via Agora.',
                l2: 'Designed scalable UI/UX for service booking, notifications, and interactions, connecting backend APIs for booking management and push notifications.',
                l3: 'Leveraged Clean Architecture for maintainable, reusable code across provider and customer flows.',
                tech: 'Flutter • Clean Architecture • Agora • REST APIs • Firebase • Push notifications'
            },
            black: {
                name: 'Black Iris App',
                desc: 'Merchant e-commerce platform with wallet, product plans, invoices, and thermal printer integration (~7MB).',
                l1: 'Built an e-commerce merchant app with wallet, product plans, and advanced filters.',
                l2: 'Launched invoice generation & printer integration with Arabic/English support for retail workflows.',
                l3: 'Trimmed app size to ~7MB and enhanced performance with reusable components.',
                tech: 'Flutter • REST • Wallet • Invoicing & printer • Localization • SQLite'
            },
            game: {
                name: 'Gamecard App',
                desc: 'Merchant app for selling digital game cards with wallet management and local payment integrations.',
                l1: 'Engineered a digital game card sales app with wallet management for merchant balances.',
                l2: 'Embedded regional payment paths: Umniah, Orange, Zain Cash, and Dinark for frictionless top-ups.',
                l3: 'Streamlined purchase journeys with robust error handling and reconciliation-friendly UX.',
                tech: 'Flutter • Wallet • Umniah • Orange • Zain Cash • Dinark • REST'
            },
            flower: {
                name: 'Elegant Flower App',
                desc: 'Full e-commerce flower marketplace with social login and multi-gateway checkout.',
                l1: 'Clean Architecture e-commerce with catalog, search, cart, and checkout tuned for floral retail.',
                l2: 'Social authentication plus multi-payment gateway integrations and REST-backed order APIs.',
                l3: 'UI/UX emphasis on discovery, seasonal promos, and reliable delivery scheduling states.',
                tech: 'Flutter • Clean Architecture • Social auth • Multi-payment • REST APIs'
            },
            nick: {
                name: 'NicknameLab App',
                desc: 'Text styling and nickname generator with Google Ads and offline SQLite storage.',
                l1: 'Creative text styles, symbols, and nickname presets with lightweight generation pipelines.',
                l2: 'Google Ads monetization across banner, interstitial, and rewarded placements.',
                l3: 'SQLite-backed offline storage with fast preference sync when connectivity returns.',
                l4: 'Compact, user-friendly build with reusable widgets and disciplined architecture.',
                tech: 'Flutter • SQLite • Google Ads'
            },
            masraf: {
                name: 'Masrafji App',
                desc: 'Personal finance app with games, rewards, vouchers, QR flows, and multi-currency tracking.',
                l1: 'Engagement layer: custom spin wheels, loyalty points, and redeemable vouchers.',
                l2: 'QR payments and external gateway integrations with OTP verification.',
                l3: 'Multi-currency expense tracking with merchant categorization.',
                tech: 'Flutter • Payment APIs • QR • Firebase'
            },
            wash: {
                name: 'WashApp & WashApper Apps',
                desc: 'On-demand laundry and delivery platform for customers, couriers, and laundry partners.',
                l1: 'Full Flutter flows for users and providers: map navigation, cart & checkout, multiple payment options, wallet, and live order tracking.',
                l2: 'Lean, reusable components and minimal dependencies to keep builds fast and app size efficient.',
                tech: 'Flutter • REST APIs • Stripe • Firebase • Maps'
            }
        },
        experience: {
            title: 'Work Experience',
            boj: {
                role: 'Senior Flutter Developer',
                company: 'Bank of Jordan',
                date: 'May 2026 – Present',
                l1: 'Leading enterprise app migration to Clean Architecture and BLoC, refactoring legacy code into a modular codebase.',
                l2: 'Designing reusable foundations, shared components, and standardized patterns across the project.',
                l3: 'Developing features, integrating REST APIs, optimizing performance, and resolving production issues.'
            },
            tsme: {
                role: 'Senior Flutter Developer',
                company: 'TSME',
                date: 'May 2026 – Present',
                l1: 'Planning and implementing features for a production Flutter app built with Clean Architecture and BLoC.',
                l2: 'Owning the feature lifecycle — requirements, API integration, performance, and production fixes.',
                l3: 'Delivering production-ready updates while maintaining clean, maintainable code.'
            },
            hrglobal: {
                role: 'Senior Flutter Developer',
                company: 'HR Global',
                date: 'Apr 2026 – Aug 2026',
                l1: 'Maintained multiple production apps built with Clean Architecture as the sole mobile developer.',
                l2: 'Fixed bugs, shipped new features, and built new mobile applications from scratch.',
                l3: 'Owned the mobile development lifecycle end-to-end for assigned products.'
            },
            recovery: {
                role: 'Flutter Developer & Team Leader',
                company: 'Recovery Jordan',
                date: 'Feb 2022 – Jan 2026',
                l1: 'Managed the full lifecycle of 8+ applications — from requirements and architecture to App Store and Google Play deployment.',
                l2: 'Collaborated with designers, backend teams, and stakeholders to deliver solutions on schedule.',
                l3: 'Cut app sizes by up to 60% and improved performance through code optimization, asset compression, and App Aliases.'
            },
            freelance: {
                role: 'Flutter Developer',
                company: 'Freelance',
                date: 'Jan 2022 – Present',
                l1: 'Delivered 7+ Flutter apps across ride-hailing, fintech, and e-commerce for clients in Jordan and internationally.',
                l2: 'Built real-time tracking and financial/merchant management applications.',
                l3: 'Integrated payment gateways and third-party services.'
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
            enLevel: 'Upper-Intermediate'
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
            mobile: 'Mobile',
            backend: 'Backend',
            infrastructure: 'Data & Infrastructure',
            cloud: 'Cloud & Services',
            payments: 'Payments',
            mapsRealtime: 'Maps & Real-time'
        },
        themeDark: 'Dark',
        themeLight: 'Light',
        themeToggleToDark: 'Switch to dark mode',
        themeToggleToLight: 'Switch to light mode',
        a11y: { skipToMain: 'Skip to main content' },
        footer: {
            copyright: '© 2026 Khaled Almahamid',
            subtitle: 'Senior Flutter Developer — Amman, Jordan'
        }
    },
    ar: {
        nav: { about: 'نبذة', skills: 'المهارات', services: 'الخدمات', projects: 'المشاريع', experience: 'الخبرة', education: 'التعليم', tools: 'الأدوات', contact: 'تواصل' },
        common: { name: 'خالد المحاميد' },
        hero: {
            subtitle: 'مطور Flutter أول',
            intro: 'أكثر من 4 سنوات في بناء تطبيقات أندرويد و iOS إنتاجية مع امتلاك المنتج من الطرف إلى الطرف — من البنية وواجهات API حتى CI/CD وإطلاق المتاجر.',
            tech: 'Flutter · Bloc/Cubit · Clean Architecture · Backend APIs · PostgreSQL · Firebase · CI/CD',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي',
            downloadCV: 'تحميل السيرة الذاتية'
        },
        about: {
            title: 'نبذة عني',
            p1: 'مطور Flutter أول بأكثر من 4 سنوات من الخبرة المهنية في بناء تطبيقات أندرويد و iOS إنتاجية في مجالات النقل والتكنولوجيا المالية والتجارة الإلكترونية.',
            p2: 'متخصص في Clean Architecture و Bloc/Cubit وقواعد كود جوال قابلة لإعادة الاستخدام والصيانة — مع خبرة عملية في تكامل REST API و Firebase وأنظمة الدفع وميزات التطبيقات الفورية.',
            p3: 'مرتاح في امتلاك المنتجات من الطرف إلى الطرف من البنية وCI/CD حتى النشر الإنتاجي، مع خبرة تمتد إلى تطوير الخلفية (Node.js و Python/FastAPI) وأدوات التطوير المدعومة بالذكاء الاصطناعي عند الحاجة.'
        },
        skills: {
            title: 'المهارات',
            mobile: 'تطوير الجوال',
            mobile1: 'Flutter، Dart، Bloc، Cubit، Clean Architecture، Android، iOS، Kotlin',
            backend: 'تطوير الخلفية',
            backend1: 'Node.js، NestJS، Python، FastAPI، REST APIs، PostgreSQL، Redis',
            firebase: 'Firebase وخدمات الجوال',
            firebase1: 'Firebase Authentication، Firestore، Realtime Database، Cloud Functions، Crashlytics، إشعارات الدفع / FCM',
            maps: 'الخرائط والوقت الفعلي',
            maps1: 'Google Maps API، Places API، التتبع الفوري، خدمات الموقع',
            payments: 'المدفوعات والربح',
            payments1: 'RevenueCat، مشتريات داخل التطبيق، Stripe، PayPal، Apple Pay، Google Pay، Zain Cash، Orange Umniah، Dinark',
            infrastructure: 'البيانات والبنية التحتية',
            infrastructure1: 'PostgreSQL، Redis، Docker، SQLite',
            tools: 'DevOps وCI/CD',
            tools1: 'Git، GitHub Actions، CI/CD، Fastlane، Shorebird، Docker، اختبار الوحدة والويدجت والتكامل',
            tools2: 'النشر الإنتاجي، تحسين الأداء، Android SDK، iOS SDK، Xcode، Android Studio',
            ai: 'الذكاء الاصطناعي والتطوير المدعوم به',
            ai1: 'برمجة مدعومة بالذكاء الاصطناعي، هندسة الأوامر، توليد الكود، تصحيح الأخطاء بالذكاء الاصطناعي، إعادة الهيكلة، وتسريع سير عمل التطوير'
        },
        services: {
            title: 'الخدمات',
            lead: 'ما أقدمه من البداية للنهاية — من بنية الجوال وإصدارات المتاجر إلى واجهات API الخلفية ولوحات التحكم التي يعتمد عليها فريقك يومياً.',
            app: {
                title: 'تطوير تطبيقات الجوال',
                subtitle: 'تطبيقات Flutter لأندرويد و iOS — بنية، تكاملات، وإصدارات جاهزة للمتاجر.',
                body: 'تطبيقات عبر المنصات بمستوى إنتاج: Clean Architecture، إدارة الحالة Bloc/Cubit، REST APIs، الخرائط، المدفوعات، الميزات الفورية، وCI/CD باتجاه Google Play وApp Store.'
            },
            web: {
                title: 'واجهات API خلفية ولوحات تحكم',
                subtitle: 'REST APIs ولوحات إدارية وعملاء ويب — تجربة واضحة، أدوار، وبيانات في لمحة.',
                body: 'خدمات خلفية بـ Node.js أو NestJS أو Python أو FastAPI — نقاط نهاية REST، نماذج بيانات PostgreSQL، تخزين مؤقت Redis، وسير عمل المصادقة — بالإضافة إلى لوحات تشغيل متصلة بـ APIs أو Firebase.'
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
            brain: {
                name: 'Brainogram',
                desc: 'منصة تداول بالذكاء الاصطناعي متكاملة لأسواق الذهب والفضة — تطبيق Flutter، خلفية FastAPI، وخط تحليل فوري.',
                l1: 'امتلاك التسليم الشامل لمنتج تداول عبر المنصات — عميل Flutter مع Bloc/Cubit و Clean Architecture.',
                l2: 'بناء الخلفية بـ FastAPI مع PostgreSQL و Redis — REST APIs والمصادقة وإدارة الرصيد وسير عمل التداول.',
                l3: 'تنفيذ خط تحليل سوق بالذكاء الاصطناعي باستراتيجيات متعددة يقدم إشارات تداول للعملاء في الوقت الفعلي.',
                l4: 'إطلاق مع RevenueCat وخدمات Firebase وDocker وCI/CD على بنية VPS إنتاجية.',
                tech: 'Flutter • FastAPI • PostgreSQL • Redis • AI Pipeline • RevenueCat • Firebase • Docker • CI/CD'
            },
            taxi: {
                name: 'تطبيقا TaxiK و TaxiK Driver',
                desc: 'منصة نقل طلبات مع تطبيقي راكب وسائق — خرائط فورية، تتبع مباشر، وبناء إنتاجي خفيف (~18MB).',
                l1: 'هندسة بـ Flutter باستخدام Clean Architecture وجسر Flutter–Native (Kotlin) لميزات أصلية متقدمة.',
                l2: 'Google Maps و Places للبحث عن الموقع، علامات متحركة مخصصة، خطوط المسار، وبث موقع مباشر.',
                l3: 'مزامنة الرحلات الفورية عبر Firebase Realtime Database / Firestore وتكاملات REST API مُحكَمة.',
                l4: 'CI/CD و Crashlytics و App Aliases واختبارات وحدة وتكامل لإصدار إنتاجي ~18MB.',
                l5: 'حركة سلسة لعلامة السائق بالاتجاه وبث موقع مباشر لدقة التتبع الفوري.',
                tech: 'Flutter • جسر Kotlin • Clean Architecture • Google Maps و Places • Firebase RTDB / Firestore • REST • CI/CD • Crashlytics'
            },
            expert: {
                name: 'تطبيق Expert World',
                desc: 'منصة تسويق وحجز خدمات مع دردشة فورية ومكالمات فيديو وصوت.',
                l1: 'بناء تطبيق متعدد الأدوار مع دردشة فورية ومكالمات فيديو وصوت عبر Agora.',
                l2: 'تصميم واجهة قابلة للتوسع لحجز الخدمات والإشعارات والتفاعلات، مع ربط APIs الخلفية لإدارة الحجوزات وإشعارات الدفع.',
                l3: 'الاعتماد على Clean Architecture لكود قابل للصيانة وإعادة الاستخدام عبر تدفقات مقدمي الخدمة والعملاء.',
                tech: 'Flutter • Clean Architecture • Agora • REST APIs • Firebase • إشعارات دفع'
            },
            black: {
                name: 'تطبيق Black Iris',
                desc: 'منصة تجارة إلكترونية للتجار مع محفظة وخطط منتجات وفواتير وتكامل طابعة حرارية (~7MB).',
                l1: 'بناء تطبيق تجارة إلكترونية للتجار مع محفظة وخطط منتجات وفلاتر متقدمة.',
                l2: 'إطلاق توليد الفواتير وتكامل الطابعة بدعم عربي/إنجليزي لسير عمل البيع بالتجزئة.',
                l3: 'تقليل حجم التطبيق إلى ~7MB وتحسين الأداء بمكونات قابلة لإعادة الاستخدام.',
                tech: 'Flutter • REST • محفظة • فواتير وطابعة • توطين • SQLite'
            },
            game: {
                name: 'تطبيق Gamecard',
                desc: 'تطبيق تجار لبيع بطاقات ألعاب رقمية مع إدارة محفظة ومدفوعات محلية.',
                l1: 'هندسة تطبيق مبيعات بطاقات ألعاب رقمية مع إدارة محفظة لأرصدة التجار.',
                l2: 'مسارات دفع إقليمية: Umniah و Orange و Zain Cash و Dinark لشحن سلس.',
                l3: 'رحلات شراء مبسّطة مع معالجة أخطاء قوية وتجربة مناسبة للتسوية.',
                tech: 'Flutter • محفظة • Umniah • Orange • Zain Cash • Dinark • REST'
            },
            flower: {
                name: 'تطبيق Elegant Flower',
                desc: 'سوق زهور تجارة إلكترونية كاملة مع تسجيل اجتماعي ودفع متعدد البوابات.',
                l1: 'تجارة إلكترونية Clean Architecture مع كتالوج وبحث وسلة ودفع مناسب لتجارة الزهور.',
                l2: 'مصادقة اجتماعية وتكاملات دفع متعددة وواجهات طلب عبر REST.',
                l3: 'تركيز على الاكتشاف والعروض الموسمية وحالات جدولة التوصيل الموثوقة.',
                tech: 'Flutter • Clean Architecture • مصادقة اجتماعية • دفع متعدد • REST APIs'
            },
            nick: {
                name: 'تطبيق NicknameLab',
                desc: 'تنسيق نصوص ومولّد ألقاب مع Google Ads وتخزين SQLite دون اتصال.',
                l1: 'أنماط نصوص ورموز وقوالب ألقاب إبداعية مع مسارات توليد خفيفة.',
                l2: 'ربح عبر Google Ads: بانر، بيني، ومكافأة.',
                l3: 'تخزين دون اتصال بـ SQLite ومزامنة سريعة للتفضيلات عند عودة الاتصال.',
                l4: 'بناء مضغوط وسهل الاستخدام مع ويدجت قابلة لإعادة الاستخدام وبنية منضبطة.',
                tech: 'Flutter • SQLite • Google Ads'
            },
            masraf: {
                name: 'تطبيق مصرفجي',
                desc: 'تطبيق إدارة مالية مع ألعاب، مكافآت، قسائم، رموز QR، وعملات متعددة.',
                l1: 'ميزات تفاعل: عجلات مخصصة، نقاط ولاء، وقسائم قابلة للاسترداد.',
                l2: 'مدفوعات QR وتكامل بوابات خارجية مع التحقق بـ OTP.',
                l3: 'تتبع مصروفات بعملات متعددة مع تصنيف التجار.',
                tech: 'Flutter • واجهات دفع • QR • Firebase'
            },
            wash: {
                name: 'تطبيقا WashApp و WashApper',
                desc: 'منصة غسيل وتوصيل عند الطلب للمستخدمين والموصلين والغسالين.',
                l1: 'تدفقات Flutter كاملة للمستخدمين ومقدمي الخدمة: تنقل بالخرائط، سلة ودفع، خيارات دفع متعددة، محفظة، وتتبع طلبات مباشر.',
                l2: 'مكونات قابلة لإعادة الاستخدام واعتماديات خفيفة لسرعة البناء وكفاءة حجم التطبيق.',
                tech: 'Flutter • REST APIs • Stripe • Firebase • خرائط'
            }
        },
        experience: {
            title: 'الخبرة العملية',
            boj: {
                role: 'مطور Flutter أول',
                company: 'بنك الأردن',
                date: 'مايو 2026 – حتى الآن',
                l1: 'قيادة ترحيل تطبيق مؤسسي نحو Clean Architecture و BLoC وإعادة هيكلة الكود القديم إلى قاعدة معيارية.',
                l2: 'تصميم أسس قابلة لإعادة الاستخدام ومكونات مشتركة وأنماط موحدة عبر المشروع.',
                l3: 'تطوير الميزات وتكامل REST APIs وتحسين الأداء وحل مشاكل الإنتاج.'
            },
            tsme: {
                role: 'مطور Flutter أول',
                company: 'TSME',
                date: 'مايو 2026 – حتى الآن',
                l1: 'تخطيط وتنفيذ ميزات لتطبيق Flutter إنتاجي مبني على Clean Architecture و BLoC.',
                l2: 'امتلاك دورة حياة الميزة — المتطلبات وتكامل API والأداء وإصلاحات الإنتاج.',
                l3: 'تسليم تحديثات جاهزة للإنتاج مع الحفاظ على كود نظيف قابل للصيانة.'
            },
            hrglobal: {
                role: 'مطور Flutter أول',
                company: 'HR Global',
                date: 'أبريل 2026 – أغسطس 2026',
                l1: 'صيانة عدة تطبيقات إنتاجية مبنية على Clean Architecture كمطور جوال وحيد.',
                l2: 'إصلاح الأخطاء وشحن ميزات جديدة وبناء تطبيقات جوال جديدة من الصفر.',
                l3: 'امتلاك دورة حياة تطوير الجوال من الطرف إلى الطرف للمنتجات المسندة.'
            },
            recovery: {
                role: 'مطور Flutter وقائد فريق',
                company: 'Recovery Jordan',
                date: 'فبراير 2022 – يناير 2026',
                l1: 'إدارة دورة حياة كاملة لأكثر من 8 تطبيقات — من المتطلبات والبنية إلى نشر App Store و Google Play.',
                l2: 'التعاون مع المصممين وفرق الخلفية وأصحاب المصلحة لتسليم الحلول في الموعد.',
                l3: 'تقليل حجم التطبيقات حتى 60% وتحسين الأداء عبر تحسين الكود وضغط الأصول و App Aliases.'
            },
            freelance: {
                role: 'مطور Flutter',
                company: 'عمل حر',
                date: 'يناير 2022 – حتى الآن',
                l1: 'تسليم أكثر من 7 تطبيقات Flutter في النقل والتكنولوجيا المالية والتجارة الإلكترونية لعملاء في الأردن ودولياً.',
                l2: 'بناء تطبيقات تتبع فوري وإدارة مالية وتجارية.',
                l3: 'تكامل بوابات دفع وخدمات طرف ثالث.'
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
            enLevel: 'فوق المتوسط'
        },
        tools: {
            title: 'الأدوات والتقنيات',
            mobile: 'الجوال',
            backend: 'الخلفية',
            infrastructure: 'البيانات والبنية التحتية',
            cloud: 'السحابة والخدمات',
            payments: 'المدفوعات',
            mapsRealtime: 'الخرائط والوقت الفعلي'
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
            subtitle: 'مطور Flutter أول — عمان، الأردن'
        }
    }
};
