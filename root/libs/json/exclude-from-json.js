
export function excludeProperties(entity, excludedProperties) {
    const excludedPropertyKeys = Object.keys(entity).filter(key => excludedProperties.includes(key));
    const rest = Object.keys(entity).reduce((acc, key) => {
        if (!excludedPropertyKeys.includes(key)) {
            acc[key] = entity[key];
        }
        return acc;
    }, {});
    return rest;
}

