package introducao;

import java.util.Scanner;

public class Array {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int[] vetor = new int[2];

        vetor[0] = 1;

        System.out.println(vetor);
        System.out.println(vetor[0]);

        vetor[0] = 1;
        System.out.println(vetor[1]);

        vetor[2] = 2;
        System.out.println(vetor[2]);

    }
}
