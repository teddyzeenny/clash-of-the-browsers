<!DOCTYPE html>
<?php $manifest=$mobile?$this->webroot.'mobile_manifest.appcache':$this->webroot.'desktop_manifest.appcache';?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" manifest="<?php echo !$force_refresh?$manifest:'';?>">
<head>
	<title></title>
	<meta charset="UTF-8"/>
        <?php if($mobile):?>
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <?php endif;?>
        <meta name="description" content="Clash of the Browsers. Final assignment for W3C mobile course" />

	<link rel="canonical" href="http://<?php echo env('SERVER_NAME').$this->Html->url(array('controller'=>'games','action'=>'index'));?>" />
        
	<?php 
        /*
        echo $this->Html->script('custom_jquery/core.js');
        echo $this->Html->script('custom_jquery/sizzle.js');
        echo $this->Html->script('custom_jquery/sizzle-jquery.js');
        echo $this->Html->script('custom_jquery/callbacks.js');
        echo $this->Html->script('custom_jquery/support.js');
        echo $this->Html->script('custom_jquery/css.js');
        echo $this->Html->script('custom_jquery/data.js');
        echo $this->Html->script('custom_jquery/event.js');
        echo $this->Html->script('custom_jquery/dimensions.js');
        echo $this->Html->script('custom_jquery/traversing.js');
        echo $this->Html->script('custom_jquery/attributes.js');
        echo $this->Html->script('custom_jquery/manipulation.js');
         */
        ?>
        
	<?php echo $scripts_for_layout;?>
        <?php 
         /*
            echo $this->Html->script('custom_jquery/jquery');
            echo $this->Html->script('modernizr.svg_border_radius');
            echo $this->Html->script('gistfile1');
            echo $this->Html->script('grid');

            echo $this->Html->script('general');
            echo $this->Html->script('profile');
            echo $this->Html->script('ship_setup');
            echo $this->Html->script('game');
          */
          echo $this->Html->script('combined-1.0.min');
       // echo $this->Html->script('combined-1.0.min');
        ?>
	
        
        
</head>

<body class="<?php echo $mobile?'mobile':'';?>">
	<div class="center">
		<?php echo $content_for_layout;?>
	</div>
</body>


</html>
