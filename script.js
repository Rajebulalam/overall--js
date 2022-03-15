// 1. Six Basics Fundamentals in Javascript

/* 
    1.1 variable (const, let)
        const => const variable are declare then, when we know that the variable value couldn't be change.
        Ex. 
            const name = 'Rajebul Alam Khokan';
            console.log(name);

        let => let variable are declare then, when we know that the varible value could be change or assign a new value.
        Ex.
            let salary = 50000;
            salary = 100000;
            console.log(salary);

        => Three Types of Variable
        1. string = string means assigning text.
            Ex.
                const string = 'Rajebul Alam Khokan';
                console.log(typeof string); 

        2. number or numeric = number means means assigning number.
            Ex.
                const number = 12345;
                console.log(typeof number);

        3. boolean = boolean means a condition that could be true or false.
            Ex.
                const isActive = true;
                console.log(typeof isActive);
*/

/* 
    1.2 Condition
        Condition means some rules that's are compare one with another and also with some restriction like if you will follow rules then ok otherwise not.

        * Six Basics Condition
            1. > (Greater Then) That means the left side element will be bigger then the right side.
            Ex.
                const salary = 100000;
                const money = 80000;
                console.log(salary > money);

                *Sigle Line 
                console.log(5 > 4);

            2. < (Less Then) That means the left side element will be smaller then the right side.
            Ex. 
                const salary = 100000;
                const money = 80000;
                console.log(salary < money);

                *Single Line
                console.log(5 < 6);

            3. === (Equal in Every Angle) That means the left side and the right side element will be equal in every angle like typeOf, number, chracter etc.
            Ex. 
                const salary = 100000;
                const money = 80000;
                console.log(salary === money);

                *Single Line
                console.log(6 === 6);

            4. !== (Not Equal) That means the left side element will not to be equal with the right side.
            Ex.
                const salary = 100000;
                const money = 80000;
                console.log(salary !== money);

                *Single Line
                console.log(6 !== 6);

            5. >= (Greater then or Equal) That means the left side element will be greater or equal then the right side. 
            Ex.
                const salary = 100000;
                const money = 80000;
                console.log(salary >= money);

                *Single Line
                console.log(6 >= 6);

            6. <= (Less then or Equal) That means the left side element will be less then or equal then right side.
            Ex.
                const salary = 100000;
                const money = 80000;
                console.log(salary <= money);

                *Single Line
                console.log(6 <= 6);

        *Multiple Condition
            1. && (and) That means the left side and the right side element should to be true.
                This && (and) condition will be apply on two or more different condition.
                Ex.
                    const salary = 100000;
                    const money = 80000;
                    console.log(salary && money === 7000);

                    *Two or More Different Condition
                    const salary = 100000;
                    const money = 80000;
                    console.log(salary > money && salary >= 100000);

            2. || (or) That means the left side or the right side there is any one is being true then conditon will be true.
                This || (or) condition will be apply on two or more different condition. 
                Ex.
                    const salary = 100000;
                    const money = 80000;
                    console.log((salary || money) >= 100000);

                    *Two or More Different Condition
                    const salary = 100000;
                    const money = 80000;
                    console.log(salary < money || salary >= 100000);
        *if else Condition
            if - means => if the condition is ture then execute the inner statement of if.
            Ex.
                const salary = 100000;
                const money = 80000;
                if (salary > money) {
                    console.log("Yes it's true");
                } else {
                    console.log("No it's not true");
                }

            else - means => if the condition is not true then execute the inner statement of else.
            Ex.
                const salary = 100000;
                const money = 80000;
                if (salary < money) {
                    console.log("Yes it's true");
                } else {
                    console.log("No it's not true");
                }
*/

