import * as angular from 'angular';

export function createTile(extensionName: string) {
  const Tile = angular.module('my-tile', [extensionName]);
  Tile.component('tile', {
    template: `
        <div class="tile">
          <h3>Angular.js: {{counter}}</h3>
          <p>
            {{props.rows}} rows and {{props.columns}} columns
            <extension-component name="smiley"></extension-component>
          </p>
          <button ng-click="increment()">Increment</button>
          <button ng-click="decrement()">Decrement</button>
        </div>
      `,
    controller: [
      '$scope',
      'props',
      ($scope, props) => {
        $scope.counter = 0;
        $scope.increment = () => {
          $scope.counter++;
        };
        $scope.decrement = () => {
          $scope.counter--;
        };
        $scope.props = props;
      },
    ],
  });
  return Tile;
}
