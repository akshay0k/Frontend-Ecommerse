import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Sophisticated Striped Flutter Sleeve Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description:
      "This elegant blouse features a unique overlap collar design, adding a touch of sophistication...",
  },
  {
    id: 2,
    name: "Contemporary Elegance Overlap Collar Blouse",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This chic blouse combines contemporary style with classic flair. It showcases an overlapping collar...",
  },
  {
    id: 3,
    name: "Modern Feminine Striped Peplum Hem Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description:
      "This blouse is an epitome of modern femininity, featuring an overlapping collar for an added touch of elegance...",
  },
  {
    id: 4,
    name: "Charming Blend of Classic and Contemporary Blouse",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description:
      "This blouse presents a blend of classic charm and contemporary fashion. The unique overlap collar design adds a sophisticated edge...",
  },
  {
    id: 5,
    name: "Elegantly Designed Striped Peplum Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Elegantly designed, this blouse features a distinctive overlap collar, adding a sophisticated touch...",
  },
  {
    id: 6,
    name: "Sophisticated Blend of Style and Comfort Blouse",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This sophisticated blouse is a perfect blend of style and comfort. It features an elegant overlap collar...",
  },
  {
    id: 7,
    name: "Contemporary Elegance with Timeless Design Blouse",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This blouse showcases a blend of contemporary elegance and timeless design. The overlap collar adds a refined touch...",
  },
  {
    id: 8,
    name: "Graceful Modern Aesthetic Striped Blouse",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This blouse exudes a graceful, modern aesthetic. It features a stylish overlap collar...",
  },
  {
    id: 9,
    name: "Functional and Fashionable Striped Blouse",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This blouse combines functionality with fashion. The overlap collar gives it a unique edge...",
  },
  {
    id: 10,
    name: "Testament to Classic Style with Modern Twist Blouse",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This blouse is a testament to classic style with a modern twist. The overlap collar offers a touch of sophistication...",
  },
  {
    id: 11,
    name: "Elegantly Designed Striped Blouse",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Elegantly designed, this blouse features an overlap collar, merging classic style with contemporary fashion...",
  },
  {
    id: 12,
    name: "Elegance and Practicality Striped Blouse",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This blouse combines elegance and practicality. The overlap collar adds a sophisticated flair...",
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This men's bomber jacket features a sleek green solid design with a full-zip closure...",
  },
  {
    id: 14,
    name: "Stylish Green Solid Zippered Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This bomber jacket for men is styled in a striking green hue, featuring a zippered front for ease of wear...",
  },
  {
    id: 15,
    name: "Contemporary Slim Fit Black Solid Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This men's bomber jacket showcases a contemporary slim fit and a classic black solid color...",
  },
  {
    id: 16,
    name: "Classic Style Navy Blue Solid Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Stay in classic style with this navy blue solid bomber jacket for men, featuring a timeless design...",
  },
  {
    id: 17,
    name: "Elevate Your Style Slim Fit Grey Solid Bomber Jacket",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Elevate your style with this slim fit grey solid bomber jacket for men, perfect for a casual and trendy look...",
  },
  {
    id: 18,
    name: "Fashionable and Functional Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This men's bomber jacket strikes a perfect balance between fashion and functionality, featuring a slim fit design...",
  },
  {
    id: 19,
    name: "Urban Style Slim Fit Red Solid Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Step into urban style with this slim fit red solid bomber jacket for men, designed to make a statement...",
  },
  {
    id: 20,
    name: "Sleek and Stylish Slim Fit Brown Solid Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This men's bomber jacket is sleek and stylish, featuring a slim fit design and a rich brown solid color...",
  },
  {
    id: 21,
    name: "Versatile and Trendy Slim Fit Beige Solid Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Stay versatile and trendy with this slim fit beige solid bomber jacket for men, perfect for various occasions...",
  },
  {
    id: 22,
    name: "Classic Black Solid Full-Zip Bomber Jacket for Men",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This classic black solid full-zip bomber jacket for men is a wardrobe essential, offering timeless style...",
  },
  {
    id: 23,
    name: "Casual and Comfortable Slim Fit Khaki Solid Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Achieve a casual and comfortable look with this slim fit khaki solid bomber jacket for men...",
  },
  {
    id: 24,
    name: "Modern and Trendy Slim Fit White Solid Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Step into modern and trendy style with this slim fit white solid bomber jacket for men, perfect for a fashion-forward look...",
  },
  {
    id: 25,
    name: "Cool and Casual Slim Fit Olive Green Solid Bomber Jacket",
    category: "men",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This cool and casual slim fit olive green solid bomber jacket for men is a must-have for a laid-back yet stylish vibe...",
  },
  {
    id: 26,
    name: "Sleek and Edgy Slim Fit Blue Solid Bomber Jacket for Men",
    category: "men",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Make a statement with this sleek and edgy slim fit blue solid bomber jacket for men, perfect for a bold and fashionable look...",
  },
  {
    id: 27,
    name: "Timeless Style Slim Fit Burgundy Solid Bomber Jacket for Men",
    category: "men",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Achieve timeless style with this slim fit burgundy solid bomber jacket for men, a versatile piece for various occasions...",
  },
  {
    id: 28,
    name: "Casual Charm Slim Fit Light Grey Solid Bomber Jacket for Men",
    category: "men",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Add casual charm to your look with this slim fit light grey solid bomber jacket for men, perfect for a relaxed yet stylish appearance...",
  },
  {
    id: 29,
    name: "Bold and Fashionable Slim Fit Yellow Solid Bomber Jacket for Men",
    category: "men",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Make a bold statement with this fashionable slim fit yellow solid bomber jacket for men, a standout piece for your wardrobe...",
  },
  {
    id: 30,
    name: "Modern Urban Style Slim Fit Pink Solid Bomber Jacket for Men",
    category: "men",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "Embrace modern urban style with this slim fit pink solid bomber jacket for men, adding a trendy touch to your look...",
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },

  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    description:
      "This boys' hooded sweatshirt in a vibrant orange colourblocked design offers a fun and stylish look. Perfect for active kids, it combines comfort and durability. The hoodie provides warmth and practicality, making it an excellent choice for everyday wear. Its playful design and durable construction make it ideal for both school and play, ensuring it's a favorite in any young wardrobe.",
  },
];

export default all_product;