
    // Variável (fracamente tipagem)
    /*
    Number: 1, 2, 7.5, 7.7, -10
    String: "texto", 'C'
    Boolean: true e false (1 e 0)
    Object: [a, b, 1, 2], {nome: "Fabiano", idade: 10}
    Function: Função (procedimentos)
    */

    let idade = 7;
    const nome = "IFBA";

    let str1 = 'texto ' + 1 + '...'
    let str2 = "texto " + 2 + "..."
    let str3 = `texto ${3}...`
    // Estruturas 

    // Decisão:
    if(3 == "3"){
        // Bloco TRUE
    }else{
        // Bloco FALSE
    }

    // Operador de decisão (ternário)
    // <condição-booleana> ? <true> : <false>
    nota = 8
    console.log( nota >= 7 ? "Aprovado" : "Reprovado" )

    // Repetição
    // ( inicialização | condição | modificador)
    for (let i = 0; i < 5; i++) {
        
    }

    // Pré-testada
    while( 3 === "3" ){
        // Ação
    }

    // Pós-testada
    do{
        // Ação
    } while ( 3 === "3" )

    let lista = ["IFBA", 123, true, "BCC"]
    for (const index in lista) {
        console.log( index );
    }

    for (const valor of lista) {
        console.log( valor );
    }

    console.log(new Date().toLocaleString('pt-BR'))