

var General=function(){
    return {
        setState:null,
        getState:null,
        setTimeout:null
    }
};

(function($){
    
    $.fn.hide=function()
    {
       return this.each(function(){
           this.style.display='none';
           
       });
       
    };

    $.fn.show=function()
    {
         return this.each(function(){
           this.style.display='block';
           
       });
    };

    
    General.setTimeout=function(fn){
      fn();  
    };
    
    setTimeout(function(){
        General.setTimeout=function(fn,time)
        {
            return setTimeout(fn,time);
        }
    },1);


    General.generalAlias=function(general)
    {
        if(general=='chromander')return 'Chromander';
        else if(general=='opera')return 'Operative';
        
        else return '';
    }
    $(function(){
       
       $('#restart').click(function(){
           General.setState('game',null);
           Game.init();
       });
       
       
       
 
       setInterval(function(){
           hashStuff();
       },120);
       
       /*
       $('.version-switcher').bind('click',function(){
           var appCache = window.applicationCache;
           if(appCache)
           {
               appCache.update();
           }
           return false;
            
       });
       */
      
     

       var hash='home';
       
       function hashStuff(bool,target)
       {
           var old_hash=hash;
           
           hash=window.top.location.href.replace(/^.*#/,'');
           
           if(hash==window.top.location.href)
           {
              hash='home';
              
               if(General.getState('page'))
               {
                   var href=window.top.location.href.replace(/#.*$/,'');

                   if(href==window.top.location.href)
                   {

                       hash=General.getState('page');
                   }

               }
              window.top.location.href=window.top.location.href+'#'+hash;
           }
           if(hash != old_hash || bool){
               /*
               var $_version_switcher=$('a.version-switcher');
               
               var href=$_version_switcher.attr('href');
               
               href=href.replace(/\/section:.*$/,'');
               $_version_switcher.attr('href',href+'/section:'+hash.replace('section-',''));
               */
              
               $('nav.top').show();
               if(hash=='home')goToInfo();
               else if(hash=='section-profile')goToProfile();
               else if(hash=='section-setup')goToSetup();
               else if(hash=='section-game')goToGame();
               else if(hash=='section-instructions')goToInstructions();
               else if(hash=='section-scores')goToScores();
               
               
               General.setState('page',hash);
           }
       }
       
       hashStuff(true,hash);
       
       stateChange();
       
         
        ajax($('#scores').data('url'),function(response){
            var scores=JSON.parse(response);
            
            var html='';
            var home_html='';
            
            for(var i=0;i<scores.length;i++)
            {
                var row='<li><span class="admiral '+scores[i].Score.admiral+'"></span><span class="name">'+scores[i].Score.name+'</span><span class="value">'+scores[i].Score.value+'</span></li>';
                html+=row;
                if(i<10)home_html+=row;
            }
            $('#scores').find('ul').html(html);
            $('#info').find('.high-scores ul').html(home_html);
        });
             
    });
    
    
    function stateChange()
    {
        if(General.getState('game'))
        {
            $('#resume').show();
        }
        else $('#resume').hide();
        
        
         var profile=General.getState('profile');

         if(profile)
         {
           $('header').removeClass('chromander').removeClass('opera')
           .addClass(profile.general);
         }
               
    }
    
    function goToSetup()
    {
        $('section').addClass('hidden');
        $('#setup').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('big').addClass('small');
     
        $('footer nav').show();
        ShipSetup.init();
    }
    
    function goToGame()
    {
        $('section').addClass('hidden');
        $('#game').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('big').addClass('small');
        $('footer nav').show();
       
     
        Game.init();
    }
    
    function goToInfo()
    {
        if($('body').hasClass('mobile'))
        $('nav.top').hide();
    
        $('section').addClass('hidden');
        $('#info').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('small').addClass('big');
        $('footer nav').hide();
    }
    
     function goToProfile()
     {
        $('section').addClass('hidden');
        $('#profile').removeClass('hidden').removeClass('invisible');;
        $('header').removeClass('small').addClass('big');
        Profile.init();
        $('footer nav').show();
        
     }
     
     
      function goToInstructions()
     {
        $('section').addClass('hidden');
        $('#instructions').removeClass('hidden').removeClass('invisible');;
        $('footer nav').show();
        /*
        if($('body').hasClass('mobile'))
        $('header').removeClass('small').addClass('big');
        */
     }
    
    
    function goToScores()
    {
       
        
        $('section').addClass('hidden');
        $('#scores').removeClass('hidden').removeClass('invisible');
        $('footer nav').show();
        
        /*
        if($('body').hasClass('mobile'))
        $('header').removeClass('small').addClass('big');
        */
    }
    
    var state={};

    General.setState=function(page,s)
    {
        state['state_'+page]=s;
        var json_state=JSON.stringify(s);
        localStorage.setItem('state_'+page,json_state);
        
        
        stateChange();
    }
    
    
    General.getState=function(page)
    {
        if(state['state_'+page])return state['state_'+page];
        else
        return JSON.parse(localStorage.getItem('state_'+page));
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function ajax(url,callback)
    {
        var xmlhttp;
        if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
        else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
          
        xmlhttp.onreadystatechange=function()
        {
           
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                callback(xmlhttp.responseText);
            }
          }
          
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
        
        
    }
}(jQuery));


 // Check if a new cache is available on page load.
      if(window.applicationCache)
      {
        window.addEventListener('load', function(e) {

          window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
              // Browser downloaded a new app cache.
              // Swap it in and reload the page to get the new hotness.
              window.applicationCache.swapCache();
              if (confirm('A new version of this application is available. Load it?')) {
                window.location.reload();
              }
            } else {
              // Manifest didn't changed. Nothing new to server.
            }
          }, false);

        }, false);
      }