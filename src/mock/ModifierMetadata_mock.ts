export const ModifierChunkClasses = {
    ".sprite-modifiers": { backgroundImage: "url" },
} as const;
/** Modifier => [Chunk, Position]*/
export type ModifierMetadata = Record<string,[0,number]>;
export const ModifierMetadata: ModifierMetadata = {};
