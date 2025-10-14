# Enjoyment Luxury Hotel - Claude Code Context

## Project Overview

This is a hotel booking practice website built with React.js. It provides features for users to view and book room types, with member login, registration, and order management capabilities. This project serves as a classroom collaboration project for practicing React frontend development and team collaboration workflows.

## Tech Stack

- **Frontend Framework**: React.js + Vite
- **UI Tools**: Tailwind CSS
- **Routing**: React Router (Data Mode)
- **API Handling**: fetch
- **Version Control**: Git Flow
- **Code Quality**: ESLint (Airbnb) + Prettier
- **Deployment**: Github Pages

## Project Structure

```
enjoyment-luxury-hotel/
├── src/
│   ├── components/
│   │   ├── pages/          # Page components
│   │   ├── shared/         # Shared components
│   │   └── [PageFolder]/   # Multi-component pages (Home, About, etc.)
│   │       ├── Section.jsx
│   │       ├── Part.jsx
│   │       └── index.jsx   # Main component (lowercase index)
│   ├── assets/             # Images, icons, fonts
│   ├── index.css           # Global styles or Tailwind config
│   ├── Router.jsx          # Router file
│   └── main.jsx            # Entry file
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
└── index.html              # Entry HTML
```

## Git Flow Rules

### Branch Naming

- **main**: Stable version, production-ready
- **dev**: Development integration branch
- **Feature-[feature-name]**: New feature development (e.g., Feature-home-page)
- **Fix-[issue-name]**: Bug fixes (e.g., Fix-api-bug)
- **Update-[update-name]**: File updates (e.g., Update-project-spec)

### Commit Message Convention

Use the following prefixes:

- `feat:` New feature
- `fix:` Bug fix
- `style:` Styling changes (no functionality impact)
- `docs:` Documentation updates
- `refactor:` Code refactoring (no functionality impact)
- `chore:` Other miscellaneous changes (config files, dependency updates, etc.)

### Development Workflow

1. Create a new branch from `dev`:

   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b Feature-[feature-name]
   ```

2. Develop and commit changes

3. Push branch and create Pull Request (PR):

   ```bash
   git push origin Feature-[feature-name]
   ```

4. Assign team member for Code Review

5. Merge back to `dev`

6. After testing, manager creates a release branch with version number (e.g., `dev-v001`)

7. Merge release branch to `main` for deployment: `dev-v001 → main`

## Main Branch

main

## API Rules

### API Base URL

使用環境變數管理 API 基礎網址：

```javascript
const baseUrl = import.meta.env.VITE_API_BASE
```

- 在 `.env` 檔案中設定：`VITE_API_BASE=https://nuxr3.zeabur.app`

### API 結構與規範

#### 1. 基本請求結構

所有 API 請求應遵循以下模式：

```javascript
const baseUrl = import.meta.env.VITE_API_BASE

const res = await fetch(`${baseUrl}/api/v1/API路徑`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

const data = await res.json()

if (!res.ok) {
  throw new Error(data.message || '請求失敗')
}

return data
```

#### 2. 認證請求

需要認證的端點應在 headers 中加入 token（使用 Cookie 管理）：

```javascript
import { getCookie } from '../utils/cookie'

const token = getCookie('customTodoToken')

const res = await fetch(`${baseUrl}/api/v1/API路徑`, {
  method: 'GET',
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
  },
})
```

**Cookie 工具函式**：

```javascript
// 設定 Cookie
import { setCookie } from '../utils/cookie'
setCookie('customTodoToken', token)

// 取得 Cookie
import { getCookie } from '../utils/cookie'
const token = getCookie('customTodoToken')

// 刪除 Cookie
import { deleteCookie } from '../utils/cookie'
deleteCookie('customTodoToken')
```

#### 3. API 端點分類

**Home & Rooms**

- `GET /api/v1/home/culinary` - 取得美食資訊
- `GET /api/v1/home/news/` - 取得最新消息
- `GET /api/v1/rooms/` - 取得所有房型
- `GET /api/v1/rooms/:id` - 取得單一房型詳情

**User Authentication**

- `POST /api/v1/user/signup` - 使用者註冊
- `POST /api/v1/user/login` - 使用者登入
- `GET /api/v1/user/check` - 驗證登入狀態 (需 token)
- `GET /api/v1/user/` - 取得使用者資料 (需 token)
- `PUT /api/v1/user/` - 更新使用者資料 (需 token)
- `POST /api/v1/user/forget` - 忘記密碼

**Email Verification**

- `POST /api/v1/verify/email` - 驗證 email
- `POST /api/v1/verify/generateEmailCode` - 產生驗證碼

**Orders**

- `GET /api/v1/orders/` - 取得使用者所有訂單 (需 token)
- `POST /api/v1/orders/` - 建立新訂單 (需 token)
- `GET /api/v1/orders/:id` - 取得單一訂單 (需 token)
- `DELETE /api/v1/orders/:id` - 刪除訂單 (需 token)

#### 4. 錯誤處理

所有 API 函式都應包含錯誤處理：

```javascript
if (!res.ok) {
  throw new Error(data.message || '自訂錯誤訊息')
}
```

#### 5. 使用 AbortSignal

對於可能被取消的請求（如組件卸載時），使用 `signal` 參數：

```javascript
const fetchWithSignal = async (path, signal) => {
  const res = await fetch(`${baseUrl}${path}`, { signal })
  const { result } = await res.json()
  return result
}
```

#### 6. API 檔案組織

將 API 函式依功能分類到不同檔案：

- `src/api/home-api.js` - 首頁相關 API
- `src/api/usersApi.js` - 使用者相關 API
- `src/api/ordersApi.js` - 訂單相關 API
- `src/api/auth-api.js` - 認證相關 API（整合版）

#### 7. Best Practices

1. **環境變數**：使用 `import.meta.env.VITE_API_BASE` 而非寫死網址
2. **Token 管理**：統一使用 `getCookie('customTodoToken')` 管理認證
3. **錯誤訊息**：提供中文錯誤訊息給使用者
4. **回傳格式**：統一回傳 `data` 物件或 `result` 屬性
5. **程式碼重用**：考慮建立共用的 `apiRequest` 函式處理重複邏輯
6. **型別安全**：export 個別函式而非 default export
7. **Cookie 工具**：使用 `src/utils/cookie.js` 提供的工具函式管理 Cookie
