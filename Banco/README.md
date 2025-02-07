# 🏦 Banco
Uma das atividades propostas pelo instituto PROA. O sistema tem a proposta de simular as ações de saque, visualizar o extrato e depositar dinheiro.
## Tecnologia
- kotlin
## Metodologia
```
> var nomeCLiente = "";
var contadorDeChamadas = 0;
```
essas variáveis são globais. A variável "nomeCLiente" vai armazenar o nome do cliente e o "contadorDeChamadas" vai verificar se a função cliente já foi chamada.

```
 fun cliente() {
    contadorDeChamadas++;
    println("Informe seu nome");
    nomeCLiente = readln();
    println("Olá $nomeCLiente é um prazer ter você por aqui!");
    println("======//======")
}
```
Uma função especifica para o cliente. Onde o cliente vai informar seu nome e exibirá uma mensagem no console "Olá $nomeCLiente é um prazer ter você por aqui!".

```
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
```
Essa função tem como objetivo fazer a ponte entre o cliente e as funcionalidades do banco. 1- Ver saldo, 2- Extrato, 3- Fazer saque, 4- Fazer deposito, 5, Transferências, 6- sair

```
fun verSaldo(saldo: Double) {
    println("Password");
    val senha = readln().toInt();
    palavraPasse(senha);
    println("Seu saldo atual é: $saldo");
    println("======//======")
    menu();
}
```
Esse método tem a função de revelar seu saldo atual, mas para ter acesso ao seu saldo terá que digitar sua senha

```
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
```
O método de deposito segue a mesma lógica da função "verSaldo" que para ter acesso o usuário terá que colocar a senha. E o valor do deposito não pode ser igual ou menor que 0 (zero), caso o usuário faça isso, exibirá a mensagem "Infome um valor valido." e retornará para a execução da função com uma recursiva.
```
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
```
Um método responsável pelo saque do cliente. Onde o saque não pode ser menor ou igual a 0 (zero).
```
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
```
Um método resoponsável pela exibição do extrato bancario do cliente. Onde suas compras e depósitos são armazenados em array's e são exibidos ao acessar a função
```
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
```
Um método responsável pelas transferencias de um cliente para outro cliente. Onde o usuário tem que informar o número da conta do destinatário e o valor da transferência, essa transferencia não pode ser menor ou igual a 0 (zero).
```
fun palavraPasse(senha: Int) {
    if (senha != 3589) {
        println("Senha incorreta");
        menu();
    }
}
```
Método que armazena a senha. A senha é um valor truncado, pois foi a pedido do exercício.
```
fun sair(nome: String) {
    println("$nome, foi um prazer ter você por aqui!");
}
```
Método que exibe uma mensagem de erro, caso o usuário escolha uma opção além das quais se encontram no menu.
```
fun erro() {
    println("Erro, escolha as opções 1- para ver o saldo/ 2- para extrato/ 3- para fazer um saque/ 4- para fazer um deposito/ 5- para fazer uma transferência/ 6- se deseja sair");
}
```
