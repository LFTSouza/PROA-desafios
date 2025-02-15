# 🏨 Hotel para Terabitia
A proposta desta atividade é auxiliar o gerenciamento de um hotel, por exemplo, cadastro de hospedes, pesquisa de hospedes, organização de eventos e entre outros.

//Tornar o nome do hotel mutavel

# Técnologia
A Técnologia utilizada para a realização desta atividade foi unicamente a linguagem Kotlin.

# Metodologia


```
//Código - 1

class Usuario {

    fun usuario() {
        var usuario = "";
        print("Insira o seu usuario: ");
        usuario = readln();
        Usuariobj.nome = usuario;
        print("Insira sua senha: ");
        val senha = readln().toInt();
        if (senha != 2687) {
            println("Senha incorreta");
            usuario();
        }
    }
}
```
O primeiro passo do usuário é realizar sua identificação e informar a senha padrão do hotel ( Senha esta que foi proposta na atividade. ).
Irei utilizar um nome ficticio para utilizar como exemplo.
```
//Código - 2

class Menu(
    private val cadastrarHospede: CadastrarHospede,
    private val pesquisarHospede: PesquisarHospede,
    private val menureserva: Menureserva,
)
{

    private val nomeHotel = "Sauble"
    private var interrompe = true;

    fun menu() {

        println("Seja bem-vinda(o) ao hotel $nomeHotel, ${Usuariobj.nome} É um prazer ter você por aqui!");

        while (interrompe) {
            println("\nCadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Gerenciamento \n4. Sair");
            val escolha = readLine()?.toIntOrNull() ?: 0;
            when (escolha) {
                1 -> cadastrarHospede.cadastro();
                2 -> pesquisarHospede.pesquisar();
                3 -> menureserva.menuReservas();
                4 -> {
                    println("Você deseja sair? S/N")
                    if (readLine()?.equals("S", ignoreCase = true) == true) {
                        println("Muito obrigado e até logo, ${Usuariobj.nome}");
                        interrompe = false;
                    };
                };

                else -> println("Por favor, informe um número entre 1 e 3")
            };
        };
    };
};
```
Após identificar-se será apresentado o menu do hotel para o usuário, com a mensagem, Seja bem-vindo(a) ao hotel Sauble, Samuel É um prazer ter você por aqui!.
Logo abaixo será apresentado o menu tendo as seguintes opções: 1-Cadastrar hospede, 2- pesquisar hospede, 3- menu da reserva e 4- opção sair.

