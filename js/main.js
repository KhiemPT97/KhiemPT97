/**
 * PORTFOLIO CLIENT-SIDE SCRIPT
 * Focus: 100% Pure Native Mobile Engineer (iOS Native & Android Native)
 */

// --- DATA: TECH STACK & SKILLS (PURE NATIVE MOBILE FOCUSED) ---
const SKILLS_DATA = [
  // 1. iOS Native Core
  {
    name: 'Swift',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=swift',
    level: 'Advanced / Core iOS',
    isCore: true
  },
  {
    name: 'SwiftUI',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=apple',
    level: 'Declarative UI / iOS 17+',
    isCore: true
  },
  {
    name: 'UIKit',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=apple',
    level: 'Deep Experience / AutoLayout',
    isCore: true
  },
  {
    name: 'Combine & Concurrency',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=apple',
    level: 'Async/Await & Reactive',
    isCore: true
  },
  {
    name: 'CoreData / SwiftData',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=apple',
    level: 'Local Persistence & Sync',
    isCore: true
  },

  // 2. Android Native Core
  {
    name: 'Kotlin',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=kotlin',
    level: 'Advanced / Core Android',
    isCore: true
  },
  {
    name: 'Jetpack Compose',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=androidstudio',
    level: 'Modern Declarative UI',
    isCore: true
  },
  {
    name: 'Coroutines & Flow',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=kotlin',
    level: 'Asynchronous & StateFlow',
    isCore: true
  },
  {
    name: 'Room DB & Hilt',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=sqlite',
    level: 'DI & SQLite Persistence',
    isCore: true
  },
  {
    name: 'Android SDK & Gradle',
    category: 'mobile-native',
    icon: 'https://skillicons.dev/icons?i=gradle',
    level: 'Build Automation & Lifecycle',
    isCore: true
  },

  // 3. Mobile Architecture & Store CI/CD
  {
    name: 'Clean Architecture & MVVM-C',
    category: 'mobile-arch',
    icon: 'https://skillicons.dev/icons?i=git',
    level: 'Design Patterns & Modularity',
    isCore: true
  },
  {
    name: 'Fastlane & Store CI/CD',
    category: 'mobile-arch',
    icon: 'https://skillicons.dev/icons?i=githubactions',
    level: 'Automated Deployment',
    isCore: true
  },
  {
    name: 'App Store & Google Play',
    category: 'mobile-arch',
    icon: 'https://skillicons.dev/icons?i=apple',
    level: 'Release Management & Guidelines',
    isCore: true
  },
  {
    name: 'Firebase & Push Notification',
    category: 'mobile-arch',
    icon: 'https://skillicons.dev/icons?i=firebase',
    level: 'APNs, FCM, Analytics & Auth',
    isCore: true
  },

  // 4. Supporting Stack (Backend, Web, AI)
  {
    name: 'Node.js / Express',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=nodejs',
    level: 'Backend APIs for Apps',
    isCore: false
  },
  {
    name: 'Python',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=py',
    level: 'Scripting & AI Tools',
    isCore: false
  },
  {
    name: 'CoreML / TFLite',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=tensorflow',
    level: 'On-Device Machine Learning',
    isCore: false
  },
  {
    name: 'React / Next.js',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=nextjs',
    level: 'Web CMS & Portals',
    isCore: false
  },
  {
    name: 'Docker',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=docker',
    level: 'Containerized Services',
    isCore: false
  },
  {
    name: 'PostgreSQL / Supabase',
    category: 'supporting',
    icon: 'https://skillicons.dev/icons?i=postgres',
    level: 'Relational Database',
    isCore: false
  }
];

