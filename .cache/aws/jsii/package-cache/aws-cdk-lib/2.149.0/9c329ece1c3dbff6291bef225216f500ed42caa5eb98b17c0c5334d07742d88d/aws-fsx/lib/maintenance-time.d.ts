/**
 * Enum for representing all the days of the week
 */
export declare enum Weekday {
    /**
     * Monday
     */
    MONDAY = "1",
    /**
     * Tuesday
     */
    TUESDAY = "2",
    /**
     * Wednesday
     */
    WEDNESDAY = "3",
    /**
     * Thursday
     */
    THURSDAY = "4",
    /**
     * Friday
     */
    FRIDAY = "5",
    /**
     * Saturday
     */
    SATURDAY = "6",
    /**
     * Sunday
     */
    SUNDAY = "7"
}
/**
 * Properties required for setting up a weekly maintenance time
 */
export interface LustreMaintenanceTimeProps {
    /**
     * The day of the week for maintenance to be performed.
     */
    readonly day: Weekday;
    /**
     * The hour of the day (from 0-23) for maintenance to be performed.
     */
    readonly hour: number;
    /**
     * The minute of the hour (from 0-59) for maintenance to be performed.
     */
    readonly minute: number;
}
/**
 * Class for scheduling a weekly maintenance time.
 */
export declare class LustreMaintenanceTime {
    /**
     * The day of the week for maintenance to be performed.
     */
    private readonly day;
    /**
     * The hour of the day (from 00-23) for maintenance to be performed.
     */
    private readonly hour;
    /**
     * The minute of the hour (from 00-59) for maintenance to be performed.
     */
    private readonly minute;
    constructor(props: LustreMaintenanceTimeProps);
    /**
     * Converts a day, hour, and minute into a timestamp as used by FSx for Lustre's weeklyMaintenanceStartTime field.
     */
    toTimestamp(): string;
    /**
     * Pad an integer so that it always contains at least 2 digits. Assumes the number is a positive integer.
     */
    private getTwoDigitString;
    /**
     * Validation needed for the values of the maintenance time.
     */
    private validate;
}