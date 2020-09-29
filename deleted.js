
const gridboxes2 = this.state.gridboxes.slice(); // create a copy of the array
if (gridboxes2[i] == null) {
	gridboxes2[i] = 'Boing'; // apparently this is returning a function not calling it
} else {
	gridboxes2[i] = null;
}
this.setState( { gridboxes: gridboxes2 } ); // set the state back by replacing one array with another
