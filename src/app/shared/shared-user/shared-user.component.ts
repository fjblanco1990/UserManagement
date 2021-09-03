import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/services/sweetAlert.service';
import { UserConfigService } from 'src/app/services/user-config.service';


@Component({
  selector: 'app-shared-user',
  templateUrl: './shared-user.component.html',
  styleUrls: ['./shared-user.component.scss']
})
export class SharedUserComponent implements OnInit {
  sharedUserForm: FormGroup;
  FORBIDDEN_WORD: string = 'doublevpartners';
  constructor(private fb: FormBuilder, private userConfigService: UserConfigService,private sweetAlertService: SweetAlertService,) { }

  ngOnInit(): void {
    this.sharedUserForm = this.fb.group({
      SearchUser: ['', Validators.minLength(4)],
    });
  }

  getDetailUser(id: string) {
    const valueInput = this.sharedUserForm.get('SearchUser').value;
    if (this.sharedUserForm.valid && (valueInput !== this.FORBIDDEN_WORD) ) {
      this.userConfigService.getDetailUser(id);
    } else {
      this.sweetAlertService.minError('Esta intentando buscar la palabra prohibida '+ valueInput);
    }
  }

}
