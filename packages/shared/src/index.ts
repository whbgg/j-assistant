// Shared types and constants between desktop and server

// ---- Device ----
export interface DeviceInfo {
  id: string;
  name: string;
  platform: 'windows' | 'macos' | 'linux';
  lastSeen: string;
  status: 'online' | 'offline';
}

// ---- Session ----
export interface Session {
  id: string;
  deviceId: string;
  userId: string;
  startedAt: string;
  endedAt?: string;
}

// ---- Task ----
export interface Task {
  id: string;
  sessionId: string;
  type: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  payload: Record<string, unknown>;
  createdAt: string;
}

// ---- Agent ----
export interface AgentConfig {
  id: string;
  name: string;
  model: string;
  tools: string[];
}

// ---- Knowledge ----
export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt: string;
}
