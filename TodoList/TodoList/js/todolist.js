
$(function(){
	var todoDate=[];
	load();
	

	$("#title").on("keydown",function(ev){
       if(ev.keyCode===13){

       	if($(this).val()===""){
       		alert("请输入事项内容！");

       	}else{
       		//读取本地数据

       		todoDate=getDate();
       		//将文本框中数据追加到自定义数组中
       		todoDate.push({title:$(this).val(),done:false});
       		//将更新后的数据保存到本地存储
       		saveDate(todoDate);
       		load();
       		/*$(this).val("");*/



       	}

       }

	});
	//点击A删除对应页面元素
	//页面元素动态添加需要委托
	$("#todolist,#donelist").on("click","a",function(){
		//删除本地存储数据
		//获取本地数据
		var date=getDate();
		var index=$(this).attr("id");
		
		date.splice(index,1);
		console.log(date);
		saveDate(date);
		load();
		//删除数组中对应索引的元素
		//将更新后的数组保存到本地存储

	});
	//3.
	$("#todolist,#donelist").on("click","input[type=checkbox]",function(){
       //先读取本地存储数据
       var date=getDate();
       var index=$(this).siblings("a").attr("id");
       date[index].done=$(this).prop("checked");
       console.log(date[index].done);
       saveDate(date);
       load();

	});
	//4.删除所有元素
      $("#clear").click(function(){
        var date =getDate();
        date.splice(0);
        saveDate(date);
        load();
      });

	 function getDate(){
	 	var date=localStorage.getItem("todolist");
	 	if(date !==null){
	 		//判断读取数据是否为空
	 		//因为读取出来的数据为字符串格式需要转换
	 		return  JSON.parse(date);
	 	}else{
	 		return [];
	 	}
	 }
	 function saveDate(date){
	 	//setItem(key,value)
	 	localStorage.setItem("todolist",JSON.stringify(date));

	 }
	 function load(){
	 	$("#todolist,#donelist").empty();
	 	var todoCount=0;
	 	var doneCount=0;
	 	//读取本地存储数据
	 	var date=getDate();
	 	
	 	//根据读取数据，生成对应的页面元素，添加到页面上
	 	//通过遍历each()完成
	 	$(date).each(function(index,element){
          //遍历一个生成一个li
         // $("<li><input type=checkbox><p>"+element.title +"</p><a href='javascript:;'></a>></li>").prependTo($("#todolist"));
            
             //$("<li><input type=checkbox><p>"+element.title +"</p><a href='javascript:;' id="+index+" ></a>></li>").prependTo($("#todolist"));
	        if(element.done==true){
	        	doneCount++;
	        	$("<li><input type=checkbox checked='checked'><p>"+element.title +"</p><a href='javascript:;' id="+index+"></a></li>").prependTo($("#donelist"));
             }else{
             	todoCount++;
             	$("<li><input type=checkbox><p>"+element.title +"</p><a href='javascript:;' id="+index+"></a></li>").prependTo($("#todolist"));
	        }   	
	  	});
	  	$("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
	 }

});