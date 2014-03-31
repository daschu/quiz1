Ext.application({
    name: 'Datenschutz',

    launch: function() {
        // The whole app UI lives in this tab panel
        Ext.Viewport.add({
            xtype: 'tabpanel',
       		fullscreen: 'yes',
            tabBarPosition: 'bottom',
            ui:'light',
		 
            items: [
                // This is the home page, just some simple HTML
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                  style: 'background-color:#c1d82f',
                    styleHtmlContent: true, 
                    items: [
                    {
                    	html: [
'<div class="container"><h1>Willkommen zum Datenschutz Quiz</h1>',
"<p>Wir wuenschen dir viel Erfolg!</p>",
 "<p>made by<br>margit.mueller@fen-net.de and<br>sigue@web.de<br></p></div>"
                    	].join("")
                    
                      },
                      
                      {
                      	
                           xtype: 'button',
                           cls: 'btnAction',
                           hoverCls: 'btnAction1',
                           pressedCls: 'btnAction1',
                          
								handler : function(){
									
								    alert('Button pressed!');
								}
	 
							    
                      }
                      ]    
   
                },
                
  {  		xtype: 'container',
                    title: 'Quiz',
                    iconCls: 'star',
                    cls: 'quiz',
                    displayField: 'title',
					style: 'background-color:#c1d82f',
					
                   items: [
        {
           html: [
'<div id=\"topbar\">Datenschutz-Quiz</div><div class=\"spacer\"></div>',
"<div id=\"navContent\">",
"<div id=\"game1\"></div><div id=\"game2\"></div></div>"
                    	].join("")
           
         
            
			
			
        }
        
    ]
},
                // This is the recent blogs page. It uses a tree store to load its data from blog.json.
                {
                    xtype: 'carousel',
                    title: 'Infos',
                    iconCls: 'info',
                    cls: 'carousel',
                    displayField: 'title',
					style: 'background-color:#c1d82f',
					
                   items: [
        {
           
            style: 'background-color: #5E99CC',
         
            xtype: 'image',
            src: 'http://cdn.sencha.io/img/home/home_swiss-army-knife.png'
			
			
        },
        {
            
            style: 'background-color: #759E60',
            xtype: 'image',
            src: 'http://cdn.sencha.io/img/home/home_devices.png'
			
        },
        {
            style: 'background-color: #ffcc33',
            xtype: 'image',
            src: 'http://cdn.sencha.io/img/home/home_html5-buildings.png'
			
        }
    ]
},
                      

                // This is the contact page, which features a form and a button. The button submits the form.
                {
                    xtype: 'formpanel',
                    title: 'Kontakt',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',
 					style: 'background-color:#c1d82f',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Ihre Anfrage',
                            style: 'background-color:#c1d82f',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email',
                                    name: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message',
                                    name: 'Nachricht',
                                    height: 90
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Senden',
                            ui: 'confirm',

                            // The handler is called when the button is tapped
                            handler: function() {

                                // Look up the items stack and get a reference to the first form it finds
                                var form = this.up('formpanel');

                                // Send an AJAX request with form data to the URL for contact.php
                                // Call the success callback if we get a non-error response from the server
                                form.submit({
                                    success: function() {
                                        // Run the callback function when a user taps the OK button
                                        Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                            form.reset();
                                        });
                                    }
                                });
                            }
                        }
                    ]
                }
            ]
        });
    }
});