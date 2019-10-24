<template>
	<div class="record-form-container">
		<el-form label-position="left" label-width="100px" ref="weeklyRecord">
			<el-form-item label="몸무게(Kg) : " label-suffix="Kg">
				<el-input v-model="formData.weight"></el-input>
			</el-form-item>
			<el-form-item label="허리둘레(cm) :">
				<el-input v-model="formData.waistCircumference"
				></el-input>
			</el-form-item>
		</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeDialog">Cancel</el-button>
				<el-button type="primary" @click="dataConfirm($event)">Confirm</el-button>
			</span>
	</div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
    props : [],
    data(){
			return{
       formData: {
          weight :  '',
          waistCircumference : '',
        }
			}
    },
    computed:{
			...mapGetters([
				'BMI','ABSI','BMR'
			]),

    },
    methods : {
    dataConfirm(event){
				this.$store.commit('refreshWeeklyData', this.formData);
				this.formData.weight = ""
				this.formData.waistCircumference = ""
				this.$emit('close-dialog')
		},
		closeDialog(event){
				this.$emit('close-dialog')
		}
    },
    mounted(){


    }
}
</script>
<style lang="scss" scoped>
.el-form-item__content{
	display : flex;
}
</style>