export type Language = 'en' | 'uz' | 'ru';

export const translations = {
  en: {
    common: {
      next: "Next",
      prev: "Prev",
      demo: "Book Private Demo",
      whitepaper: "Get Whitepaper",
      vision: "THE VISION",
      problem: "THE PROBLEM",
      solution: "THE SOLUTION",
      product: "PRODUCT ECOSYSTEM",
      howItWorks: "HOW IT WORKS",
      market: "MARKET OPPORTUNITY",
      businessModel: "BUSINESS MODEL",
      financials: "FINANCIALS",
      compAdvantage: "COMPETITIVE ADVANTAGE",
    },
    slide1: {
      title: "Verdiq",
      subtitle: "AI-powered ESG Intelligence Platform",
      slogan: "“Turning Data Into Trust”",
      description: "Transforming ESG data into real-time investment analytics. This is a new standard and a new infrastructure in Uzbekistan.",
      line: "Transforming ESG data into real-time investment intelligence"
    },
    slideFinancials: {
      title: "Financial Outlook",
      opex: "Monthly OpEx",
      opexVal: "$13K - $25K",
      team: "The Team (10 specialists)",
      teamDetail: "CEO, CTO, 2 AI, 2 FE, 2 BE, ESG Legal, Data Analyst",
      infra: "Infrastructure",
      infraDetail: "AWS/GCP, Docker, Kubernetes scaling",
      annual: "Annual Budget",
      annualVal: "$150K - $250K",
      revenue: "Revenue Streams (SaaS)",
      revItems: ["Monthly Subscriptions", "ESG Auto-reporting", "API Integrations", "Enterprise Solutions"],
      arr: "ARR Forecast",
      y1: "Year 1 (MVP)",
      y1Val: "$50K - $150K",
      y2: "Year 2 (Scaling)",
      y2Val: "$500K - $2M"
    },
    slide2: {
      title: "ESG reporting is broken, manual, and fragmented.",
      point1: "Data is scattered across systems (HR, Finance, Supply Chain)",
      point2: "Standards (GRI, SASB, TCFD, ISSB) create paralyzing complexity",
      point3: "Reports are slow, expensive, and not trusted by investors",
      insight: "“ESG reporting is not a system — it is a manual burden.”"
    },
    slide3: {
      title: "Verdiq turns ESG into an AI-driven automated system.",
      pipeline: "Unified ESG Pipeline",
      pipelineDetail: "Automated collection from every corporate system.",
      processing: "AI Processing",
      processingDetail: "Real-time mapping across global frameworks.",
      readiness: "Investor Readiness",
      readinessDetail: "Instant, verified reports that build absolute trust."
    },
    slide4: {
      title: "The ESG Operating System",
      item1: "Intelligent Dashboard",
      item1Detail: "Global visibility across E, S, and G metrics.",
      item2: "AI Scoring Engine",
      item2Detail: "Dynamic scoring that updates with every ingestion.",
      item3: "Auto-Reporting",
      item3Detail: "Export TCFD, GRI or SASB with one click.",
      item4: "Risk & Compliance",
      item4Detail: "Real-time monitoring of regulatory shifts.",
      item5: "Benchmarking",
      item5Detail: "Compare performance vs industry peers instantly."
    },
    slide5: {
      title: "Verdiq: From Data to Investment Insights",
      steps: [
        { 
          title: "STEP 1 — DATA COLLECTION", 
          desc: "Gathering company data: questionnaires, documents, and public info.",
          why: "Turning chaos into structured data.",
          icon: "database"
        },
        { 
          title: "STEP 2 — NORMALIZATION", 
          desc: "System cleans and standardizes: HR policies, energy, and governance.",
          why: "All companies become comparable.",
          icon: "workflow"
        },
        { 
          title: "STEP 3 — SCORING ENGINE", 
          desc: "Real-time ESG scoring: calculates readiness across global frameworks.",
          why: "Evaluates E, S, G, and data trust.",
          icon: "zap"
        },
        { 
          title: "STEP 4 — AI ANALYSIS", 
          desc: "AI identifies weaknesses, explains risks, and provides benchmarks.",
          example: "Weak governance increases operational risk.",
          icon: "cpu"
        },
        { 
          title: "STEP 5 — INVESTMENT READINESS", 
          desc: "Verdiq transforms ESG into alpha insights for investors.",
          readiness: "Medium Risk | Improve governance",
          icon: "shield"
        },
        { 
          title: "STEP 6 — REPORT GENERATION", 
          desc: "Generates investor-ready reports, risks, and action plans.",
          icon: "fileText"
        },
        { 
          title: "STEP 7 — CONTINUOUS PROGRESS", 
          desc: "Monitors history, tracks progress, and updates scores live.",
          icon: "trendingUp"
        }
      ],
      logicTitle: "LOGIC",
      logic: ["Raw Data", "ESG Analysis", "AI Insights", "Investment Ready"],
      problemTitle: "THE REAL PROBLEM WE SOLVE",
      forInvestors: "Investors: Less uncertainty.",
      forCompanies: "Companies: Clear path to capital.",
      onePhrase: "Verdiq transforms raw data into structured investment intelligence."
    },
    slideManifesto: {
      title: "Building the Future Standard",
      manifesto: [
        "The future economy will not run on profit alone.",
        "It will run on trust, transparency, and intelligence.",
        "Verdiq is building the system that defines that future.",
        "We are not just analyzing companies — we are helping shape the next generation of investable businesses.",
        "The market is changing. ESG is becoming global. AI is accelerating decisions. Emerging markets are rising.",
        "This is not just an opportunity. This is the beginning of a new financial infrastructure.",
        "Join us in building the future standard of business evaluation.",
        "Verdiq — turning data into trust."
      ]
    },
    slideVsGlobal: {
      title: "Verdiq vs Global ESG Platforms",
      headers: ["Platform", "Corp", "SMB", "AI", "Dirty Data", "Reports", "Ready", "Emerging", "Real-time"],
      rows: [
        { name: "MSCI", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Sustainalytics", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Morningstar", values: ["✅", "❌", "⚠️", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Datamaran", values: ["✅", "❌", "✅", "❌", "✅", "❌", "❌", "⚠️"] },
        { name: "Workiva", values: ["✅", "❌", "⚠️", "❌", "✅", "❌", "❌", "❌"] },
        { name: "Verdiq", values: ["⚠️", "✅", "✅", "✅", "✅", "✅", "✅", "✅"], highlight: true }
      ]
    },
    slide6: {
      title: "The Global ESG Mandate",
      point1: "Regulatory pressure increasing worldwide (EU CSRD, SEC)",
      point2: "Investors requiring absolute ESG transparency",
      point3: "Surge in enterprise demand for automated sustainability tech",
      point4: "Banks and funds needing verified data for risk assessment",
      cagr: "CAGR Growth Projection"
    },
    slide7: {
      title: "Scalable Enterprise SaaS",
      tier1: "Standard",
      tier1Sub: "For SMEs",
      tier2: "Enterprise",
      tier2Sub: "For Global corps",
      tier3: "Strategic",
      tier3Sub: "For FIs & Banks",
      pricingNote: "Pricing scales with data volume & active entities"
    },
    slide8: {
      title: "Why Verdiq Wins",
      col1: "Focus Area",
      col2: "Verdiq AI",
      col3: "Consultancy",
      row1: ["Intelligence Layer", "Proactive AI Analytics", "Manual Review"],
      row2: ["Update Frequency", "Real-time (Live API)", "Annual / Quarterly"],
      row3: ["Cost Efficiency", "SaaS (10x cheaper)", "Hourly (Expensive)"]
    },
    slide9: {
      title: "Global ESG Infrastructure",
      item1: "Become the standard layer for investor trust",
      item2: "Replace manual ESG consulting with AI automation",
      item3: "Build the global ESG intelligence nervous system"
    },
    slide10: {
      title: "Verdiq — the new standard of trust in business.",
      slogan: "“Turning ESG data into trust for the world”",
      ask: "Seeking Strategic Investment & Partnerships"
    },
    whitepaperModal: {
      title: "Verdiq Whitepaper Overview",
      intro: "The Verdiq Whitepaper is not just a document, but a strategic instrument:",
      items: [
        { title: "Proof of Concept", desc: "Details our ESG nervous system architecture, data cleaning, and mapping to global standards." },
        { title: "Setting the Standard", desc: "Formalizes Verdiq as the new standard of trust, transitioning from an app to an industrial protocol." },
        { title: "B2B & Gov Trust", desc: "Provides deep justification for security, transparency, and accuracy required by large corporations and governments." },
        { title: "Market Education", desc: "Explains the shift from static, manual reports to necessary real-time analytics." },
        { title: "Investment Tool", desc: "Acts as a Due Diligence base for VCs, showcasing business model depth and technology stack." }
      ],
      close: "Close"
    }
  },
  uz: {
    common: {
      next: "Keyingi",
      prev: "Oldingi",
      demo: "Taqdimotga yozilish",
      whitepaper: "Whitepaperni yuklab olish",
      vision: "KONSEPSIYA",
      problem: "MUAMMO",
      solution: "YECHIM",
      product: "MAHSULOT EKOTIZIMI",
      howItWorks: "ISHLASH MEXANIZMI",
      market: "BOZOR ISTIQBOLLARI",
      businessModel: "BIZNES-MODEL",
      financials: "MOLIYAVIY KO'RSATKICHLAR",
      compAdvantage: "RAQOBATBARDOSHLIK AFZALLIGI",
    },
    slide1: {
      title: "Verdiq",
      subtitle: "Sun'iy intellektga asoslangan ESG tahlil platformasi",
      slogan: "“Ma'lumotlarni ishonch kapitaliga aylantiramiz”",
      description: "ESG ma'lumotlarini real vaqt rejimida investitsion tahlilga aylantirish. Bu korporativ ishonchning yangi standarti hamda O'zbekiston uchun yangi infratuzilmadir.",
      line: "ESG ma'lumotlarini uzluksiz ravishda investitsion intellektga aylantirish"
    },
    slideFinancials: {
      title: "Moliyaviy ko'rsatkichlar",
      opex: "Oylik xarajatlar (OpEx)",
      opexVal: "$13 000 - $25 000",
      team: "Jamoa (10 nafar mutaxassis)",
      teamDetail: "CEO, CTO, 2 AI, 2 FE, 2 BE, ESG Huquqshunos, Tahlilchi",
      infra: "Infratuzilma",
      infraDetail: "AWS/GCP, Docker, Kubernetes",
      annual: "Yillik byudjet",
      annualVal: "$150 000 - $250 000",
      revenue: "Daromad manbalari (SaaS)",
      revItems: ["Oylik obuna", "Avtomatlashtirilgan ESG hisoboti", "API integratsiyalari", "Korporativ yechimlar"],
      arr: "Daromad prognozi (ARR)",
      y1: "1-yil (MVP)",
      y1Val: "$50 000 - $150 000",
      y2: "2-yil (Kengayish bosqichi)",
      y2Val: "$500 000 - $2 000 000"
    },
    slide2: {
      title: "An'anaviy ESG hisobdorligi eskirgan, tarqoq va qo'l mehnati talab qiladi.",
      point1: "Ma'lumotlar turli xil korporativ tizimlarda (Kadrlar, Moliya, Ta'minot zanjiri) tarqoq holda saqlanadi",
      point2: "Xalqaro standartlarning (GRI, SASB, TCFD, ISSB) ko'pligi haddan tashqari murakkablikni keltirib chiqaradi",
      point3: "Hisobotlarni tayyorlash jarayoni sekin hamda qimmat bo'lib, investorlarda yetarlicha ishonch uyg'otmaydi",
      insight: "“ESG hisobdorligi tizimli jarayon emas, balki byurokratik va qimmat majburiyatdir.”"
    },
    slide3: {
      title: "Verdiq ESG yondashuvini sun'iy intellektga asoslangan avtomatlashtirilangan tizimga aylantiradi.",
      pipeline: "Yagona ESG ma'lumotlar integratsiyasi",
      pipelineDetail: "Barcha korporativ tizimlardan ma'lumotlarni avtomatik ravishda yig'ish.",
      processing: "Sun'iy intellekt orqali ishlov berish",
      processingDetail: "Ma'lumotlarni xalqaro standartlarga real vaqt rejimida muvofiqlashtirish.",
      readiness: "Investorlar tayyorligi",
      readinessDetail: "Investorlarda mutlaq ishonch uyg'otuvchi tezkor va verifikatsiyadan o'tgan hisobotlar."
    },
    slide4: {
      title: "ESG Operatsion Tizimi",
      item1: "Intellektual boshqaruv paneli",
      item1Detail: "Ekologik, ijtimoiy va boshqaruv (ESG) ko'rsatkichlarining yaxlit tahlili.",
      item2: "Sun'iy intellekt asosidagi skoring",
      item2Detail: "Yangi ma'lumot kiritilishi bilan avtomatik yangilanuvchi dinamik baholash tizimi.",
      item3: "Avtomatlashtirilgan hisobotlar",
      item3Detail: "TCFD, GRI yoki SASB hisobotlarini bir tugma orqali eksport qilish.",
      item4: "Xatarlarni boshqarish va komplayens",
      item4Detail: "Normativ o'zgarishlarni real vaqt rejimida kuzatib borish.",
      item5: "Qiyosiy tahlil (Benchmarking)",
      item5Detail: "Kompaniya ko'rsatkichlarini sohadagi raqobatchilar bilan bevosita taqqoslash."
    },
    slide5: {
      title: "Verdiq qanday ishlaydi: Ma'lumotdan intellektga",
      steps: [
        { 
          title: "1-BOSQICH — MA'LUMOT YIG'ISH", 
          desc: "Kompaniya ma'lumotlarini to'plash: so'rovnomalar, ichki hujjatlar va ochiq manbalar.",
          why: "Tarqoq ma'lumotlar tizimlashtiriladi.",
          icon: "database"
        },
        { 
          title: "2-BOSQICH — NORMALIZATSIYA", 
          desc: "Tizim ma'lumotlarni tozalaydi va standartlashtiradi (HR siyosati, energiya sarfi, boshqaruv).",
          why: "Barcha kompaniyalar uchun yagona taqqoslash mezoni yaratiladi.",
          icon: "workflow"
        },
        { 
          title: "3-BOSQICH — SKORING TIZIMI", 
          desc: "Real vaqt rejimida ESG reytingini hisoblash: xalqaro standartlarga muvofiqlik darajasi.",
          why: "E, S, G omillari va ma'lumotlar ishonchliligini baholaydi.",
          icon: "zap"
        },
        { 
          title: "4-BOSQICH — AI TAHLILI", 
          desc: "AI zaif nuqtalarni aniqlaydi, ehtimoliy xatarlarni sharhlaydi va strategik tavsiyalar beradi.",
          example: "Masalan: Zaif boshqaruv (Governance) operatsion xatarlarni oshiradi.",
          icon: "cpu"
        },
        { 
          title: "5-BOSQICH — INVESTITSION TAYYORGARLIK", 
          desc: "Verdiq ESG ma'lumotlarini investitsion tahlilga va kapital jalb qilishga tayyorlaydi.",
          readiness: "O'rtacha xavf | Boshqaruvni takomillashtirish zarur",
          icon: "shield"
        },
        { 
          title: "6-BOSQICH — HISOBOT GENERATSIYASI", 
          desc: "Investorlar uchun tayyor hisobotlar, xavf xaritalari va amaliy harakatlar rejasini yaratadi.",
          icon: "fileText"
        },
        { 
          title: "7-BOSQICH — DOIMIY PROGRESS", 
          desc: "Jarayonni doimiy kuzatib boradi, tarixiy dinamikani saqlaydi va reytinglarni real vaqtda yangilaydi.",
          icon: "trendingUp"
        }
      ],
      logicTitle: "MANTIQIY KETMA-KETLIK",
      logic: ["Dastlabki ma'lumotlar", "ESG tahlili", "AI tavsiyalari", "Investitsion tayyorgarlik"],
      problemTitle: "BIZ HAL ETAYOTGAN ASOSIY MUAMMO",
      forInvestors: "Investorlar uchun: Noaniqlikning kamayishi.",
      forCompanies: "Kompaniyalar uchun: Kapital bozoriga shaffof yo'l.",
      onePhrase: "Verdiq qayta ishlanmagan ma'lumotlarni tizimlashtirilgan investitsion intellektga aylantiradi."
    },
    slideManifesto: {
      title: "Kelajak standartini yaratish",
      manifesto: [
        "Kelajak iqtisodiyoti faqatgina moliyaviy foyda ustiga qurilmaydi.",
        "U ishonch, mutlaq shaffoflik va raqamli intellekt asosida faoliyat yuritadi.",
        "Verdiq ana shu kelajakni belgilab beruvchi ekotizimni yaratmoqda.",
        "Biz shunchaki kompaniyalarni tahlil qilmaymiz — biz investitsiya uchun jozibador bo'lgan biznesning yangi avlodini shakllantirishga hissa qo'shamiz.",
        "Bozor konyunkturasi o'zgarmoqda. ESG global miqyosga ko'tarilmoqda. AI strategik qarorlarni qabul qilishni tezlashtirmoqda.",
        "Bu shunchaki biznes imkoniyat emas, balki yangi moliyaviy infratuzilmaning debochasidir.",
        "Kelajakdagi korporativ baholash standartini yaratishda bizga hamroh bo'ling.",
        "Verdiq — ma'lumotlarni ishonchga aylantiramiz."
      ]
    },
    slideVsGlobal: {
      title: "Verdiq vs Global ESG Platformalar",
      headers: ["Platforma", "Korporatsiyalar", "Kichik va O'rta Biznes", "AI Tahlili", "Ma'lumot tozalash", "ESG Hisobotlar", "Investitsiyaga tayyor", "Rivojlanayotgan bozorlar", "Real vaqt"],
      rows: [
        { name: "MSCI", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Sustainalytics", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Morningstar", values: ["✅", "❌", "⚠️", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Datamaran", values: ["✅", "❌", "✅", "❌", "✅", "❌", "❌", "⚠️"] },
        { name: "Workiva", values: ["✅", "❌", "⚠️", "❌", "✅", "❌", "❌", "❌"] },
        { name: "Verdiq", values: ["⚠️", "✅", "✅", "✅", "✅", "✅", "✅", "✅"], highlight: true }
      ]
    },
    slide6: {
      title: "Global ESG Mandati",
      point1: "Xalqaro miqyosda regulyator talablari qat'iylashmoqda (EU CSRD, SEC)",
      point2: "Investorlar kapital ajratish qarorida mutlaq ESG shaffofligini talab qilmoqda",
      point3: "Avtomatlashtirilgan barqarorlik (sustainability) texnologiyalariga bo'lgan korporativ talabning keskin o'sishi",
      point4: "Bank va investitsiya fondlari xatarlarni baholash uchun verifikatsiyadan o'tgan ma'lumotlarga muhtoj",
      cagr: "Yillik o'rtacha o'sish sur'ati (CAGR) prognozi"
    },
    slide7: {
      title: "Masshtablanuvchi Enterprise SaaS",
      tier1: "Standart",
      tier1Sub: "Kichik va O'rta Biznes vakillari uchun",
      tier2: "Korporativ",
      tier2Sub: "Global korporatsiyalar uchun",
      tier3: "Strategik",
      tier3Sub: "Bank va moliya institutlari uchun",
      pricingNote: "Tariflash siyosati ma'lumotlar hajmi va faol obyektlar soniga mutanosib ravishda o'zgaradi"
    },
    slide8: {
      title: "Nima uchun Verdiq g'olib?",
      col1: "Mezon",
      col2: "Verdiq AI",
      col3: "An'anaviy konsalting",
      row1: ["Tahliliy qatlam", "Proaktiv AI tahlili", "Qo'lda bajariladigan ekspertiza"],
      row2: ["Yangilanish chastotasi", "Real vaqtda (Live API)", "Yillik / Choraklik"],
      row3: ["Xarajat samaradorligi", "SaaS (10 barobar tejamkor)", "Soatbay to'lov (Yuqori xarajatli)"]
    },
    slide9: {
      title: "Global ESG Infratuzilmasi",
      item1: "Investor ishonchi uchun fundamental standartga aylanish",
      item2: "An'anaviy ESG konsaltingini AI avtomatizatsiyasi orqali transformatsiya qilish",
      item3: "Global ESG tahliliy neyron tizimini barpo etish"
    },
    slide10: {
      title: "Verdiq — biznes muhitidagi yangi ishonch standarti.",
      slogan: "“Butun dunyo uchun ESG ma'lumotlarini ishonchga aylantiramiz”",
      ask: "Strategik investitsiya va hamkorlik uchun ochiqmiz"
    },
    whitepaperModal: {
      title: "Verdiq Whitepaper Sharhi",
      intro: "Verdiq Whitepaper shunchaki axborot hujjati emas, balki muhim funksiyalarni bajaruvchi strategik vositadir:",
      items: [
        { title: "Texnik isbot (Proof of Concept)", desc: "ESG asab tizimimiz arxitekturasi, ma'lumotlarni tozalash algoritmlari va xalqaro standartlarga (CSRD, SEC) muvofiqlashtirish jarayonini batafsil yoritadi." },
        { title: "Standartlarni o'rnatish", desc: "Verdiq'ning oddiy ilovadan 'industrial protokol'ga aylanishini ta'minlovchi yangi ishonch standarti metodologiyasini shakllantiradi." },
        { title: "B2B va Davlat ishonchi", desc: "Yirik korporatsiyalar va davlat muassasalari tomonidan talab qilinadigan xavfsizlik, shaffoflik va ma'lumotlar aniqligini chuqur asoslab beradi." },
        { title: "Bozorni o'qitish", desc: "Nima uchun an'anaviy, qo'l mehnati talab qiladigan hisobot usullari eskirganligini va real vaqt tahliliga o'tishning muqarrarligini tushuntiradi." },
        { title: "Investitsion vosita", desc: "Venchur fondlari uchun Due Diligence (kompleks tekshiruv) bazasi sifatida xizmat qilib, biznes-model va texnologik stekning chuqur tahlilini taqdim etadi." }
      ],
      close: "Yopish"
    }
  },
  ru: {
    common: {
      next: "Далее",
      prev: "Назад",
      demo: "Забронировать демо",
      whitepaper: "Получить Whitepaper",
      vision: "ВИДЕНИЕ",
      problem: "ПРОБЛЕМА",
      solution: "РЕШЕНИЕ",
      product: "ЭКОСИСТЕМА ПРОДУКТА",
      howItWorks: "КАК ЭТО РАБОТАЕТ",
      market: "РЫНОЧНЫЕ ВОЗМОЖНОСТИ",
      businessModel: "БИЗНЕС-МОДЕЛЬ",
      financials: "ФИНАНСЫ",
      compAdvantage: "КОНКУРЕНТНОЕ ПРЕИМУЩЕСТВО",
    },
    slide1: {
      title: "Verdiq",
      subtitle: "Платформа ESG-аналитики на базе ИИ",
      slogan: "“Превращаем данные в доверие”",
      description: "Преобразование данных ESG в инвестиционную аналитику в реальном времени. Это новый стандарт и новая инфраструктура в Узбекистане.",
      line: "Трансформация данных ESG в инвестиционную аналитику в реальном времени"
    },
    slideFinancials: {
      title: "Финансовые показатели",
      opex: "Ежемесячные расходы (OpEx)",
      opexVal: "$13 000 - $25 000",
      team: "Команда (10 специалистов)",
      teamDetail: "CEO, CTO, 2 AI, 2 FE, 2 BE, ESG Юрист, Аналитик",
      infra: "Инфраструктура",
      infraDetail: "AWS/GCP, Docker, Kubernetes",
      annual: "Годовой бюджет",
      annualVal: "$150 000 - $250 000",
      revenue: "Источники дохода (SaaS)",
      revItems: ["Ежемесячная подписка", "Авто-отчетность ESG", "Интеграция через API", "Enterprise-решения"],
      arr: "Прогноз выручки (ARR)",
      y1: "1-й год (MVP)",
      y1Val: "$50 000 - $150 000",
      y2: "2-й год (Рост)",
      y2Val: "$500 000 - $2 000 000"
    },
    slide2: {
      title: "Отчетность ESG устарела, ведется вручную и фрагментирована.",
      point1: "Данные разбросаны по системам (HR, финансы, цепочки поставок)",
      point2: "Стандарты (GRI, SASB, TCFD, ISSB) создают парализующую сложность",
      point3: "Отчеты готовятся медленно, дорого и не вызывают доверия у инвесторов",
      insight: "“Отчетность ESG — это не система, а ручное время.”"
    },
    slide3: {
      title: "Verdiq превращает ESG в автоматизированную систему на базе ИИ.",
      pipeline: "Единый конвейер ESG",
      pipelineDetail: "Автоматизированный сбор из всех корпоративных систем.",
      processing: "ИИ-обработка",
      processingDetail: "Картирование по глобальным стандартам в реальном времени.",
      readiness: "Готовность к инвестициям",
      readinessDetail: "Мгновенные проверенные отчеты, создающие доверие."
    },
    slide4: {
      title: "Операционная система ESG",
      item1: "Интеллектуальный дашборд",
      item1Detail: "Глобальная видимость метрик E, S и G.",
      item2: "Система оценки ИИ",
      item2Detail: "Динамический скоринг, обновляемый с каждым вводом данных.",
      item3: "Авто-отчетность",
      item3Detail: "Экспорт TCFD, GRI или SASB одним кликом.",
      item4: "Риски и соответствие",
      item4Detail: "Мониторинг регуляторных изменений в реальном времени.",
      item5: "Бенчмаркинг",
      item5Detail: "Сравнение производительности с конкурентами по отрасли."
    },
    slide5: {
      title: "Как работает Verdiq: от данных к инсайтам",
      steps: [
        { 
          title: "ЭТАП 1 — DATA COLLECTION", 
          desc: "Сбор данных: анкеты, документы, публичные данные компании.",
          why: "Хаос становится структурой.",
          icon: "database"
        },
        { 
          title: "ЭТАП 2 — NORMALIZATION", 
          desc: "Очистка и стандартизация: политики HR, энергопотребление, управление.",
          why: "Компании становятся сравнимыми.",
          icon: "workflow"
        },
        { 
          title: "ЭТАП 3 — SCORING ENGINE", 
          desc: "Расчет ESG Readiness Score по матричной формуле в реальном времени.",
          why: "Оценка E, S, G и доверия к данным.",
          icon: "zap"
        },
        { 
          title: "ЭТАП 4 — AI ANALYSIS", 
          desc: "ИИ находит слабые места, объясняет риски и дает рекомендации.",
          example: "Weak governance increases operational risk.",
          icon: "cpu"
        },
        { 
          title: "ЭТАП 5 — INVESTMENT READINESS", 
          desc: "Трансформация ESG в инвестиционный инсайт и определение готовности.",
          readiness: "Medium Risk | Improve governance",
          icon: "shield"
        },
        { 
          title: "ЭТАП 6 — REPORT GENERATION", 
          desc: "Генерация отчетов: баллы, риски и план конкретных действий.",
          icon: "fileText"
        },
        { 
          title: "ЭТАП 7 — CONTINUOUS PROGRESS", 
          desc: "Мониторинг прогресса, история изменений и пересчет скоринга.",
          icon: "trendingUp"
        }
      ],
      logicTitle: "ЛОГИКА",
      logic: ["Raw Data", "ESG Analysis", "AI Insights", "Investment Ready"],
      problemTitle: "РЕШАЕМАЯ ПРОБЛЕМА",
      forInvestors: "Инвесторам: Меньше рисков.",
      forCompanies: "Компаниям: Путь к капиталу.",
      onePhrase: "Verdiq превращает сырые данные в инвестиционный интеллект."
    },
    slideManifesto: {
      title: "Создавая стандарт будущего",
      manifesto: [
        "Экономика будущего не будет держаться на одной лишь прибыли.",
        "Она будет основана на доверии, прозрачности и интеллекте.",
        "Verdiq строит систему, которая определит это будущее.",
        "Мы не просто анализируем компании — мы помогаем формировать следующее поколение инвестиционно привлекательного бизнеса.",
        "Рынок меняется. ESG становится глобальным. ИИ ускоряет решения. Развивающиеся рынки растут.",
        "Это не просто возможность. Это начало новой финансовой инфраструктуры.",
        "Присоединяйтесь к нам в создании стандарта оценки бизнеса будущего.",
        "Verdiq — превращаем данные в доверие."
      ]
    },
    slideVsGlobal: {
      title: "Verdiq vs Global ESG Platforms",
      headers: ["Платформа", "Корп", "Стартап/МСБ", "ИИ Анализ", "Грязные данные", "ESG Отчеты", "Готовность", "Рынки", "Real-time"],
      rows: [
        { name: "MSCI", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Sustainalytics", values: ["✅", "❌", "❌", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Morningstar", values: ["✅", "❌", "⚠️", "❌", "✅", "⚠️", "❌", "❌"] },
        { name: "Datamaran", values: ["✅", "❌", "✅", "❌", "✅", "❌", "❌", "⚠️"] },
        { name: "Workiva", values: ["✅", "❌", "⚠️", "❌", "✅", "❌", "❌", "❌"] },
        { name: "Verdiq", values: ["⚠️", "✅", "✅", "✅", "✅", "✅", "✅", "✅"], highlight: true }
      ]
    },
    slide6: {
      title: "Глобальный мандат ESG",
      point1: "Регуляторное давление растет во всем мире (EU CSRD, SEC)",
      point2: "Инвесторы требуют абсолютной прозрачности ESG",
      point3: "Рост спроса на автоматизированные технологии устойчивого развития",
      point4: "Банки и фонды нуждаются в верифицированных данных",
      cagr: "Прогноз роста CAGR"
    },
    slide7: {
      title: "Масштабируемый Enterprise SaaS",
      tier1: "Стандарт",
      tier1Sub: "Для малого и среднего бизнеса",
      tier2: "Enterprise",
      tier2Sub: "Для глобальных корпораций",
      tier3: "Стратегический",
      tier3Sub: "Для банков и финансовых институтов",
      pricingNote: "Цена зависит от объема данных и количества объектов"
    },
    slide8: {
      title: "Почему Verdiq побеждает",
      col1: "Область",
      col2: "Verdiq AI",
      col3: "Консалтинг",
      row1: ["Слой интеллекта", "Проактивная ИИ-аналитика", "Ручной обзор"],
      row2: ["Частота обновлений", "В реальном времени (Live API)", "Ежегодно / Квартально"],
      row3: ["Эффективность затрат", "SaaS (в 10 раз дешевле)", "Почасовая (Дорого)"]
    },
    slide9: {
      title: "Глобальная инфраструктура ESG",
      item1: "Стать стандартом доверия для инвесторов",
      item2: "Заменить ручной консалтинг ESG автоматизацией ИИ",
      item3: "Создать глобальную нервную систему интеллекта ESG"
    },
    slide10: {
      title: "Verdiq — новый стандарт доверия в бизнесе.",
      slogan: "“Превращаем данные ESG в доверие для всего мира”",
      ask: "Ищем стратегические инвестиции и партнерства"
    },
    whitepaperModal: {
      title: "Обзор Whitepaper Verdiq",
      intro: "Whitepaper Verdiq — это не просто документ, а стратегический инструмент:",
      items: [
        { title: "Техническое доказательство", desc: "Детально описывает архитектуру, очистку «грязных» данных и алгоритм сопоставления с международными стандартами (CSRD, SEC)." },
        { title: "Установление стандарта", desc: "Формально описывает методологию нового стандарта доверия, превращая продукт в «индустриальный протокол»." },
        { title: "Доверие B2B и госсектора", desc: "Глубокое обоснование безопасности, прозрачности и точности данных для корпораций и госорганов." },
        { title: "Образование рынка", desc: "Объясняет, почему ручной сбор данных устарел и почему переход на real-time аналитику неизбежен." },
        { title: "Инвестиционный инструмент", desc: "База для Due Diligence венчурных фондов. Показывает глубину проработки бизнес-модели и технологического стека." }
      ],
      close: "Закрыть"
    }
  }
};
