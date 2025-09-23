# Enjoyment Luxury Hotel 享樂旅店

一個使用 React.js 製作的旅館練習網站，提供使用者查看、預訂房型，並且有會員登入、註冊、查看訂單等功能。  
專案主要作為課堂協作專案，練習 React 前端開發與團隊合作流程。

---

## 🛠️ 使用技術

- **前端框架**：React.js + Vite
- **UI 工具**：Tailwind CSS
- **路由管理**：React Router (Data Mode)
- **API 處理**：fetch
- **版控流程**：Git Flow
- **格式控管**：ESLint（Airbnb）+ Prettier
- **雲端部署**：Github Pages

---

## 📂 專案資料夾結構
```
    .
└── enjoyment-luxury-hotel/
    ├── src/
    │   ├── components/ → 元件
    │   │   ├── pages/ → 頁面元件
    │   │   ├── shared/ → 共用元件
    │   │   └── 頁面資料夾 (Home, About, etc.)/ → 如果頁面需拆分多元件
    │   │       ├── Section.jsx...
    │   │       ├── Part.jsx...
    │   │       └── index.jsx → 主元件 小寫index
    │   ├── assets/ → 圖片、icon、字型
    │   ├── index.css → 全域樣式或 Tailwind 設定
    │   ├── Router.jsx → 路由檔案
    │   └── main.jsx → 入口檔案
    ├── vite.config.js → Vite 設定檔
    ├── package.json → 專案依賴與指令
    ├── index.html → 專案入口 HTML
    └── README.md 
```
## 🌱 Git Flow 規範

### 1. 分支規則

- **main**：穩定版本，可上線
- **dev**：開發整合分支
- **Feature**-_功能名稱_：新功能開發 例如 : Feature-home-page
- **Fix**-_問題名稱_：錯誤修正 例如 : Fix-api-bug
- **Update**-_問題名稱_：更新檔案 例如 : Update-project-spec

---

### 2. Commit 規範

請遵循以下前綴：

- `feat:` 新增功能
- `fix:` 修正 bug
- `style:` 樣式調整 (不影響功能)
- `docs:` 文件更新
- `refactor:` 重構程式碼 (不影響功能)
- `chore:` 其他雜項 (設定檔、相依套件更新等)

---

### 3. 開發流程

1. 從 `dev` 建立新分支

   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b Feature-功能名稱

   ```

2. 開發並提交 Commit
   - Push 分支並發 Pull Request (PR)
   - git push origin Feature-功能名稱
   - 指派同學做 Code Review
   - 合併回 dev
   - 測試完成後，由管理者從 dev 開一支上線用 branch 並帶版本號，例如 : dev-v001
   - 再將這支 merge 進 main 做上線 dev-v001 → main
