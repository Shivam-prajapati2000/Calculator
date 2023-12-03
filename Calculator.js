// Takes value from user and store
function storeData(v)
{
   let txtInput = document.getElementById('input');
   let oldvalue = txtInput.value;
   let t = oldvalue.length;
   let lastChar = oldvalue[t-1];

   let OprSym=["+","-","*","/","%","."];

   if(OprSym.includes(v))
   {
    if(OprSym.includes(lastChar))
    {
        let removelast = oldvalue.slice(0,-1);
        txtInput.value = removelast+v;
    }
    else{
        txtInput.value = oldvalue+v;
    }
   }
   else{
        txtInput.value = oldvalue+v;
   }
}

// Equal button function....

function Calculate(){
    let txtInput = document.getElementById('input');
    let Ans = eval(txtInput.value);
    txtInput.value = Ans;
}

// All clear button...
function Clear(){
    let txtInput = document.getElementById('input');
    txtInput.value = "";
}

// Delete value button...

function Delete()
{
    let txtInput = document.getElementById('input');
    let oldvalue = txtInput.value;
    let removelast = oldvalue.substring(0,oldvalue.length-1);
// Also you can use in place of above line .let removelast = oldvlaue.slice(0,-1);
    txtInput.value = removelast ;
}