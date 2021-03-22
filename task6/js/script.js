let adList = [

 {

   id: '1',
   description: 'Скидка на книгу "Шестерка воронов" -30%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/books/more10613272.html?sbtoken=cec7d4247a6de901380ab59772da5202',
   vendor: 'OZ',
   photoLink: 'https://s2-goods.ozstatic.by/2000/272/613/10/10613272_0.jpg',
   validUntil: new Date('2021-03-30T23:00:00'),
   discount: '30%',
   hashTags: ['книга'],
   rating: 5.0,
   reviews :[]

 },
{

   id: '2',
   description: 'Скидка на худи -20%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://by.wildberries.ru/catalog/13724854/detail.aspx?targetUrl=MI',
   vendor: 'Wildberries',
   photoLink: 'https://images.wbstatic.net/c516x688/new/13720000/13724854-1.jpg',
   validUntil: new Date('2021-03-20T23:00:00'),
   discount: '20%',
   hashTags: ['одежда'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '3',
   description: 'Скидка на брюки -50%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://www.zara.com/by/ru/%D1%82%D1%80%D0%B8%D0%BA%D0%BE%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B5-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8%C2%A0%E2%80%94-limited-edition-p00014024.html?v1=85913250&v2=1718736',
   vendor: 'ZARA',
   photoLink: 'https://static.zara.net/photos///2021/V/0/1/p/0014/024/712/2/w/1280/0014024712_1_1_1.jpg?ts=1615829067683',
   validUntil: new Date('2021-04-30T23:00:00'),
   discount: '50%',
   hashTags: ['одежда'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '4',
   description: 'Скидка на чайный набор -36%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://www.ozon.ru/context/detail/id/226596397/',
   vendor: 'OZON',
   photoLink: 'https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6038379985.jpg',
   validUntil: new Date('2021-04-30T23:00:00'),
   discount: '36%',
   hashTags: ['посуда'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '5',
   description: 'Скидка на электронную книгу -5%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://5element.by/products/581663-elektronnaya-kniga-onyx-boox-gulliver?q=%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0',
   vendor: '5 элемент',
   photoLink: 'https://img.5element.by/import/images/ut/goods/good_2e70aa08-d823-11e8-80bf-00505684bca7/good_img_d497fa2a-de91-11e8-80c0-00505684bca7_600.jpg',
   validUntil: new Date('2021-03-30T23:00:00'),
   discount: '5%',
   hashTags: ['техника'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '6',
   description: 'Скидка на рюкзак -40%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'lamoda.by/p/he013bwifrw0/bags-herschelsupplyco-ryukzak/',
   vendor: 'Lamoda',
   photoLink: 'https://a.lmcdn.ru/img600x866/H/E/HE013BWIFRW0_10332006_1_v1.jpg',
   validUntil: new Date('2021-05-09T23:00:00'),
   discount: '40%',
   hashTags: ['рюкзак'],
   rating: 4.0,
   reviews :[]

 },
 {

   id: '7',
   description: 'Скидка на плойку -10%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/hairstylers/more10694850.html',
   vendor: 'OZ',
   photoLink: 'https://s1-goods.ozstatic.by/2000/850/694/10/10694850_0.jpg',
   validUntil: new Date('2021-03-28T23:00:00'),
   discount: '10%',
   hashTags: ['техника'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '8',
   description: 'Скидка на рубашку в клетку -40%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://www.bershka.com/ru/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B/%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0/%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B2%D1%81%D0%B5/%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%B0-%D0%B2-%D0%BA%D0%BB%D0%B5%D1%82%D0%BA%D1%83-%D1%81-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%B0%D0%BC%D0%B8-c1010331712p102738192.html?colorId=505',
   vendor: 'Bershka',
   photoLink: 'https://static.bershka.net/4/photos2/2021/V/0/2/p/5969/019/505/5969019505_1_1_3.jpg?t=1602577255611',
   validUntil: new Date('2021-04-30T23:00:00'),
   discount: '40%',
   hashTags: ['одежда'],
   rating: 4.0,
   reviews :[]

 },
 {

   id: '9',
   description: 'Скидка на печенье с комплиментами -5%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://podarok.by/catalog/podarki/sladosti/2789/',
   vendor: 'Podarok',
   photoLink: 'https://podarok.by/upload/resize_cache/iblock/038/600_450_140cd750bba9870f18aada2478b24840a/03854b2dd99e58505bb0912259ee46fe.jpg',
   validUntil: new Date('2021-04-08T23:00:00'),
   discount: '5%',
   hashTags: ['подарки'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '10',
   description: 'Скидка на кеды -30%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://www.bershka.com/ru/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B/%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0/%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B2%D1%81%D0%B5/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B5%D0%B4%D1%8B-%D1%81-%D1%80%D0%B5%D0%BC%D0%B5%D1%88%D0%BA%D0%BE%D0%BC-c1010331712p102704564.html?colorId=040',
   vendor: 'Bershka',
   photoLink: 'https://static.bershka.net/4/photos2/2021/V/1/2/p/2200/760/040/2200760040_1_1_1.jpg?t=1607603467066',
   validUntil: new Date('2021-04-08T23:00:00'),
   discount: '30%',
   hashTags: ['обувь'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '11',
   description: 'Скидка на гель для душа -12%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://belita-shop.by/katalog/geli-dlya-dusha/gel_dlya_dusha_shokoladnyy_gurme.html',
   vendor: 'Belita',
   photoLink: 'https://belita-shop.by/upload/cacheResize/522/cf5/29bee0cf38fb26d63bd770af835b1c61.jpg',
   validUntil: new Date('2021-08-30T23:00:00'),
   discount: '12%',
   hashTags: ['уход'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '12',
   description: 'Скидка на блокнот в линейку -10%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/notebooks/more10924960.html',
   vendor: 'OZ',
   photoLink: 'https://s1-goods.ozstatic.by/2000/960/924/10/10924960_0.jpg',
   validUntil: new Date('2021-06-30T23:00:00'),
   discount: '10%',
   hashTags: ['канцтовары'],
   rating: 4.0,
   reviews :[]

 },
 {

   id: '13',
   description: 'Скидка на книгу "1984" -25%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/books/more10348449.html',
   vendor: 'OZ',
   photoLink: 'https://s5-goods.ozstatic.by/2000/449/348/10/10348449_0.jpg',
   validUntil: new Date('2021-04-20T23:00:00'),
   discount: '25%',
   hashTags: ['книга'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '14',
   description: 'Скидка на кошелек -15%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://makey-shop.by/katalog/koshelki/koshelek-bubles-mini.html',
   vendor: 'Макей',
   photoLink: 'https://makey-shop.by/assets/images/products/609/snimok1.png',
   validUntil: new Date('2021-04-23T23:00:00'),
   discount: '15%',
   hashTags: ['кошелек'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '15',
   description: 'Скидка на платье -40%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://www.zara.com/by/ru/%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5-%D0%BD%D0%B0-%D0%B1%D1%80%D0%B5%D1%82%D0%B5%D0%BB%D1%8F%D1%85--%D0%BB%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-p02473763.html?v1=103429989&v2=1718163',
   vendor: 'ZARA',
   photoLink: 'https://static.zara.net/photos///2021/V/0/1/p/2473/763/660/2/w/1280/2473763660_1_1_1.jpg?ts=1615884335495',
   validUntil: new Date('2021-05-10T23:00:00'),
   discount: '40%',
   hashTags: ['одежда'],
   rating: 4.0,
   reviews :[]

 },
 {

   id: '16',
   description: 'Скидка на носки -12%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/kidssocks/more10979463.html?sbtoken=215530f181b9aa0b4377db923b2774ea',
   vendor: 'OZ',
   photoLink: 'https://s2-goods.ozstatic.by/2000/463/979/10/10979463_0.jpg',
   validUntil: new Date('2021-03-30T23:00:00'),
   discount: '12%',
   hashTags: ['одежда'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '17',
   description: 'Скидка на лак для волос -50%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://mila.by/catalog/ukhod-za-soboy/ukhod-za-volosami/sredstva-dlya-ukladki-volos-i-sokhraneniya-pricheski/laki/laki/lak-d-volos-sverkhsilnoy-fiksatsi-taft-ultra-neytralnyy-zapakh-225ml.html',
   vendor: 'Мила',
   photoLink: 'https://mila.by/upload/iblock/d21/d212e836251884a634764ad1afd41270.jpg',
   validUntil: new Date('2021-04-15T23:00:00'),
   discount: '50%',
   hashTags: ['уход'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '18',
   description: 'Скидка на кошелек -23%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://makey-shop.by/katalog/koshelki/muzhskie/koshelek-042-08-47.html',
   vendor: 'Макей',
   photoLink: 'https://makey-shop.by/assets/images/products/171/17027782795c2dd73fc9325-original1.jpg',
   validUntil: new Date('2021-05-04T23:00:00'),
   discount: '23%',
   hashTags: ['кошелек'],
   rating: 5.0,
   reviews :[]

 },
 {

   id: '19',
   description: 'Скидка на женские очки -34%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://funoptik.by/ochki/jenskie-ochki/jenskie-ochki-dacchi-d37412-c5',
   vendor: 'Fun Optik',
   photoLink: 'https://funoptik.by/uploads/product/1600/1661/thumbs/70_Dacchi-D-37412-C5.jpg',
   validUntil: new Date('2021-06-12T23:00:00'),
   discount: '34%',
   hashTags: ['очки'],
   rating: 0.0,
   reviews :[]

 },
 {

   id: '20',
   description: 'Скидка на маску для лица -5%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://belita-shop.by/katalog/fabric-mask/maska-dlya-litsa-na-netkanoy-osnove-sebobalans-i-uvlazhnenie.html',
   vendor: 'Belita',
   photoLink: 'https://belita-shop.by/upload/cacheResize/205/8a7/3b7b52476114818c686353bc18462300.jpg',
   validUntil: new Date('2021-03-25T23:00:00'),
   discount: '5%',
   hashTags: ['уход'],
   rating: 5.0,
   reviews :[]

 },
 ]
 let getAds = (function(skip = 0, top = 10, filterConfig = {}){
    let adsToShow = [];
    let key = Object.keys(filterConfig);

    if(key.length == 0){ 
        for(let i=skip;i<top+skip;++i){
            if(i > adList.length){
                break;
            }
            adsToShow.push(adList[i]);
        }
    } else if(key[0] == 'vendors'){
        let vendors = filterConfig[[key[0]]];
        let skipped_ads = 0;
        let i = 0;
        while(skipped_ads < skip && i < adList.length){
            if(vendors.includes(adList[i].vendor)){
                skipped_ads++;
            }
            i++;
        }
        while(i < adList.length && adsToShow.length < top){
            if(vendors.includes(adList[i].vendor)){
                adsToShow.push(adList[i]);
            }
            i++;
        }
    }else if(key[0] == 'hashTags'){
        let hashTags = filterConfig[[key[0]]];
        let skipped_ads = 0;
        let i = 0;
        while(skipped_ads<skip && i < adList.length){
            for(let j = 0;j<adList[i].hashTags.length;++j){
                if(hashTags.includes(adList[i].hashTags[j])){
                    skipped_ads++;
                    break;
                }
            }
            i++;
        }
        while(i < adList.length && adsToShow.length < top){
            for(let j = 0;j<adList[i].hashTags.length;++j){
                if(hashTags.includes(adList[i].hashTags[j])){
                    adsToShow.push(adList[i]);
                    break;
                }
            }
            i++;
        }
    }
    return adsToShow;
});
 let getAd = (function(id){
    for (let i =0; i<adList.length;++i){
        if(adList[i].id == id){
            return adList[i];
        }
    }
    return {};
});

let validateAd = (function(ad){
    if (typeof(ad.id) == 'string' &&
    typeof(ad.description) == 'string' && ad.description.length < 200  &&
    ad.createdAt instanceof Date &&  
    typeof(ad.link) == 'string' &&
    typeof(ad.vendor) == 'string' && ad.vendor.length != 0 &&
    ad.hashTags instanceof Array &&
    typeof(ad.discount) == 'string' &&  ad.discount.length != 0 &&
    ad.validUntil instanceof Date){
        return true;
    }else{
        return false;
    }
});

let addAd = (function(ad){
    for (let i =0; i<adList.length;++i){
        if(adList[i].id === ad.id){
            return false;
        }
    }
    if(validateAd(ad)){
        adList.push(ad);
        return true;
    }else{
        return false;
    }
});
let editAd = (function(id,changes){
    let keys = Object.keys(changes);
    if(keys.includes('id') || keys.includes('author') || keys.includes('createdAt')){
        return false;
    }

    let ind;
    for(let i=0;i<=adList.length;++i){
        if(i == adList.length){
            return false;
        }else if(adList[i].id === id){
            ind = i;
            break;
        }
    }
    new_ad = adList[ind];
    for(let i=0;i<=adList.length;++i){
        new_ad[keys[i]] = changes[keys[i]];
    }
    if(validateAd(new_ad)){
        adList[ind] = new_ad;
        return true;
    }else{
        return false;
    }

});
let removeAd = (function(id){
    for (let i = 0;i<adList.length;++i){
        if(adList[i].id === id){
            adList.splice(i,1);
            return true;
        }
    }
    return false;
});



console.log('getAds');
console.log(getAds()); 
console.log(getAds(10, 8))
console.log(getAds(0,10,{vendors : ['Bershka', 'ZARA']}));
console.log(getAds(0,10,{hashTags : ['одежда']}));

console.log('getAd');
console.log(getAd(50));
console.log(getAd(3));


console.log('validateAd');
console.log(validateAd({
    id:'19',
   description: 'Скидка на женские очки -34%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://funoptik.by/ochki/jenskie-ochki/jenskie-ochki-dacchi-d37412-c5',
   vendor: 'Fun Optik',
   photoLink: 'https://funoptik.by/uploads/product/1600/1661/thumbs/70_Dacchi-D-37412-C5.jpg',
   validUntil: new Date('2021-06-12T23:00:00'),
   discount: '34%',
   hashTags: ['очки'],
   rating: 0.0,
   reviews :[]
}));//true

console.log(validateAd({
   description: 'Скидка на худи -20%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://by.wildberries.ru/catalog/13724854/detail.aspx?targetUrl=MI',
   vendor: 'Wildberries',
   photoLink: 'https://images.wbstatic.net/c516x688/new/13720000/13724854-1.jpg',
   validUntil: new Date('2021-03-20T23:00:00'),
   discount: '20%',
   hashTags: ['одежда'],
   rating: 5.0,
   reviews :[]
}))//false
console.log(validateAd({
   description: 'Скидка на книгу "Шестерка воронов" -30%',
   createdAt: new Date('2021-03-15T23:00:00'),
   link: 'https://oz.by/books/more10613272.html?sbtoken=cec7d4247a6de901380ab59772da5202',
   vendor: 'OZ',
   photoLink: 'https://s2-goods.ozstatic.by/2000/272/613/10/10613272_0.jpg',
   validUntil: new Date('2021-03-30T23:00:00'),
   discount: '30%',
   hashTags: ['книга'],
   reviews :[]
}))//false

console.log('addAd');
console.log(addAd({
    id: '21',
    description: 'Скидка на шариковую ручку 17%',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'https://oz.by/pens/more10846624.html',
    vendor: 'OZ',
    photoLink: 'https://s3-goods.ozstatic.by/2000/624/846/10/10846624_0.jpg',
    validUntil: new Date('2021-05-06T23:00:00'),
    discount: '17%',
    hashTags: ['канцтовары'],
    rating: 5.0,
    reviews:[]
}));//true
console.log(getAd(21));
console.log(addAd({
      id: '2',
    description: 'Скидка на шариковую ручку 17%',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'https://oz.by/pens/more10846624.html',
    vendor: 'OZ',
    photoLink: 'https://s3-goods.ozstatic.by/2000/624/846/10/10846624_0.jpg',
    validUntil: new Date('2021-05-06T23:00:00'),
    discount: '17%',
    hashTags: ['канцтовары'],
    rating: 5.0,
    reviews:[]
}));//false


console.log('editAd');
console.log(editAd('1',{id:21}));//false
console.log(editAd('23',{id:3}));//false 
console.log(editAd('1',{description:'Some random description', link : 'random.org'}));//true
console.log(getAd(1));
console.log('removeAd');
console.log(removeAd('100'));//false
console.log(removeAd('1'));//true
 
 
