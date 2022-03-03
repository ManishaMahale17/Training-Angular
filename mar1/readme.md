Create a DataGrid Component generated using a HTML Table. This component MUSt have following specifications 
The DataSource property as Input property based on which the Columns and Rows are generated Dynamically
The CanDelete property as Input property, if this property is 'true' then based on this value each row will generate a button with 'Delete' text on it. When this button is clicked, the row MUST be deleted from Parent Component
The CanSort property, if this is true, then the table MUST be sorted in ascending order based on 'SortKey' passed by the Parent 
e.g. if DataSource is Employee Collection , then the SortKey can be EmpName and CanSort is true, the the Table should show data in Sorted order by EmpName
