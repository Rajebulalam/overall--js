// 1. Six Basics Fundamentals

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

