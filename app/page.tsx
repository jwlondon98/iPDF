"use client";

import { useMemo, useState } from "react";
import { sampleManifest } from "../lib/ipdf/sample";

const explanations = [
  "The harness assembles the prompt, source passage, and current document state.",
  "The model reasons over source-backed semantics and proposes structured renderer operations.",
  "The runtime executes deterministic scene operations instead of arbitrary DOM mutations.",
  "The resulting overlay is validated and kept separate from canonical source content."
];

const suggestions = [
  "Explain this architecture visually",
  "Compare the two main approaches",
  "Turn this figure into a step-by-step animation",
  "Show source vs AI interpretation"
];

export default function Home() {
  const scene = sampleManifest.scenes[0];
  const [mode, setMode] = useState<"basic" | "advanced">("advanced");
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState(suggestions[0]);
  const [layers, setLayers] = useState([
    "AI overlay: execution-loop walkthrough",
    "Author layer: interactive architecture figure"
  ]);

  const current = scene.primitives[active];
  const progress = useMemo(() => ((active + 1) / scene.primitives.length) * 100, [active, scene.primitives.length]);

  function generateOverlay() {
    const clean = query.trim();
    if (!clean) return;
    setLayers((currentLayers) => [`AI overlay: ${clean}`, ...currentLayers].slice(0, 5));
    setActive(0);
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="mark">i</div>
          <div><strong>iPDF Lab</strong><span>interactive document runtime</span></div>
        </div>
        <div className="modeToggle">
          <button className={mode === "basic" ? "active" : ""} onClick={() => setMode("basic")}>Basic</button>
          <button className={mode === "advanced" ? "active" : ""} onClick={() => setMode("advanced")}>Advanced</button>
        </div>
        <button className="ghost" onClick={() => alert("Export pipeline is planned for the next milestone.")}>Export .ipdf</button>
      </header>

      <section className="workspace">
        <aside className="sidebar left">
          <div className="eyebrow">Document</div>
          <h2>{sampleManifest.title}</h2>
          <p className="muted">Research-paper demo · source remains immutable</p>
          {["Abstract", "Architecture", "Findings"].map((name, index) => (
            <div className={`pageThumb ${index === 1 ? "activeThumb" : ""}`} key={name}>
              <span>0{index + 1}</span><b>{name}</b><i />
            </div>
          ))}
          <div className="layers">
            <div className="eyebrow">Layers</div>
            {["Source PDF", "Author interactive", "AI exploration"].map((name) => (
              <label key={name}><input type="checkbox" defaultChecked /> {name}</label>
            ))}
          </div>
        </aside>

        <section className="canvas">
          <article className="paper">
            <div className="paperHeader"><span>HARNESS ENGINEERING</span><span>PAGE 12</span></div>
            <h1>Coding agents converge on a simple iterative runtime</h1>
            <p className="lede">iPDF keeps canonical content intact while adding structured scenes, interactions, semantics, and generated exploration layers.</p>

            <div className="diagram">
              <div className="diagramTitle">
                <span>Interactive Figure 1</span>
                <small>{mode === "advanced" ? "AI exploration enabled" : "deterministic author layer"}</small>
              </div>

              <div className="nodes">
                {scene.primitives.map((primitive, index) => (
                  <button key={primitive.id} className={`node ${index === active ? "selected" : ""}`} onClick={() => setActive(index)}>
                    <span>0{index + 1}</span>
                    <b>{primitive.label}</b>
                  </button>
                ))}
              </div>

              <div className="explainer">
                <div className="stepIndex">{active + 1}/{scene.primitives.length}</div>
                <div>
                  <h3>{current.label}</h3>
                  <p>{explanations[active]}</p>
                </div>
                <button onClick={() => setActive((active + 1) % scene.primitives.length)}>Next →</button>
              </div>
              <div className="progress"><span style={{ width: `${progress}%` }} /></div>
            </div>

            <div className="sourceNote">
              <span>Source-linked explanation</span>
              <p>Generated overlays are visually distinct from source content and can be removed or exported as separate layers.</p>
            </div>
          </article>
        </section>

        <aside className="sidebar right">
          {mode === "advanced" ? (
            <>
              <div className="eyebrow">AI Harness</div>
              <h2>Ask the document</h2>
              <p className="muted">The future agent harness will manipulate the iPDF semantic model through constrained tools, never arbitrary page code.</p>
              <div className="suggestions">
                {suggestions.map((suggestion) => <button key={suggestion} onClick={() => setQuery(suggestion)}>{suggestion}</button>)}
              </div>
              <div className="promptBox">
                <textarea value={query} onChange={(event) => setQuery(event.target.value)} />
                <button onClick={generateOverlay}>Generate visual overlay</button>
              </div>
              <div className="history">
                <div className="eyebrow">Session layers</div>
                {layers.map((layer, index) => <div className="historyItem" key={layer + index}><span>{index === 0 ? "●" : "○"}</span>{layer}</div>)}
              </div>
            </>
          ) : (
            <>
              <div className="eyebrow">Basic Mode</div>
              <h2>Deterministic renderer</h2>
              <p className="muted">No LLM required. This mode only executes scenes and interactions declared in the iPDF manifest.</p>
              <div className="basicCard"><b>Core primitives</b><span>text · shape · svg · connector · callout · chart · timeline · sequence</span></div>
              <div className="basicCard"><b>Extension model</b><span>declarative → sandboxed WASM → trusted native capabilities, each with declared fallbacks</span></div>
            </>
          )}
        </aside>
      </section>

      <footer><span>iPDF v0.1 prototype</span><span>source.pdf + manifest + scenes + semantics + provenance + layers</span></footer>
    </main>
  );
}
