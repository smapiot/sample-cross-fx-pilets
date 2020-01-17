declare module "*.elm" {
  const Elm: {
    Tile: {
      init(opts: { node: Element, flags?: any });
    };
  };
  export const Elm;
}
