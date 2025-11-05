// script.js (Q&Aサイトのロジック)

// faqDataはfaq_data.jsから読み込まれることを想定
const faqContent = document.getElementById('faq-content');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort-select');

// 全カテゴリ名を一意に取得し、フィルタリングの選択肢に追加する
function setupFilters() {
    const categories = new Set();
    // グローバルスコープのfaqDataを使用
    if (typeof faqData !== 'undefined') { 
        faqData.forEach(item => categories.add(item.category));
    }
    
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
            // 前のセクションがあればDOMに追加してからリセット
            if (categorySection) {
                faqContent.appendChild(categorySection);
            }
            
            currentCategory = item.category;
            categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const h2 = document.createElement('h2');
            h2.textContent = item.category;
            categorySection.appendChild(h2);
            
            currentSubcategory = null; // カテゴリが変わったらサブカテゴリもリセット
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
        
        // 画像が存在する場合 (もし画像パスがあれば)
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.question.replace('Q: ', '');
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            panel.appendChild(img);
        }
        
        categorySection.appendChild(panel);
    });
    
    // 最後のセクションをDOMに追加
    if (categorySection) {
        faqContent.appendChild(categorySection);
    }
    
    setupAccordionListeners(); // 描画後にアコーディオン機能を有効化
}

// アコーディオンの開閉機能
function setupAccordionListeners() {
    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        // 既存のイベントリスナーを削除 (二重登録防止)
        acc[i].onclick = null; 
        
        // イベントリスナーを設定
        acc[i].onclick = function() {
            // クリックされた要素の開閉
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
    if (typeof faqData === 'undefined') return; 
    
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
    } else {
        // 'default' (カテゴリ順) の場合は、元のカテゴリ順に戻すために並び替えをしない
        // (カテゴリ順はfaq_data.jsの配列の順番に依存)
    }

    renderFAQ(filteredData);
}

// イベントリスナーの設定
searchInput.addEventListener('input', applyFiltersAndSort);
categoryFilter.addEventListener('change', applyFiltersAndSort);
sortSelect.addEventListener('change', applyFiltersAndSort);

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    applyFiltersAndSort(); // ページロード時に全コンテンツを描画
});
