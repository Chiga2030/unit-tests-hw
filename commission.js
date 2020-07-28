const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

/**
 * @param flyDate -- время в милисекундах
 * @return {number} commission
 */
const commission = (flyDate) => {
    const currentDate = Date.now();
    const dateDiff = flyDate - currentDate;

    if (dateDiff < 0) {
        return 100;
    }

    if (dateDiff < MILLISECONDS_IN_DAY) {
        return 75;
    }

    if (dateDiff < MILLISECONDS_IN_DAY * 5) {
        return 50;
    }

    if (dateDiff < MILLISECONDS_IN_DAY * 10) {
        return 20;
    }

    return 0;
};

module.exports = commission;
