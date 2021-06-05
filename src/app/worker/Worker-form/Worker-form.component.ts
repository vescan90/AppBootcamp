import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Worker-form',
  templateUrl: './Worker-form.component.html',
  styleUrls: ['./Worker-form.component.scss']
})
export class WorkerFormComponent implements OnInit {

  personForm: FormGroup|undefined;
  date: Date =new Date();
  age: string ="";
  id: string="";
  hide = true;
  final="";
  options = [
    { id: 'Mr', label: 'Mr' },
    { id: 'Ms', label: 'Ms' },
    { id: 'Mrs', label: 'Mrs' },
    { id: 'Miss', label: 'Miss' },
    { id: 'Monsieur', label: 'Monsieur' },
    { id: 'Madame', label: 'Madame' },
    { id: 'ing', label: 'Ingeniero' },
    { id: 'lic', label: 'Licenciado' },
    { id: 'dev', label: 'Desarrollador' },
    { id: 'dis', label: 'Diseñador' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ){

  }

  ngOnInit() {
    const regURL = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const regName = '^[ 0-9a-zA-ZÀ-ÿwçığöşüÇİĞÖŞÜ]{1,20}$';
    this.personForm = this.fb.group({
      name: this.fb.group({
        first: ['', [Validators.required, Validators.pattern(regName)]],
        last: ['', [Validators.required, Validators.pattern(regName)]],
        title: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')],
        ],
      }),
      phone: ['', [Validators.required, Validators.pattern('^[ 0-9()+-]*$')]],
      cell: ['', [Validators.required, Validators.pattern('^[ 0-9()+-]*$')]],
      email: ['', [Validators.required, Validators.email]],
      nat: ['', [Validators.required]],
      age: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],

      location: this.fb.group({
        coordinates: this.fb.group({
          lat: ['', Validators.required],
          lon: ['', Validators.required],
        }),
        city: ['', [Validators.required, Validators.pattern(regName)]],
        country: ['', [Validators.required, Validators.pattern(regName)]],
        postcode: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{4,8}$')],
        ],
        state: ['', [Validators.required, Validators.pattern(regName)]],
        street: this.fb.group({
          number: [
            '',
            [Validators.required, Validators.pattern('^[0-9]{1,8}$')],
          ],
          name: ['', [Validators.required, Validators.pattern(regName)]],
        }),
        timezone: this.fb.group({
          description: ['', Validators.required],
          offset: ['', Validators.required],
        }),
      }),
      login: this.fb.group({
        username: [
          '',
          [Validators.required, Validators.pattern('^[0-9a-zA-Z]{1,20}$')],
        ],
        password: ['',Validators.required ],
        md5: ['', Validators.required ],
        salt: ['', Validators.required ],
        sha1: ['',Validators.required ],
        sha256: ['', Validators.required ],
        uuid: ['', Validators.required ],
      }),
      picture: this.fb.group({
        large: ['', [Validators.required, Validators.pattern(regURL)]],
        medium: ['', [Validators.required, Validators.pattern(regURL)]],
        thumbnail: ['', [Validators.required, Validators.pattern(regURL)]],
      }),
      registered:this.fb.group({
        age: ['', Validators.required ],
        date: ['', Validators.required ],
      }),
    });
  }
  onSubmit(){

  }
  onCancel(){

  }
}
