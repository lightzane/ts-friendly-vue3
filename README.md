# ts-friendly-vue3

Learning Vue 3 with Typescript friendly

This template should help get you started developing with Vue 3 in Vite.

## Related course:

https://www.vuemastery.com/courses/typescript-friendly-vue3/reactive-variables-with-type-inference

## How this project was created ![Static Badge](https://img.shields.io/badge/node-22.16.0-green?style=flat) ![Static Badge](https://img.shields.io/badge/npm-10.9.2-2ecc71?style=flat)

Using `npm create vue`

```bash
npm create vue

> npx
> create-vue

┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  ts-friendly-vue3
│
◇  Select features to include in your project: (↑/↓ to navigate, space to
select, a to toggle all, enter to confirm)
│  TypeScript

Scaffolding project in /Users/lightzane/Documents/dev/ts-friendly-vue3...
│
└  Done. Now run:

   cd ts-friendly-vue3
   npm install
   npm run dev

| Optional: Initialize Git in your project directory with:

   git init && git add -A && git commit -m "initial commit"
```

## Update configuration to allow auto import modules

`> settings.json` of **vscode**

```json
{
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

And update ![tsconfig.app.json](./tsconfig.app.json) to include the `baseUrl`

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

And if using **vite**:

```ts
defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
```

This should allow **vscode** to help you to automatically import modules:

```ts
// import HelloWorld from '../components/HelloWorld.vue' // instead of
import HelloWorld from '@/components/HelloWorld.vue'; // like so
```

## Notes

Use **Composition API** via the `setup` in `<script>` to activate "**script setup**"

```vue
<!-- prettier-ignore -->
<script setup lang="ts">

</script>
```

### Install vscode and its extension

[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Reactive Variables

- Using `ref` and `reactive`.
- Also, the official convention is to put `<script>` before the `<template>` tag

```vue
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

import fetchCount from '@/services/fetchCount';

interface AppInfo {
  name: string;
  slogan: string;
}

// * Type Inference
// const count = ref(0) // Inferred type: Ref<number>
const count = ref<number | null>(null); // Inferred type: null, hence, specify via type annotation

// * Type Annotation (i.e. AppInfo)
const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on',
});

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount;
  });
});
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
    <p>{{ count }}</p>
  </div>
</template>
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
