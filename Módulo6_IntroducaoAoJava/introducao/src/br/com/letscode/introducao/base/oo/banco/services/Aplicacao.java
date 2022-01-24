package br.com.letscode.introducao.base.oo.banco.services;
import br.com.letscode.introducao.base.oo.banco.model.*;


import java.math.BigDecimal;


public class Aplicacao<pessoa1> {

    public static void main(String[] args){
        Gerente gerente = new Gerente("Tio", "Patinhas", 70);
        Pessoa potencialCliente = new Pessoa("Luiz", "henrique",27);
        ClientePessoa clientePessoa = gerente.abrirContaPessoal(potencialCliente);

        Cliente cliente1 = new ClientePessoa("Bruno", "Pinho", 18);
        Cliente cliente2 = new ClienteEmpresa("Tabajara","321354654987");

        //efetuaoperacoes(cliente);


        System.out.println(Conta.nomeBanco);

//        ClientePessoa clientePessoa = new
//                ClientePessoa("Bruno", "Pinho", 18);

//        Conta conta1 = new Conta();
//        conta1.saque(BigDecimal.TEN);
//        conta1.deposito(BigDecimal.TEN);
//        conta1.saque(BigDecimal.ONE);

//        System.out.println(conta1);

        Pessoa pessoa1 = new Pessoa("Bruno", "Pinho", 65);
//    pessoa1.setIdade(65);
//    pessoa1.setNome("Bruno");
//    pessoa1.setSobrenome("Pinho");


    }

    private static void efetuaoperacoes(Cliente clientePessoa){
        clientePessoa.getConta().setTipo(TipoConta.CONTA_CORRENTE);
        clientePessoa.getConta().saque(BigDecimal.TEN);
        clientePessoa.getConta().deposito(BigDecimal.TEN);
        clientePessoa.getConta().saque(BigDecimal.ONE);
        System.out.println(clientePessoa.getConta());
        System.out.println(clientePessoa);

        System.out.println(clientePessoa);

    }


}
