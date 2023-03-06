<?
    if (!isset($_POST['username'], $_POST['password'])) {
        die();
    }

    if ($_POST['username']=='abc' && $_POST['password']== '123') {
        echo "התחברות בוצעה בהצלחה";
    } else {
        echo "שגיאה";
    }
?>
