<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different urls to chosen controllers and their actions (functions).
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright 2005-2011, Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2005-2011, Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.2.9
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
/**
 * Here, we are connecting '/' (base path) to controller called 'Pages',
 * its action called 'display', and we pass a param to select the view file
 * to use (in this case, /app/View/Pages/home.ctp)...
 */
	Router::connect('/', array('controller' => 'games', 'action' => 'index'));
/**
 * ...and connect the rest of 'Pages' controller's urls.
 */
        
      Router::connect('/updates/extract_updates',array('controller'=>'updates','action'=>'extract_updates'));
      
      Router::connect('/updates/reset_update_date',array('controller'=>'updates','action'=>'reset_update_date'));
      
      
      Router::connect('/games/get_scores',array('controller'=>'games','action'=>'get_scores'));
      Router::connect('/games/create_manifest',array('controller'=>'games','action'=>'create_manifest'));
      Router::connect('/games/combine_js',array('controller'=>'games','action'=>'combine_js'));
      Router::connect('/games/combine_css',array('controller'=>'games','action'=>'combine_css'));
      Router::connect('/games/submit_score/*',array('controller'=>'games','action'=>'submit_score'));
      
      
      
    Router::connect('/:device', array('controller' => 'games', 'action' => 'index'));
    
    Router::connect('/:device/*',array('controller'=>'games','action'=>'index'));
    
  
    
   //  Router::connect('/:device/*', array('controller' => 'games', 'action' => 'index'));
	
/**
 * Load all plugin routes.  See the CakePlugin documentation on 
 * how to customize the loading of plugin routes.
 */
	CakePlugin::routes();

/**
 * Load the CakePHP default routes. Remove this if you do not want to use
 * the built-in default routes.
 */
	require CAKE . 'Config' . DS . 'routes.php';
