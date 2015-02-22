/*const Lang = imports.lang;
const Settings = imports.ui.settings; 
const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;
const Gettext = imports.gettext.domain('cinnamon-applets');
const _ = Gettext.gettext;
 //const PanelMenu = imports.ui.panelMenu;
//const PopupMenu = imports.ui.popupMenu;
function MyApplet(orientation) {
    this._init(orientation);
}
 
MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,
 
    _init: function(orientation) {
        Applet.IconApplet.prototype._init.call(this, orientation);
 
        try {
			//  this.settings = new Settings.AppletSettings(this, metadata.uuid, instance_id); // ++ Picks up UUID from metadata for Settings
          
            this.set_applet_icon_name("EUR-BTC-WALLET");
            this.set_applet_tooltip(_("See the value of your bitcoins"));
       
        }
        catch (e) {
            global.logError(e);
        }
     },
   
    on_applet_clicked: function(event) {
       // GLib.spawn_command_line_async('xkill');
      //  this.menu.toggle(); 
//alert("asd");
    }
};
 
function main(metadata, orientation) {
    let myApplet = new MyApplet(orientation);
    return myApplet;
}
*/
/*

const Lang = imports.lang;
const Applet = imports.ui.applet; 
const GLib = imports.gi.GLib; 
const Gettext = imports.gettext.domain('cinnamon-applets'); 
const _ = Gettext.gettext;
function MyApplet(metadata,orientation) { 
    this._init(orientation); 
    } 
    MyApplet.prototype = { 
    __proto__: Applet.IconApplet.prototype, _init: function( orientation) {
        Applet.IconApplet.prototype._init.call(this,  orientation); 
        try {
          //  this.set_applet_icon_name( metadata.path+ "/bitcoin38.png"); //+ “/icon.png”
            
            this.set_applet_icon_name("EUR-BTC-WALLET");
            this.set_applet_tooltip(_("See the value of your bitcoins"));
        //    this.set_applet_tooltip(_(metadata.path+  "/Bitcoin.png"));
       
        } 
        catch (e) {
            global.logError(e); 
        } 
    }, 
    on_applet_clicked: function(event) {
        GLib.spawn_command_line_async('fetchmail'); 
    } 
}; 
function main(metadata, orientation) { 
    let myApplet = new MyApplet(orientation); 
    return myApplet; 
}
*/

/*const Lang = imports.lang;
const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;
const Gettext = imports.gettext.domain('cinnamon-applets');
const _ = Gettext.gettext;
 
function MyApplet(orientation) {
    this._init(orientation);
}
 
MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,
 
    _init: function(orientation) {
        Applet.IconApplet.prototype._init.call(this, orientation);
 
        try {
            this.set_applet_icon_name("force-exit");
            this.set_applet_tooltip(_("Click here to kill a window"));
        }
        catch (e) {
            global.logError(e);
        }
     },
 
    on_applet_clicked: function(event) {
        GLib.spawn_command_line_async(GLib.get_home_dir()+"/.local/share/cinnamon/applets/Qt4/Qtmenu/menu");
    }
};
 
function main(metadata, orientation) {
    let myApplet = new MyApplet(orientation);
    return myApplet;
}
*/
