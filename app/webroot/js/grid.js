(function($){
    
    window.Grid=function (){

            var $_grid=null;

            var callbacks={
              stateChange:function(){}  
            };
            
            var state = {
                            ships:[],
                            mode:'read',
                            options:{
                                    count:6,
                                    size:null,
                                    type:'',
                                    general:'chromander'
                            },
                            score:0,
                            hit:{}
                            
            };

            var init=function(options)
            {

                    options=$.extend(true,{},{
                            selector:'.grid',
                            size:$(window).width(),
                            count:5,
                            type:'own',
                            general:'chromander',
                            callbacks:{}
                    },options);

                    $_grid=$(options.selector);
                    state.options.count=options.count;
                    state.options.size=Math.floor(options.size-(0.2*options.size));
                    state.options.type=options.type;
                   
                    setGeneral(options.general);
                    
                    $.extend(callbacks,options.callbacks);

                    var unit_size=Math.floor((state.options.size-1)/options.count - 1);

                    var grid_width=(unit_size*options.count)+(options.count);

                    $_grid.width(grid_width);
                    
                    $_grid.addClass(options.type);

                    var $_grid_units=$('<div>');


                    for(var i=0;i<options.count;i++)
                    {
                            for(var j=0;j<options.count;j++)
                            {
                                    $('<div>')
                                    .addClass('grid-unit')
                                    .addClass('x-'+i)
                                    .addClass('y-'+j)
                                    .css('border-radius',Math.round(unit_size))
                                    .css('-webkit-border-radius',Math.round(unit_size))
                                    .css('-moz-border-radius',Math.round(unit_size/2))
                                    .data('position',{x:i,y:j})
                                    .appendTo($_grid_units).width(unit_size).height(unit_size);
                            }
                    }

                    $_grid_units=$_grid_units.find('div');
                    $_grid.append($_grid_units);

                    $_grid.addClass('animate');
                    return this;
            };

            var resize=function(size)
            {
                
                 var new_size=Math.floor(size-(0.2*size));
                 
                 if(state.options.size != new_size)
                 {
                     state.options.size=new_size;
                 }
                 else return;
                 
                 var unit_size=Math.floor((state.options.size-1)/state.options.count - 1);

                 var grid_width=(unit_size*state.options.count)+(state.options.count);

                 $_grid.width(grid_width).find('.grid-unit').width(unit_size).height(unit_size);
            };
            
            var destroy=function()
            {
                $_grid.html('')
                .removeClass('chromander')
                .removeClass('opera')
                .removeClass('remote')
                .removeClass('own');
            };
            
            var setGeneral=function(general)
            {
                
                $_grid
                .removeClass('chromander')
                .removeClass('opera')
                .addClass(general);
                
                state.options.general=general;
            };

            var setInsertMode=function(options)
            {
                    var ship=options.ship;
                    $_grid=$_grid;
                    unsetInsertMode();
                    state.mode='insert';

                    $_grid.addClass('insert-mode')
                    .find('.grid-unit')
                    .bind('mouseenter',function(){
                            $_grid.find('.grid-unit').removeClass('potential').removeClass('denied');
                            var position=$(this).data('position');



                            var $_units=null;

                            for(var i=0;i<ship.size;i++)
                            {
                                    var x=position.x;
                                    var y=position.y+i;

                                    if(ship.direction=='v')
                                    {	
                                            x=position.x+i;
                                            y=position.y;

                                    }

                                    if(!$_units)$_units=$('.x-'+x+'.y-'+y);
                                    else
                                            {
                                                    $_units=$_units.add($_grid.find('.x-'+x+'.y-'+y));
                                            }
                            }

                            if(canInsert(ship,position))
                            {
                                    $_units.addClass('potential');
                            }
                            else $_units.addClass('denied');

                    })
                    .bind('mouseleave',function()
                    {
                            $_grid.find('.grid-unit').removeClass('potential');
                    })
                    .bind('click',function(){
                            var position=$(this).data('position');
                            if(!canInsert(ship,position))return;
                            addShip(ship,position);
                            unsetInsertMode();
                            stateChange();
                            options.inserted();

                    });

            };


            var unsetInsertMode=function()
            {
                    state.mode='read';
                    $_grid.removeClass('insert-mode')
                    .find('.grid-unit')
                    .removeClass('potential')
                    .removeClass('denied')
                    .unbind('click')
                    .unbind('mouseenter')
                    .unbind('mouseleave');
            };


            var addShip=function(ship,position)
            {
                    $_self=$(false);


                    var positions=[];

                    for(var i=1;i<=ship.size;i++)
                    {
                            var x=position.x;
                            var y=position.y+i-1;

                            if(ship.direction=='v')
                            {	
                                    x=position.x+i-1;
                                    y=position.y;
                            }
                            positions.push({x:x,y:y});

                            $_self=$_self.add($_grid.find('.x-'+x+'.y-'+y).addClass('part-'+i));
                    }


                    state.ships.push($.extend({},ship,{positions:positions}));
                    $_self.addClass('ship').addClass(ship.name).data('ship',state.ships[state.ships.length-1]).addClass('direction-'+ship.direction);

                    //if(state.type=='remote')$_self.addClass('hidden');
            };


            var canInsert=function(ship,position,ships)
            {
                    if(!ships)
                    ships=state.ships;

                    //reserve cells
                    var reserve=[];
                    for(var i=0;i<ship.size;i++)
                    {
                            var x=position.x;
                            var y=position.y;


                            if(ship.direction=='h')y+=i;
                            else x+=i;

                            reserve.push({x:x,y:y});

                            if(x > state.options.count-1 || x < 0
                                            || y > state.options.count-1 || y <0)return false;
                    }

                    var extras=[];
                    for(var i=0;i<reserve.length;i++)
                    {
                            extras.push({x:reserve[i].x+1,y:reserve[i].y});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y});
                            extras.push({x:reserve[i].x,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y+1});
                    }
                    reserve=reserve.concat(extras);


                    for(var i=0;i<ships.length;i++)
                    {

                            for(var j=0;j<reserve.length;j++)
                            {
                                    for(var k=0;k<ships[i].positions.length;k++)
                                    {
                                            if(ships[i].positions[k].x==reserve[j].x 
                                                            && ships[i].positions[k].y==reserve[j].y)return false;
                                    }
                            }
                    }

                    return true;
            };


            var stateChange=function(){
                    callbacks.stateChange(state);
            };

            var setState=function(new_state)
            {
                    clear();
                    init($.extend(true,{},new_state.options));
                    var ships=new_state.ships;
                    for(var i=0;i<ships.length;i++)
                    {
                        addShip(ships[i],ships[i].positions[0]);
                    }

                    var hit=new_state.hit;
                    
                    var y;
                    
                    for(var x in hit)
                    {
                        for(y in hit[x])
                        {
                            if(hit[x][y])
                            this.attack(x,y,true); 
                        }
                        
                        
                    }
                    
                    state.score=new_state.score;
                    
                    stateChange();

            };

            var clear=function()
            {
                    $_grid.html('');
                    $_grid=null;
                    state.ships=[];

            };


            var clearShips=function()
            {
                    $_grid.find('.grid-unit').removeClass('ship').removeClass('direction-v').removeClass('direction-h')
                    .each(function(){
                            var className=$(this).prop('class');

                            var classes=className.split(' ');

                            for(var i=0;i<classes.length;i++)
                            {
                                    classes[i]=classes[i].replace(/^part.*/,'');
                                    classes[i]=classes[i].replace(/^ship.*/,'');
                            }
                            className=classes.join(' ');

                            $(this).prop('class',className);
                    });
                    state.ships=[];
            };


            var autoFill=function(ships)
            {
                    clearShips();
                    var placed_ships=[];
                    var major_counter=0;

                    for(var s=0;s<100;s++)
                    {
                            placed_ships=[];
                            var counter=0;

                            for(var i=0;i<ships.length;i++)
                            {
                                    var ship=ships[i];

                                    var direction='h';
                                    var position={x:0,y:0};

                                    for(var k=0;k<10000;k++)
                                    {
                                            direction=Math.round(Math.random())==0?'v':'h';

                                            position={x:Math.floor(Math.random()*state.options.count),y:Math.floor(Math.random()*state.options.count)};
                                            ship=$.extend(true,{},ship,{direction:direction});

                                            if(canInsert(ship,position,placed_ships))
                                            {
                                                    var positions=[];
                                                    for(var j=1;j<=ship.size;j++)
                                                    {
                                                            var x=position.x;
                                                            var y=position.y+j-1;

                                                            if(ship.direction=='v')
                                                            {	
                                                                    x=position.x+j-1;
                                                                    y=position.y;
                                                            }
                                                            positions.push({x:x,y:y});
                                                    }

                                                    placed_ships.push($.extend(true,{},ship,{positions:positions}));
                                                    break;
                                            }
                                            counter++;

                                    }

                            }


                            if(placed_ships.length==ships.length)break;

                            major_counter++;
                    }


                    if(placed_ships.length==ships.length)
                    {
                            for(var i=0;i<placed_ships.length;i++)
                                    addShip(placed_ships[i],placed_ships[i].positions[0]);
                    }




            };

            var setWarMode=function(options)
            {
                    state.mode='war';
                    $_grid.addClass('war')
                    .find('.grid-unit').bind('click',function(){
                            if($(this).hasClass('hit'))return;
                            var success=attack($(this).data('position').x,$(this).data('position').y);
                            options.attacked(success);
                    });

            };

            var unsetWarMode=function(){
                    state.mode='read';
                    $_grid.removeClass('war').find('.grid-unit').unbind('click');
            };

            var attack=function(x,y,keep_state)
            {
                    
                    var $_grid_unit=$_grid.find('.x-'+x+'.y-'+y).addClass('hit');

                    if(typeof state.hit[x]=='undefined')state.hit[x]={};
                    
                    
                   state.hit[x][y]=true;

                    if($_grid_unit.hasClass('ship'))
                            {
                                    var ship=$_grid_unit.data('ship');

                                    var all_hit=true;
                                    var $_all_units=$(false);
                                    for(var i=0;i<ship.positions.length;i++)
                                    {
                                            if(ship.positions[i].x==x
                                                             && ship.positions[i].y==y)
                                            {
                                                    ship.positions[i].hit=true;
                                                    
                                            }

                                            if(!ship.positions[i].hit)all_hit=false;
                                            else  $_all_units=$_all_units.add($_grid.find('.x-'+ship.positions[i].x+'.y-'+ship.positions[i].y));
                                    }

                                    if(all_hit)
                                    {
                                            for(var i=0;i<ship.positions.length;i++)
                                            {
                                                    var x=ship.positions[i].x;
                                                    var y=ship.positions[i].y;

                                                    /*
                                                    $_grid.find(
                                                                    '.x-'+(x+1)+'.y-'+(y)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y)+','+
                                                                    '.x-'+(x)+'.y-'+(y+1)+','+
                                                                    '.x-'+(x)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x+1)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x+1)+'.y-'+(y+1)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y+1)
                                                            ).addClass('hit');
                                                        */
                                                       if(!state.hit[x+1] || !state.hit[x+1][y])attack(x+1,y,true);
                                                       if(!state.hit[x-1] || !state.hit[x-1][y])attack(x-1,y,true);
                                                       if(!state.hit[x] || !state.hit[x][y+1])attack(x,y+1,true);
                                                       if(!state.hit[x] || !state.hit[x][y-1])attack(x,y-1,true);
                                                       if(!state.hit[x+1] || !state.hit[x+1][y-1])attack(x+1,y-1,true);
                                                       if(!state.hit[x-1] || !state.hit[x-1][y-1])attack(x-1,y-1,true);
                                                       if(!state.hit[x+1] || !state.hit[x+1][y+1])attack(x+1,y+1,true);
                                                       if(!state.hit[x+1] || !state.hit[x-1][y+1])attack(x-1,y+1,true);
                                                       
                                                     //attack(x+1,y,true);
                                                     //attack(x-1,y,true);
                                                     //attack(x,y+1,true);
                                            }
                                            
                                           
                                            $_all_units.addClass('sunk');
                                            
                                            for(var i=0;i<state.ships.length;i++)
                                            {
                                                    var game_complete=true;

                                                    for(var j=0;j<state.ships[i].positions.length;j++)
                                                    {
                                                            if(!state.ships[i].positions[j].hit)
                                                            {
                                                                    game_complete=false;
                                                                    break;
                                                            }
                                                    }

                                                    if(!game_complete)break;
                                            }
                                            if(!game_complete)
                                            {if(!keep_state){state.score+=15;stateChange();}return 2;}
                                            else {if(!keep_state){state.score+=15;stateChange();};return 3;}
                                    }
                                    if(!keep_state){state.score+=5;stateChange();}
                                    return 1;
                            }

                    if(!keep_state){;state.score-=1;stateChange();}
                    return 0;


            };

            return {
                    init:init,
                    getGridSize:function(){return $_grid.width();},
                    getUnitSize:function(){return $_grid.find('.grid-unit:first').width();},
                    setInsertMode:setInsertMode,
                    unsetInsertMode:unsetInsertMode,
                    setState:setState,
                    getState:function(){return state;},
                    autoFill:autoFill,
                    clearShips:clearShips,
                    setWarMode:setWarMode,
                    unsetWarMode:unsetWarMode,
                    attack:attack,
                    getHits:function(){return state.hit;},
                    setGeneral:setGeneral,
                    resize:resize,
                    destroy:destroy
            };

    }

}(jQuery));