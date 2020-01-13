import { m } from 'mithril';

export const Tile = {
  oninit() {
    this.count = 0;
  },
  view(vnode) {
    const { rows, columns, piral } = vnode.attrs;
    const { MithrilExtension } = piral;

    return (
      <div class="tile">
        <h3>Mithril: {this.count}</h3>
        <p>
          {rows} rows and {columns} columns <MithrilExtension name="smiley" />
        </p>
        <button onclick={() => this.count++}>+</button>
        <button onclick={() => this.count--}>-</button>
      </div>
    );
  },
};
