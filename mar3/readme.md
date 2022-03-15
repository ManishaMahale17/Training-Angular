1))
Create a ProductComponent that will accept following information from the End-User ProductRowId, ProductId, ProductName, CateogryName, Description, BasePrice
Once the 'Save' button is clicked the Product data will be passed to ProductListComponent
2))
Create a ProductListComponent that will show all Products Data in HTML Table 
This table will have Update button in each row
When a Update button is clicked in a table row, the product details of the selected row must be passed to ProductComponent where end-user can update these details and once click on 'Save' button, these updated details will be shown back in the ProductListComponent
3))Add a component named SearchComponent which will have a DropDown that will have following values 
CategoryName
Manufacturer
This component will also have the input:text element to accept searched data
When 'CategoryName' is chosen from DrownDown list and value of CategoryName is entered into the input:text, the ProductListComponent should show only those products od the CategoryName value, repeat the same for Manufacturers

