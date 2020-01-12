import { Component, createElement } from 'preact';
import { TileComponentProps } from 'sample-cross-fx';

export class Tile extends Component<TileComponentProps> {
  state = {
    count: 0,
  };

  private increment = () => this.setState({ count: this.state.count + 1 });

  private decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    const { piral, rows, columns } = this.props;
    const { count } = this.state;
    const { PreactExtension } = piral;

    return createElement(
      'div',
      {
        class: 'tile',
      },
      createElement('h3', {}, `Preact: ${count}`),
      createElement(
        'p',
        {},
        `${rows} rows and ${columns} columns `,
        createElement(PreactExtension, {
          name: 'smiley',
        }),
      ),
      createElement(
        'button',
        {
          onClick: this.increment,
        },
        '+',
      ),
      createElement(
        'button',
        {
          onClick: this.decrement,
        },
        '-',
      ),
    );
  }
}
