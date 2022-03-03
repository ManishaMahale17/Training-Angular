export class Categories {
  constructor(
    public CategoryId: number,
    public CategoryName: string
  ){}
}

export const Category: Array<Categories> = new Array<Categories>();

export class Products {
    constructor(public ProductId:number, public ProductName:string, 
                public Categoryid: number, public UnitPrice: number){}
  }
  
  export const Product:Array<Products> = new Array<Products>();
  Product.push(new Products(1, 'Soap', 1, 20));
  Product.push(new Products(2, 'Kit-Kat', 2, 30));
  
  export class Purchase {
    constructor(public ProductId:number, public CategoryId:number, 
                public Quantity:number, public Unitprice: number,public Totalprice: number){}
  }

  export const TotalBill:Array<Purchase> = new Array<Purchase>();

  export const addToBill = ( purchase : Purchase) => {
    TotalBill.push(purchase);
  }
