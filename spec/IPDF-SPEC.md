# iPDF v0.1 Draft Specification

## Goals

An iPDF is a portable container that combines an immutable canonical PDF with structured, deterministic interactive layers.

## Container

A compliant archive should contain:

```
source.pdf
manifest.json
scenes/
semantics/
assets/
provenance/
```

## Separation of concerns

1. **Source** — canonical document bytes.
2. **Semantics** — machine-readable concepts, anchors, relationships, and provenance.
3. **Presentation** — deterministic scenes, primitives, states, and transitions.
4. **Exploration layers** — optional user- or AI-generated additions that never silently mutate canonical source.

## Primitive extensions

Primitive identity is separate from distribution source.

Each dependency declares:
- stable id
- version
- source location (optional)
- integrity hash (recommended)
- sandbox tier
- fallback

Suggested tiers:
1. declarative
2. sandboxed WebAssembly
3. trusted/native capability

Renderers must degrade gracefully when an extension is unavailable.

## Security

A conforming viewer must not execute arbitrary remote JavaScript from an iPDF manifest. Remote artifacts should require integrity verification and an explicit sandbox policy.
