import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  rootURl = "https://jsonplaceholder.typicode.com/users"
  storeArr:any = []
  newArr:any = []
  constructor(private api: HttpClient) { }

  ngOnInit(): void {
    this.loadAllusers()
  }
  filteruser(){

    
// change Shanna@melissa.tv to localstorage email address


    this.newArr = this.storeArr.filter((m:any) => m.email != "Shanna@melissa.tv")
    console.log("new arr ", this.newArr);
    
  }
  loadAllusers(){
    this.api.get(this.rootURl).subscribe((data:any) => {
      console.log("data from fake place holder",data);
      this.storeArr = data
      this.filteruser()

    })
  }
}
