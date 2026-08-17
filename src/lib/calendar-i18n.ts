import type { Lang } from "@/lib/i18n";

type CalendarSegment = {
  label: string;
  date: string;
  details: string;
  days: number;
  tone: "term" | "orientation" | "break" | "summer";
};

type CalendarRow = {
  label: string;
  segments: CalendarSegment[];
};

type CalendarCopy = {
  eyebrow: string;
  title: string;
  current: string;
  intro: string;
  yearMap: string;
  augustJune: string;
  stepLabel: string;
  change: string;
  changeText: string;
  months: { label: string; days: number }[];
  steps: [string, string, string][];
  rows: CalendarRow[];
};

const monthDays = [15, 30, 31, 30, 31, 31, 28, 31, 30, 31, 11];

export const calendarCopy: Record<Lang, CalendarCopy> = {
  kk: {
    eyebrow: "Академиялық күнтізбе",
    title: "Академиялық күнтізбе",
    current: "Ағымдағы оқу жылы",
    intro: "Мұғалімдерге арналған қысқа жұмыс күнтізбесі.",
    yearMap: "Оқу жылының картасы",
    augustJune: "Тамыздан маусымға дейін",
    stepLabel: "Кезең",
    change: "Өзгерістер туралы ескерту",
    changeText:
      "Академиялық күнтізбеге өзгерістер енгізілуі мүмкін. Мерзімдер өзгерсе, мектеп мұғалімдерге, ата-аналарға және оқушыларға алдын ала хабарлайды.",
    months: ["Там", "Қыр", "Қаз", "Қар", "Жел", "Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау"].map((label, index) => ({ label, days: monthDays[index] })),
    steps: [
      ["Бағдарлау апталықтары", "17–28 тамыз 2026", "Оқу жылы алдындағы міндетті бағдарлау апталықтары. Барлық оқушылардың қатысуы міндетті."],
      ["I тоқсан", "1 қыркүйек – 23 қазан 2026", "Оқу жылының басталуы, сынып тәртібін қалыптастыру, бастапқы диагностика және алғашқы академиялық бақылау кезеңдері."],
      ["II тоқсан", "27 қазан – 25 желтоқсан 2026", "Оқу үдерісін жалғастыру, тоқсандық бағалау, үлгерім бойынша есеп беру және ата-аналармен байланыс кезеңдері."],
      ["III тоқсан", "11 қаңтар – 19 наурыз 2027", "Негізгі академиялық жұмыс кезеңі, олимпиадаға дайындық, бақылау жұмыстары және оқу нәтижелерін талдау."],
      ["IV тоқсан, 11-сынып", "24 наурыз – 25 мамыр 2027", "11-сынып оқушылары үшін қорытынды тоқсан: емтиханға дайындық, қорытынды тапсырмалар және оқу жылын аяқтау."],
      ["IV тоқсан, 9–10-сынып", "29 наурыз – 25 мамыр 2027", "9–10-сынып оқушылары үшін қорытынды тоқсан: бағалау, есеп беру және келесі оқу жылына дайындық."],
      ["Жазғы мектеп және мемлекеттік емтихандар", "26 мамыр – 11 маусым 2027", "Жазғы мектеп, мемлекеттік емтихандар және оқу жылын академиялық тұрғыдан аяқтау кезеңі."],
    ],
    rows: [
      {
        label: "11-сынып",
        segments: [
          { label: "Бағдарлау", date: "17–28 тамыз", details: "Міндетті бағдарлау апталықтары", days: 12, tone: "orientation" },
          { label: "Дайындық", date: "29–31 тамыз", details: "Сабақ басталғанға дейінгі қысқа дайындық", days: 3, tone: "break" },
          { label: "I тоқсан", date: "1 қыркүйек – 23 қазан", details: "I тоқсан", days: 53, tone: "term" },
          { label: "Каникул", date: "24–26 қазан", details: "Тоқсандар арасындағы үзіліс", days: 3, tone: "break" },
          { label: "II тоқсан", date: "27 қазан – 25 желтоқсан", details: "II тоқсан", days: 60, tone: "term" },
          { label: "Қысқы каникул", date: "26 желтоқсан – 10 қаңтар", details: "Қысқы үзіліс", days: 16, tone: "break" },
          { label: "III тоқсан", date: "11 қаңтар – 19 наурыз", details: "III тоқсан", days: 68, tone: "term" },
          { label: "Каникул", date: "20–23 наурыз", details: "IV тоқсан алдындағы үзіліс", days: 4, tone: "break" },
          { label: "IV тоқсан", date: "24 наурыз – 25 мамыр", details: "11-сыныпқа арналған IV тоқсан", days: 63, tone: "term" },
          { label: "Жазғы мектеп", date: "26 мамыр – 11 маусым", details: "Жазғы мектеп және мемлекеттік емтихандар", days: 17, tone: "summer" },
        ],
      },
      {
        label: "9–10-сынып",
        segments: [
          { label: "Бағдарлау", date: "17–28 тамыз", details: "Міндетті бағдарлау апталықтары", days: 12, tone: "orientation" },
          { label: "Дайындық", date: "29–31 тамыз", details: "Сабақ басталғанға дейінгі қысқа дайындық", days: 3, tone: "break" },
          { label: "I тоқсан", date: "1 қыркүйек – 23 қазан", details: "I тоқсан", days: 53, tone: "term" },
          { label: "Каникул", date: "24–26 қазан", details: "Тоқсандар арасындағы үзіліс", days: 3, tone: "break" },
          { label: "II тоқсан", date: "27 қазан – 25 желтоқсан", details: "II тоқсан", days: 60, tone: "term" },
          { label: "Қысқы каникул", date: "26 желтоқсан – 10 қаңтар", details: "Қысқы үзіліс", days: 16, tone: "break" },
          { label: "III тоқсан", date: "11 қаңтар – 19 наурыз", details: "III тоқсан", days: 68, tone: "term" },
          { label: "Каникул", date: "20–28 наурыз", details: "IV тоқсан алдындағы үзіліс", days: 9, tone: "break" },
          { label: "IV тоқсан", date: "29 наурыз – 25 мамыр", details: "9–10-сыныптарға арналған IV тоқсан", days: 58, tone: "term" },
          { label: "Жазғы мектеп", date: "26 мамыр – 11 маусым", details: "Жазғы мектеп және мемлекеттік емтихандар", days: 17, tone: "summer" },
        ],
      },
    ],
  },
  ru: {
    eyebrow: "Академический календарь",
    title: "Академический календарь",
    current: "Текущий учебный год",
    intro: "Краткий рабочий календарь для учителей.",
    yearMap: "Карта учебного года",
    augustJune: "С августа по июнь",
    stepLabel: "Этап",
    change: "Уведомление об изменениях",
    changeText:
      "В академический календарь могут быть внесены изменения. Если сроки изменятся, школа заранее проинформирует учителей, родителей и учащихся.",
    months: ["Авг", "Сен", "Окт", "Ноя", "Дек", "Янв", "Фев", "Мар", "Апр", "Май", "Июн"].map((label, index) => ({ label, days: monthDays[index] })),
    steps: [
      ["Ориентационные недели", "17–28 августа 2026", "Обязательные ориентационные недели перед началом учебного года. Участие обязательно для всех учащихся."],
      ["I четверть", "1 сентября – 23 октября 2026", "Начало учебного года, выстраивание классных правил, первичная диагностика и первые академические контрольные точки."],
      ["II четверть", "27 октября – 25 декабря 2026", "Продолжение учебного процесса, четвертное оценивание, отчётность по успеваемости и периоды коммуникации с родителями."],
      ["III четверть", "11 января – 19 марта 2027", "Основной академический период, подготовка к олимпиадам, контрольные работы и анализ учебных результатов."],
      ["IV четверть, 11 класс", "24 марта – 25 мая 2027", "Финальная четверть для 11 класса: подготовка к экзаменам, итоговые задания и завершение учебного года."],
      ["IV четверть, 9–10 классы", "29 марта – 25 мая 2027", "Финальная четверть для 9–10 классов: оценивание, отчётность и подготовка к следующему учебному году."],
      ["Летняя школа и государственные экзамены", "26 мая – 11 июня 2027", "Летняя школа, государственные экзамены и академическое завершение учебного года."],
    ],
    rows: [
      {
        label: "11 класс",
        segments: [
          { label: "Ориентация", date: "17–28 августа", details: "Обязательные ориентационные недели", days: 12, tone: "orientation" },
          { label: "Подготовка", date: "29–31 августа", details: "Короткая пауза перед стартом уроков", days: 3, tone: "break" },
          { label: "I четверть", date: "1 сентября – 23 октября", details: "I четверть", days: 53, tone: "term" },
          { label: "Каникулы", date: "24–26 октября", details: "Пауза между четвертями", days: 3, tone: "break" },
          { label: "II четверть", date: "27 октября – 25 декабря", details: "II четверть", days: 60, tone: "term" },
          { label: "Зимние каникулы", date: "26 декабря – 10 января", details: "Зимняя пауза", days: 16, tone: "break" },
          { label: "III четверть", date: "11 января – 19 марта", details: "III четверть", days: 68, tone: "term" },
          { label: "Каникулы", date: "20–23 марта", details: "Пауза перед IV четвертью", days: 4, tone: "break" },
          { label: "IV четверть", date: "24 марта – 25 мая", details: "IV четверть для 11 класса", days: 63, tone: "term" },
          { label: "Летняя школа", date: "26 мая – 11 июня", details: "Летняя школа и государственные экзамены", days: 17, tone: "summer" },
        ],
      },
      {
        label: "9–10 классы",
        segments: [
          { label: "Ориентация", date: "17–28 августа", details: "Обязательные ориентационные недели", days: 12, tone: "orientation" },
          { label: "Подготовка", date: "29–31 августа", details: "Короткая пауза перед стартом уроков", days: 3, tone: "break" },
          { label: "I четверть", date: "1 сентября – 23 октября", details: "I четверть", days: 53, tone: "term" },
          { label: "Каникулы", date: "24–26 октября", details: "Пауза между четвертями", days: 3, tone: "break" },
          { label: "II четверть", date: "27 октября – 25 декабря", details: "II четверть", days: 60, tone: "term" },
          { label: "Зимние каникулы", date: "26 декабря – 10 января", details: "Зимняя пауза", days: 16, tone: "break" },
          { label: "III четверть", date: "11 января – 19 марта", details: "III четверть", days: 68, tone: "term" },
          { label: "Каникулы", date: "20–28 марта", details: "Пауза перед IV четвертью", days: 9, tone: "break" },
          { label: "IV четверть", date: "29 марта – 25 мая", details: "IV четверть для 9–10 классов", days: 58, tone: "term" },
          { label: "Летняя школа", date: "26 мая – 11 июня", details: "Летняя школа и государственные экзамены", days: 17, tone: "summer" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "Academic calendar",
    title: "Academic calendar",
    current: "Current academic year",
    intro: "A concise working calendar for teachers.",
    yearMap: "School year map",
    augustJune: "August to June",
    stepLabel: "Stage",
    change: "Change notice",
    changeText:
      "The academic calendar may be updated. If dates change, the school will inform teachers, parents, and students in advance.",
    months: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((label, index) => ({ label, days: monthDays[index] })),
    steps: [
      ["Orientation weeks", "August 17–28, 2026", "Mandatory orientation weeks before the school year begins. Attendance is required for all students."],
      ["Term I", "September 1 – October 23, 2026", "Start of the school year, classroom routines, initial diagnostics, and first academic checkpoints."],
      ["Term II", "October 27 – December 25, 2026", "Continuation of learning, term assessment, progress reporting, and parent communication windows."],
      ["Term III", "January 11 – March 19, 2027", "Main academic period, olympiad preparation, assessments, and analysis of learning progress."],
      ["Term IV, Grade 11", "March 24 – May 25, 2027", "Final term for Grade 11: exam preparation, closing assignments, and completion of the school year."],
      ["Term IV, Grades 9–10", "March 29 – May 25, 2027", "Final term for Grades 9–10: assessment, reporting, and preparation for the next school year."],
      ["Summer school and state examinations", "May 26 – June 11, 2027", "Summer school, state examinations, and academic closure of the school year."],
    ],
    rows: [
      {
        label: "Grade 11",
        segments: [
          { label: "Orientation", date: "August 17–28", details: "Mandatory orientation weeks", days: 12, tone: "orientation" },
          { label: "Preparation", date: "August 29–31", details: "Short pause before lessons begin", days: 3, tone: "break" },
          { label: "Term I", date: "September 1 – October 23", details: "Term I", days: 53, tone: "term" },
          { label: "Break", date: "October 24–26", details: "Break between terms", days: 3, tone: "break" },
          { label: "Term II", date: "October 27 – December 25", details: "Term II", days: 60, tone: "term" },
          { label: "Winter break", date: "December 26 – January 10", details: "Winter break", days: 16, tone: "break" },
          { label: "Term III", date: "January 11 – March 19", details: "Term III", days: 68, tone: "term" },
          { label: "Break", date: "March 20–23", details: "Break before Term IV", days: 4, tone: "break" },
          { label: "Term IV", date: "March 24 – May 25", details: "Term IV for Grade 11", days: 63, tone: "term" },
          { label: "Summer school", date: "May 26 – June 11", details: "Summer school and state examinations", days: 17, tone: "summer" },
        ],
      },
      {
        label: "Grades 9–10",
        segments: [
          { label: "Orientation", date: "August 17–28", details: "Mandatory orientation weeks", days: 12, tone: "orientation" },
          { label: "Preparation", date: "August 29–31", details: "Short pause before lessons begin", days: 3, tone: "break" },
          { label: "Term I", date: "September 1 – October 23", details: "Term I", days: 53, tone: "term" },
          { label: "Break", date: "October 24–26", details: "Break between terms", days: 3, tone: "break" },
          { label: "Term II", date: "October 27 – December 25", details: "Term II", days: 60, tone: "term" },
          { label: "Winter break", date: "December 26 – January 10", details: "Winter break", days: 16, tone: "break" },
          { label: "Term III", date: "January 11 – March 19", details: "Term III", days: 68, tone: "term" },
          { label: "Break", date: "March 20–28", details: "Break before Term IV", days: 9, tone: "break" },
          { label: "Term IV", date: "March 29 – May 25", details: "Term IV for Grades 9–10", days: 58, tone: "term" },
          { label: "Summer school", date: "May 26 – June 11", details: "Summer school and state examinations", days: 17, tone: "summer" },
        ],
      },
    ],
  },
};