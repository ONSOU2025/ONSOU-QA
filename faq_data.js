// faq_data.js

const faqData = [
    // 1. 始める前の準備
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 ダウンロード・インストール",
        question: "Q: どこからゲームをダウンロードできますか？",
        answer: "A: 公式サイトのダウンロードページ（GoogleDrive）からダウンロードできます。",
        image: null,
        popularity: 0, // 人気度
        date: "2025-10-30" // 作成日
    },
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 動作環境・スペック",
        question: "Q: 動作する環境を教えてください。",
        answer: "A: 動作環境は、Android、Windowsとなっています。詳細な動作環境は公式サイトをご確認ください。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 動作環境・スペック",
        question: "Q: 推奨されるスマートフォン・タブレット・PCのスペックを教えてください。",
        answer: "A: 推奨環境は、Android OS 13.0以上、Windows OS 10以上、メモリ8GB以上を推奨しています。詳細な動作環境は公式サイトをご確認ください。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    
    // 2. ゲームの基本
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本操作",
        question: "Q: 操作方法を教えてください",
        answer: "A: 操作方法はPCの場合SDFJKLキーで操作します。ゲーム本体に記載してあります。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: ノーツの判定はどのようになっていますか？",
        answer: "A: 判定は「Perfect+」「Perfect」「Great」「Good」「Bad」「Miss」の6種類があります。タイミングに合わせてノーツをタップしてください。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: HPが0になったらどうなりますか？",
        answer: "A: HPが0になると、強制的にゲームを終了しリザルト画面へ移行します。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 難易度表記について教えてください。",
        answer: "A: 難易度は下から順に「BASIC」「NORMAL」「ADVANCE」「EXPERT」「MASTER」「Re MASTER」「LUNATIC」「ULTIMATE」「FEAST」の9種類です。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 必要な指の本数を教えてください。",
        answer: "A: このゲームは4本分のタップを前提として作られています。難易度「ULTIMATE」からは、6本必要になる場合もあります",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: COMBO（コンボ）について教えてください。",
        answer: "A: COMBOは判定が「Good」以上の時に加算され、「Bad」以下の場合にリセットされます。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 途中にリズムゲームを終了することはできますか？。",
        answer: "A: tabキーまたは停止ボタンを押すことでリザルト画面へ移動し終了できます。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 途中にリズムゲームを終了することはできますか？。",
        answer: "A: tabキーまたは停止ボタンを押すことでリザルト画面へ移動し終了できます。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 専門用語解説",
        question: "Q: 「BPM」とは何ですか？",
        answer: "A: **BPM**（Beats Per Minute）は「1分間あたりの拍数」を示す音楽用語で、この数値が大きいほど曲のテンポが速くなります。",
        image: null,
        popularity: 0,
        date: "2025-10-30"
    },

    // 3. プレイと上達
    {
        category: "3. プレイと上達",
        subcategory: "🔹 設定の最適化",
        question: "Q: 音ズレを調整するための設定はありますか？",
        answer: "A: はい、タイトル画面の設定メニュー内にある「**オフセット**」から、細かく設定できます。ご自身の端末に合わせて調整してください。",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30" // 新しい質問の例
    },
    {
        category: "3. プレイと上達",
        subcategory: "🔹 判定の設定",
        question: "Q: 難しい場合はどうすればよいですか？",
        answer: "A: タイトル画面の設定メニュー内にある「**判定モード**」から判定の難易度を調整できます。ご自身の実力に合わせて調整してください",
        image: null, // 画像パスの例
        popularity: 0,
        date: "2025-10-30"
    },
    {
        category: "3. プレイと上達",
        subcategory: "🔹 上達のコツ",
        question: "Q: スコアを伸ばすための練習方法はありますか？",
        answer: "A: 難しい曲を連続でプレイするよりも、判定ラインギリギリの曲を繰り返し練習し、**リズム感を安定させる**ことが重要です。",
        image: null,
        popularity: 0,
        date: "2025-10-30"
    },
    
    // 4. トラブル・サポート
    {
        category: "4. トラブル・サポート",
        subcategory: "🔹 不具合・バグ",
        question: "Q: ゲームが頻繁にフリーズします。",
        answer: "A: 他のアプリを終了させたり、端末を再起動することで改善する場合があります。それでも解決しない場合は、OSとアプリのバージョンを添えて公式ディスコードサーバーや、公式X（旧Twitter）にご報告お願いします。",
        image: null,
        popularity: 0,
        date: "2025-10-30"
    },
];