```
//Código - 3

class CadastrarHospede(
    private val gravarHospedeNome: GravarHospedeNome,
    private val gravarHospedeIdade: GravarHospedeIdade,
    private val caminhoHospedeNome: CaminhoHospedeNome,
    private val diarias: Diarias
) {
    private lateinit var novoNomeHospede: String;
    private var stop = "";
    private var soma = mutableListOf<Double>();
    private var meia = 0.0;
    private var qGratuito = 0;
    private var qmeias = 0;
    private var i = 0;

    fun cadastro() {

        diarias.diarias();

        do {
            i++
            if (i == 15) {
                println("Máximo de cadastros atingido");
                break;
            } else {
                print("Cadastro de Hóspedes. \nPor favor, informe o nome do Hóspede: ");
                novoNomeHospede = readLine() ?: "";
                gravarHospedeNome.gravarNome(novoNomeHospede);

                print("Por favor, informe a idade do Hóspede: ");
                val novoIdadeHospede = readln().toInt();

                when {
                    (novoIdadeHospede <= 0) -> {
                        println("Idade invalida");
                        cadastro();
                    };
                    (novoIdadeHospede <= 6) -> {
                        println("$novoNomeHospede possui gratuidade");
                        qGratuito++;
                    };
                    (novoIdadeHospede > 60) -> {
                        println("$novoNomeHospede paga meia");
                        meia = (day * qntDays) / 2;
                        qmeias++;
                        soma.add(meia);
                    };
                    else -> {
                        println("$novoNomeHospede paga inteira");
                        soma.add(day * qntDays);
                    };
                };

                gravarHospedeIdade.gravarIdade(novoIdadeHospede);
                println("Deseja encerrar o cadastro? Digite PARE para parar");
                stop = readln().lowercase();
            }
        } while (stop != "pare");

        println("$novoNomeHospede cadastrado com sucesso!");
        println("======//======");
        println(caminhoHospedeNome.getHospede());
        println("${Usuariobj.nome}, o valor total das hospedagens é: R$ ${soma.sum()}; $qGratuito gratuidade(s); $qmeias meia(s)");
    }
}
```
Para realizar o cadastro do hospede, primeiro, é perguntado qual o valor da diária e quantos dias o hospede irá ficar no hotel
e ambas informações vão ser guardadas em objetos específicos para armazenar estes dados, como é mostrado no "código - 4", após este processo, no "código - 3", o sistema pede para o hoteleiro
informar o nome do hospede e sua idade. Caso o tenha 6 anos de idade ou menos, mas maior que 0 o hospede tem entrada gratuita, mas se o hospede tiver idade maior que 60 anos, ele irá pagar
meia entrada, caso o hospede não atenda esses critérios ele irá pagar inteira. Após estes passos é informado ao hoteleiro se haverá mais algum hospede, se sim os passos anteriores
se repetem, mas se não é apresentado ao hoteleiro a mensagem de cadastro realizado com sucesso e aperecerá os nomes dos hospedes e mostrará o valor somado das hospedagens e a quantidade de
entradas gratuitas e meias.
```
// Código - 4

class Diarias {
    fun diarias() {
        println("Qual o valor da diária?");
        val day = readln().toDouble();
        DaysQntDaysObj.day = day
        if (day <= 0) {
            println("Dado incorreto");
            diarias();
        };
        println("Quantas diarias serão necessárias");
        val qntDays = readln().toDouble();
        DaysQntDaysObj.qntDays = qntDays;
        if (qntDays <= 0) {
            println("Dado incorreto");
            diarias();
        };
    };
};
```

