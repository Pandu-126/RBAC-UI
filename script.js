document.getElementById('roles').addEventListener('change', function() {
    const role = this.value;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    switch(role) {
        case 'admin':
            contentDiv.innerHTML = '<p>Admin Content: Full Access</p>';
            break;
        case 'editor':
            contentDiv.innerHTML = '<p>Editor Content: Can Edit</p>';
            break;
  case 'viewer':
            contentDiv.innerHTML = '<p>Viewer Content: Can View</p>';
            break;
        default:
            contentDiv.innerHTML = '<p>Please select a role.</p>';
    }
});