/* 
    1.3 Array
        Array is method that's are includes so many information in one.
        1. Array Declare = Array declare in [] third bracket thats call Square Brackets.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];

        2. length = To find out the number of length in array element. 
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            console.log(arr.length);

        3. index () = Two kinds of index =>
            1. First one is it could be set or change any array position elements - means replace.
            Ex.
                const arr = [1, 3, 4, 5, 6, 7, 8, 9];
                arr[0] = 2;
                console.log(arr);

            2. Second one is two know array specific position element.
            Ex.
                const arr = [1, 3, 4, 5, 6, 7, 8, 9];
                console.log(arr[2]);

        4. indexOf () = To find out array specific position element - if there is the element then its showing the element position, if there is not the element then its showing position -1.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            console.log(arr.indexOf(5));

        5. push () = To add an element on the array in last.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            arr.push(10);
            console.log(arr);

        6. pop () = To remove an element on the array in last.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            arr.pop();
            console.log(arr);
        7. unshift () = To add an element on the array in first.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            arr.unshift(0);
            console.log(arr);

        8. shift () = To remove an element on the array in first.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            arr.shift();
            console.log(arr);

        9. includes () = To know there is the includes element and it would be return true or false.
        Ex.
            const arr = [1, 3, 4, 5, 6, 7, 8, 9];
            console.log(arr.includes(10));
*/

/* 
    1.4 for loop
        it means to turn over on any specific condition.
        Ex.
            for(let i = 0; i < 10; i++){
            console.log(i);
            }

        * for of loop
            let arr = [1, 2, 3, 4, 5];
            for(const arr2 of arr){
                console.log(arr2 + 2);
            }


*/

/* 
    1.5 Function
        1. Without parameter
        Ex.
            function add() {
                console.log(5*5);
            }
            add();

        2. With parameter and return 
        Ex.
            function add(num1, num2) {
                const sum = num1 + num2;
                return sum;
            }
            const output = add(12, 12);
            console.log(output);
*/

/* 
    1.6 Object
        Object is a method that are includes so many infomation in one with property that has two part 
            1. one is - key
            2. another one is - value
            Ex.
                const student = {name = (key): 'Rajebul Alam' (value)}
        1. Object declare = object declare with {} second brackets that's call curly braces
        Ex.
            const student = {
                id : 1,
                name  : 'Rajebul Alam Khokan',
                age : 23
            }
            console.log(student);

        2. Declare including 
            1. array
            2. object
            Ex.
                const student = {
                    id : 1,
                    name  : 'Rajebul Alam Khokan',
                    age : 23,
                    work : {
                        companyName : 'ceo',
                        employee : 150,
                        address : 'Bangladesh'
                    },
                    skill : ['HTML', 'CSS', 'JS', 'Bootstrap']
                }
                console.log(student);

        3. Object value can be assigning three ways
            1. use of direct property name.
            Ex.
                const student = {
                    id : 1,
                    name  : 'Rajebul Alam Khokan',
                    age : 23
                }
                console.log(student.id);

            2. use of property name in [""] third bracket.
            Ex.
                const student = {
                    id : 1,
                    name  : 'Rajebul Alam Khokan',
                    age : 23
                }
                console.log(student['id']);

            3. Taken property name and set up this property name on vriable value.
            Ex.
                const student = {
                    id : 1,
                    name  : 'Rajebul Alam Khokan',
                    age : 23
                }
                const old = 'age';
                console.log(student[old]);
*/

// ES6 Basics Fundamenetal

/* 
    2.1 Template String
        Its means you can write so many variables value what ever it is like object, array, number, string and it set dynamicaly in one variable. Template string are written into inner carret => ``
        Ex.

        const name = 'Rajebul Alam Khokan';
        const age = 23;
        const work = {
            profession : 'Web Development',
            salary : 100000,
            skill : {
                first : 'HTML',
                second : 'CSS',
                third : 'JS'
            }
        }
        const favNum = [3, 7, 17, 63];

        const templaetString = ` I am ${name}. I am ${age} years old. My work is ${work.profession}. My salary is ${work.salary} .I am expert in ${work.skill.first} ${work.skill.second} and ${work.skill.third} and my favourite number is ${favNum}.`;
        console.log(templaetString);
    
*/

