/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.main = function (args) {
        var scan = new java.util.Scanner(java.lang.System["in"]);
        console.info("Welcome to MadLibs. Please choose which story you would like.");
        console.info("Pizza Party, A Gingerbread Man");
        var story = scan.nextLine();
        if (story.toLowerCase() === ("pizza party")) {
            console.info("Things (plural):");
            var piz1 = scan.nextLine();
            console.info("Adjective:");
            var piz2 = scan.nextLine();
            console.info("Song Title:");
            var piz3 = scan.nextLine();
            console.info("A Celebrity:");
            var piz4 = scan.nextLine();
            console.info("Feeling:");
            var piz5 = scan.nextLine();
            console.info("Verb:");
            var piz6 = scan.nextLine();
            console.info("A Place");
            var piz7 = scan.nextLine();
            console.info("Food:");
            var piz8 = scan.nextLine();
            console.info("Things (plural):");
            var piz9 = scan.nextLine();
            console.info("Person:");
            var piz10 = scan.nextLine();
            console.info("I just got back from a pizza party with " + piz10 + " . Can you believe we got to eat " + piz2 + " pizza in " + piz7 + "?! Everyone got to choose their own toppings. I made \'" + piz8 + " and " + piz1 + "\' pizza, which is my favorite! They even stuffed the crust with " + piz9 + ". How " + piz5 + "! If that wasn\'t good enough already, " + piz4 + " was there singing " + piz3 + ". I was so inspired by the music, I had to get up out of my seat and " + piz6 + ".");
        }
        if (story.toLowerCase() === ("a gingerbread man")) {
            console.info("Place:");
            var gin1 = scan.nextLine();
            console.info("Adjective:");
            var gin2 = scan.nextLine();
            console.info("Verb (action):");
            var gin3 = scan.nextLine();
            console.info("Food:");
            var gin4 = scan.nextLine();
            console.info("Things (plural):");
            var gin5 = scan.nextLine();
            console.info("Profession:");
            var gin6 = scan.nextLine();
            console.info("Thing:");
            var gin7 = scan.nextLine();
            console.info("Color:");
            var gin8 = scan.nextLine();
            console.info("Celebrity or someone famous:");
            var gin9 = scan.nextLine();
            console.info("Animal:");
            var gin10 = scan.nextLine();
            console.info("There once was a gingerbread man who had two " + gin5 + " for eyes and a " + gin4 + " for a nose. He always said, \'" + gin3 + " as fast as you can, you can\'t catch me I\'m the gingerbread man.\' One day he ran past a " + gin2 + " " + gin6 + ", but they couldn\'t catch him. He kept running until he passed a " + gin10 + ", but they couldn\'t catch him either. Suddenly, he came across a river near " + gin1 + ". How would he cross? Then he saw a " + gin8 + " " + gin7 + " floating by. He jumped on it, but it was actually " + gin9 + "--who just so happened to love cookies");
        }
        if (story.toLowerCase() === ("me")) {
            console.info("fee");
        }
        if (story.toLowerCase() === ("queen")) {
            console.info("cheese");
        }
    };
    return HelloWorld;
}());
HelloWorld["__class"] = "HelloWorld";
HelloWorld.main(null);
