export interface MenuItem {
    name: string;
    description: string; // Ensure this property exists
    course: string;
    price: number;
}

export const calculateAveragePriceByCourse = (items: MenuItem[] = []) => {
    if (!items.length) {
        return {};
    }

    const courseTotals: { [key: string]: number } = {};
    const courseCounts: { [key: string]: number } = {};

    items.forEach(item => {
        if (!courseTotals[item.course]) {
            courseTotals[item.course] = 0;
            courseCounts[item.course] = 0;
        }
        courseTotals[item.course] += item.price;
        courseCounts[item.course] += 1;
    });

    const averages: { [key: string]: string } = {};
    for (const course in courseTotals) {
        averages[course] = (courseTotals[course] / courseCounts[course]).toFixed(2);
    }

    return averages;
};

export default calculateAveragePriceByCourse