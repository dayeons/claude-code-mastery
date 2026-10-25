# 개발자 웹 이력서 ROADMAP

## 1. 프로젝트 개요

- **목표**: 개발자 포트폴리오용 단일 페이지 웹 이력서 제작 및 배포
- **기술 스택**
  - HTML5: 시맨틱 마크업
  - CSS: 커스텀 스타일 및 애니메이션
  - JavaScript (ES6+): 인터랙션 구현
  - TailwindCSS: 유틸리티 기반 스타일링 (CDN으로 시작)

## 2. 이력서 섹션 구성

| 섹션 | 내용 |
| --- | --- |
| 헤더 | 이름, 직무(예: 프론트엔드 개발자), 이메일, GitHub 링크 |
| 소개 | 2~3줄 자기소개 |
| 기술 스택 | HTML, CSS, JavaScript, TailwindCSS, Git 등 |
| 경력 | 회사명, 기간, 담당 업무 (최근순) |
| 프로젝트 | 프로젝트명, 설명, 사용 기술, 링크 |
| 학력 | 학교명, 전공, 기간 |
| 연락처 | 이메일, GitHub, 블로그 |

> 모든 내용은 예시용 더미 데이터로 작성하고, 이후 실제 정보로 교체합니다.

## 3. 폴더 구조

```
claude-code-mastery/
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── assets/
│   └── images/
├── ROADMAP.md
└── README.md
```

## 4. 개발 단계

### Phase 1. 프로젝트 세팅
- [x] `index.html` 기본 골격 작성 (`lang="ko"`, viewport 메타 태그)
- [x] `src/css/style.css`, `src/js/main.js` 생성 및 연결
- [x] Tailwind CDN 연결
- [x] 폴더 구조 정리

**완료 기준**: 브라우저에서 빈 페이지가 오류 없이 열린다.

### Phase 2. 시맨틱 마크업
- [x] `header`, `nav`, `main`, `section`, `footer` 구조 작성
- [x] 소개, 기술 스택, 경력, 프로젝트, 학력, 연락처 섹션 작성
- [x] 헤딩 계층(h1~h3) 및 이미지 `alt` 속성 점검 (이미지는 아직 없음)

**완료 기준**: 스타일 없이도 내용 구조가 자연스럽게 읽힌다.

### Phase 3. 스타일링 및 반응형
- [x] Tailwind 유틸리티 클래스로 레이아웃 구성
- [x] 색상, 폰트, 간격 등 디자인 톤 통일
- [x] 모바일 / 태블릿 / 데스크톱 반응형 적용 (`sm:`, `md:`, `lg:`)
- [x] 필요한 부분만 `style.css`로 커스텀 스타일 추가 (현재 필요한 커스텀 스타일 없음)

**완료 기준**: 320px ~ 1440px 너비에서 레이아웃이 깨지지 않는다.

### Phase 4. JavaScript 인터랙션
- [x] 네비게이션 클릭 시 부드러운 스크롤 (CSS `scroll-behavior`)
- [x] 현재 위치에 맞춰 네비게이션 활성화 (IntersectionObserver)
- [x] 다크모드 토글 (localStorage에 설정 저장)
- [x] 섹션 등장 애니메이션
- [x] 모바일 메뉴 열기/닫기

**완료 기준**: 모든 인터랙션이 콘솔 에러 없이 동작한다.

### Phase 5. 품질 점검 및 배포
- [ ] Lighthouse 점검 (성능, 접근성, SEO 90점 이상 목표)
- [ ] 키보드 탐색 및 색상 대비 확인
- [ ] 메타 태그 (title, description, OG) 작성
- [ ] GitHub Pages로 배포
- [ ] `README.md`에 배포 주소 기록

**완료 기준**: 배포 URL에서 정상 접속되고 Lighthouse 목표 점수를 달성한다.

## 5. 향후 확장 (선택)

- [ ] PDF 다운로드 버튼 (인쇄용 스타일 `@media print`)
- [ ] 한국어 / 영어 전환
- [ ] Tailwind CLI 빌드로 전환하여 CSS 최적화
- [ ] 프로젝트 데이터를 JSON으로 분리하여 동적 렌더링
