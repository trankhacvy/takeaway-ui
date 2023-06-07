# Takeaway UI 🥤🥤

A collection of React components that I use to build my side project, inspired by [shadcn/ui](https://github.com/shadcn/ui).

> This is **NOT** a component library, so you don't need to install it from npm. Just pick the component you need, copy and paste the code into your project, and customize if needed.


## 🧰 Stack
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind Variants](https://www.tailwind-variants.org)

## 🚗 Roadmap
### Commons
- [ ] Table & Data table
- [ ] Form with `react-hook-form`
- [ ] Badge
- [ ] Alert
- [ ] Toast
- [ ] Toggle
- [ ] Compobox
- [ ] Date/Time picker
- [ ] Enhance Slider
- [ ] Carousel
- [ ] Copy button

### Web3
- [ ] NFT Card
- [ ] Connect wallet modal
- [ ] Wallet avatar
and more...

## 💾 Installation
**Prerequisites**: Components are styled using Tailwind CSS. You need to install Tailwind CSS in your project. Follow the [Tailwind CSS installation instructions](https://tailwindcss.com/docs/installation) to get started.

1/ Add dependencies
```
npm install tailwindcss-animate tailwind-variants classnames tailwind-merge lucide-react
```

2/ Path Aliases
I use the `@` alias to make it easier to import components. This is how I configure it in `tsconfig.json`:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
If you use a different alias such as `~`, you'll need to update `import` statements when adding components

3/ Configure `tailwind.config.js`
This is my [tailwind.config.js](./tailwind.config.js). If you are using a different design system, feel free to modify it.

4/ Add a `cn` helper
I use a `cn` helper to make it easier to conditionally add Tailwind CSS classes. Here's how I define it in lib/utils.ts:

```
import cx from "classnames"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: cx.ArgumentArray) {
  return twMerge(cx(inputs))
}
```

## Credit
- [Shadcn UI](https://github.com/shadcn/ui)

## Contributing
Contributions are always welcome!

## License
[MIT](https://choosealicense.com/licenses/mit/)

