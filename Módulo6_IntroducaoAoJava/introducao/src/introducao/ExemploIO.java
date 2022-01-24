package introducao;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ExemploIO {

    public static void main(String[] args) {

        LocalDateTime date = LocalDateTime.now();

        System.out.println("args = " + args);

        System.out.printf("Hoje é o dia  %td do mês %1$tB  do ano %1$tC. O hhorário é %1$tH:%1$tM:%1$tS", date, date);

        //DateTimeFormatter

    }
}
