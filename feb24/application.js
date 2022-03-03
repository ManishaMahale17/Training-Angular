var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName, Salary, Designation, DeptName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.Salary = Salary;
        this.Designation = Designation;
        this.DeptName = DeptName;
    }
    return Employee;
}());
var EmployeeOp = /** @class */ (function () {
    function EmployeeOp() {
        this.Employees = new Array();
        this.Employees.push(new Employee(101, 'A', 1200, 'Des1', 'DP1'));
        this.Employees.push(new Employee(102, 'B', 1300, 'Des2', 'DP2'));
        this.depts = new Array();
        this.depts.push('IT');
        this.depts.push('HR');
        this.depts.push('SL');
        this.desig = new Array();
        this.desig.push('Manager');
        this.desig.push('Lead');
        this.desig.push('Staff');
    }
    EmployeeOp.prototype.validateData = function (emp) {
        // Validation Rules
        // 1. EmpNo MUST be unique
        // 2. EmpNAme MUST not have number or Special Characters
        // 3. DeptName and Designation names MUST be from the array of depts and desig
        // 4. Salary Must be Positive integer
        return true;
    };
    EmployeeOp.prototype.addEmployee = function (emp) {
        // Call to validateData(), if it is true then push record in array
        // Logic to add employee in Employees Array
        this.Employees.push(emp);
        return this.Employees;
    };
    EmployeeOp.prototype.updateEmployee = function (emp) {
        // Call to validateData(), if it is true then push record in array
        // search Employee from array if found update it 
        // Logic to add employee in Employees Array
        return this.Employees;
    };
    EmployeeOp.prototype.deleteEmployee = function (emp) {
        // search Employee from array if found delete it 
        // Logic to add employee in Employees Array
        return this.Employees;
    };
    EmployeeOp.prototype.getAllEmployees = function (deptname) {
        // criteria could by DeptName, Designation
        if (deptname === undefined)
            return this.Employees;
        return this.Employees.filter(function (e, i) {
            return e.DeptName === deptname;
        });
    };
    return EmployeeOp;
}());
var objEmp = new EmployeeOp();
console.log("\nAll Employees:  ".concat(JSON.stringify(objEmp.getAllEmployees(undefined)), " \n"));
console.log("\nAll Employees of Specific DeptName: ".concat(JSON.stringify(objEmp.getAllEmployees('DP2')), " \n"));
console.log("\nAll Employees with newly added ".concat(JSON.stringify(new Employee(103, 'C', 13000, 'Des3', 'DP2')), " \n"));
