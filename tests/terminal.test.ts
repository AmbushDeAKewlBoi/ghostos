import { describe, expect, it } from "vitest";
import { runCommand, type TermContext } from "../src/engine/terminal";

const baseCtx: TermContext = {
  cwd: "/CASE_014",
  completedPuzzle: [],
  recoveredFiles: [],
  verifiedFiles: [],
  arcRevealed: false,
  endingReached: false,
  ghostGone: false,
};

describe("terminal basics", () => {
  it("help lists available commands", () => {
    const result = runCommand("help", baseCtx);

    expect(result.lines.join("\n")).toContain("ls");
    expect(result.lines.join("\n")).toContain("cat");
  });

  it("ls lists files in the current directory", () => {
    const result = runCommand("ls", baseCtx);

    expect(result.lines).toContain("offical_report.txt");
    expect(result.lines).toContain("readme_first.txt");
  });

  it("cat prints a file's contents", () => {
    const result = runCommand("cat offical_report.txt", baseCtx);

    expect(result.lines.join("\n")).toContain("INCIDENT REPORT 014-A");
  });

  it("rejects unknown commands", () => {
    const result = runCommand("dance", baseCtx);

    expect(result.lines[0]).toContain("unknown command");
  });
});
