import type { GhostFile } from "../types";
import { FILES } from "../content/files";

export interface TermContext {
  cwd: string;
  completedPuzzles: string[];
  recoveredFiles: string[];
  verifiedFiles: string[];
  arcRevealed: boolean;
  endingReached: boolean;
  ghostGone: boolean;
}

export type TermEffect =
  | { type: "evidence"; id: string }
  | { type: "puzzle"; id: string }
  | { type: "recover"; fileId: string }
  | { type: "verify"; fileId: string }
  | { type: "revealArc" }
  | { type: "openFile"; fileId: string };

export interface TermResult {
  lines: string[];
  effects: TermEffect[];
  clear?: boolean;
  cwd?: string;
}
