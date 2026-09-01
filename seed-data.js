// Seed data for Riqqa
window.seedFirestoreData = function(clearExisting) {
    var db = window.db;
    var products = [{"name": "عطر Chanel Coco Mademoiselle", "brand": "Chanel", "category": "عطور", "price": 450, "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", "description": "عطر شانيل كوكو مادموزيل الأصلي - نفحات أنيقة وفاخرة", "status": "bestseller", "inStock": true, "order": 1}, {"name": "عطر Dior Sauvage", "brand": "Dior", "category": "عطور", "price": 380, "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", "description": "عطر ديور سوفاج الأصلي للرجل العصري", "status": "bestseller", "inStock": true, "order": 2}, {"name": "عطر Versace Bright Crystal", "brand": "Versace", "category": "عطور", "price": 290, "image": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop", "description": "عطر فيرساتشي برايت كريستال - نضارة وزهور", "status": "special", "inStock": true, "order": 3}, {"name": "عطر Carolina Herrera Good Girl", "brand": "Carolina Herrera", "category": "عطور", "price": 320, "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", "description": "عطر كارولينا هيريرا غود غيرل الأنثوي الفاخر", "status": "", "inStock": true, "order": 4}, {"name": "عطر YSL Libre", "brand": "Yves Saint Laurent", "category": "عطور", "price": 340, "image": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop", "description": "عطر إيف سان لوران ليبري - حرية وإشراق", "status": "bestseller", "inStock": true, "order": 5}, {"name": "عطر Calvin Klein Euphoria", "brand": "Calvin Klein", "category": "عطور", "price": 220, "image": "https://images.unsplash.com/photo-1616949755610-8c79bbc44fce?w=400&h=400&fit=crop", "description": "عطر كالفن كلاين يوفوريا - رومانسية وجاذبية", "status": "", "inStock": true, "order": 6}, {"name": "عطر Hugo Boss Bottled", "brand": "Hugo Boss", "category": "عطور", "price": 250, "image": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop", "description": "عطر هوغو بوس بوتلد الأصلي للرجل الأنيق", "status": "", "inStock": true, "order": 7}, {"name": "سيروم The Ordinary Niacinamide", "brand": "The Ordinary", "category": "عناية بالبشرة", "price": 65, "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", "description": "سيروم نياسيناميد وفيتامين بي3 لتفتيح البشرة", "status": "bestseller", "inStock": true, "order": 8}, {"name": "واقي شمس La Roche-Posay SPF50", "brand": "La Roche-Posay", "category": "عناية بالبشرة", "price": 95, "image": "https://images.unsplash.com/photo-1570194065650-d99fb4ee7cde?w=400&h=400&fit=crop", "description": "واقي شمس لاروش بوزيه SPF50 - حماية عالية خفيفة", "status": "special", "inStock": true, "order": 9}, {"name": "كريم مرطب CeraVe", "brand": "CeraVe", "category": "عناية بالبشرة", "price": 75, "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop", "description": "كريم ترطيب سيرافي بالسيراميدات لجميع أنواع البشرة", "status": "", "inStock": true, "order": 10}, {"name": "غسول بشرة Neutrogena", "brand": "Neutrogena", "category": "عناية بالبشرة", "price": 55, "image": "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400&h=400&fit=crop", "description": "غسول نيتروجينا المنظف للبشرة الدهنية والمختلطة", "status": "", "inStock": true, "order": 11}, {"name": "ماسك وجه L'Oreal Revitalift", "brand": "L'Oreal", "category": "عناية بالبشرة", "price": 45, "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", "description": "ماسك لوريال ريفيتاليفت لشد البشرة ونضارتها", "status": "special", "inStock": true, "order": 12}, {"name": "لوشن جسم Bath & Body Works", "brand": "Bath & Body Works", "category": "العناية بالجسم", "price": 85, "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop", "description": "لوشن جسم باث آند بودي وركس برائحة زهرية ثابتة", "status": "bestseller", "inStock": true, "order": 13}, {"name": "شاور جل Nivea", "brand": "Nivea", "category": "العناية بالجسم", "price": 35, "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&h=400&fit=crop", "description": "شاور جل نيفيا للترطيب والانتعاش اليومي", "status": "", "inStock": true, "order": 14}, {"name": "بودرة جسم Victoria's Secret", "brand": "Victoria's Secret", "category": "العناية بالجسم", "price": 120, "image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop", "description": "بودرة جسم فيكتوريا سيكريت برائحة عطرية فاخرة", "status": "special", "inStock": true, "order": 15}, {"name": "كريم يدين L'Occitane", "brand": "L'Occitane", "category": "العناية بالجسم", "price": 60, "image": "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=400&h=400&fit=crop", "description": "كريم يدين لوكسيتان بالزبدة الطبيعية لترطيب عميق", "status": "", "inStock": true, "order": 16}, {"name": "أحمر شفاه MAC Ruby Woo", "brand": "MAC", "category": "مكياج", "price": 95, "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop", "description": "أحمر شفاه ماك روبي وو الأحمر الكلاسيكي", "status": "bestseller", "inStock": true, "order": 17}, {"name": "كريم أساس Estée Lauder Double Wear", "brand": "Estée Lauder", "category": "مكياج", "price": 180, "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", "description": "كريم أساس استي لودر دبل وير - ثبات 24 ساعة", "status": "special", "inStock": true, "order": 18}, {"name": "باليت ظلال Huda Beauty", "brand": "Huda Beauty", "category": "مكياج", "price": 210, "image": "https://images.unsplash.com/photo-1596464716127-f9a0c7f7e7e7?w=400&h=400&fit=crop", "description": "باليت ظلال عيون هدى بيوتي بألوان متناسقة", "status": "", "inStock": true, "order": 19}, {"name": "ماسكرا Maybelline Sky High", "brand": "Maybelline", "category": "مكياج", "price": 55, "image": "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop", "description": "ماسكرا ميبيلين سكاي هاي لرموش طويلة وكثيفة", "status": "", "inStock": true, "order": 20}, {"name": "بكج عناية الجسم الفاخر", "brand": "Riqqa", "category": "بكجات", "price": 199, "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop", "description": "بكج يحتوي على شاور جل، لوشن، وملح استحمام", "status": "special", "inStock": true, "order": 21}, {"name": "بكج عطور مختارة", "brand": "Riqqa", "category": "بكجات", "price": 499, "image": "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=400&h=400&fit=crop", "description": "بكج 3 عطور أصلية مختارة بعناية لهدية مثالية", "status": "bestseller", "inStock": true, "order": 22}, {"name": "بكج العناية بالبشرة", "brand": "Riqqa", "category": "بكجات", "price": 149, "image": "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=400&h=400&fit=crop", "description": "بكج غسول، تونر، وكريم مرطب لروتين يومي كامل", "status": "", "inStock": true, "order": 23}, {"name": "عطر Dolce & Gabbana Light Blue", "brand": "Dolce & Gabbana", "category": "عطور", "price": 310, "image": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop", "description": "عطر دولتشي آند غابانا لايت بلو الأزرق النقي", "status": "", "inStock": true, "order": 24}, {"name": "عطر Jimmy Choo Fever", "brand": "Jimmy Choo", "category": "عطور", "price": 275, "image": "https://images.unsplash.com/photo-1616949755610-8c79bbc44fce?w=400&h=400&fit=crop", "description": "عطر جيمي تشو فيفر - دفء وجرأة أنثوية", "status": "special", "inStock": true, "order": 25}];

    function runSeed() {
        var batch = db.batch();
        var productsRef = db.collection('products');
        var settingsRef = db.collection('settings').doc('config');
        var settings = {
            whatsappNumber: '972569236758',
            heroSubtitle: 'متجر أونلاين لبيع العطور الأصلية • العناية بالبشرة • مستحضرات التجميل',
            aboutText: 'متجر رِقّة أونلاين يقدّم لكِ أجود العطور الأصلية، مستحضرات العناية بالبشرة والجسم، وباقات مختارة بعناية.
كل منتج يحمل لمسة رقيّة تليق بجمالك.',
            instagramLink: 'https://www.instagram.com/riqqa_bloom/',
            tiktokLink: ''
        };
        if (clearExisting) {
            console.log('Clearing existing data...');
            return productsRef.get().then(function(snapshot) {
                var deleteBatch = db.batch();
                snapshot.forEach(function(doc) { deleteBatch.delete(doc.ref); });
                return deleteBatch.commit();
            }).then(function() {
                var addBatch = db.batch();
                products.forEach(function(product, index) {
                    var docRef = productsRef.doc(String(index + 1));
                    product.id = index + 1;
                    product.sizes = [{ size: '-', unit: 'ml', price: product.price }];
                    addBatch.set(docRef, product);
                });
                addBatch.set(settingsRef, settings);
                return addBatch.commit();
            }).then(function() {
                console.log('Seeded ' + products.length + ' products successfully!');
            });
        }
        products.forEach(function(product, index) {
            var docRef = productsRef.doc(String(index + 1));
            product.id = index + 1;
            product.sizes = [{ size: '-', unit: 'ml', price: product.price }];
            batch.set(docRef, product);
        });
        batch.set(settingsRef, settings);
        return batch.commit().then(function() {
            console.log('Seeded ' + products.length + ' products successfully!');
        });
    }
    return runSeed();
};
