class Employee {

    constructor(
  
      public EmpNo: number,
  
      public EmpName: string,
  
      public Salary: number,
  
      public Designation: string,
  
      public DeptName:string
  
    ) {}
  
  }
  
  
  
  
  
  class EmployeeOp {
  
      private Employees:Array<Employee>;
  
      private depts:Array<string>;
  
      private desig:Array<string>;
  
      constructor() {
  
          this.Employees = new Array<Employee>();
  
          this.Employees.push(
  
              new Employee(101, 'Manisha', 120000,'Des1', 'DP1')
  
          );
  
          this.Employees.push(
  
              new Employee(102, 'Vaibhav', 130000,'Des2', 'DP2')
  
          ); 
          this.Employees.push(
  
            new Employee(103, 'Sangam', 1300000,'Des2', 'DP2')

        ); 
        this.Employees.push(
  
            new Employee(104, 'SWeety', 120000,'Des2', 'DP2')

        );        
  
          this.depts =new Array<string>();
  
          this.depts.push('IT');
  
          this.depts.push('HR');
  
          this.depts.push('SL');
  
  
  
          this.desig =new Array<string>();
  
          this.desig.push('Manager');
  
          this.desig.push('Lead');
  
          this.desig.push('Staff');
  
      }
  
  
  
      private validateData(emp:Employee):boolean {
  
          // Validation Rules
  
          // 1. EmpNo MUST be unique
  
          // 2. EmpNAme MUST not have number or Special Characters
  
          // 3. DeptName and Designation names MUST be from the array of depts and desig
  
          // 4. Salary Must be Positive integer
  
          return true;
  
      }
  
  
  
      addEmployee(emp:Employee):Array<Employee>{
  
          // Call to validateData(), if it is true then push record in array
  
          // Logic to add employee in Employees Array
          this.Employees.push(emp);
  
          return this.Employees;
  
         }
        
    
  
  
  
      updateEmployee(emp:Employee):Array<Employee>{
  
          // Call to validateData(), if it is true then push record in array
  
          // search Employee from array if found update it 
  
          // Logic to add employee in Employees Array
  
          return this.Employees;
  
      }
  
  
  
      deleteEmployee(emp:Employee):Array<Employee>{

          // search Employee from array if found delete it 
          // Logic to delete employee in Employees Array
          while(this.Employees.length > 0) {
            this.Employees.pop();
        }
  
          return this.Employees;
  
      }
  
  
  
      getAllEmployees(deptname?:string):Array<Employee>{
  
          // criteria could by DeptName, Designation
         if(deptname === undefined) return this.Employees;


         return this.Employees.filter((e,i)=>{

            return e.DeptName === deptname;
 
        })
 
     }
    }

    let objEmp:EmployeeOp = new EmployeeOp();



console.log(`\nAll Employees:  ${JSON.stringify(objEmp.getAllEmployees(undefined))} \n`);

console.log(`\nAll Employees of Specific DeptName: ${JSON.stringify(objEmp.getAllEmployees('DP2'))} \n`);

console.log(`\nAll Employees with newly added ${JSON.stringify(new Employee(105, 'Subhash', 213000,'Des3', 'DP2'))} \n`);
  