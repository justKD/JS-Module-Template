# JS-Module-Template

##### v 1.0.0 | © Cadence Holmes 2020

Starter template for building JS modules.

This template is prepared for bundling modules via Rollup in the browser.

The bundled file can be used in AMD/Require, ES/CommonJS/Node, or non-module environments.

### `./src/module` is the entry point for the module you're developing.

- Replace `./src/module/template.js` with your own entry file.
- In `./src/module/index.js`.
  - Update the import (ie. change the path and name to match your module files).
  - Update the `export` property and value in the `handleNonModule` function to your own module name and value.
  - Update the namespace that `window` will use to store your module in the case the environment is not actually modular (eg. served over CDN).

### `./src/dev` contains files that handle bundling your module.

- If you don't see the UI buttons, refresh your page.
- `Copy Bundle` will copy the bundled file contents to your clipboard.
- `Download Bundle` will download the bundle as `bundle.js`.

### `./src/dist/template.js` is the bundled file `bundle.js`.

- As an example, `module/template.ts` has already been manually bundled as `bundle.js` and the contents copied into the `/src/dist` folder as `template.js`.
- `spec/template.spec.js` and `src/index.js` import the bundled module and use it.

### Examples

#### ES / CommonJS / Node

```
import { template } from "./dist/template.js";
console.log( template );
```

#### AMD / Require

```
require(["dist/template.js"], function(template) {
  console.log( template );
});
```

#### Non-module / CDN

```
<script src="dist/template.js"></script>
<script>
  const template = window.kd.template;
  console.log( template );
</script>
```
