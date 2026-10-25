// 메인 스크립트

// 다크모드 토글: html.dark 클래스를 바꾸고 localStorage에 저장
function initThemeToggle() {
  const root = document.documentElement;
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  // 해/달 아이콘은 CSS가 html.dark 여부로 전환하므로, 여기서는 접근성 속성만 갱신
  const updateButton = () => {
    const isDark = root.classList.contains('dark');
    toggleButton.setAttribute('aria-pressed', String(isDark));
  };

  toggleButton.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // 저장이 막힌 환경에서는 현재 세션에서만 적용
    }
    updateButton();
  });

  // 사용자가 직접 고른 적이 없으면 OS 다크모드 설정 변경을 따라간다
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', (event) => {
    let hasSavedTheme = false;
    try {
      hasSavedTheme = localStorage.getItem('theme') !== null;
    } catch (error) {
      // 읽기가 막힌 환경에서는 저장된 값이 없는 것으로 취급
    }
    if (hasSavedTheme) return;
    root.classList.toggle('dark', event.matches);
    updateButton();
  });

  updateButton();
}

// 모바일 메뉴 열기/닫기
function initMobileMenu() {
  const menuButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!menuButton || !menu) return;

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('hidden', !isOpen);
    menu.classList.toggle('flex', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  // 메뉴 항목을 누르면 모바일 메뉴 닫기
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
}

// 스크롤 위치에 맞춰 내비게이션 활성화
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('#nav-menu a');
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === `#${entry.target.id}`;
          if (isActive) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    // 화면 중앙 부근에 들어온 섹션을 현재 섹션으로 간주
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

// 섹션이 화면에 들어오면 등장 애니메이션 실행
function initRevealOnScroll() {
  const targets = document.querySelectorAll('.reveal');

  // IntersectionObserver를 쓸 수 없으면 바로 모두 표시
  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((target) => observer.observe(target));
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initActiveNav();
  initRevealOnScroll();
});
