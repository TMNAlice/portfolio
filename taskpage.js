/*needs addition and rename*/
let datalist = [
{
    "id": "1",
    "name": "one",
    "nodes": 
        [
        {"id": "3","name": "one.one", "nodes": ""},
        {"id": "4","name": "one.two", "nodes": ""}
        ]
},

{
    "id": "2",
    "name": "two",
    "nodes": 
        [
        {"id": "3","name": "two.one", "nodes": ""},
        {"id": "4","name": "two.two", "nodes": ""}
        ]
},

{
    "id": "5",
    "name": "three",
    "nodes": ""
}
]
var btns = $("<button id=\"delete\">delete</input><button id=\"edit\">edit</button>");
var now = "0";
var old = "0";
var tree = "";

function setListItems (tt, list){
    tt += "<ul>";
    let i = 0;
    let leaf = "";
    while (i < list.length){
        leaf += "<li><p>" + list[i].name +  "</p>";
        if (list[i].nodes != 0)
            leaf =  setListItems(leaf, list[i].nodes);
        i += 1;
    };
    tt += leaf + "</ul>";
    i = 0;
    return tt;
};

$(document).ready(function () {
    document.getElementById("treeview").innerHTML = "<a>root</a>" + setListItems(tree, datalist);
    $(this).find("li").addClass("parent");
    $(this).find("p").append(btns.clone(true));

    $("#reset").click(function (e) {
        location.reload();
    });
    
    $("#treeview .parent").click(function (e) {
        e.stopPropagation();
        $(this).find(">ul").toggle("slow");
        if ($(this).hasClass("close"))
            $(this).removeClass("close");
        else
            $(this).addClass("close");
    });

    $("p").on("click","#delete", function () {
        console.log("delete");
        old = $(this).closest('li').text();
        console.log (old + " deleted");
        $(this).closest('li').remove();
    });

    $("p").on("click", "#edit", function () {
        console.log("edit");
        now = $('input').val();
        $(this).closest('p').text(now).append(btns.clone(true));

    });
    $(".create").click(function(e){
        now = $('input').val;

    });
});
