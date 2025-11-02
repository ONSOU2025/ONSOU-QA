// faq_data.js

const faqData = [
    // 1. 始める前の準備
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 ダウンロード・インストール",
        question: "Q: どこからゲームをダウンロードできますか？",
        answer: "A: 公式サイトのダウンロードページ（GoogleDrive）からダウンロードできます。",
        image: null,
        popularity: 5, // 人気度を仮に設定
        date: "2025-10-30" // 作成日
    },
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 動作環境・スペック",
        question: "Q: 動作する環境を教えてください。",
        answer: "A: 動作環境は、Android、Windowsとなっています。詳細な動作環境は公式サイトをご確認ください。",
        image: null,
        popularity: 3,
        date: "2025-10-30"
    },
    {
        category: "1. 始める前の準備",
        subcategory: "🔹 動作環境・スペック",
        question: "Q: 推奨されるスマートフォン・タブレット・PCのスペックを教えてください。",
        answer: "A: 推奨環境は、Android OS 13.0以上、Windows OS 10以上、メモリ8GB以上を推奨しています。詳細な動作環境は公式サイトをご確認ください。",
        image: null,
        popularity: 4,
        date: "2025-10-30"
    },
    
    // 2. ゲームの基本
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本操作",
        question: "Q: 操作方法を教えてください",
        answer: "A: 操作方法はPCの場合**SDFJKLキー**で操作します。ゲーム本体に記載してあります。",
        image: null,
        popularity: 10,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: ノーツの判定はどのようになっていますか？",
        answer: "A: 判定は「Perfect+」「Perfect」「Great」「Good」「Bad」「Miss」の6種類があります。タイミングに合わせてノーツをタップしてください。",
        image: null,
        popularity: 7,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: HPが0になったらどうなりますか？",
        answer: "A: HPが0になると、**強制的にゲームを終了しリザルト画面へ**移行します。",
        image: null,
        popularity: 2,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: リザルト画面のカメラマークは何ですか？",
        answer: "A: リザルト画面のカメラマークはリザルト画面の**スクリーンショット**を撮影できます。",
        image: null,
        popularity: 1,
        date: "2025-10-31"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: リザルト画面で撮ったスクリーンショットはどこで見れますか？",
        answer: "A: スクリーンショットは楽曲選択画面の**ライブラリーボタン**から見ることができます。",
        image: null,
        popularity: 1,
        date: "2025-10-31"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 難易度表記について教えてください。",
        answer: "A: 難易度は下から順に「BASIC」「NORMAL」「ADVANCE」「EXPERT」「MASTER」「Re MASTER」「LUNATIC」「ULTIMATE」「FEAST」の9種類です。",
        image: null,
        popularity: 6,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 必要な指の本数を教えてください。",
        answer: "A: このゲームは4本分のタップを前提として作られています。難易度「ULTIMATE」からは、6本必要になる場合もあります",
        image: null,
        popularity: 8,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: COMBO（コンボ）について教えてください。",
        answer: "A: COMBOは判定が「Good」以上の時に加算され、「Bad」以下の場合にリセットされます。",
        image: null,
        popularity: 3,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 基本システム",
        question: "Q: 途中にリズムゲームを終了することはできますか？。",
        answer: "A: **tabキーまたは停止ボタン**を押すことでリザルト画面へ移動し終了できます。",
        image: null,
        popularity: 2,
        date: "2025-10-30"
    },
    {
        category: "2. ゲームの基本",
        subcategory: "🔹 専門用語解説",
        question: "Q: 「BPM」とは何ですか？",
        answer: "A: **BPM**（Beats Per Minute）は「1分間あたりの拍数」を示す音楽用語で、この数値が大きいほど曲のテンポが速くなります。",
        image: null,
        popularity: 4,
        date: "2025-10-30"
    },

    // 3. プレイと上達
    {
        category: "3. プレイと上達",
        subcategory: "🔹 設定の最適化",
        question: "Q: 音ズレを調整するための設定はありますか？",
        answer: "A: はい、タイトル画面の設定メニュー内にある「**オフセット**」から、細かく設定できます。ご自身の端末に合わせて調整してください。",
        image: null,
        popularity: 9,
        date: "2025-10-30"
    },
    {
        category: "3. プレイと上達",
        subcategory: "🔹 判定の設定",
        question: "Q: 難しい場合はどうすればよいですか？",
        answer: "A: タイトル画面の設定メニュー内にある「**判定モード**」から判定の難易度を調整できます。ご自身の実力に合わせて調整してください",
        image: null,
        popularity: 5,
        date: "2025-10-30"
    },
    {
        category: "3. プレイと上達",
        subcategory: "🔹 上達のコツ",
        question: "Q: スコアを伸ばすための練習方法はありますか？",
        answer: "A: 難しい曲を連続でプレイするよりも、判定ラインギリギリの曲を繰り返し練習し、**リズム感を安定させる**ことが重要です。",
        image: null,
        popularity: 2,
        date: "2025-10-30"
    },
    {
        category: "3. プレイと上達",
        subcategory: "🔹 上達のコツ",
        question: "Q: キーを間違えないようにする方法はありますか？",
        answer: "A: **キーに指などを常駐**しておくと、より押し間違えが削減できます。",
        image: null,
        popularity: 3,
        date: "2025-10-31"
    },
    
    // 4. トラブル・サポート
    {
        category: "4. トラブル・サポート",
        subcategory: "🔹 不具合・バグ",
        question: "Q: ゲームが頻繁にフリーズします。",
        answer: "A: 他のアプリを終了させたり、端末を再起動することで改善する場合があります。それでも解決しない場合は、OSとアプリのバージョンを添えて**公式ディスコードサーバーや、公式X（旧Twitter）**にご報告お願いします。",
        image: null,
        popularity: 7,
        date: "2025-10-30"
    },
];
