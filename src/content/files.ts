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
  F(
    "mara_voss",
    "mara_voss.dat",
    "/CASE_014/personnel/mara_voss.dat",
    "corrupted",
    {
      created: "2002-03-11 10:00",
      modified: "2003-10-14 22:14",
      owner: "hr",
    },
    {
      contents: [
        "EMPLOYEE RECORD — MV-0041 (partial recovery)",
        "Name: Mara Voss",
        "Role: Lead Systems Engineer, Facility 6",
        "Clearance: systems, archives",
        "",
        "Session fragment: sign-in 22:14, Oct 14",
        "Last recorded activity: 00:07, Oct 15 — session still open",
        "",
        "[SECTOR DAMAGED — 214 bytes unreadable]",
        "",
        "Note: employee disputed the backup-tape replacement",
        "schedule on three separate occasions.",
      ].join("\n"),
    },
  ),

  F(
    "silas_renn",
    "silas_renn.txt",
    "/CASE_014/personnel/silas_renn.txt",
    "text",
    {
      created: "2001-06-04 09:30",
      modified: "2003-08-19 11:15",
      owner: "hr",
    },
    {
      contents: [
        "Silas Renn - Director, Facility 6",
        "",
        "With Meridian since 1998. Oversees system, archives,",
        "and the external audit scheduled for October 15.",
        "",
        "Direct reports: M. Voss (systems), D. Okafor (records),",
        "J. Lindqvist (systems, junior).",
      ].join("\n"),
    },
  ),

  F(
    "staff_list",
    "staff_list.txt",
    "/CASE_014/personnel/staff_list.txt",
    "text",
    {
      created: "2003-01-06 09:00",
      modified: "2003-10-01 16:44",
      owner: "hr",
    },
    {
      contents: [
        "Facility 6 - STAFF (october 2003)",
        "",
        "Mara Voss - Lead System Engineer",
        "Silas Renn - Director",
        "Dana Okafor - records clerk",
        "Jonas Lindqvist - junior sysadmin",
        "priya natarajan - QA (contractor)",
        "",
        "(list not updated since january. - hr)",
      ].join("\n"),
    },
  ),
  // ----- /CASE_014/system
  F(
    "shutdown_log",
    "shutdown.log",
    "/CASE_014/system/shutdown.log",
    "text",
    {
      created: "2003-10-14 00:00",
      modified: "2003-10-14 23:48",
      owner: "system",
      checksum: "expected 9f3a...c1 / on disk 41bd...77 - MISMATCH",
    },
    {
      contents: [
        "23:41:02 heartbeat ok",
        "23:44:17 heartbeat ok",
        "23:47:59 heartbeat ok",
        "23:58:00 SIGNAL LOST - external logging terminated",
        "",
        "[log ends - checksum verification recommended]",
      ].join("\n"),
    },
  ),

  F(
    "sessions",
    "sessions.txt",
    "/CASE_014/system/sessions.txt",
    "text",
    {
      created: "2003-10-14 00:00",
      modified: "2003-10-15 00:07",
      owner: "system",
    },
    {
      contents: [
        "FACILITY 6 — SESSION LOG (recovered)",
        "22:14:03  mvoss  sign-in   (workstation 3)",
        "22:31:40  srenn  sign-in   (workstation 1)",
        "23:47:55  srenn  sign-out  (workstation 1)",
        "23:52:11  mvoss  activity  (workstation 3)",
        "00:07:26  mvoss  activity  (workstation 3)",
      ].join("\n"),
    },
  ),
  F(
    "calendar",
    "calendar.txt",
    "/CASE_014/system/calendar.txt",
    "text",
    {
      created: "2003-10-01 09:00",
      modified: "2003-10-13 10:22",
      owner: "srenn",
    },
    {
      contents: [
        "FACILITY 6 — OCTOBER 2003",
        "",
        "Oct 13  tape rotation (OVERDUE — 3rd notice)",
        "Oct 14  night shift: mvoss, jlindqvist",
        "Oct 15  EXTERNAL AUDIT, 09:00.",
        "        All archive reports must be available",
        "        for review. — S. Renn",
        "Oct 16  (audit overflow day, if needed)",
      ].join("\n"),
    },
  ),
  F(
    "backup_tapes",
    "backup_tapes.txt",
    "/CASE_014/system/backup_tapes.txt",
    "text",
    {
      created: "2003-08-12 15:30",
      modified: "2003-10-12 11:05",
      owner: "mvoss",
    },
    {
      contents: [
        "TAPE BACKUP STATUS - reported by M. Voss",
        "",
        "Aug: 2 of 6 tapes failed verification. Reported.",
        "Sep: 4 of 6 tapes failed verification. Reported.",
        "Oct: rotation overdue. Reported.",
        "",
        "No replacements ordered.",
      ].join("\n"),
    },
  ),
];
