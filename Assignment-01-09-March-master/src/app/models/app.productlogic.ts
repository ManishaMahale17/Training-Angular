import { Product } from './app.product.model';

export class ProductLogic {
  private products: Array<Product>;
  private prod: Product;
  a: number;
  filterProd: Array<Product>;
  constructor() {
    this.products = new Array<Product>();
    this.prod = new Product(0, '', '', '', '', '', 0);
    this.products.push(
      new Product(1, 'Prd-01', 'Laptop', 'Electronics', 'HP', 'Gaming', 123000)
    );
    this.products.push(
      new Product(
        2,
        'Prd-02',
        'Iron',
        'Electrical',
        'TATA',
        'Home Helper',
        2300
      )
    );
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  addProduct(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.ProductRowId === id);

    //console.log("Heree  "+this.products.find(p => p.ProductRowId === id));
  }

  updateProduct(prd: Product): Array<Product> {
    console.log('this.getProductById(prd.ProductRowId) ' + prd.ProductRowId);
    const data = this.getProductById(prd.ProductRowId);
    if (data) {
      this.prod.ProductName = prd.ProductName;
      this.prod.ProductRowId = prd.ProductRowId;
      this.prod.CategoryName = prd.CategoryName;
      this.prod.Manufacturer = prd.Manufacturer;
      this.prod.ProductId = prd.ProductId;
      this.prod.BasePrice = prd.BasePrice;
      console.log('1');

      //this.products.push(this.prod);
    } else {
      console.log('2');

      this.products.push(prd);
    }
    return this.products;
  }
  filterProductByCat(cat: string): Array<Product> {
    this.filterProd = this.products.filter((a) => a.CategoryName === cat);
    return this.filterProd;
  }
  filterProductByMan(man: string): Array<Product> {
    this.filterProd = this.products.filter((a) => a.Manufacturer === man);
    return this.filterProd;
  }
  filterProductByText(text: string): Array<Product> {
    this.filterProd = this.products.filter((a) => a.Manufacturer === text);
    return this.filterProd;
  }
}
