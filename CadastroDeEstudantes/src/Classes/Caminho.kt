package Classes

import Interface.ICaminho

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