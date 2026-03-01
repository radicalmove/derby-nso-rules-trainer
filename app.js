const nsoRoles = [
  {
    id: "hnso",
    name: "Head NSO",
    family: "leadership",
    familyLabel: "Crew Leadership",
    summary: "Coordinates the NSO crew, paperwork quality, and official data integrity.",
    beforeJam: [
      "Assign positions and confirm communication chains across score, box, lineup, and timing stations.",
      "Run a pre-game data flow check with Head Ref and Scoreboard Operator.",
      "Confirm penalty and scoring correction process before first whistle."
    ],
    duringJam: [
      "Monitor NSO workflow for conflicts or missing data and escalate quickly.",
      "Backfill support when an NSO position loses track or becomes unstaffed."
    ],
    betweenJams: [
      "Audit corrections so scoreboard and paper records stay synchronized.",
      "Confirm foul-out and timeout/review tracking remains consistent."
    ],
    mustKnow: [
      "Rule 5.1: NSOs can be reassigned and may take referee tasks if instructed by officials.",
      "Officiating Procedures 2.6/2.7: corrections must be relayed quickly and cleanly.",
      "Officiating Procedures 2.8: NSO penalties are called without whistles; cue delivery must stay clear."
    ],
    edgeCases: [
      "If paperwork and scoreboard conflict, freeze changes until source of truth is confirmed.",
      "If any NSO station fails, redistribute tasks in a way that preserves penalty and score accuracy first."
    ],
    keyPartners: ["Head Referee", "Scoreboard Operator", "Penalty Tracker", "Jam Timer"]
  },
  {
    id: "jam-timer",
    name: "Jam Timer",
    family: "timing",
    familyLabel: "Timing",
    summary: "Runs jam and period timing and controls jam start/end cadence.",
    beforeJam: [
      "Verify jam and period clocks with scoreboard controls and whistle expectations.",
      "Confirm timeout and official review timing workflow with Head Ref."
    ],
    duringJam: [
      "Start each jam, track duration, and stop at call-off, full two minutes, or official stop.",
      "Maintain precise timing continuity through stoppages."
    ],
    betweenJams: [
      "Reset jam state and keep minimum 30-second line-up timing awareness.",
      "Immediately communicate clock anomalies."
    ],
    mustKnow: [
      "Rule 1.1.1: jams are up to 2 minutes.",
      "Rule 1.1.3: each period is 30 minutes.",
      "Rule 1.3.4: at least 30 seconds between jams unless period/jam ends."
    ],
    edgeCases: [
      "If whistle/clock disagreement occurs, report instantly for correction.",
      "Late timeout requests near jam start require tight coordination with Head Ref and scoreboard."
    ],
    keyPartners: ["Head Referee", "Scoreboard Operator", "Lineup Tracker"]
  },
  {
    id: "scorekeeper",
    name: "Scorekeeper",
    family: "scoring",
    familyLabel: "Scoring",
    summary: "Records pass-by-pass points as the primary scoring record.",
    beforeJam: [
      "Set up score sheets and verify team orientation and jammer identifiers.",
      "Align update cadence with Jam Ref signals."
    ],
    duringJam: [
      "Record points by scoring pass and track no-point/no-pass outcomes.",
      "Track scorer identity through star pass transitions."
    ],
    betweenJams: [
      "Reconcile paper totals with displayed score.",
      "Apply and annotate corrections cleanly."
    ],
    mustKnow: [
      "Rule 3.1: scoring starts after initial trip is complete.",
      "Rule 3.3: one point per opposing blocker legally passed.",
      "Rule 3.4: star pass changes who can legally score as jammer."
    ],
    edgeCases: [
      "If star pass occurs mid-pass, confirm exactly which skater earned each point.",
      "If a correction arrives late, preserve the paper trail and note reason for change."
    ],
    keyPartners: ["Jam Referees", "Scoreboard Operator", "Head NSO"]
  },
  {
    id: "scoreboard-operator",
    name: "Scoreboard Operator",
    family: "scoring",
    familyLabel: "Scoring",
    summary: "Operates visible score, jam/period clock, and timeout/review display.",
    beforeJam: [
      "Load game settings and verify period length, jam cap, and timeout counts.",
      "Dry-run clock and score inputs with Jam Timer and Head NSO."
    ],
    duringJam: [
      "Apply updates only from authorized officials and NSOs.",
      "Display stoppage status, timeouts, and official reviews immediately."
    ],
    betweenJams: [
      "Cross-check displayed values against official records.",
      "Track software/device issues for post-game audit."
    ],
    mustKnow: [
      "Rule 1.3.1: team timeouts are 60 seconds (with clock management implications).",
      "Rule 1.3.2: official reviews must be shown and tracked correctly.",
      "Officiating Procedures 2.7: scoreboard changes may trigger correction flow."
    ],
    edgeCases: [
      "Never apply verbal updates from unauthorized sources.",
      "On disputed values, hold for confirmation rather than guess."
    ],
    keyPartners: ["Jam Timer", "Scorekeeper", "Head NSO"]
  },
  {
    id: "penalty-tracker",
    name: "Penalty Tracker",
    family: "penalties",
    familyLabel: "Penalties",
    summary: "Maintains skater penalty totals and tracks foul-out exposure.",
    beforeJam: [
      "Prepare tracker sheets and verify skater number mapping.",
      "Confirm foul-out communication protocol with Head Ref and box."
    ],
    duringJam: [
      "Log penalties by skater and context (jam/period if needed).",
      "Watch cumulative totals and alert near foul-out counts."
    ],
    betweenJams: [
      "Resolve unreadable or conflicting entries before drift grows.",
      "Reconcile with Penalty Box Manager and board updates."
    ],
    mustKnow: [
      "Rule 4.3: penalties assessed for illegal or unsafe actions.",
      "Rule 4.5: seven penalties is a foul out.",
      "Officiating Procedures 7.x: tracker and penalty box records must stay aligned."
    ],
    edgeCases: [
      "If a skater serves for an expelled skater, ensure records reflect the substitution correctly.",
      "If two penalties are called at once, verify sequence and penalty code clarity."
    ],
    keyPartners: ["Referee crew", "Penalty Box Manager", "Head NSO"]
  },
  {
    id: "penalty-box-manager",
    name: "Penalty Box Manager",
    family: "penalties",
    familyLabel: "Penalties",
    summary: "Directs box entry order, seat assignment, and legal release flow.",
    beforeJam: [
      "Assign box timers and review release language.",
      "Set up blocker queue communication method (whiteboard or equivalent)."
    ],
    duringJam: [
      "Seat skaters in legal order and manage held releases.",
      "Coordinate jammer-box interactions with exact timing logic."
    ],
    betweenJams: [
      "Reconcile seat notes with penalty tracker and timers.",
      "Clear unresolved seat and queue issues before next jam."
    ],
    mustKnow: [
      "Rule 4.4.3: blocker queue order is based on who entered the box first.",
      "Rule 4.4.4: jammer and blocker penalty timing rules differ.",
      "Officiating Procedures 7.3: penalty box whiteboard workflow for filled blocker seats."
    ],
    edgeCases: [
      "If all blocker seats are full, queue tracking must prevent out-of-order entry.",
      "When both jammers become involved in box logic, confirm immediate vs delayed release conditions before signaling."
    ],
    keyPartners: ["Penalty Box Timers", "Penalty Tracker", "Inside Pack Refs"]
  },
  {
    id: "penalty-box-timer",
    name: "Penalty Box Timer",
    family: "penalties",
    familyLabel: "Penalties",
    summary: "Times each penalty and issues stand/release cues at the right moment.",
    beforeJam: [
      "Confirm timing device and seat assignment.",
      "Review required vocal cues for stand, release, and hold."
    ],
    duringJam: [
      "Start timing once skater is legally seated.",
      "At exactly 10 seconds remaining, cue skater to stand.",
      "Release skater at completion if legal release conditions are met."
    ],
    betweenJams: [
      "Carry remaining jam-time correctly into next jam.",
      "Report timing irregularities immediately to the box manager."
    ],
    mustKnow: [
      "Rule 4.4.1: penalties are 30 seconds of jam time.",
      "Rule 4.4.1: skater must stand for the final 10 seconds (stand call at 20 seconds served).",
      "Rule 4.4.2.1-4.4.2.4: jammer penalty overlap can trigger immediate release or carryover behavior.",
      "Officiating Procedures 7.4 and 7.5: jammer timing edge cases and refusal-to-stand handling."
    ],
    edgeCases: [
      "If the second jammer sits while the first jammer is still serving, release logic may change immediately.",
      "If one jammer enters between jams while the other is serving, the served jammer may be held to start next jam from the box.",
      "If a skater refuses to stand when instructed, timing does not complete until legal stance is achieved."
    ],
    keyPartners: ["Penalty Box Manager", "Penalty Tracker"]
  },
  {
    id: "lineup-tracker",
    name: "Lineup Tracker",
    family: "lineups",
    familyLabel: "Lineups",
    summary: "Tracks skaters on track each jam and captures role changes.",
    beforeJam: [
      "Prepare sheets for blockers, pivot, jammer, and absence markers.",
      "Confirm number legibility expectations with scorekeepers."
    ],
    duringJam: [
      "Log lineup starts and star-pass events.",
      "Flag illegal or incomplete lineup situations for correction."
    ],
    betweenJams: [
      "Cross-check lineup records with scoring and penalties.",
      "Escalate repeat lineup errors for prevention coaching."
    ],
    mustKnow: [
      "Rule 2.2: lineup composition and role constraints.",
      "Rule 2.2.6: role changes are limited except legal star pass.",
      "Rule 3.4: star pass changes jammer status and scoring rights."
    ],
    edgeCases: [
      "Track jammer identity immediately on star pass to prevent scoring confusion.",
      "No-pivot or incomplete lineup patterns can create penalty exposure; capture them cleanly."
    ],
    keyPartners: ["Jam Refs", "Scorekeepers", "Penalty Tracker"]
  },
  {
    id: "inside-whiteboard",
    name: "Inside Whiteboard Operator",
    family: "penalties",
    familyLabel: "Penalties",
    summary: "Displays blocker queue order when penalty box blocker seats are full.",
    beforeJam: [
      "Prepare board format for queue number, team color, and skater number.",
      "Align shorthand cues with Penalty Box Manager."
    ],
    duringJam: [
      "Record queued blockers in exact order of physical arrival.",
      "Clear board entries immediately when skaters seat legally."
    ],
    betweenJams: [
      "Confirm board history and timer records match.",
      "Identify recurring queue confusion and adjust notation."
    ],
    mustKnow: [
      "Rule 4.4.3: blocker seating priority comes from first legal entry order.",
      "Officiating Procedures 7.3: board protocol and operator communication language.",
      "Queued skaters are not considered seated until physically in the box."
    ],
    edgeCases: [
      "If two blockers arrive nearly simultaneously, preserve true order with clear notation.",
      "Board cleanup delays can cause illegal release mistakes, so keep real-time discipline."
    ],
    keyPartners: ["Penalty Box Manager", "Penalty Box Timers", "Penalty Tracker"]
  }
];

const ruleModules = [
  {
    id: "game-format",
    title: "Game Format and Timing",
    summary: "Understand periods, jams, and the base timing structure.",
    keyPoints: [
      "A game has two 30-minute periods (Rule 1.1.3).",
      "Jams are up to 2 minutes (Rule 1.1.1).",
      "At least 30 seconds separate jams unless period/jam-ending conditions apply (Rule 1.3.4).",
      "Team timeouts are 60 seconds and each team gets three per game (Rule 1.3.1)."
    ],
    commonTraps: [
      "Assuming every jam runs the full 2 minutes.",
      "Forgetting that timing state can change at period boundaries."
    ],
    ruleRefs: ["Rules 1.1", "Rules 1.3.1", "Rules 1.3.4"]
  },
  {
    id: "lineups-roles",
    title: "Lineups and Roles",
    summary: "Know who can skate each jam and which role changes are legal.",
    keyPoints: [
      "Each team fields one jammer and up to four blockers, one of whom may be pivot (Rule 2.2).",
      "A lineup must include at least one blocker not serving a penalty.",
      "Role changes are limited; legal star pass is the main in-jam role change (Rule 2.2.6)."
    ],
    commonTraps: [
      "Treating pivot and blocker roles as freely interchangeable during play.",
      "Missing illegal lineup consequences when penalties reduce available skaters."
    ],
    ruleRefs: ["Rules 2.2", "Rules 2.2.6"]
  },
  {
    id: "pack-engagement",
    title: "Pack and Engagement Zone",
    summary: "Learn in-play, out-of-play, and pack definition boundaries.",
    keyPoints: [
      "Pack is the largest group of in-bounds blockers from both teams skating in proximity (Rule 2.3).",
      "Engagement zone extends 20 feet in front of and behind the pack.",
      "Skaters outside legal zones risk out-of-play and related penalties."
    ],
    commonTraps: [
      "Chasing action too far out of engagement zone.",
      "Confusing no-pack warnings with automatic penalties."
    ],
    ruleRefs: ["Rules 2.3", "Rules 2.5"]
  },
  {
    id: "scoring",
    title: "Scoring Fundamentals",
    summary: "Track when points begin and how they are earned.",
    keyPoints: [
      "No points on initial trip; points begin on scoring trips (Rule 3.1).",
      "A jammer earns one point per opposing blocker legally passed (Rule 3.3).",
      "Star pass changes which skater can score as jammer (Rule 3.4)."
    ],
    commonTraps: [
      "Awarding points before initial trip completion.",
      "Losing scorer identity through star pass transitions."
    ],
    ruleRefs: ["Rules 3.1", "Rules 3.3", "Rules 3.4"]
  },
  {
    id: "contact-penalties",
    title: "Legal Contact and Penalty Triggers",
    summary: "Understand legal target and blocking zones plus common infractions.",
    keyPoints: [
      "Illegal contact includes hits to illegal target zones or with illegal blocking zones.",
      "Common penalties include back block, high block, low block, forearm, and multiplayer.",
      "Penalty severity depends on impact and game advantage context."
    ],
    commonTraps: [
      "Treating all contact as equal regardless of impact.",
      "Forgetting that direction and positioning can make otherwise normal contact illegal."
    ],
    ruleRefs: ["Rules 2.4", "Rules 4.1", "Rules 4.3"]
  },
  {
    id: "penalty-enforcement",
    title: "Penalty Box and Penalty Enforcement",
    summary: "Know serving time, stand/release timing, and jammer special cases.",
    keyPoints: [
      "Standard penalty duration is 30 seconds of jam time (Rule 4.4.1), e.g., sit at 0:24 and reach done at 0:54.",
      "Skater stands for final 10 seconds; cue stand at 20 seconds served, e.g., sit at 0:24 and stand at 0:44.",
      "Jammer overlap decisions use exact served time at seat moment, e.g., first jammer served 23 seconds when second jammer sits (Rule 4.4.2).",
      "Blocker queue order is set by physical entry order with timestamped tracking when seats are full (Rule 4.4.3)."
    ],
    commonTraps: [
      "Counting period clock instead of jam clock when computing remaining penalty seconds.",
      "Calling done at 30 elapsed seconds even when the skater is not upright at release moment.",
      "Ignoring timestamp order when assigning full-seat blocker queue priority."
    ],
    ruleRefs: ["Rules 4.4.1", "Rules 4.4.2", "Rules 4.4.3", "Officiating Procedures 7.x"]
  },
  {
    id: "timeouts-reviews",
    title: "Timeouts and Official Reviews",
    summary: "Know who may request stoppages and how review rights work.",
    keyPoints: [
      "Each team has three team timeouts per game (Rule 1.3.1).",
      "Each team has one official review per period (Rule 1.3.2).",
      "Review outcomes can retain or remove review rights based on decision result."
    ],
    commonTraps: [
      "Requesting timeout/review from unauthorized personnel.",
      "Confusing team timeout and official review timing rules."
    ],
    ruleRefs: ["Rules 1.3.1", "Rules 1.3.2"]
  },
  {
    id: "foulout-misconduct",
    title: "Foul Outs, Expulsions, and Misconduct",
    summary: "Understand cumulative penalties, severe misconduct, and team impact.",
    keyPoints: [
      "Seven penalties results in foul out (Rule 4.5).",
      "Gross or unsafe behavior can trigger expulsion.",
      "If a skater is expelled, a teammate may be required to serve remaining penalty time under rules context."
    ],
    commonTraps: [
      "Losing count late in the game under pressure.",
      "Treating misconduct as normal contact penalties without escalation."
    ],
    ruleRefs: ["Rules 4.5", "Rules 4.6"]
  }
];

