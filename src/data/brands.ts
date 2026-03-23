export interface Brand {
  name: string;
  slug: string;
  category: Category;
  website: string;
  logo: string;
  images: string[];
  description: string;
  priceRange: string;
  priceUnit: string;
}

export type Category =
  | "plocice"
  | "sanitarije"
  | "namjestaj"
  | "kade-i-tus-kabine";

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  heroImage: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "plocice",
    name: "Pločice",
    description:
      "Širok izbor keramičkih pločica vodećih talijanskih proizvođača za svaki prostor i stil.",
    heroImage: "/images/placeholder-tiles.jpg",
  },
  {
    slug: "sanitarije",
    name: "Sanitarije",
    description:
      "Sanitarna oprema, slavine i kupaonska galanterija vrhunske kvalitete.",
    heroImage: "/images/placeholder-sanitary.jpg",
  },
  {
    slug: "namjestaj",
    name: "Namještaj",
    description:
      "Kupaonski namještaj koji spaja funkcionalnost i eleganciju talijanskog dizajna.",
    heroImage: "/images/placeholder-furniture.jpg",
  },
  {
    slug: "kade-i-tus-kabine",
    name: "Kade i tuš-kabine",
    description:
      "Kade, tuš-kabine i wellness rješenja za vašu savršenu kupaonicu.",
    heroImage: "/images/placeholder-bathtubs.jpg",
  },
];

