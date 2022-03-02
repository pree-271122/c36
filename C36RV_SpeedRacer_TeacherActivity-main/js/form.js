class Form{
    constructor(){
        //CREATE VARIABLES FOR FORM
        this.input= createInput("").attribute("placeholder","Enter you name");
        this.playButton = createButton("PLAY");
        this.titleImg = createImg("./assets/title.png");
        this.greeting = createElement("h2")
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
    setElementsPosition() {
        this.titleImg.position(120,50);
        this.input.position(width / 2 - 110 , height / 2 - 80);
        this.playButton.position(width / 2 - 90 , height / 2 - 20);
        this.greeting.position(width / 2 - 300 , height / 2 - 100);
      }
      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }
      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }
      handleMousePressed() {

        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
        });
      }  
}