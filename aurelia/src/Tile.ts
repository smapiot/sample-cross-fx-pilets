import { inlineView, inject } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="tile">
    <h3>Aurelia: \${counter}</h3>
    <p>
      \${props.rows} rows and \${props.columns} columns
      <extension-component name="smiley"></extension-component>
    </p>
    <button click.trigger="increment()">Increment</button>
    <button click.trigger="decrement()">Decrement</button>
  </div>
<template>`)
export class Tile {
  private counter = 0;

  constructor(@inject('props') public props: any) {}

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }
}
