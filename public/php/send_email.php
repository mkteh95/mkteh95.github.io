<?php
    $message = 'Phone Number: ' . $_POST['phone'] . "\r\n" . $_POST['message'];

    $headers .= 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= 'MIME-Version: 1.0'. "\r\n";
    $headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";

    $message = '<html> <body style="background: #e8e8e8; padding: 20px 0;"> <table cellspacing="0" cellpadding="15" border="0" style="background: white; margin: 0 auto; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;"> <tr style="background: #333333; color: #fed136;"> <td colspan="2" width="600" style="color: #fed136; font-size: 20px; font-weight: 800;">MESSAGE</td></tr><tr> <td width="55" style="font-weight: 800;"><p>Name:</p><p>Phone:</p></td><td width="545"><p>' . $_POST['name'] . '</p><p>' . $_POST['phone'] . '</p></td></tr><tr > <td colspan="2" width="600"> <div style="border: 1px solid grey; padding: 15px;"> ' . $_POST['message'] . ' </div></td></tr></table> </body></html>';

    mail('Mun Kit Teh <mteh@usc.edu>', 'Message from Portfolio', $message, $headers);

    http_response_code(200);
?>