async function getData(){
    const response = await fetch("/api")
    const data = await response.json();
    console.log(data)

    // getting data from the database through the app.js node file and displaying it in html by making new elemants

    for (item of data){
        const root = document.createElement("p");
        const mood = document.createElement("div");
        const loc = document.createElement("div");
        const time = document.createElement("div");
        const imageElement = document.createElement('img');

        mood.textContent = `mood = ${item.inputMood}`;
        loc.textContent = `Lat = ${item.lat}, lon = ${item.lon}`
        time.textContent = `Date = ${new Date(item.timeStamp).toLocaleString()}`
        imageElement.src = item.imagepath;
        imageElement.alt = 'Image from folder';

        root.append(mood,loc,time, imageElement);
        document.body.append(root)

    }
}

getData();