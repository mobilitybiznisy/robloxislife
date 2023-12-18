import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-guild-forms',
  templateUrl: './guild-forms.component.html',
  styleUrls: ['./guild-forms.component.css'],
  imports: [ReactiveFormsModule],
})
export class GuildFormsComponent {
  GuildForm = new FormGroup(
    {
      name : new FormControl(''),
      description : new FormControl(''),
      maxMembers : new FormControl('')
    });

  onSubmit() {
    console.warn(this.GuildForm.value);
  }

}


