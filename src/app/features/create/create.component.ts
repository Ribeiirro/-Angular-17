import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  form = new FormGroup({
    title: new FormControl <string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit = () => {
    this.form.controls.title.value;
  };
}
