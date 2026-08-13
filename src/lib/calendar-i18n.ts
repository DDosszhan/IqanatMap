import type { Lang } from "@/lib/i18n";

export const calendarCopy: Record<Lang, {
  eyebrow: string;
  title: string;
  current: string;
  intro: string;
  yearMap: string;
  augustJune: string;
  stepLabel: string;
  change: string;
  changeText: string;
  months: string[];
  steps: [string, string, string][];
}> = {
  kk: {
    eyebrow: "Мұғалімдерге арналған анықтамалық",
    title: "Академиялық күнтізбе",
    current: "Ағымдағы оқу жылы",
    intro: "Мұғалімдерге сабақтарды, бағалау кезеңдерін, есеп беруді, ата-аналармен байланысты, жазғы мектепті және мемлекеттік емтихандарды жоспарлауға арналған қысқа әрі нақты күнтізбе.",
    yearMap: "Оқу жылының картасы",
    augustJune: "Тамыздан маусымға дейін",
    stepLabel: "Кезең",
    change: "Өзгерістер туралы ескерту",
    changeText: "Академиялық күнтізбеге өзгерістер енгізілуі мүмкін. Мерзімдер өзгерсе, мектеп мұғалімдерге, ата-аналарға және оқушыларға алдын ала хабарлайды.",
    months: ["Там", "Қыр", "Қаз", "Қар", "Жел", "Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау"],
    steps: [
      ["Бағдарлау апталықтары", "17–28 тамыз 2026", "Оқу жылы алдындағы міндетті бағдарлау апталықтары. Барлық оқушылардың қатысуы міндетті."],
      ["I тоқсан", "1 қыркүйек – 23 қазан 2026", "Оқу жылының басталуы, сынып тәртібін қалыптастыру, бастапқы диагностика және алғашқы академиялық бақылау кезеңдері."],
      ["II тоқсан", "27 қазан – 25 желтоқсан 2026", "Оқу үдерісін жалғастыру, тоқсандық бағалау, үлгерім бойынша есеп беру және ата-аналармен байланыс кезеңдері."],
      ["III тоқсан", "11 қаңтар – 19 наурыз 2027", "Негізгі академиялық жұмыс кезеңі, олимпиадаға дайындық, бақылау жұмыстары және оқу нәтижелерін талдау."],
      ["IV тоқсан, 11-сынып", "24 наурыз – 25 мамыр 2027", "11-сынып оқушылары үшін қорытынды тоқсан: емтиханға дайындық, қорытынды тапсырмалар және оқу жылын аяқтау."],
      ["IV тоқсан, 9–10-сынып", "29 наурыз – 25 мамыр 2027", "9–10-сынып оқушылары үшін қорытынды тоқсан: бағалау, есеп беру және келесі оқу жылына дайындық."],
      ["Жазғы мектеп және мемлекеттік емтихандар", "26 мамыр – 11 маусым 2027", "Жазғы мектеп, мемлекеттік емтихандар және оқу жылын академиялық тұрғыдан аяқтау кезеңі."],
    ],
  },
  ru: {
    eyebrow: "Справочник для учителей",
    title: "Академический календарь",
    current: "Текущий учебный год",
    intro: "Краткий рабочий календарь для учителей: уроки, оценивание, отчётность, коммуникация с родителями, летняя школа и государственные экзамены.",
    yearMap: "Карта учебного года",
    augustJune: "С августа по июнь",
    stepLabel: "Этап",
    change: "Уведомление об изменениях",
    changeText: "В академический календарь могут быть внесены изменения. Если сроки изменятся, школа заранее проинформирует учителей, родителей и учащихся.",
    months: ["Авг", "Сен", "Окт", "Ноя", "Дек", "Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    steps: [
      ["Ориентационные недели", "17–28 августа 2026", "Обязательные ориентационные недели перед началом учебного года. Участие обязательно для всех учащихся."],
      ["I четверть", "1 сентября – 23 октября 2026", "Начало учебного года, выстраивание классных правил, первичная диагностика и первые академические контрольные точки."],
      ["II четверть", "27 октября – 25 декабря 2026", "Продолжение учебного процесса, четвертное оценивание, отчётность по успеваемости и периоды коммуникации с родителями."],
      ["III четверть", "11 января – 19 марта 2027", "Основной академический период, подготовка к олимпиадам, контрольные работы и анализ учебных результатов."],
      ["IV четверть, 11 класс", "24 марта – 25 мая 2027", "Финальная четверть для 11 класса: подготовка к экзаменам, итоговые задания и завершение учебного года."],
      ["IV четверть, 9–10 классы", "29 марта – 25 мая 2027", "Финальная четверть для 9–10 классов: оценивание, отчётность и подготовка к следующему учебному году."],
      ["Летняя школа и государственные экзамены", "26 мая – 11 июня 2027", "Летняя школа, государственные экзамены и академическое завершение учебного года."],
    ],
  },
  en: {
    eyebrow: "Teacher handbook",
    title: "Academic calendar",
    current: "Current academic year",
    intro: "A concise working calendar for teachers: lessons, assessment periods, reporting, parent communication, summer school, and state examinations.",
    yearMap: "School year map",
    augustJune: "August to June",
    stepLabel: "Stage",
    change: "Change notice",
    changeText: "The academic calendar may be updated. If dates change, the school will inform teachers, parents, and students in advance.",
    months: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    steps: [
      ["Orientation weeks", "August 17–28, 2026", "Mandatory orientation weeks before the school year begins. Attendance is required for all students."],
      ["Term I", "September 1 – October 23, 2026", "Start of the school year, classroom routines, initial diagnostics, and first academic checkpoints."],
      ["Term II", "October 27 – December 25, 2026", "Continuation of learning, term assessment, progress reporting, and parent communication windows."],
      ["Term III", "January 11 – March 19, 2027", "Main academic period, olympiad preparation, assessments, and analysis of learning progress."],
      ["Term IV, Grade 11", "March 24 – May 25, 2027", "Final term for Grade 11: exam preparation, closing assignments, and completion of the school year."],
      ["Term IV, Grades 9–10", "March 29 – May 25, 2027", "Final term for Grades 9–10: assessment, reporting, and preparation for the next school year."],
      ["Summer school and state examinations", "May 26 – June 11, 2027", "Summer school, state examinations, and academic closure of the school year."],
    ],
  },
};