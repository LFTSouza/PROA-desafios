fun main() {
    /*
    exercicio 2

    val planets = mutableListOf("Terra", "Marte", "Vênus", "Jupter", "Saturno");
    println("Digite o nome de algum planeta");
    val choice = readln();
    val maiuscusloMinusculo = choice.uppercase();
    when{
        maiuscusloMinusculo in planets.map { it.uppercase() } -> {
            println("O planeta foi encontrado");
        }
        else -> {
            println("Planeta não encontrado");
        }
    }
    */

    // exercicio 3
    val fruits = mutableListOf("BANANA", "MORANGO");
    var interromper = true;
    do {
        println(fruits);
        println("Digite uma fruta")
        val answer = readln().uppercase();
        if (answer in fruits) {
            fruits.remove(answer);
            println("Fruta removida");
        } else {
            println("Fruta indisponivel no nosso mercado!");
        }
        if (fruits.isEmpty()) {
            println("Lista de compras finalizada");
            interromper = false;
        }
    } while (interromper)
}