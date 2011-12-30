var ShipSetup = function() {
    return {
        init:null
    }
};

(function($){
        
        
        
        var is_init=false;
        var grid=null;
        var window_timeout=null;
        
	var ship_definitions={
		ship1:{
			size:1,
			count:1,
			name:'ship1'
		},
		ship2:{
			size:2,
				count:1,
				name:'ship2'
		},
		ship3:
		{
			size:3,
			count:1,
			name:'ship3'
		}
	};
        
        
       
	
        ShipSetup.init=function(){
            
            
               var profile=General.getState('profile');
               
               $('#setup,#game aside.sidebar').removeClass('chromander')
               .removeClass('opera').addClass(profile.general);
               
               
               
               if(is_init){
                   grid.destroy();
                }
                
                
                var direction='h';

                var size=$('#setup .grid-container').width();

                grid = new Grid().init({selector:'#setup .grid',size:size});

                
                
               
                function shipInserted()
                {
                     $('#clear-ships').removeClass('disabled');
                        $('#ship-picker .choice').next().show().addClass('choice').end().removeClass('choice').addClass('picked').hide();
                        direction='h';

                        insertMode();
                }

                function insertMode()
                {
                        if($('#ship-picker li:not(.picked)').size()>0)
                        {
                                $_current=$('#ship-picker li.choice');
                                
                                
                                var count=$_current.find('.choice-unit').size();
                                var unit_size=$_current.find('.choice-unit').width();
                                
                                if(direction=='h')
                                {
                                    var top=Math.round($('#ship-picker').height()/2-unit_size/2);
                                    $('#ship-picker .ships').width(unit_size*count).height(unit_size);//.css('margin-top',top+'px');
                                }
                                else if(direction=='v')
                                {
                                    $('#ship-picker .ships').width(unit_size).height(unit_size*count);;
                                }
                                $('#ship-picker .ships').css({marginLeft:'auto',marginRight:'auto'});

                                if($_current.find('.choice-unit').hasClass('ship1'))$('#flip').hide();else $('#flip').show();

                                grid.setInsertMode({
                                        ship:$.extend({},ship_definitions[$_current.data('ship')],{direction:direction}),
                                        inserted:shipInserted
                                });
                        }
                else
                        {
                                grid.unsetInsertMode();
                                ready();
                        }
                }

                function clearShips()
                {
                        grid.unsetInsertMode();
                        grid.clearShips();
                        
                        $('#clear-ships').addClass('disabled');


                        $('#ship-picker').show().find('li').removeClass('picked').removeClass('choice').hide()
                        .find('.choice-unit').removeClass('direction-v').addClass('direction-h').end()
                        .filter(':first').addClass('choice').show();


                        $('#play').hide();


                        insertMode();
                        

                }
                
                var old_window_width=$(window).width();
                
                function windowResize()
                 {
                    clearTimeout(window_timeout);

                    window_timeout=setTimeout(function(){
                        if(old_window_width != $(window).width())
                            {
                                
                                var size=$('#setup .grid-container').width();
                                grid.resize(size);
                            }
                            
                        //ShipSetup.init();
                        
                    },100);
                 }

                if(!is_init)
                {
                    
               
                    is_init=true;


                    $(window).bind('resize',function(){
                        windowResize();
                    });
                     

                   

                    $('#play').hide().click(function(){
                            var state=grid.getState();

                            delete $_grid;
                            General.setState('setup',state);
                            General.setState('game',null);

                    });


                    var ships=[];
                    for(var ship_name in ship_definitions)
                    {
                            var ship=ship_definitions[ship_name];
                            ship.ship_name=ship_name;
                            for(var j=0;j<ship.count;j++)
                            {
                                    ships.push($.extend({},ship));
                            }


                    }



                    $('#auto-fill').click(function(){
                            grid.autoFill(ships);
                            grid.unsetInsertMode();
                            $('#ship-picker li').removeClass('choice').addClass('picked').hide();
                            $('#clear-ships').removeClass('disabled');
                            ready();
                    });

                    $('#clear-ships').click(function(){
                        clearShips();
                    });




                    var $_ship_list=$('<ul>');


                    for(var ship_name in ship_definitions)
                    {
                            var ship=ship_definitions[ship_name];

                            for(var i=1;i<=ship.count;i++)
                            {
                                    var $_list_item=$('<li>').appendTo($_ship_list).data('ship',ship_name);

                                    var width=ship.width;
                                    for(var j=1;j<=ship.size;j++)
                                    {
                                            $('<div>').addClass('choice-unit')
                                            .addClass('h')
                                            .addClass('ship')
                                            .addClass(ship_name)
                                            .addClass('part-'+j)
                                            .width(grid.getUnitSize()/2).height(grid.getUnitSize()/2)
                                            .appendTo($_list_item)
                                            .data('ship',{
                                                    ship_name:ship_name,
                                                    part:j
                                            });

                                    }
                            }
                    }




                    $('#ship-picker div.ships').prepend($_ship_list);//.height(grid.getUnitSize());





                    $('#flip').click(function(){
                                    var old_direction=direction;
                                    direction=direction=='h'?'v':'h';
                                    $('#ship-picker li.choice .choice-unit').removeClass('direction-'+old_direction).addClass('direction-'+direction);
                                    insertMode();
                    });


                    
                }
              
                
                clearShips();

               
        }
	
	
	
	function ready()
	{
                $('#ship-picker').hide();
		$('#play').show();
	}
	
	

}(jQuery));