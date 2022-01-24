package introducao;

import java.util.Scanner;

public class Tarefa2Class {

    public static void conversorRealDolar(){

        Scanner input = new Scanner(System.in);
        double cotacaoDolar, valorReal;

        System.out.println("Digite a cotacao do dólar hoje: ");
        cotacaoDolar = input.nextDouble();

        System.out.println("Digite o valor em real para converter: ");
        valorReal = input.nextDouble();

        System.out.printf("Essa é a quantia em dólares: %.2f US$", cotacaoDolar*valorReal);

    }

    public static void conversorPolegadasParaCentimetros(){
        Scanner input = new Scanner(System.in);
        double valorPolegadas;

        System.out.println("Indique as polegadas para serem converitdas em Centímetros: ");
        valorPolegadas = input.nextDouble();

        System.out.printf("Esse é o resultado em centímetros: %f", valorPolegadas*2.54);
    }

    public static void conversorTemperatura(){
        Scanner input = new Scanner(System.in);
        double temperaturaInputCelsius;

        System.out.println("Indique a temperatura para ser converitda de Celsius para Fahrenheit: ");
        temperaturaInputCelsius = input.nextDouble();

        System.out.printf("Essa é a temperatura em Fahrenheit: %f", (temperaturaInputCelsius*1.8)+32);
    }

    public static void tabuada(){
        Scanner input = new Scanner(System.in);
        int numeroTabuada;

        System.out.println("Digite o número calcular a tabuada dele: ");
        numeroTabuada = input.nextInt();

        for (int i =0; i<11;i++) {
            System.out.printf("Multiplicação de %d x %d = %d %n", numeroTabuada,i, numeroTabuada*i);
        }
    }

    public static void operacoesBasicas(){
        Scanner input = new Scanner(System.in);
        int primeiroNumero, segundoNumero;
        int soma, subtracao, multiplicacao, divisao;

        System.out.println("Digite o primeiro número para a operação: ");
        primeiroNumero = input.nextInt();

        System.out.println("Digite o segundo número para a operação: ");
        segundoNumero = input.nextInt();

        System.out.printf("Esse é o resultado da soma dos valores: %d \n", primeiroNumero+segundoNumero);
        System.out.printf("Esse é o resultado da subtração dos valores: %d \n", primeiroNumero-segundoNumero);
        System.out.printf("Esse é o resultado da multiplicação dos valores: %d \n", primeiroNumero*segundoNumero);
        System.out.printf("Esse é o resultado da divisão dos valores: %d \n", primeiroNumero/segundoNumero);
    }

    public static void main(String[] args) {
        conversorRealDolar();
    }


}
