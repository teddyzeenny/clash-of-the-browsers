<?php
class GamesController extends AppController {
	
	var $uses=array('Score');
	var $components=array('RequestHandler');
        
        var $_mobile=null;
	
        function beforeFilter()
        {
            parent::beforeFilter();
		
            $this->set('title_for_layout','');

            
            if(Set::check($this->request->params,'device'))
            {
              
                    $this->_mobile=$this->request->params['device']=='m'?true:false;
                    $value=$this->_mobile?1:0;

                    setcookie("m", $value, time()+2592000,$this->webroot);  /* expire in 1 hour */
            }
            else if(Set::check($_COOKIE,'m'))
            {
                    $this->_mobile=$_COOKIE['m'];
            }
            else $this->_mobile=$this->RequestHandler->isMobile();

            $expires=1;
            header('Expires: '.gmdate('D, d M Y H:i:s', time()+$expires).' GMT');
            header('Cache-Control: max-age='.$expires.', public');

            header("Vary: User-Agent");
            
            $this->set('mobile',$this->_mobile);
        }
        

	function index($force_refresh=0)
	{
          /*  if(Set::check($this->request->params,'named.section'))
            {
                $section=$this->request->params['named']['section'];
                
                $device=$this->_mobile?'m':'d';
                
                if($section != 'home')$section='section-'.$section;
                $url= Router::normalize(array('controller'=>'games','action'=>'index','device'=>$device)).'/#'.$section;
                
                $this->redirect($url);
            }
            
           $scores= $this->Score->find('all',array(
                'limit'=>20,
                'page'=>1,
                'order'=>array('Score.value desc')
            ));
           */
            
           $this->set(compact('force_refresh'));
           
           if($this->_mobile)
           $this->render('mobile/index');
          
	}
	
        
        function get_scores()
        {
              $scores= $this->Score->find('all',array(
                'limit'=>20,
                'page'=>1,
                'order'=>array('Score.value desc')
            ));
           
           $this->layout='ajax';
           
           $this->set(compact('scores'));
        }
        
        
	function submit_score()
        {
            $this->Score->save($this->data);
            
            
            $this->redirect($this->referer().'#section-scores');
        }
        
        function combine_js()
        {
            $file_name=JS.'combined.js';
            
            if(file_exists($file_name))
            unlink($file_name);
            
	
            $file_array=array(
                'jquery',
                'modernizr.svg_border_radius',
                'gistfile1',
                'grid',
                'general',
                'profile',
                'ship_setup',
                'game'
            );
            
            $text='';
            foreach($file_array as $item)
            {
                $item_name=JS.$item.'.js';
                
                $fh = fopen($item_name, 'r');
                $text.=fread($fh, filesize($item_name));
                fclose($fh);
            }
            
            $file_handle = fopen($file_name,'w');
            fwrite($file_handle,$text);
            fclose($file_handle);
            
            exit('done');
        }
        
        
        
        function combine_css()
        {
            $desktop_file_name=CSS.'desktop.css';
            $mobile_file_name=CSS.'mobile.css';
            
            if(file_exists($desktop_file_name))
            unlink($desktop_file_name);
            
            if(file_exists($mobile_file_name))
            unlink($mobile_file_name);
            
	
            $file_array=array(
                'style',
                'info',
                'profile',
                'setup',
                'game'
            );
            
            $desktop_text='';
            $mobile_text='';
            
            foreach($file_array as $item)
            {
                $desktop_item_name=CSS.$item.'.css';
                $mobile_item_name=CSS.'mobile_'.$item.'.css';
                
                $fh = fopen($desktop_item_name, 'r');
                $desktop_text.=fread($fh, filesize($desktop_item_name));
                fclose($fh);
                
                $fh = fopen($mobile_item_name, 'r');
                $mobile_text.=fread($fh, filesize($mobile_item_name));
                fclose($fh);
            }
            
            $file_handle = fopen($desktop_file_name,'w');
            fwrite($file_handle,$desktop_text);
            fclose($file_handle);
            
            
            $file_handle = fopen($mobile_file_name,'w');
            fwrite($file_handle,$mobile_text);
            fclose($file_handle);
            
            exit('done');
        }
        
        
        function generateManifests()
        {
              $mobile_name=WWW_ROOT.'mobile_manifest.appcache';
            $desktop_name=WWW_ROOT.'desktop_manifest.appcache';
            
            if(file_exists($mobile_name))
            unlink($mobile_name);
            
             if(file_exists($desktop_name))
            unlink($desktop_name);
            
            $webroot=$this->webroot;
            
$mobile_content='CACHE MANIFEST
#v1.'.rand(1,1000).'

CACHE:
'.$webroot.'css/mobile-1.0.min.css
'.$webroot.'js/combined-1.0.min.js
'.$webroot.'img/bg.jpg
'.$webroot.'img/sprite.png
'.$webroot.'img/chrome.svg
'.$webroot.'img/chrome_hit.svg
'.$webroot.'img/opera_hit.svg
'.$webroot.'img/opera.svg
    
NETWORK:
'.Router::url(array('controller'=>'games','action'=>'get_scores'));

           
            $file_handle = fopen($mobile_name,'w');
            fwrite($file_handle,$mobile_content);
            fclose($file_handle);
            
            
$desktop_content='CACHE MANIFEST
#v1.'.rand(1,1000).'

CACHE:
'.$webroot.'css/desktop-1.0.min.css
'.$webroot.'js/combined-1.0.min.js
'.$webroot.'img/bg.jpg
'.$webroot.'img/sprite.png   
'.$webroot.'img/chrome.svg
'.$webroot.'img/opera.svg
'.$webroot.'img/chrome_hit.svg
'.$webroot.'img/opera_hit.svg
'.$webroot.'img/title.png
'.$webroot.'img/chromander_84_81.png
'.$webroot.'img/opera_84_81.png
    
NETWORK:
'.Router::url(array('controller'=>'games','action'=>'get_scores'));
            

            $file_handle = fopen($desktop_name,'w');
            fwrite($file_handle,$desktop_content);
            fclose($file_handle);
        }
        
        function create_manifest()
        {
           $this->generateManifests();
            
            exit('done');
        }
        
        
        
}
?>