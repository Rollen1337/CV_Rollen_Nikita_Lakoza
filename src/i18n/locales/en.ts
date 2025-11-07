const en = {
  language: {
    label: 'English',
    nativeName: 'English',
  },
  layout: {
    skipToMain: 'Skip to main content',
    languageSwitcherLabel: 'Language',
    themeSwitcherToggle: 'Toggle theme',
    themeOptionSystem: 'System',
    themeOptionLight: 'Light',
    themeOptionDark: 'Dark',
    pdfControlsLabel: 'PDF controls',
    headerControlsLabel: 'Header controls',
  },
  actions: {
    exportPdf: 'Export PDF',
    viewPdf: 'View PDF',
    exportComingSoon:
      'PDF export and permanent links are on the roadmap. The controls will activate once the pipeline is connected.',
  },
  cv: {
    metadata: {
      name: 'Nikita “Rollen” Lakoza',
      headline: 'Observer / Production Staff for CS2 and Dota 2.',
      detailsLabel: '',
      details: [] as { label: string; value: string }[],
    },
    contact: {
      title: '8. Links',
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
      title: '1. About me',
      intro: [
        'I am Nikita “Rollen” Lakoza — an observer for Counter-Strike 2 and Dota 2. Since February 2023 I have worked on FISSURE and BetBoom tournaments, including The International qualifiers and large commercial leagues (Elite League, Riyadh Masters, BetBoom Dacha).',
        'My responsibility is to make the in-game picture clear for the audience: I decide who to show, when to launch a cinematic flythrough, when to display ads, and I can suggest the best moment for a replay.',
      ],
      responsibilitiesTitle: 'I can:',
      responsibilities: [
        'observe a live match with the most engaging coverage.',
        'prepare exclusive cinematic flythroughs tailored to a specific tournament;',
        'deliver an SRT or YouTube Clean Feed.',
        'configure the game and NVIDIA settings for broadcast requirements;',
        'work with OBS and assemble scenes in vMix;',
        'work with production hardware (SDI/coaxial, ATEM, BMD converters);',
        'train other observers and share ready-made configs and keybinds.',
      ],
      highlight:
        'I am the only documented notable observer on Liquipedia for Counter-Strike and Dota 2.',
      locationNote: 'Based in Belgrade, available for travel and on-site events.',
    },
    experience: {
      title: '2. Experience',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'February 2023 — present',
          format: 'Format: full-time',
          responsibilitiesTitle: 'What I handle at events:',
          responsibilities: [
            'observe CS2 and Dota 2 matches live on air;',
            'adapt the broadcast for each feed — studio or LAN;',
            'prepare and launch cinematic flythroughs for advertising integrations;',
            'capture and deliver the game’s Clean Feed to the broadcast director;',
            'tune in-game graphics and NVIDIA parameters so the signal stays stable;',
            'build the chain “game → Telegram ChatBot → JSON for GFX” so post-match stats reach designers instantly;',
            'help commentators install configs for both disciplines;',
            'cover an event as a solo observer when needed;',
            'support diagnostics and assembly of observer PCs, including purchasing or renting equipment;',
            'work long shifts (up to 15 hours) across different countries (Dubai, Yerevan, Belgrade).',
          ],
        },
      ],
    },
    tournaments: {
      title: '3. Tournaments & Events',
      intro: 'During my work I have contributed to the broadcasts of the following tournaments:',
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
      title: '4. Functions & contribution (what exactly I do)',
      items: [
        'Observe CS2 and Dota 2 matches live with both viewer engagement and production goals in mind.',
        'Prepare exclusive cinematic flythroughs for each tournament: pick camera paths, tune timing, and create sponsor placements.',
        'Send the game’s Clean Feed directly to the broadcast director so they can switch to a clean shot immediately.',
        'Configure in-game graphics and NVIDIA parameters to match production requirements: stable FPS, no artifacts, the required resolution and quality.',
        'Build the “game → Telegram ChatBot → JSON” chain so post-map statistics automatically reach GFX designers without loss.',
        'Prepare and install configs for both disciplines, helping casters connect them quickly before going on air.',
        'Expand the observer workspace: add monitors and headsets, create keybind maps (flythrough, cancel flythrough, jump to killer/observed player — a bind that is not documented publicly).',
        'Handle a tournament as a solo observer with my setup.',
        'Train new observers: explain the logic, teach how to work with configs and keybinds.',
      ],
    },
    production: {
      title: '5. Production & hardware',
      intro:
        'I do more than show the game — I understand every “wire” that carries the signal, which helps me diagnose and fix issues fast.',
      items: [
        'work with coaxial / SDI cables;',
        'connect to the production network via ATEM;',
        'use BMD Converter HDMI↔SDI to add sources to the shared grid;',
        'monitor signal and frame rate, tracking drops and mismatches;',
        'replace cables, converters, or even the PC when needed;',
        'update drivers, check GPUs, select the right software;',
        'assemble and upgrade observer PCs for a specific tournament;',
        'work with poor internet (Yerevan): reroute via provider, use ExitLag during qualifiers.',
      ],
      closing:
        'This matters because if a single cable “fails to carry the signal”, the entire line can go down.',
    },
    tools: {
      title: '6. Software & tools',
      groups: [
        {
          title: 'Game & observer:',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Configs for CS2 and Dota 2', 'AutoHotkey (keybinds and gameplay automation)'],
        },
        {
          title: 'Production:',
          items: ['OBS — configuring scenes, sources, output', 'vMix — building scenes, connecting feeds', 'ATEM mini', 'Stream Deck', 'BMD Converter HDMI↔SDI'],
        },
        {
          title: 'Development & services:',
          items: ['Python (simple scripts and stat delivery)', 'VS Code'],
        },
      ],
    },
    training: {
      title: '7. Training & internal work',
      intro:
        'Inside the team I not only observed matches myself but also built a clear process for others:',
      items: [
        'trained at least two people to the level of main observer for Dota 2 and offcast observer for Dota 2/CS2;',
        'gave them keybind maps and configs so they could reproduce my setup;',
        'upgraded the observer workstation (extra monitors, headsets, software);',
      ],
    },
    links: {
      title: '8. Links',
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
      title: '9. Short version (can go in the site header)',
      description:
        'Observer / Production Staff for CS2 and Dota 2. Since 2023 I have worked on FISSURE and BetBoom tournaments, including TI qualifiers, Elite League, and Riyadh Masters. I create exclusive cinematic flythroughs, deliver the game’s Clean Feed to the director, configure OBS and vMix, connect to production networks, and send stats to GFX. The only documented notable observer on Liquipedia for CS and Dota 2. Based in Belgrade, ready to travel.',
    },
    footer: {
      note: 'If needed, I can prepare the same structure in JSON/Markdown for automatic website integration.',
    },
  },
}

export type Translation = typeof en
export default en
