import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-lintignore"],
  // entry: ["src/**/*.d.ts"],
  ignoreDependencies: ["@commitlint/cli"],
};

export default config;