const refSignals = [
  {
    id: "back-block",
    name: "Back Block",
    category: "penalty",
    meaning: "Illegal forceful contact to the back.",
    whenUsed: "Called when contact to an opponent's back meets penalty criteria.",
    cueWords: "Back Block",
    reference: "Cues/Codes/Signals: B"
  },
  {
    id: "high-block",
    name: "High Block",
    category: "penalty",
    meaning: "Illegal contact to the head or above legal target zone.",
    whenUsed: "Used when a skater initiates penalizable high contact.",
    cueWords: "High Block",
    reference: "Cues/Codes/Signals: A"
  },
  {
    id: "low-block",
    name: "Low Block",
    category: "penalty",
    meaning: "Illegal contact at or below the knees.",
    whenUsed: "Called for penalizable low contact.",
    cueWords: "Low Block",
    reference: "Cues/Codes/Signals: L"
  },
  {
    id: "forearm",
    name: "Forearm",
    category: "penalty",
    meaning: "Blocking or assisting illegally with forearm or hand.",
    whenUsed: "Used when a skater applies illegal arm/hand force.",
    cueWords: "Forearm",
    reference: "Cues/Codes/Signals: F"
  },
  {
    id: "head-block",
    name: "Head Block",
    category: "penalty",
    meaning: "Illegal block initiated with the head.",
    whenUsed: "Called when a skater initiates contact with head that meets penalty threshold.",
    cueWords: "Head Block",
    reference: "Cues/Codes/Signals: H"
  },
  {
    id: "leg-block",
    name: "Leg Block",
    category: "penalty",
    meaning: "Illegal use of leg/foot to block or trip.",
    whenUsed: "Used for penalizable contact using the leg or foot.",
    cueWords: "Leg Block",
    reference: "Cues/Codes/Signals: E"
  },
  {
    id: "illegal-contact",
    name: "Illegal Contact",
    category: "penalty",
    meaning: "Other illegal contact actions, including early hit/assist violations.",
    whenUsed: "Called when illegal contact does not fit other primary contact categories.",
    cueWords: "Illegal Contact",
    reference: "Cues/Codes/Signals: C"
  },
  {
    id: "multiplayer",
    name: "Multiplayer Block",
    category: "penalty",
    meaning: "Illegal linked or formed wall that impedes opponents.",
    whenUsed: "Called when skaters link/hold in ways that are illegal and impactful.",
    cueWords: "Multiplayer",
    reference: "Cues/Codes/Signals: M"
  },
  {
    id: "direction",
    name: "Direction / Stop Block",
    category: "penalty",
    meaning: "Blocking while moving clockwise or otherwise illegally by direction rules.",
    whenUsed: "Used when a skater blocks illegally by direction of travel.",
    cueWords: "Direction",
    reference: "Cues/Codes/Signals: D"
  },
  {
    id: "cut",
    name: "Cut / Illegal Re-entry",
    category: "penalty",
    meaning: "Re-entering play illegally to gain position.",
    whenUsed: "Called when re-entry bypasses required position restoration.",
    cueWords: "Cut",
    reference: "Cues/Codes/Signals: X"
  },
  {
    id: "illegal-position",
    name: "Illegal Position",
    category: "penalty",
    meaning: "Skater is illegally positioned for rules context.",
    whenUsed: "Used for position violations with impact.",
    cueWords: "Illegal Position",
    reference: "Cues/Codes/Signals: P"
  },
  {
    id: "interference",
    name: "Interference",
    category: "penalty",
    meaning: "Illegal interference with game flow, including delay-of-game actions.",
    whenUsed: "Called when actions illegally interfere with officiating or legal game progression.",
    cueWords: "Interference",
    reference: "Cues/Codes/Signals: N"
  },
  {
    id: "illegal-procedure",
    name: "Illegal Procedure",
    category: "penalty",
    meaning: "Procedure violations including star-pass and game-process violations.",
    whenUsed: "Used for illegal procedural actions not covered by other penalty families.",
    cueWords: "Illegal Procedure",
    reference: "Cues/Codes/Signals: I"
  },
  {
    id: "misconduct",
    name: "Misconduct",
    category: "penalty",
    meaning: "Unsporting or abusive behavior requiring misconduct penalty enforcement.",
    whenUsed: "Called for conduct that violates sportsmanship or officiating compliance standards.",
    cueWords: "Misconduct",
    reference: "Cues/Codes/Signals: G"
  },
  {
    id: "report-box",
    name: "Report to Box",
    category: "box",
    meaning: "Skater has received a penalty and must report to the penalty box.",
    whenUsed: "Immediately after penalty assessment.",
    cueWords: "[Color] [Number] [Penalty], Report to the Box",
    reference: "Cues/Codes/Signals: Report to Box"
  },
  {
    id: "multiple-penalties",
    name: "Multiple Penalties",
    category: "box",
    meaning: "Skater is assessed more than one penalty at once.",
    whenUsed: "When two penalties are issued in one sequence.",
    cueWords: "Multiple Penalties",
    reference: "Cues/Codes/Signals: Multiple Penalties"
  },
  {
    id: "lead",
    name: "Lead Jammer",
    category: "jammer",
    meaning: "Jammer has earned Lead status and can call off the jam.",
    whenUsed: "After initial pass is completed legally with lead eligibility.",
    cueWords: "Lead",
    reference: "Cues/Codes/Signals / Rules 3"
  },
  {
    id: "not-lead",
    name: "Not Lead Jammer",
    category: "jammer",
    meaning: "Jammer is no longer eligible for Lead in the jam.",
    whenUsed: "When lead eligibility is lost.",
    cueWords: "Not Lead",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "star-pass-complete",
    name: "Star Pass Complete",
    category: "jammer",
    meaning: "Jammer status transfers to pivot after legal star pass completion.",
    whenUsed: "When star cover transfer is legally complete.",
    cueWords: "Star Pass Complete",
    reference: "Rules 3.4 / Cues/Codes/Signals"
  },
  {
    id: "no-earned-pass",
    name: "No Earned Pass",
    category: "jammer",
    meaning: "Pass status not earned in a way that grants point eligibility.",
    whenUsed: "When jammer pass conditions are not legally met.",
    cueWords: "No Earned Pass",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "show-star",
    name: "Show the Star",
    category: "warning",
    meaning: "Jammer/pivot must display visible star cover status.",
    whenUsed: "When cover is obscured or removed contrary to expectations.",
    cueWords: "Show the Star",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "no-pack",
    name: "No Pack",
    category: "warning",
    meaning: "No legal pack currently exists.",
    whenUsed: "When blockers are not in a valid pack formation.",
    cueWords: "No Pack",
    reference: "Rules 2.3 / Cues/Codes/Signals"
  },
  {
    id: "out-of-play",
    name: "Out of Play",
    category: "warning",
    meaning: "Skater is outside legal engagement position and must return.",
    whenUsed: "When skater engages illegally ahead/behind engagement zone.",
    cueWords: "Out of Play",
    reference: "Rules 2.5 / Cues/Codes/Signals"
  },
  {
    id: "pack-is-here",
    name: "Pack Is Here",
    category: "warning",
    meaning: "Ref indicates current pack location.",
    whenUsed: "To orient skaters to legal engagement context.",
    cueWords: "Pack Is Here",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "false-start",
    name: "False Start",
    category: "warning",
    meaning: "Skater moved illegally before jam start conditions.",
    whenUsed: "When start formation/movement violates start requirements.",
    cueWords: "False Start",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "time-stopped",
    name: "Time Stopped",
    category: "timing",
    meaning: "Officials have stopped game timing.",
    whenUsed: "Official stoppages, injury handling, correction windows.",
    cueWords: "Time Stopped",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "team-timeout",
    name: "Team Timeout",
    category: "timing",
    meaning: "Team-requested timeout signal.",
    whenUsed: "When captain/alternate requests a legal team timeout.",
    cueWords: "Team Timeout",
    reference: "Rules 1.3.1 / Cues/Codes/Signals"
  },
  {
    id: "official-timeout",
    name: "Official Timeout",
    category: "timing",
    meaning: "Officials-initiated timeout.",
    whenUsed: "For officiating administration, injury, safety, or correction needs.",
    cueWords: "Official Timeout",
    reference: "Rules 1.3 / Cues/Codes/Signals"
  },
  {
    id: "official-review",
    name: "Official Review",
    category: "timing",
    meaning: "Team is using official review rights.",
    whenUsed: "When a legal review is requested by team leadership.",
    cueWords: "Official Review",
    reference: "Rules 1.3.2 / Cues/Codes/Signals"
  },
  {
    id: "jam-start",
    name: "Jam Start",
    category: "timing",
    meaning: "Whistle and signal sequence for jam start.",
    whenUsed: "At the beginning of each jam.",
    cueWords: "Jam Start",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "jam-ending",
    name: "Jam Ending / Call Off",
    category: "timing",
    meaning: "Jam is ending by clock expiration or lead call-off.",
    whenUsed: "At legal jam end.",
    cueWords: "Jam Ending",
    reference: "Rules 1.1 / Cues/Codes/Signals"
  },
  {
    id: "go-to-bench",
    name: "Go to Bench",
    category: "warning",
    meaning: "Skater directed to correct bench area.",
    whenUsed: "Administrative or substitution context.",
    cueWords: "Go to Bench",
    reference: "Cues/Codes/Signals"
  },
  {
    id: "return-track",
    name: "Return to Track",
    category: "warning",
    meaning: "Skater instructed to return legally to track.",
    whenUsed: "When skater is out of play or has left track bounds.",
    cueWords: "Return to Track",
    reference: "Cues/Codes/Signals"
  }
];

const refPositions = [
  {
    id: "hr",
    name: "Head Referee (HR)",
    area: "Global game control",
    focus: "Final authority on rules application, expulsions, and major officiating decisions.",
    responsibilities: [
      "Leads referee crew communication and final rulings.",
      "Manages official reviews and high-impact corrections.",
      "Coordinates with Head NSO on administrative integrity."
    ],
    communication: ["Head NSO", "Jammer Refs", "Pack Refs"]
  },
  {
    id: "jr",
    name: "Jammer Referee (JR)",
    area: "Assigned jammer",
    focus: "Tracks jammer status, lead eligibility, penalties, scoring pass legality, and call-off.",
    responsibilities: [
      "Signals lead/not lead and star pass state.",
      "Communicates points and penalties for assigned jammer.",
      "Manages jammer re-entry legality and call-off mechanics."
    ],
    communication: ["Scorekeeper", "Lineup Tracker", "Penalty Box Manager"]
  },
  {
    id: "ipr",
    name: "Inside Pack Ref (IPR)",
    area: "Inside track boundary near pack",
    focus: "Pack definition, engagement legality, and in-pack penalties.",
    responsibilities: [
      "Tracks out-of-play, no-pack, and illegal positioning conditions.",
      "Calls penalties for illegal contact and multiplayer formations.",
      "Helps define and communicate pack location."
    ],
    communication: ["Other Pack Refs", "Penalty Box Manager", "Penalty Tracker"]
  },
  {
    id: "opr",
    name: "Outside Pack Ref (OPR)",
    area: "Outside track boundary around pack",
    focus: "Pack action visibility from the outside lane and boundary perspective.",
    responsibilities: [
      "Tracks boundary exits/re-entries and cut situations.",
      "Supports no-pack/out-of-play communication from alternate angle.",
      "Calls contact penalties with outside perspective."
    ],
    communication: ["IPRs", "Jammer Refs", "Penalty Tracker"]
  },
  {
    id: "staffing",
    name: "Crew Staffing Notes",
    area: "Configuration planning",
    focus: "Exact counts of IPR/OPR/JR roles can vary with available officials.",
    responsibilities: [
      "Seven-ref crews are common, but event staffing can differ.",
      "Task distribution adjusts while preserving core coverage: jammer status, pack definition, illegal contact, and penalties.",
      "Officiating quality relies on clear communication and consistent lane responsibility."
    ],
    communication: ["Head Referee", "Head NSO"]
  }
];

const baseDrillQuestions = [
  {
    mode: "nso",
    prompt: "A skater has served 20 seconds of a standard penalty. What should the penalty box timer cue now?",
    options: ["Done", "Stand", "Return to Track", "No Pack"],
    answer: "Stand",
    explanation:
      "Penalties are 30 seconds of jam time, with the final 10 seconds standing. The stand cue occurs at 10 seconds remaining.",
    review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
  },
  {
    mode: "nso",
    prompt: "Which NSO position is primarily responsible for preserving skater penalty totals and foul-out awareness?",
    options: ["Scorekeeper", "Penalty Tracker", "Lineup Tracker", "Jam Timer"],
    answer: "Penalty Tracker",
    explanation:
      "Penalty Tracker maintains cumulative penalties and alerts officials when skaters approach or hit foul-out thresholds.",
    review: { tab: "nso", id: "penalty-tracker", label: "Penalty Tracker" }
  },
  {
    mode: "nso",
    prompt:
      "Blockers sit at 0:18, 0:22, and 0:27 filling all seats. A fourth blocker reports at 0:31. What determines who is first in the waiting queue?",
    options: [
      "Alphabetical skater number",
      "Coach request",
      "Order of physical entry into the penalty box",
      "Current game score"
    ],
    answer: "Order of physical entry into the penalty box",
    explanation:
      "Rule 4.4.3 uses first-entry order for blocker queue seating when seats are filled.",
    review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
  },
  {
    mode: "nso",
    prompt: "Which role best resolves paper-vs-scoreboard discrepancies before they become persistent errors?",
    options: ["Head NSO", "Jammer Ref", "Penalty Box Timer", "Inside Pack Ref"],
    answer: "Head NSO",
    explanation:
      "Head NSO coordinates correction flow and protects record integrity across NSO stations.",
    review: { tab: "nso", id: "hnso", label: "Head NSO" }
  },
  {
    mode: "rules",
    prompt: "How long can a jam last under standard game rules?",
    options: ["90 seconds", "2 minutes", "3 minutes", "Until Lead calls only"],
    answer: "2 minutes",
    explanation: "Rule 1.1.1 sets a jam maximum of two minutes.",
    review: { tab: "rules", id: "game-format", label: "Game Format and Timing" }
  },
  {
    mode: "rules",
    prompt:
      "A skater sits for a penalty at 0:40 and the jam ends at 1:00. How much penalty time did that skater actually serve?",
    options: [
      "20 seconds of jam time",
      "30 seconds because period time keeps running",
      "60 seconds because the period crossed a minute boundary",
      "0 seconds because service only counts next jam"
    ],
    answer: "20 seconds of jam time",
    explanation:
      "Rule 4.4.1 uses jam time for service. From 0:40 to 1:00, the skater served 20 seconds and still owes 10.",
    review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
  },
  {
    mode: "rules",
    prompt: "How many penalties cause a foul out?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Rule 4.5 sets seven penalties as the foul-out threshold.",
    review: { tab: "rules", id: "foulout-misconduct", label: "Foul Outs and Misconduct" }
  },
  {
    mode: "rules",
    prompt: "What is the minimum time between jams under normal conditions?",
    options: ["10 seconds", "20 seconds", "30 seconds", "60 seconds"],
    answer: "30 seconds",
    explanation: "Rule 1.3.4 requires at least 30 seconds between jams under standard conditions.",
    review: { tab: "rules", id: "game-format", label: "Game Format and Timing" }
  },
  {
    mode: "rules",
    prompt: "Who may become jammer through an in-jam role transfer?",
    options: [
      "Any blocker",
      "Only the pivot via legal star pass",
      "Any bench skater",
      "No one, jammer never changes"
    ],
    answer: "Only the pivot via legal star pass",
    explanation: "Rule 2.2.6 and Rule 3.4 govern legal star pass role transfer to the pivot.",
    review: { tab: "rules", id: "lineups-roles", label: "Lineups and Roles" }
  },
  {
    mode: "nso",
    prompt: "What is the correct penalty-box timer cue at 20 seconds served on a standard 30-second penalty?",
    options: ["Stand", "Done", "No Pack", "Official Timeout"],
    answer: "Stand",
    explanation:
      "Penalty box timing uses the stand cue at 20 seconds served (10 seconds remaining) in standard service flow.",
    review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
  },
  {
    mode: "signals",
    prompt: "Which signal indicates the assigned jammer has earned the right to call off the jam?",
    options: ["Star Pass Complete", "Not Lead", "Lead Jammer", "No Earned Pass"],
    answer: "Lead Jammer",
    explanation: "Lead Jammer communicates call-off authority for that jammer.",
    review: { tab: "signals", id: "lead", label: "Lead Jammer Signal" }
  },
  {
    mode: "signals",
    prompt: "Which signal communicates that there is currently no legal pack?",
    options: ["Out of Play", "No Pack", "Pack Is Here", "Time Stopped"],
    answer: "No Pack",
    explanation: "No Pack explicitly communicates that pack definition is not currently met.",
    review: { tab: "signals", id: "no-pack", label: "No Pack Signal" }
  },
  {
    mode: "signals",
    prompt: "A referee signals " + '"' + "Report to Box" + '"' + ". What does this mean?",
    options: [
      "Skater should return to bench",
      "Skater is assessed a penalty and must report to penalty box",
      "Skater is lead jammer",
      "Jam has ended"
    ],
    answer: "Skater is assessed a penalty and must report to penalty box",
    explanation: "Report-to-box signal follows penalty assessment and directs legal penalty service.",
    review: { tab: "signals", id: "report-box", label: "Report to Box Signal" }
  },
  {
    mode: "signals",
    prompt: "Which signal represents a team-requested timeout?",
    options: ["Official Timeout", "Official Review", "Team Timeout", "Jam Ending"],
    answer: "Team Timeout",
    explanation: "Team Timeout signal identifies a timeout requested under team timeout rights.",
    review: { tab: "signals", id: "team-timeout", label: "Team Timeout Signal" }
  },
  {
    mode: "mixed",
    prompt: "Which role is most responsible for recording who actually skated each jam and star-pass identity changes?",
    options: ["Penalty Tracker", "Lineup Tracker", "Head Referee", "Jam Timer"],
    answer: "Lineup Tracker",
    explanation: "Lineup Tracker captures on-track skater identities and role changes including star pass events.",
    review: { tab: "nso", id: "lineup-tracker", label: "Lineup Tracker" }
  },
  {
    mode: "mixed",
    prompt:
      "Blue jammer sat at 0:24 and Red jammer sits at 0:47. Blue has served 23 seconds. Under jammer overlap rules, what is the correct immediate result?",
    options: [
      "Blue is released immediately and Red now serves a 23-second matched segment",
      "Blue stays seated to 30 seconds and Red starts a full new 30-second count",
      "Both jammers remain seated until the jam ends",
      "Red is released immediately because Red sat second"
    ],
    answer: "Blue is released immediately and Red now serves a 23-second matched segment",
    explanation:
      "Rule 4.4.2 overlap handling uses the exact served time. Red entering at 0:47 releases Blue and Red owes the matched 23-second segment.",
    review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
  },
  {
    mode: "mixed",
    prompt: "Which referee role is primarily attached to a specific jammer throughout a jam?",
    options: ["Inside Pack Ref", "Outside Pack Ref", "Jammer Referee", "Head NSO"],
    answer: "Jammer Referee",
    explanation: "Jammer Refs track jammer status, lead, penalties, and call-off context.",
    review: { tab: "refs", id: "jr", label: "Jammer Referee" }
  },
  {
    mode: "mixed",
    prompt: "How many official reviews does each team have per period?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    explanation: "Rule 1.3.2 grants one official review per team each period.",
    review: { tab: "rules", id: "timeouts-reviews", label: "Timeouts and Reviews" }
  },
  {
    mode: "mixed",
    prompt: "Which signal tells skaters where the legal pack currently is?",
    options: ["No Pack", "Pack Is Here", "Out of Play", "False Start"],
    answer: "Pack Is Here",
    explanation: "Pack Is Here helps skaters orient to legal engagement position around the pack.",
    review: { tab: "signals", id: "pack-is-here", label: "Pack Is Here Signal" }
  }
];

const NSO_ROLE_MIN_QUESTION_COUNT = 20;
const RULE_MODULE_MIN_QUESTION_COUNT = 20;
const TARGETED_DRILL_QUESTION_COUNT = 20;
const GENERAL_DRILL_QUESTION_COUNT = 8;

const drillQuestions = [
  ...baseDrillQuestions,
  ...generateNsoRoleDrillQuestions(),
  ...generateRuleModuleDrillQuestions()
];
verifyNsoRoleQuestionCoverage(drillQuestions);
verifyRuleModuleQuestionCoverage(drillQuestions);

