<?
    $colors = [
        "red",
        "green",
        "blue",
    ];

    $colors = array(
        "red",
        "green",
        "blue",
    );

    $colors[] = "purple";

    array_push($colors, "yellow");
    array_unshift($colors, "black");

    $person = [
        "id" => 1,
        "firstname" => "Dani",
        "lastname" => "Shovevani",
        "phone" => "050-25252525",
        "grades" => [ 5,100,90,70],
        "isActive" => true,
    ];

    $person = array (
        "id" => 1,
        "firstname" => "Dani",
        "lastname" => "Shovevani",
        "phone" => "050-25252525",
        "grades" => [ 5,100,90,70],
        "isActive" => true,
    );
       
     //הוספת איבר למערך
     $person["age"] = 50;


     //echo var_dump($colors);

     //echo var_dump($person);

     

?>