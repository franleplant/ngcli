/**
 * @param {String} fullName Dot separated full Component name in
 * the for of 'modA.modB.modC.componentName'
 * This param can also be a simple 'componentName' String.
 *
 */
function nameParser(fullName) {
    var moduleName, componentName, fullNameArray;


    if (!fullName || typeof fullName !== 'string') {
        throw new Error('wrong fullName input');
    }

    fullNameArray = fullName.split('.');

    if (fullNameArray.length > 1) {
        componentName = fullNameArray.pop();
        moduleName = fullNameArray.join('.');
    } else {
        componentName = fullNameArray.pop();
        moduleName = 'unknownModule';
    }


    return {
        module: moduleName,
        name: componentName
    };
}


module.exports = nameParser;
