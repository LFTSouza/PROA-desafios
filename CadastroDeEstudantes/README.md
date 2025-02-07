# :school: Cadastro de estudantes
Essa atividade teve como proposta incial realizar um cadastro de estudantes e cada vez que um estudante é cadastrado é feita a pergunta
"A lista está com pleta? deseja continuar? Pare para parar / Não para continuar", mas eu quis me desafiar e fiz com POO(progrmação orientada a objeto).

O código previsto para à atividade é:

```
open class Base(final override val _nome: String) : IAluno {

    open var name: String = _nome;

    private val caminho = Caminho();

    fun gravar() {
        do {
            caminho.adicionarElemento(name);
            println("A lista está completa? (Não) para continuar/Pare para parar");
            val stop = readln();
        } while (stop != "Pare")
    }

    fun lista() {
        val listaDeAlunos = caminho.getLista()

        listaDeAlunos.forEach()
        {
            println(it);
        }
        println(listaDeAlunos.size);
    }
}
```
Mas, o desafio que propus para mim mesmo foi fazer esta atividade com todo conhecimento acumulado que tive até aqui.

```
fun main() {
    val caminho = Caminho();
    val gravador = GravadorAluno(caminho);
    val exibir = MostrarAlunos(caminho);
    val menu = Menu(gravador, exibir);
    menu.registrar();
}
```
Essa é a função principal que é o ponto de partida do sistema. A classe menu é referênciada e recebe os seguintes argumentos "gravador" e "exibir", onde o gravador é uma refência de
"GravadorAluno" e "exibir" é uma referência de mostrarAlunos, essas referências tem como argumento o "caminho". Onde são gerenciadas as listas dos alunos com os métodos "get" e "set".
A referência "menu" é instânciada e é chamado o método registrar.
```
class Menu(private val gravadorAluno: GravadorAluno, private val mostrarAlunos: MostrarAlunos)
{
    fun registrar()
    {
        do {
            println("Digite o nome do aluno");
            val nomeDigitado = readln();
            val aluno = Aluno(nomeDigitado);
            gravadorAluno.gravar(aluno);
            println("A lista está com pleta? deseja continuar? Pare para parar / Não para continuar")
            val stop = readln();
        }while (stop != "Pare")
        mostrarAlunos.listar();
    }
}
```
A classe menu tem a responsabilidade de fazer uma ponte entre o sistema e o suário. O construtor da classe possui as referências "gravadorAluno" e "mostrarAlunos". No método "registrar"
o usuário recebe a mensage "Digite o nome do aluno" o usuário vai digitar o nome do aluno e a instância "gravadorAluno.gravar" captura o nome do aluno e colocando o nome dele em uma lista.
Após esses processos, o usuário recebe a mensagem "A lista está com pleta? deseja continuar? Pare para parar / Não para continuar" se o usuário digitar "não", no sentido que a lista ainda não
está completa a lista vai continuar, caso o usuário digite "pare" o looping vai interromper e irá mostrar a lista de alunos

exemplo:
```
Digite o nome do aluno:
Luiz

A lista está com pleta? deseja continuar? Pare para parar / Não para continuar:
Pare

[Luiz]
```
```
open class GravadorAluno(private val caminho: Caminho): IGravador {
    override fun gravar(aluno: IAluno) {
        caminho.adicionarElemento(aluno._nome);
    }
}
```
A classe "GravadorAluno" possui como argumento a referência "caminho" que é citado no código: 1, e implementa a interface IGravador Código: 2
que possui o método gravar que possui como argumentos o aluno implementando da interface IAluno. O método gravar sobrescreve o método gravar de IGravador e a instância de "caminho.adicionarElemento"
recebe o nome do aluno.
```
código: 1

open class Caminho: ICaminho
{
    private val lista = mutableListOf<String>();

    override fun getLista(): List<String>
    {
        return lista.toList();
    }

   override fun adicionarElemento(elemento: String)
    {
        lista.add(elemento)
    }
}
```
A classe Caminho implementa a interface ICaminho para sobrescrever os métodos "getLista" e "adicionarElemento". O método "adicionarElemento" é responsável por adicionar os nomes dos alunos
para a lista mutável "lista" e o método "getLista" converte a lista mutável em uma lista de string (List: <String>) e retorna uma lista.
```
Código: 2
interface IGravador {
    fun gravar(aluno: IAluno);
}
```
```
class MostrarAlunos(private val caminho: Caminho) {
    fun listar()
    {
        val alunos = caminho.getLista();
        alunos.forEach(){ println(it) }
        println("O total de alunos é: ${alunos.size+1}");
    }
}
```
A classe "MostrarAlunos" tem a responsabilidade de mostrar o alunos cadastrados. E tem como argumento a referência caminho coódigo: 1. O método listar a constante "alunos" é criada recebendo
a lista de alunos e para cada nome dentro da constante aluno vai ser exibido no console os nomes dos alunos e a quantidade de alunos cadastrados.

Saída de dados:
```
[Luiz, Mario, Rebecca]
O total de alunos é: 3
```
