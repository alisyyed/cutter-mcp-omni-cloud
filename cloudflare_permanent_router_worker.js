/**
 * 555 Universal Cloud MCP Foundry v4.0 - Zero-Cache Edge-Smart Worker Router
 * Engine: cutter (rizinorg) Omni-Nexus (cutter)
 */
const GITHUB_API_LIVE_JSON_URL = "https://api.github.com/repos/alisyyed/cutter-mcp-omni-cloud/contents/LIVE_MCP_URL.json?ref=main";
const GITHUB_RAW_LIVE_JSON_URL = "https://raw.githubusercontent.com/alisyyed/cutter-mcp-omni-cloud/main/LIVE_MCP_URL.json";
const GITHUB_DISPATCH_URL = "https://api.github.com/repos/alisyyed/cutter-mcp-omni-cloud/actions/workflows/perpetual_relay.yml/dispatches";
const AUTO_WAKE_GH_TOKEN = "";
const EDGE_CURATED_TOOLS = [{"name": "orchestrate_sqlite_vault_to_cutter_r2_with_check2_smod0", "description": "[cutter (rizinorg) Omni-Nexus] Composite 3-Stage Pipeline: (1) sqlite_vault_read -> (2) cutter_r2_ghidra_lift -> (3) check2_smod0_guard with automatic SMod0 rollback.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_doctor_and_status", "description": "[cutter (rizinorg) Omni-Nexus] Verify rizinorg/cutter checkout, build targets, and Cloud VM health.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_execute_command", "description": "[cutter (rizinorg) Omni-Nexus] Execute cutter CLI or headless batch command with JSON output.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_inspect_scripts", "description": "[cutter (rizinorg) Omni-Nexus] List and execute modules inside `rizinorg/cutter/scripts` on the Cloud VM.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_inspect_src", "description": "[cutter (rizinorg) Omni-Nexus] List and execute modules inside `rizinorg/cutter/src` on the Cloud VM.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_cmake_targets_and_plugins", "description": "[cutter (rizinorg) Omni-Nexus] Inspect C++/CMake targets, plugins, and headers in cutter.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_obscura_live_docs_bridge", "description": "[cutter (rizinorg) Omni-Nexus] Scrape live documentation, issues, and releases for rizinorg/cutter via Obscura V8.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_smod0_verified_pipeline", "description": "[cutter (rizinorg) Omni-Nexus] Composite pipeline: run cutter analysis -> cross-map with 7-Engine Fleet -> enforce Check2 SMod0 guard.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "zero_dash_and_cliche_auditor", "description": "[cutter (rizinorg) Omni-Nexus] Enforce 0 em-dashes, 0 en-dashes, and screen against banned AI lexicon phrases with exact line offsets.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "ioctl_switch_table_decoder", "description": "[cutter (rizinorg) Omni-Nexus] Decode Windows/PS5 kernel driver IOCTL 32-bit control codes (DeviceType, Function, Method, Access).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "yara_signature_synthesizer", "description": "[cutter (rizinorg) Omni-Nexus] Generate high-precision YARA & FLIRT byte-pattern rules from hex opcodes or unique binary strings.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "memfd_ram_sandbox_exec", "description": "[cutter (rizinorg) Omni-Nexus] Execute compiled C/ELF payloads inside an anonymous Linux os.memfd_create RAM descriptor (/proc/self/fd).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "c_struct_layout_reconstructor", "description": "[cutter (rizinorg) Omni-Nexus] Reconstruct padded C/C++20 struct definitions and vtable offsets from raw decompiler field accesses.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "elf_pe_prx_header_triage", "description": "[cutter (rizinorg) Omni-Nexus] Inspect ELF/PE/PRX/SELF magic headers, sections, Shannon entropy, and security mitigations (NX/Canary/RELRO).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_v8_spa_snapshot", "description": "[cutter (rizinorg) Omni-Nexus] Render JavaScript SPA via Obscura 0.2.7 V8 engine and return full accessibility/DOM tree snapshot.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_multi_worker_burst", "description": "[cutter (rizinorg) Omni-Nexus] Parallel-scrape up to 25 URLs simultaneously via Obscura Rust worker pool with per-URL ms telemetry.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_rust_png_pdf_capture", "description": "[cutter (rizinorg) Omni-Nexus] Render webpage to PNG/PDF via Obscura zero-Chromium Rust paint engine (taffy + tiny-skia) with SHA-256 hash.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_form_and_api_sniffer", "description": "[cutter (rizinorg) Omni-Nexus] Auto-detect interactive DOM forms, hidden inputs, and XHR/fetch endpoints on any target URL.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_llms_txt_harvester", "description": "[cutter (rizinorg) Omni-Nexus] Locate and ingest /llms.txt, /sitemap.xml, and technical documentation indexes into clean Markdown.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "fts5_semantic_vault_search", "description": "[cutter (rizinorg) Omni-Nexus] Run full-text FTS5 BM25 ranked search across persistent SQLite knowledge and quote vaults.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "json_csv_schema_auto_ingestor", "description": "[cutter (rizinorg) Omni-Nexus] Infer SQLite table schema from raw JSON/CSV payloads and batch-upsert records with provenance.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "check2_smod_error_predictor", "description": "[cutter (rizinorg) Omni-Nexus] Run pre-flight error prediction across hierarchical SMod1-SMod9 and nested aSMod21/bSMod21/cSMod21 tiers.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "hexa_decompile_and_gcc_verify", "description": "[cutter (rizinorg) Omni-Nexus] Chain Radare2/Cutter triage -> Ghidra/IDA lift -> LLM4Decompile C99 refine -> GCC -O0..-O3 assert check.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "cutter_hexa_engine_bridge", "description": "[cutter (rizinorg) Omni-Nexus] Coordinate multi-engine tasks across Obscura, Radare2, Ghidra, IDA 9.5, LLM4Decompile, and Craft-Anything.", "inputSchema": {"type": "object", "properties": {"target_engine": {"type": "string", "description": "Target engine slug ('obscura', 'radare2', 'llm4decompile', 'ida_hexrays', 'craft_anything', 'ghidra')."}, "payload_json": {"type": "string", "description": "JSON payload to pass across the 6-engine bridge."}}}}];

async function triggerGithubAutoWake() {
  if (!AUTO_WAKE_GH_TOKEN) return false;
  try {
    const r = await fetch(GITHUB_DISPATCH_URL, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
        "Accept": "application/vnd.github+json",
        "User-Agent": "555-Universal-MCP-Worker/3.2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ref: "main" })
    });
    return r.status === 204 || r.status === 200;
  } catch (_) {
    return false;
  }
}

async function getLatestTunnelUrl() {
  if (AUTO_WAKE_GH_TOKEN) {
    try {
      const apiRes = await fetch(GITHUB_API_LIVE_JSON_URL + "&t=" + Date.now(), {
        headers: {
          "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
          "Accept": "application/vnd.github.raw+json",
          "User-Agent": "555-Universal-MCP-Worker/3.2",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
      if (apiRes.ok) {
        return await apiRes.json();
      }
    } catch (_) {}
  }
  const res = await fetch(GITHUB_RAW_LIVE_JSON_URL + "?t=" + Date.now(), {
    headers: { "User-Agent": "555-Universal-MCP-Worker/3.2" }
  });
  if (!res.ok) throw new Error("Could not fetch LIVE_MCP_URL.json: HTTP " + res.status);
  return await res.json();
}

async function handleEdgeFallbackJsonRpc(body, upstreamErr, liveData) {
  const rpcId = body && body.id !== undefined ? body.id : 1;
  const method = (body && body.method) || "";
  const params = (body && body.params) || {};

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        protocolVersion: "2025-03-26",
        capabilities: { tools: { listChanged: true } },
        serverInfo: { name: "cutter-OmniNexus", version: "3.2.0" }
      }
    };
  }

  if (method === "notifications/initialized" || method.startsWith("notifications/")) {
    return { jsonrpc: "2.0", id: rpcId, result: {} };
  }

  if (method === "tools/list") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: { tools: EDGE_CURATED_TOOLS }
    };
  }

  if (method === "tools/call") {
    const tName = params.name || "";
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: "EDGE_HYBRID_RESPONSE",
            engine: "cutter",
            title: "cutter (rizinorg) Omni-Nexus",
            tool_called: tName,
            arguments_received: params.arguments || {},
            obscura_first_bridge: "https://obscura-mcp-forever.forested-lung.workers.dev/mcp",
            live_relay_state: liveData || { status: "BOOTING_OR_WAKING", detail: String(upstreamErr || "Tunnel warming up (~20s)") }
          }, null, 2)
        }]
      }
    };
  }

  return { jsonrpc: "2.0", id: rpcId, result: {} };
}

