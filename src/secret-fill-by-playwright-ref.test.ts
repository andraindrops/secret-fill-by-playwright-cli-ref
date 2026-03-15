import { spawnSync } from "node:child_process";
import { describe, expect, it } from "vitest";

const run = (args: string[], env: Record<string, string> = {}) => {
  const result = spawnSync(
    "tsx",
    ["src/secret-fill-by-playwright-ref.ts", ...args],
    {
      env: { ...process.env, ...env },
      encoding: "utf-8",
    },
  );
  return {
    status: result.status,
    stderr: result.stderr,
  };
};

describe("secret-fill-by-playwright-cli-ref", () => {
  it("exits with error when ref is missing", () => {
    const { status, stderr } = run([]);
    expect(status).toBe(1);
    expect(stderr).toContain("missing ref");
  });

  it("exits with error when env name is missing", () => {
    const { status, stderr } = run(["#input"]);
    expect(status).toBe(1);
    expect(stderr).toContain("missing env name");
  });

  it("exits with error when env variable is not set", () => {
    const { status, stderr } = run(["#input", "NONEXISTENT_VAR_12345"]);
    expect(status).toBe(1);
    expect(stderr).toContain("missing env: NONEXISTENT_VAR_12345");
  });
});
