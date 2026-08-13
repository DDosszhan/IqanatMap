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
      eyebrow: "IQanat digital guide",
      title: "Бізді қосқан IQanat!",
      intro:
        "Мектеп қауымдастығына арналған стильді guide: беттер, бөлімдер, карта, фото-анықтама, күнтізбе және рөлге қарай onboarding.",
      primary: "Мұғалімдер беті",
      secondary: "Бөлімдерді көру",
      quick: "Жылдам кіру",
      quickTitle: "Бір guide, бірнеше бағыт",
      quickText:
        "Мұғалім, оқушы, ата-ана және қонақ өзіне керек маршрутты, кестені, адамды және орынды бір тілде көреді.",
      buildable: "Құрылым",
      buildableTitle: "Келесі қосылатын беттер",
      buildableText:
        "Әр карточка кейін жеке бетке, сүзгіленетін guide-қа немесе интерактивті құралға айнала алады.",
      mapIdea: "Карта идеясы",
      mapTitle: "Төрт ғимарат негізгі навигация болады",
      pages: [
        ["/teachers", "Мұғалімдер hub", "Ғимараттар, жұмыс тәртібі, алғашқы апта, контактілер және күнделікті логистика."],
        ["/teachers/calendar", "Академиялық күнтізбе", "Тоқсандар, дедлайндар, бағалау, school events, parent meetings, planning days."],
        ["/teachers/faculty", "Ұстаздар фото", "Пәні, кабинеті, ғимараты және байланысы бар визуалды анықтама."],
      ],
      sections: [
        ["Campus map", "4 ғимарат, қабаттар, кабинеттер, маршруттар және пайдалы ескертпелер."],
        ["Main School", "Кабинеттер, кітапхана, асхана, медпункт, әкімшілік."],
        ["Freedom House", "Іс-шаралар, үйірмелер, project rooms, guest sessions, booking rules."],
        ["Residence", "Жатақхана тәртібі, evening duty, student support, escalation path."],
        ["IQanat life", "Клубтар, дәстүрлер, оқушы кеңестері, мектеп мәдениеті."],
        ["FAQ", "Мұғалім, оқушы, ата-ана және қонаққа арналған қысқа жауаптар."],
      ],
    },
    teachers: {
      eyebrow: "Teacher onboarding",
      title: "Мұғалімге кампуста керек нәрсенің бәрі",
      intro:
        "Жаңа және тұрақты мұғалімдерге арналған практикалық hub: ғимараттар, тәртіптер, академиялық күндер, адамдар, кабинеттер және жылдам жауаптар.",
      calendar: "Академиялық күнтізбе",
      faculty: "Ұстаздар фото",
      include: "Қосу керек блоктар",
      includeTitle: "Мұғалімдерге пайдалы бөлімдер",
      nextIdea: "Келесі feature идеясы",
      nextText:
        "Clickable campus map: ғимаратты таңдағанда қабаттар, кабинеттер, teacher areas, student routes, emergency points және не үшін бару керек деген note ашылады.",
      buildings: [
        ["Main School", "Сабақтар, әкімшілік, кітапхана, медпункт, негізгі кездесулер.", "Room directory, bell schedule, printer points, office contacts керек."],
        ["Freedom House", "Іс-шаралар, student initiatives, clubs, guest sessions.", "Booking rules, event checklist, AV equipment notes керек."],
        ["Teachers House", "Мұғалім workspace, демалыс, coordination және дайындық.", "Workspace etiquette, storage, meeting rooms, quiet hours керек."],
        ["Students Residence", "Жатақхана өмірі, evening supervision, pastoral care.", "Duty schedule, escalation rules, residence contacts керек."],
      ],
      essentials: [
        ["First week checklist", "Badge, Wi-Fi, platform access, timetable, room keys, duty rota."],
        ["Academic rhythm", "Terms, assessments, reporting weeks, exams, parent meetings."],
        ["Classroom logistics", "Room booking, projector setup, printing, supplies, lab rules."],
        ["Student support", "Advisors, house mentors, counselor, medical point, escalation path."],
        ["Communication", "Announcements, parent communication norms, templates."],
        ["Daily utilities", "Wi-Fi, meals, transport, arrivals, visitor process, lost-and-found."],
      ],
    },
    calendar: {
      eyebrow: "Teacher handbook",
      title: "Академиялық күнтізбе",
      current: "Ағымдағы оқу жылы",
      intro:
        "Мұғалімдерге жоспарлауға ыңғайлы: сабақ, reporting, student support, parent communication, summer school және state exams.",
      yearMap: "Жыл картасы",
      augustJune: "Тамыздан маусымға дейін",
      forTeachers: "Мұғалімдер үшін",
      helps: "Бұл бет неге көмектеседі",
      change: "Өзгерістер туралы note",
      changeText:
        "Күндер әкімшілік тарапынан өзгеруі мүмкін. Өзгеріс болса, бетте жаңартылған күн, қысқа себеп және кім растағаны көрсетіледі.",
      steps: [
        ["Orientation weeks", "17–28 тамыз 2026", "Оқу жылы алдындағы міндетті бағдарлау апталықтары. Барлық оқушылар қатысады."],
        ["I тоқсан", "1 қыркүйек – 23 қазан 2026", "Сабақтың басталуы, routine, diagnostics, алғашқы academic checkpoints."],
        ["II тоқсан", "27 қазан – 25 желтоқсан 2026", "Progress reports, projects rhythm, parent communication windows."],
        ["III тоқсан", "11 қаңтар – 19 наурыз 2027", "Deep academic term, olympiad season, assessment preparation."],
        ["IV тоқсан, 11-сынып", "24 наурыз – 25 мамыр 2027", "Grade 11 үшін final sprint: exams, closing tasks, graduation readiness."],
        ["IV тоқсан, 9–10-сынып", "29 наурыз – 25 мамыр 2027", "9–10 сыныптарға final academic quarter, reporting және transition planning."],
        ["Summer school & state exams", "26 мамыр – 11 маусым 2027", "Жазғы мектеп, мемлекеттік емтихандар және оқу жылын жабу."],
      ],
      needs: [
        "Пән кафедралары бойынша assessment және report deadlines белгілеу.",
        "Parent meeting windows және advisor check-in weeks қосу.",
        "Teachers House және Students Residence duty schedule links көрсету.",
        "Әкімшілік күндерді өзгертсе, visible change note сақтау.",
      ],
    },
    faculty: {
      eyebrow: "Faculty directory",
      title: "Жүздер, рөлдер, кабинеттер, контактілер",
      search: "Аты, пәні, ғимараты немесе кабинеті бойынша іздеу",
      email: "email@iqanat.kz",
    },
  },
  ru: {
    nav: { home: "Главная", teachers: "Учителям", calendar: "Календарь", faculty: "Команда", sections: "Разделы", map: "Карта", language: "Язык" },
    home: {
      eyebrow: "IQanat digital guide",
      title: "Бізді қосқан IQanat!",
      intro: "Стильный guide для школьного сообщества: страницы, разделы, карта, фото-справочник, календарь и onboarding по ролям.",
      primary: "Страница учителей", secondary: "Смотреть разделы", quick: "Быстрый вход", quickTitle: "Один guide, разные маршруты",
      quickText: "Учитель, ученик, родитель и гость видят нужный маршрут, расписание, человека и место на одном выбранном языке.",
      buildable: "Структура", buildableTitle: "Страницы, которые добавим дальше", buildableText: "Каждая карточка может стать отдельной страницей, фильтруемым guide или интерактивным инструментом.",
      mapIdea: "Идея карты", mapTitle: "Четыре здания как основная навигация",
      pages: [["/teachers", "Учительский hub", "Здания, рабочие правила, первая неделя, контакты и ежедневная логистика."], ["/teachers/calendar", "Академический календарь", "Четверти, дедлайны, оценивание, school events, parent meetings, planning days."], ["/teachers/faculty", "Фото учителей", "Визуальный справочник с предметом, кабинетом, зданием и контактами."]],
      sections: [["Campus map", "4 здания, этажи, кабинеты, маршруты и полезные заметки."], ["Main School", "Кабинеты, библиотека, столовая, медпункт, администрация."], ["Freedom House", "События, кружки, project rooms, guest sessions, booking rules."], ["Residence", "Распорядок общежития, evening duty, student support, escalation path."], ["IQanat life", "Клубы, традиции, советы учеников, культура школы."], ["FAQ", "Короткие ответы для учителей, учеников, родителей и гостей."]],
    },
    teachers: {
      eyebrow: "Teacher onboarding", title: "Всё, что нужно учителю на кампусе", intro: "Практичный hub для новых и текущих учителей: здания, routines, академические даты, люди, кабинеты и быстрые ответы.", calendar: "Академический календарь", faculty: "Фото учителей", include: "Что добавить", includeTitle: "Полезные блоки для учителей", nextIdea: "Следующая feature", nextText: "Clickable campus map: при выборе здания открываются этажи, кабинеты, teacher areas, student routes, emergency points и note зачем туда идти.",
      buildings: [["Main School", "Уроки, администрация, библиотека, медпункт, ключевые встречи.", "Нужны room directory, bell schedule, printer points, office contacts."], ["Freedom House", "События, student initiatives, clubs, guest sessions.", "Нужны booking rules, event checklist, AV equipment notes."], ["Teachers House", "Teacher workspace, отдых, coordination и подготовка.", "Нужны workspace etiquette, storage, meeting rooms, quiet hours."], ["Students Residence", "Жизнь общежития, evening supervision, pastoral care.", "Нужны duty schedule, escalation rules, residence contacts."]],
      essentials: [["First week checklist", "Badge, Wi-Fi, platform access, timetable, room keys, duty rota."], ["Academic rhythm", "Terms, assessments, reporting weeks, exams, parent meetings."], ["Classroom logistics", "Room booking, projector setup, printing, supplies, lab rules."], ["Student support", "Advisors, house mentors, counselor, medical point, escalation path."], ["Communication", "Announcements, parent communication norms, templates."], ["Daily utilities", "Wi-Fi, meals, transport, arrivals, visitor process, lost-and-found."]],
    },
    calendar: {
      eyebrow: "Teacher handbook", title: "Академический календарь", current: "Текущий учебный год", intro: "Удобно для планирования уроков, отчётности, student support, parent communication, summer school и государственных экзаменов.", yearMap: "Карта года", augustJune: "С августа по июнь", forTeachers: "Для учителей", helps: "С чем помогает эта страница", change: "Заметка об изменениях", changeText: "Даты могут измениться по решению администрации. При изменении здесь стоит показывать новую дату, короткую причину и кто подтвердил обновление.",
      steps: [["Orientation weeks", "17–28 августа 2026", "Обязательные ориентационные недели перед учебным годом. Участвуют все ученики."], ["I четверть", "1 сентября – 23 октября 2026", "Старт уроков, routine, diagnostics, первые academic checkpoints."], ["II четверть", "27 октября – 25 декабря 2026", "Progress reports, projects rhythm, parent communication windows."], ["III четверть", "11 января – 19 марта 2027", "Deep academic term, olympiad season, assessment preparation."], ["IV четверть, 11 класс", "24 марта – 25 мая 2027", "Final sprint для 11 класса: exams, closing tasks, graduation readiness."], ["IV четверть, 9–10 классы", "29 марта – 25 мая 2027", "Final academic quarter для 9–10 классов, reporting и transition planning."], ["Summer school & state exams", "26 мая – 11 июня 2027", "Летняя школа, государственные экзамены и закрытие учебного года."]],
      needs: ["Отметить assessment и report deadlines по кафедрам.", "Добавить parent meeting windows и advisor check-in weeks.", "Показать duty schedule links для Teachers House и Students Residence.", "Сохранять visible change note при обновлениях администрации."],
    },
    faculty: { eyebrow: "Faculty directory", title: "Лица, роли, кабинеты, контакты", search: "Поиск по имени, предмету, зданию или кабинету", email: "email@iqanat.kz" },
  },
  en: {
    nav: { home: "Home", teachers: "Teachers", calendar: "Calendar", faculty: "Faculty", sections: "Sections", map: "Map", language: "Language" },
    home: {
      eyebrow: "IQanat digital guide", title: "Bızdı qosqan IQanat!", intro: "A stylish guide for the school community: pages, sections, maps, faculty photos, calendar, and role-based onboarding.", primary: "Open teachers page", secondary: "View sections", quick: "Quick entry", quickTitle: "One guide, many paths", quickText: "Teachers, students, parents, and guests see the route, schedule, person, and place they need in one selected language.", buildable: "Buildable structure", buildableTitle: "Pages we can add next", buildableText: "Each card can become a full page, filtered guide, or interactive tool.", mapIdea: "Map idea", mapTitle: "Four buildings as the main navigation model",
      pages: [["/teachers", "Teachers hub", "Buildings, routines, first-week setup, contacts, and everyday school logistics."], ["/teachers/calendar", "Academic calendar", "Terms, deadlines, assessments, school events, parent meetings, planning days."], ["/teachers/faculty", "Faculty photos", "A visual teacher directory with subjects, rooms, buildings, and contact slots."]],
      sections: [["Campus map", "Four buildings, floors, rooms, routes, and useful notes."], ["Main School", "Classrooms, library, canteen, medical point, offices."], ["Freedom House", "Events, clubs, project rooms, guest sessions, booking rules."], ["Residence", "Dorm routines, evening duty, student support, escalation path."], ["IQanat life", "Clubs, traditions, student tips, assemblies, school culture."], ["FAQ", "Fast answers for teachers, students, parents, and guests."]],
    },
    teachers: {
      eyebrow: "Teacher onboarding", title: "Everything a teacher needs on campus", intro: "A practical hub for new and returning teachers: buildings, routines, academic dates, people, classroom logistics, and fast answers.", calendar: "Academic calendar", faculty: "Teacher photos", include: "What to include", includeTitle: "Useful blocks for teachers", nextIdea: "Next feature idea", nextText: "Add a clickable campus map: choose a building, then see floors, rooms, teacher areas, student routes, emergency points, and why you would go there.",
      buildings: [["Main School", "Lessons, administration, library, medical point, key meetings.", "Needs room directory, bell schedule, printer points, office contacts."], ["Freedom House", "Events, student initiatives, clubs, guest sessions.", "Needs booking rules, event checklist, AV equipment notes."], ["Teachers House", "Teacher workspace, rest area, coordination and prep time.", "Needs workspace etiquette, storage, meeting rooms, quiet hours."], ["Students Residence", "Dormitory life, evening supervision, pastoral care.", "Needs duty schedule, escalation rules, residence contacts."]],
      essentials: [["First week checklist", "Badge, Wi-Fi, platform access, timetable, room keys, duty rota."], ["Academic rhythm", "Terms, assessments, reporting weeks, exams, parent meetings."], ["Classroom logistics", "Room booking, projector setup, printing, supplies, lab rules."], ["Student support", "Advisors, house mentors, counselor, medical point, escalation path."], ["Communication", "Announcements, parent communication norms, templates."], ["Daily utilities", "Wi-Fi, meals, transport, arrivals, visitor process, lost-and-found."]],
    },
    calendar: {
      eyebrow: "Teacher handbook", title: "Academic calendar", current: "Current academic year", intro: "Structured for teachers: planning, lessons, reporting, student support, parent communication, summer school, and state exams.", yearMap: "Year map", augustJune: "August to June", forTeachers: "For teachers", helps: "What this page should help with", change: "Change notice", changeText: "Dates may be updated by the school administration. When changes happen, this page should show the updated date, short reason, and who confirmed it.",
      steps: [["Orientation weeks", "August 17–28, 2026", "Mandatory pre-year orientation weeks. All students attend."], ["Term I", "September 1 – October 23, 2026", "Start of lessons, routines, diagnostics, first academic checkpoints."], ["Term II", "October 27 – December 25, 2026", "Progress reports, project rhythm, parent communication windows."], ["Term III", "January 11 – March 19, 2027", "Deep academic term, olympiad season, assessment preparation."], ["Term IV, Grade 11", "March 24 – May 25, 2027", "Final sprint for Grade 11: exams, closing tasks, graduation readiness."], ["Term IV, Grades 9–10", "March 29 – May 25, 2027", "Final academic quarter for Grades 9–10 with reporting and transitions."], ["Summer school & state exams", "May 26 – June 11, 2027", "Summer school, state examinations, and end-of-year closure."]],
      needs: ["Mark assessment and report deadlines by subject department.", "Add parent meeting windows and advisor check-in weeks.", "Show duty schedule links for Teachers House and Students Residence.", "Keep a visible change note when dates are updated by administration."],
    },
    faculty: { eyebrow: "Faculty directory", title: "Faces, roles, rooms, contacts", search: "Search by name, subject, building, room", email: "email@iqanat.kz" },
  },
} as const;