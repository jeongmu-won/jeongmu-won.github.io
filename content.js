/* =====================================================================
   원정무 포트폴리오 페이지 내용 파일 (content.js)
   ---------------------------------------------------------------------
   이 파일만 고치면 페이지 내용이 바뀝니다. index.html은 건드리지 마세요.

   지킬 규칙은 세 가지뿐이에요.
   1) 글자는 작은따옴표 ' ' 안에 씁니다.     예) title: '암모니아 파일럿 버너',
      글 안에 작은따옴표를 쓰고 싶으면 앞에 \ 를 붙이세요.  예) 'Burner\'s design'
   2) 항목이 끝날 때마다 쉼표(,)를 붙입니다.
   3) ko = 한국어, en = 영어. 둘 다 채워 주세요.

   저장하고 1~2분 뒤 https://jeongmu-won.github.io 에 반영됩니다.
   페이지가 하얗게 나오거나 빨간 안내가 뜨면, 마지막으로 고친 곳의
   따옴표나 쉼표가 빠졌는지 확인하세요.
   ===================================================================== */

window.SITE = {

  /* ---------- 1. 기본 정보 ---------- */
  profile: {
    email: 'jeongmu@seoultech.ac.kr',
    phone: '',                    // '연락처 저장' 파일에만 들어가요. 예) '+82-10-1234-5678'
    photo: 'images/profile.jpg',  // 프로필 사진. 파일이 없으면 자동으로 숨겨져요.
    ko: {
      name: '원정무',
      role: '서울과학기술대학교 미래에너지융합학과 석박사통합과정',
      lab: 'CFCL 연구실, 지도교수 이민정',
      intro: '암모니아와 수소를 깨끗하게 태우는 버너를 직접 설계하고, 만들고, 시험합니다.'
    },
    en: {
      name: 'Jeongmu Won',
      role: 'Ph.D. Student, Department of Future Energy Convergence, Seoul National University of Science and Technology (Seoultech)',
      lab: 'CFCL, advised by Prof. Minjeong Lee',
      intro: 'I design, build and test burners that burn ammonia and hydrogen cleanly.'
    }
  },

  /* ---------- 2. 링크 ----------
     주소를 넣으면 연락처 칸에 링크가 생기고, '' 로 비워 두면 안 보여요. */
  links: {
    linkedin: '',   // 예) 'https://www.linkedin.com/in/jeongmu-won'
    scholar: '',    // Google Scholar 프로필 주소
    orcid: ''       // 예) 'https://orcid.org/0000-0000-0000-0000'
  },

  /* ---------- 3. 섹션 제목과 안내 문구 ---------- */
  labels: {
    builds:      { ko: '직접 만든 연소기', en: 'Burners I’ve built' },
    buildsSub:   { ko: '설계부터 제작, 연소 시험까지 직접 진행한 장치들입니다.', en: 'Hardware I designed, built and tested myself.' },
    research:    { ko: '연구 주제', en: 'Research' },
    skills:      { ko: '다루는 장비와 도구', en: 'Equipment and tools' },
    pubs:        { ko: '논문과 발표', en: 'Publications and talks' },
    contact:     { ko: '연락처', en: 'Contact' },
    contactText: { ko: '연구 협력이나 궁금한 점은 메일로 편하게 연락 주세요.', en: 'For collaboration or questions, email is the best way to reach me.' }
  },

  /* ---------- 4. 직접 만든 연소기 (사진 카드) ----------
     카드 하나 = 아래의 { ... }, 블록 하나예요.
     - 추가: 블록 하나를 통째로 복사해서 붙여 넣고 내용만 바꾸세요.
     - 삭제: 블록을 { 부터 }, 까지 통째로 지우세요.
     - 순서: 적힌 순서대로 화면에 나와요.
     - photo: images 폴더에 올린 사진 이름과 글자 하나까지 똑같이 써야 해요.
              (대문자·소문자, .jpg 와 .jpeg 도 구분해요)
              사진이 아직 없으면 그 자리에 동심원 마크가 대신 보여요.
     - tags: 카드 아래 작은 꼬리표. 필요 없으면 tags: [] 로 비워도 돼요. */
  builds: [
    {
      photo: 'images/pilot-burner.jpg',
      ko: {
        title: '암모니아 파일럿 버너',
        text: '점화 전극을 내장한 스월형 파일럿 버너입니다. 보조연료와 예열 없이 암모니아/공기만으로 점화되는 조건을 시험하고 있습니다.',
        tags: ['NH₃/공기', '스파크 점화', '스월']
      },
      en: {
        title: 'Ammonia pilot burner',
        text: 'A swirl-type pilot burner with an integrated spark electrode. I am testing when it ignites on NH₃/air alone, without auxiliary fuel or preheating.',
        tags: ['NH₃/air', 'Spark ignition', 'Swirl']
      }
    },
    {
      photo: 'images/offgas-burner.jpg',
      ko: {
        title: '삼중 동축 접선 버너',
        text: '암모니아 분해 공정에서 나오는 오프가스를 태우는 버너입니다. CAD 설계부터 시제품 제작, LabVIEW 점화·연료 전환 시퀀스까지 직접 구축했습니다.',
        tags: ['오프가스', 'LabVIEW', '다단 연소']
      },
      en: {
        title: 'Triple-coaxial tangential burner',
        text: 'Burns off-gas from an ammonia cracking process. I took it from CAD to prototype and built its LabVIEW ignition and fuel-switching sequence.',
        tags: ['Off-gas', 'LabVIEW', 'Staged combustion']
      }
    },
    {
      photo: 'images/aog-burner.jpg',
      ko: {
        title: '저NOx AOG 버너',
        text: '암모니아 분해 반응기용 버너입니다. 3D 프린팅 스월러를 바꿔 끼우며 화염 안정성과 NOx 배출을 평가했습니다.',
        tags: ['저NOx', '교체형 스월러', 'UV 화염감지']
      },
      en: {
        title: 'Low-NOx AOG burner',
        text: 'A burner for an ammonia cracking reactor. I swapped 3D-printed swirlers to evaluate flame stability and NOx emissions.',
        tags: ['Low NOx', 'Swappable swirlers', 'UV flame detection']
      }
    },
    {
      photo: 'images/nox-rig.jpg',
      ko: {
        title: '밀폐형 고온 NOx 평가 장치',
        text: '수소·암모니아 혼소 화염의 NOx 배출을 암모니아 비율별로 측정하려고 만든 실험 장치입니다.',
        tags: ['H₂/NH₃ 혼소', '배출가스 분석']
      },
      en: {
        title: 'Enclosed high-temperature NOx rig',
        text: 'A rig I built to measure NOx from hydrogen/ammonia co-firing flames across ammonia fractions.',
        tags: ['H₂/NH₃ co-firing', 'Emissions']
      }
    },
  ],

  /* ---------- 5. 연구 주제 ----------
     블록 하나 = 한 줄. 추가·삭제·순서는 위 카드와 같은 방식이에요. */
  research: [
    {
      ko: { title: '암모니아·수소 저NOx 버너', text: '탄소 없는 연료를 안정적으로, NOx는 적게 태우는 버너 설계와 제작' },
      en: { title: 'Low-NOx burners for ammonia and hydrogen', text: 'Designing and building burners that burn carbon-free fuels stably with little NOx' }
    },
    {
      ko: { title: '예열 없는 암모니아 점화', text: '스파크와 파일럿 화염만으로 암모니아를 점화하고 화염을 붙잡아 두는 조건' },
      en: { title: 'Igniting ammonia without preheating', text: 'Spark and pilot-flame ignition of room-temperature NH₃/air, and keeping the flame anchored' }
    },
    {
      ko: { title: 'NOx 생성 경로', text: '연료 속 잔류 암모니아가 늘 때 thermal-NO에서 fuel-NO로 넘어가는 과정 (화학발광 측정, CHEMKIN)' },
      en: { title: 'Where NOx comes from', text: 'How NO formation shifts from thermal to fuel-bound pathways as residual ammonia rises (chemiluminescence, CHEMKIN)' }
    },
  ],

  /* ---------- 6. 다루는 장비와 도구 ---------- */
  skills: [
    {
      ko: { title: '화염 진단', text: 'UV 카메라(OH*, NH₂* 화학발광), 분광기, 열화상 카메라, 슐리렌, 배출가스 분석기(Testo 350), UV 화염감지기' },
      en: { title: 'Flame diagnostics', text: 'UV camera (OH*, NH₂* chemiluminescence), spectrometer, IR thermography, Schlieren imaging, exhaust gas analyzer (Testo 350), UV flame detector' }
    },
    {
      ko: { title: '실험 장치·제어', text: 'MFC 가스 공급 라인, LabVIEW·DAQ 제어와 점화 시퀀스, 스파크 점화 장치, P&ID 설계' },
      en: { title: 'Rigs and control', text: 'MFC gas supply lines, LabVIEW/DAQ control and ignition sequencing, spark ignition hardware, P&ID design' }
    },
    {
      ko: { title: '설계·해석', text: 'Autodesk Inventor, 3D 프린팅, CHEMKIN, MATLAB, Python, Ansys' },
      en: { title: 'Design and modeling', text: 'Autodesk Inventor, 3D printing, CHEMKIN, MATLAB, Python, Ansys' }
    },
  ],

  /* ---------- 7. 논문과 발표 ----------
     비워 두면 이 섹션은 페이지에 안 보여요.
     넣을 때는 아래 예시 줄 앞의 // 를 지우고 내용을 바꾸세요. 한 편 = 한 줄. */
  pubs: [
    // { title: '논문 제목', meta: 'J. Won, et al., 저널명, 2027' },
    // { title: '발표 제목', meta: '한국연소학회 춘계학술대회, 2027 (구두 발표)' },
  ],

};
