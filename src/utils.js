function importAll(r) {
    return r.keys().map(r);
}

export const photos = () => (
    importAll(
        require.context('./assets/photos/independent/', false, /\.(jpe?g)$/)
    )
);

export const shuffle = (array) => {
    let counter = array.length;
    let temp;
    let index;
    
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease ctr by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    
    return array;
};