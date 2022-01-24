package br.com.letscode.introducao.base.oo.banco.model;

public class FuncionarioRH extends Funcionario {

    public FuncionarioRH(String nome, String sobrenome, int idade) {
        super(nome, sobrenome, idade);
    }

    @Override
    public void trabalhar() {
        System.out.println("Olando o relógio de ponto dos demais funcionarios");
    }

    public void darAumento(Gerente gerente){
        System.out.println("O funcionário recebeu o aumento" + gerente + "ganhou um aumento");

    }

    public void darAumento(FuncionarioRH funcionarioRH){
        System.out.println("O funcionário recebeu o aumento"+ funcionarioRH + "ganhou um aumento");
    }
}
