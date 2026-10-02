/**
 * Portfolio concept project copy (EN). Merged into translations after i18n.js loads.
 */
(function mergeProjectContent() {
    if (typeof translations === 'undefined') return;

    const enProjects = {
        screenshotsWeb: 'Website',
        screenshotsMobile: 'Mobile App',
        screenshotsDashboard: 'Web Dashboard',
        bookly: {
            name: 'BOOKLY — Booking & Scheduling Platform',
            subtitle: 'Book Time For What Matters.',
            cardDesc:
                'BOOKLY is a modern booking and scheduling platform designed to help users discover and book trusted local services with ease. The platform brings service discovery, provider profiles, appointment scheduling, and booking management into one seamless experience. Designed for the Jordanian market, BOOKLY allows users to explore services across beauty & wellness, healthcare, fitness, professional services, and lifestyle categories..',
            cardLead: 'Book Time For What Matters.',
            body:
                'BOOKLY is a modern booking and scheduling platform designed to help users discover and book trusted local services with ease. The platform brings service discovery, provider profiles, appointment scheduling, and booking management into one seamless experience.\n\nDesigned for the Jordanian market, BOOKLY allows users to explore services across beauty & wellness, healthcare, fitness, professional services, and lifestyle categories, select a provider, choose a convenient date and time, and manage their appointments from one place.\n\nThe experience is designed across both web and mobile, with a clean, premium interface focused on simplicity, discoverability, and effortless booking.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • Flutter • Dart • Clean Architecture • BLoC / Cubit • Cross-Platform App Development • Node.js • NestJS • REST API • JWT Authentication • RBAC • PostgreSQL • Redis • Docker • Docker Compose • Git • GitHub • Google Maps Platform • Geolocation • Push Notifications • Firebase Cloud Messaging • Search & Filtering • Provider Management • Service Management • Appointment Scheduling • Booking Management • Availability Management • Reviews & Ratings • Location-Based Discovery',
            shots: {
                web01:
                    'BOOKLY — Home — A welcoming marketplace homepage designed to help users quickly discover services around them. The screen features a prominent search experience, location selection, popular categories, recommended providers, and upcoming appointment information, creating a clear starting point for the booking journey.',
                web02:
                    'BOOKLY — Explore Services — A dedicated discovery experience for browsing local services and providers. Users can search by service or location, filter by category, price, rating, and availability, and compare provider information before selecting a service.',
                web03:
                    'BOOKLY — Provider Details — A detailed provider profile bringing together everything users need before making a booking. The screen presents the provider\'s services, pricing, ratings, reviews, location, opening hours, specialists, and available appointments in a structured and easy-to-scan experience.',
                web04:
                    'BOOKLY — Book Appointment — A streamlined appointment scheduling experience where users select their preferred service, specialist, date, and available time slot. A clear booking summary brings together the appointment details, duration, and price before confirmation.',
                web05:
                    'BOOKLY — My Bookings — A centralized booking management experience for keeping track of appointments. Users can view upcoming, completed, and cancelled bookings, review appointment details, reschedule or cancel upcoming appointments, and book previously used services again.',
                mobile01:
                    'BOOKLY — Mobile Home — A mobile-first discovery experience that gives users quick access to search, location, popular categories, nearby providers, and their next appointment. The interface is designed for fast discovery and easy navigation on the go.',
                mobile02:
                    'BOOKLY — Mobile Explore — A compact mobile marketplace for discovering services and providers around the user\'s location. Users can search, browse categories, apply filters, and quickly compare provider ratings, locations, prices, and availability.',
                mobile03:
                    'BOOKLY — Mobile Provider Details — A mobile provider profile presenting the essential information needed to make a booking. Users can explore services, pricing, ratings, reviews, specialists, location, and availability before proceeding to book an appointment.',
                mobile04:
                    'BOOKLY — Mobile Book Appointment — A focused mobile booking flow for selecting a specialist, date, and available time. The screen keeps the booking information visible and organized, allowing users to review the service, appointment details, duration, and price before confirming.',
                mobile05:
                    'BOOKLY — Mobile My Bookings — A mobile booking management screen where users can quickly access upcoming, completed, and cancelled appointments. Users can review appointment details, reschedule or cancel upcoming bookings, and book a service again.'
            }
        },
        pulse: {
            name: 'PULSE — Personal Finance & Rewards Platform',
            subtitle: 'Track Your Money. Earn Rewards. Enjoy More.',
            cardDesc:
                'PULSE is a modern personal finance and rewards platform designed to help users manage their everyday finances while making spending more rewarding. The platform allows users to track income and expenses, organize transactions by category, understand spending habits, set savings goals, earn PULSE Points, participate in daily Spin & Win rewards, and discover or redeem digital vouchers across food, dining, entertainment, gaming, shopping, and lifestyle categories. The experience combines personal finance management with an engaging rewards ecosystem, creating a practical platform where users can understand their money, track their progress, and turn their activity into meaningful rewards..',
            cardLead: 'Track Your Money. Earn Rewards. Enjoy More.',
            body:
                'PULSE is a modern personal finance and rewards platform designed to help users manage their everyday finances while making spending more rewarding. The platform allows users to track income and expenses, organize transactions by category, understand spending habits, set savings goals, earn PULSE Points, participate in daily Spin & Win rewards, and discover or redeem digital vouchers across food, dining, entertainment, gaming, shopping, and lifestyle categories.\n\nThe experience combines personal finance management with an engaging rewards ecosystem, creating a practical platform where users can understand their money, track their progress, and turn their activity into meaningful rewards.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • Flutter • Dart • Clean Architecture • BLoC / Cubit • Cross-Platform App Development • Node.js • NestJS • REST API • JWT Authentication • RBAC • PostgreSQL • Redis • Docker • Docker Compose • Git • GitHub • Firebase Cloud Messaging • Push Notifications • Financial Transaction Management • Expense & Income Categorization • Spending Analytics • Savings Goals • Rewards & Points System • Spin & Win Rewards • Digital Voucher Marketplace • Voucher Redemption • Loyalty & Rewards Management • Search & Filtering • Financial Insights • Responsive Web Development',
            shots: {
                web01:
                    'PULSE — Financial Overview — A personalized financial overview that brings the user\'s financial activity into one place. The page highlights total balance, monthly income, expenses, available savings, spending by category, recent transactions, PULSE Points, and active savings goals.',
                web02:
                    'PULSE — Transactions — A centralized transaction experience for tracking and organizing income and expenses. Users can search transactions, filter by transaction type and category, review financial activity, and quickly add new income or expense records.',
                web03:
                    'PULSE — Spending & Insights — A financial insights experience that helps users understand their spending habits. The page presents monthly spending trends, category breakdowns, income versus expenses, savings performance, and personalized insights highlighting changes in everyday spending behavior.',
                web04:
                    'PULSE — Rewards & Vouchers — An interactive rewards marketplace where users can manage their PULSE Points, participate in the daily Spin & Win experience, and discover digital vouchers across restaurants, coffee, entertainment, gaming, shopping, and lifestyle categories. Users can purchase or redeem rewards and manage their reward activity in one place.',
                web05:
                    'PULSE — Savings Goals — A personal savings management experience that helps users create and track financial goals. Users can set targets, monitor progress, manage contributions, and follow multiple goals such as travel, technology purchases, and emergency savings.',
                mobile01:
                    'PULSE — Mobile Financial Home — A mobile financial overview designed for quick everyday access to balances, income, expenses, savings, spending categories, recent activity, and PULSE Points. The experience provides users with a clear snapshot of their financial activity while keeping essential actions easily accessible.',
                mobile02:
                    'PULSE — Mobile Transactions — A mobile transaction management experience for reviewing income and expenses on the go. Users can search and filter transactions, browse categories, review individual financial activity, and quickly add new income or expense records.',
                mobile03:
                    'PULSE — Mobile Rewards — A mobile-first rewards experience centered around PULSE Points, daily Spin & Win rewards, and digital vouchers. Users can check their points balance, participate in the daily reward experience, browse voucher categories, and redeem or purchase rewards directly from the app.',
                mobile04:
                    'PULSE — Mobile Insights & Savings — A mobile financial planning experience combining spending insights with savings goals. Users can review spending trends, understand category-level expenses, view personalized financial insights, and monitor progress toward their savings targets.'
            }
        },
        haven: {
            name: 'HAVEN — Real Estate Property Platform',
            subtitle: 'A Modern Real Estate Experience Across Web & Mobile.',
            cardDesc:
                'HAVEN is a modern real estate platform designed to simplify property discovery, comparison, and viewing. The platform allows users to explore residential and commercial properties, search by location and property type, view detailed property information, explore listings on an interactive map, and schedule private property viewings through a seamless web and mobile experience..',
            cardLead: 'A Modern Real Estate Experience Across Web & Mobile.',
            body:
                'HAVEN is a modern real estate platform designed to simplify property discovery, comparison, and viewing. The platform allows users to explore residential and commercial properties, search by location and property type, view detailed property information, explore listings on an interactive map, and schedule private property viewings through a seamless web and mobile experience.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • Flutter • Dart • Clean Architecture • BLoC / Cubit • Cross-Platform App Development • Node.js • NestJS • REST API • JWT Authentication • Role-Based Access Control (RBAC) • PostgreSQL • Redis • Docker • Docker Compose • Git / GitHub • Google Maps Platform • Geolocation • Property Search & Filtering • Interactive Map Discovery • Property Management • Appointment Scheduling • Saved Properties • Image & Media Management • Push Notifications • Contact & Lead Management • Real Estate Property Discovery • Residential & Commercial Listings • Advanced Property Search • Location-Based Search • Interactive Property Maps • Property Details & Media Galleries • Agent Management • Private Viewing Booking • Saved Properties • Responsive Web Experience • Cross-Platform Mobile Application',
            shots: {
                web01:
                    'HAVEN — Real Estate Homepage — A premium real estate homepage featuring featured properties, property categories, location-based discovery, key market statistics, and quick search tools for finding residential and commercial properties.',
                web02:
                    'HAVEN — Property Details — A comprehensive property details experience presenting high-quality imagery, pricing, property specifications, amenities, location information, agent details, similar properties, and options to contact an agent or book a private viewing.',
                web03:
                    'HAVEN — Property Search — A structured property discovery interface allowing users to search and filter listings by location, property type, price range, bedrooms, bathrooms, and other relevant criteria while browsing properties in a clean responsive grid.',
                web04:
                    'HAVEN — Explore Map — An interactive real estate map experience combining location-based property discovery with property markers, pricing indicators, map controls, and horizontally scrollable property cards for quick browsing.',
                web05:
                    'HAVEN — Book a Private Viewing — A dedicated property viewing workflow allowing users to select a property, choose an available date and time, provide visitor details, specify viewing preferences, and confirm a private appointment with the property agent.',
                mobile01:
                    'HAVEN — Mobile Home — A mobile real estate homepage designed for fast property discovery, featuring personalized search, featured listings, property categories, location-based recommendations, and quick access to saved properties.',
                mobile02:
                    'HAVEN — Mobile Property Search — A mobile property search experience with location search, filters, sorting, and a responsive property listing layout optimized for browsing properties on smaller screens.',
                mobile03:
                    'HAVEN — Mobile Property Details — A detailed mobile property experience presenting property imagery, price, location, specifications, amenities, property information, agent details, and actions to save, contact, or schedule a viewing.',
                mobile04:
                    'HAVEN — Mobile Explore Map — A map-based property discovery experience showing nearby properties through interactive price markers, location controls, search and filters, and horizontally scrollable property cards.',
                mobile05:
                    'HAVEN — Mobile Book a Viewing — A streamlined mobile booking experience allowing users to select a property, choose a preferred date and time, provide contact information, review appointment details, and confirm a private viewing.'
            }
        },
        orbit: {
            name: 'ORBIT — Enterprise ERP & Business Operations Platform',
            subtitle: 'A Unified Platform for Smarter Business Operations.',
            cardDesc:
                'ORBIT is a modern enterprise ERP and business operations platform designed to centralize sales, inventory, procurement, customers, finance, employees, and business analytics in one system. It provides businesses with a clear operational overview while enabling teams to manage day-to-day workflows, monitor performance, control access, and make data-driven decisions through a unified enterprise experience..',
            cardLead: 'A Unified Platform for Smarter Business Operations.',
            body:
                'ORBIT is a modern enterprise ERP and business operations platform designed to centralize sales, inventory, procurement, customers, finance, employees, and business analytics in one system. It provides businesses with a clear operational overview while enabling teams to manage day-to-day workflows, monitor performance, control access, and make data-driven decisions through a unified enterprise experience.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • ASP.NET Core • C# • REST API • Entity Framework Core • JWT Authentication • RBAC • PostgreSQL • Redis • Docker • Git • GitHub • Clean Architecture • API Integration • Authentication & Authorization • Role-Based Access Control • Enterprise ERP Systems • Business Analytics • Inventory Management • Procurement Management • Financial Operations',
            shots: {
                web01:
                    'ORBIT — Executive Overview Dashboard — A centralized business overview providing real-time visibility into revenue, orders, customers, inventory performance, operational activity, alerts, and recent business transactions.',
                web02:
                    'ORBIT — Sales & Orders Management — A complete order management workspace for creating, tracking, and managing sales orders, customers, payment methods, fulfillment status, and transaction activity.',
                web03:
                    'ORBIT — Products & Inventory Management — A comprehensive inventory workspace for managing products and SKUs, warehouse stock levels, low-stock alerts, inventory thresholds, product categories, and replenishment activity.',
                web04:
                    'ORBIT — Purchases & Supplier Management — A procurement workspace for managing suppliers, purchase orders, incoming shipments, delivery schedules, supplier performance, and purchasing activity.',
                web05:
                    'ORBIT — Customer Directory & Accounts — A centralized customer management workspace for managing business accounts, customer activity, order history, account value, and relationship information.',
                web06:
                    'ORBIT — Invoices & Financial Operations — A financial operations workspace for monitoring revenue, expenses, invoices, outstanding payments, cash flow, and financial transactions.',
                web07:
                    'ORBIT — Employees & Access Control — An employee management workspace for managing personnel, departments, roles, permissions, access levels, and organizational security.',
                web08:
                    'ORBIT — Executive Reports & Business Analytics — A business intelligence workspace for analyzing revenue, sales volume, customer growth, product performance, expenses, and overall business trends.'
            }
        },
        black: {
            name: 'BLACK IRIS — Digital Vouchers & Gift Cards Platform',
            subtitle: 'A Seamless Digital Shopping Experience Across Web & Mobile.',
            cardDesc:
                'BLACK IRIS is a digital commerce platform designed to simplify the purchase and management of gaming credits, mobile recharge cards, gift cards, and digital vouchers. The platform enables customers to browse digital products, purchase multiple cards, manage wallet balances, access purchased voucher codes, print digital cards, and benefit from a personalized loyalty program featuring Bronze, Silver, and Gold membership tiers. With a dedicated mobile shopping application and a centralized administration dashboard, BLACK IRIS provides a unified experience for digital product purchasing, inventory management, customer management, and transaction monitoring..',
            cardLead: 'A Seamless Digital Shopping Experience Across Web & Mobile.',
            body:
                'BLACK IRIS is a digital commerce platform designed to simplify the purchase and management of gaming credits, mobile recharge cards, gift cards, and digital vouchers.\n\nThe platform enables customers to browse digital products, purchase multiple cards, manage wallet balances, access purchased voucher codes, print digital cards, and benefit from a personalized loyalty program featuring Bronze, Silver, and Gold membership tiers.\n\nWith a dedicated mobile shopping application and a centralized administration dashboard, BLACK IRIS provides a unified experience for digital product purchasing, inventory management, customer management, and transaction monitoring.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • Flutter • Dart • Clean Architecture • BLoC / Cubit • Cross-Platform App Development • Node.js • REST API • JWT Authentication • Role-Based Access Control (RBAC) • PostgreSQL • Redis • Docker • Git / GitHub • Firebase Cloud Messaging (FCM) • Payment Gateway Integration • Digital Wallet System • Digital Voucher Management • Inventory & Stock Management • Loyalty & Rewards System • Digital Card Printing',
            shots: {
                web01:
                    'BLACK IRIS — Sales & Operations Dashboard — A centralized administration dashboard featuring total revenue, customer orders, active users, available inventory, and sales performance. Includes revenue analytics, best-selling digital cards, recent transactions, and low-stock alerts to provide a clear overview of business operations.',
                web02:
                    'BLACK IRIS — Digital Cards & Inventory Management — A comprehensive product management interface featuring gaming cards, mobile recharge vouchers, gift cards, and digital products. Includes product categories, pricing, stock availability, inventory status, and product management actions for adding, updating, and organizing digital cards.',
                web03:
                    'BLACK IRIS — Customer & Loyalty Management — A centralized customer management interface featuring registered users, account balances, purchasing activity, and loyalty membership levels. Includes Bronze, Silver, and Gold loyalty tiers, customer spending information, and account status management.',
                web04:
                    'BLACK IRIS — Orders & Payment Management — A comprehensive order management interface featuring customer purchases, digital card quantities, payment information, transaction history, and order statuses. Designed to help administrators monitor completed purchases, pending transactions, refunds, and overall payment activity.',
                mobile01:
                    'BLACK IRIS — Digital Shopping Homepage — A personalized digital shopping homepage featuring customer information, wallet balance, loyalty membership, promotional banners, featured products, and popular digital cards. Designed to provide quick access to gaming credits, mobile recharge services, and digital gift cards.',
                mobile02:
                    'BLACK IRIS — Digital Cards Marketplace — A modern digital marketplace featuring gaming cards, mobile recharge vouchers, gift cards, and other digital products. Includes product categories, search functionality, product images, pricing, and intuitive browsing to help customers discover and purchase digital cards.',
                mobile03:
                    'BLACK IRIS — Digital Card Details & Purchase — A detailed product interface featuring card information, product value, pricing, availability, and digital delivery details. Includes quantity selection, wallet balance information, and purchase actions, allowing customers to purchase individual or multiple digital cards through a streamlined shopping experience.',
                mobile04:
                    'BLACK IRIS — Purchased Cards & Order Details — A digital order management interface featuring purchased cards, order information, transaction status, and individual voucher codes or PINs. Includes options to view, copy, redeem, and print purchased cards, allowing customers to access and manage their digital purchases.'
            }
        },
        vyro: {
            name: 'VYRO — Ride-Hailing & Mobility Platform',
            subtitle: 'A Modern On-Demand Mobility Experience Across Web & Mobile.',
            cardDesc:
                'VYRO is a modern ride-hailing and mobility platform designed to manage on-demand transportation across passengers, drivers, and operations teams. The platform provides a complete experience for booking rides, managing drivers, tracking active trips, handling payments, and monitoring daily operations through a centralized dashboard. The project combines a customer-focused mobile application, a driver application experience, and an operational web dashboard with real-time trip tracking and fleet management capabilities..',
            cardLead: 'A Modern On-Demand Mobility Experience Across Web & Mobile.',
            body:
                'VYRO is a modern ride-hailing and mobility platform designed to manage on-demand transportation across passengers, drivers, and operations teams. The platform provides a complete experience for booking rides, managing drivers, tracking active trips, handling payments, and monitoring daily operations through a centralized dashboard.\n\nThe project combines a customer-focused mobile application, a driver application experience, and an operational web dashboard with real-time trip tracking and fleet management capabilities.',
            tech:
                'Flutter • Dart • Node.js • TypeScript • Next.js • React • REST API • WebSockets • Socket.IO • PostgreSQL • Redis • Firebase • Firebase Cloud Messaging • Google Maps Platform • Real-Time Location Tracking • Geolocation Services • Push Notifications • Driver & Fleet Management • Ride Booking System • Payment & Wallet Management • Real-Time Trip Tracking • Clean Architecture • Docker • API Integration • Responsive Web Development • Cross-Platform Mobile Development',
            shots: {
                web01:
                    'VYRO — Operations Overview Dashboard — A centralized operations dashboard providing a clear overview of platform activity, including key performance indicators, ride volume, active trips, revenue, driver activity, and recent operational data. Designed to give administrators a quick understanding of the platform\'s current performance.',
                web02:
                    'VYRO — Trips Management — A complete trip management interface displaying active and completed rides with passenger details, driver information, pickup and destination locations, selected service, ride status, fare, and trip timing. Designed to help operations teams monitor and manage rides efficiently.',
                web03:
                    'VYRO — Drivers Management — A driver management interface for monitoring registered drivers, their current availability, verification status, vehicle information, and operational activity. The interface also provides driver details and verification information required for administrative approval.',
                web04:
                    'VYRO — Wallets & Payments — A financial management dashboard providing an overview of platform revenue, driver earnings, customer payments, pending settlements, and financial transactions. The interface combines financial KPIs with detailed transaction tables for easier payment and wallet management.',
                web05:
                    'VYRO — Live Trip Tracking — A real-time trip monitoring interface built around an interactive map, allowing operations teams to follow active rides, view driver locations, monitor trip routes, and inspect passenger and driver information. Designed to provide clear visibility into ongoing trips and their current status.',
                mobile01:
                    'VYRO — Rider Home — A passenger-focused home screen centered around an interactive map and quick ride booking. Users can view their current location, access nearby services, and start the booking process through a simple ride request interface.',
                mobile02:
                    'VYRO — Ride Booking — A streamlined ride booking experience allowing passengers to select pickup and destination locations, view the route on an interactive map, choose a transportation service, review the estimated fare, and confirm their ride.',
                mobile03:
                    'VYRO — Active Ride Tracking — A real-time ride experience showing the current trip route, ride status, driver information, vehicle details, and estimated journey progress. Designed to keep passengers informed throughout the entire ride.',
                mobile04:
                    'VYRO — Driver Home — A driver-focused home screen providing an overview of the driver\'s current availability, online status, earnings, ride activity, and essential driver tools. Designed to give drivers quick access to their daily operations.',
                mobile05:
                    'VYRO — Incoming Ride Request — A ride request interface showing the passenger\'s pickup and destination, estimated distance, fare, service type, and trip information. Drivers can review the request and accept or decline it directly from the screen.',
                mobile06:
                    'VYRO — Driver Active Trip — A real-time navigation and trip management screen for drivers after accepting a ride. It provides the active route, passenger information, pickup or destination details, trip status, estimated fare, and essential ride actions.'
            }
        },
        medora: {
            name: 'MEDŌRA — Integrated Healthcare Platform',
            subtitle: 'A Unified Healthcare Experience Across Web & Mobile.',
            cardDesc:
                'MEDŌRA is an integrated healthcare platform designed to connect patients with hospitals, clinics, medical laboratories, diagnostic imaging centers, and healthcare professionals through a unified digital experience. The platform enables patients to discover medical services, book appointments, access personal health records, monitor vital signs, manage medications, and communicate with healthcare providers through virtual consultations. With dedicated patient and provider experiences, MEDŌRA streamlines healthcare access, appointment management, and ongoing patient care across web and mobile platforms..',
            cardLead: 'A Unified Healthcare Experience Across Web & Mobile.',
            body:
                'MEDŌRA is an integrated healthcare platform designed to connect patients with hospitals, clinics, medical laboratories, diagnostic imaging centers, and healthcare professionals through a unified digital experience.\n\nThe platform enables patients to discover medical services, book appointments, access personal health records, monitor vital signs, manage medications, and communicate with healthcare providers through virtual consultations.\n\nWith dedicated patient and provider experiences, MEDŌRA streamlines healthcare access, appointment management, and ongoing patient care across web and mobile platforms.',
            tech:
                'Next.js • React • TypeScript • Tailwind CSS • Responsive Web Design • Flutter • Dart • Clean Architecture • BLoC / Cubit • Cross-Platform App Development • Node.js • NestJS • REST API • JWT Authentication • Role-Based Access Control (RBAC) • WebSocket • PostgreSQL • Redis • Docker • Docker Compose • Nginx • CI/CD • Agora SDK — Video & Voice Consultations • Firebase Cloud Messaging (FCM) • Google Maps API • Cloud Storage • HL7 FHIR',
            shots: {
                web01:
                    'MEDŌRA — Healthcare Homepage — A modern healthcare homepage featuring medical specialties, featured healthcare providers, nearby clinics, and diagnostic services. Designed to help patients discover medical care, explore available services, and access essential healthcare features through a unified interface.',
                web02:
                    'MEDŌRA — Medical Services & Provider Discovery — A comprehensive medical discovery experience featuring hospitals, clinics, laboratories, imaging centers, and healthcare professionals. Includes advanced search, specialty filters, provider ratings, service details, and appointment availability to help patients find suitable medical services.',
                web03:
                    'MEDŌRA — Provider Profile & Appointment Booking — A detailed healthcare provider profile featuring professional credentials, medical specialties, consultation services, availability, and patient reviews. Includes appointment scheduling, consultation options, insurance information, and booking confirmation for a seamless healthcare booking experience.',
                web04:
                    'MEDŌRA — Patient Health Dashboard & Medical Records — A centralized patient health portal featuring personal medical records, vital signs, blood pressure readings, heart rate, laboratory results, active medications, and upcoming appointments. Designed to help patients monitor their health, manage medical information, and stay connected with their healthcare providers.',
                mobile01:
                    'MEDŌRA — Mobile Healthcare Homepage — A personalized healthcare mobile homepage featuring upcoming appointments, daily health summaries, recommended healthcare providers, and quick access to medical services. Designed to make healthcare discovery and appointment management simple and accessible.',
                mobile02:
                    'MEDŌRA — Patient Health Profile & Vital Signs — A personalized patient health dashboard featuring medical history, blood pressure, heart rate, blood glucose, weight, active medications, and clinical records. Designed to help patients monitor health indicators, manage medical information, and access their personal health profile.',
                mobile03:
                    'MEDŌRA — Mobile Appointment Booking — A mobile appointment scheduling experience featuring provider information, consultation types, available dates and time slots, insurance details, and booking confirmation. Supports in-person and virtual consultations through an intuitive mobile interface.',
                mobile04:
                    'MEDŌRA — Medical Services Discovery App — A mobile healthcare discovery experience featuring doctors, clinics, hospitals, laboratories, and diagnostic imaging centers. Includes search, specialty filters, provider profiles, availability, and quick appointment booking to help patients access medical services on the go.'
            }
        },
        nova: {
            name: 'NOVA — Fashion E-Commerce Store',
            subtitle: 'A Seamless Fashion Shopping Experience Across Web & Mobile.',
            cardDesc:
                'NOVA is a modern fashion e-commerce concept designed to deliver a seamless shopping experience across web and mobile platforms. The project features a minimalist design, curated clothing collections, intuitive product browsing, advanced filtering, a streamlined checkout experience, and real-time-style order tracking. The goal is to create a consistent and elegant shopping experience that makes discovering and purchasing everyday fashion simple and enjoyable..',
            cardLead: 'A Seamless Fashion Shopping Experience Across Web & Mobile.',
            body:
                'NOVA is a modern fashion e-commerce concept designed to deliver a seamless shopping experience across web and mobile platforms. The project features a minimalist design, curated clothing collections, intuitive product browsing, advanced filtering, a streamlined checkout experience, and real-time-style order tracking.\n\nThe goal is to create a consistent and elegant shopping experience that makes discovering and purchasing everyday fashion simple and enjoyable.',
            tech:
                'Flutter • Dart • Next.js • React • TypeScript • REST API • PostgreSQL • Firebase • Google Pay • Apple Pay • Responsive Web Development • Cross-Platform App Development',
            shots: {
                web01:
                    'NOVA — Fashion Store Homepage — A modern fashion storefront featuring curated collections, new arrivals, and a minimalist visual identity. Designed to create an elegant first impression and make discovering everyday essentials effortless.',
                web02:
                    'NOVA — Product Catalog & Shopping Experience — A clean and intuitive product browsing experience featuring clothing collections, product cards, category navigation, and advanced filters for sizes, colors, and prices. Designed to help users discover products with ease.',
                web03:
                    'NOVA — Checkout & Order Confirmation — A streamlined checkout experience featuring customer information, shipping details, payment options, and an order summary. Designed to simplify the purchasing journey and provide a smooth, user-friendly checkout flow.',
                web04:
                    'NOVA — Order Tracking & Delivery Experience — A comprehensive order tracking interface featuring delivery status, shipment milestones, estimated arrival, and tracking details. Designed to keep customers informed throughout the delivery journey.',
                mobile01:
                    'NOVA — Mobile App Homepage — A modern fashion shopping homepage designed for mobile, featuring curated collections, new arrivals, and a clean, intuitive interface for discovering everyday essentials.',
                mobile02:
                    'NOVA — Mobile Product Catalog — A mobile-friendly shopping experience featuring product grids, category navigation, size and color filters, and streamlined product browsing.',
                mobile03:
                    'NOVA — Mobile Checkout & Order Confirmation — A streamlined mobile checkout flow featuring customer details, shipping information, payment options, and a clear order summary for a smooth purchasing experience.',
                mobile04:
                    'NOVA — Mobile Order Tracking — A mobile order tracking interface featuring shipment status, delivery milestones, estimated arrival, and tracking details to keep customers informed throughout the delivery journey.'
            }
        },
        driveon: {
            name: 'DRIVEON — Car Rental Platform',
            subtitle: 'A Seamless Car Rental Experience Across Web & Mobile.',
            cardDesc:
                'DRIVEON is a modern car rental platform designed to deliver a seamless vehicle booking experience across web and mobile platforms. The project features an intuitive vehicle catalog, advanced search and filtering, detailed car information, flexible booking options, and a streamlined reservation experience. The goal is to create a consistent and convenient rental experience that makes discovering, booking, and managing vehicle reservations simple and enjoyable..',
            cardLead: 'A Seamless Car Rental Experience Across Web & Mobile.',
            body:
                'DRIVEON is a modern car rental platform designed to deliver a seamless vehicle booking experience across web and mobile platforms. The project features an intuitive vehicle catalog, advanced search and filtering, detailed car information, flexible booking options, and a streamlined reservation experience.\n\nThe goal is to create a consistent and convenient rental experience that makes discovering, booking, and managing vehicle reservations simple and enjoyable.',
            tech:
                'Flutter • Dart • Clean Architecture • BLoC / Cubit • Next.js • React • TypeScript • Responsive Web Design • Node.js • NestJS • REST API • PostgreSQL • Prisma ORM • Google Maps API • Location-Based Services • Authentication & Authorization • Payment Gateway Integration • Booking Management System',
            shots: {
                web01:
                    'DRIVEON — Car Rental Homepage — A modern car rental homepage featuring a premium hero section, vehicle search, featured categories, and popular cars. Designed to help users discover vehicles and start their booking journey effortlessly.',
                web02:
                    'DRIVEON — Vehicle Catalog & Search Experience — A comprehensive vehicle browsing experience featuring car listings, category navigation, and advanced filters for price, vehicle type, transmission, fuel type, and seating capacity. Designed to help users find the right vehicle with ease.',
                web03:
                    'DRIVEON — Vehicle Details & Booking — A detailed vehicle page featuring high-quality car imagery, specifications, rental pricing, availability, and booking options. Designed to help users explore vehicle features and make informed rental decisions.',
                web04:
                    'DRIVEON — Booking & Reservation Confirmation — A streamlined booking experience featuring customer information, pickup and return details, insurance options, payment selection, and a clear price summary. Designed to simplify the reservation process and provide a smooth booking experience.',
                mobile01:
                    'DRIVEON — Mobile App Homepage — A modern car rental homepage designed for mobile, featuring vehicle search, featured categories, and popular cars in a clean and intuitive interface.',
                mobile02:
                    'DRIVEON — Mobile Vehicle Catalog — A mobile-friendly vehicle browsing experience featuring car listings, search tools, category navigation, and filters for price, vehicle type, and key specifications.',
                mobile03:
                    'DRIVEON — Mobile Vehicle Details & Booking — A mobile vehicle details experience featuring car images, specifications, rental prices, availability, and booking options in a user-friendly layout optimized for mobile screens.',
                mobile04:
                    'DRIVEON — Mobile Booking & Confirmation — A streamlined mobile booking flow featuring customer details, pickup and return information, insurance options, payment selection, and reservation confirmation.'
            }
        }
    };

    Object.assign(translations.en.projects, enProjects);
    Object.assign(translations.ar.projects, enProjects);
})();
