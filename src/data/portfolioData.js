export const portfolioData = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
      themeToggle: "Toggle Theme",
      langToggle: "العربية"
    },
    hero: {
      statusBadge: "Available for Opportunities",
      greeting: "Hello, I'm",
      name: "Meram Amr",
      role: "Frontend Developer & CS Student",
      headline: "Crafting modern, responsive & high-performance web experiences.",
      subtitle: "4th-year Computer Science student at Helwan University specializing in building responsive, high-performance web applications using React & modern JS.",
      viewProjectsBtn: "View Projects",
      downloadResumeBtn: "Download Resume",
      viewResumeBtn: "View CV",
      stats: [
        { value: "4th", label: "Year CS Student" },
        { value: "React", label: "Core Specialization" },
        { value: "100%", label: "Responsive & Modern" }
      ]
    },
    about: {
      title: "About Me",
      subtitle: "Education & Engineering Philosophy",
      degreeTitle: "Bachelor of Computer Science",
      faculty: "Faculty of Computers and Artificial Intelligence",
      university: "Helwan University",
      period: "2023 – Present (4th Year)",
      educationDescription: "Currently pursuing a degree in Computer Science with an emphasis on web technologies, algorithm design, and software engineering principles.",
      philosophyTitle: "Engineering Focus",
      philosophyDesc: "I build web applications that balance aesthetic elegance with engineering rigor. My goal is to build interfaces that feel effortless to use and maintain.",
      pillars: [
        {
          title: "Clean UI / UX",
          desc: "Crafting pixel-perfect, accessible, and intuitive interfaces that delight users.",
          icon: "Layout"
        },
        {
          title: "Performance Optimization",
          desc: "Fast load times, minimal re-renders, and optimized asset delivery.",
          icon: "Zap"
        },
        {
          title: "Reusable Architecture",
          desc: "Modular component hierarchies and clean separation of concerns.",
          icon: "Layers"
        },
        {
          title: "Component-Based Development",
          desc: "Scalable design systems using React hooks, custom state, and Tailwind.",
          icon: "Boxes"
        }
      ]
    },
    experience: {
      title: "Work Experience & Internships",
      subtitle: "Professional Training & Hands-On Engineering",
      items: [
        {
          role: "Front-End React Trainee",
          company: "Digital Egyptian Pioneers Initiative (DEPI)",
          period: "07/2026 – Present",
          badge: "Active Trainee",
          type: "Initiative Trainee",
          location: "Cairo, Egypt",
          description: "Engaged in comprehensive industry-level front-end training focusing on enterprise web standards and full-stack integration:",
          points: [
            "Developing responsive interfaces using HTML5, CSS3, JS, Bootstrap, TypeScript, and React.js.",
            "Implementing client-side state management, declarative routing, and robust form validation.",
            "Integrating with Node.js/Express REST APIs for asynchronous data fetching and CRUD flows.",
            "Collaborating using Git/GitHub version control workflows and best practices."
          ],
          skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "REST APIs", "Bootstrap", "Tailwind CSS", "Node.js"]
        },
        {
          role: "Front-End React Trainee",
          company: "TechMaster Academy",
          period: "07/2026 – Present",
          badge: "Intensive Program",
          type: "Bootcamp Trainee",
          location: "Egypt",
          description: "8-week intensive hands-on program focused on modern frontend engineering and UI/UX design execution:",
          points: [
            "Deep-dive into component lifecycle, custom hooks, and React performance optimizations.",
            "Translating Figma mockups into pixel-perfect responsive web layouts with modern CSS/Tailwind.",
            "Mastering agile teamwork methodologies, code reviews, and project delivery deadlines."
          ],
          skills: ["React.js", "UI/UX Fidelity", "State Management", "Tailwind CSS", "Git / GitHub"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Recent Web Applications & Interactive Interfaces",
      filterAll: "All Projects",
      viewCode: "Source Code",
      liveDemo: "Live Preview",
      detailsBtn: "Explore Features",
      items: [
        {
          id: "restaurant-ordering-app",
          title: "Restaurant Ordering App",
          category: "Fullstack / React",
          tag: "Featured",
          description: "An interactive fullstack restaurant ordering platform featuring live menu categorization, customized item options, authentication, cart checkout, and seamless Express REST API connectivity.",
          longDescription: "A modern food-ordering application developed to simplify dining choices and streamline order placement. Built with React and styled with Tailwind CSS, it connects to a Node.js/Express backend API for real-time menu management, customizable orders, user auth, and cart state synchronization.",
          technologies: ["React.js", "Tailwind CSS", "REST APIs", "Node.js", "Express", "Context API"],
          highlights: [
            "Dynamic menu filtering by category and dietary preferences",
            "Customizable food items (sizes, toppings, instructions)",
            "User authentication & profile order history",
            "Real-time cart state and checkout simulation"
          ],
          github: "https://github.com/meram-amr/restaurant-ordering-app",
          demo: "https://restaurant-app-demo.vercel.app",
          accentColor: "from-purple-500 to-indigo-600"
        },
        {
          id: "student-hub-dashboard",
          title: "Student-Hub Dashboard",
          category: "Dashboard / React",
          tag: "Productivity",
          description: "Feature-rich academic dashboard facilitating dynamic resource creation, form validation, interactive task cards with add, delete, and completion status toggles.",
          longDescription: "Designed for university students to organize study schedules, course materials, and daily deadlines in a unified interface. Built with React and Tailwind CSS with local state persistence, accessible modal dialogues, and instant client-side validation.",
          technologies: ["React", "Tailwind CSS", "Local Storage", "Custom Hooks", "Lucide Icons"],
          highlights: [
            "Dynamic course resource and assignment creation",
            "Interactive action cards (Add, Delete, Mark as Done)",
            "Client-side form validation with visual alerts",
            "Clean analytics widgets and dark mode compatibility"
          ],
          github: "https://github.com/meram-amr/student-hub-dashboard",
          demo: "https://student-hub-demo.vercel.app",
          accentColor: "from-indigo-500 to-violet-600"
        },
        {
          id: "pulsefit-smartwatch",
          title: "PulseFit Smartwatch Landing",
          category: "Landing / UI",
          tag: "Landing Page",
          description: "Smartwatch landing page featuring local-storage dark/light theme switching, fluid micro-animations, and mobile-first responsive layout.",
          longDescription: "A high-conversion promotional website built with pure semantic HTML5, CSS3, and modern JavaScript. Incorporates smooth scroll navigation, interactive 360 feature highlights, and automatic persistence of user theme preference.",
          technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive UI"],
          highlights: [
            "Persistent Dark / Light mode toggle switch",
            "Fluid CSS transitions and entrance micro-animations",
            "Mobile-first navigation menu and responsive typography",
            "Interactive product feature specification showcase"
          ],
          github: "https://github.com/meram-amr/pulsefit-landing",
          demo: "https://pulsefit-demo.vercel.app",
          accentColor: "from-purple-600 to-pink-600"
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Core Stack & Technologies",
      categories: [
        {
          name: "Frontend Core",
          description: "Foundational web standards and language proficiency",
          skills: [
            { name: "HTML5", level: "Expert", icon: "Code2" },
            { name: "CSS3", level: "Expert", icon: "Palette" },
            { name: "JavaScript (ES6+)", level: "Advanced", icon: "Braces" },
            { name: "TypeScript", level: "Intermediate", icon: "FileCode2" }
          ]
        },
        {
          name: "Frameworks & Libraries",
          description: "Component architecture and styling toolkits",
          skills: [
            { name: "React.js", level: "Advanced", icon: "Atom" },
            { name: "React Router", level: "Advanced", icon: "Route" },
            { name: "Context API", level: "Advanced", icon: "Cpu" },
            { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles" },
            { name: "Bootstrap", level: "Intermediate", icon: "LayoutGrid" },
            { name: "Material UI", level: "Intermediate", icon: "Component" }
          ]
        },
        {
          name: "Tools & Build",
          description: "Developer workflows and API protocols",
          skills: [
            { name: "Vite", level: "Advanced", icon: "Zap" },
            { name: "Git", level: "Advanced", icon: "GitBranch" },
            { name: "GitHub", level: "Advanced", icon: "Github" },
            { name: "REST APIs", level: "Advanced", icon: "Network" }
          ]
        },
        {
          name: "Languages",
          description: "Communication and documentation",
          skills: [
            { name: "Arabic", level: "Native", icon: "Languages" },
            { name: "English", level: "Intermediate", icon: "Globe2" }
          ]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Connect & Collaborate",
      pitch: "I'm currently seeking internship opportunities and frontend engineering roles. Whether you have a project idea, an open position, or just want to chat about web development, feel free to reach out!",
      infoCards: {
        email: {
          label: "Email",
          value: "meramamr8@gmail.com",
          sub: "Direct inquiries & opportunities",
          action: "Send Email"
        },
        phone: {
          label: "Phone",
          value: "+20 155 514 4498",
          sub: "Available during business hours",
          action: "Call Direct"
        },
        location: {
          label: "Location",
          value: "Giza, Egypt",
          sub: "Open to Remote & On-site",
          action: "View Map"
        }
      },
      form: {
        title: "Send a Message",
        nameLabel: "Your Name",
        namePlaceholder: "e.g. Sarah Jenkins",
        emailLabel: "Email Address",
        emailPlaceholder: "e.g. sarah@company.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project inquiry or opportunity",
        messageLabel: "Your Message",
        messagePlaceholder: "Hi Meram, I came across your portfolio and would like to talk about...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        successTitle: "Message Sent Successfully!",
        successMsg: "Thank you for reaching out, Meram will get back to you shortly.",
        sendAnotherBtn: "Send Another Message"
      },
      copiedAlert: "Copied to clipboard!"
    },
    footer: {
      tagline: "Building thoughtful digital experiences with modern React & clean architecture.",
      quickLinksTitle: "Navigation",
      socialTitle: "Connect",
      rights: "All rights reserved.",
      designedBy: "Designed & Built by Meram Amr",
      backToTop: "Back to Top"
    },
    resumeModal: {
      title: "Curriculum Vitae",
      subtitle: "Meram Amr — Frontend Developer",
      printBtn: "Print / Save PDF",
      downloadBtn: "Download Resume",
      closeBtn: "Close"
    }
  },

  ar: {
    nav: {
      about: "عنّي",
      experience: "الخبرات",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "تواصل معي",
      resume: "السيرة الذاتية",
      themeToggle: "تبديل المظهر",
      langToggle: "English"
    },
    hero: {
      statusBadge: "جاهزة لفرص العمل والتدريب",
      greeting: "أهلاً بك، أنا",
      name: "ميرام عمرو",
      role: "مصممة ومطورة واجهات وطالبة علوم حاسب",
      headline: "أبني تجارب ويب عصرية، متجاوبة، وعالية الأداء.",
      subtitle: "طالبة بالسنة الرابعة في كلية الحاسبات والذكاء الاصطناعي بجامعة حلوان، متخصصة في بناء تطبيقات ويب متجاوبة وعالية الأداء باستخدام React وأحدث تقنيات JavaScript.",
      viewProjectsBtn: "استعراض المشاريع",
      downloadResumeBtn: "تحميل السيرة الذاتية",
      viewResumeBtn: "عرض السيرة الذاتية",
      stats: [
        { value: "الرابعة", label: "سنة دراسية بحاسبات حلوان" },
        { value: "React", label: "تخصص الواجهات الأساسي" },
        { value: "100%", label: "واجهات عصرية ومتجاوبة" }
      ]
    },
    about: {
      title: "من أنا",
      subtitle: "الخلفية الأكاديمية والرؤية البرمجية",
      degreeTitle: "بكالوريوس علوم الحاسب",
      faculty: "كلية الحاسبات والذكاء الاصطناعي",
      university: "جامعة حلوان",
      period: "2023 – الحالي (السنة الرابعة)",
      educationDescription: "أدرس حالياً تخصص علوم الحاسب مع التركيز على تقنيات الويب المتقدمة، الخوارزميات، وتصميم البرمجيات الموثوقة.",
      philosophyTitle: "فلسفة التطوير",
      philosophyDesc: "أحرص على الدمج بين جمالية التصميم وقوة البناء الهندسي؛ لإنتاج واجهات سهلة الاستخدام، سريعة الاستجابة، وقابلة للصيانة والتطوير المستمر.",
      pillars: [
        {
          title: "واجهات نظيفة وتجربة مدروسة",
          desc: "تصميم واجهات سهلة وبديهية للمستخدم مع دقة عالية في التفاصيل والتناسق البصري.",
          icon: "Layout"
        },
        {
          title: "تحسين وسرعة الأداء",
          desc: "تقليل زمن التحميل وضمان سلاسة الانتقالات وتقليل عمليات إعادة التصيير غير الضرورية.",
          icon: "Zap"
        },
        {
          title: "معمارية برمجية قابلة لإعادة الاستخدام",
          desc: "بناء مكونات معيارية نظيفة وفصل محكم للمسؤوليات والبيانات.",
          icon: "Layers"
        },
        {
          title: "تطوير معياري متكامل",
          desc: "أنظمة تصميم قابلة للتوسع والتطوير بالاعتماد على React Hooks وTailwind CSS.",
          icon: "Boxes"
        }
      ]
    },
    experience: {
      title: "الخبرات والتدريب العملي",
      subtitle: "مسار التدريب المهني وبناء المشاريع الواقعية",
      items: [
        {
          role: "متدربة تطوير واجهات أمامية (React)",
          company: "مبادرة رواد مصر الرقمية (DEPI)",
          period: "07/2026 – الحالي",
          badge: "تدريب مستمر",
          type: "متدربة مبادرة وطنية",
          location: "القاهرة، مصر",
          description: "برنامج تدريبي متقدم يركز على معايير تطوير الويب الاحترافية والتكامل مع الخدمات الخلفية:",
          points: [
            "تطوير واجهات مستخدم متجاوبة وتفاعلية باستخدام HTML5، CSS3، JavaScript، Bootstrap، TypeScript، وReact.js.",
            "إدارة حالة التطبيق البرمجية (State Management)، التوجيه الديناميكي، والتحقق المتقدم من مدخلات النماذج.",
            "ربط الواجهات وتكاملها مع واجهات برمجة التطبيقات RESTful APIs المبنية بـ Node.js وExpress.",
            "العمل الجماعي باستخدام أدوات التحكم بالإصدارات Git وGitHub وفق أفضل الممارسات المتبعة."
          ],
          skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "REST APIs", "Bootstrap", "Tailwind CSS", "Node.js"]
        },
        {
          role: "متدربة تطوير واجهات أمامية (React)",
          company: "أكاديمية تيك ماستر (TechMaster Academy)",
          period: "07/2026 – الحالي",
          badge: "معسكر مكثف",
          type: "متدربة معسكر عملي",
          location: "مصر",
          description: "معسكر تدريبي عملي مكثف لمدة 8 أسابيع لتطبيق أفضل ممارسات تطوير الواجهات وتنفيذ تصاميم UI/UX:",
          points: [
            "فهم متعمق لدورة حياة المكونات، بناء Custom Hooks، وتحسين سرعة واستجابة React.",
            "تحويل تصاميم Figma بدقة متناهية إلى صفحات ويب تفاعلية ومتجاوبة باستخدام Tailwind CSS.",
            "التعامل الفعّال مع فرق العمل بنهج Agile ومراجعة الشيفرات البرمجية والالتزام بمواعيد التسليم."
          ],
          skills: ["React.js", "تصميم UI/UX", "إدارة الحالة", "Tailwind CSS", "Git / GitHub"]
        }
      ]
    },
    projects: {
      title: "المشاريع المميزة",
      subtitle: "تطبيقات ويب عملية ونماذج تفاعلية حديثة",
      filterAll: "جميع المشاريع",
      viewCode: "الكود المصدري",
      liveDemo: "المعاينة الحية",
      detailsBtn: "تفاصيل المشروع",
      items: [
        {
          id: "restaurant-ordering-app",
          title: "تطبيق طلبات المطاعم",
          category: "Fullstack / React",
          tag: "مشروع رئيسي",
          description: "منصة طلب طعام تفاعلية متكاملة مع فلترة الوجبات، تخصيص المكونات، إدارة سلة الشراء، وتسجيل الدخول متصلة بخادم Express.",
          longDescription: "تطبيق متكامل لطلب الوجبات يسهل اختيار الطعام وتخصيص تفاصيل الطلب وإتمام الدفع. تم بناؤه باستخدام React وTailwind CSS والربط بخادم Node.js/Express للتعامل الفوري مع الوجبات وقائمة السلة وتاريخ الطلبات.",
          technologies: ["React.js", "Tailwind CSS", "REST APIs", "Node.js", "Express", "Context API"],
          highlights: [
            "فلترة ذكية وتصنيف فوري لقائمة الطعام والخيارات الغذائية",
            "تخصيص كامل لمكونات الوجبة والأحجام والملاحظات الخاصة",
            "نظام تسجيل دخول المستخدمين وحفظ سجل الطلبات",
            "سلة تسوق فورية وتجربة إنهاء طلب متكاملة وسلسة"
          ],
          github: "https://github.com/meram-amr/restaurant-ordering-app",
          demo: "https://restaurant-app-demo.vercel.app",
          accentColor: "from-purple-500 to-indigo-600"
        },
        {
          id: "student-hub-dashboard",
          title: "لوحة تحكم Student-Hub",
          category: "Dashboard / React",
          tag: "إنتاجية",
          description: "لوحة تحكم لإدارة الموارد الدراسية، تدعم الإضافة الديناميكية، التحقق من المدخلات، وبطاقات المهام التفاعلية (إضافة/حذف/إنجاز).",
          longDescription: "منصة مصممة لطلاب الجامعات لتنظيم جداول المذاكرة، المواد التعليمية، والمواعيد النهائية في واجهة واحدة موحدة وبسيطة. تعتمد على React وTailwind وتوفر حفظاً محلياً وتفاعلاً سلساً.",
          technologies: ["React", "Tailwind CSS", "Local Storage", "Custom Hooks", "Lucide Icons"],
          highlights: [
            "إضافة وإدارة الموارد التعليمية والمهام ديناميكياً",
            "بطاقات تفاعلية فورية (إضافة، حذف، وتبديل حالة الإنجاز)",
            "التحقق الفوري من صحة النماذج والمدخلات مع تنبيهات بصرية",
            "عناصر إحصائية أنيقة وتوافق كامل مع المظهرين الداكن والفاتح"
          ],
          github: "https://github.com/meram-amr/student-hub-dashboard",
          demo: "https://student-hub-demo.vercel.app",
          accentColor: "from-indigo-500 to-violet-600"
        },
        {
          id: "pulsefit-smartwatch",
          title: "صفحة هبوط PulseFit",
          category: "Landing / UI",
          tag: "صفحة تسويقية",
          description: "صفحة تسويقية ذكية للساعات الرياضية تدعم التبديل السلس بين المظهرين الداكن والفاتح وتأثيرات حركية فائقة الانسيابية.",
          longDescription: "صفحة هبوط مصممة لزيادة معدل التحويل التسويقي، مبنية بـ HTML5 دلالي، تنسيقات CSS3 متقدمة وجافاسكريبت حديثة، مع الحفظ التلقائي لاختيار المستخدم للمظهر.",
          technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive UI"],
          highlights: [
            "زر تبديل المظهر الداكن والفاتح مع حفظ التفضيل محلياً",
            "انتقالات بصرية وتأثيرات دخول ناعمة وجذابة",
            "قائمة تنقل متجاوبة بأسلوب Mobile-First مخصص للهواتف",
            "عرض تفاعلي لمواصفات المنتج ومميزاته الرياضية"
          ],
          github: "https://github.com/meram-amr/pulsefit-landing",
          demo: "https://pulsefit-demo.vercel.app",
          accentColor: "from-purple-600 to-pink-600"
        }
      ]
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "المصفوفة البرمجية وأدوات العمل",
      categories: [
        {
          name: "أساسيات الواجهات (Frontend Core)",
          description: "المعايير الأساسية واللغات البرمجية الجوهرية",
          skills: [
            { name: "HTML5", level: "متقدم جداً", icon: "Code2" },
            { name: "CSS3", level: "متقدم جداً", icon: "Palette" },
            { name: "JavaScript (ES6+)", level: "متقدم", icon: "Braces" },
            { name: "TypeScript", level: "متوسط", icon: "FileCode2" }
          ]
        },
        {
          name: "أطر العمل والمكتبات",
          description: "تطوير المكونات وإدارة التنسيقات",
          skills: [
            { name: "React.js", level: "متقدم", icon: "Atom" },
            { name: "React Router", level: "متقدم", icon: "Route" },
            { name: "Context API", level: "متقدم", icon: "Cpu" },
            { name: "Tailwind CSS", level: "متقدم", icon: "Sparkles" },
            { name: "Bootstrap", level: "متوسط", icon: "LayoutGrid" },
            { name: "Material UI", level: "متوسط", icon: "Component" }
          ]
        },
        {
          name: "أدوات التطوير والبناء",
          description: "بيئة العمل وأنظمة التحكم بالإصدارات",
          skills: [
            { name: "Vite", level: "متقدم", icon: "Zap" },
            { name: "Git", level: "متقدم", icon: "GitBranch" },
            { name: "GitHub", level: "متقدم", icon: "Github" },
            { name: "REST APIs", level: "متقدم", icon: "Network" }
          ]
        },
        {
          name: "اللغات",
          description: "مهارات التواصل والتوثيق",
          skills: [
            { name: "العربية", level: "اللغة الأم", icon: "Languages" },
            { name: "الإنجليزية", level: "مستوى متوسط", icon: "Globe2" }
          ]
        }
      ]
    },
    contact: {
      title: "تواصل معي",
      subtitle: "فرص التعاون وبناء المشاريع",
      pitch: "أنا مهتمة حالياً بفرص التدريب والعمل في تطوير الواجهات الأمامية. سواء كانت لديك فكرة مشروع جديدة، فرصة عمل مناسبة، أو رغبة في مناقشة تقنيات الويب، يُسعدني جداً تواصلك!",
      infoCards: {
        email: {
          label: "البريد الإلكتروني",
          value: "meramamr8@gmail.com",
          sub: "للاستفسارات والفرص المباشرة",
          action: "إرسال بريد"
        },
        phone: {
          label: "الهاتف",
          value: "+20 155 514 4498",
          sub: "متاح خلال ساعات العمل",
          action: "اتصال مباشر"
        },
        location: {
          label: "الموقع",
          value: "الجيزة، مصر",
          sub: "متاحة للعمل عن بعد والعمل المكتبي",
          action: "عرض الخريطة"
        }
      },
      form: {
        title: "أرسل رسالة",
        nameLabel: "الاسم الكريم",
        namePlaceholder: "مثال: سارة أحمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "مثال: sarah@example.com",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "استفسار بخصوص مشروع أو فرصة عمل",
        messageLabel: "الرسالة",
        messagePlaceholder: "مرحباً ميرام، اطلعت على معرض أعمالك وأود مناقشة...",
        submitBtn: "إرسال الرسالة",
        sendingBtn: "جارٍ الإرسال...",
        successTitle: "تم إرسال رسالتك بنجاح!",
        successMsg: "شكراً لتواصلك، ستعود ميرام للرد عليك في أقرب وقت ممكن.",
        sendAnotherBtn: "إرسال رسالة أخرى"
      },
      copiedAlert: "تم النسخ إلى الحافظة بنجاح!"
    },
    footer: {
      tagline: "بناء تجارب رقمية مميزة باستخدام React وأحدث معايير تطوير الويب.",
      quickLinksTitle: "روابط سريعة",
      socialTitle: "شبكات التواصل",
      rights: "جميع الحقوق محفوظة.",
      designedBy: "تصميم وتطوير: ميرام عمرو",
      backToTop: "العودة للأعلى"
    },
    resumeModal: {
      title: "السيرة الذاتية المهنية",
      subtitle: "ميرام عمرو — مطورة واجهات أمامية",
      printBtn: "طباعة / حفظ كـ PDF",
      downloadBtn: "تحميل السيرة الذاتية",
      closeBtn: "إغلاق"
    }
  },

  socials: {
    github: "https://github.com/meram-amr",
    linkedin: "https://linkedin.com/in/meram-amr",
    email: "mailto:meramamr8@gmail.com",
    phone: "tel:+201555144498",
    emailPlain: "meramamr8@gmail.com",
    phonePlain: "+20 155 514 4498",
    locationPlain: "Giza, Egypt"
  }
};
