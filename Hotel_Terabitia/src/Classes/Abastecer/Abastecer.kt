package Classes.Abastecer

import Objects.Usuariobj

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
/*
* informar os valores de alcool e gasolina;
* calcular qual combustivel é mais atraente? e mais barato;
* tanque tem 42L de capacidade e sempre será o volume a ser abastecido
* Quando o alcool estiver 30% mais barato que a gasolina, é mais barato abastecer com alcool.
*
* 100% - 30% = 70% -> price1 * 70% = 4,2 ou 4,1999 no Kotlin, mas basta arredondar.
* */
