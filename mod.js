module.exports = {
  title: "Puzzlestuck",
  summary: "Puzzlestuck flash game",
  author: "Loren Hernandez",
  modVersion: 0.1,
  routes: {
    'assets://crossdomain.xml': './crossdomain.xml',
  },
  trees: {
    './': 'assets://mod/puzzlestuck/',
  },
  vueHooks: [{
    // Backwards compatibility
    matchName: "MediaEmbed",
    data: {
      indexedFlashProps($super){
        return {
          "puzzlestuckStandAlone": {width: 800, height: 480},
          ...$super
        }
      }
    }
  }],
  edit(archive) {
    archive.tweaks.modHomeRowItems.unshift({
      href: "/puzzlestuck",
      thumbsrc: "assets://mod/puzzlestuck/homepage_icon.png",
      date: "",
      title: 'Puzzlestuck',
      description: `<p>Puzzlestuck, Loren Hernandez's Match-3 Homestuck RPG fan game</p>`
    })
  },
  computed(api) {
    return {
      browserPages: {
        'PUZZLESTUCK': { // URL
          component: {
            title: () => "Puzzlestuck", // Tab title
            // theme: (ctx) => 'dark', // tab "desired" theme
            template: `<body>${api.readFile('./index.html')}</body>`,
            scss: api.readFile('./style.scss')
          }
        }
      }
    }
  }
}
