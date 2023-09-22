const initialState = {
  categories: [
    { id: 'bed', name: 'Bed', translationKey: 'furniture.bed' },
    { id: 'chair', name: 'Chair', translationKey: 'furniture.chair' },
    { id: 'dining', name: 'Dining', translationKey: 'furniture.dining' },
    { id: 'sofa', name: 'Sofa', translationKey: 'furniture.sofa' },
    { id: 'table', name: 'Table', translationKey: 'furniture.table' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: './images/furniture/bed/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 4,
      oldPrice: 55,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: './images/furniture/bed/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: './images/furniture/bed/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      oldPrice: 67,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: './images/furniture/bed/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 3,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: './images/furniture/bed/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 5,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: './images/furniture/bed/6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: './images/furniture/bed/7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 55,
      favorite: false,
      compare: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: './images/furniture/bed/8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: './images/furniture/bed/9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 67,
      favorite: false,
      compare: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: './images/furniture/bed/10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: './images/furniture/bed/11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: './images/furniture/bed/12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: './images/furniture/bed/13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: './images/furniture/bed/14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: './images/furniture/bed/15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      image: './images/furniture/chair/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      oldPrice: 45,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'chair',
      image: './images/furniture/chair/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'chair',
      image: './images/furniture/chair/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'chair',
      image: './images/furniture/chair/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'chair',
      image: './images/furniture/chair/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 55,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'chair',
      image: './images/furniture/chair/6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 45,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'chair',
      image: './images/furniture/chair/7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'chair',
      image: './images/furniture/chair/8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: './images/furniture/chair/9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      image: './images/furniture/chair/10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      image: './images/furniture/chair/11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 45,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      image: './images/furniture/chair/12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      image: './images/furniture/chair/13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      image: './images/furniture/chair/14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      image: './images/furniture/chair/15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'dining',
      image: './images/furniture/dining/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'dining',
      image: './images/furniture/dining/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'dining',
      image: './images/furniture/dining/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'dining',
      image: './images/furniture/dining/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'dining',
      image: './images/furniture/dining/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'dining',
      image: './images/furniture/dining/6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'dining',
      image: './images/furniture/dining/7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'dining',
      image: './images/furniture/dining/8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'dining',
      image: './images/furniture/dining/9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'dining',
      image: './images/furniture/dining/10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'dining',
      image: './images/furniture/dining/11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'dining',
      image: './images/furniture/dining/12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'dining',
      image: './images/furniture/dining/13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'dining',
      image: './images/furniture/dining/14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'dining',
      image: './images/furniture/dining/15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'sofa',
      image: './images/furniture/sofa/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'sofa',
      image: './images/furniture/sofa/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'sofa',
      image: './images/furniture/sofa/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'sofa',
      image: './images/furniture/sofa/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'sofa',
      image: './images/furniture/sofa/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'sofa',
      image: './images/furniture/sofa/6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'sofa',
      image: './images/furniture/sofa/7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'sofa',
      image: './images/furniture/sofa/8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'sofa',
      image: './images/furniture/sofa/9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'sofa',
      image: './images/furniture/sofa/10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'sofa',
      image: './images/furniture/sofa/11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'sofa',
      image: './images/furniture/sofa/12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'sofa',
      image: './images/furniture/sofa/13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'sofa',
      image: './images/furniture/sofa/14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'sofa',
      image: './images/furniture/sofa/15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-61',
      name: 'Aenean Ru Bristique 61',
      category: 'table',
      image: './images/furniture/table/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-62',
      name: 'Aenean Ru Bristique 62',
      category: 'table',
      image: './images/furniture/table/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-63',
      name: 'Aenean Ru Bristique 63',
      category: 'table',
      image: './images/furniture/table/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-64',
      name: 'Aenean Ru Bristique 64',
      category: 'table',
      image: './images/furniture/table/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      userStars: 0,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-65',
      name: 'Aenean Ru Bristique 65',
      category: 'table',
      image: './images/furniture/table/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-66',
      name: 'Aenean Ru Bristique 66',
      category: 'table',
      image: './images/furniture/table/6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-67',
      name: 'Aenean Ru Bristique 67',
      category: 'table',
      image: './images/furniture/table/7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-68',
      name: 'Aenean Ru Bristique 68',
      category: 'table',
      image: './images/furniture/table/8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-69',
      name: 'Aenean Ru Bristique 69',
      category: 'table',
      image: './images/furniture/table/9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-70',
      name: 'Aenean Ru Bristique 70',
      category: 'table',
      image: './images/furniture/table/10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-71',
      name: 'Aenean Ru Bristique 71',
      category: 'table',
      image: './images/furniture/table/11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'table',
      image: './images/furniture/table/12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-73',
      name: 'Aenean Ru Bristique 73',
      category: 'table',
      image: './images/furniture/table/13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-74',
      name: 'Aenean Ru Bristique 74',
      category: 'table',
      image: './images/furniture/table/14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-75',
      name: 'Aenean Ru Bristique 75',
      category: 'table',
      image: './images/furniture/table/15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      promoted: false,
    },
  ],
  cart: {
    products: [],
  },
  brands: [
    { id: 1, image: './images/brand/1.jpg' },
    { id: 2, image: './images/brand/2.jpg' },
    { id: 3, image: './images/brand/3.jpg' },
    { id: 4, image: './images/brand/4.jpg' },
    { id: 5, image: './images/brand/5.jpg' },
    { id: 6, image: './images/brand/6.jpg' },
    { id: 7, image: './images/brand/6.jpg' },
    { id: 8, image: './images/brand/5.jpg' },
    { id: 9, image: './images/brand/4.jpg' },
    { id: 10, image: './images/brand/3.jpg' },
    { id: 11, image: './images/brand/2.jpg' },
    { id: 12, image: './images/brand/1.jpg' },
  ],
  viewport: {
    mode: '',
  },
  comments: [
    {
      id: '1',
      name: 'John Smith',
      category: 'Furniture client',
      image: './images/feedback/1.jpg',
      comment:
        'Consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
    {
      id: '2',
      name: 'Joh Doe',
      category: 'Furniture client',
      image: './images/feedback/2.jpg',
      comment:
        'Curabitur eget felis at erat sagittis commodo quis vel odio. Proin ultrices tellus non mi vehicula pretium. Aliquam erat volutpat. Pellentesque egestas est ac porta efficitur. Duis vel luctus magna.',
    },
    {
      id: '3',
      name: 'Deer Deer',
      category: 'Furniture client',
      image: './images/feedback/3.jpg',
      comment:
        'Consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    },
  ],
};

export default initialState;
