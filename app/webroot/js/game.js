var Game=function(){
  return {init:null};  
};

(function($){
    
        var is_init=false;
    
	var starter_point=null;
	var last_hit=null;
	var direction=null;
	
	
	var remote_grid=null;
	var own_grid=null;
        
	var window_timeout=null;
        
        function setMessage(ships_hit,ships_sunk)
        {
           var $_message=$('#game .message');
           var general=General.generalAlias(remote_grid.getState().options.general);
           if(ships_hit==0 && ships_sunk==0)
           {
               $_message.text(general +' just missed');
           }
           else if(ships_hit>0 && ships_sunk==0)
           {
               $_message.text(general+' just hit '+ships_hit+' part'+(ships_hit>1?'s':'')+' of a ship!');
           }
           else if(ships_hit==0 && ships_sunk>0)
           {
               $_message.text(general+' just sunk '+ships_sunk+' ship'+(ships_sunk>1?'s':'')+' !!');
           }
           else if(ships_hit>0 && ships_sunk>0)
           {
               $_message.text(general+' just sunk '+ships_sunk+' ship'+(ships_sunk>1?'s':'')+' and hit '+ships_hit+' part'+(ships_hit>1?'s':'')+' of another ship');
           }
        }
        
        
        
     
        function youLost()
        {
            var top=window.pageYOffset ||  document.body.scrollTop;
            if(!top)top=0;
            top+=30;
            
            $('#overlay').show();
            $('#lose-popup').css({
                position:'absolute',
                left:Math.round($('#game').width()/2-$('#lose-popup').width()/2),
                top:top
              
            }).show();
        }
        
        function closeYouLost()
        {
             $('#overlay').hide();
             $('#lose-popup').hide();
        }
        
        function youWon(score)
        {
            var top=window.pageYOffset ||  document.body.scrollTop;
            if(!top)top=0;
            top+=30;
            
           
            
            $('#overlay').show();
            $('#win-popup').css({
                position:'absolute',
                left:Math.round($('#game').width()/2-$('#lose-popup').width()/2),
                top:top+'px'
              
            }).find('.score').text(score)
            .end().find('input[name="data[Score][value]"]').val(score)
            .end()
            .find('input[name="data[Score][admiral]"]').val(General.generalAlias(own_grid.getState().options.general))
            .end()
            .find('input[name="data[Score][name]"]').val(General.getState('profile').name)
            .end()
            .show();
            
            
        }
            
        function closeYouWon()
        {
            $('#overlay').hide();
            $('#win-popup').hide();
        }
            
         function windowResize()
                {
                    clearTimeout(window_timeout);
                   
                    window_timeout=setTimeout(function(){
                        //Game.init();
                        var size=$('#game .grid-container-for-remote').width();
                        var own_size=$('#game .grid-container-for-own').width();
                        own_grid.resize(Math.round(own_size));
                        remote_grid.resize(size);
                        
                        if( $('#game #extra-info').height()>0)
                       $('#game #extra-info').height(Math.round(own_size));
                    },100);
                }
                            
        Game.init=function(){
                
                
            
                
                if(is_init)
                {
                    own_grid.destroy();
                    remote_grid.destroy();
                }
                else
                {
                    var first_text=$('#game .show-own').text();
                    
                    $('#game .show-own').toggle(function(){
                         $('#game #extra-info').height($('#game .grid.own').width());
                         
                        $(this).text('Hide');
                        return false;
                    },function(){
                        $('#game #extra-info').height(0);
                        $(this).text(first_text);
                        return false;
                    });
                    
                    
                    
                    $(window).bind('resize',function(){
                        windowResize();
                      });
                      
                      $('#lose-popup').find('a').bind('click',function(){
                         closeYouLost(); 
                      });
                      
                       $('#win-popup').find('a').bind('click',function(){
                         closeYouWon(); 
                      }).end()
                      .find('form')
                      .bind('submit',function(){
                          var profile=General.getState('profile');
                          profile.name=$(this).find('input[name="data[Score][name]"]').val();
                          
                          General.setState('profile',$.extend(true,{},profile));
                         
                          return true;
                      });

                }
               
           
               
                is_init=true;
                
               
                
            	var size=$('#game .grid-container-for-remote').width();
                var own_size=$('#game .grid-container-for-own').width();
                
		own_grid = new Grid().init({selector:'#own-grid',size:Math.round(own_size),callbacks:{stateChange:function(){stateChange('own');}}});
		remote_grid=new Grid().init({selector:'#remote-grid',size:size,type:'remote',callbacks:{stateChange:function(){stateChange('remote');}}});
		
                
                var state=General.getState('game');
                
                
                function stateChange(type)
                {
                    var s = General.getState('game');
                    if(!s)s={};
                    
                    if(type=='own')
                    {
                        s['own']=$.extend(true,{},own_grid.getState());
                        $('#remote-score').text(own_grid.getState().score);
                    }
                    else if(type=='remote')
                    {
                        s['remote']=$.extend(true,{},remote_grid.getState());
                        $('#own-score').text(remote_grid.getState().score);
                    }
                  
                    General.setState('game',s);
                }
                
                if(!state)
                {
                    
                    state=General.getState('setup');
                    state.options.size=own_size;
                    state.options.selector='#own-grid';
                    state.options.general=General.getState('profile').general;
                    
                    
                    own_grid.setState($.extend(true,{},state));
                    remote_grid.autoFill(state.ships);
                    
                   
                    var general='chromander';
                    if(state.options.general=='chromander')general='opera';
                    
                    
                    remote_grid.setGeneral(general);
                }
                else
                {
                    state.own.options.selector='#own-grid';
                    state.remote.options.selector='#remote-grid';
                    state.remote.options.size=size;
                    state.own.options.size=own_size;
                  
                    own_grid.setState($.extend(true,{},state.own));
                    remote_grid.setState($.extend(true,{},state.remote));
                    
                }
                
		stateChange('own');
                stateChange('remote');
                
                
                //$('.center').width(remote_grid.getGridSize()); //remove later
		
                var $_message=$('#game .message');
                var own_general=General.generalAlias(own_grid.getState().options.general);
                var remote_general=General.generalAlias(remote_grid.getState().options.general);
                $_message.text(own_general+' VS '+remote_general+'. Click on the grid to start the attack');
                
                
		ownWar();
        };

        function destroy(){
            own_grid.destroy();
            delete own_grid;
            remote_grid.destroy();
            delete remote_grid;
        }
	
	function ownWar()
	{
		
		remote_grid.setWarMode({attacked:function(success){

				
				
				if(!success)
				{
                                    
                                         $('#game .message').text(General.generalAlias(remote_grid.getState().options.general)+' is playing...');
					remote_grid.unsetWarMode();
					General.setTimeout(remoteWar,800);
				}
				else if(success==3)
				{
					remote_grid.unsetWarMode();
					General.setTimeout(function(){
						General.setState('game',null);
                                                youWon(remote_grid.getState().score);
					},1000);
					
				}
			
			}
		});
	}
	
	
	function remoteWar()
	{
		
                var non_hit=[];
		
		var count=own_grid.getState().options.count;
		
                var ships_sunk=0;
                var ships_hit=0;
                
		function attack(){
			
                        

			var next_target=null;
			
			function fillList()
			{
				var found_targets=[];
				
				var hits=own_grid.getHits();
                               
				next_target=null;
				for(var i=0;i<count;i++)
				{
					for(var j=0;j<count;j++)
					{
						if(!hits[i] || !hits[i][j])
						{
							non_hit.push({x:i,y:j});
							
							if(last_hit)
							{								
								if(
									i==last_hit.x && j==last_hit.y+1
								|| i==last_hit.x && j==last_hit.y-1
								|| i==last_hit.x-1 && j==last_hit.y
								|| i==last_hit.x+1 && j==last_hit.y
								)
								{
									if(!direction)
									{
										next_target={x:i,y:j};
										break;
									}
									else found_targets.push({x:i,y:j});
								}
							}
						}
						
					}
					if(next_target)break;
				}
				
				if(found_targets.length>0)
				{
					for(var i=0;i<found_targets.length;i++)
					{
						if(direction=='v' && found_targets[i].y==last_hit.y)
						{
							next_target=found_targets[i];
							break;
						}
						else if(direction=='h' && found_targets[i].x==last_hit.x)
						{
							next_target=found_targets[i];
							break;
						}
					}
					
					if(!next_target)next_target=found_targets[0];
				}
			}
			
			fillList();
			
			if(!next_target && last_hit && (last_hit.x!=starter_point.x || last_hit.y!=starter_point.y) )
			{
				last_hit=starter_point;
				fillList();
			}
			
			if(!next_target)
			{
				var index=Math.floor(Math.random()*non_hit.length);
				next_target={x:non_hit[index].x,y:non_hit[index].y};
			}
			

			var attack_result=own_grid.attack(next_target.x,next_target.y);
			
			if(attack_result==0)
			{
                            General.setTimeout(ownWar,200);
			}
			else if(attack_result==1)
			{
                            ships_hit++;
                            last_hit={x:next_target.x,y:next_target.y};
                            if(!starter_point)starter_point=last_hit;
                            else
                            {
                                    if(last_hit.x!= starter_point.x)direction='v';
                                    else direction='h';

                            }
			}
			else if(attack_result==2)
			{
                                ships_sunk++;
                                ships_hit=0;
				starter_point=null;
				last_hit=null;
				direction=null;
			}
			else
			{
                            
                            ships_hit=0;
                            ships_sunk++;
				General.setTimeout(function(){
                                        General.setState('game',null);
                                        youLost();
				},1000);
				
			}
			
			if(attack_result && attack_result<3)
                        {
                            General.setTimeout(attack,1000);
                        }
                        
                        if(attack_result ==0 || attack_result==3)
                        {
                            setMessage(ships_hit,ships_sunk);
                        }
		}
		
		attack();
		
	}
	
	
	
	
}(jQuery));