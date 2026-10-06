# iPDF

An open experiment for AI-authored, interactive documents.

iPDF keeps the original PDF immutable and layers a deterministic interactive scene model on top. A basic renderer can replay declared scenes without AI. An advanced harness can let an LLM read the document semantics and create temporary visual overlays through constrained renderer tools.

## Current MVP

- Next.js reference renderer
- Basic and Advanced modes
- Layer model: source / author / AI exploration
- Deterministic scene primitives
- Extensible primitive registry concept
- Sample `.ipdf` manifest and schema
- Vercel-ready demo

## Core principle

AI manipulates the semantic iPDF model, not the renderer DOM.

## Planned package shape

```
.ipdf
├── source.pdf
├── manifest.json
├── scenes/
├── semantics/
├── assets/
└── provenance/
```

This repository is intentionally early-stage. The v0.1 spec is exploratory and subject to breaking changes.
