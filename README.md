# botw-item-assets

React components for item images in BOTW, for use with my BOTW projects
such as the IST simulator.

**NOTE: This repo does not contain any data files or assets from the game.
The MIT License only applies to files in this repo**

Note this package can only be integrated with my projects out-of-the-box.
However, the code is MIT so feel free to use them.

## Usage

See [ActorSprite.tsx](https://github.com/Pistonight/botw-item-assets/tree/main/src/ActorSprite.tsx) and
[ModifierSprite.tsx](https://github.com/Pistonight/botw-item-assets/tree/main/src/ModifierSprite.tsx)

## Install into monorepo

This section is for integrating this into my projects.

Install the submodule

```bash
magoo install https://github.com/Pistonight/botw-item-assets packages/item-assets --branch main --name item-assets
```

Add the package to the workspace (`pnpm-workspace.yaml`)

```yaml
packages:
    - packages/item-assets
```

Setup the package

```bash
pnpm install
cd packages/item-assets
task pull-artifacts
```

Add the dependency to another package:

```json
{
    "dependencies": {
        "botw-item-assets": "workspace:*"
    }
}
```

Import

```typescript
import { ActorSprite } from "botw-item-assets";
```