function generateNsoRoleDrillQuestions() {
  const actionPools = {
    before: nsoRoles.flatMap((role) => role.beforeJam),
    during: nsoRoles.flatMap((role) => role.duringJam),
    between: nsoRoles.flatMap((role) => role.betweenJams),
    must: nsoRoles.flatMap((role) => role.mustKnow),
    edge: nsoRoles.flatMap((role) => role.edgeCases)
  };

  const generated = [];

  nsoRoles.forEach((role, roleIndex) => {
    const review = { tab: "nso", id: role.id, label: role.name };
    const roleFacts = normalizeRoleFacts(role);
    const roleQuestions = [];
    const identityFacts = [
      ...roleFacts.before,
      ...roleFacts.during,
      ...roleFacts.between,
      ...roleFacts.must,
      ...roleFacts.edge
    ];

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which action is explicitly part of ${role.name}'s pre-jam duties?`,
        answer: roleFacts.before[0],
        explanation: `${role.name} should prioritize this pre-jam control action before the first whistle.`,
        pool: actionPools.before,
        seed: roleIndex * 41 + 1,
        forbidden: roleFacts.before
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which additional task is listed under ${role.name}'s pre-jam duties?`,
        answer: roleFacts.before[1],
        explanation: `${role.name} owns this pre-jam readiness responsibility.`,
        pool: actionPools.before,
        seed: roleIndex * 41 + 2,
        forbidden: roleFacts.before
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which action is explicitly part of ${role.name}'s in-jam duties?`,
        answer: roleFacts.during[0],
        explanation: `This is a primary in-jam responsibility for ${role.name}.`,
        pool: actionPools.during,
        seed: roleIndex * 41 + 3,
        forbidden: roleFacts.during
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which additional task is listed for ${role.name} during jams?`,
        answer: roleFacts.during[1],
        explanation: `${role.name} is expected to execute this response while play continues.`,
        pool: actionPools.during,
        seed: roleIndex * 41 + 4,
        forbidden: roleFacts.during
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which action is explicitly part of ${role.name}'s between-jam duties?`,
        answer: roleFacts.between[0],
        explanation: `${role.name} performs this between-jam control to prevent cumulative errors.`,
        pool: actionPools.between,
        seed: roleIndex * 41 + 5,
        forbidden: roleFacts.between
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which additional task is listed for ${role.name} between jams?`,
        answer: roleFacts.between[1],
        explanation: `${role.name} should execute this correction-step before next jam launch.`,
        pool: actionPools.between,
        seed: roleIndex * 41 + 6,
        forbidden: roleFacts.between
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Rule-linked knowledge check: Which requirement is explicitly part of ${role.name}'s must-know set?`,
        answer: roleFacts.must[0],
        explanation: `This item is a direct rule/procedure anchor for ${role.name}.`,
        pool: actionPools.must,
        seed: roleIndex * 41 + 7,
        forbidden: roleFacts.must
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which additional must-know statement belongs to ${role.name}?`,
        answer: roleFacts.must[1],
        explanation: `${role.name} is expected to apply this rule/procedure constraint in-game.`,
        pool: actionPools.must,
        seed: roleIndex * 41 + 8,
        forbidden: roleFacts.must
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which edge-case responsibility belongs to ${role.name}?`,
        answer: roleFacts.edge[0],
        explanation: `This is one of the high-risk edge-case responsibilities for ${role.name}.`,
        pool: actionPools.edge,
        seed: roleIndex * 41 + 9,
        forbidden: roleFacts.edge
      })
    );

    roleQuestions.push(
      buildRoleActionQuestion({
        role,
        review,
        prompt: `Which additional edge-case responsibility is listed for ${role.name}?`,
        answer: roleFacts.edge[1],
        explanation: `${role.name} should manage this edge case exactly through this workflow.`,
        pool: actionPools.edge,
        seed: roleIndex * 41 + 10,
        forbidden: roleFacts.edge
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Which NSO role is accountable for this requirement: "${roleFacts.before[0]}"`,
        explanation: `This requirement maps directly to ${role.name}.`,
        seed: roleIndex * 41 + 11
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Role ownership challenge: Who is primarily responsible for "${roleFacts.during[0]}"?`,
        explanation: `${role.name} owns this in-jam responsibility.`,
        seed: roleIndex * 41 + 12
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `When the crew needs "${roleFacts.between[0]}", which NSO role should lead it?`,
        explanation: `${role.name} should lead this between-jam action.`,
        seed: roleIndex * 41 + 13
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Rules implementation check: Which role must apply "${roleFacts.must[0]}" under pressure?`,
        explanation: `${role.name} is the correct role for this rules-linked implementation.`,
        seed: roleIndex * 41 + 14
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Complex exception handling: Who should manage "${roleFacts.edge[0]}"?`,
        explanation: `${role.name} is designated to manage this edge-case behavior.`,
        seed: roleIndex * 41 + 15
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Role accountability check: Which NSO role is responsible for "${roleFacts.before[1]}"?`,
        explanation: `${role.name} owns this readiness responsibility.`,
        seed: roleIndex * 41 + 16
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `In-jam ownership check: Which NSO role should execute "${roleFacts.during[1]}"?`,
        explanation: `${role.name} is responsible for this in-jam task.`,
        seed: roleIndex * 41 + 17
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Audit pressure scenario: Which role should resolve this discrepancy before next jam: "${roleFacts.between[1]}"?`,
        explanation: `${role.name} is responsible for closing this discrepancy loop.`,
        seed: roleIndex * 41 + 18
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Rule ownership check: Which NSO role must apply "${roleFacts.must[1]}"?`,
        explanation: `${role.name} is responsible for applying this rules/procedures requirement.`,
        seed: roleIndex * 41 + 19
      })
    );

    roleQuestions.push(
      buildRoleIdentityQuestion({
        role,
        review,
        prompt: `Edge-case ownership check: Which NSO role should handle "${roleFacts.edge[1]}"?`,
        explanation: `${role.name} is accountable for this edge-case handling.`,
        seed: roleIndex * 41 + 20
      })
    );

    while (roleQuestions.length < NSO_ROLE_MIN_QUESTION_COUNT) {
      const index = roleQuestions.length;
      const fact = identityFacts[index % identityFacts.length];
      roleQuestions.push(
        buildRoleIdentityQuestion({
          role,
          review,
          prompt: `Extended role practice ${index + 1}: Which NSO role is responsible for "${fact}"?`,
          explanation: `This responsibility maps to ${role.name}.`,
          seed: roleIndex * 41 + 21 + index
        })
      );
    }

    generated.push(...roleQuestions);
  });

  return generated;
}

function buildRoleActionQuestion({
  role,
  review,
  prompt,
  answer,
  explanation,
  pool,
  seed,
  forbidden = []
}) {
  const distractors = buildTextDistractors(pool, answer, seed, forbidden);
  return {
    mode: "nso",
    prompt,
    options: shuffle([answer, ...distractors]),
    answer,
    explanation,
    review
  };
}

function buildRoleIdentityQuestion({ role, review, prompt, explanation, seed }) {
  const options = buildRoleNameOptions(role.name, seed);
  return {
    mode: "nso",
    prompt,
    options,
    answer: role.name,
    explanation,
    review
  };
}

function buildTextDistractors(pool, answer, seed, forbidden = []) {
  const blocked = new Set([answer, ...forbidden]);
  let candidates = pool.filter((item) => !blocked.has(item));

  // Relax constraints if needed so we can still return 3 distractors.
  if (candidates.length < 3) {
    const relaxed = pool.filter((item) => item !== answer);
    for (const item of relaxed) {
      if (!candidates.includes(item)) {
        candidates.push(item);
      }
      if (candidates.length >= 3) {
        break;
      }
    }
  }

  if (!candidates.length) {
    return [answer, answer, answer];
  }

  const picked = [];
  let offset = seed;
  while (picked.length < 3) {
    const candidate = candidates[offset % candidates.length];
    if (!picked.includes(candidate)) {
      picked.push(candidate);
    }
    offset += 3;
    if (offset > seed + candidates.length * 4 && picked.length < 3) {
      for (const fallback of candidates) {
        if (!picked.includes(fallback)) {
          picked.push(fallback);
        }
        if (picked.length === 3) {
          break;
        }
      }
      break;
    }
  }

  while (picked.length < 3) {
    picked.push(candidates[picked.length % candidates.length]);
  }

  return picked;
}

function buildRoleNameOptions(correctRoleName, seed) {
  const names = nsoRoles.map((role) => role.name);
  const otherNames = names.filter((name) => name !== correctRoleName);
  const picked = [];

  let offset = seed;
  while (picked.length < 3) {
    const candidate = otherNames[offset % otherNames.length];
    if (!picked.includes(candidate)) {
      picked.push(candidate);
    }
    offset += 2;
  }

  return shuffle([correctRoleName, ...picked]);
}

function generateRuleModuleDrillQuestions() {
  const factPools = {
    key: ruleModules.flatMap((module) => module.keyPoints),
    traps: ruleModules.flatMap((module) => module.commonTraps),
    refs: ruleModules.flatMap((module) => module.ruleRefs)
  };

  const generated = [];

  ruleModules.forEach((module, moduleIndex) => {
    const review = { tab: "rules", id: module.id, label: module.title };
    if (module.id === "penalty-enforcement") {
      generated.push(...buildPenaltyEnforcementDrillQuestions(review));
      return;
    }

    const moduleFacts = normalizeRuleModuleFacts(module);
    const moduleQuestions = [];

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title}: Which statement is a direct key-rule point for this module?`,
        answer: moduleFacts.key[0],
        explanation: `This key rule belongs to ${module.title}.`,
        pool: factPools.key,
        seed: moduleIndex * 53 + 1,
        forbidden: moduleFacts.key
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} scenario check: Which rule detail should you apply first?`,
        answer: moduleFacts.key[1],
        explanation: `${module.title} emphasizes this rule detail as part of core knowledge.`,
        pool: factPools.key,
        seed: moduleIndex * 53 + 2,
        forbidden: moduleFacts.key
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} advanced check: Which statement is still within this module's required rule scope?`,
        answer: moduleFacts.key[2],
        explanation: `This statement is one of the core rule anchors for ${module.title}.`,
        pool: factPools.key,
        seed: moduleIndex * 53 + 3,
        forbidden: moduleFacts.key
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} pressure review: Which key concept remains correct?`,
        answer: moduleFacts.key[3],
        explanation: `${module.title} requires this concept under game-speed decisions.`,
        pool: factPools.key,
        seed: moduleIndex * 53 + 4,
        forbidden: moduleFacts.key
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title}: Which item is a common mistake this module warns against?`,
        answer: moduleFacts.traps[0],
        explanation: `This is a documented common trap for ${module.title}.`,
        pool: factPools.traps,
        seed: moduleIndex * 53 + 5,
        forbidden: moduleFacts.traps
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} mistake prevention: Which trap must officials and skaters avoid?`,
        answer: moduleFacts.traps[1],
        explanation: `${module.title} highlights this as a recurring error pattern.`,
        pool: factPools.traps,
        seed: moduleIndex * 53 + 6,
        forbidden: moduleFacts.traps
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title}: Which reference appears in this module's source list?`,
        answer: moduleFacts.refs[0],
        explanation: `${moduleFacts.refs[0]} is one of the primary references for ${module.title}.`,
        pool: factPools.refs,
        seed: moduleIndex * 53 + 7,
        forbidden: moduleFacts.refs
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} citation check: Which rules reference is part of this study area?`,
        answer: moduleFacts.refs[1],
        explanation: `This module includes ${moduleFacts.refs[1]} as a direct source anchor.`,
        pool: factPools.refs,
        seed: moduleIndex * 53 + 8,
        forbidden: moduleFacts.refs
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} rules-anchor drill: Select a correct primary reference.`,
        answer: moduleFacts.refs[2],
        explanation: `${moduleFacts.refs[2]} is explicitly listed for ${module.title}.`,
        pool: factPools.refs,
        seed: moduleIndex * 53 + 9,
        forbidden: moduleFacts.refs
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} document lookup: Which reference should you review for this topic?`,
        answer: moduleFacts.refs[3],
        explanation: `${moduleFacts.refs[3]} remains in scope for this module.`,
        pool: factPools.refs,
        seed: moduleIndex * 53 + 10,
        forbidden: moduleFacts.refs
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Which skater-rules module matches this summary: "${moduleFacts.summary}"`,
        explanation: `That summary corresponds to ${module.title}.`,
        seed: moduleIndex * 53 + 11
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Which rules module owns this key rule point: "${moduleFacts.key[0]}"`,
        explanation: `${moduleFacts.key[0]} is taught in ${module.title}.`,
        seed: moduleIndex * 53 + 12
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Module ownership check: Where does this statement belong? "${moduleFacts.key[1]}"`,
        explanation: `This statement is part of ${module.title}.`,
        seed: moduleIndex * 53 + 13
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Which module warns specifically about this trap: "${moduleFacts.traps[0]}"`,
        explanation: `That trap is listed under ${module.title}.`,
        seed: moduleIndex * 53 + 14
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Module distinction drill: Which area includes "${moduleFacts.traps[1]}" as a common mistake?`,
        explanation: `This common mistake is from ${module.title}.`,
        seed: moduleIndex * 53 + 15
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Module mapping check: Which module includes this key rule point: "${moduleFacts.key[2]}"`,
        explanation: `This key rule point belongs to ${module.title}.`,
        seed: moduleIndex * 53 + 16
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `Trap mapping check: Which module warns against this mistake: "${moduleFacts.traps[2]}"`,
        explanation: `This common mistake is listed under ${module.title}.`,
        seed: moduleIndex * 53 + 17
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} live-decision drill: Which rule statement should control the call?`,
        answer: moduleFacts.key[2],
        explanation: `This is an in-scope rule control point for ${module.title}.`,
        pool: factPools.key,
        seed: moduleIndex * 53 + 18,
        forbidden: moduleFacts.key
      })
    );

    moduleQuestions.push(
      buildRuleFactQuestion({
        review,
        prompt: `${module.title} error-correction drill: Which misunderstanding is this module trying to eliminate?`,
        answer: moduleFacts.traps[2],
        explanation: `${module.title} includes this trap in review/correction work.`,
        pool: factPools.traps,
        seed: moduleIndex * 53 + 19,
        forbidden: moduleFacts.traps
      })
    );

    moduleQuestions.push(
      buildRuleModuleIdentityQuestion({
        module,
        review,
        prompt: `High-difficulty synthesis: Which module combines "${moduleFacts.key[3]}" with reference "${moduleFacts.refs[2]}"?`,
        explanation: `That combined rule and reference pair maps to ${module.title}.`,
        seed: moduleIndex * 53 + 20
      })
    );

    while (moduleQuestions.length < RULE_MODULE_MIN_QUESTION_COUNT) {
      const index = moduleQuestions.length;
      moduleQuestions.push(
        buildRuleFactQuestion({
          review,
          prompt: `${module.title} extended practice ${index + 1}: Which rule statement remains in this module's scope?`,
          answer: moduleFacts.key[index % moduleFacts.key.length],
          explanation: `This statement belongs to ${module.title}.`,
          pool: factPools.key,
          seed: moduleIndex * 53 + 21 + index,
          forbidden: moduleFacts.key
        })
      );
    }

    generated.push(...moduleQuestions);
  });

  return generated;
}

