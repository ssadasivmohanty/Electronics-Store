import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apiUrl: string = 'https://fakestoreapi.com/products'; 
  public myVar: number =12;
  public productData: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.products();
  }
  products() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.productData = data; // Assign the fetched data to the variable 
    });
  }

}
