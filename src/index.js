const core = require('@actions/core');
const { markdownToBlocks } = require('@tryfabric/mack');

(async () => {
    try {
        const markdown = core.getInput('text', { require: true });
        markdownToBlocks(markdown).then((res) => {
            let json = JSON.stringify(res, null, 2);
            // remove first [ and last ]
            json = json.substring(1, json.length - 1);
            core.setOutput("text", json);
            core.info(`JSON: ${json}`);
        })

    } catch (error) {
        core.setFailed(error.message);
    }
})();