function buildPenaltyEnforcementDrillQuestions(review) {
  const questionTemplates = [
    {
      prompt:
        "A skater sits at 0:11 on the jam clock. What cue is required at 0:31 if service is uninterrupted?",
      options: ["Stand", "Done", "No Pack", "Official Timeout"],
      answer: "Stand",
      explanation:
        "At 0:31 the skater has served 20 seconds, so the final 10-second standing phase starts."
    },
    {
      prompt:
        "A skater sits at 0:11 and is fully upright when required. What cue is correct at 0:41?",
      options: ["Done", "Stand", "Team Timeout", "Cut"],
      answer: "Done",
      explanation:
        "From 0:11 to 0:41 is 30 seconds of jam time, so done is correct if release conditions are met."
    },
    {
      prompt:
        "A skater sits at 0:11, and the jam ends at 0:29. How much penalty time remains?",
      options: ["12 seconds", "10 seconds", "18 seconds", "1 second"],
      answer: "12 seconds",
      explanation:
        "The skater served 18 seconds (0:11 to 0:29), leaving 12 seconds of the 30-second penalty."
    },
    {
      prompt:
        "A skater has 12 seconds remaining at jam end. If the next jam starts at period clock 7:00, when is done called?",
      options: [
        "At 6:48 after 12 seconds of jam time",
        "At 6:50 after a full 10-second stand",
        "Immediately at 7:00",
        "At the next jam-ending whistle"
      ],
      answer: "At 6:48 after 12 seconds of jam time",
      explanation:
        "Remaining time is exact. The skater is released when the remaining 12 jam-time seconds are completed."
    },
    {
      prompt:
        "Blue jammer sits at 0:24. Red jammer sits at 0:47. Blue has served 23 seconds. What is the immediate overlap result?",
      options: [
        "Blue is released and Red serves a 23-second matched segment",
        "Blue and Red both reset to full 30-second penalties",
        "Red is released because Red sat second",
        "Both remain seated until jam end"
      ],
      answer: "Blue is released and Red serves a 23-second matched segment",
      explanation:
        "Under the overlap workflow, the served-time match is 23 seconds at the seat moment in this example."
    },
    {
      prompt:
        "In that same overlap example, Red serves from 0:47 until jam end at 1:03. How many seconds remain?",
      options: ["7 seconds", "3 seconds", "10 seconds", "14 seconds"],
      answer: "7 seconds",
      explanation:
        "Red served 16 seconds (0:47 to 1:03) out of the 23-second matched segment, leaving 7."
    },
    {
      prompt:
        "Red owes 7 seconds at jam end. If the next jam-starting whistle is at period clock 2:00, when is done called?",
      options: [
        "At 1:53 after 7 seconds of jam time",
        "At 1:50 after a full stand interval",
        "Immediately at 2:00",
        "At the next timeout only"
      ],
      answer: "At 1:53 after 7 seconds of jam time",
      explanation: "The remaining 7 seconds are served from the next jam-starting whistle."
    },
    {
      prompt:
        "Blocker seats are filled by arrivals at 0:12, 0:18, and 0:24. A fourth blocker reports at 0:30. Who is first in queue?",
      options: [
        "The blocker who reported at 0:30",
        "The blocker with the highest jersey number",
        "Whichever team is trailing",
        "No queue exists until jam end"
      ],
      answer: "The blocker who reported at 0:30",
      explanation: "When seats are full, waiting order follows physical entry order into the box area."
    },
    {
      prompt:
        "If the 0:12 blocker's seat opens at 0:42, who gets seated into that opening?",
      options: [
        "The first waiting blocker in queue order",
        "Any blocker chosen by the penalty box manager",
        "The most recent blocker to arrive",
        "No one until the next jam"
      ],
      answer: "The first waiting blocker in queue order",
      explanation: "Seat assignment follows queue order, not team preference or recency."
    },
    {
      prompt:
        "At exactly 20 seconds served, the timer calls stand but the skater remains on one knee. What is the correct release handling?",
      options: [
        "Keep serving; do not release until the skater is upright when time is complete",
        "Call done anyway because 30 seconds always auto-release",
        "Reset the full 30-second penalty",
        "Issue a second penalty automatically"
      ],
      answer: "Keep serving; do not release until the skater is upright when time is complete",
      explanation:
        "The stand phase requires upright posture. Release is not correct while the skater is not upright."
    },
    {
      prompt:
        "A skater sits at 0:52. At what jam time does the stand cue occur in uninterrupted service?",
      options: ["1:12", "1:22", "1:02", "1:32"],
      answer: "1:12",
      explanation: "Stand is called after 20 seconds served: 0:52 + 0:20 = 1:12."
    },
    {
      prompt: "Two standard penalties are assessed to the same skater in one jam. How much total jam-time service is owed?",
      options: ["60 seconds", "30 seconds", "45 seconds", "90 seconds"],
      answer: "60 seconds",
      explanation: "Each standard penalty is 30 seconds of jam time, so two penalties total 60 seconds."
    },
    {
      prompt:
        "For the first segment of a two-penalty service that began at 0:08, when should stand be called?",
      options: ["0:28", "0:38", "0:18", "0:48"],
      answer: "0:28",
      explanation: "The first stand cue is at 20 seconds served into the first 30-second segment."
    },
    {
      prompt:
        "If the first 30-second segment started at 0:08 and ends at 0:38, when is stand for the second segment?",
      options: ["0:58", "0:48", "1:08", "1:18"],
      answer: "0:58",
      explanation: "The second segment starts at 0:38, so stand occurs 20 seconds later at 0:58."
    },
    {
      prompt:
        "In that same two-segment example, if uninterrupted, when is final done for the second segment?",
      options: ["1:08", "0:58", "1:18", "0:48"],
      answer: "1:08",
      explanation: "Second segment is 30 seconds from 0:38 to 1:08."
    },
    {
      prompt:
        "Second segment starts at 0:38, but the jam ends at 0:54. How much of that second segment remains?",
      options: ["14 seconds", "16 seconds", "10 seconds", "6 seconds"],
      answer: "14 seconds",
      explanation: "The skater served 16 seconds of segment two (0:38 to 0:54), leaving 14 seconds."
    },
    {
      prompt:
        "A skater has 14 seconds left to serve at jam end. If the next jam starts at period clock 10:00, when is done called?",
      options: [
        "At 9:46 after 14 seconds of jam time",
        "At 9:50 after a fresh 10-second stand",
        "Immediately at 10:00",
        "At the next period break"
      ],
      answer: "At 9:46 after 14 seconds of jam time",
      explanation: "Carryover time is exact and begins counting at the next jam-starting whistle."
    },
    {
      prompt:
        "A jammer has 7 seconds remaining at next jam start. The jam is called off after 4 seconds. How much remains?",
      options: ["3 seconds", "7 seconds", "0 seconds", "11 seconds"],
      answer: "3 seconds",
      explanation: "Only jam time counts. Four served leaves three seconds still owed."
    },
    {
      prompt:
        "A skater sits at 1:15 and the jam ends at 1:40. How many seconds were served in that jam?",
      options: ["25 seconds", "30 seconds", "15 seconds", "5 seconds"],
      answer: "25 seconds",
      explanation: "From 1:15 to 1:40 is 25 seconds of jam time served."
    },
    {
      prompt:
        "That skater has 5 seconds remaining at jam end. If the next jam starts at period clock 5:30, when is done called?",
      options: [
        "At 5:25 after 5 seconds of jam time",
        "At 5:20 after mandatory stand time",
        "Immediately at 5:30",
        "At next whistle stoppage"
      ],
      answer: "At 5:25 after 5 seconds of jam time",
      explanation: "Remaining penalty time is completed directly from next jam start."
    },
    {
      prompt:
        "Blue jammer sits at 0:30, and Red jammer sits at 0:42. Blue has served 12 seconds. What matched segment is tracked in this overlap example?",
      options: ["12 seconds", "18 seconds", "20 seconds", "30 seconds"],
      answer: "12 seconds",
      explanation: "The overlap example uses the exact served time when the second jammer sits: 12 seconds."
    },
    {
      prompt:
        "Red begins serving that 12-second matched segment at 0:42, but jam ends at 0:49. How much remains?",
      options: ["5 seconds", "3 seconds", "7 seconds", "12 seconds"],
      answer: "5 seconds",
      explanation: "Red served 7 seconds (0:42 to 0:49), so 5 seconds carry over."
    }
  ];

  return questionTemplates.map((template, index) => ({
    mode: "rules",
    prompt: template.prompt,
    options: shuffle([...template.options], index + 700),
    answer: template.answer,
    explanation: template.explanation,
    review
  }));
}

function buildRuleFactQuestion({
  review,
  prompt,
  answer,
  explanation,
  pool,
  seed,
  forbidden = []
}) {
  const distractors = buildTextDistractors(pool, answer, seed, forbidden);
  return {
    mode: "rules",
    prompt,
    options: shuffle([answer, ...distractors]),
    answer,
    explanation,
    review
  };
}

function buildRuleModuleIdentityQuestion({ module, review, prompt, explanation, seed }) {
  const options = buildRuleModuleOptions(module.title, seed);
  return {
    mode: "rules",
    prompt,
    options,
    answer: module.title,
    explanation,
    review
  };
}

function buildRuleModuleOptions(correctModuleTitle, seed) {
  const titles = ruleModules.map((module) => module.title);
  const otherTitles = titles.filter((title) => title !== correctModuleTitle);
  const picked = [];

  let offset = seed;
  while (picked.length < 3) {
    const candidate = otherTitles[offset % otherTitles.length];
    if (!picked.includes(candidate)) {
      picked.push(candidate);
    }
    offset += 2;
  }

  return shuffle([correctModuleTitle, ...picked]);
}

function normalizeRoleFacts(role) {
  return {
    before: ensureArrayWithMinimum(role.beforeJam, 2),
    during: ensureArrayWithMinimum(role.duringJam, 2),
    between: ensureArrayWithMinimum(role.betweenJams, 2),
    must: ensureArrayWithMinimum(role.mustKnow, 2),
    edge: ensureArrayWithMinimum(role.edgeCases, 2),
    partners: ensureArrayWithMinimum(role.keyPartners, 3)
  };
}

function normalizeRuleModuleFacts(module) {
  return {
    key: ensureArrayWithMinimum(module.keyPoints, 4),
    traps: ensureArrayWithMinimum(module.commonTraps, 3),
    refs: ensureArrayWithMinimum(module.ruleRefs, 4),
    summary: module.summary || "Core skater-rules concepts."
  };
}

function ensureArrayWithMinimum(items, minLength) {
  const source = Array.isArray(items) && items.length ? items : ["No data available."];
  const output = [...source];

  while (output.length < minLength) {
    output.push(source[output.length % source.length]);
  }

  return output;
}

function verifyNsoRoleQuestionCoverage(questions) {
  const byRole = {};
  questions.forEach((question) => {
    if (question.mode === "nso" && question.review && question.review.tab === "nso") {
      byRole[question.review.id] = (byRole[question.review.id] || 0) + 1;
    }
  });

  const missing = nsoRoles.filter(
    (role) => (byRole[role.id] || 0) < NSO_ROLE_MIN_QUESTION_COUNT
  );

  if (missing.length) {
    const names = missing.map((role) => role.name).join(", ");
    console.warn(
      `NSO role question coverage below target (${NSO_ROLE_MIN_QUESTION_COUNT}): ${names}`
    );
  }
}

function verifyRuleModuleQuestionCoverage(questions) {
  const byModule = {};
  questions.forEach((question) => {
    if (question.mode === "rules" && question.review && question.review.tab === "rules") {
      byModule[question.review.id] = (byModule[question.review.id] || 0) + 1;
    }
  });

  const missing = ruleModules.filter(
    (module) => (byModule[module.id] || 0) < RULE_MODULE_MIN_QUESTION_COUNT
  );

  if (missing.length) {
    const names = missing.map((module) => module.title).join(", ");
    console.warn(
      `Rules module question coverage below target (${RULE_MODULE_MIN_QUESTION_COUNT}): ${names}`
    );
  }
}

