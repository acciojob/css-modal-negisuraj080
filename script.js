//your JS code here. If required.
//your JS code here. If required.

//function to open the modal
function onOpenModal() {
	 var modal = document.getElementById('myModal');
     var btn = document.getElementById('openModal');
	  modal.style.display = 'block';
}

// Function to close the modal
function onCloseModal() {
	var closeBtn = document.querySelector('.close-modal');
	var modal = document.getElementById('myModal');
	modal.style.display = 'none';
}