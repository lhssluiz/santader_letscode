package br.com.letscode.introducao.base.oo.banco.model;

import java.math.BigDecimal;

public class Conta {

    public static String nomeBanco = "LETSCODE";

    public static int quantidadeContas = 0;

    private int numeroConta;
    private BigDecimal saldo;
    private TipoConta tipo;

    //Construtor
    public Conta(){
        numeroConta = ++quantidadeContas;
        this.saldo = BigDecimal.ZERO;
        tipo = TipoConta.CP;
    }

    public void setTipo(TipoConta tipo) {
        this.tipo = tipo;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public BigDecimal saque(BigDecimal valor) {
        if (valor.compareTo(saldo) > 0) {
            if (tipo == TipoConta.CONTA_CORRENTE) {
                this.saldo = this.saldo.subtract(valor);
                System.out.printf("Foi efetuado um saque no valor de %s. Você está usando %s do cheque especial%n",
                        valor, saldo);
            } else {
                System.err.printf("Não foi possível efetuar um saque no valor de %s. O Saldo de %s é insuficiente%n",
                        valor, saldo);
            }
        } else {
            this.saldo = this.saldo.subtract(valor);
            System.out.printf("Foi efetuado um saque no valor de %s. O Saldo resultante é %s%n", valor, saldo);
        }
        return this.saldo;
    }

    public BigDecimal deposito(BigDecimal valor) {
        saldo = saldo.add(valor);
        System.out.printf("Foi efetuado um depósito no valor de %s. O Saldo resultante é %s%n", valor, saldo);
        return saldo;
    }

    @Override
    public String toString() {
        return tipo + "Conta{" +
                "numeroConta=" + numeroConta +
                ", saldo=" + saldo +
                '}';
    }
}