const jamSimulations = [
  {
    id: "box-overlap",
    title: "Jammer Box Overlap Scenario",
    focus: "Penalty box timing, stand/done cues, and jammer overlap decisions.",
    overview:
      "You are working the penalty box crew during an active jam. Step through the timeline and make each decision at the correct moment.",
    objectives: [
      "Apply 30-second jam-time penalty timing with exact stand/done second marks.",
      "Calculate jammer overlap using exact served time when the second jammer sits.",
      "Carry precise remaining jammer time into the next jam correctly."
    ],
    references: ["Rules 4.4.1", "Rules 4.4.2", "Officiating Procedures 7.4-7.5"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Jam begins",
        narrative: "Both jammers start on track. Box timers are clear and ready."
      },
      {
        type: "context",
        time: "0:24",
        title: "Blue jammer penalized",
        narrative:
          "Blue jammer reports legally and sits at 0:24. Their 30-second jam-time penalty clock starts at that moment."
      },
      {
        type: "decision",
        time: "0:44",
        title: "20-second cue",
        narrative:
          "Blue has served exactly 20 seconds (0:24 to 0:44), leaving 10 seconds on this penalty segment.",
        question: "What verbal cue is required at this exact moment?",
        options: ["Stand", "Done", "Official Timeout", "No Pack"],
        answer: "Stand",
        explanation:
          "Rule 4.4.1: the final 10 seconds must be served while standing, so the stand cue occurs at 20 seconds served.",
        review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
      },
      {
        type: "context",
        time: "0:47",
        title: "Second jammer arrives",
        narrative:
          "Red jammer is penalized and sits at 0:47 while Blue is still serving. Blue has served 23 seconds when Red sits."
      },
      {
        type: "decision",
        time: "0:47",
        title: "Overlap math at seat time",
        narrative: "Apply Rule 4.4.2 immediately using the exact time Blue has already served.",
        question: "What is the correct crew action?",
        options: [
          "Release Blue immediately and set Red to serve a 23-second segment for this penalty",
          "Keep Blue seated to 30 seconds, then start Red on a full 30 seconds",
          "Release both jammers immediately because both are now in the box",
          "Reset both jammers and start each on a new 30-second count"
        ],
        answer: "Release Blue immediately and set Red to serve a 23-second segment for this penalty",
        explanation:
          "Rule 4.4.2 requires equivalent penalty time per penalty and, when possible, a jammer not serving. Red sitting at 0:47 releases Blue and Red now owes the 23-second matched segment.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      },
      {
        type: "context",
        time: "1:03",
        title: "Jam ends",
        narrative:
          "The jam ends at 1:03. Red has served 16 seconds of the required 23 (from 0:47 to 1:03), leaving 7 seconds."
      },
      {
        type: "decision",
        time: "1:03",
        title: "Next jam start position",
        narrative: "Red still owes 7 seconds when the jam-ending whistle sounds.",
        question: "Where does the red jammer start the next jam?",
        options: [
          "Seated in the penalty box to continue serving",
          "On-track in normal jammer start position",
          "On the pivot line only",
          "At the team bench"
        ],
        answer: "Seated in the penalty box to continue serving",
        explanation:
          "Penalty time only counts during jams. Red resumes in the box at the next jam-start whistle with 7 seconds still owed.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      },
      {
        type: "decision",
        time: "Next Jam 0:00",
        title: "Final 7-second release",
        narrative:
          "Next jam starts and Red resumes with only 7 seconds remaining, which is entirely within the final standing portion.",
        question: "If the jam-starting whistle is at 2:00 on the period clock, when should the box timer call done?",
        options: [
          "At 2:07, after 7 seconds of jam time",
          "At 2:10, after a full standing count",
          "Immediately at 2:00",
          "At the next jam-ending whistle regardless of elapsed time"
        ],
        answer: "At 2:07, after 7 seconds of jam time",
        explanation:
          "Red owes exactly 7 more seconds. The timer calls done when that 7-second remainder expires, not a new 10- or 30-second segment.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      }
    ]
  },
  {
    id: "pack-engagement",
    title: "Pack and Engagement Scenario",
    focus: "No-pack communication, out-of-play awareness, and ref positioning.",
    overview:
      "Track a fast-moving pack sequence where officials need to communicate legal engagement status clearly.",
    objectives: [
      "Identify correct no-pack and out-of-play communication on exact timeline marks.",
      "Apply engagement-zone distance limits with concrete measurements.",
      "Reinforce which referee positions own pack definition coverage."
    ],
    references: ["Rules 2.3", "Rules 2.5", "Cues/Codes/Signals: No Pack/Out of Play"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Pack stretches",
        narrative:
          "Blocker groups separate rapidly and no legal largest in-proximity grouping remains."
      },
      {
        type: "decision",
        time: "0:03",
        title: "Primary communication",
        narrative: "Three seconds into the split, skaters need immediate orientation to legal pack status.",
        question: "Which call should refs communicate first?",
        options: ["No Pack", "Lead Jammer", "Team Timeout", "Done"],
        answer: "No Pack",
        explanation:
          "No Pack communicates that pack definition is not currently met and guides immediate skater adjustment.",
        review: { tab: "signals", id: "no-pack", label: "No Pack Signal" }
      },
      {
        type: "context",
        time: "0:06",
        title: "Illegal engagement risk",
        narrative:
          "A blocker keeps initiating contact while 25 feet behind the rear of the re-forming pack after repeated warnings."
      },
      {
        type: "decision",
        time: "0:07",
        title: "Distance check",
        narrative:
          "The engagement zone is measured as 20 feet from the pack boundaries, but this blocker is 25 feet behind.",
        question: "How far outside the legal engagement zone is this blocker?",
        options: ["5 feet", "10 feet", "15 feet", "20 feet"],
        answer: "5 feet",
        explanation:
          "Engagement extends 20 feet. At 25 feet behind the pack, the blocker is 5 feet outside legal engagement distance.",
        review: { tab: "rules", id: "pack-engagement", label: "Pack and Engagement Zone" }
      },
      {
        type: "decision",
        time: "0:08",
        title: "Likely penalty direction",
        narrative: "Illegal engagement continues after warnings while still outside the 20-foot zone.",
        question: "What rules area is most relevant to this penalty decision?",
        options: [
          "Out-of-play / engagement zone enforcement",
          "Star pass completion rules",
          "Team timeout administration",
          "Penalty box done cue"
        ],
        answer: "Out-of-play / engagement zone enforcement",
        explanation:
          "Illegal engagement outside the engagement zone is handled under out-of-play and engagement enforcement rules.",
        review: { tab: "rules", id: "pack-engagement", label: "Pack and Engagement Zone" }
      },
      {
        type: "decision",
        time: "0:12",
        title: "Ref coverage role",
        narrative: "Crew needs strongest inside perspective on pack definition and in-pack legality.",
        question: "Which referee role is most centered on this inside-pack coverage?",
        options: ["Inside Pack Ref", "Jammer Ref", "Head NSO", "Scorekeeper"],
        answer: "Inside Pack Ref",
        explanation:
          "Inside Pack Refs are primarily responsible for inside-lane pack definition and related engagement legality coverage.",
        review: { tab: "refs", id: "ipr", label: "Inside Pack Ref" }
      },
      {
        type: "context",
        time: "0:16",
        title: "Pack reforms",
        narrative:
          "At 0:16, blockers re-form a legal largest in-proximity group, restoring pack definition and standard engagement reference."
      }
    ]
  },
  {
    id: "lead-scoring-starpass",
    title: "Lead, Star Pass, and Scoring Scenario",
    focus: "Jammer status communication and score/lineup synchronization.",
    overview:
      "Run a jam where lead is established and a later star pass requires coordinated signaling and paperwork updates.",
    objectives: [
      "Signal lead jammer status at the correct moment in the jam timeline.",
      "Apply star pass communication and identity updates with immediate paperwork timing.",
      "Reinforce no-points-on-initial-trip scoring logic using exact timing examples."
    ],
    references: ["Rules 3.1", "Rules 3.4", "Cues/Codes/Signals: Lead / Star Pass Complete"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Jam starts clean",
        narrative: "Both jammers begin initial trips with full pack engagement."
      },
      {
        type: "context",
        time: "0:14",
        title: "Initial trip completed",
        narrative:
          "Blue jammer exits the initial trip at 0:14. Any legal passes after this point can earn points."
      },
      {
        type: "decision",
        time: "0:18",
        title: "Lead status awarded",
        narrative:
          "At 0:18, Blue has already completed initial and is the first jammer to do so legally without penalties.",
        question: "Which signal confirms call-off authority for that jammer?",
        options: ["Lead Jammer", "Not Lead", "Time Stopped", "No Earned Pass"],
        answer: "Lead Jammer",
        explanation:
          "Lead Jammer communicates that the jammer can legally call off the jam.",
        review: { tab: "signals", id: "lead", label: "Lead Jammer Signal" }
      },
      {
        type: "context",
        time: "0:46",
        title: "Star pass in progress",
        narrative:
          "Blue jammer begins legal star transfer to the pivot at 0:46; jammer identity changes once transfer completes."
      },
      {
        type: "decision",
        time: "0:47",
        title: "Transfer confirmation",
        narrative:
          "At 0:47 the transfer is legally completed and all officials must update jammer identity immediately.",
        question: "Which signal marks legal completion of the star transfer?",
        options: ["Star Pass Complete", "No Pack", "Team Timeout", "Done"],
        answer: "Star Pass Complete",
        explanation:
          "Star Pass Complete confirms legal jammer status transfer to the pivot.",
        review: { tab: "signals", id: "star-pass-complete", label: "Star Pass Complete Signal" }
      },
      {
        type: "decision",
        time: "0:50",
        title: "Paperwork sync",
        narrative:
          "Three seconds after the transfer, NSOs must already have identity updates logged so scoring attribution stays accurate.",
        question: "Which NSO role is most focused on capturing this jammer identity change by jam?",
        options: ["Lineup Tracker", "Jam Timer", "Penalty Box Timer", "Inside Whiteboard Operator"],
        answer: "Lineup Tracker",
        explanation:
          "Lineup Tracker captures role identity per jam and supports clean scoring synchronization during star pass events.",
        review: { tab: "nso", id: "lineup-tracker", label: "Lineup Tracker" }
      },
      {
        type: "decision",
        time: "0:58",
        title: "Scoring trip logic",
        narrative:
          "Blue completed initial at 0:14. At 0:58, the current jammer legally laps three opposing blockers.",
        question: "How many points are available on that 0:58 pass sequence?",
        options: [
          "3 points",
          "0 points",
          "1 point",
          "4 points"
        ],
        answer: "3 points",
        explanation:
          "Rule 3.1 prevents points on initial only. Once initial is complete, one point is earned per legally passed opposing blocker.",
        review: { tab: "rules", id: "scoring", label: "Scoring Fundamentals" }
      }
    ]
  },
  {
    id: "blocker-seat-queue",
    title: "Blocker Seat Queue Saturation Scenario",
    focus: "Seat priority, queue order, and carryover seconds when seats are full.",
    overview:
      "Work a packed penalty box sequence where blocker arrival order must be tracked by exact times to prevent illegal releases.",
    objectives: [
      "Apply blocker queue order by physical entry timestamp.",
      "Use exact 20-second stand and 30-second done marks for each seated blocker.",
      "Compute remaining carryover seconds at jam end."
    ],
    references: ["Rules 4.4.1", "Rules 4.4.3", "Officiating Procedures 7.4-7.5"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Jam starts",
        narrative: "Penalty box starts empty with three blocker seats available."
      },
      {
        type: "context",
        time: "0:12",
        title: "First blocker seated",
        narrative: "Blocker A reports legally and sits at 0:12."
      },
      {
        type: "context",
        time: "0:18",
        title: "Second blocker seated",
        narrative: "Blocker B reports and sits at 0:18."
      },
      {
        type: "context",
        time: "0:24",
        title: "Third blocker seated",
        narrative: "Blocker C sits at 0:24. All blocker seats are now full."
      },
      {
        type: "decision",
        time: "0:30",
        title: "Queue assignment",
        narrative: "Blocker D reports at 0:30 while all seats remain occupied.",
        question: "What should the penalty box manager do immediately?",
        options: [
          "Record Blocker D as first waiting blocker in queue order",
          "Seat Blocker D ahead of the earliest seated blocker",
          "Ignore Blocker D until jam end",
          "Choose queue order based on game score"
        ],
        answer: "Record Blocker D as first waiting blocker in queue order",
        explanation:
          "When blocker seats are full, waiting order is tracked by physical entry order and timestamp.",
        review: { tab: "nso", id: "penalty-box-manager", label: "Penalty Box Manager" }
      },
      {
        type: "context",
        time: "0:42",
        title: "First seat opens",
        narrative: "Blocker A reaches 30 seconds at 0:42 and legally exits the box."
      },
      {
        type: "decision",
        time: "0:42",
        title: "Seat fill order",
        narrative: "A seat opens with a waiting blocker already queued.",
        question: "Who gets that newly open blocker seat?",
        options: [
          "The first waiting blocker in queue order (Blocker D)",
          "Any blocker from the same team as Blocker A",
          "The most recently penalized blocker",
          "No one until the next jam"
        ],
        answer: "The first waiting blocker in queue order (Blocker D)",
        explanation:
          "Blocker queue rules use first waiting skater order, not team preference or recency.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      },
      {
        type: "decision",
        time: "0:48",
        title: "Second blocker release cue",
        narrative: "Blocker B has been seated from 0:18 to 0:48.",
        question: "What is the correct cue at 0:48 if Blocker B is upright?",
        options: ["Done", "Stand", "No Pack", "Official Review"],
        answer: "Done",
        explanation:
          "Thirty seconds have been served (0:18 to 0:48), so done is correct if release conditions are met.",
        review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
      },
      {
        type: "context",
        time: "0:58",
        title: "Jam ends",
        narrative: "The jam ends at 0:58. Blocker D has served from 0:42 to 0:58 (16 seconds)."
      },
      {
        type: "decision",
        time: "0:58",
        title: "Carryover amount",
        narrative: "Blocker D's penalty is not complete at jam end.",
        question: "How much penalty time remains for Blocker D?",
        options: ["14 seconds", "10 seconds", "16 seconds", "4 seconds"],
        answer: "14 seconds",
        explanation:
          "A standard penalty is 30 seconds of jam time. After serving 16 seconds, 14 seconds remain.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      }
    ]
  },
  {
    id: "timeout-review-clocks",
    title: "Timeout and Review Clock Control Scenario",
    focus: "30-second lineup timing, 60-second team timeout timing, and review rights.",
    overview:
      "Run the game clock workflow after a quick jam ending, then process a team timeout and official review with exact period-clock math.",
    objectives: [
      "Calculate earliest legal next jam start after jam end.",
      "Apply exact 60-second timeout duration on period clock.",
      "Confirm official review rights and signaling."
    ],
    references: ["Rules 1.3.1", "Rules 1.3.2", "Rules 1.3.4"],
    events: [
      {
        type: "context",
        time: "Period 10:00",
        title: "Jam starts",
        narrative: "The period begins at 10:00 and the jam starts immediately."
      },
      {
        type: "context",
        time: "Jam 0:36",
        title: "Jam called off",
        narrative: "Lead jammer calls off at jam time 0:36, leaving period clock at 9:24."
      },
      {
        type: "decision",
        time: "Period 9:24",
        title: "Earliest next jam time",
        narrative: "No timeout or review is requested yet.",
        question: "What is the earliest legal next jam-starting whistle under normal conditions?",
        options: ["Period 8:54", "Period 9:04", "Period 8:24", "Period 9:24"],
        answer: "Period 8:54",
        explanation: "Minimum time between jams is 30 seconds, so 9:24 transitions to 8:54.",
        review: { tab: "rules", id: "game-format", label: "Game Format and Timing" }
      },
      {
        type: "context",
        time: "Period 9:05",
        title: "Team timeout requested",
        narrative: "At 9:05, the captain requests a team timeout before the next jam starts."
      },
      {
        type: "decision",
        time: "Period 9:05",
        title: "Timeout expiry",
        narrative: "A team timeout runs for a full 60 seconds.",
        question: "If granted at 9:05, what period time marks timeout expiration?",
        options: ["Period 8:05", "Period 8:35", "Period 7:05", "Period 9:35"],
        answer: "Period 8:05",
        explanation: "Team timeout duration is 60 seconds, so period clock drops from 9:05 to 8:05.",
        review: { tab: "rules", id: "timeouts-reviews", label: "Timeouts and Reviews" }
      },
      {
        type: "context",
        time: "Period 8:05",
        title: "Official review requested",
        narrative: "Immediately after timeout, the captain requests an official review."
      },
      {
        type: "decision",
        time: "Period 8:05",
        title: "Review-right count",
        narrative: "NSOs must confirm entitlement before processing review paperwork.",
        question: "How many official reviews is each team entitled to per period?",
        options: ["1", "0", "2", "3"],
        answer: "1",
        explanation: "Each team has one official review per period under Rule 1.3.2.",
        review: { tab: "rules", id: "timeouts-reviews", label: "Timeouts and Reviews" }
      },
      {
        type: "decision",
        time: "Period 8:05",
        title: "Signal confirmation",
        narrative: "Ref crew must communicate that this stoppage is a review, not a team timeout.",
        question: "Which signal matches that request type?",
        options: ["Official Review", "Team Timeout", "Official Timeout", "Time Stopped"],
        answer: "Official Review",
        explanation: "The correct signal for a captain's review request is Official Review.",
        review: { tab: "signals", id: "official-review", label: "Official Review Signal" }
      }
    ]
  },
  {
    id: "star-pass-penalty-carryover",
    title: "Star Pass to Penalty Carryover Scenario",
    focus: "Star pass identity changes plus exact penalty carryover seconds.",
    overview:
      "Track a jam where jammer identity changes by star pass, then the new jammer serves a penalty that carries into the next jam.",
    objectives: [
      "Apply exact timing around star pass completion.",
      "Use stand/done marks for jammer penalty service.",
      "Carry precise remaining jammer time into the next jam."
    ],
    references: ["Rules 3.4", "Rules 4.4.1", "Rules 4.4.2"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Jam starts",
        narrative: "Both jammers begin initial trips under full-pack conditions."
      },
      {
        type: "context",
        time: "0:46",
        title: "Star transfer begins",
        narrative: "Blue jammer begins a legal star transfer to their pivot at 0:46."
      },
      {
        type: "decision",
        time: "0:47",
        title: "Transfer completion signal",
        narrative: "At 0:47, the transfer is complete and jammer identity changes.",
        question: "Which signal confirms legal transfer completion?",
        options: ["Star Pass Complete", "Lead Jammer", "No Earned Pass", "Report to Box"],
        answer: "Star Pass Complete",
        explanation: "Star Pass Complete marks the legal moment that jammer status transfers to pivot.",
        review: { tab: "signals", id: "star-pass-complete", label: "Star Pass Complete Signal" }
      },
      {
        type: "context",
        time: "0:50",
        title: "New jammer penalized",
        narrative:
          "The new jammer (former pivot) receives a penalty and sits at 0:50. Penalty timing starts immediately."
      },
      {
        type: "decision",
        time: "1:10",
        title: "Stand timing",
        narrative: "The jammer has now served 20 seconds (0:50 to 1:10).",
        question: "What cue is required at 1:10?",
        options: ["Stand", "Done", "Out of Play", "No Pack"],
        answer: "Stand",
        explanation: "The stand cue is issued with 10 seconds remaining in a standard 30-second penalty.",
        review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
      },
      {
        type: "context",
        time: "1:14",
        title: "Jam ends before full service",
        narrative: "Jam ends at 1:14. The jammer served 24 seconds and still owes 6 seconds."
      },
      {
        type: "decision",
        time: "1:14",
        title: "Next jam start position",
        narrative: "The jammer has unserved penalty time at jam end.",
        question: "Where must this jammer start the next jam?",
        options: [
          "Seated in the penalty box to continue service",
          "On track at jammer line",
          "On the pivot line as blocker",
          "At team bench for substitution"
        ],
        answer: "Seated in the penalty box to continue service",
        explanation: "Unserved jammer penalty time carries into the next jam and is resumed in the box.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      },
      {
        type: "decision",
        time: "Next Jam 0:00",
        title: "Final 6-second release",
        narrative: "Next jam starts with 6 seconds remaining on the jammer penalty.",
        question:
          "If the next jam-starting whistle is at period clock 6:00, when should the box timer call done?",
        options: [
          "At 5:54, after 6 seconds of jam time",
          "At 5:50, after a full stand interval",
          "Immediately at 6:00",
          "At the next jam-ending whistle"
        ],
        answer: "At 5:54, after 6 seconds of jam time",
        explanation: "The remaining service is exactly 6 seconds, counted from the next jam start.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      }
    ]
  },
  {
    id: "engagement-distance-recovery",
    title: "Engagement Distance Recovery Scenario",
    focus: "No-pack communication and exact engagement-zone distance checks.",
    overview:
      "Follow a pack split and reform sequence where officials must call no-pack quickly and enforce the 20-foot engagement-zone limits precisely.",
    objectives: [
      "Call no-pack as soon as pack definition is lost.",
      "Calculate exact feet outside the 20-foot engagement zone.",
      "Use correct signals as pack status changes."
    ],
    references: ["Rules 2.3", "Rules 2.5", "Cues/Codes/Signals: No Pack / Pack Is Here"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Pack defined",
        narrative: "A legal pack is established at jam start."
      },
      {
        type: "context",
        time: "0:11",
        title: "Pack split",
        narrative: "Blockers separate and there is no clear largest in-proximity grouping."
      },
      {
        type: "decision",
        time: "0:13",
        title: "Immediate communication",
        narrative: "Two seconds after split, skaters need legal status direction.",
        question: "Which signal/call should be used first?",
        options: ["No Pack", "Pack Is Here", "Lead Jammer", "Jam Ending"],
        answer: "No Pack",
        explanation: "No Pack communicates that pack definition is not currently met.",
        review: { tab: "signals", id: "no-pack", label: "No Pack Signal" }
      },
      {
        type: "context",
        time: "0:17",
        title: "Illegal engagement distance",
        narrative: "A blocker initiates contact while 22 feet behind the rear of the pack."
      },
      {
        type: "decision",
        time: "0:17",
        title: "Distance math",
        narrative: "Engagement zone extends 20 feet from the pack boundaries.",
        question: "How far outside legal engagement distance is that blocker?",
        options: ["2 feet", "5 feet", "10 feet", "20 feet"],
        answer: "2 feet",
        explanation: "At 22 feet behind a 20-foot boundary, the blocker is 2 feet out of zone.",
        review: { tab: "rules", id: "pack-engagement", label: "Pack and Engagement Zone" }
      },
      {
        type: "decision",
        time: "0:18",
        title: "Rules area ownership",
        narrative: "Illegal contact continues outside the legal engagement zone.",
        question: "Which rules area governs this enforcement decision?",
        options: [
          "Out-of-play / engagement-zone enforcement",
          "Penalty-box timing enforcement",
          "Star pass completion rules",
          "Official review retention rules"
        ],
        answer: "Out-of-play / engagement-zone enforcement",
        explanation: "This call is controlled by pack and engagement-zone rules, not penalty-box timing.",
        review: { tab: "rules", id: "pack-engagement", label: "Pack and Engagement Zone" }
      },
      {
        type: "context",
        time: "0:22",
        title: "Pack reforms",
        narrative: "Blockers re-form legal in-proximity grouping at 0:22."
      },
      {
        type: "decision",
        time: "0:22",
        title: "Reform communication",
        narrative: "Skaters need immediate orientation to the re-established pack location.",
        question: "Which signal best communicates legal pack location now?",
        options: ["Pack Is Here", "No Pack", "Out of Play", "Time Stopped"],
        answer: "Pack Is Here",
        explanation: "Pack Is Here helps skaters identify legal engagement reference after reform.",
        review: { tab: "signals", id: "pack-is-here", label: "Pack Is Here Signal" }
      },
      {
        type: "decision",
        time: "0:24",
        title: "Coverage role",
        narrative: "Crew needs strongest inside perspective on in-pack legality after reform.",
        question: "Which referee role is centered on this inside-pack coverage?",
        options: ["Inside Pack Ref", "Jammer Ref", "Head NSO", "Scorekeeper"],
        answer: "Inside Pack Ref",
        explanation: "Inside Pack Refs are positioned for inside-lane pack definition and engagement legality.",
        review: { tab: "refs", id: "ipr", label: "Inside Pack Ref" }
      }
    ]
  },
  {
    id: "upright-release-check",
    title: "Upright Stand and Release Verification Scenario",
    focus: "Exact stand/done marks plus upright verification at release.",
    overview:
      "Practice the final 10-second standing phase and release handling when posture is not upright at the completion mark.",
    objectives: [
      "Call stand exactly at 20 seconds served.",
      "Confirm upright posture at completion before release.",
      "Compute remaining time when jam ends before done."
    ],
    references: ["Rules 4.4.1", "Officiating Procedures 7.4-7.5"],
    events: [
      {
        type: "context",
        time: "0:00",
        title: "Jam begins",
        narrative: "Penalty box starts clear and timers are ready."
      },
      {
        type: "context",
        time: "0:32",
        title: "Skater seated",
        narrative: "A blocker reports legally and sits at 0:32."
      },
      {
        type: "decision",
        time: "0:52",
        title: "Stand cue moment",
        narrative: "Exactly 20 seconds have been served (0:32 to 0:52).",
        question: "What cue is required now?",
        options: ["Stand", "Done", "No Pack", "Return to Track"],
        answer: "Stand",
        explanation: "Stand is called at 20 seconds served, starting the final 10-second phase.",
        review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
      },
      {
        type: "context",
        time: "1:02",
        title: "Completion mark reached",
        narrative: "Thirty seconds have elapsed, but the skater is still crouched with one knee on the floor."
      },
      {
        type: "decision",
        time: "1:02",
        title: "Release check",
        narrative: "Timer must decide release versus hold based on upright status.",
        question: "What is the correct action at 1:02?",
        options: [
          "Hold release until skater is fully upright, then call done",
          "Call done immediately at 30 seconds regardless of posture",
          "Reset the full 30-second penalty",
          "Issue automatic misconduct"
        ],
        answer: "Hold release until skater is fully upright, then call done",
        explanation: "Release handling requires upright completion; do not release from a non-upright posture.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      },
      {
        type: "context",
        time: "1:05",
        title: "Skater becomes upright",
        narrative: "The skater reaches a full upright position at 1:05."
      },
      {
        type: "decision",
        time: "1:05",
        title: "Release cue",
        narrative: "All release conditions are now met.",
        question: "Which cue should the timer use now?",
        options: ["Done", "Stand", "No Pack", "Official Timeout"],
        answer: "Done",
        explanation: "Once upright and eligible for release, the timer uses done.",
        review: { tab: "nso", id: "penalty-box-timer", label: "Penalty Box Timer" }
      },
      {
        type: "decision",
        time: "Hypothetical check",
        title: "Early jam-end math",
        narrative: "If this same jam had ended at 1:00 instead of continuing to 1:05, service would stop at whistle.",
        question: "How much penalty time would remain at a 1:00 jam-ending whistle?",
        options: ["2 seconds", "0 seconds", "5 seconds", "10 seconds"],
        answer: "2 seconds",
        explanation: "From 0:32 to 1:00 is 28 seconds served, leaving 2 seconds to carry into next jam.",
        review: { tab: "rules", id: "penalty-enforcement", label: "Penalty Enforcement" }
      }
    ]
  }
];

const SIGNAL_PENALTY_CODES = {
  "back-block": "B",
  "high-block": "A",
  "low-block": "L",
  forearm: "F",
  "head-block": "H",
  "leg-block": "E",
  "illegal-contact": "C",
  multiplayer: "M",
  direction: "D",
  cut: "X",
  "illegal-position": "P",
  interference: "N",
  "illegal-procedure": "I",
  misconduct: "G"
};

const SIGNAL_OFFICIAL_IMAGE_MAP = {
  "back-block": "assets/signals/wftda-penalty-crops/back-block.png",
  "high-block": "assets/signals/wftda-penalty-crops/high-block.png",
  "low-block": "assets/signals/wftda-penalty-crops/low-block.png",
  "head-block": "assets/signals/wftda-penalty-crops/head-block.png",
  forearm: "assets/signals/wftda-penalty-crops/forearm.png",
  "leg-block": "assets/signals/wftda-penalty-crops/leg-block.png",
  "illegal-contact": "assets/signals/wftda-penalty-crops/illegal-contact.png",
  multiplayer: "assets/signals/wftda-penalty-crops/multiplayer.png",
  "illegal-position": "assets/signals/wftda-penalty-crops/illegal-position.png",
  cut: "assets/signals/wftda-penalty-crops/cut.png",
  direction: "assets/signals/wftda-penalty-crops/direction.png",
  interference: "assets/signals/wftda-penalty-crops/interference.png",
  "illegal-procedure": "assets/signals/wftda-penalty-crops/illegal-procedure.png",
  misconduct: "assets/signals/wftda-penalty-crops/misconduct.png"
};

const STORAGE_KEYS = {
  learnedRoles: "derbyTrainer.learnedRoles",
  learnedRules: "derbyTrainer.learnedRules",
  bestDrill: "derbyTrainer.bestDrill"
};

const ui = {
  roleProgress: document.getElementById("roleProgress"),
  ruleProgress: document.getElementById("ruleProgress"),
  bestDrill: document.getElementById("bestDrill"),
  tabButtons: [...document.querySelectorAll(".tab-btn")],
  tabPanels: [...document.querySelectorAll(".tab-panel")],
  roleFilter: document.getElementById("roleFilter"),
  roleSearch: document.getElementById("roleSearch"),
  roleList: document.getElementById("roleList"),
  roleDetail: document.getElementById("roleDetail"),
  ruleList: document.getElementById("ruleList"),
  ruleDetail: document.getElementById("ruleDetail"),
  signalFilter: document.getElementById("signalFilter"),
  signalSearch: document.getElementById("signalSearch"),
  signalList: document.getElementById("signalList"),
  signalDetail: document.getElementById("signalDetail"),
  refPositionGrid: document.getElementById("refPositionGrid"),
  simulationList: document.getElementById("simulationList"),
  simulationDetail: document.getElementById("simulationDetail"),
  mobileLayouts: [...document.querySelectorAll(".mobile-split")],
  drillModeButtons: [...document.querySelectorAll(".drill-mode-btn")],
  quizCard: document.getElementById("quizCard")
};

const state = {
  activeTab: "nso",
  roleFilter: "all",
  roleSearch: "",
  selectedRoleId: null,
  learnedRoles: new Set(),
  selectedRuleId: null,
  learnedRules: new Set(),
  signalFilter: "all",
  signalSearch: "",
  selectedSignalId: null,
  selectedSimulationId: null,
  isMobileLayout: false,
  mobileViews: {
    nso: "list",
    rules: "list",
    signals: "list",
    simulation: "list"
  },
  simulation: {
    started: false,
    complete: false,
    playing: false,
    eventIndex: 0,
    score: 0,
    answered: {},
    missed: {},
    timeoutId: null
  },
  quiz: {
    mode: null,
    target: null,
    questions: [],
    index: 0,
    score: 0,
    missed: {}
  }
};

const mobileMediaQuery = window.matchMedia("(max-width: 900px)");

function init() {
  state.learnedRoles = loadSet(STORAGE_KEYS.learnedRoles);
  state.learnedRules = loadSet(STORAGE_KEYS.learnedRules);

  updateSummary();
  bindEvents();
  syncMobileLayoutMode();
  renderRoleList();
  renderRuleList();
  renderSignalList();
  renderRefPositions();
  renderSimulationList();
}

function bindEvents() {
  ui.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tab);
    });

    button.addEventListener("keydown", (event) => {
      const currentIndex = ui.tabButtons.indexOf(button);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex =
          (currentIndex + direction + ui.tabButtons.length) % ui.tabButtons.length;
        const nextButton = ui.tabButtons[nextIndex];
        nextButton.focus();
        setActiveTab(nextButton.dataset.tab);
      }
    });
  });

  ui.roleFilter.addEventListener("change", (event) => {
    state.roleFilter = event.target.value;
    renderRoleList();
  });

  ui.roleSearch.addEventListener("input", (event) => {
    state.roleSearch = event.target.value.trim().toLowerCase();
    renderRoleList();
  });

  ui.signalFilter.addEventListener("change", (event) => {
    state.signalFilter = event.target.value;
    renderSignalList();
  });

  ui.signalSearch.addEventListener("input", (event) => {
    state.signalSearch = event.target.value.trim().toLowerCase();
    renderSignalList();
  });

  ui.drillModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      startDrill(button.dataset.drillMode, null);
    });
  });

  ui.mobileLayouts.forEach((layout) => {
    [...layout.querySelectorAll(".mobile-view-btn")].forEach((button) => {
      button.addEventListener("click", () => {
        const layoutId = layout.dataset.mobileLayout;
        const view = button.dataset.mobileViewBtn;
        setMobileLayoutView(layoutId, view);
      });
    });
  });

  if (mobileMediaQuery.addEventListener) {
    mobileMediaQuery.addEventListener("change", syncMobileLayoutMode);
  } else if (mobileMediaQuery.addListener) {
    mobileMediaQuery.addListener(syncMobileLayoutMode);
  }
}

