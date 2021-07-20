class ITGTechTask
{
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private previousUpdateTime: number = 0;

    private backgroundImage: HTMLImageElement = new Image();

    //Dial States
    private DialStill: HTMLImageElement = new Image();
    private DialMoving: HTMLImageElement = new Image();
    private Incomplete: HTMLImageElement = new Image();
    private Complete: HTMLImageElement = new Image();

    //Winnings Images
    private Coins: HTMLImageElement = new Image();
    private Notes: HTMLImageElement = new Image();
    private Rings: HTMLImageElement = new Image();
    private Gold: HTMLImageElement = new Image();
    private Diamonds: HTMLImageElement = new Image();
    private GoldBar: HTMLImageElement = new Image();

    //Safe States
    private Closed: HTMLImageElement = new Image();
    private Open: HTMLImageElement = new Image();

    //Screen States
    private ScreenBackground: HTMLImageElement = new Image();
    private ScreenRed: HTMLImageElement = new Image();
    private ScreenGreen: HTMLImageElement = new Image();

    //Marker States
    private GreenMarker: HTMLImageElement = new Image();
    private RedMarker: HTMLImageElement = new Image();

    //Star State
    private WhiteStar: HTMLImageElement = new Image();
    private GreenStar: HTMLImageElement = new Image();

    //Display State
    private Panel: HTMLImageElement = new Image();
    private LEDS: HTMLImageElement = new Image();
    private SpinText: HTMLImageElement = new Image();
    private Spark: HTMLImageElement = new Image();

    constructor()
    {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");

        this.backgroundImage.src = "graphics/background_safe_minigame.png";
        this.backgroundImage.onload = this.update.bind( this );

        this.DialStill.src = "graphics/SpinDial1.png";    
        this.DialMoving.src = "graphics/SpinDial1.png";
        this.Incomplete.src = "graphics/SpinDial1.png";
        this.Complete.src = "graphics/SpinDial1.png";
        this.DialStill.onload = this.update.bind( this );
        this.DialMoving.onload = this.update.bind( this );
        this.Incomplete.onload = this.update.bind( this );
        this.Complete.onload = this.update.bind( this );

        this.Coins.src = "graphics/SpinDial1.png";
        this.Notes.src = "graphics/SpinDial1.png";
        this.Rings.src = "graphics/SpinDial1.png";
        this.Gold.src = "graphics/SpinDial1.png";
        this.Diamonds.src = "graphics/SpinDial1.png";        
        this.GoldBar.src = "graphics/SpinDial1.png";
        this.Coins.onload = this.update.bind( this );
        this.Notes.onload = this.update.bind( this );
        this.Rings.onload = this.update.bind( this );
        this.Gold.onload = this.update.bind( this );
        this.Diamonds.onload = this.update.bind( this );
        this.GoldBar.onload = this.update.bind( this );

        this.Closed.src = "graphics/SpinDial1.png";
        this.Open.src = "graphics/SpinDial1.png";
        this.Closed.onload = this.update.bind( this );
        this.Open.onload = this.update.bind( this );

        this.ScreenBackground.src = "graphics/SpinDial1.png";
        this.ScreenRed.src = "graphics/SpinDial1.png";
        this.ScreenGreen.src = "graphics/SpinDial1.png";
        this.ScreenBackground.onload = this.update.bind( this );
        this.ScreenRed.onload = this.update.bind( this );
        this.ScreenGreen.onload = this.update.bind( this );

        this.GreenMarker.src = "graphics/SpinDial1.png";
        this.RedMarker.src = "graphics/SpinDial1.png";
        this.GreenMarker.onload = this.update.bind( this );
        this.RedMarker.onload = this.update.bind( this );

        this.WhiteStar.src = "graphics/SpinDial1.png";
        this.GreenStar.src = "graphics/SpinDial1.png";
        this.WhiteStar.onload = this.update.bind( this );
        this.GreenStar.onload = this.update.bind( this );

        this.Panel.src = "graphics/SpinDial1.png";
        this.LEDS.src = "graphics/SpinDial1.png";
        this.SpinText.src = "graphics/SpinDial1.png";
        this.Spark.src = "graphics/SpinDial1.png";    
        this.Panel.onload = this.update.bind( this );
        this.LEDS.onload = this.update.bind( this );
        this.SpinText.onload = this.update.bind( this );
        this.Spark.onload = this.update.bind( this );    
    }

    // Main Game Loop
    public update( currentTime: number ): void
    {
        const deltaTime: number = currentTime - this.previousUpdateTime;
        this.previousUpdateTime = currentTime;

        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the background image
        this.context.drawImage( this.backgroundImage, 0, 0 );
        
        //Draw Starting Images
        this.context.drawImage(this.DialStill, 0, 0);

        this.context.drawImage(this.LEDS, 0, 0);
        this.context.drawImage(this.ScreenBackground, 0, 0);

        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);
        this.context.drawImage(this.Closed, 0, 0);

        // Draw some text - REMOVE THIS LATER!
        this.context.font = "30px Arial";
        this.context.fillText("ITG Technical Task",
            Math.floor(Math.random() * (this.canvas.width)) + 1,
            Math.floor(Math.random() * this.canvas.height) + 1);

        window.requestAnimationFrame( this.update.bind( this ) )
    }
}

new ITGTechTask();