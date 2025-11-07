import type { Translation } from './en'

const ru: Translation = {
  language: {
    label: 'Russian',
    nativeName: 'Русский',
  },
  layout: {
    skipToMain: 'Перейти к основному содержимому',
    languageSwitcherLabel: 'Язык',
    themeSwitcherToggle: 'Переключить тему',
    themeOptionSystem: 'Система',
    themeOptionLight: 'Светлая',
    themeOptionDark: 'Тёмная',
    pdfControlsLabel: 'Управление PDF',
    headerControlsLabel: 'Элементы управления в шапке',
  },
  actions: {
    exportPdf: 'Экспорт в PDF',
    viewPdf: 'Открыть PDF',
    exportComingSoon:
      'Экспорт и статическая ссылка появятся позже. Управление активируется, когда процесс будет подключён.',
  },
  cv: {
    metadata: {
      name: 'Никита «Rollen» Лакоза',
      headline: 'Observer / Production Staff по CS2 и Dota 2.',
      detailsLabel: '',
      details: [] as { label: string; value: string }[],
    },
    contact: {
      title: '8. Ссылки',
      items: [
        {
          label: 'Email:',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
          icon: 'alternate_email',
        },
        {
          label: 'LinkedIn:',
          value: 'linkedin.com/in/nikita-lakoza-98a339275',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike):',
          value: 'liquipedia.net/counterstrike/Rollen',
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2):',
          value: 'liquipedia.net/dota2/Rollen',
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    about: {
      title: '1. Обо мне',
      intro: [
        'Я Никита «Rollen» Лакоза — observer по дисциплинам Counter-Strike 2 и Dota 2. С февраля 2023 года работал на турнирах FISSURE и BetBoom, в том числе на отборочных к The International и крупных коммерческих лигах (Elite League, Riyadh Masters, BetBoom Dacha).',
        'Моя зона ответственности — сделать так, чтобы игровая картинка была понятна зрителю: я решаю кого показывать, когда показать cinematic-пролет, когда лучше показать рекламу, могу подсказать что лучше показать на повторе.',
      ],
      responsibilitiesTitle: 'Я умею:',
      responsibilities: [
        'обсервить матч в прямом эфире с максимально интересным наполнением.',
        'подготавливать эксклюзивные cinematic-пролёты под конкретный турнир;',
        'отдавать SRT или YouTube Clean Feed.',
        'настраивать игру и NVIDIA под требования трансляции;',
        'работать с OBS и собирать сцены на vMix;',
        'Работать с продакшен-оборудованием (SDI/коаксиал, ATEM, BMD-конвертеры);',
        'обучать других обсерверов и передавать им готовые конфиги и бинды.',
      ],
      highlight:
        'Являюсь единственным задокументированным notable-observer на Liquipedia по Counter-Strike и Dota 2.',
      locationNote: 'Базируюсь в Белграде, готов к командировкам и работе на выездных ивентах.',
    },
    experience: {
      title: '2. Опыт',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'февраль 2023 — по настоящее время',
          format: 'Формат: фуллтайм',
          responsibilitiesTitle: 'Что я делаю на ивентах:',
          responsibilities: [
            'обсервлю матчи по CS2 и Dota 2 в прямом эфире;',
            'подстраиваю показ под конкретный эфир — студийный, LAN;',
            'подготавливаю и запускаю cinematic-пролёты под рекламные интеграции;',
            'собираю и отдаю Clean Feed игры режиссёру трансляции;',
            'настраиваю графику игры и параметры NVIDIA, чтобы в эфир уходила стабильная картинка;',
            'делаю связку “игра → Telegram ChatBot → JSON для GFX”, чтобы статистика после матча сразу уходила дизайнерам;',
            'помогаю комментаторам с установкой конфигов для обеих дисциплин;',
            'при необходимости закрываю ивент в одного обсервера;',
            'участвую в диагностике и сборке обсерверных ПК, в закупке или аренды оборудования;',
            'работаю в длительных сменах (до 15 часов) и в разных странах (Дубай, Ереван, Белград).',
          ],
        },
      ],
    },
    tournaments: {
      title: '3. Турниры и ивенты',
      intro: 'За время работы я участвовал в трансляциях следующих турниров:',
      categories: [
        {
          title: 'CS2',
          items: [
            'BetBoom Dacha Dubai 2023: Closed Qualifier',
            'BetBoom Dacha Dubai 2023',
            'BetBoom Dacha Belgrade 2024: South American Qualifier',
            'BetBoom Dacha Belgrade #1 2024',
            'BetBoom Dacha Belgrade #2 2024',
            'FISSURE Playground #1',
            'FISSURE Playground #2',
          ],
        },
        {
          title: 'Dota 2',
          items: [
            'Bali Major 2023',
            'The International 2023 – North America Qualifier',
            'The International 2023 – South America Qualifier',
            'The International 2023 – Southeast Asia Qualifier',
            'The International 2023',
            'BetBoom Dacha Dubai 2024',
            'Elite League Season 1',
            'Elite League Season 2',
            'Riyadh Masters 2024',
            'BetBoom Dacha Belgrade 2024',
            'FISSURE Universe: Episode 2',
            'FISSURE Universe: Episode 5',
            'FISSURE Universe: Episode 6',
            'FISSURE Special',
            'FISSURE Playground 2 CQ',
            'FISSURE Playground 2',
          ],
        },
      ],
    },
    contributions: {
      title: '4. Функции и вклад (что именно я делаю)',
      items: [
        'Обсервлю матчи по CS2 и Dota 2 в прямом эфире с учётом интереса зрителя и задач продакшена.',
        'Подготавливаю эксклюзивные cinematic-пролёты под конкретный турнир: выбираю ракурс, настраиваю тайминг, делаю пролёт под спонсорские вставки.',
        'Онлайн отправляю Clean Feed игры напрямую режиссёру трансляции — чтобы режиссёр мог сразу брать чистую игровую картинку.',
        'Настраиваю графику самой игры и параметры NVIDIA под требования продакшена: стабильный FPS, отсутствие артефактов, нужное разрешение и качество.',
        'Настраиваю связку “игра → Telegram ChatBot → JSON”, чтобы после окончания карты статистика автоматически доставлялась GFX-дизайнерам и не терялась.',
        'Подготавливаю и устанавливаю конфиги для обеих дисциплин, помогаю кастерам их быстро подключить перед эфиром.',
        'Расширяю рабочее место обсервера: добавляю мониторы и наушники, делаю карты биндов (пролёт, отмена пролёта, переход на убийцу/просматриваемого игрока — бинд, который не описан публично).',
        'При своей конфигурации могу закрывать турнир в одного обсервера.',
        'Обучаю новых обсерверов: объясняю логику, обучаю работе с конфигами и биндами',
      ],
    },
    production: {
      title: '5. Продакшн и техника',
      intro:
        'Я не только показываю игру, но и понимаю, по какому “проводу” она к кому уходит. Это помогает быстро искать и исправлять проблемы.',
      items: [
        'работа с коаксиальными / SDI кабелями;',
        'подключение к продакшен-сетке через ATEM;',
        'использование BMD Converter HDMI↔SDI для дальнейшего включения источника в общую сетку;',
        'контроль сигнала и фреймрейта, отслеживание падений и несоответствий;',
        'оперативная замена кабеля, конвертера, а при необходимости — и компьютера;',
        'обновление драйверов, проверка видеокарты, подбор актуального ПО;',
        'сборка и обновление обсерверных ПК под конкретный турнир;',
        'работа в условиях плохого интернета (Ереван): ремаршрутизация через провайдера, использование ExitLag на квалификациях.',
      ],
      closing: 'Это важно, потому что если “не едет” один кабель — может упасть вся линия.',
    },
    tools: {
      title: '6. Софт и инструменты',
      groups: [
        {
          title: 'Игровые и обсерверные:',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Конфиги для CS2 и Dota 2', 'AutoHotkey (бинды и автоматизация игровых действий)'],
        },
        {
          title: 'Продакшен:',
          items: ['OBS — умею настраивать сцены, источники, вывод', 'vMix — собираю сцены, подключаю фиды', 'ATEM mini', 'Stream Deck', 'BMD Converter HDMI↔SDI'],
        },
        {
          title: 'Разработка / сервис:',
          items: ['Python (простые скрипты и отправка статистики)', 'VS Code'],
        },
      ],
    },
    training: {
      title: '7. Обучение и внутренняя работа',
      intro: 'Внутри команды я не только сам обсервил матчи, но и выстроил понятный процесс для других:',
      items: [
        'обучил минимум двух людей до уровня main observer Dota 2 и offcast observer Dota 2/CS2;',
        'дал им карты биндов и конфиги, чтобы они могли повторить мой сетап;',
        'улучшил рабочее место обсервера (доп. мониторы, наушники, программы);',
      ],
    },
    links: {
      title: '8. Ссылки',
      items: [
        {
          label: 'LinkedIn:',
          value: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
        },
        {
          label: 'Liquipedia (Counter-Strike):',
          value: 'https://liquipedia.net/counterstrike/Rollen',
          href: 'https://liquipedia.net/counterstrike/Rollen',
        },
        {
          label: 'Liquipedia (Dota 2):',
          value: 'https://liquipedia.net/dota2/Rollen',
          href: 'https://liquipedia.net/dota2/Rollen',
        },
        {
          label: 'Email:',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
        },
      ],
    },
    shortVersion: {
      title: '9. Краткая версия (можно в шапку сайта)',
      description:
        'Observer / Production Staff по CS2 и Dota 2. Работаю с 2023 года на турнирах FISSURE и BetBoom, включая TI qualifiers, Elite League и Riyadh Masters. Делаю эксклюзивные cinematic-пролёты, отдаю Clean Feed игры режиссёру, настраиваю OBS и vMix, подключаюсь к продакшен-сетке и отправляю статистику в GFX. Единственный задокументированный notable observer на Liquipedia по CS и Dota 2. Белград, готов к выездам.',
    },
    footer: {
      note: 'Если хочешь — могу эту же структуру собрать в JSON/Markdown для автоподстановки на сайт.',
    },
  },
}

export default ru
