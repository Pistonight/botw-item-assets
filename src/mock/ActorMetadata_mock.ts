export const ActorChunkClasses = {
    ".sprite-chunk0x32": { backgroundImage: `url()` },
    ".sprite-chunk1x32": { backgroundImage: `url()` },
    ".sprite-chunk2x32": { backgroundImage: `url()` },
    ".sprite-chunk0x64": { backgroundImage: `url()` },
    ".sprite-chunk1x64": { backgroundImage: `url()` },
    ".sprite-chunk2x64": { backgroundImage: `url()` },
    ".sprite-mask-chunk0x32": { maskImage: `url()` },
    ".sprite-mask-chunk1x32": { maskImage: `url()` },
    ".sprite-mask-chunk2x32": { maskImage: `url()` },
    ".sprite-mask-chunk0x64": { maskImage: `url()` },
    ".sprite-mask-chunk1x64": { maskImage: `url()` },
    ".sprite-mask-chunk2x64": { maskImage: `url()` },
} as const;
/** Actor => [Chunk, Position]*/
export type ActorMetadata = Record<string,[0|1|2,number]>;
export const ActorMetadata: ActorMetadata = {};
