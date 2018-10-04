<template>
    <form v-on:submit.prevent="boardCreate" method="POST" class='wrap-form' role="form" enctype="multipart/form-data" >
        <div class="breadcrumb" style="" ><span class="left">
            <a href="/jobdiary" class='content-title' style="color:black; text-decoration: none;"><h2 style="color:black;" >글 작성</h2></a></span>
        </div>
        
        <hr>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">작성자</label>
            <input v-model="formData.name" type="text" class="form-control" placeholder="직상지" aria-label="직상지" aria-describedby="basic-addon1" required>
        </div>

        <hr>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">제목</label>
            <input v-model="formData.title" type="text" class="form-control" placeholder="제목" aria-label="제목" aria-describedby="basic-addon1" required>
        </div>

        <hr>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">내용</label>
            <textarea 
                v-model="formData.contents" 
                class="form-control" 
                placeholder="내용" 
                id="exampleFormControlTextarea1" 
                rows="6" 
                required>
            </textarea>
        </div>

        <hr>
        <div class='submit-btn'>
            <button type="submit" class="btn btn-outline-dark btn-lg" >확인</button><button type="button" class="btn btn-outline-dark btn-lg"  @click="$router.go(-1)">취소</button>
        </div>    
    </form>
</template>

<script>
// import axios from 'axios';

export default {
    head : {
        link: [{ 
            rel: "stylesheet", type: "text/css", href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'    
        }]
    },
    data() {
        return {
            formData : {
                title : null,
                contents : null,
                name : null
            }
        }
    },
    methods: {
        boardCreate() {
            var today = new Date(); 
            var formatData = this.formatDate(today);
            var addData = {
                id: this.$boards.length + 1,
                title : String(this.formData.title),
                content : String(this.formData.contents),
                name: String(this.formData.name),
                createDate : formatData
            }
            this.$boards.push(addData);
            this.$router.push('/boards')
        },
        formatDate(date) {
            var month = '' + (date.getMonth() + 1);
            var day = '' + date.getDate();
            var year = date.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        }
    },
    computed: {
     
    }
    
}
</script>
    
<style>

.wrap-form{
    position: relative;   
}
.breadcrumb{
    margin-top: 2%;
}
.submit-btn{
    position: relative;
}
.btn {
    width: 48%;
    margin:1%;
    float: center;
}
hr {
    margin-top : 2%;
    margin-bottom : 2%
}
</style>

