/**
 * Translations for EN/AR
 * Default: en (English)
 */

const translations = {
    en: {
        nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', tools: 'Tools', contact: 'Contact' },
        hero: {
            subtitle: 'Flutter Developer',
            intro: 'Flutter developer with 3 years of experience delivering high-performance cross-platform apps for Android and iOS, specialized in Clean Architecture and Bloc/Cubit for building reusable, testable code.',
            intro2: 'Strong experience in real-time features, maps integration, and third-party services, focused on scalable, high-quality, user-centered solutions.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me'
        },
        about: {
            title: 'About Me',
            p1: 'Flutter developer with 3 years of experience delivering high-performance cross-platform apps for Android and iOS, specialized in Clean Architecture and Bloc/Cubit for building reusable, testable code.',
            p2: 'Strong experience in real-time features, maps integration, and third-party services, focused on scalable, high-quality, user-centered solutions.',
            p3: 'Experienced in building production-level apps including ride-hailing systems, e-commerce platforms, service booking systems, and financial applications.'
        },
        skills: {
            title: 'Skills',
            flutter: 'Flutter & Dart',
            flutter1: 'Clean Architecture (Data, Domain, Presentation layers)',
            flutter2: 'State Management: Bloc / Cubit, GetX',
            backend: 'Backend & Services',
            backend1: 'REST APIs',
            backend2: 'Firebase (Auth, Firestore, Cloud Functions)',
            backend3: 'SQLite (local storage)',
            maps: 'Maps & Real-Time',
            maps1: 'Google Maps, Places API & Geolocation',
            maps2: 'Real-time tracking & live updates',
            payments: 'Payment Integrations',
            payments1: 'Stripe, PayPal, Google Pay, Apple Pay',
            payments2: 'Zain Cash, Orange, Umniah, Dinark',
            integrations: 'Integrations',
            int1: 'Social authentication (Google, Facebook, Apple)',
            int2: 'Agora (voice & video calling)',
            int3: 'Push notifications & background location',
            devops: 'DevOps & Soft Skills',
            devops1: 'CI/CD pipelines & Fastlane',
            devops2: 'Performance optimization & app size reduction',
            devops3: 'Git & app deployment (Google Play, App Store)',
            devops4: 'Strong team collaboration'
        },
        projects: {
            title: 'Projects',
            tech: 'Technologies',
            taxi: { name: 'TaxiU & TaxiU Driver Apps', desc: 'Ride-hailing platform (similar to Uber) with dedicated rider and driver apps.', l1: 'Built with Flutter, GetX, and clean architecture, delivering a scalable codebase and optimized app size (~22MB).', l2: 'Implemented Google Maps & Places APIs for live tracking, route directions, custom markers, and location search.', l3: 'Developed custom APIs for ride management and integrated secure payment gateways and OTP verification.', l4: 'Added in-app features: wallet, app/version checkers, internet connectivity handling, push notifications, and real-time ride updates.', l5: 'Delivered full ride-hailing functionality: ride booking, driver assignment, and seamless rider–driver communication.', tech: 'Flutter • GetX • Clean Architecture • Firebase • Google Maps API' },
            wash: { name: 'WashApp & WashApper Apps', desc: 'On-demand laundry and delivery platform for users, couriers, and washers.', l1: 'Developed end-to-end solution for users and service providers, including map-based navigation, cart & checkout, multiple payment options (Stripe, PayPal, Apple/Google Pay), wallet, and order tracking.', l2: 'Optimized app size and performance through reusable widgets and minimal package usage.', tech: 'Flutter • REST APIs • Stripe • Firebase' },
            expert: { name: 'Expert World App', desc: 'Marketing and service booking platform with real-time communication.', l1: 'Implemented a multi-role service booking platform with real-time chat, group communication, calling, and video functionality via Agora.', l2: 'Delivered a clean, intuitive UI with scalable, performance-optimized code for seamless multi-user interactions.', tech: 'Flutter • Agora SDK • Firebase' },
            nick: { name: 'NicknameLab App', desc: 'Text styling and nickname generator app with built-in ads and offline storage.', l1: 'Developed features for generating unique text styles, symbols, and creative nicknames.', l2: 'Integrated Google Ads in three formats: Banner Ads, Interstitial Ads, and Rewarded Ads.', l3: 'Implemented SQLite for offline data storage and efficient retrieval of user preferences.', l4: 'Delivered a lightweight, user-friendly app with scalable, reusable code.', tech: 'Flutter • SQLite • Google Ads' },
            masraf: { name: 'Masrafji App', desc: 'Financial management app with gamification, rewards, vouchers, QR codes, and multi-currency.', l1: 'Added gamification: custom wheels, loyalty points, and vouchers.', l2: 'Integrated QR code payments and third-party payment gateways with OTP verification.', l3: 'Enabled multi-currency expense tracking and merchant categorization.', tech: 'Flutter • Payment APIs • QR code system' },
            black: { name: 'Black Iris App', desc: 'Merchant e-commerce app for selling games and gift cards with wallet, plans, and printing integration (~7MB).', l1: 'Developed wallet management, product plans, and advanced filters for merchants.', l2: 'Implemented seamless card printing functionality for operational efficiency.', l3: 'Delivered a highly optimized, compact app (7MB) with clean, reusable code.', tech: 'Flutter • REST APIs • SQLite' }
        },
        experience: {
            title: 'Professional Experience',
            role: 'Flutter Developer & Team Leader',
            company: 'Recovery Jordan',
            date: 'Feb 2023 – 15 Jan 2026',
            l1: 'Developed high-performance, user-centered mobile applications for Android and iOS using Flutter.',
            l2: 'Collaborated closely with UI/UX designers and backend teams to deliver seamless, scalable solutions.',
            l3: 'Led the development team, managing the full project lifecycle from gathering client requirements to delivering functional, efficient applications.',
            l4: 'Ensured effective communication with clients to understand their needs and translate them into actionable development tasks.'
        },
        education: {
            title: 'Education',
            degree: "Bachelor's Degree in Computer Science",
            school: 'Zarqa University',
            date: 'Sep 2018 – Feb 2022',
            langTitle: 'Languages',
            ar: 'Arabic',
            arLevel: 'Native',
            en: 'English',
            enLevel: 'Proficient'
        },
        contact: {
            title: 'Contact',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'your@email.com',
            messageLabel: 'Message',
            messagePlaceholder: 'Your message',
            send: 'Send'
        },
        tools: { title: 'Tools & Technologies' },
        footer: {
            copyright: '© 2026 Khaled Almahamid',
            subtitle: 'Flutter Developer — Amman, Jordan'
        }
    },
    ar: {
        nav: { about: 'نبذة', skills: 'المهارات', projects: 'المشاريع', experience: 'الخبرة', education: 'التعليم', tools: 'الأدوات', contact: 'تواصل' },
        hero: {
            subtitle: 'مطور Flutter',
            intro: 'مطور Flutter بخبرة 3 سنوات في تقديم تطبيقات عالية الأداء عبر منصات أندرويد و iOS، متخصص في Clean Architecture و Bloc/Cubit لبناء كود قابل لإعادة الاستخدام والاختبار.',
            intro2: 'خبرة قوية في الميزات الفورية، تكامل الخرائط، والخدمات الخارجية، مع التركيز على حلول قابلة للتوسع وعالية الجودة ومركزة على المستخدم.',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي'
        },
        about: {
            title: 'نبذة عني',
            p1: 'مطور Flutter بخبرة 3 سنوات في تقديم تطبيقات عالية الأداء عبر منصات أندرويد و iOS، متخصص في Clean Architecture و Bloc/Cubit لبناء كود قابل لإعادة الاستخدام والاختبار.',
            p2: 'خبرة قوية في الميزات الفورية، تكامل الخرائط، والخدمات الخارجية، مع التركيز على حلول قابلة للتوسع وعالية الجودة ومركزة على المستخدم.',
            p3: 'خبرة في بناء تطبيقات إنتاجية تشمل أنظمة النقل، منصات التجارة الإلكترونية، أنظمة حجز الخدمات، والتطبيقات المالية.'
        },
        skills: {
            title: 'المهارات',
            flutter: 'Flutter و Dart',
            flutter1: 'Clean Architecture (طبقات Data, Domain, Presentation)',
            flutter2: 'إدارة الحالة: Bloc / Cubit, GetX',
            backend: 'الخلفية والخدمات',
            backend1: 'REST APIs',
            backend2: 'Firebase (Auth, Firestore, Cloud Functions)',
            backend3: 'SQLite (تخزين محلي)',
            maps: 'الخرائط والوقت الفعلي',
            maps1: 'Google Maps, Places API و Geolocation',
            maps2: 'التتبع الفوري والتحديثات المباشرة',
            payments: 'تكامل الدفع',
            payments1: 'Stripe, PayPal, Google Pay, Apple Pay',
            payments2: 'Zain Cash, Orange, Umniah, Dinark',
            integrations: 'التكاملات',
            int1: 'المصادقة الاجتماعية (Google, Facebook, Apple)',
            int2: 'Agora (مكالمات صوتية وفيديو)',
            int3: 'الإشعارات وتتبع الموقع في الخلفية',
            devops: 'DevOps والمهارات الناعمة',
            devops1: 'CI/CD و Fastlane',
            devops2: 'تحسين الأداء وتقليل حجم التطبيق',
            devops3: 'Git ونشر التطبيق (Google Play, App Store)',
            devops4: 'تعاون قوي مع الفريق'
        },
        projects: {
            title: 'المشاريع',
            tech: 'التقنيات',
            taxi: { name: 'تطبيقا TaxiU و TaxiU Driver', desc: 'منصة نقل مشابهة لـ Uber مع تطبيقات مخصصة للركاب والسائقين.', l1: 'بُني بـ Flutter و GetX و Clean Architecture، مع كود قابل للتوسع وحجم تطبيق محسّن (~22MB).', l2: 'تنفيذ Google Maps و Places APIs للتتبع المباشر، اتجاهات المسار، العلامات المخصصة، والبحث عن المواقع.', l3: 'تطوير APIs مخصصة لإدارة الرحلات وتكامل بوابات الدفع الآمنة والتحقق بـ OTP.', l4: 'إضافة ميزات: المحفظة، فحص التطبيق/الإصدار، التعامل مع الاتصال، الإشعارات، وتحديثات الرحلات الفورية.', l5: 'تقديم وظائف النقل الكاملة: حجز الرحلات، تعيين السائق، والتواصل السلس بين الراكب والسائق.', tech: 'Flutter • GetX • Clean Architecture • Firebase • Google Maps API' },
            wash: { name: 'تطبيقا WashApp و WashApper', desc: 'منصة غسيل وتوصيل عند الطلب للمستخدمين والموصلين والغسالين.', l1: 'تطوير حل متكامل للمستخدمين ومقدمي الخدمات، يشمل التنقل بالخرائط، السلة والدفع، خيارات دفع متعددة، المحفظة، وتتبع الطلبات.', l2: 'تحسين حجم وأداء التطبيق من خلال مكونات قابلة لإعادة الاستخدام واستخدام حد أدنى من الحزم.', tech: 'Flutter • REST APIs • Stripe • Firebase' },
            expert: { name: 'تطبيق Expert World', desc: 'منصة تسويق وحجز خدمات مع تواصل فوري.', l1: 'تنفيذ منصة حجز خدمات متعددة الأدوار مع دردشة فورية، تواصل جماعي، مكالمات، وفيديو عبر Agora.', l2: 'تقديم واجهة نظيفة وبديهية مع كود قابل للتوسع ومحسّن للأداء.', tech: 'Flutter • Agora SDK • Firebase' },
            nick: { name: 'تطبيق NicknameLab', desc: 'تطبيق تنسيق النصوص والألقاب مع إعلانات وتخزين دون اتصال.', l1: 'تطوير ميزات لتوليد أنماط نصوص فريدة ورموز وألقاب إبداعية.', l2: 'تكامل Google Ads بثلاث صيغ: إعلانات بانر، بين الصفحات، ومكافأة.', l3: 'تنفيذ SQLite للتخزين دون اتصال واسترجاع تفضيلات المستخدم بكفاءة.', l4: 'تقديم تطبيق خفيف وسهل الاستخدام مع كود قابل للتوسع وإعادة الاستخدام.', tech: 'Flutter • SQLite • Google Ads' },
            masraf: { name: 'تطبيق مصرفجي', desc: 'تطبيق إدارة مالية مع ألعاب، مكافآت، قسائم، رموز QR، وعملات متعددة.', l1: 'إضافة ألعاب: عجلات مخصصة، نقاط ولاء، وقسائم.', l2: 'تكامل مدفوعات QR وبوابات دفع خارجية مع التحقق بـ OTP.', l3: 'تفعيل تتبع المصروفات بعملات متعددة وتصنيف التجار.', tech: 'Flutter • Payment APIs • QR code system' },
            black: { name: 'تطبيق Black Iris', desc: 'تطبيق تجارة إلكترونية للتجار لبيع الألعاب وبطاقات الهدايا مع محفظة وخطط وطباعة (~7MB).', l1: 'تطوير إدارة المحفظة، خطط المنتجات، وفلاتر متقدمة للتجار.', l2: 'تنفيذ طباعة البطاقات بسلاسة للكفاءة التشغيلية.', l3: 'تقديم تطبيق محسّن ومضغوط (7MB) مع كود نظيف وقابل لإعادة الاستخدام.', tech: 'Flutter • REST APIs • SQLite' }
        },
        experience: {
            title: 'الخبرة المهنية',
            role: 'مطور Flutter وقائد فريق',
            company: 'Recovery Jordan',
            date: 'فبراير 2023 – 15 يناير 2026',
            l1: 'تطوير تطبيقات جوال عالية الأداء ومركزة على المستخدم لأندرويد و iOS باستخدام Flutter.',
            l2: 'التعاون الوثيق مع مصممي UI/UX وفرق الخلفية لتقديم حلول سلسة وقابلة للتوسع.',
            l3: 'قيادة فريق التطوير، إدارة دورة حياة المشروع من جمع متطلبات العميل إلى تقديم تطبيقات وظيفية وفعالة.',
            l4: 'ضمان التواصل الفعال مع العملاء لفهم احتياجاتهم وترجمتها إلى مهام تطوير قابلة للتنفيذ.'
        },
        education: {
            title: 'التعليم',
            degree: 'بكالوريوس في علوم الحاسوب',
            school: 'جامعة الزرقاء',
            date: 'سبتمبر 2018 – فبراير 2022',
            langTitle: 'اللغات',
            ar: 'العربية',
            arLevel: 'لغة أم',
            en: 'الإنجليزية',
            enLevel: 'متمكن'
        },
        tools: { title: 'الأدوات والتقنيات' },
        contact: {
            title: 'تواصل',
            nameLabel: 'الاسم',
            namePlaceholder: 'اسمك',
            emailLabel: 'البريد الإلكتروني',
            emailPlaceholder: 'بريدك@الإلكتروني.com',
            messageLabel: 'الرسالة',
            messagePlaceholder: 'رسالتك',
            send: 'إرسال'
        },
        footer: {
            copyright: '© 2026 خالد المحاميد',
            subtitle: 'مطور Flutter — عمان، الأردن'
        }
    }
};