function syncMobileLayoutMode() {
  state.isMobileLayout = mobileMediaQuery.matches;
  document.body.classList.toggle("mobile-layout", state.isMobileLayout);

  ui.mobileLayouts.forEach((layout) => {
    const layoutId = layout.dataset.mobileLayout;
    const view = state.isMobileLayout ? state.mobileViews[layoutId] || "list" : "detail";
    applyMobileLayoutView(layout, view, false);
  });
}

function setMobileLayoutView(layoutId, view) {
  const layout = ui.mobileLayouts.find((entry) => entry.dataset.mobileLayout === layoutId);
  if (!layout || (view !== "list" && view !== "detail")) {
    return;
  }

  applyMobileLayoutView(layout, view, true);
}

function applyMobileLayoutView(layout, view, persist) {
  layout.dataset.mobileView = view;

  const layoutId = layout.dataset.mobileLayout;
  if (persist && layoutId) {
    state.mobileViews[layoutId] = view;
  }

  [...layout.querySelectorAll(".mobile-view-btn")].forEach((button) => {
    const isActive = button.dataset.mobileViewBtn === view;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function revealMobileDetail(layoutId) {
  if (!state.isMobileLayout) {
    return;
  }

  setMobileLayoutView(layoutId, "detail");
}

function setActiveTab(tabId) {
  if (tabId !== "simulation") {
    stopSimulationPlayback();
  }

  state.activeTab = tabId;

  ui.tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
    button.setAttribute("aria-selected", button.dataset.tab === tabId ? "true" : "false");
  });

  ui.tabPanels.forEach((panel) => {
    const isActive = panel.id === tabId;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  if (tabId === "simulation") {
    renderSimulationDetail();
  }

  if (state.isMobileLayout && state.mobileViews[tabId]) {
    setMobileLayoutView(tabId, state.mobileViews[tabId]);
  }
}

function getFilteredRoles() {
  let filtered = nsoRoles;

  if (state.roleFilter !== "all") {
    filtered = filtered.filter((role) => role.family === state.roleFilter);
  }

  if (!state.roleSearch) {
    return filtered;
  }

  return filtered.filter((role) => {
    const haystack = [
      role.name,
      role.summary,
      role.beforeJam.join(" "),
      role.duringJam.join(" "),
      role.betweenJams.join(" "),
      role.mustKnow.join(" "),
      role.edgeCases.join(" "),
      role.keyPartners.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(state.roleSearch);
  });
}

function renderRoleList() {
  const filtered = getFilteredRoles();

  if (!filtered.length) {
    ui.roleList.innerHTML = "<p>No NSO roles match that filter/search.</p>";
    ui.roleDetail.innerHTML = "<h3>No role selected</h3><p>Try a different filter or search.</p>";
    return;
  }

  if (!filtered.some((role) => role.id === state.selectedRoleId)) {
    state.selectedRoleId = filtered[0].id;
  }

  ui.roleList.innerHTML = filtered
    .map((role) => {
      const learnedBadge = state.learnedRoles.has(role.id)
        ? '<span class="role-badge">Learned</span>'
        : "";

      return `
        <button class="role-item ${role.id === state.selectedRoleId ? "active" : ""}" data-role-id="${escapeHtml(
          role.id
        )}">
          <div class="role-item-header">
            <strong>${escapeHtml(role.name)}</strong>
            ${learnedBadge}
          </div>
          <span>${escapeHtml(role.summary)}</span>
        </button>
      `;
    })
    .join("");

  [...ui.roleList.querySelectorAll(".role-item")].forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRoleId = button.dataset.roleId;
      renderRoleList();
      revealMobileDetail("nso");
    });
  });

  renderRoleDetail();
}

function renderRoleDetail() {
  const role = nsoRoles.find((entry) => entry.id === state.selectedRoleId);
  if (!role) {
    return;
  }

  const isLearned = state.learnedRoles.has(role.id);

  ui.roleDetail.innerHTML = `
    <h3>${escapeHtml(role.name)}</h3>
    <p>${escapeHtml(role.summary)}</p>
    <span class="role-meta">${escapeHtml(role.familyLabel)}</span>

    <div class="detail-actions">
      <button id="toggleRoleLearnedBtn" class="action-btn ${isLearned ? "secondary" : ""}">
        ${isLearned ? "Mark as not learned" : "Mark as learned"}
      </button>
      <button id="roleDrillBtn" class="ghost-btn">Drill this role area</button>
    </div>

    <div class="detail-grid">
      ${renderListBlock("Before the Jam", role.beforeJam)}
      ${renderListBlock("During the Jam", role.duringJam)}
      ${renderListBlock("Between Jams", role.betweenJams)}
      ${renderListBlock("Must-Know Rules and Knowledge", role.mustKnow)}
      ${renderListBlock("High-Risk Edge Cases", role.edgeCases)}
      ${renderListBlock("Key Communication Partners", role.keyPartners)}
    </div>
  `;

  const toggleBtn = document.getElementById("toggleRoleLearnedBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (state.learnedRoles.has(role.id)) {
        state.learnedRoles.delete(role.id);
      } else {
        state.learnedRoles.add(role.id);
      }

      saveSet(STORAGE_KEYS.learnedRoles, state.learnedRoles);
      updateSummary();
      renderRoleList();
    });
  }

  const roleDrillBtn = document.getElementById("roleDrillBtn");
  if (roleDrillBtn) {
    roleDrillBtn.addEventListener("click", () => {
      setActiveTab("drills");
      startDrill("nso", { tab: "nso", id: role.id, label: role.name });
    });
  }
}

function renderRuleList() {
  if (!ruleModules.some((module) => module.id === state.selectedRuleId)) {
    state.selectedRuleId = ruleModules[0].id;
  }

  ui.ruleList.innerHTML = ruleModules
    .map((module) => {
      const learnedBadge = state.learnedRules.has(module.id)
        ? '<span class="role-badge">Learned</span>'
        : "";

      return `
        <button class="role-item ${module.id === state.selectedRuleId ? "active" : ""}" data-rule-id="${escapeHtml(
          module.id
        )}">
          <div class="role-item-header">
            <strong>${escapeHtml(module.title)}</strong>
            ${learnedBadge}
          </div>
          <span>${escapeHtml(module.summary)}</span>
        </button>
      `;
    })
    .join("");

  [...ui.ruleList.querySelectorAll(".role-item")].forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRuleId = button.dataset.ruleId;
      renderRuleList();
      revealMobileDetail("rules");
    });
  });

  renderRuleDetail();
}

function renderRuleDetail() {
  const module = ruleModules.find((entry) => entry.id === state.selectedRuleId);
  if (!module) {
    return;
  }

  const isLearned = state.learnedRules.has(module.id);

  ui.ruleDetail.innerHTML = `
    <h3>${escapeHtml(module.title)}</h3>
    <p>${escapeHtml(module.summary)}</p>

    <div class="detail-actions">
      <button id="toggleRuleLearnedBtn" class="action-btn ${isLearned ? "secondary" : ""}">
        ${isLearned ? "Mark as not learned" : "Mark as learned"}
      </button>
      <button id="ruleDrillBtn" class="ghost-btn">Drill this rules area</button>
    </div>

    <div class="detail-grid">
      ${renderListBlock("Key Rules to Know", module.keyPoints)}
      ${renderRuleVisualBlock(module)}
      ${renderListBlock("Common Mistakes", module.commonTraps)}
      ${renderListBlock("Primary References", module.ruleRefs)}
    </div>
  `;

  const toggleBtn = document.getElementById("toggleRuleLearnedBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (state.learnedRules.has(module.id)) {
        state.learnedRules.delete(module.id);
      } else {
        state.learnedRules.add(module.id);
      }

      saveSet(STORAGE_KEYS.learnedRules, state.learnedRules);
      updateSummary();
      renderRuleList();
    });
  }

  const ruleDrillBtn = document.getElementById("ruleDrillBtn");
  if (ruleDrillBtn) {
    ruleDrillBtn.addEventListener("click", () => {
      setActiveTab("drills");
      startDrill("rules", { tab: "rules", id: module.id, label: module.title });
    });
  }
}

function getFilteredSignals() {
  let filtered = refSignals;

  if (state.signalFilter !== "all") {
    filtered = filtered.filter((signal) => signal.category === state.signalFilter);
  }

  if (!state.signalSearch) {
    return filtered;
  }

  return filtered.filter((signal) => {
    const haystack = [signal.name, signal.meaning, signal.whenUsed, signal.cueWords, signal.reference]
      .join(" ")
      .toLowerCase();

    return haystack.includes(state.signalSearch);
  });
}

function renderSignalList() {
  const filtered = getFilteredSignals();

  if (!filtered.length) {
    ui.signalList.innerHTML = "<p>No signals match that filter/search.</p>";
    ui.signalDetail.innerHTML = "<h3>No signal selected</h3><p>Try a different filter or search.</p>";
    return;
  }

  if (!filtered.some((signal) => signal.id === state.selectedSignalId)) {
    state.selectedSignalId = filtered[0].id;
  }

  ui.signalList.innerHTML = filtered
    .map((signal) => {
      return `
        <button class="role-item ${signal.id === state.selectedSignalId ? "active" : ""}" data-signal-id="${escapeHtml(
          signal.id
        )}">
          <div class="role-item-header">
            <strong>${escapeHtml(signal.name)}</strong>
            <span class="group-badge">${escapeHtml(signal.category)}</span>
          </div>
          <span>${escapeHtml(signal.meaning)}</span>
        </button>
      `;
    })
    .join("");

  [...ui.signalList.querySelectorAll(".role-item")].forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSignalId = button.dataset.signalId;
      renderSignalList();
      revealMobileDetail("signals");
    });
  });

  renderSignalDetail();
}

function renderSignalDetail() {
  const signal = refSignals.find((entry) => entry.id === state.selectedSignalId);
  if (!signal) {
    return;
  }

  ui.signalDetail.innerHTML = `
    <h3>${escapeHtml(signal.name)}</h3>
    <p>${escapeHtml(signal.meaning)}</p>
    <span class="role-meta">${escapeHtml(signal.category)} signal</span>

    <div class="detail-grid">
      ${renderSignalVisualBlock(signal)}
      <section class="detail-block">
        <h4>When You See It</h4>
        <p>${escapeHtml(signal.whenUsed)}</p>
      </section>
      <section class="detail-block">
        <h4>Typical Cue Language</h4>
        <p>${escapeHtml(signal.cueWords)}</p>
      </section>
      <section class="detail-block">
        <h4>Reference</h4>
        <p>${escapeHtml(signal.reference)}</p>
      </section>
    </div>
  `;
}

function renderRefPositions() {
  ui.refPositionGrid.innerHTML = refPositions
    .map((position) => {
      return `
        <article class="position-card" id="ref-${escapeHtml(position.id)}">
          <h3>${escapeHtml(position.name)}</h3>
          <p><strong>Coverage area:</strong> ${escapeHtml(position.area)}</p>
          <p><strong>Primary focus:</strong> ${escapeHtml(position.focus)}</p>
          ${renderListBlock("Core responsibilities", position.responsibilities)}
          ${renderListBlock("Key communication links", position.communication)}
        </article>
      `;
    })
    .join("");
}

function renderSimulationList() {
  if (!jamSimulations.length) {
    ui.simulationList.innerHTML = "<p>No simulation scenarios are currently loaded.</p>";
    ui.simulationDetail.innerHTML = "<h3>No simulation selected</h3>";
    return;
  }

  if (!jamSimulations.some((scenario) => scenario.id === state.selectedSimulationId)) {
    state.selectedSimulationId = jamSimulations[0].id;
  }

  ui.simulationList.innerHTML = jamSimulations
    .map((scenario) => {
      const decisionCount = getSimulationDecisionTotal(scenario);
      return `
        <button class="role-item ${scenario.id === state.selectedSimulationId ? "active" : ""}" data-sim-id="${escapeHtml(
          scenario.id
        )}">
          <div class="role-item-header">
            <strong>${escapeHtml(scenario.title)}</strong>
            <span class="group-badge">${decisionCount} decisions</span>
          </div>
          <span>${escapeHtml(scenario.focus)}</span>
        </button>
      `;
    })
    .join("");

  [...ui.simulationList.querySelectorAll(".role-item")].forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.simId !== state.selectedSimulationId) {
        state.selectedSimulationId = button.dataset.simId;
        resetSimulationRun();
      }
      renderSimulationList();
      renderSimulationDetail();
      revealMobileDetail("simulation");
    });
  });

  renderSimulationDetail();
}

