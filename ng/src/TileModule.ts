import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'piral-ng/common';
import { TileComponent } from './TileComponent';

@NgModule({
  declarations: [TileComponent],
  exports: [TileComponent],
  imports: [SharedModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TileModule {}
