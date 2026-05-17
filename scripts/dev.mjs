import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { handler } from "../netlify/functions/contact.mjs";

for (const file of [".env", ".env.local"]) {
  if (!existsSync(file)) continue;

  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!(key in process.env)) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}

const apiPort = Number(process.env.CONTACT_API_PORT || 8888);
const vitePort = Number(process.env.VITE_PORT || 3000);

const apiServer = createServer(async (request, response) => {
  if (request.url !== "/api/contact") {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  let body = "";
  request.setEncoding("utf8");

  request.on("data", (chunk) => {
    body += chunk;
  });

  request.on("end", async () => {
    try {
      const result = await handler({
        httpMethod: request.method,
        headers: request.headers,
        body,
      });

      response.writeHead(result.statusCode, result.headers);
      response.end(result.body);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify({
          error: "Contact backend failed unexpectedly.",
        })
      );
    }
  });
});

apiServer.listen(apiPort, "127.0.0.1", () => {
  console.log(`Contact API ready at http://127.0.0.1:${apiPort}/api/contact`);
});

const vite = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "dev:vite", "--", "--host", "0.0.0.0", "--port", String(vitePort)],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: "inherit",
  }
);

const shutdown = () => {
  apiServer.close();
  vite.kill("SIGTERM");
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

vite.on("exit", (code) => {
  apiServer.close(() => {
    process.exit(code ?? 0);
  });
});
