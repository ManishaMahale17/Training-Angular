export class Product{
  [x:string]:any;
  constructor(
    public ProductRowId:number,
    public ProductId:string,
    public ProductName:string,
    public CategoryName:string,
    public Manufacturer:string,
    public Description:string,
    public BasePrice:number,
  ){}
  }
  export class Product2{
    [x:string]:any;
    constructor(
      public productRowId:number,
      public productId:string,
      public productName:string,
      public categoryName:string,
      public manufacturer:string,
      public description:string,
      public basePrice:number,
    ){}



}
