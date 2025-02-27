// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Here are some of my papers and working projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-life",
          title: "life",
          description: "I am the principal dancer of NTU Graduate Student Dance Crew. Here are some moments from my performances with my team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "news-presentation-the-36th-asian-finance-association-annual-conference-macau",
          title: 'Presentation: The 36th Asian Finance Association Annual Conference, Macau',
          description: "",
          section: "News",},{id: "news-presentation-singapore-scholars-symposium-2024-singapore",
          title: 'Presentation: SINGAPORE SCHOLARS SYMPOSIUM 2024, Singapore',
          description: "",
          section: "News",},{id: "news-presentation-australasian-finance-amp-amp-banking-conference-2024-sydney",
          title: 'Presentation: Australasian Finance &amp;amp;amp; Banking Conference 2024, Sydney',
          description: "",
          section: "News",},{id: "news-presentation-15th-financial-markets-and-corporate-governance-conference-invited-submission-changsha",
          title: 'Presentation: 15th Financial Markets and Corporate Governance Conference (Invited submission), Changsha',
          description: "",
          section: "News",},{id: "projects-dream-of-red-mansions",
          title: 'Dream of Red Mansions',
          description: "NTU Lunar New Year Celebration Concert 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_projects/";
            },},{id: "projects-a-mere-touch-of-green",
          title: 'A Mere Touch of Green',
          description: "NUS Lunar New Year Celebration Concert 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-the-lantern-festival-night",
          title: 'The Lantern Festival Night',
          description: "We were invited by the Embassy of the People’s Republic of China in Singapore to perform.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E%6D%61%6E%30%30%31@%65.%6E%74%75.%65%64%75.%73%67", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sherry-h-46a56b12b", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
