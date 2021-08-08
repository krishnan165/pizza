var menu_list_array = ["Veg Margherita Pizza","Chicken Thandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Duluxe Veggie Pizza","Veg Extravaganza Pizza"];





function add_top()
{
    
    
    var new_item=document.getElementById("add_item").value;
    menu_list_array.push(new_item);
    getmenu();


}
function show_item()
{
    var htmldata;
    var list=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var j=0;j<menu_list_array.length;j++)
    {
        htmldata='<div class="card">'+'<img src="pizzaImg.png">'+menu_list_array[j]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}
function getmenu()
    {
        menu_list_array.sort();
        console.log(menu_list_array);
  
        var display_menu_list_array=[];
        var  menu_list_array_nc=[];

        var length_menu_list_array= menu_list_array.length;
        console.log(length_menu_list_array);
        for(u=0; u<length_menu_list_array; u++)
        {
            display_menu_list_array.push("<h3>"+menu_list_array[u]+"</h3>");
            console.log( display_menu_list_array);
        }

        
        var remove_commas=display_menu_list_array.join(" ");
        console.log(remove_commas);
        document.getElementById("display_menu").innerHTML=remove_commas;
      
    }