// --- DATA: FEATURED PURE NATIVE MOBILE PROJECTS ---
const FEATURED_PROJECTS = [
  {
    title: 'iOS Smart Health & Activity Tracker',
    platform: 'iOS Native (Swift 6 & SwiftUI)',
    desc: 'Ứng dụng iOS Native theo dõi sức khỏe và luyện tập cá nhân hóa xây dựng bằng SwiftUI & CoreData, tích hợp Apple HealthKit, WidgetKit và Live Activities Dynamic Island.',
    tags: ['Swift', 'SwiftUI', 'HealthKit', 'WidgetKit', 'CoreData', 'MVVM-C'],
    githubUrl: 'https://github.com/',
    demoUrl: ''
  },
  {
    title: 'Android Native E-Commerce & Delivery App',
    platform: 'Android Native (Kotlin & Jetpack Compose)',
    desc: 'Ứng dụng mua sắm và giao hàng thời gian thực với Jetpack Compose, Material 3, Coroutines, Flow, Dagger-Hilt, Room Database và tích hợp Google Maps SDK.',
    tags: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Hilt', 'Room DB', 'Material 3'],
    githubUrl: 'https://github.com/',
    demoUrl: ''
  },
  {
    title: 'iOS Native Audio Streaming & Equalizer',
    platform: 'iOS Native (Swift & UIKit / AVFoundation)',
    desc: 'Ứng dụng phát nhạc chuyên nghiệp với AudioKit và AVFoundation, xử lý âm thanh nền Background Audio, tối ưu hóa bộ nhớ không giật lag qua Instruments.',
    tags: ['Swift', 'UIKit', 'AVFoundation', 'Combine', 'Background Task', 'CoreAudio'],
    githubUrl: 'https://github.com/',
    demoUrl: ''
  },
  {
    title: 'AI Smart Camera: On-Device Real-time Vision',
    platform: 'Native Mobile (CoreML & TensorFlow Lite)',
    desc: 'Ứng dụng camera thông minh nhận diện vật thể và xử lý ảnh theo thời gian thực sử dụng Vision framework & CoreML trên iOS và CameraX & TensorFlow Lite trên Android.',
    tags: ['CoreML', 'TFLite', 'Vision Framework', 'CameraX', 'AVFoundation'],
    githubUrl: 'https://github.com/',
    demoUrl: ''
  }
];

// --- CODE TABS CONTENT (NATIVE MOBILE CODE) ---
const CODE_SNIPPETS = {
  swift: `// iOS Native: Swift 6 & SwiftUI
import SwiftUI

struct NativeiOSProfile: View {
    let engineer = "Phương Thanh Khiêm (Kris)"
    let role = "iOS Native Specialist"
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("Swift 6 • SwiftUI • UIKit", systemImage: "apple.logo")
            Label("Combine • Swift Concurrency (async/await)", systemImage: "bolt.fill")
            Label("CoreData • SwiftData • Instruments", systemImage: "internaldrive")
            Label("App Store Connect & TestFlight CI/CD", systemImage: "arrow.up.circle.fill")
        }
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 16))
    }
}`,
  kotlin: `// Android Native: Kotlin & Jetpack Compose
package dev.kris.profile

import androidx.compose.runtime.Composable
import androidx.compose.material3.*

@Composable
fun NativeAndroidProfile() {
    Card(shape = MaterialTheme.shapes.large) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Android Native Specialist", style = MaterialTheme.typography.titleLarge)
            Text("• Modern Stack: Kotlin + Jetpack Compose")
            Text("• Async & Reactive: Coroutines & StateFlow")
            Text("• Architecture: Clean Architecture + MVI/MVVM")
            Text("• DI & Storage: Dagger-Hilt, Room Database")
            Text("• Google Play Store Publishing & Guidelines")
        }
    }
}`,
  architecture: `// Native Mobile Architecture: Clean & Modular
// Domain / Data / Presentation Separation

// 1. Domain Layer (Pure Swift / Kotlin)
protocol FetchUserProfileUseCase {
    func execute() async throws -> UserProfile
}

// 2. Presentation Layer (MVVM-C / MVI)
@MainActor
final class ProfileViewModel: ObservableObject {
    @Published private(set) var state: ViewState = .idle
    private let useCase: FetchUserProfileUseCase
    
    init(useCase: FetchUserProfileUseCase) {
        self.useCase = useCase
    }
}`
};

