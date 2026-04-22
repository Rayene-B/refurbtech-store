window.RefurbCatalog = [
  { name: 'iphone 11', category: 'phones', brand: 'iphone', image: 'iphone 11.png', page: 'phones.html' },
  { name: 'samsung s22 ultra', category: 'phones', brand: 'samsung', image: 'samsung s22 ultra.png', page: 'phones.html' },
  { name: 'iphone 12', category: 'phones', brand: 'iphone', image: 'iphone 12.png', page: 'phones.html' },
  { name: 'samsung s23', category: 'phones', brand: 'samsung', image: 'samsung s23.png', page: 'phones.html' },
  { name: 'iphone 15', category: 'phones', brand: 'iphone', image: 'iphone 15.png', page: 'phones.html' },
  { name: 'samsung s22', category: 'phones', brand: 'samsung', image: 'samsung S22.png', page: 'phones.html' },
  { name: 'iphone 16', category: 'phones', brand: 'iphone', image: 'iphone 16.png', page: 'phones.html' },
  { name: 'samsung s24', category: 'phones', brand: 'samsung', image: 'samsung s24.png', page: 'phones.html' },
  { name: 'iphone 14', category: 'phones', brand: 'iphone', image: 'iphone 14.png', page: 'phones.html' },
  { name: 'samsung s24 ultra', category: 'phones', brand: 'samsung', image: 'samsung s24 ultra.png', page: 'phones.html' },
  { name: 's-l640', category: 'phones', brand: 'iphone', image: 's-l640.png', page: 'phones.html' },
  { name: 'iphone 6s', category: 'phones', brand: 'iphone', image: 'Iphone 6s', page: 'phones.html' },
  { name: 'Acer Aspire 5', category: 'laptops', brand: 'acer', image: 'Acer Aspire 5.png', page: 'laptops.html' },
  { name: 'ASUS Vivobook 15', category: 'laptops', brand: 'asus', image: 'ASUS Vivobook 15.png', page: 'laptops.html' },
  { name: 'Lenovo IdeaPad Slim 5', category: 'laptops', brand: 'lenovo', image: 'Lenovo IdeaPad Slim 5.png', page: 'laptops.html' },
  { name: 'Lenovo ThinkPad X1 Gen 9', category: 'laptops', brand: 'lenovo', image: 'Lenovo ThinkPad X1 Gen 9.png', page: 'laptops.html' },
  { name: 'Macbook AIR M1', category: 'laptops', brand: 'apple', image: 'Macbook AIR M1.png', page: 'laptops.html' },
  { name: 'Macbook AIR M4', category: 'laptops', brand: 'apple', image: 'Macbook AIR M4.png', page: 'laptops.html' },
  { name: 'Macbook NEO', category: 'laptops', brand: 'apple', image: 'Macbook NEO.png', page: 'laptops.html' },
  { name: 'Macbook PRO M4', category: 'laptops', brand: 'apple', image: 'Macbook PRO M4.png', page: 'laptops.html' },
  { name: 'nintendo switch LITE', category: 'consoles', brand: 'nintendo', image: 'nintendo switch LITE.png', page: 'consoles.html' },
  { name: 'nintendo switch OLED', category: 'consoles', brand: 'nintendo', image: 'nintendo switch OLED.png', page: 'consoles.html' },
  { name: 'nintendo switch TWO', category: 'consoles', brand: 'nintendo', image: 'nintendo switch TWO.png', page: 'consoles.html' },
  { name: 'Playstation 4', category: 'consoles', brand: 'sony', image: 'Playstation 4.png', page: 'consoles.html' },
  { name: 'Playstation 5', category: 'consoles', brand: 'sony', image: 'Playstation 5.png', page: 'consoles.html' },
  { name: 'PS Vita S2000', category: 'consoles', brand: 'sony', image: 'PS Vita S2000.png', page: 'consoles.html' },
  { name: 'PS Vita Slim', category: 'consoles', brand: 'sony', image: 'PS Vita Slim.png', page: 'consoles.html' },
  { name: 'Xbox 360S SLIM', category: 'consoles', brand: 'xbox', image: 'Xbox 360S SLIM.png', page: 'consoles.html' },
  { name: 'Xbox series S', category: 'consoles', brand: 'xbox', image: 'Xbox series S.png', page: 'consoles.html' },
  { name: 'Xbox series X', category: 'consoles', brand: 'xbox', image: 'Xbox series X.png', page: 'consoles.html' }
];

window.searchRefurbCatalog = (query) => {
  const normalized = String(query || '').trim().toLowerCase();
  if (!normalized) return [];
  return window.RefurbCatalog
    .map((item) => {
      const haystack = `${item.name} ${item.category} ${item.brand}`.toLowerCase();
      const score = haystack.includes(normalized) ? 2 : normalized.split(/\s+/).filter((word) => haystack.includes(word)).length;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 8);
};
