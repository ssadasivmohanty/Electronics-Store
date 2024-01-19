import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfilePopupComponent } from 'src/app/user-profile-popup/user-profile-popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userName = localStorage.getItem('userName');

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openUserProfilePopup() {
    const modalRef = this.modalService.open(UserProfilePopupComponent);

    // Pass data to the modal component if needed
    modalRef.componentInstance.userName = this.userName;

    // Handle the result when the modal is closed (if needed)
    modalRef.result.then(
      (result) => {
        // Handle the result if necessary
      },
      (reason) => {
        // Handle the reason if the modal is dismissed
      }
    );
  }
}
