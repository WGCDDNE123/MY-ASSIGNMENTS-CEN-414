

/**
 * CLASS
 */
public class Mathwork {
    public static void main(String[] args) {
        //System.out.println("Blessed are you Lord");
        System.out.println(Math.sqrt(9));
        System.out.println(Math.abs(0-9));
        System.out.println(Math.pow(0, 9));
        System.out.println(Math.abs(0-9));
        System.out.println(Math.exp(0));
        System.out.println(Math.pow(0, -3));
        System.out.println("\n\n");
        

         // if statements (number 2)  
        int x=0;
        int y=9;
        if(x > y){
            System.out.println("x is greater than y");
        } else{
            System.out.println("x is less than y");
        }
        System.out.println("\n\n");

        // ternary operator(number 3)
        
        String result= (x < y) ? "x is greater than y." : "x is less than y.";
        System.out.println(result);

        String results= (x > y) ? "x is greater than y." : "x is less than y.";
        System.out.println(results);

        String resultt= (x == y) ? "x is equal to y." : "x is not equal to y.";
        System.out.println(resultt);
        System.out.println("\n\n");
        
        //Boolean(number 5)
        System.out.println(x>y);
        System.out.println(x<y);
        System.out.println(x=y);
        System.out.println("\n\n");

        //Logical Operators
        System.out.println(x>y & x<y);
        System.out.println(x<y || x==y);
        System.out.println( x<y ^ x==y);
        System.out.println("\n\n");
    }

}
    