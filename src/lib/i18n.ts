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