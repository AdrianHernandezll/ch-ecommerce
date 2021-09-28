
const Productos = [
    {
        id: 1,
        name: 'Guiso de hongos silvestres picantes, con toque ahumado',
        category: 'plato',
        description: 'Hongos silvestres, lentejones, zanahoria, batata, cebolla y ajo, cocidos al vacío con un toque de especias ahumadas picantes y malbec.',
        price: 440,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2020/07/guiso-de-hong-silvestres-con-toque-picante.jpg',
        cantidad: 15
    },
    {
        id: 2,
        name: 'Muzzarella con Jamón y Morrón',
        category: 'pizza',
        description: 'Muzzarella, jamón y salsa de tomate',
        price: 10,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261032.jpg',
        cantidad: 11
    },
    {
        id: 3,
        name: 'Guiso de cordedo y hongos con lentejones',
        category: 'plato',
        description: 'Cordero con hierbas & especias cocidos al vacío durante 20hs, hongos silvestres, lentejones, zanahoria, batata, cebolla y ajo, con un toque de malbec, 20 hs de cocción',
        price: 730,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2020/07/guiso-de-cordero-y-hongos.jpg',
        cantidad: 12
    },
    {
        id: 4,
        name: 'Wok de pollo y vegetales',
        category: 'plato',
        description: 'Salteado de vegetales (brocoli, zanahoria, morrón) & pechuga de pollo marinada, con reducción de salsa de soja y vino chardonnay, acompañados de arroz yamani salteado con cebolla morada, perejil.',
        price: 520,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2020/07/Wok-Pollo-Mar-2021.jpeg',
        cantidad: 19
    },
    {
        id: 5
        , name: 'Pechuga & crema de hongos silvestres con guarnicion',
        category: 'plato',
        description: 'Filet de pechuga dorado en plancha y luego cocido al vacío en crema de hongos silvestres',
        price: 520,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2020/07/pechuga-crema-de-hongos-silvestres.jpg',
        cantidad: 8
    },
    {
        id: 6
        , name: 'Wok de hongos y vegetales',
        category: 'plato',
        description: 'Salteado de vegetales (brocoli, zanahoria, morrón asado,  jengibre y ajo) con toque de salsa de soja y vino chardonnay, acompañados arroz yamani y almendras tostadas.',
        price: 520,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2020/07/wok-de-hongos-marzo-2021.jpeg',
        cantidad: 12
    },
    {
        id: 7
        , name: 'Falafel & vegetales salteados con crema de berenjenas'
        , category: 'plato', description: 'Falafel con vegetales salteados (brócoli, morrón, zanahoria y jengibre, con toque de salsa de soja y vino chardonnay).',
        price: 550,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/falafel-y-vegetales-salteados-3_21.jpeg',
        cantidad: 17
    },
    {
        id: 8
        , name: 'Mani king salado sin piel',
        category: 'picada',
        description: 'Maní salado sin piel de 120gr.',
        price: 120,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/7798151950451_02_nuevopack.jpg.png',
        cantidad: 13
    },
    {
        id: 9
        , name: 'Chips de papas rusticas y sal marina',
        category: 'picada',
        description: 'Chips de papas fritas con sal marina. Sin TACC. 80gr.',
        price: 120,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/papas-rusticas-w-1.png',
        cantidad: 25
    },
    {
        id: 10,
        name: 'Chips de batatitas y sal marina',
        category: 'picada',
        description: 'Chips de batatas fritas con sal marina. Sin TACC. 80gr.',
        price: 120,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/chips_de_batata_nuestros_sabores_80gr_imagen1.jpeg',
        cantidad: 25
    },
    {
        id: 12
        , name: 'Cerveza andes rubia',
        category: 'bebida',
        description: 'Cerveza Rubia. 473 cm.',
        price: 150,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/rubia.png',
        cantidad: 25
    },
    {
        id: 13
        , name: 'Cerveza antares Kolsch',
        category: 'bebida',
        description: 'Cerveza antares. 473cm',
        price: 200,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/kolsch-w.png',
        cantidad: 23
    },
    {
        id: 14
        , name: 'Cerveza andes IPA',
        category: 'bebida',
        description: 'Cerveza Andes IPA. 473cm',
        price: 170,
        image: 'https://www.tiendadealimentos.com.ar/wp-content/uploads/2021/03/IPA-1.png',
        cantidad: 19
    },
    {
        id: 15
        , name: 'Napolitana',
        category: 'pizza',
        description: 'Muzzarella, Rodajas de Tomate y Provenzal',
        price: 750,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261320.jpg',
        cantidad: 16
    },
    {
        id: 16
        , name: 'Napolitana',
        category: 'pizza',
        description: 'Muzzarella, Rodajas de Tomate y Provenzal',
        price: 840,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261320.jpg',
        cantidad: 16
    },
    {
        id: 17
        , name: 'Especial Veneciana',
        category: 'pizza',
        description: 'Muzzarella, Roquefort, Jamón, Morrón y Cebolla de Verdeo',
        price: 770,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480273128.jpg',
        cantidad: 16
    },
    {
        id: 18
        , name: 'Salchicha',
        category: 'pizza',
        description: 'Muzzarella, Salchicha, Salsa de Tomate y Mostaza',
        price: 870,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480275744.jpg',
        cantidad: 16
    },
    {
        id: 19
        , name: 'Portuguesa',
        category: 'pizza',
        description: 'Muzzarella, Cebolla y Morrón',
        price: 770,
        image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480275739.jpg',
        cantidad: 16
    },
];

export const getPromise = new Promise((resolve, reject) => {
    let respuesta = '200';
    if (respuesta === '200') {
        setTimeout(() => resolve(Productos), 3000);
    } else {
        reject('404')
    }

});


export const detailPromise = new Promise((res, rej) => {
    const auth = '200';
    if (auth === '200') {
        setTimeout(() => res(Productos), 3000)
    } else {
        rej('404')
    }
})


