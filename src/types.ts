export type AppId = "archive" | "relay" | "terminal" | "pulse";

export interface WindowState {
  id: string;
  app: AppId;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  props?: Record<string, string>;
}

export type FileType = "text" | "image" | "audio" | "archive" | "corrupted";

export interface FileMetadata {
  created: string;
  modified: string;
  owner: string;
  checksum?: string;
  markedBy?: string;
}

export interface GhostFile {
  id: string;
  name: string;

  path: string;
  type: FileType;
  contents?: string;

  description?: string;

  unlockedCondition?: string;

  deleted?: boolean;

  encrypted?: boolean;
  metadata: FileMetadata;
}

export interface TerminalEntry {
  input: string;
  output: string[];
}

export type RouteAccess = "none" | "janitor" | "ghost" | "both";

export interface RouteState {
  archive: RouteAccess;
  cache: RouteAccess;
  uplink: RouteAccess;
}

export interface Message {
  id: string;
  from: string;
  time: string;
  body: string;
}

export interface Thread {
  id: string;
  title: string;
  participants: string;
  messages: Message[];
  unlockCondition?: string;
  recovered?: boolean;
}

export interface Fragment {
  id: string;
  seq: number | null;
  front: string;
  time: string;
  body: string;
}
