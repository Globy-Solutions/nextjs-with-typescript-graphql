/* eslint-disable sonarjs/no-small-switch */
/**
 * `Common Reducer`.
 * @return {object} Reducer.
 */

export default (state: any, { type, payload }: any): object => {
    switch (type) {
        case "TEST":
            return { type, payload };
        default:
            return state;
    }
};
