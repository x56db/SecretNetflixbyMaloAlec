document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const commandForm = document.getElementById('commandForm');
    const commandInput = document.getElementById('commandInput');
    let currentDirectory = '/';
    let fileSystem = {
        '/': {
            'files': [],
            'folders': ['documents', 'pictures']
        },
        '/documents': {
            'files': ['resume.txt', 'report.docx'],
            'folders': ['projects']
        },
        '/pictures': {
            'files': ['vacation.jpg', 'family.jpg'],
            'folders': []
        },
        '/documents/projects': {
            'files': ['project1.txt', 'project2.txt'],
            'folders': []
        }
    };

    commandForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêcher le rechargement de la page
        const command = commandInput.value.trim();
        commandInput.value = '';
        listFiles();
    });

    function listFiles() {
        const currentFolder = fileSystem[currentDirectory];
        let outputText = '';
        if (currentFolder) {
            if (currentDirectory !== '/') {
                outputText += `Contents of ${currentDirectory}:\n`;
            }
            if (currentFolder.folders.length > 0) {
                outputText += `Folders:\n${currentFolder.folders.join('\n')}\n`;
            } else {
                outputText += 'Folders: (empty)\n';
            }
            if (currentFolder.files.length > 0) {
                outputText += `Files:\n${currentFolder.files.join('\n')}\n`;
            } else {
                outputText += 'Files: (empty)\n';
            }
        } else {
            outputText += `Error: Directory '${currentDirectory}' not found.\n`;
        }
        output.textContent = outputText;
    }
});
