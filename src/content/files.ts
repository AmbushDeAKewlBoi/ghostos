import type { GhostFile } from "../types";

const F = (
  id: string,
  name: string,
  path: string,
  type: GhostFile["type"],
  metadata: GhostFile["metadata"],
  extra: Partial<GhostFile> = {},
): GhostFile => ({
  id,
  name,
  path,
  type,
  metadata,
  ...extra,
});

export const FILES: GhostFile[] = [
  F(
    "official_report",
    "offical_report.txt",
    "/CASE_014/offical_report.txt",
    "text",
    {
      created: "2003-10-15 09:22",
      modified: "2003-10-15 09:12",
      owner: "srenn",
    },
    {
      contents: [
        "MERIDIAN SYSTEMS",
        "INCIDENT REPORT 014-A — FACILITY 6",
        "Filed: October 15, 2003 — S. Renn, Director",
        "",
        "At approximately 23:48 on October 14, Facility 6 suffered",
        "a total electrical failure. All on-site servers ceased",
        "operation. Backup generators failed to engage.",
        "",
        "Lead systems engineer Mara Voss was on site at the time.",
        "Her current whereabouts are unknown.",
        "",
        "Cause: electrical failure (under investigation).",
        "Data loss: total. No records were recoverable.",
        "",
        "This report supersedes all prior drafts.",
      ].join("\n"),
    },
  ),

  F(
    "readme_first",
    "readme_first.txt",
    "/CASE_014/readme_first.txt",
    "text",
    {
      created: "2003-09-02 14:40",
      modified: "2003-10-13 18:02",
      owner: "mvoss",
    },
    {
      contents: [
        "FACILITY 6 WORKSTATION 3 — NOTES (mv)",
        "",
        "- recovery index rebuilds at 02:00, don't touch it",
        "- the wall clock runs about 4 min fast. known issue.",
        "  not fixing it. it bothers Renn, which is a bonus.",
        "- if the auditors ask: the tapes were reported. twice.",
        "- jonas: STOP renaming my folders",
      ].join("\n"),
    },
  ),
];
