export const uploadProductsToDb = () => {
  productsData.forEach(product => {
      db.collection("products").add(product)
  });
}
export const productsData = [
  {
    id: 1,
    title: 'Bulerie varoise',
    prix: 13,
    categorie: 'Des friandises en chocolat',
    ingredients : [
      {name: 'Chocolat', image:"https://img-3.journaldesfemmes.fr/MQayPLMxDLSVhYxdSpOegdtP7eQ=/1500x/smart/0f46149452e249c19853cb26272846b0/ccmcms-jdf/36993172.jpg"},
      {name:'Amande', image:"https://www.endur-activ.com/wp-content/uploads/2019/06/amande.png"},
      {name:'Framboise', image:"https://www.cuisinealafrancaise.com/img/thumbs/Framboises-b5e20a7c4354747429539dbe2501ef6c.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie : "2075 kJ / 496 kcal", 
      Matières_Grasses: "24g",
      Dont_acides_gras_staurés: "4g",
      Glucides: "61g",
      Protéines: "10g",
      Sel: "0,04" 
      },
    color:'#c1aeae',
    image:"https://www.joursheureux.fr/3692-medium_default/les-coucougnettes-de-pau-3918000.jpg"
  },
    
  {
    id: 2,
    title: 'Les Nougats',
    prix: 10,
    categorie: 'Les Nougats De Montélimar Sans Gluten',
    ingredients : [
      {name: 'Pistache', image:"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fcontent.2Fuploads.2F2018.2F08.2Fpistache.2Ejpg/650x324/quality/80/crop-from/center/les-bienfaits-sante-de-la-pistache.jpeg"},
      {name:'Amande', image:"https://www.endur-activ.com/wp-content/uploads/2019/06/amande.png"},
      {name:'Miel', image:"https://www.pleinevie.fr/wp-content/uploads/pleinevie/2017/02/Les-5-principaux-atouts-du-miel.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
    Energie : "  2167 kj / 411 kcal", 
    Graisses : " 8.20 g",
    Dont_acides_gras_staurés : "  0.7 g",
    Fibres_alimentaires : "   1.80 g",
    Glucides : " 78.9 g",
    Protéines : "  4.5 g",
    Sel : "0,02"
    },
    color:'#a3b5a2',
    
    image:"https://www.joursheureux.fr/3579-medium_default/les-nougats-de-montelimar-sans-gluten-2770013.jpg"
  },
  {
    id: 3,
    title: 'Coussin Berlino',
    prix: 30,
    categorie: 'Des friandises traditionnelles',
    ingredients : [
      {name: 'Lait', image:"https://www.journee-mondiale.com//medias/grande/images/journee/lait.jpg"},
      {name:'Amande', image:"https://www.endur-activ.com/wp-content/uploads/2019/06/amande.png"},
      {name:'Cacao', image:"https://img-3.journaldesfemmes.fr/MQayPLMxDLSVhYxdSpOegdtP7eQ=/1500x/smart/0f46149452e249c19853cb26272846b0/ccmcms-jdf/36993172.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie : "  2167 kj / 43 kcal", 
      Graisses : " 6.20 g",
      Dont_acides_gras_staurés : "  0.4 g",
      Fibres_alimentaires : "   1.76 g",
      Glucides : " 68.9 g",
      Sucre : " 58.6 g",
      Protéines : "  3.5 g",
      Sel : " 0,03"
    },
    color:'#a3b5a2',
    image:"https://www.joursheureux.fr/2439-medium_default/les-coussins-de-lyon-1116100.jpg"
  },
  {
    id: 4,
    title: 'Les Bêtises',
    prix: 12,
    categorie: 'Les Bêtises De Cambrai',
    ingredients : [
      {name:'Menth', image:"https://www.directfinesherbes.fr/wp-content/uploads/2018/04/menthe.jpg"},
      {name:'Sucre', image:"https://www.colichef.fr/7824/sucre-glace-300-grammes.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
      {name:'Citron', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie:"  1877 kj / 950 kcal", 
      Graisses:" 2.50 g",
      Dont_acides_gras_staurés:"  0.3 g",
      Fibres_alimentaires:"   1.60 g",
      Glucides:" 61.9 g",
      Sucre:" 55.8 g",
      Protéines:"  3.78 g",
      Sel:" 0,05"
    },
    color:'#a3b5a2',
    image:"https://www.joursheureux.fr/3835-medium_default/les-betises-de-cambrai-6326004.jpg"
  },
  {
    id: 5,
    title: 'Les Caramels Tendres',
    prix: 10,
    categorie: 'new',
    color:'#c1aeae',
    image:"https://www.joursheureux.fr/4627-medium_default/les-caramels-tendres-a-la-fleur-de-sel-7551019.jpg",
    ingredients : [
      {name:'Caramel', image:"https://www.olfastory.com/sites/www.olfastory.com/files/styles/400x400/public/caramel.jpg"},
      {name:'Sucre', image:"https://www.colichef.fr/7824/sucre-glace-300-grammes.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie:"  1877 kj / 950 kcal", 
      Graisses:" 2.50 g",
      Dont_acides_gras_staurés:"  0.3 g",
      Fibres_alimentaires:"   1.60 g",
      Glucides:" 61.9 g",
      Sucre:" 55.8 g",
      Protéines:"  3.78 g",
      Sel:" 0,05"
    },
  },
  {
    id: 6,
    title: 'Les Niniches De Quiberon',
    prix: 10,
    categorie: 'new',
    color:'#a3b5a2',
    image:"https://www.joursheureux.fr/8075-medium_default/les-niniches-de-quiberon-8739004.jpg",
    ingredients : [
      {name:'Caramel', image:"https://www.olfastory.com/sites/www.olfastory.com/files/styles/400x400/public/caramel.jpg"},
      {name:'Sucre', image:"https://www.colichef.fr/7824/sucre-glace-300-grammes.jpg"},
      {name:'Element secret', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie:"  1877 kj / 950 kcal", 
      Graisses:" 2.50 g",
      Dont_acides_gras_staurés:"  0.3 g",
      Fibres_alimentaires:"   1.60 g",
      Glucides:" 61.9 g",
      Sucre:" 55.8 g",
      Protéines:"  3.78 g",
      Sel:" 0,05"
    },
  },
  {
    id: 7,
    title: 'Assortiment De Bonbons Feuilletés',
    prix: 30,
    categorie: 'new',
    color:'#a3b5a2',
    image:"https://www.joursheureux.fr/6983-medium_default/les-bonbons-feuilletes-3447003.jpg",
    ingredients : [
      {name:'Menth', image:"https://www.directfinesherbes.fr/wp-content/uploads/2018/04/menthe.jpg"},
      {name:'Sucre', image:"https://www.colichef.fr/7824/sucre-glace-300-grammes.jpg"},
      {name:'Element secret', image : "https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
      {name:'Citron', image:"https://cdn-icons-png.flaticon.com/512/7879/7879554.png"},
    ],
    nutritions : {
      Energie:"  1877 kj / 950 kcal", 
      Graisses:" 2.50 g",
      Dont_acides_gras_staurés:"  0.3 g",
      Fibres_alimentaires:"   1.60 g",
      Glucides:" 61.9 g",
      Sucre:" 55.8 g",
      Protéines:"  3.78 g",
      Sel:" 0,05"
    },
  },

  
];
