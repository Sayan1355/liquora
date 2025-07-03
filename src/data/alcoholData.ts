
export interface AlcoholItem {
  id: number;
  name: string;
  category: string;
  price: number; // in INR
  alcoholPercentage: number;
  availability: 'In Stock' | 'Out of Stock' | 'Limited';
  ingredients: string[];
  image: string;
  description: string;
  origin?: string;
}

export const alcoholData: AlcoholItem[] = [
  // Beer
  {
    id: 1,
    name: "Kingfisher Premium",
    category: "Beer",
    price: 120,
    alcoholPercentage: 4.8,
    availability: "In Stock",
    ingredients: ["Water", "Barley Malt", "Rice", "Hops"],
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    description: "India's most popular premium lager beer",
    origin: "India"
  },
  {
    id: 2,
    name: "Budweiser",
    category: "Beer",
    price: 180,
    alcoholPercentage: 5.0,
    availability: "In Stock",
    ingredients: ["Water", "Rice", "Barley Malt", "Hops"],
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    description: "The King of Beers from America",
    origin: "USA"
  },
  {
    id: 3,
    name: "Heineken",
    category: "Beer",
    price: 200,
    alcoholPercentage: 5.0,
    availability: "In Stock",
    ingredients: ["Water", "Malted Barley", "Hops", "Yeast"],
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    description: "Premium Dutch lager with distinctive taste",
    origin: "Netherlands"
  },
  {
    id: 4,
    name: "Corona Extra",
    category: "Beer",
    price: 190,
    alcoholPercentage: 4.6,
    availability: "In Stock",
    ingredients: ["Water", "Barley Malt", "Corn", "Hops"],
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    description: "Mexican beer perfect with lime",
    origin: "Mexico"
  },
  {
    id: 5,
    name: "Carlsberg",
    category: "Beer",
    price: 150,
    alcoholPercentage: 5.0,
    availability: "In Stock",
    ingredients: ["Water", "Barley Malt", "Hops", "Yeast"],
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
    description: "Probably the best beer in the world",
    origin: "Denmark"
  },

  // Wine
  {
    id: 6,
    name: "Sula Sauvignon Blanc",
    category: "Wine",
    price: 1200,
    alcoholPercentage: 12.5,
    availability: "In Stock",
    ingredients: ["Sauvignon Blanc Grapes", "Sulfites"],
    image: "https://images.unsplash.com/photo-1506377872008-6645d6faa720?w=400",
    description: "Crisp Indian white wine from Nashik",
    origin: "India"
  },
  {
    id: 7,
    name: "Grover Zampa Cabernet Sauvignon",
    category: "Wine",
    price: 1800,
    alcoholPercentage: 13.5,
    availability: "In Stock",
    ingredients: ["Cabernet Sauvignon Grapes", "Sulfites"],
    image: "https://images.unsplash.com/photo-1506377872008-6645d6faa720?w=400",
    description: "Premium Indian red wine",
    origin: "India"
  },
  {
    id: 8,
    name: "York Arros",
    category: "Wine",
    price: 2500,
    alcoholPercentage: 14.0,
    availability: "Limited",
    ingredients: ["Shiraz Grapes", "Viognier Grapes", "Sulfites"],
    image: "https://images.unsplash.com/photo-1506377872008-6645d6faa720?w=400",
    description: "Premium Indian wine blend",
    origin: "India"
  },

  // Vodka
  {
    id: 9,
    name: "Absolut Vodka",
    category: "Vodka",
    price: 2200,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Winter Wheat", "Water"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400",
    description: "Swedish premium vodka",
    origin: "Sweden"
  },
  {
    id: 10,
    name: "Grey Goose",
    category: "Vodka",
    price: 4500,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["French Winter Wheat", "Spring Water"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400",
    description: "Ultra-premium French vodka",
    origin: "France"
  },
  {
    id: 11,
    name: "Smirnoff Red",
    category: "Vodka",
    price: 1800,
    alcoholPercentage: 37.5,
    availability: "In Stock",
    ingredients: ["Grain", "Water"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400",
    description: "Classic triple distilled vodka",
    origin: "UK"
  },

  // Whiskey
  {
    id: 12,
    name: "Royal Challenge",
    category: "Whiskey",
    price: 1200,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Grain Spirit", "Malt Spirit", "Caramel"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Premium Indian blended whisky",
    origin: "India"
  },
  {
    id: 13,
    name: "Johnnie Walker Black Label",
    category: "Whiskey",
    price: 3800,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Malt Whisky", "Grain Whisky", "Caramel"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Premium blended Scotch whisky",
    origin: "Scotland"
  },
  {
    id: 14,
    name: "Jack Daniel's Old No. 7",
    category: "Whiskey",
    price: 4200,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Corn", "Rye", "Malted Barley", "Charcoal"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Tennessee whiskey with charcoal mellowing",
    origin: "USA"
  },

  // Scotch
  {
    id: 15,
    name: "Glenfiddich 12 Year",
    category: "Scotch",
    price: 4800,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Malted Barley", "Yeast", "Water"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Single malt Scotch whisky",
    origin: "Scotland"
  },
  {
    id: 16,
    name: "Macallan 12 Double Cask",
    category: "Scotch",
    price: 8500,
    alcoholPercentage: 40.0,
    availability: "Limited",
    ingredients: ["Malted Barley", "Yeast", "Water"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Premium single malt aged in sherry casks",
    origin: "Scotland"
  },

  // Bourbon
  {
    id: 17,
    name: "Jim Beam White Label",
    category: "Bourbon",
    price: 2800,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Corn", "Rye", "Malted Barley"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Classic Kentucky straight bourbon",
    origin: "USA"
  },
  {
    id: 18,
    name: "Maker's Mark",
    category: "Bourbon",
    price: 4500,
    alcoholPercentage: 45.0,
    availability: "In Stock",
    ingredients: ["Corn", "Winter Wheat", "Malted Barley"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Handmade Kentucky bourbon",
    origin: "USA"
  },

  // Irish Whiskey
  {
    id: 19,
    name: "Jameson Irish Whiskey",
    category: "Irish Whiskey",
    price: 3200,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Malted Barley", "Grain Whiskey"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Triple distilled Irish whiskey",
    origin: "Ireland"
  },

  // Brandy
  {
    id: 20,
    name: "Mansion House Brandy",
    category: "Brandy",
    price: 800,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Grape Spirit", "Caramel", "Water"],
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400",
    description: "Indian grape brandy",
    origin: "India"
  },
  {
    id: 21,
    name: "Hennessy VS",
    category: "Brandy",
    price: 6500,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Ugni Blanc Grapes", "Folle Blanche", "Colombard"],
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400",
    description: "French cognac",
    origin: "France"
  },

  // Rum
  {
    id: 22,
    name: "Old Monk Rum",
    category: "Rum",
    price: 650,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Sugarcane Molasses", "Caramel"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    description: "India's iconic dark rum",
    origin: "India"
  },
  {
    id: 23,
    name: "Captain Morgan Spiced",
    category: "Rum",
    price: 2200,
    alcoholPercentage: 35.0,
    availability: "In Stock",
    ingredients: ["Caribbean Rum", "Spices", "Natural Flavors"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    description: "Spiced Caribbean rum",
    origin: "Caribbean"
  },
  {
    id: 24,
    name: "Bacardi White Rum",
    category: "Rum",
    price: 1800,
    alcoholPercentage: 37.5,
    availability: "In Stock",
    ingredients: ["Sugarcane Molasses", "Yeast", "Water"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    description: "Premium white rum",
    origin: "Puerto Rico"
  },

  // Gin
  {
    id: 25,
    name: "Bombay Sapphire",
    category: "Gin",
    price: 2800,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Juniper Berries", "Lemon Peel", "Coriander", "Angelica Root"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Premium London dry gin",
    origin: "England"
  },
  {
    id: 26,
    name: "Tanqueray London Dry Gin",
    category: "Gin",
    price: 2500,
    alcoholPercentage: 47.3,
    availability: "In Stock",
    ingredients: ["Juniper", "Coriander", "Angelica", "Liquorice"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Classic London dry gin",
    origin: "England"
  },

  // Tequila
  {
    id: 27,
    name: "Jose Cuervo Especial Gold",
    category: "Tequila",
    price: 3200,
    alcoholPercentage: 38.0,
    availability: "In Stock",
    ingredients: ["Blue Agave", "Caramel", "Natural Flavors"],
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400",
    description: "Gold tequila with smooth taste",
    origin: "Mexico"
  },
  {
    id: 28,
    name: "Patrón Silver",
    category: "Tequila",
    price: 8500,
    alcoholPercentage: 40.0,
    availability: "Limited",
    ingredients: ["Weber Blue Agave"],
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400",
    description: "Ultra-premium silver tequila",
    origin: "Mexico"
  },

  // Liqueurs
  {
    id: 29,
    name: "Bailey's Irish Cream",
    category: "Liqueurs",
    price: 2800,
    alcoholPercentage: 17.0,
    availability: "In Stock",
    ingredients: ["Irish Whiskey", "Cream", "Cocoa", "Vanilla"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    description: "Creamy Irish liqueur",
    origin: "Ireland"
  },
  {
    id: 30,
    name: "Kahlúa Coffee Liqueur",
    category: "Liqueurs",
    price: 2400,
    alcoholPercentage: 20.0,
    availability: "In Stock",
    ingredients: ["Arabica Coffee", "Rum", "Vanilla", "Caramel"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    description: "Mexican coffee liqueur",
    origin: "Mexico"
  },
  {
    id: 31,
    name: "Amaretto di Saronno",
    category: "Liqueurs",
    price: 3500,
    alcoholPercentage: 28.0,
    availability: "In Stock",
    ingredients: ["Apricot Kernel Oil", "Burnt Sugar", "Pure Alcohol"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    description: "Italian almond liqueur",
    origin: "Italy"
  },

  // Additional varieties for comprehensive catalog
  {
    id: 32,
    name: "Chivas Regal 12",
    category: "Scotch",
    price: 4200,
    alcoholPercentage: 40.0,
    availability: "In Stock",
    ingredients: ["Malt Whisky", "Grain Whisky"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Premium blended Scotch whisky",
    origin: "Scotland"
  },
  {
    id: 33,
    name: "Royal Stag",
    category: "Whiskey",
    price: 900,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Grain Spirit", "Malt Spirit", "Caramel"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Popular Indian whisky",
    origin: "India"
  },
  {
    id: 34,
    name: "Blenders Pride",
    category: "Whiskey",
    price: 1100,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Indian Grain Spirits", "Imported Scotch Malts", "Caramel"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "Premium Indian blended whisky",
    origin: "India"
  },
  {
    id: 35,
    name: "McDowell's No.1",
    category: "Whiskey",
    price: 800,
    alcoholPercentage: 42.8,
    availability: "In Stock",
    ingredients: ["Grain Spirit", "Malt Spirit", "Caramel"],
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400",
    description: "India's largest selling whisky",
    origin: "India"
  }
];

export const categories = [
  "All",
  "Beer",
  "Wine", 
  "Vodka",
  "Whiskey",
  "Scotch",
  "Bourbon", 
  "Irish Whiskey",
  "Brandy",
  "Rum",
  "Gin",
  "Tequila",
  "Liqueurs"
];
