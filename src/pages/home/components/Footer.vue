<template>
    <div class="footer-main">
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="hidden">
                    1
                </div>
            </el-col>
            <el-col :span="7">
                <div class="about-us">
                        <div>
                            <span>关于我们</span>
                            <span>友情链接</span>
                            <span>客服热线</span>
                        </div>
                        <div class="rj-logo">
                            <img src="@/assets/home/header_logo.png">
                        </div>
                        <div class="rj-sign">
                            <a class="footer-sign" href="http://www.beian.miit.gov.cn" rel="nofollow" target="_blank">©
                            2020
                            蜀ICP备18000229号 </a>
                            <div>
                                <img src="@/assets/home/public_logo.png">
                            <a class="footer-sign" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000164" rel="nofollow" target="_blank">川公网安备 51011402000164号 </a>
                            </div>
                        </div>
                    </div>
            </el-col>
            <el-col :span="8">
                <div class="promote">
                    <div class="promote-img">
                        <img src="@/assets/home/qyx.png">
                        <span>企优享</span>
                    </div>
                    <div class="promote-img">
                        <img src="https://zhy-myblog.oss-cn-shenzhen.aliyuncs.com/static/img/weixin.jpg">
                        <span>关注微信公众号</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
    .footer-main{
        overflow: hidden;
        margin-top: 40px;
        background: #212121;
        padding-bottom: 100px;
    }
        .hidden{
            color: #212121;
        }
        .about-us{
            margin-top: 80px;
        }
            .about-us span{
                display: inline-block;
                color: #aeaeae;
                padding: 0 0 45px;
                font-size: 20px;
                margin-right: 20px;
            }
            .about-us img{
                width: 120px;
            }
            .rj-logo{
                display: inline-block;
            }
            .rj-sign{
                display: inline-block;
                transform: translateY(-10px);
            }
                .footer-sign{
                    color: #fff;
                    text-decoration: none;
                    font-size:12px
                }
                .rj-sign img{
                    width: 12px;
                }
        .promote{
            margin-top: 80px;
            text-align: center;
        }
            .promote-img{
                display: inline-block;
                margin-right: 25px;
            }
                .promote-img img{
                    width: 100px;
                    border-radius: 5px;
                }
                .promote-img span{
                    display: block;
                    color: #aeaeae;
                    font-size: 14px;
                    margin-top: 10px;
                }
</style>
