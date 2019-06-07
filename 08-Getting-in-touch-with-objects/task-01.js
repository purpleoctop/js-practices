var person = {
    get salary(){
        today = new Date();
        var dd =today.getDate();
        var mm =today.getMonth()+1;
        var yy =today.getYear();
        if(((mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12)&&((31-dd)>=20))||
        ((mm==4||mm==6||mm==9||mm==11)&&((30-dd)>=20))||
        ((yy%4!=0)&&(mm==2)&&(28-dd>=20))||
        ((yy%4==0)&&(mm==2)&&(29-dd>=20))){
        return 'good salary';    
     }
   
    else {
     return 'bad salary';
     }
    }
    
}

console.log(person.salary);

