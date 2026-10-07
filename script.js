const WHATSAPP_NUM = "201500816542";
const DELIVERY_FEE = 30; // قيمة خدمة التوصيل

// Categories Data
const categories = [
    { id: 'all', title: 'الكل', icon: 'la-border-all' },
    { id: 'burgers', title: 'البرجر الفاخر', icon: 'la-hamburger' },
    { id: 'pizza', title: 'البيتزا والباستا', icon: 'la-pizza-slice' },
    { id: 'grill', title: 'المشويات والستيك', icon: 'la-drumstick-bite' },
    { id: 'sides', title: 'المقبلات والسلاطات', icon: 'la-cookie-bite' },
    { id: 'drinks', title: 'المشروبات والكوكتيل', icon: 'la-glass-martini' },
    { id: 'desserts', title: 'الحلويات', icon: 'la-ice-cream' }
];

// 50 ITEMS DATA
const productsData = [
    // BURGERS (1-8)
    { id: 1, cat: 'burgers', title: 'واغيو بلاتينيوم برجر', desc: 'شريحة لحم واغيو A5، جبنة جرويير معتقة، صوص الترفل الأسود', price: 290, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
    { id: 2, cat: 'burgers', title: 'سموكد بيكون كرانش', desc: 'دجاج مقرمش مدخن، صوص المابل الحار، بيكون بقر فاخر', price: 195, img: 'https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?auto=format&fit=crop&w=400&q=80' },
    { id: 3, cat: 'burgers', title: 'تريبل شيدر بومب', desc: '3 شرائح لحم بقر، صوص التشيدر الدافيء، بصل مكرمل', price: 240, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80' },
    { id: 4, cat: 'burgers', title: 'مشروم سويس برجر', desc: 'لحم بقر مشوي، مشروم طازج بصوص الكريمة السويسرية', price: 210, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80' },
    { id: 5, cat: 'burgers', title: 'بافالو تشيكن سبايسي', desc: 'صدور دجاج حارة، صوص البافالو الأصلي، رانش كريمي', price: 180, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80' },
    { id: 6, cat: 'burgers', title: 'برايم زيرو جرانولا (دايت)', desc: 'برجر دجاج مشوي على الفحم، خبز شوفان كامل، صوص دايت', price: 175, img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80' },
    { id: 7, cat: 'burgers', title: 'باربيكيو انفيوژن برجر', desc: 'لحم بقر محشو جبنة موتزاريلا مع حلقات البصل وصوص الباربيكيو', price: 225, img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=400&q=80' },
    { id: 8, cat: 'burgers', title: 'دبل هالبينو سمك', desc: 'شريحتي لحم، هلابينو طازج، صوص الشطة الخاصة', price: 205, img: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=400&q=80' },

    // PIZZA & PASTA (9-17)
    { id: 9, cat: 'pizza', title: 'بيتزا الترفل والبيبروني', desc: 'عجينة نابولية معتقة 48 ساعة، صوص ترفل، بيبروني إيطالي', price: 250, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
    { id: 10, cat: 'pizza', title: 'بيتزا فور تشيز بالثوم', desc: 'مزيج الموتزاريلا، الرقوفور، الجرويير والتشيدر وزيت الزيتون', price: 220, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
    { id: 11, cat: 'pizza', title: 'بيتزا مارجريتا بوفالا', desc: 'جبنة بوفالا طازجة، طماطم سان مارزانو، وريحان أحمر', price: 185, img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80' },
    { id: 12, cat: 'pizza', title: 'بيتزا سي فود جولد', desc: 'جمبري، جمبري جامبو، كالماري، مع صوص الأوريجانو', price: 295, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80' },
    { id: 13, cat: 'pizza', title: 'باستا بيني ألا ألفريدو', desc: 'مكرونة بيني، صوص كريمة الفريدو، قطع دجاج ومشروم', price: 190, img: 'https://images.unsplash.com/photo-1621996346565-e3def616403c?auto=format&fit=crop&w=400&q=80' },
    { id: 14, cat: 'pizza', title: 'سبيجيتي بولونيز فاخرة', desc: 'صلصة الطماطم الإيطالية باللحم المفروم والبرميجان', price: 175, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80' },
    { id: 15, cat: 'pizza', title: 'لازانيا باللحم والموتزاريلا', desc: 'طبقات الباستا الطازجة مع البشاميل واللحم البقري', price: 210, img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=400&q=80' },
    { id: 16, cat: 'pizza', title: 'فيتوتشيني السي فود الحارة', desc: 'مكرونة مع الجمبري والكالماري بصلصة الطماطم الحارة', price: 270, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
    { id: 17, cat: 'pizza', title: 'باستا بافالو دجاج كريمي', desc: 'مكرونة فوسيلي مع صوص الكريمة الحارة والدجاج المقرمش', price: 195, img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=400&q=80' },

    // GRILL & STEAKS (18-25)
    { id: 18, cat: 'grill', title: 'ريب آي ستيك أنجوس (350g)', desc: 'قطعة ستيك ريب آي مشوية مع خضار سوتيه وصوص الفلفل الأسود', price: 480, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
    { id: 19, cat: 'grill', title: 'تندرلوين فيليه مع الترفل', desc: 'قطعة فيليه طرية مشوية، بورييه البطاطس، صوص الترفل', price: 520, img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' },
    { id: 20, cat: 'grill', title: 'شيش طاووق على الفحم', desc: 'قطع دجاج متبلة بالأعشاب والزبادي مع أرز بالزعفران', price: 220, img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80' },
    { id: 21, cat: 'grill', title: 'نصف دجاجة مشوية مشهية', desc: 'دجاجة متبلة بخلطة الأعشاب الإيطالية المشوية', price: 200, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80' },
    { id: 22, cat: 'grill', title: 'كباب لحم ضأن مشوي', desc: 'كباب بلدي متوم على الفحم مع خبز مشوي وطحينة', price: 310, img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80' },
    { id: 23, cat: 'grill', title: 'أضلاع بقر مدخنة (Smoked Ribs)', desc: 'أضلاع مطبوخة ببطء لـ 12 ساعة بصوص الباربيكيو', price: 460, img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80' },
    { id: 24, cat: 'grill', title: 'طبق مشويات ميكس برايم', desc: 'تشكيلة من الكباب، الكفتة، والشيش طاووق والريش', price: 490, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' },
    { id: 25, cat: 'grill', title: 'سلمون مشوي بالزبادي والأعشاب', desc: 'قطعة سلمون نرويجي مشوي مع صوص الليمون والشبت', price: 390, img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80' },

    // SIDES & SALADS (26-34)
    { id: 26, cat: 'sides', title: 'تشيزي ترُفل فرايز', desc: 'بطاطس مقلية مع زيت الترفل والجبنة البارميزان', price: 95, img: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80' },
    { id: 27, cat: 'sides', title: 'حلقات البصل المقرمشة', desc: 'تقدم مع صوص الباربيكيو والديناميت', price: 65, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80' },
    { id: 28, cat: 'sides', title: 'ديناميت جمبري بوفالو', desc: 'قطع الجمبري المقرمشة بصوص الديناميت الحار', price: 185, img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80' },
    { id: 29, cat: 'sides', title: 'سلطة سيزر بالدجاج', desc: 'خس كابوتشا، دجاج مشوي، خبز محمص، صوص سيزر', price: 125, img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400&q=80' },
    { id: 30, cat: 'sides', title: 'سلطة كابريزي إيطالية', desc: 'شرائح الموتزاريلا الطازجة مع الطماطم والريحان', price: 110, img: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb12765?auto=format&fit=crop&w=400&q=80' },
    { id: 31, cat: 'sides', title: 'أصابع الموتزاريلا المقلية (6 قطع)', desc: 'تقدم مع صوص المارينارا الدافيء', price: 85, img: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=400&q=80' },
    { id: 32, cat: 'sides', title: 'سلطة كينوا بالأفوكادو', desc: 'كينوا عضوي، أفوكادو، رمان، وخضار مع دريسنج الليمون', price: 135, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    { id: 33, cat: 'sides', title: 'بطاطس ودجز بالثوم والأعشاب', desc: 'بطاطس ودجز متبلة بالأعشاب والروز ماري', price: 70, img: 'https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?auto=format&fit=crop&w=400&q=80' },
    { id: 34, cat: 'sides', title: 'شوربة مشروم بالكريمة', desc: 'شربة مشروم طازج مع كريمة الطهي الإيطالية', price: 80, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80' },

    // DRINKS (35-42)
    { id: 35, cat: 'drinks', title: 'موخيتو بلو لاجون', desc: 'سفن أب، مكس التوت الأزرق، نعناع طازج وليمون', price: 65, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
    { id: 36, cat: 'drinks', title: 'ميلك شيك نوتيلادريم', desc: 'شوكولاتة نوتيلا، أوريو، كريمة ومكسرات', price: 75, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { id: 37, cat: 'drinks', title: 'موخيتو فراولة ورمان', desc: 'نعناع، ليمون، سيروب الفراولة والرمان مع الثلج المجروش', price: 65, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80' },
    { id: 38, cat: 'drinks', title: 'عصير مانجو وبيتش فروت', desc: 'قطع المانجو الطبيعية مع نكهة الخوخ والنعناع', price: 60, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80' },
    { id: 39, cat: 'drinks', title: 'سبانيش لاتيه بارد', desc: 'إسبريسو، حليب مكثف، ثلج، نكهة الفانيلا', price: 70, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80' },
    { id: 40, cat: 'drinks', title: 'آيس كراميل ماكياتو', desc: 'قهوة إسبريسو غنية، صوص كراميل، وحليب مثلج', price: 75, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80' },
    { id: 41, cat: 'drinks', title: 'عصير برتقال طازج 100%', desc: 'عصير برتقال معصور طازج بدون سكر مضاف', price: 50, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80' },
    { id: 42, cat: 'drinks', title: 'مياه غازية بريميوم (سان بيليجرينو)', desc: 'مياه فوارة إيطالية 500مل', price: 45, img: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80' },

    // DESSERTS (43-50)
    { id: 43, cat: 'desserts', title: 'مولتن كيك الشوكولاتة الساخنة', desc: 'تقدم مع بولة أيس كريم فانيلا وصوص كراميل', price: 95, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
    { id: 44, cat: 'desserts', title: 'سان سيباستيان تشيز كيك', desc: 'تشيز كيك مخبوزة على الطريقة الإسبانية بصوص الشوكولاتة', price: 110, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80' },
    { id: 45, cat: 'desserts', title: 'وافل بلجيكي باللوتس والنوتيلا', desc: 'وافل مقرمش محشو بصوص اللوتس والنوتيلا والقطع', price: 90, img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&q=80' },
    { id: 46, cat: 'desserts', title: 'تيراميسو إيطالي أصلي', desc: 'طبقات البسكويت المغطى بالإسبريسو والجبن الكريمة', price: 85, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80' },
    { id: 47, cat: 'desserts', title: 'براونيز الشوكولاتة بالمكسرات', desc: 'قطع البراونيز الغنية بالشوكولاتة مع عين الجمل', price: 75, img: 'https://images.unsplash.com/photo-1589218436045-ee320057f443?auto=format&fit=crop&w=400&q=80' },
    { id: 48, cat: 'desserts', title: 'كريب بصوص الفستق والنوتيلا', desc: 'كريب محشو بصوص البستاشيو والفستق الحلبي', price: 100, img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80' },
    { id: 49, cat: 'desserts', title: 'أم علي بالكسرات والقشطة', desc: 'أم علي بالفرن مع القشطة البلدي والمكسرات المحمصة', price: 70, img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80' },
    { id: 50, cat: 'desserts', title: 'طبق فواكه استوائية طازجة', desc: 'تشكيلة من الفواكه الموسمية مع صوص العسل والنعناع', price: 85, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=400&q=80' }
];

let cart = [];
let activeTempItem = null;
let selectedCategory = 'all';

// Render Categories Navigation
function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = categories.map(cat => `
        <button class="cat-btn ${cat.id === 'all' ? 'active' : ''}" onclick="filterCat('${cat.id}', this)">
            <i class="las ${cat.icon}"></i> ${cat.title}
        </button>
    `).join('');
}

// Render Products List
function renderProducts(items) {
    const container = document.getElementById('menu-sections');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-secondary);">لا توجد أصناف مطابقة للبحث 🔍</div>`;
        return;
    }

    const activeCats = selectedCategory === 'all' 
        ? categories.filter(c => c.id !== 'all')
        : categories.filter(c => c.id === selectedCategory);

    activeCats.forEach(cat => {
        const catProducts = items.filter(p => p.cat === cat.id);
        if (catProducts.length > 0) {
            let sectionHtml = `
                <div class="section-header">
                    <i class="las ${cat.icon}" style="color:var(--accent-gold); font-size: 1.3rem;"></i>
                    <h2>${cat.title}</h2>
                </div>
            `;

            catProducts.forEach(p => {
                sectionHtml += `
                    <div class="product-card">
                        <div class="product-img-wrapper">
                            <img src="${p.img}" class="product-img" loading="lazy" alt="${p.title}">
                        </div>
                        <div class="product-info">
                            <div>
                                <div class="product-title">${p.title}</div>
                                <div class="product-desc">${p.desc}</div>
                            </div>
                            <div class="product-bottom">
                                <div class="product-price">${p.price} ج.م</div>
                                <button class="add-action-btn" onclick="openOptionsModal(${p.id})"><i class="las la-plus"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML += sectionHtml;
        }
    });
}

function filterCat(catId, btn) {
    selectedCategory = catId;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    handleSearch();
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = productsData.filter(p => {
        const matchesCat = (selectedCategory === 'all' || p.cat === selectedCategory);
        const matchesSearch = p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });
    renderProducts(filtered);
}

// Options Modal logic
function openOptionsModal(prodId) {
    const product = productsData.find(p => p.id === prodId);
    activeTempItem = { ...product, selectedExtras: [], finalPrice: product.price };
    
    document.getElementById('modal-product-title').innerText = product.title;
    const body = document.getElementById('modal-options-body');
    body.innerHTML = '';

    if (['burgers', 'grill'].includes(product.cat)) {
        body.innerHTML = `
            <div class="opt-group-title">درجة الطهي / الإعداد</div>
            <div class="opt-row"><label>مطهو جيداً (Well Done)</label><input type="radio" name="cook" value="Well Done" checked></div>
            <div class="opt-row"><label>متوسط الطهي (Medium)</label><input type="radio" name="cook" value="Medium"></div>
            
            <div class="opt-group-title">إضافات اختيارية</div>
            <div class="opt-row"><label>صوص الترفل الأسود (+35 ج.م)</label><input type="checkbox" class="cb-extra" data-name="صوص ترفل" data-price="35"></div>
            <div class="opt-row"><label>شرائح بيكون بقر (+40 ج.م)</label><input type="checkbox" class="cb-extra" data-name="بيكون مدخن" data-price="40"></div>
        `;
    } else if (product.cat === 'pizza') {
        body.innerHTML = `
            <div class="opt-group-title">حجم البيتزا والباستا</div>
            <div class="opt-row"><label>الحجم القياسي</label><input type="radio" name="p-size" value="قياسي" checked></div>
            <div class="opt-row"><label>حجم عائلي XL (+50 ج.م)</label><input type="radio" name="p-size" value="عائلي XL" data-price="50"></div>
            
            <div class="opt-group-title">إضافات أجبان</div>
            <div class="opt-row"><label>أطراف محشوة جبن (+40 ج.م)</label><input type="checkbox" class="cb-extra" data-name="أطراف جبن" data-price="40"></div>
        `;
    } else {
        body.innerHTML = `<div style="color:var(--text-secondary); font-size:0.85rem; padding:10px 0;">لا توجد إضافات إضافية لهذا الصنف، سيتم إضافته فوراً للسلة.</div>`;
    }

    document.getElementById('options-modal').style.display = 'flex';
}

function closeOptionsModal() {
    document.getElementById('options-modal').style.display = 'none';
}

function addCurrentItemToCart() {
    let extras = [];
    let addedCost = 0;

    document.querySelectorAll('.cb-extra:checked').forEach(cb => {
        extras.push(cb.dataset.name);
        addedCost += parseFloat(cb.dataset.price);
    });

    const radioChecked = document.querySelector('#modal-options-body input[type="radio"]:checked');
    if (radioChecked) {
        extras.push(radioChecked.value);
        if (radioChecked.dataset.price) addedCost += parseFloat(radioChecked.dataset.price);
    }

    const totalUnitCost = activeTempItem.price + addedCost;
    const extrasStr = extras.length > 0 ? extras.join(', ') : 'بدون إضافات';

    const existingIndex = cart.findIndex(i => i.title === activeTempItem.title && i.extrasStr === extrasStr);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            title: activeTempItem.title,
            unitPrice: totalUnitCost,
            extrasStr: extrasStr,
            qty: 1
        });
    }

    closeOptionsModal();
    renderCartUI();
}

// Cart Management
function toggleCartDrawer(show) {
    document.getElementById('cart-drawer').style.display = show ? 'flex' : 'none';
}

function updateQuantity(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    renderCartUI();
}

function renderCartUI() {
    const listContainer = document.getElementById('drawer-cart-items');
    listContainer.innerHTML = '';

    let itemsTotal = 0;
    let totalItemsCount = 0;

    if (cart.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; color:var(--text-secondary); margin-top:40px;">السلة فارغة حالياً 🛒</div>`;
    }

    cart.forEach((item, idx) => {
        const itemTotal = item.unitPrice * item.qty;
        itemsTotal += itemTotal;
        totalItemsCount += item.qty;

        listContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <div style="font-size:0.88rem; font-weight:700;">${item.title}</div>
                    <div style="font-size:0.75rem; color:var(--text-secondary);">${item.extrasStr}</div>
                    <div style="font-size:0.9rem; font-weight:700; color:var(--accent-gold); margin-top:2px;">${itemTotal} ج.م</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${idx}, -1)">-</button>
                    <span style="font-size:0.85rem; font-weight:bold; width:16px; text-align:center;">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity(${idx}, 1)">+</button>
                </div>
            </div>
        `;
    });

    const grandTotal = cart.length > 0 ? (itemsTotal + DELIVERY_FEE) : 0;

    if (cart.length > 0) {
        listContainer.innerHTML += `
            <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between; color: var(--text-secondary); margin-bottom: 5px;">
                    <span>المجموع الفرعي:</span>
                    <span>${itemsTotal} ج.م</span>
                </div>
                <div style="display: flex; justify-content: space-between; color: var(--text-secondary);">
                    <span>رسوم التوصيل:</span>
                    <span>${DELIVERY_FEE} ج.م</span>
                </div>
            </div>
        `;
    }

    document.getElementById('cart-badge-count').innerText = totalItemsCount;
    document.getElementById('drawer-item-count').innerText = totalItemsCount;
    document.getElementById('cart-bottom-total').innerText = grandTotal + " ج.م";
}

function processWhatsAppOrder() {
    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const address = document.getElementById('c-address').value;

    if (cart.length === 0) {
        alert('يرجى إضافة وجبات للسلة أولاً');
        return;
    }

    if (!name || !phone || !address) {
        alert('يرجى استكمال جميع بيانات التوصيل');
        return;
    }

    let text = `👑 *طلب جديد - PRIME BITES*\n`;
    text += `--------------------------------\n`;
    text += `👤 *العميل:* ${name}\n`;
    text += `📞 *الهاتف:* ${phone}\n`;
    text += `📍 *العنوان:* ${address}\n`;
    text += `--------------------------------\n\n`;

    let itemsTotal = 0;
    cart.forEach((it, i) => {
        const itemSum = it.unitPrice * it.qty;
        itemsTotal += itemSum;
        text += `${i+1}. *${it.title}* (${it.qty}x)\n`;
        text += `   التفاصيل: ${it.extrasStr}\n`;
        text += `   المجموع: ${itemSum} ج.م\n\n`;
    });

    const grandTotal = itemsTotal + DELIVERY_FEE;

    text += `--------------------------------\n`;
    text += `🍔 *مجموع الوجبات:* ${itemsTotal} ج.م\n`;
    text += `🛵 *رسوم التوصيل:* ${DELIVERY_FEE} ج.م\n`;
    text += `💰 *الإجمالي الكلي:* ${grandTotal} ج.م`;

    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`, '_blank');
}

// Init App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(productsData);
});
