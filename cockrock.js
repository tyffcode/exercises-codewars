const KM_TO_CM = 100000;
const HOUR_TO_SECOND = 3600;

function cockroachSpeed(speed) {
    const convertSpeed = speed * (KM_TO_CM / HOUR_TO_SECOND);
    return Math.floor(convertSpeed);
}

const cockroachSpeed = (speed) => {
    const convertSpeed = speed * (KM_TO_CM / HOUR_TO_SECOND);
    return Math.floor(convertSpeed);
}