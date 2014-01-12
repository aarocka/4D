// Create a public variable where we can assign the GUISkin
var customSkin : GUISkin;
var customGuiStyle : GUIStyle;
// Apply the Skin in our OnGUI() function
function OnGUI () {
	GUI.skin = customSkin;

	// Now create any Controls you like, and they will be displayed with the custom Skin
	if (Time.time < 20) {
		GUI.Box (Rect (225,200,250,190), "Controls"); 
		GUI.Box (Rect (250,225,200,22), "W to move forward");
		GUI.Box (Rect (250,250,200,22), "S to move backwards");
		GUI.Box (Rect (250,275,200,22), "A to move left");
		GUI.Box (Rect (250,300,200,22), "D to move right");
		GUI.Box (Rect (250,325,200,22), "Mouse to look");
		GUI.Box (Rect (250,350,200,22), "E to interact");
		// You can change or remove the skin for some Controls but not others
		GUI.skin = null;
	};

	

	// Any Controls created here will use the default Skin and not the custom Skin
	
}

function Update () {
		
}