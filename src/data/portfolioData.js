export const portfolioData = {
  "profile": {
    "name": "박성국",
    "role": "Backend Developer",
    "avatar": "./profile.jpg",
    "statusBadge": "PROFILE",
    "email": "cdjsdj1902@gmail.com",
    "phone": "010-6480-6782",
    "github": "https://github.com/PSG-00",
    "blog": "https://memo50984.tistory.com",
    "linkedin": "https://www.linkedin.com/in/%EC%84%B1%EA%B5%AD-%EB%B0%95-198453433/",
    "education": "조선대학교 컴퓨터공학과 학사 졸업\n(4.0 / 4.5)"
  },
  "about": {
    "badge": "About Me",
    "headline": "장애에 대비하는 설계,\n안정적으로 이어지는 서비스.",
    "description": "대용량 미디어 데이터 수집 환경에서 외부 장애를 격리하고, 유실 없는 복구 파이프라인을 구축했습니다\n10만 건 규모의 데이터와 200명 동시 사용자 환경에서 K6로 병목을 진단하고, 검색 응답 지연을 98.7% 단축시켰습니다\nAWS 무중단 배포로 가용성을 확보하고, 고비용 워크로드는 온프레미스 환경으로 구축하여 비용 효율을 극대화했습니다",
    "highlights": [
      {
        "label": "장애 격리 & 복구",
        "desc": "외부 API 실패 격리 · Spring Batch 무유실 복구"
      },
      {
        "label": "트래픽 성능 최적화",
        "desc": "K6 · Elasticsearch\nP95 응답 지연 98.7% 단축"
      },
      {
        "label": "고가용성 인프라",
        "desc": "AWS ALB · ECS 무중단 배포\nGitHub Actions CI/CD"
      }
    ],
    "skills": [
      "Java 17",
      "Spring Boot 3.x",
      "Spring Batch",
      "JPA / QueryDSL",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Docker",
      "AWS (ALB, ECS)",
      "GitHub Actions",
      "K6"
    ]
  },
  "quickNavItems": [
    {
      "id": "profile",
      "label": "프로필",
      "category": "About",
      "desc": "소개 및 인프라 운영"
    },
    {
      "id": "project-1",
      "label": "모두의 플리",
      "category": "Project",
      "desc": "글로벌 컨텐츠 평점 플랫폼"
    },
    {
      "id": "project-2",
      "label": "모뉴",
      "category": "Project",
      "desc": "키워드 기반 뉴스 수집 플랫폼"
    },
    {
      "id": "career",
      "label": "경력",
      "category": "Career",
      "desc": "실무 인턴 이력"
    },
    {
      "id": "education",
      "label": "교육 및 활동",
      "category": "Activities",
      "desc": "실무 부트캠프"
    },
    {
      "id": "certifications",
      "label": "자격증",
      "category": "Certificates",
      "desc": "공인 SQLD 자격"
    }
  ],
  "projects": [
    {
      "id": "project-1",
      "number": "01",
      "badge": "대표 프로젝트",
      "teamSize": "4인 협업 프로젝트",
      "title": "모두의 플리 (MOPL)",
      "subtitle": "영화·스포츠 콘텐츠 수집 및 평점 플랫폼",
      "period": "2026.06.19 - 2026.07.29",
      "role": "콘텐츠 도메인·수집 파이프라인·배포 인프라 | 기여도 35%",
      "image": "./images/mopl_main.png",
      "description": "TMDB·SportsDB 콘텐츠 자동 수집, 실시간 검색, 별점·리뷰와 장르별 큐레이션 제공.",
      "keyFeatures": [
        "콘텐츠 자동 수집: TMDB·SportsDB 일 500회 이상 호출 및 무유실 갱신",
        "검색 성능 개선: 10만 건 대상 Elasticsearch 검색 P95 13.02ms",
        "평점·큐레이션: 콘텐츠 상세, 별점·리뷰, 장르·태그 기반 추천",
        "무중단 배포: AWS ALB·ECS 롤링 업데이트 및 부하 대응 인프라 구축"
      ],
      "techStack": [
        "Java 17",
        "Spring Boot 3.x",
        "Spring Batch",
        "JPA / QueryDSL",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Docker",
        "AWS (ALB, ECS)",
        "GitHub Actions",
        "K6",
        "Grafana"
      ],
      "links": {
        "demo": "https://mopl.psg-dev.site",
        "github": "https://github.com/PSG-00/sb10-mopl-team1"
      },
      "myRole": {
        "headline": "콘텐츠 설계부터 배치 수집·배포 인프라까지",
        "summary": "콘텐츠 모델·CRUD API와 외부 데이터 수집 배치 설계. ALB·ECS 기반 무중단 배포 및 트래픽 대응 인프라 구축.",
        "keyResponsibilities": [
          {
            "title": "콘텐츠 도메인·CRUD API",
            "desc": "영화·TV·스포츠와 태그의 다대다 모델링, 커서 기반 페이지네이션 구현."
          },
          {
            "title": "외부 API 배치 수집",
            "desc": "TMDB·SportsDB 일 500회 이상 호출을 처리하는 Spring Batch 청크 파이프라인 구축."
          },
          {
            "title": "DB 커넥션 풀 격리",
            "desc": "배치의 커넥션 독점 방지를 위한 API·배치 풀 분리 및 Lazy 프록시 적용."
          },
          {
            "title": "ECS 무중단 배포",
            "desc": "ALB·ECS Fargate 롤링 업데이트 구성. 트래픽 모니터링 기반 태스크 수동 증설·조정."
          }
        ]
      },
      "acts": [
        {
          "actNumber": "ACT 01",
          "category": "FAULT TOLERANCE & BATCH",
          "title": "외부 API 장애 격리와 자동 복구",
          "problemHypothesis": {
            "theme": "수집 중단과 DB 커넥션 고갈",
            "painPoints": [
              {
                "id": "PAIN POINT 01",
                "title": "일시 장애로 배치 중단",
                "desc": "일 500회 이상 호출 중 429·502·503 또는 네트워크 단절 발생 시 전체 배치 중단."
              },
              {
                "id": "PAIN POINT 02",
                "title": "요청 차단 후 복구 지점 부재",
                "desc": "서킷 브레이커의 요청 차단 이후, 누락 데이터를 이어받을 체크포인트 부재."
              },
              {
                "id": "PAIN POINT 03",
                "title": "영구 장애 재시도·감시 공백",
                "desc": "인증 실패·스키마 변경에도 재시도가 반복되어 스레드 낭비. 즉각적인 감시 체계 부재."
              }
            ],
            "hypotheses": [
              {
                "id": "H1 → PAIN POINT 01",
                "title": "지수 백오프 재시도",
                "desc": "Spring Retry로 일시 통신 오류와 429 응답을 메모리 단계에서 재시도."
              },
              {
                "id": "H2 → PAIN POINT 02",
                "title": "체크포인트 기반 재시작",
                "desc": "재시도 실패 잡을 FAILED 처리. Batch 메타데이터에서 실패 청크를 찾아 재개."
              },
              {
                "id": "H3 → PAIN POINT 03",
                "title": "예외 분류와 운영 알림",
                "desc": "isFatalFailure()로 복구 대상을 판별. 영구 장애 잠금 및 Prometheus·Discord 알림."
              }
            ]
          },
          "solution": {
            "title": "재시도·체크포인트 복구·풀 격리·관제",
            "pipeline": [
              {
                "step": "01",
                "title": "중복 제거·일괄 조회",
                "desc": "Set 중복 제거 후 providerId IN 쿼리 1회로 존재 여부 확인. N+1 SELECT 방지.",
                "tech": "Spring Batch Chunk / IN Query"
              },
              {
                "step": "02",
                "title": "커넥션 풀 분리",
                "desc": "API 10개·배치 5개 풀 격리. Lazy 프록시로 외부 통신 중 커넥션 점유 방지.",
                "tech": "HikariCP / Lazy Proxy"
              },
              {
                "step": "03",
                "title": "체크포인트 복구",
                "desc": "ShedLock으로 중복 실행 방지. KST 02~07시, 10분마다 동일 JobInstance의 실패 청크 재시작.",
                "tech": "Spring Batch / ShedLock"
              },
              {
                "step": "04",
                "title": "관제·수동 복구",
                "desc": "afterCommit() 기준 메트릭 집계. 자동 복구 3회 실패 시 잠금·Discord 알림, 수동 복구 API 제공.",
                "tech": "Micrometer / Grafana"
              }
            ],
            "technicalHighlights": [
              {
                "name": "API·배치 전용 HikariCP 풀",
                "desc": "배치의 커넥션 독점으로 인한 사용자 API 지연 방지."
              },
              {
                "name": "LazyConnectionDataSourceProxy",
                "desc": "외부 API 대기 중 점유를 줄이고 SQL 실행 시점에 커넥션 획득."
              },
              {
                "name": "Set·IN 쿼리·saveAll",
                "desc": "Set<ProviderKey> 중복 제거 → findByProviderAndProviderIdIn 일괄 조회 → saveAll 저장."
              },
              {
                "name": "커밋 이후 메트릭 집계",
                "desc": "TransactionSynchronization.afterCommit()에서 카운터 증가. 롤백 데이터의 지표 반영 방지."
              }
            ],
            "codeSnippets": []
          },
          "result": {
            "title": "데이터 유실 0건, 웹 서비스 영향도 0%",
            "summary": "지수 백오프·체크포인트 재시작으로 수집 복구. 커넥션 풀 분리와 Lazy 프록시로 피크 시간대 배치의 웹 서비스 영향 격리.",
            "metrics": [
              {
                "label": "데이터 유실률",
                "value": "0%",
                "desc": "Batch 메타데이터 기반 체크포인트 재시작"
              },
              {
                "label": "청크 중복 검증 쿼리",
                "value": "N회 ➔ 1회",
                "desc": "IN 쿼리 일괄 조회 및 Set 기반 N+1 방지"
              },
              {
                "label": "웹 서비스 영향도",
                "value": "0%",
                "desc": "커넥션 풀 분리 격리 + Lazy 프록시"
              },
              {
                "label": "영구 장애 감지",
                "value": "실시간",
                "desc": "isFatalFailure() + Grafana & Discord"
              }
            ],
            "benchmarkTitle": "GRAFANA MONITORING & REAL-TIME ALERTS (실측 관제 및 경보 증빙)",
            "benchmarkImages": [
              {
                "title": "Grafana 실시간 배치 잡 상태 및 API 호출 성공률 (100%)",
                "desc": "TMDB/SportsDB 수집 잡 COMPLETED 및 API 호출 성공률 100% 모니터링",
                "src": "./images/mopl_api_success_rate.png"
              },
              {
                "title": "Grafana ➔ Discord 3회 연속 실패 경보 (FIRING)",
                "desc": "치명적 장애 3회 연속 감지 시 즉시 Critical 경보 발송 및 자동 잠금",
                "src": "./images/mopl_grafana_alert.png"
              }
            ]
          }
        },
        {
          "actNumber": "ACT 02",
          "category": "PERFORMANCE OPTIMIZATION",
          "title": "Elasticsearch 검색 성능 98.7% 개선",
          "problemHypothesis": {
            "theme": "10만 건 검색에서 P95 응답 지연 1.02초",
            "painPoints": [
              {
                "id": "PAIN POINT 01",
                "title": "와일드카드 검색의 전체 스캔",
                "desc": "LIKE %keyword% 조건의 B-Tree 인덱스 미활용. 10만 건 전체 스캔에 따른 I/O 병목."
              },
              {
                "id": "PAIN POINT 02",
                "title": "다대다 태그 조회 비용",
                "desc": "Content·Tag N:M 매핑의 EXISTS 서브쿼리 반복 평가로 CPU 비용 증가."
              },
              {
                "id": "PAIN POINT 03",
                "title": "동시 부하에서 응답 지연",
                "desc": "가상 사용자 200명 조건에서 복합 커서 정렬·전체 스캔이 겹쳐 P95 1.02초 기록."
              }
            ],
            "hypotheses": [
              {
                "id": "H1 → PAIN POINT 01",
                "title": "역색인 기반 검색",
                "desc": "Elasticsearch 역색인으로 전체 스캔을 줄여 10만 건 검색 성능 개선."
              },
              {
                "id": "H2 → PAIN POINT 02",
                "title": "태그 배열 비정규화",
                "desc": "문서 내부 tags 배열과 terms query로 다대다 조인 연산 제거."
              },
              {
                "id": "H3 → PAIN POINT 03",
                "title": "검색 부하 분리",
                "desc": "RDB 검색을 별도 엔진으로 이관. P95 20ms 이하, 98% 이상 단축 목표."
              }
            ]
          },
          "solution": {
            "title": "K6 병목 진단과 Elasticsearch 전환",
            "pipeline": [
              {
                "step": "01",
                "title": "K6 시나리오 설계",
                "desc": "밀리의 서재 리포트·TMDB 기반 10만 건 데이터. 동시 사용자 200명·검색어 40개·Think Time 1초.",
                "tech": "K6 / Mock 10만 건"
              },
              {
                "step": "02",
                "title": "실행 계획 분석",
                "desc": "QueryDSL 쿼리의 EXPLAIN으로 LIKE 전체 스캔과 정렬 병목 진단.",
                "tech": "PostgreSQL Explain"
              },
              {
                "step": "03",
                "title": "검색 문서 모델링",
                "desc": "ContentTag 조인을 tags 배열로 평탄화. MultiMatchQuery·TermsQuery 적용.",
                "tech": "Elasticsearch / Inverted Index"
              },
              {
                "step": "04",
                "title": "복합 커서 매핑",
                "desc": "시청자 수 → 리뷰 수 → ID 순서의 커서를 search_after에 매핑하여 대용량 스크롤 처리.",
                "tech": "search_after Pagination"
              }
            ],
            "technicalHighlights": [
              {
                "name": "전체 스캔에서 역색인으로",
                "desc": "10만 건 순차 스캔을 역색인 조회로 전환하여 검색 비용 절감."
              },
              {
                "name": "태그 비정규화",
                "desc": "N:M 매핑·EXISTS 서브쿼리를 문서 내 tags 배열로 대체하여 조인 오버헤드 제거."
              },
              {
                "name": "실서비스 규모의 부하 조건",
                "desc": "밀리의 서재 리포트·글로벌 카탈로그 기반 10만 건 데이터와 Think Time 1초로 동시성 검증."
              }
            ],
            "codeSnippets": []
          },
          "result": {
            "title": "P95 98.7% 단축, 처리량 56.8% 향상",
            "summary": "K6로 RDB 검색 병목을 진단하고 역색인·문서 비정규화 적용. 동일 부하 조건에서 P95 1.02s → 13.02ms, 처리량 87.48 → 137.20 req/s 기록.",
            "metrics": [
              {
                "label": "P95 응답 속도",
                "value": "1.02s ➔ 13.02ms",
                "desc": "98.7% 대폭 단축 (1,020ms ➔ 13ms)"
              },
              {
                "label": "평균(Avg) 응답 속도",
                "value": "590ms ➔ 6.44ms",
                "desc": "98.9% 단축으로 즉각적인 검색 반응"
              },
              {
                "label": "초당 처리량 (Throughput)",
                "value": "87.48 ➔ 137.20 req/s",
                "desc": "+56.8% 향상으로 동시 요청 수용력 증대"
              },
              {
                "label": "부하 테스트 에러율",
                "value": "0.00%",
                "desc": "200명 동시 요청 9,741건 무장애 통과"
              }
            ],
            "benchmarkTitle": "K6 LOAD TEST REAL-BENCHMARK (부하 테스트 실측 결과 증빙)",
            "benchmarkImages": [
              {
                "title": "RDB (PostgreSQL + QueryDSL) 실측 결과",
                "desc": "P95 응답 지연 1.02s, 평균 590.13ms 소요",
                "src": "./images/k6_rdb_result.png"
              },
              {
                "title": "Elasticsearch 역색인 검색 실측 결과",
                "desc": "P95 응답 지연 13.02ms, 평균 6.44ms로 98.7% 개선",
                "src": "./images/k6_es_result.png"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "project-2",
      "number": "02",
      "badge": "팀 협업 프로젝트",
      "teamSize": "5인 협업 프로젝트",
      "title": "모뉴 (MONEW)",
      "subtitle": "키워드 기반 뉴스 수집·요약·공유 플랫폼",
      "period": "2026.04.14 - 2026.05.08",
      "role": "RSS·뉴스 API 수집, 크롤링·LLM Fallback | 기여도 25%",
      "image": "./images/monew_main.png",
      "description": "언론사 기사 통합 수집, 관심 키워드 구독, LLM 3줄 요약과 댓글·공유 제공.",
      "keyFeatures": [
        "기사 통합 수집: RSS·네이버 뉴스 API 표준 수집 파이프라인 구축",
        "3줄 요약: Groq·Gemini 연동 및 장애 시 자동 전환",
        "키워드 구독: 관심사별 실시간 맞춤 뉴스 피드 제공",
        "소셜 기능: 기사 댓글과 키워드 트렌드 공유"
      ],
      "techStack": [
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
        "Gemini API"
      ],
      "links": {
        "demo": "https://monew.psg-dev.site",
        "github": "https://github.com/PSG-00/sb10-monew-team05"
      },
      "myRole": {
        "headline": "뉴스 수집 표준화와 LLM Fallback 설계",
        "summary": "RSS 인코딩·데이터 규격 통합. 요약 누락과 외부 API 장애에 대응하는 크롤링·캐시·LLM 복구 파이프라인 구축.",
        "keyResponsibilities": [
          {
            "title": "RSS 수집 추상화",
            "desc": "매체별 인코딩 감지로 한글 깨짐 방지. ROME 기반 피드 표준화."
          },
          {
            "title": "조건부 본문 크롤링",
            "desc": "요약 누락 기사만 본문 추출. 인메모리 캐시로 중복 요청·봇 차단 위험 감소."
          },
          {
            "title": "Groq → Gemini Fallback",
            "desc": "Groq 장애·Rate Limit 발생 시 Gemini로 자동 전환하는 요약 파이프라인 구축."
          }
        ]
      },
      "acts": [
        {
          "actNumber": "ACT 01",
          "category": "PIPELINE EXTENSIBILITY",
          "title": "RSS 수집 표준화와 매체 확장",
          "problemHypothesis": {
            "theme": "매체마다 다른 인코딩과 RSS 규격",
            "painPoints": [
              {
                "id": "PAIN POINT 01",
                "title": "문자셋 불일치",
                "desc": "EUC-KR·CP949·UTF-8 등 매체별 인코딩 차이로 수집 기사 한글 깨짐."
              },
              {
                "id": "PAIN POINT 02",
                "title": "XML·날짜 규격 충돌",
                "desc": "서로 다른 XML 구조와 일부 매체의 pubDate 오프셋(+09:00)이 표준 파서와 충돌."
              },
              {
                "id": "PAIN POINT 03",
                "title": "매체별 파서 개발 부담",
                "desc": "신규 언론사마다 수집기·파서 추가 구현 필요. 유지보수 복잡도 증가."
              }
            ],
            "hypotheses": [
              {
                "id": "H1 → PAIN POINT 01",
                "title": "3중 인코딩 감지",
                "desc": "XML 선언 → HTML meta charset → HTTP Content-Type 순서로 문자셋 판별·디코딩."
              },
              {
                "id": "H2 → PAIN POINT 02",
                "title": "SyndFeed 단일 모델",
                "desc": "정규표현식으로 XML·날짜 정규화 후 ROME SyndFeed로 추상화."
              },
              {
                "id": "H3 → PAIN POINT 03",
                "title": "URL 등록 기반 확장",
                "desc": "표준 수집 파이프라인으로 통합하여 개별 파서 없이 피드 URL만 추가."
              }
            ]
          },
          "solution": {
            "title": "인코딩 감지 → 규격 정규화 → 매체 확장",
            "pipeline": [
              {
                "step": "01",
                "title": "인코딩 자동 감지",
                "desc": "선두 4KB에서 XML 선언·HTML 메타태그·HTTP 헤더 순서로 문자셋 판별.",
                "tech": "ResponseBodyDecoder / Charset Regex"
              },
              {
                "step": "02",
                "title": "피드 규격 정규화",
                "desc": "DOCTYPE 제거, +09:00 → +0900 변환 후 SyndFeedInput으로 단일 객체 생성.",
                "tech": "XmlParser / ROME SyndFeed"
              },
              {
                "step": "03",
                "title": "피드 URL 등록",
                "desc": "NewsSourceUrl에 URL을 추가해 전용 파서 구현 없이 신규 매체 연동.",
                "tech": "NewsSourceUrl Enum / Extensible Pipeline"
              }
            ],
            "technicalHighlights": [
              {
                "name": "헤더 누락·오선언 대응",
                "desc": "XML·HTML 내부 선언 우선 확인으로 RSS 문자셋 자동 감지."
              },
              {
                "name": "ROME 파싱 전처리",
                "desc": "비표준 pubDate 오프셋 정규화로 FeedException 방지."
              },
              {
                "name": "비즈니스 로직 재사용",
                "desc": "수집 로직 수정 없이 피드 URL 등록으로 10개 언론사 통합."
              }
            ],
            "codeSnippets": []
          },
          "result": {
            "title": "한글 깨짐 0건, 10개 언론사 통합",
            "summary": "3중 인코딩 감지와 SyndFeed 추상화 적용. 매체별 파서 추가 없이 URL 등록으로 뉴스 수집 범위 확장.",
            "metrics": [
              {
                "label": "신규 매체 연동 방식",
                "value": "URL 등록 방식",
                "desc": "개별 파서 개발 없이 피드 URL만 등록"
              },
              {
                "label": "한글 텍스트 깨짐율",
                "value": "0%",
                "desc": "XML·HTML·HTTP 3중 인코딩 감지"
              },
              {
                "label": "통합 수집 매체 수",
                "value": "10개 언론사",
                "desc": "한경, 조선, 연합, JTBC, 동아, 매경 등"
              }
            ],
            "benchmarkTitle": "RSS FEED SOURCES (10개 언론사 RSS 피드 통합 수집 증빙)",
            "benchmarkImages": [
              {
                "title": "10개 언론사 RSS 피드 통합 수집 및 필터링 화면",
                "desc": "조선, 동아, 한경, JTBC, 경향 등 10개 언론사 RSS 피드 연동 및 수집",
                "src": "./images/monew_rss_10_sources.png"
              }
            ]
          }
        },
        {
          "actNumber": "ACT 02",
          "category": "HIGH AVAILABILITY PIPELINE",
          "title": "본문 크롤링과 LLM 장애 대응",
          "problemHypothesis": {
            "theme": "요약 누락과 외부 LLM 장애 대응",
            "painPoints": [
              {
                "id": "PAIN POINT 01",
                "title": "RSS 요약 누락",
                "desc": "한국경제 등 일부 매체의 Description 미제공으로 관심 기사 요약 확인 불가."
              },
              {
                "id": "PAIN POINT 02",
                "title": "반복 크롤링의 차단 위험",
                "desc": "동일 기사 본문 반복 요청 시 언론사 방화벽의 IP 차단 위험."
              },
              {
                "id": "PAIN POINT 03",
                "title": "단일 LLM 의존",
                "desc": "API 장애·Rate Limit 발생 시 뉴스 요약 제공 중단."
              }
            ],
            "hypotheses": [
              {
                "id": "H1 → PAIN POINT 01",
                "title": "요약 누락 시 본문 수집",
                "desc": "Description이 비어 있는 기사만 크롤링 후 LLM 요약 수행."
              },
              {
                "id": "H2 → PAIN POINT 02",
                "title": "본문 인메모리 캐싱",
                "desc": "RSS 소스·링크 기준 캐시로 본문 재요청 감소."
              },
              {
                "id": "H3 → PAIN POINT 03",
                "title": "다중 LLM Fallback",
                "desc": "Groq 우선 호출, 장애 발생 시 Gemini 자동 전환으로 요약 연속성 확보."
              }
            ]
          },
          "solution": {
            "title": "조건부 수집·캐시·Groq → Gemini 전환",
            "pipeline": [
              {
                "step": "01",
                "title": "본문 수집 분기",
                "desc": "RSS 요약 누락 시 Jsoup으로 기사 본문 추출.",
                "tech": "Jsoup / Dynamic Crawler"
              },
              {
                "step": "02",
                "title": "인메모리 캐시",
                "desc": "RSS 소스·링크 해시를 키로 본문 저장. 재크롤링·봇 차단 위험 감소.",
                "tech": "In-Memory Cache"
              },
              {
                "step": "03",
                "title": "Groq 우선 호출",
                "desc": "약 500ms 응답의 Groq API로 뉴스 요약 생성.",
                "tech": "Groq API (Primary)"
              },
              {
                "step": "04",
                "title": "Gemini 자동 전환",
                "desc": "Groq 실패·타임아웃·429 감지 시 Gemini로 Fallback.",
                "tech": "Gemini API (Fallback)"
              }
            ],
            "technicalHighlights": [
              {
                "name": "키워드 매칭 후 요약",
                "desc": "관심 키워드와 본문이 매칭된 기사만 LLM 호출하여 API 비용 절감."
              },
              {
                "name": "중복 요청 캐시 반환",
                "desc": "동일 본문을 캐시에서 반환하여 언론사 요청 부하·IP 차단 위험 감소."
              },
              {
                "name": "LLM 벤더 이중화",
                "desc": "Groq 장애 격리와 Gemini 전환으로 요약 서비스 연속성 확보."
              }
            ],
            "codeSnippets": []
          },
          "result": {
            "title": "요약 공백 해소와 LLM 가용성 확보",
            "summary": "요약 누락 기사는 본문 크롤링·캐시로 복구. Groq·Gemini Fallback으로 외부 API 장애 시 요약 제공 유지.",
            "metrics": [
              {
                "label": "요약 공백율",
                "value": "0%",
                "desc": "본문 크롤링 + LLM 자동 요약 결합"
              },
              {
                "label": "평균 요약 속도",
                "value": "약 500ms",
                "desc": "Groq API 메인 호출로 초고속 생성"
              },
              {
                "label": "LLM 가용성",
                "value": "99.9%",
                "desc": "Gemini 다중 Fallback으로 무중단 보장"
              },
              {
                "label": "크롤링 봇 차단율",
                "value": "0%",
                "desc": "인메모리 캐시 기반 중복 요청 방어"
              }
            ],
            "benchmarkTitle": "CRAWLER & ARTICLE RECOVERY (요약 미제공 매체 기사 복구 증빙)",
            "benchmarkImages": [
              {
                "title": "한국경제(HANKYUNG) 등 요약 미제공 매체 기사 복구 화면",
                "desc": "요약 누락 매체 필터링 및 조건부 Jsoup 본문 크롤링을 통한 실시간 복구",
                "src": "./images/monew_hankyung_crawling.png"
              }
            ]
          }
        }
      ]
    }
  ],
  "careers": [
    {
      "period": "2024.09.02 - 2024.12.20",
      "company": "(주)남양에스티엔",
      "role": "ICT 부서 | 인턴",
      "type": "인턴",
      "description": "시스템통합(SI) 및 버스정보시스템(BIS) 사업 추진 및 운영 지원",
      "achievements": [
        "Naver OCR·Python 기반 차량·단말기 번호 인식 및 유지보수 보고서 작성 자동화",
        "사내 측정 데이터 기반 연구노트 작성·기술 자료 조사 보조",
        "버스정보안내기(BIT)·현장 단말기 통신 상태 모니터링 보조"
      ],
      "skills": [
        "Python",
        "Naver OCR API",
        "Linux",
        "BIS"
      ]
    }
  ],
  "certifications": [
    {
      "name": "SQLD (SQL 개발자)",
      "issuer": "한국데이터산업진흥원",
      "date": "2024.12.13",
      "status": "취득",
      "badgeColor": "indigo"
    }
  ],
  "education": [
    {
      "period": "2025.12.30 - 2026.07.29",
      "title": "AWS 활용 Spring 백엔드 개발자 실무 부트캠프",
      "organization": "코드잇 / K-Digital Training",
      "details": "1,250시간 이수. Java·Spring API 설계, JPA N+1·QueryDSL 튜닝, TDD·BDD, AWS·GitHub Actions 무중단 배포, Redis 캐싱·Kafka 이벤트 아키텍처 학습."
    }
  ]
};