/* 
    2.2 Spread Operator
        Its means put the array value to another variable and create a new array.
        1. Copy an array to create a new array with this using spread operator.
        Ex.
            const arr = [1, 2, 3, 4, 5, 6, 7];
            const newArr = [...arr];
            console.log(newArr);

        2. Copy an array and then craete a new array with this using spraed operator and then add a new element on this new array.
        Ex.
            const arr = [1, 2, 3, 4, 5, 6, 7];
            const newArr = [...arr, 8];
            console.log(newArr);

        3. Use filter to remove an element from an array.
        Ex.
            const arr = [1, 2, 3, 4, 5, 6, 7];
            const newArr = arr.filter(arr2 => arr2 !== 2);
            console.log(newArr);

*/

/* 
    2.3 Arrow Function
        It means write a function with standard way.
        1. No parameter
        Ex.
            const first = () => console.log(5 * 5);
            first();
        2. Single Parameter
        Ex.
            const first = num => console.log(num * 5);
            first(25);
        3. Multiple Parameter
        Ex.
            const first = (num1, num2) => console.log(num1 * num2);
            first(25, 5);

        4. Multiline arrow function
        Ex.
            const first = (num1, num2) => {
                const sum = num1 + num2;
                return sum;
                
            };
            const output = first(25, 5);
            console.log(output);

            const first = (num1, num2) => {
                const sum = num1 + num2;
                const multiply = sum * 5;
                const division = multiply / 10;
                return division;
                
            };
            const output = first(25, 5);
            console.log(output);
*/

/* 
    2.4 Destructuring
        Taken array and object value using simple method.
        1. Object Destructuring = That means a variable that can assign object values using its property name as variable name and it should be included inner {} second bracket and also there should be object  property name.
        Ex.
            const object = {
                id : 1,
                name : 'Rajebul Alam Khokan',
                salary : 100000,
                work : {
                    companyName : 'RAK',
                    employee : 150,
                    address : {
                        country : 'Bangladesh',
                        district : 'Chattogram',
                        upazilla : 'Hathazari'
                    }
                },
                skill : ['HTML', 'CSS', 'JS'],
            }

            const {id, name, salary} = object;
            console.log(id);
            console.log(id, name, salary);

            const {employee, companyName, address} = object.work;
            console.log(employee);
            console.log(employee, companyName, address.country);

            const [first, second, third] = object.skill;
            console.log(first);
            console.log(first, second);

        2. Array Destructurig = That means a variable that can assign array property using its positon as name and it should be included inner [] third bracket and works on its position you can take any name there.
        Ex.
            const arr = [1, 2, 3, 4, 5, 6, 7, 8];
            const [first, second] = arr;
            console.log(first, second);
*/

/* 
    2.5 Function Parameter With Default Value
        That means when we didn't send the number of input what have the function parameter number then we can set a default value with parameter, when the parameter value is absent then the default value is worked as a par ameter value.
        Ex.
            function add(num1, num2 = 25){
                const sum = num1 + num2;
                return sum;
            }
            const output = add(25, 25);
            console.log(output);
            const output2 = add(25);
            console.log(output2);

            * Using Arrow Function
                        const add = (num1, num2 = 25) => {
                const sum = num1 + num2;
                return sum;
            }
            const output = add(25, 25);
            console.log(output);
            const output2 = add(25);
            console.log(output2);
*/

/* 
    2.6 Optional Chaining
        That means if the spicific condition or element get then it go next other wise it will return what he assign in before.
        Ex.
            const object = {
                id : 1,
                name : 'Rajebul Alam Khokan',
                salary : 100000,
                work : {
                    companyName : 'RAK',
                    employee : 150,
                    address : {
                        country : 'Bangladesh',
                        district : 'Chattogram',
                        upazilla : 'Hathazari'
                    }
                }
            }

            console.log(object?.work?.employee);

*/

// 3. Browser API

/* 
    3.1 fetch = That used to taken data from different website.
    Ex.
        fetch(``)
        .then(res => res.json())
        .then(data => console.log(data));

        * To use different angle
        fetch(``)
            .then(res => res.json())
            .then(data => displayData(data));

        const displayData = data => {
            console.log(data);
        }
*/




