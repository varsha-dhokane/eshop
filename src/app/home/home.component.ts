import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor(private http:HttpService) { }
  productList:Product[] = []
  filterProductsList:Product[] =[]
  ngOnInit(){
   this.getProductDetails()
   
  }

  getProductDetails(){
     this.http.getdata("productsitems").subscribe((resp:any)=>{
     this.productList = resp
     this.filterProducts('all')
     console.log(this.productList)
     },(error)=>{
        console.log(error)
     })
  }
   filterProducts(category:string){
    if(category != 'all'){
    this.filterProductsList = this.productList.filter((el=>(el.category == category)))
   }else{
    this.filterProductsList = this.productList
   }

  
  }

}