// --- MULTILINGUAL DICTIONARY (VI / EN) ---
const I18N = {
  vi: {
    'nav.about': 'Chuyên môn Native Mobile',
    'nav.skills': 'Tech Stack',
    'nav.projects': 'Dự án Native Mobile',
    'nav.github': 'GitHub Stats',
    'nav.contact': 'Liên hệ',
    'hero.status': 'Pure Native Mobile Engineer • Sẵn sàng cho các dự án mới',
    'hero.greeting': 'Xin chào, tôi là',
    'hero.desc': 'Kỹ sư chuyên sâu phát triển ứng dụng Native Mobile trên cả hai nền tảng iOS & Android: thuần thục Swift, SwiftUI, UIKit trên iOS và Kotlin, Jetpack Compose trên Android. Tối ưu trải nghiệm mượt mà 60/120fps chuẩn Native, kiến trúc sạch (Clean Architecture, MVVM/MVI) và làm chủ quy trình phát hành App Store & Google Play.',
    'hero.ctaProjects': 'Xem Dự án Native Mobile',
    'hero.ctaContact': 'Liên hệ hợp tác',
    'hero.metric1': 'Swift • SwiftUI • UIKit',
    'hero.metric2': 'Kotlin • Jetpack Compose',
    'hero.metric3': 'App Store & Google Play',
    'about.tag': 'TRỌNG TÂM CHUYÊN MÔN',
    'about.title': '100% Pure Native Mobile: Làm chủ iOS Native & Android Native',
    'about.subtitle': 'Tập trung chuyên sâu vào công nghệ Native cốt lõi của Apple và Google để đem lại hiệu năng, độ mượt mà và trải nghiệm phần cứng tối đa.',
    'about.primaryBadge': '🍏 Mũi nhọn iOS Native',
    'about.primaryBadge2': '🤖 Mũi nhọn Android Native',
    'about.primaryBadge3': '🏗️ Kiến trúc & Store CI/CD',
    'about.domain1Title': 'iOS Native Development (Swift & SwiftUI)',
    'about.domain1Desc': 'Phát triển ứng dụng iOS/iPadOS chuẩn Apple Human Interface Guidelines. Thành thạo Swift, SwiftUI, UIKit, Combine, Swift Concurrency (async/await), CoreData/SwiftData, tối ưu hiệu năng bộ nhớ qua Instruments và phát hành App Store / TestFlight.',
    'about.domain2Title': 'Android Native Development (Kotlin & Compose)',
    'about.domain2Desc': 'Xây dựng ứng dụng Android hiện đại chuẩn Material Design 3. Thành thạo Kotlin, Jetpack Compose, Coroutines & Flow, Dagger/Hilt, Room Database, Retrofit, tối ưu pin/bộ nhớ và quản lý phát hành trên Google Play Console.',
    'about.domain3Title': 'Kiến trúc Native (Clean Architecture & Store CI/CD)',
    'about.domain3Desc': 'Áp dụng các mẫu kiến trúc chuẩn mực: Clean Architecture, MVVM-C, MVI, VIPER và Modularization. Thiết lập pipeline tự động build, ký chứng chỉ và release lên App Store & Google Play với Fastlane, Firebase và GitHub Actions.',
    'about.domain4Title': 'Kỹ năng phụ trợ: Backend, Web & On-Device AI',
    'about.domain4Desc': 'Các công nghệ bổ trợ giúp kết nối liền mạch ứng dụng di động với hệ thống hạ tầng: CoreML, TensorFlow Lite, Firebase, Supabase, Node.js, Python, React/Next.js và Docker.',
    'skills.tag': 'TECH STACK',
    'skills.title': 'Hệ sinh thái Native Mobile & Công nghệ Phụ trợ',
    'skills.subtitle': 'Nổi bật các công nghệ Native cốt lõi (iOS Native & Android Native), kèm các kỹ năng phụ trợ phục vụ toàn diện sản phẩm.',
    'skills.filterMobile': '📱 Native Mobile (iOS & Android)',
    'skills.filterArch': '🏗️ Kiến trúc & Store CI/CD',
    'skills.filterSupporting': '🧩 Kỹ năng phụ trợ (Backend/Web/AI)',
    'skills.filterAll': 'Tất cả',
    'projects.tag': 'MOBILE SHOWCASE & REPOSITORIES',
    'projects.title': 'Dự án Native Mobile (iOS & Android) Tiêu biểu',
    'projects.subtitle': 'Các ứng dụng iOS Native và Android Native thực tế, cùng danh sách kho mã nguồn đồng bộ từ GitHub.',
    'github.title': 'Hoạt động & Thống kê GitHub',
    'github.subtitle': 'Biểu đồ thống kê đóng góp mã nguồn và tỷ lệ ngôn ngữ lập trình trên GitHub.',
    'github.usernameLabel': 'GitHub Username:',
    'github.applyBtn': 'Đồng bộ GitHub',
    'github.hint': '💡 Nhập GitHub username của bạn để tự động tải Repositories thực tế và biểu đồ GitHub Stats bên dưới.',
    'contact.tag': 'KẾT NỐI',
    'contact.title': 'Cùng xây dựng ứng dụng Native Mobile tiếp theo của bạn!',
    'contact.desc': 'Bạn đang tìm kiếm một Native Mobile Engineer chuyên sâu iOS (Swift) & Android (Kotlin) để tạo ra sản phẩm mượt mà, hiệu năng cao và chuẩn mực? Hãy liên hệ ngay với tôi.',
    'contact.locationLabel': 'Khu vực',
    'contact.formTitle': 'Gửi tin nhắn nhanh',
    'contact.nameLabel': 'Tên của bạn',
    'contact.subjectLabel': 'Chủ đề hợp tác',
    'contact.messageLabel': 'Nội dung',
    'contact.sendBtn': 'Soạn & Gửi Email',
    'footer.backToTop': 'Lên đầu trang ↑'
  },
  en: {
    'nav.about': 'Native Mobile Expertise',
    'nav.skills': 'Tech Stack',
    'nav.projects': 'Native Projects',
    'nav.github': 'GitHub Stats',
    'nav.contact': 'Contact',
    'hero.status': 'Pure Native Mobile Engineer • Available for New Projects',
    'hero.greeting': "Hello, I'm",
    'hero.desc': 'Senior Native Mobile Engineer specialized in iOS & Android platforms: expert in Swift, SwiftUI, UIKit for iOS and Kotlin, Jetpack Compose for Android. Focused on 60/120fps fluid performance, Clean Architecture (MVVM/MVI), and end-to-end App Store & Google Play deployment.',
    'hero.ctaProjects': 'Explore Native Mobile Work',
    'hero.ctaContact': 'Get in Touch',
    'hero.metric1': 'Swift • SwiftUI • UIKit',
    'hero.metric2': 'Kotlin • Jetpack Compose',
    'hero.metric3': 'App Store & Google Play',
    'about.tag': 'CORE SPECIALIZATION',
    'about.title': '100% Pure Native Mobile: Mastering iOS & Android',
    'about.subtitle': 'Dedicated focus on Apple & Google native stacks to deliver uncompromising performance and fluid user experiences.',
    'about.primaryBadge': '🍏 Core Focus: iOS Native',
    'about.primaryBadge2': '🤖 Core Focus: Android Native',
    'about.primaryBadge3': '🏗️ Architecture & Store CI/CD',
    'about.domain1Title': 'iOS Native Development (Swift & SwiftUI)',
    'about.domain1Desc': 'Building premium iOS/iPadOS apps adhering to Apple HIG. Proficient in Swift 6, SwiftUI, UIKit, Combine, Swift Concurrency (async/await), CoreData/SwiftData, Instruments memory profiling and App Store / TestFlight releases.',
    'about.domain2Title': 'Android Native Development (Kotlin & Compose)',
    'about.domain2Desc': 'Creating modern Android applications following Material Design 3. Expert in Kotlin, Jetpack Compose, Coroutines & Flow, Dagger/Hilt, Room DB, Retrofit, battery/memory optimization and Google Play Console releases.',
    'about.domain3Title': 'Native Architecture & Store CI/CD',
    'about.domain3Desc': 'Applying enterprise architectural patterns: Clean Architecture, MVVM-C, MVI, VIPER and Modularization. Automated build, certificate signing and store releases via Fastlane, Firebase and GitHub Actions.',
    'about.domain4Title': 'Supporting Stack: Backend, Web & On-Device AI',
    'about.domain4Desc': 'Supporting technologies for building custom APIs, admin dashboards, and intelligent on-device experiences: CoreML, TensorFlow Lite, Firebase, Supabase, Node.js, Python, React/Next.js and Docker.',
    'skills.tag': 'TECH STACK',
    'skills.title': 'Native Mobile Ecosystem & Supporting Stack',
    'skills.subtitle': 'Featuring pure native mobile technologies (iOS & Android) alongside supporting engineering skills.',
    'skills.filterMobile': '📱 Native Mobile (iOS & Android)',
    'skills.filterArch': '🏗️ Architecture & Store CI/CD',
    'skills.filterSupporting': '🧩 Supporting Stack (Backend/Web/AI)',
    'skills.filterAll': 'All Skills',
    'projects.tag': 'MOBILE SHOWCASE & REPOSITORIES',
    'projects.title': 'Featured Native Mobile Applications (iOS & Android)',
    'projects.subtitle': 'Real-world iOS Native and Android Native projects and repositories synchronized from GitHub.',
    'github.title': 'GitHub Activity & Ecosystem',
    'github.subtitle': 'Real-time open source contributions, streaks, and language breakdown from GitHub.',
    'github.usernameLabel': 'GitHub Username:',
    'github.applyBtn': 'Sync GitHub',
    'github.hint': '💡 Enter your GitHub username above to instantly sync real repositories and GitHub analytics below.',
    'contact.tag': 'CONTACT',
    'contact.title': "Let's Build Your Next Native Mobile App Together!",
    'contact.desc': 'Looking for an experienced Native Mobile Engineer (iOS Native & Android Native) to build a high-performance, polished mobile app? Feel free to reach out!',
    'contact.locationLabel': 'Location',
    'contact.formTitle': 'Send a Quick Message',
    'contact.nameLabel': 'Your Name',
    'contact.subjectLabel': 'Subject',
    'contact.messageLabel': 'Message',
    'contact.sendBtn': 'Compose & Send Email',
    'footer.backToTop': 'Back to top ↑'
  }
};

