function updateLight(current) {
    let trafficLightsIs = "red";
    switch (current) {
        case "green":
            trafficLightsIs = "yellow";  
            break;
        case "yellow":
            trafficLightsIs = "red";
            break; 
        default:
            trafficLightsIs = "green"
            break;
    }
    return trafficLightsIs;
}

function updateLight(current) {
    // por lo que veo se esta haciendo un doble ternario 
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

//ECMASCRIPT+6
const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]