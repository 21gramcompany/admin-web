<template>
    <div class='wrap-diary-detail'>
        <div class="section_wrap section_bottom_0">
            <div class="section_bottom">
                <div class="section-diary-title">
                    <h2 class='diary-title'>{{ detail.title }}</h2>
                </div>
            </div>

            <ul class="wt_box-web wt_box gray_color">
                <li>
                    <a>{{ detail.name }}</a>
                </li>								
                <li class="right">
                    <a><span>{{ detail.createDate }}</span></a>
                </li>
            </ul>

            <ul class="wt_box-real">
                <li>
                    <a>{{ detail.name }}</a>
                </li>
                <li>
                    <a class="real_box_date"><span>{{ detail.createDate }}</span></a>
                </li>
            </ul>
        </div>

        <div class="section_wrap section_border_0">                
            <div class="diary-content">
                {{ detail.contents }}
            </div>
        </div>

        <div class='submit-btn'>
            <button class="btn btn-outline-dark btn-lg" @click="beforePage()">목록</button>
            <button class="btn btn-outline-dark btn-lg" >수정</button>
            <button class="btn btn-outline-dark btn-lg"  @click="remove(detail.id)">삭제</button>
        </div>    
    </div>
</template>

<script>
    export default {
      head : {
        link: [{ 
            rel: "stylesheet", type: "text/css", href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'    
        }]
      },
      validate ({ params }) {
        return /^(\d+|new)$/.test(params.id);
      },
      data() {
        return {
          detail : this.$boards[this.$route.params.id-1]
        }
      },
      methods: {
        beforePage() {
            this.$router.go(-2)
        },
        remove(id) {
            const idx = this.$boards.findIndex( 
                function(item) {
                    return item.id === id;    
                }
            );
            var answer = confirm("정말 삭제 하시겠습니까?");
            if(answer) {
                this.$boards.splice(idx,1);
                return this.$router.go(-2);
            }
        }
      }
    };
</script>


<style scoped>

.section_bottom{
    position: relative;
    border: 1px solid #E7E7E7;
    margin-top: 2%;
}
.section-diary-title{
    padding: 2%;
}
.diary-title{
    font-size: 1.5rem;
}
.wrap-diary-detail, .wrap-diary-detail a {    
    text-decoration: none !important;
    color: #4e4e4e !important;
}
.wt_box {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 0;
}
.wt_box li a {
    display: inline-block;
    padding: 10px 15px;
}

.wt_box li.right {
    float: right;
    border: 0;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}
.wt_box:after {
    content: "";
    display: block;
    clear: both;
}
.wt_box li {
    float: left;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
}
.gray_color {
    background: #fcfcfc;
}

.diary-content{
    border: 1px solid #ddd;
    position: relative;
    padding: 4%;
    height: 300px;
}
    
.section_border_0 {
    border-top: 0;
}

div {
    display: block;
}

.diary-footer{
    border-top: 0;
    border: 1px solid #E7E7E7
}

div.submit-btn {
    text-align: right;
    padding-top: 10px;
}
.btn-group-lg>.btn, .btn-lg {
    height: 42px !important;
    width: 65px !important; 
    margin: 0 !important; 
}
@media (max-width: 768px) {
    .wt_box-web {
        display:none !important;
    }
    .wt_box-real {
        display:show;
        position: relative;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        list-style: none;
        padding: 0;
        margin: 0;
        
    }
    .wt_box-real {
        display: block;
    }
    
    .wt_box-real li a {
        display: inline-block;
        padding: 10px 15px;
        font-size:0.7rem;
        border-right: 1px solid #ddd;
    }

    .wt_box-real li {
        clear: both;
        display: inline;
        float: none;
        border: 0;
    }        
    .real_box_date{
        width:124px;
        text-align: center;
        border-right: 0 !important;
    }
}
@media (min-width: 768px) {
    .wt_box-real {
        display:none;
    }
}
</style>
