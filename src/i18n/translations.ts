export type Language = 'en' | 'ru' | 'de' | 'es';

export interface Translation {
  nav: {
    solutions: string;
    tech: string;
    architecture: string;
    metrics: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
    metrics: {
      latency: { value: string; label: string; desc: string };
      inference: { value: string; label: string; desc: string };
      reliability: { value: string; label: string; desc: string };
      gitops: { value: string; label: string; desc: string };
    };
  };
  solutions: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      aiOps: {
        badge: string;
        title: string;
        desc: string;
        bullets: string[];
        tags: string[];
        status: string;
      };
      cards: {
        badge: string;
        title: string;
        desc: string;
        bullets: string[];
        tags: string[];
        cta: string;
      };
      automation: {
        badge: string;
        title: string;
        desc: string;
        bullets: string[];
        tags: string[];
        status: string;
      };
    };
  };
  tech: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      cloudflare: { category: string; desc: string };
      gemini: { category: string; desc: string };
      orchestration: { category: string; desc: string };
      airllm: { category: string; desc: string };
      ollama: { category: string; desc: string };
      gots: { category: string; desc: string };
    };
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    principles: {
      localFirst: { title: string; desc: string };
      zeroTrust: { title: string; desc: string };
      declarative: { title: string; desc: string };
    };
    topology: {
      filename: string;
      synchronized: string;
      layer1: { name: string; desc: string };
      layer2: { name: string; desc: string };
      layer3: { name: string; desc: string };
      layer4: { name: string; desc: string };
      secureCircuit: string;
      checksPassed: string;
    };
  };
  showcase: {
    badge: string;
    title: string;
    subtitle: string;
    slides: {
      category: string;
      quote: string;
      author: string;
      role: string;
      metric: string;
      metricLabel: string;
    }[];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    primaryBtn: string;
    githubBtn: string;
  };
  footer: {
    desc: string;
    status: string;
    sections: {
      ecosystem: string;
      resources: string;
    };
    links: {
      cardsBot: string;
      aiOps: string;
      architecture: string;
      github: string;
      contact: string;
      domain: string;
    };
    copyright: string;
    hosting: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      solutions: 'Solutions',
      tech: 'Technology',
      architecture: 'Architecture',
      metrics: 'Benchmarks',
      contact: 'Get in Touch',
    },
    hero: {
      badge: 'AI Systems Engineering & Autonomous Solutions',
      title: 'Engineering Autonomous Agents & Generative Systems',
      subtitle: 'We architect, build, and deploy resilient AI agent networks, local LLM inference pipelines, and scalable generative applications for enterprise and consumer domains.',
      exploreBtn: 'Explore Solutions',
      contactBtn: 'Contact Team',
      metrics: {
        latency: { value: '0.8s', label: 'Response Latency', desc: 'Sub-second multi-modal inference delivered via optimized edge routing.' },
        inference: { value: '70B LLM', label: 'Local Hardware', desc: 'Layered offloading and memory optimization without third-party cloud data leaks.' },
        reliability: { value: '99.9%', label: 'Uptime Standard', desc: 'Redundant pipeline execution protected behind secure Zero Trust tunnels.' },
        gitops: { value: 'GitOps', label: 'Declarative Code', desc: 'Reproducible environments, immutable state, and automated verification.' },
      },
    },
    solutions: {
      badge: 'Ecosystem & Lab',
      title: 'Core Systems & Active Projects',
      subtitle: 'A balanced portfolio bridging heavy local AI infrastructure, automated workflows, and agile consumer products.',
      items: {
        aiOps: {
          badge: 'Core Research',
          title: 'Autonomous Agents & Local AI Ops',
          desc: 'Architecting self-sufficient multi-agent frameworks equipped with persistent vector memory, semantic indexing, and local 70B parameter inference.',
          bullets: [
            'Layered AirLLM execution on NVMe storage for consumer hardware',
            'Semantic vector memory with high-speed local embeddings',
            'Sandboxed execution loops with strict credential boundaries',
            'Zero cloud dependency for confidential code and log analysis',
          ],
          tags: ['Multi-Agent', 'AirLLM', 'Ollama', 'Vector DB', 'Go'],
          status: 'Internal Core Lab',
        },
        cards: {
          badge: 'Live Product',
          title: 'Synthix Cards - Consumer Micro-SaaS',
          desc: 'Our pilot consumer application demonstrating low-latency creative generation: tailored greeting cards and digital art powered by Google Gemini Flash.',
          bullets: [
            'Instant multi-modal rendering on Gemini 3.8/3.1 Flash',
            'Clean output without third-party branding or watermarks',
            'Interactive Telegram Bot interface with inline controls',
            'Ready for in-app micro-transactions and Telegram Stars',
          ],
          tags: ['Telegram Bot', 'Gemini Flash', 'Micro-SaaS', 'Python'],
          cta: 'Launch @synthixcards_bot',
        },
        automation: {
          badge: 'Enterprise Platform',
          title: 'Resilient Systems Automation',
          desc: 'Production-grade event-driven orchestration pipelines, automating telemetry analysis, multi-repository tasks, and incident response.',
          bullets: [
            'Isolated event pipelines behind Zero Trust network boundaries',
            'Bi-directional integrations with version control and issue trackers',
            'Deterministic webhook ingestion with automatic replay mechanisms',
            'Continuous monitoring, telemetry alerts, and immutable audit logs',
          ],
          tags: ['Event-Driven', 'Zero Trust', 'Webhooks', 'Docker', 'Automation'],
          status: 'Protected Infrastructure',
        },
      },
    },
    tech: {
      badge: 'Stack & Foundations',
      title: 'Engineered for Performance & Privacy',
      subtitle: 'We select resilient industry foundations paired with bleeding-edge local inference methodologies.',
      items: {
        cloudflare: {
          category: 'Edge & Network',
          desc: 'Global Anycast CDN, DDoS mitigation, DNS security, and encrypted Zero Trust tunnels without exposed public ports.',
        },
        gemini: {
          category: 'Cloud Models',
          desc: 'High-throughput multimodal inference with sub-second generation speeds for public-facing consumer products.',
        },
        orchestration: {
          category: 'Pipeline Engine',
          desc: 'Deterministic event routing, automated operational triggers, and API gateway integrations.',
        },
        airllm: {
          category: 'Local Intelligence',
          desc: 'Layer-wise NVMe weight offloading enabling 70B parameter model execution on accessible workstation hardware.',
        },
        ollama: {
          category: 'Vector Embeddings',
          desc: 'Self-hosted lightweight embeddings powering real-time semantic search and code indexing.',
        },
        gots: {
          category: 'Runtime Stack',
          desc: 'Memory-safe backend microservices in Go coupled with strictly typed TypeScript frontends.',
        },
      },
    },
    architecture: {
      badge: 'Engineering Standards',
      title: 'Architectural Philosophy',
      subtitle: 'Balancing edge performance with total data sovereignty and strict isolation.',
      principles: {
        localFirst: {
          title: 'Local-First & Data Sovereignty',
          desc: 'Public-facing consumer requests utilize fast edge APIs, whereas private intellectual property, logs, and internal tasks never leave local hardware.',
        },
        zeroTrust: {
          title: 'Zero Trust Network Perimeter',
          desc: 'Internal orchestration and admin surfaces operate without open public listening ports, completely shielded by authenticated tunnels.',
        },
        declarative: {
          title: 'Declarative Discipline',
          desc: 'Zero manual server alterations. Every configuration is version-controlled, reproducible, and tracked in immutable repositories.',
        },
      },
      topology: {
        filename: 'synthix-topology.yaml',
        synchronized: 'SYNCHRONIZED',
        layer1: { name: 'Edge Ingress', desc: 'Cloudflare Pages & Anycast DNS' },
        layer2: { name: 'App Gateway', desc: 'Consumer Services & Gemini Engine' },
        layer3: { name: 'Zero Trust Mesh', desc: 'Encrypted Tunnels & Private Services' },
        layer4: { name: 'Hardware Node', desc: 'Local 70B Model & Vector Index' },
        secureCircuit: 'Isolated operational perimeter',
        checksPassed: 'All health checks nominal',
      },
    },
    showcase: {
      badge: 'Operational Impact',
      title: 'Measurable Outcomes',
      subtitle: 'Demonstrated results across our consumer experiments, agent workflows, and internal architectures.',
      slides: [
        {
          category: 'Consumer Micro-SaaS',
          quote: 'Synthix Cards demonstrates how modern multi-modal models can produce personalized, clean creative assets in seconds without visual artifacts.',
          author: 'Michael K.',
          role: 'Product Engineering Lead',
          metric: '0.8s',
          metricLabel: 'average delivery latency',
        },
        {
          category: 'Private AI Inference',
          quote: 'Deploying layer-wise 70B inference locally enabled deep analysis of confidential logs and code without exposing proprietary data to third-party endpoints.',
          author: 'Dennis V.',
          role: 'AI Systems Architect',
          metric: '100%',
          metricLabel: 'data privacy compliance',
        },
        {
          category: 'Automated Operations',
          quote: 'Decoupling internal orchestration behind Zero Trust tunnels removed attack surfaces while cutting routine operational overhead substantially.',
          author: 'Sergey M.',
          role: 'Infrastructure Specialist',
          metric: '99.9%',
          metricLabel: 'pipeline availability',
        },
      ],
    },
    cta: {
      badge: 'Connect With Us',
      title: 'Ready to Explore AI Engineering or Collaborate?',
      subtitle: 'Discover our open-source tools, test our pilot consumer bot, or reach out to discuss custom autonomous agent architectures.',
      primaryBtn: 'Open @synthixcards_bot',
      githubBtn: 'GitHub Profile',
    },
    footer: {
      desc: 'SynthixHQ is a focused engineering studio designing autonomous agents, private LLM pipelines, and generative applications.',
      status: 'All systems operating normally',
      sections: {
        ecosystem: 'Ecosystem',
        resources: 'Resources',
      },
      links: {
        cardsBot: 'Synthix Cards Pilot Bot',
        aiOps: 'Local AI Ops Research',
        architecture: 'Architecture Guidelines',
        github: 'github.com/synthixhq',
        contact: 'Direct Contact',
        domain: 'synthixhq.com',
      },
      copyright: '© 2026 SynthixHQ. All rights reserved.',
      hosting: 'Hosted on Cloudflare Pages',
    },
  },
  ru: {
    nav: {
      solutions: 'Решения',
      tech: 'Технологии',
      architecture: 'Архитектура',
      metrics: 'Метрики',
      contact: 'Связаться',
    },
    hero: {
      badge: 'Инженерия ИИ-систем и автономные решения',
      title: 'Проектирование автономных агентов и генеративных систем',
      subtitle: 'Мы проектируем, создаем и внедряем отказоустойчивые сети ИИ-агентов, локальный инференс LLM и масштабируемые генеративные приложения для бизнеса и пользователей.',
      exploreBtn: 'Изучить решения',
      contactBtn: 'Связаться с нами',
      metrics: {
        latency: { value: '0.8 с', label: 'Отклик генерации', desc: 'Субсекундный мультимодальный инференс через оптимизированную edge-маршрутизацию.' },
        inference: { value: '70B LLM', label: 'Локальное железо', desc: 'Послойная выгрузка без передачи конфиденциальных данных во внешние облака.' },
        reliability: { value: '99.9%', label: 'Стандарт аптайма', desc: 'Отказоустойчивое исполнение процессов под защитой Zero Trust тоннелей.' },
        gitops: { value: 'GitOps', label: 'Декларативный код', desc: 'Воспроизводимые окружения, неизменяемое состояние и автоматический аудит.' },
      },
    },
    solutions: {
      badge: 'Экосистема и лаборатория',
      title: 'Ключевые системы и активные проекты',
      subtitle: 'Сбалансированный портфель, объединяющий локальную ИИ-инфраструктуру, автоматизацию и прикладные потребительские продукты.',
      items: {
        aiOps: {
          badge: 'Исследования',
          title: 'Автономные агенты и локальный AI Ops',
          desc: 'Проектирование мультиагентных систем с персистентной векторной памятью, семантической индексацией и локальным инференсом 70B моделей.',
          bullets: [
            'Послойный запуск AirLLM на NVMe накопителях для доступного оборудования',
            'Семантическая векторная память со скоростными локальными эмбеддингами',
            'Изолированные контуры исполнения со строгим разделением прав',
            'Полная независимость от облаков при анализе закрытого кода и логов',
          ],
          tags: ['Мультиагенты', 'AirLLM', 'Ollama', 'Векторная БД', 'Go'],
          status: 'Внутренняя лаборатория',
        },
        cards: {
          badge: 'Пилотный продукт',
          title: 'Synthix Cards - Генеративный микро-SaaS',
          desc: 'Наш первый потребительский сервис, демонстрирующий быстрый отклик генерации: авторские открытки и поздравления на Google Gemini Flash.',
          bullets: [
            'Мгновенный мультимодальный рендеринг на Gemini 3.8/3.1 Flash',
            'Чистый результат без сторонних логотипов и водяных знаков',
            'Интерактивный интерфейс Telegram-бота с inline-кнопками',
            'Готовность к приему микроплатежей и Telegram Stars',
          ],
          tags: ['Telegram Bot', 'Gemini Flash', 'Micro-SaaS', 'Python'],
          cta: 'Запустить @synthixcards_bot',
        },
        automation: {
          badge: 'Платформа автоматизации',
          title: 'Отказоустойчивая системная автоматизация',
          desc: 'Событийно-ориентированные конвейеры автоматизации телеметрии, межрепозиторных операций и реагирования на инциденты.',
          bullets: [
            'Изолированные конвейеры за защищенным периметром Zero Trust',
            'Двусторонняя интеграция с системами контроля версий и трекерами',
            'Детерминированный прием вебхуков с механизмами повтора',
            'Непрерывный мониторинг, телеметрия и неизменяемый аудит событий',
          ],
          tags: ['Event-Driven', 'Zero Trust', 'Webhooks', 'Docker', 'Автоматизация'],
          status: 'Защищенная инфраструктура',
        },
      },
    },
    tech: {
      badge: 'Стек и фундамент',
      title: 'Спроектировано для скорости и приватности',
      subtitle: 'Объединяем индустриальные сетевые стандарты с передовыми практиками локального инференса.',
      items: {
        cloudflare: {
          category: 'Edge и сеть',
          desc: 'Глобальный Anycast CDN, защита от DDoS, DNS и зашифрованные Zero Trust тоннели без открытых портов наружу.',
        },
        gemini: {
          category: 'Облачные модели',
          desc: 'Высокопроизводительный мультимодальный инференс с субсекундным ответом для публичных сервисов.',
        },
        orchestration: {
          category: 'Конвейеры',
          desc: 'Детерминированная маршрутизация событий, автоматические триггеры и интеграция с внешними API.',
        },
        airllm: {
          category: 'Локальный ИИ',
          desc: 'Послойная выгрузка весов из NVMe, позволяющая запускать 70B модели на рабочей станции.',
        },
        ollama: {
          category: 'Векторный поиск',
          desc: 'Локальные эмбеддинги для семантического поиска и индексации проектной базы знаний.',
        },
        gots: {
          category: 'Стек разработки',
          desc: 'Безопасные по памяти микросервисы на Go и строго типизированные интерфейсы на TypeScript.',
        },
      },
    },
    architecture: {
      badge: 'Инженерные стандарты',
      title: 'Архитектурные принципы',
      subtitle: 'Баланс между производительностью на периметре и суверенитетом критических данных.',
      principles: {
        localFirst: {
          title: 'Локальный приоритет и защита данных',
          desc: 'Публичные пользовательские запросы обрабатываются скоростными edge-API, а закрытый исходный код и логи остаются строго на собственном оборудовании.',
        },
        zeroTrust: {
          title: 'Zero Trust периметр',
          desc: 'Внутренние панели и контуры управления не имеют открытых портов в интернет и защищены авторизованными тоннелями.',
        },
        declarative: {
          title: 'Декларативная строгость',
          desc: 'Никаких ручных изменений на хостах. Все конфигурации версионируются, проверяются линтерами и воспроизводимы.',
        },
      },
      topology: {
        filename: 'synthix-topology.yaml',
        synchronized: 'СИНХРОНИЗИРОВАНО',
        layer1: { name: 'Edge Ingress', desc: 'Cloudflare Pages и Anycast DNS' },
        layer2: { name: 'Шлюз приложений', desc: 'Пользовательские сервисы и Gemini' },
        layer3: { name: 'Zero Trust контур', desc: 'Зашифрованные тоннели и сервисы' },
        layer4: { name: 'Локальный узел', desc: '70B модель и векторная память' },
        secureCircuit: 'Изолированный рабочий контур',
        checksPassed: 'Все проверки пройдены штатно',
      },
    },
    showcase: {
      badge: 'Результаты внедрения',
      title: 'Практические показатели',
      subtitle: 'Подтвержденные метрики в потребительских сервисах и внутренних архитектурных контурах.',
      slides: [
        {
          category: 'Потребительский микро-SaaS',
          quote: 'Synthix Cards подтверждает, что генеративные модели способны создавать авторский визуальный контент за доли секунды без артефактов.',
          author: 'Михаил К.',
          role: 'Лид продуктовой разработки',
          metric: '0.8 с',
          metricLabel: 'среднее время ответа',
        },
        {
          category: 'Локальный инференс ИИ',
          quote: 'Послойный запуск 70B моделей на локальном железе позволил безопасно работать с конфиденциальными логами без отправки во внешние облака.',
          author: 'Денис В.',
          role: 'Архитектор ИИ-систем',
          metric: '100%',
          metricLabel: 'приватность данных',
        },
        {
          category: 'Автоматизация процессов',
          quote: 'Изоляция внутренних контуров за Zero Trust тоннелями полностью убрала вектор внешних атак и автоматизировала рутинные задачи.',
          author: 'Сергей М.',
          role: 'Инженер инфраструктуры',
          metric: '99.9%',
          metricLabel: 'аптайм процессов',
        },
      ],
    },
    cta: {
      badge: 'Связь с нами',
      title: 'Хотите обсудить решения или сотрудничество?',
      subtitle: 'Изучите наши наработки на GitHub, протестируйте пилотный сервис или свяжитесь для проектирования архитектуры.',
      primaryBtn: 'Запустить @synthixcards_bot',
      githubBtn: 'GitHub Профиль',
    },
    footer: {
      desc: 'SynthixHQ - инженерная студия, проектирующая автономных агентов, локальные контуры LLM и генеративные сервисы.',
      status: 'Все системы функционируют в штатном режиме',
      sections: {
        ecosystem: 'Экосистема',
        resources: 'Ресурсы',
      },
      links: {
        cardsBot: 'Пилотный бот Synthix Cards',
        aiOps: 'Исследования AI Ops',
        architecture: 'Стандарты архитектуры',
        github: 'github.com/synthixhq',
        contact: 'Прямая связь',
        domain: 'synthixhq.com',
      },
      copyright: '© 2026 SynthixHQ. Все права защищены.',
      hosting: 'Хостинг на Cloudflare Pages',
    },
  },
  de: {
    nav: {
      solutions: 'Lösungen',
      tech: 'Technologie',
      architecture: 'Architektur',
      metrics: 'Benchmarks',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'KI-Systementwicklung & Autonome Lösungen',
      title: 'Entwicklung autonomer Agenten & generativer Systeme',
      subtitle: 'Wir entwickeln und implementieren robuste KI-Agentennetzwerke, lokale LLM-Inferenzpipelines und skalierbare generative Anwendungen.',
      exploreBtn: 'Lösungen entdecken',
      contactBtn: 'Kontakt aufnehmen',
      metrics: {
        latency: { value: '0.8s', label: 'Antwortzeit', desc: 'Subsekunden-Inferenz über optimiertes Edge-Routing.' },
        inference: { value: '70B LLM', label: 'Lokale Hardware', desc: 'Schichtweise Auslagerung ohne Datenweitergabe an externe Clouds.' },
        reliability: { value: '99.9%', label: 'Verfügbarkeit', desc: 'Redundante Ausführung hinter sicheren Zero-Trust-Tunneln.' },
        gitops: { value: 'GitOps', label: 'Deklarativer Code', desc: 'Reproduzierbare Umgebungen und automatisierte Verifizierung.' },
      },
    },
    solutions: {
      badge: 'Ökosystem & Labor',
      title: 'Kernsysteme & Aktive Projekte',
      subtitle: 'Ein ausgewogenes Portfolio aus lokaler KI-Infrastruktur, Automatisierung und B2C-Produkten.',
      items: {
        aiOps: {
          badge: 'Forschung',
          title: 'Autonome Agenten & Lokale KI',
          desc: 'Entwicklung von Multi-Agenten-Systemen mit persistentem Vektorgedächtnis und lokaler 70B-Inferenz.',
          bullets: [
            'Schichtweise AirLLM-Ausführung auf NVMe-Speicher',
            'Semantisches Vektorgedächtnis mit lokalen Embeddings',
            'Isolierte Ausführungsumgebungen mit strikten Berechtigungen',
            'Vollständige Datensouveränität ohne Cloud-Abhängigkeit',
          ],
          tags: ['Multi-Agenten', 'AirLLM', 'Ollama', 'Vektor-DB', 'Go'],
          status: 'Internes Forschungslabor',
        },
        cards: {
          badge: 'Pilotprodukt',
          title: 'Synthix Cards - Generatives Micro-SaaS',
          desc: 'Unser erstes Verbraucherprodukt für maßgeschneiderte Grußkarten auf Basis von Google Gemini Flash.',
          bullets: [
            'Sofortiges Rendering mit Gemini 3.8/3.1 Flash',
            'Saubere Ausgabe ohne fremde Wasserzeichen',
            'Interaktiver Telegram-Bot mit Inline-Steuerung',
            'Vorbereitet für Telegram Stars und Mikrozahlungen',
          ],
          tags: ['Telegram Bot', 'Gemini Flash', 'Micro-SaaS', 'Python'],
          cta: '@synthixcards_bot starten',
        },
        automation: {
          badge: 'Plattform',
          title: 'Ausfallsichere Systemautomatisierung',
          desc: 'Ereignisgesteuerte Orchestrierungspipelines für Telemetrie, Code-Abläufe und Incident Management.',
          bullets: [
            'Isolierte Pipelines hinter Zero-Trust-Netzwerkgrenzen',
            'Bidirektionale Integration in Repositories und Tracker',
            'Deterministische Webhook-Verarbeitung mit Retry-Mechanismus',
            'Kontinuierliche Überwachung und unveränderliche Audit-Logs',
          ],
          tags: ['Event-Driven', 'Zero Trust', 'Webhooks', 'Docker', 'Automatisierung'],
          status: 'Geschützte Infrastruktur',
        },
      },
    },
    tech: {
      badge: 'Technologie-Stack',
      title: 'Entwickelt für Tempo & Privatsphäre',
      subtitle: 'Industrielle Sicherheitsstandards kombiniert mit modernen lokalen Inferenzmethoden.',
      items: {
        cloudflare: { category: 'Edge & Netzwerk', desc: 'Anycast CDN, DDoS-Schutz, DNS und verschlüsselte Zero-Trust-Tunnel.' },
        gemini: { category: 'Cloud-Modelle', desc: 'Schnelle multimodale Inferenz mit Subsekunden-Reaktionszeit für Web-Dienste.' },
        orchestration: { category: 'Orchestrierung', desc: 'Ereignisgesteuertes Routing, automatische Trigger und API-Integrationen.' },
        airllm: { category: 'Lokale KI', desc: 'Schichtweises NVMe-Offloading für 70B-Modelle auf Standard-Hardware.' },
        ollama: { category: 'Vektorsuche', desc: 'Lokale Embeddings für semantische Suche und Wissensindexierung.' },
        gots: { category: 'Entwicklungs-Stack', desc: 'Leistungsfähige Go-Microservices und typsicheres TypeScript im Frontend.' },
      },
    },
    architecture: {
      badge: 'Architektur',
      title: 'Architekturprinzipien',
      subtitle: 'Balance zwischen Edge-Geschwindigkeit und vollständiger Datenhoheit.',
      principles: {
        localFirst: {
          title: 'Local-First & Datensouveränität',
          desc: 'Öffentliche Anfragen nutzen schnelle Edge-APIs, während vertrauliche Daten und Code die lokale Hardware nie verlassen.',
        },
        zeroTrust: {
          title: 'Zero-Trust-Perimeter',
          desc: 'Interne Systeme haben keine offenen Ports im Internet und sind vollständig über Tunnel geschützt.',
        },
        declarative: {
          title: 'Deklarative Disziplin',
          desc: 'Keine manuellen Serveränderungen. Jede Konfiguration ist versioniert und reproduzierbar.',
        },
      },
      topology: {
        filename: 'synthix-topology.yaml',
        synchronized: 'SYNCHRONISIERT',
        layer1: { name: 'Edge Ingress', desc: 'Cloudflare Pages & Anycast DNS' },
        layer2: { name: 'App Gateway', desc: 'Services & Gemini Engine' },
        layer3: { name: 'Zero Trust Mesh', desc: 'Verschlüsselte Tunnel & Private Dienste' },
        layer4: { name: 'Lokaler Knoten', desc: '70B Modell & Vektorindex' },
        secureCircuit: 'Isolierter Sicherheitsbereich',
        checksPassed: 'Alle Systemtests bestanden',
      },
    },
    showcase: {
      badge: 'Messbare Ergebnisse',
      title: 'Praxiserprobte Metriken',
      subtitle: 'Nachgewiesene Ergebnisse in unseren Produkten und internen Pipelines.',
      slides: [
        {
          category: 'Consumer Micro-SaaS',
          quote: 'Synthix Cards zeigt, wie generative Modelle in Sekunden hochwertige visuelle Inhalte ohne Artefakte liefern können.',
          author: 'Michael K.',
          role: 'Lead Product Engineer',
          metric: '0.8s',
          metricLabel: 'durchschnittliche Latenz',
        },
        {
          category: 'Lokale KI-Inferenz',
          quote: 'Der lokale Betrieb von 70B-Modellen ermöglichte die Analyse vertraulicher Logs ohne Weitergabe an externe Server.',
          author: 'Dennis V.',
          role: 'KI-Architekt',
          metric: '100%',
          metricLabel: 'Datenschutzkonformität',
        },
        {
          category: 'Automatisierung',
          quote: 'Die Kapselung interner Dienste hinter Zero-Trust-Tunneln eliminierte externe Angriffsflächen vollständig.',
          author: 'Sergey M.',
          role: 'Infrastruktur-Ingenieur',
          metric: '99.9%',
          metricLabel: 'Systemverfügbarkeit',
        },
      ],
    },
    cta: {
      badge: 'Kontakt',
      title: 'Bereit für KI-Engineering oder Zusammenarbeit?',
      subtitle: 'Entdecken Sie unsere Projekte auf GitHub oder kontaktieren Sie uns für Architekturlösungen.',
      primaryBtn: '@synthixcards_bot öffnen',
      githubBtn: 'GitHub-Profil',
    },
    footer: {
      desc: 'SynthixHQ ist ein Ingenieurstudio für autonome Agenten, lokale LLMs und generative Services.',
      status: 'Alle Systeme laufen planmäßig',
      sections: {
        ecosystem: 'Ökosystem',
        resources: 'Ressourcen',
      },
      links: {
        cardsBot: 'Synthix Cards Pilot-Bot',
        aiOps: 'AI Ops Forschung',
        architecture: 'Architekturrichtlinien',
        github: 'github.com/synthixhq',
        contact: 'Direkter Kontakt',
        domain: 'synthixhq.com',
      },
      copyright: '© 2026 SynthixHQ. Alle Rechte vorbehalten.',
      hosting: 'Gehostet auf Cloudflare Pages',
    },
  },
  es: {
    nav: {
      solutions: 'Soluciones',
      tech: 'Tecnología',
      architecture: 'Arquitectura',
      metrics: 'Métricas',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ingeniería de Sistemas de IA & Soluciones Autónomas',
      title: 'Diseño de agentes autónomos y sistemas generativos',
      subtitle: 'Diseñamos, construimos e implementamos redes de agentes de IA, pipelines de inferencia local de LLM y aplicaciones generativas escalables.',
      exploreBtn: 'Explorar Soluciones',
      contactBtn: 'Contactar Equipo',
      metrics: {
        latency: { value: '0.8s', label: 'Latencia de Respuesta', desc: 'Inferencia multimodal subsegundo mediante enrutamiento edge optimizado.' },
        inference: { value: '70B LLM', label: 'Hardware Local', desc: 'Descarga por capas sin fuga de datos privados a nubes externas.' },
        reliability: { value: '99.9%', label: 'Disponibilidad', desc: 'Ejecución redundante protegida por túneles seguros Zero Trust.' },
        gitops: { value: 'GitOps', label: 'Código Declarativo', desc: 'Entornos reproducibles, estado inmutable y verificación automatizada.' },
      },
    },
    solutions: {
      badge: 'Ecosistema & Laboratorio',
      title: 'Sistemas Clave y Proyectos Activos',
      subtitle: 'Un portafolio equilibrado que conecta infraestructura local de IA, flujos automatizados y productos de usuario.',
      items: {
        aiOps: {
          badge: 'Investigación',
          title: 'Agentes Autónomos & AI Ops Local',
          desc: 'Arquitectura de marcos multiagente con memoria vectorial persistente, indexación semántica e inferencia local de 70B.',
          bullets: [
            'Ejecución estratificada de AirLLM en almacenamiento NVMe',
            'Memoria vectorial semántica con embeddings locales rápidos',
            'Entornos aislados de ejecución con límites estrictos de permisos',
            'Cero dependencia en la nube para código y registros confidenciales',
          ],
          tags: ['Multi-Agente', 'AirLLM', 'Ollama', 'Base Vectorial', 'Go'],
          status: 'Laboratorio Interno',
        },
        cards: {
          badge: 'Producto Piloto',
          title: 'Synthix Cards - Micro-SaaS Generativo',
          desc: 'Nuestra aplicación piloto de consumo para tarjetas personalizadas impulsada por Google Gemini Flash.',
          bullets: [
            'Renderizado multimodal instantáneo con Gemini 3.8/3.1 Flash',
            'Resultados limpios sin marcas de agua de terceros',
            'Interfaz interactiva de bot de Telegram con botones inline',
            'Listo para micropagos integrados y Telegram Stars',
          ],
          tags: ['Telegram Bot', 'Gemini Flash', 'Micro-SaaS', 'Python'],
          cta: 'Abrir @synthixcards_bot',
        },
        automation: {
          badge: 'Plataforma',
          title: 'Automatización Resistente de Sistemas',
          desc: 'Flujos de orquestación orientados a eventos para análisis de telemetría y respuesta a incidentes.',
          bullets: [
            'Flujos aislados tras fronteras de red Zero Trust',
            'Integraciones bidireccionales con repositorios y rastreadores',
            'Ingesta determinista de webhooks con mecanismos de reintento',
            'Monitorización continua, telemetría y registros inmutables',
          ],
          tags: ['Event-Driven', 'Zero Trust', 'Webhooks', 'Docker', 'Automatización'],
          status: 'Infraestructura Protegida',
        },
      },
    },
    tech: {
      badge: 'Pila Tecnológica',
      title: 'Diseñado para Rendimiento & Privacidad',
      subtitle: 'Estándares industriales de red combinados con metodologías avanzadas de inferencia local.',
      items: {
        cloudflare: { category: 'Edge y Red', desc: 'Anycast CDN global, protección DDoS, DNS y túneles cifrados Zero Trust sin puertos expuestos.' },
        gemini: { category: 'Modelos en la Nube', desc: 'Inferencia multimodal de alto rendimiento con latencia subsegundo para productos públicos.' },
        orchestration: { category: 'Orquestación', desc: 'Enrutamiento determinista de eventos, activadores automáticos e integraciones API.' },
        airllm: { category: 'IA Local', desc: 'Descarga por capas en NVMe para ejecutar modelos de 70B en hardware accesible.' },
        ollama: { category: 'Búsqueda Vectorial', desc: 'Embeddings locales para búsqueda semántica e indexación de código.' },
        gots: { category: 'Pila de Desarrollo', desc: 'Microservicios seguros en Go e interfaces con tipado estricto en TypeScript.' },
      },
    },
    architecture: {
      badge: 'Estándares',
      title: 'Filosofía de Arquitectura',
      subtitle: 'Equilibrio entre rendimiento perimetral y soberanía absoluta de datos.',
      principles: {
        localFirst: {
          title: 'Local-First y Soberanía de Datos',
          desc: 'Las solicitudes públicas aprovechan APIs edge rápidas, mientras que los datos privados y el código nunca salen del hardware local.',
        },
        zeroTrust: {
          title: 'Perímetro Zero Trust',
          desc: 'Las superficies internas carecen de puertos públicos abiertos, protegidas totalmente por túneles autenticados.',
        },
        declarative: {
          title: 'Disciplina Declarativa',
          desc: 'Cero cambios manuales en servidores. Cada configuración está versionada, auditada y es reproducible.',
        },
      },
      topology: {
        filename: 'synthix-topology.yaml',
        synchronized: 'SINCRONIZADO',
        layer1: { name: 'Ingreso Edge', desc: 'Cloudflare Pages y Anycast DNS' },
        layer2: { name: 'Pasarela de Apps', desc: 'Servicios de Usuario y Motor Gemini' },
        layer3: { name: 'Malla Zero Trust', desc: 'Túneles Cifrados y Servicios Privados' },
        layer4: { name: 'Nodo de Hardware', desc: 'Modelo 70B e Índice Vectorial' },
        secureCircuit: 'Perímetro operativo aislado',
        checksPassed: 'Todas las pruebas operativas nominales',
      },
    },
    showcase: {
      badge: 'Impacto Real',
      title: 'Resultados Demostrados',
      subtitle: 'Métricas verificadas en nuestras aplicaciones y pipelines internos.',
      slides: [
        {
          category: 'Micro-SaaS de Consumo',
          quote: 'Synthix Cards demuestra cómo los modelos generativos producen contenido visual limpio en segundos sin marcas de agua.',
          author: 'Michael K.',
          role: 'Líder de Ingeniería de Producto',
          metric: '0.8s',
          metricLabel: 'latencia media de respuesta',
        },
        {
          category: 'Inferencia Local de IA',
          quote: 'La ejecución local de 70B permitió analizar registros confidenciales sin transferir propiedad intelectual a nubes de terceros.',
          author: 'Dennis V.',
          role: 'Arquitecto de Sistemas de IA',
          metric: '100%',
          metricLabel: 'privacidad de datos',
        },
        {
          category: 'Operaciones Automatizadas',
          quote: 'Aislar las operaciones internas tras túneles Zero Trust eliminó por completo los vectores de ataque externos.',
          author: 'Sergey M.',
          role: 'Ingeniero de Infraestructura',
          metric: '99.9%',
          metricLabel: 'disponibilidad del sistema',
        },
      ],
    },
    cta: {
      badge: 'Conectar',
      title: '¿Listo para explorar ingeniería de IA o colaborar?',
      subtitle: 'Descubra nuestras herramientas en GitHub, pruebe nuestro bot piloto o contáctenos para diseñar arquitecturas.',
      primaryBtn: 'Abrir @synthixcards_bot',
      githubBtn: 'Perfil de GitHub',
    },
    footer: {
      desc: 'SynthixHQ es un estudio de ingeniería enfocado en agentes autónomos, pipelines locales de LLM y servicios generativos.',
      status: 'Todos los sistemas operando con normalidad',
      sections: {
        ecosystem: 'Ecosistema',
        resources: 'Recursos',
      },
      links: {
        cardsBot: 'Bot Piloto Synthix Cards',
        aiOps: 'Investigación AI Ops',
        architecture: 'Directrices de Arquitectura',
        github: 'github.com/synthixhq',
        contact: 'Contacto Directo',
        domain: 'synthixhq.com',
      },
      copyright: '© 2026 SynthixHQ. Todos los derechos reservados.',
      hosting: 'Alojado en Cloudflare Pages',
    },
  },
};
