package operacionesbasicas;
/**
 *
 * @author Miguel Tun Tuz
 */
public class Operaciones {

    //declaramos los atributos
    //un objeto tiene metodos y atributos
    //private por que solo un objeto puede acceder 
    private double numero1;
    private double numero2;
    private double resultado;

    //Declaramos al constructor
    public Operaciones() {
        numero1 = 0;
        numero2 = 0;
        resultado = 0;
    }

    public double getNumero1() {
        return numero1;
    }

    public void setNumero1(double numero1) {
        this.numero1 = numero1;
    }

    public double getNumero2() {
        return numero2;
    }

    public void setNumero2(double numero2) {
        this.numero2 = numero2;
    }

    public double getResultado() {
        return resultado;
    }

    public void setResultado(double resultado) {
        this.resultado = resultado;
    }

    //metodo - objeto
    public void Suma() {
        resultado = numero1 + numero2;
    }

    public void Resta() {
        resultado = numero1 - numero2;
    }
}
