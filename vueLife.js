var Test={
			template:`
				<div>
					我是Test组件,{{msg}}
					<button @click="msg+='1'">msg+1</button>
				</div>
			`,
			data(){
				return {
					msg:'hello Test'
				}
			},
			// 组件创建前
			beforeCreate(){
				console.log('组件创建前')
				console.log(this.msg)
			},
			// 组件创建后
			created(){
				console.log('组件创建后')
				console.log(this.msg)
			},
			// DOM挂载前
			beforeMount(){
				console.log('DOM挂载前')
				console.log(document.body.innerHTML)
			},
			// DOM挂载后
			mounted(){
				console.log('DOM挂载后')
				console.log(document.body.innerHTML)
			},
			// 数据更新前
			beforeUpdate(){
				console.log('数据更新前')
				console.log(document.body.innerHTML)

			},
			// 数据更新后
			updated(){
				console.log('数据更新后')
				console.log(document.body.innerHTML)

			},
			beforeDestroy(){
				console.log('销毁前')
			},
			destroyed(){
				console.log('销毁后')
			},
			deactivated(){
				console.log('组件停用')
			},
			activated(){
				console.log('组件激活')
			}
		}
		new Vue({
			el:'#app',
			components:{
				Test
			},
			template:`
				<div>
					<keep-alive><test v-if='testShow'></test></keep-alive>
					<button @click='dest'>销毁组件</button>
				</div>
			`,
			data(){
				return {
					testShow:true
				}
			},
			methods:{
				dest(){
					this.testShow=!this.testShow
				}
			}
		})