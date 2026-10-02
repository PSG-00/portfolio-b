// UptimeRobot API 연동 서비스
// Read-Only API Key를 사용하여 모니터의 실시간 상태(Online/Offline)를 조회합니다.

const DEFAULT_MONITORS = [
  {
    id: 'mopl',
    name: '모두의 플리 (MOPL)',
    url: 'https://mopl.psg-dev.site',
    status: 'online', // 'online' | 'offline' | 'loading'
    responseTime: 38,
    checkedAt: '방금 전',
  },
  {
    id: 'monew',
    name: '모뉴 (MONEW)',
    url: 'https://monew.psg-dev.site',
    status: 'online',
    responseTime: 45,
    checkedAt: '방금 전',
  },
];

/**
 * UptimeRobot getMonitors API 호출 함수
 * @param {string} apiKey - UptimeRobot Read-Only API Key (ur... 형태)
 * @returns {Promise<{ success: boolean, isFallback: boolean, monitors: Array, updatedAt: string, error?: string }>}
 */
export async function fetchUptimeRobotStatus(apiKey) {
  // API Key가 없거나 기본 플레이스홀더인 경우 기본값(Online) 제공
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('YOUR_') || apiKey.length < 10) {
    return {
      success: true,
      isFallback: true,
      monitors: DEFAULT_MONITORS,
      updatedAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };
  }

  try {
    const params = new URLSearchParams();
    params.append('api_key', apiKey.trim());
    params.append('format', 'json');
    params.append('response_times', '1');

    const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`UptimeRobot HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    if (data.stat !== 'ok') {
      throw new Error(data.error?.message || 'UptimeRobot API 응답 실패');
    }

    const currentTime = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    // 응답 모니터 목록 가공
    const fetchedMonitors = (data.monitors || []).map((m) => {
      // UptimeRobot Status Code:
      // 0 = Paused, 1 = Not checked yet, 2 = Up (Online), 8 = Seems Down, 9 = Down (Offline)
      const isOnline = m.status === 2;
      const isOffline = m.status === 9 || m.status === 8;
      const latestResponse = m.response_times?.[0]?.value || null;

      let displayName = m.friendly_name || m.url;
      const lower = displayName.toLowerCase();
      if (lower.includes('mopl')) {
        displayName = '모두의 플리 (MOPL)';
      } else if (lower.includes('monew')) {
        displayName = '모뉴 (MONEW)';
      }

      return {
        id: m.id,
        name: displayName,
        url: m.url,
        status: isOnline ? 'online' : isOffline ? 'offline' : 'paused',
        rawStatus: m.status,
        responseTime: latestResponse,
        checkedAt: currentTime,
      };
    });

    // MOPL 우선 정렬
    fetchedMonitors.sort((a, b) => {
      if (a.name.includes('MOPL')) return -1;
      if (b.name.includes('MOPL')) return 1;
      return 0;
    });

    return {
      success: true,
      isFallback: false,
      monitors: fetchedMonitors.length > 0 ? fetchedMonitors : DEFAULT_MONITORS,
      updatedAt: currentTime,
    };
  } catch (err) {
    console.warn('[UptimeRobot] 실시간 조회 실패, 기본 상태로 표시합니다:', err.message);
    return {
      success: false,
      isFallback: true,
      error: err.message,
      monitors: DEFAULT_MONITORS,
      updatedAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };
  }
}
