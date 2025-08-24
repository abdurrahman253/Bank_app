
// Add Money Button
document.getElementById('money_button')
.addEventListener('click', function(event) {
      event.preventDefault();

      const account = document.getElementById('account_num') ;
      const amount = document.getElementById('amount_add') ;
      const pin = document.getElementById('Pin_add') ;
      const balance = document.getElementById('available_balance') ;
    
    
      const accountValue = account.value ;
      const amountValue = Number(amount.value) ;
      const pinValue = Number(pin.value) ;
      const balanceValue  = parseInt(balance.textContent ) ;

      const pinNumber = 1234 ;
      const availableTotal =  amountValue + balanceValue ;

      
      
      if(accountValue.length < 11){
          return;      
      }

      if(pinValue !=pinNumber){
        alert("Please provide valid  pin")
     
        return;
      }

      document.getElementById('available_balance').innerText=
       availableTotal
      
     account.value = '' ;
     amount.value = '' ;
     pin.value = '' ;
     
      
})

// Withdraw Button
document.getElementById('withdraw_btn')
.addEventListener('click', function(event) {
      event.preventDefault();

      const agent = document.getElementById('agent_num') ;
      const amountCashOut = document.getElementById('amount_cash_out') ;
      const pinCashOut = document.getElementById('Pin_cash_out') ;
      const balance = document.getElementById('available_balance') ;
    
    
      const agentValue = agent.value ;
      const amountCashOutValue = Number(amountCashOut.value) ;
      const pinValue = Number(pinCashOut.value) ;
      const balanceValue  = parseInt(balance.textContent ) ;

      const pinNumber = 1234 ;
      const availableTotal =  balanceValue - amountCashOutValue ;

      
      
      if(agentValue.length < 11){
          return;      
      }

      if(pinValue !=pinNumber){
        alert("Please provide valid  pin")
     
        return;
      }

      document.getElementById('available_balance').innerText=
       availableTotal
      
     agent.value = '' ;
     amountCashOut.value = '' ;
     pinCashOut.value = '' ;
     
      
})





// From logout to Index.html
document.getElementById('logout_button')
.addEventListener('click', function(){
  window.location.href = "./index.html"
})


// Add Money 
document.getElementById('add_money')
.addEventListener('click', function(){

  document.getElementById('cash_out_section')
  .style.display = "none" ;

  
  document.getElementById('get_bonus_section')
  .style.display = "none" ;

  document.getElementById('pay_bill_section')
  .style.display = "none" ;
  
  document.getElementById('transaction_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"

  document.getElementById('add_money_section')
  .style.display = "block" ;
})




// Cash Out
document.getElementById('cash_out')
.addEventListener('click', function(){
  document.getElementById('add_money_section')
  .style.display = "none" ;

  document.getElementById('transfer_money_section')
  .style.display = "none" ;

   document.getElementById('get_bonus_section')
  .style.display = "none" ;

   document.getElementById('pay_bill_section')
  .style.display = "none" ;
 

  document.getElementById('transaction_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"

  document.getElementById('cash_out_section')
  .style.display = "block" ;
 
})



// Transfer Money 
document.getElementById('transfer_money')
.addEventListener('click', function(){
  document.getElementById('add_money_section')
  .style.display = "none" ;

    document.getElementById('cash_out_section')
  .style.display = "none" ;

  document.getElementById('pay_bill_section')
  .style.display = "none" ;
 
  document.getElementById('transaction_section')
  .style.display = "none" ;

   document.getElementById('get_bonus_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"

  document.getElementById('transfer_money_section')
  .style.display = "block" ;
 
})



// Bonus  
document.getElementById('bonus_money')
.addEventListener('click', function(){
  document.getElementById('add_money_section')
  .style.display = "none" ;

    document.getElementById('cash_out_section')
  .style.display = "none" ;

  document.getElementById('transfer_money_section')
  .style.display = "none" ;

  document.getElementById('pay_bill_section')
  .style.display = "none" ;

   document.getElementById('transaction_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"
 

  document.getElementById('get_bonus_section')
  .style.display = "block" ;
 
})



// PayBill   
document.getElementById('pay_bil')
.addEventListener('click', function(){
  document.getElementById('add_money_section')
  .style.display = "none" ;

    document.getElementById('cash_out_section')
  .style.display = "none" ;

  document.getElementById('transfer_money_section')
  .style.display = "none" ;

   document.getElementById('get_bonus_section')
  .style.display = "none" ;

    document.getElementById('transaction_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"
 

  document.getElementById('pay_bill_section')
  .style.display = "block" ;
 
})



// Transaction 
document.getElementById('transaction_money')
.addEventListener('click', function(){
  document.getElementById('add_money_section')
  .style.display = "none" ;

    document.getElementById('cash_out_section')
  .style.display = "none" ;

  document.getElementById('transfer_money_section')
  .style.display = "none" ;

   document.getElementById('get_bonus_section')
  .style.display = "none" ;

  
  document.getElementById('pay_bill_section')
  .style.display = "none" ;

  document.getElementById('latest_payment_section')
  .style.display = "none"

  document.getElementById('transaction_section')
  .style.display = "block" ;
 
})