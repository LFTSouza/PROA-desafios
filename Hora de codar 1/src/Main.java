import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner nome = new Scanner(System.in);

        // exercicio 1
       /*
       String nome_do_carro = "Fusca";
       System.out.println(nome_do_carro);
       */

        // exercicio 2
       /*
       String name;

       System.out.println("Digite seu nome");
       name = nome.nextLine();
       System.out.println(name);
       */

        // exercicio 3
        /*
        String name;
        int idade;

        System.out.println("Digite seu nome");
        name = nome.nextLine();
        System.out.println("Digite sua idade");
        idade = nome.nextInt();
        System.out.println("Seu nome é " + name + " e sua idade é " + idade);
        */


        int base, altura, lado, dMaior, dMenor, bMaior, bMenor, raio, escolha, result;
        float resultado, pi;

        System.out.println("Escolha qual das figuras deseja efetuar a operação \n" +
                "1- Retangulo; \n" +
                "2- Quadrado; \n" +
                "3- Losangulo \n" +
                "4- Trapézio \n" +
                "5- Paralelograma \n" +
                "6- Triângulo \n" +
                "7- Circulo \n");

        escolha = nome.nextInt();

        switch (escolha) {
            case 1:
                System.out.println("Digite o comprimento da base");
                base = nome.nextInt();
                System.out.println("Digite o comprimento da altura");
                altura = nome.nextInt();
                result = altura * base;
                System.out.println(result);
                break;

            case 2:
                System.out.println("Digite o comprimento dos lados do quadros");
                lado = nome.nextInt();
                result = lado * lado;
                System.out.println(result);
                break;

            case 3:
                System.out.println("Digite o comprimento da diagoal maior");
                dMaior = nome.nextInt();
                System.out.println("Digite o comprimento da diagonal menor");
                dMenor = nome.nextInt();
                resultado = (float) (dMaior * dMenor / 2);
                System.out.println(resultado);
                break;

            case 4:
                System.out.println("Digite o comprimento da base maior");
                bMaior = nome.nextInt();
                System.out.println("Digite o comprimento da base menor");
                bMenor = nome.nextInt();
                System.out.println("Digite a altura");
                altura = nome.nextInt();
                resultado = (float) ((double) ((bMaior + bMenor) * altura) / 2);
                System.out.println(resultado);
                break;

            case 5:
                System.out.println("Digite o comprimento da base");
                base = nome.nextInt();
                System.out.println("Digite o comprimento da altura");
                altura = nome.nextInt();
                result = base * altura;
                System.out.println(result);
                break;

            case 6:
                System.out.println("Digite o comprimento da base");
                base = nome.nextInt();
                System.out.println("Digite o comprimento da altura");
                altura = nome.nextInt();
                resultado = (float) ((double) base * altura / 2);
                System.out.println(resultado);
                break;

            case 7:
                System.out.println("Digite o numero de pi");
                pi = nome.nextFloat();
                System.out.println("Digite o valor do raio");
                raio = nome.nextInt();
                resultado = (float) (pi * Math.pow(raio, 2));
                System.out.println(resultado);
                break;
        }
    }
}