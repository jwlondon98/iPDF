export type PrimitiveKind =
  | "text"
  | "shape"
  | "svg"
  | "connector"
  | "callout"
  | "chart"
  | "timeline"
  | "sequence"
  | "custom";

export type ScenePrimitive = {
  id: string;
  type: PrimitiveKind | string;
  label?: string;
  x: number;
  y: number;
  metadata?: Record<string, unknown>;
};

export type SceneTransition = {
  from: string;
  to: string;
  action: "highlight" | "trace" | "focus" | "move" | "appear" | "dim";
  durationMs?: number;
};

export type PrimitiveDependency = {
  id: string;
  version: string;
  source?: string;
  integrity?: string;
  sandbox?: "declarative" | "wasm" | "native";
  fallback?: string;
};

export type IpdfManifest = {
  ipdfVersion: string;
  title: string;
  source: string;
  primitiveDependencies?: PrimitiveDependency[];
  scenes: {
    id: string;
    page: number;
    primitives: ScenePrimitive[];
    transitions: SceneTransition[];
  }[];
};
