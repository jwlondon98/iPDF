# compose-ipdf

## Purpose

Convert a source PDF into a valid iPDF without changing the canonical source.

## Input

- one source PDF
- optional author instructions
- optional primitive registry

## Process

1. Preserve the source PDF byte-for-byte.
2. Extract document structure and stable page/figure anchors.
3. Identify places where interaction materially improves comprehension.
4. Prefer standard primitives before custom extensions.
5. Create semantic relationships separately from visual presentation.
6. Add provenance for generated interpretation.
7. Add fallbacks for custom primitives.
8. Validate the manifest and all scene references.
9. Package the source and metadata as an iPDF container.

## Constraints

- Never rewrite source claims as though generated content came from the author.
- Never embed arbitrary JavaScript.
- Generated explanations must be removable layers.
- Decorative animation should be avoided unless it communicates meaning.

## Output

A valid iPDF package and a validation report.
