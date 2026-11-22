export interface SectionLink {
  path: string;
  label: string;
  icon: string;
  sidebar?: false;
  shortcut?: string | false;
}

export interface SectionGroup {
  heading: string;
  links: SectionLink[];
}

export const homeLink: SectionLink = { path: '/', label: 'HOME', icon: 'home' };

export function koineNavigation(latestIssue: string): SectionGroup[] {
  return [{
    heading: 'DE CIFRIS KOINE',
    links: [
      { path: latestIssue, label: 'Latest issue', icon: 'schedule' },
      { path: '/koine/articles-and-volumes', label: 'Articles & volumes', icon: 'library_books' },
      { path: '/koine/copyright-license', label: 'Copyright & license', icon: 'copyright', shortcut: 'License' },
      { path: '/koine/editorial-board', label: 'About & editorial board', icon: 'groups' },
    ],
  }];
}

export const sectionNavigation = {
  'associazione': [
    {
      heading: 'DE CIFRIS APS',
      links: [
        { path: '/associazione', label: 'Associazione', icon: 'groups' },
        { path: '/associazione/statuto', label: 'Statuto', icon: 'description' },
        { path: '/associazione/regolamento', label: 'Regolamenti', icon: 'gavel' },
        { path: '/associazione/organi-direttivi', label: 'Organizzazione', icon: 'corporate_fare' },
        { path: '/associazione/associarsi', label: 'Associarsi', icon: 'person_add' },
        { path: '/associazione/advisory-board', label: 'Advisory Board', icon: 'assured_workload', sidebar: false },
        { path: '/associazione/affiliati-partner', label: 'Affiliati e partner', icon: 'assured_workload', shortcut: false },
        { path: '/associazione/posizioni-ricerca', label: 'Posizioni', icon: 'work' },
        { path: '/associazione/scholarships', label: 'Scholarships', icon: 'school' },
        { path: '/associazione/stage-tirocini', label: 'Stage & Tirocini', icon: 'badge' },
        { path: '/associazione/notizie', label: 'Notizie', icon: 'newspaper' },
        { path: '/associazione/dicono-di-noi', label: 'Dicono di noi', icon: 'travel_explore' },
      ],
    },
  ],
  'attivita': [
    {
      heading: 'INIZIATIVE DE CIFRIS',
      links: [
        { path: '/attivita', label: 'Attività', icon: 'public' },
        { path: '/attivita/eventi', label: 'Eventi', icon: 'event_upcoming' },
        { path: '/attivita/corsi', label: 'Corsi', icon: 'history_edu' },
        { path: '/attivita/seminari', label: 'Seminari', icon: 'person_raised_hand' },
        { path: '/attivita/editoria', label: 'Editoria', icon: 'menu_book' },
        { path: '/attivita/gare-crittografiche', label: 'Gare crittografiche', icon: 'emoji_events' },
        { path: '/attivita/iniziative-divulgative', label: 'Divulgazione', icon: 'campaign' },
      ],
    },
  ],
  'cifris2023': [
    {
      heading: 'CIFRIS 23 - ROME',
      links: [
        { path: '/cifris23', label: 'CIFRIS23', icon: 'stadium' },
        { path: '/cifris23/registration', label: 'Registration', icon: 'event_seat' },
        { path: '/cifris23/program', label: 'Program', icon: 'date_range' },
        { path: '/cifris23/proceedings', label: 'Proceedings', icon: 'menu_book' },
      ],
    },
  ],
  'cifris2024': [
    {
      heading: 'CIFRIS 24 - ROME',
      links: [
        { path: '/cifris24', label: 'CIFRIS24', icon: 'stadium' },
        { path: '/cifris24/registration', label: 'Registration', icon: 'event_seat' },
        { path: '/cifris24/program', label: 'Program', icon: 'date_range' },
        { path: '/cifris24/workshops', label: 'Workshops', icon: 'architecture' },
        { path: '/cifris24/venue', label: 'Venue & shuttles', icon: 'location_on' },
        { path: '/cifris24/dinner', label: 'Social event', icon: 'restaurant' },
        { path: '/cifris24/proceedings', label: 'Proceedings', icon: 'menu_book' },
      ],
    },
  ],
  'cifris2025': [
    {
      heading: 'CIFRIS 25 - ROME',
      links: [
        { path: '/cifris25', label: 'CIFRIS25', icon: 'stadium' },
        { path: '/cifris25/registration', label: 'Registration', icon: 'event_seat' },
        { path: '/cifris25/program', label: 'Program', icon: 'date_range' },
        { path: '/cifris25/workshops', label: 'Workshops', icon: 'architecture' },
        { path: '/cifris25/venue', label: 'Venue', icon: 'location_on', shortcut: 'Venue & shuttles' },
        { path: '/cifris25/proceedings', label: 'Proceedings', icon: 'menu_book' },
      ],
    },
  ],
  'cifris2026': [
    {
      heading: 'CIFRIS 26 - ROME',
      links: [
        { path: '/cifris26', label: 'CIFRIS26', icon: 'stadium' },
        { path: '/cifris26/registration', label: 'Registration', icon: 'event_seat' },
        { path: '/cifris26/program', label: 'Program', icon: 'date_range' },
        { path: '/cifris26/workshops', label: 'Workshops', icon: 'architecture' },
        { path: '/cifris26/venue', label: 'Venue', icon: 'location_on', shortcut: 'Venue & shuttles' },
        { path: '/cifris26/proceedings', label: 'Proceedings', icon: 'menu_book' },
      ],
    },
  ],
  'root-elements': [
    {
      heading: 'IN EVIDENZA',
      links: [
        { path: '/welcome', label: 'Welcome', icon: 'emoji_people', shortcut: 'Welcome!' },
        { path: '/associazione', label: 'Associazione', icon: 'groups' },
        { path: '/attivita', label: 'Attività', icon: 'public' },
        { path: '/koine', label: 'Koine', icon: 'menu_book' },
        { path: '/cifris26', label: 'CIFRIS26', icon: 'auto_stories' },
        { path: '/fcir26', label: 'FCIR26', icon: 'dashboard', shortcut: false },
        { path: '/ixh26', label: 'IXH26', icon: 'code', shortcut: false },
      ],
    },
    {
      heading: 'INFORMAZIONI',
      links: [
        { path: '/contatti', label: 'Contatti', icon: 'mail' },
        { path: '/sitemap', label: 'Sitemap', icon: 'pin_drop' },
        { path: '/cookie-policy', label: 'Cookies', icon: 'cookie' },
      ],
    },
  ],
  'welcome': [
    {
      heading: 'CONTENUTI SPECIFICI',
      links: [
        { path: '/welcome', label: 'Welcome!', icon: 'emoji_people' },
        { path: '/welcome/ricercatori', label: 'Fai ricerca?', icon: 'biotech' },
        { path: '/welcome/azienda', label: 'Lavori in azienda?', icon: 'work' },
        { path: '/welcome/insegnanti', label: 'Insegni a scuola?', icon: 'square_foot' },
        { path: '/welcome/studenti', label: 'Sei studente?', icon: 'school' },
        { path: '/welcome/curiosi', label: 'Ti incuriosisce?', icon: 'emoji_objects' },
      ],
    },
  ],
} satisfies Record<string, SectionGroup[]>;
