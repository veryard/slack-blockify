const core = require('@actions/core');
const { markdownToBlocks } = require('@tryfabric/mack');

(async () => {
    try {
        const markdown = core.getInput('text', { require: true });
        markdownToBlocks(markdown).then((res) => {
            core.setOutput("text", JSON.stringify(res, null, 2));
        })

    } catch (error) {
        core.setFailed(error.message);
    }
})();
