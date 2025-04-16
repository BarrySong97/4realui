import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <>4Real UI</>,
  },
  githubUrl: "https://github.com/fuma-nama/fumadocs",
  links: [
    {
      text: "Components",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