function renderSimulationDetail() {
  const scenario = jamSimulations.find((entry) => entry.id === state.selectedSimulationId);
  if (!scenario) {
    ui.simulationDetail.innerHTML = "<h3>No simulation selected</h3><p>Select a scenario to begin.</p>";
    return;
  }

  if (!state.simulation.started) {
    ui.simulationDetail.innerHTML = `
      <p class="sim-kicker">Simulation Scenario</p>
      <h3>${escapeHtml(scenario.title)}</h3>
      <p>${escapeHtml(scenario.overview)}</p>
      <div class="detail-grid">
        ${renderListBlock("Training objectives", scenario.objectives)}
        ${renderListBlock("Rule references", scenario.references)}
      </div>
      <div class="sim-controls">
        <button id="startSimulationBtn" class="action-btn">Start Step-by-Step</button>
        <button id="startAutoSimulationBtn" class="ghost-btn">Auto-play Timeline</button>
      </div>
      ${renderSimulationTimeline(scenario)}
    `;

    const startBtn = document.getElementById("startSimulationBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        startSimulation(false);
      });
    }

    const startAutoBtn = document.getElementById("startAutoSimulationBtn");
    if (startAutoBtn) {
      startAutoBtn.addEventListener("click", () => {
        startSimulation(true);
      });
    }

    return;
  }

  if (state.simulation.complete) {
    renderSimulationResult(scenario);
    return;
  }

  const event = scenario.events[state.simulation.eventIndex];
  if (!event) {
    state.simulation.complete = true;
    renderSimulationResult(scenario);
    return;
  }

  const answered = state.simulation.answered[state.simulation.eventIndex];
  const decisionCount = getSimulationDecisionTotal(scenario);

  const eventBody =
    event.type === "decision"
      ? `
        <p><strong>${escapeHtml(event.question)}</strong></p>
        <div class="option-wrap sim-answer-row">
          ${event.options
            .map((option) => {
              let classes = "option-btn";
              if (answered) {
                if (option === event.answer) {
                  classes += " correct";
                } else if (option === answered.selected && !answered.correct) {
                  classes += " wrong";
                }
              }

              return `<button class="${classes}" data-sim-option="${escapeHtml(option)}" ${
                answered ? "disabled" : ""
              }>${escapeHtml(option)}</button>`;
            })
            .join("")}
        </div>
        ${
          answered
            ? `<section class="quiz-feedback"><strong>${
                answered.correct ? "Correct" : "Review"
              }:</strong> ${escapeHtml(event.explanation)}</section>`
            : ""
        }
      `
      : "";

  ui.simulationDetail.innerHTML = `
    <p class="sim-kicker">Simulation in progress</p>
    <h3>${escapeHtml(scenario.title)}</h3>
    <div class="sim-status-row">
      <span class="sim-chip">Event ${state.simulation.eventIndex + 1}/${scenario.events.length}</span>
      <span class="sim-chip">Decision score ${state.simulation.score}/${decisionCount}</span>
      <span class="sim-chip">${event.type === "decision" ? "Decision checkpoint" : "Timeline event"}</span>
    </div>
    <section class="sim-event-card">
      <h4>${escapeHtml(event.time)} - ${escapeHtml(event.title)}</h4>
      <p>${escapeHtml(event.narrative)}</p>
      ${eventBody}
    </section>
    <div class="sim-controls">
      <button id="playPauseSimulationBtn" class="ghost-btn">${
        state.simulation.playing ? "Pause Playback" : "Play Timeline"
      }</button>
      ${
        event.type === "decision" && answered
          ? '<button id="continueSimulationBtn" class="action-btn">Continue Timeline</button>'
          : event.type === "context"
          ? '<button id="nextSimulationEventBtn" class="action-btn">Next Event</button>'
          : ""
      }
    </div>
    ${renderSimulationTimeline(scenario)}
  `;

  [...ui.simulationDetail.querySelectorAll(".option-btn[data-sim-option]")].forEach((button) => {
    button.addEventListener("click", () => {
      answerSimulationDecision(button.dataset.simOption);
    });
  });

  const nextBtn = document.getElementById("nextSimulationEventBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      advanceSimulationEvent();
    });
  }

  const continueBtn = document.getElementById("continueSimulationBtn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      advanceSimulationEvent();
    });
  }

  const playPauseBtn = document.getElementById("playPauseSimulationBtn");
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (state.simulation.playing) {
        stopSimulationPlayback();
        renderSimulationDetail();
      } else {
        startSimulationPlayback();
      }
    });
  }
}

function renderSimulationTimeline(scenario) {
  return `
    <section class="sim-timeline">
      <h4>Timeline</h4>
      ${scenario.events
        .map((event, index) => {
          let itemClass = "sim-timeline-item";

          if (state.simulation.started) {
            if (state.simulation.complete || index < state.simulation.eventIndex) {
              itemClass += " completed";
            } else if (index === state.simulation.eventIndex) {
              itemClass += " active";
            }
          }

          return `<div class="${itemClass}">
            <strong>${escapeHtml(event.time)}</strong>
            <span class="sim-chip">${event.type === "decision" ? "Decision" : "Event"}</span>
            ${escapeHtml(event.title)}
          </div>`;
        })
        .join("")}
    </section>
  `;
}

function startSimulation(autoPlay) {
  resetSimulationRun();
  state.simulation.started = true;

  if (autoPlay) {
    startSimulationPlayback();
    return;
  }

  renderSimulationDetail();
}

function resetSimulationRun() {
  stopSimulationPlayback();
  state.simulation.started = false;
  state.simulation.complete = false;
  state.simulation.eventIndex = 0;
  state.simulation.score = 0;
  state.simulation.answered = {};
  state.simulation.missed = {};
}

function startSimulationPlayback() {
  if (!state.simulation.started) {
    state.simulation.started = true;
  }

  state.simulation.playing = true;
  queueSimulationTick();
  renderSimulationDetail();
}

function queueSimulationTick() {
  stopSimulationTimerOnly();

  if (!state.simulation.playing || state.simulation.complete) {
    return;
  }

  const scenario = jamSimulations.find((entry) => entry.id === state.selectedSimulationId);
  if (!scenario) {
    state.simulation.playing = false;
    return;
  }

  const event = scenario.events[state.simulation.eventIndex];
  if (!event) {
    state.simulation.complete = true;
    state.simulation.playing = false;
    renderSimulationDetail();
    return;
  }

  const answered = state.simulation.answered[state.simulation.eventIndex];
  if (event.type === "decision" && !answered) {
    state.simulation.playing = false;
    renderSimulationDetail();
    return;
  }

  state.simulation.timeoutId = setTimeout(() => {
    advanceSimulationEvent(false);
    if (state.simulation.playing) {
      queueSimulationTick();
    }
    renderSimulationDetail();
  }, 1700);
}

function stopSimulationTimerOnly() {
  if (state.simulation.timeoutId) {
    clearTimeout(state.simulation.timeoutId);
    state.simulation.timeoutId = null;
  }
}

function stopSimulationPlayback() {
  stopSimulationTimerOnly();
  state.simulation.playing = false;
}

function advanceSimulationEvent(render = true) {
  const scenario = jamSimulations.find((entry) => entry.id === state.selectedSimulationId);
  if (!scenario) {
    return;
  }

  const current = scenario.events[state.simulation.eventIndex];
  if (current && current.type === "decision" && !state.simulation.answered[state.simulation.eventIndex]) {
    stopSimulationPlayback();
    if (render) {
      renderSimulationDetail();
    }
    return;
  }

  if (state.simulation.eventIndex >= scenario.events.length - 1) {
    state.simulation.complete = true;
    state.simulation.playing = false;
  } else {
    state.simulation.eventIndex += 1;
  }

  if (render) {
    renderSimulationDetail();
  }
}

function answerSimulationDecision(option) {
  const scenario = jamSimulations.find((entry) => entry.id === state.selectedSimulationId);
  if (!scenario) {
    return;
  }

  const event = scenario.events[state.simulation.eventIndex];
  if (!event || event.type !== "decision") {
    return;
  }

  if (state.simulation.answered[state.simulation.eventIndex]) {
    return;
  }

  const isCorrect = option === event.answer;
  state.simulation.answered[state.simulation.eventIndex] = {
    selected: option,
    correct: isCorrect
  };

  if (isCorrect) {
    state.simulation.score += 1;
  } else {
    addSimulationMissed(event.review, event.title);
  }

  stopSimulationPlayback();
  renderSimulationDetail();
}

function addSimulationMissed(review, fallbackLabel) {
  const label = review ? review.label : fallbackLabel;
  const key = review ? `${review.tab}:${review.id}` : fallbackLabel;

  if (!state.simulation.missed[key]) {
    state.simulation.missed[key] = {
      count: 0,
      label,
      review
    };
  }

  state.simulation.missed[key].count += 1;
}

function renderSimulationResult(scenario) {
  const totalDecisions = getSimulationDecisionTotal(scenario);
  const percent = totalDecisions ? Math.round((state.simulation.score / totalDecisions) * 100) : 0;
  const missedTopics = Object.values(state.simulation.missed).sort((a, b) => b.count - a.count);

  const resultFeedback =
    percent >= 85
      ? "Strong decision quality in this jam scenario."
      : percent >= 65
      ? "Good run. Review the missed checkpoints before replaying."
      : "Replay this scenario and focus on the missed checkpoints.";

  const reviewSection = missedTopics.length
    ? `
      <section class="quiz-result">
        <h4>Missed Checkpoints</h4>
        <div class="review-grid">
          ${missedTopics
            .map((item) => {
              if (!item.review) {
                return `<div>${escapeHtml(item.label)} (${item.count})</div>`;
              }

              return `<button class="review-btn" data-review-tab="${escapeHtml(item.review.tab)}" data-review-id="${escapeHtml(
                item.review.id
              )}">${escapeHtml(item.label)} (${item.count})</button>`;
            })
            .join("")}
        </div>
      </section>
    `
    : `
      <section class="quiz-result">
        <h4>No missed checkpoints</h4>
        <p>Excellent simulation run. Try a different scenario for variety.</p>
      </section>
    `;

  ui.simulationDetail.innerHTML = `
    <p class="sim-kicker">Simulation complete</p>
    <h3>${escapeHtml(scenario.title)}</h3>
    <p class="sim-result-row">Score: <strong>${state.simulation.score}/${totalDecisions}</strong> (${percent}%)</p>
    <p>${escapeHtml(resultFeedback)}</p>
    <div class="sim-controls">
      <button id="restartSimulationBtn" class="action-btn">Run Scenario Again</button>
    </div>
    ${reviewSection}
    ${renderSimulationTimeline(scenario)}
  `;

  const restartBtn = document.getElementById("restartSimulationBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      startSimulation(false);
    });
  }

  [...ui.simulationDetail.querySelectorAll(".review-btn[data-review-tab]")].forEach((button) => {
    button.addEventListener("click", () => {
      jumpToReview({
        tab: button.dataset.reviewTab,
        id: button.dataset.reviewId,
        label: button.textContent
      });
    });
  });
}

function getSimulationDecisionTotal(scenario) {
  return scenario.events.filter((event) => event.type === "decision").length;
}

function renderSignalVisualBlock(signal) {
  const visual = getSignalVisual(signal);

  return `
    <section class="detail-block signal-visual-block">
      <h4>Signal Visual Guide</h4>
      <div class="signal-visual-wrap">${visual.html || visual.svg}</div>
      <p class="signal-visual-caption">${escapeHtml(visual.caption)}</p>
      <p class="signal-visual-note">${escapeHtml(visual.note || "Training visual guide.")}</p>
    </section>
  `;
}

function getSignalVisual(signal) {
  const officialImagePath = SIGNAL_OFFICIAL_IMAGE_MAP[signal.id];
  if (officialImagePath) {
    return {
      html: `<img src="${escapeHtml(officialImagePath)}" alt="${escapeHtml(signal.name)} hand signal from WFTDA penalty quick reference guide" loading="lazy" />`,
      caption: `${signal.name}: official penalty quick reference hand signal`,
      note: "Source: WFTDA Penalty Quick Reference Guide (March 2019)."
    };
  }

  const penaltyCode = SIGNAL_PENALTY_CODES[signal.id];
  if (penaltyCode) {
    return {
      html: buildSignalReferenceCard(signal, `Penalty code: ${penaltyCode}`),
      caption: `${signal.name}: text reference`,
      note: "Official image not loaded in this course package; showing text reference to avoid inaccurate drawings."
    };
  }

  return {
    html: buildSignalReferenceCard(signal),
    caption: `${signal.name}: text reference`,
    note: "Official image not loaded in this course package; showing text reference to avoid inaccurate drawings."
  };
}

function buildSignalReferenceCard(signal, badge = "") {
  return `
    <div class="signal-fallback-card" role="img" aria-label="${escapeHtml(signal.name)} reference card">
      <p class="signal-fallback-title">${escapeHtml(signal.name)}</p>
      ${badge ? `<p class="signal-fallback-badge">${escapeHtml(badge)}</p>` : ""}
      <p class="signal-fallback-line"><strong>Meaning:</strong> ${escapeHtml(signal.meaning)}</p>
      <p class="signal-fallback-line"><strong>Cue:</strong> ${escapeHtml(signal.cueWords)}</p>
    </div>
  `;
}

function buildPenaltySignalSvg(signalId, code) {
  let accent = "";

  switch (signalId) {
    case "back-block":
      accent =
        '<path d="M95 78 C112 69 126 74 131 84" stroke="#ef4444" stroke-width="4" fill="none" />';
      break;
    case "high-block":
      accent = '<circle cx="98" cy="30" r="15" stroke="#ef4444" stroke-width="4" fill="none" />';
      break;
    case "low-block":
      accent = '<rect x="81" y="95" width="34" height="10" rx="5" fill="#ef4444" opacity="0.8" />';
      break;
    case "forearm":
      accent = '<line x1="68" y1="66" x2="46" y2="56" stroke="#ef4444" stroke-width="6" />';
      break;
    case "head-block":
      accent =
        '<path d="M120 30 L144 30 L138 24 M144 30 L138 36" stroke="#ef4444" stroke-width="3" fill="none" />';
      break;
    case "leg-block":
      accent = '<line x1="109" y1="92" x2="131" y2="99" stroke="#ef4444" stroke-width="6" />';
      break;
    case "multiplayer":
      accent = `
        <circle cx="145" cy="39" r="9" fill="#f8fafc" stroke="#334155" stroke-width="2" />
        <line x1="145" y1="48" x2="145" y2="80" stroke="#334155" stroke-width="3" />
        <line x1="145" y1="58" x2="123" y2="66" stroke="#334155" stroke-width="3" />
      `;
      break;
    case "direction":
      accent =
        '<path d="M136 80 A16 16 0 1 1 136 79" stroke="#ef4444" stroke-width="3" fill="none" /><path d="M136 64 L149 66 L143 53" fill="none" stroke="#ef4444" stroke-width="3" />';
      break;
    case "cut":
      accent =
        '<path d="M132 89 L160 58 L160 76" stroke="#ef4444" stroke-width="4" fill="none" /><line x1="132" y1="89" x2="150" y2="89" stroke="#ef4444" stroke-width="4" />';
      break;
    case "illegal-position":
      accent =
        '<rect x="130" y="78" width="34" height="26" rx="5" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="5 3" />';
      break;
    default:
      accent = '<circle cx="145" cy="78" r="12" fill="#ef4444" opacity="0.7" />';
      break;
  }

  return signalFigureSvg({
    leftArm: [70, 67],
    rightArm: [98, 20],
    badgeText: code,
    badgeColor: "#b91c1c",
    accent,
    footer: "Penalty Signal"
  });
}

function buildBoxSignalSvg(keyword, subtitle) {
  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(keyword)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      <rect x="20" y="82" width="72" height="34" rx="6" fill="#e2e8f0" stroke="#64748b" />
      <circle cx="56" cy="56" r="9" fill="#f8fafc" stroke="#334155" stroke-width="2" />
      <line x1="56" y1="65" x2="56" y2="86" stroke="#334155" stroke-width="3" />
      <line x1="56" y1="74" x2="40" y2="84" stroke="#334155" stroke-width="3" />
      <line x1="56" y1="74" x2="73" y2="84" stroke="#334155" stroke-width="3" />
      <rect x="128" y="20" width="78" height="34" rx="17" fill="#0f766e" />
      <text x="167" y="42" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">${escapeHtml(
        keyword
      )}</text>
      <text x="110" y="118" text-anchor="middle" font-size="11" fill="#334155">Penalty Box</text>
      <text x="167" y="67" text-anchor="middle" font-size="11" fill="#334155">${escapeHtml(
        subtitle
      )}</text>
    </svg>
  `;
}

function buildJammerSignalSvg(kind) {
  let badge = "J";
  let accent = "";
  let footer = "Jammer Signal";

  if (kind === "lead") {
    badge = "LEAD";
    accent =
      '<polygon points="153,36 158,48 171,49 161,57 164,70 153,63 142,70 145,57 135,49 148,48" fill="#f59e0b" /><path d="M126 62 L157 62 L149 55 M157 62 L149 69" stroke="#0f766e" stroke-width="3" fill="none" />';
  } else if (kind === "not-lead") {
    badge = "NO";
    accent =
      '<polygon points="153,36 158,48 171,49 161,57 164,70 153,63 142,70 145,57 135,49 148,48" fill="#f59e0b" /><line x1="140" y1="40" x2="166" y2="66" stroke="#dc2626" stroke-width="4" /><line x1="166" y1="40" x2="140" y2="66" stroke="#dc2626" stroke-width="4" />';
  } else if (kind === "star-pass-complete") {
    badge = "PASS";
    accent =
      '<polygon points="133,42 136,50 145,50 138,56 141,64 133,59 125,64 128,56 121,50 130,50" fill="#f59e0b" /><polygon points="172,42 175,50 184,50 177,56 180,64 172,59 164,64 167,56 160,50 169,50" fill="#f59e0b" /><path d="M145 53 L160 53 L154 47 M160 53 L154 59" stroke="#0f766e" stroke-width="3" fill="none" />';
  } else if (kind === "no-earned-pass") {
    badge = "NEP";
    accent =
      '<circle cx="154" cy="53" r="16" fill="none" stroke="#0f766e" stroke-width="3" /><line x1="142" y1="41" x2="166" y2="65" stroke="#dc2626" stroke-width="4" />';
  } else if (kind === "show-star") {
    badge = "STAR";
    accent =
      '<polygon points="153,36 158,48 171,49 161,57 164,70 153,63 142,70 145,57 135,49 148,48" fill="#f59e0b" /><path d="M134 82 L172 82" stroke="#0f766e" stroke-width="3" /><path d="M172 82 L165 76 M172 82 L165 88" stroke="#0f766e" stroke-width="3" />';
  }

  return signalFigureSvg({
    leftArm: [72, 60],
    rightArm: [122, 52],
    badgeText: badge,
    badgeColor: "#0f766e",
    accent,
    footer
  });
}

