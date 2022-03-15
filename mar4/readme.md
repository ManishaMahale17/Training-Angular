Create a REST API that will perform for search operations of any of the following 
Product Search: Based on CategoryName OR Manufacturer and return searched Product as pagination of 10 products per search HTTP call. 
You are free to select number of records to be fetched from the server
You can pass the value for number of records to be fetched from REST API from UI
The searched result must be shown on Angular Component in HTML Table 
The Component will access the Angular service that will contain following method 
searchProduct(criteria):Observable<Products[]> 
Criteria value will be as follows 
criteria= 'CategoryName='Electronics''
criteria= 'Manufacturer='Bajaj''
