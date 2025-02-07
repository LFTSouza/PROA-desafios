package Classes.Events

import Objects.ColoradoOuLaranjaObj
import Objects.PeopleEnvitedObj

class EventOrganization(
    private val eventDates: EventDates
) {

    val colorado = "Colorado";
    val laranja = "Laranja";

    fun location() {
        println("Qual a quantidade de convidados para o evento");
        val peopleEnvited = readLine()?.toIntOrNull() ?: 0;
        PeopleEnvitedObj.peopleEnvited = peopleEnvited;
        when {
            (peopleEnvited > 350 || peopleEnvited <= 0) -> {
                if (peopleEnvited > 350) {
                    println("Quantidade de convidados superior à capacidade máxima ou informe uma quantidade máxima");
                    location();
                };
                location();
            };
            (peopleEnvited > 220) -> {
                println("O auditório colorado é preferivel");
                ColoradoOuLaranjaObj.auditorio = colorado;
                println("Agora vamos ver o agendamento do evento");
            };
            (peopleEnvited > 150) -> {
                println("Use o auditório laranja (inclua mais ${(150 + 70) - peopleEnvited} cadeiras)");
                ColoradoOuLaranjaObj.auditorio = laranja;
                println("Agora vamos ver o agendamento do evento");
            };
            (peopleEnvited in 1..150) -> {
                println("Use o auditório laranja")
                ColoradoOuLaranjaObj.auditorio = laranja;
            };
        };
        eventDates.date();
    };
};