// --- APPLICATION INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initLanguageToggle();
  initThemeToggle();
  initHeroTyping();
  initTerminalTabs();
  initSkillsFilter();
  initProjects();
  initContactForm();
});

// --- LANGUAGE SWITCHER ---
let currentLang = 'vi';

function initLanguageToggle() {
  const langToggleBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    langLabel.textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[currentLang] && I18N[currentLang][key]) {
        el.textContent = I18N[currentLang][key];
      }
    });

    showToast(currentLang === 'vi' ? 'Đã chuyển sang Tiếng Việt' : 'Switched to English');
  });
}

// --- THEME SWITCHER (DARK / LIGHT) ---
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  themeToggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);

    if (window.lucide) {
      themeIcon.setAttribute('data-lucide', nextTheme === 'dark' ? 'sun' : 'moon');
      window.lucide.createIcons();
    }
  });
}

// --- HERO DYNAMIC TYPING EFFECT ---
function initHeroTyping() {
  const phrases = [
    'iOS Native (Swift 6 & SwiftUI) Specialist',
    'Android Native (Kotlin & Jetpack Compose) Specialist',
    'Clean Architecture & MVVM-C / MVI Patterns',
    '60/120fps Native Performance & Instruments'
  ];

  const typingEl = document.getElementById('typingText');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 35 : 70;

    if (!isDeleting && charIndex === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

// --- TERMINAL TABS CODE VIEWER ---
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.term-tab');
  const display = document.getElementById('codeDisplay');

  function renderTab(tabKey) {
    if (CODE_SNIPPETS[tabKey]) {
      display.textContent = CODE_SNIPPETS[tabKey];
    }
  }

  renderTab('swift');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderTab(tab.getAttribute('data-tab'));
    });
  });
}

