import { User } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  authUser!: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user: User) => {
      this.authUser = user;
    })
  }

}
