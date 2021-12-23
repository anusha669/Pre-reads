import java.util.Scanner;
import java.util.ArrayList;

public class PythagoreanTriplet{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a, b, c;
        ArrayList<Integer> result = new ArrayList<Integer>();

        for( a = 1; a < (int)n/3; a++)
        {
            for( b = a + 1; b < (int)n/2; b++)
            {
                c = n - ( a + b);
                if( (a*a + b*b) == c*c)
                {
                    // result.add({a, b, c});
                    System.out.println(a+" "+b+" "+c);
                }
            }
        }
        
    }
}