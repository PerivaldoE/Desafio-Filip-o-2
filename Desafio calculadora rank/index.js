function NivelHeroi (Vitoria, Derrota){
    Vitoria=parseFloat(prompt("Digite a quantidade de Vitorias"))
  Derrota=parseFloat(prompt("Digite a quantiade de Derrotas"))
      let RankHeroi = Vitoria - Derrota
      
      if (RankHeroi <= 10){
          Nivel = "Ferro"
      }
      else if (RankHeroi >= 11 && RankHeroi <=20){
          Nivel = "Bronze"
      }
      else if (RankHeroi >=21 && RankHeroi <=50){
          Nivel = "Prata"
      }
      else if (RankHeroi >=51 && RankHeroi <=80){
          Nivel = "Ouro"
      }
      else if (RankHeroi >=81 && RankHeroi <=90){
          Nivel = "Diamante"
      }
      else if (RankHeroi >=91 && RankHeroi <=100){
          Nivel = "Lendario"
      }
      else if (RankHeroi >=101){
          Nivel = "Imortal"
      }
      else{ 
          Nivel = "Madeira"
      }
  }
  NivelHeroi()
  alert(Nivel)