const qrcodeDiv = document.getElementById("qrcode")
const input = document.getElementById("input-link")


function criar_QR(){
  const textoInput = input.value.trim()
  //Limpar o campo de código QR para gerar outro
  qrcodeDiv.innerHTML = ""

  if(!input.value){
    qrcodeDiv.innerHTML = `<h5 style="color: white;">Impossível a criação de códigoQR</h5>`
  }else{
    new QRCode(qrcodeDiv, {
      text: textoInput,
      width: 150,
      height: 150,
      colorDark: "#ffffff", // cor do QRcode
      colorLight: "#000000" //cor do fundo do QRcode 
    })
  }
}

//Limpar input e div do qrcode
function limpar_QR(){
  qrcodeDiv.innerHTML = ''
  input.value = ''
}

document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    criar_QR()
  }else if(event.key === "Escape"){
    limpar_QR()
  }
})

/**
*                                                  ,-.
*                                               ("O_)
*                                              / `-/
*                                             /-. /
*                                            /   )
*                                           /   /  
*                              _           /-. /
*                             (_)"-._     /   )
*                               "-._ "-'""( )/    
*                                   "-/"-._" `. 
*                                    /     "-.'._
*                                   /\       /-._"-._
*                    _,---...__    /  ) _,-"/    "-(_)
*                ___<__(|) _   ""-/  / /   /
*                 '  `----' ""-.   \/ /   /
*                               )  ] /   /
*                       ____..-'   //   /                       )
*                   ,-""      __.,'/   /   ___                 /,
*                  /    ,--""/  / /   /,-""   """-.          ,'/
*                 [    (    /  / /   /  ,.---,_   `._   _,-','
*                  \    `-./  / /   /  /       `-._  """ ,-'
*                   `-._  /  / /   /_,'            ""--"
*                       "/  / /   /"         
*                       /  / /   /
*                      /  / /   /  o!O
*                     /  |,'   /  
*                    :   /    /
*                    [  /   ,'   "Blackadder"
*                    | /  ,'
*                    |/,-'
*                    P'  ____   _                                     
*   / __ \ (_) ___   __ _  ___  ___ _ ____      __
*  / / _` || |/ _ \ / _` |/ _ \/ __| '_ \ \ /\ / /
* | | (_| || | (_) | (_| | (_) \__ \ |_) \ V  V / 
*  \ \__,_|/ |\___/ \__,_|\___/|___/ .__/ \_/\_/  
*   \____/__/                      |_|          
*                  @ j o a o s p w
*/

