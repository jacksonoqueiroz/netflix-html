function direcao(e){
    var direcao = document.getElementById("contentSlide");
    var btn = document.getElementById("btn-left");

    if(e == 1){
      //esquerda

      direcao.scrollLeft = direcao.scrollLeft - 470;
        
      
    }else if(e == 2){
      //direita

      direcao.scrollLeft = direcao.scrollLeft + 470;
    }
}
