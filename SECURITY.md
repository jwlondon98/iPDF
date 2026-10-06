# Security model

iPDF documents are data, not arbitrary applications.

## Rules

- The source PDF is immutable.
- The reference renderer must never execute arbitrary JavaScript referenced by a document.
- Declarative extensions may be loaded automatically when they validate against known schemas.
- Executable extensions must run in an explicit sandbox and declare required capabilities.
- Remote extension artifacts should use content integrity hashes.
- Network, filesystem, process, clipboard, camera, microphone, and credential access are denied by default.
- AI-generated layers must remain distinguishable from canonical source content.
- Renderers should provide a static fallback when an extension is unavailable.

## Extension trust tiers

1. **Declarative** — composed entirely from standard iPDF primitives.
2. **Sandboxed** — executable extension in a constrained runtime such as WebAssembly.
3. **Native/trusted** — capability supplied by the host renderer and explicitly approved by the user.
