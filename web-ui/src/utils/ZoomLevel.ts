export default class ZoomLevel {
    static levels: Level[] = [
        { level: 7, display: 'Minute' },
        { level: 6, display: 'Quarter-Hourly' },
        { level: 5, display: 'Hourly' },
        { level: 4, display: 'Daily' },
        { level: 3, display: 'Weekly' },
        { level: 2, display: 'Monthly' },
        { level: 1, display: 'Quarterly' },
        { level: 0, display: 'Yearly' },
    ];

    static getLevelDispalys(): string[] {
        return this.levels.map((level: Level) => level.display);
    }
}

type Level = {
    level: number;
    display: string;
};
