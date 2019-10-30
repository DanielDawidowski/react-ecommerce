const SHOP_DATA = {
 consoles: {
    id: 1,
    title: 'Consoles',
    routeName: 'consoles',
    items: [
      {
        id: 1,
        name: 'PS4 + Call of Duty - Modern Warfare',
        imageUrl: 'https://i.ibb.co/714q4vN/console-ps4-COD-modern-Warfare.jpg',
        price: 290
      },
      {
        id: 2,
        name: 'PS4 + 3 games',
        imageUrl: 'https://i.ibb.co/zR63Dv8/console-ps4-3games.jpg',
        price: 280
      },
      {
        id: 3,
        name: 'PS4 + FIFA20',
        imageUrl: 'https://i.ibb.co/LC5XtVz/console-ps4-fifa20.jpg',
        price: 280
      },
      {
        id: 4,
        name: 'PS4 + Red Dead Redemption 2',
        imageUrl: 'https://i.ibb.co/c39Ff44/console-ps4-RDD2.jpg',
        price: 250
      },
      {
        id: 5,
        name: 'Xbox Black',
        imageUrl: 'https://i.ibb.co/N32FYpN/console-xbox.jpg',
        price: 270
      },
      {
        id: 6,
        name: 'Xbox White',
        imageUrl: 'https://i.ibb.co/SrqKY3r/console-xbox-white.jpg',
        price: 280
      },
      {
        id: 7,
        name: 'Nintendo Switch Lite GOLD',
        imageUrl: 'https://i.ibb.co/rZ47MGJ/nintendo-switch-lite-gold.jpg',
        price: 180
      },
      {
        id: 8,
        name: 'Nintendo Switch',
        imageUrl: 'https://i.ibb.co/0CSDYt0/nintendo-switch.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Nintendo Switch Lite',
        imageUrl: 'https://i.ibb.co/TwD9G68/nintendo-switch-lite.jpg',
        price: 16
      }
    ]
  },
  ps4: {
    id: 2,
    title: 'Playstation 4 Games',
    routeName: 'ps4',
    items: [
      {
        id: 10,
        name: 'Rocket League',
        imageUrl: 'https://i.ibb.co/mzLh06C/ps4-rocket-league.jpg',
        price: 30
      },
      {
        id: 11,
        name: 'Borderlands 3',
        imageUrl: 'https://i.ibb.co/qBVW2Dx/ps4-borderlands3.jpg',
        price: 32
      },
      {
        id: 12,
        name: 'Assassins Creed Odyssey',
        imageUrl: 'https://i.ibb.co/Z6Jq2p5/ps4-assassin-039-s-creed-odyssey.jpg',
        price: 30
      },
      {
        id: 13,
        name: 'Red Dead Redemption 2',
        imageUrl: 'https://i.ibb.co/G9V5Vyw/ps4-rdd2.jpg',
        price: 40
      },
      {
        id: 14,
        name: 'Star Wars - Jedi Fallen Order',
        imageUrl: 'https://i.ibb.co/9yj7Dkb/ps4-jedi.jpg',
        price: 50
      },
      {
        id: 15,
        name: 'GTA 5',
        imageUrl: 'https://i.ibb.co/bHt47Ts/ps4-gta5.jpg',
        price: 35
      },
      {
        id: 16,
        name: 'FIFA 20',
        imageUrl: 'https://i.ibb.co/qRDQ2CX/ps4-fifa20.jpg',
        price: 50
      },
      {
        id: 17,
        name: 'Call of Duty - Modern Warfare',
        imageUrl: 'https://i.ibb.co/H2Jfc3r/ps4-cod.jpg',
        price: 60
      }
    ]
  },
  xbox: {
    id: 3,
    title: 'Xbox Games',
    routeName: 'xbox',
    items: [
      {
        id: 18,
        name: 'FIFA 20',
        imageUrl: 'https://i.ibb.co/QDGqQ4K/xbox-FIFA20.jpg',
        price: 50
      },
      {
        id: 19,
        name: 'The Crew 2',
        imageUrl: 'https://i.ibb.co/3zymXmW/xbox-crew2.jpg',
        price: 40
      },
      {
        id: 20,
        name: 'Formula 1',
        imageUrl: 'https://i.ibb.co/SBNLn3t/xbox-F1.jpg',
        price: 49
      },
      {
        id: 21,
        name: 'Forza Horizon 4',
        imageUrl: 'https://i.ibb.co/BHhDR4c/xbox-Forza-4.jpg',
        price: 40
      },
      {
        id: 22,
        name: 'The Sims 4',
        imageUrl: 'https://i.ibb.co/Dz3HFX5/xbox-sims4.jpg',
        price: 30
      }
    ]
  },
  nintendo: {
    id: 4,
    title: 'Nintendo Games',
    routeName: 'nintendo',
    items: [
      {
        id: 23,
        name: 'Just Dance',
        imageUrl: 'https://i.ibb.co/Wxkjf0j/nin-just-dance.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Mario Kart 8',
        imageUrl: 'https://i.ibb.co/L9jQxHz/nin-mario-karts.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Minecraft',
        imageUrl: 'https://i.ibb.co/FJnJ3CR/nin-minecraft.jpg',
        price: 25
      },
      {
        id: 26,
        name: 'Pokemon',
        imageUrl: 'https://i.ibb.co/1LKQkFP/nin-pokemon.jpg',
        price: 30
      },
      {
        id: 27,
        name: 'Super Mario Maker 2',
        imageUrl: 'https://i.ibb.co/fHrMQCB/nin-super-mario-maker-2.jpg',
        price: 25
      },
      {
        id: 28,
        name: 'Super Mario Party',
        imageUrl: 'https://i.ibb.co/9WsRDk0/nin-super-mario-party.jpg',
        price: 35
      },
      {
        id: 29,
        name: 'Whitcher 3',
        imageUrl: 'https://i.ibb.co/tQtpXjV/nin-witcher-3.jpg',
        price: 25
      }
    ]
  },
  smartphones: {
    id: 5,
    title: 'SmartPhones',
    routeName: 'smartphones',
    items: [
      {
        id: 30,
        name: 'iPhone SE',
        imageUrl: 'https://i.ibb.co/P5M2xrx/i-Phone-SE.jpg',
        price: 725
      },
      {
        id: 31,
        name: 'iPhone 11',
        imageUrl: 'https://i.ibb.co/KjbfP9V/i-Phone-11-Pro.jpg',
        price: 1200
      },
      {
        id: 32,
        name: 'iPhone X',
        imageUrl: 'https://i.ibb.co/wg1zwdm/iPhone-X.jpg',
        price: 250
      },
      {
        id: 33,
        name: 'Samsung Galaxy A20',
        imageUrl: 'https://i.ibb.co/DKPgzDr/samsung-galaxy-a20.jpg',
        price: 150
      },
      {
        id: 34,
        name: 'Samsung Galaxy A70',
        imageUrl: 'https://i.ibb.co/M2FX22F/samsung-galaxy-a70.jpg',
        price: 400
      },
      {
        id: 35,
        name: 'Samsung Galaxy Note 10',
        imageUrl: 'https://i.ibb.co/Dfp5M7x/samsung-galaxy-Note10.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
