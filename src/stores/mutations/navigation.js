


export default {

	//获得初始化展示形式
	getMainContentDataStyle(state,data){



		state.mainContentDataStyle = data


	},




	//新建文件
	createFile(state){

		state.createDataArr = []
		state.createDataArr.push({ 
			//pid指向父级id
			pid: state.tierID,
			//文件名称
            name: '新建文件夹',
            //是否选中
            checked: false,
            //是否显示子级
            open:false,
            //是否显示重命名
            rename:true,
            //存子级数据
            childTreeNode:[]

        })
	},


	//复制文件
	cloneFile(state){


		state.mainContentData.forEach((item)=>{

			if(item.checked){
		
				state.mainContentData.push({

					id:item.id,
					//pid指向父级id
					pid: state.tierID,
					//文件名称
		            name: item.name + '-副本',
		            //是否选中
		            checked: false,
		            //是否显示子级
		            open:false,
		            //是否显示重命名
		            rename:true,
		            //存子级数据
		            childTreeNode:item.childTreeNode

					


				})
			}

			item.checked = false

		})

	
		state.checkAll = false;

		
	},



	//删除文件
	delectFlie(state){

		//不能使用filter过滤数据，使用splice删除
		// state.mainContentData.forEach((item,index)=>{
	 //            console.log(item);
		// 		if(item.checked){
		// 			// console.log(item);

		// 			console.log(index);
		// 			state.mainContentData.splice(index,1)

		// 			index--;

		// 			console.log(index);
		// 		}

				
				

	 //    })


	    for(var i = 0;i<state.mainContentData.length;i++){

	    		if(state.mainContentData[i].checked){

	    			state.mainContentData.splice(i,1)
	    			i--;

	    		}


	    }


	 //    if(state.crumbsData.length == 0){
		
		// 		state.allData = state.allData.filter((item)=>{
	            
		// 			return !item.checked

	 //    		})

	 //    		// state.mainContentData = state.allData

		// 		return;

		// }

		// findParentData(state.allData)
	 //    function findParentData(allData){

		// 		allData.forEach((item)=>{

		// 			if(state.crumbsData[state.crumbsData.length-1]==item){

		// 				state.tierData = item
		// 				console.log(state.tierData);

		// 			}else{

		// 				findParentData(item.childTreeNode)

		// 			}
	            
					

	 //    		})

	   //  		console.log(state.tierData);
				// state.tierData.childTreeNode = state.tierData.childTreeNode.filter((item)=>{
	            
				// 	return !item.checked

	   //  		})

	    		

			



		// }





	},



	//重命名
	reName(state){

		//统计被选中的数量
		let n=0;
		state.mainContentData.forEach((item,index)=>{
			if(item.checked){
				n++;
			}
		})

		//如果数量超过1个，则不能重命名
		if(n != 1){
			return;
		}else{
			state.mainContentData.forEach((item,index)=>{
				if(item.checked){

					//显示改名字的输入框
					item.rename = false

					//把修改之前的名字存起来
					state.reName = item.name

				}
			})	
		}
	},



	//修改展示形式为大图
	changeStyleLarge(state){


		state.mainContentDataStyle = true
		localStorage.setItem('mainContentDataStyle',JSON.stringify(state.mainContentDataStyle));
	},



	//修改展示形式为列表
	changeStyleList(state){

		state.mainContentDataStyle = false
		localStorage.setItem('mainContentDataStyle',JSON.stringify(state.mainContentDataStyle));


	}




	

}