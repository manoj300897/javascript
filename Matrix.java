

import java.util.*;
class Matrix{
        char c=' ';
        int i=0,temp=1;
        
        public void getMultidim(){
                Scanner sc = new Scanner(System.in);
                System.out.print("Enter howmany values add in matrix:");
                int limit = sc.nextInt();
                int arr[] = new int[limit];
       
        for(i=0;i<arr.length;i++){
                System.out.print("\n Enter the value for" + (i+1) +":");
                arr[i] = sc.nextInt();
                }
                
                System.out.print(\nThe given values are\t"+Arrays.toString(arr));
                System.out.print("\n Enter the column size:");
                
                int colsize = sc.nextInt();
                
                System.out.print("[");
                for(i=0;i<arr.length;i++){
                    if(temp == colsize){
                        System.out.print("\t" =arr[i] + "\t");
                            if(i == arr.length -1){
                                System.out.print("]");
                            }else{
                                System.out.print("\t" + arr[i] + "\t");
                            }
                            
                            temp=1;
                    }else{
                        System.out.println("\t" + arr[i] + "\t");
                        temp++;
                    }
                } 
        public static void main(String[] args){
            Matrix mat = new Matrix();
            mat.getMultidim();
        }
                
        }
}