function buildPackSignalSvg(kind) {
  let accent = "";
  let badge = "PACK";
  let footer = "Pack / Position Signal";

  if (kind === "no-pack") {
    badge = "NO";
    accent = `
      <circle cx="52" cy="76" r="9" fill="#94a3b8" />
      <circle cx="72" cy="76" r="9" fill="#94a3b8" />
      <circle cx="146" cy="76" r="9" fill="#94a3b8" />
      <circle cx="166" cy="76" r="9" fill="#94a3b8" />
      <line x1="88" y1="76" x2="130" y2="76" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 4" />
    `;
  } else if (kind === "out-of-play") {
    badge = "OOP";
    accent = `
      <rect x="42" y="67" width="82" height="24" rx="12" fill="none" stroke="#0f766e" stroke-width="3" />
      <circle cx="58" cy="79" r="8" fill="#94a3b8" />
      <circle cx="78" cy="79" r="8" fill="#94a3b8" />
      <circle cx="98" cy="79" r="8" fill="#94a3b8" />
      <circle cx="162" cy="58" r="8" fill="#ef4444" />
      <path d="M132 70 L156 62" stroke="#dc2626" stroke-width="3" />
    `;
  } else if (kind === "pack-is-here") {
    badge = "HERE";
    accent = `
      <rect x="54" y="70" width="112" height="24" rx="12" fill="#dcfce7" stroke="#0f766e" stroke-width="2" />
      <circle cx="78" cy="82" r="8" fill="#64748b" />
      <circle cx="100" cy="82" r="8" fill="#64748b" />
      <circle cx="122" cy="82" r="8" fill="#64748b" />
      <circle cx="144" cy="82" r="8" fill="#64748b" />
      <path d="M110 40 L110 64 M110 64 L102 56 M110 64 L118 56" stroke="#0f766e" stroke-width="3" fill="none" />
    `;
  } else if (kind === "false-start") {
    badge = "FS";
    accent = `
      <line x1="40" y1="86" x2="180" y2="86" stroke="#64748b" stroke-width="3" />
      <line x1="88" y1="70" x2="88" y2="102" stroke="#dc2626" stroke-width="4" />
      <circle cx="102" cy="70" r="8" fill="#ef4444" />
      <text x="118" y="64" font-size="18" fill="#dc2626" font-weight="700">!</text>
    `;
  }

  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(kind)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      ${accent}
      <rect x="148" y="14" width="58" height="28" rx="14" fill="#0f766e" />
      <text x="177" y="33" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">${escapeHtml(
        badge
      )}</text>
      <text x="110" y="124" text-anchor="middle" font-size="11" fill="#334155">${escapeHtml(
        footer
      )}</text>
    </svg>
  `;
}

function buildTimingSignalSvg(kind) {
  let badge = "TIME";
  let subtitle = "Timing Signal";
  let glyph = "";

  if (kind === "time-stopped") {
    badge = "STOP";
    glyph =
      '<circle cx="82" cy="72" r="28" fill="none" stroke="#334155" stroke-width="4" /><line x1="74" y1="58" x2="74" y2="86" stroke="#dc2626" stroke-width="6" /><line x1="90" y1="58" x2="90" y2="86" stroke="#dc2626" stroke-width="6" />';
  } else if (kind === "five-seconds") {
    badge = "5";
    glyph =
      '<circle cx="82" cy="72" r="28" fill="none" stroke="#334155" stroke-width="4" /><text x="82" y="80" text-anchor="middle" font-size="28" font-weight="700" fill="#0f766e">5</text>';
  } else if (kind === "team-timeout") {
    badge = "TTO";
    glyph =
      '<circle cx="82" cy="72" r="28" fill="none" stroke="#334155" stroke-width="4" /><text x="82" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="#0f766e">T</text>';
  } else if (kind === "official-timeout") {
    badge = "OTO";
    glyph =
      '<circle cx="82" cy="72" r="28" fill="none" stroke="#334155" stroke-width="4" /><text x="82" y="80" text-anchor="middle" font-size="18" font-weight="700" fill="#dc2626">O</text>';
  } else if (kind === "official-review") {
    badge = "REV";
    glyph =
      '<circle cx="74" cy="66" r="18" fill="none" stroke="#334155" stroke-width="4" /><line x1="87" y1="79" x2="102" y2="94" stroke="#334155" stroke-width="4" /><text x="118" y="70" font-size="20" font-weight="700" fill="#0f766e">R</text>';
  } else if (kind === "jam-start") {
    badge = "START";
    subtitle = "Jam Start";
    glyph =
      '<polygon points="66,52 66,92 101,72" fill="#0f766e" /><path d="M122 48 L148 40 L144 64 L122 70 Z" fill="#94a3b8" stroke="#334155" stroke-width="2" />';
  } else if (kind === "jam-ending") {
    badge = "END";
    subtitle = "Jam Ending";
    glyph =
      '<rect x="64" y="54" width="36" height="36" rx="6" fill="#dc2626" /><path d="M122 48 L148 40 L144 64 L122 70 Z" fill="#94a3b8" stroke="#334155" stroke-width="2" />';
  }

  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(kind)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      ${glyph}
      <rect x="146" y="14" width="62" height="28" rx="14" fill="#0f766e" />
      <text x="177" y="33" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">${escapeHtml(
        badge
      )}</text>
      <text x="110" y="124" text-anchor="middle" font-size="11" fill="#334155">${escapeHtml(
        subtitle
      )}</text>
    </svg>
  `;
}

function buildMovementSignalSvg(kind) {
  const goBench = kind === "go-to-bench";
  const badge = goBench ? "BENCH" : "TRACK";
  const directionArrow = goBench
    ? '<path d="M84 72 L144 72 L136 64 M144 72 L136 80" stroke="#0f766e" stroke-width="4" fill="none" />'
    : '<path d="M144 72 L84 72 L92 64 M84 72 L92 80" stroke="#0f766e" stroke-width="4" fill="none" />';
  const destination = goBench
    ? '<rect x="150" y="56" width="42" height="30" rx="4" fill="#e2e8f0" stroke="#475569" /><text x="171" y="75" text-anchor="middle" font-size="10" fill="#334155">Bench</text>'
    : '<ellipse cx="170" cy="71" rx="23" ry="12" fill="#dcfce7" stroke="#0f766e" stroke-width="2" /><text x="170" y="75" text-anchor="middle" font-size="10" fill="#0f766e">Track</text>';

  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(kind)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      <circle cx="50" cy="57" r="9" fill="#f8fafc" stroke="#334155" stroke-width="2" />
      <line x1="50" y1="66" x2="50" y2="94" stroke="#334155" stroke-width="3" />
      <line x1="50" y1="76" x2="67" y2="82" stroke="#334155" stroke-width="3" />
      <line x1="50" y1="76" x2="34" y2="82" stroke="#334155" stroke-width="3" />
      ${directionArrow}
      ${destination}
      <rect x="136" y="14" width="72" height="28" rx="14" fill="#0f766e" />
      <text x="172" y="33" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">${escapeHtml(
        badge
      )}</text>
    </svg>
  `;
}

function buildGenericSignalSvg(label) {
  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(label)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      <circle cx="60" cy="58" r="10" fill="#f8fafc" stroke="#334155" stroke-width="2" />
      <line x1="60" y1="68" x2="60" y2="96" stroke="#334155" stroke-width="3" />
      <line x1="60" y1="76" x2="82" y2="66" stroke="#334155" stroke-width="3" />
      <line x1="60" y1="76" x2="38" y2="66" stroke="#334155" stroke-width="3" />
      <rect x="100" y="52" width="102" height="34" rx="17" fill="#0f766e" />
      <text x="151" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">${escapeHtml(
        label
      )}</text>
    </svg>
  `;
}

function signalFigureSvg({ leftArm, rightArm, badgeText, badgeColor, accent, footer }) {
  return `
    <svg viewBox="0 0 220 140" role="img" aria-label="${escapeHtml(badgeText)} signal visual">
      <rect x="1" y="1" width="218" height="138" rx="12" fill="#f8fafc" stroke="#dbeafe" />
      <circle cx="98" cy="30" r="12" fill="#f8fafc" stroke="#334155" stroke-width="2" />
      <line x1="98" y1="42" x2="98" y2="84" stroke="#334155" stroke-width="3" />
      <line x1="98" y1="84" x2="82" y2="112" stroke="#334155" stroke-width="3" />
      <line x1="98" y1="84" x2="114" y2="112" stroke="#334155" stroke-width="3" />
      <line x1="98" y1="60" x2="${leftArm[0]}" y2="${leftArm[1]}" stroke="#334155" stroke-width="3" />
      <line x1="98" y1="60" x2="${rightArm[0]}" y2="${rightArm[1]}" stroke="#334155" stroke-width="3" />
      ${accent}
      <rect x="154" y="14" width="54" height="28" rx="14" fill="${badgeColor}" />
      <text x="181" y="33" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">${escapeHtml(
        badgeText
      )}</text>
      <text x="110" y="124" text-anchor="middle" font-size="11" fill="#334155">${escapeHtml(footer)}</text>
    </svg>
  `;
}

function startDrill(mode, target = null) {
  const byMode =
    mode === "mixed"
      ? drillQuestions
      : drillQuestions.filter(
          (question) => question.mode === mode || (!target && question.mode === "mixed")
        );

  const eligible = target
    ? byMode.filter(
        (question) =>
          question.review && question.review.tab === target.tab && question.review.id === target.id
      )
    : byMode;

  const maxQuestions = target ? TARGETED_DRILL_QUESTION_COUNT : GENERAL_DRILL_QUESTION_COUNT;

  state.quiz.mode = mode;
  state.quiz.target = target;
  state.quiz.questions = shuffle([...eligible]).slice(0, Math.min(maxQuestions, eligible.length));
  state.quiz.index = 0;
  state.quiz.score = 0;
  state.quiz.missed = {};

  if (!state.quiz.questions.length) {
    const targetLabel = target ? ` for ${target.label}` : "";
    ui.quizCard.innerHTML = `
      <h3>${escapeHtml(drillModeLabel(mode, target))}</h3>
      <p>No drill questions are available${escapeHtml(targetLabel)} yet.</p>
      <p>Pick another drill mode or return to study modules.</p>
    `;
    return;
  }

  renderDrillQuestion();
}

function renderDrillQuestion() {
  const question = state.quiz.questions[state.quiz.index];

  if (!question) {
    renderDrillResult();
    return;
  }

  ui.quizCard.innerHTML = `
    <h3>${escapeHtml(drillModeLabel(state.quiz.mode, state.quiz.target))}</h3>
    <p class="quiz-progress">Question ${state.quiz.index + 1} of ${state.quiz.questions.length}</p>
    <p><strong>${escapeHtml(question.prompt)}</strong></p>
    <div class="option-wrap">
      ${question.options
        .map(
          (option) =>
            `<button class="option-btn" data-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`
        )
        .join("")}
    </div>
  `;

  [...ui.quizCard.querySelectorAll(".option-btn")].forEach((button) => {
    button.addEventListener("click", () => {
      gradeDrillOption(button, question);
    });
  });
}

function gradeDrillOption(button, question) {
  const optionButtons = [...ui.quizCard.querySelectorAll(".option-btn")];
  optionButtons.forEach((item) => {
    item.disabled = true;
  });

  const isCorrect = button.dataset.option === question.answer;

  if (isCorrect) {
    button.classList.add("correct");
    state.quiz.score += 1;
  } else {
    button.classList.add("wrong");

    const correctButton = optionButtons.find((item) => item.dataset.option === question.answer);
    if (correctButton) {
      correctButton.classList.add("correct");
    }

    addMissedTopic(question.review, question.prompt);
  }

  const feedbackBlock = document.createElement("section");
  feedbackBlock.className = "quiz-feedback";
  feedbackBlock.innerHTML = `<strong>${isCorrect ? "Correct" : "Review"}:</strong> ${escapeHtml(
    question.explanation
  )}`;
  ui.quizCard.appendChild(feedbackBlock);

  if (question.review) {
    const reviewBtn = document.createElement("button");
    reviewBtn.className = "review-btn";
    reviewBtn.textContent = `Review topic: ${question.review.label}`;
    reviewBtn.style.marginTop = "0.6rem";
    reviewBtn.addEventListener("click", () => {
      jumpToReview(question.review);
    });
    ui.quizCard.appendChild(reviewBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = "action-btn";
  nextBtn.textContent =
    state.quiz.index === state.quiz.questions.length - 1 ? "Finish Drill" : "Next Question";
  nextBtn.style.marginTop = "0.75rem";
  nextBtn.addEventListener("click", () => {
    state.quiz.index += 1;
    renderDrillQuestion();
  });
  ui.quizCard.appendChild(nextBtn);
}

function addMissedTopic(review, fallbackLabel) {
  const label = review ? review.label : fallbackLabel;
  const key = review ? `${review.tab}:${review.id}` : `prompt:${fallbackLabel}`;

  if (!state.quiz.missed[key]) {
    state.quiz.missed[key] = {
      count: 0,
      label,
      review
    };
  }

  state.quiz.missed[key].count += 1;
}

function renderDrillResult() {
  const total = state.quiz.questions.length;
  const percent = total ? Math.round((state.quiz.score / total) * 100) : 0;
  const storedBest = Number(localStorage.getItem(STORAGE_KEYS.bestDrill) || "0");
  const newBest = Math.max(storedBest, percent);

  localStorage.setItem(STORAGE_KEYS.bestDrill, String(newBest));
  updateSummary();

  const feedback =
    percent >= 85
      ? "Strong training readiness across modules."
      : percent >= 65
      ? "Solid base. Keep drilling weak areas below."
      : "Keep studying and repeat focused drills before mixed mode.";

  const missedTopics = Object.values(state.quiz.missed).sort((a, b) => b.count - a.count);

  const reviewSection = missedTopics.length
    ? `
      <section class="quiz-result">
        <h4>Priority Review Topics</h4>
        <div class="review-grid">
          ${missedTopics
            .map((item) => {
              if (!item.review) {
                return `<div>${escapeHtml(item.label)} (${item.count})</div>`;
              }

              return `<button class="review-btn" data-review-tab="${escapeHtml(item.review.tab)}" data-review-id="${escapeHtml(
                item.review.id
              )}">${escapeHtml(item.label)} (${item.count})</button>`;
            })
            .join("")}
        </div>
      </section>
    `
    : `
      <section class="quiz-result">
        <h4>No missed topics this round</h4>
        <p>Excellent. Move to mixed drills or refresh less-practiced modules.</p>
      </section>
    `;

  ui.quizCard.innerHTML = `
    <h3>${escapeHtml(drillModeLabel(state.quiz.mode, state.quiz.target))} Complete</h3>
    <p>You scored <strong>${state.quiz.score}/${total}</strong> (${percent}%).</p>
    <p>${escapeHtml(feedback)}</p>
    <button id="retryDrillBtn" class="action-btn">Run Again</button>
    ${reviewSection}
  `;

  const retryBtn = document.getElementById("retryDrillBtn");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      startDrill(state.quiz.mode || "mixed", state.quiz.target);
    });
  }

  [...ui.quizCard.querySelectorAll(".review-btn[data-review-tab]")].forEach((button) => {
    button.addEventListener("click", () => {
      jumpToReview({
        tab: button.dataset.reviewTab,
        id: button.dataset.reviewId,
        label: button.textContent
      });
    });
  });
}

function jumpToReview(review) {
  if (!review) {
    return;
  }

  setActiveTab(review.tab);

  if (review.tab === "nso") {
    state.selectedRoleId = review.id;
    renderRoleList();
    revealMobileDetail("nso");
    return;
  }

  if (review.tab === "rules") {
    state.selectedRuleId = review.id;
    renderRuleList();
    revealMobileDetail("rules");
    return;
  }

  if (review.tab === "signals") {
    state.selectedSignalId = review.id;
    renderSignalList();
    revealMobileDetail("signals");
    return;
  }

  if (review.tab === "refs") {
    const card = document.getElementById(`ref-${review.id}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function drillModeLabel(mode, target = null) {
  const base =
    mode === "nso"
      ? "NSO Drill"
      : mode === "rules"
      ? "Rules Drill"
      : mode === "signals"
      ? "Signals Drill"
      : "Mixed Drill";

  if (target && target.label) {
    return `${base}: ${target.label}`;
  }

  switch (mode) {
    case "nso":
      return "NSO Drill";
    case "rules":
      return "Rules Drill";
    case "signals":
      return "Signals Drill";
    case "mixed":
    default:
      return "Mixed Drill";
  }
}

function renderListBlock(title, items) {
  const rows = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `
    <section class="detail-block">
      <h4>${escapeHtml(title)}</h4>
      <ul>${rows}</ul>
    </section>
  `;
}

function renderRuleVisualBlock(module) {
  if (module.id === "contact-penalties") {
    return `
      <section class="detail-block rule-visual-block">
        <h4>Zones Visual Guide</h4>
        <p>Use this chart for legal target zones and legal blocking zones during contact decisions.</p>
        <figure class="zone-figure">
          <img
            src="assets/zones/target_blocking_zones_combined.png"
            alt="Combined roller derby zones chart showing legal target zones on the left and legal blocking zones on the right across front, back, and side body views."
            loading="lazy"
          />
          <figcaption>Target Zones and Blocking Zones</figcaption>
        </figure>
        <div class="zones-grid">
          <figure class="zone-figure">
            <img
              src="assets/zones/target_zones.png"
              alt="Roller derby legal target zones diagram."
              loading="lazy"
            />
            <figcaption>Legal Target Zones</figcaption>
          </figure>
          <figure class="zone-figure">
            <img
              src="assets/zones/blocking_zones.png"
              alt="Roller derby legal blocking zones diagram."
              loading="lazy"
            />
            <figcaption>Legal Blocking Zones</figcaption>
          </figure>
        </div>
        <p class="zone-source">Source: WFTDA Rules figures 4.1 and 4.2.</p>
      </section>
    `;
  }

  if (module.id === "pack-engagement") {
    return `
      <section class="detail-block rule-visual-block">
        <h4>Track Layout and Positioning Guide</h4>
        <p>Use this map to orient where pack action, officials, and penalty operations sit around the track.</p>
        <figure class="track-figure">
          <img
            src="assets/track/track-diagram-v3b.gif"
            alt="Roller derby flat track layout labeled with turns one through four, jammer and pivot lines, penalty box location, and common referee and NSO positions."
            loading="lazy"
          />
          <figcaption>Track layout with key lines, turns, and officiating positions.</figcaption>
        </figure>
        <ul class="track-callouts">
          <li>Jammer line and pivot line anchor legal jam-start positioning.</li>
          <li>Jammer refs track each jammer while pack refs split inside and outside pack coverage.</li>
          <li>Penalty box staff operate off-track near Turn 1 for entries, seating, and legal release cues.</li>
        </ul>
        <p class="zone-source">Source: Marc "F-Stop" Perkins, Inside Pack Ref (2015).</p>
      </section>
    `;
  }

  return "";
}

function updateSummary() {
  ui.roleProgress.textContent = `${state.learnedRoles.size}/${nsoRoles.length}`;
  ui.ruleProgress.textContent = `${state.learnedRules.size}/${ruleModules.length}`;

  const best = Number(localStorage.getItem(STORAGE_KEYS.bestDrill) || "0");
  ui.bestDrill.textContent = `${best}%`;
}

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return new Set();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set();
    }

    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveSet(key, valueSet) {
  localStorage.setItem(key, JSON.stringify([...valueSet]));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

init();
