import java.util.*;
 class Stringwords{
     int i=0,count=0;
     
     public void getWords(){
         Scanner sc = new Scanner(System.in);
         System.out.print("\nEnter a String:");
         String str = sc.nextLine();
         System.out.println("\nNo.of Characters in Given String is \t: " + calCharacters(str));
         System.out.println("\nNo.of Vowels in Given String is \t: " + calVowels(str));
         System.out.println("\nNo.of Consonants in Given String is \t: " + calConsonants(str));
         System.out.println("\nNo.of Special Characters in Given String is \t: " + calSpecialCharacters(str));
         System.out.println("\nNo.of Words in Given String is \t: " + calWords(str));
         System.out.println("\nNo.of Sentences in Given String is \t: " + calSentences(str));
        
         sc.close();
 }
  public int calCharacters(String str)
    {
        char[] sepChars = str.toCharArray();
        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( ((((int) sepChars[i]) >= 65) && (((int) sepChars[i]) <= 90)) || ((((int) sepChars[i]) >= 97) && (((int) sepChars[i]) <= 122)) )
            {
                count++;
            }
        }

        return count;
    }

    public int calVowels(String str)
    {
        char[] sepChars = str.toCharArray();

        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( Character.toString(sepChars[i]).equalsIgnoreCase("A") || Character.toString(sepChars[i]).equalsIgnoreCase("E") || Character.toString(sepChars[i]).equalsIgnoreCase("I") || Character.toString(sepChars[i]).equalsIgnoreCase("O") || Character.toString(sepChars[i]).equalsIgnoreCase("U") )
            {
                count++;
            }
        }

        return count;
    }

    public int calConsonants(String str)
    {
        return (calCharacters(str) - calVowels(str));
    }

    public int calSpecialCharacters(String str)
    {
        char[] sepChars = str.toCharArray();
        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( ((((int) sepChars[i]) >= 65) && (((int) sepChars[i]) <= 90)) || ((((int) sepChars[i]) >= 97) && (((int) sepChars[i]) <= 122)) )
            {
                continue;   // Skip Characters..
            }
            else if ( ((int) sepChars[i]) == 32 )
            {
                continue;  // Skip Spaces..
            }
            else
            {
                count++;
            }
        }

        return count;
    }

    public int calWords(String str)
    {
        String[] words = str.split(" ");
        return (words.length);
    }

    public int calSentences(String str)
    {
        String[] sentences = str.split("\\.");
        return (sentences.length);
    }

    public static void main(String []args)
    {
        Stringwords sf = new Stringwords();
        sf.getWords();
    }
}

       
