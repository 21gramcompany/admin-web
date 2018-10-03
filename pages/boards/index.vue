<template>
    <div class='wrap-jobdiary'>
        <div class="breadcrumb" style="" ><span class="left">
            <a href="/boards" class='content-title' style="color:black; text-decoration: none;"><h2 style="color:black;" >21그램 게시판</h2></a></span>
        </div>
        
        <div class="bo_fx">
            <button @click="$router.push('/boards/new')" class="real-button btn btn-outline-dark btn-lg" >글 작성</button>
        </div>

        <table class ='table table-striped'>
            <thead class='diary-head'>
                <tr>
                    <th>번호</th>
                    <th>날짜</th>
                    <th>작성자</th>
                    <th>제목</th>
                </tr>
            </thead>

            <tbody>
                <tr class='diary-tbody-web diary-tbody-tr' v-for='(  item,  index ) in boards' :key='item._id'>
                    <td id='diary-tbody-index'>{{ index+1  }}</td>
                    <td id='diary-tbody-title' ><a  href='#' style='color:black; text-decoration:none;' @click='detailView(item)'>{{ item.title }}</a></td>
                    <td id='diary-tbody-author'>{{ item.name }}</td>
                    <td id='diary-tbody-date'>{{ item.createDate }}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
    // import axios from 'axios'
    import boards from '../../common/mock/boards';
    
    export default {
        head : {
            link: [{ 
                rel: "stylesheet", type: "text/css", href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'    
            }]
        },
        data() {
            return {
                boards
            }
        },
        methods : {
            detailView(item) {
                this.$router.push({ path: '/boards/'+item.id, params: { _id: item.id-1 }});
            }
        }
    }
</script>

<style>

body {
    background-color: white;
}
.breadcrumb{
    margin-top: 2%;
}
.bo_fx a {
    color: #000 !important;
}
a.btn_b01 {
    display: inline-block;
    padding: 7px;
    border: 1px solid #d9ded9;
    background: #f2f5f9;
    vertical-align: middle;
}
a {
    text-decoration: none !important;
}
#bo_list_total{
    display: inline;
}   
.bo_fx{
    box-sizing: inherit;
}
.real-button{
    margin-bottom: 1%; 
    float: right;
}
.btn {
    width: 20%;
    margin: 1%;
}

@media (min-width: 768px) {
    .diary-tbody-real {
        display:none
    }
}
@media (max-width: 768px) {
    .diary-head {
        display: none;
    }
    .diary-tbody-tr td {
        display: inline;
        font-size: 0.6rem;
        border: 0px;
    }
    #diary-tbody-index{
        display: none;
    }
    .diary-tbody-tr{
        display:block;
    }
    #diary-tbody-title{
        display:block;
        font-size: 0.9rem;
        font-weight: bold;
        width: 300px;
    }
    #diary-tbody-author{
        height:30px;
    }
    .diary-page{
        display: none;
    }
    .diary-tbody-web {
        display:none
    }
    .real-button{
        width: 100%;
        display : block;
    }
}
    
</style>
