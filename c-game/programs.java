

//1- string expansion

 // String input = "2(a3(ab))";
 // String input = "3(b(2(c)))";
	String input = "k(a3(b(a2(c))))";
		//String input = "3(ab)";
		String result = "";
		int index = input.indexOf(")");

		for (int i = index - 1; i >= 0; i--) {

			System.out.println("i : " + i);

			if (input.charAt(i) != '(') {
				int n = Character.getNumericValue(input.charAt(i));
				if (Character.isDigit(input.charAt(i))) {
					String sum = "";
					for (int j = 0; j < n; j++) {
						sum = sum + result;
					}
					result = sum;

				}

				else {
					result = input.charAt(i) + result;

				}

			}

		}

		System.out.println("result : " + result);


//2- temperature closest to zero

		int[] ts =new int[] {-3 ,-2 ,-1 ,2 ,3};
		int[] ts =new int[] {-3 ,-2 ,-1 ,0,2 ,3};
		int[] ts =new int[] {-3 ,-2 ,-1 ,1 ,2 ,3};
		
		
		Arrays.sort(ts);
		int tmp=ts[0];
		int res=0;
		
		for (int i = 0; i < ts.length; i++) {
			if(Math.abs(ts[i])<=Math.abs(tmp)) {
				tmp=Math.abs(ts[i]);
				res=ts[i];
			}
		}
		
		
		
		System.out.println("tmp : "+tmp);
		System.out.println("res : "+res);


		// solution 2

	   static int closestToZero(int[] ints) {
          if(ints==null || ints.length==0)
		     return 0;
			 
          int temp=ints[0];

          for(int i=0;i<ints.length;i++){
			if(Math.abs(ints[i])<=Math.abs(temp)){
				temp=Math.abs(ints[i])==Math.abs(temp) ?Math.max(ints[i],temp):ints[i];
			}
		   } 
		   return temp;

	}

//3- is duo digit

		isDuoDigit(int n) {
        // Write your code here
        // To debug: System.err.println("Debug messages...");
        Set<Integer> set = new HashSet<Integer>();
        int p = 10;
	    int r = 0;
        String result="n";
        if(n/10==0)
           return "y";
        while (n != 0) {
				r = n % p;
				n = n / p;
				set.add(r);
        }
        if(set.size()<=2)
           result="y";
            
        return result;
    }


//4- is twin
	      
	      String a= "marion";
	      String b= "romain";
	      
	     char[] ac= a.toCharArray();
	     char[] bc= b.toCharArray();
	     
	     System.out.println(Arrays.toString(ac));
	     System.out.println(Arrays.toString(bc));
	     
	     Arrays.sort(ac);
	     Arrays.sort(bc);
	     
	     System.out.println(Arrays.toString(ac));
	     System.out.println(Arrays.toString(bc));

  
  //5- compute Multiples Sum

public static int computeMultiplesSum(int n) {
        // Write your code here
        // To debug: System.err.println("Debug messages...");
        int sum=0;
        for(int i=3;i<n ;i++){
            if(i%3==0 || i%5==0|| i%7==0){
                System.out.println("i "+i);
                 sum=sum+i;
            }
        }
        return sum;
    }


//6-  Approximate pi

        static double approx(double[][] pts) {
           long count=0l;
           long dim= pts.length;
         for(int i=0;i<dim;i++){
            double sum=0;
               for(int j=0;j<2;j++){
                sum+=Math.pow(pts[i][j],2);
                }
               if(sum<=1.0){
                 count++;
                 }
         }

        return (double)count*4/dim;

        } 

//7-    Tree Node     

 class Node {
    
    // keep these​​​​​​‌​​‌‌‌​​​‌‌‌​​​​‌​​​​‌‌‌‌ fields
    Node left, right;
	int value;

    	public Node find(int v){
	    Node currentNode = this;
	    
	    while(currentNode!=null){
            System.out.println("value :"+currentNode.value);
	        if(currentNode.value==v){
	            return currentNode;
	        }
           
             
             if(currentNode.value>v){
                if(currentNode.left!=null )
	                 currentNode = currentNode.left;
                else
                  return null;
	        }
         
             if(currentNode.value<v){
                if(currentNode.right!=null )
	              currentNode = currentNode.right;
                else
                   return null;
	        }
        
	    }
	    
	    return null;
    }
}


//8- Utilisation d'un buffer/join à la place de '+'


	static String concat(String[] strings) {
		   StringBuilder  strb=new StringBuilder ();
	      
	      for (int i = 0; i < strings.length; i++) {
	    	  strb.append(strings[i]);
		} 
        return strb.toString();
	}


