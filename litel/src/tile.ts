import { LitElement, customElement, html, property } from 'lit-element';

export function createTile() {
  const name = 'my-tile';

  @customElement(name)
  class MyTile extends LitElement {
    @property() counter = 0;
    @property({ type: Object }) props: any;

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
            ${this.props.rows} rows and ${this.props.columns} columns <litel-extension name="smiley"></litel-extension>
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
