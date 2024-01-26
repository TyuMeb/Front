/**
 * Разбивает строку путей, на подпути
 * @example getPathNestedRoutes('/path1/path2/path3?...');
 * @returns {string[]} Returns ['path1', 'path2', 'path3', ...]
 */
export const getPathNestedRoutes = (path: string): string[] => {
    const pathNestedRoutes = [];
    let count = -1;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "?") {
            break;
        }

        if (path[i] === "/") {
            count++;
            continue;
        }

        if (!pathNestedRoutes[count]) {
            pathNestedRoutes.push(path[i]);
            continue;
        }

        pathNestedRoutes[count] += path[i];
    }

    return pathNestedRoutes;
};
