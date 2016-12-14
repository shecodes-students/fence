function fence(start, end, count) {
    if (count<2) {
        throw new Error("Count must be two or higher");
    }
    var distance = (end-start) / (count - 1);
    console.log(distance);

    var xCoordinates = [];  //evtl. die Strecke erst halbieren und dann nochmal in kleinere Teile zerlegen um Fehler zu verteilen
    for (var n=0; n<count; n++) {
        var xn = start + n * distance;
        xCoordinates.push(xn);
    }
    console.log (xCoordinates);
    return xCoordinates;
}
