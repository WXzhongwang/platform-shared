/**
 * @platform/auth — 运行环境探测与免登换发。
 * 链路：环境探测（PC 浏览器/钉钉/企微/飞书）→ 选择免登方式 → 调 auth-service 换统一 JWT。
 */
export type RuntimeEnv = 'browser' | 'dingtalk' | 'wecom' | 'feishu';

export function detectEnv(): RuntimeEnv {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (ua.includes('DingTalk')) return 'dingtalk';
  if (ua.includes('wxwork')) return 'wecom';
  if (ua.includes('Feishu') || ua.includes('Lark')) return 'feishu';
  return 'browser';
}

/** 免登码换发统一 JWT（auth-service /api/auth/exchange/{platform}） */
export async function exchangeToken(platform: RuntimeEnv, code: string): Promise<{ accessToken: string }> {
  const res = await fetch(`/api/auth/exchange/${platform}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!res.ok) throw new Error(`exchange failed: ${res.status}`);
  return res.json();
}