export const brands: Brand[] = [
  // === PLOČICE ===
  {
    name: "Naxos Ceramica",
    slug: "naxos-ceramica",
    category: "plocice",
    website: "https://www.naxos-ceramica.it/en/",
    logo: "/images/logos/naxos.png",
    images: [
      "https://www.naxos-ceramica.it/wp-content/uploads/2025/10/Amb_Apulia-Dots-Alpes-1.jpg",
      "https://www.naxos-ceramica.it/wp-content/uploads/2025/09/white.jpg",
      "https://www.naxos-ceramica.it/wp-content/uploads/2025/02/Amb_Brick-Sabbia_Rosso-Veneziano.jpg",
      "https://www.naxos-ceramica.it/wp-content/uploads/2024/12/Slide_Evidenza.jpg",
      "https://www.naxos-ceramica.it/wp-content/uploads/2024/12/Immagine-Prodotto.jpg",
      "https://www.naxos-ceramica.it/wp-content/uploads/2024/09/Amb_Portofino-White_Portofino-Black_Floralia_Brick-Portofino-Black.jpg",
    ],
    description:
      "Talijanski proizvođač keramičkih pločica s bogatom tradicijom inovativnog dizajna i vrhunske kvalitete.",
    priceRange: "25 – 65",
    priceUnit: "€/m²",
  },
  {
    name: "Century Ceramica",
    slug: "century-ceramica",
    category: "plocice",
    website: "https://www.century-ceramica.it/en/",
    logo: "/images/logos/century.png",
    images: [
      "https://www.century-ceramica.it/wp-content/uploads/2025/09/Amb_Mineralis-60x120-120x120-2.jpg",
      "https://www.century-ceramica.it/wp-content/uploads/2025/02/Immagine-prodotto-1.jpg",
      "https://www.century-ceramica.it/wp-content/uploads/2024/09/Amb_Element_Active.jpg",
      "https://www.century-ceramica.it/wp-content/uploads/2024/09/Amb_Majesty_Violin.jpg",
      "https://www.century-ceramica.it/wp-content/uploads/2025/02/Amb_Mars_pools-1-1-600x600.jpg",
      "https://www.century-ceramica.it/wp-content/uploads/2024/05/Amb_Ethereal-600x600.jpg",
    ],
    description:
      "Visokokvalitetni porculanski gres s efektima kamena, mramora i inovativnim završnim obradama.",
  
    priceRange: "30 – 75",
    priceUnit: "€/m²",},
  {
    name: "Monocibec",
    slug: "monocibec",
    category: "plocice",
    website: "https://www.monocibec.it/en/",
    logo: "https://prod-stor.mkintra.confindustriaceramica.it/ccintranet-production-public/media/company_logos/5539a571-1b1b-4e05-b387-a1cd414143b8_MONOCIBEC.jpg",
    images: [
      "https://www.monocibec.it/wp-content/uploads/2026/01/FINCIBEC_monocibec_thymos_Tellur-60x120_ESTERNO-PISCINA.jpg",
      "https://www.monocibec.it/wp-content/uploads/2025/09/Amb_Symbol-60x120-Decoro-Glyph-60x120-1.jpg",
      "https://www.monocibec.it/wp-content/uploads/2025/08/Silde.jpg",
      "https://www.monocibec.it/wp-content/uploads/2025/03/AMB_MINERVA.jpg",
      "https://www.monocibec.it/wp-content/uploads/2025/02/Immagine-prodotto.jpg",
      "https://www.monocibec.it/wp-content/uploads/2024/09/Amb_VictoriaAdelphi.jpg",
    ],
    description:
      "Talijanske porculanske pločice za unutarnje i vanjske prostore — preko 60 godina tradicije.",
  
    priceRange: "28 – 70",
    priceUnit: "€/m²",},
  {
    name: "La Fabbrica AVA",
    slug: "la-fabbrica",
    category: "plocice",
    website: "https://www.lafabbrica.it/en/",
    logo: "/images/logos/lafabbrica.png",
    images: [
      "https://www.lafabbrica.it/wp-content/uploads/2025/11/Moon-Cream_focus.jpg",
      "https://www.lafabbrica.it/wp-content/uploads/2025/11/Venezia_focus.jpg",
      "https://www.lafabbrica.it/wp-content/uploads/2025/11/graniti_focus.jpg",
      "https://www.lafabbrica.it/wp-content/uploads/2025/05/green-sunset_focus.jpg",
      "https://www.lafabbrica.it/wp-content/uploads/2025/02/Velaris_on-focus.jpg",
      "https://www.lafabbrica.it/wp-content/uploads/2024/11/Black-Gold_focus.jpg",
    ],
    description:
      "Inovativne keramičke površine inspirirane prirodnim materijalima i suvremenom arhitekturom.",
  
    priceRange: "35 – 90",
    priceUnit: "€/m²",},
  {
    name: "Serenissima Ceramiche",
    slug: "serenissima",
    category: "plocice",
    website: "https://www.serenissima.re.it/?lang=en",
    logo: "/images/logos/serenissima.png",
    images: [
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-21_tabacco.jpg",
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-2_beige.jpg",
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-4_crema.jpg",
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-9_avorio.jpg",
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-20_tabacco.jpg",
      "https://www.serenissima.re.it/wp-content/uploads/AMBIENTAZIONE-PETRA-11_beige.jpg",
    ],
    description:
      "Keramičke pločice inspirirane bogatom talijanskom kulturnom baštinom i prirodom.",
  
    priceRange: "30 – 80",
    priceUnit: "€/m²",},
  {
    name: "Cercom Ceramiche",
    slug: "cercom-ceramiche",
    category: "plocice",
    website: "https://www.cercomceramiche.it/?lang=en",
    logo: "https://prod-stor.mkintra.confindustriaceramica.it/ccintranet-production-public/media/company_logos/b417146a-eeb3-438a-bf2f-6bb390081454_LOGO_CERCOM.jpg",
    images: [
      "https://www.cercomceramiche.it/wp-content/uploads/PLYMOUTH-AIROPORT.jpg",
      "https://www.cercomceramiche.it/wp-content/uploads/CORTE-SAN-RUFFILLO.jpg",
      "https://www.cercomceramiche.it/wp-content/uploads/FAM.jpg",
      "https://www.cercomceramiche.it/wp-content/uploads/Villa-M.jpg",
      "https://www.cercomceramiche.it/wp-content/uploads/villa-mara.jpg",
      "https://www.cercomceramiche.it/wp-content/uploads/om-still.jpg",
    ],
    description:
      "Kvalitetne keramičke pločice za moderna arhitektonska rješenja s kamenim, mramornim i drvenim efektima.",
  
    priceRange: "32 – 85",
    priceUnit: "€/m²",},
  {
    name: "CIR Manifatture Ceramiche",
    slug: "cir",
    category: "plocice",
    website: "https://www.cir.it/",
    logo: "/images/logos/cir.jpg",
    images: [
      "https://www.cir.it/wp-content/uploads/Yellow-White-20x20-Matte-Finish-Bubble-Yellow-20x20-2.jpg",
      "https://www.cir.it/wp-content/uploads/White-20x20-6x25-Matte-Finish.jpg",
      "https://www.cir.it/wp-content/uploads/White-20x20-Matte-Finish-White-6x25-Matte-Finish-Black-6x25-High-Gloss-1.jpg",
      "https://www.cir.it/wp-content/uploads/Terrazzo-White-20x20-Black-6x25-Pepper-Black-6x25-High-Gloss-1.jpg",
      "https://www.cir.it/wp-content/uploads/Red-Green-White-6x25-Matte-Finish-2.jpg",
      "https://www.cir.it/wp-content/uploads/Blue-White-20x20-Matte-Finish-1.jpg",
    ],
    description:
      "Talijanski proizvođač glaziranog porculanskog gresa s kreativnim kolekcijama malih formata od 1967.",
  
    priceRange: "25 – 60",
    priceUnit: "€/m²",},
  {
    name: "Cerasarda",
    slug: "cerasarda",
    category: "plocice",
    website: "https://www.cerasarda.it/en/",
    logo: "/images/logos/cerasarda.svg",
    images: [
      "https://www.cerasarda.it/wp-content/uploads/2025/06/Menu_home.jpg",
      "https://www.cerasarda.it/wp-content/uploads/2025/06/Menu_tradizione.jpg",
      "https://www.cerasarda.it/wp-content/uploads/2025/06/Menu_collezioni.jpg",
      "https://www.cerasarda.it/wp-content/uploads/2025/06/Menu_progetti.jpg",
      "https://www.cerasarda.it/wp-content/uploads/2025/06/Menu_shop.jpg",
    ],
    description:
      "Sardijske keramičke pločice jedinstvenog karaktera inspirirane mediteranskom tradicijom.",
  
    priceRange: "40 – 95",
    priceUnit: "€/m²",},
  {
    name: "Xclusive Ceramica",
    slug: "xclusive-ceramica",
    category: "plocice",
    website: "https://xclusiveceramica.com/",
    logo: "/images/logos/xclusive.jpg",
    images: [],
    description:
      "Ekskluzivne keramičke pločice s efektima metala, mramora i drva za rezidencijalne i industrijske prostore.",
  
    priceRange: "35 – 80",
    priceUnit: "€/m²",},
  {
    name: "CRZ64",
    slug: "crz64",
    category: "plocice",
    website: "https://www.crz64.com/en/",
    logo: "/images/logos/crz64.png",
    images: [
      "https://www.crz64.com/wp-content/uploads/2025/12/Amb_Flow_White_60x120_Living-1300x920.jpg",
      "https://www.crz64.com/wp-content/uploads/2025/11/Amb_Berg_Grey_60x60-30x60_bagno-1300x920.jpg",
      "https://www.crz64.com/wp-content/uploads/2025/09/Amb_Sandhamn_Iron_30x60-15x15-1-1300x920.jpg",
      "https://www.crz64.com/wp-content/uploads/2025/04/Fuji-KOBE-Living-crz64-1300x920.jpg",
      "https://www.crz64.com/wp-content/uploads/2025/07/Amb_Pool_Barbados_Cobalto_MOD-Spa-Pools-crz64-1300x920.jpg",
      "https://www.crz64.com/wp-content/uploads/2025/02/Amb_HOME_Grigio_60x60-1300x920.jpg",
    ],
    description:
      "Suvremene keramičke pločice s naglaskom na kreativnost, kvalitetu i ekološku održivost.",
  
    priceRange: "22 – 55",
    priceUnit: "€/m²",},
  {
    name: "Elios Ceramica",
    slug: "elios-ceramica",
    category: "plocice",
    website: "https://eliosceramica.com/?lang=en",
    logo: "https://prod-stor.mkintra.confindustriaceramica.it/ccintranet-production-public/media/company_logos/e4afbc54-5e67-4a75-9250-e0bcd84d41d0_elios_2024.jpg",
    images: [
      "https://eliosceramica.com/wp-content/uploads/2021/02/Elios_ArgillaKotta_Skultura_5cm_Porpora_Gloss_Soft_Commerciale_high.jpg",
      "https://eliosceramica.com/wp-content/uploads/2021/02/Elios_ArgillaKotta_Skultura_10cm_5cm_Cipria_Gloss_Soft_Still-Life1_high.jpg",
      "https://eliosceramica.com/wp-content/uploads/2021/02/highlight_magnus_lithos.jpg",
      "https://eliosceramica.com/wp-content/uploads/2021/02/highlight_magnus.jpg",
      "https://eliosceramica.com/wp-content/uploads/2021/02/highlight_grandi_piccoli_hexagon.jpg",
      "https://eliosceramica.com/wp-content/uploads/2021/02/highlight_grandi_piccoli_dust.jpg",
    ],
    description:
      "Talijanske keramičke pločice koje kombiniraju tradiciju i suvremeni dizajn od 1968.",
  
    priceRange: "20 – 50",
    priceUnit: "€/m²",},
  {
    name: "Herberia",
    slug: "herberia",
    category: "plocice",
    website: "https://www.herberiaceramiche.it/en/",
    logo: "/images/logos/herberia.png",
    images: [
      "https://www.herberiaceramiche.it/wp-content/uploads/2026/03/Herberia-milano-desig-week.jpg",
      "https://www.herberiaceramiche.it/wp-content/uploads/2026/02/Annual-2026_Anteprima.jpg",
      "https://www.herberiaceramiche.it/wp-content/uploads/2025/10/Blog_onici.png",
      "https://www.herberiaceramiche.it/wp-content/uploads/2026/01/herberia-header-collezione-cotti-ditalia.jpg",
    ],
    description:
      "Keramičke pločice Made in Italy izvrsnosti s fokusom na pristupačne cijene i kvalitetu.",
  
    priceRange: "18 – 45",
    priceUnit: "€/m²",},
  {
    name: "Isla Tiles",
    slug: "isla-tiles",
    category: "plocice",
    website: "https://www.islatiles.it/?lang=en",
    logo: "https://prod-stor.mkintra.confindustriaceramica.it/ccintranet-production-public/media/company_logos/81aaf5c7-729a-4d4b-8244-c856504f2baa_isla_tiles_logo.jpg",
    images: [
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Scatto_Grigio.jpg",
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Esterno_Grey.jpg",
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Cucina-Grigio.jpg",
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Dining_Bianco.jpg",
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Living-Beige.jpg",
      "https://www.islatiles.it/wp-content/uploads/ISLA_Salento_Living-Visone.jpg",
    ],
    description:
      "Rafinirane suvremene keramičke kolekcije inspirirane prirodom za unutarnje i vanjske prostore.",
  
    priceRange: "28 – 65",
    priceUnit: "€/m²",},
  {
    name: "Déco Decking",
    slug: "deco-decking",
    category: "plocice",
    website: "https://www.decodecking.it/en/",
    logo: "/images/logos/deco.gif",
    images: [
      "https://www.decodecking.it/wp-content/uploads/2024/06/MG_9290.jpg",
      "https://www.decodecking.it/wp-content/uploads/2023/05/FOTO-FINALE.jpg",
      "https://www.decodecking.it/wp-content/uploads/2022/04/nova-moove-333.jpg",
      "https://www.decodecking.it/wp-content/uploads/2021/11/Alserio10_Décowood_Pus_Sand_020-scaled.jpg",
      "https://www.decodecking.it/wp-content/uploads/2023/06/IMMAGINE-PRONCIPALE-PROGETTO-POWERBARN-HOME-1.jpg",
      "https://www.decodecking.it/wp-content/uploads/2023/09/bistrot-4.jpg",
    ],
    description:
      "Decking rješenja za terase i vanjske prostore — kompozitno i prirodno drvo.",
  
    priceRange: "45 – 120",
    priceUnit: "€/m²",},
  // === SANITARIJE ===
  {
    name: "ArtCeram",
    slug: "artceram",
    category: "sanitarije",
    website: "https://artceram.it/en/",
    logo: "/images/logos/artceram.svg",
    images: [
      "https://www.artceram.it/wp-content/uploads/2022/09/Lavabi.jpg",
      "https://www.artceram.it/wp-content/uploads/2022/09/Sanitari.jpg",
      "https://www.artceram.it/wp-content/uploads/2022/09/Strutture.jpg",
      "https://www.artceram.it/wp-content/uploads/2022/09/Vasche.jpg",
      "https://www.artceram.it/wp-content/uploads/2022/09/Piatti-Doccia.jpg",
      "https://www.artceram.it/wp-content/uploads/2023/12/Artceram-Lavabi-BRERA-3_copertina-sito-scaled.jpg",
    ],
    description:
      "Talijanski dizajnerski sanitarni proizvodi — umivaonici, sanitarije, kade i tuš-kabine.",
  
    priceRange: "250 – 1.200",
    priceUnit: "€/kom",},
  {
    name: "Ceramica Galassia",
    slug: "ceramica-galassia",
    category: "sanitarije",
    website: "https://www.ceramicagalassia.com/",
    logo: "/images/logos/galassia.gif",
    images: [
      "https://www.ceramicagalassia.it/public/mosaico-core.jpg",
      "https://www.ceramicagalassia.it/public/MOSAICO-KITCHEN.jpg",
      "https://www.ceramicagalassia.it/public/MOSAICO-LAUNDRY.jpg",
      "https://www.ceramicagalassia.it/public/MOSAICO-OUTDOOR.jpg",
      "https://www.ceramicagalassia.it/public/sabbia-tondo.jpg",
      "https://www.ceramicagalassia.it/public/slide1.jpg",
    ],
    description:
      "Sanitarije koje spajaju talijanski dizajn s vrhunskom keramičkom izradom za arhitekte i profesionalce.",
  
    priceRange: "180 – 800",
    priceUnit: "€/kom",},
  {
    name: "Kerasan",
    slug: "kerasan",
    category: "sanitarije",
    website: "https://www.kerasan.com/",
    logo: "/images/logos/kerasan.png",
    images: [
      "https://www.kerasan.com/public/slide-oke.jpg",
      "https://www.kerasan.com/public/slide-oke3.jpg",
      "https://www.kerasan.com/public/slide-oke2.jpg",
      "https://www.kerasan.com/public/slide-oke4.jpg",
      "https://www.kerasan.com/public/PARALLAX1.JPG",
      "https://www.kerasan.com/public/PARALLAX2.JPG",
    ],
    description:
      "Keramičke sanitarije klasičnog i suvremenog dizajna iz tradicionalnog talijanskog keramičkog distrikta.",
  
    priceRange: "200 – 900",
    priceUnit: "€/kom",},
  {
    name: "Simas",
    slug: "simas",
    category: "sanitarije",
    website: "https://www.simas.it/en/",
    logo: "/images/logos/simas.jpg",
    images: [
      "https://www.simas.it/img/clip_slides/img_106_clip.jpg",
      "https://www.simas.it/img/clip_slides/img_104_clip.jpg",
      "https://www.simas.it/img/clip_slides/img_88_clip.jpg",
      "https://www.simas.it/img/clip_slides/img_87_clip.jpg",
      "https://www.simas.it/img/clip_slides/img_86_clip.jpg",
      "https://www.simas.it/img/clip_slides/img_83_clip.jpg",
    ],
    description:
      "Talijanski proizvođač dizajnerskih sanitarija — nositelj oznake Ceramics of Italy.",
  
    priceRange: "220 – 950",
    priceUnit: "€/kom",},
  {
    name: "Paffoni",
    slug: "paffoni",
    category: "sanitarije",
    website: "https://paffoni.it/",
    logo: "/images/logos/paffoni.svg",
    images: [
      "https://paffoni.it/CMS/Test%20GMDE/83/image-thumb__83__product-areas-brick/bagno_home.21a2d60b.jpg",
      "https://paffoni.it/CMS/Test%20GMDE/81/image-thumb__81__product-areas-brick/cucina_home.4d2b740c.jpg",
      "https://paffoni.it/CMS/Test%20GMDE/82/image-thumb__82__product-areas-brick/doccia_home.ca3cec26.jpg",
      "https://paffoni.it/FILESERVER/PBOX/IMG_AMB/5668/image-thumb__5668__product-areas-brick/amb_PBOX.878902da.png",
      "https://paffoni.it/CMS/Test%20GMDE/80/image-thumb__80__product-areas-brick/accessori_home-1.ca584951.jpg",
      "https://paffoni.it/FILESERVER/SITO/HOME/34763/image-thumb__34763__hero-banner-slider/home%20salone.045bb6a5.jpg",
    ],
    description:
      "Talijanske slavine i miješalice s preko 70 godina iskustva — kupaonica, kuhinja i tuš.",
  
    priceRange: "120 – 450",
    priceUnit: "€/kom",},
  {
    name: "Daniel Rubinetterie",
    slug: "daniel",
    category: "sanitarije",
    website: "https://www.daniel.it/en/",
    logo: "/images/logos/daniel.jpg",
    images: [
      "https://www.daniel.it/img/cms/HOME/2025-home-top-regency.jpg",
      "https://www.daniel.it/img/cms/HOME/2025-home-top-reverso2.jpg",
      "https://www.daniel.it/img/cms/HOME/2024-MID-BANNER-STELLAR.jpg",
      "https://www.daniel.it/img/cms/HOME/2024-MID-BANNER-CLUB.jpg",
      "https://www.daniel.it/img/cms/HOME/2023-MID-BANNER-TRILOGY.jpg",
      "https://www.daniel.it/img/cms/HOME/2023-MID-BANNER-AMBITION.jpg",
    ],
    description:
      "Luksuzne slavine i armature talijanskog dizajna — dizajnerske, suvremene i klasične kolekcije.",
  
    priceRange: "180 – 650",
    priceUnit: "€/kom",},
  {
    name: "Rubinetterie Giulini",
    slug: "giulini",
    category: "sanitarije",
    website: "https://www.giulini.it/en/",
    logo: "/images/logos/giulini.gif",
    images: [
      "https://www.giulini.it/wp-content/uploads/slider/cache/0f5e41ebf2c8bf8c23d899916145dbf3/video-anteprima_Giulini_rubinetteria_new.jpg",
      "https://www.giulini.it/wp-content/uploads/slider/cache/75009f23d7fc293181c34757d4c7a565/slides_DNA_Made_in_Italy_Giulini_rubinetteria_premi-new.jpg",
      "https://www.giulini.it/wp-content/uploads/slider/cache/7a61a30a1ea49a8efb536db3e7243ed6/slides_dove_Giulini_rubinetteria-new.jpg",
      "https://www.giulini.it/wp-content/uploads/slider/cache/0f06f5c8a4f8dbc700fc0b4f1f192be6/G_banner_rosso_Giulini_rubinetteria-new.jpg",
      "https://www.giulini.it/wp-content/uploads/slider/cache/f3570a192647fa62dbe2d63583626a0b/slides_colori_G_Giulini_rubinetteria-new.jpg",
      "https://www.giulini.it/wp-content/uploads/slider/cache/0bc8a0f335cc25b21e8c923d624279b8/slides_deluxe_Giulini_rubinetteria-new.jpg",
    ],
    description:
      "Ekskluzivne slavine i kupaonski dodaci od 1966. — kvalitetna izrada i inovativni dizajn.",
  
    priceRange: "200 – 750",
    priceUnit: "€/kom",},
  {
    name: "Lineabeta",
    slug: "lineabeta",
    category: "sanitarije",
    website: "https://www.lineabeta.net/en",
    logo: "/images/logos/lineabeta.jpg",
    images: [
      "https://samo.it/media/thumb.php?src=1700745742.jpg&w=600&h=600",
      "https://samo.it/media/thumb.php?src=1702308631.jpg&w=600&h=600",
      "https://samo.it/media/thumb.php?src=1700746638.jpg&w=600&h=600",
      "https://samo.it/media/thumb.php?src=1700746101.jpg&w=600&h=600",
      "https://samo.it/media/thumb.php?src=1700746929.jpg&w=600&h=600",
      "https://samo.it/media/thumb.php?src=1700746391.jpg&w=600&h=600",
    ],
    description:
      "Kupaonska galanterija i dodaci — preko 30 godina funkcionalnog i suvremenog dizajna.",
  
    priceRange: "30 – 350",
    priceUnit: "€/kom",},
  // === NAMJEŠTAJ ===
  {
    name: "Artesi",
    slug: "artesi",
    category: "namjestaj",
    website: "https://artesi.it/",
    logo: "/images/logos/artesi.jpg",
    images: [
      "https://archello.com/thumbs/images/2012/12/03/Tiffany-TF01.1506001149.5214.jpg?fit=crop&w=800&h=500",
    ],
    description:
      "Talijanski kupaonski namještaj od 1990. — dizajn, funkcionalnost i zanatska pažnja. Posjetite web stranicu proizvođača za kompletnu ponudu.",
  
    priceRange: "800 – 3.500",
    priceUnit: "€/set",},
  // === KADE I TUŠ-KABINE ===
  {
    name: "Artesi",
    slug: "artesi-kade",
    category: "kade-i-tus-kabine",
    website: "https://artesi.it/",
    logo: "/images/logos/artesi.jpg",
    images: [
      "https://archello.com/thumbs/images/2012/12/03/Tiffany-TF01.1506001149.5214.jpg?fit=crop&w=800&h=500",
    ],
    description:
      "Kade i tuš-kabine talijanskog dizajna za savršeno kupaonsko iskustvo. Posjetite web stranicu proizvođača za kompletnu ponudu.",
  
    priceRange: "600 – 2.800",
    priceUnit: "€/kom",},
];

export const promotions = [
  {
    title: "Posebni uvjeti za projekte",
    description:
      "Kontaktirajte nas za posebne cijene na veće količine i projektne narudžbe.",
    badge: "AKCIJA",
  },
  {
    title: "Nova kolekcija pločica",
    description:
      "Pogledajte najnovije kolekcije talijanskih pločica u našem salonu.",
    badge: "NOVO",
  },
  {
    title: "Besplatno savjetovanje",
    description:
      "Naši stručnjaci pomoći će vam odabrati savršene materijale za vaš prostor.",
    badge: "BESPLATNO",
  },
];
