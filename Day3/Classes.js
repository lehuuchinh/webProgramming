class Member {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    memberName = () => {
        return this.name;
    }
  }
var x = new Member("chinh", 19);
console.log(x.memberName());
