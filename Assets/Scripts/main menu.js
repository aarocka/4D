// Create a public variable where we can assign the GUISkin
var customSkin : GUISkin;
var titleStyle : GUIStyle;
var buttonStyle : GUIStyle;



// Apply the Skin in our OnGUI() function
function OnGUI () {
	GUI.skin = customSkin;
	// Now create any Controls you like, and they will be displayed with the custom Skin

    GUI.Label(new Rect(50,100, 100, 30), "Dimension Jump", titleStyle);

    GUI.Button (Rect (60,210,100,40), "Exit");

	if (GUI.Button (Rect (60,160,100,40), "Start Game")) {
		Application.LoadLevel (1);
	}

}

function Update () {
		
}