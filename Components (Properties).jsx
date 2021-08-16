// Components (Properties)
var project = app.project;
var sequence = project.activeSequence;
var track = sequence.videoTracks[0];
var clip = track.clips[0];

var thisComponent, thisProp;
// loop through the components
for(var c = 0; c < clip.components.numItems; c++) {
    thisComponent = clip.components[c];
    alert(thisComponent.displayName);
    alert(thisComponent.matchName);
    
    // loop through the properties of each effect/component
    for(var cc = 0; cc < thisComponent.properties.length; cc++) {
        thisProp = thisComponent.properties[cc];
        alert(thisProp.displayName);
        // thisProp.addKey(time);
        // thisProp.getKeys();
        alert(thisProp.getValue());
        //thisProp.getValueAtKey(time);
        //thisProp.getValueAtTimetime);
        //thisProp.isTimeVarying();
        // thisProp.removeKey();
        // thisProp.getColorValue();
        // thisProp.setColorValue(alpha, red, green, blue, updateUI);
        // thisProp.setValue(value, updateUI);
        // thisProp.setValueAtKey(time, value, updateUI);
        
        }
    }