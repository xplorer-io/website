# Xplorers Website

This is an Xplorers website project. It will be first place stop for everyone to understand who Xplorers are and what we do as a group of friends in this community. We will include our events, blogs, informational contents, pictures of our past collaborations and outgoings, any many more. So, hit ⭐ and stay updated! 🥳

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Used

- Library: React
- Framework: Next.js
- CSS: Tailwind
- Component library: Shadcn/ui
- Design link: [Figma](https://www.figma.com/design/fQssgttgmTJNUu8mIzlxcO/Xplorers?node-id=0-1&m=dev)
- Project management: [Github Project](https://github.com/orgs/xplorer-io/projects/5) or checkout [issues](https://github.com/xplorer-io/website/issues)

## Design System

### Typography

- Open Sans is used for body text
- Work Sans is used for headings
- Fonts can be easily configured from `fonts.ts` file
- Nextjs font is used to generate two variables `--font-body` and `--font-heading` which is used in both global css and Tailwind config
- Default font size is defined for headings in `globals.css`

### Colour

- Custom colors, `primary` and `secondary`, is added in Tailwind config
- Both custom colors can be used like a Tailwind utility class
- For ease of use, a default shade as `primary` and `secondary`, can also be used which is the same as the shade `500`. Eg: `text-primary`, `text-secondary`.

Note: Please review the Tailwind config file and the `globals.css` file to get acquainted with the custom classes and styles implemented in the project.

## Using Shadcn/ui

We will be using shadcn/ui for our reusable ui components. It's not a component library, but helps to build our own component library with our own styles. It's built with radix-ui and tailwindcss.

The reason we are using this is it's very easy to customize, highly flexible and at the same time provides accessible components that are ready in terms of functionality. Moreover, you don't have to install the whole library as compared to others like mui, chakra, ant, etc. You can either use cli or manually copy paste to use individual component.

## [Project structure](https://ui.shadcn.com/docs/installation/next#app-structure)

- Place the UI components such as button, input, modal, card etc. in the `components/ui` folder.
- Modules: Added `modules` folder where each page is a module e.g. `modules/about-us`. Create components inside the module.

  E.g. `about-us/OurMission`

  ```
  modules
    about-us
      OurMission
  ```

- The rest of the common components such as `<PageHeader />` and `<MainNav />` should be placed in the `components` folder. If there are multiple components related to each other create a folder for it.

  E.g. `Card/CardHeader`

  ```
  Card
      CardHeader
      CardTitle
      CardFooter
  ```

- The `lib` folder contains all the utility functions.
- The styles folder contains the global CSS.

All we need to do now is follow command to install components using cli. E.g. for button

```
npx shadcn-ui@latest add button
```

Or, you can manually copy paste code of the components and put it into this folder structure src/components/ui/button.tsx

## Branching and Commits strategy

For branching, please follow below style:

```
feat/issue-1_header
bug/issue-10_login_auth
```

i.e. provide relevant information regarding your work and include issue no. if exists

For commits, please follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure. There's workflow setup which checks commit messages on each commit.

## Contribution

The project is in development status. Any contributions are welcome! Feel free to submit pull request or create the issue.

## Support

If you like the project, please feel free to ⭐ this repository, It motivates us to build such cool projects.
