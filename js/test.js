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

//document.write(Johnny.getInfo()) , `<br><hr>`;


class BankAccount {

    constructor(name,savings,monthlyFee){
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
        return this.savings -= this.monthlyFee;
    }
}
    
var Ben = new BankAccount('Benjammin', 400, 5);

//document.write(Ben.getInfo() , `<br /> `);


function displaySavings(name) {
    if (savings != ""){
        document.getElementById("savings").innerHTML = "";

    }
    savings.insertAdjacentHTML("afterbegin", name.getInfo());
}
function hideSavings(){
    $("#savings").hide();
}

function calcYearly(){
    var amt =  document.getElementById("Amount").value;

    document.getElementById('amntSaved').innerHTML = "You spend " + amt * 250 + " yearly.";

}





