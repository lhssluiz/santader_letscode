package introducao;

import java.util.Scanner;

public class Loops {

    public static void main(String [] args) {

        int valorRecebido = 0;
        int media = 0;
        int counter = 0;
        Scanner input  = new Scanner(System.in);

        while (valorRecebido!=-1) {
            System.out.println("Digite uma nota de 0 a 10");
            valorRecebido = input.nextInt();

            if (valorRecebido!=-1) {

                media = valorRecebido + media;
                counter++;
            }
        }

        media = media / counter;

        System.out.format("Esse é o resultado da média: " +
                "%1$d das %2$d notas digitadas", media, counter);

        input.close();

        double[] vetor = new double[4];
         for (int i =0; i <vetor.length; i++) {
            if(i==2){
                System.out.println(vetor[i]);
            }
        }

         for (double v: vetor) {
             System.out.println(v);
         }

    }

}
