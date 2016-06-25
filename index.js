var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({ //The button shown in firefox toolbar
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./addon.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  width:350,
  height:375,
  contentURL: self.data.url("../index.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
