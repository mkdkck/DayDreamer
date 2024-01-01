
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        event.stopPropagation()
        const dreamId = event.target.dataset.dreamId;
        deleteDream(dreamId);
    }
});  

async function deleteDream(id) {
try {
    const response = await fetch(`/api/dreams/${id}`, {
    method: 'delete',
    });

    if (!response.ok) {
    throw new Error('Failed to delete.'); // or handle specific errors
    }

    const data = await response.json();

    if (data.status === 'success') {
    alert(data.message);
    window.location.href = '/dashboard'; // Redirect to the dashboard page
    } else {
    alert('Failed to delete:' + data.message);
    // Handle other status scenarios (e.g., display an error message)
    }
} catch (error) {
    alert('Error during delete:' + error);
    // Handle fetch or other errors
}
}