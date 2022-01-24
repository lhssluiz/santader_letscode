package introducao;

import javax.swing.*;
import java.util.Scanner;
import java.util.stream.StreamSupport;

public class Task3Java {

    public static void main(String[] args) {
        IMC();
    }

    public static void olderYonger(){
        Scanner input = new Scanner(System.in);
        String arrayNamesAges[][] = new String[2][5];
        int i = 0, j = 0, bigger=0, smaller=999999999, average=0;
        int posicaoMenorIdade=0, posicaoMaiorIdade=0;

        for (i = 0; i<arrayNamesAges.length;i++) {
            for (j = 0; j<arrayNamesAges[i].length;j++) {
                if (i == 0) {
                    System.out.println("\nPlease, insert the person's name: ");
                    arrayNamesAges[i][j] = input.nextLine();
                }
                if (i == 1) {
                    System.out.println("\n Please, insert the person's age: ");
                    arrayNamesAges[i][j] = input.nextLine();

                    if (Integer.parseInt(arrayNamesAges[i][j]) > bigger) {
                        bigger = Integer.parseInt(arrayNamesAges[i][j]);
                        posicaoMaiorIdade = j;

                    }

                    if (Integer.parseInt(arrayNamesAges[i][j]) < smaller){
                        smaller = Integer.parseInt(arrayNamesAges[i][j]);
                        posicaoMenorIdade = j;
                    }

                    average = average + Integer.parseInt(arrayNamesAges[i][j]);
                }

            }
        }

        average = average/arrayNamesAges[1].length;

        System.out.printf("\nA pessoa mais velha é: %s com idade de %s anos", arrayNamesAges[0][posicaoMaiorIdade],arrayNamesAges[1][posicaoMaiorIdade]);
        System.out.printf("\nA pessoa mais nova é: %s com idade de %s anos", arrayNamesAges[0][posicaoMenorIdade], arrayNamesAges[1][posicaoMenorIdade]);
        System.out.printf("\nEsta é a média das idades: %s", average);

    }

    public static void IMC(){
        Scanner input = new Scanner(System.in);
        String arrayNamesAges[][] = new String[5][4];
        double IMC, altura=0, peso=0;
        int i = 0, j = 0, bigger=0, smaller=999999999, average=0;
        int posicaoMenorIdade=0, posicaoMaiorIdade=0;

        for (i = 0; i<arrayNamesAges.length;i++) {
            for (j = 0; j<arrayNamesAges[i].length;j++) {
                if (j == 0) {
                    System.out.printf("%n%s. Please, insert the person's name: ",i+1);
                    arrayNamesAges[i][j] = input.nextLine();
                }
                if (j == 1) {
                    System.out.printf("%s. Please, insert the person's height in centimeters: ",i+1);
                    arrayNamesAges[i][j] = input.nextLine();
                }

                if (j == 2) {
                    System.out.printf("%s. Please, insert the person's weight: ",i+1);
                    arrayNamesAges[i][j] = input.nextLine();
                }

                if ( j == 3 ) {
                    altura = Double.parseDouble(arrayNamesAges[i][j-2]);
                    altura = altura/100;
                    peso = Double.parseDouble(arrayNamesAges[i][j-1]);

                    IMC = peso/(altura*altura);

                    System.out.printf("IMC atual: %s", IMC);
                    if (IMC >= 18.5 && IMC <= 25 ){
                        arrayNamesAges[i][j] = "Dentro do peso ideal";
                    } else {
                        arrayNamesAges[i][j] = "Fora do peso ideal";
                      }
                }

            }

        }

        for (j = 0; j<arrayNamesAges.length;j++) {
            if (arrayNamesAges[j][3] == "Fora do peso ideal"){
                System.out.printf("\n%s está fora do peso ideal", arrayNamesAges[j][0]);
            }
        }

    }


    public static void evenCapsLock() {
        Scanner input = new Scanner(System.in);
        String word;
        float increment = 0;

        System.out.println("Please, insert the word: ");
        word = input.nextLine();

        char[] wordAuxiliar = new char[word.length()];


        for (int i = 0; i< word.length();i++) {
            increment = i;
//            System.out.printf("\n Valor da divisão: %s", ((increment+1) % 2));
            if (((increment+1) % 2) != 0) {
                wordAuxiliar[i] = word.toUpperCase().charAt(i);
            } else {
                wordAuxiliar[i] = word.charAt(i);
            }

        }

        System.out.println("Letras ímpares em Maiúsculo: " + new String(wordAuxiliar) );

    }

    public static void biggerWord(){
        Scanner input = new Scanner(System.in);
        String[] guestsList = new String[5];
        String biggerWord="";

        for (int i = 0; i<5; i++) {
            System.out.println("Please, insert the guest name: ");
            guestsList[i] = input.nextLine();
        }

        for (int i = 0; i < 5; i++) {
            if (guestsList[i].length() > biggerWord.length()) {
                biggerWord = guestsList[i];
            }
        }

        System.out.printf("This is the biggest word: %s", biggerWord);

    }

    public static void carrinhoCompras () {

        Scanner input = new Scanner(System.in);
        String[] arrayFruits = new String[5];

        for (int i = 0; i<5; i++) {
            System.out.println("Please, insert your set with 5 fruits: ");
            arrayFruits[i] = input.nextLine();
        }

        for (String fruits: arrayFruits) {
            System.out.printf("\n Fruta: %s", fruits);
        }

    }

    public static void reverseWord() {
        Scanner input = new Scanner(System.in);
        String word;
        System.out.print("Digite a palavra que você quer reverter: ");
        word = input.nextLine();

        for (String reverseWord: word.split(" ")) {
            System.out.print(new StringBuilder(reverseWord).reverse().toString());
        }
    }

    public static void oddEven(){
        Scanner input = new Scanner(System.in);
        int[] arrayNumbers = new int[5];
        int numbers;


        for (int i =0; i <5; i++ ) {
            System.out.printf("\n Digite o %sº: ", i+1);
            arrayNumbers[i] = input.nextInt();
        }

        for (int i = 0; i<5;i++){
            if (arrayNumbers[i] % 2 != 0) {
                System.out.printf("\n Valor ímpar: %s", arrayNumbers[i]);
            }
        }

        for (int i = 0; i<5;i++){
            if (arrayNumbers[i] % 2 == 0) {
                System.out.printf("\n Valor par: %s", arrayNumbers[i]);
            }
        }

    }

    public static void biggerSmallerAverage(){
        Scanner input = new Scanner(System.in);
        int[] arrayNumbers = new int[5];
        int numbers=0, bigger=0, smaller=999999999;
        int average=0;


        for (int i =0; i <5; i++ ) {
            System.out.printf("\n Digite o %sº: ", i+1);
            arrayNumbers[i] = input.nextInt();
            average = average + arrayNumbers[i];

            if (arrayNumbers[i] > bigger) {
                bigger = arrayNumbers[i];
            }

            if (arrayNumbers[i] < smaller){
                smaller = arrayNumbers[i];
            }
        }

        average = average/arrayNumbers.length;
        System.out.printf("\n Esse é o maior número: %s. Esse é o menor número: %s. E esta é a média: %s ", bigger, smaller, average);
    }

}
