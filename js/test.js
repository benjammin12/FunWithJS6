/**
 * Created by benjaminxerri on 6/29/16.
 */


function bankAccount(name, savings){
    this.name = name;
    this.savings = savings;

    this.getInfo = function(){
        return this.name + ' has a total of $' + this.savings;
    }
}

var Johnny = new bankAccount("John Smith", 5000);

document.write(Johnny.getInfo());


class BankAccount {
    BankAccount(name,savings,monthlyFee){
        this.name = name;
        this.savings = savings;
        this.monthlyFee = monthlyFee;
    }

    getSavings(){
        return this.savings;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    makeDeposit(amount){
        savings += amount;
    }

    getInfo(){
        return this.getName() + ' has a total of $' + this.getSavings();
    }

    applyFee(){
        savings -= monthlyFee;
    }
}

var Ben = new BankAccount('Benjammin', 400, 5);



function getUserName(name) {
    var aName = document.getElementsByClassName(name);
    $(".accountName").replace(Ben.getName());

}
    
