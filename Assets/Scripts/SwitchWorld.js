//used for switching rooms
//Work on the transition code

#pragma strict
var positionState;
var up : int=1000;
var down : int=1000;


function Start () {
	var distances = new float[32];
	Screen.showCursor = false;
	positionState = true;
	
}
function hyperDown () {
	camera.cullingMask = 1 << LayerMask.NameToLayer("TransparentFX");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Default");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Ignore Raycast");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Water");
	camera.cullingMask = 1 << LayerMask.NameToLayer("HyperDOWN");
	positionState = "down";
	Physics.IgnoreLayerCollision(8,10, false);
};
function hyperUp () {
	camera.cullingMask = 1 << LayerMask.NameToLayer("TransparentFX");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Default");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Ignore Raycast");
	camera.cullingMask = 1 << LayerMask.NameToLayer("Water");
	camera.cullingMask = 1 << LayerMask.NameToLayer("HyperUP");
	positionState = "up";
	Physics.IgnoreLayerCollision(8,10, true);
};
function Update () {
	
	//switches culling layer

		//toggle
		

		
//		Debug.Log(up);
//		Debug.Log(down);
		if (Input.GetButtonDown ("Fire1")) {
			if (positionState ){
				hyperUp();
				positionState = false;
			}
			else{
				hyperDown();
				positionState = true;
			}
		};

	//phys stuff here

}