// --- SKILLS GRID & FILTERING ---
function initSkillsFilter() {
  const grid = document.getElementById('skillsGrid');
  const filterBtns = document.querySelectorAll('#skillFilters .filter-btn');

  function renderSkills(filter = 'mobile-native') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? SKILLS_DATA 
      : SKILLS_DATA.filter((s) => s.category === filter);

    filtered.forEach((skill) => {
      const card = document.createElement('div');
      card.className = `skill-card ${skill.isCore ? 'is-core' : ''}`;
      card.innerHTML = `
        ${skill.isCore ? `<span class="core-badge">Native Core</span>` : ''}
        <img src="${skill.icon}" alt="${skill.name}" class="skill-badge-img" loading="lazy" />
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}</span>
      `;
      grid.appendChild(card);
    });
  }

  renderSkills('mobile-native');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.getAttribute('data-filter'));
    });
  });
}

// --- PROJECTS INITIALIZATION ---
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  FEATURED_PROJECTS.forEach((proj) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-top">
        <span class="project-platform-badge">
          <i data-lucide="smartphone" class="icon-xs"></i> ${proj.platform}
        </span>
        <div class="project-links">
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" title="View Source">
            <i data-lucide="github" class="icon-sm"></i>
          </a>
        </div>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-tags">
        ${proj.tags.map((t) => `<span>${t}</span>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- GITHUB LIVE SYNC & STATS ---
function initGitHubSync() {
  const usernameInput = document.getElementById('ghUsernameInput');
  const applyBtn = document.getElementById('ghApplyBtn');
  const statsImg = document.getElementById('ghStatsImg');
  const langsImg = document.getElementById('ghLangsImg');
  const streakImg = document.getElementById('ghStreakImg');
  const navGithubLink = document.getElementById('navGithubLink');
  const footerGithubLink = document.getElementById('footerGithubLink');

  function updateGitHubStats(username) {
    if (!username) return;
    const cleanUser = username.trim();

    statsImg.src = `https://github-readme-stats.vercel.app/api?username=${cleanUser}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117`;
    langsImg.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${cleanUser}&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=0D1117`;
    streakImg.src = `https://streak-stats.demolab.com?user=${cleanUser}&theme=tokyonight&hide_border=true&background=0D1117`;

    const userUrl = `https://github.com/${cleanUser}`;
    if (navGithubLink) navGithubLink.href = userUrl;
    if (footerGithubLink) footerGithubLink.href = userUrl;

    fetchGitHubRepos(cleanUser);
    showToast(`Đã đồng bộ với GitHub: @${cleanUser}`);
  }

  applyBtn.addEventListener('click', () => {
    updateGitHubStats(usernameInput.value);
  });

  usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateGitHubStats(usernameInput.value);
    }
  });
}

// Fetch GitHub public repos for live showcase
async function fetchGitHubRepos(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
    if (!res.ok) return;
    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) return;

    const metricRepos = document.getElementById('metricRepos');
    if (metricRepos) {
      metricRepos.textContent = `${repos.length}+`;
    }
  } catch (err) {
    console.warn('Cannot fetch GitHub repos:', err);
  }
}

// --- CONTACT FORM ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('phuongthanhkhiem1997@gmail.com').then(() => {
        showToast('Đã sao chép email vào clipboard!');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const subject = document.getElementById('senderSubject').value;
      const msg = document.getElementById('senderMessage').value;

      const mailtoUrl = `mailto:phuongthanhkhiem1997@gmail.com?subject=${encodeURIComponent(
        `[Native Mobile Dev] ${subject}`
      )}&body=${encodeURIComponent(`Xin chào Kris,\n\nTôi là: ${name}\n\n${msg}`)}`;

      window.location.href = mailtoUrl;
    });
  }
}

// --- TOAST NOTIFICATION HELPER ---
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
