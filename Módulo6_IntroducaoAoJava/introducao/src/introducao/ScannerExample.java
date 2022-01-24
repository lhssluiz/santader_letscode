package introducao;

import java.util.Scanner;

public class ScannerExample {

    public static void main(String[] args) {
        int primeiro, segundo;
        Scanner input = new Scanner(System.in);

        System.out.println("Digite o primeiro número: ");
        primeiro = input.nextInt();
        System.out.println("Digite o segundo número: ");
        segundo = input.nextInt();


        System.out.println("O primeiro número foi " + (primeiro + segundo));
    }
}
