async function getData(){
    const response = await fetch("/api")
    const data = await response.json();
    console.log(data)

    for (item of data){
        const root = document.createElement("div");
        const mood = document.createElement("div");
        const loc = document.createElement("div");
        const time = document.createElement("div");

        mood.textContent = `mood = ${item.inputMood}`;
        loc.textContent = `Lat = ${item.lat}, lon = ${item.lon}`
        time.textContent = `Date = ${new Date(item.timeStamp).toLocaleString()}`

        root.append(mood,loc,time);
        document.body.append(root)

    }
}

getData();