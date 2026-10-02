// UptimeRobot API 연동 서비스
// Read-Only API Key를 사용하여 모니터의 실시간 상태(Online/Offline)를 조회합니다.

const FALLBACK_MONITORS = [
  {
    id: 'mopl',
    name: '모두의 플리 (MOPL)',
    url: 'https://mopl.psg-dev.site',
    status: 'error',
    responseTime: null,
    checkedAt: '-',
  },
  {
    id: 'monew',
    name: '모뉴 (MONEW)',
    url: 'https://monew.psg-dev.site',
    status: 'error',
    responseTime: null,
    checkedAt: '-',
  },
];

/**
 * UptimeRobot getMonitors API 호출 함수
 * @param {string} apiKey - UptimeRobot Read-Only API Key (ur... 형태)
 * @returns {Promise<{ success: boolean, isError: boolean, monitors: Array, updatedAt: string, error?: string }>}
 */
export async function fetchUptimeRobotStatus(apiKey) {
  const currentTime = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  // API Key가 없거나 유효하지 않은 경우 명확하게 에러 상태 반환
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('YOUR_') || apiKey.length < 10) {
    return {
      success: false,
      isError: true,
      error: 'API Key 미설정',
      monitors: FALLBACK_MONITORS.map((m) => ({ ...m, checkedAt: currentTime })),
      updatedAt: currentTime,
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
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.stat !== 'ok') {
      throw new Error(data.error?.message || 'API 응답 실패');
    }

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
      isError: false,
      monitors: fetchedMonitors.length > 0 ? fetchedMonitors : FALLBACK_MONITORS,
      updatedAt: currentTime,
    };
  } catch (err) {
    console.error('[UptimeRobot] 실시간 조회 실패:', err.message);
    const errorMonitors = FALLBACK_MONITORS.map((m) => ({
      ...m,
      checkedAt: currentTime,
    }));

    return {
      success: false,
      isError: true,
      error: err.message,
      monitors: errorMonitors,
      updatedAt: currentTime,
    };
  }
}
