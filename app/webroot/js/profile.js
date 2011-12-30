var Profile=function(){
  return {init:null};  
};

(function($){
    
    var is_init=false;
    
    Profile.init=function(){
        if(is_init)return;
        
        is_init=true;
        
        var $_current=$('#profile article li').find('.title,.title-img')
        .bind('click',function(){
            var general=$(this).parents('li:first').data('general');
            
            var old_profile=General.getState('profile');
            
            if(old_profile && old_profile.general!=general)General.setState('game',null);
            
            var profile=old_profile;
            
            if(!profile)profile={};
        
            profile.general=general;
            General.setState('profile',profile);
        })
        .end()
         .filter(':not(:first)').css('left','1000px')
        .end()
        .filter(':first').addClass('current');
       
        
        $('#profile article nav a.left').addClass('disabled');
        
       
        $('#profile article nav a').bind('click',function(){
            var direction='right';
            
            var $_next=$_current.next('li');
            
            if($(this).hasClass('left'))
                {
                    direction='left';
                    $_next=$_current.prev('li');
                }
            
            if($_next.size()==0){return;}
            
            
             $_current.removeClass('current').css('left',direction=='left'?'1000px':'-2000px');
             $_current=$_next.addClass('current').css('left','0px');
             
             if($_current.next('li').size()==0)$('#profile article nav a.right').addClass('disabled');
             else $('#profile article nav a.right').removeClass('disabled');
             
             if($_current.prev('li').size()==0)$('#profile article nav a.left').addClass('disabled');
             else $('#profile article nav a.left').removeClass('disabled');
            
             
             
        });
        
    };
    
}(jQuery));