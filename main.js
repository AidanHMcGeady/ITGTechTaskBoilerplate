var ITGTechTask = /** @class */ (function () {
    function ITGTechTask() {
        this.previousUpdateTime = 0;
        this.backgroundImage = new Image();
        //Dial States
        this.DialStill = new Image();
        this.DialMoving = new Image();
        this.Incomplete = new Image();
        this.Complete = new Image();
        //Winnings Images
        this.Coins = new Image();
        this.Notes = new Image();
        this.Rings = new Image();
        this.Gold = new Image();
        this.Diamonds = new Image();
        this.GoldBar = new Image();
        //Safe States
        this.Closed = new Image();
        this.Open = new Image();
        //Screen States
        this.ScreenBackground = new Image();
        this.ScreenRed = new Image();
        this.ScreenGreen = new Image();
        //Marker States
        this.GreenMarker = new Image();
        this.RedMarker = new Image();
        //Star State
        this.WhiteStar = new Image();
        this.GreenStar = new Image();
        //Display State
        this.Panel = new Image();
        this.LEDS = new Image();
        this.SpinText = new Image();
        this.Spark = new Image();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.backgroundImage.src = "graphics/background_safe_minigame.png";
        this.backgroundImage.onload = this.update.bind(this);
        this.DialStill.src = "graphics/SpinDial1.png";
        this.DialMoving.src = "graphics/SpinDial1.png";
        this.Incomplete.src = "graphics/SpinDial1.png";
        this.Complete.src = "graphics/SpinDial1.png";
        this.DialStill.onload = this.update.bind(this);
        this.DialMoving.onload = this.update.bind(this);
        this.Incomplete.onload = this.update.bind(this);
        this.Complete.onload = this.update.bind(this);
        this.Coins.src = "graphics/SpinDial1.png";
        this.Notes.src = "graphics/SpinDial1.png";
        this.Rings.src = "graphics/SpinDial1.png";
        this.Gold.src = "graphics/SpinDial1.png";
        this.Diamonds.src = "graphics/SpinDial1.png";
        this.GoldBar.src = "graphics/SpinDial1.png";
        this.Coins.onload = this.update.bind(this);
        this.Notes.onload = this.update.bind(this);
        this.Rings.onload = this.update.bind(this);
        this.Gold.onload = this.update.bind(this);
        this.Diamonds.onload = this.update.bind(this);
        this.GoldBar.onload = this.update.bind(this);
        this.Closed.src = "graphics/SpinDial1.png";
        this.Open.src = "graphics/SpinDial1.png";
        this.Closed.onload = this.update.bind(this);
        this.Open.onload = this.update.bind(this);
        this.ScreenBackground.src = "graphics/SpinDial1.png";
        this.ScreenRed.src = "graphics/SpinDial1.png";
        this.ScreenGreen.src = "graphics/SpinDial1.png";
        this.ScreenBackground.onload = this.update.bind(this);
        this.ScreenRed.onload = this.update.bind(this);
        this.ScreenGreen.onload = this.update.bind(this);
        this.GreenMarker.src = "graphics/SpinDial1.png";
        this.RedMarker.src = "graphics/SpinDial1.png";
        this.GreenMarker.onload = this.update.bind(this);
        this.RedMarker.onload = this.update.bind(this);
        this.WhiteStar.src = "graphics/SpinDial1.png";
        this.GreenStar.src = "graphics/SpinDial1.png";
        this.WhiteStar.onload = this.update.bind(this);
        this.GreenStar.onload = this.update.bind(this);
        this.Panel.src = "graphics/SpinDial1.png";
        this.LEDS.src = "graphics/SpinDial1.png";
        this.SpinText.src = "graphics/SpinDial1.png";
        this.Spark.src = "graphics/SpinDial1.png";
        this.Panel.onload = this.update.bind(this);
        this.LEDS.onload = this.update.bind(this);
        this.SpinText.onload = this.update.bind(this);
        this.Spark.onload = this.update.bind(this);
    }
    // Main Game Loop
    ITGTechTask.prototype.update = function (currentTime) {
        var deltaTime = currentTime - this.previousUpdateTime;
        this.previousUpdateTime = currentTime;
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Draw the background image
        this.context.drawImage(this.backgroundImage, 0, 0);
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
        this.context.fillText("ITG Technical Task", Math.floor(Math.random() * (this.canvas.width)) + 1, Math.floor(Math.random() * this.canvas.height) + 1);
        window.requestAnimationFrame(this.update.bind(this));
    };
    return ITGTechTask;
}());
new ITGTechTask();
//# sourceMappingURL=main.js.map