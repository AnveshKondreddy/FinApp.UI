import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { MemberModel } from './member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }
  columns: any[];
  ngOnInit() {
    this.getAllMembers()

    this.columns = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' },
      { field: 'Mobile', header: 'Mobile' },
      { field: 'IsActive', header: 'Status' }
    ];
  }

  members: MemberModel[];

  response: any;
  getAllMembers() {
    this.memberService.readmembers().subscribe(response => this.members = response,
      error => {
        console.log(this.members);
      },
      () => {
        console.log(this.members);
      })
  }
}


