const productsData = [
  {
    id: 1,
    title: "с фуа-гра",
    description: "Печень утки разварная с артишоками.",
    signs: [
      { count: 10, description: "порций" },
      { description: "мышь в подарок" },
    ],
    weight: "0,5",
    inStock: true,
  },
  {
    id: 2,
    title: "с рыбой",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.  ",
    signs: [
      { count: 40, description: "порций" },
      { count: 2, description: "мыши в подарок" },
    ],
    weight: "2",
    inStock: true,
  },
  {
    id: 3,
    title: "с курой",
    description: "Филе из цыплят с трюфелями в бульоне.",
    signs: [
      { count: 100, description: "порций" },
      { count: 5, description: "мышей  в подарок" },
      { description: "Заказачик доволен" },
    ],
    weight: "5",
    inStock: false,
  },
];

export default productsData;
