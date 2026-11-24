// "Ex-Burglar Home Audit" — chosen by duelling 10 candidate pitches on the brief (bizarre at first glance, real at second: ex-burglars as security auditors, homeowners pay $300); runner-up was retired teachers marking dating profiles.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it.
const text =
  "We hire former burglars to break into your house and tell you exactly how they did it, because homeowners pay $300 for the burglary that never happens.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
