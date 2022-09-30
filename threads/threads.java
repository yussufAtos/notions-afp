//---------------- Les threads -----------------//

//1- La création d'un thread

  //1.1- Classe anonyme de type Thread

/*

créer une instance d'une classe anonyme de type Thread et implémenter sa méthode run(). 
Il suffit alors d'invoquer sa méthode start() pour démarrer le thread

*/

	    Thread t = new Thread() {
	        public void run() {
	          System.out.println("Mon traitement : " +currentThread().getName());
	        }
	      };
	      t.start();

  //1.2- Hérite de la classe Thread

 public class MyThread extends Thread{
 	    public void run() {
		    System.out.println("Mon traitement");
		  }
  }   

  		   MyThread t = new MyThread("toto");
		   t.start(); 
 
   //1.3- Implémente l'interface Runnable  


public class MyRunnable implements Runnable{
    private long delai;

    public MyRunnable(long delai) {
      this.delai = delai;
    }

    @Override
    public void run() {
      try {
        Thread.sleep(delai);
       } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }

       Thread thread = new Thread(new MyRunnable());
       thread.start();

//2- La methode join()

        DateFormat df = new SimpleDateFormat("HH:mm:ss");
	    Thread thread = new Thread(new MyRunnable(5000));
        System.out.println(df.format(new Date()) + " Begin");
        thread.start();
        System.out.println(df.format(new Date()) + " My program");
    
       //==>

       11:11:03 Begin
       11:11:03 My program
       11:11:08 End of Thread Execution

       //==> Using join()

        DateFormat df = new SimpleDateFormat("HH:mm:ss");
	    Thread thread = new Thread(new MyRunnable(5000));
        System.out.println(df.format(new Date()) + " Begin");
        thread.start();
           try {
				thread.join();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        System.out.println(df.format(new Date()) + " My program");
        
        //==>
        
        11:15:48 Begin
        11:15:53 End of Thread Execution
        11:15:53 My program
       