// faq_logic.js

const faqContent = document.getElementById('faq-content');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort-select');

// 全カテゴリ名を一意に取得し、フィルタリングの選択肢に追加する
function setupFilters() {
    const categories = new Set();
    faqData.forEach(item => categories.add(item.category));
    
    // フィルタリング選択肢の初期化
    categoryFilter.innerHTML = '<option value="all">すべてのカテゴリ</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// ------------------------------------
// ページの描画ロジック
// ------------------------------------
function renderFAQ(data) {
    faqContent.innerHTML = ''; // 既存のコンテンツをクリア
    
    if (data.length === 0) {
        faqContent.innerHTML = '<p style="text-align: center; color: #777; padding: 50px 0;">該当する質問は見つかりませんでした。</p>';
        return;
    }

    let currentCategory = null;
    let currentSubcategory = null;
    let categorySection = null;

    data.forEach(item => {
        // カテゴリセクションの生成
        if (item.category !== currentCategory) {
            currentCategory = item.category;
            
            if (categorySection) {
                faqContent.appendChild(categorySection);
            }
            
            categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const h2 = document.createElement('h2');
            h2.textContent = item.category;
            categorySection.appendChild(h2);
            
            currentSubcategory = null; 
        }

        // サブカテゴリ見出しの生成
        if (item.subcategory !== currentSubcategory) {
            currentSubcategory = item.subcategory;
            
            const h3 = document.createElement('h3');
            h3.textContent = item.subcategory;
            categorySection.appendChild(h3);
        }

        // 質問（アコーディオンボタン）と回答（パネル）の生成
        const button = document.createElement('button');
        button.className = 'accordion';
        button.textContent = item.question;
        categorySection.appendChild(button);

        const panel = document.createElement('div');
        panel.className = 'panel';
        
        const answerP = document.createElement('p');
        // 太字マークダウン **...** を <strong> に変換
        answerP.innerHTML = item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
        panel.appendChild(answerP);
        
        // 画像が存在する場合
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.question.replace('Q: ', '');
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.style.marginTop = '15px';
            img.style.marginBottom = '15px'; // 画像の下に余白を追加
            panel.appendChild(img);
        }
        
        categorySection.appendChild(panel);
    });
    
    if (categorySection) {
        faqContent.appendChild(categorySection);
    }
    
    setupAccordionListeners(); // 描画後にアコーディオン機能を有効化
}

// アコーディオンの開閉機能
function setupAccordionListeners() {
    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        // イベントリスナーを再設定 (既存のリスナーがあれば上書き)
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // 回答コンテンツの高さに合わせてパネルを開く
                panel.style.maxHeight = panel.scrollHeight + "px"; 
            } 
        };
    }
}

// ------------------------------------
// フィルタリング・ソート・検索ロジック
// ------------------------------------

function applyFiltersAndSort() {
    // データセットのコピーを作成し、元のデータを変更しないようにする
    let filteredData = [...faqData]; 
    
    // 1. カテゴリフィルタリング
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredData = filteredData.filter(item => item.category === selectedCategory);
    }

    // 2. 検索 (部分一致/AND検索)
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        // スペースで区切られた複数のキーワードを配列にする
        const keywords = searchTerm.split(/\s+/).filter(k => k.length > 0); 
        
        // AND検索: すべてのキーワードが質問または回答に含まれているものを抽出
        filteredData = filteredData.filter(item => {
            const qAndA = (item.question + " " + item.answer).toLowerCase();
            return keywords.every(keyword => qAndA.includes(keyword));
        });
    }

    // 3. ソート (人気順/新着順)
    const sortValue = sortSelect.value;
    if (sortValue === 'popularity') {
        // 人気度が高い順
        filteredData.sort((a, b) => b.popularity - a.popularity); 
    } else if (sortValue === 'newest') {
        // 新しい日付の質問が上に来るように
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // 'default'（カテゴリ別）の場合は、元のデータの並び順（カテゴリ順）のまま

    renderFAQ(filteredData);
}

// イベントリスナーの設定
searchInput.addEventListener('input', applyFiltersAndSort);
categoryFilter.addEventListener('change', applyFiltersAndSort);
sortSelect.addEventListener('change', applyFiltersAndSort);

// 初期化処理
setupFilters();
applyFiltersAndSort(); // ページロード時に全コンテンツを描画
