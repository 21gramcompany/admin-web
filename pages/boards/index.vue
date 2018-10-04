<template>
    <div class='wrap-jobdiary'>
        <div class="breadcrumb" style="" ><span class="left">
            <a href="/boards" class='content-title' style="color:black; text-decoration: none;"><h2 style="color:black;" >Boards</h2></a></span>
        </div>
        
        <div class="bo_fx">
            <button @click="$router.push('/boards/new')" class="real-button btn btn-outline-dark btn-lg" >글쓰기</button>
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

.breadcrumb{
    margin-top: 2%;
}
.bo_fx a {
    color: #000 !important;
}

a {
    text-decoration: none !important;
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
    .diary-tbody-web {
        display:none
    }
    .real-button{
        width: 100%;
        display : block;
    }
}
    
</style>
