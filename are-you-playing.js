const FIRST_LETTER = 0;
const IT_STARTS_WITH_R = 'r';

function areYouPlayingBanjo(name) {
    let message = `${name} does not play banjo`;
    if(name.at(FIRST_LETTER).toLowerCase() === IT_STARTS_WITH_R){
        message = `${name} plays banjo`;
    }
    return message;
}

const areYouPlayingBanjo = (name) => {
    let message = `${name} does not play banjo`;
    if(name.at(FIRST_LETTER).toLowerCase() === IT_STARTS_WITH_R){
        message = `${name} plays banjo`;
    }
    return message;
}