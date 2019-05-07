window.onload = () => {
    const header = document.querySelectorAll('.ghx-swimlane-header[data-issue-id]');

    header.forEach((value, key, parent) => {
        const issueId = value.getAttribute('data-issue-id');
        const url = '/secure/CreateSubTaskIssue!default.jspa?parentIssueId=' + issueId;

        if (typeof issueId === 'undefined') {
            return;
        }
        const button = document.createElement('button');
        button.textContent = '追加';
        button.style = 'position: absolute; right: 2em; top: 1em;';
        button.onclick = (event) => {
            event.stopPropagation();
            window.open(url);

            return false;
        };
        value.appendChild(button);
    });
};
