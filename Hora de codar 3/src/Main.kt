fun main() {
    //exercicio 1
    /*
    println("Digite o primeiro valor");
    val num1 = readln().toInt();
    var verd = true;
    println("Digite o segundo valor");
    var num2 = readln().toInt();
    do {
        if (num2 <= 0) {
            println("======//======");
            println("Numero invalido");
            println("======//======");
            println("Digite o segundo valor");
            num2 = readln().toInt();
        } else {
            verd = false;
        }
    } while (verd)
    println("======//======");
    println(num1/num2);
*/

    // Exercicio 2

    /*
    val inicio: Int = 30;
    for (i in inicio downTo 0)
    {
        println(i);
        when(i)
        {
            0 -> println("EXPLOSÃO");
        }
    }
*/
    // exercicio 3
    /*
    val inicio = 10;

    for(i in inicio downTo 1)
    {
        println(i);
    }
    */

    //exercicio 4
    /*
        val inicio = 100;
        var soma = 0;
        var case = 0;
        for(i in inicio downTo 15)
        {
            soma += i;
            case = i;
        }
        println(soma/case);
    */

    //exercicio 5
    /*
        println("Digite o inicio da sequencia");
        val inicio = readln().toInt();
        println("Digite o final da sequencia");
        val final = readln().toInt();
        var soma = 0;
        val case = mutableListOf<Int>();
        for(i in inicio .. final)
        {
            soma+=i
            case.add(i);
        }
        val result: Float = soma/case.size.toFloat();
        println(result);
    */

    //exercicio 6
    /*
    notasMedia();
    */

    //exercicio 7
    /*
    notaAvaliacao();
     */

    //exercicio 8
    /*
    println("Digite um numero");
    val num1 = readln().toInt();
    for(i in 1..num1){
        println(i);
    }
    */

    //exercicio 9
    /*
    val num100 = 100;
    for(i in num100+1..110)
    {
        println(i);
    }
    */

    //exercicio 10
    /*
    println("Digite até qual numero vá a tabuada");
    val tabs = readln().toInt();
    for(i in 1..tabs)
    {
        for(j in 1..10){
            println("$j * $i = ${j*i}");
            println("=====//=====");
        }
    }
     */

    //exercicio 11

    /*
    var valor: Int;
    val caseDentro = mutableListOf<Int>();
    val caseFora = mutableListOf<Int>();
    for(i in 1..4)
    {
        println("Digite o $i valor");
        valor = readln().toInt();
        if(valor < 24 || valor > 42)
        {
            caseFora.add(valor);
        } else if(valor in 24..42)
        {
            caseDentro.add(valor);
        }
    }
    println("Esses são os valores que estão fora: $caseFora");
    println("Esses são os valores que estão dentro: $caseDentro")
    */
}

// ex7
/*
fun notaAvaliacao() {
    println("Digite quantas notas deseja colocar de 2/6");
    val escolha = readln().toInt();
    val notas = mutableListOf<Float>();
    var notaAluno: Float;
    if (escolha > 6) {
        println("======//=====");
        println("Quantidade de notas invalida");
        println("======//=====");
        notaAvaliacao();
    } else {
        for (i in 1..escolha) {
            println("Digite a ${i} nota do aluno");
            notaAluno = readln().toFloat();
            if (notaAluno < 0 || notaAluno > 10) {
                println("======//=====");
                println("Digite uma nota valida");
                println("======//=====");
                notaAvaliacao();
            } else {
                notas.add(notaAluno);
            }
        }
        val media = notas.sum()/notas.size;
        println("A média do aluno é $media");
    }
}
*/


//ex6
/*
fun notasMedia()
{
    val case = mutableListOf<String>();
    println("Digite o nome do aluno");
    val nome = readln();
    println("Digite a primeira nota");
    val n1 = readln().toFloat();
    println("Digite a segunda nota");
    val n2 = readln().toFloat();
    var res: Float = 0f;
    res = ((n1 + n2)/2)
    println(res);
    println("Calcular a média do aluno? Sim/Não");
    val escolha = readln();
    if(escolha == "S")
    {
        notasMedia();
    } else if(res >= 9.5)
    {
        case.add(nome);
        println(case.size+1);
    }
}*/