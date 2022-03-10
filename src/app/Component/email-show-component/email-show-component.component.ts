import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/Model/Email';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-email-show-component',
  templateUrl: './email-show-component.component.html',
  styleUrls: ['./email-show-component.component.css']
})
export class EmailShowComponentComponent implements OnInit {

  
  public selectedIndexValue: number = 0;
  public title:string = "";
  public subTitle: string = "";
  public body: string = "";


  emails: Email[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchEmails();
  }

  fetchEmails() {

    this.dataService.fetchEmails().subscribe(
      data => {
        this.emails = data;
        console.log(this.emails.length + "  " + this.emails[0].body +  "  " + this.emails[0].date);
      },

      error => {
        
      }
    );

  }

  showEmailBody(indexValue:number){
    this.selectedIndexValue = indexValue;
    console.log("id " + indexValue);
  }

}
