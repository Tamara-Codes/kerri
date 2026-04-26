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
      "/images/brands/naxos-ceramica/1.jpg",
      "/images/brands/naxos-ceramica/2.jpg",
      "/images/brands/naxos-ceramica/3.jpg",
      "/images/brands/naxos-ceramica/4.jpg",
      "/images/brands/naxos-ceramica/5.jpg",
      "/images/brands/naxos-ceramica/6.jpg",
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
      "/images/brands/century-ceramica/1.jpg",
      "/images/brands/century-ceramica/2.jpg",
      "/images/brands/century-ceramica/3.jpg",
      "/images/brands/century-ceramica/4.jpg",
      "/images/brands/century-ceramica/5.jpg",
      "/images/brands/century-ceramica/6.jpg",
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
    logo: "/images/logos/monocibec.png",
    images: [
      "/images/brands/monocibec/1.jpg",
      "/images/brands/monocibec/2.jpg",
      "/images/brands/monocibec/3.jpg",
      "/images/brands/monocibec/4.jpg",
      "/images/brands/monocibec/5.jpg",
      "/images/brands/monocibec/6.jpg",
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
      "/images/brands/la-fabbrica/1.jpg",
      "/images/brands/la-fabbrica/2.jpg",
      "/images/brands/la-fabbrica/3.jpg",
      "/images/brands/la-fabbrica/4.jpg",
      "/images/brands/la-fabbrica/5.jpg",
      "/images/brands/la-fabbrica/6.jpg",
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
      "/images/brands/serenissima/1.jpg",
      "/images/brands/serenissima/2.jpg",
      "/images/brands/serenissima/3.jpg",
      "/images/brands/serenissima/4.jpg",
      "/images/brands/serenissima/5.jpg",
      "/images/brands/serenissima/6.jpg",
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
    logo: "/images/logos/cercom.png",
    images: [
      "/images/brands/cercom-ceramiche/1.jpg",
      "/images/brands/cercom-ceramiche/2.jpg",
      "/images/brands/cercom-ceramiche/3.jpg",
      "/images/brands/cercom-ceramiche/4.jpg",
      "/images/brands/cercom-ceramiche/5.jpg",
      "/images/brands/cercom-ceramiche/6.jpg",
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
      "/images/brands/cir/1.jpg",
      "/images/brands/cir/2.jpg",
      "/images/brands/cir/3.jpg",
      "/images/brands/cir/4.jpg",
      "/images/brands/cir/5.jpg",
      "/images/brands/cir/6.jpg",
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
      "/images/brands/cerasarda/1.jpg",
      "/images/brands/cerasarda/2.jpg",
      "/images/brands/cerasarda/3.jpg",
      "/images/brands/cerasarda/4.jpg",
      "/images/brands/cerasarda/5.jpg",
      "/images/brands/cerasarda/6.jpg",
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
    images: [
      "/images/brands/xclusive-ceramica/1.jpg",
      "/images/brands/xclusive-ceramica/2.webp",
      "/images/brands/xclusive-ceramica/3.jpg",
      "/images/brands/xclusive-ceramica/4.jpg",
      "/images/brands/xclusive-ceramica/5.jpg",
      "/images/brands/xclusive-ceramica/6.jpg",
    ],
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
      "/images/brands/crz64/1.jpg",
      "/images/brands/crz64/2.jpg",
      "/images/brands/crz64/3.jpg",
      "/images/brands/crz64/4.jpg",
      "/images/brands/crz64/5.jpg",
      "/images/brands/crz64/6.jpg",
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
    logo: "/images/logos/elios.png",
    images: [
      "/images/brands/elios-ceramica/1.jpg",
      "/images/brands/elios-ceramica/2.jpg",
      "/images/brands/elios-ceramica/3.jpg",
      "/images/brands/elios-ceramica/4.jpg",
      "/images/brands/elios-ceramica/5.jpg",
      "/images/brands/elios-ceramica/6.jpg",
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
      "/images/brands/herberia/2.jpg",
      "/images/brands/herberia/3.jpg",
      "/images/brands/herberia/3.png",
      "/images/brands/herberia/4.jpg",
      "/images/brands/herberia/5.jpg",
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
    logo: "/images/logos/isla.png",
    images: [
      "/images/brands/isla-tiles/1.jpg",
      "/images/brands/isla-tiles/2.jpg",
      "/images/brands/isla-tiles/3.jpg",
      "/images/brands/isla-tiles/4.jpg",
      "/images/brands/isla-tiles/5.jpg",
      "/images/brands/isla-tiles/6.jpg",
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
      "/images/brands/deco-decking/1.jpg",
      "/images/brands/deco-decking/2.jpg",
      "/images/brands/deco-decking/3.jpg",
      "/images/brands/deco-decking/5.jpg",
      "/images/brands/deco-decking/6.jpg",
    ],
    description:
      "Decking rješenja za terase i vanjske prostore — kompozitno i prirodno drvo.",
  
    priceRange: "45 – 120",
    priceUnit: "€/m²",},
  {
    name: "Verde 1999",
    slug: "verde-1999",
    category: "plocice",
    website: "https://www.verde1999.com/",
    logo: "/images/logos/verde1999.png",
    images: [
      "/images/brands/verde-1999/1.jpg",
      "/images/brands/verde-1999/2.jpg",
      "/images/brands/verde-1999/3.jpg",
      "/images/brands/verde-1999/5.jpg",
      "/images/brands/verde-1999/6.jpg",
    ],
    description:
      "Talijanske keramičke pločice s modernim dizajnom — kolekcije inspirirane kamenom, betonom i prirodnim materijalima.",
    priceRange: "25 – 60",
    priceUnit: "€/m²",
  },
  {
    name: "MGM Ceramiche",
    slug: "mgm-ceramiche",
    category: "plocice",
    website: "https://www.mgmceramiche.it/en/",
    logo: "/images/logos/mgm.png",
    images: [
      "/images/brands/mgm-ceramiche/1.jpg",
      "/images/brands/mgm-ceramiche/2.jpg",
      "/images/brands/mgm-ceramiche/3.jpg",
      "/images/brands/mgm-ceramiche/4.jpg",
      "/images/brands/mgm-ceramiche/5.jpg",
      "/images/brands/mgm-ceramiche/6.jpg",
    ],
    description:
      "Talijanske porculanske pločice visoke kvalitete — efekti kamena, mramora i suvremeni dizajn za svaki prostor.",
    priceRange: "30 – 70",
    priceUnit: "€/m²",
  },
  // === SANITARIJE ===
  {
    name: "ArtCeram",
    slug: "artceram",
    category: "sanitarije",
    website: "https://artceram.it/en/",
    logo: "/images/logos/artceram.svg",
    images: [
      "/images/brands/artceram/1.jpg",
      "/images/brands/artceram/2.jpg",
      "/images/brands/artceram/3.jpg",
      "/images/brands/artceram/4.jpg",
      "/images/brands/artceram/5.jpg",
      "/images/brands/artceram/6.jpg",
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
      "/images/brands/ceramica-galassia/1.jpg",
      "/images/brands/ceramica-galassia/2.jpg",
      "/images/brands/ceramica-galassia/3.jpg",
      "/images/brands/ceramica-galassia/4.jpg",
      "/images/brands/ceramica-galassia/5.jpg",
      "/images/brands/ceramica-galassia/6.jpg",
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
      "/images/brands/kerasan/1.jpg",
      "/images/brands/kerasan/2.jpg",
      "/images/brands/kerasan/3.jpg",
      "/images/brands/kerasan/4.jpg",
      "/images/brands/kerasan/5.jpg",
      "/images/brands/kerasan/6.jpg",
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
      "/images/brands/simas/1.jpg",
      "/images/brands/simas/2.jpg",
      "/images/brands/simas/3.jpg",
      "/images/brands/simas/4.jpg",
      "/images/brands/simas/5.jpg",
      "/images/brands/simas/6.jpg",
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
      "/images/brands/paffoni/1.jpg",
      "/images/brands/paffoni/2.jpg",
      "/images/brands/paffoni/3.jpg",
      "/images/brands/paffoni/4.png",
      "/images/brands/paffoni/5.jpg",
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
      "/images/brands/daniel/1.jpg",
      "/images/brands/daniel/2.jpg",
      "/images/brands/daniel/3.jpg",
      "/images/brands/daniel/4.jpg",
      "/images/brands/daniel/5.jpg",
      "/images/brands/daniel/6.jpg",
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
      "/images/brands/giulini/1.jpg",
      "/images/brands/giulini/2.jpg",
      "/images/brands/giulini/3.jpg",
      "/images/brands/giulini/4.jpg",
      "/images/brands/giulini/5.jpg",
      "/images/brands/giulini/6.jpg",
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
      "/images/brands/lineabeta/1.jpg",
      "/images/brands/lineabeta/2.jpg",
      "/images/brands/lineabeta/3.jpg",
      "/images/brands/lineabeta/4.jpg",
      "/images/brands/lineabeta/5.jpg",
      "/images/brands/lineabeta/6.jpg",
    ],
    description:
      "Kupaonska galanterija i dodaci — preko 30 godina funkcionalnog i suvremenog dizajna.",
    priceRange: "30 – 350",
    priceUnit: "€/kom",
  },
  {
    name: "Antrax",
    slug: "antrax",
    category: "sanitarije",
    website: "https://www.antrax.com/",
    logo: "/images/logos/antrax.svg",
    images: [
      "/images/brands/antrax/1.jpg",
      "/images/brands/antrax/2.jpg",
      "/images/brands/antrax/3.jpg",
      "/images/brands/antrax/4.jpg",
      "/images/brands/antrax/5.jpg",
      "/images/brands/antrax/6.jpg",
    ],
    description:
      "Talijanski dizajnerski radijatori i grijači za ručnike — spoj funkcionalnosti, umjetnosti i vrhunskog dizajna.",
    priceRange: "400 – 2.500",
    priceUnit: "€/kom",
  },
  // === NAMJEŠTAJ ===
  {
    name: "Ardeco",
    slug: "ardeco",
    category: "namjestaj",
    website: "https://artesi.it/en/ardeco-collections/",
    logo: "/images/logos/ardeco.png",
    images: [
      "/images/brands/ardeco/1.jpg",
      "/images/brands/ardeco/2.jpg",
      "/images/brands/ardeco/3.jpg",
      "/images/brands/ardeco/4.jpg",
      "/images/brands/ardeco/5.jpg",
      "/images/brands/ardeco/6.jpg",
    ],
    description:
      "Elegantan talijanski kupaonski namještaj iz Artesi grupacije — suvremeni dizajn s naglaskom na funkcionalnost i estetiku.",
    priceRange: "800 – 3.500",
    priceUnit: "€/set",
  },
  {
    name: "Artesi",
    slug: "artesi",
    category: "namjestaj",
    website: "https://artesi.it/en/artesi-bathroom-collections/",
    logo: "/images/logos/artesi.jpg",
    images: [
      "/images/brands/artesi-furniture/1.jpg",
      "/images/brands/artesi-furniture/2.jpg",
      "/images/brands/artesi-furniture/3.jpg",
      "/images/brands/artesi-furniture/4.jpg",
      "/images/brands/artesi-furniture/5.jpg",
      "/images/brands/artesi-furniture/6.jpg",
    ],
    description:
      "Talijanski kupaonski namještaj od 1990. — dizajn, funkcionalnost i zanatska pažnja u svakom detalju.",
    priceRange: "900 – 4.000",
    priceUnit: "€/set",
  },
  {
    name: "Rigosalotti",
    slug: "rigosalotti",
    category: "namjestaj",
    website: "https://en.rigosalotti.it/",
    logo: "/images/logos/rigosalotti.png",
    images: [
      "/images/brands/rigosalotti/1.jpg",
      "/images/brands/rigosalotti/2.jpg",
      "/images/brands/rigosalotti/3.jpg",
      "/images/brands/rigosalotti/4.jpg",
      "/images/brands/rigosalotti/5.jpg",
    ],
    description:
      "Talijanski proizvođač tapeciranog namještaja — sofe, garniture i fotelje vrhunske kvalitete i udobnosti.",
    priceRange: "1.200 – 5.000",
    priceUnit: "€/kom",
  },
  // === KADE I TUŠ-KABINE ===
  {
    name: "Agha",
    slug: "agha",
    category: "kade-i-tus-kabine",
    website: "https://artesi.it/en/agha-collections/",
    logo: "/images/logos/agha.png",
    images: [
      "/images/brands/agha/1.jpg",
      "/images/brands/agha/2.jpg",
      "/images/brands/agha/3.jpg",
      "/images/brands/agha/4.jpg",
      "/images/brands/agha/5.jpg",
      "/images/brands/agha/6.jpg",
    ],
    description:
      "Tuš-kabine i paravani talijanskog dizajna iz Artesi grupacije — elegantna rješenja za svaku kupaonicu.",
    priceRange: "600 – 2.800",
    priceUnit: "€/kom",
  },
  {
    name: "Aquaestil",
    slug: "aquaestil",
    category: "kade-i-tus-kabine",
    website: "https://www.aquaestil.hr/hr/",
    logo: "/images/logos/aquaestil.jpg",
    images: [
      "/images/brands/aquaestil/1.jpg",
      "/images/brands/aquaestil/2.jpg",
      "/images/brands/aquaestil/3.jpg",
      "/images/brands/aquaestil/4.jpg",
      "/images/brands/aquaestil/5.jpg",
      "/images/brands/aquaestil/6.jpg",
    ],
    description:
      "Hrvatski proizvođač kupaonske opreme — kade, tuš-kabine, paravani i kupaonski namještaj.",
    priceRange: "500 – 3.000",
    priceUnit: "€/kom",
  },
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
