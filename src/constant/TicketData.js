export const planeTicket = [
  {
    id: 1,
    name: "بویینک 737",
    logo: "/image/SahaAir.svg",
    campony: "ساها ایر",
    icon: <smallPlane width={18} height={16} color="currentColor" />,
    start: "00:45",
    finish: "02:10",
    available: true,
    capicity: 9,
    price: 3402500,
  },
  {
    id: 2,
    name: "فوکر 100",
    logo: "/image/Aseman.svg",
    campony: "آسمان",
    icon: <smallPlane width={18} height={16} color="currentColor" />,
    start: "06:00",
    finish: "07:25",
    available: false,
    capicity: 0,
    price: 3402500,
  },
  {
    id: 3,
    name: "بی آیی 106",
    logo: "/image/Mahan.svg",
    campony: "ماهان",
    icon: <smallPlane width={18} height={16} color="currentColor" />,
    start: "11:45",
    finish: "13:10",
    available: true,
    capicity: 2,
    price: 4402500,
  },
];

export const hotelList = [
  {
    imageSrc: [
      "/image/hotel1.jpg",
      "/image/hotel2.jpg",
      "/image/hotel3.jpg",
      "/image/hotel4.jpg",
    ],
    name: "هتل ساسان",
    star: 2,
    rate: 8.6 / 10,
    info: "قیمت یک شب اتاق دو تخته",
    price: 1444000,
    off: 31,
  },
  {
    imageSrc: [
      "/image/chamran1.jpg",
      "/image/chamran2.jpg",
      "/image/chamran3.jpg",
      "/image/chamran4.jpg",
    ],
    name: "هتل چمران",
    star: 5,
    rate: 9.85 / 10,
    info: "قیمت یک شب اتاق دو تخته",
    price: 1944000,
    off: 20,
  },
  {
    imageSrc: [
      "/image/parsian1.jpg",
      "/image/parsian2.jpg",
      "/image/parsian3.jpg",
      "/image/parsian4.jpg",
    ],
    name: "هتل پارسیان",
    star: 3,
    rate: 6.2 / 10,
    info: "قیمت یک شب اتاق دو تخته",
    price: 1244000,
    off: 27,
  },
];