//9- Fuite mémoire 

	class Stack {

    // keep these two fields as they​​​​​​‌​​‌‌‌​​​‌‌‌​‌​​​​‌‌‌‌​‌‌ are
    private Object[] elements;
	private int size = 0;

	public Stack(int initialCapacity) {
		elements = new Object[initialCapacity];
	}

	public void push(Object object) {
		ensureCapacity();
		elements[size++] = object;
	}

	public Object pop() {
		if (size == 0) {
			throw new EmptyStackException();
		}
     return elements[--size];
	 
	}

	private void ensureCapacity() {
		if (elements.length == size) {
			Object[] old = elements;
			elements = new Object[2 * size + 1];
			System.arraycopy(old, 0, elements, 0, size);
		}
	}
}


// solution fuite ==>pop() met à null la référence de l'objet dans le tableau

class Stack {

    // keep these two fields as they​​​​​​‌​​‌‌‌​​​‌‌‌​‌​​​​‌‌‌‌​‌‌ are
    private Object[] elements;
	private int size = 0;

	public Stack(int initialCapacity) {
		elements = new Object[initialCapacity];
	}

	public void push(Object object) {
		ensureCapacity();
		elements[size++] = object;
	}

	public Object pop() {
		if (size == 0) {
			throw new EmptyStackException();
		}
      Object el =elements[--size];
	  elements[size]=null;
		return el;
	}

	private void ensureCapacity() {
		if (elements.length == size) {
			Object[] old = elements;
			elements = new Object[2 * size + 1];
			System.arraycopy(old, 0, elements, 0, size);
		}
	}
}

//test ==> 
            for (int i = 0; i < 10000; i++) { // fill the stack
	    	    stack.push(" string " + i);
	    	}
	      System.out.println( "---------------------------------");
	    	for (int i = 0; i < 10000; i++) { // empty the stack
	    	    System.out.println(stack.pop());
	    	}

 // 10-  find Largest	

	  static int findLargest(int[] numbers) {

		int max=  IntStream.of(numbers).reduce((x,y)->x > y ?x:y).getAsInt();
		return max;
	}

// 11- Fermeture sécurisée d'un flux: rendre le  code robuste 

	void print(Reader reader) throws IOException {
		int code = reader.read();
		while (code != -1) {
			System.out.print((char) code);
			code = reader.read();
		}

		reader.close();
	}	


	//solution

		try{
	    int code = reader.read();
		while (code != -1) {
			System.out.print((char) code);
			code = reader.read();
		}
		}
		catch(IOException e){
               throw e;
		}
		finally{
             reader.close();
		}

// 12- Fréquences des mots : countFrequencies 

  public static int[] countFrequencies(String[] words) {

        
       	List<Integer> indexes = new ArrayList<>();
		List<Integer> result = new ArrayList<>();
       Arrays.sort(words);
		for (int i = 0; i < words.length ; i++) {
			int count = 1;
			if( !indexes.contains(i)) {
				for (int j = i + 1; j < words.length; j++) {

					if (words[i].equals(words[j])) {
						count++;
						indexes.add(j);
					}

				}
				result.add(count);
			}
			
}

int[] finalResult =new int[result.size()];

for (int index = 0; index < finalResult.length; index++) {
    finalResult[index]=result.get(index);
}
       
        return finalResult;
    }		

//13- Filtrage des mots :filterWords


      public static String[] filterWords(String[] words, String letters) {
		
			int count = 0;
			List<String> result = new ArrayList<>();
			for (int i = 0; i < words.length; i++) {
				count = 0;
				for (int j = 0; j < letters.length(); j++) {
					if (words[i].contains(String.valueOf(letters.charAt(j))))
						count++;
				}
				if (count >= 1)
					result.add(words[i]);

			}
        String[] finalResult=new String[result.size()];
        for (int index = 0; index < finalResult.length; index++) {

            finalResult[index]=result.get(index);
        }
        return finalResult;
    }

//14- Encodage simple


public static String encode(String plainText) {

 if(plainText.length()==1)
    return 1+""+plainText.charAt(0);


char temp = plainText.charAt(0);
StringBuilder result=new StringBuilder();
int count =1;
for (int i = 1; i < plainText.length(); i++) {
   
    if(plainText.charAt(i)==temp){
      count++;

    }
    else{
        result.append(count);
        result.append(temp);
        temp=plainText.charAt(i);
        count=1;
        }
    if(i==plainText.length()-1){
           result.append(count);
           result.append(plainText.charAt(i-1));
    }


}
       return result.toString();
    }