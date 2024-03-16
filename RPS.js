$(document).ready(function() { 
    $("img").click(function() { 
        let op1 = $(".op1");
        let op2 = $(".op2");   

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
        }, 1000);

    });
});
