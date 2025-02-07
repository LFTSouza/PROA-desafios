package Classes

import Classes.menu.Menu
import Interface.IAluno

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