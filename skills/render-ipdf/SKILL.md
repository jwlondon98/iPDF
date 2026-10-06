# render-ipdf

## Purpose

Render a valid iPDF using deterministic primitives.

## Rules

- The renderer executes scene data; it does not ask an LLM to guess the intended presentation.
- Unsupported custom primitives must degrade to their declared fallback.
- The renderer must visually distinguish canonical source from generated exploration layers.
- AI harnesses interact through constrained document/scene tools rather than direct DOM manipulation.

## Basic mode

Render declared author scenes and interactions without AI.

## Advanced mode

Expose safe tools such as:

- search_document
- read_section
- get_figure
- create_layer
- create_scene
- create_annotation
- highlight
- trace_path
- animate_sequence
- save_layer

An LLM may use those tools to create temporary exploration layers that remain separate from canonical source content.
