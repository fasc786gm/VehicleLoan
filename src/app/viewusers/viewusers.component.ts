import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any;

  ngOnInit(): void {
    this.userService.viewAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}
