const SHOP_DATA = [
  {
    id: 1,
    title: 'Soaps',
    routeName: 'soaps',
    items: [
      {
        id: 1,
        name: 'Aloe & Olive Oil',
        imageUrl: 'http://localhost:3000/images/soap11.jpg',
        descripion: 'Gently moisturize your skin with goodness of Aloe and Olive Oil packed with skin loving vitamins and antioxidants',
        price: 25
      },
      {
        id: 2,
        name: 'Goats Milk',
        imageUrl: 'http://localhost:3000/images/soap12.jpg',
        description: 'Give your skin the nourishment it needs with goats milk',
        price: 18
      },
      {
        id: 3,
        name: 'Moroccan Argan soap',
        imageUrl: 'http://localhost:3000/images/soap13.jpg',
        description: 'Enrich your skin with soap made with luxurious Moroccan Argan oil and infused with Calendula and Sunflower.',
        price: 35
      }
    ]
  },
  {
    id: 2,
    title: 'Oils And Serums',
    routeName: 'oilsserums',
    items: [
      {
        id: 4,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 5,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 6,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      }
    ]
  },
  {
    id: 3,
    title: 'Body Butters',
    routeName: 'bodybutters',
    items: [
      {
        id: 7,
        name: 'Belly Butter For Expecting Moms',
        imageUrl: 'http://localhost:3000/images/belly-butter.jpg',
        description: 'Whipped butter made with refined shea and cocoa butter with very little scent to avoid nausea. Infused with calendula to soothe itchy skin.',
        price: 125
      },
      {
        id: 8,
        name: 'Triple Sunshine Body Butter',
        imageUrl: 'http://localhost:3000/images/belly-butter.jpg',
        description: 'Rich butter infused with a trio of golden flowers - chamomile, calendula and dandelion that soothe and nourish the skin.',
        price: 90
      },
      {
        id: 9,
        name: 'Intensive Hand Butter',
        imageUrl: 'http://localhost:3000/images/belly-butter.jpg',
        description: 'Heal your dry hands at night with shea butter, coconut oil, and rosehip seed oil with excellent healing and anti-aging properties.',
        price: 90
      }
    ]
  },
  {
    id: 4,
    title: 'Lip Balms',
    routeName: 'lipbalms',
    items: [
      {
        id: 10,
        name: 'Classic Perppermint Lip Balm',
        imageUrl: 'http://localhost:3000/images/lip_balm1.jpg',
        description: 'Classic minty fresh lip balm made with beeswax and castor oil.',
        price: 25
      },
      {
        id: 11,
        name: 'Rosy Lip Tint',
        imageUrl: 'http://localhost:3000/images/rosy_lip_tint.jpg',
        description: 'Soothing lip blam with rose infused oil with a light rosy tint',
        price: 20
      },
      {
        id: 12,
        name: 'Chamomile Lip Scrub',
        imageUrl: 'http://localhost:3000/images/lip_balm1.jpg',
        description: 'Repair dry, flaky lips with this nourishing scrub infused with chamomile. Follow up with a gentle lip balm.',
        price: 80
      }
    ]
  },
  {
    id: 5,
    title: 'Gift Sets',
    routeName: 'giftsets',
    items: [
      {
        id: 13,
        name: 'Gift Set 1',
        imageUrl: 'http://localhost:3000/images/gift_set2.jpg',
        price: 80
      }
    ]
  }
];

export default SHOP_DATA;
