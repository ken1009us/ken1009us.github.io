import type { TranslationsPartial } from './index';

export const zhTW: TranslationsPartial = {
  // ── Lang command ──
  lang: {
    current: '目前語言: {lang}',
    switched: '語言已切換為{lang}。',
    invalid: '未知語言: "{lang}"',
    available: '可用: en, ja, zh-TW',
    description: '切換語言',
    labels: {
      en: 'English',
      ja: '日本語',
      'zh-TW': '繁體中文',
    },
  },

  // ── Welcome ──
  welcome: {
    greeting: '歡迎來到{name}的互動式終端機作品集。',
    tip: '在下方輸入指令，或執行 <accent>help</accent> 開始探索。',
  },

  // ── Input ──
  input: {
    placeholder: '輸入指令...',
  },

  // ── Errors ──
  errors: {
    notFound: '找不到指令: {cmd}',
    didYouMean: '你是不是要找: ',
    helpHint: '輸入 ',
    helpHintSuffix: ' 查看可用指令。',
  },

  // ── Help ──
  help: {
    usage: '用法: <指令> [選項]',
    aliases: '別名: ',
    shortcuts: 'Tab 自動補全、↑↓ 瀏覽歷史、Ctrl+L 清除畫面',
    commands: {
      about: '顯示個人介紹',
      skills: '列出技術技能',
      experience: '顯示工作經歷',
      projects: '列出專案',
      education: '顯示學歷',
      contact: '顯示聯絡資訊',
      recommendations: '顯示推薦信',
      resume: '查看履歷',
      ask: 'AI 對話（即將推出）',
      theme: '切換主題',
      history: '顯示歷史紀錄',
      clear: '清除畫面',
      lang: '切換語言',
    },
  },

  // ── About ──
  about: {
    sectionTitle: '關於我',
    labels: {
      name: '姓名',
      title: '職稱',
      location: '所在地',
      degree: '學位',
      website: '網站',
    },
  },

  // ── Skills ──
  skills: {
    categories: {
      Languages: '程式語言',
      'Cloud & Infrastructure': '雲端 & 基礎架構',
      'Frameworks & Tools': '框架 & 工具',
    },
  },

  // ── Experience ──
  experience: {
    sectionTitle: '工作經歷',
    noMatch: '找不到符合 "{query}" 的工作經歷',
    available: '可用: {companies}',
    categories: {
      'Data Engineering': '資料工程',
      'Infrastructure/Site Reliability': '基礎架構/網站可靠性',
      'Backend Engineering': '後端工程',
      'Other Contributions': '其他貢獻',
      Engineering: '工程',
      'Frontend Engineering': '前端工程',
    },
    bullets: {
      'treasure-data': {
        'Backend Engineering': [
          '建立即將過期 API 金鑰的自動電子郵件提醒工作流程，協助客戶避免意外的 API 中斷',
          '設計並實作 MySQL 資料庫 schema 變更及後端邏輯，支援可配置的 API 金鑰過期與提醒策略',
          '透過更新認證流程和 Rails 後端端點，主導 API 金鑰過期與提醒機制的實作，防止 API 金鑰無限期使用',
        ],
        'Frontend Engineering': [
          '以 React 開發 API 金鑰管理介面，具備可配置的過期設定和通知橫幅，提升 API 金鑰即將過期的可見性',
        ],
      },
      allstate: {
        'Data Engineering': [
          '使用 Azure Data Factory 設計完整資料管線，將資料處理時間縮短 50%',
          '在 Azure Data Factory 中建立轉換管線，將原始資料轉換為 Parquet 格式，提升資料查詢效能 30%',
          '配置 Azure Blob Storage 系統性儲存原始、已處理及已轉換資料，提供清晰有組織的資料管理系統',
          '設計星型架構用於資料儲存，優化查詢效能並縮短執行時間',
          '使用 Python 開發 ETL 管線，將 CSV 和原始資料載入 PostgreSQL',
          '建立著陸、銅級、隔離和銀級儲存層，改善資料組織和品質控管',
        ],
      },
      thecoo: {
        'Infrastructure/Site Reliability': [
          '透過驗證與 EventBridge 等服務的依賴關係，修復 AWS Lambda 的資源不一致問題，確保所有相關資源正確匯入 Terraform',
          '強化 Infrastructure-as-Code 最佳實踐，減少手動介入，確保完全由 Terraform 管理的雲端環境',
          '透過重構 Node.js 後端和 Terraform 程式碼隔離 GCP 的正式與非正式環境，提升資料存取控制、部署安全性和除錯效率',
          '從 MVP 重構 Kubernetes 環境，重新設計配置並優化資源分配，提升部署穩定性並縮短設定時間',
        ],
        'Backend Engineering': [
          '根據不同交易類型為點數發放日誌表新增索引，提升查詢效率',
          '在 Node.js 中設計 Redis session 儲存機制，支援基於使用者 ID 的 session 刪除，實現跨裝置強制登出',
          '在關鍵 API 路由中整合強制登出機制，用於帳號刪除/密碼重設時的 session 失效',
          '遷移 MySQL schema，新增營運手續費表格及對既有表格的外鍵關聯',
          '撰寫 Jest 整合測試，涵蓋 session 建立、取得、刪除和強制登出流程',
        ],
        'Other Contributions': [
          '以 Node.js 開發 Slack 機器人，將 HR 文件的取得時間從數分鐘縮短至數秒',
          '實作 Slack API 呼叫，根據使用者查詢搜尋頻道訊息',
          '使用 Google Drive API 列出/篩選文件，並在 Slack 中回傳檔名+連結',
        ],
      },
      physiq: {
        Engineering: [
          '使用 Node.js 設計並實作 Slack 機器人，將新進員工入職時間縮短 33%（每人約節省 4 小時）',
          '使用 Python Flask 開發網頁版產能計算工具，讓員工能準確估算可用工時，使資源分配改善 20%',
          '主導演算法管線遷移以支援即時健康監測，使關鍵健康資料屬性可被監聽',
          '透過整合 Python Nox 函式庫，改善專案建置自動化並促進跨平台開發',
          '透過在 Linux 上除錯，解決 Kotlin 和 MySQL RESTful API 後端的資料擷取問題，更新 MySQL 查詢和 Kotlin 驗證方法',
          '利用 MySQL 的 fixture 集產生測試資料，驗證新管線輸出的準確性和可靠性',
        ],
      },
      ponddy: {
        Engineering: [
          '建立 Python 網頁爬蟲工具，自動從超過 10,000 篇文章中彙整資料，將資料彙整時間縮短約 90%',
          '使用 AWS EC2 執行個體運行和管理資料管線，確保高可用性和效能',
          '將資料庫程式碼從 PostgreSQL 遷移到 Django ORM，優化資料處理和框架效率',
          '使用 Apache Airflow 排程和管理任務，確保定期自動化的資料管線收集及穩健的監控',
          '利用 AWS S3 進行高效且結構化的資料儲存，確保收集資料的便捷存取和管理',
        ],
      },
    },
  },

  // ── Projects ──
  projects: {
    sectionTitle: '專案',
    filter: '篩選: ',
    unknownCategory: '未知分類 "{category}"',
    availableCategories: '可用: tool, proj, game',
    tech: '技術: ',
    descriptions: {
      newsflow: '具有關鍵字搜尋功能的趨勢新聞儀表板',
      'event-ticketing-service':
        '可瀏覽活動、預訂票券和管理預約的活動售票平台',
      'receipt-processor-service': '處理收據並計算獎勵點數的 Go 網路服務',
      'mlb-rumors-analysis':
        'MLB 交易傳聞的爬蟲、分析和視覺化資料管線（含情緒分析）',
      'unit-conversion-service': '基於 gRPC 的計量單位轉換服務',
      asteroid: '駕駛太空船摧毀小行星的 JavaFX 街機遊戲',
      'vocabulary-practice-app':
        '透過單字輸入和互動測驗學習詞彙的 JavaFX 桌面應用程式',
      'hungry-snake': '吃食物成長同時避免碰撞的經典貪食蛇遊戲',
      'hotel-reservation-application':
        '使用物件導向設計和 Java Collections 的 CLI 飯店訂房系統',
      pycleancodecli: '清除 Python 檔案中的註解和多餘空白的 CLI 工具',
      'ledger-flux':
        '注重隱私的離線個人記帳 PWA，支援支出追蹤、投資組合監控及多幣別功能',
    },
  },

  // ── Education ──
  education: {
    sectionTitle: '學歷',
    degree: '資訊科學碩士',
    period: '2021 - 2023 | 香檳城，伊利諾州',
    activities: '課外活動',
    activitiesText:
      'HackIllinois：使用 Python Dash 製作 NewsFlow，具備趨勢新聞和關鍵字文章搜尋功能',
    courses: '修習課程',
    coursesText:
      '電腦網路、資料分析、資料庫系統、分析與資料處理程式設計、資料·統計模型與資訊',
  },

  // ── Contact ──
  contact: {
    sectionTitle: '聯絡資訊',
    labels: {
      email: '電子郵件',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: '網站',
      location: '所在地',
    },
  },

  // ── Recommendations ──
  recommendations: {
    sectionTitle: '推薦信',
    texts: {
      'nick-flink':
        'Ken 對任何重視智慧優雅解決方案及實現這些方案所需毅力的公司來說，都將是一項寶貴資產。他的好奇心以及將複雜規格簡化為文件完善、經過測試且易於閱讀的程式碼的能力，總是讓我印象深刻。他利用 nox 和 Gitlab CI 的現代最佳實踐來改革 Python 建置工具，立即產生了影響。隨後他為我們的內部專案添加了新功能，使其能夠存取先前無法獲得的量測數據。這為一些先前不可能實現的革命性新分析打開了大門。最令我印象深刻的是 Ken 識別並修復圖形驗證中防止循環錯誤的能力。這真正展示了他深入研究相當複雜事物並獲得修復理解的能力。將來能再次與 Ken 共事將是我的榮幸。',
      'chungyu-yang':
        '我很高興推薦在我管理下擔任軟體工程師的 Ken Wu。在後端方面，Ken 設計並實作了點數刮刮卡遊戲的新營運手續費系統。他還透過引入專用的營運手續費表格和對現有抽獎相關表格添加外鍵來遷移 MySQL schema，確保結構化且可維護的手續費管理。此外，Ken 透過使用 Terraform 強化 Infrastructure-as-Code 實踐、重構 GCP 環境以隔離正式與非正式系統，以及穩定 Kubernetes 設定，提升了系統可靠性。Ken 是一位技術判斷力強且值得信賴的工程師，我有信心推薦他擔任後端、SRE 或軟體工程角色。',
    },
  },

  // ── Resume ──
  resume: {
    sectionTitle: '履歷',
    download: '下載完整履歷: ',
    explore: '探索各區塊: ',
  },

  // ── Ask ──
  ask: {
    sectionTitle: 'AI 助手',
    comingSoon: '即將推出！此功能將讓您向 AI 詢問有關我的背景和經歷的問題。',
    meantime:
      '在此之前，請試試: about, experience, skills, projects',
  },

  // ── Theme ──
  theme: {
    switched: '主題已切換為{mode}模式。',
  },

  // ── History ──
  history: {
    empty: '歷史紀錄中沒有指令。',
  },

  // ── Profile content translations ──
  profile: {
    summary:
      '擁有多年網站可靠性、軟體開發和資料工程經驗的資深軟體工程師。精通 Terraform、Python、Java 和 JavaScript，擅長提升軟體功能和系統可靠性。期望運用軟體工程專業知識，在新的崗位上推動創新與效率。',
  },

  // ── Command descriptions ──
  commandDescriptions: {
    help: '顯示可用指令',
    about: '我是誰？',
    skills: '技術技能 & 熟練度',
    experience: '工作經歷',
    projects: '作品集專案',
    education: '學術背景',
    contact: '聯絡方式',
    recommendations: '同事推薦',
    resume: '摘要 + PDF 下載',
    ask: '向 AI 提問',
    clear: '清除終端機',
    theme: '深色/淺色模式切換',
    history: '顯示指令歷史',
    lang: '切換語言',
  },
};
