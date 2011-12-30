<?php
class UpdatesController extends AppController
{
	var $helpers=array('Html','Js'=>array('Jquery'));
	var $root=null;
	
	function beforeFilter()
	{
		parent::beforeFilter();
		$this->root=$_SERVER['DOCUMENT_ROOT'].substr($this->webroot,1);
	}
	
	function index()
	{}
	
	function get_updates()
	{
		$circles=$this->data['circles'];
		$now=date('U');
		$output=array();
		foreach($circles as $i=>$circle)
		{
			$unix_stamp=isset($circle['unix_stamp'])?$circle['unix_stamp']:null;
			$circle['args']=$circle['args']==null?array():$circle['args'];
			
			if($unix_stamp == null)
			{
				$files=$this->Update->getUpdates($this->root);
			}
			else
			{
				$files=array();
			}
			
			$output['content']['data'][$i]['data']=$files;
			$output['content']['data'][$i]['unix_stamp']=$now;
		}
		$this->set(compact('output'));
	}
	
	function extract_updates()
	{
		$this->Update->extract($this->root);
		$output=array(
						'content'=>array(
										'status'=>'success',
										'status_description'=>'Updates successfully extracted'
										)
					);
		$this->set(compact('output'));
		
		$this->render('data');
	}
	
	function reset_update_date()
	{
		$this->Update->resetUpdateDate($this->root);
		$output=array(
						'content'=>array(
										'status'=>'success',
										'status_description'=>'Updates successfully reset'
										)
					);
		$this->set(compact('output'));
		
		$this->render('data');
	}
	
}
?>