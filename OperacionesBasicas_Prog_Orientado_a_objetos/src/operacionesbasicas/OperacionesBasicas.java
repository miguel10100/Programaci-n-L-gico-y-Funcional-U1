package operacionesbasicas;

import javax.swing.JOptionPane;

/**
 *
 * @author Miguel Tun Tuz
 */
public class OperacionesBasicas {

    public static void main(String[] args) {
        double n1, n2, res;

        //llamamos al objeto  
        Operaciones objSuma = new Operaciones();

        n1 = Double.parseDouble(JOptionPane.showInputDialog("introduce el primer numero de la suma"));
        n2 = Double.parseDouble(JOptionPane.showInputDialog("introduce el segundo numero de la suma"));

        objSuma.setNumero1(n1);
        objSuma.setNumero2(n2);
        objSuma.Suma();
        res = objSuma.getResultado();

        JOptionPane.showMessageDialog(null, "El resultado es " + res);

        n1 = Double.parseDouble(JOptionPane.showInputDialog("introduce el primer numero de la resta"));
        n2 = Double.parseDouble(JOptionPane.showInputDialog("introduce el segundo numero de la resta"));

        objSuma.setNumero1(n1);
        objSuma.setNumero2(n2);
        objSuma.Resta();
        res = objSuma.getResultado();

        JOptionPane.showMessageDialog(null, "El resultado es " + res);
    }

}
