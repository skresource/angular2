import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { productService } from './services/product.service';

@Component ({
	selector:'add-cart',	
	template: `<button (click)="handleEventClicked($event)">Add To Cart</button>`,
	inputs: ['product']
})

export class AddCartComponent {
	constructor( private _productService: productService ) { }
	
	
	addCart( product: any){
		console.log(product);
	}
	
	@Input()
	recordDetail: any; //input value expecting from parent
	@Input()
	totalCart: Array<any>; //input value expecting from parent
	
	
	@Output('handleClickedEvent') 
	hdlClickEvnt = new EventEmitter<any>(); //sending value to parent

	
	public handleEventClicked($event) {
        
		//console.log(this.totalCart + " + " + "1");
		//this.totalCart = this.totalCart + 1;
		 
		console.log(this.totalCart);
		if(this.totalCart == null){
			this.totalCart = this.recordDetail;
		}
		else{
			this.totalCart.push(this.recordDetail);
		}
		
		//this.hdlClickEvnt.emit(this.parentCount.id) 
		
		this.hdlClickEvnt.emit(this.totalCart); //sending the valu to parent app using the emit
		
		//console.log()
		//console.log(this.recordDetail);
    }
}