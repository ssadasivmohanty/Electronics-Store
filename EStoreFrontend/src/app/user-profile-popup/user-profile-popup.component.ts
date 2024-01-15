import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile-popup',
  templateUrl: './user-profile-popup.component.html',
  styleUrls: ['./user-profile-popup.component.css']
})
export class UserProfilePopupComponent implements OnInit {
  @Input() userName: string | undefined;
  constructor(public activeModal: NgbActiveModal, public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("LogedOut");
    localStorage.clear();
    this.activeModal.close('Close click')
    this.router.navigate(['/login']);
  }
  

}
