function getData() {
    // בתחילת הפנייה לשרת, זה מציג את הסימון של הטעינה
    document.querySelector(".loader").style.display = "block";
    // מנקה את הנתונים הקיימים
    document.querySelector("#output").innerHTML = "";

    // יצירת אובייקט של ה-Ajax
    const http = new XMLHttpRequest();

    http.onload = () => {
        const arr = JSON.parse(http.responseText);

        document.querySelector("#output").innerHTML = arr.map(x => `<li>${x.firstName} ${x.lastName}</li>`).join('');
        document.querySelector(".loader").style.display = "none";
    }

    const limit = document.querySelector("#limit").value;
    let url = "data.php";

    if (limit) {
        url += `?limit=${limit}`;
    }

    http.open("GET", url);
    http.send();
}