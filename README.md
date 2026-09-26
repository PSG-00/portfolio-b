# 🚀 백엔드 엔지니어링 포트폴리오 (Responsive Portfolio Site)

React, Tailwind CSS, Vite를 기반으로 제작된 백엔드 개발자(박성국)의 모던 반응형 포트폴리오 웹사이트입니다.  
단순한 화면 나열을 넘어 **대용량 미디어 데이터 수집, K6 부하 테스트 기반 성능 최적화, 무중단 배포 및 온프레미스(홈랩) 인프라 운영** 경험을 입체적으로 전달합니다.

---

## ✨ 주요 기능 및 특징

### 1. 상단 3분할 Hero 헤더 레이아웃 (`PROFILE` | `ABOUT` | `INDEX`)
- **PROFILE**: 프로필 사진, 직무(Backend Developer), 학력, 이메일 간편 복사, GitHub, 블로그, 링크드인, 최신 이력서 PDF 다운로드
- **ABOUT**: 
  - 핵심 엔지니어링 요약: 대용량 미디어 데이터 무유실 수집, 10만 건 & 200명 동시 부하 최적화, AWS 무중단 배포 및 온프레미스 비용 절감
  - 3대 핵심 성과 하이라이트 (장애 격리·복구, 트래픽 성능 최적화, 고가용성 인프라)
  - 주요 기술 스택 (`|` 구분점으로 가독성 개선)
- **INDEX**: 프로젝트 1·2, 경력, 활동 및 교육, 자격증 섹션으로 원클릭 스크롤 이동

### 2. 배포 및 운영 환경 모달 (`InfraStatusBadge`)
- 상단 네비게이션 바의 **`배포 및 운영 환경`** 버튼을 통해 실제 서비스 인프라 구성 현황을 원클릭 팝오버로 제공
  - **포트폴리오 웹사이트**: GitHub Actions 빌드 & GitHub Pages 자동 배포
  - **프로젝트 라이브 데모**: 클라우드 비용 절감을 위한 홈랩(HomeLab) & Cloudflare Tunnel 운영
  - **클라우드 아키텍처**: AWS ALB · ECS Fargate 무중단 롤링 배포 검증

### 3. 프로젝트 기술 분석 및 상세 페이지 (`/project/:id`)
- 프로젝트 카드에서 **`기술 분석 및 상세 보기 →`** 링크를 통해 심층 기술 문서로 이동
- **ACT 01 & ACT 02 엔지니어링 스토리**:
  - **Problem & Hypothesis**: 수집 중단, DB 커넥션 고갈, 동시 부하 응답 지연 등 문제 가설 수립
  - **Solution Pipeline**: 서킷 브레이커, 체크포인트 복구, Elasticsearch 전환, K6 시나리오 설계
  - **Result & Impact**: P95 응답 지연 98.7% 단축(1,020ms ➔ 13.02ms), 200명 부하 에러율 0.00%, 아키텍처 다이어그램 및 K6 실측 증빙 이미지 뷰어 제공

### 4. 반응형 스크롤스파이 & 테마 지원
- **Scrollspy**: 화면 스크롤 위치에 맞춰 현재 보고 있는 섹션을 상단 내비게이션에 실시간 하이라이트
- **다크 모드 & 라이트 모드**: 브라우저 환경 자동 감지 및 로컬 스토리지 상태 저장 토글
- **모바일 최적화**: 모바일 햄버거 메뉴, 1열 스택 재배치 및 `word-break: keep-all` 기반의 자연스러운 어절 줄바꿈

### 5. 손쉬운 데이터 수정 (`src/data/portfolioData.js`)
- 단 하나의 데이터 파일에서 프로필, 자기소개, 프로젝트 내용, ACT 엔지니어링 스토리, 경력, 교육, 자격증 정보를 일괄 관리

---

## 🛠️ 실행 및 빌드 방법

### 1. 개발 서버 실행
```bash
npm run dev
# Windows PowerShell 환경:
npm.cmd run dev
```
브라우저에서 `http://localhost:5173`으로 접속합니다.

### 2. 프로덕션 빌드
```bash
npm run build
# Windows PowerShell 환경:
npm.cmd run build
```
빌드된 파일은 `dist/` 폴더에 생성되며, GitHub Pages나 Vercel, Netlify 등에 바로 배포할 수 있습니다.

### 3. 자동 배포 (GitHub Pages CI/CD)
- `main` 브랜치에 코드가 푸시되면 `.github/workflows/deploy.yml`을 통해 자동으로 빌드 및 GitHub Pages 배포가 실행됩니다.

---

## 📝 데이터 커스터마이징 (`src/data/portfolioData.js`)

`src/data/portfolioData.js` 파일을 열어 다음 정보를 본인의 정보로 변경할 수 있습니다:

```javascript
export const portfolioData = {
  profile: {
    name: "박성국",
    role: "Backend Developer",
    avatar: "./profile.jpg",
    statusBadge: "PROFILE",
    email: "cdjsdj1902@gmail.com",
    github: "https://github.com/PSG-00",
    blog: "https://memo50984.tistory.com",
    linkedin: "https://www.linkedin.com/in/...",
    resumeUrl: "#",
  },
  about: {
    // 헤드라인, 3줄 소개 멘트, 하이라이트 3선, 기술 스택
  },
  projects: [
    // MOPL, MONEW 프로젝트 메타데이터 및 ACT 01/02 엔지니어링 스토리
  ],
  careers: [
    // 경력 사항
  ],
  education: [
    // 활동 및 교육
  ],
  certifications: [
    // 자격증 정보
  ]
};
```