```
// Código - 5

class Menureserva(
    private val reservaQuartos: ReservaQuartos,
    private val menuCadastro: MenuCadastro,
    private val eventOrganization: EventOrganization,
    private val abastecer: Abastecer,
    private val airConditioning: Air_conditioning
) {
    fun menuReservas() {
        while (true) {
            println("Selecione uma opção:\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Abastecimento de Carros\n4.) Eventos\n5.) Ar-Condicionado\n" +
                    "6.) Sair");

            val escolha = readLine()?.toIntOrNull() ?: 0

            when (escolha) {
                1 -> reservaQuartos.diarias();
                2 -> menuCadastro.menuCadastro();
                3 -> abastecer.abastecer();
                4 -> eventOrganization.location();
                5 -> airConditioning.company();
                6 -> {
                    println("Você deseja sair? S/N")
                    if (readLine()?.equals("S", ignoreCase = true) == true) {
                        break;
                    }
                }

                else -> println("Por favor, informe um número entre 1 e 4")
            }
        }
    }
}
```
O menu de reservas tem a finalidade de realizar as reserva dos quartos, cadastro de novos hospedes, abastecimento dos carros, eventos e o gerenciamento dos ares-condicionados.
```
// Código - 6

class ChooseRoom(private val caminhoRooms: CaminhoRooms) {
    fun choose() {
        caminhoRooms.setRoom().forEach(::println);
        var rep = true;
        println("======//======");
        while (rep) {
            println("Selecione o quarto (1-20)");
            val room = readln() + "-livre;";
            if (caminhoRooms.setRoom().contains(room)) {
                println("Livre");
                println("${Usuariobj.nome}, você confirma a hospedagem para $hospedeNome por $qntDays para o quarto ${room.removeSuffix("-livre;")} por ${qntDays * day}? S para sim/N para não");
                when {
                    readln().equals("S", ignoreCase = true) -> println("${Usuariobj.nome}, reserva efetuada para $hospedeNome");
                    readln().equals("N", ignoreCase = true) -> break;
                }
                rep = false;
            } else {
                println("Ocupado, escolha um quarto vago");
                println("======//======");
            };
        };
    };
};
```
Os quartos foram disponibilizados para mim em forma de string, então para separa-los, eu utilizei a função split para cortar a string em vários pedaços com " " como parâmetro para eliminar o espaço e todas
as letras juntas formam um array, como é informado no "código - 6". Após isso os quartos vão aparecer um a um para o hoteleiro e ele irá selecionar um quarto livre para os hospedes cadastrados e depois irá exibir
a seguinte mensagem "Livre" se o quarto estiver livre e depois aperecerá uma mensagem para confirmar a hospedagem e o looping se rompe e o hoteleiro irá retornar para o menu. Caso o hoteleiro selecione um quarto
ocupado, irá aparecer a mensaem "Ocupado, escolha um quarto vago".
```
// Código - 7

class CaminhoRooms {
    val quartos =
            "1-livre; 2-livre; 3-livre; 4-livre; 5-ocupado; 6-livre; 7-ocupado; 8-livre; 9-livre; 10-livre; 11-livre; 12-livre; 13-livre; 14-livre; 15-livre; 16-livre; 17-livre; 18-livre; 19-livre; 20-ocupado"
    val rooms = quartos.split(" ").toTypedArray();
    fun setRoom():List<String>{
        return rooms.toList();
    }
}
```
```
//Código - 8

class PesquisarHospede(
    private val caminho: CaminhoHospedeNome,
    private val cadastrarHospede: CadastrarHospede
) {
    fun pesquisar() {
        print("Pesquisa de Hóspedes. \nPor favor, informe o nome do Hóspede: ");
        val nome = readLine() ?: "";
        hospedeNome = nome
        if (caminho.getHospede().contains(nome)) {
            println("Encontramos o hospede");
            caminho.getHospede().filter { it.contains(nome) }.forEach(){
                println("Hospede $it foi encontrado");
            }
        } else {
            println("Não encontramos o hospede");
            cadastrarHospede.cadastro();
        };
    }
}
```
A pesquisa do nome dos hospedes funciona de maneira simples, o nome do hospede é digitado e o nome é gravado no objeto "hospedeNome" e realiza a verificação se no método "getHospede" conter o nome do usuário
e depois o nome do hospede vai ser exibido. Caso não encontre o nome do hospede, será enviada a mensagem avisando que o hospede não foi encontrado e o hoteleiro vai ser direcionado para o cadastro automáticamente.
```
//Código - 9

class Abastecer {
    fun abastecer() {
        println("Qual o valor do álcool no posto Wayne oil?");
        val priceAlchoolWayne = readln().toDouble();
        println("Qual o valor do gasolina no posto Wayne oil?");
        val priceGasWayne = readln().toDouble();
        println("Qual o valor do álcool no posto Stark petrol?");
        val priceAlchoolStark = readln().toDouble();
        println("Qual o valor do gasolina no posto Stark petrol?");
        val priceGasStark = readln().toDouble();
        when {
        priceGasWayne < priceGasStark || priceAlchoolWayne < priceGasStark ->
                porcentCalculator(priceGasWayne, priceAlchoolWayne, "Wayne oil");

        priceGasWayne > priceGasStark || priceAlchoolWayne > priceGasStark -> 
            porcentCalculator(priceGasStark, priceAlchoolStark, "Stark petrol");
        };
    };

    private fun porcentCalculator(price1: Double, price2: Double, nomePosto: String) {
        val precoPorLitro = price1 * 42
        val df = DecimalFormat("#.#", DecimalFormatSymbols(Locale.ENGLISH));
        val arredondado = df.format(precoPorLitro * 0.7).toDouble();
        assert(arredondado == 0.1);

        if (price2 <= arredondado) {
            println("É mais barato abastecer com álcool no $nomePosto.");
        } else {
            println("É mais barato abastecer com gasolina no $nomePosto.");
        };
    };
};
```
O hoteleiro vai informar o valor da gasolina e do álcool dos postos Wayne Oil e Stark petrol. Primeiro o sistema vai verificar qual é o menor preço e depois os valores serão lidos pela função "porcentCalculator"
onde, como proposto na atividade, o abastecimento padrão será sempre 42L. Então se o preço do álcool for 30% mais barato do que a gasolina, o preço do álcool vai ser o mais atraente, mas caso o contrário, a gasolina 
vai ser o mais atrativo.
```
```

```

