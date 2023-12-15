class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get birthYear() {
        return new Date().getFullYear() - this.age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Teacher extends User {
    constructor(firstName, lastName, age, groups, yearsOfExperience) {
        super(firstName, lastName, age);
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    isGroupTeacher(groupName) {
        return this.groups.includes(groupName);
    }
}

class Student extends User {
    constructor(firstName, lastName, age, group, averageGrade) {
        super(firstName, lastName, age);
        this.group = group;
        this.averageGrade = averageGrade;
    }

    static get MIN_GRADE_FOR_SCHOLARSHIP() {
        return 4;
    }

    isEligibleForScholarship() {
        return this.averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4