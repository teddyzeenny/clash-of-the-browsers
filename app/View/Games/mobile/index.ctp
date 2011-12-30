<?php
/*
$this->Html->css('mobile_style',null,array('inline'=>false));
$this->Html->css('mobile_info',null,array('inline'=>false));
$this->Html->css('mobile_profile',null,array('inline'=>false));
$this->Html->css('mobile_setup',null,array('inline'=>false));
$this->Html->css('mobile_game',null,array('inline'=>false));
*/

$this->Html->css('mobile-1.0.min',null,array('inline'=>false));
?>
       

<header class="big">
    <span id="header-img"></span>
    <h1>CLASH <small>OF THE</small> BROWSERS</h1>
    
     <nav class="top">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section-instructions">How to Play</a></li>
        </ul>
    </nav>
</header>
<div class="clearAll"></div>
    


<div id="container">
<section id="info" class="invisible" >
    
    <nav>
        <ul>
            <li id="resume"><a href="#section-game" >Resume Game</a></li>
            <li id="new_game"><a href="#section-profile">New Game</a></li>
            <li><a href="#section-instructions">How to Play</a></li>
            <li><a href="#section-scores">High Scores</a></li>
            <li><a href="<?php echo $this->Html->url(array('controller'=>'games','action'=>'index','device'=>'d'));?>">Desktop Version</a></li>
        </ul>
    </nav>
</section>

    
    
<section id="instructions" class="invisible">
    <article>
        <h1>How to Play</h1>
        
        <p>
            Clash of the Browsers is a "geeky" twist of the famous strategic game <a href="http://en.wikipedia.org/wiki/Battleship_(game)">Battleship</a>.
            <br />
            It is a two player game (in this case it is you against the computer).  The purpose is to sink all of your opponent's ships.
            Click on new game to start, then follow these steps.
            
        </p>
        
        <ul>
            <li>
                Step 1:
                
                <p>
                    Choose your favorite Admiral (browser). There are currently two admirals to choose from.
                </p>
            </li>
            
            <li>
                Step 2:
               
                <p>
                    Set up your battle field.  Place your ships strategically.  Click on the grid where you wish to place each ship.
                    You may rotate you ships before placing them.
                    Note that no two ships can be adjacent.  When you are done click on the "Start Clash" button.
                </p>
               
            </li>
            <li>
                Step 3:
                
                <p>
                    The game starts.  The main grid is your opponent's grid.  You need to click on this grid where you think your opponent's ships are. 
                    It will remain your turn until you click on an empty cell. That's when your opponent will take over.
                    If you sink all of your opponent's ships, you win.  If all of your ships are sunk, you lose.
                </p>
            </li>
        </ul>
        
        
        
    </article>
</section>
    
    

<section id="scores" class="invisible" data-url="<?php echo $this->Html->url(array('controller'=>'games','action'=>'get_scores'));?>">
       <article>
        <h1>High Scores</h1>
        <ul>
            <?php /*foreach($scores as $score):
            <li>
                <span class="admiral <?php echo $score['Score']['admiral'];?>"></span><span class="name"><?php echo $score['Score']['name']?> </span><span class="value"><?php echo $score['Score']['value'];?></span>
            </li>
             endforeach;*/?>
        </ul>
       </article>
</section>



<section id="profile" class="invisible">
   
    <article>
        <h1>Select your Admiral</h1>

        <nav>
            <a class="left" href="javascript:"></a>
            <a class="right" href="javascript:"></a>
        </nav>
        <ul>
            <li class="chromander" data-general="chromander">
                <a class="title-img" href="#section-setup"></a>
                <a class="title" href="#section-setup">Chromander</a>
                <p>
                    New to the battlefield, Chromander is a rising star, 
                    expanding his territory in a remarkable speed while showing no mercy to any of his opponents.
                </p>
            </li>
            <li class="opera" data-general="opera">
                <a class="title-img" href="#section-setup"></a>
                <a class="title" href="#section-setup">Operative</a>
                <p>
                   Although not as popular as the others, Operative is known for his ability to thrive where all others have failed.
                   His ability to adapt to difficult environments makes him without a doubt a master of unstable territories.
                </p>
            </li>

        </ul>
    
    
    </article>
    
</section>




<section id="setup" class="invisible">
    <h1>
       Strategy: Place your ships
    </h1>
    
    <nav class="actions">
        <ul>
            <li><a href="javascript:" id="auto-fill">Auto place</a></li>
            <li><a href="javascript:" id="clear-ships">Clear</a></li>
        </ul>
        
         
    </nav>
    
    <nav>
        

        <div id="ship-picker">
            <span class="hint">Click on the grid where you wish to place this ship:</span>
            <div class="ships own">
                
            <a href="javascript:" id="flip">Rotate</a>
            </div>
        </div>
        
        <div id="play"><a href="#section-game">Start Clash!</a></div>

    </nav>
    
    <br class="clearAll" />

    <div class="grid-container">
        <div class="grid "></div>
    </div>
</section>







<section id="game" class="invisible">
   
    <aside id="notifications">
        <div class="message"></div>
        <div id="show-own-holder"><a href="javascript:" class="show-own">Show me ! >></a></div>
            
        <div class="clearAll"></div>
        <div id="extra-info">  
            <div class="column1">
                <div class="grid-container-for-own"><div id="own-grid" class="grid"></div></div>
            </div>
            <div class="column2">
                <div>
                <dl>
                    <dt>Your Score</dt>
                    <dd id="own-score"></dd>
                    
                    <dt>Opponent</dt>
                    <dd id="remote-score"></dd>
                        
                </dl>
                </div>
            </div>

        </div>
        <div class="clearAll"></div>
    </aside>
    
    <div class="grid-container-for-remote"><div id="remote-grid" class="grid"></div></div>
    
    <div class="clearAll"></div>
     <nav>
        <ul>
            <li><a href="#section-profile">Admiral</a></li>
            <li><a href="#section-setup">Strategy</a></li>
            <li><a href="#section-game" id="restart">Restart</a></li>
        </ul>
        <div class="clearAll"></div>
    </nav>
</section>





    
    
</div>



<footer>
    
     <nav class="bottom">
        <ul>
            <li><a href="#section-scores">High Scores</a></li>
            <li><a class="version-switcher" href="<?php echo $this->Html->url(array('controller'=>'games','action'=>'index','device'=>'d'));?>">Desktop version</a></li>
        </ul>
    </nav>
    <p>This application was developed by Teddy Zeenny as a final assignment for the W3C Mobile Course (by <a href="http://philarcher.org/">Phil Archer</a> and <a href="http://www.waalweb.nl/">Frances de Waal</a>)</p>
    
</footer>

 <div id="win-popup">
     <h1>YOU WIN !</h1>
        
        <span>Your score: <span class="score"></span></span>
        
        <form action="<?php echo $this->Html->url(array('controller'=>'games','action'=>'submit_score'));?>" method="post">
            <input type="text" name="data[Score][name]" placeholder="Name" required="required" />
            
            <input type="hidden" name="data[Score][value]" />
            <input type="hidden" name="data[Score][admiral]" />
            
            <input type="submit" value="Submit Score" />
            
            <a href="javascript:">Close</a>
        </form>
        
    </div>
    

<div id="lose-popup">
    <h1>YOU LOSE !</h1>
    <div class="close"><a href="javascript:">Close</a></div>
</div>
    
<div id="overlay"></div>



