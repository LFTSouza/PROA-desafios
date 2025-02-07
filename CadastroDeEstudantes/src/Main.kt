import Classes.Base
import Classes.Caminho
import Classes.GravadorAluno
import Classes.MostrarAlunos
import Classes.menu.Menu

fun main() {
    val caminho = Caminho();
    val gravador = GravadorAluno(caminho);
    val exibir = MostrarAlunos(caminho);
    val menu = Menu(gravador, exibir);
    menu.registrar();
}
