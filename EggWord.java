import java.util.Scanner;

public class EggWord {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
	  System.out.print("Enter the word:");
        String word = sc.nextLine();

        int countE = 0, countG = 0;
        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == 'E' || word.charAt(i) == 'e') {
                countE++;
            } else if (word.charAt(i) == 'G' || word.charAt(i) == 'g') {
                countG++;
            }
        }

        if (countG == 2 * countE) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
