import {MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatMenuModule} from '@angular/material';
import { NgModule} from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule, MatCardModule, MatMenuModule],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule, MatCardModule, MatMenuModule],
})
export class MaterialModule {}

