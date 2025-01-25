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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-internet-world",
          title: "Internet World",
          description: "A curated collection of insightful articles, research, and literature from across the web, covering a wide range of topics to inspire learning and spark curiosity.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-vitae",
          title: "vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-still-vulnerable-at-25",
      
        title: "Still Vulnerable at 25",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/twitter/";
        
      },
    },{id: "post-darwin-day",
      
        title: "Darwin Day",
      
      description: "Sexual Selection",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/distill/";
        
      },
    },{id: "post-love-is-a-funny-thing",
      
        title: "Love is a funny thing.",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/disqus-comments/";
        
      },
    },{id: "post-human-cycle-of-civilization-and-destruction",
      
        title: "Human cycle of civilization and destruction",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/math/";
        
      },
    },{id: "post-404",
      
        title: '404 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://kishanmishra.bearblog.dev/blog/feed", "_blank");
        
      },
    },{id: "post-journey-uphill",
      
        title: "Journey uphill",
      
      description: "Rafiki from The Lion King",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code/";
        
      },
    },{id: "post-journey-uphill",
      
        title: 'Journey Uphill <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://mishrakishan.medium.com/journey-uphill-5ffe75580945?source=rss-b79f6dd5dd45------2", "_blank");
        
      },
    },{id: "post-darwin-day",
      
        title: '‘Darwin’ Day <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://mishrakishan.medium.com/darwin-day-ad5c5170b419?source=rss-b79f6dd5dd45------2", "_blank");
        
      },
    },{id: "post-independence-defence-and-resistance",
      
        title: '“Independence, Defence and Resistance” <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://mishrakishan.medium.com/independence-defence-and-resistance-5c315056a072?source=rss-b79f6dd5dd45------2", "_blank");
        
      },
    },{id: "post-who-to-compare-yourself-with",
      
        title: "Who to compare yourself with",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/images/";
        
      },
    },{id: "post-a-stage-of-internal-war-and-peace",
      
        title: "A stage of internal war and peace",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-kudos-summary-available-of-the-recently-featured-article-magnetic-soliton-based-lif-neurons-for-spiking-neural-networks-snns-in-multilayer-spintronic-devices-published-on-aip-advances-titled-as-multilayer-dw-amp-amp-skyrmion-based-spintronic-lif-neuron-model-amp-amp-devices-for-neuromorphic-computing",
          title: 'Kudos summary available of the recently featured article Magnetic soliton-based LIF neurons for...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%68%79%73%69%63%73.%6B%69%73%68%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Mishrakishan", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@Mishrakishan", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/kishan-mishra/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QNo3X1cAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/beyondEclipses", "_blank");
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
