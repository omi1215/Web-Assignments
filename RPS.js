$(document).ready(function() { 
    $("img").click(function() { 
        let op1 = $(".op1");
        let op2 = $(".op2");   
        let str = "";
        op1.animate({ rotate: '+=30deg' }, 500)
            .animate({ rotate: '-=60deg' }, 500)
            .animate({ rotate: '+=30deg' }, 500);

        op2.animate({ rotate: '-=30deg' }, 500)
            .animate({ rotate: '+=60deg' }, 500)
            .animate({ rotate: '-=30deg' }, 500);


        let name = "";
        switch($(this).attr("id")) {
            case "r":
                name = "RPS-Assets/rock.png";
                break;
            case "p":
                name = "RPS-Assets/paper.png";
                break;
            case "s":
                name = "RPS-Assets/scissors.png";
                break;
            default:
                name = "";
        }

        let pc = Math.floor(Math.random() * 3);
        let pcImage = "";
        switch(pc) {
            case 0:
                pcImage = "RPS-Assets/rock.png";
                break;
            case 1:
                pcImage = "RPS-Assets/paper.png";
                break;
            case 2:
                pcImage = "RPS-Assets/scissors.png";
                break;
            default:
                pcImage = "";
        }

        setTimeout(function() {
            op1.find('img').attr("src", name);
            op2.find('img').attr("src", pcImage);
            if(name == "RPS-Assets/rock.png" && pcImage == "RPS-Assets/scissors.png")
            {
                 str = "You Win!"
            }
            else if(name == "RPS-Assets/paper.png" && pcImage == "RPS-Assets/rock.png")
            {
                 str = "You Win!"
            }
            else if(name == "RPS-Assets/scissors.png" && pcImage == "RPS-Assets/paper.png")
            {
                 str = "You Win!"
            }
            else if(name == "RPS-Assets/scissors.png" && pcImage == "RPS-Assets/scissors.png")
            {
                 str = "Draw!"
            }
            else if(name == "RPS-Assets/paper.png" && pcImage == "RPS-Assets/paper.png")
            {
                 str = "Draw!"
            }
            else if(name == "RPS-Assets/rock.png" && pcImage == "RPS-Assets/rock.png")
            {
                 str = "Draw!"
            }
            else{
                 str = "You Lose!"
            }
            
            var $paragraph = $("<p></p>").text(str);
            $(".winner").empty().append($paragraph);
        }, 1000);
    });
});
