const bloco = document.querySelectorAll(".botao");
let vezdj = document.querySelector(".vezdojogador");
const jdn = document.getElementById("jdn");
const recomeca = document.getElementById("Recomeca")
const parabenizacao = document.getElementById("parabenizacao")


let jogador_1 = "X"
const jogador_2 = "O"


let check = true;
const combinacoes = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
]




 document.addEventListener('click', (event)=>{
   if(event.target.matches(".botao")){
     jogar(event.target.id);
   }
 });
  function jogar(id){
   const botao = document.getElementById(id);  
   vdj = check ? jogador_1 : jogador_2;
   botao.textContent = vdj;
   botao.classList.add(vdj);
   checarVencedor(vdj);
   if(vdj == jogador_1){
     vezdj.textContent = "Vez do Jogador O"
   }else{
     vezdj.textContent = "Vez do Jogador X"
   }
   
 }
  function checarVencedor(vdj){
     const vencedor = combinacoes.some((comb) =>{
         return comb.every((index) => {
             return bloco[index].classList.contains(vdj);
         })
     });
     if(vencedor){
         encerrarJogo(vdj);
     }else if (checarEmpate()){
         encerrarJogo();
     }
     else{
         check =!check
     }
 }
  function checarEmpate() {
     let x = 0;
     let o = 0;
    
     for(index in bloco){
         if(!isNaN(index)){
             if(bloco[index].classList.contains(jogador_1)){
                 x++;
             }
            
             if(bloco[index].classList.contains(jogador_2)){
                 o++;
             }
         }
     }
    
     return x + o === 9 ? true : false;
 }
  function encerrarJogo(vencedor = null) {
     if(vencedor){
        jdn.style.display = 'block';
        parabenizacao.innerHTML = `O Jogador ${vencedor} venceu!!!`
         }    
     else {
        jdn.style.display = 'block';
        parabenizacao.innerHTML = 'Deu Empate'
    }
     
     
    recomeca.addEventListener('click', ()=>{
      location.reload();
    })
   }
   
   