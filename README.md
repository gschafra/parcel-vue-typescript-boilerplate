# parcel-vue-typescript boilerplate project 📦

Boilerplate for Vue.js & Typescript, base on Parcel bundler, copied from [masonz/parcel-vue-ts](https://github.com/masonz/parcel-vue-ts) template and modified (updated dependencies, dropped parcle-plugin-vue, since it is natively supported now).

## What's inside? 🗃

* [Vue3](https://github.com/vuejs/vue)
* [Vue-Router](https://github.com/vuejs/vue-router)
* [Vuex](https://github.com/vuejs/vuex)
* [Typescript](https://github.com/Microsoft/TypeScript)
* [Jest](https://github.com/facebook/jest)
* [Parcel bundler](https://github.com/parcel-bundler/parcel)

### For class based components use

* [Vue Facing Decorator](https://github.com/facing-dev/vue-facing-decorator)
* [vuex-facing-decorator](https://github.com/wangzhiguoengineer/vuex-facing-decorator)

## Prerequisites 📋

* [Node.js](https://nodejs.org/en/) (>= 18.8.0)
* [pnpm](https://pnpm.js.org/en/installation) (>= 5.0.0)

Both are managed within the project's package.json using [volta](https://volta.sh).

## Getting Started 🚀

Clone this repository, and run npm/yarn install.

```shell
git clone git@github.com:gschafra/parcel-vue-typescript-boilerplate.git
cd parcel-vue-ts
pnpm install --shamefully-hoist
```

### Development

```shell
pnpm run dev
```

Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development.

### Production

```shell
pnpm run build
```

When you build production, parcel defaults to enable miniatation.

### Unit tests

```shell
phpm run test:unit
```

Unit test the code using jest,and you can run through `pnpm run test:coverage ` to get the test coverage.
