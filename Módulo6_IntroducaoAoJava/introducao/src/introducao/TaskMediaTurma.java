package introducao;

import java.util.Scanner;

public class TaskMediaTurma {

    public static void main(String[] args){

        Scanner quantidadeAlunos = new Scanner(System.in);
        Scanner entradaNotas = new Scanner(System.in);
        int numeroAlunos = 0;
        int media = 0;

        System.out.printf("Indique a quantidade de Alunos");
        numeroAlunos = quantidadeAlunos.nextInt();

        int notasAlunos[] = new int[numeroAlunos];

        int i = 0;
        for (i = 0; i < numeroAlunos; i++){
            System.out.println("Digite as notas: ");
            notasAlunos[i] = entradaNotas.nextInt();
        }

        for (int nota: notasAlunos){
            media +=nota;
        }

        media /= numeroAlunos;


        System.out.printf("A media da nota dos %d dos alunos é %d: ", numeroAlunos, media);
        entradaNotas.close();
        quantidadeAlunos.close();
    }
}
