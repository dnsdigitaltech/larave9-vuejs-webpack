<template>
    <div>
       <div class="content">
			<div class="container-fluid">
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <button class="_btn make_btn2" type="button" @click="addModal=true">Add Tag</button></p>

					<div class="_overflow _table_div">
						<table class="_table">
							<tr>
								<th>ID</th>
								<th>Nome da tag</th>
								<th>Criado em</th>
								<th>Ação</th>
							</tr>
							<tr>
								<td>1</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<button class="_btn make_btn0" type="button">Edit</button>
									<button class="_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<!-- tag adding modal -->
				<Modal
					v-model="addModal"
					title="Add tag"
					:mask-closable="false"
					:closable="false"
					>
					<input v-model="data.tagName" placeholder="Adicionar tag" >
					<div class="footer-modificado">
						<Button type="default" @click="addModal=false">Fechar</Button>
						<Button class="_btn make_btn2" @click="addTag" :disabled="idAdding" :loading="idAdding">{{ idAdding ? 'Adicionando' : 'Adicionar' }}</Button>
					</div>
				</Modal>
			</div>
		</div>
    </div>
</template>
<script>
import { Modal } from 'bootstrap';

export default {
	
	data() {
		return {
			data: {
				tagName: ''
			},
			addModal: false,
			idAdding:false
		}
	},

	methods: {
		addTag(){
			if(this.data.tagName.trim()=='') return this.e('O nome da tag é obrigatório')
			const res = await this.callApi('post', 'app/create_tag', this.data)
			if(res.status===200){
				this.s('Tag Adicionada com sucesso')
			}else{
				this.swr()
			}
			
		}
	},
	// async created() {
	// 	const res = await this.callApi('post', 'app/create_tag', {tagName: 'testtag'});
	// 	if(res.status==200){
	// 		console.log(res)
	// 	}else{
	// 		console.log(res)
	// 	}
	//},
}
</script>