# botw-item-assets

React components for item images in BOTW, for use with my BOTW projects
such as the IST simulator.

**NOTE: This repo does not contain any data files or assets from the game. The MIT License only applies to files in this repo**

## Usage

See [ActorSprite.tsx](./src/ActorSprite.tsx) and [ModifierSprite.tsx](./src/ModifierSprite.tsx)

## Install into monorepo

Install as a submodule

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
