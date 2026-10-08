"use strict";

const perfumesList = [
  {
    "ref": "N°001",
    "name": "Yara By Lataffa",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p2_r0_c0.jpg"
  },
  {
    "ref": "N°002",
    "name": "Asad By Lataffa",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p2_r0_c1.jpg"
  },
  {
    "ref": "N°003",
    "name": "Haya Lataffa",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p2_r0_c2.jpg"
  },
  {
    "ref": "N°004",
    "name": "Royal Bleu Orientica",
    "brand": "Orientica",
    "size": "80ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p2_r1_c0.jpg"
  },
  {
    "ref": "N°005",
    "name": "Amber Rouge Orientica",
    "brand": "Orientica",
    "size": "80ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p2_r1_c1.jpg"
  },
  {
    "ref": "N°006",
    "name": "Royal Amber Orientica",
    "brand": "Orientica",
    "size": "80ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p2_r1_c2.jpg"
  },
  {
    "ref": "N°007",
    "name": "Club de Nuit Intense",
    "brand": "Lattafa",
    "size": "105ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p2_r2_c0.jpg"
  },
  {
    "ref": "N°008",
    "name": "Afnan 9PM",
    "brand": "Afnan",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p2_r2_c1.jpg"
  },
  {
    "ref": "N°009",
    "name": "Afnan 9AM Dive",
    "brand": "Afnan",
    "size": "80ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p2_r2_c2.jpg"
  },
  {
    "ref": "N°010",
    "name": "Ameerat Al Arab Prive Rose",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p3_r0_c0.jpg"
  },
  {
    "ref": "N°011",
    "name": "Fakhar Lattafa",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p3_r0_c1.jpg"
  },
  {
    "ref": "N°012",
    "name": "Giorgio Armani My Way",
    "brand": "Armani",
    "size": "90ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p3_r0_c2.jpg"
  },
  {
    "ref": "N°013",
    "name": "Silver Mountain Water Creed",
    "brand": "Creed",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p3_r1_c0.jpg"
  },
  {
    "ref": "N°014",
    "name": "Creed Aventus",
    "brand": "Creed",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p3_r1_c1.jpg"
  },
  {
    "ref": "N°015",
    "name": "Valentino Donna Born in Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p3_r1_c2.jpg"
  },
  {
    "ref": "N°016",
    "name": "Valentino Uomo Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p3_r2_c0.jpg"
  },
  {
    "ref": "N°017",
    "name": "Valentino Donna Born in Roma Rosa",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p3_r2_c1.jpg"
  },
  {
    "ref": "N°018",
    "name": "Valentino Donna Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p3_r2_c2.jpg"
  },
  {
    "ref": "N°018",
    "name": "Valentino Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p4_r0_c0.jpg"
  },
  {
    "ref": "N°019",
    "name": "Valentino Uomo Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p4_r0_c1.jpg"
  },
  {
    "ref": "N°020",
    "name": "Valentino Uomo Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p4_r0_c2.jpg"
  },
  {
    "ref": "N°020",
    "name": "Valentino Uomo Born in",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p4_r1_c0.jpg"
  },
  {
    "ref": "N°021",
    "name": "Valentino Uomo",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p4_r1_c1.jpg"
  },
  {
    "ref": "N°022",
    "name": "Valentino Born In Roma",
    "brand": "Valentino",
    "size": "100ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p4_r1_c2.jpg"
  },
  {
    "ref": "N°023",
    "name": "Coco Chanel Mademoiselle Coco Chanel Mademoiselle Intense",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p4_r2_c0.jpg"
  },
  {
    "ref": "N°024",
    "name": "N5 Chanel Paris",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p4_r2_c1.jpg"
  },
  {
    "ref": "N°025",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p4_r2_c2.jpg"
  },
  {
    "ref": "N°026",
    "name": "Coco Noir Chanel",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p5_r0_c0.jpg"
  },
  {
    "ref": "N°027",
    "name": "Gabrielle Chanel",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p5_r0_c1.jpg"
  },
  {
    "ref": "N°028",
    "name": "Chance Chanel",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p5_r0_c2.jpg"
  },
  {
    "ref": "N°029",
    "name": "Chance Eau Tendre Chanel",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p5_r1_c0.jpg"
  },
  {
    "ref": "N°030",
    "name": "Bleu de Chanel",
    "brand": "Chanel",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p5_r1_c1.jpg"
  },
  {
    "ref": "N°031",
    "name": "Miss Dior Blooming Bouquet",
    "brand": "Dior",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p5_r1_c2.jpg"
  },
  {
    "ref": "N°032",
    "name": "Rose Kabuki Dior",
    "brand": "Dior",
    "size": "125ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p5_r2_c0.jpg"
  },
  {
    "ref": "N°033",
    "name": "Lucky Christian Dior",
    "brand": "Dior",
    "size": "125ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p5_r2_c1.jpg"
  },
  {
    "ref": "N°034",
    "name": "J'adore Dior",
    "brand": "Dior",
    "size": "100ML EDP",
    "price": "25",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p5_r2_c2.jpg"
  },
  {
    "ref": "N°035",
    "name": "Dior Addict / J'adore",
    "brand": "Dior",
    "size": "100ML EDP",
    "price": "23",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p6_r0_c0.jpg"
  },
  {
    "ref": "N°036",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p6_r0_c1.jpg"
  },
  {
    "ref": "N°037",
    "name": "Mon Paris Intensément",
    "brand": "Lattafa",
    "size": "90ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p6_r0_c2.jpg"
  },
  {
    "ref": "N°038",
    "name": "Mon Paris (Yves Saint Laurent)",
    "brand": "YSL",
    "size": "90ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p6_r1_c0.jpg"
  },
  {
    "ref": "N°039",
    "name": "Libre Yves Saint Laurent",
    "brand": "YSL",
    "size": "90ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p6_r1_c1.jpg"
  },
  {
    "ref": "N°040",
    "name": "Libre L’ Absolu Platine",
    "brand": "Lattafa",
    "size": "90ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p6_r1_c2.jpg"
  },
  {
    "ref": "N°041",
    "name": "Libre L'Absolu Platine  L'Iconique (Yves Saint Laurent)",
    "brand": "YSL",
    "size": "90ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p6_r2_c0.jpg"
  },
  {
    "ref": "N°042",
    "name": "Flora Gorgeous Gardenia Gucci",
    "brand": "Gucci",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p6_r2_c1.jpg"
  },
  {
    "ref": "N°043",
    "name": "Baccarat Rouge 540 (Maison",
    "brand": "Maison FK",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p6_r2_c2.jpg"
  },
  {
    "ref": "N°044",
    "name": "J'adore Eau de Parfum Dior",
    "brand": "Dior",
    "size": "100ML EDP",
    "price": "25",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r0_c0.jpg"
  },
  {
    "ref": "N°047",
    "name": "N°045 $25",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r0_c1.jpg"
  },
  {
    "ref": "N°048",
    "name": "N°046 $20",
    "brand": "Lattafa",
    "size": "90ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r0_c2.jpg"
  },
  {
    "ref": "N°047",
    "name": "Rose of No Man's Land (Byredo)",
    "brand": "Byredo",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r1_c0.jpg"
  },
  {
    "ref": "N°048",
    "name": "Creed Aventus Wooden Box",
    "brand": "Creed",
    "size": "75ML EDP",
    "price": "22",
    "type": "disenador",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p7_r1_c1.jpg"
  },
  {
    "ref": "N°049",
    "name": "Mon Paris (Yves Saint Laurent)",
    "brand": "YSL",
    "size": "90ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p7_r1_c2.jpg"
  },
  {
    "ref": "N°050",
    "name": "Dior Pink Bonne Etoile French Avenue Vulcan Baie",
    "brand": "French Avenue",
    "size": "90ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r2_c0.jpg"
  },
  {
    "ref": "N°051",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r2_c1.jpg"
  },
  {
    "ref": "N°052",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p7_r2_c2.jpg"
  },
  {
    "ref": "N°053",
    "name": "Lataffa Yara Tous",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p8_r0_c0.jpg"
  },
  {
    "ref": "N°054",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p8_r0_c1.jpg"
  },
  {
    "ref": "N°055",
    "name": "Lataffa Khamrah Asad Bourbon",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p8_r0_c2.jpg"
  },
  {
    "ref": "N°056",
    "name": "Lataffa Yara Light Pink Lataffa Yara Moi",
    "brand": "Lattafa",
    "size": "50ML EDP",
    "price": "10",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p8_r1_c0.jpg"
  },
  {
    "ref": "N°057",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p8_r1_c1.jpg"
  },
  {
    "ref": "N°058",
    "name": "Lataffa Yara Candy",
    "brand": "Lattafa",
    "size": "50ML EDP",
    "price": "10",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p8_r1_c2.jpg"
  },
  {
    "ref": "N°059",
    "name": "Lataffa Hayaati Opulent Oud Lataffa Hayaati Al Maleky",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p8_r2_c0.jpg"
  },
  {
    "ref": "N°060",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p8_r2_c1.jpg"
  },
  {
    "ref": "N°061",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p8_r2_c2.jpg"
  },
  {
    "ref": "N°062",
    "name": "Lataffa Hayaati Gold Elixir",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p9_r0_c0.jpg"
  },
  {
    "ref": "N°063",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r0_c1.jpg"
  },
  {
    "ref": "N°064",
    "name": "Rasasi Hawas Silver Gray For Him",
    "brand": "Rasasi",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r0_c2.jpg"
  },
  {
    "ref": "N°065",
    "name": "Rasasi Hawas Fire For Him Rasasi Hawas Black For Him",
    "brand": "Rasasi",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r1_c0.jpg"
  },
  {
    "ref": "N°066",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r1_c1.jpg"
  },
  {
    "ref": "N°067",
    "name": "Lattafa khamrah & Khamrah",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r1_c2.jpg"
  },
  {
    "ref": "N°068",
    "name": "Lattafa khamrah & Khamrah",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r2_c0.jpg"
  },
  {
    "ref": "N°071",
    "name": "Armaf Odyssey Mandarin Sky",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r2_c1.jpg"
  },
  {
    "ref": "N°070",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p9_r2_c2.jpg"
  },
  {
    "ref": "N°071",
    "name": "Armaf Odyssey Mega",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r0_c0.jpg"
  },
  {
    "ref": "N°072",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r0_c1.jpg"
  },
  {
    "ref": "N°073",
    "name": "Armaf Odyssey Tyrant",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r0_c2.jpg"
  },
  {
    "ref": "N°074",
    "name": "Armaf Odyssey Wild One Armaf Odyssey White Edition",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r1_c0.jpg"
  },
  {
    "ref": "N°075",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r1_c1.jpg"
  },
  {
    "ref": "N°076",
    "name": "Armaf Odyssey Aoud",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r1_c2.jpg"
  },
  {
    "ref": "N°077",
    "name": "Armaf Odyssey Homme",
    "brand": "Armaf",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r2_c0.jpg"
  },
  {
    "ref": "N°080",
    "name": "Lataffa Ekaan",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r2_c1.jpg"
  },
  {
    "ref": "N°079",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p10_r2_c2.jpg"
  },
  {
    "ref": "N°080",
    "name": "Lataffa His Confession Black",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "22",
    "type": "arabe",
    "gender": "caballero",
    "notes": "Pimienta negra, Maderas nobles, Cítrico fresco, Ámbar",
    "image": "assets/perfumes_precise/p11_r0_c0.jpg"
  },
  {
    "ref": "N°081",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p11_r0_c1.jpg"
  },
  {
    "ref": "N°082",
    "name": "Perfume Colección",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "20",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p11_r0_c2.jpg"
  },
  {
    "ref": "N°083",
    "name": "Lataffa Fakhar & Opulent",
    "brand": "Lattafa",
    "size": "100ML EDP",
    "price": "25",
    "type": "arabe",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p11_r1_c0.jpg"
  },
  {
    "ref": "N°084",
    "name": "Dior Savage Parfum",
    "brand": "Dior",
    "size": "100ML EDP",
    "price": "25",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p11_r1_c1.jpg"
  },
  {
    "ref": "N°085",
    "name": "Gucci Bamboo",
    "brand": "Gucci",
    "size": "75ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p11_r1_c2.jpg"
  },
  {
    "ref": "N°086",
    "name": "Lancome Miracle Paris",
    "brand": "Lancôme",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "dama",
    "notes": "Vainilla, Flores blancas, Frutal dulce, Almizcle",
    "image": "assets/perfumes_precise/p11_r2_c0.jpg"
  },
  {
    "ref": "N°089",
    "name": "Si Passione Giorgio Armani",
    "brand": "Armani",
    "size": "100ML EDP",
    "price": "20",
    "type": "disenador",
    "gender": "unisex",
    "notes": "Especiado cálido, Ámbar gris, Dulce gourmet",
    "image": "assets/perfumes_precise/p11_r2_c1.jpg"
  }
];

