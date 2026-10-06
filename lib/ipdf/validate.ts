import type { IpdfManifest } from "./types";

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export function validateManifest(value: unknown): ValidationResult {
  const errors: string[] = [];
  if (!value || typeof value !== "object") return { valid: false, errors: ["Manifest must be an object."] };

  const manifest = value as Partial<IpdfManifest>;
  if (!manifest.ipdfVersion) errors.push("Missing ipdfVersion.");
  if (!manifest.title) errors.push("Missing title.");
  if (!manifest.source) errors.push("Missing source.");
  if (!Array.isArray(manifest.scenes)) errors.push("scenes must be an array.");

  for (const [sceneIndex, scene] of (manifest.scenes ?? []).entries()) {
    if (!scene.id) errors.push(`Scene ${sceneIndex} is missing id.`);
    if (!Number.isFinite(scene.page)) errors.push(`Scene ${scene.id ?? sceneIndex} has an invalid page.`);
    const ids = new Set((scene.primitives ?? []).map((primitive) => primitive.id));
    if (ids.size !== (scene.primitives ?? []).length) errors.push(`Scene ${scene.id} contains duplicate primitive ids.`);
    for (const transition of scene.transitions ?? []) {
      if (!ids.has(transition.from)) errors.push(`Transition references missing primitive: ${transition.from}.`);
      if (!ids.has(transition.to)) errors.push(`Transition references missing primitive: ${transition.to}.`);
    }
  }

  return { valid: errors.length === 0, errors };
}
