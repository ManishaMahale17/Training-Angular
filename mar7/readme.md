Create Following Components 
ListComponent
This will Show List of Products/Departments/Employees in an HTML Table by making HTTP call to REST API
Each Row of the Table will have an Edit and Delete Button 
When an Edit button is clicked, the navigation MUST takes place to Edit Component
When an Delete button is clicked, the navigation MUST takes place to Delete Component
CreateComponent
This will create new Product/Department/Employee after clicking on 'Save' button by making HTTP call to REST API
Once the call is successful, the navigation MUST happened to ListComponent
EditComponent
This component will read the 'id' from the Route URL and fetch Product/Department/Employee data by making call to REST API and will show this data in UI for updates
This will Edit Product/Department/Employee after clicking on 'Save' button by making HTTP call to REST API
Once the call is successful, the navigation MUST happened to ListComponent
DeleteComponent
This component will read the 'id' from the Route URL and fetch Product/Department/Employee data by making call to REST API and will show this data in UI for delete
This will delete Product/Department/Employee after clicking on 'Save' button by making HTTP call to REST API
Once the call is successful, the navigation MUST happened to ListComponent
MainComponent, this will by default will show the ListComponent and following two hyperlinks
List and Add 
List link, will navigate to ListComponent
Add link, will navigate to CreateComponent
