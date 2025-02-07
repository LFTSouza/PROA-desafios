package Classes.menu

import Classes.Aluno
import Classes.Base
import Classes.GravadorAluno
import Classes.MostrarAlunos

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