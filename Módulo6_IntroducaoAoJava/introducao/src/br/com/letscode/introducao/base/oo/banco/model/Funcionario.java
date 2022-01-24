package br.com.letscode.introducao.base.oo.banco.model;

import java.time.LocalDateTime;

public abstract class Funcionario extends Pessoa {

    public Funcionario(String nome, String sobrenome, int idade) {
        super(nome, sobrenome, idade);
    }

    public abstract void trabalhar();

    public void baterPonto() {
        System.out.println("Horario de batida de ponto: " + LocalDateTime.now());
    }
}
