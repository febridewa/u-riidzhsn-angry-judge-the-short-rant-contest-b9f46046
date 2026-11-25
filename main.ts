// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, funny rant about an everyday annoyance to
// /output/entry.txt, deterministically: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "The self-checkout screamed 'unexpected item in the bagging area' at a banana. A banana. I scanned it, bagged it, apologised to it, and still had to stand there while a human walked over to confirm that yes, this is a banana, and yes, I am allowed to own it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