let activeCategory = "all";
let activePrice = "all";
let searchQuery = "";

function render() {
  const grid = document.getElementById("perfumeGrid");
  const countEl = document.getElementById("perfumeCount");
  if (!grid) return;

  const filtered = perfumesList.filter(item => {
    let matchCat = activeCategory === "all";
    if (activeCategory === "arabe") matchCat = item.type === "arabe";
    else if (activeCategory === "disenador") matchCat = item.type === "disenador";
    else if (activeCategory === "dama") matchCat = item.gender === "dama" || item.gender === "unisex";
    else if (activeCategory === "caballero") matchCat = item.gender === "caballero" || item.gender === "unisex";

    const matchPrice = activePrice === "all" || item.price === activePrice;

    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.ref.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      (item.notes && item.notes.toLowerCase().includes(q));

    return matchCat && matchPrice && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} perfumes encontrados`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="store-empty">
        <p style="font-size:32px;margin-bottom:8px;">🌸</p>
        <h3>No se encontraron fragancias</h3>
        <p style="margin-top:6px;font-size:13px;">Intenta con otro término o limpia los filtros.</p>
      </div>
    `;
    return;
  }

  const currentCart = typeof Cart !== "undefined" ? Cart.getItems() : [];

  grid.innerHTML = filtered.map(p => {
    const inCartItem = currentCart.find(i => i.ref === p.ref);
    const inCartQty = inCartItem ? inCartItem.qty : 0;
    const waText = encodeURIComponent(`Hola LCD Store 👋 Me interesa el perfume: ${p.ref} - ${p.name} (${p.size}, $${p.price} BCV). ¿Lo tienen disponible?`);
    const waUrl = `https://wa.me/${STORE_CONFIG.phone}?text=${waText}`;

    return `
      <div class="product-card">
        <div class="card-img-wrapper">
          <span class="card-ref-badge">${p.ref}</span>
          <span class="card-brand-badge">${p.brand}</span>
          <img src="./${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='./logo.png';this.style.opacity='0.5';">
        </div>
        <div class="card-body">
          <div>
            <h3 class="card-title">${p.name}</h3>
            <span class="card-size">${p.size} · Calidad AAA</span>
          </div>

          ${p.notes ? `<div class="card-notes">💎 <b>Notas:</b> ${p.notes}</div>` : ''}

          <div class="card-footer">
            <div class="card-price-row">
              <span class="price-val">$${p.price}<small>BCV</small></span>
              <span style="font-size:11px;color:var(--text-muted);">Pago Móvil / Zelle</span>
            </div>
            
            <div class="card-btn-group">
              <a class="btn-order-wa" href="${waUrl}" target="_blank" rel="noopener">
                ⚡ Pedir Directo
              </a>
              <button class="btn-add-cart ${inCartQty > 0 ? 'added' : ''}" onclick="addPerfumeToCart('${p.ref}')">
                ${inCartQty > 0 ? `✓ En carrito (${inCartQty})` : '+ Agregar a mi pedido'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.addPerfumeToCart = function(ref) {
  const product = perfumesList.find(p => p.ref === ref);
  if (product && typeof Cart !== "undefined") {
    Cart.addItem(product);
  }
};

window.refreshCardButtons = function() {
  render();
};

document.addEventListener("DOMContentLoaded", () => {
  render();

  const searchInput = document.getElementById("perfumeSearch");
  const clearBtn = document.getElementById("clearPerfumeSearch");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? "grid" : "none";
      render();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearBtn.style.display = "none";
        render();
        searchInput.focus();
      }
    });
  }

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      render();
    });
  });

  document.querySelectorAll(".price-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".price-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activePrice = chip.dataset.price;
      render();
    });
  });
});