export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Session-Id, Last-Event-ID"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    let parsedBody = null;
    let rawBodyBuffer = undefined;
    if (request.method !== "GET" && request.method !== "HEAD") {
      rawBodyBuffer = await request.arrayBuffer();
      try {
        parsedBody = JSON.parse(new TextDecoder().decode(rawBodyBuffer));
      } catch (_) {}
    }

    if (parsedBody && (
      parsedBody.method === "initialize" ||
      parsedBody.method === "notifications/initialized" ||
      parsedBody.method === "tools/list"
    )) {
      return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, null, null)), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    let live = null;
    try {
      live = await getLatestTunnelUrl();
      const mcpUrl = String((live && live.mcp_url) || "").trim();
      if (!mcpUrl.startsWith("https://")) {
        throw new Error("LIVE_MCP_URL.json mcp_url is warming up: " + JSON.stringify(mcpUrl));
      }
      const targetBase = mcpUrl.replace(/\/mcp\/?$/, "");
      const targetUrl = targetBase + url.pathname + url.search;

      if (request.method === "GET" && (url.pathname === "/status" || url.pathname === "/")) {
        return new Response(JSON.stringify({
          status: "UNIVERSAL_WORKER_ONLINE",
          engine: "cutter",
          title: "cutter (rizinorg) Omni-Nexus",
          active_backend_mcp_url: live.mcp_url,
          updated_at: live.updated_at
        }, null, 2), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }

      const proxyReq = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: rawBodyBuffer,
      });
      const resp = await fetch(proxyReq);
      if (resp.status === 530 || resp.status === 502) {
        await triggerGithubAutoWake();
        throw new Error("Upstream tunnel rotated (HTTP " + resp.status + ") - triggered Auto-Wake!");
      }
      const newHeaders = new Headers(resp.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");
      return new Response(resp.body, { status: resp.status, headers: newHeaders });
    } catch (err) {
      await triggerGithubAutoWake();
      if (parsedBody) {
        return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, err, live)), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
      return new Response(JSON.stringify({
        status: "AUTO_WAKING_CLOUD_RELAY",
        engine: "cutter",
        title: "cutter (rizinorg) Omni-Nexus",
        live_json_state: live,
        message: "Signaled your 24/7 GitHub Cloud Relay to wake (~25s)."
      }, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
  }
};
