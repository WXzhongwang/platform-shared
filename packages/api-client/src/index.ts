/**
 * @platform/api-client — 网关请求封装。
 * 骨架阶段：fetch 简单封装。TODO: 统一鉴权头注入、错误码翻译、401 跳基座登录、网关地址配置。
 */
const GATEWAY_BASE = '/api';

export interface ApiResult<T> {
  code: number;
  data: T;
  message?: string;
}

export async function request<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  const res = await fetch(`${GATEWAY_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (res.status === 401) {
    // TODO: 通知基座统一跳登录
    throw new Error('UNAUTHORIZED');
  }
  return res.json();
}
