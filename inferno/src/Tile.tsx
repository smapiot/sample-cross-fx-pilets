import { Component, ComponentType } from 'inferno';
import { createElement } from 'inferno-create-element';
import { TileComponentProps } from 'sample-cross-fx';

export const Tile = (class extends Component<TileComponentProps> {
  state = {
    count: 0,
  };

  private increment = () => this.setState({ count: this.state.count + 1 });

  private decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    const { piral, rows, columns } = this.props;
    const { count } = this.state;
    const { InfernoExtension } = piral;

    return createElement(
      'div',
      {
        class: 'tile',
      },
      createElement('h3', {}, `Inferno: ${count}`),
      createElement(
        'p',
        {},
        `${rows} rows and ${columns} columns `,
        createElement(InfernoExtension as any, {
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
} as any) as ComponentType<TileComponentProps>;
