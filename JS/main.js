function initMap() {
    const uluru = { lat: 49.686949881275325, lng: 18.33036873122843 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
