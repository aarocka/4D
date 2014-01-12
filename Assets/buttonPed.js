#pragma strict



function Start () {

}
var poop;
var player : GameObject;
var button : GameObject;
var door : GameObject;

function Update () {
	if ( ( Vector3.Distance(player.transform.position, button.transform.position) <= 1.75f) && Input.GetKeyDown("e") ) {
		Destroy (door);
		
	};
}