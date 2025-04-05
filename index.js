function jogar() { 

    Personagens = ['','','']
    Viloes =  ['','','']

    ForcaPersonagens = 0;
    ForcaViloes = 0 ; 

    for(let i=0; i<3; i++){//Personagens

        EscolhaPersonagens = prompt("Quais vão ser seu companheiro"+ (i+1))
        Personagens[i] = EscolhaPersonagens; 
        //calcular a forca 

}
    for(let i=0; i < 3; i++){ 

        IndiceAleatorio = Math.floor(Math.random()*5)
        PossiveisViloes = ['Vader','Darth Mau','Conde Ducan','Palpatine',"Troper"]
        Viloes[i] = PossiveisViloes[IndiceAleatorio] 
        console.log(Viloes)
    }
}