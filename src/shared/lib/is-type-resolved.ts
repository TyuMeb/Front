export const isTypeResolved = (file: File, accept: string, typeName: string) => {
  const typesFile = file.type.toLowerCase().split("/");
  const typesAccept = accept.toLocaleLowerCase().split(",");

  const foundType = typesAccept.find((acceptType) => {
    acceptType = acceptType.trim();
    const wasFound = acceptType.includes(typeName.toLocaleLowerCase());
    if (wasFound) return true;

    return typesFile.find((typeFile) => {
      return new RegExp(acceptType).test(typeFile.toLocaleLowerCase());
    });
  });

  return Boolean(foundType);
};
