# 🚀 반응형 포트폴리오 웹사이트 (Responsive Portfolio Site)

React, Tailwind CSS, Vite를 기반으로 제작된 모던 반응형 개발자 포트폴리오 웹사이트입니다.

## ✨ 주요 기능 및 특징

1. **상단 3분할 Hero 헤더 레이아웃**
   - **왼쪽**: 프로필 사진, 직무, 이메일 간편 복사, GitHub, 블로그, 링크드인, 이력서 링크
   - **가운데**: 슬로건, 핵심 자기소개 요약, 주요 강점 하이라이트 및 핵심 기술 스택
   - **오른쪽**: `프로젝트 1`, `프로젝트 2`, `경력`, `자격증`, `활동 및 교육` 퀵 내비게이션 카드
2. **부드러운 스크롤 (Smooth Scrolling & Scrollspy)**
   - 상단 메뉴 선택 시 해당 섹션으로 부드럽게 스르륵 스크롤 이동
   - 화면을 스크롤할 때 현재 읽고 있는 섹션이 실시간으로 하이라이트
3. **완벽한 반응형 (Responsive Design)**
   - 데스크톱 (3열 분할) ➔ 태블릿 및 모바일 (1열 카드 스택 & 모바일 햄버거 메뉴)
4. **다크 모드 & 라이트 모드 지원**
   - 사용자 브라우저 환경 자동 감지 및 원클릭 토글 버튼 제공 (로컬 스토리지 상태 저장)
5. **손쉬운 데이터 수정 (`src/data/portfolioData.js`)**
   - 복잡한 코드 수정 없이 단 하나의 데이터 파일에서 이름, 사진, 링크, 프로젝트 내용, 경력, 자격증 등을 바로 변경 가능

---

## 🛠️ 실행 및 빌드 방법

### 1. 개발 서버 실행
```bash
npm run dev
# 또는
npm.cmd run dev
```
브라우저에서 `http://localhost:5173`으로 접속합니다.

### 2. 프로덕션 빌드
```bash
npm run build
# 또는
npm.cmd run build
```
빌드된 파일은 `dist/` 폴더에 생성되며, GitHub Pages나 Vercel, Netlify 등에 바로 배포할 수 있습니다.

---

## 📝 내 정보로 수정하기 (커스터마이징)

`src/data/portfolioData.js` 파일을 열어 다음 정보를 본인의 정보로 변경하세요:

```javascript
export const portfolioData = {
  profile: {
    name: "본인 이름",
    role: "직무 (예: Frontend Developer)",
    avatar: "프로필 사진 URL",
    statusBadge: "구직 상태 또는 슬로건",
    email: "이메일 주소",
    github: "GitHub 링크",
    blog: "블로그 링크",
    linkedin: "링크드인 링크",
    resumeUrl: "#",
  },
  about: {
    // 한 줄 슬로건, 자기소개 및 기술 스택
  },
  projects: [
    // 프로젝트 1, 2의 내용, 사용 기술, 데모 링크 등
  ],
  careers: [
    // 회사명, 역할, 기간, 주요 성과
  ],
  certifications: [
    // 자격증명, 발급기관, 취득일
  ],
  education: [
    // 부트캠프, 대외활동, 학력 정보
  ]
};
```