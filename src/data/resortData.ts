interface IResort {
  name: string;
  images: string[];
  location: string;
  contact?: string;
  fbPage?: {
    name: string;
    link: string;
  };
  offers: string[];
  rating?: number;
}

interface IResortData {
  municipality: string;
  resorts: IResort[];
}

export const resortData: IResortData[] = [
  {
    municipality: "Balayan",
    resorts: [
      {
        name: "Bahay San Jose Beach House",
        images: ["balayan/bahaysanjose1.jpg", "balayan/bahaysanjose2.jpg"],
        location: "Dellamas Compound, Purok 7, Brgy. Carenahan 4213 Balayan",
        contact: "0917-625-1963",
        offers: [
          "Private beach house",
          "Cabana",
          "Swimming pool",
          "Camping tents",
          "Beach access - Beachfront",
          "Kitchen",
          "Free parking on premises",
          "TV",
          "Air conditioning",
          "Backyard",
          "Refrigerator",
          "Microwave",
        ],
      },
      {
        name: "Cimpulo Beach Resort",
        images: [
          "balayan/cimpulo1.jpg",
          "balayan/cimpulo2.jpg",
          "balayan/cimpulo3.jpg",
        ],
        location: "Brgy. San Piro, Balayan, Batangas",
        contact: "(043) 407-0089",
        fbPage: {
          name: "Cimpulo Beach Resort",
          link: "https://www.facebook.com/CimpuloBeachResort",
        },
        offers: [
          "Events management",
          "Pool for kids & adults",
          "Room and cottages for rent",
          "Banana boats",
        ],
        rating: 4.5,
      },
      {
        name: "Soler Sea, Seaside",
        images: ["balayan/soler1.jpg", "balayan/soler2.jpg"],
        location: "Balayan, Batangas",
        contact: "0995-782-4908",
        offers: ["Pool", "Accomodation"],
        rating: 4.5,
      },
      {
        name: "Summer 8 Resort",
        images: ["balayan/summer81.jpg", "balayan/summer82.jpg"],
        location: "Brgy. Gumamela, Balayan, Batangas",
        contact: "0997-524-6674",
        offers: ["Pool", "Accomodation"],
      },
      {
        name: "La Jamayca Resort",
        images: [
          "balayan/lajamayca1.jpg",
          "balayan/lajamayca2.jpg",
          "balayan/lajamayca3.jpg",
        ],
        location: "Brgy. San Piro, Balayan, Batangas",
        contact: "0977-473-6118",
        offers: ["Pool", "Accomodation"],
      },
      {
        name: "King and Queen Resort",
        images: ["balayan/kingqueen1.jpg"],
        location: "Brgy. Sambat, Balayan, Batangas",
        contact: "(043) 211 4504",
        offers: ["Public Swimming Pool", "Air conditioning", "Wi-fi"],
      },
      {
        name: "La Piscina Di Concepcion Resort",
        images: ["balayan/lapiscina1.jpg", "balayan/lapiscina2.jpg"],
        location: "Brgy. Gumamela, Balayan Batangas",
        contact: "0905-379-2448 | 0917-844-7431",
        offers: ["Swimming pool", "Fishing resort"],
      },
      {
        name: "Villa Beadoy Resort",
        images: [
          "balayan/villabeadoy1.jpg",
          "balayan/villabeadoy2.jpg",
          "balayan/villabeadoy3.jpg",
        ],
        location: "Brgy. Gumamela, Balayan Batangas",
        offers: ["Pavillion", "Resort"],
      },
      {
        name: "La Georgina Resort",
        images: [
          "balayan/lageorgina1.jpg",
          "balayan/lageorgina2.jpg",
          "balayan/lageorgina3.jpg",
        ],
        location: "Brgy. Caybunga, Balayan, Batangas",
        contact: "0936-718-8106",
        offers: ["Public swimming pool", "Venue for events", "Free wi-fi"],
      },
      {
        name: "Henaida Resort",
        images: ["balayan/henaida1.png", "balayan/henaida2.png"],
        location: "Brgy. Balayan, Batangas",
        contact: "0905-212-3485",
        offers: ["Pool", "Accomodation"],
        rating: 3.9,
      },
    ],
  },
  {
    municipality: "Calaca",
    resorts: [
      {
        name: "Aqua Farm Beach Resort",
        images: ["calaca/aquabeach1.jpg", "calaca/aquabeach2.jpg"],
        location: "Brgy. Talisay, Calaca - Lemery Hwy, Calaca, 4212 Batangas",
        contact: "0915-956-5521",
        offers: ["Swimming pools", "Cottages", "Tents for outside events"],
      },
      {
        name: "Villa Nenita Resort",
        images: [
          "calaca/villanenita1.jpg",
          "calaca/villanenita2.jpg",
          "calaca/villanenita3.jpg",
        ],
        location: "Marasigan St. Brgy. 5 Calaca, Batangas",
        contact: "0927-211-0646 | 0923-256-1162",
        offers: ["Day tour", "Overnight stay"],
      },
      {
        name: "Yabut River Resort",
        images: ["calaca/yabut1.jpg", "calaca/yabut4.jpg", "calaca/yabut5.jpg"],
        location: "Timoteo Marella St., Calaca, Batangas",
        contact: "yabutresort@gmail.com",
        fbPage: {
          name: "Yabut River Resort",
          link: "https://www.facebook.com/YabutRiverResort",
        },
        offers: [
          "Pool for kids & adults",
          "Event management",
          "Sport activities",
          "Room accomodation",
          "Cottages",
          "Kayaking",
        ],
        rating: 4.5,
      },
      {
        name: "Queen Teresita Resort",
        images: [
          "calaca/queenteresita1.jpg",
          "calaca/queenteresita2.jpg",
          "calaca/queenteresita4.jpg",
        ],
        location: "Poblacion 6, Calaca, Batangas",
        contact: "0956-336-9045",
        fbPage: {
          name: "Queen Teresita Resort and Waterpark",
          link: "https://www.facebook.com/queenteresita",
        },
        offers: [
          "Pool for kids & adults",
          "Event management",
          "Sport activities",
          "Room accomodation",
          "Cottages",
          "Kayaking",
        ],
        rating: 4.5,
      },
      {
        name: "Orlando's Beach Resort",
        images: ["calaca/orlando1.png", "calaca/orlando2.png"],
        location: "Brgy. Lemery, 4209 Batangas",
        contact: "0916-652-1028",
        offers: ["Air conditioning", "Accomodation"],
        rating: 4.3,
      },
      {
        name: "Filipina Beach Resort",
        images: [
          "calaca/filipina1.jpg",
          "calaca/filipina2.jpg",
          "calaca/filipina3.jpg",
        ],
        location: "Calaca, Batangas",
        fbPage: {
          name: "Filipina Beach Resort Calaca Batangas",
          link: "https://www.facebook.com/pages/Filipina-Beach-Resort-Calaca-Batangas/436124066404679",
        },
        offers: [
          "Pool for kids & adults",
          "Room and Cottages",
          "Island hopping",
          "Banana boat",
        ],
      },
    ],
  },
  {
    municipality: "Lemery",
    resorts: [
      {
        name: "Villa Garcia Beach Resort",
        images: [
          "lemery/villagarcia2.jpg",
          "lemery/villagarcia5.jpg",
          "lemery/villagarcia6.jpg",
        ],
        location: "Brgy. Nonong Castro, Lemery, Batangas",
        contact: "villagarciabeach@gmail.com | 0917-508-5891 | 0915-378-3678",
        fbPage: {
          name: "Villa Garcia Beach Resort",
          link: "https://www.facebook.com/villagraciabeachresort",
        },
        offers: [
          "Pool for kids & adults",
          "Room accomodation",
          "Banana boat",
          "Island hopping",
        ],
        rating: 3.5,
      },
      {
        name: "RMS Beach Resort",
        images: ["lemery/rms1.png", "lemery/rms2.png"],
        location: "Brgy. Nonong Castro, Lemery, 4209 Batangas",
        contact: "(043) 411-2139",
        offers: ["Swimmping pool", "Water playground", "Beach"],
        rating: 4.0,
      },
      {
        name: "RD8 Beach Resort",
        images: ["lemery/rd81.png", "lemery/rd82.png"],
        location: "Lemery, Batangas",
        contact: "0917-955-6886",
        offers: ["Swimming pool", "Accomodation", "Water park"],
        rating: 4.2,
      },
      {
        name: "La Familia Bay Beach Resort",
        images: ["lemery/lfb4.jpg", "lemery/lfb5.jpg"],
        location: "Lemery, Batangas",
        contact: "0955-722-8739",
        fbPage: {
          name: "La Familia Bay Beach Resort",
          link: "https://www.facebook.com/LaFamiliaGate2/",
        },
        offers: [
          "Pool for kids & adults",
          "Accomodation",
          "Banana boat",
          "Island hopping",
        ],
        rating: 5.0,
      },
      {
        name: "Punzalan 4 Beach Resort",
        images: ["lemery/punzalan1.png", "lemery/punzalan2.png"],
        location: "Brgy. Nonong Casto, Lemery, Batangas",
        contact: "0917-485-7262",
        offers: ["Swimming pool", "Cottages for rent"],
      },
      {
        name: "La Rea Beach Resort",
        images: ["lemery/larea1.jpg", "lemery/larea3.jpg", "lemery/larea5.jpg"],
        location: "Brgy. Nonong Casto, Lemery, Batangas",
        contact: "0916-774-2788",
        fbPage: {
          name: "La Rea Beach Resort",
          link: "https://www.facebook.com/La-Rea-Beach-Resort-2197123430511669",
        },
        offers: [
          "Pool for kids & adults",
          "Room and Cottages for rent",
          "Banana boat",
        ],
      },
      {
        name: "Heart of D' Ocean Beach Resort",
        images: [
          "lemery/heartocean2.jpg",
          "lemery/heartocean3.jpg",
          "lemery/heartocean4.jpg",
        ],
        location: "Brgy. Nonong Casto, Lemery, Batangas",
        contact: "heartofdocean2005@gmail.com | 0917-528-3832",
        fbPage: {
          name: "Heart of D' Ocean Beach Resort",
          link: "https://www.facebook.com/Heart-of-D-Ocean-Beach-Resort-233219370026088",
        },
        offers: ["Pool for kids & adults", "Water park", "Accomodation"],
        rating: 4.0,
      },
      {
        name: "De La Rosa Beach Resort",
        images: [
          "lemery/delarosa1.jpg",
          "lemery/delarosa2.jpg",
          "lemery/delarosa3.jpg",
        ],
        fbPage: {
          name: "Dela Rosa Beach Resort Lemery Batangas",
          link: "https://www.facebook.com/pages/Dela%20Rosa%20Beach%20Resort%20Lemery%20Batangas/373207349464016/",
        },
        location: "Lemery, Batangas",
        offers: [
          "Pool for kids & adults",
          "Room and cottages",
          "Banana boat",
          "Beach volleyball",
        ],
        rating: 4.0,
      },
      {
        name: "Lemerish",
        images: ["lemery/lemerish1.png", "lemery/lemerish2.png"],
        location: "Lemery, Batangas",
        contact: "0995-513-1865",
        offers: ["Beach", "Air conditioning", "Accomodation"],
        rating: 4.0,
      },
    ],
  },
];
