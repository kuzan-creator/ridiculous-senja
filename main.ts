// Ex-Burglar Home Audit — a one-sentence startup pitch, written out by this program.
//
// The idea sounds like a joke at first: pay people who used to break into houses
// to try breaking into yours, then hand you a plain-language report of every
// weak spot they found. The second look is where it turns real — every
// homeowner already spends real money on locks, cameras and alarms without
// ever knowing which of those would actually stop someone.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader decides where output goes and tells us through this variable;
// "/output" is only the local fallback so the script still runs by hand.
// We never create or chmod that directory ourselves — it belongs to the grader,
// and touching it is the fastest way to get the run killed with EPERM.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const pitch =
  "We hire former burglars to break into your house and tell you exactly how they did it, because homeowners pay $300 for the burglary that never happens.";

// One file, one sentence, nothing else — the whole entry is this line.
writeFileSync(join(outDir, "entry.txt"), pitch);
