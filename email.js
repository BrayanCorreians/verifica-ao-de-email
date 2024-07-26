// BLOCO PARA VALIDAÇAO DE EMAIL
// --------------------------------------------------------------
function checarcpf(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1 )
    {
 
        alert("por favor me informe um cpf valido");
        return false;
 
    }else {
         alert("email informado com sucesso!");
        document.getElementById("cpf").innerHTML = document.forms[0].email.value;
     }
}
 
// --------------------------------------------------------------
 
 
 
 
 
//CODIGO DE VERIFICACAO DE EMAIL DIGITADO
// --------------------------------------------------------------
 
function verifica(){
    if (document.forms[0].email.value ==0){
       alert("por favor, filho duma egua, informa essa merda de CPF lixo, seu otario burro");
       document.frmEnvia.email.focus();
       return false;

    }
}
