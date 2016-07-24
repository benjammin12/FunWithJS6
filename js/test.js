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
       this.savings -= this.monthlyFee;
        displaySavings(this);
        return savings;
    }
}
    
var Ben = new BankAccount('Benjammin', 400, 5);



    function displaySavings(name) {
        if (savings !== "") {
            document.getElementById("savings").innerHTML = "";

        }
        savings.insertAdjacentHTML("afterbegin", name.getInfo());
    }

    function hideSavings() {
        $("#savings").hide();
    }

    var amt = 0;

    function calcYearly() {
        amt = document.getElementById("Amount").value;
        amt = amt * 260;
        document.getElementById('amntSaved').innerHTML = "You spend " + amt + " yearly.";
        var ele = document.getElementById('posSavings');
        ele.innerHTML = "You could have save " + (amt/2) + " per year, if you purchase this item every other day";
    }









