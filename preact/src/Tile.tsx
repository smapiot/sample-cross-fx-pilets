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

    return (
      <div class="tile">
        <h3>Preact {count}</h3>
        <p>
          {rows} rows and {columns} columns <PreactExtension name="smiley" />
        </p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
