function jogar() { 

    Personagens = ['','','']
    Viloes =  ['','','']

    ForcaPersonagens = 0;
    ForcaViloes = 0 ; 

    for(let i=0; i<3; i++){//Personagens

        EscolhaPersonagens = prompt("Quais vão ser seu companheiro"+ (i+1))
        Personagens[i] = EscolhaPersonagens; 
        //calcular a forca 
        ForcaPersonagens += Math.floor(Math.random()*10 )+1 
        console.log(ForcaPersonagens)

}
    for(let i=0; i < 3; i++){ //viloes

        IndiceAleatorio = Math.floor(Math.random()*5)
        PossiveisViloes = ['Vader','Darth Mau','Conde Ducan','Palpatine',"Troper"]
        Viloes[i] = PossiveisViloes[IndiceAleatorio] 
        console.log(Viloes)
        ForcaViloes += Math.floor(Math.random()*10 )+1  
        console.log(ForcaViloes)

    }
    if (ForcaPersonagens > ForcaViloes){ 
        alert("Boa você escolheu bem, seu time ganhou a batalha contra: " + Viloes)
    }
    else { 
        if( ForcaViloes > ForcaPersonagens){ 
            alert("poxa parece que seu time perdeu a batalha contra:" + Viloes)
        }
        else{ 
            alert("uau seu time lutou bravamente derrotou seus inimigos: "+ Viloes + " porem tambem caiu em batalha")
        }
    }
}