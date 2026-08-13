import type { Lang } from "@/lib/i18n";

export type BuildingCopy = {
  name: string;
  type: string;
  description: string;
};

export type Building = {
  id: string;
  slug: string;
  copy: Record<Lang, BuildingCopy>;
};

export const buildings: Building[] = [
  {
    id: "main-school",
    slug: "main-school",
    copy: {
      kk: {
        name: "Негізгі мектеп",
        type: "Оқу ғимараты",
        description: "Сыныптар, зертханалар, кітапхана және мектептің негізгі қызметтері.",
      },
      ru: {
        name: "Главный корпус",
        type: "Учебное здание",
        description: "Классы, лаборатории, библиотека и основные школьные службы.",
      },
      en: {
        name: "Main School",
        type: "Academic Building",
        description: "Classrooms, laboratories, the library, and main school services.",
      },
    },
  },
  {
    id: "student-house",
    slug: "student-house",
    copy: {
      kk: {
        name: "Оқушылар үйі",
        type: "Оқушылар жатақханасы",
        description: "Оқушылар тұратын, демалатын және тәлімгерлермен кездесетін кеңістік.",
      },
      ru: {
        name: "Дом учеников",
        type: "Ученическое общежитие",
        description: "Пространство для проживания, отдыха и встреч учеников с наставниками.",
      },
      en: {
        name: "Student House",
        type: "Student Residence",
        description: "Living, rest, and mentor meeting spaces for students.",
      },
    },
  },
  {
    id: "teacher-house",
    slug: "teacher-house",
    copy: {
      kk: {
        name: "Мұғалімдер үйі",
        type: "Мұғалімдер жатақханасы",
        description: "Мұғалімдерге арналған тұрғын үй және тынығу кеңістігі.",
      },
      ru: {
        name: "Дом учителей",
        type: "Общежитие для учителей",
        description: "Жилое пространство для учителей, отдыха и спокойной подготовки.",
      },
      en: {
        name: "Teacher House",
        type: "Teacher Residence",
        description: "Residential space for teachers, rest, and quiet preparation.",
      },
    },
  },
  {
    id: "freedom-house",
    slug: "freedom-house",
    copy: {
      kk: {
        name: "Freedom House",
        type: "Қоғамдастық кеңістігі",
        description: "Іс-шаралар, үйірмелер, жобалар және қауымдастық кездесулері өтетін орын.",
      },
      ru: {
        name: "Freedom House",
        type: "Общественное пространство",
        description: "Место для мероприятий, кружков, проектов и встреч сообщества.",
      },
      en: {
        name: "Freedom House",
        type: "Community Space",
        description: "Events, clubs, projects, and community gatherings.",
      },
    },
  },
];

export const campusMapCopy: Record<
  Lang,
  {
    eyebrow: string;
    navTitle: string;
    title: string;
    intro: string;
    desktopHint: string;
    mobileHint: string;
    viewBuilding: string;
    backToMap: string;
    comingSoon: string;
    comingSoonText: string;
    imageAlt: string;
  }
> = {
  kk: {
    eyebrow: "Кампус навигациясы",
    navTitle: "Кампус картасы",
    title: "IQanat кампусының интерактивті картасы",
    intro: "Ғимаратты таңдап, оның қызметі мен алдағы ішкі картасын көріңіз.",
    desktopHint: "Ғимараттың үстіне меңзерді апарыңыз",
    mobileHint: "Алдымен таңдаңыз, қайта басқанда ғимарат беті ашылады",
    viewBuilding: "Ғимаратты ашу",
    backToMap: "Кампус картасына оралу",
    comingSoon: "Ғимарат картасы жақында қосылады",
    comingSoonText: "Қабаттар, кабинеттер және бағыттар келесі кезеңде осында пайда болады.",
    imageAlt: "IQanat кампусының әуеден түсірілген көрінісі",
  },
  ru: {
    eyebrow: "Навигация по кампусу",
    navTitle: "Карта кампуса",
    title: "Интерактивная карта кампуса IQanat",
    intro: "Выберите здание, чтобы узнать его назначение и открыть будущую внутреннюю карту.",
    desktopHint: "Наведите курсор на здание",
    mobileHint: "Нажмите один раз для выбора и ещё раз, чтобы открыть здание",
    viewBuilding: "Открыть здание",
    backToMap: "Вернуться к карте кампуса",
    comingSoon: "Карта здания скоро появится",
    comingSoonText: "Этажи, кабинеты и маршруты будут добавлены сюда на следующем этапе.",
    imageAlt: "Кампус IQanat с высоты птичьего полёта",
  },
  en: {
    eyebrow: "Campus navigation",
    navTitle: "Campus map",
    title: "Interactive IQanat campus map",
    intro: "Select a building to learn its purpose and open its future interior map.",
    desktopHint: "Hover over a building",
    mobileHint: "Tap once to select, then tap again to open the building",
    viewBuilding: "View building",
    backToMap: "Back to campus map",
    comingSoon: "Building map coming soon",
    comingSoonText: "Floors, rooms, and indoor routes will be added here in the next stage.",
    imageAlt: "Aerial view of the IQanat campus",
  },
};

export function getBuilding(slug: string) {
  return buildings.find((building) => building.slug === slug);
}
