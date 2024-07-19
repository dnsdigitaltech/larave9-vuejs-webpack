<template>
    <div>
       <div class="content">
			<div class="container-fluid">
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <button class="_btn make_btn2" type="button">Add Tag</button></p>

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
			</div>
		</div>
    </div>
</template>
<script>
export default {
	async created() {
		const res = await this.callApi('post', 'app/create_tag', {tagName: 'testtag'});
		if(res.status==200){
			console.log(res)
		}else{
			console.log(res)
		}
	},
}
</script>