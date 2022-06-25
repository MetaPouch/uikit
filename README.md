# A pancakeswap UI Kit fork for MetaPouch.

[![Version](https://img.shields.io/npm/v/@metapouch/uikit)](https://www.npmjs.com/package/@metapouch/uikit) [![Size](https://img.shields.io/bundlephobia/min/@metapouch/uikit)](https://www.npmjs.com/package/@metapouch/uikit)

MetaPouch UI Kit is a set of React components and hooks used to build pages on MetaPouch's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @metapouch/uikit`

## Setup

### Theme

Before using MetaPouch UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@metapouch/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@metapouch/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://metapouch.github.io/metapouch-uikit/)
