import { m } from 'mithril';

export const Tile = {
  oninit() {
    this.count = 0;
  },
  view(vnode) {
    const { rows, columns, piral } = vnode.attrs;
    const { MithrilExtension } = piral;

    return m(
      'div',
      {
        class: 'tile',
      },
      m('h3', {}, `Mithril: ${this.count}`),
      m(
        'p',
        {},
        `${rows} rows and ${columns} columns `,
        m(MithrilExtension, {
          name: 'smiley',
        }),
      ),
      m(
        'button',
        {
          onclick: () => this.count++,
        },
        '+',
      ),
      m(
        'button',
        {
          onclick: () => this.count--,
        },
        '-',
      ),
    );
  },
};
