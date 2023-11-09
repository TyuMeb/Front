const path = require("path");
const { generateApi } = require("swagger-typescript-api");

generateApi({
    name: "generated.ts",
    output: path.resolve(process.cwd(), "./src/redux/api"),
    url: "http://185.244.173.82/swagger/?format=openapi",
    generateResponses: true,
    enumNamesAsValues: true,
    moduleNameFirstTag: true,
    generateUnionEnums: true,
    generateRouteTypes: false,
    generateClient: false,
});
