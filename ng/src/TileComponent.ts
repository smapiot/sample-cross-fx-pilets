import { Component, Inject } from '@angular/core';

@Component({
  template: `
    <div class="tile">
      <h3>Angular: {{ counter }}</h3>
      <p>
        {{ props.rows }} rows and {{ props.columns }} columns
        <extension-component name="smiley"></extension-component>
      </p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class TileComponent {
  public counter = 0;

  constructor(@Inject('Props') public props: any) {}

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
