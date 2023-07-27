<?
   $re = "/<script[^>]+src/i";

   if (preg_match($re, $_GET['var'])) 
   {
      echo "Filtered";
      return; 
   }
   echo "Welcome ".$_GET['var']." !";
?>
