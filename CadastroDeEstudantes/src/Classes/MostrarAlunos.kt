package Classes

class MostrarAlunos(private val caminho: Caminho) {
    fun listar()
    {
        val alunos = caminho.getLista();
        alunos.forEach(){ println(it) }
        println("O total de alunos é: ${alunos.size}");
    }
}