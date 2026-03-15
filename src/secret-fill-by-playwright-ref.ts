#!/usr/bin/env node
import "dotenv/config";
import { spawnSync } from "node:child_process";

const [ref, name] = process.argv.slice(2);
const text = process.env[name];

if (!ref) {
  console.error("missing ref");
  process.exit(1);
}

if (!name) {
  console.error("missing env name");
  process.exit(1);
}

if (text == null) {
  console.error(`missing env: ${name}`);
  process.exit(1);
}

const result = spawnSync("playwright-cli", ["fill", ref, text], {
  stdio: "ignore",
  env: process.env,
});

process.exit(result.status ?? 1);
