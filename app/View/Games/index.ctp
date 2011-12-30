<?php
/*
$this->Html->css('style',null,array('inline'=>false));
$this->Html->css('info',null,array('inline'=>false));
$this->Html->css('profile',null,array('inline'=>false));
$this->Html->css('setup',null,array('inline'=>false));
$this->Html->css('game',null,array('inline'=>false));
 */

$this->Html->css('desktop',null,array('inline'=>false));
?>

<header class="big">
    <?php echo $this->Html->image('title.png',array('alt'=>'Logo of Clash of the Browsers','width'=>256,'height'=>80));?>
   
    <!--<hgroup>
        <h1>CLASH</h1>
        <h2><small>OF THE </small><em>BROWSERS</em></h2>
    </hgroup>
    -->
    
     <nav class="top">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section-instructions">How to Play</a></li>
            <li><a href="#section-scores">High Scores</a></li>
            <li><a class="version-switcher" href="<?php echo $this->Html->url(array('controller'=>'games','action'=>'index','device'=>'m'));?>">Mobile Version</a></li>
        </ul>
    </nav>
        
</header>
<div class="clearAll"></div>
    


<div id="container">
    
<section id="info" class="invisible" >
    
    <div class="column1">
        <nav>
            <ul>
                
                <li id="new_game"><a href="#section-profile">New Game</a></li>
                <li id="resume"><a href="#section-game" >Resume Game</a></li>

            </ul>
            <div class="clearAll"></div>
        </nav>
    
    <article class="how-to">
        
        <h1><a href="#section-instructions">How to Play</a></h1>
        
        <p>
            Clash of the Browsers is a "geeky" twist of the famous strategic game <a href="http://en.wikipedia.org/wiki/Battleship_(game)">Battleship</a>.
        </p>
        <p>
            It is a two player game (in this case it is you against the computer).  The purpose is to sink all of your opponent's ships.
            Click on new game to start, then follow these steps...<a href="#section-instructions">Read more</a>
            
        </p>
        
    </article>
    </div>
    
    
    <article class="high-scores" >
        <h1><a href="#section-scores">High Scores</a></h1>
        <ul>
            
        </ul>
        
    </article>
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
            
        </ul>
       </article>
</section>



<section id="profile" class="invisible">
   
    <article>
        <h1>Select your Admiral</h1>

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
    

    <aside class="sidebar column1">
        <nav>
            <ul>
                <li><a href="#section-profile">Admiral</a></li>
                <li><a href="javascript:" class="selected">Strategy</a></li>
                <li><a href="javascript:" class="disabled">Restart</a></li>
            </ul>
        </nav>
        
    </aside>
        
    
    <div class="column2">
       

         <div id="ship-picker">
            <span class="hint">Click on the grid where you wish to place this ship:</span>
            <div class="ships own">

            <a href="javascript:" id="flip">Rotate</a>
            </div>
        </div>
        
        
         <div class="column2-1">
            <div class="grid-container">
            
             <div class="grid "> </div>
            </div>
    
        </div>
   
        <div class="column2-2">
            
              <div id="play"><a href="#section-game">Start Clash!</a></div>
    
               <nav class="actions">
                <ul>
                    <li><a href="javascript:" id="auto-fill">Auto place</a></li>
                    <li><a href="javascript:" id="clear-ships">Clear</a></li>
                </ul>

            </nav>
        </div>
       
      

      
        
     </div>
</section>







<section id="game" class="invisible">
    
    <aside class="sidebar main-column1">
        <nav>
            <ul>
                <li><a href="#section-profile">Admiral</a></li>
                <li><a href="#section-setup" >Strategy</a></li>
                <li><a href="#section-game" id="restart">Restart</a></li>
            </ul>
        </nav>
        
    </aside>
    
    
    <div class="main-column2">
        
        
        
    <div id="notifications">
            <div class="message"></div>

            <div class="clearAll"></div>
            
     </div>
        
     <div class="main-column2-1">
        
        <div class="grid-container-for-remote"><div id="remote-grid" class="grid"></div></div>
    
    </div>

     
        <aside class="main-column2-2" id="extra-info">  
        
            
        <div>
            <dl>
                <dt>Your Score</dt>
                <dd id="own-score"></dd>

                <dt>Opponent</dt>
                <dd id="remote-score"></dd>

            </dl>
        </div>
            
        <div class="grid-container-for-own"><div id="own-grid" class="grid"></div></div>


       
        

        </aside>
    <div class="clearAll"></div>
       



        
        
    </div>
    
    
   
    
    
</section>

    
    
</div>



<footer>
    
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



