<?php
    if($_SERVER["SERVER_PORT"] != 443){
       $redir = "Location: https://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
       header($redir);
    }
?>
<pre>
This is a very secure website. I have documents to verify that.
I don't think you'll find anything here to prove me wrong.

But if you ask me nicely, I might let you in on a secret you'll very much like... &#128521