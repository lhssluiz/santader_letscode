package introducao;

import java.util.Scanner;

public class ControleFluxo {

    public static void main(String[] args) {

        int b = (int) (Math.random() * 10);

        if(b<3) {
            System.out.println("Baixo");
        }
        else if (b>6) {
            System.out.println("alto");
        }
        else {
            System.out.println("par");
        }

        int testeTamanho = args.length;
        int primeiro;
        int segundo;
        Scanner input = new Scanner(System.in);

        if (testeTamanho == 0) {
            System.out.println("Escreva o primeiro dígito: ");
            primeiro = input.nextInt();

            System.out.println("Escreva o segundo dígito: ");
            segundo = input.nextInt();

            System.out.println("Resultado da soma dos números: "+ (primeiro + segundo));
        } else if (testeTamanho == 1) {
            System.out.println("Digite o segundo número: ");
            segundo = input.nextInt();

        } else if (testeTamanho == 2){
            System.out.printf("a soma de %d e %d são " + (args[0] + args[1]), args[0], args[1]);
        } else {
            System.err.print("Errrroooou");
        }
    }

}


