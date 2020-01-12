import { LitElement, customElement, html, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { TileComponentProps } from 'sample-cross-fx';

export function createTile(extensionName: string) {
  const name = 'my-tile';
  const extension = `<${extensionName} name="smiley"></${extensionName}>`;

  @customElement(name)
  class MyTile extends LitElement {
    @property() counter = 0;
    @property({ type: Object }) props: TileComponentProps;

    firstUpdated() {
      const style = this.shadowRoot.ownerDocument.createElement('style');
      style.appendChild(
        document.createTextNode(
          Array.prototype.map
            .call(
              document.querySelectorAll('link[rel=stylesheet]'),
              sheet => `@import url(${JSON.stringify(sheet.href)});`,
            )
            .join('\n'),
        ),
      );
      this.shadowRoot.prepend(style);
    }

    render() {
      return html`
        <div class="tile">
          <h3>LitElement: ${this.counter}</h3>
          <p>
            ${this.props.rows} rows and ${this.props.columns} columns ${unsafeHTML(extension)}
          </p>
          <button @click="${() => this.counter++}">Increment</button>
          <button @click="${() => this.counter--}">Decrement</button>
        </div>
      `;
    }
  }

  console.log(`Created custom element '${name}'.`, MyTile);
  return name;
}
