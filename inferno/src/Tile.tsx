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

    return (
      <div class="tile">
        <h3>Inferno {count}</h3>
        <p>
          {rows} rows and {columns} columns <InfernoExtension name="smiley" />
        </p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
} as any) as ComponentType<TileComponentProps>;
