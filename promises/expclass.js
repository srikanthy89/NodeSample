class person{
    fName='srikanth';
    lName='konari';
    address='vizag';
    getDetails(){
        return `My Name is ${this.fName} and my surname is  ${this.lName} or i am live in ${this.address}`
    }
    }
    person1=new person();
    exports.person=person;