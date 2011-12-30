<?php
class Update extends AppModel
{
	var $name='Update';
	var $useTable=false;
	
	function getLastUpdate($root)
	{
		$file_name=$root.'updates/last_update.txt';
		if(!is_dir($root.'updates') || !file_exists($file_name))
		{
			return mktime(0,0,0,date('m'),date('d')-1,date('Y'));
		}
		else 
		{
			$handle=fopen($file_name,'r');
			$date=fread($handle,filesize($file_name));
			fclose($handle);
			return $date;
		}
	}
	
	function getUpdates($root)
	{
		$last_date=$this->getLastUpdate($root);
		$all_files=$this->getAllFiles($root);
		$modified_files=array();
		
		$counter=0;
		foreach($all_files as $file)
		{
			$modified_date=$file['File']['modified'];
			if($modified_date<$last_date)continue;
			
			$name=$file['File']['name'];
			if(preg_match('/\/cache\//i',$name) 
						|| preg_match('/\/tmp\//i',$name) 
							|| preg_match('/core/i',$name)
							  || preg_match('/image_\d/i',$name))continue;
			
			$file['File']['modified']=date('d-M-Y h:i:s a',$modified_date);
			$modified_files[]=Set::merge(array("File"=>array('id'=>$counter)),$file);
			$counter++;
		}
		
		return $modified_files;
	}
	
	function getAllFiles($root)
	{
		$dir=$root.'app/';
		return $this->listFiles($dir);
	}
	
	function listFiles($dir)
	{
		$i=0;
		if (!$handle = opendir($dir)) return array();
		
		$file_array=array();
		$directories=array();
		
		 while (false !== ($file = readdir($handle))) 
		 {
			if(!is_dir($dir.$file)) 
		 	{
		 		$file_array[$i]['File']['name']=$dir.$file;
				$file_array[$i]['File']['modified']=filemtime($dir.$file);
				$i++;
			}
			else
			{
				if($file=='.' || $file=='..')continue;
				$directories[]=$dir.$file;
			}
	    }
		foreach($directories as $directory)
		{
				$file_array=array_merge($file_array,$this->listFiles($directory.'/'));
		}
		closedir($handle);
		
		return $file_array;
	}
	
	function extract($root)
	{
		$updated_files=$this->getUpdates($root);
		
		$update_dir=$root.'updates/';
		
		if(!is_dir($update_dir))
		{
			mkdir($update_dir);
		}

		$this->emptyDirectory($update_dir);
		
		foreach($updated_files as $file)
		{
			$destination=$update_dir.str_replace($root,"",$file['File']['name']);
			
			
			$folders_array=explode('/',$destination);
			
			$base="";
			foreach($folders_array as $i=> $folder)
			{
				if($i!=count($folders_array)-1)
				{
					$base.=$folder.'/';
					if(!is_dir($base))
					{
						mkdir($base);
					}
				}
			}
			
			copy($file['File']['name'],$destination);
		}
	}
	
	
	function resetUpdateDate($root)
	{
		$file_name=$root.'updates/last_update.txt';
		$handle=fopen($file_name,'w');
		fwrite($handle,date('U'));
		fclose($handle);
	}
	
	function emptyDirectory($dir,$exception=array())
	{
		if (!$handle = opendir($dir)) return array();
		
		 while (false !== ($file = readdir($handle))) 
		 {
			if(!is_dir($dir.$file)) 
		 	{
		 		if($file!='last_update.txt')
				unlink($dir.$file);
			}
			else
			{
				if($file=='.' || $file=='..')continue;
				$this->emptyDirectory($dir.$file.'/');
				rmdir($dir.$file);
			}
	    }
		closedir($handle);
	}

	
}