import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        for(int star = 0; star < b; star++)
        {
            for(int star2 = 0; star2 < a; star2++)
            {
                System.out.print("*");
            }
            System.out.println();
        }

        //System.out.println(a + b);
    }
}