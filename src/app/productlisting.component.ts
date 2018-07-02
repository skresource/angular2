import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { Product } from './products';
import { productService } from './services/product.service';
import { AddCartComponent } from './add-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@Component ({
	selector:'productlisting',
	templateUrl: './products/productlisting.component.html'	, 	
	providers: [productService],
	animations: [
		trigger('slideInOut', [
		  transition(':enter', [
			style({transform: 'translateY(-95%)'}),
			animate('200ms ease-in', style({transform: 'translateY(0%)'}))
		  ]),
		  transition(':leave', [
			animate('200ms ease-in', style({transform: 'translateY(-95%)'}))
		  ])
		])
	]
	
})

export class ProductlistingComponent implements OnInit {
	//model = new Product(1, "Sample Product");
	value: string = "";
	prodList: any;
	isLoaded: boolean = false;
	errorMsg: string ;
	cartItem: any[] ;
	totalCartItem: number;
	cartPanel: boolean = false;
	constructor(private _productService: productService){ }
	ngOnInit(): void{
		this.value = this._productService.getProduct();
		
		this._productService.getProductList()
			.subscribe(prodData => 
				{
					this.prodList = prodData;
					this.isLoaded = true;	
				}
				,resEmployeeError => this.errorMsg = resEmployeeError);
				
		this.cartItem = []; 
		  
	}
	
	 
	
	viewDetails(rowObj){ 		 
		var product = this.prodList.find(x => x.id == rowObj.id );
		console.log(product);		 
	}
	
	saveData($event) {	    
		//console.log($event)
		this.cartItem = $event; 		
		this.totalCartItem = this.cartItem.length	
		this.cartPanel = false;		
	}
	
	toggleCartPanel(){		 
		this.cartPanel = !this.cartPanel;
	}
	
	
}

 