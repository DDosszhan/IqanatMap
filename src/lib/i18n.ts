export const languages = ["kk", "ru", "en"] as const;

export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function languagePath(lang: Lang, path = "/") {
  const cleanPath = path === "/" ? "" : path;
  return `/${lang}${cleanPath}`;
}

export const copy = {
  kk: {
    nav: {
      home: "Басты",
      teachers: "Мұғалімдер",
      calendar: "Күнтізбе",
      faculty: "Ұстаздар",
      sections: "Бөлімдер",
      map: "Карта",
      ordas: "Ордалар",
      language: "Тіл",
    },
    home: {
      eyebrow: "IQanat цифрлық анықтамалығы",
      title: "Бізді қосқан IQanat!",
      intro:
        "Мектеп қауымдастығына арналған цифрлық анықтамалық: бөлімдер, кампус картасы, ұстаздар туралы мәлімет және академиялық күнтізбе.",
      quick: "Жылдам кіру",
      quickTitle: "Бір анықтамалық, бірнеше бағыт",
      quickText:
        "Мұғалім, оқушы, ата-ана және қонақ өзіне керек маршрутты, кестені, адамды және орынды таңдаған тілінде көреді.",
      pages: [
        ["/teachers/calendar", "Академиялық күнтізбе", "Тоқсандар, бағалау кезеңдері және маңызды оқу күндері."],
        ["/teachers/faculty", "Ұстаздар", "Пәні, кабинеті, ғимараты және байланысы көрсетілген көрнекі анықтамалық."],
      ],
      values: {
        eyebrow: "IQanat құндылықтары",
        title: "Лидеры для будущего, ценности для жизни",
        intro: "Бұл төрт қағида мектеп мәдениетін, қарым-қатынасты және күнделікті таңдауды біріктіреді.",
        items: [
          ["Ар-ұждан", "Нравственность и порядочность: совесть, мораль және этика."],
          ["Қоғамға қызмет пен жанашырлық", "Еңбектің шынайы құндылығы оның басқаларға пайдасында көрінеді."],
          ["Ағартушылық пен білімге құштарлық", "Білімге ұмтылу, ой-өрісті кеңейту және үздіксіз даму."],
          ["Табандылық пен жетістікке ұмтылу", "Усердная работа, жауапкершілік және нәтижеге бағытталу."],
        ],
      },
    },    ordas: {
      eyebrow: "IQanat ордалары",
      title: "14 орда",
      intro: "Әр орда - өз түсі, мінезі және болашақ логотипі бар жеке қауымдастық. Қазір карточкалар дайын, эмблемаларды кейін қосуға болады.",
      logoPlaceholder: "Лого орны",
      membersLabel: "Оқушылар қауымдастығы",
    },

    faculty: {
      eyebrow: "Ұстаздар анықтамалығы",
      title: "Ұстаздар, міндеттер, кабинеттер және байланыстар",
      search: "Аты, пәні, ғимараты немесе кабинеті бойынша іздеу",
      noResults: "Сұрауыңыз бойынша ешкім табылмады",
      email: "email@iqanat.kz",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      teachers: "Учителям",
      calendar: "Календарь",
      faculty: "Команда",
      sections: "Разделы",
      map: "Карта",
      ordas: "Орды",
      language: "Язык",
    },
    home: {
      eyebrow: "Цифровой справочник IQanat",
      title: "Бізді қосқан IQanat!",
      intro:
        "Цифровой справочник для школьного сообщества: разделы, карта кампуса, сведения об учителях и академический календарь.",
      quick: "Быстрый доступ",
      quickTitle: "Один справочник, несколько направлений",
      quickText:
        "Учитель, ученик, родитель и гость видят нужный маршрут, расписание, человека и место на выбранном языке.",
      pages: [
        ["/teachers/calendar", "Академический календарь", "Четверти, периоды оценивания и важные учебные даты."],
        ["/teachers/faculty", "Учителя", "Наглядный справочник с предметом, кабинетом, зданием и контактами."],
      ],
      values: {
        eyebrow: "Ценности IQanat",
        title: "Лидеры для будущего, ценности для жизни",
        intro: "Четыре принципа, которые задают культуру школы, отношения в сообществе и ежедневные решения.",
        items: [
          ["Ар-ұждан", "Нравственность и порядочность: совесть, мораль и этика."],
          ["Қоғамға қызмет пен жанашырлық", "Служение обществу и забота о других через труд, который приносит пользу."],
          ["Ағартушылық пен білімге құштарлық", "Просвещение, стремление к знаниям и постоянное развитие."],
          ["Табандылық пен жетістікке ұмтылу", "Усердная работа и нацеленность на результат."],
        ],
      },
    },    ordas: {
      eyebrow: "Орды IQanat",
      title: "14 орд",
      intro: "Каждая орда получила свой цвет, характер и место под будущий логотип. Сейчас это готовая визуальная сетка, которую можно наполнить реальными эмблемами.",
      logoPlaceholder: "Место для лого",
      membersLabel: "Сообщество учеников",
    },

    faculty: {
      eyebrow: "Справочник учителей",
      title: "Учителя, роли, кабинеты и контакты",
      search: "Поиск по имени, предмету, зданию или кабинету",
      noResults: "По вашему запросу никто не найден",
      email: "email@iqanat.kz",
    },
  },
  en: {
    nav: {
      home: "Home",
      teachers: "Teachers",
      calendar: "Calendar",
      faculty: "Faculty",
      sections: "Sections",
      map: "Map",
      ordas: "Ordas",
      language: "Language",
    },
    home: {
      eyebrow: "IQanat digital guide",
      title: "Bızdı qosqan IQanat!",
      intro:
        "A digital guide for the school community with key sections, a campus map, faculty information, and the academic calendar.",
      quick: "Quick access",
      quickTitle: "One guide, several directions",
      quickText:
        "Teachers, students, parents, and guests can find the route, schedule, person, or place they need in their chosen language.",
      pages: [
        ["/teachers/calendar", "Academic calendar", "Terms, assessment periods, and important academic dates."],
        ["/teachers/faculty", "Faculty", "A visual directory with subjects, rooms, buildings, and contact details."],
      ],
      values: {
        eyebrow: "IQanat values",
        title: "Leaders for the future, values for life",
        intro: "Four principles that shape the school culture, community relationships, and everyday choices.",
        items: [
          ["Morality and Integrity", "Conscience, morals, ethics, and the habit of doing the right thing."],
          ["Service and Care", "Work has true value when it brings good to others and strengthens the community."],
          ["Enlightenment and Knowledge", "Curiosity, learning, and the pursuit of deeper understanding."],
          ["Diligence and Results", "Hard work, responsibility, and a steady focus on meaningful outcomes."],
        ],
      },
    },    ordas: {
      eyebrow: "IQanat ordas",
      title: "14 ordas",
      intro: "Each orda has its own color, character, and a reserved place for a future logo. For now, the page is ready as a clean visual grid.",
      logoPlaceholder: "Logo space",
      membersLabel: "Student community",
    },

    faculty: {
      eyebrow: "Faculty directory",
      title: "Faculty, roles, rooms, and contacts",
      search: "Search by name, subject, building, or room",
      noResults: "No faculty members match your search",
      email: "email@iqanat.kz",
    },
  },
} as const;