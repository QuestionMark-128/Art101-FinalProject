$(document).ready(function () {
    $("#fishingButton").click(function () {
        $("#fishing").show();
        $("#shop").show();
        $("#fishingButton").hide();
    });
    
    $("#shop").click(function () {
        $("#shopPanel").css("display", "flex");
    });

    $("#closePanel").click(function () {
        $("#shopPanel").hide();

        $("#shopContent").text("Welcome to the Prawn Shop! Select an item.");
    });

    $("#buyRod").click(function () {
        $("#shopContent").text("A stronger fishing rod, increasing your chance to catch fish!");
    });

    $("#buyBait").click(function () {
        $("#shopContent").text("Beter bait to attract fish and increases your chances of encountering them.");
    });

    $("#buyHook").click(function () {
        $("#shopContent").text("A stronger hook that lessens the chance for a fish to escape!");
    });

    $("#buyBox").click(function () {
        $("#shopContent").text("A storage box lets you store more fish.");
    });

    $("#sellFish").click(function () {
        $("#shopContent").text("Sell your fish here to earn money!");
    });
});