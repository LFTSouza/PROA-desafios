package Classes

import Interface.IAluno
import Interface.ICaminho
import Interface.IGravador

open class GravadorAluno(private val caminho: Caminho): IGravador {
    override fun gravar(aluno: IAluno) {
        caminho.adicionarElemento(aluno._nome);
    }
}