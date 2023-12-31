async function getData(){
    const response = await fetch("/api")
    const data = await response.json();
    console.log(data)

    for (item of data){
        const root = document.createElement("p");
        const mood = document.createElement("div");
        const loc = document.createElement("div");
        const time = document.createElement("div");
        const image64 = document.createElement("img");

        mood.textContent = `mood = ${item.inputMood}`;
        loc.textContent = `Lat = ${item.lat}, lon = ${item.lon}`
        time.textContent = `Date = ${new Date(item.timeStamp).toLocaleString()}`
        image64.src = item.image64; 

        root.append(mood,loc,time, image64);
        document.body.append(root)

    }
}

getData();