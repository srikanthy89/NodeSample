class Father{
    constructor(city){
       
        this.city=city
    }
    getAddress(){
        return `is from city ${this.city}`;
    }
}

class Boy extends Father{
    constructor(name,age,city){
        super(city); 
        this.name= name;
        this.age=age;
        this.city='vizag'  //this change will also happen in main class which is here is Father
        
    }
    getFatherAdd(){
        return `${this.name} is from city ${this.city}`
    }
}

const childOne=new Boy('akhilesh',45,'lkj');
console.log(childOne.getFatherAdd());