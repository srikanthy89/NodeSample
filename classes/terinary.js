class world{
    constructor (country1,country2){
        this.country1=country1;
        this.country2=country2;
    }
    countryName(){
        const india =40;
        const pakistan =20;
        const a=( india>pakistan)? 'india':'pakistan';
        return `In the War of ${this.country1} and ${this.country2}, ${a} is wining.`

    }

}
const b=new world('india','pakistan');
console.log(b.countryName());