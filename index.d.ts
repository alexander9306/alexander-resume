declare module "*.png" {
  const value: string
  export = value
}

declare module "*.jpg" {
  const value: string
  export = value
}

declare module "gatsby-plugin-react-intl" {
  import * as gatsby from "gatsby"
  import React from "react"

  // eslint-disable-next-line import/no-extraneous-dependencies
  export * from "react-intl"

  export class Link<TState> extends gatsby.Link<TState> {}
  export const navigate: typeof gatsby.navigate
  export const changeLocale: (language: string, to?: string) => void
  export const IntlContextProvider: React.Provider
  export const IntlContextConsumer: React.Consumer
}
