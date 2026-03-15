import type { TranslationsPartial } from './index';

export const ja: TranslationsPartial = {
  // ── Lang command ──
  lang: {
    current: '現在の言語: {lang}',
    switched: '言語を{lang}に切り替えました。',
    invalid: '不明な言語: "{lang}"',
    available: '利用可能: en, ja, zh-TW',
    description: '言語を切り替える',
    labels: {
      en: 'English',
      ja: '日本語',
      'zh-TW': '繁體中文',
    },
  },

  // ── Welcome ──
  welcome: {
    greeting: '{name}のインタラクティブターミナルポートフォリオへようこそ。',
    tip: 'コマンドを入力するか、<accent>help</accent>で開始しましょう。',
  },

  // ── Input ──
  input: {
    placeholder: 'コマンドを入力...',
  },

  // ── Errors ──
  errors: {
    notFound: 'コマンドが見つかりません: {cmd}',
    didYouMean: 'もしかして: ',
    helpHint: '',
    helpHintSuffix: ' で利用可能なコマンドを確認できます。',
  },

  // ── Help ──
  help: {
    usage: '使い方: <コマンド> [オプション]',
    aliases: 'エイリアス: ',
    shortcuts: 'Tabで補完、↑↓で履歴を移動、Ctrl+Lでクリア',
    commands: {
      about: '自己紹介を表示',
      skills: '技術スキル一覧',
      experience: '職歴を表示',
      projects: 'プロジェクト一覧',
      education: '学歴を表示',
      contact: '連絡先を表示',
      recommendations: '推薦文を表示',
      resume: '履歴書を閲覧',
      ask: 'AIチャット（近日公開）',
      theme: 'テーマ切替',
      history: '履歴を表示',
      clear: '画面をクリア',
      lang: '言語を切り替える',
    },
  },

  // ── About ──
  about: {
    sectionTitle: '自己紹介',
    labels: {
      name: '名前',
      title: '肩書き',
      location: '所在地',
      degree: '学位',
      website: 'ウェブサイト',
    },
  },

  // ── Skills ──
  skills: {
    categories: {
      Languages: 'プログラミング言語',
      'Cloud & Infrastructure': 'クラウド & インフラ',
      'Frameworks & Tools': 'フレームワーク & ツール',
    },
  },

  // ── Experience ──
  experience: {
    sectionTitle: '職歴',
    noMatch: '"{query}"に一致する職歴が見つかりません',
    available: '利用可能: {companies}',
    categories: {
      'Data Engineering': 'データエンジニアリング',
      'Infrastructure/Site Reliability': 'インフラ/サイト信頼性',
      'Backend Engineering': 'バックエンドエンジニアリング',
      'Other Contributions': 'その他の貢献',
      Engineering: 'エンジニアリング',
    },
    bullets: {
      allstate: {
        'Data Engineering': [
          'Azure Data Factoryを使った包括的データパイプラインを設計し、データ処理時間を50%削減',
          'Azure Data Factoryで生データをParquet形式に変換するパイプラインを構築し、クエリ性能を30%向上',
          'Azure Blob Storageを設定し、生データ・処理済み・変換済みデータを体系的に管理',
          'スタースキーマを設計し、クエリ性能を最適化、実行時間を短縮',
          'PythonでCSVと生データをPostgreSQLにロードするETLパイプラインを開発',
          'ランディング、ブロンズ、隔離、シルバーのストレージ層を構築し、データ品質管理を改善',
        ],
      },
      thecoo: {
        'Infrastructure/Site Reliability': [
          'EventBridgeなどのサービスとの依存関係を検証し、AWS Lambdaのリソース不整合を修正、関連リソースをTerraformに適切にインポート',
          'Infrastructure-as-Codeのベストプラクティスを徹底し、手動介入を削減、完全にTerraform管理されたクラウド環境を実現',
          'GCPの本番環境と非本番環境をNode.jsバックエンドとTerraformコードのリファクタリングで分離し、データアクセス制御・デプロイ安全性・デバッグ効率を向上',
          'MVPからKubernetes環境をリファクタリングし、構成を再構築、リソース割り当てを最適化、デプロイの安定性を向上',
        ],
        'Backend Engineering': [
          'トランザクション種別ごとにポイント付与ログテーブルにインデックスを追加し、クエリ効率を改善',
          'Node.jsでRedisセッションストアを設計し、ユーザーID単位のセッション削除によるデバイス横断の強制ログアウトを実現',
          'アカウント削除/パスワードリセット時のセッション無効化のため、主要APIルートに強制ログアウト機構を統合',
          'MySQLスキーマを移行し、新しいオペレーション手数料テーブルと既存テーブルへの外部キーを追加',
          'セッション作成・取得・削除・強制ログアウトフローのJest統合テストを作成',
        ],
        'Other Contributions': [
          'Node.jsでSlack Botを開発し、HR文書を数分ではなく数秒で取得・表示',
          'ユーザークエリに基づくチャンネルメッセージ検索のためSlack APIを実装',
          'Google Drive APIでドキュメントのリスト/フィルタリングを行い、ファイル名+リンクをSlackに返却',
        ],
      },
      physiq: {
        Engineering: [
          'Node.jsでSlack Botを設計・実装し、新入社員のオンボーディング時間を33%削減（約4時間/人を節約）',
          'Python Flaskでウェブベースのキャパシティ計算ツールを開発し、稼働時間の正確な見積もりを可能にし、リソース配分を20%改善',
          'アルゴリズムパイプラインのリアルタイムヘルスモニタリング対応への移行をリードし、主要な健康データ属性のリスニングを実現',
          'Python Noxライブラリの統合により、プロジェクトビルド自動化を改善し、クロスプラットフォーム開発を促進',
          'LinuxでのデバッグによりKotlinとMySQL RESTful APIバックエンドのデータ取得問題を解決し、MySQLクエリとKotlinバリデーションを改良',
          'MySQLのフィクスチャセットを活用してテストデータを生成し、新パイプラインの出力精度と信頼性を検証',
        ],
      },
      ponddy: {
        Engineering: [
          'Pythonベースのウェブスクレイピングツールを作成し、10,000件以上の記事からデータを自動収集、データ集約時間を約90%削減',
          'AWS EC2インスタンスでデータパイプラインを運用・管理し、高可用性と高性能を確保',
          'データベースコードをPostgreSQLからDjango ORMに移行し、データ処理とフレームワーク効率を最適化',
          'Apache Airflowでタスクのスケジューリングと管理を行い、定期的な自動データパイプライン収集と堅牢なモニタリングを実現',
          'AWS S3を活用した効率的かつ構造化されたデータストレージにより、収集データへの容易なアクセスと管理を確保',
        ],
      },
    },
  },

  // ── Projects ──
  projects: {
    sectionTitle: 'プロジェクト',
    filter: 'フィルター: ',
    unknownCategory: '不明なカテゴリ "{category}"',
    availableCategories: '利用可能: tool, proj, game',
    tech: '技術: ',
    descriptions: {
      newsflow: 'キーワード検索付きトレンドニュースダッシュボード',
      'event-ticketing-service':
        'イベント閲覧・チケット予約・予約管理ができるイベントチケットプラットフォーム',
      'receipt-processor-service':
        'レシートを処理してリワードポイントを計算するGoウェブサービス',
      'mlb-rumors-analysis':
        'MLBトレード噂のスクレイピング・分析・可視化データパイプライン（感情分析付き）',
      'unit-conversion-service':
        '計測単位間の変換を行うgRPCベースの単位変換サービス',
      asteroid:
        '小惑星を破壊するために宇宙船を操縦するJavaFXアーケードゲーム',
      'vocabulary-practice-app':
        '単語入力とインタラクティブクイズで語彙を学ぶJavaFXデスクトップアプリ',
      'hungry-snake':
        '食べ物を食べて成長しながら衝突を避けるクラシックスネークゲーム',
      'hotel-reservation-application':
        'OOP設計とJava Collectionsを使ったCLIベースのホテル予約システム',
      pycleancodecli:
        'Pythonファイルからコメントと不要な空白を削除するCLIツール',
      'ledger-flux':
        '支出追跡・投資ポートフォリオ管理・マルチ通貨対応のプライバシー重視オフライン家計簿PWA',
    },
  },

  // ── Education ──
  education: {
    sectionTitle: '学歴',
    degree: '情報科学修士',
    period: '2021 - 2023 | シャンペーン、イリノイ州',
    activities: '課外活動',
    activitiesText:
      'HackIllinois: Python Dashを使用してNewsFlowを作成。トレンドニュースとキーワードで記事を検索できる検索バーを搭載',
    courses: '履修科目',
    coursesText:
      'コンピュータネットワーク、データ分析、データベースシステム、分析・データ処理のためのプログラミング、データ・統計モデル・情報',
  },

  // ── Contact ──
  contact: {
    sectionTitle: '連絡先',
    labels: {
      email: 'メール',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'ウェブサイト',
      location: '所在地',
    },
  },

  // ── Recommendations ──
  recommendations: {
    sectionTitle: '推薦文',
    texts: {
      'nick-flink':
        'Kenは、知的でエレガントなソリューションと、それを達成するために必要な粘り強さを重視するあらゆる企業にとって貴重な人材です。彼の好奇心と、複雑な仕様を十分にドキュメント化され、テストされ、読みやすいコードに簡潔化する能力にいつも感心していました。noxとGitlab CIを活用したモダンなベストプラクティスに、Pythonビルドツールを刷新することで即座に成果を上げました。その後、内部プロジェクトに新機能を追加し、以前は利用できなかった測定値へのアクセスを可能にしました。これにより、それまで不可能だった画期的な新しい分析への扉が開かれました。最も印象的だったのは、サイクルを防止するグラフバリデーションのエラーを特定し修正するKenの能力です。非常に複雑なものに深く踏み込み、修正するための理解を得る能力を本当に示していました。将来、再びKenと一緒に働けることを光栄に思います。',
      'chungyu-yang':
        'ソフトウェアエンジニアとして私の下で働いたKen Wuを推薦できることを嬉しく思います。バックエンド面では、Kenはポイントベースのスクラッチゲームの新しいオペレーション手数料システムを設計・実装しました。また、専用のオペレーション手数料テーブルの導入と既存の抽選関連テーブルへの外部キーの追加により、MySQLスキーマを移行し、構造化された保守可能な手数料管理を実現しました。さらに、TerraformによるInfrastructure-as-Codeプラクティスの徹底、GCP環境のリファクタリングによる本番・非本番システムの分離、Kubernetesセットアップの安定化により、システムの信頼性を向上させました。Kenは、技術的判断力に優れた信頼できるエンジニアであり、バックエンド、SRE、またはソフトウェアエンジニアリングの役割に自信を持って推薦します。',
    },
  },

  // ── Resume ──
  resume: {
    sectionTitle: '履歴書',
    download: '履歴書をダウンロード: ',
    explore: 'セクションを見る: ',
  },

  // ── Ask ──
  ask: {
    sectionTitle: 'AIアシスタント',
    comingSoon:
      '近日公開！この機能では、AIに私の経歴や経験について質問できるようになります。',
    meantime:
      'それまでの間、こちらをお試しください: about, experience, skills, projects',
  },

  // ── Theme ──
  theme: {
    switched: 'テーマを{mode}モードに切り替えました。',
  },

  // ── History ──
  history: {
    empty: '履歴にコマンドがありません。',
  },

  // ── Profile content translations ──
  profile: {
    summary:
      '数年にわたるサイト信頼性、ソフトウェア開発、データエンジニアリングの経験を持つソフトウェアエンジニア。Terraform、Python、Java、JavaScriptに精通し、ソフトウェア機能とシステム信頼性の向上に長けています。ソフトウェアエンジニアリングの専門知識を活かし、新たな役割でイノベーションと効率性を推進することを目指しています。',
  },

  // ── Command descriptions ──
  commandDescriptions: {
    help: '利用可能なコマンドを表示',
    about: '自己紹介',
    skills: '技術スキル & 習熟度',
    experience: '職歴',
    projects: 'ポートフォリオプロジェクト',
    education: '学歴',
    contact: '連絡先',
    recommendations: '同僚からの推薦',
    resume: '概要 + PDFダウンロード',
    ask: 'AIに聞く',
    clear: 'ターミナルをクリア',
    theme: 'ダーク/ライトモード切替',
    history: 'コマンド履歴を表示',
    lang: '言語を切り替える',
  },
};
