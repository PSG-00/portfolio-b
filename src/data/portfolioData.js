export const portfolioData = {
  profile: {
    name: "박성국",
    role: "Backend Developer & DevOps Engineer",
    avatar: "./profile.jpg",
    statusBadge: "새로운 도전을 준비중",
    email: "cdjsdj1902@gmail.com",
    phone: "010-6480-6782",
    github: "https://github.com/PSG-00",
    blog: "https://memo50984.tistory.com",
    linkedin: "https://www.linkedin.com/in/%EC%84%B1%EA%B5%AD-%EB%B0%95-198453433/",
    education: `조선대학교 컴퓨터공학과 학사 졸업
(4.0 / 4.5)`,
  },

  about: {
    badge: "About Me",
    headline: "태풍을 막아내는 매미성처럼, 흔들림 없는 서버를 만듭니다.",
    description: `코드를 작성할 때 어떤 예외나 장애가 발생할 수 있는지, 트래픽은 어느 정도일지 끊임없이 고민합니다.
    
외부 API 호출 실패 시 데이터 유실을 막기 위한 장애 격리 전략과 복구 파이프라인을 설계하며, 실제 상용 서비스의 예상 트래픽 기반의 부하 테스트(K6)를 통해 쿼리 병목을 진단하고 검색 엔진(ElasticSearch)으로 성능을 극대화합니다.

나아가 급격한 트래픽 변동 상황 속에서도 서비스가 중단 없이 유지되도록 무중단 배포와 클라우드 배포 인프라를 지속적으로 연구합니다.`,
    highlights: [
      {
        label: "장애 격리 & 복구",
        desc: "외부 API 실패 격리 · Spring Batch 무유실 복구",
      },
      {
        label: "트래픽 성능 최적화",
        desc: "K6 부하 진단 · ElasticSearch 역색인 (P95 98.7% 개선)",
      },
      {
        label: "고가용성 인프라",
        desc: "AWS ALB + ECS 태스크 기반 무중단 배포 · CI/CD 파이프라인",
      },
    ],
    skills: [
      "Java 17",
      "Spring Boot 3.x",
      "Spring Batch",
      "JPA / QueryDSL",
      "PostgreSQL",
      "Redis",
      "ElasticSearch",
      "Docker",
      "AWS (ALB, ECS)",
      "GitHub Actions",
      "K6",
    ],
  },

  quickNavItems: [
    { id: "profile", label: "프로필", category: "About", desc: "소개 및 인프라 운영" },
    { id: "project-1", label: "모두의 플리", category: "Project", desc: "글로벌 컨텐츠 평점 플랫폼" },
    { id: "project-2", label: "모뉴", category: "Project", desc: "키워드 기반 뉴스 수집 플랫폼" },
    { id: "career", label: "경력", category: "Career", desc: "실무 인턴 이력" },
    { id: "education", label: "교육 및 활동", category: "Activities", desc: "실무 부트캠프" },
    { id: "certifications", label: "자격증", category: "Certificates", desc: "공인 SQLD 자격" },
  ],

  projects: [
    {
      id: "project-1",
      number: "01",
      badge: "대표 프로젝트",
      title: "모두의 플리 (MOPL)",
      subtitle: "외부 API 기반 콘텐츠 자동 수집 및 글로벌 컨텐츠 평점 플랫폼",
      period: "2026.06.19 - 2026.07.29",
      role: "콘텐츠 도메인 구축 및 수집 파이프라인, CI/CD & 배포 인프라 구축 (기여도 35%)",
      image: "./images/mopl_main.png",
      description: "TMDB와 SportsDB 등 다양한 외부 오픈 API로부터 매일 대량의 영화/스포츠 콘텐츠를 수집·가공하고, 안정적인 검색 및 평점 기능을 제공하는 플랫폼입니다. 외부 장애 격리, 커넥션 풀 분리, 그리고 ElasticSearch 성능 최적화를 주도했습니다.",
      keyFeatures: [
        "Spring Batch Chunk 모델 + Spring Retry 및 배치 메타데이터 기반 복구 스케줄러 구현",
        "API/배치 간 HikariCP 커넥션 풀 독립 분리 및 LazyConnectionDataSourceProxy 도입으로 커넥션 독점 및 지연 방지",
        "K6 부하 테스트 기반 RDB Full Table Scan 병목 진단 및 ElasticSearch 전환으로 P95 속도 98.7% 개선 (1.02s ➔ 13.02ms)",
        "AWS ALB(리버스 프록시) + ECS 롤링 정책 기반 무중단 배포 및 트래픽 모니터링 기반 태스크 스케일링 인프라 구축",
      ],
      techStack: [
        "Java 17",
        "Spring Boot 3.x",
        "Spring Batch",
        "JPA / QueryDSL",
        "PostgreSQL",
        "Redis",
        "ElasticSearch",
        "Docker",
        "AWS (ALB, ECS)",
        "GitHub Actions",
        "K6",
        "Grafana",
      ],
      links: {
        demo: "https://mopl.psg-dev.site",
        github: "https://github.com/PSG-00/sb10-mopl-team1",
      },
      myRole: {
        headline: "콘텐츠 도메인 설계, 배치 수집 파이프라인, 고가용성 배포 인프라 전담",
        summary: "콘텐츠 엔티티 모델링과 CRUD API를 구축하고, 대용량 외부 API 데이터를 안정적으로 수집하는 배치 아키텍처를 설계했습니다. 또한 AWS 클라우드 환경에서 ALB와 ECS 태스크 정책을 구성하여 무중단 배포와 트래픽 부하 대응 인프라를 완성했습니다.",
        keyResponsibilities: [
          {
            title: "콘텐츠 도메인 설계 및 CRUD 구현",
            desc: "영화, TV 시리즈, 스포츠 경기 콘텐츠 및 태그 다대다 연관관계를 효율적으로 매핑하고 커서 기반 페이지네이션을 구현했습니다.",
          },
          {
            title: "외부 API 수집 배치 파이프라인 구축",
            desc: "하루 500회 이상 호출되는 TMDB/SportsDB 데이터를 Spring Batch 청크 모델로 안정적으로 수집·가공하는 파이프라인을 구축했습니다.",
          },
          {
            title: "배치 전용 DB 커넥션 풀 독립 분리 및 Lazy 프록시 적용",
            desc: "대용량 배치가 DB 커넥션을 독점하여 실시간 유저 API가 지연되는 현상을 방지하기 위해 HikariCP 풀을 API용과 배치용으로 분리하고 지연 획득 프록시를 적용했습니다.",
          },
          {
            title: "AWS ECS 롤링 무중단 배포 및 트래픽 모니터링 기반 태스크 조정",
            desc: "ALB를 리버스 프록시로 두고 ECS Fargate 환경에서 롤링 업데이트 정책으로 무중단 배포를 구현하였으며, 트래픽 모니터링을 통해 부하 상황에 맞춰 ECS 태스크를 직접 증설·조정할 수 있도록 구성했습니다.",
          },
        ],
      },
      acts: [
        {
          actNumber: "ACT 01",
          category: "FAULT TOLERANCE & BATCH",
          title: "외부 API 장애 격리 및 무유실 자동 복구 아키텍처",
          problemHypothesis: {
            theme: "외부 API 장애에 따른 수집 중단 및 DB 커넥션 고갈 리스크",
            painPoints: [
              {
                id: "PAIN POINT 01",
                title: "일시 통신 장애로 인한 배치 중단",
                desc: "하루 500회 이상 API 호출 중 429(Rate Limit), 502/503, 네트워크 일시 단절 발생 시 전체 수집 배치가 멈춤",
              },
              {
                id: "PAIN POINT 02",
                title: "서킷 브레이커 한계 & 유실 위험",
                desc: "서킷 브레이커는 요청을 차단해 데이터 유실을 유발하며, 배치 특성상 실패 지점부터 이어받는 복구 지점이 부재함",
              },
              {
                id: "PAIN POINT 03",
                title: "치명적 장애 시 스레드 낭비 & 감시 부족",
                desc: "인증 실패나 스키마 변경 같은 영구적 장애까지 계속 재시도하면 스레드가 낭비되며, 이상 상태를 즉각 감시할 체계 부재",
              },
            ],
            hypotheses: [
              {
                id: "H1 → PAIN POINT 01",
                title: "Spring Retry 지수 백오프로 일시 장애 즉시 흡수",
                desc: "단기 네트워크 오류 및 Rate Limit(429) 장애는 Spring Retry의 지수 백오프로 메모리 레벨에서 즉시 흡수",
              },
              {
                id: "H2 → PAIN POINT 02",
                title: "Batch 메타데이터 기반 체크포인트 재시작",
                desc: "재시도 실패 건은 잡을 일단 FAILED 처리하고, 스케줄러가 메타데이터 테이블을 조회해 실패한 Chunk 지점부터 이어받아 무유실 복구",
              },
              {
                id: "H3 → PAIN POINT 03",
                title: "예외 화이트리스트 판별 & Grafana/Discord 알림",
                desc: "isFatalFailure()로 일시 오류만 복구 대상으로 삼고, 영구 장애는 즉시 락 처리 후 Prometheus 게이지와 Discord Webhook으로 관리자 호출",
              },
            ],
          },
          solution: {
            title: "재시도·복구·풀 격리·알림의 4단계 견고한 방어선",
            pipeline: [
              {
                step: "01",
                title: "청크 중복 제거 & IN 쿼리 일괄 조회",
                desc: "청크 유입 시 Set으로 인메모리 중복을 거르고, providerId IN 절 1회 쿼리로 DB 존재 여부를 일괄 조회하여 N+1 SELECT 방지",
                tech: "Spring Batch Chunk / IN Query",
              },
              {
                step: "02",
                title: "커넥션 풀 분리 & Lazy 프록시",
                desc: "HikariPool을 API용(10개)과 배치용(5개)으로 분리 격리. LazyConnectionDataSourceProxy로 외부 통신 중 DB 커넥션 미점유",
                tech: "HikariCP / Lazy Proxy",
              },
              {
                step: "03",
                title: "메타데이터 복구 스케줄러",
                desc: "ShedLock 분산 락 하에 10분 주기 스캔. KST 02~07시 새벽 시간대만 가동. 실패한 동일 JobInstance 파라미터로 실패 청크부터 재시작",
                tech: "Spring Batch / ShedLock",
              },
              {
                step: "04",
                title: "정밀 관제 & 관리자 수동 재시작",
                desc: "afterCommit() 훅으로 커밋된 데이터만 메트릭 카운팅. 자동 복구 스케줄러가 3회 실패 시 영구 락 및 Discord Webhook 알림, 복구 API 제공",
                tech: "Micrometer / Grafana",
              },
            ],
            technicalHighlights: [
              {
                name: "HikariCP 커넥션 풀 독립 분리",
                desc: "배치 작업이 DB 커넥션을 독점하여 실시간 사용자 API가 지연되는 현상을 막기 위해 HikariPool을 API용과 배치용으로 분리 격리",
              },
              {
                name: "LazyConnectionDataSourceProxy 지연 획득",
                desc: "외부 API 네트워크 통신 대기 동안 DB 커넥션을 물고 있지 않고, 실제 SQL 쿼리가 날아가는 시점에만 커넥션을 획득하여 병목 해소",
              },
              {
                name: "청크 내 인메모리 Set 중복 제거 & IN 절 일괄 조회 (N+1 방지)",
                desc: "청크마다 유입되는 N개 아이템을 하나씩 단건 SELECT 하지 않고, Set<ProviderKey>로 1차 중복을 제거한 뒤 findByProviderAndProviderIdIn 1회 쿼리로 존재 여부를 일괄 확인하여 N+1 쿼리 제거 및 saveAll 일괄 저장",
              },
              {
                name: "TransactionSynchronization afterCommit 메트릭 정합성",
                desc: "DB 트랜잭션이 성공적으로 커밋된 직후에만 프로메테우스 카운터를 올려 롤백 시 메트릭이 왜곡되는 불일치 현상 방지",
              },
            ],
            codeSnippets: [],
          },
          result: {
            title: "유실 없는 무중단 운영 및 웹 서비스 100% 격리",
            summary: "외부 API의 간헐적 장애, 영구 장애, 그리고 DB 커넥션 고갈 위협을 인메모리 지수 백오프, 커넥션 풀 분리 격리, 메타데이터 기반 체크포인트 재시작의 3단계 방어선으로 완벽히 통제했습니다. 피크 시간대 사용자 웹 서비스 영향도 0%, 데이터 유실 0건의 견고한 배치 파이프라인을 확립했습니다.",
            metrics: [
              { label: "데이터 유실률", value: "0%", desc: "Batch 메타데이터 기반 체크포인트 재시작" },
              { label: "청크 중복 검증 쿼리", value: "N회 ➔ 1회", desc: "IN 쿼리 일괄 조회 및 Set 기반 N+1 방지" },
              { label: "웹 서비스 영향도", value: "0%", desc: "커넥션 풀 분리 격리 + Lazy 프록시" },
              { label: "영구 장애 감지", value: "실시간", desc: "isFatalFailure() + Grafana & Discord" },
            ],
            benchmarkTitle: "GRAFANA MONITORING & REAL-TIME ALERTS (실측 관제 및 경보 증빙)",
            benchmarkImages: [
              {
                title: "Grafana 실시간 배치 잡 상태 및 API 호출 성공률 (100%)",
                desc: "TMDB/SportsDB 수집 잡 COMPLETED 및 API 호출 성공률 100% 모니터링",
                src: "./images/mopl_api_success_rate.png",
              },
              {
                title: "Grafana ➔ Discord 3회 연속 실패 경보 (FIRING)",
                desc: "치명적 장애 3회 연속 감지 시 즉시 Critical 경보 발송 및 자동 잠금",
                src: "./images/mopl_grafana_alert.png",
              },
            ],
          },
        },
        {
          actNumber: "ACT 02",
          category: "PERFORMANCE OPTIMIZATION",
          title: "ElasticSearch 도입을 통한 검색 성능 98.7% 개선",
          problemHypothesis: {
            theme: "와일드카드(LIKE %keyword%) 풀 테이블 스캔으로 인한 응답 지연",
            painPoints: [
              {
                id: "PAIN POINT 01",
                title: "B-Tree 인덱스 무효화 및 Full Table Scan",
                desc: "RDB에서 LIKE %keyword% 사용 시 인덱스를 타지 못해 10만 건 데이터 전체를 디스크에서 풀 스캔하는 I/O 병목 발생",
              },
              {
                id: "PAIN POINT 02",
                title: "다대다 태그 EXISTS 서브쿼리 오버헤드",
                desc: "Content와 Tag 간의 N:M 매핑 테이블을 EXISTS 서브쿼리로 반복 평가하면서 데이터 증가 시 CPU 비용 급증",
              },
              {
                id: "PAIN POINT 03",
                title: "동시 접속 폭증 시 P95 응답 속도 1초 초과",
                desc: "피크 트래픽(가상 유저 200명 동시성) 시 3중 복합 커서 정렬과 풀 스캔이 겹쳐 P95 응답 지연이 1.02초까지 치솟음",
              },
            ],
            hypotheses: [
              {
                id: "H1 → PAIN POINT 01",
                title: "단어 기준 역색인 사전으로 O(1) 고속 검색 확보",
                desc: "ElasticSearch의 Inverted Index 사전을 구축하면 데이터 총량(10만 건)에 의존하지 않는 독립적인 검색 성능을 확보할 수 있음",
              },
              {
                id: "H2 → PAIN POINT 02",
                title: "도큐먼트 태그 비정규화로 조인 연산 완전 제거",
                desc: "N:M 조인 테이블 대신 단일 도큐먼트에 tags: ['태그'] 배열로 비정규화 평탄화하여 terms query 1회로 고속 필터링",
              },
              {
                id: "H3 → PAIN POINT 03",
                title: "검색 트래픽 오프로딩으로 P95 응답 지연 90% 이상 단축",
                desc: "RDB의 검색 연산 부하를 분산 검색 엔진으로 오프로딩하여 P95 속도를 20ms 이하(98% 이상 단축)로 개선 가능하다고 판단",
              },
            ],
          },
          solution: {
            title: "K6 부하 테스트 진단 및 ElasticSearch 역색인 사전 전환",
            pipeline: [
              {
                step: "01",
                title: "상용 벤치마크 기반 K6 시나리오 설계",
                desc: "밀리의 서재 10주년 데이터 및 TMDB 카탈로그 기반 10만 건 더미 데이터 적재. 200명 동시성 + 40개 무작위 검색어 + Think Time 1초 모사",
                tech: "K6 / Mock 10만 건",
              },
              {
                step: "02",
                title: "SQL 실행 계획 분석 & 병목 진단",
                desc: "QueryDSL 쿼리의 Explain 분석을 통해 LIKE %keyword%로 인한 Full Table Scan 및 임시 테이블 Filesort 유발 원인 확인",
                tech: "PostgreSQL Explain",
              },
              {
                step: "03",
                title: "ElasticSearch 도큐먼트 모델링 & 평탄화",
                desc: "N:M ContentTag 조인을 제거하고 tags 배열로 평탄화. MultiMatchQuery와 TermsQuery로 역색인 사전 조회 구조 완성",
                tech: "ElasticSearch / Inverted Index",
              },
              {
                step: "04",
                title: "search_after 3중 복합 커서 1:1 매핑",
                desc: "인기순(시청자수 ➔ 리뷰수 ➔ ID) 복합 커서 로직을 search_after API와 1:1 매핑하여 대용량 스크롤 메모리 누수 방지",
                tech: "search_after Pagination",
              },
            ],
            technicalHighlights: [
              {
                name: "LIKE %keyword% vs Inverted Index (역색인)",
                desc: "10만 건 전체를 디스크에서 순차 스캔하는 대신, 단어의 위치를 포인터로 바로 짚는 역색인 사전을 통해 데이터 건수와 무관한 일정한 조회 속도 확보",
              },
              {
                name: "N:M 조인 테이블 ➔ Document 비정규화 평탄화",
                desc: "RDB의 다대다 매핑 테이블과 EXISTS 서브쿼리를 완전히 없애고 단일 문서 내 tags 문자열 배열로 비정규화하여 조인 오버헤드 0 달성",
              },
              {
                name: "상용 플랫폼 벤치마크 K6 부하 테스트",
                desc: "밀리의 서재 10주년 리포트와 글로벌 서비스 카탈로그를 분석하여 10만 건의 실제적인 더미 데이터와 현실적인 Think Time(1초) 동시성 부하 테스트 수행",
              },
            ],
            codeSnippets: [],
          },
          result: {
            title: "P95 응답 속도 98.7% 단축 및 초당 처리량 56.8% 향상",
            summary: "K6 부하 테스트를 통해 RDB 와일드카드 검색의 Full Table Scan 병목을 실측 진단하고, 단어 역색인 사전과 도큐먼트 비정규화 기반의 ElasticSearch로 전환했습니다. 그 결과 P95 응답 지연 시간을 1.02초에서 13.02ms로 98.7% 대폭 단축하고 초당 처리량을 56.8% 끌어올렸습니다.",
            metrics: [
              { label: "P95 응답 속도", value: "1.02s ➔ 13.02ms", desc: "98.7% 대폭 단축 (1,020ms ➔ 13ms)" },
              { label: "평균(Avg) 응답 속도", value: "590ms ➔ 6.44ms", desc: "98.9% 단축으로 즉각적인 검색 반응" },
              { label: "초당 처리량 (Throughput)", value: "87.48 ➔ 137.20 req/s", desc: "+56.8% 향상으로 동시 요청 수용력 증대" },
              { label: "부하 테스트 에러율", value: "0.00%", desc: "200명 동시 요청 9,741건 무장애 통과" },
            ],
            benchmarkTitle: "K6 LOAD TEST REAL-BENCHMARK (부하 테스트 실측 결과 증빙)",
            benchmarkImages: [
              {
                title: "RDB (PostgreSQL + QueryDSL) 실측 결과",
                desc: "P95 응답 지연 1.02s, 평균 590.13ms 소요",
                src: "./images/k6_rdb_result.png",
              },
              {
                title: "ElasticSearch 역색인 검색 실측 결과",
                desc: "P95 응답 지연 13.02ms, 평균 6.44ms로 98.7% 개선",
                src: "./images/k6_es_result.png",
              },
            ],
          },
        },
      ],
    },
    {
      id: "project-2",
      number: "02",
      badge: "팀 협업 프로젝트",
      title: "모뉴 (MONEW)",
      subtitle: "키워드 기반 관심사 뉴스를 수집하고 공유하는 소셜 기반 플랫폼",
      period: "2026.04.14 - 2026.05.08",
      role: "RSS 및 네이버 뉴스 API 수집 엔진, 크롤링 & 다중 Fallback 파이프라인 개발 (기여도 25%)",
      image: "./images/monew_main.png",
      description: "다양한 언론사의 RSS 피드와 네이버 뉴스 API로부터 기사를 수집하고, 사용자 맞춤 키워드 뉴스 및 요약을 제공하는 소셜 플랫폼입니다. 매체별 인코딩 파편화 해결과 요약 미제공 매체를 위한 동적 크롤링 및 Groq ➔ Gemini 다중 LLM Fallback 아키텍처를 주도했습니다.",
      keyFeatures: [
        "XML/HTML/HTTP 헤더 3중 인코딩 감지 컨버터 및 ROME SyndFeed 기반 추상화 수집 파이프라인 구축",
        "요약 미제공 매체(한국경제 등) 대응을 위한 Jsoup 동적 본문 크롤링 및 인메모리 캐시 봇 차단 방어",
        "비용 최적화를 위한 키워드 사전 매칭 및 Groq(500ms) ➔ Gemini 다중 LLM Fallback 고가용성 파이프라인",
        "새로운 언론사 추가 시 별도 소스코드 배포 없이 URL 등록만으로 즉시 수집 가능한 확장형 아키텍처",
      ],
      techStack: [
        "Java 17",
        "Spring Boot 3.x",
        "JPA / QueryDSL",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
        "Jsoup",
        "ROME",
        "Groq API",
        "Gemini API",
      ],
      links: {
        demo: "https://monew.psg-dev.site",
        github: "https://github.com/PSG-00/sb10-monew-team05",
      },
      myRole: {
        headline: "뉴스 수집 엔진 확장성 확보 및 LLM 다중 Fallback 파이프라인 전담",
        summary: "언론사마다 제각각인 RSS 인코딩과 데이터 규격을 표준화하고, 요약이 누락된 기사를 안전하게 복구하기 위해 크롤링, 캐싱, 그리고 다중 LLM Fallback을 유기적으로 결합한 고가용성 파이프라인을 구축했습니다.",
        keyResponsibilities: [
          {
            title: "다양한 매체 RSS 수집 파이프라인 추상화",
            desc: "매체별 인코딩 차이로 발생하는 한글 깨짐을 방지하고, ROME 라이브러리를 활용해 피드를 추상화하여 확장성을 확보했습니다.",
          },
          {
            title: "요약 미제공 매체 대상 조건부 본문 크롤링",
            desc: "요약 필드가 비어 있는 매체에 대해 기사 본문을 동적으로 추출하고, 봇 차단 방지를 위해 인메모리 캐시를 적용했습니다.",
          },
          {
            title: "Groq ➔ Gemini 다중 LLM Fallback 체계 구축",
            desc: "초고속 Groq API를 메인으로 호출하되, 외부 API 장애나 Rate Limit 발생 시 Gemini API로 자동 전환되는 무중단 아키텍처를 구현했습니다.",
          },
        ],
      },
      acts: [
        {
          actNumber: "ACT 01",
          category: "PIPELINE EXTENSIBILITY",
          title: "뉴스 수집 파이프라인 확장 및 안정성 확보",
          problemHypothesis: {
            theme: "뉴스 수집 파이프라인 확장 및 안정성 확보",
            painPoints: [
              {
                id: "PAIN POINT 01",
                title: "언론사별 인코딩 파편화로 한글 깨짐",
                desc: "매체마다 EUC-KR, CP949, UTF-8 등 인코딩 선언 방식이 달라 기사 수집 시 한글 텍스트가 심각하게 깨지는 현상 발생",
              },
              {
                id: "PAIN POINT 02",
                title: "RSS 규격 비표준 및 날짜 포맷 충돌",
                desc: "언론사마다 XML 태그 구조가 다르고, 매일경제(MK) 등 일부 RSS의 pubDate 오프셋(+09:00)이 표준 파서와 충돌",
              },
              {
                id: "PAIN POINT 03",
                title: "신규 매체 추가 시 개별 파서 개발 부담",
                desc: "새로운 언론사를 연동할 때마다 수집기와 파싱 로직을 매번 새로 코딩해야 하여 유지보수 복잡도 급증",
              },
            ],
            hypotheses: [
              {
                id: "H1 → PAIN POINT 01",
                title: "XML·HTML·HTTP 헤더 3중 인코딩 자동 감지",
                desc: "XML prologue, HTML meta charset, HTTP 헤더의 Content-Type을 순차 스캔하여 올바른 Charset으로 디코딩하는 컨버터 구현",
              },
              {
                id: "H2 → PAIN POINT 02",
                title: "ROME 라이브러리 기반 SyndFeed 표준 추상화",
                desc: "비표준 XML 및 날짜 오프셋을 정규표현식으로 정규화한 뒤, ROME 라이브러리를 통해 SyndFeed 단일 모델로 추상화",
              },
              {
                id: "H3 → PAIN POINT 03",
                title: "RSS 피드 URL 등록만으로 즉시 연동되는 확장형 구조",
                desc: "수집 파이프라인을 표준 피드 규격으로 통일하여, 별도 파서 개발 없이 RSS 피드 URL 등록만으로 신규 언론사 수집 가능",
              },
            ],
          },
          solution: {
            title: "3중 인코딩 감지 컨버터 & ROME SyndFeed 추상화 파이프라인",
            pipeline: [
              {
                step: "01",
                title: "3중 인코딩 자동 감지 (ResponseBodyDecoder)",
                desc: "바이트 배열의 선두 4KB를 스캔하여 XML 선언부 -> HTML 메타태그 -> HTTP 헤더 순으로 인코딩을 자동 판별",
                tech: "ResponseBodyDecoder / Charset Regex",
              },
              {
                step: "02",
                title: "문법 정규화 & ROME SyndFeed 추상화",
                desc: "DOCTYPE 제거 및 날짜 오프셋(+09:00 -> +0900)을 정규화한 후 SyndFeedInput으로 다양한 피드를 단일 객체로 변환",
                tech: "XmlParser / ROME SyndFeed",
              },
              {
                step: "03",
                title: "RSS 피드 URL 등록 기반 확장 (NewsSourceUrl)",
                desc: "새로운 언론사 추가 시 파서를 새로 짤 필요 없이 NewsSourceUrl에 피드 URL만 추가하면 수집기가 즉시 가동",
                tech: "NewsSourceUrl Enum / Extensible Pipeline",
              },
            ],
            technicalHighlights: [
              {
                name: "3중 인코딩 감지 디코더 (한글 깨짐 0건)",
                desc: "헤더가 누락되거나 잘못 선언된 언론사 RSS도 XML/HTML 내부 선언부를 우선 파싱하여 정확한 문자셋을 감지",
              },
              {
                name: "피드 규격 추상화 및 전처리 (ROME 호환)",
                desc: "언론사별 비표준 pubDate 오프셋을 사전에 정규화하여 ROME 라이브러리의 FeedException 발생을 원천 차단",
              },
              {
                name: "URL 등록 기반의 간결한 확장성",
                desc: "파이프라인 추상화를 통해 매체 추가 시 비즈니스 로직 수정 없이 피드 URL 등록만으로 10개 언론사 수집 통합",
              },
            ],
            codeSnippets: [],
          },
          result: {
            title: "한글 깨짐 0건 및 RSS 피드 URL 등록만으로 10개 매체 확장 달성",
            summary: "3중 인코딩 자동 감지로 언론사별 문자셋 불일치 문제를 해결하고, ROME SyndFeed 추상화를 통해 매체별 전용 파서 코딩 없이 RSS 피드 URL 등록만으로 신규 언론사를 손쉽게 연동할 수 있는 확장형 파이프라인을 구축했습니다.",
            metrics: [
              { label: "신규 매체 연동 방식", value: "URL 등록 방식", desc: "개별 파서 개발 없이 피드 URL만 등록" },
              { label: "한글 텍스트 깨짐율", value: "0%", desc: "XML·HTML·HTTP 3중 인코딩 감지" },
              { label: "통합 수집 매체 수", value: "10개 언론사", desc: "한경, 조선, 연합, JTBC, 동아, 매경 등" },
            ],
            benchmarkTitle: "RSS FEED SOURCES (10개 언론사 RSS 피드 통합 수집 증빙)",
            benchmarkImages: [
              {
                title: "10개 언론사 RSS 피드 통합 수집 및 필터링 화면",
                desc: "조선, 동아, 한경, JTBC, 경향 등 10개 언론사 RSS 피드 연동 및 수집",
                src: "./images/monew_rss_10_sources.png",
              },
            ],
          },
        },
        {
          actNumber: "ACT 02",
          category: "HIGH AVAILABILITY PIPELINE",
          title: "요약 미제공 매체 대응을 위한 크롤링 및 LLM 다중 Fallback",
          problemHypothesis: {
            theme: "요약 미제공 매체 대응 및 외부 LLM 장애 시 뉴스 서비스 중단 리스크",
            painPoints: [
              {
                id: "PAIN POINT 01",
                title: "RSS 요약 부재로 인한 정보 파악 지연",
                desc: "한국경제 등 일부 언론사는 RSS에 기사 요약(Description)을 제공하지 않아 사용자 관심 뉴스 파악 불가",
              },
              {
                id: "PAIN POINT 02",
                title: "반복 크롤링 시 봇 차단(IP Block) 위험",
                desc: "요약을 생성하기 위해 매번 기사 본문을 웹 크롤링하면 언론사 방화벽에 의해 봇으로 차단될 위험 발생",
              },
              {
                id: "PAIN POINT 03",
                title: "외부 LLM API 장애 시 서비스 중단",
                desc: "단일 LLM API 호출에 의존할 경우, API 장애나 Rate Limit 발생 시 전체 뉴스 요약 제공이 중단됨",
              },
            ],
            hypotheses: [
              {
                id: "H1 → PAIN POINT 01",
                title: "조건부 동적 본문 크롤링으로 요약 공백 해소",
                desc: "RSS 요약이 비어 있을 때만 본문 크롤링 엔진으로 흐름을 분기하여 핵심 문장을 추출하고 LLM 요약 진행",
              },
              {
                id: "H2 → PAIN POINT 02",
                title: "인메모리 캐싱으로 중복 크롤링 차단 및 차단 회피",
                desc: "RSS 소스 + 링크 기반 인메모리 캐시를 두어 이미 크롤링한 본문을 캐싱함으로써 호출 횟수를 대폭 감소",
              },
              {
                id: "H3 → PAIN POINT 03",
                title: "Groq(500ms) 메인 + Gemini 다중 Fallback 고가용성",
                desc: "응답 속도가 가장 빠른 Groq API를 메인으로 두고, 장애 발생 시 Gemini API로 자동 전환하여 무중단 보장",
              },
            ],
          },
          solution: {
            title: "크롤링·캐싱·Groq ➔ Gemini 다중 Fallback 파이프라인",
            pipeline: [
              {
                step: "01",
                title: "본문 크롤링 분기 (요약 부재 대응)",
                desc: "RSS에 요약 필드가 비어 있으면 Jsoup을 통해 언론사 본문 텍스트를 크롤링하도록 동적 흐름 분기",
                tech: "Jsoup / Dynamic Crawler",
              },
              {
                step: "02",
                title: "인메모리 캐시 (반복 요청 차단)",
                desc: "RSS 소스 + 링크 해시를 키로 인메모리 캐시를 적용하여 불필요한 재크롤링 및 봇 차단 방지",
                tech: "In-Memory Cache",
              },
              {
                step: "03",
                title: "Groq API (기본 메인 요약 생성)",
                desc: "약 500ms로 가장 빠른 Groq API를 1차 호출하여 사용자에게 초고속 뉴스 요약 제공",
                tech: "Groq API (Primary)",
              },
              {
                step: "04",
                title: "Gemini API (장애 시 자동 Fallback)",
                desc: "Groq API 실패, 타임아웃, 429 감지 시 즉시 시스템 중단 없이 Gemini API로 자동 전환",
                tech: "Gemini API (Fallback)",
              },
            ],
            technicalHighlights: [
              {
                name: "본문-키워드 매칭 후 LLM 호출로 비용 최적화",
                desc: "모든 기사를 무조건 LLM에 보내지 않고, 사용자 관심 키워드가 본문에 매칭된 기사만 LLM 요약을 호출하여 API 비용 절감",
              },
              {
                name: "인메모리 캐시 기반 봇 차단 방어",
                desc: "동일 기사에 대한 중복 요청을 캐시에서 즉시 반환하여 외부 언론사 서버에 가해지는 트래픽 부하 및 IP 차단 원천 차단",
              },
              {
                name: "Groq ➔ Gemini 다중 LLM Fallback",
                desc: "단일 벤더 종속성을 탈피하고 장애 격리를 구현하여 24시간 365일 무중단 요약 서비스 달성",
              },
            ],
            codeSnippets: [],
          },
          result: {
            title: "크롤링과 Fallback으로 요약 공백 완전 차단 및 고가용성 확보",
            summary: "일부 언론사의 요약 미제공 문제를 동적 본문 크롤링과 인메모리 캐시로 해결하고, Groq와 Gemini의 이중화 Fallback 파이프라인을 구축하여 외부 LLM API 장애 상황에서도 서비스 중단 없이 안정적인 뉴스 요약을 제공했습니다.",
            metrics: [
              { label: "요약 공백율", value: "0%", desc: "본문 크롤링 + LLM 자동 요약 결합" },
              { label: "평균 요약 속도", value: "약 500ms", desc: "Groq API 메인 호출로 초고속 생성" },
              { label: "LLM 가용성", value: "99.9%", desc: "Gemini 다중 Fallback으로 무중단 보장" },
              { label: "크롤링 봇 차단율", value: "0%", desc: "인메모리 캐시 기반 중복 요청 방어" },
            ],
            benchmarkTitle: "CRAWLER & ARTICLE RECOVERY (요약 미제공 매체 기사 복구 증빙)",
            benchmarkImages: [
              {
                title: "한국경제(HANKYUNG) 등 요약 미제공 매체 기사 복구 화면",
                desc: "요약 누락 매체 필터링 및 조건부 Jsoup 본문 크롤링을 통한 실시간 복구",
                src: "./images/monew_hankyung_crawling.png",
              },
            ],
          },
        },
      ],
    },
  ],

  careers: [
    {
      period: "2024.09.02 - 2024.12.20",
      company: "(주)남양에스티엔",
      role: "ICT 부서 | 인턴",
      type: "인턴",
      description: "시스템통합(SI) 및 버스정보시스템(BIS) 사업 추진 및 운영 지원",
      achievements: [
        "버스 차량 단말기 유지보수 보고서 자동화: Naver OCR API를 활용해 차량 번호 및 단말기 번호를 자동 인식하고, Python 스크립트로 보고서 작성 프로세스 자동화",
        "기업부설연구소 연구노트 작성 보조: 사내 측정 데이터를 기반으로 연구노트 작성 및 기술 자료 조사 보조",
        "버스 도착 정보 안내기(BIT) 및 현장 단말기 통신 상태 모니터링 보조",
      ],
      skills: ["Python", "Naver OCR API", "Linux", "BIS"],
    },
  ],

  certifications: [
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2024.12.13",
      status: "취득",
      badgeColor: "indigo",
    },
  ],

  education: [
    {
      period: "2025.12.30 - 2026.07.29",
      title: "AWS 활용 Spring 백엔드 개발자 실무 부트캠프",
      organization: "코드잇 / K-Digital Training",
      details: "1,250시간 집중 코스. Java/Spring Boot 기반 RESTful API 설계, JPA N+1 및 QueryDSL 튜닝, TDD/BDD 테스트, AWS + GitHub Actions CI/CD 무중단 배포, Redis 캐싱 및 Kafka 분산 이벤트 아키텍처 학습",
    },
  ],
};
