import kotlin.reflect.typeOf

fun main() {
    menu();
}

var nomeCLiente = "";
var contadorDeChamadas = 0;

fun cliente() {
    contadorDeChamadas++;
    println("Informe seu nome");
    nomeCLiente = readln();
    println("Olá $nomeCLiente é um prazer ter você por aqui!");
    println("======//======")
}

fun menu() {
    if (contadorDeChamadas == 0) {
        cliente()
    }
    val saldo: Double = 150.00;
    println(
        "Escolha uma opção: \n" +
                "1. Ver saldo\n" +
                "2. Extrato\n" +
                "3. Fazer saque\n" +
                "4. fazer deposito\n" +
                "5. Transferência\n" +
                "6. sair"
    );
    val opcao = readln().toInt();

    when (opcao) {
        1 -> verSaldo(saldo);
        2 -> extrato();
        3 -> fazerSaque(saldo);
        4 -> fazerDeposito(saldo);
        5 -> trasferencia(saldo);
        6 -> sair(nomeCLiente);
        else -> erro();
    }
}

fun verSaldo(saldo: Double) {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    println("Seu saldo atual é: $saldo");
    println("======//======")
    menu();
}

fun fazerDeposito(saldo: Double) {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    println("Qual o valor para o deposito");
    val deposito = readln().toDouble();
    val soma: Double;
    if (deposito <= 0) {
        println("Infome um valor valido.");
        fazerDeposito(saldo);
        println("======//======")
    } else {
        soma = saldo + deposito;
        verSaldo(soma);
        println("======//======")
    }
}

fun fazerSaque(saldo: Double) {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    println("Qual o valor do saque");
    val saque = readln().toDouble();
    val sub: Double;
    if (saque <= 0) {
        println("Informe um valor valido.");
        fazerSaque(saldo);
        println("======//======")
    } else {
        sub = saldo - saque;
        if (sub < 0) {
            println("Operação não autorizada")
            fazerSaque(saldo);
            println("======//======")
        } else verSaldo(sub);
    }
}

fun extrato() {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    val compras = mutableListOf<String>("Pão", "Suco", "Cenoura");
    val depositos = mutableListOf<String>("Cheque", "Transferência");
    for (i in 0..<compras.size) {
        println("${compras[i]} compra");
    }
    for (j in 0..<depositos.size) {
        println("${depositos[j]} deposito");
    }
}

fun trasferencia(saldo: Double) {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    println("Informe o numero da conta");
    val conta = readln().toInt();
    println("Qual o valor da transferência?");
    val trasnferencia = readln().toInt();
    if (trasnferencia <= 0) {
        println("Operação não autorizada");
        trasferencia(saldo)
    }
    if (trasnferencia > saldo) {
        println("Operação não autorizada")
    } else {
        val sub = saldo - trasnferencia;
        println("transferencia para conta $conta realizada com sucesso");
        verSaldo(sub);
    }
}

fun palavraPasse(senha: Int) {
    if (senha != 3589) {
        println("Senha incorreta");
        menu();
    }
}

fun sair(nome: String) {
    println("$nome, foi um prazer ter você por aqui!");
}

fun erro() {
    println("Erro, escolha as opções 1- para ver o saldo/ 2- para extrato/ 3- para fazer um saque/ 4- para fazer um deposito/ 5- para fazer uma transferência/ 6- se deseja sair");
}