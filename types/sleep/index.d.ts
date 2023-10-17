declare namespace __node_sleep {
    /**
     * Sleep for <i>n</i> seconds.
     *
     * @param n Number of seconds to sleep.
     */
    function sleep(n: number): void;

    /**
     * Sleep for n milliseconds.
     *
     * @param n Number of milliseconds to sleep.
     */
    function msleep(n: number): void;

    /**
     * Sleep for n microseconds.
     *
     * @param n Number of microseconds to sleep; 1 second is 1,000,000 microseconds.
     */
    function usleep(n: number): void;
}

declare module "sleep" {
    export = __node_sleep;
}
