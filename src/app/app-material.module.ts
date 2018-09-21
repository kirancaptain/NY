import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule, MatIconModule,MatTableModule,MatPaginatorModule, MatTabsModule, MatProgressBarModule  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule ,
    MatTabsModule
  ],
  exports:[MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule ,
    MatTabsModule,
  MatProgressBarModule ],
  declarations: []
})
export class MaterialModule { }
