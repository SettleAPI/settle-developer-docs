const {
    fs,
    path
} = require('@vuepress/shared-utils')
const _ = require('lodash');
const toTitleCase = require('to-title-case');

const tutorials = [];

const getTutorialsFolderRoot = fs.readdirSync(path.resolve(__dirname, '../../../../api/guides/tutorials'));
// .map(filename => 'introduction/' + filename.slice(0, -3))
// .sort()

_.filter(getTutorialsFolderRoot, function (levelOne) {
    if (levelOne !== 'index.md') {
        // console.log('levelOne: ', levelOne);

        let levelOneName = levelOne.replace(/-/g, ' ');

        levelOneName = toTitleCase(levelOneName) 

        // console.log('levelOneName: ', levelOneName);

        const getTutorialsFolderLevelOne = fs.readdirSync(path.resolve(__dirname, '../../../../api/guides/tutorials/' + levelOne));

        // console.log('levelTwo: ', getTutorialsFolderLevelOne);

        let getTutorialsFolderLevelOneChildren = []

        _.filter(getTutorialsFolderLevelOne, function (levelTwo) {

            let levelTwoName = levelTwo.replace(/-/g, ' ');

            levelTwoName = toTitleCase(levelTwoName)

            let child = ['/api/guides/tutorials/' + levelOne + '/' + levelTwo + '/', levelTwoName]

            // console.log('child: ', child);

            getTutorialsFolderLevelOneChildren.push(child)
        })


        let tutorialSidebarGroup = {
            title: levelOneName, // required
            // collapsable: false,
            sidebarDepth: 0,
            children: getTutorialsFolderLevelOneChildren,
            // children: create_and_Send_payments,
            // children: [
            //     ['/api/guides/tutorials/payments/', 'Overview'],
            //     ['/api/guides/tutorials/payments/request', 'Request Payment'],
            //     ['/api/guides/tutorials/payments/send', 'Send Payment'],
            // ],
            initialOpenGroupIndex: -1
        };

        tutorials.push(tutorialSidebarGroup)
    }
})

// console.log('tutorials: ', tutorials);

// console.log('create_and_Send_payments: ', create_and_Send_payments);

function tutorial_payments() {
    return {
        title: 'Request and Send Payments', // required
        // collapsable: false,
        sidebarDepth: 0,
        // children: create_and_Send_payments,
        // children: [
        //     ['/api/guides/tutorials/payments/', 'Overview'],
        //     ['/api/guides/tutorials/payments/request', 'Request Payment'],
        //     ['/api/guides/tutorials/payments/send', 'Send Payment'],
        // ],
        initialOpenGroupIndex: -1
    };
}

function tutorial_implementation_integration() {
    return {
        title: 'Implementation and Integration', // required
        // collapsable: false,
        sidebarDepth: 0,
        children: [
            ['/api/guides/tutorials/implementation-and-integration/', 'Overview'],
            ['/api/guides/tutorials/implementation-and-integration/ecr-solutions', 'ECR Solutions'],
            ['/api/guides/tutorials/implementation-and-integration/pos-with-static-qr', 'POS wtih Static QR'],
        ],
        initialOpenGroupIndex: -1
    };
}

const sidebars = tutorials;

// const sidebars = [
//     // Payments
//     tutorial_payments(),
//     // Implementation and Integration
//     tutorial_implementation_integration(),
// ]

module.exports = {
    title: 'Tutorials', // required
    collapsable: false, // optional, defaults to true
    children: sidebars,
    initialOpenGroupIndex: -1
}