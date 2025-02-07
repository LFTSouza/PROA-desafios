import java.time.Clock
import java.time.Instant.now
import java.time.LocalDate

fun main() {
    // exercicio 1
    /*
    println("Digite o primeiro numero");
    val num1 = readln();
    println("Digite o segundo numero");
    val num2 = readln();

    if (num1 > num2) {
        println("o maior numero é ${num1}")
    } else {
        println("O maior numero é ${num2}")
    }*/

    //exercicio 2
    /*
    println("Digite um numero");
    val num1 = readln().toInt();

    if (num1 < 0) {
        println("valor negativo");
    } else if (num1 > 0) {
        println("Valor positivo");
    } else {
        println("valor zero");
    }
    */

    // exercicio 3
    /*
    val num1 = 9;
    val num2 = 10;
    val num3 = 2103;

    if (num1 > num2 && num1 > num3) {
        println("o maior numero é ${num1}")
    } else if (num2 > num1 && num2 > num3) {
        println("O maior numero é ${num2}")
    } else if (num3 > num1 && num3 > num2)
    {
        println("O maior numero é ${num3}")
    }
    */

    // exercicio 4
    /*
    var sum = 0;
    val case = mutableListOf<Int>();

    for(i in 1..3)
    {
        println("digite o ${i} numero");
        val num = readln().toInt();
        case.add(num);
    }
    if(case[0] > case[2] && case[1] > case[2])
    {
        sum = case[0] + case[1];
    } else if(case[2] > case[0] && case[1] > case[0])
    {
        sum = case[1] + case[2];
    } else if(case[0] > case[1] && case[2] > case[1])
    {
        sum = case[0] + case[2];
    }
    println("===============//================")
    println(sum);
    */

    // exercicio 5
    /*
    val case = mutableListOf<Float>();
    var sum: Float = 0f;
    var number = 0;
    for(i in 1..6)
    {
        number = i;
        println("Digite o ${i} numero");
        val num = readln().toFloat();
        case.add(num);
    }
    sum = case.sum();
    println(sum/number);
     */

    // exercicio 6

    /*
    val case = mutableListOf<Int>();
    var maiorValor = 0;

    for(i in 1..3)
    {
        println("Digite o ${i} numero");
        val num = readln().toInt();
        case.add(num);
    }

    for(j in 0..case.size-1)
    {
        if(case[j] > maiorValor)
        {
            maiorValor = case[j];
        }
    }

    println("primero indice ${case.first()}");
    println("Ultimo indice ${case.last()}");
    println("O maior valor é $maiorValor");
    */

    // exercicio 7

    /*
    val case = mutableListOf<Int>();
    val caseSoma = mutableListOf<Int>();
    for (i in 0..3-1) {
        println("Digite o ${i+1} numero");
        val num = readln().toInt();
        if (num < 72) {
            caseSoma.add(num);
        } else if (num > 72) {
            case.add(num);
        }
    }
    val soma: Int = caseSoma.sum();
    println(soma);
    println(case + caseSoma);
    */

    // exercicio 8
    /*
    val case = mutableListOf<Float>()
    var numero = 0;
    for (i in 0..<4) {
        numero++;
        println("Digite o ${i} numero");
        val num = readln().toFloat();
        if (num in 1f..9f) {
            case.add(num);
        } else
        {
            println("nota invalida");
            break;
        }
    }
    val soma = case.sum();
    val media = soma / numero;

    println(media);
    println("======//======")
    if (media > 5f) {
        println("Passou no teste");
    } else {
        println("Tente novamente")
    }
    */

    // exercicio 9
    /*
    println("Informe seu ANO de nascimento");
    val dataDeNascimento = readln().toInt();
    val moment = LocalDate.now().year;
    val age = moment - dataDeNascimento;

    if (age >= 18) {
        println("Pode votar");
    } else {
        println("Não pode votar");
    }
    */

    //exercicio 10
    /*
    println("Qual o seu sexo");
    val sexo: String = readln();
    println("Qual a sua altura?")
    val h: Double = readln().toDouble();
    var retorno: Double = 0.0;
    if(sexo == "Homem" || sexo == "homem")
    {
        retorno = ((72.7*h)-58);
    } else if(sexo == "Mulher" || sexo == "mulher")
    {
        retorno = ((62.1*h)-44.7);
    }
    println(" seu sexo é ${sexo} e seu peso ideal é ${retorno}");

     */

    //exercicio 11

    println("Digite o primeiro valor");
    val num1 = readln().toFloat();
    println("Digite o segundo valor");
    val num2 = readln().toFloat();
    println("Escolha qual das operações deseja efetuar.\n" +
            "1- Soma \n" +
            "2- Subtração \n" +
            "3- Divisão \n" +
            "4- Multiplicação");

    val escolha: Int = readln().toInt();

    when (escolha) {
        1 -> println(sum(num1, num2));
        2 -> println(sub(num1, num2));
        3 -> println(divi(num1, num2));
        4 -> println(mult(num1, num2));
    }
}

// Função do exercicio 11
fun sum(a: Float, b: Float): Float {
    return a + b;
}

fun sub(a: Float, b: Float): Float {
    return a - b;
}

fun divi(a: Float, b: Float): Float {
    return a / b;
}

fun mult(a: Float, b: Float): Float {
    return a * b;
}