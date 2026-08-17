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
      inProgress: "Жасалуда",
    },
    home: {
      eyebrow: "IQanat құндылықтары",
      title: "Бізді қосқан IQanat!",
      intro:
        "Мектеп қауымдастығын біріктіретін бағыттар: құндылықтар, академиялық күнтізбе, ордалар және кампус картасы.",
      quick: "Жылдам кіру",
      quickTitle: "Құндылықтар, бір ортақ бағыт",
      quickText:
        "IQanat құндылықтары оқушы, мұғалім, ата-ана және қонақ үшін ортақ мәдениетті көрсетеді.",
      pages: [
        ["/teachers/calendar", "Академиялық күнтізбе", "Тоқсандар, бағалау кезеңдері және маңызды оқу күндері."],
        ["/teachers/faculty", "Ұстаздар", "Бұл бөлім әзірленіп жатыр. Фотосуреттер мен деректер сақталады."],
      ],
      values: {
        eyebrow: "IQanat құндылықтары",
        title: "Болашақ көшбасшылары, өмірлік құндылықтар",
        intro: "Бұл төрт қағида мектеп мәдениетін, қарым-қатынасты және күнделікті таңдауды біріктіреді.",
        items: [
          ["Ар-ұждан", "Адалдық, адамгершілік және дұрыс әрекет ету дағдысы."],
          ["Қоғамға қызмет", "Еңбектің шынайы құндылығы оның басқаларға пайдасында көрінеді."],
          ["Білімге құштарлық", "Білуге ұмтылу, ой-өрісті кеңейту және үздіксіз даму."],
          ["Табандылық", "Жауапкершілік, еңбексүйгіштік және нәтижеге бағытталу."],
        ],
      },
    },
    ordas: {
      eyebrow: "IQanat ордалары",
      title: "14 орда",
      intro: "Актуалды 14 орда: әрқайсысының өз түсі, мінезі және логотипі бар. Карточканы ашқанда тек таңдалған орданың белгісі жүктеледі.",
      logoPlaceholder: "Орда белгісі",
      membersLabel: "Оқушылар қауымдастығы",
    },
    faculty: {
      eyebrow: "Ұстаздар командасы",
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
      inProgress: "В процессе",
    },
    home: {
      eyebrow: "Ценности IQanat",
      title: "Бізді қосқан IQanat!",
      intro:
        "Пространство школьного сообщества: ценности, академический календарь, орды и карта кампуса.",
      quick: "Быстрый доступ",
      quickTitle: "Ценности, один общий ориентир",
      quickText:
        "Ценности IQanat задают общий язык для учеников, учителей, родителей и гостей школы.",
      pages: [
        ["/teachers/calendar", "Академический календарь", "Четверти, периоды оценивания и важные учебные даты."],
        ["/teachers/faculty", "Учителя", "Раздел готовится. Фотографии и данные остаются сохранены."],
      ],
      values: {
        eyebrow: "Ценности IQanat",
        title: "Лидерство и ценности для жизни",
        intro: "Четыре принципа задают культуру школы, отношения в сообществе и ежедневные решения.",
        items: [
          ["Совесть и честность", "Нравственность, порядочность и привычка поступать правильно."],
          ["Служение и забота", "Труд имеет настоящую ценность, когда приносит пользу другим."],
          ["Просвещение и знания", "Любознательность, стремление к знаниям и постоянное развитие."],
          ["Трудолюбие и результат", "Ответственность, усердие и устойчивый фокус на результате."],
        ],
      },
    },
    ordas: {
      eyebrow: "Орды IQanat",
      title: "14 орд",
      intro: "Актуальные 14 орд: у каждой есть свой цвет, характер и логотип. При открытии карточки загружается только знак выбранной орды.",
      logoPlaceholder: "Знак орды",
      membersLabel: "Сообщество учеников",
    },
    faculty: {
      eyebrow: "Команда учителей",
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
      inProgress: "In progress",
    },
    home: {
      eyebrow: "IQanat values",
      title: "Bizdi qosqan IQanat!",
      intro:
        "A school community space with values, the academic calendar, ordas, and the campus map.",
      quick: "Quick access",
      quickTitle: "Values, one shared direction",
      quickText:
        "IQanat values give students, teachers, parents, and guests a shared cultural compass.",
      pages: [
        ["/teachers/calendar", "Academic calendar", "Terms, assessment periods, and important academic dates."],
        ["/teachers/faculty", "Faculty", "This section is in progress. Photos and data remain saved."],
      ],
      values: {
        eyebrow: "IQanat values",
        title: "Values for leadership and life",
        intro: "Four principles that shape the school culture, community relationships, and everyday choices.",
        items: [
          ["Morality and Integrity", "Conscience, morals, ethics, and the habit of doing the right thing."],
          ["Service and Care", "Work has true value when it brings good to others and strengthens the community."],
          ["Enlightenment and Knowledge", "Curiosity, learning, and the pursuit of deeper understanding."],
          ["Diligence and Results", "Hard work, responsibility, and a steady focus on meaningful outcomes."],
        ],
      },
    },
    ordas: {
      eyebrow: "IQanat ordas",
      title: "14 ordas",
      intro: "The current set of 14 ordas is live: each one has its own color, character, and logo. Opening a card loads only the selected orda mark.",
      logoPlaceholder: "Orda mark",
      membersLabel: "Student community",
    },
    faculty: {
      eyebrow: "Faculty team",
      title: "Faculty, roles, rooms, and contacts",
      search: "Search by name, subject, building, or room",
      noResults: "No faculty members match your search",
      email: "email@iqanat.kz",
    },
  },
} as const;